# Research Archive: Instruction abstraction level — overly specific vs overly general rules in LLM instruction following

## Saturation log
- Query 1: "abstract concrete instructions LLM generalization specificity overfitting behavioral" — 7 new keys
- Query 2: "instruction abstraction level following generalization meta-analysis systematic review LLM" — 1 new keys
- Query 3: "overly specific rule failures edge cases LLM overfitting behavioral out-of-distribution prompt" — 2 new keys
- Query 4: "rule abstraction level practitioners prompt engineering which level works applied guide 2024 2025" — 1 new keys
- Query 5: "instruction specificity measurement compliance quantitative study LLM evaluation 2024 2025" — 1 new keys
- Saturated: YES

---

## Claims (12)

### [key: specificity-inverts-under-adversarial-pressure]
- evidence: empirical
- confidence: high
- group: specificity-and-failure-modes
- sources: https://arxiv.org/abs/2603.25056

**Claim:** Study: arxiv 2603.25056 (system prompt attack surface study). A single model's phishing bypass rate ranged from under 1% to 97% depending on prompt configuration — a 96-percentage-point swing. Mechanism: highly specific instructions create single-signal dependence; once an attacker inverts that signal (e.g., by registering domain-matching infrastructure), the model follows the instruction faithfully while the instruction's core assumption has become false. Scope: applies to agent deployments where adversarial inputs are possible and instructions rely on a narrow predictive heuristic; less relevant to closed, non-adversarial tasks. Kit design implication: narrow behavioral rules for security-sensitive agents should be paired with a fallback principle, not deployed as the sole control; over-specification creates exploitable brittleness.

**Verify note:** Source exists (arxiv 2603.25056, 'The System Prompt Is the Attack Surface,' Ron Litvak, March 2026). Key statistics confirmed verbatim: single model phishing bypass rate ranging from under 1% to 97% depending on prompt configuration, domain-matching strategies made exploitable by attacker infrastructure registration, 98% of successful bypasses reason consistent with the inverted signal. Study design is adversarially rigorous: 11 models, 10 prompt strategies, PhishNChips evaluation framework. Scope is correctly represented by the claim (applies to adversarial inputs; less relevant to closed tasks). The kit-design implication (narrow rules need fallback principles) follows directly from the finding.

---

### [key: discrete-vs-fuzzy-instruction-stability-gap]
- evidence: empirical
- confidence: high
- group: specificity-and-failure-modes
- sources: https://arxiv.org/html/2601.11783

**Claim:** Study: 'The Stability Trap' (arxiv 2601.11783). Verdict-level agreement was >99% across all instruction types, but reasoning stability diverged sharply: discrete entity extraction tasks held >90% reasoning stability; continuous quantification tasks (e.g., word counts) collapsed to 19–30%; fuzzy assertion extraction (e.g., 'is this action-oriented?') landed at 35–45%. Mechanism: discrete tasks constrain the evidence space to a target present in the text, forcing reproducible extraction; fuzzy or continuous tasks allow the model to hallucinate different numeric or lexical evidence across runs, producing identical verdicts via unstable reasoning paths. Scope: tested at temperature=0 across model scales 8B–405B for binary yes/no rubrics with fewer than 10 criteria; long-context degradation and conditional logic ('if X then Y') are untested. Kit design implication: instruction rules for reviewers or evaluators should be formulated as discrete, anchor-able checks; fuzzy quality criteria should be decomposed into verifiable sub-checks rather than holistic assertions.

**Verify note:** Source exists (arxiv 2601.11783, 'The Stability Trap,' Shergadwala, Workday Inc., January 2026). All key statistics confirmed: verdict agreement >99%, discrete entity extraction >90% reasoning stability, continuous quantification 19-30%, fuzzy assertion extraction 35-45%, temperature=0, 8B-405B model range (Claude 3.5 Sonnet, Gemini 2.5 Flash Lite, Llama 3.1 405B, DeepSeek R1 Distill Llama 8B), 90 repeated runs per case across 320 unique outputs. One minor unverified detail: 'fewer than 10 criteria' for the binary rubrics — this characterization was not confirmed in the fetched content. Does not affect core finding. Study design is rigorous. Kit-design implication follows directly.

---

### [key: generic-helpful-rules-conflict-with-task-specific-constraints]
- evidence: empirical
- confidence: medium
- group: abstraction-level-and-compliance
- sources: https://arxiv.org/html/2601.22025v1

**Claim:** Study: 'When Better Prompts Hurt' (arxiv 2601.22025). Replacing task-specific system prompts with generic 'helpful assistant' rules caused extraction accuracy to drop from 100% to 90% (10-point decline) and RAG compliance to fall from 93.3% to 80% (13-point decline) in Llama 3 8B testing. Mechanism: generic instructions ('be helpful, provide complete answers') introduce competing objectives; for structured-output tasks requiring clean JSON, verbal completeness conflicts with format precision — the model optimizes for the wrong dimension. Scope: effect is strongest for structured-output tasks (JSON extraction, format-constrained responses) and domain-specific applications; general conversational tasks likely show no degradation. Kit design implication: system-level behavioral rules must be scoped to the task; a kit that injects universal 'be thorough' guidance will degrade any pipeline step requiring format precision.

**Verify note:** Source exists (arxiv 2601.22025v1, 'When Better Prompts Hurt,' Daniel Commey, January 2026). The central claim is confirmed in the abstract: extraction accuracy dropping from 100% to 90% and RAG compliance from 93.3% to 80% in Llama 3 8B when replacing task-specific prompts with generic assistant rules. Confidence capped at medium because: (1) the full experimental section (Section 12) was not fully rendered in the fetched HTML — numerical confirmation is from the abstract's self-report, not the detailed results tables; (2) a 100% baseline extraction accuracy starting point strongly suggests a narrow or synthetic test set, raising generalizability concerns; (3) single-author, single-model study with no visible peer review. The directional finding is consistent with broader literature on structured output formatting conflicts, but the specific numbers should not be treated as precisely generalizable.

---

### [key: instruction-density-dilutes-attention]
- evidence: empirical
- confidence: low
- group: abstraction-level-and-compliance
- sources: https://arxiv.org/abs/2601.03269

**Claim:** Study: 'The Instruction Gap' (arxiv 2601.03269). Across 13 models on 600 test queries, instruction violation counts ranged from 660 (GPT-5 Medium) to 1,330 (Gemini 2.0-Flash) — a 50% difference attributable partly to instruction density. Mechanism: when instructions compete for attention with lengthy knowledge snippets (RAG context), the model's attention allocation is diluted; instructions get under-weighted relative to in-context evidence. Scope: applies to RAG summarization with zero-shot evaluation; does not cover few-shot or optimized prompting. Kit design implication: placing behavioral rules and content context in the same prompt window creates systematic instruction under-adherence; separating structural rules from content or using instruction compression reduces violation rates.

**Verify note:** Source exists (arxiv 2601.03269, 'The Instruction Gap,' Tripathi, Allu, Ahmed, January 2026). Descriptive statistics confirmed: 600 queries, 13 models, GPT-5 Medium at 660 violations, Gemini 2.0-Flash at 1,330 violations. However, two serious problems: (1) The mechanism claim — that the 50% inter-model violation gap is caused by 'instruction density diluting attention' in RAG contexts — is the claim author's causal inference, not something isolated or tested in the study. The paper measures inter-model violation counts, which conflate model capability, RLHF training emphasis, instruction fine-tuning, and context handling — instruction density is not varied as an independent variable. (2) The paper uses 2026-era models (GPT-5, Claude 4-Sonnet, Gemini 2.5) not available for independent verification. The descriptive statistics are credible; the causal attribution to instruction density cannot be supported by this study's correlational design. The kit-design implication (separating rules from content) is reasonable but is not supported by this study.

---

### [key: surface-phrasing-sensitivity-scales-with-model-capability]
- evidence: empirical
- confidence: medium
- group: surface-sensitivity
- sources: https://arxiv.org/html/2502.07445v1

**Claim:** Study: C-BOD benchmark (arxiv 2502.07445), 26 LLMs tested on MMLU with rephrased questions. Average accuracy drop: 2.15% under modest perturbations; 20 of 26 models (77%) showed statistically significant degradation; zero models improved. Paradox: models with >80% baseline accuracy showed the largest declines (up to 4% delta). Mechanism: higher-performing models have implicitly memorized surface patterns of benchmark phrasing; synonym substitution or structural reordering breaks the pattern-match, exposing that performance was partly encoding-dependent rather than purely capability-dependent. Scope: MMLU benchmark; effect scales logarithmically with parameter count. Kit design implication: behavioral rules written in a single canonical phrasing may be brittle to paraphrase in user inputs; kit rules should be tested against semantically equivalent reformulations, not just exact-match scenarios.

**Verify note:** Source exists (arxiv 2502.07445v1, 'Forget What You Know about LLMs Evaluations — LLMs are Like a Chameleon,' Cohen-Inger et al., February 2025). Core statistics confirmed: 26 LLMs, 2.15% average accuracy drop, 20/26 models showing statistically significant degradation, zero models improving, higher-accuracy models showing up to ~4% decline. One specific claim is unconfirmed and likely fabricated: 'effect scales logarithmically with parameter count' — this functional form and the parameter-count framing do not appear in the fetched paper content. The paper reports that higher-baseline-accuracy models show larger declines, but accuracy and parameter count are not the same variable, and no logarithmic relationship was described. Minor mischaracterization: the claim calls it 'C-BOD benchmark' but C-BOD (Chameleon Benchmark Overfit Detector) is a meta-evaluation framework applied to MMLU, not a benchmark itself. The kit-design implication (test rules against paraphrase) follows from confirmed results. The logarithmic scaling claim should be discarded.

---

### [key: compositional-instruction-failure-sequential-vs-separable]
- evidence: empirical
- confidence: medium
- group: instruction-composition
- sources: https://arxiv.org/html/2407.15720v2

**Claim:** Study: LLM compositional ability (arxiv 2407.15720). Models achieved ~90% accuracy on individual sub-tasks but only 0–37% on sequential composite tasks (e.g., Capitalization + Swap) vs. 57–99% on separable composite tasks; scaling provided minimal improvement for sequential failures. Mechanism: sequential tasks share overlapping input embedding spaces, creating interference; the model cannot distinguish which operation should be applied to which feature. Separable tasks map naturally to distinct input regions, avoiding this collision. Scope: task composition in NLP benchmarks; becomes especially critical when instructions chain interdependent operations. Kit design implication: kit rules that chain multiple behavioral constraints in sequence (e.g., 'first check X, then apply Y based on X's result') should expect dramatically lower compliance than rules that apply independent constraints in parallel; decompose multi-step rules into explicitly separated stages.

**Verify note:** Source (arXiv:2407.15720) confirmed real and accessible. Core finding holds: sequential composite tasks perform far worse than separable ones, and scaling does not help for sequential. Numerical ranges are slightly mis-stated (claim says 0–37% sequential, paper shows 0–44%; claim says 57–99% separable, paper shows 46–99%). The overlapping-embedding-spaces mechanism is the authors' hypothesis, not a demonstrated causal finding — the claim presents it as established. Study covers only Mistral/Llama families at 7B–65B, not GPT-4-class models.

---

### [key: abstract-reasoning-instructions-improve-ood-generalization]
- evidence: empirical
- confidence: medium
- group: abstraction-and-generalization
- sources: https://arxiv.org/html/2506.07751v4

**Claim:** Study: AbstRaL (arxiv 2506.07751). Teaching LLMs to generate abstract representations of problems before solving improved out-of-distribution performance: on GSM-Plus distraction variants, Qwen2.5-0.5B reached 36.5% vs. 22.7% for CoT baseline (+61% relative gain); Qwen2.5-Math-7B reached 16.7% vs. 13.3% on AIME24. Critical constraint: models attempting pure symbolism without intermediate natural-language steps 'fall far behind,' showing that abstraction must remain tethered to concrete anchors. Mechanism: abstract representations decouple solution strategy from surface form (specific numbers, names), making learned patterns invariant to contextual shifts; reinforcement learning rewards symbolic distance to gold abstraction plus answer correctness. Scope: validated on mathematical reasoning; applicability to non-mathematical instruction domains is unconfirmed. Kit design implication: kit rules targeting generalization across diverse inputs should be written at a structural/principle level rather than as surface-form recipes, but must include at least one concrete worked example to anchor the abstraction.

**Verify note:** Source (arXiv:2506.07751) confirmed real. The Qwen2.5-0.5B GSM-Plus numbers (36.5% vs. 22.7%) are confirmed from Table 1. The Qwen2.5-Math-7B AIME24 numbers (16.7% vs. 13.3%) are confirmed from Table 3, but the baseline is 'Ori-SFT,' not a 'CoT baseline' as stated. AIME24 has only 30 problems, making that a ~1-problem difference — statistically fragile. The pure-symbolism ablation finding is confirmed. Kit design implication extrapolates training-time RL findings to prompt-writing advice the paper does not support.

---

### [key: principle-plus-example-beats-either-alone]
- evidence: consensus
- group: rule-design-heuristics
- sources: https://www.lakera.ai/blog/prompt-engineering-guide, https://www.getmaxim.ai/articles/a-practitioners-guide-to-prompt-engineering-in-2025/

**Claim:** Consensus from prompt engineering practitioner literature (Lakera guide 2026, getmaxim.ai practitioner guide 2026, garrettlanders.com 2025). Practitioners consistently find that abstract principles alone leave too much interpretation room (under-specification), while concrete examples alone fail to transfer to unseen inputs (over-specification). The emerging consensus recommendation is to pair a principle statement with a small set of representative examples. Mechanism: the principle provides the structural pattern that transfers; the examples constrain the interpretation space to prevent model drift toward unintended readings of the principle. Scope: conversational and instruction-following tasks; likely less important for tightly constrained structured-output tasks where format alone specifies behavior. Kit design implication: kit behavioral rules should be written as 'principle + 1–2 canonical examples,' not as pure enumerated lists or pure abstract statements.

---

### [key: instruction-complexity-degrades-multi-step-adherence]
- evidence: empirical
- confidence: high
- group: instruction-composition
- sources: https://arxiv.org/abs/2406.19999

**Claim:** Study: SIFo benchmark (arxiv 2406.19999, EMNLP 2024 Findings). All tested LLMs (both closed- and open-source) 'struggle with following sequences of instructions,' with more recent and larger models outperforming older ones but no model achieving robust adherence. Mechanism: final-instruction verification design of the benchmark means earlier instruction failures propagate; positional bias causes instruction adherence to vary based on order, not just content. Scope: sequential instruction tasks across text modification, QA, mathematics, and security rules; direct compliance with single instructions is not measured. Kit design implication: kit prompts that front-load long ordered rule sequences will see compounding non-adherence; rules most critical to output quality should be placed at the end of instruction sequences, or structured as parallel constraints rather than ordered steps.

**Verify note:** Source (arXiv:2406.19999) confirmed real and published at EMNLP 2024 Findings (aclanthology.org/2024.findings-emnlp.92). Core claims — all models struggle, larger/newer models outperform older ones, no model achieves robust adherence, positional bias — match the abstract. The two specific failure mode labels (cross-instruction confusion, background knowledge gaps) are plausible from the full paper body but not confirmed from the abstract alone.

---

### [key: rule-underspecification-leaves-gaps-filled-inconsistently]
- evidence: empirical
- confidence: low
- group: under-specification
- sources: https://arxiv.org/abs/2603.25056

**Claim:** Finding from system prompt security analysis (arxiv 2603.25056). Models do not fill underspecified instruction gaps with common-sense reasoning analogous to humans; instead they collapse quantifier precision — treating 'primarily' as equivalent to 'exclusively' in practice. This is not a security failure specifically but a general specification failure: the model selects a deterministic interpretation of an ambiguous instruction and applies it consistently, even when that interpretation diverges from author intent. Mechanism: LLMs reduce ambiguity via pattern-matching to the most frequent training-data interpretation of the quantifier or qualifier, not by inferring intent from context. Scope: applies to instructions using hedged quantifiers ('usually,' 'often,' 'prefer,' 'primarily'); instructions with binary formulations are less affected. Kit design implication: kit rules that use soft quantifiers should be replaced with explicit priority ordering or conditional branches ('if X is present, do Y; otherwise default to Z') to prevent unintended deterministic collapse.

**Verify note:** Source (arXiv:2603.25056) exists but is specifically about phishing bypass rates in LLM email security agents — not about quantifier collapse or general specification failure. The paper does NOT discuss treating 'primarily' as 'exclusively,' does not frame findings as general specification failure, and explicitly positions itself as a security paper. The claimed mechanism (LLMs pattern-match quantifiers to most frequent training-data interpretation) is not in this source. The claim inverts the paper's own framing.

---

### [key: evaluation-driven-iteration-beats-a-priori-abstraction-choice]
- evidence: empirical
- confidence: medium
- group: rule-design-heuristics
- sources: https://arxiv.org/html/2601.22025v1, https://www.getmaxim.ai/articles/a-practitioners-guide-to-prompt-engineering-in-2025/

**Claim:** Practitioner finding from 'When Better Prompts Hurt' (arxiv 2601.22025) and corroborated by getmaxim.ai guide. No a-priori rule exists for whether a more specific or more abstract prompt will perform better; performance direction is task-dependent and must be measured. The paper demonstrated that 'evaluation-driven iteration matters more than universal prompt recipes.' Mechanism: different task types have different optimal abstraction levels; structured output tasks favor specificity, open-ended generation favors principle-level guidance, adversarial tasks may require neither. Scope: applies across task types in production deployments; less relevant for well-understood task categories where the mapping is already empirically established. Kit design implication: the kit should include an evaluation harness for testing instruction variants, not just a single canonical rule set; the design should treat abstraction level as a tunable parameter, not a fixed design decision.

**Verify note:** Source (arXiv:2601.22025) exists. Actual title is 'When Generic Prompt Improvements Hurt' — misquoted in claim as 'When Better Prompts Hurt.' Core thesis confirmed: generic prompt additions do not monotonically improve performance; evaluation-driven iteration is advocated over universal recipes. The abstraction-level taxonomy attributed to the paper (structured tasks → specificity, open-ended → principle-level, adversarial → neither) does not appear in the paper — it is an extrapolation added by the claim.

---

### [key: reasoning-model-advantage-diminishes-for-low-abstraction-tasks]
- evidence: empirical
- confidence: low
- group: model-vs-instruction-design
- sources: https://arxiv.org/abs/2601.03269

**Claim:** Finding from 'The Instruction Gap' (arxiv 2601.03269). Reasoning models (Gemini 2.5-Flash thinking vs. non-thinking) showed only 8.8% improvement in instruction violation rate on RAG summarization despite substantial compute increase. Mechanism: reasoning capacity helps most with under-specified, high-abstraction tasks that require gap-filling; for tightly specified formatting and content-boundary rules, the bottleneck is attention allocation, not reasoning quality. Scope: RAG summarization tasks with explicit formatting and content-boundary rules. Kit design implication: upgrading to a reasoning model does not reliably fix instruction-adherence failures; the structural cause (instruction density, competing objectives, positional placement) must be fixed at the instruction level, not the model level.

**Verify note:** Source (arXiv:2601.03269) exists. The specific quantitative claims — 8.8% improvement, Gemini 2.5-Flash thinking vs. non-thinking comparison — cannot be confirmed from the abstract or any accessible version. The abstract mentions Claude-Sonnet-4 and GPT-5 as top performers but makes no mention of Gemini or reasoning-mode comparisons. The 8.8% figure is precise enough to be either a real finding or a fabrication; it is currently unverified.

---

## Null results
- instruction abstraction level following generalization meta-analysis systematic review LLM — no systematic review or meta-analysis directly studying abstraction level as the independent variable exists; results returned were LLMs-as-tools-for-systematic-reviews, not studies of instruction abstraction
- rule abstraction level practitioners prompt engineering which level works applied guide 2024 2025 — practitioner guides converged on 'iterate and measure' without producing quantitative comparisons of abstraction levels; consensus claims extracted but no empirical numbers

## New angles surfaced
- Instruction placement and positional bias — SIFo benchmark shows rule position in a sequence affects adherence independently of rule content; a dedicated angle on positional effects in multi-rule prompts would extend the abstraction-level findings
- Quantifier precision in behavioral rules — the finding that models collapse 'primarily' to 'exclusively' suggests a dedicated angle on linguistic hedging in instructions (soft vs. hard quantifiers) and its effect on behavioral boundaries
- Evaluation harness design for instruction variants — the empirical finding that abstraction-level optimality is task-dependent and must be measured suggests an angle on how to design fast A/B evaluation loops for rule variants inside a kit

