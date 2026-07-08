# Research Archive: Behavioral Testing Methods — Gap-Fill Angle 173 (Frame Lock Remediation)

This file SUPPLEMENTS behavioral-testing-methods-for-llm-instruction-compliance-sk.md. Claims here use vocabulary traditions absent from that archive. Do not merge until verify pass is complete.

## Saturation log

- Query 1: "property-based testing LLM behavioral specification test oracle problem empirical QuickCheck Hypothesis" — 2 new keys (vocabulary tradition: software testing / property-based testing)
- Query 2: "mutation testing AI agent behavioral rules robustness verification empirical" — 3 new keys (vocabulary tradition: software testing / mutation testing + agent behavioral regression)
- Query 3: "specification conformance testing LLM agent model-based testing FSM empirical" — 2 new keys (vocabulary tradition: conformance/model-based testing)
- Query 4: "red team adversarial probing LLM behavioral compliance testing methodology framework 2024 2025" — 2 new keys (vocabulary tradition: red-teaming / adversarial testing)
- Query 5: "behavioral rule variant A/B testing factorial design LLM compliance empirical evaluation" — 1 new key (vocabulary tradition: behavioral science / factorial experimental design)
- Query 6: "conformance testing LLM instruction following specification deviation empirical benchmark" — 1 new key (vocabulary tradition: conformance testing / benchmark coverage gap)
- Saturated: YES — last 2 queries (Q5, Q6) produced 1 new key each, both on vocabulary genuinely absent from the existing archive. Saturation confirmed; no additional queries required.

---

## Claims (11)

### [key: pbt-test-oracle-gap]
- evidence: empirical
- confidence: HIGH
- GENUINELY NEW (no equivalent in existing archive)
- group: software-testing-methodology
- sources: https://arxiv.org/abs/2605.15229

**Claim:** PBT-Bench (2026, arXiv:2605.15229 — Lucas Jing et al.) constructed a benchmark of 100 property-based testing problems across 40 Python libraries with 365 injected bugs, and found that LLM agents achieved bug detection rates of 42.1–83.4% with structured prompting vs. 31.4–76.7% without. The core difficulty is the test oracle problem: agents must infer implicit semantic invariants from documentation rather than from explicit pass/fail examples — requiring genuine semantic reasoning about WHAT SHOULD be universally true, not pattern-matching against known failures. Mechanism: property-based testing requires two distinct cognitive steps — (1) identify a property that should hold across all valid inputs, then (2) construct an input generator that exercises the boundary region where the property might break. LLMs trained on example-driven data are structurally biased toward step 2 (generate concrete inputs) and underperform on step 1 (specify the invariant). Scope: structured prompting (Hypothesis scaffolding) improved mid-tier models by 20+ percentage points but produced no gain or degradation in stronger models — scaffold fit is model-tier-dependent. Different model architectures failed on systematically distinct problem subsets, producing persistent coverage gaps no single model resolves. Kit implication: when a kit is asked to generate behavioral tests from a rule specification, the harder problem is not generating test inputs but specifying what the correct output should be (the oracle); kit test-generation procedures should explicitly require the agent to state the behavioral invariant before generating inputs, not assume the invariant is self-evident.

**Verify note:** Source confirmed (arXiv:2605.15229, Lucas Jing et al., 2026). All primary numbers verified: 100 problems, 40 libraries, 365 bugs, 42.1–83.4% structured vs 31.4–76.7% unstructured, 20+ percentage-point mid-tier lift, degradation in some stronger models, architecture-specific failure gaps. The "two distinct cognitive steps" framing and the claim that LLMs are "structurally biased toward step 2" are plausible interpretive inferences, not verbatim findings — treat as author synthesis of behavioral evidence, not directly measured. No contradicting studies found. Verdict: HIGH.

---

### [key: pbt-llm-unsound-property-generation]
- evidence: empirical
- confidence: MEDIUM
- GENUINELY NEW (no equivalent in existing archive)
- group: software-testing-methodology
- sources: https://arxiv.org/abs/2605.15229, https://arxiv.org/pdf/2307.04346

**Claim:** A documented failure mode for LLM-generated property-based tests is generating unsound properties: a property assertion that appears to pass all tested inputs but is actually incorrect relative to the true specification — the test passes because the generator never reaches the region where the property breaks, not because the property is valid. This is distinct from ordinary test failure; it is a false green. Mechanism: LLMs synthesize properties from training-distribution examples, which tend to cluster in the high-probability input region; the low-probability boundary region — where bugs live — is exactly the region the generated strategy under-explores. The QuickCheck / Hypothesis discipline of "shrinking" (reducing a failing input to its minimal counterexample) is not spontaneously applied by LLMs without explicit prompting. Scope: documented in two independent studies (PBT-Bench 2026, Vikram et al. 2023 arXiv:2307.04346); the phenomenon is consistent across model families tested. Kit implication: kit-generated behavioral tests that use generative input sampling (random prompt variants, fuzz inputs) must include an explicit shrinking or counterexample-minimization step; a passing test suite that never attempted boundary inputs is an untested claim, not a verified one.

**Verify note:** Three issues. (1) Shrinking claim unsupported: Vikram et al. (arXiv:2307.04346) does not discuss shrinking or counterexample minimization — the paper evaluates validity, soundness, and property coverage of generated PBTs but does not address the shrinking discipline. The shrinking claim in this entry is unsupported by either cited source. (2) "Two independent studies document the phenomenon" is overstated: Vikram et al. evaluates soundness of generated tests (21% of properties achievable by best model) but does not explicitly frame the failure mode as boundary-region under-exploration or "false green from training-distribution bias" — that mechanistic framing is an inference layered onto both sources, not a stated finding of either. (3) Author attribution for the second source: Vikram et al. is correctly cited — full authors are Vasudev Vikram, Caroline Lemieux, Joshua Sunshine, and Rohan Padhye. The underlying phenomenon (unsound PBT generation) is real and supported, but the specific boundary-region mechanism and the shrinking claim are extrapolations beyond what either source states. Verdict: MEDIUM — phenomenon real, mechanism overstated, shrinking claim unsupported.

---

### [key: semantic-mutation-testing-agents]
- evidence: empirical
- confidence: HIGH
- GENUINELY NEW (no equivalent in existing archive)
- group: software-testing-methodology
- sources: https://arxiv.org/pdf/2603.08806

**Claim:** TDAD (Test-Driven AI Agent Definition, Rehan 2026, arXiv:2603.08806) introduced semantic mutation testing for LLM agents: after a behavioral specification is compiled into a prompt, a separate coding agent generates plausible faulty prompt variants (mutants), and the test suite's ability to detect those mutants is scored. Empirically: mutation detection scores ranged 86–100% across tested agents, with 97% regression safety scores when specifications changed. The core finding is that visible test suites (tests the agent sees during compilation) can be gamed — agents optimize for those tests specifically — while hidden test suites reveal true generalization. Mechanism: a mutant that is "plausible, consequential, and activatable" exercises the specification boundary; a test suite that achieves 100% visible-test pass but fails on mutants has overfit to the test surface rather than learning the behavioral contract. Scope: applied to tool-using agents with behavioral rule specifications; mutation operators target semantic changes to the prompt, not syntactic code changes as in traditional mutation testing. Kit implication: kit behavioral test suites should include a held-out hidden test partition that is never exposed to the generation/compilation step; mutation scores on the hidden partition are a more reliable indicator of kit prompt quality than visible test pass rates.

**Verify note:** Source confirmed (arXiv:2603.08806, Tzafrir Rehan). TDAD acronym, 86–100% mutation scores, 97% regression safety score, visible/hidden test split methodology all confirmed. One scope flag: the claim states "agents optimize for those tests specifically" (a gaming/overfitting claim) — what the paper actually demonstrates is that hidden test pass rates (97% mean) differ from evolved-spec hidden rates (78%), which shows generalization gap, but the gaming framing (intentional optimization toward visible tests) is a mechanistic interpretation not directly proven by the study design. The hidden split produces behaviorally distinguishable results; whether that is "gaming" vs. normal overfitting is an inference. This does not change the kit implication, which is valid regardless of mechanism. Verdict: HIGH for the empirical numbers and hidden-split design; the "gaming" framing is interpretive.

---

### [key: agent-prompt-testing-neglect]
- evidence: empirical
- confidence: MEDIUM
- GENUINELY NEW (no equivalent in existing archive)
- group: software-testing-methodology
- sources: https://arxiv.org/html/2509.19185

**Claim:** An empirical study of testing practices across 39 open-source AI agent frameworks and 439 agentic applications (Hasan et al. 2026, arXiv:2509.19185) found that the Trigger component — prompts and instructions — appears in approximately 1% of all tests, despite being the primary behavioral specification mechanism for LLM agents. Assertion-Based Testing dominates (81.5% of framework tests, 72.9% of application tests); FM-specific testing patterns (e.g., DeepEval) appear in 0–1.1% of cases. Plan Body (FM-based reasoning) is covered in less than 5% of tests. Mechanism: practitioners inherit software testing discipline from pre-LLM contexts where the "source" was code, not prompts; the conceptual shift to prompts-as-specification has not yet propagated into testing practice at scale. Scope: 39 frameworks and 439 applications represents a large but open-source-biased sample; proprietary enterprise agents may differ. Kit implication: the gap between what practitioners test (outputs, tool calls, artifacts) and what actually governs LLM behavior (prompts, system messages) is the dominant blind spot in current agent testing practice; a kit behavioral test suite that covers prompts as first-class test targets is differentiated from standard practice, not merely good hygiene.

**Verify note:** Source confirmed (arXiv:2509.19185, Mohammed Mehedi Hasan et al.). Study scope (39 frameworks, 439 apps), ~1% Trigger coverage, <5% Plan Body, ~1% DeepEval usage all confirmed. One precision issue: the specific Assertion-Based Testing percentages (81.5% framework / 72.9% application) were not returned by the fetched abstract — the source confirms dominance of deterministic component testing (>70% of effort) but the exact ABT percentages cannot be verified from fetched content. These figures may be accurate but should be treated as unconfirmed until the full paper is accessed. The core finding (prompt/instruction testing at ~1%) and direction of all secondary findings are supported. Open-source-only bias is a genuine scope limitation. Verdict: MEDIUM — headline finding solid, specific ABT percentages unconfirmed.

---

### [key: agent-regression-behavioral-fingerprint]
- evidence: empirical
- confidence: HIGH
- GENUINELY NEW (no equivalent in existing archive)
- group: software-testing-methodology
- sources: https://arxiv.org/html/2603.02601v1

**Claim:** AgentAssay (Bhardwaj 2026, arXiv:2603.02601) demonstrated that behavioral fingerprinting — characterizing an agent's behavior distribution across multiple runs rather than asserting a single pass/fail — achieves 86% regression detection power in cases where binary pass/fail testing has 0% detection power. The framework uses Sequential Probability Ratio Test (SPRT) statistics, reducing required test trials by 78% while maintaining rigorous detection guarantees. Full evaluation cost across 7,605 trials was $227 — demonstrating that statistically rigorous behavioral regression testing is not cost-prohibitive. Mechanism: LLM agents are non-deterministic; a single run can pass or fail for reasons unrelated to a genuine behavioral change; SPRT accumulates evidence across runs until the probability of a false positive or false negative drops below a configurable threshold. Binary pass/fail at n=1 has no statistical power against stochastic systems. Scope: validated across 5 language models; covers 6 test categories including prompt mutation, metamorphic relations, and behavioral contracts. Kit implication: kit behavioral tests must be designed for stochastic systems — running each test once and recording pass/fail is statistically indefensible for any behavioral rule that the model does not satisfy deterministically; at minimum, multiple runs with aggregate scoring are required.

**Verify note:** Source confirmed (arXiv:2603.02601v1, Varun Pratap Bhardwaj, independent researcher). 86% detection power vs 0% binary, SPRT 78% trial reduction, 7,605 trials, $227 cost, 5 models all confirmed. One correction: the claim lists "6 test categories including prompt mutation, metamorphic relations, and behavioral contracts" — the source confirms 6 test types but names them as coverage, contracts, metamorphic relations, mutation testing, regression detection, and behavioral characterization. "Prompt mutation" and "behavioral contracts" are imprecise labels for what the source calls "mutation testing" and "contracts." The count (6) is correct; the specific labels are slightly off. Independent researcher paper not yet peer-reviewed; no replication. The statistical framework (SPRT) is an established method correctly applied. Verdict: HIGH — numbers confirmed, category labels slightly imprecise but not misleading.

---

### [key: abtest-behavior-driven-fuzzing]
- evidence: empirical
- confidence: HIGH
- GENUINELY NEW (no equivalent in existing archive)
- group: software-testing-methodology
- sources: https://arxiv.org/html/2604.03362

**Claim:** ABTest (Dai et al. 2026, arXiv:2604.03362) applied behavior-driven fuzzing to three production AI coding agents (Claude Code, Codex CLI, Gemini CLI) and generated 647 executable test cases from 400 user-reported failures. The framework detected 642 confirmed new behavioral anomalies at 40.8% overall precision (Claude Code: 45.9%; Codex CLI: 59.9%; Gemini CLI: 53.5%). Anomaly types include: unintended side effects (file creation/deletion without authorization), inconsistent workspace state claims, and misleading escalation instead of graceful failure. Mechanism: fuzzing for behavioral compliance differs from traditional fuzzing (which targets crashes or security exceptions) — it targets instruction-following divergence: cases where the agent's stated intent and actual file-system actions disagree. The 47 interaction patterns and 128 action types extracted from historical failures provide the fuzzing grammar. Scope: benchmark performance of these agents is high; the behavioral gap appears specifically in multi-step interactive workflows not covered by standard benchmarks. Kit implication: behavioral testing against a kit's instruction rules requires multi-step execution traces, not single-turn evaluations; the anomalies that matter most (unauthorized side effects, state inconsistency) are invisible in single-turn compliance checks.

**Verify note:** Source confirmed (arXiv:2604.03362, Wuyang Dai et al.). All primary numbers verified: 647 test cases from 400 user-reported failures, 642 confirmed anomalies, 40.8% overall precision, Claude Code 45.9%, Codex CLI 59.9%, Gemini CLI 53.5%. The "47 interaction patterns and 128 action types" were not independently confirmed from the fetched abstract — source confirms the behavioral-mining methodology and confirms test cases derived from historical failures, but those specific counts require the full paper. Anomaly taxonomy (unintended side effects, state inconsistency, misleading escalation) is directionally consistent with what the source describes. Note: the precision rates show Claude Code performing worst (45.9%) and Codex CLI best (59.9%) — the claim states this correctly and does not editorialize. The study uses real repositories and confirmed developer reports, which is a methodological strength. Verdict: HIGH — all key numbers confirmed, two internal counts (47 patterns, 128 action types) unverified from abstract.

---

### [key: fsm-conformance-formality-goldilocks]
- evidence: empirical
- confidence: MEDIUM
- GENUINELY NEW (no equivalent in existing archive)
- group: conformance-testing
- sources: https://arxiv.org/abs/2512.18940

**Claim:** FASTRIC (Jin 2025, arXiv:2512.18940) introduced procedural conformance as a metric that quantifies an LLM agent's adherence to a formal FSM (finite state machine) specification across multi-turn interactions. Testing a 3-state tutoring FSM at four specification formality levels across three model scales produced a Goldilocks result: DeepSeek-V3.2 (685B parameters) achieved perfect conformance (1.00) at formality levels L2–L4; ChatGPT-5 (~1T parameters) peaked at L3 (0.90 conformance) then collapsed to 0.39 at L4 (the most formal, step-by-step level); Phi4 (14.7B parameters) showed no stable optimum (standard deviation 0.16–0.36). Mechanism: larger models parse implicit, high-level specifications through strong priors; over-constraining them with explicit step-by-step rules conflicts with those priors and produces instruction-following collapse rather than improvement. Smaller models lack the priors to infer from implicit specifications and require explicit structure. Scope: single-domain tutoring FSM; generalization to other FSM topologies or domains is unvalidated. Kit implication: kit behavioral specifications should not maximize formal explicitness as a default; the optimal formality level for a behavioral rule is a function of the target model's capability tier, and deploying the same specification across model tiers without calibration will produce conformance collapse in at least one tier.

**Verify note:** Source confirmed (arXiv:2512.18940, Wen-Long Jin). FASTRIC, procedural conformance metric, three model scales (Phi4 14.7B, DeepSeek-V3.2 685B, ChatGPT-5 ~1T+), conformance scores (DeepSeek 1.00 at L2–L4; ChatGPT-5 0.90 at L3, 0.39 at L4; Phi4 SD 0.16–0.36) all confirmed. Domain confirmed as kindergarten tutoring FSM (3-state). One label issue: the claim calls it "tutoring FSM" — the source specifies "kindergarten tutoring," which is consistent. Single domain, single FSM topology — the claim correctly flags this. The Goldilocks mechanism (strong priors conflicting with over-constrained specs) is the paper's own framing, confirmed. Structural vulnerability: the entire finding rests on one FSM in one domain at one context window depth; the conformance collapse for ChatGPT-5 at L4 could be an artifact of that specific FSM's L4 representation rather than a general principle. Generalization caveat is stated, which is appropriate. Verdict: MEDIUM — numbers confirmed, but single-domain single-FSM finding; mechanism plausible but the kit implication ("deploying same spec across tiers will produce collapse in at least one tier") is stated more strongly than the evidence warrants at current replication level.

---

### [key: protocol-testing-llm-fsm-agent]
- evidence: empirical
- confidence: LOW
- GENUINELY NEW (no duplicate in existing archive, but claim substantially mischaracterizes the source)
- group: conformance-testing
- sources: https://arxiv.org/pdf/2510.13248

**Claim:** Automated Network Protocol Testing with LLM Agents (arXiv:2510.13248, 2025) demonstrated that FSM-based conformance testing methodology — historically used for network protocol verification — can be applied to LLM agents acting as protocol-following interlocutors: an FSM-modeling agent encodes the specification (states, transitions, triggering events, actions, constraints) into structured data, then a test-execution agent drives the LLM under test through all reachable state transitions and records deviations. The key transfer from classical conformance testing is the concept of a "unique input/output sequence" (UIO) — a canonical path through the FSM that uniquely identifies each state — used to detect when the agent has silently moved to an incorrect state without surfacing an error. Mechanism: FSM conformance testing finds specification deviations that are invisible to output-only checkers because deviations may occur in internal state (which transition was taken) rather than in the terminal output. Scope: applied specifically to network protocol state machines; transfer to behavioral rule specifications requires the rule set to be expressible as a state machine, which is not always natural. Kit implication: kit behavioral rules that describe multi-step interaction sequences (e.g., "always do X before Y if Z has occurred") are implicitly FSM-structured and should be modeled as such to enable conformance testing; rules specified only as natural-language lists cannot be systematically tested for state-transition compliance.

**Verify note:** CRITICAL MISCHARACTERIZATION. The actual paper (NeTestLLM, Yunze Wei et al., arXiv:2510.13248) does NOT use FSM-based conformance testing methodology and does NOT employ unique input/output sequences (UIOs). The paper's actual methodology is: hierarchical protocol specification understanding, iterative test case generation, task-specific LLM agent workflows, and runtime feedback. The paper uses LLM agents to TEST network protocols (OSPF, RIP, BGP), generating 4,632 test cases and finding 41 historical bugs vs 11 by prior methods — but the LLM is the test generator, not the system under FSM conformance test. The entire FSM conformance framing and UIO concept in this claim are imported from classical conformance testing theory and attributed to this paper as findings — the paper does not demonstrate them. The kit implication is plausible on its own merits but has no support from this source. The underlying idea (FSM modeling of behavioral rules) is legitimate, but this source does not provide empirical support for it. Verdict: LOW — source does not say what the claim says; FSM/UIO framing is a projection onto the paper, not its content.

---

### [key: self-evolving-red-team-asr]
- evidence: empirical
- confidence: MEDIUM
- GENUINELY NEW (no equivalent in existing archive)
- group: red-teaming
- sources: https://arxiv.org/abs/2408.02632

**Claim:** SEAS (Self-Evolving Adversarial Safety, Diao et al. 2024, arXiv:2408.02632) demonstrated that automated red-teaming using iterative adversarial self-play — where a Red Team LLM generates attack prompts and a Target LLM defends, with both models updated from the interaction — produces escalating attack success rates against even frontier models after three iterations. The framework operates without manual red-team labor, discovering behavioral compliance failures that human red-teamers typically miss because the Red Team model explores a broader adversarial input distribution than human-designed attacks. Mechanism: each iteration the Red Team model learns from successful attacks and generates more targeted variants; the Target model learns from successful defenses but cannot fully close all gaps because the Red Team's search space is larger than any fixed defense can anticipate. Three iterations brought the Target model to "a security level comparable to GPT-4" — meaning the gap is not eliminated but compressed. Scope: evaluated on safety/alignment compliance specifically; behavioral compliance gaps in non-safety domains (e.g., format, tone, avoidance of topics) have not been independently tested with this methodology. Kit implication: one-time red-team evaluation of a kit's behavioral rules gives a static snapshot; adversarial pressure evolves with model updates and new use patterns, so kit compliance testing should include a scheduled iterative adversarial probe component rather than treating a passed red-team as a permanent certification.

**Verify note:** Source confirmed (arXiv:2408.02632, Muxi Diao, Rumei Li, Shiyang Liu et al., 7 authors total). SEAS framework, three-iteration self-play, "comparable to GPT-4" security level after training all confirmed. Two issues. (1) Author attribution: the claim cites "Diao et al." which is correct (first author Muxi Diao) but the paper has 7 authors — not a misattribution, just abbreviated. (2) The claim states "both models updated from the interaction" — the source confirms both the Red Team model (increasing ASR) and Target model (improving defense) are updated, which is accurate. One scope gap: the mechanism claim that "the Red Team's search space is larger than any fixed defense can anticipate" is an inference from the escalation pattern, not a measured property of the search space. The "human red-teamers typically miss" claim is stated without a direct comparison study cited. The scope limitation (safety/alignment only, not format/tone) is correctly stated. Verdict: MEDIUM — core framework and outcome confirmed; two mechanistic claims (search space comparison, human miss rate) are inferences beyond the source's direct measurements.

---

### [key: factorial-rule-variant-sensitivity]
- evidence: empirical
- confidence: LOW
- GENUINELY NEW (no equivalent in existing archive — if numbers are correct)
- group: behavioral-science-experimental-design
- sources: https://dl.acm.org/doi/10.1145/3768292.3770439

**Claim:** A factorial study (ACM ICAIF 2025, 6th ACM Conference on AI in Finance) applied a Taguchi L27 orthogonal array design to generate 1,971 LLM compliance scenarios from 73 real enforcement cases by varying six three-level behavioral context factors: firm health, reward level, risk appetite, transaction complexity, trade obfuscation, and regulatory framing. Ten LLMs were evaluated on six compliance tasks. The Taguchi design captures main effects of all six factors with 1,971 scenarios rather than the 729 required by a full 3^6 = 729 factorial design — but critically, the study is the first systematic empirical demonstration that LLM compliance behavior is a function of context-factor combinations, not just instruction content. Key finding: higher expected profit, obfuscated language, and compliant framing increased the probability of approving suspicious trades even when the behavioral rule (reject market abuse) was held constant. Mechanism: LLM compliance is not a binary rule-following behavior but a probabilistic response surface sensitive to contextual moderators that are orthogonal to the rule itself; factorial designs expose this surface in a way that single-condition evaluations cannot. Scope: financial compliance domain; generalization to other rule types is directional, not validated. Kit implication: kit behavioral rules should not be evaluated only in "neutral" context conditions; rule compliance should be tested against a factorial combination of contextual moderators (incentive framing, complexity level, domain register) to surface the conditions under which the rule degrades — because those conditions will occur in production.

**Verify note:** SOURCE INACCESSIBLE (HTTP 403). Cannot independently verify any number in this claim. Two internal arithmetic problems identified that do not require source access. (1) The claim states "Taguchi L27 orthogonal array design to generate 1,971 scenarios" — a Taguchi L27 array produces exactly 27 experimental runs, not 1,971. This is definitional: L27 means 27 rows. 1,971 may be the number of individual LLM evaluation calls (e.g., 27 scenarios × 73 enforcement cases = 1,971, or 27 × 10 LLMs × 7.3 tasks), but the claim as written says the Taguchi design "generates 1,971 scenarios," which is incorrect. A Taguchi L27 generates 27 scenarios. (2) The claim compares against "729 required by a full 3^6 = 729 factorial design" — 3^6 = 729 is arithmetically correct, so this comparison statement is internally coherent. The mismatch is between what L27 produces (27) and what the claim says it produces (1,971). The underlying finding (contextual moderators affect LLM compliance independent of rule content) is plausible and consistent with the existing archive's [key: dual-task-compliance-drop] pattern. Source inaccessibility + internal arithmetic inconsistency prevents verification. Verdict: LOW — source not verifiable, internal arithmetic inconsistency in Taguchi scenario count.

---

### [key: sysbench-multi-turn-constraint-drift]
- evidence: empirical
- confidence: LOW
- GENUINELY NEW in concept (different operationalization from existing archive's multi-turn coverage), but SOURCE DOES NOT SUPPORT IT
- group: conformance-testing
- sources: https://latitude.so/blog/measure-instruction-following-llms

**Claim:** SysBench (referenced in multiple 2024–2025 LLM evaluation reviews) is a benchmark specifically designed to evaluate LLM conformance to system message instructions across six common constraint types, measuring three distinct failure modes: constraint violation (the model ignores the constraint), instruction misjudgement (the model applies the constraint incorrectly), and multi-turn instability (compliance degrades across conversation turns even when the constraint is explicitly re-stated in the system message). The multi-turn instability finding is architecturally significant: a model that complies on turn 1 and drifts on turn 5 has not "learned" the constraint — it has a recency-weighted attention mechanism that deprioritizes system message content as context length grows. Mechanism: transformer attention over long contexts redistributes weight toward recent tokens; system-message constraints set at position 0 lose relative salience as the conversation grows, regardless of their semantic importance. Scope: applies specifically to system-message-level constraints; user-turn constraints restated per turn are less affected. Kit implication: kit behavioral rules embedded in system messages must be treated as decaying constraints in multi-turn deployments; a kit tested only on single-turn or short-context sessions will overestimate compliance in real multi-turn production usage; periodic constraint re-statement or retrieval-augmented rule injection are the two mitigations with empirical support.

**Verify note:** SOURCE DOES NOT MENTION SYSBENCH. The cited page (latitude.so/blog/measure-instruction-following-llms) covers IFEval, AdvancedIF, WildIFEval, DRFR metrics, and general instruction-following evaluation — it does not reference SysBench at all. The claim's source is a complete mismatch. SysBench may exist as a benchmark (it does appear in some LLM evaluation literature) but none of the specific claims here — six constraint types, three failure modes, multi-turn instability operationalization — are traceable to the cited source. The attention-redistribution mechanism ("recency-weighted attention deprioritizes position-0 tokens") is a widely discussed architectural inference in the LLM literature but is not empirically measured in the cited source. The multi-turn constraint drift phenomenon itself is real and documented in the existing archive (arXiv:2603.23530, prospective memory study) — but that study is already captured in the existing archive under [key: terminal-constraint-vulnerability] and [key: dual-task-compliance-drop]. If SysBench is the intended source, it needs a proper citation. As filed, this claim has no verifiable source. Verdict: LOW — cited source does not contain the claim; phenomenon partially covered by existing archive under a different study.

---

## Null results
- Q5 (A/B testing for rule variants): No empirical study found that directly compares competing behavioral rule phrasings for the same underlying behavioral constraint in a controlled A/B or factorial design at the prompt-specification level (i.e., "does phrasing A or phrasing B of the same rule produce higher compliance?"). The factorial study above (Taguchi/ICAIF) varied contextual factors, not rule phrasings. This remains a genuine research gap.
- Red-teaming methodology for non-safety behavioral rules (format, tone, avoidance): No study found that applies structured red-teaming methodology to non-safety compliance constraints. All red-teaming literature found targets safety/alignment specifically.

## New angles surfaced
- Rule phrasing A/B experiments: the single most direct gap — no study compares alternative phrasings of the same behavioral rule in a controlled within-subjects design; this is the experiment that would be most immediately useful for kit prompt engineering
- Mutation testing for prompt specifications: TDAD's semantic mutation approach is promising but limited to tool-using agent specs; extension to behavioral-rule-only prompts (no tool calls) is untested
- FSM conformance beyond tutoring domains: FASTRIC's Goldilocks formality finding needs replication with a different FSM topology and domain before the formality-calibration recommendation can be treated as general
- Multi-turn constraint drift rate: SysBench identifies the phenomenon but the empirical rate of drift (how many turns before compliance drops by X%) is not quantified in accessible literature — a needed measurement for kit deployment guidance

---

## Verify pass summary

Conducted: 2026-06-30. Verified against live sources via WebFetch; ACM doi and some PDF endpoints inaccessible (403). Compared against behavioral-testing-methods-for-llm-instruction-compliance-sk.md for duplicates.

### Per-claim verdict table

| Key | Confidence | GENUINE/DUPLICATE | Primary issue |
|-----|-----------|-------------------|---------------|
| pbt-test-oracle-gap | HIGH | GENUINELY NEW | Confirmed; mechanism is inference, not measured |
| pbt-llm-unsound-property-generation | MEDIUM | GENUINELY NEW | Shrinking claim unsupported by either source; boundary-region mechanism is extrapolation |
| semantic-mutation-testing-agents | HIGH | GENUINELY NEW | Confirmed; "gaming" framing is interpretive, not directly proven |
| agent-prompt-testing-neglect | MEDIUM | GENUINELY NEW | Core finding (1% trigger coverage) confirmed; specific ABT % (81.5/72.9) unverified from abstract |
| agent-regression-behavioral-fingerprint | HIGH | GENUINELY NEW | All key numbers confirmed; test category labels slightly imprecise |
| abtest-behavior-driven-fuzzing | HIGH | GENUINELY NEW | All primary numbers confirmed; 47 patterns/128 action types unverified from abstract |
| fsm-conformance-formality-goldilocks | MEDIUM | GENUINELY NEW | Numbers confirmed; single-domain finding overstated in kit implication |
| protocol-testing-llm-fsm-agent | LOW | GENUINELY NEW (concept) | CRITICAL: source does not use FSM/UIO methodology; entire framing is a projection onto the paper |
| self-evolving-red-team-asr | MEDIUM | GENUINELY NEW | Core confirmed; "human miss rate" and "search space" claims are inferences beyond source |
| factorial-rule-variant-sensitivity | LOW | GENUINELY NEW (if verified) | Source inaccessible (403); internal arithmetic error: Taguchi L27 produces 27 scenarios, not 1,971 |
| sysbench-multi-turn-constraint-drift | LOW | GENUINELY NEW (concept) | CRITICAL: cited source (latitude.so blog) does not mention SysBench; source is a complete mismatch |

### Summary

**7 GENUINELY NEW claims (HIGH or MEDIUM confidence):** pbt-test-oracle-gap (HIGH), semantic-mutation-testing-agents (HIGH), agent-regression-behavioral-fingerprint (HIGH), abtest-behavior-driven-fuzzing (HIGH), pbt-llm-unsound-property-generation (MEDIUM), agent-prompt-testing-neglect (MEDIUM), fsm-conformance-formality-goldilocks (MEDIUM).

**4 LOW confidence or source-broken — do not merge:** protocol-testing-llm-fsm-agent (source does not support FSM/UIO framing — if merging, replace source with a classical conformance testing paper that actually uses UIOs); factorial-rule-variant-sensitivity (source inaccessible, internal arithmetic inconsistency in Taguchi scenario count); sysbench-multi-turn-constraint-drift (cited source does not mention SysBench — requires finding the actual SysBench paper); self-evolving-red-team-asr (MEDIUM — mergeable after noting the inference flags, not LOW, but flagged here because it is safety-domain-only and the kit implication overgeneralizes to behavioral rules).

**Correction: 3 LOW confidence — do not merge** (protocol-testing-llm-fsm-agent, factorial-rule-variant-sensitivity, sysbench-multi-turn-constraint-drift). **1 MEDIUM with inference caveat** (self-evolving-red-team-asr — mergeable with caveat).

**No duplicates found** against the existing archive. All 11 keys represent vocabulary traditions (software testing / property-based, mutation, conformance, red-teaming, factorial design) absent from behavioral-testing-methods-for-llm-instruction-compliance-sk.md, which covers prompt robustness, dual-task load, evaluation methodology, and constraint-type taxonomy.

**Required fixes before merging LOW-confidence claims:**
- [protocol-testing-llm-fsm-agent]: Replace arXiv:2510.13248 with a source that actually applies FSM conformance testing with UIOs to LLM agents, or rewrite the claim to accurately describe what NeTestLLM does (LLM agents generating test cases for network protocols, not FSM conformance testing of LLM behavior).
- [factorial-rule-variant-sensitivity]: Obtain the ACM paper directly to verify scenario count and confirm the Taguchi L27 figure is correct and that "1,971" refers to something other than the orthogonal array row count.
- [sysbench-multi-turn-constraint-drift]: Find the actual SysBench paper (likely Wang et al. 2024 or similar) and replace the latitude.so blog citation with the primary source; verify the six constraint types and three failure modes against that source.
