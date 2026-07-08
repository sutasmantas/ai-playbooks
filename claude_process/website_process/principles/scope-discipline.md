# Principle: Scope Discipline

**Use when:** about to commit, push, or merge a change. Before "while I'm in here" creep takes over the diff.

**Rule**

The change you ship must match the change that was requested. Touching files outside scope, adding unrequested abstractions, or "improving" code adjacent to the actual change creates churn the verifier cannot catch and the reviewer cannot evaluate.

**Why**

Scope creep is the single most common source of regressions in well-tested codebases. The test suite covers the requested change; the unrequested cleanup is unverified. The unrequested change also expands the diff the reviewer must read, increasing the chance they miss the actual problem in the noise. Most teams have a name for this incident: "the small refactor that broke production."

**How to apply**

- **Before committing, diff against the original task.** Did you touch only what was needed? If extra files appear in `git status`, justify each one or revert.
- **Forbidden in a single commit:** adding error handling for scenarios that cannot happen; abstractions without a concrete second use case; full-file rewrites for small changes; dependency upgrades bundled with feature work; formatting-only changes inside a behavioral commit; renaming variables across files not directly touched by the task.
- **Allowed, but separately:** unrelated cleanup, in its own commit (and ideally its own PR).
- **If you find a real bug while doing scoped work,** open a ticket. Do not fix it in the current commit unless it blocks the current task.
- **The reviewer's question is "does this diff do what the task said?"** Anything beyond that is friction; friction blocks merges and hides regressions.

**Trace:** adapted from `anti-overengineering` in [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules). Complements [[refactoring-safety]] ("a refactor that also adds a feature is a feature — split it").
