# PCR Checkpoint — angles-22-24
**Cluster:** Kit validation methodology + workflow pattern model tier + code generation robustness  
**Synthesis date:** 2026-06-30 (Step 3.7 added 2026-07-05)  
**PCR run date:** 2026-07-05  
**PCR procedure version:** restructured 2026-07-03  

---

## Step 1 — Actionable claims extracted

### HIGH (within stated scope)
- `constraint-type-specificity` (HIGH, SCOPE: MOSAIC arXiv:2601.18554, EACL 2026) — compliance varies substantially by constraint type; whole-output evaluation misses per-type variation; semantic/behavioral constraints show different interaction patterns than structural constraints
- `sequential-instruction-universal-failure` (HIGH, SCOPE: SIFo arXiv:2406.19999, EMNLP 2024) — sequential instruction execution fails universally at model frontier; longer chains degrade more severely
- `non-determinism-repeat-testing` (HIGH narrow, SCOPE: LLM non-determinism) — repeated testing required for non-deterministic outputs; single-pass validation insufficient
- `trajectory-assertion-over-output-assertion` (HIGH, SCOPE: validation methodology) — mechanism-checking more diagnostic than surface output checking
- `agentic-workflow-small-model-collapse` (HIGH narrow, SCOPE: Plan-and-Execute, arXiv:2601.22208) — 77-87% failure rate on models ≤7B; sequential chaining is the mechanism

### MEDIUM
- `code-robustness-first-line-omission` (MEDIUM, SCOPE: code generation) — first-position and last-position omission asymmetry; closing positions as vulnerable as entry positions (Derivation 1, 2026-07-05)
- `decoding-strategy-latent-awareness` (MEDIUM) — model has latent capability not accessible via greedy decoding
- `adversarial-perturbation-minimal-change` (MEDIUM) — minimal wording change produces measurable behavior shift; rule wording is behavioral
- `prompt-sensitivity-semantic-invariance` (MEDIUM) — semantically invariant prompts produce compliance variance; paraphrase tests diagnostic

### CONSENSUS
- `model-reliability-gaps` (CONSENSUS) — reliability floor calibration, long-chain verification gates
- `llm-evaluation-validity` (CONSENSUS) — structural criteria in auditors
- `production-drift-monitoring` (CONSENSUS) — propagation authority, fallback paths
- `rule-testability-design` (CONSENSUS) — dependency scan, agent-checkable conditions
- misc (CONSENSUS) — behavioral assumption encoding, additive/suppression classification

---

## Step 2.0 — Principle-extension items identified before per-claim cross-match

**PE-1 (from constraint-type-specificity):** Sequential-instruction failures are universal at all model tiers. Implication: tier declaration in element 10 should include a sequential depth mechanism for determining tier, not just model-tier lookup.

**PE-2 (from agentic-workflow-small-model-collapse):** Small model collapse is sequential-depth-driven, not task-type-driven. Implication: mandatory segmentation/re-anchoring rule for kits targeting small/mid-tier models with deep sequential chains.

**PE-3 (from code-robustness-first-line-omission Derivation 1):** Last-position omission in sequential procedures is as likely as first-position omission. Implication: last-position reinforcement check in Phase 6 per-file loop alongside the existing first-position checks.

**PE-4 (from adversarial-perturbation-minimal-change + prompt-sensitivity-semantic-invariance):** Rule wording selection is a behavioral decision, not stylistic. Implication: Phase 7 should include paraphrase-variant tests; Phase 6 should flag rule wording as a structural decision.

---

## Steps 2.1–2.2 — Per-claim cross-match

### Audit item A1 — Rule-interaction audit for semantic/behavioral constraints
**Claim:** `constraint-type-specificity` (HIGH SCOPE)  
**Derivation (3.7):** Phase 6 gate should require explicit co-activation characterization for semantic/behavioral rule pairs, distinct from the structural conflict-pair audit already in place.  
**Gap found in ENTRYPOINT.md:** Phase 6 "Gate after all files built" has conflict-capable pair audit (PCR176-A2, structural rules). No equivalent audit for semantic/behavioral constraints.  
**Pattern I check:** NOT a recipe copy. The MOSAIC study tested constraint types on NLP benchmarks; derivation for kit context is: semantic/behavioral rules (interpretation rules, classification rules, framing rules) may co-activate differently than structural rules, producing invisible interference. Principle derived: require explicit co-activation characterization for semantic/behavioral rule pairs.  
**Mechanism chosen:** New checkbox in Phase 6 "Gate after all files built", after conflict-capable pair audit.  
**Scope condition:** CONDITIONAL — applies when behavioral contract includes semantic/behavioral rules.  

### Audit item A2 — Sequential depth mechanism for minimum model tier determination
**Claim:** `agentic-workflow-small-model-collapse` (HIGH narrow)  
**Derivation (3.7):** Tier determination should be driven by sequential execution depth, not just task type.  
**Gap found in ENTRYPOINT.md:** Element 10 has tier declaration and counter-prior scope condition (2026-07-02). Missing: mechanism to determine tier from sequential depth when empirical data is absent.  
**Pattern I check:** NOT a recipe copy. The finding was about Plan-and-Execute pipelines; derivation for kit context is: count sequential steps before re-anchoring to determine tier floor. This is a principled derivation, not reproduction of the benchmark setup.  
**Mechanism chosen:** Text insert in Hard Rule 13 element 10 after "If uncertain: declare frontier." — adds depth-counting heuristic as CONDITIONAL override when empirical data is absent.  
**Scope condition:** CONDITIONAL — applies when no domain-specific empirical model performance data is available.  

### Audit item A3 — Small model segmentation rule in domain-conditional checklist
**Claim:** `agentic-workflow-small-model-collapse` (HIGH narrow) + PE-2  
**Derivation (3.7):** Kits targeting small/mid-tier models with 4+ sequential steps must include mandatory re-anchoring.  
**Gap found in ENTRYPOINT.md:** Domain-conditional checklist (lines 99–110) has no row for small/mid-tier model kits with deep sequential chains.  
**Pattern I check:** NOT a recipe copy. Adding a domain-conditional procedure row is a structural derivation from the collapse mechanism, not reproduction of the study's prompting setup.  
**Mechanism chosen:** New table row in domain-conditional checklist.  
**Scope condition:** CONDITIONAL — applies when kit targets mid-tier or small (≤7B) models AND has 4+ sequential step chains.  

### Audit item A4 — Prohibition-commission compound at long horizon
**Claim:** `sequential-instruction-universal-failure` (HIGH) × `omission-commission-asymmetry` (HIGH, prior cluster PCR119) — HIGH×HIGH compound  
**Derivation (3.7):** NEVER rules decay to ~33% by turn 16; commission rules hold ~100%. In kits with both NEVER and commission rules, commission rules may fire at turn 12 in the absence of a NEVER rule that decayed at turn 8 — creating a false safety profile in test suites that check only turns 3–5.  
**Gap found in ENTRYPOINT.md:** Phase 7 per-constraint validation has structural mechanism test (PCR119-A3). Missing: explicit compound test scenario for prohibition-commission interaction at long horizon.  
**Pattern I check:** NOT a recipe copy. Neither paper specifically tested this compound scenario in kits; the mechanism is derived from the intersection of the two findings.  
**Mechanism chosen:** New note in Phase 7 per-constraint validation gate, after structural mechanism test flip trigger.  
**Scope condition:** CONDITIONAL — applies when behavioral contract contains both NEVER and commission rules, for sessions >10 turns.  

### Audit item A5 — Last-position reinforcement check
**Claim:** `code-robustness-first-line-omission` Derivation 1 (MEDIUM)  
**Derivation (3.7):** Closing positions in sequential procedures are as vulnerable to omission as entry positions.  
**Gap found in ENTRYPOINT.md:** Phase 6 per-file loop step 4 has classification-anchor check (binary-checkable criteria). Missing: explicit check that correctness-critical closing steps have structural reinforcement.  
**Pattern I check:** NOT a recipe copy. The code-robustness finding is about code generation; derivation for kit context is: last-position vulnerability applies to any sequential procedure with a correctness-critical terminal step.  
**Mechanism chosen:** PROVISIONAL note after classification-anchor check in Phase 6 step 4.  
**Evidence tier:** MEDIUM → PROVISIONAL  

### Audit item A6 — Paraphrase-variant stability test
**Claim:** `prompt-sensitivity-semantic-invariance` (MEDIUM)  
**Derivation (3.7):** Semantically invariant paraphrase variants produce compliance variance; paraphrase test is diagnostic for rule reliability.  
**Gap found in ENTRYPOINT.md:** Phase 7 per-constraint validation checks rules individually but does not include paraphrase variants.  
**Pattern I check:** NOT a recipe copy. The finding was about LLM sensitivity to minor phrasing changes in evaluation prompts; derivation for kit context is: include paraphrase variants in per-constraint test suite for kits with varied natural-language input.  
**Mechanism chosen:** PROVISIONAL note in Phase 7 per-constraint validation, after prohibition-commission compound note.  
**Evidence tier:** MEDIUM → PROVISIONAL  

### Audit item A7 — Rule wording as behavioral decision
**Claim:** `adversarial-perturbation-minimal-change` (MEDIUM)  
**Derivation (3.7):** Rule wording selection is behavioral, not stylistic; minimal changes shift compliance measurably.  
**Gap found in ENTRYPOINT.md:** Phase 6 per-file loop step 3 (Alternatives) requires alternatives for file structure and approach. Missing: explicit note that rule wording alternatives are behavioral decisions requiring Phase 7 validation.  
**Pattern I check:** NOT a recipe copy. Adversarial perturbation research was about input prompts to models; derivation for kit context is: the same sensitivity applies to rule wording in behavioral contracts — treat wording selection as a behavioral decision.  
**Mechanism chosen:** PROVISIONAL note after decision-surfacing in Phase 6 step 3.  
**Evidence tier:** MEDIUM → PROVISIONAL  

---

## Step 2.3 — Cross-finding compound check

**Compound found — HIGH×HIGH:**

**Compound C1: `sequential-instruction-universal-failure` × `omission-commission-asymmetry`**  
Both HIGH. Mechanism: NEVER rules decay to ~33% at turn 16 while commission rules hold ~100%. In kits with both rule types targeting long-horizon sessions, test suites checking only turns 3–5 produce false confidence. The commission rule may fire at turn 12 in the absence of a decayed NEVER rule that would have blocked the action.  
→ Audit item A4 addresses this compound.  

**Compounds checked but not producing new distinct mechanisms:**
- `constraint-type-specificity` × `trajectory-assertion-over-output-assertion`: both inform A1 and the existing structural mechanism test (PCR119-A3); no additional distinct mechanism beyond A1.
- `agentic-workflow-small-model-collapse` × `sequential-instruction-universal-failure`: both inform A2/A3; sequential collapse is the shared mechanism; no additional distinct mechanism.
- `non-determinism-repeat-testing` × `trajectory-assertion-over-output-assertion`: non-determinism repeat testing already surfaced in prior PCR (PCR119-A3 partially); no new distinct gap identified.

---

## Step 3 — Prioritization scoring

| Item | Impact | Evidence | Gap | Score | Decision |
|------|--------|----------|-----|-------|----------|
| A1 (rule-interaction audit) | 2 | 2 | 2 | 6 | Apply |
| A2 (sequential depth mechanism) | 2 | 2 | 2 | 6 | Apply |
| A3 (small model segmentation) | 2 | 2 | 2 | 6 | Apply |
| A4 (prohibition-commission compound) | 2 | 2 | 2 | 6 | Apply |
| A5 (last-position reinforcement) | 1 | 1 | 2 | 4 | Apply PROVISIONAL |
| A6 (paraphrase-variant test) | 1 | 1 | 2 | 4 | Apply PROVISIONAL |
| A7 (rule wording behavioral) | 1 | 1 | 2 | 4 | Apply PROVISIONAL |

CONSENSUS items score < 4 → deferred (see below).

---

## Step 3.5 — Mechanism options

All mechanisms selected per Pattern I check above. No recipe copies. All are principled derivations for the kit context.

---

## Gate A (Pattern I) check results

All 7 audit items passed Pattern I check: each implements a principle derivation for the kit context, not a reproduction of the study's specific technique. Documented per item in Steps 2.1–2.2 above.

---

## CONTESTED items

None. No groups flagged as CONTESTED in angles-22-24 synthesis.

---

## Deferred CONSENSUS items

The following CONSENSUS groups score < 4 and are deferred to design_log.md discovered work:

- **model-reliability-gaps:** reliability-floor calibration, long-chain verification gates, self-assessment ≠ structural gates
- **llm-evaluation-validity:** structural criterion in auditor, auditor brief from artifacts
- **production-drift-monitoring:** propagation authority assignment, fallback path specifications
- **rule-testability-design:** dependency scan, agent-vs-user-checkable conditions, revision trigger per rule
- **misc:** behavioral assumption encoding, additive vs suppression classification, external context specification

---

## Changes applied

| ID | File | Location | Evidence tier | Scope condition |
|----|------|----------|---------------|-----------------|
| PCR22-24-A1 | ENTRYPOINT.md | Phase 6 Gate after all files built | HIGH CONDITIONAL | semantic/behavioral rules present |
| PCR22-24-A2 | ENTRYPOINT.md | Hard Rule 13 element 10 | HIGH CONDITIONAL | no domain empirical data available |
| PCR22-24-A3 | ENTRYPOINT.md | Domain-conditional checklist | HIGH CONDITIONAL | small/mid-tier model, 4+ sequential steps |
| PCR22-24-A4 | ENTRYPOINT.md | Phase 7 per-constraint validation | HIGH×HIGH COMPOUND CONDITIONAL | NEVER + commission rules, >10-turn sessions |
| PCR22-24-A5 | ENTRYPOINT.md | Phase 6 step 4 | MEDIUM PROVISIONAL | correctness-critical closing steps |
| PCR22-24-A6 | ENTRYPOINT.md | Phase 7 per-constraint validation | MEDIUM PROVISIONAL | varied natural-language input kits |
| PCR22-24-A7 | ENTRYPOINT.md | Phase 6 step 3 | MEDIUM PROVISIONAL | any rule wording decision |
