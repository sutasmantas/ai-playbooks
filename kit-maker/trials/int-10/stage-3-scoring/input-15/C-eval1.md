# Scoring Rationale — INT-10, Input 15, Condition C, Evaluator 1

Scored: 2026-07-06
Evaluator context: blind (condition identity not known at scoring time)

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The intake brief enumerates 14 distinct vocabulary tradition labels; the coverage map expands this to 18 tradition slots. Count is well above the >=4 threshold.

Traditions NOT derivable from user input words ("systematic literature reviews," "AI," "ML research," "methods," "databases," "approaches," "comprehensive coverage"):
- Software Engineering Research Methodology (Kitchenham, SE-SLR, mapping study)
- Clinical Evidence Synthesis (Cochrane, PICO/PECO, recall threshold)
- Bibliometrics / Scientometrics (co-citation, VOSviewer, journal coverage)
- Scoping Review Methodology (Arksey & O'Malley, JBI scoping review)
- Rapid and Living Review Methodology (living systematic review, rolling update)
- Structured Evidence Query Frameworks (PICO, PECO, SPIDER — not in user prompt)

Six or more traditions not derivable from user input, satisfying the >=2 threshold.

Adjacent-discipline traditions (different primary subject matter from AI/ML or information science):
- Tradition 13: Education Technology Research Methodology — explicitly flagged "NOT in anchor vocabulary," uses ERIC database, learning analytics, Campbell Collaboration
- Tradition 14: Health Informatics Research Methodology — explicitly flagged "NOT in anchor vocabulary," uses MEDLINE, Embase, clinical AI

Evidence: "Education Technology Research Methodology [Cross-disciplinary] ... NOT in anchor vocabulary" and "Health Informatics Research Methodology [Cross-disciplinary] ... NOT in anchor vocabulary — Distinct from Clinical Evidence Synthesis"

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements present.

**(a) Null-hypothesis angle naming a specific failure mechanism:**

Angle N1 is titled "Evidence That SLRs Fail to Achieve Comprehensive Coverage in AI/ML [Null-hypothesis]" and names the specific mechanism: "conditions under which SLR methods systematically fail in fast-moving domains" with queries targeting "database limitations fast-moving field AI machine learning documented failure." This is a specific mechanism (fast-moving domain publication velocity outpacing SLR database recall), not the generic claim "failures exist."

Evidence: "coverage gaps found when SLRs are replicated or audited, conditions under which SLR methods systematically fail in fast-moving domains" (Angle N1 extraction target); "SLR coverage inadequate missed literature database limitations fast-moving field AI machine learning documented failure" (N1 Query Q3).

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**

Appears verbatim in the Angle D1 section header: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]" and again in the Gate Summary.

Evidence: "### ANGLE D1: Critique of PRISMA/SLR Methodology Applicability to AI Research [ADVERSARIAL-FLAGGED]"

**(c) Cross-disciplinary angle from different primary field with non-overlapping vocabulary:**

Angles C1 (Education Technology) and C2 (Health Informatics) are both explicitly labeled cross-disciplinary with selection basis stated. C1 uses ERIC, learning analytics, Campbell Collaboration — none appearing in confirmatory angles. C2 uses MEDLINE, Embase, NPJ Digital Medicine — absent from confirmatory angles.

Evidence: "Angle type: Cross-disciplinary" (C1 and C2); selection basis for C1: "EdTech SLRs face the same dual-database problem (education databases ERIC + CS databases arXiv/ACM) as AI/ML SLRs and have developed hybrid strategies"

---

## Q5 — ACTIONABILITY

**Score: 3**

All 20 angles have 3 query strings each (above the >=2 threshold). Tradition-specific vocabulary and specificity operators present throughout.

Named techniques/authors/venues: A1 uses "PRISMA 2020" (named standard); A3 uses "Kitchenham" (named author); A7 uses "NeurIPS ICML ICLR" and "ACL EMNLP" (named venues); A8 uses "Scopus Web of Science ACM Digital Library IEEE Xplore" (named databases); A12 uses "Rayyan ASReview Covidence" (named tools); A14 uses "Semantic Scholar API" and "OpenAlex API" and "arXiv API" (named tools).

Year-range specificity operators throughout: A3 Q3 (2020-2023), A8 Q2 (2021-2024), A12 Q3 (2022-2025).

Boolean conjunction of distinct concepts: A4 Q2 combines database-limitation and recall-measurement concepts; A9 Q2 combines bibliometric method (co-citation, bibliographic coupling) with ML application domain.

No angle with only 1 query. No generic concatenations without specificity operators.

Evidence: "Kitchenham systematic literature review guidelines empirical software engineering" (named author + tradition-specific field conjunction); "arXiv category selection cs.LG cs.CL systematic search AI comprehensive coverage" (named specific arXiv categories as specificity operator).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The output includes a Gate 2 distinctness check testing the most adjacent angle pairs using a Boolean-connective test. All checked pairs passed. Independent review confirms no >60% retrieval overlap pairs.

A1 (PRISMA/Boolean/MeSH) vs A3 (Kitchenham/SE-SLR): Different primary references, different author communities. A1 targets information science and clinical methodology journals; A3 targets Empirical Software Engineering and Information and Software Technology.

A4 (Cochrane/clinical recall threshold) vs A8 (Scopus/WoS/bibliometric comparison): A4 draws on clinical evidence synthesis measuring recall across clinical databases; A8 draws on bibliometrics measuring CS/AI database coverage. Different traditions, different primary sources.

A6 (arXiv categories/preprint coverage = source) vs A14 (Semantic Scholar API/programmatic access = method): Gate 2 documents: "A14 is about ACCESS METHOD; A6 is about SOURCE COVERAGE." Different query targets, low retrieval overlap.

A10 (AMSTAR/ROBIS/quality criteria) vs A11 (reproducibility/audit/replication): Quality assessment criteria vs. search reproducibility are distinct constructs with distinct primary literatures.

No pair reached the >60% retrieval threshold. Zero synonymous pairs found.

Evidence: "A14 is about ACCESS METHOD; A6 is about SOURCE COVERAGE. PASS" (Gate 2); "A1 distinctive terms: PRISMA, Boolean, MeSH, controlled vocabulary. A3 distinctive terms: Kitchenham, mapping study, empirical software engineering. OR retrieval would NOT return same documents — PASS" (Gate 2).

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements present.

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**

COVERAGE MAP section lists 18 traditions with representative terms and "Gap flag: No" for each. Gap check: "Traditions NOT yet represented in the planned list: All 18 traditions from intake brief have at least one angle slot." Cross-disciplinary selection basis stated for both C1 and C2.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**

INTAKE BRIEF section contains 14 vocabulary traditions, "Question type: EXPLORATORY" with rationale, and "Source B status: UNAVAILABLE — MODERATE" severity assessment.

**(c) >=1 gate documented as run with GATE PASSED or GATE FAILED notation:**

GATE SUMMARY section documents Gates 1-4 with explicit PASS notation: "Gate 1 overall: PASS," "Gate 2 overall: PASS," "Gate 3 overall: PASS," "Gate 4 overall: PASS," "Overall verdict: PASS — dispatch ready."

Evidence: "Gate 1 overall: PASS"; "Overall verdict: PASS — dispatch ready"

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Evaluating all four required elements for Score 3:

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:**
Present. Appears in the intake brief: "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions above were enumerated by LLM only." Also in the gate summary and the closing footer line. PASS.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":**
The output uses "UNAVAILABLE — MODERATE" and "MODERATE severity" — it does NOT use the exact labels "MODERATE RISK" or "HIGH RISK." Severity assessment is present but the exact required label form is absent. FAIL.

**(c) >=1 tradition named as possibly absent due to source limitation:**
Present. "Cross-disciplinary traditions in particular (items 13, 14) may be underdeveloped compared to a Source B pass." Also: "A survey-paper probe on 'systematic literature review AI machine learning survey 2023 2024' may surface additional vocabulary traditions not represented here." PASS.

**(d) Coverage described as reduced (not FULL):**
Present. Survey paper status is "NOT CHECKED"; self-report flag states traditions are LLM-enumerated only; external validation is explicitly recommended before treating the list as complete. PASS.

Three of four elements present. The severity label uses "MODERATE" / "MODERATE severity" rather than the exact required form "MODERATE RISK."

Evidence: "Source B status: UNAVAILABLE — MODERATE" (severity present but not labeled as required); "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions above were enumerated by LLM only" (flag present verbatim).

---

## Summary Table

| Dimension | Score | Key evidence |
|-----------|-------|--------------|
| Q1 Vocabulary tradition coverage | 3 | 18 traditions; 6+ not in user input; EdTech and Health Informatics as adjacent disciplines |
| Q7 Structural completeness | 3 | N1 names fast-moving-domain/database-limitation mechanism; "ADVERSARIAL-FLAGGED" verbatim; C1/C2 cross-disciplinary with stated selection basis |
| Q5 Actionability | 3 | All 20 angles have 3 queries; named tools/authors/venues throughout; year ranges as specificity operators |
| Q3 Precision/non-redundancy | 3 | Gate 2 Boolean-connective test run; no >60% overlap pairs identified |
| P1 Procedure adherence | 3 | Coverage map + intake brief + question type + severity + 4 gates all present |
| M1 Self-assessment degraded mode | 2 | Flag verbatim present; severity present as "MODERATE" not "MODERATE RISK"; traditions named as possibly absent; coverage described as reduced |
