# RL Mechanisms Research — Kit-Maker Goal-Directing

**Date:** 2026-07-03
**Workflow:** wf_a619de87-394 (6 parallel angles + synthesis)
**Script:** ...sessions/.../workflows/scripts/rl-goal-directing-research-wf_a619de87-394.js
**Purpose:** Identify RL principles and practices adaptable as procedural mechanisms for a goal-directed LLM agent kit-maker (no training, inference-only, procedural not gradient-based)

---

## Evidence quality overall

**MEDIUM** — Published and replicated results exist (Reflexion NeurIPS 2023, ExpeL AAAI 2024, LATS 2023, OMNI NeurIPS 2023). The specific runtime-RL framing is undertheorized. The LLM+RL space is real but most literature assumes training-time updates. Procedural adaptation required for inference-only systems.

---

## 7 Mechanisms with procedural implementations

### M1 — UCB Bandit over Action Categories (GPI Loop)
**RL source:** UCB1 (Auer et al. 2002, proven O(ln T) regret) + Generalized Policy Iteration (proven finite convergence). Gradient not required for finite enumerable action space.
**Evidence:** RESEARCH-BACKED
**Problem addressed:** Task-executor mode (agent only responds to user prompts); exploitation lock-in on familiar task types; no balanced coverage across {research, test, review, build}.

**Implementation:**
- File: `kit-maker/state/bandit.json` — tracks {N_research, N_test, N_review, N_build, Q_research, Q_test, Q_review, Q_build, t_total, c_current}
- Triggers: at every task selection point (session start with no user task, or after completing a task looking for what to do next)
- Formula: UCB_score(a) = Q(a) + c * sqrt(ln(t_total) / N(a))
- c starts at 1.5, decays as c(t) = 1.5 / (1 + t_total/20) — exploration pressure halves every 20 tasks
- Floor: if N(a) < 2, that category is mandatory before UCB takes over
- Outcome signal: agent scores outcome 0-3 (0=blocked, 1=marginal, 2=clear progress, 3=open-item resolved or deliverable produced)
- Q(a) update: running average Q(a) <- Q(a) + alpha*(score - Q(a)), alpha=0.1
- Diagnostic: if category switches < 20% over any 10-task window, c temporarily doubled

---

### M2 — OMNI Dual-Filter Autonomous Agenda
**RL source:** OMNI (Zhang et al., NeurIPS 2023) — LP filter removes non-learnable; foundation-model interestingness filter removes boring-but-learnable. 49-550% more tasks vs LP-only. Closest existing mechanism to autonomous agenda-setting.
**Evidence:** RESEARCH-BACKED
**Problem addressed:** Agent generates no tasks when no user prompt; defaults to training-familiar tasks; no signal distinguishing goal-relevant from merely interesting.

**Implementation:**
- Triggers: session start with no user task pending
- Step 1 (Filter 1 — Learnability): scan `design_log.md` for open items. Exclude items with: (a) missing external authorization, (b) blocked dependency, (c) no files/context to act on
- Step 2 (Filter 2 — Interestingness): for each candidate, score: (i) goal-model alignment (appears in Goal Model section?), (ii) downstream unblocking count, (iii) staleness (sessions since last touched, normalized by priority)
- Score = (0.4 * goal_alignment) + (0.4 * unblocking_count_normalized) + (0.2 * staleness_score)
- Output: highest scorer written to `kit-maker/state/current_autonomous_task.md` with score breakdown before execution
- Prevents autotelic failure mode: recently completed items excluded from candidate pool

---

### M3 — Knowledge-Gap Oracle as Curiosity Signal
**RL source:** ICM (Pathak et al., ICML 2017): intrinsic reward = prediction error in action-controllable feature space. VIME: reward information gain, not raw novelty.
**Evidence:** INVENTED (ICM evidence is on pixel-state game environments; applying to knowledge-graph states is structural analogy with no published validation — requires empirical testing)
**Problem addressed:** No signal for what the agent doesn't know; autonomous agenda defaults to familiar tasks; cannot distinguish "I know this" from "I haven't looked at this yet."

**Implementation:**
- Runs as first sub-step of M2 Filter 1 (learnability assessment)
- Agent generates 5-8 project-state questions from goal model: "What is the current status of hypothesis H3?", "Which kit components are unimplemented?"
- Answers each WITHOUT reading files
- Checks answers against actual files
- Items answered incorrectly or unanswerable = high prediction error = high curiosity signal = high candidate priority
- Items correctly answered = low signal (already in agent's effective knowledge)
- Gap list fed into OMNI learnability filter as candidate task pool ranked by prediction error
- Incompressible noise filtered by interestingness scorer (score zero on goal-model alignment)

---

### M4 — External-State-Anchored Reward with Calibration Penalty
**RL source:** Goodhart's Law (Skalse et al. 2022 — unhackable iff one reward is constant; proxy reward hacking mathematically unavoidable for any non-trivial proxy) + MISE (2025: self-evaluation bias systematic; calibration reward reduced overuse from 24.28% to 14.34%) + Proof-of-Use (2025: direct consequence coupling).
**Evidence:** RESEARCH-BACKED
**Problem addressed:** Self-reported progress = proxy reward = subject to Goodhart's Law; specification gaming; faithfulness bias.

**Implementation:**
- Lives in `kit-maker/procedures/outcome_verification.md` as required checklist after every task
- Three verification tiers:
  1. File-system: did a file that was supposed to change actually change? Check mtime before and after
  2. Structural: did an open item get removed from `design_log.md`? Count open items before and after
  3. Tool-output: did a tool call return a real response (not just a log claim)?
- Calibration penalty: `kit-maker/state/calibration_log.json` tracks (predicted_outcome, actual_outcome) pairs over last 20 sessions
- If rolling divergence rate (|predicted - actual| average) exceeds 0.3, CALIBRATION FLAG written to `state/flags.md`
- Next autonomous agenda selection is forced to include a retrospective task ("audit last 5 tasks against stated outcomes")
- Fabrication is costly in terms of forced overhead, not just a logged warning

---

### M5 — Reflexion Episodic Lesson Memory + ExpeL Rule Extraction
**RL source:** Reflexion (Shinn et al., NeurIPS 2023): verbal RL with episodic memory, +11-22% gains across AlfWorld/HotPotQA/HumanEval, independently replicated. ExpeL (Zhao et al., AAAI 2024): cross-episode rule extraction, outperforms Reflexion on ALFWorld and WebShop.
**Evidence:** RESEARCH-BACKED (strongest evidence in the field for this class of mechanism)
**Problem addressed:** No mechanism for behavior to update based on outcomes; same mistakes repeat across sessions; lessons stay episodic and never generalize into durable behavioral rules.

**Implementation — Component 1 (Reflexion, fast update, per-session):**
- After every session with determinable outcome, write structured lesson to `kit-maker/memory/lessons.md`:
  `[DATE] LESSON: When [state-class description], action [action taken] produced [outcome] because [mechanism]. Behavioral adjustment: [specific change for next time].`
- Sessions without verifiable outcome: logged PENDING and revisited
- At session start: last 7 lessons prepended to working context before any task begins

**Implementation — Component 2 (ExpeL, slow update, every 20 sessions):**
- Tracked in `bandit.json`; when 20-session mark reached, dedicated meta-task fires
- Scan `lessons.md` last 20 entries, cluster by state-class similarity
- Patterns appearing in 3+ lessons → candidate additions to `CLAUDE.md` behavioral rules
- Negative patterns → candidate prohibitions
- Candidates written to `kit-maker/state/pending_rule_changes.md` for human review before promotion
- Agent does NOT self-modify CLAUDE.md directly — proposes and flags

---

### M6 — Best-of-N with Verifiable Scorer (Inference-Time GPI)
**RL source:** GPI policy improvement (Sutton/Barto): pi'(s) = argmax_a Q(s,a) — gradient-free, provably correct for finite action space. Best-of-N with PRM (arxiv 2502.10325): sample N candidates, select by value estimate.
**Evidence:** RESEARCH-BACKED
**Problem addressed:** Agent commits to first-considered approach without exploring alternatives; invisible micro-decisions; no value estimation at decision points.

**Implementation:**
- Applied at high-stakes decision points only: (a) choosing generation strategy for a new kit component, (b) selecting which hypothesis to implement first, (c) deciding scope when requirements are ambiguous
- Generate N=3 candidate approaches before committing
- For each, evaluate against three verifiable criteria scored 0-2:
  (i) Goal-model alignment (appears in Goal Model section?)
  (ii) Constraint satisfaction (violates any hard rule in CLAUDE.md?)
  (iii) Downstream unblocking count
- Total score 0-6; select argmax
- N candidates + scores written to `kit-maker/state/decision_log.md` before proceeding (auditable)

---

### M7 — Hindsight Decision Log with Retroactive Credit Reassignment
**RL source:** HCAPO (2025): hindsight importance ratio; 91.4% vs 77.6% on ALFWorld, trajectory shortened 7.8→5.8 steps. ReBel (2025): supervising belief accuracy as denser intermediate signal.
**Evidence:** ADAPTED-FROM-RL (formal probability model replaced with structured qualitative judgment; loses formal calibration properties, preserves directional insight)
**Problem addressed:** Outcomes visible only sessions later provide no feedback; agent cannot distinguish pivotal decisions from incidental ones; belief errors repeat because class is not named.

**Implementation — Phase 1 (Prospective logging):**
- At every decision in `decision_log.md` (M6) and every task selection in `current_autonomous_task.md`, also record: (a) current belief about project state, (b) alternatives considered, (c) expected outcome — frozen context snapshot

**Implementation — Phase 2 (Retroactive reassignment):**
- When outcome becomes observable N sessions later, agent reads relevant `decision_log.md` entries
- Hindsight question: "If I had known this outcome, which past decisions would I have been MORE likely to make? Which LESS likely?"
- Amplified decisions: CREDIT:HIGH in log
- Suppressed decisions: CREDIT:LOW
- Pattern (state-class, action, credit-level) written to `lessons.md` as hindsight lesson with elevated weight
- Contradicted beliefs at decision time → flagged as high-signal failure point (ReBel adaptation)

---

## Reward hacking mitigations (4 concrete, not advisory)

1. **Anchor to external state only.** Never use self-reported progress as a reward signal. `outcome_verification.md` checklist required — `bandit.json` Q-update does not fire until verification passes.

2. **Keep signals atomically narrow.** Composite abstract signals have 9.4% higher hacking frequency (Cohen's d=2.08). Replace 'goal progress 0-10' with: file created (binary), open item removed (binary), test suite delta (integer), tool response received (binary). Each independently verifiable.

3. **Calibration penalty for divergence.** If rolling divergence (predicted vs. actual over last 20 tasks) exceeds 0.3: forced retrospective task. Systematic fabrication creates productivity overhead — more costly than accurate reporting.

4. **Goodhart inflection detection.** Warning sign: bandit.json Q-values increasing (agent rates own tasks positively) but `design_log.md` open-item count NOT decreasing across sessions. When detected: freeze self-assessment reward, require human review cycle before resuming autonomous operation.

---

## LLM+RL gap assessment — what the research confirmed

1. **Reflexion is real and replicated.** +11-22% gains across AlfWorld, HotPotQA, HumanEval independently replicated. ExpeL extends it with cross-episode rule extraction and outperforms Reflexion.

2. **LATS proves MCTS at runtime is viable.** The LLM can do self-evaluation when grounded in explicit criteria, but criteria must be externally verifiable. Ungrounded self-evaluation (Self-Refine without external signal) fails silently on confident errors.

3. **Constitutional AI reveals CLAUDE.md is already a reward proxy.** Critique-revision against a written constitution is directly replicable at inference time without training. CLAUDE.md should be written with sufficient specificity to enable critique ("did this action satisfy rule X?"), not just aspiration ("be an advisor").

4. **Critical gap: no multi-step credit assignment in production systems.** No system reliably identifies which specific action in a long sequence caused failure. HCAPO and ReBel are closest but both require a statistical model. Honest design: accept episode-level credit assignment as the current ceiling. Build prospective decision log to enable retroactive refinement when outcomes eventually visible.

5. **The prompt is the only updatable parameter.** Every effective mechanism — Reflexion, ExpeL, LATS, Constitutional AI — works by changing what is in the prompt. Any mechanism that produces an output that does not eventually change the prompt is not actually updating policy.

---

## Build priority order (from synthesis)

1. **M4 first (external state verification)** — prerequisite for everything else; without it, all downstream Q-updates and lesson generation are downstream of a gameable signal
2. **M5 (Reflexion lessons)** — strongest evidence, lowest implementation cost, immediate value (adjacent-session error correction) before slower mechanisms are in place
3. **M1 (UCB bandit) + M2 (OMNI filter)** — require calibration log to be working first
4. **M7 (hindsight log)** — can begin prospective phase immediately; retroactive phase activates later
5. **M6 (Best-of-N)** — medium priority; applicable immediately at decision points
6. **M3 (knowledge-gap oracle)** — most speculative, build last, validate empirically against M2-only baseline

---

## Coverage gaps — angles not included in this research run

The "LLM+RL existing work" angle collapsed two sub-topics:

**Gap A: Goal-conditioned RL (GCRL) for LLM agents**
Specific missing content: Hindsight Experience Replay (HER) — goal relabeling for non-achieving episodes; Universal Value Function Approximators; subgoal decomposition with intermediate rewards; goal curriculum design. These are primarily training-time paradigms; their inference-time applicability is uncertain but worth confirming.
Assessment: Likely low additional value for procedural kit-maker (GCRL conditioning requires gradient updates; inference-time equivalent is already captured by "goal model at session start" + OMNI interestingness filter). Queue as P3 angle before finalizing.

**Gap B: RLHF runtime implications**
Specific missing content: sycophancy patterns from RLHF training (why models agree with user corrections even when wrong); over-compliance (RLHF trains models to be too compliant, potentially reducing proactive goal-directedness); internalized reward-hacking patterns that manifest at inference time. These are directly relevant to why self-assessed progress is biased beyond Goodhart.
Assessment: Medium value — confirms direction of M4 and informs adversarial review design (#3 in goal-achieving-ideas.md). Queue as P2 angle.

Both queued in RESEARCH_ANGLES.md; consolidation plan proceeds without blocking on them since core mechanisms are established.

---

## Honest assessment of what this does NOT resolve

- Step-level credit assignment in long-horizon sessions — which specific action in a 40-step session caused the outcome — has no reliable procedural solution. Accept episode-level as the ceiling. Document explicitly.
- Whether the integrated system (M1+M2+M3+M4+M5+M6+M7) has interaction effects: does UCB conflict with OMNI filter? Does calibration penalty suppress useful risk-taking? Unknown — requires empirical tuning.
- ExpeL rule extraction quality has not been validated for behavioral-contract domain specifically.
