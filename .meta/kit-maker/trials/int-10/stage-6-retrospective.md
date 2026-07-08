# Stage 6 Retrospective — INT-10
# Angle-Gen-Kit Proper-Scale Re-Trial
# Written: 2026-07-06

---

## Overview

INT-10 returned verdict GREEN. Ship signal YES. Six improvements applied to kit-trial-process.md in this session. This document records each improvement with before/after wording, section reference, what each improvement prevents in future trials, and new gates or sections added.

---

## Improvement 1 — Stage 2 Step 0 calibration table: domain-ceiling distinction

**Section:** Stage 2 — Execution, Step 0 — Pre-trial validity check, calibration table

**Before:**
```
| Scores 3 on ≥50% of Tier 1 | **Too easy** — near-zero differential signal | Redesign Hard input |
```

**After:**
```
| Scores 3 on ≥50% of Tier 1 | **Possible ceiling effect or too-easy inputs** — compare against pre-registered Condition A prediction for each dimension. If A scored ABOVE the pre-registered prediction: this is a DOMAIN-CEILING finding ... Log as Key Unexpected Finding and carry forward — do NOT redesign inputs. If A scored AT OR BELOW the pre-registered prediction: inputs may be too easy — redesign. | Compare to pre-registered A prediction before deciding: domain-ceiling ≠ too-easy |
```

**INT-10 evidence:** Condition A scored 3/3 on q1 (vocabulary-tradition coverage) across all 22 inputs, including all 7 Hard vocabulary-trap inputs specifically designed to trigger baseline failure. The pre-registration calibration note predicted Q1=1 for Hard inputs such as Input 10 (memory in LLMs). The existing calibration table row "Scores 3 on ≥50% of Tier 1 → Too easy → Redesign" would have triggered a trial halt for input redesign. The correct interpretation (Stage 4 verdict, FM4 analysis) was that frontier models on familiar LLM/AI research domains saturate vocabulary-tradition coverage at 3/3 regardless of Hard input design. Applying the prior rule would have destroyed the most important finding of the trial.

**What this prevents:** Future trials on well-represented frontier model domains halting for input redesign when A saturates a mechanism dimension. The domain-ceiling scenario is structurally different from too-easy inputs: one means the mechanism doesn't distinguish on this domain (valid finding), the other means the inputs don't stress the baseline (design flaw). Conflating them throws away evidence and wastes redesign effort.

---

## Improvement 2 — Stage 0 FM pre-registration table: observability column

**Section:** Stage 0, Section 3 "Failure mode pre-registration", table format and requirements

**Before:**
Table had 4 columns: Failure mode | Based on | Condition that tests it | Tier

No requirement to specify how each FM would be detected.

**After:**
Table has 5 columns: Failure mode | Based on | Condition that tests it | Tier | Observability

Added requirement: "For any FM where the Observability column reads 'not observable from dimensional scores': add a dedicated binary or scored dimension to Stage 1.2 before locking the dimension list."

**INT-10 evidence:** 5 of 10 pre-registered failure modes returned INSUFFICIENT_EVIDENCE:
- FM2 (Rule 6 diagnostic vs. generative gap): execution not observable from dimensional scores
- FM5 (Boolean-connective false positive): Gate 2 execution trace not observable
- FM6 (coverage map soft gate): coverage map presence not encoded in any dimension — "observationally invisible without a dedicated scoring measure" (Stage 5)
- FM9 (question-type misclassification): intake type assignment not encoded
- FM6 additionally confirmed as a structural design gap that cannot be detected without a binary coverage-map-presence dimension

Stage 5 explicitly requires: "Required action before INT-11: Add a coverage-map-presence dimension to the INT-11 scoring rubric as a binary (present/absent)."

**What this prevents:** Pre-registering failure modes with no mechanism to detect them. An FM with no observability mechanism produces only INSUFFICIENT_EVIDENCE, which is uninformative and identical to not testing the FM. The observability column forces the trial designer to close this gap at Stage 0 (add a scoring dimension) rather than discovering it at Stage 5 (when nothing can be done about it).

---

## Improvement 3 — Stage 1.1b adversarial design checklist: explicit predicted A scores

**Section:** Stage 1, subsection 1.1b Adversarial input design, item 3

**Before:**
```
3. **Baseline failure prediction:** Predict which specific Tier 1 dimensions Condition A will fail on. If you cannot predict any: the input is not adversarial enough.
```

**After:**
```
3. **Baseline failure prediction:** Predict which specific Tier 1 dimensions Condition A will fail on, and record the predicted Condition A score (0–3) for each Tier 1 dimension explicitly. If you cannot predict any failure: the input is not adversarial enough. **This prediction is compared against actual A scores in Stage 3 — any dimension where actual A score exceeds the pre-registered prediction by ≥2 is a Key Unexpected Finding requiring a domain-ceiling or mechanism-scope investigation.**
```

**INT-10 evidence:** The pre-registration calibration note predicted Q1=1 for Hard inputs like Input 10, but Condition A scored Q1=3 uniformly across all 7 Hard inputs. Stage 4 Section 5 ("Key Unexpected Finding") captured this reversal and identified it as the dominant finding of the trial. The reversal only became detectable as a "finding" because the pre-registration had a prediction that could be compared against actuals. But the comparison was made ad hoc — there was no process requirement to check predicted vs. actual A scores systematically.

**What this prevents:** Score-reversal findings (actual A scores exceeding predictions on mechanism dimensions) going undetected or being noticed only by the analyst who remembers the prediction. By requiring explicit predicted A scores per dimension at Stage 1.1b and routing deviations of ≥2 to Key Unexpected Findings, the detection is structural rather than relying on analyst memory.

---

## Improvement 4 — Stage 4 handoff template: Key Unexpected Findings section

**Section:** Stage 4, Handoff output structure (the structured template block)

**Before:**
The handoff template moved directly from STAGE 0 ANSWERS to DIFFERENTIAL SCORECARD. No section for findings that deviated from pre-registered predictions.

**After:**
Added KEY UNEXPECTED FINDINGS section between STAGE 0 ANSWERS and DIFFERENTIAL SCORECARD:
```
KEY UNEXPECTED FINDINGS [required if any of the following apply; "None — all scores within pre-registered predictions" otherwise]:
- Any Condition A score exceeded its pre-registered Hard input prediction on a mechanism-linked Tier 1 dimension → indicates DOMAIN-CEILING or MECHANISM-SCOPE finding
- Any pre-registered FM returned INSUFFICIENT_EVIDENCE due to observability gaps → indicates scoring rubric design gap requiring a dedicated dimension in the next trial
- Any score direction reversed from pre-registered prediction on a Tier 1 mechanism dimension
[For each: state what was predicted, what was observed, and the two competing interpretations]
```

**INT-10 evidence:** Stage 4 Section 5 ("Key Unexpected Finding") was the pivotal section of the entire INT-10 verdict document. It captured that Condition A saturated q1 at 3/3 across all 7 Hard vocabulary-trap inputs (vs. pre-registered prediction of Q1=1), reversed the trial's central prior about vocabulary-tradition coverage, and produced the FM4 interpretation. This section was written ad hoc — it was not required by the handoff template. Future trials that omit this section lose a structural mechanism for capturing the most diagnostically important findings.

**What this prevents:** Score reversals and domain-ceiling findings being buried in narrative prose or omitted entirely. The Key Unexpected Findings section is a required named section in the handoff output, forcing the analyst to explicitly check whether any dimension showed a significant deviation from pre-registration and to document two competing interpretations (as INT-10 did correctly for q1 B–A=0).

---

## Improvement 5 — Stage 5.2: Evidence-scope-vs-design-inference check

**Section:** Stage 5, subsection 5.2 "Kit-maker failures → mistakes.md and plan.md"

**Before:**
```
For each Severity 1 failure: full mistakes.md entry + 5-question investigation (TASK_TEMPLATE.md Section 5.3) + every action item becomes either executed with evidence or a plan.md task.
```

**After:**
Added explicit evidence-scope-vs-design-inference check after the existing requirement:

"For any Severity 1 failure traced to Phase 4 synthesis: explicitly answer 'Was the evidence scope (what the source study measured) narrower than the design claim (what the mechanism was built to do)?' If yes: (a) update the grounding-map.md entry to annotate the scope mismatch, (b) update the weakness_register.md entry status from HEURISTIC to EMPIRICALLY_TESTED with trial evidence, (c) add a RESEARCH_ANGLES.md angle targeted at the narrowed scope gap, (d) revise the kit's claim documentation to match only the demonstrated scope."

**INT-10 evidence:** Stage 4 Q3 and Stage 5 Section 7 both identify the primary kit-maker process gap as Phase 4 synthesis adopting CCQGen evidence (within-tradition facet coverage) as grounding for a cross-tradition design inference without flagging the scope mismatch. Weakness 7 in weakness_register.md had named this concern at design time as "the strongest unsupported assumption in the kit" but it was not resolved before kit build. The 5-question investigation as currently specified does not require the analyst to check whether the evidence scope matched the design claim — it produces a general investigation that may or may not surface this specific failure mode.

**What this prevents:** Phase 4 synthesis scope mismatches that are identified as concerns at design time (Weakness status: HEURISTIC) going into a trial without a structured post-trial check. The evidence-scope-vs-design-inference check closes the loop: if a mechanism claim is not validated by the trial, the analyst must explicitly verify whether the evidence that grounded the mechanism actually measured what the mechanism claimed to do. This prevents the same failure from propagating to the next kit build.

---

## Improvement 6 — Stage 6.3: Structural design gap carry-forward

**Section:** Stage 6, subsection 6.3 "Condition coverage audit"

**Before:**
```
Conditions not tested in this trial that are required in the next trial: write them into Section 0's gate list for the next trial NOW (not at next trial's start — now, while the context is fresh).
```
The coverage audit focused exclusively on deployment conditions (e.g., Source B unavailable).

**After:**
Added structural design gap carry-forward requirement:

"In addition to deployment conditions, list every confirmed structural design gap from Stage 5 FM analysis and Gap confirmations. For each structural gap: (a) state the required pre-trial fix if a fix must happen BEFORE the next trial runs (this blocks the next trial's Stage 0 launch until the fix is applied), (b) add the corresponding scoring dimension to the next trial's pre-registration document now, (c) add the required test inputs to Stage 1.1 of the next trial's pre-registration now. A structural gap without a pre-trial fix requirement and a next-trial scoring dimension is an incomplete Stage 6."

**INT-10 evidence:** Stage 5 identified two confirmed structural design gaps requiring pre-INT-11 fixes:
- Gap 2 / FM6: Coverage map soft gate must be moved to a structurally enforced intake brief field before INT-11, AND a binary coverage-map-presence dimension must be added to the INT-11 rubric
- Gap 5: Cross-disciplinary slot selection heuristic must be added to angle-generation.md Step 0 before INT-11

These are not deployment conditions — they are kit design deficiencies that invalidate future trial results if not fixed before the next trial runs. The current 6.3 template would not capture them because it only asks about deployment conditions.

**What this prevents:** Structural design gaps being carried forward to the next trial in an unstructured way (notes in a synthesis file) rather than as explicit pre-trial gates. If Gap 2 is not fixed before INT-11, FM6 will again return INSUFFICIENT_EVIDENCE. If the fix isn't explicitly registered as a Stage 0 blocker, the trial can launch before the fix is applied.

---

## New Sections and Gates Added

### New section: Stage 4 handoff template — KEY UNEXPECTED FINDINGS

This is a new required section in the handoff output structure. It fires when: actual scores deviate from pre-registered predictions on mechanism-linked Tier 1 dimensions, FMs return INSUFFICIENT_EVIDENCE due to observability gaps, or score directions reverse. Required format: state prediction, state actual, state two competing interpretations.

### New gate: Stage 0 FM pre-registration — Observability requirement

Before locking the Stage 1.2 dimension list: every pre-registered FM must have an Observability annotation. If any FM reads "not observable from dimensional scores": a dedicated scoring dimension (binary minimum) must be added before Stage 1.2 is complete.

### New gate: Stage 6 structural gap carry-forward

Stage 6.3 now requires that confirmed structural design gaps — not just deployment conditions — be written into the next trial's Stage 0 gates and Stage 1.1 input requirements. Structural gaps requiring pre-trial fixes block the next trial's Stage 0 launch.

---

*Stage 6 retrospective written: 2026-07-06*
*Based on: stage-4-verdict.md, stage-5-integration.md, kit-trial-process.md (updated in this session)*
*Improvements applied: 6 — sections modified: Stage 0 Section 3, Stage 1.1b, Stage 2 Step 0, Stage 4 handoff template, Stage 5.2, Stage 6.3, Version history*
