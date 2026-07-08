# Blocking Protocol

**Status:** INT-07-C output  
**Written:** 2026-07-04  
**Companion:** `goal-checker-architecture.md` (authority model, escalation path)

This document defines the exact mechanics for every goal checker output state. The architecture document covers what happens at a high level; this document covers what the worker does, what format appears, and how each state is verified.

---

## State 1: Hard block

### Trigger

Goal checker outputs HARD BLOCK — specific flaw identified, direction will fail the goal or actively set it back.

### Worker action (in order)

**First: determine block class — resolvable or unresolvable.**

A hard block is **resolvable** if ALL of:
- The fix requires no user judgment (no scope decision, no irreversible action, no information only the user has)
- The fix is a language clarity, scope clarification, or procedure gap the worker can close inline
- The fix can be verified without user input

A hard block is **unresolvable** if ANY of:
- The fix requires the user to make a scope or direction decision
- The action being blocked is irreversible
- The fix requires information only the user has

**Resolvable block path:**
1. Apply the inline fix (language, scope clarification, procedure gap)
2. Log in project-state.md "What happened this turn": "Goal checker hard block (Angle X) — resolved inline: [one sentence on what was fixed]"
3. Re-run goal checker on the fixed state
4. If passes: deliver original response (with inline fix applied)
5. If re-blocks: block is not actually resolvable — escalate to unresolvable path

**Unresolvable block path:**
1. Do NOT send the drafted response
2. Discard the drafted response entirely — do not use it as partial content
3. Send the block message to user (format below)
4. Wait for user resolution — no execution until user responds

**Why this distinction (M-60 — 2026-07-06):** The original protocol had no resolvable path, causing the worker to surface language-clarity fixes to the user as decision items — violating the autonomous continuation rule and the "make the call" principle. Resolvable fixes are within the worker's domain; unresolvable blocks genuinely require the user.

### Hard block message format

```
GOAL CHECKER HARD BLOCK

[Specific flaw — one paragraph, concrete. What exactly is wrong and why it fails the goal. No hedging.]

Work has stopped.

To continue, choose one:
- Redirect: [one-sentence description of what a valid alternative direction looks like]
- Override with stated reason: work resumes; your reason is logged as a calibration data point
- Confirm block correct: task suspended; root cause investigation begins
```

The "Redirect" line is the goal checker's proposed alternative. If the goal checker identified no valid alternative (the task itself is wrong), omit the redirect line and say so explicitly.

### Evidence standard

A hard block was handled if and only if: (a) the hard block message appears in the transcript before any task execution in the same turn, and (b) no further task execution occurred in the same turn after the block message.

### User resolution paths

**User redirects:**
- Worker receives new direction
- Writes project-state with new direction as active task
- Goal checker fires again before the first response in the new direction

**User overrides:**
- User states their reason
- Worker logs the override (see State 4: Override logging)
- Worker resumes with the original direction
- Work proceeds — override does not grant immunity from future goal checker blocks on the same task

**User confirms block correct:**
- Task is suspended — added to plan.md INTERRUPTED stack
- Root cause investigation begins: what design failure produced this direction?
- Investigation is a new task, not continuation of the suspended one

### Recovery path if protocol is skipped

If a worker responds to a hard block message by proceeding with task execution instead of waiting for user resolution: this is a hard protocol violation. Fire C3 immediately (user sees a block; proceeding without resolution is an implicit correction of a constraint). Log to mistakes.md. Stop. Surface to user.

---

## State 2: Soft challenge

### Trigger

Goal checker outputs SOFT CHALLENGE — specific concern identified; not certain to fail the goal but warrants explicit acknowledgment before work proceeds.

### Worker action (in order)

1. Send the response (soft challenge does not stop delivery)
2. The response MUST contain an acknowledgment block immediately before the response content
3. After acknowledging, either adjust direction or proceed with stated reason — both are valid; silent ignoring is not

### Acknowledgment block format (appears at top of response)

```
Soft challenge acknowledged — [angle name]:

[One sentence: what the challenge was]

[Disposition: one of two options]
- "Adjusting direction: [what changes]" — if the challenge reveals a real problem
- "Proceeding: [stated reason] — [one sentence the user should know about the risk]" — if the worker disagrees but proceeds
```

The disposition line is the load-bearing element. If the challenge identified a real flaw: name what changes. If proceeding despite the challenge: name why, and name the risk.

### Carry-forward to next turn

The worker's project-state "What happened this turn" field must include:

```
Soft challenge from prior turn: [challenge name]. Acknowledged as: [disposition]. [One sentence on what changed or what risk was accepted.]
```

This allows the goal checker on the next turn to verify the challenge was genuinely addressed, not verbally acknowledged and then quietly ignored.

### Evidence standard

A soft challenge was handled if and only if: (a) an acknowledgment block appears at the top of the response before task content, and (b) the project-state "What happened this turn" on the following turn references the challenge and its disposition.

### Recovery path if protocol is skipped

If a soft challenge is not acknowledged in the response: this is a rule violation. On the next turn, project-state will show no acknowledgment. The goal checker on that turn applies failure-pattern match: silent soft challenge = behavioral contract decay. Hard block fires.

**Retroactive addressing — exact mechanic (unblock condition):**

1. Prepend the standard acknowledgment block (same format as above) to the current response — the missed acknowledgment is written now, even though the response it belongs to is past
2. Update project-state "What happened this turn" to include: "Retroactive acknowledgment of [prior soft challenge]: [disposition]. Missed in prior turn — added now."
3. The goal checker re-runs on this response; it reads the retroactive entry in project-state and verifies the acknowledgment block is present
4. If the retroactive acknowledgment satisfies the evidence standard: block clears; work resumes
5. If it doesn't (acknowledgment block missing or disposition absent): goal checker re-blocks; repeat from step 1

The retroactive path uses the same format and evidence standard as the normal path. The only difference is timing — the acknowledgment is late, not absent.

---

## State 3: No critical flaw found

### Trigger

Goal checker runs full adversarial check and cannot identify a critical flaw.

### Worker action

1. Send the response unchanged
2. No annotation shown to user (no noise on routine turns)
3. Goal checker's output is logged internally (project-state "Last attack angle used" field updated)

### What the goal checker output must contain

"No critical flaw found" is NOT valid output alone. The output must include:

```
NO CRITICAL FLAW FOUND

Attacks attempted:
- [Angle name]: [what was looked for] — [why it didn't hold]
- [Angle name]: [what was looked for] — [why it didn't hold]
[... for each angle attempted]
```

Without the enumeration, "no critical flaw" is not evidence the check ran — it is silence dressed as a verdict.

### Evidence standard

No-flaw-found was genuine if: enumeration of attacks appears in the goal checker's output AND each entry names a concrete search (not "looked for general problems") AND each entry names why the attack did not hold (not "none found").

### Recovery path if goal checker produces empty no-flaw output

If the goal checker outputs "No critical flaw found" without enumeration: treat it as a prompt failure. Re-run the goal checker with an explicit instruction: "Your output must enumerate each attack angle attempted and why it failed to hold. 'No flaw found' alone is not valid output."

---

## State 4: Override

### When an override applies

Override is valid when: a goal checker hard block is structurally impossible to resolve without either (a) circular validation, (b) external data not available, or (c) explicit user authorization. Override is NOT valid as a shortcut when the goal checker's concern is inconvenient.

### Before applying override — required sequence (in order)

These steps must complete BEFORE any override is logged. The logging step below is not reached until all three are done.

1. **Write a mistakes.md entry for the blocked concern.** Required fields:
   - What the goal checker blocked
   - Why the worker is considering override rather than compliance
   - Class: which pattern from mistakes.md Pattern Summary does this fit? Name the class explicitly.

2. **Run the 5-question investigation (TASK_TEMPLATE.md Section 5.3):**
   - Q1: What does this reveal about my overall process?
   - Q2: What else might be wrong that I'm not seeing?
   - Q3: TEST — state a problem a broad review would surface DIFFERENT from the obvious one
   - Q4: If the same class appeared before — what was inadequate about the previous fix?
   - Q5: Does this failure class suggest a research gap? If yes → write angle + draft query to RESEARCH_ANGLES.md. If no → state where the procedure gap is fixed.

3. **Feed the class from Q1–Q3 into the override reason field.** The override log entry is not valid if the reason field names only the domain-level justification ("circular validation," "external data") without naming the mistake class the concern represents.

### Evidence standard for pre-log steps

The investigation ran if and only if: (a) a mistakes.md entry for the blocked concern exists with a class named, and (b) the override reason field in goal-checker-calibration.md names that class. A1 checks both at task close. An override entry whose reason field contains no class identifier has not satisfied this requirement.

### Override logging (mandatory)

**Immediate log — project-state.md "Major decisions" field:**

```
Override [date]: [what was blocked] — class: [mistake class from investigation] — reason: [one sentence on why override applies]. Limitation: [one sentence on what the override leaves unresolved].
```

**Permanent log — goal-checker-calibration.md "Override log" section:**

One-line entry format:
```
[Date] — [Task ID] — [what was blocked] — [mistake class: CLASS] — [override reason] — [outcome: pending/validated/goal-checker-was-right]
```

"Outcome" is filled in at task close by A1 (see calibration feedback below).

### What override does NOT grant

- Override does not prevent future goal checker blocks on the same task
- Override does not prevent A1 from flagging the override at task close
- Override does not reset the calibration trigger counter

### Recovery path if override is not logged

If an override was applied but not logged: this is a tracking failure of class Pattern A (execution without integration). Log it retroactively. The logging requirement exists because override patterns are calibration data — an unlogged override breaks the calibration trigger.

---

## State 5: Calibration feedback

This state is not a goal checker output — it is a retrospective process that runs at task close, triggered by A1.

### Trigger

A1 runs at formal task close (TASK_TEMPLATE Section 6). If any override was logged during the task: A1 assesses outcome.

### A1 outcome assessment

A1 asks: did the problem the goal checker predicted materialize during the task?

- **Validated:** Direction reached done-criteria without the predicted problem appearing. Mark override entry outcome as "validated."
- **Goal-checker-was-right:** The predicted problem appeared — direction failed, done-criteria was not met, or a related problem emerged. Mark override entry outcome as "goal-checker-was-right." This is a calibration data point that the worker's override judgment was wrong — not a mistake in itself, but a signal for retrospective.

### Calibration trigger (from architecture doc — reproduced here for enforcement)

After 3 consecutive hard blocks with no override later proven wrong: goal checker prompt review (too aggressive).

After 3 consecutive overrides with no override later proven wrong: goal checker prompt review (too weak — worker is systematically overriding valid challenges).

**"Consecutive" means:** 3 in a row within the override log without an intervening "validated" or "goal-checker-was-right" outcome that broke the streak.

**Review process:** Read the last 3 override or block log entries. Ask: is there a systematic pattern in what the goal checker is blocking or the worker is overriding? If yes, revise the goal checker prompt toward better calibration. If no pattern: individual variation; no change needed.

---

## Edge cases

### Goal checker fires on the goal checker's own output

This cannot happen — the goal checker reads project-state only, not its own output. The goal checker cannot block the worker's acknowledgment of the goal checker.

### Soft challenge arrives at task close (A1 also running)

Sequential order: A1 fires first on completed task work. Worker then generates "task complete" response. Goal checker fires on that response. If goal checker issues soft challenge: worker must acknowledge before the "task complete" is delivered. If goal checker hard-blocks: task is not closed; worker resumes task work to address the block.

### Two soft challenges in consecutive turns

Each must be independently acknowledged. The fact that a prior soft challenge was acknowledged does not discharge the acknowledgment obligation for a new one. Project-state must carry forward both acknowledgments.

### Worker receives hard block when no valid redirect exists

This indicates the task itself is wrong, not just the current direction. Valid response: override with reason "task-level problem, not direction-level — user decision required" + escalate to user for task scope decision. This is not a normal override (direction was wrong) — it is a scope escalation (the task as framed is wrong).
