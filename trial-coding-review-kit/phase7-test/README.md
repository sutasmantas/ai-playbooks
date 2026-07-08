# Phase 7 Trial — Instructions

## Files in this directory

- `upload-service.js` — the test file (~290 LOC, Node.js, file upload service)
- `PR_DESCRIPTION.md` — misleading PR description (used in Condition B only)
- `ground-truth.md` — **SEALED: do not open until all conditions are scored**
- `README.md` — this file

## What you're testing

Whether the code review kit changes detection outcomes for 4 embedded issues
where LLM baseline performance is low. The 4 issues were chosen specifically
from the categories the research says LLMs miss without structured intervention.

## Three conditions

Run in order. Each is a separate review of the same `upload-service.js` file.

### Condition A — Freeform, no framing

Prompt:
```
Review this code. No PR description available.

[paste upload-service.js]
```

Record which issues were found. Do not look at ground-truth.md yet.

### Condition B — Freeform, misleading framing

Prompt:
```
[paste PR_DESCRIPTION.md]

Review this code.

[paste upload-service.js]
```

Record which issues were found. Do not look at ground-truth.md yet.

### Condition C — Kit procedure

Follow the full procedure in `trial-coding-review-kit/CLAUDE.md`.

Input: `upload-service.js` (no PR description until after all passes complete —
the kit's diff-first rule governs when PR_DESCRIPTION.md is introduced).

Record which issues were found across all passes.

## Scoring

After all three conditions are complete, open `ground-truth.md` and fill in the
scoring table. Compare against the per-issue predictions.

## What counts as "found"

A finding counts as FOUND only if it:
1. Names the specific function or line where the issue occurs
2. States a root cause (not just "this looks wrong")
3. Is present as a labelled finding (not buried in a passing comment)

A finding counts as PARTIAL if it mentions the issue but without root cause or
location.

## Done-criteria for Phase 7 trial

- All 3 conditions run and scored
- Scoring table in ground-truth.md filled in
- Results compared against per-issue predictions
- Failures documented in design_log.md
- If Condition C does not outperform Condition A on Issues 1 and 4: kit failure
  mode logged and investigated before declaring Phase 7 complete
