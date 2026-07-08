# INT-11 Stage 4 Verdict

**Trial:** INT-11 — Non-LLM Domain Re-Trial (FM4 Domain-Scope Test)
**Kit:** angle-gen-kit
**Domain:** Periodization and training load management in endurance athletes
**Verdict written:** 2026-07-08
**Pre-registration:** stage-0-preregistration.md (2026-07-06)
**Design:** stage-1-design.md (2026-07-06)

---

## Overall Verdict: INVALID

**Rule triggered:** FM4 GENERAL confirmed AND hard Cond-A avg Q1 >= 2.5.

The trial cannot answer the primary hypothesis. The baseline (Condition A, no kit) achieved the maximum Q1 score (3/3) on every input including all five vocabulary-trap Hard inputs. With the baseline at ceiling, the primary measurement — Q1 B-A differential — is structurally zero and cannot respond to kit presence.

---

## Score Summary

| Metric | Value |
|--------|-------|
| Q1 Cond-A (all inputs) | 3.00 uniform (22/22 inputs scored 3) |
| Q1 Cond-B (all inputs) | 3.00 uniform (22/22 inputs scored 3) |
| Avg Q1 B-A (all inputs) | 0.00 |
| Avg Q1 B-A (Hard inputs only) | 0.00 |
| Standard inputs with Q1 B > A | 0/12 |
| Hard inputs with Q1 B > A | 0/5 |
| Q7 avg Cond-B | 3.00 |
| Q5 avg Cond-B | 2.82 |
| Q3 avg Cond-B | 2.73 |
| BIN1 pass rate | 22/22 |
| BIN2 pass rate | 22/22 |
| A8 longitudinal | 3 |

---

## FM4 Determination: GENERAL

**Decision rule applied:** calib Q1=3 AND hard Cond-A avg Q1 >= 2 → GENERAL.

**Evidence:**
- Calibration input H1 ("I want to research periodization for improving marathon performance") produced Q1 Cond-A = 3. Pre-registered expected score was 1. Calibration validity check failed immediately (Q1 ≤ 2 required; Q1 = 3 observed).
- Hard inputs H1–H5 (all designed as vocabulary traps predicting Cond-A Q1 = 1) each scored Q1 Cond-A = 3.
- Hard Cond-A avg Q1 = 3.0, which exceeds the GENERAL threshold (≥ 2) and the INVALID threshold (≥ 2.5).

**Interpretation:** FM4 is not domain-conditional. The frontier-model vocabulary enumeration ceiling applies to endurance sports science as broadly as it applies to LLM/AI topics (INT-10). The baseline model, without the kit, already enumerates ≥4 distinct, non-synonymous vocabulary traditions including traditions not derivable from the user's input prompt — the exact condition that earns Q1 = 3.

The vocabulary traps that were designed to produce Q1 = 1 did not function as traps. Input H1 ("periodization for marathon performance") was predicted to lock Cond-A into coaching vocabulary. Instead, Cond-A independently surfaced exercise physiology, clinical sports medicine, nutrition science, and biomechanics traditions alongside coaching vocabulary. This is the FM4-GENERAL signature: frontier model training data covers sports science tradition vocabulary broadly enough that the vocabulary-bootstrap mechanism adds no measurable Q1 uplift.

---

## Three Learning Questions

### Q1 — Primary Hypothesis

**Question:** Does angle-gen-kit enable measurably better vocabulary-diverse angle lists vs. no-kit baseline on non-LLM sports science domain, specifically Q1 (coverage breadth)?

**Answer: UNTESTABLE under this trial design.**

The trial design's precondition was calibration Q1 ≤ 2 on H1. That precondition was violated at the first calibration pass. The primary hypothesis is not falsified by a Q1 differential of 0.00 — it is blocked: no differential is possible when Cond-A is already at the maximum score. The hypothesis remains open pending a trial design that produces a valid calibration (a domain where frontier-model Q1 reliably scores ≤ 2).

The evidence as a signal (not a test): the kit produced no Q1 uplift on 22 inputs across Standard, Hard, and Edge categories on a non-LLM domain. Whether this reflects FM4-GENERAL or a design floor problem is separable — FM4-GENERAL is confirmed by the uniformity; the kit's actual cross-tradition mechanism is not evaluable from this trial.

### Q2 — Ship Signal

**Question:** Is the ship signal met? (Q1 Cond-B >= 1 point higher than Cond-A across ≥60% of Standard inputs AND ≥1 Hard input with Cond-A failing ≥2 Tier 1 dims while Cond-B passes them.)

**Answer: NOT MET.**

Sub-criterion 1: Q1 Cond-B ≥ 1 point higher than Cond-A across ≥60% of Standard inputs — 0/12 standard inputs showed Q1 B > A. Criterion requires ≥7.2/12. FAIL (0/12).

Sub-criterion 2: ≥1 Hard input with Cond-A failing ≥2 Tier 1 dims while Cond-B passes them — Q1 Cond-A = 3 on all Hard inputs. Cond-A did not fail any Tier 1 dimension on any Hard input. FAIL.

The ship signal could not be met regardless of kit performance because the baseline never produced a score that the kit could improve on.

### Q3 — Kit-Maker Signal

**Question:** If Cond-B does NOT outperform Cond-A on Q1 across Standard inputs — does this mean Phase 3/4 synthesis over-generalized the cross-tradition coverage claim?

**Answer: TRIGGERED — but the cause is FM4-GENERAL, not synthesis over-generalization.**

Cond-B did not outperform Cond-A on Q1 across any standard inputs. The kit-maker signal fires. However, the correct causal reading is:

- FM4-GENERAL means the Q1 metric is not the right discriminator for this kit on frontier models. The Phase 3/4 cross-tradition coverage claim may be structurally valid — the kit may genuinely surface traditions a user would not enumerate without it. But Q1 cannot detect this when the baseline model also surfaces those traditions.
- The synthesis over-generalization reading (kit claim holds only for LLM/AI topics) is not the complete picture: the claim does not hold for LLM/AI topics either (INT-10) or for sports science (INT-11). FM4-GENERAL means the claim fails across all tested domains — not because the domains are special but because the frontier-model baseline is uniformly strong on vocabulary enumeration.
- Action required: Phase 3/4 cross-tradition coverage claim should be reclassified. The kit adds value on Q5 (formulation quality), Q3 (precision), Q7 (structural completeness), and M1 (degraded-mode self-assessment). The Q1 differential claim requires a domain-specific carve-out: "in domains where the frontier-model baseline scores ≤ 2 on Q1 (sparse-literature or post-cutoff domains), the kit is expected to show uplift." This carve-out is currently unvalidated; an INT-12 trial is required.

---

## Failure Modes Triggered

| FM | Triggered | Evidence |
|----|-----------|----------|
| FM4-GENERAL | YES | Baseline Q1 = 3 on all 22 inputs including all Hard vocabulary-trap designs; FM4 is not domain-conditional |
| CALIBRATION_FAILURE | YES | H1 Cond-A Q1 = 3 (predicted 1); trial INVALID before full execution concluded |
| Q1_SCALE_CEILING | YES | 3-point Q1 rubric has no resolution above frontier-model baseline; differential measurement structurally impossible |
| VOCABULARY_TRAP_DESIGN_FAILURE | YES | All 5 vocabulary-trap Hard inputs (H1-H5 predicted Cond-A Q1 = 1) produced Q1 = 3; traps did not function as designed |
| FM1 (cross-tradition within-tradition only) | NOT TESTABLE | Q1 is at ceiling; cannot distinguish within-tradition vs. cross-tradition expansion from score |
| FM2 (cross-disciplinary slot too close) | NOT TESTABLE | Same ceiling problem |
| FM3 (nutrition periodization missed) | NOT TRIGGERED | Cond-A Q1 = 3 on H1, meaning nutrition science surfaced without kit |
| FM6 (longitudinal quality decay) | NOT TRIGGERED | A8 = 3; no decay observed |
| FM7 (Cond-C floors at Cond-A) | NOT TRIGGERED | M1 Cond-C shows variation (includes 2s), indicating degradation signaling is functioning |

---

## Key Findings

**Finding 1: FM4 is GENERAL.**
The near-zero Q1 B-A differential is not a domain-specific artifact of LLM/AI topics (INT-10). The same ceiling applies to endurance sports science. Frontier models enumerate vocabulary traditions on sports science topics as broadly as they do on LLM/AI topics. This is a fundamental finding about frontier-model baseline capability, not about the kit.

**Finding 2: The calibration validity check worked — and was the correct early-stop mechanism.**
The calibration pass (H1, Cond-A only) correctly flagged Q1 = 3 (expected 1) and set calibration valid = false. This prevented interpreting the full trial results as meaningful. The early-stop design is confirmed correct: calibration must precede full execution; a failed calibration invalidates the trial.

**Finding 3: Kit structural compliance is intact across all conditions.**
Q7 avg Cond-B = 3.00 (perfect structural completeness), Q5 avg = 2.82 (high actionability), Q3 avg = 2.73 (high precision), BIN1 22/22, BIN2 22/22, A8 = 3. The kit produces structurally complete, well-formulated, non-redundant angle lists. These are genuine quality signals — they are just not the signals that the primary hypothesis selected for measurement.

**Finding 4: Condition C is the only condition showing variation.**
M1 Cond-C scores include 2s (partial flagging) where full-kit Cond-B scores 3. This indicates the degraded-deployment path (Source B unavailable) produces detectable differential in self-assessment quality. The kit's value in sandboxed/no-web-search contexts may be a stronger claim than the cross-tradition Q1 claim.

**Finding 5: The vocabulary-trap design assumption was wrong.**
The trial predicted that "periodization" as anchor vocabulary would lock a frontier model into coaching tradition. The frontier model without the kit surfaced exercise physiology, clinical sports medicine, nutrition science, and biomechanics independently. The vocabulary trap design assumes the frontier model is limited by surface vocabulary similarity — this assumption does not hold for well-represented domains in frontier training data.

**Finding 6: 12 standard inputs were run (S1–S12) vs. 8 planned (S1–S8).**
Four additional standard inputs (S9–S12) were executed beyond the Stage 1 plan. All produced Q1 = 3 for both conditions. The expanded input set strengthens the FM4-GENERAL conclusion (more evidence, same result) but does not change the verdict.

---

## Recommended Actions

**Action 1 — Retire Q1 as the primary ship criterion for frontier-model contexts.**
Q1 cannot detect cross-tradition uplift when the frontier-model baseline already maxes it. Replace with Q1-delta: count the vocabulary traditions surfaced in Cond-B output that were NOT present in the matched Cond-A output for the same input. This requires per-output comparison (not score-level comparison) but measures actual additive value.

**Action 2 — Redesign the FM4 domain-scope test for a genuinely sparse domain.**
INT-12 should target a domain where calibration Q1 ≤ 2 is confirmed before committing to full execution. Candidate domains: highly technical sub-niches with sparse academic literature, post-cutoff topics (2024–2025 growth areas with thin training data coverage), or low-resource-language research areas. The H5 input (CGM for endurance athletes) was intended as a post-cutoff probe — this specific angle type may be the right INT-12 domain even if the broader sports science domain fails calibration.

**Action 3 — Reframe the kit's primary value claim.**
Based on INT-10 + INT-11 combined evidence: the kit's strongest validated signals are Q5 (formulation quality), Q7 (structural completeness), Q3 (precision), and M1 (degraded-mode self-assessment). The cross-tradition Q1 differential claim is currently unsupported by any completed trial. Revise Phase 4 synthesis confidence map: demote G8 (coverage-gap conditioning) from HIGH confidence to HYPOTHETICAL pending INT-12 with a valid calibration.

**Action 4 — Expand Q1 rubric or add a count metric.**
A 3-point scale compresses all high-performance outputs to the same value. Add a supplementary metric: "tradition count B-A" — the raw count difference in distinct traditions between Cond-B and Cond-A for the same input. A score of 0 on this metric at the Q1 ceiling confirms FM4-GENERAL. A positive count difference at Q1 = 3 for both conditions would indicate the kit adds traditions that both conditions happen to score equally under the rubric, which would require rubric revision.

**Action 5 — Investigate Condition C as the primary INT-12 hypothesis.**
If the kit adds value specifically in degraded deployment (no web access), Cond-B vs. Cond-C differential is the more informative comparison than Cond-B vs. Cond-A. INT-12 primary hypothesis candidate: "Does the kit enable better Q5/Q7/Q1 scores in Cond-C than a no-kit Cond-C baseline?" This is testable regardless of frontier-model ceiling because Cond-C applies the same constraint to both conditions.

---

## Stage Gate Assessment

| Gate | Status | Rationale |
|------|--------|-----------|
| Primary hypothesis answered | BLOCKED — INVALID | FM4-GENERAL + Q1 ceiling; hypothesis untestable |
| Ship signal | NOT MET | 0/12 standard inputs with Q1 B > A |
| Kit-maker signal | TRIGGERED | Cond-B did not outperform Cond-A on Q1; FM4-GENERAL is the cause |
| FM4 determination | GENERAL | Confirmed by calib Q1 = 3 and hard Cond-A avg Q1 = 3.0 |
| Trial design validity | INVALID | Calibration validity check fired; trial cannot test primary hypothesis |
| Actionable improvement signal (K3) | MET | All failure modes routed to specific actions above |

---

## Verdict Summary

INT-11 is INVALID. The trial confirms FM4-GENERAL (frontier-model Q1 ceiling is domain-broad, not domain-conditional) and produces no evidence for or against the kit's cross-tradition coverage claim. The kit shows strong performance on Q5, Q7, Q3, BIN1, BIN2, and A8 — these signals are real and should inform the Phase 4 confidence map update. The primary ship criterion (Q1 differential) cannot be tested on any well-represented domain with a frontier-model baseline. INT-12 must either (a) find a domain where calibration Q1 ≤ 2 holds, or (b) shift the primary hypothesis to a metric where the baseline does not already achieve ceiling.

---

*Stage 4 verdict complete. Stage 5 (learning digest) and Stage 6 (retrospective) are the next stage gate items.*
