# INT-11 — Stage 0 Pre-Registration

**Trial type:** RE-TRIAL after fix (Gap 2 + Gap 5 fixed 2026-07-06; INT-10 FM4 finding requires non-LLM domain retest)
**Pre-registration written:** 2026-07-06
**Kit:** angle-gen-kit (Phase 7)
**Blocked stage:** Stage 1+ deferred — resource constraint; this document is the session-complete artifact.

---

## 1. Kit Identity

**Kit name and version:** angle-gen-kit (current as of 2026-07-06; includes Gap 2 + Gap 5 fixes)

**Primary claimed capability:** Given a sparse 1–2 sentence research prompt, generate a vocabulary-diverse, quality-gated angle list that covers the research territory an unaided agent would miss — specifically: coverage-gap conditioning expands across vocabulary traditions the user did not name.

**Grounding:** Primary claim rests on synthesis G1 (vocabulary-mismatch, HIGH), G8 (coverage-gap conditioning, HIGH), G3 (adversarial separation, HIGH). Cross-tradition differential claim is domain-conditional per FM4 (INT-10 2026-07-06) — expected to show non-zero differential on domains underrepresented in LLM training.

**Trial type:** RE-TRIAL — testing whether FM4 (near-zero cross-tradition differential on LLM/AI topics) is domain-specific. INT-11 uses a non-LLM domain to isolate the domain-scope condition.

---

## 2. Three Locked Learning Questions

**1. Primary hypothesis:** This trial tests whether angle-gen-kit enables an agent to produce vocabulary-diverse angle lists that measurably outperform a no-kit baseline (Condition A) on a non-LLM sports science domain — specifically on Q1 (coverage breadth across vocabulary traditions).

**2. Ship signal:** INT-11 ships if: Q1 Condition B scores ≥1 point higher than Condition A across ≥60% of Standard inputs, AND at least one Hard input shows Condition A failing ≥2 Tier 1 dimensions while Condition B passes them. This would confirm FM4 is domain-conditional and the kit has non-zero differential on underrepresented domains.

**3. Kit-maker signal:** If Condition B does NOT outperform Condition A on Q1 across Standard inputs — this is a kit-maker Phase 3/4 problem: the synthesis over-generalized from LLM-heavy evidence into a claim that doesn't hold outside those domains. If Condition B outperforms A only on Q5/Q3 (formulation quality, query precision) but not Q1 (breadth) — the cross-tradition coverage claim requires reclassification to formulation-quality claim only.

---

## 3. Test Domain

**Domain:** Periodization and training load management in endurance athletes

**Why this domain:**
- Non-LLM/AI ✓ — unlikely to trigger FM4
- Underrepresented in LLM training relative to LLM/AI research ✓ — frontier models do not enumerate vocabulary traditions here at Condition A the same way they do for NLP
- Vocabulary collision ✓ — exercise physiology, performance coaching, clinical sports medicine, nutrition science, biomechanics, wearable technology — distinct traditions with minimal cross-pollination in surface vocabulary
- Useful to us ✓ — aligns with ongoing sport research backlog (exercise health wave queued)
- Strong hard-input design potential ✓ — "periodization" is a vocabulary trap: coaching vocabulary (mesocycle, macrocycle, block periodization) vs. physiology vocabulary (adaptation, supercompensation, cellular stress response) vs. clinical vocabulary (overtraining syndrome, HRV, training load metrics)

**Expected vocabulary traditions (minimum, to be expanded at Stage 1):**
1. Exercise physiology — VO2max, lactate threshold, supercompensation, adaptation, mitochondrial biogenesis
2. Performance coaching / periodization theory — macrocycle, mesocycle, block periodization, polarized training, tapering
3. Clinical sports medicine — overtraining syndrome, non-functional overreaching, HRV, training load monitoring, injury prevention
4. Nutrition science — fueling protocols, CHO periodization, energy availability, RED-S
5. Biomechanics / wearable technology — training stress score, acute:chronic workload ratio, power meters, GPS load metrics

---

## 4. Pre-Registered Failure Modes

| FM | What the kit might fail at | Based on | Condition testing it | Tier | Observability |
|----|---------------------------|----------|----------------------|------|---------------|
| FM1 | Coverage-gap conditioning produces within-tradition diversity only, not cross-tradition expansion | Weakness 7 (HEURISTIC) + FM4 finding from INT-10 — kit's cross-tradition claim may not hold even outside LLM domains if the traditions are all well-known | Hard inputs with vocabulary trap (coaching vocab entry — will agent surface physiology + clinical traditions?) | 1 | Q1 (coverage breadth) — tradition count in Condition B vs. A; add binary dimension: "≥3 distinct traditions represented in angle list" |
| FM2 | Cross-disciplinary slot filled with obvious neighbor, not genuinely cross-disciplinary tradition | No criterion for "how far is far enough" in cross-disciplinary selection | All Standard inputs | 2 | New binary dimension: C1 slot tradition is ≥2 fields removed from the intake vocabulary (evaluator judgment) |
| FM3 | Intake gate fails on nutrition science vocabulary — "periodization" maps to coaching only; nutrition periodization (CHO periodization) missed | Vocabulary trap: "periodization" has domain-specific meaning in nutrition science that is non-obvious from the coaching entry point | Hard inputs using "periodization" as anchor | 1 | Q1 score + tradition list review: does nutrition/CHO periodization appear as a distinct tradition? |
| FM4 | Gap 2 fix not effective — coverage map pre-commit at intake doesn't prevent soft-gate skipping in degraded conditions | Gap 2 was just fixed (2026-07-06); untested | Condition C (degraded deployment — Source B unavailable) | 2 | Binary: "coverage map pre-commit field populated in intake brief output" — present/absent; STAGE6-2 compliance: this dimension is required because FM4 was previously observationally invisible |
| FM5 | Null-hypothesis angle absent or merged with a confirmatory angle with hedging language | Rule 3 documented failure mode | Hard inputs; evaluator checks each output | 1 | Binary: "exactly 1 null-hypothesis angle present, not merged" — present/absent per output |
| FM6 | Quality decay across 10-input longitudinal batch — angle diversity narrows, repetition increases | INT-09 scale flaw — no longitudinal batch was tested | Longitudinal batch (same domain, 10 sequential inputs) | 2 | Longitudinal measures: tradition count variance, repetition rate, vocabulary cluster count (see Stage 1.1c) |
| FM7 | Kit adds no value in Condition C (Source B unavailable) — degraded mode floors at Condition A level | Deployment constraint section added; untested empirically | Condition C | 2 | Q1 Condition C vs. A; also flagged degradation level (MODERATE / HIGH RISK) accuracy dimension |

**Observability compliance check (STAGE6-2):** Each FM above has a named scoring dimension (Q1, binary present/absent, or longitudinal measure). No FM is observationally invisible. FM4 (coverage map pre-commit) and FM5 (null-hypothesis) have dedicated binary dimensions that must be added to Stage 1.2 dimension list before Stage 1 is locked.

---

## 5. Realism Assessment

**What this trial approximates:**
A researcher with moderate domain familiarity (knows "periodization" and "training load" as anchor vocabulary) asking the kit to generate a research angle list before starting a literature search. Represents the primary deployment scenario: early-stage research scoping where vocabulary diversity matters most.

**What this trial does NOT cover:**
- Expert-entry scenario (researcher already knows all vocabulary traditions) — in this case the kit's vocabulary-bootstrap mechanism adds zero value; this is a known limitation not tested here
- Genuinely sparse literature domains (sports science has substantial academic literature; the kit's small-literature-exception handling is not tested)
- Multi-session longitudinal use across different topics by the same researcher — quality drift over time and across topics is not captured
- Non-English literature — the kit makes no claims here; not tested

---

## 6. Scale Gate Checklist

| Gate | Requirement | Status | Evidence |
|------|-------------|--------|----------|
| G1: Input count | ≥20 test inputs | **ASSESSMENT PENDING — Stage 1** | Will plan ≥20: 8+ Standard, 5+ Hard, 5+ Edge, 2+ Longitudinal |
| G2: Domain count | ≥5 distinct domain types | **ASSESSMENT PENDING — Stage 1** | Single domain (endurance athletes) but domain spans 5 traditions; domain-type stratification at Stage 1 |
| G3: Condition count | ≥3 conditions (A/B/C) | **MET — pre-registered** | Condition A (no kit), Condition B (full kit), Condition C (degraded: Source B unavailable) locked |
| G4: True baseline verification | Condition A reviewed by secondary agent | **PENDING — Stage 1** | Will add secondary-agent baseline check to Stage 2 Step 0 |
| G5: Evaluator count | ≥3 blind evaluators on Hard inputs | **PENDING — Stage 1** | Will specify in Stage 1.2; target 3 blind evaluators for all 5+ Hard inputs |
| G6: Adversarial input % | ≥25% adversarial/edge inputs | **PENDING — Stage 1** | Will design 5+ Hard inputs (25% of 20 = 5 minimum); vocabulary-trap design for "periodization" anchor |
| G7: Degraded condition spec | ≥1 deployment constraint tested | **MET — pre-registered** | Condition C = Source B unavailable; FM4 (Gap 2 fix compliance) and FM7 (floor) test this |
| G8: Longitudinal batch | ≥1 batch of 10 sequential inputs | **PENDING — Stage 1** | Will design 10-input batch on single sub-topic (e.g., HRV monitoring in endurance training) |

**Gate summary:** G3 and G7 MET at pre-registration. G1, G2, G4, G5, G6, G8 require Stage 1 design to confirm. Stage 1 cannot close until all gates are MET.

**G2 note:** INT-11 uses a single broad domain (endurance sports science). The 5 vocabulary traditions within it cover the vocabulary-diversity purpose of multi-domain testing. However, the domain-type stratification requirement (empirically active, established, interdisciplinary, applied/practitioner, meta) may require 2–3 sub-domains to satisfy G2 formally. This is a known tension — to be resolved at Stage 1.1a.

---

## 7. Hard Input Skeleton (to be completed at Stage 1)

These are pre-registration sketches — adversarial design criteria (1.1b) must be verified at Stage 1 before they are committed.

**Hard Input H1 — Vocabulary trap: coaching entry, physiology + clinical missed**
- Prompt: "I want to research periodization for improving marathon performance."
- Vocabulary trap: "periodization" + "marathon performance" → coaching tradition entry; physiology (supercompensation, adaptation cascade) and clinical (overtraining syndrome, HRV monitoring) traditions are the expected miss
- Predicted Condition A Q1: 1 (coaching + maybe physiology; clinical and nutrition missed)
- Mechanism probe: coverage-gap conditioning — does Condition B surface clinical and nutrition traditions?

**Hard Input H2 — Vocabulary trap: wearable technology entry, missing physiology foundation**
- Prompt: "I want to research training load monitoring using GPS and power meters."
- Vocabulary trap: technology vocabulary entry; physiology foundation (lactate dynamics, neuromuscular fatigue) and nutrition science (fueling relative to training load) are the expected miss
- Predicted Condition A Q1: 1–2 (technology + maybe coaching; physiology substrate missed)

**Hard Input H3 — Meta-domain / edge case: kit's own research methodology as the domain**
- Prompt: "I want to research how to design effective research angles for training science literature reviews."
- Tests: meta-domain handling (kit's subject matter IS research methodology); plus sports science domain
- Predicted Condition A: moderate — the meta-domain framing is unusual enough to destabilize both conditions

**Hard Input H4 — Cross-disciplinary vocabulary trap: "recovery" as polysemous anchor**
- Prompt: "I want to research recovery strategies for endurance athletes."
- Vocabulary trap: "recovery" spans sleep science, nutrition, psychological fatigue, active recovery protocols — distinct traditions with minimal surface vocabulary overlap
- Predicted Condition A Q1: 1 (nutrition or sleep, but not both + psychological recovery tradition)

**Hard Input H5 — Post-cutoff sensitivity: recent wearable technology developments**
- Prompt: "I want to research continuous glucose monitoring for endurance athletes."
- Post-cutoff sensitivity: CGM in sports is post-2022 research growth area; LLM training may have thin coverage
- Predicted Condition A: lower due to post-cutoff gap; tests Condition C (Source B unavailable) degradation on post-cutoff topics

---

## 8. Stage 1 Handoff Notes

When starting Stage 1:
1. Resolve G2 tension: confirm whether vocabulary-tradition diversity within a single domain satisfies domain-type stratification, or whether 2–3 sub-domains are required
2. Add two binary dimensions to Stage 1.2: "coverage map pre-commit field populated" (FM4 observability) and "exactly 1 null-hypothesis angle" (FM5 observability)
3. Validate H1–H5 adversarial design against 1.1b criteria before committing as Hard inputs
4. Confirm platform-calibration.md exists and is populated (Gap 1 from INT-10 pre-registration — not yet confirmed)
5. Longitudinal batch design: choose sub-topic (HRV in endurance training is a candidate) and define the 10-input sequence before Stage 2

---

*All 8 scale gates assessed. G3 and G7 MET. Stage 0 complete.*
*Stage 1 blocked — resource constraint; resume in separate session.*
