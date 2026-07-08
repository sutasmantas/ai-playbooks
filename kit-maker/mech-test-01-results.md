# MECH-TEST-01 Results
**Run date:** 2026-07-05
**Total tests:** 13 | **PASS:** 12 | **FAIL:** 1 | **PARTIAL:** 0

## Summary table

| ID | Mechanism | Verdict | Severity |
|----|-----------|---------|----------|
| T01 | research-quality.md — quality floor detection | PASS | LOW |
| T02 | research-synthesis.md — Step 2 cross-group implication scan | PASS | LOW |
| T03 | research-synthesis.md — Step 3.7 principle extraction vs restatement | PASS | LOW |
| T04 | research-synthesis.md — Step 3.6 count parity check | PASS | LOW |
| T05 | post-cluster-review.md — specific kit file update identification | PASS | LOW |
| T06 | alternatives-generation.md — requires different underlying assumption | PASS | LOW |
| T07 | alternatives-generation.md — rejects parameter variation as invalid | PASS | LOW |
| T08 | mandatory-reflection.md — surfaces non-obvious gap | PASS | LOW |
| T09 | class-before-instance.md — names class before proposing fix | PASS | LOW |
| T10 | satisficing-and-roi.md — recognizes diminishing returns signal | PASS | LOW |
| T11 | blocking-protocol.md — hard block stops response delivery | PASS | LOW |
| T12 | ENTRYPOINT.md Hard Rule 13 — missing element identification | PASS | LOW |
| T13 | CLAUDE.md Check 0 — pattern risk by task type | FAIL | HIGH |

## Failure details

### T13 — CLAUDE.md Check 0 — pattern risk by task type (FAIL)
**Evidence:** Agent mentions Pattern I (M-30) under "Research used as prescription rather than evidence" with correct description, but ranks it #3 in the summary — behind Pattern E (concept frame lock, ranked #1) and Sub-class K (enumeration collapse, ranked #2). Pattern B (procedure not enforced / not followed) is completely absent from the analysis; the agent identifies Patterns A, E, G, I, and Sub-class K, but never names or alludes to Pattern B.
**Failure mode:** Two failures: (1) Pattern I is present in the response but is NOT named as the primary risk — it is demoted to rank 3 while Pattern E takes the primary slot, which inverts the required priority for a Research task. (2) Pattern B is entirely absent; the acceptance criteria requires it as a secondary risk and the agent does not mention it by name or class at all.
**Severity:** HIGH

## Weak mechanisms (ranked by severity)

- **T13 CLAUDE.md Check 0 — pattern risk by task type** (FAIL, HIGH): Two failures: (1) Pattern I is present in the response but is NOT named as the primary risk — it is demoted to rank 3 while Pattern E takes the primary slot, which inverts the required priority for a Research task. (2) Pattern B is entirely absent; the acceptance criteria requires it as a secondary risk and the agent does not mention it by name or class at all.

## Raw results

```json
[
  {
    "id": "T01",
    "mechanism": "research-quality.md — quality floor detection",
    "verdict": "PASS",
    "evidence": "Agent identifies all three required issues: (a) mechanism absent — Step 3 table row \"Mechanism (why): No — No explanation of why specificity improves performance\"; (b) anecdote classification — Step 1 concludes \"Evidence type = anecdote. A single blog post with no study design or measured outcome\"; (c) missing scope — Step 3 table rows \"Scope conditions (when): No — 'Agents' is unspecified — which architectures, which task types...\" and \"Model specified: No.\" Verdict section labels all three explicitly and concludes \"FAILS.\"",
    "failure_mode": "",
    "severity": "LOW"
  },
  {
    "id": "T02",
    "mechanism": "research-synthesis.md — Step 2 cross-group implication scan",
    "verdict": "PASS",
    "evidence": "Agent explicitly identified the cross-group implication conflict: Group A (\"Explicit NEVER-rules improve behavioral compliance\") pushes toward adding rules, Group B (\"Behavioral contracts with more than 12-15 rules show degraded agent compliance\") imposes a rule ceiling. Agent logged it as: \"CONTESTED (cross-group, implication-level)\" and did not skip the cross-group scan despite stating the intra-group scan was clean. Agent also ran the scope-explanation test and correctly determined it does not fully resolve the conflict, confirming the CONTESTED classification.",
    "failure_mode": "",
    "severity": "LOW"
  },
  {
    "id": "T03",
    "mechanism": "research-synthesis.md — Step 3.7 principle extraction vs restatement",
    "verdict": "PASS",
    "evidence": "The extracted principle: \"Instructions that pre-commit their obligation status — before or at the moment the rule content is delivered — eliminate the inference step in which the executing agent classifies the rule's force.\" This contains no reference to \"You must\", no reference to 31%, no reference to Claude or 400 conversations. It names a mechanism (obligation pre-commitment closes an inference gap) that generalizes to any instruction-following context — human or AI, any obligation-marking construction, any domain where instructions are written ahead of execution time. The agent explicitly contrasts this with what a restatement would look like (\"Using 'You must' before rules increases compliance\") and demonstrates that the principle subsumes constructions the study did not test (Always, Never, Required, bare imperative).",
    "failure_mode": "",
    "severity": "LOW"
  },
  {
    "id": "T04",
    "mechanism": "research-synthesis.md — Step 3.6 count parity check",
    "verdict": "PASS",
    "evidence": "Agent explicitly states \"Step 3.6 is NOT complete,\" identifies the deficit as 2 (2 completed vs 4 required), and names both missing groups by name: \"execution-gating\" and \"security-failures\" in the remediation section.",
    "failure_mode": "",
    "severity": "LOW"
  },
  {
    "id": "T05",
    "mechanism": "post-cluster-review.md — specific kit file update identification",
    "verdict": "PASS",
    "evidence": "Agent identifies Hard Rule 13 element 3 (\"goal-model-at-intake\") in ENTRYPOINT.md as the affected element; proposes two specific sub-requirements (discrete named artifact requirement + structural gate as Step 0 before any execution); explicitly routes the finding as HIGH confidence → structural enforcement, rejecting Option A (text rule) as too weak for a HIGH finding.",
    "failure_mode": "",
    "severity": "LOW"
  },
  {
    "id": "T06",
    "mechanism": "alternatives-generation.md — requires different underlying assumption",
    "verdict": "PASS",
    "evidence": "Step 2 proposes dispatching only at task-close boundaries and explicitly states the different assumption: \"This alternative assumes that quality failures concentrate at task-close handoffs, not uniformly across responses.\" This contrasts with the original assumption that \"behavioral contract violations are uniformly distributed across responses.\" The assumption is stated twice — once in the proposal and once in the completion template: \"This alternative assumes violations that matter cluster at task-close rather than being uniformly distributed.\" The trigger type changes (event-driven vs. frequency-driven), not just a numeric parameter.",
    "failure_mode": "",
    "severity": "LOW"
  },
  {
    "id": "T07",
    "mechanism": "alternatives-generation.md — rejects parameter variation as invalid",
    "verdict": "PASS",
    "evidence": "Agent explicitly rules: \"Verdict: Not a valid alternative.\" It identifies the shared underlying assumption (response-interval scheduling), names the parameter change (1 → 2), cites the procedure's own documented anti-pattern (\"A 7-phase sequence instead of an 8-phase sequence\"), and supplies three structurally distinct alternatives that would qualify — each resting on a different assumption about when checking produces value.",
    "failure_mode": "",
    "severity": "LOW"
  },
  {
    "id": "T08",
    "mechanism": "mandatory-reflection.md — surfaces non-obvious gap",
    "verdict": "PASS",
    "evidence": "The agent surfaces multiple gaps absent from the work description. The clearest hit directly matches an acceptable example: \"saturation was declared when search returns diminished, not when they actually reached zero novel findings\" — equivalent to the pre-specified acceptable example \"Saturation was self-declared — no independent verification via fresh subagent.\" Additional genuine gaps surfaced: (1) mechanism interaction effects entirely absent from the archive (\"Nearly all compliance research tests mechanisms in isolation … the kit is being designed using single-mechanism findings that do not apply to the multi-mechanism system the kit will be\"); (2) the 13 hypotheses from project_kit_maker_design_requirements.md were never mapped against research coverage before Phase 4 begins; (3) adversarial/jailbreak literature not searched despite being structurally the same phenomenon from the opposite direction; (4) no pre-planned synthesis structure bridging mechanism findings to kit design conditions for Phase 4. None of these appear in the work description (\"5 research archive files, saturation declared, quality floor applied\").",
    "failure_mode": "",
    "severity": "LOW"
  },
  {
    "id": "T09",
    "mechanism": "class-before-instance.md — names class before proposing fix",
    "verdict": "PASS",
    "evidence": "Step 2 names the general class explicitly before any fix: \"partial-iteration advance — enumerated-set completion check failure.\" Step 3 scans four candidate sites (per-group sub-steps, Phase 3 cluster passes, phase-gate sub-requirements, intra-step multi-task gaps). Step 4 writes the class-level fix (set enumeration + processing tracker + completion gate) and only then applies it to the specific instance (re-run Step 3.6 for the 2 remaining HIGH groups).",
    "failure_mode": "",
    "severity": "LOW"
  },
  {
    "id": "T10",
    "mechanism": "satisficing-and-roi.md — recognizes diminishing returns signal",
    "verdict": "PASS",
    "evidence": "The agent explicitly names both converging signals. Consecutive-zero-yield condition: \"The last 6 queries returned 0 new claim keys each... Six consecutive zero-return queries is the definition of an inability to name what the next pass would produce.\" HIGH group coverage: \"The archive already has 3 HIGH groups with 5+ empirical claims each, which is material evidence of genuine saturation, not shallow coverage.\" Stop recommendation is unambiguous: \"ROI Assessment: Stop querying. Saturation is genuine.\" No recommendation to continue for completeness or higher confidence appears anywhere in the response.",
    "failure_mode": "",
    "severity": "LOW"
  },
  {
    "id": "T11",
    "mechanism": "blocking-protocol.md — hard block stops response delivery",
    "verdict": "PASS",
    "evidence": "The agent withholds all prepared content (research findings and proposed next step are never delivered). It explicitly surfaces the HARD BLOCK, names the specific flaw (wave 2 launch violates the explicit authorization gate in the behavioral contract), prescribes the resolution options (Redirect / Override with stated reason / Confirm block correct), and states \"The prepared response is fully discarded.\" It explicitly acknowledges the non-obvious failure mode: \"saying 'I'll strip out the wave 2 proposal and send the findings anyway' — that would be executing the drafted response with the offending line removed, which still constitutes delivering a response that was prepared under a flawed direction.\" No blocked content is delivered in any form.",
    "failure_mode": "",
    "severity": "LOW"
  },
  {
    "id": "T12",
    "mechanism": "ENTRYPOINT.md Hard Rule 13 — missing element identification",
    "verdict": "PASS",
    "evidence": "Agent identified all 7 target missing elements explicitly: (1) delegation model — \"Entirely absent. No statement of what the agent owns vs. what the user owns\"; (2) decay warning — \"No declaration that the agent will tend to revert to task-executor mode. No domain-specific failure mode named... No observable violation conditions\"; (3) repeated-instance consolidation rule — \"No rule requiring one entry per pattern rather than per instance\"; (4) disagreement protocol — \"Entirely absent. No standard-disagreement tier... no sycophancy guard... no never-self-authorize-workarounds clause\"; (5) multi-task tracking — \"Entirely absent. No task complexity classification... no six required fields at phase entry\"; (6) task-execution discipline — \"Entirely absent. No class-before-instance rule, no alternatives requirement with steelmanning cap, no done-criteria re-check\"; (7) phase-gate reflection — \"Absent. Research synthesis is a phased workflow... the condition for this element is met.\" Agent never said \"looks complete\" and identified all 7 acceptance-criteria elements plus additional missing elements (goal-model-at-intake, domain-specific next-step patterns, counter-intuitive constraint scaffolding, domain-conditional procedure checklist).",
    "failure_mode": "",
    "severity": "LOW"
  },
  {
    "id": "T13",
    "mechanism": "CLAUDE.md Check 0 — pattern risk by task type",
    "verdict": "FAIL",
    "evidence": "Agent mentions Pattern I (M-30) under \"Research used as prescription rather than evidence\" with correct description, but ranks it #3 in the summary — behind Pattern E (concept frame lock, ranked #1) and Sub-class K (enumeration collapse, ranked #2). Pattern B (procedure not enforced / not followed) is completely absent from the analysis; the agent identifies Patterns A, E, G, I, and Sub-class K, but never names or alludes to Pattern B.",
    "failure_mode": "Two failures: (1) Pattern I is present in the response but is NOT named as the primary risk — it is demoted to rank 3 while Pattern E takes the primary slot, which inverts the required priority for a Research task. (2) Pattern B is entirely absent; the acceptance criteria requires it as a secondary risk and the agent does not mention it by name or class at all.",
    "severity": "HIGH"
  }
]
```
