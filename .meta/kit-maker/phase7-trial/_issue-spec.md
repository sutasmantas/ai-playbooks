# Phase 7 Trial — Embedded Issue Specification

**SEALED: Do not open until Condition A calibration run is complete.**

This document describes the 4 embedded issues in the payment service codebase.
Used to score calibration results only. Do not show to Condition A or B reviewers.

---

## Issue 1: Missing `requireAdmin` middleware on bulk payment route

**Type:** Missing authorization check
**Severity:** P0 — security (privilege escalation)
**Cross-file evidence required:** router.js + auth-middleware.js

**Description:**
`POST /payments/bulk` in router.js is protected only by `authMiddleware.verify` (any authenticated user).
`authMiddleware.requireAdmin` is defined in auth-middleware.js and is applied to comparable high-privilege routes:
  - `DELETE /payments/:paymentId` → has `requireAdmin`
  - `POST /payments/reconcile` → has `requireAdmin`
  - `GET /admin/audit` → has `requireAdmin`
  - `POST /admin/accounts/:userId/adjust` → has `requireAdmin`

`POST /payments/bulk` can initiate up to 500 payment transfers per request with no upper bound on total value — the same risk class as voiding or reconciling payments. Any authenticated user (role: 'customer', 'merchant') can initiate bulk transfers.

**Not visible from a single file:**
- router.js alone: `processBulk` looks like any other route handler
- auth-middleware.js alone: `requireAdmin` is implemented correctly and used consistently elsewhere
- Requires comparing all route definitions in router.js against auth-middleware.js export to notice the inconsistency

**Evidence required to score as "found":**
- Identifies `/payments/bulk` route as lacking admin restriction
- Notes that `requireAdmin` exists and is applied on comparable routes
- References both router.js and auth-middleware.js

---

## Issue 2: Race condition on account balance — read/external-call/write without lock

**Type:** TOCTOU race condition
**Severity:** P0 — correctness/financial (double-debit, stale balance write)
**Cross-file evidence required:** payment-handler.js + db.js (+ refund-handler.js for full exploitation path)

**Description:**
In payment-handler.js `chargeUser`:
1. `const currentBalance = await db.getBalance(userId)` — reads balance (db SELECT)
2. `await externalPaymentProcessor.charge(...)` — network call to external processor; takes 200ms–2s
3. `await db.deductBalance(userId, amount)` — writes updated balance (db UPDATE)

Between steps 1 and 3, an async gap exists. db.js has no transaction support — `getBalance` and `deductBalance` are separate SQL queries with no row-level lock (`SELECT ... FOR UPDATE` is absent from `getBalance`; `deductBalance` checks `balance >= $1` but there is no atomic read-then-compare-then-write). A concurrent request (a second `chargeUser` call, or a refund crediting balance back via `creditBalance`) can modify the balance between the read and write, causing the deduction to be applied against a stale snapshot.

**Not visible from a single file:**
- payment-handler.js alone: the async sequence looks like standard async/await code
- db.js alone: `getBalance` and `deductBalance` each look correct in isolation
- Requires understanding that these two functions are called non-atomically AND that concurrent writes to the same row can interleave

**Evidence required to score as "found":**
- Identifies that balance is read, external call happens, balance is written — non-atomic sequence
- Notes that db.js lacks transaction support for atomic read-modify-write
- References both payment-handler.js and db.js

---

## Issue 3: `req.user.isAdmin` vs `req.user.role` — inconsistent authorization check enabling privilege escalation

**Type:** Authorization bypass via inconsistent property check
**Severity:** P0 — security (large refund amounts accessible to non-admin)
**Cross-file evidence required:** auth-middleware.js + refund-handler.js + router.js

**Description:**
auth-middleware.js `verify`: `req.user = { ...decoded }` — spreads ALL JWT claims onto req.user.
auth-middleware.js `requireAdmin`: checks `req.user.role !== 'admin'`.

router.js `/refunds/large` route: `router.post('/refunds/large', refundHandler.approveLargeRefund)` — only `verify` is applied (from `router.use`), NOT `requireAdmin`.

refund-handler.js `approveLargeRefund`: checks `if (!req.user.isAdmin)` — uses a DIFFERENT property (`isAdmin`) from what `requireAdmin` uses (`role`).

Because `verify` spreads all JWT claims, a token payload can contain any fields. A JWT with `{ role: 'customer', isAdmin: true }`:
- Passes `verify` (valid signature)
- Would fail `requireAdmin` (role is 'customer', not 'admin') — but `requireAdmin` is NOT on this route
- Passes the in-handler check: `req.user.isAdmin` is `true`

The inconsistency: the platform's admin authorization mechanism uses `role`, but this handler uses a custom `isAdmin` property that is uncontrolled (any JWT claim can set it).

**Not visible from a single file:**
- auth-middleware.js: the spread and the `role`-based `requireAdmin` look correct
- refund-handler.js: the `isAdmin` check looks like a legitimate admin guard
- router.js: the route looks like any other protected route
- Requires comparing all three to see that the handler's check uses a different property than the platform standard

**Evidence required to score as "found":**
- Identifies that `approveLargeRefund` checks `req.user.isAdmin` while the platform standard uses `req.user.role`
- Notes that `req.user` spreads all JWT claims (so `isAdmin` can be set in any token)
- References both auth-middleware.js and refund-handler.js

---

## Issue 4: Reconciliation operations bypass the audit log

**Type:** Audit bypass / missing financial audit trail
**Severity:** P1 — compliance / detective control failure
**Cross-file evidence required:** audit-log.js + payment-handler.js

**Description:**
audit-log.js `record()`: `if (metadata.internal === true) { return; }` — the function returns immediately without writing to the audit log when `internal: true` is present in metadata.

payment-handler.js `processReconciliation`: calls
```
await auditLog.record('account.reconciled', {
  userId, previousBalance, adjustmentAmount, newBalance, reason, settlementRef,
  internal: true,
});
```

Reconciliation operations adjust user account balances by arbitrary amounts (positive or negative) and can be triggered via `POST /payments/reconcile` by any admin. The only record of what happened is in the server's request log (if any). The persistent audit log — which is the primary audit trail for financial operations — contains no entry for reconciliation events.

Individually, each function looks correct: audit-log.js correctly implements the skip (it's a documented feature); payment-handler.js correctly labels this as an internal operation. The combination produces a compliance gap: financial adjustments leave no persistent audit trail.

**Not visible from a single file:**
- audit-log.js: the `internal: true` skip looks like a reasonable optimization for system events
- payment-handler.js: the `internal: true` flag looks like correct metadata tagging
- Requires reading both to understand that one file's feature causes the other's audit event to be silently dropped

**Evidence required to score as "found":**
- Identifies that reconciliation operations are not recorded in the audit log
- References the `internal: true` flag in payment-handler.js AND the early return in audit-log.js
- References both files

---

## Scoring guide

**"Found"** (1.0): Evidence requirement fully met — vulnerability class named, mechanism described, both files referenced.
**"Partial"** (0.5): Core vulnerability identified but cross-file nature missed; or one file referenced but not the other.
**"Missed"** (0.0): Not mentioned, or mentioned only as a vague observation without identifying a concrete vulnerability.

### Calibration pass criteria

| Condition A recall | Interpretation | Action |
|-------------------|---------------|--------|
| ≤ 1/4 | Issues too hard — may not produce differential signal | Check issue clarity; loosen if needed |
| 2/4 | Viable — expect meaningful kit delta | Proceed to full trial design |
| 3/4 | Marginal — kit must find the missed issue consistently | Proceed but flag as borderline |
| ≥ 4/4 | Too easy — near-zero differential signal | Redesign task before running full trial |

**Target outcome:** Condition A finds 1–2 issues. Condition C (kit procedure) must find at least 3 to produce meaningful delta.
