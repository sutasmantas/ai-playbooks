# Lesson 03 — Counts vs. Behavior

**The pattern**
Tests assert that the right number of things exist rather than that the things do what they should. The cardinality is correct; the behavior is not checked. Pass means "an artifact is present in the expected quantity," not "the feature works." For instance, a team testing a search function might assert `len(results) == 5` and consider the feature verified — without ever checking that any specific search term returns the right result, or that the results are ordered as the spec requires. Or a CLI argument parser tested by counting `assert len(parsed.flags) == 3` while never exercising any one flag's documented effect on the program's behavior.

**Root cause**
Counts are easy to assert, stable across runs, and produce clean pass/fail signals. Behavior requires invocation, state transitions, and observation of side effects — all harder to write and more brittle. The test author reaches for the easy assertion and calls it coverage. Over time the suite drifts toward shape-checking and away from function-checking.

**Rule adopted**
Tests assert the behavior the feature is supposed to produce: the function returns the right value for a known input, the side effect actually happens, the exit code matches the documented contract. Existence and cardinality checks are supplements, not substitutes.

**How to recognize this in your project**
- Test names contain "returns N items" or "exposes K methods" far more often than verbs like "computes," "sorts," "rejects"
- High coverage numbers paired with frequent behavior regressions
- Tests pass against code whose actual logic is stubbed or mocked away
- Reviewers cannot tell from a test name what user-visible behavior is guarded
- `len()`, `count`, and `assertIsNotNone` dominate the assertion surface

**Linked principle:** [[behavior-not-counts]]
