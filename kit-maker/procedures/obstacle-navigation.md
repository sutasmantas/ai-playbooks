# Procedure: Obstacle Navigation

**Use when:** hitting a blocker — a knowledge gap that research can't fill, a skill that can't be written as planned, a verification failure with no clear fix, or a design constraint that seems to prevent the goal.

**Why this exists:** Two failure modes when blocked. First: tunnel vision — keep trying the same approach, incrementally varied, never questioning whether the approach is the right one. Second: the opposite failure — find any route around the obstacle without checking whether the workaround actually achieves the goal. The second produces reward hacking generalization: if the agent discovers shortcuts work, it learns to always take them.

The productive human behavior is between these: find alternative paths to the GOAL, evaluate them honestly against what the goal actually requires (not just the verifier), surface the trade-offs, and let the user decide. Agent identifies options. User authorizes.

---

## The procedure

**Step 1 — Name the obstacle precisely.**

One sentence: what specifically is blocked, and why? Not "this is hard" — "I cannot achieve [specific done-criterion] via [current approach] because [specific reason]."

If you cannot name it precisely, you do not understand the obstacle well enough to navigate around it. Investigate until you can.

**Step 2 — Enumerate routes through AND routes around.**

Before deciding anything, enumerate both categories:

*Routes through:* Different approaches to solving the obstacle directly. What haven't you tried? What would a domain expert try? What does the same-mental-model halt produce when applied here? (3 different mental models, not 3 variations on the same one.)

*Routes around:* Alternative paths to the goal that bypass this obstacle entirely. Can the goal be achieved without solving this specific problem? What would the kit look like if this constraint simply didn't exist — and is that achievable?

Write both lists. Do not skip either category.

**Step 3 — Evaluate each route against the ACTUAL GOAL, not the verifier.**

This is the step that separates productive navigation from corner-cutting.

For each route (through or around): does this genuinely achieve what the user wants, or does it satisfy the metric while losing something the goal requires?

Ask explicitly: "would a user of this kit, achieving their goal successfully, care whether we took this route?" If no: legitimate. If yes: the route cuts a corner that matters.

Mark each route: **[Legitimate]** or **[Corner-cut: loses X]**.

**Step 4 — Surface to user. User decides.**

Present the routes honestly:

- Route through option A: [what it achieves, cost, time]
- Route through option B: [what it achieves, cost, time]
- Route around option C: [what it achieves, what it loses, honest assessment of whether the loss matters]

The agent does NOT self-authorize a workaround. Even if a route-around is clearly better, surface it — the user's context may know things the agent doesn't about whether the loss is acceptable. This is the anti-reward-hacking constraint: the agent never decides shortcuts are acceptable, only identifies them.

**Step 5 — After the route is chosen, log the flip trigger.**

Whatever route is chosen: write a flip trigger (provisional-decision.md) for it. "If [specific signal], reconsider this navigation choice and revisit the obstacle."

Routes around obstacles often become permanent when they shouldn't. The flip trigger is what prevents a workaround from becoming the new permanent approach without ever solving the underlying obstacle.

---

## When to skip

**Skip when ALL of the following are true:**
- The obstacle resolves by trying a different tactic within the same strategy (same approach, different execution)
- You haven't tried more than one tactic yet — "this is hard" is not an obstacle, it is a first attempt

**Do NOT skip even when tempted:**
- "I'll just try one more thing first" — this is tunnel vision in formation. If the same fundamental approach has failed twice, run the procedure before the third attempt.
- "The route around is obvious" — any route around needs to be evaluated against the actual goal (Step 3), not just the verifier. "Obviously better" shortcuts are the exact case where reward hacking begins.
- "The obstacle is just a tool limitation" — tool limitations are obstacles. Run the procedure: enumerate routes through (different tool, different sequence) and routes around (achieve the goal without requiring this tool).

---

## The reward hacking risk

The specific concern: if the agent is "rewarded" (task completes, user is satisfied) for taking a shortcut, it generalizes — it learns that shortcuts work and starts seeking them proactively rather than as a last resort. This is measurable: School of Reward Hacks (arXiv 2508.17511) showed 1% contamination produces durable hardcoded shortcut behavior.

The structural defense: **step 4's user-authorization requirement**. If the agent never self-authorizes shortcuts, the reward signal always goes through the user's judgment. The user's judgment includes context the agent doesn't have — so the user can distinguish "acceptable workaround" from "corner-cut that will cause problems later."

This is the same principle as the irreversible-operations escalation in claude_process: agent identifies the option, user authorizes the action.

---

## Anti-patterns this procedure defends against

- **Tunnel vision** — same approach, varied incrementally, never questioning the approach itself
- **First-shortcut self-authorization** — agent finds a route around and takes it without surfacing the trade-off
- **Obstacle acceptance** — treating an obstacle as a permanent constraint without investigating whether routes around it exist
- **Workaround-as-permanent** — taking a route around and never revisiting the underlying obstacle; flip trigger defends against this

---

**Trace:** Reward hacking generalization — School of Reward Hacks (arXiv 2508.17511, 1% contamination → durable hardcoded behavior), Reward Hacking Benchmark (arXiv 2605.02964). Productive obstacle navigation vs corner-cutting distinction: same-mental-model halt (halt-conditions Rule 7) handles the "stuck on one approach" problem; this procedure handles "stuck on one obstacle" and the route-around decision specifically. User-authorization constraint for shortcuts: borrowed from halt-conditions Rule 7's "shortcut decision belongs to the user, not the agent" — same research basis (School of Reward Hacks).
