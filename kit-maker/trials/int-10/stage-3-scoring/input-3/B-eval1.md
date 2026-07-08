# Blind Scoring Rationale — INT-10, Input 3, Condition B, Evaluator 1
**Date:** 2026-07-06
**Evaluator:** Subagent (blind — condition identity not known at scoring time)
**Artifact scored:** cond-b-output.md

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output identifies 11 distinct vocabulary traditions across the intake brief, coverage map, and angle list:
1. ML systems / transformer architecture
2. NLP evaluation / benchmarks
3. ML efficiency / systems
4. Alignment / instruction following
5. Cognitive science / human memory — explicitly flagged "absent from user framing"
6. Retrieval-augmented generation / hybrid NLP
7. Task-specific NLP analysis
8. Software engineering / LLM application development
9. Information retrieval (C1, cross-disciplinary, not in intake brief)
10. Information theory / compression (C2, cross-disciplinary, not in intake brief)
11. Information science / knowledge management (D1, adversarial)

The user input contained only "context length," "LLM," and "performance." Traditions not derivable from those words include cognitive science (no user word maps to human memory or psychology), information retrieval (primary subject matter is document indexing and ranked retrieval via TREC/CLEF/BM25), information theory (entropy, MDL, information bottleneck are absent from user input), and information science / knowledge management (information overload framing entirely absent). That is ≥4 traditions not derivable from user input, exceeding the ≥2 requirement.

Adjacent discipline criterion: cognitive science has primary subject matter in experimental psychology / neuroscience; information retrieval has primary subject matter in document indexing and search systems. Both are from different primary fields than ML.

**Evidence:** "Cognitive science / human memory (absent from user framing) — working memory, cognitive load, reading comprehension, serial position effect, human recall from long documents"; "Information retrieval (NOT in intake brief) [...] BM25, TREC, passage ranking, position normalization"

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present.

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:** Angle 9 is labeled "[NULL-HYPOTHESIS]" and names specific mechanisms: "performance plateau," "degradation" from "irrelevant tokens," "distraction effects," and explicitly "effective context window smaller than nominal claimed context length." These are distinct, named mechanisms — not just the generic statement "failures exist."

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:** Present in the angle heading "## ANGLE 10 [ADVERSARIAL-FLAGGED]" and repeated in the angle type field "Adversarial-FLAGGED — dispatch in separate research context with no prior confirmatory results" and in the gate summary "Required types present: Adversarial-FLAGGED (1)." The exact string appears.

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:** Angle 11 (Information retrieval, labeled "NOT in intake brief") uses TREC, CLEF, BM25, TF-IDF, "document length normalization," "passage ranking" — none appear in any ML-tradition angle. Angle 12 (Information theory / compression, also labeled "NOT in intake brief") uses "information bottleneck," "entropy," "mutual information," "minimum description length."

**Evidence:** "## ANGLE 10 [ADVERSARIAL-FLAGGED]: Information Overload and Diminishing Returns from Document Length — Non-ML Framing"; "Angle 9 Q4: LLM effective context window smaller than nominal claimed context length evidence" (specific quantitative failure mechanism); "Angle 11: BM25 TF-IDF document length normalization retrieval effect position term frequency"

---

## Q5 — ACTIONABILITY

**Score: 3**

All 12 angles have exactly 4 runnable query strings each (≥2 satisfied for all). No query contains placeholder vocabulary.

Tradition-specific vocabulary is present for essentially all angles: RoPE/ALiBi/YaRN in A1; SCROLLS/LongBench/ZeroScrolls/L-Eval in A2; KV cache/Mamba/FlashAttention in A3; "lost in the middle"/attention sink in A4; serial position effect/cognitive load in A8; TREC/CLEF/BM25/TF-IDF in A11; information bottleneck/MDL in A12. Angle 7 (SE/LLM deployment) is the weakest — Q3 "context length limit LLM application development strategy workaround evaluation" is generic phrase concatenation — but the remaining queries in that angle use year-range operators (2024 2025) qualifying as numerical threshold specificity operators.

Specificity operators are present across all angles: named techniques (RoPE, ALiBi, Mamba, BM25), named venues (TREC, CLEF, SCROLLS, SIGIR), named findings ("lost in the middle"), and year thresholds. The criterion is satisfied at the angle level (each angle requires ≥1 operator, not each query). No angle lacks at least one of these.

**Evidence:** "Q4: YaRN RoPE scaling LongRoPE position interpolation context window performance evaluation" (Angle 1 — named techniques); "Q1: document position bias retrieval precision recall TREC CLEF long document information retrieval" (Angle 11 — named venues as specificity operators)

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The output runs explicit Gate 2 distinctness checks on candidate overlapping pairs. No pair is found to produce >60% overlapping results.

Key pairs examined: A1/A3 (positional encoding vs. KV cache efficiency) — different paper populations, different distinctive terms. A2/A5 (NLP benchmarks vs. task-specific analysis) — moderate overlap risk acknowledged; A2 queries anchor on specific benchmark names (SCROLLS, LongBench) forcing retrieval of benchmark-design papers, while A5 anchors on task-type comparison, producing a different paper population. The output estimates overlap as below the threshold and flags it for researcher attention rather than marking it as a fail. A4/A8 (LLM position bias vs. cognitive science) — different source platforms (arXiv vs. PubMed), non-overlapping vocabulary, entirely different paper populations. C1/A6 (IR vs. RAG) — pre-2020 IR literature has zero overlap with RAG frameworks.

The only tradition-label share (A2 and N1 both NLP evaluation) is the explicitly permitted null-hypothesis exemption. No fully synonymous pairs exist.

**Evidence:** "PASS with note: moderate overlap risk; researcher should apply title-level filtering to separate benchmark design papers from task-analysis papers" (A2/A5 gate assessment); "**Gate 2: PASS**"

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements are present.

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:** The COVERAGE MAP section lists all 5 intake brief traditions with "Gap flag" per tradition, then adds two cross-disciplinary slots with explicit "Basis:" statements. For C1: "IR has a long-standing literature on how document length affects retrieval precision/recall and how position within a document affects relevance." For C2: "Information theory provides a formal framework for asking whether models effectively use the information content of long inputs." Selection basis is explicitly stated for each.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:** INTAKE BRIEF contains 5 vocabulary tradition entries with representative terms; question-type classification with rationale ("EXPLORATORY — No explicit comparison stated..."); and severity for the source limitation ("Source B status: UNAVAILABLE — MODERATE").

**(c) ≥1 gate documented as run:** GATE SUMMARY contains four gates each closed with explicit notation: "Gate 1: PASS," "Gate 2: PASS," "Gate 3: PASS," "Gate 4: PASS." Individual items checked with [x] notation.

**Evidence:** "C1 target tradition: Information retrieval (IR) [...] Basis: IR has a long-standing literature on how document length affects retrieval precision/recall"; "**Gate 1: PASS**" / "**Gate 2: PASS**" / "**Gate 3: PASS**" / "**Gate 4: PASS**"

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Three of four required elements are present; element (b) is absent in exact required form.

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** PRESENT in two locations. Intake brief: "Proceeding; VOCABULARY SELF-REPORT FLAG active." Gate summary: "VOCABULARY SELF-REPORT FLAG (per intake.md Step 5 and angle-quality.md Limit 3)." Criterion satisfied.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** ABSENT. The output uses "UNAVAILABLE — MODERATE" in the Source B status line. The word "MODERATE" appears but not "MODERATE RISK" or "HIGH RISK" — the required exact form is not present anywhere in the output. This is the missing element.

**(c) ≥1 tradition named as possibly absent due to source limitation:** PRESENT. "One or more applied traditions (e.g., legal/regulatory uses of long-context LLMs; computational biology / genomics sequences) may be missing." Two specific domain traditions are named. Criterion satisfied.

**(d) Coverage described as reduced (not FULL):** PRESENT. "External validation via survey-paper probe is recommended before accepting the tradition list as complete." Coverage is explicitly framed as unvalidated and potentially incomplete, not FULL. Criterion satisfied.

Score 2: flag present + elements (c) and (d) present; element (b) absent in required exact form.

**Evidence:** "Source B status: UNAVAILABLE — MODERATE — [...] Proceeding; VOCABULARY SELF-REPORT FLAG active" (severity says MODERATE not MODERATE RISK — element b fails); "One or more applied traditions (e.g., legal/regulatory uses of long-context LLMs; computational biology / genomics sequences) may be missing" (element c present)

---

## Score Summary

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary tradition coverage | 3 |
| Q7 — Structural completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / non-redundancy | 3 |
| P1 — Procedure adherence | 3 |
| M1 — Self-assessment degraded mode | 2 |
