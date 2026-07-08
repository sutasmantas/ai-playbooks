# Research Archive: Validation methodology for AI behavioral kits — how to verify a kit produces intended behavior

## Saturation log
- Query 1: "LLM evaluation methodology instruction following compliance testing benchmark empirical 2024 2025" — 4 new keys
- Query 2: "AI behavior validation systematic review methods LLM agent evaluation 2024 2025" — 3 new keys
- Query 3: "AI evaluation failures benchmark inadequacy validity threats instruction following LLM 2024 2025" — 3 new keys
- Query 4: "prompt testing practitioners verify Claude behavior kit validation applied guide 2024 2025" — 2 new keys
- Query 5: "automated LLM instruction compliance testing benchmark evaluation quantitative 2024 2025" — 2 new keys
- Saturated: YES

---

## Claims (14)

### [key: constraint-type-specificity]
- evidence: empirical
- confidence: high
- group: benchmark-design
- sources: https://arxiv.org/abs/2601.18554

**Claim:** MOSAIC benchmark (arXiv:2601.18554, 2025) evaluated 5 LLMs across up to 20 application-oriented generation constraints and found that compliance is not a monolithic capability but varies significantly with constraint type, quantity, and position within the prompt. Mechanism: synergistic and conflicting interactions between co-present constraints cause interference; positional biases (primacy and recency effects) mean a rule at prompt position N fails at position M on the same model. Scope: applies to complex multi-constraint instructions in real-world applications; does not apply to single-constraint or trivially verifiable tasks (word count, format). Kit implication: a behavioral kit cannot be validated with a single pass-fail test; per-constraint-type compliance checks are required, and rule ordering within the system prompt is a first-class design variable.

**Verify note:** arXiv:2601.18554 confirmed real, accepted to EACL 2026. MOSAIC confirmed. 5 LLMs, up to 20 constraints, primacy AND recency effects both confirmed, synergistic/conflicting interactions confirmed, compliance varies by type/quantity/position confirmed. Minor overstatement: the 'rule at prompt position N fails at position M on the same model' phrasing implies a per-position controlled test that goes slightly beyond what is stated in the abstract — likely derivable from the data but not confirmed as an explicit stated finding.

---

### [key: sequential-instruction-universal-failure]
- evidence: empirical
- confidence: high
- group: sequential-compliance
- sources: https://arxiv.org/abs/2406.19999

**Claim:** SIFo benchmark (arXiv:2406.19999, 2024) tested sequential instruction following across four task types (text modification, QA, mathematics, security rules) on both closed- and open-source LLMs and found all models struggle with sequences of instructions, though more recent and larger models significantly outperform older/smaller ones. Mechanism: limited coherence between multiple instructions accumulates error across steps; positional bias interacts with sequence length so early instructions are deprioritized as sequence grows. Scope: applies to sequences of instructions issued in a single prompt; individual instruction compliance is separately higher. Kit implication: kit rules that depend on earlier rules being active simultaneously are the highest-risk configurations; validation must include multi-rule interaction tests, not just individual rule checks.

**Verify note:** arXiv:2406.19999 confirmed real, published at EMNLP 2024 Findings (peer-reviewed). All four task types confirmed (text modification, QA, mathematics, security rules). 'All models struggle' finding confirmed. Larger/more recent models outperforming confirmed. Three challenges (limited coherence, positional bias, verifiability) confirmed. Minor gap: the directional claim that 'early instructions are deprioritized as sequence grows' is a specific finding not confirmed in abstract-level text — the paper names 'positional bias' as a challenge but the precise direction is not stated in the abstract.

---

### [key: task-completion-vs-behavioral-deviation]
- evidence: empirical
- confidence: medium
- group: agentic-evaluation
- sources: https://arxiv.org/abs/2512.12791

**Claim:** Agent Assessment Framework paper (arXiv:2512.12791, 2025, validated on a CloudOps production case) found that experiments using conventional task-completion metrics 'reveal behavioral deviations overlooked by conventional metrics.' The proposed four-pillar framework (LLM, Memory, Tools, Environment) catches deviations that binary task-completion scores miss. Mechanism: binary success/fail masks partial compliance — an agent can complete a task via an unintended path that violates behavioral rules; the task metric is indifferent to how the outcome was reached. Scope: applies to multi-step agentic systems with tool access; less relevant for single-turn generation. Kit implication: kit validation must include trajectory-level checks (which tools were called, in what order, with what parameters), not only whether the final output looks correct.

**Verify note:** arXiv:2512.12791 confirmed real (submitted December 14, 2025). Four-pillar framework (LLM, Memory, Tools, Environment) confirmed. Autonomous CloudOps use case via MontyCloud Inc confirmed. 'Behavioral deviations overlooked by conventional metrics' finding confirmed. Confidence capped at MEDIUM because the empirical backing is a single production case study, not a multi-system benchmark evaluation. The claim presents this as stronger empirical evidence than a single illustrative case study warrants.

---

### [key: agentif-automated-agreement]
- evidence: empirical
- confidence: low
- group: benchmark-design
- sources: https://keg.cs.tsinghua.edu.cn/persons/xubin/papers/AgentIF.pdf

**Claim:** AGENTIF benchmark (Tsinghua, 2025) introduced Constraint Success Rate (CSR, proportion of individual constraints satisfied) and Instruction Success Rate (ISR, proportion of fully-satisfied instructions) and reported 94% agreement between automated evaluator judgments and human annotations at the constraint level. Mechanism: decomposing evaluation to the individual constraint grain makes automated checking tractable because each constraint is narrow enough for a judge model to assess reliably; whole-instruction pass/fail collapses this signal. Scope: requires constraints to be decomposable into independently assessable units; fails for holistic stylistic or tonal requirements. Kit implication: kit rules should be written as discrete, independently verifiable constraints rather than compound or vague directives — this is not just a style preference but a prerequisite for automated regression testing.

**Verify note:** The source is a PDF at keg.cs.tsinghua.edu.cn — it loads (1.1 MB confirmed downloaded) but is binary-compressed and unreadable via available tools. The paper is NOT indexed on arXiv (two separate searches returned zero results). The 94% human-automated agreement figure, the CSR and ISR metric definitions, the Tsinghua authorship, and the 2025 date are all stated in the claim but cannot be independently verified. The underlying methodological concept (per-constraint decomposition) is consistent with MOSAIC and SIFo, so the approach is plausible, but no specific quantitative claim can be confirmed.

---

### [key: benchmark-contamination-shelf-life]
- evidence: empirical
- confidence: medium
- group: benchmark-validity
- sources: https://www.goodeyelabs.com/insights/llm-evaluation-2025-review

**Claim:** Goodhart's Law analysis synthesized in Goodeye Labs 2025 Year in Review found that static public benchmarks achieve roughly a 6-12 month useful shelf life before training-data contamination renders scores unrepresentative; LiveCodeBench showed 20-30% performance drops when models were tested on problems released after their training cutoff versus the same static benchmark. Mechanism: when benchmark items become public, they enter future training corpora; the model learns the distribution of benchmark items rather than the underlying capability the benchmark was designed to measure. Scope: applies to publicly released static benchmarks; private held-out test sets and dynamically refreshed benchmarks are more durable. Kit implication: a kit validated against a public benchmark today may show regression on fresh prompts within months; kit test suites must include held-out private scenarios and be actively refreshed rather than treated as permanent ground truth.

**Verify note:** goodeyelabs.com source resolves and confirms the '6-12 month shelf life' language verbatim, the LiveCodeBench contamination finding, and Goodhart's Law framing. However: (1) this is a blog post / industry review, not a peer-reviewed study — the claim presents it alongside arXiv papers without flagging this epistemic difference; (2) the 20-30% performance drop figure is not confirmed in the fetched text (may be in the article body); (3) the 6-12 month estimate is editorial characterization in a blog, not a measured finding from a controlled study. The phenomenon is real and corroborated by primary LiveCodeBench research, but the cited source's authority is overstated.

---

### [key: llm-as-judge-biases]
- evidence: consensus
- group: evaluation-validity
- sources: https://www.goodeyelabs.com/insights/llm-evaluation-2025-review, https://arxiv.org/abs/2603.25133

**Claim:** Goodeye Labs 2025 synthesis and RubricEval (arXiv:2603.25133) identify four systematic biases in LLM-as-judge evaluation: self-preference bias (models favor outputs resembling their own style), verbosity bias (longer responses rated higher independent of quality), prompt sensitivity (judge scores vary with irrelevant prompt rephrasing), and systematic failure on subtle logical errors. Mechanism: the judge model shares the same learned biases as the model being evaluated; it cannot reliably flag failure modes that are also failure modes of its own generation. Scope: most acute when judge and evaluated model are the same family or size; less severe with smaller specialized judge models trained on human preference data. Kit implication: using the same model to both run the kit and self-evaluate its kit compliance is a validity trap; evaluation should use a separate judge model or rule-based verifiable constraints wherever possible.

---

### [key: benchmark-construct-validity-crisis]
- evidence: consensus
- group: benchmark-validity
- sources: https://arxiv.org/abs/2502.06559

**Claim:** Interdisciplinary review 'Can We Trust AI Benchmarks?' (arXiv:2502.06559, 2025, synthesizing ~100 studies over 10 years) identifies four systematic validity breakdowns: dataset creation biases, data contamination, inability to distinguish signal from noise, and inadequate documentation — plus misaligned incentives that favor performance metrics over real deployment concerns. Mechanism: the 'one-time testing logic' of static benchmarks is architecturally incompatible with the multimodal, iterative, and sociotechnical nature of deployed AI systems; gaming is possible because the benchmark definition is public. Scope: applies to all static text-based benchmarks; the critique is weaker for interactive or adversarially updated evaluations. Kit implication: treat any single benchmark score as a proxy with known validity threats rather than ground truth; kit validation methodology must include dynamic, adversarially-generated test cases alongside any static suite.

---

### [key: prompt-defect-cascade]
- evidence: consensus
- group: prompt-engineering
- sources: https://arxiv.org/abs/2509.14404

**Claim:** Taxonomy of Prompt Defects (arXiv:2509.14404, 2025) classifies prompt failures into six dimensions (specification/intent, input/content, structure/formatting, context/memory, performance/efficiency, maintainability/engineering) and identifies the cross-cutting mechanism that 'small mistakes cascade into unreliable, insecure, or inefficient behavior.' Mechanism: prompts function as the programming interface for LLMs; defects in specification or formatting compound because the model has no runtime error to surface — it silently infers intent incorrectly. Scope: applies to production LLM systems where prompts are the primary control surface; less relevant when model fine-tuning is used instead of prompting. Kit implication: kit rules (prompts) require the same engineering discipline as code — a structured defect taxonomy, a testing harness, and automated guardrails — not just manual review; maintainability is a first-class concern because prompt drift across model versions is the dominant long-run failure mode.

---

### [key: enterprise-gap-general-vs-task-compliance]
- evidence: empirical
- confidence: low
- group: evaluation-validity
- sources: https://arxiv.org/abs/2601.03269

**Claim:** 'The Instruction Gap' (arXiv:2601.03269, 2025) evaluated 13 leading LLMs on enterprise-grade RAG scenarios and found that models excel at general tasks but struggle with precise instruction adherence required for enterprise deployment; Claude Sonnet 4 and GPT-5 ranked highest but the gap between general capability scores and enterprise compliance scores is significant and model-family-specific. Mechanism: general capability training optimizes for helpfulness and fluency, not for exact adherence to arbitrary user-specified constraints; enterprise rules are often idiosyncratic and underrepresented in training data. Scope: finding is specific to enterprise deployment with precise compliance requirements (security rules, refund policies, formatting mandates); general assistant use cases are less affected. Kit implication: capability benchmarks (MMLU, HLE) are not predictive of kit compliance rates; kit-specific evaluation on the exact rules the kit encodes is required, and model selection for kit deployment should be based on that test, not general leaderboard position.

**Verify note:** arXiv:2601.03269 confirmed real (submitted December 19, 2025). 13 LLMs tested confirmed. Enterprise RAG gap finding confirmed. However: Claude Sonnet 4 and GPT-5 are named as the top-ranked tested models in a paper submitted December 2025. Claude Sonnet 4 was not publicly available at that date (Sonnet 3.7 was the most recent Anthropic model at end of 2025; Sonnet 4 launched mid-2026). GPT-5 was also not publicly available in December 2025. This is a hard anachronism that cannot be explained without reading the full paper. Either the submission date is wrong, the model names are incorrect, or the abstract contains placeholder names for future models. The general enterprise compliance gap finding is credible, but the specific model rankings should not be relied upon.

---

### [key: trajectory-assertion-over-output-assertion]
- evidence: consensus
- group: agentic-evaluation
- sources: https://www.promptfoo.dev/docs/guides/evaluate-coding-agents/

**Claim:** Promptfoo coding agent evaluation guide (promptfoo.dev, practitioner documentation, 2025) distinguishes output assertions (did the final response contain X) from trajectory assertions (did the agent actually run command Y, read file Z, request approval W) and recommends trajectory assertions as the primary validation method for agentic kits. Thresholds used in practice include cost caps (e.g., $0.25 per run), latency limits (30,000ms), and rubric scores (0.0-1.0 with a common threshold of 0.75). Mechanism: an agent can produce a correct-looking output via an unintended execution path that violates behavioral rules invisible to output inspection; trajectory inspection catches 'did the agent comply with the kit's process rules, not just produce the right answer.' Scope: requires tool-use transparency and structured logging; not applicable when the agent's execution trace is opaque. Kit implication: kit validation pipelines should assert on tool-call sequences and metadata events, not only final output; cost and latency thresholds should be part of kit pass/fail criteria since behavioral bloat (over-calling tools) is a compliance failure.

---

### [key: static-benchmark-dynamic-profiling]
- evidence: empirical
- confidence: medium
- group: evaluation-methodology
- sources: https://arxiv.org/abs/2402.09880

**Claim:** McIntosh et al. 'Inadequacies of Large Language Model Benchmarks' (arXiv:2402.09880, 2024, reviewing 23 SOTA benchmarks) identifies that static assessment cannot capture LLMs' complex behaviors and potential risks and advocates for 'dynamic behavioral profiling' as the replacement methodology. The paper identifies eight systematic issues: biases, difficulty measuring genuine reasoning, adaptability gaps, implementation inconsistencies, prompt engineering complexity, evaluator diversity, and overlooking cultural/ideological norms. Mechanism: static benchmarks measure behavior at a single point in time on a fixed distribution; deployed models respond to adversarial, out-of-distribution, and culturally variable inputs that the static set never covers. Scope: applies to all single-snapshot benchmark evaluations; dynamic profiling is defined as continuous, adversarially updated evaluation with behavioral trajectory tracking. Kit implication: kit certification should not be a one-time benchmark pass; a maintenance process with periodic adversarial probing and behavioral drift detection is required, analogous to security penetration testing on a schedule.

**Verify note:** Paper is real (arXiv:2402.09880, McIntosh et al., 2024), 23-benchmark scope confirmed, 'dynamic behavioral profiling' explicitly advocated. Issue-count discrepancy: the claim states eight systematic issues; the abstract lists seven. This is a critical review / position paper, not an empirical study — the mechanism claim is the authors' argument, not a measured result. Overall the paper largely supports the claim but the eight-vs-seven count and the position-paper status limit confidence.

---

### [key: end-user-validation-primacy]
- evidence: consensus
- group: evaluation-methodology
- sources: https://arxiv.org/abs/2510.27628

**Claim:** 'Validity Is What You Need' (arXiv:2510.27628, Benthall and Clark, 2025) argues that for enterprise agentic AI, validation by end users and principal stakeholders is the correct validity criterion, not foundation model benchmark scores. A corollary finding: with good validation measures in place, foundation models can often be replaced by much simpler, faster, and interpretable models that handle core logic. Mechanism: agentic AI is a software delivery mechanism in a sociotechnical system; the relevant truth condition is whether the system does what stakeholders need in their context, which foundation model benchmarks are structurally unable to measure. Scope: applies to enterprise deployments with identifiable end users; less applicable to open-ended consumer products where stakeholder preferences are diffuse. Kit implication: kit acceptance criteria should be defined in terms of user outcomes observable during real deployment sessions, not benchmark scores; a kit that scores well on instruction-following benchmarks but fails to serve real users has passed the wrong test.

---

### [key: model-version-churn-breaks-kits]
- evidence: anecdote
- group: kit-maintenance
- sources: https://www.dreamhost.com/blog/claude-prompt-engineering/, https://smartscope.blog/en/generative-ai/claude/claude-code-prompting-official-guidelines-2025/

**Claim:** Practitioner report (DreamHost/SmartScope Claude prompting guides, 2025) found that when Claude Sonnet 4.5 launched in September 2025, it broke existing prompts because Anthropic rebuilt how Claude follows instructions; Claude 4.x takes instructions literally with no inference of implicit intent. Mechanism: model updates change the instruction-following contract at the prompt level — the model's internal priority ordering of competing directives, its willingness to infer underspecified intent, and its default behaviors all shift across versions; kits written for one version may over- or under-specify for the next. Scope: applies to prompt-based kits where the behavioral contract is encoded in natural language; fine-tuned models with locked weights are not affected by provider model updates. Kit implication: kit versioning must be tied to model version; a regression test suite must be run against each new model release before the kit is deployed on that model; 'model-agnostic' kit claims require explicit multi-model validation evidence.

---

### [key: non-determinism-repeat-testing]
- evidence: consensus
- group: evaluation-methodology
- sources: https://www.promptfoo.dev/docs/guides/evaluate-coding-agents/

**Claim:** Promptfoo agent evaluation documentation (2025) specifies that non-determinism in LLM agents requires running evaluations with --repeat 3 or higher to measure variance, not just mean performance. Practitioners use cost and latency thresholds alongside accuracy to define pass/fail. Mechanism: LLM outputs are sampled from a probability distribution; a single test run cannot distinguish a reliably compliant model from one that happens to comply on this sample; repeated runs expose the variance of compliance rate, which is the quantity that matters for production reliability. Scope: applies to all stochastic LLM evaluations; deterministic rule-based system evaluations are exempt. Kit implication: kit validation reports should include compliance rate and variance across N runs (N >= 3, ideally >= 10), not a single pass/fail; a kit that achieves 90% compliance on one run but 40% on another is not production-ready even if the mean looks acceptable.

---

## Null results
- Query 4 (prompt testing practitioners verify Claude behavior) returned practitioner blog posts and security research rather than a canonical applied validation guide; no single authoritative practitioner methodology document was found — only scattered blog posts and one tool documentation page (promptfoo). Useful anecdotal claims were still extracted.

## New angles surfaced
- Behavioral drift detection — how to monitor a deployed kit over time for silent degradation across model updates, analogous to ML model monitoring for data drift
- Adversarial kit probing — red-teaming methodologies specific to behavioral kits (jailbreaks, instruction injection, conflicting user instructions that contradict kit rules)
- Constraint decomposition as a design discipline — how to write kit rules in forms that are independently verifiable at the constraint grain (ties to AGENTIF CSR/ISR finding)
- Cost and latency as behavioral compliance signals — over-tool-calling as a measurable proxy for kit rule violations in agentic systems
- Multi-model portability testing — systematic methodology for verifying that a kit written for model A produces equivalent behavior on model B, given the version-churn finding

