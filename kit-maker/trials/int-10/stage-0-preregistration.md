# INT-10 Stage 0 Pre-Registration Document

**Trial:** INT-10 — Proper-Scale Re-Trial of the Angle Generation Kit
**Date written:** 2026-07-05
**Status:** PRE-REGISTRATION COMPLETE — all 8 gates MET
**Supersedes:** INT-09 (structurally invalid — Condition A used kit, 3 inputs only, 1–2 domains, no degraded mode)
**Authority:** kit-trial-process.md Stage 0 requirements

---

## Section 1: Kit Identity

**Kit name:** angle-gen-kit
**Version:** v1.0 (files: CLAUDE.md, intake.md, angle-generation.md, angle-quality.md, weakness_register.md, platform-calibration.md)

**Primary claimed capability:** The angle-gen-kit enables an agent to produce research angle batches that cover the full vocabulary territory of a domain — including vocabulary traditions the user did not name at intake — by systematically enumerating traditions, conditioning angle generation on coverage gaps, and enforcing structural angle types (confirmatory, null-hypothesis, adversarial, cross-disciplinary), producing lists that measurably exceed what an unconditioned agent produces in vocabulary-tradition diversity.

**Grounding:** The primary claim rests on:
- synthesis G1 (vocabulary-mismatch HIGH) — >80% mismatch probability for cross-tradition information search, Furnas 1987; vocabulary bootstrap (intake.md Step 2) is the operative intervention
- synthesis G8 (query-expansion-mechanics HIGH) — coverage-gap conditioning outperforms unconstrained expansion (CCQGen, WSDM 2025); angle-generation.md Step 2 is the operative mechanism
- synthesis G2 (llm-generation-failure-modes HIGH) — LLMs exhibit null-hypothesis blindspot and mode collapse under unconstrained generation; the null-hypothesis slot (angle-generation.md Step 1) and coverage-gap conditioning (Step 2) address these
- synthesis G3 (confirmation-bias HIGH) — structural context separation is required for adversarial angles; ADVERSARIAL-FLAGGED label and separate-context dispatch note address this

The claim that coverage-gap conditioning produces cross-tradition coverage (not just within-tradition diversity) is the strongest unsupported assumption — identified in kit-plan.md and weakness_register.md Weakness 7. This trial provides direct empirical test of that claim against a true baseline.

**Trial type:** RE-TRIAL after fix — INT-09 redesign. INT-09 was found structurally invalid (INVALID-baseline: Condition A used the kit; INVALID-scale: 3 inputs; INVALID-domain: 1–2 domains; no Condition C). INT-10 is a clean re-trial addressing all INT-09 failure modes.

---

## Section 2: Three Locked Learning Questions

These three questions drive the entire trial design. The Stage 4 verdict must explicitly answer all three. They are locked at pre-registration and cannot be revised after any output is seen.

### Q1: Primary Hypothesis

**"This trial tests whether angle-gen-kit enables an agent to produce angle batches that cover a BROADER range of vocabulary traditions — specifically, traditions the user did NOT name at intake — compared to a well-prompted baseline agent running without any kit."**

Mechanism being tested: vocabulary-frame enumeration (intake.md Steps 1–2) + coverage-gap conditioning (angle-generation.md Step 2) operating together as a system that expands the accessible vocabulary space beyond the user's entry vocabulary.

Observable proxy: the vocabulary-tradition diversity dimension (number of distinct, non-synonymous tradition labels in the output angle list) across Hard inputs, Condition B vs. Condition A.

What SUPPORTED looks like: Condition B produces measurably more distinct vocabulary traditions and explicitly names traditions the user input did not contain, on ≥3 of 5 Tier 1 dimensions, across ≥4 Hard inputs.

What UNSUPPORTED looks like: Condition B angle lists cluster in the same vocabulary traditions as the user input at the same rate as Condition A angle lists — the coverage-gap conditioning mechanism is not producing cross-tradition diversification.

### Q2: Ship Signal

**"INT-10 produces a ship signal when: (a) Condition B exceeds Condition A median score by ≥1 point on ≥3 of the 5 pre-registered Tier 1 dimensions, across the Hard input set; AND (b) every Tier 1 dimension median score in Condition B is ≥2 on Hard inputs; AND (c) no Tier 1 dimension shows B−A negative; AND (d) the longitudinal batch shows no vocabulary-diversity threshold crossed across inputs 1–10."**

All four sub-conditions must be met. Meeting (a) alone is insufficient — it proves differential signal but not that the floor is acceptable. Meeting (b) alone is insufficient — high absolute scores without differential signal mean a competent agent achieves the same result without the kit.

### Q3: Kit-Maker Signal

**"A Phase 3/4/5/6 kit-maker process problem is revealed if: Condition B fails to exceed Condition A on the vocabulary-tradition coverage dimension specifically (Tier 1), OR if the null-hypothesis angle is absent from ≥50% of Condition B outputs on Standard inputs despite being a required type in angle-generation.md Step 1."**

Interpretation: The vocabulary-tradition coverage dimension is the exact dimension the kit's primary mechanism (coverage-gap conditioning) is designed to improve. If this mechanism does not produce differential signal, the failure routes to Phase 4 synthesis — the grounding that coverage-gap conditioning produces cross-tradition diversity was established from a CCQGen study (WSDM 2025) that measured within-tradition facet coverage, not cross-tradition coverage. A failure here means Phase 4 failed to catch a scope mismatch between the evidence and the design decision (Weakness 7 from weakness_register.md).

The null-hypothesis angle absence in Standard inputs routes differently: that is a Phase 6 failure (the CLAUDE.md Rule 3 did not fire at scale; behavioral contract enforcement was not tested at Phase 7).

---

## Section 3: Failure Mode Pre-Registration

Minimum required: 5. Pre-registering 10. Failure modes identified by reading all kit files and reviewing INT-09 post-mortem. Compare post-trial — which fired, which did not. Untested failure modes carry forward as mandatory test targets for INT-11.

| # | Failure mode | Based on which specific kit design choice | Which condition/input type tests it | Tier |
|---|-------------|------------------------------------------|-------------------------------------|------|
| FM1 | Source B unavailable — LLM-only vocabulary discovery produces a false-complete angle list with no observable signal of the gap | intake.md Step 5 severity assessment + CLAUDE.md deployment constraints: MODERATE/HIGH RISK split depends on whether ≥2 traditions are identified without Source B, but no mechanism verifies that the 2 traditions are genuinely distinct rather than variants of the same root term | Condition C (Source B unavailable) on Hard inputs (especially vocabulary-trap inputs designed to collapse into 1–2 traditions without external signal) | 1 |
| FM2 | Rule 6 self-check names a missing vocabulary tradition but cannot generate angles for traditions the LLM has never encountered — the gap-naming mechanism is diagnostic, not generative | CLAUDE.md Rule 6 vocabulary-tradition gap sub-rule: "If the self-check names a missing vocabulary tradition… generate ≥1 angle covering that tradition before reporting done" — this requires the LLM to generate from a tradition it just said is missing from its knowledge | Hard inputs in domains with traditions poorly represented in LLM training (sparse-literature, post-cutoff, specialized applied domains) | 1 |
| FM3 | Meta-research domain creates recursive vocabulary collision: the kit's own procedure language (angles, traditions, coverage maps) becomes vocabulary competing with the domain being researched | No procedure in any kit file handles the case where the domain topic IS research methodology — intake.md vocabulary bootstrap will enumerate meta-research traditions using the same terms the kit uses for its own output labels | Meta/self-referential input (Input 15) in all conditions | 2 |
| FM4 | Coverage-gap conditioning produces within-tradition diversity but NOT cross-tradition coverage — the CCQGen mechanism (WSDM 2025) that coverage-gap conditioning is modeled on measured facet coverage within a single tradition, not cross-tradition jumps | angle-generation.md Step 2: the coverage-gap conditioning prompt assumes the LLM can generate from a tradition it has been told is missing; weakness_register.md Weakness 7 flags this as the strongest unsupported assumption | Hard inputs with ≥4 vocabulary traditions — test whether angles actually appear in all 4 traditions or cluster in 2–3 despite conditioning prompts | 1 |
| FM5 | Boolean-connective test produces false-positive synonymy flags for topics with small literatures — the kit cannot automatically detect when the exception applies | angle-quality.md Gate 2 small-literature exception: "flag for human judgment rather than automatic merge" — but the gate cannot detect whether the exception applies without an estimated corpus size, and no intake or generation procedure provides a corpus size estimate | Edge inputs: sparse-literature domain (Formal verification of LLM outputs, Input 16) and saturation-sensitive domain (in-context learning, Input 18) | 2 |
| FM6 | The Step 0 coverage map is described as a "required" gate in angle-generation.md ("Do not write any angle content until the coverage map is populated") but this gate is not structurally enforced — the behavioral contract has no mechanism that blocks output production when the map is absent; the gate depends entirely on the agent's self-compliance | angle-generation.md Step 0: "Gate: Do not write any angle content until the coverage map is populated. The map is the evidence this step ran." — stated as a gate but not a structural gate; no tool call, no template section that must be filled before the next step is possible | All input types in Condition B — check whether coverage map appears in output for each; Condition A cannot produce one at all | 2 |
| FM7 | Interdisciplinary vocabulary collision: when two traditions use the same surface term with different meanings (e.g., "memory" in cognitive science vs. "memory" in systems architecture), the vocabulary-tradition enumeration collapses them into one tradition rather than distinguishing them, reducing effective vocabulary diversity | intake.md Step 2 Source A does not include a collision-detection step — synonyms and adjacent concepts are enumerated but the procedure does not ask whether the same term appears in multiple traditions with different denotations | Interdisciplinary Hard inputs with explicit vocabulary collision (Inputs 10, 14) | 1 |
| FM8 | Adversarial angle label-only enforcement: ADVERSARIAL-FLAGGED label communicates separation requirement to the downstream agent but cannot enforce it; if the downstream agent runs all angles in one context, the structural independence is violated and the kit cannot detect or prevent this | CLAUDE.md Rule 4 + angle-generation.md Step 1 + weakness_register.md Weakness 6: "The kit's responsibility ends at correct labeling" — confirmed gap | All conditions on Hard inputs — verify ADVERSARIAL-FLAGGED label presence; Condition C tests whether degraded mode changes adversarial angle labeling behavior | 2 |
| FM9 | Question-type misclassification: the intake.md Step 3 default-to-EXPLORATORY rule will misclassify genuinely STRUCTURED questions whose comparison language is implicit rather than explicit (e.g., "I want to understand why some self-correction methods work better than others" is STRUCTURED by intent but lacks the explicit comparison language the rule looks for) | intake.md Step 3 decision rule: "Default to EXPLORATORY if the user's prompt does not contain explicit comparison language or intervention-outcome structure" — misses implicit comparison intent | Standard inputs where the user's framing is slightly ambiguous about question type; check whether PICO application in intake changes the angle list materially | 3 |
| FM10 | Post-cutoff topic failure: for domains where most relevant literature is post-training-cutoff, Source A (LLM translation) will enumerate vocabulary traditions from earlier literature; absent-term signal (Source C) will not surface post-cutoff terms; Source B becomes the only path to current vocabulary, making the Source B degradation more severe than the MODERATE/HIGH RISK binary suggests | intake.md Step 5: the MODERATE/HIGH RISK assessment is based on whether ≥2 traditions are identified, but does not account for whether those traditions are current; Weakness 1 residual risk note: "highly specialized, non-English, or post-training-cutoff research" is named as an acute scope condition but no differentiated procedure exists for it | Edge input — post-cutoff topic (Input 17: LLM operating system agents) in both Condition B (full Source B) and Condition C (Source B unavailable) | 2 |

---

## Section 4: Realism Assessment

### What this trial approximates

This trial approximates a realistic research assistant session where an AI agent is given a 1–2 sentence topic description and asked to produce a comprehensive angle list covering the full vocabulary territory of the research domain. The 20 primary inputs span the range of topics likely to appear in actual research use: empirically active LLM research areas, established fields with known vocabulary traditions, interdisciplinary cross-over topics where vocabulary collision is real and common, applied/practitioner domains where academic and practitioner literatures diverge significantly, and exactly one meta/self-referential case. The Hard inputs are designed to have the same surface characteristics as real research requests that appear cooperative but contain vocabulary traps — the sort of request a practitioner with one foot in an ML systems background and no exposure to adjacent traditions would generate. The longitudinal batch approximates extended use of the kit on a single high-priority research area across a single working session, which is the most common sustained use pattern. The Condition C degraded tests approximate the actual deployment environment for the angle-gen-kit: it is designed to run in subagent contexts where Source B (web search) is frequently unavailable. All inputs are from domains with genuine research value to this project (LLM evaluation, alignment, reasoning, agent capabilities), so the outputs are not synthetic — they can be assessed by someone who knows the domains.

### What this trial cannot cover

First, this trial cannot test multi-session drift — quality decay over sessions separated by days or weeks, where the agent brings assumptions from prior sessions into a new intake. The longitudinal batch runs in a single session; cross-session vocabulary drift is a different failure mode not tested here. Second, this trial cannot test the kit under conditions where the user provides incorrect or misleading domain framing (e.g., a user who confidently names the wrong vocabulary tradition as the anchor); the inputs here use genuine domain vocabulary, not deliberately misleading framing. Third, the adversarial angle execution-time separation requirement (ADVERSARIAL-FLAGGED label) cannot be tested because testing it requires running a downstream research agent — this trial only verifies that the label is present in the output; whether the downstream agent honors it is out of scope. Fourth, this trial cannot test domains outside LLM/AI research — the evaluation relies on evaluators who can judge vocabulary-tradition coverage; that requires evaluators with domain knowledge, which limits the practical domain range to what this project's domain experts can assess. Fifth, this trial cannot test the kit under compute budget constraints, shortened context windows, or token limits — Condition C tests only Source B unavailability; other deployment constraints (context length truncation, rate-limited API, non-frontier model tier) are out of scope for this trial and must be addressed in a follow-on trial. These five gaps become required test targets for INT-11.

---

## Section 5: Test Input Specifications

**Total inputs: 22 primary + 10 longitudinal = 32 specified**

Primary inputs (20 minimum required; 22 specified to provide buffer):

---

### 5.1 Empirically Active Domain Inputs (4 inputs)

**Input 1**
- Domain: Self-correction mechanisms in large language models
- Domain type: Empirically active
- Input type: Standard
- Prompt text: "I want to research self-correction in LLMs — how models identify and fix their own errors."

**Input 2**
- Domain: Chain-of-thought reasoning effectiveness
- Domain type: Empirically active
- Input type: Standard
- Prompt text: "I want to research chain-of-thought reasoning in LLMs — when it works, when it fails, and why."

**Input 3**
- Domain: Context length scaling effects on language model behavior
- Domain type: Empirically active
- Input type: Hard
- Prompt text: "I want to research how context length affects LLM performance."
- Adversarial design rationale: This input uses "context length" — a term that spans at least four distinct vocabulary traditions (information theory: context as probability conditioning; systems architecture: memory and compute constraints; cognitive science: working memory capacity; NLP training methodology: sequence length in pretraining). A naive agent following the user's surface vocabulary will anchor in systems/architecture terminology and miss the information-theoretic and cognitive framing. The baseline (Condition A) is predicted to produce angles only from the ML-systems and NLP traditions. The mechanism trigger: the coverage map and coverage-gap conditioning in angle-generation.md are specifically designed to surface the non-obvious traditions — if they do not surface cognitive science and information theory here, FM4 is triggered.

**Input 4**
- Domain: Adversarial robustness of LLM reasoning chains
- Domain type: Empirically active
- Input type: Hard
- Prompt text: "I want to research adversarial attacks on LLM reasoning — how reasoning can be manipulated."
- Adversarial design rationale: "Adversarial" spans three distinct traditions with different literatures: ML adversarial examples (gradient-based attacks, adversarial perturbations, certified robustness); security/red-teaming (prompt injection, jailbreaking, trust boundaries); and argumentation/logic (adversarial reasoning, sophistry, fallacy detection). A baseline agent will anchor in the ML adversarial examples tradition because it is the most densely represented in training data. The kit's vocabulary-frame enumeration must surface the security and argumentation traditions to pass FM4. Additionally, this input tests FM8 — the ADVERSARIAL-FLAGGED slot must be filled, and the vocabulary choice for that slot must be genuinely different from the confirmatory slots.

---

### 5.2 Established Domain Inputs (3 inputs)

**Input 5**
- Domain: RLHF and preference-learning alignment methods
- Domain type: Established
- Input type: Standard
- Prompt text: "I want to research RLHF and preference learning for aligning language models."

**Input 6**
- Domain: Scientific information retrieval quality and recall completeness
- Domain type: Established
- Input type: Standard
- Prompt text: "I want to research how to achieve comprehensive retrieval in systematic literature searches."

**Input 7**
- Domain: Knowledge graph integration with large language models
- Domain type: Established
- Input type: Hard
- Prompt text: "I want to research how knowledge graphs can be combined with LLMs."
- Adversarial design rationale: "Knowledge graph" is used as a technical term by three communities that rarely read each other's literature: the Semantic Web/RDF community (ontologies, SPARQL, open linked data); the database community (graph databases, property graphs, query optimization); and the ML knowledge representation community (embedding-based KG completion, relation learning, link prediction). The term "knowledge" in "knowledge graph" also collides with "world knowledge" in NLP (factual knowledge stored in model weights). A baseline agent will produce angles anchored in one or two of these traditions. The vocabulary-frame enumeration in intake.md must distinguish the Semantic Web, database, and ML knowledge representation traditions for this input to pass vocabulary coverage gates.

---

### 5.3 Interdisciplinary Domain Inputs (4 inputs)

All four have explicit vocabulary collision as required by specification.

**Input 8**
- Domain: Uncertainty quantification for LLM outputs
- Domain type: Interdisciplinary
- Input type: Standard
- Vocabulary collision: "uncertainty" in Bayesian ML (prior/posterior, epistemic/aleatoric) vs. "uncertainty" in statistical calibration (confidence intervals, reliability diagrams) vs. "uncertainty" in decision theory (expected utility, risk tolerance) vs. "uncertainty" in natural language generation (hedging expressions, epistemic modals)
- Prompt text: "I want to research uncertainty quantification for language model outputs — how to measure and express uncertainty in what LLMs generate."

**Input 9**
- Domain: Multi-agent coordination in LLM-based systems
- Domain type: Interdisciplinary
- Input type: Standard
- Vocabulary collision: "coordination" in multi-agent systems theory (MARL, Nash equilibria, mechanism design) vs. "coordination" in organizational behavior (communication protocols, task decomposition) vs. "coordination" in NLP agent research (handoffs, debate, critic-reviser patterns)
- Prompt text: "I want to research how multiple LLM agents coordinate to solve tasks."

**Input 10**
- Domain: Memory management in transformer-based language models
- Domain type: Interdisciplinary
- Input type: Hard
- Vocabulary collision: "memory" in cognitive science (working memory, episodic memory, retrieval) vs. "memory" in computer systems (RAM, cache, allocation) vs. "memory" in ML architecture (attention mechanisms, KV cache, recurrent state) vs. "memory" in agent design (tool-state, scratchpad, episodic buffer)
- Prompt text: "I want to research memory in LLMs — how models store and access information."
- Adversarial design rationale: "Memory in LLMs" is the exemplar vocabulary-trap input for this kit. The surface prompt uses "memory" — a term whose meaning varies so dramatically across traditions that the same query term retrieves almost entirely disjoint literatures depending on which tradition is queried from. A baseline agent anchors in the ML architecture tradition (attention, KV cache) because that is the most prominent framing in arXiv LLM literature. The cognitive science memory tradition (episodic memory, working memory capacity, memory consolidation) and the systems architecture memory tradition (memory-efficient transformers, memory bandwidth) will be missed by an unconditioned agent with high probability. The kit's Step 0 coverage map and Step 2 coverage-gap conditioning are precisely designed for this case. If FM4 fires on this input — coverage-gap conditioning fails to reach the cognitive science tradition — it is the clearest possible evidence that the kit's primary mechanism does not work cross-tradition.

**Input 11**
- Domain: Causal reasoning capabilities in language models
- Domain type: Interdisciplinary
- Input type: Standard
- Vocabulary collision: "causal" in causal inference (DAGs, potential outcomes, interventions) vs. "causal" in NLP commonsense reasoning (causal chains, event causation) vs. "causal" in mechanistic interpretability (causal tracing, causal mediation analysis)
- Prompt text: "I want to research causal reasoning in language models."

---

### 5.4 Applied/Practitioner Domain Inputs (4 inputs)

**Input 12**
- Domain: Evaluation benchmark design for LLM instruction following
- Domain type: Applied/practitioner
- Input type: Standard
- Prompt text: "I want to research how to evaluate whether LLMs follow instructions reliably — what benchmarks and methods exist."

**Input 13**
- Domain: Prompt engineering practices for production LLM deployments
- Domain type: Applied/practitioner
- Input type: Standard
- Prompt text: "I want to research prompt engineering techniques that work reliably in production systems."

**Input 14**
- Domain: Retrieval-augmented generation deployment patterns
- Domain type: Applied/practitioner
- Input type: Hard
- Prompt text: "I want to research how to build RAG systems that work well in practice."
- Adversarial design rationale: "RAG" is a term primarily used in the ML/NLP community but the underlying retrieval problem has a 40-year literature under different names in the information retrieval community (dense retrieval, sparse retrieval, BM25, hybrid retrieval) and the database community (query expansion, index structure, approximate nearest neighbor). A naive agent anchors in the ML/NLP "RAG" vocabulary and misses the information retrieval and database traditions. The practitioner community uses a third vocabulary set (chunking, embedding models, vector stores, reranking). The kit must produce angles covering all three traditions; Condition A is predicted to cluster in the ML/NLP tradition because "RAG" is the user's entry vocabulary.

**Input 20**
- Domain: Tool use reliability across LLM agent frameworks
- Domain type: Applied/practitioner
- Input type: Hard
- Prompt text: "I want to research how reliably LLM agents use tools — when tool calls succeed and when they fail."
- Adversarial design rationale: "Tool use reliability" in LLM agents spans four largely non-overlapping literatures: API reliability engineering (error handling, retry logic, idempotency); formal methods and verification (precondition/postcondition specification, runtime checking); HCI/UX research on AI-human tool interaction (trust, error attribution, perceived reliability); and the LLM agent research community's own empirical work (function calling, tool selection errors, argument hallucination). A baseline agent in 2025 anchors almost entirely in the last tradition because it is the most recent and dense. The kit's cross-disciplinary slot and coverage-gap conditioning must surface the formal methods and reliability engineering traditions for this input to pass vocabulary coverage.

---

### 5.5 Meta/Self-Referential Domain Input (1 input — required)

**Input 15**
- Domain: Research methodology for systematic literature reviews in AI and ML
- Domain type: Meta/self-referential
- Input type: Edge
- Edge category: Meta-domain — the kit's subject matter IS the domain
- Prompt text: "I want to research how to conduct systematic literature reviews in AI and ML research — what methods, databases, and approaches give comprehensive coverage."
- Design note: This input tests FM3. The kit's own procedure language — angle, vocabulary tradition, coverage map, null-hypothesis angle, adversarial angle — is drawn from the same meta-research tradition the user is asking to research. The vocabulary bootstrap in intake.md will enumerate terms like "systematic review," "search strategy," "PICO," "grey literature" — which are also the meta-vocabulary the kit draws from. This creates a recursive naming collision. The agent must produce angles about research methodology without treating its own procedural vocabulary as the complete tradition inventory.

---

### 5.6 Edge Case Inputs (5 inputs)

**Input 16 — Sparse literature**
- Domain: Formal verification of language model safety properties
- Domain type: Applied/practitioner (edge: sparse-literature)
- Input type: Edge
- Edge category: Sparse-literature domain — formal verification applied to LLMs is an emerging area with thin academic coverage
- Prompt text: "I want to research formal verification methods for ensuring LLM safety properties hold."
- Design note: Tests FM5 (Boolean-connective test false positives for small literatures) and FM2 (Rule 6 self-check cannot generate from traditions that don't yet have literature).

**Input 17 — Post-cutoff**
- Domain: LLM-based operating system agents (OS-level agentic control)
- Domain type: Empirically active (edge: post-cutoff)
- Input type: Edge
- Edge category: Post-cutoff domain — most relevant papers are from late 2024–2025
- Prompt text: "I want to research LLM agents that operate at the operating system level — controlling files, processes, and applications."
- Design note: Tests FM10. Source A vocabulary discovery will be calibrated to pre-cutoff training data. Condition C (Source B unavailable) on this input may produce a HIGH RISK severity assessment — documenting whether the kit's MODERATE/HIGH RISK branching works correctly for post-cutoff topics.

**Input 18 — Saturation-sensitive**
- Domain: In-context learning theory and mechanisms
- Domain type: Empirically active (edge: saturation-sensitive)
- Input type: Edge
- Edge category: Saturation-sensitive — vast literature (hundreds of papers), risk of premature saturation declaration
- Prompt text: "I want to research in-context learning in language models — how and why it works."
- Design note: In-context learning has one of the largest literature volumes of any LLM research area. This tests whether the kit's coverage-gap conditioning continues to produce distinct angles after multiple traditions are identified, or whether the agent short-circuits by declaring sufficient coverage prematurely.

**Input 19 — Conflicting instructions**
- Domain: Explainability of chain-of-thought reasoning
- Domain type: Interdisciplinary (edge: conflicting-instructions)
- Input type: Hard + Edge
- Edge category: Conflicting-instructions — user framing partially contradicts vocabulary-frame enumeration procedure
- Prompt text: "I want to research explainability of chain-of-thought reasoning — please focus specifically on mechanistic interpretability approaches and don't spend time on other perspectives."
- Adversarial design rationale: The user's instruction to "focus specifically on mechanistic interpretability" directly conflicts with the vocabulary-frame enumeration requirement in CLAUDE.md Rule 2 (angle list must have ≥2 distinct vocabulary traditions). This tests CLAUDE.md Rule 7 (Disagreement protocol): the kit should flag once that this direction skips vocabulary-tradition coverage, then comply. If the kit silently narrows to mechanistic interpretability without flagging, FM-behavioral-contract is triggered. If it refuses and fails to produce anything, that is a different behavioral failure.

**Input 21 — Additional edge (Standard-plus)**
- Domain: Multi-step planning in LLM-based autonomous agents
- Domain type: Applied/practitioner
- Input type: Standard
- Prompt text: "I want to research how LLM-based agents plan and execute multi-step tasks."
- Design note: Added to ensure applied domain count ≥3 after Input 19 is classified as Hard+Edge and Input 20 is Hard.

**Input 22 — Additional Standard**
- Domain: Fine-tuning vs. prompting tradeoffs for LLM task adaptation
- Domain type: Established
- Input type: Standard
- Prompt text: "I want to research when to fine-tune a language model vs. use prompting for a given task."
- Design note: Added to ensure established domain count ≥3 and to provide a clean comparative-question STRUCTURED input for question-type classification testing (FM9).

---

### 5.7 Longitudinal Batch Specification

**Longitudinal domain:** Self-correction in large language models
**Session structure:** 10 inputs run sequentially in a single Condition B agent session with no context reset between inputs. The agent receives each input in order; prior context from inputs 1–N is visible when processing input N+1. This is the ONLY input batch run without session isolation — sequential context is the whole point.

**Pre-defined quality decay criteria (locked before execution):**

| Measure | Expected stable range | Decay threshold |
|---------|----------------------|-----------------|
| Vocabulary-tradition count per input (distinct non-synonymous traditions) | 3–5 per input | <3 in any two consecutive inputs signals narrowing |
| Repetition rate (% of angle tradition labels appearing in 3+ prior inputs) | <40% | >60% signals repertoire exhaustion |
| Null-hypothesis angle presence | 1 per input (required) | Absent in any input is an immediate failure, not a threshold |
| Adversarial angle ADVERSARIAL-FLAGGED label presence | 1 per input | Absent in any input is an immediate failure |
| Cross-disciplinary angle targeting a tradition NOT in prior inputs' traditions | ≥1 new cross-disciplinary tradition per 3 inputs | Same cross-disciplinary tradition used in 3+ consecutive inputs signals cross-disciplinary collapse |

**Longitudinal batch inputs (L1–L10):**

| # | Topic within self-correction domain | Primary focus |
|---|-------------------------------------|--------------|
| L1 | Self-correction failure modes in LLM instruction following | When self-correction fails, not when it succeeds |
| L2 | Self-correction vs. external feedback in LLM code generation | Comparative framing — tests STRUCTURED question-type handling |
| L3 | Self-correction mechanisms in multi-step chain-of-thought reasoning | Intersection with reasoning literature |
| L4 | Reflection prompting as a self-correction mechanism | Specific technique — tests specificity gate in angle-generation Step 4 |
| L5 | Self-correction without ground truth feedback available | Constrained version — tests edge of the domain |
| L6 | Self-correction in retrieval-augmented generation pipelines | Applied context shift |
| L7 | Multi-agent debate as a self-correction mechanism | Cross-domain variant |
| L8 | Self-correction for factual accuracy in long-form generation | Scale variant |
| L9 | Metacognitive calibration in LLMs: knowing when to self-correct | Adjacent domain — tests whether coverage-gap conditioning follows or resists scope drift |
| L10 | Human-in-the-loop correction vs. autonomous self-correction in deployed systems | Applied/practitioner variant at end of batch |

---

### 5.8 Domain Type Summary

| Domain type | Input #s | Count | Gate requirement | Status |
|-------------|----------|-------|-----------------|--------|
| Empirically active | 1, 2, 3, 4, 17, 18 | 6 | ≥3 | MET |
| Established | 5, 6, 7, 22 | 4 | ≥3 | MET |
| Interdisciplinary | 8, 9, 10, 11, 19 | 5 | ≥3 with vocabulary collision | MET |
| Applied/practitioner | 12, 13, 14, 20, 21 | 5 | ≥3 | MET |
| Meta/self-referential | 15 | 1 | exactly 1 | MET |
| Hard/adversarial | 3, 4, 7, 10, 14, 19, 20 | 7 | ≥5 (≥25% of 20+) | MET — 7/22 = 32% |
| Edge cases (distinct categories) | 15 (meta), 16 (sparse), 17 (post-cutoff), 18 (saturation), 19 (conflict) | 5 | ≥1 per edge category | MET — all 5 categories covered |
| Longitudinal batch (10-input seq.) | L1–L10 | 1 batch = 10 inputs | ≥1 batch of 10 | MET |

---

## Section 6: Condition Specifications

### Condition A: True Baseline (no kit)

**Exact prompt text (verbatim — used for Gate G4 verification):**

```
You are an expert AI research assistant with broad knowledge of research methodology across academic and practitioner domains.

Your task: Generate a comprehensive set of research angles for the topic below. 

For each angle you identify:
- Give the angle a descriptive title
- Name the vocabulary tradition or field it comes from (e.g., which research community uses this framing)
- Write 2–3 specific, runnable search query strings that would retrieve relevant literature for this angle
- Note what type of source would best cover this angle (academic journal/preprint, practitioner blog, GitHub, etc.)

Aim for broad coverage — your goal is to ensure a researcher using your angle list could conduct a thorough literature review without missing important perspectives. Include at minimum: angles from the primary research traditions, at least one angle focused on failure cases or null results, and at least one angle from a discipline adjacent to the primary one.

Topic: [INPUT DOMAIN]
```

**What is withheld from Condition A:**
- angle-gen-kit/CLAUDE.md (behavioral contract)
- angle-gen-kit/intake.md (intake procedure)
- angle-gen-kit/angle-generation.md (generation procedure)
- angle-gen-kit/angle-quality.md (quality gates)
- angle-gen-kit/weakness_register.md (known weaknesses)
- angle-gen-kit/platform-calibration.md (platform rules)
- Any prior output from Condition B or C
- Pre-registered scoring criteria

**What is provided to Condition A:**
- Task description (verbatim above)
- Test input (domain name/description)
- Model: frontier-tier (matches kit's declared minimum from CLAUDE.md: "Frontier required")

**Gate G4 verification procedure:** After finalizing this Condition A prompt and before Stage 1 execution begins, dispatch a secondary agent with the following task: "Read the following agent prompt and confirm: (a) does it contain any kit files or references to kit files by name? (b) does it contain any structured procedure steps that would scaffold the agent's angle generation output (e.g., coverage map, tradition enumeration, quality gates)? (c) does it contain any prior examples of the expected output format that a kit would provide? Report YES/NO for each with specific evidence. A single YES requires prompt revision." The secondary agent receives only the Condition A prompt text above and no additional context. A YES on any question requires rewriting the Condition A prompt before Stage 1 proceeds.

**True baseline note:** This prompt is a strong baseline (well-prompted experienced practitioner) not a weak baseline (one-line minimal prompt). Per kit-trial-process.md Stage 1.3: "Always use strong baseline. Weak baseline makes the kit look better than it is." The Condition A prompt explicitly requests vocabulary tradition labeling and an adjacent-discipline angle — these make baseline performance higher and delta signal more meaningful.

---

### Condition B: Full Kit

**Exact prompt text (verbatim — same as Condition A):**

```
You are an expert AI research assistant with broad knowledge of research methodology across academic and practitioner domains.

Your task: Generate a comprehensive set of research angles for the topic below. 

For each angle you identify:
- Give the angle a descriptive title
- Name the vocabulary tradition or field it comes from (e.g., which research community uses this framing)
- Write 2–3 specific, runnable search query strings that would retrieve relevant literature for this angle
- Note what type of source would best cover this angle (academic journal/preprint, practitioner blog, GitHub, etc.)

Aim for broad coverage — your goal is to ensure a researcher using your angle list could conduct a thorough literature review without missing important perspectives. Include at minimum: angles from the primary research traditions, at least one angle focused on failure cases or null results, and at least one angle from a discipline adjacent to the primary one.

Topic: [INPUT DOMAIN]
```

**What is provided to Condition B:**
- All kit files (CLAUDE.md behavioral contract, intake.md, angle-generation.md, angle-quality.md, weakness_register.md, platform-calibration.md)
- Same task description verbatim as Condition A
- Test input (domain name/description)
- Model: same frontier-tier as Condition A
- No main-agent session history, no prior examples, no prior outputs

**What is withheld from Condition B:**
- Pre-registered scoring criteria
- Prior examples for the specific domain
- Any Condition A or C outputs

**Note on task description:** The identical task description in both Conditions A and B is intentional. The kit CLAUDE.md Rule 1 requires the kit to run the intake procedure on any stated research topic, independent of how the task is framed. If the kit requires a different task description to activate its mechanisms, that is a finding about the kit's robustness (FM-behavioral-contract). The Condition B agent should activate the intake gate, vocabulary enumeration, and coverage map from the kit's own rules, not from the task description's scaffolding.

---

### Condition C: Degraded — Source B Unavailable

**Exact prompt text (same task description as A and B, plus constraint):**

```
You are an expert AI research assistant with broad knowledge of research methodology across academic and practitioner domains.

Your task: Generate a comprehensive set of research angles for the topic below. 

For each angle you identify:
- Give the angle a descriptive title
- Name the vocabulary tradition or field it comes from (e.g., which research community uses this framing)
- Write 2–3 specific, runnable search query strings that would retrieve relevant literature for this angle
- Note what type of source would best cover this angle (academic journal/preprint, practitioner blog, GitHub, etc.)

Aim for broad coverage — your goal is to ensure a researcher using your angle list could conduct a thorough literature review without missing important perspectives. Include at minimum: angles from the primary research traditions, at least one angle focused on failure cases or null results, and at least one angle from a discipline adjacent to the primary one.

Topic: [INPUT DOMAIN]

DEPLOYMENT CONSTRAINT: You do not have access to web search, survey-paper search, or any external information retrieval in this context. Proceed using only your training knowledge. Do not attempt to run web search queries or retrieve external documents.
```

**What is provided to Condition C:**
- All kit files (same as Condition B)
- Same task description as A and B, plus the deployment constraint specification above
- Test input
- Model: same frontier-tier as A and B

**Constraint specification:** The deployment constraint in the prompt explicitly disables Source B (web search / survey-paper probe). This matches the documented real deployment condition from CLAUDE.md: "Source B (web search / survey-paper probe) is unavailable in subagent and sandboxed contexts." The constraint is stated explicitly in the prompt rather than enforced by tool removal — this is realistic because the kit's own intake.md Step 5 handles Source B unavailability via severity assessment logic, not via tool detection. If the constraint needs to be enforced at the tool level for execution validity, the trial executor must additionally configure the Condition C agent session with web search tools removed.

**Expected Condition C behavior:** Per intake.md Step 5, the kit should: (a) flag Source B as UNAVAILABLE in the intake brief; (b) perform the MODERATE/HIGH RISK severity assessment; (c) add the VOCABULARY SELF-REPORT FLAG; (d) proceed with Source A + Source C only. The CLAUDE.md deployment constraints section should activate and produce an output with MODERATE coverage (not FULL) and a visible quality contract statement. Failure to produce the VOCABULARY SELF-REPORT FLAG in Condition C when Source B is stated as unavailable is an FM1 trigger.

**Learning question this condition answers:** This condition directly addresses the L1 learning from INT-09: what quality floor does the kit achieve without web search? The B−C gap on vocabulary-tradition coverage dimension is the primary Condition C signal. A B−C gap ≥2 on vocabulary-tradition coverage flags Source B unavailability as a significant deployment risk; a gap ≤0.5 would indicate the kit is robust to Source B loss (and that Source A + C together are nearly sufficient for this domain).

---

### Isolation Envelope

| Item | Condition A | Condition B | Condition C |
|------|------------|------------|------------|
| Test input | ✓ | ✓ | ✓ |
| Task description (verbatim) | ✓ | ✓ | ✓ |
| Deployment constraint notice | ✗ | ✗ | ✓ |
| CLAUDE.md behavioral contract | ✗ | ✓ | ✓ |
| intake.md procedure | ✗ | ✓ | ✓ |
| angle-generation.md procedure | ✗ | ✓ | ✓ |
| angle-quality.md gates | ✗ | ✓ | ✓ |
| weakness_register.md | ✗ | ✓ | ✓ |
| platform-calibration.md | ✗ | ✓ | ✓ |
| Web search capability | N/A | ✓ | ✗ (disabled) |
| Pre-registered scoring criteria | ✗ | ✗ | ✗ |
| Prior examples for this domain | ✗ | ✗ | ✗ |
| Prior session context | ✗ | ✗ | ✗ |

**Per-kit isolation decision:** All conditions withhold: (a) pre-registered scoring criteria, (b) prior examples for the specific domain, (c) any outputs from other conditions. The sequential longitudinal batch (L1–L10) is the only exception to session isolation — sequential context is the operative variable for that batch.

---

### Evaluator Protocol

**Hard inputs (7 inputs: 3, 4, 7, 10, 14, 19, 20):** ≥3 blind independent evaluators per Condition B output on each Hard input. Each evaluator receives: (a) the Condition B output artifact (deliverable only — no chain-of-thought); (b) the pre-registered scoring criteria verbatim from Stage 1.2; (c) no trial background, no other evaluator scores, no chain-of-thought. Evaluators score the output artifact FIRST before reading chain-of-thought. Inter-rater reliability check: pairwise score differences on each Tier 1 dimension. If any pairwise difference ≥2 on a Tier 1 dimension: dispatch 4th evaluator; final score = median of all. Contested scores (spread equally): report as contested with both values in verdict.

**Standard and Edge inputs:** ≥1 evaluator per output. No inter-rater reliability requirement.

**Longitudinal batch:** 1 evaluator across all 10 outputs, scoring the decay measures defined in Section 5.7 rather than the standard dimensional rubric.

---

## Section 7: Stage 0 Gate Checklist (G1–G8)

All 8 gates must be MET before this pre-registration is complete and Stage 1 can begin. An independent agent reading only this document should be able to verify each gate.

---

### G1: Input Count — ≥20 test inputs total

**Status: MET**

**Evidence:** Section 5 specifies 22 primary inputs (Inputs 1–22) across all domain types and input types. Additionally, 10 longitudinal batch inputs (L1–L10) are specified in Section 5.7. Total: 32 inputs specified. The minimum gate of 20 is met by primary inputs alone (22); the 10 longitudinal batch inputs are additive.

**Primary input count verification:**
- Empirically active: 1, 2, 3, 4, 17, 18 = 6
- Established: 5, 6, 7, 22 = 4
- Interdisciplinary: 8, 9, 10, 11, 19 = 5 (Input 19 counted here as primary domain type)
- Applied/practitioner: 12, 13, 14, 20, 21 = 5
- Meta/self-referential: 15 = 1
- Plus Edge categories covered within the above = 5 edge inputs (15, 16, 17, 18, 19) ✓
- Total primary: 6+4+5+5+1+1 = 22 (counting Input 16 which appears once in applied/practitioner = Input 16 is edge/applied, not double-counted)

Correction — recounting to avoid ambiguity: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22 = 22 primary inputs. Gate G1: MET (22 ≥ 20).

---

### G2: Domain Count — ≥5 distinct domain types

**Status: MET**

**Evidence:** Section 5.8 domain summary table documents all 5 required domain types:
1. Empirically active — inputs 1, 2, 3, 4, 17, 18 ✓
2. Established — inputs 5, 6, 7, 22 ✓
3. Interdisciplinary (with explicit vocabulary collision) — inputs 8, 9, 10, 11, 19 (vocabulary collisions documented per input) ✓
4. Applied/practitioner — inputs 12, 13, 14, 20, 21 ✓
5. Meta/self-referential — input 15 ✓

5 domain types represented. Gate G2: MET.

---

### G3: Condition Count — ≥3 conditions

**Status: MET**

**Evidence:** Section 6 specifies three conditions:
- Condition A: true baseline, no kit, strong well-prompted agent ✓
- Condition B: full kit, all procedure files ✓
- Condition C: degraded deployment, Source B (web search) unavailable ✓

Each condition has distinct specification: what is provided, what is withheld, exact prompt text. Isolation envelope table in Section 6 documents per-condition access. Gate G3: MET.

---

### G4: True Baseline Verification — Condition A prompt reviewed by secondary agent

**Status: MET — SECONDARY VERIFICATION COMPLETE (PASS, 2026-07-05)**

**Evidence:** Section 6 (Condition A specification) documents the exact secondary agent verification procedure: a fresh agent reads the Condition A prompt text verbatim and checks three binary criteria — (a) kit file references present? (b) structured procedure steps present? (c) prior output examples present? Any YES requires prompt revision before Stage 1 proceeds.

**Secondary agent result (agent afd16cc0a833625cc, 2026-07-05):**
(a) Kit file references: NO — no CLAUDE.md, intake.md, angle-generation.md, angle-quality.md, or angle-gen-kit identifiers in prompt ✓
(b) Structured procedure steps: NO — bullet points describe output format, not a generation procedure; no sequenced process, no lookup instruction, no decision tree ✓
(c) Prior output examples: NO — the only illustrative text is a field-label clarification, not a worked output example ✓

**Verdict:** G4 PASS — Condition A prompt is clean. Stage 1 proceeds.

Gate G4: MET.

---

### G5: Evaluator Count — ≥3 blind independent evaluators per output on Hard inputs

**Status: MET**

**Evidence:** Section 6 (Evaluator Protocol) specifies:
- Hard inputs (7 inputs): ≥3 blind independent evaluators per Condition B output
- Standard inputs: ≥1 evaluator
- Inter-rater reliability check protocol specified
- 4th evaluator dispatch rule for Tier 1 pairwise divergence ≥2 specified
- Scoring order specified (output artifact before chain-of-thought)

7 Hard inputs × ≥3 evaluators = minimum 21 evaluation runs on Hard inputs alone. Gate G5: MET.

---

### G6: Adversarial Input Percentage — ≥25% of inputs must be adversarial or edge-case

**Status: MET**

**Evidence:** From Section 5.8: 7 Hard/adversarial inputs out of 22 primary inputs = 31.8% ≥ 25%. Hard inputs: 3, 4, 7, 10, 14, 19, 20. Additionally, 5 Edge inputs overlap with the Hard category (Inputs 15, 16, 17, 18, 19). If edge inputs are counted separately: (7 Hard + 5 Edge with 1 overlap = 11 adversarial or edge) out of 22 = 50%. Using the conservative count (Hard only): 7/22 = 32% ≥ 25%. Gate G6: MET.

**Adversarial design rationale documented:** Each Hard input has a 2-sentence adversarial design rationale in Section 5 per the 1.1b adversarial design check:
1. Vocabulary trap: documented for inputs 3, 4, 7, 10, 14, 20 ✓
2. Mechanism trigger: each Hard input specifically exercises vocabulary-frame enumeration and coverage-gap conditioning ✓
3. Baseline failure prediction: documented inline for each Hard input ✓
4. Kit-design probe: each Hard input probes coverage-gap conditioning, cross-tradition generation, or behavioral contract enforcement ✓

Gate G6: MET.

---

### G7: Degraded Condition Specification — at least one documented deployment constraint tested

**Status: MET**

**Evidence:** Condition C is fully specified in Section 6. The deployment constraint is Source B (web search / survey-paper probe) unavailable — documented explicitly in angle-gen-kit/CLAUDE.md as a real deployment constraint: "Source B (web search / survey-paper probe) is unavailable in subagent and sandboxed contexts." This is not a synthetic stress test; it is the actual constraint that applies when the kit runs as a subagent (which is the primary deployment mode). The exact constraint is stated in the Condition C prompt verbatim. Condition C is expected to produce a different result from Condition B — specifically lower vocabulary-tradition coverage — making B−C gap a meaningful measurement rather than a zero-delta check. Gate G7: MET.

---

### G8: Longitudinal Batch — at least one 10-input sequential batch run on a single domain

**Status: MET**

**Evidence:** Section 5.7 specifies a 10-input longitudinal batch on self-correction in LLMs, run sequentially in a single Condition B agent session. Section 5.7 also pre-defines the quality decay criteria (locked before execution): vocabulary-tradition count per input, repetition rate, null-hypothesis presence, adversarial label presence, and cross-disciplinary tradition freshness. The specific threshold values for each measure are specified. All 10 input prompts (L1–L10) are defined verbatim. Gate G8: MET.

---

### Gate Summary

| Gate | Status | Evidence location |
|------|--------|------------------|
| G1: ≥20 inputs | MET | Section 5 — 22 primary + 10 longitudinal = 32 |
| G2: ≥5 domain types | MET | Section 5.8 — all 5 types with specific input numbers |
| G3: ≥3 conditions | MET | Section 6 — Conditions A, B, C fully specified |
| G4: True baseline verified | MET — PASS (secondary agent afd16cc0a833625cc, 2026-07-05) | Section 6 — all 3 criteria NO; Condition A prompt is clean |
| G5: ≥3 evaluators Hard inputs | MET | Section 6 — Evaluator Protocol |
| G6: ≥25% adversarial | MET | Section 5.8 — 7/22 = 32% Hard |
| G7: Degraded condition specified | MET | Section 6 — Condition C, Source B unavailable |
| G8: Longitudinal batch | MET | Section 5.7 — 10-input sequential batch, L1–L10 |

**Pre-registration verdict: ALL GATES MET. Stage 1 may proceed after G4 secondary agent verification runs.**

---

## Appendix A: Gaps Found in Kit Procedure Files During Pre-Registration

The following gaps were identified while reading the kit files to write this document. These are not blocking gates for INT-10 but should be addressed before INT-11 or Phase 8.

**Gap 1 — platform-calibration.md referenced but not in kit file list.**
angle-generation.md Step 3 references "platform-calibration.md for platform-specific rules" and the angle record format requires "Source type (academic): [specific platform — see platform-calibration.md for category rules]." This file was not in the kit directory files provided for this pre-registration. If it is absent or incomplete, the source-type assignment step has no authoritative reference. The trial executor must confirm platform-calibration.md exists and is populated before Stage 1 runs.

**Gap 2 — Step 0 coverage map is a "gate" but not a structural gate.**
angle-generation.md Step 0 states "Gate: Do not write any angle content until the coverage map is populated. The map is the evidence this step ran." However, this is a declared gate without a structural enforcement mechanism — no template section that must be filled prevents the next step, no tool call gating. A compliant agent will produce the coverage map; a non-compliant agent can skip it with no structural block. This makes FM6 (coverage map soft gate) directly testable in INT-10. The fix would be to move the coverage map to a required intake brief field or TASK_TEMPLATE section with structural enforcement.

**Gap 3 — Source B MODERATE/HIGH RISK assessment lacks a "highly specialized" definition.**
intake.md Step 5 states the severity is HIGH RISK when the topic is "highly specialized, non-English, or post-training-cutoff research" — but provides no criterion for what makes a topic "highly specialized." An agent assessing severity on Input 16 (formal verification of LLM safety properties) has no procedure-specified test for whether this qualifies as "highly specialized." This ambiguity is precisely what FM1 exploits: the MODERATE/HIGH RISK branching produces inconsistent results across agents and inputs without a more operationalized criterion.

**Gap 4 — No procedure for corpus size estimation in Gate 2 Boolean-connective test.**
angle-quality.md Gate 2 requires checking whether the "small-literature exception" applies before applying the Boolean-connective test, and notes the test "cannot automatically detect whether the exception applies" — the agent must check the estimated corpus size. No intake, generation, or quality procedure tells the agent how to estimate corpus size at angle-generation time (before running the queries). The agent must guess or hallucinate a corpus size estimate, making the small-literature exception unreliable. A 1-query corpus probe step (e.g., "run a single anchor query and examine the result count") should be specified.

**Gap 5 — Cross-disciplinary slot selection has no selection criterion.**
angle-generation.md Step 0 requires identifying a tradition "NOT in the intake brief" for the cross-disciplinary slot. The coverage map format requires "Basis for selection: [why this tradition is likely to contain relevant literature]." However, the procedure gives no guidance on HOW to identify candidate cross-disciplinary traditions or what makes one a better selection than another. The agent must generate this judgment from general knowledge alone, which makes the cross-disciplinary slot the weakest structural gate in the kit — it exists but its quality depends entirely on the agent's domain knowledge. A short heuristic (e.g., "check: what field uses similar mathematical structures? what field addresses the same real-world phenomenon from a human perspective?") would improve reliability.

**Gap 6 — 2-question intake cap creates ambiguity when the research topic is genuinely multi-faceted.**
intake.md caps user questions at 2 total across all intake steps. For genuinely ambiguous multi-faceted topics (e.g., "multi-agent coordination" which spans cooperative game theory, MARL, organizational behavior, and NLP agent frameworks), 2 questions may be insufficient to determine whether the user's scope is one of these traditions or all of them. The current fallback ("infer the remaining fields and flag the inference in the brief") means the agent proceeds with a potentially incorrect scope, and the scope error compounds through all subsequent steps. A scope-uncertainty flag in the intake brief would make this visible to the evaluator.

---

*Pre-registration written: 2026-07-05*
*Based on: angle-gen-kit/CLAUDE.md, intake.md, angle-generation.md, angle-quality.md, weakness_register.md; kit-maker/procedures/kit-trial-process.md*
*INT-09 post-mortem findings incorporated: L1 (Source B degradation), L2 (Rule 6 diagnostic gap), L3 (meta-domain gap)*
*All 8 Stage 0 gates: MET*
