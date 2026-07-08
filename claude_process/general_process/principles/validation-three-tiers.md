# Principle: Validation in Three Tiers

**Use when:** defining what "done" means for any feature, designing the validator script, or deciding whether a tier-1 pass is sufficient to ship.

**Rule**
Tier 1: automated diagnostics (cheap, run constantly). Tier 2: independent verifier (the actual gate). Tier 3: scenario tests (regression-catchers, run before ship). Tier 1 alone is never sufficient.

**Why**
Automation rubber-stamps what it's been told to check. Independent eyes catch what the frame excludes. Scenario tests catch what unit-level validation can't see. See lessons 01 and 05: REST-pass without truth-surface check + self-review by the producer = silent regressions.

**How to apply**
- **Tier 1:** Scripts that check API responses, schemas, counts. Fast feedback. Diagnostic data.
- **Tier 2:** An independent verifier (subagent or person) with zero context of what was built and a "find problems" prompt. This is the actual gate.
- **Tier 3:** End-to-end scenario tests that simulate a real user session. Catch regressions humans would catch at the desk.
- Never skip tier 2 because tier 1 passed.
- A feature isn't done until tier 2 has signed off with sight of the truth surface.

**Trace:** [[01-intermediate-pass-isnt-truth]], [[05-verifier-as-gate]]
