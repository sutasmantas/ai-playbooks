# Lesson 06 — Build New vs. Validate Old

**The pattern**
Each iteration adds a feature, verifies the new feature, and ships. Code paths touched in prior iterations are assumed still good because nothing "in them" changed — but shared utilities, global config, dependency versions, and data dependencies are quietly shifting underneath them. Drift accumulates in places nobody is looking. For instance, a team iteratively building out a CLI's subcommand surface might add a new `migrate` subcommand, verify it works, and never re-run the `seed` subcommand from sprint two — only to discover later that a refactor of the shared config-loading code broke `seed`'s parsing of nested keys. Or a service that worked correctly in week one and is silently failing on Mondays by week six because a scheduled-job dependency was upgraded and the new version changed its timezone handling.

**Root cause**
Validation effort scales with surface area, but team capacity does not. The path of least resistance is to verify only what was just changed. Shared dependencies — utility modules, config systems, third-party packages, runtime versions — mean "I didn't touch that code path" is rarely true in practice, but the assumption persists because revisiting old surfaces feels redundant.

**Rule adopted**
Every iteration re-opens previously validated surfaces and confirms they still behave. The set of "verified" code paths is re-verified, not inherited from prior sprints. The validator script's tests + behavior-assertion section IS the re-validation pass — running it every iteration is the discipline this lesson installs.

**How to recognize this in your project**
- Regression bugs cluster in code paths nobody has invoked in weeks
- "It worked before" appears in bug reports more than once a month
- No automated end-to-end pass over the full set of shipped features
- Verification scope is defined by the diff, not by the dependency graph
- Old features degrade in ways the team only learns about from users (or downstream callers)

**Linked principle:** [[validation-three-tiers]], [[verifier-as-gate]]
