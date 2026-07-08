# Mistake-Process Solutions

**Problem:** The mistake-fire rule has failed ≥6 documented times (M-10, M-11, M-22, M-24, M-32, M-33). Every previous fix improved self-monitoring rule wording. None changed the enforcement mechanism. Self-monitoring under execution pressure is confirmed unreliable.

**Goal:** A solution causes the mistake-fire rule to fire within 1 task of a qualifying mistake, in ≥4/5 test scenarios, without user correction as the trigger.

**Date:** 2026-07-03

---

## Failure point analysis

The rule has four distinct failure points. All previous fixes only targeted FP-1. Solutions must be matched to the failure point they address.

| ID | Failure point | What fails | Previous fixes addressed? |
|----|--------------|-----------|--------------------------|
| FP-1 | Recognition | Agent doesn't recognize a mistake occurred | Yes — all 6 fixes rewrote trigger conditions |
| FP-2 | Firing | Agent recognizes but skips the rule (execution pressure) | Partially — M-32 added output-type trigger |
| FP-3 | Investigation depth | Rule fires but 5-question investigation is shallow or skipped | No |
| FP-4 | Action item execution | Investigation completes but action items are never executed | Named in M-32, never fixed |

A solution that only fixes FP-1 will still fail at FP-2, FP-3, FP-4. Need solutions that address multiple failure points or the full chain.

---

## Test scenarios (ground truth for measuring solutions)

These are real cases where the rule should have fired but didn't. Used to measure whether a candidate solution would have caught the failure.

| ID | Source | What happened | Which FP |
|----|--------|--------------|---------|
| TC-01 | INT-05 Round 1 | Introduced D-before-C conflict as a "fix" — a fix that created a new problem | FP-1, FP-2 |
| TC-02 | INT-05 Rounds 4-6 | Protocol paper routing failed 4 consecutive RED rounds without triggering class-before-instance retrospective | FP-1 |
| TC-03 | INT-05 post | Context pollution identified by user post-hoc — should have been flagged proactively | FP-1 |
| TC-04 | M-22 | plan.md entry skipped in conversational mode — recognized class not yet a trigger | FP-2 |
| TC-05 | M-31 | Calibration principle stated and immediately violated in same response | FP-1, FP-2 |
| TC-06 | M-32 | Action items from M-26–M-31 left unexecuted for multiple sessions | FP-4 |

A PASS for a candidate solution = it would have detected/prevented TC-01 through TC-06 (or at minimum ≥4 of them).

---

## Solutions by class

### Class A: External enforcement — don't rely on self-monitoring

**A1 — Post-task review subagent**
After every task completes, a fresh subagent reads the conversation excerpt and CLAUDE.md, then answers: "Which CLAUDE.md rules should have fired in this excerpt but did not?" Returns a structured report.

- Addresses: FP-1, FP-2 (catches failures after the fact; does not prevent in real time)
- Implementability: High — subagent dispatch is already part of our toolset
- Cost: Medium — requires a subagent call after every task
- Challenge: defining what "task complete" means as a trigger; needs to run as a hook or manual step
- Test: give a subagent TC-01 through TC-06 excerpts + CLAUDE.md; count how many failures it detects
- PASS criterion: detects ≥4/6 test cases

**A2 — Hook-based enforcement (Claude Code hooks)**
Configure a post-message hook that runs a compliance script after each assistant message, checking for rule violations in the output.

- Addresses: FP-2 (catches at message boundary, before next action)
- Implementability: Medium — hooks exist in Claude Code; need to design what the check does
- Cost: Low ongoing (hooks run automatically)
- Challenge: the hook can only check what's in the message, not whether the rule should have fired given prior context; needs to receive conversation context
- Test: configure hook to check for "mistakes.md entry written" signal; run 5 test tasks
- PASS criterion: hook fires when task contains qualifying mistake, does not fire when no mistake

**A3 — Mandatory output format that forces compliance visibility**
Convert the mistake-fire rule from a triggered self-check to a mandatory end-of-response output section: every response ends with a 3-line section:
```
[Compliance check]
- Anything go wrong this response? [YES/NO — if YES: write mistakes.md entry now]
- Pending action items from last mistakes.md entry: [list or NONE]
- Rules that should have fired but didn't: [list or NONE]
```

- Addresses: FP-1, FP-2, FP-3 (forces visible surface for the check; agent cannot skip without it being visible)
- Implementability: High — text format change only
- Cost: Low — adds 3 lines to every response
- Challenge: agents drift from format over time (Pattern D); needs structural enforcement not just instruction; might reduce response quality by adding overhead
- Test: instruct a fresh subagent to run 5 tasks with this format; count how many compliance check sections are meaningful vs. boilerplate "NO/NONE"
- PASS criterion: in tasks with deliberate errors, compliance check correctly identifies ≥4/5

**A4 — Canary conditions in task descriptions**
When writing a task description, embed 1-2 canary conditions: specific states that, if reached, should trigger the mistake-fire rule. The task description names them explicitly. Agent is required to check the canaries at task completion.

- Addresses: FP-1 (pre-defines what "wrong" looks like before the task starts, removing recognition burden)
- Implementability: High — procedural addition to task-start
- Cost: Low — 1-2 sentences per task
- Challenge: requires predicting in advance what mistakes are likely; doesn't catch unexpected mistake classes
- Test: write TC-01 equivalent with "canary: if a fix introduces a new problem, this is a mistake" embedded; check if agent fires the rule
- PASS criterion: agent correctly identifies TC-01 class when canary is present; compare to baseline without canary

**A5 — Adversarial subagent running in parallel**
During execution of a task, a parallel subagent watches the conversation stream and fires a notification if it detects a qualifying mistake condition. Main agent receives a structured interrupt.

- Addresses: FP-1, FP-2 (real-time detection; doesn't wait for task completion)
- Implementability: Low — requires streaming conversation access; subagents don't currently see main conversation in real time; not clearly buildable in current toolset
- Cost: High — parallel subagent for every task
- Challenge: technical constraint — subagents run independently; monitoring the main conversation in real time is not straightforward
- Test: N/A — skip for now; revisit if A1-A4 don't reach pass threshold

---

### Class B: Structural rule changes — make the rule impossible to skip

**B1 — Commission form conversion**
Rewrite the mistake-fire rule from prohibition/trigger form to commission form: instead of "IF mistake THEN fire the rule," make the check an output element of every task. "At the end of every task: state whether anything went wrong, even if the answer is no." This converts from self-triggered to always-on.

- Addresses: FP-2 (removes the "if" that creates a recognition skip)
- Implementability: High
- Challenge: "always-on" version may produce shallow no-mistake signals that erode the mechanism's signal value
- Test: subagent runs 5 tasks with this rule; check: in tasks with deliberate mistakes, does the commission form produce a specific mistake identification vs. boilerplate "nothing went wrong"?
- PASS criterion: ≥4/5 tasks with mistakes produce a non-boilerplate mistake identification

**B2 — TASK_TEMPLATE section gate**
Add a "Mistakes check" section to TASK_TEMPLATE.md Section 6 (task completion): required field "Mistakes in this task: [describe or NONE]." The task is not closeable without filling this field. The plan.md entry has a visible gap if this section is absent.

- Addresses: FP-2, FP-3 (structural gate — task cannot be marked complete without running the check; the plan.md entry shows the gap)
- Implementability: High
- Challenge: only fires at formal task closes; informal pivots and mid-task mistakes still invisible
- Test: add this gate to 3 tasks; check if the field is filled meaningfully vs. as boilerplate "NONE" when mistakes occurred
- PASS criterion: field is filled with a specific mistake description in ≥2/3 tasks where a mistake actually occurred

**B3 — Count-based forced review**
Track a counter "tasks since last mistakes.md entry." After every N tasks (N=3), force a mandatory retrospective: "This is task N since the last mistakes.md entry. Required: review the last N tasks for unfired mistake triggers before proceeding."

- Addresses: FP-1, FP-2 (periodic forced check even without recognition)
- Implementability: Medium — requires tracking the counter across responses
- Challenge: counter tracking is itself a self-monitoring requirement; may drift; might be implementable via plan.md entry numbering
- Test: run 9 tasks with this rule; measure: does the retrospective occur at tasks 3, 6, 9? When it occurs, does it catch mistakes from the prior N tasks?
- PASS criterion: forced review occurs on schedule AND catches ≥1 real mistake per review in sessions where mistakes occurred

---

### Class C: Threshold redesign — lower what counts as a trigger

**C1 — Any unexpected result triggers the check, not just recognized mistakes**
Change the trigger from "anything doesn't go as planned" (requires planning and comparison) to: "any time an action produces output different from what the prior action implied." Lower cognitive bar — comparison not to plan but to immediate prior.

- Addresses: FP-1 (removes the need to have a mental plan to compare against)
- Implementability: High
- Challenge: may over-trigger on routine variation; needs a filter
- Test: apply to TC-01 (Round 1 fix that introduced a new problem — the new problem is an "unexpected result" relative to the intent of the fix); does the rule fire?

**C2 — Fixed minimum firing rate**
The mistake-fire rule must fire at least once per N responses in any session. If it hasn't fired, that absence itself triggers a check: "The mistake-fire rule has not fired in N responses. Required: review last N responses for unfired triggers."

- Addresses: FP-2 (absence is itself a signal; don't wait for recognition)
- Implementability: Medium
- Challenge: same as B3 — counter tracking is self-monitoring; might produce superficial entries to satisfy the counter

**C3 — User-correction always triggers full 5-question investigation**
Currently, user corrections sometimes trigger the rule and sometimes don't. Hard rule: any user correction of any kind ALWAYS triggers the full 5-question investigation before any other work. No exceptions, no classification of whether it "really" was a mistake.

- Addresses: FP-1 (removes recognition: user correction = mistake, always, by definition)
- Implementability: High
- Challenge: might produce redundant entries for trivial corrections; would need the user to accept that overhead
- Test: apply to TC-04 and TC-05; does the rule fire for user corrections that currently don't trigger it?
- PASS criterion: 5/5 user corrections in test scenarios trigger full investigation

---

### Class D: Action item enforcement — fix FP-4 specifically

**D1 — Action items as plan.md tasks, not mistakes.md prose**
Every action item from a mistakes.md investigation becomes a formal plan.md task entry immediately, with done-criteria and status. Not a note in the mistakes.md body. Mistakes.md entry is not "complete" until all action items have plan.md entries.

- Addresses: FP-4 specifically
- Implementability: High
- Test: retroactively apply to M-26–M-33 action items; how many would already be in plan.md? How many would be new?
- PASS criterion: all action items from M-26–M-33 have plan.md entries within this session

**D2 — Mistake closure condition**
A mistakes.md entry is not closed until its action items are either [EXECUTED — evidence] or [QUEUED → plan.md entry with done-criteria]. Add a "Status" field to each entry: OPEN / CLOSED. Session-start check: how many entries are OPEN? If any P1 entries are OPEN: address before starting new work.

- Addresses: FP-4
- Implementability: High
- Challenge: requires retroactive update of M-01–M-33; session-start check is still self-monitoring but the visible OPEN/CLOSED status makes it auditable
- Test: add Status field to M-33; check if it propagates correctly; measure: does session-start correctly flag open entries?

**D3 — External action item tracker**
Move action items out of the mistakes.md narrative and into a dedicated file (mistake-action-items.md) with explicit status tracking. This file is checked at session start alongside mistakes.md.

- Addresses: FP-4
- Implementability: High
- Challenge: adds another file to session-start reading; overhead may cause drift
- Test: create the file; add M-33 action items; check if session-start correctly catches open items

---

## Combinatorial recommendations

Solutions that address multiple failure points simultaneously:

**Combo 1 (A3 + C3 + D1):** Mandatory end-of-response compliance section (A3) + user correction always triggers (C3) + action items as plan.md tasks (D1)
- Covers: FP-1 (C3), FP-2 (A3), FP-4 (D1)
- Missing: FP-3 (investigation depth)
- Cost: Low implementation; adds overhead to every response

**Combo 2 (A1 + D2):** Post-task review subagent (A1) + mistake closure condition (D2)
- Covers: FP-1 (A1), FP-2 (A1), FP-4 (D2)
- Missing: FP-3 (investigation depth)
- Cost: Medium (subagent calls); high signal quality

**Combo 3 (B2 + C3 + D1):** TASK_TEMPLATE gate (B2) + user correction always triggers (C3) + action items as plan.md tasks (D1)
- Covers: FP-2 (B2), FP-1 via user correction (C3), FP-4 (D1)
- All structural changes — no ongoing subagent cost
- Most implementable immediately

---

## Test harness design

### What a valid test looks like

For each candidate solution, we need to know: "Would this solution have caught TC-01 through TC-06?"

**Test structure per solution:**
1. Give a fresh subagent: (a) the test scenario transcript excerpt, (b) CLAUDE.md as it exists, (c) the candidate solution applied
2. Ask: "Does the mistake-fire rule fire in this scenario, given the candidate solution? If yes: show where. If no: explain why not."
3. Measure: PASS = rule fires on correct scenarios, does not over-fire on non-mistake scenarios

**Non-mistake control cases (for false positive testing):**
- NC-01: Normal task completion with no mistakes — rule should NOT fire
- NC-02: Auditor finding that the agent correctly fixes without introducing new problems — rule should NOT fire
- NC-03: User correction that clarifies ambiguity rather than correcting a mistake — judgment call; rule may or may not fire

### Subagent test design

Each test run dispatches a subagent with:
- The candidate solution description
- CLAUDE.md (current)
- 3 real test cases (mix of TC and NC)
- The question: "Does this candidate solution cause the mistake-fire rule to fire in TC scenarios and not in NC scenarios? Show your reasoning for each case."

Measurement:
- True positives (TC scenarios where rule fires): count
- False negatives (TC scenarios where rule doesn't fire): count  
- False positives (NC scenarios where rule fires incorrectly): count
- Score: TP / (TP + FN) — target ≥4/5

### Selection criterion

A solution passes if: TP rate ≥4/5 AND FP rate ≤1/3.
A solution is selected for implementation if: it passes AND is implementable without major tooling changes.

---

## Current status

| Phase | Status |
|-------|--------|
| 1. Solution generation | COMPLETE — this file |
| 2. Test harness design | COMPLETE — above section |
| 3. Subagent testing | COMPLETE — 2026-07-03 (round 1: Combos 1-3 + A4; round 2: see below) |
| 4. Selection and implementation | COMPLETE — 2026-07-03 |
| 5. Verification | NOT STARTED — requires 3 real sessions |

---

## Phase 3 round 1 results (Combos 1-3, A4 — 2026-07-03, M-34)

**Test cases:** TC-01 (fix introduced new problem), TC-04 (plan.md skipped in conversational framing), TC-05 (principle stated and immediately violated)
**Control case:** NC-01 (normal task — should NOT fire)

| Solution | TC-01 | TC-04 | TC-05 | TP Rate |
|----------|-------|-------|-------|---------|
| Combo 1 (A3+C3+D1) | FAIL | Partial | Partial | 0/3 reliable |
| Combo 2 (A1+D2) | Conditional | **YES** | Uncertain | 2/3 firmly |
| Combo 3 (B2+C3+D1) | Conditional | **FAIL** | **FAIL** | 0-1/3 |
| A4 canary standalone | **YES** | **FAIL** | Partial | 1.5/3 |

**Synthesis finding from round 1:** All 4 evaluators converged — distinguishing factor: observable condition checks vs. open-ended self-assessment. "Did anything go wrong?" fails. "Did I edit a file? → was plan.md written?" succeeds.

**Round 1 implementation (A3-obs + C3 + D1):** Applied 2026-07-03. Reverted same session — M-34. Reason: A3-obs covered ~1-2 of 34 documented mistakes (~3% coverage). The 3 test scenarios were cherry-picked to showcase observable conditions, not drawn from actual M-01–M-33 distribution. The test was simulation (prediction), not execution (actual rule firing).

---

## Distribution audit — all M-01 to M-34 (2026-07-03)

Full per-entry classification in mistake-class-audit.md.

| Mechanism | # of mistakes addressed |
|-----------|------------------------|
| EXT (external auditor) | ~14 |
| C3 (user correction unconditional) | ~7 |
| TG-START | ~6 |
| PROC | ~6 |
| TG-CLOSE | ~4 |
| OBS-FILE | ~2 |
| OBS-PRIN | ~1 |
| NONE | ~4 |

**Key finding:** A3-obs covered 1-2 of 34 mistakes. EXT is the largest class (14 mistakes) and the only mechanism that addresses behavioral decay, mistake-fire rule non-fires, and broad retrospective non-fires without requiring self-recognition.

---

## Phase 3 round 2 — External auditor (A1) detection test (2026-07-03)

**Test design (corrected from round 1):**
- **NOT** simulation: "would the rule have fired?" (requires no detection skill)
- **IS** detection: give fresh subagent conversation excerpt + CLAUDE.md; ask "which rules should have fired but didn't?"
- Ground truth: known from M-01–M-34 (documented rule non-fires)
- Measurement: TP rate = violations correctly identified / total known violations; FP rate = rules incorrectly claimed as unfired

**Test cases:**
- TC-A: M-10/M-11 class — broad review kept producing targeted lists despite 3 user corrections (EXT class)
- TC-B: M-22 class — plan.md entry skipped in conversational mode; user said "How should X work?" and agent answered + edited file without plan.md entry
- TC-C: M-33 class — agent wrote a fix that introduced a new conflict; mistake-fire rule didn't fire; user correction arrived; rule didn't fire again

**Results:**

| Test case | Violations in ground truth | Violations detected | False positives |
|-----------|---------------------------|--------------------|-----------------| 
| TC-A | 6 (3 mistake-fire non-fires + 3 broad-retrospective non-fires) | 6/6 | 0 (correctly declined Rule C — task hadn't closed) |
| TC-B | 2 (plan.md rule + derivative mistake-fire rule) | 2/2 | 0 (correctly declined broad-retrospective — trigger wasn't met) |
| TC-C | 5 (class-before-instance at A and B; mistake-fire at B; advisor behavior at A and B) | 5/5 (4 high-confidence, 1 conditional on file access) | 0 |

**Overall detection rate: 13/13 violations detected. False positive rate: 0/3 test cases.**

**Key findings from round 2:**

1. **Binary trigger conditions are reliably detectable.** "A user correction arrived" → "mistakes.md entry must exist before continuing" is purely observational. The auditor doesn't need to infer mental states or make judgment calls.

2. **Evaluative conditions require judgment but are still detectable.** "Was the broad review real?" is harder — but the user's repeated escalation over 3 turns provides externally visible evidence the auditor can cite.

3. **One class requires file access.** "Did the fix introduce a new conflict?" requires reading the modified procedure files. Solution: give the auditor the list of files modified in the task, and it can flag "if Phase D Step 4 exists and references Phase C output, the dependency scan was incomplete."

4. **False positive rate is near-zero.** The auditor correctly distinguished between rules that should have fired and rules whose trigger conditions weren't met (TC-B: user said "Good," not a correction → broad-retrospective rule correctly not flagged).

---

## Phase 4 — Implementation (A1 + C3 + D1)

**C3** (implemented 2026-07-03): User correction = mistake unconditionally; fire mistake-fire rule immediately, no classification step. Addresses ~7/34 mistakes.

**D1** (implemented 2026-07-03): Action items from mistakes.md become plan.md task entries with done-criteria immediately. Addresses FP-4.

**A1 — External auditor at task close** (implemented 2026-07-03): At every formal plan.md task close (TASK_TEMPLATE.md Section 6), before reporting done: dispatch a fresh subagent with a task summary + CLAUDE.md. Subagent identifies unfired rules. If violations found: fire mistake-fire rule before reporting complete. Addresses ~14/34 mistakes (EXT class). See kit-maker/CLAUDE.md "External auditor at task close" section.

**Combined coverage estimate:** A1 (~14) + C3 (~7) + D1 (FP-4 class) = ~21/34 documented mistakes. Overlap between classes reduces this — realistic estimate ~18-21 of 34 mistakes now structurally addressed.

**What is still not addressed:**
- ~6 TG-START class mistakes (falsifiability gate not routed to evaluation-type tasks) — task queued
- ~6 PROC class mistakes — procedure-specific fixes applied individually
- ~4 NONE class mistakes (workflow architecture problems) — checkpoint writes fix class

**Next step:** Monitor A1 across 3 real sessions. Measure: (a) does the auditor fire at task closes? (b) does it detect violations when present? (c) does the violation count from auditor match the violation count the user would have found?
