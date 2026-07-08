# Principle: Behavior, Not Counts

**Use when:** writing or reviewing any test assertion, validator check, or "done" definition. Before signing off that a feature works.

**Rule**
Validator assertions describe what a feature DOES, not what it produces. Counts are diagnostic data, never pass/fail criteria.

**Why**
A count says "the artifacts exist." A behavior says "the artifacts do their job." The two are not the same and the gap is where bugs hide. See lesson 03: a search returning `len(results) == 5` doesn't tell you whether any of those results is correct or ordered as the spec requires.

**How to apply**
- For every artifact, ask "what is this supposed to DO?" — that's your assertion.
- A CLI flag turns off colorization → invoke with the flag and assert the output has no ANSI escape codes.
- A library function deduplicates a list → call with a known-duplicate input and assert the output is deduplicated and ordered as documented.
- A service handler creates a user → POST and then GET the user, assert the returned body matches the input.
- Counts may appear in diagnostic output, never in pass/fail logic.
- If you can't articulate the behavior, the feature isn't specified well enough yet.

**Trace:** [[03-counts-vs-behavior]], [[01-intermediate-pass-isnt-truth]]
