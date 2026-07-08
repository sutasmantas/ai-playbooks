# Angle-Gen-Kit Build — Resume Instructions

**Run ID:** wf_64c5e010-be5
**Script path:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\workflows\scripts\angle-gen-kit-build-wf_64c5e010-be5.js
**Transcript dir:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\subagents\workflows\wf_64c5e010-be5
**Journal:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\subagents\workflows\wf_64c5e010-be5\journal.jsonl

**Resume command:**
```
Workflow({
  scriptPath: "C:\\Users\\masuta\\.claude\\projects\\c--Users-masuta-Desktop-Coding-test\\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\\workflows\\scripts\\angle-gen-kit-build-wf_64c5e010-be5.js",
  resumeFromRunId: "wf_64c5e010-be5"
})
```

**Phases:**
1. Research — 12 parallel angle agents, each writes angle-gen-kit/research_archive/A0N.md
2. Synthesize — single agent reads all archives, writes angle-gen-kit/synthesis.md
3. Plan — single agent writes angle-gen-kit/kit-plan.md
4. Build — single agent (worktree isolated) builds all kit files
5. Trial — Condition A (1 run) + Condition B (3 runs) in parallel
6. Verdict — auditor agent returns structured verdict

**Test domains:** "LLM instruction-following compliance" (standard), behavioral contracts (hard), meta-research (edge)

**Trial isolation:** Condition B agents get ONLY kit files — no research_archive, no prior 176 angles.
