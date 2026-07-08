# INT-10 Blind Evaluation — Input 3, Condition C
**Evaluator:** eval1  
**Date:** 2026-07-05  
**Artifact scored:** `stage-2-execution/input-3/cond-c-output.md`

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output names 9 distinct vocabulary traditions across the intake brief, coverage map, and angle list:
1. ML benchmark evaluation / NLP evaluation
2. Transformer architecture / attention mechanisms
3. Information retrieval / RAG
4. Safety / alignment
5. Cognitive science / human memory research
6. Systems / hardware / inference engineering
7. Measurement theory / evaluation validity
8. Computational linguistics / psycholinguistics
9. Model scaling / capability emergence

User input words: "context length," "LLM," "performance," "research." At least 7 of the 9 traditions are NOT derivable from the user's input vocabulary. Two are from adjacent disciplines with different primary subject matter: cognitive science / human memory research (psychology tradition, not ML) and computational linguistics / psycholinguistics (linguistics tradition). The output explicitly notes that traditions 6–9 were discovered during generation rather than being prompted by the user's vocabulary.

**Evidence:** "Absent-term signal (Source C)" section names terms not in the user's input, including "serial position effect," "needle-in-a-haystack," "KV cache," "RoPE" — demonstrating successful non-derivable tradition discovery. Cross-disciplinary slot basis: "Computational linguistics has an independent research tradition studying how NLP systems handle long-range dependencies, discourse structure, coreference, and coherence in long documents — using vocabulary (discourse coherence, anaphora resolution, narrative structure) distinct from the ML evaluation and architecture traditions."

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present:

**(a) Null-hypothesis angle naming a specific failure mechanism:** Angle 6 goes beyond "failures exist" to name specific mechanisms: "publication bias" (why null results are underrepresented in the academic record), "training interventions that eliminate degradation," and "replication failure of position-bias findings." The coverage-gap note explicitly states "Negative results and null findings in this domain are underrepresented in academic literature due to publication bias." This names publication bias as the mechanism, not just absence of evidence.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:** Appears in Angle 8 header: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]." Also appears in Gate Summary and Summary Statistics.

**(c) Cross-disciplinary angle from different primary field:** Angle 9 ("Discourse Coherence and Long-Range Dependency Handling in Extended Text (Cross-Disciplinary)") explicitly targets computational linguistics / psycholinguistics, with vocabulary ("discourse coherence," "coreference resolution," "anaphora," "narrative structure") non-overlapping with ML traditions. Sourced from ACL Anthology rather than arXiv.

**Evidence (b):** "Slot D1 (Adversarial-FLAGGED): Starting from measurement theory / evaluation validity vocabulary — NOT FROM: benchmark accuracy, positional encoding, attention mechanism..." confirming the angle was generated from different vocabulary.

---

## Q5 — ACTIONABILITY

**Score: 3**

All 10 angles have ≥2 runnable query strings (range: 3–4 per angle). All queries use tradition-specific vocabulary, and all have ≥1 specificity operator.

Named techniques/paradigms that serve as specificity operators: "rotary position embedding RoPE" (A2), "ALiBi" (A2), "KV cache eviction compression quantization" (A7), "sliding window attention" (A2), "needle in a haystack" (A3), "lost in the middle" (A3), "serial position effect" (A5), "coreference resolution" (A9), "anaphora" (A9), "construct validity" (A8), "ecological validity" (A8), "scaling laws" (A10), "emergent capabilities" (A10). Date-range operators appear in Angles 1, 2, 3, 4, 6, 7, 9, 10 (e.g., "2023 2024 2025").

No angle has generic concatenation queries (e.g., "LLM + performance" alone). Each query pairs at least two tradition-specific concepts.

**Evidence:** Angle 2, Q2: "rotary position embedding RoPE context window extension performance degradation interpolation" — named technique (RoPE) AND specific failure mode (degradation under interpolation). Angle 9, Q1: "coreference resolution long document language model coherence long-range dependency 2022 2023 2024" — named linguistic concept, tradition-specific source venue (ACL Anthology), date range.

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The output includes an explicit Gate 2 distinctness check that tests all plausible overlap pairs and confirms each passes the boolean-connective test. Key assessments verified independently:

- A1 (benchmark evaluation, task accuracy) vs. A3 (needle-in-a-haystack, position bias, retrieval): distinct research communities; different failure modes measured.
- A2 (positional encoding, RoPE, attention mechanisms) vs. A7 (KV cache, memory bandwidth, inference latency): architecture papers vs. systems/inference papers — negligible overlap.
- A5 (serial position effect, primacy/recency, cognitive psychology) vs. A9 (discourse coherence, coreference, narrative structure): different sub-literatures; A5 sourced from arXiv ML, A9 from ACL Anthology.
- A1 vs. A6 (null-hypothesis variant): Gate 2 notes these share a base tradition but explicitly invokes the null-hypothesis exemption. The queries use opposing framing ("degradation" vs. "no performance degradation," "null hypothesis," "replication failure"), which would retrieve substantially non-overlapping papers.
- A4 (instruction following, alignment, behavioral consistency) vs. A8 (construct validity, measurement artifact, benchmark design): semantically unrelated vocabularies; different research communities.

No pair without the null-hypothesis exemption appears to retrieve >60% of the same papers.

**Evidence:** Gate 2 states: "Most distinctive term from A1 ('task accuracy') does not appear in A3 queries" and "Angles 2 and 7: OR retrieval would return different literatures — architecture papers vs. systems/inference papers."

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements are present and complete:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:** The "COVERAGE MAP" section lists 5 intake-brief traditions plus 4 additional discovered traditions, each with a "Gap flag" field explicitly answered, and a "Cross-disciplinary slot (required)" subsection naming the selection basis in detail: "Computational linguistics has an independent research tradition studying... using vocabulary (discourse coherence, anaphora resolution, narrative structure) distinct from the ML evaluation and architecture traditions in the intake brief."

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:** The "INTAKE BRIEF" section lists 5 vocabulary traditions, classifies question type as "EXPLORATORY" with explicit rationale, and includes "Source B status: UNAVAILABLE — MODERATE" as the severity assessment.

**(c) ≥1 gate documented as run with GATE PASSED or GATE FAILED notation:** Four gates are documented, all with explicit pass/fail notation: "Gate 1: PASS," "Gate 2: PASS," "Gate 3: PASS," "Gate 4: PASS," and "Overall verdict: PASS — dispatch ready." Additionally, an intake-level gate check states "Gate passes. Proceeding to angle-generation.md."

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Three of four required elements are present; one element falls short of the exact label requirement.

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** Present twice. Line ~39: "**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only." Line ~395: "**VOCABULARY SELF-REPORT FLAG (active):** All vocabulary traditions were enumerated by LLM only." ✓

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** The document uses "MODERATE" (not "MODERATE RISK") as the severity label. Specifically: "severity is MODERATE, not HIGH RISK; proceeding with VOCABULARY SELF-REPORT FLAG active." The label "MODERATE RISK" does not appear verbatim anywhere in the document. The document uses "HIGH RISK" once (as a contrast — "not HIGH RISK"), but the actual assigned severity label is "MODERATE." This does not satisfy the exact-label criterion. ✗ (partial)

**(c) ≥1 tradition named as possibly absent due to source limitation:** Present. At the overall verdict section: "the following traditions may be underrepresented if they appear primarily in survey-paper vocabulary rather than primary papers: information-theoretic framings of context (entropy, compression), neuroscience-inspired attention models, multilingual long-context performance." Three traditions explicitly named as possibly absent. ✓

**(d) Coverage described as reduced (not FULL):** Present. "Expected angle coverage: MODERATE, not FULL." ✓

**Score rationale:** Three elements present (a, c, d); one element fails exact-label test (b). Severity acknowledgment exists but label "MODERATE" does not match required labels "MODERATE RISK" or "HIGH RISK" per criterion. Score 2 applies: "Self-report flag + severity but missing one required element."

---

## Summary

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary Tradition Coverage | 3 |
| Q7 — Structural Completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / Non-Redundancy | 3 |
| P1 — Procedure Adherence | 3 |
| M1 — Self-Assessment Degraded Mode | 2 |
