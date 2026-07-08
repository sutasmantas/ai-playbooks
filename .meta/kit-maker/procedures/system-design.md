# SYSTEM Task Procedure

**Status:** Validated for SYSTEM build type (2026-07-04 — INT-07 + DCQC-01). Narrowed caveat active for KIT and RESEARCH build types — see Cross-cutting requirements section.  
**Written:** 2026-07-04  
**Use when:** Task type is SYSTEM (see selector below).

Each phase is annotated:
- **[U]** Universal — applies to any SYSTEM mechanism
- **[S]** Specific — applies to adversarial-check or judgment-rotation mechanisms; adapt for other types
- **[C]** Calibrate — principle is universal; implementation varies by mechanism type

---

## SYSTEM task selector

Use SYSTEM task type when ALL FOUR of the following apply:

1. The mechanism will be **always-active** or **govern other mechanisms** — it is not one-shot; it fires on a recurring trigger
2. The **failure mode is hard to detect post-hoc** — if the mechanism fails silently, the failure propagates before it surfaces
3. **Getting it wrong means all future work is at risk** — not just this task's output, but the outputs of tasks that depend on it
4. The mechanism **requires calibration before other work can trust it** — "it seems reasonable" is not sufficient evidence it works

If any criterion is absent: use the standard task type (TASK_TEMPLATE Sections 1–7). The SYSTEM procedure is heavier; don't apply it to tasks that don't need it.

---

## Phase overview

```
Phase 1: Architecture/design
Phase 2: Core mechanism build
Phase 3: Calibration against known failures
Phase 4: Boundary protocol design + adversarial verification
Phase 5: Simplification accounting
Phase 6: Live prototype
Phase 7: Integration with structural enforcement
Phase 8: Maintenance design
```

Ordering is mandatory. Do not skip phases or reverse their sequence. The ordering encodes a dependency: calibration verifies the mechanism before deployment; prototype produces field data before full integration; maintenance is designed before deploying, not after noticing drift.

---

## Phase 1: Architecture/design [U]

**What it produces:** A document that defines the full system — what it does, how it triggers, what it reads, what it outputs, and what its failure modes are. This document is the decision-making surface for all subsequent phases.

**Done-criteria (outcome):** A fresh agent reading the architecture document can answer: (a) what exactly does this mechanism do that nothing else does? (b) where does it fit in the existing process? (c) what reads it and what does it read? (d) what are the known risks and their mitigations?

**Required before moving to Phase 2:**
- At least one question the architecture explicitly leaves open (to be resolved by later phases)
- At least one documented failure mode with a stated mitigation
- Boundary with adjacent mechanisms defined: what does THIS mechanism do that A1, TASK_TEMPLATE gates, and CLAUDE.md rules do NOT?

**INT-07 example:** `goal-checker-architecture.md` — three-agent overview, always-on trigger rationale, project-state document format, authority model. The open question (soft challenge threshold between hard block and soft challenge) was passed to Phase 4.

**Common failure mode:** Building the first piece before the architecture is written, then writing the architecture to justify what was already built. Detection: does the architecture open questions (correct) or confirm decisions (suspect)?

---

## Phase 2: Core mechanism build [U]

**What it produces:** The primary artifact — the prompt, rule, procedure, or script that is the mechanism's operating code.

**Done-criteria (outcome):** The mechanism can be invoked by a fresh agent with no context beyond the artifact and the input it reads. It must be self-contained.

**Required before moving to Phase 3:**
- Mechanism built against the architecture, not improvised
- Any deviation from the architecture is logged as a decision, not left implicit
- The mechanism does NOT reference internal reasoning or justification from the builder — it should produce its output from the specified inputs alone

**INT-07 example:** `goal-checker-prompt.md` — full operating instructions including mode determination (full adversarial vs. lightweight), attack battery, rotation enforcement, 4 output formats, and calibration anchors.

**Mechanism-specific notes:**
- [S] For adversarial-check mechanisms: the prompt must prohibit silence ("Looks good" is not valid output) and require enumeration of what was checked
- [C] For pattern-matching mechanisms: the pattern specification is the core artifact; must be precise enough to distinguish true positives from false positives in documented failure cases

---

## Phase 3: Calibration against known failures [U]

**This is the mandatory gate.** A mechanism that cannot be verified against known failures is not ready to deploy. Skipping this phase means trusting an unvalidated mechanism — the equivalent of M-34 and M-36.

**What it produces:** A set of test cases where the expected output is known, run against the mechanism, with results documented. A calibration report.

**Done-criteria (outcome):** Failure cases from `mistakes.md` produce the expected mechanism output. Any failure to produce expected output is a mechanism defect, not a calibration anomaly.

**Minimum calibration requirement:**
- At least 3 test cases sourced from documented failure entries in `mistakes.md`
- For each case: state the expected output before running the test
- For each case: run the mechanism against the input and record the actual output
- Cases must cover distinct failure classes, not variations of the same failure

**Calibration result criteria:**
- **All cases produce expected output:** mechanism is calibrated; proceed to Phase 4
- **Any case produces unexpected output:** mechanism has a defect; identify root cause; revise Phase 2 artifact; re-run calibration from scratch (not just the failed case)

**Baseline cases (should NOT trigger mechanism):**
- At least 1 case where the mechanism SHOULD NOT fire, paired with each failure-case input
- Paired baseline = the failure-case input modified to satisfy the correct-behavior condition
- Purpose: verify the mechanism doesn't fire unconditionally

**Limitation to document:** Whether calibration inputs are from the clear-failure zone (obvious cases), the boundary zone (ambiguous cases), or both. Clear-failure-zone calibration proves non-regression on known bad cases. It does not prove reliability in the field. State which zone your inputs are from.

**INT-07 example:** `goal-checker-calibration.md` — 5 primary cases (M-06, M-17, M-25, M-37, M-38), all producing HARD BLOCK; secondary calibration (false-positive rate); limitation documented (clear-failure zone; boundary zone structurally impossible in this context).

---

## Phase 4: Boundary protocol design + adversarial verification [U]

**What it produces:** A document specifying exact worker actions for every output state the mechanism can produce, including edge cases and recovery paths.

**Done-criteria (outcome):** A fresh agent receiving any output from the mechanism knows exactly what to do next. No state leaves the worker without a clear next action.

**Adversarial verification (required):** A fresh agent reads the boundary protocol and explicitly attempts to find a state that leaves a worker without a clear next action. If found: fix before proceeding. "No state leaves the worker stuck" must be externally verified, not author-certified.

**Required for each state:**
- Trigger condition (what mechanism output produces this state)
- Worker action in order (numbered steps)
- Format of any required output (exact template, not prose description)
- Evidence standard (how you know this state was handled correctly from the transcript alone)
- Recovery path (what to do if the protocol is skipped or incompletely followed)

**INT-07 example:** `blocking-protocol.md` — 5 states (hard block, soft challenge, no critical flaw found, override, calibration feedback) + 4 edge cases; adversarial verification found one gap (State 2 retroactive addressing mechanic undefined); fixed before Phase 5.

**Mechanism-specific notes:**
- [U] The evidence standard is always required — without it, "the protocol ran" cannot be verified
- [C] The number of states varies by mechanism type: a binary (fire / don't fire) mechanism has 2 states; a judgment-rotation mechanism may have 4+

---

## Phase 5: Simplification accounting [U]

**What it produces:** A map of which existing gates become redundant when this mechanism is added, with rationale; and which are kept (with the reason they're not redundant).

**Done-criteria (outcome):** Before wiring this mechanism in, you know what to remove. Adding a mechanism without asking "what does this make redundant?" creates accumulation without coverage gain.

**Required questions:**
1. Which existing gates fire at the same moment as this mechanism?
2. Which existing gates fire BEFORE this mechanism (pre-execution) — and are therefore not replaced by it?
3. Which existing gates cover different failure classes — and are therefore not replaced even if they fire at the same moment?

**Expected result:** Typically small. Most SYSTEM mechanisms add a new check that wasn't there before, rather than replacing existing ones. The few that are genuinely redundant should be removed as part of Phase 7.

**INT-07 example:** `worker-simplification.md` — Only Check 2 (direction-drift, session-start) was made redundant; all other gates kept because they fire before execution (front-loaded) or cover different failure classes (A1, done-criteria gate). Net simplification: one gate removed.

**If no gates are redundant:** That is a valid outcome. Document it explicitly. "No redundancy found" prevents future agents from re-asking the question.

---

## Phase 6: Live prototype [U]

**What it produces:** Field evidence that the mechanism works on real tasks, not just calibration scenarios.

**Done-criteria (outcome):** The mechanism ran on at least one real task (not a constructed calibration scenario) and produced outputs that were either acted on or overridden with logged reason. Results documented.

**Required:**
- At least 1 real task (in progress or from a real work queue), not a scenario constructed specifically to test the mechanism
- Results compared to what the mechanism was designed to produce
- At least 1 case where the mechanism fires (produces a non-trivial output) and at least 1 case where it doesn't fire (or fires with low severity) — to verify both directions

**Why prototype before integration:** Calibration scenarios are constructed by the mechanism's designer and tend toward the clear-failure zone. Real tasks surface failure modes the designer didn't anticipate. Prototype evidence is not a substitute for calibration; it is a different signal.

**INT-07 example:** INT-07-F — goal checker ran live on TC-1b/2b/3b design; 9 invocations; 8 blocks autonomously resolved; 1 override applied. The prototype itself generated field evidence of the mechanism's behavior under real design pressure, including identifying the escalating-micro-fixes pattern in the test design (not a documented failure mode, but a live catch).

**Mechanism-specific notes:**
- [U] "Live" means inputs came from real work, not constructed scenarios
- [U] Blocks during the prototype that are autonomously resolved are evidence the mechanism works; blocks that require user intervention are evidence the mechanism is miscalibrated or the work is genuinely ambiguous

---

## Phase 7: Integration with structural enforcement [U]

**What it produces:** The mechanism is wired into all relevant call sites with structural enforcement — required sign-off fields, file references discoverable by any agent, and removal of redundant gates identified in Phase 5.

**Done-criteria (outcome):** An agent starting a new task with no prior context on this mechanism can find it, understand what to do when it fires, and complete the required sign-off. Discovery path from all relevant entry points is verified.

**Required for structural enforcement:**
- **Required sign-off field** (not prose reference) at every call site: YES/NO or equivalent — skipping leaves a visible unfilled field, not a silent omission
- **File reference** from every place the mechanism's output must be handled — agents must be able to navigate to blocking-protocol.md (or equivalent) from the context where they receive the output
- **Removal of redundant gates** from Phase 5: don't just add; remove what was made unnecessary

**Verification before declaring done:**
- Confirm blocking-protocol.md (or equivalent) covers the task-close scenario specifically — mechanisms that produce output at task boundaries must be reachable from the task-close section
- Confirm the Override log (or equivalent) is reachable by the retrospective agent (A1 or equivalent) so outcome tracking doesn't require manual hunting

**INT-07 example:** CLAUDE.md Check 2 replaced; TASK_TEMPLATE.md Section 6.0 added with YES/NO sign-off; goal-checker-calibration.md Override log section added; reference added at goal-checker-architecture.md input/output contract.

---

## Phase 8: Maintenance design [U]

**What it produces:** A document specifying how the mechanism is audited over time, what drift looks like, recalibration triggers, and how temporal decay is managed.

**Done-criteria (outcome):** An agent picking up this mechanism 6 months later knows (a) what rubber-stamp drift looks like, (b) what triggers a prompt/rule review, (c) how to recalibrate from scratch if needed, and (d) how to keep calibration cases current as the failure landscape evolves.

**Required sections:**
1. **Drift signatures** — what observable outputs indicate the mechanism is no longer functioning adversarially
2. **Audit trigger and procedure** — when to audit; what to check; what constitutes a clean audit
3. **Recalibration triggers** — specific observable conditions that trigger a prompt/rule revision
4. **Recalibration process** — step-by-step: how to identify the drift direction; how to revise; how to re-verify
5. **Temporal decay management** — as the environment changes (new mistakes logged, new procedures added), how to keep the mechanism calibrated

**INT-07 example:** `goal-checker-maintenance.md` — 5-signal rubber stamp detection; periodic audit every 5 sessions; 3 recalibration triggers; 4-step recalibration process; temporal decay addressed every 5 new M-entries.

**Mechanism-specific notes:**
- [S] For adversarial-check mechanisms: attack angle distribution is a drift signal (atrophy toward 1-2 angles); finding independence (do findings paraphrase project-state or introduce independent concerns?) is the primary signal
- [C] For pattern-matching mechanisms: false positive and false negative rates are the drift signals; recalibration is adding new known-good and known-bad examples to the pattern specification

---

## Cross-cutting requirements

**Sequence discipline:** Phases run in order. The most common shortcut to avoid is Phase 6 (prototype) before Phase 3 (calibration) — "let's try it on a real task and see." A mechanism that isn't calibrated may appear to work in the prototype when it's actually just producing low-friction outputs. Calibration first; prototype second.

**Alternatives gate (required at every phase, before advancing):** Before moving from any phase to the next, generate ≥1 alternative with a different underlying assumption. Select explicitly — one sentence naming which was chosen and why. Log the rejected alternative(s) in the current phase's output document (or design_log.md entry if the phase produces no standalone document). This applies to every phase, including implementation phases — every phase has an underlying assumption that could have been different.

Test for a genuine alternative: if both the chosen approach and the "alternative" share the same fundamental bet, it is a parameter variation, not an alternative. M-44 example: "higher threshold before SATURATED" is a parameter variation of "threshold-based saturation"; "evidence-chain verification instead of threshold" is a different underlying assumption. Alternative = different theory of how the mechanism should work, not different settings for the same theory.

Observable violation: phase output with no documented alternative. A1 checks for this at phase close.

**Adversarial read at Phases 4 and 7:** Not optional. These are the phases where correctness claims are hardest to self-verify: "every state has a clear next action" (Phase 4) and "the mechanism is discoverable" (Phase 7). External verification is the enforcement.

**N=1 caveat: NARROWED (2026-07-04 — DCQC-01 second SYSTEM build complete)**

DCQC-01 (done-criteria quality checker) is the second SYSTEM build. Comparing against INT-07 (goal checker):
- **[U] annotations:** All universal phases (1–8 structure, calibration gate, adversarial at 4 and 7, maintenance design) applied correctly to both builds. No revision needed.
- **[S] annotations:** Phase 2 adversarial-check note (prohibit silence, require enumeration) and Phase 8 adversarial-check drift signal (angle distribution, finding independence) correctly scoped to adversarial-check mechanisms. DCQC-01 is a classification mechanism — these [S] items did not apply and were not used. The scoping is correct, not idiosyncratic.
- **[C] annotations:** Phase 3 calibration structure (minimum cases, baseline cases, clear-failure vs. boundary zone) applied to both. For DCQC-01, boundary zone was reachable (outcome-proxying artifacts); for INT-07, it was structurally impossible. [C] annotation correctly flags this as calibration-specific.

Conclusion: no [S] phase required revision. The procedure generalizes across adversarial-check mechanisms (INT-07) and classification mechanisms (DCQC-01) within the SYSTEM build type.

**Narrowed caveat:** Validated for SYSTEM build type only. Both instances are SYSTEM builds — this validates the procedure within that type, not across all build types. Apply with heightened scrutiny to KIT build type and RESEARCH build type applications until at least one instance in each type completes. Update this entry when those instances exist.

---

## What to do when this procedure says the wrong thing

If a phase requirement clearly doesn't apply to the mechanism being built: log the deviation explicitly as a design decision in the architecture document (Phase 1). "Phase X not applicable because ___" with a specific reason. Don't silently skip.

If a phase requirement seems to conflict with the goal: the procedure is wrong, not the goal. Fix the procedure, don't override the goal.
