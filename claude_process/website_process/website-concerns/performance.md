# Concern: Performance

**Rule**
Set a performance budget at project start and validate against it on every PR. Core Web Vitals (LCP, INP, CLS) and bundle size are the default metrics.

**Why**
Performance regressions arrive one commit at a time and are invisible at the desk on a fast laptop with a fast connection. By the time a user notices, the budget has been blown for months. Same shape as lesson 06 (build new vs validate old) — drift you don't measure becomes drift you don't see.

**How to apply**
- Define the budget concretely: e.g., LCP < 2.5s on mid-range mobile, total JS < 200KB gzipped, no third-party bundle > 50KB without explicit approval.
- Run Lighthouse (or `unlighthouse` for multi-page) in CI. Fail the build on regression past budget.
- Use the validator's `print_diagnostics()` to log bundle sizes, route timings — diagnostic only, not pass/fail (those go in Lighthouse).
- For dynamic content: measure server response time AND time-to-rendered (the truth surface, not the response).
- Treat image assets as code — every image needs explicit dimensions, modern format, and lazy loading where appropriate.
- Profile before optimizing. Devtools Performance tab > guesswork.

**Skip if**
Internal tool with a captive audience on a controlled network. Still set a loose budget — performance debt compounds.

**Trace:** general — not from a war story in this kit.
