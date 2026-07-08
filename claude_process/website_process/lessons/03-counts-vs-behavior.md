# Lesson 03 — Counts vs. Behavior

**The pattern**
Tests assert that the right number of things exist rather than that the things do what they should. The cardinality is correct; the behavior is not checked. Pass means "an artifact is present in the expected quantity," not "the feature works." For instance, a team testing search facets might assert `facets.length === 5` and consider the feature verified — without ever clicking a facet to confirm it actually narrows the result set. Or an image lazy-loading change verified by counting `<img loading="lazy">` attributes in the DOM, while never scrolling the page to confirm images below the fold actually defer their network requests.

**Root cause**
Counts are easy to assert, stable across runs, and produce clean pass/fail signals. Behavior requires interaction, timing, state transitions, and observation of side effects — all harder to write and more brittle. The test author reaches for the easy assertion and calls it coverage. Over time the suite drifts toward shape-checking and away from function-checking.

**Rule adopted**
Tests assert the behavior the feature is supposed to produce: the click does the thing, the submit sends the request, the toggle changes the state. Existence and cardinality checks are supplements, not substitutes.

**How to recognize this in your project**
- Test names contain "renders" or "has N items" far more often than verbs like "submits," "navigates," "filters"
- High coverage numbers paired with frequent UX regressions
- Tests pass against a component whose event handlers are stubbed out
- Reviewers cannot tell from a test name what user-visible behavior is guarded
- `.length` and `toBeInTheDocument` dominate the assertion surface

**Linked principle:** [[behavior-not-counts]]
