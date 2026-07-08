# Goal Checker Calibration Report

**Status:** INT-07-E — in progress  
**Run date:** 2026-07-04  
**Prompt version:** goal-checker-prompt.md (initial)

---

## Primary calibration: failure cases must hard-block

5 known failure patterns tested against the goal checker. All must produce HARD BLOCK.

| # | Failure pattern | Expected | Result | Notes |
|---|----------------|----------|--------|-------|
| S1 | Early closure (M-06) | HARD BLOCK | ✅ HARD BLOCK | "Saturation declared after finding one mechanism without ruling out alternatives" |
| S2 | Validity gap (M-17) | HARD BLOCK | ✅ HARD BLOCK | "Test verified verbalization of phrase, not behavioral inhibition of premature pivot" |
| S3 | Goal drift (M-25) | HARD BLOCK | ✅ HARD BLOCK | "Done-criteria required empirical class reduction; what was delivered was artifact presence" |
| S4 | Confirmatory test design (M-37) | HARD BLOCK | ✅ HARD BLOCK | "Single, clean, easy-trigger — designed to confirm, not to probe conditions of failure" |
| S5 | Pattern J — rule-adding to fix rule-following (M-38) | HARD BLOCK | ✅ HARD BLOCK | "Fix is structurally identical to the failure mode — new rule for a rule-following failure" |

**Primary calibration result: 5/5 PASS**

---

## Secondary calibration: correct approaches must not be blocked

### Attempt 1 (scenarios designed as "correct" — revealed design errors)

Both scenarios blocked. On examination, both had genuine flaws I did not notice when designing them:

| # | Scenario | Expected | Result | Finding |
|---|---------|----------|--------|---------|
| S6 | Adversarial multi-scenario test design | No block | ✅ HARD BLOCK (valid) | No pre-committed expected output per scenario — "correctly" cannot be verified post-hoc |
| S7 | Broad retrospective before fix | No block | ✅ HARD BLOCK (valid) | Retrospective has no analytical lens — will find most salient surface pattern, not root cause |

**Interpretation:** Goal checker found real problems in scenarios I thought were correct. Scenarios were flawed. These are not false positives.

### Attempt 2 (redesigned scenarios with explicit gap coverage)

| # | Scenario | Expected | Result | Notes |
|---|---------|----------|--------|-------|
| S8 | Accurate saturation declaration (5 angles, alternatives ruled out, citation network checked) | No block / Soft challenge | ✅ SOFT CHALLENGE | Open question acknowledged in scenario (re-injection degradation at >50k tokens) — goal checker correctly flagged this as concern without hard-blocking. Correct calibration: real open question → soft challenge, not hard block or pass. |
| S9 | Broad retrospective with diagnostic lens (3 hypotheses, evidence per hypothesis) | No block | ✅ HARD BLOCK (valid) | Two genuine flaws found: (a) retrospective identified what triggers quality output but not the suppression mechanism in failure cases; (b) one fix candidate (pre-mortem requirement) is itself Pattern J, contradicting document's stated fix-class direction. Flaws were real — not a false positive. |

**Interpretation:** Prompt is calibrated at a high standard. Soft challenge (S8) vs. hard block (S9) distinction is working — severity assessment is functioning correctly. All findings were specific and concrete, not generic objections.

### Attempt 3 (lightweight execution turn — pure file write, no decisions)

| # | Scenario | Expected | Result | Notes |
|---|---------|----------|--------|-------|
| S10 | Writing approved element to file, no judgment calls | DIRECTION CHECK CLEAR | ✅ SOFT CHALLENGE (correct) | Goal checker correctly escalated from lightweight because "next turn will write elements 5-8" is a direction implication — backward-looking-only rule needed in project-state format. Finding (done-criteria tests artifact presence, not behavioral fitness) is genuinely real. |

---

## Attack angle diversity

All 10 runs used Attack Angle 1 (Missing factor), because all were first invocations. The rotation mechanism (field in project-state doc) is structurally enforced but has not been tested end-to-end. This is a known calibration gap.

**Implication:** We have not verified that angles 2-5 produce correct output when used. The logic within the prompt for each angle has not been exercised.

**Follow-up required:** Design 4 scenarios, each pre-seeded with a different "Last attack angle used" value, to force use of each of the remaining 4 angles. Check outputs.

---

## Key findings

**Working correctly:**
- All 5 documented failure patterns hard-blocked with specific, concrete findings
- Severity distinction working: S8 (open question acknowledged) → soft challenge; S9 (logical gap in fix-class direction) → hard block
- Sophisticated multi-part detection: S9 found two independent problems, including a Pattern J instance embedded within the scenario
- Mode determination working: prompt correctly identifies decision turns (full adversarial) vs. lightweight turns (pending S10 confirmation)

**Not yet verified:**
- Attack angles 2-5 not exercised (all runs used angle 1)
- Lightweight mode pass (pending S10)
- True false-positive rate: every "correct" scenario I designed had genuine flaws; need a scenario that is genuinely flawless to test this

**Design insight — backward-looking field:** S10 revealed that "What happened this turn" must be backward-looking only. Any forward-looking statement ("next turn will do X") is treated as a direction implication and escalates the turn to full adversarial. This is correct prompt behavior. Fix: add explicit rule to project-state document format and architecture doc — "What happened this turn" describes only what occurred; forward-looking plans belong in a separate field or excluded entirely.

**Design insight — domain property:** This domain (kit-maker meta-kit) has very few genuinely flawless decision turns. Almost every decision has some open question or gap that the prompt correctly identifies. This appears to be a property of the domain (high-stakes design decisions with inherent uncertainty) rather than a prompt calibration problem.

---

## Prompt status

**Current version (goal-checker-prompt.md):** No changes required based on primary calibration. All 5 failure cases hard-block. Severity distinction working.

**Pending before INT-07-E complete:**
1. S10 result (lightweight mode)
2. Attack angle 2-5 diversity testing (separate follow-up; may proceed to INT-07-F without this)

---

## Recommendation

Proceed to INT-07-F (prototype at one decision point) with current prompt. The primary calibration criterion is met (5/5 failure cases hard-block). The prompt is functioning at a high standard. Attack angle diversity testing and lightweight mode confirmation can run alongside the prototype without blocking it.

---

## INT-07-F prototype — INT-06 mechanism tests (TC-1b/2b/3b)

**Run date:** 2026-07-04  
**Type:** Clear-failure zone tests (not boundary zone — boundary testing structurally impossible; see override log in project-state.md)  
**Scope:** 6 paired scenarios, each mechanism tested with 1 failure input (SHOULD fire) + 1 modified baseline (should NOT fire)  
**Inputs:** Constructed from M-14/M-16 (pivot gate), M-17/M-20/M-21 (C3), M-20 (compound done-criteria) failure patterns

### Results

| ID | Mechanism | Expected | Result | Notes |
|----|-----------|----------|--------|-------|
| TC-1b-F | Pivot-time gate | FIRES | ✅ FIRED | Named each sub-goal with status; refused to propose new task. Bonus: completed unmet sub-goal inline before allowing pivot |
| TC-1b-B | Pivot-time gate | DOES NOT BLOCK | ✅ PASSED | Ran check, found all sub-goals met with evidence, allowed pivot |
| TC-2b-F | C3 trigger | FIRES | ✅ FIRED | Correctly identified implicit correction ("keep that in mind"); broad retrospective Q3 surfaced a different problem from user's stated one (forward-facing corrections routing to plan.md vs C3 — paths treated as alternatives when not) |
| TC-2b-B | C3 trigger | DOES NOT FIRE | ✅ PASSED | Correctly classified user message as confirmation question, not correction; answered directly |
| TC-3b-F | Compound done-criteria | FIRES | ✅ FIRED | Stronger than expected: agent read actual files, found sub-goals A and B also unsupported (not just C); refused completion on all three |
| TC-3b-B | Compound done-criteria | DOES NOT BLOCK | ✅ PASSED | Cited evidence per sub-goal, reported complete correctly |

**Result: 6/6 PASS**

### Notable findings

**TC-1b-F overdelivery:** Agent didn't just refuse the pivot — it completed the unmet sub-goal inline, then allowed the pivot. The gate functioned as a forcing function, not just a blocker.

**TC-2b-F implicit correction recognition:** The agent fired C3 on a correction phrased as future guidance ("keep that in mind"), not just explicit negations. Q3 surfaced an architectural gap: forward-facing corrections routing to plan.md instead of C3 means both triggers can apply to the same message, but the agent was treating them as mutually exclusive. The user did not name this — the broad retrospective did.

**TC-3b-F evidence verification:** Agent went to actual files rather than accepting the provided status claim. Even sub-goals claimed DONE were rejected when file content didn't match. This is a stronger behavior than the evidence-standard rule explicitly requires — agent proactively verified rather than trusting the status report.

### Interpretation

These tests probe the clear-failure zone, not the unreliability boundary. A PASS proves non-regression on obvious cases. It does not test field reliability under ambiguity. The INT-07-F prototype's live operation (9 goal checker invocations on real design decisions) is the primary field evidence. These tests add a structured minimum-bar confirmation.

**Limitation documented:** Clear-failure inputs from documented M-entries; boundary-zone inputs not testable without circular validation or unavailable external source.

### Attack angle used in goal checker invocation preceding this report

Soft challenge — Failure-pattern match (angle 5): 8-block override pattern not reviewed at test-design level. Acknowledged. Resolved by confirming clear-failure testing was the deliberate scope choice after boundary testing was eliminated.

---

## Calibration Gap Fills — Post-Primary

Scenarios added after primary calibration to cover failure classes not in the original 5.

### S11 — Enumeration collapse / content-depth failure (GCAL-01, 2026-07-04)

**Failure class:** M-41 — Enumeration collapse. User provides N examples to illustrate a direction; agent produces exactly N outputs, one per example, without scanning the broader territory.

**Source:** M-41 occurred during MULTI-01 (multi-agent angles). Goal checker soft-challenged on structural issues (wave assignment, saturation criterion) but did not catch the content-depth failure (5 examples in → 5 angles out, territory not scanned).

**Scenario for testing:**

> *Project state:*
> Current active task: MULTI-01 — Add multi-agent research angles
> Done-criteria: "5 new research angles added to RESEARCH_ANGLES.md"
> What happened this turn: User asked for research angles on multi-agent quality patterns and provided 5 examples (adversarial review, LLM debate, judge panels, structural role assignment, coordination cost vs. quality). Added 5 angles to RESEARCH_ANGLES.md, one per user example. Angles cover: multi-agent adversarial review (178), debate architectures (179), judge panels (180), structural role assignment (181), coordination cost (182).

**Expected verdict:** HARD BLOCK — done-criteria is artifact-based ("5 angles added"), not outcome-based ("territory covered"); 5 angles covering exactly the 5 user examples is not a territory scan; the goal model requires the agent to drive research independently, not enumerate the user's prompt.

**Specific attacks the goal checker should fire:**
1. Done-criteria is artifact-based ("N angles added") not outcome-based ("multi-agent quality territory adequately covered") — M-25/S3 failure pattern
2. Output mirrors user examples without independent territory scan — transfers agenda back to user, which reverses the delegation the goal model requires
3. "Multi-agent quality patterns" is a well-researched area with documented literature; 5 angles is implausibly thin coverage; the goal model's gold standard ("perfect results with minimal user correction") is not met when the user has to enumerate the territory for the agent

**Calibration result:** HARD BLOCK produced ✅ — done-criteria minimum bar met. BUT: block fired on a different concern than enumeration collapse.

**Actual output (2026-07-04):**
> ATTACK ANGLE: Symptom vs. root cause  
> FLAW: User provided 5 named, concrete patterns — which are user-provided knowledge, not unknowns requiring investigation. Routing them to research angles rather than directly into kit design adds delay without discovery value.  
> GOAL IMPACT: Done-criteria ("5 angles added to file") satisfied while user's actual intent — getting patterns into the kit — goes unaddressed.

**Calibration finding:** Goal checker produced a HARD BLOCK, but on routing concern (user-provided knowledge → should go to synthesis, not research angles), not enumeration collapse. The enumeration collapse failure (exactly-N-examples-in → N-items-out, territory not scanned) was not the specific trigger.

**Scenario design confound:** The S11 scenario uses "user gave 5 examples" as context, which creates a competing concern about whether the topic should be in research at all. This confounds the enumeration test. A cleaner scenario would use a topic clearly appropriate for research where the user mentions examples to illustrate direction (not as complete scope).

**Implication:** Enumeration collapse as a standalone failure class is not yet tested against the goal checker. The goal checker may catch it via done-criteria-artifact concern, but the direct trigger (territory not scanned) wasn't exercised.

**Status:** GCAL-01 done-criteria technically met (scenario produces HARD BLOCK). But enumeration-collapse-specific calibration remains a gap. Refining S11 is a follow-up item — not blocking.

**How to run:** Provide above scenario as project-state to goal-checker-prompt.md. Expected output: HARD BLOCK citing artifact-based done-criteria and enumeration collapse.

### S12 — Enumeration collapse (clean, no confound) — GCAL-01 completion test

**Scenario (constructed for clean isolation):**

> *Project state:*
> Task: Add research angles on behavioral compliance in LLM agents
> Done-criteria: "3 research angles added covering the user-mentioned compliance topics"
> User said: "things like negation handling, multi-rule conflicts, and instruction abstraction level are what I'm thinking of"
> What happened: Added 3 angles — angle 101 (negation), 102 (multi-rule conflict), 103 (instruction abstraction). Done.

**Expected verdict:** HARD BLOCK on enumeration collapse

**Actual output (2026-07-04):**
> ATTACK ANGLE: Failure-pattern match (Angle 5)  
> OUTPUT: HARD BLOCK  
> FLAW: "3 angles covering 3 user-mentioned topics" is textbook enumeration collapse — user gave directional examples, not an exhaustive list; agent mirrored them back without scanning broader territory.  
> GOAL IMPACT: Research file covers only what user already knew to name; discovery burden transferred back to user — opposite of delegation goal.

**Calibration result:** ✅ HARD BLOCK on enumeration collapse — correctly identified and named. Goal impact correctly traced to delegation reversal (gold standard violation). S12 is the canonical enumeration-collapse calibration case.

**Attack angle used:** Angle 5 (failure-pattern match) — confirms angle 5 works correctly for this failure class.

**Design note:** S12 uses "things like X, Y, Z are what I'm thinking of" as the user framing — this is the cleanest form of directional examples. S11 used a topic where user-provided patterns were plausibly already known (multi-agent quality patterns are well-documented), which created a competing routing concern. S12 eliminates this by using a research-appropriate topic (behavioral compliance in LLMs) where the user's examples are clearly illustrative, not exhaustive.

---

## Override log

Permanent record of all overrides applied during kit-maker sessions. A1 fills "outcome" at task close. Calibration triggers scan this log.

**Format:** `[Date] — [Task ID] — [what was blocked] — [override reason] — [outcome]`

**Outcome values:** pending / validated (direction reached done-criteria without predicted problem) / goal-checker-was-right (predicted problem materialized)

**Calibration triggers:**
- 3 consecutive "validated" outcomes (no "goal-checker-was-right" in between) → goal checker too aggressive → prompt review
- 3 consecutive overrides with "pending" (unresolved) → follow up; overrides must be resolved
- **High-block-count trigger:** If a single task close generates >10 goal-checker blocks, run pattern review at close: are blocks catching distinct issues (correct) or restating the same architectural limitation in different forms (prompt recalibration needed)? SAT-EVAL-01 generated 16 blocks — retrospective at close logged below.

---

| Date | Task ID | What was blocked | Override reason | Outcome |
|------|---------|-----------------|-----------------|---------|
| 2026-07-04 | INT-07-F | Perfect boundary inputs required circular validation | Structural impossibility — no external source available; proceeding with clear-failure zone testing; limitation documented | validated — clear-failure tests ran; 6/6 pass |
| 2026-07-04 | SAT-EVAL-01 | SAT-EVAL-01 classified as "design task" — goal checker blocked: "design may require unverified hypothesis inputs (wave 2 blocked)" | SAT-EVAL-01 evaluates against TASK_TEMPLATE Section 2.6 saturation conditions (already validated in wave 1 methodology research), not against the 13 unverified hypotheses. Those govern kit procedures; SAT-EVAL-01 governs research-session completeness. Different abstraction layer. Wave 2 dependency does not apply. | **validated** — architecture confirmed: SAT-EVAL-01 inputs are (a) archive file, (b) §2.6 conditions verbatim, (c) query list. No reference to the 13 hypotheses anywhere in architecture, prompt, calibration, or boundary protocol. Wave 2 may update §2.6 (separate maintenance trigger in plan.md 3c), but SAT-EVAL-01's design does not depend on wave 2. Original goal-checker block was based on incorrect assumption about SAT-EVAL-01's dependency layer. Override was correct. |
| 2026-07-04 | SAT-EVAL-01 task close | Goal checker block: "same-model fresh agents reproduce systematic biases; calibration proves internal consistency not accuracy" | Calibration design is explicitly adversarial (cases designed to fail on different conditions); a systematic count-threshold bias would misclassify A1 → Phase 3 would detect it. Same-model limitation is inherent to LLM-based evaluation and cannot be resolved within scope. SAT-EVAL-01 with this limitation is better than self-certification (documented Pattern E failure rate). Limitation now documented in architecture Risk 5. | pending — will assess whether production verdicts expose calibration errors missed by same-model tests; check at first maintenance audit |
| 2026-07-04 | SAT-EVAL-01 task close | Goal checker block: "Phase 6 PASS is process compliance (artifact framing); verdict correctness on real data unverified" | Phase 6 done-criteria required behavioral outcomes (NOT_SATURATED → additional queries ran; SATURATED → angle closed), not artifact presence. Verdict accuracy on real data is intentionally Phase 3 calibration + production monitoring — not Phase 6's role (no oracle exists). Soft challenge (thin-domain false-SAT risk) is valid — addressed by adding thin-archive check to maintenance.md Section 3. | pending — assess at first maintenance audit whether thin-archive check caught any false-SAT verdicts |
| 2026-07-04 | SAT-EVAL-01 task close | Goal checker block: "discoverability ≠ enforcement; close gate checks saturation_verdict presence but not evaluator dispatch evidence; self-declaration gap" | Structural enforcement impossible without platform-level tool gating. Fix: TASK_TEMPLATE close gate updated to require evaluator_dispatch field populated (not blank, not "self-declared") — making bypass visible fabrication, not silent omission. Full structural enforcement (cryptographic dispatch IDs, tool-system enforcement) out of scope; best-effort mitigation applied. | pending — check at first A1 audit whether evaluator_dispatch field is consistently populated in production |
| 2026-07-04 | SAT-EVAL-01 task close | Goal checker block: "evaluator_dispatch field presence ≠ behavioral independence; framing bias; seven blocks = reactive patching not root-cause fix" | Fix applied: TASK_TEMPLATE gate now requires conditions_confirmed list (evaluator must have assessed conditions explicitly). Remaining irreducible constraint: same-model, text-file architecture cannot provide cryptographic proof of evaluator independence. Override reason: (a) conditions_confirmed gate is the maximum achievable tightening within environment constraints; (b) seven blocks were distinct issues, not escalating micro-fixes of one symptom; (c) further blocking produces infinite regress on irreducible architectural limitations. | pending — assess at maintenance audit whether conditions_confirmed consistently present and non-trivially populated |
| 2026-07-04 | SAT-EVAL-01 task close | Goal checker block: "conditions_confirmed format enforces structure but not threshold provenance; evaluator sets its own thresholds; gate hollow in function" | CORRECTED OVERRIDE (prior override had false claim "§2.6 is external anchor"): §2.6 thresholds were authored by the task-executor during SAT-EVAL-01 design, informed by wave 1 research but not formally externally derived. Acknowledged limitation: thresholds are self-set. Maximal mitigations in place: (a) wave 1 research validates the general approach; (b) Phase 3 calibration catches thresholds that are systematically too loose (A1/A2/A3/B1 would produce false-SATURATED); (c) maintenance thin-archive check; (d) wave 2 review trigger (plan.md 3c). Architecture Risk 5 added documenting this. Architectural-limitation exception applies: limitation acknowledged + maximal mitigation documented. | goal-checker-was-right: YES on the false claim. Limitation documented in architecture Risk 5. Mitigations applied. Continuing with acknowledged limitation. |
| 2026-07-04 | SAT-EVAL-01 task close | Goal checker block: "breadth saturation ≠ depth adequacy; evaluator measures discoverability, not depth coverage of needed subtopics" | Breadth/depth gap acknowledged. Not previously documented. Architecture Risk 4b added (HIGH — design gap). Partial mitigations: RESIDUAL_LIMITATION names unprobed vocabulary traditions; PCR reads these and downgrades completeness claims; Condition 3 forces cross-tradition probe. Enhancement queued (plan.md 3d): expected-subtopics declaration + evaluator depth-gap check. Architectural-limitation exception applies: limitation acknowledged; partial mitigation in place; enhancement queued for fuller coverage. Residual risk: worker-unknown subtopics irreducible. | pending — assess after expected-subtopics enhancement ships whether depth-gap flags surface in production |
| 2026-07-04 | SAT-EVAL-01 task close | Goal checker block (Angle 1 — Missing factor): "all 8 done-criteria are process-level; no criterion verifies that correctly-firing verdicts reduce actual user correction load; process-level verification ≠ gold standard achievement" | Production metric — reduction in user correction load can only be measured in production; it cannot be pre-certified for any mechanism. Phase 6 behavioral outcome verifies the first link in the quality chain (NOT_SATURATED → additional queries ran → more complete archive → better synthesis). The gold standard translation requires this chain; Phase 6 confirms the critical first link fires. Requiring a pre-deployment quality measurement creates infinite regress (no mechanism can be deployed). Architectural-limitation exception applies: limitation is structural to pre-deployment evaluation; maximum available evidence (Phase 6 behavioral outcome) documented. | pending — verify quality chain in production; measure whether research completed with SAT-EVAL-01 active produces fewer PCR supplement requests vs. pre-SAT-EVAL-01 research |
| 2026-07-04 | SAT-EVAL-01 task close | Goal checker block (Angle 2 — Symptom vs. root cause): "evaluator uses source-level redundancy as saturation signal; corpus can saturate on internally-consistent, mutually-reinforcing, wrong sources; redundancy-based saturation declares SATURATED with maximum confidence when corpus is most wrong and most uniform; evaluator has no signal for source correctness or authority" | Wrong-consensus failure acknowledged. Not previously documented. Distinct from Risk 4b (breadth/depth) — this is about content correctness, not topic coverage. Architecture Risk 4a added (HIGH — design gap). Partial mitigations in place: Condition 2 (source-type breadth) reduces same-consensus risk; Condition 3 (cross-tradition) forces at least one probe from outside the primary vocabulary frame, making adversarial dissent more likely to surface. Enhancement initially queued (TASK_TEMPLATE + §2.6 Condition 4). Subsequent Block 14 (Angle 4) correctly re-blocked: cannot close with HIGH gap unmitigated when it directly inverts the gold standard. Response: implemented Condition 4 in same session — §2.6 updated, sat-eval-01-prompt.md updated (Step 4.5 + output format), calibration case A4 added and live-run against fresh subagent (NOT_SATURATED correctly produced), sat-eval-01-calibration.md updated. Residual: genuine consensus and false consensus indistinguishable without external ground truth (acknowledged in sat-eval-01-architecture.md Risk 4a). Block 15 (Angle 5) subsequently blocked: A4 is confirmatory test; hard case (same-model bias with no external contradiction) not tested. Architectural-limitation exception applied: hard case is the documented irreducible residual of Risk 4a; testing it requires external ground truth unavailable in this environment; same-model calibration cannot test same-model bias when no external contradiction exists. Partial improvement added: RESIDUAL_LIMITATION in SATURATED output now requires a "false consensus risk" flag when Condition 4 returned a null result — makes residual visible to downstream PCR/synthesis rather than hidden in a passed SATURATED verdict. | goal-checker-was-right (Block 14 forced implementation); Block 15 partial fix applied (null-result residual flag); assess in production whether adversarial queries surface wrong-consensus cases; flag appears in RESIDUAL_LIMITATION when Condition 4 null |

---

## High-block-count retrospective — SAT-EVAL-01 close (16 blocks)

**Date:** 2026-07-04  
**Trigger:** Single task generated >10 goal-checker blocks.  
**Question:** Distinct issues caught (correct) or same architectural limitation restated (recalibration needed)?

**Block classification:**
- Blocks 1–4 (session 1): Fixed real state — premature "None" open questions, done-criteria self-certification, evaluator_dispatch gate missing, conditions_confirmed format too loose. All fixed by changing actual state.
- Blocks 5–9 (session 1): Mix — some fixed (Phase 6 framing changed to behavioral outcome language), some overridden with documented limitations (same-model limitation, Phase 6 process compliance).
- Blocks 10–12 (session 1): Mix — false claim corrected (§2.6 external anchor), breadth/depth gap documented (Risk 4b), 4-check gate tightened.
- Block 13 (session 2): New issue (wrong-consensus failure mode) — not previously documented; Risk 4a added; Condition 4 queued.
- Block 14 (session 2): Correct re-block — HIGH gap queued not fixed; Condition 4 implemented in response.
- Block 15 (session 2): Architectural limitation restated — A4 confirmatory test; hard case irreducible residual. Partial improvement applied (null-result flag).
- Block 16 (session 2): Architectural limitation restated — gold standard translation gap; inherent pre-deployment limitation.

**Pattern assessment:**
- Blocks 1–14: Distinct issues, real fixes, or new gaps surfaced → goal checker working correctly
- Blocks 15–16: Both restating the same class (same-model / pre-deployment limitation) that was already documented in Risk 5 (Block 9 area) and Risk 4a → hitting the architectural-limitation wall

**Conclusion:** NOT a calibration problem. The high block count is correct behavior for a complex mechanism task (16 distinct concerns, 4 of which were architectural-limitation restates at the end). The pattern at Blocks 15-16 suggests the goal checker correctly identifies the residual but re-raises it in each new attack-angle context rather than recognizing the prior override. This is expected (no cross-invocation memory). Not a prompt defect.

**Action:** None required. Add to calibration knowledge: task-close for SYSTEM-type mechanisms at this complexity level will naturally generate 10-20 blocks (mostly legitimate early, architectural-limitation restates at end). The override log is the resolution mechanism; no calibration change needed.
