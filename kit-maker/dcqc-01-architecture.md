# DCQC-01 — Done-Criteria Quality Check: Architecture

**Status:** ALL PHASES COMPLETE (2026-07-04) — 8/8 phases; 3 adversarial passes; production-deployed
**Mechanism class:** SYSTEM (3.5/4 criteria met — see selector note)
**Companion files:** dcqc-01-prompt.md, dcqc-01-calibration.md, dcqc-01-boundary.md, dcqc-01-maintenance.md

---

## SYSTEM selector confirmation

1. **Always-active:** YES — fires at every task open (TASK_TEMPLATE Section 1.1). Not one-shot.
2. **Failure hard to detect post-hoc:** YES — if done-criteria is artifact-based at task open, the whole task executes toward the wrong target; A1 can catch it at close but cannot reverse a completed task.
3. **Getting it wrong risks all future work:** PARTIAL — one task's done-criteria is one task's scope. Does not cascade to all future work. This is the 0.5/1 that makes DCQC-01 3.5/4. Still using SYSTEM procedure because Criterion 4 (calibration required) clearly applies.
4. **Requires calibration before trust:** YES — the outcome/artifact distinction has edge cases (outcome-proxying artifacts, multi-part criteria with mixed types). Calibration determines whether the evaluator handles these correctly.

---

## What DCQC-01 does

DCQC-01 evaluates a draft done-criteria written at TASK_TEMPLATE Section 1.1 and classifies it as:
- **OUTCOME-BASED:** the criteria measures whether the goal was advanced — a behavioral, observable, causal condition that would be false if the work failed to matter
- **ARTIFACT-BASED:** the criteria measures whether specific deliverables exist — satisfied by producing artifacts even if those artifacts don't advance the goal

If ARTIFACT-BASED: DCQC-01 blocks execution (Section 4 gate) until the done-criteria is rewritten.

---

## What DCQC-01 does NOT do

- Does not evaluate whether the done-criteria is achievable
- Does not evaluate whether the done-criteria is the right goal (that's the goal checker's job)
- Does not evaluate whether the task direction is correct
- Does not evaluate whether the done-criteria will be met at close (that's A1's job)

One question only: is this done-criteria measuring an outcome or an artifact?

---

## Boundary with adjacent mechanisms

| Mechanism | When it fires | What it asks |
|-----------|--------------|--------------|
| Goal checker | Before every response | Does this direction advance the goal? |
| **DCQC-01** | Task open (Section 1.1) | Does this done-criteria measure outcome or artifact? |
| TASK_TEMPLATE Section 4 | Before execution | Are all preconditions for starting met? |
| A1 | Task close (Section 6) | Did the rules fire? Was done-criteria met? |

DCQC-01 is the only mechanism that evaluates done-criteria quality prospectively. Goal checker evaluates direction quality. A1 evaluates compliance and done-criteria satisfaction. These are non-overlapping.

---

## Trigger

**Structural trigger:** TASK_TEMPLATE Section 1.1 requires a DCQC-01 sign-off field. The field must be populated (OUTCOME-BASED or ARTIFACT-BASED → rewritten → re-run) before Section 4 is reachable. A blank field is a visible gate failure — the same structural enforcement used for SAT-EVAL-01's Section 6 gate.

Recognition check removed: the trigger is the field existence requirement, not agent judgment about "does this done-criteria look artifact-based?"

---

## Inputs (passed to fresh subagent)

1. **Draft done-criteria text** (verbatim from Section 1.1)
2. **Task direction** (one-sentence, from Section 0)
3. **Goal model** (verbatim from project-state.md Goal model section)

No other context. The evaluator reads cold — no task history, no prior conversation.

---

## Output

**OUTCOME-BASED:**
```
VERDICT: OUTCOME-BASED

Evidence: [One paragraph explaining what causal link connects this done-criteria to the goal — what would have to be true about the world for this criteria to be met, and why that condition means the goal was advanced.]
```

**ARTIFACT-BASED:**
```
VERDICT: ARTIFACT-BASED

Problem: [One sentence naming what makes this artifact-based — what artifact existence it measures.]

Rewrite: [Specific rewrite suggestion replacing artifact-presence with behavioral/causal condition.]
```

---

## Failure modes and mitigations

**Failure 1 — False OUTCOME-BASED (most costly):** Evaluator passes an artifact-criteria as outcome-based. Mitigation: calibration against M-06, M-25, M-35 verifies evaluator catches these specific failure types.

**Failure 2 — False ARTIFACT-BASED (less costly):** Evaluator blocks a genuine outcome-criteria. Mitigation: calibration against ≥3 clean outcome-criteria cases; explicit instruction in prompt for outcome-proxying artifacts.

**Failure 3 — Same-model bias:** DCQC-01 evaluator is the same model as the worker. If the worker tends to write artifact-criteria, the evaluator may similarly tend to accept them. This is Architecture Risk 5 (same-model limitation, from SAT-EVAL-01). No mitigation beyond calibration and maintenance monitoring.

---

## Open question for Phase 4

**Boundary case — outcome-proxying artifact:** A done-criteria like "sat-eval-01-calibration.md has ≥3 Condition 4 cases, all run against fresh subagents, results recorded" is artifact-in-form (a file has entries) but outcome-proxying (running fresh subagents IS the behavioral verification). The evaluator's boundary protocol must specify how to handle these without over-blocking. Resolution deferred to Phase 4.

---

## Phase 1 alternatives gate

**Chosen approach:** Outcome vs. artifact classification — evaluator asks "would the goal be advanced even if the artifact were corrupted or absent?" Direct test against the specific failure class (M-06, M-17, M-23, M-25, M-28, M-35 — all Pattern F).

**Rejected alternative:** Verifiability test — evaluator asks "can a fresh reader confirm this criterion from observable evidence?" This would have caught *vague* criteria but passes *clear artifact-criteria* ("file X exists" is perfectly verifiable by checking). Rejected because our failure class is artifact-criteria, not vague criteria. Verifiability would have won if the problem were unclear done-criteria on clearly good tasks — that is not the documented failure pattern.
