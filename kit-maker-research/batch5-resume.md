# Batch 5 Research — Resume Instructions

**Run date:** 2026-07-05
**Run ID:** wf_370b5344-713
**Script path:** `c:\Users\masuta\Desktop\Coding\test\kit-maker\scripts\batch5.js`
**Transcript dir:** `C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\subagents\workflows\wf_370b5344-713`

## Resume command

```
Workflow({scriptPath: "c:\\Users\\masuta\\Desktop\\Coding\\test\\kit-maker\\scripts\\batch5.js", resumeFromRunId: "wf_370b5344-713"})
```

## Angles (3)

1. EVPI generalization to open-ended tasks — action-counterfactual operationalization for subjective/non-binary quality tasks (P0)
2. Write discipline failure rate for external intention registers (P0 — if <90% write accuracy, external registers produce net-negative outcomes)
3. Reversibility annotation taxonomy for kit tool schemas (P0 — operationalizes two-factor gate from batch 4)

## Expected outputs

- 3 archive files in `kit-maker/research_archive/`
- New angles appended to `kit-maker-research/RESEARCH_ANGLES.md`

## After workflow completes

Run post-batch review Steps 4a–4d per `kit-maker-research/wave2-launch-instructions.md`.

**M-52 gate applies at Step 4b:** Before applying any HIGH finding to ENTRYPOINT.md, scan verify note for: "extrapolation," "not in the paper," "beyond tested range," "assumes," "inferred." If any appear: log as NEEDS-SYNTHESIS-CONFIRMATION, do not apply.

**Critical closure questions per angle:**
- Angle 1: Is EVPI/action-counterfactual applicable to open-ended tasks? If yes: how does the operationalization differ from structured-schema tasks? If no: what is the recommended proxy approach?
- Angle 2: What is the empirical write discipline failure rate? If >10% failure rate: external registers may be net-negative for short workflows — what is the threshold?
- Angle 3: What taxonomy dimensions are empirically supported for reversibility annotation? At minimum: technical reversibility vs. functional reversibility, consequence severity tiers.

## Goal state

After batch 5 PCR:
- Element 8 intake protocol: open-ended case either CLOSED (operationalization named) or NEEDS-MORE-RESEARCH with evidence gap named
- External register architecture: PROVISIONAL marker either removed (failure rate acceptable) or upgraded to BLOCKED (failure rate too high)
- Reversibility annotation taxonomy: draft classification in ENTRYPOINT.md for kit builders to use at design time
