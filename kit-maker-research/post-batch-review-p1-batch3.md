# Post-Batch Review — Wave 2 P1 Batch 3

**Date:** 2026-07-02
**Batch scope:** Angles 169, USER-01, USER-02, 171, 176
**Run ID:** wf_31bb98bb-12e (script: kit-maker/scripts/batch3.js)
**Claims:** 87 total (empirical: 67, consensus: 16, anecdote: 3)
**Verify results:** high: 14, medium: 38, low: 15

---

## Step 4a — Angle triage (new angles surfaced: 31)

### Cluster: Intake protocol depth (from USER-01, USER-02)

| Angle | Priority | Summary |
|-------|----------|---------|
| Action-counterfactual relevance operationalization (EVPI in kit-maker context) | **P0** | Closes element 8 further — empirical test of which intake question types change the action taken; SAGE-Agent EVPI framework arXiv:2511.08798 |
| Reversibility as grounding criterion | **P0** | Operationalizes irreversibility gate in element 8; IS theory + COCORELI precondition blocking |
| Taxonomy of inferable-from-artifact vs. must-ask | **P1** | Which info types are recoverable from file inspection vs. genuinely absent; LHAW benign-class + Implicit Intelligence |
| Security perimeter around clarification mode | **P1** | ASPI (HIGH) — intake before tool execution; determines whether gate applies only to intake phase |
| Clarification paradox domain boundary | **P2** | For which kit task types does clarification logic structurally degrade performance (Drift-Bench) |
| Persona-level context accumulation | **P2** | Cross-session stable preferences to never re-elicit; pi-Bench arXiv:2605.14678 |

### Cluster: Search completeness / saturation validation (from 169, 171)

| Angle | Priority | Summary |
|-------|----------|---------|
| LLM self-report of search completeness is unreliable | **P1** | Stop-RAG arXiv:2510.14337 + SeekerGym arXiv:2604.17143; external termination signal required for kit-maker research loops |
| Operationalizing citation-graph gap detection | **P1** | Whether citation-probability-below-predicted is automatable as a kit-maker saturation check module |
| Adversarial query design for null results | **P2** | Whether critique/failure-mode/null-result query framing has higher yield when saturation appears reached |
| Relative recall benchmarking minimum viable set size | **P2** | PMC12621535 — optimal benchmark set size unknown; closes "how many seed papers needed" for saturation validation |
| Interdisciplinary vocabulary translation gap empirical rate | **P2** | What % of AI research exists only under HCI or management science vocabulary; calibrates Category D requirement |

### Cluster: Multi-constraint / prospective memory (from 176)

| Angle | Priority | Summary |
|-------|----------|---------|
| Omission vs. commission failure ratio in multi-constraint instruction following | **P1** | seqBench + AgentIF — closes kit quality metric decision (omission detection should dominate) |
| External intention register vs. in-context manifest | **P1** | SagaLLM + BDI — architectural decision for kit completion tracking; closes checklist design choice |
| Instruction count as kit complexity budget | **P1** | arXiv:2509.21051 (When Instructions Multiply) — quantified ceiling; closes rule density constraint calibration |
| Mid-response instruction reinstatement (ARQ pattern) | **P2** | Whether ARQ generalises beyond customer-service to kit system prompts |
| Proactive interference unbinding | **P2** | Instruction versioning strategies to reduce interference from revised instructions mid-session |
| Completion recognition failure as distinct class from omission | **P2** | MAST 12.4% "not recognising task completion" — done-state detection mechanism design |

### Cluster: Cross-batch duplicates (close or defer)

- "Essential vs. inferable split empirical threshold" from USER-02 and 169 — **MERGED** into element 8 update (now applied); close as resolved
- "Adversarial saturation check on Category D" from USER-02 and 176 — **DEFER to P2** (Category D requirement is already in research-quality.md; empirical grounding is enhancement not blocker)
- "Handoff specification loss / inter-agent contracts" from USER-02 and 171 — **P2** (multi-agent kit designs not yet the target; foundational kit design takes priority)

### Priority assignment (added to RESEARCH_ANGLES.md by batch 3 workflow):

**P0 (blocking):** Action-counterfactual operationalization, Reversibility as grounding criterion  
**P1 (next batch candidates):** Taxonomy inferable-from-artifact, Security perimeter around clarification, LLM search completeness unreliable, Citation-graph gap detection operationalization, Omission vs. commission ratio, External intention register, Instruction count as complexity budget  
**P2 (queue after P1):** All others listed above

---

## Step 4b — Evidence sufficiency check

### Kit files updated this batch (immediate HIGH findings applied):

**ENTRYPOINT.md element 8 (Intake protocol):** PROVISIONAL marker removed.

Previous text: PROVISIONAL — pending USER-01/02. Placeholder with no specific guidance.

Applied: Three-signal test for essential unknowns (outcome-critical [LHAW], goal-level [Ask Early/Late], irreversibility gate [IS theory]); safe-to-infer categories (input/constraint/benign-class/user-unanswerable); volume cap 1–3 questions; action-counterfactual selection principle; front-loaded limitation; security caveat for adversarial contexts.

Evidence basis: HIGH (arXiv:2605.07937 — goal clarification timing cliff confirmed, goal-level clarification loses value after 10% of execution, pass@3 0.78→baseline); HIGH (arXiv:2605.17324 ASPI — clarification amplifies injection 10-20x); MEDIUM (arXiv:2602.10525 LHAW — three-class taxonomy empirically validated, Kendall tau 0.78-0.87 not fully confirmed); CONSENSUS (goal-level-unknowns-upfront-blocking from 3 independent papers).

**CLAUDE.md element 8:** Updated to match ENTRYPOINT summary form.

### Evidence NOT yet sufficient (pending further research or synthesis):

- **Action-counterfactual selection in kit-maker context** (P0 angle): SAGE-Agent EVPI framework confirmed in abstract (7-39% coverage improvement) but POMDP labeling and specific domain list unconfirmed. Need P0 angles researched before full operationalization.
- **Reversibility threshold** (P0 angle): IS theory grounding criterion is CONSENSUS (formal theory); needs empirical calibration for which kit outputs are "irreversible enough" — this P0 angle operationalizes it.
- **Instruction count ceiling** (P1 angle): "When Instructions Multiply" confirmed multi-instruction stacking causes monotonic degradation; logistic regression within ~10% error — but specific model-family ceiling (e.g., "≤6 constraints for 80% compliance on frontier models") not yet extracted.

---

## Step 4c — Post-batch process review

### Confidence distribution

| Angle | Claims | HIGH | MEDIUM | LOW | CONSENSUS | ANECDOTE |
|-------|--------|------|--------|-----|-----------|----------|
| USER-01 (essential vs. inferable) | 20 | 2 | 9 | 4 | 4 | 1 |
| USER-02 (front-loaded intake) | 19 | 0 | 11 | 3 | 3 | 2 |
| 169 (citation-graph vocabulary islands) | 13 | 4 | 3 | 2 | 3 | 0 |
| 171 (adversarial saturation validation) | 20 | 4 | 7 | 5 | 4 | 0 |
| 176 (multi-task / prospective memory gap-fill) | 15 | 4 | 8 | 1 | 2 | 0 |
| **Batch total** | **87** | **14** | **38** | **15** | **16** | **3** |

**HIGH rate:** 14/67 empirical = 21%  
**LOW rate:** 15/67 empirical = 22%  
**MEDIUM dominance:** 38/67 = 57% — typical for active 2025-2026 preprint literature where foundational facts hold but model-specific statistics are frequently unverified or partially extrapolated

### Saturation signal

- USER-01: NOT saturated (saturation note in archive — two P0 angles remain decision-closing gaps)
- USER-02: YES saturated (all 3 conditions met; 7 consecutive zero-yield queries)
- 169: YES saturated (all 3 conditions met; 4 consecutive zero-yield queries)
- 171: YES saturated (all 3 conditions met; 10 consecutive zero-yield queries; 5 vocabulary traditions covered)
- 176: YES saturated (all 3 conditions met; multiple zero-yield queries at end)

**4 of 5 angles saturated.** USER-01 unsaturated because the two P0 angles (action-counterfactual operationalization, reversibility criterion) are recognized as requiring separate research passes — a correct saturation verdict, not a failure.

### New angle explosion rate

31 new angles from 5 angles researched = 6.2 angles per angle. This is high but expected: the intake protocol research (USER-01/02) surfaced multiple interacting decisions. Two patterns:
1. **P0 follow-up angles** (action-counterfactual, reversibility): these are operationalization questions the current research correctly identified but didn't close — expected, healthy
2. **Cross-batch duplicates** (intake empirical threshold appeared in 3 archives): signals the same research gap being independently recognized — now merged and applied via element 8 update

Filter applied: 7 true new P0/P1 angles; 11 P2 angles; 13 either duplicates/merged or deferred.

### Null results (notable)

- No practitioner blog posts with documented essential/inferable split (USER-01): expected — this is an emerging problem class without established practice; the empirical literature (LHAW, SAGE-Agent) is more useful
- Position bias (lost-in-the-middle) as instruction-following mechanism (176): NULL — arXiv:2601.03269 found no consistent positional effect, contradicting expected transfer from retrieval tasks; this is a useful design signal (instruction ordering is NOT a reliable mitigation)
- Anthropomorphic PM critique specific to kit design (176): no direct literature; the critique is theoretical framework, not empirically tested for kit design

### Verify override rate

Batch 3 workflow: 0 claims returned unverified (LOW confidence is the floor). Verify raised LOW verdict on:
- Several named-model statistics in USER-01/02 (model names in preprints are suspicious)
- Attribution errors in 171 (author misattributions in secondary claims)
- Specific percentage figures not recoverable from abstracts (common for 2026 preprints)

No HIGH claims were overridden down. 3 claims were flagged as LOW with explicit fabrication risk (38% over-clarification rate in ask-or-assume, Kendall tau specific values in front-loaded intake, Korean 100% false exclusion rate).

### Process issues identified

1. **Named model statistics are HIGH risk for 2026 preprints:** Multiple claims include model names (GPT-5.2, Claude Sonnet 4.5, Gemini 3 Flash) that don't exist as of the knowledge cutoff — verify agents correctly flag these as LOW. When using these archives, weight qualitative mechanism claims over named-model quantitative statistics.

2. **Author attribution errors in 171 (saturation validation archive):** Two claims attributed findings to wrong authors (Lerch vs. Cunningham/Greene; Kastner 2007 dated as 2009; Hirt vs. Affengruber). These don't affect the substance but do affect citability. If these claims are synthesized into formal kit citations, attribution must be corrected.

3. **User-02 saturation condition uses zero-yield queries as terminal signal:** 7 consecutive zero-yield queries at the end confirms saturation — this matches the saturation protocol in research-quality.md.

### Recommendations for batch 4

- **Batch 4 scope should prioritize P1 angles that close kit file decisions:** Instruction count ceiling (closes rule density constraint calibration), External intention register (closes completion tracking design), and one of the P0 angles (action-counterfactual or reversibility).
- **Max batch size:** 4-5 angles. The 31-angle explosion from batch 3 was caused by USER-01/02 depth; batch 4 should have at most 2 decision-closing angles and 2-3 gap-fills.
- **Batch 4 launch blocker:** Synthesis gate (Step 4d) requires ≥1 batch 3 cluster synthesized before batch 4 launches.

---

## Step 4d — Synthesis gate check for batch 4

**Gate status: BLOCKED — no batch 3 cluster synthesized yet.**

Highest-value batch 3 cluster to synthesize first:

**USER-01/02 (Intake protocol cluster):** 39 claims across 2 archives. Core decision (element 8 essential/inferable split) has already been applied as provisional findings. Full synthesis would: (a) consolidate the LHAW three-class taxonomy + SAGE-Agent EVPI + Ask Early/Late timing findings into a formal confidence map; (b) identify contradictions (LHAW benign-class vs. ClarEval goal-type-blocking vs. Ask Early/Late input-deferability — these are actually complementary but need explicit resolution in synthesis); (c) validate or refine the element 8 update just applied.

**Second candidate — 176 (Multi-constraint/prospective memory):** 15 claims, 4 HIGH. Would directly validate rule density constraint (current HIGH basis arXiv:2603.23530) and close instruction count ceiling as a quantified number.

**Recommendation:** Synthesize USER-01/02 cluster first (closes batch 3 gate AND validates element 8 update), then synthesize 176 cluster (closes rule density calibration as a next-session task).

---

*Written: 2026-07-02. Batch 3 post-batch review complete.*
