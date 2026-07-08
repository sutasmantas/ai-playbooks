# Concern: Security

**Rule**
No secrets in the client bundle. CSP and other security headers are set. User input is escaped at the rendering boundary. Dependencies are kept current; known vulnerabilities are patched, not deferred.

**Why**
Web security failures are asymmetric — one missing escape and an attacker has session takeover. The vulnerability is usually a one-line bug; the impact is total. Defense in depth, not a single gate.

**How to apply**
- **Secrets:** API keys, database URLs, signing keys live in env vars on the server. Never in the client bundle, never in committed files. Validator scans the built JS for known-secret patterns (e.g., `sk_live_`, `AKIA`, `-----BEGIN`).
- **Headers:** Content-Security-Policy with no `unsafe-inline` for scripts. Strict-Transport-Security, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. Test with securityheaders.com.
- **Input handling:** Escape on output, not on input. The framework's default escaping is correct — don't `dangerouslySetInnerHTML` / `v-html` without a sanitizer.
- **Auth:** Cookies are `HttpOnly`, `Secure`, `SameSite=Lax` minimum (or `Strict` where the flow allows). CSRF tokens on state-changing requests if not using SameSite=Strict.
- **Dependencies:** `npm audit` / `pnpm audit` / equivalent in CI. Patch high-severity within a sprint; document deferrals.
- **Logs:** No PII, no tokens, no passwords in server logs. Log structured, not strings.
- **AI-introduced patterns to forbid.** Veracode 2025: 45% of AI-generated code carries a CWE-mapped flaw. Specific patterns to block at lint / PR / verifier time: raw SQL via template-string concatenation; `dangerouslySetInnerHTML` of LLM output; `Math.random()` for any token, ID, or nonce; `Access-Control-Allow-Origin: *` paired with credentials; `unsafe-inline` or `unsafe-eval` in CSP; tokens stored in `localStorage` or `sessionStorage`; `alg: none` JWT acceptance; MD5/SHA-1 for password hashing; `child_process.exec` with string interpolation; `eval` / `new Function` of any external string.
- **LLM output is user input.** Anything produced by an LLM and rendered to a user must be escaped on output. Never `dangerouslySetInnerHTML(llmOutput)`. Sanitize LLM-produced Markdown with DOMPurify or equivalent before rendering. Treat LLM output the same way you treat user-submitted HTML. This is OWASP LLM05 (Improper Output Handling) — the under-appreciated entry for web apps.
- **SSRF-safe fetch wrapper.** Any outbound HTTP call from a URL parameter, user input, or LLM-suggested URL must pass through an allowlist AND block private IP ranges: `127.0.0.0/8`, `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`, `169.254.169.254` (AWS metadata), `::1`, `fc00::/7`. A Dec 2025 study found all 5 major coding agents introduce SSRF when asked to build a "fetch this URL" feature.
- **Regex on untrusted input.** Use `re2` (linear-time, Go-derived) for any regex applied to user-controlled strings. Otherwise lint with `recheck` or `eslint-plugin-redos`, and time-bound regex execution. LLM-generated regex patterns are predominantly polynomial-backtracking (ReDoS-prone).
- **JWT algorithm pinning.** When verifying JWTs, always pass an explicit `algorithms: ['RS256']` (or similar) array. Reject `alg: none`. Never accept tokens whose algorithm is dictated by the token itself.
- **Server-side validation always.** Any client-side validation (Zod, Yup, HTML5 constraints) is duplicated server-side before any DB write or state-changing operation. Share one schema between client and server route handler so they cannot drift. Client-only validation is a bug, not a feature — AI agents disproportionately produce this anti-pattern because "the framework handles it."

**Skip if**
Truly never — even a static brochure site has dependency hygiene and headers. But the depth scales with sensitivity: a marketing page is not a banking app.

**Trace:** general — not from a war story in this kit.
