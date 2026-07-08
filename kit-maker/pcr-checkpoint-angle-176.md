# PCR Checkpoint — Angle 176
**Cluster:** angle-176 (Constraint count degradation + omission-completion state)
**Date:** 2026-07-05
**Procedure:** post-cluster-review.md (restructured 2026-07-03)

---

## Step 1 — Eligible claims extracted

Collected per evidence tier:

**HIGH empirical:**
- `multi-instruction-stacking-monotonic-degradation` (HIGH, arXiv:2509.21051 EMNLP 2025)
- `agentif-avg-11-9-constraints-poor-performance` (HIGH, arXiv:2505.16944)
- `pm-llm-compliance-drop-2-21pct` (HIGH, arXiv:2603.23530)
- `pm-llm-bidirectional-interference-gsm8k-collapse` (HIGH, arXiv:2603.23530)

**MEDIUM empirical:**
- `pm-llm-salience-recovery-90-100pct` (MEDIUM, arXiv:2603.23530)
- `triggerbench-pm-degrades-long-context` (MEDIUM, arXiv:2606.23459)
- `proactive-interference-log-linear-decay` (MEDIUM, arXiv:2506.08184)
- `seqbench-recall-precision-divergence-path-length` (MEDIUM, arXiv:2509.16866)
- `mast-14-failure-modes-task-verification-11pct` (MEDIUM, arXiv:2503.13657)
- `sagallm-saga-pattern-partial-completion-rollback` (MEDIUM, arXiv:2503.11951)
- `arq-reintroduction-90pct-vs-cot-86pct` (MEDIUM, arXiv:2503.03669)

**CONSENSUS that updates existing kit decision:**
- `bdi-intention-commitment-reconsideration-planning` (CONSENSUS) — updates multi-task tracking element 9 (external state guidance)

**Excluded:**
- `position-bias-null-result-instruction-following` — downgraded LOW→CONSENSUS in synthesis Step 2.5
- `anthropomorphic-framing-critique-lm-research` — CONSENSUS with no kit decision relevance
- `hci-interruption-resumption-lag-cues-reduce-workload` — MEDIUM, cross-domain, no direct kit conflict

---

## Step 2 — Audit list

### Sub-step 2.0 — Principles read before claims

**Group A Principle (constraint-count-degradation):** When an agent must satisfy multiple constraints simultaneously, compliance degrades monotonically with constraint density. The relationship is graded with no plateau. Terminal-position constraints face disproportionately higher failure risk (~50% drop at terminal position). Count is likely a proxy for conflict density, not a causal driver — constraint pairs that can co-activate on the same input in conflicting ways are the true risk surface.

Principle extension check: existing kit procedures/rules that may violate this principle even where the specific finding doesn't directly apply:
- ENTRYPOINT Hard Rule 13 culling priority says "conflicting rules first" but has no detection mechanism — mechanism gap
- ENTRYPOINT Hard Rule 13 critical rule placement covers bookending but not general ordering — mechanism gap
- ENTRYPOINT context compaction section doesn't address conflict pairs in compaction context — mechanism gap

**Group B Principle (omission-completion-state):** In-context commitment tracking degrades independently of per-item execution quality. Precision stays high while recall drops. External persistent manifests address the failure; in-context tracking reproduces it.

Principle extension check:
- ENTRYPOINT Hard Rule 13 element 9 (multi-task tracking) uses "enumerate before starting" — partially addresses this, but no external completion manifest requirement for kits with >5 steps
- research-synthesis.md Step 3.6 counter-prior pass requires one run per HIGH group, tracked by terminal count-parity check rather than up-front external manifest

### Sub-step 2.1 — Dimensions affected

| Claim | Dimensions affected |
|-------|-------------------|
| multi-instruction-stacking-monotonic-degradation (HIGH) | Generated-kit behavioral contract; Phase 6 gate |
| agentif-avg-11-9-constraints-poor-performance (HIGH) | Generated-kit behavioral contract |
| pm-llm-compliance-drop-2-21pct (HIGH) | Generated-kit behavioral contract; constraint ordering |
| pm-llm-bidirectional-interference-gsm8k-collapse (HIGH) | Generated-kit behavioral contract; Phase 6 gate |
| seqbench-recall-precision-divergence-path-length (MEDIUM) | Generated-kit behavioral contract (element 9) |
| bdi-intention-commitment-reconsideration-planning (CONSENSUS) | Generated-kit behavioral contract (element 9) |

### Sub-step 2.2 — Per-claim cross-match

**Claim: pm-llm-bidirectional-interference-gsm8k-collapse (HIGH)**
- vs ENTRYPOINT culling priority ("conflicting rules first"): MECHANISM GAP — culling priority names conflict-capable pairs as highest priority but provides no detection procedure. Synthesis Step 3.7 derivation C specified "conflict-density audit for each pair" — not applied at synthesis time.
- vs ENTRYPOINT Hard Rule 13 density section: the WHAT (cull conflicting rules) is present; the HOW (how to find conflicting rules) is absent.

**Claim: pm-llm-compliance-drop-2-21pct (HIGH) — terminal constraint failure**
- vs ENTRYPOINT Hard Rule 13 (no constraint ordering guidance): MECHANISM GAP — synthesis Step 3.7 derivation specified "goal model and delegation model first, safety-critical never-rules second, operational procedures last." Not applied at synthesis time.
- vs ENTRYPOINT Critical rule placement: critical rule placement covers bookending a single most-important rule; ordering principle covers general rule organization. Non-redundant mechanism gap.

**Claims: multi-instruction-stacking-monotonic-degradation × pm-llm-bidirectional-interference-gsm8k-collapse — COMPOUND (Step 2.3)**
- Neither implies alone: even low rule count (≤8) produces compliance collapse if two rules can co-activate conflictingly on the same input.
- Compound mechanism: conflict-capable pairs are the primary risk surface; count is only a proxy.
- Existing kit: culling priority mentions conflicting rules first but has no Phase 6 gate verifying the audit ran.
- MECHANISM GAP: Phase 6 gate lacks conflict-capable pair audit.

**Group B CONSENSUS claims (seqbench + MAST + SagaLLM + BDI)**
- vs ENTRYPOINT element 9: synthesis Step 3 confidence map noted "recommend external completion manifest for kits with >5 sequential steps or sessions >15 turns" — this was NOT applied in synthesis Step 6.
- MECHANISM GAP: element 9 update not applied. However: CONSENSUS evidence, impact 3, score = 1 × 3 = 3 < 4. DEFERRED.

### Sub-step 2.3 — Cross-finding pass (HIGH × HIGH)

**Compound 1:** `multi-instruction-stacking-monotonic-degradation` (HIGH) × `pm-llm-bidirectional-interference-gsm8k-collapse` (HIGH)
- Compound: even a kit with ≤8 rules can collapse if two rules produce bidirectional interference on a common input. Count ≤8 does not protect against conflict-capable pairs.
- Not implied by either alone: monotonic degradation claim alone suggests count is the driver; bidirectional interference alone says any count can collapse if two rules conflict. Combined: conflict-capable pairs are the true risk surface, not count.
- New mechanism: conflict-pair scan at Phase 6 before shipping. ✓

**Compound 2:** `pm-llm-bidirectional-interference-gsm8k-collapse` (HIGH, angle-176) × `governance-decay-compaction` (HIGH, prior cluster, arXiv:2606.22528)
- Compound: compaction resolves conflict pairs asymmetrically — one rule survives, the other is dropped. Surviving rule fires unchecked. Behavior worse than if both dropped.
- Not implied by either alone: compaction alone drops rules indiscriminately; bidirectional interference alone describes co-activation failure. Combined: compaction is a mechanism that creates one-sided firing of conflict pairs.
- New mechanism: conflict resolution must precede beyond-prompt enforcement specification for long-horizon kits. ✓

**Cross-finding null results:**
- `multi-instruction-stacking-monotonic-degradation` × `omission-commission-asymmetry` (HIGH, prior): both support commission conversion; no new compound mechanism (commission conversion already applied).
- `pm-llm-compliance-drop-2-21pct` × `omission-commission-asymmetry` (HIGH, prior): both confirm NEVER-rule vulnerability; no new compound mechanism (NEVER-rule structural reinforcement already applied).
- `agentif-avg-11-9-constraints-poor-performance` × `goal-directedness-behavioral-vs-mechanistic-split` (HIGH, prior): both support per-constraint testing; no new compound mechanism beyond PCR119-A3 provisional.

---

## Step 3 — Prioritization

| Audit item | Claim keys | Confidence | Impact | Score | Decision |
|-----------|-----------|------------|--------|-------|----------|
| Conflict-pair scan in density guidance | pm-llm-bidirectional-interference-gsm8k-collapse + multi-instruction-stacking-monotonic-degradation (compound HIGH) | 3 | 3 | 9 | Apply |
| Phase 6 conflict-capable pair audit gate | Same compound | 3 | 3 | 9 | Apply |
| Compaction-asymmetric conflict note | pm-llm-bidirectional-interference-gsm8k-collapse × governance-decay-compaction (compound HIGH) | 3 | 2 | 6 | Apply |
| Phase 7 conditional for conflict resolution | Same compound | 3 | 2 | 6 | Apply |
| Constraint ordering recommendation | pm-llm-compliance-drop-2-21pct (HIGH, terminal constraint) | 3 | 2 | 6 | Apply |
| Element 9 external manifest for >5-step kits | bdi-intention-commitment-reconsideration-planning (CONSENSUS) + Group B | 1 | 3 | 3 | Defer |
| research-synthesis.md Step 3.6 up-front HIGH-group manifest | Group B principle extension | 1 | 2 | 2 | Defer |

---

## Step 3.5 — Mechanism options

**Audit Item 1+2 (conflict-pair scan + Phase 6 gate):**
- Principle: compliance collapse is driven by conflict density between co-activatable rules, not raw count. Structural resolution of conflict-capable pairs required before shipping.
- Option A: text rule in Hard Rule 13 culling guidance
- Option B: Phase 6 gate checklist item
- Option C: separate procedures/conflict-density-audit.md
- CHOSEN: Option B (Phase 6 gate) + Option A (Hard Rule 13 guidance). Reason: structural gate > advisory text; not complex enough to warrant a separate procedure file (generates maintenance burden per `kit_at_right_scope` memory note).
- Alternatives considered: Option C would be most thorough but violates lean-core principle for procedures.
- Pattern I check: recipe would be "implement Constitutional AI-style constraint consistency checking." Principle derivation: check each pair for co-activation conflict. Implementation is principle derivation. ✓

**Audit Item 3+4 (compaction compound):**
- Principle: unresolved conflict pairs in long-horizon kits face asymmetric compaction — one rule survives, fires unchecked.
- Option A: text addition to context compaction section
- Option B: Phase 7 conditional gate referencing Phase 6 audit result
- CHOSEN: Both (text note + Phase 7 conditional). Reason: text note raises awareness at generation time; Phase 7 conditional creates verification dependency chain.
- Pattern I check: recipe would be "monitor context compaction events and re-inject rules." Principle derivation: ensure conflict resolution precedes enforcement specification. ✓

**Audit Item 5 (constraint ordering):**
- Principle: terminal constraints face higher failure risk; order by failure-cost.
- Option A: recommendation text in Hard Rule 13 after Critical rule placement
- Option B: Phase 6 gate checklist item verifying ordering
- CHOSEN: Option A. Reason: ordering is a structural discipline, not a pass/fail binary; advisory text with conditional scope is appropriate for this evidence level.
- Pattern I check: recipe would be "implement strict position-based encoding with primacy effect." Principle derivation: ordering by failure-cost. ✓

---

## Step 4 — Changes applied

All changes are CONDITIONAL per critical scope rule (Group A has SCOPE annotation: "frontier models available through early-mid 2025, unstructured multi-constraint prompts").

### Change 1: ENTRYPOINT.md — Conflict-pair scan guidance in Hard Rule 13 rule density section
- File: kit-maker/ENTRYPOINT.md, between "culling priority" text and context compaction section
- Type: Type B (new text in existing section)
- Evidence-strength routing: HIGH (conditional) → structural enforcement where applicable; implemented as conditional gate requirement + guidance text
- Scope condition stated in rule wording: yes
- Pattern I check: principle derivation ✓
- Rule ID: PCR176-A1

### Change 2: ENTRYPOINT.md — Phase 6 conflict-capable pair audit gate
- File: kit-maker/ENTRYPOINT.md, Phase 6 "Gate after all files built" section
- Type: Type B (new gate item in existing section)
- Evidence-strength routing: HIGH (conditional) → structural gate item
- Scope condition stated: yes
- Pattern I check: principle derivation ✓
- Rule ID: PCR176-A2

### Change 3: ENTRYPOINT.md — Compaction-asymmetric conflict compound note in Hard Rule 13 context compaction section
- File: kit-maker/ENTRYPOINT.md, after context compaction section
- Type: Type A (text addition to existing section)
- Evidence-strength routing: HIGH×HIGH compound (mechanism derived) → advisory warning with implication
- Pattern I check: principle derivation ✓
- Rule ID: PCR176-A3 (part 1 of 2)

### Change 4: ENTRYPOINT.md — Phase 7 long-session compliance conditional
- File: kit-maker/ENTRYPOINT.md, Phase 7 long-session compliance gate item
- Type: Type A (text addition to existing item)
- Evidence-strength routing: HIGH×HIGH compound → conditional enforcement gate
- Pattern I check: principle derivation ✓
- Rule ID: PCR176-A3 (part 2 of 2)

### Change 5: ENTRYPOINT.md — Constraint ordering recommendation in Hard Rule 13
- File: kit-maker/ENTRYPOINT.md, after Critical rule placement section
- Type: Type B (new text in existing section)
- Evidence-strength routing: HIGH (conditional) → implemented as recommendation (scope condition limits to "conditional")
- Pattern I check: principle derivation ✓
- Rule ID: PCR176-A4

### Step 5 fix (independent re-review): Composite rule clarification in constraint ordering recommendation
- P1 item found: ordering recommendation said "NEVER rules second" but behavioral contracts often have composite elements with both commission and prohibition forms
- Fix: added one sentence "For composite elements containing both commission and prohibition forms: place by dominant form"
- File: kit-maker/ENTRYPOINT.md, constraint ordering recommendation

---

## Deferred items

| Claim key | Reason |
|-----------|--------|
| bdi-intention-commitment-reconsideration-planning (CONSENSUS) + seqBench/MAST/SagaLLM (MEDIUM) — external completion manifest for generated kits with >5 sequential steps or >15-turn sessions | CONSENSUS evidence: score = 1 × 3 = 3 < 4. Add to design_log.md Discovered Work. Note: this was identified as an action in synthesis Step 3 confidence map but not applied in synthesis Step 6 — oversight to surface. |
| Group B principle extension — research-synthesis.md Step 3.6 should have up-front external list of HIGH groups before starting counter-prior iterations | Principle extension, CONSENSUS tier: score < 4. Add to design_log.md Discovered Work if relevant to ongoing synthesis work. |

---

## CONTESTED groups

None. Synthesis confirmed no CONTESTED contradictions. No claims flagged as contested in this PCR.

---

## Cross-finding compounds found (Sub-step 2.3)

1. `multi-instruction-stacking-monotonic-degradation` × `pm-llm-bidirectional-interference-gsm8k-collapse`: conflict-capable pairs cause compliance collapse even at low count — neither claim alone implies this; compound mechanism applied as PCR176-A1 + A2.

2. `pm-llm-bidirectional-interference-gsm8k-collapse` × `governance-decay-compaction` (prior cluster): asymmetric compaction failure for unresolved conflict pairs — compound mechanism applied as PCR176-A3.

---

## Rule-outcome-register writes

All four rules written to kit-maker/state/rule-outcome-register.md:
- PCR176-A1: Conflict-pair scan in Hard Rule 13 guidance
- PCR176-A2: Phase 6 conflict-capable pair audit gate
- PCR176-A3: Compaction-asymmetric conflict note + Phase 7 conditional
- PCR176-A4: Constraint ordering recommendation

---

## Grounding-map update

Updated kit-maker/grounding-map.md last-updated timestamp with PCR-angle-176 entries. Row 13 (density constraint) status unchanged: ✅ VALIDATED — synthesis changes were applied 2026-07-02; PCR-176 adds mechanism refinements not tier changes.

---

## Step 5 — Independent re-review

Step 5 requires fresh subagent dispatch. This PCR ran as a single subagent; a full structural dispatch was not available. Step 5 pass conducted inline by explicitly reviewing the changes without referencing the PCR reasoning.

**P1 item found:** Constraint ordering recommendation (PCR176-A4) said "NEVER/prohibition rules second" but behavioral contracts commonly have composite elements containing both commission and prohibition forms within a single element. The ordering criterion was ambiguous for composite elements.

**Fix applied:** Added clarification "For composite elements containing both commission and prohibition forms: place by dominant form — what is the element primarily requiring?" to the constraint ordering recommendation.

**Step 5 result:** One P1 item found and applied. No P0 items.

---

## Null result declaration

NOT applicable — improvements found. Cross-match found 3 mechanism gaps (conflict-pair detection, constraint ordering, compaction-conflict compound) from HIGH×HIGH findings and 2 from HIGH principles, all applied. 2 items deferred (score < 4).
