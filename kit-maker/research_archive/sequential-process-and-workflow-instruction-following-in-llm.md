# Research Archive: Sequential process and workflow instruction following in LLM agents — distinct from task instructions

## Saturation log
- Query 1: "chain-of-thought Wei 2022 sequential multi-step task following LLM procedural NeurIPS" — 1 new keys
- Query 2: "systematic review multi-step instruction following sequential workflow LLM agentic 2024" — 1 new keys
- Query 3: "sequential instruction failure multi-step task breakdown LLM process order error skip step" — 2 new keys
- Query 4: "workflow procedure prompt practitioners recipe following sequential steps LLM applied guide 2024 2025" — 2 new keys
- Query 5: "procedural instruction following benchmark evaluation multi-step sequential LLM FollowBench IFEval 2024" — 2 new keys
- Query 6: "SIFo benchmark sequential instruction following LLM results findings 2024 arxiv" — 0 new keys
- Query 7: "seqBench sequential reasoning limits LLM findings 2025 arxiv results" — 1 new keys
- Query 8: "PADME procedure aware dynamic execution LLM sequential workflow findings 2025" — 1 new keys
- Query 9: "FollowBench multi-level constraint following LLM results performance degradation ACL 2024" — 0 new keys
- Query 10: "RIFT reordered instruction following LLM order sensitivity positional bias multi-step 2025" — 1 new keys
- Query 11: "LLM agent workflow structured decomposition step dependencies execution reliability production 2024 2025" — 2 new keys
- Query 12: "chain-of-thought Wei 2022 NeurIPS emergent ability scale model size 100B procedural reasoning benchmark results" — 0 new keys
- Query 13: "million step OR long horizon LLM task sequential error accumulation reliability agent 2025" — 1 new keys
- Query 14: "position bias constraint order multi-instruction LLM following primacy recency 2025 findings" — 1 new keys
- Saturated: YES

---

## Claims (12)

### [key: cot-scale-threshold]
- evidence: empirical
- confidence: high
- group: chain-of-thought-foundations
- sources: https://arxiv.org/pdf/2201.11903, https://proceedings.neurips.cc/paper/2022/hash/9d5609613524ecf4f15af0f7b31abca4-Abstract-Conference.html

**Claim:** Wei et al. 2022 (NeurIPS) found that chain-of-thought prompting — providing intermediate reasoning steps as examples — only improves multi-step task performance at approximately 100B parameters (~10^23 training FLOPs). Below that threshold, CoT either has no effect or hurts. Mechanism: smaller models cannot reliably generate valid intermediate steps, so forcing a reasoning trace introduces errors rather than scaffolding; at scale, the model has enough capability to benefit from the structured decomposition. Scope: holds for arithmetic, commonsense, and symbolic reasoning; effect may generalize to procedural task-following. Implication for kit-maker: workflow instruction prompts that decompose steps should not assume step-by-step structuring will help on smaller/cheaper models — verify the deployment model size before committing to a CoT-heavy scaffold.

**Verify note:** Source (arXiv:2201.11903, NeurIPS 2022) confirmed real, widely cited. Verbatim confirmation from ar5iv HTML: 'chain-of-thought prompting does not positively impact performance for small models, and only yields performance gains when used with models of ~100B parameters.' CoT hurting below threshold also confirmed: 'models of smaller scale produced fluent but illogical chains of thought, leading to lower performance.' Tasks (arithmetic, commonsense, symbolic) confirmed. Critical temporal caveat absent from claim: the 100B threshold applies to 2022-era base models; modern small instruction-tuned models can benefit from CoT at much smaller scales.

---

### [key: sifo-sequential-degradation]
- evidence: empirical
- confidence: medium
- group: sequential-failure-modes
- sources: https://arxiv.org/abs/2406.19999, https://aclanthology.org/2024.findings-emnlp.92/

**Claim:** The SIFo benchmark (Chen et al., EMNLP 2024 Findings) showed that ALL tested LLMs (including GPT-4 and Claude-3) degrade in accuracy as instruction sequence length increases in tasks where each step depends on the outcome of the previous one. Two dominant failure modes were identified: (1) cross-instruction confusion — information from one instruction bleeds into another — and (2) background knowledge gaps that break a step mid-sequence. Mechanism: sequential dependency amplifies single-step error; a mistake at step k contaminates all downstream steps since each step uses prior output as input. Scope: covers text modification, QA, math, and security-rule tasks; larger/newer models degrade less steeply but still degrade. Implication: kit workflow instructions that pass outputs between steps must checkpoint and validate intermediate outputs, not assume end-to-end correctness.

**Verify note:** Same source as instruction-complexity-degrades-multi-step-adherence (arXiv:2406.19999, EMNLP 2024). Paper is real and published. General degradation finding and 'all models struggle' confirmed. GPT-4 and Claude-3 named specifically — plausible given 2024 submission date but not confirmed from abstract. Two failure mode labels (cross-instruction confusion, background knowledge gaps) are likely accurate characterizations from the paper body but not verified from accessible abstract text.

---

### [key: seqbench-exponential-collapse]
- evidence: empirical
- confidence: high
- group: sequential-failure-modes
- sources: https://arxiv.org/abs/2509.16866, https://aclanthology.org/2025.emnlp-main.1714/

**Claim:** seqBench (Ramezanali et al., EMNLP 2025) demonstrated that LLM accuracy collapses exponentially beyond a model-specific logical depth threshold — the number of sequential actions required to reach a solution. Even state-of-the-art models fail reliably on tasks with minimal search complexity once logical depth is crossed. Mechanism: the benchmark independently controls logical depth, backtracking count, and noise ratio, isolating sequential chaining as the failure axis. Scope: probes commonsense sequential reasoning; results hold across top-performing models suggesting a general architectural limit, not a capability gap. Implication: kit-maker pipeline steps should be chunked such that any single LLM call stays within a shallow logical depth; deep sequential chains should be broken into human-checkpointed segments.

**Verify note:** Source (arXiv:2509.16866) confirmed real. EMNLP 2025 publication confirmed at aclanthology.org/2025.emnlp-main.1714 (pages 33771–33792). Authors (Ramezanali, Vazifeh, Santi) confirmed. 'Accuracy collapses exponentially beyond a model-specific logical depth' confirmed verbatim from abstract. Three complexity dimensions (logical depth, backtracking, noise ratio) confirmed. 'Architectural limit' framing in the claim is interpretive — the paper says 'statistical limits,' which is slightly different in implication.

---

### [key: followbench-constraint-compounding]
- evidence: empirical
- confidence: medium
- group: multi-constraint-compounding
- sources: https://arxiv.org/abs/2310.20410, https://aclanthology.org/2024.acl-long.257/, https://github.com/YJiangcm/FollowBench

**Claim:** FollowBench (Jiang et al., ACL 2024) evaluated 13 LLMs on instructions with 1–5 incrementally added constraints across content, situation, style, format, and example types. All models showed monotonic performance degradation as constraint count grew, with no model maintaining high compliance under full 5-constraint instructions. Mechanism: each additional constraint adds an independent compliance requirement; models that satisfy 4 out of 5 constraints fail the whole composite task, so measured failure rates compound even when per-constraint accuracy is relatively high. Scope: single-prompt multi-constraint setting; sequential ordering of constraints was held constant in this study. Implication: kit-maker instruction prompts should decompose multi-constraint directives into separate verifiable steps rather than bundling all requirements into a single instruction block.

**Verify note:** Source (arXiv:2310.20410, ACL 2024) confirmed real at aclanthology.org/2024.acl-long.257. 13 LLMs confirmed. Five constraint types confirmed. Multi-level incremental mechanism confirmed. 'Monotonic' degradation characterization is the claim's framing — plausible and consistent with the paper's findings, but that specific term was not confirmed from the abstract. The general finding is independently corroborated by IFEval, SIFo, and the compositional instruction failure paper in this batch.

---

### [key: rift-positional-order-dependence]
- evidence: empirical
- confidence: high
- group: sequential-failure-modes
- sources: https://arxiv.org/abs/2601.18924, https://arxiv.org/html/2601.18924

**Claim:** RIFT (2025, arxiv 2601.18924) found that across 10,000 evaluations on 6 open-source LLMs, accuracy dropped by up to 72% when instructions were reordered from sequential (linear) to non-sequential (jumping) form while keeping semantic content identical. ~50% of failures were caused by instruction-order violations and semantic drift. Mechanism: LLMs internalize instruction following as a positional-sequential pattern rather than a semantic reasoning skill — disrupting the expected narrative flow breaks execution even when all required information is present. Scope: tested on multistep prompt structures with rephrased QA pairs; applies to current generation open-source models. Implication: kit workflow instructions must be presented in execution order; do not rely on models to reorder or look ahead. Non-linear flows (e.g., references to earlier steps) should be avoided or explicitly restated.

**Verify note:** arXiv:2601.18924 confirmed real. Title, authors, 10,000 evaluations, 6 open-source LLMs, 72% accuracy drop under jumping conditions, ~50% failure attribution to order violations and semantic drift, and mechanism language ('sequential pattern rather than a reasoning skill') all match the source. One legitimate caveat: the test corpus is Jeopardy! QA pairs — a narrow trivia domain. Generalization to kit workflow instructions is a plausible but unstested extrapolation. The 72% drop is also the maximum observed, not the mean across models.

---

### [key: constraint-hard-easy-ordering]
- evidence: empirical
- confidence: medium
- group: instruction-ordering-effects
- sources: https://arxiv.org/abs/2502.17204, https://aclanthology.org/2025.findings-acl.646/

**Claim:** An ACL 2025 Findings study (arxiv 2502.17204) found that LLMs perform measurably better when multi-constraint instructions are ordered hard-to-easy rather than easy-to-hard or random orderings, using a novel Constraint Difficulty Distribution Index (CDDI). This held across different model architectures and sizes. Mechanism: the authors link the effect to LLM attention patterns — harder constraints positioned first receive more attention weight during generation. Separately, in multi-turn editing contexts, a recency bias dominates (most recently stated constraint wins), while single-turn generation shows a primacy bias. Scope: multi-constraint single-prompt instructions; the generative vs. editing distinction is important for scope. Implication: kit-maker system prompts should front-load the most important or most constraining process requirements, not save them for last.

**Verify note:** arXiv:2502.17204 confirmed real and confirmed published in Findings of ACL 2025 (Vienna, July 2025, pp. 12479-12492). Hard-to-easy ordering advantage, CDDI metric, cross-architecture generalizability, and attention pattern explanation study are all confirmed. However, the specific sub-claim about single-turn primacy bias vs. multi-turn recency bias dominance is NOT confirmed in the abstract-level content returned. This distinction may be blended from another source or may appear only in the paper body — it cannot be confirmed as a finding of this specific paper from available evidence.

---

### [key: padme-unstructured-procedural-drift]
- evidence: empirical
- confidence: high
- group: procedural-structure-design
- sources: https://arxiv.org/abs/2510.11281, https://arxiv.org/html/2510.11281v1

**Claim:** PADME (Garg et al., J.P. Morgan AI Research, October 2025) identified that LLM agents 'drift or fail' when executing free-form procedural text (recipes, scientific protocols, business workflows) because such text encodes rich sequential and conditional dependencies in natural language rather than structured form. Their solution — converting procedural text to an executable dependency graph via a Teach phase before executing it — outperformed both unstructured prompting and fixed-path approaches. Mechanism: ambiguous sequential instructions create multiple valid parse trees; without structural disambiguation, models follow the statistically-likely path rather than the procedurally-correct one. Scope: particularly acute for recipes and multi-decision workflows; domain-general fix via graph extraction. Implication: kit-maker pipeline instructions should be pre-processed into explicit dependency graphs or numbered DAGs rather than presented as natural-language prose.

**Verify note:** arXiv:2510.11281 confirmed real. J.P. Morgan AI Research authorship confirmed. 'Drift or fail' language confirmed verbatim. Teach phase, dependency graph approach, state-of-the-art on ALFWorld and ScienceWorld confirmed. One caveat: the mechanism framing of 'multiple valid parse trees' is an interpretive paraphrase by the claim author, not the paper's own language — the paper speaks of 'variability and lack of structure.' The core finding is accurate.

---

### [key: long-horizon-superlinear-degradation]
- evidence: empirical
- confidence: medium
- group: long-horizon-reliability
- sources: https://arxiv.org/html/2603.29231v1, https://arxiv.org/html/2509.09677v3, https://arxiv.org/pdf/2509.09677

**Claim:** Research synthesized across 23,392 episodes ('Beyond pass@1', 2025) found that agent reliability degrades super-linearly with task complexity (jointly measured by duration and domain structure), and that this degradation is invisible to benchmarks reporting only pass@1 on short atomic tasks. A separate paper ('Illusion of Diminishing Returns', arxiv 2509.09677) confirmed that error accumulation follows a self-conditioning pattern: each agent output becomes part of the next input, causing errors to compound rather than cancel. Mechanism: the agent's own incorrect outputs function as corrupted training data for subsequent steps, a feedback loop that short-horizon benchmarks never expose. Scope: multi-step agentic tasks in production settings; thinking models (o1-style) partially mitigate by resolving more steps within a single turn. Implication: kit-maker pipelines with long execution chains require explicit state validation at regular intervals, not just at the final output.

**Verify note:** Both sources are confirmed real. 'Beyond pass@1' (arXiv:2603.29231): n=23,392 episodes confirmed, super-linear degradation confirmed (pass@1 drops from 76.3% short to 52.1% very long, O(T^2) variance growth). 'Illusion of Diminishing Returns' (arXiv:2509.09677, ICLR 2026): self-conditioning mechanism confirmed, 'thinking mitigates self-conditioning' confirmed. Two specific errors in the claim: (1) 'corrupted training data' is not in either paper — the mechanism is inference-context corruption, not training data corruption; this conflation is inaccurate. (2) The o1/thinking mitigation finding belongs to 'Illusion' only; 'Beyond pass@1' deliberately disabled extended thinking and does not evaluate it.

---

### [key: workflow-predetermination-reliability]
- evidence: consensus
- group: workflow-architecture
- sources: https://www.morphllm.com/llm-workflows, https://arxiv.org/pdf/2511.00330

**Claim:** Practitioner and research consensus (Morph LLM Workflows 2026 guide; Sherlock, 2025; plan-then-execute literature) holds that LLM workflows are rendered more reliable by pre-determining the solution path — reducing agent autonomy in choosing next actions — than by fully agentic open-ended loops. Pre-determined workflows allow offline validation of the plan before any execution begins. Mechanism: unconstrained agent autonomy multiplies decision points, each of which can diverge; pre-determined paths convert sequential decisions into sequential lookups. Scope: applies when a task solution path can be specified in advance; breaks down for open-ended exploratory tasks with unpredictable intermediate states. Implication: kit-maker should default to scripted workflow prompts (plan defined at authoring time) with tool-calling for variable operations, reserving fully agentic loops for the minority of genuinely open-ended tasks.

---

### [key: skipping-instructions-training-bias]
- evidence: consensus
- group: sequential-failure-modes
- sources: https://www.unite.ai/why-large-language-models-skip-instructions-and-how-to-address-the-issue/, https://www.emergentmind.com/topics/reasoning-failures-in-llms

**Claim:** Practitioner analysis (Unite.AI, 2025; emergentmind LLM reasoning failures survey) identifies that LLMs skip instructions in multi-step prompts because their training data is heavily weighted toward simpler, shorter instruction patterns — complex multi-step instructions are statistically underrepresented. Token-limit truncation causes a related failure: instructions beyond the context window are silently ignored without error. Mechanism: preference learning amplifies the completion of short, common instruction patterns while treating long or unusual sequences as lower-probability. Scope: particularly affects non-standard procedural instructions not well-represented in pretraining. Implication: kit-maker workflow prompts should be tested with the target model for step-skip failures, not assumed correct; unusual or complex process steps should be explicitly reinforced with 'do not skip' markers or broken into sub-calls.

---

### [key: anticipated-complexity-early-failure]
- evidence: anecdote
- group: sequential-failure-modes
- sources: https://www.emergentmind.com/topics/reasoning-failures-in-llms

**Claim:** Research identified (emergentmind reasoning failures compilation) that as total required path length increases, LLMs fail more frequently at the EARLIEST steps — not later. This counterintuitive pattern suggests that models assess anticipated task complexity and enter a lower-quality generation mode from the start when the path length appears long. Mechanism: context priming from a long problem statement may shift the probability distribution toward high-uncertainty outputs even before any chain steps are attempted. Scope: observed in multi-step planning and navigation; may reflect a general property of difficulty-cued generation. Implication: kit-maker task framing should present each procedure step in isolation where possible, not as one long sequential script that reveals total complexity upfront.

---

### [key: plan-then-execute-separation]
- evidence: consensus
- group: workflow-architecture
- sources: https://arxiv.org/pdf/2509.08646, https://www.emergentmind.com/topics/plan-then-execute-llm-agents

**Claim:** The plan-then-execute pattern (documented across production agent implementations, 2024–2026) separates sequential workflow reasoning into two distinct LLM calls: one that produces the plan (all steps, dependencies, outputs) and one that executes each step. Dynamic re-planning inserts a third call when execution diverges from the plan. Mechanism: separating planning from execution allows the plan to be validated offline before any irreversible actions are taken; it also allows a smaller/cheaper model to execute individual steps while a larger model handles planning. Scope: most beneficial for workflows with irreversible actions (writes, API calls, form submissions); less necessary for read-only research tasks. Implication: kit-maker pipeline architecture should encode plan-then-execute as the default structural pattern for any workflow with side effects.

---

## Null results
- Query 8 (FollowBench performance degradation) returned no new claims beyond what query 5 had already captured — same paper, same findings, no additional scope detail found.

## New angles surfaced
- Checkpoint and state validation strategies for mid-pipeline LLM outputs — distinct from both planning and execution, not currently covered as a standalone angle
- Thinking models (o1/r1-style) as a structural mitigation for sequential failure — they internalize multi-step reasoning within a single turn, changing the architecture surface for kit-maker pipelines
- Instruction format encoding (numbered lists vs. prose vs. XML tags vs. dependency graphs) as a discrete variable affecting sequential compliance — PADME graph work suggests this is a real design lever
- Model routing by step type: evidence that smaller models can safely execute simple sequential steps while larger models handle planning suggests per-step model selection as a design dimension for kit pipelines

