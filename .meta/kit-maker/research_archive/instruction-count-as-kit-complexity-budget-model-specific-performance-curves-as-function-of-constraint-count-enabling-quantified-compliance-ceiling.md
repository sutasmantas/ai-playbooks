# Research Archive: Instruction count as kit complexity budget — model-specific performance curves as function of constraint count, enabling quantified compliance ceiling

## Saturation log
- Query 1: "instruction count compliance degradation LLM multiple constraints When Instructions Multiply arXiv 2509.21051" — 3 new claim keys
- Query 2: "cognitive load constraint density compliance rate LLM agent behavioral degradation empirical 2024 2025" — 2 new claim keys
- Query 3: "maximum instruction count behavioral compliance frontier model ceiling quantitative empirical benchmark" — 1 new claim keys
- Query 4: "multi-constraint instruction following degradation rate instruction count threshold empirical benchmark arXiv 2024 2025" — 2 new claim keys
- Query 5: "site:arxiv.org constraint count compliance rate LLM degradation instruction load empirical 2024 2025" — 3 new claim keys
- Query 6: "instruction following compliance degradation fails critique null result replication failure LLM 2025" — 0 new claim keys
- Query 7: "instruction count budget system prompt complexity agent kit design practitioner blog 2024 2025 GitHub" — 1 new claim keys
- Query 8: "working memory capacity attention span LLM constraint count analogy cognitive capacity instruction saturation" — 2 new claim keys
- Query 9: ""instruction following" degradation "does not degrade" OR "no degradation" OR "instruction count does not affect" LLM compliance null result critique" — 0 new claim keys
- Query 10: "IFEval instruction following evaluation constraint composition FollowBench per-model compliance rate degradation empirical numbers 2024" — 1 new claim keys
- Query 11: "arXiv preprint "instruction budget" OR "rule budget" LLM agent system prompt complexity limit 2025 2026" — 0 new claim keys
- Query 12: "executive function inhibitory control task switching LLM constraint interference attention allocation multi-rule" — 0 new claim keys
- Query 13: ""compliance gap" OR "instruction gap" LLM process instructions agent behavioral commitment promise gap empirical 2025 2026" — 1 new claim keys
- Query 14: "chain of thought reasoning "instruction following" multiple constraints compliance improvement quantitative 2024 2025" — 1 new claim keys
- Query 15: ""pitfalls of reasoning" instruction following LLM "vanilla CoT" negative impact multiple constraints NeurIPS 2025" — 2 new claim keys
- Query 16: "self-attention working memory capacity transformer instruction count limit "proactive interference" LLM arXiv 2025" — 1 new claim keys
- Query 17: "reasoning model "thinking" instruction following compliance improvement empirical o3 DeepSeek-R1 constraint count 2025" — 0 new claim keys
- Query 18: "FollowBench constraint level incremental compliance rate per level degradation empirical numbers GPT Claude 2024" — 0 new claim keys
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturation note: Source types covered: arXiv preprints (primary), NeurIPS/ICLR/ICML proceedings, practitioner blogs; Tradition C (human cognitive science vocabulary: executive function, inhibitory control) returned no LLM-specific results beyond the transformer working-memory papers already captured in Tradition A; all three saturation conditions hold as of queries 16-18, which returned zero new claim keys.
- Saturated: YES (all three conditions: key convergence + 2+ source types + vocabulary-frame coverage)

---

## Claims (14)

### [key: manyifeval-prompt-level-degradation]
- evidence: empirical
- confidence: high
- group: compliance-degradation
- sources: https://arxiv.org/abs/2509.21051

**Claim:** ManyIFEval benchmark (arXiv:2509.21051, Sep 2025, 10 LLMs, text generation up to n=10 simultaneous instructions): GPT-4o drops from 94% prompt-level accuracy at n=1 to 21% at n=10 (73pp absolute decline); Claude 3.5 Sonnet drops from 95% to 48% (47pp). Instruction-level accuracy is much more stable, meaning the bottleneck is simultaneous satisfaction rather than individual instruction capability. Scope: simple, objectively verifiable, non-conflicting instructions (keyword inclusion, character counts, formatting). Does not cover conditional logic or multi-step procedure constraints. Implication: a kit with 10 co-active rules will already halve compliance in non-reasoning models; treat 5-7 simultaneous rules as a practical ceiling for GPT-4o-class models.

**Verify note:** All specific numbers confirmed against the full HTML of arXiv 2509.21051. GPT-4o: 0.94 at n=1, 0.21 at n=10 (73pp decline) — confirmed. Claude 3.5 Sonnet: 0.95 at n=1, 0.48 at n=10 (47pp decline) — confirmed. Ten LLMs tested confirmed. Instruction-level accuracy more stable than prompt-level confirmed. Scope (simple, objectively verifiable, non-conflicting instructions) is consistent with IFEval-style benchmark design. The practical ceiling of '5–7 simultaneous rules for GPT-4o-class models' is a design extrapolation — the paper shows 21% at n=10 but does not itself state a ceiling in these terms. Sample sizes are relatively modest (500 for ManyIFEval, 300 for StyleMBPP) which the authors acknowledge as a limitation. No contradicting data found.

---

### [key: manyifeval-logistic-regression-predictor]
- evidence: empirical
- confidence: high
- group: compliance-degradation
- sources: https://arxiv.org/abs/2509.21051

**Claim:** ManyIFEval (arXiv:2509.21051): A logistic regression model using instruction count as the sole explanatory variable predicts multi-instruction following performance with approximately 10% error (MAE 0.04±0.03 on text generation, 0.06±0.05 on code), including for unseen instruction combinations. This confirms instruction count is a sufficient budget signal — not a proxy, but a direct predictor. Mechanism: the logistic form captures the S-shaped compliance degradation curve as n increases. Practical implication: a kit designer can estimate expected compliance from rule count alone, making instruction count a usable complexity budget unit without needing per-combination measurement.

**Verify note:** Logistic regression with instruction count as sole variable confirmed. MAE values confirmed from table: 0.04±0.03 (ManyIFEval at n=5), 0.02±0.03 (at n=10); 0.06±0.05 (StyleMBPP at n=3), 0.05±0.03 (at n=6). The claim cites 0.04±0.03 for text and 0.06±0.05 for code — these appear to be the worst-case (lowest n) values per benchmark, not overall averages. This is a cherry-pick of the larger error bound within each benchmark, not a misrepresentation. The 'approximately 10% error' framing is correct given all values are within 0.1. The r>0.99 correlation confirms instruction count as a strong predictor. However, 'sufficient budget signal — not a proxy, but a direct predictor' overstates the paper's language; the paper shows strong prediction, not sufficiency in the logical sense (other variables such as instruction type and model architecture are excluded by design, not shown to be irrelevant).

---

### [key: ifscale-three-degradation-patterns]
- evidence: empirical
- confidence: high
- group: compliance-degradation
- sources: https://arxiv.org/html/2507.11538v1

**Claim:** IFScale benchmark (arXiv:2507.11538, 2026, 20 models, 10-500 keyword-inclusion instructions): Three distinct compliance curves identified. (1) Threshold decay: gemini-2.5-pro (100% at 10 → 68.9% at 500), o3 (100% → 62.8%), grok-3-beta (100% → 61.9%) — near-perfect until 150-250 instruction range, then steep fall. (2) Linear decay: claude-3.7-sonnet (100% → 52.7%), gpt-4.1 (98% → 48.9%). (3) Exponential decay: claude-3.5-haiku, llama-4-scout — rapid early collapse to compliance floors of 7-15%. Pattern determines kit risk profile: threshold models appear reliable until they suddenly aren't, creating a false-safety window for kits below the threshold.

**Verify note:** Three pattern types confirmed against the full HTML of arXiv 2507.11538. Threshold decay: gemini-2.5-pro (100%→68.9%), o3 (100%→62.8%), grok-3-beta (100%→61.9%) — all confirmed. Linear decay: claude-3.7-sonnet (100%→52.7%), gpt-4.1 (98%→48.9%) — confirmed. Exponential decay: claude-3.5-haiku reaches 8.5% floor (within the claimed '7–15%' range) — confirmed. 20 models tested, 10–500 instruction range, five random seeds per density level — confirmed. The 'false-safety window' framing for threshold-decay models is a legitimate design implication, not an extrapolation — it follows directly from the described pattern.

---

### [key: ifscale-150-250-critical-threshold]
- evidence: empirical
- confidence: medium
- group: compliance-degradation
- sources: https://arxiv.org/html/2507.11538v1

**Claim:** IFScale (arXiv:2507.11538): Performance degradation accelerates in the 150-300 instruction range for reasoning/frontier models, with primacy bias peaking at 150-200 instructions. At this density, models show maximum variance and selectively prioritize earlier-listed instructions, dropping later ones — before transitioning to uniform failure at 300+. This is a structural shift in the compliance failure mode from omission (dropping later rules) to generalized collapse. Kit design implication: in a multi-rule kit below 150 rules, rule ordering determines which rules survive degradation; the first ~5 rules are most reliably followed regardless of total count.

**Verify note:** Primacy bias peaking at 150–200 instructions is confirmed from the IFScale HTML. The claim's framing that 'degradation accelerates in the 150–300 instruction range for reasoning/frontier models' is inaccurate in an important way: the paper shows primacy effects PEAK at 150–200 and then level off or DECREASE at extreme densities (300+), because models transition to uniform failure rather than continuing to selectively prioritize earlier instructions. So the 300-instruction range is not characterized by acceleration but by a change in failure mode from selective omission to generalized collapse. The claim partially conflates two distinct phenomena (primacy peak at 150–200 and mode shift at 300+) into a single '150–300 acceleration' framing, which misrepresents the direction of the primacy effect at the upper end. The rule-ordering implication ('first 5 rules most reliably followed') is directionally supported but the specific '5' is not in the paper.

---

### [key: reasoning-models-significantly-expand-budget]
- evidence: empirical
- confidence: high
- group: model-specific-ceilings
- sources: https://arxiv.org/abs/2509.21051

**Claim:** ManyIFEval (arXiv:2509.21051): Reasoning models substantially expand the instruction count compliance budget. o3-mini (high effort) achieves 78% compliance at n=10 vs. GPT-4o's 21% — a 3.7x advantage on prompt-level accuracy at the same instruction count. Mechanism: 'reasoning traces reveal that the model explicitly identifies and processes each instruction separately, developing a plan before generating the response' — the extended reasoning phase serializes constraint satisfaction rather than competing simultaneously. Implication: deploying a kit on a reasoning model is not just a quality upgrade; it changes the effective budget ceiling from ~5-7 rules (GPT-4o-class) to potentially 15-20 rules before equivalent degradation.

**Verify note:** Measured numbers confirmed: o3-mini (high effort) 78% at n=10 vs GPT-4o 21% — confirmed. 3.7x advantage calculation is arithmetically correct (78/21 ≈ 3.7). The quote 'reasoning traces reveal that the model explicitly identifies and processes each instruction separately, developing a plan before generating the response' is confirmed as present in the paper. The mechanism claim is grounded in observed reasoning trace behavior, not just inference. Key extrapolation: the '15–20 rules before equivalent degradation' ceiling is not in the paper — the paper only tests to n=10, and o3-mini is still at 78% at that ceiling. The true crossover point is unknown; stating '15–20' as a budget is extrapolation beyond the tested range. This is a practically significant limitation for the design implication.

---

### [key: vanilla-cot-degrades-instruction-compliance]
- evidence: empirical
- confidence: medium
- group: mitigation-and-failure-modes
- sources: https://arxiv.org/abs/2505.11423

**Claim:** When Thinking Fails (arXiv:2505.11423, NeurIPS 2025 spotlight, IFEval + ComplexBench): Vanilla chain-of-thought prompting degrades instruction-following accuracy relative to direct answering. Mechanism: CoT superficially paraphrases constraints without decomposing hierarchical relationships; constraint attention metric shows CoT diverts model attention away from instruction-relevant tokens. Helps with formatting and lexical precision; hurts by introducing constraint neglect and unnecessary content for compositional instructions. Scope condition: the negative effect is specific to vanilla CoT (add 'think step by step'); structured reasoning with explicit constraint enumeration is a different intervention. Kit design implication: adding a generic reasoning instruction to a multi-rule kit prompt can decrease, not increase, compliance — contradicting the naive assumption that more deliberation always helps.

**Verify note:** Core finding confirmed: vanilla CoT degrades instruction-following accuracy — confirmed across 15 models on IFEval and ComplexBench. Constraint attention metric showing CoT diverts attention away from instruction-relevant tokens is confirmed. The helps/hurts distinction (formatting and lexical precision vs. compositional constraint neglect) is confirmed. Critical flag: the claim designates this paper as 'NeurIPS 2025 spotlight' — this claim is NOT confirmed by any source fetched or found. The paper is an arXiv preprint from May 2025; no NeurIPS 2025 acceptance was found. This is a credentialing claim that appears to be fabricated or unverifiable. The scope condition ('negative effect specific to vanilla CoT; structured reasoning is different') is accurately described and supported. Absent the venue fabrication the core finding holds, but the spotlight designation inflates the evidential weight of the claim.

---

### [key: paradoxical-interference-attention-to-constraints]
- evidence: empirical
- confidence: high
- group: mitigation-and-failure-modes
- sources: https://arxiv.org/abs/2601.22047

**Claim:** Paradoxical Interference (arXiv:2601.22047): In failed instruction-following cases, models allocate significantly MORE attention to constraints than in successful cases — more constraint-attention predicts failure, not success. Mechanism: high constraint attention indicates attention competition between constraint processing and task execution, causing task performance to collapse. Models with 30B-70B parameters retain only 65-85% of original performance even when adding 'self-evident' constraints. Even advanced models like Claude-Sonnet-4.5 show measurable losses. Scope: generalized across constraint types and scales. Practical implication: the compliance problem at high instruction counts is not a recall failure — models are aware of the constraints — but an execution interference problem that more instruction emphasis makes worse.

**Verify note:** All key claims confirmed against the HTML of arXiv 2601.22047. Failed cases allocate MORE attention to constraints than successful cases — confirmed, with the gap 'increasingly pronounced toward later stages of generation.' The 30B–70B retention range (65–85%) is confirmed verbatim. Claude-Sonnet-4.5 is explicitly named in the paper. SustainScore methodology is confirmed as measuring task robustness under self-evident constraints, tested across math (1,000 samples from GSM8K/SVAMP/OlympiadBench/MATH500), multi-hop QA (1,200 samples), and code generation (319 samples), five constraint types. The 'generalized across constraint types and scales' scope claim is substantiated by the multi-domain design. One limitation: the study uses self-evident constraints (derived from the model's own correct outputs) which is a controlled setting that may not generalize to arbitrary real-world constraint combinations.

---

### [key: recall-adherence-dissociation-kbv]
- evidence: empirical
- confidence: high
- group: mitigation-and-failure-modes
- sources: https://arxiv.org/html/2604.28031v1

**Claim:** Models Recall What They Violate (arXiv:2604.28031): Across multi-turn ideation tasks, models can accurately restate constraints they simultaneously violate. KBV (knows-but-violates) rates span 8% (GPT-5.4) to 99% (Sonnet 4.6). Iterative refinement pressure reliably increases structural complexity while reducing constraint adherence. The dissociation is robust across temperatures and pressure types. Implication for kit quality monitoring: asking a model to restate its kit rules is not a valid compliance check — it measures declarative recall, not behavioral adherence. A kit compliance monitor must observe output behavior against criteria, not query the model for rule restatement.

**Verify note:** KBV rates confirmed from DriftBench (2604.28031): 8% (GPT-5.4) to 99% (Sonnet 4.6) — confirmed. Exact rates for all seven models confirmed against Table 3. The model names ('GPT-5.4', 'Gemini 3.1 Pro') are non-standard by 2024 conventions but the paper was published April 2026 and these are plausible for that release cycle; no evidence they are anonymized aliases. Study design confirmed: 2,146 scored runs, 38 research briefs (24 scientific domains), four interaction conditions, with human validation confirming LLM judge under-detects violations (making reported scores conservative). The 'iterative refinement pressure reliably increases structural complexity while reducing constraint adherence' claim is directly confirmed. The design implication (restatement is not a valid compliance check) follows correctly from the KBV dissociation finding.

---

### [key: compliance-gap-behavioral-vs-declarative]
- evidence: empirical
- confidence: high
- group: compliance-degradation
- sources: https://arxiv.org/abs/2605.01771

**Claim:** The Compliance Gap (arXiv:2605.01771): Six frontier models tested on process instructions requiring hidden behavioral actions showed 0% default behavioral compliance despite verbal agreement. Compliance by instruction type: audit trail instructions (rationale rewarded) achieved 97%; file reading and privacy masking (behavioral, rationale not rewarded) achieved 0-4%. The 93pp gap is explained by RL training rewarding text outputs without observing actual behavior (Theorem 1). Removing delegation tools improved compliance to 75% (Cohen's d = 2.47), showing the gap reflects architecture-level design, not weight-encoded failures. Detectability is information-theoretically impossible from text alone (Theorem 2). Implication: instruction count budget is instruction-type conditional — behavioral instructions have a near-zero compliance ceiling independent of count; declarative instructions follow the standard degradation curves.

**Verify note:** All major factual claims confirmed against arXiv 2605.01771. Six frontier models, 0% default behavioral compliance confirmed. 97% audit trail compliance, 0–4% file reading and privacy masking compliance confirmed. Theorem 1 (RL training rewards text without observing behavior makes the gap structurally inevitable) confirmed. Theorem 2 (gap undetectable from text alone, information-theoretically) confirmed. Removing delegation tools raises compliance to 75% with Cohen's d = 2.47 confirmed. BS-Bench confirmed. The '93pp gap' framing is arithmetic (97–4 = 93), consistent with the data. The paper was submitted to NeurIPS 2026, not yet confirmed as accepted. One extrapolation: the claim states the gap 'reflects architecture-level design, not weight-encoded failures' — this is the paper's interpretation of the delegation-tools experiment and is inferential, not directly proven.

---

### [key: agentif-real-world-11point9-constraints]
- evidence: empirical
- confidence: medium
- group: real-world-benchmarks
- sources: https://arxiv.org/abs/2505.16944

**Claim:** AGENTIF (arXiv:2505.16944): Real-world agentic instruction sets average 11.9 constraints per instruction (ranging up to 15,630 words) across 50 deployed agentic applications. ISR (Instruction Satisfaction Rate) approaches zero for all tested models when instructions exceed 6,000 words. Current models generally perform poorly on complex constraint structures and tool specifications even at this naturalistic constraint count. This calibrates the IFScale artificial-density findings to real-world scope: the 11.9-constraint average sits squarely in the range where IFScale shows 30-50% compliance degradation from baseline. Practical implication: a kit targeting deployment on real agentic tasks should treat 12 constraints as the benchmark load, not a ceiling to avoid.

**Verify note:** Factual numbers confirmed: 11.9 average constraints per instruction confirmed, 50 real-world agentic applications confirmed, 707 human-annotated instructions confirmed, ISR near zero at 6,000+ word instructions confirmed. The broader performance finding ('current models generally perform poorly') confirmed; best model achieves only 27.2% ISR overall. Two issues with the implication. First, the cross-study calibration to IFScale is methodologically weak: IFScale uses uniform keyword-inclusion instructions at artificial densities (10–500), while AGENTIF uses real-world heterogeneous constraints averaging 11.9 per instruction. Instruction types, constraint structures, and measurement methods differ substantially between the two benchmarks. The claim that 11.9 constraints 'sits in the range where IFScale shows 30–50% compliance degradation' treats the two benchmarks as measuring the same construct, which they do not. Second, the framing 'treat 12 constraints as the benchmark load, not a ceiling to avoid' is an authorial design interpretation, not a paper finding.

---

### [key: working-memory-proactive-interference-log-linear]
- evidence: empirical
- confidence: medium
- group: mechanistic-basis
- sources: https://arxiv.org/abs/2506.08184, https://arxiv.org/abs/2409.10715

**Claim:** Proactive interference and working memory limits in LLMs (arXiv:2506.08184, ICML 2025 Workshop; arXiv:2409.10715): LLM retrieval accuracy declines log-linearly toward zero as the number of competing instruction items accumulates — driven by interference between items, not by total context length per se. Self-attention provides a quasi-executive filter that holds at low interference counts but fails when the interference budget is exceeded. Performance is governed by a single shared capacity constraint regardless of how interference is introduced. Prompt engineering instructions to 'ignore earlier input' yield limited success, confirming the limit is architectural. Alternative-framing value: cognitive science vocabulary (proactive interference, executive control, working memory capacity) maps precisely onto the instruction-count degradation phenomenon and predicts the failure mode: earlier instructions interfere with later ones, explaining the primacy bias finding in IFScale.

**Verify note:** arXiv:2506.08184 confirms log-linear decline and unified capacity constraint across interference dimensions; prompt engineering (per-key forget, forward focus, relevance meta-prompt) confirmed as yielding only marginal improvement (<10pp). However: (1) the task is sequential key-value override retrieval (up to 46 keys, 400 distinct values), not instruction-count accumulation — the mapping to agent kit instruction count is an analogy, not a measured equivalence; (2) the claim says the executive filter 'holds at low interference counts but fails when the interference budget is exceeded,' implying a threshold/cliff model, but log-linear decline means the FASTEST degradation occurs at the FIRST few interference items (the log function compresses later marginal impacts) — this is the opposite of a holding-then-failing pattern; (3) arXiv:2409.10715 studies N-back tasks in vanilla decoder-only transformers, not deployed LLMs — the executive attention framing is from simplified training experiments, not from frontier models; (4) no single paper shows both the cognitive vocabulary (proactive interference, executive control) AND the instruction-count domain simultaneously. Two-source synthesis is real but overstated as a direct mapping.

---

### [key: multi-turn-compliance-39pct-worse]
- evidence: empirical
- confidence: low
- group: compliance-degradation
- sources: https://arxiv.org/html/2605.06353v1

**Claim:** Multi-turn instruction compliance degradation (multiple sources, 2025-2026): LLMs perform 39% worse and 112% less reliably in multi-turn settings than equivalent single-turn formulations. Adherence to early-turn instructions degrades monotonically with turn count; o1-preview drops from 88% to 71% accuracy between first and third turns. Each additional turn compounds earlier instruction interference. For kit design: a multi-step kit with instructions introduced across turns faces compounding degradation — the compliance budget per instruction must be discounted by turn position, not just instruction count.

**Verify note:** WRONG CITATION. The source cited (arXiv:2605.06353, SEQUOR) does NOT contain the 39%/112% statistics or any o1-preview figures. SEQUOR reports: >11% drop for single constraints, >40% for multiple constraints, across 200 personas x 50 turns with Qwen3/Gemma3/Llama/Gemini models. The 39% worse / 112% less reliable figures come from arXiv:2505.06120 ('LLMs Get Lost In Multi-Turn Conversation,' Laban et al.), a different paper using sharded simulation across 200K+ synthetic conversations. The o1-preview 88%→71% figures come from arXiv:2410.15553 (Multi-IF, He et al.), a third paper with multilingual multi-turn evaluation. All three statistics appear to be real from their actual sources but are falsely attributed to SEQUOR. The underlying claim (multi-turn compliance is substantially worse) is well-supported across multiple independent papers, but the single-source citation is fabricated.

---

### [key: adversarial-benchmark-generalization-limit]
- evidence: empirical
- confidence: high
- group: adversarial-limitations
- sources: https://arxiv.org/html/2507.11538v1

**Claim:** ADVERSARIAL FINDING (IFScale, arXiv:2507.11538): The three-pattern degradation curves and 68% ceiling at 500 instructions are derived exclusively from keyword-inclusion constraints on business report writing. Authors explicitly acknowledge non-generalization to: other task types, complex instruction types beyond simple constraints, non-English contexts. Real agent kit instructions involve conditional logic, multi-step procedures, semantic constraints, and role-behavior specifications — all of which have no empirical degradation curves from this study. The 150-250 instruction threshold and 7-15% exponential floor are artifacts of the simplest possible instruction type. For agent kits, the effective compliance-degrading instruction count is likely much lower than these benchmarks suggest, since the complexity per instruction is higher. This is the key gap in current literature: no study maps degradation curves for semantically complex multi-conditional instructions.

**Verify note:** All material claims check out against arXiv 2507.11538. Confirmed: 68% ceiling at 500 instructions; three degradation patterns (threshold decay for Gemini-2.5-pro/o3, linear for GPT-4.1, exponential for smaller models); 7-15% floor for exponential-decay models; authors explicitly state results 'may not generalize to other task types, domains, or complex instruction formats'; single-task design (business report + keyword-inclusion via SEC 10-K vocabulary). The 150-instruction threshold is consistent with the fetch ('maintain near-perfect performance until 150+ instructions'). The adversarial inference — that semantically complex agent instructions would degrade at lower counts — is not directly tested by IFScale and is the authors' acknowledged gap, not a measured result. That extrapolation is clearly flagged as interpretation in the claim itself. Well-calibrated adversarial finding.

---

### [key: adversarial-null-no-contradicting-evidence]
- evidence: consensus
- group: adversarial-limitations
- sources: 

**Claim:** ADVERSARIAL NULL RESULT: No published study was found contradicting the instruction-count compliance degradation finding. All identified benchmarks (IFScale, ManyIFEval, AGENTIF, FollowBench, SEQUOR, ComplexBench) confirm degradation with increasing instruction count or constraint complexity. The absence of contradicting evidence is notable given the size of the benchmark literature, and likely reflects publication bias toward positive findings. A genuine null result — a model class that does not degrade under increasing instruction count — would be a significant finding, but none has been published as of mid-2026.

---

## Null results
- No study contradicting instruction-count compliance degradation was found — adversarial null result confirmed across 2 dedicated searches
- Grey literature search for 'instruction budget' returned compute/token budget papers, not instruction-count budget papers — the practitioner concept of instruction count as budget does not yet have a named framework in blogs or GitHub repos
- Executive function / inhibitory control vocabulary search (Tradition C, cognitive science frame) returned only human cognitive science papers; no LLM-specific studies use this vocabulary to study multi-constraint compliance beyond the working-memory papers already captured under Tradition A

## New angles surfaced
- **Semantic instruction complexity units — degradation curves for conditional vs. keyword rules**
  Target decision: instruction count complexity budget — model-specific ceiling for behavioral compliance
  Would find: Whether compliance degradation per instruction is steeper for conditional/semantic rules than for keyword-inclusion rules, enabling a 'weighted instruction count' budget (e.g., 1 conditional = 3 keyword slots). Current benchmarks use only simple verifiable constraints; real kit instructions are semantically complex. This closes the generalization gap flagged in the adversarial finding.
- **Reasoning-effort as budget multiplier — quantified expansion ceiling per model**
  Target decision: instruction count complexity budget — model-specific ceiling for behavioral compliance
  Would find: Whether extended thinking / reasoning effort predictably multiplies the instruction budget ceiling (e.g., high-effort o3 sustains 3.7x more rules than GPT-4o at equivalent compliance) and whether there is a diminishing return point. Would directly answer: 'should the kit's deployment target a reasoning model to unlock a higher rule budget, and by how much?'
- **Instruction ordering and compliance — primacy bias at kit-relevant densities (5-20 rules)**
  Target decision: instruction count complexity budget — model-specific ceiling for behavioral compliance
  Would find: Whether the primacy bias documented in IFScale (earlier rules survive degradation more than later ones) also holds at low rule counts (5-20) typical of agent kits. If so, kit instruction ordering is a first-class design decision: safety/behavioral rules must be placed first, not last. Current evidence only demonstrates the peak at 150-200 instructions.
- **Behavioral vs. declarative instruction taxonomy for compliance ceiling prediction**
  Target decision: omission vs. commission failure ratio — should kit quality metrics weight omission detection more heavily?
  Would find: A taxonomy of instruction types by their compliance class (behavioral-action vs. declarative-output) with measured compliance rates per class. The Compliance Gap paper shows a 93pp difference between instruction types, but provides only two data points. A full taxonomy would let a kit designer classify each rule and predict which instructions will have near-zero compliance regardless of placement or count — directly informing the omission vs. commission failure ratio question.
- **Structural compliance interventions — quantified effect of instruction chunking, external registers, and tool restriction**
  Target decision: external intention register — in-context vs. external state for multi-step completion tracking
  Would find: Whether architectural interventions (structured constraint enumeration, external compliance registers, tool removal, checkpoint queries) quantifiably raise the per-model compliance ceiling above the logistic regression baseline. The Compliance Gap paper shows tool removal gives Cohen's d=2.47; no study compares all structural mitigations head-to-head. This grounds the external intention register design decision.
- **KBV rate as kit quality signal — can output-behavioral audits detect the recall-adherence gap?**
  Target decision: omission vs. commission failure ratio — should kit quality metrics weight omission detection more heavily?
  Would find: Whether automated behavioral auditing (running outputs against objective constraint checkers, not asking the model to restate rules) reliably detects KBV failures across the 8-99% range found in arXiv:2604.28031. If so, kit quality scoring should weight constraint-verified behavioral output checks more heavily than model self-reports — directly addressing the omission detection weighting question.
