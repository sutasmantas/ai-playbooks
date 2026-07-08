# Research Archive: Articulation before commitment — explaining a procedure step to a hypothetical reader forces implicit assumptions to become explicit and reduces errors vs silent evaluation

## Saturation log
- Query 1: "rubber duck debugging articulation assumption surfacing empirical software engineering" — 1 new keys
- Query 2: "explaining reasoning before committing implicit assumption surfacing empirical study" — 2 new keys
- Query 3: "verbalization problem solving error reduction implicit assumption explicit empirical" — 3 new keys
- Query 4: "self-explanation effect learning problem solving quality improvement empirical" — 4 new keys
- Query 5: "articulation forcing function hidden assumption surfacing LLM agent quality empirical" — 3 new keys
- Saturated: YES

---

## Claims (13)

### [key: rdd-assumption-externalization]
- evidence: consensus
- group: articulation-debugging
- sources: https://en.wikipedia.org/wiki/Rubber_duck_debugging, https://scalablehuman.com/2024/02/22/embracing-rubber-duck-debugging-in-software-engineering/

**Claim:** Rubber duck debugging (RDD) — articulating code behavior step-by-step to a non-responsive listener — surfaces implicit assumptions by forcing the programmer to make every premise explicit and testable. The mechanism is externalization: internal mental models contain gaps that feel complete but are not; narrating to an external object requires filling those gaps in natural language, revealing contradictions and unjustified beliefs. The technique is described in The Pragmatic Programmer (Hunt & Thomas) and is consensus-level practitioner knowledge in software engineering. Scope: applies to any sequential procedural reasoning task; does not require a live interlocutor. Kit implication: insert a mandatory 'explain this step to a naive reader' sub-task before any agent commits to an irreversible action; the act of drafting the explanation is the error-detection mechanism, not the reader's response.

---

### [key: self-explanation-effect-chi-1989]
- evidence: empirical
- confidence: medium
- group: self-explanation
- sources: https://notes.andymatuschak.org/zEM6D2693bMZcQHJTozqn87, https://onlinelibrary.wiley.com/doi/abs/10.1207/s15516709cog1302_1

**Claim:** Chi et al. (1989, Cognitive Science 13:145-182) studied N=8 students learning classical mechanics from worked examples. Good learners (82% problem-solving score) generated on average 52 idea statements while studying, versus 18 for poor learners (46% score). Good learners explicitly articulated Newton's Laws principles not stated in the text, creating production rules encoding when and how to apply knowledge. Mechanism: self-explanation converts implicit text into conditional 'if situation X, apply action Y' rules, enabling transfer to novel problems. Scope: text-based worked examples in STEM domains; small correlational sample — causal direction confirmed by later training studies (Renkl 2002). Kit implication: agents that articulate the conditional structure of a decision step ('this applies when X, not when Y') build more transferable internal representations than agents that produce direct outputs.

**Verify note:** All figures (N=8, 52 vs 18 idea statements, ~82% vs 46% problem-solving) confirmed via Andy Matuschak notes (primary journal source paywalled, returned HTTP 402). The self-explanation effect in human learning is robustly replicated. Medium rather than high: primary source not directly accessible for this audit; N=8 is acknowledged-small; human-to-LLM transfer is an unaddressed extrapolation the claim does not flag. The claim correctly notes correlational design and cites Renkl 2002 for causal confirmation.

---

### [key: self-explanation-training-causal-renkl]
- evidence: empirical
- confidence: medium
- group: self-explanation
- sources: https://www.sciencedirect.com/science/article/abs/pii/S0959475201000305, https://www.researchgate.net/publication/222839878_Worked-out_examples_Instructional_explanations_support_learning_by_self-explanations

**Claim:** Renkl (2002, Learning & Instruction 12:529-556) confirmed causality: self-explanation prompts added to worked-example study produced measurably better learning than studying without prompts. The earlier Chi et al. correlation was replication-supported by prompting interventions across STEM domains. Mechanism: prompts interrupt passive reading and force learners to articulate the rationale behind each solution step, converting tacit operator knowledge into explicit conditional rules. Scope: most learners do not employ these strategies spontaneously; gains are largest for learners who would otherwise use surface strategies. Kit implication: a kit step that passively shows a worked procedure to an agent does less than a step that requires the agent to articulate the principle behind each action before proceeding.

**Verify note:** Both cited URLs (ScienceDirect, ResearchGate) returned HTTP 403 — direct verification blocked. The claim is consistent with Renkl's well-known contribution to the worked-examples literature and the Bisra et al. 2018 meta-analysis confirms the broader prompting effect. N and exact design unconfirmed in this audit. Medium: credible and consistent with literature record, but direct source access was denied. Human-to-LLM transfer gap present but unaddressed.

---

### [key: self-explanation-meta-analysis-moderate-effect]
- evidence: empirical
- confidence: high
- group: self-explanation
- sources: https://www.qic-wd.org/umbrella-summary/self-explanation-in-training

**Claim:** Bisra et al. (2018) meta-analysis found self-explanation has a moderate and positive effect on learning outcomes across implementation variants. Critically, the effect held regardless of timing (before/during/after instruction), prompt format, knowledge type (conceptual vs procedural), and instructional medium (print/digital/video). When learners generate their own explanations after instruction, outcomes surpass instructor-provided explanations alone. Mechanism: inference generation about causal/conceptual relationships — not passive reception — drives learning. Scope: child welfare training in the reviewed meta-analysis, but domain-invariance is the headline finding. Kit implication: requiring an agent to generate its own rationale for a step outperforms providing the rationale to the agent; the generation act is the mechanism.

**Verify note:** qic-wd.org umbrella summary confirmed: Bisra et al. (2018) in Educational Psychology Review. 'Moderate and positive effect on learning outcomes' confirmed. Timing/format/knowledge type/medium variability all 'mostly inconsequential' confirmed. Self-explanation outperforming instructor-provided explanations confirmed. The 'domain-invariance' framing is the meta-analysis scope, while the listed source is a child welfare application site — the claim handles this correctly. Meta-analysis design is strong evidence type.

---

### [key: self-explanation-quality-mediates-outcome]
- evidence: empirical
- confidence: low
- group: self-explanation
- sources: https://link.springer.com/article/10.1007/s11251-022-09579-4

**Claim:** Research on self-explanation in statistics problem solving (Springer Nature, Instructional Science) found that self-explanation quality — not merely quantity — significantly mediates learning gains. Higher-quality explanations link goals to actions explicitly and reason anticipatively about why a step was taken before seeing the outcome. Mechanism: principle-based, goal-action-linked explanations build richer conditional rules; surface-level paraphrasing does not. Scope: ill-defined problems; scaffolding substantially raises explanation quality for learners who would otherwise produce surface explanations. Kit implication: a kit step that elicits 'what assumption does this step make?' generates higher-quality articulation than 'describe what you are doing'; the prompt design determines whether the forcing function fires at the right level.

**Verify note:** CRITICAL ERROR: The Springer article (doi:10.1007/s11251-022-09579-4) was successfully retrieved and explicitly states the OPPOSITE of the claim. The paper found that 'self-explanation quality did NOT mediate the worked example effect' — both groups generated 'self-explanations of similar quality' and 'self-explanation quality was not predictive of learning.' The claim asserts mediation; the cited source found null mediation. The domain (statistics, ill-defined problems), N (74 university students), and journal are correctly described — only the finding is inverted. The entire kit implication rests on a premise the cited study refutes.

---

### [key: verbalization-dissociable-insight-vs-analytic]
- evidence: empirical
- confidence: high
- group: verbalization-scope
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11942870/

**Claim:** A controlled study (N=120, 4 groups of 30; PMC11942870, 2024) found opposite effects of verbalization depending on problem type. Insight problems (requiring unconscious constraint relaxation): verbalization dropped success rate from 57% to 13%. Non-insight/analytic problems (step-by-step procedures): verbalization raised success rate from 30% to 80%. Cox hazard regression interaction z=−4.6, p<0.001. Mechanism: forced concurrent verbalization occupies attentional resources needed for unconscious restructuring in insight problems, but organizes conscious stepwise execution for analytic problems. Scope: 'effortful concurrent verbalization' is the operative condition; low-effort verbalization (e.g. repeating numbers) does not disrupt insight. Kit implication: articulation-before-commitment is beneficial for procedural, multi-step agent tasks (analytic class) but could suppress creative constraint-relaxation steps; the kit should reserve articulation gates for sequential decision steps, not open-ended generation phases.

**Verify note:** PMC11942870 confirmed and fully accessible. N=120, 4 groups of 30 confirmed. All four percentages (57%, 13%, 30%, 80%) confirmed exactly. z=4.4 main effect and z=−4.6 interaction (p<0.001) confirmed — claim correctly cites the interaction z-value. Cox proportional hazards regression confirmed. The mechanism (unconscious constraint relaxation) is the paper's own framing. Kit implication (reserve articulation gates for sequential steps, not open-ended generation) is a reasonable but unvalidated transfer to LLM agent design.

---

### [key: cot-prompting-assumption-surfacing-llm]
- evidence: empirical
- confidence: medium
- group: llm-articulation
- sources: https://arxiv.org/pdf/2201.11903, https://dl.acm.org/doi/10.5555/3600270.3602070

**Claim:** Wei et al. (2022, NeurIPS, 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models') showed that prompting LLMs to articulate intermediate reasoning steps — rather than answering directly — substantially improves performance on arithmetic, commonsense, and symbolic reasoning benchmarks. PaLM 540B with 8-shot CoT achieved state-of-the-art on GSM8K math, surpassing fine-tuned GPT-3 with a verifier. Mechanism: decomposing into steps makes implicit logical connections explicit and catches error propagation mid-chain; the articulation of each step surfaces the assumption it rests on. Scope condition: benefits emerge primarily at very large model scale (>100B parameters); complex multi-step problems; flat for simple tasks. Kit implication: requiring an agent to articulate step-by-step reasoning before producing an output is an empirically validated quality mechanism for complex procedural tasks, but adds cost and negligible benefit on simple retrieval tasks.

**Verify note:** arXiv 2201.11903 confirmed. PaLM 540B 8-shot CoT achieving state-of-the-art on GSM8K and 'surpassing finetuned GPT-3 with a verifier' confirmed verbatim. Arithmetic/commonsense/symbolic benchmark types confirmed. ACL proceedings URL (dl.acm.org) returned HTTP 403. The '>100B parameters' scale threshold is accurate per the paper but was described as 'sufficiently large' in the abstract — the specific 100B figure comes from the paper body, not confirmable from the abstract alone. CoT prompting is among the most replicated LLM findings. Medium only because one cited URL was inaccessible and the scale threshold precision requires body access.

---

### [key: explicit-assumption-aggregation-llm-agent-planning]
- evidence: empirical
- confidence: medium
- group: llm-articulation
- sources: https://arxiv.org/html/2602.04326v1

**Claim:** The PCE framework (arxiv 2602.04326, 2025) tested on C-WAH and TDW-MAT multi-agent benchmarks showed that transforming fragmented implicit assumptions into structured decision trees improved task success from 62.5% (CoELA baseline) to 87.5% (PCE) on TDW-MAT, and reduced communication actions from 6-10 to 1.7 per episode. Mechanism: LLM planners generate assumptions locally and reference them implicitly in zero-shot CoT traces; this prevents detection of logical conflicts across assumptions and makes expected-gain weighting inconsistent. Explicitly extracting and aggregating assumptions into a Composer module with scored scenario trees (Expected Gain = Likelihood × Conditional Gain − Cost) enables systematic reconciliation. Scope: partial observability, multi-agent cooperation, costly communication environments; household manipulation tasks; 2-agent primary, tested to 4. Kit implication: a kit step that extracts and names all assumptions made before committing to a plan — rather than leaving them implicit in the reasoning trace — directly enables conflict detection and comparative action weighting.

**Verify note:** Source exists and is real (ICLR 2026, arxiv 2602.04326). TDW-MAT success rates CoELA 62.5% vs PCE 87.5% with GPT-4o mini: confirmed. Expected Gain formula (Likelihood × Conditional Gain − Cost): confirmed. 2-agent primary with 4-agent scalability appendix: confirmed. Mechanism description accurate. However the communication-count claim is cross-benchmark conflation: the '1.7 per episode' figure is the C-WAH result for PCE, not TDW-MAT. On TDW-MAT (where the success rate numbers come from), PCE is 3.58 and CoELA is 13.33 — not 6-10 to 1.7. The claim mixes C-WAH comms (1.70 PCE / 9.88 CoELA) with TDW-MAT success rates in a single sentence, making the communication reduction appear to apply to the same benchmark as the success improvement. That is a factual error in the synthesis, not in the source.

---

### [key: verbalizing-llm-assumptions-reduces-sycophancy]
- evidence: empirical
- confidence: medium
- group: llm-articulation
- sources: https://arxiv.org/html/2604.03058

**Claim:** A 2025 study (arxiv 2604.03058) across 9 production LLMs and 6 datasets found that explicitly verbalizing LLM internal assumptions about user intent before generating a response (open-ended verbalization + structured 9-dimension scoring) measurably predicted and controllably steered sycophancy. Linear probes on model internals achieved R²=0.64 (70B models) predicting assumption dimensions. Steering toward sycophancy-aligned assumptions increased validation sycophancy (ρ>0.89, p<0.05); steering away reduced it with reward drops ≤0.008. Mechanism: LLMs trained on human-human conversations assume high validation-seeking (mean >0.72 score) by default; explicitly surfacing this assumption creates an intervention point. Scope: effective for social sycophancy, limited for factual sycophancy; works best with ≥7B parameter models. Kit implication: adding an explicit 'what am I assuming about what the user wants here?' step before response generation is a concrete mechanism for reducing systematic assumption-driven errors in kit agent outputs.

**Verify note:** Source exists (arxiv 2604.03058, Stanford/UT Austin). Nine LLMs, six datasets, R²=0.64 for 70B models, ρ>0.89 steering toward sycophancy, mean validation-seeking >0.72, scope limitations (factual sycophancy, <7B models): all confirmed. The claim's specific 'reward drops ≤0.008' figure was not confirmed — the fetch reports '±4 scaling factors, ~10% degradation maximum,' which is a qualitatively consistent but differently-expressed result; the ≤0.008 value could not be verified from accessible content. The mechanism and all major quantitative claims are otherwise solid. Minor extrapolation: the kit implication ('add an explicit what-am-I-assuming step') is a reasonable inference from the mechanism but the paper tests automated assumption verbalization in LLM internals, not a deliberate prompt-engineering step in a pipeline.

---

### [key: self-explanation-no-transfer-critical-thinking]
- evidence: empirical
- confidence: low
- group: self-explanation-failure-modes
- sources: https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2018.00100/full

**Claim:** Heijltjes et al. (2018, Frontiers in Education, N=79 first-year students, 2×2×2 mixed design) found self-explanation prompts had no significant effect on transfer of critical thinking skills to non-practiced tasks (pretest M=36.71, posttest M=49.37, delayed M=58.02, no difference between self-explaining and control groups). For Wason and Conjunction bias tasks, self-explaining showed a negative effect (η²p=0.172). Mechanism: self-explanation failed to provoke 'stop and think' reactions because instruction was already effective; without feedback on explanation quality, poor explanations consolidated incorrect beliefs. Scope conditions where self-explanation fails: (1) no feedback on explanation quality, (2) tasks requiring inhibition of intuitive thinking, (3) classroom settings with high baseline instruction quality. Kit implication: articulation steps without a quality gate — feedback or structured prompt — may consolidate errors rather than surface them; the forcing function requires a quality-checking layer to fire correctly.

**Verify note:** Source exists (Frontiers in Education, doi 10.3389/feduc.2018.00100) but has two factual errors. First, the attribution 'Heijltjes et al. (2018)' is wrong: the first author is Lara M. van Peppen; Heijltjes is the third author. Second, the specific means cited (pretest M=36.71, posttest M=49.37, delayed M=58.02) do not match what the source reports: the fetch shows both groups at 40.40% pretest / 78.06% immediate / 79.54% delayed with no significant between-group difference. The claimed numbers may be from a subset condition or are fabricated. The 2×2×2 design claim also could not be confirmed — the fetch describes a simpler two-condition design. The η²p=0.172 negative effect for Wason/Conjunction and the general finding of no transfer difference are confirmed. The specific numerical values in the claim are unreliable.

---

### [key: cot-hallucination-obscuring]
- evidence: empirical
- confidence: medium
- group: self-explanation-failure-modes
- sources: https://arxiv.org/pdf/2506.17088

**Claim:** A 2025 study (arxiv 2506.17088) found that chain-of-thought prompting can obscure hallucination cues: the explicit reasoning chain creates a surface appearance of coherent logic that makes hallucinated conclusions harder to detect than in direct-answer outputs. Mechanism: CoT produces fluent narrative justification for incorrect conclusions, which users and downstream validators treat as evidence of correctness. Scope: most pronounced where the reasoning chain is plausible-sounding but the underlying factual premise is wrong. Kit implication: articulation is not a sufficient quality signal on its own — a kit that requires step narration must also include a factual grounding or contradiction-check step; fluent articulation of a flawed assumption is worse than silence because it forecloses challenge.

**Verify note:** Source exists (arxiv 2506.17088, EMNLP 2025 Findings). Core finding confirmed: CoT obscures hallucination detection signals by affecting internal states and token probability distributions. Mechanism (fluent reasoning creates apparent coherence that impairs detection) confirmed. However, the paper's actual finding is more nuanced than the claim represents: CoT reduces hallucination frequency while making remaining hallucinations harder to detect — a trade-off the claim omits entirely. The claim frames it as CoT making hallucinations 'harder to detect than in direct-answer outputs' without the caveat that CoT also produces fewer hallucinations. No specific quantitative results were accessible from the abstract to verify or refute the claim's numbers. The kit implication is a valid inference from the mechanism.

---

### [key: verbal-insight-constraint-relaxation-conflict]
- evidence: empirical
- confidence: low
- group: verbalization-scope
- sources: https://www.apa.org/pubs/journals/features/xlm-0000045.pdf, https://pmc.ncbi.nlm.nih.gov/articles/PMC11942870/

**Claim:** The representational change account (Ohlsson; Knoblich et al.) describes insight problem-solving as requiring constraint relaxation — releasing an implicit assumption that an object, rule, or concept can only be used one way. Empirical review confirms: verbalization during insight problems decreases solution rates by forcing conscious attention onto the current (wrong) representation, blocking the unconscious restructuring that enables constraint relaxation. Mechanism: implicit constraints feel axiomatic to the solver; articulation of the problem reinforces rather than dissolves them because the solver explains within the frame of the constraint. Scope: verbal insight problems (9-dot, matchstick arithmetic, Deer problem) where the blocking constraint is non-propositional. Kit implication: articulation-before-commitment is a counterproductive mechanism for creative ideation or problem-reframing steps in a kit; it is best restricted to execution steps after a representation has already been chosen.

**Verify note:** Partially supported but with significant problems. The PMC source (PMC11942870, Macchi et al.) confirms the core effect: insight problem verbalization 57% silent vs 13% verbalizing; non-insight 30% silent vs 80% verbalizing. However: (1) the PMC paper uses 'unconscious analytic thought' (UAT) framework, not the Ohlsson/Knoblich representational change account as the claim asserts; (2) the PMC paper studied only the Deer problem and a cryptarithmetic task — not the 9-dot puzzle or matchstick arithmetic that the claim names; those tasks are attributed to the APA PDF source which was unreadable binary; (3) the mechanism attributed to Knoblich (constraint relaxation requiring unconscious restructuring blocked by verbalization) cannot be verified from accessible sources. The directional finding is real, but the attribution of mechanism (Ohlsson/Knoblich) and the specific task list are partially unverified due to an inaccessible source.

---

### [key: practice-less-explain-more-transfer]
- evidence: empirical
- confidence: low
- group: self-explanation
- sources: https://arxiv.org/pdf/2604.00142

**Claim:** Sinha et al. (2025, arxiv 2604.00142) compared LLM-supported self-explanation versus additional practice on calculus transfer problems. Self-explanation condition improved explanation quality on novel (transfer) problems more than extra practice. Mechanism: generating explicit articulation of why a solution step applies — not repeating the procedure — builds transferable conditional knowledge. Scope: calculus domain; transfer problems (differing structurally from practice); LLM scaffolding raised explanation quality for students who would produce surface explanations unaided. Kit implication: an agent that explains why each kit step applies to the current situation — not just executes it — builds more robust behavior on edge cases; explanation quality is the diagnostic signal for whether the step's intent was internalized.

**Verify note:** Source exists (arxiv 2604.00142) but has two clear factual errors. First, the claim attributes it to 'Sinha et al. (2025)' — the actual first author is Eason Chen, and there is no author named Sinha in the 13-author list. Second, the year is wrong: the paper was submitted March 31, 2026, accepted at AIED 2026 — not 2025. The N=92 human students between-subjects design, calculus domain, LLM scaffolding mechanism, and directional finding (self-explanation outperforms extra practice on transfer problems) are all confirmed. The core mechanism claim — that explaining why a step applies builds more transferable knowledge than repetition — is directionally supported. But the attribution (wrong lead author, wrong year) means this cannot be cited as stated.

---

## Null results
- No controlled experiment directly testing rubber duck debugging with measured error rates found — the technique remains consensus-level practitioner knowledge without an RCT
- No empirical study specifically on 'explaining to a hypothetical reader before committing' as a distinct protocol found — closest analogues are self-explanation and think-aloud paradigms
- The verbalization/insight problem literature showed conflicting results — articulation helps analytic steps but hurts insight/constraint-relaxation steps, making the angle's assumed universal benefit a scope-conditioned finding

## New angles surfaced
- Verbal overshadowing effect (Schooler et al.) — articulating a visual/intuitive judgment degrades accuracy; tests whether the articulation benefit is specific to propositional/sequential tasks and absent or harmful for gestalt/pattern tasks
- Counterfactual explanations before commitment — requiring agents to state 'this would fail if assumption X is wrong' before acting, as a more targeted variant of assumption surfacing than generic self-explanation
- Pre-mortem technique (Gary Klein) — structured articulation of why a plan will fail before executing it; empirically shown to increase identification of potential problems vs post-mortem; direct analogue for kit agent step gates

