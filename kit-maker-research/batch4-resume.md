# Batch 4 Research — Resume Instructions

**Run date:** 2026-07-05
**Run ID:** wf_6c4a7009-81f
**Script path:** `c:\Users\masuta\Desktop\Coding\test\kit-maker\scripts\batch4.js`
**Transcript dir:** `C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\subagents\workflows\wf_6c4a7009-81f`

## Resume command

```
Workflow({scriptPath: "c:\\Users\\masuta\\Desktop\\Coding\\test\\kit-maker\\scripts\\batch4.js", resumeFromRunId: "wf_6c4a7009-81f"})
```

## Angles (5)

1. Action-counterfactual operationalization — EVPI framework applied to kit-maker intake (P0)
2. Reversibility as grounding criterion — irreversibility threshold for upfront confirmation (P0)
3. Instruction count as kit complexity budget — model-specific compliance ceiling (P1)
4. External intention register vs in-context manifest — completion tracking architecture (P1)
5. Omission vs commission failure ratio — kit quality metric weighting (P0)

## Expected outputs

- 5 archive files in `kit-maker/research_archive/`
- New angles appended to `kit-maker-research/RESEARCH_ANGLES.md`

## After workflow completes

Run post-batch review Steps 4a–4d per `kit-maker-research/wave2-launch-instructions.md`:

- **4a:** Triage new angles surfaced — assign priority, flag duplicates
- **4b:** Evidence sufficiency — for each angle, state explicitly: which provisional kit decision is now CLOSED and what is the ruling. Apply to kit file or log written exception. "Documented in archive" is NOT closure.
- **4c:** Process review — verify rate, saturation rate, batch size
- **4d:** Synthesis gate — ≥1 batch 4 cluster synthesized before batch 5 launches

## Goal checker soft challenge (recorded)

Angle 4 pre-mortem: research may answer conceptual questions without explicitly closing provisional decisions. Fix: Step 4b requires explicit per-angle decision-closure statement (ruling must be named and applied). This is encoded in the workflow return `instructions` field.
