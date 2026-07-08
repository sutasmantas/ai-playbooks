# General-programming process kit

A drop-in bootstrap kit for any new non-website programming project — CLI tools, libraries, services, scripts, data pipelines. Forked from `website_process/` (which retains the same architecture for web apps); the two coexist. After the agent runs the interview and generates project-specific files, **the kit is fully delete-safe** — every generated file is self-contained and does not reference paths inside the kit.

## Sibling kit

For **web apps** (browser-rendered UIs, SSR/CSR frameworks like Next.js / Astro / Remix, static sites), use `website_process/` instead. That kit ships browser-specific concerns (accessibility, responsive design, SEO, browser compat, consent and privacy, internationalization) and a Playwright-based validator. This kit (`general_process/`) drops those and ships language-specific test-runner validators instead.

Pick the kit by project shape: does the user observe the artifact through a browser? → `website_process/`. Otherwise → `general_process/`.

## What's in here

```
general_process/
├── README.md                  this file
├── ENTRYPOINT.md              agent procedure — read FIRST
├── decision_log.md            kit-build decisions (not generated; lives with the kit)
├── lessons/                   6 illustrative-pattern lessons (the WHY)
├── principles/                7 rules + operational directives (the WHAT)
├── procedures/                10 workflow procedures invoked on trigger
├── programming-concerns/      10 broader concerns (error-handling, secrets, deps, observability,
│                              ai-authoring-security, performance, security, distribution,
│                              concurrency, data-and-schema)
├── interview/                 3 question scripts (~16 questions total)
├── templates/                 15 files
│   ├── CLAUDE.md.template
│   ├── EXCEPTIONS.md.template
│   ├── PROCESS_CHECKLIST.md.template
│   ├── PROJECT_PLAN.md.template
│   ├── decision_log.template.md          (generated only if user opts in)
│   ├── pitfall_register.template.md       (ships empty)
│   ├── env.example.template
│   ├── validator_starter_pytest.py.template       (Python projects)
│   ├── validator_starter_vitest.ts.template       (Node/TypeScript projects, non-browser)
│   ├── validator_starter_go-test.sh.template      (Go projects)
│   ├── validator_starter_cargo-test.sh.template   (Rust projects)
│   ├── validator_starter_adapt.template.md        (guidance for other languages)
│   ├── verifier_prompt.template.md
│   ├── next_action.md.template
│   └── plan.md.template
└── canary/
    └── known-bad-example.md   intentionally-broken calibration artifact for the verifier
```

## How to use it

1. Paste this `general_process/` folder into the root of a new project repo.
2. Tell the agent: "Read `general_process/ENTRYPOINT.md` and follow it."
3. Answer ~16 interview questions (project context including project kind + language + tooling commands + CI provider + package manager, truth surfaces, scope/concerns + decision-log opt-in + criticality + lifespan).
4. The agent picks the right validator starter for your stack (pytest / vitest / go test / cargo test / adapted), generates the project files inline, and dispatches an independent verifier subagent on its own output.
5. **Review `PROJECT_PLAN.md` before any work begins** — the agent generates it as the master checklist seeded from your answers + the detected codebase, shows you its summary, and sets its `Next action` to your review. It is the most important file in the project: correct wrong scope/statuses NOW; the agent must not start an item until you confirm it.
6. **Delete or gitignore `general_process/` after bootstrap.** The generated files reference nothing inside the kit; deletion is safe.

## Generated files

- `CLAUDE.md` — always. Project kind, language, truth surface, hard rules, full inlined text of every selected concern (with language-specific addendum filled from detected stack).
- `PROJECT_PLAN.md` — always. **The master checklist** — workstreams, statuses, milestones, evidence-to-close. The WHAT of the project; the file users and agents open first every session. Seeded at bootstrap from the end-goal interview answer + detected codebase state (never generated empty).
- `process_checklist.md` — always. Iteration loop and "done" definition with concern-check items — the HOW that runs around each PROJECT_PLAN item. (Renamed from `project_checklist.md` 2026-06-10 to stop the name colliding with the plan.)
- `scripts/validate_state.{py|ts|sh}` — always. One of the starter scripts, customized to the user's stack and behavior assertions.
- `scripts/verify_prompt.md` — always. The tier-2 verifier prompt for ongoing work.
- `.env.example` — always. Listing every env var the project reads, with obviously-fake placeholders.
- `pitfall_register.md` — generated when criticality is Internal / External / Safety (skipped for Throwaway/Hackathon). Starts empty; project-specific failures get added as they emerge.
- `EXCEPTIONS.md` — same right-sizing as pitfall_register. Read by the verifier on every run when present; open exceptions surface as informational, expired exceptions become blockers again. Every entry must have a `Revisit by:` date or condition — no permanent waivers.
- `canary/known-bad-example.md` — same right-sizing as pitfall_register. Intentionally-broken artifact used to calibrate the verifier monthly. If the verifier ever returns GREEN on this file, it's broken; diagnose before trusting other audits.
- `decision_log.md` — opt-in. Generated only if the user says yes at interview 03.4.

## Concerns

The 10 programming concerns are deliberately language-agnostic; each has a `Language-specific addendum` subsection the agent fills from the detected toolchain at bootstrap. Cross-cutting concerns (apply to most project kinds): error-handling-and-logging, secrets-and-config, dependency-and-supply-chain, ai-authoring-security, security, performance-and-profiling. Kind-specific concerns (filtered by interview 01.2): observability, concurrency-and-state, data-and-schema, distribution-and-release.

A CLI tool will typically opt in to ~5-6 concerns; a service will opt in to ~9-10. The interview routes the defaults; the user overrides per concern.

## Verifier layer

The kit's `scripts/verify_prompt.md` ships two parallel auditors:

- **Completeness Auditor** — "what's MISSING? what would a senior engineer be unhappy was NOT done?"
- **Correctness Auditor** — "what's WRONG? if you had to ship this, what would you fix first?"

They're dispatched in parallel (independent subagents, no shared context, Read/Grep/Glob ONLY). Both reports are surfaced verbatim to the user — the orchestrator does NOT summarize. A numbered checklist (14 items) keeps the verifier auditable and makes drift detectable over time.

Tier-1 (the validator script) does the work that needs Bash, network, and symbol resolution; tier-2 (the auditors) reads structured output from `diagnostics/`. This separation lets the auditors run with restricted tool scope without sacrificing the checks they enforce.

## Differences from website_process

The architecture, the 10 procedures, the 7 principles, the two-auditor verifier pattern, the criticality/lifespan matrix, the trivial-diff threshold, the delete-safe lifecycle, and most templates are byte-identical or near-identical between the two kits. What changed:

- **Concerns layer**: `website-concerns/` (a11y, perf, responsive, SEO, security, deploy, browser-compat, ai-authoring-security, consent-and-privacy, i18n) → `programming-concerns/` (error-handling-and-logging, secrets-and-config, deps, observability, ai-authoring-security, performance, security, distribution-and-release, concurrency-and-state, data-and-schema). Same count, different scope.
- **Validator starters**: Playwright/TS + bash/curl → pytest/vitest/go-test/cargo-test + an adapt template for other languages.
- **Interview**: dropped browser-specific questions; added project-kind question to route concern defaults; truth-surface broadened beyond "rendered page" to include exit codes, return values, response bodies, file outputs.
- **Verifier checklist**: check #8 swapped from "no hydration warnings" to "no silent runtime warnings"; check #11's AI-introduced-regression patterns list adapted for language-agnostic anti-patterns (pickle.loads of untrusted, `eval` of external, raw SQL concat, `random.random()` for tokens, etc.).
- **Lessons + principles**: rewritten with general-programming examples (war stories) while preserving the underlying patterns verbatim.

See `decision_log.md` in this directory for the full rationale of each fork decision.

## Lifecycle: delete-safe

The kit can be deleted, kept and gitignored, or kept for reference after bootstrap. The generated files reference nothing inside the kit.
