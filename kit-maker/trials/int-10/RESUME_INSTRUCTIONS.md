# INT-10 Trial Resume Instructions

**Run ID:** wf_7e1f59bf-f18
**Script path:** c:\Users\masuta\Desktop\Coding\test\kit-maker\trials\int-10\workflow-script.js
**Transcript dir:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\subagents\workflows\wf_7e1f59bf-f18
**Journal:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\subagents\workflows\wf_7e1f59bf-f18\journal.jsonl
**Launched:** 2026-07-05

## Resume command

```javascript
Workflow({
  scriptPath: "c:\\Users\\masuta\\Desktop\\Coding\\test\\kit-maker\\trials\\int-10\\workflow-script.js",
  resumeFromRunId: "wf_7e1f59bf-f18"
})
```

## What this trial does

INT-10 full proper-scale trial of angle-gen-kit:
- Phase 1 (Execution): 22 inputs × 3 conditions (A=baseline, B=full kit, C=degraded/no web search) run in pipeline; scoring in same pipeline stage
- Phase 2 (Longitudinal): 10-input sequential Cond B batch on self-correction domain; decay scoring
- Phase 3 (Verdict): Stage 4 verdict (GREEN/YELLOW/RED) + Stage 5 integration + Stage 6 retrospective (applies changes to kit-trial-process.md)

## Output files

All outputs written to: `kit-maker/trials/int-10/`
- `stage-2-execution/input-{id}/cond-{a|b|c}-output.md` — execution outputs (66 files)
- `stage-3-scoring/input-{id}/{cond}-eval{n}.md` — scoring rationales (~80 files)
- `stage-3-longitudinal/l1-l10-output.md` — longitudinal batch output
- `stage-3-longitudinal/decay-scores.md` — decay scoring
- `stage-4-verdict.md` — Stage 4 verdict
- `stage-5-integration.md` — Stage 5 integration
- `stage-6-retrospective.md` — Stage 6 retrospective
- `TRIAL-SUMMARY.md` — final archive summary

## Calibration context

Stage 2 Step 0 finding: Cond A achieved Q1=3 on Input 10 without kit. Pre-registered expected Q1=1.
Revised expected B-A: Q1=0 to +0.5 (FM4 risk), Q7=+1, Q5=+0.5 to +1, Q3=+0.5 to +1.

## Context at launch

Prior session completed: G4 PASS, Stage 1 design, calibration pass PROCEED WITH FLAG.
User directive: "do the full trial without interrupting me, only tell me when full angle trial is finished and its learnings are synthesised."
