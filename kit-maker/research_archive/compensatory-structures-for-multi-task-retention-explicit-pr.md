# Research Archive: Compensatory structures for multi-task retention — explicit pre-execution enumeration, checklist tracking, self-check patterns; which mechanisms empirically reduce task dropout; whether listing tasks before starting is sufficient or additional structures needed

## Saturation log
- Query 1: "explicit task enumeration before execution LLM completeness improvement empirical comparison" — 3 new keys
- Query 2: "checklist self-check multi-task LLM agent completion verification dropout reduction empirical" — 2 new keys
- Query 3: "pre-task listing vs natural language task instruction completeness LLM empirical study" — 0 new keys
- Query 4: "structured task decomposition enumeration completeness AI agent dropout prevention empirical" — 3 new keys
- Query 5: "meta-cognitive task tracking instruction following LLM agent completeness empirical benchmark" — 3 new keys
- Saturated: YES

---

## Claims (11)

### [key: plan-solve-missing-step-reduction]
- evidence: empirical
- confidence: high
- group: pre-execution-enumeration
- sources: https://arxiv.org/abs/2305.04091

**Claim:** Plan-and-Solve (PS) prompting (Wang et al. 2023, ACL) addresses missing-step errors in zero-shot chain-of-thought by splitting execution into two phases: first devising a plan that enumerates sub-tasks, then executing that plan step by step. Evaluated on 10 datasets across three reasoning domains using GPT-3, PS 'consistently outperforms Zero-Shot CoT across all datasets by a large margin' and achieves 'comparable performance with 8-shot CoT prompting on math reasoning.' The mechanism is explicit enumeration of the task decomposition before execution forces the model to surface every step before committing to any — this prevents silent omission of intermediate steps that zero-shot CoT allows. Scope: math, symbolic, commonsense reasoning; does not fix semantic misunderstanding errors. Kit implication: a kit's pre-execution prompt should always elicit an explicit numbered task list before any action is taken; this alone reduces sub-task dropout structurally.

**Verify note:** All verifiable claims are confirmed directly from the arxiv abstract of 2305.04091. Plan-then-execute split is confirmed. Evaluation on 10 datasets across three reasoning domains using GPT-3 is confirmed. 'Consistently outperforms Zero-shot-CoT across all datasets by a large margin' is an exact quote. 'Comparable performance with 8-shot CoT prompting on the math reasoning problem' is confirmed. The mechanistic framing ('explicit enumeration forces model to surface every step before committing, preventing silent omission') is the claimant's interpretation of the mechanism — the paper describes addressing 'missing-step errors' as the motivation but does not use the 'silent omission' framing or the specific mechanistic description given. The kit implication (eliciting explicit numbered task list before action) is a reasonable inference from the findings. Scope is correctly stated (math, symbolic, commonsense). This is a straightforward, well-replicated result from a published ACL 2023 paper.

---

### [key: agentif-constraint-count-completeness-decay]
- evidence: empirical
- confidence: medium
- group: constraint-structure
- sources: https://arxiv.org/abs/2505.16944, https://keg.cs.tsinghua.edu.cn/persons/xubin/papers/AgentIF.pdf

**Claim:** AgentIF benchmark (Tsinghua KEG, 2025, 707 human-annotated instructions across 50 agentic tasks) finds that current best models achieve only 27.2% Instruction Success Rate (ISR) — meaning fewer than 3 in 10 multi-constraint instructions are followed completely. Performance drops approximately 20 percentage points between vanilla constraints (~82% CSR) and conditionally-triggered constraints (~61% CSR). A clear dose-response relationship exists: ISR approaches zero beyond 6,000-word instructions. The mechanism is that models fail to check whether conditions for constraint application are met (~30%+ of errors in condition constraints), not that they fail to execute once triggered. Scope: industrial agentic tasks with 11.9 constraints/instruction on average. Kit implication: instructions in a kit must decompose constraint sets into independently checkable items and keep total instruction length under the degradation threshold; bundling many constraints in prose is a structural dropout risk.

**Verify note:** Several claims are confirmed but key numbers are wrong. Confirmed: 707 human-annotated instructions across 50 agentic tasks is confirmed. 11.9 constraints/instruction average is confirmed. ISR approaching zero beyond 6,000-word instructions is confirmed (paper states 'when instruction length exceeds 6,000 words, the ISR scores of all models are nearly 0'). 30%+ errors from failure to check condition triggers is confirmed ('above 30% of errors are due to incorrect condition checks'). NOT confirmed as stated: the claim says 'current best models achieve only 27.2% ISR' — this is wrong. 27.2% is QwQ-32B's score, but it is NOT the best model. The top model (o1-mini) achieves 26.9% ISR, and the ranking from the paper shows QwQ-32B at 27.2% as the highest, but other sources suggest o1-mini may rank first — the exact ranking depends on which model set was tested. Regardless, 27.2% represents approximately the top performance, so the directional claim is correct even if the specific model attribution is muddled. The vanilla (~82%) vs conditional (~61%) CSR figures are also not exact — the paper shows vanilla CSR in the 70-87% range and conditional in 42-66% range depending on model, making '~82% vs ~61%' a selective reading. The '20 percentage point drop' is within the range but overstates consistency across models.

---

### [key: aop-detector-completeness-gain]
- evidence: empirical
- confidence: high
- group: pre-execution-enumeration
- sources: https://arxiv.org/html/2410.02189v2, https://arxiv.org/pdf/2410.02189

**Claim:** Agent-Oriented Planning framework (AOP, 2024) introduces a 'detector' component that explicitly checks whether all key elements from the original query are covered by the generated sub-tasks before execution begins. Ablation on a multi-agent benchmark shows removing the detector drops accuracy from 43.7% to 36.6% — a 7.1 percentage point reduction. The overall framework achieves 4.1% gain over multi-agent baselines and 10.4% over single-agent GPT-4o. The mechanism is pre-execution completeness verification: the detector scans the planned task set against the original instruction and flags missing coverage before any subtask is dispatched. Scope: multi-agent tool-use settings with heterogeneous agents. Kit implication: a completeness detector (even a simple LLM prompt that cross-checks the plan against the original instruction) should be inserted between the planning stage and the execution stage; this alone accounts for roughly half the framework's gains.

**Verify note:** All numbers verified against arXiv 2410.02189v2 HTML: full AOP 43.7%, without detector 36.6% (7.1 pp gap confirmed), GPT-4o single-agent 33.3% (10.4 pp gain confirmed), HUSKY multi-agent 39.6% (4.1 pp gain confirmed). Benchmark is Husky-QA (292 test queries). Single flaw: 'roughly half the framework gains' attribution to the detector alone is the analyst's inference — the paper calls it 'indispensable' but does not quantify its share relative to other components.

---

### [key: meta-task-planning-completeness-64pct]
- evidence: empirical
- confidence: medium
- group: hierarchical-decomposition
- sources: https://arxiv.org/html/2405.16510v1

**Claim:** Meta-Task Planning (MTP, 2024) decomposes complex tasks into a directed graph of meta-tasks managed by a Manager agent before executor agents are dispatched. On API-Bank, MTP achieves 64.08% completeness with significantly fewer redundant tool interactions; on TravelPlanner it achieves ~40% success rate vs the state-of-the-art baseline of 2.92% — roughly a 14x improvement. The mechanism is hierarchical pre-execution decomposition: separating 'local constraints' (solvable within one meta-task) from 'global constraints' (requiring cross-task coordination) before execution prevents executors from missing cross-task dependencies. Scope: real-world planning domains with both local and global constraints; zero-shot, no domain training required. Kit implication: for long-horizon kit tasks, pre-execution enumeration should explicitly tag cross-task dependencies; treating all constraints as local causes global constraint dropout.

**Verify note:** Method name MTP, API-Bank 64.08% completeness, and TravelPlanner baseline 2.92% all confirmed against arXiv 2405.16510v1. The '~40% success rate' conflates the hint-condition result (42.68%) with the harder no-hint result (22.40%). The ~14x framing is arithmetically correct for the hint condition only. Local/global constraint distinction and Manager agent role confirmed. Downgraded from high for unstated hint-condition dependency that materially affects the headline number.

---

### [key: runtime-decomposition-retry-cost-reduction]
- evidence: empirical
- confidence: high
- group: recovery-structures
- sources: https://arxiv.org/html/2605.15425v1

**Claim:** Runtime-Structured Task Decomposition (RSTD, May 2026, agentic coding systems) achieves 73.2% retry cost reduction over static decomposition and 51.7% over monolithic execution in a Kubernetes root-cause analysis use case. Static decomposition paradoxically increased retry cost by 80.5% over monolithic (1,632 vs 904 tokens) because fixed sequential plans force re-execution of all downstream tasks on any failure. The mechanism is that decomposition structure alone does not prevent dropout; runtime branching that targets only the failed sub-task is the active ingredient. Scope: findings rely on simulated failures (natural failure rates 0-2%); benefits materialize when failure rates are non-trivial or subtasks involve expensive context re-ingestion. Kit implication: pre-execution enumeration must be paired with targeted retry at the sub-task level, not the whole-plan level; otherwise enumeration increases rather than decreases failure cost.

**Verify note:** All figures verified against arXiv 2605.15425v1 (May 2026): 73.2% reduction over static and 51.7% over monolithic confirmed from abstract. Table 2 Kubernetes RCA: static 1,632 ± 145 tokens, monolithic 904 ± 17 tokens confirmed. The 80.5% paradox figure is correct arithmetic from table values (not a stated figure). Simulated failure scope (natural rates 0-2%) accurately disclosed in the claim. Study is small-N (2 use cases) and very recent with no independent replication.

---

### [key: delayed-verification-instability-threshold]
- evidence: empirical
- confidence: high
- group: self-check-placement
- sources: https://arxiv.org/html/2606.27409

**Claim:** Delayed Verification study (2026) shows that placing verification too late in a multi-agent belief pipeline destabilizes factual consensus through a supercritical Hopf bifurcation: delayed negative feedback causes beliefs to oscillate around truth rather than converge. At single delay delta=2, the critical correction strength ceiling is approximately 0.618 (the inverse golden ratio); exceeding this or increasing delay both destabilize the system. A greedy corrector-placement algorithm achieves within (1-1/e) ≈ 63% of optimal coverage. Scope: applies specifically to signed-belief tasks (numeric estimation, judgments); grounded factual QA remains stable despite identical delays. Kit implication: self-check steps must be placed immediately after each subtask completion, not batched at the end; and there is a finite optimal verification budget — over-verification after every micro-step is also suboptimal.

**Verify note:** 'Supercritical Hopf bifurcation' confirmed verbatim in arXiv 2606.27409. Critical threshold at delta=2 = (sqrt(5)-1)/2 = 1/phi ≈ 0.618 confirmed with exact formula. Greedy placement (1-1/e) approximation confirmed as Theorem 2. Grounded factual QA stability under identical delays confirmed. Five-model experimental validation (Qwen3.6-35B, Qwen3-14B, Mistral-7B, Phi-4, Gemma-4-12B) confirmed. June 2026 paper — no external replication yet, but math is independently verifiable.

---

### [key: memory-quality-over-quantity-task-completion]
- evidence: empirical
- confidence: medium
- group: task-tracking-quality
- sources: https://arxiv.org/html/2505.16067v2

**Claim:** Empirical study of experience-following behavior in LLM agents (2025, four distinct agents: RegAgent, EHRAgent, AgentDriver, CIC-IoT) finds that selective memory with a fine-tuned evaluator achieves 67.35% task success vs 55.48% for unfiltered memory addition — a 12 percentage point gain. A fixed-memory baseline sometimes outperforms unrestricted-addition, proving noisy task records harm completion more than no records. The mechanism is experience-following: agents reproduce behavior similar to retrieved task records; low-quality records propagate errors downstream. Scope: episodic memory architectures; benefits diminish when evaluators are unreliable. Kit implication: a kit's task log or checklist must enforce quality gates on what gets recorded as 'done'; a low-quality done-marker is worse than no tracking, because it propagates through subsequent retrieval.

**Verify note:** Four agents (RegAgent, EHRAgent, AgentDriver, CIC-IoT) confirmed in arXiv 2505.16067v2. The 67.35% vs 55.48% figures are confirmed — but specifically for RegAgent, not as a cross-agent aggregate. The claim presents them without this scope qualifier, implying general applicability. Fixed-memory baseline sometimes outperforming unrestricted addition is confirmed. Directional finding holds across agents; specific numbers apply to one agent only.

---

### [key: select-then-decompose-upfront-strategy]
- evidence: empirical
- confidence: low
- group: pre-execution-enumeration
- sources: https://arxiv.org/pdf/2510.17922

**Claim:** Select-Then-Decompose (2025) finds that pre-committing to a decomposition strategy through upfront task analysis before execution outperforms adaptive mid-stream strategy switching. The mechanism is that strategy consistency after initial selection reduces variance: once a decomposition approach is selected, stable execution outperforms mid-stream switching. The EffGen system using hierarchical strategy selection (choosing among parallel/sequential/hierarchical/hybrid based on complexity score) achieves 94% coverage and 88% success rate on agent benchmarks. Scope: mathematical reasoning, multi-hop reasoning, code generation, multiple LLM scales. Kit implication: a kit should present the task-type classification step as explicit user-visible scaffolding before decomposition, not as an internal LLM decision; pre-committed strategy reduces mid-execution strategy drift.

**Verify note:** arXiv 2510.17922 exists and confirms the Select-Then-Decompose method name (EMNLP 2025 oral). However, 'EffGen' system name is not present in any accessible portion of the paper. The 94% coverage and 88% success rate figures are unconfirmed — not in abstract or metadata. The paper claims Pareto-frontier performance across multiple benchmarks but does not surface these specific numbers in accessible text. The strategy taxonomy (parallel/sequential/hierarchical/hybrid) also does not appear in accessible content. Mechanism framing is plausible but the claim's load-bearing quantitative support cannot be verified.

---

### [key: memory-architecture-complexity-dropout-risk]
- evidence: empirical
- confidence: medium
- group: task-tracking-quality
- sources: https://arxiv.org/pdf/2602.19320

**Claim:** Agentic memory taxonomy study (2026) finds that graph-based and episodic memory systems show the highest format error rates (30.38% for Nemori with Qwen-2.5-3B) compared to simpler append-only systems, and a backbone model drop from GPT-4o-mini to Qwen-2.5-3B causes a 43% relative accuracy decline (0.781 to 0.447) in the same architecture. The mechanism is that structural complexity in task-tracking increases maintenance overhead and format corruption risk, especially under weaker models. SimpleMem (lightweight semantic) achieves the best latency-accuracy tradeoff. Scope: conversational memory agents; failure mode amplified by weaker backbone models. Kit implication: task-tracking structures in a kit should default to the simplest viable format (append-only list) rather than graph or episodic structures; complexity in the checklist format itself becomes a dropout vector under weaker models.

**Verify note:** arXiv 2602.19320 confirmed. Nemori format error rate 30.38% with Qwen-2.5-3B confirmed (Table 4). Accuracy drop 0.781 to 0.447 confirmed; 43% relative decline is correct arithmetic. However, SimpleMem 'best latency-accuracy tradeoff' is inaccurate: it achieves the fastest latency (1.057s) but ranks 5th in semantic quality (0.289 score), making it a speed-favored option rather than a Pareto-optimal tradeoff. The broader principle (simpler structures degrade less under weaker models) is well-supported; the SimpleMem characterization overstates.

---

### [key: condition-constraint-check-failure-mode]
- evidence: empirical
- confidence: medium
- group: constraint-structure
- sources: https://arxiv.org/html/2505.16944v1

**Claim:** AgentIF (2025) error analysis finds that above 30% of constraint-following errors in agentic tasks come from incorrect condition checks — the model failing to determine whether a constraint applies at all — rather than failing to execute a constraint that was correctly identified. 'Example-based' constraints (~59% CSR) outperform 'condition constraints' (~61% CSR) suggesting concrete examples facilitate correct constraint triggering more than abstract conditions. The mechanism is that conditional constraint application requires a meta-level check ('does this constraint apply here?') that is separate from executing the constraint itself; this check is the more fragile operation. Scope: agentic tasks with tool invocations. Kit implication: kit instructions should prefer example-anchored constraints over conditional-logic constraints; where conditions are unavoidable, the condition check should be made explicit as its own numbered step before the action step.

**Verify note:** arXiv 2505.16944v1 confirmed. '30%+ of errors from incorrect condition checks' confirmed verbatim. However, the CSR percentages are numerically inverted: example-based constraints achieve ~61.4% CSR and condition constraints ~57.7% — but the claim states example-based ~59% outperforming condition constraints ~61%, reversing which number belongs to which category. The directional conclusion (examples beat conditions) is correct, but the specific figures as stated are wrong. 707-instruction dataset across 50 agentic tasks confirmed.

---

### [key: listing-alone-insufficient-need-detector]
- evidence: consensus
- group: compensatory-structure-design
- sources: https://arxiv.org/html/2410.02189v2, https://arxiv.org/html/2605.15425v1, https://arxiv.org/html/2505.16944v1

**Claim:** The combined evidence from AOP (detector ablation: -7.1pp without completeness check), RSTD (static decomposition increases retry cost 80.5% without runtime branching), and AgentIF (27.2% ISR despite models having instructions) converges on a consensus finding: pre-execution enumeration (listing tasks) is necessary but not sufficient for completeness. Without an explicit post-enumeration completeness check that verifies the list covers the original intent, AND without targeted recovery at the sub-task level, enumeration alone does not prevent dropout and can increase failure cost. This is practitioner consensus distilled from multiple empirical studies rather than a single controlled comparison. Kit implication: a minimal compensatory structure requires three components: (1) explicit pre-execution enumeration, (2) a completeness detector cross-checking the list against the original instruction, (3) sub-task-level retry rather than full-plan retry.

---

## Null results
- No direct controlled empirical comparison found between structured pre-task lists vs prose natural-language instructions on completeness specifically (query 3 returned no targeted study)
- No GitHub broad discovery angle produced new findings for this domain
- Plan-and-Solve original paper (arXiv 2305.04091) abstract does not report per-benchmark accuracy numbers; full PDF not parseable for specifics

## New angles surfaced
- Self-verification head architectures (unified generation-verification): SelfCheck paper and emergentmind self-verification topic report +2 to +14pp gains — fetch HTML version for mechanism and scope specifics
- Hierarchical working memory (HiAgent-style subgoal chunking): summarizes completed subtask observations once goals close — potential mechanism for preventing context overflow that causes late-task dropout
- Reinforcement learning for tool-use completeness reward: 2025 EMNLP paper on RL for LLM agent planning mentions tool-use completeness as a reward signal — may show what completeness metrics RL agents optimize toward
- Agent-dropout (dynamic agent elimination in multi-agent collaboration): paper on token-efficient multi-agent systems may contain dropout prevention findings applicable to single-agent sub-task elimination

