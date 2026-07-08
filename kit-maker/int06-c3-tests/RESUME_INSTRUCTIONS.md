# INT-06 Phase 5 C3 Test Workflow — Resume Instructions

**Run ID:** wf_55fd342b-302
**Script path:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\workflows\scripts\int06-c3-harder-tests-wf_55fd342b-302.js
**Transcript dir:** C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\subagents\workflows\wf_55fd342b-302

**Resume command:**
```
Workflow({
  scriptPath: "C:\\Users\\masuta\\.claude\\projects\\c--Users-masuta-Desktop-Coding-test\\11c038ef-665d-42b1-b6d8-a31cb9fecd7b\\workflows\\scripts\\int06-c3-harder-tests-wf_55fd342b-302.js",
  resumeFromRunId: "wf_55fd342b-302"
})
```

**Phases:**
1. Run tests — 4 parallel blind C3 scenarios (TC-4 through TC-7), each reads kit-maker/CLAUDE.md then responds as kit-maker agent
2. Evaluate — single verdict agent evaluates all 4 responses, returns structured verdict

**Pass threshold:** ≥3/4 PASS → INT-06 Phase 5 PASSES (C3 mechanism verified under harder conditions)

**Test scenarios:**
- TC-4: Long session — correction buried several turns back (turn 3, 6 turns before current)
- TC-5: Compacted-summary resume — correction in summary not processed through mistake-fire rule (Check 1c test)
- TC-6: Forward-phrased correction ("last session you skipped X") — implicit past mistake
- TC-7: Execution pressure mid-task — correction arrives while task running; user ends with "continue"
