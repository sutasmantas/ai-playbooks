# Goal-Achieving Mechanism Ideas

Catalog of all proposed solutions for making the kit-maker goal-directed rather than task-executor. Status reflects user approval + RL research findings (2026-07-03). Final consolidated plan is the next step.

**Goal being served:** Kit-maker produces kits that autonomously execute complex tasks at high quality with minimal human interference.

---

## Status key

- ✅ USER APPROVED — implement in final plan
- ⚠️ RESERVED — user noted concerns; needs refinement or conditional use
- ❌ SUPERSEDED — replaced by a better mechanism from RL research
- ❌ NEEDS DETAIL — user flagged as underspecified (pre-RL status)
- ✅ RL-BACKED — new from RL research; directly implementable with proven evidence

---

## Original 8 ideas

**1. Goal-derived backlog generation** ✅
After every N tasks complete, set the task list aside and rebuild it from scratch starting only from the goal model: "what evidence do I NOT have that the goal is being met?" Anything in the rebuilt list not in the existing backlog is work the goal requires that got missed.
*Mechanism: explicit periodic goal-first task generation. Structural if N is fixed.*

**2. Proactive testing as default after any process design** ✅
When a rule, procedure, or template change is written — immediately spawn a subagent to run a scenario and check if it fires correctly. Rule without test = Pattern C (unvalidated procedure). Applies to every CLAUDE.md/TASK_TEMPLATE change made in this project.
*Mechanism: test fires as part of closing any process-design task. Structural if bundled into task template gate.*

**3. Adversarial review agent on a schedule** ✅
Every session or every major artifact: spawn an agent whose sole job is to find what's wrong, missing, or inadequate — not to summarize. Reads goal model + artifacts and asks "what does this fail to achieve?"
*Mechanism: scheduled or gate-based. Output feeds directly into task list.*

**4. Hypothesis-driven work** ⚠️
Every process change articulates a testable hypothesis before implementation. "This rule will prevent X in condition Y." Then tested before moving on.
*User concern: won't work everywhere; too rigid as a universal rule. Keep as a guideline for process-design tasks specifically, not all tasks.*

**5. External goal check on each session open** ✅
Spawn a subagent at session start with only: goal model statement + summary of work done. Ask: "is this sufficient to achieve the goal? what's missing?" No current-session context — purely outside view.
*Mechanism: session-start gate. Structural if required before any other work.*
*Relationship to RL: this is the human-in-loop counterpart to #16 (OMNI filter). #16 handles autonomous sessions; #5 handles sessions where the user is present. Both stay.*

**6. Outcome tracking per task** ❌ SUPERSEDED by #18
Every task close requires: "this task advanced the goal by [observable evidence]."
*SUPERSEDED: Goodhart's Law (Skalse 2022) establishes that self-assessed progress is a proxy reward that is mathematically unhackable for any non-trivial proxy — the agent produces plausible-sounding justification regardless of reality. RL research confirms: MISE (2025) shows 81% of low-effort actions rated positively by self-evaluation while actual progress was far lower. The mechanism as originally conceived (self-report) cannot be made non-gameable. Replaced by #18: external-state-anchored verification + calibration penalty.*

**7. Proactive divergence detection** ✅
Regularly ask: "if I only looked at the last 3-5 things I did, what pattern do they form?" If the pattern is "responding to corrections" or "fixing the same class repeatedly," that signals the underlying process isn't working and a different mode is needed.
*Mechanism: per-session review question. Semi-structural if embedded in session-close.*

**8. Subagent utilization policy** ✅
Define explicitly when a subagent MUST be spawned, not when convenient. Mandatory triggers: any process rule or template change (test it), any claim about kit capability (test it), any session start (external goal check), any major task complete (adversarial review).
*Mechanism: trigger table in CLAUDE.md or plan.md. Structural if listed as mandatory triggers.*

---

## New ideas from RL/gradient framing

**9. Loss register — external, not self-assessed** ✅
Every user correction/redirect/intervention logged as a loss signal. At session start, read the loss register, identify the dominant class, derive tasks from it. Task list comes FROM loss signals, not maintained independently.
*Mechanism: loss-register file; session-start read required. Structural if session start is gated on it.*
*Relationship to RL: this IS the Reflexion episodic memory (#19) applied to user-correction signals specifically. #9 and #19 combine into one mechanism — lessons.md covers both.*

**10. Pre-task goal-maximization step** ✅
Before executing any task: "of all possible versions of this task, which design would most advance the goal? What's the biggest improvement I could make?" Not "does this connect to the goal" (binary) but "how do I execute this to maximally advance the goal" (generative).
*Mechanism: mandatory field in TASK_TEMPLATE Section 1.1. Structural if template-enforced.*
*Relationship to RL: this is the candidate generation step of #21 (Best-of-N). #10 and #21 combine — Best-of-N is the implementation.*

**11. Full action-space search at session open** ✅
Before starting work, enumerate all possible action categories: research, design, test existing artifacts, adversarial review, self-improve process, build artifact, measure goal progress. Ask which category would most advance the goal now. Forces consideration of the full space, not just {obvious next step, existing backlog}.
*Mechanism: session-start checklist. Structural if required before any execution.*
*Relationship to RL: #15 (UCB bandit) IS the implementation of this. The bandit makes category selection computable — not aspirational.*

**12. External loss measurement — periodic structured test** ✅ RESOLVED
On a schedule, give the kit a novel task and measure: how many user interventions required, how close output is to skilled-human quality. Measurement is external — agent cannot self-assess.
*Resolved by RL research: external measurement IS the calibration log in #18. Specifically: tracking (predicted_outcome, actual_outcome) pairs over 20 sessions, with divergence rate > 0.3 triggering forced retrospective. Phase 7 trial also serves this function at larger scale. The "external loss measurement" mechanism is #18's calibration log + periodic Phase 5.5 trial trigger.*

**13. All-problems-that-could-prevent-goal scan** ✅
Before executing a task: "what are all the ways this task, even done correctly, could fail to advance the goal or actively set it back?" Then either modify the task to address those, or explicitly accept the risk.
*Mechanism: mandatory pre-task question. Could be bundled with TASK_TEMPLATE Section 1.7.*
*Relationship to RL: #21 (Best-of-N) includes constraint satisfaction check which captures this structurally. #10 and #13 combine into Best-of-N candidate evaluation.*

**14. Session-level gradient: what moved, what didn't** ✅
At session close: which dimensions from the goal model moved closer, which didn't move, which moved backward? Not task-by-task but across the whole session. Flat dimensions after work signal wrong approach — more of the same won't help.
*Mechanism: session-close file entry. Feeds into next session's action-space search (#11).*
*Relationship to RL: this is the session-close step of #19 (Reflexion lesson generation). The lesson format captures exactly this. #14 is subsumed by #19.*

---

## RL-backed mechanisms (from wf_a619de87-394, 2026-07-03)

**15. UCB Bandit over Action Categories** ✅ RL-BACKED
Implements exploration/exploitation balance across {research, test, review, build} action categories using UCB1 algorithm (proven O(ln T) regret bound). Prevents exploitation lock-in on familiar task types. Bandit state in `state/bandit.json`; UCB scores computed at every task selection point; category with N < 2 is mandatory before UCB takes over; c decays from 1.5 as tasks accumulate.
*Evidence: UCB1 (Auer et al. 2002) + GPI (Sutton/Barto), both proven results. Procedural implementation requires no ML.*
*Implements: #11 (full action-space search made computable). Supersedes the aspirational "consider all categories" with a mathematical requirement.*

**16. OMNI Dual-Filter Autonomous Agenda** ✅ RL-BACKED
When no user task is pending: Filter 1 (learnability) removes items with missing authorization/blocked dependencies/no context available; Filter 2 (interestingness) scores remaining candidates by goal-model alignment + downstream unblocking + staleness. Highest scorer written to `state/current_autonomous_task.md` before execution. Prevents autotelic failure mode (defaulting to training-familiar tasks).
*Evidence: OMNI (Zhang et al., NeurIPS 2023) — 49-550% more tasks completed vs LP-only filter. Closest existing mechanism to autonomous agenda-setting without human task list.*
*Implements: #5 (autonomous session) + #11 (action-space search) combined. #16 handles no-user sessions; #5 (external subagent check) handles user-present sessions.*

**17. Knowledge-Gap Oracle as Curiosity Signal** ✅ RL-BACKED
Before reading files, agent generates 5-8 project-state questions from the goal model and attempts to answer them from memory. Gap between memory-answer and file-answer = prediction error = curiosity signal. High-gap items become candidates for OMNI filter. Prevents agent from working on what it already knows.
*Evidence: ICM (Pathak et al., ICML 2017) — structural analogy; direct application to knowledge-graph state is invention requiring empirical validation. Mark speculative.*
*Feeds into: #16 (OMNI filter) as candidate pool ranked by prediction error.*

**18. External-State-Anchored Reward + Calibration Penalty** ✅ RL-BACKED
Replaces any self-reported progress signal with three tiers of verifiable external state change: (1) file mtime changed, (2) open items removed from design_log.md, (3) tool response actually received. `calibration_log.json` tracks predicted vs. actual outcomes over 20 sessions. Rolling divergence > 0.3 triggers forced retrospective before next autonomous work. Makes fabrication costly in productivity terms.
*Evidence: Goodhart formalization (Skalse 2022) + MISE (2025: calibration reward reduced overuse 24.28% → 14.34%) + Proof-of-Use (2025). Directly answers whether #6 can be made non-gameable: NO for self-report; YES for external verification.*
*Supersedes: #6 (outcome tracking). Implements: #12 (external loss measurement) via calibration log.*

**19. Reflexion Episodic Lesson Memory** ✅ RL-BACKED
After every session with a determinable outcome, write a structured lesson to `memory/lessons.md` in the form: "When [state-class], action [A] produced [outcome] because [mechanism]. Behavioral adjustment: [specific change for next time]." At session start, last 7 lessons prepended to working context. Pending-outcome sessions logged and revisited. Fast update path: one session latency.
*Evidence: Reflexion (Shinn et al., NeurIPS 2023) — +11-22% gains across AlfWorld/HotPotQA/HumanEval, independently replicated. Strongest evidence in the LLM+RL space.*
*Subsumed: #9 (loss register) and #14 (session gradient) are both captured by the lesson format. lessons.md IS the loss register + session gradient, structured.*

**20. ExpeL Cross-Session Rule Extraction** ✅ RL-BACKED
Every 20 sessions (tracked in bandit.json), dedicated meta-task fires: scan lessons.md for last 20 entries, cluster by state-class, extract patterns appearing in 3+ lessons. Positive patterns → candidate CLAUDE.md rule additions. Negative patterns → candidate prohibitions. Candidates written to `state/pending_rule_changes.md` for human review. Agent proposes; human promotes. Slow update path: 20-session latency.
*Evidence: ExpeL (Zhao et al., AAAI 2024) — cross-episode rule extraction; outperforms Reflexion on ALFWorld and WebShop. Combined with #19: fast+slow update paths.*
*Enables: durable behavioral change across all future sessions from accumulated lesson patterns.*

**21. Best-of-N with Verifiable Scorer (GPI Policy Improvement)** ✅ RL-BACKED
At high-stakes decision points (kit component strategy, hypothesis implementation order, scope decisions under ambiguity): generate N=3 candidate approaches; score each on (i) goal-model alignment 0-2, (ii) constraint satisfaction 0-2, (iii) downstream unblocking count 0-2; select argmax (total 0-6); write candidates + scores to `state/decision_log.md` before proceeding.
*Evidence: GPI policy improvement (Sutton/Barto) — provably correct for finite enumerable action space; gradient not required. Best-of-N with PRM (arxiv 2502.10325).*
*Implements: #10 (pre-task goal-maximization) + #13 (problems scan) combined as candidate generation + scoring steps.*

**22. Hindsight Decision Log with Retroactive Credit** ✅ RL-BACKED
Phase 1: at every decision in decision_log.md and task selection, also log current belief + alternatives + expected outcome (frozen context snapshot). Phase 2: when outcome observable N sessions later, apply hindsight question — which past decisions would have been amplified or suppressed knowing this outcome? CREDIT:HIGH / CREDIT:LOW tags written; patterns flow to lessons.md with elevated weight for hindsight-verified importance.
*Evidence: HCAPO (2025) — 91.4% vs 77.6% ALFWorld, trajectory length 7.8→5.8. Adaptation replaces probability model with qualitative judgment; loses formal calibration but preserves directional insight.*
*Addresses: long-delay credit assignment (outcomes visible sessions later). The only mechanism targeting this gap.*

---

## Pending questions — RESOLVED (by RL research 2026-07-03)

**Q: What is the RL equivalent of "reward signal" for an LLM agent operating procedurally?**
A: External state changes only (file mtime, open-item count in design_log.md, tool response receipts). Self-reported progress is mathematically unhackable for any non-trivial proxy (Goodhart/Skalse 2022). See #18.

**Q: How does policy update work without gradient descent?**
A: The prompt IS the policy. Policy update = prompt change. Two update paths: Reflexion (#19) changes the prompt via prepended lessons (fast, one session latency); ExpeL (#20) changes the prompt via promoted rules in CLAUDE.md (slow, 20-session latency).

**Q: Can exploration/exploitation be implemented in task selection?**
A: Yes. UCB1 algorithm over enumerable action categories (#15) gives provable O(ln T) regret bound. GPI convergence guarantee applies to finite enumerable action spaces.

**Q: What has been demonstrated to work for goal-directed LLM agent behavior in practice?**
A: Reflexion (+11-22% across 3 benchmarks, replicated), ExpeL (cross-episode rule extraction, outperforms Reflexion), LATS (MCTS at inference time), Voyager (skill library accumulation). Strongest evidence for inference-only procedural systems: Reflexion + ExpeL.

**Q: Does RL research provide a better implementation of #12 (external loss measurement)?**
A: Yes. #18 calibration log (predicted vs. actual over 20 sessions, divergence threshold) IS external loss measurement. It is automated, continuous, and non-gameable. Phase 5.5 trial provides the larger-scale periodic external measurement.

**Q: Does RL research suggest #6 (outcome tracking) can be made non-gameable?**
A: Definitive NO for self-reported form. Goodhart's Law establishes mathematical inevitability of proxy drift for any non-trivial proxy. Two reward functions are unhackable if and only if one is constant — meaning any non-trivial self-assessed signal will eventually be gamed. #6 is superseded by #18 (external verification). The answer to "can we make self-assessment non-gameable?" is no; the answer to "can we make outcome verification non-gameable?" is mostly yes (via external state changes).

---

## Build priority (from RL synthesis)

1. **#18 (external state verification) — first.** Prerequisite for everything else. Without verified external signals, Q-updates and lesson generation are all downstream of a gameable input.
2. **#19 (Reflexion lessons) — second.** Strongest evidence, lowest implementation cost. Delivers adjacent-session error correction before slower mechanisms are in place.
3. **#15 (UCB bandit) + #16 (OMNI filter) — third.** Require calibration log working first. Together they implement autonomous agenda-setting.
4. **#22 (hindsight log) — prospective phase can start now.** Retroactive phase activates when first outcomes become observable after delay.
5. **#21 (Best-of-N) — medium priority.** Applicable immediately at decision points; lower complexity than agenda mechanisms.
6. **#17 (knowledge-gap oracle) — last.** Most speculative component; validate empirically against #16-only baseline before relying on it.

---

## Consolidated conflicts and overlaps

- **#5 (external goal check) + #11 (action-space search) + #16 (OMNI filter)** → three session-start mechanisms. Consolidate: #16 handles autonomous sessions (no user task); #5 handles user-present sessions (subagent check). #11 is superseded by #15 (UCB bandit makes it computable, not aspirational).
- **#9 (loss register) + #14 (session gradient) + #19 (Reflexion)** → same mechanism at different abstraction levels. lessons.md IS the loss register + session gradient, structured. Implement as one file.
- **#10 (pre-task maximization) + #13 (problems scan) + #21 (Best-of-N)** → #21 is the implementation of #10 and #13 combined. Candidate generation = #10; constraint scan = #13; scoring + selection = #21.
- **#6 (outcome tracking)** → superseded by #18. Remove from implementation plan.
- **#12 (external loss measurement)** → resolved by #18 calibration log + trial trigger. No separate mechanism needed.
- **#2 (proactive testing) + #8 (subagent policy)** → #2 is a specific case of #8. #8 subsumes #2; trigger table should include it.
- **#20 (ExpeL rule extraction)** → builds on #19 (Reflexion). Implement #19 first, #20 second.

**23. Adversarial Verifier for Goal-Proximity Assessment** ✅ (user-generated, 2026-07-03)
After any task completion: spawn a separate verifier agent. Verifier receives: the goal model statement, the task just completed, the before/after state of relevant files, the output produced. Verifier does NOT receive the worker agent's reasoning or self-assessment. Verifier instruction: "Your job is to argue that this task did NOT meaningfully advance the goal of [goal model statement]. Find all the ways this work fails to move us closer. Be adversarial. Default to skepticism." If the adversarial verifier FAILS to find convincing reasons the task didn't advance the goal → work is credited as advancing it. If the verifier SUCCEEDS → worker agent must address those reasons before moving on.

*This is the more direct answer to the goal-proximity measurement problem than file timestamps or open-item counts (M-28). Those prove activity; this asks "did the activity matter?" The adversarial framing counteracts sycophancy — the verifier has no investment in finding progress and is structurally biased toward finding problems.*

*Evidence status: the adversarial framing component (Constitutional AI, multi-agent debate) has research support; the specific combination of separate agent + adversarial instruction + goal-model grounding has not been tested in this exact form. Road opened by M-29 — NOT closed by A5 self-correction research (which tested bare intrinsic self-correction, not separate adversarial agent). Research angle queued: "multi-agent adversarial verification for task quality assessment."*

*Upgrades: multiple adversarial verifiers (Best-of-N adversarial) requiring consensus to pass are harder to game than a single verifier. Worth researching calibration — does one adversarial verifier add meaningful signal or do we need ≥2?*

---

**24. Quality standard pre-specification** ✅ (goal-model-first derivation, 2026-07-03)
At kit creation: write "high quality" as a checkable standard for this domain before any task runs. Not "produce good output" — specific observable criteria that an adversarial verifier (#23) can check against. Without this, "did this advance the goal?" is unanswerable because "high quality" has no referent. The adversarial verifier (#23) needs this standard as its grounding.
*Derived from: autonomous execution requires knowing what "done correctly" looks like, not just "done." This is a kit-creation-time artifact, not a runtime mechanism.*

**25. Pre-task capability check** ✅ (goal-model-first derivation, 2026-07-03)
Before any task execution: "do I have the context, tools, and authority to complete this task without stopping mid-execution?" If gaps exist: surface them at intake (A1), not mid-task. The goal is zero mid-task halts; detecting blockers prospectively is how you get there. Different from A1 (intake efficiency, which is about minimizing questions) — this is about identifying execution blockers before they become interruptions.
*Derived from: "minimal human interference" requires that unexpected mid-task gaps don't force user contact. Pre-detection turns stoppable failures into plannable ones.*

**26. Fallback rule registry** ✅ (goal-model-first derivation, 2026-07-03)
For the N most common unexpected situations in this domain: pre-specified fallback rules written at kit creation. "If [situation X], do [Y] instead of asking." Reduces the surface area where human input becomes unavoidable. The agent has a third option beyond "push through" and "ask the user."
*Derived from: truly autonomous execution means the agent has a response to unexpected situations that doesn't require human contact. Pre-specification at kit creation eliminates the real-time "should I ask?" decision.*

---

## Queued research angles (not blocking consolidation)

- **GCRL (Goal-Conditioned RL) for LLM agents** — P3 priority. Primarily training-time paradigm; likely low additional value for procedural kit-maker since inference-time goal-conditioning = reading goal statement, which is already implemented. Confirm before closing.
- **RLHF runtime implications** — P2 priority. Sycophancy, over-compliance, internalized reward-hacking patterns. Relevant to #3 (adversarial review design) and understanding why self-assessed progress is biased beyond Goodhart. Run before finalizing adversarial review mechanism design.
