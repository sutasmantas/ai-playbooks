# Code Review: Add user search endpoint

**Reviewer procedure:** `procedures/review.md`

---

## Step 1 — Scope check

- LOC: ~120 — under 400 threshold; no LARGE CHANGESET flag
- Directories: `src/routes/`, `src/services/` — 2 directories; under 3 threshold; no CROSS-CUTTING CHANGE flag
- Tests: no test changes in diff. PR adds security-sensitive endpoints (privilege escalation via `promote`). Team test policy not provided — raised as suggestion below.
- Scope boundary: `src/middleware/auth.js` is not in this diff — no comments on it.

---

## Step 2 — Six-dimension coverage pass (extraction)

**1. Correctness:**
- `getById`: string interpolation in SQL — functional defect path (SQL injection, also correctness)
- `searchUsers`: `allowedFields` array defined but never used to validate `field` — the variable exists only to give false assurance; unvalidated `field` and `query` both enter the SQL string
- `save`: only updates `role`; function name implies broader scope — naming actively misleads

**2. Security:**
- SQL injection: `getById` uses `WHERE id = ${id}` (path param interpolated directly); `searchUsers` uses `${field}` and `${query}` in SQL string with no actual validation applied
- Authorization: `/search` has no auth check (PR states admin-only); `POST /users/:id/promote` has no auth check (privilege escalation endpoint, zero authorization)
- Cross-cutting: both issues span the route layer and service layer — the SQL injection originates in the service; the auth gap is in the route

**3. Performance:**
- `LIKE '%${query}%'` leading wildcard prevents index use — acceptable at small scale, concern at large scale

**4. Testing:** Nothing found in diff. Noted below as suggestion.

**5. Readability/Maintainability:**
- `save` function name misleads (implies full object save; only updates role)
- `allowedFields` defined but unused — dead code that actively misleads about validation state

**6. Operational Readiness:**
- Privilege escalation (`promote`) not logged — security audit gap

---

## Comments

---

**issue (blocking): SQL injection via string interpolation in `getById` and `searchUsers`**

`userService.js` line 9 (`WHERE id = ${id}`) and lines 16-17 (`${field}` and `${query}`).

The path parameter `id` and query parameters `field` and `query` are interpolated directly into SQL strings. Both are exploitable: `id` via path manipulation, `query` via standard SQL injection payloads. Note: `allowedFields` appears to validate `field` but is never actually consulted before the SQL is built — see separate comment.

Fix for `getById`:
```js
const rows = await db.query('SELECT * FROM users WHERE id = ?', [id]);
```

Fix for `searchUsers` (after field validation is added — see separate comment):
```js
const sql = 'SELECT id, email, username FROM users WHERE ?? LIKE ?';
return db.query(sql, [field, `%${query}%`]);
```

(Using `??` for identifier escaping and `?` for value; exact syntax depends on your DB library's parameterization support for identifiers.)

Applies to both functions. Resolve before merge.

---

**issue (blocking): `allowedFields` defined but never used — `field` enters SQL without validation**

`userService.js` line 14: `const allowedFields = ['email', 'username']` is defined but never consulted.

The `field` parameter arrives from `req.query.field` and is interpolated into SQL at line 16 before any validation runs. The presence of `allowedFields` creates a false assurance that field validation is in place when it is not.

Fix:
```js
async function searchUsers(query, field = 'email') {
  const allowedFields = ['email', 'username'];
  if (!allowedFields.includes(field)) {
    throw new Error(`Invalid field: ${field}`);
  }
  // then use parameterized query per above comment
}
```

This blocks merge both because it compounds the SQL injection and because the dead validation code misleads any reader (including future reviewers) about the security posture of this function.

---

**issue (blocking): No authorization check on `/search` or `POST /users/:id/promote`**

`routes/users.js`:
- `/search` handler (line ~14): no auth middleware
- `promote` handler (line ~22): no auth middleware

The PR description states this endpoint is for admins. As written, any unauthenticated or unauthorized caller can invoke both endpoints. The `promote` endpoint is a privilege escalation path with no gating — any caller can elevate any user to admin.

Fix:
```js
router.get('/search', requireAuth, requireRole('admin'), async (req, res) => { ... });
router.post('/users/:id/promote', requireAuth, requireRole('admin'), async (req, res) => { ... });
```

Blocks merge: missing authorization on a privilege escalation endpoint violates OWASP A01:2021 (Broken Access Control) and the PR's stated access model.

---

**suggestion (non-blocking): `save` function name implies full object persistence; this only updates `role`**

`userService.js` line 26, function `save`.

A reader calling `userService.save(user)` will expect all modified fields to persist. Only `role` is updated. A future change that modifies other user fields and calls `save` expecting full persistence will silently drop those changes.

Consider: `updateRole(userId, role)` with the id and role passed explicitly rather than a full user object.

---

**suggestion (non-blocking): No tests for the new endpoints**

PR adds `/search` and `POST /users/:id/promote` with no test files. The promote endpoint performs privilege escalation — a test verifying that unauthorized callers receive 403 is minimal coverage for a security-sensitive operation.

---

**suggestion (non-blocking): Privilege escalation operation not logged**

`routes/users.js` promote handler: the role change is not logged.

If an account is compromised and used to promote other accounts, there will be no audit trail. Consider logging before the save: `logger.info({ event: 'user_promoted', targetUserId: id, actorId: req.user?.id })`.

---

**suggestion (non-blocking): `LIKE '%query%'` prevents index use on `email` and `username` columns**

`userService.js` line 17: leading wildcard makes this a full-table scan on large user tables.

Acceptable at current scale. If the users table exceeds ~100k rows, consider a suffix-indexed approach or full-text search. Worth tracking.

---

**praise: `getAll` now selects explicit columns instead of `SELECT *`**

`userService.js` line 5: good change. Explicit column selection prevents schema changes from silently propagating unexpected data to API consumers.

---

## Step 4 — Severity audit

**Blocking comments: 3**

1. SQL injection: "blocks merge because SQL injection via path and query parameters — OWASP A03:2021 (Injection), trivially exploitable in both functions" ✓
2. allowedFields unused: "blocks merge because unvalidated external input enters SQL string while dead validation code implies security that does not exist" ✓
3. Missing auth: "blocks merge because privilege escalation endpoint has no authorization gate — OWASP A01:2021 (Broken Access Control), PR's stated admin-only requirement unenforceable" ✓

Inflation check: 3 blockers — under threshold. Each tied to a named policy or risk. Not inflated.
Deflation check: PR touches authorization and external data. Blocking comments on auth. Not deflated.

---

## Step 5 — Completeness checks

**A. Dimension coverage:**
1. Correctness ✓ (SQL injection + allowedFields dead code)
2. Security ✓ (SQL injection, missing auth)
3. Performance ✓ (LIKE leading wildcard)
4. Testing ✓ (missing tests suggestion)
5. Readability/Maintainability ✓ (save naming, allowedFields dead code)
6. Operational Readiness ✓ (logging gap)

**B. Security completeness:** PR touches authorization (promote) and external data (search query). Input validation: checked (allowedFields finding). Access control: checked (auth missing finding). ✓

**C. Large PR:** 120 LOC — no scope note needed.

**D. Resolution completeness:** All 3 blockers have label ✓, what ✓, why ✓, how ✓.

---

## Step 6 — Human review checklist

☑ Every comment has a "what" (specific code reference)
☑ Every blocking comment names a specific policy or risk
☑ Every blocking comment has a "how"
☑ Every dimension has a comment or explicit "nothing found"
☑ No comments on out-of-scope (non-diff) code (`auth.js` not commented)
☑ Comment avalanches consolidated (SQL injection: 1 comment covering 2 functions; auth: 1 comment covering 2 endpoints)
☑ No person-targeting language
☑ Minimizer words removed
☑ No opinions stated as facts without reasoning
☑ Security pass completed (PR touches auth and external data)
☑ Author can identify blocking vs discretionary from labels
☑ Review state: **Request Changes** (3 blockers present)

---

## Next obstacle

3 blocking comments were written. The next obstacle is confirming the resolution path: all 3 must be resolved before this PR can merge. The SQL injection and allowedFields comments are related (fixing the SQL injection procedure also makes the allowedFields fix coherent) — the author should address them in a single pass. Proposing: verify the PR author has received all 3 blocking items and understands they are sequential (fix SQL injection first, then add field validation using parameterized approach, then add auth middleware).
