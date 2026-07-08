# INT-11 Stage 1 Design Document

**Trial:** INT-11 — Non-LLM Domain Re-Trial of the Angle Generation Kit (FM4 domain-scope test)
**Date written:** 2026-07-06
**Authority:** kit-trial-process.md Stage 1
**Prerequisite:** Stage 0 pre-registration complete — stage-0-preregistration.md written; G3+G7 MET at pre-registration

**Relationship to INT-10:** INT-10 ran on LLM/AI research topics and triggered FM4 (near-zero Q1 differential — Condition A already scored 3 on cross-tradition coverage). INT-11 uses a non-LLM domain (endurance sports science) to test whether FM4 is domain-conditional. Dimensions, criteria, and conditions are identical to INT-10 except: (a) all test inputs are new domain, (b) P1 criteria updated for Gap 2 fix (coverage map pre-commit in intake brief), (c) two new binary dimensions added for FM4/FM5 observability per STAGE6-2 compliance, (d) expected score table reflects non-LLM predictions.

---

## Section 1: Kit Claim → Dimension Mapping

| Kit claim | Source file | Dimension | Tier |
|-----------|-------------|-----------|------|
| Vocabulary-frame enumeration produces angles from traditions the user did NOT name at intake | intake.md Steps 1–2, CLAUDE.md Rule 2 | Q1 Coverage | 1 |
| Coverage-gap conditioning produces cross-tradition coverage | angle-generation.md Step 2 | Q1 Coverage | 1 |
| Every output includes a null-hypothesis / failure-case angle | angle-generation.md Step 1 | Q7 Completeness | 1 |
| Every output includes an adversarial angle with ADVERSARIAL-FLAGGED label | angle-generation.md Step 1, CLAUDE.md Rule 4 | Q7 Completeness | 1 |
| Every output includes a cross-disciplinary angle from a tradition NOT in primary field | angle-generation.md Step 1 cross-disciplinary slot | Q7 Completeness | 1 |
| Every angle includes 2–3 runnable, tradition-specific search query strings | angle-generation.md Step 3 | Q5 Actionability | 1 |
| Quality gates reduce false-positive synonymous/overlapping angles | angle-quality.md Gate 2 | Q3 Precision | 1 |
| Step 0 coverage map is produced before any angle content is written | angle-generation.md Step 0 gate | P1 Step coverage | 2 |
| Intake produces a brief with vocabulary traditions, question type, and source severity before generation begins | intake.md Steps 1–4 | P1 Step coverage | 2 |
| Cross-disciplinary tradition pre-committed in intake brief (Gap 2 fix 2026-07-06) | intake.md Step 4 + Step 6 gate | BIN-1 Pre-commit gate | 2 |
| Exactly 1 null-hypothesis angle present, not merged with confirmatory angle | angle-generation.md Step 1 | BIN-2 Null-hyp structural compliance | 2 |
| Rule 6 self-check fires: if tradition named missing, kit generates angle for it before reporting done | CLAUDE.md Rule 6 | A4 Error self-detection | 2 |
| Kit proceeds through all steps without observer prompting | CLAUDE.md behavioral contract | A2 Execution autonomy | 2 |
| Intake uses ≤2 questions; none answerable from input | intake.md cap: 2 questions max | A1 Intake efficiency | 2 |
| When Source B unavailable, kit flags VOCABULARY SELF-REPORT and assesses MODERATE/HIGH RISK | intake.md Step 5 | M1 Output self-assessment | 2 |
| Kit quality holds across 10 sequential inputs on same domain | CLAUDE.md rules have no session-length exception | A8 Scope self-enforcement | 2 |
| Disagreement protocol fires on conflicting-instructions input | CLAUDE.md Rule 7 | M3 Scope recognition | 3 |
| Step 0 gate prevents angle content before coverage map | angle-generation.md Step 0 | P3 Gate adherence | 3 |
| Every Tier 1 failure has specific file + section + proposed change | kit-trial-process.md Stage 3.6 | K3 Actionable improvement signal | 3 |

**Only dimensions listed above are eligible for selection.**

---

## Section 2: Dimension Selection and Tier Assignments

### Tier 1 — verdict-blocking (4 dimensions)

| Dimension | Category | Why Tier 1 |
|-----------|----------|-----------|
| Q1 Coverage (vocabulary-tradition breadth) | 2 — Output quality | PRIMARY INT-11 hypothesis: FM4 is domain-conditional — on non-LLM domains, B−A on Q1 should be +1 to +2 (unlike INT-10 where it was 0). If B−A = 0 here also, the cross-tradition claim fails domain-generally. |
| Q7 Completeness (structural angle types) | 2 — Output quality | Kit's behavioral contract mandates 3 structural types unconditionally. Absence of any type is a direct behavioral contract failure. |
| Q5 Actionability (runnable search queries) | 2 — Output quality | Kit claims every angle has 2–3 runnable queries. Observable and directly testable. |
| Q3 Precision (false-positive angle rate) | 2 — Output quality | Quality gates exist to prevent synonymous angles. Differential signal: Condition A has no quality gate, Condition B does. |

### Tier 2 — signal-contributing (7 dimensions including 2 new)

| Dimension | Category | Why Tier 2 |
|-----------|----------|-----------|
| A2 Execution autonomy | 1 — Autonomy | Kit only valuable if it runs without observer intervention. |
| A1 Intake efficiency | 1 — Autonomy | Intake cap is designed to keep session overhead low. |
| P1 Step coverage | 4 — Procedure adherence | Coverage map and intake brief artifacts observable and directly testable. Updated for Gap 2 fix. |
| BIN-1 Pre-commit gate | 4 — Procedure adherence | Tests Gap 2 fix: does intake brief output contain the cross-disciplinary tradition pre-commit field? Binary. Added per STAGE6-2 (FM4 was observationally invisible in INT-10). |
| BIN-2 Null-hyp structural compliance | 2 — Output quality | Tests FM5: is exactly 1 null-hypothesis angle present, not merged with confirmatory? Binary. Added per STAGE6-2. |
| M1 Output self-assessment (Cond. C focus) | 5 — Meta-cognition | VOCABULARY SELF-REPORT FLAG and severity assessment tested under Condition C. |
| A8 Scope self-enforcement (longitudinal) | 1 — Autonomy | Quality decay across 10 sequential inputs. |

**Mandatory minimum check:**
- ≥3 Tier 1 from Category 2: Q1, Q7, Q5, Q3 ✓ (4)
- ≥2 Tier 2 from Category 1 (Autonomy): A2, A1, A8 ✓ (3)
- ≥1 testing degraded conditions (M1) ✓
- ≥1 from Category 6 (K3, Tier 3) ✓
- ≥1 longitudinal (A8) ✓

### Tier 3 — if budget allows

| Dimension | When to test |
|-----------|-------------|
| M3 Scope recognition | Input E4 (conflicting instructions — "physiological mechanisms only, no nutrition") |
| P3 Gate adherence | Binary check on all Condition B outputs |
| K3 Actionable improvement signal | Scored by main agent post-Stage 3 |

---

## Section 3: Pre-Registered Criteria (LOCKED 2026-07-06)

**Criteria locked. No adjustments after any output is seen.**

All criteria pass the quality check: each contains a specific threshold (number, named artifact, or countable property). No criterion uses only comparative adjectives.

---

### Q1 — Coverage (vocabulary-tradition breadth) — TIER 1

**Measured on:** Hard inputs (primary signal); Standard inputs (secondary confirmation)
**Comparison:** Condition B vs. Condition A; also Condition B vs. Condition C

**Score 3:** Output contains ≥4 distinct, non-synonymous vocabulary tradition labels. At least 2 tradition labels are NOT derivable from the user's input prompt text. At least 1 tradition label names a community from an adjacent discipline (a discipline not typically cited in the primary field's literature).

**Score 2:** Output contains ≥3 distinct, non-synonymous vocabulary tradition labels. At least 1 tradition label is NOT directly derivable from the user's input prompt text.

**Score 1:** Output contains 2 distinct tradition labels, OR all tradition labels are directly derivable from the user's input vocabulary, OR tradition labels are broad descriptions ("sports science research") rather than naming specific communities ("exercise physiology," "clinical sports medicine," "performance coaching science").

**Score 0:** Output contains 0–1 tradition label, OR no explicit tradition labels, OR all angles use the same vocabulary cluster.

**Operationalization of "distinct, non-synonymous":** Two tradition labels are synonymous if ≥70% of the query strings under both angles would retrieve the same papers. Two labels are NOT synonymous if they name different communities AND use different vocabulary in their query strings.

**Operationalization of "derivable from user's input prompt":** A tradition label is "derivable" if the exact term or a direct paraphrase appeared in the user's input. "Not derivable" means the tradition label uses a new vocabulary frame the user would not have thought to use based on their input phrasing alone.

**INT-11-specific operationalization:** For this domain, traditions include: exercise physiology, performance coaching / periodization theory, clinical sports medicine, nutrition science, biomechanics / wearable technology, psychology / sport psychology, circadian biology, molecular biology (cellular adaptation). An input that uses "periodization" as anchor vocabulary is "not derivable" if the output adds clinical sports medicine or nutrition science — neither appears in the coaching vocabulary cluster.

---

### Q7 — Completeness (structural angle types) — TIER 1

**Measured on:** ALL input types

**Score 3:** ALL of the following present:
- (a) ≥1 null-hypothesis angle: must frame a specific mechanism or condition under which the phenomenon FAILS — specify WHAT would have to be true for the primary hypothesis to be wrong, or WHAT conditions produce the negative outcome
- (b) ≥1 adversarial angle with the label "ADVERSARIAL-FLAGGED" present verbatim in the angle entry
- (c) ≥1 cross-disciplinary angle explicitly naming a tradition from a DIFFERENT primary field; the tradition must use vocabulary not already present in the confirmatory angles

**Score 2:** All 3 structural types present BUT one of: null-hypothesis angle present but frames the topic generally without specifying a failure mechanism; OR adversarial angle present but ADVERSARIAL-FLAGGED label absent; OR cross-disciplinary angle present but names a sub-field of the primary discipline rather than a genuinely adjacent one.

**Score 1:** Exactly 1 of the 3 structural types missing from the output entirely.

**Score 0:** 2 or more structural types missing from the output entirely.

---

### Q5 — Actionability (runnable search queries) — TIER 1

**Measured on:** ALL input types

**Score 3:** Every angle in the output contains ≥2 query strings. All query strings satisfy BOTH criteria: (a) uses tradition-specific vocabulary (not just the domain topic from the user's input); (b) contains at least one specificity operator — venue restriction (e.g., site:pubmed.ncbi.nlm.nih.gov, site:sportsmedicine.com), named technique or framework (e.g., "PICO framework," "acute:chronic workload ratio"), named phenomenon (e.g., "HRV-guided training," "lactate threshold"), a date modifier, or a Boolean AND combining two distinct concepts from different levels of abstraction.

**Score 2:** ≥80% of angles have ≥2 query strings. ≤20% of all query strings are generic topic searches using only terms from the user's input prompt without tradition-specific vocabulary.

**Score 1:** 50–79% of angles have ≥2 query strings, OR >20% but ≤50% of query strings are generic without tradition-specific vocabulary.

**Score 0:** Fewer than 50% of angles have any query strings, OR all query strings are paraphrases of the user's input without tradition-specific vocabulary.

---

### Q3 — Precision (false-positive angle rate) — TIER 1

**Measured on:** ALL input types

**Score 3:** 0 angle pairs where the query strings for both angles would retrieve >60% of the same papers (assessed by evaluator against query string vocabulary overlap). Every angle covers demonstrably distinct territory.

**Score 2:** ≤2 angle pairs with partial vocabulary overlap (same tradition label but different focus within it — borderline acceptable as long as query strings differ materially). No fully synonymous pairs.

**Score 1:** 3–4 angles where ≥2 pairs are near-synonymous (same tradition label AND similar query vocabulary AND retrieval overlap likely >60%).

**Score 0:** >4 pairs of near-synonymous angles, OR any angle whose title and queries are a minor paraphrase of another angle in the same output.

---

### A2 — Execution autonomy — TIER 2

*(Identical to INT-10 — domain-independent criterion)*

**Score 3:** 0 inappropriate stops or observer redirects from start of intake through final angle-quality gate completion. Appropriate stops allowed: kit's Disagreement protocol fire on E4 (conflicting instructions).
**Score 2:** 1 borderline stop where it is genuinely uncertain whether the kit should have continued autonomously or appropriately paused.
**Score 1:** 2 stops, OR 1 observer redirect required.
**Score 0:** 3+ stops, OR 2+ redirects, OR kit could not complete a run without continuous observer guidance.

---

### A1 — Intake efficiency — TIER 2

*(Identical to INT-10 — domain-independent criterion)*

**Score 3:** 0–1 intake questions asked total across the run. If 2 questions asked: both would materially change the angle list, AND both cannot be answered by reading the input prompt text.
**Score 2:** Exactly 2 questions asked; both necessary; both would change execution.
**Score 1:** 2 questions where ≥1 is answerable from the input text, OR 3 questions total.
**Score 0:** 4+ questions asked, OR agent refused to proceed until questions were answered.

---

### P1 — Step coverage — TIER 2

**Updated for Gap 2 fix (2026-07-06):** The P1 criterion now requires the cross-disciplinary tradition pre-commit field in the intake brief (new requirement from Gap 2 structural enforcement).

**Score 3:** BOTH artifacts present with ALL fields:
- (a) Coverage map contains: vocabulary traditions from Source A enumeration, absent-term check reference from Source C, cross-disciplinary tradition slot named with selection basis (field and selection heuristic used)
- (b) Intake brief contains: vocabulary traditions (enumerated), question-type classification, source severity assessment, AND cross-disciplinary tradition pre-commit field populated (target tradition named + selection basis stated)
- Additionally, ≥1 quality gate from angle-quality.md is visibly documented as having run.

**Score 2:** Coverage map and intake brief both present, but the cross-disciplinary pre-commit field in the intake brief is absent or incomplete (only target tradition named without selection basis), OR quality gate documentation absent.

**Score 1:** Coverage map absent but intake brief present, OR intake brief absent but coverage map present.

**Score 0:** Both coverage map and intake brief absent from output.

---

### BIN-1 — Pre-commit gate (binary) — TIER 2

**Added for INT-11 per STAGE6-2 compliance (FM4 observability for Gap 2 fix).**

**Measured on:** All Condition B outputs.

**PASS:** Intake brief output contains a cross-disciplinary tradition pre-commit field with: (a) target tradition named, and (b) selection basis stated (references one of the three heuristics from intake.md Gap 5 fix: similar structures / same real-world problem / adjacent problem).

**FAIL:** Intake brief output does not contain the cross-disciplinary tradition pre-commit field, OR field is present but contains only a tradition name with no selection basis.

**Scoring for aggregation:** PASS = 3, FAIL = 0. No intermediate scores.

---

### BIN-2 — Null-hypothesis structural compliance (binary) — TIER 2

**Added for INT-11 per STAGE6-2 compliance (FM5 observability).**

**Measured on:** All Condition B outputs.

**PASS:** The output contains exactly 1 angle explicitly framed as a null-hypothesis / failure-case, AND that angle is structurally distinct from all confirmatory angles (not a confirmatory angle with hedging language added — must explicitly frame what would have to be TRUE for the phenomenon to fail or not generalize).

**FAIL:** 0 null-hypothesis angles present, OR 2+ null-hypothesis angles (over-generation — the "exactly 1" constraint from angle-generation.md is violated), OR the angle labeled as null-hypothesis is substantively a confirmatory angle with hedging language (e.g., "this works but here are some limitations" is NOT a null-hypothesis angle).

**Scoring for aggregation:** PASS = 3, FAIL = 0. No intermediate scores.

---

### M1 — Output self-assessment (Condition C focus) — TIER 2

*(Identical to INT-10 — domain-independent criterion)*

**Score 3 (Condition C):** ALL: VOCABULARY SELF-REPORT FLAG label verbatim; severity assessed MODERATE RISK or HIGH RISK with specific risk level named; ≥1 specific vocabulary tradition identified as possibly absent due to Source B unavailability; angle count or coverage scope visibly reduced.
**Score 2 (Condition C):** VOCABULARY SELF-REPORT FLAG present; severity stated; 1 of sub-criteria (c) or (d) absent.
**Score 1 (Condition C):** Some acknowledgment Source B unavailable but FLAG label absent; OR flag present but severity not assessed.
**Score 0 (Condition C):** No acknowledgment of Source B unavailability. Output presented as complete coverage.
**Conditions A/B secondary scoring:** Score 2 if output includes explicit confidence qualifications on specific angles; Score 1 if output uniformly presented as complete.

---

### A8 — Scope self-enforcement (longitudinal simulation) — TIER 2

*(Identical to INT-10 — domain-independent criterion)*

**Measured on:** Longitudinal batch L1 (10 sequential inputs on HRV monitoring in endurance training, Condition B)

**Score 3:** ALL pre-registered thresholds maintained across all 10 inputs:
- Vocabulary-tradition count per input: ≥3 in every input
- Repetition rate: ≤40% (fraction of tradition labels appearing in 3+ prior inputs)
- Null-hypothesis angle: present in all 10 inputs (ABSENCE IN ANY INPUT = FAIL)
- ADVERSARIAL-FLAGGED label: present in all 10 inputs (ABSENCE IN ANY INPUT = FAIL)
- Cross-disciplinary tradition freshness: ≥1 genuinely new cross-disciplinary tradition per 3-input block

**Score 2:** FAIL conditions absent; threshold degradation: tradition count dips below 3 in exactly 1 input; OR repetition rate 41–60%.
**Score 1:** 2 consecutive inputs below threshold; OR repetition rate 61–75%; OR null-hypothesis or ADVERSARIAL-FLAGGED absent in exactly 1 input.
**Score 0:** Sustained tradition count below threshold (3+ inputs); OR repetition >75%; OR null-hypothesis or ADVERSARIAL-FLAGGED absent in 2+ inputs.

---

### Tier 3 Criteria

**M3 — Scope recognition (E4 only)**
Input E4 prompt includes: "please focus only on physiological mechanisms and don't include nutrition or performance coaching angles."
Score 2: Kit flags the conflict with CLAUDE.md Rule 2 (≥2 vocabulary traditions required), states it once, then complies with narrowed scope.
Score 1: Kit flags and refuses to proceed.
Score 0: Kit silently narrows scope without flagging.

**P3 — Gate adherence**
Binary check on Condition B outputs: does angle content appear BEFORE the coverage map in the output structure? YES = gate violated (0); NO = gate held (3). Score 2 if coverage map and angle content appear together with ambiguous sequencing.

**K3 — Actionable improvement signal**
Scored by main agent after Stage 3. Score 3 if every Tier 1 failure (score ≤1) has routing: specific file name, specific section, proposed change. Score 2 if most have specific routing; Score 1 if failures are named but not routed; Score 0 if failures not named.

---

## Section 4: Expected Score Table (locked before execution)

**Key difference from INT-10:** INT-10 expected Q1 Condition A = 1 but observed Q1 Condition A = 3 (FM4 triggered — LLM already enumerates sports-science-adjacent vocabulary was NOT the case for sports science). INT-11 domain is endurance sports science — a non-LLM domain. Expected Condition A Q1 score is 1–2 (not 3), consistent with the FM4 domain-scope hypothesis.

| Dimension | Tier | Exp. Cond. A (Hard) | Exp. Cond. B (Hard) | Exp. Cond. C (Hard) | Exp. B−A | Exp. B−C |
|-----------|------|--------------------|--------------------|--------------------|---------|----|
| Q1 Coverage | 1 | 1 | 2–3 | 1–2 | +1 to +2 | +0.5 to +1 |
| Q7 Completeness | 1 | 0–1 | 2–3 | 1–2 | +1 to +2 | +0.5 |
| Q5 Actionability | 1 | 1–2 | 2–3 | 2 | +0.5 to +1 | +0 to +0.5 |
| Q3 Precision | 1 | 1 | 2–3 | 2 | +1 | 0 to +0.5 |
| A2 Execution autonomy | 2 | N/A | 2–3 | 2–3 | N/A | 0 |
| A1 Intake efficiency | 2 | N/A | 2–3 | 2–3 | N/A | 0 |
| P1 Step coverage | 2 | 0 | 2–3 | 2–3 | +2 to +3 | 0 |
| BIN-1 Pre-commit gate | 2 | N/A (no kit) | PASS | PASS | N/A | 0 |
| BIN-2 Null-hyp compliance | 2 | N/A (no kit) | PASS | PASS | N/A | 0 |
| M1 Self-assessment (Cond. C) | 2 | 1 | 1 | 2–3 | 0 | +1 to +2 |
| A8 Scope/longitudinal | 2 | N/A | 2–3 | N/A | N/A | N/A |

**Validation against INVALID-design criterion:**
Expected Condition A Hard scores: Q1=1, Q7=0–1, Q5=1–2, Q3=1. Expected ≥2 count on Hard inputs = at best 1 (Q5 at high end). Well below the 50% threshold (2 of 4 dimensions). VALID design — primary hypothesis is testable.

**FM4 test interpretation:** If actual Condition A Hard Q1 scores = 3 again (same as INT-10): FM4 is NOT domain-conditional — it is a general frontier-model property that applies to sports science too. Primary hypothesis fails — kit needs a fundamental repositioning. If actual Q1 = 1–2: FM4 is domain-conditional — the finding was specific to LLM/AI training-data-heavy domains. Kit claim is valid for non-LLM domains.

---

## Section 5: Calibration Pass Specification (Stage 2 Step 0)

**Purpose:** Before the full trial runs, validate that H1 produces Condition A scores in target range (1–2 on 1–2 Tier 1 dimensions).

**Calibration input:** H1 — "I want to research periodization for improving marathon performance."
**Rationale:** "Periodization" as anchor vocabulary indexes into coaching tradition (macrocycle/mesocycle framing). A Condition A baseline agent will enumerate periodization coaching vocabulary and possibly exercise physiology, but should miss clinical sports medicine (overtraining syndrome, injury prevention, HRV monitoring) and nutrition science (CHO periodization, fueling). Predicted Q1 = 1 (coaching + maybe physiology; clinical and nutrition missed). This is the vocabulary-trap design.

**Expected calibration result:** Q1=1, Q7=0–1, Q5=1, Q3=1 — target range

**If outside target range:**
- If Q1=3: Condition A already enumerates all 5 traditions without the kit → FM4 applies to sports science too → document FM4-general finding and evaluate whether INT-11 can still test any meaningful hypothesis
- If Q1=0: Input too sparse; add vocabulary framing and retry

---

## Section 6: Test Input List

**Total inputs: 22 primary + 10 longitudinal batch L1**

### Standard Inputs (8)

| Input | Domain type | Prompt |
|-------|------------|--------|
| S1 | Empirically active | "I want to research how endurance athletes adapt to altitude training." |
| S2 | Empirically active | "I want to research nutrition strategies for marathon recovery." |
| S3 | Established | "I want to research optimal tapering strategies before endurance competition." |
| S4 | Interdisciplinary | "I want to research the relationship between sleep quality and athletic performance in endurance sport." |
| S5 | Established | "I want to research heat acclimatization protocols for endurance athletes." |
| S6 | Interdisciplinary | "I want to research the effects of concurrent strength and endurance training on performance outcomes." |
| S7 | Empirically active | "I want to research carbohydrate periodization strategies for cyclists." |
| S8 | Applied/practitioner | "I want to research competition pacing strategies in long-distance running." |

### Hard Inputs (5 — vocabulary trap design)

| Input | Vocabulary trap | Prompt | Predicted Cond. A Q1 |
|-------|----------------|--------|----------------------|
| H1 | "periodization" → coaching entry; clinical + nutrition missed | "I want to research periodization for improving marathon performance." | 1 |
| H2 | "training load monitoring" → GPS/power technology entry; physiology substrate missed | "I want to research training load monitoring for endurance athletes using GPS and power output data." | 1 |
| H3 | "recovery" → nutrition or sleep entry; psychological recovery + injury prevention traditions missed | "I want to research recovery strategies for endurance athletes between training sessions." | 1 |
| H4 | "fatigue" → exercise physiology entry; neuromuscular, psychological, and motivational traditions all missed; "fatigue" is highly polysemous | "I want to research fatigue in endurance athletes during prolonged exercise." | 1 |
| H5 | "CGM" / "continuous glucose monitoring" → wearable technology entry; nutrition science + metabolic physiology substrate missed; post-cutoff topic | "I want to research continuous glucose monitoring for performance optimization in endurance sport." | 1 |

**Adversarial design validation (per kit-trial-process.md 1.1b):**
- H1: Vocabulary trap ✓; mechanism trigger (coverage-gap conditioning tested) ✓; baseline failure predicted ✓; kit-design probe (cross-tradition expansion) ✓
- H2: Same ✓ (technology vocabulary entry → physiology gap)
- H3: Same ✓ (polysemous anchor — "recovery" spans 4+ distinct traditions)
- H4: Same ✓ ("fatigue" is one of the most polysemous terms in sports science)
- H5: Same ✓; additionally tests post-cutoff topic degradation under Condition C

### Edge Inputs (5)

| Input | Edge type | Prompt |
|-------|----------|--------|
| E1 | Meta/self-referential | "I want to research methods for conducting systematic literature reviews in sports science." |
| E2 | Sparse literature | "I want to research periodized training for masters endurance athletes (age 50+)." |
| E3 | Saturation-sensitive (very broad) | "I want to research the science of endurance training and performance." |
| E4 | Conflicting instructions (M3 trigger) | "I want to research physiological adaptations to endurance training. Please focus only on physiological mechanisms and don't include nutrition or coaching perspectives." |
| E5 | Post-cutoff (2024-2025 literature growth area) | "I want to research the use of wearable sensor data and machine learning for monitoring athlete training load and injury risk." |

**Domain type coverage across all inputs:**
- Empirically active: S1, S2, S7, H2, H5, E5 ✓
- Established: S3, S5, H1, H4 ✓
- Interdisciplinary: S4, S6, H3, E5 ✓
- Applied/practitioner: S8, H2, E2 ✓
- Meta/self-referential: E1 ✓ (exactly 1 as required)

G2 domain stratification: 5 domain types represented ✓

### Longitudinal Batch L1 (10 sequential inputs — single Condition B session)

**Topic:** HRV (heart rate variability) monitoring in endurance athlete training management

**Rationale:** HRV monitoring is a technically-specific, empirically active sub-domain with distinct vocabulary traditions (exercise physiology, clinical cardiology, wearable technology, data science) and a growing applied literature. 10 inputs across progressively narrower sub-topics within HRV monitoring tests quality decay and repetition.

| L# | Prompt |
|----|--------|
| L01 | "I want to research heart rate variability as a training readiness indicator for endurance athletes." |
| L02 | "I want to research how HRV changes in response to acute training load in cyclists." |
| L03 | "I want to research how to interpret HRV data for individualized training prescription." |
| L04 | "I want to research the relationship between HRV and overreaching in distance runners." |
| L05 | "I want to research nocturnal HRV measurement protocols for athletic monitoring." |
| L06 | "I want to research the validity of smartphone HRV applications for athlete monitoring." |
| L07 | "I want to research HRV biofeedback in endurance athlete psychological readiness." |
| L08 | "I want to research how HRV changes across a macrocycle of endurance training." |
| L09 | "I want to research sex differences in HRV responses to training load in endurance athletes." |
| L10 | "I want to research HRV-guided training intensity prescription versus traditional periodization models." |

**Pre-registered longitudinal decay thresholds (for A8 scoring):**
- Vocabulary-tradition count: ≥3 per input (FAIL if any input <3)
- Repetition rate: ≤40% (fraction of tradition labels appearing in 3+ prior inputs by L10)
- Null-hypothesis angle: present in all 10 (ABSENCE = FAIL)
- ADVERSARIAL-FLAGGED: present in all 10 (ABSENCE = FAIL)
- Cross-disciplinary freshness: ≥1 new cross-disciplinary tradition per 3-input block (L01-03, L04-06, L07-09; L10 exempt)

---

## Section 7: Condition Design

### Condition A — True baseline (no kit)

**Agent prompt (one-paragraph, no structure hints, no kit files):**

> "I need a research angle list for the following research topic: [INSERT INPUT PROMPT]. You are an experienced researcher helping to plan a literature search. Generate a set of research angles — each angle is a specific perspective, vocabulary tradition, or approach that could find literature on this topic that a standard keyword search might miss. Include different types of angles where relevant. For each angle, write 2–3 search query strings I could use to find relevant academic literature. Use your best judgment on how to structure the output."

**True baseline verification:** After writing the Condition A prompt, dispatch a secondary agent to confirm: (a) no kit files or kit file references; (b) no structured procedure steps from the kit; (c) no prior examples of the kit output format. A single YES blocks the run.

**Model tier:** Frontier (matching kit minimum tier declaration).

### Condition B — Full kit

**Agent receives:** All angle-gen-kit files (CLAUDE.md + intake.md + angle-generation.md + angle-quality.md + weakness_register.md) + same one-paragraph task description as Condition A (not the kit's own intake prompt format).

**No main-agent session history. No prior examples.**

### Condition C — Degraded deployment (Source B unavailable)

**Agent receives:** All kit files + same task description.
**Constraint applied:** "Note: you do not have access to web search or external survey papers. Run the intake procedure using LLM enumeration only (Source A + Source C)."
**This is the documented real deployment condition** (subagent/sandboxed context without web access — documented in angle-gen-kit/CLAUDE.md deployment constraints).

**Expected Condition C signal:** VOCABULARY SELF-REPORT FLAG should fire; severity assessment should be MODERATE RISK (≥2 traditions from Source A) or HIGH RISK (only 1 tradition); angle list scope visibly narrowed relative to Condition B.

---

## Section 8: Isolation Envelope

| Item | Condition A | Condition B | Condition C |
|------|------------|------------|------------|
| Test input prompt | ✓ | ✓ | ✓ |
| One-paragraph task description | ✓ | ✓ | ✓ |
| Kit CLAUDE.md | ✗ | ✓ | ✓ |
| Kit intake.md | ✗ | ✓ | ✓ |
| Kit angle-generation.md | ✗ | ✓ | ✓ |
| Kit angle-quality.md | ✗ | ✓ | ✓ |
| Kit weakness_register.md | ✗ | ✓ | ✓ |
| Web search / Source B | Available (not constrained) | Available (not constrained) | BLOCKED |
| Pre-registered scoring criteria | ✗ | ✗ | ✗ |
| Prior examples from this domain | ✗ | ✗ | ✗ |
| INT-10 results or outputs | ✗ | ✗ | ✗ |

**Condition C constraint is applied as an explicit instruction** in the agent prompt, not by technically removing access — realistic deployment condition is an agent that receives the "no web search" instruction as it would in a sandboxed deployment.

---

## Section 9: Evaluator Protocol

**Hard inputs:** 3 independent blind evaluators each. Evaluators receive: Condition B output artifact (deliverable only) + pre-registered scoring criteria verbatim. NOT: chain-of-thought, other evaluators' scores, trial context. Score output artifact BEFORE reading chain-of-thought.

**Standard and Edge inputs:** 1 evaluator each.

**Longitudinal batch:** 1 evaluator scores the batch as a unit using A8 pre-registered thresholds.

**Inter-rater reliability check (Hard inputs):** After all 3 evaluators score independently, compute pairwise differences on each Tier 1 dimension. If any Tier 1 dimension has pairwise difference ≥2: dispatch 4th evaluator. Final score = median of all evaluators. If median is ambiguous: report as contested and note in verdict.

---

## Section 10: Checkpoint Write Structure

```
kit-maker/trials/int-11/
  stage-0-preregistration.md          ✓ WRITTEN 2026-07-06
  stage-1-design.md                   ✓ THIS FILE
  stage-2-execution/
    calibration-pass/
      h1-condition-a.md               (Stage 2 Step 0 — run H1 Condition A only first)
    input-s1/ through input-s8/       (Standard inputs — all 3 conditions)
    input-h1/ through input-h5/       (Hard inputs — all 3 conditions)
    input-e1/ through input-e5/       (Edge inputs — Condition B primary, A for comparison)
    longitudinal/
      l1-session.md                   (10-input L1 batch — Condition B only)
  stage-3-scoring/
    input-hN/
      A-eval1.md, A-eval2.md, A-eval3.md
      B-eval1.md, B-eval2.md, B-eval3.md
      C-eval1.md
    aggregated-scores.md
  stage-4-verdict.md
  stage-5-learning-digest.md
  stage-6-retrospective.md
```

---

*Stage 1 complete. All inputs pre-registered. All criteria locked. All conditions specified.*
*Stage 2 blocked — resource constraint; resume in separate session with free context.*
*Calibration pass (H1, Condition A only) is the minimum first action when Stage 2 begins.*
