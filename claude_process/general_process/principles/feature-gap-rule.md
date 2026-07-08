# Principle: Feature-Gap Rule

**Use when:** verification of a feature is blocked by missing tooling, missing access, or missing environment. Also when you catch yourself writing "couldn't verify because X" in a commit or PR.

**Rule**
If verification is blocked by missing tooling, build the missing tool first. "Workaround + note" is forbidden.

**Why**
Acknowledging a verification gap doesn't close it. The gap becomes the place future bugs hide and future agents normalize. See lesson 04: a payment-API integration was shipped with "could not test refunds against the sandbox in staging — noted," and the refund-flow bug surfaced in production.

**How to apply**
- A task is not done until it can be verified, end-to-end, with a command that exits with a clear pass/fail.
- If a tool is missing, building it is part of the current task — not a backlog item.
- Reject phrases like "couldn't verify because X" appearing in commit messages or PRs.
- Estimate task cost INCLUDING the tooling cost; don't pretend the gap doesn't exist.
- If you genuinely can't build the tool right now, the parent task is blocked, not done.

**Trace:** [[04-feature-gap-workaround]], [[01-intermediate-pass-isnt-truth]]
