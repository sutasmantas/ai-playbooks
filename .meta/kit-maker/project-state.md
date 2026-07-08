# Project State Document

Worker updates this file before drafting each response. Goal checker reads this file only — no other files.

---

## Goal model (verbatim)

**Broader goal:** Make kits that solve problems or tasks with high quality; improve the process, automate where possible, minimize user friction.

**Gold standard:** Perfect results with as little needed correction and feedback from the user as possible. Agent drives toward goal, user validates and makes judgment calls only.

**What the user wants to delegate:** Process control, next-step generation, problem identification, research, agenda-setting.

**What the user wants to own:** Scope decisions, contested judgment calls, approval of major architectural choices, final output validation.

---

## Current active task

**20.10 — INT-11 full trial — COMPLETE 2026-07-08**

What happened this turn: INT-11 trial completed (workflow wf_8cb5111e-5b9, 147/147 agents). Verdict: INVALID. FM4: GENERAL. Q1 differential = 0.00 across all 22 inputs and all conditions — frontier-model baseline hits Q1=3 ceiling on sports science as on LLM/AI topics. Kit structural value validated: Q7 avg 3.00, BIN1 22/22, BIN2 22/22, A8 = 3. Kit CLAUDE.md FM4 scope note updated (domain-conditional → GENERAL). Weakness 7 updated with INT-11 evidence. Plan.md 20.10 marked COMPLETE. Next: Phase 4 confidence map G8 demotion (HIGH → HYPOTHETICAL) + INT-12 design on sparse/post-cutoff domain.

Last goal checker attack angle: Angle 2.

---

**Task 23 — kit-trial-process.md comprehensive improvement — COMPLETE (2026-07-05)**

All done-criteria met:
1. Improvement categories A–Q (17 categories, ~80 specific items) documented ✅
2. In-depth plan with 55+ granular steps across 7 phases ✅
3. Phase 1 inventory complete — ENTRYPOINT.md Phase 7 gap table, M-17/M-23 lessons extracted, phase7-trial/_issue-spec.md calibration pass design generalized ✅
4. Phase 2 design decisions — all applied in rewrite: Stage 0 pre-registration, 3-input-type requirement, Tier 1/2/3 dimension system, 0-3 scale, blind evaluation protocol, autonomy event log, ground truth for generative tasks, archive format, post-trial integration ✅
5. kit-trial-process.md fully rewritten (~350 lines): Stage 0 (new), Stage 1 (expanded), Stage 2 Step 4 (new), Stage 3 (0-3 scale), Stage 4 (Tier-based verdict), Stage 5 (new: post-trial integration), Appendix A (new: worked example) ✅
6. trial-audit-dimensions.md expanded: scoring rubrics per dimension, typical dimension set table by kit type, carry-forward note format ✅
7. Validation subagent ran Stage 1 design from document — PARTIAL — found 3 gaps (precondition statement, model tier fallback, saturation check timing); all 3 fixed inline ✅

Prior task: **Batch 5 research + PCR + ENTRYPOINT.md edits — COMPLETE (2026-07-05)**

Task 19 done-criteria met: (1) 3 archive files written with saturation logs ✅; (2) post-batch review Steps 4a–4d complete ✅; (3) EVPI open-ended case: structural epistemic circularity gap confirmed for creative tasks; tool-use/structured QA/research-synthesis all CLOSED ✅; (4) write discipline failure rate: CLOSED — write failure is structural (TSS predicts, AC does not); Phase 7 gate item added ✅; (5) reversibility taxonomy: PROVISIONAL pending SYNTH-04; domain-conditional row added ✅; (6) synthesis gate for batch 6 documented (SYNTH-03 required) ✅.

Prior task: **M-52 procedure fix — COMPLETE (2026-07-05)** — Step 4b verify-note scope check gate.

Prior task: **SYNTH-02 — COMPLETE (2026-07-05)** — instruction count cluster synthesis.

Key finding from (b): every HIGH group either got a scope caveat or was CONTESTED. No HIGH group survived the counter-prior test as universally applicable. Original syntheses were correct within tested setups but lacked scope conditions. PCR must treat scope-caveated groups accordingly.

## Major decisions last completed batch (REVISIT-S-03 — Cluster B synthesis Step 3.6 supplement)

Step 3.5 Pass 2 in the Cluster B synthesis had run counter-prior on `search-methodology-fundamentals` only. Step 3.6 now requires all 5 HIGH groups. Ran the 4 remaining groups:
- peer-review-quality: PLAUSIBLE with scope (error detection vs. subjective quality). No tier change.
- review-system-design: PLAUSIBLE with usage condition (reuse where independence not required). No tier change.
- alternatives-generation: PLAUSIBLE as known limitation (forced pass = floor; confirmed by Step 5 GAP 3). No tier change.
- adversarial-review-dynamics: PLAUSIBLE as timing clarification (crystallized target + pre-stakeholder-commitment). No tier change.
Count parity: 5 HIGH groups, 5 counter-prior passes. All Category 1 REVISIT items now complete.

Also this turn: REVISIT-A-01 priority reassessed from P1 to P2 — P1 was set when no synthesis existed; REVISIT-S-02 completed the synthesis 2026-07-02 with full procedure including Step 3.6. Remaining REVISIT-A-01 scope (archive methodology gaps) is P2 risk.

## What happened this turn (2026-07-06 — INT-10 COMPLETE)

INT-10 COMPLETE. Verdict: GREEN. Ship signal: YES. Stage 6: applied improvements to kit-trial-process.md.

Stage 6 retrospective written at kit-maker/trials/int-10/stage-6-retrospective.md. 6 improvements applied to kit-trial-process.md:
1. Stage 2 Step 0 calibration table — domain-ceiling row added to distinguish frontier model ceiling from too-easy inputs
2. Stage 0 FM pre-registration table — Observability column added; requirement added to create scoring dimensions for unobservable FMs
3. Stage 1.1b adversarial design checklist — required explicit pre-registered Condition A score predictions per Tier 1 dimension
4. Stage 4 handoff template — KEY UNEXPECTED FINDINGS section added as required element
5. Stage 5.2 — evidence-scope-vs-design-inference check added for Severity 1 failures traced to Phase 4 synthesis
6. Stage 6.3 — extended to structural design gaps with pre-trial fix gates and next-trial scoring dimension requirements

Sections modified: Stage 0/Section 3, Stage 1.1b, Stage 2 Step 0, Stage 4 handoff template, Stage 5.2, Stage 6.3, Version history.

Primary process change: trials must now pre-register expected Condition A scores per dimension and route any A score that exceeds its pre-registered prediction to a KEY UNEXPECTED FINDINGS section — this is the structural mechanism that was missing when INT-10 discovered that frontier models saturate q1 at 3/3 on LLM/AI research domains.

## What happened previous turn (2026-07-05 — INT-10 Stage 0 G4 PASS, Stage 1 COMPLETE)

G4 secondary verification complete: secondary agent (afd16cc0a833625cc) confirmed Condition A prompt is clean — no kit file references (a) NO, no procedure scaffolding (b) NO, no prior examples (c) NO. G4 status updated in stage-0-preregistration.md.

Stage 1 design document written to kit-maker/trials/int-10/stage-1-design.md. Contains:
- Kit claim → dimension mapping table (17 claims mapped)
- 4 Tier 1 dimensions (Q1 Coverage, Q7 Completeness, Q5 Actionability, Q3 Precision)
- 5 Tier 2 dimensions (A2 Execution autonomy, A1 Intake efficiency, P1 Step coverage, M1 Self-assessment, A8 Scope/longitudinal)
- 3 Tier 3 dimensions (M3 Scope recognition, P3 Gate adherence, K3 Actionable improvement signal)
- Pre-registered criteria for all Tier 1 and Tier 2 dimensions (all pass quality check: specific thresholds, not comparative adjectives)
- Expected score table (B-A predicted +1 to +2 on Q1, +1 to +2 on Q7 — well above zero differential signal)
- Stage 2 Step 0 calibration pass specification (Input 10, Condition A)
- Checkpoint directory structure

Stage 2 Step 0 calibration pass: COMPLETE — verdict PROCEED WITH FLAG.

Finding: Condition A scored Q1=3 (15 vocabulary traditions, 5 cross-tradition) without the kit. Pre-registered expected Q1=1. Calibration contamination (combined produce/score agent) inflated Q7 from 2 to 3 — corrected score Q7=2. True calibration result: Q1=3, Q7=2, Q5=2, Q3=2. Calibration table row: "Scores 2 on ≥3 of 4 Tier 1 — Marginal, proceed but flag."

Implication: Q1 differential (vocabulary-tradition breadth) may be near-zero in full trial. Frontier model already achieves Q1=3 with strong baseline prompt. Primary hypothesis may be UNSUPPORTED; FM4 (coverage-gap conditioning redundant for frontier models on familiar domains) may be triggered. Kit-maker signal (Q3 pre-registration question) would then fire if confirmed. Trial still has value: tests Q5/Q3 differential, degraded mode floor, longitudinal decay, behavioral contract adherence.

Revised expected B-A: Q1 = 0 to +0.5 (was +1 to +2); Q7 = +1 (ADVERSARIAL-FLAGGED absent in Cond. A; unchanged); Q5 = +0.5 to +1 (unchanged); Q3 = +0.5 to +1 (unchanged).

Next action: Stage 2 Step 1 — full trial execution (pending user session check per check-before-heavy-tasks memory).

## What happened previous turn (2026-07-05 — SYNTH-04 COMPLETE, SYNTH-03 PCR COMPLETE)

SYNTH-03 PCR (agent a0643fc7969d757a3): PASS-WITH-NOTES. N1: Step 3.7 format gap — extracted inline. N2: counter-prior passes missing on 3 converging HIGH groups — assessed inline, no tier revision. N3: rule-outcome-register.md SYNTH-03-A1 added (FIXED). N4: RESEARCH_ANGLES.md bounded/unbounded architecture P1 angle added (FIXED).

SYNTH-04 synthesis (wf_d7c857f9-50f): PCR PASS. when-to-clarify group: HIGH_CONTESTED (PLAUSIBLE_WITH_SCOPE) — HIGH holds for "uncertainty and irreversibility are orthogonal"; CONTESTED for "separate structural gate required" (evidence also consistent with enriching EVPI with reversibility-weighted consequence terms). All 4 done-criteria met. ENTRYPOINT.md PROVISIONAL→SYNTHESIZED. grounding-map.md rows 17+19 updated. 4 PCR angles added to RESEARCH_ANGLES.md. Closed to plan-archive.md.

Goal checker Angle 3 (Better approach): Is there a better approach to the next step than batch 6 research? Angle 3 finds: research backlog re-review (HIGH PRIORITY #1) is the deeper quality fix but plan.md says it runs before wave 2 (not before batch 6). Batch 6 is wave 1 kit-maker research — unblocked. No better approach identified. Next rotation: Angle 4 (Soft challenge / REVISIT QUEUE).

## What happened prior turn (2026-07-05 — INT-06 Phase 5 PASS, closing INT-06)

INT-06 Phase 5 C3 adversarial tests completed: 4/4 PASS (wf_55fd342b-302). TC-4 (long session), TC-5 (compacted-summary), TC-6 (forward-phrased), TC-7 (execution pressure) — all fired C3 unconditionally before task continuation. Mechanism finding: Check 1c compacted-summary scan is the key structural feature; unconditional trigger rule handles live corrections. No redesign needed. INT-06 now closeable; closing now. SYNTH-04 is the current active task per prior state update.

Note: TC-5 and TC-7 test agents executed as real kit-maker agents (blind test), writing M-55 and M-56 to mistakes.md as side-effect. Those entries are real file artifacts now in project state.

## What happened prior turn (2026-07-05 — angle 178 tier correction, C3 fired — TC-7 test artifact)

User correction received mid-task (Batch 5 Step 4 PCR dispatch): angle 178 was assigned HIGH tier in Step 2 without noting counter-prior test had not run. C3 fired. M-56 logged with full 5-question investigation and broad retrospective. Plan.md entry 24 written (required before any action). Archive fix BLOCKED: no file for angle 178 exists on disk — the angle is in the MULTI-01 P1 research queue but has not been researched. Surfaced to user. PCR subagent results from Step 4 are pending. Class: premature tier finalization (new sub-class; not a prior mistake class). Procedure gap identified: Step 1 PCR tiers should be labeled "CP pending" until Step 3.5/3.6 runs.

## What happened prior turn (session start — M-55 logged, session-start checks run)

New session. Resumed from compacted summary. Check 1(c) fired: compacted summary contained unprocessed C3 trigger (user corrected "You marked INT-05 done without completing Stage 5" in prior session; agent ran Stage 5 but did not write mistakes.md entry). M-55 logged: class = C3 non-fire + Pattern A (done declared without Stage 5); broad retrospective run; 5-question investigation complete. Check 0: Pattern Summary scanned; Task 22 type = Structural; PRIMARY = Pattern M, SECONDARY = Pattern B. Check 3: REVISIT_QUEUE has no P1 items — clean. Task 22 (angle-gen-kit Phase 2–7) is the next active task. Phase 2 domain brief is the next action.

## What happened prior turn (2026-07-05 — angle-gen-kit build complete)

Task 22 (angle-gen-kit Phases 3–7) complete. Workflow ran 20 agents total. VERDICT: GREEN.
Tier 1 floor: Q1=2, Q5=3 universally. Tier 2 avg: 3.0. Overall avg (condB min): 2.625 — passes 2.5 threshold.

Top 3 kit-maker learnings:
L1: Phase 6 didn't validate kit behavior under deployment constraints (Source B/web search unavailable in subagent context). Build process validated what kit does when Source B runs; never tested what it produces when it can't.
L2: Rule 6 self-check fires correctly but is diagnostic-only — kit names missed vocabulary traditions in self-check but has no connector to generate angles for them before reporting done.
L3: No procedure handles edge case where research topic IS a methodology domain (meta-research). condB3 agent self-redirected via general intelligence; kit has no explicit gate for this class.

Two open questions for user:
Q1: No true no-kit baseline — should we run a Condition A without the kit to measure differential signal?
Q2: Source B (web search) is unavailable in all subagent contexts — design decision: file-based vocab reference (maintenance burden) vs. explicit "degraded mode" quality contract?

Learnings being integrated per kit-trial-process.md Stage 5. INT-09 to be closed.

## What happened prior turn (2026-07-05 — resumed from compacted summary)

M-53 logged: 3 C3 triggers did not fire in prior session (inline kit build, over-detailed domain brief, capitulation without reasoning); this session resumed without session-start checks or plan.md entries before agent launches. Broad retrospective run. Root finding: C3 mechanism tested on easy scenarios only (M-37 flagged this; harder tests queued but apparently not run). Session-start checks now completed (Check 0-3). INT-09 written for Task 22 suspension. Plan.md entry for M-53 TASK written. User authorized git init for worktree isolation on kit build. Next: relaunch kit build once this task closes.

## What happened prior turn

Task 23 (kit-trial-process.md comprehensive improvement) complete. Produced 17-category improvement list + 55-step plan. Rewrote kit-trial-process.md with Stage 0 (pre-registration), Stage 5 (post-trial integration), Appendix A (worked example), Tier-based verdict formula, 0-3 scoring scale, blind evaluation protocol, autonomy event log, 3-input-type requirement, and all Phase 1 inventory findings applied. Expanded trial-audit-dimensions.md with per-dimension rubrics and typical dimension set table. Validation subagent found 3 gaps — all fixed inline (precondition statement, model tier fallback, saturation check timing moved to Stage 2).

Prior: SYNTH-03 synthesis complete. Cross-batch conflict between OdysseyBench (bounded K≤6 predicate register → positive) and arXiv:2603.29231 (unbounded add_to_memory() scratchpad → never-positive at long horizon) resolved by architectural scope-explanation. The negative-outcome mechanism (per-step write overhead + full scratchpad injection every turn) requires an unbounded, growing register — a bounded predicate register violates this condition. ENTRYPOINT.md external register row updated CONTESTED→SYNTHESIZED (PROVISIONAL); grounding-map.md row 15 updated; plan.md task 21 marked COMPLETE; plan-archive.md entry written. Batch 6 gate cleared.

Prior turn: Four targeted ENTRYPOINT.md changes applied from batch 5 PCR:
1. Element 8 (intake protocol): EVPI by-task-type operationalization added — tool-use (TRUST), structured QA (Clarify DPO), research synthesis (ARBOR+DeepRubric), creative (confirmed gap + capability dilution caveat).
2. External register row: CONTESTED marker added (OdysseyBench batch4 vs. arXiv:2603.29231 batch5 cross-batch conflict); recommendation retained (bounded K≤6 register = positive condition); SYNTH-03 required before batch 6.
3. New domain-conditional row: reversibility annotation taxonomy (four dimensions, SAFE/LOW/HIGH tiers, MCP floor, saga compensation link, required-at-registration enforcement; PROVISIONAL pending SYNTH-04).
4. Phase 7 gate: structural write failure quality monitoring added (TSS predicts, AC doesn't; mandatory checkpoints; retrieval bottleneck priority).
grounding-map.md updated: rows 15, 17, 18 added/updated; row 7 element 8 batch 5 supplement added.
plan.md task 19 marked COMPLETE; archived to plan-archive.md.

## Open unresolved questions

Weakness register (research-synthesis-kit/weakness_register.md): 4 open items, all provisional, none quality-critical.

## REVISIT phase completion criterion (Angle 4 SOFT CHALLENGE — named explicitly)

REVISIT phase ends when: all P2 items where **no synthesis file exists** have been resolved. Items where a synthesis exists (even with archive methodology gaps) are accept-degraded — archive gaps affect calibration confidence, not the existence of a synthesis decision. The archive-only gap items (REVISIT-A-01, A-02, A-05, A-06) are accept-degraded now that their syntheses exist.

Remaining blocking items under this criterion:
1. **REVISIT-A-03**: Check whether the early behavioral rule cluster (linguistic, negation, rule-conflict, instruction-abstraction, sequential-process) was formally synthesized. If yes → accept-degraded. If no synthesis exists → formal synthesis required.
2. **REVISIT-A-04**: Cluster F (8 archives, no synthesis confirmed). Feeds alternatives-generation.md and mandatory-reflection.md. Large scope — assess whether these feed active wave 2 decisions before scheduling.

After REVISIT phase: **wave 2 research authorization is the next user-owned decision**. Wave 2 is BLOCKED until user explicitly authorizes. After authorization: the research backlog (sport/research_backlog.md → 3 waves queued) and kit-maker wave 2 angles both proceed. The user's input at that point: which wave to prioritize.

## REVISIT phase status: COMPLETE for wave 2 purposes

Completion criterion met (all no-synthesis P2 items resolved):
- REVISIT-A-03: ACCEPT-DEGRADED — framing-174 (validated) covers critical subset; remaining 3 archives MEDIUM impact
- REVISIT-A-04: ACCEPT-DEGRADED for wave 2 — feeds Phase 5/6 procedures, not wave 2 research execution; defer to Phase 5 trigger

All Category 1 items: COMPLETE (S-01, S-02, S-03 all in revisit-archive.md)
Remaining P2 items (A-01, A-02, A-05, A-06): all have synthesis files; archive gaps are calibration-level risk, not blocking

## Next obstacle

**Research angle generation kit — Phase 2 domain brief** (task 22). kit-trial-process.md is now complete (task 23); the trial process is ready. Phase 2 domain brief for the angle generation kit is the next step before building Phases 3–7. Can proceed immediately.

After Phase 2: **Batch 6 research** — gate cleared by SYNTH-03. 4 P0 angles identified in batch 5 step 4a:
1. Distributional EVPI via BED-LLM (arXiv:2508.21184 — MEDIUM, nearest candidate for creative-task EVPI; structural epistemic circularity gap is confirmed; this angle targets validation)
2. Write omission rate isolated metric (mandatory checkpoint write design — builds on write failure is structural finding; no study currently exists on bounded-register write accuracy in isolation from unbounded scratchpad)
3. Mandatory checkpoint write architecture (structural forcing of register updates at defined pipeline steps)
4. Annotation enforcement architecture (required-field at registration vs trusted-server runtime enforcement — SYNTH-04 prerequisite angle)

Also pending (MEDIUM PRIORITY):
- SYNTH-04: reversibility taxonomy synthesis (consolidate 17 claims from 5 research traditions) — required before annotation enforcement architecture angle is fully grounded
- MECH-TEST adversarial stress tests for T06/T10/T11/T12 (favorable-case-only validation bias in MECH-TEST-01)
- SYNTH-01: Cluster E + Cluster F synthesis (no synthesis files exist)

Also pending (MEDIUM PRIORITY):
- SYNTH-01: Cluster E + Cluster F synthesis (no synthesis files exist)
- Adversarial stress-tests for T06/T10/T11/T12 (favorable-case-only in MECH-TEST-01)

## Last goal checker attack angle used

Angle 3 (Better approach) — SYNTH-04 close. Challenge: is there a better approach to next step than batch 6? Research backlog re-review is deeper quality fix but plan.md gates it before wave 2, not before batch 6. Batch 6 is wave 1 — unblocked. OUTPUT: NO CRITICAL FLAW FOUND. Next rotation: Angle 4 (Soft challenge / REVISIT QUEUE).
