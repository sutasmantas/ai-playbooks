# Procedure: Task Decomposition (multi-day / multi-session work)

**Use when:** the task is too big for one PR. Concrete triggers:
- Size class **L** in `PROJECT_PLAN.md` (multiple PR-sized slices or cross-cutting — measured in counts, never time)
- Will produce > 3 PRs
- Cross-cutting (migration, multi-service, new subsystem)
- Spans multiple sessions (you won't finish in one sitting)

The kit's principles, procedures, and verifier fire per-change. Each PR goes through the normal discipline. This procedure adds the umbrella that connects multi-day initiatives to per-change work without (a) reimplementing per-PR planning (delegate to `writing-plans` if available), (b) the agent rewriting the plan every session, or (c) scope rot.

## Phase 0 — Decide a procedure is needed

Not every two-PR task is "huge." Use this procedure when ALL of the following are true:
- The work won't be done in one session
- A single PR can't deliver user-visible value
- You can't hold the whole structure in your head at once

If only some are true, do the work as a normal multi-PR sequence without a formal plan. Overhead has a cost; pay it where it earns.

**The one-sentence-diff test for research bounds.** Before doing any pre-implementation research at all (this procedure's planning phase OR informal "let me look around first"): try to describe the eventual diff in one sentence. If you can — *"add a new column `last_login_at` to the users table and surface it on the profile page"* — skip the research; the answer is obvious enough to start. If you can't, research is warranted. This is Anthropic's documented stop-research trigger (`code.claude.com/docs/best-practices`); the lightest possible bound that prevents research-as-procrastination.

**Hard cap on research before forced decision:** maximum **5 reads + 3 web fetches** before the agent must either start implementing, write a question for the user, or invoke `procedures/escalation-clauses.md` ASK trigger. Unbounded research is a documented Claude Code failure mode (issues #48104, #26171). The cap forces the agent to either commit to a direction or surface that it can't commit yet.

## Phase 1 — Create the plan artifact

Path: `plans/YYYY-MM-DD-<slug>/plan.md` (the date is the START date, not last-updated).

Every plan is the child of exactly ONE `PROJECT_PLAN.md` workstream item. Name that item at the top of plan.md (`Parent item:` line), and update the item's status in PROJECT_PLAN.md whenever the plan's status changes — the master checklist must never lag the plans under it.

Required sections (use the template at `templates/plan.md.template`):

1. **Goal** — one paragraph stating what user-visible thing exists at the end that doesn't exist now.
2. **Done-criteria** — testable, not vibes. "X path returns Y for input Z" not "checkout works." If you can't write a test for it, it's not a criterion.
3. **Vertical slices in order, riskiest-first.** Each slice is one PR-sized deliverable that ships user-visible value (even if behind a flag). Migrations: strangler-fig per slice — old and new run in parallel, traffic moves incrementally.
4. **File map** — which files / modules each slice touches. Helps avoid two slices fighting over the same file.
5. **Decision links** — references to `decision_log.md` entries explaining non-trivial choices made during planning (e.g., "Slice 2 uses Drizzle over Prisma — see decision_log entry 2026-05-10").
6. **Discovered work** — append-only section, starts empty. See Phase 4.
7. **Status** — `active | paused | done`. Update only at slice boundaries.

The plan is NOT a Gantt chart. It's a contract between sessions. Keep it under 300 lines or it stops getting re-read.

## Phase 1.5 — Execution-Ready Gate

Before starting work on Slice 1, the plan must clear an explicit binary gate. This is the cheapest place to catch "I thought we were ready but actually..." — and the documented anti-pattern of skipping this gate is "agent starts coding the first slice while the plan is still half-thought."

Output a single line in the plan, in this exact form:

- `[ ] ready-to-execute`
- OR `[ ] blocked by: <one or more concrete items>`

For `ready-to-execute` to be the honest answer, ALL of these must be true:

- All decisions needed for Slice 1 are written in the plan (not just in your head)
- Alternatives were considered; the chosen approach is frozen
- The `Strongest unsupported assumption` is either verified, has a verification sub-task scheduled before the risky slice, OR is explicitly accepted with a fallback documented
- Each slice's `Output`, `Decision`, and `Evidence to close` are written (not "TBD")
- **Each slice's `Evidence to close` (done-criteria) is frozen verbatim.** At milestone time the Completeness Auditor will be re-quoted these exact words — paraphrasing or "I think this means" between planning and audit is the documented "done-definition drift" anti-pattern. If the criteria change mid-slice, that's a replan (Phase 6), not a routine update.
- **Each slice declares a budget AND names its enforcer.** Pick one unit: **attempt count** (agent self-checks against its visible tool-call history), **token count** (harness-enforced via CLI flag), or **wall-clock duration** (user or CI deadline — the agent has no continuous time sense, so an external enforcer must exist). The budget is the ceiling; `procedures/halt-conditions.md` rule #4 fires at 100% via whichever enforcer matches the chosen unit. A slice without a declared budget AND a matching enforcer is a slice that can't stop.
- Dependencies (libraries, env vars, external services) are available — or an install/setup step is named explicitly as Slice 0
- No unresolved blocker is hiding in prose ("we should figure out X" anywhere in the plan = blocked)
- The plan quality audit (last section of plan.md template) has been walked and any "no" answers are addressed

If you can't honestly answer "ready-to-execute," write the blockers and resolve them before Phase 2.

## Phase 2 — Per-slice execution

For each slice in order:

1. **Treat the slice as a normal change.** The kit's per-change discipline applies in full: brainstorm → write tests → implement → run validator → dispatch verifier → fix RED.
2. **If Superpowers' `writing-plans` skill is available,** delegate the slice's own internal planning to it. The slice becomes the input to that skill. Do NOT reimplement per-PR planning here.
3. **If `writing-plans` is not available,** the slice IS the planning unit. Add a `## Tasks` section under the slice in `plan.md` with numbered atomic actions.
4. **Each slice gets its own PR.** Do not combine slices into a single PR even if they're small — slice boundaries are the integration points where errors are catchable.

## Phase 3 — Session-start re-grounding ritual

At the start of every session that continues a huge task:

1. Read `plans/YYYY-MM-DD-<slug>/plan.md` top to bottom. Not skim — read.
2. Read the last 3 entries of `decision_log.md`.
3. Read the `Discovered work` section of the plan.
4. Identify which slice is `in progress`. If multiple, pick the one earliest in the riskiest-first order.
5. Re-read the verifier output from the last session if it ended on RED.

This ritual exists because in-session memory decays and plain summarization loses fidelity (measured: iterative re-summarization degrades faster than full context resets with structured handoff files). Re-grounding from the plan beats trying to remember.

## Phase 4 — Discovered work, NOT inline

When during a slice you find something that needs doing but isn't in the current slice:

1. Append a one-line entry to the plan's `Discovered work` section: `- [date] [discovering slice] <what needs doing> — <why it can't wait until slice X / can wait>`.
2. Do NOT insert it into the current slice. Scope-discipline (principle) applies.
3. Do NOT re-order the plan to fit the discovered work in. Reordering is a Phase 6 (replan) action, not a mid-slice action.
4. At slice boundaries, the user (or you) decides whether each discovered-work item promotes into the next slice, becomes a separate task, or is dropped.

The major frameworks (Superpowers, Devin, Cursor) all punt on this in different ways. The append-only-then-decide-at-slice-boundary pattern is the working compromise — it preserves scope discipline within a slice while not losing the discovery.

## Phase 5 — Milestone gate (after each slice merges)

After each slice's PR merges, run BOTH axes of the milestone gate:

1. **Dispatch the two-auditor verifier on the SLICE** (normal per-change discipline). This catches per-PR issues.

2. **Damage-prevention check** — what could this slice have broken outside its own scope?
   - The truth surface still works (open it, don't just trust API-200).
   - Concerns in scope still pass (a11y, performance, security, etc.) on the touched paths AND on paths the slice didn't touch but might have affected (shared layout, global CSS, routing, shared utilities).
   - No regression in features the slice deliberately didn't touch.

3. **Value-preservation check** — what value did the existing system have that this slice might have destroyed even if it "worked"?
   - For refactors: the refactored code preserves all side effects users depended on, not just the explicit return values.
   - For migrations: both the old path (during transition) AND the new path work; the new path preserves features users relied on in the old path, not just the headline functionality.
   - For optimizations: the headline metric improved AND the things the metric is a proxy for also improved (or at least didn't regress).
   - A slice that passes damage-prevention but destroys preserved value is still a failure — log it, surface it to the user, do not proceed to the next slice.

4. **Integration check** — does the end-to-end user-visible path still work? Open it. Don't just trust per-slice tests.

5. **Log the milestone in `decision_log.md`** (if generated), otherwise in the plan's `Milestone log` section: `Slice N merged YYYY-MM-DD; verifier: <verdict>; damage-prevention: <pass/fail>; value-preservation: <pass/fail>; integration: <pass/fail>. Notes: ...`

6. **Update plan status** — mark slice as done; promote next slice's status to `in progress`. Reflect the change in `PROJECT_PLAN.md` (parent item status + a Review gate log line).

The slice's normal verifier catches per-PR issues. The milestone gate's three additional axes catch what the per-slice verifier can't see: cross-slice drift, preserved-value destruction, and end-to-end breakage.

## Phase 6 — Replan triggers (hard bar)

DO NOT replan because the plan "feels off." Replan ONLY when:
- The Done-criteria themselves turn out to be wrong (the user-visible goal changed)
- Two consecutive slices hit unforeseen blockers that weren't visible at planning time
- A discovered-work item is so foundational that subsequent slices can't proceed without it

Replanning means: write a new entry in `decision_log.md` explaining WHY, then edit the plan. Do not delete the old plan — append the new one and mark the old `Status` as `paused (superseded by replan YYYY-MM-DD)`.

The anti-pattern this guards against is documented by name in Cursor's research: agents "quietly redefining done mid-run" by replanning every session. The hard bar prevents that.

## Anti-patterns to refuse

- **Boil-the-ocean slice.** A slice that takes > 1 PR is not a slice — it's its own huge task. Decompose.
- **Premature commit without integration check.** Each merge must include Phase 5's check, not just the per-slice verifier.
- **Plan rewrites every session.** Replan is Phase 6, with hard bar. Routine session-to-session work does not edit the plan beyond status updates and `Discovered work` appends.
- **Hidden plan-of-the-plan.** The plan is the plan. If you find yourself maintaining a meta-plan, the plan is too big — decompose into independent plans.

## When to skip

- Single-PR work — overhead exceeds value
- Two-PR sequence where you can hold both PRs in your head
- Hackathon / throwaway work — the plan outlives the project
- Work where the structure is already obvious and matches an existing pattern in the codebase

## Trace

Distilled from:
- Superpowers `writing-plans` and `executing-plans` skill definitions, Cursor's long-running agents research (Aug 2025 - Apr 2026), Addy Osmani's "Long-running Agents" post, the Refine-Plan-Act pattern (Borzì 2026), Devin's interactive planning docs, and Anthropic's documented full-context-reset-with-handoff-file pattern. These contributed the per-slice / session-start / discovered-work shape.
- A `CHECKLIST_CONSTRUCTION_TEMPLATE.md` from a prior ML-experimentation project carried into this kit. The four-field stage schema (`Output / Decision / Evidence to close / Status`), the Execution-Ready Gate binary, the `Strongest unsupported assumption` slot, the damage-prevention + value-preservation paired check, the explicit `What this plan is NOT`, and the plan quality audit at the end are all distilled from that template — translated out of ML-eval language into website-build language. Domain-specific concepts from the source (label-space contracts, row-inclusion rules, manual changed-row review) were intentionally not carried over.
