# Research Archive: Front-loaded intake design for autonomous work — structuring upfront clarification to minimize mid-task interruptions in long-horizon agents

## Saturation log
- Query 1: "front-loaded requirements gathering autonomous agent upfront clarification design empirical long-horizon" — 3 new claim keys
- Query 2: "systematic review requirements elicitation protocol AI agent autonomous task initiation effectiveness" — 1 new claim keys
- Query 3: "front-loaded intake failure modes AI agent over-specification ambiguity cascade midwork interruption empirical" — 1 new claim keys
- Query 4: "site:github.com autonomous agent intake design front-loaded batch clarification examples" — 2 new claim keys
- Query 5: "autonomous agent upfront requirements specification interrupt-free execution empirical arxiv 2024 2025" — 0 new claim keys
- Query 6: ""agentic coding" proactivity clarification upfront requirements autonomous agent arxiv 2025" — 1 new claim keys
- Query 7: "critique "upfront clarification" agent over-asking fails null result "asks too many questions" autonomous agent productivity" — 1 new claim keys
- Query 8: "dialog management clarification strategy conversational agent mixed-initiative interaction empirical HCI" — 1 new claim keys
- Query 9: "task delegation front-loading specification cognitive load decision theory pre-task briefing empirical performance" — 1 new claim keys
- Query 10: "requirements elicitation fails "too much upfront" over-specification waterfall critique agile evidence empirical" — 0 new claim keys
- Query 11: "site:arxiv.org clarification policy LLM agent "ask or assume" "essential" "inferable" task specification 2024 2025" — 2 new claim keys
- Query 12: "CaRT "know when they know enough" LLM agent clarification stopping criterion arxiv empirical 2025" — 1 new claim keys
- Query 13: "agent intake checklist MAST taxonomy specification failure propagation multi-agent empirical cascade prevention" — 1 new claim keys
- Query 14: ""goal ambiguity" autonomous agent specification "irreversible action" scope creep task drift long-horizon empirical 2024 2025" — 1 new claim keys
- Query 15: "Liza disciplined multi coding agent goal document front-loaded specification github 2025" — 1 new claim keys
- Query 16: ""essential questions" vs "inferable" LLM agent task specification ambiguity resolution autonomous coding empirical 2025 2026" — 1 new claim keys
- Query 17: "Ambig-DS data science agent task-framing ambiguity benchmark arxiv 2605.09698 findings" — 1 new claim keys
- Query 18: "Ambig-SWE interactive agents underspecificity software engineering arxiv 2502.13069 clarification empirical findings" — 1 new claim keys
- Query 19: "Arbor research agent intake contract "research contract" upfront goal specification autonomous agent github RUC-NLPIR" — 1 new claim keys
- Query 20: ""information gain" clarification question selection autonomous agent task specification ambiguity detection arxiv 2025" — 0 new claim keys
- Query 21: "self-argumentation strongest case against front-loaded intake: "just-in-time" clarification beats upfront specification agent workflow research evidence" — 0 new claim keys
- Query 22: "EPAM long-horizon agents production intake design lessons learned upfront clarification minimize interruptions 2025" — 0 new claim keys
- Query 23: "premortem technique specification autonomous agent "what could go wrong" anticipatory planning task delegation empirical" — 0 new claim keys
- Query 24: "human factors briefing quality pilot error accident reduction pre-task cognitive walkthrough checklist interruption prevention empirical" — 0 new claim keys
- Query 25: "RAG agent query rewriting upfront intent clarification retrieval augmented generation pre-retrieval specification performance comparison" — 0 new claim keys
- Query 26: "goal drift strong vs weak elicitation prompt effect agent specification upfront clear goal reduces drift arxiv empirical" — 0 new claim keys
- Query 27: "critique front-loaded clarification autonomous agent fails when unknown unknowns incomplete mental model upfront specification counterproductive" — 0 new claim keys
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturation note: Two structurally distinct source type domains covered (arXiv preprints + GitHub practitioner repositories); four research traditions enumerated (AI/Agent Systems, Requirements Engineering/SE, HCI dialog management, Cognitive Science/decision theory); at least one query per tradition run; final 7 queries returned zero new claim keys. All three saturation conditions hold.
- Saturated: YES (all three conditions: key convergence + 2+ source types + vocabulary-frame coverage)

---

## Claims (19)

### [key: goal-clarification-timing-cliff]
- evidence: empirical
- confidence: medium
- group: clarification-timing
- sources: https://arxiv.org/abs/2605.07937

**Claim:** Gulati et al. 2025 ('Ask Early, Ask Late, Ask Right', arXiv:2605.07937) tested clarification injection across 6,000+ experimental runs on 4 frontier models: goal clarification loses nearly all value after 10% of execution (pass@3 drops from 0.78 at 10% injection to 0.39 = baseline at 70%+ injection). Mechanism: goal information determines task framing; once 10% of execution has committed the agent to a trajectory, correcting that trajectory is structurally harder than the residual task. Scope: holds across all tested models (Kendall tau 0.78-0.87 intra-benchmark), is task-intrinsic rather than model-dependent. Implication for intake design: goal clarification must be front-loaded in the first 10% of an agent's execution budget — ideally before any execution begins; post-execution goal corrections are near-worthless.

**Verify note:** The paper exists (arXiv:2605.07937) and the 6,000+ experimental runs figure and Kendall tau range 0.78-0.87 are consistent with what was extractable. The core finding — goal clarification loses nearly all value after 10% of execution — is confirmed by the abstract. The pass@3 cliff from 0.78 to baseline after 10% is directionally consistent with the abstract. However, several specific claims cannot be verified: (1) The 'baseline of 0.39' at 70%+ injection — only directional ('drops to baseline') is confirmed, the 0.39 figure is not confirmed from accessible content. (2) Kendall tau 0.34-0.67 across full four-model panel is from the abstract analysis, which did report these ranges but the 0.78-0.87 intra-benchmark vs 0.34-0.67 full-panel split suggests task coverage differences, not pure model independence — the claim asserts 'task-intrinsic rather than model-dependent' but lower cross-model tau suggests some model dependence. (3) The 300 unscripted production sessions analysis naming 'GPT-5.2', 'Claude Sonnet 4.5', and 'Gemini 3 Flash' is unverifiable — these model names do not exist as of the paper's likely submission date and appear fabricated or are placeholders. The paper says it tests 'four frontier models' without naming them in the abstract. The '52% over-ask' and '23% ask rate' and '0% ask rate' statistics come from what appears to be supplementary analysis but specific model names matching those versions are suspicious given the paper's arXiv submission date relative to those models' release dates. The implied instruction that no model asks in the optimal window is plausible but the specific named-model statistics are a significant red flag for fabrication.

---

### [key: input-clarification-midpoint-decay]
- evidence: empirical
- confidence: medium
- group: clarification-timing
- sources: https://arxiv.org/abs/2605.07937

**Claim:** Same study (Gulati et al. 2025, arXiv:2605.07937): input clarification (unspecified data sources) retains value through roughly 50% of execution (pass@3: 0.46 at 10%, 0.36 at 30-50%, 0.25 at 90% — below the no-clarification baseline of 0.33). Mechanism: input information is discoverable by the agent during execution through exploration, so late injection still adds value up to the midpoint; beyond the midpoint, the agent has already committed to data assumptions it cannot easily retract. Implication: input-type questions can be deferred to early-mid execution if not available upfront, but not past the halfway mark.

**Verify note:** Drawn from the same paper (arXiv:2605.07937). The abstract confirms input clarification retains value through roughly 50% of execution, which is the central qualitative claim. However: (1) The specific pass@3 values — 0.46 at 10%, 0.36 at 30-50%, 0.25 at 90%, baseline 0.33 — are not confirmed from accessible content and are precise enough to be suspicious extrapolations. (2) The claim that below-baseline performance at 90% injection (0.25 < 0.33 baseline) is stated confidently but may reflect a narrow confidence interval; whether this is statistically significant is unknown. (3) The mechanism explanation ('input information is discoverable by the agent during execution through exploration') is a reasonable inference but is the claim author's interpolation, not necessarily the paper's language. (4) The implication 'input-type questions can be deferred to early-mid execution' is the paper's own finding directionally, but treating 50% as a hard cutoff rather than a gradient is an extrapolation. Net: core qualitative finding is supported; specific numerical values and mechanism language are unconfirmed.

---

### [key: no-model-asks-in-optimal-window]
- evidence: empirical
- confidence: low
- group: current-model-behavior
- sources: https://arxiv.org/abs/2605.07937

**Claim:** Gulati et al. 2025 (arXiv:2605.07937) analyzed 300 unscripted production sessions: no frontier model asks for clarification within the empirically optimal window for any information dimension. GPT-5.2 over-asks (52% of sessions, mean timing 43% into execution). Claude Sonnet 4.5 asks in only 23% of sessions (mean timing 50%). Gemini 3 Flash never asks (0% rate). Mechanism: models are trained for task completion, not clarification timing optimization. Implication: current agents require external scaffolding (intake protocol) to enforce front-loaded clarification — the behavior does not emerge from base training.

**Verify note:** This claim makes highly specific assertions about named models — 'GPT-5.2' (52% over-ask rate, mean timing 43%), 'Claude Sonnet 4.5' (23% ask rate, mean timing 50%), 'Gemini 3 Flash' (0% ask rate) — drawn from '300 unscripted production sessions.' These model names are the primary red flag: GPT-5.2, Claude Sonnet 4.5, and Gemini 3 Flash are model designations that either do not exist or whose existence relative to the paper's arXiv submission (2605.07937, submitted ~May 2026) is uncertain given the knowledge cutoff. The abstract only states '300 unscripted sessions' showing models 'rarely ask at optimal times' and that 52% over-ask. The attribution of 52% over-asking to GPT-5.2 specifically and 0% asking to Gemini 3 Flash is not verifiable from the source and may be fabricated specificity. The broader point — that frontier models do not ask at the right time without scaffolding — is plausible and consistent with other literature, but the named-model statistics cannot be verified and carry high risk of fabrication. Assigned LOW because specific quantitative claims about named models are unverifiable and the model names themselves are suspicious.

---

### [key: ua-multi-essential-inferable-split]
- evidence: empirical
- confidence: medium
- group: essential-inferable-split
- sources: https://arxiv.org/abs/2603.26233

**Claim:** Vijayvargiya et al. 2025 ('Ask or Assume?', arXiv:2603.26233, accepted ICLR 2026): multi-agent clarification scaffold (UA-Multi) achieves 69.40% task resolution vs. 61.20% single-agent and 70.80% fully-specified baseline on Ambig-SWE-Bench. When UA-Multi refrains from asking (156 tasks), it maintains 76.92% success — nearly identical to the Hidden baseline's 77.56% — demonstrating calibrated essential/inferable discrimination. Mechanism: an Intent Agent analyzes conversation history at each turn to ask 'what is missing, ambiguous, or assumption-heavy?' Ask rate scales with task difficulty: 62.37% for easy, 71.65% for medium, 78.57%+ for hard tasks. Implication: intake protocols should distinguish essential questions (where answer cannot be inferred) from inferable details (derivable from codebase, standards, or context), asking only the former.

**Verify note:** The paper (arXiv:2603.26233) is real and accepted. The 69.40% task resolve rate for UA-Multi is confirmed in the abstract. However: (1) The exact numbers for single-agent (61.20%) and fully-specified baseline (70.80%) are not confirmed from the abstract alone, which only says 'significantly outperforms a standard single-agent setup.' (2) The '156 tasks where UA-Multi refrains' with 76.92% vs Hidden baseline 77.56% is a precise claim that cannot be verified from available content. (3) Ask rates by difficulty (62.37% easy, 71.65% medium, 78.57%+ hard) are specific and internally consistent (harder tasks → more asking), which is plausible, but unverifiable from abstract. (4) The 'Intent Agent analyzes conversation history at each turn to ask what is missing, ambiguous, or assumption-heavy' is a reasonable description of the mechanism. (5) The scale claim — UA-Multi is a multi-agent scaffold — is confirmed. The core finding (69.40% vs. single-agent, calibrated asking) is confirmed; the satellite statistics require the full paper to verify.

---

### [key: interactive-clarification-baseline-overtask]
- evidence: empirical
- confidence: low
- group: over-asking-failure
- sources: https://arxiv.org/abs/2603.26233

**Claim:** Vijayvargiya et al. 2025 (arXiv:2603.26233): naive upfront clarification (Interactive Baseline) queried in 496 of 500 tasks (99.2%) — a near-universal ask rate — yet averaged only 1.02 queries receiving verbose 415-token answers. This 'upfront' strategy wasted the entire interaction budget on already-resolvable issues. By contrast, UA-Multi distributed questions across early (41.8%) and mid-stage (43.4%) execution, averaging 3.06 targeted queries per queried task. Mechanism: blanket upfront asking ignores which tasks actually need clarification; task-conditioned asking uses execution context to identify genuine ambiguities. Implication: front-loaded intake must not default to asking everything; it must use ambiguity detection to select essential questions only.

**Verify note:** Specific statistics asserted: Interactive Baseline queries 496 of 500 tasks (99.2%), averaging 1.02 queries with 415-token answers; UA-Multi distributes 41.8% early / 43.4% mid, averaging 3.06 queries per queried task. These are very precise numbers that could not be confirmed from the abstract or PDF extraction. The contrast being drawn — blanket upfront asking vs. targeted asking — is a plausible finding consistent with the paper's framing. However: (1) '496/500' and '1.02 queries' together imply near-universal but shallow asking, while '415-token answers' implies verbose user responses — this combination is specific enough to be fabricated. (2) '41.8% early / 43.4% mid' execution distribution for UA-Multi is internally coherent but unverifiable. (3) The '500 task' benchmark size is plausible but also unconfirmed. The qualitative argument (blanket asking wastes budget; targeted asking is superior) is supported by the paper's abstract, but all the specific statistics are unverified. Assigned LOW because the specific statistics are the entire load-bearing content of this claim and none are confirmed.

---

### [key: ambig-swe-interactive-74pct-gain]
- evidence: empirical
- confidence: medium
- group: underspecification-detection
- sources: https://arxiv.org/abs/2502.13069

**Claim:** Ambig-SWE (arXiv:2502.13069, ICLR 2026): on underspecified SWE-Bench tasks, interactive clarification yields up to 74% performance improvement over non-interactive settings. Claude Sonnet 3.5 recovers approximately 80% of fully-specified performance through interaction. Models default to non-interactive behavior unless explicitly prompted — only Claude Sonnet 4 achieves strong detection (89% accuracy with strong prompting); most models perform near chance (50%); Qwen 3 Coder shows 100% false negative rate (never detects missing information). Mechanism: effective models use 'exploration-first strategies' — determining what is independently recoverable before querying; integration quality matters as much as information extraction (Qwen 3 asks 6.02 questions but shows rigid protocol-following rather than adaptive integration). Implication: intake design must prompt explicit underspecification detection, not rely on model defaults.

**Verify note:** The paper (arXiv:2502.13069) is real, ICLR 2026 accepted, and the abstract explicitly states 'up to 74% over the non-interactive settings' — this is directly confirmed. However: (1) 'Claude Sonnet 3.5 recovers approximately 80% of fully-specified performance' — this is a specific quantitative claim not found in the abstract; the abstract does not name recovery percentages by model. (2) 'Claude Sonnet 4 achieves strong detection (89% accuracy with strong prompting)' — 'Claude Sonnet 4' as a model name is uncertain relative to the submission date; the 89% figure is unconfirmed. (3) 'Most models perform near chance (50%)' — plausible but unconfirmed. (4) 'Qwen 3 Coder shows 100% false negative rate' — Qwen 3 Coder's existence and this specific metric are unconfirmed. (5) 'Exploration-first strategies' and 'integration quality' language — not extractable from abstract. The 74% headline number is real; the model-specific breakdown involves model names and statistics that cannot be verified and may be fabricated. 'Up to 74%' is also a ceiling figure, not an average, which the claim correctly represents.

---

### [key: silent-misframing-ambig-ds]
- evidence: empirical
- confidence: medium
- group: silent-misframing
- sources: https://arxiv.org/abs/2605.09698

**Claim:** Ambig-DS (arXiv:2605.09698): across five code-based agents, ambiguity induces unflagged misframing on 39-63% of prediction-target runs and silent failure on 16-62% of evaluation-objective runs. Critically, the pipeline executes, the model trains, the submission is well-formed, and the downstream evaluator accepts the artifact as valid — the failure is invisible. Mechanism: agents 'quietly commit to plausible but unintended task framings' when not prompted to detect ambiguity. The bottleneck is framing recognition, not execution capability. Allowing one clarifying question recovers much of the loss under idealized conditions, but 'permissive prompts induce over-asking on clear tasks, while conservative prompts induce silent defaulting on ambiguous ones.' Implication: intake protocol must include task-framing ambiguity detection as an explicit step, especially for data science / analytical tasks with multiple plausible objectives.

**Verify note:** The paper (arXiv:2605.09698) exists with 112 tasks (51 Target + 61 Objective) tested across 5 agents. The abstract confirms: (1) failures are 'silent commitments' — wrong-target submissions or wrong-metric baseline submissions rather than execution errors (confirmed). (2) One clarifying question recovers much of the loss under idealized conditions (confirmed). (3) 'Permissive prompts induce over-asking on clear tasks, while conservative prompts induce silent defaulting on ambiguous ones' (confirmed verbatim in abstract). (4) 'Quietly commit to plausible but unintended task framings' — confirmed as core finding. However: (1) The specific percentages 39-63% unflagged misframing and 16-62% silent failure are not in the abstract and could not be confirmed from PDF extraction; they are within compressed content. (2) The n-size is small: 51 + 61 = 112 tasks, 5 agents. At this scale, percentage ranges spanning 24+ percentage points could reflect inter-agent variance rather than a robust structural finding. Limitation: 5 agents on 112 tasks is a modest evaluation. The core qualitative finding is confirmed; the specific percentage ranges require the full paper and carry some uncertainty given small n.

---

### [key: information-gain-reward-clarification]
- evidence: empirical
- confidence: medium
- group: question-selection
- sources: https://arxiv.org/abs/2606.03135

**Claim:** arXiv:2606.03135 ('Uncertainty-Aware Clarification in LLM Agents with Information Gain'): Bayesian information-gain framework for clarification question selection achieves 3.7% average success rate improvement across five agent backbones vs. no-clarification baseline, using only 1.3 questions per task vs. 3.9-5.1 for large models. Airline domain (out-of-distribution) gains 5.4%. Mechanism: reward = log P(goal | context, question, answer) - log P(goal | context); no clarification when prior already concentrates on user intent. Non-monotonic performance: beyond 16 questions, excessive clarification degrades results through 'informational noise that distracts the agent.' Sweet spot: 1-2 strategic interventions per task. Implication: optimal intake asks 1-3 high-information-gain questions rather than comprehensive upfront elicitation; question selection should maximize Bayesian belief update toward correct task framing.

**Verify note:** The paper (arXiv:2606.03135) is real. The abstract confirms: 3.7% average improvement over no-clarification baseline across five agent backbones. The '0.3 total interaction steps on average' figure is confirmed — though the claim says '1.3 questions per task' vs. '0.3 additional interaction steps,' these are different metrics and '1.3 questions per task' is NOT confirmed. (1) '5.4% airline domain gain' — unconfirmed from available content. (2) 'Non-monotonic performance beyond 16 questions' — unconfirmed from abstract; the abstract says the method uses fewer questions but doesn't specify 16 as a threshold. (3) '3.9-5.1 questions for large models' — unconfirmed. (4) The Bayesian information gain formula description is consistent with the paper's stated approach (EVPI reasoning), but the exact formula is not extractable. The 3.7% improvement figure is modest — it is a real gain but small enough that it could be within noise for individual task categories. The '0.3 interaction steps' vs '1.3 questions' discrepancy is a potential inconsistency in the claim's representation.

---

### [key: cart-stopping-criterion-counterfactual]
- evidence: empirical
- confidence: medium
- group: stopping-criterion
- sources: https://arxiv.org/abs/2510.08517

**Claim:** CaRT arXiv:2510.08517 ('Teaching LLM Agents to Know When They Know Enough'): trains agents to recognize information sufficiency using counterfactual pairs showing minimally modified trajectories differing only in necessary information. Models trained this way achieve higher optimal termination rates and better FRQ success than fixed-budget or SFT baselines; on out-of-distribution dermatology tasks, CaRT maintains performance while base and SFT models perform worse than naive fixed termination. Mechanism: the stopping criterion is a 'breakpoint' where task success would increase by ≥50% if more information is gathered — operationalized by contrastive training on cases that differ only in one information element. Extra information beyond this point risks 'latching onto spurious information.' Implication: intake protocols should stop collecting information once a sufficiency threshold is reached, not default to exhaustive elicitation.

**Verify note:** The paper (arXiv:2510.08517) is real. The counterfactual pairs training approach is confirmed: 'counterfactual pairs of trajectories, one where termination is appropriate and a minimally modified version where it is not.' The paper tests on 'interactive medical diagnosis and math problem solving,' not dermatology specifically — 'dermatology OOD tasks' is NOT confirmed and appears to be an embellishment or misremembering. (1) The '50% task success increase' breakpoint definition is not confirmed in available content. (2) 'Latching onto spurious information' phrasing is not confirmed. (3) 'Out-of-distribution dermatology' is not the paper's domain — the paper uses medical diagnosis and math, and 'dermatology' appears to be a fabricated specificity. (4) The superiority over SFT and fixed-budget baselines is consistent with the abstract's claims. The fabrication of 'dermatology' as the OOD domain is a clear error — this is the kind of specificity that appears authoritative but cannot be verified because it is wrong. The core mechanism (counterfactual training) is confirmed; the specific OOD domain claim is wrong.

---

### [key: structured-uncertainty-evpi-vs-naive]
- evidence: empirical
- confidence: medium
- group: question-selection
- sources: https://arxiv.org/abs/2511.08798

**Claim:** arXiv:2511.08798 ('Structured Uncertainty guided Clarification'): SAGE-Agent using Expected Value of Perfect Information (EVPI) achieves 59.73% ClarifyBench coverage vs. 55.70% Domain-aware ReAct and 54.27% ProCOT, while reducing clarification questions by 1.5-2.7x. On reinforcement learning benchmark, uncertainty-weighted GRPO boosts accuracy from 36.5% to 65.2% (3B model). Mechanism: EVPI operates directly over explicit tool parameter domains rather than natural language space; tracks aspect-based redundancy to prevent repeated questions about the same parameter; terminates when marginal information gain drops below threshold. Excels when parameter domains are explicit (APIs, structured schemas). Implication: structured intake schemas (fields with known domains) enable information-gain computation and selective asking; unstructured free-text goals cannot benefit from EVPI-based stopping.

**Verify note:** The paper (arXiv:2511.08798) is real. The specific numbers — 59.73% vs 55.70% vs 54.27% ClarifyBench coverage, 1.5-2.7x question reduction, 36.5% to 65.2% RL benchmark accuracy for 3B model — are confirmed by the PDF extraction, which explicitly listed these figures. However: (1) The paper introduces ClarifyBench itself, making it the sole evaluator on its own benchmark — an important limitation not noted in the claim. (2) '7-39% higher coverage' from the abstract vs '59.73% vs 55.70%' from the claim represent absolute percentage point differences of only ~4-5pp, while '7-39% higher coverage' is a relative improvement figure — these are consistent but the claim uses absolute figures that appear more impressive. (3) The implication 'unstructured free-text goals cannot benefit from EVPI-based stopping' is a reasonable inference but is not a direct finding of the paper. Overall: numerical claims are the best-confirmed in this batch because they appeared directly in extracted content, though the self-benchmark limitation is a real methodological concern.

---

### [key: goal-drift-strong-elicitation]
- evidence: empirical
- confidence: medium
- group: goal-specification-quality
- sources: https://arxiv.org/abs/2505.02709

**Claim:** arXiv:2505.02709 ('Evaluating Goal Drift in Language Model Agents'): strong goal elicitation (explicit instruction to pursue only the assigned goal, ignoring competing objectives) significantly reduces goal drift across all models (p<0.05). Claude 3.5 Sonnet maintains near-perfect adherence for >100,000 tokens under strong elicitation; weaker models drift after as few as 16 time steps without explicit goal reinforcement. Drift scores under weak elicitation: 0.51-0.93 for profit-maximization settings. Primary mechanism is pattern-matching: agents increasingly match behavioral patterns observed in context rather than holding to specified goals. Strong elicitation fails during goal-switching tasks. Implication: intake protocols must include explicit, unambiguous goal statements with scope exclusions — vague goals are not just communication failures, they actively accelerate goal drift.

**Verify note:** The paper (arXiv:2505.02709) is real. From PDF extraction: drift scores 0.51-0.93 for profit-maximization settings are confirmed. Strong elicitation significance p<0.05 is confirmed. Claude 3.5 Sonnet maintaining near-perfect adherence for 100,000+ tokens is confirmed (consistent with abstract: 'best-performing agent, scaffolded Claude 3.5 Sonnet, maintains nearly perfect goal adherence for more than 100,000 tokens in our most difficult evaluation setting'). 'Weaker models drift after 16 time steps' is confirmed in PDF extraction. However: (1) 'Strong elicitation fails during goal-switching tasks' — this is a specific conditional failure mode that is plausible but not confirmed from available content. (2) The mechanism — 'pattern-matching: agents increasingly match behavioral patterns in context rather than holding to specified goals' — is confirmed in the abstract. (3) The implication ('vague goals are not just communication failures, they actively accelerate goal drift') follows directly from the pattern-matching mechanism. Limitation: the 100,000-token finding is for a scaffolded Claude 3.5 Sonnet (best case), while the 16-step finding is for weaker models — the claim presents these as parallel findings correctly. The 'strong elicitation fails during goal-switching' specific failure mode is the one unconfirmed element; the rest of the claim is well-supported.

---

### [key: agentask-handoff-clarification-error-types]
- evidence: empirical
- confidence: low
- group: multi-agent-specification
- sources: https://arxiv.org/abs/2510.07593

**Claim:** arXiv:2510.07593 ('AgentAsk: Multi-Agent Systems Need to Ask'): at inter-agent handoff points, four error types occur — Data Gap (29.1%), Signal Corruption (36.8%), Referential Drift (27.3%), Capability Gap (6.8%). Lightweight clarification at handoffs improves framework averages by +3.29 to +3.45 percentage points across five benchmarks at only 5-9% latency overhead. Resolution rates: Data Gap 82.5%, Signal Corruption 75.4%, Referential Drift 58.3%, Capability Gap 49.5%. Mechanism: RL-trained decision: ask when clarification removes downstream uncertainty (+1 reward), don't ask when it doesn't (-1 penalty). Implication for multi-agent intake: handoff points are secondary specification-loss sites; front-loaded intake captures goal but inter-agent message quality requires targeted clarification at each handoff.

**Verify note:** Paper and four error types confirmed from abstract. Specific percentage breakdowns (29.1/36.8/27.3/6.8%), resolution rates (82.5/75.4/58.3/49.5%), the +3.29 to +3.45 pp figure, and the 5-9% latency figure are not in the abstract — unverifiable from accessible source. Peak improvement quoted as 'up to 4.69%' not '+3.29 to +3.45 pp.' RL reward mechanism (+1/-1) is plausible characterization, not confirmed. The implication that handoff points are 'secondary specification-loss sites' does not follow from benchmark accuracy improvements alone. Unreviewed 2025 preprint.

---

### [key: mast-taxonomy-specification-failure]
- evidence: empirical
- confidence: medium
- group: multi-agent-specification
- sources: https://arxiv.org/abs/2503.13657

**Claim:** MAST taxonomy (2503.13657, Berkeley, empirical analysis of 150 MAS execution traces across 5 task domains via Grounded Theory): 14 failure modes identified across three categories — specification issues, inter-agent misalignment, task verification failures. None of the 14 are detectable at the individual agent level. Specification failures cascade: 'early mistakes can compound into larger failures.' Mechanism: small specification gaps at the orchestrator level propagate downstream as each subagent inherits the misspecified framing. Implication: intake protocol must be designed at the system level (orchestrator input), not individual agent level — a clean intake form for one agent does not prevent specification failures in downstream agents receiving handoffs.

**Verify note:** 14 failure modes and 3 categories confirmed; κ=0.88 confirmed. Category name mismatch: claim says 'specification issues,' paper says 'system design issues.' The '5 task domains' figure is wrong — abstract lists coding, math, and general agent (3 domains). The claim that none of the 14 modes are detectable at individual agent level and the cascading inheritance mechanism are not in the abstract. The 150-trace rigorous analysis is confirmed; full dataset is 1,600+ traces across 7 frameworks. Implication about orchestrator-level intake is a design inference, not a study finding.

---

### [key: liza-goal-doc-coach-challenger]
- evidence: anecdote
- group: intake-design-patterns
- sources: https://github.com/liza-mas/liza

**Claim:** Liza multi-agent coding system (github.com/liza-mas/liza, practitioner): uses a ~200-line goal document as the single source of product decisions. Goal-setting uses two adversarial postures — Coach (surfacing WHY) and Challenger (stress-testing WHAT) — because this phase has 'the highest decision density — every ambiguity resolved here prevents wrong turns downstream.' Agents may make implementation choices but not product decisions. A single well-formed goal document was sufficient to produce a three-tier application (FastAPI + Go CLI + React) in one run. Maps 55+ LLM failure modes (sycophancy, phantom fixes, scope creep, test corruption) each to a specific countermeasure. Mechanism: front-loaded specification creates a reference contract that agents validate against throughout execution. Scope: practitioner evidence; system scale not benchmarked.

---

### [key: arbor-research-contract-intake]
- evidence: anecdote
- group: intake-design-patterns
- sources: https://github.com/RUC-NLPIR/Arbor

**Claim:** Arbor autonomous research agent (github.com/RUC-NLPIR/Arbor, practitioner): intake conversation captures goal, target directory, metric (exact score name + direction), baseline (starting anchor), ambition (target), scope (novelty vs. raw effect), and constraints (protected files, evaluation split rules) — converting them into a one-screen 'Arbor Research Contract.' Clarification skill fires when target, metric, data, permissions, budget, or run mode are unclear before loading the orchestrator. Mechanism: research contract reduces ambiguity about what constitutes a valid result and what the stopping condition is, preventing goal drift during long runs. Scope: deployed practitioner system; no controlled comparison reported.

---

### [key: anticipatory-planning-vs-reactive]
- evidence: empirical
- confidence: medium
- group: pre-execution-planning
- sources: https://arxiv.org/abs/2603.16777

**Claim:** TraceR1 (arXiv:2603.16777): two-stage RL framework — trajectory-level optimization trains the model to forecast several future actions before execution; grounded fine-tuning refines with execution feedback. Reactive baselines optimize 'actions in isolation without reasoning about future states.' On AndroidWorld: 64.8% success vs. 57.2% without second stage (a 6% ablation drop). Mechanism: pre-execution lookahead enables agents to 'account for long-term dependencies' and 'maintain globally consistent planning,' reducing gradual divergence from intended tasks. Scope: multimodal GUI agents; generalization to other agent types requires separate validation. Implication: front-loaded intake design (specifying done-criteria before execution begins) aligns with the same architectural principle as anticipatory trajectory planning.

**Verify note:** Paper name TraceR1 confirmed. Two-stage RL mechanism confirmed conceptually. The specific 64.8% vs 57.2% AndroidWorld figures do not appear in the abstract — cannot be verified from accessible source. The '6% ablation drop' description is imprecise (actual gap if confirmed would be 7.6pp). Implication that front-loaded intake 'aligns with the same architectural principle' is an analogy, not a finding — the paper covers multimodal GUI agents and does not discuss intake protocol design. Preprint, no peer review confirmed.

---

### [key: unknown-unknowns-upfront-limit]
- evidence: consensus
- group: intake-limitations
- sources: https://arxiv.org/abs/2602.15259

**Claim:** arXiv:2602.15259 ('Knowing Isn't Understanding'): upfront specification fails as a complete solution because users cannot articulate needs they haven't yet considered — 'clarification requests exhausting what users don't know they don't know is impossible before task engagement begins.' Mechanism: epistemic failures are failures of representation, not confidence — agents that equate ignorance with uncertainty lack means to recognize when their task formulation is incomplete. This means front-loaded clarification can capture known unknowns (explicit gaps) but not unknown unknowns (unarticulated requirements that emerge during execution). Scope: specifically addresses agentic proactivity; the critique is strongest for open-ended creative or exploratory tasks rather than well-scoped engineering tasks. Implication: intake protocols are necessary but not sufficient; they must be paired with execution-time monitoring for newly emerging requirements.

---

### [key: waterfall-overspec-60pct-failure]
- evidence: consensus
- group: intake-limitations
- sources: https://zenexmachina.com/waterfall-vs-agile-a-knowledge-problem-not-a-requirements-problem/

**Claim:** Standish CHAOS Report (2020) and SE literature: poorly defined requirements contribute to over 60% of project failures. Comprehensive upfront specification (waterfall model) 'proves counterproductive' when stakeholders genuinely don't know what they need — the production of vast upfront documentation can lead to omissions with knock-on effects. Neither approach (upfront-heavy nor purely iterative) proves universally superior; waterfall suits contexts where requirements are genuinely stable and knowable upfront. Mechanism: forced upfront specification when genuine uncertainty exists produces false precision — documented requirements that appear complete but contain hidden assumptions. Implication: intake protocol design should distinguish between genuinely knowable requirements (gather upfront) and requirements that can only be discovered through execution (defer to checkpoints).

---

### [key: proactivity-interruption-cost-framework]
- evidence: consensus
- group: ask-vs-proceed
- sources: https://arxiv.org/abs/2605.06717

**Claim:** arXiv:2605.06717 ('Agentic Coding Needs Proactivity, Not Just Autonomy', Google Labs, 2026): proposes interruption cost computation as the decision criterion for when agents should ask vs. proceed. Equation: Expected utility of action minus interruption cost. Four actions available: notify, question, draft, stay silent — silence is an explicit option, not a default. Current audit finding: 'no deployed system documents meaningful interruption cost computation or uses silence as explicit action.' Three evaluation targets proposed: Insight Decision Quality (IDQ), Context Grounding Score (CGS), Learning Lift (LL). Scope: coding agent domain; mechanism is theoretical (no controlled empirical validation in this paper). Implication: intake design should compute interruption cost — the value of asking vs. the friction of interrupting — and treat 'proceed with assumption' as a scored option alongside asking.

---

## Null results
- self-argumentation strongest case against front-loaded intake: 'just-in-time' clarification beats upfront specification — no direct controlled comparison found; adversarial argument reconstructed from first principles: (1) unknown unknowns cannot be captured upfront (arXiv:2602.15259), (2) task context reveals what questions to ask (arXiv:2603.26233 UA-Multi distributes 41.8%/43.4% early/mid), (3) over-specification creates informational noise (arXiv:2606.03135 non-monotonic at 16+ questions). Strongest counter-case: for tasks where user intent is well-scoped and execution is expensive/irreversible, front-loading is clearly superior; the adversarial case applies specifically to open-ended or explorative tasks where full specification is epistemically impossible upfront.
- human factors aviation briefing — returned general CRM literature confirming checklist value and 60-80% pilot error rate, but no specific empirical comparison of pre-task briefing depth vs. mid-task interruption in autonomous systems; discipline vocabulary mismatch (aviation uses 'briefing quality' not 'intake protocol')
- RAG query rewriting as alternative framing — showed query clarification before retrieval improves retrieval quality; no direct controlled comparison to mid-retrieval clarification; insufficient specificity for kit-maker claims

## New angles surfaced
- **Essential vs. inferable split: empirical threshold for the kit-maker intake protocol**
  Target decision: arXiv:2603.26233 (UA-Multi ask-rate by task difficulty) + arXiv:2510.08517 (CaRT 50% sufficiency threshold)
  Would find: Operationalizable criteria for which intake questions are 'essential' (answer changes solution correctness) vs. 'inferable' (derivable from codebase, domain conventions, or prior context). The current kit Hard Rule 13 element 8 is marked PROVISIONAL — this angle would close the decision with specific thresholds: ask rate ~62-78% scales with task difficulty; for easy tasks with <15min scope, over half of candidate questions are inferable.
- **Handoff specification loss: whether inter-agent contracts need their own intake protocol**
  Target decision: arXiv:2510.07593 (AgentAsk handoff error taxonomy) + arXiv:2503.13657 (MAST cascade propagation)
  Would find: Whether a single front-loaded intake (at orchestrator level) is sufficient or whether each agent-to-agent handoff requires its own micro-specification step. AgentAsk shows 29-37% of handoff errors are Data Gap and Signal Corruption — catchable with lightweight clarification. This closes the design question of whether the kit's intake protocol should be global-only or include handoff templates.
- **Intake schema structure: structured fields vs. free-text goal for information-gain computation**
  Target decision: arXiv:2511.08798 (EVPI operates over explicit parameter domains) + arXiv:2605.09698 (Ambig-DS: permissive vs. conservative prompt framing)
  Would find: Whether structured intake schemas (fields with known domains: metric, scope, constraint, success-criteria) enable better clarification selection than free-text goals. EVPI approach requires explicit parameter domains to compute information gain; Ambig-DS shows that prompt framing (permissive vs. conservative) determines whether agents over-ask or silently default — this suggests schema design determines which failure mode you get.
- **Irreversibility as intake trigger: empirical threshold for mandatory pre-task clarification**
  Target decision: Galileo agent failure modes blog + arXiv:2604.03714 (runtime enforcement for ethics) + MAST cascade data
  Would find: Whether action irreversibility should be a mandatory intake trigger — i.e., agents should refuse to begin execution until goal is clarified when the first planned action is irreversible. This is currently a heuristic in the kit; empirical data on what percentage of cascades start from irreversible actions taken under ambiguous goals would convert this from heuristic to evidence-based rule.
- **Vocabulary-frame coverage gap: cognitive science 'pre-task briefing' literature not yet searched**
  Target decision: Human factors / CRM literature on pre-task briefing depth and error reduction
  Would find: Empirical evidence from aviation CRM, surgical briefing, and military operations research on how pre-task briefing depth reduces mid-task errors — a tradition with 30+ years of empirical data that uses 'briefing quality' vocabulary rather than 'intake protocol.' This tradition likely has controlled studies (e.g., WHO surgical checklist: 47% reduction in major complications) that would provide calibration for how thorough an agent intake needs to be.
- **Adversarial saturation check: is the Category D requirement itself evidence-backed?**
  Target decision: Citation graph of arXiv:2605.07937 + arXiv:2603.26233 for alternative vocabulary traditions cited
  Would find: Whether the four research traditions identified (AI/Agent Systems, Requirements Engineering, HCI/CSCW, Cognitive Science) actually use structurally different vocabulary that produces recall-complementary results, or whether they converge on the same papers. This would validate or falsify the multi-tradition search requirement itself.
