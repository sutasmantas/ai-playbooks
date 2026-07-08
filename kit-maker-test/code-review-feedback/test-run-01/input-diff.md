# Test Input: PR Diff

**PR title:** Add user search endpoint  
**PR description:** Adds a /search endpoint that lets admins find users by email or username.  
**LOC:** ~120  
**Directories:** `src/routes/`, `src/services/`

---

## Diff

```diff
diff --git a/src/routes/users.js b/src/routes/users.js
index 4a2c1e8..8b3f9c2 100644
--- a/src/routes/users.js
+++ b/src/routes/users.js
@@ -1,5 +1,6 @@
 const express = require('express');
 const router = express.Router();
+const userService = require('../services/userService');
 
 router.get('/users', async (req, res) => {
   const users = await userService.getAll();
@@ -7,6 +8,32 @@ router.get('/users', async (req, res) => {
   res.json(users);
 });
 
+router.get('/search', async (req, res) => {
+  const { query, field } = req.query;
+  
+  if (!query) {
+    return res.status(400).json({ error: 'query is required' });
+  }
+
+  // Search users by field
+  const results = await userService.searchUsers(query, field);
+  res.json(results);
+});
+
+router.post('/users/:id/promote', async (req, res) => {
+  const { id } = req.params;
+  const user = await userService.getById(id);
+  
+  if (!user) {
+    return res.status(404).json({ error: 'User not found' });
+  }
+  
+  user.role = 'admin';
+  await userService.save(user);
+  
+  res.json({ success: true, user });
+});
+
 module.exports = router;
```

```diff
diff --git a/src/services/userService.js b/src/services/userService.js
index 1c3d2f4..9a8e7b1 100644
--- a/src/services/userService.js
+++ b/src/services/userService.js
@@ -1,10 +1,33 @@
 const db = require('../db');
 
 async function getAll() {
-  return db.query('SELECT * FROM users');
+  return db.query('SELECT id, email, username, role, created_at FROM users');
 }
 
+async function getById(id) {
+  const rows = await db.query(`SELECT * FROM users WHERE id = ${id}`);
+  return rows[0];
+}
+
+async function searchUsers(query, field = 'email') {
+  const allowedFields = ['email', 'username'];
+  
+  const sql = `SELECT id, email, username FROM users WHERE ${field} LIKE '%${query}%'`;
+  return db.query(sql);
+}
+
+async function save(user) {
+  await db.query(
+    'UPDATE users SET role = ? WHERE id = ?',
+    [user.role, user.id]
+  );
+}
+
 module.exports = {
   getAll,
+  getById,
+  searchUsers,
+  save,
 };
```

---

## Deliberately planted issues

(For evaluator reference only — not shown to the reviewer)

1. **SQL injection in `getById`** — `WHERE id = ${id}` uses string interpolation, not parameterized query. Exploitable via path parameter.
2. **SQL injection in `searchUsers`** — `${field}` and `${query}` both interpolated into query string. `field` validation exists but runs AFTER interpolation is already in the SQL (allowedFields check is missing — code validates nothing, just sets a default). Actually: wait, `field` comes from `req.query.field` and `allowedFields` is defined but never used to validate — the SQL is built before any validation.
3. **No auth check on `/search`** — PR description says "lets admins find users" but there is no authorization check; any authenticated or unauthenticated user can call it.
4. **No auth check on `POST /users/:id/promote`** — promotes any user to admin with no authorization check.
5. **`allowedFields` defined but never used** — dead code / the field validation is vestigial.
6. **Naming preference (not a blocker):** the function `save` is vague (could mean insert or update), `updateRole` would be clearer. This should be a `suggestion`, NOT a blocker.
7. **Comment avalanche opportunity:** both `getById` and `searchUsers` have SQL injection — the procedure should consolidate rather than file two separate SQL injection comments.
8. **Out-of-scope in adjacent code (planted):** the existing `getAll` function at the top changed from `SELECT *` to explicit columns — this is pre-existing code improvement, not part of the new feature. Should NOT be flagged in this review.

Adjacent file NOT in diff (to test out-of-scope rule):
- `src/middleware/auth.js` — exists but is not in the diff. Reviewer should not comment on it even if they think it's relevant.
