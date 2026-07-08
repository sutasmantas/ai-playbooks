# Test Input: Large-Scale PR Diff

**PR title:** Migrate user authentication to JWT + add role-based access control  
**PR description:** Replaces session-based auth with JWT. Adds role hierarchy (viewer < editor < admin < superadmin). Migrates existing endpoints to use new middleware. Adds audit logging for sensitive operations.  
**LOC:** ~520  
**Directories:** `src/auth/`, `src/middleware/`, `src/routes/`, `src/models/`, `src/db/migrations/`

---

## Diff

```diff
diff --git a/src/auth/jwt.js b/src/auth/jwt.js
new file mode 100644
--- /dev/null
+++ b/src/auth/jwt.js
@@ -0,0 +1,68 @@
+const jwt = require('jsonwebtoken');
+const SECRET = process.env.JWT_SECRET || 'fallback-dev-secret';
+
+function createToken(user) {
+  return jwt.sign(
+    {
+      id: user.id,
+      email: user.email,
+      role: user.role,
+    },
+    SECRET,
+    { expiresIn: '7d' }
+  );
+}
+
+function verifyToken(token) {
+  try {
+    return jwt.verify(token, SECRET);
+  } catch (err) {
+    return null;
+  }
+}
+
+function refreshToken(token) {
+  const payload = verifyToken(token);
+  if (!payload) return null;
+  // Re-sign with same payload, reset expiry
+  return createToken({ id: payload.id, email: payload.email, role: payload.role });
+}
+
+module.exports = { createToken, verifyToken, refreshToken };
```

```diff
diff --git a/src/middleware/auth.js b/src/middleware/auth.js
--- a/src/middleware/auth.js
+++ b/src/middleware/auth.js
@@ -1,18 +1,62 @@
-const session = require('express-session');
+const { verifyToken } = require('../auth/jwt');
 
-function requireAuth(req, res, next) {
-  if (!req.session.userId) {
+const ROLE_HIERARCHY = {
+  viewer: 1,
+  editor: 2,
+  admin: 3,
+  superadmin: 4,
+};
+
+function authenticate(req, res, next) {
+  const authHeader = req.headers['authorization'];
+  if (!authHeader) {
     return res.status(401).json({ error: 'Unauthorized' });
   }
-  req.userId = req.session.userId;
-  next();
-}
 
-module.exports = { requireAuth };
+  const token = authHeader.split(' ')[1];
+  const payload = verifyToken(token);
+
+  if (!payload) {
+    return res.status(401).json({ error: 'Invalid or expired token' });
+  }
+
+  req.user = payload;
+  next();
+}
+
+function requireRole(minimumRole) {
+  return function (req, res, next) {
+    if (!req.user) {
+      return res.status(401).json({ error: 'Not authenticated' });
+    }
+    const userLevel = ROLE_HIERARCHY[req.user.role] || 0;
+    const requiredLevel = ROLE_HIERARCHY[minimumRole] || 0;
+    if (userLevel >= requiredLevel) {
+      return next();
+    }
+    return res.status(403).json({ error: 'Insufficient permissions' });
+  };
+}
+
+function auditLog(action) {
+  return function (req, res, next) {
+    console.log(`[AUDIT] ${action} by user ${req.user?.id} at ${new Date().toISOString()}`);
+    next();
+  };
+}
+
+module.exports = { authenticate, requireRole, auditLog };
```

```diff
diff --git a/src/routes/users.js b/src/routes/users.js
--- a/src/routes/users.js
+++ b/src/routes/users.js
@@ -1,12 +1,78 @@
 const express = require('express');
 const router = express.Router();
-const { requireAuth } = require('../middleware/auth');
+const { authenticate, requireRole, auditLog } = require('../middleware/auth');
 const userService = require('../services/userService');
 
-router.get('/users', requireAuth, async (req, res) => {
+router.get('/users', authenticate, requireRole('viewer'), async (req, res) => {
   const users = await userService.getAll();
   res.json(users);
 });
 
+router.get('/users/:id', authenticate, requireRole('viewer'), async (req, res) => {
+  const user = await userService.getById(req.params.id);
+  if (!user) return res.status(404).json({ error: 'Not found' });
+  res.json(user);
+});
+
+router.put('/users/:id', authenticate, requireRole('editor'), auditLog('UPDATE_USER'), async (req, res) => {
+  const { name, email } = req.body;
+  const updated = await userService.update(req.params.id, { name, email });
+  res.json(updated);
+});
+
+router.delete('/users/:id', authenticate, requireRole('admin'), auditLog('DELETE_USER'), async (req, res) => {
+  if (req.user.id === parseInt(req.params.id)) {
+    return res.status(400).json({ error: 'Cannot delete your own account' });
+  }
+  await userService.delete(req.params.id);
+  res.status(204).send();
+});
+
+router.post('/users/:id/promote', authenticate, requireRole('admin'), auditLog('PROMOTE_USER'), async (req, res) => {
+  const { role } = req.body;
+  const allowedRoles = ['viewer', 'editor', 'admin'];
+  if (!allowedRoles.includes(role)) {
+    return res.status(400).json({ error: 'Invalid role' });
+  }
+  const updated = await userService.setRole(req.params.id, role);
+  res.json(updated);
+});
```

```diff
diff --git a/src/routes/auth.js b/src/routes/auth.js
new file mode 100644
--- /dev/null
+++ b/src/routes/auth.js
@@ -0,0 +1,48 @@
+const express = require('express');
+const router = express.Router();
+const { createToken, refreshToken } = require('../auth/jwt');
+const userService = require('../services/userService');
+const bcrypt = require('bcrypt');
+
+router.post('/login', async (req, res) => {
+  const { email, password } = req.body;
+  const user = await userService.getByEmail(email);
+
+  if (!user) {
+    return res.status(401).json({ error: 'Invalid credentials' });
+  }
+
+  const valid = await bcrypt.compare(password, user.password_hash);
+  if (!valid) {
+    return res.status(401).json({ error: 'Invalid credentials' });
+  }
+
+  const token = createToken(user);
+  res.json({ token });
+});
+
+router.post('/refresh', async (req, res) => {
+  const { token } = req.body;
+  if (!token) return res.status(400).json({ error: 'Token required' });
+
+  const newToken = refreshToken(token);
+  if (!newToken) return res.status(401).json({ error: 'Invalid or expired token' });
+
+  res.json({ token: newToken });
+});
+
+router.post('/logout', (req, res) => {
+  // JWT is stateless — logout is client-side
+  res.json({ message: 'Logged out' });
+});
```

```diff
diff --git a/src/models/user.js b/src/models/user.js
--- a/src/models/user.js
+++ b/src/models/user.js
@@ -8,6 +8,14 @@ const userSchema = {
   email: { type: String, required: true, unique: true },
   password_hash: { type: String, required: true },
   role: { type: String, default: 'viewer' },
+  created_at: { type: Date, default: Date.now },
+  updated_at: { type: Date, default: Date.now },
 };
 
+// Role validation
+const VALID_ROLES = ['viewer', 'editor', 'admin', 'superadmin'];
+
+function validateRole(role) {
+  return VALID_ROLES.includes(role);
+}
+
 module.exports = { userSchema };
```

```diff
diff --git a/src/db/migrations/003_add_role_column.sql b/src/db/migrations/003_add_role_column.sql
new file mode 100644
--- /dev/null
+++ b/src/db/migrations/003_add_role_column.sql
@@ -0,0 +1,12 @@
+-- Add role column with default
+ALTER TABLE users ADD COLUMN role VARCHAR(20) NOT NULL DEFAULT 'viewer';
+
+-- Seed existing admin users
+UPDATE users SET role = 'admin' WHERE email IN (
+  SELECT email FROM admin_emails
+);
+
+-- Add role index
+CREATE INDEX idx_users_role ON users(role);
```

---

## Deliberately planted issues (evaluator reference only)

**Security:**
1. Hardcoded fallback secret: `const SECRET = process.env.JWT_SECRET || 'fallback-dev-secret'` — if JWT_SECRET is not set in production, tokens are signed with a known string. Critical.
2. Token not invalidated on logout: JWT is stateless, logout route just returns success. No token blocklist. An attacker with a stolen token can continue using it for 7 days post-logout. Architectural — should be raised as a blocking concern with guidance.
3. `refreshToken` re-signs without checking if the user's role has changed — a demoted user retains their old role in tokens for up to 7 days. Cross-cutting issue.
4. `auditLog` uses `console.log` — no structured logging, no persistence, no tamper protection. Logs are lost on restart.

**Correctness:**
5. `promote` endpoint: `allowedRoles` excludes 'superadmin' — no one can ever be promoted to superadmin via the API. May be intentional or may be a bug depending on requirements. Raise as question, not blocker.
6. `validateRole` function defined in user.js but never exported or used anywhere.
7. `ROLE_HIERARCHY` defined in middleware/auth.js; `VALID_ROLES` defined in models/user.js — two separate definitions of the same concept, can diverge. `ROLE_HIERARCHY` has 4 roles but `allowedRoles` in promote has 3. Pattern: duplicated role definitions.

**Migration safety:**
8. `003_add_role_column.sql`: `admin_emails` table may not exist in all environments — migration will fail silently or error depending on DB. No existence check.
9. Migration is not reversible — no `DOWN` migration.

**Naming/scope:**
10. `promote` endpoint naming preference (could be `PUT /users/:id/role`) — `suggestion`, NOT blocker.
11. `auditLog` middleware could be more descriptive — `suggestion`.

**Comment avalanche opportunity:**
12. `ROLE_HIERARCHY` vs `VALID_ROLES` vs `allowedRoles` — same issue in auth.js, models/user.js, and routes/users.js. Should be consolidated to ONE comment noting the duplicated role definition pattern applies throughout.

**Out-of-scope planted:**
13. `src/services/userService.js` is not in the diff but has SQL injection from test-run-01 — reviewer should NOT re-raise those issues here.

**Scale test:**
- PR is 520 LOC across 5 directories — triggers LARGE CHANGESET (>400 LOC) and CROSS-CUTTING CHANGE (>3 directories) flags from Step 1
- Many distinct issues across different dimensions — tests whether the reviewer can maintain coherence across all of them
