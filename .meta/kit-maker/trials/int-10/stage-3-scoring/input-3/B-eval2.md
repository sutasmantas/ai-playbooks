# INT-10 Blind Evaluation — Input 3, Condition B, Evaluator 2
**Date:** 2026-07-06
**Evaluator:** 2 (blind — condition unknown at scoring time; filename seen but content scored independently)

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

User input words: "context," "length," "LLM," "performance."

Traditions identified in the output (11 total):
1. ML systems / transformer architecture — derivable from user input
2. NLP evaluation / benchmarks — partially derivable
3. ML efficiency / systems — partially derivable
4. Alignment / instruction following — NOT derivable from user input
5. Cognitive science / human memory — explicitly flagged "absent from user framing"; NOT derivable; different primary subject matter (psychology)
6. Retrieval-augmented generation / hybrid NLP — partially derivable
7. Task-specific NLP analysis — partially derivable
8. Software engineering / LLM application development — partially derivable
9. Information retrieval — explicitly "NOT in intake brief"; adjacent discipline (IR)
10. Information theory / compression — explicitly "NOT in intake brief"; adjacent discipline
11. Information science / knowledge management — different primary subject matter

Criterion check:
- ≥4 distinct non-synonymous traditions: YES (11)
- ≥2 NOT derivable from user input: YES (Cognitive science / human memory; Information retrieval; Information theory; Information science / knowledge management)
- ≥1 from adjacent discipline: YES (Cognitive science, Information retrieval, Information theory / compression all have non-overlapping primary subject matter from ML)

Evidence: "Cognitive science / human memory (absent from user framing)" at Tradition 5 in Coverage Map; "Information retrieval (NOT in intake brief)" as C1 cross-disciplinary slot with stated basis.

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

Checking all three required elements:

**(a) Null-hypothesis angle naming a SPECIFIC failure mechanism:**
Angle 9 is titled "Evidence That Longer Context Does Not Improve Performance or That Context Scaling Claims Fail." The what-to-extract section names: "studies showing effective context utilization is far smaller than nominal context window size" and "performance plateau findings." Queries include "context length scaling LLM performance plateau degradation irrelevant tokens distraction" and "large language model longer context hurts performance hallucination noise context length." The specific mechanisms named are: performance plateau, distraction by irrelevant tokens, effective context window being smaller than nominal — these go beyond "failures exist" to name specific mechanisms. PRESENT. ✓

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Appears verbatim in the Angle 10 heading: "## ANGLE 10 [ADVERSARIAL-FLAGGED]: Information Overload and Diminishing Returns from Document Length — Non-ML Framing." Also appears in the Angle type field: "Adversarial-FLAGGED — dispatch in separate research context." PRESENT. ✓

**(c) Cross-disciplinary angle from different primary field with non-overlapping vocabulary:**
Angle 11 (Information retrieval) uses vocabulary "BM25, TREC, CLEF, passage ranking, position normalization" — none of these appear in the ML/NLP traditions. Angle 12 (Information theory / compression) uses vocabulary "entropy, mutual information, minimum description length, information bottleneck" — non-overlapping with ML benchmark vocabulary. PRESENT. ✓

All three present.

Evidence: "ADVERSARIAL-FLAGGED" in Angle 10 header; "effective context window smaller than nominal claimed context length evidence" in Angle 9 Q4; "BM25 TF-IDF document length normalization retrieval effect position term frequency" in Angle 11 Q3 (non-overlapping vocabulary from IR).

---

## Q5 — ACTIONABILITY

**Score: 3**

All 12 angles have exactly 4 query strings (Q1–Q4), satisfying ≥2. Assessment by angle:

**Tradition-specific vocabulary check (selected examples):**
- Angle 1: "RoPE ALiBi" (positional encoding techniques), "YaRN RoPE scaling LongRoPE" (named methods)
- Angle 2: "SCROLLS LongBench ZeroScrolls L-Eval" (named benchmarks), "needle in a haystack evaluation"
- Angle 3: "KV cache," "Mamba," "flash attention ring attention" (named systems)
- Angle 4: "\"lost in the middle\"" (named empirical finding, quoted), "attention sink"
- Angle 8: "serial position curve," "working memory capacity limits," "cognitive load" (psychology vocabulary)
- Angle 11: "BM25 TF-IDF document length normalization," "TREC CLEF" (IR vocabulary)
- Angle 12: "information bottleneck," "minimum description length" (information theory vocabulary)

**Specificity operator check:**
- Named techniques: RoPE, ALiBi, YaRN, LongRoPE, BM25, TREC, CLEF, Mamba, flash attention, SCROLLS, LongBench
- Year ranges: "2023 2024 2025" appears in multiple angles
- Named authors/papers: "lost in the middle" (Liu et al. 2023 referenced in intake brief)
- Boolean pairs: all queries combine ≥2 distinct concepts

Weakness noted: Angle 7 (practitioner angle) queries are the weakest in tradition-specificity — "context length limit LLM application development strategy workaround evaluation" (Q3) uses general ML terminology rather than SE-specific vocabulary. However, Q1 and Q4 include year range operators and Q4 ("long context LLM deployment failure mode production engineering challenge 2024 2025") is specific enough. Angle 7 passes the ≥1 specificity operator threshold.

All angles: ≥2 runnable queries ✓, tradition-specific vocab present ✓ (with Angle 7 weakest), ≥1 specificity operator ✓.

Evidence: "Q1: positional encoding context length extrapolation large language models RoPE ALiBi 2023 2024 2025" (named techniques + year range); "Q1: document position bias retrieval precision recall TREC CLEF long document information retrieval" (named venues, tradition-specific to IR).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The output contains a Gate 2 distinctness analysis that explicitly tests candidate overlap pairs using Boolean-connective logic. Summary of key pairs:

**A1 (ML systems/positional encoding) vs A3 (ML efficiency/KV cache):**
Distinctive terms do not overlap: "positional encoding, RoPE, ALiBi" vs "KV cache, Mamba, linear attention." Architecture papers vs. efficiency/systems papers. No >60% overlap. ✓

**A2 (NLP benchmarks) vs A5 (Task-specific NLP):**
The output flags this as "moderate overlap risk" and recommends title-level filtering. However, A2 queries center on benchmark design papers (SCROLLS, LongBench, ZeroScrolls as named datasets) while A5 queries focus on task-type moderation ("code completion," "few-shot learning," "multi-document reasoning"). The vocabulary divergence is sufficient that >60% overlap is unlikely — benchmark design papers and task-analysis papers are different paper types even when they reference the same tasks. PASS with noted risk.

**A4 (Position bias — LLM behavior) vs A9 (Null-hypothesis):**
A4 targets papers explaining the position-bias phenomenon; A9 targets papers providing null/disconfirming results on context length benefit. Some overlap is possible (position bias papers ARE disconfirming), but A4's vocabulary ("lost in the middle," "attention sink") and A9's vocabulary ("no improvement," "performance plateau," "effective context window smaller than nominal") diverge sufficiently that >60% overlap is unlikely.

**C1 (Information retrieval) vs A6 (RAG):**
Traditional IR vocabulary (BM25, TREC, CLEF) vs. RAG vocabulary (LangChain, chunk size, retrieval augmented generation). Different source populations for pre-2020 IR literature; some overlap for recent neural retrieval papers. Output identifies Q4 of C1 as a "bridge query" and notes it as acceptable. PASS.

No fully synonymous pairs identified. No pairs assessed as >60% overlap.

Evidence: Gate 2 analysis states "all other pairs: no distinctive-term overlap flagged. PASS"; A2/A5 noted as "moderate overlap risk" but with vocabulary divergence sufficient to avoid >60% threshold.

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

Checking all three required elements:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
The "# COVERAGE MAP" section lists all 5 intake brief traditions with "Gap flag:" fields for each, plus identifies 3 additional traditions (RAG, task-specific NLP, SE/LLM deployment). Two cross-disciplinary slots (C1 and C2) are explicitly allocated with "Basis:" statements explaining their selection:
- C1: "IR has a long-standing literature on how document length affects retrieval precision/recall... this tradition is NOT in the intake brief and uses distinct vocabulary (BM25, TREC, passage ranking)"
- C2: "Information theory provides a formal framework... this tradition is NOT in the intake brief and uses genuinely distinct vocabulary (entropy, mutual information, compression)"
PRESENT. ✓

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
The "# INTAKE BRIEF" section contains: 5 vocabulary traditions under "Candidate vocabulary traditions"; question type explicitly classified as "EXPLORATORY" with reasoning ("'How X affects Y' has causal framing but no controlled comparison or stated metric — default to EXPLORATORY"); severity assessment present as "Source B status: UNAVAILABLE — MODERATE." PRESENT. ✓

**(c) ≥1 gate documented as run (GATE PASSED or GATE FAILED notation):**
The "# GATE SUMMARY" section documents four gates: Gate 1, Gate 2, Gate 3, Gate 4, each with explicit "Gate N: PASS" verdicts. Additionally, the intake brief contains its own gate: "Gate passes. Proceeding to angle-generation.md." PRESENT. ✓

All three required elements present.

Evidence: "Gate 1: PASS" / "Gate 2: PASS" / "Gate 3: PASS" / "Gate 4: PASS" in Gate Summary; "Question type: EXPLORATORY" with classification reasoning in intake brief; C1 coverage map entry with "Basis: IR has a long-standing literature... NOT in the intake brief."

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Checking all four required elements:

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:**
Appears at line 40: "Proceeding; VOCABULARY SELF-REPORT FLAG active."
Appears again at line 465: "**VOCABULARY SELF-REPORT FLAG (per intake.md Step 5 and angle-quality.md Limit 3):**"
PRESENT. ✓

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":**
The output states: "Source B status: UNAVAILABLE — MODERATE — Source A (LLM translation) + Source C (absent-term signal) together identified 5 distinct vocabulary traditions."
The severity label used is "MODERATE" — not "MODERATE RISK" or "HIGH RISK." The word "RISK" does not appear in proximity to this severity label. Strict reading: the exact required phrases do not appear. NOT PRESENT as specified. ✗

**(c) ≥1 tradition named as possibly absent due to source limitation:**
At line 453: "One or more applied traditions (e.g., legal/regulatory uses of long-context LLMs; computational biology / genomics sequences) may be missing." Named traditions: legal/regulatory; computational biology / genomics. PRESENT. ✓

**(d) Coverage described as reduced (not FULL):**
Line 26: "NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered."
Line 465–466: "All traditions were enumerated by LLM only; external validation via survey-paper probe is recommended before accepting the tradition check as complete."
PRESENT. ✓

Elements (a), (c), (d) present. Element (b) not met as specified — "MODERATE" present but exact phrase "MODERATE RISK" or "HIGH RISK" absent. One required element missing → Score 2.

Evidence for M1=2: "VOCABULARY SELF-REPORT FLAG active" (a satisfied); "UNAVAILABLE — MODERATE —" (b: severity indicator present but not exact "MODERATE RISK"/"HIGH RISK" phrase); "legal/regulatory uses of long-context LLMs; computational biology / genomics sequences may be missing" (c satisfied); "All traditions were enumerated by LLM only; external validation via survey-paper probe is recommended" (d satisfied).

---

## Summary Table

| Dimension | Score | Range |
|-----------|-------|-------|
| Q1 — Vocabulary tradition coverage | 3 | 0–3 |
| Q7 — Structural completeness | 3 | 0–3 |
| Q5 — Actionability | 3 | 0–3 |
| Q3 — Precision / non-redundancy | 3 | 0–3 |
| P1 — Procedure adherence | 3 | 0–3 or -1 |
| M1 — Self-assessment degraded mode | 2 | 0–3 or -1 |
