# SAT-EVAL-01 — Phase 8: Maintenance Design

**Phase:** 8 (Maintenance design)
**Status:** COMPLETE — 2026-07-04
**Source:** Architecture (Phase 1), calibration (Phase 3), boundary protocol (Phase 4), prototype (Phase 6)

---

## Purpose

This document specifies how SAT-EVAL-01 is maintained over time: what signals indicate it is drifting, when to audit, when to recalibrate, and how to do so. It also covers the wave retrofit problem — research waves designed before SAT-EVAL-01 existed must be explicitly wired in before they run.

---

## 1. Drift signatures

SAT-EVAL-01 is drifting when it produces wrong verdicts silently. The following are observable signals that drift has occurred. Check these at every periodic audit:

| Signal | What it looks like | Drift direction |
|--------|-------------------|-----------------|
| **False-SATURATED (rubber-stamping)** | SATURATED verdicts returned after 1-2 queries; zero-yield streak shorter than 3; unmet conditions not caught | Too permissive |
| **RESIDUAL_LIMITATION field generic** | Field text says "no traditions not probed" or copies generic language rather than naming specific unprobed vocabulary clusters | Prompt degraded |
| **Suggested queries not targeted** | NOT_SATURATED verdict suggests queries that restate the query just run rather than targeting the named unmet condition | Prompt degraded |
| **No evaluator invocations in recent session** | SAT-EVAL-01 was never dispatched during a multi-query research arc — mechanism bypassed | Worker bypass |
| **Self-declared saturation** | Archive's saturation_verdict field is absent or worker wrote "SATURATED" without a formal evaluator dispatch | Worker bypass |
| **Calibration case regression** | Any of the 8 calibration cases in sat-eval-01-calibration.md produces a verdict different from its expected output | Prompt drift |
| **Over-blocking (false NOT_SATURATED)** | B1'/B2/B3/C1 calibration cases produce NOT_SATURATED after clear saturation | Too strict |

---

## 2. Audit trigger

Run a maintenance audit when ANY of the following occurs:

1. **5 research sessions** where SAT-EVAL-01 was dispatched have elapsed since last audit (session count, not calendar time)
2. **Override in goal-checker-calibration.md Override log** — any entry where the worker overrode a NOT_SATURATED verdict and later assessment was "goal-checker-was-right" (i.e., premature saturation confirmed post-hoc)
3. **New failure class in mistakes.md** — any Pattern E (premature saturation / concept frame lock) or adjacent class entry added to mistakes.md
4. **TASK_TEMPLATE §2.6 conditions updated** — any change to the saturation conditions (the standard the evaluator evaluates against) requires re-verifying that the evaluator correctly reads the new conditions verbatim
5. **sat-eval-01-prompt.md edited** — any change to the evaluator prompt requires immediate recalibration before the next production use

---

## 3. Audit procedure

When audit is triggered:

1. **Check override log** (goal-checker-calibration.md) — have any "pending" override outcomes been resolved? If any resolved to "goal-checker-was-right": this is a calibration signal, not just a procedural note. Flag for recalibration.

2. **Run the rubber-stamp check** — pick the last 3 SATURATED verdicts from production research. For each:
   - Did the query list show 3 consecutive zero-yield queries before the SATURATED verdict? (Required by Condition 1)
   - Did the archive have ≥2 source types with attributed claim keys? (Condition 2)
   - Was a cross-tradition query documented? (Condition 3)
   - If any of these are missing: rubber-stamping confirmed; recalibration required.

3. **Check RESIDUAL_LIMITATION quality** — for the last 3 SATURATED verdicts, does the RESIDUAL_LIMITATION field name specific vocabulary traditions not probed (e.g., "organizational psychology vocabulary not queried") or is it generic ("none found", "all traditions covered")? Generic = drift; recalibration required.

4. **Check bypass rate** — count research sessions since last audit. How many had SAT-EVAL-01 dispatched at ≥1 checkpoint? If any research arc of ≥4 queries ran without a dispatch: worker bypass. Write mistakes.md entry (Pattern B) and address before next wave.

5. **Report audit outcome** — STABLE (no drift signals) or DRIFT DETECTED (named signals + recalibration required).

6. **Thin-archive check** — for SATURATED verdicts with fewer than 15 queries, check: does the archive have substantive claim-key coverage from each source type (not just a single citation from a minor type), and is the query sequence genuinely diverse (not 8 phrasings of the same question)? This catches thin-but-well-structured archives that satisfy Conditions 1-3 mechanically while genuinely undersampled. A verdict that passes this check is low-risk. A verdict that fails it should be queued for supplementary queries. Note: this check cannot be automated — it requires reading the archive and query list. Run it on any SATURATED verdict with ≤15 queries.

---

## 4. Recalibration triggers

Recalibration (re-running the full calibration case set) is required when:

1. Any drift signal is confirmed by the audit procedure above
2. sat-eval-01-prompt.md is edited (any change, no matter how minor)
3. TASK_TEMPLATE §2.6 saturation conditions are updated (the evaluator reads these verbatim — changed conditions change the standard)
4. ≥3 worker overrides of NOT_SATURATED verdicts are logged in goal-checker-calibration.md Override log (pattern of override = possible over-blocking by evaluator)
5. A new Pattern E or premature-saturation class appears in mistakes.md (new failure mode may not be caught by existing calibration cases)

---

## 5. Recalibration process

When recalibration is required:

**Step 1: Run all 8 calibration cases from sat-eval-01-calibration.md**

| Case | Expected verdict | Failure if |
|------|-----------------|------------|
| A1 (LLM behavioral compliance, Cond 3 fail) | NOT_SATURATED | Returns SATURATED |
| A2 (User inattentiveness, Cond 2 fail) | NOT_SATURATED | Returns SATURATED |
| A3 (Multi-task, Cond 1 fail) | NOT_SATURATED | Returns SATURATED |
| B1 (Premature archive, strict Cond 1 fail) | NOT_SATURATED | Returns SATURATED |
| B1' (B1 + 3 additional zero-yield) | SATURATED | Returns NOT_SATURATED |
| B2 (Genuine 30-query, all conditions met) | SATURATED | Returns NOT_SATURATED |
| B3 (Genuine synthetic, 13 queries) | SATURATED | Returns NOT_SATURATED |
| C1 (Baseline minimal, 6 queries) | SATURATED | Returns NOT_SATURATED |

**Step 2: Interpret results**

- **A1/A2/A3/B1 all return NOT_SATURATED:** evaluator correctly blocks premature cases. ✓
- **B1'/B2/B3/C1 all return SATURATED:** evaluator correctly passes genuine cases. ✓
- **Any A/B1 returns SATURATED:** false-SATURATED — update sat-eval-01-prompt.md to strengthen Condition checks; re-run affected cases.
- **Any B1'/B2/B3/C1 returns NOT_SATURATED:** false-NOT_SATURATED — diagnose which condition is triggering incorrectly; update prompt if needed; re-run.

**Step 3: Add new calibration cases if needed**

If a new failure mode emerged (new Pattern E in mistakes.md, new premature-saturation instance in production): add a calibration case for it. Required format (from sat-eval-01-calibration.md): full archive content, query list with per-query new-key counts, expected verdict with rationale.

**Step 4: Update status**

In sat-eval-01-calibration.md, add a row to the results table with date and outcome. If any case was updated or added, note it.

---

## 6. Wave 2 retrofit (pre-SAT-EVAL-01 research waves)

Wave 2 research (angles 169, 171, USER-01, USER-02, 176, 178-196) was scoped and designed before SAT-EVAL-01 existed. Wave 2 Workflow scripts may have their own checkpoint-write logic that does not invoke the evaluator.

**Required action before wave 2 runs:**

1. Read the wave 2 Workflow script(s). For each script that contains a research agent loop:
   - Does the loop write checkpoints to disk every 3-4 queries? If not: add it.
   - Does the loop dispatch SAT-EVAL-01 after each checkpoint write? If not: add it.
   - Does the loop follow the sat-eval-01-boundary.md verdict protocol (State 1 / State 2)? If not: wire it in.

2. If the wave scripts run agents that each follow TASK_TEMPLATE independently (agent reads TASK_TEMPLATE and runs the procedure), no script changes are needed — TASK_TEMPLATE already contains the dispatch. Verify this by reading the agent prompt in the wave script and confirming it references TASK_TEMPLATE as its procedure guide.

3. If any angle's agent receives a self-contained procedure (not TASK_TEMPLATE), that angle must either (a) be updated to reference TASK_TEMPLATE, or (b) have the SAT-EVAL-01 dispatch added to its own procedure inline.

4. **Gate:** Wave 2 cannot start until the retrofit check above is documented as complete. Write a one-line note in plan.md wave 2 entry: "SAT-EVAL-01 retrofit: [COMPLETE / NOT APPLICABLE — agents follow TASK_TEMPLATE]."

---

## 7. The absent-vocabulary residual risk (irreducible — not addressable by maintenance)

From sat-eval-01-architecture.md: if the worker's search was conducted entirely within one vocabulary tradition from the start, the evaluator cannot detect the gap. Condition 3 (cross-tradition check) mitigates this but cannot eliminate it — the worker must know what alternative vocabularies exist to probe them.

**Implication for maintenance:** No maintenance action can fix this. It is an epistemic limitation of the evaluate-the-archive approach. Document it so future auditors do not expect the mechanism to catch vocabulary-frame-lock failures that originate before any queries are run.

**What CAN be caught:** Condition 3 catches cases where the worker knew at least one adjacent vocabulary but did not probe it. Maintenance catches cases where the evaluator fails to enforce Condition 3 correctly. The absent-vocabulary gap (unknown vocabulary, not merely unprobed) is irreducible.

---

## 8. Phase 8 done-criteria check

Done-criteria: "sat-eval-01-maintenance.md specifying drift signatures, audit trigger, recalibration triggers, process"

| Sub-goal | Location |
|----------|----------|
| Drift signatures | Section 1 (7 named signatures with observable indicators) |
| Audit trigger | Section 2 (5 conditions) |
| Audit procedure | Section 3 (5-step procedure) |
| Recalibration triggers | Section 4 (5 conditions) |
| Recalibration process | Section 5 (4-step process with full calibration case table) |
| Wave retrofit (goal checker Check 3) | Section 6 (pre-condition gate + 4 steps) |
| Residual risk acknowledgment | Section 7 |

**Phase 8 done-criteria: MET**
