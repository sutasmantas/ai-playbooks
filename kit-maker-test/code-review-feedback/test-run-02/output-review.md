# Code Review — JWT Auth Migration + RBAC

**PR:** Migrate user authentication to JWT + add role-based access control  
**Reviewer note:** No test policy or written severity guide provided before this review; team policy assumptions documented per comment where relevant.

---

**[LARGE CHANGESET: >400 LOC — cognitive-load risk; consider splitting or reviewing in separate sessions]**  
**[CROSS-CUTTING CHANGE: spans >3 directories (src/auth/, src/middleware/, src/routes/, src/models/, src/db/migrations/) — security cross-cutting risk elevated; mandatory security pass applied to entire diff]**

---

## Blocking Issues

---

**issue (blocking): `src/auth/jwt.js` line 2 — hardcoded fallback signing secret**

```js
const SECRET = process.env.JWT_SECRET || 'fallback-dev-secret';
```

**What:** `'fallback-dev-secret'` is a publicly readable string in source control. If `JWT_SECRET` is unset in any environment, tokens are signed with a known string.

**Why:** An attacker who knows the signing key can forge a valid JWT for any user ID and role, bypassing all authentication. The fallback eliminates the security guarantee JWT signing is supposed to provide. Risk: complete authentication bypass on any deployment where the environment variable is missing.

**How:** Remove the fallback. Fail hard at startup if `JWT_SECRET` is absent:
```js
const SECRET = process.env.JWT_SECRET;
if (!SECRET) throw new Error('JWT_SECRET environment variable is required');
```

---

**issue (blocking): `src/routes/auth.js` line 31–33 — tokens not invalidated on logout**

```js
router.post('/logout', (req, res) => {
  // JWT is stateless — logout is client-side
  res.json({ message: 'Logged out' });
});
```

**What:** The logout endpoint acknowledges logout without invalidating the token. With a 7-day expiry (`{ expiresIn: '7d' }`), a stolen token remains valid for up to 7 days after the user explicitly logs out.

**Why:** Risk: compromised credential window. A user who logs out after noticing suspicious activity cannot terminate the attacker's active session. This is architecturally inconsistent with having a server-side logout endpoint at all.

**How:** Choose one of: (a) implement a token blocklist (Redis/DB table) checked in `verifyToken`; (b) switch to short-lived access tokens (15 min) + refresh tokens and rotate on each use; (c) explicitly document this as a known limitation in the design and remove the logout route rather than shipping it as a false security control. Option (c) is the minimum honest fix; options (a) or (b) are required for any security posture that includes a real logout guarantee.

---

**issue (blocking): `src/auth/jwt.js` lines 41–46 — `refreshToken` propagates stale role from token payload**

```js
function refreshToken(token) {
  const payload = verifyToken(token);
  if (!payload) return null;
  // Re-sign with same payload, reset expiry
  return createToken({ id: payload.id, email: payload.email, role: payload.role });
}
```

**What:** The refreshed token copies `role` from the existing (up to 7-day-old) token, not from the database.

**Why:** Risk: privilege escalation window after role demotion. If an admin user is demoted to viewer and then calls the refresh endpoint, they receive a new token with the admin role intact — valid for another 7 days. Any role change is invisible to the auth layer until the token fully expires.

**How:** Fetch the current role from the database before re-signing:
```js
async function refreshToken(token) {
  const payload = verifyToken(token);
  if (!payload) return null;
  const user = await userService.getById(payload.id);
  if (!user) return null;
  return createToken(user);
}
```

Note: this makes `refreshToken` async; the calling route in `src/routes/auth.js` must be updated accordingly.

---

**issue (blocking): `src/middleware/auth.js` lines 103–108 — `auditLog` writes to `console.log` with no persistence**

```js
function auditLog(action) {
  return function (req, res, next) {
    console.log(`[AUDIT] ${action} by user ${req.user?.id} at ${new Date().toISOString()}`);
    next();
  };
}
```

**What:** Audit events for `UPDATE_USER`, `DELETE_USER`, and `PROMOTE_USER` are written only to stdout.

**Why:** Risk: audit trail is lost on process restart; logs are not tamper-proof, not queryable, and not persisted. For operations that change user roles or delete accounts, a non-persistent audit trail provides false assurance — it looks like auditing is present but provides no recovery capability if events need to be investigated. If the system is under any compliance requirement (SOC 2, GDPR audit logging), `console.log` fails it entirely.

**How:** Write audit events to a persistent store. Minimum: a database table (`audit_log` with columns: `id, action, user_id, actor_id, timestamp`). Structured logging to an external service (Datadog, CloudWatch, etc.) is a better long-term path. The current implementation should be replaced before merge if audit logging is a real requirement; if it is a placeholder, document it explicitly as such.

---

**issue (blocking): `src/db/migrations/003_add_role_column.sql` lines 7–9 — `admin_emails` table may not exist**

```sql
UPDATE users SET role = 'admin' WHERE email IN (
  SELECT email FROM admin_emails
);
```

**What:** This query depends on an `admin_emails` table that may not exist in all environments (e.g., fresh developer installs, CI environments, disaster-recovery restores).

**Why:** Risk: migration failure. In environments where `admin_emails` does not exist, this SQL errors and the migration fails, leaving the schema in a partial state. Migration failures are difficult to recover from if the migration runner doesn't roll back cleanly.

**How:** Wrap with an existence check:
```sql
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'admin_emails') THEN
    UPDATE users SET role = 'admin' WHERE email IN (SELECT email FROM admin_emails);
  END IF;
END $$;
```

Alternatively: document that `admin_emails` is a prerequisite and add a pre-migration existence check in the migration runner.

---

## Questions

---

**question (non-blocking): `src/routes/users.js` lines 151–154 — `promote` endpoint excludes `'superadmin'` from allowed roles**

```js
const allowedRoles = ['viewer', 'editor', 'admin'];
```

**What:** The `allowedRoles` array does not include `'superadmin'`. An `admin`-level user cannot promote anyone to `superadmin` via this API.

**Why:** This may be intentional (superadmin is only set via database seed or a separate admin-only tool) or may be an accidental omission. The behavior is non-standard since the `ROLE_HIERARCHY` in `auth.js` defines `superadmin` at level 4 but provides no API path to reach it.

Decision needed: Is promotion to superadmin intentionally blocked via API? If yes, add a comment explaining this. If no, add `'superadmin'` to `allowedRoles` (with a `requireRole('superadmin')` guard on the outer route).

---

## Suggestions

---

**suggestion (non-blocking): `src/db/migrations/003_add_role_column.sql` — no DOWN migration**

No rollback script accompanies this migration. If the role column addition needs to be undone (e.g., during a hotfix), manual SQL will be required.

Consider adding:
```sql
-- DOWN
ALTER TABLE users DROP COLUMN IF EXISTS role;
DROP INDEX IF EXISTS idx_users_role;
```

---

**suggestion (non-blocking): `src/models/user.js` lines 219–223 — `validateRole` is defined but never exported or used**

```js
function validateRole(role) {
  return VALID_ROLES.includes(role);
}
// module.exports = { userSchema }  ← validateRole not included
```

`validateRole` is unreachable dead code. Either export it and use it in routes/middleware (which would unify role validation), or remove it. Applies throughout: the `promote` endpoint in `src/routes/users.js` also performs inline role validation (`allowedRoles.includes(role)`) instead of using a shared validator.

---

**suggestion (non-blocking): role definitions are duplicated across three files — can diverge silently**

Three separate role enumerations in this PR can drift independently:
- `ROLE_HIERARCHY` in `src/middleware/auth.js` (4 roles: viewer, editor, admin, superadmin)
- `VALID_ROLES` in `src/models/user.js` (4 roles: viewer, editor, admin, superadmin)
- `allowedRoles` in `src/routes/users.js` promote endpoint (3 roles: viewer, editor, admin)

Applies throughout the diff: any addition of a new role requires updating all three locations without a cross-reference or shared source of truth.

Consider extracting to a single `src/constants/roles.js` that all three import from.

---

**suggestion (non-blocking): no tests for the new authentication system**

No test files are included in this diff. Team test policy was not provided before this review. If the team requires tests on critical-path changes, the auth module (JWT creation, token verification, role enforcement, refresh logic) should be tested before merge. The security issues identified in this review (fallback secret, stale role on refresh, logout gap) would be catchable with unit tests.

---

**nitpick: `POST /users/:id/promote` — consider `PUT /users/:id/role`**

Current naming uses RPC-style (`/promote` verb in URL); RESTful alternative would model it as a resource update (`PUT /users/:id/role` with `{ role: "admin" }` body). Both are common — this is a style preference, not a correctness issue.

---

## Six-dimension coverage summary

| Dimension | Findings |
|-----------|----------|
| Correctness | 3 issues: validateRole dead code, three diverging role definitions, admin_emails migration dependency |
| Security | 4 blocking: hardcoded fallback secret, tokens not invalidated on logout, stale role on refresh, console.log audit log |
| Performance | Nothing found |
| Testing | 1 suggestion: no tests for auth critical path |
| Readability / Maintainability | 2 suggestions: dead code, duplicated role definitions |
| Operational Readiness | 2 items: console.log audit log (raised under security), no DOWN migration |

---

## Review state

**Request Changes** — 5 blocking issues must be resolved before merge.

The hardcoded fallback secret (#1) is the highest-priority fix: it can be deployed to production silently and eliminates the security guarantee of JWT signing. Address it first.
