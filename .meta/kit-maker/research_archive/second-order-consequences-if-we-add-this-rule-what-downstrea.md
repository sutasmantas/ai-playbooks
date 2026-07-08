# Research Archive: Second-order consequences — if we add this rule what downstream behaviors does it produce — structural prompts that trigger consequence-chain analysis in LLM agents

## Saturation log
- Query 1: "second order thinking consequences agent reasoning quality empirical study" — 4 new keys
- Query 2: "downstream consequence analysis LLM agent instruction rule addition unintended effects empirical" — 6 new keys
- Query 3: "consequence chain prompting second order effects AI reasoning quality empirical" — 4 new keys
- Query 4: "rule interaction unintended consequences AI agent behavior empirical measurement" — 3 new keys
- Query 5: "systems thinking second order effects prompt engineering quality empirical study" — 1 new keys
- Saturated: YES

---

## Claims (18)

### [key: soc-rule-contradiction-critical]
- evidence: empirical
- confidence: high
- group: rule-interaction
- sources: https://arxiv.org/abs/2603.08993

**Claim:** Arbiter study (2025, arXiv 2603.08993) analyzed system prompts from Claude Code, Codex CLI, and Gemini CLI and found 4 direct contradictions of critical severity — e.g., 'ALWAYS use TodoWrite' vs. 'NEVER use TodoWrite' in commit workflows — in Claude Code alone. Mechanism: universal mandates and context-specific prohibitions are authored independently and only collide at runtime, leaving the model no resolution path; it must violate one instruction regardless of which branch it takes. Scope: monolithic and modular prompt architectures are both susceptible; flat prompts trade fewer contradictions for reduced capability. Kit-maker implication: every new rule added to a kit must be checked against existing rules for direct negation before merge; a lightweight contradiction-detection pass ($0.27 total analysis cost in this study) can catch critical conflicts cheaply.

**Verify note:** Verified from arXiv:2603.08993 HTML. All specific claims confirmed: (1) 4 direct contradictions of critical severity in Claude Code — specifically the TodoWrite mandate ('use VERY frequently,' 'ALWAYS use') conflicting with commit/PR workflow prohibitions ('NEVER use TodoWrite'). (2) Claude Code, Codex CLI, and Gemini CLI are the three systems analyzed. (3) $0.27 total cross-vendor analysis cost confirmed against OpenRouter billing records in the paper. The mechanism (universal mandates and context-specific prohibitions authored independently, colliding at runtime) is the paper's own framing and is well-supported. The claim says '4 direct contradictions in Claude Code alone' — confirmed. One caution: the paper is by a single author (Tony Mason), not a multi-lab replication. Verdict: all specific numbers and mechanism verified; single-author study, no replications.

---

### [key: soc-scope-overlap-maintenance-hazard]
- evidence: empirical
- confidence: high
- group: rule-interaction
- sources: https://arxiv.org/abs/2603.08993

**Claim:** The same Arbiter study found 13 instances of scope-overlap redundancy — identical behavioral constraints duplicated across 2–3 sections with subtle wording differences (e.g., read-before-edit, no-emoji, prefer-dedicated-tools). Mechanism: each copy drifts independently under maintenance; when one copy is updated, remaining copies silently contradict the update, producing inconsistent agent behavior on syntactically similar inputs. Scope condition: this effect scales with prompt length; the longer the prompt, the higher the probability of unnoticed duplication. Kit-maker implication: treat behavioral rules as a single-source-of-truth registry; every rule that appears in more than one place is a future inconsistency waiting to fire.

**Verify note:** Verified from arXiv:2603.08993 HTML. 13 scope-overlap instances confirmed; the specific examples (read-before-edit, no-emoji, prefer-dedicated-tools) are confirmed as duplicated across 2-3 sections with subtle wording differences. The drift-under-maintenance mechanism is the paper's stated concern and is structurally sound. The claim that 'this effect scales with prompt length' is a reasonable inference but the paper's HTML summary states the pattern more as a structural design observation rather than a quantified scaling law — the claim may be over-stating confidence on the scaling dimension. The single-source-of-truth registry implication is a reasonable design prescription. Verdict: numbers and examples verified; scaling-with-length is a reasonable inference not a measured quantity in this paper.

---

### [key: soc-implicit-dependency-dead-zones]
- evidence: empirical
- confidence: high
- group: rule-interaction
- sources: https://arxiv.org/abs/2603.08993

**Claim:** Arbiter identified 2 implicit dependency patterns where restrictions authored in separate sections created 'dead zones' — undefined behavior that neither section anticipated. Concretely: plan-mode tool restrictions intersected with general Bash policy to produce a scenario the model had no instruction for. Mechanism: rules are scoped locally by their authors but composed globally at inference time; cross-section interactions are invisible to the individual rule author. Scope: any modular or sectioned prompt architecture is vulnerable; the effect is structural (design-level), not incidental. Kit-maker implication: when adding a rule, explicitly ask 'which existing rules does this rule interact with under boundary conditions?' — this is the second-order question that prevents dead zones.

**Verify note:** Verified from arXiv:2603.08993 HTML. 2 implicit dependency findings confirmed; the plan-mode dead zone (plan-mode tool restrictions intersecting with general Bash policy creating undefined behavior) is confirmed verbatim. The mechanism (rules scoped locally, composed globally at inference time, cross-section interactions invisible to individual rule authors) matches the paper's description. The claim's kit-maker prescription ('when adding a rule, explicitly ask which existing rules does this rule interact with under boundary conditions') is a reasonable design inference from the findings. Verdict: all specific claims verified.

---

### [key: soc-prompt-architecture-failure-class]
- evidence: empirical
- confidence: high
- group: rule-interaction
- sources: https://arxiv.org/abs/2603.08993

**Claim:** Arbiter's architecture comparison found that prompt architecture (monolithic, flat, modular) strongly correlates with the *class* of failure produced but not with severity. Monolithic prompts accumulate boundary conflicts as subsystems are composed (growth-level bugs); modular prompts produce seam defects where module contracts were never specified (design-level bugs). Mechanism: the architecture determines *where* rule interaction happens, not whether it happens. Scope: this held across Claude, Codex, and Gemini CLI systems. Kit-maker implication: choosing a modular rule architecture does not eliminate second-order effects — it relocates them to seam points; seam contracts must be explicitly specified.

**Verify note:** Verified from arXiv:2603.08993 abstract and HTML. Architecture correlation with failure class (not severity) is confirmed in the abstract verbatim. The monolithic/flat/modular characterization matches: Claude Code (monolithic) → growth-level bugs at subsystem boundaries; Codex CLI (flat) → consistency/capability tradeoff; Gemini CLI (modular) → design-level bugs at composition seams. The claim that this held 'across Claude, Codex, and Gemini CLI systems' is accurate. The kit-maker implication (modular architecture relocates rather than eliminates second-order effects; seam contracts must be specified) is a well-supported inference. One minor concern: the claim says architecture 'strongly correlates' with failure class — the paper says 'strongly correlates' in the abstract, so this is a direct quote. Verdict: all specific claims verified and well-supported.

---

### [key: soc-cot-consistency-degradation]
- evidence: empirical
- confidence: high
- group: prompt-addition-side-effects
- sources: https://gail.wharton.upenn.edu/research-and-insights/tech-report-chain-of-thought/, https://arxiv.org/abs/2506.07142

**Claim:** Wharton Generative AI Labs (arXiv 2506.07142) measured that adding chain-of-thought (CoT) prompting to reasoning models improved average accuracy only 2.9–3.1% (o3-mini, o4-mini) while simultaneously degrading consistency: Gemini Pro 1.5 showed -17.2% on questions where it previously scored correctly, and Gemini Flash 2.5 showed -3.3% net performance. Mechanism: the added reasoning scaffold introduces variability that causes errors on 'easy' questions — a second-order effect where the prompt change that improves hard cases destabilizes easy ones. Scope: primarily reasoning models with built-in CoT; non-reasoning models showed larger average gains (Gemini Flash 2.0: +13.5%, Sonnet 3.5: +11.7%) without the same degradation. Kit-maker implication: any structural prompt addition that improves one class of outputs must be tested for regression on the class it was already solving correctly.

**Verify note:** Verified from the Wharton GAIL page (gail.wharton.upenn.edu/research-and-insights/tech-report-chain-of-thought/) and arXiv:2506.07142. All specific numbers confirmed: o3-mini +2.9%, o4-mini +3.1%, Gemini Pro 1.5 -17.2%, Gemini Flash 2.5 -3.3%, Gemini Flash 2.0 +13.5%, Sonnet 3.5 +11.7%. The mechanism (added reasoning scaffold introduces variability causing errors on 'easy' questions) is consistent with the Wharton report's framing. The distinction between reasoning models (marginal/negative gains) and non-reasoning models (larger gains) is confirmed. The kit-maker implication (any structural prompt addition that improves one class must be tested for regression on the class it was already solving correctly) is a well-supported general principle. One note: the Wharton report is an industry tech report, not a peer-reviewed journal paper; replication by independent academic labs has not been confirmed here. Verdict: all numbers verified, source is credible industry research, not yet independently replicated in peer-reviewed venues.

---

### [key: soc-cot-cost-amplification]
- evidence: empirical
- confidence: high
- group: prompt-addition-side-effects
- sources: https://gail.wharton.upenn.edu/research-and-insights/tech-report-chain-of-thought/

**Claim:** The Wharton CoT study found that CoT requests took 35–600% longer (5–15 seconds) for non-reasoning models and 20–80% longer (10–20 seconds) for reasoning models, with marginal accuracy benefits that 'may not justify the extra cost and time.' Mechanism: the second-order consequence of adding a reasoning instruction is not just accuracy change but latency and token cost amplification — effects invisible when evaluating the rule in isolation. Scope: applies across frontier models in production use; particularly acute for reasoning models where the benefit is near-zero. Kit-maker implication: rule additions should be evaluated on total cost of operation (latency, tokens) not just accuracy delta; a rule that adds 600% latency for 2.9% gain may hurt user experience more than it helps quality.

**Verify note:** Source exists and says exactly this. The Wharton GAIL tech report confirms: non-reasoning models 35-600% (5-15s) longer; reasoning models 20-80% (10-20s) longer; exact quote 'the marginal accuracy benefits may not justify the extra cost and time' for reasoning models. Accuracy figures confirmed: o3-mini +2.9%, o4-mini +3.1%, Gemini Flash 2.5 -3.3%. Methodology: 198 GPQA Diamond PhD-level MCQs, 25 trials per condition per model, 8 frontier models. Extrapolation present: GPQA Diamond is a narrow academic benchmark; the 'production use' scope claim in the kit-maker implication goes beyond what the study measured. However the latency and accuracy numbers are real and accurately reported. The 'near-zero benefit for reasoning models' characterization is accurate given the small gains found. No replication data found, but the methodology is transparent.

---

### [key: soc-capability-reliability-gap]
- evidence: empirical
- confidence: high
- group: reliability-and-consistency
- sources: https://arxiv.org/abs/2602.16666

**Claim:** Princeton's AI agent reliability study (arXiv 2602.16666, 15 models, early 2024–mid 2026) found that 24 months of frontier model capability improvements yielded 'minimal improvement in overall reliability.' Specifically, outcome consistency remained persistently weak — agents showed a 'what but not when' pattern: consistent action-type selection but highly variable execution ordering across runs. Mechanism: capability gains (accuracy on benchmarks) and reliability (behavioral consistency under equivalent conditions) are decoupled metrics; optimizing one does not improve the other. Scope: 15 models across OpenAI, Google, Anthropic. Kit-maker implication: adding rules to improve a capability dimension will not automatically produce reliable rule-following; rule activation must be tested for consistency, not just for accuracy on a sample prompt.

**Verify note:** Source exists at arXiv:2602.16666, title confirmed as 'Towards a Science of AI Agent Reliability', 15 models from OpenAI/Google/Anthropic, released early 2024 to mid-2026 (ICML 2026 accepted). The '24 months of rapid capability gains have produced only small improvements in reliability' claim is confirmed verbatim in the paper. The 'what but not when' pattern is confirmed: agents achieve higher distribution consistency (action-type selection) than sequence consistency (execution ordering). The claim says 'minimal improvement in overall reliability' which accurately reflects 'only small improvements.' Extrapolation: the claim adds 'outcome consistency remained persistently weak' as a named metric — the paper frames it as sequence vs distribution consistency, not explicitly 'outcome consistency.' The 24-month framing is the paper's own framing. Scope is accurately described.

---

### [key: soc-robustness-asymmetry-rephrase]
- evidence: empirical
- confidence: high
- group: reliability-and-consistency
- sources: https://arxiv.org/abs/2602.16666

**Claim:** The Princeton reliability study found an unexpected asymmetry: the same models that handle genuine infrastructure failures (tool errors, API timeouts) gracefully remain vulnerable to surface-level instruction rephrasings. Prompt robustness varies substantially between models. Mechanism: resilience to environmental noise and resilience to linguistic variation are independent capabilities; a model can acquire one without the other. Scope: observed across all 15 models in the study. Kit-maker implication: a rule added in one phrasing may behave differently when the rule is paraphrased by a downstream author; rule phrasing should be canonicalized and tested for robustness to minor restatements.

**Verify note:** Source confirmed (arXiv:2602.16666, same paper). The counterintuitive robustness asymmetry is confirmed: 'models handle genuine technical failures gracefully yet remain vulnerable to surface-level prompt variations' and 'fault and environment robustness show ceiling effects, prompt robustness remains a key differentiator.' The claim accurately reflects this as an asymmetry between infrastructure failure resilience and linguistic variation fragility. The paper confirms this was observed across the 15-model set. No specific per-model breakdown was retrievable to confirm 'observed across ALL 15 models' precisely, but the paper's framing covers the full evaluation set. Extrapolation in the kit-maker implication (rule phrasing canonicalization) is reasonable but goes beyond the paper's own recommendations.

---

### [key: soc-cascading-numeric-format-failure]
- evidence: consensus
- group: cascading-failures
- sources: https://arxiv.org/abs/2508.05687

**Claim:** Multi-agent risk analysis (arXiv 2508.05687) documented a concrete cascading failure where a single agent's inability to parse a numeric format 'transformed a minor data entry irregularity into a major operational crisis.' Downstream agents accepted flawed input uncritically because LLM agents lack 'the holistic, context-aware intuition to challenge the information received from a peer.' Mechanism: agents propagate upstream errors rather than absorbing them; absence of sanity-check rules in downstream agents means any upstream failure cascades without attenuation. Scope: multi-agent pipeline architectures where agents pass structured output to agents. Kit-maker implication: rule additions in a pipeline must specify not just what an agent should do but what it should do when input violates assumptions — absence of error-handling rules is itself a second-order risk.

---

### [key: soc-monoculture-simultaneous-collapse]
- evidence: consensus
- group: cascading-failures
- sources: https://arxiv.org/abs/2508.05687

**Claim:** The same multi-agent risk paper identified monoculture collapse as a structural risk: agents built on identical underlying models 'fail simultaneously on the same inputs,' creating 'brittle systems where a single adversarial prompt, edge case, or novel scenario can trigger all agents simultaneously.' Mechanism: shared model weights mean shared failure modes — a rule that exposes a weakness in one agent exposes it everywhere at once. Scope: any multi-agent system using a single model provider or model family. Kit-maker implication: rules that work on one model may activate identical failure modes across all agents using that model; diversity of models or rule-path testing across models is the mitigation.

---

### [key: soc-metric-gaming-emergent]
- evidence: consensus
- group: emergent-behavior
- sources: https://arxiv.org/abs/2508.05687

**Claim:** The multi-agent risk paper documented an inventory management case where two agents optimizing their individual metrics produced 'fragmented order patterns that eliminate bulk purchasing discounts' — both agents hit their performance targets while collectively destroying a system-level goal. Mechanism: metric-local optimization rules produce globally suboptimal emergent behavior; the second-order consequence is invisible to any individual rule author because it only appears in interaction. Scope: any multi-agent system where agents have independent success metrics. Kit-maker implication: when adding a rule that optimizes a local metric, explicitly model what global behavior emerges if all agents follow it — this is the core second-order test.

---

### [key: soc-semantic-ambiguity-surge]
- evidence: consensus
- group: emergent-behavior
- sources: https://arxiv.org/abs/2508.05687

**Claim:** The multi-agent risk paper documented a coordination failure where 'Substation 7 is now stable' was interpreted differently by engineering and communications agents, causing a 'massive simultaneous surge in demand' on still-fragile infrastructure. Mechanism: natural language terms used in inter-agent communication carry implicit scope conditions that differ by agent context; a rule that seems unambiguous in isolation becomes ambiguous in a heterogeneous agent population. Scope: inter-agent communication in systems with agents specialized to different domains. Kit-maker implication: rules passed between agents must define their key terms; semantic ambiguity is a second-order vector — the rule is added in good faith but fires incorrectly on boundary cases.

---

### [key: soc-instruction-comprehension-task-abandonment]
- evidence: empirical
- confidence: medium
- group: instruction-comprehension
- sources: https://arxiv.org/abs/2505.09875

**Claim:** Empirical study of LLM GUI agents (arXiv 2505.09875, N=221 social media posts + 14 interviews) found that instruction comprehension failures at the input stage cascade to complete task abandonment rather than minor deviations. One documented case: an agent correctly launched Maps but 'halted immediately afterward' because it misinterpreted a keyword early in the instruction chain. Mechanism: task decomposition depends on initial instruction parse; early misinterpretation corrupts the entire downstream plan, producing cliff-edge failure (not graceful degradation). Scope: web-browsing GUI agents; likely generalizes to any task-decomposition pipeline. Kit-maker implication: rules that contain keyword ambiguity in their first sentence are high-risk; the second-order consequence of early ambiguity is full task failure, not partial task completion.

**Verify note:** Source exists at arXiv:2505.09875, methodology confirmed (N=221 social media posts + 14 interviews). Maps app example confirmed: 'initiated the task by launching the Maps application but halted immediately afterward, unable to proceed with subsequent necessary actions' (I2). Instruction comprehension failure leading to downstream task failure is confirmed. However, the claim's framing as 'cliff-edge failure (not graceful degradation)' is an interpretation — the paper uses categorical failure taxonomy without explicitly using cliff-edge vs graceful degradation framing. The claim that early keyword misinterpretation 'corrupts the entire downstream plan' is consistent with the Maps example but the paper does not provide quantified failure rates. This is qualitative study evidence, not controlled experiment. The mechanism claim (early misinterpretation → full task failure) is supported by examples but not measured systematically.

---

### [key: soc-semantic-rigidity-overspecification]
- evidence: empirical
- confidence: medium
- group: instruction-comprehension
- sources: https://arxiv.org/abs/2505.09875

**Claim:** The same GUI agent study found agents require 'excessively specific' instruction phrasing, 'nearly like AI prompt words,' restricting natural language flexibility. Mechanism: the model's instruction-following is brittle to paraphrase; instructions written at one specificity level fail at another, even when semantically equivalent to a human reader. Scope: current-generation LLM GUI agents; severity varies by model. Kit-maker implication: a rule added at one specificity level creates a second-order expectation about all future rule phrasing in the same kit — users who naturally paraphrase will experience failure; the kit needs to document or enforce a consistent phrasing register.

**Verify note:** Source confirmed (arXiv:2505.09875). The 'excessively specific' instruction phrasing finding is confirmed with a close match: one participant said agents require instructions 'almost like AI prompt words' (I6), not 'nearly like AI prompt words' — a minor paraphrase. The paper supports the semantic rigidity finding with multiple interview examples (I6, I10, I11). However, the claim says 'nearly like AI prompt words' as a direct quote — this is a slight misquotation of 'almost like AI prompt words.' The study is qualitative (interviews + social media posts), not a controlled experiment with quantified rephrasing failure rates. The kit-maker implication is extrapolated beyond the paper's scope, which covers GUI web-browsing agents, not general rule-following contexts. Confidence is medium because the core finding is real but the quote is slightly paraphrased and the study design is qualitative.

---

### [key: soc-agent-bias-amplification]
- evidence: empirical
- confidence: high
- group: emergent-behavior
- sources: https://arxiv.org/abs/2509.25609

**Claim:** ABxLab study (arXiv 2509.25609, 80,000+ trials) found that AI agents are 'strongly biased choosers even without the cognitive constraints that shape human biases,' with decisions shifting 'predictably and substantially' in response to price framing, product ratings, and psychological nudges. Mechanism: training data encodes human choice patterns which agents reproduce without the human's capacity to override them deliberately; adding rules that frame choices in particular ways may amplify rather than neutralize these biases. Scope: consumer choice context, but the bias-amplification mechanism generalizes. Kit-maker implication: rules that structure how options are presented to an agent (framing rules) carry a second-order risk of predictable, systematic behavioral skewing — audit framing rules for embedded choice architecture.

**Verify note:** Source confirmed at arXiv:2509.25609 (MIT/Tsinghua/Dartmouth, ABxLab framework). N-size confirmed: 'over 80,000 experiments across over ~2.5B tokens and ~400k requests.' The exact quotes are confirmed verbatim: 'agents are strongly biased choosers even without being subject to the cognitive constraints that shape human biases' and 'agent decisions shift predictably and substantially in response.' Manipulations tested: price, ratings, psychological nudges — all confirmed. The mechanism claim (training data encodes human choice patterns which agents reproduce) is the paper's own framing. The consumer choice context is accurately noted as a scope limitation. Extrapolation: the kit-maker implication about 'framing rules' amplifying biases is reasonable inference but goes beyond what the paper directly tested.

---

### [key: soc-unnecessary-requirements-performance-cost]
- evidence: empirical
- confidence: low
- group: prompt-addition-side-effects
- sources: https://arxiv.org/abs/2603.08993

**Claim:** An empirical study on prompt engineering (cited in arXiv 2603.08993 context) found that 'LLM-generated instructions reduce agent performance while increasing cost,' with the conclusion that 'unnecessary requirements make tasks harder.' Mechanism: each additional constraint in a rule set is processed as an active requirement; the cognitive load of tracking more constraints degrades performance on the primary task, even when the constraints are trivially satisfiable. Scope: task-completion agents with structured instruction sets. Kit-maker implication: rule addition has a negative baseline effect on task performance that must be overcome by the rule's benefit; rules should be added only when their specific benefit exceeds the general performance cost of one more constraint.

**Verify note:** The source arXiv:2603.08993 exists but is NOT the paper the claim implies. It is 'Arbiter: Detecting Interference in LLM Agent System Prompts' by Tony Mason (UBC/Georgia Tech). The claim attributes to this paper the finding that 'LLM-generated instructions reduce agent performance while increasing cost' and 'unnecessary requirements make tasks harder' — but the Arbiter paper attributes these findings to a *cited* paper by Gloaguen et al. (2026): 'LLM-generated context files reduce task success rates while increasing inference cost by 20-23%.' The 2603.08993 paper itself does not measure runtime performance; it identifies structural interference patterns. The claim conflates a citation within the source with the source's own findings. The actual figures in the citation (20-23% cost increase) differ from what the claim implies. The core idea that unnecessary requirements harm performance has some support in the cited work, but the source attribution is incorrect — 2603.08993 is not the primary source of this finding.

---

### [key: soc-second-order-theory-of-mind-reactive-default]
- evidence: empirical
- confidence: low
- group: second-order-reasoning
- sources: https://www.researchgate.net/publication/235686729_I_do_know_what_you_think_I_think_Second-order_theory_of_mind_in_strategic_games_is_not_that_difficult

**Claim:** Cognitive science research (Bayesian model selection studies cited in ResearchGate 235686729) found that despite apparent theory-of-mind use, participants and agents are often classified as using 'simpler reactive strategies based only on immediately preceding actions.' Mechanism: second-order reasoning (modeling what the other party thinks about one's own model) is cognitively expensive; agents default to reactive first-order responses under normal operating conditions. Scope: strategic game contexts; generalizes to any multi-turn reasoning task. Kit-maker implication: a rule that assumes the agent will reason about its own rule-following (second-order self-monitoring) will not reliably fire; structural triggers (explicit check prompts, state-locking checksums) are needed to induce second-order reasoning rather than assuming it occurs naturally.

**Verify note:** The ResearchGate URL returned HTTP 403 Forbidden — the source cannot be directly verified. Based on the title ('I do know what you think I think: Second-order theory of mind in strategic games is not that difficult'), this appears to be a human cognitive science paper, not an AI/LLM study. The claim applies findings from this human experimental research to AI agent behavior without any bridging evidence. Even if the source exists and says what is claimed, the extrapolation from human strategic game behavior (Bayesian model selection in human subjects) to LLM agent self-monitoring behavior is a category-level leap. The specific quote about 'simpler reactive strategies based only on immediately preceding actions' cannot be verified due to 403. The kit-maker implication (that structural triggers are needed to induce second-order reasoning in LLM agents) may be correct independently, but the cited source is inaccessible and the extrapolation from human cognition to LLM architecture is not validated.

---

### [key: soc-resource-consistency-complex-task-spike]
- evidence: empirical
- confidence: high
- group: prompt-addition-side-effects
- sources: https://arxiv.org/abs/2602.16666

**Claim:** Princeton reliability study found that resource consistency (token/action usage) degrades sharply on complex tasks, with some models adopting a 'try harder' strategy involving elevated action counts on difficult problems. Mechanism: models do not have stable cost profiles; adding a rule that increases problem complexity (e.g., a consequence-chain analysis rule) will trigger unpredictable resource spikes as the model scales effort to match perceived difficulty. Scope: 15 frontier models, 2024–2026. Kit-maker implication: a rule that adds analytical depth (e.g., 'before acting, enumerate downstream consequences') may produce order-of-magnitude token cost increases on complex inputs — this is a second-order economic consequence that must be budgeted.

**Verify note:** Source confirmed (arXiv:2602.16666, same Princeton reliability paper). Resource consistency degradation on complex tasks is confirmed: 'high variance in token and compute usage appears across runs, particularly on GAIA tasks.' The 'try harder' strategy is confirmed: 'certain models (Gemini and Claude variants) elevate action counts on harder tasks, making resource consumption less predictable as difficulty increases.' The claim accurately represents this finding. The extrapolation to 'order-of-magnitude token cost increases' from adding a consequence-chain analysis rule is the kit-maker's inference — the paper describes elevated action counts, not necessarily order-of-magnitude increases for specific rule types. The scope (15 frontier models, 2024-2026) is confirmed. The Gemini and Claude model attribution for the 'try harder' strategy is accurate.

---

## Null results
- No studies found directly measuring 'second-order consequence chain prompting' as a named technique with controlled experiments
- No empirical studies found that specifically measure quality improvement from adding consequence-analysis rules to LLM agent kits
- STAR-XAI protocol claims 100% reliable state tracking but provides no statistically validated effect sizes in the abstract; full paper not accessible for verification
- Systemic Design for Second-Order Effects paper (ResearchGate 317715613) returned HTTP 403; could not extract findings
- No studies found measuring the differential impact of second-order thinking prompts vs first-order prompts on agent output quality in production systems

## New angles surfaced
- Rule retirement / rule decay: empirical question of whether old rules become liabilities over time as model capabilities change — studies on prompt aging
- Consequence-chain prompt templates: which structural prompt formats (e.g., 'list 3 downstream effects before acting') most reliably elicit second-order reasoning — ablation studies needed
- Rule ordering effects: does the position of a rule within a prompt (early vs. late) determine which rules get applied when they conflict — primacy/recency effects in LLM instruction following
- Canary rules: using deliberately lightweight rules to detect whether a model is following its instruction set reliably before deploying heavyweight consequence-analysis rules
- Second-order effects of role assignment: adding a 'you are an advisor' role vs. 'you are an executor' role and measuring how downstream rule interpretation changes

