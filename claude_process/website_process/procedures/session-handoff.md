# Procedure: Session Handoff (end + start ritual)

**Use when:** stopping mid-task and resuming later — typically at the end of a work block, before a break, when context fills, or when the producer switches. Fires twice per boundary: once at session end, once at session start.

Multi-session work suffers from context decay: in-context corrections and decisions die at the session boundary; freeform summaries lose 20-30% fidelity per iteration (Factory.ai's measurement). The fix is NOT bigger context windows or smarter compression — it's **structured handoff artifacts** that the next session re-ingests instead of trying to remember.

Anthropic's `cwc-long-running-agents` harness uses this exact pattern: feature list (JSON) + progress file + git history, with full context resets between sessions rather than rolling summarization.

## Session-end ritual

Before stopping work, in order:

1. **Write or update `next_action.md`** (template at `templates/next_action.md.template`).
   - Resume verb (run | edit | verify | re-plan)
   - First command (exact shell or file:line cursor)
   - Expected observable result
   - Fallback if that fails
   - Options rejected this session (so the next session doesn't re-litigate them)
   - Any open questions for the user

2. **Update plan status.** If a huge task is in progress: mark the current slice's status (`in progress` / `blocked` / `done`). Append to the plan's milestone log if a slice merged this session.

3. **Append to discovered_work.** Anything found this session but not addressed goes into the plan's `Discovered work` section (append-only) — never into the current slice.

4. **Log a decision_log entry** if any non-trivial decision was made this session and `decision_log.md` is generated.

5. **Stop.** Do not "just one more thing." Sunk-cost continuation past a session boundary is a named anti-pattern; the boundary is the natural halt point.

## Session-start ritual

Before resuming work, in order:

1. **Re-read `plan.md` top to bottom.** Not skim. (See `task-decomposition.md` Phase 3.)

2. **Read `next_action.md`.** Your past self left a note. Read it before doing anything else. Then read the last 3 entries of `decision_log.md` (if generated).

3. **Staleness check.** For each file mentioned in `next_action.md` and the last 3 `decision_log.md` entries:
   - Verify the file still exists at that path.
   - Compare the file's modification time to the `next_action.md` timestamp.
   - If any file was modified AFTER `next_action.md` was last written, something has changed underneath you. Do NOT start the planned action — re-plan first. The previous session's intent may not match the current state.

4. **Green-baseline check.** Run the validator (`{{VALIDATOR_CMD}}`). If RED, that IS the work this session — do not start the next_action's command on a broken baseline. Resuming on top of a RED validator means your "fix" might be hiding the original problem.

5. **Reset context, don't summarize.** Do NOT try to recapitulate the previous session into your scratchpad. Iterative summarization decays. The structured files above ARE the handoff; the chat history isn't part of it. Discard prior chat context if your tooling allows it.

## Anti-patterns this procedure defends against

- **Freeform session summary** — iterative summarization loses fidelity each cycle. The structured handoff files exist precisely to avoid this.
- **Reading the chat transcript at session start** — the transcript is yesterday's working memory; it's not the spec. The plan + next_action + decision_log are.
- **Skipping the green-baseline check** — resuming on top of RED hides the real problem under the new work.
- **"Just one more thing" past session end** — sunk-cost continuation past a natural stopping point.
- **Memory bloat** — past decisions still respected even after they've been superseded. Append a `superseded_by:` field to decision_log entries when this happens; the staleness check catches it next session.

## When to skip

- Single-session work — no boundary to hand off
- The session ends mid-slice with no progress (revert and skip the handoff write; the slice is in its original state)

## When NOT to skip even when tempted

- "I'll remember where I was" — the documented failure mode. Write `next_action.md` anyway, takes 60 seconds, prevents 30 minutes of re-orientation next session.
- "The chat history will catch me up" — see anti-patterns above; chat history is not a handoff format.

**Trace:** Anthropic's `cwc-long-running-agents` and "Effective harnesses for long-running agents" (2026), Factory.ai's anchored-iterative-summarization comparison, community session-handoff patterns (Porter "Teaching Claude to Remember Pt.3", softaworks/agent-toolkit/session-handoff). Pairs with `procedures/halt-conditions.md` (in-session stops) and `procedures/task-decomposition.md` (slice-level structure).
