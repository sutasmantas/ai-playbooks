# Lessons Directory

This directory is populated from REAL kit-making runs — not from design sessions, not from research, but from observed failures and unexpected outcomes when the kit was used to build an actual kit.

**Format for each lesson file:**

```markdown
# Lesson: [short title]

**Observed:** [what happened]
**Expected:** [what should have happened]
**Root cause class:** [from pitfall_register.md — which named class does this belong to?]
**Fix applied:** [what was changed in the kit to prevent recurrence]
**Still open:** [if the fix is incomplete or provisional, what remains]

Trace: [where in the run this was observed — phase, file, action]
```

**When to add a lesson:**
- A kit was built and something went wrong that the current procedures didn't catch
- An auditor finding was RED on something the producer thought was GREEN (calibration failure)
- A produced kit file was used and produced unexpected behavior in practice
- The same problem appeared in two different kit-making runs (count ≥ 2 → promote to lesson)

**Count = 1 (one run):** Add to pitfall_register.md as a watch item, NOT here.
**Count ≥ 2 (two runs):** Add here AND promote to a procedure or hard rule update.

---

*No lessons yet — this kit has not been used to build any actual kits. Lessons will accumulate here after real deployments.*
