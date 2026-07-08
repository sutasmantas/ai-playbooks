# Principle: Expected Before Change

**Use when:** writing a test, fixture, snapshot, or acceptance criterion — BEFORE writing the implementation. Also when reviewing a PR that updates snapshots.

**Rule**
Acceptance criteria — including specific expected values — are written BEFORE the change. Validators are never back-filled from outputs.

**Why**
Back-filled validators describe what the code did, not what the requirement was. They pass on bugs as readily as on correct implementations. See lesson 02: a CLI's stdout snapshot was captured with space-padded columns and frozen as "the spec" — the spec actually called for tab-separated output, but the test passes forever.

**How to apply**
- Write the test (with hardcoded expected values) BEFORE writing the implementation.
- When updating a snapshot, ask "did the requirement change?" — if not, the snapshot update is suspect.
- Expected values come from the spec or the user, never from a recent test run.
- If you can't articulate the expected output before coding, the requirement isn't clear enough.
- TDD enforces this naturally; non-TDD workflows need an explicit gate.

**Trace:** [[02-self-agreeable-validator]]
