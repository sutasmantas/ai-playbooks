# DCQC-01 — Done-Criteria Quality Check: Maintenance Design

**Phase:** 8 (Maintenance design)
**Status:** COMPLETE (2026-07-04)
**Companion:** dcqc-01-boundary.md (worker action protocol), dcqc-01-calibration.md (calibration cases)

---

## 1. Drift signatures

DCQC-01 drifts when the evaluator's judgments stop being adversarial — when it passes what it should block, or blocks what it should pass. Observable signals of drift:

**Rubber-stamp drift (passes what should block):**
- Consecutive tasks close with DCQC-01 OUTCOME-BASED but later A1 or user catches a task's done-criteria was artifact-based
- Evaluator never asks for a rewrite across many tasks — rewrite rate near zero over a sustained period suggests the evaluator is not applying the test rigorously
- Evaluator passes done-criteria that contains "file X exists" or "procedure Y updated" patterns without escalation

**Over-blocking drift (blocks what should pass):**
- Evaluator consistently returns ARTIFACT-BASED on tasks that have clear behavioral outcomes
- Worker escalates to State 3 (3 failed rewrites) multiple times per week — high escalation rate suggests the evaluator is miscalibrated toward false-positives
- Rewrite suggestions convert clearly-outcome-based done-criteria into different, not better, ones

**Evaluator output quality drift:**
- Problem field becomes generic ("this could be satisfied by an artifact") rather than naming the specific artifact component
- Rewrite field produces outcomes that themselves would fail the outcome test
- Evidence field (in OUTCOME-BASED verdicts) does not name the causal chain

---

## 2. Audit trigger and procedure

**Audit trigger:** Fire an audit when any of:
- A new Pattern A mistake (artifact-criteria executed) appears in mistakes.md after DCQC-01 is live — DCQC-01 should have caught it
- 10 or more tasks have been closed since the last calibration check
- Any rubber-stamp or over-blocking signal observed (Section 1 above)

**Audit procedure:**
1. Re-run all 8 calibration cases from dcqc-01-calibration.md against the current prompt (dcqc-01-prompt.md)
2. Compare each actual verdict against the expected verdict
3. If all 8 match expected: clean audit — update audit date
4. If any mismatch: flag as recalibration trigger (Section 3)

**Clean audit evidence standard:** All 8 cases match expected (A1/A2/A3 → ARTIFACT-BASED; B2/B3/B4 → OUTCOME-BASED; B1/C1 → ARTIFACT-BASED per multi-part/run-and-record rules). Any mismatch = audit fails.

**Audit schedule (no recognition check required):** After every 10 task closes that carry a DCQC-01 OUTCOME-BASED sign-off. The count is checkable from TASK_TEMPLATE Section 1.1 sign-off fields across closed tasks.

---

## 3. Recalibration triggers

These specific observable conditions require prompt revision before the next task opens:

1. **New Pattern A mistake after DCQC-01 live:** A task closes with DCQC-01 OUTCOME-BASED, but the done-criteria turns out to have been artifact-based (caught by A1 or user at task close or after). This is a false OUTCOME-BASED verdict — DCQC-01 failed to catch an artifact-criteria case it should have blocked.

2. **Calibration case mismatch:** Any calibration case from dcqc-01-calibration.md returns a verdict different from expected. Even one mismatch triggers recalibration.

3. **Sustained rubber-stamp signal:** Worker-logged rewrite rate near zero for ≥5 consecutive tasks with substantively different done-criteria types. The expected rewrite rate is not zero — some tasks will have well-written done-criteria, but a 0% rewrite rate over 5+ varied tasks signals the evaluator has lost discriminative power.

4. **New documented failure class not in calibration deck:** A new Pattern A sub-type appears in mistakes.md that wasn't represented in any calibration case. Add the new case to dcqc-01-calibration.md before the next task opens.

---

## 4. Recalibration process

**Step 1 — Identify the drift direction**
- If False OUTCOME-BASED (Trigger 1, 2 on artifact case): evaluator is too permissive. The outcome test is being applied too weakly — probe whether the prompt's "outcome test" phrasing has drifted or the evaluator's weighting of the test has weakened.
- If False ARTIFACT-BASED (Trigger 2 on outcome case): evaluator is too restrictive. Check whether the outcome-proxying artifact test is being applied, or whether the evaluator is defaulting to ARTIFACT-BASED without applying it.

**Step 2 — Locate the failure in the prompt**
Read dcqc-01-prompt.md. Identify which section the evaluator should have used to produce the correct verdict. Test: "If the evaluator had followed this section literally, would it have produced the correct verdict?"
- If YES (prompt is correct; evaluator didn't follow it): prompt wording may need to be made more explicit or prior-example-heavy
- If NO (prompt would produce the wrong verdict): revise the prompt section directly

**Step 3 — Write the new calibration case**
Add the triggering case to dcqc-01-calibration.md (if not already there). Include: task direction, done-criteria, expected verdict, actual verdict (at time of failure), what the prompt should have produced and why.

**Step 4 — Revise the prompt**
Make the smallest change that fixes the identified failure case. Test the change against all existing calibration cases before deploying — a fix that closes one gap while opening another is worse than the original.

**Step 5 — Re-run full calibration**
Run all calibration cases (original + new) against the revised prompt. All must return expected verdicts. If any fail: return to Step 2.

**Step 6 — Update version and audit date**
Update dcqc-01-prompt.md version field (DCQC-01-P2-PROD → DCQC-01-P2-PROD-v2, etc.) and record the recalibration event in this file.

---

## 5. Temporal decay management

As the kit-maker evolves, new failure modes will be documented in mistakes.md. The calibration deck must evolve to cover them.

**Decay check:** At every recalibration event, check mistakes.md Pattern Summary for new Pattern A sub-types. For each new sub-type: is there a calibration case that covers it? If NO: write and run the case before closing the recalibration event.

**Calibration deck growth rule:** The deck should grow over time. A deck that stays at 8 cases while mistakes.md accumulates new Pattern A sub-types is a sign that temporal decay management isn't running. Target: at least one calibration case per documented done-criteria failure sub-type.

**Prompt drift (environment changes):** If the kit's goal model, task structure, or failure class taxonomy changes significantly — re-read the prompt for conceptual coherence before the next run. The prompt uses the term "goal advancement"; if the goal model text changes, verify the prompt's framing still matches.

**N=1 caveat (SYSTEM procedure):** DCQC-01 is the second SYSTEM mechanism built (after SAT-EVAL-01 / goal checker). This maintenance document was written before field evidence. After 3+ real task recalibration events: review the drift signatures and recalibration triggers for accuracy. Revise any that proved inaccurate or uninformative.

---

## Recalibration event log

| Date | Trigger | Verdict type | Prompt change | Cases added |
|------|---------|--------------|---------------|-------------|
| 2026-07-04 | Initial calibration — Phase 3 (8 cases, all pass) | — | None (initial) | A1, A2, A3, B1, B2, B3, B4, C1 |

---

## Phase 8 alternatives gate

**Chosen approach:** Evidence-based recalibration (run failing case → identify prompt location → fix smallest change → re-run all). Prevents overfitting to new cases while breaking old ones.

**Rejected alternative:** Periodic full-prompt rewrite on a fixed schedule. Rejected because a full rewrite without a specific failing case introduces more risk than it mitigates — the existing prompt was calibrated; a rewrite discards that calibration without a reason. Rewrite is appropriate only when the failure points are distributed across the whole prompt (no single fixable section), not as a preventive measure.
