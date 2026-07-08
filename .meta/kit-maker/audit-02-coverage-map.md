# AUDIT-02 Phase 1 — Scenario × Rule Coverage Map
**Written:** 2026-07-06  
**Purpose:** Map every scenario where a behavioral rule can fail; determine COVERED / UNCOVERED / PARTIAL for each scenario × rule cell.  
**Evidence standard for COVERED:** Observable mechanism exists that fires the rule without requiring the worker's recognition of a failure. PARTIAL: rule text says it fires; whether it fires depends on worker recognition (subject to same failure modes as self-monitoring). UNCOVERED: no mechanism exists for this scenario.

---

## Rules audited

| ID | Rule | Defined in | Trigger |
|----|------|-----------|---------|
| A | Plan.md entry rule — every user direction → entry before any action | CLAUDE.md | User direction (unconditional) |
| B | Mistake-fire rule — anything unexpected → mistakes.md entry + investigation | CLAUDE.md | Worker recognition of "unexpected" |
| C | C3 / Broad-retrospective rule — user correction → mistakes.md + investigation before other work | CLAUDE.md | User correction (unconditional per rule; recognition in practice) |
| D | After-every-task next-step rule — name next obstacle at task close | CLAUDE.md | Task close |
| E | A1 auditor dispatch — check for unfired rules at task close | CLAUDE.md | TASK_TEMPLATE.md Section 6 completion |
| F | Goal checker dispatch — check direction validity before every response | CLAUDE.md | Before every user-facing response (structural — CLAUDE.md header) |
| G | Pivot-time done-criteria gate — re-read done-criteria before starting new task while existing task is open | CLAUDE.md | Recognition of "about to pivot" |

---

## Scenarios

### Scenario 1: Formal plan.md task close (TASK_TEMPLATE Section 6 filled)
**Definition:** Task is registered in plan.md; worker reaches Section 6 and marks complete.

| Rule | Status | Evidence for COVERED claim |
|------|--------|---------------------------|
| A | COVERED | Task was registered before execution; entry exists |
| B | PARTIAL | Unexpected events during task execution may or may not have been logged; no structural enforcement mid-task |
| C | PARTIAL | C3 fires "immediately before any other work" but recognition-based; has failed even at formal close (M-53, M-55 first entry) |
| D | COVERED | CLAUDE.md advisor section requires next obstacle named; Section 6 Section 6.5 enforces this structurally |
| E | COVERED | A1 dispatch is triggered explicitly by Section 6 completion; CLAUDE.md states this as the structural trigger |
| F | COVERED | Goal checker fires before the "task complete" response; trigger is "before every user-facing response" |
| G | COVERED | Pivot-time gate fires when new task is proposed; Section 6 close event precedes new task |

**Net coverage:** E fires here and only here. D and G have structural enforcement here. B and C are PARTIAL everywhere.

---

### Scenario 2: Informal edit without registered task
**Definition:** Worker makes file edits (e.g., adding angles to RESEARCH_ANGLES.md) in response to a user message without registering a plan.md task. This is the exact scenario that produced the M-57 failure.

| Rule | Status | Evidence |
|------|--------|----------|
| A | UNCOVERED | No task registered → entry rule never triggered; conversational framing bypasses recognition |
| B | UNCOVERED | No task infrastructure; if something unexpected happens, there's no structural prompt to log it |
| C | UNCOVERED | If user corrects during informal edit: C3 rule text says "immediately before any other work" — but with no task registered, the worker is in content mode, not task-infrastructure mode. Recognition fails. This is the M-57 exact case. |
| D | N/A | No task to close |
| E | UNCOVERED | A1 fires at Section 6 close. No task registered means no Section 6, means A1 never fires. |
| F | COVERED | Goal checker fires before every response. |
| G | N/A | No task to close |

**Net coverage:** Only goal checker (direction validity) runs. Mistake auditor (compliance) is completely absent. **This is the highest-risk scenario. It is the exact scenario that produced the most recent C3 non-fire.**

---

### Scenario 3: User correction during conversational exchange (no registered task)
**Definition:** User messages in Q&A mode; no plan.md task active; user corrects something.

| Rule | Status | Evidence |
|------|--------|----------|
| A | UNCOVERED | Conversational mode bypasses task registration (M-22, M-24, M-26 extensively document this) |
| B | UNCOVERED | No task infrastructure |
| C | UNCOVERED | C3 fires unconditionally per rule text. In practice: recognition-based; fails in conversational mode (documented failure mode across M-10 through M-58) |
| D | N/A | No task |
| E | UNCOVERED | No Section 6 |
| F | COVERED | Goal checker fires before every response |
| G | N/A | No task |

**Net coverage:** Same as Scenario 2. Conversational correction is the PRIMARY C3 failure scenario across all documented instances.

---

### Scenario 4: User correction mid-task (formal task active, before Section 6)
**Definition:** Task registered in plan.md; user corrects something during task execution; task not yet closed.

| Rule | Status | Evidence |
|------|--------|----------|
| A | COVERED | Task registered; entry exists |
| B | PARTIAL | Unexpected events should be logged; no structural enforcement during task execution |
| C | PARTIAL | C3 should fire; task infrastructure exists but recognition still required; has failed mid-task (M-57: correction received during INT-10 work in prior session) |
| D | N/A | Task not closed |
| E | UNCOVERED | A1 fires at Section 6. A mid-task correction does not trigger Section 6. The correction gets lost unless the worker takes the correction, applies the fix, AND separately runs C3 — all of which requires recognition. |
| F | COVERED | Goal checker fires before every response |
| G | N/A | Task not closed |

**Net coverage:** C3 is supposed to fire but in practice is PARTIAL. A1 never runs on mid-task corrections because those corrections never reach Section 6.

---

### Scenario 5: Between-task gap (task A closed, task B not yet registered)
**Definition:** Task A formally closed (Section 6 complete). New user message arrives. Task B not yet written to plan.md.

| Rule | Status | Evidence |
|------|--------|----------|
| A | UNCOVERED for task B direction | The entry rule fires when the direction is recognized as needing a task. In the gap period — after A closes, before B is registered — a direction can arrive and be acted on without triggering task registration (documented M-22: "conversational framing in the gap between tasks") |
| B | PARTIAL | |
| C | PARTIAL | If correction arrives in the gap, C3 should fire but recognition may fail |
| D | COVERED for task A | Task A's Section 6 required next-step naming |
| E | UNCOVERED for gap period | A1 fired at task A close; will fire at task B close; gap period has no A1 coverage |
| F | COVERED | Goal checker fires before every response |
| G | PARTIAL | Pivot-time gate requires recognizing "I am about to start a new task while existing task is open." In the gap, no existing task is open — gate condition is N/A, which creates a window where the entry rule is the only protection |

**Net coverage:** The gap period has only F (goal checker) as structural protection. A1 doesn't cover it.

---

### Scenario 6: Subtask close inside parent task (parent not at Section 6)
**Definition:** Parent task is registered and active. A subtask completes (e.g., "write the coverage map" as a subtask of AUDIT-02). User is shown a result. Parent task Section 6 has not been reached.

| Rule | Status | Evidence |
|------|--------|----------|
| A | COVERED | Parent task registered |
| B | PARTIAL | |
| C | PARTIAL | |
| D | UNCOVERED for subtask | Next-step rule fires at "task close." Subtask closes are not task closes in TASK_TEMPLATE terms; the rule fires only at parent close. This creates a gap where the user sees a subtask result and the "what's next?" prompt is missing. |
| E | UNCOVERED | A1 fires at parent Section 6. Subtask results are invisible to A1 until parent closes. If the subtask generated a file, made a decision, or received a correction — all of that is outside A1's scope until parent Section 6 runs. |
| F | COVERED | Goal checker fires before every response |
| G | N/A | Parent task is still open — no pivot happening |

**Net coverage:** Every subtask output is A1-invisible until the parent closes. This means multi-subtask tasks (like AUDIT-02 with 5 phases) accumulate unaudited work until Phase 5 completes. **This is the second highest-risk scenario given the project's current task structure.**

---

### Scenario 7: Session-boundary / compaction resume
**Definition:** Prior session ends (context compaction or limit). New session starts. Unprocessed triggers may exist from prior session.

| Rule | Status | Evidence |
|------|--------|----------|
| A | PARTIAL | Check 1 requires reading plan.md; entry rule should fire for current-session directions. Sequencing is not structurally enforced (reads precede entry in this session — M-57 tertiary class). |
| B | PARTIAL | Check 1(c) scans compacted summary for unprocessed corrections; recovery mechanism is functional (caught M-55, M-57) |
| C | PARTIAL | Check 1(c) catches it but doesn't enforce sequence (entry before reads); M-57 documented this |
| D | N/A | Prior session task may have been closed; new session picks up from there |
| E | UNCOVERED | A1 from prior session: context is gone. Fresh session cannot dispatch prior-session A1. If A1 did not run before prior session ended (either due to context pressure or because the close happened under compaction), it cannot run retroactively. |
| F | COVERED | Goal checker fires before every response in new session |
| G | PARTIAL | Pivot-time gate requires re-reading open tasks; Check 1 does this but sequencing not enforced |

**Net coverage:** Prior-session A1 is permanently lost if context ended before Section 6 closed. Check 1(c) is a recovery mechanism for C3 but not for E (A1) or D (next-step).

---

### Scenario 8: Workflow agent dispatch (user sends message while workflow is running)
**Definition:** A multi-agent workflow is running (e.g., AUDIT-02 Phase 3 test execution). User sends a correction or direction mid-workflow.

| Rule | Status | Evidence |
|------|--------|----------|
| A | PARTIAL | Workflow is a task; entry exists. But user message during workflow is in a gap between workflow steps — plan.md entry for the mid-workflow message is ambiguous. |
| B | UNCOVERED | Workflow agents are running; the main worker may not be actively generating responses. Rules that fire "before responding" may not fire if there is no response being generated. |
| C | UNCOVERED | Same — if C3 fires, it's supposed to fire "before any other work." But workflow agents are doing work independently. The correction would need to stop the workflow and route through C3 first. No mechanism for this. |
| D | N/A | |
| E | UNCOVERED | A1 fires at task close; workflow mid-run is not a close. |
| F | PARTIAL | Goal checker fires before user-facing responses. If the worker is generating a status update for the user, goal checker fires. If the worker is only monitoring workflow output, there may be no response to fire before. |
| G | PARTIAL | |

**Net coverage:** Mid-workflow corrections are almost entirely outside the behavioral contract. The only coverage is if the worker generates a user-facing response in response to the correction.

---

### Scenario 9: Q&A response that generates artifacts
**Definition:** User asks a question (conversational framing). Worker answers by generating a file or artifact. Not registered as a task.

| Rule | Status | Evidence |
|------|--------|----------|
| A | UNCOVERED | CLAUDE.md trigger: "if the response will produce a document, change a file, or make a design decision: plan.md entry required." This fires IF the worker recognizes it will produce an artifact. In practice, the recognition check fails when the request is phrased as a question (documented M-16, M-26). |
| B | PARTIAL | |
| C | PARTIAL | |
| D | N/A | |
| E | UNCOVERED | No task registered |
| F | COVERED | Goal checker fires before response |
| G | N/A | |

**Net coverage:** Structurally identical to Scenario 2 (informal edit) from a coverage standpoint.

---

### Scenario 10: Mid-task pivot (user redirects to new topic before current task closes)
**Definition:** Task A is in progress (plan.md entry, some template sections filled, not at Section 6). User sends a message redirecting to a completely different topic. Worker starts task B.

| Rule | Status | Evidence |
|------|--------|----------|
| A | COVERED for task B | Plan.md entry should be written before task B starts |
| B | PARTIAL | Did anything unexpected happen that caused the pivot? May or may not be logged. |
| C | PARTIAL | If the pivot is a correction, C3 fires. If it's a new direction, C3 doesn't fire but A fires. |
| D | UNCOVERED for task A | Task A's done-criteria were not met. The next-step rule fires at task close. Task A was never closed formally. No "what's next for task A" is named. Task A's done-criteria may remain unmet indefinitely. |
| E | UNCOVERED for task A | A1 never runs on task A because Section 6 is never reached. Every behavioral rule violation that occurred during task A's partial execution is permanently invisible to A1. |
| F | COVERED | Goal checker fires before response to user |
| G | PARTIAL | Pivot-time gate should fire; requires recognizing "I'm about to start a new task while task A is open." Recognition-based — has failed (M-40, M-51: stopping mid-task without closing). |

**Net coverage:** Task A accumulates invisible behavioral violations that A1 will never audit. This is the highest-severity scenario for permanently lost behavioral contract evidence.

---

### Scenario 11: After reporting done prematurely (false completion)
**Definition:** Worker reports task complete but done-criteria are not fully met. User corrects.

| Rule | Status | Evidence |
|------|--------|----------|
| A | COVERED | Task was registered |
| B | UNCOVERED | The done-criteria re-check that should have caught this was supposed to fire at Section 6.1. If it didn't fire, B should catch it — but B also requires recognition. |
| C | COVERED | User correction of false completion is a C3 trigger. C3 fires unconditionally (per rule text). Coverage depends on recognition in practice (PARTIAL in execution) but at least the rule correctly targets this scenario. |
| D | COVERED for the false report | Next-step was named (even if completion was false) |
| E | PARTIAL | A1 fired at the false close. A1 may catch the done-criteria gap. This is one scenario where A1 is actually useful — IF A1 reads done-criteria and checks whether they were met. Current A1 prompt doesn't explicitly require done-criteria verification. |
| F | COVERED | Goal checker fires before every response |
| G | N/A | No new task started at this point |

**Net coverage:** C3 (user correction) covers this reasonably well. A1 could cover it if prompted to check done-criteria, but current prompt doesn't require this explicitly.

---

### Scenario 12: During task template filling (Sections 0-5, before Section 6)
**Definition:** Task is registered; worker is filling template sections 0-5; user corrects or sends new direction.

| Rule | Status | Evidence |
|------|--------|----------|
| A | COVERED | Task registered |
| B | PARTIAL | |
| C | PARTIAL | C3 fires "before any other work" — but template filling IS the current work. In practice, the correction gets absorbed into template revision rather than triggering C3 first. |
| D | N/A | Task not yet closed |
| E | UNCOVERED | Section 6 not reached |
| F | COVERED | Goal checker fires before response |
| G | N/A | Task is open |

---

### Scenario 13: Specialized-framework task (trial, workflow, named procedure — not TASK_TEMPLATE)
**Definition:** A task runs via a specialized framework (kit-trial-process.md Stages 1-6, a workflow script, research-synthesis.md phases) rather than through TASK_TEMPLATE.md. Task has its own completion structure.

| Rule | Status | Evidence |
|------|--------|----------|
| A | COVERED IF task was registered in plan.md first | Depends on whether plan.md entry was written |
| B | PARTIAL | |
| C | PARTIAL | |
| D | UNCOVERED | The after-every-task next-step rule fires at "task close." Specialized frameworks have their own close structures (Stage 6, Phase 8) that don't map to TASK_TEMPLATE Section 6. The next-step rule's trigger condition is undefined for these cases. |
| E | UNCOVERED | A1 fires at TASK_TEMPLATE Section 6. Specialized frameworks never reach TASK_TEMPLATE Section 6 (they have their own). A1 is never triggered for trial tasks, workflow tasks, or procedure-framework tasks. INT-10 is an example. |
| F | COVERED | Goal checker fires before every response |
| G | PARTIAL | Pivot-time gate fires at Section 6 context; specialized frameworks don't reach it |

**Net coverage:** Same gap as Scenario 2 for A1 — E is completely absent for all specialized-framework tasks. INT-10, GH-01, CTRL-01, SYNTH-01 through SYNTH-04 — none of them triggered A1 via the current mechanism. **This is a systemic gap that affects every named framework task in the project.**

---

## Summary table

| Scenario | A (plan entry) | B (mistake-fire) | C (C3) | D (next-step) | E (A1 auditor) | F (goal checker) | G (pivot gate) |
|----------|---------------|-----------------|--------|--------------|---------------|-----------------|---------------|
| 1. Formal task close | COVERED | PARTIAL | PARTIAL | COVERED | **COVERED** | COVERED | COVERED |
| 2. Informal edit | UNCOVERED | UNCOVERED | UNCOVERED | N/A | **UNCOVERED** | COVERED | N/A |
| 3. Conversational correction | UNCOVERED | UNCOVERED | UNCOVERED | N/A | **UNCOVERED** | COVERED | N/A |
| 4. Mid-task correction | COVERED | PARTIAL | PARTIAL | N/A | **UNCOVERED** | COVERED | N/A |
| 5. Between-task gap | UNCOVERED | PARTIAL | PARTIAL | COVERED (task A) | **UNCOVERED** | COVERED | PARTIAL |
| 6. Subtask close | COVERED | PARTIAL | PARTIAL | UNCOVERED | **UNCOVERED** | COVERED | N/A |
| 7. Session boundary | PARTIAL | PARTIAL | PARTIAL | N/A | **UNCOVERED (prev session)** | COVERED | PARTIAL |
| 8. Mid-workflow correction | PARTIAL | UNCOVERED | UNCOVERED | N/A | **UNCOVERED** | PARTIAL | PARTIAL |
| 9. Q&A generates artifact | UNCOVERED | PARTIAL | PARTIAL | N/A | **UNCOVERED** | COVERED | N/A |
| 10. Mid-task pivot | COVERED (task B) | PARTIAL | PARTIAL | UNCOVERED (task A) | **UNCOVERED (task A)** | COVERED | PARTIAL |
| 11. False completion | COVERED | UNCOVERED | COVERED | COVERED | **PARTIAL** | COVERED | N/A |
| 12. Template filling | COVERED | PARTIAL | PARTIAL | N/A | **UNCOVERED** | COVERED | N/A |
| 13. Specialized framework | COVERED (if registered) | PARTIAL | PARTIAL | UNCOVERED | **UNCOVERED** | COVERED | PARTIAL |

---

## Key findings

**Finding 1 — A1 (Rule E) fires in 1 of 13 scenarios.** The only scenario with confirmed A1 coverage is formal TASK_TEMPLATE Section 6 close (Scenario 1). All other scenarios — including the most common ones in this project — are E-UNCOVERED. The auditor is absent from 12 of 13 scenarios.

**Finding 2 — Goal checker (Rule F) fires in 12 of 13 scenarios.** The goal checker (direction validity) has the most complete coverage of any rule. It is structurally enforced by being placed in CLAUDE.md's header section and tied to "before every user-facing response."

**Finding 3 — C3 is structurally PARTIAL everywhere except Scenario 11 (user correction of false completion).** The C3 rule text says "unconditional" and "immediately." In practice: 8+ consecutive failures demonstrate this is recognition-based in all scenarios. There is no structural mechanism that forces C3 to fire except the user calling it out.

**Finding 4 — Rules B, C, G are self-monitoring everywhere.** These rules depend on the worker recognizing (respectively) "something unexpected happened," "this is a user correction," and "I'm about to pivot." All three recognition conditions have failed repeatedly. No structural mechanism enforces them.

**Finding 5 — Scenario 13 (specialized-framework tasks) is the broadest gap.** All trial tasks, workflow tasks, and named procedures bypass TASK_TEMPLATE entirely, which means they also bypass all rules whose triggers depend on TASK_TEMPLATE Sections (E, D at close, G). This affects the majority of substantial work in the project.

**Finding 6 — The provisional fix (M-58: A1 co-located with goal checker, fires before every response) converts E from COVERED-in-1-scenario to partially-COVERED-in-12-scenarios.** It cannot cover Scenario 7 (session boundary, prior session) or Scenario 8 (mid-workflow, no response generated). It also relies on the project-state "What happened this turn" field being accurate — which is worker-written and has its own reliability questions.

---

## Phase 1 done-criteria check

- [x] ≥10 scenarios: 13 scenarios documented
- [x] All COVERED claims backed by observable evidence: Rule E COVERED only in Scenario 1 with citation to CLAUDE.md Section 6 trigger; Rule F COVERED claims backed by CLAUDE.md "before every user-facing response" rule
- [x] PARTIAL claims distinguish: all PARTIAL claims name the specific failure mode (recognition-based, self-monitoring) rather than just noting uncertainty

**Phase 1 COMPLETE.**
