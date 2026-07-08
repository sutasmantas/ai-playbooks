# DCQC-01 — Done-Criteria Quality Check: Calibration

**Phase:** 3 (Calibration against known failures)
**Status:** COMPLETE (2026-07-04)
**Companion:** dcqc-01-prompt.md

---

## Calibration scope

Phase 3 calibration establishes the done-criteria for "DCQC-01 works":
- ≥3 artifact-criteria cases return ARTIFACT-BASED (sourced from documented failures)
- ≥3 outcome-criteria cases return OUTCOME-BASED (sourced from well-designed done-criteria)
- Multi-part mixed case correctly classified
- Outcome-proxying artifact correctly classified

All cases run against fresh subagents with no prior context.

---

## Artifact-criteria cases (expect ARTIFACT-BASED)

### A1 — M-06: trial design documented

**Task direction:** Design a Phase 7 trial to test the paper-review-kit on real papers.

**Done-criteria (input):** A Phase 7 trial design is documented in plan.md with trial tasks identified and scoring methodology described.

**Expected verdict:** ARTIFACT-BASED — plan.md can contain a trial design with tasks and scoring that has no discriminative power (accepts any kit output that looks like a review).

**Actual verdict (fresh subagent, 2026-07-04):** ARTIFACT-BASED ✅

**Evaluator reasoning:** "You can write plan.md with tasks listed and a scoring section filled in while the methodology has no discriminative power — it accepts any output that looks like a review. The draft criteria would be satisfied. The goal (a trial that actually reveals whether the kit produces high-quality results) would not be."

**Rewrite produced:** "The trial design specifies at minimum: (a) what a passing review looks like in behavioral terms; (b) at least one failure condition that would cause a trial run to return a negative verdict; (c) a scoring rule that a fresh evaluator could apply to a kit output and reach the same pass/fail conclusion without consulting the designer."

---

### A2 — M-25: recall score documented

**Task direction:** Run Phase 7 trial on the paper-review-kit using a paper with planted issues.

**Done-criteria (input):** The paper-review-kit achieves ≥70% recall on the 12 planted issues in the test paper, with the recall score documented in a results file.

**Expected verdict:** ARTIFACT-BASED — multi-part: the "recall ≥70%" component is outcome-based, but "score documented in a results file" is artifact-based (file can be written without the trial having run honestly).

**Actual verdict (fresh subagent, 2026-07-04):** ARTIFACT-BASED ✅

**Evaluator reasoning:** "The second clause — 'with the recall score documented in a results file' — is an artifact condition. A results file can be written without the trial having been run honestly; its existence does not require the outcome to have occurred. Per the multi-part rule, one artifact-based component makes the whole criteria fail."

**Notable:** Evaluator correctly preserved the first component ("achieves ≥70% recall") as sound and produced a rewrite that drops only the artifact component.

---

### A3 — M-35: test count threshold

**Task direction:** Calibrate the INT-06 goal-checker behavioral enforcement mechanism against documented failure cases from mistakes.md.

**Done-criteria (input):** ≥4 of the 5 test scenarios produce HARD BLOCK or SOFT CHALLENGE output from the goal checker, documented in the calibration file.

**Expected verdict:** ARTIFACT-BASED — the count of blocking outputs can be achieved by designing easy scenarios or by modifying the checker to block indiscriminately. The calibration file containing documented outputs is a pure artifact.

**Actual verdict (fresh subagent, 2026-07-04):** ARTIFACT-BASED ✅

**Evaluator reasoning:** "A goal-checker modified to block indiscriminately produces ≥4 HARD BLOCKs and satisfies the criteria — but calibration has regressed. Test scenarios not derived from mistakes.md's actual failure cases could be written to reliably trigger the checker. The criteria measures artifact presence and output polarity — not whether the checker's classification correctly tracks the expected verdict for each failure case."

---

## Outcome-criteria cases (expect OUTCOME-BASED)

### B2 — Goal checker behavioral firing

**Task direction:** Build a goal checker mechanism that fires before every response and blocks wrong directions before they are executed.

**Done-criteria (input):** A fresh agent given a documented wrong-direction scenario (from M-37 or M-38) produces a HARD BLOCK before executing the wrong direction; mechanism fires correctly in ≥5 of 5 test scenarios sourced from documented mistakes.md failures.

**Expected verdict:** OUTCOME-BASED — requires actual behavioral output from a fresh agent on documented inputs; mechanism must correctly intervene.

**Actual verdict (fresh subagent, 2026-07-04):** OUTCOME-BASED ✅

**Evaluator reasoning:** "Writing code and shipping a file does not satisfy 'produces a HARD BLOCK before executing the wrong direction in ≥5 of 5 test scenarios.' The criteria requires the mechanism to demonstrate correct intervention behavior in live runs against real test inputs. An inert or broken implementation fails the criteria even if it exists on disk."

---

### B3 — Research methodology guide

**Task direction:** Research optimal query construction patterns for arXiv, Semantic Scholar, GitHub, and web search; formalize findings into research-quality.md with per-source guidance.

**Done-criteria (input):** A researcher following only the updated research-quality.md can write effective queries for each source without guessing — verified by dispatching a fresh agent with only the guide and checking that the resulting queries would find at least one relevant paper for a test topic in each source.

**Expected verdict:** OUTCOME-BASED — fresh agent dispatch is behavioral verification; the artifact (research-quality.md) only passes if it's genuinely actionable.

**Actual verdict (fresh subagent, 2026-07-04):** OUTCOME-BASED ✅

**Evaluator reasoning:** "A file that exists but contains vague, incomplete, or wrong guidance would fail this test: the fresh agent would guess, approximate, or produce queries that miss relevant results. The artifact — research-quality.md — is outcome-proxying: producing it in a form that passes the fresh-agent dispatch test requires the research to have been done correctly and the guidance to be practically sufficient."

---

### B4 — Fresh agent behavioral compliance

**Task direction:** Update CLAUDE.md so that agents reliably produce a plan.md entry with all 4 mandatory fields before any file read or write on every new task.

**Done-criteria (input):** A fresh agent dispatched with only the updated CLAUDE.md and a new task direction produces a plan.md entry containing all 4 mandatory fields (Direction, Previous task status, Task type, Done-criteria) as its first action — before any file read, file edit, or search — confirmed by reading the fresh agent's transcript.

**Expected verdict:** OUTCOME-BASED — requires fresh agent to actually follow the updated CLAUDE.md; the transcript position requirement makes this non-fakeable via artifact alone.

**Actual verdict (fresh subagent, 2026-07-04):** OUTCOME-BASED ✅

**Evaluator reasoning:** "A plan.md entry cannot precede all file operations in a transcript unless the instruction source (the updated CLAUDE.md) explicitly drove that action. The 'artifact' (the plan.md entry) is outcome-proxying because producing it in the required position requires goal advancement. The transcript verification step confirms causation rather than checking for artifact presence in isolation."

---

## Calibration findings (mis-designed cases correctly caught)

### B1 — Mixed case: file-content + behavioral (calibration finding, not a failure)

**Task direction:** Add mistake-fire + 5-question investigation requirement to blocking-protocol.md State 4.

**Done-criteria (input):** blocking-protocol.md State 4 has explicit mistake-fire + investigation requirement written in; next override application produces a same-session mistakes.md entry with class identified.

**Designed as:** Outcome case (expected OUTCOME-BASED). **Actual:** ARTIFACT-BASED — mis-designed case; evaluator correctly caught it.

**Evaluator reasoning:** Component 1 ("State 4 has requirement written in") measures text presence in a file — artifact. Component 2 ("next override produces an entry") is outcome-based. Multi-part rule fires: one artifact component makes the whole criteria ARTIFACT-BASED. "Text can exist in a file while producing zero behavioral change in the agent."

**Calibration value:** Confirms multi-part rule fires correctly on mixed done-criteria. Also reveals that the actual 3f done-criteria was itself mixed — the file-content component was artifact-based. The correct done-criteria for 3f would drop the file-content component and keep only the behavioral component: "Next State 4 trigger fired in-session produces a mistakes.md entry — with error class named and 5 investigation questions answered — appearing before the override is logged."

---

### C1 — "Run-and-record" without pass requirement (calibration finding, not a failure)

**Task direction:** Add two new Condition 4 calibration cases to the SAT-EVAL-01 calibration file, run each against fresh subagents, and record results.

**Done-criteria (input):** sat-eval-01-calibration.md has ≥3 Condition 4 cases total (A4 + 2 new), all run against fresh subagents, with results recorded — each case shows the evaluator's actual output and a pass/fail verdict against the expected result.

**Designed as:** Outcome-proxying artifact (expected OUTCOME-BASED). **Actual:** ARTIFACT-BASED — mis-designed case; evaluator correctly caught it.

**Evaluator reasoning:** "Pass/fail verdict against the expected result is outcome-tracking (it records what happened), not outcome-requiring (it does not require the expected result to have been reached). A broken evaluator satisfies it. The file-count component is additionally a pure artifact check: cases can be added to the file without running them."

**Calibration value:** Defines the critical distinction between "run-and-record" (artifact — records what happened) and "run-and-must-pass" (outcome — requires correct results). An outcome-proxying artifact must require goal advancement to produce, not merely behavioral execution.

**Correct rewrite:** "Two new Condition 4 cases exist in sat-eval-01-calibration.md; each was dispatched to a fresh subagent; each subagent returned the expected verdict; actual evaluator outputs and pass verdicts are recorded. Criteria satisfied only when all cases pass — not merely when results exist."

---

## Calibration table

| Case | Design intent | Expected | Actual | Pass? | Notes |
|------|--------------|----------|--------|-------|-------|
| A1 | Artifact (M-06 — design documented) | ARTIFACT-BASED | ARTIFACT-BASED | ✅ | Caught: no discriminative power despite documentation |
| A2 | Artifact (M-25 — recall score + results file) | ARTIFACT-BASED | ARTIFACT-BASED | ✅ | Caught: results-file component; preserved sound recall component |
| A3 | Artifact (M-35 — test count threshold) | ARTIFACT-BASED | ARTIFACT-BASED | ✅ | Caught: indiscriminate blocking satisfies count without calibration |
| B2 | Outcome (goal checker behavioral firing) | OUTCOME-BASED | OUTCOME-BASED | ✅ | Confirmed: fresh agent behavioral test non-fakeable by artifact |
| B3 | Outcome (research guide fresh agent test) | OUTCOME-BASED | OUTCOME-BASED | ✅ | Confirmed: outcome-proxying — guide must be practically sufficient |
| B4 | Outcome (CLAUDE.md behavioral compliance) | OUTCOME-BASED | OUTCOME-BASED | ✅ | Confirmed: transcript position requirement makes artifact-only impossible |
| B1 | Outcome (mixed — designed incorrectly) | OUTCOME-BASED | ARTIFACT-BASED | ✅* | *Evaluator correct: multi-part rule caught file-content component |
| C1 | Outcome-proxying (run-and-record) | OUTCOME-BASED | ARTIFACT-BASED | ✅* | *Evaluator correct: "record" ≠ "must pass"; outcome-tracking ≠ outcome-requiring |

**Calibration verdict:** PASS
- 3/3 artifact cases: ARTIFACT-BASED correctly ✅
- 3/3 outcome cases: OUTCOME-BASED correctly ✅
- Multi-part rule fires correctly (B1) ✅
- Outcome-tracking vs. outcome-requiring distinction correctly identified (C1) ✅

---

## Key calibration findings

**Finding 1 — Multi-part rule:** Any done-criteria with one artifact-based component (even mixed with outcome-based components) returns ARTIFACT-BASED. The evaluator does not average or weight components.

**Finding 2 — "Run-and-record" trap:** "All cases run against fresh subagents, results recorded" is NOT outcome-proxying if the criteria doesn't require the results to match expected verdicts. "Run and record what happened" is behavioral execution tracking; it allows a broken mechanism to satisfy the criteria. Outcome-proxying requires: run AND correct output produced.

**Finding 3 — Discrimination test:** A done-criteria is artifact-based if it can be satisfied by a mechanism that produces the right form of output for the wrong reason (A3: indiscriminate blocking satisfies the count; A2: file can be written without honest trial).

**Finding 4 — Correct outcome-proxying pattern:** Outcome-proxying artifacts require: (a) fresh agent or independent verification with no access to the work-in-progress, (b) the independent agent must produce the correct output (not just any output), and (c) the comparison against expected output is verified. Without all three, "artifact with behavioral execution" ≠ outcome-proxying.

---

## Calibration status

**Phase 3 gate:** OPEN — proceed to Phase 4.
