# Blind Evaluation — INT-10, Input 10, Condition B, Evaluator 3

**Date:** 2026-07-05
**Evaluator:** Subagent eval3 (blind — condition label not consulted during scoring)

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output identifies 10 numbered vocabulary traditions at intake plus 2 additional cross-disciplinary traditions named in the coverage map, totalling 12 distinct non-synonymous labels:

1. ML systems / NLP (parametric memory, transformer weights)
2. Mechanistic interpretability (knowledge neurons, circuits, MLP key-value)
3. Model editing / knowledge surgery (ROME, MEMIT, GRACE)
4. Retrieval-augmented / external memory (RAG, MemGPT)
5. Memory-augmented neural networks / MANN (NTM, DNC)
6. Continual learning (catastrophic forgetting, plasticity-stability)
7. Long-context efficiency / sparse attention (KV cache, FlashAttention)
8. Memorization vs. generalization — learning theory (verbatim memorization, training data extraction)
9. In-context learning (ICL, implicit gradient descent, Bayesian inference in-context)
10. Hallucination / factual grounding (confabulation, temporal knowledge decay)
11. Computational neuroscience (Hopfield networks, attractor dynamics, hippocampal consolidation)
12. Cognitive science / cognitive architecture (Baddeley, working memory capacity, ACT-R, SOAR)

User input words: "memory," "LLMs," "store," "access," "information."

Traditions NOT derivable from user input: mechanistic interpretability, model editing/knowledge surgery, continual learning/catastrophic forgetting, memorization vs. generalization (learning theory framing), computational neuroscience, cognitive science/cognitive architecture — at minimum 6 traditions exceed the ≥2 threshold.

Adjacent discipline: Computational neuroscience (primary subject: brain circuits, neural dynamics, biological memory consolidation — non-overlapping primary subject matter) and Cognitive science / cognitive architecture (primary subject: human cognition, working memory models, forgetting curves) both satisfy the ≥1 adjacent-discipline requirement.

Evidence: "Computational neuroscience — Hopfield networks, attractor dynamics, complementary learning systems, hippocampal memory consolidation (NOT in intake brief)" and "Cognitive science / cognitive architecture — working memory capacity, Baddeley's model, memory systems theory, forgetting curves (NOT in intake brief)"

Score 3 criteria: ≥4 distinct non-synonymous traditions ✓ (12 present); ≥2 NOT derivable from user input ✓ (at least 6); ≥1 from adjacent discipline ✓ (computational neuroscience, cognitive science). All three sub-criteria met.

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:**

Angle 11 is titled "Evidence That LLM Memory Mechanisms Don't Localize, Don't Generalize, or Fail Systematically." The angle body states: "Cases where knowledge does NOT localize to predicted circuits; model editing failures (edits don't generalize, cause side effects); negative replication results; evidence that claims about parametric memory are overstated." These are specific failure mechanisms (localization failure, generalization failure in editing, replication failure), not merely "failures exist." ✓

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**

Present in Angle 12: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results. This angle must be run before reading or synthesizing results from Angles 1-10.]" ✓

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:**

Angle 13 (Computational neuroscience) uses vocabulary: "modern Hopfield networks," "attractor dynamics," "energy function," "complementary learning systems," "hippocampal neocortical consolidation." None of this vocabulary appears in Angles 1–10. The angle explicitly states "Generating from tradition: Computational neuroscience — NOT from user's apparent ML-systems / NLP framing." ✓

All three sub-criteria met.

---

## Q5 — ACTIONABILITY

**Score: 3**

All 14 angles carry exactly 3 runnable query strings each (42 total queries). Checked sample:

**Tradition-specific vocabulary:** Every angle's queries use terminology native to its tradition and absent from neighboring angles. Examples:
- Angle 2: "knowledge neurons," "MLP transformer key-value memories," "mechanistic interpretability"
- Angle 3: "ROME MEMIT," "locate-and-edit"
- Angle 13: "modern Hopfield networks," "energy function," "attractor dynamics"
- Angle 14: "Baddeley working memory model," "episodic semantic procedural"

**Specificity operators present in all angles:**
- Named techniques/authors: "ROME MEMIT" (A3), "Baddeley" (A14), "MemGPT" (A4), "neural Turing machine differentiable neural computer" (A5), "implicit gradient descent Bayesian inference" (A9), "Ramsauer" implied (A13 2020 2021 2022)
- Year filters: "2023 2024 2025" (A1, A4), "2022 2023 2024" (A9), "2020 2021 2022" (A13)
- Boolean AND of distinct concepts: "catastrophic forgetting large language models fine-tuning continual learning 2023 2024" (A6), "verbatim memorization LLM unintended training data scaling law privacy" (A8)

No generic phrase-concatenation patterns observed. No angles with only 1 query.

Score 3 criteria: every angle ≥2 queries ✓ (all have 3); all use tradition-specific vocabulary ✓; all have ≥1 specificity operator ✓.

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The highest-risk overlap pairs are A1/A2 (parametric memory vs. knowledge localization) and A2/A3 (knowledge localization vs. model editing), both documented and assessed in the output's Gate 2 section.

A1 vs. A2: A1 queries anchor on "parametric memory," "knowledge storage," "pre-training" — characterization of what is stored. A2 queries anchor on "knowledge neurons," "MLP key-value memories," "circuit analysis" — mechanistic interpretability's circuit-discovery program. These overlap in topic but pull from different research programs and publication venues; >60% same-paper overlap is unlikely because mechanistic interpretability has its own distinct venue cluster (Anthropic, EleutherAI papers) separate from standard NLP factual knowledge papers.

A2 vs. A3: A2 ("knowledge neurons," "circuits") vs. A3 ("ROME MEMIT," "locate-and-edit") — localization vs. editing are related but the primary literature for editing methods is distinct from the primary literature for circuit discovery.

A4 vs. A5: RAG (2020+ era, Lewis et al., LlamaIndex) vs. MANN (2014-2018 era, Graves, Sukhbaatar) — different eras, different paper sets, near-zero overlap.

A11 vs. A12: Null-hypothesis (failures within paradigm) vs. adversarial (framing critique) — the output explicitly distinguishes these and the queries are clearly non-overlapping.

No pair reaches the >60% overlap threshold. No fully synonymous pairs present. 

Evidence: "N1 targets failures within the accepted paradigm (editing doesn't generalize) D1 targets the framing itself (memory analogy is misleading) — PASS"

Score 3: zero angle pairs where query overlap would retrieve >60% of same papers. ✓

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**

Present. The COVERAGE MAP section lists all 10 traditions with "Gap flag: no" entries for each. Two cross-disciplinary slots are documented with explicit selection basis: C1 "Basis: Transformers implement key-value attention with formal connections to modern Hopfield networks (Ramsauer et al. 2020); computational neuroscience has decades of memory systems theory directly applicable to LLM analysis" and C2 "Basis: User's framing 'store and access information' mirrors cognitive science memory systems framework." ✓

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**

Present. The INTAKE BRIEF section lists 10 candidate vocabulary traditions, classifies "Question type: EXPLORATORY" with reasoning, and assesses severity as "Source B status: UNAVAILABLE — MODERATE." ✓

**(c) ≥1 gate documented as run:**

Present. INTAKE GATE CHECK section explicitly states "Gate: PASS — proceed to angle-generation.md." The GATE SUMMARY section at the end documents Gates 1–4, each marked PASS with evidence. ✓

All three elements present.

Evidence: "Gate: PASS — proceed to angle-generation.md" and "Overall verdict: PASS — dispatch ready"

Score 3 criteria: all three elements present. ✓

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:**

Present. Appears at line 84: "angle generation may proceed with VOCABULARY SELF-REPORT FLAG" and in the GATE SUMMARY: "1. VOCABULARY SELF-REPORT FLAG — all 10 intake vocabulary traditions were enumerated by LLM only (Source B unavailable)." ✓

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":**

NOT present with the required exact label. The output uses "UNAVAILABLE — MODERATE" and "Severity is MODERATE" — the word "RISK" is absent. The criterion specifies "MODERATE RISK" or "HIGH RISK" as required labels. "MODERATE" alone does not match. ✗

**(c) ≥1 tradition named as possibly absent due to source limitation:**

Present. Self-check section states: "There may be relevant research communities not represented — particularly from human-computer interaction (memory augmentation tools), database systems (neural databases), or formal methods (memory proofs for neural networks)." Also: "The LLM cannot enumerate traditions it has not encountered." ✓

**(d) Coverage described as reduced (not FULL):**

Present. "Recommend running survey paper probe before accepting this as complete coverage." The intake brief notes "Survey paper status: UNAVAILABLE" and the self-report flag notation makes clear coverage is degraded. ✓

Three of four elements present; (b) misses the exact "MODERATE RISK" / "HIGH RISK" label. Score 2 per "Self-report flag + severity but missing one required element" (severity is present but the label phrasing doesn't match the required form).

Evidence: "Severity is MODERATE; angle generation may proceed with VOCABULARY SELF-REPORT FLAG" — severity present but labeled "MODERATE" not "MODERATE RISK."

---

## Final Scores Summary

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary tradition coverage | 3 |
| Q7 — Structural completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / non-redundancy | 3 |
| P1 — Procedure adherence | 3 |
| M1 — Self-assessment degraded mode | 2 |
