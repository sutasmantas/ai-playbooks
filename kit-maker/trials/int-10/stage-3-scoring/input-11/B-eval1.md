# Blind Evaluation — Input 11, Condition B
**Evaluator:** eval1
**Date:** 2026-07-05
**Scoring criteria version:** INT-10, locked 2026-07-05

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output lists 10 distinct vocabulary traditions in the intake brief and coverage map, plus 3 additional slots (null-hypothesis, adversarial, cross-disciplinary), for 13 total distinct tradition labels in the angle count summary. All are non-synonymous.

Traditions NOT derivable from the user's input words ("causal reasoning in language models"):
- "ML generalization / robustness" — spurious correlations, IRM, OOD generalization vocabulary is not present in the user's words
- "AI interpretability / mechanistic analysis" — causal probing, activation patching, TransformerLens vocabulary
- "Measurement theory / psychometrics" — construct validity, Goodhart's law, item response theory
- "Linguistics / discourse analysis" — RST, discourse coherence, causal connectives
- "Cognitive science / psychology" — covariation detection, Michotte launching, dual-process theory
- "Temporal reasoning" — TimeBank-Dense, ROCStories, temporal precedence conflation

At minimum 6 traditions are not derivable from user input, far exceeding the ≥2 threshold.

Adjacent discipline present: Multiple — the clearest are "Measurement theory / psychometrics," "Linguistics / discourse analysis," and "Cognitive science / psychology," each with primary subject matter distinct from LLM research and non-overlapping vocabulary.

Evidence: "Cognitive science / psychology — causal judgment, mental models, counterfactual thinking, causal attribution, covariation detection, mechanism-based reasoning" and "Measurement theory / psychometrics — construct validity, ecological validity, item response theory, benchmark contamination, Goodhart's law."

**Score: 3**

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

**(a) Null-hypothesis angle naming a SPECIFIC failure mechanism:**
Angle N1 names surface-correlation reliance and benchmark collapse under distribution shift as specific failure mechanisms: "LLMs rely on surface correlations rather than genuine causal structure"; "studies where performance on causal benchmarks collapses under minimal distribution shift." The query set reinforces this: "LLM causal reasoning does not generalize out-of-distribution evaluation failure systematic." This is a specific mechanism (surface statistical association as a substitute for causal structure), not merely "failures exist." PRESENT.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Angle D1 header reads: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]." PRESENT verbatim.

**(c) Cross-disciplinary angle from a different primary field with non-overlapping vocabulary:**
Angle C1 targets "Linguistics / discourse analysis (NOT in intake brief — cross-disciplinary slot)" with vocabulary — RST, discourse coherence, causal connectives, pragmatics, Discourse Processes journal — that does not appear in any other angle's tradition vocabulary. The coverage map selection basis is explicitly stated: "This tradition uses vocabulary entirely distinct from both the formal causal inference tradition and the NLP benchmarking tradition... It has its own journal literature (Discourse Processes, Journal of Pragmatics) and author population largely separate from the ML/NLP benchmarking community." PRESENT.

All three present.

**Score: 3**

---

## Q5 — ACTIONABILITY

**Score: 3**

Every angle has ≥2 runnable query strings. Ten angles have 4 queries each; one angle (A7) has 3 queries, with an explicit justification that a fourth would return noise given the small target literature. All exceed the ≥2 threshold.

Tradition-specific vocabulary is present throughout — representative examples:
- A1: "structural causal model language model reasoning evaluation 2023 2024 2025"; "do-calculus Pearl hierarchy language models interventional counterfactual"
- A4: "activation patching causal tracing transformer causal relation"; "circuit-level analysis causal reasoning GPT BERT attention heads MLP"
- D1: "NLP benchmark construct validity measurement causal reasoning evaluation 2023 2024 2025"; "Goodhart law evaluation language model causal reasoning benchmark gaming metric"
- C1: "rhetorical structure theory RST causal relations NLP language model generation"

No query is a generic phrase concatenation. All queries combine at least two distinct concepts, and the majority name specific techniques, benchmarks, authors, or venues as specificity operators: "Pearl hierarchy," "COPA CauseNet," "IRM," "ROME MEMIT," "TransformerLens," "TimeBank-Dense," "Psychometrika," "Goodhart law," year ranges (2023/2024/2025).

Year ranges function as numerical threshold operators and appear in at least one query per angle.

Coverage-gap notes in each angle add a filter criterion for disambiguation (e.g., A6: distinguish senses of "counterfactual" in the literature), further increasing precision of retrieval.

**Score: 3**

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The output runs an explicit Boolean-connective distinctness test in Gate 2, checking six pairs that could plausibly overlap:
- A2 vs. A9: benchmark methodology vs. application-task performance — different research questions, different Q-sets
- A3 vs. N1: mechanism framing vs. disconfirming capability claim — acknowledged partial phenomenon overlap, structurally distinguished
- A6 vs. A1: Stalnaker/Lewis possible-worlds vs. Pearl SCM — different author populations and journals
- A7 vs. A1: representation learning vocabulary vs. formal causal inference vocabulary
- A8 vs. A2: elicitation method vs. measurement methodology
- D1 vs. N1: inferential validity of measurement vs. empirical failure — different traditions and questions

The most plausible residual overlap is A3 and N1, which the output explicitly identifies: "A3 and N1 partial overlap at phenomenon level." However, A3 is confirmatory on the spurious cue mechanism; N1 is disconfirming on the capability claim. These differ in research question, framing, and query vocabulary sufficiently that >60% paper overlap is implausible — A3 queries specifically target "shortcut learning" and "invariant risk minimization" mechanisms, while N1 targets negative results and replication failures.

No angle pair shares a tradition label; no queries are synonymous across angles.

Evidence: "D1 most distinctive terms: 'construct validity psychometrics Goodhart ecological validity benchmark gaming.' N1 most distinctive terms: 'does not generalize failure spurious correlation negative results replication.' D1 challenges the inferential validity of the measurement; N1 challenges the empirical result."

**Score: 3**

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
The COVERAGE MAP section lists all 10 traditions with "Gap flag: no" for each. Cross-disciplinary slot is present with an explicit selection basis: "Basis: Discourse analysis and rhetorical structure theory (RST) study causal connectives... This tradition uses vocabulary entirely distinct from both the formal causal inference tradition and the NLP benchmarking tradition... It has its own journal literature... NOT in intake brief." Full element present.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
INTAKE BRIEF contains: 10 "Candidate vocabulary traditions" enumerated with representative terms; question type "EXPLORATORY" with classification rationale; domain maturity "academic-heavy" with basis; Source B severity "UNAVAILABLE — MODERATE." Full element present.

**(c) ≥1 gate documented as run:**
Four gates are documented with explicit pass/fail notation:
- "Gate 1 verdict: PASS"
- "Gate 2 verdict: PASS"
- "Gate 3 verdict: PASS"
- "Gate 4 verdict: PASS"
- "Overall verdict: PASS — dispatch ready"

Additionally: "Intake gate check: PROCEED to angle generation." Multiple gates present.

All three elements fully present.

**Score: 3**

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:**
Present in the GATE SUMMARY: "1. VOCABULARY SELF-REPORT FLAG — all 10 intake traditions were enumerated by LLM only." Also present in the intake brief body: "proceed with VOCABULARY SELF-REPORT FLAG active." PRESENT.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":**
The output uses "MODERATE" without the "RISK" suffix. Specific text: "Source B (survey-paper probe) was UNAVAILABLE — MODERATE (Source A + Source C produced ≥10 distinct vocabulary traditions)" and "Source B status: UNAVAILABLE — MODERATE — subagent context without web access." The severity level "MODERATE" is labeled, but the exact prescribed strings "MODERATE RISK" or "HIGH RISK" do not appear anywhere in the output. NOT PRESENT as exact text.

**(c) ≥1 tradition named as possibly absent due to source limitation:**
Present and substantial: "The following traditions may be missing and should be verified via survey-paper probe: (a) economics / Granger causality...; (b) legal reasoning...; (c) medical / clinical decision support...; (d) program synthesis / formal verification...; (e) education research." Five traditions named as possibly absent. PRESENT.

**(d) Coverage described as reduced (not FULL):**
Present: "Vocabulary-discovery pass via survey-paper probe recommended before accepting this list as complete" and "Survey paper status: NOT SEARCHED — Source B unavailable in this execution context. Vocabulary-discovery pass strongly recommended before treating the angle list as final." Coverage is explicitly not described as complete/FULL. PRESENT.

Three of four elements satisfied. Element (b) fails on exact text match — "MODERATE" is present as a severity label but "MODERATE RISK" or "HIGH RISK" verbatim is not.

Score 2 applies: "Self-report flag + severity but missing one required element."

**Score: 2**

---

## Summary Table

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary tradition coverage | 3 |
| Q7 — Structural completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / non-redundancy | 3 |
| P1 — Procedure adherence | 3 |
| M1 — Self-assessment degraded mode | 2 |
