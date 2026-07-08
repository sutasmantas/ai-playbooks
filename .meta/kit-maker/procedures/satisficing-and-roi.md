# Procedure: Satisficing and ROI

**Use when:** deciding how much effort to apply to any task, whether to keep iterating, and which of several possible next steps to take.

**Why this exists:** Agents don't have effort-fatigue or boredom. A human naturally stops over-optimizing when the returns drop below the effort cost — boredom is a real signal that says "diminishing returns, do something else." Agents lack this signal, so they grind past the point where continued effort adds value. The other failure: treating all tasks as equally worth doing, regardless of how much they move toward the goal.

This procedure replaces the missing signal with a structural check.

---

## Part 1 — When to stop iterating (satisficing check)

Before any additional iteration on something already at a working state, answer:

**"What specifically would one more iteration add, and is that worth the effort?"**

Name it concretely. "One more pass would improve X by approximately Y amount, at a cost of Z effort."

If you cannot name what the next iteration would add: stop iterating. You've hit the point where continuing feels productive but isn't.

If you can name it: weigh it. Use this rough scale:
- **High value, low effort** → do it
- **High value, high effort** → surface to user; it's their call whether it's worth it
- **Low value, any effort** → stop; good enough is the right answer here
- **Unclear value** → do one more iteration, but set a concrete success criterion before starting

**The "good enough" standard:** output is good enough when it meets the done-criteria from the plan AND a real user of the kit would not be blocked or misled by its current state. Perfect is the enemy of shipped.

---

## Direction-drift check (fires at logical unit boundaries — before trajectory signal)

A logical unit is a coherent batch of work toward one goal (e.g., "add all P1 research prep," "fix all adversarial test findings"). The trajectory signal looks at action SIZE within a unit. This check looks at whether consecutive logical units are all pointing the same direction without it ever being questioned.

**At every logical unit boundary, answer:**

"What direction have the last 2–3 logical units been going? Has that direction been questioned, or just assumed correct?"

Signs of direction drift:
- The last 3 logical units are all variants of the same thing (more research prep, more angles, more infrastructure)
- Each unit felt productive but none produced anything testable or user-visible
- The question "are we getting closer to the goal?" produces an uncomfortable pause

If direction drift is detected: do NOT start the next logical unit. Run mandatory-reflection.md question 9, then surface findings to user before continuing.

**This check fires at session start when continuing from a previous session.** The most common failure: previous session ended in one direction, current session picks it back up, direction is never questioned. The check must happen at the boundary, not after three more units in the same direction.

Direction drift is NOT the same as the trajectory signal:
- Trajectory signal: actions are getting smaller (optimization is running out)
- Direction drift: actions are full-sized but the direction itself hasn't been validated

---

## Trajectory signal (check before Part 1)

Before the satisficing check: look at the last three actions taken. Were they each smaller than the one before?

- Query tweak → one-line note → header text update = **diminishing trajectory.** Stop. Do not do a fourth small thing. Run Part 2 (ROI check) immediately and find the highest-value remaining work.
- If you cannot easily name what the highest-value remaining work is: surface this to the user explicitly. "I've been micro-optimizing — here's what I think is left and here's my read on the ROI of each."

This signal fires BEFORE Part 1. Diminishing trajectory = the satisficing check is already overdue.

When the trajectory signal fires: also trigger mandatory-reflection.md question 9 (direction-level alternatives). Diminishing returns in one direction is evidence that a fundamentally different direction may exist. The ROI check (Part 2) asks "which task is highest-value?" — question 9 asks "is this direction correct at all?" Both must fire together when the trajectory signal triggers.

---

## Before concluding low ROI — alternatives check

Before marking any work direction as lower ROI and postponing it: search for a fundamentally different way to achieve the same goal. A direction has low ROI; the goal it was serving may still have high ROI via a different approach.

Ask: "Is there a different way to get the value this direction was trying to produce, that I haven't tried?"

If yes: evaluate the alternative's ROI before declaring the direction low ROI. The alternative may be higher ROI than both the current direction AND the next planned task.

If no alternative is found after genuine search: then mark the direction as lower ROI. But the search must happen — "I can't think of one" after 10 seconds is not a genuine search.

This fires BEFORE the Part 2 prioritization check when a direction's ROI is declining. Do not skip it.

---

## Part 2 — Which next step has the highest ROI (prioritization check)

Before starting the next planned task, run this prioritization scan (one pass — not a deep analysis):

**"Of everything that could be done next, is this the highest-value action toward the goal?"**

The plan defines the intended sequence. The ROI check asks whether the plan is still right given what we now know.

Quick scan:
1. Is there a 20%-effort / 80%-value shortcut that the plan didn't account for?
2. Is there something currently blocking everything else that should jump the queue?
3. Is the next planned task still the bottleneck, or has something changed?

If the planned next task is still highest-ROI: proceed without debate.
If something else is higher-ROI: do it, log the deviation in the design log with the reason.

This is not permission to constantly reorder the plan. It fires ONCE before starting each task, not repeatedly mid-task.

---

## Part 3 — Effort scaling (context sensitivity)

Not every task deserves the same depth. Before starting any task, classify it:

- **Quick scan** — the answer is probably obvious; spend 5 minutes, move on. Example: checking if a file reference exists.
- **Standard depth** — normal process applies. Example: writing a new procedure.
- **Deep work** — high stakes, genuinely unclear, significant impact on the goal. Example: designing the verification approach for kit content.

Applying deep-work effort to a quick-scan task wastes time. Applying quick-scan effort to a deep-work task produces shallow output. The classification takes 10 seconds and prevents both failure modes.

---

## What this procedure does NOT do

- It does not authorize cutting corners on deep-work tasks. Satisficing applies to iteration and prioritization, not to required quality bars.
- It does not override the plan. ROI check adjusts sequencing; it does not delete workstreams.
- It does not fire mid-task. Classify and prioritize BEFORE starting. Once started, finish the task.

---

## When to skip

**The satisficing check (Part 1) skips when:**
- You have not yet met the plan's done-criteria — you are not iterating, you are executing. Don't satisfice before you're done.

**The ROI check (Part 2) skips when:**
- This is the first task of the session and no competing priorities are known yet
- The plan explicitly sequences this as "do next and there is no reason to question the plan here" (the check should fire, but return immediately with "plan is still right")

**The effort classification (Part 3) skips:**
- Never. 10 seconds before any task prevents both over-effort and under-effort. There is no task too small to classify.

**Do NOT skip even when tempted:**
- "This is clearly not good enough yet" — if it's clearly not good enough, name what specifically is missing and that IS your satisficing answer (don't stop; what to fix is now explicit).
- "I'm on a roll" — momentum is not a satisficing criterion. Stop and check anyway.
- "The user asked me to keep going" — satisficing applies to diminishing-returns iteration, not to in-scope tasks. If the user asked, that is scope, not iteration.

---

## Anti-pattern: satisficing theater

Using "good enough" to justify skipping required steps rather than stopping unnecessary iteration. The test: does the output meet the plan's done-criteria and would a real user not be blocked? If no: it's not good enough yet. If yes: it's good enough.

**Trace:** Satisficing concept (Simon 1956) — satisfactory + sufficient; humans optimize enough, not maximally. Effort-blind persistence (anti-sycophancy-checklist, arXiv 2506.17367) — agents accept absurdly low payoffs for large effort because they lack the disutility signal humans have. Trajectory bloat (arXiv 2511.00197) — failed agent trajectories are consistently longer than successful ones; more effort is a signal of being stuck, not progress. ROI prioritization: goal-directed-continuation.md step 3.
