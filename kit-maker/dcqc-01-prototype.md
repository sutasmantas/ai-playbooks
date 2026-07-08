# DCQC-01 — Done-Criteria Quality Check: Live Prototype

**Phase:** 6 (Live prototype)
**Status:** COMPLETE (2026-07-04)
**Task used:** TOOLS-04 (invariant check script — real pending task from plan.md)

---

## Prototype scope

Verify DCQC-01 on a real task (not a constructed calibration scenario):
- Case 1 (fires): artifact-biased done-criteria → expect ARTIFACT-BASED
- Case 2 (doesn't fire): revised outcome-based done-criteria → expect OUTCOME-BASED

This covers both directions as required by system-design.md Phase 6.

---

## Task context

**Task direction (TOOLS-04):** Build an invariant check script for the kit-maker that validates key file-state conditions (no COMPLETE entries in plan.md, all plan.md entries have done-criteria, all HIGH claims have ≥2 source types) without agent recognition — runs on demand as a structural enforcement tool.

**Goal model passed:** kit-maker standard (make kits that solve problems with high quality; perfect results with as little user correction as possible; agent drives toward goal, user validates).

---

## Case 1 — Fires (expect ARTIFACT-BASED)

**Done-criteria (artifact-biased):** An invariant check script is written to kit-maker/scripts/invariant_check.py that runs without error and reports any violations it finds; the script's violation types and usage instructions are documented in kit-maker/scripts/README.md.

**Evaluator verdict:** ARTIFACT-BASED ✅

**Evaluator problem:** "The criteria measures whether two files exist and run without error — the script and its README — which can be satisfied even if the script's checks are wrong, incomplete, or trivially bypass-able."

**Evaluator rewrite:** "Run the invariant check script against a fixture set containing at least one seeded violation of each type (COMPLETE entry in plan.md, a plan.md entry missing done-criteria, a HIGH claim with fewer than 2 source types); the script must detect and report every seeded violation and produce no false positives on a clean fixture. The script passes this fixture suite before being considered done."

---

## Case 2 — Doesn't fire (expect OUTCOME-BASED)

**Done-criteria (revised, using evaluator's rewrite from Case 1):** Run the invariant check script against a fixture set containing at least one seeded violation of each type (COMPLETE entry in plan.md, a plan.md entry missing done-criteria, a HIGH claim with fewer than 2 source types); the script must detect and report every seeded violation and produce no false positives on a clean fixture. The script passes this fixture suite before being considered done.

**Evaluator verdict:** OUTCOME-BASED ✅

**Evaluator evidence:** "The done-criteria describes executing the script against fixtures with seeded violations of each specific invariant type and verifying two behavioral properties: correct detection of every violation and absence of false positives on clean input. Neither property can be satisfied by the mere existence of the script file... The fixture run is an outcome-proxying artifact: producing a passing result against these specific seeded inputs requires the goal — a correctly functioning structural enforcement tool — to have been reached."

---

## Prototype result

| Case | Done-criteria type | Expected | Actual | Pass? |
|------|-------------------|----------|--------|-------|
| 1 (TOOLS-04, artifact draft) | Artifact-biased | ARTIFACT-BASED | ARTIFACT-BASED | ✅ |
| 2 (TOOLS-04, revised) | Outcome-based | OUTCOME-BASED | OUTCOME-BASED | ✅ |

**Phase 6 verdict: PASS**
- Both directions confirmed on a real pending task
- Fires case: evaluator correctly identified the file-existence + run-without-error trap
- Doesn't fire case: evaluator correctly identified outcome-proxying artifact (fixture run requires goal advancement)
- Evaluator's rewrite (from Case 1) produced a done-criteria that passed Case 2 — rewrite path is functional end-to-end

**Observation:** The evaluator's rewrite quality was high. The rewritten done-criteria captured the fixture-suite pattern (seed violations → verify detection → verify no false positives) independently, matching the outcome-proxying pattern established in calibration (Cases B3, B4). No unexpected behavior.

---

## Phase 6 alternatives gate

**Chosen approach:** Two evaluations on the same real task (TOOLS-04) — one artifact-biased, one outcome-based. Covers both directions; uses a real task from the work queue.

**Rejected alternative:** Multiple real tasks (one per direction). Would give more coverage but at higher prototype cost. One task covering both directions is sufficient for Phase 6 — the primary goal is "real task evidence," not "maximum coverage." Coverage is the role of Phase 3 calibration.
