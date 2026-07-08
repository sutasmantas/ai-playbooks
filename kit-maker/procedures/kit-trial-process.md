# Kit Trial Process

Procedure for conducting a Phase 7 trial of a generated kit. Applies after all Phase 6 files are built.

**Why this exists:** Three compounding failures in early trials:
1. **Design flaw** (M-17): near-zero differential signal because test inputs were too easy and conditions were insufficiently isolated.
2. **Purpose flaw** (M-23): trials framed as performance comparisons rather than failure-mode diagnoses.
3. **Scale flaw** (INT-09, 2026-07-05): trials run at minimum viable scope — 3 inputs, 1–2 domains, ~1 hour — cannot represent a kit used across months of varied real work.

**Core principle:** A trial that cannot detect differential signal produces no information. A trial at minimum viable scale produces only false confidence. A trial that does not upgrade the trial process after running is wasted learning.

**Primary purpose of a Phase 7 trial:**
1. Diagnose failure modes — what doesn't the kit do that it claims to?
2. Measure differential value — does the kit measurably outperform no-kit across representative usage?
3. Stress the boundaries — where does quality degrade, what conditions break it, what's the degraded-mode floor?
4. Upgrade the trial process — every trial reveals what the next trial should test that this one didn't.

A score is a side-effect. Failure classification and differential signal are the deliverables.

---

## Stage 0 — Pre-registration (do this before Stage 1)

**Hard scale gates — trial cannot launch without all of these:**

| Gate | Minimum requirement | INT-09 failure mode it catches |
|------|--------------------|---------------------------------|
| G1: Input count | ≥20 test inputs total across all domains | INT-09 ran 3 inputs — insufficient to detect systematic patterns |
| G2: Domain count | ≥5 distinct domain types (stratified per 1.1a) | INT-09 ran 1–2 domains — one bad domain wipes the entire signal |
| G3: Condition count | ≥3 conditions: true baseline (Condition A), full kit (Condition B), degraded deployment (Condition C) | INT-09 Condition A used the kit — delta was 0 across all dimensions |
| G4: True baseline verification | Condition A prompt reviewed by secondary agent to confirm zero kit file access | INT-09 had no verification — baseline contamination went undetected |
| G5: Evaluator count | ≥3 blind independent evaluators per output on Hard inputs; ≥1 on Standard inputs | INT-09 single evaluator per output — no inter-rater reliability check possible |
| G6: Adversarial input % | ≥25% of inputs must be adversarial or edge-case (see 1.1b) | INT-09 had no adversarial inputs — only tested cooperative conditions |
| G7: Degraded condition spec | At least one documented deployment constraint tested (e.g., Source B unavailable) | INT-09 never tested the condition under which it will actually deploy |
| G8: Longitudinal batch | At least one 10-input sequential batch run on a single domain to test quality decay | INT-09 ran single inputs — no quality decay or repetition detection |

All gates must be recorded as MET/FAIL in the pre-registration document. A FAIL on any gate blocks Stage 1 from starting. The gate check is auditable — another agent reading only the pre-registration document should be able to verify each gate independently.

---

**Pre-registration document contents (write before Stage 1):**

**1. Kit identity**
- Kit name and version
- Primary claimed capability in one sentence
- Which grounding-map.md row or synthesis document the primary claim rests on (or "UNRESEARCHED — heuristic only")
- Trial type: NEW / RE-TRIAL after fix / REGRESSION after kit update

**2. Three locked learning questions**
These questions drive the trial design. The Stage 4 verdict must explicitly answer all three.
1. **Primary hypothesis:** "This trial tests whether [kit name] enables an agent to [specific claim from kit's behavioral contract]."
2. **Ship signal:** "What outcome would tell us the kit should proceed to Phase 8?" (specific and observable)
3. **Kit-maker signal:** "What outcome would tell us the kit-maker's own process has a problem at Phase [N]?" (specific — not "the kit didn't work")

**3. Failure mode pre-registration**
Before running: enumerate expected failure modes based on kit design. Format:

| Failure mode | Based on | Condition that tests it | Tier | Observability |
|--------------|----------|-------------------------|------|---------------|
| [what the kit might fail at] | [specific kit design choice or known gap] | [which condition/input type exercises this] | [1/2/3] | [which output artifact or scoring dimension will show this fired — "not observable from dimensional scores" is a design gap requiring a dedicated scoring dimension] |

Minimum: 5 failure modes pre-registered. If fewer than 5 can be named: the trial designer does not yet understand the kit well enough to run a meaningful trial — read all kit files again before proceeding.

**Observability requirement [STAGE6-2, 2026-07-06: INT-10 returned INSUFFICIENT_EVIDENCE on 5 of 10 pre-registered FMs because no scoring dimension was tied to their observation; FM6 was confirmed as a structural design gap but was "observationally invisible" — this wastes trial capacity and leaves real gaps unresolved]:** For any FM where the Observability column reads "not observable from dimensional scores": add a dedicated binary or scored dimension to Stage 1.2 before locking the dimension list. A binary "present/absent" dimension is sufficient for soft-gate and structural compliance FMs. An FM pre-registration without an observability mechanism produces only INSUFFICIENT_EVIDENCE results.

After the trial, compare: which pre-registered failure modes were triggered? Which were not? Untested failure modes become mandatory test targets for the next trial.

**4. Realism assessment**
Write two paragraphs before running:
- "What real-world usage this trial approximates:" (what it captures)
- "What real-world usage this trial does NOT cover:" (what it cannot capture given time/scale constraints)

The realism gap list becomes the required targets list for the next trial. If you cannot write a real realism gap list — the trial is not well-scoped.

**5. Scale gate checklist (G1–G8)**
Each gate: status (MET / FAIL), evidence (specific — not just "yes").

---

## Stage 1 — Trial design (before running anything)

**Precondition:** Stage 1 requires the kit to be at Phase 6 completion — all kit files built and present. Stage 1.2 (dimension selection) requires reading all kit procedure files to map claims to dimensions.

### 1.1 Test input selection — volume and type

**Minimum volume:** 20 test inputs total. Breakdown:
- 5+ Hard inputs (adversarial design — see 1.1b)
- 8+ Standard inputs (representative of normal use — see below)
- 5+ Edge inputs (unusual but valid — see below)
- 2+ Longitudinal batch inputs (same domain, sequential — see 1.1c)

**Input Type: Standard (8+ required)**
Realistic, well-formed, representative of normal use. Matches the scale from Phase 2 domain brief. Must be fresh to the test agent (no prior exposure). Spread across ≥5 distinct domain types (per 1.1a).

**Input Type: Hard (5+ required)**
Same domain, designed to make Condition A (no kit) fail on at least 2 Tier 1 dimensions. Ask: "what does this kit specifically claim to do that freeform doesn't?" Design the Hard input to trigger exactly that. Hard inputs must be pre-validated via Stage 2 Step 0.

*Rejection criterion for Hard inputs:* If Condition A passes ≥60% of Tier 1 dimensions at baseline, the input is too easy. Redesign before committing.

**Input Type: Edge (5+ required)**
Unusual but valid. Categories required:
- Meta-domain: the kit's subject matter IS the domain (e.g., for angle-gen-kit: angles about research methodology itself)
- Sparse-literature domain: thin academic literature, active practitioner community
- Post-cutoff topic: domain where most literature is recent/post-training-cutoff
- Conflicting-instructions case: user-provided guidance that partially contradicts the kit's procedure
- Saturation-sensitive case: domain where naive agents declare saturation prematurely

**Input Type: Longitudinal batch (2+ sequences of 10)**
10 inputs from the same domain, run sequentially in a single agent session. Purpose: detect quality decay, repetition, and assumption drift across extended use. This is the only input type run in a non-isolated session — sequential context is the whole point.

### 1.1a Domain stratification

Minimum 5 domain types represented across all 20+ inputs. Domain types:
- Empirically active (active research with recent high-volume literature)
- Established (mature field, well-mapped, lower novelty)
- Interdisciplinary (spans 2+ traditional fields with vocabulary collision)
- Applied/practitioner (strong practitioner community, weaker academic literature)
- Meta/self-referential (the kit's subject matter is the domain — required, exactly 1)

Record the domain type for each test input in the pre-registration document. Verify ≥5 types present before Stage 1 is complete.

### 1.1b Adversarial input design (required for Hard inputs)

Each Hard input must pass this adversarial design check before use:

1. **Vocabulary trap:** Does the input use surface vocabulary that would lead a naive agent into 1–2 clusters while the full territory spans 4–5? (If not: add vocabulary framing to the input)
2. **Mechanism trigger:** Does the input contain a condition that specifically exercises the kit's primary claimed mechanism? If that mechanism does NOT fire on this input: the input cannot validate the mechanism claim.
3. **Baseline failure prediction:** Predict which specific Tier 1 dimensions Condition A will fail on, and record the predicted Condition A score (0–3) for each Tier 1 dimension explicitly. If you cannot predict any failure: the input is not adversarial enough. **This prediction is compared against actual A scores in Stage 3 — any dimension where actual A score exceeds the pre-registered prediction by ≥2 is a Key Unexpected Finding requiring a domain-ceiling or mechanism-scope investigation (see Stage 4 handoff template). [STAGE6-3, 2026-07-06: INT-10 pre-registration predicted Q1=1 for Hard vocabulary-trap inputs but A scored Q1=3 uniformly — this reversal was the trial's central finding; without a recorded prediction there was no structured mechanism to detect the reversal]**
4. **Kit-design probe:** Does this input probe a specific design choice the kit made (e.g., vocabulary-frame enumeration, degraded mode, meta-domain handling)?

Record adversarial design justification for each Hard input in the pre-registration document.

### 1.1c Longitudinal simulation design

Before running: define quality decay criteria. Format:

| Measure | Expected stable range | Decay threshold (triggers flag) |
|---------|----------------------|----------------------------------|
| Coverage variance across inputs (std dev of Q1 scores) | [expected range] | > [threshold] signals decay or inconsistency |
| Repetition rate (% of angles/findings appearing in multiple outputs) | < [expected %] | > [threshold] signals repertoire exhaustion |
| Vocabulary diversity (distinct vocabulary clusters per input) | [expected range] | Declining trend over 10 inputs signals narrowing |

The longitudinal run is scored against these measures, not the standard 0–3 dimensional rubric.

### 1.2 Dimension selection and pre-registration

The full dimension list is in `trial-audit-dimensions.md` (38 dimensions across 6 categories). Do NOT attempt all 38.

**Step 1 — Kit claim mapping (required before selecting dimensions):**

List every specific claim the kit makes in its behavioral contract and procedures. For each claim, identify which dimension it maps to.

| Kit claim | Dimension | Tier |
|-----------|-----------|------|
| [what the kit claims to do] | [Q1–Q8, A1–A9, etc.] | [1/2/3] |

Only dimensions in this table are eligible for selection.

**Step 2 — Assign tiers:**
- **Tier 1 (must test, verdict-blocking):** Directly tied to the kit's primary claimed capability. A FAIL here means the kit's core claim is false. Select 3–5. (Prior minimum was 2–4 — raised to 3–5 because small Tier 1 sets produced easy-to-pass verdicts)
- **Tier 2 (should test, signal-contributing):** Secondary claims, autonomy dimensions, scale handling. Select 3–5.
- **Tier 3 (if budget allows):** Meta-cognition, edge case robustness.

**Mandatory minimum (every trial):**
- At least 3 Tier 1 dimensions from Category 2 (Output quality) — prior minimum was 2
- At least 2 Tier 2 dimensions from Category 1 (Autonomy) — unchanged
- At least 1 from Category 5 (Degraded conditions) — new requirement; prior trials had no degraded condition coverage
- At least 1 from Category 6 (Kit-maker signal)
- At least 1 that tests the longitudinal simulation results (e.g., A8 Long-context reliability or equivalent quality-decay dimension)

**Step 3 — Pre-register criteria (locked before execution):**

For each dimension, write specific observable criteria before seeing any output.

| Dimension | Tier | What PASS (score ≥2) looks like | What FAIL (score ≤1) looks like |
|-----------|------|--------------------------------|--------------------------------|
| [dim name] | [1/2/3] | [specific, observable — must include a number or a specific artifact] | [specific, observable] |

Criteria locked after this point. No adjustments after any output is seen.

**Pre-registered criteria quality check (required before locking):**
Every criterion must pass this check: "Does this criterion contain a specific threshold (a number, a named artifact, or a countable property), or does it use only comparative adjectives (good, broad, diverse, comprehensive) that evaluators would interpret differently?"
- Contains specific threshold → acceptable criterion
- Contains only comparative adjectives → rewrite required; do not lock

**Blind evaluation instruction:** Score the output artifact FIRST (the deliverable). Then read the agent's chain-of-thought. Reading narrative before scoring anchors the score to the agent's reasoning rather than observable output.

### 1.3 Condition design (multi-condition)

**Condition A — True baseline (required, no kit)**

Specification:
- Model tier: matches the kit's declared minimum tier from Phase 2
- Prompt format: one-paragraph task description, no structure hints, no step-by-step outline, no domain frameworks
- Context provided: test input only. No kit files. No research archive. No examples.

**True baseline verification (new — required for Gate G4):**
After writing the Condition A prompt, dispatch a secondary agent with this exact task: "Read the following agent prompt and confirm: (a) does it contain any kit files or references to kit files? (b) does it contain any structured procedure steps that would scaffold the agent's output? (c) does it contain any prior examples of the output format? Report YES/NO for each." A single YES requires rewriting the prompt.

**Why strong baseline (not weak):** Strong baseline = well-prompted experienced practitioner, same model. Weak baseline = minimal one-line prompt. Always use strong baseline. Weak baseline makes the kit look better than it is.

**Condition B — Full kit**
- All kit files (CLAUDE.md behavioral contract + all procedure files + all reference files)
- Same one-paragraph task description as Condition A
- No main-agent session history, no prior examples

**Condition C — Degraded deployment (new, required)**
Specification:
- All kit files
- Same task description
- Documented deployment constraint applied (e.g., web search unavailable, research archive absent, shortened context window)
- The constraint must be a documented real deployment condition, not a synthetic stress test

Every kit must have at least one known deployment constraint identified before the trial runs. If no deployment constraints are known: this is itself a trial finding (kit has not been analyzed for deployment constraints — failure at Phase 6). Document in Stage 0 and proceed with the most realistic constraint you can identify.

**Condition D — Stress (optional, high-value)**
Same as Condition B but with: conflicting user guidance that partially contradicts the kit's procedure. Tests whether the kit's behavioral contract enforces procedure over user override. Not required for minimum trial, but strongly recommended if the kit has a behavioral contract with rules the user might override.

**Expected score documentation (required for all conditions):**
For each pre-registered dimension, document expected Condition A, B, and C scores before running. If Condition A is expected to score ≥2 on all Tier 1 dimensions: the trial input is too easy, or the kit's primary claim doesn't require a kit. If Condition B and Condition C expected scores are identical: the deployment constraint may not be testing a real degradation.

### 1.4 Isolation envelope

Specify exactly what each condition receives and what is withheld. Write as an explicit list.

| Item | Condition A | Condition B | Condition C |
|------|------------|------------|------------|
| Test input | ✓ | ✓ | ✓ |
| One-paragraph task description | ✓ | ✓ | ✓ |
| Kit CLAUDE.md | ✗ | ✓ | ✓ |
| Kit procedure files | ✗ | ✓ | ✓ |
| [documented constraint] | N/A | N/A | Applied |
| Pre-registered criteria | ✗ | ✗ | ✗ |
| Prior examples for this domain | ✗ | ✗ | ✗ |

**Per-kit isolation decision (record here):** What domain-specific outputs are withheld from all conditions?

### 1.5 Evaluator protocol pre-registration

Hard inputs require 3 independent blind evaluators. Standard inputs require 1.

Evaluator protocol:
- Each evaluator receives: Condition B output artifact (the deliverable only) + pre-registered scoring criteria (verbatim from Stage 1.2)
- Evaluators do NOT receive: agent chain-of-thought, other evaluators' scores, trial context
- Evaluation order: output artifact scored before chain-of-thought read
- Inter-rater reliability check (Hard inputs only): after all 3 evaluators score independently, compute pairwise score differences on each Tier 1 dimension. If any Tier 1 dimension has a pairwise difference ≥2: dispatch a 4th evaluator. Final score = median of all evaluators. If median is ambiguous (scores spread equally): report as contested and note in verdict.

### 1.6 Checkpoint write requirements

All file writes must happen per-phase. Not deferred to terminal agent.

Checkpoint location: `kit-name/trials/trial-NN/` where NN is trial number. Each run: `run-NN/`. Each condition: `condition-A/`, `condition-B/`, `condition-C/`.

Trial archive minimum contents:
1. Stage 0 pre-registration document (all gates, learning questions, failure modes, realism assessment)
2. Stage 1 dimension table with locked criteria
3. All test inputs (verbatim)
4. Isolation envelope per condition
5. All condition outputs (raw, per-run)
6. Scored dimension table (per run, per evaluator)
7. Autonomy event log per run
8. Longitudinal simulation results
9. Verdict with rationale answering all three Stage 0 questions
10. Stage 6 post-trial process retrospective document

---

## Stage 2 — Execution

### Step 0 — Pre-trial validity check

Run a calibration pass on the Hard input before committing to full trial design.

**Validity check protocol:**
1. Run Condition A (no kit, strong baseline) on the Hard input
2. Score against pre-registered Tier 1 dimensions
3. Apply calibration table:

| Condition A performance | Interpretation | Action |
|------------------------|---------------|--------|
| Scores 0 on all Tier 1 | Input too hard or task description too sparse | Adjust |
| Scores 1–2 on 1–2 Tier 1 | **Target range** — expect meaningful delta | Proceed |
| Scores 2 on ≥3 of 4 Tier 1 | Marginal — kit must show consistent improvement | Proceed but flag |
| Scores 3 on ≥50% of Tier 1 | **Possible ceiling effect or too-easy inputs** — compare against pre-registered Condition A prediction for each dimension. If A scored ABOVE the pre-registered prediction: this is a DOMAIN-CEILING finding (frontier model saturates this dimension on this domain; mechanism may not distinguish here). Log as Key Unexpected Finding and carry forward — do NOT redesign inputs, the finding is the trial's signal. If A scored AT OR BELOW the pre-registered prediction: inputs may be too easy — redesign. [STAGE6-1, 2026-07-06: INT-10 found A scored 3/3 on q1 across all 7 Hard vocabulary-trap inputs vs. pre-registered prediction of Q1=1; existing rule would have triggered "redesign" when the correct interpretation was FM4+domain-ceiling, the trial's most important finding] | Compare to pre-registered A prediction before deciding: domain-ceiling ≠ too-easy |

**Validity check requires N=1 (acceptable for go/no-go).** Not for scoring — just for whether to proceed.

**Mechanism validity check:** For the kit's primary claimed mechanism, describe what output it should produce in the best case. Is there a version of this Hard input where the mechanism would clearly fire? If "not really" — redesign the input.

**Hardening options if too easy:**
- Reduce domain description richness (less obvious framing)
- Add vocabulary collision (multiple traditions using different terms for same concept)
- Introduce conflicting framing (open questions that suggest a narrow angle)
- Remove structural hints from the task description

### Step 1 — Run conditions in parallel

**All conditions run as worktree subagents. Not in the main session. Not sequentially (except longitudinal batches).**

Dispatch: all conditions sent in the same workflow message. Parallel dispatch prevents implicit context drift.

Condition A, B, and C each run in their own worktree with isolated file writes. The trial orchestrator observes all runs but does not intervene.

**Longitudinal batch execution (exception to parallel rule):**
The 10-input sequential batch for each longitudinal domain runs in a SINGLE condition B session (not worktree isolation). Sequential context is required to test context effects. Log the session ID. This run uses only standard per-phase checkpoints — session state cannot be isolated.

### Step 2 — Checkpoint writes

Each condition writes per-phase checkpoints. Orchestrating agent verifies checkpoint existence before advancing to the next phase. A missing checkpoint = phase incomplete.

### Step 3 — Minimum N per input type

| Input type | Condition A | Condition B | Condition C |
|------------|------------|------------|------------|
| Hard | N=1 | N=3 | N=2 |
| Standard | N=1 | N=2 | N=1 |
| Edge | N=1 | N=2 | N=1 (if deployment-constrained) |
| Longitudinal batch | N=1 (sequential in single session) | N=1 | N=1 |

**Aggregation rule (do not average):**
- Score each run independently
- Report minimum and maximum per dimension
- Tier 1 divergence ≥2 across runs: run N+1 before issuing verdict on that dimension
- High variance on a Tier 1 dimension is itself a finding: the kit is non-deterministic in a way that matters

### Step 4 — Autonomy event logging

Log every intervention event during each condition's run in real time. Do NOT reconstruct post-hoc.

**Event type taxonomy:**
- **STOP:** Agent paused, asked a question, or waited where it should have continued
- **CORRECT:** Wrong output corrected (distinguish: agent self-corrected vs. observer-corrected)
- **REDIRECT:** Observer had to re-aim agent toward original goal
- **CLARIFY:** Agent asked a question answerable from the input
- **MISS:** Error or gap in output not caught by the agent
- **DRIFT:** Output moved away from original goal across the session

**Log format per event:**
`[Turn N] [EVENT_TYPE] [what happened] [appropriate or inappropriate — justify]`

**Appropriate vs. inappropriate:** A stop is appropriate if the kit structurally requires it and a user who doesn't know the domain could still continue from there. A stop is inappropriate if a domain-naive user would be blocked.

**Target counts for GREEN trial:**
- STOP: 0 inappropriate per run
- CORRECT (observer-caught): ≤1 per run
- REDIRECT: 0
- CLARIFY: 0
- DRIFT: 0

### Step 5 — Cross-condition documentation

After all runs complete, before Stage 3, write a cross-condition summary:

| Dimension | Condition A (min) | Condition B (min) | Condition C (min) | B−A | B−C |
|-----------|------------------|--------------------|-------------------|-----|-----|
| [dim] | [score] | [score] | [score] | [delta] | [degraded gap] |

This table is the primary input to Stage 3 Step 2 (differential signal check) and Stage 4 (verdict).

---

## Stage 3 — Evaluation

### Step 1 — Blind scoring

For Hard inputs: dispatch 3 evaluators as isolated subagents, each with:
- Condition B output artifact (deliverable only, no chain-of-thought)
- Pre-registered scoring criteria (verbatim)
- No evaluator context (no trial background, no other scores, no chain-of-thought access)

For Standard inputs: 1 evaluator.

Each evaluator must: (a) score each dimension on the 0–3 scale, (b) cite specific observable evidence from the output for each score (not interpretive narrative), (c) note what's missing for each non-3 score.

**Score aggregation:**
1. Collect all evaluator scores
2. Check inter-rater reliability: for Hard inputs, pairwise differences on each Tier 1 dimension
3. If any Tier 1 pairwise difference ≥2: dispatch 4th evaluator, final score = median of 4
4. Report: minimum score, maximum score, median, and evaluator count for each dimension
5. If median and minimum diverge by ≥1 on a Tier 1 dimension: this is a contested score — report both and note in verdict

**Do not report a single "the score" for any dimension.** Always report the range. Collapsing to a single score hides signal.

### Step 2 — Differential signal check

Using the cross-condition table from Stage 2 Step 5:

| Dimension | Tier | B−A | B−C | Interpretation |
|-----------|------|-----|-----|---------------|
| [dim] | 1 | [delta] | [delta] | [signal / no-signal / INVALID] |

**Differential signal interpretation:**
- **Positive B−A on ≥3 Tier 1 dimensions:** Kit produces measurable value over baseline
- **Zero B−A across ALL Tier 1 dimensions:** INVALID-signal — kit indistinguishable from baseline (does not necessarily mean RED, but trial cannot issue kit verdict; must investigate why)
- **Negative B−A on any Tier 1 dimension:** Kit degrades output vs. baseline on that dimension — Severity 1 finding
- **B−C gap ≤0.5 on all Tier 1 dimensions:** Degraded mode has negligible cost — document as acceptable
- **B−C gap ≥2 on any Tier 1 dimension:** Degraded mode is a significant quality loss — document as failure condition

**Primary verdict criterion is differential, not absolute.** A kit that scores 3 on all Tier 1 dimensions but shows zero delta over baseline is not a useful kit — a competent agent achieves the same result without it. Do not issue GREEN based on absolute score alone.

### Step 3 — Longitudinal simulation scoring

Using the longitudinal batch results:

| Measure | Inputs 1–5 | Inputs 6–10 | Trend | Threshold crossed? |
|---------|-----------|------------|-------|-------------------|
| Q1 Coverage variance | [range] | [range] | [stable/declining] | [Y/N] |
| Repetition rate (%) | [%] | [%] | [stable/increasing] | [Y/N] |
| Vocabulary diversity | [count] | [count] | [stable/narrowing] | [Y/N] |

**Findings:**
- If any threshold crossed: log as longitudinal failure — note the input number where degradation started
- If no threshold crossed: log as longitudinal PASS with evidence

### Step 4 — Autonomy dimension scoring

Reference the autonomy event log from Stage 2 Step 4. (Unchanged from prior version — see scoring guidance for A1, A2, A4, A6.)

### Step 5 — Canary check

The canary must satisfy one of:
- **(a)** It exercises ≥2 documented failure modes from `pitfall_register.md` or `weakness_register.md`
- **(b)** It contains deliberate observable flaws aligned with the kit's Phase 2 quality criteria
- **(c)** It is a real input from a prior run that produced ≥1 auditor RED finding

Canary checked on Condition B only. Condition A expected to miss — that is the baseline.

### Step 6 — Failure classification

For each failure (score ≤1 on any Tier 1 dimension):

| Failure | Source | Route | Severity |
|---------|--------|-------|----------|
| Kit did not cover a quality dimension | Kit content gap | Fix specific procedure file | 2 |
| Kit covered it but agent didn't follow | Kit process gap — behavioral contract weak | Fix behavioral contract enforcement | 2 |
| Kit procedure itself is wrong | Kit design gap — Phase 4 synthesis missed | Fix procedure + kit-maker mistakes.md | 1 |
| Phase 3/4/5/6 produced the gap | Kit-maker process problem | mistakes.md + plan.md task | 1 |
| Trial design didn't cover condition | Trial design gap | Stage 6 + redesign for next trial | — |

**Minimum root cause depth:** "Kit did not cover dimension Q1" is not a root cause. Root cause names the specific missing mechanism and why it was missing.

**Action item closure requirement:** Every failure generates a specific proposed fix with done-criteria OR a plan.md task. A failure with no action item is not a finding — it will be forgotten.

---

## Stage 4 — Verdict and handoff

### Verdict formula (multi-condition, differential-primary)

**GREEN:**
- Differential: B−A positive on ≥3 Tier 1 dimensions (across the Hard input population)
- Absolute floor: every Tier 1 dimension median score ≥2 on Hard inputs
- Tier 2 average ≥2 across Hard inputs
- Longitudinal simulation: no decay threshold crossed
- Degraded gap: B−C ≤1.5 on all Tier 1 dimensions (degraded mode is acceptable floor, not cliff)
→ Proceed to Phase 8.

**YELLOW:**
- Differential: B−A positive on ≥2 Tier 1 dimensions
- OR absolute floor: every Tier 1 dimension median ≥1
- AND longitudinal simulation: ≤1 threshold crossed (minor decay)
→ Proceed to Phase 8 with named caveats. Surface all YELLOW gaps in weakness_register.md. Do not present as production-ready.

**RED:**
- Any Tier 1 dimension median score = 0 on any input type
- OR B−A negative on any Tier 1 dimension (kit degrades output)
- OR differential signal absent on all Tier 1 dimensions (kit cannot demonstrate value over baseline)
→ Do not proceed. Fix and re-run. Log as mistakes.md entry.

**INVALID (no kit verdict):**
- INVALID-design: Condition A score ≥2 on ≥50% of Tier 1 dimensions across Hard inputs (inputs too easy)
- INVALID-baseline: Condition A contaminated with kit files (Gate G4 check failed)
- INVALID-execution: N<minimum, sequential conditions, missing checkpoints
- INVALID-signal: delta=0 across ALL Tier 1 dimensions
- INVALID-scale: fewer than 20 inputs OR fewer than 5 domains (Gate G1/G2 failed)
- INVALID-scope: trial ran outside the kit's Phase 2 scope

**Degraded mode profile (required alongside verdict):**
Report B−C gaps for all Tier 1 dimensions. This is not a pass/fail — it is a characterization. Even a GREEN kit has a degraded mode floor. Users need to know what it is.

### Handoff output structure

```
TRIAL VERDICT: [GREEN / YELLOW / RED / INVALID-subtype]
Kit: [kit name]
Trial N: [total run count across all conditions]
Domain count: [how many distinct domains]
Input count: [total inputs by type: Hard N / Standard N / Edge N / Longitudinal sequences N]
Evaluator count: [per Hard input]
Model tier: [both conditions]
Date: [date]

STAGE 0 ANSWERS:
1. Primary hypothesis → [SUPPORTED / UNSUPPORTED / INCONCLUSIVE]
2. Ship signal → [MET / NOT MET / INCONCLUSIVE]
3. Kit-maker signal → [TRIGGERED / NOT TRIGGERED / INCONCLUSIVE]

KEY UNEXPECTED FINDINGS [STAGE6-4, 2026-07-06: INT-10 Stage 4 Section 5 was the pivot point of the entire verdict — Condition A saturated q1 at 3/3 across all 7 Hard inputs vs. pre-registered prediction of Q1=1, reversing the trial's central prior and producing the FM4 finding; this section was added ad hoc; future trials must require it structurally]:
Required if any of the following apply (write "None — all scores within pre-registered predictions" only if none apply):
- Any Condition A score exceeded its pre-registered Hard input prediction on a mechanism-linked Tier 1 dimension → indicates DOMAIN-CEILING or MECHANISM-SCOPE finding
- Any pre-registered FM returned INSUFFICIENT_EVIDENCE due to observability gaps → indicates scoring rubric design gap requiring a dedicated dimension in the next trial
- Any score direction reversed from pre-registered prediction on a Tier 1 mechanism dimension
[For each: state what was predicted, what was observed, and the two competing interpretations]

DIFFERENTIAL SCORECARD (Hard inputs):
[Table: Dimension | Tier | A (median) | B (median) | C (median) | B−A | B−C | Verdict]

LONGITUDINAL SIMULATION RESULTS:
[Measures by input batch, trend, thresholds crossed]

DEGRADED MODE PROFILE:
[B−C gaps per Tier 1 dimension with interpretation]

FAILURE MODES TRIGGERED (pre-registered):
[Which pre-registered failure modes were triggered, which were not]

TOP 3 FAILURES (Tier 1 focus):
[Classification / Severity / Action item]

TOP 3 KIT-MAKER LEARNINGS:
[What this reveals about the kit-maker's process]

TRIAL ARCHIVE: [path]
```

---

## Stage 5 — Post-trial integration

**Executor:** Main agent (not trial subagent). Stage 4 output returns to main context; Stage 5 executes there.

Routing by severity: Severity 1 (kit-maker process) → skip to 5.2. Severity 2 (kit-specific) → start at 5.1. Both proceed through 5.3–5.5.

### 5.1 Kit-content failures → targeted kit fix

For each Severity 2 failure: identify the procedure file that failed, write a targeted fix with done-criteria, apply in this session or create plan.md task.

### 5.2 Kit-maker failures → mistakes.md and plan.md

For each Severity 1 failure: full mistakes.md entry + 5-question investigation (TASK_TEMPLATE.md Section 5.3) + every action item becomes either executed with evidence or a plan.md task.

**Evidence-scope-vs-design-inference check [STAGE6-5, 2026-07-06: INT-10 primary kit-maker gap was Phase 4 synthesis adopting CCQGen evidence (within-tradition facet coverage) as grounding for a cross-tradition design inference without flagging the scope mismatch; Weakness 7 named this concern at design time but it was not resolved; the trial found q1 B–A=0 across all 22 inputs; Stage 5 concludes "the kit-maker process gap is Phase 4 synthesis: failing to catch the scope mismatch between within-tradition facet evidence and cross-tradition design inference"] — required for any Severity 1 failure traced to Phase 4 synthesis:** After the 5-question investigation, explicitly answer: "Was the evidence scope (what the source study measured) narrower than the design claim (what the mechanism was built to do)?" If yes: (a) update the grounding-map.md entry for the affected synthesis row to annotate the scope mismatch explicitly, (b) update the weakness_register.md entry status from HEURISTIC to EMPIRICALLY_TESTED with the trial evidence and result, (c) add a RESEARCH_ANGLES.md angle targeted at the narrower scope gap, (d) revise the kit's claim documentation to match only the demonstrated scope — do not claim capabilities the evidence does not support.

### 5.3 Research gaps → RESEARCH_ANGLES.md

Genuine research gaps (evidence not available when the procedure was written) → RESEARCH_ANGLES.md angle. Build-translation gaps (evidence existed but wasn't encoded) → 5-question investigation under Q5.

### 5.4 Learnings → trial-audit-dimensions.md carry-forward

For each dimension used: add a note recording which kit tested it, whether it was diagnostic, and recommended tier for future trials.

### 5.5 Re-trial protocol

If verdict was RED or INVALID: apply all action items first, re-run Stage 0 from scratch, re-run Stage 2 Step 0 validity check on redesigned inputs.

---

## Stage 6 — Post-trial process retrospective (mandatory, blocks trial closure)

**This stage is not optional.** A trial that does not improve the trial process has wasted half its value. Stage 6 is complete when its output document is written and kit-trial-process.md is updated. The trial cannot be archived as COMPLETE without Stage 6.

**Executor:** Main agent, immediately after Stage 5. Stage 6 runs in the same session as Stage 5.

### 6.1 Realism gap audit

Answer these questions in writing:

1. **What did this trial simulate well?** (What aspects of real usage were adequately represented)
2. **What did this trial miss?** (What aspects of real usage were absent — be specific)
3. **What failure modes were pre-registered but not triggered?** (List each; these are required tests for the next trial)
4. **What failure modes appeared that were NOT pre-registered?** (List each; these update the pre-registration template)
5. **What deployment conditions were not tested?** (List each)
6. **What was the most unrealistic aspect of this trial?** (Name it directly)

Write at minimum one paragraph per question. "None" is not an acceptable answer for questions 2, 3, 5, or 6.

### 6.2 Scale adequacy check

1. Was the input count sufficient to detect the failure modes that appeared? (If a failure only appeared on input N=18, a smaller trial would have missed it — note this)
2. Was the domain diversity sufficient? Did any domain type produce systematically different results?
3. Was N-per-input-type sufficient? Did any dimension show high variance that N=3 didn't resolve?
4. Would a larger trial have changed the verdict? If yes: what is the minimum scale required for a reliable verdict on this kit?

### 6.3 Condition coverage audit

For each known deployment condition of this kit (not just the ones tested):

| Condition | Tested? | Result if tested | Required in next trial? |
|-----------|---------|-----------------|------------------------|
| [every known deployment condition] | Y/N | [result] | Y/N + reason |

Conditions not tested in this trial that are required in the next trial: write them into Section 0's gate list for the next trial NOW (not at next trial's start — now, while the context is fresh).

**Structural design gap carry-forward [STAGE6-6, 2026-07-06: INT-10 Stage 5 identified FM6 (coverage map soft gate) and Gap 5 (cross-disciplinary slot heuristic) as confirmed structural gaps requiring pre-trial fixes AND new scoring dimensions; the current 6.3 template only covers deployment conditions, leaving structural gaps undocumented at the point where they would be written into the next trial]:** In addition to deployment conditions, list every confirmed structural design gap from Stage 5 FM analysis and Gap confirmations. For each structural gap: (a) state the required pre-trial fix if a fix must happen BEFORE the next trial runs (this blocks the next trial's Stage 0 launch until the fix is applied), (b) add the corresponding scoring dimension to the next trial's pre-registration document now, (c) add the required test inputs to Stage 1.1 of the next trial's pre-registration now. A structural gap without a pre-trial fix requirement and a next-trial scoring dimension is an incomplete Stage 6.

### 6.4 Evaluator quality check

1. What was the inter-rater reliability (pairwise differences on Tier 1 dimensions)?
2. Were any dimensions scored inconsistently across evaluators? If yes: was the pre-registered criterion clear enough?
3. Rewrite any criterion that produced inter-rater divergence ≥2 before the next trial.

### 6.5 Minimum 5 trial process improvement items

Write at least 5 specific, concrete improvements to the trial process, derived directly from this trial's execution. Format:

| Item | Gap it fills | Proposed change to kit-trial-process.md |
|------|-------------|----------------------------------------|
| [improvement] | [what this trial showed was missing] | [specific section and wording to change] |

Improvements must be concrete (naming the specific section to change) — not aspirational ("run better trials"). An item that does not name a specific change to make is not an item.

### 6.6 Apply improvements to kit-trial-process.md

For each Stage 6.5 item: apply the proposed change to kit-trial-process.md IN THIS SESSION. Do not defer to next trial. The trial process must be better before the next trial runs, not after it runs.

Apply using the Edit tool. Commit a brief rationale next to each edit: `[STAGE6-N, date: reason]` inline in the document at the point of change.

### 6.7 Version log

Add a version entry at the bottom of kit-trial-process.md:

```
## Version history
[date] — Trial [kit name] trial-NN — Stage 6 changes: [brief list of what changed]
```

---

## Anti-patterns (documented failure modes)

**Scale anti-patterns:**
- **Trial at minimum viable scale** (INT-09, 2026-07-05): 20 inputs minimum enforced by Gate G1. A trial completed in ~1 hour cannot represent kit quality across months of use.
- **Single-domain trial** (INT-09): domain-specific idiosyncrasies become kit verdicts. Gate G2 requires ≥5 domain types.
- **No degraded mode condition** (INT-09): Source B unavailable in real deployment. Gate G7 requires at least one documented deployment constraint tested.

**Baseline anti-patterns:**
- **Condition A uses the kit** (INT-09): delta=0, trial produces INVALID-signal. Gate G4 requires secondary agent verification that Condition A has zero kit file access.
- **Weak baseline (not strong)**: makes the kit look better than it is. Condition A must be a well-prompted experienced practitioner.

**Verdict anti-patterns:**
- **Absolute-only verdict** (INT-09): scoring ≥2.5 on absolute scale without differential signal does not prove kit value. Differential is the primary criterion.
- **INVALID-signal treated as RED or GREEN** (M-17): declare INVALID with specific subtype, redesign before re-running.
- **Averaging N>1 scores**: hides variance. Report minimum, maximum, median. High variance is a finding.

**Evaluation anti-patterns:**
- **Single evaluator on Hard inputs**: no inter-rater reliability check possible. ≥3 evaluators required.
- **Scoring criteria with only comparative adjectives**: not observable. Every criterion must have a specific threshold.
- **Scoring chain-of-thought before output artifact**: anchors score to agent reasoning, not observable output.

**Process anti-patterns:**
- **No Stage 6**: trial learning is lost. Stage 6 mandatory.
- **N=1 verdict** (M-17): cannot distinguish signal from variance.
- **Sequential conditions in same session** (M-17): cross-contamination. Parallel worktree dispatch required.
- **All file writes at terminal agent** (M-15, M-17): session limit kills output. Per-phase checkpoint writes required.
- **Post-hoc autonomy log reconstruction**: produces rationalized narrative, not event data. Log during execution.
- **Stage 6 deferred to next session**: process improvement always happens in the session immediately after the trial — context is too cold to write a useful Stage 6 a session later.

---

## Appendix A — Worked example: Stage 0 for angle generation kit trial re-run

*The original INT-09 trial (2026-07-05) would have been INVALID under this procedure due to Gate G1 (20 input minimum), Gate G3 (Condition A used the kit), and Gate G4 (no baseline verification). This example shows what the pre-registration should have been.*

**Stage 0 gates (what INT-09 would have needed to demonstrate):**

| Gate | INT-09 status | Required |
|------|--------------|---------|
| G1: ≥20 inputs | FAIL — 3 inputs | 20 inputs minimum |
| G2: ≥5 domain types | FAIL — 1–2 domains | 5 domain types (empirically active, established, interdisciplinary, applied/practitioner, meta/self-referential) |
| G3: ≥3 conditions | FAIL — only Condition A and B, A used kit | Condition A (true baseline), B (full kit), C (Source B unavailable) |
| G4: Baseline verified | FAIL — no secondary verification | Secondary agent confirms Condition A prompt has zero kit file access |
| G5: ≥3 evaluators Hard | FAIL — 1 evaluator | 3 blind evaluators per Hard input output |
| G6: ≥25% adversarial | FAIL — no adversarial inputs | ≥5 adversarial Hard inputs out of 20 |
| G7: Degraded condition | FAIL — no degraded condition | Condition C: Source B (web search) unavailable |
| G8: Longitudinal batch | FAIL — no longitudinal run | 1 × 10-input sequential batch on single domain |

**Failure modes required for next trial (INT-10) pre-registration:**
- Meta-domain failure: does angle-gen-kit fail when the domain IS research methodology?
- Source B degradation floor: what quality loss occurs when web search is unavailable?
- Vocabulary saturation: does the kit correctly detect when territory is saturated vs. when it prematurely declares saturation?
- Repetition across sessions: after 10 inputs in the same domain, do angles become repetitive?
- Conflicting guidance: if user provides a domain framing that conflicts with the vocabulary-frame enumeration procedure, does the kit enforce its procedure or defer to user?

---

*Written: 2026-07-05. Supersedes prior version (2026-07-05, Task 23). Derived from: M-17 (8 design flaws), M-23 (wrong trial purpose), INT-09 (scale flaw — Condition A used kit, no degraded mode, 3 inputs only), trial-audit-dimensions.md (38 dimensions), ENTRYPOINT.md Phase 7 (canary criteria), user feedback 2026-07-05 ("this experiment took like an hour... not a realistic experiment at all").*

## Version history
2026-07-05 — Initial comprehensive rewrite (Task 23): added Stage 0 pre-registration, Stage 5 post-trial integration, Appendix A worked example, Tier-based verdict formula, blind evaluation protocol, N≥2 requirement, autonomy event log, 3 input types.
2026-07-05 — Stage 6 rewrite (INT-09 re-trial redesign): added 8 hard scale gates, raised minimum inputs to 20, raised minimum domains to 5, added Condition C (degraded), multi-evaluator protocol, longitudinal simulation, differential-primary verdict, Stage 6 (post-trial process retrospective), updated all anti-patterns with INT-09 failure modes.
2026-07-06 — Stage 6 updates (INT-10 angle-gen-kit proper-scale re-trial, verdict GREEN): (1) Stage 2 Step 0 calibration table — added domain-ceiling row to distinguish frontier model ceiling effect from too-easy inputs; (2) Stage 0 FM pre-registration table — added Observability column with requirement to add scoring dimensions for any FM not observable from standard scores; (3) Stage 1.1b adversarial design checklist item 3 — required explicit pre-registered Condition A score predictions to detect score-reversal findings; (4) Stage 4 handoff template — added KEY UNEXPECTED FINDINGS section as required element; (5) Stage 5.2 — added evidence-scope-vs-design-inference check for Severity 1 failures traced to Phase 4 synthesis; (6) Stage 6.3 — extended condition coverage audit to include confirmed structural design gaps with pre-trial fix requirements and next-trial scoring dimensions.
