# INT-10 Blind Scoring — Input 18, Condition C, Evaluator 1

**Evaluator:** Evaluator 1 (blind — condition unknown at scoring time)
**Scored:** 2026-07-06
**Output file:** `stage-2-execution/input-18/cond-c-output.md`
**Topic:** In-context learning in language models — how and why it works

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The user input contains these vocabulary-relevant words: "in-context learning," "language models," "how," "why," "works," "research." None map to "Mechanistic interpretability," "Meta-learning / implicit optimization," "Bayesian ML / statistical theory," "Cognitive science / psychology," "Formal language theory / computational complexity," or "Statistical learning theory / PAC learning."

The intake brief lists 7 distinct vocabulary traditions. The coverage map expands to 10 named traditions. The final angle list covers 13 distinct tradition labels:
1. Empirical NLP / few-shot learning
2. Mechanistic interpretability
3. Meta-learning / implicit optimization
4. Bayesian ML / statistical theory
5. Training dynamics / pretraining science
6. Scaling laws / emergent abilities research
7. Representational learning / task vectors
8. Reasoning / chain-of-thought NLP
9. Information retrieval / nearest-neighbor ML
10. Multilingual / cross-lingual NLP
11. Formal language theory / computational complexity (adversarial)
12. Cognitive science / psychology (cross-disciplinary)
13. Statistical learning theory / PAC learning (cross-disciplinary)

That is 13 distinct labels — well above ≥4. At minimum 6 are NOT derivable from user input words (mechanistic interpretability, meta-learning, Bayesian ML, PAC learning, cognitive science, formal language theory) — well above ≥2.

Adjacent discipline requirement: "Cognitive science / psychology" is explicitly labeled "(adjacent, NOT user-named)" in the intake brief and uses vocabulary ("analogical reasoning," "schema theory," "exemplar-based categorization," "one-shot concept acquisition") from psychology/cognitive science — a different primary subject matter from ML/NLP. The output states the selection basis: "Human few-shot learning and analogical reasoning are the biological reference class for ICL." Formal language theory / computational complexity is a second adjacent discipline.

**Key evidence:** "6. Cognitive science / psychology (adjacent, NOT user-named) — analogical reasoning, schema theory, implicit learning, similarity-based generalization, one-shot concept acquisition, human few-shot learning" (intake brief); "Target tradition 1: Cognitive science / analogical reasoning (NOT in intake brief) Basis: Human few-shot learning and analogical reasoning are the biological reference class for ICL" (coverage map cross-disciplinary slot).

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present.

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:**

Angle 11 is explicitly labeled "(NULL-HYPOTHESIS): Evidence that ICL does NOT generalize — brittleness, failure modes, and null results." It names specific failure mechanisms: "sensitivity to irrelevant surface features," "failure on compositional or out-of-distribution tasks," "papers showing random labels give equivalent performance (challenging the 'learning' framing)," "replication failures; scope limits of published positive results." These are specific mechanisms, not the generic statement "failures exist."

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**

Appears in the Angle 12 heading ("ANGLE 12 [ADVERSARIAL-FLAGGED]:") and inline in the angle body: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]." The exact string "ADVERSARIAL-FLAGGED" appears at least twice.

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:**

Angle 13 (Cognitive science / psychology) uses vocabulary entirely foreign to ML: "analogical reasoning," "schema transfer," "exemplar prototype theory," "Bayesian program learning," "one-shot concept generalization cognitive model." Sources are explicitly routed to "PubMed + Cognitive Science journal (not arXiv — this tradition publishes in peer-reviewed cognitive science venues)" — confirming non-overlapping disciplinary provenance. The output also notes MeSH translation is required because "few-shot learning" is not a PubMed MeSH term — further confirming the vocabulary gap across fields.

**Key evidence:** "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]" (Angle 12); "Angle 11 (N1) — framed as 'Evidence that ICL does NOT generalize'; queries use 'failure cases,' 'does not generalize,' 'negative results,' 'no learning.'" (Gate 1 summary).

---

## Q5 — ACTIONABILITY

**Score: 2**

Every angle has exactly 4 runnable query strings, well above ≥2. No TBD, placeholder, or unfilled fields exist.

Most queries use tradition-specific vocabulary and have specificity operators. Strong examples:
- Angle 2 Q1: `"induction heads" "in-context learning" transformers mechanistic interpretability` — Boolean AND of quoted named technique
- Angle 3 Q1: `"in-context learning" "implicit gradient descent" forward pass transformer optimization` — Boolean AND of quoted named technique
- Angle 8 Q1: `"task vectors" "in-context learning" language model representation transformer` — quoted named technique
- Angle 12 Q2: `in-context learning automata regular context-free grammar recognition transformer generalization` — named formal language concepts
- Angle 13 Q4: `"Bayesian program learning" one-shot concept generalization cognitive model human` — quoted named theory
- Year thresholds (specificity operator) in Angle 1 Q1 ("2023 2024 2025"), Angle 4 Q2 ("2023 2024")

Why not Score 3: Some queries are generic concatenations without a clear specificity operator. Angle 1 Q2: "few-shot prompting generalization across tasks language model capability comparison" chains keywords without a Boolean AND of two distinct named technical concepts, a named author/venue, or a numerical threshold. Angle 1 Q4: "prompt-based learning GPT evaluation survey task coverage abilities" is similarly generic (GPT is not a specific enough operator to qualify as a named technique/venue in the sense of the criterion). Enough of the 60 total queries lack specificity operators that the "all" standard (Score 3) does not hold; the ≥80% threshold (Score 2) better reflects the observed distribution.

**Key evidence:** `"in-context learning" "implicit gradient descent" forward pass transformer optimization` (Angle 3 Q1 — strong specificity operator); vs. `few-shot prompting generalization across tasks language model capability comparison` (Angle 1 Q2 — generic concatenation, no specificity operator).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The output runs an explicit Gate 2 distinctness check across 7 close angle pairs and documents the retrieval-overlap assessment for each.

The most borderline pair flagged is A3 (meta-learning / implicit gradient descent) vs A4 (Bayesian ML):
- A3 query vocabulary: "implicit gradient descent," "algorithm distillation," "learning-to-learn," "linear attention," "convergence analysis"
- A4 query vocabulary: "Bayesian inference," "posterior," "prior," "statistical mechanics," "information theory"

These represent different research communities and mutually exclusive primary vocabulary. A paper on algorithm distillation and linear attention would not typically use Bayesian posterior vocabulary. The probability of >60% retrieval overlap from these query sets is low; the borderline flag is conceptual (both address the same underlying phenomenon) but not terminological. Gate verdict is correctly "PASS with flag."

Other close pairs (A2/A8, A4/A14, A5/A7, A1/A6, A6/A10, A9/A1) all have clearly distinct vocabulary clusters per the gate analysis. The pair A2 (induction heads, circuit analysis) vs A5 (pretraining data, induction head formation) shares the term "induction heads" but A2 targets mechanistic-role papers and A5 targets training-dynamics papers — the same subfield but different sections of literature, well under 60% expected overlap.

No fully synonymous pairs exist. Every angle uses at least one tradition-specific term absent from any other angle's core query vocabulary.

**Key evidence:** "A3 vs A4: BORDERLINE — some theoretical papers address both. Retained as distinct because they arise from different research communities with different primary vocabularies. PASS with flag" (Gate 2 analysis).

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements fully present:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**

The COVERAGE MAP section lists 10 numbered tradition entries each with representative vocabulary terms and planned angle slots. It explicitly runs a gap check: "Traditions NOT yet represented in the planned list: None — all traditions from the intake brief and expanded enumeration have at least one angle slot." Three cross-disciplinary slots are documented with explicit selection basis for each (e.g., "Basis: Human few-shot learning and analogical reasoning are the biological reference class for ICL... this tradition may use ICL-adjacent vocabulary... that does not appear in ML literature").

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**

INTAKE BRIEF lists 7 candidate vocabulary traditions with representative terms, classifies question type as "EXPLORATORY" with an explicit decision-rule citation ("Prompt contains 'how and why it works' — mechanistic and theoretical explanatory question... Default: EXPLORATORY per intake.md Step 3 decision rule"), and gives "Source B status: UNAVAILABLE — MODERATE" with the reasoning for MODERATE severity (exceeds the ≥2 tradition threshold for MODERATE).

**(c) ≥1 gate documented as run (GATE PASSED or GATE FAILED notation):**

Four gates documented with explicit verdicts: "Gate 1 verdict: PASS," "Gate 2 verdict: PASS (with flag...)," "Gate 3 verdict: PASS (with MeSH translation recommendation...)," "Gate 4 verdict: PASS." Unambiguous gate notation present.

**Key evidence:** "Gate 1 verdict: PASS" (Gate Summary); "Source B status: UNAVAILABLE — MODERATE" (Intake Brief); "Cross-disciplinary slots (required — targeting traditions NOT in intake brief): Target tradition 1: Cognitive science / analogical reasoning (NOT in intake brief) Basis: Human few-shot learning..." (Coverage Map).

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Checking all four required elements for Score 3:

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** PRESENT. Line 73: "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions were enumerated by LLM only."

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** ABSENT. The severity label used is "MODERATE" (line 67: "Source B status: UNAVAILABLE — MODERATE") and "MODERATE severity assessment" in prose. The exact compound phrases "MODERATE RISK" and "HIGH RISK" do not appear anywhere in the output. This element fails the exact-phrasing test.

**(c) ≥1 tradition named as possibly absent due to source limitation:** PRESENT. Gate summary lines 821–823: "Traditions that may be missing: practitioner NLP (MLOps/prompt engineering communities), neurosymbolic AI tradition, program synthesis tradition."

**(d) Coverage described as reduced (not FULL):** PRESENT. "Expected angle coverage: MODERATE, not FULL." (line 75).

Three of four elements present; element (b) fails on exact phrasing ("MODERATE" vs "MODERATE RISK"). Score drops to 2: self-report flag + missing one required element.

**Key evidence:** "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions were enumerated by LLM only. External validation via survey-paper probe is recommended before accepting the tradition check as complete. Expected angle coverage: MODERATE, not FULL." (lines 73–75, confirming (a) and (d) present); "Source B status: UNAVAILABLE — MODERATE" (line 67, confirming (b) absent as "MODERATE RISK").

---

## Summary Table

| Dimension | Score | Binding reason |
|-----------|-------|----------------|
| Q1 Vocabulary tradition coverage | 3 | 13 distinct traditions; ≥6 not derivable from user input; cognitive science and formal language theory are adjacent disciplines |
| Q7 Structural completeness | 3 | All three: specific failure mechanism in N1, "ADVERSARIAL-FLAGGED" verbatim, cross-disciplinary from cognitive science with non-overlapping vocabulary |
| Q5 Actionability | 2 | Every angle ≥2 queries; most have specificity operators and tradition-specific vocab; ~20% of queries are generic concatenations without clear specificity operators |
| Q3 Precision / non-redundancy | 3 | Zero pairs with >60% retrieval overlap; A3/A4 borderline flagged and gated as PASS with documented reasoning |
| P1 Procedure adherence | 3 | Coverage map, intake brief, and four explicit gate verdicts all fully present and complete |
| M1 Self-assessment degraded mode | 2 | VOCABULARY SELF-REPORT FLAG present; reduced coverage stated; absent traditions named; severity uses "MODERATE" not "MODERATE RISK" |
