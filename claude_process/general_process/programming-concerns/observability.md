# Concern: Observability

**Rule**
Long-running code emits metrics, structured logs, and (where useful) traces sufficient to answer "is it healthy?" and "what just happened?" without attaching a debugger to production.

**Use when**
Services, data pipelines, scheduled jobs, anything that runs unattended. NOT for one-shot CLIs that exit cleanly or libraries (caller's concern). Distinct from `error-handling-and-logging` — that's about correctness; this is about ops visibility.

**How to apply (skeleton — fleshed out in Slice 4)**
- Health-check endpoint or equivalent (services).
- Key metrics: request rate, error rate, latency percentiles (RED method) or similar for non-request workloads.
- Structured logs at INFO for state transitions, ERROR for failures, no DEBUG in production.
- Tracing optional — fire when latency or call-graph debugging matters.

**Skip if**
Project kind is CLI / library / script — observability is the caller's concern, not the artifact's.

**Project kinds applicable:** service, data-pipeline (PRIMARILY). Kind-specific.
**Language-specific addendum:** YES — OpenTelemetry SDK, Prometheus client, language-specific tracing libs differ.

**Trace:** general — every unattended workload needs operational sight.
