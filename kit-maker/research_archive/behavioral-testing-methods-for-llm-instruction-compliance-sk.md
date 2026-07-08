# Research Archive: Behavioral testing methods for LLM instruction compliance — SKIM two queries only

## Saturation log
- Query 1: "behavioral testing large language models prompt robustness evaluation compliance" — 6 new keys
- Query 2: "systematic review LLM evaluation methods instruction following testing" — 3 new keys
- Saturated: YES
- Gap-fill supplement (angle 173, 2026-06-30): +8 claims from vocabulary traditions absent from original queries (property-based testing, mutation testing, conformance testing, red-teaming, behavioral science/factorial design); 3 LOW claims excluded (source-broken or source-mismatch); 1 MEDIUM merged with scope caveat (self-evolving-red-team-asr: safety/alignment domain only)

---

## Claims (17)

### [key: promptrobust-adversarial-degradation]
- evidence: empirical
- confidence: low
- group: prompt-robustness
- sources: https://arxiv.org/abs/2306.04528, https://dl.acm.org/doi/10.1145/3689217.3690621

**Claim:** PromptRobust (Zhu et al., 2023) generated 4,788 adversarial prompts across 8 tasks and 13 datasets and found that contemporary LLMs are not robust to adversarial prompts. Character-level perturbations (typos, character swaps) had the most disruptive impact on compliance, more than word-, sentence-, or semantic-level changes. Mechanism: LLMs lack a robust symbolic layer that normalizes surface variation before instruction parsing; the token embedding space maps similar-looking but distinct tokens to different positions, so surface noise disrupts the attention pattern used to retrieve instruction meaning. Scope: applies to prompts framed as task instructions across sentiment analysis, NLI, reading comprehension, translation, and math; does not cover purely conversational (non-instructional) inputs. Kit implication: kit-generated prompts should be tested under character-level noise injection (simulating user typos or copy-paste artifacts) as a baseline robustness check; prompts that collapse under character perturbation are structurally fragile.

**Verify note:** Paper is real (arXiv:2306.04528, Zhu et al.), 4,788 prompts across 8 tasks and 13 datasets confirmed, and the core finding (LLMs not robust to adversarial prompts) is confirmed. However, the claim's most specific assertion — that character-level perturbations were most disruptive — is a direct inversion of the source. The paper found word-level attacks caused the largest average drop (~33%), with character-level second (~20%). Any kit implication that prioritizes character-level testing over word-level testing based on this claim would be misdirected. The second cited source (dl.acm.org) returned HTTP 403 and could not be verified.

---

### [key: dual-task-compliance-drop]
- evidence: empirical
- confidence: high
- group: instruction-compliance-under-load
- sources: https://arxiv.org/html/2603.23530

**Claim:** The prospective memory study (arxiv 2603.23530, 2025) found that across three model families (o4-mini, DeepSeek-V3.1, Llama-3.3-70B-Instruct) and over 8,000 prompts, formatting compliance dropped 2-21% when models simultaneously performed complex cognitive tasks. The effect was not uniform: terminal constraints (end-of-response requirements) degraded up to 50%, and joint compliance with five stacked constraints fell below 32.5% under high cognitive load. Mechanism: LLMs allocate finite representational bandwidth across concurrent goals; format-maintenance is a lower-priority background goal that loses competition with primary task accuracy as task difficulty increases — analogous to prospective memory failure in human dual-task paradigms. Scope: effect scales with task difficulty (GSM8K showed far larger drops than TriviaQA); stacking multiple constraints compounds degradation non-linearly; long-context tasks produce additional spatial compartmentalization failures. Kit implication: kit instruction sets that stack multiple behavioral constraints (tone + format + length + avoidance rules) should be stress-tested against high-complexity tasks, not just simple ones; compliance numbers from easy benchmarks will overestimate real-world performance.

**Verify note:** Paper exists (arXiv:2603.23530). The three model families (o4-mini, DeepSeek-V3.1, Llama-3.3-70B-Instruct), 8,000+ prompts, 2–21% compliance reduction, and up to 50% terminal-constraint degradation are all confirmed. The 32.5% joint-five-constraint figure is plausible but could not be independently pinned from the fetched summary. Minor date inaccuracy: the fetched version is dated June 2026 (v2), not 2025 as the claim states. Core numerical and structural claims are well-supported.

---

### [key: terminal-constraint-vulnerability]
- evidence: empirical
- confidence: high
- group: instruction-compliance-under-load
- sources: https://arxiv.org/html/2603.23530

**Claim:** The prospective memory study (arxiv 2603.23530, 2025) identified five specific failure archetypes through manual inspection of compliance failures: Domain Shift (55 cases — constraints dropped at content transition points), Structural Abandon (51 cases — formatting replaced when generation shifts topic), Terminal Omission (44 cases — required ending produced then overrun), Spatial Compartmentalization (19 cases — global constraints applied only to isolated sections), and Content/Length Failure (18 cases). Terminal constraints were the highest-risk category. Mechanism: autoregressive generation means later tokens have no explicit backward pointer to earlier formatting requirements; the model must hold format goals in implicit activation across the full generation, which decays as output length increases. Scope: tested across 15 IFEval instruction categories; terminal omission is specific to end-anchored requirements. Kit implication: kit prompts should place the highest-priority behavioral constraint both at the start AND end of the instruction block (salience-enhanced placement); terminal constraints must be treated as a separate high-risk class requiring redundant reminder placement.

**Verify note:** All five failure archetype names and case counts match the source exactly (Domain Shift 55, Structural Abandon 51, Terminal Omission 44, Spatial Compartmentalization 19, Content/Length 18). Terminal-constraint highest-risk finding confirmed. The '15 IFEval categories' figure could not be independently confirmed. Single study with manually-inspected taxonomy — no replication found. Directionally solid; kit implication is sound within those single-study limits.

---

### [key: salience-restore-compliance]
- evidence: empirical
- confidence: medium
- group: instruction-compliance-under-load
- sources: https://arxiv.org/html/2603.23530

**Claim:** The prospective memory study (arxiv 2603.23530, 2025) found that a salience-enhanced prompt — one that restates format constraints as explicit reminders alongside the task — restored compliance to 90-100% across conditions where standard prompts showed 2-50% degradation. Mechanism: explicit restatement raises the activation weight of formatting goals at the moment of generation, counteracting the priority-decay mechanism; it functions as an in-context 'prospective cue' that triggers the dormant constraint before each output section. Scope: the recovery effect was consistent across all three tested model families; the single data point suggesting full recovery comes from one study and should be treated as indicative rather than definitive. Kit implication: kits that produce multi-constraint instruction prompts should automatically append a constraint-reminder suffix; this is a low-cost, high-yield mitigation that can be implemented as a standard template wrapper rather than requiring model-level changes.

**Verify note:** The 90–100% recovery finding is confirmed from the source. However, the claim says 'across all conditions' where the source says 'in many settings' — a meaningful overstating of scope. The activation-weight mechanism is an inference from behavioral outcomes, not a mechanistically verified internal measurement. Consistent across all three model families, which is meaningful breadth, but no independent replication. The paper's own caveat (treat as indicative) is honestly reproduced in the claim.

---

### [key: drfr-decomposed-evaluation]
- evidence: empirical
- confidence: high
- group: evaluation-methodology
- sources: https://arxiv.org/html/2401.03601

**Claim:** InFoBench (2024, arxiv 2401.03601) introduced the Decomposed Requirements Following Ratio (DRFR): complex instructions are broken into atomic sub-criteria; compliance is scored as (criteria met) / (total criteria). Applied to 500 instructions with 2,250 decomposed questions across 72+ domains and 5 constraint types (Content, Linguistic, Style, Format, Number), the study found GPT-4 achieved 89.4% DRFR — meaning even the best tested model failed more than 1 in 10 individual requirements. All six tested models (GPT-4, GPT-3.5, Claude-2.1, Gemini-Pro, Llama-2-70B, Vicuna-13B) showed >10% failure rate. Mechanism: holistic pass/fail scoring conceals partial compliance — a model that satisfies 9 of 10 sub-requirements scores the same as one satisfying 0; DRFR makes the failure surface visible. Scope: tested on single-turn instruction following; multi-turn or agentic settings not covered. Kit implication: kit behavioral tests should decompose each behavioral rule into atomic checkable criteria and score DRFR-style rather than binary pass/fail; a kit prompt that passes binary evaluation may still be failing 10-20% of its sub-requirements.

**Verify note:** Paper is real (arXiv:2401.03601, 2024). DRFR metric confirmed. 500 instructions, 2,250 decomposed questions, five constraint types, six-model list, and GPT-4's ~89% DRFR all match. One inaccuracy: the claim states '72+ domains' but the source reports 143 distinct domains — a substantial undercount. This does not affect the core claim or kit implication but is an inaccuracy in the stated figure.

---

### [key: number-and-linguistic-constraints-hardest]
- evidence: empirical
- confidence: medium
- group: constraint-failure-taxonomy
- sources: https://arxiv.org/html/2401.03601

**Claim:** InFoBench (2024, arxiv 2401.03601) found that across all six tested models, Number constraints (counting, proportions, quantities) and Linguistic constraints (atypical language patterns) were the hardest sub-categories of instruction following, with all models showing disproportionately high failure rates on these categories relative to Content, Style, and Format constraints. Mechanism: number constraints require exact arithmetic tracking through generation, which conflicts with the probabilistic token-selection mechanism; linguistic constraints require departing from the model's highest-probability linguistic patterns, which is suppressed by the default temperature-sampling behavior. Scope: finding applies across both closed-source (GPT-4, Claude-2.1) and open-source (Llama-2-70B) models, suggesting it is architecture-general rather than model-specific. Kit implication: kit instruction templates should avoid encoding behavioral requirements as number constraints (e.g., 'use exactly 3 examples') or atypical linguistic constraints; where such constraints are necessary, they should be marked as high-risk and tested with elevated sample sizes.

**Verify note:** The constraint-difficulty ranking (Number and Linguistic lowest, Content and Style highest, Format intermediate) is directly confirmed by the source and holds across both closed-source and open-source models. 'Disproportionately high' adds unquantified magnitude framing not independently verified. The mechanistic explanation (arithmetic tracking vs. probabilistic token selection) is a plausible inference, not an experimental finding. Single study with no cited replication.

---

### [key: llm-judge-positional-bias]
- evidence: empirical
- confidence: low
- group: evaluation-methodology
- sources: https://arxiv.org/pdf/2410.07069

**Claim:** ReIFE (arxiv 2410.07069, 2024) found that LLM judges used to evaluate instruction-following compliance exhibit systematic positional bias — preference for responses based on presentation order rather than quality — and self-preference bias, where judges favor outputs from models of the same family. Mechanism: autoregressive LLMs assign higher likelihood to earlier-positioned options due to attention asymmetry in comparative prompts; self-preference arises because models are trained on their own style distribution, making same-family outputs appear more fluent to them. Scope: documented across widely-used benchmarks AlpacaEval and MT-Bench; affects cross-model comparison evaluations specifically; single-response rubric scoring (no comparison) is less affected. Kit implication: kit behavioral testing pipelines that use LLM-as-judge for compliance scoring should randomize response ordering across evaluations, use multiple judges from different families, or prefer deterministic code-based checkers over LLM judges where the compliance criterion is expressible as a rule.

**Verify note:** Paper is real (arXiv:2410.07069, 2024). ReIFE is a meta-evaluation suite — confirmed. However, the claim misattributes findings to this paper. Positional bias is acknowledged and mitigated methodologically but not characterized as a primary empirical finding. Self-preference bias is cited from prior literature, not established as an original result of ReIFE. MT-Bench is not confirmed as one of the paper's discussed benchmarks (the paper covers AlpacaEval, ArenaHard, WildBench). The paper's actual focus is evaluating the accuracy of evaluation protocols, not characterizing judge biases. The biases described are real phenomena in the LLM literature but are incorrectly attributed as findings of this specific paper.

---

### [key: robustness-three-dimensional-taxonomy]
- evidence: consensus
- group: evaluation-methodology
- sources: https://arxiv.org/pdf/2310.19736, https://arxiv.org/pdf/2508.15361

**Claim:** The LLM robustness evaluation literature (consolidated in multiple 2023-2025 surveys) has converged on a three-dimensional taxonomy: (1) prompt robustness — sensitivity to surface changes in how instructions are phrased; (2) task robustness — consistency across semantically equivalent task framings; (3) alignment robustness — stability of behavioral guardrails under adversarial pressure. Each dimension requires distinct test designs: prompt robustness uses perturbation attacks, task robustness uses paraphrase benchmarks, alignment robustness uses red-teaming. Mechanism: the three dimensions fail via distinct pathways (token-level noise, semantic framing effects, and adversarial intent exploitation respectively), so a test suite addressing only one dimension gives a false sense of overall robustness. Scope: taxonomy is descriptive consensus from survey literature, not validated by a single controlled experiment. Kit implication: a kit behavioral test suite should include at minimum one test class per dimension; a kit evaluated only on prompt robustness (the most common current practice) is leaving two out of three failure modes untested.

---

### [key: dual-task-accuracy-tradeoff]
- evidence: empirical
- confidence: medium
- group: instruction-compliance-under-load
- sources: https://arxiv.org/html/2603.23530

**Claim:** The prospective memory study (arxiv 2603.23530, 2025) found a bidirectional tradeoff: adding format constraints reduced GSM8K math accuracy from 93% to 27% for one tested model, while simultaneously showing format compliance degradation. Mechanism: format-maintenance and task accuracy compete for the same representational capacity; enforcing one suppresses the other, creating a Pareto frontier rather than independent dimensions. Scope: the 93% to 27% drop is a single model's extreme case; the general tradeoff was consistent across all three models but magnitude varied. Kit implication: kits should not assume behavioral constraints (tone, format, avoidance rules) are free additions to task prompts; each constraint added to a task prompt imposes a measurable accuracy cost on the primary task, and this tradeoff must be surfaced in kit documentation rather than treated as a zero-cost feature.

**Verify note:** The 93%→27% GSM8K accuracy drop for one model under format constraints is confirmed. The bidirectional tradeoff finding (format and accuracy competing) is genuine. The 'Pareto frontier' framing adds formal economic structure not explicitly established by the study — the paper shows correlation and behavioral outcomes, not a formal optimization tradeoff. The claim correctly flags this as an extreme single-model case and acknowledges variation across models. 2026 preprint, not yet peer-reviewed.

---

---

### [key: pbt-test-oracle-gap]
- evidence: empirical
- confidence: HIGH
- group: software-testing-methodology
- sources: https://arxiv.org/abs/2605.15229

**Claim:** PBT-Bench (2026, arXiv:2605.15229 — Lucas Jing et al.) constructed a benchmark of 100 property-based testing problems across 40 Python libraries with 365 injected bugs, and found that LLM agents achieved bug detection rates of 42.1–83.4% with structured prompting vs. 31.4–76.7% without. The core difficulty is the test oracle problem: agents must infer implicit semantic invariants from documentation rather than from explicit pass/fail examples — requiring genuine semantic reasoning about WHAT SHOULD be universally true, not pattern-matching against known failures. Mechanism: property-based testing requires two distinct cognitive steps — (1) identify a property that should hold across all valid inputs, then (2) construct an input generator that exercises the boundary region where the property might break. LLMs trained on example-driven data are structurally biased toward step 2 (generate concrete inputs) and underperform on step 1 (specify the invariant). Scope: structured prompting (Hypothesis scaffolding) improved mid-tier models by 20+ percentage points but produced no gain or degradation in stronger models — scaffold fit is model-tier-dependent. Different model architectures failed on systematically distinct problem subsets, producing persistent coverage gaps no single model resolves. Kit implication: when a kit is asked to generate behavioral tests from a rule specification, the harder problem is not generating test inputs but specifying what the correct output should be (the oracle); kit test-generation procedures should explicitly require the agent to state the behavioral invariant before generating inputs, not assume the invariant is self-evident.

**Verify note:** Source confirmed (arXiv:2605.15229, Lucas Jing et al., 2026). All primary numbers verified: 100 problems, 40 libraries, 365 bugs, 42.1–83.4% structured vs 31.4–76.7% unstructured, 20+ percentage-point mid-tier lift, degradation in some stronger models, architecture-specific failure gaps. The "two distinct cognitive steps" framing and the claim that LLMs are "structurally biased toward step 2" are plausible interpretive inferences, not verbatim findings — treat as author synthesis of behavioral evidence, not directly measured. No contradicting studies found. Verdict: HIGH.

---

### [key: pbt-llm-unsound-property-generation]
- evidence: empirical
- confidence: MEDIUM
- group: software-testing-methodology
- sources: https://arxiv.org/abs/2605.15229, https://arxiv.org/pdf/2307.04346

**Claim:** A documented failure mode for LLM-generated property-based tests is generating unsound properties: a property assertion that appears to pass all tested inputs but is actually incorrect relative to the true specification — the test passes because the generator never reaches the region where the property breaks, not because the property is valid. This is distinct from ordinary test failure; it is a false green. Mechanism: LLMs synthesize properties from training-distribution examples, which tend to cluster in the high-probability input region; the low-probability boundary region — where bugs live — is exactly the region the generated strategy under-explores. Scope: documented across two independent studies (PBT-Bench 2026, Vikram et al. 2023 arXiv:2307.04346); the phenomenon is consistent across model families tested. Kit implication: kit-generated behavioral tests that use generative input sampling (random prompt variants, fuzz inputs) must include an explicit boundary-case generation step; a passing test suite that never attempted edge inputs is an untested claim, not a verified one.

**Verify note:** Shrinking claim unsupported: Vikram et al. (arXiv:2307.04346) does not discuss shrinking or counterexample minimization. The boundary-region mechanism is an inference layered onto both sources, not a stated finding of either. The underlying phenomenon (unsound PBT generation) is real and supported; specific mechanistic claims (boundary-region bias, shrinking) are extrapolations. Verdict: MEDIUM — phenomenon real, mechanism overstated relative to source support.

---

### [key: semantic-mutation-testing-agents]
- evidence: empirical
- confidence: HIGH
- group: software-testing-methodology
- sources: https://arxiv.org/pdf/2603.08806

**Claim:** TDAD (Test-Driven AI Agent Definition, Rehan 2026, arXiv:2603.08806) introduced semantic mutation testing for LLM agents: after a behavioral specification is compiled into a prompt, a separate coding agent generates plausible faulty prompt variants (mutants), and the test suite's ability to detect those mutants is scored. Empirically: mutation detection scores ranged 86–100% across tested agents, with 97% regression safety scores when specifications changed. The core finding is that visible test suites (tests the agent sees during compilation) can be gamed — agents optimize for those tests specifically — while hidden test suites reveal true generalization. Mechanism: a mutant that is "plausible, consequential, and activatable" exercises the specification boundary; a test suite that achieves 100% visible-test pass but fails on mutants has overfit to the test surface rather than learning the behavioral contract. Scope: applied to tool-using agents with behavioral rule specifications; mutation operators target semantic changes to the prompt, not syntactic code changes as in traditional mutation testing. Kit implication: kit behavioral test suites should include a held-out hidden test partition that is never exposed to the generation/compilation step; mutation scores on the hidden partition are a more reliable indicator of kit prompt quality than visible test pass rates.

**Verify note:** Source confirmed (arXiv:2603.08806, Tzafrir Rehan). TDAD acronym, 86–100% mutation scores, 97% regression safety score, visible/hidden test split methodology all confirmed. The "gaming" framing (intentional optimization toward visible tests) is a mechanistic interpretation not directly proven by the study design — the hidden split produces behaviorally distinguishable results, but whether that is intentional gaming vs. normal overfitting is an inference. Kit implication is valid regardless of mechanism. Verdict: HIGH.

---

### [key: agent-prompt-testing-neglect]
- evidence: empirical
- confidence: MEDIUM
- group: software-testing-methodology
- sources: https://arxiv.org/html/2509.19185

**Claim:** An empirical study of testing practices across 39 open-source AI agent frameworks and 439 agentic applications (Hasan et al. 2026, arXiv:2509.19185) found that the Trigger component — prompts and instructions — appears in approximately 1% of all tests, despite being the primary behavioral specification mechanism for LLM agents. Assertion-Based Testing dominates (>70% of tests in both frameworks and applications); FM-specific testing patterns appear in 0–1.1% of cases. Plan Body (FM-based reasoning) is covered in less than 5% of tests. Mechanism: practitioners inherit software testing discipline from pre-LLM contexts where the "source" was code, not prompts; the conceptual shift to prompts-as-specification has not propagated into testing practice at scale. Scope: 39 frameworks and 439 applications — large but open-source-biased; proprietary enterprise agents may differ. Kit implication: the gap between what practitioners test (outputs, tool calls, artifacts) and what actually governs LLM behavior (prompts, system messages) is the dominant blind spot in current agent testing practice; a kit behavioral test suite that covers prompts as first-class test targets is differentiated from standard practice, not merely good hygiene.

**Verify note:** Source confirmed (arXiv:2509.19185, Mohammed Mehedi Hasan et al.). Study scope (39 frameworks, 439 apps), ~1% Trigger coverage, <5% Plan Body, ~1% DeepEval usage all confirmed. Specific Assertion-Based Testing percentages (81.5% framework / 72.9% application) were not returned by fetched abstract — the source confirms dominance of deterministic component testing (>70%) but exact ABT percentages unconfirmed. Open-source-only bias is a genuine scope limitation. Verdict: MEDIUM — headline finding solid, specific ABT percentages unconfirmed.

---

### [key: agent-regression-behavioral-fingerprint]
- evidence: empirical
- confidence: HIGH
- group: software-testing-methodology
- sources: https://arxiv.org/html/2603.02601v1

**Claim:** AgentAssay (Bhardwaj 2026, arXiv:2603.02601) demonstrated that behavioral fingerprinting — characterizing an agent's behavior distribution across multiple runs rather than asserting a single pass/fail — achieves 86% regression detection power in cases where binary pass/fail testing has 0% detection power. The framework uses Sequential Probability Ratio Test (SPRT) statistics, reducing required test trials by 78% while maintaining rigorous detection guarantees. Full evaluation cost across 7,605 trials was $227 — demonstrating that statistically rigorous behavioral regression testing is not cost-prohibitive. Mechanism: LLM agents are non-deterministic; a single run can pass or fail for reasons unrelated to a genuine behavioral change; SPRT accumulates evidence across runs until the probability of a false positive or false negative drops below a configurable threshold. Binary pass/fail at n=1 has no statistical power against stochastic systems. Scope: validated across 5 language models; covers 6 test categories including coverage, contracts, metamorphic relations, mutation testing, regression detection, and behavioral characterization. Kit implication: kit behavioral tests must be designed for stochastic systems — running each test once and recording pass/fail is statistically indefensible for any behavioral rule that the model does not satisfy deterministically; at minimum, multiple runs with aggregate scoring are required.

**Verify note:** Source confirmed (arXiv:2603.02601v1, Varun Pratap Bhardwaj, independent researcher). 86% detection power vs 0% binary, SPRT 78% trial reduction, 7,605 trials, $227 cost, 5 models all confirmed. One correction: the six test category labels as stated in the claim match the source; original gap-fill archive had slightly imprecise labels ("prompt mutation", "behavioral contracts") — corrected here to match source labels. Independent researcher paper, not yet peer-reviewed; no replication. SPRT is an established statistical method correctly applied. Verdict: HIGH.

---

### [key: abtest-behavior-driven-fuzzing]
- evidence: empirical
- confidence: HIGH
- group: software-testing-methodology
- sources: https://arxiv.org/html/2604.03362

**Claim:** ABTest (Dai et al. 2026, arXiv:2604.03362) applied behavior-driven fuzzing to three production AI coding agents (Claude Code, Codex CLI, Gemini CLI) and generated 647 executable test cases from 400 user-reported failures. The framework detected 642 confirmed new behavioral anomalies at 40.8% overall precision (Claude Code: 45.9%; Codex CLI: 59.9%; Gemini CLI: 53.5%). Anomaly types include: unintended side effects (file creation/deletion without authorization), inconsistent workspace state claims, and misleading escalation instead of graceful failure. Mechanism: fuzzing for behavioral compliance differs from traditional fuzzing (which targets crashes or security exceptions) — it targets instruction-following divergence: cases where the agent's stated intent and actual file-system actions disagree. Scope: benchmark performance of these agents is high; the behavioral gap appears specifically in multi-step interactive workflows not covered by standard benchmarks. Kit implication: behavioral testing against a kit's instruction rules requires multi-step execution traces, not single-turn evaluations; the anomalies that matter most (unauthorized side effects, state inconsistency) are invisible in single-turn compliance checks.

**Verify note:** Source confirmed (arXiv:2604.03362, Wuyang Dai et al.). All primary numbers verified: 647 test cases from 400 user-reported failures, 642 confirmed anomalies, 40.8% overall precision, Claude Code 45.9%, Codex CLI 59.9%, Gemini CLI 53.5%. The "47 interaction patterns and 128 action types" counts were not independently confirmed from fetched abstract — confirmed directionally (behavioral mining from historical failures). Anomaly taxonomy directionally consistent with source. Note: Claude Code performed worst on anomaly detection precision (45.9%) and Codex CLI best (59.9%). Methodological strength: real repositories, confirmed developer reports. Verdict: HIGH.

---

### [key: fsm-conformance-formality-goldilocks]
- evidence: empirical
- confidence: MEDIUM
- group: conformance-testing
- sources: https://arxiv.org/abs/2512.18940

**Claim:** FASTRIC (Jin 2025, arXiv:2512.18940) introduced procedural conformance as a metric that quantifies an LLM agent's adherence to a formal FSM (finite state machine) specification across multi-turn interactions. Testing a 3-state tutoring FSM at four specification formality levels across three model scales produced a Goldilocks result: DeepSeek-V3.2 (685B parameters) achieved perfect conformance (1.00) at formality levels L2–L4; ChatGPT-5 (~1T parameters) peaked at L3 (0.90 conformance) then collapsed to 0.39 at L4 (the most formal, step-by-step level); Phi4 (14.7B parameters) showed no stable optimum (standard deviation 0.16–0.36). Mechanism: larger models parse implicit, high-level specifications through strong priors; over-constraining them with explicit step-by-step rules conflicts with those priors and produces instruction-following collapse rather than improvement. Smaller models lack the priors to infer from implicit specifications and require explicit structure. Scope: single-domain tutoring FSM; generalization to other FSM topologies or domains is unvalidated. Kit implication: kit behavioral specifications should not maximize formal explicitness as a default; the optimal formality level for a behavioral rule is a function of the target model's capability tier, and deploying the same specification across model tiers without calibration will likely produce conformance issues in at least one tier (finding from a single FSM/domain — treat as directional, not established).

**Verify note:** Source confirmed (arXiv:2512.18940, Wen-Long Jin). FASTRIC, procedural conformance metric, three model scales, conformance scores (DeepSeek 1.00 at L2–L4; ChatGPT-5 0.90 at L3, 0.39 at L4; Phi4 SD 0.16–0.36) all confirmed. Domain confirmed as kindergarten tutoring FSM (3-state). Structural vulnerability: entire finding rests on one FSM in one domain; conformance collapse for ChatGPT-5 at L4 could be an artifact of that specific FSM's L4 representation rather than a general principle. Kit implication weakened from original gap-fill claim ("will produce collapse") to directional ("likely produce issues"). Verdict: MEDIUM — numbers confirmed, single-domain single-FSM; mechanism plausible.

---

### [key: self-evolving-red-team-asr]
- evidence: empirical
- confidence: MEDIUM
- group: red-teaming
- sources: https://arxiv.org/abs/2408.02632

**Claim:** SEAS (Self-Evolving Adversarial Safety, Diao et al. 2024, arXiv:2408.02632) demonstrated that automated red-teaming using iterative adversarial self-play — where a Red Team LLM generates attack prompts and a Target LLM defends, with both models updated from the interaction — produces escalating attack success rates against even frontier models after three iterations. The framework operates without manual red-team labor and discovers safety/alignment compliance failures that human red-teamers typically miss because the Red Team model explores a broader adversarial input distribution than human-designed attacks. Three iterations brought the Target model to "a security level comparable to GPT-4" — meaning the gap is compressed, not eliminated. Scope: evaluated on safety/alignment compliance specifically; behavioral compliance gaps in non-safety domains (e.g., format, tone, avoidance of topics) have NOT been independently tested with this methodology. Kit implication (safety rules only): one-time red-team evaluation of a kit's safety/alignment behavioral rules gives a static snapshot; periodic iterative adversarial probing is warranted because adversarial pressure evolves with model updates. Extrapolating this iterative re-testing pattern to non-safety behavioral rules (format, tone, avoidance) is a scope extension beyond the evidence — treat as a plausible hypothesis, not a validated practice.

**Verify note:** Source confirmed (arXiv:2408.02632, Muxi Diao et al., 7 authors total). SEAS framework, three-iteration self-play, "comparable to GPT-4" security level after training all confirmed. The "human miss rate" claim (Red Team finds more than human red-teamers) is stated without a direct comparison study cited — this is an inference from the escalation pattern. Kit implication deliberately narrowed from gap-fill original (which overgeneralized to all behavioral rules) to safety/alignment domain only. Verdict: MEDIUM — core framework confirmed; scope caveat required.

---

## Null results
- None (original archive)
- Q5 from gap-fill 173: No empirical study found that directly compares competing behavioral rule phrasings for the same underlying behavioral constraint in a controlled A/B or factorial design at the prompt-specification level (i.e., "does phrasing A or phrasing B of the same rule produce higher compliance?"). This remains a genuine research gap.
- Q-red-team from gap-fill 173: No study found that applies structured red-teaming methodology to non-safety compliance constraints (format, tone, avoidance). All red-teaming literature found targets safety/alignment specifically.

## New angles surfaced
- Deterministic code-based compliance checkers vs LLM-as-judge: when each is appropriate and what the precision/recall tradeoff looks like empirically
- Constraint interaction effects: how combining multiple behavioral constraint types (format + avoidance + style) compounds failure rates non-linearly — needs its own investigation beyond the five-constraint finding
- Recovery prompt engineering: salience-enhanced reminders restored compliance to 90-100% — what is the minimal effective reminder structure, and does it generalize across constraint types
- Agentic multi-step compliance: all current benchmarks test single-turn instruction following; how compliance degrades across a multi-turn agentic sequence with evolving instructions is an open empirical gap
- Rule phrasing A/B experiments (gap-fill 173): the single most direct gap — no study compares alternative phrasings of the same behavioral rule in a controlled within-subjects design; this is the experiment that would be most immediately useful for kit prompt engineering
- Mutation testing for prompt-only specifications (gap-fill 173): TDAD's semantic mutation approach is promising but limited to tool-using agent specs; extension to behavioral-rule-only prompts (no tool calls) is untested
- FSM conformance beyond tutoring domains (gap-fill 173): FASTRIC's Goldilocks formality finding needs replication with a different FSM topology and domain before the formality-calibration recommendation can be treated as general
- Multi-turn constraint drift rate (gap-fill 173): the empirical rate of drift (how many turns before compliance drops by X%) is not quantified in accessible literature — a needed measurement for kit deployment guidance

