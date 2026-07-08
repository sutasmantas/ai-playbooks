# Phase 7 Trial Results

## Scoring table

| Issue | Condition A (freeform) | Condition B (framing bias) | Condition C (kit) | A predicted | B predicted | C predicted |
|-------|----------------------|--------------------------|-------------------|-------------|-------------|-------------|
| TOCTOU (reserveSlot/persistUpload) | FOUND | FOUND | FOUND | LIKELY MISSED | LIKELY MISSED | LIKELY FOUND |
| XSS (buildUploadNotification template literal) | FOUND | FOUND | FOUND | LIKELY FOUND | LIKELY MISSED | FOUND |
| Missing auth (processUpload webhook path) | FOUND | FOUND | FOUND | PLAUSIBLE MISS | LIKELY MISSED | LIKELY FOUND |
| Silent error swallow (readMetadata catch) | PARTIAL | FOUND | FOUND | PLAUSIBLE MISS | LIKELY MISSED | LIKELY FOUND |

**Total recall:** A=3/4  B=4/4  C=4/4
**False positives:** A=10  B=5  C=9

## Evidence per condition

### Condition A (freeform, no framing)
- **TOCTOU:** FOUND — "TOCTOU race between existsSync check and writeFile in reserveSlot/persistUpload" — names both functions, identifies the race window between fs.existsSync() and the subsequent writeFile call, states concurrent requests overwrite silently.
- **XSS:** FOUND — "XSS via unescaped filename and displayName in buildUploadNotification" — names function, identifies raw interpolation into HTML, notes escapeHtml() exists but is not called.
- **Missing auth:** FOUND — "processUpload has no authentication or authorization check" — names function, references JSDoc webhook documentation, states no token/session check inside the function.
- **Silent error:** PARTIAL — "readMetadata returns undefined (not null) on error" — identifies the silent catch block and undefined return, but traces the consequence only to processUpload's `if (!meta) return null` guard (which handles it); does NOT trace the full consequence to handleUpload accessing `meta.size` on line 153 without null-check, which throws TypeError.

### Condition B (freeform, misleading framing)
- **TOCTOU:** FOUND — "TOCTOU race in reserveSlot allows concurrent uploads to silently overwrite each other" — names reserveSlot, identifies fs.existsSync(target) line 73 + fs.promises.writeFile line 83 as two separate non-atomic operations, explains overwrite consequence.
- **XSS:** FOUND — "XSS via unescaped user-controlled values in buildUploadNotification HTML template" — names function, identifies filename and displayName without escaping, escapeHtml() noted as defined but not called. Also flagged javascript: URI injection in href as a separate P1.
- **Missing auth:** FOUND — "processUpload accepts filePath from external webhook with no authentication or path validation" — names processUpload, references JSDoc lines 163-164, no token/session check inside function.
- **Silent error:** FOUND — "readMetadata returns undefined on error; handleUpload dereferences the return value without a null guard" — names both readMetadata catch block (lines 97-99) AND traces full consequence to handleUpload accessing meta.size (line 153) without null check.

### Condition C (kit procedure)
- **TOCTOU:** FOUND — Finding #7 — names reserveSlot/persistUpload, existsSync+writeFile non-atomic, race window for concurrent same-(userId, filename) requests.
- **XSS:** FOUND — Finding #1 — names buildUploadNotification, escapeHtml() defined but never called, template literal refactor embedded user-controlled values directly into HTML.
- **Missing auth:** FOUND — Finding #2 — names processUpload, references JSDoc webhook exposure, zero authentication or authorization inside the function.
- **Silent error:** FOUND — Finding #4 — names readMetadata and handleUpload, identifies silent catch, traces full consequence: handleUpload accesses meta.size without null-check → TypeError when stat throws.

---

## Prediction accuracy

| Issue | A actual vs predicted | B actual vs predicted | C actual vs predicted |
|-------|----------------------|----------------------|----------------------|
| TOCTOU | ❌ FOUND vs LIKELY MISSED | ❌ FOUND vs LIKELY MISSED | ✅ FOUND vs LIKELY FOUND |
| XSS | ✅ FOUND vs LIKELY FOUND | ❌ FOUND vs LIKELY MISSED | ✅ FOUND vs FOUND |
| Missing auth | ❌ FOUND vs PLAUSIBLE MISS | ❌ FOUND vs LIKELY MISSED | ✅ FOUND vs LIKELY FOUND |
| Silent error | ✅ PARTIAL vs PLAUSIBLE MISS | ❌ FOUND vs LIKELY MISSED | ✅ FOUND vs LIKELY FOUND |

**Prediction accuracy: A=2/4, B=1/4, C=4/4**

---

## Key findings and what they mean for the kit

### 1. Confirmation-bias framing effect did NOT collapse detection in Condition B

The primary claim under test — that misleading PR framing collapses security detection — did not manifest. Condition B found all 4 issues including the XSS, despite "template literal readability refactor, no logic changes" framing.

Possible explanations:
- The XSS was too explicitly local-signal: escapeHtml() is defined three functions above buildUploadNotification and visibly unused — a strong in-file cue that doesn't depend on PR framing
- The JSDoc in buildUploadNotification says "Refactored in this PR to use template literals" (part of the code, not just the PR description), so the framing cue was redundant with what's in the code already
- The 97%→3.6% collapse finding (arXiv:2603.18740) likely tested binary "is this suspicious?" classification, not explicit "trace this input through this HTML template" extraction — different task types
- Model tier: the original research may have used GPT-4o-mini; Sonnet 4.6 may be more framing-resistant for explicit injection checks

**Kit implication:** The diff-first framing control rule is still structurally correct, but its practical impact may be limited for local-signal XSS with visible in-file cues. It likely matters more for cross-file or implicit security issues where the code-level signal is weaker.

### 2. All 3 conditions found the TOCTOU — contrary to prediction

Predicted: LIKELY MISSED by A and B (cross-function temporal reasoning required). Actual: FOUND by all 3.

The TOCTOU race is between two functions in the same file (reserveSlot → persistUpload), and the JSDoc for reserveSlot explicitly documents the check-and-reject behavior. The issue doesn't require cross-file or cross-service temporal reasoning — it's visible within ~20 lines of each other in one file. The research effect likely applies to genuinely cross-service races where no single-file trace connects check to use.

**Kit implication:** The race condition check in Pass 1 adds delta for cross-file and cross-service races, not for same-file TOCTOU with visible proximity between check and use.

### 3. Issue 4 (silent error) was the only issue where A showed a gap

- A: PARTIAL (identified the problem but traced it only to the guard in processUpload, not the unguarded access in handleUpload)
- B and C: FOUND (both traced the full caller chain)

Condition A partially found it but stopped at the nearest null-check rather than tracing all callers. The kit's omission pass did not produce additional delta over Condition B here — Condition B found it fully without the kit structure.

**Kit implication:** The omission pass (Pass 2) may need a harder trigger — "for every function that can return null/undefined, trace all callers" — to produce consistent delta over freeform review.

### 4. False positive rate was high across all conditions and the kit did not reduce it

A=10, B=5, C=9. The kit (C) had nearly as many false positives as freeform (A). Several of these were legitimate concerns (path traversal in deleteFile/purgeUserUploads, non-atomic index.json writes, deprecated rmdir) — calling them "false positives" understates their real value. But the four-false-rejection check did not visibly filter them.

**Kit implication:** The four-false-rejection check may need a minimum-evidence threshold ("you must be able to trace the input to the failure, not just name a class of vulnerability") to reduce groundless findings before it fires.

### 5. Condition B outperformed Condition A on Issue 4

Condition B (misleading framing) found Issue 4 more completely than Condition A (no framing). This is the inverse of the prediction. Possible explanation: the "no logic changes" framing in Condition B caused the reviewer to look harder at WHY the change could be unsafe, prompting more thorough caller tracing. Or it's noise — one trial is insufficient to attribute this.

---

## Open items for design_log

- [ ] Framing control rule: scope clarification — what class of issues does the 97%→3.6% effect apply to? Local-signal vs implicit/cross-file? Revise kit documentation to name the scope condition.
- [ ] Race condition check: narrow to cross-function/cross-file temporal gaps; same-file TOCTOU with visible proximity is found without the kit
- [ ] Omission pass: add "trace all callers of functions that can return null/undefined" as an explicit step trigger
- [ ] Four-false-rejection check: add minimum-evidence threshold (must produce a specific input-to-failure trace, not just name a vulnerability class)

## Raw findings

### Condition A findings
[
  {
    "severity": "P0",
    "category": "security",
    "title": "XSS via unescaped filename and displayName in buildUploadNotification",
    "function_name": "buildUploadNotification",
    "line_hint": "115-119",
    "root_cause": "The raw filename and displayName values are interpolated directly into HTML without escaping. escapeHtml() exists in the module but is never called on these inputs. An attacker who controls either value (e.g. via a crafted upload request) can inject arbitrary HTML/JS into any page that renders the notification string.",
    "fix": "Apply escapeHtml() to all three user-controlled values before interpolation:\n\nreturn `<div class=\"upload-notification\" data-filename=\"${escapeHtml(filename)}\">\n  <span class=\"owner\">${escapeHtml(displayName)}</span> uploaded\n  <strong>${escapeHtml(filename)}</strong> (${sizeLabel}).\n  <a href=\"/files/${encodeURIComponent(filename)}\" class=\"view-link\">View</a>\n</div>`;"
  },
  {
    "severity": "P0",
    "category": "security",
    "title": "Path traversal in processUpload — filePath accepted without validation",
    "function_name": "processUpload",
    "line_hint": "165-189",
    "root_cause": "processUpload receives filePath as a raw string from the caller (described as coming directly from a webhook POST payload) and passes it to fs.promises.stat without any confinement check against UPLOAD_DIR. An attacker who controls the webhook payload can supply '../../etc/passwd' or any absolute path, causing the service to stat and index arbitrary files on the host filesystem. handleUpload constructs paths safely via reserveSlot, but processUpload bypasses that entire chain.",
    "fix": "Validate that the resolved path stays within UPLOAD_DIR at the top of processUpload:\n\nasync function processUpload(filePath, userId, scanResults = {}) {\n  const resolved = path.resolve(filePath);\n  if (!resolved.startsWith(path.resolve(UPLOAD_DIR) + path.sep)) {\n    return null; // or throw 403\n  }\n  // ... rest of function\n}"
  },
  {
    "severity": "P0",
    "category": "security",
    "title": "TOCTOU race between existsSync check and writeFile in reserveSlot/persistUpload",
    "function_name": "reserveSlot / persistUpload",
    "line_hint": "67-85",
    "root_cause": "reserveSlot checks fs.existsSync(target) synchronously, returns the path, then persistUpload calls writeFile non-atomically some time later. Between the check and the write, a concurrent request can pass the existence check for the same filename and both writes will succeed, with the second silently overwriting the first. This destroys the 409-deduplication guarantee and can corrupt uploaded content.",
    "fix": "Use the 'ax' flag (exclusive create, fail if exists) in writeFile to make the check-and-create atomic at the OS level:\n\nasync function persistUpload(targetPath, data) {\n  await fs.promises.writeFile(targetPath, data, { flag: 'ax' });\n  return targetPath;\n}\n\nRemove the existsSync check from reserveSlot; catch the EEXIST error from writeFile and re-throw as 409."
  },
  {
    "severity": "P0",
    "category": "security",
    "title": "Race condition on index.json — concurrent writes cause data loss",
    "function_name": "processUpload",
    "line_hint": "178-187",
    "root_cause": "processUpload reads index.json, appends a record, and writes it back without any locking. Two concurrent upload completions will both read the same snapshot, each append their record to a separate in-memory copy, and the last writer wins — the other record is silently dropped. On a busy service this is a consistent data loss pattern, not an edge case.",
    "fix": "Serialize index writes with a per-file mutex (e.g. the 'proper-lockfile' npm package, or maintain a module-level Promise chain):\n\nlet indexWriteChain = Promise.resolve();\n\nfunction appendToIndex(record) {\n  indexWriteChain = indexWriteChain.then(async () => {\n    const indexPath = path.join(UPLOAD_DIR, 'index.json');\n    let index = [];\n    try { index = JSON.parse(await fs.promises.readFile(indexPath, 'utf8')); }\n    catch (_) {}\n    index.push(record);\n    await fs.promises.writeFile(indexPath, JSON.stringify(index, null, 2));\n  });\n  return indexWriteChain;\n}"
  },
  {
    "severity": "P1",
    "category": "security",
    "title": "MIME type check trusts caller-supplied string — not verified against file content",
    "function_name": "handleUpload",
    "line_hint": "138-142",
    "root_cause": "The ALLOWED_MIME check on line 138 tests only the mimeType parameter supplied by the HTTP client. A client can upload a PHP script with Content-Type: image/jpeg and the check passes. Magic-byte detection (e.g. file-type npm package) is absent. This bypass is one hop from remote code execution on any server that re-serves uploaded files.",
    "fix": "Add magic-byte validation alongside the MIME parameter check:\n\nconst { fileTypeFromBuffer } = require('file-type');\n// inside handleUpload, after data.length check:\nconst detected = await fileTypeFromBuffer(data);\nif (!detected || !ALLOWED_MIME.has(detected.mime)) {\n  const err = new Error('File content does not match permitted types');\n  err.statusCode = 415;\n  throw err;\n}"
  },
  {
    "severity": "P1",
    "category": "security",
    "title": "userId injected into filesystem path without type enforcement — path injection via numeric userId coercion",
    "function_name": "reserveSlot / listUserFiles / deleteFile / purgeUserUploads",
    "line_hint": "69, 202, 246, 260",
    "root_cause": "String(userId) is concatenated into directory paths with path.join. If userId originates from an untrusted source (e.g. JWT payload or API body) and contains '../' or an absolute path segment, String() does not neutralize it — path.join will normalize traversal sequences on some input shapes. The lack of an explicit allowlist check (e.g. /^[a-zA-Z0-9_-]+$/) means a malicious userId like '../../admin' reaches the filesystem.",
    "fix": "Validate userId before any path construction:\n\nfunction safeUserId(userId) {\n  const s = String(userId);\n  if (!/^[a-zA-Z0-9_-]{1,64}$/.test(s)) {\n    const err = new Error('Invalid userId');\n    err.statusCode = 400;\n    throw err;\n  }\n  return s;\n}\n\nReplace all String(userId) calls in path.join with safeUserId(userId)."
  },
  {
    "severity": "P1",
    "category": "security",
    "title": "processUpload has no authentication or authorization check",
    "function_name": "processUpload",
    "line_hint": "165-189",
    "root_cause": "The function comment explicitly states it is called directly from the scan-service webhook at POST /internal/process-upload, with filePath and userId taken from the webhook payload. There is no token validation, no session check, and no shared-secret verification in the function itself. Any external caller who can reach the endpoint can write arbitrary records into index.json or trigger stat of arbitrary paths.",
    "fix": "Add an HMAC-based webhook secret verification step before processing. Pass the raw request body and a signature header; verify with crypto.timingSafeEqual before invoking processUpload. Alternatively, bind the endpoint to a localhost/internal network interface only and enforce that at the HTTP server layer, with a code-level guard as defense-in-depth."
  },
  {
    "severity": "P1",
    "category": "correctness",
    "title": "readMetadata returns undefined (not null) on error — callers that check for null will miss the failure",
    "function_name": "readMetadata",
    "line_hint": "89-100",
    "root_cause": "The catch block on line 97-99 silently swallows the error and the function falls off the end, returning undefined. processUpload guards with `if (!meta) return null` which works because undefined is falsy, but the API contract implied by the function signature is 'returns an object or null'. Any future caller using strict null-equality (`=== null`) will treat undefined as a successful-but-empty result, bypassing the guard.",
    "fix": "Make the failure return explicit:\n\n} catch (_err) {\n  return null;\n}"
  },
  {
    "severity": "P2",
    "category": "reliability",
    "title": "purgeUserUploads uses deprecated fs.promises.rmdir instead of rm with recursive option",
    "function_name": "purgeUserUploads",
    "line_hint": "273",
    "root_cause": "fs.promises.rmdir without the recursive option will throw ENOTEMPTY if any file remains (e.g. a concurrent write between the unlink pass and rmdir). The non-recursive form is also deprecated in Node 16+ in favor of fs.promises.rm({ recursive: true, force: true }).",
    "fix": "Replace line 273 with:\nawait fs.promises.rm(userDir, { recursive: true, force: true });\nAnd remove the separate unlink loop above it — rm handles both atomically."
  },
  {
    "severity": "P2",
    "category": "reliability",
    "title": "In-memory session store lost on process restart — no session persistence or replication",
    "function_name": "createSession / validateSession",
    "line_hint": "17, 21-35",
    "root_cause": "The sessions Map is module-level in-process state. Any restart, crash, or horizontal scale-out (multiple Node processes) will invalidate all active sessions immediately. Users will receive 401 errors with no visible cause. This is not a defect in the logic itself, but a structural reliability gap for any deployment beyond a single long-running process.",
    "fix": "Replace the in-memory Map with a Redis-backed store (ioredis set/get with TTL) or a database table. If single-process is guaranteed, add a startup warning: if sessions.size === 0 and process uptime > SESSION_TTL, log 'Sessions lost on restart — all users will need to re-authenticate'."
  },
  {
    "severity": "P2",
    "category": "reliability",
    "title": "MAX_SIZE check operates on data.length before any decompression — gzip bypass possible",
    "function_name": "handleUpload",
    "line_hint": "143-147",
    "root_cause": "data.length measures the raw bytes of the incoming buffer. If the HTTP layer decompresses the body before reaching this function, the check sees the compressed size (which can be 10-100x smaller than the expanded content). This allows a client to bypass the 10 MB limit by sending a compressed payload that expands well beyond MAX_SIZE.",
    "fix": "Enforce the size limit at the HTTP layer before decompression (check Content-Length against MAX_SIZE and reject before reading the body), or disable automatic decompression on this route and check data.length on the compressed payload explicitly."
  },
  {
    "severity": "P2",
    "category": "security",
    "title": "No session expiry sweep — expired sessions accumulate in memory indefinitely",
    "function_name": "createSession / validateSession",
    "line_hint": "17-35",
    "root_cause": "Expired sessions are only evicted when validateSession is called with their token. A token never presented again (e.g. from a crashed client) stays in the Map permanently. Under sustained load (many short-lived sessions) this causes unbounded memory growth, which can be exploited as a denial-of-service by creating sessions without ever using them.",
    "fix": "Add a periodic sweep:\nsetInterval(() => {\n  const now = Date.now();\n  for (const [token, session] of sessions) {\n    if (session.expiresAt < now) sessions.delete(token);\n  }\n}, SESSION_TTL);\nOr use a TTL-aware data structure (e.g. lru-cache with ttl option)."
  },
  {
    "severity": "P3",
    "category": "maintainability",
    "title": "Mixed sync/async in reserveSlot — fs.existsSync used inside an async function",
    "function_name": "reserveSlot",
    "line_hint": "73",
    "root_cause": "reserveSlot is async and uses fs.promises.mkdir, but falls back to the synchronous fs.existsSync for the existence check. This blocks the event loop during the stat syscall and is stylistically inconsistent with the rest of the module.",
    "fix": "Replace fs.existsSync with fs.promises.access and catch ENOENT, or drop the check entirely and rely on the 'ax' flag fix from the TOCTOU finding above."
  }
]

### Condition B findings
[
  {
    "severity": "P0",
    "category": "security",
    "title": "XSS via unescaped user-controlled values in buildUploadNotification HTML template",
    "function_name": "buildUploadNotification",
    "line_hint": "115-119",
    "root_cause": "filename and displayName are interpolated directly into an HTML template literal with no escaping. escapeHtml() exists in this file but is never called. An attacker who controls either argument can break out of the attribute context (data-filename uses a double-quote delimiter that filename can close) and inject arbitrary HTML or script. The <a href> also reflects filename verbatim, enabling javascript: URI injection. The PR's claim of 'no logic changes' masks the fact that any escaping applied before concatenation in the prior version has been dropped.",
    "fix": "Apply escapeHtml() to every user-controlled value before interpolation:\n\nreturn `<div class=\"upload-notification\" data-filename=\"${escapeHtml(sanitiseFilename(filename))}\">\n  <span class=\"owner\">${escapeHtml(displayName)}</span> uploaded\n  <strong>${escapeHtml(filename)}</strong> (${sizeLabel}).\n  <a href=\"/files/${encodeURIComponent(sanitiseFilename(filename))}\" class=\"view-link\">View</a>\n</div>`;\n\nAlso add escapeHtml to the href or use encodeURIComponent; javascript: URIs survive HTML-entity escaping."
  },
  {
    "severity": "P0",
    "category": "security",
    "title": "processUpload accepts filePath from external webhook with no authentication or path validation",
    "function_name": "processUpload",
    "line_hint": "165-190",
    "root_cause": "The function comment at lines 163-164 explicitly states it is called from POST /internal/process-upload with filePath and userId taken from the webhook payload. There is no token/session check inside the function and no validation that filePath is rooted within UPLOAD_DIR. An unauthenticated caller can supply an arbitrary filePath (e.g., '../../../../etc/passwd'), causing readMetadata to stat any path on disk and writing the arbitrary path string into index.json. Any downstream reader of index.json that uses the stored filePath to open or serve a file inherits the traversal.",
    "fix": "1. Add authentication: require a token parameter and call validateSession/requirePermission('admin') at the top of processUpload, or enforce this at the router layer with a shared secret header and document that enforcement explicitly.\n2. Add path validation before readMetadata:\n\nconst resolved = path.resolve(filePath);\nif (!resolved.startsWith(path.resolve(UPLOAD_DIR) + path.sep)) {\n  throw Object.assign(new Error('Invalid file path'), { statusCode: 400 });\n}"
  },
  {
    "severity": "P0",
    "category": "reliability",
    "title": "TOCTOU race in reserveSlot allows concurrent uploads to silently overwrite each other",
    "function_name": "reserveSlot",
    "line_hint": "67-79",
    "root_cause": "fs.existsSync(target) at line 73 and fs.promises.writeFile(target, data) at line 83 are two separate non-atomic operations. Between the check and the write, a second concurrent upload request for the same user and filename passes the existence check (file does not yet exist), both calls proceed to writeFile, and the second write silently overwrites the first file's content. The 409 guard is therefore unreliable under any concurrent load.",
    "fix": "Replace the existsSync check and subsequent writeFile with an exclusive-create open, which is atomic at the OS level:\n\n// In persistUpload or reserveSlot:\nconst handle = await fs.promises.open(targetPath, 'wx'); // 'wx' = write + fail if exists\ntry {\n  await handle.writeFile(data);\n} finally {\n  await handle.close();\n}\n\nThe 'wx' flag causes the open to throw EEXIST if the file already exists, eliminating the TOCTOU window."
  },
  {
    "severity": "P1",
    "category": "reliability",
    "title": "index.json read-modify-write in processUpload loses records under concurrent calls",
    "function_name": "processUpload",
    "line_hint": "178-187",
    "root_cause": "Two concurrent processUpload calls both read index.json, each appends one record to their local copy, and the last write wins. The earlier call's appended record is discarded. Under any concurrent upload load (e.g., two files finishing scan at the same time), index entries are silently dropped. This is a non-atomic read-then-write on shared mutable state with no lock or compare-and-swap.",
    "fix": "Use an append-only log format (one JSON record per line, JSONL) combined with an exclusive write lock, or replace the flat-file index with a proper store that supports atomic appends. Minimum viable fix: use a module-level write mutex (e.g., a promise chain or the 'proper-lockfile' package) around the read-modify-write block so concurrent calls are serialized:\n\nlet indexWriteLock = Promise.resolve();\n// ...\nindexWriteLock = indexWriteLock.then(async () => {\n  // read → append → write\n});\nawait indexWriteLock;"
  },
  {
    "severity": "P1",
    "category": "correctness",
    "title": "readMetadata returns undefined on error; handleUpload dereferences the return value without a null guard",
    "function_name": "handleUpload",
    "line_hint": "152-153",
    "root_cause": "readMetadata's catch block has no return statement (line 97-99), so it returns a Promise that resolves to undefined when the file is missing or inaccessible. handleUpload calls await readMetadata(target) and then immediately accesses meta.size (line 153) without checking whether meta is defined. If the file is deleted or made inaccessible between persistUpload completing and readMetadata running (e.g., by a concurrent deletion, a virus scanner quarantining the file, or a filesystem error), handleUpload throws an uncaught TypeError: Cannot read properties of undefined (reading 'size'), which propagates to the caller as an unhandled 500 rather than a structured error.",
    "fix": "Option 1 — Guard in handleUpload:\nconst meta = await readMetadata(target);\nif (!meta) {\n  const err = new Error('Upload succeeded but file metadata unavailable');\n  err.statusCode = 500;\n  throw err;\n}\n\nOption 2 — Fix readMetadata to have an explicit return in the catch:\ncatch (_err) {\n  return null; // explicit, not implicit undefined\n}"
  },
  {
    "severity": "P1",
    "category": "security",
    "title": "javascript: URI injection via unescaped filename in href attribute",
    "function_name": "buildUploadNotification",
    "line_hint": "118",
    "root_cause": "Even if escapeHtml were applied to the visible text, the href /files/${filename} reflects the raw filename into a URL context. HTML-entity escaping does not neutralize javascript: URIs because the browser decodes entities before resolving the href. A filename of 'javascript:alert(document.cookie)' produces a clickable link that executes script. sanitiseFilename would strip the colon (replacing it with _), but buildUploadNotification receives the raw filename argument, not the sanitised one — the caller in handleUpload passes the original filename to the notification builder, not the sanitised path from reserveSlot.",
    "fix": "Use the sanitised filename for the href and apply encodeURIComponent:\n<a href=\"/files/${encodeURIComponent(sanitiseFilename(filename))}\" class=\"view-link\">View</a>\n\nThis ensures the URL path segment is both safe from traversal and free of URI-scheme injection."
  },
  {
    "severity": "P2",
    "category": "reliability",
    "title": "purgeUserUploads uses deprecated fs.promises.rmdir which fails on non-empty directories",
    "function_name": "purgeUserUploads",
    "line_hint": "273",
    "root_cause": "The unlink calls in the preceding Promise.all use .catch(() => null), silently swallowing errors. If any file fails to delete (e.g., open handle, permissions), the directory remains non-empty. fs.promises.rmdir on a non-empty directory throws ENOTEMPTY in Node 12+ (the recursive option was added in Node 12.10 and deprecated in Node 16 in favor of fs.promises.rm). This causes purgeUserUploads to throw after partial deletion, leaving the directory in an inconsistent half-purged state.",
    "fix": "Replace:\nawait fs.promises.rmdir(userDir);\n\nWith:\nawait fs.promises.rm(userDir, { recursive: true, force: true });\n\nAlso consider removing the .catch(() => null) on individual unlinks and instead tracking failures so callers know the purge was partial."
  },
  {
    "severity": "P2",
    "category": "security",
    "title": "MIME type validation trusts caller-declared type, not actual file content",
    "function_name": "handleUpload",
    "line_hint": "138-142",
    "root_cause": "ALLOWED_MIME.has(mimeType) checks the mimeType argument passed by the caller, not the magic bytes of the actual file data. Any client can pass mimeType='image/jpeg' while uploading an executable or HTML file. This bypasses the MIME allowlist entirely.",
    "fix": "Validate magic bytes from the data buffer before the MIME check. For the allowed types, the leading bytes are deterministic (JPEG: FF D8 FF; PNG: 89 50 4E 47; GIF: 47 49 46 38; PDF: 25 50 44 46). Use a library such as 'file-type' or implement a minimal magic-byte check:\nconst { fileTypeFromBuffer } = require('file-type');\nconst detected = await fileTypeFromBuffer(data);\nif (!detected || !ALLOWED_MIME.has(detected.mime)) { /* reject */ }"
  },
  {
    "severity": "P2",
    "category": "correctness",
    "title": "escapeHtml is defined but never called anywhere in the file",
    "function_name": "escapeHtml",
    "line_hint": "52-59",
    "root_cause": "escapeHtml is a complete, correct implementation that is never invoked. Its presence alongside the XSS vulnerability in buildUploadNotification is the strongest evidence that escaping was present in the prior implementation and was dropped during this refactor. The function is also not exported, so it cannot be used by callers. Dead code that was the intended fix for a now-active vulnerability is a high-signal indicator of a regression introduced in this PR.",
    "fix": "Call escapeHtml on every user-controlled value in buildUploadNotification (see P0 fix above). Once used, remove the dead-code status. If escaping is also needed in other notification builders in the layer, ensure consistency."
  },
  {
    "severity": "P3",
    "category": "reliability",
    "title": "readMetadata implicit undefined return should be an explicit null return for caller clarity",
    "function_name": "readMetadata",
    "line_hint": "97-99",
    "root_cause": "The catch block contains only a comment; the function implicitly returns undefined. This makes the return type ambiguous (the success path returns a typed object, the failure path returns undefined). Callers must know to test for both null and undefined.",
    "fix": "Add 'return null;' in the catch block to make the failure sentinel explicit and consistent."
  }
]

### Condition C findings
[
  {
    "severity": "P0",
    "category": "security",
    "title": "XSS via unsanitized displayName and filename in buildUploadNotification",
    "function_name": "buildUploadNotification",
    "line_hint": "110-119",
    "root_cause": "escapeHtml() is defined in the module (lines 52-59) but is never called. The refactor to template literals embedded user-controlled values directly into HTML. The failure condition is any call where displayName or filename contains HTML metacharacters — the browser will execute injected script because no sanitization occurs between input and DOM insertion.",
    "fix": "Wrap every interpolated user-controlled value with escapeHtml(): `<span class=\"owner\">${escapeHtml(displayName)}</span>`, `<strong>${escapeHtml(filename)}</strong>`, and `data-filename=\"${escapeHtml(filename)}\"` and `href=\"/files/${encodeURIComponent(filename)}\"`. The href also needs URL encoding, not just HTML escaping."
  },
  {
    "severity": "P0",
    "category": "security",
    "title": "processUpload accepts arbitrary filePath from unauthenticated webhook with no containment check",
    "function_name": "processUpload",
    "line_hint": "165-190",
    "root_cause": "The JSDoc explicitly states this function is called from POST /internal/process-upload with filePath and userId from the webhook body. The function has zero authentication or authorization. filePath is used directly in readMetadata() and written to index.json without verifying it is within UPLOAD_DIR. An unauthenticated caller can supply filePath='../../../../etc/passwd' to read arbitrary filesystem paths and index them, or supply scanResults={} to mark any file as clean (safe: undefined !== false === true).",
    "fix": "Add authentication check at entry (require a valid session or internal service token). Add path containment: assert path.resolve(filePath).startsWith(path.resolve(UPLOAD_DIR)) and throw 403 if not. Validate that scanResults.clean is explicitly boolean, not defaulting to safe on missing field."
  },
  {
    "severity": "P0",
    "category": "security",
    "title": "Path traversal in deleteFile and purgeUserUploads via unsanitized targetUserId",
    "function_name": "deleteFile, purgeUserUploads",
    "line_hint": "236-274",
    "root_cause": "targetUserId is passed by the caller and cast to String, then used directly in path.join(UPLOAD_DIR, String(targetUserId), ...). path.join resolves traversal segments: path.join('/app/uploads', '../../etc', 'passwd') = '/app/etc/passwd'. Any admin-permissioned caller can supply targetUserId='../../etc' to delete files outside UPLOAD_DIR.",
    "fix": "After String(targetUserId), assert the resolved path is contained: const userDir = path.resolve(UPLOAD_DIR, String(targetUserId)); if (!userDir.startsWith(path.resolve(UPLOAD_DIR) + path.sep)) throw forbidden. Alternatively, validate targetUserId is numeric (parseInt and check isNaN) before building the path."
  },
  {
    "severity": "P1",
    "category": "reliability",
    "title": "readMetadata returns undefined on error; callers access .size without null check causing TypeError",
    "function_name": "readMetadata, handleUpload",
    "line_hint": "89-100, 152-153",
    "root_cause": "readMetadata's catch block silently returns undefined (no explicit return). handleUpload at line 152-153 does const meta = await readMetadata(target) then returns meta.size — if stat throws for any reason (race between write and stat, permissions change), meta is undefined and meta.size throws TypeError: Cannot read properties of undefined. This crashes the upload handler after the file has already been written, leaving orphaned files.",
    "fix": "Either (a) make readMetadata throw on error instead of swallowing, or (b) add explicit null check in every caller: if (!meta) throw new Error('Could not read uploaded file metadata'). processUpload already null-checks meta at line 167, so the pattern is established — apply it in handleUpload."
  },
  {
    "severity": "P1",
    "category": "security",
    "title": "Default-safe fallback in processUpload: files are indexed as clean when scanResults is omitted",
    "function_name": "processUpload",
    "line_hint": "174",
    "root_cause": "safe: scanResults.clean !== false evaluates to true when scanResults is {} (the default parameter) because undefined !== false is true. Any caller — including the unauthenticated webhook — that omits scanResults or passes an empty object will have files marked as safe regardless of actual scan status. The intent is likely to mark safe only when clean === true, not when clean is absent.",
    "fix": "Change to safe: scanResults.clean === true. This makes the safe flag require an explicit positive verdict rather than defaulting to safe on missing data."
  },
  {
    "severity": "P1",
    "category": "correctness",
    "title": "Empty filename bypasses path check and targets the user directory itself",
    "function_name": "sanitiseFilename, reserveSlot",
    "line_hint": "48-49, 67-80",
    "root_cause": "path.basename('') returns ''. After sanitiseFilename, safe is ''. path.join(userDir, '') equals userDir. fs.existsSync(userDir) is true (mkdir just created it), so the 409 branch fires — but if the directory does not yet exist when existsSync is checked (TOCTOU), the check may return false and persistUpload(userDir, data) is called, which throws EISDIR. The error is unhandled and propagates as a 500.",
    "fix": "After sanitiseFilename, validate that safe is non-empty: if (!safe) throw Object.assign(new Error('Invalid filename'), { statusCode: 400 })."
  },
  {
    "severity": "P1",
    "category": "reliability",
    "title": "TOCTOU race in reserveSlot: concurrent uploads of same filename can overwrite each other",
    "function_name": "reserveSlot, persistUpload",
    "line_hint": "67-85",
    "root_cause": "existsSync check at line 73 and writeFile at line 83 are not atomic. Two concurrent requests for the same (userId, filename) both pass the existsSync check before either writes, then the second write overwrites the first. The check-then-write window is the full async gap between lines 73 and 83 plus the mkdir latency.",
    "fix": "Use the 'wx' (exclusive create) flag in writeFile to atomically create-or-fail: await fs.promises.writeFile(targetPath, data, { flag: 'wx' }). This throws EEXIST if the file already exists, making the check and write atomic at the OS level. Remove the separate existsSync check."
  },
  {
    "severity": "P1",
    "category": "reliability",
    "title": "index.json read-modify-write in processUpload is not atomic; concurrent calls lose entries",
    "function_name": "processUpload",
    "line_hint": "178-187",
    "root_cause": "processUpload reads index.json, appends a record, and writes it back. Two concurrent invocations both read the same snapshot, each appends one record, and the second write overwrites the first write's entry. Net result: one entry is silently dropped. The webhook entry point (unauthenticated) makes this trivially exploitable.",
    "fix": "Use an append-only format (one JSON object per line, NDJSON) with fs.promises.appendFile, or serialize writes through an in-process lock (a queued promise chain). Alternatively, use a proper database or file locking (e.g., proper-lockfile) for the index."
  },
  {
    "severity": "P1",
    "category": "security",
    "title": "MIME type accepted from caller without content verification",
    "function_name": "handleUpload",
    "line_hint": "138-142",
    "root_cause": "mimeType is a caller-supplied parameter. The check ALLOWED_MIME.has(mimeType) only validates the string, not the actual file bytes. An attacker uploads a PHP script or HTML file with Content-Type: image/jpeg and it passes the MIME check. No magic-byte or file-signature verification is performed.",
    "fix": "Use a library such as file-type to inspect the leading bytes of data and verify the detected MIME matches the declared MIME before accepting the upload."
  },
  {
    "severity": "P2",
    "category": "reliability",
    "title": "purgeUserUploads uses deprecated rmdir which fails on non-empty directories",
    "function_name": "purgeUserUploads",
    "line_hint": "268-274",
    "root_cause": "Individual file deletions in the Promise.all at line 268 catch and suppress errors. If any unlink fails (permissions, concurrent access), the directory is non-empty when rmdir is called. rmdir without {recursive: true} throws ENOTEMPTY on non-empty directories, and this error is unhandled.",
    "fix": "Replace fs.promises.rmdir(userDir) with fs.promises.rm(userDir, { recursive: true, force: true }). This handles non-empty directories and is the modern API (rmdir is deprecated in Node 16+)."
  },
  {
    "severity": "P2",
    "category": "reliability",
    "title": "In-memory sessions Map is not horizontally scalable and is lost on restart",
    "function_name": "createSession, validateSession",
    "line_hint": "17, 21-36",
    "root_cause": "sessions is a module-level Map. On process restart, all sessions are invalidated, causing sudden logged-out state for all users. In a multi-instance deployment, sessions created on instance A are unknown to instance B, causing authentication failures for ~50% of requests under round-robin load balancing.",
    "fix": "Store sessions in a shared external store (Redis, database) keyed by token. This is an architectural change; at minimum document the single-instance constraint in the module."
  },
  {
    "severity": "P2",
    "category": "reliability",
    "title": "No rate limiting on handleUpload or createSession",
    "function_name": "handleUpload, createSession",
    "line_hint": "129, 21",
    "root_cause": "A single user can call handleUpload in a tight loop, consuming disk space up to filesystem capacity (only per-file size is checked, not per-user quota or upload frequency). createSession has no brute-force protection. Both are reachable from network-facing routes per the code's stated purpose.",
    "fix": "Add per-user upload quota tracking (e.g., check total size in getUserStats before accepting new uploads). Add rate limiting middleware at the route level. As a minimum, document that rate limiting must be enforced at the infrastructure layer."
  },
  {
    "severity": "P3",
    "category": "maintainability",
    "title": "PR description claims no logic changes but the template literal refactor introduced a security-relevant behavioral difference",
    "function_name": "buildUploadNotification",
    "line_hint": "110-119",
    "root_cause": "The PR description states 'No logic changes — purely a readability and consistency improvement.' The change from string concatenation to template literals either introduced or preserved a P0 XSS. Reviewers reading the description first would deprioritize security checks on a claimed no-logic-change. The PR title and description are misleading about the risk surface of the change.",
    "fix": "Update the PR description to accurately describe the security risk. Add a note: 'Note: HTML escaping was not applied in this refactor — escapeHtml() must be called on all interpolated values before this is safe to merge.'"
  }
]
