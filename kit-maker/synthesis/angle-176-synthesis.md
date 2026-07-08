# Synthesis: Angle 176 — Multi-task Instruction Completion, Prospective Memory, Multi-constraint Stacking

**Date:** 2026-07-02
**Archive:** multi-task-instruction-completion-vocabulary-gap-fill-prospective-memory-and-multi-intent-parsing-traditions-missed-in-original-user-07-research.md (15 claims)
**Procedure:** research-synthesis.md (Steps 1–6)
**Kit file targets:** ENTRYPOINT.md rule density constraint; grounding-map.md row 13

---

## Step 1 — Grouped table

| # | Group | n | Empirical | Consensus | Anecdote | Max verify |
|---|-------|---|-----------|-----------|----------|------------|
| A | constraint-count-degradation | 7 | 7 | 0 | 0 | HIGH |
| B | omission-completion-state | 4 | 3 | 1 | 0 | MEDIUM |
| MISC | mitigation, null-results, cross-tradition | 4 | 3+1↓ | 1 | 0 | MEDIUM |

↓ = LOW-confidence empirical downgraded to consensus tier at Step 2.5

**Claims by group:**

**Group A** (7): multi-instruction-stacking-monotonic-degradation [HIGH, arXiv:2509.21051 EMNLP 2025], agentif-avg-11-9-constraints-poor-performance [HIGH, arXiv:2505.16944], pm-llm-compliance-drop-2-21pct [HIGH, arXiv:2603.23530], pm-llm-bidirectional-interference-gsm8k-collapse [HIGH, arXiv:2603.23530], pm-llm-salience-recovery-90-100pct [MEDIUM, arXiv:2603.23530], triggerbench-pm-degrades-long-context [MEDIUM, arXiv:2606.23459], proactive-interference-log-linear-decay [MEDIUM, arXiv:2506.08184]

**Group B** (4): seqbench-recall-precision-divergence-path-length [MEDIUM, arXiv:2509.16866], mast-14-failure-modes-task-verification-11pct [MEDIUM, arXiv:2503.13657], bdi-intention-commitment-reconsideration-planning [CONSENSUS], sagallm-saga-pattern-partial-completion-rollback [MEDIUM, arXiv:2503.11951 VLDB 2025]

**MISC** (4): arq-reintroduction-90pct-vs-cot-86pct [MEDIUM, arXiv:2503.03669], position-bias-null-result-instruction-following [LOW→consensus, arXiv:2601.03269], anthropomorphic-framing-critique-lm-research [CONSENSUS, arXiv:2502.09192], hci-interruption-resumption-lag-cues-reduce-workload [MEDIUM, PMC12271330]

**Total: 15 claims** ✓

---

## Step 2 — Contradiction scan

**Potential contradiction 1: pm-llm-salience-recovery (90-100% recovery) vs. pm-llm-compliance-drop (2-21% drop)**
Resolution: COMPLEMENTARY — salience enhancement recovers single-constraint failures; that same paper shows multi-constraint stacking causes recovery to fail (joint compliance < 50%). These describe baseline and mitigated states, not contradictory phenomena.

**Potential contradiction 2: ARQ reinstatement (MISC — salience mitigation works) vs. proactive-interference (prompt engineering gives only limited mitigation)**
Resolution: SCOPE CONDITION — ARQ addresses RECALL during active generation (mid-chain constraint cue injection prevents forgetting); PI-LLM addresses INTERFERENCE from superseded key-value associations (earlier values persist despite updates). Different failure modes. ARQ mitigation applies to constraint recall; insufficient for proactive interference from revised instructions.

**Potential contradiction 3: position-bias null result (position not a mechanism) vs. pm-llm-compliance-drop (terminal constraints worst at 50%)**
Resolution: SCOPE CONDITION — "terminal" in PM research refers to TIMING (action required at end of generation), not POSITION in the instruction prompt. The null result is about instruction prompt position (first/middle/last); the PM finding is about generation-time constraint monitoring. Different constructs, same label.

**Result: No CONTESTED contradictions.**

---

## Step 2.5 — Evidence tier adjustment

**position-bias-null-result-instruction-following [LOW→CONSENSUS]:** No controlled position-manipulation experiment in the paper; finding is an incidental observation from enterprise RAG study; paper's own authors cite lost-in-the-middle as a plausible explanatory factor (not ruled out); scope: 600 samples, 5 enterprise personas, RAG summarisation only → CONSENSUS tier

Archives are not altered. Downgrade applied only in synthesis.

---

## Step 2.6 — Evidence-type scope check

Group A: Three independent papers — formal multi-model benchmark (EMNLP 2025, 10 LLMs), industrial real-world benchmark (707 instructions from industrial systems), and controlled experimental study (8,000+ prompts, 3 model families). Methodological diversity is HIGH. Scope limitation: all studies use text-generation and code-generation tasks; not directly tested on kit behavioral-contract following in agentic planning sessions.

Group B: Sequential graph-traversal benchmark (seqBench), multi-agent coding/math annotated traces (MAST kappa=0.88), formal BDI theory, travel/family-coordination agentic scenarios (SagaLLM VLDB). Cross-domain transfer required for kit design application. MAST category mislabeling noted (claim says "task verification" but MAST paper shows failure modes FM-1.1 and FM-1.5 belong to FC1 Specification Issues, not FC3 Task Verification).

---

## Step 3 — Confidence map (tiers updated 2026-07-05 from fresh-pass)

| Group | Tier | Key claims | Evidence basis | Conflicts | Action |
|-------|------|-----------|----------------|-----------|--------|
| A: constraint-count-degradation | **HIGH** (SCOPE: HIGH applies to the model generation and prompt-engineering practices studied (frontier models available through early-m)) | multi-instruction-stacking-monotonic-degradation (HIGH, arXiv:2509.21051), agentif-avg-11-9-constraints-poor-performance (HIGH, arXiv:2505.16944), pm-llm-compliance-drop-2-21pct (HIGH, arXiv:2603.23530), pm-llm-bidirectional-interference-gsm8k-collapse (HIGH, arXiv:2603.23530) | 4 HIGH claims from 3 independent papers. Core statistics confirmed in all four: 10 LLMs monotonic degradation / logistic regression within ~10%; 11.9 constraints industrial average / best model <30% ISR; 2-21% formatting drop / terminal 50%; 93%→27% GSM8K collapse. Indirectness: text/code generation tasks; transfer to kit planning tasks plausible but not direct. Counter-prior caveat: count may be a proxy for complexity/conflict (mechanism not established). | None | **Apply calibration note** to rule density constraint in ENTRYPOINT: degradation is monotonic from 2+ (not a threshold phenomenon); aim ≤8 rules in shipping state; culling target is complexity/conflict reduction, not count alone |
| B: omission-completion-state | **CONSENSUS** | seqbench-recall-precision-divergence-path-length (MEDIUM, arXiv:2509.16866), mast-14-failure-modes-task-verification-11pct (MEDIUM, arXiv:2503.13657), sagallm-saga-pattern-partial-completion-rollback (MEDIUM, arXiv:2503.11951 VLDB 2025) | Omission dominant failure mode: precision stays high, recall plummets (seqBench — graph traversal, cross-domain). Not recognising task completion = 12.4% of MAST failures (category mislabeled in claim — actually FC1 not FC3; percentages approximately confirmed). External state manifest architecturally validated (SagaLLM VLDB 2025 — mechanism description had inaccuracies; core insight sound). BDI formal intention retirement provides theoretical grounding. Indirectness: seqBench from graph environments; MAST from multi-agent coding/math. | None | Omission detection already addressed by multi-task tracking rule (element 9). External state guidance: recommend external completion manifest for kits with >5 sequential steps or sessions expected to exceed 15 turns |

---

## Step 3.5 — Dual-pass reliability check

**Group A shuffled (MEDIUM claims first):** Reading salience-recovery [MEDIUM, n=10 stacking cell] and triggerbench [MEDIUM, specific details unconfirmed] and proactive-interference [MEDIUM, workshop paper] first → CONSENSUS. Then 4 HIGH claims arrive from 3 independent papers: flip to HIGH. Tier stable once HIGH claims read, regardless of order. → **HIGH** (stable)

**Group B shuffled (BDI consensus first):** Architectural theory (consensus) → SagaLLM [MEDIUM, mechanism inaccuracies] → MAST [MEDIUM, category mislabeling] → seqBench [MEDIUM, cross-domain] → CONSENSUS throughout. Reading seqBench first gives same result. → **CONSENSUS** (stable)

**All tier assignments stable. No CONTESTED reclassifications.**

---

## Step 3.6 — Counter-prior pass

**Highest-confidence group: Group A (constraint-count-degradation) — HIGH**

Main conclusion: Multi-constraint compliance degrades monotonically with instruction count, from 2+ instructions onward. Terminal constraints are the highest-risk category (up to 50% drop). This is consistent across 3 independent papers, 10 LLMs, 8,000+ prompts, and real industrial systems.

Counter-hypothesis: Instruction count per se is not the causal mechanism. Constraint COMPLEXITY and CONFLICT are the true predictors — a well-structured kit with 15 non-conflicting, simple rules performs better than one with 5 conflicting, complex rules. "When Instructions Multiply" finds count to be a logistic regression scalar predictor, but this could be a proxy correlation for uncontrolled complexity.

Required evidence: A study controlling for constraint complexity and conflict while varying count, showing count has no independent effect once complexity is controlled; or a high-count low-conflict constraint set outperforming a low-count high-conflict set.

Supporting evidence in archive:
- arXiv:2509.21051 verify note: explicitly does not test complexity vs. count independence — the logistic regression uses count as the sole predictor.
- agentif-avg-11-9-constraints-poor-performance verify note: "does not identify a causal mechanism for why constraint count causes degradation" — explicitly acknowledged.

Counter-hypothesis status: **PLAUSIBLE — not refuted in this archive.** No study controls for complexity/conflict. The mechanism is empirically uncertain.

Synthesis implication: Rule density threshold should be framed as a complexity/interference budget proxy, not a pure count ceiling. Culling operation should target: (1) conflicting rules (same surface triggers opposite actions), (2) overlapping rules (one rule subsumes another), (3) rules with multiple embedded conditions. Count reduction is the metric; interference reduction is the goal. This framing is more robust to the counter-hypothesis than a pure count rule.

**Tier revision: HIGH (narrow)** — the count-compliance correlation is well-established; the causal mechanism is uncertain (count may be a proxy for complexity). The direction (fewer is better; culling required) is HIGH. The specific threshold number (12-15) is an empirically-proxied estimate, not a mechanistically-derived value.

---

## Step 4 — Adversarial check on kit assumptions

| Assumption in kit | Verdict | Evidence |
|-----------------|---------|---------|
| Rule density threshold at >12-15 rules → culling (current ENTRYPOINT) | SUPPORTED but calibration needed | Group A HIGH: industrial systems at 11.9 constraints → best model <30% ISR. Threshold approximately correct; wording may imply ≤12-15 is acceptable when degradation is monotonic from 2+. GAP: add calibration note |
| Multi-task tracking rule (enumerate before starting — element 9) | SUPPORTED | Group B CONSENSUS: omission is dominant failure mode; enumerate-before-starting directly addresses the #1 failure class |
| After-every-task rule (element 3) — terminal constraint | RISK CONFIRMED, already mitigated | Group A HIGH: terminal constraints are worst category (up to 50% drop). Element 3 fires at end of task response = terminal constraint. Angles 174/175 PCR already added structural reinforcement (bookending, re-injection). Finding VALIDATES the prior mitigation — no new action needed |
| Degradation begins only above the threshold | FALSE | Group A HIGH: monotonic from 2+ instructions. Current wording implies ≤15 is safe; it is not. Must note that degradation is always present |
| External state > in-context for long-horizon kits | SUPPORTED | Group B CONSENSUS: SagaLLM + BDI |
| Culling target = rule COUNT | PARTIALLY UNSUPPORTED | Counter-prior pass: count may be a proxy for complexity/conflict. Culling should prioritize conflicting/overlapping/multi-condition rules, not minimize count alone |

**Gaps applied inline:**
1. Calibration note on rule density threshold (monotonic from 2+; ≤8 aim; 12-15 maximum before mandatory culling; culling target is complexity/conflict not count)
2. Counter-prior framing for culling operation

---

## Step 5 — User questions

CONTESTED groups: none
GAP items: both within expert domain; applied inline at Step 6.

---

## Step 6 — Kit file updates

**Change 1: ENTRYPOINT.md — Rule density constraint calibration (Hard Rule 13 rule-density section)**

Current wording: "behavioral contract >12-15 actionable rules → culling pass before shipping"

Applied addition: "Calibration (arXiv:2509.21051 HIGH, arXiv:2505.16944 HIGH): degradation is monotonic from 2+ instructions — 12-15 is the culling TRIGGER, not a safe ceiling. Aim for ≤8 behavioral contract elements in the delivered kit; 12-15 is the point at which culling becomes mandatory. Real industrial agentic systems average 11.9 constraints with best-model compliance under 30% at that density. Culling target: conflicting rules, overlapping rules, and multi-condition rules first — count reduction is the proxy; complexity/interference reduction is the goal. Do not assume ≤15 is acceptable compliance territory."

**Change 2: grounding-map.md row 13 — upgrade 🔬 SYNTHESIZED → ✅ VALIDATED**

Criteria met: synthesis ran + clear result from HIGH-confidence empirical claims + result applied to kit. Counter-prior caveat noted (mechanism uncertain; count is proxy for complexity).

---

## Confidence map summary

| Group | Tier | Kit rule decision |
|-------|------|------------------|
| A: constraint-count-degradation | **HIGH (narrow: mechanism uncertain, count-complexity proxy)** | Rule density culling trigger is approximately correct; add calibration note — monotonic degradation, ≤8 aim, culling targets complexity/conflict not count alone |
| B: omission-completion-state | **CONSENSUS** | Multi-task tracking rule (element 9) validated; external state manifest recommended for long-horizon kits |

---

*Synthesis complete 2026-07-02. Procedure: research-synthesis.md Steps 1–6 including 2.5, 2.6, 3.5, 3.6.*

---

## Step 3.7 — Principled Derivation (2026-07-05)

### A: constraint-count-degradation (HIGH (narrow: mechanism uncertain, count-complexity proxy))
**Finding (data point):** Multi-constraint compliance degrades monotonically with instruction count, from 2+ instructions onward. Terminal constraints are the highest-risk category (up to 50% drop). This is consistent across 3 independent papers, 10 LLMs, 8,000+ prompts, and real industrial systems — with industrial agentic systems averaging 11.9 constraints and best-model compliance under 30% at that density. The count-compliance correlation is well-established; the causal mechanism is uncertain — count may be a proxy for complexity and conflict rather than the causal driver (no study controls for complexity/conflict independently of count).

**Principle (Sub-step A):** When an agent must satisfy multiple constraints simultaneously, its compliance degrades as constraint density increases. The relationship is not binary (works or fails) but graded: compliance erodes progressively as constraints accumulate, with no known plateau. Constraints at terminal positions in an instruction sequence face disproportionately higher failure risk than those at earlier positions. The degradation appears to reflect something real about how LLMs resolve constraint conflicts and manage limited processing resources across long instruction sets, but the precise mechanism — whether count itself is the driver or whether count is a proxy for complexity and inter-constraint conflict — is not yet established.

**Fit to our setup (Sub-step B):** Tested in: single-turn and short multi-turn prompts with explicit numbered instruction lists, across general LLM benchmarks and industrial agentic pipelines running primarily retrieval, tool-call, and task-completion workloads. Kit-making setup differs in the following ways: (1) kit behavioral contracts are consumed across many sessions by agents that are not the ones who were tested — the kit is a persistent instruction artifact, not a one-time prompt; (2) constraints in a kit are distributed across multiple files (CLAUDE.md, TASK_TEMPLATE.md, procedures/), not delivered as a single instruction block — this may reduce count-per-context even if global constraint count is high; (3) kit constraints interact with each other across turns and tasks, creating higher implicit conflict density per constraint than a flat instruction list; (4) the agent executing a kit reads the behavioral contract at session start but then proceeds under execution pressure for many turns — a degradation that is monotonic with instruction count in a single prompt may manifest differently when constraints are re-read periodically versus loaded once. Principle applies more strongly when kit constraints are dense within a single file and loaded in one pass. Principle may apply less strongly if constraint load is deliberately distributed across file boundaries so each context window sees fewer constraints simultaneously — though this introduces a different risk: constraints that are never co-loaded may produce undetected inter-constraint conflicts.

**Derivations beyond the finding (Sub-step C):**
- Constraint budget rule: a generated kit's behavioral contract should be treated as a finite capacity resource. Each rule added to CLAUDE.md consumes a share of the executing agent's compliance capacity. Before adding any new rule, the kit-maker should estimate how many constraints the agent will face in a typical context window and whether adding this rule pushes the total past a soft threshold — because at that density, all constraints compete, and the new rule's gain is offset by degradation across the existing set. Candidate rule: any kit CLAUDE.md exceeding a target constraint count triggers a mandatory culling pass before shipping.
- Terminal-position risk for critical constraints: if the finding's terminal-constraint failure rate holds at the kit level, then the most safety-critical or goal-anchoring constraints must be placed at the beginning of behavioral contracts, not the end. Conversely, any constraint placed at the end of a long CLAUDE.md is at elevated dropout risk regardless of how clearly it is written. This implies a constraint ordering discipline: goal model and delegation model first, safety-critical never-rules second, operational procedures last — with explicit awareness that later items face higher skip risk.
- Conflict-complexity as the real driver: if count is a proxy for conflict rather than the cause, then two kits with identical constraint counts may have very different compliance profiles depending on how often their constraints require simultaneous satisfaction on the same input. A kit with 12 constraints that rarely interact may outperform a kit with 8 constraints that frequently conflict. This implies a conflict-density audit at Phase 6: for each pair of constraints in the behavioral contract, check whether any realistic input could require both to fire simultaneously in ways that conflict. High-conflict pairs should be resolved structurally (precedence rule, scope separation) rather than left to the executing agent to adjudicate under pressure.

### B: omission-completion-state (CONSENSUS)
**Finding (data point):** Omission is the dominant failure mode in multi-task instruction following: precision stays high while recall plummets — tasks that are attempted are done correctly, but tasks are silently dropped. seqBench shows recall-precision divergence with path length; MAST shows non-recognition of task completion accounting for approximately 12.4% of failures; SagaLLM architecturally validates external state manifests for tracking partial completion; BDI formal intention-retirement theory provides theoretical grounding for why in-context tracking of intention state degrades.

**Principle (Sub-step A):** When an agent must maintain a multi-item commitment ledger using only volatile in-context state, ledger completeness degrades independently of per-item execution quality. The items that get worked on are worked on correctly; the failure surface is the items that never get scheduled. Precision and recall decouple: individual task performance is a poor signal for overall set completeness. The failure mode is structural incompleteness, not quality degradation.

**Fit to our setup (Sub-step B):** Tested in: single-session multi-task instruction following benchmarks where all tasks were specified upfront and evaluated against a known ground-truth list. Our kit-making setup differs in three ways. First, the agent building the kit is the one subject to this failure mode during kit construction — tasks emerge mid-session, are added out of band, and are not always explicitly enumerated at the start; this makes the in-context tracking problem harder than the benchmark setup, so the principle applies more strongly. Second, kit-making tasks are interdependent and variably bounded (a "task" may spawn sub-tasks), whereas benchmarks used flat, discrete task lists — interdependency increases the surface area for silent dropping. Third, the principle applies less strongly when the kit procedure already mandates an external state artifact (such as a plan.md with a required entry before every action): that structural intervention directly counteracts the degradation mechanism. A kit that builds in external manifests is less exposed; a kit that relies on the agent's context alone reproduces the failure mode the finding documents.

**Derivations beyond the finding (Sub-step C):**
- External state manifest as a required structural element, not an optional aid: if in-context tracking degrades at scale, any kit rule that says 'track your tasks mentally' or 'remember what you committed to' will reproduce the failure. The implication is that a kit must require a written, queryable commitment register that persists across the session — and that this register must be updated as an unconditional precondition to starting any new work, not on recognition that a new task has arrived. Confidence: high — the mechanism (volatile in-context state failing to track multi-item sets) is the direct cause of the failure, and an external persistent register directly neutralizes it.
- Completion verification must be a distinct gate from quality verification: because precision stays high while recall drops, any audit that only checks 'was this output correct?' will be blind to the omission failure. A kit that audits output quality without separately auditing set completeness will systematically miss the dominant failure mode. The implication is a two-gate close discipline: one gate asks 'did we do each thing well?'; a separate gate asks 'did we do all the things?'. These cannot be collapsed into one check without losing sensitivity to the omission class. Confidence: high — the precision-recall decoupling makes the two dimensions structurally orthogonal, so a single check cannot cover both.
- Enumerate-before-execute as a mandatory discipline rather than a best practice: if the failure occurs because tasks are never scheduled rather than because they are executed poorly, then the intervention point is prior to execution — at the moment of enumeration. The principle implies that kits should require explicit, written enumeration of the full task set before any individual task begins, and that this enumeration should be done in a single pass rather than grown incrementally as execution proceeds. Incremental task addition into an active execution context is the highest-risk pattern because new items are added after the agent's attention is already committed to an executing task. Confidence: medium — the enumeration-first intervention is implied by the mechanism but the research did not test enumeration timing as an independent variable.

---

## Steps 3.5 and 3.6 — Fresh Subagent Passes (2026-07-05)

### Step 3.5 — Independent Tier Assignment
Discrepancies found (existing → fresh-pass):
- **constraint-count-degradation**: HIGH (Step 3 confidence map: 'HIGH (narrow: mechanism uncertain, count-complexity proxy)') → HIGH. Four of seven claims reach HIGH independently from three separate large-scale empirical papers (EMNLP 2025 benchmark across 10 LLMs, 707-instruction industrial benchmark, 8,000+ prompt controlled study), with core statistics numerically consistent across sources and no contradicting evidence from the remaining MEDIUM claims.
- **omission-completion-state**: CONSENSUS (Step 3 confidence map) → MEDIUM. All empirical claims are scope-limited and require cross-domain transfer (graph traversal environments to kit context), one claim has a noted category mislabeling, and the only theoretical grounding is consensus-level BDI formalism, leaving no HIGH-tier anchor in the group.
- **mitigation, null-results, cross-tradition**: absent from Step 3 confidence map table (Step 1 Max verify = MEDIUM; not carried forward to Step 3) → MEDIUM. The group's strongest empirical claims (ARQ, HCI interruption-resumption) are narrow-scope and cross-domain, the position-bias null result was downgraded to CONSENSUS due to lack of controlled manipulation, and no claim in the group reaches HIGH, making MEDIUM the correct ceiling.

### Step 3.6 — Counter-Prior Results
HIGH groups tested: 1 | Confirmed: 0 | Scope caveat: 1 | CONTESTED: 0

**PLAUSIBLE WITH SCOPE CAVEAT:**
- constraint-count-degradation: HIGH applies to the model generation and prompt-engineering practices studied (frontier models available through early-mid 2025, unstructured multi-constraint prompts) and to settings where constraint conflict density co-varies with count; it does not straightforwardly apply to well-structured, non-conflicting instruction sets or to post-2025 models trained with explicit multi-constraint instruction-following objectives.
