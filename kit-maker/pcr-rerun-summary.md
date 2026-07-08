# PCR Re-Run Summary

**Run date:** 2026-07-05
**Procedure version:** 2026-07-03
**Step 5 null result:** No

---

## Summary Table

| Cluster | Audits | Applied | Deferred | Null | Contested |
|---|---|---|---|---|---|
| angle-119 | 10 | 4 | 4 | No | 0 |
| USER-01-02 | 7 | 3 | 3 | No | 0 |
| angle-176 | 7 | 4 | 2 | No | 0 |
| USER-03-04 | 7 | 3 | 4 | No | 0 |
| angles-22-24 | 7 | 7 | 6 | No | 0 |
| research-quality | 10 | 5 | 8 | No | 0 |
| meta-research | 5 | 2 | 2 | No | 1 |
| **TOTAL** | **53** | **28** | **29** | — | **1** |

---

## Cluster: angle-119

**Checkpoint:** `kit-maker/pcr-checkpoint-angle-119.md`
**Audits:** 10 | **Applied:** 4 | **Deferred:** 4 | **Contested:** 0

### Changes Applied

**1. `kit-maker/CLAUDE.md`**
- **Claim:** `goal-directedness-behavioral-vs-mechanistic-split`
- **Tier:** HIGH (SCOPE, CONDITIONAL)
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Option A — text edit to subagent prompt item 4 (minimal targeted change; structural alternatives B/C not warranted given CONDITIONAL scope)
- **Summary:** Added observable artifact evidence standard to A1 subagent prompt: auditor directed to check plan.md entry, Section 6.5 file list, and TASK_TEMPLATE section content rather than accepting agent narrative as evidence of compliance. Explicit prohibition on treating self-report as compliance evidence.

**2. `kit-maker/TASK_TEMPLATE.md`**
- **Claim:** `inherited-drift-trajectory-contamination + non-deterministic-drift-temperature-zero`
- **Tier:** MEDIUM (PROVISIONAL — positive prescription not directly validated)
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Option A — integrate into existing Section 5.1 check sequence as provisional item. Avoids new tracking infrastructure (Option B); more visible than Section 5.4 alone (Option C).
- **Summary:** Added provisional item 4 to Section 5.1 Mid-work coherence check: for long-horizon tasks (15+ steps), re-read goal model from Section 1.1 Step 1 and classify any directional shift as valid plan mutation or drift to correct. Marked PROVISIONAL with flip trigger.

**3. `kit-maker/ENTRYPOINT.md`** (Phase 7 adversarial test)
- **Claim:** `proactive-agent-f1-baseline + goal-directedness-behavioral-vs-mechanistic-split` (compound HIGH×HIGH)
- **Tier:** MEDIUM (PROVISIONAL compound — both HIGH claims have scope caveats)
- **Conflict type:** mechanism-gap (compound)
- **Mechanism chosen:** Option A — text addition inside existing per-constraint validation item. Avoids hardening to gate (Option C) before validation.
- **Summary:** Added provisional structural mechanism test to Phase 7 per-constraint validation: at least one test per structural mechanism must be adversarially constructed so surface-compliant output is achievable without the structural trigger firing, distinguishing mechanism enforcement from surface shaping. Marked PROVISIONAL with flip trigger.

**4. `kit-maker/ENTRYPOINT.md`** (Hard Rule 13 self-check)
- **Claim:** `proactive-agent-f1-baseline` (angle-119, HIGH SCOPE) + `omission-commission-asymmetry` (prior cluster, HIGH) — compound
- **Tier:** HIGH (compound, CONDITIONAL — commission-form self-check is outside scope caveat of proactive-agent claim)
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Option A — extend existing self-check list (zero rule-count cost). Rule density constraint favors this over adding new element (Options B/C).
- **Summary:** Extended Hard Rule 13 behavioral contract decay warning element (b) self-check from one question to two: added "did I surface all visible problems, gaps, or inconsistencies in the current output?" alongside the existing "did I name the next obstacle?" Element 4 proactive surfacing is recognition-required; combined with NEVER-form decay (73→33% by turn 16), the rule faces double degradation. Commission-form self-check at response end converts it to a structural trigger.

### Changes Deferred

| Claim | Reason |
|---|---|
| `instruction-file-design` three-file separation derivation | Essence captured in synthesis Update 2. Specific file-count recommendation is medium-confidence derivation without direct empirical backing. |
| `anti-decay-wording-patterns` named-violation index derivation | Essence captured in synthesis Update 1. Index as separate section is incremental; CONSENSUS evidence tier; no clear gap given Update 1 already applied. |
| `procedural-memory-as-system-prompt` — TASK_TEMPLATE Section 0 goal-model pre-check | Section 1.1 Step 1 already requires copying goal model from design_log.md as structural gate. No gap at Section 0. |
| `advisor-delegate-outcome-paradox + proactive-agent-f1-baseline` — commission-form structural triggers (Compound 3) | Existing critical rules in ENTRYPOINT Hard Rule 13 already in commission form. NEVER-rule structural reinforcement section already covers commission-form conversion. No gap found. |

### Compounds Found

- **PCR119-A3:** `proactive-agent-f1-baseline` (HIGH) × `goal-directedness-behavioral-vs-mechanistic-split` (HIGH): Phase 7 behavioral tests must distinguish structural trigger compliance from surface compliance — adversarially constructed test cases required. Applied.
- **PCR119-A4:** `proactive-agent-f1-baseline` (HIGH) × `omission-commission-asymmetry` (HIGH, prior cluster arXiv:2604.20911): element 4 proactive surfacing is recognition-required (compound with NEVER-form decay) — double degradation risk; commission-form structural self-check at response end required. Applied.
- **NULL:** `advisor-delegate-outcome-paradox` × `proactive-agent-f1-baseline`: structural triggers should be in commission form — checked, already the practice.

---

## Cluster: USER-01-02

**Checkpoint:** `kit-maker/pcr-checkpoint-USER-01-02.md`
**Audits:** 7 | **Applied:** 3 | **Deferred:** 3 | **Contested:** 0

### Changes Applied

**1. `kit-maker/ENTRYPOINT.md` (element 8 security caveat) + `kit-maker/CLAUDE.md` (element 8 summary)**
- **Claim:** `aspi-clarification-security-risk` (HIGH narrow, arXiv:2605.17324) + compound `clarification-timing-type-dependent` (HIGH, arXiv:2605.07937)
- **Tier:** HIGH (narrow) for core; CONSENSUS ONLY for extension to non-clarification patterns
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Type A text edit (inline). Rejected: (B) separate security section (density cost); (C) external file (indirection). Pattern I: principle derivation, not recipe.
- **Summary:** Security caveat mechanism broadened from "clarification-seeking" (symptom) to "any engagement-deepening mechanism with external content" (underlying mechanism); scope condition added; wording changed from "before any tool execution begins" to "before any external content is read or processed" to close context-window-delivered-content loophole. Non-clarification extension labeled CONSENSUS ONLY. CLAUDE.md element 8 summary synced.

**2. `kit-maker/ENTRYPOINT.md` (element 8, execution-time monitoring note)**
- **Claim:** `underspecification-three-classes` (CONSENSUS, arXiv:2602.10525) + `unknown-unknowns-upfront-limit` (CONSENSUS, arXiv:2602.15259)
- **Tier:** CONSENSUS ONLY
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Type A text edit (inline after existing sentence). Rejected: (B) new separate element (element count); (C) cross-reference only (too sparse). Pattern I: principle derivation.
- **Summary:** Mid-execution three-class routing added after "pair with execution-time monitoring for requirements that emerge during task." New guidance: outcome-critical discoveries → interrupt and ask; divergent discoveries → surface at next natural pause point; benign-class discoveries → infer and continue. Labeled CONSENSUS ONLY.

**3. `kit-maker/ENTRYPOINT.md` (element 5) + `kit-maker/CLAUDE.md` (element 5 summary)**
- **Claim:** `implicit-intelligence-unstated-constraints` (CONSENSUS ONLY, arXiv:2602.20424, Group E)
- **Tier:** CONSENSUS ONLY
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Type A text edit (inline extension to element 5 requirement). Rejected: (B) TASK_TEMPLATE gate (wrong scope); (C) new separate element (element count). Pattern I: principle derivation.
- **Summary:** Element 5 now requires both observable trigger conditions and observable violation conditions. Previous text required only violation conditions. Added: "Rules with implicit trigger conditions are applied inconsistently across runs." Labeled CONSENSUS ONLY. CLAUDE.md element 5 summary synced to include trigger condition language.

### Changes Deferred

| Claim | Reason |
|---|---|
| `clarification-timing-type-dependent` — phase gate positioning | Score = 3 × 1 = 3, below threshold of 4. Narrow impact (ENTRYPOINT phase gate description only). Deferred to design_log.md discovered work. |
| `execution-gating-structural` — counter-flow rule stratification | Score = 2 × 1 = 2, below threshold. Principle already implemented in practice, not as stated classification principle. Low impact as meta-principle. |
| `clarification-timing-type-dependent` × `constraint-count-compliance-exponential-decay` — complex intake as external-file candidate | Score = MEDIUM × 1 = 2. Element 8 is in ENTRYPOINT.md (kit design spec), not generated kit behavioral contracts directly. Density constraint applies to rule count in generated contracts, not spec length. |

### Compounds Found

- **APPLIED:** `clarification-timing-type-dependent` (HIGH, Group A) × `aspi-clarification-security-risk` (HIGH, Group F) → clarify-before-external-read: goal-class clarification must happen before any external content is read or processed. Neither finding alone specifies "external content access" as boundary point vs. "tool execution."
- **DEFERRED (score 2):** `clarification-timing-type-dependent` × `constraint-count-compliance-exponential-decay` → complex intake protocols as candidates for external-file loading in long-horizon kits.
- **NULL:** `aspi-clarification-security-risk` × `governance-decay-compaction` → already covered by element 14 general beyond-prompt enforcement requirement for all critical rules.

---

## Cluster: angle-176

**Checkpoint:** `kit-maker/pcr-checkpoint-angle-176.md`
**Audits:** 7 | **Applied:** 4 | **Deferred:** 2 | **Contested:** 0

### Changes Applied

**1. `kit-maker/ENTRYPOINT.md`** (PCR176-A1 — conflict-pair scan)
- **Claim:** `pm-llm-bidirectional-interference-gsm8k-collapse` (HIGH, arXiv:2603.23530) + `multi-instruction-stacking-monotonic-degradation` (HIGH, arXiv:2509.21051) — compound
- **Tier:** HIGH (conditional — scope: frontier models, potentially conflicting behavioral constraints)
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Option A (text rule) chosen; Option B (Phase 6 gate only) also applied together; Option C (separate procedure file) rejected per lean-core principle. Pattern I: principle derivation confirmed.
- **Summary:** Added "Conflict-pair scan" section to Hard Rule 13 between culling priority and context compaction section. For each pair of rules, check whether a realistic input could require both to activate simultaneously in conflicting ways. Conflict-capable pairs are the highest-priority culling targets. Evidence: bidirectional interference causes 93%→27% compliance collapse even at low rule count.

**2. `kit-maker/ENTRYPOINT.md`** (PCR176-A2 — Phase 6 conflict-capable pair audit gate)
- **Claim:** `pm-llm-bidirectional-interference-gsm8k-collapse` + `multi-instruction-stacking-monotonic-degradation` — compound
- **Tier:** HIGH (conditional — scope: frontier models, behavioral contracts with 4+ rules and overlapping trigger conditions)
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Option B (structural gate) chosen over Option A (text-only) for higher enforcement value; Option C (separate procedure) rejected as over-engineered. Pattern I confirmed.
- **Summary:** Added "Conflict-capable pair audit" gate item to Phase 6 "Gate after all files built" section. Requires: all rule pairs verified for co-activation conflicts; conflict-capable pairs resolved structurally (merged, precedence added, or scope-separated); null result documented explicitly.

**3. `kit-maker/ENTRYPOINT.md`** (PCR176-A3 — compaction-asymmetric conflict failure)
- **Claim:** `pm-llm-bidirectional-interference-gsm8k-collapse` (arXiv:2603.23530) × `governance-decay-compaction` (HIGH, arXiv:2606.22528, prior cluster) — cross-cluster compound
- **Tier:** HIGH×HIGH compound (mechanism derived — neither paper tested the specific compound)
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Two-part change: (a) text addition to context compaction section naming the asymmetric compaction failure mode; (b) conditional addition to Phase 7 long-session compliance gate. Pattern I confirmed.
- **Summary:** Added "Compaction-asymmetric conflict failure" note to Hard Rule 13 context compaction section: unresolved conflict-capable rule pairs face specific long-horizon failure where compaction drops one rule asymmetrically, leaving surviving rule to fire unchecked — result worse than if both dropped. Conflict resolution must precede beyond-prompt enforcement specification. Phase 7 long-session gate now requires verification of structural resolution if Phase 6 conflict-pair audit found conflict-capable pairs.

**4. `kit-maker/ENTRYPOINT.md`** (PCR176-A4 — constraint ordering recommendation)
- **Claim:** `pm-llm-compliance-drop-2-21pct` (HIGH, arXiv:2603.23530) — terminal constraint failure rate; synthesis Step 3.7 derivation
- **Tier:** HIGH (conditional — scope: frontier models, multi-constraint behavioral contracts with 5+ rules)
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Option A (recommendation text) chosen over Option B (Phase 6 gate) because ordering is structural discipline rather than pass/fail binary. Step 5 P1 fix applied: composite rule clarification. Pattern I confirmed.
- **Summary:** Added "Constraint ordering recommendation" to Hard Rule 13 after Critical rule placement. Prescribes ordering by failure-cost: (1) gold standard + delegation model first, (2) NEVER/prohibition rules second, (3) commission rules in middle, (4) operational procedures last. Clarification added for composite elements (place by dominant form). Step 5 independent re-review found P1 item (composite rule ambiguity) and applied fix inline.

### Changes Deferred

| Claim | Reason |
|---|---|
| `bdi-intention-commitment-reconsideration-planning` + `seqbench-recall-precision-divergence-path-length` + `mast-14-failure-modes-task-verification-11pct` + `sagallm-saga-pattern-partial-completion-rollback` | CONSENSUS evidence tier: score = 1 × 3 = 3 < 4 apply threshold. External completion manifest recommendation not applied in synthesis Step 6. Deferred to design_log.md Discovered Work. Note: this was a missed synthesis application, not a PCR discovery. |
| `omission-completion-state` principle extension — research-synthesis.md Step 3.6 | CONSENSUS tier (principle extension, no direct empirical claim): score < 4. Deferred to design_log.md Discovered Work. |

### Compounds Found

- **Applied (PCR176-A1 + PCR176-A2):** `multi-instruction-stacking-monotonic-degradation` × `pm-llm-bidirectional-interference-gsm8k-collapse`: even a kit with few rules faces compliance collapse if two rules can co-activate conflictingly on the same input; conflict-capable pairs are the true risk surface, not count — neither claim alone implies this compound mechanism.
- **Applied (PCR176-A3):** `pm-llm-bidirectional-interference-gsm8k-collapse` × `governance-decay-compaction`: compaction resolves conflict pairs asymmetrically — one rule dropped, surviving rule fires without counterpart, producing behavior worse than if both dropped.

---

## Cluster: USER-03-04

**Checkpoint:** `kit-maker/pcr-checkpoint-USER-03-04.md`
**Audits:** 7 | **Applied:** 3 | **Deferred:** 4 | **Contested:** 0

### Changes Applied

**1. `kit-maker/ENTRYPOINT.md`** (Hard Rule 13 element 7 — commitment-point enumeration)
- **Claim:** `adaptive-confirmation-reduces-error-and-time`
- **Tier:** MEDIUM provisional
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Text addition (Type B) to existing section; PROVISIONAL label with flip trigger included.
- **Summary:** Added domain-specific commitment-point enumeration requirement to Hard Rule 13 element 7, after the second-time self-check, before sycophancy guard. Kit designers must enumerate irreversible action types at kit-creation time rather than leaving classification to agent runtime judgment.

**2. `kit-maker/ENTRYPOINT.md`** (Hard Rule 13 element 7 — logged-basis requirement)
- **Claim:** `user-pushback-reverses-correct-ai-position`
- **Tier:** CONSENSUS ONLY
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Text addition (Type A) within existing sycophancy guard block; labeled CONSENSUS ONLY.
- **Summary:** Added logged-basis requirement to sycophancy guard block. When issuing any flag, capture the specific concern in one sentence; the sycophancy guard compares against this logged basis, not reconstructed memory.

**3. `kit-maker/ENTRYPOINT.md`** (Hard Rule 13 element 7 — frozen element designation)
- **Claim:** `disempowerment-higher-approval-paradox`
- **Tier:** HIGH conditional
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Text addition (Type A) as conditional kit designer note; SCOPE condition explicitly stated in wording.
- **Summary:** Added frozen element designation note (CONDITIONAL) to kit designer notes in Hard Rule 13 element 7. Specifies that when a behavioral contract undergoes iterative user revision, designers must explicitly designate which elements are frozen (correction behavior, sycophancy guard, NEVER-repeat-flag) vs. modifiable (domain procedures, next-step patterns).

### Changes Deferred

| Claim | Reason |
|---|---|
| `clinical-alert-override-rate` (AI-4, tier-structure derivation) | Overlaps with existing density/culling guidance. Adding explicit tiering requirement would increase ENTRYPOINT density without clear incremental benefit. Queued as design_log discovered work. |
| `user-pushback-reverses-correct-ai-position` (AI-5, role-conditional hold-then-comply) | Limited scope (enforcement-role kits only); CONSENSUS evidence tier plus medium derivation confidence; "never self-authorize workarounds" already partially addresses escalation path. Queued for domain-conditional checklist review in future PCR. |
| `user-pushback-reverses-correct-ai-position` (AI-6, pre-emptive sycophancy gate) | Medium derivation confidence; cognitive overhead for every flag issuance would increase behavioral noise; no tested intervention form available. Deferred pending empirical evidence of a specific pre-emptive check mechanism. |
| `robot-assertiveness-compliance-rates + expert-disagreement-expertise-signal` (AI-7, rationale-embedding) | Partially overlaps with element 5 (trigger + violation conditions) and element 10 (worked examples). Adding rationale-embedding as separate requirement would increase generated kit behavioral contract density without clear differentiation from existing requirements. |

### Compounds Found

- **C1:** `disempowerment-higher-approval-paradox` × `omission-commission-asymmetry` — sycophancy guard already in commission form; no new action.
- **C2:** `disempowerment-higher-approval-paradox` × `goal-directedness-behavioral-vs-mechanistic-split` — already addressed by PCR119-A3 structural mechanism test.
- **C3:** `disempowerment-higher-approval-paradox` × `governance-decay-compaction` — already addressed by general context compaction guidance in Hard Rule 13.

---

## Cluster: angles-22-24

**Checkpoint:** `kit-maker/pcr-checkpoint-angles-22-24.md`
**Audits:** 7 | **Applied:** 7 | **Deferred:** 6 | **Contested:** 0

### Changes Applied

**1. `ENTRYPOINT.md`** (Phase 6 gate — rule-interaction audit)
- **Claim:** `constraint-type-specificity`
- **Tier:** HIGH
- **Conflict type:** gap
- **Mechanism chosen:** New gate checkbox in Phase 6 after conflict-capable pair audit.
- **Summary:** Phase 6 gate: new checkbox — rule-interaction audit for semantic/behavioral constraints (CONDITIONAL, applies when 2+ semantic/behavioral rules in behavioral contract; characterize co-activation as synergistic/conflicting/independent; conflicting pairs route to structural resolution).

**2. `ENTRYPOINT.md`** (Hard Rule 13 element 10 — sequential depth mechanism)
- **Claim:** `agentic-workflow-small-model-collapse`
- **Tier:** HIGH
- **Conflict type:** gap
- **Mechanism chosen:** Text insert in element 10 after "If uncertain: declare frontier."
- **Summary:** Hard Rule 13 element 10: sequential depth mechanism added — tier determined by sequential step count (≤2→small, 3–4→mid, 5+→frontier) when no empirical data available; CONDITIONAL override for uncertainty cases.

**3. `ENTRYPOINT.md`** (domain-conditional checklist — small/mid-tier re-anchoring)
- **Claim:** `agentic-workflow-small-model-collapse`
- **Tier:** HIGH
- **Conflict type:** gap
- **Mechanism chosen:** New table row in domain-conditional checklist.
- **Summary:** Domain-conditional checklist: new row — kits targeting small/mid-tier models with 4+ sequential step chains must include mandatory re-anchoring checkpoint every 3–4 steps; note added clarifying this is compensating control, not substitute for correct tier selection.

**4. `ENTRYPOINT.md`** (Phase 7 — prohibition-commission compound note)
- **Claim:** `sequential-instruction-universal-failure` × `omission-commission-asymmetry`
- **Tier:** HIGH
- **Conflict type:** compound
- **Mechanism chosen:** New CONDITIONAL note after structural mechanism test flip trigger in Phase 7 gate.
- **Summary:** Phase 7 per-constraint validation: prohibition-commission compound note — kits with both NEVER and commission rules targeting sessions >10 turns must include test at turns 10+ checking commission rules after NEVER rules have had opportunity to decay.

**5. `ENTRYPOINT.md`** (Phase 6 per-file loop step 4 — last-position reinforcement check)
- **Claim:** `code-robustness-first-line-omission`
- **Tier:** MEDIUM
- **Conflict type:** gap
- **Mechanism chosen:** PROVISIONAL note after classification-anchor check in step 4.
- **Summary:** Phase 6 per-file loop step 4: last-position reinforcement check (PROVISIONAL) — correctness-critical closing steps must have explicit structural reinforcement (required-field marker, gate label, agent-verifiable completion signal).

**6. `ENTRYPOINT.md`** (Phase 7 — paraphrase-variant stability test)
- **Claim:** `prompt-sensitivity-semantic-invariance`
- **Tier:** MEDIUM
- **Conflict type:** gap
- **Mechanism chosen:** PROVISIONAL note after prohibition-commission compound in Phase 7 per-constraint validation.
- **Summary:** Phase 7 per-constraint validation: paraphrase-variant stability test (PROVISIONAL) — kits with varied natural-language input must include paraphrase variants of key test scenarios; one variant per rule where production input phrasing varies.

**7. `ENTRYPOINT.md`** (Phase 6 per-file loop step 3 — rule wording behavioral decision note)
- **Claim:** `adversarial-perturbation-minimal-change`
- **Tier:** MEDIUM
- **Conflict type:** gap
- **Mechanism chosen:** PROVISIONAL note after decision-surfacing in Phase 6 step 3.
- **Summary:** Phase 6 per-file loop step 3: rule wording behavioral decision note (PROVISIONAL) — semantically equivalent rule phrasings are not behaviorally equivalent; wording selection is structural decision requiring Phase 7 validation; at least one wording alternative required in alternatives review per behavioral rule.

### Changes Deferred

| Claim | Reason |
|---|---|
| `model-reliability-gaps` | CONSENSUS tier — score <4. Deferred to design_log.md discovered work: reliability-floor calibration, long-chain verification gates, self-assessment vs structural gates. |
| `llm-evaluation-validity` | CONSENSUS tier — score <4. Deferred: structural criterion in auditor, auditor brief from artifacts. |
| `production-drift-monitoring` | CONSENSUS tier — score <4. Deferred: propagation authority assignment, fallback path specifications. |
| `rule-testability-design` | CONSENSUS tier — score <4. Deferred: dependency scan, agent-vs-user-checkable conditions, revision trigger per rule. |
| `misc-behavioral-assumption-encoding` | CONSENSUS tier — score <4. Deferred: behavioral assumption encoding, additive vs suppression classification, external context specification. |
| `decoding-strategy-latent-awareness` | MEDIUM tier — no distinct gap found in ENTRYPOINT.md after cross-match; not producing a new audit item beyond what trajectory-assertion-over-output-assertion already covers via PCR119-A3. |

### Compounds Found

- `sequential-instruction-universal-failure` × `omission-commission-asymmetry` — applied as prohibition-commission compound note in Phase 7 (Change 4).

---

## Cluster: research-quality

**Checkpoint:** `kit-maker/pcr-checkpoint-research-quality.md`
**Audits:** 10 | **Applied:** 5 | **Deferred:** 8 | **Contested:** 0

### Changes Applied

**1. `kit-maker/procedures/research-quality.md`** (falsification field)
- **Claim:** `causal-theory-error-base-rate + surface-learning-mimicry-failure-mode + mechanism-vs-correlation-depth-signal`
- **Tier:** MEDIUM
- **Conflict type:** gap-fill
- **Mechanism chosen:** New field in existing claim format block.
- **Summary:** Added `falsification:` field to empirical claim format block. Requires one observable condition that would falsify the mechanism described. Includes PROVISIONAL tag with claim keys, scope note, and flip trigger (P2 angle on falsification-as-depth-discriminator may revise).

**2. `kit-maker/procedures/research-quality.md`** (Dimension 2b — falsification condition validity)
- **Claim:** `causal-theory-error-base-rate` (Step 5 P1 discovery — verify pass gap)
- **Tier:** MEDIUM
- **Conflict type:** gap-fill (Step 5 secondary — unaudited field created by AI-1)
- **Mechanism chosen:** New verify pass dimension targeting falsification field quality.
- **Summary:** Added Dimension 2b (Falsification condition validity) to verify pass, between existing Dimension 2 and Dimension 3. Checks that falsification conditions are observable, non-trivial, and mechanism-matching. PROVISIONAL. Applied during Step 5 re-review.

**3. `kit-maker/ENTRYPOINT.md`** (Phase 7 — test distributional independence)
- **Claim:** `automated-grade-domain-accuracy-cliff` × `convergence-blocks-vs-tempers`
- **Tier:** Compound HIGH×HIGH (CONDITIONAL — pre-2024 NLP tools scope × causal-inference contexts scope)
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Conditional checkbox in Phase 7 gate (proportionate to conditional scope).
- **Summary:** Added "Test distributional independence" (CONDITIONAL) checkbox to Phase 7 per-constraint validation area. Applies when scenario-based testing is used; requires test cases from at least 2 structurally distinct distributional regimes so convergence is not purely same-source.

**4. `kit-maker/ENTRYPOINT.md`** (Phase 7 — specialist detection note)
- **Claim:** `peer-review-statistical-expert-biggest-gain` × `omission-commission-asymmetry`
- **Tier:** Compound HIGH×HIGH (CONDITIONAL — quantitative empirical research scope)
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Text addition to existing paragraph (least invasive; builds on existing structure).
- **Summary:** Added "Specialist detection" note (CONDITIONAL) to existing prohibition-commission interaction paragraph in Phase 7. When dispatching the Correctness Auditor for long-session kits with NEVER rules, specialize the auditor prompt for NEVER-rule decay detection as the highest-ROI failure class.

**5. `kit-maker/state/rule-outcome-register.md`** (flip trigger sensitivity check)
- **Claim:** `nhst-null-power-error-rate + null-taxonomy-nibs-prior-expectations`
- **Tier:** MEDIUM
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Header-level guidance note (proportionate to MEDIUM evidence; avoids retrofitting all existing entries).
- **Summary:** Added "Flip trigger sensitivity check" (PROVISIONAL) guidance block to rule-outcome-register format header. Instructs writers: before acting on a flip trigger that fired on N=5 absent-evidence, confirm the 5 trials were sensitive enough to detect the mechanism's effect.

### Changes Deferred

| Claim | Reason |
|---|---|
| AI-2 `red-team-late-timing-resistance` → adversarial timing threshold in synthesis Step 3.6 | Score 2 — below threshold. Subagent isolation in synthesis Step 3.6 already partially addresses context-distance principle. |
| AI-4 `adversarial-review-dynamics` commitment event co-specification → Phase 5 adversarial gate | Score 2 — below threshold. Phase 5 Strongest-unsupported-assumption check provides partial coverage. Full gate not warranted at MEDIUM evidence. |
| AI-6 `automated-grade-domain-accuracy-cliff` → A1 auditor field-presence vs coherence routing | Score 2 — below threshold. A1 auditor checklist already implements pattern-matching approach for field-presence checks. |
| COMPOUND-3: `red-team-late-timing-resistance` × `governance-decay-compaction` | Narrow conditional scope; too specialized for a general kit rule. Existing compaction-asymmetric conflict compound note partially addresses. Deferred pending a kit that uses long-horizon with adversarial gates. |
| COMPOUND-4: `pub-bias-non-submission-primary` × `hypothesis-inverted-ground-truth-15pct` | Null — compound already addressed. Q3b adversarial subagent in research-synthesis.md implements counterintuitive-null surfacing. |
| `alternatives-generation` prior-alignment filter | Score 2. Existing procedure already requires alternatives that rest on DIFFERENT underlying assumptions. Prior-alignment filter would be redundant with current Step 2 requirement. |
| `search-strategy-completeness` invisible omissions cluster check | Score 1 — consensus evidence only. Saturation definition Conditions 2+3 already implement the invisible-omissions detection principle. |
| Publication-bias pre-output suppression → evaluation criteria pre-commitment | Already addressed. TASK_TEMPLATE Section 1.1 done-criteria and research-synthesis.md procedure structure implement the pre-commitment principle. |

### Compounds Found

- **Applied:** `automated-grade-domain-accuracy-cliff` × `convergence-blocks-vs-tempers` → Phase 7 test distributional independence (CONDITIONAL).
- **Applied:** `peer-review-statistical-expert-biggest-gain` × `omission-commission-asymmetry` → Phase 7 NEVER-rule specialist detection (CONDITIONAL).

---

## Cluster: meta-research

**Checkpoint:** `kit-maker/pcr-checkpoint-meta-research.md`
**Audits:** 5 | **Applied:** 2 | **Deferred:** 2 | **Contested:** 1

### Changes Applied

**1. `kit-maker/ENTRYPOINT.md`** (PCR-MR-A1 — adversarial plan review gate)
- **Claim:** `red-team-late-timing-resistance + red-team-internal-familiarity-blindspot`
- **Tier:** HIGH
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Option B — opening requirement of Phase 6 BUILD section, before Phase 6 subagent dispatch. Rejected: Option A checkbox in Phase 5 gate (too weak); Option C new Phase 5.5 (adds phase overhead).
- **Summary:** Added adversarial plan review gate block to Phase 6 BUILD section. Before dispatching Phase 6 build subagent: dispatch adversarial subagent on PLAN.md only (no design rationale, no synthesis, no research archive). Reviewer identifies: (1) weakest assumption; (2) highest-risk architectural decision; (3) one use case kit will fail at. Returns BLOCKING CONCERN (requires plan revision) or NO BLOCKING CONCERN (proceed; log risks). Blocking concern halts Phase 6 dispatch. Scope condition: applies when reviewer is not externally structurally independent of the plan. Rule PCR-MR-A1 written to rule-outcome-register.md.

**2. `kit-maker/ENTRYPOINT.md`** (PCR-MR-A2 — multi-pass independence declaration)
- **Claim:** `cascade-peer-review-62pct-time-reduction + resubmission-reopt-out-severe-quality-decline`
- **Tier:** HIGH (conditional — SCOPE: kit has multi-pass review procedures)
- **Conflict type:** mechanism-gap
- **Mechanism chosen:** Option C — new domain-conditional checklist row in Hard Rule 13. Rejected: Option A text edit to existing element (unclear placement, increases density); Option B new Hard Rule 13 element 13 (violates density constraint HIGH validated).
- **Summary:** Added new row to Hard Rule 13 domain-conditional procedure checklist for kits with multi-pass review procedures (iterative auditor rounds, peer-check loops, or any procedure where an evaluation pass is repeated on the same output or a revision of it). Required: independence declaration for each pass — independence-required (clean-slate, enforce by excluding prior-pass output) or continuation-acceptable (builds on prior, justify why independence not needed). Default when unspecified: independence-required. Basis: cascade-peer-review-62pct-time-reduction (HIGH, N=25,000) + resubmission-reopt-out-severe-quality-decline (HIGH, 28% quality decline). Rule PCR-MR-A2 written to rule-outcome-register.md.

### Changes Deferred

| Claim | Reason |
|---|---|
| `berrypicking-evolving-query` (HIGH) — LLM rule-recall authoring guidance | Score 6 (>4 apply threshold) but directly conflicts with density constraint (constraint-count-compliance-exponential-decay, HIGH validated). Two HIGH findings in tension: recall-biased rule authoring increases token count, which density constraint penalizes. Requires design session to determine whether retrieval benefit outweighs density cost. Deferred to design_log.md Discovered Work. |
| `peer-review-inter-reviewer-agreement` (HIGH, r=0.34) — Phase 7 binary-observable audit criteria decomposition | Score 4 (borderline apply threshold). Two sources of uncertainty: (1) derivation is Sub-step C (medium confidence); (2) verify_prompt.md was not read in this PCR run and may already address criterion decomposition. Deferred pending verify_prompt.md review. If verify_prompt.md does not address this, recalculate score and apply at next PCR opportunity. |

### Contested Findings

**`alternatives-generation`** (`hypothesis-inverted-ground-truth-15pct`) — CONTESTED per synthesis Step 3.6 fresh-pass adversarial review:
1. Model set excluded flagship frontier models GPT-4o / Claude Sonnet-Opus / Gemini Pro / o1-o3.
2. <15% HDR applies only at conjunction of counterintuitive + high compositional complexity, not unconditionally.
3. "Regardless of adversarial instruction" unsubstantiated — no variation in instruction format was tested.

**Secondary flag:** Counter-prior pass rule in research-synthesis.md Step 3.6 (applied Cluster B PCR 2026-07-01) rests on this now-CONTESTED finding. Rule is not recommended for removal (structural argument has multi-source CONSENSUS support) but evidence basis should be updated to reference structural argument rather than specific HDR quantification.

### Compounds Found

- **NULL:** `berrypicking-evolving-query` × `red-team-internal-familiarity-blindspot`: both require external injection; no specific kit rule gap beyond adversarial gate already applied.
- **Supports PCR-MR-A1:** `peer-review-inter-reviewer-agreement` × `red-team-late-timing-resistance`: timing × reliability compound confirms pre-Phase-6 adversarial gate is the structural fix.
- **LOW priority note:** `cascade-peer-review-62pct-time-reduction` × `peer-review-statistical-expert-biggest-gain`: second pass should target borderline outputs AND use specialist framing; PCR-RQ-A3 already applied specialist detection for NEVER rules; full cascade targeting principle not yet a design principle in Phase 7.
- **LOW priority note:** `cascade-peer-review-62pct-time-reduction` × `governance-decay-compaction`: review artifact reuse in long-horizon sessions may lose artifacts during compaction; Hard Rule 13 already requires beyond-prompt enforcement for long-horizon kits.

---

## Open Items

- **Contested finding follow-up:** `alternatives-generation` (`hypothesis-inverted-ground-truth-15pct`) — update evidence basis in research-synthesis.md Step 3.6 counter-prior pass rule from specific HDR quantification to structural argument with multi-source CONSENSUS support.
- **Deferred (borderline, pending file review):** `peer-review-inter-reviewer-agreement` (meta-research) — review verify_prompt.md; if criterion decomposition not addressed, recalculate score and apply.
- **Deferred (design conflict requiring design session):** `berrypicking-evolving-query` — recall-biased authoring vs. density constraint; needs deliberate resolution before applying.
- **Missed synthesis application:** `bdi-intention-commitment-reconsideration-planning` + long-chain state claims (angle-176) — external completion manifest recommendation not applied in synthesis Step 6; log to design_log.md Discovered Work.
- **Deferred (design_log.md Discovered Work):** angle-176 `omission-completion-state` principle extension to research-synthesis.md Step 3.6 counter-prior pass.
