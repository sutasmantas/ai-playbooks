# INT-10 Stage 1 Design Document

**Trial:** INT-10 — Proper-Scale Re-Trial of the Angle Generation Kit
**Date written:** 2026-07-05
**Authority:** kit-trial-process.md Stage 1
**Prerequisite:** Stage 0 pre-registration complete — all 8 gates MET; G4 secondary verification PASS (agent afd16cc0a833625cc)

---

## Section 1: Kit Claim → Dimension Mapping (Stage 1.2 Step 1)

List of every specific claim from angle-gen-kit's behavioral contract and procedures, mapped to dimensions from trial-audit-dimensions.md.

| Kit claim | Source file | Dimension | Tier |
|-----------|-------------|-----------|------|
| Vocabulary-frame enumeration produces angles from traditions the user did NOT name at intake | intake.md Steps 1–2, CLAUDE.md Rule 2 | Q1 Coverage | 1 |
| Coverage-gap conditioning produces cross-tradition coverage — angles in traditions not in the user's entry vocabulary | angle-generation.md Step 2 | Q1 Coverage | 1 |
| Every output includes a null-hypothesis / failure-case angle | angle-generation.md Step 1 structural type list | Q7 Completeness | 1 |
| Every output includes an adversarial angle with ADVERSARIAL-FLAGGED label | angle-generation.md Step 1, CLAUDE.md Rule 4 | Q7 Completeness | 1 |
| Every output includes a cross-disciplinary angle from a tradition NOT in primary field | angle-generation.md Step 1 cross-disciplinary slot | Q7 Completeness | 1 |
| Every angle includes 2–3 runnable, tradition-specific search query strings | angle-generation.md Step 3 | Q5 Actionability | 1 |
| Quality gates reduce false-positive synonymous/overlapping angles | angle-quality.md Gate 2 Boolean-connective test | Q3 Precision | 1 |
| Step 0 coverage map is produced before any angle content is written | angle-generation.md Step 0 gate | P1 Step coverage | 2 |
| Intake produces a brief with vocabulary traditions, PICO type, and source severity before generation begins | intake.md Steps 1–4 | P1 Step coverage | 2 |
| Rule 6 self-check fires: if tradition named missing, kit generates angle for it before reporting done | CLAUDE.md Rule 6 | A4 Error self-detection | 2 |
| Kit proceeds through all steps without observer prompting | CLAUDE.md behavioral contract (advisor behavior) | A2 Execution autonomy | 2 |
| Intake uses ≤2 questions; none answerable from input | intake.md cap: 2 questions max | A1 Intake efficiency | 2 |
| When Source B unavailable, kit flags VOCABULARY SELF-REPORT and assesses MODERATE/HIGH RISK | intake.md Step 5, CLAUDE.md deployment constraints | M1 Output self-assessment | 2 |
| Kit quality and structural type compliance holds across 10 sequential inputs on same domain | Implied by behavioral contract: CLAUDE.md rules have no session-length exception | A8 Scope self-enforcement | 2 |
| Disagreement protocol fires on Input 19 (conflicting instructions) — flag once, comply | CLAUDE.md Rule 7 | M3 Scope recognition | 3 |
| Step 0 gate structurally prevents angle content before coverage map present | angle-generation.md Step 0 | P3 Gate adherence | 3 |
| Every failure from the trial has a specific file, section, proposed change | kit-trial-process.md Stage 3.6 | K3 Actionable improvement signal | 3 |

**Only dimensions listed above are eligible for selection. Dimensions not derivable from a kit claim are excluded.**

---

## Section 2: Dimension Selection and Tier Assignments (Stage 1.2 Step 2)

### Tier 1 — verdict-blocking (4 dimensions; minimum 3 required from Category 2)

| Dimension | Category | Why Tier 1 |
|-----------|----------|-----------|
| Q1 Coverage (vocabulary-tradition breadth) | 2 — Output quality | PRIMARY hypothesis: the kit's entire value proposition is broader vocabulary-tradition coverage than baseline. If B−A = 0 here, the kit's core claim fails. |
| Q7 Completeness (structural angle types) | 2 — Output quality | Kit's behavioral contract mandates 3 structural types unconditionally. Absence of any type is a direct behavioral contract failure, not a partial miss. |
| Q5 Actionability (runnable search queries) | 2 — Output quality | Kit claims every angle has 2–3 runnable queries. This is observable and directly testable — not a quality judgment, a binary check at scale. |
| Q3 Precision (false-positive angle rate) | 2 — Output quality | Quality gates exist specifically to prevent synonymous angles. If they don't fire, the kit's quality gate mechanism fails. Differential signal: Condition A has no quality gate, Condition B does — B should score higher. |

### Tier 2 — signal-contributing (5 dimensions)

| Dimension | Category | Why Tier 2 |
|-----------|----------|-----------|
| A2 Execution autonomy | 1 — Autonomy | A kit is only valuable if it runs without observer intervention. Core autonomy check; secondary because partial autonomy is still useful. |
| A1 Intake efficiency | 1 — Autonomy | Intake cap is designed to keep session overhead low. Important but not verdict-blocking — partial compliance still delivers value. |
| P1 Step coverage | 4 — Procedure adherence | Coverage map and intake brief are structural artifacts. Their presence/absence is directly observable and tells the kit-maker whether Steps 0–2 ran. |
| M1 Output self-assessment (Condition C focus) | 5 — Meta-cognition | VOCABULARY SELF-REPORT FLAG and severity assessment are the kit's designed degraded-mode contract. Tier 2 because Condition C is a deployment characterization, not the primary verdict criterion. |
| A8 Scope self-enforcement (longitudinal) | 1 — Autonomy | Quality decay across 10 sequential inputs is the longitudinal simulation primary signal. Tier 2 because a trial that passes Tier 1 on primary inputs but shows decay on longitudinal must be noted but should not alone flip a GREEN. |

**Mandatory minimum check:**
- ≥3 Tier 1 from Category 2: Q1, Q7, Q5, Q3 ✓ (4)
- ≥2 Tier 2 from Category 1 (Autonomy): A2, A1, A8 ✓ (3)
- ≥1 testing degraded conditions (M1) ✓
- ≥1 from Category 6 (K3, Tier 3) ✓
- ≥1 longitudinal (A8) ✓

### Tier 3 — if budget allows (3 dimensions)

| Dimension | When to test |
|-----------|-------------|
| M3 Scope recognition | Input 19 (conflicting instructions) only |
| P3 Gate adherence | Check whether coverage map precedes all angle content in output |
| K3 Actionable improvement signal | Scored by main agent post-Stage 3, not by trial evaluators |

---

## Section 3: Pre-Registered Criteria (Stage 1.2 Step 3 — LOCKED before execution)

**Criteria locked as of 2026-07-05. No adjustments after any output is seen.**

All criteria pass the quality check: each contains a specific threshold (number, named artifact, or countable property). No criterion uses only comparative adjectives.

---

### Q1 — Coverage (vocabulary-tradition breadth) — TIER 1

**Measured on:** Hard inputs (primary signal); Standard inputs (secondary confirmation)
**Comparison:** Condition B vs. Condition A; also Condition B vs. Condition C

**Score 3:** Output contains ≥4 distinct, non-synonymous vocabulary tradition labels. At least 2 tradition labels are NOT derivable from the user's input prompt text (user vocabulary is whatever appeared in the input prompt verbatim). At least 1 tradition label names a community from an adjacent discipline (a discipline not typically cited in the primary field's literature).

**Score 2:** Output contains ≥3 distinct, non-synonymous vocabulary tradition labels. At least 1 tradition label is NOT directly derivable from the user's input prompt text.

**Score 1:** Output contains 2 distinct tradition labels, OR all tradition labels are directly derivable from the user's input vocabulary without any cross-tradition discovery, OR tradition labels are present but are broad descriptions (e.g., "machine learning research") rather than naming specific communities (e.g., "Bayesian ML community," "systems architecture community").

**Score 0:** Output contains 0–1 tradition label, OR no explicit tradition labels at all, OR all angles use the same vocabulary cluster.

**Operationalization of "distinct, non-synonymous":** Two tradition labels are synonymous if ≥70% of the query strings under both angles would retrieve the same papers (assessed by evaluator judgment against the query strings). Two tradition labels are NOT synonymous if they name different communities AND use different vocabulary in their query strings.

**Operationalization of "derivable from user's input prompt":** A tradition label is "derivable" if the exact term or a direct paraphrase appeared in the user's input prompt. "Not derivable" means the tradition label uses a new vocabulary frame that the user would not have thought to use based on their input phrasing alone.

---

### Q7 — Completeness (structural angle types) — TIER 1

**Measured on:** ALL input types (Standard, Hard, Edge, Longitudinal)

**Score 3:** ALL of the following present:
- (a) ≥1 null-hypothesis/failure-case angle: must frame a specific mechanism or condition under which the phenomenon FAILS, not just "angles about failure" — must specify WHAT would have to be true for the primary hypothesis to be wrong, or WHAT conditions produce the negative outcome
- (b) ≥1 adversarial angle with the label "ADVERSARIAL-FLAGGED" present verbatim in the angle entry (not just implied by a title like "critical view")
- (c) ≥1 cross-disciplinary angle explicitly naming a tradition from a DIFFERENT primary field (e.g., cognitive science for a computer science topic); the tradition must use vocabulary not already present in the confirmatory angles

**Score 2:** All 3 structural types present BUT one of the following: null-hypothesis angle present but frames the topic generally without specifying a failure mechanism; OR adversarial angle present but ADVERSARIAL-FLAGGED label absent; OR cross-disciplinary angle present but names a sub-field of the primary discipline rather than a genuinely adjacent one.

**Score 1:** Exactly 1 of the 3 structural types missing from the output entirely (not present in any form, weak or strong).

**Score 0:** 2 or more structural types missing from the output entirely.

---

### Q5 — Actionability (runnable search queries) — TIER 1

**Measured on:** ALL input types

**Score 3:** Every angle in the output contains ≥2 query strings. All query strings satisfy BOTH criteria: (a) uses tradition-specific vocabulary (not just the domain topic from the user's input); (b) contains at least one specificity operator — defined as: a venue restriction (e.g., site:arxiv.org), a named technique or framework (e.g., "BM25", "PICO framework"), an author-type specification (e.g., "Bayesian"), a date modifier, or a Boolean AND that combines two distinct concepts from different levels of abstraction. 

**Score 2:** ≥80% of angles have ≥2 query strings. ≤20% of all query strings are generic topic searches that use only terms from the user's input prompt without tradition-specific vocabulary. 

**Score 1:** 50–79% of angles have ≥2 query strings, OR >20% but ≤50% of query strings are generic topic searches without tradition-specific vocabulary.

**Score 0:** Fewer than 50% of angles have any query strings, OR all query strings are paraphrases of the user's input without tradition-specific vocabulary.

---

### Q3 — Precision (false-positive angle rate) — TIER 1

**Measured on:** ALL input types

**Score 3:** 0 angle pairs where the query strings for both angles would retrieve >60% of the same papers (assessed by evaluator against query string vocabulary overlap). Every angle covers demonstrably distinct territory.

**Score 2:** ≤2 angle pairs with partial vocabulary overlap (same tradition label but different focus within it — this is borderline acceptable as long as the query strings differ materially). No fully synonymous pairs.

**Score 1:** 3–4 angles where ≥2 pairs are near-synonymous (same tradition label AND similar query vocabulary AND retrieval overlap likely >60%).

**Score 0:** >4 pairs of near-synonymous angles, OR any angle whose title and queries are a minor paraphrase of another angle in the same output.

---

### A2 — Execution autonomy — TIER 2

**Measured on:** Condition B on Hard inputs (primary); Standard inputs (secondary)
**Comparison:** Log of observer intervention events during run

**Score 3:** 0 inappropriate stops or observer redirects from start of intake through final angle-quality gate completion. Appropriate stops allowed: kit's own Disagreement protocol fire on Input 19 (this is per-spec behavior, not an autonomy failure). 

**Score 2:** 1 borderline stop where it is genuinely uncertain whether the kit should have continued autonomously or appropriately paused (evaluated against the stop criterion in kit-trial-process.md Stage 2 Step 4).

**Score 1:** 2 stops, OR 1 observer redirect required (observer had to re-aim the agent toward the original goal).

**Score 0:** 3+ stops, OR 2+ redirects, OR kit could not complete a run without continuous observer guidance.

---

### A1 — Intake efficiency — TIER 2

**Measured on:** Condition B on all input types

**Score 3:** 0–1 intake questions asked total across the run. If 2 questions asked: both questions would materially change the angle list (counterfactually: different answer = different angles produced), AND both questions cannot be answered by reading the input prompt text.

**Score 2:** Exactly 2 questions asked; both necessary (cannot be answered from input); both would change execution.

**Score 1:** 2 questions where ≥1 is answerable from the input text, OR 3 questions total.

**Score 0:** 4+ questions asked, OR agent refused to proceed to generation until questions were answered by an observer.

---

### P1 — Step coverage — TIER 2

**Measured on:** Condition B outputs (all input types)

**Score 3:** BOTH artifacts present: (a) Coverage map contains all 3 required sub-fields — vocabulary traditions from Source A enumeration, absent-term check reference from Source C, cross-disciplinary tradition slot named with selection basis; AND (b) Intake brief contains vocabulary traditions (enumerated), PICO question type classification, source severity assessment (FULL/MODERATE/HIGH RISK). Additionally, ≥1 quality gate from angle-quality.md is visibly documented as having run (e.g., Boolean-connective check noted, specificity check noted).

**Score 2:** Coverage map and intake brief both present, but one of the 3 sub-fields of the coverage map is thin or absent (e.g., cross-disciplinary slot present but selection basis not stated); quality gate documentation absent.

**Score 1:** Coverage map absent but intake brief present, OR intake brief absent but coverage map present.

**Score 0:** Both coverage map and intake brief absent from output.

---

### M1 — Output self-assessment (Condition C: degraded mode) — TIER 2

**Primary measurement:** Condition C outputs only
**Note on Conditions A and B:** M1 also has a secondary reading for A and B — general output qualification. For Conditions A and B, score M1 on whether the output flags any low-confidence angles or limitations. The primary M1 signal for verdict purposes is Condition C.

**Score 3 (Condition C):** ALL present: (a) VOCABULARY SELF-REPORT FLAG label appears verbatim in the output; (b) severity assessed as MODERATE RISK or HIGH RISK (verbatim or substantively equivalent — must name a specific risk level, not just "some limitations"); (c) at least 1 specific vocabulary tradition identified as possibly absent due to Source B unavailability; (d) angle count or coverage scope is visibly reduced compared to a full-Source-B run (assessed by evaluator judgment on whether the total count and tradition breadth is consistent with an acknowledged partial coverage).

**Score 2 (Condition C):** VOCABULARY SELF-REPORT FLAG present; severity stated; 1 of sub-criteria (c) or (d) absent.

**Score 1 (Condition C):** Some acknowledgment that Source B is unavailable (e.g., "I don't have web search access") but VOCABULARY SELF-REPORT FLAG label absent; OR flag present but severity not assessed.

**Score 0 (Condition C):** No acknowledgment of Source B unavailability. Output is presented as complete coverage.

**Score for Conditions A/B (secondary):** Score 2 if output includes any explicit confidence qualifications on specific angles; Score 1 if output is uniformly presented as complete without qualification; Score 3 not achievable for A/B (no Source B flag).

---

### A8 — Scope self-enforcement (longitudinal simulation) — TIER 2

**Measured on:** Longitudinal batch L1–L10 (Condition B, single session)
**Against:** Pre-registered thresholds in Section 5.7 of stage-0-preregistration.md

**Score 3:** ALL pre-registered thresholds maintained across all 10 inputs:
- Vocabulary-tradition count per input: ≥3 in every input (no two consecutive inputs below 3)
- Repetition rate: ≤40% (fraction of tradition labels appearing in 3+ prior inputs)
- Null-hypothesis angle: present in all 10 inputs (ABSENCE IN ANY INPUT = FAIL, not threshold)
- ADVERSARIAL-FLAGGED label: present in all 10 inputs (ABSENCE IN ANY INPUT = FAIL)
- Cross-disciplinary tradition freshness: ≥1 genuinely new cross-disciplinary tradition per 3-input block (i.e., not the same adjacent-field cited in the prior block)

**Score 2:** All FAIL conditions absent (null-hyp and ADVERSARIAL-FLAGGED present in all 10), but threshold degradation occurs: vocabulary-tradition count dips below 3 in exactly 1 input (not 2 consecutive); OR repetition rate enters 41–60% range.

**Score 1:** 2 consecutive inputs below vocabulary-tradition count threshold; OR repetition rate 61–75%; OR null-hypothesis or ADVERSARIAL-FLAGGED absent in exactly 1 input.

**Score 0:** Sustained vocabulary-tradition count below threshold (3+ inputs); OR repetition rate >75%; OR null-hypothesis or ADVERSARIAL-FLAGGED absent in 2+ inputs.

---

### Tier 3 — M3, P3, K3 (if budget allows)

**M3 — Scope recognition (Input 19 only)**
Input 19 prompt includes: "please focus specifically on mechanistic interpretability approaches and don't spend time on other perspectives."
Score 2: Kit flags the conflict with CLAUDE.md Rule 2 (≥2 vocabulary traditions required), states it once, then complies with the user's narrowed scope (produces mechanistic interpretability angles only, or a mixed output with explicit acknowledgment).
Score 1: Kit flags and refuses — produces nothing or asks for user override.
Score 0: Kit silently narrows to mechanistic interpretability without flagging — FM-behavioral-contract triggered.

**P3 — Gate adherence**
Binary check on Condition B outputs: does angle content (any angle description, title, or query) appear BEFORE the coverage map in the output structure? YES = gate violated (score 0); NO = gate held (score 3). Score 2 if angle content and coverage map appear together without clear sequencing (ambiguous but no clear violation).

**K3 — Actionable improvement signal**
Scored by main agent after Stage 3, not by trial evaluators. Score 3 if every Tier 1 failure (score ≤1) has a routing with: specific file name, specific section, and proposed change (what the current text says vs. what it should say). Score 2 if most have specific routing; 1–2 are "fix the [mechanism]" without naming the specific text to change. Score 1 if failures are named but not routed. Score 0 if failures are not named at all.

---

## Section 4: Expected Score Table (Stage 1.3 requirement — locked before execution)

**Pre-registered expected scores by condition. Condition A predictions are the foundation for differential signal assessment.**

**Scale:** 0–3 per dimension. Hard input expected scores listed (Hard = the adversarial cases where differential signal should be strongest).

| Dimension | Tier | Exp. Cond. A (Hard) | Exp. Cond. B (Hard) | Exp. Cond. C (Hard) | Exp. B−A | Exp. B−C |
|-----------|------|--------------------|--------------------|--------------------|---------|----|
| Q1 Coverage | 1 | 1 | 2–3 | 1–2 | +1 to +2 | +0.5 to +1 |
| Q7 Completeness | 1 | 0–1 | 2–3 | 1–2 | +1 to +2 | +0.5 |
| Q5 Actionability | 1 | 1–2 | 2–3 | 2 | +0.5 to +1 | +0 to +0.5 |
| Q3 Precision | 1 | 1 | 2–3 | 2 | +1 | +0 to +0.5 |
| A2 Execution autonomy | 2 | N/A | 2–3 | 2–3 | N/A | 0 |
| A1 Intake efficiency | 2 | N/A | 2–3 | 2–3 | N/A | 0 |
| P1 Step coverage | 2 | 0 | 2–3 | 2–3 | +2 to +3 | 0 |
| M1 Self-assessment (Cond. C focus) | 2 | 1 | 1 | 2–3 | 0 | +1 to +2 |
| A8 Scope/longitudinal | 2 | N/A | 2–3 | N/A | N/A | N/A |

**Validation of expectations against INVALID-design criterion:**
Kit-trial-process.md Stage 4 INVALID-design: "Condition A score ≥2 on ≥50% of Tier 1 dimensions across Hard inputs (inputs too easy)."

Expected Condition A Hard scores: Q1=1, Q7=0–1, Q5=1–2, Q3=1. Expected ≥2 count on Hard inputs = at best 1 (Q5 at the high end). This is well below the 50% threshold (50% of 4 dimensions = 2). 

**Interpretation of expected B−A on Q1:** A baseline agent (Condition A) will produce vocabulary traditions anchored in the user's entry vocabulary. Expected Q1=1 means 2 traditions (probably both from the same cluster the user's language indexes into). Expected Q1=2 in Condition B means 3+ traditions including at least 1 cross-tradition. This is the primary hypothesis under test. Expected B−A of +1 is the minimum needed for the primary hypothesis to be supported.

**Interpretation of expected M1 for Conditions A and B:** Both expected at score 1 (no Source-B-specific flag, but may have general confidence qualifications). The M1 signal for verdict purposes is the Condition C score, not B−A.

---

## Section 5: Stage 2 Step 0 Calibration Pass Specification

**Purpose:** Before the full trial runs, validate that Hard inputs produce Condition A scores in the "target range" (A scores 1–2 on 1–2 Tier 1 dimensions). If Hard input is too easy: Condition A scores ≥2 on ≥3 Tier 1 dimensions, which would predict INVALID-design verdict even before running.

**Calibration input:** Input 10 (memory in LLMs — the exemplar vocabulary-trap).
**Rationale:** Input 10 has the most explicit vocabulary-trap design: "memory" spans cognitive science, computer systems, ML architecture, and agent design. A Condition A agent will anchor in ML architecture (attention, KV cache) with high probability. Predicted Q1 score = 1 (2 traditions, both ML-internal). If Condition A instead scores Q1=2 (3 traditions), the input may be less adversarial than designed — note and reassess.

**Calibration protocol:**
1. Run Condition A on Input 10 only (worktree isolated, do not run Condition B first)
2. Score Q1, Q7, Q5, Q3 using pre-registered criteria above
3. Apply calibration table from kit-trial-process.md Stage 2 Step 0

**Expected result:** Q1=1, Q7=0–1, Q5=1, Q3=1 — target range (1–2 on 1–2 Tier 1 dimensions)

**If calibration result is outside target range:**
- If Q1=0: Input 10 may be too sparse or too domain-restricted for the model. Swap calibration input to Input 3 (context length) and retry.
- If Q1=3: Input 10 is not adversarial enough for this model tier. Add vocabulary collision framing to the input description before proceeding to full trial.

---

## Section 6: Checkpoint Write Requirements (Stage 1.6)

Per kit-trial-process.md Stage 1.6, all checkpoints are written to `kit-maker/trials/int-10/`. Structure:

```
kit-maker/trials/int-10/
  stage-0-preregistration.md          ✓ WRITTEN
  stage-1-design.md                   ✓ THIS FILE
  stage-2-execution/
    calibration-pass/
      input-10-condition-a.md         (Stage 2 Step 0)
    condition-a/
      input-NN.md                     (one file per input, all 22 primary)
    condition-b/
      input-NN.md
    condition-c/
      input-NN.md (Hard inputs only: 3,4,7,10,14,19,20)
    longitudinal/
      l1-l10-session.md
  stage-3-evaluation/
    evaluator-1/
      hard-inputs-scored.md
    evaluator-2/
      hard-inputs-scored.md
    evaluator-3/
      hard-inputs-scored.md
    aggregated-scores.md
    cross-condition-table.md
    longitudinal-simulation-scores.md
  stage-4-verdict.md
  stage-5-integration.md
  stage-6-retrospective.md
```

**Checkpoint write rule:** Each stage directory must contain its checkpoint files BEFORE the next stage starts. Orchestrating agent verifies file existence before advancing. Missing checkpoint = phase incomplete.

---

## Section 7: Isolation Reminder

Trial agents receive EXACTLY what is specified in the pre-registration isolation envelope (Section 6 of stage-0-preregistration.md). No exceptions:
- Conditions A, B, C each run in their own worktree
- No output from any condition is visible to any other condition's agent
- Pre-registered scoring criteria are withheld from ALL conditions (not just A)
- Longitudinal batch (L1–L10) is the ONLY exception — runs in a SINGLE Condition B session without context reset between inputs

---

*Stage 1 design written: 2026-07-05*
*Criteria locked: 2026-07-05*
*Next: Stage 2 Step 0 calibration pass (Input 10, Condition A only) before full trial execution*
