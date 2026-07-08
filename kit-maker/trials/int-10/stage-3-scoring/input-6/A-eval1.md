# INT-10 Blind Scoring — Input 6, Condition A, Evaluator 1

**Date:** 2026-07-05
**Evaluator:** eval1 (blind; condition unknown)
**Output artifact read:** stage-2-execution/input-6/cond-a-output.md

---

## Output Summary

The output is a list of 15 research angles on the topic of comprehensive retrieval in systematic literature searches. Each angle has: vocabulary tradition label, rationale, 3 search queries, and best source types. A summary table closes the output listing all 15 angles with their traditions and counting "Distinct vocabulary traditions: 13."

No intake brief, no coverage map with gap check, no gate notation, no ADVERSARIAL-FLAGGED text, and no VOCABULARY SELF-REPORT FLAG text are present anywhere in the output.

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

**Evidence:**
The summary table at lines 232–254 lists 13 distinct vocabulary traditions including: Library and Information Science; Evidence Synthesis; Information Retrieval (CS); Medical Informatics; Knowledge Organization; Bibliometrics; Scientometrics; Meta-epidemiology; Qualitative Research methodology; Grounded Theory; Health Technology Assessment; Epidemiology; NLP/Machine Learning.

- ≥4 distinct non-synonymous traditions: YES — 13 listed, clearly non-synonymous (e.g., Bibliometrics, Epidemiology, Grounded Theory, Knowledge Organization are all distinct fields).
- ≥2 NOT derivable from user input words ("comprehensive," "retrieval," "systematic," "literature," "searches"): YES — "Bibliometrics," "Scientometrics," "Meta-epidemiology," "Grounded Theory," and "Knowledge Organization" are not derivable from those words.
- ≥1 from an adjacent discipline with different primary subject matter: YES — Angle 15 is explicitly titled "Adjacent Discipline — Query Expansion in Information Retrieval Systems" with tradition "Information Retrieval (Computer Science); Search Engine research; NLP," and its rationale states "The IR community has developed formal query expansion techniques... that are directly applicable to systematic search but are largely siloed from the evidence synthesis community."

**Quoted evidence:** "Angle 15: Adjacent Discipline — Query Expansion in Information Retrieval Systems / Vocabulary tradition: Information Retrieval (Computer Science); Search Engine research; NLP" and "Distinct vocabulary traditions: 13."

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 2**

Checking three required elements:

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:**
Angle 11 is titled "Failure Cases and Null Results — Incomplete Retrieval and Its Consequences." The rationale says: "This angle directly addresses what goes wrong when retrieval is incomplete: biased meta-analytic estimates, missed safety signals, erroneous conclusions." Queries include `"incomplete retrieval" "systematic review" bias consequences OR impact` and `"search comprehensiveness" failure "missed studies" "systematic review" effect`. This angle names a specific failure pathway (incomplete retrieval → selection bias → biased meta-analytic estimates), which is more specific than "failures exist." PRESENT — borderline but the mechanism named (incomplete retrieval producing biased estimates via missed studies) is concrete enough to qualify.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Searched entire output. This exact string does NOT appear anywhere. ABSENT.

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:**
Angle 15 is explicitly labeled "Adjacent Discipline" in the title and uses IR/CS/NLP vocabulary ("pseudo-relevance feedback," "word embeddings," "ontology-based expansion," "ECIR," "CIKM") entirely non-overlapping with the evidence synthesis vocabulary used in angles 1–14. PRESENT.

Two of three elements present → **Q7 = 2.**

**Quoted evidence:** "Angle 11: Failure Cases and Null Results — Incomplete Retrieval and Its Consequences... biased meta-analytic estimates, missed safety signals, erroneous conclusions." For (c): "Adjacent Discipline — Query Expansion in Information Retrieval Systems."

---

## Q5 — ACTIONABILITY

**Score: 3**

Checked all 15 angles:

- Every angle has exactly 3 runnable query strings (all ≥2). No angle has only 1 query.
- All queries use tradition-specific vocabulary:
  - Angle 2: `"PICO" "search terms" "MeSH terms" "free text" "systematic review"` — tradition-specific (PICO, MeSH).
  - Angle 3: `"Emtree" OR "MeSH" "natural language" "search strategy" comprehensiveness` — named controlled vocabulary systems.
  - Angle 5: `"pearl growing" "cited reference searching" "systematic review" supplementary search` — named bibliometric techniques.
  - Angle 6: `"ISSG search filter resource" OR "InterTASC" "search filter" validation` — named specific resources.
  - Angle 13: `"PRESS" checklist "peer review" "search strategy" "systematic review"` — named specific checklist tool.
  - Angle 15: `"ontology-based query expansion" "literature retrieval" biomedical` and `"word embeddings" "query expansion" "information retrieval" recall precision evaluation` — IR-specific vocabulary.
- All have ≥1 specificity operator: Boolean AND of two distinct concepts throughout; named techniques (PICO, MeSH, Emtree, PRESS, ISSG, pearl growing, word embeddings); named venues (ACM SIGIR, ECIR, CIKM).

No noticeable generic concatenations. 100% of queries meet both tradition-specific vocabulary and specificity operator criteria.

**Quoted evidence:** `"pearl growing" "cited reference searching" "systematic review" supplementary search` (named technique, Angle 5); `"ontology-based query expansion" "literature retrieval" biomedical` (named technique + field, Angle 15).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

Checked all angle pairs for potential >60% query overlap:

Closest potential overlap pairs examined:
- Angles 2 (Search String Construction) and 3 (Controlled Vocabulary vs. Free-Text): Both mention MeSH and free text. Angle 2 Q2: `"PICO" "search terms" "MeSH terms" "free text" "systematic review"` and Angle 3 Q1: `"controlled vocabulary" "free text" "MeSH" "systematic review" retrieval comparison` share terminology. However, Angle 2 focuses on Boolean structure and PICO frameworks; Angle 3 focuses on the comparison of indexing approaches. The paper sets retrieved would differ substantially — papers on Boolean query construction vs. papers on controlled vocabulary efficacy comparisons. Estimated overlap well below 60%.
- Angles 6 (Search Filter Validation) and 7 (Recall-Precision Tradeoff): Both mention sensitivity/specificity. Angle 6 focuses on filter development/validation tools (ISSG, InterTASC, RCT filters); Angle 7 focuses on formal IR theory (F-score, IR journals, ACM SIGIR). The paper sets are from different communities (health information science vs. computer science IR).
- No fully synonymous pairs found. Each angle has a clearly distinct focus: database selection (1), query syntax (2), controlled vocabulary (3), grey literature (4), citation tracking (5), search filters (6), IR theory (7), NLP/automation (8), reporting standards (9), language bias (10), failure consequences (11), saturation criteria (12), peer review of searches (13), hand-searching (14), query expansion IR (15).

Zero pairs where query overlap would retrieve >60% of the same papers.

**Quoted evidence:** "Total angles: 15 / Distinct vocabulary traditions: 13" — the breadth of distinct traditions supports distinct paper sets. Individual query distinctiveness confirmed by named technique specificity across angles.

---

## P1 — PROCEDURE ADHERENCE

**Score: 0**

Checking three required elements:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
The summary table at lines 232–254 lists all angles with vocabulary traditions and counts 13 distinct traditions. This is a tradition inventory but NOT a coverage map as defined: there is no gap check (no identification of traditions that are absent or underrepresented), and the cross-disciplinary slot selection basis is embedded inside Angle 15's own rationale rather than stated in a coverage map. The summary table is a closing index of the output, not a separate procedural structure. ABSENT (as a proper coverage map).

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
No intake brief visible anywhere in the output. ABSENT.

**(c) ≥1 gate documented as run (GATE PASSED or GATE FAILED notation):**
No gate notation of any kind present. ABSENT.

The output is angles only with a closing summary index. No procedural structure (intake brief, coverage map with gap check, gate) is visible. The p1=-1 condition ("no coverage map, intake brief, or gate notation visible anywhere") is borderline because the summary table does show a tradition list — this prevents the -1 flag, but the lack of gap check, intake brief, and gate still results in Score 0.

**Quoted evidence:** The output contains no text matching "intake brief," "gap check," "GATE PASSED," "GATE FAILED," "question-type," or "severity." The closing section reads only: "Total angles: 15 / Distinct vocabulary traditions: 13."

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: -1**

Checking all four required elements:

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** NOT present anywhere in the output.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** NOT present anywhere.

**(c) ≥1 tradition named as possibly absent due to source limitation:** NOT present. The output names 13 traditions that ARE covered but makes no acknowledgment that any tradition might be absent due to source limitations.

**(d) Coverage described as reduced (not FULL):** NOT present. The output presents its coverage positively: "Total angles: 15 / Distinct vocabulary traditions: 13" with no qualification of completeness or limitation.

Neither "VOCABULARY SELF-REPORT FLAG" text nor any coverage limitation language is visible anywhere in the output. The output presents its coverage as complete without acknowledging any possible limitation from source constraints.

**Set m1 = -1** per the stated condition.

**Quoted evidence:** "Total angles: 15 / Distinct vocabulary traditions: 13" — purely descriptive, no limitation acknowledgment. No text resembling "VOCABULARY SELF-REPORT FLAG," "MODERATE RISK," "HIGH RISK," or coverage limitation anywhere in the 255-line output.

---

## Score Summary

| Dimension | Score | Criterion Hit |
|-----------|-------|---------------|
| Q1 — Vocabulary Tradition Coverage | 3 | ≥4 distinct traditions; ≥2 not from user input; ≥1 adjacent discipline (Angle 15, IR/CS) |
| Q7 — Structural Completeness | 2 | Failure angle (a) + adjacent discipline (c) present; ADVERSARIAL-FLAGGED (b) absent |
| Q5 — Actionability | 3 | All 15 angles ≥3 queries; 100% tradition-specific vocab; 100% specificity operators |
| Q3 — Precision / Non-Redundancy | 3 | Zero pairs with >60% query overlap identified |
| P1 — Procedure Adherence | 0 | Angles only; no intake brief, no gap-checked coverage map, no gate notation |
| M1 — Self-Assessment Degraded Mode | -1 | No VOCABULARY SELF-REPORT FLAG; no coverage limitation language |
