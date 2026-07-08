# Blind Scoring Rationale — INT-10, Input 3, Evaluator 3
**Artifact scored:** cond-b-output.md
**Evaluator:** 3 (blind — condition identity unknown at scoring time)
**Date:** 2026-07-06 (re-scored by fresh subagent instance)

---

## Q1 — VOCABULARY TRADITION COVERAGE — Score: 3

**Criterion:** ≥4 distinct non-synonymous tradition labels; ≥2 NOT derivable from user input; ≥1 from adjacent discipline.

**User input vocabulary:** "context length," "LLM," "performance" — three words.

**Traditions enumerated in the output (11 total):**
1. ML systems / transformer architecture
2. NLP evaluation / benchmarks
3. ML efficiency / systems
4. Alignment / instruction following
5. Cognitive science / human memory (explicitly flagged as absent from user framing)
6. Retrieval-augmented generation / hybrid NLP
7. Task-specific NLP analysis
8. Software engineering / LLM application development
9. Information retrieval (IR) — cross-disciplinary, not in intake brief
10. Information theory / compression — cross-disciplinary, not in intake brief
11. Information science / knowledge management — adversarial slot

**Not derivable from user input:** Cognitive science / human memory, Information retrieval, Information theory / compression, Information science / knowledge management, Alignment / instruction following, ML efficiency / systems — well over 2.

**Adjacent discipline:** Cognitive science / human memory (primary subject: psychology, not ML); Information retrieval (primary subject: document ranking systems); Information theory (primary subject: mathematics/communication theory). Multiple adjacent disciplines present.

**Evidence:** "Cognitive science / human memory (absent from user framing)" and "Information retrieval (NOT in intake brief)" and "Information theory / compression (NOT in intake brief)."

**Score: 3**

---

## Q7 — STRUCTURAL COMPLETENESS — Score: 3

**Criterion:** ALL THREE: (a) null-hypothesis angle with specific failure MECHANISM; (b) exact text "ADVERSARIAL-FLAGGED" verbatim; (c) cross-disciplinary angle from different primary field with non-overlapping vocabulary.

**(a) Null-hypothesis with specific mechanism:** Angle 9 names specific mechanisms beyond "failures exist": "performance plateau findings," "effective context utilization is far smaller than nominal context window size," "cases where more context degraded performance." These are specific mechanistic claims, not generic failure acknowledgment.

Evidence: "evidence that longer context does NOT improve performance or that claimed gains do not hold" and queries use "plateau," "hurts performance," "effective context window smaller than nominal."

**(b) "ADVERSARIAL-FLAGGED" verbatim:** Present in the Angle 10 section header: "## ANGLE 10 [ADVERSARIAL-FLAGGED]: Information Overload and Diminishing Returns from Document Length"

Evidence: "[ADVERSARIAL-FLAGGED]" appears verbatim in the header.

**(c) Cross-disciplinary angle from different primary field:** Angle 11 is Information Retrieval (primary field: document ranking, IR systems — not ML). Vocabulary is non-overlapping: "TREC," "CLEF," "BM25," "TF-IDF," "passage ranking," "document length normalization" — none appear in the ML traditions. Angle 12 (Information Theory) also qualifies: "entropy," "mutual information," "minimum description length," "information bottleneck."

Evidence: "Information retrieval (NOT in intake brief)" and "TREC," "CLEF," "BM25," "TF-IDF document length normalization" appearing in queries.

**Score: 3**

---

## Q5 — ACTIONABILITY — Score: 3

**Criterion:** Every angle ≥2 runnable queries; all use tradition-specific vocabulary; all have ≥1 specificity operator (Boolean AND, named technique/author/venue, or numerical threshold).

All 12 angles have exactly 4 queries each (Q1–Q4). Sample check per angle:

- Angle 1: "positional encoding context length extrapolation large language models RoPE ALiBi 2023 2024 2025" — named techniques (RoPE, ALiBi), year range. "YaRN RoPE scaling LongRoPE position interpolation context window performance evaluation" — named techniques.
- Angle 2: "long context language model benchmark evaluation SCROLLS LongBench ZeroScrolls L-Eval 2023 2024 2025" — named venues/benchmarks.
- Angle 8 (cognitive science): "working memory capacity limits serial position effect human recall primacy recency experimental" — tradition-specific vocabulary (PubMed/PsycINFO domain), Boolean AND of two distinct concepts.
- Angle 10 (adversarial): "information overload document length comprehension accuracy decision quality diminishing returns empirical" — explicitly excludes ML vocabulary per generation note; uses JASIST/info-science vocabulary.
- Angle 11 (IR): "document position bias retrieval precision recall TREC CLEF long document information retrieval" — named venues (TREC, CLEF), tradition-specific.
- Angle 12 (info theory): "information bottleneck transformer attention context length information theory 2023 2024 2025" — named framework (information bottleneck), named field.

No angle has generic phrase concatenation without specificity. Year ranges (2023 2024 2025) and named techniques (RoPE, ALiBi, YaRN, SCROLLS, LongBench, BM25, TF-IDF, Mamba, flash attention) appear across all angles.

Evidence: "YaRN RoPE scaling LongRoPE position interpolation context window performance evaluation" and "BM25 TF-IDF document length normalization retrieval effect position term frequency."

**Score: 3**

---

## Q3 — PRECISION / NON-REDUNDANCY — Score: 3

**Criterion:** Score 3 = zero pairs with >60% query overlap. Score 2 = ≤2 overlap pairs; no fully synonymous pairs.

The output ran an explicit Gate 2 analysis on candidate overlap pairs. Evaluating each:

**A1 (positional encoding) / A3 (KV cache / efficiency):** A1 queries use "RoPE," "ALiBi," "YaRN," "positional interpolation" — architecture papers. A3 queries use "KV cache," "Mamba," "flash attention," "throughput" — systems/efficiency papers. These target different bodies of literature. Below 60% overlap threshold.

**A2 (named benchmarks) / A5 (task-type analysis):** The output flags "moderate overlap risk" and requires "title-level filtering." However, examining the specific queries: A2's distinctive vocabulary includes "SCROLLS," "LongBench," "ZeroScrolls," "L-Eval," "needle in a haystack" — benchmark NAME queries that predominantly retrieve benchmark design/results papers. A5's distinctive vocabulary includes "code completion," "code generation," "few-shot learning in-context examples," "multi-document reasoning" with "task-dependent." Papers retrieved are different in character: benchmark methodology papers (A2) vs. task-type comparison papers (A5). The overlap at the paper level is present but not at >60%: A2 will predominantly capture papers that introduce or report on named benchmarks; A5 will predominantly capture papers analyzing moderating effects of task type. Judgment: borderline but below 60% threshold.

**A4 (LLM position bias) / A8 (cognitive science):** Different source databases (arXiv vs. PubMed/PsycINFO); essentially zero overlap. PASS.

**C1 (IR: TREC/BM25) / A6 (RAG: LangChain/chunks):** Traditional IR literature (pre-2020) has no overlap with RAG literature. Minor possible overlap in recent neural retrieval papers bridging both. Below 60%.

**D1 (adversarial: information science) / N1 (null-hypothesis NLP):** Different traditions entirely (information science vs. NLP evaluation). Zero overlap.

No fully synonymous pairs. All 12 angles have distinct anchor vocabulary and distinct source-type profiles. The A2/A5 pair is the only case where overlap is acknowledged, and judgment is that it remains below the 60% threshold given the distinct named-benchmark vs. task-type-analysis focus.

Evidence: "Would OR return substantially the same set? Partial overlap possible... PASS with note: moderate overlap risk" — the output's own gate acknowledged and assessed this pair as below the threshold.

**Score: 3**

---

## P1 — PROCEDURE ADHERENCE — Score: 3

**Criterion:** ALL THREE: (a) coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis; (b) intake brief with vocabulary traditions + question-type classification + severity assessment; (c) ≥1 gate documented as run with GATE PASSED/FAILED notation.

**(a) Coverage map:** Present. Contains 5 intake brief traditions with representative terms, planned angle slots, and gap flags. Cross-disciplinary slots C1 and C2 have stated selection bases: "IR has a long-standing literature on how document length affects retrieval precision/recall... this tradition is NOT in the intake brief and uses distinct vocabulary (BM25, TREC, passage ranking, position normalization)" and "Information theory provides a formal framework for asking whether models effectively use the information content of long inputs... NOT in the intake brief."

**(b) Intake brief:** Present. Contains vocabulary traditions (5 listed), question-type classification ("EXPLORATORY — 'How X affects Y' has causal framing but no controlled comparison"), and severity assessment ("Source B status: UNAVAILABLE — MODERATE").

**(c) Gates documented:** Gate 1 through Gate 4 all present with explicit "Gate 1: PASS," "Gate 2: PASS," etc. notations. Each gate documents specific checks and their outcomes.

Evidence: "Gate 1: PASS" and "Question type classified: EXPLORATORY" and "C1 target tradition: Information retrieval / Basis: IR has a long-standing literature..."

**Score: 3**

---

## M1 — SELF-ASSESSMENT DEGRADED MODE — Score: 2

**Criterion:** ALL FOUR: (a) exact text "VOCABULARY SELF-REPORT FLAG" verbatim; (b) severity labeled "MODERATE RISK" or "HIGH RISK"; (c) ≥1 tradition named as possibly absent; (d) coverage described as reduced (not FULL).

**(a) "VOCABULARY SELF-REPORT FLAG" verbatim:** Present. Appears in two places:
- Inline in the intake brief: "VOCABULARY SELF-REPORT FLAG active"
- In the gate summary section: "**VOCABULARY SELF-REPORT FLAG (per intake.md Step 5 and angle-quality.md Limit 3):**"

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** NOT fully present. The output uses "UNAVAILABLE — MODERATE" as the severity label, not "MODERATE RISK." The exact phrase "MODERATE RISK" does not appear in the output. The closest match is "Source B status: UNAVAILABLE — MODERATE" which omits the word "RISK." This element is missing per the criterion's exact-text standard.

**(c) ≥1 tradition named as possibly absent:** Present. "One or more applied traditions (e.g., legal/regulatory uses of long-context LLMs; computational biology / genomics sequences) may be missing."

**(d) Coverage described as reduced:** Present. "Source A (LLM translation) + Source C (absent-term signal) together identified 5 distinct vocabulary traditions. Proceeding; VOCABULARY SELF-REPORT FLAG active" implies reduced coverage compared to what Source B would have provided. "Vocabulary-discovery pass recommended before accepting the tradition list as complete" confirms coverage is not treated as FULL.

3 of 4 elements present; element (b) fails on exact label ("MODERATE" vs. "MODERATE RISK").

Evidence: "VOCABULARY SELF-REPORT FLAG (per intake.md Step 5 and angle-quality.md Limit 3)" present verbatim; "Source B status: UNAVAILABLE — MODERATE" uses "MODERATE" not "MODERATE RISK."

**Score: 2**

---

## Score Summary

| Dimension | Score | Notes |
|-----------|-------|-------|
| Q1 — Vocabulary Tradition Coverage | 3/3 | 11 distinct traditions; cognitive science, IR, info theory are adjacent disciplines |
| Q7 — Structural Completeness | 3/3 | All three elements present: specific null mechanism, ADVERSARIAL-FLAGGED verbatim, cross-disciplinary IR/info-theory |
| Q5 — Actionability | 3/3 | 4 queries per angle; tradition-specific vocab; named techniques/venues throughout |
| Q3 — Precision / Non-Redundancy | 3/3 | A2/A5 moderate overlap acknowledged but judged below 60% threshold; distinct anchor vocab; no synonymous pairs |
| P1 — Procedure Adherence | 3/3 | Coverage map, intake brief, 4 gates documented as PASS |
| M1 — Self-Assessment Degraded Mode | 2/3 | Flag present, traditions absent named, reduced coverage stated; missing "MODERATE RISK" exact label |
