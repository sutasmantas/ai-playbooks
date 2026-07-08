# Kit-Maker Plan

**Goal:** Build a rigorously researched kit-maker tool. The research quality sets the bar. The kit itself uses the same standards.

**Execution authority:** This document is checked at every session start and after every significant action. It is not a record of intent — it defines what fires next and when the user is consulted.

---

## Required reading at session start

Before doing any work:
1. **mistakes.md** — scan Pattern Summary. Is the current task at risk of repeating a documented pattern?
2. **TASK_TEMPLATE.md** — every new task entry in this file follows that template. No exceptions.
3. **REVISIT_QUEUE.md** — check for open REDO/SUPPLEMENT items. If any are P1, address before starting new research batches.
4. **Interrupted tasks section below** — read before starting anything. If any task is marked INTERRUPTED, the default is to resume it before starting new work unless the user redirects otherwise.

A task that appears in this plan without TASK_TEMPLATE.md sections filled has not been properly started.

---

## INTERRUPTED TASKS (return stack)

Tasks that were in progress when a pivot happened. Each has a return state — what was done and exactly where to resume. Read at every session start. Default: resume the top item before new work.

**How to use:** When a user redirect arrives mid-task, write a return-state entry here before starting the new direction. "I'll come back to this" without an entry is not a mechanism.

When an entry is marked CLOSED: move it to plan-archive.md before the next session.

---

### INT-06 — Mistake-fire rule: fix and verify

**Status:** PHASES 1-4 COMPLETE — 2026-07-03 | Phase 5 monitoring continues (need 3 real sessions without C3 recurrence after 2026-07-05 implementation); **PHASE 5 BLOCKER RESOLVED 2026-07-05: harder C3 tests TC-4/TC-5/TC-6/TC-7 all PASS (4/4, wf_55fd342b-302)**. C3 monitoring ongoing — INT-06 closes when recurrence counter stays at 0 for 3 real sessions.

Phase 5 session count: 0/3 (clock starts 2026-07-05 after Check 1c implementation).

**Phase 5 blocker — RESOLVED 2026-07-05:** TC-4/5/6/7 all PASS (4/4). Mechanism finding: Check 1c compacted-summary scan is the structural fix for session-boundary C3 non-fires; unconditional trigger rule handles live corrections under forward-phrasing and execution pressure. Script: wf_55fd342b-302.

**Direction:** Fix the mistake-fire rule so it actually fires when a qualifying mistake occurs, without requiring user correction. The fix must be tested via subagents before implementation. Six documented recurrences (M-10, M-11, M-22, M-24, M-32, M-33) prove the current fix class (self-monitoring rule improvement) is insufficient.
**Previous task status:** COMPLETE — INT-05 closed 2026-07-03
**Task type:** Research + Design + Testing (compound — each phase has its own done-criteria)
**Done-criteria (outcome, not artifact):** A candidate solution is identified that causes the mistake-fire rule to fire in ≥4/5 test scenarios without user correction — verified by subagent tests using constructed transcript excerpts. The solution is implemented in CLAUDE.md and/or procedures. **All mechanism classes from mistake-class-audit.md have a structural gate or documented coverage (not just the largest class).** The recurrence counter does not increment for 3 real sessions after implementation. [M-35: done-criteria was underspecified — added the all-classes requirement; the prior criterion could be satisfied by partial completion]

---

#### Section 0 — Pre-check

**Pattern risks:**
- Pattern D (behavioral contract decay, M-33): HIGH — this task is ABOUT Pattern D; the fix itself must be tested externally, not assumed to work
- Pattern A (artifact ≠ done): HIGH — "rule added to CLAUDE.md" ≠ rule fires; must verify via subagent tests
- Pattern I (research as prescription): MEDIUM — existing research on external enforcement may suggest a solution that requires adaptation for our specific setup

**Plan.md entry:** exists (this entry)

---

#### Section 1 — Readiness

**1.1 Done-criteria (outcome):**
≥4/5 test scenarios result in the mistake-fire rule firing (or equivalent external enforcement catching the mistake) without a user correction being the trigger. Verified by subagent tests. Implemented and stable across 3 real sessions.

**1.2 Why now:**
Repeated identical failure on the most important behavioral rule. The mistake log is the primary recurrence-prevention mechanism for the whole kit-maker process. If the rule doesn't fire, every other process improvement is operating without a safety net. Cannot start another research wave until this is fixed — otherwise we know our research procedures are defective but have no reliable mechanism to catch when they fail during a wave.

**1.3 What this is NOT:**
- Another rule rewrite (confirmed insufficient fix class)
- A single solution implemented and assumed to work
- A subjective judgment that "the rule works better now"

**1.4 Phases:**
1. **Solution generation** — comprehensive brainstorm, all solution classes, no filtering yet; artifact: mistake-process-solutions.md
2. **Test harness design** — what are the test scenarios? what counts as PASS? how are tests run via subagents? artifact: test design in mistake-process-solutions.md
3. **Subagent testing** — run test scenarios for each candidate solution; measure pass rate; artifact: test results per solution
4. **Selection and implementation** — pick winning solution(s), implement, document
5. **Verification** — monitor across 3 real sessions; count unfired instances vs. should-have-fired

**1.5 Constraint:**
The solution must be implementable within the current environment (Claude Code, text files, subagents, hooks). It cannot require changes to Claude's training or runtime architecture.

---

#### Section 3 — Integration

| Output | File | When |
|--------|------|------|
| Solution brainstorm | kit-maker/mistake-process-solutions.md | Phase 1 |
| Test design | same file | Phase 2 |
| Test results | same file, results section | Phase 3 |
| Implementation | CLAUDE.md and/or procedures/ | Phase 4 |
| Grounding-map row | grounding-map.md | Phase 4 |

---

### 9e+9f+9g — TASK_TEMPLATE Research task: Pattern B structural gates (2026-07-04)

**Status:** COMPLETE — 2026-07-04 (DC1/DC2/DC3 PASS by firing tests; plan-archive.md entry written)

**Direction:** Add three structural gates to TASK_TEMPLATE Research task type: (1) pre-synthesis PCR confirmation in Section 5 (9e); (2) alternatives gate for first-pass outputs in Section 6 (9f); (3) REVISIT_QUEUE/grounding-map trigger in Section 7 for procedure-file-modifying tasks (9g).

**Previous task status:** COMPLETE — CTRL-01 closed 2026-07-04

**Task type:** Narrow-execution (known fixes to known locations; done-criteria pre-specified in 9e/9f/9g)

**1.1 Done-criteria (outcome, not artifact):**
1. (9e) A fresh agent given only TASK_TEMPLATE identifies that synthesis cannot start until PCR is documented for all completed angles — and that a silent skip is structurally blocked (exception statement required).
2. (9f) A fresh agent given only TASK_TEMPLATE identifies that a Research task must generate ≥1 alternative with different underlying assumption after first-pass implementation, before verification — matching the Compound task type gate already present.
3. (9g) A fresh agent given only TASK_TEMPLATE identifies that when a Research task modifies a procedure file, Section 7 requires REVISIT_QUEUE.md and grounding-map.md updates as named checkboxes — not just as suggestions in plan.md trigger table.

DCQC-01: N/A — narrow-execution task applying pre-specified fixes to pre-specified locations; done-criteria are outcome-based (fresh agent verification) not artifact-based — 2026-07-04

**1.5 Current state of relevant files:**
- TASK_TEMPLATE.md Research "Adds to Section 5": checkpoint dispatch + checkpoint write only. Pre-synthesis PCR gate NOT in Section 5 — currently appears as stray section after "Adds to Section 7" (partially executed M-46 text at lines 596-597). That text says "Synthesis without PCR on completed angles is not blocked but requires the exception statement" — this is the exception clause. The done-criteria requires it be structurally in Section 5 so agents encounter it during execution, not after Section 7.
- TASK_TEMPLATE.md Research "Adds to Section 6": saturation verification + verify pass for HIGH claims. NO alternatives gate.
- TASK_TEMPLATE.md Research "Adds to Section 7": "Post-cluster-review required before marking complete." No REVISIT_QUEUE or grounding-map requirement for procedure-modifying tasks.

**1.7 What could go wrong:**
- Risk: adding Section 5 gate for 9e that duplicates the Section 7 text without removing it → two contradictory versions in different places. Fix: move/consolidate, don't duplicate.
- Risk (9f): alternatives gate for Research tasks may conflict with the Synthesis task alternatives gate already in Section 2.6 if they're for the same purpose. Must scope 9f clearly to "after first-pass implementation/synthesis" not before (that's Section 2.4).
- Pattern risk: Pattern B — gate written but placed where agents don't encounter it under execution pressure. Mitigation: all three gates go into the section agents are actively filling during execution (Sections 5, 6, 7), not in preamble.
- Pattern A: TASK_TEMPLATE edit ≠ agents will follow it. Must verify via fresh-agent dispatch.

**2.1 Previous related work:**
- M-46 (pre-synthesis PCR skip, 4th recurrence): M-46 action item partially executed — exception statement added but not moved into Section 5 execution flow
- M-47 (alternatives rule not enforced for Research task outputs): Research task Section 6 currently has no alternatives gate
- GH-01 A1 audit (M-47): post-procedure-modification integrations were only in plan.md trigger table (recognition-based), not in TASK_TEMPLATE Section 7 (structural)

**3.1 Exact approach:**
1. Read current TASK_TEMPLATE Research task additions at lines 565-597 to confirm exact text
2. 9e: Move pre-synthesis gate text from after Section 7 into "Adds to Section 5" block; reword to make it a concrete check step (not just advisory prose)
3. 9f: Add alternatives gate to "Adds to Section 6" block: "After first-pass implementation (before verification): generate ≥1 alternative with a different underlying assumption; choose explicitly; log rejected alternative"
4. 9g: Add two checkboxes to "Adds to Section 7" block: REVISIT_QUEUE.md + grounding-map.md, conditional on procedure file modification
5. Verify: dispatch fresh agent with TASK_TEMPLATE only; ask it what must happen before synthesis starts, after first-pass implementation, and at Section 7 for a procedure-modifying research task

**3.3 Integration:**
| Output | File | When |
|--------|------|------|
| Gate text additions | TASK_TEMPLATE.md | Step 2-4 |
| Done-criteria verification | Fresh agent dispatch | Step 5 |
| grounding-map.md row | grounding-map.md | After verification |
| plan-archive.md entry | plan-archive.md | After verification |

---

---

## QUEUED TASKS (not started; ordered by priority)

**SYNTH-04 — COMPLETE 2026-07-05 — moved to plan-archive.md**

---

**M-55 action items — COMPLETE:**
- **SYNTH-03 PCR check** [COMPLETE 2026-07-05 — PASS-WITH-NOTES; 4 findings all closed inline; batch 6 SYNTH-03 gate satisfied]
- **CLAUDE.md trigger table: add synthesis-output trigger** [EXECUTED 2026-07-05 — trigger added to CLAUDE.md: "Synthesis task output produced → post-cluster-review required before task closes"]

---

### INT-10 — Angle generation kit re-trial at proper scale (ACTIVE 2026-07-05)

**Direction:** Re-run the angle-gen-kit Phase 7 trial at proper scale after INT-09 was found to be underscaled and structurally invalid (Condition A used the kit — no true baseline; 3 inputs, 1–2 domains; no degraded mode; ~1 hour runtime). The kit-trial-process.md has been redesigned (2026-07-05 Stage 6 rewrite) with 8 hard scale gates, differential-primary verdict, multi-evaluator protocol, and mandatory Stage 6.

**Task type:** Trial (Compound — Stage 0 pre-registration + Stage 1 design + Stage 2 execution + Stage 3 evaluation + Stage 4 verdict + Stage 5 integration + Stage 6 process retrospective)

**Why INT-09 was invalid:**
- Gate G1 FAIL: 3 inputs (minimum 20)
- Gate G2 FAIL: 1–2 domains (minimum 5 domain types)
- Gate G3 FAIL: Condition A used the kit — zero true baseline signal
- Gate G4 FAIL: no secondary verification of baseline isolation
- Gate G5 FAIL: 1 evaluator per output (minimum 3 on Hard inputs)
- Gate G6 FAIL: no adversarial inputs (minimum 25%)
- Gate G7 FAIL: Source B deployment constraint never tested
- Gate G8 FAIL: no longitudinal batch

**Done-criteria (outcome, not artifact):**
1. All 8 Stage 0 gates documented as MET in pre-registration document
2. 20+ test inputs across 5+ domain types (empirically active, established, interdisciplinary, applied/practitioner, meta/self-referential)
3. Conditions A (true baseline, secondary-verified), B (full kit), C (Source B unavailable) all run
4. ≥3 blind independent evaluators per Hard input output
5. Longitudinal simulation: 10-input sequential batch with decay/repetition metrics
6. Verdict: differential-primary (B−A positive on ≥3 Tier 1 dimensions for GREEN)
7. Stage 6 post-trial process retrospective written and kit-trial-process.md updated before archiving

**Pattern risks:**
- Pattern A (artifact ≠ done): trial running ≠ all Stage 0 gates satisfied; verdict issued ≠ Stage 6 complete
- Pattern B (procedure not enforced): Stage 0 gate list must be verified before Stage 1, not assumed
- Recurrence risk: the scale problem that produced INT-09's invalidity was systematic — kit-trial-process.md is the fix, but only if Stage 0 is run against the new process, not the old one

**DCQC-01:** Done-criteria 1 (Gate G4 — baseline verified) cannot be self-certified by the trial executor. A secondary agent must confirm zero kit file access in Condition A prompt. Done is not done without that external confirmation.

**Next action:** Stage 0 pre-registration — enumerate the 20+ inputs, specify all 3 conditions, pre-register 5+ failure modes, complete realism assessment, verify all 8 gates.

---

### HIGH PRIORITY (queued after INT-10 closes)

1. **Research backlog re-review** — UNBLOCKED 2026-07-05 (Phase 7 trial satisfied by 9b: research-synthesis-kit GREEN verdict 2026-07-04). Re-process all synthesis.md outputs with: (a) corrected Step 3.7 (principles extraction, setup-fit assessment, derivation beyond what was tested); reclassify "ceiling" claims as "failed in tested setup" vs. "impossible in all setups"; upgrade research-copy mechanisms to principled derivations [Pattern I class fix — M-30]; includes Step 2 cross-group implication scan for all prior syntheses (also covers brainstorm item NEW-03 — see below); (b) re-run Steps 3.5 and 3.6 on each synthesis using the new subagent-based procedure — prior syntheses used same-agent dual-pass and same-agent counter-prior; both explicitly acknowledged the failure mode they failed to fix; fresh subagent passes may reclassify some HIGH tier assignments to CONTESTED; (c) re-run post-cluster-review.md on all prior clusters using the restructured procedure (2026-07-03) — all prior PCRs ran under the old procedure with no principle-level pre-read, no dimension-centric cross-match, no mechanism-options step, no Pattern I gate, no structural-type routing, no evidence-strength routing, and no cross-finding pass; these improvements may surface compound mechanisms or alternative implementations that prior PCRs missed. Source: all kit-maker/synthesis/ + research_archive/ files used to build kit rules.
**Runs before wave 2 authorization.** [Goal checker HARD BLOCK resolved 2026-07-05: blocking condition was already satisfied; flagging as indefinitely deferred was an error — Pattern J risk named and corrected.]

2. **Audit M-01–M-33 action items for execution status** — every action item in mistakes.md needs [EXECUTED — evidence] or [QUEUED → plan.md entry] or [OBSOLETE — reason]. Unexecuted relevant items become plan.md task entries. [Surfaced by M-32; updated to include M-33]
Sub-items completed: 2b (behavioral compliance test design — COMPLETE 2026-07-03), 2d (TASK_TEMPLATE compound done-criteria — COMPLETE 2026-07-04), 2e (A1 known gap fix — COMPLETE 2026-07-04), 2f (execution-based mechanism tests — COMPLETE 2026-07-04). Details in plan-archive.md.

2c. **Research angle: external behavioral enforcement via subagent reviewer** (M-33 action item) — what structures between pure self-monitoring (confirmed unreliable) and hard sandboxing are effective for enforcing LLM behavioral rules? Write angle in RESEARCH_ANGLES.md.

3. **Falsifiability gate audit on all mechanisms in goal-achieving-plan.md** — apply "this mechanism could fire correctly while FAILING to advance the goal if ___" to all 12 mechanisms; flag non-trivial answers; propose modifications to goal-achieving-plan.md. [M-28 action item]

4. **MECH-TEST-01 — Mechanism isolation test suite**
Direction: Enumerate all kit-maker mechanisms and procedures; design a minimal test for each (positive case: mechanism fires correctly; negative case: mechanism doesn't fire when it shouldn't); dispatch via fresh subagents; collect pass/fail + specific failure descriptions; log weak mechanisms as actionable items (feeds KIT-07, KIT-08, HIGH PRIORITY #1).
Task type: Compound — Design (test cases) + Audit (subagent dispatch + result analysis)
Done-criteria: Every major kit-maker mechanism has a documented test result (PASS/FAIL/PARTIAL); weak mechanisms have specific failure modes logged with proposed fix; total coverage reaches mechanisms that currently have zero tests (≥10 new mechanisms tested beyond existing S1-S12 + TC-1/2/3 + SAT-EVAL-01).

**Scope: mechanisms to test (those without dedicated tests)**
- research-quality.md procedure — does agent apply the full quality floor to a given angle?
- research-synthesis.md Steps 1–3 (grouping + contradiction scan) — does Step 2 cross-group scan fire?
- research-synthesis.md Step 3.5/3.6/3.7 — do subagent dispatch steps fire with correct inputs?
- post-cluster-review.md procedure — does PCR correctly update grounding-map + surface next steps?
- alternatives-generation.md — does it generate alternatives with genuinely different assumptions?
- mandatory-reflection.md — does it surface non-obvious gaps, or just restate the work done?
- class-before-instance.md — does agent name general class before fixing specific instance?
- satisficing-and-roi.md — does it fire when it should and stay quiet when work is clearly incomplete?
- blocking-protocol.md — does State 1 response follow the correct format?
- ENTRYPOINT.md Phase 2 gate — does agent ask only outcome-critical questions, cap at 1-3?
- ENTRYPOINT.md Hard Rule 13 element completeness — given a domain brief, does generated contract include all 12 elements?
- CLAUDE.md Check 0 (mistakes pattern scan) — does agent name the pattern risk for its current task type?
- CLAUDE.md Check 1 (pending triggers) — does agent correctly resume interrupted tasks vs. start new work?

**Already tested (excluded from scope):**
- Goal checker (S1-S12): 12 cases, 5/5 hard-block pass, 7/7 no-block pass
- SAT-EVAL-01: live prototype PASS, 9 calibration cases
- Mistake-fire rule: TC-1/TC-2/TC-3 PASS
- TASK_TEMPLATE DCQC-01 gate, Section 5/6/7 gates: PASS via 9e/9f/9g/9j dispatch

5. **Goal checker calibration audit** — run the goal checker against 10-15 past project-state snapshots (from session log or constructed from known-good decisions and known-wrong directions); measure per-angle fire rate, false-positive rate (hard-block on a direction that was actually correct), and miss rate (direction that failed and should have been blocked). Compare against existing calibration cases in goal-checker-calibration.md.
Direction: Calibrate the goal checker against real project history, not just designed cases.
Task type: Audit
Done-criteria: Per-angle frequency table produced; at least one actionable finding (either "calibration adequate — current balance confirmed" or "angle X over/under-fires in class Y — add these test cases").

---

### MEDIUM PRIORITY

**SYNTH-01 — Cluster E and Cluster F synthesis under corrected procedure**
Direction: Run full research-synthesis.md procedure (Steps 1–6, including Step 3.6 count-parity check and Step 3.7 derivations for all groups) on Cluster E (advisor behavior archives) and Cluster F (8 archives, no synthesis). Neither has a synthesis file.
Task type: Synthesis
Done-criteria: Both synthesis files exist with confidence maps, Step 3.7 derivations for all groups, and count-parity-verified counter-prior passes for all HIGH groups.
Dependency: Run before Cluster E/F content informs any kit behavioral contract decisions.

**KIT-02 — More kit tests on different domains**
Direction: Build at least one more kit via Phase 2-7 on a domain clearly different from research-synthesis (advisor behavior); compare Phase 7 failure classes against research-synthesis-kit to test whether the kit-maker produces domain-appropriate contracts or pattern-repeats.
Task type: Structural (Phase 6 build)
Done-criteria: Kit reaches Phase 7 verdict; Phase 7 RED findings by class compared against research-synthesis-kit result; any novel failure class logged.

**KIT-03 — Fork experiment: build same kit domain twice**
Direction: Take a new kit domain; build it twice — once via full Phase 2-7 pipeline, once via expert intuition without the pipeline; run both on identical realistic-scale test input; score both on the same quality rubric.
Task type: Audit
Done-criteria: Quantified gap on at least 2 scoring dimensions; result either confirms the pipeline adds measurable value or identifies where intuition outperforms — either outcome is informative.

**KIT-04 — Dogfood: kit-maker audits its own CLAUDE.md**
Direction: Run the research-synthesis-kit Phase 7 audit procedure against kit-maker's own CLAUDE.md behavioral contract, treating kit-maker itself as the generated kit being audited.
Task type: Audit
Done-criteria: Phase 7 audit report exists for kit-maker CLAUDE.md; RED findings processed via mistakes.md; YELLOW or GREEN verdict reached.

**KIT-05 — External user test (cold-start)**
Direction: Brief a fresh subagent (no session context, no memory of this project) with only the research-synthesis-kit files and a new synthesis task; every point where it gets stuck or drifts is a clarity gap in the kit files.
Task type: Audit
Done-criteria: At least 3 clarity gaps identified and logged; proposed fix written for each (file + change); at least 1 fix applied.

**KIT-06 — Adversarial user simulation**
Direction: Brief a subagent to behave as a deliberately inattentive user (minimal inputs, doesn't answer questions carefully); run the research-synthesis-kit against this adversarial user for a full synthesis task; log failure modes.
Task type: Audit
Done-criteria: Failure modes under adversarial-user conditions documented; each classified against existing plan.md calibration anchors or mistakes.md classes; any novel failure class logged.

**KIT-07 — Strip-down experiment (ablation)**
Direction: Reduce the research-synthesis-kit behavioral contract to 3 rules (minimum viable selection); run on the same input as test_run_01.md; observe what breaks; rebuild only what actually broke.
Task type: Audit
Done-criteria: List exists of which rules were removed, what broke, which were reinstated, which stayed removed — identifies Pareto-critical rules vs. comfort rules.

**KIT-08 — Rule deprecation protocol**
Direction: Write symmetric rule retirement criteria for generated kits (conditions under which an existing kit rule should be removed or merged, not just added); add to ENTRYPOINT.md Hard Rule 13 or Phase 8 checklist.
Task type: Procedure-design
Done-criteria: A fresh agent given ENTRYPOINT.md and the deprecation criteria correctly classifies at least one "should retire" example and one "should keep" example differently.

**KIT-09 — Delete-and-rebuild thought experiment**
Direction: Produce a structured audit of kit-maker CLAUDE.md, TASK_TEMPLATE, and ENTRYPOINT rules ranked by evidentiary justification (grounded in synthesis → derived by inference → cargo-cult); flag any rule that exists primarily because it was added at some point rather than because it demonstrably improves output.
Task type: Audit
Done-criteria: All major rules have a justification rating; rules with no evidence chain are flagged with proposed action (prune, test, or keep with explicit acknowledged-risk label).

*KIT-PLAN-01 COMPLETE — archived to plan-archive.md (2026-07-04)*
**Task type:** Compound — Research (3-4 angles) + Brainstorming/mechanism-design
**DCQC-01:** OUTCOME-BASED — 2026-07-04 (3 iterations: components 1–4 all outcome-proxying via fresh-agent dispatch)

---

#### Section 0 — Pre-check and routing

Pattern risks:
- **Pattern I (research as prescription, M-30):** HIGH — researching agent frameworks that use planning could lead to copying their specific structure instead of deriving the mechanism from goal-model first. Mitigation: goal-model-first derivation BEFORE any research (brainstorm/mechanism-design requirement).
- **Pattern A (artifact ≠ done, M-06):** HIGH — "plan document updated" ≠ "agents follow the plan." Done-criteria requires fresh-agent behavioral tests, not file presence.
- **Pattern D (behavioral contract decay):** MEDIUM — the mechanism itself is about plan-as-enforcement; if it becomes another rule agents can skip, it defeats the purpose. Design must be structurally enforced, not recognition-based.

Task type selected: **Compound — Research + Brainstorming/mechanism-design**

---

#### Section 1 — Readiness

**1.1 Goal model:**
Make kits that solve problems with high quality; improve the process, automate where possible, minimize user friction. Gold standard: perfect results with as little correction and feedback from the user as possible. Agent drives toward goal, user validates and makes judgment calls only.

**Evidence required:** "This task advances the goal model if it produces: a planning mechanism that generated kits use at intake to structure all required work before executing any of it — eliminating the failure pattern where distributed triggers don't fire and work is missed."

**Falsifiability:** "This task could produce a correct planning mechanism design while FAILING to advance the goal model if: the mechanism is another behavioral rule that requires recognition to trigger (like mistake-fire was before INT-06), rather than a structural plan that must be followed before execution begins."

**Task in one sentence:** Design and implement a living plan mechanism for generated kits that structures all required work at intake, expands at phase entry, and adapts to results without requiring trigger-recognition.

**Done-criteria (4 sub-goals, all outcome-based):**
1. Research predictiveness: a fresh agent given only the research sources (no design document) independently derives ≥2 structural properties that match the implemented mechanism's core properties — confirming research predicted the design, not the reverse
2. Design usability: an agent given only the planning mechanism document and a new kit scenario constructs a complete intake plan (all phases anticipated, all work categories listed, no phase blank) without guessing — verified by fresh-agent dispatch
3. Implementation usability: an agent given only the updated ENTRYPOINT.md Hard Rule 13 generates a correct intake planning structure for a new kit — verified by fresh-agent dispatch with only ENTRYPOINT.md and a scenario
4. Mechanism validation: a fresh agent given only the mechanism design and a documented failure description (missed task, unlogged pivot, or scope creep from mistakes.md) traces exactly where in the mechanism's structure that failure class would have been caught — without access to the solution

**1.2 Why now:**
Generated kits have no planning mechanism. ENTRYPOINT.md Hard Rule 13 has multi-task tracking (enumerate before starting; verify all addressed before done) but no planning at intake. Every kit built today begins execution before the full work structure is known — exactly the pattern behind Pattern B failures (45 documented). Wave 2 research is blocked; KIT-PLAN-01 is design, not wave 2 content research. No blocker.

**1.3 What this is NOT:**
- Not fixing CLAUDE.md behavioral rules (those are addressed elsewhere)
- Not wave 2 content research (this is methodology/design)
- Not a full planning framework for kit-maker itself (kit-maker has TASK_TEMPLATE.md; this is for generated kits)
- Not a replacement for phase-gate reflection (which fires at defined phases; this fires at intake of any goal)
- Not Idea #1 from goal-achieving-ideas.md (that's periodic goal-derived backlog generation for kit-maker; this is intake planning for generated kits)

Scope creep: being tempted to redesign TASK_TEMPLATE.md as part of this task; or to add planning to the kit-maker itself (separate concern).

**1.4 Alternatives:**

| Alternative | Underlying assumption | Steelman | Reason rejected | Dimension where it wins |
|-------------|----------------------|----------|-----------------|------------------------|
| Plan-as-enforcement (chosen) | Plans succeed because agents follow required steps, not because they recognize trigger conditions | 45 documented trigger failures; plan enforcement doesn't require recognition; wide-first planning is how PlanSEEK/CAMEL/Voyager handle open-ended goals | Must be designed and integrated | Structural reliability |
| Rule enrichment | More specific rules reduce trigger-miss rate | Incremental — no new procedure to design or integrate; works within current CLAUDE.md paradigm | Every rule improvement has been tried (M-05, M-14, M-16, M-20, M-21, M-22, M-24, M-33, M-39, M-41); failure pattern is self-monitoring unreliability, not rule quality | Incremental cost |
| Constraint-based approach | Blocking wrong actions (hooks, preconditions) is more reliable than prescribing right actions | Structural enforcement; harder to bypass than behavioral rules; TOOLS-01 approach | Constraint checking requires knowing what to block; planning requires knowing what to include — complementary, not alternatives; constraint-based doesn't generate the work list | Negative enforcement |

**1.5 Relevant files (current state, read before execution):**
| File | Current state relevant to this task |
|------|--------------------------------------|
| kit-maker/ENTRYPOINT.md | Contains Hard Rule 13 — has multi-task tracking, not intake planning |
| kit-maker/TASK_TEMPLATE.md | Kit-maker's own planning equivalent — model for what generated kits lack |
| kit-maker/goal-achieving-ideas.md | Idea #1 (goal-derived backlog); Idea #23 (adversarial verifier) — adjacent |
| kit-maker/goal-achieving-plan.md | Implementation plan for the 12 mechanisms — planning is not among them |
| kit-maker/procedures/research-quality.md | Research procedure — relevant for research phase |

*Note: ENTRYPOINT.md must be read before the implementation phase to understand what Hard Rule 13 currently says.*

**1.6 Assumptions and dependencies:**
- Planning mechanism research will produce findings specific enough to drive structural design decisions (not just "planning is good")
- **Strongest unsupported assumption:** agent-framework planning mechanisms (PlanSEEK, CAMEL, Voyager) operate on open-ended goals with unknown scope — same regime as kit execution. If these frameworks are designed for shorter-horizon tasks, their planning artifacts may not generalize to multi-phase kit builds.
- Session resource budget: research phase is 3-4 angles; should ask before launching Workflow

**1.7 What could go wrong / what does success make worse:**

What could go wrong:
- Main failure: design a plan structure that is still a fixed checklist in disguise — adaptive name, rigid behavior
- Output looks complete but wrong: plan mechanism produces a detailed plan that agents then ignore because it's not structurally enforced
- Most tempting skip: designing without grounding in research first (Pattern I)
- Pattern risk: Pattern I — copying a framework's planning format instead of deriving from goal model

What does success make worse:
- If planning mechanism works well in generated kits, pressure to retrofit to kit-maker itself — scope creep risk
- A planning mechanism that adapts freely may be used to justify legitimate-sounding scope changes that are actually abandonment (the adaptive/permissive tension identified in the design brief)
- Hard Rule 13 update changes ALL generated kits forward — any design flaw affects every future kit, not just the next one

**Gate 1: CLOSED** — done-criteria states outcomes (DCQC-01 OUTCOME-BASED), genuine alternatives steelmanned, strongest unsupported assumption named, what success makes worse answered specifically.

---

#### Section 2 — Exploration

**2.1 Previous related work:**
- goal-achieving-ideas.md Idea #1: goal-derived backlog generation — fires periodically (not at intake); for kit-maker, not generated kits. Adjacent but different scope.
- TASK_TEMPLATE.md: kit-maker's own planning equivalent. Will be the primary model for what to build into generated kits.
- goal-achieving-plan.md: 12 mechanisms, none of which address intake planning.
- Pattern B failures (M-45 class): 45 documented instances of trigger-recognition failures. This is the problem class KIT-PLAN-01 addresses.

**2.2 Alternative approaches — real search:** See Section 1.4. Plan-as-enforcement vs. rule enrichment vs. constraint-based. Rule enrichment rejected with evidence (documented failure history). Constraint-based is complementary, not alternative.

**2.3 Counterarguments:**
- Strongest case against: planning mechanisms add overhead. Agents that produce a complete plan at intake must invest time before doing useful work. For short kits, this overhead may not be worth it.
- What would flip the approach: evidence that planning at intake produces worse outcomes for short tasks than immediate execution. Would redesign to gate on task complexity estimate.
- Most likely to get wrong: designing for wide-first without ensuring deep-at-phase — an intake plan that lists phases but doesn't force expansion before each phase degrades to a fixed checklist.

**2.4 What will this task break:**
- Hard Rule 13 update: changes the expected behavior of all generated kits going forward. Any flaw in the planning mechanism propagates to all future kits.
- Prediction from 1.7: if the planning mechanism is adopted wholesale from a framework (Pattern I), it may fit that framework's task type well but fail for our specific kit-execution pattern.

**2.5 Adjacent problems:**
- Kit-maker itself: if KIT-PLAN-01 reveals that plan-as-enforcement works well, there's natural pressure to add the same mechanism to the kit-maker's own TASK_TEMPLATE.md. This is out of scope for this task.
- Phase-gate reflection: planning mechanism and phase-gate reflection both fire at phase transitions. They should be complementary, not conflicting. Check for overlap in Section 3.

**2.6 Research task vocabulary frames:**
- Academic: "agent planning," "task decomposition," "plan generation," "hierarchical task networks," "goal decomposition"
- Framework/practical: "AI workflow planning," "agentic scaffolding," "plan-then-execute," "skeleton planning"
- Adversarial framing: "planning overhead in LLM agents," "when planning fails for agents," "rigid plans vs. adaptive execution"
- Saturation conditions: converge when consecutive angles return no new structural design principles; at least 2 source types (academic + framework); cross-tradition query; adversarial query

**Gate 2: CLOSED**

---

#### Section 3 — Design freeze

**Approach (phase-by-phase):**
1. Goal-model-first derivation (derive planning mechanism from goal model before touching research)
2. Research: 3-4 angles on agent planning frameworks, planning artifact structures, adaptive planning
3. Synthesis: map findings to the three-property requirement (wide, deep, adaptive)
4. Mechanism design: living plan document format; expansion protocol; discovered-work routing; adaptive mutation rules
5. Implementation: update ENTRYPOINT.md Hard Rule 13; generated kit procedure template
6. Verification: fresh-agent dispatch on design (sub-goals 1-4)

**Explicit scope boundary — will NOT:**
- Redesign TASK_TEMPLATE.md for kit-maker
- Add planning to kit-maker's own operational flow
- Build the dependency graph script (TOOLS-04 territory)
- Redesign phase-gate reflection

**Quality bar:** A bad output that could be mistaken for good: a plan document that produces comprehensive lists but has no structural enforcement (agent can ignore the plan and proceed anyway). Good output: plan document has required sign-off fields that cannot be blank before phase execution starts — same pattern as DCQC-01's Section 1.1 gate.

**Integration plan:**
| Output | File | When |
|--------|------|------|
| Goal-model-first derivation | plan.md entry (this section) | Before research starts |
| Research archive | research_archive/kit-planning-[date].md | After each research checkpoint |
| Design document | kit-planning-design.md | After research + synthesis |
| Hard Rule 13 update | ENTRYPOINT.md | After design verified |
| Propagation-map update | propagation-map.md | After Hard Rule 13 update |

**Trigger check:** Significant change to ENTRYPOINT.md → check propagation-map.md (CLAUDE.md trigger table). Will fire when Hard Rule 13 is updated.

**Rollback:** If design is wrong, ENTRYPOINT.md can be reverted; the design document is separate. No irreversible step until Hard Rule 13 is committed. Point of no return: when Hard Rule 13 is updated and a kit is built with it.

**Gate 3: CLOSED** (pending research execution)

---

#### Section 4 — Execution-ready gate

- [x] DCQC-01: OUTCOME-BASED — 2026-07-04 (3-iteration rewrite)
- [x] Genuine alternatives steelmanned (Section 1.4)
- [x] All relevant files listed (Section 1.5) — ENTRYPOINT.md not yet read in full; will read before implementation phase
- [x] Strongest unsupported assumption named (Section 1.6 — framework-to-kit-execution generalization)
- [x] "What does success make worse?" answered specifically (Hard Rule 13 propagation; adaptive-to-permissive risk)
- [x] "What will this task break?" answered specifically (Section 2.4)
- [x] Integration plan complete with "when" for each output type (Section 3)
- [x] Quality bar distinguishes good from merely-present (Section 3)
- [x] No unresolved decisions hidden in prose

**Decision: ready-to-execute — pending session resource check before Workflow launch**

---

**Background (retained for reference):**

Architecture required (three properties): (1) Wide at intake — full-width plan structure at first output, all phases anticipated. (2) Deep at phase entry — section expands to full detail before each phase starts. (3) Adaptive during execution — tasks restructured as results come in, with annotation required for any change ("removed/changed because: [reason]"). Adaptive must not become permissive: dropped task ≠ deleted task.

Research required: (i) agent frameworks (PlanSEEK, CAMEL, Voyager, ReAct, etc.) — what planning artifact structures allow wide-first then deep-at-phase execution? (ii) how do existing systems handle discovered-work routing back into the plan? (iii) what does "wide but shallow" look like at intake — minimum viable skeleton for different task types?

Implementation: ENTRYPOINT.md Hard Rule 13 + generated kit procedure template. Dependency graph (JSON/YAML task dependency tagging + validation script) already queued in plan.md as part of KIT-PLAN-01 scope.

### GH-01 — Research query construction methodology — ACTIVE 2026-07-04

**Direction:** Research-quality.md specifies WHAT types of queries to run and WHICH sources to use, but not HOW to write queries that find what you want in each source's syntax. Research the methodology, then implement guidance into research-quality.md.
**Previous task status:** NOTHING ACTIVE (KIT-PLAN-01 just closed)
**Task type:** Research + Narrow-execution (implementation follows research)
**DCQC-01:** PENDING

---

#### Section 0 — Pre-check and routing

Pattern risks:
- **Pattern I (research as prescription):** HIGH — sources about "how to search arXiv" will give prescriptions; need to extract principles and assess fit for our specific domain (CS/AI kit-maker research) not just copy syntax examples.
- **Pattern B (procedure not enforced):** MEDIUM — GH-01 results update research-quality.md, which only fires when consulted; structural gate does not exist for "did you apply new query construction?". Mitigation: include a verification sub-goal that tests the guidance is followable.
- **Pattern E (concept frame lock):** MEDIUM — search methodology has distinct vocabulary traditions (library science, IR, practitioner SEO, academic search). Enumerate vocabulary frames before starting.

Task type: **Research** (primary) → **Narrow-execution** (research-quality.md update, sat-eval-01-prompt.md update)

---

#### Section 1 — Readiness

**1.1 Goal model:**
Make kits with high quality, minimal user correction. Research quality is foundational — weak queries produce weak findings which produce weak kits. Every future research task in this project uses research-quality.md. GH-01 improvements compound across all subsequent wave research.

**Evidence required:** "This task advances the goal model if it produces: source-specific query construction guidance that a researcher can follow to write better queries than they would by intuition, grounded in evidence about what works in each source."

**Falsifiability:** "This task could produce guidance while FAILING to advance the goal if: the guidance restates general principles ('be specific', 'use Boolean operators') without source-specific examples and failure patterns — producing text that looks complete but gives the researcher nothing new to apply."

**Done-criteria (3 sub-goals, outcome-based):**
1. **Usability test:** A fresh agent given only the updated research-quality.md and a kit-maker research topic (e.g., "LLM agent compliance mechanisms") writes non-trivially correct queries for all four sources — arXiv (with at least one field qualifier), Semantic Scholar (with at least one field operator), GitHub (with topic signal + quality filter), web search (with at least two operators) — without consulting any additional source. Verified by fresh-agent dispatch.
2. **API decision — fresh-agent dispatch:** A fresh agent given only the updated research-quality.md and two scenarios — one where a query needs to retrieve 500+ papers by field tag, one where it needs a quick relevance check on three terms — correctly states for each scenario (a) whether to use the Semantic Scholar or arXiv API versus web search, (b) the concrete reason drawn from the guidance, and (c) the access pattern it would use. Agent produces both decisions without consulting any external source; at least one scenario resolves to API and at least one to web search. Verified by fresh-agent dispatch.
3. **Failed-query recovery:** Given a scenario where a query returns fewer than 5 useful results, a fresh agent following only the updated guidance applies at least one concrete, source-specific adjustment — not generic advice. Verified by fresh-agent dispatch with the low-yield scenario.

**1.2 Why now:** GH-01 is the highest-priority unblocked task. It improves every subsequent research task including CTRL-01 (queued next). Wave 2 is blocked; methodology work is unblocked. The Q1–Q5 structure in research-quality.md is sound; the gap is execution-level.

**1.3 What this is NOT:**
- Not wave 2 content research
- Not a redesign of the Q1–Q5 structure (that's validated; this fills the HOW within it)
- Not a SAT-EVAL-01 redesign (Condition 2 update is a dependent action triggered by GH-01 output, not a GH-01 done-criterion)
- Not Exa.ai-only evaluation — tool evaluation is one angle among several

**1.4 Alternatives:**

| Alternative | Underlying assumption | Steelman | Reason rejected | Dimension where it wins |
|-------------|----------------------|----------|-----------------|------------------------|
| Research the methodology, implement into research-quality.md (chosen) | Query construction effectiveness can be researched and formalized; practitioners and academics have documented what works | Compounds across all future research; one investment improves every subsequent angle | Requires research first, no immediate deliverable | Long-term leverage |
| Empirical trial: run same angle with current vs improved queries, measure difference | Only evidence we trust is our own results, not others' methodology | Directly validates in our domain | Expensive; delays wave 2; we don't have ground-truth results to measure against | Ecological validity |
| Practitioner shortcut: adopt a well-known research guide directly (e.g., library science IR guide) | Existing guides are already good enough | Low effort; expert-authored | Pattern I risk: library science guides are domain-general and won't have AI/agent-specific examples or GitHub as a primary source | Speed |

**1.5 Relevant files:**
| File | Current state relevant to this task |
|------|--------------------------------------|
| kit-maker/research-quality.md | Has Q1–Q5 structure, source list, saturation conditions. Missing: per-source query construction guidance. Will be the implementation target. |
| kit-maker/sat-eval-01-prompt.md | Condition 2 counts source types but doesn't name expected types. Dependent update after GH-01. |
| kit-maker/research_archive/ | Contains prior angles — useful for spotting where query quality gaps caused weak results. |

**1.6 Assumptions:**
- Semantic Scholar and arXiv have documented query syntax available online (reasonable assumption; both have API docs).
- GitHub topic search behavior is documentable from GitHub's own docs + practitioner experience.
- Our domain (CS/AI/agent behavior research) has enough practitioner guidance to provide real examples.
- **Strongest unsupported assumption:** That query construction is the binding constraint on research quality. Alternative: the binding constraint is saturation detection (when to stop), not query construction (how to start). If true, GH-01 improves marginal queries but not the overall research quality ceiling. Mitigation: scope GH-01 to construction only; saturation is already addressed by SAT-EVAL-01.

**1.7 What could go wrong:**
- Guidance becomes a list of syntax tips with no examples for our specific domain — Pattern F (correct structure, wrong content)
- API access sections describe APIs that require auth or payment we don't have — test access before writing guidance
- Exa.ai evaluation takes disproportionate research time relative to its value — time-box it

What does success make worse: if query construction improves significantly, the current "consecutive zero-yield" saturation condition may become harder to trigger — better queries find more, so saturation takes longer. May need to adjust SAT-EVAL-01 thresholds after GH-01.

**Gate 1: CLOSED** — outcomes stated, alternatives steelmanned, strongest unsupported assumption named.

---

#### Section 2 — Exploration

**2.1 Previous related work:**
- research-quality.md Q1–Q5 structure: validated; source list exists; saturation conditions exist. No per-source construction guidance.
- Angles 168-176 (research methodology cluster): focused on saturation, vocabulary frames, adversarial queries. None addressed construction syntax within a source.
- MULTI-01 (source diversity): established that multiple source types are required. GH-01 is the "how to use each source" companion.

**2.2 Vocabulary frames to enumerate before research:**
- Information retrieval (IR): precision, recall, boolean operators, field search, relevance ranking
- Library science: controlled vocabulary, subject headings, database search syntax
- Practitioner/developer: GitHub search docs, arXiv query syntax, Google search operators
- Academic search: Semantic Scholar API docs, Google Scholar quirks, cross-database translation
- Adversarial: why queries fail, operator misuse, result set pollution

**2.3 Counterarguments:**
- Strongest case against: query construction is tacit knowledge; formalizing it produces a guide that looks complete but misses the expert judgment that makes queries good. Mitigation: focus on mechanical aspects (syntax, operators) that are rule-based, not judgment aspects.
- Most likely to get wrong: GitHub specifically — GitHub search is notoriously inconsistent; guidance written from docs may not match actual behavior. Verify with live queries.

**2.4 What will this break:**
- research-quality.md changes affect all future research tasks that consult it
- If guidance is wrong about API access (e.g., states Semantic Scholar API requires no auth when it does), researchers follow bad guidance confidently

**2.5 Adjacent problems:**
- Cross-source result deduplication: if better queries return more results, deduplication across sources becomes more important. Out of scope.
- Query logging: currently no mechanism for recording which queries ran and what they returned. Valuable but out of scope.

**2.6 Research angles (7):**
- A1: arXiv query syntax — field qualifiers (abs:/ti:/all:/au:/cat:), boolean operators, field combinations, domain-specific examples for AI/ML/agents, known quirks
- A2: Semantic Scholar — field operators, API vs web interface, structured retrieval, what fields are most useful for CS/AI, query construction for relevance
- A3: GitHub search — code search vs topic search vs repository search, quality signals (stars, forks, issues, commit recency, README completeness), claim extraction from code vs papers
- A4: Web search operators — site:, -term, "exact phrase", filetype:, year ranges, Google Scholar vs general web, academic operator patterns
- A5: Failed-query recovery and cross-source translation — when a query returns <5 useful results: broadening tactics, re-framing, vocabulary substitution; adapting a successful query from one source to another
- A6: Tool evaluation — Semantic Scholar API vs web, arXiv API vs web, Exa.ai for grey-lit; access patterns, when API preferred, cost/auth requirements
- A7: Adversarial — when query construction guidance fails; over-specification, vocabulary mismatch between query and paper terminology, confirmation bias in query design, operator abuse

Saturation conditions (§2.6 standard four):
1. Consecutive queries return keys already in set
2. ≥2 structurally distinct source types covered (docs/practitioner + academic IR literature)
3. Cross-tradition check: query construction from library science perspective vs practitioner perspective
4. Adversarial query: "query construction fails because" / "why database search is unreliable"

**Gate 2: CLOSED**

---

#### Section 3 — Design freeze

**Approach:**
1. Research 7 angles (Workflow, parallel) → checkpoint files per angle
2. Synthesis → per-source guidance sections
3. Implementation → update research-quality.md with per-source construction sections; add failed-query recovery; add API decision table
4. Verification → fresh-agent dispatch (done-criteria sub-goals 1 + 3)

**Scope boundary — will NOT:**
- Update SAT-EVAL-01 Condition 2 (dependent task, triggers after GH-01)
- Build query logging infrastructure
- Run any wave 2 research with the new guidance (validate methodology first, then use it)

**Quality bar:** Bad output: "Use field qualifiers in arXiv for better results. Example: ti:planning." Good output: "For a topic like 'LLM agent task planning', arXiv query: `ti:planning AND (abs:agent OR abs:LLM) AND cat:cs.AI` — field-qualified, Boolean-combined, category-scoped. Fails when: topic spans categories (use `abs:` instead of `cat:`); acronym missing (add `OR abs:"language model"`)."

**Integration plan:**
| Output | File | When |
|--------|------|------|
| Research checkpoints | research_archive/gh-01-a[N]-2026-07-04.md | After each angle completes |
| Synthesis | research_archive/gh-01-synthesis-2026-07-04.md | After all angles saturate |
| Implementation | kit-maker/research-quality.md (new per-source sections) | After synthesis |
| Verification | fresh-agent dispatch results (in Section 6) | After implementation |

**Gate 3: CLOSED**

---

#### Section 4 — Execution-ready gate

- [x] DCQC-01: OUTCOME-BASED — 2026-07-04 (criterion 2 rewritten: artifact "guidance states" → fresh-agent dispatch with two contrastive API vs web scenarios)
- [x] Genuine alternatives steelmanned (Section 1.4)
- [x] Relevant files listed and current state noted (Section 1.5)
- [x] Strongest unsupported assumption named (Section 1.6)
- [x] "What does success make worse?" answered specifically (SAT-EVAL-01 threshold may need update)
- [x] "What will this task break?" answered (research-quality.md changes affect all future research)
- [x] Integration plan complete with file + timing (Section 3)
- [x] Quality bar distinguishes good from merely-present (Section 3)
- [x] Session resource check: confirm session is free before Workflow launch (7-angle parallel)

**DCQC-01 result:** OUTCOME-BASED — 2026-07-04 (criterion 2 rewritten: artifact "guidance states" → fresh-agent dispatch with two contrastive API vs web scenarios)

---

#### Section 5 — Saturation evaluation

**PCR note:** Synthesis ran before PCR (M-46 pre-synthesis gate). PCR exception written; PCR ran inline on synthesis file before implementation. PCR finding: `cat:cs.AI` listed as primary LLM/agent category — confirmed wrong by A1; fixed inline before inserting new sections.

**Saturation verdict:** SATURATED — all 7 angles (A1 arXiv, A2 Semantic Scholar, A3 GitHub, A4 web search, A5 recovery, A6 tools, A7 adversarial). Workflow wf_a1f08524-093 complete, all 7 checkpoint files written. Saturation conditions met: (1) consecutive angles returned shared key vocabulary and convergent rules (C1-C6 across 3+ angles each); (2) 3 structurally distinct source types: academic API docs, practitioner search guides, adversarial/IR literature; (3) cross-tradition check: library science IR perspective (vocabulary mismatch, boolean operators) vs. developer/practitioner perspective (syntax quirks, failure modes) both covered; (4) adversarial query run (A7: "query construction fails because" / "why database search is unreliable") — confirmed 92.7% error rate finding, irreducible limitations documented.

---

#### Section 6 — Post-task review

**Done-criteria re-check:**
- Sub-goal 1 (usability): PASS — fresh agent produced correct queries for all 4 sources with proper field qualifiers, cited guidance elements by name, named failure modes
- Sub-goal 2 (API decision): PASS — correctly resolved 500+ paper scenario → Semantic Scholar API + arXiv API; quick 3-term check → web; both with concrete guidance citations and access patterns; one scenario to API, one to web
- Sub-goal 3 (failed-query recovery): PASS — FM-1 (vocabulary mismatch) identified by code; seed-paper method applied; 3 revised arXiv queries produced; Semantic Scholar source-switch with specific parameters

**Goal checker:** SOFT CHALLENGE — verification tests measure guidance coherence, not actual search outcome improvement. Acknowledged as known limitation: outcome testing requires live database access and ground-truth results, neither available in this setup. Guidance content is directionally correct (PCR found no content errors beyond cs.AI category issue, which was fixed before implementation). Limitation noted.

**Retroactive alternative (V6 fix — M-47):**
Implementation structure: source-first (arXiv guide, Semantic Scholar guide, GitHub guide, web search guide, then recovery + matrix + API + calibration).
Alternative: failure-mode-first (vocabulary mismatch guide with per-source tactics, operator over-specification guide with per-source tactics, source gap guide, etc.).
Choice: source-first wins. Researchers approach a task by selecting a source first, then constructing a query for it. Source-first matches the natural use pattern (consult during arXiv search → read arXiv section). Failure-mode-first would be more useful for diagnosing problems after the fact, but the document serves primarily as a pre-search reference. Single dimension where failure-mode-first wins: when failure mode is identified first (e.g., knowing you have a vocabulary mismatch before deciding which source to use), the failure-mode-first structure would let you resolve it faster without knowing which source you're targeting.

**A1 auditor findings:** 6 confirmed violations (V1-V6 in GH-01 A1 report). All Pattern B. Processed via M-47 entry. Immediate fixes: REVISIT_QUEUE.md updated (V4), grounding-map.md updated (V5), retroactive alternative noted here (V6). Queued structural fixes: TASK_TEMPLATE Research Section 6 alternatives gate (plan.md 9f), TASK_TEMPLATE Section 7 trigger-table rules (plan.md 9g).

---

#### Section 7 — Integration close

**Integration verified:**
- research-quality.md: per-source query construction guide (arXiv, Semantic Scholar, GitHub, web search), failed-query recovery, tool decision matrix, API access guide, adversarial calibration (A1-A7), divergences (D1-D4) — all inserted
- REVISIT_QUEUE.md: GH-01 methodology changes added to timeline; REVISIT-A-09 cs.AI category correction impact added
- grounding-map.md: arXiv field qualifier row updated to ✅ VALIDATED; per-source construction decision row added
- mistakes.md: M-47 logged with 5-question investigation and action items
- plan.md: 9f, 9g added as queued structural fixes
- GH01_RESUME_INSTRUCTIONS.md: retained for reference

**GH-01: COMPLETE — 2026-07-04**

*Archived to plan-archive.md*

---

### CTRL-01 — Agent control surface survey — ACTIVE 2026-07-04

**Direction:** Survey all available Claude Code / Claude agent control mechanisms (skills, hooks, custom agent types, MCP, permissions, workflows), determine which kit-maker should generate per kit type, and update Phase 6 checklist accordingly.
**Previous task status:** GH-01 COMPLETE 2026-07-04
**Task type:** Research (primary) → Narrow-execution (Phase 6 checklist update + implementation specs)
**DCQC-01:** OUTCOME-BASED — 2026-07-04 (all 3 done-criteria require fresh-agent dispatch; DC2/DC3 upgraded from artifact to behavioral: agent must generate correct file FROM SPEC without consulting external docs, not just "spec exists")

---

#### Section 0 — Pre-check and routing

Pattern risks:
- **Pattern I (research as prescription):** HIGH — reading Claude Code docs about skills/hooks could lead to copying their example use cases instead of deriving from kit-maker's goal model. Mitigation: goal-model-first derivation for each mechanism before research starts.
- **Pattern B (procedure not enforced):** MEDIUM — CTRL-01 is a Research task. M-47 item 9f queued (alternatives gate for Research Section 6) but not yet in TASK_TEMPLATE. Apply manually: generate ≥1 alternative with different underlying assumption before Phase 6 update.
- **Pattern A (artifact ≠ done):** MEDIUM — "Phase 6 checklist updated" ≠ "agents use new mechanisms." Done-criteria requires fresh-agent behavioral dispatch.

Task type: **Research → Narrow-execution**

---

#### Section 1 — Readiness

**1.1 Goal model:**
Make kits that solve problems with high quality; improve the process, automate where possible, minimize user friction. Gold standard: perfect results with as little correction as possible.

**Evidence required:** "CTRL-01 advances the goal model if it produces: generated kits that use more of the available agent control surface — giving future kits structural enforcement options beyond CLAUDE.md behavioral rules, so fewer quality failures depend on recognition."

**Falsifiability:** "CTRL-01 could produce a complete Phase 6 checklist while FAILING to advance the goal model if: the decision rules give the same answer for all kit types (no differentiation = no guidance), or if the implementation specs are too vague to generate without external documentation."

**Done-criteria (3 sub-goals, all outcome-based — DCQC-01 OUTCOME-BASED):**
1. **Decision-rule test:** A fresh agent given only the updated Phase 6 checklist and a kit scenario ("a research assistant kit that runs multi-session long searches requiring behavioral persistence") correctly identifies which control mechanisms to include AND provides the concrete reason for each choice — without being told what mechanisms exist. At least 2 non-CLAUDE.md mechanisms must be correctly selected. Verified by fresh-agent dispatch.
2. **Skills usability:** A fresh agent given only the updated Phase 6 checklist and the skills implementation spec generates a complete, syntactically correct skill file for the scenario — without consulting documentation. Required: correct frontmatter fields populated with scenario-appropriate content (not placeholder), skill body with actionable instructions. Verified by fresh-agent dispatch.
3. **Hooks usability:** A fresh agent given only the Phase 6 checklist and hooks implementation spec generates a valid hooks configuration block for the scenario — correct event type, command format, and scenario-appropriate trigger condition — without consulting documentation. Verified by fresh-agent dispatch.

**1.2 Why now:**
Kit-maker generates CLAUDE.md and procedure files but misses skills, hooks, and custom agents — documented in the agent control survey from the previous session. Every future kit build starts with an incomplete control surface. CTRL-01 is needed before the next kit build (item 9b — research synthesis kit). Wave 2 is still blocked; CTRL-01 is design/research, not wave 2 content.

**1.3 What this is NOT:**
- Not implementing skills/hooks into an actual kit (that's item 9b)
- Not a full MCP server evaluation (scoped out: MCP requires external infrastructure, not kit-maker's job to generate)
- Not a workflow script evaluation (workflow scripts are session tools, not kit artifacts — design choice, not omission)
- Not a redesign of CLAUDE.md (this adds to Phase 6, not replaces existing content)

**1.4 Alternatives:**

| Alternative | Underlying assumption | Steelman | Reason rejected | Dimension where it wins |
|-------------|----------------------|----------|-----------------|------------------------|
| Generate skills + hooks for all kits (chosen approach: generate based on decision rules) | Each kit type has different control needs; over-generating creates maintenance burden per memory "Kit at right scope" | Decision rules differentiate — research kits need behavioral persistence skills; execution kits need tool-restriction hooks | Any single "generate always" or "never generate" policy loses the nuance | Lean default |
| Never generate skills/hooks — only CLAUDE.md | Simplicity; fewer files = less maintenance | Per memory feedback: "every generated file is a forever maintenance burden" | The control surface gap is real — skills and hooks offer structural enforcement that CLAUDE.md behavioral rules don't; the research question is WHEN, not WHETHER | Maintenance minimalism |
| Generate a full skills library (all mechanisms pre-populated) | Users can pick and choose | Maximum optionality | Per memory "pre-populated registers defeat their own promotion discipline" — agents use what's there without earning it | Discovery |

**1.5 Relevant files:**
| File | Current state |
|------|--------------|
| kit-maker/ENTRYPOINT.md | Contains Phase 6 checklist — will be the implementation target |
| kit-maker/paper-review-kit/CLAUDE.md | Example generated kit — shows what current Phase 6 produces |
| kit-maker/CLAUDE.md | Uses skills (brainstorming skill invoked in session); no skills generated for kits |
| C:\Users\masuta\.claude\plugins\cache\ | Skill files from the superpowers plugin — concrete examples of skill file format |

**1.6 Assumptions and dependencies:**
- Skills and hooks are documented in Claude Code documentation (accessible via claude-code-guide agent)
- Custom agent types require `.claude/agents/` files — format documentable from current session context
- **Strongest unsupported assumption:** That skills and hooks are stable enough across Claude Code versions to warrant generating them in Phase 6. If the format changes frequently, generated kits become maintenance debt. Mitigation: check version stability before writing implementation specs.

**1.7 What could go wrong / what does success make worse:**
- Main failure: generate decision rules that fire for every kit type equally → no differentiation → spec says "always include skills" which is Pattern I
- Output looks complete but wrong: Phase 6 checklist adds mechanism choices but they're described at "what it is" level not "when it's right" level
- Most tempting skip: writing implementation specs from documentation examples instead of deriving from our kit-maker goal model (Pattern I)
- What success makes worse: ENTRYPOINT.md change affects all future kits. Any wrong decision in the spec propagates forward. Phase 6 becomes longer (more decisions per kit build).

**Gate 1: CLOSED** — done-criteria states behavioral outcomes, genuine alternatives steelmanned, strongest unsupported assumption named.

---

#### Section 2 — Exploration

**2.1 Previous related work:**
- Agent control surface survey (from session): 10 mechanisms mapped; 4 currently generated; biggest gaps: skills, hooks, custom agents
- Memory feedback "Kit at right scope": lean cores, external pointers; every generated file is maintenance burden; pre-populated registers defeat promotion discipline
- Memory feedback "Apply kit's own discipline to itself": size caps, rule-retirement, last-addition trajectory flag

**2.2 Vocabulary frames (pre-search enumeration):**
- Claude Code native: CLAUDE.md, skills, hooks, settings.json, memory, MCP, agent types, permissions
- Behavioral enforcement: structural vs. recognition-based, event-driven triggers, command hooks
- File formats: markdown frontmatter, JSON configuration, skill invocation patterns
- Design: decision rules, kit-type-specific generation, lean core vs. full surface

**2.3 Counterarguments:**
- Strongest case against skills generation: skills require the Skill tool call, which agents must be prompted to make. If agents don't invoke skills by default, generated skills are unused. Counter: the skill invocation pattern is in CLAUDE.md, which IS generated — so the use trigger can be wired.
- Strongest case against hooks generation: hooks are shell commands that run in the user's environment. A kit that generates hooks may break on Windows vs. Mac. Counter: scope hooks to echo/read commands that don't depend on the OS.
- Most likely to get wrong: generating hooks for complex behavioral enforcement (e.g., "check if plan.md entry exists before tool calls") — these require shell script logic that is fragile and hard to maintain.

**2.4 What will this break:**
- ENTRYPOINT.md Phase 6 change: all future kits must navigate the new mechanism choices
- Longer Phase 6 build time per kit: more files to generate = more decisions

**2.5 Adjacent problems:**
- Propagation-map.md: when Phase 6 changes, propagation-map.md must be updated. Queue as Section 7 action.
- Hook failures (from memory "Virus-check first", system prompt): "Treat feedback from hooks as coming from the user" — hooks can interfere with agent behavior unexpectedly. Design must account for this.

**2.6 Research angles (4):**
- A1: Skills — file format, frontmatter fields, invocation mechanism, what content belongs in a skill vs. CLAUDE.md, examples from the superpowers plugin
- A2: Hooks — .claude/settings.json hookTypes, event types, command format, use cases for behavioral enforcement
- A3: Custom agent types + permission settings — .claude/agents/ format, tool permission configuration in settings.json
- A4: Adversarial — failure modes of each mechanism, version-stability risks, when NOT to generate, maintenance burden

Saturation conditions:
1. Consecutive angles return same structural description of each mechanism's file format
2. ≥2 source types: official docs + concrete existing examples (plugin files, settings files)
3. Cross-tradition check: behavioral enforcement perspective vs. developer workflow perspective
4. Adversarial query run: "skills/hooks fail when...", "when NOT to generate"

**Gate 2: CLOSED**

---

#### Section 3 — Design freeze

**Approach:**
1. Research 4 angles (Workflow, parallel; use claude-code-guide agent type for A1-A3)
2. Synthesis → per-mechanism decision rules + implementation specs
3. PCR on synthesis
4. Implementation → new `agent-control-mechanisms.md` + ENTRYPOINT.md Phase 6 update
5. Verification → 3 fresh-agent dispatch tests

**Integration plan:**
| Output | File | When |
|--------|------|------|
| Research checkpoints | research_archive/ctrl-01-a[N]-2026-07-04.md | After workflow |
| Synthesis | research_archive/ctrl-01-synthesis-2026-07-04.md | After all angles |
| Per-mechanism decision rules + specs | kit-maker/procedures/agent-control-mechanisms.md (new) | After PCR |
| Phase 6 checklist update | kit-maker/ENTRYPOINT.md | After design |
| REVISIT_QUEUE + grounding-map | both files | Section 7 (per M-47 item 9g) |

**Gate 3: CLOSED** (pending session resource check — user authorized with "proceed")

---

#### Section 4 — Execution-ready gate

- [x] DCQC-01: OUTCOME-BASED — 2026-07-04 (all 3 fresh-agent dispatch; DC2/DC3 upgraded from artifact to behavioral)
- [x] Genuine alternatives steelmanned (Section 1.4)
- [x] Relevant files listed (Section 1.5)
- [x] Strongest unsupported assumption named (Section 1.6 — mechanism stability across versions)
- [x] "What does success make worse?" answered specifically (ENTRYPOINT.md complexity, longer Phase 6)
- [x] "What will this task break?" answered (Section 2.4)
- [x] Integration plan complete with file + timing (Section 3)
- [x] Quality bar: decision rules must differentiate kit types; "always include" = no guidance (Section 1.7)
- [x] Session resource check: user authorized "proceed"

**Decision: ready-to-execute — launching 4-angle research Workflow**

---

#### Section 5 — Saturation evaluation

**Research state:** NOT SATURATED — A1-A3 (skills, hooks, agents/permissions documentation angles) failed to write checkpoint files due to M-48 (agentType: 'claude-code-guide' has no Write tool). Synthesis ran with only A4 (adversarial) + ENTRYPOINT.md.

**What was saturated:**
- Failure modes and when-NOT-to-generate for all 4 mechanisms: HIGH CONFIDENCE (A4 adversarial grounding)
- Mechanism hierarchy (CLAUDE.md > Skill > Hook > Custom type > Restriction): HIGH CONFIDENCE (adversarial + ENTRYPOINT lean-core convergence)
- Default-minimal posture for all mechanisms: HIGH CONFIDENCE
- Phase 6 checklist addition text: USABLE (adversarially grounded; verified against doc formats)

**What was not saturated:**
- Real-world production skill examples from GitHub: NOT RUN
- Confirmed hook syntax from official documentation: NOT RUN (verified via hooks-patterns.md reference doc instead)
- Custom agent type definition schema: NOT RUN (verified via actual agent .md files instead)

**Gaps closed by documentation verification (instead of research re-run):**
- Skill frontmatter: `name:` + `description:` both required — confirmed from actual SKILL.md; synthesis had `description:` only (critical error; corrected in procedures file)
- Custom agent format: `.claude/agents/<name>.md` with frontmatter + system prompt body — confirmed from code-simplifier agent file; synthesis said "CLAUDE.md files or instruction profiles" (incorrect; corrected)
- Hooks settings.json format: `matcher: ""` for Stop, `type: command`, `command:` field — confirmed from hooks-patterns.md reference docs
- 300-token skill cap: PROVISIONAL (inference from rule-density research, not measured; documented as soft threshold)

**Saturation verdict:** Sufficient to proceed with implementation. The adversarial angle + documentation verification covers the minimum required for correct implementation specs. Full A1-A3 documentation research would have added production examples and edge-case patterns; decision rules and format specs are confirmed.

---

#### Section 6 — Post-task review

**Files modified:**
- `kit-maker/mistakes.md` — M-48 logged (tool-scope mismatch), M-49 noted (M-46 class recurrence; PCR ran inline)
- `kit-maker/procedures/agent-control-mechanisms.md` — NEW FILE: per-mechanism decision rules + corrected templates (name: fixed, custom agent format corrected, hooks gate criterion (c) fixed after DC1 revealed non-checkability)
- `kit-maker/ENTRYPOINT.md` — Phase 6 mechanism pre-draft gate (5 checkboxes) + mechanism count check added
- `kit-maker/plan.md` — item 9h added (tool-requirements check for workflow dispatch)
- `kit-maker/project-state.md` — updated twice this turn

**Verification test results:**
- DC1 (Decision-rule): THRESHOLD PASS — Skills (YES ✓), Custom agent types (YES, debatable but reasoned), Permissions allow-list (YES ✓), Hooks (NO — gate criterion c not checkable at design time). At least 2 non-CLAUDE.md mechanisms correctly selected. Post-test fix: hooks gate criterion (c) reworded from "tested" to "syntax confirmed at generation time."
- DC2 (Skills usability): CLEAR PASS — Generated `claim-extraction.md` with `name: claim-extraction` + `description:` frontmatter, 7 conditional steps, binary done condition, scenario-appropriate content.
- DC3 (Hooks usability): CLEAR PASS — Generated correct `{"hooks": {"Stop": [{"matcher": "", "hooks": [{"type": "command", "command": "..."}]}]}}` with justification for why CLAUDE.md cannot substitute.

**A1 auditor findings (8 items):**
- Item 1 (plan.md entry rule fired late): Borderline — task was already registered in plan.md from prior session; no new user direction this turn.
- Item 2 (synthesis errors not logged as M-46 class): GENUINE — synthesis provisional content errors (missing name:, wrong agent format) were PCR findings, not a separate mistake class. M-46 class applies. PCR ran inline; logged as brief M-49 note.
- Item 3 (done-criteria not re-stated before turn): Borderline — done-criteria were in project-state.md from prior session; session resume of registered task.
- Item 4 (project-state.md not updated after tests): GENUINE — fixed in this turn.
- Item 5 (REVISIT_QUEUE not updated): GENUINE — being fixed in Section 7.
- Item 6 (grounding-map not updated): GENUINE — being fixed in Section 7.
- Item 7 (TASK_TEMPLATE Sections 5-7 not verified): GENUINE — being fixed now.
- Item 8 (alternatives for ENTRYPOINT edit): Borderline — ENTRYPOINT edit was insertion of pre-existing content (synthesis Section 3 text); not a first-pass draft.

**Retroactive alternative (per M-47 item 9f, manual until TASK_TEMPLATE updated):**
- Alternative to per-mechanism chapter structure: decision-tree routing format (single entry question → mechanism branch → rules per branch)
- Chosen: per-mechanism chapters — Phase 6 checklist gates each mechanism separately; practitioners look up per-mechanism, not via routing tree
- Alternative wins on: top-down selection flow; rejected on: per-mechanism lookup need, branch overlap risk

**Pattern risk check:**
- Pattern I (research as prescription): NOT FIRED — decision rules derived from adversarial failure-mode reasoning and goal model, not copied from documentation examples
- Pattern B (procedure not enforced): PARTIAL FIRE — alternatives gate applied manually per M-47 item 9f
- Pattern A (artifact ≠ done): NOT FIRED — 3 behavioral verification tests dispatched and all passed threshold

**CTRL-01: COMPLETE — 2026-07-04**

---

#### Section 7 — Integration close

**CTRL-01 done-criteria re-check before marking complete:**
1. DC1: PASS (threshold: ≥2 non-CLAUDE.md mechanisms correctly selected with reasons)
2. DC2: PASS (syntactically correct skill file with correct frontmatter, actionable steps)
3. DC3: PASS (valid hooks config, correct event type and format, justified against CLAUDE.md alternative)

**REVISIT_QUEUE.md:** Methodology timeline updated — CTRL-01: procedures/agent-control-mechanisms.md created, ENTRYPOINT.md Phase 6 updated.

**grounding-map.md:** Phase Gates rows added for Phase 6 mechanism selection gate.

**Propagation-map.md:** Phase 6 now generates mechanism files (skills, hooks, custom types, settings.json). propagation-map.md should note this new output class. Deferring as discovered-work item — not in scope of CTRL-01 (which was "decide which mechanisms to generate when" not "update the kit propagation map"). Queue as separate item.

**Discovered work:**
- propagation-map.md needs Phase 6 mechanism files added to output class list — queue as low-priority item

**CTRL-01: COMPLETE — 2026-07-04** (DC1/DC2/DC3 all verified; implementation files written; ENTRYPOINT.md updated)

---

3b. **TASK_TEMPLATE Research pre-dispatch checklist** — Section 3 for Research task type: add pre-dispatch checklist with (a) Workflow vs Agent choice per memory, (b) return-value scope limit (verdict + key claims only, not full archive), (c) session resource check. [M-42 action item]

3c. **SAT-EVAL-01 §2.6 wave 2 maintenance check** — After wave 2 batch 1 closes: assess whether any wave 2 findings require §2.6 saturation condition updates; if yes → update §2.6, recalibrate SAT-EVAL-01 per sat-eval-01-maintenance.md.

3d. **SAT-EVAL-01 expected-subtopics enhancement** — Address breadth/depth gap (documented Risk 4b in sat-eval-01-architecture.md): (a) add "expected subtopics" declaration field to TASK_TEMPLATE research angle start; (b) update SAT-EVAL-01 evaluator dispatch protocol to pass expected subtopics; (c) update sat-eval-01-prompt.md: check each expected subtopic for ≥1 claim key, flag zero-coverage subtopics as DEPTH GAP. [Goal checker block at SAT-EVAL-01 task close — architecture Risk 4b]

4. **Audit M-01–M-16 "Fix applied" entries** — identify which have no file evidence; verify or re-execute those fixes. [Surfaced by M-20 5.3]

5. **TASK_TEMPLATE.md Section 6** — add "completion reports must cite observable evidence" requirement. [Surfaced by M-20 5.3]

6. **CLAUDE.md always-on rules audit** — classify each rule as structural enforcement vs. self-monitoring; convert self-monitoring rules to structural where possible. [Surfaced by M-21 5.3]

7. **Propagation-map.md audit** — verify CLAUDE.md and TASK_TEMPLATE.md changes from 2026-07-03 are reflected; update "Last full audit" date. [Deferred multiple times; never completed]

8. **grounding-map.md update** — TASK_TEMPLATE.md Section 1.1 goal-first restructure (M-25 fix) not yet entered. [Trigger rule: significant procedure change → grounding-map.md]

9. **Phase 7 trial calibration** (after paper-review-kit complete) — run a real paper through Condition A (freeform, no kit); measure baseline recall; if baseline ≥3/4 of major methodology issues → trial task too easy, redesign before full trial.

9b. **Next Phase 6 kit test — research synthesis kit** — COMPLETE 2026-07-04
**Outcome:** Kit reached GREEN verdict from Phase 7 auditors. Phase 6 real-input validation ran on 5-file advisor-behavior cluster (80 claims, 10 groups, 6 counter-priors generated). Phase 7 canary CALIBRATED PASS. 3 cross-file correctness fixes applied (empirical threshold consistency, observable violation cardinality, counter-prior definition). 5 key learnings logged in plan-archive.md. 4 divergences from research-synthesis.md documented (cross-group scan, threshold term, observable violation, write-timing). See plan-archive.md for full entry.

9c. **Kit test value-extraction implementation** — COMPLETE 2026-07-04
**Direction:** Implement 4 improvements to ENTRYPOINT.md from INT-05 kit-test learnings before next Phase 6 kit test.
**Previous task status:** COMPLETE — 9e/9f/9g/9h/9j/9i batch
**Task type:** Narrow-execution (known changes to known locations)
**Done-criteria (outcome):** A fresh agent given only ENTRYPOINT.md can identify that (i) kits with >3 input types require a coverage matrix in Phase 5 before Phase 6; (ii) Phase 6 "gate after all files built" requires ≥1 test run on a real input from the work queue; (iii) the canary requirement in Phase 7 specifies a concrete format (what "known-bad" means, what PASS/FAIL means) not just "if one exists"; (iv) Phase 6 BUILD specifies how to transmit the goal model to the worktree subagent running the kit.
**DCQC-01:** Does this task add/change/remove a behavioral gate, rule, or procedure? YES → N/A not eligible → dispatching inline: done-criteria names behavioral outcomes (fresh agent identifies gates, not artifact presence). OUTCOME-BASED — 2026-07-04
**Outcome:** All four done-criteria met. Goal checker Angle 5 (Success-criteria reversal): SOFT CHALLENGE + PASS. Hard block fired on criterion (iii) missing "known-bad" definition → fixed with 3-criteria definition + TYPE-aligned/finding-predetermined anti-circular distinction. Two soft challenges resolved inline. 4 grounding-map entries added (all ❌ UNRESEARCHED — INT-05 failure analysis derivations). REVISIT_QUEUE timeline row added. plan-archive entry below.

9k. **Propagate 9b Phase 6/7 learnings to research-synthesis.md** — COMPLETE 2026-07-05
**Outcome:** All 3 done-criteria PASS by fresh-agent dispatch. 4 edits to research-synthesis.md: (1) cross-group implication scan added to Step 2 (second-pass, required, explicitly labeled); (2) "empirical" made explicit in BOTH threshold sub-cases ("Both cases require the claims to be empirical — consensus or anecdotal claims do not count toward this threshold regardless of verify confidence"); (3) Step 3.6 scope changed from "highest-confidence group" to "every HIGH-tier group" + count-parity completion check added; (4) execution sub-steps Step 3.6 residual reference to "highest-confidence group" fixed to "current HIGH group." Propagation complete. See plan-archive.md for full entry.

9d. **Post-task compliance subagent** — design as P2 mechanism in goal-achieving-ideas.md: after each task completes, a fresh subagent reads the conversation and checks which behavioral rules should have fired vs. which did. Goal: external enforcement proxy for mistake-fire rule and other self-monitoring rules. [M-33 action item]

9e. **TASK_TEMPLATE pre-synthesis PCR gate** — TASK_TEMPLATE Research task type, Adds to Section 5: add explicit pre-synthesis check requiring PCR completed for all finished angles (or exception statement with reason + known consequence). Pattern B 4th recurrence on this failure class (M-05, M-14, M-16, M-46). The current Section 7 requirement ("PCR before marking angle COMPLETE") covers sequential angles but does not block synthesis when parallel angles completed without PCR. Done-criteria: a fresh agent given only TASK_TEMPLATE can identify that synthesis cannot start until PCR is documented for all completed angles. [M-46 action item — partially executed: pre-synthesis exception statement added; full structural gate is this task]

9f. **TASK_TEMPLATE Research task Section 6: alternatives gate for first-pass outputs** — After Research task produces its first-pass synthesis or implementation output (before verification), add gate: generate ≥1 alternative with different underlying assumption; choose explicitly; log choice and rejected alternative. Mirrors M-46's fix for Compound task type (TASK_TEMPLATE Compound section already has this gate). M-47: Research task type not covered by that fix. Done-criteria: a fresh agent given only TASK_TEMPLATE can identify that an alternative must be generated after first-pass implementation before verification runs. [M-47 action item]

9g. **TASK_TEMPLATE Section 7: trigger-table rules for procedure-file-modifying Research tasks** — When a Research task modifies any procedure file (research-quality.md, research-synthesis.md, TASK_TEMPLATE, CLAUDE.md), Section 7 integration close must include: (a) REVISIT_QUEUE.md methodology timeline updated with the change + scope of impact; (b) grounding-map.md rows added/updated for any new procedure decisions. Currently these are in plan.md trigger table (recognition-based); must be in TASK_TEMPLATE Section 7 (structural). Done-criteria: a fresh agent completing a Research task that modified research-quality.md identifies REVISIT_QUEUE and grounding-map updates as required before marking Section 7 complete. [M-47 action item]

9j. **TASK_TEMPLATE Section 1.1 DCQC-01 N/A path: tighten eligibility criterion** — COMPLETE 2026-07-04. N/A path now has observable yes/no test: "Does this task add, change, or remove any behavioral gate, rule, or procedure? YES = N/A not eligible." Firing test PASS. [M-50 action item]

9i. **propagation-map.md: add Phase 6 mechanism files to output class list** — COMPLETE 2026-07-04. agent-control-mechanisms.md row added to propagation-map procedure files table; Phase 6 mechanism file outputs noted as META-ONLY. [CTRL-01 discovered work]

9h. **TASK_TEMPLATE: research-workflow dispatch section — tool-requirements check** — When a Research task specifies agentType for any workflow angle, add a gate before agentType selection: list all tools the agent task requires (reading, writing, spawning subagents) and verify the agentType provides them. Default rule: dispatch without agentType when agents need Write, Agent, or Workflow tools. Done-criteria: a fresh agent given only the TASK_TEMPLATE research-workflow dispatch section identifies that Write-needing agents must not use claude-code-guide or other read-only agentTypes, and that the default dispatch is agentType-free. [M-48 action item]

**COMPLETE — 2026-07-04 (firing tests PASS; plan-archive.md entry written)**
- Direction: Add agentType tool-requirements gate to TASK_TEMPLATE Research task workflow-dispatch guidance
- Previous task status: COMPLETE — 9e+9f+9g
- Task type: Narrow-execution
- Done-criteria (outcome): A fresh agent given only TASK_TEMPLATE correctly identifies (a) that assigning agentType to a write-needing angle is a structural error, and (b) that the default dispatch for research workflow agents is agentType-free. Verified by fresh-agent dispatch.
- DCQC-01: N/A would NOT apply here (adds a behavioral gate = N/A ineligible per M-50 fix). Dispatching DCQC-01 inline below.

DCQC-01 verdict: OUTCOME-BASED — done-criteria requires a fresh agent to identify behavioral violations (not presence of text); "correctly identifies that assigning agentType to a write-needing angle is a structural error" is a behavioral outcome (the agent evaluates a scenario), not artifact presence. 2026-07-04

### PIPELINE IMPROVEMENT BACKLOG

These come from two brainstorm sessions (2026-07-03). Both documents in research_archive/. Implement in priority order when the main research track has capacity.

**Finding-to-process translation improvements** (research_archive/finding-to-process-translation-2026-07-03.md) — 7 improvements to how PCR converts findings into procedure changes:
- PCR Step 2: cross-match at principle level (read Step 3.7 first), not finding level
- PCR Step 3.5 (new): generate 2-3 mechanism options, pick with explicit reason (wire alternatives-generation.md into PCR)
- PCR Step 4: evidence-strength routing — HIGH→structural gate, CONSENSUS→labelled guideline, SYNTHESIZED→provisional+flip trigger
- PCR Step 4: Pattern I gate — required question "recipe or principle derivation?" before writing any change
- PCR Step 2: dimension-centric cross-match before file-centric — prevents missing cross-cutting implications
- PCR Step 4: type-c routing for structural additions vs. text edits
- PCR Step 2: cross-finding pass at end — do any two HIGH findings in combination suggest a mechanism neither implies alone?

**Research-to-process meta improvements** (research_archive/research-to-process-improvements-2026-07-03.md) — 13 improvements to the broader pipeline (tracking, loop-closing, research direction):
- E1/CONVERT-6: PCR Step 5 → fresh subagent (same fix as CONVERT-1/2)
- A1+A2: rule-outcome register + flip triggers at PCR Step 4 time
- D1: mistakes.md Q5 → research angles routing
- B1: CONTESTED → provisional-implement path (wire provisional-decision.md into synthesis Step 5)
- C1: Step 3.7 derivations inventoried in goal-achieving-ideas.md at PCR Step 2
- C3: impact column on grounding-map; UNRESEARCHED HIGH rows drive research angle selection
- D2: research wave pre-stated done-criteria at angle launch
- B2: GAP → time-bounded close path in synthesis Step 5
- B3: anomaly detection on archive at claim-archival time
- C2: implementation fidelity check at PCR Step 6 time
- C4: verify pass calibration (opportunistic)
- D3: cross-cluster synthesis every 3rd cluster
- E2: validation-type tags on claims (behavioral-test / outcome-track / domain-expert / self-validating)

### DEFERRED — revisit at threshold

**Vector DB for claim deduplication:** Not worth the infrastructure overhead at current archive scale. Revisit when claim archive exceeds ~200-300 claims across waves, or when cross-session synthesis starts failing because semantically similar claims in different angles aren't recognized as related. Would NOT solve rule-triggering (that's a recognition problem, solved by plan-as-enforcement); would help with research recall quality and semantic deduplication.

**TOOLS-01 — Structural tool enforcement via Claude Code hooks:** Hooks fire at tool-call level, not agent-decision level — they cut the recognition step out of rule enforcement entirely. A pre-tool hook on Edit/Write could enforce plan.md entry existence before any file change; a post-tool hook could validate archive moves at task close. Higher-leverage than adding more rules because enforcement is structural, not recognition-based. Requires: (a) audit which failure modes are hook-enforceable (tool-call-observable conditions vs. agent-internal state); (b) design and implement hooks for the highest-recurrence violations (plan.md entry, archive move). Priority: HIGH — directly addresses root cause of Pattern B failures. Research: read Claude Code hook documentation before designing.

**TOOLS-02 — Structured claim store:** Claims currently in markdown + grep. A YAML schema + validation script on archival would: catch missing fields, flag near-duplicate claims (BM25 at current scale, no vector DB), make SAT-EVAL-01 evaluator mechanical. No external infrastructure. Priority: MEDIUM — current archive scale makes this nice-to-have; becomes HIGH when archive exceeds ~150 claims.

**TOOLS-03 — Conversation anomaly detection script:** Lightweight script reading tool-call logs for known failure signatures ("N consecutive responses with no plan.md write," "task open >X turns with no Section 6 close"). Catches slow drift mid-task that goal-checker and A1 both miss. Priority: LOW — plan-as-enforcement (KIT-PLAN-01) is the better solution; this is a fallback detection layer.

**KIT-HEALTH — Kit health monitor**
Direction: Build a workflow/script that analyzes a kit's usage log (goal checker firings by class, HARD BLOCK frequency, correction types over time) and flags structural patterns — specifically when the same failure class fires 3+ times, flagging the underlying kit rule as likely ineffective.
Blocking condition: Requires ≥10 turns of real-production kit usage to produce meaningful signal. Build after first real-production kit deployment.

**TOOLS-04 — Invariant check script:** Script that validates key invariants across the kit-maker file state on demand: no COMPLETE entries remaining in plan.md, all plan.md entries have done-criteria, all HIGH confidence claims in archive have ≥2 source types, archive moves match task close events. Runs without agent recognition — structural enforcement of conditions that currently rely on Pattern B triggers. Implementation: Python script, ~50-100 lines, reads relevant files and reports violations. Priority: HIGH — run after every task close as a complement to TOOLS-01; catches what hooks miss (file-state conditions that aren't tied to a single tool call). Build before wave 2.

**TOOLS-CAL — Automated calibration runner:** Script that re-runs all goal-checker calibration cases (currently 12: S1-S12) and all SAT-EVAL-01 calibration cases (currently 9: A1-A4, B1'/B2/B3, C1) against the current prompts and reports pass/fail. Currently all calibration re-runs are manual and happen only when someone notices potential drift. Automated runner catches prompt decay between formal maintenance intervals. Implementation: dispatches fresh subagents with each calibration case, compares output against expected verdict (HARD BLOCK / SOFT CHALLENGE / SATURATED / NOT_SATURATED), flags mismatches. Priority: HIGH — run before and after any change to goal-checker-prompt.md or sat-eval-01-prompt.md; also run on maintenance trigger schedule from goal-checker-maintenance.md.

**TOOLS-MCP — MCP server for claim archive:** Claim archival as a structured tool rather than markdown append. Tool accepts: claim text + evidence type + sources + group. Validates: schema completeness, evidence classification. Checks: BM25 similarity against full archive, returns "unique" or "possible duplicate of [claim-key]." Writes: to structured store if unique. Makes archival structural (agent calls tool, tool enforces) rather than ad-hoc (agent appends markdown). Supersedes TOOLS-02 when built — TOOLS-02 is the interim solution. Priority: MEDIUM — build after TOOLS-02 proves the structured format; becomes HIGH if TOOLS-02 proves insufficient.

**PIPE-01 — Research automation workflow**
Direction: Write a workflow script that takes an angle title + query set and auto-runs the full research-quality.md procedure — dispatches parallel searches, runs adversarial Q3, auto-classifies evidence types, writes checkpoint file. Goal: turn wave research from mostly-manual to mostly-review.
Done-criteria: Script produces a complete checkpoint file from angle title + query inputs that meets research-quality.md format requirements (saturation log, evidence classification, source triangulation) without manual intervention per query.

**PIPE-02 — Mechanism voting: multi-checker goal checker**
Direction: Replace single goal checker dispatch with 3 independent goal checkers running simultaneously (3 different attack angles per turn), requiring 2/3 agreement for a hard block; design dispatch and voting protocol in goal-checker-architecture.md.
Done-criteria: Revised architecture describes 3-checker parallel dispatch + voting; calibration set (goal-checker-calibration.md S-cases) shows ≤ same false-positive rate and ≥ same detection rate as current single-checker; at least one calibration case where voting changes the outcome vs. single-checker.

### RESEARCH QUEUED

10. **Research angle: A7 completion recognition** — empirical evidence on how non-completion recognition manifests; what signals reliably trigger termination. [Autonomy-coverage-audit explicit gap]

11. **Research angle: A8 scope enforcement** — empirically validated design patterns for scope enforcement beyond behavioral contracts. [Autonomy-coverage-audit gap]

12. **RLHF runtime implications** (P2) — sycophancy, over-compliance, internalized reward-hacking; relevant to adversarial review design (#3 in goal-achieving-plan); run before finalizing Phase F.

13. **GCRL for LLM agents** (P3) — likely low additional value for inference-only procedural system; confirm before closing this road.

14. **Multi-agent adversarial verification** — evidence base for #23 (adversarial verifier for goal-proximity assessment).

15. **Wave 2 scope item — close ❌ UNRESEARCHED grounding-map rows** — specifically H4 (targeted user questions), H5 (adversarial frequency), H6 (mid-build alternative forcing), decay warning mechanism, and 3-RED-round hard cap; all five are ❌ UNRESEARCHED in grounding-map.md; all are current kit decisions running on intuition with no research base. Blocked until wave 2 authorized. [Brainstorm item NEW-02 from 2026-07-05]

19. **Batch 5 research — EVPI open-ended / write discipline failure rate / reversibility taxonomy — 2026-07-05**

Direction: Research 3 P0 angles that close current open provisional decisions: (1) EVPI generalization to open-ended kit tasks, (2) write discipline failure rate for external intention registers, (3) reversibility annotation taxonomy for kit tool schemas.
Previous task status: COMPLETE — M-52 procedure fix (task 18) done (2026-07-05)
Task type: Research
Done-criteria: 3 batch 5 archive files written to kit-maker/research_archive/ with saturation logs; post-batch review (Steps 4a–4d) completed; EVPI open-ended case either CLOSED or explicitly NEEDS-MORE-RESEARCH with evidence gap named; write discipline failure rate finding applied or PROVISIONAL; reversibility taxonomy applied or PROVISIONAL; synthesis gate for batch 6 documented.

Status: COMPLETE (2026-07-05) — all done-criteria met. See plan-archive.md.

21. **SYNTH-03 — External register cross-batch conflict synthesis — 2026-07-05**

Direction: Resolve the cross-batch conflict between OdysseyBench (batch 4, bounded K≤6 predicate register → positive step-omission result) and arXiv:2603.29231 (batch 5, unbounded growing scratch pad → negative reliability result). Confirm or refute architectural-distinction resolution hypothesis.
Previous task status: COMPLETE — batch 5 research + PCR + ENTRYPOINT.md edits (task 19) done (2026-07-05)
Task type: Synthesis
Done-criteria: ENTRYPOINT.md external register row updated from CONTESTED to SYNTHESIZED (specific architectural recommendation) or explicitly remains CONTESTED with a named research gap that would resolve it; grounding-map.md row 15 updated; batch 6 gate state documented.

Status: COMPLETE (2026-07-05) — done-criteria met: ENTRYPOINT.md external register row updated from CONTESTED to SYNTHESIZED (PROVISIONAL) with explicit positive-outcome architectural condition (bounded K≤6 predicate list ≠ unbounded add_to_memory() scratchpad); grounding-map.md row 15 updated (trials 1→2, status CONTESTED→SYNTHESIZED PROVISIONAL); batch 6 gate cleared (SYNTH-03 blocking requirement removed). Synthesis document: kit-maker/synthesis/SYNTH-03-external-register-write-discipline-synthesis.md. See plan-archive.md.

22. **Research angle generation kit — Phase 2–7 build — QUEUED**

Direction: Build a kit for generating research angle batches given a domain brief and a list of open questions. This is the next test kit — chosen because output quality is checkable against ground truth (our manually generated angles 1–176), it's a component the kit-maker uses constantly, and it exercises ENTRYPOINT.md elements the research synthesis kit didn't.
Previous task status: COMPLETE — SYNTH-03 (task 21) done (2026-07-05)
Task type: Structural (Phase 2–7 kit build)
Done-criteria: Kit reaches Phase 7 trial per kit-trial-process.md; differential signal detected on ≥2 pre-registered dimensions; top 3 kit-maker learnings documented.
Dependency: kit-trial-process.md exists (written 2026-07-05). Phase 2 domain brief is the next action.

**Trial scale constraint (user-stated 2026-07-05): the Phase 7 trial must be large.** Interpretation: N≥3 independent Condition B runs, 8–10 dimensions across ≥3 categories (not just the minimum), all 3 input types exercised, at least 1 long session testing behavioral contract decay (P4), and 2 domains to test generalization. Phase 2 realistic-input-scale field must reflect this — design the hard case accordingly.

Status: IN PROGRESS — Phase 2 domain brief next

24. **Angle 178 archive tier correction — USER CORRECTION — 2026-07-05**

Direction: Fix angle 178 archive tier from HIGH (without counter-prior notation) to CONTESTED (pending counter-prior); fire C3 and log M-56; continue with Batch 5 Step 4 PCR results.
Previous task status: NOTHING ACTIVE (Batch 5 is complete per project-state.md; this is a retroactive archive correction from user correction received mid-task)
Task type: Narrow-execution
Done-criteria: M-56 logged with full 5-question investigation; angle 178 archive entry tier changed from HIGH to CONTESTED (pending counter-prior); same-batch HIGH tier scan complete for any other premature assignments; PCR results from Batch 5 Step 4 dispatched subagent processed.

Status: IN PROGRESS — M-56 entry being written; archive file for angle 178 not found on disk (see M-56)

---

23. **kit-trial-process.md comprehensive improvement — IN PROGRESS**

Direction: Produce a comprehensive improvement list and in-depth rewrite of kit-trial-process.md. The process document governs how kit quality is measured — it is one of the most important parts of the kit-maker process. Current version has 17+ identified gap categories across test input design, baseline condition spec, pre-trial validity, dimension selection, scoring, autonomy measurement, statistical rigor, subagent prompt design, ground truth, failure analysis, documentation, and integration with ENTRYPOINT.md Phase 7.
Previous task status: COMPLETE — SYNTH-03 (task 21) done (2026-07-05)
Task type: Procedure-design
Done-criteria: (1) All improvement categories A–Q documented with specific items; (2) in-depth plan with ≥40 granular steps; (3) Phase 1 inventory complete — ENTRYPOINT.md Phase 7 gap table, M-17 lessons extracted, phase7-trial/_issue-spec.md design decisions extracted, all contradictions with grounding-map checked; (4) Phase 2 design decisions documented — baseline spec, dimension mapping procedure, tiering system, partial credit, blind evaluation, autonomy event log format, ground truth for generative tasks, archive format all written into kit-trial-process.md; (5) kit-trial-process.md rewritten with Stage 0 pre-registration, Stage 5 post-trial integration, and all identified gaps addressed; (6) trial-audit-dimensions.md expanded with scoring rubrics and mapping examples; (7) validation: fresh subagent can complete Stage 1 design from document alone without prompting.

Status: COMPLETE (2026-07-05) — all done-criteria met. Two validation passes run (Stage 1 + Stage 0/5/Appendix A); 7 issues found across both passes; all fixed inline (Stage 5.5 cross-reference, Stage 5.1 routing, Stage 5.3 scope disambiguation, executor statement added, Appendix A expanded with expected Condition A scores, trial type field, bad-criterion contrast). Files modified: procedures/kit-trial-process.md (full rewrite), trial-audit-dimensions.md (rubrics + typical dimension sets), project-state.md, plan.md.

### AUDIT-02 — Mistake-finding architecture rethink — ACTIVE 2026-07-06

**Direction:** The A1 auditor only fires at formal task close (TASK_TEMPLATE Section 6). This leaves the majority of scenarios where behavioral rules can fail entirely unaudited: informal edits without task registration, mid-subtask corrections, conversational responses, between-task gaps, subtask closes inside parent tasks. INT-06 validated that A1 fires at formal task close — but that was never the failing scenario. The INT-06 testing confirmed the wrong thing and was treated as comprehensive validation. Fundamental rethink of the trigger model, coverage, and testing approach required.

**User principle:** Auditor should fire after every subtask, before any user-facing output — better too often than not enough. Presence > absence at all decision points.

**Previous task status:** M-57 COMPLETE (this direction emerges from M-57 Q1 investigation)
**Task type:** Research (Phase 1-2) + Design (Phase 2-3) + Implementation (Phase 4) + Verification (Phase 5)
**Done-criteria (outcome, not artifact):**
1. Coverage matrix exists: every scenario where a behavioral rule can fail has an entry with COVERED/UNCOVERED/PARTIAL status and named evidence for each
2. New trigger model designed: specific trigger for each UNCOVERED scenario; based on user's "before every user-facing output, after every subtask" principle; hard design problem of "what does the auditor read?" solved with a concrete answer
3. Tests designed: one scenario-specific test per UNCOVERED scenario from the matrix; each test is designed to FAIL under current architecture and PASS under new architecture (not a general confirmatory test)
4. Implementation applied: CLAUDE.md + relevant procedure files updated with new trigger model
5. Verification: all scenario-specific tests pass; INT-06 Phase 5 counter methodology updated to reflect the new architecture

---

#### Section 0 — Pre-check

**Pattern risks:**
- **Pattern F (validity gap in evaluation):** HIGH — this is EXACTLY what happened here. Test designed to confirm existing mechanism worked; didn't test the failure scenarios. Any test designed for this rethink must explicitly probe the scenarios where the prior test failed, not the scenarios where it passed.
- **Pattern C (unvalidated procedure applied):** HIGH — the new trigger model cannot be considered validated until tested against all scenarios in the coverage matrix, not just the easy formal-close scenario.
- **Pattern I (research as prescription):** MEDIUM — the trigger model should be derived from the user's principle ("before every user-facing output") + the coverage gap analysis, not from copying whatever INT-06 did at a higher frequency.

---

#### Section 1 — Readiness

**1.1 Done-criteria (outcome):** stated above — 5 sub-goals, all outcome-based. Task is not done until the scenario-specific tests pass.

**1.2 Why now:** The quality system's core mistake-catching mechanism has a fundamental coverage gap. Every other research task, trial, and procedure improvement is operating without reliable error-catching for the scenarios that actually fail. This is the highest-priority quality infrastructure work. Blocks meaningful use of INT-06 Phase 5 monitoring.

**1.3 What this is NOT:**
- Not a minor tweak to the existing A1 trigger
- Not just adding "also fire at subtask close" to CLAUDE.md (that's the same fix class that's failed 8+ times)
- Not satisfied by running the existing tests again
- Not a recount of Phase 5 sessions under the old definition

**1.4 Alternatives (preliminary — will be refined in Phase 2):**

| Alternative | Underlying assumption | Steelman | Reason to examine | Dimension where it wins |
|-------------|----------------------|----------|-------------------|------------------------|
| Fire before every response (match goal checker trigger) | Any user-facing response is a reporting event that could hide missed rules | Already have project-state update infrastructure; same cadence as Check 2 | Most comprehensive; highest cost; auditor needs to read recent work not just project-state | Coverage completeness |
| Fire after every file write | Any file change is a task-execution event that should be audited | Structural: file write is an observable event; no recognition required | Requires auditor to know which rules apply to file writes specifically; may over-fire | Structural enforcement |
| Fire at subtask boundary + formal close | Balances coverage with cost | Matches user's stated principle directly | Hard design problem: what counts as "subtask boundary"? Definition needed | User-principle fidelity |

**1.5 Hard design problem (must be solved in Phase 2):**
The goal checker reads only project-state.md — a pre-written summary. This is cheap because the worker writes what the checker reads. The A1 auditor currently reads the task summary (Section 6 narrative) + CLAUDE.md. At higher frequency, what does the auditor read? Options:
- Worker writes a per-response summary (expensive worker overhead but auditor can be specific)
- Auditor reads the CLAUDE.md + a fixed-format "what I just did" field that fires before every response
- Auditor reads CLAUDE.md + the last N lines of project-state.md "What happened this turn" field

This is the blocking design question. Phase 2 must answer it concretely.

**1.6 Strongest unsupported assumption:** That the failure is purely about trigger frequency — if we fire the auditor more often, we catch more failures. Alternative: the auditor prompt itself is wrong — it's too confirmatory ("list unfired rules") when it should be adversarial ("assume a rule was skipped and find evidence"). Frequency fix may produce the same false-pass results at higher cost.

---

#### Phase structure:

**Phase 1 — Scenario × rule coverage map (2 sub-goals)**

1a. Enumerate all scenarios where behavioral rules can fail — at minimum: formal task close, informal edit without registration, mid-subtask correction, conversational response, between-task gap, subtask close inside parent task, session boundary, workflow mid-run correction, Q&A with no registered task. Produce full list.

1b. For each scenario × rule that should fire: COVERED / UNCOVERED / PARTIAL. Evidence column required for COVERED claims. This is the deliverable. No inferring from rule text — actual auditor firing evidence required.

Done-criteria for Phase 1: Coverage matrix with ≥10 scenarios, all "COVERED" claims backed by observable evidence (not "the rule says it fires there").

**Phase 2 — Architecture redesign (2 sub-goals)**

2a. Solve the hard design problem: what does the auditor read when it fires at non-formal-close moments? Concrete answer required — not "it reads context." Must specify: what file, what format, what the worker writes before the auditor fires.

2b. Design the new trigger model — one trigger per UNCOVERED scenario from Phase 1. User's principle ("before every user-facing output, after every subtask") as primary constraint. Each trigger must be: (a) specifiable without recognition check, (b) structurally fireable (not dependent on "I remember to fire it"), (c) observable from transcript.

Done-criteria for Phase 2: Trigger model document with one concrete trigger per scenario. Each trigger answers: what fires it, what the auditor reads, what evidence shows it fired.

**Phase 3 — Test design**

For each UNCOVERED scenario from Phase 1: one test case that FAILS under current architecture and PASSES under new architecture. Tests must probe the scenario specifically — not general "does A1 fire?" Pass/fail criterion must be observable.

Done-criteria for Phase 3: ≥1 test per UNCOVERED scenario. Each test has: scenario description, expected FAIL under current arch, expected PASS under new arch, observable pass/fail criterion.

**Phase 4 — Implementation**

Apply the new trigger model to: CLAUDE.md (trigger definitions), blocking-protocol.md (new states if needed), goal-checker-architecture.md, TASK_TEMPLATE.md (if subtask close trigger added here).

Done-criteria for Phase 4: Files updated. Fresh-agent dispatch confirms new trigger rules are unambiguous from file text alone.

**Phase 5 — Verification**

Run Phase 3 tests against implemented architecture. Also: update INT-06 Phase 5 methodology — the current "0/3 sessions" counter was counting formal closes only. After Phase 4, what does Phase 5 monitoring measure?

Done-criteria for Phase 5: All 11 Phase 3 tests pass (one per Phase-1-UNCOVERED scenario). INT-06 Phase 5 counter either reset with new methodology or formally superseded by AUDIT-02 as the new reliability measure.

---

**Phase 1 COMPLETE** — 2026-07-06. audit-02-coverage-map.md written. 13 scenarios × 7 rules. A1 fires in 1/13 scenarios. Goal checker fires in 12/13. Key gap: Scenario 13 (specialized frameworks bypass TASK_TEMPLATE entirely). Done-criteria verified.

**Phase 2 COMPLETE** — 2026-07-06. audit-02-trigger-model.md written. Design decision: Option 3 (conversation-direct + file-state evidence checking — worker-mediated summary eliminated). Universal trigger: before every response. Worker passes (a) last user message verbatim, (b) draft response, (c) plan.md last 3 entries, (d) mistakes.md last session entry. Auditor classifies event type [C/D/A/T/S] and checks per-event rule-firing evidence. CLAUDE.md A1 rule updated from provisional to Phase 2 design. Coverage: 11/13 scenarios (up from 1/13). Done-criteria verified.

**Phase 3 COMPLETE** — 2026-07-06. audit-02-tests.md written. 11 tests, one per Phase-1-UNCOVERED scenario. Each test specifies: old-arch result (A1 doesn't fire), new-arch event classification, evidence check, observable pass/fail criterion. Done-criteria verified.

**Phase 4 COMPLETE** — 2026-07-06. Files updated: CLAUDE.md (A1 rule: provisional → Phase 2 design), goal-checker-architecture.md (three-agent table + A1/goal-checker relationship table), TASK_TEMPLATE.md (Section 6.0 sequencing note), blocking-protocol.md (State 1: resolvable-block inline-fix path added — M-60 action item).

**Phase 5 COMPLETE** — 2026-07-06. Verification subagent ran all 11 tests: 11/11 PASS. Old architecture fails all (A1 doesn't fire). New architecture detects event type from conversation content, checks per-event evidence, reports compliance gaps correctly across all scenarios. Three flags found and fixed: TC-06 design gap (compacted summary added as item (a) for session-resume), TC-05 criterion precision (expected verdict stated explicitly), TC-09 implicit reasoning (active task suspension made explicit in [D] check).

**INT-06 Phase 5 superseded:** The prior "0/3 sessions without C3 recurrence" counter measured only formal-close scenarios. AUDIT-02's new architecture covers 11/13 scenarios — the monitoring methodology is now the AUDIT-02 test suite (11 scenario-specific tests), not a session counter. INT-06 Phase 5 is formally superseded by AUDIT-02. INT-06 closes with Phase 5 status: SUPERSEDED-BY-AUDIT-02.

**All 5 AUDIT-02 done-criteria met:**
1. ✅ Coverage matrix: audit-02-coverage-map.md — 13 scenarios × 7 rules
2. ✅ Trigger model: audit-02-trigger-model.md — hard design problem solved (Option 3); 11/13 COVERED
3. ✅ Tests: audit-02-tests.md — 11 scenario-specific tests
4. ✅ Implementation: CLAUDE.md + goal-checker-architecture.md + TASK_TEMPLATE.md + blocking-protocol.md
5. ✅ Verification: 11/11 PASS

**AUDIT-02 COMPLETE — 2026-07-06**

---

20.5 **M-57 mistake process — C3 non-fire: queries angle false coverage assessment (2026-07-06) — COMPLETE**

Direction: Run the mistake process for the user correction received in the prior session: I assessed GH-01 + angle 162 as "deep coverage" of the queries angle; user corrected that the cognitive layer (vocabulary acquisition, query composition reasoning, failure diagnosis from result quality) is entirely absent. C3 fires unconditionally. Additionally I applied the fix (adding angles 178-180) without running the mistake process first; user called this out explicitly: "you did not run the mistake process."
Previous task status: NOTHING ACTIVE (resumed from session compaction boundary)
Task type: Narrow-execution (mistake-fire rule process)
Done-criteria: mistakes.md entry M-57 written with full 5-question investigation and broad retrospective; all action items either EXECUTED or QUEUED with plan.md entries; this plan.md entry exists as evidence the unconditional entry rule fired.

Status: COMPLETE — M-57 written; action items 20.6–20.9 queued below

---

20.6 **Check 1(c) sequencing gate — COMPLETE 2026-07-06**

Direction: Add to CLAUDE.md — when C3 trigger detected via Check 1(c) at session start, write the plan.md entry for the C3 task BEFORE any file Read tool call. Evidence standard: entry must predate first Read call.
Previous task status: COMPLETE — 20.5
Task type: Narrow-execution (CLAUDE.md update)
Done-criteria: CLAUDE.md Check 1(c) section includes sequencing requirement; fresh-agent dispatch confirms rule is unambiguous (agent states the required order without prompting).

Status: QUEUED

---

20.7 **Coverage depth-check procedure — COMPLETE 2026-07-06**

Direction: Add to research-quality.md or TASK_TEMPLATE.md — when evaluating whether a domain was "researched in depth," required interrogation: (a) what depth does the user's importance signal imply? (b) which vocabulary tradition does existing research cover? (c) does that tradition and depth match the user's actual question? Category presence ≠ depth adequacy.
Previous task status: COMPLETE — 20.5
Task type: Narrow-execution (procedure update)
Done-criteria: Procedure file updated; fresh-agent given the updated guidance and a coverage question correctly identifies a category-match ≠ depth-match gap when one exists.

Status: QUEUED

---

20.8 **INT-10 follow-on actions — COMPLETE 2026-07-06**

Direction: (a) weakness_register.md Weakness 7 → EMPIRICALLY_TESTED (FM4 triggered, cross-tradition expansion claim not supported on LLM domains per INT-10); (b) kit's angle-gen-kit/CLAUDE.md primary capability statement revised to remove/scope cross-tradition expansion claim; (c) add angle for cross-tradition conditioning evidence in non-LLM domains to RESEARCH_ANGLES.md (pre-INT-11 requirement).
Previous task status: COMPLETE — 20.5
Task type: Narrow-execution (3 file updates)
Done-criteria: All 3 updates applied with evidence citations; no file still claims cross-tradition expansion as a validated primary mechanism.

Status: QUEUED

---

20.9 **INT-11 pre-trial fix status verification — COMPLETE 2026-07-06**

Direction: Verify whether Gap 2 (coverage map soft gate → structurally enforced intake brief field) and Gap 5 (cross-disciplinary slot selection heuristic in angle-generation.md Step 0) were completed. If still blocking, add to active queue before INT-11 can start.
Previous task status: COMPLETE — 20.5
Task type: Narrow-execution (verification + queuing if needed)
Done-criteria: Both gaps confirmed COMPLETE or flagged as blocking with plan.md entries created.
Status: COMPLETE — both gaps were unaddressed; fixed inline:
- Gap 2: cross-disciplinary tradition pre-commit field added to intake.md Step 4 template; Step 6 gate extended from 3 to 4 conditions (new: "cross-disciplinary tradition pre-commit field populated")
- Gap 5: cross-disciplinary selection heuristics added to angle-generation.md Step 0 (3 diagnostic questions: similar structures / same real-world problem / adjacent problem)
Files modified: angle-gen-kit/intake.md, angle-gen-kit/angle-generation.md

---

20.10 **INT-11 — angle-gen-kit trial on non-LLM domain — ACTIVE 2026-07-06**

Direction: Run Phase 7 trial of angle-gen-kit on a non-LLM/AI domain to test whether FM4 (near-zero differential on LLM-heavy domains) is domain-specific. Topic: periodization and training load management in endurance athletes (sports science). Resource constraint: Stage 0 only this session; Stage 1+ in a separate session when resources are free.
Previous task status: COMPLETE — 20.9
Task type: Research / Trial (Phase 7 kit trial)
Done-criteria (outcome): Stage 0 pre-registration document written and saved to kit-maker/trials/int-11/; all 8 scale gates assessed (MET/FAIL); learning questions locked; failure modes pre-registered with observability mechanisms. Stage 1+ deferred to separate session.

Status: COMPLETE 2026-07-08. Verdict: INVALID. FM4: GENERAL. Q1 B-A = 0.00 (22/22 inputs). BIN1 22/22, BIN2 22/22, A8 = 3. Key findings: (1) FM4 is domain-general — frontier model Q1 ceiling applies to sports science as to LLM/AI; (2) Kit structural compliance validated — Q7 avg 3.00, Q5 2.82, Q3 2.73; (3) Gap 2/5 fixes confirmed working. Kit CLAUDE.md + weakness_register.md Weakness 7 updated. Phase 4 confidence map G8 demotion (HIGH → HYPOTHETICAL) queued. INT-12 sparse-domain trial queued.

---

20. **MECH-TEST adversarial stress tests — T06/T10/T11/T12 (favorable-case validation bias) — QUEUED**

Direction: Run adversarial stress tests on mechanism tests T06, T10, T11, T12 which currently have favorable-case-only coverage in MECH-TEST-01. Pattern identified by goal checker Angle 3: favorable-case validation bias recurs across batch 4 (all HIGH groups needed scope caveats), M-52 (extrapolation via favorable-path through PCR), REVISIT-S-03 (counter-prior initially ran on 1/5 groups). This is the mechanism-test analogue.
Previous task status: IN PROGRESS — task 19 (batch 5) running
Task type: Narrow-execution
Done-criteria: T06/T10/T11/T12 each have ≥1 adversarial test scenario (unexpected/hostile input) that either PASSES or yields a documented failure requiring a fix; favorable-case-only status removed for each mechanism.

Status: QUEUED — after batch 5 PCR completes

---

## Trigger rules

These fire automatically — not when convenient, not when remembered:

| Event | Required next step |
|-------|--------------------|
| Any research angle completes | Run post-cluster-review.md before applying findings or moving to next angle |
| Synthesis task produces output | Run post-cluster-review.md on synthesis output before marking synthesis task complete (M-55) |
| Audit item investigated | Propose fix to user; wait for acknowledgment before marking resolved |
| Research batch launched | Must have pre-defined review scope stated before launch (constrains batch size) |
| Significant change to any kit procedure | Update grounding-map.md entry for that decision |
| Any change to research-quality.md or research-synthesis.md | Before closing the PCR: enumerate affected prior work, assess impact, add MEDIUM+ gaps to REVISIT_QUEUE.md per the trigger rule in that file |
| Any kit-maker self-improvement (CLAUDE.md, TASK_TEMPLATE.md, ENTRYPOINT.md, any procedure file) | Check propagation-map.md: does this change require an equivalent in generated kits? If yes: update Hard Rule 13 or Phase 6 checklist before closing the task. Update propagation-map.md "Last full audit" date if a new practice was added. |
| Session start | Check this file: what is the current active task? Does the last completed event require a trigger to fire? Check mistakes.md Pattern Summary for risk to current task. |
| New task added to plan.md | Template sections 0–4 must be filled before any execution starts on that task. A task with empty template sections has not been started. |
| Task marked complete | Sections 6 and 7 of the template must be filled and checked. Artifact present ≠ task done. Move entry to plan-archive.md in the same response. Evidence: the plan-archive.md entry IS the evidence this trigger fired — description without an archive entry means the trigger did not fire. |
| New rule added to CLAUDE.md, any procedure file, or memory | Check: should this rule also be enforced in TASK_TEMPLATE.md? If yes: add it or queue a template-improvement sub-task. |
| Item marked CLOSED, COMPLETE, or SUPERSEDED in plan.md | Move entry to plan-archive.md before closing the response. Do not leave resolved items in plan.md. Evidence: the plan-archive.md entry IS the evidence this trigger fired — description without an archive entry means the trigger did not fire. |
| Item marked COMPLETE in REVISIT_QUEUE.md | Move entry to revisit-archive.md before closing the response. |

**Why trigger rules here and not in CLAUDE.md:** CLAUDE.md stores always-on behavioral rules. Triggers depend on what just happened — they're state-dependent, not always-on. Plan.md is checked when context is needed; CLAUDE.md is always active.

---

## Check-in gates (user reviews before proceeding)

After completing any of these, stop and surface findings to the user before the next step:
- Each audit item that has been genuinely investigated (not just labeled)
- Post-cluster-review results
- Before launching any research batch (show scope + angles + planned review)
- After applying any research findings to kit files
- After completing a major task chunk (e.g., completing kit content build before running auditors)

---

## Research batch constraint

Before launching any research: state explicitly what the review will cover and what it will produce. This caps scope — a review that needs to process 40 new claims is unworkable; a review of 12-16 claims from 3-4 angles is manageable. If the review scope would be too large to do carefully, split the batch.
