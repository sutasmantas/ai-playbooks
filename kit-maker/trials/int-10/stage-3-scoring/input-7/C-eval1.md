# Blind Evaluation — INT-10, Input 7, Condition C, Evaluator 1

**Date:** 2026-07-05
**Evaluator:** Subagent eval1
**Condition:** C (no external search access; Source B unavailable)
**Topic:** How knowledge graphs can be combined with LLMs

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The intake brief enumerates 19 distinct, non-synonymous vocabulary tradition labels. The user input contains only three word clusters: "knowledge graphs," "LLMs," and "combined with." Multiple traditions in the output are clearly not derivable from these:

- **NLP Factuality / Hallucination Research** — "hallucination mitigation," "factuality probing," "knowledge conflict" do not appear in the user's input
- **Neuro-Symbolic AI** — "differentiable reasoning," "rule-neural hybrid," "logic programming" are not in the user vocabulary
- **ML Systems / Engineering** — "latency," "scalability," "throughput," "deployment" are not user-input-derivable
- **Temporal Reasoning / Dynamic Graphs**, **Commonsense Reasoning**, **Formal Ontology / Description Logics**, **NLG / Structured-to-Text** — all introduce vocabulary absent from the prompt

Adjacent discipline criterion is satisfied by Tradition 19: **Cognitive Science / Semantic Memory** — "schema theory, spreading activation, semantic memory organization, associative memory, knowledge structures in human cognition." This comes from cognitive psychology, a primary subject matter entirely distinct from computer science/NLP.

Evidence: "Tradition 19: Cognitive Science / Semantic Memory — schema theory, spreading activation, semantic memory, associative memory, knowledge structures"; "NOTE: this tradition was NOT in the user's vocabulary."

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present.

**(a) Null-hypothesis angle naming a specific failure mechanism:** Angle 18 does not merely assert "failures exist." It names specific mechanisms: "cases where KG retrieval introduces noise or degrades generation quality," "negative transfer findings," and "scope conditions under which integration fails." These are mechanistic claims, not generic acknowledgments that failure is possible.

Evidence: "KG augmentation language model degraded performance noise retrieval quality"; "negative transfer failure cases empirical."

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:** Present at Angle 19.

Evidence: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"

**(c) Cross-disciplinary angle from a different primary field:** Angle 20 targets Cognitive Science / Semantic Memory explicitly from a different primary field. The vocabulary is entirely non-overlapping with all other angles: "schema theory," "spreading activation," "Quillian," "Bartlett," "associative memory." The selection basis is stated: "This tradition provides empirical findings on schema effects, spreading activation, and semantic memory architecture that can inform or critique neural approaches — but uses entirely different vocabulary ('semantic memory,' 'schema,' 'associative network') that would not be retrieved by LLM/KG queries."

---

## Q5 — ACTIONABILITY

**Score: 3**

Every angle carries exactly 4 runnable query strings. Tradition-specific vocabulary and specificity operators are present across all 20 angles:

- Named techniques/systems: "KEPLER ERNIE KnowBERT" (A1), "R-GCN CompGCN" (A4), "TransE RotatE FB15k WN18RR" (A5), "TNTComplEx TeRo TiRGN" (A16)
- Named benchmarks: "LC-QuAD QALD" (A3), "AIDA CoNLL TAC-KBP ZESHEL" (A8), "WebNLG KELM AMR" (A12), "CommonsenseQA PIQA" (A17)
- Named authors/foundational works: "Quillian Collins," "Bartlett" (A20)
- Date/range operators across nearly all angles: "2022 2023 2024," "2023 2024 2025"
- Boolean AND of two distinct concepts: "knowledge graph LLM integration failure negative result does not improve baseline 2022 2023 2024" (A18), "SPARQL rule-based knowledge graph question answering outperforms neural symbolic baseline" (A19)

No angle has generic phrase concatenation only. The cross-disciplinary angle (A20) uses author names and journal names ("Psychological Review, Journal of Memory and Language, Cognitive Psychology") as specificity operators.

Evidence: "Q2: KEPLER ERNIE KnowBERT knowledge-enhanced language model training"; "Q2: spreading activation semantic network human memory knowledge structure Quillian Collins."

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The output documents a Gate 2 distinctness check that tests five candidate synonym pairs and finds all PASS. Independent inspection confirms no pair that would retrieve >60% overlapping papers:

- Angle 3 (NL-to-SPARQL) vs Angle 11 (Multi-hop QA): "SPARQL" as the anchor term for A3 targets a completely distinct sub-literature (semantic parsing/query generation) from A11's "multi-hop reasoning," "path retrieval," "iterative traversal."
- Angle 1 (KG pre-training) vs Angle 9 (in-context prompting): Training-time injection (KEPLER, ERNIE, KnowBERT) vs inference-time prompting (Think-on-Graph, KAPING, StructGPT) — structurally non-overlapping corpora.
- Angle 7 (Neuro-Symbolic) vs Angle 19 (Adversarial/Symbolic-only): A7 is neural-symbolic hybrids; A19 explicitly excludes neural vocabulary and targets purely symbolic approaches (Prolog, rule engines, SPARQL-only KGQA).
- Angle 5 (KGC) vs Angle 4 (GNNs): Task-level completion literature vs architecture-level representation literature — different benchmark sets, different venue targeting.

No fully synonymous pairs found. Traditions without overlap dominate the list (19 distinct vocabulary traditions for 20 angles, with only Angle 18 borrowing partially from A6's tradition).

Evidence: "Angle 3 (NL-to-SPARQL) vs Angle 11 (Multi-hop QA): Distinctive query term 'SPARQL' in A3 does NOT appear in A11 queries... SPARQL generation papers are a distinct sub-literature from multi-hop reasoning papers. PASS."

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements present:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
The COVERAGE MAP section lists all 19 traditions with "Gap flag" field for each (all "No"), planned angle slots, and an explicit "Cross-disciplinary slot (required)" section with a stated selection basis: "LLM research on knowledge-graph integration implicitly models the same problem that cognitive scientists study: how structured factual knowledge is organized and retrieved in memory. This tradition provides empirical findings on schema effects, spreading activation, and semantic memory architecture that can inform or critique neural approaches."

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
INTAKE BRIEF section contains all three: 19 vocabulary traditions listed, question type classified as "EXPLORATORY" with reasoning, and severity assessment in "Source B status: UNAVAILABLE — MODERATE."

**(c) ≥1 gate documented as run with PASS/FAIL notation:**
Four gates are documented. The Intake Gate Check says "Gate: PASS. Proceeding to angle-generation.md." The GATE SUMMARY section documents all four gates with explicit verdicts: "Gate 1 verdict: PASS," "Gate 2 verdict: PASS," "Gate 3 verdict: PASS," "Gate 4 verdict: PASS," culminating in "Overall verdict: PASS — dispatch ready."

Evidence: "Gate: PASS. Proceeding to angle-generation.md."; "Gate 1 verdict: PASS."

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** Present at line 52.
Evidence: "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions in this brief were enumerated by LLM training knowledge only."

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** The output labels severity as "MODERATE" but NOT as the exact phrase "MODERATE RISK." The text reads: "coverage confidence is MODERATE, not HIGH RISK" — this uses "MODERATE" as a level descriptor and contrasts it with HIGH RISK, but the exact compound "MODERATE RISK" does not appear. The self-report flag section itself carries no severity label. This element is missing under strict reading of the criterion.

**(c) ≥1 tradition named as possibly absent due to source limitation:** Present in the GATE SUMMARY flags: "Traditions most likely to be missing: non-English KG communities publishing outside standard ML venues; domain-specific KG+LLM applications (healthcare KG, legal KG) that may use distinct domain vocabularies not represented here."

**(d) Coverage described as reduced (not FULL):** Present. "No survey-paper title vocabulary was available to validate or extend this list... External validation via a survey-paper probe... is recommended before treating this tradition list as exhaustive." The note in the intake brief also says "Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions."

Three of four sub-conditions satisfied. Element (b) is missing the exact phrase "MODERATE RISK" or "HIGH RISK" — the severity descriptor used is "MODERATE" without the "RISK" qualifier.

**Final score: 2** (flag + coverage limitation language present; missing exact severity label per criterion text)

---

## Summary Table

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary tradition coverage | 3 |
| Q7 — Structural completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / Non-redundancy | 3 |
| P1 — Procedure adherence | 3 |
| M1 — Self-assessment degraded mode | 2 |
