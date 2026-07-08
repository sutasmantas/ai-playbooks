# ENTRYPOINT — agent procedure for bootstrapping a general programming project

You (the agent) are reading this because the user wants you to bootstrap a project-specific process for a new general programming project (CLI tool, library, service, script, or data pipeline — NOT a web app; for web apps use `website_process/` instead). Follow these steps **in order**. Do not skip.

## Hard rules

1. **The kit is a seed.** Generated files must be self-contained — they must NOT reference paths inside `general_process/` (e.g., "see `general_process/programming-concerns/security.md`"). Inline the relevant text into the generated file instead. The user can then delete or gitignore the kit without breaking anything.
2. **Read all lessons before reading any principle.** The patterns make the rules credible. Skipping lessons is a process violation.
3. **One interview question at a time.** Wait for the answer before asking the next.
4. **Confirm before generating.** After the interview, write a one-paragraph synthesis and wait for the user to say "yes, generate" before writing any file.
5. **No placeholders left in generated files.** Every `{{PLACEHOLDER}}` must be replaced. Run a final scan for `{{` after writing.
6. **If a discipline doesn't apply, document the skip.** For each unselected programming concern, write one line into the `What was skipped at bootstrap and why` section of CLAUDE.md.
7. **Verifier-as-gate applies to YOUR output too.** Step 8 dispatches an independent subagent to review the files you generated. You do not self-certify.

## Phase model

The procedure runs 9 steps grouped into 7 phases. Each phase has a named input and a named output — the next phase consumes the previous phase's output.

| Phase | Steps | Input | Output |
|---|---|---|---|
| READ | 1–3 | `general_process/` folder | Agent has internalized lessons + principles + procedures + concerns |
| GATHER | 4 | User answers (live) | `interview_answers` (a working memory snapshot) |
| CONFIRM | 5 | `interview_answers` | Synthesis paragraph + explicit user "yes, generate" |
| CONFIGURE | 6 | Stack info from interview | Validator-starter choice |
| GENERATE | 7 | `interview_answers` + validator choice + concerns | Project files (CLAUDE.md, PROJECT_PLAN.md, process_checklist.md, validator script, etc.) |
| VERIFY | 8 | Generated files (read-only) | Two auditor reports (Completeness + Correctness) |
| HANDOFF | 9 | Auditor reports + generated files | User-facing summary with verbatim findings |

Phase outputs are named so each phase can be retried in isolation if needed. If VERIFY returns RED, re-enter GENERATE with the auditor findings, NOT from the top.

## Procedure

### Step 1 — [READ] Read all lessons

Read every file in `lessons/` (6 files). They establish WHY each rule exists.

### Step 2 — [READ] Read all principles and skim procedures

Read every file in `principles/` (7 files: behavior-not-counts, expected-before-change, feature-gap-rule, validation-three-tiers, verifier-as-gate, anti-sycophancy-checklist, scope-discipline). Each has a `Trace:` line linking to the lesson or external source that produced it.

Then skim `procedures/` (10 files: debugging-methodology, refactoring-safety, api-grounding, session-end-promotion, rule-retirement, task-decomposition, halt-conditions, session-handoff, escalation-clauses, stake-tagging). Unlike principles, procedures are NOT memorized — they're invoked when their trigger fires. Just know they exist so you can pull them up at the right moment. **Two procedures fire on structural triggers rather than on conscious invocation:** `halt-conditions` (mechanical stop-loss, including Rule 7 "same-mental-model halt" that forces enumeration of fundamentally different approaches after 5 actions on one hypothesis), and `escalation-clauses` (when to ASK, QUIT, or PUSHBACK — fires on irreversible ops, ≥1 hidden assumption, missing tests on stake-tagged paths, claim-done without validator, or user assertion conflicting with verifiable evidence). `stake-tagging` fires on any work touching auth/authz/payments/deletion/pii/migration/irreversible paths and suspends the trivial-diff carve-out.

### Step 3 — [READ] Skim the programming-concerns layer

Read every file in `programming-concerns/` (10 files: error-handling-and-logging, secrets-and-config, dependency-and-supply-chain, observability, ai-authoring-security, performance-and-profiling, security, distribution-and-release, concurrency-and-state, data-and-schema). The interview will tell you which apply.

### Step 4 — [GATHER] Detect stack from the repo, then interview

**Codebase pre-detection (before the user questions):**

Before asking the user open questions, read what's already in the repo to pre-fill defaults. Check for and parse:

- `pyproject.toml` / `requirements.txt` / `Pipfile` / `setup.py` — Python project + framework (`fastapi`, `django`, `flask`, `click`, `typer`, etc.)
- `package.json` — Node/TS project + framework (`express`, `fastify`, `commander`, `oclif`, etc.); presence of `typescript` in devDeps or `tsconfig.json`
- `go.mod` — Go project; framework hints from imports in `main.go` / `cmd/*/main.go`
- `Cargo.toml` — Rust project; framework hints from dependencies
- `Gemfile` — Ruby project
- `composer.json` — PHP project
- `mix.exs` — Elixir project
- `pom.xml` / `build.gradle` / `build.gradle.kts` — Java/Kotlin project
- `*.csproj` / `*.fsproj` — .NET project
- `.github/workflows/`, `.gitlab-ci.yml`, `.circleci/`, `Jenkinsfile` — CI provider
- `Dockerfile`, `docker-compose.yml` — containerized deployment
- `*.sql` migration dirs, ORM config files (`alembic.ini`, `prisma/schema.prisma`, `sqlx-data.json`, etc.) — data layer
- Test framework files: `pytest.ini`, `vitest.config.*`, `jest.config.*`, `go test` files (suffix `_test.go`), `tests/` directories
- Typechecker config: `mypy.ini` / `.mypy.ini` / `[tool.mypy]` in pyproject.toml / `pyrightconfig.json` / `[tool.pyright]` in pyproject.toml — used by the pytest starter's `{{TYPECHECK_CMD}}` placeholder; `tsconfig.json` is auto-detected by the vitest starter; `go vet` + `go build` and `cargo check` always run in their respective starters and don't need detection
- Inferred project kind (CLI vs library vs service): presence of `main.py` / `cmd/<name>/main.go` / a binary target in `Cargo.toml` suggests CLI or service; absence + a public API in `__init__.py` / `lib.rs` / `pkg/<name>/*.go` suggests library

**Then run the interview with pre-filled defaults.** Instead of "what's your stack?", ask "I see a Python 3.12 CLI using Click + pytest + GitHub Actions — anything missing or wrong?" The user confirms or corrects. This reduces interview friction and improves accuracy.

Walk the user through `interview/01-project-context.md`, then `02-truth-surfaces.md`, then `03-scope-and-concerns.md`. For questions where pre-detection found a confident answer, present the detected value and ask for confirmation rather than asking blind. ~16 questions total. Do not batch them.

### Step 5 — [CONFIRM] Synthesize and confirm

Write a one-paragraph summary back to the user:

> "Here's what I heard: [project name] is a [kind — CLI / library / service / script / data-pipeline] in [language + runtime]. Truth surface: [X]. Persistent state: [Y or 'none']. Concerns that apply: [list]. Concerns being skipped: [list with reasons]. Decision log: [generate / skip]. I'll generate: [list of files]. Confirm and I'll proceed."

Wait for explicit "yes".

### Step 6 — [CONFIGURE] Pick the validator starter

Five starter scripts are available in `templates/`:

- `validator_starter_pytest.py.template` — Python projects with pyproject.toml or requirements.txt
- `validator_starter_vitest.ts.template` — Node/TypeScript libraries, CLIs, services (NON-browser; for web apps use `website_process/`)
- `validator_starter_go-test.sh.template` — Go projects with go.mod
- `validator_starter_cargo-test.sh.template` — Rust projects with Cargo.toml
- `validator_starter_adapt.template.md` — guidance for adapting one of the above to other ecosystems (Ruby, Java, .NET, Elixir, PHP, etc.)

Pick the one matching the project's language. Document the pick in CLAUDE.md's `What was skipped at bootstrap and why` section if you adapted the adapt template (note which starter you adapted from).

### Step 7 — [GENERATE] Generate files

For each applicable template, read it, fill every `{{PLACEHOLDER}}` from interview answers + selected concerns, and write the output to its target path (documented in each template's header).

**Inline rule:** for `CLAUDE.md`, when filling `{{CONCERNS_BLOCK}}`, copy the FULL text of each selected `programming-concerns/<name>.md` directly into the block. Fill the concern's language-specific addendum subsection from the project's detected stack. Do not reference the kit by path.

**Always generated (regardless of criticality):** `CLAUDE.md`, `PROJECT_PLAN.md`, `process_checklist.md`, `scripts/verify_prompt.md`, `.env.example`, and one validator starter.

**PROJECT_PLAN.md is the master checklist — the WHAT, plus the full per-item process.** This is the file the user opens to know what the project is building; `process_checklist.md` is only the iteration HOW. Seed every placeholder for real, never as a skeleton:
- `{{WORKSTREAMS}}` — from the end-goal-scope interview answer (01.6) MERGED with codebase pre-detection; every existing command/module/public-API surface becomes a `[~]` exists-but-unverified item (never `[x]`).
- `{{PROJECT_GOAL}}`, `{{SCOPE_BOUNDARY}}`, `{{MILESTONES}}` — from the same answer; each milestone names its gate AND why user review is needed.
- `{{LOCKED_DECISIONS}}` — the language/stack/architecture choices already made (interview + pre-detection), each with the alternative considered and a reopen trigger.
- `{{REFERENCE_DOCS}}` — existing specs/design docs found in the repo; if none, write "none yet" and seed a research item to create the first one.
- `{{COMPLETION_RULES}}` — evidence rules per item type, concrete to this project kind.
- `{{LADDER_COMMANDS}}` (in **process_checklist.md**, the ladder's single owner — the plan's stage 6 only points there) — RUNNABLE commands from interview 01.4 (typecheck/lint, tests, build, validator, real-invocation check). Generic phrases like "run the tests" are a generation failure.
If the user could not articulate full scope, seed the plan from detected codebase state plus a top item "Define remaining scope with user". A bootstrap that ends without a populated PROJECT_PLAN.md is an incomplete bootstrap.

When generating `.env.example`, grep the existing codebase for env-var reads (`os.environ.*` / `process.env.*` / `os.Getenv` / `std::env::var` / `ENV[...]` / etc.). For each env var found, add a commented-out line in `.env.example` with a short description and an obviously-fake placeholder. Real secret values NEVER go in `.env.example`. If the codebase is empty (fresh project), generate the file with the template's default categories (Database, Auth, External APIs, Feature flags, Observability) and let the user populate them as the project grows.

**Generated based on criticality + lifespan:** `pitfall_register.md`, `EXCEPTIONS.md`, `canary/known-bad-example.md`.

- Skip when criticality (03.5) is `Throwaway/experiment` OR lifespan (03.6) is `Hackathon/days`
- **OVERRIDE**: always generate when criticality is `Safety/regulated`, regardless of lifespan. A safety-regulated project with a hackathon lifespan still needs the registers — the regulatory exposure doesn't shrink with the timeline.

Note any skip in CLAUDE.md's "What was skipped at bootstrap and why."

**Generated only if interview 03.4 answered yes:** `decision_log.md`.

**Validator choice:** generate ONLY the one chosen in step 6 — not multiple. If the adapt template was used, replace its filename target with the adapted script's correct extension.

### Step 8 — [VERIFY] Dispatch auditors on your own output

You are the producer of the generated files. By verifier-as-gate (lesson 05 / principle `verifier-as-gate`), you cannot also be the gate.

**Pre-dispatch gate (the trivial-diff check):**
1. Read `diagnostics/diff_summary.json` produced by the validator.
2. If `only_markdown` is true: skip auditors entirely (a human read of the diff is sufficient).
3. If `total_loc` ≤ 20 AND `file_count` ≤ 2 AND no file path matches a concern-protected pattern AND no concerns were touched AND `diagnostics/dep_check.json` shows no unlocked deps AND no stake-tagged path is touched: dispatch ONLY the Correctness Auditor.
4. Otherwise: dispatch BOTH auditors in parallel.

Dispatch the **auditors** defined in the generated `scripts/verify_prompt.md` (the Completeness Auditor and the Correctness Auditor) **as independent subagents** with the dispatch choice from the pre-gate above.

**Tool scope (hard rule):**
- Each auditor subagent is dispatched with **Read, Grep, Glob ONLY**. No Edit, Write, or Bash.
- The auditor finds problems; it does not fix them. Edit access turns an auditor into a producer with confirmation bias.

**Input hygiene (hard rule):**
- Each auditor's input is the GENERATED FILES + the user's stated requirement (from interview synthesis, step 5) ONLY.
- Do NOT pipe the producer's plan, chat history, tool transcripts, todo lists, your own reasoning, or any "what I was trying to do" content into the auditor. Sycophancy under user rebuttal is the documented failure mode; context starvation is the documented defense.
- Each auditor should read files fresh — pass paths, not contents.

**What each looks for:**
- **Completeness Auditor:** "what would a senior engineer be unhappy was NOT done?" Specifically: every concern listed in CLAUDE.md must have a corresponding check item in `process_checklist.md`; each inlined concern in CLAUDE.md must contain all four structural sections (Rule, Why, How to apply, Skip if) — not a one-line summary; every `{{` placeholder must be replaced (zero hits when grepping); no file may reference `general_process/` by path; the validator's behavior assertion must match what the user actually said; `PROJECT_PLAN.md` must exist with populated workstreams — no empty `{{WORKSTREAMS}}` skeleton — every major module/command detected in the codebase must appear in it with an honest status (`[~]` for exists-but-unverified, never `[x]` without evidence), and `process_checklist.md`'s verification ladder must contain runnable commands (a generic "run the tests" is a finding).
- **Correctness Auditor:** "if you had to ship this, what would you fix first?" Specifically: stack references must be concrete (no "your framework" generics); the validator's `{{BEHAVIOR_INVOCATION}}` must match the user's truth surface; CLAUDE.md's selected concerns must match the items in `process_checklist.md` (no concern in one and not the other); no contradictions across files.

**Output handling:**
- Receive both reports VERBATIM. Do not summarize.
- Log raw output to `diagnostics/last_verify_completeness.md` and `diagnostics/last_verify_correctness.md`.
- Combined verdict: both GREEN → GREEN. Any RED → RED, fix and re-dispatch with FRESH subagents (the previous ones now have context — they are no longer independent reviewers). YELLOW + anything → YELLOW, surface caveats.
- **Hard iteration cap: 3 RED rounds maximum.** After three consecutive RED verdicts on the same change, do NOT re-dispatch. Escalate to the user with all three reports + all three fix attempts + the question "is the verifier hitting a calibration limit on this change, or is the producer hitting a fundamental constraint?" Empirical basis: LLM-judge calibration ceiling ~80% human agreement; debate plateaus at 3-4 rounds. Unbounded loops past this point oscillate without converging — they generate plausible findings that aren't real.
- In step 9, surface BOTH reports verbatim in the user-facing summary. The orchestrator does not paraphrase.

**If the kit has trivial output (e.g., only `decision_log.md` and `pitfall_register.md` were generated because the user said no to most concerns):** one auditor is enough. Pick whichever framing fits better. Document the choice in step 9.

### Step 9 — [HANDOFF] Report

Tell the user:
1. Generated files (list of paths).
2. Skipped templates / concerns and why.
3. The exact command to run the first validator (e.g., `python scripts/validate_state.py`, `pnpm tsx scripts/validate_state.ts`, `bash scripts/validate_state.sh`).
4. **Show the plan and require the user's review — mandatory, the most important handoff item.** `PROJECT_PLAN.md` is the single most important generated file. In the handoff message itself, render a summary of the seeded plan: the primary objective, every workstream with its status, the milestones, and the `Next action:` line. Then state explicitly: "`PROJECT_PLAN.md` is the master checklist — every session starts by opening it. **Your review of it is the first work item: read it, correct any wrong scope/status/ordering, and confirm — no implementation starts before that.** `process_checklist.md` is the per-iteration gate loop that runs around each item." The generated plan's `Next action:` must point at this 🧑 user-review item (see the template's NEXT_ACTION rule). The documented failure mode is a user who finishes bootstrap not knowing the plan exists or silently inheriting a wrong seed.
5. **Both auditors' verdicts and findings, surfaced verbatim** (not summarized). Quote each report in full from `diagnostics/last_verify_completeness.md` and `diagnostics/last_verify_correctness.md`. The producer (you) does NOT decide what to surface — the user reads both raw.
6. Reminder: delete or gitignore `general_process/` now — the generated files are self-contained.

## What you do NOT do

- Do not invent rules not present in `principles/` or `programming-concerns/`.
- Do not check `general_process/` into the new project's git.
- Do not run the generated validator yourself — the user runs it.
- Do not skip step 8. The producer cannot certify the producer.
- Do not duplicate per-task brainstorming/planning work that an existing skill in this environment already handles. The kit itself generates the project-level master checklist (`PROJECT_PLAN.md`); for planning a single initiative inside a workstream item, use a writing-plans skill if available — its output plan is the child of exactly one PROJECT_PLAN.md item.
