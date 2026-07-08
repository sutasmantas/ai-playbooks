# INT-10 Blind Evaluation — Input-20, Condition A, Evaluator 1

**Scored:** 2026-07-06
**Evaluator:** eval1 (blind — condition unknown at time of scoring)

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output contains 15 distinct tradition labels across 15 angles. Traditions clearly NOT derivable from user input words ("LLM agents," "tools," "tool calls," "succeed," "fail," "reliably"):

- "Replication science, meta-research, ML evaluation critique" (Angle 11)
- "Formal methods, software engineering, programming languages" (Angle 13)
- "Cognitive science, situated cognition, human factors" (Angle 14)
- "MLOps, site reliability engineering (SRE)" (Angle 15)
- "Human-computer interaction (HCI), human-AI teaming" (Angle 9)
- "Information retrieval, RAG systems" (Angle 12)

Adjacent-discipline criterion met: Angle 14 (cognitive science) explicitly frames the problem through "mental model alignment," "situated cognition," "affordance" — primary subject matter is cognitive science, not NLP/ML. Angle 13 (formal methods/PL) uses PLDI/POPL venues and "type-directed synthesis." Both have primary subject matter entirely distinct from the LLM agent topic.

**Evidence:** "Vocabulary tradition / field: Cognitive science, situated cognition, human factors" (Angle 14); "Vocabulary tradition / field: Formal methods, software engineering, programming languages" (Angle 13)

All three Q1 sub-criteria met: ≥4 distinct labels (15), ≥2 not derivable from user input (6+), ≥1 from adjacent discipline (Angles 14, 13, 9 all qualify).

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 2**

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:** Present. Angle 11 ("Null Results and Negative Findings in Agent Benchmarks") names specific mechanisms: "near-chance performance," "benchmarks are saturated or contaminated," "improvements over baselines disappear under controlled conditions." These are specific mechanisms, not generic "failures exist" claims. Present.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:** Searched the full document. This exact string does not appear anywhere. Angle 10 covers adversarial misuse but carries no "ADVERSARIAL-FLAGGED" notation. NOT present.

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:** Present. Angle 14 states "Borrows from human factors research on operator mental models of automated systems" and uses "affordance misalignment," "situated cognition," "mental model" — vocabulary absent from NLP/ML. Angle 9 (HCI: "automation bias," "appropriate reliance") and Angle 13 (PL: "type-directed synthesis," "program synthesis") also qualify independently.

Two of three sub-criteria satisfied. Score 2.

**Evidence:** "Cases where agents achieve near-chance performance on tool-use tasks, where benchmarks are saturated or contaminated" (Angle 11, confirming specific mechanism); "ADVERSARIAL-FLAGGED" — absent.

---

## Q5 — ACTIONABILITY

**Score: 2**

All 15 angles have exactly 3 queries (≥2 threshold met for every angle). Most queries use tradition-specific vocabulary. However, Score 3 requires ALL queries to have specificity operators, and a count across all 45 queries finds at least 4 that lack them:

- `function call error classification large language model` (Angle 2, Q3) — no quoted phrase, no Boolean, no named technique
- `agent planning failure recovery tool sequence robustness` (Angle 5, Q3) — generic concatenation
- `context window length effect function calling accuracy` (Angle 8, Q2) — generic concatenation
- `LLM long context tool call schema recall degradation` (Angle 8, Q3) — no specificity operator

That is approximately 4 of 45 queries (~91%) having specificity operators and similar proportion using tradition-specific vocabulary. Score 3 criterion requires "all"; Score 2 requires ≥80%. The output falls clearly above 80% on both conditions, confirming Score 2.

High-quality examples meeting Score 3 bar: `"ReAct" OR "Toolformer" OR "chain-of-thought" tool reliability multi-hop` (Angle 5, named techniques + Boolean); `"indirect prompt injection" tool use exploit language model agent` (Angle 10, named attack class); `type-directed generation tool use LLM formal method` (Angle 13, PL-specific named technique).

**Evidence:** `agent planning failure recovery tool sequence robustness` (generic, no operator); `"indirect prompt injection" tool use exploit language model agent` (named technique, high specificity — illustrating the within-output variance)

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

Checked all plausible high-overlap pairs:

- Angles 1 (benchmark evaluation) vs. 11 (null results / benchmark critique): Both touch benchmarks, but Angle 1 queries target success-rate measurement while Angle 11 targets "null result," "contamination," "near-chance" — the papers that argue benchmarks are unreliable are a largely distinct subset.
- Angles 2 (error taxonomy) vs. 3 (grounding/hallucination): Angle 2 uses "taxonomy," "malformed arguments," "wrong tool chosen"; Angle 3 uses "grounding," "schema adherence," "non-existent API," "hallucination" in the grounding-theory sense. Overlap on the word "hallucinated" in Angle 2 Q1 may pull some shared papers, but the frame (taxonomical classification vs. grounding theory) retrieves different primary literature. Estimated overlap: 30-40%.
- Angles 1 and 12 (both reference ToolBench): Angle 1 evaluates call accuracy generally; Angle 12 specifically addresses the retrieval-before-calling failure mode using IR vocabulary ("recall," "precision," "BM25," "embedding"). Different sub-problem; papers exclusively about retrieval accuracy are a small subset of ToolBench literature.

No pair estimated above 60% retrieval overlap. No fully synonymous pairs. Score 3.

**Evidence:** `ToolBench tool retrieval recall precision large language model` (Angle 12, IR-specific problem framing) vs. `"API-Bank" OR "ToolBench" OR "ToolTalk" evaluation reliability` (Angle 1, benchmarking framing) — same named benchmark, different retrieval targets.

---

## P1 — PROCEDURE ADHERENCE

**Score: 1**

The document opens directly with angles. No intake brief appears anywhere (no vocabulary tradition pre-specification, no question-type classification, no severity assessment). No gate notation ("GATE PASSED" or "GATE FAILED") appears anywhere.

The summary table at end (lines 234-250) lists angle titles and tradition labels. This is a tradition list, which is one element of a coverage map — but it contains no gap check and no stated selection basis for the cross-disciplinary slot. The coverage map is present in a highly incomplete form; the intake brief is entirely absent; no gate ran.

This fits Score 1: "Only one of coverage map / intake brief present; or both highly incomplete." The tradition list is the one partially present element. Score 0 ("angles only; no procedural structure visible") would require the summary table not to count at all; it does represent a minimal tradition inventory even if incomplete.

**Evidence:** Document opens with "# Research Angles: LLM Agent Tool-Use Reliability" then immediately Angle 1 — no intake section; summary table at end lists traditions but no gap check or gate record.

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: -1**

The exact string "VOCABULARY SELF-REPORT FLAG" does not appear anywhere in the document. There is no coverage limitation language of any kind. The document closes with "Total angles: 15 / Distinct tradition labels: 15" with no caveat about comprehensiveness, no acknowledgment of source limitations, and no risk-severity label.

Per rubric: "Set m1=-1 if no VOCABULARY SELF-REPORT FLAG and no coverage limitation language visible anywhere." Both conditions for -1 are met.

**Evidence:** "Total angles: 15 / Distinct tradition labels: 15" — implies complete coverage rather than acknowledged partial coverage; "VOCABULARY SELF-REPORT FLAG" absent.

---

## Final Scores

| Dimension | Score |
|-----------|-------|
| Q1 Vocabulary Tradition Coverage | 3 |
| Q7 Structural Completeness | 2 |
| Q5 Actionability | 2 |
| Q3 Precision / Non-Redundancy | 3 |
| P1 Procedure Adherence | 1 |
| M1 Self-Assessment Degraded Mode | -1 |
