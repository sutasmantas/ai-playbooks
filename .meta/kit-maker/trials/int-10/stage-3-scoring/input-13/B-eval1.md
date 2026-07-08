# Blind Scoring Rationale — INT-10, Input 13, Condition B, Evaluator 1

**Date scored:** 2026-07-06
**Evaluator:** subagent eval1 (blind — condition identity not known at scoring time)
**Artifact scored:** stage-2-execution/input-13/cond-b-output.md

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output enumerates 9 distinct non-synonymous vocabulary tradition labels across the intake brief, coverage map, and angle list:

1. NLP / ML research
2. ML engineering / LLMOps
3. Software reliability engineering
4. Automatic prompt optimization / program synthesis
5. Cognitive science / linguistics
6. Prompt security / adversarial ML
7. Human factors / usability engineering (cross-disciplinary, not in intake brief)
8. Information retrieval / query formulation (cross-disciplinary, not in intake brief)
9. Educational instructional design (cross-disciplinary, not in intake brief)

User input phrase: "prompt engineering techniques that work reliably in production systems."

Derivability check: "Prompt engineering" maps loosely to NLP/ML research; "reliably" maps loosely to reliability engineering; "production systems" maps loosely to ML engineering/LLMOps. The following traditions are NOT derivable from the user's input words: Automatic prompt optimization (requires knowing DSPy/OPRO/APE vocabulary); Cognitive science / linguistics; Prompt security / adversarial ML; Human factors / usability engineering; Information retrieval / query formulation; Educational instructional design. At minimum 6 traditions are non-derivable.

Adjacent disciplines: Human factors (primary subject: safety-critical systems engineering/ergonomics), Information retrieval (primary subject: library and information science), Educational instructional design (primary subject: education research). All three have primary subject matter different from NLP/ML.

Evidence: "This tradition was entirely absent from the user's framing and is not in the intake brief." (Coverage map, C1 and C2 entries)

Score 3 criteria: ≥4 distinct traditions (9); ≥2 NOT derivable (6+); ≥1 from adjacent discipline (3). All met.

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements present.

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:**

Angle 6 ("Evidence That Prompt Engineering Techniques Fail to Generalize") names specific failure mechanisms rather than merely asserting failures exist: "chain-of-thought prompting does not generalize cross-model brittleness failure," "LLM prompt robustness replication failure cross-task inconsistency empirical study," and extraction instructions call for "scope conditions under which techniques degrade" and "cross-model brittleness." Mechanisms named: cross-model brittleness, replication failure, cross-task inconsistency, scope boundary degradation. PRESENT.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**

Appears verbatim: in Angle 7 header "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results. Do not run this angle in the same session as Angles 1–6.]"; in TYPE ALLOCATIONS "Label: ADVERSARIAL-FLAGGED"; in COVERAGE MAP "Adversarial D1 — ADVERSARIAL-FLAGGED". PRESENT.

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:**

Angle 8 (Human factors / usability engineering) uses vocabulary "error-resistant procedure design," "operator instruction compliance," "safety-critical," "cognitive ergonomics," "checklist design" — none of which appear in any NLP/ML angle. Source venues: "ACM CHI proceedings; Human Factors (journal); Ergonomics (journal)" — zero overlap with NLP venues. Explicitly labeled "(NOT in intake brief)." PRESENT.

Evidence: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results.]" and "Vocabulary tradition: Human factors / usability engineering (NOT in intake brief)"

---

## Q5 — ACTIONABILITY

**Score: 3**

All 10 angles have exactly 3 runnable query strings (30 total).

Tradition-specific vocabulary: every angle draws exclusively from its assigned tradition. Examples:
- Angle 4: "gradient-free prompt search black-box optimization language model reliability"; "APE automatic prompt engineer evaluation cross-task robustness" — optimization vocabulary not present in other angles
- Angle 8: "error-resistant procedure design operator instruction compliance human factors reliability safety-critical" — human factors vocabulary, absent from all NLP angles
- Angle 9: "query formulation vocabulary mismatch information retrieval user effectiveness" — IR vocabulary

Specificity operators confirmed throughout:
- Named techniques/systems: "DSPy," "OPRO," "APE" (Angle 4); "chain-of-thought" (Angles 1, 6); "jailbreak" (Angle 7); "LangChain, LlamaIndex, PromptFlow, Weave" (Angle 2)
- Named venues: "arXiv cs.CL + cs.LG," "ACM CHI," "SIGIR," "Computers & Education," "JASIST"
- Named authors: "Chip Huyen's blog, Hamel Husain's blog, Eugene Yan's writing — search by author" (Angle 2)
- Numerical thresholds: "star count ≥50 and active commits" (Angles 1, 2, 3); "≥1000 stars" (Angle 4)
- Year filters: "2024 2025" present in Angles 1, 2, 4, 6, 7

No generic phrase concatenation found. Every query combines at minimum two distinct technical concepts from the tradition's own vocabulary.

Evidence: "Q1: automatic prompt optimization production deployment generalization DSPy OPRO 2024 2025 (Facet: transfer of auto-optimized prompts to production)" — named techniques, year filter, and dual-concept conjunction.

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The output conducts a formal Gate 2 Boolean-connective distinctness analysis on the two highest-risk pairs.

Angle 3 (reliability engineering — testing methods) vs. Angle 6 (null-hypothesis — failure evidence): Gate 2 documents their structural separation: "Angle 3 = methods for testing reliability; Angle 6 = documented evidence of failure." Query vocabulary is split intentionally: Angle 3 uses "sensitivity analysis," "fault injection," "variance measurement," "perturbation"; Angle 6 uses "does not generalize," "negative results," "replication failure," "post-mortem." These query sets would retrieve different document types (methodology papers vs. negative-result papers). Gate 2 verdict: STRUCTURALLY DISTINCT.

Angle 8 (human factors) vs. Angle 10 (instructional design): Both address instruction following but from different research communities with non-overlapping journals and author populations. Gate 2 confirms: "OR retrieval would NOT produce equivalent document sets."

One potential overlap noted: Angle 2 Q3 and Angle 3 Q3 both contain "prompt regression testing." However, these are single queries within longer angle descriptions anchored to different traditions (LLMOps lifecycle management vs. systematic reliability testing), and the full angle query sets do not produce >60% overlap.

No synonymous pairs. No angle pair with >60% estimated retrieval overlap. Score 3.

Evidence: "Pair: Angle 3 vs. Angle 6... Verdict: STRUCTURALLY DISTINCT. OR retrieval would not produce equivalent sets."

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements fully present.

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**

COVERAGE MAP section lists all 9 traditions with Gap flag per tradition ("Gap flag: No" for all). Explicit gap summary: "Traditions NOT yet represented in the planned list: All traditions from intake brief have at least one angle slot." Three cross-disciplinary slots (C1, C2, C3) each have a "Basis:" field with substantive selection rationale. Example: "Target tradition C2: Information retrieval / query formulation — Basis: Prompt formulation shares structure with query formulation in IR systems. IR research has studied vocabulary mismatch, query expansion, and query effectiveness for decades." PRESENT and complete.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**

INTAKE BRIEF contains: "Candidate vocabulary traditions" with 6 entries and representative terms; "Question type: EXPLORATORY" with stated basis; "Severity assessment: Source A + Source C together identified ≥4 distinct vocabulary traditions... Proceeding; VOCABULARY SELF-REPORT FLAG applied throughout." All three required elements present.

**(c) ≥1 gate documented as run:**

INTAKE GATE CHECK: 3 conditions checked, all "[x] PASS." QUALITY GATE SUMMARY: "Gate 1 result: PASS," "Gate 2 result: PASS," "Gate 3 result: PASS," "Gate 4 result: PASS." "Overall verdict: PASS — dispatch ready." Multiple explicit gate notations present.

Evidence: "Gate 1 result: PASS... Gate 2 result: PASS... Gate 3 result: PASS... Gate 4 result: PASS... Overall verdict: PASS — dispatch ready."

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim — PRESENT:**
Coverage map: "VOCABULARY SELF-REPORT FLAG: All traditions were enumerated by LLM only (Source B unavailable). External validation via survey-paper probe is recommended before accepting this coverage map as complete." Appears again identically in the GATE SUMMARY flags section.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK" — PARTIAL:**
Intake brief: "Source B status: UNAVAILABLE — MODERATE." The severity level is labeled "MODERATE" but the required exact form is "MODERATE RISK" or "HIGH RISK." The "RISK" suffix is absent. The severity concept is present; the exact required phrasing is not.

**(c) ≥1 tradition named as possibly absent due to source limitation — ABSENT:**
The output acknowledges unnamed absent traditions: "One or more traditions may exist in the practitioner literature that LLM enumeration cannot surface" and "A survey-paper probe could surface 1–2 additional traditions not accessible to LLM self-enumeration." Neither statement names a specific tradition by label as possibly absent. The criterion requires naming at least one specific tradition. NOT MET.

**(d) Coverage described as reduced (not FULL) — PRESENT:**
"External validation via survey-paper probe is recommended before accepting this coverage map as complete." Self-check: "Source B unavailability is the primary structural limit." Coverage is not described as FULL; it is explicitly flagged as incomplete pending external validation.

Assessment: (a) met, (b) partially met (concept present, exact wording absent), (c) absent, (d) met. The flag is unambiguously present and coverage is described as reduced. The severity phrasing is close but not exact. No specific absent tradition is named. This falls at Score 2: self-report flag + severity assessment (approximate) present, but element (c) is cleanly absent.

Evidence for flag: "VOCABULARY SELF-REPORT FLAG: All traditions were enumerated by LLM only (Source B unavailable)."
Evidence for missing (c): "One or more traditions may exist in the practitioner literature" — no tradition named.

---

## Final Scores

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary tradition coverage | 3 |
| Q7 — Structural completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / non-redundancy | 3 |
| P1 — Procedure adherence | 3 |
| M1 — Self-assessment degraded mode | 2 |
