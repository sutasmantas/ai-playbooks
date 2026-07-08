# Lesson 04 — Feature-Gap Workaround

**The pattern**
A verification step cannot be performed because the tooling, environment, or access does not exist. The gap is acknowledged in a comment, a TODO, or a ticket note — and then the task is marked done. The note becomes the official place where a class of bugs is permitted to live, because "we knew we couldn't check that." For instance, a team integrating against a third-party payment API might write "could not test refunds against the sandbox in staging — noted" and move on, leaving refund-flow bugs to surface in production. Or a data pipeline whose load-test environment can only handle 10% of production volume, with a "performance under real load is untested — noted" caveat that turns out to mask an O(n²) algorithm.

**Root cause**
Marking work done is rewarded; flagging incompleteness is friction. A TODO feels like accountability — it names the problem — but it does not actually block delivery. Over time the project accumulates a layer of acknowledged gaps that nobody owns and nobody revisits, and each gap is a permanent hiding place for a category of failure.

**Rule adopted**
A missing verification path is a blocker, not a footnote. Either the tooling is built, a workaround is implemented and exercised, or the task remains open. "Noted and shipped" is not an acceptable resolution.

**How to recognize this in your project**
- Code comments along the lines of "can't test this here"
- Tickets closed with caveats in the resolution field
- Recurring bugs in areas with known verification gaps
- Staging / test environments that diverge from production in load-bearing ways
- A backlog of "improve test coverage for X" tickets that never get pulled

**Linked principle:** [[feature-gap-rule]]
