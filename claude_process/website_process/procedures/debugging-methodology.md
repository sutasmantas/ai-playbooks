# Procedure: Systematic Debugging

**Use when:** encountering any bug, test failure, unexpected behavior, or production incident. Before changing code to "fix" anything.

The procedure runs in five steps, in order. Do not skip.

## Step 1 — Classify impact

Before investigating, write down in one sentence:
- What user-visible behavior is broken?
- How many users are affected (1, some, all)?
- Is data integrity at risk (yes/no)?
- Is there a workaround?

If you cannot answer these, your bug report is incomplete — gather more information before continuing. A vague "it's broken" report is not a debugging starting point.

## Step 2 — Gather context

Read the relevant artifacts BEFORE forming a hypothesis. Specifically:
- The stack trace, top-to-bottom AND bottom-to-top. The bottom of the stack is usually where the bug lives; the top is where you noticed it.
- The most recent commit log of the touched files.
- The relevant configuration / env vars at the time of failure.
- Any error tracking output (Sentry, Bugsnag) for similar past incidents.

Do not skip this step because "you already know what's wrong." Confirmation bias starts here.

**If gather-context grows beyond ~5 file reads or starts pulling in unrelated code paths: delegate to a subagent, do NOT deepen main-thread reading.** Spawn a fresh-context subagent with the specific question ("trace the path from X to Y," "find every caller of Z") and read its summary. This is Anthropic's documented pattern (`code.claude.com/docs/best-practices`): context-pollution from open-ended research is a measured failure mode, and "use subagents to investigate" is the named fix. Keep the main thread's context window tight by paying research cost in a separate subagent's context.

## Step 3 — Check for regression

Did this work before? When?
- Use `git bisect` if the change window is unclear.
- Check `decision_log.md` and the iteration log for related changes.
- Confirm against the project's truth surface from the period when it last worked.

A regression has a different fix path than a never-worked bug. Knowing which class you're in changes the investigation.

## Step 4 — Reproduce deterministically

Before you change a single line of code, reproduce the bug. The reproduction must be:
- **Repeatable** — works every time, not "sometimes"
- **Local** — you can run it without external services flaking
- **Captured** — write the reproduction as a failing test, even if you'll throw it away later

If you can't reproduce deterministically, your fix has nothing to verify against. Stop and find the trigger.

## Step 5 — Root cause, not symptom

Once you can reproduce, find the actual cause. Specifically:
- Read the failing code path bottom-up (the error site backwards through the stack).
- Identify the first place the state went wrong, not the last place it crashed.
- Verify the cause by deliberately reverting the suspected line — does the bug return?

"It works now" is not a fix. "I understand why it was broken and why this change fixes it" is a fix.

## Common failure-mode patterns

Check first when triaging — if your bug matches one of these, the procedure above still applies but you have a starting hypothesis:

- Null/undefined dereference after an awaited promise
- Race condition between concurrent state writes
- Resource exhaustion (memory leak, connection pool depletion, file handle leak)
- Serialization edge case (Date with timezone, Number precision, Buffer encoding)
- Off-by-one in pagination, slicing, or array bounds
- Hydration mismatch between SSR and client render
- Cache returning stale data after an invalidation
- Locale-dependent comparison (string sort, number format, date parsing)

**Trace:** adapted from `error-detective` in [rohitg00/awesome-claude-code-toolkit](https://github.com/rohitg00/awesome-claude-code-toolkit). Complements [[verifier-as-gate]] (verifier catches what slipped past; this procedure catches it earlier).
