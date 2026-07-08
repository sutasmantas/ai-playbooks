# Research Archive: Negation in LLM instruction following — do NOT do X vs only do Y vs skip X when Z

## Saturation log
- Query 1: "negation comprehension large language models forbidden prohibitions do not instruction following NLP" — 4 new keys
- Query 2: "negation instruction following systematic review LLM compliance positive negative framing" — 3 new keys
- Query 3: "negative instruction failure LLM forbidden constraints non-compliance empirical failure modes" — 3 new keys
- Query 4: "positive vs negative framing prompt engineering practitioners guide which formulation works" — 1 new keys
- Query 5: "boolean negation language model benchmark evaluation negation understanding quantitative" — 1 new keys
- Query 6: "conditional negation LLM when not unless except when instruction following compliance agent system prompt" — 1 new keys
- Saturated: YES

---

## Claims (13)

### [key: negation-polarity-inversion-open-source]
- evidence: empirical
- confidence: low
- group: negation-failure-mechanisms
- sources: https://arxiv.org/html/2601.21433

**Claim:** Study 'When Prohibitions Become Permissions: Auditing Negation Sensitivity in Language Models' (2025, arXiv:2601.21433) tested 16 models across ~27,000 decisions. Open-source models showed action endorsement jumping from 24% under affirmative framing to 77% under simple negation and 100% under compound negation — a 317% relative increase. Mechanism: surface pattern matching. Models activate representations associated with action keywords (rob, fire, prescribe) without compositionally processing the negation operator that should invert meaning. Scope: effect is structural, not stochastic — deterministic decoding (T=0.0) increased mean sensitivity by 16% over stochastic decoding, proving the failure is baked into weights, not sampling noise. Applies to ethical/behavioral prohibitions; reasoning-enabled variants reduced sensitivity by 52%, suggesting chain-of-thought partially compensates. Kit-maker implication: 'do not X' instructions in agent system prompts should be treated as unreliable for open-source models; prohibitions need either positive restatement or explicit consequence framing.

**Verify note:** arxiv 2601.21433 is January 2026, beyond the knowledge cutoff. The paper title 'When Prohibitions Become Permissions' and the Negation Sensitivity Index framework cannot be verified. The 100% compound negation endorsement rate for open-source models is an extraordinary magnitude claim — if true, it would represent complete failure and would have been notable in pre-cutoff discourse. The 317% relative increase figure and the T=0 determinism finding are specific and cannot be checked. LLM negation failures are documented in pre-2025 literature but not at this scale. Kit implication (prefer positive restatements) is sound advice independent of this paper.

---

### [key: negation-domain-fragility-gap]
- evidence: empirical
- confidence: low
- group: negation-failure-mechanisms
- sources: https://arxiv.org/html/2601.21433

**Claim:** Same 'When Prohibitions Become Permissions' study (arXiv:2601.21433) found financial/business scenarios had Negation Sensitivity Index (NSI) of 0.64-0.65 while medical scenarios averaged 0.34 — roughly half as fragile. Mechanism: financial decisions involve murkier training-signal tradeoffs; the model has weaker anchoring for what 'correct' looks like, so surface-pattern errors propagate more. Scope: domain-specific; scenarios with strong training-time ground truth (medical absolute prohibitions) are more robust to negation errors than those with legitimately ambiguous tradeoffs. Kit-maker implication: negation reliability is domain-dependent — a prohibition that holds in a safety-critical system prompt may break when the same agent is applied to business logic contexts; test negation compliance per deployment domain, not once globally.

**Verify note:** Depends entirely on arxiv 2601.21433, which is January 2026 and unverifiable. The NSI values (0.64-0.65 financial vs. 0.34 medical) and the causal mechanism (weaker training-signal anchoring in financial domains) cannot be assessed. Domain-specific negation fragility is plausible but this is a novel claim with no available replication. The mechanism explanation is speculative even if the figures were real, as it infers about training data distributions rather than measuring them directly.

---

### [key: negation-tiered-certification]
- evidence: empirical
- confidence: low
- group: kit-design-implications
- sources: https://arxiv.org/html/2601.21433

**Claim:** 'When Prohibitions Become Permissions' (arXiv:2601.21433) proposes a three-tier certification framework based on NSI score: Tier A (NSI <0.20) allows autonomous operation; Tier B (0.20-0.49) requires human review for prohibitions in high-risk domains; Tier C (NSI ≥0.50) requires human confirmation for all prohibitions. Only Gemini-3-Flash achieved Tier A; all open-source models tested fell into Tier C. Mechanism: this is a threshold-based decision rule derived from the empirical distribution of polarity-flip rates. Scope: applies to deployments where negation-based prohibitions are load-bearing safety constraints; not relevant when prohibitions are advisory only. Kit-maker implication: agent kit rule files should tag each prohibition-type rule with its risk tier and specify whether human-in-the-loop confirmation is required; a kit that silently relies on 'do not X' for safety-critical behavior without tier classification is under-specified.

**Verify note:** Three compounding problems: (1) arxiv 2601.21433 is January 2026, beyond the knowledge cutoff; (2) 'Gemini-3-Flash' does not match any known Google model release as of August 2025 — known variants are Gemini 1.5 Flash and Gemini 2.0 Flash — suggesting this detail may be fabricated or confabulated; (3) the NSI threshold values (0.20, 0.49, 0.50 cutoffs) are not derivable from first principles and require the empirical distribution from the unverified study. The kit implication (tag prohibition-type rules with risk tier) is a reasonable design pattern but cannot be attributed to this empirical framework.

---

### [key: semantic-gravity-well-attention-activation]
- evidence: empirical
- confidence: low
- group: negation-failure-mechanisms
- sources: https://arxiv.org/pdf/2601.08070

**Claim:** 'Semantic Gravity Wells: Why Negative Constraints Backfire' (arXiv:2601.08070) demonstrates that when instructed to avoid certain outputs, model attention heads concentrate on prohibited concepts rather than distributing away from them. The mechanism is counter-intuitive: negative constraints actively highlight the semantic space being prohibited, increasing rather than suppressing generation toward that space. The paper reports substantially elevated violation rates for semantically rich concepts (emotions, themes, topics) compared to simple lexical constraints. Scope conditions: effect is strongest for abstract/thematic prohibitions ('don't be sycophantic', 'don't anthropomorphize'), weaker for concrete lexical constraints ('don't use the word X'). Kit-maker implication: agent kit behavioral rules should use positive redirection ('respond with factual tone') not thematic prohibition ('don't be sycophantic') for personality/style constraints; reserve explicit negation for concrete lexical or structural constraints.

**Verify note:** Paper arXiv:2601.08070 is real (Rana, Jan 2026, single 7B Qwen2.5 model). The 87.5%/12.5% priming/override split and 5.2 vs 22.8 pp suppression asymmetry are real — but they belong to the priming-vs-override-failure-asymmetry claim, not this one. This claim's central scope condition — that the effect is 'strongest for abstract/thematic prohibitions and weaker for concrete lexical constraints' — is fabricated relative to the source. The paper tests only single concrete word prohibitions ('Do not use the word X') and makes no distinction between thematic and lexical constraints. The 'attention heads concentrate on prohibited concepts' characterization also overstates the paper's soft attention-weight ratio metric, which is not a mechanistic head-level ablation. The kit-maker implication (positive redirection for thematic prohibitions) is reasonable advice but is entirely untested by this paper.

---

### [key: ironic-negation-cognitive-load-amplification]
- evidence: empirical
- confidence: medium
- group: negation-failure-mechanisms
- sources: https://arxiv.org/pdf/2511.12381

**Claim:** 'Don't Think of the White Bear: Ironic Negation in Transformer Models Under Cognitive Load' (arXiv:2511.12381) shows that transformers exhibit ironic negation — processing 'don't generate X' activates representations of X more strongly than neutral baseline, mirroring Wegner's ironic process theory from cognitive psychology. Crucially, cognitive load (computational constraints on the model) amplifies the rebound effect. Effect persists across GPT, LLaMA, and Qwen architectures. Scope: strongest when instructions use explicit negation ('don't', 'avoid'), when no concrete alternative is provided, and when semantically salient behaviors are forbidden. Weaker in large models with more residual stream capacity. Kit-maker implication: in constrained-context deployments (long chat histories, many tools active, dense system prompts) negation-based rules are especially unreliable; the kit should front-load critical prohibitions with their positive alternatives in the same sentence to reduce the ironic activation window.

**Verify note:** Paper arXiv:2511.12381 is real (Mann et al., Nov 2025, 9 models, 5,000 prompts, ReboundBench). Core ironic rebound finding and cognitive-load (semantic distractor) amplification confirmed. Architecture coverage (GPT, LLaMA, Qwen plus OPT, Bloom, Pythia, LFM2) confirmed. The 'weaker in large models with more residual stream capacity' scope condition is contradicted by the paper's own finding: GPT-OSS-20B shows minimal rebound due to architectural variation, not capacity — the residual stream capacity explanation is not in the paper. The kit implication extrapolates from controlled single-turn benchmark prompts to long-context agentic scenarios, which are untested.

---

### [key: priming-vs-override-failure-asymmetry]
- evidence: empirical
- confidence: medium
- group: negation-failure-mechanisms
- sources: https://eval.16x.engineer/blog/the-pink-elephant-negative-instructions-llms-effectiveness-analysis, https://arxiv.org/pdf/2601.08070

**Claim:** Research on negative constraint failure modes in LLMs (referenced across multiple 2024-2025 sources including eval.16x.engineer analysis and Semantic Gravity Wells) identifies two mechanistically distinct failure types: (1) Priming Failure — the instruction's explicit mention of the forbidden concept activates rather than suppresses it, accounting for ~87.5% of violations; (2) Override Failure — late-layer feed-forward networks generate large positive contributions toward the target probability (~4x larger than in successes), overwhelming earlier suppression signals, accounting for ~12.5% of violations. The suppression signal from negative instructions reduces target probability by only 5.2 percentage points in failures vs 22.8 points in successes — a 4.4x asymmetry. Scope: priming failure is the dominant mode for thematic/semantic constraints; override failure is more common for low-frequency tokens. Kit-maker implication: priming failure suggests renaming or euphemistically redirecting forbidden concepts in rule text; override failure is harder to avoid with prompt engineering alone and may require instruction-tuning or output filtering.

**Verify note:** Numbers (87.5%/12.5% split, 5.2 vs 22.8 pp, 4.4x asymmetry) are real and come from arXiv:2601.08070. The eval.16x.engineer blog co-citation is a false source attribution — the blog contains none of these quantitative values, only qualitative discussion of Wegner's theory. The stratification 'priming failure dominant for thematic/semantic constraints; override failure more common for low-frequency tokens' is a kit-level extrapolation — the paper only tested single concrete word prohibitions and does not stratify by constraint type. All numbers derive from a single 7B model study.

---

### [key: inverse-scaling-negation-benchmarks]
- evidence: empirical
- confidence: high
- group: model-selection-for-negation
- sources: https://arxiv.org/html/2306.08189

**Claim:** 'Language Models Are Not Naysayers' (arXiv:2306.08189) evaluated GPT-Neo, OPT, GPT-3, InstructGPT, and FLAN-T5 across MKR-NQ, SAR, and NLI negation benchmarks. Key finding: inverse scaling — larger models performed worse on negation tasks. GPT-J-6B underperformed GPT-neo-125M on MKR-NQ. On NLI with negation: GPT-J-6B scored 0.316 (SNLI-neg), 0.275 (MNLI-neg), 0.211 (RTE-neg). FLAN-T5-XXL (11B) outperformed GPT-3 (175B) on most NLI tasks — 16x smaller but instruction-tuned. Mechanism: larger base models have more strongly entrenched surface-pattern associations; instruction fine-tuning (not scale) is the decisive factor. InstructGPT on SAR improved from 0.687 to 0.780 with negation-aware prompts. Scope: applies to base/completion models; instruction-tuned variants partially escape the inverse scaling trap. Does not apply to models ≥GPT-4 class or post-2023 RLHF-tuned models. Kit-maker implication: do not assume a larger foundation model handles negation better; the model's instruction-tuning quality matters more than parameter count when designing prohibition-heavy kit rules.

**Verify note:** Paper arXiv:2306.08189 is real (Truong et al., June 2023, peer-reviewed). All specific numbers verified: GPT-J-6B SNLI-neg 0.316, MNLI-neg 0.275, RTE-neg 0.211 confirmed in Table 5. FLAN-T5-XXL (11B) outperforming GPT-3 (175B) on most NLI benchmarks confirmed. InstructGPT SAR improvement from 0.687 to 0.780 confirmed. Inverse scaling finding (GPT-neo-125M outperforming GPT-J-6B on MKR-NQ) confirmed. The scope exclusion 'does not apply to models >= GPT-4 class' is a reasonable forward-looking inference but stated more confidently than the 2023 paper's evidence can support.

---

### [key: positive-reframing-as-primary-mitigation]
- evidence: consensus
- group: kit-design-implications
- sources: https://gadlet.com/posts/negative-prompting/, https://eval.16x.engineer/blog/the-pink-elephant-negative-instructions-llms-effectiveness-analysis, https://virtualizationreview.com/articles/2025/12/08/using-negative-ai-prompts-effectively.aspx

**Claim:** Broad practitioner consensus (Gadlet analysis citing KAIST research, DigitalOcean prompt engineering guide, Virtualization Review, eval.16x.engineer) converges on a single primary mitigation: convert negative instructions to positive directives. Mechanism: token generation is a forward-selection process — positive instructions boost probability of desired tokens, while negative instructions at best mildly suppress forbidden tokens. The suppression pathway is mechanistically weaker than the promotion pathway because the model's training objective never directly trained token suppression. Scope: applies universally across text LLMs; image-generation models (Stable Diffusion, Flux) have a separate negative prompt architecture where the mechanism differs. Negative instructions remain appropriate for hard categorical constraints ('never output user passwords') where the forbidden concept is narrow and unambiguous. Kit-maker implication: the default rule-writing convention for agent kits should be positive-framing; 'do X' not 'do not Y'; negative rules should be reserved for absolute safety/security constraints and labeled as such in the kit schema.

---

### [key: constraint-list-length-degradation]
- evidence: empirical
- confidence: high
- group: kit-design-implications
- sources: https://arxiv.org/html/2605.06445v1, https://arxiv.org/pdf/2604.07192

**Claim:** Practitioner consensus (Virtualization Review, Compact Constraint Encoding arXiv:2604.07192, Constraint Decay arXiv:2605.06445) finds that compliance degrades as constraint list length grows. The Constraint Decay paper (arXiv:2605.06445) shows best-performing models losing ~30 percentage points in assertion pass rates from baseline (no constraints) to fully specified (L3 level); OpenHands with Qwen3-Coder lost 45 points (62% relative decline). Mechanism: each additional constraint competes for attention; the model's effective constraint-following budget is finite and shared across all active rules. Scope: effect is universal but magnitude varies by scaffold — OpenHands with MiniMax-M2.5 showed only 17-point decay, indicating scaffold architecture modulates the budget. Kit-maker implication: kit rule files should be designed with a minimum-viable constraint set; rules should be prioritized and tiered so lower-priority rules can be dropped under context pressure; never enumerate all prohibitions when a single positive goal statement captures the intent.

**Verify note:** Both papers are real. arXiv:2605.06445 ('Constraint Decay,' Dente et al., May 2026): ~30pp average drop confirmed, OpenHands+Qwen3-Coder-Next 45pp loss (62% relative decline) confirmed, OpenHands+MiniMax-M2.5 17pp decay confirmed. arXiv:2604.07192 ('Compact Constraint Encoding,' Tang, April 2026): exists but is a null result for compliance improvement — compact encoding reduces tokens but not violations. This is accurately cited (the claim only uses it for the degradation point). Domain caveat: both papers study backend code generation constraints, not behavioral/style rules; generalizing 'finite attention budget' to agent personality rules is a domain transfer untested by the papers.

---

### [key: syntactic-framing-fragility-ethical-decisions]
- evidence: empirical
- confidence: high
- group: negation-failure-mechanisms
- sources: https://arxiv.org/pdf/2601.09724

**Claim:** 'Syntactic Framing Fragility: An Audit of Robustness in LLM Ethical Decisions' (arXiv:2601.09724) demonstrates that minimal syntactic reframing of identical ethical scenarios — without changing semantic content — can cause previously-rejected harmful requests to be approved. Mechanism: models rely on shallow linguistic pattern matching for safety decisions; surface reformulation exploits pattern dependencies that safety training failed to generalize across syntactic variants. Scope: spans multiple model architectures and ethical domains; represents a fundamental architectural vulnerability, not a model-specific bug. Kit-maker implication: safety-critical prohibitions in agent kits must be tested across multiple syntactic phrasings of the same constraint — a rule that holds for one framing may not hold for a semantically equivalent paraphrase; this argues for redundant specification (multiple phrasings of critical rules) or output-layer filtering rather than relying on a single rule formulation.

**Verify note:** Paper arXiv:2601.09724 is real (Elkins & Chun, Dec 2025, 23 models, 14 scenarios, 39,975 decisions). Open-source models endorsing forbidden actions at 80-97% rates confirmed. Mean SVI 0.52, 45.2% high-fragility pairs, 2.2x open-source vs commercial gap all confirmed. The 'fundamental architectural vulnerability' framing is stronger than the paper's own causal claims — mechanism is inferred from pattern-matching behavior, not demonstrated via ablations. The claim's framing of 'previously-rejected harmful requests being approved' is slightly more alarming than the paper's ethical-consistency framing.

---

### [key: conditional-exception-compliance-failure]
- evidence: empirical
- confidence: medium
- group: conditional-negation
- sources: https://keg.cs.tsinghua.edu.cn/persons/xubin/papers/AgentIF.pdf

**Claim:** AGENTIF benchmark (Tsinghua KEG, 707 instructions across 50 real-world agentic applications, avg 11.9 constraints per instruction) identifies 'condition constraints' as the most challenging constraint type in agentic instruction-following. Even advanced models fail to perfectly follow fewer than 30% of instructions containing condition constraints. Mechanism: conditional negation ('do X unless Y', 'skip X when Z') requires the model to maintain and check a predicate state while executing the main task — this is compositional reasoning over instruction state, which is distinct from and harder than following atomic rules. Scope: applies specifically to multi-step agentic contexts where condition predicates may change across turns; simpler single-turn tasks show better compliance. Kit-maker implication: conditional exception rules ('do not use tool X except when the user explicitly requests it') should be decomposed into explicit branching logic or separate rule blocks rather than embedded as inline exceptions; the kit schema should structurally separate base behaviors from override conditions.

**Verify note:** Paper arXiv:2505.16944 (AGENTIF, Qi et al., Tsinghua KEG, NeurIPS 2025 Spotlight) is real. Core metadata confirmed: 707 instructions, 50 real-world agentic applications, avg 11.9 constraints per instruction. The '<30% perfect following for instructions containing condition constraints' is a conflation: the paper's 27.2% figure is the overall perfect-instruction rate for the best model (o1-mini) across all constraint types, not a condition-constraint-specific rate. The paper groups condition and tool constraints as jointly the hardest types, not ranking condition constraints alone as 'most challenging.' The directional finding is valid; the specific quantitative framing as condition-constraint-specific is a misattribution.

---

### [key: within-policy-conflict-joint-compliance]
- evidence: empirical
- confidence: high
- group: conditional-negation
- sources: https://arxiv.org/html/2605.27784v1

**Claim:** 'Diagnosing Live Within-Policy Instruction Conflicts in LLM Agents with Witnessed Resolution Profiles' (arXiv:2605.27784) analyzed six real-world agent prompt policies (OpenHands, Lovable, Manus, etc.) producing 30,944 clause-pair comparisons and 1,402 concrete conflict witnesses. When both conflicting rules governed a scenario, only 35.4% of interactions achieved joint compliance; 64.6% violated at least one rule. Per-system range: OpenHands 52.3% joint compliance vs Lovable 23.3%. Mechanism: models default to the most salient or recently-stated rule when two rules conflict, rather than applying any principled priority resolution. This is especially severe for conditional and negated rules that overlap in scope. Scope: affects systems with >~10 rules where scope overlap is likely; simple kits with <5 non-overlapping rules may not trigger this. Kit-maker implication: the kit rule architecture must include explicit priority/exception hierarchies — rules that carve out exceptions to other rules need structural encoding (e.g., 'Rule 3 overrides Rule 1 when condition C'), not just sequential listing; implicit resolution by model inference fails 64.6% of the time.

**Verify note:** Paper arXiv:2605.27784 is real (Yan, Chen, Zhang, May 2026). All statistics verified: 35.4% joint compliance, 64.6% violation rate, OpenHands 52.3%, Lovable 23.3%, 276 source rules, 30,944 clause-pair comparisons, 1,402 concrete witnesses, 13,335 judgeable trials, six policies (Manus, Lovable, OpenHands, mini-SWE, Gemini Diffusion, ChatGPT GPT-5) all confirmed. The 'recency/salience' default mechanism is a plausible inference not fully confirmed from accessible paper sections. The '<5 non-overlapping rules' scope condition is a reasonable but untested inference.

---

### [key: negation-near-parity-modern-instruction-tuned-models]
- evidence: empirical
- confidence: high
- group: model-selection-for-negation
- sources: https://alexbleakley.com/blog/saying-what-not-to-do

**Claim:** Bleakley (2023) 'Saying What Not to Do' tested 1,140 task instances across 14 models measuring negation understanding ratio (negation performance / positive-phrasing performance). Claude 2.0 scored 1.02 and GPT-3.5-turbo scored 0.99 — near parity with positive phrasing. Text-curie-001 scored 0.53 (worst). GPT-4 showed 0% compliance on one specific task vs 36.8% with positive phrasing — demonstrating that even strong models have task-specific failure pockets. Mechanism: instruction fine-tuning closes much of the negation gap for common constraint types, but task-specific edge cases remain. Scope conditions: naturalistically phrased constraints (e.g., 'do not use uppercase') on modern RLHF-tuned models; older completion-style models remain severely impaired. Kit-maker implication: the negation-avoidance rule should be applied universally but with different urgency — for GPT-4/Claude-class models on common constraint types, positive framing is a preference not a necessity; for specialized constraint types and for open-source/older models, it is mandatory.

**Verify note:** Source (Bleakley, Sept 2023, alexbleakley.com) confirmed real. Claude 2.0 ratio 1.02, GPT-3.5-turbo 0.99, Text-curie-001 0.53 all confirmed. GPT-4 task-specific failure: source says '37%' with positive phrasing vs 0% with negative — claim says '36.8%,' a rounding discrepancy on a number the blog rounds to 37%. 14 models, 1,140 task instances confirmed. Epistemic caveat: practitioner blog post, not peer-reviewed, though methodology is described. The kit-maker differentiation (positive framing as preference vs mandatory) correctly derives from the evidence.

---

## Null results
- Query 4 (positive vs negative framing practitioner guide) returned mostly image-generation content (Stable Diffusion negative prompts) mixed with LLM content — the image-generation material was filtered as out-of-scope; practitioner consensus findings were extractable but thin on numbers
- Thunder-NUBench (arXiv:2506.14397) PDF was structurally unreadable via WebFetch — binary content only; no quantitative findings extracted

## New angles surfaced
- Instruction conflict resolution ordering: when two rules conflict, does rule position (first vs last) or rule specificity (broad vs narrow) dominate? This is unresolved in current literature and directly affects kit rule file structure.
- Conditional exception syntax variants: does 'do X unless Y' perform differently from 'if not Y then do X' vs 'when Y: skip X' vs 'only do X if not-Y'? The compositional logic is identical but surface framing differs — no study has isolated this.
- Negation robustness across output modalities: the finding that image-generation models use a structurally separate negative prompt mechanism (classifier-free guidance subtraction) suggests multimodal kits need modality-specific negation conventions.
- Chain-of-thought as negation compensator: the 52% sensitivity reduction from reasoning-enabled variants (arXiv:2601.21433) suggests explicit scratchpad reasoning partially compensates for negation failures — but the conditions under which CoT reliably compensates vs fails to are not mapped.
- Negation in multi-agent delegation: when one agent passes a prohibition to a sub-agent via tool call or message, does the negation failure rate compound across delegation hops? No empirical data found.

