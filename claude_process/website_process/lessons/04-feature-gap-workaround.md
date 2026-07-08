# Lesson 04 — Feature-Gap Workaround

**The pattern**
A verification step cannot be performed because the tooling, environment, or access does not exist. The gap is acknowledged in a comment, a TODO, or a ticket note — and then the task is marked done. The note becomes the official place where a class of bugs is permitted to live, because "we knew we couldn't check that." For instance, a team shipping an OAuth callback flow might write "could not verify against the live provider in staging — noted" and move on, leaving redirect-URI mismatches to surface in production. Or a CDN cache-purge integration where the staging environment has no CDN, the verification is skipped, and stale assets are discovered weeks later by users.

**Root cause**
Marking work done is rewarded; flagging incompleteness is friction. A TODO feels like accountability — it names the problem — but it does not actually block delivery. Over time the project accumulates a layer of acknowledged gaps that nobody owns and nobody revisits, and each gap is a permanent hiding place for a category of failure.

**Rule adopted**
A missing verification path is a blocker, not a footnote. Either the tooling is built, a workaround is implemented and exercised, or the task remains open. "Noted and shipped" is not an acceptable resolution.

**How to recognize this in your project**
- Code comments along the lines of "can't test this here"
- Tickets closed with caveats in the resolution field
- Recurring bugs in areas with known verification gaps
- Staging environments that diverge from production in load-bearing ways
- A backlog of "improve test coverage for X" tickets that never get pulled

**Linked principle:** [[feature-gap-rule]]
