# Blind Evaluation — INT-10, Input 1, Evaluator 1

**Artifact scored:** cond-a-output.md
**Evaluator:** Eval 1 (blind — condition unknown)
**Date:** 2026-07-05

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output lists 17 distinct vocabulary tradition labels, many non-synonymous. User input words were: "self-correction," "LLMs," "models," "identify," "fix," "errors." Traditions clearly NOT derivable from those input words include: "AI Alignment / Anthropic Research," "Information Retrieval + NLP / Grounded Generation," "Software Engineering + ML / Program Repair," "Mathematical AI / Formal Methods," "Cognitive Neuroscience / Error-Related Negativity Research," "RLHF," "RLAIF," and "Inference-Time Computation." The adjacent-discipline requirement is met by Angle 17: "Cognitive Neuroscience / Error-Related Negativity Research" — explicitly different primary subject matter (neuroscience), using vocabulary entirely foreign to the main topic ("anterior cingulate cortex," "error-related negativity ERP component"). The software engineering tradition (Angle 9, "Program Repair") is a second plausible adjacent-discipline entry.

**Evidence:** "Cognitive Neuroscience / Error-Related Negativity Research" (Angle 17 label); "Software Engineering + ML / Program Repair" (Angle 9 label).

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 2**

Checking three required elements:

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:** Angle 15 ("Failure Modes and Null Results — When Self-Correction Fails") names the specific mechanism — "intrinsic self-correction without external feedback does not reliably improve performance and can degrade it." The queries include `"large language models cannot self-correct" reasoning null result` and `"self-correction" LLM failure "does not improve" OR "degraded performance" reasoning`. This goes beyond "failures exist" — it identifies the degradation mechanism under the no-external-feedback condition. PRESENT.

**(b) Exact text "ADVERSARIAL-FLAGGED":** Not present anywhere in the output. The string "ADVERSARIAL-FLAGGED" does not appear. ABSENT.

**(c) Cross-disciplinary angle explicitly from a different primary field:** Angle 17 explicitly names cognitive neuroscience as the field, cites "anterior cingulate cortex," "error-related negativity," and "ERP component" — vocabulary entirely non-overlapping with the ML/NLP tradition. PRESENT.

2 of 3 elements present.

**Evidence:** "Several papers argue that intrinsic self-correction without external feedback does not reliably improve performance and can degrade it" (Angle 15 description); "Cognitive Neuroscience / Error-Related Negativity Research" with "anterior cingulate cortex, error-related negativity ERP component" (Angle 17).

---

## Q5 — ACTIONABILITY

**Score: 3**

Every one of the 17 angles has exactly 3 runnable query strings (≥2 satisfied for all). Each query uses tradition-specific vocabulary: named techniques ("Self-RAG," "RLAIF," "constitutional AI," "process reward model," "MCTS," "Tree of Thoughts," "proximal policy optimization," "Toolformer," "ReAct"), named tools ("Lean," "Isabelle"), named anatomical structures ("anterior cingulate cortex"), and named ERP components ("error-related negativity"). Boolean operators appear across many angles (e.g., `"self-refine" OR "iterative refinement"`, `"Lean" OR "Isabelle"`, `"ReAct" OR "Toolformer"`, `"does not improve" OR "degraded performance"`). Named venues appear (arXiv, NeurIPS, ICML, ACL, EMNLP, ICLR, CADE, ITP, ICSE). No queries are generic phrase concatenations — all embed at least one named technique, author/organization, or Boolean combination of distinct concepts.

**Evidence:** `"Lean" OR "Isabelle" LLM formal verification self-correction proof` (Angle 11 — named tools + Boolean); `"anterior cingulate cortex" cognitive control correction mechanism` (Angle 17 — named anatomical structure).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

No angle pair found where query overlap would retrieve >60% of the same papers. The closest candidates for overlap:

- Angle 1 (Intrinsic Self-Correction) vs. Angle 15 (Failure Modes/Null Results): Both query for "self-correction" LLM and "self-refine," but Angle 15 restricts to null results and failure terms ("does not improve," "cannot self-correct," "null result"). Papers arguing self-correction works and papers arguing it fails are a largely non-overlapping corpus — overlap well below 60%.

- Angle 3 (Process Reward Models / RLHF) vs. Angle 14 (RL Policy Framing): Both involve reinforcement learning, but Angle 3 uses PRM-specific vocabulary ("process reward model," "process supervision," "let's verify step by step") while Angle 14 uses policy-theory vocabulary ("correction policy," "proximal policy optimization," "credit assignment"). Distinct enough bodies of literature.

- Angle 7 (Self-RAG) vs. Angle 16 (Tool-Augmented): Angle 7 uses retrieval-specific terms ("Self-RAG," "retrieval augmented generation," "factual grounding"); Angle 16 uses agent/tool-use terms ("ReAct," "Toolformer," "code interpreter"). Some shared "external oracle" concept but distinct enough query strings.

No fully synonymous pairs identified.

**Evidence:** Angle 15 queries contain `"does not improve" OR "degraded performance"` and `null result` — these specificity operators keep the retrieval set disjoint from Angle 1's queries which target the mechanism rather than its failure mode.

---

## P1 — PROCEDURE ADHERENCE

**Score: -1**

The output contains no coverage map (no gap check, no cross-disciplinary slot with stated selection basis), no intake brief (no vocabulary-tradition classification, no question-type classification, no severity assessment), and no gate notation ("GATE PASSED" or "GATE FAILED" does not appear anywhere). The summary table at the end of the document lists angles and their tradition labels but does not constitute a coverage map — it contains no gap analysis and no selection-basis rationale for the cross-disciplinary slot. The output is a pure angles list with a summary table. None of the three procedural structural elements required for a Score 0–3 rating are present.

Setting p1 = -1 per criterion: "no coverage map, intake brief, or gate notation visible anywhere in the output."

**Evidence:** Output begins at "Angle 1" and ends at "Distinct vocabulary traditions: 17" — no section header or content corresponding to coverage map, intake brief, or gate check.

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: -1**

The output contains no "VOCABULARY SELF-REPORT FLAG" text (the exact string is absent), no severity label ("MODERATE RISK" or "HIGH RISK"), no tradition named as possibly absent due to source limitation, and coverage is explicitly stated as complete: "Total angles: 17 / Distinct vocabulary traditions: 17." This claims full (not reduced) coverage. No acknowledgment of source limitation or coverage degradation appears anywhere in the output.

Setting m1 = -1 per criterion: "no VOCABULARY SELF-REPORT FLAG and no coverage limitation language visible."

**Evidence:** "Distinct vocabulary traditions: 17" (final line — asserts complete coverage); no "VOCABULARY SELF-REPORT FLAG" string anywhere in the document.

---

## Score Summary

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary Tradition Coverage | 3 |
| Q7 — Structural Completeness | 2 |
| Q5 — Actionability | 3 |
| Q3 — Precision / Non-Redundancy | 3 |
| P1 — Procedure Adherence | -1 |
| M1 — Self-Assessment Degraded Mode | -1 |
