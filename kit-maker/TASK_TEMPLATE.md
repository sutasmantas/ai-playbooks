# Kit-Maker Task Template

Every task in plan.md follows this template. Not abbreviated for "simple" tasks. The template exists because memories and CLAUDE.md rules fail in execution mode — this enforces process structurally at the task level.

**Preferred destination for new process rules.** When a mistake investigation produces a new process rule, this template is the first candidate — not CLAUDE.md. TASK_TEMPLATE gates are structurally enforced by the task sequence; CLAUDE.md rules require recognition to fire and degrade under execution pressure (Pattern B, documented 8+ times). If the rule fires during task execution: put it here. Use CLAUDE.md only when the rule must fire outside of task context (session-start, always-on per-response, conversational mode, inter-task behavior). Limitation: TASK_TEMPLATE only covers tasks that go through this template. Rules for session-level and always-on behavior still require CLAUDE.md.

**How to use:** Copy the template into the task entry in plan.md. Fill each section before advancing past its gate. Gates are not advisory — a gate with empty "Evidence to close" has not been passed.

**Size rule:** This template is applied as written. If you find yourself skipping sections "because this task is small" — that is exactly the failure pattern. Narrow-execution tasks have an abbreviated path (see Section 0 routing). Everything else: full template.

---

## 0. Compliance pre-check and task-type routing

### Pre-check

- [ ] **Plan.md entry written before starting this task: YES / NO.** If NO: stop. Write the entry. Return here.
- [ ] Read this full template before starting
- [ ] Checked plan.md for pending triggers that must fire before this task
- [ ] Looked up PRIMARY + SECONDARY pattern risk from routing table below (NOT general judgment — fill after selecting task type): PRIMARY = ___, SECONDARY = ___
- [ ] If continuing a partially-done task: re-read the filled sections, do not rely on memory

Output: one-line confirmation the pre-check ran, the plan.md entry exists, and PRIMARY/SECONDARY pattern risks named from table.

**Why the plan.md check is first (M-20):** Every prior Pattern B fix added rules to CLAUDE.md. All failed because recognition checks are self-applied and fail under execution pressure. The unconditional plan.md entry rule (see CLAUDE.md) requires that the entry EXIST as evidence the rule fired. This checkpoint inside the template catches late recognition — if you're filling the template and the entry doesn't exist yet, stop and write it before continuing.

### Task-type routing

Select one. This determines which sections are full, abbreviated, or have extra requirements.

| Task type | Section 1 | Section 2 | Extra requirements |
|-----------|-----------|-----------|-------------------|
| **Research** (running an angle) | Full | Full + 2.6 vocabulary frame check | Saturation tracking in Section 5; saturation conditions verified in Section 6 |
| **Post-cluster-review** (PCR) | Full | Abbreviated (2.1 + 2.2 only) | Finding-application cross-match table in Section 6 |
| **Synthesis** | Full | Full | Counter-prior pass planned in 2.6; contradiction handling in Section 3; Step 3.7 principles-extraction required for all groups |
| **Procedure-design / update** | Full | Full + 2.6 contradiction audit | Second-order effect check in Section 3; rule density check in Section 6 |
| **Audit** | Full | Full | Class-identification required in Section 2; concrete fix required in Section 3 |
| **Structural / process** | Full | Full | — |
| **Narrow-execution** (applying known fix to known location) | 1.1 + 1.5 + 1.7 only | 2.1 only | Cannot skip done-criteria or integration close |
| **Brainstorming / mechanism-design** | Full | Full | (1) Goal-model-first derivation BEFORE consulting any research (M-29). (2) Done-criteria MUST enumerate two sub-goals: (a) mechanism implemented in file, (b) mechanism tested in ≥2 execution scenarios. "Rule written to file" is never sufficient done-criterion for a behavioral mechanism. Done = tested, not written. (M-36) See task-type specific section. |
| **Evaluation / trial-design** | Full — Section 1.1 Steps 1–3 MANDATORY + extra eval fields | Full | See "Evaluation tasks" section at end of this template. Anti-benchmark check + trial-validity check + goal-claim statement required BEFORE any trial design. (M-06, M-17, M-23, M-25 — all missed this gate.) |
| **SYSTEM** (always-active mechanism that governs other mechanisms) | Full | Full | Follow `kit-maker/procedures/system-design.md` 8-phase sequence. Required extras: (1) Calibration gate — min 3 known-failure cases from mistakes.md, run and documented BEFORE Phase 6 prototype. (2) Adversarial verification at Phases 4 and 7 — fresh agent reads produced artifact looking for undefined states or unreachable call sites. (3) Maintenance design (Phase 8) before declaring complete. (4) Alternatives gate at every phase — ≥1 alternative with a different underlying assumption documented before advancing; chosen approach stated with reason; rejected alternative(s) logged in phase output or design_log.md. Observable violation: phase output with no documented alternative; A1 checks at phase close. Use SYSTEM only if ALL FOUR selectors apply: always-active, failure hard to detect post-hoc, getting it wrong risks all future work, requires calibration before trust. |

**Selected type:** ___

**Pattern priority — look up PRIMARY + SECONDARY for the selected type. Do not infer. Use this table.**

| Task type | PRIMARY risk | SECONDARY risk |
|-----------|-------------|----------------|
| Research | Pattern I — research used as prescription; findings become rules without principled derivation (Step 3.7 silently skipped) | Pattern B — Step 2 cross-group scan, Step 3.6 count parity, Step 3.7 silently skipped |
| Post-cluster-review | Pattern A — finding not applied to any kit file (execution without integration) | Pattern B |
| Synthesis | Pattern I — synthesis treats findings as direct rules; Step 3.7 produces restatements not abstract principles | Pattern B |
| Procedure-design / update | Pattern C — new rule written and applied before tested in ≥2 real scenarios | Pattern M — first-pass design choice skips alternatives gate |
| Audit | Pattern J — produces findings list without proposed fixes or class identification (rule-following replaces goal-directed) | Pattern A — audit item not actioned into plan.md entry |
| Structural / process | Pattern M — phase-level decision made without documenting ≥1 alternative with different underlying assumption | Pattern B |
| Narrow-execution | Pattern A — edit applied, done-criteria re-check silently skipped (artifact ≠ done) | Pattern B — template sections skipped "because this is simple" |
| Brainstorming / mechanism-design | Pattern H — idea generation anchored to research inputs before goal model is written out | Pattern F — mechanism satisfies local done-criteria while not advancing goal model |
| Evaluation / trial-design | Pattern F — trial structured to produce a score, not a failure-mode diagnosis | Pattern C — trial run before adversarial validity audit |
| SYSTEM | Pattern C — new mechanism declared done before calibration cases run | Pattern B |

**Fill before advancing to Section 1:** "For this [type] task, PRIMARY = ___, SECONDARY = ___."

---

## 1. Readiness

Fill completely before doing any work. Gate 1 does not pass until all subsections are filled.

### 1.1 Objective and done-criteria

**For design, evaluation, structural, and procedure tasks — fill in this order. Do not write the task statement until steps 1–3 are complete.**

**Step 1 — Goal model (copy the exact statement from design_log.md, do not paraphrase):**

> ___

**Step 2 — Evidence required (what specific, observable output would confirm the goal model is being advanced by this task):**

> "This task advances the goal model if it produces: ___"

**Step 3 — Falsifiability check (complete this before naming the task):**

> "This task could produce a correct artifact while FAILING to advance the goal model if: ___"

If you cannot fill step 3 with a specific failure scenario: the task is not yet scoped correctly. Do not proceed. M-25 example: "the trial produces a recall score but tests issue-finding not autonomous execution" — that failure mode should have been named before the trial was designed.

**Step 4 — Task in one sentence (now derivable from steps 1–3):**

**Step 5 — Done-criteria as an OUTCOME — not as an artifact:**

> Wrong: "synthesis.md exists" / "angle researched" / "procedure updated"
> Right: "confidence map is actionable — every HIGH finding has a kit file reflecting it, and the map can drive a Phase 5 planning decision without further investigation"

State it here: ___

**DCQC-01 sign-off (REQUIRED — structural gate before Section 4):**

First check N/A eligibility (criteria in the N/A path section below). If N/A applies: skip dispatch, record the N/A sign-off, and proceed to Section 4. Otherwise:

Dispatch a fresh subagent with (1) the DCQC-01 evaluator prompt from `kit-maker/dcqc-01-prompt.md`, (2) the done-criteria from Step 5, (3) the task direction from Step 4, and (4) the goal model from Step 1.

The evaluator returns one of two verdicts:
- **OUTCOME-BASED:** proceed to Section 4. Record: `DCQC-01: OUTCOME-BASED — [date]`
- **ARTIFACT-BASED:** do NOT proceed to Section 4. Rewrite the done-criteria addressing the evaluator's Problem field. Re-dispatch DCQC-01 with the revised done-criteria. Repeat until OUTCOME-BASED is returned. Full worker action protocol (rewrite loop, iteration limit, escalation, edge cases): `kit-maker/dcqc-01-boundary.md`.

Sign-off field (required — cannot be left blank): `DCQC-01: [OUTCOME-BASED / N/A — reason] — [date]`

**N/A path:** N/A applies when this task produces no mechanism, procedure, or rule change — file reorganization, record-keeping, or archive-only tasks qualify. Before claiming N/A: answer this question explicitly: **"Does this task add, change, or remove any behavioral gate, rule, or procedure?"** If YES: N/A is NOT eligible — dispatch DCQC-01. (M-50: tasks that add TASK_TEMPLATE gates incorrectly claimed N/A because the task "seemed" outcome-based to self-inspection; self-inspection fails for exactly the artifact/outcome distinction DCQC-01 exists to catch.) If NO: record `DCQC-01: N/A — [one-sentence reason] — [date]` and proceed to Section 4. Full N/A eligibility criteria: `kit-maker/dcqc-01-boundary.md` N/A edge case section.

**For compound tasks (tasks with multiple phases or sub-goals listed in Section 1.4): done-criteria must be ENUMERATED — one line per sub-goal. A single aggregated criterion is not valid for compound tasks.** (M-35: aggregated criteria create a partial-completion path — the agent implements enough to satisfy the one criterion and pivots, leaving sub-goals open.)

> Wrong (compound): "All mechanism classes addressed" — satisfiable by implementing the largest class alone
> Right (compound): "(1) EXT class: A1 external auditor implemented. (2) C3 class: user-correction trigger implemented. (3) TG-START class: evaluation task type routing added. (4) PROC class: all 6 entries have structural gate or documented coverage. (5) TG-CLOSE class: all 4 entries have gate or documented coverage. (6) OBS classes: covered by A1. (7) NONE class: best-available documented."

This exact statement (all sub-goals) is re-read at Section 6.1. If ANY sub-goal is not met: the task continues. The pivot-time gate (CLAUDE.md) also fires against this list before any new task is proposed.

**For narrow-execution tasks:** skip steps 1–3. Narrow-execution tasks apply a known fix to a known location — the goal connection is already established by the task that identified the fix. Go directly to step 4.

**For evaluation / trial-design tasks — three extra fields required BEFORE step 4 (M-06, M-17, M-23, M-25):**

**Step 3a — Goal-claim statement:** "This trial validates the claim that ___. If the trial returns the expected result, that means ___. If it doesn't, that means ___."

The purpose: evaluation tasks can produce results (scores, rates, detection counts) without advancing the goal model. Naming the claim forces disambiguation between "trial produces a result" and "trial produces useful signal." A trial that doesn't validate a falsifiable goal claim is a benchmark, not a diagnostic.

**Step 3b — Anti-benchmark check:** "What specific decision will results from this trial drive? State the decision before designing the trial." If the answer is "it depends on the results" without naming what specifically changes: the trial is not yet designed with a decision in mind. Redesign before building.

**Step 3c — Trial validity check:** "Is this design capable of producing valid signal for the stated objective? State one way the trial could produce a 'correct' result (passes, high score, detection rate) while actually answering the wrong question." If you cannot state such a failure mode: the trial is not yet scoped correctly. Do not proceed.

### 1.2 Why this task now

- Why is this the highest-value task available?
- What happens if this task is skipped or deferred?
- Does a trigger in plan.md require this before anything else?
- Is this task unblocked, or does something need to complete first?

### 1.3 What this task is NOT

- What is explicitly out of scope?
- What related work is deferred, and why deferred now?
- What would scope creep look like for this task?

### 1.4 Alternatives — genuine search required

At least one alternative with a **fundamentally different underlying assumption**, not a parameter variation.

| Alternative | Underlying assumption | Strongest case FOR (steelman) | Reason rejected | Dimension where it wins |
|-------------|----------------------|-------------------------------|-----------------|------------------------|
| Chosen approach | | | N/A | N/A |
| Alternative 1 | | | | |

If you cannot steelman an alternative: generate a different one. A strawman is not an alternative.

### 1.5 Current state of all relevant files

List every file this task reads or changes. State current content relevant to this task. Do not describe from memory — read the file.

| File | Current state (read, not recalled) |
|------|-------------------------------------|
| | |

### 1.6 Assumptions and dependencies

- What must be true for this task to succeed?
- **Strongest unsupported assumption:** name the one assumption most likely to be wrong. Do not name the most obvious one — name the one that would cause the worst failure if wrong.
- For heavy workflow tasks: is session resource budget available?
- For tasks applying findings: are the relevant archives current, or could they have been superseded?

### 1.7 What could go wrong — and what does success here make worse?

Two required questions. Both must be answered.

**What could go wrong:**
- Main failure mode for this specific task
- What would make the output look complete but actually be wrong or misleading
- Which step would I be tempted to skip that actually matters
- Pattern risk from mistakes.md: which documented pattern is this task most likely to repeat?

**What does success here make worse:**
- What adjacent area does improvement here put at risk?
- What assumption elsewhere in the project does this task's output invalidate if it's correct?
- What would someone building on this output get wrong because of how it's framed?

**Gate 1 — Evidence to close:**
- Done-criteria states an observable outcome, not an artifact
- At least one genuine alternative steelmanned and rejected with honest reason
- Every relevant file listed and its current state explicitly read
- Strongest unsupported assumption named (not the most obvious one)
- "What does success make worse?" answered with a specific answer

**Current status:** OPEN / CLOSED

---

## 2. Exploration

Required for: Research, Synthesis, Procedure-design, Audit, Structural tasks.
Narrow-execution: Section 2.1 only.

### 2.1 Review of previous related work

- What has already been done in this project relevant to this task?
- What was already learned about this topic?
- Is there a documented mistake in mistakes.md specifically about this area?
- What did a similar previous task produce — is the current task going to improve on it or repeat it?

### 2.2 Alternative approaches — real search

Before committing to the approach:
- What are the materially different ways this task could be done?
- What assumption does each make that the chosen approach does not?
- **Self-check:** Did the first approach that came to mind get chosen? If yes: explicitly name why alternatives were genuinely considered and rejected, not why the first approach is good.

### 2.3 Counterarguments

- What is the strongest case that the chosen approach is wrong?
- What specific evidence would flip the approach?
- What would make the output of this task lower-value even if it produces a result?
- What is this task most likely to get wrong even when it produces output?

### 2.4 What will this task break?

This is not the same as "what could go wrong." This asks: if this task succeeds at its stated goal, what does that improvement make worse?

- What assumption elsewhere in the project does this task's result invalidate?
- What adjacent procedure or rule does this task's output conflict with?
- What would someone downstream from this task inherit that they shouldn't?

### 2.5 Adjacent problems

- What problem is adjacent to this task that I might inadvertently affect?
- What files outside the stated scope could be changed as a side effect?
- What would someone reading this task's output assume about broader project state — and would that assumption be correct?

### 2.6 Task-type specific exploration

**Research tasks:** Vocabulary-frame enumeration (Step 0 from research-quality.md)
- What vocabulary traditions cover this topic? Name at least 2.
- Am I at risk of searching only one vocabulary cluster?
- State at least one adversarial framing query before starting.
- What does saturation look like for this specific angle? State conditions before starting.

**Coverage depth-check (M-57 — 2026-07-06):** When evaluating whether a domain was researched adequately, category presence is NOT sufficient. Required interrogation before declaring coverage complete:
- (a) What depth does the user's importance signal imply? (A passing question implies surface coverage; a foundational design question implies deep coverage of ALL relevant vocabulary traditions.)
- (b) Which vocabulary tradition does the existing research cover? (A domain may have multiple — e.g., "database queries" has a relational/SQL tradition AND a cognitive/query composition tradition AND an information-retrieval tradition.)
- (c) Does the tradition and depth in the existing research match the user's actual question? (Research exists in tradition X; user's question is about tradition Y — this is category-match but NOT depth-match.)

**Observable failure mode:** Declaring an angle's coverage adequate because ONE tradition is documented when the user's question requires a DIFFERENT tradition. "Coverage" means coverage of the traditions relevant to the question, not just presence of any research on the topic. (M-57 class: Pattern E variant — concept frame lock applied within one vocabulary tradition without verifying other traditions.)

**Synthesis tasks:** Contradiction audit
- Which claims in the archives contradict each other on this topic?
- Which claims support opposite conclusions?
- How are contradictions classified — contested (equal evidence both ways) vs. one-sided (one direction has stronger evidence)?

**Procedure-design tasks:** Contradiction audit
- Which existing procedures or rules does the proposed change interact with?
- Does any existing rule require opposite behavior from what this task produces?
- What happens if both the old and new rules are in effect simultaneously?

**Audit tasks:** Class identification
- Is this audit item an instance of a broader class?
- What other instances of the same class might exist in the kit?
- Is the class well-represented in mistakes.md, or is this a new pattern?

**Gate 2 — Evidence to close:**
- Previous related work reviewed from actual files (not recalled)
- Genuine alternative search done — alternatives with different assumptions, not variations
- "What will this task break?" answered with a specific answer (not "nothing" without checking)
- Task-type specific section completed where applicable

**Current status:** OPEN / CLOSED

---

## 3. Design freeze

Exact approach committed. Changes after this point require re-opening this section.

### 3.1 Exact approach, step by step

1. [Step 1]
2. [Step 2]
...

**Explicit scope boundary:** What will NOT be done:

### 3.2 Quality bar

- How will I know the output is good, not just present?
- What does a **bad** output of this task look like that could be mistaken for a good one? State specifically.
- What single check distinguishes good output from merely-present output?

### 3.3 Integration plan

Every generated item is tracked immediately — not deferred to after the task closes.

| Output type | File to update | What changes | When (after which step, not "at end") |
|-------------|---------------|--------------|--------------------------------------|
| New research angle | RESEARCH_ANGLES.md | Numbered entry in master tier table | Immediately when identified |
| Discovered work item | design_log.md | Entry with priority and description | Immediately when identified |
| Design decision made | grounding-map.md | Row with decision and evidence basis | Before task closes |
| Finding applied to procedure | Procedure file + grounding-map.md | Specific change stated | During application step |
| Trigger fired | plan.md | Trigger status updated | Before task closes |
| Mistake identified | mistakes.md | Full entry with class, fix, recurrence check | Before continuing work |
| Template gap found | plan.md | Template-improvement sub-task created | Before task closes |

**Rule:** If an angle, finding, or discovered work item was generated but not yet in its tracking file — the task is not done. Do not report complete until every generated item is tracked.

### 3.4 Trigger check

- Does completing this task fire a trigger in plan.md?
- Which trigger fires (or "no trigger fires"): ___
- Is that trigger registered before starting execution?

### 3.5 Rollback rule

- If this task produces bad output: what does reverting look like?
- Is any part of this task irreversible? State the point of no return explicitly.

**Procedure-design and audit tasks — additional:**
- Second-order effect check: if this procedure change is applied, what downstream behaviors does it produce beyond the intended one?
- Rule density check: after this change, how many distinct actionable rules exist in the affected file? If approaching 12–15: flag for culling pass.

**Gate 3 — Evidence to close:**
- Approach is step-by-step, not described in general terms
- Quality bar states what a bad output looks like (not just what a good one looks like)
- Integration plan covers every type of output this task could generate, with a "when" that is not "at end"
- Rollback is stated

**Current status:** OPEN / CLOSED

---

## 4. Execution-ready gate

All decisions must already be written above. This is a verification gate, not a decision gate.

### 4.1 Readiness checklist

All must be YES:

- [ ] DCQC-01 sign-off field in Section 1.1 reads OUTCOME-BASED (or N/A with reason) — date present
- [ ] At least one genuine alternative steelmanned and rejected with honest reason (Section 1.4)
- [ ] Every relevant file's current state explicitly read, not described from memory (Section 1.5)
- [ ] Strongest unsupported assumption named (Section 1.6)
- [ ] "What does success make worse?" answered specifically (Section 1.7)
- [ ] "What will this task break?" answered specifically (Section 2.4)
- [ ] Integration plan complete — every output type has a file, a change, and a when that is not "at end" (Section 3.3)
- [ ] Quality bar distinguishes good output from merely-present output (Section 3.2)
- [ ] No unresolved decision hidden in prose in Sections 1–3

### 4.2 Task-entry quality review

After filling Sections 1–3, apply this before executing:

- Is the done-criteria actually an outcome? Could it be satisfied by a bad output that looks like a good one?
- Are the alternatives genuinely different assumptions, or variations on the same one?
- Was every relevant file actually read, or were some described from recalled state?
- Does the integration plan cover everything, or is there an output type this task generates that isn't in the table?
- Is the strongest unsupported assumption the one that would cause the worst failure if wrong — or is it just the most obvious one?
- Does "what does success make worse" have a real answer, or was it answered with "nothing" without checking?

If any answer is "no" or "I'm not sure": fix the section before proceeding.

**Decision:** `ready-to-execute` | `blocked by: [what specifically]`

---

## 5. Execution

Track during work. These checks are not deferred to the post-task review.

### 5.1 Mid-work coherence check

After each meaningful step — not optional, not deferred:

1. Is the tracking state coherent and navigable right now?
   - Could someone who has never seen this project understand what's done, what's queued, and at what priority from the current tracking files?
2. Was anything new generated (angle, finding, discovered work, decision)? If yes: is it already in the right tracking file, with a number and a priority?
   - If NO: stop. Do the integration. Then continue.
3. Is the task still within scope stated in Section 1.3?
   - If scope has grown: update Section 1.3 and note why before continuing.
4. **[PROVISIONAL — long-horizon tasks only: 15+ distinct steps in Section 3.1, or research/synthesis pipelines exceeding 30 turns]** Re-read the goal model statement from Section 1.1 Step 1. Has accumulated context, mid-task discoveries, or execution pressure shifted this task's effective direction away from the stated objective? If yes: classify the shift as either (a) a valid plan mutation — log in Section 5.4 with `mutation_type: GOAL_REINTERPRETATION`, `goal_unchanged: false`, and surface to user before accepting — or (b) drift to correct before continuing. Evidence: `inherited-drift-trajectory-contamination` + `non-deterministic-drift-temperature-zero` (HIGH, goal-drift-mechanisms, angle-119, 2026-07-05): five structurally distinct drift mechanisms documented in multi-turn sessions; periodic re-anchoring is necessary; specific step-count threshold is a design judgment. Flip trigger: remove this item if ≥5 long-horizon task completions show accurate goal alignment at Section 6.1 re-read without requiring mid-task re-reads.

### 5.2 Mistake: Log

Fires when anything unexpected happens during execution.

1. Stop. Write in mistakes.md before continuing: what happened, the class, whether the class already appears in mistakes.md.
   **When naming the class, complete this sentence — "This is an instance of ___ because ___."** The class must be more abstract than the specific thing that failed. Test: if you could restate the class name using the exact words of the specific failure, the class is not abstract enough. Generate a more abstract one.
2. If same class appeared before: mark "previous fix failed" in the recurrence check column. Do not apply same fix again — escalate to Section 5.3.
3. Then continue.

### 5.3 Mistake: Investigate

Fires whenever Section 5.2 fires. This is a separate activity from logging.

Required questions — all five must be answered:
1. What does this mistake reveal about my overall process — not just about the specific thing that broke?
2. What else might be wrong that I'm not currently seeing? (Look adjacent, not just at the specific failure)
3. **Test:** Would a genuinely broad review of my current behavior surface a problem *different* from this one? If yes: state it. If no: the review was not broad enough.
4. If the same class appeared before in mistakes.md: what was inadequate about the previous fix? What would a better fix look like?
5. **Research gap routing (D1):** Does this failure class suggest a research gap — something that would benefit from empirical evidence not currently in the archives? Name the specific question a research angle would answer. If YES: write the angle title and ≥1 draft query to RESEARCH_ANGLES.md immediately (not "later"). If NO: state explicitly "no research gap — this is a procedure gap; fix implemented at [file:section]."

Output: answers to all five questions written in the task entry or mistakes.md before continuing work.

**Every action item produced by this investigation requires one of two statuses — no exceptions (M-32):**
- `[EXECUTED — file:line]` — done in this response; cite the exact file and location changed
- `[QUEUED → plan.md entry written]` — a formal plan.md task entry exists for this item with done-criteria

A note in the body of mistakes.md without one of these statuses is not an action item — it is an observation. Observations do not close problems. If you cannot execute it now and cannot write a plan.md entry for it: it should not be listed as an action item.

If the investigation reveals additional problems: log them in design_log.md and create plan.md sub-tasks before continuing.

### 5.4 Scope check

After any step that adds work not in Section 3.1: is the addition justified? Or does it indicate the done-criteria in Section 1.1 was under-specified? If under-specified: update Section 1.1 now, not after.

---

## 6. Post-task review

Fill before reporting complete. Every subsection. Not abbreviated.

**Phase-ending tasks only:** Before filling Section 6.1, run mandatory-reflection.md (all 9 questions). Log any actionable "yes" answers in design_log.md Discovered Work before continuing. This is the per-task enforcement of the phase-gate reflection requirement in ENTRYPOINT.md — skipping it here bypasses the phase gate.

### 6.0 Goal checker sign-off (REQUIRED — fires before 6.1)

Before checking done-criteria: update `kit-maker/project-state.md` with what happened this task, then invoke the goal checker.

**Goal checker invoked before reporting complete: YES / NO**

If NO: do not proceed to 6.1. Invoke the goal checker first. Handle its output per `kit-maker/blocking-protocol.md`.

If goal checker hard-blocks: do not report complete. Resolve the block first.  
If goal checker soft-challenges: acknowledge the challenge, then proceed to 6.1.  
If no critical flaw found: proceed to 6.1.

**A1 / goal checker sequencing at task close (AUDIT-02 Phase 2 — 2026-07-06):** Under the new trigger model, A1 fires as part of the universal pre-response dispatch (co-located with goal checker, before every response). No separate Section 6 trigger is needed — the pre-response dispatch handles A1 on the task-complete response exactly as on any other response. Worker passes unmediated evidence (last user message + draft response + plan.md + mistakes.md + CLAUDE.md) — not a task summary. Goal checker fires on the same response checking whether the completion claim is valid.

**Override logging:** If any override was applied during this task, A1 assesses outcome now — did the problem the goal checker predicted materialize? Log outcome in `kit-maker/goal-checker-calibration.md` Override log section (pending / validated / goal-checker-was-right).

**SAT-EVAL-01 gate (Research tasks only):** Four checks — all must pass:
1. `saturation_verdict.verdict` = SATURATED: YES / NO
2. `saturation_verdict.evaluator_dispatch` populated with checkpoint identifier (not blank, not "self-declared"): YES / NO
3. `saturation_verdict.conditions_confirmed` contains at least one criterion entry with measured evidence — `<label>: <value>/<threshold>` format (e.g., `"consecutive zero-yield: 3/3"`, `"source types: 4, max-share: 47%"`) — NOT just condition numbers or "conditions met": YES / NO
4. `saturation_verdict.residual_limitation` present and non-generic (names specific unprobed vocabulary traditions): YES / NO

If any is NO: the angle is not done. Re-dispatch SAT-EVAL-01 and populate all four fields before closing.

**Canonical saturation_verdict format (worker fills this from evaluator output):**
```
saturation_verdict:
  date: [YYYY-MM-DD]
  verdict: SATURATED
  evaluator_dispatch: Checkpoint N ([query range]; [key count]; [source count])
  conditions_confirmed:
    - condition 1: consecutive zero-yield: [N]/[N] queries (Q[x]/Q[y]/Q[z])
    - condition 2: source types: [N], max share: [X]% ([type])
    - condition 3: cross-tradition query: [vocabulary used]; result: [0 new keys / N new keys]
    - condition 4: adversarial query: "[query used]"; result: [0 contradicting keys / N new contradicting keys added]
  residual_limitation: "[specific unprobed vocabulary traditions — not 'none found']"
```

Note: A worker who cannot fill conditions_confirmed with measured values has not read the evaluator's output. A1 checks all four fields at task close.

---

### 6.1 Done-criteria check

Re-read the done-criteria from Section 1.1 verbatim.

Does the current state meet the **outcome** — not just the artifact?

State explicitly: **YES** or **NO**. If NO: continue the task. Do not report complete.

### 6.2 Pattern review — what did I not name?

- What patterns in this task's output have I not explicitly named?
- What does this output suggest that I have not said?
- What question did this task leave open that I noticed but did not surface?
- What would the best possible version of this output look like — and is the current output at that level? If not: what is the gap, and is it acceptable?

### 6.3 What did this task break?

Check the prediction from Section 1.7 and Section 2.4:
- Did success here actually make the adjacent area worse, as predicted?
- Was the prediction wrong? If wrong: what does that mean for how the output is framed or used?

### 6.4 Adjacent problem check

Did anything come up during this task that was not in scope but is actually a problem?
- If yes: log in design_log.md as discovered work before closing.

### 6.5 What this task generated — integration confirmation

State every generated item and confirm it is tracked:

| Item | Type | Tracked where? | Confirmed |
|------|------|----------------|-----------|
| | | | [ ] |

If any row has no confirmation: do not close the task.

### 6.6 Retrospective — broad, not targeted

Required questions. All must be answered. This is not a review of the specific task — it is a review of how you are operating.

1. What went wrong on this task, even partially?
2. What would have made this task better if done differently?
3. What are you not seeing about this task or this area?
4. **Required test:** State one problem a genuinely broad review would surface that is **different** from the obvious one from this task. If you cannot state one: the review was not broad. Widen it until you can.
5. Is this a repeating pattern? Check mistakes.md — if same class appeared before and you repeated it: log the recurrence and escalate to process change, not same fix.

### 6.7 Decision

One of three:
- **Promote:** done-criteria met, output is good, integration complete, no open issues
- **Needs revision:** done-criteria not fully met or output has identified quality gap — state what specifically
- **Blocked:** cannot complete without resolving [state what]

**Decision:** ___

**If "needs revision" or "blocked":** Do not mark complete. State the gap and what resolves it.

**If "Promote":** Two required actions before closing:

1. **Archive this entry:** Move this plan.md task entry to plan-archive.md now. Write the archive entry with: date, outcome, artifacts, key decisions. The plan-archive.md entry IS the evidence this task closed — do not report complete if it does not exist. This is not a separate trigger to remember; it is part of the Promote action.

2. **Name the next obstacle.** Use one of:
- "I'll do X next." (autonomous — reversible, clearly in-scope)
- "Proposing X — proceeding unless redirected." (user should know the direction)
- "X needs to happen. Need your decision on [specific question] specifically." (genuine judgment call the user must make)

Silence after task close is the failure mode. This step is not optional — going silent after a completed task is the primary behavioral decay pattern.

---

## 7. Integration close

Nothing closes until every item is checked.

- [ ] plan.md: task marked complete, next task identified, triggers resolved
- [ ] RESEARCH_ANGLES.md: every new angle numbered, priority tier assigned, in master tier table. No stubs without numbers or priority.
- [ ] design_log.md: every discovered work item logged with priority and description
- [ ] grounding-map.md: updated for every design decision made or changed
- [ ] mistakes.md: every mistake logged with class, fix applied, recurrence check
- [ ] Kit procedure files: all research findings applied or explicitly deferred with written reason
- [ ] Post-task retrospective complete, new patterns added to mistakes.md Pattern Summary
- [ ] Template gap check: did this task reveal a gap in this template? If yes → create template-improvement sub-task in plan.md before closing. State: YES (sub-task created) / NO (no gap found).

**No task is complete until every checkbox is checked.**

---

## Quick template quality audit

Before treating any task entry as ready to guide work:

- Is the done-criteria an outcome that would be recognizable to someone who didn't do the task?
- Were alternatives genuinely steelmanned — or were they dismissed before being built?
- Was every relevant file read in current state, or described from memory?
- Is the integration plan specific — every output type has a named file and a "when" that is not "at end"?
- Is the strongest unsupported assumption the one that would cause the worst failure (not just the most obvious)?
- Does "what does success make worse" have a real specific answer?
- Are later sections (6, 7) as complete as earlier ones (1, 2)?
- Was the task-type routing used and does it match the actual task?

If any answer is no: fix before proceeding.

---

## Task-type specific requirements

These are not additions to the base template — they replace or expand specific sections for the given task type. Check Section 0 routing table for which apply.

### Research tasks

**Replaces Section 2.6:**
- Vocabulary traditions: name ≥2 before starting any query
- Adversarial framing: plan ≥1 query of the form "[topic] fails because" or "critique of [topic]" or "[topic] null result"
- Grey-lit: plan ≥1 query targeting arXiv, GitHub, or practitioner sources
- Saturation conditions: state all four conditions before starting. Saturation is NOT declared until all four are met:
  1. Consecutive queries return claim keys already in the set
  2. At least 2 structurally distinct source types covered (academic + grey/GitHub/practitioner)
  3. At least one cross-tradition check done (Category D from research-quality.md)
  4. At least one adversarial query explicitly searched for contradictions, critiques, failure modes, or null results (e.g., "critique of [topic]," "[topic] failure cases," "when [topic] doesn't work," "[topic] null result"). Result must be documented as either: (a) contradicting claim keys added to archive, or (b) null-result statement ("adversarial query returned no contradictory evidence"). A null result is a positive finding — the corpus was stress-tested and survived.
  These conditions are passed to SAT-EVAL-01 verbatim at each checkpoint dispatch. Do not degrade them.
  Claim key granularity: one key per named technique/approach OR per distinct empirical threshold/finding — regardless of how many sources support it. Two studies reaching the same conclusion with different methods = one key. One study contributing two distinct claims = two keys.

**Adds to Section 3 (design freeze — applies when workflow script dispatches subagents for angles):**
- **AgentType tool-requirements gate (M-48 — fires when any workflow angle specifies `agentType`):** For each angle that assigns `agentType`: (1) list ALL tools the angle's procedure requires (read? write to disk? spawn subagents? call external APIs?); (2) verify the named agentType provides every required tool. **Default rule: omit `agentType` entirely** when the angle requires Write, Agent, Workflow, or Bash tools — untyped dispatch inherits all available tools. Restricted agent types (`claude-code-guide` and similar read-only profiles) provide only: Glob, Grep, Read, WebFetch, WebSearch. Observable violation: angle procedure contains a checkpoint write step + angle is dispatched with `agentType: 'claude-code-guide'` → checkpoint file will never be written; synthesis will run without that angle. A1 checks Section 3 for agentType assignments; any assignment without a documented tool-requirements verification is an observable violation.

**Adds to Section 5 (during execution):**
- Checkpoint dispatch: After every 3–4 queries, write current findings to archive file (checkpoint-write, already required). Then dispatch SAT-EVAL-01 evaluator against current archive + query list + Section 2.6 conditions. Read verdict before continuing. Do NOT declare saturation without SATURATED verdict from evaluator. Follow sat-eval-01-boundary.md for worker action per verdict.
- Every new angle generated: assign number, assign P1/P2/P3/P4, add to RESEARCH_ANGLES.md master tier table immediately. Do not defer.
- **Checkpoint write:** After every 3–4 queries, write current findings to the archive file. Do not hold findings in context — write them to disk before running the next query. If session ends mid-angle, nothing is lost. "I'll write it all at the end" is the failure pattern.
- **Pre-synthesis PCR gate (M-46 — fires before synthesis starts, regardless of angle count):** Before passing any angle outputs to synthesis: confirm post-cluster-review.md was run on ALL completed angles in this cluster. For each angle: either (a) PCR complete (evidence in Section 6 or Section 7 of that angle's task entry), or (b) explicit exception written here: "PCR deferred for [angle] — reason: [reason]; known consequence: [what quality loss this incurs]." Synthesis that starts without this check is not blocked — but a silent skip IS blocked. "I'll do PCR after synthesis" is not acceptable. Applies to: parallel Workflow research, manual recovery after workflow kill, any session where multiple angles completed and PCR state is uncertain.

  After writing the checkpoint, dispatch SAT-EVAL-01:
  - Pass: (a) current archive file, (b) §2.6 conditions verbatim, (c) full query list with per-query new-key counts
  - Read the verdict before continuing any research
  - SATURATED: follow sat-eval-01-boundary.md State 1 (write saturation_verdict + RESIDUAL_LIMITATION to archive; write post-angle note; mark CLOSED; proceed)
  - NOT_SATURATED: follow sat-eval-01-boundary.md State 2 (run suggested queries; write next checkpoint; re-dispatch)
  - Do NOT declare saturation without a SATURATED verdict from the evaluator
  - Evaluator prompt: kit-maker/sat-eval-01-prompt.md
  - Worker action protocol: kit-maker/sat-eval-01-boundary.md

  Required archive field (saturation gate):
    saturation_verdict:
      date: YYYY-MM-DD
      verdict: SATURATED | SATURATED-WITH-CONDITION-WAIVER
      conditions_confirmed: [1, 2, 3, 4]
      evaluator_dispatch: [checkpoint number / query range]
      residual_limitation: "[verbatim from evaluator verdict]"

  An angle cannot be marked CLOSED without this field populated. Self-declared saturation is not valid.

**Adds to Section 6:**
- Saturation verification: does the archive's saturation_verdict field show SATURATED or SATURATED-WITH-CONDITION-WAIVER? If yes: saturation was externally confirmed by SAT-EVAL-01. If no: the angle is not done — re-dispatch the evaluator before marking complete. The RESIDUAL_LIMITATION field must also be present; if missing, re-dispatch to obtain it.
- **Verify pass (required for HIGH-confidence claims):** For each finding you are about to mark HIGH: run at least one explicit refutation query — "[claim] fails because," "[claim] null result," "critique of [claim]," "[claim] limitation." A finding survives as HIGH only if the refutation query returns nothing that materially challenges it. Findings that have not been challenged remain at MEDIUM until a refutation pass runs. Document which refutation queries ran for each HIGH entry.
- **Alternatives gate — first-pass implementation (M-47):** After the first-pass synthesis or implementation output is produced (before verification): generate ≥1 alternative approach with a **different underlying assumption** — not a parameter variation. Choose explicitly. Log: chosen approach (reason), rejected alternative (steelman + reason rejected + dimension where it would have won). Evidence standard: synthesis or implementation output with no documented alternative = observable A1 violation. This mirrors the Compound task type alternatives gate — Research tasks are not exempt.

**Adds to Section 7 (integration close):** (M-05)
- **Post-cluster-review required before marking complete.** If this angle completes a cluster (or is the last angle in a cluster): run post-cluster-review.md BEFORE marking the research task complete. The task is not done until the PCR runs. "I'll do the PCR next" is not the same as completing the research task — it is a separate task that must be queued AND the research task must stay OPEN until the PCR fires. Evidence: "PCR complete: [link/reference]" in Section 6 or Section 7 before task marked complete.
- **Procedure-file modification trigger (M-47 — fires when this research task modified any procedure file):** If this task changed research-quality.md, research-synthesis.md, TASK_TEMPLATE.md, CLAUDE.md, or any kit procedure file: two required actions before closing:
  - [ ] **REVISIT_QUEUE.md methodology timeline:** add a row recording the change (what changed, old behavior → new behavior, scope of impact on past work)
  - [ ] **grounding-map.md:** add or update rows for every design decision this task introduced or changed
  Observable A1 violation: task modifies a procedure file, Section 7 checkbox not present and checked. If no procedure files were modified: mark `- [ ] Procedure-file trigger: N/A — no procedure files modified` and proceed.

### Post-cluster-review (PCR)

**Replaces Section 2 (abbreviated):**
- 2.1: What angles are in this cluster? What archives exist? What is the current state of the relevant kit files?
- 2.2: Is there any finding in this cluster that contradicts an existing procedure? State it.

**Adds to Section 3:**
- Finding-application table: for every HIGH-confidence finding in this cluster's archives: what kit file should reflect it? Does it? If not: why not?

| Finding (claim key) | Evidence tier | Kit file | Applied? | If not: reason |
|--------------------|--------------|----------|----------|----------------|
| | | | | |

**Adds to Section 6:**
- Every HIGH finding: either a kit file reflects it, or an explicit written reason is in the table above. No HIGH finding goes unaddressed without a written reason.

### Synthesis tasks

**Section 0 — Procedure validation check (M-07, M-08):** Before starting any synthesis: "Is the synthesis procedure being applied validated or provisional?"
- If **validated**: proceed.
- If **provisional** (no research backing, recently changed, or applied to a new domain for the first time): label all output from this synthesis run as "provisional — procedure unvalidated" AND queue a procedure-validation angle in RESEARCH_ANGLES.md before producing output. Output can still be used, but downstream tasks must not treat it as fully grounded.
- "I've used this procedure before" is not validation. "The procedure itself has been through a research-backed review" is validation.

**Adds to Section 2.6:**
- **Grouping rule:** Before synthesizing, group all claims by claim key (topic), not by source or angle. A confidence map built source-by-source anchors to whoever wrote the most, not to what is most supported. Claim-key grouping is required before any confidence level is assigned.
- **Evidence-tier conflict resolution:** When two claims on the same key conflict and come from different tiers (e.g., HIGH vs. MEDIUM), resolve to the lower tier unless the higher-tier source has clearly broader methodology. "The HIGH source wins because it's higher" is not resolution — it's anchoring.
- Contradiction audit: which claims in the archives contradict each other? List them before synthesizing.
- Counter-prior pass: plan to run research-synthesis.md Step 3.6 (counter-prior check) before finalizing confidence map. This specifically looks for claims that would update prior beliefs in unexpected directions — it is NOT the same as the contradiction audit.

**Adds to Section 3:**
- Contradiction handling: for each identified contradiction, state how it is classified (contested / one-sided / scope-limited).
- **Dual-pass requirement:** After first-pass synthesis (forward: "what do claims support?"), run a second pass (backward: "what would challenge the confident claims?"). The second pass looks for claims that survived but shouldn't — underweighted findings, narrowly-scoped evidence generalized too broadly. The dual-pass is complete when the second pass finds nothing that changes a confidence level.
- Confidence map completeness: every HIGH entry must have ≥2 independent source types. State this for each HIGH entry before closing.

**Adds to Section 6:**
- Did the confidence map emerge from evidence, or was it constructed backward from a conclusion? Answer this honestly.
- **User-questions scope check:** Are there open user questions (from the domain brief or Phase 2) that synthesis output should have answered but didn't address? A confidence map that only produces kit-procedure inputs is incomplete if user questions remain unanswered. List any open questions and whether synthesis addressed them.

**Adds to Section 7 (M-55 — PCR close gate):**
- **Post-cluster-review on synthesis output (MANDATORY before marking complete):** After synthesis output is produced (confidence map, ENTRYPOINT.md changes, or procedure implications), run post-cluster-review.md on the new synthesis findings before closing this task. State below: "PCR ran on synthesis output: [YES / NO — exception: reason + known consequence]." A task marked complete without this field filled has not satisfied its close requirements. Synthesis output produces findings and design decisions requiring PCR review just as research angle output does.

### Procedure-design / update tasks

**Adds to Section 2.6:**
- Contradiction audit: which existing procedures or rules interact with the proposed change? Does any require opposite behavior?
- What happens if both old and new rules are in effect simultaneously? (transition state)

**Adds to Section 3:**
- Second-order effect check: if this procedure change is applied, what downstream behaviors does it produce beyond the intended one?
- Rule density check: after this change, how many distinct actionable rules exist in the affected file? If approaching 12–15: flag for culling pass before adding more.
- Evidence basis: what research finding supports each element of the procedure? If no research basis: label as "provisional — pending research" with the research angle queued.
- **Intent-encoding verification:** If this task defines a trigger, schedule, or frequency for anything — state the original intent in plain language, then check: "If someone follows this trigger exactly, does it reproduce the intent, or a distorted version?" The encoding is wrong if it fires less often than intended, fires on the wrong condition, or converts a recurring cadence into a one-time gate. Test by running the trigger mentally: does the behavior it produces match the behavior the intent requires? If not: fix the trigger before writing it into any procedure file. Common failure mode: converting "after sufficient progress" (recurring cadence) into "after Phase N completes" (milestone gate, fires once).

**Adds to Section 6:**
- Is the change grounded in research, or is it intuition? Be explicit about which parts have evidence and which are provisional.
- If this task defined a trigger or frequency: re-run the intent-encoding check on the final written version. Does the trigger as written reproduce the intent, or did the encoding drift during writing?

### Audit tasks

**Adds to Section 2:**
- 2.2: What is the concrete fix for this audit item? Do not proceed without one. "Further investigation needed" is not a concrete fix.
- Class identification: is this audit item an instance of a broader class? What other instances might exist?

**Adds to Section 3:**
- The fix must address the root cause, not the symptom. State what the root cause is before writing the fix.
- What other instances of the same class should be checked? List them.

**Adds to Section 6:**
- Did the fix address the root cause? What evidence confirms this?
- Were all instances of the class checked, or only the specific item that surfaced?

### Evaluation / trial-design tasks

**Replaces nothing — all base sections required. Adds:**

**Section 1.1 — Steps 3a, 3b, 3c (required before step 4):**

These are defined in the main Section 1.1 block above. They are not optional for this task type. Do not proceed to step 4 without filling all three.

Failure patterns these checks catch:
- **M-06** (wrong objective): Trial designed to prove kit better, not to diagnose failures. Step 3b would have required naming the decision — "prove superiority" vs. "diagnose failure modes" — and forced choosing the correct one.
- **M-17** (no validity audit): Experiment executed without checking whether the design was capable of producing valid signal. Step 3c requires stating this before building.
- **M-23** (benchmark framing): Trial framed as "how good is the kit?" (benchmark) rather than "what does the kit fail at?" (diagnostic). Step 3b would have required naming the decision the benchmark drives — which would have exposed the framing mismatch.
- **M-25** (wrong goal): Trial designed around issue-finding goal, not autonomous execution goal. Steps 3a and 3b force naming the goal claim and decision explicitly.

**Adds to Section 1.7 (what could go wrong):**

- Standard validity threats: what is the counterfactual condition? Is there one? If no counterfactual condition: the trial is measuring the presence of the intervention, not its effect.
- Confound: what else could explain positive results besides the thing being tested?
- Scale: will this design produce different results at production scale vs. test scale? State explicitly.

**Adds to Section 6:**

- Did the trial produce signal on the goal claim named in Step 3a? If yes: state the updated confidence level. If no: state why (underpowered, wrong condition, confounded) and what the null result tells you.
- Was the anti-benchmark check correct? Did the results actually drive the decision named in Step 3b, or did they become decorative?
- If results were unexpected: fire the mistake-fire rule BEFORE interpreting them. Unexpected results are an immediate mistake-fire trigger, not just an interesting finding.

### Brainstorming / mechanism-design tasks

**Section 1.1 requirement — done-criteria must enumerate both implementation and testing (M-36):**

For any mechanism designed (CLAUDE.md rule, TASK_TEMPLATE gate, behavioral procedure, routing rule), done-criteria must include BOTH:
1. Mechanism implemented: [file:section] where it was written
2. Mechanism tested: passed ≥2 execution-based scenarios

A single aggregated criterion ("mechanism implemented") is invalid because "written to file" ≠ "fires in practice."

**Testing requirement — execution-based, not simulation:**
- Dispatch ≥2 fresh subagent tests per mechanism
- Each test: give the subagent CLAUDE.md and/or TASK_TEMPLATE + a task scenario with the trigger condition embedded
- Observe whether the mechanism fires in actual output (not "would it fire if followed")
- Simulation (agent predicts "rule would fire") does not count — only observed firing in actual output counts
- Record: scenario, expected behavior, actual behavior, PASS/FAIL

**Adds to Section 2.6:**
- Goal-model-first derivation: Step 1 — derive mechanisms from goal model independently; Step 2 — validate/supplement with research; Step 3 — note what research confirmed, contradicted, or missed. Research is input to reasoning, not the output.
- For each mechanism proposed: state which goal model failure mode it addresses. Mechanisms not connected to a specific goal model failure are scope creep.

**After each first-pass design deliverable (M-46):**
Before advancing to the next step: generate ≥1 alternative with a different underlying assumption. Not a parameter variation — a different assumption. Choose explicitly. Log the choice and the rejected alternative in Section 1.4 or inline in the design document. This gate fires at each major deliverable output inside a Compound/mechanism-design task (e.g., design doc, architecture section, algorithm choice), not only at task open (Section 1.4). Skipping this step because "I already did alternatives in Section 1.4" is invalid — Section 1.4 covers the top-level approach; this gate covers each deliverable inside the approach.

**Adds to Section 6:**
- For each mechanism: state which execution scenarios were tested, what the expected behavior was, what was observed, and whether it passed.
- A mechanism with no test results in Section 6 has not been validated — do not report complete.
- If a test FAILS: the mechanism is not done. Fix the mechanism and re-test before closing.

### Narrow-execution tasks

Only Sections 1.1, 1.5, 1.7 (what could go wrong only), 2.1, 3 (full), 4 (full), 5 (full), 6.1, 6.5 (brief), 7 (full) are required.

**Cannot skip:**
- Done-criteria as outcome (not artifact)
- Integration close (Section 7)
- Reading current state of files before touching them

**May abbreviate:**
- Alternatives (1.4): one sentence noting this is a known fix with no real alternatives
- Exploration (2.2, 2.3, 2.4, 2.5): one sentence confirming no significant alternatives or adjacent risks

---

*This template evolves. Every time a task reveals a gap in this template, a template-improvement sub-task is created in plan.md (Section 7 integration close). The template is not the goal — the process it enforces is.*
