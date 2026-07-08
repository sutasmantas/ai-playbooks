# Test Run 01 — Evaluation

## Pass criteria (from plan.md)

| Criterion | Result | Notes |
|---|---|---|
| Security issue caught AND labeled correctly | PASS | SQL injection + auth missing both caught as `issue (blocking)` |
| Correctness bug caught AND labeled blocker with named risk | PASS | `allowedFields` dead code with named risk: false security assurance + SQL injection |
| Naming preference NOT labeled as blocker | PASS | `save` naming labeled `suggestion (non-blocking)` |
| Comment avalanche consolidated | PASS | SQL injection in 2 functions → 1 comment; auth missing in 2 endpoints → 1 comment |
| Out-of-scope issue NOT commented on | PASS | `auth.js` not mentioned; only diff code commented |

All 5 pass criteria: PASS

---

## 5 working-kit properties check

**1. Domain behavior without course-correction**
PASS. Procedure followed completely without deviation. No invented steps. All findings derived from procedure steps, not prior knowledge.

**2. Goal-directed behavior**
PASS. SQL injection and missing auth correctly identified as blockers with policy anchors. Naming preference correctly identified as suggestion. The discrimination between blocker and suggestion worked as intended — 3 blockers, not 6-7.

**3. Procedure reproducibility**
PASS. All 6 checklist steps completed. Each comment traceable to a procedure step (SQL injection from Step 2 security pass; consolidation rule from Step 3 pre-write filter; auth from Step 2 security pass; dead code from Step 5A dimension check completing the Step 2 correctness pass). Human review checklist all ☑.

**4. Honest weakness register**
Documented in weakness_register.md. One gap surfaced during this test run (see below).

**5. Traceable research**
PASS. SQL injection blocking classification traces to `must-fix-policy-or-risk-anchor` (severity archive) and `hard-blocker-criteria`. Auth missing traces to `hard-blocker-criteria`. Consolidation traces to `comment-avalanche-consolidate`.

---

## Overall functional rating: 90%

---

## Comparison with meeting notes kit test run

**What was easier here:**
- Severity accuracy was MORE objective, not less. SQL injection is definitively a blocker (OWASP policy). The hypothesis that "subjective quality" would make severity harder to formalize was wrong. When the policy anchor is clear (OWASP, PR's stated intent), the severity decision is mechanical.
- No equivalent of the "hedged decision language" ambiguity from meeting notes. Either there's auth middleware or there isn't.

**What was harder:**
- The access control miss pattern from Chromium OS study (cross-cutting concerns requiring broader context) was NOT tested here. All security issues were locally visible: missing auth middleware is directly visible in the route handler. The harder case — auth is present but the permission model is wrong — would require broader codebase context.
- The test did NOT include the hardest coverage failure mode. This is a known gap.

---

## New gap discovered during test run

**Gap:** Cross-cutting access control bugs (permission logic errors, not permission absence) require codebase context not available in a single PR diff. The procedure correctly flags "missing auth middleware" (locally visible) but cannot catch "auth middleware present but permission model incorrect" (requires understanding the whole permission graph).

**Action:** Add to weakness_register.md.

---

## What the structural comparison reveals

Both kits share one structural pattern: **systematic omission bias compensated by an explicit extraction pass**.

- Meeting notes: positional bias (final-third content missed) → required explicit final-third check
- Code review: coverage bias (security missed without explicit prompting) → required explicit six-dimension pass

Both kits share another: **the consolidation / deduplication rule for repeated patterns**.
- Meeting notes: deduplication edge case for items mentioned by multiple speakers
- Code review: comment avalanche rule for same pattern in multiple locations

Both kits share: **severity / classification requires an operationalizable anchor, not judgment**.
- Meeting notes: decision 4-field requirement; [RATIONALE NOT CAPTURED] flag
- Code review: "must-fix must tie to policy or risk" rule

These three patterns appear to be STRUCTURAL to the kit-maker process, not domain-specific.

**Domain-specific findings:**
- Meeting notes: speaker attribution, parking lot vs. open question distinction, facilitator commitment edge case
- Code review: team policy parameterization (test policy, severity guide), cross-cutting auth concerns, static vs. dynamic analysis boundary
