# Blind Evaluation — INT-10, Input-12, Condition A, Evaluator 1

**Date:** 2026-07-05
**Evaluator:** Subagent (blind — condition identity unknown at scoring time)

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output presents 15 labeled vocabulary traditions across 15 angles.

Traditions NOT derivable from user input words ("evaluate," "LLMs," "follow," "instructions," "reliably," "benchmarks," "methods"):
- "HCI / crowdsourced annotation methodology" (Angle 7) — HCI is not in the user's vocabulary
- "Cognitive psychology / educational psychology" (Angle 14) — psychology is wholly absent from input
- "Meta-science / ML benchmarking critique" (Angle 15) — meta-science not in input
- "Linguistics / pragmatics" (Angle 12) — pragmatics not in input

Adjacent disciplines present (different primary subject matter):
- Angle 12: "Linguistics / pragmatics" — primary field is linguistics, vocabulary ("speech act theory," "implicature," "directive," "pragmatic competence") has no overlap with NLP/ML vocabulary
- Angle 14: "Cognitive psychology / educational psychology" — primary field is psychology, vocabulary ("cognitive load," "working memory") is wholly outside NLP/ML

Criterion met: ≥4 distinct non-synonymous labels present, ≥2 not derivable from input, ≥1 from adjacent discipline.

**Evidence:** "pragmatics 'directive' instruction interpretation language model evaluation" (Angle 12); "working memory instruction following task performance psychology" (Angle 14)

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 2**

Checking three required elements:

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:** Angle 6 ("Sycophancy and Failure Mode Analysis") names specific mechanisms: "sycophancy," "over-refusal," "conflicting instructions." The subtitle "(Null Results / Failure Angle)" makes the null-hypothesis framing explicit. Sycophancy is a named mechanism, not just "failures exist." PRESENT.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:** Scanned full output — this string does not appear anywhere. ABSENT.

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:** Angle 12 ("Linguistic Pragmatics and Speech Act Theory") is explicitly from linguistics; field label stated; queries use "speech act theory," "implicature," "pragmatic competence" — vocabulary with zero overlap to the NLP evaluation tradition. PRESENT.

Two of three elements present.

**Evidence:** "'instruction following' failure modes LLM refusal over-refusal evaluation" (Angle 6 — specific mechanism); "implicature instruction following LLM pragmatic competence benchmark" (Angle 12 — cross-disciplinary with non-overlapping vocabulary). "ADVERSARIAL-FLAGGED" not found.

---

## Q5 — ACTIONABILITY

**Score: 3**

All 15 angles have exactly 3 runnable query strings each — all meet the ≥2 threshold.

Tradition-specific vocabulary check across angles:
- Angle 2 uses "RLHF," "reward model" — RLHF-tradition specific
- Angle 3 uses "constrained decoding," "JSON schema" — engineering-tradition specific
- Angle 8 uses "LLM-as-judge," "judge bias calibration" — automated-evaluation specific
- Angle 12 uses "implicature," "pragmatic competence" — pragmatics-tradition specific
- Angle 15 uses "benchmark contamination," "meta-analysis" — meta-science specific

Specificity operators across angles:
- Named techniques/benchmarks: "InstructGPT" (Angle 2), "IFEval OR FollowBench OR InFoBench" (Angle 4), "AgentBench OR WebArena OR SWE-bench" (Angle 11), "GPT-4 judge" (Angle 8)
- Year thresholds: "2023 OR 2024" (Angle 1)
- Quoted concept pairs: "'prompt perturbation' instruction following consistency" (Angle 5), "'benchmark contamination' instruction following evaluation validity" (Angle 15)
- Named venue: "SIGDIAL proceedings" noted (Angle 9), "IEEE S&P / USENIX Security" (Angle 10)

Minor generic queries exist (e.g., "LLM complex instructions multiple conditions evaluation benchmark" in Angle 4; "crowdsourcing LLM output quality instruction compliance annotation" in Angle 7), but each such angle has ≥1 other query with a clear specificity operator, meeting the per-angle ≥1 requirement.

All 15 angles have tradition-specific vocabulary and ≥1 specificity operator.

**Evidence:** "'benchmark contamination' instruction following evaluation validity LLM" (Angle 15 — named concept specificity); "AgentBench OR WebArena OR SWE-bench instruction following agent evaluation" (Angle 11 — named benchmark specificity)

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

Examined the highest-risk overlap pairs:

**Angle 6 (Sycophancy/Failure) vs Angle 10 (Adversarial/Jailbreak):** Angle 6 targets sycophancy, over-refusal, conflicting-instruction failures — alignment failure modes. Angle 10 targets jailbreaks, prompt injection, red-teaming — adversarial security. These draw from distinct literatures (AI safety alignment vs. adversarial ML/security); expected paper overlap well under 60%.

**Angle 7 (Human Evaluation) vs Angle 8 (LLM-as-Judge):** Angle 7 queries target inter-annotator agreement, crowdsourcing platforms. Angle 8 queries target LLM-as-judge bias, MT-Bench, Chatbot Arena. These are methodologically opposed approaches; papers would not substantially overlap.

**Angle 1 (Benchmark Surveys) vs Angle 4 (Compositional/Multi-Constraint):** Angle 4 is tightly scoped to compositional generalization and named benchmarks (IFEval, FollowBench); Angle 1 is broad survey-level. Some survey papers would touch both but focused retrieval would be distinct.

**Angle 2 (RLHF/Alignment) vs Angle 6 (Failure Mode Analysis):** Angle 2 targets RLHF methodology, reward models. Angle 6 targets sycophancy and failure documentation. Different primary literatures.

No pair found where query overlap would retrieve more than 60% of the same papers.

**Evidence:** Angle 7 "inter-annotator agreement" vs Angle 8 "LLM-as-judge...judge bias calibration" — methodologically opposed vocabularies; Angle 10 "prompt injection LLM instruction override" vs Angle 6 "sycophancy instruction following failure alignment" — different failure type vocabularies.

---

## P1 — PROCEDURE ADHERENCE

**Score: -1**

Checking for the three required procedural elements:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:** The output ends with a summary table listing angle titles and tradition labels. This is a tradition inventory, not a coverage map. No gap check is present. No cross-disciplinary slot rationale with stated selection basis appears.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:** No intake brief is present anywhere in the output. The output opens directly with angles.

**(c) ≥1 gate documented as run (GATE PASSED or GATE FAILED notation):** No gate notation of any kind appears.

The output consists entirely of 15 angle descriptions followed by a summary table — no procedural structure is visible.

Criterion for -1 met: no coverage map, no intake brief, and no gate notation visible anywhere.

**Evidence:** Output begins immediately with "## Angle 1: Instruction-Following Benchmark Surveys" with no preamble; closes with "Total angles: 15 / Distinct vocabulary traditions: 15" with no procedural scaffolding.

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: -1**

Checking for the four required self-assessment elements:

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** Not present anywhere in the output.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** Not present.

**(c) ≥1 tradition named as possibly absent due to source limitation:** Not present; no source limitations are acknowledged.

**(d) Coverage described as reduced (not FULL):** The output closes with "Total angles: 15 / Distinct vocabulary traditions: 15" — implying complete, not reduced, coverage. No limitation language appears anywhere.

Criterion for -1 met: no VOCABULARY SELF-REPORT FLAG and no coverage limitation language.

**Evidence:** "Total angles: 15 / Distinct vocabulary traditions: 15" (final lines — asserts complete coverage with no qualification); no acknowledgment of source access constraints anywhere in the document.

---

## Score Summary

| Dimension | Score |
|-----------|-------|
| Q1 Vocabulary Tradition Coverage | 3 |
| Q7 Structural Completeness | 2 |
| Q5 Actionability | 3 |
| Q3 Precision / Non-Redundancy | 3 |
| P1 Procedure Adherence | -1 |
| M1 Self-Assessment Degraded Mode | -1 |
