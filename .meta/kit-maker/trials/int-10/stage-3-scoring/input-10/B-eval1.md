# Blind Evaluation — INT-10, Input 10, Condition B, Evaluator 1

**Date:** 2026-07-05
**Evaluator model:** claude-sonnet-4-6

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output identifies 12 distinct vocabulary traditions across the intake brief and coverage map. The 10 primary traditions are: ML systems/NLP, Mechanistic interpretability, Model editing/knowledge surgery, Retrieval-augmented/external memory, Memory-augmented neural networks (historical), Continual learning, Long-context efficiency/sparse attention, Memorization vs. generalization (learning theory), In-context learning, and Hallucination/factual grounding. Two additional cross-disciplinary traditions are: Computational neuroscience and Cognitive science/cognitive architecture.

User input words are: "memory," "LLMs," "store," "access," "information," "models."

Traditions NOT derivable from user input: "mechanistic interpretability" (distinct research community label absent from prompt), "model editing / knowledge surgery" (ROME/MEMIT framing entirely outside user vocabulary), "catastrophic forgetting" (continual learning framing), "Hopfield networks / attractor dynamics" (neuroscience vocabulary). Well above the ≥2 threshold.

Adjacent disciplines present: Angle 13 (Computational neuroscience — "Hopfield networks, attractor dynamics, complementary learning systems, hippocampal memory consolidation") and Angle 14 (Cognitive science — "Baddeley's model, memory systems theory, forgetting curves, cognitive architecture"). Both have primary subject matter distinct from LLM/ML systems.

Evidence: "Vocabulary tradition: Computational neuroscience" and "Generating from tradition: Computational neuroscience — NOT from user's apparent ML-systems / NLP framing"; "mechanistic interpretability — factual recall circuits, knowledge localization, knowledge neurons, probing, MLP-as-key-value."

**Score: 3** — ≥4 traditions (12 present), ≥2 not derivable from user input, ≥1 from adjacent discipline (two present).

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:**
Angle 11 is titled "Evidence That LLM Memory Mechanisms Don't Localize, Don't Generalize, or Fail Systematically." It names specific failure mechanisms: "Cases where knowledge does NOT localize to predicted circuits; model editing failures (edits don't generalize, cause side effects); negative replication results; evidence that claims about parametric memory are overstated." This is not merely "failures exist" — it names the class of failure (non-localization, edit non-generalization, scope claims overstated). Present and specific. ✓

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Line 244 of the output: "Label: ADVERSARIAL-FLAGGED"
Line 599: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results."
The exact text "ADVERSARIAL-FLAGGED" appears verbatim in multiple locations. ✓

**(c) Cross-disciplinary angle from a different primary field with non-overlapping vocabulary:**
Angle 13 (Computational neuroscience) uses vocabulary from q-bio.NC / Neural Computation — "attractor dynamics," "complementary learning systems," "hippocampal memory consolidation," "energy function" — none overlapping with the LLM ML-systems vocabulary of Angles 1–10. The generation note explicitly states: "Generating from tradition: Computational neuroscience — NOT from user's apparent ML-systems / NLP framing." ✓

Evidence: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"; "knowledge does NOT localize to predicted circuits; model editing failures (edits don't generalize, cause side effects)"; "Generating from tradition: Computational neuroscience — NOT from user's apparent ML-systems / NLP framing."

**Score: 3** — all three elements present.

---

## Q5 — ACTIONABILITY

**Score: 3**

Query count: All 14 angles have exactly 3 queries each (Q1, Q2, Q3), meeting the ≥2 requirement.

Tradition-specific vocabulary: Every angle's queries use tradition-anchored terminology rather than generic phrase concatenation. Examples:
- Angle 3: "ROME MEMIT factual knowledge 2023 2024" — names specific techniques
- Angle 13: "modern Hopfield networks transformers attention mechanism memory capacity energy function 2020 2021 2022" — uses computational neuroscience vocabulary + named framework
- Angle 6: "catastrophic forgetting large language models fine-tuning continual learning 2023 2024" — continual learning vocabulary

Specificity operators:
- Year ranges (numerical thresholds): Present in ≥10 of 14 angles (e.g., "2023 2024 2025," "2022 2023 2024," "2020 2021 2022")
- Named techniques/authors/venues: ROME, MEMIT, GRACE (Angle 3); FlashAttention, vLLM (Angle 7); Baddeley (Angle 14); Hopfield/Ramsauer (Angle 13); MemGPT (Angle 4)
- Boolean AND of distinct concepts: queries combine tradition-specific concept pairs throughout (e.g., "in-context learning implicit gradient descent Bayesian inference retrieval mechanism")

The adversarial angle (12) queries lack year operators but use specific framing vocabulary ("paraphrase brittleness no stable memory representation," "statistical pattern matching artifact memory illusion") that constitutes Boolean AND of distinct concepts.

Evidence: "model editing large language models ROME MEMIT factual knowledge 2023 2024"; "modern Hopfield networks transformers attention mechanism memory capacity energy function 2020 2021 2022"; "in-context learning implicit gradient descent Bayesian inference retrieval mechanism."

**Score: 3** — every angle ≥2 queries, all use tradition-specific vocabulary, all have ≥1 specificity operator.

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The output includes a Gate 2 distinctness check that explicitly applies Boolean-connective vocabulary analysis to the four highest-risk overlap pairs: Angles 1/2, 2/3, 4/5, and 11/12. All pairs pass.

Key distinctness evidence for high-risk pairs:
- **Angles 1/2** (parametric storage vs. knowledge localization): A1 queries anchor on "parametric memory," "weights knowledge storage"; A2 anchors on "knowledge neurons," "MLP key-value," "circuits." These are different research programs (characterization of storage vs. circuit-level discovery). Papers on parametric memory capacity don't overlap substantially with papers on specific circuit-level knowledge neuron identification.
- **Angles 2/3** (localization vs. editing): A2 uses "knowledge neurons," "MLP key-value memories"; A3 uses "ROME MEMIT," "locate-and-edit." Directional dependence exists but the query vocabularies access different literatures — probing/circuit papers vs. weight-modification/editing papers.
- **Angles 1/10** (parametric storage vs. hallucination): Different questions — WHERE knowledge lives vs. WHEN it fails. Minimal overlap.
- **Angles 11/12** (null-hypothesis vs. adversarial): Different framing targets — 11 targets failures within the accepted localization/editing paradigm; 12 targets the memory analogy itself. Distinct vocabulary and distinct literature.

No angle pair uses fully synonymous labels or would retrieve >60% identical papers given the vocabulary separation. The traditions map to distinct research communities with distinct publication venues.

Evidence: "A1 queries anchored on 'parametric memory,' 'weights knowledge storage' / A2 queries anchored on 'knowledge neurons,' 'MLP key-value,' 'circuits'"; "N1 targets failures within the accepted paradigm (editing doesn't generalize) / D1 targets the framing itself (memory analogy is misleading) — PASS."

**Score: 3** — zero angle pairs with >60% query overlap confirmed by gate distinctness analysis.

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
Present. The COVERAGE MAP section (lines 111–198) lists all 10 traditions with "Gap flag: no" for each, and includes two cross-disciplinary slots (C1: Computational neuroscience, C2: Cognitive science). Selection basis is stated for each:
- C1: "Transformers implement key-value attention with formal connections to modern Hopfield networks (Ramsauer et al. 2020); computational neuroscience has decades of memory systems theory directly applicable to LLM analysis"
- C2: "User's framing 'store and access information' mirrors cognitive science memory systems framework; cognitive science has developed capacity limits, encoding theories, and retrieval models that inform LLM memory comparisons"
✓

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
Present. The INTAKE BRIEF section (lines 9–85) lists 10 vocabulary traditions with representative terms, classifies question type as "EXPLORATORY" with justification, and includes severity assessment: "Source B status: UNAVAILABLE — MODERATE / Severity is MODERATE; angle generation may proceed with VOCABULARY SELF-REPORT FLAG." ✓

**(c) ≥1 gate documented as run:**
Multiple gates documented. Intake gate: "Gate: PASS — proceed to angle-generation.md" (line 95). Gate summary documents Gates 1–4 with "PASS" verdicts and reasoning. ✓

Evidence: "Gate: PASS — proceed to angle-generation.md"; "Cross-disciplinary slots (required): Target tradition C1: Computational neuroscience... Basis: Transformers implement key-value attention with formal connections to modern Hopfield networks"; "Gate 1 — Completeness: PASS / Gate 2 — Distinctness: PASS."

**Score: 3** — all three elements fully present.

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:**
Present. Line 84: "angle generation may proceed with VOCABULARY SELF-REPORT FLAG." Line 742: "VOCABULARY SELF-REPORT FLAG — all 10 intake vocabulary traditions were enumerated by LLM only (Source B unavailable)." ✓

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":**
The output says "Severity is MODERATE" (line 83) — not "MODERATE RISK." The criterion requires the exact label "MODERATE RISK" or "HIGH RISK." The output uses "MODERATE" without the "RISK" suffix. This element is NOT fully met as specified. ✗

**(c) ≥1 tradition named as possibly absent due to source limitation:**
Present. The SELF-CHECK section names specific absent traditions: "There may be relevant research communities not represented — particularly from human-computer interaction (memory augmentation tools), database systems (neural databases), or formal methods (memory proofs for neural networks)." ✓

**(d) Coverage described as reduced (not FULL):**
Not met. The output explicitly states: "Multi-tradition coverage is robust despite no survey paper probe" (line 82). The word "robust" is the opposite of "reduced." While the output acknowledges limitations elsewhere ("The LLM cannot enumerate traditions it has not encountered"), it never explicitly describes coverage as "reduced" — it characterizes coverage as robust with caveats. ✗

Two elements are present (VOCABULARY SELF-REPORT FLAG, named absent traditions) and two are not met per criterion specification (severity label missing "RISK" suffix, coverage described as "robust" not "reduced").

Per scoring rubric: Score 2 applies — "Self-report flag + severity but missing one required element." Two elements are absent rather than one, but the rubric's Score 1 definition ("Some acknowledgment of source limitation but without formal VOCABULARY SELF-REPORT FLAG text") is clearly not the right fit since the flag IS present. Score 2 is the correct assignment: flag present with severity indication, but two required elements incomplete.

Evidence: "Severity is MODERATE; angle generation may proceed with VOCABULARY SELF-REPORT FLAG" (not "MODERATE RISK"); "Multi-tradition coverage is robust despite no survey paper probe."

**Score: 2**

---

## Summary Table

| Dimension | Score | Key evidence |
|-----------|-------|-------------|
| Q1 — Vocabulary tradition coverage | 3 | 12 traditions; "mechanistic interpretability," "model editing," "Hopfield networks" not in user input; computational neuroscience from adjacent discipline |
| Q7 — Structural completeness | 3 | Specific failure mechanisms named (Angle 11); "ADVERSARIAL-FLAGGED" verbatim (line 599); computational neuroscience cross-disciplinary with non-overlapping vocab |
| Q5 — Actionability | 3 | 3 queries per angle; named techniques (ROME, MEMIT, Hopfield, Baddeley); year operators throughout |
| Q3 — Precision/non-redundancy | 3 | Gate 2 distinctness check passes all 4 high-risk pairs; distinct vocabulary per tradition |
| P1 — Procedure adherence | 3 | Coverage map with gap check + cross-disciplinary basis; intake brief with traditions/question-type/severity; gates documented PASS |
| M1 — Self-assessment degraded mode | 2 | VOCABULARY SELF-REPORT FLAG present; absent tradition named (HCI, database systems); but severity "MODERATE" (not "MODERATE RISK") and coverage "robust" (not "reduced") |
