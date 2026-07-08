# Lesson 06 — Build New vs. Validate Old

**The pattern**
Each iteration adds a feature, verifies the new feature, and ships. Surfaces touched in prior iterations are assumed still good because nothing "in them" changed — but shared layout, global CSS, routing, state, and data dependencies are quietly shifting underneath them. Drift accumulates in places nobody is looking. For instance, a team iteratively building out a checkout flow might add a new shipping-options step, verify it works, and never reopen the payment-method step from sprint two — only to discover later that a global form-validation refactor broke the credit-card field. Or a signup page that worked in week one and is silently broken on mobile by week six because every subsequent feature only got tested on desktop.

**Root cause**
Validation effort scales with surface area, but team capacity does not. The path of least resistance is to verify only what was just changed. Shared dependencies — design tokens, routing, auth state, layout components — mean "I didn't touch that page" is rarely true in practice, but the assumption persists because revisiting old surfaces feels redundant.

**Rule adopted**
Every iteration re-opens previously validated surfaces and confirms they still behave. The set of "verified" surfaces is re-verified, not inherited from prior sprints.

**How to recognize this in your project**
- Regression bugs cluster in pages nobody has opened in weeks
- "It worked before" appears in bug reports more than once a month
- No automated end-to-end pass over the full set of completed flows
- Verification scope is defined by the diff, not by the dependency graph
- Old features degrade in ways the team only learns about from users

**Linked principle:** [[validation-three-tiers]], [[verifier-as-gate]]
