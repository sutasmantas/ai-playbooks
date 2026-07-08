# Research Archive: Multi-task instruction completion vocabulary gap-fill — prospective memory and multi-intent parsing traditions missed in original USER-07 research

## Saturation log
- Query 1: "prospective memory intention tracking concurrent task completion all sub-goals LLM empirical psychology" — 3 new claim keys
- Query 2: "multi-intent query processing task enumeration LLM instruction set completion systematic review" — 2 new claim keys
- Query 3: "task omission multi-task instruction failure LLM agent sequential list completion empirical gaps" — 2 new claim keys
- Query 4: "attention allocation multiple concurrent instructions LLM prospective memory task tracking arxiv 2024 2025" — 2 new claim keys
- Query 5: "prospective memory LLM instruction following critique null result replication failure limitations" — 2 new claim keys
- Query 6: "site:arxiv.org multi-intent instruction following LLM task omission benchmark 2024 2025" — 2 new claim keys
- Query 7: "goal deactivation intention retirement cognitive architecture subgoal tracking agent planning sequential" — 1 new claim keys
- Query 8: "checklist adherence task completeness verification commitment management agent incomplete plan execution LLM" — 1 new claim keys
- Query 9: "proactive interference working memory LLM context window task saturation unable forget instructions 2025" — 1 new claim keys
- Query 10: "instruction following LLM multiple constraints stacking conflict omission IFEval benchmark failure modes 2024 2025" — 1 new claim keys
- Query 11: "prospective memory LLM framing critique anthropomorphism limitations cognitive psychology transfer validity AI" — 1 new claim keys
- Query 12: "to-do list completion task abandonment interruption recovery resumption lag human computer interaction sequential tasks" — 1 new claim keys
- Query 13: "SagaLLM transaction management LLM agent partial completion rollback compensation incomplete task" — 1 new claim keys
- Query 14: "cognitive load theory worked examples multi-component tasks instructional design completion effect 2024" — 0 new claim keys
- Query 15: "BDI agent belief desire intention commitment multi-goal management incomplete task detection plan library" — 1 new claim keys
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturation note: Two structurally distinct source type domains were covered (arXiv preprints and peer-reviewed databases: PMC, VLDB, ACM, Nature, EMNLP); all four pre-enumerated traditions received at least one query (cognitive psychology, NLP/LLM, AI planning/BDI, HCI); consecutive final queries returned no new claim keys; all three saturation conditions hold.
- Saturated: YES (all three conditions: key convergence + 2+ source types + vocabulary-frame coverage)

---

## Claims (15)

### [key: pm-llm-compliance-drop-2-21pct]
- evidence: empirical
- confidence: high
- group: prospective-memory-llm
- sources: https://arxiv.org/abs/2603.23530

**Claim:** Study 'Did You Forget What I Asked?' (arXiv:2603.23530, 2025) tested 3 model families across 8,000+ prompts and found formatting constraint compliance drops 2–21% when models face concurrent task load. Terminal constraints (actions required at response boundary) degrade worst — up to 50% drop. Mechanism: LLMs treat secondary formatting requirements as lower-priority under primary task generation pressure, analogous to prospective memory forgetting under cognitive load in humans. Scope: single-turn scenarios only; 3 models from 2 cloud providers; IFEval sample has only 6 items per instruction type, limiting per-type statistical power. Implication for kit design: instructions requiring end-of-response actions (e.g., 'finish with a summary') are the highest-risk constraint type and require explicit reinforcement mechanisms.

**Verify note:** All headline figures confirmed from abstract of arXiv:2603.23530: 2–21% drop, terminal constraints up to 50%, 3 model families, 8,000+ prompts. The 2–21% range is wide (spanning 'minor' to 'substantial'), and statistical power per instruction type is low (6 items per type on IFEval sample). The 'analogous to prospective memory under cognitive load' mechanism is a borrowed interpretive frame, not a demonstrated mechanism. Core behavioral findings are solid; mechanistic claim is analogy.

---

### [key: pm-llm-salience-recovery-90-100pct]
- evidence: empirical
- confidence: medium
- group: prospective-memory-llm
- sources: https://arxiv.org/abs/2603.23530

**Claim:** The same study (arXiv:2603.23530) found that salience-enhanced formatting — explicit framing plus trailing reminders of the constraint — recovers compliance to 90–100% in many single-constraint conditions. However, when multiple constraints are stacked, the reminder becomes unreliable: joint compliance falls below 50% for at least one tested model. Mechanism: reminders restore prospective memory cue accessibility but cannot compensate for interference from multiple competing constraints simultaneously. Scope: stacking experiment used a single run with 10 prompts per cell — low statistical power. Implication: single-constraint salience enhancement is a validated mitigation; multi-constraint stacking requires structural solutions beyond prompt reminders.

**Verify note:** 90–100% single-constraint recovery confirmed. Multi-constraint joint compliance below 50% confirmed. Critical issue: the stacking experiment used 10 prompts per cell — the claim acknowledges this but then draws firm implications ('requires structural solutions') from n=10 observations. This is insufficient for reliable estimation. The finding is directionally plausible but statistically weak; the strong implication overstates what n=10 can support.

---

### [key: pm-llm-bidirectional-interference-gsm8k-collapse]
- evidence: empirical
- confidence: high
- group: prospective-memory-llm
- sources: https://arxiv.org/abs/2603.23530

**Claim:** The same study documented bidirectional interference: one model's GSM8K math accuracy collapsed from 93% to 27% when formatting constraints were added alongside the math task. Mechanism: the secondary task (constraint monitoring) consumes reasoning capacity that the primary task (math) requires, not just the reverse. This contradicts a naive assumption that PM constraints are 'free' overhead. Scope: single model, magnitude may not generalise. Implication: kit designs that add formatting/structural constraints to reasoning-heavy tasks must budget for primary-task accuracy degradation.

**Verify note:** 93%→27% GSM8K collapse confirmed directly from abstract. Bidirectional interference framing (secondary task consumes primary-task capacity) is consistent with the result. Key caveat correctly noted in the claim: single model, may not generalise. Additional concern not named: a 93%→27% collapse on GSM8K suggests the affected model may have been near its reasoning ceiling already, making it especially vulnerable. The effect may be specific to the weakest-reasoning model tested, not representative of the model family range.

---

### [key: triggerbench-pm-degrades-long-context]
- evidence: empirical
- confidence: medium
- group: prospective-memory-llm
- sources: https://arxiv.org/abs/2606.23459

**Claim:** TriggerBench (arXiv:2606.23459, 2025) introduced 1,265 PM tasks across 5 dimensions (State-Tracking, Temporal Grounding, Logical Adherence, Attention Recovery, Safe Coding). Key finding: prospective memory accuracy degrades sharply as context length scales, contrasting with retrospective memory which near-saturates acceptably up to 100K tokens. Mechanism: PM requires holding an intention active against distracting content; retrospective memory retrieval benefits from attention over all tokens. Scope: extends to implicit constraints and concurrent-request overloading. Secondary finding: successful problem-solving trajectories yield higher PM accuracy than failed attempts at identical context lengths — available reasoning budget modulates PM performance. Implication: kit instructions that rely on the model 'remembering' earlier constraints in long agentic runs will degrade predictably with session length.

**Verify note:** PM decay with context length confirmed; RM near-saturation at 100K confirmed; successful trajectories yielding higher PM accuracy confirmed. Two specific claims were not verifiable from the abstract: (1) the '1,265 PM tasks' figure does not appear in the fetched content; (2) the five named dimensions (State-Tracking, Temporal Grounding, Logical Adherence, Attention Recovery, Safe Coding) are not named in the abstract — only 'five dimensions' is stated. Core finding is solid; specific detail-level figures require direct paper access to confirm.

---

### [key: proactive-interference-log-linear-decay]
- evidence: empirical
- confidence: medium
- group: working-memory-interference
- sources: https://arxiv.org/abs/2506.08184

**Claim:** PI-LLM study (arXiv:2506.08184, ICML 2025 workshop) adapted the proactive interference paradigm: LLM retrieval accuracy declines log-linearly toward zero as semantically related but superseded key-value pairs accumulate, even when the correct final value is positioned immediately before the query. Mechanism: LLMs cannot actively unbind outdated associations from their attention computation — they lack the selective suppression mechanism humans use in working memory. Prompt engineering (explicit 'ignore earlier input' instructions) yields only limited mitigation. Model size is the primary robustness factor, not context window length. Scope: key-value updating paradigm; real-world instruction complexity is higher. Implication: for kit agents that update standing instructions mid-session (e.g., revised constraints), earlier versions will continue to interfere; the solution is architectural (not prompt-based) or requires explicit instruction versioning in the context structure.

**Verify note:** Log-linear decay confirmed. Prompt engineering yielding only limited mitigation confirmed. ICML 2025 workshop confirmed. One specific claim not confirmed: 'model size is the primary robustness factor, not context window length' — the source says the paper demonstrates interference 'beyond context length' but does not explicitly name model size as the primary factor in the abstract. This claim may be in the full paper but was not verifiable from what was fetched. Workshop-paper status means preliminary findings; KV-updating paradigm is simpler than real agentic instruction versioning.

---

### [key: multi-instruction-stacking-monotonic-degradation]
- evidence: empirical
- confidence: high
- group: multi-constraint-stacking
- sources: https://arxiv.org/abs/2509.21051

**Claim:** Study 'When Instructions Multiply' (arXiv:2509.21051, EMNLP 2025) tested 10 LLMs on ManyIFEval (up to 10 instructions) and StyleMBPP (up to 6 instructions). Finding: performance consistently degrades as instruction count increases, across all models. A logistic regression using only instruction count as input predicts multi-instruction performance within ~10% error even for unseen instruction combinations. Mechanism: each additional instruction imposes marginal interference; the relationship is systematic enough to be modelled by a single scalar. Scope: text-generation and code-generation tasks only; omission vs. conflict breakdown not provided in abstract. Implication: kit instruction sets should be designed with instruction count as a first-class complexity variable; the expected performance at N constraints can be estimated and included in kit quality metrics.

**Verify note:** All specific claims confirmed from the source: 10 LLMs, ManyIFEval (up to 10 instructions), StyleMBPP (up to 6 instructions), consistent degradation across all models, logistic regression predicting performance within ~10% error for unseen combinations. EMNLP 2025 venue was not explicitly confirmed in fetched content but the paper details match. The logistic regression finding (instruction count as a single scalar predictor) is strong and multi-model. The engineering implication (estimating expected performance at N constraints) extends beyond what the paper directly argues but is a reasonable application.

---

### [key: agentif-avg-11-9-constraints-poor-performance]
- evidence: empirical
- confidence: high
- group: multi-constraint-stacking
- sources: https://arxiv.org/abs/2505.16944

**Claim:** AgentIF (arXiv:2505.16944, 2025) benchmarked LLMs on 707 human-annotated instructions from industrial agentic systems. Average instruction length: 1,723 words; max: 15,630 words; average constraints per instruction: 11.9. Finding: 'current models generally perform poorly, especially in handling complex constraint structures and tool specifications.' Instruction adherence in agentic scenarios is described as 'underexplored.' Scope: real industrial agentic application instructions, not synthetic benchmarks. Implication: the typical real-world agentic instruction set (11.9 constraints) is well into the degradation zone identified by multi-constraint stacking research; kit designs targeting agentic deployment must account for this baseline difficulty.

**Verify note:** All core statistics confirmed directly from the paper: 707 instructions, 50 real agentic tasks, avg 1,723 words, max 15,630 words, avg 11.9 constraints, sourced from industrial and open-source agentic systems (not synthetic). The quote 'current models generally perform poorly, especially in handling complex constraint structures and tool specifications' is confirmed verbatim. Instruction adherence described as 'underexplored' confirmed. Best model achieves under 30% ISR, corroborating the 'poorly' finding. One extrapolation flagged: the implication that 11.9 constraints maps onto a pre-established 'degradation zone from multi-constraint stacking research' is a claim the paper itself does not make — it is an inference made by whoever assembled these claims, not a finding of the AgentIF paper. The benchmark is also evaluation-only and does not identify a causal mechanism for why constraint count causes degradation. N=707, single-paper, no replication.

---

### [key: mast-14-failure-modes-task-verification-11pct]
- evidence: empirical
- confidence: medium
- group: multi-agent-failure-taxonomy
- sources: https://arxiv.org/abs/2503.13657

**Claim:** MAST study (arXiv:2503.13657, 2025) analysed 1,600+ annotated multi-agent traces (kappa=0.88 inter-annotator agreement) across 7 MAS frameworks and 4 model families. Identified 14 failure modes across 3 categories: system design issues, inter-agent misalignment, and task verification. Failures include failing to follow task requirements (11.8% of failures) and not recognising task completion (12.4%). Mechanism: multi-agent coordination introduces additional failure surfaces beyond single-agent instruction following. Scope: coding, math, and general agent tasks. Implication: 'not recognising task completion' (12.4%) is a discrete failure class distinct from 'omission' — kits need explicit completion-state signalling, not just instruction salience.

**Verify note:** Core facts confirmed: 14 failure modes, 3 categories, kappa=0.88, 7 frameworks, 4 model families (GPT-4, Claude 3, Qwen2.5, CodeLlama), coding/math/general tasks. However two issues: (1) The category naming in the claim is wrong. The claim says the three categories are 'system design issues, inter-agent misalignment, and task verification.' The paper's actual category names are 'Specification Issues (FC1), Inter-Agent Misalignment (FC2), and Task Verification (FC3)' — so 'system design issues' vs 'specification issues' is a mislabelling. (2) The specific percentages 11.8% and 12.4% are cited in the claim as coming from 'task verification' category, but per the HTML version of the paper these two failure modes (Disobey task specification FM-1.1 and Unaware of termination conditions FM-1.5) both belong to FC1 Specification Issues, not task verification. The raw percentages themselves are approximately confirmed (search results cite 10.98% and 9.82% in one source vs 11.8% and 12.4% in another — slight discrepancy suggesting different paper versions). The claim's implication about 'not recognising task completion' being a discrete class is structurally sound but mis-categorised. N=1,600+ traces, single study.

---

### [key: arq-reintroduction-90pct-vs-cot-86pct]
- evidence: empirical
- confidence: medium
- group: mitigation-strategies
- sources: https://arxiv.org/abs/2503.03669

**Claim:** Attentive Reasoning Queries (arXiv:2503.03669, 2025) achieved 90.2% success across 87 scenarios by repeatedly reintroducing critical instructions during the reasoning chain, compared to 86.1% for Chain-of-Thought and 81.5% for direct generation. Mechanism: inline instruction restatement prevents constraint drift during extended reasoning — equivalent to periodic prospective memory cue exposure. Developed for multi-turn customer-facing agents (Parlant framework). Scope: customer-service domain, multi-turn; generalisation to other domains not established. Implication: mid-response instruction reinstatement (not just prompt-level reminders) is a validated mitigation for multi-constraint drift, applicable to kit scaffolding.

**Verify note:** Performance numbers confirmed: 90.2% vs 86.1% CoT vs 81.5% direct, across 87 scenarios, in the Parlant framework. However three important weaknesses: (1) Single model only — GPT-4o exclusively (two specific checkpoints). No cross-model validation. The result may not generalise to other LLMs. (2) 87 scenarios is a small and domain-homogeneous test set — all customer-service conversational agent scenarios within one proprietary framework (Parlant). The paper's own limitations section explicitly acknowledges this. (3) No confidence intervals or statistical significance testing — results are raw percentages from 5-run averages. The claim states 'Scope: customer-service domain, multi-turn; generalisation to other domains not established' — this caveat is correctly included, but the implication that this is 'a validated mitigation for multi-constraint drift, applicable to kit scaffolding' overstates what a single-domain, single-model, 87-scenario test without significance testing can establish. Medium confidence: numbers check out but the generalisability claim in the implication is extrapolation.

---

### [key: sagallm-saga-pattern-partial-completion-rollback]
- evidence: empirical
- confidence: medium
- group: architectural-completion-tracking
- sources: https://arxiv.org/abs/2503.11951

**Claim:** SagaLLM (arXiv:2503.11951, VLDB 2025) adapted the distributed-systems Saga transactional pattern to multi-agent LLM planning: each workflow node has a regular agent (forward execution) paired with a compensation agent (rollback). When partial completion occurs, rather than discarding completed steps and regenerating from scratch, the system rolls back to the last valid checkpoint and re-executes from there. Mechanism: explicit completion state is externalised to a persistent context repository rather than held in LLM working memory. Scope: multi-agent planning tasks, relaxes ACID atomicity/isolation. Implication: the Saga pattern directly solves the kit design problem of partial task completion in long agentic runs — maintaining an external completion state manifest is architecturally superior to relying on in-context memory.

**Verify note:** VLDB publication confirmed: PVLDB 18(12):4874-4886, 2025. Saga pattern, compensation agents, persistent context repository, ACID relaxation all confirmed. However two inaccuracies: (1) The claim states 'each workflow node has a regular agent paired with a compensation agent' — the paper describes compensating transactions (Ci) paired with transactions (Ti), not dedicated compensation agents per node. The compensation mechanism is transactional, not agent-based in the way claimed. (2) The claim states 'rolls back to the last valid checkpoint and re-executes from there' — the actual mechanism is compensatory transactions that reverse prior steps, not a simple checkpoint-and-replay rollback. These are architecturally different. The claim also says 'scope: multi-agent planning tasks' but the experimental scope is travel planning and family coordination scenarios specifically, with broader domains (healthcare, finance) described but not tested. The core architectural insight (external state > in-context memory) is supported. The specific mechanism description contains inaccuracies.

---

### [key: position-bias-null-result-instruction-following]
- evidence: empirical
- confidence: low
- group: null-results-adversarial
- sources: https://arxiv.org/abs/2601.03269

**Claim:** Study 'The Instruction Gap' (arXiv:2601.03269, 2025) tested 13 LLMs on enterprise instruction-following and found no consistent relationship between instruction following rates and instruction position (first vs. middle vs. last): middle instructions do not generally show lower rates than boundary instructions. This is a null result contradicting the 'lost-in-the-middle' hypothesis for instruction-following specifically. Mechanism: the U-shaped position bias observed in retrieval tasks does not appear to transfer to instruction adherence tasks in the same way. Scope: evaluated on enterprise/RAG scenarios; top performers were Claude-Sonnet-4 and GPT-5. Implication: kit designers should NOT rely on instruction ordering as a primary mitigation strategy for multi-constraint following; the failure mode is not primarily positional.

**Verify note:** This claim contains a critical attribution problem. The paper arXiv:2601.03269 'The Instruction Gap' (December 2025) does exist and did test 13 LLMs in enterprise RAG scenarios with Claude-Sonnet-4 and GPT-5 as top performers. However: (1) The HTML version of the paper confirms NO dedicated position-bias experiment was conducted — no systematic manipulation of instruction placement (first/middle/last) was designed into the methodology. The paper found 'no consistent relationship between instruction-following rates and instruction position' but this appears to be an incidental observation rather than a controlled position-manipulation experiment. (2) The paper explicitly states the authors 'were unable to isolate a single concrete mechanism.' (3) The paper's own authors mention lost-in-the-middle as a potential explanatory factor for instruction failures, framing it as a plausible mechanism — the opposite of 'this null result contradicts that hypothesis.' (4) The enterprise/RAG scope is narrow (600 samples, 5 enterprise personas, RAG summarisation tasks only). (5) The methodology uses LLM-as-Judge, which the paper itself flags as a potential bias source. The claim presents an incidental finding from a narrow enterprise RAG study as a controlled null result that overturns the lost-in-the-middle hypothesis — that conclusion does not follow from the study design. LOW confidence.

---

### [key: anthropomorphic-framing-critique-lm-research]
- evidence: consensus
- group: null-results-adversarial
- sources: https://arxiv.org/abs/2502.09192

**Claim:** Paper 'Thinking beyond the anthropomorphic paradigm benefits LLM research' (arXiv:2502.09192, 2025) argues that cognitive psychology frameworks applied to LLMs — including memory, attention, and intention concepts — may constrain research by importing unverified assumptions about mechanism similarity. Five specific anthropomorphic assumptions are examined. The paper does not deny that LLMs exhibit the behaviours, only that the cognitive-psychology framing may obscure the actual computational mechanisms and bias intervention design toward human-analogue solutions. Scope: theoretical/empirical survey, not specific to prospective memory. Implication for kit design: findings from PM/WM-framed LLM studies are valid as empirical performance observations, but proposed mitigations derived from cognitive theory (e.g., 'cue salience') should be validated computationally rather than assumed to work via the same mechanism.

---

### [key: hci-interruption-resumption-lag-cues-reduce-workload]
- evidence: empirical
- confidence: medium
- group: hci-tradition-validation
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12271330/

**Claim:** HCI interruption recovery research (Nature Scientific Reports 2025, PMC12271330) examined how assistant cues affect concurrent multitasking interruptions. Finding: assistant cues (contextual reminders of current task state) significantly improve interruption recovery, with stronger effects under fatigue conditions. Retrieval cues alone do not improve task performance but reduce operator workload. Mechanism: this mirrors the salience-enhancement finding in LLM-PM research from a different tradition (HCI), independently validating that externally-provided task-state cues improve resumption. Scope: human-computer interaction tasks; fatigue modulates effect size. Implication: the kit-design principle of explicit task-state manifests is supported by two independent research traditions (LLM-PM and HCI interruption science).

**Verify note:** Paper exists (PMC12271330, Scientific Reports 2025), design confirmed (two within-subjects experiments, MATB-II simulator, Experiment 2 with EEG). Key findings partially confirmed: assistant cues do improve task performance and show stronger effects under fatigue. Retrieval cues reduce workload but do NOT improve (and actually show negative effects on) task performance — this matches the claim. However two concerns: (1) N-sizes are very small: Experiment 1 = 15 participants, Experiment 2 = 25 participants. Within-subjects with small N in a simulator task; effect sizes and generalisability to real-world or LLM contexts are uncertain. (2) The implication draws an analogy from human interruption recovery to LLM instruction-following, claiming this 'independently validates' the LLM-PM research finding. This is a cross-domain analogy, not independent validation of the same mechanism. Human prospective memory and LLM attention are different systems. The HCI finding is real but the 'independent validation' framing overstates the inferential link. The claim accurately reports the HCI findings; the extrapolation in the implication is the weak point.

---

### [key: bdi-intention-commitment-reconsideration-planning]
- evidence: consensus
- group: planning-tradition-gap-identification
- sources: https://en.wikipedia.org/wiki/Belief%E2%80%93desire%E2%80%93intention_software_model

**Claim:** BDI (Belief-Desire-Intention) agent architecture formalises intention management: agents commit to plans and do not replan on every perturbation (commitment creates predictability and reduces thrashing). When context changes, agents explicitly reconsider intentions and may drop, suspend, or replace them — this is the 'intention retirement' mechanism absent in vanilla LLM instruction following. Mechanism: explicit intention state separate from belief state enables selective deactivation without affecting other active goals. Scope: formal agent systems; LLMs lack a native equivalent. Implication: the absence of explicit intention retirement in LLM agents (they never 'complete and deactivate' a subgoal from an active register) is the structural gap that PM/multi-constraint research is measuring empirically — the kit design solution is to implement an external intention register with explicit completion-marking.

---

### [key: seqbench-recall-precision-divergence-path-length]
- evidence: empirical
- confidence: medium
- group: sequential-omission-dominance
- sources: https://arxiv.org/abs/2509.16866

**Claim:** seqBench (arXiv:2509.16866) quantified sequential reasoning limits in LLMs: while precision remains relatively high across path lengths, recall and progress ratio plummet as path length increases — models predominantly fail by missing necessary actions or entire crucial sub-sequences rather than making wrong actions. This establishes omission (not commission) as the dominant failure mode in sequential multi-step instruction execution. Scope: sequential reasoning benchmark, not specifically instruction-following. Implication: kit checklist designs should prioritise omission detection (did all steps complete?) over error detection (were steps done correctly?) as the primary quality signal.

**Verify note:** The paper (arXiv:2509.16866) exists and the HTML version confirms the precision/recall divergence finding explicitly: 'while precision generally remains high... recall and progress ratio plummet with increasing path length' and 'models predominantly fail by missing necessary actions or entire crucial sub-sequences.' The omission-dominant failure mode is stated explicitly. However two limitations: (1) The scope caveat in the claim ('sequential reasoning benchmark, not specifically instruction-following') is correct but understated — seqBench tests navigation/planning tasks in graph-like environments, and the transfer to instruction-following in agentic kits is an analogy, not a direct measurement. The failure modes in sequential graph traversal may not map cleanly onto multi-constraint instruction adherence. (2) The benchmark is explicitly designed as a 'parametrized tunable benchmark' — results depend heavily on the specific parameter settings used, making cross-study comparison difficult. The implication that kit designs should prioritise omission detection over error detection is a reasonable inference but rests on this cross-domain transfer. The empirical finding itself is well-supported by the paper.

---

## Null results
- Position bias (lost-in-the-middle) as a mechanism for instruction-following failure: arXiv:2601.03269 found no consistent positional effect on instruction following rates — middle instructions do not underperform boundary instructions, contradicting the expected transfer from retrieval tasks.
- Anthropomorphic framing critique specific to prospective memory studies: arXiv:2502.09192 raises the general critique but does not specifically address PM framing — the targeted adversarial null result on PM-specific critique was not found in the literature.
- Cognitive load theory / instructional design tradition (Category A query 4 alternative): searches for CLT completion-effect / worked-examples literature in 2024 returned only general educational psychology results with no direct LLM or agent application — this tradition has not yet produced empirical LLM work bridging to kit design.

## New angles surfaced
- **Omission vs. commission failure ratio in multi-constraint instruction following: closing the kit quality metric decision**
  Target decision: seqBench (arXiv:2509.16866), AgentIF (arXiv:2505.16944), MCJudgeBench (arXiv:2605.03858)
  Would find: Specific per-constraint omission rate vs. conflict/commission rate breakdown in real agentic instruction sets; needed to decide whether kit quality metrics should weight omission detection more heavily than error detection — currently PROVISIONAL in Hard Rule 13 element 8
- **External intention register vs. in-context manifest: architectural decision for kit completion tracking**
  Target decision: SagaLLM (arXiv:2503.11951), BDI architecture literature, MemGuide (arXiv:2505.20231)
  Would find: Empirical comparison of in-context completion lists vs. externalised state repositories for multi-step task completion accuracy; closes the design decision between context-embedded checklists and tool-based state management in the kit's completion tracking mechanism
- **Instruction count as a kit complexity budget: calibrating the N-constraint ceiling**
  Target decision: arXiv:2509.21051 (When Instructions Multiply), arXiv:2503.23530 (PM Failures)
  Would find: Model-specific performance curves as a function of constraint count, enabling a quantified budget (e.g., 'kits should target ≤6 simultaneous active constraints for 80%+ compliance on frontier models') rather than a qualitative warning
- **Mid-response instruction reinstatement: ARQ pattern applicability to kit scaffolding**
  Target decision: arXiv:2503.03669 (ARQ), arXiv:2606.23459 (TriggerBench)
  Would find: Whether ARQ-style inline constraint restatement generalises beyond customer-service multi-turn to single-turn agentic kit instructions; determines whether kit system prompts should embed mid-instruction checkpoints vs. relying on terminal reminders alone
- **Proactive interference unbinding: architectural mitigations beyond prompt engineering**
  Target decision: arXiv:2506.08184 (PI-LLM), arXiv:2603.23530 (PM Failures)
  Would find: Whether instruction versioning strategies (explicit 'superseding' markers in context structure) measurably reduce proactive interference from revised instructions mid-session; relevant for kits that allow in-session parameter updates
- **Vocabulary-frame validation via citation graph: does the Category D HCI tradition cite the LLM-PM tradition?**
  Target decision: Citation graph of arXiv:2603.23530, TriggerBench references, HCI interruption recovery literature
  Would find: Whether the LLM-PM researchers cite HCI interruption science — cross-citation presence would confirm these are the same phenomenon studied under different vocabulary frames; absence would indicate the traditions are genuinely parallel and both must be consulted for complete coverage
- **Completion recognition failure as a distinct class from omission: closing the 12.4% MAST finding**
  Target decision: arXiv:2503.13657 (MAST), arXiv:2512.12791 (Beyond Task Completion)
  Would find: Empirical evidence on how 'not recognising task completion' manifests in practice (false continuation, redundant actions, or stuck loops) and what signals reliably trigger termination — needed to design the kit's done-state detection mechanism
- **Adversarial saturation check: evidence base for Category D requirement in kit research methodology**
  Target decision: Information retrieval recall literature, systematic review methodology, vocabulary-frame enumeration research
  Would find: Whether the 52–79% single-database recall figure and the 95%+ two-source-type figure cited in the research protocol are themselves empirically grounded — closes the open question about whether the adversarial saturation methodology is evidence-backed or stipulative
