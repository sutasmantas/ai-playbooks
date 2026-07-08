# INT-10 Trial Summary

**Trial ID:** INT-10
**Supersedes:** INT-09 (structurally invalid: INVALID-baseline + INVALID-scale + INVALID-domain)
**Date completed:** 2026-07-05
**Scale:** 22 inputs × 3 conditions + 10-input longitudinal batch

**Verdict:** GREEN
**Ship signal:** YES
**Q1 Primary hypothesis:** PARTIAL
**Kit-maker signal:** YES

**Key unexpected finding:** Condition A (no-kit strong baseline) scored 3/3 on vocabulary-tradition coverage across all 22 inputs including all 7 Hard adversarial vocabulary-trap inputs where the pre-registration predicted baseline failure, revealing that frontier models on familiar LLM domains already saturate this dimension without kit scaffolding — triggering FM4 and shifting the kit's demonstrated value entirely to adversarial angle quality, query specificity, and precision rather than its primary claimed mechanism of cross-tradition vocabulary expansion.

---

## Stage 6 improvements applied

Six improvements applied to kit-trial-process.md:

1. **Stage 2 Step 0 calibration table: domain-ceiling distinction** — Added a branch to the "Scores 3 on ≥50% of Tier 1" row that separates domain-ceiling findings (A exceeded pre-registered prediction — valid finding, do not redesign inputs) from too-easy inputs (A at or below prediction — design flaw). Prevents future trials from halting for input redesign when a frontier model saturates a mechanism dimension on a well-represented domain.

2. **Stage 0 FM pre-registration table: observability column** — Added a fifth column (Observability) to the failure mode table, plus a requirement that any FM marked "not observable from dimensional scores" must have a dedicated binary dimension added to Stage 1.2 before the dimension list is locked. Prevents pre-registering failure modes with no mechanism to detect them — 5 of 10 INT-10 FMs returned INSUFFICIENT_EVIDENCE due to this gap.

3. **Stage 1.1b adversarial design checklist: explicit predicted A scores** — Changed the baseline failure prediction requirement from qualitative ("which dimensions will A fail on") to quantitative (predicted A score 0–3 per dimension), with a routing rule: any dimension where actual A exceeds prediction by ≥2 is a required Key Unexpected Finding. Makes score-reversal detection structural rather than dependent on analyst memory.

4. **Stage 4 handoff template: Key Unexpected Findings section** — Added a required named section between STAGE 0 ANSWERS and DIFFERENTIAL SCORECARD, firing when: actual A scores deviate from predictions on mechanism-linked Tier 1 dimensions, FMs return INSUFFICIENT_EVIDENCE due to observability gaps, or score directions reverse. Required format: state prediction, state actual, state two competing interpretations. The pivotal section of the INT-10 verdict was written ad hoc — this makes it structural.

5. **Stage 5.2: Evidence-scope-vs-design-inference check** — Added an explicit check after the Severity 1 failure investigation for any failure traced to Phase 4 synthesis: "Was the evidence scope narrower than the design claim?" If yes: update grounding-map.md, upgrade weakness_register.md status to EMPIRICALLY_TESTED, add a RESEARCH_ANGLES.md angle targeting the narrowed scope gap, and revise claim documentation. Addresses the CCQGen scope mismatch that passed through Phase 4 without detection.

6. **Stage 6.3: Structural design gap carry-forward** — Extended the condition coverage audit to include confirmed structural design gaps (not just deployment conditions), each requiring: a pre-trial fix requirement if the gap must be resolved before the next trial, a corresponding scoring dimension in the next trial's pre-registration, and required test inputs. A structural gap without these three elements is an incomplete Stage 6. The coverage map soft gate (Gap 2) and cross-disciplinary slot heuristic (Gap 5) were the INT-10 triggers.

---

## Files produced

**Top-level files (6):**
- RESUME_INSTRUCTIONS.md
- stage-0-preregistration.md
- stage-1-design.md
- stage-4-verdict.md
- stage-5-integration.md
- stage-6-retrospective.md

**stage-2-execution/ (67 files):**
- calibration-pass/input-10-condition-a.md (1 file)
- input-1/ through input-22/: cond-a-output.md, cond-b-output.md, cond-c-output.md per input = 66 files

**stage-3-longitudinal/ (2 files):**
- decay-scores.md
- l1-l10-output.md

**stage-3-scoring/ (83 files):**
- input-1 through input-22, each containing A-eval1.md, B-eval1.md, C-eval1.md at minimum; Hard inputs (3, 4, 7, 10, 14, 19, 20) additionally contain B-eval2.md and B-eval3.md for inter-rater reliability = 83 total evaluation files

**Total: 158 .md files**

---

## Next trial scope (INT-11)

**Highest-priority blocking test:** Non-LLM domain batch (Out-of-scope 4, P1) — the only test that can distinguish FM4 trigger (mechanism cannot produce cross-tradition expansion regardless of domain) from domain-ceiling explanation (frontier model saturates LLM/AI q1 but not non-LLM q1). Candidate domains: biomedical NLP, computational social science, or human-computer interaction. Requires domain-expert evaluators. Until this runs, the vocabulary-expansion claim cannot be evaluated on its merits.

**Pre-INT-11 fixes required before the trial can launch (blocking gates):**
- Gap 2 / FM6: Move coverage map from soft gate to structurally enforced intake brief field; add binary coverage-map-presence dimension to INT-11 scoring rubric
- Gap 5: Add cross-disciplinary slot selection heuristic to angle-generation.md Step 0

**P1 tests (from out-of-scope items and FM analysis):**
- Multi-session drift: cross-session context protocol, prior-session vocabulary anchoring degradation test
- Misleading user framing: ≥2 inputs with demonstrably wrong anchor vocabulary (e.g., user describes "knowledge distillation" meaning "model compression")
- Execution-time separation enforcement: downstream research agent execution layer; score whether context separation was maintained after ADVERSARIAL-FLAGGED dispatch
- FM2 (Rule 6 diagnostic vs. generative gap): ≥3 inputs on domains with traditions genuinely outside LLM training data

**P2 tests:**
- Mid-tier model tier boundary (Out-of-scope 5): verify 77–87% failure rate claim empirically; identify which mechanism fails first
- FM5 (Boolean-connective false positive): ≥2 sparse-literature inputs with Gate 2 execution trace observability
- FM9 (question-type misclassification): ≥3 inputs ambiguous between EXPLORATORY and STRUCTURED
- Gap 3 ("highly specialized" definition): ≥2 ambiguous Step 5 severity-assessment inputs
- Gap 5 heuristic validation: ≥2 sparse-tradition inputs to test whether the new heuristic improves cross-disciplinary slot selection

**INT-11 scope summary:** 11 test targets; 2 require pre-trial kit fixes before Stage 0 can launch; 1 test (non-LLM domain) is the highest-priority evidence required to resolve the trial's open interpretation question.
