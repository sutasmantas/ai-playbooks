# KIT-PLAN-01 — Generated Kit Planning Mechanism: Design Document

**Status:** Design complete — 2026-07-04  
**Evidence basis:** 8-angle research synthesis (`research_archive/kit-planning-synthesis-2026-07-04.md`)  
**Implements:** KIT-PLAN-01 (plan.md), replaces ENTRYPOINT.md Hard Rule 13 multi-task tracking

---

## Purpose

Generated kits have no planning mechanism at intake. Every kit built today begins execution before the full work structure is known — exactly the condition behind 45 documented trigger-recognition failures. This mechanism fixes that by making the plan the primary enforcement surface: required steps are read from the plan, not noticed by the agent.

**The plan is checked, not noticed.**

---

## Mechanism overview

Three structural properties, all mandatory:

1. **Wide at intake** — Given a goal, the first output is a complete skeleton covering all anticipated phases. No phase executes before the skeleton is complete. Sections that cannot be populated at intake are explicitly marked TBD and filled at phase entry.

2. **Deep at phase entry** — Before any phase begins executing, six fields must be fully populated (see Phase Expansion Protocol). The transition from EXPANDING to EXECUTING is a structural gate, not an instruction.

3. **Adaptive with accountability** — The plan evolves as results arrive. Every mutation is recorded in `plan_mutations[]` with required fields. A change without a mutation record is a silent mutation — the primary failure mode this mechanism addresses.

---

## Step 1: Complexity gate

Before generating the skeleton, classify the task. Classification determines whether planning is worth its overhead.

| Class | Conditions (all must be true) | Action |
|-------|-------------------------------|--------|
| **TRIVIAL** | Phases ≤ 2 AND distinct tool calls ≤ 5 AND single-domain lookup or direct execution | Skip skeleton entirely. Execute directly. No plan required. |
| **STANDARD** | Phases 3–5 AND predictable closed domain | Generate full skeleton. Expand each phase at entry. |
| **LARGE** | Phases > 5 OR exploratory domain OR breadth > 3 concurrent sub-tasks | Generate full skeleton. Delegate each phase to a sub-agent with scoped plan. Parent tracks phase outcomes only. |

**LARGE — sub-agent scoped plan format:** Each sub-agent receives: (1) the parent `goal_statement`, (2) the specific phase entry with all 6 expanded fields populated, (3) the relevant prior phase outcomes (what prior phases produced — not the full prior-phase plans). Sub-agent returns: phase `done_criteria` verification result + `discovered_work[]` contents. Parent appends sub-agent's discovered work to the appropriate downstream `phases[].discovered_work[]` before that phase begins.

If in doubt between TRIVIAL and STANDARD: use STANDARD. Planning overhead on a simple task is recoverable; missing a phase on a complex task is not.

---

## Step 2: Wide-at-intake skeleton

When classification is STANDARD or LARGE, generate the complete skeleton before any phase executes. The skeleton is an external file — not held in agent context alone.

**Required fields at skeleton creation:**

```
goal_statement          [immutable — never mutated after creation]
plan_version            [v1 at creation; incremented on each plan_mutations[] entry]
complexity_class        [TRIVIAL | STANDARD | LARGE — from Step 1]
skeleton_complete       [false until all phases listed; must be true before any phase begins]

phases[] — one entry per anticipated phase, all entries required at skeleton creation:
  id                    [unique string, e.g. "phase-1"]
  name                  [short phase name]
  outcome               [one sentence: what this phase produces — outcome anchor, not method]
  status                [PENDING at creation]
  dependencies[]        [phase IDs that must be COMPLETE before this phase can begin]

  [The following fields are valid TBD at skeleton creation, invalid TBD at phase entry:]
  entry_preconditions   [TBD]
  sub_steps             [TBD]
  done_criteria         [TBD]
  failure_modes         [TBD]
  tool_access_grant     [TBD]
  postcondition_check   [TBD]

  discovered_work[]     [empty queue at creation]

plan_mutations[]        [empty append-only list at creation]
```

**Skeleton is complete when:** all phases have `id`, `name`, `outcome`, `status`, `dependencies[]` populated AND `skeleton_complete = true`.

**Do not start any phase until `skeleton_complete = true`.**

**Outcome anchoring:** Phase `outcome` describes what the phase produces, not how it works. Method belongs in `sub_steps`, populated at phase entry. At skeleton time the agent lacks sufficient information to select methods reliably — overspecifying methods at skeleton level causes cascading failure when the method turns out to be wrong.

---

## Step 3: Phase expansion protocol

Before any phase transitions from EXPANDING to EXECUTING, all six fields below must be populated from TBD to concrete values. This is a state machine transition, not a behavioral instruction — the phase cannot be in EXECUTING state without these fields populated.

**Required before EXPANDING → EXECUTING:**

1. **`entry_preconditions`** — List of conditions verified against current global state. Each condition is binary-checkable. If any precondition fails: phase moves to BLOCKED, not EXECUTING.

2. **`sub_steps`** — Ordered list of steps. Each step has: action description, expected output artifact, verification method.

3. **`done_criteria`** — Binary-checkable exit condition against observable global state. Must be an outcome condition ("global state satisfies X"), not a process condition ("completed step 3").

4. **`failure_modes`** — At least two anticipated failure paths, each with routing decision: abort / add to discovered_work[] queue / trigger plan_mutations[] entry.

5. **`tool_access_grant`** — Explicit list of tools permitted in this phase. Tools not listed are unavailable to the executor for this phase. This enforces phase scope structurally.

6. **`postcondition_check`** — At least one binary assertion verifying done_criteria was actually met. This advances failure detection from task-end to phase-boundary — a single check prevents "report complete before actually verifying" failures.

**Phase state machine:**

```
PENDING     → EXPANDING    [agent begins expansion work]
EXPANDING   → EXECUTING    [all 6 fields populated — structural gate]
EXECUTING   → COMPLETE     [done_criteria verified by postcondition_check]
EXECUTING   → BLOCKED      [precondition failed mid-phase]
any state   → [plan_mutations[] entry]   [if phase must be restructured]
```

**Before starting any phase:** check `dependencies[]`. A phase with `dependencies: ["phase-2"]` cannot move to EXPANDING until phase-2 is COMPLETE.

---

## Step 4: Adaptive annotation

Every change to the plan is recorded in `plan_mutations[]`. This list is append-only — entries are never deleted or modified, only added.

**Required fields for every mutation record:**

```
mutation_id             [unique string]
mutation_type           [ADDITION | REMOVAL | REORDER | RESTRUCTURE | GOAL_REINTERPRETATION]
affected_items[]        [phase id(s) or step id(s) affected]
trigger_evidence        [explicit reference to concrete observation, result, or tool output
                         that made this change necessary — "it seemed necessary" is invalid]
prior_plan_version      [immutable ID of plan version being superseded]
what_changed            [precise description: what was removed, added, or restructured]
semantic_equivalence    [true/false + one sentence: does the revised plan still address goal_statement?]
goal_unchanged          [true/false — if false: this is not replanning, it is scope change;
                         requires explicit user authorization before the record is accepted]
```

**If `goal_unchanged = false`:** Do not accept the mutation. Surface to user: "This change would alter the goal, not just the method. Authorization required before proceeding." User response resets to STANDARD replanning.

**Distinguishing replanning from scope abandonment:**
- Replanning: prior result changed what is needed to achieve goal_statement → `goal_unchanged = true`
- Scope abandonment: step is difficult or inconvenient → `goal_unchanged = false` (even if framed as replanning)

The `trigger_evidence` field enforces this distinction structurally: legitimate replanning can always cite a concrete result; scope abandonment cannot.

---

## Step 5: Discovered-work routing

Work discovered during execution that was not anticipated at intake routes to a named structural slot, not to implicit replanning and not silently dropped.

**Two-tier routing:**

**Tier 1 — Current-phase queue:** Work that belongs in the current phase (a missed sub-step, an unanticipated dependency within phase scope). Route to `phases[current].discovered_work[]`. Phase cannot be marked COMPLETE until this queue is empty or each item has an explicit `dropped_reason`.

**Tier 2 — Later-phase backlog:** Work belonging in a later phase. Route to that phase's `discovered_work[]`. Only propagates if a dependency relationship exists or is declared — no dependency declaration = no propagation = no scope explosion.

**Tier 3 — New phase:** Work fitting no existing phase. Triggers a `plan_mutations[]` entry (ADDITION type) creating a new phase skeleton entry. Cannot be done without a mutation record.

**Discovered-work item fields:**

```
item_id
description
discovered_during       [phase_id where this was found]
trigger                 [concrete observation that produced this discovery]
routed_to               [phase_id | NEW_PHASE]
status                  [PENDING | ACTIVE | DEFERRED | DROPPED]
dropped_reason          [required if status = DROPPED — silent dropping = silent plan mutation]
```

The `dropped_reason` field is mandatory when an item is dropped. Any discovered work that is not executed and has no `dropped_reason` is a silent plan mutation.

---

## Step 6: Global skeleton visibility

Throughout execution, the global skeleton must remain visible to the executor. Context pressure is the primary mechanism by which plans fail on long-horizon tasks.

**Required:** At each phase boundary (phase COMPLETE, phase BLOCKED, new phase EXPANDING), re-read the full skeleton and confirm:
- All COMPLETE phases match their `done_criteria`
- All PENDING phases still reflect the current goal
- `plan_mutations[]` has no pending unresolved items

This is a phase-boundary check, not a per-step check — overhead is bounded.

---

## Failure classes this mechanism prevents

| Failure class | From mistakes.md | Structural prevention |
|---------------|------------------|----------------------|
| Missed task (task started before full scope known) | Pattern B, 45 instances | Skeleton must be complete before any phase executes |
| Unlogged pivot (task restructured without recording why) | Pattern D, 12 instances | plan_mutations[] required; mutation without record = invalid plan state |
| Scope creep (successive small expansions without goal check) | Pattern F, 8 instances | goal_unchanged field required on every mutation; false → requires user authorization |
| Silent work drop (discovered work not executed, not explained) | Pattern B sub-class | dropped_reason required on all DROPPED discovered-work items |
| Phase dependency violation (phase B starts before phase A done) | Not documented, structural | dependencies[] checked before any phase can begin EXPANDING |

---

## What this does NOT do

- Does not replace DCQC-01 (done-criteria quality gate) — that fires before Section 4 at task open
- Does not replace the goal checker — that fires before every response
- Does not replace A1 task-close audit — that fires at task completion
- Does not apply to TRIVIAL tasks (complexity gate = TRIVIAL)
- Does not generate the plan content — the agent generates content; this mechanism specifies the required structure

---

## Integration point: ENTRYPOINT.md Hard Rule 13

This mechanism replaces the current Hard Rule 13 multi-task tracking requirement with a planning requirement. See the ENTRYPOINT.md update for the exact wording change. The updated rule requires:

1. Classify task complexity (TRIVIAL / STANDARD / LARGE) before any execution
2. For STANDARD and LARGE: generate skeleton before first tool call
3. For STANDARD and LARGE: expand each phase before that phase's first tool call
4. Record all plan mutations in `plan_mutations[]` with required fields
5. Route discovered work to named structural slots

---

## Verification checklist (done-criteria sub-goal 2)

An agent given only this document and a new kit scenario should be able to:
- [ ] Classify the scenario as TRIVIAL, STANDARD, or LARGE
- [ ] For STANDARD/LARGE: list all phases with id, name, outcome, status, dependencies
- [ ] Confirm skeleton_complete = true before proceeding to phase 1
- [ ] For each phase at entry: populate all 6 required fields before executing
- [ ] For any plan change: create a plan_mutations[] record with all required fields
- [ ] For any discovered work: route to the correct tier (current-phase, later-phase, or new-phase)

If any of these steps requires guessing or re-reading prior context beyond this document, the document is incomplete.

---

## Design decisions and rejected alternatives

| Decision | Evidence | Rejected alternative | Why rejected |
|----------|----------|---------------------|--------------|
| Wide-at-intake skeleton before execution | 6 angles: A1, A2, A3, A5, A6, A7 | Just-in-time decomposition (ADaPT, BabyAGI) | JIT is appropriate for unknown scope; kit execution has anticipatable phases; JIT produces coherence loss on long-horizon (A2) |
| Phase expansion before execution (structural gate) | A3 (HTN), A4 (TDP), A6 (13% compliance drop) | Interleaved planning/execution (ReAct) | 13% compliance drop under execution pressure; A8: partially-specified execution = undefined behavior |
| Structural enforcement (state machine) over behavioral rules | A6 empirical; A3 theoretical; A5 mechanism design | Behavioral instructions ("before entering a phase, you must...") | 45 documented production failures of behavioral triggers in this project; A6 confirms: compliance degrades under execution pressure — reliable property of LLMs |
| Inline mutation annotation (plan_mutations[]) | A5 (silent mutation = primary failure mode); A4 (SGH versioning) | External execution log only | External logs can be skipped; inline makes rationale visible to next planning step |
| Two-tier discovered-work routing | A4 (TDP 82% token reduction, DAG scope confinement) | Full replanning on discovery | A4: full replanning loses origin metadata; no scope gate; one discovery triggers full plan rewrite |
| Outcome-anchored phase nodes | A8 (hierarchy rigidity — wrong high-level node wastes all downstream work) | Method-anchored phase nodes | Agent lacks information at skeleton time to reliably select methods; failure cascades |
| Complexity gate before planning | A8 (Goldilocks finding; 2-3x overhead confirmed) | Always plan | Users abandon systems where planning overhead exceeds task effort; TRIVIAL tasks have measurable overhead with no benefit |
