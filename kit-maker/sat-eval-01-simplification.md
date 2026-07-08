# SAT-EVAL-01 — Phase 5: Simplification Accounting

**Phase:** 5 (Simplification accounting)
**Status:** COMPLETE — 2026-07-04
**Source read:** TASK_TEMPLATE.md (full read, 2026-07-04)

---

## Existing saturation self-assessment steps in TASK_TEMPLATE

Three locations in TASK_TEMPLATE currently involve saturation assessment for Research tasks:

### Location 1: Section 2.6 (pre-task conditions statement)

**Current text:**
> Saturation conditions: state all three conditions before starting. Saturation is NOT declared until all three are met:
> 1. Consecutive queries return claim keys already in the set
> 2. At least 2 structurally distinct source types covered (academic + grey/GitHub/practitioner)
> 3. At least one cross-tradition check done (Category D from research-quality.md)

**Role:** The worker writes down the three conditions before running any queries. This is the standard against which saturation is evaluated.

**SAT-EVAL-01 relationship:** NOT redundant — required input. The evaluator evaluates against TASK_TEMPLATE §2.6 conditions. If the worker doesn't state them (or states degraded versions), the evaluator has no standard to apply. This section must be kept. The only change: the phrasing should clarify that these conditions are for the evaluator, not just for the worker's self-monitoring.

**Action required in Phase 7:** Update the phrasing in Section 2.6 to state: "These conditions are passed to SAT-EVAL-01 verbatim. Do not degrade them."

---

### Location 2: Section 5 mid-execution check (REDUNDANT — replaced by SAT-EVAL-01)

**Current text:**
> After every 3 queries: have new claim keys stopped appearing? If yes: check saturation conditions before continuing.

**Role:** Worker self-assesses mid-execution whether saturation might have been reached.

**SAT-EVAL-01 relationship:** DIRECTLY REPLACED. This self-check is the exact failure mode SAT-EVAL-01 was built to eliminate:
- It fires only when the worker recognizes key-appearance has slowed (recognition check — fails under execution pressure)
- It is evaluated by the same worker who ran the queries (same-agent bias)
- It uses "if yes: check" framing — allows the worker to declare saturation without external validation

SAT-EVAL-01 fires structurally (every 3-4 queries, via checkpoint write), not on recognition. It dispatches a fresh subagent, not the same worker. The Section 5 self-check is not just redundant — it is the failure mode the mechanism was designed to prevent.

**Action required in Phase 7:** Replace the Section 5 self-check with the SAT-EVAL-01 dispatch instruction.

**Replacement text (drafted for Phase 7 integration):**
> Checkpoint dispatch: After every 3–4 queries, write current findings to archive file (checkpoint-write, already required). Then dispatch SAT-EVAL-01 evaluator against current archive + query list + Section 2.6 conditions. Read verdict before continuing. Do NOT declare saturation without SATURATED verdict from evaluator. Follow sat-eval-01-boundary.md for worker action per verdict.

---

### Location 3: Section 6 post-task verification (PARTIALLY REPLACED)

**Current text:**
> Saturation verification: state which conditions were met and how. "I searched a lot" is not evidence.
> Were adversarial and grey-lit queries included? If either missing: do a gap-fill pass before marking saturated.

**Role:** Worker verifies post-hoc that saturation was genuinely reached before reporting the task complete.

**SAT-EVAL-01 relationship:** PARTIALLY REPLACED. The substantive verification is now done by the evaluator (during research, not post-hoc). By the time Section 6 is reached, the archive should already have a `saturation_verdict: SATURATED` field from the final evaluator dispatch.

Section 6 verification simplifies to: "Does the archive's saturation_verdict field exist and show SATURATED? If yes: saturation was externally confirmed. If no: the angle cannot be marked complete — re-dispatch the evaluator."

The adversarial and grey-lit query checks from Section 6 are now evaluated structurally by the evaluator (they affect Condition 3 and Condition 2 respectively), not by worker post-hoc self-check.

**Action required in Phase 7:** Replace the Section 6 saturation verification with a field-existence check.

**Replacement text (drafted for Phase 7 integration):**
> Saturation verification: does the archive's saturation_verdict field show SATURATED? If yes: saturation was externally confirmed by SAT-EVAL-01. If no: the angle is not done — re-dispatch the evaluator before marking complete.

---

## Redundancy summary

| TASK_TEMPLATE location | Current role | SAT-EVAL-01 relationship | Action |
|------------------------|-------------|--------------------------|--------|
| §2.6 conditions statement | Pre-states saturation standard | Required input for evaluator (NOT redundant) | Keep — update phrasing |
| §5 mid-execution self-check | Worker self-assesses mid-search | DIRECTLY REPLACED (same failure mode) | Replace with evaluator dispatch instruction |
| §6 post-task verification | Worker self-verifies at close | PARTIALLY REPLACED (simplifies to field-existence check) | Simplify to archive-field check |

**Net reduction:** 2 worker self-assessment steps → 0 worker self-assessment steps. Both replaced by structural evaluator dispatch and field-existence check respectively. §2.6 conditions statement is kept (required, not redundant).

---

## What simplification does NOT do

SAT-EVAL-01 does not replace:
- The checkpoint-write rule (§5 mid-execution) — still required; it's the trigger for evaluator dispatch
- The vocabulary-frame enumeration (§2.6) — still required before starting queries
- The adversarial and grey-lit query planning (§2.6) — still required; they affect what queries are in the query list the evaluator evaluates
- Section 6 PCR check — not saturation-related

These are complements to SAT-EVAL-01, not redundancies with it.

---

## Phase 5 done-criteria check

Done-criteria: "Existing self-assessment step in TASK_TEMPLATE mapped against SAT-EVAL-01; redundancies named (or explicitly none found)"

Result: 2 redundancies found and named (§5 self-check: replaced; §6 verification: simplified). §2.6 confirmed not redundant. Phase 7 integration actions drafted for both replacements. **Phase 5 done-criteria MET.**
