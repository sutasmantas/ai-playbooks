# Blind Scoring — INT-10, Input 16, Condition C, Evaluator 1

**Artifact scored:** `kit-maker/trials/int-10/stage-2-execution/input-16/cond-c-output.md`
**Scored:** 2026-07-06
**Evaluator:** eval1 (blind — condition not known at time of scoring; second independent pass)

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

Rationale: The intake brief lists 8 distinct, non-synonymous vocabulary traditions. I checked derivability from the user input "Formal verification methods for ensuring LLM safety properties hold":
- Tradition 1 (formal methods / software verification) — derivable from "formal verification."
- Tradition 2 (AI safety / alignment research) — partially derivable from "safety."
- Traditions 7 (type theory / programming language theory) and 8 (systems safety engineering) are NOT derivable from the user's input words; these are distinct disciplinary traditions with non-overlapping vocabulary (dependent types, refinement types, FMEA, SIL, safety cases have no lexical anchor in the user prompt).
- The coverage map adds additional traditions not in the intake brief, most importantly the cross-disciplinary slot: "Control theory / dynamical systems safety (cross-disciplinary — NOT in intake brief)" with vocabulary like "control barrier functions," "Lyapunov stability," "Hamilton-Jacobi reachability" — none of which are derivable from the user prompt and which come from a primary field (control engineering) with a different subject matter than formal verification or AI safety.

Evidence: "7. Type theory / programming language theory — dependent types, refinement types, gradual typing, type-based safety, effect systems" (not in user prompt vocabulary); "Target tradition: Control theory / dynamical systems safety (Lyapunov stability, control barrier functions, reachability analysis from control engineering)" (adjacent discipline, non-overlapping vocabulary).

Criterion check: ≥4 distinct non-synonymous traditions — YES (8+ listed); ≥2 NOT derivable from user input — YES (type theory, systems safety engineering, control theory, differential privacy/cryptographic methods are all non-derivable); ≥1 from adjacent discipline — YES (control theory). Score 3 met.

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

Rationale: All three required elements are present.

**(a) Null-hypothesis angle naming a specific failure mechanism:**
Angle N1 is titled "Evidence That Formal Verification Cannot Scale or Guarantee Safety in LLMs (Null-Hypothesis)" and explicitly names specific mechanisms: "Complexity-theoretic impossibility results," "undecidability results," "negative results on scaling formal methods to LLM scale," "arguments that LLM semantics are too underspecified for formal verification." These are specific failure mechanisms, not a generic statement that failures exist.

**(b) Exact text "ADVERSARIAL-FLAGGED":**
Present verbatim in angle D1: "### ANGLE D1: [ADVERSARIAL-FLAGGED] Why Formal Verification Is the Wrong Framework for LLM Safety" and again in the closing line: "[ADVERSARIAL-FLAGGED: dispatch this in a separate research context with no prior confirmatory results]."

**(c) Cross-disciplinary angle from a different primary field with non-overlapping vocabulary:**
Angle C1 is labeled "Vocabulary tradition: Control theory / dynamical systems safety (cross-disciplinary — NOT in intake brief)" and uses vocabulary including "control barrier function," "Lyapunov stability," "Hamilton-Jacobi reachability," "dynamical systems," "control engineering" — none of which appear in the formal methods or AI safety traditions constituting the main angle set.

Evidence: "[ADVERSARIAL-FLAGGED: dispatch this in a separate research context with no prior confirmatory results]"; "N1 explicitly uses disconfirming vocabulary ('does not,' 'failure,' 'limitation,' 'undecidable,' 'negative results')"; "C1 targets control theory / dynamical systems safety, a tradition explicitly NOT listed in the intake brief."

---

## Q5 — ACTIONABILITY

**Score: 3**

Rationale: Every angle checked has ≥2 runnable query strings. Tradition-specific vocabulary is used throughout, and specificity operators are consistent across the angle list.

Sampled checks:
- A4: Q2 is `Marabou Reluplex MILP encoding transformer language model safety verification` — named techniques (Marabou, Reluplex) as specificity operators; tradition-specific (SMT/constraint solving vocabulary).
- A3: Q3 is `ERAN DeepPoly abstract interpretation LLM formal safety guarantee` — named tools; highly tradition-specific (abstract interpretation vocabulary).
- C1: Q3 is `Hamilton-Jacobi reachability safe RL LLM controller formal safety guarantee` — named technique from control theory; cross-tradition Boolean AND specificity.
- A12: Q2 is `AI governance formal safety property audit evidence LLM traceability NIST AI RMF` — named standard (NIST AI RMF); specificity via named venue/instrument.
- A16: Q3 is `PRISM probabilistic temporal logic language model stochastic safety property` — named tool (PRISM); probabilistic model checking vocabulary.
- D1: Q1 is `LLM safety empirical red teaming behavioral evaluation outperforms formal methods sociotechnical` — adversarial-tradition-specific (sociotechnical, red teaming); Boolean AND of two distinct concepts.

No angle was found to have only 1 query. No query reads as a generic concatenation of input prompt words without tradition-specific anchors. All checked queries contain ≥1 named technique, named tool, named venue/standard, or Boolean AND of two distinct concepts.

Evidence: "Q2: `Marabou Reluplex MILP encoding transformer language model safety verification`" (named tools as specificity operators); "Q3: `Hamilton-Jacobi reachability safe RL LLM controller formal safety guarantee`" (named technique from adjacent field).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 2**

Rationale: The output ran a distinctness gate (Gate 2) and flagged two overlap-risk pairs. No fully synonymous pair was identified, but two pairs were explicitly flagged as carrying overlap risk.

**Pair 1 — A7/A8 (certified robustness vs. transformer-scale verification):**
The output labels this a "SMALL LITERATURE FLAG." Looking at the actual queries: A7 uses "randomized smoothing, L_p, adversarial perturbation, certified defense" while A8 uses "scalability, attention mechanism, Lipschitz, tractability, complexity." These are distinct vocabularies and would retrieve different primary paper sets. The overlap risk is from a small underlying corpus rather than synonymous angles. This pair is marginal — I judge it at <60% same-paper retrieval given the vocabulary difference.

**Pair 2 — A5/A18 (alignment formalization vs. semantic grounding):**
The output labels this "porous boundary" and "moderate overlap risk." Examining queries: A5 Q2 is `alignment specification problem language model safety formalize harmlessness honesty`; A18 Q2 is `semantic grounding alignment property language model formal verification gap`. These share "alignment," "language model," "formal" but diverge on "harmlessness honesty" vs. "semantic grounding." A5 draws from the AI alignment specification literature; A18 draws from computational semantics and NLP. The boundary is porous enough to risk partial overlap — "formal," "safety predicate," "LLM" appear in both and could surface the same specification-gap papers. This pair is the primary precision risk.

No fully synonymous pair was found. With ≤2 flagged overlap pairs (one marginal, one moderate), Score 2 is the correct assignment.

Evidence: "A5/A18 porous boundary — the specification formalization (A5) and semantic grounding problem (A18) overlap conceptually; A18 is predicted as a gap angle and A5 as consensus; keeping separate is defensible but the boundary should be reviewed"; "A7/A8 potential overlap — SMALL LITERATURE FLAG applied."

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

Rationale: All three required elements are present.

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
The coverage map section is present and structured. Each tradition entry includes a "Gap flag" field (all read "Gap flag: No" with explanations). The cross-disciplinary slot is explicitly present: "Cross-disciplinary slot (required — tradition NOT in intake brief): Target tradition: Control theory / dynamical systems safety... Basis for selection: LLM-driven agentic systems can be modeled as dynamical systems with state-space trajectories; control-theoretic safety certificates (control barrier functions, Hamilton-Jacobi reachability) provide an independently developed vocabulary for proving safety that does not overlap with the formal methods or AI safety traditions listed above." Selection basis is explicitly stated.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
The intake brief contains: 8 vocabulary traditions (labeled 1–8); question-type classification ("**Question type:** EXPLORATORY"); and severity assessment: "**Source B status:** UNAVAILABLE — MODERATE" with reasoning about what this means for coverage confidence, plus "Domain maturity estimate: Academic-heavy with emerging mixed character" providing a scope-severity characterization.

**(c) ≥1 gate documented as run:**
Multiple gates are documented: "**Gate PASS — proceeding to angle generation.**" (intake gate); "**Gate 1: PASS**"; "**Gate 2: PASS with two human-judgment flags**"; "**Gate 3: PASS**"; "**Gate 4: PASS**". Gate notation is present throughout.

Evidence: "Gate PASS — proceeding to angle generation" (intake gate documented); "Cross-disciplinary slot (required — tradition NOT in intake brief): Target tradition: Control theory / dynamical systems safety... Basis for selection: [explicit rationale]."

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Rationale: Two of the four required M1 elements are clearly present. One is present with non-exact phrasing. One is absent.

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:**
Present in two places: "**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only." (intake brief, line 29) and "**VOCABULARY SELF-REPORT FLAG (applied):**" (Gate Summary). Criterion met.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":**
The output uses "UNAVAILABLE — MODERATE" not "MODERATE RISK." The exact required phrasing is not present. The severity signal is present (the word "MODERATE" combined with "UNAVAILABLE" does communicate a risk level), but the required exact string "MODERATE RISK" or "HIGH RISK" does not appear anywhere in the document. This criterion is not met by strict reading.

**(c) ≥1 tradition named as possibly absent due to source limitation:**
Not met. The output says "The LLM cannot enumerate traditions it has not encountered" and recommends a "vocabulary-discovery pass" — but does not name any specific tradition as possibly absent due to the source limitation. The limitation is acknowledged generically but not concretized into a named gap tradition. This criterion is not met.

**(d) Coverage described as reduced (not FULL):**
Met. The output says "External validation via survey-paper probe is recommended before accepting the tradition check as complete" and the final flag says "survey-paper probe recommended to catch traditions the LLM cannot enumerate" — coverage is explicitly described as not verified/complete.

Summary: (a) YES, (b) NO (exact phrasing absent), (c) NO (no specific absent tradition named), (d) YES. Two elements clearly present; one element has the spirit but wrong phrasing; one element is absent. Score 2 (flag + reduced-coverage present, one or more required elements missing).

Evidence: "**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only. Source B (survey-paper probe) was not run." (flag present); "Source B status: UNAVAILABLE — MODERATE" (severity as "MODERATE" not "MODERATE RISK" — phrasing mismatch); no named tradition appears as "possibly absent due to source limitation."

---

## Final Scores

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary tradition coverage | 3 |
| Q7 — Structural completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / non-redundancy | 2 |
| P1 — Procedure adherence | 3 |
| M1 — Self-assessment degraded mode | 2 |
