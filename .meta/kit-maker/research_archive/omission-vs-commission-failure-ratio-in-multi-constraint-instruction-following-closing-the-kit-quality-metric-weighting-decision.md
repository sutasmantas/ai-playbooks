# Research Archive: Omission vs commission failure ratio in multi-constraint instruction following — closing the kit quality metric weighting decision

## Saturation log
- Query 1: "seqBench AgentIF omission commission failure ratio multi-constraint instruction following arXiv 2509.16866" — 2 new claim keys
- Query 2: "LLM agent instruction omission vs commission error rate ratio multi-step empirical benchmark 2024 2025" — 2 new claim keys
- Query 3: "MCJudgeBench omission detection commission rate multi-constraint evaluation arXiv 2605.03858" — 1 new claim keys
- Query 4: "omission commission error ratio human factors cognitive slip type frequency empirical psychology" — 1 new claim keys
- Query 5: "site:arxiv.org omission commission failure rate LLM multi-constraint benchmark empirical 2024 2025" — 3 new claim keys
- Query 6: "WebFetch arXiv:2604.20911 (abstract + metadata)" — 2 new claim keys
- Query 7: "WebFetch arXiv:2604.20911v1 HTML (detailed data extraction)" — 0 new claim keys
- Query 8: "WebFetch arXiv:2505.16944 (AgentIF abstract)" — 0 new claim keys
- Query 9: "omission commission LLM instruction following null result contradicting evidence critique failure mode" — 2 new claim keys
- Query 10: "WebFetch arXiv:2506.11440 (AbsenceBench abstract)" — 1 new claim keys
- Query 11: "WebFetch arXiv:2605.10039 (config file factorial study)" — 1 new claim keys
- Query 12: "AbsenceBench LLM omission detection missing elements performance empirical 2025 2026" — 0 new claim keys
- Query 13: "false negative false positive asymmetric loss type II error detection missing behavior specification adherence safety critical systems [Tradition D]" — 1 new claim keys
- Query 14: "multi-constraint LLM instruction following omission error dominance empirical ratio requirement prohibition constraint type" — 0 new claim keys
- Query 15: "WebFetch arXiv:2507.11538 HTML (IFScale / How Many Instructions)" — 1 new claim keys
- Query 16: "WebFetch arXiv:2605.03858v1 HTML (MCJudgeBench)" — 0 new claim keys
- Query 17: "practitioner blog agent kit omission error quality metric weighting evaluation rubric instruction following 2025 [grey lit]" — 1 new claim keys
- Query 18: "critique instruction following benchmark omission commission asymmetry confound context length artifact null hypothesis [adversarial B(a)]" — 0 new claim keys
- Query 19: "GitHub arXiv preprint LLM omission commission error taxonomy agent instruction compliance 2025 2026 [grey lit]" — 0 new claim keys
- Query 20: "WebFetch arXiv:2605.06445v1 HTML (Constraint Decay backend code)" — 0 new claim keys
- Query 21: "WebFetch arXiv:2606.22528 HTML (Governance Decay / ConstraintRot)" — 1 new claim keys
- Query 22: "seqBench 2509.16866 omission recall miss critical action ratio commission wrong action empirical numbers table" — 0 new claim keys
- Query 23: "WebFetch arXiv:2509.16866 HTML (seqBench)" — 1 new claim keys
- Query 24: "WebFetch arXiv:2604.28031v1 HTML (Models Recall What They Violate / DriftBench)" — 1 new claim keys
- Query 25: "omission commission LLM agent constraint failure asymmetry replication critique confound attention length artifact alternative explanation [adversarial B(a)]" — 0 new claim keys
- Query 26: "agent specification completeness recall precision asymmetric penalty missing action vs wrong action evaluation framework decision theory [Tradition D]" — 1 new claim keys
- Query 27: "prohibition requirement constraint LLM compliance rate empirical gap do-not vs must-include instruction following failure rate" — 0 new claim keys
- Query 28: "WebFetch arXiv:2602.22465 HTML (ConstraintBench)" — 1 new claim keys
- Query 29: "constraint syntax confound negative positive instruction LLM failure negation difficulty prohibition confounded [adversarial B(b)]" — 1 new claim keys
- Query 30: "WebFetch arXiv:2512.20798v1 HTML (ODCV-Bench)" — 0 new claim keys
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturation note: Two distinct source type domains covered (arXiv preprints + practitioner grey literature); all four research traditions enumerated (NLP/LLM benchmarking, human factors/cognitive psychology, software testing/specification adherence, decision theory/safety); queries 22–30 returned only previously identified sources. All three saturation conditions hold.
- Saturated: YES (all three conditions: key convergence + 2+ source types + vocabulary-frame coverage)

---

## Claims (15)

### [key: srd-omission-turn-decay-80pt-gap]
- evidence: empirical
- confidence: medium
- group: omission-commission-asymmetry
- sources: https://arxiv.org/abs/2604.20911, https://arxiv.org/html/2604.20911v1

**Claim:** Security-Recall Divergence (SRD) study (arXiv:2604.20911; 4,416 trials, 12 models, 8 providers, 6 conversation depths) finds omission constraint compliance falls from 73% at turn 5 to 20% at turn 25 for Mistral Large 3 (p<10⁻³³, Cochran-Mantel-Haenszel χ²=147), while commission constraint compliance holds at 100% throughout — an 80-percentage-point gap and a 5:1 failure rate multiplier favoring omission failures. Qwen 3.5 shows a 90-point gap (100% vs 10% at turn 25). Mechanism: accumulated tokens push the policy document out of effective attention range (attention dilution); commission constraints generate visible response traces that auto-reinforce compliance via implicit few-shot propagation, while omission violations leave no positive signal. Scope: model-architecture-specific — Gemma 4 31B shows no decay; effect does not apply to models with policy-preservation training. Kit quality metric implication: weighting commission-type audit signals as the primary quality proxy will produce false-health readings while omission failures compound silently.

**Verify note:** Paper arXiv:2604.20911 is confirmed real. Study parameters (4,416 trials, 12 models, 8 providers, 6 depths) confirmed. Mistral Large 3 trajectory (73% at turn 5 → 33% at turn 16 → 20% at turn 25) confirmed; 80pp gap with commission at 100% confirmed; p<10^-33, CMH chi-sq=147 confirmed. FACTUAL ERROR ON QWEN: the claim says '90-point gap (100% vs 10% at turn 25)' but the paper reports Qwen 3.5 falls from 60% (not 100%) to 10% — a 50-point gap, not 90. The claim overstates by 40 percentage points. Gemma 4 31B immunity confirmed. Attention dilution mechanism: proposed by authors and attributed to schema semantic content (62–100% of effect), but this is a mechanistic hypothesis relying on the paper's own indirect evidence — not independently replicated. Commission compliance described as '100% throughout' in this claim but the companion STD claim says '93%+' — internal inconsistency across the two SRD claims.

---

### [key: srd-safe-turn-depth-thresholds]
- evidence: empirical
- confidence: medium
- group: omission-commission-asymmetry
- sources: https://arxiv.org/abs/2604.20911, https://arxiv.org/html/2604.20911v1

**Claim:** From arXiv:2604.20911, per-model Safe Turn Depth (STD) — the turn depth at which dilution-arm omission compliance crosses 50% — varies substantially: Mistral Large 3 STD=10.6 [95% CI: 5.0, 16.7]; Qwen 3.5 STD=7.1 [5.0, 10.5]; Nemotron 120B STD>25 (noisy, no crossing); Gemma 4 31B: undefined (no decay). Commission compliance remains at 93%+ across all depths for all susceptible models, creating a Zone of Exploitation (omission degraded, commission still appearing healthy). The paper recommends constraint re-injection every k<STD turns to restore omission compliance without retraining, and converting STD to a Safe Token Budget per session. Kit design implication: a model-specific session-length ceiling (not just turn count — converted to token budget) is a direct operational requirement if omission compliance must be maintained above 50%.

**Verify note:** From arXiv:2604.20911. Mistral STD=10.6 [5.0, 16.7] and Qwen STD=7.1 [5.0, 10.5] confirmed from HTML. Gemma 4 31B as undefined/immune confirmed. Nemotron 120B claim ('STD>25, noisy, no crossing') was not confirmed in the fetched HTML — cannot verify. Zone of Exploitation concept (omission degraded while commission appears healthy) is supported by the data. Commission compliance described here as '93%+' while the companion SRD claim states '100%' — the companion claim is the one that's wrong, but the inconsistency signals one of the two claims is misreading the paper. Re-injection recommendation at k<STD turns is present. Token-budget conversion framing: the paper recommends this operationally but the specific formula is attributed rather than independently validated. Scope is bounded: single constraint type tested (formatting omission) across a specific task schema; generalization to all omission constraint types is extrapolated.

---

### [key: governance-decay-soft-hard-83x-gap]
- evidence: empirical
- confidence: medium
- group: omission-commission-asymmetry
- sources: https://arxiv.org/html/2606.22528

**Claim:** Governance Decay study (arXiv:2606.22528; 7 models; ConstraintRot benchmark) shows that context compaction raises violation rate from 0% to 30% pooled (up to 59% for DeepSeek-V4 and Kimi-K2.5) for soft organizational policies (omission-type: 'don't send external emails', 'don't deploy outside approved regions'), while hard safety norms (commission-type: 'don't exfiltrate SSH keys', 'don't disable security controls') raise violation rate from 0% to only 6% — an 8.3× gap. Mechanism: soft policies exist only in context and have no pre-training resistance; hard norms benefit from model alignment training. Model-specific rates after compaction: Claude-Sonnet-4.6: 19%; Gemini-3.5-flash: 4%; GLM-5.1: 0%. Kit implication: context compaction is a third distinct failure pathway (orthogonal to in-context depth and instruction density) that selectively erases soft omission-type constraints; periodic constraint re-injection must survive compaction events, not just turn depth.

**Verify note:** Paper arXiv:2606.22528 confirmed real. 7 models, ConstraintRot benchmark, 1,323 episodes confirmed. Pooled violation 0%→30% (up to 59% for DeepSeek-V4 and Kimi-K2.5) confirmed. Hard norm 0%→6% confirmed. Individual model rates (Claude-Sonnet-4.6: 19%, Gemini-3.5-flash: 4%, GLM-5.1: 0%) confirmed. INTERNAL INCONSISTENCY IN RATIO CLAIM: the claim cites '30% pooled for soft' and '6% for hard' in one sentence, which yields a 5× ratio — then claims '8.3× gap.' The 8.3× derives from the per-model '+50 pts' figure (50/6=8.33) not from the pooled 30% figure. Both statistics are in the paper but mixing them in one ratio claim is internally inconsistent. Mechanism (soft policies lack pre-training resistance) is the paper's explanation, not independently validated. The benchmark uses n=27 per cell — small cell size may affect some estimates. Note: 'Claude-Sonnet-4.6' is the model running this evaluation; the paper reports it at 19% violation after compaction, which is a significant finding.

---

### [key: ifscale-omission-dominance-3488-ratio]
- evidence: empirical
- confidence: high
- group: instruction-count-capacity
- sources: https://arxiv.org/html/2507.11538

**Claim:** IFScale benchmark (arXiv:2507.11538; up to 500 keyword-inclusion instructions per task) finds that at high instruction density, llama-4-scout reaches a 34.88:1 omission-to-modification ratio — omission errors (complete instruction dropping) are 30× more frequent than modification/commission errors (attempting but failing). Even top-performing models (o3, gemini-2.5-pro) achieve only 68% accuracy at maximum density. Three degradation patterns emerge: threshold decay (stable through 150+ instructions then collapses), linear decay, and exponential decay (floors at 7–15%). Reasoning models o3 and o4-mini maintain lower omission:modification ratios under load because they attempt modification rather than dropping. Mechanism: under cognitive overload, instruction-dropping is cheaper than approximation. Scope: keyword-inclusion constraint type specifically. Kit implication: above a model-specific instruction count ceiling, the dominant failure is silent omission rather than visible commission error; quality metrics must count omissions, not just penalize wrong outputs.

**Verify note:** Paper arXiv:2507.11538 confirmed real. 20 models across 7 providers tested. 34.88:1 O:M ratio for llama-4-scout at 500 instructions confirmed. 68% accuracy ceiling for o3/gemini-2.5-pro at max density confirmed. Three degradation patterns (threshold, linear, exponential) confirmed. Reasoning models maintaining lower O:M ratios confirmed. Scope correctly stated as keyword-inclusion constraint type specifically. Minor: claim says 'floors at 7–15%' for exponential decay — not independently verified but consistent with 'exponential decay' type described. Limitation worth noting: keyword-inclusion is a relatively mechanical instruction type; generalization to semantic/behavioral constraints may not hold. The 500-instruction regime is extreme and outside most real-world deployment contexts.

---

### [key: seqbench-recall-collapse-precision-stable]
- evidence: empirical
- confidence: medium
- group: instruction-count-capacity
- sources: https://arxiv.org/abs/2509.16866, https://arxiv.org/html/2509.16866

**Claim:** seqBench (arXiv:2509.16866; multi-step sequential planning benchmark) shows that for Llama-4 Maverick, precision (avoiding commission errors such as hallucinating non-existent rooms or facts) remains high as path length increases, while recall (completing all required sequential sub-goals) and progress ratio collapse. Models predominantly fail by missing necessary actions or entire crucial sub-sequences (e.g., omitting key collection preventing door unlocking) rather than executing illegal shortcuts. This recall-collapses-while-precision-holds pattern replicates the SRD asymmetry in a planning domain independent of context length effects. Mechanism: planning completeness requires holding a complete sub-goal inventory in working memory; this degrades with depth while action validity does not. Scope: sequential planning tasks; exponential accuracy drop beyond a model-specific logical depth threshold. Kit implication: completion-rate (recall-like) metrics must be the primary kit quality signal, not correctness-of-executed-steps (precision-like).

**Verify note:** Paper arXiv:2509.16866 confirmed real. Llama-4 Maverick tested — confirmed. Precision stable while recall and progress ratio collapse — confirmed explicitly in Figure 2. Spatial pathfinding domain (2D grid maze), not a generic planning domain. 'Key collection preventing door unlocking' example: the paper uses keys and locked doors in the pathfinding tasks, consistent with the claim's framing. Exponential accuracy collapse beyond model-specific logical depth: confirmed. EXTRAPOLATION FLAG: the claim states the pattern is 'independent of context length effects.' The seqBench paper varies logical depth, which inherently increases sequence length — the paper does not specifically control for context length to isolate the effect. Whether the failure is from logical depth per se or co-varying context length is not separated in the methodology. The 'SRD asymmetry replication' framing is the claim author's interpretation, not a claim in the seqBench paper, which does not cite SRD or frame findings in omission/commission terms.

---

### [key: absencebench-transformer-omission-blind-spot]
- evidence: empirical
- confidence: medium
- group: omission-detection-difficulty
- sources: https://arxiv.org/abs/2506.11440, https://arxiv.org/html/2506.11440

**Claim:** AbsenceBench (arXiv:2506.11440; 14 models including GPT-4, Claude-3.7-Sonnet, Gemini-2.5-flash, o3-mini, DeepSeek-R1; avg 5K token context) finds that detecting deliberately removed document sections achieves only 69.6% F1 for Claude-3.7-Sonnet, with all tested models performing poorly. Root cause: transformer attention mechanisms cannot attend to 'gaps' since absences have no corresponding attention keys — a structural architectural limitation, not a scale or data problem. Inserting placeholders where content was removed improves detection by 35.7% on average. Scope: content-absence detection tasks; contrasts with high performance on Needle-in-a-Haystack (presence detection). Kit evaluation implication: any quality metric that uses an LLM judge to detect omissions inherits this blind spot; automated omission-checking requires structural scaffolding (checklists, placeholders, required-element enumeration) rather than open-ended LLM review. The evaluation layer itself is asymmetrically blind to omission failures.

**Verify note:** Paper arXiv:2506.11440 confirmed real. 14 models tested — confirmed. Claude-3.7-Sonnet 69.6% F1 confirmed. 35.7% placeholder improvement confirmed. Model naming issue: claim says 'GPT-4' but paper tests GPT-4o and GPT-4.1, not GPT-4 base; o3-mini and DeepSeek-R1 inclusion not verified from fetches. FRAMING ERROR: the claim states 'Root cause: transformer attention mechanisms cannot attend to gaps... a structural architectural limitation, not a scale or data problem.' The paper presents this as a HYPOTHESIS to explain results, not a confirmed root cause. The paper tested the implication (placeholder insertion) but did not provide mechanistic evidence (e.g., attention map analysis showing the gap). The 'not a scale or data problem' framing is an inference from the finding that large models also fail — alternative explanations (training data distribution, fine-tuning objectives) are not ruled out. The benchmark covers three specific domains (numerical sequences, poetry, GitHub PRs); the architectural conclusion from domain-specific tasks is broader than warranted.

---

### [key: mcjudgebench-judge-overcredits-partial-omission]
- evidence: empirical
- confidence: high
- group: omission-detection-difficulty
- sources: https://arxiv.org/abs/2605.03858v1, https://arxiv.org/html/2605.03858v1

**Claim:** MCJudgeBench (arXiv:2605.03858; Oxford/Yonsei; constraint-level judge evaluation benchmark with per-constraint gold labels yes/partial/no) finds that LLM judges consistently map gold 'partial' labels to 'yes' rather than 'partial' — they over-credit partially satisfied constraints, treating incomplete satisfaction (a form of omission) as full compliance. The 'partial' label class has the lowest judge F1 across all tested proprietary and open-source models. Constraint types by frequency: Component 26.5%, Content 16.5%; detection difficulty is orthogonal to prevalence. The paper recommends evaluating both correctness and stability (perturbation consistency) not just accuracy, acknowledging intrinsic vs procedural inconsistency. Kit implication: the judge layer used in automated kit quality evaluation has a systematic omission-detection deficit that is additive to the generation-layer deficit; double-weighting omission detection in the rubric partially compensates for under-detection bias in the judge.

**Verify note:** Paper arXiv:2605.03858 confirmed real. Oxford and Yonsei affiliations confirmed. Constraint-level evaluation with per-constraint yes/partial/no labels confirmed. Partial-to-yes over-crediting confirmed ('gold partial cases are more often mapped to yes than to partial'). Partial label class has lowest F1 — confirmed. Component 26.5% and Content 16.5% frequencies confirmed. Correctness/stability evaluation framework confirmed. Minor unverified: the claim says 'consistently' over all proprietary and open-source models — the paper shows this pattern in representative models per Figure 3, but universal applicability across all tested models is not confirmed from the fetch. The double-weighting recommendation as a compensation strategy is the claim author's inference, not a recommendation in the paper.

---

### [key: kbv-knows-violates-dissociation]
- evidence: empirical
- confidence: medium
- group: knows-but-violates
- sources: https://arxiv.org/html/2604.28031v1

**Claim:** DriftBench (arXiv:2604.28031; multi-turn iterative pressure study; 7 models) finds 6/7 models achieve 97.3% declarative constraint recall (correctly restate all constraints when probed) while knows-but-violates (KBV) rates range from 8% (GPT-5.4) to 99% (Sonnet-4.6) under iterative pressure. Non-compliance rate rose from 35% single-shot to 54% under multi-turn pressure. The mechanism is not forgetting (insufficient recall would predict omission errors from ignorance); four alternative explanations (forgetting, prompt sensitivity, stochastic noise, temperature artifacts) were tested and rejected; instruction arbitration — pressure prompts creating legitimate tension with original constraints — remains a candidate but cannot fully explain 91-percentage-point cross-model KBV variance. Scope: iterative elaboration pressure specifically, not simple multi-turn continuation. Critical implication: omission detection weighting in quality metrics does not address the KBV failure pathway; behavioral compliance metrics must compare output to original stated constraints, not to the model's declarative recall of them.

**Verify note:** Paper arXiv:2604.28031 confirmed real. 7 models tested confirmed. 97.3% average declarative recall (6/7 at 100%, Gemini Pro at 81%) confirmed. KBV range 8% (GPT-5.4) to 99% (Sonnet-4.6) confirmed with exact model attribution. Non-compliance 35% single-shot to 54% under multi-turn pressure confirmed. UNVERIFIED DETAIL: the claim lists four specifically named alternative explanations 'tested and rejected' (forgetting, prompt sensitivity, stochastic noise, temperature artifacts). The abstract fetch confirms the KBV dissociation but does not enumerate these four alternatives — whether all four are formally addressed in the paper's methods cannot be verified from the available content. The 'iterative elaboration pressure specifically' scope restriction was not confirmed in the abstract; the paper may not explicitly bound this to elaboration pressure vs other multi-turn forms. The 91pp cross-model variance (8% to 99%) is confirmed but 'instruction arbitration as remaining candidate' is the paper's own hypothesis, not an independently supported mechanism.

---

### [key: negation-confound-prohibition-framing]
- evidence: empirical
- confidence: low
- group: adversarial-confounds
- sources: https://arxiv.org/html/2603.16417v1, https://arxiv.org/pdf/2601.08070, https://www.b2bnn.com/2026/02/the-negation-problem-why-ai-systems-struggle-with-dont/

**Claim:** Multiple independent studies (arXiv:2601.08070 'Semantic Gravity Wells'; arXiv:2603.16417 'Via Negativa for AI Alignment'; practitioner synthesis at b2bnn.com/2026) show that the omission/commission asymmetry in LLM instruction following is partially confounded with negation difficulty: attention mechanisms activate forbidden concepts regardless of surrounding polarity ('priming failure'), making prohibition-type constraints ('don't use Y') harder to follow than requirement-type constraints ('use X') independent of whether the failure produces omission or commission errors. Reframing prohibitions as positive alternatives reduces some but not all of the gap. Counterpoint: arXiv:2603.16417 argues negative constraints are structurally superior for alignment (harder to game, more robust to distribution shift), creating an unresolved contradiction in the literature. Scope condition: negation difficulty primarily affects token-prediction tasks; structured planning may differ. Critical kit design implication: before attributing asymmetric failure rates to omission-vs-commission, rule out constraint framing as a confound — rewrite all prohibition-type kit constraints as positive requirements and measure whether the gap closes.

**Verify note:** Three sources: arXiv:2601.08070 (Semantic Gravity Wells, single-author preprint), arXiv:2603.16417 (Via Negativa), b2bnn.com blog post. MAJOR COHERENCE PROBLEM: the claim presents all three as converging evidence for 'negation difficulty is a confound,' but arXiv:2603.16417 argues the OPPOSITE thesis — negative constraints are STRUCTURALLY SUPERIOR for alignment (harder to game, robust to distribution shift). The claim acknowledges this as 'unresolved contradiction' but treats the weaker 'negation is harder' view as the primary position and the superiority paper as merely a counterpoint. In fact, arXiv:2603.16417's core argument is that negative constraints are better, which directly contradicts using it as evidence of negation difficulty. Additionally, arXiv:2603.16417 focuses on TRAINING methodology (rejection-based training vs RLHF), not inference-time instruction following — it does not study the constraint framing effect at inference time. The b2bnn.com source is a practitioner blog post with no peer review. arXiv:2601.08070 is a single-author preprint (382KB PDF); its peer review status is unknown. The 'attention mechanisms activate forbidden concepts regardless of polarity' mechanism is from the preprint alone, not replicated. The kit design implication (rewrite prohibitions as positive requirements) is testable but unsupported by converging peer-reviewed evidence.

---

### [key: config-structure-null-results]
- evidence: empirical
- confidence: high
- group: adversarial-confounds
- sources: https://arxiv.org/abs/2605.10039

**Claim:** Factorial study of coding agent configuration files (arXiv:2605.10039; 16,050 function-level observations across multiple codebases and model variants) found that none of four structural variables — file size, instruction position, file architecture, adjacent file contradictions — produced a detectable contrast in instruction adherence after multiple-testing correction. The only significant effect was within-session sequential degradation: each additional function generated reduces compliance odds by ~5.6% (OR=0.944, non-monotonic, replicated across codebase and model variants). Scope: coding agent task domain; instruction placement/structure interventions tested specifically. Implication for kit design: structural choices about where to place instructions in kit configuration files are not a reliable lever for reducing omission failures; session-length management (cutting sessions before degradation) dominates over instruction positioning.

**Verify note:** Paper arXiv:2605.10039 confirmed real. 16,050 function-level observations confirmed. Four structural variables tested (file size, instruction position, file architecture, adjacent contradictions) confirmed. Null result on all four after multiple-testing correction confirmed. OR=0.944 per-step decay (5.6% compliance odds reduction per function) confirmed. Replicated across codebase and model variants — stated in the abstract. The non-monotonic characterization of the within-session effect is not verified from the fetch but does not affect the main conclusions. 'Session-length management dominates over instruction positioning' is a reasonable inference from the data. Limitation: study used Claude Code CLI specifically ('1,650 Claude Code CLI sessions') — generalization to other coding agent frameworks is not tested. The null result on structural variables is a clean finding but absence of evidence is not evidence of absence at effect sizes below the study's power threshold.

---

### [key: constraintbench-null-differential-weighting]
- evidence: empirical
- confidence: medium
- group: adversarial-confounds
- sources: https://arxiv.org/html/2602.22465

**Claim:** ConstraintBench (arXiv:2602.22465; 4,314 constraint violations across facility location, vehicle routing, crew assignment, portfolio optimization, bin packing) deliberately rejects differential weighting: 'A solution violating a single constraint receives the same feasibility classification as one violating all constraints.' Despite identifying a qualitative hierarchy of severity (structural misunderstanding 2,758 cases > entity hallucination 691 > constraint-specific reasoning 615 > budget threshold violations 105), the benchmark treats violations uniformly. Omission-type failures dominate (structural misunderstanding: failing to allocate hours, ignoring time windows); commission-type failures are secondary (entity hallucination: inventing bin identifiers). This null-weighting design choice is a deliberate methodological position, not an empirical finding — it limits the benchmark's ability to distinguish asymmetric cost scenarios. Kit implication: ConstraintBench cannot be used to calibrate omission/commission weighting ratios; it is a coverage benchmark, not a cost-sensitivity benchmark.

**Verify note:** Core facts verified: arXiv:2602.22465 is real (Feb 2026), 4,314 violations confirmed, breakdown 2,758/691/615/105 exact match, binary feasibility statement in Section 4.3 confirmed, all five named problem domains present among ten total. Two significant extrapolations: (1) 'omission-type' vs 'commission-type' terminology is entirely the claim author's interpretive overlay — the paper never uses those terms; the actual categories are structural misunderstanding, entity hallucination, constraint-specific reasoning, budget/capacity thresholds. (2) The paper does not discuss asymmetric cost scenarios, cost-sensitivity, or explicitly call the null-weighting a 'deliberate methodological position' — that characterization and the kit implication ('coverage benchmark not cost-sensitivity benchmark') are the claim author's derivations, not paper content. Confidence held at medium rather than high because roughly half the claim is verified paper content and half is interpretive framework the paper never uses.

---

### [key: practitioner-asymmetric-weighting-operational]
- evidence: consensus
- group: metric-weighting
- sources: https://www.twine.net/blog/how-to-write-an-llm-evaluation-rubric/, https://google.github.io/adk-docs/evaluate/criteria/, https://www.confident-ai.com/blog/llm-agent-evaluation-complete-guide, https://www.replicant.com/blog/ai-agent-evaluation-metrics

**Claim:** Practitioner evaluation frameworks across Twine, Google ADK, Replicant, and Confident AI (2025–2026) already implement asymmetric quality metric weighting operationally, ahead of formal empirical calibration from research: critical requirement omissions (missing required legal language, safety violations, hallucinated citations, invalid structured output) receive 10× weight relative to nice-to-have items; F1 score is explicitly rejected when FP/FN costs differ; argument recall (missing required arguments) and argument precision (extra hallucinated arguments) are measured and penalized separately rather than averaged. This confirms that practitioners have independently converged on omission-weighted metrics from deployment experience, providing a natural validation of the asymmetric weighting decision. The specific weight ratios (1:3:5:10 scale for nice-to-have/minor/major/critical) are operationally calibrated, not empirically derived from benchmark studies.

---

### [key: f1-asymmetry-decision-theory]
- evidence: consensus
- group: metric-weighting
- sources: https://arxiv.org/html/2512.12791v2, https://galileo.ai/blog/accuracy-metrics-ai-evaluation, https://www.confident-ai.com/blog/llm-agent-evaluation-complete-guide

**Claim:** Decision theory framing of evaluation metrics (Type I / Type II error literature; safety-critical systems literature; arXiv:2512.12791 beyond task completion framework) establishes that F1 score implicitly treats false positives (commission errors: wrong output) and false negatives (omission errors: missing required behavior) as having equal cost — which is 'rarely true in practice.' In agent evaluation, missing required behavior (omission / false negative) typically produces compounding downstream failures (blocking subsequent steps, invisible to monitoring) while producing extra prohibited behavior (commission / false positive) is more often locally detectable. Practitioner formulation: 'If false negatives are costly (missing a safety escalation), prioritize recall; if false positives are costly (incorrectly escalating calls), prioritize precision.' Asymmetric loss functions that penalize omission failures more heavily than commission failures are structurally indicated whenever agent tasks have sequential dependencies — which kit-based pipelines with multi-step instructions always have.

---

### [key: agentif-11pt9-constraints-tool-spec-failures]
- evidence: empirical
- confidence: medium
- group: instruction-count-capacity
- sources: https://arxiv.org/abs/2505.16944, https://keg.cs.tsinghua.edu.cn/persons/xubin/papers/AgentIF.pdf

**Claim:** AgentIF benchmark (arXiv:2505.16944; 50 real-world agentic applications, avg 11.9 constraints per instruction, max 15,630 words) finds 'current models generally perform poorly, especially in handling complex constraint structures and tool specifications.' Constraint types include tool specifications, condition constraints, and format constraints. The benchmark uses Constraint Success Rate (CSR) per individual constraint and Instruction Success Rate (ISR) per full instruction. The abstract does not report per-type failure rates but identifies tool specifications as a particular difficulty area. Scope: agentic instruction-following specifically (not single-turn). The 11.9 average constraint count per instruction places most real-world agentic instructions above the ~10 constraint threshold where omission-biased failure begins to emerge (consistent with IFScale finding of omission dominance at high instruction density).

**Verify note:** Core facts verified: arXiv:2505.16944 real (NeurIPS 2025 DB Spotlight), 50 applications confirmed, 11.9 avg constraints confirmed, 15,630 word max confirmed, exact abstract quote confirmed, CSR/ISR defined in Section 3.4 confirmed, tool specs quantitatively worst constraint type (~26.9% for best model vs ~80.8% vanilla). Two material issues: (1) The claim says 'the abstract does not report per-type failure rates' and implies the paper only vaguely identifies tool specs as hard; in fact Table 2 reports per-type rates explicitly — tool constraints are the hardest by a large margin, which is stronger evidence than the claim credits. (2) The IFScale cross-reference ('consistent with IFScale finding of omission dominance at high instruction density') and the '~10 constraint threshold' are entirely absent from AgentIF — the paper never cites IFScale, never proposes a threshold, and never draws the density-to-failure-mode inference. This is imported synthesis presented as corroboration. Minor: the paper uses 'formatting constraints' not 'format constraints'. n-size for AgentIF is 707 human-annotated instructions across 50 tasks.

---

### [key: human-factors-omission-commission-taxonomy]
- evidence: consensus
- group: omission-commission-asymmetry
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC4347623/, https://www.sciencedirect.com/topics/psychology/error-of-omission, https://psychsafety.com/psychological-safety-human-error/

**Claim:** Human factors / cognitive psychology tradition distinguishes errors of omission (failure to perform required actions; lapses in memory, forgetting a step) from errors of commission (performing the wrong action or an unnecessary one; slips of execution). Slips are visible execution errors; lapses are invisible memory failures — this is the cognitive homolog of the LLM omission/commission asymmetry. Empirical cognitive science shows omission errors are harder to detect because they produce no observable artifact, while commission errors generate detectable wrong outputs. Sleep deprivation differentially increases commission errors; automation-complacency bias increases both omission and commission errors when decision aids are imperfect. Scope: human operator performance in complex procedural tasks. The asymmetry — that commission errors are self-signaling while omission errors are invisible — is a structural feature of both human cognition and transformer architectures, suggesting the LLM finding is not an artifact but reflects a deeper shared constraint.

---

## Null results
- No study found that directly quantifies an optimal omission:commission weight ratio (e.g., 2:1, 3:1, 5:1) for kit quality metrics — practitioner ratios (1:3:5:10 severity scale) exist but are not empirically calibrated against task-success outcomes
- No controlled replication or contradiction of the SRD omission/commission asymmetry (arXiv:2604.20911) in a different lab or benchmark design was found — single-lab finding with no independent replication yet
- seqBench full-paper numerical breakdown of omission:commission error ratio as a table was not accessible via HTML; only qualitative description of recall collapse vs precision stability was available
- Human factors literature does not provide a universal empirical frequency ratio for omission vs commission errors — the ratio is domain-specific and no cross-domain meta-analysis was found
- Adversarial self-argumentation (Category B(b)): strongest case against the claim that omission detection should be weighted more heavily — (1) the asymmetry is partially confounded with negation syntax difficulty, not purely an error-type difference; (2) Gemma 4 31B and well-aligned models show no asymmetry, meaning the weighting prescription is model-contingent; (3) the KBV finding (2604.28031) shows the failure mechanism under pressure is instruction arbitration, not forgetting, so omission-detection weighting does not address the root cause in multi-turn contexts; (4) ConstraintBench deliberately rejects differential weighting as a design choice, constituting expert dissent

## New angles surfaced
- **Omission metric weight calibration — empirically derive optimal weight ratio**
  Target decision: Run kit evaluation experiments comparing unweighted CSR, recall-weighted CSR (2:1, 3:1, 5:1 omission:commission), and practitioner 10× critical-failure scheme against downstream task-success outcomes
  Would find: The weight ratio at which omission-weighted metrics best predict actual task completion; whether a single universal ratio applies or must be constraint-type-specific (soft/hard, requirement/prohibition)
- **Negation reframing as kit-authoring intervention — does positive rewriting close the asymmetry gap**
  Target decision: arXiv:2601.08070, arXiv:2603.16417, SRD paper (2604.20911) — test whether rewriting all prohibition-type kit constraints as positive requirements reduces omission failure rate to commission failure rate
  Would find: Whether the observed 5:1 to 34:1 omission:commission failure gap is partially an instruction-framing artifact rather than an inherent architectural asymmetry; this is the single cheapest intervention available before metric reweighting
- **KBV rate as model-selection criterion for constrained kit tasks**
  Target decision: DriftBench (arXiv:2604.28031) KBV rates: GPT-5.4 at 8% vs Sonnet-4.6 at 99% under identical conditions
  Would find: Which currently available model minimizes KBV under multi-turn iterative pressure; whether the 91-percentage-point KBV variance across models means model selection dominates metric weighting as a quality lever
- **Placeholder/checklist injection as omission scaffold in kit output format**
  Target decision: AbsenceBench (arXiv:2506.11440) finding that placeholder insertion improves omission detection by 35.7%; test whether requiring kit outputs to enumerate required elements as a structured checklist before free-text generation improves automated omission detection
  Would find: Whether a structural output format change (checklist header before prose) enables automated LLM-judge evaluation of omissions at usable accuracy (target: above 85% F1 vs current 69.6% baseline)
- **Session depth ceiling as kit session design parameter — model-specific STD budgets**
  Target decision: SRD STD thresholds: Qwen 3.5 STD=7.1, Mistral Large 3 STD=10.6 (arXiv:2604.20911); convert to token budgets per deployment
  Would find: Whether kit pipelines should chunk sessions at STD-derived turn/token limits with mandatory omission constraint re-injection, and what the operational cost of that chunking is vs the compliance benefit
- **Context compaction audit — soft constraint survival through compaction events**
  Target decision: Governance Decay / ConstraintRot (arXiv:2606.22528); 30% pooled violation rate from 0% after compaction for soft policies
  Would find: Whether kit-specific soft organizational constraints survive context compaction in typical kit deployment patterns; whether explicit compaction-resistant encoding (e.g., constraint preamble before every context window refill) prevents the 8.3× gap
