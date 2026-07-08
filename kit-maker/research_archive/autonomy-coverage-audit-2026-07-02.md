# Autonomy Dimensions Coverage Audit

**Date:** 2026-07-02  
**Purpose:** Determine which A1-A9 autonomy failure mode dimensions have research backing before Phase 6 rebuild begins. Triggered by M-25 Q3 finding: if research didn't cover it, Phase 6 can't build reliable procedures for it.

---

## Summary table

| Dim | Description | Verdict | Evidence strength |
|-----|-------------|---------|------------------|
| A1 | Intake efficiency (≤3 questions, action-counterfactual selection) | COVERED | Substantial — CLARITI (41% fewer questions), LHAW taxonomy, arXiv:2602.10525 |
| A2 | Execution autonomy (no mid-task prompting) | COVERED | Substantial — goal-timing cliff arXiv:2605.07937, structural gate arXiv:2509.04470 |
| A3 | Decision autonomy (act-first not defer) | COVERED | Substantial — 1.5M conversation scale arXiv:2601.19062, delegate-mode +1.5× welfare |
| A4 | Error self-detection (catch own mistakes) | THIN | CoT is post-hoc rationalization (arXiv:2503.08679, arXiv:2510.24941); 2.3% of reasoning steps are genuine; no mitigation mechanism found |
| A5 | Error self-correction (fix without user) | GAP | Research shows it FAILS — intrinsic self-correction degrades performance (ICLR 2024, TACL survey); fundamental LLM limitation, not a kit design problem |
| A6 | Goal tracking across subtasks | COVERED | Substantial — 5 drift mechanisms, strong elicitation proven >100k tokens arXiv:2505.02709 |
| A7 | Completion recognition (know when done) | THIN | Omission is dominant failure (12.4%); no detection mechanism provided; flagged as explicit gap in archive |
| A8 | Scope self-enforcement | THIN | Role framing as scope filter documented; escalation-of-commitment bias amplified in multi-agent arXiv:2508.01545; not empirically validated |
| A9 | Ambiguity resolution (document assumption not halt) | COVERED | Substantial — LHAW three-class (benign/outcome-critical/divergent), CWA/OWA framework, 48.3% implicit constraint detection |

**Totals: 5 COVERED, 3 THIN (A4, A7, A8), 1 GAP (A5)**

---

## Critical interpretation

### A5 — corrected scope (M-27, 2026-07-03)

**ICLR 2024 and TACL survey establish:** intrinsic self-correction WITHOUT external feedback consistently DEGRADES performance across 5+ task types. The tested setup: bare LLM critiquing its own output using the same reasoning process that generated it.

**What the research does NOT establish:** that self-correction FAILS when:
- External structured checklists are used (TASK_TEMPLATE gates)
- A SEPARATE agent performs the correction assessment (different model with no access to the worker's reasoning process)
- That separate agent is given adversarial framing ("find reasons this is wrong") counteracting sycophancy bias

**Corrected verdict:** A5 is a hard open problem for bare intrinsic self-correction. It is NOT a closed problem for external-agent-supported correction. The distinction is: who is correcting, with what access to context, and with what framing.

**Design consequence (corrected):** Kit procedures should NOT rely on bare "review your output and improve it" as a reliable step (this is well-evidenced to fail). Kit procedures CAN build toward:
- Separate adversarial verifier agents with no access to the worker's reasoning and explicit instructions to find problems
- Structural external checklists (TASK_TEMPLATE gates) as partial substitutes
- User gate for high-stakes outputs

**Road that remains open:** Does a separate adversarial verifier with adversarial framing achieve reliable error detection that bare self-correction cannot? This is an untested question in our setup — not a confirmed failure. Research angle queued: "multi-agent adversarial verification for task quality assessment."

### A4 is near-fundamental

CoT reasoning is 97.7% non-genuine (TTS <0.7). Self-verification is largely rationalization of the answer already determined. Partial mitigation exists: structured external checklists (not "did I do this?" but "check item X exists in the output") can substitute for internal detection. The TASK_TEMPLATE gate structure is an example of this — it doesn't ask the agent to detect incompleteness; it provides an external checklist.

### A7 and A8 may already be addressed by TASK_TEMPLATE structure

A7 (completion recognition): TASK_TEMPLATE Section 6.1 requires re-reading done-criteria from Section 1.1 before marking complete. This externalizes the completion criterion — the agent doesn't need to internally recognize "done," it checks against an externally-written criterion. This is the structural substitute the research gap was pointing toward.

A8 (scope enforcement): TASK_TEMPLATE Section 1.3 ("What this task is NOT") + Section 6 review creates a structural scope declaration + scope-check pair. Same design pattern.

If these structural substitutes work, A7 and A8 may not need new research — they need the template to be used correctly. Phase 7 should test whether the template gates actually enforce completion and scope, not whether the agent intrinsically recognizes them.

---

## What this means for Phase 6 rebuild

Procedures for A1, A2, A3, A6, A9 can be built from research findings — specific design patterns exist.

Procedures for A4 and A5 should NOT claim self-correction capability. The behavioral contract must acknowledge: self-review steps have a known reliability ceiling; external verification is required for high-stakes findings.

Procedures for A7 and A8 should use structural substitutes (external done-criteria, explicit scope declaration) rather than relying on self-recognition.

---

## What this means for Phase 7 trial design

The trial should test:
1. Whether the kit's A1/A2/A3/A6/A9 procedures work at realistic scale (where research says they should work)
2. Whether the structural substitutes for A7/A8 (TASK_TEMPLATE gates) actually enforce completion and scope
3. Whether A4/A5 failures are documented and handled correctly (not whether they're solved)

Testing A5 expecting the kit to self-correct is testing a known false assumption — the trial would find a "failure" that is actually a fundamental limitation, not a kit design problem.

---

## Research gaps that CAN be addressed

If new research is run before Phase 6:
- A7: "empirical evidence on how not-recognising task completion manifests in practice and what signals reliably trigger termination" — archive explicitly flags this as missing
- A8: empirically-validated design patterns for scope enforcement beyond behavioral contracts

These are new research angles, not fundamental limitations. They can be addressed by adding angles to the research backlog.
