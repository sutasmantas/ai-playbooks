# Blind Scoring — INT-10, Input 16, Evaluator 1 (session 2026-07-06)

Scored: 2026-07-06
Condition: A (blind)

---

## Q1 — VOCABULARY TRADITION COVERAGE: 3/3

The output lists 20 angles, each with an explicitly named vocabulary tradition. Counting distinct non-synonymous traditions:

- "Neural network formal verification (Katz, Barrett, Gehr et al. lineage)" — derivable from user input (formal verification + neural networks)
- "Program analysis / abstract interpretation (Cousot tradition)" — NOT derivable from user input
- "Model checking (Clarke, Emerson, Sifakis tradition)" — NOT derivable
- "Certified adversarial robustness / adversarial machine learning (Cohen, Lecuyer, Salman lineage)" — NOT derivable
- "Programming language theory / type theory (Pierce, Wadler tradition)" — NOT derivable
- "Runtime verification (Leucker, Havelund, Rosu lineage)" — NOT derivable
- "Mechanistic interpretability / circuit-level analysis (Elhage, Nanda, Anthropic)" — NOT derivable
- "Probabilistic model checking / statistical verification (Kwiatkowska, Legay lineage)" — NOT derivable
- "Specification mining / invariant inference (Daikon, Engler lineage)" — NOT derivable
- "Control theory / safe reinforcement learning (Ames, Berkenkamp, Garcia lineage)" — ADJACENT DISCIPLINE (primary subject matter is dynamical systems control, not AI)
- "AI governance / regulatory science / software auditability (EU AI Act, NIST AI RMF)" — ADJACENT DISCIPLINE (primary subject matter is policy/law)
- And 9 more distinct traditions

All three sub-criteria met: ≥4 distinct non-synonymous traditions (20 total), ≥2 not derivable from user input words (at minimum 15 are not), ≥1 from adjacent discipline (control theory, AI governance).

Evidence: "Control theory / safe reinforcement learning (Ames, Berkenkamp, Garcia lineage)" (Angle 13); "AI governance / regulatory science / software auditability (EU AI Act, NIST AI RMF tradition)" (Angle 20).

**Score: 3**

---

## Q7 — STRUCTURAL COMPLETENESS: 2/3

Checking all three required elements:

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:** Present. Angle 12 "Failure Cases, Scalability Limits, and Null Results" explicitly names: "exponential state explosion for model checkers, NP-hardness of exact verification, undecidability of semantic safety properties, and documented cases where verification gave false assurance." These are specific mechanisms, not merely "failures exist." PRESENT.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:** Searched the entire document. This string does not appear anywhere in the output. ABSENT.

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:** Present. Angle 13 title includes "(ADJACENT DISCIPLINE)" and uses vocabulary entirely absent from formal verification or AI safety literature: "Lyapunov functions, control barrier functions, Hamilton-Jacobi reachability," with citation to proceedings L4DC, ICRA, CDC. Angle 20 also marked "Adjacent Discipline" and uses "EU AI Act, NIST AI RMF, ISO/IEC 42001, auditability, traceability" from regulatory science. PRESENT.

Two of three elements present; (b) is absent.

Evidence: "exponential state explosion for model checkers, NP-hardness of exact verification, undecidability of semantic safety properties" (Angle 12); no instance of "ADVERSARIAL-FLAGGED" found.

**Score: 2**

---

## Q5 — ACTIONABILITY: 3/3

All 20 angles have exactly 3 query strings each (≥2 required). Checking tradition-specific vocabulary and specificity operators:

- Angle 1: `neural network verification Marabou Reluplex transformer safety property` — named tools (Marabou, Reluplex), Boolean AND of distinct concepts. PASSES.
- Angle 2: `abstract domain transformer model robustness over-approximation` — tradition-specific vocabulary (abstract domain, over-approximation). PASSES.
- Angle 9: `PRISM probabilistic temporal logic language model stochastic property` — named tool (PRISM), tradition-specific terms. PASSES.
- Angle 10: `automatic invariant inference LLM behavior formal specification` — named technique (invariant inference), Daikon lineage vocabulary. PASSES.
- Angle 13: `control barrier functions LLM agent safety formal guarantee Lyapunov` — named techniques from control theory (CBF, Lyapunov), non-overlapping with main topic vocabulary. PASSES.
- Angle 20: `NIST AI RMF formal specification language model safety verification` — named framework (NIST AI RMF), Boolean AND. PASSES.

Spot-checking reveals no generic concatenations without specificity. Every query uses either named tools/authors/venues or Boolean AND of two distinct discipline-specific concepts. ≥1 specificity operator per query throughout.

Evidence: "PRISM probabilistic temporal logic language model stochastic property"; "control barrier functions LLM agent safety formal guarantee Lyapunov."

**Score: 3**

---

## Q3 — PRECISION / NON-REDUNDANCY: 3/3

Checking for angle pairs where queries would retrieve >60% the same papers:

- Angle 1 (SMT/SAT, Marabou/Reluplex) vs Angle 2 (Abstract Interpretation, DeepPoly/ERAN): Different algorithmic families, different toolchains, different conference tracks within CAV. Survey papers may appear in both but specific results would not exceed 60% overlap.
- Angle 3 (BMC + temporal logic, LTL/CTL) vs Angle 15 (Compositional + assume-guarantee): Both appear in CAV/TACAS, but temporal-logic trace verification and compositional contract reasoning target distinct technical sub-literatures.
- Angle 6 (Formal specification of alignment, harmlessness/honesty predicates) vs Angle 18 (Semantic content safety, toxicity/misinformation/hallucination): Distinct source communities (AI safety Alignment Forum vs NLP/FAccT) and distinct vocabulary. <60% overlap expected.
- Angle 7 (Runtime verification, Leucker/Rosu) vs Angle 16 (Constrained decoding, automata/LMQL/Outlines): Enforcement at inference time is a shared concern but the mechanisms and literature are fully disjoint.

No pair identified where >60% paper overlap is plausible given the specificity of named tools, venues, and author lineages in each angle's queries. The 20 traditions are genuinely non-synonymous.

Evidence: Angle 1 uses "Marabou Reluplex"; Angle 2 uses "DeepPoly ERAN over-approximation" — distinct toolchains from the same parent field but non-overlapping literatures.

**Score: 3**

---

## P1 — PROCEDURE ADHERENCE: 1/3

Checking three required structural elements:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:** Partially present. The output ends with a "Coverage Summary" table (lines 308–340) listing all 20 angles with their traditions, a required-coverage check naming primary traditions, failure cases angle (12), and adjacent disciplines (13, 20). Gap check is present. The cross-disciplinary slot is present and explicitly marked. However, the selection basis for why control theory and AI governance were chosen as the adjacent disciplines is embedded in the angle descriptions rather than stated formally in the coverage map section. Marginally incomplete.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:** ABSENT. The output opens immediately with Angle 1 and contains no preamble structured as an intake brief. No question-type classification (e.g., survey vs. novel methods vs. tools) and no severity assessment appear anywhere before the angle list.

**(c) ≥1 gate documented as run (GATE PASSED or GATE FAILED notation):** ABSENT. No gate notation of any kind appears in the document.

Only one of the three required elements (the coverage map, partially) is present. Intake brief and gate notation are both absent.

Evidence: Coverage summary present at lines 308–340 with "Required coverage check:"; no "GATE PASSED" or "GATE FAILED" text; no intake brief section.

**Score: 1**

---

## M1 — SELF-ASSESSMENT DEGRADED MODE: -1

Checking all four required elements:

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** ABSENT. This string does not appear anywhere in the output.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** ABSENT.

**(c) ≥1 tradition named as possibly absent due to source limitation:** ABSENT. The document makes no acknowledgment that any tradition may be missing.

**(d) Coverage described as reduced (not FULL):** ABSENT. The coverage summary states "Total angles: 20, Distinct vocabulary traditions: 20" with no caveat about completeness. The framing implies comprehensive coverage.

There is no coverage limitation language anywhere in the document. The m1=-1 condition applies: no VOCABULARY SELF-REPORT FLAG and no coverage limitation language visible.

Evidence: "Total angles: 20 / Distinct vocabulary traditions: 20" (Coverage Summary) — presents coverage as complete with no limitation acknowledgment; "VOCABULARY SELF-REPORT FLAG" does not appear.

**Score: -1**

---

## Final Scores

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary Tradition Coverage | 3 |
| Q7 — Structural Completeness | 2 |
| Q5 — Actionability | 3 |
| Q3 — Precision / Non-Redundancy | 3 |
| P1 — Procedure Adherence | 1 |
| M1 — Self-Assessment Degraded Mode | -1 |
