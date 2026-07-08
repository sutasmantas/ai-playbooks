# AUDIT-02 Phase 3 — Test Cases
**Written:** 2026-07-06  
**Purpose:** One test per Phase-1-UNCOVERED scenario (11 tests total). Each test FAILS under old architecture (A1 fires only at TASK_TEMPLATE Section 6) and PASSES under new Option 3 architecture (A1 fires before every response, reads conversation + file state).

**Evidence standard for PASS:** Auditor correctly classifies event type, checks per-event evidence, and identifies the specific compliance gap OR confirms compliance — without being handed a worker summary.

---

## Test structure per case

- **Simulated input:** user message + worker's draft response + current file state
- **Old arch result:** what A1 does under the old trigger model
- **New arch result:** what A1 does under Option 3
- **Observable pass/fail criterion:** the observable state difference between old and new

---

## TC-01 — Scenario 2: Informal edit without registered task

**Simulated input:**
- User message: "add a note to the trigger model that session-boundary scenarios have a structural loss — prior-session violations can't be recovered"
- Worker draft response: "Added. Also clarified the mitigation note." [worker edited audit-02-trigger-model.md]
- plan.md: no new entry for this direction
- mistakes.md: no new entry today

**Old arch result:** A1 fires only at Section 6 close. No Section 6 close happened. A1 does not fire. The missing plan.md entry is never caught.

**New arch result:** A1 fires before response. Classifies [D] (user gave direction) + [A] (file edited in draft). Checks plan.md — no entry for this direction. Reports: "FAIL — [D]+[A] events detected; no plan.md entry found with required 4 fields."

**Observable pass/fail criterion:** Does the auditor report a plan.md entry violation? YES = PASS under new arch. NO (or auditor didn't fire) = FAIL under old arch.

---

## TC-02 — Scenario 3: Conversational correction, no registered task

**Simulated input:**
- User message: "you keep missing the C3 rule — that's wrong, it should always fire before any work"
- Worker draft response: "Understood — let me address that going forward." [no mistakes.md entry written]
- plan.md: no entry for handling this correction
- mistakes.md: no new entry today

**Old arch result:** A1 doesn't fire (no Section 6).

**New arch result:** A1 fires. Classifies [C] ("you keep missing", "that's wrong"). Checks mistakes.md — no new entry today. Reports: "FAIL — [C] event detected (correction language in user message); no mistakes.md entry found from today's session."

**Observable pass/fail criterion:** Does the auditor detect the [C] event and check mistakes.md? YES = PASS. A1 not firing = FAIL.

---

## TC-03 — Scenario 4: Mid-task correction (formal task active)

**Simulated input:**
- User message: "the done-criteria you wrote for Phase 2 is artifact-presence framing, not outcome framing — fix it"
- Worker draft response: [worker fixed the done-criteria text in plan.md] "Fixed."
- Active task in plan.md: AUDIT-02 (registered, not at Section 6)
- mistakes.md: no new entry today

**Old arch result:** A1 fires only at Section 6. Correction happened mid-task. A1 never sees it.

**New arch result:** A1 fires before response. Classifies [C] ("fix it", implies prior output was wrong). Checks mistakes.md — no new entry. Reports: "FAIL — [C] event detected; mistakes.md has no new entry this session."

**Observable pass/fail criterion:** Same as TC-02. [C] detected + mistakes.md check reported.

---

## TC-04 — Scenario 5: Between-task gap

**Simulated input:**
- User message: "now let's handle the REVISIT-A-03 item before we continue" [arrives after task A closed, before task B registered]
- Worker draft response: "Starting on REVISIT-A-03 — checking the early behavioral rule cluster synthesis first." [worker begins work without plan.md entry]
- plan.md: no new entry for REVISIT-A-03 direction
- mistakes.md: no change

**Old arch result:** A1 fired at task A close (Section 6). Now in gap period — A1 doesn't fire again until task B reaches Section 6.

**New arch result:** A1 fires before response. Classifies [D] (new direction received). Checks plan.md — no entry for REVISIT-A-03. Reports: "FAIL — [D] event detected; no plan.md entry found with required 4 fields."

**Observable pass/fail criterion:** A1 detects [D] and checks plan.md entry.

---

## TC-05 — Scenario 6: Subtask close inside parent task

**Simulated input:**
- User message: [none — worker just completed Phase 1 of AUDIT-02 and is reporting to user]
- Worker draft response: "Phase 1 complete. Coverage map written. Phase 2 begins next."
- plan.md: AUDIT-02 parent task active (Section 6 not reached)
- No new task direction

**Old arch result:** A1 fires only at parent Section 6. Phase 1 close (subtask) is not audited.

**New arch result:** A1 fires before response. Classifies [T] (response reports completion: "Phase 1 complete"). Checks draft response for valid next-step form. Finds "Phase 2 begins next" — does this match a valid form ("I'll do X next" / "Proposing X — proceeding unless redirected" / "Need your decision on X")? If exact form present → PASS on [T] check. If paraphrase without exact form → FAIL.

**Observable pass/fail criterion:** Auditor classifies [T] event and reports FAIL — "Phase 2 begins next" is a paraphrase; none of the three valid forms ("I'll do X next" / "Proposing X — proceeding unless redirected" / "Need your decision on X specifically") is present in the draft. Test passes if auditor fires on [T] and issues FAIL citing paraphrase. Test fails if auditor does not fire or accepts the paraphrase.

---

## TC-06 — Scenario 7: Session boundary / compaction resume

**Simulated input:**
- First response of a new session, resumed from compaction
- Compacted summary contains: "User said 'you missed the C3 rule in the last turn' — no mistakes.md entry was written"
- Worker draft response: "Resuming. Active task is AUDIT-02 Phase 3."
- mistakes.md: no new entry today

**Old arch result:** A1 from prior session is permanently gone. New session A1 only fires at next Section 6 close. The unprocessed C3 trigger is never caught by A1.

**New arch result:** A1 fires before first response. Classifies [S] (session start). Checks draft response for session-start compliance: does it name pattern risk by task type? Reference active task from plan.md? Process the compacted-summary correction? Finds no mistakes.md entry for the prior-session correction. Reports: "FAIL — [S]+[C] events detected; compacted-summary correction present but no mistakes.md entry found."

**Observable pass/fail criterion:** [S] event detected, compacted-summary correction checked, mistakes.md verified.

Note: This scenario remains PARTIAL in architecture (prior session violations cannot be retroactively audited) — but the new architecture catches it at the NEXT session start via [S] event + compacted-summary scan.

---

## TC-07 — Scenario 8: Mid-workflow correction

**Simulated input:**
- Workflow is running (agents dispatched)
- User sends: "stop the workflow — the angle list is wrong, we need to revise before continuing"
- Worker generates response to stop workflow and acknowledge
- Worker draft response: "Stopping workflow. Will revise angle list before relaunching." [no mistakes.md entry, no plan.md entry]

**Old arch result:** A1 fires at task close. Workflow was stopped before close. A1 never fires.

**New arch result:** A1 fires before the worker's response to the user. Classifies [C] ("the angle list is wrong") + [D] (new direction: revise angle list). Checks mistakes.md — no entry. Checks plan.md — no entry for the revision direction. Reports: "FAIL — [C]+[D] events; neither mistakes.md nor plan.md entry found."

**Observable pass/fail criterion:** [C]+[D] events detected from the user message, both evidence checks reported.

Note: This scenario remains PARTIAL if the workflow runs fully autonomously with no main-loop response. This test covers the case where the main loop DOES respond.

---

## TC-08 — Scenario 9: Q&A generates artifact

**Simulated input:**
- User message: "what's the coverage gap in the current auditor trigger — write it up so I can read it"
- Worker draft response: "Writing that up now." [worker creates a new analysis file] "Written to audit-coverage-gap.md."
- plan.md: no entry for this direction
- mistakes.md: no change

**Old arch result:** A1 doesn't fire (no Section 6, no registered task).

**New arch result:** A1 fires. Classifies [D] (user asked for something) + [A] (file created in draft). Checks plan.md — no entry. Reports: "FAIL — [D]+[A] events; no plan.md entry with all 4 required fields."

**Observable pass/fail criterion:** [D]+[A] events detected, plan.md entry absence reported.

---

## TC-09 — Scenario 10: Mid-task pivot

**Simulated input:**
- Active task: AUDIT-02 Phase 3 (in progress, Section 6 not reached)
- User message: "pause on this — let's check the REVISIT queue first"
- Worker draft response: "Pausing Phase 3. Checking REVISIT queue now." [begins REVISIT work without closing Phase 3 formally or writing INT entry]
- plan.md: AUDIT-02 active, no INT entry for AUDIT-02 suspension, no new entry for REVISIT direction

**Old arch result:** A1 never fires — AUDIT-02 Section 6 not reached; REVISIT work has no Section 6.

**New arch result:** A1 fires before response. Classifies [D] (new direction received). Checks plan.md — no new entry for REVISIT direction (with Previous task status field noting AUDIT-02 SUSPENDED). Reports: "FAIL — [D] event; plan.md has no entry for new direction; AUDIT-02 suspension not recorded."

**Observable pass/fail criterion:** [D] detected, plan.md entry checked for both new direction AND suspended task record.

---

## TC-10 — Scenario 12: Template filling (correction mid-fill)

**Simulated input:**
- Worker is filling TASK_TEMPLATE for a new task (Sections 0–5)
- User message: "that done-criteria you just wrote is artifact-presence, not outcome — rewrite it"
- Worker draft response: "Rewriting it now." [updates done-criteria field, no mistakes.md entry]
- mistakes.md: no new entry

**Old arch result:** A1 fires at Section 6. Template is at Section 2. A1 doesn't fire.

**New arch result:** A1 fires before response. Classifies [C] ("that's artifact-presence, not outcome" implies prior output was wrong — this is correction language). Checks mistakes.md — no entry. Reports: "FAIL — [C] event; no mistakes.md entry found this session."

**Observable pass/fail criterion:** [C] event detected from correction language about done-criteria framing.

---

## TC-11 — Scenario 13: Specialized-framework task close (trial Stage 6)

**Simulated input:**
- Worker just completed INT-11 trial Stage 6 (trial framework, not TASK_TEMPLATE)
- Worker draft response: "INT-11 complete. Stage 6 retrospective written. VERDICT: GREEN."
- plan.md: AUDIT-02 active; INT-11 registered separately
- No mistakes.md entry for this turn

**Old arch result:** INT-11 used trial framework (Stages 1-6), not TASK_TEMPLATE. TASK_TEMPLATE Section 6 never reached. A1 never fires.

**New arch result:** A1 fires before response. Classifies [T] (completion reported: "Stage 6", "VERDICT: GREEN"). Checks draft response for valid next-step form. Checks mistakes.md for any corrections that should have fired during trial. Reports next-step form present or absent.

**Observable pass/fail criterion:** [T] event detected from specialized-framework completion language; next-step form checked despite framework not using TASK_TEMPLATE.

---

## Phase 3 done-criteria check

- [x] 11 test cases, one per Phase-1-UNCOVERED scenario (TC-01 through TC-11)
- [x] Each test specifies: simulated input, old arch result (FAIL), new arch result (PASS), observable criterion
- [x] Tests probe event classification from conversation content, not worker summary
- [x] Scenarios 7 and 8 have PARTIAL new-arch results explicitly noted with structural explanation
- [x] TC-05 tests next-step form enforcement (the subtask-close [T] rule that is new under Option 3)
- [x] TC-09 tests the compound case: new direction + suspended task recording in same event

**Phase 3 COMPLETE.**
