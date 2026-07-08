# INT-10 Blind Evaluation — Input 2, Condition A, Evaluator 1

Scored: 2026-07-05
Output read: kit-maker/trials/int-10/stage-2-execution/input-2/cond-a-output.md
Topic: Chain-of-thought reasoning in LLMs — when it works, when it fails, and why.

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output lists 20 distinct vocabulary traditions, all non-synonymous. Clear examples not derivable from user input words ("chain-of-thought," "reasoning," "LLMs," "works," "fails," "why"):

- "Dual-process theory / cognitive science" (Angle 7) — user said nothing about cognitive science or System 2 thinking
- "Educational psychology / learning science (worked-example effect, metacognitive prompting)" (Angle 8) — entirely outside user vocabulary
- "Philosophy of mind / phenomenology (inner speech, Vygotskian externalization)" (Angle 17) — adjacent discipline with non-overlapping primary subject matter
- "Calibration / epistemic uncertainty (Bayesian ML)" (Angle 15) — Bayesian framing not in user input
- "Program synthesis / code generation (PL, software engineering)" (Angle 16) — PL/SE tradition, different primary domain

Adjacent-discipline criterion: Angles 7, 8, and 17 are from cognitive science, educational psychology, and philosophy of mind respectively — all different primary subject matter from ML/NLP. Multiple non-overlapping traditions easily satisfy the ≥1 cross-disciplinary requirement.

Criterion met at Score 3: ≥4 distinct non-synonymous traditions (20 present), ≥2 not derivable from user input (at least 5 clearly independent), ≥1 from adjacent discipline (at least 3).

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 2**

Checking all three required elements:

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:**
Present, distributed across angles. Angle 4 ("Faithfulness and Plausibility of Generated Reasoning") frames CoT as potentially "post-hoc rationalization" — a specific mechanism: the verbalized chain is plausible-looking but does not reflect the model's actual causal computation. Query: `"post-hoc rationalization" language model reasoning explanation`. Angle 19 ("Implicit vs Explicit Reasoning — Does Verbalization Help?") explicitly tests the null hypothesis that verbalization is not necessary, with query: `chain-of-thought ablation verbalization necessary sufficient LLM performance`. These name specific failure mechanisms (rationalization post-hoc, verbalization unnecessary), not just "failures exist." Element (a): PRESENT.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Absent. Searched the entire output — this string does not appear anywhere. Angle 14 is titled "Adversarial Robustness of CoT" but contains no "ADVERSARIAL-FLAGGED" notation. Element (b): ABSENT.

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:**
Present. Angle 7 ("Cognitive Science Parallels — System 2 Thinking") is explicitly labeled "Dual-process theory / cognitive science (psychology, cognitive science journals)" with queries using "deliberative reasoning," "cognitive architecture," "slow thinking" — vocabulary from cognitive psychology, not NLP. Angle 8 is from educational psychology. Angle 17 is from philosophy of mind with Vygotsky citation. Element (c): PRESENT.

Two of three elements present (a, c). Score: 2.

---

## Q5 — ACTIONABILITY

**Score: 2**

All 20 angles have exactly 3 runnable query strings (≥2 satisfied universally).

Specificity operator quality by sample:

Strong: Angle 17 Query 2 — `Vygotsky inner speech externalized reasoning artificial intelligence` — named author as specificity operator. Angle 11 Query 3 — `"process reward model" step-level chain-of-thought training LLM` — named technique, highly specific. Angle 9 Query 1 — `chain-of-thought mathematical reasoning GSM8K MATH benchmark LLM` — named benchmarks as specificity operators. Angle 6 Query 2 — `"tree of thoughts" beam search reasoning LLM planning` — named technique pair. Angle 16 Query 1 — `"program of thought" code generation reasoning LLM Python tool use` — named technique + named language.

Weak (generic concatenation without specificity operator): Angle 20 Query 1 — `chain-of-thought prompting best practices production LLM applications guide` — "best practices" and "guide" are not tradition-specific; no Boolean, no named technique, no named venue, no numerical threshold. Angle 20 Query 2 — `prompt engineering chain-of-thought practitioner lessons failure production` — "practitioner lessons" is not a technical specificity operator.

Angle 20 Query 3 does use `site:github.com OR site:huggingface.co` (Boolean OR + named venues), so ≥1 specificity operator per angle is met for all 20 angles. However, "all queries use tradition-specific vocabulary" fails because Angle 20 Q1-Q2 are generic phrase concatenations. With approximately 2-3 out of 60 queries (~5%) being generic, this exceeds the 80% threshold for Score 2 but does not meet the "all" threshold for Score 3.

Score: 2 (≥80% tradition-specific vocab, ≥80% have specificity operators; "all" threshold not met due to Angle 20 Q1-Q2).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 2**

Checking for angle pairs where query overlap would retrieve >60% of same papers:

**Overlap pair 1 — Angle 5 (Failure Modes and Null Results) vs Angle 13 (Hallucination and Error Propagation):**
Angle 5 Query 1: `chain-of-thought reasoning failure modes hallucination wrong steps LLM`. Angle 13 Query 1: `chain-of-thought hallucination error propagation reasoning steps LLM`. The term "hallucination" appears in both, and both angle titles concern CoT failures. Papers on CoT hallucination would likely appear in both search result sets. Overlap likely >60%.

**Overlap pair 2 — Angle 3 (Mechanistic Interpretability) vs Angle 4 (Faithfulness):**
Angle 3 Query 2: `"scratchpad" reasoning faithfulness internal computation LLM`. The word "faithfulness" is also the central term of Angle 4. Both angles investigate whether generated reasoning steps reflect actual internal computation. However, Angle 3 targets circuit-level analysis (transformer attention, circuits) and Angle 4 targets explanation evaluation (XAI, fidelity metrics). The vocabulary differs enough that overlap is probably 40-60%, borderline.

No fully synonymous pairs identified — Angles 5 and 13 differ in framing (general null results vs specific propagation mechanism), and Angles 3 and 4 differ in methodology (mechanistic vs evaluative).

At most 1-2 overlap pairs, no fully synonymous pairs. Score: 2.

---

## P1 — PROCEDURE ADHERENCE

**Score: 0**

The output consists entirely of 20 research angles followed by a summary table. No procedural structure is visible.

- Coverage map: A summary table lists angle titles and tradition names, but it contains no gap check, no cross-disciplinary slot with stated selection basis, and no identification of what was NOT covered. It is a roster, not a coverage analysis.
- Intake brief: Completely absent. No vocabulary traditions identification separate from the angles, no question-type classification, no severity assessment.
- Gate notation: No "GATE PASSED" or "GATE FAILED" text anywhere in the output.

The summary table prevents p1=-1 (it is marginally a tradition list), but the complete absence of intake brief structure and gate documentation places this at Score 0: angles only, no procedural structure visible.

Evidence: The document opens directly with "## Angle 1: Prompting Methodology and Few-Shot CoT" and closes with "Total angles: 20 / Distinct vocabulary traditions: 20" — no framing, no procedure, no gates.

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: -1**

The text "VOCABULARY SELF-REPORT FLAG" does not appear anywhere in the output. There is no acknowledgment of source limitations, no statement of reduced coverage, no identification of traditions that might be absent, and no severity rating.

The final summary states "Distinct vocabulary traditions: 20" with no caveat — the output presents itself as complete with no self-assessed limitation.

Evidence of complete absence: Final two lines are "**Total angles: 20**" and "**Distinct vocabulary traditions: 20**" — affirmative count with no limitation language of any kind.

m1 = -1: no VOCABULARY SELF-REPORT FLAG and no coverage limitation language visible.

---

## Score Summary

| Dimension | Score |
|-----------|-------|
| Q1 Vocabulary tradition coverage | 3 |
| Q7 Structural completeness | 2 |
| Q5 Actionability | 2 |
| Q3 Precision / non-redundancy | 2 |
| P1 Procedure adherence | 0 |
| M1 Self-assessment degraded mode | -1 |
