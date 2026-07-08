# INT-10 Blind Evaluation — Input 15, Condition B, Evaluator 1

**Date:** 2026-07-06
**Evaluator:** eval1 (blind — condition identity unknown)
**Input topic:** Systematic literature reviews in AI/ML research

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output identifies 10 vocabulary traditions in the intake brief plus one cross-disciplinary addition in the coverage map:
1. Library and Information Science / Evidence Synthesis
2. Software Engineering Empirical Research
3. Computer Science Research Culture
4. Bibliometrics / Scientometrics
5. Information Retrieval
6. Library Science — Grey Literature Coverage
7. Natural Language Processing / Automation
8. Evidence-based Practice / Quality Appraisal
9. Research Infrastructure / Academic Database Coverage
10. Research Methodology / Reproducibility Studies
11. (Cross-disciplinary) Clinical Medicine / Cochrane Collaboration Methods

Well above the ≥4 threshold. Multiple traditions are NOT derivable from user input words ("systematic literature reviews," "AI and ML research," "methods, databases, approaches"): "Bibliometrics / Scientometrics," "Information Retrieval" (as a named field), "Evidence-based Practice / Quality Appraisal," "Software Engineering Empirical Research," and "Research Methodology / Reproducibility Studies" all require domain knowledge beyond the user's vocabulary. The Clinical Medicine / Cochrane tradition is an adjacent discipline with clearly different primary subject matter (clinical epidemiology) and non-overlapping vocabulary (RCT, MeSH, PICO, GRADE, Cochrane).

**Evidence:** "Tradition 4: Bibliometrics / Scientometrics — Representative terms: citation analysis, co-citation, VOSviewer, CiteSpace, co-word analysis"; "Cross-disciplinary slot (required): Target tradition: Clinical Medicine / Cochrane Collaboration Methods (NOT in intake brief)"

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present:

**(a) Null-hypothesis angle with specific failure mechanism:** Angle 10 is titled "Failure Cases — Gaps, Limitations, and Null Results of SLR Methods in AI/ML" and names the specific mechanism: "SLR methods do NOT generalize from clinical to CS contexts" and "poor recall, missed papers, or misleading conclusions." This goes beyond "failures exist" — it identifies the specific failure mode of clinical-to-CS generalization breakdown as the mechanism.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:** Present in Angle 11's heading: "*[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]*" and repeated in the angle body: "Angle type: Adversarial [ADVERSARIAL-FLAGGED]" and in the Gate Summary.

**(c) Cross-disciplinary angle from different primary field:** Angle 12 targets Clinical Medicine / Cochrane Collaboration Methods, labeled explicitly "[CROSS-DISCIPLINARY: this tradition was NOT in the intake brief]" with vocabulary from clinical epidemiology (PICO, RCT bias tools, GRADE, meta-analysis of accuracy/AUC, MeSH) that does not overlap with the main topic's vocabulary.

**Evidence:** "ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results"; "SLR methods do NOT generalize from clinical to CS contexts"; "CROSS-DISCIPLINARY: this tradition was NOT in the intake brief"

---

## Q5 — ACTIONABILITY

**Score: 3**

All 13 angles provide exactly 3 query strings each. All use tradition-specific vocabulary rather than generic phrase concatenation. All have at least one specificity operator:

- Angle 1: Named technique (PRISMA) + year range ("2020 2024")
- Angle 2: Named author technique (Kitchenham)
- Angle 3: Named venue (arXiv) + year range ("2022 2023 2024 2025")
- Angle 4: Named tool (VOSviewer) + year range ("2023 2024")
- Angle 5: Tradition-specific IR concepts (Boolean, precision, recall) applied together
- Angle 6: Named platform (arXiv) + two-concept AND combinations
- Angle 7: Named tools (Rayyan, ASReview, Covidence) + year range ("2023 2024")
- Angle 8: Named concept-pair (risk of bias + AI ML)
- Angle 9: Named databases enumerated (ACM, IEEE, Scopus, Web of Science, Semantic Scholar)
- Angle 10: Two-concept disconfirming pairs ("does not generalize," "negative results")
- Angle 11: Named tools (Connected Papers, ResearchRabbit)
- Angle 12: Named framework (PICO) + named organization (Cochrane)
- Angle 13: Named statistical technique (kappa coefficient)

No angle is generic concatenation — each embeds at least one named technique, author, venue, or tool that would function as a Boolean specificity anchor.

**Evidence:** "Q1: database coverage comparison ACM IEEE Scopus Web of Science Semantic Scholar AI machine learning systematic review recall"; "Q2: PICO framework AI intervention clinical machine learning evidence synthesis systematic review"

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

No angle pairs are identified where query overlap would retrieve >60% of the same papers. The Gate 2 distinctness check documents explicit Boolean-connective testing of the most likely overlap candidates:

- Angles 1/2 (PRISMA vs. Kitchenham): different documents, different institutional communities
- Angles 1/10 (confirmatory vs. null-hypothesis PRISMA): structural angle-type distinction separates query vocabulary ("application" vs. "failures/limitations/does not generalize")
- Angles 5/9 (query construction vs. database selection): different facets of distinct sub-fields (IR vs. Research Infrastructure)
- Angles 3/13 (survey conventions vs. SLR reproducibility): distinct vocabularies

The one shared vocabulary tradition (LIS / Evidence Synthesis for Angles 1 and 10) is the explicitly allowed null-hypothesis exception — the queries are structurally differentiated. No fully synonymous pairs found. The Science Studies tradition for Angle 11 was generated with an explicit excluded-vocabulary list, further separating it from Angles 1-2.

**Evidence:** "Angle 1 vs. Angle 10: PASS — Angle 1 is confirmatory (how PRISMA is applied); Angle 10 is null-hypothesis (where methods fail). Different query vocabulary ('application' vs. 'failures,' 'limitations,' 'does not generalize')"; "No angle pair flagged as synonymous by Boolean-connective test."

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements are present:

**(a) Coverage map:** Present with all 10 traditions, gap flags for each (all "Gap flag: no"), and the cross-disciplinary slot with explicit selection basis: "Basis for selection: Cochrane systematic review methodology is the most formally developed SLR tradition globally and is frequently cited as the gold standard against which CS/AI review methods are compared or contrasted."

**(b) Intake brief:** Present with vocabulary traditions (10 listed), question-type classification ("Question type: EXPLORATORY"), and severity assessment ("Source B status: UNAVAILABLE — MODERATE").

**(c) Gate documented as run:** Gate Summary documents all four gates with explicit verdicts: "Gate 1 verdict: PASS," "Gate 2 verdict: PASS," "Gate 3 verdict: PASS," "Gate 4 verdict: PASS." The intake gate check also records "[x]" completions. The Phase-Gate Reflection records "All three conditions satisfied."

**Evidence:** "Gate 1 verdict: PASS"; "Cross-disciplinary slot (required): ... Basis for selection: Cochrane systematic review methodology is the most formally developed SLR tradition globally"; "Question type: EXPLORATORY"

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Present elements:

**(a) "VOCABULARY SELF-REPORT FLAG" verbatim:** Present in intake brief ("VOCABULARY SELF-REPORT FLAG applies") and Gate Summary ("VOCABULARY SELF-REPORT FLAG: All 10 traditions enumerated by LLM only (Source B unavailable)").

**(b) Severity "MODERATE RISK" or "HIGH RISK":** The output uses "MODERATE" not "MODERATE RISK" — the exact label "MODERATE RISK" does not appear. The output says "UNAVAILABLE — MODERATE" and "Source B status: UNAVAILABLE — MODERATE (subagent context; ≥2 traditions satisfied by LLM enumeration alone)." This communicates moderate severity but does not use the required exact label "MODERATE RISK."

**(c) ≥1 tradition named as possibly absent due to source limitation:** The output acknowledges that "Hidden traditions may exist in the LIS-for-CS literature" and that "the LLM cannot enumerate traditions it has not encountered" — but no specific tradition is named as the candidate absent tradition. This is a generic acknowledgment, not a specific naming.

**(d) Coverage described as reduced (not FULL):** The flag and Source B unavailability imply reduced coverage, and the recommendation for a "vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions" implies incompleteness. However, the dispatch status is "READY" and all gates "PASS," so coverage is not explicitly labeled as REDUCED or NOT FULL.

Flag and general coverage-limitation language are present, satisfying two elements. Two elements are partially or fully missing: exact severity label (MODERATE vs. MODERATE RISK) and named absent tradition. Score 2 (flag + severity acknowledged, one required element absent by strict reading of the label requirement).

**Evidence:** "VOCABULARY SELF-REPORT FLAG applies"; "Source B status: UNAVAILABLE — MODERATE"; "Hidden traditions may exist in the LIS-for-CS literature" (no specific tradition named)

---

## Final Score Summary

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary Tradition Coverage | 3 |
| Q7 — Structural Completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / Non-Redundancy | 3 |
| P1 — Procedure Adherence | 3 |
| M1 — Self-Assessment Degraded Mode | 2 |
