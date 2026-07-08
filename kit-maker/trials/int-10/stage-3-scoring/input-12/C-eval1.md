# Blind Scoring — Input-12, Condition C, Evaluator 1

**Evaluator:** Blind (condition unknown at scoring time)
**Date:** 2026-07-06
**Scored output:** `stage-2-execution/input-12/cond-c-output.md`

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output lists 10 distinct, non-synonymous vocabulary tradition labels across the intake brief and coverage map:
1. NLP alignment / instruction tuning
2. ML evaluation / benchmarking (benchmark design)
3. Automated evaluation methodology (LLM-as-judge)
4. Adversarial robustness / OOD evaluation
5. HCI / human evaluation / preference annotation
6. Formal / programmatic constraint checking
7. AI safety / red-teaming
8. Benchmark validity / meta-evaluation
9. NLP evaluation — compositional instruction complexity
10. Cognitive science / linguistics / pragmatics (cross-disciplinary)
11. Software engineering / behavioral specification testing (adversarial slot)

User input words were: evaluate, LLMs, follow, instructions, reliably, benchmarks, methods.

NOT derivable from user input (count far exceeds ≥2): "LLM-as-judge," "adversarial robustness / OOD," "AI safety / red-teaming," "HCI / preference annotation," "programmatic constraint checking," "benchmark validity / meta-evaluation," "cognitive science / linguistics," "software engineering / behavioral specification testing." All of these require domain knowledge to surface.

From an adjacent discipline (different primary subject matter): Cognitive science / linguistics / pragmatics uses vocabulary — "pragmatic inference," "Gricean implicature," "directive comprehension," "psycholinguistics" — entirely outside the NLP/ML primary field. Software engineering / behavioral specification testing uses "test oracle," "metamorphic testing," "property-based testing," "acceptance testing" — SE primary field, not NLP/ML.

**Evidence:** "Cognitive science / linguistics / pragmatics [cross-disciplinary — NOT in intake brief]" (Angle 11 header); "behavioral specification compliance testing language model test oracle NLP system software engineering" (Angle 9, Q1).

All three Score 3 conditions met.

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

Checking all three required elements:

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:**
ANGLE 1 (N1) is titled "Failure evidence — when instruction-following benchmarks and methods do not measure actual compliance." The angle explicitly names specific failure mechanisms: "benchmark scores do not predict downstream instruction compliance; conditions under which evaluation methods fail (contamination, ceiling effects, narrow construct coverage); replication failures; cases where fine-tuned models score highly but fail real-world instructions." This goes well beyond "failures exist" — contamination, ceiling effects, narrow construct coverage, and replication failures are each named mechanisms with distinct research implications. PRESENT.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Appears at Angle 9 header: "ANGLE 9 (D1) [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"
Also at Gate Summary: "(ANGLE 9 (D1) labeled [ADVERSARIAL-FLAGGED] with dispatch note"
Also at final required-type coverage: "PRESENT — ANGLE 9 (D1), ADVERSARIAL-FLAGGED"
PRESENT.

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:**
ANGLE 11 (C1): "Cognitive science and linguistics perspectives on instruction comprehension and directive compliance." The coverage map explicitly states: "Target tradition: Cognitive science / linguistics / pragmatics. Basis for selection: Cognitive science and linguistics have a substantial literature on instruction comprehension, directive interpretation, pragmatic inference... vocabulary — 'pragmatic inference,' 'command semantics,' 'directive comprehension,' 'Gricean implicature,' 'discourse compliance' — that does not appear in any of the eight NLP/ML/HCI traditions in the intake brief." Explicitly from a different primary field, non-overlapping vocabulary documented. PRESENT.

All three conditions met.

**Evidence:** "ADVERSARIAL-FLAGGED: dispatch in separate research context" (Angle 9 header); "vocabulary — 'pragmatic inference,' 'command semantics,' 'directive comprehension,' 'Gricean implicature,' 'discourse compliance' — that does not appear in any of the eight NLP/ML/HCI traditions in the intake brief" (Coverage Map, cross-disciplinary slot).

---

## Q5 — ACTIONABILITY

**Score: 3**

All 11 angles evaluated against: ≥2 runnable query strings, tradition-specific vocabulary, ≥1 specificity operator.

**Query count:** 9 angles have 4 queries each; Angles 10 and 11 have 3 queries each. All ≥2. PASS.

**Tradition-specific vocabulary:** Every angle uses vocabulary native to its named tradition, not generic phrase concatenation:
- Angle 3 (LLM-as-judge) uses "position bias," "verbosity bias," "self-enhancement," "rubric scoring" — not generic "evaluation method"
- Angle 9 (SE) uses "test oracle," "metamorphic testing," "property-based testing," "acceptance testing" — entirely SE-specific, zero NLP vocabulary
- Angle 11 (cognitive science) uses "pragmatic inference," "Gricean implicature," "psycholinguistics," "directive comprehension" — entirely cogsci-specific

**Specificity operators present across all angles:**
- Named benchmarks: "IFEval FollowBench InFoBench" (A2/Q1), "HarmBench StrongREJECT" (A7/Q2), "AlpacaEval MT-Bench HELM" (A2/Q4)
- Year-range operators: "2024 2025" appears in multiple angles' queries (N1/Q1, A4/Q1, A6/Q1, A7/Q1, A8/Q1, A10/Q1)
- Named techniques: "metamorphic testing" (D1/Q2), "inter-annotator agreement" (A5/Q1), "win rate" (A5/Q2), "inter-rater agreement" (A3/Q4)
- Named fields: "ACM TOSEM, ICSE, FSE, ASE" (source types for D1), "Cognition, Journal of Memory and Language" (source types for C1)

No angle has only generic concatenation queries. No angle lacks a specificity operator.

**Evidence:** "metamorphic testing large language model instruction compliance property-based verification" (Angle 9, Q2); "red-teaming jailbreak evaluation LLM safety instruction compliance HarmBench StrongREJECT" (Angle 7, Q2).

All Score 3 conditions met.

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 2**

The output itself runs a BOOLEAN-CONNECTIVE DISTINCTNESS CHECK and identifies one BORDERLINE pair (A1/A8). Independent review confirms that finding and surfaces one additional overlap pair with stronger overlap than the flagged borderline.

**Overlap pair 1 — N1 (null hypothesis) vs A8 (benchmark validity/meta-evaluation):**
This is the clearest overlap pair. The angles share the contamination/gaming research thread substantially:
- N1 Q3: "benchmark contamination data leakage instruction following LLM evaluation gaming leaderboard"
- A8 Q3: "benchmark contamination data leakage instruction following LLM test set evaluation methodology"

These two queries are nearly identical and would retrieve the same primary literature on benchmark contamination. N1 Q4 ("instruction compliance benchmark score ceiling saturation failure real-world performance gap") and A8 Q4 ("meta-evaluation instruction following benchmark score correlation downstream performance validity") both target the benchmark-score-vs-downstream-performance thread. The output flags A1/A8 but not N1/A8, which is the stronger overlap. Estimated retrieval overlap for the contamination queries exceeds 60%.

**Overlap pair 2 — A1 (benchmark taxonomy) vs A8 (benchmark validity/meta-evaluation):**
Flagged BORDERLINE by the output itself. A1 Q3 ("instruction following benchmark survey large language models evaluation landscape 2024") and A8 Q2 ("evaluation benchmark quality assessment instruction following LLM gaming inflation construct validity") both broadly retrieve benchmark-level papers. Overlap is real but the discriminating terms (A1 names specific suites, A8 uses validity/meta-evaluation vocabulary) likely keep retrieval overlap below 60%. Borderline.

No fully synonymous pairs found — each angle has at least one thread that is definitionally absent from all others (e.g., D1's SE vocabulary appears in no other angle; C1's cognitive science vocabulary appears in no other angle).

**Count:** 1 clear overlap pair (N1/A8), 1 borderline (A1/A8). Total ≤2 overlap pairs with no fully synonymous pairs.

**Evidence:** "benchmark contamination data leakage instruction following LLM evaluation gaming leaderboard" (N1 Q3) vs "benchmark contamination data leakage instruction following LLM test set evaluation methodology" (A8 Q3) — near-identical query strings.

Score 2: ≤2 overlap pairs; no fully synonymous pairs.

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

Checking all three required elements:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
The COVERAGE MAP section (lines ~73–121) lists all 8 intake-brief traditions with planned angle slot and explicit gap flag ("Gap flag: No — slot assigned" for each). The cross-disciplinary slot is explicitly included at the end: "Cross-disciplinary slot (required): Target tradition: Cognitive science / linguistics / pragmatics. Basis for selection: [4-sentence explicit rationale citing unique vocabulary and research potential]." Selection basis is fully stated. PRESENT.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
The INTAKE BRIEF section contains all three: 8 vocabulary traditions explicitly listed and labeled; "Question type: EXPLORATORY — 'what benchmarks and methods exist' is a landscape/survey question"; "Source B status: UNAVAILABLE — MODERATE (Source A + Source C together produced 8 distinct vocabulary traditions, satisfying the ≥2 threshold for MODERATE severity)." PRESENT.

**(c) ≥1 gate documented as run with GATE PASSED or GATE FAILED notation:**
Multiple gates documented. INTAKE GATE CHECK section shows checkbox completion and "All gate conditions satisfied. Proceeding to angle-generation.md." GATE SUMMARY section contains explicit "Overall Gate 1: PASS," "Overall Gate 2: PASS," "Overall Gate 3: PASS," "Overall Gate 4: PASS," and "Overall verdict: PASS — dispatch ready." PRESENT.

All three Score 3 conditions met.

**Evidence:** "Overall Gate 1: PASS ... Overall Gate 4: PASS ... Overall verdict: PASS — dispatch ready" (Gate Summary); "Cross-disciplinary slot (required): Target tradition: Cognitive science / linguistics / pragmatics. Basis for selection: ..." (Coverage Map).

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Checking all four required elements:

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:**
Line 47 of the intake brief: "**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only." PRESENT.

Also appears at Gate Summary flags: "VOCABULARY SELF-REPORT FLAG — all 10 traditions identified by LLM enumeration only; no survey-paper probe run."

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":**
The output uses "MODERATE" and "MODERATE severity" but NOT the exact phrases "MODERATE RISK" or "HIGH RISK":
- "Source B status: UNAVAILABLE — MODERATE (Source A + Source C together produced 8 distinct vocabulary traditions, satisfying the ≥2 threshold for MODERATE severity)"
- "Source B unavailability: MODERATE — proceeding with VOCABULARY SELF-REPORT FLAG"

Severity is clearly indicated as MODERATE (not HIGH), but the exact label "MODERATE RISK" does not appear. NOT PRESENT per exact criterion.

**(c) ≥1 tradition named as possibly absent due to source limitation:**
"Traditions outside LLM training coverage (non-English evaluation research, specialized cognitive science subfields, post-2024 developments) may be absent." Multiple traditions or tradition classes are explicitly named as possibly absent. PRESENT.

**(d) Coverage described as reduced (not FULL):**
"External validation via a survey-paper probe is recommended before accepting the tradition list and angle list as complete." Coverage is implicitly described as not complete/FULL. PRESENT.

Elements present: (a) YES, (b) NO (uses "MODERATE severity" not "MODERATE RISK"), (c) YES, (d) YES.

Three of four elements present. The missing element is the exact severity label format per criterion (b).

Score 2: Self-report flag present + coverage limitation language present + tradition named as absent, but exact severity format "MODERATE RISK" / "HIGH RISK" absent.

**Evidence:** "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions were enumerated by LLM only" (Intake Brief, confirmed present); "Source B status: UNAVAILABLE — MODERATE ... MODERATE severity" (Intake Brief — says MODERATE but not "MODERATE RISK", causing miss on criterion b).

---

## Summary Table

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary tradition coverage | 3 |
| Q7 — Structural completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / non-redundancy | 2 |
| P1 — Procedure adherence | 3 |
| M1 — Self-assessment degraded mode | 2 |
