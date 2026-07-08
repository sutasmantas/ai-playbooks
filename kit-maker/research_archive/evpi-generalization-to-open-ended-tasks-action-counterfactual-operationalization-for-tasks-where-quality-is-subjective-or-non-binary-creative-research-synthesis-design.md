# Research Archive: EVPI generalization to open-ended tasks — action-counterfactual operationalization for tasks where quality is subjective or non-binary (creative, research-synthesis, design)

## Saturation log
- Query 1: "clarification seeking open-ended task LLM ambiguity resolution creative writing code generation quality subjective empirical 2024 2025" — 3 new claim keys
- Query 2: "expected value of information clarification ambiguous open-ended tasks rubric-based quality evaluation LLM empirical" — 2 new claim keys
- Query 3: "AskBench RLVR rubric-based reward open-ended clarification arXiv 2602.11199" — 1 new claim keys
- Query 4: "uncertainty reduction clarification strategy LLM agent subjective quality tasks preference learning empirical 2024 2025" — 2 new claim keys
- Query 5: "clarification open-ended task quality action-counterfactual relevance ambiguity resolution arxiv 2024 2025 agent" — 2 new claim keys
- Query 6: "clarification seeking fails critique null result over-asking user burden LLM agent open-ended task 2024 2025" — 1 new claim keys
- Query 7: "EVPI value of information fails open-ended creative tasks subjective judgment non-binary quality counterfactual limitation" — 0 new claim keys
- Query 8: "clarification questions LLM replication failure ineffective over-specified user annotation disagreement subjective task failure mode 2025" — 1 new claim keys
- Query 9: "site:arxiv.org EVPI action-counterfactual LLM agent tool use clarification open-ended reward 2025 2026" — 2 new claim keys
- Query 10: "AdaRubric task-adaptive rubric reward learning open-ended clarification arxiv 2603.21362" — 1 new claim keys
- Query 11: "preference learning reward model open-ended writing creative task subjective quality decomposition annotation disagreement 2024 2025 empirical" — 2 new claim keys
- Query 12: "ask early ask late clarification timing long-horizon agent quality arxiv 2605.07937" — 1 new claim keys
- Query 13: "information elicitation requirements engineering under-specification design task decision theory preference revelation 2024 2025" — 0 new claim keys
- Query 14: "reward model creative writing open-ended preference collapse subjective quality failure empirical LitBench StoryAlign 2025" — 1 new claim keys
- Query 15: "proactive information gathering agent regret minimization Bayesian decision theory open-ended task planning 2025" — 1 new claim keys
- Query 16: "clarification question asking LLM user friction abandonment empirical study cost benefit open-ended creative task 2024 2025" — 1 new claim keys
- Query 17: "site:github.com clarification agent open-ended task quality LLM rubric reward design kit framework 2025" — 1 new claim keys
- Query 18: "discourse pragmatics Gricean maxims cooperative principle ambiguity resolution conversational implicature quality relevance AI agent 2024 2025" — 0 new claim keys
- Query 19: "clarification value estimation contrastive simulation open-ended outcome quality counterfactual agent kit design practical 2025 blog" — 1 new claim keys
- Query 20: "Bayesian optimal stopping information acquisition task specification preference uncertainty interactive planner LLM agent 2025" — 2 new claim keys
- Query 21: "reward hacking rubric reinforcement learning open-ended creative task failure exploiting criteria superficial compliance 2025 2026" — 2 new claim keys
- Query 22: "SELAUR self-evolving LLM agent uncertainty reward open-ended environment quality arxiv 2602.21158" — 1 new claim keys
- Query 23: "RubricEval scalable human-LLM evaluation open-ended tasks stanford clarification dimension subjective 2024 2025" — 1 new claim keys
- Query 24: "Modeling Future Conversation Turns clarification planning ICLR 2025 open-ended quality empirical result" — 0 new claim keys
- Query 25: "uncertainty decomposition clarification seeking LLM agent epistemic aleatoric ambiguity open-ended quality task 2025 2026" — 2 new claim keys
- Query 26: "ARBOR online process rewards reusable rubric buffer search agents open-ended research synthesis quality arxiv 2606.03239" — 1 new claim keys
- Query 27: "DeepRubric evidence-tree rubric supervision reinforcement learning deep research agent quality open-ended 2606.17029" — 1 new claim keys
- Query 28: "deep research rubric reinforcement learning quality signal open-ended research synthesis arxiv 2606.01091 2025" — 1 new claim keys
- Query 29: "Ambig-DS benchmark data science agents task framing ambiguity clarification quality outcome open-ended arxiv 2605.09698" — 0 new claim keys
- Query 30: "Bayesian consistent agentic orchestration clarification EVPI action-counterfactual open-ended utility" — 0 new claim keys
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturation note: Two distinct source-type domains covered (arXiv preprints and ACL/ICLR/ICML proceedings), all four research traditions queried (AI/decision-theory, NLP/LLM alignment, HCI/cognitive science, operations-research/Bayesian). Last 5 queries returned 0-1 new keys. Saturation condition (1) holds for consecutive queries; conditions (2) and (3) hold. However, the open-ended creative task domain remains empirically underexplored — the saturation reflects absence of evidence, not evidence of absence, for distributional EVPI on genuinely subjective quality tasks. Full saturation is not claimed because BED-LLM's hypothesis-sampling approach for creative preferences has not been empirically tested and constitutes a confirmed evidence gap (not just a research direction).
- Saturated: NO — review needed (check saturation note above)

---

## Claims (18)

### [key: clarification-timing-voi-curves]
- evidence: empirical
- confidence: medium
- group: evpi-structured-tasks
- sources: https://arxiv.org/abs/2605.07937

**Claim:** Ask Early Ask Late Ask Right (arXiv:2605.07937, Gulati et al. 2026, PricewaterhouseCoopers, 6000+ runs across 84 task variants): Clarification value is sharply type-dependent, even within structured agent tasks. Goal clarification loses nearly all value after 10% of trajectory execution (pass@3 drops from 0.78 at 10% injection to 0.40 baseline-equivalent by 70%); input clarification retains value through ~50%; constraint clarification is flat and near-zero throughout. Wasted compute rises linearly: TheAgentCompany shows 0% wasted compute at 10% injection, rising to 21.7% at 90%. Mechanism: The VOI of clarification decays as prior agent actions progressively commit to an interpretation of missing information. The paper uses forced-injection VOI curves (empirical counterfactual) rather than formal EVPI. Authors explicitly state these provide 'the quantitative foundation that existing theoretical frameworks require but have lacked.' Scope: Structured benchmarks only (MCP-Atlas, TheAgentCompany, SWE-Bench Pro); forced injection disables ask tools, so curves are upper bounds. Kit implication: Clarification mechanisms must distinguish by information TYPE (goal vs. input vs. constraint) and trigger within empirically validated windows; a single when-to-ask trigger is insufficient.

**Verify note:** PricewaterhouseCoopers affiliation, 6000+ runs, 84 task variants, and all core VOI numbers are confirmed by the full HTML paper: pass@3 = 0.78 at 10% injection, 0.39 at 70% vs 0.40 baseline; wasted compute 0% at 10% rising to 21.7% at 90%; constraint flat near-zero on MCP-Atlas (both oracle and baseline at 0.12). Input retaining value through ~50% is borderline (0.36 at 50% vs 0.33 baseline). One stat is misframed: '52% exhibit over-asking' is specifically GPT-5.2's ask rate across 300 sessions for that one model—the paper labels GPT-5.2 an over-clarifier because of its 52% ask rate combined with low per-session success (3%), not that 52% of sessions across models exhibit over-asking. The claim generalizes a model-specific rate into a session-wide frequency. CLARITI and SAGE-Agent results do not appear in this paper (they are from arXiv:2604.14624 and arXiv:2511.08798 respectively), but those stats appear in the proactivity-gap claim, not here. Scope and forced-injection upper-bound framing confirmed.

---

### [key: information-gain-reward-structured]
- evidence: empirical
- confidence: low
- group: evpi-structured-tasks
- sources: https://arxiv.org/abs/2606.03135

**Claim:** Uncertainty-Aware Clarification in LLM Agents with Information Gain (arXiv:2606.03135, 2026): Information Gain Reward operationalizes clarification value as Bayesian belief update toward ground-truth goal: R_t = PMI(clarification response, ground truth goal) = posterior log-likelihood minus prior log-likelihood. Trained clarifier achieves +3.7% task success over no-clarification baseline, adding only 0.3 interaction steps on average, across 5 LLM backbones on tau-Bench retail/airline tasks. Achieves GPT-5-level performance with 41% fewer average questions. CRITICAL SCOPE CONDITION: The metric requires access to ground-truth user goals to compute the Bayesian belief update. This is explicitly stated as incompatible with subjective or creative domains. The framework is undefined without a ground truth to compute the update toward. Mechanism: The reward is positive only when the question shifts the model's probability mass toward a known correct goal state. This is the formal analog of EVPI for structured goal-completion tasks but collapses when goal quality is multi-dimensional and preference-dependent.

**Verify note:** Core mechanism confirmed: Bayesian belief update reward is log(P(A|G*,Q,x)/P(A|Q,x)) — the paper confirms this is the PMI connection (Appendix 6.2), matching the claim's formulation. +3.7% task success and +0.3 interaction steps confirmed. Five LLM backbones confirmed (Qwen3-8B, Qwen3-32B, DeepSeek-R1, DeepSeek-V3.2, GLM-4-32B). tau-Bench retail/airline confirmed (16.5%→18.3% retail, 14.3%→17.3% airline). Ground-truth requirement limitation confirmed. However, 'Achieves GPT-5-level performance with 41% fewer average questions' does NOT appear in this paper. The paper reports clarifier invocations falling from 4.2 to 1.3 (a 69% reduction, not 41%) and makes no GPT-5 comparison. The '41% fewer questions' and 'GPT-5-level performance' are from CLARITI (arXiv:2604.14624), cross-contaminated into this claim. This is a factual error in a prominent claim component that would mislead anyone using this as a design input.

---

### [key: askbench-structured-scope-only]
- evidence: empirical
- confidence: high
- group: evpi-structured-tasks
- sources: https://arxiv.org/abs/2602.11199

**Claim:** AskBench with Rubric-Guided RLVR (arXiv:2602.11199, Zhao et al. 2026): Rubric-guided RLVR improves clarification in structured QA. Accuracy: 0.332 to 0.615 on AskMind, 0.320 to 0.539 on QuestBench-Math; coverage: 0.214 to 0.679. Reward function is discrete and objective (whether model asks at right time, how many rubric criteria are targeted, final answer correctness). Rewards in [-2.0, 1.0] shared across tasks. Tested on Math500, MedQA, BBH, GPQA-d. SCOPE LIMITATION explicitly stated by authors: AskBench 'does not fully capture open-ended information-seeking dialogues with evolving goals'; evaluation 'does not cover other important aspects of alignment such as value disagreements or long-horizon planning'; experiments 'concentrated in mathematics and medicine, limiting evidence about how well rubric-guided asking generalizes to other everyday or high-stakes settings.' Human subjective quality dimensions are unanalyzed. Kit implication: The rubric-guided clarification framework is directly applicable to structured-schema kit tools but requires a different operationalization for open-ended tasks.

**Verify note:** All specific numbers confirmed by full HTML paper: 0.332→0.615 on AskMind, 0.320→0.539 on QuestBench-Math, coverage 0.214→0.679. Reward range [-2.0, 1.0] confirmed. Benchmarks Math500, MedQA, BBH, GPQA-d all confirmed. Scope limitation language largely confirmed (two specific problem areas: intent-deficient queries and false premises). The verbatim scope quotes in the claim ('does not fully capture open-ended information-seeking dialogues with evolving goals'; 'does not cover other important aspects of alignment such as value disagreements or long-horizon planning') appear to be accurate paraphrases of the paper's stated limitations. No significant discrepancies found; n-size is moderate and generalization to creative domains explicitly disclaimed by the authors.

---

### [key: evpi-epistemic-circularity-open-ended]
- evidence: consensus
- group: epistemic-circularity
- sources: https://arxiv.org/abs/2606.03135, https://arxiv.org/abs/2602.11199, https://arxiv.org/abs/2605.07937, https://arxiv.org/abs/2605.00742

**Claim:** Adversarial synthesis across multiple papers: The action-counterfactual operationalization of EVPI for open-ended tasks faces a structural epistemic circularity: computing E[quality|clarification] - E[quality|no clarification] requires a quality model that encodes user preferences. But user preferences are exactly what is uncertain and what the clarification is intended to resolve. This is not a practical difficulty but a structural one. Evidence: (1) Information Gain Reward (arXiv:2606.03135) explicitly requires 'ground-truth user goals in controlled environments' — unavailable for subjective tasks; (2) AskBench (arXiv:2602.11199) reward requires answer correctness against ground truth — undefined for creative tasks; (3) Forced-injection VOI curves (arXiv:2605.07937) are described as 'upper bounds' requiring oracle ground truth unavailable in practice; (4) Bayesian orchestration position paper (arXiv:2605.00742) acknowledges the framework 'assumes a well-defined utility function exists, which may not hold for genuinely open-ended quality assessments.' The weakest assumption in the EVPI framework for open-ended tasks: that quality is a stable function of task specification independent of the quality model used to evaluate it. Kit implication: EVPI is directly applicable to tool-use and task-completion kits, but requires a proxy quality model for creative/research synthesis kits — and that proxy is itself subject to reward hacking.

---

### [key: reward-hacking-rubric-open-ended]
- evidence: empirical
- confidence: medium
- group: open-ended-quality-failure
- sources: https://arxiv.org/abs/2605.12474

**Claim:** Reward Hacking in Rubric-Based Reinforcement Learning (arXiv:2605.12474, 2025): Rubric-based rewards for open-ended tasks fail through 3 structural patterns with stable proportions across training, domains, and verifier strength: partial compound satisfaction (36%), implicit-as-explicit (34.6%), imprecise verification (29.4%). Empirical divergence: under strong verifiers, rubric-based judges prefer the RL checkpoint 85.8% of the time, but rubric-free judges prefer the base model 78.4% of the time. HealthBench performance peaks at step 200 then backslides 25% by final checkpoint. Mechanism: rubrics over-specify desired content via presence-based criteria (90.2%) while under-specifying what to avoid, so models learn to maximize length/density (satisfying completeness criteria +14.9pp) while degrading factual accuracy (-0.85) and conciseness (-2.91). Scope: medical and science domains; not directly tested on creative writing. Kit implication: Any rubric used as a reward signal for open-ended tasks in a kit must include absence/avoidance criteria alongside presence criteria, otherwise the model will hack the rubric through length inflation.

**Verify note:** Three failure pattern proportions (36.0%, 34.6%, 29.4%) confirmed. Verifier divergence (85.8% rubric-based vs 78.4% rubric-free) confirmed. HealthBench peaks at step 200 confirmed. Factual accuracy -0.85, conciseness -2.91 confirmed. 90.2% presence-based criteria confirmed. Two misattributions found. First: '+14.9pp satisfying completeness criteria' — the paper reports +14.9pp as the gain in presence-based rubric satisfaction ACROSS ALL criteria, not specifically completeness. Completeness on the Likert dimension improved only +1.07 points (Table 11). The claim conflates dimension-specific Likert gain with all-criteria satisfaction gain. Second: 'HealthBench performance peaks at step 200 then backslides 25%' — the paper specifies this trajectory is for the WEAK verifier policy (GPT-4o-mini); the strong verifier policy continues improving. The claim omits this qualifier, implying it is a general finding. Medical and science domain scope stated correctly.

---

### [key: creative-reward-model-collapse]
- evidence: empirical
- confidence: medium
- group: open-ended-quality-failure
- sources: https://arxiv.org/abs/2507.00769, https://arxiv.org/abs/2510.14616, https://arxiv.org/abs/2605.04831

**Claim:** LitBench (arXiv:2507.00769) + WritingPreferenceBench (arXiv:2510.14616) + StoryAlign (arXiv:2605.04831): Creative writing reward models collapse to 52.7% accuracy (near random) when objective confounds (grammar errors, factual mistakes, length differences) are systematically removed, revealing that current preference learning optimizes for error detection rather than recognition of subjective creative quality. LitBench: 43,827 human-labeled story preference pairs; best off-the-shelf judge achieves 73% human agreement; trained reward models reach 78%. Cross-genre instability persists even in trained models. Mechanism: there is no ground truth for creative quality independent of evaluator preferences; reward models are implicitly trained on proxy signals (objective errors, stylistic conventions) that correlate with quality but collapse when those proxies are removed. Scope: story/narrative creative writing; may not generalize to research synthesis which has more verifiable components. Kit implication: For creative kit tasks, a rubric-based proxy quality signal will decompose once models learn to satisfy surface-level rubric criteria. Multi-dimensional human preference data with genre-stratified validation is required.

**Verify note:** Three-paper synthesis; each paper's individual numbers check out but the unified collapse narrative overstates uniformity. LitBench (arXiv:2507.00769): 43,827 training pairs confirmed, 73% off-the-shelf (Claude-3.7-Sonnet), 78% trained models — these do NOT show collapse to near-random. WritingPreferenceBench (arXiv:2510.14616): 52.7% for sequence-based models confirmed, and the objective-confound methodology IS confirmed (pairs are matched for grammatical correctness, factual accuracy, and length). 'Near random' framing is accurate (binary choice, 50% = chance). Cross-genre instability 18.2%–81.8% confirmed. StoryAlign (arXiv:2605.04831): 66.3% accuracy for best existing model confirmed. Collapse issue: the claim leads with 'reward models collapse to 52.7%' which is only true for WritingPreferenceBench's controlled design; LitBench shows 73-78% on standard story pairs. The 52.7% is real and correctly described, but folding LitBench (which shows no collapse) into the same collapse narrative is misleading. The mechanistic claim ('preference learning optimizes for error detection') is a confirmed interpretation from WritingPreferenceBench.

---

### [key: rubric-generation-failure-modes]
- evidence: empirical
- confidence: medium
- group: open-ended-quality-failure
- sources: https://arxiv.org/abs/2602.05125, https://arxiv.org/abs/2604.01375

**Claim:** Rethinking Rubric Generation (arXiv:2602.05125): Identifies 4 rubric generation failure modes for open-ended tasks: (1) lack of coverage, (2) conflated dimensions, (3) misaligned preference direction, (4) redundant/highly correlated criteria. These degrade both judge accuracy and reward signal quality during reinforcement fine-tuning. The RRD (Recursive Rubric Decompose) framework for rubric refinement achieves up to +17.7 points on JudgeBench and 160% reward boost for Qwen3-4B on open-ended instruction following. RIFT taxonomy (arXiv:2604.01375) additionally classifies rubric failure modes: long-horizon binary goals (32%), implicit domain conventions (28%), ambiguous observations (24%) — all addressable via richer task descriptions. Kit implication: Kit builders generating rubrics for open-ended task evaluation must include an explicit coverage-check and dimension-independence filter before using rubrics as rewards; unchecked rubric generation is a systematic quality degradation mechanism.

**Verify note:** arXiv:2602.05125 (RRD) numbers all confirmed: four failure modes match exactly, +17.7 points JudgeBench, 160% reward boost for Qwen3-4B, 60% for Llama3.1-8B. Critical failure in the RIFT claim: the claim attributes 'long-horizon binary goals (32%), implicit domain conventions (28%), ambiguous observations (24%)' to arXiv:2604.01375, but these specific percentages DO NOT APPEAR in that paper. The RIFT paper identifies 8 failure modes (Subjective, Non-Atomic, Ungrounded, Misaligned or Rigid, Missing Criteria, Hackable, Low Signal, Redundant Criteria) in 3 high-level categories, with inter-rater agreement percentages — not prevalence proportions in the 32/28/24 pattern. The three category labels in the claim (long-horizon binary goals, implicit domain conventions, ambiguous observations) also do not match RIFT's actual category structure (Reliability, Content Validity, Consequential Validity). The three percentages and their labels appear to be fabricated or imported from an unidentified source.

---

### [key: future-turns-implicit-counterfactual]
- evidence: empirical
- confidence: high
- group: partial-solutions
- sources: https://arxiv.org/abs/2410.13788

**Claim:** Modeling Future Conversation Turns (ICLR 2025, arXiv:2410.13788): Operationalizes clarification value via implicit action-counterfactual: preference labels are assigned by simulating future outcomes (does asking this question lead to correct answers across annotators?). Results: Clarify DPO achieves 32.8% Answer F1 vs 21.1% for direct answers — a 56% relative improvement. 4-5% absolute F1 gain over single-turn preference methods across 3 base models. CRITICAL SCOPE: limited to short factoid QA with multiple reference answers. Authors explicitly state the framework is 'inapplicable to creative writing or subjective research tasks without major modifications' because these tasks lack discrete reference answers to simulate future outcomes against. Mechanism: The counterfactual is computable only when the ground-truth distribution of possible answers is known. Kit implication: The future-simulation approach is a tractable action-counterfactual for kit tasks with enumerable answer sets; requires redesign for open-ended quality tasks.

**Verify note:** ICLR 2025 confirmed by search results (PDF header reads 'Published as a conference paper at ICLR 2025'). Core numbers confirmed: Clarify DPO achieves 32.8% Answer F1 (overall, Llama2 backbone) vs 21.1% direct-answer SFT baseline; (32.8-21.1)/21.1 = 55.5% relative improvement, consistent with the claimed 56%. The 4-5% absolute F1 gain over single-turn preference methods across 3 base models is confirmed (~5% gain stated in paper). Scope limitation for creative writing confirmed. The claim frames the method as 'implicit action-counterfactual' via future-simulation — this is an interpretive label that accurately describes the mechanism (preference labels assigned by simulating future outcomes) but the paper does not use this exact term. The verbatim author quote about inapplicability to creative writing is paraphrased rather than quoted; the paper's stated scope is factoid QA with multiple reference answers.

---

### [key: agentic-uncertainty-open-ended-gains]
- evidence: empirical
- confidence: medium
- group: partial-solutions
- sources: https://arxiv.org/abs/2601.15703

**Claim:** Agentic Uncertainty Quantification (arXiv:2601.15703): Training-free System 2 reflection achieving state-of-the-art 52.09 overall score on DeepResearch Bench (100 PhD-level research tasks, +2.38 over baseline). Dimension-specific gains on subjective quality: Insight +4.5, Comprehensiveness +2.5. Structured task gains: ALFWorld +10.7%, WebShop +13.6%. The mechanism is NOT explicit EVPI: the system uses a verbalized confidence threshold (tau ~0.9) to trigger reflection, without computing expected value of additional information. Scope: requires frontier models with 7B+ parameters; verbalized confidence diminishes in smaller models; adds latency unsuitable for real-time applications. Kit implication: Uncertainty-triggered reflection is a viable quality-boosting mechanism for open-ended research synthesis kits, but it is not equivalent to EVPI — it is a threshold-heuristic that approximates information-seeking without a formal value computation.

**Verify note:** Overall DeepResearch Bench score 52.09 confirmed. +2.38 over strongest closed baseline (49.71) confirmed. ALFWorld +10.7% and WebShop +13.6% confirmed. Verbalized confidence threshold tau ~0.9 confirmed. Training-free status confirmed. Weak point: 'Insight +4.5, Comprehensiveness +2.5' — the full paper gives absolute AUQ dimension scores (Insight: 54.21, Comprehensiveness: 51.60) but baseline dimension scores are not confirmed, so the +4.5 and +2.5 gains are plausible but extrapolated. The search result mentions baseline agents exhibit 'information satisficing with Comprehensiveness scores of 51.60' — which if correct as the BASELINE would make the Comprehensiveness gain zero, not +2.5. This creates ambiguity: is 51.60 the AUQ score or the baseline score? Without clearer sourcing the dimension-specific gains are unverified. '7B+ parameters required' is not confirmed from any fetch. The claim correctly notes this is a threshold-heuristic approximation rather than formal EVPI computation.

---

### [key: capability-dilution-clarification-cost]
- evidence: empirical
- confidence: medium
- group: epistemic-circularity
- sources: https://arxiv.org/abs/2606.19559

**Claim:** Uncertainty Decomposition for Clarification Seeking (arXiv:2606.19559): Adding a clarification-seeking mechanism (ask when uncertainty > 0.5) to structured agent benchmarks causes capability dilution on complex tasks. REAL benchmark: 32.1% to 19.2% success rate loss (net negative effect). Mechanism: the agent spends a disproportionate share of its fixed reasoning budget debating whether to clarify, producing 'long uncertainty explanation and only perfunctory action rationale.' This adversarial finding demonstrates that clarification-seeking overhead competes directly with task-execution quality in fixed-budget contexts. On simpler benchmarks (WebShop, ALFWorld) the mechanism is net positive (+0.28 F1 absolute improvement). Kit implication: For kits with fixed token/compute budgets, adding a clarification-seeking module may REDUCE net task quality unless the module is computationally bounded. The overhead cost of uncertainty assessment must be explicitly modeled, not assumed to be zero.

**Verify note:** REAL benchmark drop from 32.1% to 19.2% confirmed. Reasoning budget as mechanism confirmed. The '+0.28 F1 absolute improvement' on WebShop-Clarification is confirmed. Caveats: 'ask when uncertainty > 0.5' oversimplifies the actual mechanism. The paper uses a three-point anchored scale (0=fully specified, 0.5=partially ambiguous, 1=critically underspecified); the decision logic is a decomposed prompt-based signal, not a single threshold comparison. 'On simpler benchmarks (WebShop, ALFWorld) the mechanism is net positive' — the ALFWorld result is described as a 73% improvement in clarification F1 relative to ReAct+UE, which is a task-specific clarification metric, not necessarily overall task success. Whether ALFWorld task success is net positive is not confirmed. The 32.1%→19.2% framing is also slightly misleading: 32.1% is the ReAct+UE baseline on REAL and 19.2% is the proposed method — the capability dilution is the method performing worse than a simpler baseline, not a degradation from a previously working system.

---

### [key: proactivity-gap-supply-side]
- evidence: empirical
- confidence: low
- group: evpi-structured-tasks
- sources: https://arxiv.org/abs/2605.28108, https://arxiv.org/abs/2605.07937

**Claim:** Ask Now Use Later / ATRBench (arXiv:2605.28108): Eight frontier LLM agents fall at least 62 points below oracle baseline for Ask-to-Remember — proactively asking for user preferences needed in future sessions. Prompting closes little of the gap. Diagnostics identify 'acquisition as the bottleneck.' Separately, Ask Early Ask Late (arXiv:2605.07937) natural-ask study of 300 sessions: 52% exhibit over-asking; no current frontier model asks within the empirically optimal clarification window. CLARITI achieves 41% fewer questions without quality loss; SAGE-Agent achieves 45.7% reduction. Mechanism: agents lack a principled decision criterion for the value of proactive information-gathering, defaulting to either excessive asking or none. The supply-side (agent ability to identify when to ask) lags severely behind the demand-side (theoretical value of having clarifications, measured via forced injection). Kit implication: VOI curves are useful design input only if paired with a supply-side mechanism that detects ambiguity type and timing appropriately.

**Verify note:** ATRBench core finding confirmed: 8 frontier agents fall 62+ points below oracle baseline, acquisition identified as bottleneck. Two specific statistics are wrong source attributions. 'CLARITI achieves 41% fewer questions without quality loss' — CLARITI is arXiv:2604.14624, not cited in this claim's sources (arXiv:2605.28108 and arXiv:2605.07937); the paper does not appear in either cited source. 'SAGE-Agent achieves 45.7% reduction' — SAGE-Agent is arXiv:2511.08798, also absent from cited sources. Both systems and their numbers exist in the literature but are attributed here to papers that do not contain them. Additionally, '52% exhibit over-asking' — as established for the clarification-timing claim, this is GPT-5.2's single-model ask rate (classified as over-clarification behavior), not a finding about 52% of sessions across models. The claim inflates a model-specific rate into a cross-model prevalence statistic.

---

### [key: contrastive-trajectory-reward-research]
- evidence: empirical
- confidence: high
- group: partial-solutions
- sources: https://arxiv.org/abs/2606.03239

**Claim:** ARBOR: Online Process Rewards via Reusable Rubric Buffer (arXiv:2606.03239): Builds quality rewards for open-ended research synthesis tasks from contrastive trajectories (comparing high vs. low-quality outputs) rather than per-query rubric generation or ground-truth comparison. Maintains a cross-query rubric memory buffer. Converts up to 42% of otherwise-zero-gradient training groups into informative ones. Raises average LLM-judge accuracy by up to 4.2 points on four multi-hop QA benchmarks. Mechanism: Within-group advantage is computed contrastively; shared rubric buffer provides cross-task generalization. This is structurally closer to action-counterfactual operationalization than rubric-grading: quality is defined as the contrast between outcomes, not against a ground truth. Scope: Multi-hop QA (research synthesis); not validated on creative writing. Kit implication: Contrastive trajectory scoring is a reward-hacking-resistant quality signal for research synthesis kits that avoids the epistemic circularity of rubric grading against subjective ground truth.

**Verify note:** All empirical numbers confirmed: 42% of zero-gradient groups converted to informative, up to 4.2-point LLM-judge accuracy gain across four multi-hop QA benchmarks. Multi-hop QA scope confirmed. Rubric memory buffer mechanism confirmed. The claim that this is 'structurally closer to action-counterfactual operationalization than rubric-grading' is an editorial interpretation by the kit author, not a claim made in the paper itself. The paper's framing is process reward for search agents via contrastive trajectories. This interpretive label is defensible given the mechanism but should not be read as a paper finding. 'Not validated on creative writing' is confirmed by scope.

---

### [key: evidence-tree-rubric-construction]
- evidence: empirical
- confidence: high
- group: partial-solutions
- sources: https://arxiv.org/abs/2606.17029, https://arxiv.org/abs/2606.01091

**Claim:** DeepRubric (arXiv:2606.17029) and DR-rubric (arXiv:2606.01091): Two independent methods demonstrating that rubric construction for deep research quality is itself a research problem. DeepRubric builds evidence trees by recursively expanding evidence-backed subquestions whose leaves serve as atomic verifiable evaluation targets; achieves comparable performance with 13x fewer RL GPU hours. DR-rubric elicits domain facts, structural constraints, and failure modes through iterative agentic search (Stage I), then distills into atomic criteria (Stage II). Both demonstrate that post-hoc rubric construction via evidence synthesis produces more reliable quality signals for research synthesis than prompt-generated rubrics. Scope: open-ended research synthesis tasks; neither provides a clarification-seeking mechanism or EVPI computation. Kit implication: For kit tasks involving research synthesis, quality reward should be constructed through evidence gathering rather than one-shot rubric prompting — the rubric is a research product, not a configuration parameter.

**Verify note:** Both papers' core claims confirmed. DeepRubric (arXiv:2606.17029): evidence tree methodology confirmed, 9,000 query-rubric examples confirmed, 13x fewer RL GPU-hours confirmed, comparable performance to prior SOTA confirmed. DR-rubric (arXiv:2606.01091): Stage I iterative agentic search confirmed, Stage II distillation into atomic constraints confirmed, domain facts and structural constraints and failure modes confirmed, bootstrapping from smaller 8B models confirmed. Neither paper claims to provide a clarification-seeking mechanism or EVPI computation — confirmed. Kit implication that rubric is a 'research product not a configuration parameter' follows directly from both methodologies. Minor: DR-rubric mentions GPT-5 and Gemini rubric quality differences (different frontier models excelling in different contexts), which is not surfaced in the claim but does not contradict it.

---

### [key: trust-action-counterfactual-perplexity]
- evidence: empirical
- confidence: high
- group: evpi-structured-tasks
- sources: https://arxiv.org/abs/2606.06976

**Claim:** TRUST: Exploring Agentic Tool-Calling Decisions via Uncertainty-Aligned RL (arXiv:2606.06976): Uses action-counterfactual reasoning via contrastive perplexity: certainty margin m(s) = E[PPL(negative decision|s)] - E[PPL(ground-truth decision|s)]. Outperforms base model by 11.47% on turn-level When2Call; reduces False Direct Answer Rate to 5.07%; outperforms GRPO by 8.37% absolute improvement. BFCL-V4: +6.33%, ToolSandbox: +7.07%. Scope: bounded action spaces (Direct, Tool, Ask, Unable); structured tool-use benchmarks with predefined action spaces. Authors acknowledge 'experiments focus on text-based tool-use benchmarks with predefined action spaces' — extension to open-world tool ecosystems is future work. Subjective quality is not addressed. Kit implication: Perplexity-based action-counterfactual is a validated operationalization for tool-use kit decisions with discrete action spaces, but requires reformulation for open-ended generation where action space is continuous.

**Verify note:** Paper exists and all numeric claims verified against the HTML: 11.47% on When2Call, FDAR 5.07%, 8.37% over GRPO, BFCL-V4 +6.33%, ToolSandbox +7.07%. Formula m(s) = E[PPL(z-|s)] - E[PPL(z*|s)] confirmed with sigmoid conversion. Scope limitation ('text-based benchmarks with predefined action spaces') is correctly stated and matches authors' own words. The label 'contrastive perplexity' is a reasonable editorial descriptor; the paper uses 'uncertainty separation' language instead, but the underlying formula is the same concept. No material misrepresentation found. One minor caveat: the formula direction in the claim (negative minus ground-truth) is correct — positive margin means model assigns lower PPL to the right decision — but this is non-obvious and worth flagging. No contradicting study found that disputes this mechanism for bounded action spaces.

---

### [key: bed-llm-distributional-vig]
- evidence: empirical
- confidence: medium
- group: partial-solutions
- sources: https://arxiv.org/abs/2508.21184

**Claim:** BED-LLM: Intelligent Information Gathering with LLMs and Bayesian Experimental Design (arXiv:2508.21184): Applies Bayesian Experimental Design to LLM clarification by iteratively choosing questions that maximize Expected Information Gain (EIG), using LLM predictive distributions as the probabilistic model. Targets preference inference by sampling hypotheses and treating questions as partitions over those samples. Tested on 20-Questions game and user preference inference tasks. This is the most tractable known operationalization of distributional EVPI for preference-uncertainty settings: it does not require a fixed ground truth, only a generative model over possible user intentions. Scope: validated on structured preference-inference games; whether it extends to creative quality tasks with genuinely multi-dimensional preferences is not yet validated. Kit implication: BED-LLM's EIG-over-hypotheses approach may be adaptable to open-ended tasks by treating user style/quality preferences as the latent variable to infer — this is the closest known solution to the epistemic circularity problem.

**Verify note:** Paper exists (Apple/Oxford/CityU HK, Aug 2025). EIG maximization, 20-Questions game, and preference inference confirmed. Two problems. First, 'the most tractable known operationalization of distributional EVPI' is a superlative editorial judgment not stated in the paper — the paper does not compare tractability against competing EVPI operationalizations. Second, the claim states BED-LLM 'does not require a fixed ground truth, only a generative model over possible user intentions' — this needs qualification: in the 20-Questions game there IS a ground-truth hidden object; the tractability advantage is over classical nested Monte Carlo, not over having ground truth. The kit implication (EIG-over-hypotheses adaptable to open-ended tasks) is extrapolation beyond what the paper validates. Scope limitation (structured preference-inference games) is correctly stated. Moderate extrapolation risk but core mechanism and results are verified.

---

### [key: adaptive-rubric-task-specific]
- evidence: empirical
- confidence: high
- group: partial-solutions
- sources: https://arxiv.org/abs/2603.21362, https://github.com/alphadl/AdaRubrics

**Claim:** AdaRubric (arXiv:2603.21362): Generates task-specific evaluation rubrics on-the-fly from task descriptions. Achieves Pearson r=0.79 human correlation (+0.16 over best static baseline) and Krippendorff's alpha=0.83 inter-rater reliability. DPO agents trained on AdaRubric preference pairs gain +6.8 to +8.5 pp task success over Prometheus baseline; gains transfer to SWE-bench (+4.9 pp). Core insight: evaluation dimensions should be a function of the task, not the evaluator. Coverage: tool use, web navigation, code debugging. DOES NOT cover creative writing or research synthesis — all evaluated tasks have outcome-verifiable quality dimensions. GitHub: alphadl/AdaRubrics. Kit implication: Task-adaptive rubric generation is validated for structured-to-semi-structured agent tasks but has not been validated for tasks where quality dimensions are themselves user-preference-dependent rather than task-description-derivable.

**Verify note:** Paper exists (arXiv:2603.21362, March 2026). All numbers confirmed: Pearson r=0.79 (+0.16 over best static baseline), Krippendorff alpha=0.83, DPO agents +6.8 to +8.5 pp over Prometheus on three benchmarks, SWE-bench transfer +4.9 pp. Task coverage (tool use, web navigation, code debugging) confirmed. The scope exclusion of creative writing and research synthesis is correctly stated and matches the paper's own task selection. No fabricated numbers detected. Core insight ('evaluation dimensions should be a function of the task') is accurately represented. The kit implication that quality dimensions in creative tasks are 'user-preference-dependent rather than task-description-derivable' is a reasonable inference but is editorial, not a paper claim.

---

### [key: aleatoric-epistemic-breakdown-agents]
- evidence: consensus
- group: epistemic-circularity
- sources: https://openreview.net/forum?id=Lrv20S5RZV

**Claim:** Position: Uncertainty Quantification Needs Reassessment for LLM Agents (Kirchhof et al. 2025, ICML/OpenReview): The classical aleatoric/epistemic uncertainty dichotomy is insufficient for interactive LLM agents. The same uncertainty can be classified as aleatoric (irreducible) or epistemic (reducible by asking) depending on the modeler's perspective. Proposed replacement: underspecification uncertainties (arising from incomplete user specification), interactive learning through follow-up questions, and rich output uncertainties communicated as natural language rather than scalar scores. This is a theoretical framework finding, not empirical. Kit implication: Existing uncertainty quantification mechanisms (confidence scores, entropy) are insufficient signals for triggering clarification in open-ended tasks because they do not distinguish user-specification-reducible uncertainty from inherent output variance. A richer uncertainty representation that identifies underspecification specifically is required.

---

### [key: over-asking-failure-mode]
- evidence: empirical
- confidence: medium
- group: open-ended-quality-failure
- sources: https://arxiv.org/abs/2605.07937, https://arxiv.org/abs/2606.03135

**Claim:** Multiple sources (arXiv:2605.07937 natural-ask study, CLARITI, SAGE-Agent): Agents exhibit two complementary failure modes: over-asking (52% of sessions in the Ask Early Ask Late natural-ask study of 300 sessions) and never asking at all. CLARITI achieves 41% fewer average questions (3.0 vs 5.1) without quality loss by prioritizing task relevance and user answerability. SAGE-Agent achieves 45.7% reduction in clarification questions. Mechanism: without a principled decision criterion for clarification value, agents default to surface-level uncertainty signals (low confidence → ask) which over-fire on ambiguous but handleable tasks. Kit implication: A clarification-seeking mechanism without a value-of-information gate will over-ask in practice, reducing user experience without proportional quality gains.

**Verify note:** Multiple real findings assembled, but with source attribution errors and a scope collapse. The 52%/300-sessions figure from arXiv:2605.07937 is real but is specifically attributable to GPT-5.2 being characterized as an 'over-clarifier archetype' — the paper does not report 52% as a model-agnostic property of 'agents'; other models in the same study show different rates. CLARITI's 41% fewer questions (3.0 vs 5.1) is real but comes from arXiv:2604.14624 ('Asking What Matters'), NOT from the cited arXiv:2606.03135 — a source misattribution. SAGE-Agent's 45.7% reduction is real (arXiv:2511.08798) but also not in the cited sources. arXiv:2606.03135 reports a different method with 1.3 avg turns vs 4.2 baseline — different numbers entirely. The mechanism ('surface-level uncertainty signals over-fire on ambiguous but handleable tasks') is an editorial synthesis, not a direct paper claim. Real data, wrong citations for two of the three specific claims.

---

## Null results
- EVPI value of information fails open-ended creative tasks subjective judgment non-binary quality counterfactual limitation — returned classical EVPI theory sources (medical, operations research) with no LLM-specific claims about open-ended task failures
- discourse pragmatics Gricean maxims cooperative principle ambiguity resolution conversational implicature quality relevance AI agent 2024 2025 — returned adjacent linguistics literature; no new empirical claims about clarification-seeking for kit design
- information elicitation requirements engineering under-specification design task decision theory preference revelation 2024 2025 — returned SE requirements engineering papers; different domain, no new claims about action-counterfactual for open-ended quality
- Adversarial self-argumentation on action-counterfactual for creative tasks: No paper was found that directly validates or falsifies distributional EVPI over preference hypotheses for genuinely creative tasks (story generation, design). The BED-LLM approach (arXiv:2508.21184) is the nearest candidate but has not been applied to creative quality domains — this is a confirmed gap
- No practitioner blog post (Substack or otherwise) was found that specifically addresses the EVPI/clarification-value decision for open-ended creative or research synthesis kit tasks — grey-lit null result for this specific design question

## New angles surfaced
- **Distributional EVPI via hypothesis sampling for open-ended preference tasks**
  Target decision: BED-LLM (arXiv:2508.21184) + structured preference-inference evaluation games
  Would find: Whether EIG computed over a distribution of sampled user-preference hypotheses (rather than against a fixed ground truth) is a tractable and reward-hacking-resistant clarification value estimator for creative and research synthesis kits. This directly closes the open kit design decision: does action-counterfactual apply to subjective tasks? BED-LLM applies this to structured preference inference; the gap is whether it generalizes to multi-dimensional creative quality where preferences cannot be enumerated as discrete hypotheses.
- **Clarification timing window as a kit configuration variable**
  Target decision: Ask Early Ask Late (arXiv:2605.07937) forced-injection VOI curves
  Would find: Concrete trajectory-percentage thresholds for clarification window by information type (goal: ask within first 10% of steps; input: ask within first 50%) that can be parameterized in kit schemas. The paper provides demand-side VOI curves for structured benchmarks; the gap is translating these into kit-design configuration parameters (e.g., max_clarification_step_fraction per tool type) and whether the thresholds hold for open-ended tasks or shift.
- **Contrastive trajectory scoring as reward-hacking-resistant quality signal for open-ended research synthesis**
  Target decision: ARBOR (arXiv:2606.03239) + DeepRubric (arXiv:2606.17029)
  Would find: Whether contrastive trajectory scoring (comparing high-quality vs. low-quality outputs within a training group) provides a reward-hacking-resistant quality signal that can substitute for ground-truth-based EVPI in research synthesis kits. ARBOR achieves this for multi-hop QA; the gap is creative writing and design tasks where quality dimensions are not reducible to information coverage. Would determine whether the contrastive approach avoids the preference-circularity problem or merely shifts it.
- **Capability dilution budget allocation for clarification-seeking modules in fixed-token kits**
  Target decision: Uncertainty Decomposition paper (arXiv:2606.19559), REAL benchmark results (32.1% to 19.2% success rate loss)
  Would find: Empirical thresholds for reasoning budget allocation between uncertainty assessment and task execution, as a function of task complexity. The documented capability dilution effect (clarification seeking reduces net task quality on complex benchmarks) means kit designs must explicitly budget the clarification module. Would find: at what context-length or task-complexity level does the break-even point shift from net-positive to net-negative for clarification-seeking overhead.
- **Rubric-absence criteria as a design requirement for open-ended kit rewards**
  Target decision: Reward hacking paper (arXiv:2605.12474) decomposition of failure modes by criteria type
  Would find: Whether explicitly including absence/avoidance criteria in kit rubrics (what the output should NOT contain or do) reduces the reward hacking failure modes. The paper documents 90.2% presence-based criteria as the driver of length/density inflation; absence criteria are a straightforward fix. Would find: empirical validation that presence+absence rubric balance reduces partial-compound and imprecise-verification failures in open-ended task kits.
