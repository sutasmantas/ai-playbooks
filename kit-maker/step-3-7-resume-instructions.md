# HIGH PRIORITY #1 — Resume Instructions (all sub-parts)

## Sub-part (b) — Steps 3.5 and 3.6 fresh passes
- **Run ID:** wf_a3ba8794-67f
- **Task ID:** whi6apbf9
- **Script:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\workflows\scripts\hp1-steps-3-5-and-3-6-wf_a3ba8794-67f.js
- **Resume:** `Workflow({scriptPath: 'C:\\...\\hp1-steps-3-5-and-3-6-wf_a3ba8794-67f.js', resumeFromRunId: 'wf_a3ba8794-67f'})`

## Sub-part (c) — PCR re-runs
- **Run ID:** wf_570be49a-f6e
- **Task ID:** wsxdk1nkk
- **Script:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\workflows\scripts\pcr-rerun-all-clusters-wf_570be49a-f6e.js
- **Resume:** `Workflow({scriptPath: 'C:\\Users\\masuta\\.claude\\projects\\c--Users-masuta-Desktop-Coding-test\\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\\workflows\\scripts\\pcr-rerun-all-clusters-wf_570be49a-f6e.js', resumeFromRunId: 'wf_570be49a-f6e'})`
- Procedure: kit-maker/procedures/post-cluster-review.md (restructured 2026-07-03)
- 7 clusters: angle-119, USER-01-02, angle-176, USER-03-04, angles-22-24, research-quality, meta-research
- Sequential execution (clusters share kit files)

---

# HIGH PRIORITY #1 — Step 3.7 Workflow Resume Instructions (sub-part a)

## Run info
- **Run ID:** wf_b1938872-c79
- **Task ID:** wskhgifib
- **Script path:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\workflows\scripts\high-priority-1-step-3-7-wf_b1938872-c79.js
- **Journal:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\subagents\workflows\wf_b1938872-c79\journal.jsonl

## Resume command
```
Workflow({scriptPath: 'C:\\Users\\masuta\\.claude\\projects\\c--Users-masuta-Desktop-Coding-test\\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\\workflows\\scripts\\high-priority-1-step-3-7-wf_b1938872-c79.js', resumeFromRunId: 'wf_b1938872-c79'})
```

## What this Workflow does
- Discovers all synthesis files in kit-maker/synthesis/ and kit-maker/research_archive/
- For each file: extracts finding text per group, applies Step 3.7 (Sub-steps A/B/C), runs inline verifier to catch echo principles
- Writes Step 3.7 section to each synthesis file
- Checkpoint: kit-maker/step-3-7-checkpoint.md

## Context for resuming cold
This is HIGH PRIORITY #1 (Pattern I class fix — M-30). All existing syntheses treated research findings as direct prescriptions. Step 3.7 extracts abstract principles beyond the finding (Sub-step A), assesses fit to our setup (Sub-step B), and derives beyond what was tested (Sub-step C). Inline verifier checks principle quality (not an echo). Files: kit-maker/synthesis/ and kit-maker/research_archive/.
