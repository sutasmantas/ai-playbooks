# Domain Brief: Code Review Feedback Generator

**Phase 2 output.**

---

## Domain and purpose

Given a pull request diff and description, produce structured review feedback: severity-classified comments (blocker / warning / suggestion / nit), line-specific references, and a reviewer's overall verdict (approve / request changes / needs discussion). A developer reading the review should know exactly what to fix, what priority to assign, and why — without asking follow-up questions.

## User

Developers reviewing code from teammates. They know the codebase context but may be reviewing quickly. They need the output to catch important issues reliably, classify them correctly, and communicate them without tone problems that create friction.

## Quality dimensions (what good looks like)

1. **Actionability** — every comment specifies what to change and why; no "consider this" without a concrete alternative. A comment without a fix direction is not actionable.
2. **Severity accuracy** — blockers are correctness bugs, security vulnerabilities, or breaking changes; nits are style preferences. Mis-severity creates noise (false blockers) or misses risk (false nits).
3. **Coverage** — important issues in the diff are surfaced; nothing correctness-critical is silently missed. Over-coverage (too many minor comments drowning critical ones) is also a failure mode.
4. **Specificity** — comments reference exact file + line number, not vague sections. "In the auth module" is a gap; "auth/login.py:42" is specific.
5. **Tone** — feedback targets the code, not the coder; no blame language; explains reasoning without condescension.

## Failure modes (what bad looks like)

- Style preference labeled as "blocker" (severity inflation) — creates friction, reviewer credibility drops
- Security issue labeled as "nit" or missed entirely (under-severity) — real risk passes unnoticed
- Comment says "this is bad" or "this is wrong" without explaining why or how to fix it
- Every comment is blocker-level — reviewer has "cry wolf" problem
- Review approves a diff with an unresolved correctness issue
- 40 nit-level comments burying the 2 real blockers

## Scope

In: PR diff + optional PR description and context. Out: structured feedback with severity labels, line references, and reviewer verdict. Out of scope: running tests, checking CI, verifying external dependency behavior, team-specific style enforcement (unless style guide is provided as context).

## Done criteria

A developer reads the review and knows: exactly what must be fixed before merge, what is optional but suggested, what the reviewer's overall assessment is — without needing to ask clarifying questions on any specific comment.

## Structurally different from meeting notes summarizer

| Dimension | Meeting notes | Code review |
|-----------|--------------|-------------|
| Task type | Extractive | Mixed (extract issues + generate feedback) |
| Quality definition | Objective (item has owner or not) | Subjective (is this actionable enough?) |
| Severity classification | Binary (decision vs open question) | 4-level scale with contested boundaries |
| Research availability | Strong practitioner consensus | Moderate — more fragmented |
| Done criteria | "That's everything I needed to remember" | "I know what to fix and why" |
