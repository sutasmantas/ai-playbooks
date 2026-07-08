# Research Archive: Explicit criteria definition before alternatives evaluation — prevents post-hoc rationalization where agent selects original option and retroactively constructs supporting criteria

## Saturation log
- Query 1: "criteria definition before evaluation decision quality improvement empirical study" — 3 new keys
- Query 2: "pre-commitment criteria evaluation anchoring bias prevention decision making empirical" — 2 new keys
- Query 3: "explicit criteria specification alternatives evaluation LLM quality outcome empirical" — 2 new keys
- Query 4: "decision criteria definition post-hoc rationalization prevention empirical psychology" — 2 new keys
- Query 5: "evaluation criteria upfront specification AI agent quality selection improvement empirical" — 1 new keys
- Saturated: NO

---

## Claims (10)

### [key: cot-posthoc-quantified]
- evidence: empirical
- confidence: medium
- group: posthoc-rationalization
- sources: https://arxiv.org/abs/2602.14469

**Claim:** A 2025 arXiv study (arxiv.org/abs/2602.14469) measuring LLM chain-of-thought reasoning found that only 12.7% of reasoning traces fell in the 'authentic reasoning' zone under neutral conditions; 54% were cloze-completion (answer-driven fill-in) and 29.3% direct copying. Mechanism: when an answer is visible before reasoning is generated, it functions as a cognitive anchor — the model constructs the explanation around the known endpoint rather than deriving the endpoint from reasoning steps. In agent kits, any pipeline where alternatives are ranked before evaluation criteria are stated will push output into the 54%+ post-hoc zone. Scope: measured on reasoning-trace generation tasks; generalizes to any agent stage where a preferred option is implied before scoring criteria are defined.

**Verify note:** The paper (arXiv:2602.14469) exists and the specific numbers are verified: 12.7% authentic reasoning, 54% cloze-completion, 29.3% direct copying are confirmed in Table 2 under the NEU (neutral) baseline condition. The mechanism description (answer as cognitive anchor, post-hoc rationalization) matches the paper's framing. However, three extrapolation issues reduce confidence: (1) The paper was submitted February 2026 and published June 2026, not '2025' as claimed. (2) Models tested are Qwen3 variants (8B, 32B, 235B) on specific benchmarks (ArenaHard-v2.0, EQ-Bench 3, IFEval) — not a broad cross-model survey, limiting generalizability. (3) The kit-maker extrapolation ('any pipeline where alternatives are ranked before evaluation criteria are stated') is a structural analogy, not a direct measurement from this paper; the paper studies reverse chain-of-thought distillation tasks, not multi-step agentic pipelines. No known replications of these specific percentages. Verdict: numbers verified, year wrong, generalization is an unvalidated analogy.

---

### [key: answer-suppression-backfires]
- evidence: empirical
- confidence: medium
- group: posthoc-rationalization
- sources: https://arxiv.org/abs/2602.14469

**Claim:** The same 2025 study (arxiv.org/abs/2602.14469) found that instructing models to suppress or ignore a known answer paradoxically worsened internal anchoring: probabilistic anchoring increased by 20% under suppression vs. baseline. Mechanism: Ironic Process Theory — active monitoring of forbidden content deepens the representational dependency rather than dissolving it. Kit-maker implication: adding a 'do not favor option X' instruction after options are already presented to the agent is not a fix for post-hoc rationalization; the criteria must be delivered structurally before alternatives are visible. Scope: observed in chain-of-thought tasks on standard reasoning benchmarks.

**Verify note:** Verified from arXiv:2602.14469 PDF. Table 1 shows AUG-SUP increases probabilistic anchoring (A_prob) from 37.0 (NEU baseline) to 44.4, with a delta notation of +20.0% — matching the claim exactly. The Ironic Process Theory framing is the paper's own mechanistic explanation. However: (1) Year is 2026, not 2025 as claimed. (2) This is a single study on Qwen3-family models; Ironic Process Theory originates in human psychology literature (Wegner 1994) and the paper is applying it as an analogy to LLM internals, not neurally measuring it. (3) The 20% figure is a relative increase in one metric (A_prob) under one condition — the claim presents it as a general LLM behavioral law. No independent replications found. Verdict: specific number verified, theoretical framing is the paper's own analogy, scope narrower than claimed.

---

### [key: structural-skeleton-authentic-reasoning]
- evidence: empirical
- confidence: high
- group: posthoc-rationalization
- sources: https://arxiv.org/abs/2602.14469

**Claim:** The Structural Skeleton-guided Reasoning (SSR) approach from arxiv.org/abs/2602.14469 — which generates an abstract reasoning scaffold before filling in answer-specific content — shifted traces in authentic-reasoning zone from 12.7% to 51.2%, a 4x gain. The mechanism is structural decoupling: providing a content-neutral procedural skeleton as the reasoning target prevents answer content from leaking into the derivation path. Kit-maker implication: agent pipeline stages that emit a criteria/evaluation structure first, then invoke alternative scoring against that structure in a separate downstream call, replicate SSR's decoupling at the pipeline level. Scope: tested on chain-of-thought distillation tasks; extrapolation to multi-step agentic pipelines is structural analogy, not direct measurement.

**Verify note:** Fully verified from arXiv:2602.14469. SSR (Structural Skeleton-guided Reasoning) shifting authentic reasoning from 12.7% to 51.2% is confirmed in Table 2, and the 4x gain calculation is arithmetically correct. The mechanism (content-neutral procedural skeleton preventing answer content from leaking into derivation path) matches the paper's description. Critically, the claim itself explicitly flags 'Scope: tested on chain-of-thought distillation tasks; extrapolation to multi-step agentic pipelines is structural analogy, not direct measurement' — this is honest and accurate. The year (2025) is wrong (paper is 2026), which is a minor inaccuracy. Replication status: single study, no independent replications found. The specific numbers are solid; the kit-maker implication is appropriately scoped.

---

### [key: rubric-quality-trumps-judge-quality]
- evidence: consensus
- group: rubric-criteria-quality
- sources: https://medium.com/@adnanmasood/rubric-based-evals-llm-as-a-judge-methodologies-and-empirical-validation-in-domain-context-71936b989e80

**Claim:** Practitioner synthesis by Masood (medium.com/@adnanmasood, citing Prometheus and HealthBench) converges on: 'a weak judge on a great rubric outperforms a great judge on a weak rubric.' Mechanism: explicit rubric criteria decompose a subjective quality judgment into individually scorable dimensions, eliminating the scorer's need to improvise evaluation — this is the primary lever on inter-rater reliability. Prometheus demonstrated open-model judge agreement approaching GPT-4-level when trained on thousands of customized rubrics. Kit-maker implication: investing in upfront criteria authoring yields higher ROI than upgrading the judge model. Scope condition: advantage is strongest when output space is open-ended and quality is multidimensional; for tasks with deterministic correct answers the rubric premium collapses.

---

### [key: rubric-prevents-reward-hacking]
- evidence: consensus
- group: rubric-criteria-quality
- sources: https://medium.com/@adnanmasood/rubric-based-evals-llm-as-a-judge-methodologies-and-empirical-validation-in-domain-context-71936b989e80

**Claim:** Process Reward Models (PRMs) using step-level rubric criteria prevent models from 'getting the right answer for the wrong reasons' — a form of post-hoc rationalization at the reward level (Masood practitioner synthesis, corroborated by HealthBench physician-alignment results). Mechanism: step-level criteria intercept the reasoning path at intermediate checkpoints rather than scoring only the endpoint, blocking backward-constructed justifications. Kit-maker implication: multi-step evaluation agents should score the criteria-derivation step as a separate scorable event, not only the final alternative ranking. Scope: most documented in RLHF and multi-step math contexts; structural principle extends to any staged agent pipeline.

---

### [key: governance-prompt-criteria-absence]
- evidence: empirical
- confidence: high
- group: criteria-specification-practice
- sources: https://arxiv.org/abs/2604.21090

**Claim:** An empirical audit of 34 AI governance files (arxiv.org/abs/2604.21090) found 37% scored below structural completeness threshold; the two most commonly missing components were data classification specifications and assessment rubric criteria. Mechanism: practitioners author governance prompts reactively and lack established conventions for pre-specifying measurable quality standards, so evaluation defaults to post-hoc narrative justification. Kit-maker implication: the kit must provide explicit scaffolding that prompts criteria authoring before alternative generation; without it, the empirical baseline predicts that >1/3 of practitioners will omit criteria entirely. Scope: study examined practitioner-authored governance prompts; may underestimate the gap for non-governance agentic tasks.

**Verify note:** Verified from arXiv:2604.21090. All three specific claims confirmed: n=34 governance files from GitHub, 37% below structural completeness threshold, data classification specifications and assessment rubric criteria are the two most commonly missing components. The paper introduces a five-principle evaluation framework grounded in computability theory, proof theory, and Bayesian epistemology. The mechanism (reactive authoring, lack of conventions for pre-specifying measurable quality standards) is a reasonable interpretive claim consistent with the findings, though it is the verifier's inference rather than a direct quote from the paper. The scope caveat ('may underestimate gap for non-governance agentic tasks') is appropriate. Single empirical study, no replications found. Verdict: core claims verified, mechanism is plausible inference, scope caveat is honest.

---

### [key: precommitment-criteria-standard-countermeasure]
- evidence: consensus
- group: anchoring-precommitment
- sources: https://www.forbes.com/sites/brycehoffman/2024/02/24/anchoring-effect-what-it-is-and-how-to-overcome-it/, https://www.renascence.io/journal/rationalization-heuristic-justifying-decisions-post-hoc

**Claim:** Cross-field practitioner consensus (Forbes/Hoffman 2024, Renascence Journal, Bald Eagle Leadership) identifies pre-committing to decision criteria before seeing alternatives as the canonical first countermeasure to anchoring bias. Mechanism: criteria established before anchor exposure are formed without directional contamination; once criteria exist, the anchor's effect is constrained to scoring rather than shaping the measurement frame. The Forbes source recommends three specific implementations: write criteria before entering negotiation/evaluation, require documented motivation before scores are assigned ('decision justification'), and consider-the-opposite as a structural prompt. Scope: practitioner-level consensus; controlled experimental support for 'consider-the-opposite' specifically exists (Mussweiler et al.) but was not directly accessible in this search pass.

---

### [key: precommitment-criteria-fragile-without-process]
- evidence: anecdote
- group: anchoring-precommitment
- sources: https://baldeagleleadership.com/where-is-the-pressure/my-direction/post-hoc-rationalization/

**Claim:** A practitioner critique (Bald Eagle Leadership, no empirical citation) argues that pre-decision criteria are frequently ineffective because practitioners write them broadly enough to retroactively justify the preferred outcome — producing 'more rigorous-sounding rationalizations, not more honest decisions.' Mechanism: when the decision-maker already has an implicit preference, criteria authoring is itself contaminated; the pre-commitment is nominal rather than genuine. Kit-maker implication: criteria must be elicited and frozen before the agent generates or surfaces any candidate alternatives; surfacing alternatives first — even as 'context' — recreates the contamination condition. Scope: practitioner assertion without empirical support; plausibility supported by the SSR findings on suppression backfire, but the causal claim is not directly tested.

---

### [key: ai-agent-upfront-thresholds]
- evidence: consensus
- group: criteria-specification-practice
- sources: https://techcommunity.microsoft.com/blog/marketplace-blog/quality-and-evaluation-framework-for-successful-ai-apps-and-agents-in-microsoft-/4509363, https://www.getmaxim.ai/articles/auto-evaluation-in-ai-development-how-to-automate-the-assessment-of-agent-performance/

**Claim:** Microsoft Marketplace and Maxim.ai practitioner documentation converges on: automated evaluation is most effective when acceptance thresholds are defined upfront (e.g., minimum task-adherence pass rate before a release proceeds) and 'evaluation frameworks should be built alongside the solution — at the end, gaps are harder and costlier to close.' Mechanism: late-specified criteria are fitted to observed outputs, introducing circularity; early-specified criteria provide an independent signal for selection. Kit-maker implication: the kit's evaluation stage must gate on criteria that were authored before any candidate alternatives ran, not criteria derived from inspecting which alternatives scored well. Scope: practitioner documentation for AI app deployment pipelines; empirical effect sizes not provided.

---

### [key: requirements-quality-empirical-gap]
- evidence: empirical
- confidence: low
- group: criteria-specification-practice
- sources: https://link.springer.com/article/10.1007/s00766-021-00367-z

**Claim:** A systematic mapping study on empirical requirements quality research (Springer, link.springer.com/article/10.1007/s00766-021-00367-z) found that 'very few primary studies address evidence-based definitions and evaluations of quality attributes' — meaning the empirical base for specifying good evaluation criteria is itself thin. Mechanism: the field defaults to practitioner heuristics rather than controlled studies, making it difficult to claim that any specific criteria-specification template is empirically validated. Kit-maker implication: any criteria scaffolding in the kit should be treated as a plausible design choice, not an empirically-proven formula; feedback loops and iteration mechanisms are necessary. Scope: software requirements engineering literature; similar gaps likely exist in agent evaluation criteria research.

**Verify note:** Cannot verify. The Springer URL (link.springer.com/article/10.1007/s00766-021-00367-z) redirects to an authentication wall — the paper exists but is paywalled. The DOI resolves to the Requirements Engineering journal (a real venue), and a systematic mapping study on empirical requirements quality research published ~2021 is plausible. However: (1) The specific quote 'very few primary studies address evidence-based definitions and evaluations of quality attributes' cannot be confirmed without access. (2) The study design (systematic mapping) cannot be confirmed. (3) The claim's kit-maker implication ('any criteria scaffolding should be treated as a plausible design choice, not an empirically-proven formula') is a reasonable general methodological caution that does not depend on this specific paper being correct — but the paper itself cannot be verified here. Verdict: source unverifiable due to paywall; claim is plausible but unconfirmed.

---

## Null results
- No controlled experimental study directly comparing 'criteria defined before alternatives' vs 'criteria defined after alternatives' on agent output quality was found — the closest empirical proxy is the SSR post-hoc rationalization study on reasoning traces.
- No direct measurement of how often LLM agents retroactively construct criteria to justify a pre-selected option — this is a gap requiring a purpose-built evaluation.
- Mussweiler et al. 'consider-the-opposite' anchoring bias mitigation study was referenced but not directly accessible in this search pass; effect size could not be extracted.
- No empirical study directly testing whether presenting alternatives to an LLM before criteria authoring degrades criteria quality (vs. criteria authored in absence of alternatives).

## New angles surfaced
- Criteria contamination in multi-turn agent loops: when an agent sees partial results from prior iterations, does its criteria authoring shift toward justifying those results? Testable via conversation history ablation.
- Structural separation as pipeline primitive: whether forking the criteria-generation call from the alternatives-evaluation call (separate context windows, no shared prompt state) replicates SSR-level authentic-reasoning gains in agentic workflows.
- Pre-mortem as a criteria-forcing function: empirical evidence that pre-mortem exercises (Kahneman/Klein) generate more discriminative criteria than post-hoc review, because failure-imagination is criteria-generative rather than criteria-confirmatory.
- LLM position bias interaction with criteria order: if criteria are listed after alternatives in the prompt, position bias may cause later-listed criteria to be weighted toward whichever alternative appears at the preferred position — measuring this interaction would directly inform kit prompt structure.

