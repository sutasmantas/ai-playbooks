# GH-01 Resume Instructions

## Workflow details
- **Run ID:** wf_a1f08524-093
- **Script path:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\workflows\scripts\gh-01-query-construction-research-wf_a1f08524-093.js
- **Transcript dir:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\subagents\workflows\wf_a1f08524-093

## Resume command
```
Workflow({scriptPath: "C:\\Users\\masuta\\.claude\\projects\\c--Users-masuta-Desktop-Coding-test\\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\\workflows\\scripts\\gh-01-query-construction-research-wf_a1f08524-093.js", resumeFromRunId: "wf_a1f08524-093"})
```

## Checkpoint files (written by research agents)
- kit-maker/research_archive/gh-01-a1-arxiv-2026-07-04.md
- kit-maker/research_archive/gh-01-a2-semscholar-2026-07-04.md
- kit-maker/research_archive/gh-01-a3-github-2026-07-04.md
- kit-maker/research_archive/gh-01-a4-websearch-2026-07-04.md
- kit-maker/research_archive/gh-01-a5-recovery-2026-07-04.md
- kit-maker/research_archive/gh-01-a6-tools-2026-07-04.md
- kit-maker/research_archive/gh-01-a7-adversarial-2026-07-04.md
- kit-maker/research_archive/gh-01-synthesis-2026-07-04.md

## Post-completion steps
1. Run post-cluster-review.md on completed angles (PCR exception required per TASK_TEMPLATE pre-synthesis gate — was addressed in synthesis agent)
2. Implement synthesis findings into kit-maker/research-quality.md (per-source sections + API decision table + failed-query recovery)
3. Dispatch 3 fresh-agent verification tests (done-criteria sub-goals 1, 2, 3)
4. Close GH-01 with TASK_TEMPLATE Section 6-7
5. Activate CTRL-01
