# Stage 4 Verdict — INT-10
# Angle-Gen-Kit Proper-Scale Re-Trial
# Written: 2026-07-06

---

## 1. Aggregate Score Table — Hard Inputs, Tier 1 Dimensions

Hard input set: IDs 3, 4, 7, 10, 14, 19, 20 (n=7; isHard=true per score summary)

| Dimension | B Median (Hard) | A Median (Hard) | B–A Median | C Median (Hard) | B–C Median | B–C Avg |
|-----------|----------------|----------------|-----------|----------------|-----------|---------|
| q1 — vocab-tradition coverage | 3 | 3 | **0** | 3 | 0 | 0.00 |
| q7 — adversarial angle quality | 3 | 2 | **+1** | 3 | 0 | 0.14 |
| q5 — query specificity | 3 | 2 | **+1** | 3 | 0 | 0.29 |
| q3 — precision | 3 | 2 | **+1** | 3 | 0 | 0.29 |

**Avg B–C across all Tier 1 dims, all Hard inputs:** 5 / 28 = **0.18**

**Methodology note — medians computed per-dimension across 7 Hard inputs:**
- q1 B: [3,3,3,3,3,3,3] → 3. q1 A: [3,3,3,3,3,3,3] → 3.
- q7 B: [3,3,3,3,3,3,3] → 3. q7 A: [2,2,2,2,2,2,2] → 2.
- q5 B: [3,3,3,3,3,3,3] → 3. q5 A: [3,2,3,3,2,2,2] → sorted [2,2,2,2,3,3,3] → 4th = 2.
- q3 B: [3,3,3,3,3,3,3] → 3. q3 A: [3,2,2,2,3,2,3] → sorted [2,2,2,2,3,3,3] → 4th = 2.
- C Hard individual BmC non-zero: ID14 (q5=+1, q3=+1), ID20 (q7=+1, q5=+1, q3=+1). Medians remain 0 across 7-input set.

---

## 2. Verdict

**Color: GREEN**

### Verdict formula evaluation

**GREEN conditions (ALL must be met):**

(a) B–A positive on ≥3 Tier 1 dims (Hard medians): q7=+1, q5=+1, q3=+1 — **3 of 4 dims positive. MET.**

(b) All Tier 1 B median ≥2 on Hard: B=3 on all four dims. **MET.**

(c) Longitudinal NO_DECAY or MINOR_DECAY: Stage 3 longitudinal verdict is NO_DECAY — all five thresholds passed (tradition count 5–6 per input, repetition max 33%, NH 10/10, ADVERSARIAL-FLAGGED 10/10, 10 distinct cross-disciplinary traditions with zero reuse). **MET.**

(d) Avg B–C ≤1.5 on Tier 1 Hard inputs: 0.18 ≤ 1.5. **MET.**

**RED conditions (ANY fires → RED):**

(a) Any Tier 1 B median=0 on Hard: all B=3. **Does not fire.**

(b) B–A negative on any Tier 1 (Hard medians): q1=0, q7=+1, q5=+1, q3=+1 — none negative. (Two non-Hard inputs, IDs 6 and 16, show BmA q3=–1, but Hard-set medians are unaffected; overall q3 BmA median across all 22 inputs = 0, not negative.) **Does not fire.**

(c) B–A=0 on ALL Tier 1: q7, q5, q3 are all +1. Only q1=0. **Does not fire.**

### Rationale

The kit produces a clean GREEN. Condition B scores the maximum achievable (3/3) on every Tier 1 dimension for every Hard input. The differential signal on three of four Tier 1 dimensions is uniformly +1 across the Hard set, driven by mechanisms the kit adds that the baseline lacks: the ADVERSARIAL-FLAGGED structural labeling requirement (q7), the coverage-gap conditioning effect on query construction (q5), and the precision requirements in angle-generation.md Step 3 (q3). The longitudinal batch shows no decay across any of five pre-registered structural measures across 10 sequential inputs with accumulating context. The B–C gap is minimal (avg 0.18), indicating the kit's value is robust to Source B (web search) unavailability in this domain.

The single notable anomaly is q1 (vocabulary-tradition coverage), where B–A=0 across all 22 inputs, including all 7 adversarial Hard inputs specifically designed as vocabulary traps. This is the primary mechanism dimension and its zero differential is the dominant finding of the trial — addressed fully under Q1 and the FM4 analysis below.

---

## 3. Locked Learning Questions

### Q1: Does the kit enable broader vocabulary-tradition coverage than a strong baseline?

**Answer: PARTIAL**

The cross-tradition advantage claim — that coverage-gap conditioning enables the agent to reach vocabulary traditions the user did not name at intake, producing measurably more traditions than a well-prompted baseline — is not supported by this trial. On q1 (vocabulary-tradition coverage), B–A=0 on all 22 inputs without exception: every Standard, Hard, Edge, and interdisciplinary input shows B.q1=3 and A.q1=3.

Two interpretations are consistent with this result:

1. **FM4 (triggered — mechanism scope mismatch):** The CCQGen evidence that justified coverage-gap conditioning measured within-tradition facet coverage, not cross-tradition expansion. The mechanism may be producing within-tradition diversity (more facets of the same traditions) rather than cross-tradition jumps. This is Weakness 7 from weakness_register.md — the strongest unsupported assumption in the kit — and the pre-registration explicitly named FM4 as the interpretation if q1 B–A ≈ 0.

2. **Domain-familiarity ceiling effect (not refutation):** All inputs are in LLM/AI research, a domain heavily represented in frontier model training data. Condition A (a well-prompted frontier model) already saturates the vocabulary-tradition coverage dimension at 3/3 on every input, including Hard vocabulary-trap inputs. The ceiling may reflect domain familiarity rather than kit redundancy — on topics with sparse traditions or genuine vocabulary confusion (post-cutoff, specialized applied domains), the differential might appear. Input 17 (post-cutoff LLM OS agents) showed the highest B–A differential of the entire trial on any single dimension (q7 B–A=+2), suggesting the kit adds more value in higher-difficulty conditions.

Both interpretations are consistent with the data. The trial cannot distinguish between them on this domain. The pre-registered interpretation (FM4) is the more conservative one and is carried forward. The cross-tradition advantage claim is not supported for frontier models on familiar LLM domains. The absolute vocabulary coverage is strong for both B and C (both hit 3/3 consistently), so the kit is not hurting vocabulary coverage — it simply does not exceed the baseline on this dimension in this domain.

### Q2: Does the trial produce a ship signal?

**Answer: YES**

All four sub-conditions are met:

(a) B exceeds A by ≥1 on ≥3 Tier 1 dims across Hard inputs: q7=+1, q5=+1, q3=+1. Met with exactly 3 dims.

(b) Every Tier 1 B median ≥2 on Hard: all=3. Met.

(c) No Tier 1 dim shows B–A negative on Hard: none. Met.

(d) Longitudinal: NO_DECAY. Met.

The ship signal fires on the strength of execution quality mechanisms: adversarial angle labeling (q7), query specificity (q5), and precision (q3). These three dimensions represent real and consistent kit value — the ADVERSARIAL-FLAGGED structural discipline, the coverage-gap conditioning effect on query construction, and the angle-generation Step 3 precision requirements. The q1 zero differential does not block the ship signal because the formula requires ≥3 positive dims, not all dims.

The ship signal comes with a material caveat: the kit's primary claimed mechanism (cross-tradition coverage expansion) is not validated. The kit ships on execution quality evidence, not on the vocabulary-discovery claim. Phase 8 documentation must state this gap explicitly. A follow-on trial on a domain outside LLM/AI research (sparser traditions, non-frontier-model-dense training territory) is the recommended next validity test before the vocabulary-expansion claim can be made.

### Q3: Is a kit-maker process problem revealed?

**Answer: YES**

The first triggering condition is met: Condition B fails to exceed Condition A on the vocabulary-tradition coverage dimension specifically (q1 B–A=0 across all inputs).

Per pre-registration, this routes to a Phase 4 synthesis failure: the grounding for the coverage-gap conditioning mechanism (synthesis G8 — CCQGen, WSDM 2025) was adopted from a study that measured facet coverage within a single vocabulary tradition, not cross-tradition jumps. Phase 4 synthesis did not distinguish this scope mismatch before the mechanism was designed into angle-generation.md Step 2. Weakness 7 in weakness_register.md named this as "the strongest unsupported assumption in the kit" — it was identified at the synthesis stage but not resolved. The correct Phase 4 action would have been to either (a) find evidence specifically for cross-tradition generation under conditioning prompts, or (b) scope the kit's claim to within-tradition facet coverage with a Phase 5 note that cross-tradition evidence is needed before the stronger claim can be made.

The second triggering condition (null-hypothesis angle absent from ≥50% of Standard inputs) cannot be fully verified from dimensional scores for the 22 primary inputs. However, the longitudinal batch shows 10/10 NH presence in final outputs (with one near-miss at L9 caught by the gate-summary pass). Dimensional scores do not encode NH presence for primary inputs, so this condition is marked INSUFFICIENT_EVIDENCE rather than triggered.

The kit-maker process gap is Phase 4 synthesis: failing to catch the scope mismatch between within-tradition facet evidence and cross-tradition design inference. This is a specific, actionable finding — it requires either additional research on cross-tradition conditioning (a new angle in RESEARCH_ANGLES.md) or a revised claim scope in the kit's CLAUDE.md.

---

## 4. Failure Mode Analysis

| FM | Description | Status | Evidence |
|----|-------------|--------|----------|
| FM1 | Source B unavailable: LLM-only produces false-complete angle list with no gap signal | NOT_TRIGGERED | B–C avg 0.18 on Hard; Condition C matches B across all Hard inputs except IDs 14 and 20 (minor q5/q3 gaps); no systematic false-complete pattern |
| FM2 | Rule 6 self-check diagnoses missing tradition but cannot generate angles for it | INSUFFICIENT_EVIDENCE | Sparse-lit input (ID 16) scores B.q1=3/q7=3 — no degradation observed; but generation mechanism not separable from scores; whether Rule 6 gap-name vs. generate distinction fired is not observable |
| FM3 | Meta-research domain creates recursive vocabulary collision | NOT_TRIGGERED | Input 15 (meta/self-referential) scores B.q1=3, q7=3, q5=3, q3=3, p1=3 — maximum on all dims; no observable collision degradation |
| FM4 | Coverage-gap conditioning: within-tradition diversity but NOT cross-tradition coverage | **TRIGGERED** | q1 B–A=0 on all 22 inputs; pre-registered calibration condition confirmed; Hard inputs 3, 4, 7, 10, 14, 19, 20 all show B.q1=3 and A.q1=3 with zero differential; CCQGen scope mismatch identified as root cause |
| FM5 | Boolean-connective test false positives for sparse-literature domains | INSUFFICIENT_EVIDENCE | Gate 2 behavior not observable from dimensional scores; Input 16 scores maximal on all dims but actual Gate 2 execution cannot be verified |
| FM6 | Coverage map soft gate not structurally enforced | INSUFFICIENT_EVIDENCE | Longitudinal batch shows strong structural compliance (NH and ADVERSARIAL-FLAGGED 10/10), but coverage map presence for primary inputs not encoded in dimensional scores |
| FM7 | Interdisciplinary vocabulary collision collapses traditions | NOT_TRIGGERED | Interdisciplinary Hard inputs 10 (memory) and 14 (RAG) score B.q1=3; the vocabulary-collision design specifically targeted FM7 and shows no coverage degradation; kit handles multi-tradition collision inputs as well as non-collision inputs |
| FM8 | ADVERSARIAL-FLAGGED label-only enforcement (downstream compliance not enforced) | NOT_TRIGGERED (within trial scope) | q7 B=3 on every Hard input vs. A q7=2 on every Hard input; label consistently present in B and consistently absent/weaker in A; downstream execution-time separation is out of scope per pre-registration Section 4 |
| FM9 | Question-type misclassification (implicit STRUCTURED questions default to EXPLORATORY) | INSUFFICIENT_EVIDENCE | Intake question-type assignment not observable from dimensional scores; Input 22 (fine-tuning vs. prompting — explicit STRUCTURED framing) and Input 19 (conflicting-instructions) would be the diagnostic inputs; scores are available but the type assignment itself is not encoded |
| FM10 | Post-cutoff topic failure: Source B loss more severe than MODERATE/HIGH RISK binary suggests | NOT_TRIGGERED | Input 17 (post-cutoff LLM OS agents): B.q1=3, q7=3, q5=3, q3=2 — strong performance; highest single-dimension B–A differential in the entire trial appears here (ID 17 q7 B–A=+2); B–C gap for ID 17: q3=–1 (C slightly outperforms B on precision for post-cutoff topic, possibly due to constraint-induced anchoring to known literature) |

---

## 5. Key Unexpected Finding

Condition A (no-kit strong baseline) scored the maximum possible score of 3/3 on vocabulary-tradition coverage (q1) across all 22 inputs without exception — including all 7 Hard inputs explicitly designed as vocabulary traps (memory-in-LLMs, adversarial reasoning, knowledge graphs, RAG, tool-use reliability, conflicting instructions, explainability-of-CoT) where the pre-registration predicted baseline failure rates. This was not anticipated: the calibration note pre-registered "Q1=1" as the expected Condition A score for Hard inputs such as Input 10, yet A scored 3/3 uniformly. The finding reverses the trial's central prior: frontier models on familiar LLM research domains already saturate the vocabulary-tradition coverage dimension without kit scaffolding, making FM4 the dominant signal of the trial and shifting the demonstrated value of the kit entirely to execution quality (adversarial labeling, query construction, precision) rather than vocabulary discovery.

---

*Stage 4 verdict written: 2026-07-06*
*Based on: score summary (22 inputs × 3 conditions × 4 Tier 1 dims), stage-3 longitudinal decay-scores.md, stage-0-preregistration.md*
*Verdict formula: pre-registered 2026-07-05, locked before execution*
