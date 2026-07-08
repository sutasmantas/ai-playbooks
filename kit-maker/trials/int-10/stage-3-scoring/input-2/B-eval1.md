# INT-10 Blind Scoring — Input 2, Condition B, Evaluator 1

Date: 2026-07-06
Evaluator: subagent eval1 (session 2026-07-06, independent re-score)
Condition: B (blind — condition identity read from file header only; not used in scoring)

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output enumerates 9 distinct non-synonymous vocabulary tradition labels across the intake brief, coverage map, and summary counts:
1. NLP/ML prompting
2. ML learning/training (process supervision)
3. Mechanistic interpretability
4. AI safety/alignment (faithfulness)
5. Formal methods/logic
6. Cognitive science/psychology
7. ML evaluation/benchmarking
8. Knowledge representation/program synthesis (adversarial)
9. Education/pedagogy (cross-disciplinary)

User input words: "chain-of-thought," "reasoning," "LLMs," "works," "fails," "why." Traditions NOT derivable from user input include: AI safety/alignment (faithfulness), Formal methods/logic, ML evaluation/benchmarking, Knowledge representation/program synthesis, Education/pedagogy — well above the ≥2 threshold.

Adjacent discipline (different primary subject matter): Tradition 9 (Education/pedagogy) is structurally distinct, with the output explicitly noting it "uses non-ML terminology (cognitive load, expertise reversal, self-explanation, redundancy effect)" and "does NOT appear in the intake brief vocabulary." Tradition 6 (Cognitive science/psychology) also qualifies.

**Determining evidence:**
- "Distinct vocabulary traditions: 9 (NLP/ML prompting; ML learning/training; Mechanistic interpretability; AI safety/alignment; Formal methods/logic; Cognitive science/psychology; ML evaluation/benchmarking; Knowledge representation/program synthesis [adversarial]; Education/pedagogy [cross-disciplinary])"
- "Target tradition: Educational psychology / learning science... This tradition does NOT appear in the intake brief vocabulary and uses non-ML terminology (cognitive load, expertise reversal, self-explanation, redundancy effect). It is structurally distinct from all seven identified traditions."

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present:

**(a) Null-hypothesis angle with specific failure MECHANISM:**
Angle 8 (N1) names specific failure mechanisms: "smaller models are harmed by CoT prompting," "CoT gains do not transfer to new benchmarks or model families," "artifacts of benchmark contamination," "replication failures." These are specific mechanisms, not merely "failures exist."

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Present at line 275: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"
Also present in the type allocation slot: "Slot D1 (Adversarial-FLAGGED)"

**(c) Cross-disciplinary angle from a different primary field with non-overlapping vocabulary:**
Angle 10 (C1) draws from Educational psychology/learning science, citing "worked examples effect," "expertise reversal effect," "cognitive load theory," "redundancy effect" — non-overlapping with any ML vocabulary tradition. The output explicitly flags this angle as "NOT in intake brief."

**Determining evidence:**
- "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"
- "**Vocabulary tradition:** Educational psychology / learning science (NOT in intake brief)"

---

## Q5 — ACTIONABILITY

**Score: 3**

All 10 angles have ≥2 runnable query strings (most have 3, Angle 1 has 4). Every angle uses tradition-specific vocabulary. All angles contain ≥1 specificity operator.

Specificity operators observed:
- Boolean OR: "process supervision" OR "outcome supervision" (A2 Q1); "does not improve" OR "hurts performance" OR "negative results" (A8 Q1); "unfaithful reasoning" OR "post-hoc rationalization" (A4 Q1)
- Named techniques: "let's think step by step" (A1 Q2); "self-consistency chain-of-thought majority voting" (A1 Q3); "tree-of-thought graph-of-thought program-of-thought" (A1 Q4); "expertise reversal effect" (C1 Q2)
- Named venues/benchmarks: "GSM8K MATH benchmark" (A5 Q2); "arXiv cs.LO" (A5 source note)
- Quoted phrases functioning as specificity constraints throughout

No angle relies on generic concatenation alone. The adversarial (D1) and cross-disciplinary (C1) angles use their respective tradition's native vocabulary exclusively.

**Determining evidence:**
- "process reward model 'process supervision' OR 'outcome supervision' reasoning language model intermediate steps 2023 2024 2025"
- "'expertise reversal effect' step-by-step reasoning instruction performance when harmful redundancy 2018 2024"

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The output acknowledges a borderline overlap concern for A3 (Mechanistic interpretability) vs A4 (Faithfulness), but inspection of the actual query vocabulary determines the overlap would not reach >60%.

A3 queries center on: "mechanistic interpretability," "transformer internal computation," "hidden states," "scratchpad tokens," "emergent reasoning abilities scale," "in-context learning mechanism." These retrieve mechanistic interpretability papers (circuit-level work, attention head analysis, activation patching methodology applied to understanding how models compute).

A4 queries center on: "faithfulness," "unfaithful reasoning," "post-hoc rationalization," "sycophancy," "counterfactual intervention," "explanation fidelity," "alignment transparency," "'does not reflect' computation." These retrieve faithfulness/alignment papers (behavioral probes of whether the trace matches the output, sycophancy studies, deceptive alignment work).

These are different research communities with different terminology. While the conceptual question (does CoT reflect real computation?) has mechanistic and faithfulness framing, the actual query vocabulary is different enough that retrieval sets would diverge well below 60%. Papers like Elhage et al. (circuits) dominate A3; papers like Turpin et al. or Lanham et al. (faithfulness evaluation) dominate A4. Cross-retrieval at the margin would be well under 60%.

All other pairs are clearly distinct: A1 (inference-time prompting) vs A2 (training-time supervision); A5 (logical/mathematical properties) vs A7 (evaluation methodology); N1 (disconfirming vocabulary) vs all confirmatory; D1 (program synthesis/planning vocabulary) and C1 (educational psychology vocabulary) are structurally isolated from all other angles by database and vocabulary.

Zero pairs identified where retrieval overlap would exceed 60%. The output's own borderline disclosure strengthens transparency but does not constitute evidence of >60% overlap.

**Determining evidence:**
- "A3 vs A4: BORDERLINE — mechanistic interpretability (A3) and faithfulness (A4) share some causal-intervention methodology. Verdict: PASS — different research communities (interpretability community vs. alignment/safety community), different primary question ('what happens' vs. 'does the trace tell the truth')."
- Query text examined: A3 Q1 "chain-of-thought mechanistic interpretability transformer internal computation hidden states" vs A4 Q1 "chain-of-thought faithfulness 'unfaithful reasoning' OR 'post-hoc rationalization' language model causal" — vocabulary divergent enough to prevent >60% retrieval overlap.

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements are present and complete:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
The COVERAGE MAP section explicitly lists all 7 confirmatory traditions with planned angle slots and gap flags ("Gap flag: No — will be covered by..."). The cross-disciplinary slot states its selection basis in full: "Educational psychology has a 40+ year empirical literature on when explicit step-by-step reasoning (worked examples, self-explanation prompts) aids or hinders learning. The expertise reversal effect shows that explicit reasoning scaffolding harms expert learners — a finding that may have direct analogues for larger/more capable LLMs. This tradition does NOT appear in the intake brief vocabulary and uses non-ML terminology..."

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
INTAKE BRIEF section is present with: 7 candidate vocabulary traditions listed with representative terms; question-type classification ("EXPLORATORY") with reasoning; domain maturity estimate; severity assessment ("Source B status: UNAVAILABLE — MODERATE").

**(c) ≥1 gate documented as run:**
GATE SUMMARY section documents 4 gates, each with explicit "PASS" or "PASS with one flag" verdicts and sub-criteria checked.

**Determining evidence:**
- "Gate 1 — Completeness: PASS" / "Gate 2 — Distinctness: PASS with one flag" / "Gate 3 — Launchability: PASS" / "Gate 4 — Scoring prohibition: PASS"
- "**Question type:** EXPLORATORY" / "Source B status: UNAVAILABLE — MODERATE"

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Three of the four required elements are present; one is absent or incomplete.

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** PRESENT — appears at line 38 ("Proceeding with VOCABULARY SELF-REPORT FLAG applied") and in the Flag Summary ("VOCABULARY SELF-REPORT FLAG — all 9 vocabulary traditions were enumerated by LLM only"). ✓

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** NOT FULLY PRESENT — The output uses "Severity: MODERATE" and "UNAVAILABLE — MODERATE" throughout. The exact label "MODERATE RISK" or "HIGH RISK" does not appear verbatim anywhere in the output. The severity level is communicated but the required label format is not used.

**(c) ≥1 tradition named as possibly absent due to source limitation:** PRESENT — "One tradition present in the actual literature may be missing" (Flag 2); "The LLM cannot enumerate traditions it has not encountered" (Intake Brief NOTE). ✓

**(d) Coverage described as reduced (not FULL):** PRESENT — "One tradition present in the actual literature may be missing"; "External validation via survey-paper probe recommended before treating this tradition list as exhaustive." ✓

Score 2 applies: self-report flag and coverage limitation language are present, but element (b) is missing the required exact severity risk label.

**Determining evidence:**
- "Proceeding with VOCABULARY SELF-REPORT FLAG applied" — (a) present
- "Severity: MODERATE" — approximates (b) but does not use the required label "MODERATE RISK" or "HIGH RISK" verbatim

---

## Summary Table

| Dimension | Score | Max |
|-----------|-------|-----|
| Q1 — Vocabulary tradition coverage | 3 | 3 |
| Q7 — Structural completeness | 3 | 3 |
| Q5 — Actionability | 3 | 3 |
| Q3 — Precision / non-redundancy | 3 | 3 |
| P1 — Procedure adherence | 3 | 3 |
| M1 — Self-assessment degraded mode | 2 | 3 |
