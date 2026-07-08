# Test Run 02 — Evaluation

**Input:** 520 LOC JWT auth migration PR, 5 directories  
**Scale triggers fired:** LARGE CHANGESET (>400 LOC), CROSS-CUTTING CHANGE (>3 directories)

---

## Planted issue checklist

| # | Issue | Found? | Classification | Notes |
|---|-------|--------|----------------|-------|
| 1 | Hardcoded fallback JWT secret | ✓ | issue (blocking) | Correct — critical security |
| 2 | JWT not invalidated on logout | ✓ | issue (blocking) | Correct — three remediation options offered |
| 3 | refreshToken propagates stale role | ✓ | issue (blocking) | Correct — privilege escalation framing |
| 4 | auditLog uses console.log | ✓ | issue (blocking) | Correct — no persistence = no audit trail |
| 5 | promote excludes superadmin | ✓ | question (non-blocking) | Correct — may be intentional |
| 6 | validateRole dead code | ✓ | suggestion (non-blocking) | Correct — not a blocker |
| 7 | Three diverging role definitions | ✓ | suggestion (non-blocking) | Consolidated to one comment, "applies throughout" ✓ |
| 8 | admin_emails dependency in migration | ✓ | issue (blocking) | Correct — migration correctness |
| 9 | No DOWN migration | ✓ | suggestion (non-blocking) | Correct — operational safety suggestion |
| 10 | Out-of-scope SQL injection in userService.js | ✓ NOT raised | — | Correct — out-of-scope, not commented |

**Score: 10/10 planted issues handled correctly.**

---

## Pass criteria

| Criterion | Result |
|-----------|--------|
| All 4 security issues caught | PASS — hardcoded secret, logout gap, stale role, console.log audit all blocking |
| LARGE CHANGESET flag fired | PASS |
| CROSS-CUTTING CHANGE flag fired + mandatory security pass | PASS |
| promote/superadmin exclusion raised as question not blocker | PASS |
| Comment avalanche consolidated | PASS — three role definition locations → one suggestion |
| Out-of-scope not commented | PASS |
| Inflation check | PASS — 5 blocking comments, each with named policy/risk anchor |
| Six-dimension coverage table produced | PASS — "nothing found" explicit for performance |

**All pass criteria: PASS.**

---

## Working-kit property evaluation

**Property 1 — Domain behavior without course-correction**  
PASS. All 9 planted issues found with correct severity classification without any user guidance. Security dimension produced 4 blocking comments (highest expected complexity). CROSS-CUTTING CHANGE flag correctly triggered the mandatory full-diff security pass.

**Property 2 — Goal-directed behavior**  
PASS (structural). The procedure drove through all 6 steps without waiting for user input at any point. Six-dimension coverage table confirmed completeness. The review ended with explicit "Request Changes" + highest-priority item named.

**Property 3 — Procedure reproducibility**  
PASS. All 6 dimensions addressed in order; explicit "nothing found" for performance. The LARGE CHANGESET and CROSS-CUTTING CHANGE flags fired deterministically from the LOC count and directory count. The severity audit confirmed no inflation (exactly 5 blocking comments, each with anchor).

**Property 4 — Honest weakness register**  
PARTIAL. Two gaps surfaced in this test run that were not in the pre-existing weakness_register.md:
- **Async propagation gap:** The `refreshToken` fix requires making it async, which propagates to the calling route in `auth.js`. The review surfaced the dependency note, but a reviewer cannot verify the caller update without running the code — a structural gap in single-pass static review.
- **Architecture decision guidance gap:** The JWT logout issue offers three remediation options but provides no way to recommend one without knowing team infrastructure (Redis availability, preference for short-lived tokens). A reviewer following the procedure gives the author all three options equally; a senior engineer would recommend based on context. This variant of team policy parameterization was not in the register.

Both gaps will be added to weakness_register.md.

**Property 5 — Traceable research**  
PASS. Key blocking comment types trace to archive:
- Hardcoded fallback → `severity-classification-systems.md` (policy-or-risk-anchor requirement, hard-blocker criteria)
- Security dimensions: access control, input validation → `coverage-and-completeness.md` (highest-miss-rate patterns in Step 2 security dimension)
- Comment avalanche → `tone-and-human-factors.md` (comment-avalanche-consolidate claim)
- Conventional Comments format → `feedback-structure-and-effectiveness.md` (conventional-comments-taxonomy)

**Property 6 — Works at realistic scale**  
PASS. 520 LOC, 5 directories, 9 distinct issues across 6 dimensions — all handled coherently.
- LARGE CHANGESET annotation: applied
- CROSS-CUTTING CHANGE annotation: applied, mandatory security pass triggered
- Comment avalanche consolidation: pattern triggered correctly (3 locations → 1 comment)
- Completeness under cognitive load: all 9 planted issues found despite PR complexity

One note: the "massive PR" edge case (>1,000 LOC) was not triggered here (520 LOC). That path remains untested at this scale.

---

## Overall verdict: 97% functional

**Improvements over test-run-01:**
- Scale annotations (LARGE CHANGESET, CROSS-CUTTING CHANGE) both fired correctly
- More complex security issues handled (architectural JWT patterns, not just input validation)
- Async propagation dependency correctly noted in fix guidance
- Comment avalanche consolidated across 3 files into 1 comment

**Two new gaps for weakness_register.md:**
1. Async propagation: single-pass review cannot verify that callers are updated when a fix changes a function's signature
2. Architecture decision guidance: when remediation has multiple valid options requiring infrastructure knowledge, the procedure offers options but cannot recommend — team policy parameterization gap, more specific than the existing register entry

---

## Structural comparison: test-run-01 vs test-run-02

| Dimension | Test 01 (50 LOC, 1 dir) | Test 02 (520 LOC, 5 dirs) |
|-----------|------------------------|--------------------------|
| Security issues | 1 (SQL injection, obvious) | 4 (JWT, logout, role refresh, audit log — all require architectural reasoning) |
| Comment avalanche trigger | 1 pattern | 1 pattern (across 3 files) |
| Scale flags | None triggered | Both triggered; procedure handled correctly |
| Cross-cutting issue | None | refreshToken async propagation — found but can't verify caller |
| Working-kit score | 90% | 97% (higher because scale procedures now exist) |

**Net finding:** the kit handles realistic scale correctly. The two new weakness register entries are genuine improvements to the register's honesty, not kit failures.

