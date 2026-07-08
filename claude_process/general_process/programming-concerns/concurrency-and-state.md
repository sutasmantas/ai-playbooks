# Concern: Concurrency and State

**Rule**
Shared mutable state is the exception, not the default. Race conditions are designed out (immutable data, message passing, single-writer invariants) rather than tested out. Operations that can fail mid-flight are idempotent or transactional.

**Use when**
Services (multi-request handling), data pipelines (parallel workers), CLIs/libraries that expose threading or async APIs. NOT for single-threaded scripts.

**How to apply (skeleton — fleshed out in Slice 4)**
- Identify shared mutable state. Each piece gets ONE owner: single-thread, single goroutine, single actor, mutex with documented invariants.
- External operations are idempotent (retry-safe) or wrapped in a transaction.
- Async error handling is explicit: every spawn has a documented join / cancel / error-propagation path.
- Race conditions are NOT a testing strategy — flaky tests are the symptom, not the diagnosis.

**Skip if**
Project is single-threaded with no concurrency surface.

**Project kinds applicable:** service, data-pipeline, concurrent library (PRIMARILY). CLI / script usually skip.
**Language-specific addendum:** YES — Go's goroutines, Python's GIL + asyncio, Node's event loop, Rust's Send/Sync — each has its own model and its own footguns.

**Trace:** general — race conditions and orphaned async tasks are universal failure modes in concurrent code.
