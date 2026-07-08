# INT-10 Blind Scoring — Input 16, Condition B, Evaluator 1

**Date scored:** 2026-07-06
**Evaluator:** eval1 (blind — condition identity unknown)
**Artifact path:** kit-maker/trials/int-10/stage-2-execution/input-16/cond-b-output.md

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output names at least 10 distinct, non-synonymous vocabulary tradition labels across the intake brief, coverage map, and tradition summary table. These include: formal methods (deductive, model checking, abstract interpretation as separate sub-traditions), neural network verification (architecture scaling, robustness certification), programming languages (formal specification, type theory), probabilistic verification, ML safety/AI alignment, AI governance/safety assurance, control theory/CPS safety, mechanistic interpretability, runtime verification, and empirical ML reliability.

Traditions NOT derivable from user input words ("formal verification," "LLM," "safety," "properties"):
- Control theory / CPS safety (Lyapunov, control barrier function, CBF, dynamical systems — no overlap with input vocabulary)
- Mechanistic interpretability (circuits, attention heads, TransformerLens, ACDC)
- Probabilistic verification (PAC learning, conformal prediction, stochastic model checking)
- Runtime verification / systems monitoring (RV conference proceedings, enforcement mechanisms)
- AI governance / safety assurance (Goal Structured Notation, DO-178C adjacent, SAFECOMP)
- Programming languages — type theory (refinement types, dependent types, denotational semantics, ICFP)

Adjacent-discipline requirement satisfied by A11 (control theory/CPS), whose primary subject matter is dynamical systems and physical-world controllers, not LLMs or formal program verification.

Evidence: "vocabulary (CBF, CLF, Lyapunov, reachability, safety envelope) is distinct from all 5 intake traditions and from NN verification tradition."

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present.

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:**
Angle N1 ("Failure Modes, Undecidability, and Fundamental Limits of Formal Verification for LLMs") names specific mechanisms: "NP-hardness, undecidability, approximation lower bounds," "scalability failure points (model size, property complexity)," and "cases where verified properties were vacuously satisfied." This is mechanism-level, not the generic "failures exist."

Evidence: "theoretical hardness results (NP-hardness, undecidability, approximation lower bounds), scalability failure points (model size, property complexity)"

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Present in TYPE ALLOCATIONS and in the D1 angle heading: "**[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]**"

Evidence: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"

**(c) Cross-disciplinary angle from a different primary field with non-overlapping vocabulary:**
A11 is explicitly labeled "Angle type: Cross-disciplinary" and tagged "[NOT IN INTAKE BRIEF — cross-disciplinary requirement satisfied]" in TYPE ALLOCATIONS. Vocabulary (CBF, Lyapunov, reachability analysis for dynamical systems, SHERLOCK, NNV, IEEE CDC/ACC/ICCPS) has no overlap with the intake traditions.

Evidence: "Slot A11 (Cross-disciplinary — Control theory / CPS safety) [NOT IN INTAKE BRIEF — cross-disciplinary requirement satisfied]"

---

## Q5 — ACTIONABILITY

**Score: 3**

All 15 angles have exactly 3 runnable query strings (45 total). Every angle exceeds the minimum of 2.

Tradition-specific vocabulary is used throughout — not generic phrase concatenation:
- A3-Q2: "ERAN DeepAbstract DeepPoly AI2 abstract interpretation large neural network safety formal" (named tools)
- A4-Q2: "Marabou alpha-beta-CROWN CROWN MIPVerify transformer architecture verification LLM" (named tools)
- A8-Q2: "conformal prediction formal safety bound language model output distribution guarantee 2024 2025" (named technique + year threshold)
- A11-Q2: "control barrier function neural network policy safety guarantee formal property certificate 2023 2024" (CPS-tradition named concept)
- A7-Q2: "refinement type dependent type neural network safety property enforcement LLM formal" (PL-tradition named concepts)

Specificity operators present throughout: named techniques (LTL, CTL, CBF, Lyapunov, randomized smoothing, conformal prediction), named tools (Marabou, alpha-beta-CROWN, ERAN, DeepPoly, Coq, Lean, Isabelle), named venues (CAV, FMCAD, TACAS, LICS, RV), year constraints (2024 2025, 2023 2024). Every query pairs at least two distinct tradition-specific concepts.

Evidence: "Marabou alpha-beta-CROWN CROWN MIPVerify transformer architecture verification LLM"; "conformal prediction formal safety bound language model output distribution guarantee 2024 2025"

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 2**

The output runs an explicit "BOOLEAN-CONNECTIVE DISTINCTNESS CHECK" evaluating 8 potential overlap pairs. Seven pairs PASS. One pair is flagged:

**A6 (formal specification languages) vs. A9 (alignment property specification):** The output explicitly acknowledges: "SMALL LITERATURE FLAG — for LLM-specific specification literature, the corpus is sparse enough that both queries may retrieve the same 10–15 papers." The queries share anchor vocabulary: A6-Q1 contains "formal specification language LLM safety property verifiable definition" and A9-Q1 contains "formal specification alignment objective language model verifiable safety property value." Both contain "formal specification" + "LLM safety property" + "verifiable," pointing to the same sparse corpus.

This is 1 overlap pair with confirmed retrieval overlap risk. No fully synonymous pairs exist — the conceptual distinction (language design vs. alignment semantics) is genuine but the literature does not yet support the separation.

Score 3 requires zero overlap pairs. Score 2 applies: ≤2 overlap pairs, no fully synonymous pairs.

Evidence: "SMALL LITERATURE FLAG — for LLM-specific specification literature, the corpus is sparse enough that both queries may retrieve the same 10–15 papers. Human judgment required before merge decision."

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements are present and fully populated:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
Full COVERAGE MAP section present. All 6 traditions (5 intake + probabilistic verification + runtime verification) listed with representative terms, planned angle slots, and explicit gap flags (e.g., "Gap flag: Tradition receives 1 slot; a second slot for specific certification standards could be added but is not scheduled"). Cross-disciplinary slot (A11) has a stated "Basis for selection" paragraph explaining the choice of control theory/CPS over other adjacent disciplines.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
Full INTAKE BRIEF section present. Five candidate vocabulary traditions listed with representative terms. Question type classified as "EXPLORATORY" with explicit rationale. Domain maturity estimate present ("academic-heavy with emerging practitioner track") with stated basis.

**(c) ≥1 gate documented as run with GATE PASSED notation:**
QUALITY GATE SUMMARY documents 4 gates with explicit PASS notations: "Gate 1: PASS," "Gate 2: PASS (with small-literature flag on A6/A9 pair)," "Gate 3: PASS," "Gate 4: PASS," "Overall verdict: PASS — dispatch ready."

Evidence: "Gate 1: PASS... Gate 2: PASS (with small-literature flag on A6/A9 pair)... Overall verdict: PASS — dispatch ready"

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:**
PRESENT. Appears in the intake brief: "Proceeding with VOCABULARY SELF-REPORT FLAG." Also in the gate summary flags: "VOCABULARY SELF-REPORT FLAG — all vocabulary traditions were enumerated by LLM only."

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":**
ABSENT verbatim. The output uses "MODERATE" as a standalone severity label: "Source B status: UNAVAILABLE (subagent context) — MODERATE (Source A + Source C produced ≥5 distinct vocabulary traditions)." The exact compound phrase "MODERATE RISK" or "HIGH RISK" does not appear anywhere in the document. "MODERATE" functions as a severity indicator semantically but fails the verbatim criterion as written.

**(c) ≥1 tradition named as possibly absent due to source limitation:**
PRESENT. Multiple traditions named as possibly absent: "neuro-symbolic verification," "neurosymbolic verification," "AI safety guarantees," "provable alignment," "LLM specification mining," "policy verification." Also explicit note: "Specific risk: 'neuro-symbolic verification' may be a distinct tradition not currently captured."

**(d) Coverage described as reduced (not FULL):**
PRESENT. "Survey paper status: NOT CHECKED — Source B unavailable." Explicit recommendation for external validation: "Vocabulary-discovery pass... is recommended before accepting the angle list as covering all traditions." Coverage is described as conditional on source availability, not as FULL.

Three of four elements present; element (b) fails verbatim criterion ("MODERATE" vs. required "MODERATE RISK").

Evidence: "Proceeding with VOCABULARY SELF-REPORT FLAG." / "Source B status: UNAVAILABLE (subagent context) — MODERATE"

---

## Summary

| Dimension | Score |
|-----------|-------|
| Q1 Vocabulary tradition coverage | 3 |
| Q7 Structural completeness | 3 |
| Q5 Actionability | 3 |
| Q3 Precision / non-redundancy | 2 |
| P1 Procedure adherence | 3 |
| M1 Self-assessment degraded mode | 2 |
