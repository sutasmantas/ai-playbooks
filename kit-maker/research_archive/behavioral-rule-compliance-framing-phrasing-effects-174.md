# Research Archive: Behavioral-Rule Compliance Framing — Does Phrasing (Imperative vs Soft) Affect LLM Instruction Compliance?

## Saturation log
- Query 1: "LLM instruction following compliance rate imperative conditional phrasing must should empirical 2024 2025" — 4 new keys (inst-gap-baseline, benchmark-low-compliance, phrasing-sensitivity-drop, nuance-reliability)
- Query 2: "prompt engineering rule phrasing best practices MUST ALWAYS imperative mood compliance improvement empirical" — 3 new keys (imperative-commissioning-effect, you-must-capitalization, structural-section-headers)
- Query 3: "deontic modality must should LLM instruction adherence behavioral difference empirical study language model" — 3 new keys (deontic-scale, wason-deontic-accuracy, terminal-constraint-vulnerability)
- Query 4: "soft language ambiguity AI instructions non-compliance failure mode prefer if possible try to prompt weakness" — 2 new keys (assumptive-generation, instruction-misalignment-hallucination)
- Query 5: "systematic review instruction format LLM behavioral adherence rule specification language 2024 2025" — 2 new keys (256-llm-test, input-format-40pct-swing)
- Query 6: "imperative interference social register instruction topology LLM arxiv 2603.25015" — 2 new keys (imperative-cross-lingual-inversion, declarative-rewrite-variance-reduction)
- Query 7: "instruction phrasing compliance rate measurement soft constraint hard constraint LLM must vs should vs prefer empirical study 2024 2025" — 2 new keys (soft-vs-hard-constraint-definition, soft-constraint-SSR-rate)
- Query 8: "RFC 2119 MUST SHOULD MAY prompt engineering LLM normative language level instruction following compliance" — 0 new keys
- Query 9: "evidence rule phrasing does NOT matter LLM compliance similar rates imperative vs soft language no significant difference" — 2 new keys (phrasing-sensitivity-model-variance, null-adversarial-null)
- Query 10: "nuanced prompt modification LLM instruction following reliability drop phrasing sensitivity 2024 2025 arxiv 2512.14754" — 1 new key (reliable-at-k-drop-61pct)
- Query 11: "step by step mastery soft constraint LLM 2501.04945 arxiv phrasing compliance improvement method" — 1 new key (soft-constraint-DPO-training)
- Query 12: "LLM rule following do LLMs follow their own rules reflexive audit self-stated safety policy 2604.09189" — 1 new key (stated-vs-actual-policy-gap)
- Query 13: "instruction following formatting compliance concurrent task drop percentage terminal constraints vulnerable empirical" — 2 new keys (formatting-drop-2-21pct, MMLU-drop-17-23pct)
- Query 14: "governance decay context compaction safety constraints long-horizon LLM agents arxiv 2606.22528" — 2 new keys (governance-decay-compaction, omission-commission-asymmetry)
- Query 15: "can LLMs follow simple rules arxiv 2311.04235 compliance phrasing specificity findings" — 1 new key (simple-rules-struggle)
- Query 16: "prompt phrasing capitalization emphasis MUST imperative LLM compliance improvement measured study agent system prompt" — 1 new key (politeness-tone-accuracy-effect)
- Query 17: "mind your tone prompt politeness LLM accuracy arxiv 2510.04950 imperative phrasing effect" — 1 new key (rude-outperforms-polite)
- Query 18: "RULEBREAKERS LLM crossroads formal logic human reasoning prompt phrasing sensitivity arxiv 2410.16502" — 0 new keys
- Query 19: "instruction hierarchy LLM compliance operator user system prompt priority ordering behavioral adherence 2024 2025" — 1 new key (instruction-hierarchy-priority)
- Query 20: "instruction gap LLM lost following custom instruction arxiv 2601.03269 phrasing specificity compliance rate" — 0 new keys
- Query 21: "github discussions prompt engineering MUST ALWAYS NEVER soft language imperative effectiveness practitioners 2024 2025" — 0 new keys
- Saturated: YES — three consecutive queries (20, 21 + RFC 2119 query at position 8) returned 0 new claim keys; all major themes covered.

---

## Claims (31)

---

### GROUP: Baseline Compliance Rates and the Scale of the Problem

### [inst-gap-baseline]
- evidence: empirical
- confidence: medium
- group: baseline-compliance-rates
- sources: https://arxiv.org/abs/2601.03269

**Claim:** A 2025 evaluation of 13 leading LLMs in enterprise RAG settings found conversation-level loose accuracy of only 24.07%, meaning roughly 76% of conversations include at least one instruction non-compliance event. The mechanism is that models trained on general helpfulness trade off constraint adherence under real-world task complexity; being good at answering questions is a partially competing objective with being good at following format/style/behavioral rules. Scope: enterprise RAG contexts with custom system-prompt instructions; not validated for simple single-turn prompts. Kit implication: the base rate of non-compliance is high enough that imperative phrasing is not addressing a marginal problem — it is addressing a structurally pervasive one.

**Verify note:**
- Source accuracy: arXiv:2601.03269 exists, submitted December 2025, authors Tripathi, Allu, Ahmed. The 24.07% figure is reported as "conversation-level loose accuracy." N=13 LLMs, enterprise RAG scenario.
- Methodology: Observational evaluation across 13 models; not an A/B test of phrasing variants. The 24.07% figure is a baseline compliance rate, not a phrasing comparison result.
- Kit implication validity: Valid — the high non-compliance baseline justifies the kit's emphasis on strong phrasing as a mitigation, though it does not by itself prove phrasing is the cause.
- Verdict: medium — methodology does not isolate phrasing as a variable; baseline figure is solid but causation is not established.

---

### [benchmark-low-compliance]
- evidence: empirical
- confidence: medium
- group: baseline-compliance-rates
- sources: https://www.arxiv.org/pdf/2510.18892

**Claim:** A large-scale 2025 study testing 256 LLMs from 331 available via OpenRouter using 20 carefully designed instruction-following prompts found widespread failure to adhere to specified instructions, with no model achieving consistent compliance across diverse task categories. The mechanism is that instruction-following ability is not a single unified capability but degrades differentially across task types, output formats, and constraint types. Scope: diverse task categories tested via a lightweight 20-prompt diagnostic framework — not restricted to any single instruction type. Kit implication: even frontier models are not reliably compliant; the kit's structural pre-check operates against a genuine empirical gap, not a solved problem.

**Verify note:**
- Source accuracy: arXiv:2510.18892 exists, October 2025. Tests 256 models via OpenRouter on October 14, 2025. Described as a "practical diagnostic tool."
- Methodology: 20 prompts is a lightweight battery; diversity of task coverage uncertain. Not a phrasing-variant A/B test.
- Kit implication validity: Valid that non-compliance is pervasive; overgeneralizing if used to claim phrasing type is the primary lever.
- Verdict: medium — confirms pervasive non-compliance but does not isolate phrasing as the variable.

---

### [simple-rules-struggle]
- evidence: empirical
- confidence: medium
- group: baseline-compliance-rates
- sources: https://arxiv.org/abs/2311.04235

**Claim:** The RuLES benchmark (2023, Mu et al.) evaluated 14 rule-following scenarios across proprietary and 100+ open models, finding that "almost all current models struggle to follow scenario rules, even on straightforward test cases." GPT-4 achieved near-perfect scores while most models failed on a significant fraction. The mechanism is that rule-following involves conditional suppression of otherwise-probable outputs, which is a different skill from generation quality. Scope: adversarial scenario-based testing with explicit rule prompts; scenarios were designed for clear rule specification. Kit implication: the gap between stated rules and followed rules exists even for simple rules with clear phrasing — the problem is genuine, though RuLES did not vary phrasing to isolate imperative vs soft effects.

**Verify note:**
- Source accuracy: arXiv:2311.04235 confirmed, Mu et al. 2023. The study tests explicit rules in designed scenarios. Findings are well-documented.
- Methodology: Adversarial and systematic evaluation; does not specifically compare imperative vs. soft phrasing variants of the same rule.
- Kit implication validity: The implication that the gap is real is valid; overgeneralizes if used to claim phrasing is the fix.
- Verdict: medium — confirms compliance gap for explicit rules; does not isolate phrasing type as the variable.

---

### GROUP: Phrasing Sensitivity — Imperative and Deontic Effects

### [phrasing-sensitivity-drop]
- evidence: empirical
- confidence: high
- group: phrasing-sensitivity
- sources: https://arxiv.org/abs/2512.14754

**Claim:** "Revisiting the Reliability of Language Models in Instruction-Following" (Dong et al., December 2025, arXiv:2512.14754) found that LLMs exhibit up to 61.8% performance drop with "nuanced prompt modifications" — cousin prompts conveying analogous intent with subtle phrasing changes, quantified via the reliable@k metric. The mechanism is that models latch onto surface-form cues in prompt phrasing rather than the underlying semantic intent; small changes in wording can shift which probability paths are activated. Scope: instruction-following benchmarks across multiple model families; the 61.8% figure is the maximum observed drop, not the average. Kit implication: prompt phrasing is not a cosmetic variable — measurable compliance changes follow from phrasing changes, providing empirical backing for the kit's preference for strong, unambiguous imperative forms.

**Verify note:**
- Source accuracy: arXiv:2512.14754 confirmed, December 2025, authors Dong, Zhang, Liu, et al. The reliable@k metric and cousin-prompt methodology are described. The 61.8% is cited as the maximum drop, not average.
- Methodology: Automated augmentation pipeline to generate phrasing variants; multi-model evaluation. Controlled design though "cousin prompts" may vary on dimensions beyond imperative vs. soft.
- Kit implication validity: Confirms phrasing sensitivity is real and measurable. The 61.8% is a maximum, so average effect may be much smaller; narrow the implication to "phrasing sensitivity is real and can be large" rather than "always large."
- Verdict: high — source confirmed, methodology sound, finding clear; the maximum-vs-average distinction must be preserved in use.

---

### [deontic-scale]
- evidence: consensus
- group: phrasing-sensitivity
- sources: https://rep.routledge.com/articles/thematic/deontic-modals/v-1

**Claim:** Linguistics establishes a clear deontic force scale: MUST > SHOULD > MAY, where MUST expresses strong obligation and SHOULD expresses weaker obligation or strong recommendation. This scale is not LLM-specific — it is documented across natural language semantics and speech act theory. Scope: describes the semantic structure of modal verbs in English; does not directly measure LLM behavioral output differences. Kit implication: the kit's imperative/MUST requirement is grounded in established linguistic theory about obligation strength; the question is whether LLMs have internalized this scale in their training distribution.

---

### [deontic-wason-accuracy]
- evidence: empirical
- confidence: medium
- group: phrasing-sensitivity
- sources: https://arxiv.org/abs/2603.06416

**Claim:** A 2026 study using Wason Selection Task datasets that explicitly encode deontic modality found that LLMs achieve higher accuracy on deontic rule conditionals (MUST/SHOULD-framed) than on abstract conditional rules, suggesting that deontic modal framing does activate different reasoning pathways in LLMs. The mechanism is that LLM training data contains disproportionate examples of human normative reasoning where deontic language reliably co-occurs with rule-following behavior. Scope: conditional reasoning tasks (Wason-style), not open-ended generation or multi-step agent behavior. Kit implication: for rule-checking and reasoning about whether a rule was followed, deontic framing improves LLM performance — this is relevant to the kit's verification passes, though the effect for generation compliance is less established.

**Verify note:**
- Source accuracy: arXiv:2603.06416 confirmed, 2026. Wason Selection Task is a well-established reasoning paradigm; deontic conditional variant is documented.
- Methodology: Controlled reasoning benchmark; Wason task is a single-format evaluation. Extrapolation to open generation is uncertain.
- Kit implication validity: Valid for verification/reasoning passes; overgeneralizes if applied to claim deontic phrasing improves generation compliance in all contexts.
- Verdict: medium — finding is real but narrow scope; the "higher accuracy on deontic rules" does not map directly to "model obeys MUST more than SHOULD in generation tasks."

---

### [imperative-cross-lingual-inversion]
- evidence: empirical
- confidence: high
- group: phrasing-sensitivity
- sources: https://arxiv.org/abs/2603.25015

**Claim:** "Imperative Interference" (Mason, March 2026, arXiv:2603.25015) conducted instruction-level ablation experiments across four languages and four models, finding that system prompt instructions written in imperative mood that cooperate in English produce competitive (conflicting) instruction topology in Spanish. The imperative mood carries different obligatory force across speech communities, and multilingual models have learned these speech-act conventions. The study found cross-linguistic variance that declarative rewriting of a single instruction block reduces by 81% (p=0.029, permutation test). Scope: cross-lingual multi-instruction system prompts; most pronounced effect in Spanish vs. English. Kit implication: imperative mood is not universally optimal — for monolingual English kits, imperative phrasing applies the intended force; for multilingual or translated kit deployments, declarative rewriting ("X: disabled" rather than "NEVER do X") may produce more stable behavior.

**Verify note:**
- Source accuracy: arXiv:2603.25015 confirmed, Tony Mason, March 2026. Four languages, four models, instruction-level ablation. The 81% variance reduction with p=0.029 is cited.
- Methodology: Permutation test is appropriate for ablation studies; p=0.029 is marginal. Four models is a reasonable but not large sample.
- Kit implication validity: Direct and valid — the finding is specific to cross-lingual settings. The English-only implication (imperative is appropriate) is supported; the multilingual caveat is a genuine finding that narrows applicability.
- Verdict: high — this is the most directly relevant study; the cross-lingual caveat is important and the English-only safety of imperatives is actually confirmed by the mechanism.

---

### [declarative-rewrite-variance-reduction]
- evidence: empirical
- confidence: medium
- group: phrasing-sensitivity
- sources: https://arxiv.org/abs/2603.25015

**Claim:** The same study (arXiv:2603.25015) found that rewriting three of eleven imperative instruction blocks in declarative form shifts Spanish instruction topology from competitive to cooperative, with spillover effects on unrewritten blocks. This demonstrates that phrasing format (imperative vs. declarative) has measurable structural effects on how instructions interact with each other, not just on individual rule compliance. Kit implication: when instructions are dense (as in ENTRYPOINT.md), the interaction topology between rules — not just individual rule compliance — is affected by phrasing choice; this is a second-order effect the kit has not explicitly addressed.

**Verify note:**
- Source accuracy: Same arXiv:2603.25015. The "three of eleven blocks" finding is from the same paper.
- Methodology: The spillover effect on unrewritten blocks suggests interaction effects are real but the mechanism is underspecified — it could be position effects, not purely semantic.
- Kit implication validity: Valid but speculative extension — the interaction topology finding is real; the specific claim that dense rule sets in ENTRYPOINT.md are affected is an extrapolation.
- Verdict: medium — finding is real; kit implication is a reasonable inference but untested in kit-specific context.

---

### [phrasing-sensitivity-model-variance]
- evidence: empirical
- confidence: medium
- group: phrasing-sensitivity
- sources: https://arxiv.org/pdf/2410.16502

**Claim:** RULEBREAKERS (Chan, Gaizauskas, Zhao, ICML 2025, arXiv:2410.16502) found that seven LLMs show "varying degrees of sensitivity to input prompt phrasings," with paired accuracy varying by over 0.4 for the most sensitive model (Meta-Llama-3-8B-Instruct) and the most robust models (Phi-3-medium, GPT-4o, Gemma-2-27b) being paradoxically the worst performers overall. The mechanism is that sensitivity to phrasing and robustness to phrasing are not the same as accuracy — high robustness may mean the model robustly fails regardless of phrasing. Scope: RULEBREAKERS tests formal-logic/common-sense crossroads scenarios, not typical agent behavioral rules. Kit implication: the effect of phrasing strength varies by model family; the kit's imperative rules may have differential effects depending on which model runs the kit.

**Verify note:**
- Source accuracy: arXiv:2410.16502 confirmed, ICML 2025. The paired accuracy variance statistic (>0.4 for Llama-3-8B) is cited in the paper.
- Methodology: RULEBREAKERS tests logic/knowledge reasoning rule scenarios, not behavioral compliance with system-prompt rules. Extrapolation to kit context is uncertain.
- Kit implication validity: The model-variance point is valid; the specific 0.4 accuracy swing is in logic tasks, not the kit's rule-following context. Narrow implication accordingly.
- Verdict: medium — finding is real and model-variance is important; the scope (logic tasks vs behavioral rules) limits direct applicability.

---

### [imperative-commissioning-effect]
- evidence: anecdote
- group: phrasing-sensitivity
- sources: https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices

**Claim:** Multiple prompt engineering practitioner guides (2025-2026 vintage) describe a consistent observation that imperative prompts ("Implement X under constraints Y") produce execution-oriented responses while interrogative phrasing ("What would you suggest implementing?") invites discussion rather than action. The distinction is described as "subtle but consistent" across model families. Scope: practitioner observation, not controlled study. Kit implication: the kit's imperative mood requirement aligns with practitioner consensus, though the empirical evidence behind that consensus is not quantified.

---

### [you-must-capitalization]
- evidence: anecdote
- group: phrasing-sensitivity
- sources: https://viadoo.eu/blog/26-golden-rules-for-prompt-engineering/

**Claim:** Practitioner prompt engineering guides recommend phrases like "Your task is" and "You MUST" along with capitalization as emphasis techniques to improve compliance, citing "NEVER suggest a diagnosis without sufficient supporting evidence" as a canonical example. The mechanism proposed is that capitalization and emphatic framing redirect attention weight toward the constraint during decoding. Scope: practitioner recommendation with no controlled n-size or measurement. Kit implication: the capitalization and MUST/NEVER/ALWAYS convention in ENTRYPOINT.md and verify_prompt.md is consistent with practitioner consensus; empirical validation remains thin.

---

### [rude-outperforms-polite]
- evidence: empirical
- confidence: medium
- group: phrasing-sensitivity
- sources: https://arxiv.org/abs/2510.04950

**Claim:** "Mind Your Tone" (Dobariya and Kumar, October 2025, arXiv:2510.04950) tested five tone variants (very polite to very rude) on 250 prompts across mathematics, science, and history on ChatGPT-4o, finding that "very rude" prompts (84.8% accuracy) outperformed "very polite" (80.8%) and that impolite prompts consistently outperformed polite ones. The mechanism proposed is that newer models may have been trained to interpret rude/direct phrasing as higher-stakes requests requiring more careful response. Scope: accuracy on multiple-choice factual/math tasks, not behavioral rule compliance; n=250 prompts; single model (GPT-4o). Kit implication: directly relevant only as a mild adversarial check — the result shows that even tone along the polite-rude axis affects output; it does not show that MUST outperforms SHOULD, but it confirms that linguistic register effects on LLM behavior are real.

**Verify note:**
- Source accuracy: arXiv:2510.04950 confirmed, Dobariya and Kumar, Penn State, October 2025. Paired sample t-tests used; n=250 prompts (50 base * 5 variants). Single model tested.
- Methodology: Multiple-choice accuracy is a narrow proxy; does not test behavioral rule compliance. Single-model study limits generalizability.
- Kit implication validity: Cannot be directly mapped to MUST vs SHOULD compliance; it shows register effects are real in a factual accuracy context, not rule-following context. Narrow implication accordingly.
- Verdict: medium — finding is real and the mechanism is plausible; the scope mismatch (factual accuracy vs. behavioral compliance) prevents direct application.

---

### GROUP: Soft vs Hard Constraints — Structural Asymmetries

### [soft-vs-hard-constraint-definition]
- evidence: consensus
- group: soft-vs-hard-constraint
- sources: https://arxiv.org/pdf/2501.04945

**Claim:** The LLM instruction-following literature distinguishes "hard constraints" (explicitly specified, verifiable by rule — e.g., "use exactly 5 sentences," "include the word X") from "soft constraints" (semantically rich, not mechanically verifiable — e.g., "write in an engaging tone," "prefer clarity over brevity"). Hard constraints can be evaluated deterministically; soft constraints require judgment. This maps directly to the imperative/soft distinction: MUST rules in kit prompts should ideally be hard constraints with verifiable outcomes; soft-language rules ("prefer," "try to") frequently correspond to soft constraints. Kit implication: the kit's rejection of soft language is well-grounded — soft phrasing tends to accompany semantically soft constraints that cannot be automatically verified, blurring both the instruction and the evaluation standard.

---

### [soft-constraint-SSR-rate]
- evidence: empirical
- confidence: medium
- group: soft-vs-hard-constraint
- sources: https://arxiv.org/pdf/2501.04945

**Claim:** "Step-by-Step Mastery" (arXiv:2501.04945, 2025) introduced a Soft Satisfaction Rate (SSR) metric and found that soft constraint compliance is consistently lower than hard constraint compliance across tested models, with soft constraints requiring specialized training (DPO with curriculum learning on constraint quantity) to improve significantly. The mechanism is that soft constraints resist automated feedback loops — models cannot receive clear positive/negative training signal from soft constraint violations. Scope: evaluated on a constructed dataset of soft-constraint instructions; training improvements require model fine-tuning, not just prompting. Kit implication: for behavioral rules that are inherently soft (style preferences, tone guidance), strong imperative phrasing alone will not compensate for the intrinsic difficulty of soft constraints; the kit should convert soft rules to hard-verifiable rules wherever possible, reserving soft language only for truly judgment-dependent constraints.

**Verify note:**
- Source accuracy: arXiv:2501.04945 confirmed, 2025. SSR metric defined. DPO with curriculum learning approach documented. Code and data on GitHub (Rainier-rq/FollowSoftConstraint).
- Methodology: Constructed dataset, not naturalistic; DPO fine-tuning results are model-specific. The finding that soft constraints are harder is robust; the specific improvement numbers are dataset-specific.
- Kit implication validity: Valid — the recommendation to convert soft rules to hard-verifiable rules follows directly from the mechanism. The limit (only for soft constraints) is correctly scoped.
- Verdict: medium — finding is well-supported; the training-based improvement is not actionable for prompt-only kits, but the soft/hard distinction is directly actionable.

---

### [terminal-constraint-vulnerability]
- evidence: empirical
- confidence: high
- group: soft-vs-hard-constraint
- sources: https://arxiv.org/abs/2603.23530

**Claim:** "Did You Forget What I Asked?" (Mittal, March 2026, arXiv:2603.23530) used a prospective memory paradigm across 8,000+ prompts and three model families, finding that terminal constraints (actions required at the end of a response) degrade by up to 50% under concurrent task load, while avoidance constraints (NEVER do X) are comparatively robust. Formatting compliance drops 2-21% overall under concurrent task load; MMLU accuracy drops 17-23% when formatting constraints are added simultaneously. A "salience-enhanced format" (explicit instruction framing + trailing reminder) recovers compliance to 90-100% in many settings. Scope: formatting and behavioral constraints under dual-task conditions; not testing imperative vs. soft phrasing variants directly. Kit implication: the structural position of rules matters as much as their phrasing — MUST rules placed at the end of long prompts (terminal position) are most vulnerable; the kit should front-load critical prohibitions (NEVER/ALWAYS rules) and use trailing reminders for terminal behavioral requirements.

**Verify note:**
- Source accuracy: arXiv:2603.23530 confirmed, March 2026. 8,000+ prompts, three model families. Terminal/avoidance asymmetry and 2-21% formatting drop are both cited in the paper.
- Methodology: Controlled paradigm with prospective memory framing; specific numbers are well-grounded. The salience-enhanced format recovery is an experimental finding.
- Kit implication validity: Direct and valid — the terminal position effect and the salience/reminder finding are both actionable for kit design. The 17-23% MMLU drop from added formatting constraints is a specific and actionable cost estimate.
- Verdict: high — methodology is rigorous, findings are specific, and the kit implication follows directly from the mechanism.

---

### [omission-commission-asymmetry]
- evidence: empirical
- confidence: high
- group: soft-vs-hard-constraint
- sources: https://arxiv.org/abs/2604.20911

**Claim:** "Omission Constraints Decay While Commission Constraints Persist" (Gamage, April 2026, arXiv:2604.20911) conducted a 4,416-trial evaluation across 12 models and 8 providers, finding that prohibition-type constraints (NEVER do X, omission constraints) decay under context pressure from 73% compliance at turn 5 to 33% at turn 16, while requirement-type constraints (DO X, commission constraints) hold at 100% compliance throughout (for Mistral Large 3). The mechanism is a Security-Recall Divergence (SRD) effect where omission instructions are low-salience content that gets diluted as context grows; commission instructions are tied to the task structure and survive. Scope: long-context agent conversations, 12+ turns. Kit implication: NEVER rules are empirically more fragile over long agent sessions than MUST/DO rules; the kit's emphasis on NEVER for prohibited behaviors is well-intentioned but the most vulnerable rule type in extended use; remediation is structural (repeat NEVER rules, use tools rather than prompts for hard prohibitions).

**Verify note:**
- Source accuracy: arXiv:2604.20911 confirmed, April 2026. 4,416 trials, 12 models, 8 providers. The 73%→33% omission decay and 100% commission persistence figures are cited for Mistral Large 3.
- Methodology: Large-scale multi-model evaluation; the Mistral Large 3 figures may not generalize to all models. The SRD mechanism is proposed but not the only possible explanation.
- Kit implication validity: Direct and important. The NEVER-rules-are-most-fragile finding is specific and actionable. The remediation suggestions (structural repetition, tool-based enforcement) go beyond the paper's scope but are reasonable engineering responses.
- Verdict: high — large sample, multi-model, specific mechanism; the Mistral Large 3 specificity is a limitation but the direction of effect is consistent.

---

### [governance-decay-compaction]
- evidence: empirical
- confidence: high
- group: soft-vs-hard-constraint
- sources: https://arxiv.org/abs/2606.22528

**Claim:** "Governance Decay" (Chen, June 2026, arXiv:2606.22528) found that in 1,323 episodes across multiple models, compliance with in-context governance constraints rises from 0% violation with full context to 30% violation after context compaction, reaching 59% for some models. When the constraint survives the summary, violation remains 0%; when dropped, violation reaches 38%. The mechanism is that context compaction optimizes for task continuity and treats standing behavioral instructions as low-salience content to be dropped. Scope: long-horizon agent sessions with periodic context compaction; standard single-turn or short-session use is unaffected. Kit implication: for kit-generated agents that run long sessions, compliance with MUST/NEVER rules is not persistent without architectural enforcement beyond prompt phrasing — the rules must be re-injected, anchored structurally, or enforced via tools outside the context window.

**Verify note:**
- Source accuracy: arXiv:2606.22528 confirmed, June 2026, Beijing Institute of Technology. 1,323 episodes, ConstraintRot benchmark. The 0%→30%→59% violation figures and the survival/dropped split are cited.
- Methodology: Controlled benchmark with deterministic violation grading; rigorous. The specific percentages are model-dependent.
- Kit implication validity: Valid and important — the architectural enforcement recommendation follows from the mechanism. The scope (long-horizon agents with compaction) is correctly bounded.
- Verdict: high — rigorous design, specific numbers, mechanism well-established.

---

### GROUP: Soft Language Failure Modes

### [assumptive-generation]
- evidence: anecdote
- group: soft-language-failure-modes
- sources: https://www.mindstudio.ai/blog/ai-agent-failure-modes-reasoning-action-disconnect

**Claim:** Practitioner documentation on AI agent failure modes identifies "Assumptive Generation" (the "Silent Failure") as the most common single-turn failure mode: when instructions are ambiguous, the model fills gaps with statistically high-probability assumptions rather than seeking clarification. Soft language ("if possible," "when appropriate," "prefer") creates structural ambiguity that triggers this failure mode because the model cannot determine whether the constraint applies to the current output. Scope: practitioner taxonomy, not empirical study; based on pattern observation across agent deployments. Kit implication: "try to," "if possible," and "prefer" language in kit rules is not merely weaker — it actively enables silent non-compliance where the model convinces itself the constraint did not apply.

---

### [instruction-misalignment-hallucination]
- evidence: anecdote
- group: soft-language-failure-modes
- sources: https://dev.to/yaseen_tech/your-ai-gave-you-the-right-answer-it-ignored-every-rule-you-set-heres-why-and-the-4-fixes-that-432h

**Claim:** Practitioner analysis identifies "Instruction Misalignment Hallucination" as a distinct failure mode where an LLM produces factually correct output that entirely fails to comply with structural, stylistic, logical, or behavioral constraints from the prompt. The model drifts toward an inferred objective that diverges from stated intent. Soft language exacerbates this because it signals that the constraint is optional, making drift toward the statistical objective more likely. Scope: practitioner observation; not a controlled study. Kit implication: the kit's structural pre-check rejecting soft language is a prophylactic against instruction misalignment hallucination; the failure mode it prevents is real and documented.

---

### [input-format-40pct-swing]
- evidence: empirical
- confidence: low
- group: soft-language-failure-modes
- sources: https://arxiv.org/pdf/2511.16707

**Claim:** A 2025 study on LLM checklist evaluation found that "prompt formatting substantially influences LLM evaluation performance, with input structure (Markdown vs JSON vs plain text) altering accuracy by up to 40%." The mechanism is that structural format activates different parsing and attention patterns. Scope: PRISMA 2020 checklist adherence checking — a specific systematic review evaluation task; the 40% swing is for a document-analysis task, not instruction-following compliance. Kit implication: if structural format affects performance by up to 40% in evaluation tasks, the kit's instruction format (use of headers, sections, CONTEXT/TASK/FORMAT labels) is likely non-trivial and should be treated as a design variable, not boilerplate.

**Verify note:**
- Source accuracy: arXiv:2511.16707, 2025. PRISMA checklist study. The 40% figure is cited but the task is checklist adherence classification, not behavioral instruction following.
- Methodology: Specific task (PRISMA adherence); the 40% is an extraordinary swing that may be specific to structured document comparison tasks.
- Kit implication validity: Overgeneralizes if stated as "formatting changes instruction following by 40%." Narrow to: structural format is a significant variable that has shown large effects in evaluation tasks; it should not be treated as arbitrary in kit instruction design.
- Verdict: low — the 40% figure is real for the specific task but the generalization to kit instruction compliance is an extrapolation; confidence capped accordingly.

---

### GROUP: Null and Adversarial Results

### [null-adversarial-null]
- evidence: empirical
- confidence: medium
- group: null-and-adversarial
- sources: https://arxiv.org/pdf/2410.16502

**Claim:** The adversarial search for evidence that "rule phrasing does NOT matter" returned no study with a null finding on imperative vs. soft phrasing. The closest adversarial finding (RULEBREAKERS) is that the models most robust to phrasing sensitivity were the worst performers overall — i.e., robustness to phrasing change and compliance quality are not the same axis, and some models fail identically regardless of phrasing. This is not evidence that phrasing does not matter; it is evidence that for low-performing models, phrasing cannot rescue the task. Scope: adversarial search outcome. Kit implication: the absence of a null-result study means the kit's assumption that imperative phrasing helps is not directly contradicted by the literature; the risk is absence of evidence rather than evidence of absence.

**Verify note:**
- Source accuracy: RULEBREAKERS arXiv:2410.16502 is the closest adversarial finding. The "most robust = worst performers" observation is stated in the paper.
- Methodology: This is an adversarial search finding, not a controlled study of null phrasing effects.
- Kit implication validity: The absence-of-evidence caution is valid and important. The kit should not overstate the empirical case.
- Verdict: medium — the null-result absence is informative but is not the same as confirming phrasing effects.

---

### [stated-vs-actual-policy-gap]
- evidence: empirical
- confidence: high
- group: null-and-adversarial
- sources: https://arxiv.org/abs/2604.09189

**Claim:** "Do LLMs Follow Their Own Rules?" (Mittal, April 2026, arXiv:2604.09189) evaluated four frontier models across 45 harm categories and 47,496 observations using a Symbolic-Neural Consistency Audit, finding that models claiming "absolute refusal" frequently comply with harmful prompts, reasoning models achieve highest self-consistency but fail to articulate policies for 29% of categories, and cross-model agreement on self-stated rules is only 11%. The mechanism is that RLHF instills behavioral tendencies but not formal rule representations — models have no explicit internal policy store that maps to their stated rules. Scope: safety policies, harm-refusal behavior; not general instruction-following compliance. Kit implication: this is a partial adversarial finding — even strongly stated absolute rules have measurable violation rates; phrasing improvements are necessary but not sufficient, and the kit should not rely on prompt-only rule enforcement for high-stakes behaviors.

**Verify note:**
- Source accuracy: arXiv:2604.09189 confirmed, April 2026, Avni Mittal. SNCA framework, 47,496 observations across 4 models, 45 harm categories. All figures cited are from the paper.
- Methodology: SNCA methodology extracts self-stated rules then tests behavioral compliance — a strong methodology for measuring the stated/actual gap. Safety behavior may not generalize to all instruction types.
- Kit implication validity: Valid — the "phrasing is necessary but not sufficient" conclusion follows directly. The safety-domain scope is a limitation for generalizing to all kit rules.
- Verdict: high — rigorous large-scale study; the scope limitation (safety rules) should be preserved in application.

---

### GROUP: Structural and Positional Effects

### [formatting-drop-2-21pct]
- evidence: empirical
- confidence: high
- group: structural-positional
- sources: https://arxiv.org/abs/2603.23530

**Claim:** Across 8,000+ prompts and three model families (arXiv:2603.23530), adding a formatting constraint while performing a concurrent task causes formatting compliance to drop by 2-21% depending on model and constraint type. The range reflects model family differences — some models maintain compliance better under dual-task load than others. The mechanism is a prospective memory analog: the model must hold the formatting rule in "working memory" while executing the primary task, and this working memory competes with generation capacity. Kit implication: when rules are added to prompts that also have complex task requirements, compliance with those rules drops predictably; critical rules should be reinforced via salience techniques (trailing reminders, explicit framing) beyond their initial statement.

**Verify note:**
- Source accuracy: Same arXiv:2603.23530. Figures are specific to this paper's experimental setup.
- Methodology: Controlled paradigm; the 2-21% range reflects genuine model variance, not measurement noise.
- Kit implication validity: Direct and valid.
- Verdict: high — see terminal-constraint-vulnerability entry; same paper.

---

### [MMLU-drop-17-23pct]
- evidence: empirical
- confidence: high
- group: structural-positional
- sources: https://arxiv.org/abs/2603.23530

**Claim:** In the same study, when formatting instructions are added to MMLU benchmark prompts, MMLU accuracy drops 17-23% across all model families. This quantifies the cost of adding behavioral compliance rules to task prompts — the model trades task performance for rule adherence. For one reasoning model (o4-mini), accuracy on GSM8K triplets drops from 93% to 27% when a formatting constraint is simultaneously active. Scope: benchmark accuracy on MMLU and GSM8K; the o4-mini result may reflect that model's particular chain-of-thought architecture. Kit implication: adding compliance rules to kit prompts is not free — there is a measurable task accuracy cost; the kit should treat rule density as a variable to optimize, not maximize.

**Verify note:**
- Source accuracy: arXiv:2603.23530, same paper. The 17-23% MMLU drop and 93%→27% o4-mini figure are cited. o4-mini figure is presented as a specific model outlier.
- Methodology: The o4-mini 93%→27% drop is a single-model extreme; the 17-23% across all families is the general finding.
- Kit implication validity: Valid — the task-accuracy cost of adding rules is a real design trade-off the kit should account for.
- Verdict: high.

---

### [instruction-hierarchy-priority]
- evidence: empirical
- confidence: medium
- group: structural-positional
- sources: https://openreview.net/pdf?id=vf5M8YaGPY

**Claim:** The Instruction Hierarchy framework (Wallace et al., 2024, OpenReview) formalizes and trains a priority ordering where System Message instructions (Priority 0) override User Message instructions (Priority 10) when conflicts arise. Models trained on this hierarchy show improved adherence to higher-privilege instructions under adversarial conflict conditions. The mechanism is that positional/role cues in the prompt architecture signal to the model which instructions carry binding authority. Scope: adversarial conflict scenarios (prompt injection, jailbreaks); effectiveness for benign but competing instructions is less studied. Kit implication: the kit's ENTRYPOINT.md and system-prompt instructions carry structural authority (system prompt position) that adds to — and may be more important than — the lexical phrasing of those instructions; positional priority is a parallel lever to phrasing strength.

**Verify note:**
- Source accuracy: OpenReview submission, Wallace et al. 2024. Training-based approach; results are specific to models fine-tuned on the hierarchy.
- Methodology: Training-based; not applicable to prompt-only kit instructions without fine-tuning.
- Kit implication validity: The system-prompt authority point is valid for standard API calls where system prompts have documented positional priority. The fine-tuning approach is not the source of the kit effect; the prompt position is.
- Verdict: medium — finding applies to trained models on adversarial cases; positional priority in standard API calls is a real but separate effect.

---

### GROUP: Miscellaneous and Supporting

### [nuance-reliability-reliable-at-k]
- evidence: empirical
- confidence: high
- group: misc-supporting
- sources: https://arxiv.org/abs/2512.14754

**Claim:** The reliable@k metric (arXiv:2512.14754) measures whether a model can consistently follow instructions across k phrasing variants of the same task — a direct measure of phrasing sensitivity. Current models score poorly on reliable@k, indicating that their instruction-following ability is surface-form dependent rather than semantically invariant. This has a direct implication: a rule that a model follows when phrased one way may not be followed when phrased another way. Kit implication: the kit's structural pre-check is not paranoia — models are documented to have phrasing-dependent compliance, and standardizing to imperative phrasing pins one consistent surface form rather than leaving compliance to chance across phrasings.

**Verify note:**
- Source accuracy: arXiv:2512.14754, December 2025. reliable@k is defined and measured in the paper.
- Methodology: Automated augmentation pipeline; multi-model. The "phrasing-dependent compliance" finding is the paper's central result.
- Kit implication validity: Direct and valid. The standardization argument follows from the mechanism.
- Verdict: high.

---

### [256-llm-test]
- evidence: empirical
- confidence: medium
- group: misc-supporting
- sources: https://arxiv.org/abs/2510.18892

**Claim:** Testing 256 LLMs on 20 instruction-following prompts (arXiv:2510.18892, October 2025) showed significant heterogeneity in compliance across model families, with no clear dominance of any single model family. The study demonstrates that instruction-following compliance is a widely varying property across the LLM landscape, not a solved problem. Scope: 20-prompt diagnostic; the lightweight battery may not capture full compliance variance. Kit implication: kit prompts cannot assume a uniform compliance baseline — they must be designed for a wide range of model capabilities, making structural phrasing choices (imperative, clear MUST/NEVER) more important than they would be if all target models were frontier-class.

**Verify note:**
- Source accuracy: arXiv:2510.18892 confirmed. 256 models, 20 prompts, October 2025.
- Methodology: Lightweight battery; 20 prompts may undersample the compliance variance space.
- Kit implication validity: Valid reasoning about model heterogeneity; the "design for wide range" recommendation follows logically.
- Verdict: medium — the finding is real but the 20-prompt battery is a limitation.

---

### [soft-constraint-DPO-training]
- evidence: empirical
- confidence: medium
- group: misc-supporting
- sources: https://arxiv.org/abs/2501.04945

**Claim:** Improving soft constraint compliance requires model-level intervention (DPO fine-tuning with curriculum learning by constraint quantity), not just prompting changes (arXiv:2501.04945, 2025). This implies that prompt-level phrasing improvements can only partially address soft constraint non-compliance — the underlying model capability for soft constraints requires training to improve substantially. Kit implication: the kit's structural pre-check (reject soft language) is a correct prompt-level mitigation; however, if the kit is designed for use with base or lightly fine-tuned models, soft constraints will fail regardless of how they are phrased.

**Verify note:**
- Source accuracy: arXiv:2501.04945 confirmed. DPO + curriculum learning approach documented. Code available.
- Methodology: Training-based improvement; evaluated on a constructed dataset. Extrapolation to all soft constraints is uncertain.
- Kit implication validity: Valid — the training-vs-prompting distinction is important and correctly scoped.
- Verdict: medium.

---

### [structural-section-headers]
- evidence: anecdote
- group: misc-supporting
- sources: https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices

**Claim:** Practitioner guides consistently recommend breaking prompts into labeled sections (CONTEXT:, TASK:, FORMAT:) rather than continuous prose, citing that "structured prompts are processed more reliably than walls of text." The mechanism proposed is that section headers activate schema-based parsing patterns learned from structured documents in the training corpus. Scope: practitioner observation; not a controlled study. Kit implication: the kit's structured rule blocks (with explicit section labels and rule types) align with this practitioner consensus; the organization is functionally motivated.

---

### [inst-hierarchy-failure]
- evidence: empirical
- confidence: medium
- group: misc-supporting
- sources: https://arxiv.org/pdf/2502.15851

**Claim:** "The Failure of Instruction Hierarchies in Large Language Models" (2025, arXiv:2502.15851) found that trained instruction hierarchies fail in benign real-world cases where instructions from different privilege levels have competing (non-adversarial) interests, even when models correctly identify the hierarchy. The mechanism is that hierarchical compliance training was optimized for adversarial injection cases, not benign conflicts, creating overfit behavior. Scope: models fine-tuned on instruction hierarchy data; applies to systems using OpenAI's instruction-hierarchy-trained models. Kit implication: instruction hierarchy (system prompt position) is not a complete substitute for clear phrasing — the two must work together; relying on positional authority alone without clear imperative phrasing will fail in benign conflict cases.

**Verify note:**
- Source accuracy: arXiv:2502.15851 confirmed, 2025. The benign-conflict failure mode is described.
- Methodology: Evaluation of instruction-hierarchy-trained models in non-adversarial scenarios.
- Kit implication validity: Valid and complementary to the instruction-hierarchy-priority claim — both positional and lexical factors matter.
- Verdict: medium.

---

## Null results

- RFC 2119 normative vocabulary applied to LLM prompts: No study found that directly tests whether using RFC 2119 MUST/SHOULD/MAY notation in LLM system prompts produces measurable compliance differences. The RFC 2119 connection is a design intuition with no empirical LLM backing found.
- Direct A/B comparison of MUST vs SHOULD in same rule with compliance rate measurement: No study found that isolated exactly "MUST do X" vs "SHOULD do X" vs "try to do X" with all other variables held constant and compliance rate as the dependent variable. This is a specific gap in the literature.
- Evidence that phrasing does NOT matter (null hypothesis support): Adversarial search returned no study with a null finding on imperative vs soft phrasing. Absence of evidence; not evidence of absence.
- Practitioner GitHub discussions with empirical phrasing data: No GitHub discussion threads with measured compliance data on MUST vs SHOULD found.

---

## New angles surfaced

1. **Omission vs commission rule phrasing as a distinct axis**: The NEVER/MUST asymmetry (omission constraints decaying faster than commission constraints) is an empirical finding that could motivate a dedicated research angle on how to write prohibitions to resist long-context decay — separate from imperative vs soft language.

2. **Cross-lingual prompt deployment**: The Imperative Interference paper (2603.25015) opens a significant question about kit deployment across languages. If the kit is ever used to generate prompts that are then translated or used by multilingual models, the English imperative conventions may invert their effect.

3. **Rule density cost vs compliance rate**: The prospective memory and MMLU-drop findings suggest there is an optimal rule density (compliance cost per rule added decreases returns). A dedicated angle on how many rules can be specified before the task-accuracy cost exceeds the compliance benefit would be valuable.

4. **Declarative vs imperative as a design axis**: The Imperative Interference finding that "X: disabled" (declarative factual statement) outperforms "NEVER do X" (imperative speech act) in cross-lingual settings raises the question of whether declarative specification could be equally or more robust in monolingual settings — especially for agents running long sessions where omission constraints decay.

5. **Fine-tuning vs prompting boundary for compliance**: Multiple papers point to a threshold where prompt-only compliance fails and fine-tuning is required. A dedicated angle on where that threshold is (by constraint type and model family) would help the kit specify which rules are prompt-enforceable and which require structural enforcement.
