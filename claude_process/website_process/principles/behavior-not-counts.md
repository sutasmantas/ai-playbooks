# Principle: Behavior, Not Counts

**Use when:** writing or reviewing any test assertion, validator check, or "done" definition. Before signing off that a feature works.

**Rule**
Validator assertions describe what a feature DOES, not what it produces. Counts are diagnostic data, never pass/fail criteria.

**Why**
A count says "the artifacts exist." A behavior says "the artifacts do their job." The two are not the same and the gap is where bugs hide. See lesson 03: 13 walls existed at correct coordinates and still didn't block sight.

**How to apply**
- For every artifact, ask "what is this supposed to DO?" — that's your assertion.
- Walls block sight → place probes on each side and assert occlusion.
- Tokens render → sample pixel colors at expected positions.
- Buttons function → click them and assert the resulting state.
- Counts may appear in diagnostic output, never in pass/fail logic.
- If you can't articulate the behavior, the feature isn't specified well enough yet.

**Trace:** [[03-counts-vs-behavior]], [[01-rest-pass-isnt-truth]]
