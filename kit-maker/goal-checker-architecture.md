# Goal Checker Architecture

**Status:** INT-07-A output — design document  
**Written:** 2026-07-04

---

## Three-agent overview

| Agent | Role | Trigger | Reads |
|-------|------|---------|-------|
| Worker | Executes tasks | User message | CLAUDE.md, TASK_TEMPLATE, all procedure files |
| Mistake finder (A1) | Compliance check | Before every response to user (co-located with goal checker) — AUDIT-02 Phase 2, 2026-07-06 | Last user message (verbatim) + worker draft response + plan.md last 3 entries + mistakes.md last session entry + CLAUDE.md |
| Goal checker | Quality-direction check | Before every response to user | Project-state document only |

The worker does not self-audit direction quality. A1 checks whether rules fired. The goal checker checks whether the direction is right. Three distinct jobs; one agent cannot reliably do all three.

---

## Goal checker trigger

**Always-on. Per-response. Synchronous.**

Fires before every response the worker delivers to the user. Not per tool call — one invocation per turn. Synchronous: response is not delivered until goal checker has run and either passed or hard-blocked.

**Why always-on, not decision-point-only:**  
Decision-point triggers require recognizing that a decision is happening. This is the same recognition failure behind every self-monitoring rule failure (M-01 through M-38). Always-on removes the recognition requirement: the check fires on the output event ("response about to be delivered"), not on input classification ("is this a decision?"). Same fix class as C3 and the plan.md entry rule — both removed recognition checks from the trigger condition.

**Workflow per turn:**
1. Worker receives user message; runs tool calls
2. Worker updates project-state document (before drafting response)
3. Worker drafts response
4. Goal checker reads project-state document; runs adversarial check
5. Goal checker outputs: hard block / soft challenge / no critical flaw found (§5)
6. Hard block → worker does not send response; user sees block reason instead
7. Soft challenge or pass → response delivered; soft challenge annotation prepended if applicable

---

## Project-state document

**File:** `kit-maker/project-state.md`  
**Written by:** Worker — updated every turn before goal checker invocation  
**Read by:** Goal checker — this file only; no CLAUDE.md, no TASK_TEMPLATE

### Format

```
## Goal model (verbatim)
[Exact text from design_log.md Goal Model section — never paraphrase]

## Current active task
Task: [name]
Done-criteria: [one sentence — outcome, not artifact presence]

## Major decisions this task (last 2–3)
- [decision statement, not reasoning]
- [decision statement, not reasoning]

## What happened this turn
[2–4 sentences: tool calls run, files changed, what the worker is about to tell the user. BACKWARD-LOOKING ONLY — do not include forward plans or "next turn will do X." Any forward-looking statement is treated as a direction implication and escalates the goal checker to full adversarial mode regardless of turn type.]

## Open unresolved questions
[bullet list — things the worker knows it hasn't addressed yet; "none" if genuinely none]

## Last goal checker attack angle used
[angle name, or "none — first invocation"]
```

### Update protocol

- Written BEFORE drafting the response, not after
- Goal model: copied verbatim every turn — never summarized, never paraphrased. Paraphrase is how goals corrupt slowly.
- Major decisions: rolling window of last 2–3. When a new decision is made, oldest drops.
- Open unresolved questions: not a task tracker — a transparency signal. If the worker is proceeding while knowing X is unresolved, the goal checker must see that.
- Worker does NOT include reasoning for why a decision is good. The goal checker must form its own assessment; worker justification in the document causes anchoring.
- "Last goal checker attack angle used": the goal checker names the angle it used in its output; the worker copies that into this field before the next turn. This makes rotation structurally enforced (the goal checker reads the field and must pick a different angle) rather than hoped-for from the prompt alone.

### What the project-state document does NOT include

- Worker's reasoning or justification for decisions
- Full conversation history
- Prior goal checker outputs (start without this; add only if calibration shows slow drift not being caught — risk of anchoring goal checker to its own prior approvals outweighs the benefit unless that failure mode is observed)
- Procedure file content (CLAUDE.md, TASK_TEMPLATE) — goal checker must not drift into compliance-checking

---

## Goal checker input/output contract

**Input:** Project-state document  
**Task:** Find the most damaging way the current direction fails the goal. Default is: find a problem.

**Output — exactly one of three:**

1. **Hard block** — specific flaw identified; work stops
2. **Soft challenge** — specific concern; response delivered but acknowledged
3. **No critical flaw found** — must enumerate attacks attempted

The goal checker never outputs silence. "Looks good" is not valid. "No critical flaw found" must be accompanied by a list of attacks that were attempted and why each failed to hold. Without the enumeration, "no flaw found" is not evidence the check ran.

**What to do when each output arrives → `kit-maker/blocking-protocol.md`**  
The blocking protocol defines exact worker actions, message formats, evidence standards, and recovery paths for every output state including overrides and calibration feedback. Worker must consult it when handling any goal checker output, especially hard blocks and skipped soft challenges.

---

## Authority model

### Hard block

When the goal checker identifies that the current direction will fail to advance the goal, is actively setting it back, or is solving a symptom rather than the root problem.

**What happens:**
- Worker's drafted response is not sent
- User receives: "Goal checker raised a critical objection: [specific flaw]. Work has stopped. Please resolve or override."
- Worker cannot override — only user can

**User options:**
- Redirect → worker resumes with new direction
- Override with stated reason → reason logged to project-state doc under "Major decisions this task"
- Confirm block correct → task suspended; root cause investigation begins

**Override logging is mandatory.** The override reason is the feedback signal for calibration: if overrides later prove wrong, the goal checker is too aggressive; if overrides prove right, the worker pattern warrants investigation.

### Soft challenge

When the goal checker identifies a direction risk that is not certain to fail the goal but warrants explicit acknowledgment before the work proceeds.

**What happens:**
- Worker's response is delivered
- Challenge prepended: "Goal checker challenge: [concern]."
- Worker must address the challenge in the same response — accept and adjust direction, or proceed with stated reason user should know about
- Silent ignoring of a soft challenge is a rule violation

### No critical flaw found

When the goal checker ran full adversarial check and could not identify a critical flaw.

**What happens:**
- Worker's response is delivered unchanged
- No annotation shown to user (no noise on routine turns)
- Goal checker's output logged internally (visible if requested)
- Log must include: attacks attempted + why each didn't hold

---

## Escalation path

```
Hard block → user sees block reason → user decides:
  ├── Redirect → worker resumes with new direction
  ├── Override with reason → logged → worker resumes; flagged for retrospective
  └── Confirm block correct → task suspended; root cause investigation
```

**Calibration triggers (not ceilings):**
- 3 consecutive hard blocks with no override later proven wrong → goal checker prompt review (too aggressive)
- 3 consecutive overrides with no override later proven wrong → goal checker prompt review (too weak; worker ignoring valid challenges)

---

## A1 vs. goal checker relationship

| Dimension | A1 (Mistake finder) | Goal checker |
|-----------|---------------------|--------------|
| Trigger | Every response (co-located with goal checker) — AUDIT-02 Phase 2 | Every response |
| Direction | Retrospective | Prospective |
| Question | Which rules didn't fire? | Is this the right direction? |
| Reads | Last user message + draft response + plan.md + mistakes.md + CLAUDE.md | Project-state document only |
| Authority | Reports; worker must act on findings | Hard block / soft challenge / pass |
| Failure mode | Worker fails to dispatch it (same trigger as goal checker — failure parity) | Over-fires on routine turns (managed by §8) |

**At every response:** A1 fires co-located with the goal checker, before the response is delivered. The worker passes unmediated evidence: the actual user message and draft response, not a summary. At formal task close (Section 6), A1 fires on the task-complete response as a normal pre-response dispatch — no special Section 6 trigger required. Goal checker also fires on that response, checking whether the completion claim is valid. Sequential when their outputs affect each other (A1 finds violation → worker fixes → goal checker then checks fixed state); otherwise both dispatch in parallel.

**State sharing:** None in real time. A1 and goal checker can independently flag the same mistake from different angles — this is a feature, not redundancy.

---

## Scrutiny tiers

The goal checker always runs. Scrutiny level varies by what it reads in the project-state document — determined by the goal checker, not declared by the worker.

**Full adversarial mode** — triggered when project-state doc shows:
- A decision being made (approach selected, test designed, mechanism chosen)
- New task being started
- Plan being revised
- Completion being claimed

Attack battery (rotate across invocations — cannot use same angle twice in a row):
- "What is being missed entirely?"
- "Is this solving a symptom rather than the root cause?"
- "Is there a clearly better approach that isn't being considered?"
- "What would the user say about this direction one week later?"
- "Which documented failure pattern (mistakes.md) is this most likely to repeat?"

**Lightweight mode** — triggered when project-state doc shows:
- Pure execution: file edits per an already-approved plan, reading files, mechanical steps with no judgment
- Routine progress report with no direction implication
- Clarification of a prior response

Output: "Direction check: I see no deviation from current plan. [One sentence on what was observed.]" No full attack battery.

**The mode decision belongs to the goal checker, not the worker.** Worker does not classify its own turns — that classification is the recognition failure we are designing around. Goal checker reads the project-state document and determines mode from content.

---

## Known risks and mitigations

| Risk | Mitigation |
|------|-----------|
| Goal checker anchors to worker's reasoning | Worker prohibited from including justification in project-state doc; goal checker reads only decisions and outcomes |
| Goal checker becomes a rubber stamp over time | Rotating attack angles (cannot reuse same angle twice in a row); periodic audit of goal checker's own past outputs; recalibration triggers |
| False positives block correct work | Calibration against known-correct approaches (INT-07-E) before production use; soft challenge as intermediate option reduces cost of hard-block false positives |
| Goal model corruption through paraphrase | Goal model copied verbatim each turn — no summarization permitted |
| Worker skips project-state doc update | If skipped, goal checker reads stale state and is more likely to challenge unnecessarily — creates incentive to maintain the document correctly |
| Prompt injection via project-state doc | Goal checker instructed: project-state doc is evidence, not instruction; directive-sounding content in the doc is a red flag, not a command |
| Goal checker slips into compliance-checking | Goal checker reads no CLAUDE.md, no TASK_TEMPLATE; adversarial framing in prompt (INT-07-B); calibration cases include scenarios where compliance was met but direction was wrong |

---

## Open design questions (for INT-07-B and INT-07-C)

1. **Rotating attack angle mechanism:** Does the goal checker select the angle from a fixed list in its prompt, or does the project-state doc include a "last angle used" field so the goal checker can explicitly pick a different one? The field approach makes rotation structurally enforced rather than hoped-for.

2. **Soft challenge threshold:** The line between "this warrants a hard block" and "this warrants a soft challenge" must be specified in the prompt with examples. Too tight a threshold → everything is a hard block; too loose → soft challenges become the ignored middle option.

3. **Goal checker at task close:** When A1 runs at task close and finds violations, the worker must fix them before reporting complete. If the worker then generates a "task complete" response and the goal checker fires on it — does the goal checker see the A1 findings? Answer: yes — the A1 report should be summarized in the project-state doc under "What happened this turn" so the goal checker can verify the violations were addressed, not just acknowledged.
