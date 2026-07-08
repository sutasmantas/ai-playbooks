# Kit Build Plan: Research Synthesis Kit

Generated at Phase 5 PLAN — 2026-07-04

**Hard rule:** If what you build in Phase 6 does not match this plan, update the plan first — then build. The plan is not a constraint to route around; it is the artifact that makes Phase 7 auditing possible.

---

## Domain brief (from Phase 2 INTAKE)

- **Domain:** Research synthesis — given a set of research archive files (angle outputs from systematic search), produce a structured synthesis with confidence ratings, evidence calibration, and counter-prior analysis.
- **Kit purpose:** Produce a defensible synthesis.md from a research archive cluster: confidence map, contradiction resolution, counter-prior hypotheses, decision-driving questions.
- **User expertise:** Expert in research methodology; has completed angle files; gap is structured synthesis procedure.
- **Gold standard:** Synthesis output with no silently dropped contradictions, no CONSENSUS labeled as empirical, ≥1 counter-prior hypothesis per cluster.
- **Known failures:** Confirming evidence bias (agents group convergent findings, under-represent divergent/null). Precision ratings near-chance without pre-specified thresholds.
- **Out of scope:** Primary research (searching/extraction); academic publication format; synthesis of non-research content (meeting notes, code).
- **Broader goal:** Force precision about what research-synthesis.md actually specifies; divergences are findings. Test Phase 6 build process with 9c improvements active.

---

## Strongest unsupported assumption

> The existing research-synthesis.md procedure, combined with GRADE-derived confidence rating guidance, produces reliable HIGH/MEDIUM/CONSENSUS distinctions when applied to our research archive format. Specifically: the threshold "≥2 independent empirical claims agreeing at medium+ verify confidence = HIGH" is well-calibrated enough to produce consistent results across agents.

**Why this is the strongest assumption:** GRADE inter-rater reliability studies show κ=0.18–0.84 depending on domain — the threshold number ("≥2 claims") is a provisional judgment call in research-synthesis.md. No calibration run has tested whether two agents applying this rule to the same archive produce the same confidence tier.

**Flip trigger:** If Phase 7 correctness audit finds that a claimed HIGH-confidence group has ≤1 independently verified claim, or if a CONSENSUS group has ≥2 unreviewed empirical claims, the threshold rule is under-specified and must be made more explicit.

---

## What this kit is NOT

- NOT: A primary research tool (query construction, source selection — that's research-quality.md)
- NOT: A literature review generator for academic publication (no PRISMA flow, no systematic protocol)
- NOT: A synthesis tool for non-research content (meeting notes, code reviews, design documents)

---

## File manifest

| # | File | Purpose | Done-criteria | Stakes |
|---|------|---------|---------------|--------|
| 1 | `CLAUDE.md` | Behavioral contract: goal-directed synthesis advisor behavior | Contains all Hard Rule 13 required elements; fresh agent reading it alone can identify: gold standard, what agent owns vs user owns, after-every-task rule, proactive surfacing, decay warning with observable violation condition | HIGH |
| 2 | `procedures/synthesis.md` | Main synthesis procedure (Steps 1–7 adapted from research-synthesis.md + mandatory counter-prior pass) | Fresh agent reading only this file can produce a synthesis that passes the 3 success criteria: no silently dropped contradictions, CONSENSUS/empirical distinction maintained, ≥1 counter-prior hypothesis; includes pre-specified precision threshold requirement and scale-handling rule for >20 angles | HIGH |
| 3 | `templates/synthesis-output.md.template` | Output structure with placeholders | Fresh agent reading this file alone can produce a synthesis.md that satisfies the domain brief format: confidence map table, contradiction log, counter-prior section, user questions section | MEDIUM |

**Ordering rationale:**
- File 1 (CLAUDE.md) first: required by Hard Rule 13; behavioral contract governs how agent approaches every other file
- File 2 (synthesis.md) second: highest stakes — if the procedure is wrong, all synthesized output is wrong; harder to fix after behavioral contract is established; most uncertain design choice is the procedure steps
- File 3 (template) third: wrong format is recoverable; can be adjusted after procedure is validated; no other files depend on it

**Why only 3 files:** "Kit at right scope" principle — lean core, external pointers. The synthesis procedure IS the kit. Adding weakness_register.md or pitfall_register.md at generation time "pre-populates registers" which defeats the promotion discipline. Generated kit ships lean; registers accumulate from real use.

---

## Riskiest-first rationale

1. CLAUDE.md — if the behavioral contract miscalibrates the agent's operating mode (e.g., omits the proactive surfacing rule), every synthesis the kit produces will be passive and incomplete. Hard to detect after deployment.
2. procedures/synthesis.md — if the synthesis steps are wrong or under-specified, all output from the kit is wrong. This is the highest-complexity file (7 steps, multiple sub-steps, calibration rules). Most likely to require a fix loop.
3. templates/synthesis-output.md.template — format mistakes are visible and correctable without re-running synthesis.

---

## Research gaps and provisional decisions

| Question | Provisional decision | Flip trigger |
|----------|---------------------|--------------|
| What threshold makes a group HIGH confidence? ("≥2 independent claims at medium+ verify") | Use research-synthesis.md's provisional threshold: ≥2 independent empirical claims at medium+ verify confidence | Phase 7 audit finds systematic mis-tiering (>20% of groups assigned wrong tier by fresh agent) → add calibration examples |
| How to handle scale for >20 angles? | Add explicit scope gate: for >20 angles, agent must first generate a group-level overview (claim counts per group, top 5 groups by count), then synthesize top 5 at depth and remaining at summary level | If Phase 6 test run on advisor-behavior cluster (5 files) passes, scale handling not validated — flag as weakness_register entry |
| Should counter-prior pass be Step 4 or Step 7? | Step 4 (before deriving principles in Step 3.7 → renumbered): forces counter-prior before principles are locked in | If counter-prior at Step 4 produces no useful output in Phase 6 test run → consider deferring to end |

---

## Input-type coverage matrix

Kit handles 2 input types (≤3 → matrix N/A):
- Research archive angle files: handled by Steps 1–2 (grouping + contradiction scan)
- Cluster definition: handled by procedure preamble (parameterization inputs)

Input-type coverage: N/A — 2 types, explicit matrix not required.

---

## Scale handling

**Input size gate:** >20 angle files or >200 total claims in archive → scope gate fires.
**Scoping rule:** For oversized archives: generate group-level overview first (claim counts per group, top 5 groups by count). Synthesize top 5 groups at depth. Remaining groups at summary level only. Log scope decision in synthesis output.
**State tracking:** At start of procedure: record group list and claim counts. Update as groups complete.
**Consolidation trigger:** Same contradiction pair appearing across >3 groups → consolidate into a cross-cutting conflict entry.

---

## Discovered work (append-only during Phase 6)

1. **Missing research angle: "Synthesis-session goal coherence"** — counter-prior pass for goal-persistence-architecture revealed a scope mismatch: long-horizon agent findings (context dilution over many tool calls) may not apply to synthesis-duration sessions (<50 steps). Whether goal coherence mechanisms are needed in short single-session synthesis tasks is unresearched. Add to RESEARCH_ANGLES.md when research wave resumes.

2. **Step 3.5 subagent dispatch calibration** — the skip condition ("all groups ≥3 medium+verify claims") is untested. Phase 6 test run showed the boundary case (2 medium+verify claims) fires more often than expected. Real-use calibration needed before recommending skip in multi-session synthesis. Flag as provisional.

3. **Completeness auditor found cross-group contradiction scan absent in initial draft** — this was a structural miss in the first build (Step 2 only covered intra-group contradictions). Fixed in Round 1. This is the highest-priority learning for kit-maker Phase 9d: "contradiction scan must explicitly scope to both intra-group AND cross-group" should propagate to kit-maker's research-synthesis.md reference procedure.

4. **Template Action column misread as meta-instructions** — Correctness Auditor Round 1 interpreted "derive from (Step 3.7)" as a meta-directive rather than output content. Added explicit clarifying comment. This suggests a general template design principle: when a column contains status-tracking text rather than result text, mark it explicitly in the comment.

---

## Verify schedule

Phase 7 VERIFY runs after all files built.
Canary: Use the 5-file "advisor behavior" cluster (goal-directed-advisor-behavior, assertive-compliance, direction-level-pivot-signals, direction-drift-detection, diminishing-returns-detection) as real-input test case. Deliberately degrade it by removing one counter-prior opportunity (known gap type b from Phase 9c canary criteria). Expected auditor finding: agent did not detect missing counter-prior hypothesis.

Phase 6 real-input validation test case: Same 5-file cluster → run kit → check 3 success criteria.
