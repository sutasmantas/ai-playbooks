# Interview Script: Project Context

**Purpose**
Establish what the user is building and which concrete commands run the project, so generated files reference reality rather than placeholders.

**Procedure**
Ask each question in order, one at a time. Wait for the answer. Do not batch.

**Questions**

1. **What's the project name and one-sentence description?**
   - **Why we ask:** Every generated file opens with project identity. Generic identity = generic file = ignored file.
   - **What to do with the answer:** Fill `{{PROJECT_NAME}}` and `{{PROJECT_DESCRIPTION}}` in file headers and CLAUDE.md's preamble.

2. **What's the stack? (Frontend framework / backend framework / data store, even partial info is fine.)**
   - **Why we ask:** Validators, the verifier prompt, and concern-specific checks all need concrete stack references. "Next.js + Postgres" produces different validator language than "Hugo static, deployed to Cloudflare Pages."
   - **What to do with the answer:** Fill `{{STACK}}`. Use the stack info in step 6 of ENTRYPOINT to pick the validator starter.

3. **What are the project's main tooling commands? Specifically: package manager (npm / pnpm / yarn / bun / pip / etc.), dev server, build, test (if any), lint (if any), format (if any). Whatever exists right now — say "none yet" for any that aren't set up.**
   - **Why we ask:** The previous version of this kit guessed these. Guesses produce broken first-runs (the agent inventing `pnpm tsx` when the project uses npm, or vice versa).
   - **What to do with the answer:** Fill `{{PKG_MANAGER}}` (used by the validator-invocation command in `{{VALIDATOR_CMD}}`). Fill `{{DEV_SERVER_CMD}}` from "dev server." Fill `{{VALIDATOR_CMD}}` using the package manager from this answer + the validator-starter pick in step 6 (e.g., `pnpm tsx scripts/validate_state.ts`, `npm exec tsx scripts/validate_state.ts`, `bun scripts/validate_state.ts`, or `bash scripts/validate_state.sh`). Record the others in CLAUDE.md's preamble as ambient context.

4. **CI provider, if any? (GitHub Actions / GitLab CI / CircleCI / Vercel / Cloudflare Pages / none yet / something else.)**
   - **Why we ask:** Concerns like deployment and performance reference CI hooks. Knowing the provider lets generated CLAUDE.md mention the right workflow file path (`.github/workflows/`, `.gitlab-ci.yml`, etc.) instead of generic "your CI."
   - **What to do with the answer:** Fill `{{CI_PROVIDER}}` in CLAUDE.md's preamble. If "none yet," note that in CLAUDE.md's `What was skipped at bootstrap and why`.

5. **What's the end goal — and what exists already? Name the major modules/workstreams this project will contain when it's "done enough," any reference product you're aiming at (e.g., "feature parity with X"), what is explicitly OUT of scope, and a rough ordering of what comes first.**
   - **Why we ask:** This answer seeds `PROJECT_PLAN.md` — the master checklist, the single living artifact that tracks WHAT the project is building. Without it the kit generates process gates with no plan, and scope lives only in chat. (Documented failure: a project's feature-parity map had to be written by hand outside the process because nothing in the kit generated it.)
   - **What to do with the answer:** Fill `{{PROJECT_GOAL}}`, `{{SCOPE_BOUNDARY}}`, `{{WORKSTREAMS}}` (one section per named module, MERGED with codebase pre-detection — already-existing modules seed as `[~]` exists-but-unverified), and `{{MILESTONES}}` in `PROJECT_PLAN.md`. If the user can't fully answer, seed the plan from detected codebase state plus a top item "Define remaining scope with user" — never generate an empty plan.

**After this script**
You now know project identity, stack, the actual commands the project runs, the CI provider, and the end-goal scope that seeds `PROJECT_PLAN.md`. Move to `02-truth-surfaces.md`.
