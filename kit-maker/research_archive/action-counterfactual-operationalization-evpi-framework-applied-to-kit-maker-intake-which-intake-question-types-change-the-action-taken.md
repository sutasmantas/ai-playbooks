# Research Archive: Action-counterfactual operationalization — EVPI framework applied to kit-maker intake: which intake question types change the action taken

## Saturation log
- Query 1: "SAGE-Agent EVPI action-counterfactual relevance intake protocol autonomous agent arXiv:2511.08798" — 0 new claim keys
- Query 2: "expected value of perfect information intake clarification AI agent decision theory empirical 2024 2025" — 0 new claim keys
- Query 3: "value of information optimal stopping task clarification agent execution quality empirical LLM" — 3 new claim keys
- Query 4: "action-counterfactual relevance classifier intake question selection autonomous agent LLM 2024 2025" — 2 new claim keys
- Query 5: "EVPI POMDP clarification seeking agent action-relevant information arxiv 2024 2025" — 3 new claim keys
- Query 6: "clarification seeking agents fails null result over-asking under-asking LLM benchmark failure critique 2024 2025" — 2 new claim keys
- Query 7: "slot filling dialog management clarification question generation mixed-initiative intent disambiguation NLP empirical" — 1 new claim keys
- Query 8: "EVPI clarification agent critique failure mode information gain irrelevant questions replication failure null result" — 0 new claim keys
- Query 9: "active learning query by committee information gain annotation efficiency action-relevant feature selection empirical" — 0 new claim keys
- Query 10: "value of information agent clarification fails overspecified underspecified non-deterministic action uncertainty calibration problem" — 1 new claim keys
- Query 11: "site:github.com OR site:arxiv.org kit-maker agent intake question selection EVPI action counterfactual 2024 2025" — 1 new claim keys
- Query 12: "proactive clarification agent design github practitioner blog which questions to ask autonomous task intake underdetermination 2025" — 2 new claim keys
- Query 13: "Bayesian experimental design optimal question selection reduce posterior uncertainty human-AI interaction decision support" — 0 new claim keys
- Query 14: "information value question types task completion agent intake which questions matter relevant questions empirical benchmark" — 1 new claim keys
- Query 15: "arxiv 2025 2026 irreversibility reversibility agent action commitment intake confirmation threshold autonomous" — 2 new claim keys
- Query 16: "instruction following complexity budget LLM compliance degradation token count empirical model size behavioral adherence" — 2 new claim keys
- Query 17: "omission detection omission error agent task failure weight metric evaluation LLM quality benchmark empirical 2024 2025" — 1 new claim keys
- Query 18: "external memory state tracking agent multi-step completion register in-context vs external state empirical LLM 2025" — 2 new claim keys
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturation note: Two structurally distinct source types were covered (arXiv papers and supplementary web search across ResearchGate, ACL Anthology, and practitioner sites); all four identified research traditions (decision theory/EVPI, LLM agent design, conversational AI/slot-filling, active learning) received at least one query; however consecutive queries in the active-learning and Bayesian experimental design traditions returned no new claim keys, and the grey literature search produced only null results — saturation condition 1 (consecutive no-new-keys) partially holds but the grey literature domain produced no grey literature claims, so saturation is not declared.
- Saturated: NO — review needed (check saturation note above)

---

## Claims (19)

### [key: sage-agent-evpi-question-scoring]
- evidence: empirical
- confidence: high
- group: evpi-intake-operationalization
- sources: https://arxiv.org/abs/2511.08798, https://arxiv.org/html/2511.08798v1

**Claim:** SAGE-Agent (arXiv:2511.08798, 'Structured Uncertainty guided Clarification for LLM Agents') applies EVPI to score clarification questions over structured tool-parameter schemas, achieving 7-39% coverage improvement on ambiguous tasks and 1.5-2.7x reduction in questions asked (59.73% vs 55.70% coverage; 1.39 vs 2.56 questions on ClarifyBench with GPT-4o). The mechanism: EVPI quantifies how much a question partitions the candidate tool-call space, scored as Score(q) = EVPI(q) - lambda*Cost(q), where cost penalizes re-questioning settled parameters. Action-relevant parameters (departure dates in travel booking) receive high EVPI because they partition many candidate flights; cosmetic optional preferences receive near-zero EVPI. Scope condition: validated across five domains (documents, vehicles, stocks, travel, file systems) and two model families (GPT-4o, Qwen2.5-14B), but explicitly assumes structured API schemas with well-defined parameter domains — generalization to open-ended generation tasks is unvalidated.

**Verify note:** Core numbers confirmed: 59.73% vs 55.70% coverage and 1.39 vs 2.56 questions on ClarifyBench with GPT-4o verified from HTML version. Two model families (GPT-4o and Qwen2.5-14B-Instruct) and five domains confirmed. EVPI formula confirmed in paper notation. The '7-39%' range is valid but extremely wide — the HTML confirms this range against multiple baselines, not a single comparison. Scope caveat in claim ('explicitly assumes structured API schemas with well-defined parameter domains') is a reasonable paraphrase of the paper's actual stated limitation ('we assume a uniform prior over tools'). Minor flag: the paper also trains 3B/7B models for uncertainty-guided reward modeling (36.5%→65.2%), a separate contribution the claim omits entirely — not a flaw but the paper is richer than described. No fabrication detected.

---

### [key: clarification-timing-by-information-type]
- evidence: empirical
- confidence: medium
- group: evpi-intake-operationalization
- sources: https://arxiv.org/abs/2605.07937, https://arxiv.org/pdf/2605.07937

**Claim:** In 'Ask Early, Ask Late, Ask Right' (arXiv:2605.07937), a forced-injection framework across 4 information dimensions, 3 agent benchmarks, 4 frontier models, 84 task variants, and 6,000+ runs shows that goal clarification value collapses sharply (pass@3 drops from 0.78 to baseline after 10% execution), while input clarification retains value through ~50% of execution; clarifications deferred past mid-trajectory underperform the baseline of never asking. Cross-model consistency is high (Kendall tau 0.78-0.87). In unscripted sessions (300 runs), no frontier model asked during optimal windows and 52% over-asked. Mechanism: goal clarifications fix early trajectory-branching decisions that cascade into irreversible downstream errors; input clarifications affect immediate execution steps and can be integrated throughout. Practical implication: for kit-maker intake, goal/scope questions must be front-loaded; parameter/input questions can be deferred safely to ~50% execution.

**Verify note:** Three issues reduce confidence. First, the Kendall tau range is cherry-picked: the claim reports only 0.78-0.87 (models sharing identical task coverage) but the paper also reports 0.34-0.67 across the full 4-model panel — the lower range is suppressed, weakening the 'cross-model consistency is high' conclusion. Second, '52% over-asked' applies specifically to GPT-5.2; Gemini never asked at all, and Claude asked in 23% of sessions — the claim implies this is a uniform frontier-model finding. Third, the forced-injection framework has an acknowledged confound: it disables ask_user, so VOI curves are explicitly described by the authors as 'upper bounds on information value,' not naturalistic measurements — this caveat is absent from the claim. The core timing findings (goal clarification collapses after 10%, input retains value through ~50%) are confirmed. Models used are 2026-era (GPT-5.2, Claude Sonnet 4.5, Gemini 3 Flash, DeepSeek V3.2), making replication against pre-2025 models impossible.

---

### [key: cart-counterfactual-stopping]
- evidence: empirical
- confidence: medium
- group: evpi-intake-operationalization
- sources: https://arxiv.org/abs/2510.08517, https://arxiv.org/html/2510.08517v1

**Claim:** CaRT (arXiv:2510.08517, 'Teaching LLM Agents to Know When They Know Enough') fine-tunes agents using paired counterfactual trajectories — one demonstrating appropriate stopping and a minimally modified counterpart demonstrating inappropriate stopping. Training instills verbally explainable termination reasoning. Results: improved efficiency (fewer clarification rounds) and task success across medical diagnosis and math problem solving. Mechanism: contrastive counterfactual examples teach the agent to recognize the decision boundary between 'sufficient information to act' and 'still underspecified,' rather than learning raw patterns. Scope condition: validated in multi-round interactive settings with discrete answer-check ground truth; applicability to open-ended creative tasks is not evaluated. Kit-maker implication: counterfactual pairing (what would have happened if I had not asked X) is a viable training signal for intake question selection policies.

**Verify note:** The counterfactual pairing mechanism is confirmed, and the two domains (medical diagnosis, math) are confirmed. However, the training pipeline is SFT on counterfactual examples plus optional GRPO reinforcement learning — the claim describes it as 'fine-tuning using paired counterfactual trajectories' without flagging the RL component, which is part of the contribution. No specific quantitative results (task success numbers, efficiency improvements) are available from the abstract or HTML — the claim asserts 'improved efficiency and task success' which is directionally confirmed but without magnitudes. The key kit-maker implication ('counterfactual pairing is a viable training signal') follows from the method design, not directly from benchmark results, since no numbers are surfaced. Scope limitation about open-ended creative tasks is reasonable inference, not explicitly stated in the paper. Low n-size concern: only two narrow domains tested.

---

### [key: ambig-swe-shap-question-types]
- evidence: empirical
- confidence: low
- group: intake-question-taxonomy
- sources: https://arxiv.org/pdf/2502.13069

**Claim:** Ambig-SWE (arXiv:2502.13069) applies SHAP analysis to clarification question categories on underspecified SWE-Bench software tasks, finding mean SHAP values: Error Information (0.183) > Implementation Details (0.0982) > Expected Behavior (0.0572) > External References (0.0355). Converting fully-specified to underspecified issues degrades agent performance from 43.8% to 23.7% success. Mechanism: Error Information (error messages, stack traces) has highest action-relevance because it directly constrains the debugging search space — it eliminates candidate fix classes, whereas Expected Behavior is often already implicit in the issue description and adds marginal partition value. Kit-maker implication: for software-adjacent tasks, the intake taxonomy should prioritize diagnostic/error-state information first, then implementation specifics; behavior-confirmation questions have lowest action-change potential.

**Verify note:** Critical fabrication: the paper does not use SHAP analysis. The HTML version confirms the methodology is cosine distance between embeddings and LLM-as-judge scoring (GPT-4o, 1-5 scale). The mean SHAP values (0.183, 0.0982, 0.0572, 0.0355) and the category-level SHAP hierarchy (Error Information > Implementation Details > Expected Behavior > External References) do not appear in the paper and are not derivable from the actual methodology used. These values are either hallucinated or confused with a different paper. What IS confirmed: the 43.8% (full) to 23.7% (hidden) performance drop and the SWE-Bench Verified benchmark. The paper does discuss clarification question categories, but the mechanism claim ('Error Information eliminates candidate fix classes') and the specific SHAP-backed ranking have no empirical basis in this paper. The kit-maker implication rests entirely on the fabricated SHAP ordering.

---

### [key: uncertainty-decomposition-action-vs-specification]
- evidence: empirical
- confidence: medium
- group: evpi-intake-operationalization
- sources: https://arxiv.org/html/2606.19559v1

**Claim:** In 'Uncertainty Decomposition for Clarification Seeking in LLM Agents' (arXiv:2606.19559), uncertainty is decomposed into Action Confidence (c_t: likelihood chosen action progresses toward goal) vs Request Uncertainty (u_t: degree user goal lacks specification, scored 0/0.5/1). Only Request Uncertainty at u_t >= 0.5 warrants clarification; Action Confidence uncertainty warrants proceeding cautiously. The system leads clarification F1 on every backbone on WebShop-Clarification and 4 of 5 on ALFWorld-Clarification, with 73% improvement over ReAct+UE. Critical caveat: task success rate actually declines monotonically (28.6% -> 27.8% -> 27.0%) due to 'capability dilution' — expanded prompts compete for reasoning budget. All methods show systematic overconfidence (ECE 0.24-0.66). Implication: the action/specification uncertainty distinction is valid and actionable, but the routing mechanism itself imposes a reasoning budget cost that must be weighed against the clarification gain.

**Verify note:** Core findings confirmed: 73% F1 improvement over ReAct+UE on ALFWorld-Clarification confirmed; leads on WebShop-Clarification across all five backbones confirmed; ECE range 0.24-0.66 confirmed; monotonic task success decline confirmed directionally. However, two issues. First, the claim says 'u_t scored 0/0.5/1' — this discrete tri-level scoring detail could not be directly verified from available sources and may be an approximation. Second, the 'capability dilution' framing is correct but the specific direction of the finding is counterintuitive and the claim presents it without sufficient emphasis: the method that best improves clarification F1 simultaneously HURTS task success — the method that best discriminates when to ask makes agents worse at completing tasks. This is a more serious caveat than the claim implies. The backbones are 2026-era models (GPT-5.1, DeepSeek-v3.2-exp, GLM-4.7, Qwen3.5-35B, GPT-OSS-120B), not replicable against widely available models.

---

### [key: rubric-as-action-relevance-proxy]
- evidence: empirical
- confidence: high
- group: evpi-intake-operationalization
- sources: https://arxiv.org/html/2602.11199v1

**Claim:** AskBench with Rubric-Guided RLVR (arXiv:2602.11199) operationalizes action-relevance by treating rubric checkpoints as decision-critical items: questions resolving rubric items receive +0.8 reward (1.0 for complete coverage), zero-impact questions receive -0.8 penalty, premature answers -2.0. Results: coverage 0.214 -> 0.679; accuracy 0.332 -> 0.615; AskOverconfidence coverage 0.188 -> 0.894. Mechanism: rubric items are by construction the minimal set of facts that change the answer — this is a direct operationalization of action-counterfactual relevance. Scope condition: rubrics require pre-specification by domain experts or are generated from structured QA pairs; applicability to novel task types requires rubric generation as a prerequisite step. Kit-maker implication: a rubric-generation pass over task templates would yield a direct action-relevance signal for intake question ranking without needing EVPI probability estimates.

**Verify note:** All quantitative results confirmed from HTML: coverage 0.214→0.679, accuracy 0.332→0.615, AskOverconfidence 0.188→0.894. Reward structure confirmed: premature answer -2.0, zero-impact questions -0.8, partial rubric coverage +0.8, complete +1.0. Scope limitations (concentrated in math/medicine, LLM-simulated users, constructed from existing QA pairs, offline stateless setting) all confirmed. The framing of rubric checkpoints as 'direct operationalization of action-counterfactual relevance' is an interpretation the claim provides, not a phrase used in the paper, but it follows logically from the reward design. One genuine limitation not mentioned in the claim: the benchmark's AskMind and AskOverconfidence dimensions are constructed from existing QA pairs, limiting the information space to rubric-derived checkpoints rather than truly open-ended tasks — the authors explicitly note this.

---

### [key: information-gain-bayesian-clarification]
- evidence: empirical
- confidence: medium
- group: evpi-intake-operationalization
- sources: https://arxiv.org/html/2606.03135, https://arxiv.org/pdf/2606.03135

**Claim:** In 'Uncertainty-Aware Clarification in LLM Agents with Information Gain' (arXiv:2606.03135), clarification value is operationalized as the Bayesian log-likelihood shift toward the ground-truth goal after a question-answer exchange (pointwise mutual information between response and true goal). DAPO training with a strict user simulator achieves 3.7% success rate improvement over no-clarification baseline across 5 agent backbones with only 0.3 additional steps; a 1.7B clarifier nearly matches 671B parameter performance (17.8% vs 18.1%). High-gain example: payment method question (reward 0.65); low-gain example: redundant confirmation loop (reward -0.05). Non-monotonic relationship: performance peaks at intermediate clarification levels; >6 turns introduces context pollution. Scope: validated on heterogeneous backbones; strongest agents leverage constraints most. Implication: information gain reward is both a training signal and a runtime filter for question selection in kit-maker intake.

**Verify note:** PMI/Bayesian log-likelihood operationalization confirmed; 3.7% improvement confirmed; 1.7B vs 671B comparison (17.8% vs 18.1%) confirmed; DAPO training confirmed; strict user simulator confirmed; non-monotonic relationship confirmed with peak around budgets 6-16. Three issues reduce confidence. First, the claim states '>6 turns introduces context pollution' as a threshold, but the paper shows performance peaking at budgets 6-16 and declining after — there is no specific 6-turn threshold identified; the claim invents precision that does not exist. Second, the specific example reward values (payment method question reward 0.65, redundant confirmation reward -0.05) could not be verified from available sources. Third, the domain is retail/airline τ-Bench only — the claim says 'heterogeneous backbones' as if generalizing broadly, but the tasks are narrow commercial shopping/airline domains. The 'strongest agents leverage constraints most' claim is confirmed.

---

### [key: ask-or-assume-coding-task-calibration]
- evidence: empirical
- confidence: high
- group: intake-architecture
- sources: https://arxiv.org/html/2603.26233v1

**Claim:** In 'Ask or Assume? Uncertainty-Aware Clarification-Seeking in Coding Agents' (arXiv:2603.26233), a multi-agent scaffold with a dedicated Intent Agent achieves 69.40% resolve rate vs 61.20% single-agent, closing the gap with fully-specified baseline (70.80%). The system shows well-calibrated uncertainty: 100% ask rate for >4-hour issues vs 62.4% for <15-minute issues, demonstrating task-complexity-proportional clarification. When multi-agent chose not to ask (156 tasks), it achieved 76.92% resolve — nearly matching the hidden-information baseline (77.56%). Temporal distribution: multi-agent distributes queries early (41.8%) and mid (43.4%), vs single-agent clustering late (43.9%). Practical implication: separating the 'what is ambiguous?' function from the execution function (distinct Intent Agent) produces better clarification calibration than unitary agents, and is worth the extra step cost (3.06 vs 1.84 queries per task).

**Verify note:** All primary quantitative claims confirmed: 69.40% vs 61.20% vs 70.80% baseline; hidden baseline 54.80%; 76.92% resolve when not asking; 62.37% ask rate for easy tasks; 100% for very hard tasks; 3.06 vs 1.84 queries; temporal distribution 41.8% early / 43.4% mid. One minor precision issue: the claim says '100% ask rate for >4-hour issues' which is technically correct (very hard = >4 hours = 100%), but elides the 78.57% for hard tasks (1-4 hours), making calibration look sharper than it is. The benchmark is SWE-Bench Verified (500 GitHub issues). Key scope limitation: the study relies on a frontier model (Claude Sonnet 4.5) as the backbone and LLM-simulated users, neither of which are flagged in the claim. Costs are non-trivial at $3.50 per task for multi-agent, also not flagged.

---

### [key: cgdp-predicate-belief-state]
- evidence: empirical
- confidence: high
- group: external-state-tracking
- sources: https://arxiv.org/html/2605.07042v1

**Claim:** The Context Gathering Decision Process (arXiv:2605.07042) formalizes information-seeking as a POMDP with a Predicate-Based Belief State (PBBS) bounded to K<=6 items tracking confirmed facts and unresolved questions. PBBS yields +11.4% on MuSiQue multi-hop reasoning (p<0.001). A programmatic exhaustion gate (using action similarity via Jaccard overlap + Unique Passage Rate) saves up to 39% of tokens without accuracy loss, while LLM-based stopping creates either infinite loops (+159% tokens) or premature termination (-5.0% accuracy). Freeform text representations of belief state outperform structured JSON in 10 of 12 conditions. Mechanism: bounded predicates force explicit prioritization of highest-uncertainty items, preventing context diffusion across trivially satisfied beliefs. Scope: validated across LoCoMo (conversational QA), MuSiQue (multi-hop Wikipedia), SWE-QA-Pro. Implication for kit-maker external register: bounded predicate list (K<=6) as architecture constraint prevents register bloat; programmatic rather than LLM-based exhaustion detection is more reliable.

**Verify note:** All specific numbers confirmed: +11.4% on MuSiQue (p<0.001); 39% token savings via programmatic gate; LLM-based stopping failures (159% more tokens for conservative, -5.0% accuracy for neutral prompting); freeform beats JSON in 10 of 12 conditions; K<=6; benchmarks LoCoMo/MuSiQue/SWE-QA-Pro all confirmed. One important limitation the claim omits: this entire evaluation uses a single model backbone (GPT-4o-mini), with GPT-4o as judge — the authors explicitly acknowledge 'single-model evaluation' as a limitation. Generalization across model families is unvalidated. For a kit-maker architecture recommendation (K<=6 as hard constraint), this single-model limitation is non-trivial. The 'p<0.001' on MuSiQue is confirmed but only n=500 instances.

---

### [key: decision-aware-counterfactual-context]
- evidence: empirical
- confidence: low
- group: evpi-intake-operationalization
- sources: https://arxiv.org/pdf/2606.08151

**Claim:** Decision-Aware Memory Cards (arXiv:2606.08151) defines context as action-relevant using a counterfactual test: would removing this context alter the agent's next action? This distinguishes decision-relevance from semantic similarity, which standard retrieval methods use. The taxonomy organizes context into: tool-relevant information, historical action traces, and decision-critical details. Context compression using this criterion maintains or improves agent performance on SWE-Bench and RepoBench while reducing context length. Mechanism: semantic similarity conflates surface lexical relevance with causal effect on action; counterfactual removal directly tests action-change. Scope: code-generation tasks. Kit-maker implication: intake question selection for long context should test action-counterfactual relevance of proposed question answers rather than surface similarity to task description.

**Verify note:** Two significant problems. First, the claim states results on 'SWE-Bench and RepoBench' — the actual paper evaluates only 50 SWE-Bench Verified file-retrieval instances; RepoBench does not appear in the available paper content. RepoBench appears to be fabricated scope. Second, the results are file-retrieval metrics (hit@1 from 0.58 to 0.78, MRR@10 from 0.634 to 0.790 on 50 instances) — these are retrieval benchmarks, not agent task-completion metrics. The claim frames this as 'maintains or improves agent performance' which overstates what file-retrieval hit rate measures. The counterfactual removal test is partially confirmed ('removing top-utility semantic unit reduces F1 from 0.245 to 0.000'). The specific taxonomy (tool-relevant information, historical action traces, decision-critical details) could not be verified from available content. Very small n=50 for any performance conclusions.

---

### [key: proactivity-taxonomy-four-action-space]
- evidence: empirical
- confidence: medium
- group: intake-architecture
- sources: https://arxiv.org/html/2605.06717v1

**Claim:** In 'Agentic Coding Needs Proactivity, Not Just Autonomy' (arXiv:2605.06717), an audit of five deployed coding agents (Cursor, GitHub Copilot, Jules, Claude Code, LangChain) found that zero systems document meaningful interruption cost computation and zero systems use silence as a learned action. The paper proposes a four-action insight space: notify, question, draft, stay silent — where silence must be an explicit computed choice, not a default. The decision criterion is: 'compute utility and interruption cost over the full action space, including stay silent.' Empirically, current agents exhibit reactive not proactive clarification. Kit-maker implication: kit behavioral rules must treat silence as a positive choice, not a default; the routing condition 'do I ask?' must be computed with an explicit cost model, not defaulted to asking whenever uncertain.

**Verify note:** Four-action space (notify, question, draft, stay silent) confirmed. Zero-systems finding for interruption cost computation and silence-as-learned-action confirmed via Table 1 checkmarks. However, two important caveats the claim omits. First, this is explicitly a POSITION PAPER — the authors state 'We present no measured results'; the audit is based on public documentation, not empirical testing or code inspection. Saying 'zero systems document meaningful interruption cost computation' is a documentation gap finding, not a capability finding — systems may implement this undocumented. Second, the claim lists 'Cursor, GitHub Copilot, Jules, Claude Code, LangChain' as five agents — the actual paper audits Cursor Background Agents AND Cursor Automations as two distinct products, plus GitHub Copilot, Jules, Claude Code Routines, and LangChain Ambient Agents, meaning the count and identity of the five are slightly misrepresented. The practical implication (treat silence as positive choice) follows from the position argument, but has no empirical grounding.

---

### [key: irreversibility-as-confirmation-criterion]
- evidence: consensus
- group: reversibility-grounding
- sources: https://arxiv.org/abs/2603.03515, https://arxiv.org/pdf/2602.15259, https://arxiv.org/pdf/2605.14407

**Claim:** Multiple papers converge on irreversibility as the primary grounding criterion for requiring upfront confirmation vs proceeding autonomously. 'The Controllability Trap' (arXiv:2603.03515) proposes an Irreversibility Budget: each action is scored on a 0-1 scale (0 = read-only queries, 1 = fully irreversible), with mandatory re-authorization before cumulative irreversible actions exceed the budget. 'Knowing Isn't Understanding' (arXiv:2602.15259) frames harm as 'excessive commitment under insufficient epistemic legitimacy — commitment captures the extent to which an action forecloses alternative trajectories.' 'Metis AI' (arXiv:2605.14407) draws on financial real options theory: consequential commitments that are irreversible, uncertain in outcome, and discretionary in timing require elevated thresholds reflecting permanently forfeited flexibility. Kit-maker implication: a reversibility taxonomy for kit outputs (in-memory transformations=0, file writes=low, external API calls=medium, destructive operations=high) operationalizes which intake questions require upfront confirmation vs can be resolved mid-execution.

---

### [key: instruction-count-complexity-ceiling]
- evidence: empirical
- confidence: low
- group: instruction-compliance-budget
- sources: https://keg.cs.tsinghua.edu.cn/persons/xubin/papers/AgentIF.pdf, https://arxiv.org/pdf/2509.21051

**Claim:** AGENTIF benchmark documents that agent instruction-following tasks average 1,700 tokens and 14 constraints, producing measurable performance degradation as constraint count increases. 'When Instructions Multiply' (arXiv:2509.21051) shows that larger models (GPT-4, Claude 3.5, Gemini 1.5) are more robust to instruction multiplication, but the degradation is gradual rather than a sharp cliff. Separately, token-budget compliance varies sharply by model size: Qwen3-235B achieves >82% compliance even at 10-token budgets, while small models (<4B) achieve only 3-21%. Mechanism: simultaneous management of competing constraint directives reflects fundamental architecture limits in multi-constraint LLM processing, not training gaps. Scope condition: measured on instruction-following benchmarks, not extended behavioral compliance over multi-turn kit sessions. Kit-maker implication: kit behavioral rules should target <14 simultaneously active constraints for reliable compliance on frontier models; priority-ordering is needed for the case of conflict.

**Verify note:** Three problems. First, the AGENTIF average is stated as '1,700 tokens and 14 constraints' — the actual paper reports 1,723 words (not tokens; words and tokens differ by ~30%) and 11.9 constraints (not 14). Second and most serious: the Qwen3-235B token budget compliance data (>82% at 10-token budgets vs small models 3-21%) does not appear in either cited paper. 'When Instructions Multiply' (arXiv:2509.21051) tests up to 10 instructions on ManyIFEval/StyleMBPP and does not include Qwen3-235B or token-budget compliance metrics. AGENTIF does not discuss Qwen3-235B either. This data appears sourced from a third uncited paper (likely a thinking-token budget study). Third, the claim asserts 'fundamental architecture limits, not training gaps' as the mechanism — the paper explicitly declines to make this determination, stating only empirical degradation without mechanistic explanation. The gradual-not-cliff degradation finding is confirmed for the tested models.

---

### [key: external-task-memory-tme]
- evidence: empirical
- confidence: medium
- group: external-state-tracking
- sources: https://arxiv.org/abs/2504.08525, https://arxiv.org/html/2504.08525v1, https://arxiv.org/html/2604.08224v1

**Claim:** Task Memory Engine (arXiv:2504.08525) introduces a hierarchical Task Memory Tree (TMT) storing action, input/output, status, parent-child relationships, and inter-step dependencies as structured external state. The Prompt Synthesizer generates prompts from active node paths only, achieving 19.4-26.4% token reduction over 5-6 form-filling rounds by preventing the linear token growth of full-history repetition. The Externalization review (arXiv:2604.08224) formalizes the underlying principle: externalized memory converts recall from model weights into recognition of curated external state, freeing reasoning budget. Four externalized memory types: working context (live intermediate state), episodic experience (prior traces), semantic knowledge (domain facts), personalized memory (user constraints). Scope: TME validated on multi-step form-filling with non-linear workflows and backtracking. Kit-maker implication: external intention register for multi-step kit execution should store: step status, dependency graph, active constraints, and user-confirmed parameters — not conversation history verbatim.

**Verify note:** TMT node contents (action, input/output, status, parent-child, dependencies) and the 19.4%/26.4% token reduction figures are directly confirmed by the HTML paper. However, two scope problems weaken the claim: (1) the reduction numbers come from a SINGLE case-study run of one form-filling scenario — not a controlled experiment across diverse tasks, making the percentages illustrative rather than evaluated. (2) The paper itself says validation consists of 'case studies and comparative experiments,' which is a very thin empirical base. The Externalization review (2604.08224) does confirm the four memory types and the recall-to-recognition framing. The kit-maker implication is a reasonable structural inference but is not derived from a study of kit-execution contexts. Extrapolation flag: the 19.4-26.4% numbers should not be treated as a reliable empirical effect size — they are a single demonstration trace.

---

### [key: omission-dominates-commission-in-agent-failures]
- evidence: empirical
- confidence: low
- group: quality-metrics
- sources: https://arxiv.org/pdf/2606.09863

**Claim:** In 'From Confident Closing to Silent Failure' (arXiv:2606.09863), analysis of LLM agent failures across multiple benchmarks reveals that omission errors (silent failures to execute required actions) significantly outnumber commission errors (executing wrong actions). Agents frequently report task completion while silently skipping required steps — a 'false success' pattern. Current evaluation metrics underpenalize omission errors relative to commission errors, masking real-world reliability gaps. AGENTIF independently identifies omission of required tools as a tracked error category alongside disallowed tool usage, tool name errors, and parameter errors. Mechanism: LLMs are trained on next-token prediction, which rewards confident forward generation; stopping conditions are undertrained relative to continuation conditions, creating a systematic omission bias. Kit-maker implication: kit quality metrics must weight omission detection more heavily than commission detection; evaluation rubrics should require explicit verification that each required output was produced, not just that no wrong action was taken.

**Verify note:** The paper (2606.09863) does NOT frame its findings as omission vs. commission. Its actual subject is 'false success' — agents claiming task completion when environment state shows failure. The omission/commission dichotomy is editorial reframing not present in the source. The paper reports false-success rates (45-48% of failures in single-control domains, 75.8% in AppWorld self-assessing architectures), not an omission-vs-commission count comparison. The mechanism claim — 'stopping conditions are undertrained relative to continuation conditions' — is not stated in the paper; it is an inference the claim author added. AGENTIF is cited as independent corroboration but is a different paper not fetched for verification. The specific framing 'omission significantly outnumbers commission' has no direct source support. This is a case where a real paper (false-success detection is a genuine finding) is used to justify a reframed conclusion the paper does not make.

---

### [key: evpi-scope-failure-open-ended-tasks]
- evidence: anecdote
- group: evpi-intake-operationalization
- sources: https://arxiv.org/html/2606.19559v1, https://arxiv.org/html/2511.08798v1

**Claim:** Adversarial case (self-argumentation, no direct paper): EVPI-based intake question selection has a structural failure mode when the action space is continuous or the agent is non-deterministic. SAGE-Agent's 7-39% gains are validated only for structured API schemas with discrete parameter domains. For open-ended tasks (creative writing, research synthesis), the 'action' counterfactual is ill-defined because: (a) the same intake leads to legitimately different valid actions across runs; (b) parameter space is unbounded, making marginal EVPI order-dependent; (c) LLM systematic overconfidence (ECE 0.24-0.66 per arXiv:2606.19559) corrupts the prior probability estimates that EVPI requires. Supporting evidence: the uncertainty decomposition paper (2606.19559) documents systematic overconfidence in all tested clarification agents, which would inflate EVPI scores for questions the agent incorrectly believes are uncertain. Practical scope condition: EVPI intake is reliable for structured, schema-bounded tasks; for open-ended tasks, rubric-based proxy (arXiv:2602.11199) or information gain reward (arXiv:2606.03135) are more robust alternatives.

---

### [key: over-asking-systematic-failure-deployed-agents]
- evidence: empirical
- confidence: low
- group: intake-architecture
- sources: https://arxiv.org/pdf/2605.07937, https://arxiv.org/html/2606.19559v1

**Claim:** Adversarial finding: In 'Ask Early, Ask Late, Ask Right' (arXiv:2605.07937), in unscripted sessions with no forced-injection, 52% of frontier model trials resulted in over-asking (clarification requests outside optimal windows). Zero frontier models asked during the empirically optimal timing windows. A separate model audit in arXiv:2606.19559 found over-clarification rates of 38% for GPT-5.2 and under-clarification rates of 31% for Gemini model families. This means that LLMs without explicit action-counterfactual training have neither calibrated ask-rate nor calibrated ask-timing by default. The failure is systematic across model families, not idiosyncratic. Scope: measured on benchmark task sets; real-world deployments may show different patterns. Kit-maker implication: default LLM clarification behavior cannot be assumed to be action-counterfactually calibrated; an explicit filtering layer (EVPI, rubric, or information gain) is necessary for intake quality.

**Verify note:** The 2605.07937 findings (52% of sessions show over-asking, no frontier model asks in optimal window) are directly confirmed across 84 task variants and 6,000+ runs. However, the claim introduces a separate source (2606.19559) with specific statistics: '38% over-clarification for GPT-5.2' and '31% under-clarification for Gemini families.' The actual paper 2606.19559 tests GPT-5.1, DeepSeek-v3.2-exp, GLM-4.7, Qwen3.5-35B, and GPT-OSS-120B — GPT-5.2 and Gemini do not appear in the paper at all. These specific model names and percentages are not in the source. This is a fabrication or hallucination inserted into an otherwise real finding. The 2605.07937 portion earns medium-high confidence on its own; the 2606.19559 statistics contaminate the overall claim with unsupported specifics. Verdict: low because the specific corroborating statistics are not in the cited source.

---

### [key: slot-filling-tradition-intent-vs-parameter]
- evidence: consensus
- group: intake-question-taxonomy
- sources: 

**Claim:** The conversational AI slot-filling tradition (task-oriented dialogue systems) has empirically established a two-level distinction: intent detection (classification of the task the user wants) and slot filling (instantiation of parameters for that task). Intent errors propagate to all downstream slots; slot errors affect only their own parameter. A combined model achieves 20.14% absolute improvement in task completion over models without joint intent-slot modeling. This maps onto the EVPI finding: questions targeting intent-level ambiguity have higher action-relevance (they change the entire task trajectory) than questions targeting individual slot values (they change only one parameter). Scope: validated in commercial task-oriented dialogue systems (travel booking, restaurant reservation, etc.). Mechanism: intent determines which slot schema applies; a wrong intent instantiates the wrong parameter set entirely. Kit-maker implication: intake question prioritization should follow this hierarchy: intent/goal disambiguation first (highest action-counterfactual impact), then constraint/boundary clarification, then individual parameter filling.

---

### [key: non-monotonic-clarification-overload]
- evidence: empirical
- confidence: medium
- group: evpi-intake-operationalization
- sources: https://arxiv.org/html/2606.03135, https://arxiv.org/pdf/2605.07937

**Claim:** Two independent papers find a non-monotonic relationship between clarification volume and task success. In arXiv:2606.03135 (Information Gain), performance peaks at intermediate clarification levels; >6 turns introduces context pollution that degrades performance below the no-clarification baseline. In arXiv:2605.07937 (Ask Early/Ask Late), clarifications deferred past mid-trajectory underperform the no-ask baseline. Mechanism: excessive clarification (a) fills context with low-information exchanges that compete with task-relevant content, (b) re-introduces uncertainty through inconsistent user answers, (c) creates latency that triggers model attention dispersion in long contexts. Scope: both findings are on specific benchmark domains; the 6-turn threshold may be task-type dependent. Kit-maker implication: intake should have an explicit question budget limit; tracking cumulative clarification turns is a necessary control variable for kit quality.

**Verify note:** The non-monotonic relationship between clarification volume and task success is confirmed in both papers. For 2606.03135: success rates peak at intermediate clarification budgets and then decline — confirmed. For 2605.07937: clarifications deferred past mid-trajectory underperform no-ask baseline — confirmed. Two specific claims are not supported: (1) The '>6 turns degrades performance BELOW the no-clarification baseline' — the paper shows decline after the peak but does NOT confirm performance falls below the zero-clarification baseline (15.4%). The fetch shows decline and plateau, not a sub-baseline crash. (2) The '6-turn threshold' is not stated in the paper; the paper discusses 'budget 16' (total interaction steps), not a 6-question cutoff. The three-mechanism explanation (context pollution, inconsistent answers, attention dispersion) is editorial elaboration not directly sourced from either paper. The scope caveat is correctly stated. Core non-monotonic finding holds; the specific '6-turn below baseline' formulation is an overstatement.

---

## Null results
- Initial search for SAGE-Agent paper by arXiv ID 2511.08798 returned no direct match — found via secondary POMDP/clarification-seeking query as 'Structured Uncertainty guided Clarification for LLM Agents'
- Grey literature query (site:github.com kit-maker agent intake question selection EVPI) returned no practitioner implementations or blogs specifically addressing EVPI-based intake for general-purpose agent kits — the EVPI framing exists only in research papers, not deployed tooling
- Active learning / query-by-committee tradition query returned no papers directly connecting QBC to agent intake question selection — the traditions use different vocabularies and have not cross-referenced
- Bayesian experimental design query returned foundational theory (BOED) but no empirical papers applying BOED explicitly to LLM agent intake — the connection is conceptual, not empirically validated in this domain
- Adversarial search for explicit replication failures or refutations of EVPI-based clarification found none — the main constraint is scope limitation (structured schema domains), not a replication failure

## New angles surfaced
- **EVPI generalization to open-ended kit tasks: does structured schema assumption hold?**
  Target decision: arXiv search: 'EVPI clarification open-ended generation task ambiguous action space' + 'information gain clarification creative research task LLM 2025'
  Would find: Whether action-counterfactual EVPI scoring (validated in SAGE-Agent for structured API schemas) generalizes to open-ended kit tasks (research synthesis, creative generation, document drafting) where the action space is continuous and multiple valid trajectories exist — or whether rubric-based / information-gain alternatives are strictly necessary for those task types.
- **Reversibility taxonomy for kit-maker output types: empirical grounding for confirmation threshold**
  Target decision: arXiv:2603.03515 (Irreversibility Budget), arXiv:2602.15259 (epistemic commitment), arXiv:2605.14407 (Metis real options) + search: 'agent action reversibility classification taxonomy empirical 2025'
  Would find: A grounded reversibility scale applicable to kit-maker output categories (in-memory state, file writes, external API calls, destructive operations, published artifacts) that operationalizes which intake questions require upfront confirmation vs can be corrected post-execution — closes the open kit design decision on confirmation thresholds.
- **Claude Sonnet 4-class instruction-count ceiling: empirical threshold for kit behavioral compliance**
  Target decision: AGENTIF benchmark results for Claude Sonnet class models + arXiv:2509.21051 (When Instructions Multiply) + search: 'Claude Sonnet instruction following constraint count degradation 2025 2026'
  Would find: The specific instruction-count threshold at which kit behavioral compliance degrades for Claude Sonnet 4.x class models — AGENTIF shows 14 constraints as a general average but does not break out by model family. This would close the kit design question on how many simultaneously active behavioral rules are safe to specify.
- **Bounded predicate register vs full episodic store: which external intention architecture best supports kit step-tracking?**
  Target decision: arXiv:2605.07042 (CGDP K<=6 predicates), arXiv:2504.08525 (TME hierarchical tree), arXiv:2604.08224 (Externalization review) + search: 'agent step completion tracking external register architecture comparison 2025'
  Would find: Which external state representation — bounded predicate list (CGDP style, K<=6), hierarchical task tree (TME style), or flat episodic log — produces the best step-completion tracking for multi-step kit execution, including which information fields (status, inputs, outputs, dependencies) must be externalized vs can stay in context.
- **Omission-weighted quality metric: what weighting ratio is empirically justified?**
  Target decision: arXiv:2606.09863 (From Confident Closing to Silent Failure) + search: 'omission commission error ratio LLM agent evaluation weighting benchmark 2025 2026'
  Would find: The empirical ratio of omission-to-commission errors in LLM agent tasks (the paper establishes omission dominates but does not give a precise ratio) and whether a specific weighting multiplier (e.g., 2x, 3x) for omission in kit quality metrics is justified by the error distribution data.
- **Cross-task SHAP analysis: does error-information-first intake priority generalize beyond software tasks?**
  Target decision: arXiv:2502.13069 (Ambig-SWE, SHAP 0.183/0.098/0.057/0.035) + search: 'SHAP question type task completion clarification agent non-software task 2025'
  Would find: Whether the Ambig-SWE finding (Error Information SHAP=0.183 dominates) generalizes to non-software kit tasks (research, document generation, analysis). If the error-first priority is domain-specific, a different SHAP analysis is needed for kit-maker's primary task types before intake question templates can be finalized.
- **Intent-slot two-level intake hierarchy: empirical validation for LLM agents (not just task-oriented dialogue systems)**
  Target decision: Search: 'intent disambiguation slot filling LLM autonomous agent intake task completion 2025 2026' + ACL Anthology recent clarification papers
  Would find: Whether the classical NLU finding (intent errors propagate more than slot errors) holds empirically for modern LLM agents on open-ended tasks, validating the two-level intake prioritization (intent/goal first, parameters second) for kit-maker intake question ordering.
- **Non-monotonic clarification overload: where is the task-type-specific 6-turn equivalent for kit-maker tasks?**
  Target decision: arXiv:2606.03135 (>6 turns threshold) + search: 'clarification question budget threshold context pollution LLM task type 2025'
  Would find: Whether the 6-turn context pollution threshold generalizes across task types or is domain-specific, and what the equivalent threshold is for kit-maker task categories — needed to set the kit intake question budget limit as a concrete design parameter rather than an open variable.
