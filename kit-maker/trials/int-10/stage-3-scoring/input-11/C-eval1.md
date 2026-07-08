# Blind Evaluation — INT-10, Input 11, Condition C, Evaluator 1
**Date:** 2026-07-06
**Evaluator note:** Scores assigned blind to condition identity. File overwritten by evaluator-1 run on 2026-07-06.

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The coverage map identifies 14 distinct vocabulary traditions, far exceeding the ≥4 threshold. Traditions not derivable from the user's input words ("causal reasoning," "language models") include: Econometrics/social science (Granger causality, instrumental variables, difference-in-differences), Linguistics/discourse analysis (RST, causal connectives, discourse coherence), Philosophy of causation (Lewis counterfactuals, manipulationist account, interventionism), Cognitive science/psychology, and Biomedical/clinical NLP. Adjacent-discipline traditions with non-overlapping primary subject matter include Linguistics/discourse analysis (C1 slot) and Econometrics/social science (A7 slot).

Evidence: "Tradition 8: Econometrics / social science — Representative terms: Granger causality, instrumental variables, difference-in-differences"; "Tradition 14: Linguistics / discourse analysis — Representative terms: causal discourse relations, RST (Rhetorical Structure Theory), causal connectives... this tradition was NOT in the intake brief."

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present:

**(a) Null-hypothesis angle naming a specific failure mechanism:** Angle N1 names statistical pattern matching as the specific failure mechanism: "evidence that LLM causal 'reasoning' is explained by statistical pattern matching" and explicitly targets "annotation artifact critiques of causal benchmarks." This is a named mechanism, not a generic "failures exist" claim.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:** Present in the coverage map ("Planned angle slot: Adversarial D1 (ADVERSARIAL-FLAGGED)") and in the angle header: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results.]"

**(c) Cross-disciplinary angle from a different primary field with non-overlapping vocabulary:** Angle C1 (Linguistics/discourse analysis) uses RST, rhetorical structure theory, causal connectives, pragmatics, discourse coherence — vocabulary with no overlap with the NLP/ML or causal inference traditions. The selection basis is explicitly stated: "the user's framing ('causal reasoning in language models') is entirely from cognitive/ML vocabulary; the linguistics tradition studies causal language use... a framing orthogonal to inference capability."

Evidence: "language models causal 'reasoning' is explained by statistical pattern matching"; "[ADVERSARIAL-FLAGGED: dispatch in separate research context]"; "Tradition 14: Linguistics / discourse analysis... selected as cross-disciplinary slot."

---

## Q5 — ACTIONABILITY

**Score: 3**

Every angle has 4 query strings. All angles use tradition-specific vocabulary (not generic concatenations). Specificity operators are present throughout:

- Named techniques: "do-calculus," "Pearl causal hierarchy," "COPA CausalQA CRASS," "ATOMIC ConceptNet," "Granger causality," "RST rhetorical structure theory," "ICP," "invariant causal prediction"
- Named venues: arXiv categories (cs.CL, cs.LG, econ.EM), "ACL Anthology," "PhilPapers," "JAMIA"
- Year constraints as numerical thresholds: "2024 2025," "2023 2024"
- Boolean AND of two distinct concepts: "LLM spurious causal competence probe annotation artifact benchmark critique confound"; "causal discourse relations RST rhetorical structure theory language model connectives coherence 2024"

No angle has only 1 query; no queries are generic concatenations like "causal reasoning language model."

Evidence: "Q2: LLM causal inference Bayesian network human-like causal judgment comparison experiment"; "Q1: Granger causality language model temporal text prediction causal inference" (both use named tradition-specific terms as Boolean AND constraints).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The document runs a formal distinctness gate (Gate 2) on the highest-overlap candidate pairs. Spot-checking confirms:

- A2 (benchmarks) vs. A9 (prompting): A2 vocabulary clusters around "evaluation dataset, COPA, CRASS, annotation methodology"; A9 around "chain-of-thought, few-shot, in-context learning, prompting strategy." Distinct query vocabulary, distinct retrieval sets.
- A4 (spurious correlations) vs. A11 (OOD): Different objects of study. A4 = what LLMs learn at training time; A11 = whether what they learn transfers to held-out distributions.
- A1 (Pearl hierarchy) vs. A6 (causal discovery): A1 = reasoning about known causal structure; A6 = inferring causal structure from data.
- N1 vs. A4: A minor monitor flag is correctly noted in the gate summary ("check for paper overlap at retrieval time") but the framing is substantively different enough that >60% same-paper overlap is unlikely: N1 sources are behavioral/evaluation negative-result papers; A4 sources are mechanistic interpretability papers.

No fully synonymous tradition pairs exist. All 15 angles have distinct tradition labels; all confirmed as retrieving from distinct document clusters by the gate documentation.

Evidence: "Gate 2 — Overall: PASS (minor monitor flag on N1/A4 overlap noted above)"; "'spurious' does not appear in A11 queries; 'out-of-distribution' does not appear in A4 queries."

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required procedural elements are present and complete:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:** Part 2 lists 14 traditions with gap flags ("Gap flag: No — slot assigned" for all slots), documents two scope-accepted gaps (legal/forensic, neuroscience), and provides explicit cross-disciplinary slot selection basis for Linguistics/discourse analysis.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:** Part 1 lists 6 candidate traditions, classifies question type ("EXPLORATORY"), and provides severity/maturity assessment ("Domain maturity estimate: mixed" with explicit basis; "Source B status: UNAVAILABLE — MODERATE").

**(c) ≥1 gate documented as run:** Part 5 documents four gates (Completeness, Distinctness, Launchability, Scoring prohibition), each with explicit "PASS" or "FAIL" notation and evidentiary sub-checks. Example: "Gate 1 — Overall: PASS"; "Gate 2 — Overall: PASS."

Evidence: "Gate 1 — Completeness... Null-hypothesis angle present: PASS"; "Question type: EXPLORATORY... no comparison or intervention-outcome structure in the prompt"; "Cross-disciplinary slot (required): Target tradition: Linguistics / discourse analysis. Basis for selection: [explicit paragraph]."

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** Present. "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions were enumerated by LLM only."

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** Partially present. The text uses "MODERATE" as the severity label and explicitly compares it to the HIGH RISK threshold: "vocabulary confidence is MODERATE, not HIGH RISK." The exact compound label "MODERATE RISK" does not appear; the severity is expressed as "MODERATE" standing alone. This is functionally equivalent but does not match the exact required phrasing.

**(c) ≥1 tradition named as possibly absent due to source limitation:** Not clearly satisfied. The two traditions named as potential gaps (legal/forensic causation, neuroscience) are classified as "scope-accepted gap" — a deliberate scope decision — rather than as absent due to source limitation. The source limitation discussion reads: "cross-disciplinary angles may miss traditions that only appear in survey-paper title vocabulary" — this flags the risk without naming a specific tradition that falls into this category.

**(d) Coverage described as reduced (not FULL):** Present. "Coverage is MODERATE, not FULL."

Summary: (a) present, (b) present with inexact phrasing, (c) absent, (d) present. One required element missing (c). Score 2 per the scoring criterion ("Self-report flag + severity but missing one required element").

Evidence: "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions were enumerated by LLM only"; "Coverage is MODERATE, not FULL — cross-disciplinary angles may miss traditions that only appear in survey-paper title vocabulary."

---

## Summary Table

| Dimension | Score |
|-----------|-------|
| Q1 Vocabulary Tradition Coverage | 3 |
| Q7 Structural Completeness | 3 |
| Q5 Actionability | 3 |
| Q3 Precision / Non-Redundancy | 3 |
| P1 Procedure Adherence | 3 |
| M1 Self-Assessment Degraded Mode | 2 |
