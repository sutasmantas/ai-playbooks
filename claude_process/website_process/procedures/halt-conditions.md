# Procedure: Halt Conditions (mechanical stop-loss rules)

**Use when:** any non-trivial work — single change, slice, or session. These rules fire automatically; the producer does not invoke them, they invoke the producer.

The rules below are **mechanical**, not aspirational. "The agent will notice it's stuck" is not a halt condition. Each rule below is checkable from transcript or git inspection — by the producer in self-check, by the verifier in audit, or by a human glancing at the work.

The cost of NOT having these: silent-stuck loops burn hours and tokens with no artifact closed. The Replit July 2025 incident and the documented 24-hour $400 Claude Code death-march case both share the same root: no mechanical halt rule fired.

## Agent-enforceable vs external-enforced

Each rule specifies whether the **agent** can self-check it (count-based, visible-context-inspectable) or whether an **external enforcer** (harness, CLI flag, user, CI) must check it (time-based, cross-session, network-based).

LLM agents do NOT internally sense wall-clock time. They can read timestamps from tool calls (`date`, `git log`, file `mtime`) at the moment a tool runs — but they do not have continuous awareness of elapsed duration. Therefore: **wall-clock rules in this procedure are external-enforced, not agent-enforced.** Action-count rules ARE agent-enforceable from visible context (the agent can scroll back through its own tool-call history and count).

Designing a rule as "after 30 minutes" and expecting the agent to enforce it is the same shape of mistake as designing a rule the auditor can't verify with Read/Grep/Glob — the rule looks mechanical but the enforcer can't actually run it.

## The rules

### Rule 1 — Same-action-thrice halt *(agent-enforceable)*

If the last 5 tool calls contain 3 with identical (tool name + sorted arguments), STOP. Do not retry. Pick one:

- (a) Write a "different-approach" entry in `decision_log.md` (or scratch notes if decision_log isn't generated) explaining what you'll try instead.
- (b) Revert to the last passing-test commit and re-plan the slice.
- (c) Escalate to the user.

The agent self-checks by scrolling back through its own visible tool-call history. Same arguments to the same tool producing different results is rare. Expecting different results IS the documented "cargo-cult retry" anti-pattern.

### Rule 2 — Same-error-message halt *(agent-enforceable)*

If the same error string (build, test, runtime, type-check) appears 3 times in a row in tool output, STOP. Three identical errors means the producer is not learning between attempts. Same options as Rule 1.

The agent self-checks by reading the last 3 error-bearing tool outputs in its context.

### Rule 3 — Closeable-artifact plateau halt *(agent-enforceable)*

The agent should be able to point to AT LEAST ONE concrete closeable artifact produced in every window of **5 consecutive code-modifying actions** (Edit, Write, Bash commands that mutate state). Closeable = new test passing, file deleted, function added/removed, `decision_log.md` entry, merged commit. Investigation (Read, Grep, Glob, dry-run Bash) does not count toward closing — it's prep work, not progress.

Self-check: scroll back through the last 5 modifying actions. If none produced a closeable artifact, STOP. The block was silent-stuck — productive-looking output without real advancement. Name one specific thing you will close in the next 3 modifying actions, OR escalate.

This rule is **action-count-based, not wall-clock-based.** The earlier "30 minutes of work" framing was wrong: agents cannot internally sense elapsed time, only count their own tool calls.

### Rule 4 — Slice budget overrun *(mixed enforcement)*

Each slice declares a budget at planning time in one of three units, with the specified enforcer:

- **Attempt count** — *agent-enforceable*. The agent counts modifying actions in its visible context against the declared cap and stops at 100%.
- **Token count** — *harness-enforced*. Set via the CLI/runtime (e.g., `claude --token-budget 600000`), enforced by the harness. The agent SEES the budget number and can self-pace, but the harness halts execution at the cap.
- **Wall-clock duration** — *user/harness-enforced*. A human timer, CI deadline, or scheduled cancellation. The agent CANNOT enforce this itself — it has no continuous time sense. If wall-clock is the budget, an external enforcer must exist.

At 100% budget consumed (by whichever enforcer), STOP. The producer does NOT get to override the budget mid-work. Replanning the budget mid-slice is "done-definition drift" — a named anti-pattern, not a creative solution.

If the budget was genuinely too small: the slice was decomposed wrong. Trigger a replan per `task-decomposition.md` Phase 6, do not silently extend.

### Rule 5 — Iteration cap on RED *(agent-enforceable, already in ENTRYPOINT)*

Documented in ENTRYPOINT step 8: 3 RED verdicts max before escalation to the user. The agent counts RED verdicts in its own context history. Listed here for completeness alongside the other halt conditions.

### Rule 6 — Coordination-cost cap *(retrospective, agent-enforceable)*

If dispatching sub-agents + reading their output for a slice consumed more tokens than doing the work inline would have, the slice is too small for sub-dispatch. This is a retrospective check (after the slice ends, the agent compares sub-dispatch token use vs estimated inline cost) — apply the lesson next time. That class of slice goes inline.

Anthropic's multi-agent research found multi-agent runs use 3-10× tokens typical, 15× extreme. The coordination-cost cap is the practitioner's defense against "more agents = better."

### Rule 7 — Same-mental-model halt + alternative search *(agent-enforceable)*

Rule 3 catches "no closeable artifact in 5 actions." This rule catches the subtler failure: **5 different attempts that all flow from the same wrong mental model.** Different surface actions, same anchored hypothesis. Productive-looking, but the producer is drifting deeper into a dead end.

Trigger (any of):
- 5 consecutive modifying actions on the same approach/hypothesis (regardless of whether they produced artifacts)
- The same error CLASS (not the identical string — that's Rule 2 — but the same category of problem) has hit twice despite different attempted fixes
- A halt from Rule 1, 2, or 3 just fired AND the producer is about to retry on the same mental model

The mechanism (research-backed):
- **Autoregressive anchoring** (arXiv 2511.05766): the first hypothesis becomes the prior for every subsequent token. Naive "ignore the previous" and vanilla CoT do not break it.
- **Canonical Path Deviation** (arXiv 2602.19008): once an agent takes one off-canonical step, the next step is +22.7pp more likely to also be off-canonical. Self-reinforcing drift.
- **Trajectory bloat** (arXiv 2511.00197): failed agent trajectories are consistently *longer* than successful ones. Grinding longer doesn't help; it makes the wrong path worse.

**Response (before the next modifying action):** produce a 4-line artifact in the decision_log (or scratch notes):

1. **Current approach + sunk cost.** One sentence, concrete. *Example: "Trying to make Playwright work with system Chrome on macOS; 4 modifying actions, 2 errors."*
2. **Three fundamentally different approaches.** Each one a different **mental model**, not a different implementation of the same model. "Different Chrome flag" / "set DISPLAY env var" are the same mental model. "Use bundled Chromium instead" / "Skip browser automation entirely" / "Run in CI where setup is known-good" are different mental models.
3. **Done-criteria restated verbatim.** Re-quote from `plan.md` or slice spec. Do NOT paraphrase. Are you actually still solving the same problem?
4. **Pick: cheapest approach that meets criteria.** If cheapest != current, switch and revert current's partial work. If current IS cheapest, write WHY explicitly so the Correctness Auditor can defend the persistence.

**Optional sub-step — surface a shortcut to the user.** If in step 4 a degraded-but-shippable alternative exists alongside the correct-but-slower one, surface BOTH verbatim and let the user pick. **The shortcut decision belongs to the user, NOT to the agent** — blanket "be pragmatic / ship the ugly version" prompts generalize to reward hacking (School of Reward Hacks, arXiv 2508.17511: 1% contamination produces durable hardcoded-test behavior). Surfacing the trade-off keeps the agent from self-authorizing tech debt.

**When this rule does NOT fire:**
- Fewer than 5 modifying actions on the current approach
- Investigation phase (Read, Grep, Glob) — exploring isn't being stuck
- The current approach is making visible progress AND is genuinely the cheapest path

## What to do when a halt fires

For rules 1-3 (loop/stuck):
1. Log the halt event in `decision_log.md` (or `next_action.md` if mid-slice — see `procedures/session-handoff.md`).
2. Pick: alternative approach, revert to last passing commit, or escalate.
3. Do NOT continue the same attempt.

For rule 4 (budget overrun):
- The budget was wrong, the scope was wrong, or both. Phase 6 replan triggers in `task-decomposition.md` apply.

For rule 6 (coordination-cost):
- Structural learning for next slice — not a mid-slice action.

## Anti-patterns this procedure defends against

- **Cargo-cult retry** — same approach, more times, hoping (Rules 1-2)
- **Silent stuck** — looks productive, isn't (Rule 3)
- **Sunk-cost continuation** — "I've already spent 4 hours, can't stop now" (Rule 4)
- **Done-definition drift** — budget or done-criteria silently redefined mid-work (Rule 4)
- **Agent death-march** — unbounded retry/replan with no halt criterion (Rule 5)
- **Effort-blind persistence** — agent grinds for hours on one mental model when 5-minute alternatives exist (Rule 7)
- **Anchored thinking / canonical-path drift** — "different attempts" that all flow from the same wrong hypothesis (Rule 7)
- **Naked "be pragmatic" prompting** — measured anti-pattern (1% contamination = durable reward hacking); shortcut decisions belong to the user, not the agent (Rule 7 optional sub-step)

## When to skip

Never skip the halt rules themselves. They're the bottom-of-the-stack safety net. The "when to skip" question for surrounding procedures (per-slice verifier, decision_log) doesn't apply here.

**Trace:** Rules 1-6 distilled from production loop-detection numbers (markaicode 2026), PRM course-correction research (arXiv 2509.02360), Anthropic and Cognition's multi-agent token-cost measurements, the Replit Rogue Agent incident (July 2025), and named-failure-mode catalogs from Latitude, NimbleBrain, Galileo, and codemanship (Feb 2026). Rule 7 (same-mental-model halt) distilled from Devil's Advocate (Wang et al., arXiv 2405.16334, −45% revisions), Canonical Path Deviation restart pattern (arXiv 2602.19008, +8.8pp SWE-bench Verified), and Selective Quitting (arXiv 2510.16492). Anti-pattern guard from School of Reward Hacks (arXiv 2508.17511) and Reward Hacking Benchmark (arXiv 2605.02964, hardcoded-test behavior documented in both Codex and Claude Code).
