# Interview Script: Project Context

**Purpose**
Establish what the user is building, what KIND of project it is, and which concrete commands run the project, so generated files reference reality rather than placeholders.

**Procedure**
Ask each question in order, one at a time. Wait for the answer. Do not batch.

**Questions**

1. **What's the project name and one-sentence description?**
   - **Why we ask:** Every generated file opens with project identity. Generic identity = generic file = ignored file.
   - **What to do with the answer:** Fill `{{PROJECT_NAME}}` and `{{PROJECT_DESCRIPTION}}` in file headers and CLAUDE.md's preamble.

2. **What KIND of project is this? (CLI tool, library, long-running service, one-off script, data pipeline, or a mix — say which.)**
   - **Why we ask:** The kit's concerns route by project kind. A library doesn't need observability; a long-running service does. A throwaway script skips most lifecycle concerns. Knowing the kind lets the agent default the right concerns on/off in Q03.1.
   - **What to do with the answer:** Fill `{{PROJECT_KIND}}` in CLAUDE.md's preamble. Use this to pre-route concerns in 03-scope-and-concerns.md: services/data-pipelines default observability + concurrency-and-state + data-and-schema ON; libraries/CLIs default them OFF unless the user explicitly says they apply.

3. **What's the language and runtime? (Python 3.12, Node 22 + TypeScript, Go 1.23, Rust stable, etc. Plus key libraries / frameworks if any are load-bearing.)**
   - **Why we ask:** Validator starter choice (Step 6 of ENTRYPOINT) depends on language. Concerns' language-specific addendums get filled from this answer. "Python 3.12 + FastAPI + SQLAlchemy" produces different generated files than "Go 1.23 stdlib only."
   - **What to do with the answer:** Fill `{{LANGUAGE}}` (including the runtime version inline, e.g., "Python 3.12") and `{{KEY_LIBRARIES}}`. Pick the validator starter (pytest / vitest / go-test / cargo-test, or the adapt template for others) in step 6.

4. **What are the project's main tooling commands? Specifically: package/build manager (pip / uv / poetry / npm / pnpm / yarn / bun / go / cargo / etc.), build, test, lint, format, run. Whatever exists right now — say "none yet" for any that aren't set up.**
   - **Why we ask:** The previous generation of this kit guessed these. Guesses produce broken first-runs (the agent inventing `pnpm tsx` when the project uses npm, or `python -m pytest` when the project uses `uv run pytest`).
   - **What to do with the answer:** Fill `{{PKG_MANAGER}}` (used by the validator-invocation command). Fill `{{TEST_CMD}}`, `{{BUILD_CMD}}`, `{{LINT_CMD}}`, `{{FORMAT_CMD}}`, `{{RUN_CMD}}` in CLAUDE.md's preamble. Fill `{{VALIDATOR_CMD}}` using the package manager from this answer + the validator-starter pick.

5. **CI provider, if any? (GitHub Actions / GitLab CI / CircleCI / Jenkins / none yet / something else.)**
   - **Why we ask:** Concerns like dependency-and-supply-chain and distribution-and-release reference CI hooks. Knowing the provider lets generated CLAUDE.md mention the right workflow file path instead of generic "your CI."
   - **What to do with the answer:** Fill `{{CI_PROVIDER}}` in CLAUDE.md's preamble. If "none yet," note that in CLAUDE.md's `What was skipped at bootstrap and why`.

6. **What's the end goal — and what exists already? Name the major modules/workstreams this project will contain when it's "done enough," any reference tool/product you're aiming at, what is explicitly OUT of scope, and a rough ordering of what comes first.**
   - **Why we ask:** This answer seeds `PROJECT_PLAN.md` — the master checklist, the single living artifact that tracks WHAT the project is building. Without it the kit generates process gates with no plan, and scope lives only in chat. (Documented failure: a project's feature-parity map had to be written by hand outside the process because nothing in the kit generated it.)
   - **What to do with the answer:** Fill `{{PROJECT_GOAL}}`, `{{SCOPE_BOUNDARY}}`, `{{WORKSTREAMS}}` (one section per named module, MERGED with codebase pre-detection — already-existing modules seed as `[~]` exists-but-unverified), and `{{MILESTONES}}` in `PROJECT_PLAN.md`. If the user can't fully answer, seed the plan from detected codebase state plus a top item "Define remaining scope with user" — never generate an empty plan.

**After this script**
You now know project identity, kind, language, the actual commands the project runs, the CI provider, and the end-goal scope that seeds `PROJECT_PLAN.md`. Move to `02-truth-surfaces.md`.
