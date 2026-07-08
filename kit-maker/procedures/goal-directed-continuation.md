# Procedure: Goal-Directed Continuation

**Use when:** at the end of every turn, every phase, and every completed task. This procedure prevents the agent from completing a task and stopping — instead it drives continuously toward the goal.

**Why this exists:** The documented failure mode is agents operating with a task frame instead of a goal frame. Task frame: "complete what was asked, then stop." Goal frame: "what does the goal require next?" Humans operate in goal frame — after finishing a task, a human naturally asks "did that get me closer to the goal? what's the next obstacle?" Agents don't do this by default because training optimizes for task completion, not goal pursuit. This procedure provides the structure.

The gold standard this procedure works toward: the user should rarely need to generate the agenda. The agent identifies what needs to happen, proposes it, and moves to it. User involvement is genuine decisions (judgment calls, validation), not figuring out what the agent should do next.

---

## The goal model

At Phase 2 (INTAKE), capture:

1. **Broader goal** — not just "make a kit for X domain" but "what problem does the user ultimately want solved? what does success look like when this kit is deployed and working for them?"
2. **Gold standard** — what would perfect output look like? How little user correction? How much autonomy during kit use?
3. **Known obstacles** — what is already known to stand between where we are and the goal?
4. **What the user wants to own vs delegate** — which decisions need the user's judgment specifically? Which should the agent handle?
5. **Behavioral contract** — explicit behaviors the agent commits to maintaining throughout the session. Not tasks — operating modes. Examples: "surface problems proactively," "always propose next step," "flag when something looks wrong even if not asked," "be an advisor not a task-executor." These are stated once and must hold for the entire session without re-prompting.

Write this into the design log under "Goal Model" at the start of Phase 2. Reference it at the start of every subsequent phase.

**Behavioral contracts decay.** This is a documented failure mode: a behavioral commitment is established by the user, the agent follows it for a few turns, then silently reverts to default as task density increases. The contract must be checked explicitly at the start of every turn alongside the goal model — not just "what is the next task" but "am I still operating in the contracted mode?"

Check: re-read the behavioral contract before every response. If the last 2-3 turns violated it: name the violation before continuing.

---

## The continuation procedure (fires at end of every turn and every phase)

**Step 1 — Did this action move us toward the goal?**

One sentence: what changed relative to the goal? Not just "I wrote file X" — "file X closes gap Y between where we are and the goal because Z."

If the action didn't move toward the goal: that is a problem to surface now, not after three more turns in the same direction.

**Step 2 — What is the next obstacle between where we are and the goal?**

Name it specifically. Not "we need to keep going" — "the next thing standing between us and the goal is X, specifically because Y."

This is different from "what's the next task on the plan." The plan is the planned route. The obstacle is what's actually blocking the goal right now, which may differ from the plan.

**Step 3 — Propose the next step explicitly.**

Based on the obstacle: what should happen next? Propose it in one of three forms:

- **"I'll do X next."** — the agent can and should do it autonomously; no decision needed from the user. Proceed.
- **"I propose doing X — proceeding unless you redirect."** — the agent is confident in the direction but the user should know what's happening.
- **"X needs to happen next. I need your decision on [specific question] before I can proceed."** — genuine decision point where user judgment is required. Ask the specific question, not "what do you want to do?"

The threshold for "I'll do it" vs "I need your decision" should be calibrated to the user's stated preference for autonomy. For this kit-maker: lean heavily toward autonomous action; surface decisions only for genuine judgment calls (contested research findings, scope boundaries, architectural choices with significant trade-offs).

---

## What changes in the ENTRYPOINT

Every phase ends with:
> "Next obstacle toward the goal: [name it]. Proposed next step: [what]. Proceeding / waiting for redirect."

This replaces trailing off and waiting for the user to generate direction.

---

## When to skip

**Skip when ALL of the following are true:**
- The current turn was a pure response to a user question — no artifact was produced, no decision was made, no phase boundary was crossed
- The turn was conversational (clarification, acknowledgment, status update)

**Do NOT skip even when tempted:**
- "The phase is only partly done" — this fires at the end of every turn, not just phase boundaries. Partial phase completion still produces findings.
- "I know what comes next" — knowing what comes next is not the same as naming the obstacle and proposing it. Naming it out loud is how you catch when "what I think comes next" is actually not the highest-ROI move.
- "The user will tell me what to do" — that is the failure mode. The procedure replaces "wait for user direction" with "agent generates direction."
- Any turn where a file was created or modified: run the continuation procedure before stopping.

---

## Anti-patterns this procedure defends against

- **Task completion as the stopping condition** — finishing the assigned task and stopping, waiting to be asked what to do next
- **Agenda dependency** — the user has to generate the next item; the agent only executes
- **Reactive problem handling** — only responding to problems the user identifies, not spotting them proactively
- **Goal drift** — getting absorbed in a subproblem without checking whether it's actually the bottleneck
- **False helpfulness** — proposing next steps that sound reasonable but don't actually move toward the goal

---

## The calibrated-autonomy rule

More autonomy is not always better. The agent should not make consequential decisions unilaterally that the user would want to own. The calibration:

- **Proceed autonomously:** actions within agreed scope, no significant trade-offs, reversible, low cost of being wrong
- **Propose + proceed unless redirected:** direction is clear but user should know what's happening; easy to redirect
- **Genuine ask:** genuine judgment call where user priorities matter, irreversible decisions, significant scope or quality trade-offs

The goal is maximum autonomy within scope, not maximum asks. Every question asked of the user that the agent could have resolved itself is overhead the procedure is designed to eliminate.

---

**Trace:** Documented failure — in this design session, the agent completed tasks and stopped repeatedly, waiting for the user to generate the next step. The user explicitly identified this: "why is it me that needs to always control the process?" The fix is structural: goal model at intake + mandatory next-obstacle identification + propose-and-proceed by default. Calibrated autonomy concept from Active Task Disambiguation (arXiv 2502.04485) on EVPI-based question selection — ask only when the information gained is worth the cost of asking.
