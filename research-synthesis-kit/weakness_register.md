# Weakness Register — Research Synthesis Kit

Weaknesses confirmed through real use. Each entry: known limitation, observable condition, mitigation available.

---

## W-01 — Step 3.5 skip condition untested at boundary

**Description:** The shortcut condition ("skip subagent dispatch if all groups have ≥3 medium+verify claims") is untested. Phase 6 test run showed the boundary case (2 medium+verify claims, e.g., goal-persistence-architecture) fires more often than expected, making the skip condition rarely applicable in practice.

**Observable:** Skip condition fires during synthesis → shortcut applied → groups at 2 medium+verify claims treated as full-skip, producing lower-quality principle extraction.

**Mitigation:** Flag Step 3.5 skip as provisional. Before applying skip: state claim count explicitly. If any group has exactly 2 medium+verify claims: treat as if shortcut does not apply.

**Source:** Phase 6 test run (2026-07-04), plan.md Discovered Work item 2.

---

## W-02 — Scale handling validated only at 5-file input

**Description:** The scale gate (>20 files OR >200 claims) and the corresponding scope rule have not been tested on a large cluster. The 5-file test run is too small to validate depth/summary split behavior or consolidation trigger.

**Observable:** Kit receives >20 files → scale gate fires → scoping rule applied → unknown behavior: summary-level groups may be under-specified; cross-group contradiction scan at summary level not defined.

**Mitigation:** Flag scale gate as provisional. Add cross-group contradiction scan instructions for summary-level groups when scale gate fires. Validate with a real 20+ file cluster before treating as production-ready.

**Source:** Phase 6 test run (2026-07-04), plan.md Research Gaps.

---

## W-03 — Confidence tier threshold (≥2 claims) not calibrated across agents

**Description:** The HIGH-tier threshold "≥2 independent empirical claims at medium+ verify confidence" is a provisional judgment call derived from GRADE methodology (κ=0.18–0.84 depending on domain). No calibration run has tested whether two agents applying this rule to the same archive produce the same tier assignment.

**Observable:** Two agents synthesize the same cluster → one assigns HIGH, one assigns MEDIUM to the same group → threshold is under-calibrated for this domain.

**Mitigation:** The pre-specified threshold (state count before assigning) reduces but does not eliminate variance. Calibration run (2 agents, 1 cluster, compare tier assignments) needed before treating HIGH/MEDIUM distinction as reliable across runs.

**Source:** plan.md Strongest Unsupported Assumption (2026-07-04), research-synthesis.md PCR-167.

---

## W-04 — Counter-prior hypothesis quality not specified

**Description:** Step 3.6 requires ≥1 counter-prior per HIGH group but does not specify what makes a counter-prior substantive vs. trivial. A trivially constructed counter-prior ("what if the opposite were true?") satisfies the structural requirement without providing analytical value.

**Observable:** Synthesis output contains 6 counter-prior entries (one per HIGH group) → all entries are single-sentence reversals of the main conclusion with no supporting reasoning → structural requirement met, analytical value near zero.

**Mitigation:** When auditing counter-priors, check: does the counter-prior cite specific evidence or mechanism that the main conclusion overlooked? If not: flag as thin.

**Source:** Phase 6 test run (2026-07-04) — counter-prior quality varied; not enforced structurally.
