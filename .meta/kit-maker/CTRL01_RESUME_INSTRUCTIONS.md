# CTRL-01 Resume Instructions

## Workflow details
- **Run ID:** wf_343c465a-bc5
- **Script path:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31db9fecd7b\workflows\scripts\ctrl-01-agent-control-mechanisms-wf_343c465a-bc5.js
- **Transcript dir:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\subagents\workflows\wf_343c465a-bc5

## Resume command
```
Workflow({scriptPath: "C:\\Users\\masuta\\.claude\\projects\\c--Users-masuta-Desktop-Coding-test\\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\\workflows\\scripts\\ctrl-01-agent-control-mechanisms-wf_343c465a-bc5.js", resumeFromRunId: "wf_343c465a-bc5"})
```

## Checkpoint files (written by research agents)
- kit-maker/research_archive/ctrl-01-a1-skills-2026-07-04.md
- kit-maker/research_archive/ctrl-01-a2-hooks-2026-07-04.md
- kit-maker/research_archive/ctrl-01-a3-agents-permissions-2026-07-04.md
- kit-maker/research_archive/ctrl-01-a4-adversarial-2026-07-04.md
- kit-maker/research_archive/ctrl-01-synthesis-2026-07-04.md

## Post-completion steps
1. Read synthesis output — check convergent_findings, mechanisms_to_generate, highest_value_mechanisms
2. Run PCR on synthesis (per M-46/M-47 pre-synthesis PCR gate exception pattern OR run PCR inline)
3. Generate ≥1 alternative to implementation structure before implementing (M-47 item 9f — manual for now until TASK_TEMPLATE updated)
4. Write kit-maker/procedures/agent-control-mechanisms.md (per-mechanism decision rules + specs)
5. Update ENTRYPOINT.md Phase 6 checklist with mechanism selection questions
6. Dispatch 3 fresh-agent verification tests (CTRL-01 done-criteria sub-goals 1, 2, 3)
7. Run goal checker, A1 auditor
8. Close CTRL-01 with TASK_TEMPLATE Section 6-7
9. Update REVISIT_QUEUE.md + grounding-map.md (per M-47 item 9g)
