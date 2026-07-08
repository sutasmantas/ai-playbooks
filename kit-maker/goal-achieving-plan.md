# Goal-Achieving Implementation Plan

**Date:** 2026-07-03
**Source:** 14 user-approved ideas (goal-achieving-ideas.md) + 8 RL-backed mechanisms (research: wf_a619de87-394)
**Status:** Consolidated — ready to implement in priority order
**Next step:** Build #18 first (external verification prerequisite); see Build Order below.

---

## Architecture overview

The mechanisms form a coherent loop at four timescales:

| Timescale | Mechanism | Fires when |
|-----------|-----------|------------|
| **Every session start** | Lesson prepend + UCB scores + OMNI filter | Before any task, always |
| **Every task selection** | UCB bandit category choice + Best-of-N at decisions | At any task selection point |
| **Every task close** | External verification + Q-update + Lesson write | After any task completes |
| **Every 20 sessions** | ExpeL rule extraction + Goal-rebuild | Tracked in bandit.json |
| **On trigger** | Adversarial review + Test subagent + External goal check | Via subagent trigger table |

---

## Layer 1 — Session-start procedure

**Fires: every session, before any task execution. Order matters.**

**Step 1 — Lesson context injection (#19 Reflexion)**
Read `kit-maker/memory/lessons.md`. Prepend last 7 entries to working context before any task begins. If file doesn't exist: create it empty and proceed.

**Step 2 — Loss register scan (#9, subsumed into #19)**
Lessons.md entries tagged with source USER-CORRECTION are the loss register. Identify the dominant class from the last 5 corrections. If a class appears 3+ times: that class gets priority in step 4's interestingness scoring.

**Step 3 — UCB scores (#15)**
Read `state/bandit.json`. Compute UCB_score(a) = Q(a) + c * sqrt(ln(t_total) / N(a)) for each category {research, test, review, build}. If any category has N < 2: that category is mandatory (auto-selected). Otherwise: UCB scores inform step 4.

**Step 4 — OMNI dual-filter (#16)**
*Only when no user task is pending.*
- Filter 1 (Learnability): scan `design_log.md` for open items. Remove: missing-authorization, blocked-dependency, no-context-available. Also remove: recently completed (in last 3 sessions).
- Filter 2 (Interestingness): score each candidate:
  - Score = 0.4 * goal_alignment + 0.4 * unblocking_normalized + 0.2 * staleness_score
  - goal_alignment: does item appear in Goal Model section of design_log.md?
  - unblocking_normalized: count of items blocked by this / max such count across candidates
  - staleness: sessions since last touched / priority weight
- UCB adjustment: multiply interestingness score by (1 + UCB_score for the category this task falls into)
- Select highest combined score. Write to `state/current_autonomous_task.md` with score breakdown.

**Step 4a — Knowledge-gap oracle (#17, feeds into step 4)**
Before reading files, generate 5-8 questions about project state from the goal model. Answer each from memory only. Then check against files. Items with wrong/unanswerable memory-answers → high prediction-error → add to OMNI candidate pool with priority boost. Items correctly answered → skip (already known).
*This step is speculative — validate empirically after #16 is working: does gap-first produce better outcomes than OMNI-only?*

**Step 5 — External goal check (#5)**
*When user is present (i.e., user sent a message this session rather than autonomous mode).*
Spawn subagent with: goal model statement + summary of work done (sessions last 3). Ask: "Is this work sufficient to achieve the goal? What's missing?" No current-session context — purely outside view. Findings feed into task list or current session's priority.

**Step 6 — Periodic goal-rebuild (#1)**
*Fires when t_total mod 10 == 0 (every 10 tasks, tracked in bandit.json).*
Set existing task list aside. Rebuild from scratch starting only from the goal model: "what evidence do I NOT have that the goal is being met?" Items in the rebuilt list not already in the existing backlog = missed work. Add them.

---

## Layer 2 — Pre-task (every task)

**Fires: at any task, before execution begins.**

**Step 1 — Prospective decision snapshot (#22, Phase 1)**
For any task that will involve high-stakes decisions (kit component strategy, hypothesis implementation order, scope under ambiguity): at the moment the decision is made, log to `state/decision_log.md`: (a) current belief about project state, (b) alternatives considered, (c) expected outcome. This is the frozen context snapshot for later hindsight reassignment.

**Step 2 — Best-of-N at decision points (#21, implements #10+#13)**
For high-stakes decisions specifically (not every task, only: choosing kit component generation strategy, selecting which hypothesis to implement first, deciding scope when ambiguous):

**Phase 1 — Worker generates candidates:**
Generate N=3 candidate approaches. Write all three to `state/decision_log.md` as self-contained option statements before any scoring. STOP after generating — do not score your own candidates. The worker that generated the candidates cannot objectively score them (B4, B26 — role conflict eliminates calibration value; see subagent-task-mapping-2026-07-03.md CONVERT-3).

**Phase 2 — Judge subagent scores:**
Dispatch a judge subagent with:
```
System prompt: "You are a decision judge. Score each candidate approach below 
against the scoring rubric. You did NOT generate any of these candidates."

Input:
- The decision question (one sentence)
- The goal model statement (from design_log.md Goal Model section)
- The three candidate option statements (verbatim from decision_log.md)
- The hard constraints (CLAUDE.md rules that cannot be violated)
- The scoring rubric:
    Goal-model alignment 0-2: does this approach appear in or follow directly from the Goal Model?
    Constraint satisfaction 0-2: does it violate any hard rule in CLAUDE.md? (2=no violations, 0=violates)
    Downstream unblocking count 0-2: how many blocked items in plan.md does this resolve?
    Total 0-6.

Output: scored table (candidate × dimension × total), argmax marked, one-sentence rationale per candidate.
```

**Phase 3 — Worker selects:**
Read judge output. Select the argmax (or synthesize from winner if judge identifies partial wins across candidates). Write judge scores to decision_log.md alongside the candidates. Proceed.

*This is GPI policy improvement: evaluate under current value estimate, select greedy argmax. No ML required. The judge/worker separation ensures the evaluation is not sycophantic toward the producer's choices.*

**Step 3 — Proactive testing trigger (#2, via #8 subagent policy)**
If the task involves writing any CLAUDE.md rule, TASK_TEMPLATE change, or procedure update: a test subagent fires as part of task close (not before — don't block execution). The test subagent runs a scenario and checks if the new rule/procedure fires correctly in the intended situation and doesn't fire incorrectly in adjacent situations.

---

## Layer 3 — Task-close verification

**Fires: after every task, before reporting done.**

**Step 1 — External state verification (#18)**
Required before any outcome claim is credited. Three tiers:
1. **File-system check**: did files that were supposed to be created/modified actually change? Check mtime before (logged at task start) and after. A claimed "research complete" must produce a file with new mtime.
2. **Structural check**: if task was supposed to close an open item — is that item removed from design_log.md? Count open items before and after.
3. **Tool-output check**: did all claimed tool calls return actual responses (not just logged as executed)?

Outcome score 0-3:
- 0: task is blocked or no verifiable state change
- 1: marginal progress (some but not all verification tiers pass)
- 2: clear progress (all tiers pass, goal-model alignment present)
- 3: open item resolved or deliverable produced (verifiable)

**Step 2 — Bandit Q-update (#15)**
Write outcome score to bandit.json. Update Q(a) via running average: Q(a) <- Q(a) + 0.1 * (score - Q(a)). Increment N(a) and t_total.

**Step 3 — Calibration log update (#18 penalty mechanism)**
Record (predicted_outcome, actual_outcome) pair in `state/calibration_log.json`. Compute rolling divergence rate over last 20 entries: avg(|predicted - actual|). If divergence > 0.3: write CALIBRATION FLAG to `state/flags.md`. Next autonomous task selection must include a retrospective task ("audit last 5 tasks against stated outcomes") before any other autonomous work.

**Step 4 — Lesson write (#19 Reflexion)**
Write to `kit-maker/memory/lessons.md`:
```
[DATE] LESSON: When [state-class description], action [action taken] produced [outcome] because [mechanism]. Behavioral adjustment: [specific change for next time].
```
If outcome is still pending (can't be verified yet): log PENDING with target date for revisit.

**Step 5 — Hindsight reassignment check (#22, Phase 2)**
Scan decision_log.md for entries where outcome is now observable (outcome was expected N sessions ago and is now verifiable). For each: apply hindsight question — "would I have been more or less likely to make this decision knowing the outcome?" CREDIT:HIGH or CREDIT:LOW tag added to the decision entry. Write corresponding pattern to lessons.md as hindsight lesson (these have elevated weight in ExpeL extraction).

**Step 6 — Goodhart inflection check (#18 mitigation)**
Check: are bandit.json Q-values increasing (agent rates own tasks highly) while design_log.md open-item count is flat or rising across last 5 sessions? If yes: write GOODHART_FLAG to flags.md and include it in the next session's external goal check.

**Step 7 — Proactive divergence detection (#7)**
Ask: "if I only looked at the last 3-5 things I did, what pattern do they form?" If pattern is "responding to corrections" or "fixing the same class repeatedly": signal that underlying process isn't working — propose a mode change before continuing.

---

## Layer 4 — Cross-session mechanisms (scheduled)

**ExpeL rule extraction (#20) — every 20 sessions**
Tracked in bandit.json `expeL_counter`. When counter reaches 20: fire dedicated meta-task.

**Step 1 — Worker collates and strips context:**
Read lessons.md last 20 entries. For each entry: strip the date and any session/task references that identify who wrote it. Format as a numbered list of outcome records: `[N] Trigger: [state-class]. Action: [what was done]. Outcome: [result]. Tag: [USER-CORRECTION | AUTONOMOUS]`. This removes the sunk-cost anchor — the extraction agent should not know these are the agent's own records.

**Step 2 — Blind synthesis subagent extracts patterns:**
Dispatch a synthesis subagent with:
```
System prompt: "You are analyzing a log of task outcomes from an AI system. 
Find recurring patterns — what triggers produced good outcomes, what triggered 
bad outcomes. Cluster entries by trigger condition (same trigger → same cluster). 
For each cluster of 3+ entries with the same trigger, propose a behavioral rule.
- Positive-outcome clusters → propose a rule stating what to DO in that trigger state
- Negative-outcome clusters → propose a rule stating what NOT to do (convert to commission form where possible)
For each proposed rule: cite the entry numbers that support it.
You have no context about who wrote these entries or what system produced them."

Input: the collated, context-stripped lesson log from Step 1.
Output: candidate rules with supporting entry citations.
```

**Why a subagent:** The main agent that wrote the lessons recalls the context behind each one — why it was logged, what it was defending, what pressures were active. This context biases extraction toward confirming existing practices rather than surfacing new patterns. A blind synthesis agent with no session context sees only trigger-action-outcome triples and is not anchored to the reasoning that produced them (B1, B5, B23 — see subagent-task-mapping-2026-07-03.md CONVERT-5).

**Step 3 — Worker writes candidates:**
Read subagent output. Write proposed rules to `state/pending_rule_changes.md` with supporting lesson entry citations (re-add dates after blind extraction to make citations traceable).

**Step 4 — Human review gate (unchanged):**
Human review required before any proposed rule is promoted to CLAUDE.md. Do not auto-promote.

**Phase 5.5 trial trigger (external measurement, #12 resolved)**
Fires when ≥3 behavioral contract elements have been significantly changed since last trial. Give kit a novel realistic-scale task; measure user interventions required and output quality against skilled-human reference. This is the external loss measurement — agent cannot self-assess this.

---

## Layer 5 — Subagent trigger table (#8)

Subagents fire as mandatory triggers, not optional conveniences.

| Trigger | Subagent | Input | Output |
|---------|----------|-------|--------|
| Process/template/procedure change written | Test subagent (#2) | New rule/procedure + scenario where it should fire | Does it fire correctly? Does it fire incorrectly elsewhere? |
| Session start (user present) | External goal check (#5) | Goal model + 3-session summary | Missing work, divergence signals |
| Capability claim about kit | Test subagent | Claim + scenario where it should hold | Does the claim hold? Where does it break? |
| Major artifact completed | Adversarial review (#3) | Goal model + artifact | What does this fail to achieve? What's missing? |
| Phase 5.5 trial trigger fires | Full trial run | Novel task at realistic scale | User intervention count + quality delta |

---

## File manifest

All state files live in `kit-maker/state/` (new directory):

| File | Purpose | Created by |
|------|---------|------------|
| `state/bandit.json` | UCB bandit state: N(a), Q(a), t_total, c, expeL_counter | #15, updated by #15 |
| `state/current_autonomous_task.md` | Selected autonomous task + OMNI score breakdown | #16 |
| `state/decision_log.md` | High-stakes decision snapshots + hindsight credit | #21, #22 |
| `state/calibration_log.json` | (predicted, actual) pairs over last 20 tasks | #18 |
| `state/flags.md` | Active flags: CALIBRATION, GOODHART, etc. | #18 |
| `state/pending_rule_changes.md` | ExpeL-generated candidate CLAUDE.md rules | #20 |
| `memory/lessons.md` | Reflexion episodic lessons + hindsight lessons | #19, #22 |
| `procedures/outcome_verification.md` | Verification checklist (three tiers) | #18 |

---

## Conflict resolution summary

| Original idea | Final status | Resolved by |
|--------------|-------------|-------------|
| #5 External goal check | KEEP — handles user-present sessions | No conflict |
| #6 Outcome tracking (self-report) | SUPERSEDED | #18 (external verification) |
| #9 Loss register | SUBSUMED | #19 (lessons.md IS the loss register) |
| #10 Pre-task goal-maximization | SUBSUMED | #21 (Best-of-N implements it) |
| #11 Action-space search | SUBSUMED | #15 (UCB bandit makes it computable) |
| #12 External loss measurement | RESOLVED | #18 calibration log + trial trigger |
| #13 Problems scan | SUBSUMED | #21 (constraint check is problems scan) |
| #14 Session gradient | SUBSUMED | #19 (lesson format captures this) |
| #2 Proactive testing | KEEP as specific trigger in #8 | |
| #8 Subagent policy | KEEP — trigger table implementation | Expands to include RL triggers |

Net: 22 ideas → 12 distinct implementation units (no duplicates, no conflicts)

---

## Build order (from RL synthesis: build prerequisites first)

**Phase A — Foundation (implement before anything else)**
1. `procedures/outcome_verification.md` — the three-tier verification checklist (#18)
2. `state/calibration_log.json` and calibration tracking logic (#18)
3. `state/flags.md` and flag-reading at session start (#18)

**Phase B — Core feedback loop (strongest evidence, immediate value)**
4. `memory/lessons.md` — create and define lesson format (#19)
5. Session-start lesson prepend procedure (#19)
6. Task-close lesson write procedure (#19)

**Phase C — Exploration and agenda (requires Phase A to be working)**
7. `state/bandit.json` — bandit state and UCB computation (#15)
8. Q-update logic at task close (#15)
9. OMNI dual-filter at session start for autonomous tasks (#16)
10. External goal check subagent at session start for user-present tasks (#5)

**Phase D — Decision quality (medium priority, can layer in)**
11. `state/decision_log.md` — prospective logging at decision points (#22 Phase 1)
12. Best-of-N candidate generation at high-stakes decisions (#21)
13. Hindsight reassignment at task close (#22 Phase 2)

**Phase E — Long-cycle mechanisms (implement last)**
14. ExpeL rule extraction meta-task every 20 sessions (#20)
15. Periodic goal-rebuild every 10 tasks (#1)
16. Knowledge-gap oracle (most speculative — validate against #16-only baseline first) (#17)

**Phase F — Before finalizing adversarial review design (#3)**
17. Run RLHF runtime implications research angle (P2 priority) — informs how adversarial review should be structured given sycophancy/over-compliance patterns in RLHF-trained models

---

## What this plan does NOT yet measure (M-28, 2026-07-03)

**The mechanisms in this plan measure process discipline, not output quality.** File timestamps prove work happened. Open-item counts prove items were closed. UCB bandit prevents category lock-in. Reflexion lessons update context. None of these directly measure: are the kits we produce getting closer to autonomous execution at high quality with minimal human interference?

**What direct goal-proximity measurement requires:** a separate adversarial verifier (#23 in goal-achieving-ideas.md) that, after any substantive task, asks "did this actually advance the goal?" with adversarial framing and no access to the worker's reasoning. Research angle queued before this layer is finalized.

**Step-level credit assignment** (M-27) — which specific action caused an outcome — failed in tested setups (ML training-time approaches). It is NOT confirmed impossible for procedural systems with structured prospective logging. The hindsight decision log (#22) is a partial approximation; the question is open, not closed.

**Interaction effects** between mechanisms are unknown. Require empirical tuning as mechanisms are built.

**ExpeL rule extraction quality** for behavioral-contract domains not validated. Start with human review gate; tighten after seeing output quality.
