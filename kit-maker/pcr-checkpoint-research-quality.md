# PCR Checkpoint — Cluster: research-quality
**Cluster:** research-quality (Publication bias + peer-review quality + adversarial-review-dynamics + triangulation)
**Source angles:** 108–114
**PCR date:** 2026-07-05
**Procedure version:** post-cluster-review.md restructured 2026-07-03

---

## Step 1: Actionable claims extracted

Criteria: empirical HIGH or MEDIUM confidence, OR consensus that contradicts/updates existing kit decisions.

| Claim key | Evidence tier (after Step 2.5 + fresh-pass) | Group | Included? |
|-----------|---------------------------------------------|-------|-----------|
| pub-bias-non-submission-primary | HIGH (SCOPE: clinical/biomedical) | publication-bias | Yes |
| outcome-reporting-bias-40-62pct | HIGH (SCOPE: clinical/biomedical) | publication-bias | Yes |
| registered-reports-positive-rate-drop | HIGH (SCOPE: clinical/biomedical) | publication-bias | Yes |
| peer-review-inter-reviewer-agreement | HIGH (SCOPE: quantitative empirical research) | peer-review-quality | Yes |
| peer-review-statistical-expert-biggest-gain | HIGH (SCOPE: quantitative empirical research) | peer-review-quality | Yes |
| peer-review-psychology-18pct-errors | HIGH (SCOPE: quantitative empirical research) | peer-review-quality | Yes |
| red-team-late-timing-resistance | HIGH (SCOPE: voluntary/informal settings) | adversarial-review-dynamics | Yes |
| red-team-internal-familiarity-blindspot | HIGH (SCOPE: voluntary/informal settings) | adversarial-review-dynamics | Yes |
| convergence-blocks-vs-tempers | HIGH (SCOPE: causal-inference contexts) | triangulation | Yes |
| mendelian-randomization-scope-limit | HIGH (SCOPE: causal-inference contexts) | triangulation | Yes |
| automated-grade-domain-accuracy-cliff | HIGH (SCOPE: pre-2024 NLP tools) | automation-maturity | Yes |
| automation-71pct-time-reduction | HIGH (SCOPE: pre-2024 NLP tools) | automation-maturity | Yes |
| hypothesis-inverted-ground-truth-15pct | HIGH (alternatives-generation group, MEDIUM overall) | alternatives-generation | Yes |
| causal-theory-error-base-rate | HIGH supporting (mechanism-and-depth group, MEDIUM overall) | mechanism-and-depth | Yes |
| bias-independence-requirement | MEDIUM | triangulation | Yes |
| nhst-null-power-error-rate | MEDIUM | null-result-interpretation | Yes |
| null-taxonomy-nibs-prior-expectations | MEDIUM | null-result-interpretation | Yes |
| mechanism-vs-correlation-depth-signal | MEDIUM | mechanism-and-depth | Yes |
| surface-learning-mimicry-failure-mode | CONSENSUS (updates claim format — existing procedure) | mechanism-and-depth | Yes |
| prisma-2020-items-added-for-systematic-omissions | HIGH (completeness group, MEDIUM overall after fresh-pass) | completeness-and-reporting | Yes |

---

## Step 2.0: Principles cross-match (completed before claims table)

Principles from Step 3.7 of synthesis checked against kit procedures for violations:

1. **Publication bias principle** (pre-output suppression) — cross-matched against TASK_TEMPLATE, verify pass, A1 auditor. Existing TASK_TEMPLATE Section 1.1 done-criteria pre-commitment partially addresses this. No direct conflict found. Score: MEDIUM × 1 = 2. DEFERRED.

2. **Peer-review quality principle** (structured rubric + multi-reviewer) — cross-matched against verify pass, A1 auditor, Phase 7 gate. Verify pass is structured (3 dimensions). A1 auditor is structured (checklist). Two-auditor model lacks distinct-specialization specification. Mechanism gap identified: rationale for two auditors not stated; "two passes with overlapping scope less valuable than distinct specializations" is new mechanism supply. Score: MEDIUM × 2 = 4. Partially applied via COMPOUND-2.

3. **Automation maturity principle** (pattern-recognition vs judgment) — cross-matched against auditor dispatch. Partially addressed: A1 auditor uses structured checklist (pattern-matching). Coherence checks (cross-rule consistency) remain judgment-intensive. No new structural change needed beyond awareness note. Score: MEDIUM × 1 = 2. DEFERRED.

4. **Adversarial review dynamics principle** (crystallization + context-distance) — cross-matched against research-synthesis.md Step 3.6. Subagent receives only conclusion, not synthesis context. Already addressed. Commitment event co-specification derivation: score 2. DEFERRED.

5. **Triangulation principle** (bias-vector independence) — cross-matched against Phase 7 test design. Mechanism gap: no distributional independence requirement for test cases. APPLIED as COMPOUND-1.

6. **Null-result-interpretation principle** (sensitivity of detection) — cross-matched against rule-outcome-register.md flip triggers. Mechanism gap: flip triggers don't specify sensitivity conditions. APPLIED as AI-7.

7. **Mechanism-and-depth principle** (falsification conditions) — cross-matched against research-quality.md claim format. Gap-fill: no `falsification:` field in current format. APPLIED as AI-1.

8. **Completeness-and-reporting principle** (selective compliance) — cross-matched against CLAUDE.md. Existing "Rule destination — TASK_TEMPLATE first" already addresses this. No new gap.

9. **Alternatives-generation principle** (prior-alignment filter) — cross-matched against alternatives-generation.md. Procedure already requires generating alternatives resting on DIFFERENT assumptions. Prior-alignment filter gap score: 2. DEFERRED.

10. **Search-strategy-completeness principle** (invisible omissions) — Conditions 2 and 3 in saturation definition already implement this. No new gap.

---

## Step 2.1–2.2: Per-claim cross-match results

### Audit items generated

| ID | Claim key(s) | Kit element | Conflict type | Score | Decision |
|----|-------------|-------------|---------------|-------|----------|
| AI-1 | causal-theory-error-base-rate (HIGH-SCOPE) + surface-learning-mimicry-failure-mode (CONSENSUS) + mechanism-vs-correlation-depth-signal (MEDIUM) | research-quality.md claim format: no falsification condition field | gap-fill | MEDIUM(2)×3=6 | APPLY (provisional, stability note: P2 angle queued) |
| AI-2 | red-team-late-timing-resistance (HIGH-SCOPE) + adversarial-review-dynamics principle | research-synthesis.md Step 3.6: no maximum-context-accumulation threshold | mechanism gap | MEDIUM(2)×1=2 | DEFERRED (score below threshold) |
| AI-3 | peer-review-inter-reviewer-agreement (HIGH-SCOPE) + peer-review-statistical-expert-biggest-gain (HIGH-SCOPE) | Two-auditor model: two same-type auditors, no distinct-specialization rationale | mechanism gap | MEDIUM(2)×2=4 | Partially addressed via COMPOUND-2; rationale mechanism gap noted |
| AI-4 | adversarial-review-dynamics principle — commitment event co-specification | Phase 5: no adversarial gate before plan approval | principle extension | MEDIUM(2)×1=2 | DEFERRED (score below threshold) |
| AI-5 | nhst-null-power-error-rate (MEDIUM) + null-taxonomy-nibs-prior-expectations (MEDIUM) | rule-outcome-register.md flip triggers: no sensitivity specification | mechanism gap | MEDIUM(2)×2=4 | APPLY (guideline) |
| AI-6 | automation-71pct-time-reduction (HIGH-SCOPE) + automated-grade-domain-accuracy-cliff (HIGH-SCOPE) | A1 auditor: mixes field-presence + coherence checks | mechanism gap | MEDIUM(2)×1=2 | DEFERRED (score below threshold; partially addressed by A1 checklist structure) |
| COMPOUND-1 | automated-grade-domain-accuracy-cliff (HIGH-SCOPE) × convergence-blocks-vs-tempers (HIGH-SCOPE) | Phase 7 test design: no distributional independence requirement | mechanism gap | HIGH×HIGH→CONDITIONAL | APPLY (conditional) |
| COMPOUND-2 | peer-review-statistical-expert-biggest-gain (HIGH-SCOPE) × omission-commission-asymmetry (HIGH, prior) | Phase 7 per-constraint validation: no specialist NEVER-rule decay auditor | mechanism gap | HIGH×HIGH→CONDITIONAL | APPLY (conditional, as note to existing prohibition-commission paragraph) |
| COMPOUND-3 | red-team-late-timing-resistance (HIGH-SCOPE) × governance-decay-compaction (HIGH, prior) | Long-horizon kit: adversarial review timing relative to compaction events | principle extension | HIGH×HIGH→CONDITIONAL, narrow | DEFERRED (too specialized; partially covered by existing compaction-asymmetric conflict compound note) |
| COMPOUND-4 | pub-bias-non-submission-primary (HIGH-SCOPE) × hypothesis-inverted-ground-truth-15pct (HIGH, prior) | Research agent: low probability of surfacing counterintuitive null results | principle extension | HIGH×HIGH, but already addressed by Q3b adversarial subagent | NULL (already addressed) |

---

## Step 2.3: Cross-finding compounds

High×High pairs checked:

| Pair | Compound mechanism? | Decision |
|------|---------------------|----------|
| peer-review-inter-reviewer-agreement × red-team-internal-familiarity-blindspot | Together: "independent + rubric" necessary combination; neither alone implies both. Current kit has rubric (verify pass) but overlapping-type auditors. Not a new mechanism beyond AI-3 + COMPOUND-2. | No new compound beyond existing items |
| automated-grade-domain-accuracy-cliff × convergence-blocks-vs-tempers | Yes: judgment-intensive evaluation + homogeneous test cases = uninformative Phase 7 certification. Neither alone implies this. | COMPOUND-1 — APPLIED |
| peer-review-statistical-expert-biggest-gain × omission-commission-asymmetry (prior) | Yes: highest-ROI specialist for behavioral kits = NEVER-rule decay auditor. Neither alone implies this specific specialization. | COMPOUND-2 — APPLIED |
| red-team-late-timing-resistance × governance-decay-compaction (prior) | Yes: adversarial review after compaction is doubly compromised. But too narrow and partially addressed by existing compaction note. | COMPOUND-3 — DEFERRED |
| pub-bias-non-submission-primary × hypothesis-inverted-ground-truth-15pct (prior) | The compound probability argument doesn't generate a new mechanism beyond Q3b adversarial subagent already implemented. | NULL |

Cross-finding compound null: remaining HIGH×HIGH pairs checked — COMPOUND-1, COMPOUND-2, COMPOUND-3 cover the non-null cases. No additional compounds found.

---

## Step 3: Priority scores

| ID | Score | Decision |
|----|-------|----------|
| AI-1 | 6 (MEDIUM×3) | APPLY — provisional, stability caveat |
| COMPOUND-1 | 6 (HIGH×HIGH, CONDITIONAL) | APPLY — conditional |
| COMPOUND-2 | 6 (HIGH×HIGH, CONDITIONAL) | APPLY — conditional |
| AI-5 | 4 (MEDIUM×2) | APPLY — guideline |
| AI-3 | 4 (MEDIUM×2) | Partially addressed via COMPOUND-2 |
| All others | ≤2 | DEFERRED |

Stability check: Angle 4 (falsification condition as depth discriminator) is P2 and directly revisits AI-1. Applied AI-1 as PROVISIONAL with note.

---

## Step 3.5: Mechanism options (per applied item)

### AI-1 (falsification condition)
Principle: mechanism field only useful if it generates falsifiable predictions; structural enforcement should make field non-trivially populate-able.
Options: (1) new `falsification:` field; (2) sub-requirement in prose; (3) additional auditor check dimension.
Chosen: Option 1 — new field. Reason: most structurally enforceable ("is there a `falsification:` field?" is binary). Option 2 weaker (prose-within-prose = same failure mode as current). Option 3 adds auditor judgment complexity.

### COMPOUND-1 (Phase 7 test diversity)
Principle: convergence from same-source test cases is uninformative for generalization.
Options: (1) hard diversity gate; (2) canary conditional annotation; (3) per-test-case independence rubric.
Chosen: Option 2 — canary conditional annotation. Reason: proportionate to conditional scope; builds on existing canary structure. Option 1 too heavy for conditional finding. Option 3 too much per-case overhead.

### COMPOUND-2 (NEVER-rule specialist)
Principle: specialist reviewer targeted at hardest-to-catch failure class produces largest single quality gain.
Options: (1) third auditor pass; (2) specialization flag on existing auditor subgroup; (3) required specialization in prohibition-commission paragraph.
Chosen: Option 3 — note in existing paragraph. Reason: least invasive, builds on existing structure, density-conscious. Option 1 adds a full new auditor pass (too heavy for conditional medium-confidence derivation). Option 2 too vague.

### AI-5 (flip trigger sensitivity)
Principle: negative test result is evidence of absence only when detection was sufficiently sensitive.
Options: (1) new required field per entry; (2) header-level check guidance; (3) point-of-use reading guideline.
Chosen: Option 2 — header-level guidance note. Reason: retrofitting all existing entries with new required field is too heavy for MEDIUM evidence. Option 3 too loose. Header-level note fires as a PRE-WRITE CHECK.

---

## Step 4: Changes applied

### Gate A (Pattern I check) — per item

**AI-1:** Am I implementing the recipe from PRISMA falsification requirements, or a principle derivation?
→ Principle derivation: "a mechanism field that cannot state falsifiable conditions is a narrative." Implemented as a new format field in our claim structure, not as a PRISMA protocol copy. Gate A PASSES.

**COMPOUND-1:** Am I implementing the ML testing methodology from the automation study, or a principle derivation?
→ Principle derivation: "convergence from same-source validation is uninformative; require structurally distinct distributional regimes." Not copying ML benchmark design. Gate A PASSES.

**COMPOUND-2:** Am I implementing the academic peer review expert-reviewer model, or a principle derivation?
→ Principle derivation: "specialist auditor for highest-decay failure class." Highest-decay in our context = NEVER rules. Not copying human peer review recruitment. Gate A PASSES.

**AI-5:** Am I implementing statistical power calculations, or a principle derivation?
→ Principle derivation: "before acting on absence-of-effect, confirm the detection was sensitive enough." No power calculations in our flip triggers — asking a YES/NO sensitivity question instead. Gate A PASSES.

### Changes written

**Change 1 — research-quality.md** (AI-1)
- File: `kit-maker/procedures/research-quality.md`
- Section: Claim format block
- Type: Type B — new field in existing section
- Evidence routing: MEDIUM → provisional with flip trigger
- What changed: Added `falsification:` field after `claim:` in empirical claim format. Includes rationale paragraph with claim keys, scope, flip trigger.
- Register entry: PCR-RQ-A1

**Change 2 — ENTRYPOINT.md Phase 7** (COMPOUND-1)
- File: `kit-maker/ENTRYPOINT.md`
- Section: Phase 7 gate — Per-constraint validation area (after Paraphrase-variant stability test, before Minimum model tier validated)
- Type: Type B — new checkbox in existing section
- Evidence routing: compound HIGH×HIGH with SCOPE caveats → CONDITIONAL structural enforcement
- What changed: Added "Test distributional independence (CONDITIONAL)" checkbox with scope conditions, provisional note, flip trigger.
- Register entry: PCR-RQ-A2

**Change 3 — ENTRYPOINT.md Phase 7** (COMPOUND-2)
- File: `kit-maker/ENTRYPOINT.md`
- Section: Phase 7 gate — "Prohibition-commission interaction at long horizon" paragraph (text addition)
- Type: Type A — text addition to existing section
- Evidence routing: compound HIGH×HIGH with peer-review SCOPE caveat → CONDITIONAL
- What changed: Added "Specialist detection note (CONDITIONAL)" after the existing "If no test suite reaches turn 10+: flag" sentence.
- Register entry: PCR-RQ-A3

**Change 4 — rule-outcome-register.md** (AI-5)
- File: `kit-maker/state/rule-outcome-register.md`
- Section: Format header / instructions block
- Type: Type A — text addition to existing format instructions
- Evidence routing: MEDIUM → provisional with flip trigger
- What changed: Added "Flip trigger sensitivity check (PROVISIONAL)" guidance note after the format block, before "---".
- No separate register entry (the guidance itself IS the meta-guidance for flip trigger sensitivity; its own flip trigger is embedded in the note).

### Step 5: Re-review from new vantage

Fresh independent analysis of changes applied identified:

**P1 item found:** The new `falsification:` field in claim format creates a gap in the verify pass. No verify dimension currently checks whether the stated falsification condition is observable and non-trivial. An agent could populate the field with trivial or circular conditions. Applied fix: added "Dimension 2b — Falsification condition validity (PROVISIONAL)" to the verify pass in research-quality.md.

**Step 5 log:** one P1 item found and applied. No further exposures identified.

---

## CONTESTED flags

None. All synthesis contradictions resolved by scope (synthesis Step 2 found no unresolvable contradictions). No CONTESTED items to flag.

`contested_flagged: []`

---

## Deferred items

| ID | Reason |
|----|--------|
| AI-2 (adversarial timing threshold) | Score 2 — below threshold; already partially addressed by subagent isolation in Step 3.6 |
| AI-4 (commitment event co-specification) | Score 2 — below threshold; Phase 5 has "Strongest-unsupported-assumption" as partial gate |
| AI-6 (automation-maturity routing) | Score 2 — below threshold; A1 auditor's checklist structure already implements pattern-matching approach |
| COMPOUND-3 (late adversarial + compaction) | Narrow conditional scope; existing compaction-asymmetric conflict note partially addresses |
| COMPOUND-4 (pre-output suppression probability) | Already addressed by Q3b adversarial subagent |
| alternatives-generation prior-alignment filter | Score 2 — partially addressed by existing same-assumption test requirement |
| search-strategy-completeness user-examples cluster check | Score 1 — consensus evidence; existing Step 0 addresses the principle |
| publication-bias pre-commitment to evaluation criteria | Already addressed by TASK_TEMPLATE Section 1.1 done-criteria and research-synthesis.md procedure structure |

---

## New angles to queue (Step 7)

Already present in synthesis "New angles generated" section. Confirming status:

1. **Confirm-vs-refute verify prompt effectiveness** — P2 angle. Already in synthesis.
2. **Grey literature adoption rate in AI research** — P2 angle. Already in synthesis.
3. **LLM causal theory error analogues** — P1 angle (directly relevant to verify pass design and PCR-RQ-A1).
4. **Falsification condition as depth discriminator** — P2 angle (directly affects PCR-RQ-A1 flip trigger). Stability: PCR-RQ-A1 is provisional pending this angle.

These should be added to RESEARCH_ANGLES.md if not already present. (Note: RESEARCH_ANGLES.md was not read during this PCR. Operator should verify.)

---

## Null result declaration

**Not null.** Cross-match found conflicts and mechanism gaps. Four changes applied. This is not a null-result PCR.

---

## Summary of changes applied

| Rule ID | File | Section | Claim key(s) | Evidence tier |
|---------|------|---------|-------------|---------------|
| PCR-RQ-A1 | research-quality.md | Claim format | causal-theory-error-base-rate + surface-learning-mimicry-failure-mode + mechanism-vs-correlation-depth-signal | MEDIUM (PROVISIONAL) |
| PCR-RQ-A1 extension | research-quality.md | Verify pass Dimension 2b | (same — Step 5 P1 item) | MEDIUM (PROVISIONAL) |
| PCR-RQ-A2 | ENTRYPOINT.md | Phase 7 Per-constraint validation | automated-grade-domain-accuracy-cliff × convergence-blocks-vs-tempers | compound HIGH×HIGH (CONDITIONAL) |
| PCR-RQ-A3 | ENTRYPOINT.md | Phase 7 prohibition-commission paragraph | peer-review-statistical-expert-biggest-gain × omission-commission-asymmetry | compound HIGH×HIGH (CONDITIONAL) |
| AI-5 guidance | rule-outcome-register.md | Format header | nhst-null-power-error-rate + null-taxonomy-nibs-prior-expectations | MEDIUM (PROVISIONAL) |
