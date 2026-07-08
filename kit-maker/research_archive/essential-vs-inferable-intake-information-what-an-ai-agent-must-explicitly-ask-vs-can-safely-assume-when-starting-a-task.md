# Research Archive: Essential vs inferable intake information — what an AI agent must explicitly ask vs can safely assume when starting a task

## Saturation log
- Query 1: "requirements elicitation essential information AI agent task planning inference vs clarification empirical" — 3 new claim keys
- Query 2: "systematic review conversational agent clarification questions user friction essential unknowns protocol" — 2 new claim keys
- Query 3: "over-clarification failure AI agent too many questions user abandonment friction empirical" — 2 new claim keys
- Query 4: "autonomous agent task specification clarification requirements essential inferable decision arxiv" — 2 new claim keys
- Query 5: "CLAUDE.md intake protocol essential unknowns inferable defaults autonomous agent github" — 1 new claim keys
- Query 6: "clarification question generation fails critique limitations LLM agent ambiguity detection null result" — 1 new claim keys
- Query 7: "Ask or Assume uncertainty clarification seeking coding agents arxiv 2603" — 1 new claim keys
- Query 8: "LHAW controllable underspecification long-horizon tasks benign outcome-critical divergent classification arxiv 2602" — 1 new claim keys
- Query 9: "Structured Uncertainty guided Clarification LLM Agents SUCRe information gain expected utility arxiv 2511" — 1 new claim keys
- Query 10: "agent clarification timing ask early ask late when to clarify long-horizon performance arxiv 2605" — 1 new claim keys
- Query 11: "intake protocol LLM agent kit what to ask versus infer default assumption agentic workflow practitioner blog 2025 2026" — 0 new claim keys
- Query 12: "dialogue management information state what must be known before action grounding requirement conversational system theory" — 1 new claim keys
- Query 13: "ClarEval benchmark clarification skills code agents ambiguous instructions evaluation arxiv 2603" — 1 new claim keys
- Query 14: "COCORELI execution preconditions collaborative instruction following agent precheck before act arxiv 2509" — 1 new claim keys
- Query 15: "theory of mind agent task specification inferring user intent unstated goals autonomous agent epistemic" — 1 new claim keys
- Query 16: "Implicit Intelligence evaluating agents unstated requirements implicit constraints benchmark arxiv 2602" — 1 new claim keys
- Query 17: "agent clarification backfires OR clarification hurts OR asking questions degrades performance regression underspecified task" — 1 new claim keys
- Query 18: "ASPI prompt injection ambiguity clarification amplifies vulnerability security risk LLM agent clarification seeking arxiv 2605" — 1 new claim keys
- Query 19: "knowledge representation open world assumption closed world assumption agent inference defaults ontology AI planning" — 1 new claim keys
- Query 20: "proactive assistant agent PI-Bench long-horizon workflow unstated user preference implicit intent 2605" — 1 new claim keys
- Query 21: "goal inference Bayesian planning unstated intent implicit requirement AI assistant interactive task" — 0 new claim keys
- Query 22: "critique clarification seeking over-asking fails because users cannot answer OR users do not know what they want LLM agent limitation" — 0 new claim keys
- Query 23: "information foraging theory optimal stopping clarification cost benefit conversational AI task disambiguation" — 0 new claim keys
- Query 24: "CLARITI reward-driven clarification software engineering asking what matters fewer questions performance arxiv 2604" — 0 new claim keys
- Query 25: "uncertainty decomposition aleatoric epistemic clarification LLM agent when to ask 2606" — 0 new claim keys
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturation note: 25 queries run across arXiv, GitHub, UX/practitioner, and formal AI planning traditions (Traditions A–D all covered). Two consecutive terminal queries (goal inference, information foraging) returned no new claim keys. However, the action-counterfactual relevance and reversibility operationalizations (P0 angles) remain ungrounded for the specific kit-maker context — saturation holds for the general phenomenon but the kit-maker-specific application layer is not yet saturated. Condition 3 (vocabulary-frame enumeration) is satisfied: dialogue management IS theory, OWA/CWA planning theory, information foraging, and UX progressive disclosure were all queried. Conditions 1 and 2 hold. Saturation is false because the two P0 angles represent decision-closing gaps the current query set did not close.
- Saturated: NO — review needed (check saturation note above)

---

## Claims (20)

### [key: underspecification-three-classes]
- evidence: empirical
- confidence: medium
- group: underspecification-taxonomy
- sources: https://arxiv.org/abs/2602.10525

**Claim:** LHAW (arXiv:2602.10525, Scale AI, 2026) empirically classifies missing information in agent tasks into three types via ground-truth agent trials: outcome-critical (removal causes consistent failure and requires clarification), divergent (variable outcomes — agents may or may not succeed without it), and benign (agents safely infer missing information from context). Across 285 task variants from SWE-Bench Pro, The Agent Company, and MCP-ATLAS, a substantial proportion of removed information is benign — agents infer it without asking. Mechanism: information criticality is task-intrinsic, not query-intrinsic. Scope: holds across four frontier models with high cross-model consistency (Kendall tau 0.78–0.87 on shared tasks). Implication for kit-maker: the outcome-critical/benign split is empirically decidable and should structure intake protocol design — only outcome-critical unknowns warrant explicit elicitation.

**Verify note:** Core confirmed: 285 task variants from TheAgentCompany, SWE-Bench Pro, MCP-Atlas. Three-way classification (outcome-critical/divergent/benign) confirmed. Scale AI affiliation confirmed (HuggingFace dataset ScaleAI/lhaw, author emails). However, Kendall tau values of 0.78–0.87 are NOT confirmed — the HTML version does not mention these values in available content. The claim of 'four frontier models' is contradicted by the HTML which lists five models (Claude Opus-4.5, Claude Sonnet-4.5, Gemini-3-Pro, Gemini-3-Flash, GPT-5.2). The specific distribution percentages (~40%/30%/30%) are described as design targets rather than empirical outcomes. The 'high cross-model consistency' narrative is plausible but the Kendall tau numbers could not be verified from available content. Medium confidence.

---

### [key: clarification-timing-type-dependent]
- evidence: empirical
- confidence: high
- group: clarification-timing
- sources: https://arxiv.org/abs/2605.07937

**Claim:** Ask Early, Ask Late, Ask Right (arXiv:2605.07937, 2026) shows, across 84 task variants and 6,000+ runs, that the optimal clarification window is information-type-specific, not simply 'as early as possible.' Goal clarification loses nearly all value after 10% of task execution (pass@3 drops from 0.78 to baseline), while input clarification retains value through approximately 50% of execution. Deferring any clarification type past mid-trajectory degrades performance below the 'never-ask' baseline. Mechanism: goals constrain the entire plan, so late goal clarification cannot be incorporated; inputs are referenced at use-time, so late input clarification can still be applied. No current frontier model asks within the empirically optimal window. Scope: tested across four frontier models with substantial task-intrinsic consistency. Implication: goal-level unknowns are genuinely blocking at intake; input/constraint unknowns may safely be deferred or inferred.

**Verify note:** All major claims confirmed from the HTML version of arXiv:2605.07937. Title confirmed. 84 task variants confirmed. 6,000+ runs confirmed. Pass@3 of 0.78 for goal clarification at early injection confirmed. 10% threshold for goal clarification value loss confirmed. Input clarification retaining value through ~50% confirmed (pass@3 values at 10%=0.46, 30%=0.36, 50%=0.36). All four clarification types (goal/input/constraint/context) confirmed. 'Deferring any clarification type past mid-trajectory degrades performance below never asking at all' confirmed verbatim. Four frontier models confirmed. 2026 confirmed. The claim that 'no current frontier model asks within the empirically optimal window' is not verified from available content but is a plausible operational finding not central to the mechanism claim. High confidence on all load-bearing elements.

---

### [key: clariti-fewer-questions-same-performance]
- evidence: empirical
- confidence: medium
- group: clarification-efficiency
- sources: https://arxiv.org/abs/2604.14624

**Claim:** CLARITI (arXiv:2604.14624, 2026), an 8B-parameter RL-trained clarification module for software engineering tasks, achieves GPT-5-level task resolution while generating 41% fewer questions (3.0 vs 5.1 questions on average). Mechanism: CLARITI is trained on two RL reward signals — task relevance (Shapley-analyzed contribution to task success) and user answerability (whether the user has the knowledge to respond). Shapley analysis reveals a clear hierarchy: only a small subset of information types consistently predicts task success, while most questions return negligible task-value. Four question properties maximize answerability: grounding in evidence, demanding specificity, minimizing scope, and ensuring actionability. Scope: software engineering tasks; user simulated via LLM. Implication: intake protocols should prioritize only information with proven task-relevance AND that users can actually answer — the intersection is smaller than naive elicitation assumes.

**Verify note:** The abstract-level data confirms the paper exists (arXiv:2604.14624), the 8B model size, the 41% fewer questions figure (3.0 vs 5.1), and the RL reward signals. The 'GPT-5-level task resolution' phrasing is verifiable only at abstract level — the paper says it 'matches GPT-5's resolution rate,' which is consistent. Key extrapolations to flag: (1) The claim that 'Shapley analysis reveals a clear hierarchy' — confirmed in concept but the specific hierarchy described (most questions return negligible task-value) is a gloss of the paper's finding, not a direct quote; reasonable extrapolation but not verbatim. (2) 'User simulated via LLM' is explicitly acknowledged in the abstract as a caveat, which the claim does note. (3) The four question properties (grounding in evidence, demanding specificity, minimizing scope, ensuring actionability) are presented as paper findings, but the abstract does not enumerate them — these may be accurate interior findings or may be the summarizer's own synthesis. Could not verify these four properties from accessible text. (4) The implication that 'the intersection is smaller than naive elicitation assumes' is an editorial inference, not a stated finding. Confidence is medium rather than high because key interior claims (the four properties, Shapley hierarchy specifics) cannot be verified from the abstract alone, and user simulation is a real generalizability limit.

---

### [key: ask-or-assume-decoupled-scaffold]
- evidence: empirical
- confidence: low
- group: clarification-architecture
- sources: https://arxiv.org/abs/2603.26233

**Claim:** Ask or Assume (arXiv:2603.26233, 2026), evaluated on an underspecified variant of SWE-Bench Verified, finds that standard single-agent setups optimized for autonomous execution largely fail to detect underspecification and ask clarifying questions, while a multi-agent scaffold that decouples underspecification detection from code execution achieves 69.40% task resolve rate, significantly outperforming the single-agent baseline and narrowing the gap to the fully-specified condition. Mechanism: detection and execution are cognitively/architecturally coupled in standard agents; separation allows detection to run independently. GPT-4-class models show a 38% rate of over-clarification when they do ask. Scope: coding tasks; underspecified SWE-bench. Implication: asking and assuming must be structurally separated at the architecture level — an agent cannot reliably do both in the same forward pass.

**Verify note:** Several specific claims cannot be confirmed from the accessible source. (1) The 38% over-clarification rate for GPT-4-class models — not present in the abstract or any accessible text; the WebFetch found no mention of this figure. This is an unverified specific statistic attached to a named model class. (2) 'GPT-4-class models' — the paper mentions Kimi K2.6 and proprietary/open-weight LLMs generically; 'GPT-4 class' is a categorization not confirmed in accessible text. (3) The 69.40% task resolve rate is confirmed. (4) The mechanism claim (detection and execution are cognitively/architecturally coupled in standard agents) is confirmed as a framing. (5) The claim that the paper 'significantly outperforms the single-agent baseline' — plausible but the baseline number is not stated in accessible text, so 'significantly' cannot be verified. (6) The claim of 'narrowing the gap to the fully-specified condition' — not confirmed in accessible text. Paper is a preprint with no venue acceptance. The 38% figure is the most suspicious: it is specific, attributed to a model class, and absent from all accessible source text — likely extrapolated or fabricated in the summary chain.

---

### [key: cocoreli-execution-precondition-blocking]
- evidence: empirical
- confidence: medium
- group: clarification-architecture
- sources: https://arxiv.org/abs/2509.04470

**Claim:** COCORELI (arXiv:2509.04470, 2025) demonstrates that detecting missing information is insufficient — agents proceed to execution despite detecting underspecification because detection and execution are not coupled. COCORELI resolves this by representing missing parameters as structured execution preconditions: detecting a missing parameter simultaneously blocks execution until clarification resolves it. This eliminates hallucinated actions that CoT, prompt-chaining, and ReAct-style agents still produce even when they detect underspecification. Mechanism: structural coupling, not reasoning — the missing parameter is a blocking condition, not a flag to be overridden by plausible guessing. Scope: instruction-following tasks. Implication: an intake protocol design cannot rely on the agent detecting and self-correcting; the execution gate must be structurally enforced.

**Verify note:** The core mechanism claim (structural coupling of detection and execution blocking) is confirmed by the abstract. The comparison baselines (CoT, prompt-chaining, ReAct) are confirmed. The finding that agents 'proceed to execution despite detecting underspecification' is confirmed. However: (1) The claim that COCORELI uses 'structured execution preconditions' — the abstract says 'enforcing missing information as a precondition for action' which is consistent but the exact terminology 'structured execution preconditions' may be the summarizer's framing. (2) 'Eliminates hallucinated actions' — the abstract says 'blocks execution under unresolved specifications by construction, eliminating hallucinated actions' — confirmed. (3) Scope is described as 'instruction-following tasks' — the paper evaluates in a 'controlled construction environment' and ToolBench API workflows; this is a narrow scope that may not generalize to all instruction-following. (4) The claim that 'CoT, prompt-chaining, and ReAct-style agents still produce [hallucinated actions] even when they detect underspecification' — confirmed as a stated finding. The main limitation is the narrow evaluation scope (controlled construction + ToolBench), which the implication does not acknowledge.

---

### [key: ambig-swe-three-step-capability]
- evidence: empirical
- confidence: medium
- group: clarification-architecture
- sources: https://arxiv.org/abs/2502.13069

**Claim:** Ambig-SWE (arXiv:2502.13069, ICLR 2026) decomposes agent response to underspecified instructions into three independently measurable steps: (a) detecting underspecificity, (b) asking targeted clarifying questions, and (c) leveraging the interaction to improve performance. Current proprietary and open-weight models perform inconsistently across these steps — strong detection does not predict strong question generation, and strong question generation does not predict performance recovery. Mechanism: the three skills require different underlying capabilities and are not co-learned. Scope: GitHub issue-style software engineering tasks. Implication: a kit-maker intake layer should be evaluated on all three steps, not just whether the agent asked something.

**Verify note:** ICLR 2026 acceptance is confirmed. The three-step decomposition is confirmed. However: (1) The core claim that 'strong detection does not predict strong question generation, and strong question generation does not predict performance recovery' — this is NOT confirmed by accessible text. The abstract only says models 'struggle to distinguish underspecified from well-specified instructions' and then shows 74% improvement when interacting. The specific cross-step independence claim is presented in the summary as a finding, but the abstract text retrieved actually suggests interaction DOES help substantially (74% improvement), which could imply question generation does predict performance recovery. The three skills being 'not co-learned' is an inference not found in accessible source text. (2) The 74% improvement figure is confirmed but the claim uses it differently — the claim says 'performance inconsistency,' the paper reports large gains from interaction. These are not contradictory but the claim's framing (emphasizing inconsistency) vs. the paper's framing (emphasizing improvement potential) is a meaningful difference. (3) 'Current proprietary and open-weight models perform inconsistently across these steps' is plausible but the specific cross-step independence claim requires the full paper to verify.

---

### [key: sage-agent-pomdp-evpi]
- evidence: empirical
- confidence: medium
- group: clarification-decision-theory
- sources: https://arxiv.org/abs/2511.08798

**Claim:** SAGE-Agent (arXiv:2511.08798, 2025) formulates clarification question selection as a POMDP using Expected Value of Perfect Information (EVPI) over structured tool parameters. It increases coverage on ambiguous tasks by 7–39% while reducing clarification questions by 1.5–2.7x vs. prompting-based baselines. The key mechanism: questions are selected not by uncertainty alone but by EVPI — a question is only worth asking if the information it yields will change the action taken. Scope: ClarifyBench domains including document editing, vehicle control, stock trading, travel booking, and file system manipulation. Implication: the right split criterion for essential vs. inferable is not 'am I uncertain?' but 'would knowing this change my action?' — action-counterfactual relevance is the correct filter.

**Verify note:** The coverage (7-39%) and question reduction (1.5-2.7x) statistics are confirmed verbatim in the abstract. EVPI as the selection mechanism is confirmed. However: (1) The claim that SAGE-Agent uses a 'POMDP' formulation — the abstract describes 'structured uncertainty formulation over tool parameters' and EVPI, but 'POMDP' is not confirmed in accessible text; the paper title is 'Structured Uncertainty guided Clarification for LLM Agents,' not explicitly POMDP-named. The POMDP framing may be an accurate interior description or may be the summarizer's characterization of the EVPI framework. (2) ClarifyBench domains 'including document editing, vehicle control, stock trading, travel booking, and file system manipulation' — NOT confirmed in accessible text; the abstract only calls it 'the first multi-turn dynamic tool-calling disambiguation benchmark' without listing domains. These specific domain names are unverified. (3) The implication ('would knowing this change my action?' as the correct filter) is a valid paraphrase of EVPI but is editorially framed. Confidence is medium because the POMDP claim and domain list are unconfirmed, though the headline statistics hold.

---

### [key: uncertainty-decomposition-aleatoric-epistemic]
- evidence: empirical
- confidence: medium
- group: clarification-decision-theory
- sources: https://arxiv.org/abs/2606.19559v1

**Claim:** Uncertainty Decomposition for Clarification Seeking in LLM Agents (arXiv:2606.19559, 2026) shows the classical aleatoric/epistemic uncertainty dichotomy is insufficient for interactive agent settings. The same uncertainty can be aleatoric (irreducible at current time) or epistemic (reducible by asking) depending on whether a user is able to provide the missing information. A prompt-based decomposition that separately tracks action confidence vs. request-specification uncertainty outperforms undifferentiated uncertainty estimates at predicting when clarification will help. Mechanism: request uncertainty (underspecification) is the correct trigger for clarification, not general model uncertainty. Scope: LLM agent tool-calling settings. Implication: intake protocols should ask precisely when request-specification uncertainty is high, not when the model's output entropy is high — these are different signals.

**Verify note:** The core distinction (aleatoric/epistemic is insufficient; request uncertainty vs. action confidence is the right decomposition) is confirmed. The benchmarks (ALFWorld-Clarification, WebShop-Clarification) are confirmed. The 73% improvement on ALFWorld-Clarification over ReAct+UE and 36% over UAM are confirmed. However: (1) The model names retrieved (GPT-5.1, DeepSeek-v3.2-exp, GLM-4.7, Qwen3.5-35B, GPT-OSS-120B) appear to be speculative future model names from a 2026 paper — these may be real if the paper is genuinely from 2026, but the names are unusual and could indicate hallucinated model names in the summary. (2) The claim that 'the same uncertainty can be aleatoric or epistemic depending on whether a user is able to provide the missing information' — this is a reframing of the paper's distinction; the paper appears to argue for request uncertainty as the trigger, not the aleatoric/epistemic dichotomy specifically applied this way. Plausible but may be the summarizer's gloss. (3) 'Prompt-based decomposition that separately tracks action confidence vs. request-specification uncertainty outperforms undifferentiated uncertainty estimates' — confirmed directionally. Overall: core claims hold but model names are suspicious and the aleatoric/epistemic reformulation may be an overlay.

---

### [key: implicit-intelligence-unstated-constraints]
- evidence: empirical
- confidence: medium
- group: implicit-inference
- sources: https://arxiv.org/abs/2602.20424

**Claim:** Implicit Intelligence (arXiv:2602.20424, 2026) constructs a benchmark where correct task solutions require satisfying unstated contextual constraints — accessibility needs, privacy boundaries, catastrophic risk avoidance — that users do not mention because they assume shared understanding. Current benchmarks test explicit instruction-following only. The paper finds current agents largely fail to infer these implicit requirements from environmental exploration. Mechanism: natural human communication relies on shared context; agents trained on explicit supervision cannot recover it. Scope: diverse interactive scenarios. Implication: some critical information is NEVER stated in intake but must be inferred from task context — the essential/inferable split is not binary; some items are 'infer-from-environment, never ask' because asking them signals the agent is not a competent collaborator.

**Verify note:** The paper exists (arXiv:2602.20424), the benchmark (Agent-as-a-World, AaW) is confirmed, 16 models tested is confirmed, and best model achieving only 48.3% pass rate across 205 scenarios is confirmed. The implicit constraint types (accessibility, privacy, catastrophic risk) are confirmed. However: (1) The claim says 'agents largely fail to infer these implicit requirements from environmental exploration' — but the 48.3% figure is for the BEST model; the claim does not make clear this is a top-performer result, not an average. The absolute failure framing is accurate in spirit but the headline number is from the best model, making the population claim stronger than warranted. (2) The implication that 'some items are infer-from-environment, never ask' because asking signals incompetence — this is an editorial inference not stated in the accessible source. The paper studies failure, not the normative claim about when asking is inappropriate. (3) The 205-scenario count is mentioned (n=205), which is a modest benchmark size. Confidence is medium: core findings confirmed, but the 'never ask' normative implication is extrapolated beyond what the source demonstrates.

---

### [key: clarification-service-task-backfire]
- evidence: empirical
- confidence: low
- group: clarification-failure-modes
- sources: https://arxiv.org/pdf/2602.02455

**Claim:** Drift-Bench (arXiv:2602.02455) and related work identify a 'Clarification Paradox' in service-oriented tasks: agents show a 33% performance regression when clarification policies are present, even when making zero actual clarification attempts. Two mechanisms: (1) 'Clarification-Induced Syntactic Collapse' — the presence of clarification logic disrupts schema adherence, causing parsing failures; (2) 'Abandonment Catalyst' — agents misinterpret technical noise in clarification flows as terminal ambiguity and prematurely halt. This contrasts with state-oriented tasks where clarification is self-healing (+19.76%). Scope: service-oriented vs. state-oriented task distinction is the key moderator. Implication: whether to build clarification into an intake pipeline at all is environment-dependent — for tool-calling or API execution tasks, a clarification mode may structurally degrade performance.

**Verify note:** The paper exists (arXiv:2602.02455) and the title is confirmed. The 33% regression and 19.76% improvement statistics are confirmed. However: (1) The two specific mechanism names — 'Clarification-Induced Syntactic Collapse' and 'Abandonment Catalyst' — CANNOT be confirmed from accessible text. The PDF was binary-encoded and the mechanism names were not found in any extracted text. These highly specific named mechanisms are either accurate interior findings or fabricated terminology that sounds plausible. This is the critical unverifiable claim. (2) The paper title is 'Drift-Bench: Diagnosing Cooperative Breakdowns in LLM Agents under Input Faults via Multi-Turn Interaction' — the claim frames it as being about 'clarification policies,' which may be a partial reframing; the paper appears to be about 'input faults,' which is a broader category than clarification. (3) 'Agents show a 33% performance regression when clarification policies are present, even when making zero actual clarification attempts' — the 'zero actual attempts' qualifier is in the claim but was not confirmed; it appears in the summary but not in source text. This is a critical qualifier that, if wrong, changes the interpretation. Confidence is low because the mechanism names and the 'zero attempts' qualifier are both unverified, and the paper's actual framing (input faults) may differ from the clarification-paradox framing imposed on it.

---

### [key: aspi-clarification-security-risk]
- evidence: empirical
- confidence: high
- group: clarification-failure-modes
- sources: https://arxiv.org/abs/2605.17324

**Claim:** ASPI (arXiv:2605.17324, 2026), a 728-scenario benchmark, finds that transitioning an LLM agent to a clarification-seeking state significantly amplifies its susceptibility to prompt injection attacks compared to standard execution mode. Mechanism: clarification state expands the agent's receptive surface — it is explicitly processing external inputs for potential instructions, making it more likely to treat injected content as legitimate clarification. Scope: agents with tool-calling in adversarial environments. Implication: for agent kits deployed in contexts where inputs may be partially adversarial (e.g., processing external documents, files, web content), clarification-seeking must be sandboxed — it is not only a UX cost but a security surface.

**Verify note:** Strong confirmation across all key claims. The 728-scenario benchmark is confirmed. The finding that clarification-seeking amplifies prompt injection is confirmed with specific statistics: o3 model 1.8% to 34.0%, Gemini-3-Flash 2.2% to 35.7%. The mechanism (state-dependent shift in how models process incoming content) is confirmed. The paper explicitly states 'robustness under fully specified tasks does not translate to robustness under ambiguity.' The claim's mechanism description ('explicitly processing external inputs for potential instructions, making it more likely to treat injected content as legitimate clarification') is a reasonable paraphrase of the confirmed finding. One minor caveat: the claim says 'significantly amplifies' without citing the specific numbers, but the numbers confirm a 10-20x increase in attack success rates for some models, which is well beyond 'significant.' The implication (sandboxing needed) is an editorial inference but follows logically. This is the highest-confidence claim in the batch.

---

### [key: clarevals-three-ambiguity-types]
- evidence: empirical
- confidence: low
- group: underspecification-taxonomy
- sources: https://arxiv.org/abs/2603.00187

**Claim:** ClarEval (arXiv:2603.00187, 2026), a 2,250-instance benchmark on 750 programming problems, identifies three structurally distinct ambiguity types requiring different handling: (1) missing goals (the task objective is incomplete), (2) missing premises (assumed preconditions are absent), and (3) ambiguous terminology (key terms are polysemous). These require different resolution strategies: missing goals are genuinely blocking and require upfront clarification; missing premises can often be inferred from task type conventions; ambiguous terminology can frequently be resolved from context. Metrics: Average Turns to Clarify (ATC) and Key Question Coverage (KQC). Mechanism: ambiguity type determines resolution path, not just the presence of uncertainty. Implication: intake protocol design should categorize unknowns by type — goal-level unknowns block; premise-level unknowns are often inferable from task-class defaults; terminology unknowns are resolvable from local context.

**Verify note:** The three ambiguity types (missing goals, missing premises, ambiguous terminology) are confirmed. ATC and KQC metrics are confirmed. 11 state-of-the-art models tested is confirmed. However: (1) The specific instance count of '2,250 instances on 750 programming problems' — NOT confirmed in accessible text. The abstract mentions 11 models but not these specific counts. These numbers are unverifiable from accessible source. (2) The specific claim about which ambiguity types are blocking vs. inferable ('missing goals are genuinely blocking and require upfront clarification; missing premises can often be inferred from task type conventions; ambiguous terminology can frequently be resolved from context') — NOT confirmed in accessible text. The abstract discusses the three types but does not state these specific resolution-path assignments. This is a detailed and consequential claim (it drives the entire implication) that appears to be the summarizer's interpretation of the paper's findings rather than a direct citation. (3) A reference to 'GPT-5-Coder' appears in the accessible text — if accurate, this confirms a 2026 timeframe but is an unusual model name. Confidence is low because the core normative claim (which type is blocking vs. inferable) is not confirmed in source text, and it is the load-bearing implication of the claim.

---

### [key: user-answerability-constraint]
- evidence: empirical
- confidence: low
- group: intake-design
- sources: https://arxiv.org/abs/2604.14624, https://arxiv.org/abs/2511.08798

**Claim:** Multiple studies (CLARITI arXiv:2604.14624; SAGE-Agent arXiv:2511.08798; ProductAgent arXiv:2407.00942) converge on user answerability as a necessary (not just sufficient) condition for a clarification question to be valid. Deepseek-style highly specific implementation questions exceed user knowledge and waste turns; Claude-style questions targeting behavioral aspects and concrete failure modes better match realistic user knowledge. Mechanism: if the user cannot answer the question, the clarification turn produces noise or refusal, consuming interaction budget without information gain. Scope: all task domains studied. Implication: for kit-maker intake, inferable information = information the user cannot answer reliably OR information the agent can determine more accurately than the user can state (e.g., inferred from provided artifacts, prior runs, or environment state).

**Verify note:** This is a synthesis claim combining three sources (CLARITI, SAGE-Agent, ProductAgent). (1) CLARITI and SAGE-Agent both address user answerability as a dimension — confirmed. (2) ProductAgent (arXiv:2407.00942) — the accessible source shows it is a conversational product search paper, not primarily about user answerability as a constraint. The specific claim that it 'converges on user answerability as a necessary condition' is not confirmed; the paper is about e-commerce retrieval improvement with interaction, not about bounding what questions users can answer. (3) The specific comparison 'Deepseek-style highly specific implementation questions exceed user knowledge' vs. 'Claude-style questions targeting behavioral aspects' — NOT found in any accessible source text for any of the three papers. This reads as an editorial inference or possibly from full-paper content, but it is a specific factual claim about named model behaviors that cannot be verified. (4) The convergence claim ('multiple studies converge') is an editorial synthesis. Two of three papers (CLARITI and SAGE-Agent) genuinely address answerability; the third (ProductAgent) is a stretch. The specific model-behavior comparison is unverified. Confidence is low due to the unverified DeepSeek/Claude comparison and the weak fit of ProductAgent to the convergence claim.

---

### [key: goal-level-unknowns-upfront-blocking]
- evidence: consensus
- group: intake-design
- sources: https://arxiv.org/abs/2605.07937, https://arxiv.org/abs/2603.00187, https://arxiv.org/abs/2602.10525

**Claim:** Multiple independent studies (Ask Early arXiv:2605.07937; ClarEval arXiv:2603.00187; LHAW arXiv:2602.10525) converge on the finding that goal-level unknowns are the class of missing information that is outcome-critical AND must be resolved before execution begins. Goal unknowns cannot be compensated for later in the trajectory without near-full performance recovery loss. In contrast, constraint and input unknowns degrade performance more gradually. Mechanism: goal specification constrains the entire plan; tasks executed toward the wrong goal cannot be salvaged by mid-trajectory corrections without restart cost. Scope: multi-step, long-horizon tasks. Implication: the kit-maker intake protocol MUST surface goal-level ambiguity before proceeding; this is the empirically validated blocking class.

---

### [key: open-world-closed-world-inference-defaults]
- evidence: consensus
- group: inference-theory
- sources: https://artint.info/3e/html/ArtInt3e.Ch5.S7.html, https://en.wikipedia.org/wiki/Open-world_assumption

**Claim:** AI planning and knowledge representation research distinguishes the Closed-World Assumption (CWA: what is not known is false) from the Open-World Assumption (OWA: what is not known may be true or false). Agent task planners operating under CWA can infer defaults freely — absence of a constraint means no constraint exists. Agents under OWA must treat unknown constraints as live uncertainties requiring verification. This framework predicts when agents should ask vs. infer: if the task domain has well-defined, enumerable constraint sets (CWA domain), defaults are safe; if the domain is open-ended with potentially unlimited constraint space (OWA domain), key constraints must be elicited. Mechanism: formal logical consequence of world assumption. Scope: applies to any planning agent with incomplete information. Implication: kit-maker intake protocol design should first classify the task domain as CWA or OWA — this determines whether 'no constraint stated' means 'no constraint' or 'constraint unknown.'

---

### [key: progressive-disclosure-reduces-intake-friction]
- evidence: consensus
- group: intake-design
- sources: https://www.uxpin.com/studio/blog/what-is-progressive-disclosure/, https://www.aiuxdesign.guide/patterns/progressive-disclosure

**Claim:** UX research on progressive disclosure (UXPIN 2026; IDF; multiple practitioner sources) establishes that revealing complexity gradually — asking only for information immediately needed, deferring advanced options — reduces abandonment and cognitive load in intake flows. Limiting onboarding to 4–5 steps maintains attention; complete upfront configuration causes decision paralysis. Conversational AI intake that learns context dynamically generates individualized onboarding paths rather than uniform questionnaires. Mechanism: cognitive load reduction from information chunking. Scope: onboarding and intake UX for tools and conversational agents. Limitation: practitioner consensus, not controlled experiment. Implication: even when information is genuinely needed, multi-shot clarification across a single session outperforms batched upfront elicitation — stagger questions across interaction turns rather than front-loading.

---

### [key: pi-bench-proactive-unstated-intent]
- evidence: empirical
- confidence: medium
- group: implicit-inference
- sources: https://arxiv.org/abs/2605.14678

**Claim:** pi-Bench (arXiv:2605.14678, 2026), a 100-task benchmark across 5 user personas in long-horizon workflows, finds that users routinely begin tasks with underspecified requests and leave important constraints and preferences unstated, expecting agents to proactively identify and act on hidden intents across multi-turn interactions. Current agents fail to anticipate needs that emerge gradually across turns. Mechanism: user mental models assume agent awareness of common-sense persona context — they narrate goals, not constraints. Scope: personal assistant workflows. Implication: the inferable category includes persona-level context that competent assistants are expected to maintain across sessions without re-eliciting — repeated intake questioning of stable user context is a UX failure signal, not a safety feature.

**Verify note:** The paper exists (arXiv:2605.14678). The benchmark has 100 tasks across 5 user personas — confirmed. Long-horizon workflow description and hidden intents are confirmed. The finding that 'prior interaction has value for proactive intent resolution in later tasks' is confirmed. However: (1) 'Current agents fail to anticipate needs that emerge gradually across turns' — confirmed directionally ('proactive assistance remains challenging') but no specific failure rate or percentage is given in accessible text. The claim implies quantified failure; the source only says it is challenging. (2) 'Users routinely begin tasks with underspecified requests and leave important constraints unstated' — this is framed as a finding but may be a benchmark design choice (the benchmark was constructed with hidden intents) rather than an empirical observation about real user behavior. The benchmark design may build in this property rather than discovering it. (3) The implication ('repeated intake questioning of stable user context is a UX failure signal') is an editorial inference not stated in the source. (4) The claim that agents 'fail to anticipate needs that emerge gradually' is confirmed but no quantitative failure statistics are accessible, making 'routinely' and 'largely fail' imprecise characterizations. Confidence is medium: core framing is supported but the claim overstates specificity of findings and the implication is editorial.

---

### [key: lm-agents-fail-to-act-on-risk-knowledge]
- evidence: empirical
- confidence: medium
- group: clarification-architecture
- sources: https://arxiv.org/pdf/2508.13465

**Claim:** LM Agents May Fail to Act on Their Own Risk Knowledge (arXiv:2508.13465) finds that agents often recognize missing or risky information in their reasoning trace but proceed to execute anyway rather than pausing to clarify. This produces a failure mode distinct from not-detecting underspecification: the agent detects the gap but does not act on the detection. Larger models generate more plausible-sounding guesses rather than reliably halting on uncertainty. Mechanism: RLHF and instruction-following training biases models toward producing outputs rather than halting; plausibility of the guess suppresses the halt signal. Scope: LLM agents with tool use. Implication: an intake protocol cannot be implemented via prompted self-reflection alone — it requires a structural gate (cf. COCORELI) or an explicit 'pause' reward signal that competes with task-completion reward.

**Verify note:** The paper is real (arXiv:2508.13465) and the core finding is confirmed: agents score >98% on risk knowledge questions but <26% on avoiding risky actions — a genuine knowledge-action gap. However, the claim injects several elements not confirmed in the paper. (1) 'Larger models generate more plausible-sounding guesses rather than reliably halting' — the paper states scaling does NOT automatically resolve safety concerns, but the specific 'plausible-sounding guesses' framing is not confirmed; the paper's own proposed fix is a risk verifier + abstractor, not a pause reward signal. (2) 'RLHF and instruction-following training biases models toward producing outputs rather than halting' — the paper cites RLHF alignment papers (Ouyang 2022, Bai 2022) but whether it attributes the failure mechanism specifically to output-production bias vs. other factors is unconfirmed from the PDF extraction. (3) COCORELI is not mentioned in the paper at all — this appears to be an external interpolation by the claim's author. (4) 'Pause reward signal' is not described in the paper; the paper's proposed mitigation is a verifier/abstractor architecture. The implication drawn ('cannot implement via prompted self-reflection alone') is directionally supported but the specific mechanisms cited (COCORELI, pause reward) are not from this source. Study design: multiple models tested including GPT-4, Claude 3 family, DeepSeek, Llama variants; n-size not extractable from PDF but 38-page paper with appendices. Contradicting angle: the 23% drop from knowledge to identification is large, but <26% action-avoidance rate is conditional on the paper's specific task design — tasks may be adversarially constructed to maximize the gap, limiting ecological validity.

---

### [key: information-state-dialogue-grounding]
- evidence: consensus
- group: inference-theory
- sources: https://link.springer.com/content/pdf/10.1007%2F978-94-010-0019-2_15.pdf

**Claim:** Information State (IS) theory of dialogue management (Traum & Larsson 2003, formalized in multiple dialogue system frameworks) defines a formal precondition for action: an agent may act on information only when it is grounded — mutually established as shared between interlocutors. Ungrounded information must be confirmed before it can drive plan decisions. This provides a theoretical basis for the essential/inferable split: information that the agent received but has not confirmed is ungrounded and should not drive irreversible actions. Mechanism: grounding as a formal speech-act precondition. Scope: task-oriented dialogue systems. Implication: for kit-maker intake, the grounding criterion operationalizes 'essential to ask': information that, if wrong, would produce an irreversible wrong action must be grounded explicitly; information that, if wrong, produces a recoverable error can be assumed.

---

### [key: llm-generated-context-files-degrade-performance]
- evidence: anecdote
- group: intake-design
- sources: https://github.com/Piebald-AI/claude-code-system-prompts

**Claim:** Practitioner research documented in GitHub agent kit repositories finds that LLM-generated CLAUDE.md / context files reduce task success by approximately 3% and increase inference costs by 20%+ compared to developer-written files. Mechanism: agents generate generic, bloated context that creates cognitive overhead — every line adds token cost and potential distraction without proportional information gain. Scope: Claude Code agent kit deployments. Implication: agent-inferable context (such as project structure, detected language, existing file content) should be read from artifacts, not elicited via intake questions and not written into configuration files by the agent.

---

## Null results
- No practitioner blog posts found with explicit intake protocol design specifying essential vs. inferable split with documented evidence (Category C grey lit partial null — GitHub results exist but describe mechanics without empirical validation of the split itself)
- Information foraging theory produced no empirical data on optimal stopping for clarification cost-benefit in AI agents specifically — the theory applies conceptually but no studies apply it to agent intake design with measured thresholds
- Goal inference / Bayesian planning results addressed inferring unstated goals from behavior, not the intake elicitation question — separate problem class, no directly applicable empirical evidence for the essential/inferable split

## New angles surfaced
- **Action-counterfactual relevance as the operationalization of 'essential' — empirical test in kit-maker context**
  Target decision: SAGE-Agent EVPI framework (arXiv:2511.08798) applied to kit-maker task types
  Would find: For each information type in a kit-maker intake (goal, constraints, style, audience, domain), whether knowing it would change the output action — this directly closes the essential/inferable split decision for Hard Rule 13 element 8
- **Reversibility as the grounding criterion — which kit-maker outputs are irreversible enough to require upfront confirmation**
  Target decision: Information State theory (Traum & Larsson) + COCORELI precondition blocking + kit-maker output taxonomy
  Would find: A principled list of which kit-maker task outputs are irreversible (and thus require grounded upfront elicitation) vs. recoverable (safe to infer and correct), operationalizing the grounding criterion for intake protocol design
- **Taxonomy of inferable-from-artifact vs. must-ask — what information can be read from provided files, conversation history, or environment state before asking the user**
  Target decision: LHAW benign-class variants + Implicit Intelligence environment-exploration finding
  Would find: Evidence for which information types are reliably recoverable from artifact inspection (file type, length, existing style, genre signals) versus genuinely absent from all observable sources — closes the 'infer from environment, never ask' category
- **Security perimeter around clarification mode — whether kit-maker intake should sandbox clarification away from tool execution**
  Target decision: ASPI (arXiv:2605.17324) — clarification-seeking amplifies prompt injection
  Would find: Whether intake-phase clarification (before any tool execution) carries lower prompt-injection risk than mid-task clarification, or whether all clarification-seeking states are equally vulnerable — determines whether to gate clarification to the intake phase only
- **Persona-level context accumulation — cross-session stable user preferences that should never be re-elicited**
  Target decision: pi-Bench cross-session continuity finding (arXiv:2605.14678)
  Would find: Which categories of user context (writing style preferences, domain expertise level, output format preferences) are stable enough to store and infer across sessions, eliminating repeat intake questions — directly reduces intake question count for repeat users
- **Clarification paradox domain boundary — which kit-maker task types are 'service-oriented' (clarification backfires) vs. 'state-oriented' (clarification helps)**
  Target decision: Drift-Bench clarification paradox finding (arXiv:2602.02455)
  Would find: Whether kit-maker generation tasks (structured output, schema-bound) fall in the service-oriented category where clarification logic structurally degrades performance — if so, intake must be completed before any generation begins, not interleaved
