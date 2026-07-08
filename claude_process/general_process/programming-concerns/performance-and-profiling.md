# Concern: Performance and Profiling

**Rule**
Performance is measured before optimized. Hot paths have benchmarks. "Slow" is a number with a threshold and a profile, not a vibe.

**Use when**
The project has a stated performance target (latency SLO, throughput goal, memory ceiling) OR a user complaint about slowness OR a hot path identified by profile. Otherwise, do not optimize speculatively.

**How to apply (skeleton — fleshed out in Slice 4)**
- Before optimizing: profile (language-idiomatic — `pprof`, `cProfile`, `criterion`, `clinic`, etc.).
- Benchmark the hot path; record baseline.
- Optimize only the measured bottleneck; re-measure.
- Speculative optimization (clever loop, micro-bench-driven rewrite) goes through verifier scope-discipline check.

**Skip if**
No performance target and no observed problem.

**Project kinds applicable:** CLI, library, service, data-pipeline (situational across all). Kind-specific intensity.
**Language-specific addendum:** YES — profiler tooling differs sharply.

**Trace:** general — premature optimization is the cliché but the underlying discipline (measure first) is real.
