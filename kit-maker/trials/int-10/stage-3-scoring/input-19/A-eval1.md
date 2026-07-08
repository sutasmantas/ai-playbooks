# Scoring Rationale — INT-10, Input-19, Condition A, Evaluator 1

**Date:** 2026-07-06
**Evaluator model:** claude-sonnet-4-6 (blind; condition identity unknown at scoring time)

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output presents 15 angles with explicitly labeled vocabulary traditions. Distinct non-synonymous traditions include:
- Mechanistic interpretability (transformer circuits)
- Attention-based interpretability (NLP)
- Causal mechanistic interpretability (causal inference + neural internals)
- Residual stream analysis / logit lens
- Sparse autoencoder (SAE) interpretability / superposition
- Representation probing / diagnostic classifiers
- Knowledge localization / factual association editing
- CoT faithfulness / post-hoc rationalization
- Representation engineering / linear representation hypothesis
- Superposition theory / feature geometry
- Cognitive science / process tracing

This is well above the ≥4 threshold. Traditions NOT derivable from user input words ("mechanistic interpretability" and "chain-of-thought"): "logit lens / residual stream analysis," "sparse autoencoder / superposition theory," "representation engineering / linear representation hypothesis," "cognitive science / process tracing" — at minimum four beyond the input vocabulary. Adjacent discipline requirement: Angle 15 explicitly labels "Cognitive science / process tracing (adjacent to computational interpretability)" with non-overlapping vocabulary ("dual process theory," "working memory," "process tracing").

**Quoted evidence:** "Cognitive science / process tracing (adjacent to computational interpretability)" and "Sparse autoencoder (SAE) interpretability (superposition / feature decomposition)"

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 2**

Checking the three required elements:

**(a) Null-hypothesis angle naming a specific failure mechanism:** Angle 10 ("Failure Cases and Null Results — When Mechanistic Methods Break Down") names specific failure mechanisms — "superposition" and "polysemanticity" as the limiting mechanism, and "scalability failure" as another. Queries cite "polysemanticity limits interpretability reasoning transformer" and "mechanistic interpretability scalability failure." This names mechanisms, not just "failures exist." PRESENT.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:** Searched entire output. This string does not appear anywhere. ABSENT.

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:** Angle 15 satisfies this — cognitive science vocabulary ("process tracing," "dual process theory," "system 1 system 2," "cognitive architecture," "working memory analogy") is non-overlapping with the main ML/interpretability vocabulary and the angle explicitly flags itself as "adjacent discipline." PRESENT.

Two of three elements present.

**Quoted evidence:** "'superposition' polysemanticity limits interpretability reasoning transformer" (angle 10 specificity); "ADVERSARIAL-FLAGGED" — absent from output.

---

## Q5 — ACTIONABILITY

**Score: 2**

All 15 angles carry exactly 3 query strings, satisfying the ≥2 requirement universally.

**Tradition-specific vocabulary:** The large majority use named techniques rather than generic phrase concatenation. Named techniques present include: "activation patching," "path patching," "logit lens," "tuned lens," "sparse autoencoder / SAE," "induction heads," "ROME," "MEMIT," "grokking," "steering vector," "probing classifier," "linear probe," "scratchpad," "modular addition," "process tracing," "dual process theory." This is well above 80%.

**Specificity operators:** Most queries use quoted multi-word named techniques (Boolean AND effect), venue-specific filters (site:arxiv.org), or named-author/paper references (ROME, MEMIT, Neel Nanda). However, a subset of queries falls short. Examples of borderline/failing cases:

- Angle 7, Query 2: `induction circuit generalisation reasoning chain-of-thought` — no quotes, no Boolean connective, no named author/venue; reads as keyword concatenation.
- Angle 10, Query 1: `mechanistic interpretability limitations "chain-of-thought" failure cases null results` — quotes only around "chain-of-thought"; the rest is thematic concatenation.
- Angle 13, Query 2: `intermediate tokens computation chain-of-thought "what do they compute" mechanistic` — the phrase "what do they compute" is in quotes but unusual as a search construct.

These represent roughly 15-25% of all queries. The 80% threshold is met but the 100% threshold is not, preventing Score 3.

**Quoted evidence:** `"activation patching" "chain-of-thought" causal mediation transformer` (strong, Score 3 standard); `induction circuit generalisation reasoning chain-of-thought` (generic concatenation, no operator).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 2**

Scanning for angle pairs where query overlap would retrieve >60% of the same papers:

**Identified overlap pair 1 — Angles 5 and 12:** Angle 5 is "Sparse Autoencoder Feature Decomposition During CoT" (SAE interpretability / superposition); Angle 12 is "Superposition and Polysemanticity in Reasoning Features" (superposition theory / feature geometry). SAE is the primary empirical tool for studying superposition, and Anthropic's superposition papers directly motivate the SAE work. A search for SAE features on CoT (Angle 5) and a search for superposition/polysemanticity in reasoning features (Angle 12) would both retrieve the Anthropic monosemanticity / SAE papers, the toy models of superposition paper, and related work. Estimated retrieval overlap: likely above 60%.

**Identified overlap pair 2 — Angles 1 and 7:** Angle 1 is broad circuits analysis; Angle 7 focuses on induction heads. Induction heads are the canonical circuits-thread example from Anthropic; papers analyzing induction heads would appear under both angles. However, Angle 1's queries add "multi-step reasoning" modifiers and "reverse engineering" framing that would retrieve a broader set, so overlap is likely in the 40-60% range — borderline.

No fully synonymous pairs are present. The output covers 15 structurally distinct angles despite the two overlap instances identified above.

**Quoted evidence:** Angle 5: "SAE feature activation reasoning steps transformer mechanistic"; Angle 12: "superposition polysemanticity reasoning features transformer chain-of-thought" — same papers would appear in both.

---

## P1 — PROCEDURE ADHERENCE

**Score: -1**

The output contains only angle listings and a summary table. There is no coverage map section, no intake brief section (no vocabulary traditions section, no question-type classification, no severity assessment), and no gate notations ("GATE PASSED" or "GATE FAILED" text). The entire output is a numbered list of research angles with query strings. No procedural scaffolding of any kind is visible.

Criteria for -1: "no coverage map, intake brief, or gate notation visible anywhere in the output." All three are absent.

**Quoted evidence:** The output begins "## Angle 1: Circuits Analysis of Multi-Step Reasoning" and ends with the summary table — no procedural sections exist anywhere.

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: -1**

The exact text "VOCABULARY SELF-REPORT FLAG" does not appear anywhere in the output. There is no severity label ("MODERATE RISK" or "HIGH RISK"). There is no acknowledgment that any vocabulary tradition might be absent due to source limitations. There is no language describing coverage as reduced or partial. The output presents its 15 angles without any meta-commentary on limitations, source constraints, or coverage confidence.

Criteria for -1: "no VOCABULARY SELF-REPORT FLAG and no coverage limitation language visible anywhere in the output." Both conditions are met.

**Quoted evidence:** Output ends at the summary table with no trailing limitation section; no "VOCABULARY SELF-REPORT FLAG" string is present.

---

## Final Scores

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary tradition coverage | 3 |
| Q7 — Structural completeness | 2 |
| Q5 — Actionability | 2 |
| Q3 — Precision / non-redundancy | 2 |
| P1 — Procedure adherence | -1 |
| M1 — Self-assessment degraded mode | -1 |
