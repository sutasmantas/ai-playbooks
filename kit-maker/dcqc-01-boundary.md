# DCQC-01 — Done-Criteria Quality Check: Boundary Protocol

**Phase:** 4 (Boundary protocol + adversarial verification)
**Status:** COMPLETE (2026-07-04) — revised after adversarial verification found 8 gaps
**Companion:** dcqc-01-prompt.md

---

## State 1: OUTCOME-BASED

### Trigger
DCQC-01 evaluator returns VERDICT: OUTCOME-BASED.

### Worker action
1. Record in TASK_TEMPLATE Section 1.1 DCQC-01 sign-off field: `DCQC-01: OUTCOME-BASED — [date]`
2. Proceed to Section 4 (execution gate)

### Evidence standard
DCQC-01 cleared if and only if: the DCQC-01 sign-off field in Section 1.1 contains "OUTCOME-BASED" with a date, and Section 4 appears after that entry in the task record.

---

## State 2: ARTIFACT-BASED

### Trigger
DCQC-01 evaluator returns VERDICT: ARTIFACT-BASED.

### Pre-rewrite check — outcome-proxying branch (run BEFORE any rewrite)

Before starting a rewrite, ask: does the current done-criteria describe a behavioral verification step — specifically: a fresh-agent dispatch, blind test, or comparison against an expected output that requires correct results? If YES: enter State 2b (outcome-proxying path) instead of the standard rewrite loop. If NO: proceed to standard State 2 steps below.

**Test for YES:** The done-criteria contains a phrase like "dispatched to a fresh subagent and returned [X]" OR "verified by [fresh agent or independent check]" OR "compared against expected output" — where a correct result is explicitly required, not just any result.

If uncertain: treat as NO (enter standard rewrite loop).

### Standard rewrite loop (in order)

1. Do NOT proceed to Section 4
2. Read the evaluator's Problem field to identify the specific artifact component
3. Rewrite the done-criteria: address the specific artifact component named in the Problem field, keep all other components unchanged. Use the evaluator's Rewrite suggestion as a starting point if present; if the Rewrite field is absent or empty, construct the rewrite from the Problem field alone — the Problem field is sufficient to identify what must change.
4. Record the rewrite in Section 1.1: `[REWRITTEN v1: original done-criteria → new done-criteria]` (increment v number on each iteration)
5. Re-dispatch DCQC-01 with the new done-criteria
6. If OUTCOME-BASED is returned: proceed to State 1
7. If ARTIFACT-BASED is returned again: check the Problem field — if the same component is flagged, repeat from step 3 (new rewrite). If a different component is flagged (cascade): apply the multi-component rule — rewrite the newly flagged component, keep the already-accepted components unchanged; iteration counter continues (does not reset).

### Iteration limit

The iteration counter tracks only decisive ARTIFACT-BASED verdicts requiring a rewrite. Inconsistency-resolution re-runs (State 5) are not counted.

After 3 decisive ARTIFACT-BASED verdicts in succession (original + 2 rewrites): do NOT attempt a 4th rewrite. Escalate to user.

---

## State 2b: Outcome-proxying path

### Trigger
State 2 pre-rewrite check returns YES (done-criteria describes behavioral verification with correct-output requirement, but evaluator returned ARTIFACT-BASED).

### Worker action (in order)
1. Do NOT enter the standard rewrite loop yet
2. Re-dispatch DCQC-01 with the same done-criteria, adding an explicit note at the end: `Note: the artifact described requires [state the specific behavioral verification step and what correct output is required]. Does this meet the outcome-proxying standard — specifically: does producing this artifact require goal advancement?`
3. If re-dispatch returns OUTCOME-BASED: proceed to State 1
4. If re-dispatch returns ARTIFACT-BASED: the evaluator confirmed the criteria is not sufficiently explicit. Rewrite the done-criteria to make the verification step explicit: add "verified by [specific check requiring correct output]" — then enter State 2 standard rewrite loop from step 5 with this rewritten version. The iteration counter starts from this rewritten version (prior ARTIFACT-BASED verdicts do not carry over).

---

## State 3: Escalation (after 3 failed rewrites)

### Trigger
Three decisive ARTIFACT-BASED verdicts in succession have occurred.

### Worker action
1. Do NOT attempt a 4th rewrite
2. Send the following message to the user:

```
DCQC-01 ESCALATION

Three versions of the done-criteria have been rejected as artifact-based.

The underlying issue (from the most recent evaluator output):
[Paste the Problem field from the most recent ARTIFACT-BASED verdict]

The question the done-criteria cannot answer: [state the specific outcome the task needs to produce — e.g., "When does the agent know the mechanism actually works, vs. merely that a file was written?"]

Most recent rewrite attempt (still rejected):
[Paste the most recent rewritten done-criteria]

User decision required: what observable condition would constitute success for this task?
```

3. Wait for user response

### Post-escalation path (Gap 1 fix)
When the user provides an answer:
- Treat the user's answer as the full done-criteria text for a new attempt
- The iteration counter resets to 0 (user input constitutes a fundamentally new done-criteria, not another machine iteration)
- Re-dispatch DCQC-01 with the user's stated condition as the done-criteria
- Proceed per State 1 or State 2 based on the result

---

## State 4: Evaluator malfunction (non-standard output)

### Trigger
DCQC-01 evaluator returns output that contains neither "OUTCOME-BASED" nor "ARTIFACT-BASED" as a verdict (timeout, error, null, malformed response, or ambiguous text).

### Worker action
1. Re-dispatch DCQC-01 once with identical inputs (same done-criteria, same goal model, same task direction)
2. If the second dispatch returns a valid verdict: proceed per State 1 or State 2
3. If the second dispatch also returns a non-standard output: treat as ARTIFACT-BASED (stricter default) and enter State 2 standard rewrite loop. Record in Section 1.1: `[DCQC-01: evaluator returned non-standard output twice — treating as ARTIFACT-BASED; rewrite required]`
4. If treating as ARTIFACT-BASED is not actionable (no Problem field to rewrite from): escalate to user via State 3 path, noting the evaluator produced no parseable output.

---

## State 5: Inconsistent verdicts across runs

### Trigger
Same done-criteria dispatched twice to DCQC-01 returns different verdicts (one OUTCOME-BASED, one ARTIFACT-BASED).

### Worker action
1. Run DCQC-01 once more with the same done-criteria (third run, tie-breaker)
2. Majority verdict decides (2 ARTIFACT-BASED or 2 OUTCOME-BASED)
3. Proceed per State 1 or State 2 based on majority verdict
4. The two runs that produced the losing verdict and the one tie-breaker run do NOT count toward the iteration counter — inconsistency resolution is out-of-band

---

## Edge cases

### Evaluator's Rewrite field is absent or empty
State 2 step 3 says to use the Rewrite suggestion as a starting point. If the field is absent: construct the rewrite from the Problem field alone — the Problem field names the artifact component; replace that component with a behavioral condition that requires goal advancement to satisfy. The Rewrite field is advisory; its absence does not block the rewrite step.

### Task with no observable behavioral outcome (N/A path)
Some tasks are purely structural and genuinely cannot be expressed as a behavioral done-criteria. This path applies when ALL of the following are true:
- The task produces only file reorganization, renaming, deletion, or formatting — no mechanism behavior changed
- OR the task is record-keeping or archive-only (e.g., "move completed entries to archive file")
- AND the task does NOT involve mechanism design, procedure change, rule change, or prompt modification

Worker annotates Section 1.1: `DCQC-01: N/A — [one-sentence reason: e.g., "file rename only — no agent behavior changed"] — user review required at close.`

Worker proceeds to Section 4.

Alerting A1: A1 is the external auditor dispatched at task close (TASK_TEMPLATE Section 6 — see CLAUDE.md "External auditor at task close"). When writing the task close summary for A1, include: `DCQC-01 N/A was declared — verify the task was genuinely outcome-free (no mechanism, procedure, or rule changed).`

---

## Phase 4 adversarial verification record

**Run date:** 2026-07-04
**Finding:** 8 gaps identified — 2 fully-blocking (Gap 1: post-escalation undefined; Gap 3: outcome-proxying terminal exit missing), 4 ambiguity gaps (Gaps 2, 4, 7, 8), 2 missing-state gaps (Gaps 5, 6).
**All 8 fixed in this revision:**
- Gap 1: State 3 post-escalation path added
- Gap 2: Pre-rewrite check with explicit YES/NO test added to State 2
- Gap 3: State 2b now exits into State 2 main loop on second ARTIFACT-BASED; iteration counter starts fresh
- Gap 4: Iteration counter explicitly excludes inconsistency-resolution runs (State 5)
- Gap 5: State 4 (evaluator malfunction) added
- Gap 6: "Absent Rewrite field" edge case added — Problem field is sufficient
- Gap 7: Multi-component cascade addressed inline in State 2 step 7 — iteration counter continues, does not reset
- Gap 8a: N/A eligibility criteria added (all-three-conditions test)
- Gap 8b: A1 defined in N/A edge case with specific dispatch instruction

---

## Phase 4 alternatives gate

**Chosen approach:** Hard block with no override path — ARTIFACT-BASED requires rewrite; no "stated reason" bypass. Escalation after 3 failures involves the user in a genuine decision, not a compliance bypass.

**Rejected alternative:** Soft guidance with override — present rewrite but allow worker to proceed with stated reason. Rejected because the override path is exactly what produced M-06/M-25/M-35. If the gate can be bypassed unilaterally, it is advisory, not structural.
