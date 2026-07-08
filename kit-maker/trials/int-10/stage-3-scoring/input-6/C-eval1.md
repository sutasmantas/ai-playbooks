# INT-10 Blind Scoring — Input 6, Condition C, Evaluator 1

**Scored:** 2026-07-05
**Evaluator:** eval1 (blind — condition unknown at scoring time)
**Input topic:** How to achieve comprehensive retrieval in systematic literature searches

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The intake brief lists 6 distinct vocabulary traditions plus a 7th cross-disciplinary tradition in the coverage map:
1. Evidence synthesis / systematic review methodology
2. Information retrieval (academic CS/IR)
3. Library and information science (LIS)
4. Bibliometrics / scientometrics
5. Text mining / NLP / ML for systematic review automation
6. Software engineering grey literature / multivocal literature review
7. Patent search / intellectual property research (coverage map, cross-disciplinary slot)

That is ≥4 distinct non-synonymous labels. Of these, at least 4 are NOT derivable from the user's input words ("comprehensive", "retrieval", "systematic", "literature", "searches"):
- LIS (library and information science — different primary field)
- Bibliometrics / scientometrics (different primary field)
- Text mining / NLP / ML (machine learning framing, not in user input)
- Software engineering grey literature (SE is a clearly adjacent discipline with different primary subject matter)
- Patent search / IP research (distinct primary field: IP law)

Adjacent discipline requirement met: "Patent search / intellectual property research" has a different primary subject matter (IP law/patent examination), non-overlapping vocabulary (IPC, CPC, prior art, Espacenet, USPTO, patent examiner).

Key evidence: "Target tradition: Patent search / intellectual property research — Basis for selection: Patent prior art searches have an independent, legally-enforced requirement for comprehensive retrieval."

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present:

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:**
Angle 15 is labeled [NULL-HYPOTHESIS] and names multiple specific mechanisms beyond "failures exist": "studies showing that replication of systematic searches fails to reproduce the same results"; "conditions under which comprehensive retrieval is structurally unachievable"; "recall audit findings"; "cases where systematic reviews were updated and found prior omissions." The word "structurally unachievable" names a mechanism class (irreducible retrieval ceiling), not merely the existence of failures.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Present in Angle 16: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:**
Angle 14 is tagged "[CROSS-DISCIPLINARY: tradition NOT in intake brief]" with tradition "Patent search / intellectual property research." Vocabulary is non-overlapping with all SR/LIS/IR traditions: IPC/CPC codes, Derwent Innovation, EPO Espacenet, patent examiner search manuals, prior art.

Key evidence: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]" and "[CROSS-DISCIPLINARY: tradition NOT in intake brief]" both appear verbatim.

---

## Q5 — ACTIONABILITY

**Score: 3**

All 16 angles provide 3 runnable query strings each (48 total). Checked for tradition-specific vocabulary and specificity operators:

- Tradition-specific vocabulary: All queries embed tradition vocabulary rather than generic phrasing. Examples: "ISSG test set recall audit systematic review known-item search evaluation" (Angle 6, Q2 — named benchmark tool); "MeSH subject headings controlled vocabulary recall systematic review search" (Angle 8, Q1 — named controlled vocabulary system); "Bradford zones journal coverage systematic review database comprehensiveness" (Angle 10, Q3 — named bibliometric concept); "patent search strategy classification IPC CPC non-patent literature comprehensive" (Angle 14, Q2 — named classification systems).

- Specificity operators: Every angle contains at least one query with a named technique, named venue, or named tool serving as a specificity anchor: MEDLINE/EMBASE/Cochrane Central (proper nouns, Angle 1); PRISMA/MECIR (named standards, Angle 3); ISSG (named resource, Angle 6); MeSH/EMTREE (named systems, Angles 5, 8); Bradford zones (named construct, Angle 10); IPC/CPC (named classification systems, Angle 14); "satisficing" (named decision-theory concept, Angle 16 Q2).

No angle reduces to pure generic concatenation. Coverage-gap notes and Gate 3 confirm "no placeholder vocabulary — all queries are pasteable search strings."

Key evidence: "MEDLINE EMBASE Cochrane Central database coverage overlap recall systematic review" (named venues, Angle 1 Q2); "ISSG test set recall audit systematic review known-item search evaluation" (named technique, Angle 6 Q2).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 2**

Gate 2 in the output runs explicit distinctness checks on 5 pairs and identifies one pair with acknowledged potential overlap:

- **A5 vs. A8 (query expansion vs. controlled vocabulary):** PASS — different author populations (IR CS researchers vs. medical librarians)
- **A7 vs. A10 (citation tracking vs. bibliometric mapping):** PASS — different methodology literatures
- **A1 vs. A2 (multi-database vs. grey literature):** PASS — structurally different source types
- **A3 vs. A1 (reporting standards vs. database strategy):** PASS — different research questions
- **A11 vs. A12 (ML search generation vs. technology-assisted screening):** PARTIAL OVERLAP FLAGGED — "Both appear in the same SR automation review articles. FLAG: potential overlap in reviews of SR automation tools that cover both phases."

The output explicitly acknowledges A11/A12 could produce overlapping retrieval in SR automation survey literature. This is one flagged overlap pair, which allows a Score 2 (≤2 overlap pairs, no fully synonymous pairs). No fully synonymous pairs are present — all other pairs pass distinctness tests. The A11/A12 pair is differentiated by phase (search generation vs. screening) but the output's own Gate 2 records that survey papers covering both phases may be retrieved by both angles.

Key evidence: "Both appear in the same SR automation review articles. FLAG: potential overlap in reviews of SR automation tools that cover both phases."

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements are present:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
The COVERAGE MAP section lists all 6 traditions with representative terms, explicit gap flags per tradition ("Gap flag: NO — 3 slots assigned"; "Gap flag: PARTIAL — bibliometrics is underrepresented at 1 slot; acceptable given overlap..."), and a cross-disciplinary slot with explicit selection basis ("Patent prior art searches have an independent, legally-enforced requirement for comprehensive retrieval... Patent search methodology has developed its own completeness standards independent of the clinical SR and LIS traditions").

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
The INTAKE BRIEF contains: "Candidate vocabulary traditions: 6 entries"; "Question type: EXPLORATORY"; "Source B status: UNAVAILABLE — MODERATE (Source A + Source C together identified 6 distinct vocabulary traditions; severity is MODERATE; proceed with VOCABULARY SELF-REPORT FLAG)".

**(c) ≥1 gate documented as run with PASS/FAIL notation:**
The GATE SUMMARY section documents four gates with explicit verdicts: "Gate 1 verdict: PASS", "Gate 2 verdict: PASS with two human-judgment flags", "Gate 3 verdict: PASS", "Gate 4 verdict: PASS", and "Overall verdict: PASS — dispatch ready".

Key evidence: "Gate 1 verdict: PASS" through "Overall verdict: PASS — dispatch ready" — all four gates explicitly run and documented.

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Checking four required elements:

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:**
Present in Gate Summary: "VOCABULARY SELF-REPORT FLAG — All 6 vocabulary traditions were enumerated by LLM only (Source B unavailable)."

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":**
The intake brief writes "severity is MODERATE" — not "MODERATE RISK" or "HIGH RISK." The word "RISK" is absent from the severity label. The exact phrases "MODERATE RISK" or "HIGH RISK" do not appear anywhere in the output. This element fails the verbatim requirement.

**(c) ≥1 tradition named as possibly absent due to source limitation:**
Present in SELF-CHECK section: "most likely candidates: health technology assessment (HTA) regulatory search requirements... and cognitive/behavioral research on searcher behavior and information seeking (which is distinct from the practitioner LIS tradition)." Also in the Gate Summary recommendation to run a survey-paper probe as "traditions not represented here" may exist.

**(d) Coverage described as reduced (not FULL):**
Present: "Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions"; "A survey-paper probe... may surface traditions not represented here... before treating this angle list as complete." Coverage is explicitly not characterized as FULL.

Three of four elements present; severity label says "MODERATE" without "RISK" — fails the exact phrase test for element (b). Score 2 per rubric: "Self-report flag + severity but missing one required element."

Key evidence: "VOCABULARY SELF-REPORT FLAG — All 6 vocabulary traditions were enumerated by LLM only" (element a present); "severity is MODERATE" (element b present but not exact required phrase "MODERATE RISK"/"HIGH RISK").

---

## Final Scores

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary tradition coverage | 3 |
| Q7 — Structural completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / non-redundancy | 2 |
| P1 — Procedure adherence | 3 |
| M1 — Self-assessment degraded mode | 2 |
