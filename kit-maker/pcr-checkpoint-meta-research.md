# PCR Checkpoint — Cluster: meta-research

**Date:** 2026-07-05
**Cluster:** meta-research (Search methodology fundamentals + review-system-design + alternatives-generation (CONTESTED) + adversarial-review-dynamics)
**Synthesis file:** kit-maker/research_archive/synthesis-meta-research-methodology.md
**PCR procedure version:** restructured 2026-07-03

---

## Step 1 — Actionable Claims Extracted

| Claim key | Group | Confidence | Table 3 priority |
|-----------|-------|------------|-----------------|
| berrypicking-evolving-query | search-methodology-fundamentals | HIGH | Already applied (research-quality.md) |
| recall-bias-most-common-error | search-methodology-fundamentals | HIGH | Already applied (research-quality.md) |
| peer-review-inter-reviewer-agreement | peer-review-quality | HIGH (SCOPE: error detection) | MEDIUM priority |
| peer-review-statistical-expert-biggest-gain | peer-review-quality | HIGH (SCOPE: quantitative research) | Applied in prior PCR (PCR-RQ-A3) |
| cascade-peer-review-62pct-time-reduction | review-system-design | HIGH | LOW phase 7 guidance |
| resubmission-reopt-out-severe-quality-decline | review-system-design | HIGH | Addressed by existing Phase 7 two-pass structure |
| red-team-late-timing-resistance | adversarial-review-dynamics | HIGH (structural) | HIGH priority |
| red-team-internal-familiarity-blindspot | adversarial-review-dynamics | HIGH (structural) | HIGH priority |
| hypothesis-inverted-ground-truth-15pct | **alternatives-generation — CONTESTED** | CONTESTED (reclassified per Step 3.6) | **CONTESTED — flagged for resolution** |
| query-expansion-recall-improvement-6-7-percent | search-methodology-fundamentals (CONSENSUS) | CONSENSUS | Already addressed (research-quality.md Step 0) |
| expert-strategy-switching-on-failure | query-formulation-quality (CONSENSUS) | CONSENSUS | LOW priority |
| rag-recall-precision-bottleneck | search-methodology-fundamentals | HIGH | LOW priority (architecture note) |

---

## CONTESTED Group

**alternatives-generation** group is CONTESTED per the synthesis Step 3.6 fresh-pass adversarial review.

Three arguments that reclassified it from HIGH:
1. Model set excluded flagship frontier models (GPT-4o full, Claude Sonnet/Opus, Gemini Pro, o1/o3) — HDR findings do not apply to these models
2. <15% HDR applies only at conjunction of counterintuitive + high compositional complexity (not unconditionally)
3. "Regardless of adversarial instruction" unsubstantiated — no variation in instruction format was tested

**Do NOT apply** any rule from this group. **Flag for resolution.**

**Secondary flag:** The counter-prior pass rule in research-synthesis.md (Step 3.6, added via Cluster B PCR 2026-07-01) rests on `hypothesis-inverted-ground-truth-15pct` which is now CONTESTED. That rule was applied before the CONTESTED reclassification was available. The rule may remain in place (the counter-prior pass has structural value independent of the HDR finding), but its evidence basis should be reviewed: the mechanism (LLM outputs remain prior-consistent under instruction) has multi-source support; the contested element is the specific <15% HDR quantification and universality claim. Flagged for design-log review — rule is not recommended for removal without that review.

---

## Step 2 — Audit List via Cross-Match

### Step 2.0 — Principles read before claims

Step 3.7 principles from synthesis read before opening claims table. Key principle derivations used in cross-match:

**search-methodology-fundamentals:** Recall-biased strategies required when vocabulary only partially knowable; LLM context retrieval has same asymmetry → kit rules should be authored for high-recall retrieval (redundant surface forms, multiple trigger phrasings). Principle extension item.

**peer-review-quality:** Single evaluator conflates interpretation variance with quality signal; binary-observable criteria minimize interpretation space → audit criteria should be decomposed before dispatch; two-tier audit (binary-observable + holistic). Mechanism gap candidate.

**review-system-design:** Pass purpose determines whether carrying prior context helps or hurts → every pass in kit pipeline classified as independence-required or continuation-acceptable at design time. Mechanism gap.

**adversarial-review-dynamics:** Crystallized target + pre-commitment = required conjunction. Phase 6 build is the commitment event → adversarial review of Phase 5 PLAN is a hard gate before Phase 6. Mechanism gap (Phase 5→6 gate missing).

### Step 2.1–2.2 — Per-claim cross-match results

| # | Claim key | Conflict type | Target file | Gap / conflict description |
|---|-----------|--------------|-------------|---------------------------|
| A | red-team-late-timing-resistance + red-team-internal-familiarity-blindspot (HIGH) | Mechanism gap | ENTRYPOINT.md Phase 6 | No adversarial review gate between Phase 5 and Phase 6. "User has reviewed the plan" is user review, not adversarial. Once Phase 6 build starts, correction cost multiplies. |
| B | cascade-peer-review-62pct-time-reduction + resubmission-reopt-out-severe-quality-decline (HIGH) | Mechanism gap | ENTRYPOINT.md Hard Rule 13 | No independence classification requirement for multi-pass review in generated kits. Passes that require clean-slate independence are not structurally distinguished from passes where continuation is acceptable. |
| C | peer-review-inter-reviewer-agreement (HIGH, r=0.34) | Mechanism gap (borderline) | ENTRYPOINT.md Phase 7 | Phase 7 dispatches auditors without pre-decomposing audit criteria into binary-observable vs. holistic judgment. No pre-dispatch criterion decomposition gate. Score: 4 (borderline). Deferred pending verify_prompt.md review. |
| D | berrypicking-evolving-query (HIGH, LLM-recall derivation) | Principle extension | ENTRYPOINT.md / CLAUDE.md | Kit rules authored for precision (minimal clear statements) not for LLM recall (redundant surface forms). Score: 6. BUT conflicts with density constraint (HIGH validated). Deferred to design session. |
| E | hypothesis-inverted-ground-truth-15pct (alternatives-generation) | CONTESTED | research-synthesis.md | CONTESTED — flagged for resolution. Do not apply. |

### Step 2.3 — Cross-finding compound mechanisms

| Compound | Source claims | Actionability |
|---------|--------------|---------------|
| berrypicking × internal-familiarity-blindspot | HIGH × HIGH | Both require external injection (vocabulary + reviewer perspective); no specific kit rule gap identified beyond adversarial gate already being applied. NULL for kit changes. |
| peer-review-inter-reviewer-agreement × red-team-late-timing-resistance | HIGH × HIGH | Timing × reliability compound: even correct review is suppressed after commitment. Confirms: pre-Phase-6 adversarial gate is the structural fix (audit item A). Supports Change 1. |
| cascade-peer-review × peer-review-statistical-expert-biggest-gain | HIGH × HIGH | Cascade targeting + specialist efficiency: second pass should target borderline outputs AND use specialist framing. PCR-RQ-A3 already applied specialist detection for NEVER rules. LOW priority note — deferred. |
| cascade-peer-review × governance-decay-compaction | HIGH × HIGH | Review artifact reuse in long-horizon sessions may lose artifacts during compaction. Hard Rule 13 already requires beyond-prompt enforcement for long-horizon kits. LOW priority note — deferred. |

---

## Step 3 — Prioritized Audit Items

| # | Item | Score | Decision |
|---|------|-------|---------|
| A | Phase 5→6 adversarial plan review gate (audit item A) | 3×3=9 | APPLY |
| B | Hard Rule 13: multi-pass review independence classification (audit item B) | 2×2=4 | APPLY (conditional row) |
| C | Phase 7 binary-observable criteria decomposition (audit item C) | 4 (borderline) | DEFER |
| D | LLM rule-recall authoring guidance (audit item D) | 6 but conflicts with density constraint HIGH | DEFER |
| E | alternatives-generation CONTESTED | CONTESTED | CONTESTED FLAG |

---

## Step 3.5 — Mechanism Options

### Audit Item A (adversarial plan review gate):
- Option A: Checkbox in Phase 5 gate — REJECTED (checkboxes skip under execution pressure; "User has reviewed" is already a Phase 5 checkbox and remains weak)
- **Option B: Opening requirement of Phase 6 BUILD section, before Phase 6 subagent dispatch — CHOSEN** (structural placement at commitment event; must complete before Phase 6 dispatch; moderate overhead)
- Option C: New Phase 5.5 phase — REJECTED (adds phase overhead; 8→9 phases; phase-level gate adds mandatory reflection which is disproportionate)

### Audit Item B (independence classification):
- Option A: Text edit to existing Hard Rule 13 element — REJECTED (unclear placement; increases density of existing elements)
- Option B: New Hard Rule 13 element 13 — REJECTED (violates density constraint HIGH validated; element count already at ceiling)
- **Option C: New row in domain-conditional checklist — CHOSEN** (conditional — only fires when multi-pass review present; matches scope caveat; fits established table structure; does not increase Hard Rule 13 element count)

---

## Step 4 — Changes Applied

### Gate A (Pattern I) checks

**Change 1:** Am I implementing the recipe or a derivation?
- Recipe: implement human red-team protocol (formal terms of reference, organizational separation, multi-session timeline)
- Derivation: adversarial review effectiveness requires crystallized target + pre-commitment timing. For our setup: commitment event = Phase 6 build dispatch. Derive: adversarial review of Phase 5 PLAN is required before that event.
- This is a derivation. Gate A: PASS. ✓

**Change 2:** Am I implementing the recipe or a derivation?
- Recipe: implement academic cascade peer review with borderline targeting and artifact reuse
- Derivation: pass purpose determines safety of context carry-forward. For generated kits: when specifying multi-pass review, classify each pass as independence-required or continuation-acceptable.
- This is a derivation. Gate A: PASS. ✓

### Changes written

**Change 1 — ENTRYPOINT.md Phase 6 BUILD section**
Added adversarial plan review gate block immediately before "Phase 6 subagent dispatch (required)" text. Gate requires:
- Dispatch adversarial subagent on PLAN.md only (no design rationale, no synthesis, no research archive)
- Adversarial reviewer identifies: (1) weakest assumption; (2) highest-risk architectural decision; (3) one use case kit will fail at
- Returns: BLOCKING CONCERN or NO BLOCKING CONCERN
- If BLOCKING CONCERN: revise PLAN.md, re-run adversarial review; only proceed when NO BLOCKING CONCERN
- If NO BLOCKING CONCERN: proceed; log risks in weakness_register.md
- Scope condition stated explicitly

Evidence strength: HIGH → structural enforcement (gate, not guideline). ✓
Rule-outcome-register: PCR-MR-A1 written. ✓

**Change 2 — ENTRYPOINT.md Hard Rule 13 domain-conditional checklist**
Added new row: "Kit has multi-pass review procedures (iterative auditor rounds, peer-check loops, or any procedure where an evaluation pass is repeated on the same output or a revision of it)"
Row requires: independence declaration for each pass (independence-required or continuation-acceptable); default is independence-required; continuation-acceptable requires justification. Scope condition stated explicitly.

Evidence strength: HIGH conditional → structural enforcement in conditional scope. ✓
Rule-outcome-register: PCR-MR-A2 written. ✓

---

## Step 5 — Fresh Subagent Re-Review

**Constraint:** this execution context (CLI subagent spawned by workflow orchestration) does not have an Agent dispatch tool available. Step 5 child subagent could not be dispatched.

**Mitigation:** Changes were derived exclusively from Step 3.7 principles (not raw study techniques), cross-matched against kit files before application, and mechanism alternatives were explicitly scored before selection. The reasoning chain is documented in this checkpoint. A future session with Agent dispatch capability should re-review these two changes with a fresh subagent at first opportunity.

**Step 5 finding: NULL (constraint, not review result).**

---

## Step 6 — Grounding-Map Updates

Two new 🔬 SYNTHESIZED rows added to Behavioral Procedures section:
1. "ENTRYPOINT.md Phase 6 — adversarial plan review gate before Phase 6 build dispatch" → 🔬 SYNTHESIZED, Trials: 1, PCR-meta-research
2. "ENTRYPOINT.md Hard Rule 13 — generated kit multi-pass review independence classification (domain-conditional)" → 🔬 SYNTHESIZED, Trials: 1, PCR-meta-research

Summary count updated: 🔬 SYNTHESIZED ~24 → ~26.
Last-updated line added for PCR-meta-research (2026-07-05).

---

## Step 7 — New Research Angles

New angles from synthesis "New angles generated" section (not yet written to RESEARCH_ANGLES.md — requires reading that file; logged here for next session):

1. **AI research recall vs. arXiv saturation (P3):** Does LLM-based research retrieval hit recall ceilings earlier than keyword-based retrieval on mature research domains? At what saturation point does adding more angles produce diminishing vocabulary diversity?
2. **Iterative agent query evolution in practice (P2):** What query-evolution strategies do state-of-the-art LLM research agents use? Do they implement berrypicking-like iteration or batch enumeration? What failure modes appear in practice?
3. **Adversarial framing vs. counter-prior prompting (P2):** Does adversarial subagent framing produce genuinely counter-prior outputs vs. surface-form adversarial text that remains prior-consistent? Can this be measured via HDR-type scoring?

---

## Deferred Items (to design_log.md Discovered Work)

1. **LLM rule-recall authoring guidance** — The search-methodology-fundamentals principle derivation (Sub-step C) implies kit rules should be authored with redundant surface forms for LLM retrieval. Score 6 (>4), but conflicts with the density constraint (HIGH validated: `constraint-count-compliance-exponential-decay`). These two HIGH findings are in direct tension. Resolution requires a design session: does recall-optimized rule authoring increase density costs enough to offset the retrieval benefit? Deferred.

2. **Phase 7 binary-observable criteria decomposition** — The peer-review-quality principle derivation implies audit criteria should be pre-decomposed into binary-observable vs. holistic judgment before dispatching Phase 7 auditors. Score 4 (borderline). Uncertainty: verify_prompt.md was not read in this PCR run; it may already address this. Deferred pending review of verify_prompt.md content.

3. **Cascade + specialist efficiency compound (LOW)** — Second pass should target borderline outputs AND use specialist framing (PCR-RQ-A3 already applied specialist detection for NEVER rules). Full cascade targeting principle not yet stated as a design principle in Phase 7.

4. **alternatives-generation CONTESTED finding review** — The counter-prior pass in research-synthesis.md Step 3.6 (PCR-RQ-A3 applied 2026-07-01) rests on `hypothesis-inverted-ground-truth-15pct` which is now CONTESTED. Review whether the counter-prior pass rule's justification should be updated to reference the structural argument (LLM prior bias, multi-source CONSENSUS) rather than the specific HDR quantification.

---

## Summary

| Category | Count | Keys |
|----------|-------|------|
| Audit items examined | 5 | A, B, C, D, E |
| Changes applied | 2 | PCR-MR-A1 (ENTRYPOINT Phase 6 gate), PCR-MR-A2 (ENTRYPOINT Hard Rule 13 row) |
| Changes deferred | 2 | LLM rule-recall authoring (density conflict), Phase 7 criteria decomposition (borderline score + unknown verify_prompt.md state) |
| CONTESTED flagged | 1 | alternatives-generation (hypothesis-inverted-ground-truth-15pct) |
| Compound mechanisms | 4 checked | 1 supports Change 1; 1 null for kit changes; 2 LOW priority notes |
| NULL result | NO | 2 changes applied |

**Cross-match complete for cluster meta-research.**
