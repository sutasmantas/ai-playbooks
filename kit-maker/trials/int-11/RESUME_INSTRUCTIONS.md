# INT-11 Trial — Resume Instructions

**Run ID:** wf_8cb5111e-5b9
**Launched:** 2026-07-07
**Script path:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\workflows\scripts\int-11-trial-wf_8cb5111e-5b9.js

## Resume command (paste into Claude Code)

```
Workflow({
  scriptPath: "C:/Users/masuta/.claude/projects/c--Users-masuta-Desktop-Coding-test/11c038ef-665d-42b1-b6d8-a31cb9fecd7b/workflows/scripts/int-11-trial-wf_8cb5111e-5b9.js",
  resumeFromRunId: "wf_8cb5111e-5b9"
})
```

## What this trial does

INT-11 full trial of angle-gen-kit on endurance sports science (periodization / training load management). Tests FM4 domain-conditionality: does coverage-gap conditioning produce near-zero Q1 differential on ALL domains, or only on heavily-represented LLM/AI domains?

**Phases:**
1. Calibration — H1 Cond-A adversarial check (Q1 should be ≤2 to confirm valid adversarial design)
2. Execute — 22 inputs × 3 conditions (A: no kit, B: full kit, C: degraded Source B unavailable)
3. Longitudinal — L1 10-input sequential HRV batch (same domain, tests quality decay)
4. Score — all outputs scored against locked criteria; 3 blind evaluators for Hard Cond-B
5. Verdict — FM4 determination + 3 learning questions + overall GREEN/YELLOW/RED/INVALID verdict

## Output files (written during trial)

- `stage-2-execution/*/cond-[a|b|c]-output.md` — per-input execution outputs
- `stage-2-execution/longitudinal/l1-session.md` — L1 10-input session
- `stage-3-scoring/aggregated-scores.md` — all scores + differentials
- `stage-4-verdict.md` — final verdict document
- `stage-5-learning-digest.md` — learnings for kit-maker
- `stage-6-retrospective.md` — trial process retrospective

## On completion: update these files

- `kit-maker/plan.md` — mark 20.10 COMPLETE
- `kit-maker/project-state.md` — update with verdict + FM4 result
- `kit-maker/design_log.md` — add INT-11 finding to goal model if significant
