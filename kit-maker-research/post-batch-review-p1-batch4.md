# Post-Batch Review — Batch 4 (2026-07-05)

Run ID: wf_6c4a7009-81f
Stats: 74 claims (62 empirical, 9 consensus, 3 anecdote); verify: 20 HIGH / 30 MEDIUM / 12 LOW / 0 unverified
HIGH rate: 32% (↑ from batch 3 21%)
Angles: 5 (action-counterfactual, reversibility, instruction count, external intention register, omission vs commission)
Saturation: angles 2, 3, 5 saturated; angles 1 and 4 not saturated (grey lit returned nothing for angle 1; write discipline gap unresolved for angle 4)

---

## Step 4a — New angle triage (12 angles surfaced)

### P0 (decision-closing, block batch 5 without)

1. **EVPI generalization to open-ended kit tasks** (from angle 1) — does SAGE-Agent's EVPI generalize beyond structured API schemas to open-ended kit tasks? Batch 4 surface: EVPI requires structured schemas; open-ended tasks need rubric-based or information-gain alternatives. This closes the open-ended case of element 8. P0 — close before finalizing intake protocol for creative/research kits.

2. **Reversibility annotation taxonomy for kit-maker tool schemas** (from angle 2) — concrete label vocabulary (e.g., reversibility: none|soft|hard + consequence_domain: legal|financial|data|internal) grounded in Parallax local/external split, WCAG domain categories, and mobile UI taxonomy. P0 — directly operationalizes the confirmed two-factor gate for kit tool definitions.

3. **Two-factor gate empirical test** (from angle 2) — does requiring BOTH irreversibility AND material consequence produce better outcomes than irreversibility-alone? Currently CONSENSUS only (Anthropic minimal footprint). P0 — would confirm or deny the two-factor vs single-factor gate decision.

4. **Write discipline failure rate for external registers** (from angle 4) — no study measures what fraction of LLM agent steps correctly update external state registers vs skip. This is the most dangerous unknown in the external-register design. P0 — if write accuracy is below ~90%, external registers produce net-negative outcomes.

### P1

5. **EVPI extension: reversibility as consequence multiplier** (from angles 1+2) — both SAGE-Agent and information-gain paper explicitly note the EVPI framework doesn't model reversibility. P1 — principled integration of uncertainty-based clarification with reversibility-based confirmation.

6. **MCP tool-level reversibility annotation spec** (from angle 2) — current gap: MCP has no standardized reversibility annotation. P1 — closes kit-maker's need to build bespoke tool metadata vocabulary.

7. **Bounded predicate register vs full episodic store** (from angles 1+4) — which external state representation (CGDP bounded predicates K≤6 vs TME hierarchical tree vs flat log) best supports kit step-tracking? P1 — closes the architecture decision for external intention register.

8. **Claude Sonnet 4-class instruction-count ceiling** (from angle 3) — AGENTIF shows general 14-constraint average but no breakdown by model family. P1 — closes the kit-specific rule density ceiling for Claude Sonnet 4.x.

### P2

9. **Omission metric weight calibration — empirically derive optimal ratio** (from angle 5) — practitioners use 10× for critical omissions but this isn't empirically calibrated. P2 — current CONSENSUS-level recommendation is sufficient for now.

10. **Negation reframing as kit-authoring intervention** (from angle 5) — does rewriting prohibitions as positive requirements close the omission/commission asymmetry gap? P2 — cheap test before committing to heavy metric reweighting.

11. **Placeholder/checklist injection as omission scaffold** (from angle 5) — AbsenceBench shows 35.7% omission detection improvement from placeholder insertion. P2 — design the checklist pattern for Phase 7 quality assessment.

12. **KBV rate as model-selection criterion** (from angle 5) — GPT-5.4 at 8% KBV vs Sonnet-4.6 at 99% under pressure. P2 — model selection may dominate metric weighting as a quality lever.

### Duplicates / merges
- "Reversibility as grounding criterion for external confirmation gates" (from angle 4) → MERGE with angle 2's reversibility taxonomy (P0, #2 above)
- "Cross-task SHAP analysis" (from angle 1) → HOLD: the Ambig-SWE SHAP finding was FABRICATED (verify verdict LOW); do not build research on a retracted finding; need to establish valid baseline first

---

## Step 4b — Decision closure (per angle)

### Angle 1: Action-counterfactual operationalization
**Provisional decision:** which intake question types change the action taken?
**PARTIALLY CLOSED with scope condition**

Ruling:
- For STRUCTURED SCHEMA tasks (tool-call APIs, form filling): EVPI operationalization is validated (SAGE-Agent, HIGH: 7–39% coverage improvement, 1.5–2.7x fewer questions, arXiv:2511.08798)
- For OPEN-ENDED tasks (research synthesis, document drafting): use rubric-based action-relevance proxy (AskBench RLVR, HIGH: coverage 0.214→0.679, arXiv:2602.11199) — rubric items are by construction the minimal facts that change the answer
- Three-tier intake ordering: (1) goal/intent disambiguation first (changes entire task trajectory); (2) irreversibility gate second (separate mandatory trigger, independent of uncertainty); (3) slot/parameter questions last (retain value through ~50% execution)
- Volume cap confirmed: 1–3 questions max; non-monotonic degradation beyond this (arXiv:2606.03135, MEDIUM)

SHAP fabrication note: ambig-swe-shap-question-types (arXiv:2502.13069) does NOT use SHAP analysis — the SHAP values (0.183/0.098/0.057/0.035) and hierarchy are not in the paper. Remove from any kit rule that cited these values. The paper's actual finding (43.8%→23.7% performance drop from underspecification) is valid.

Applied to ENTRYPOINT.md element 8: ✅ (see changes below)

---

### Angle 2: Reversibility as grounding criterion
**CLOSED**

Ruling:
- Upfront confirmation required when BOTH: (a) irreversible AND (b) material consequence — two-factor gate (CONSENSUS: Anthropic minimal footprint)
- Irreversibility gate is INDEPENDENT of uncertainty signal — a certain agent still requires the gate for irreversible actions (arXiv:2606.03135 confirms info-gain criterion doesn't fire on confident-but-irreversible steps, MEDIUM)
- Reversibility labels MUST be hardcoded as tool metadata at design time — NOT inferred by executing agent (47–67% accuracy across models, arXiv:2410.09006, MEDIUM)
- Practical binary split: locally-reversible (git tracking, sandbox) → lighter gate; externally-irreversible (network calls with side effects, emails, deletions outside VCS) → mandatory upfront confirmation (Parallax Chronicle scope, MEDIUM)
- WCAG domain classifier: legal/financial/user-data-modification → upfront confirmation independent of technical reversibility (CONSENSUS, 20+ years convergence)
- Structural precondition blocking (COCORELI, HIGH): missing required parameter = execution block — do not treat as soft warning; the gate must block pipeline execution

Applied to ENTRYPOINT.md element 8 + element 7 (disagreement protocol): ✅

---

### Angle 3: Instruction count as kit complexity budget
**CLOSED**

Ruling:
- Non-reasoning frontier models (GPT-4o, Claude 3.5 Sonnet): prompt-level compliance halves at n=10 rules (GPT-4o: 94%→21%; Claude 3.5 Sonnet: 95%→48%; ManyIFEval, HIGH, arXiv:2509.21051)
- Reasoning models (o3, extended thinking): 3.7× advantage at n=10 (78% vs 21%); substantially higher ceiling
- Three degradation patterns (IFScale, HIGH, arXiv:2507.11538): threshold decay (frontier: near-perfect through 150 rules then collapse), linear decay (Claude 3.7), exponential decay (smaller models → 7–15% floor). Threshold models appear reliable until they suddenly fail — "false safety window"
- Behavioral vs declarative: behavioral instructions (actions not visible in text output) have near-zero compliance regardless of count (arXiv:2605.01771, HIGH: 0% behavioral vs 97% declarative); count types separately
- Rule ordering: safety/goal rules FIRST — primacy bias at high density; first ~5 rules most reliably followed
- KBV: rule restatement is NOT a compliance check — 97% declarative recall with 8–99% violation rate (arXiv:2604.28031, HIGH)
- The current ≤8 elements / 12–15 culling trigger is justified as mid-range; non-reasoning kits should target ≤7 simultaneously active behavioral rules

Applied to ENTRYPOINT.md rule density element: ✅

---

### Angle 4: External intention register vs in-context manifest
**PROVISIONALLY CLOSED — write discipline caveat**

Ruling:
- External register is REQUIRED for kit workflows with ≥10 steps or cross-domain boundaries (OdysseyBench, HIGH: GPT-4o 75%→45.61% on 3-app, o3 72.83%→30.36%; step omission primary failure mode)
- Register must store: step status, dependency graph, confirmed parameters, output handles — NOT raw conversation history (SagaLLM, HIGH: S_A/S_O/S_D dimensions)
- Architecture constraint: bounded predicate list (K≤6) prevents bloat; programmatic exhaustion detection beats LLM-based stopping (CGDP, HIGH, arXiv:2605.07042)
- CRITICAL CAVEAT: external registers require high write accuracy; MemFail shows external memory can HURT (incorrect writes create false confidence worse than in-context uncertainty). Write-completion confirmation required before register update.
- The write discipline failure rate is an OPEN EMPIRICAL GAP — no study measures LLM step-completion write accuracy as a baseline metric. This is a P0 research angle for batch 5.

Provisional status: closed in favor of external register for ≥10-step workflows, but confirmation mechanism (write discipline gate) is PROVISIONAL until write discipline data exists.

Applied to ENTRYPOINT.md domain-conditional procedure checklist (external register row): ✅

---

### Angle 5: Omission vs commission failure ratio
**CLOSED**

Ruling:
- Omission failures DOMINATE commission failures across multiple independent studies: 34.88:1 ratio at high instruction density (IFScale, HIGH); recall collapses while precision holds (seqBench, MEDIUM); 80pp gap between omission and commission compliance over time (SRD, MEDIUM — single lab, not replicated)
- Kit quality metrics MUST weight omission failures more heavily than commission failures
- Operationally: use recall-based completion metrics (every required output verified), NOT F1 or precision-only scores
- LLM judges over-credit partial omissions — they map 'partial' satisfaction to 'yes' rather than 'partial' (MCJudgeBench, HIGH, arXiv:2605.03858); automated quality evaluation has a systematic omission-detection deficit
- Required checklist before free-text generation enables automated omission detection; structural scaffolding beats open-ended LLM review for absence detection (AbsenceBench: 35.7% improvement from placeholder insertion, MEDIUM)
- Session length management dominates structural instruction choices (config null result, HIGH: file size/position/architecture had NO detectable effect; per-step odds reduction 5.6%)
- Soft constraints (omission-type) must be re-injected periodically — they decay from 73% to 20% by turn 25 while commission constraints hold at 100%+ (SRD, MEDIUM)

Applied to ENTRYPOINT.md Phase 7 quality criteria: ✅

---

## Step 4c — Process review

### Claim statistics
- 74 total claims: 62 empirical, 9 consensus, 3 anecdote
- Verify coverage: 100% (0 unverified)
- HIGH rate: 32% (20/62 empirical) — highest of any batch; previous batch was 21%
- MEDIUM rate: 48%
- LOW rate: 19%

### Saturation
- Angles 2, 3, 5: saturated (3/5 = 60% — consistent with prior batches)
- Angle 1: NOT saturated — active learning + Bayesian experimental design traditions returned no LLM-specific results; grey lit null
- Angle 4: NOT saturated — write discipline failure rate is an open empirical gap; no study measures this

### Quality issues caught by adversarial verify
1. **FABRICATED SHAP values** (ambig-swe-shap-question-types, LOW): paper arXiv:2502.13069 does not use SHAP analysis; values invented. Impacts: removes one data point from intake question type ranking. Mitigation: three-tier intake ordering is still supported by other HIGH findings.
2. **Wrong citations** (multi-turn compliance, over-asking adversarial finding, active-compression comparison): statistics from different papers mislabeled to cited sources. All caught by verify as LOW.
3. **Scope inflation** (several claims): added domains or model families not in original study. Common pattern across batches.
4. **Internal inconsistency** (SRD Qwen claim): 90pp gap claimed vs 50pp in paper; companion claims internally inconsistent on commission compliance percentage.

### Batch size assessment
5 angles, 74 claims: at upper end of 4-5 angle constraint. Depth was appropriate — all 5 angles had clear provisional decisions to close. Verify phase caught high-value fabrications. Recommend maintaining 4-5 angle constraint for batch 5.

---

## Step 4d — Synthesis gate check

Batch 5 requires ≥1 batch 4 cluster synthesized before launch.

**Recommended synthesis cluster: Angle 3 (Instruction count as kit complexity budget)**
- 8 HIGH findings (richest cluster in batch 4)
- Most directly applicable to Hard Rule 13 rule density element
- Three degradation patterns provide architecture-grade design guidance
- KBV + compliance gap findings have broad applicability across kit elements

Alternative synthesis cluster (if angle 3 synthesis is too narrow): Batch 4 cluster synthesis across all omission-related findings (angles 3+5 combined — instruction count drives omission failure; quality metrics must compensate).

**Synthesis gate status: OPEN — synthesis required before batch 5 launches**

---

## Immediate HIGH findings applied to kit files

All applied inline in ENTRYPOINT.md (see edit log below). No discovered work items from this batch beyond what's already in the P0/P1 new angle list above.

| Finding | File updated | Failure shape addressed |
|---------|-------------|------------------------|
| Reversibility gate independent of uncertainty | ENTRYPOINT.md element 8 | "Agent confirms before uncertain-only actions, misses confident-but-irreversible actions" |
| Two-factor gate + tool metadata hardcoding | ENTRYPOINT.md element 8 | "Agent infers reversibility at runtime at 47-67% accuracy" |
| Model-tier-specific rule density ceilings | ENTRYPOINT.md rule density | "Non-reasoning kit appears compliant until n=10 rule threshold then sudden collapse" |
| Behavioral vs declarative instruction distinction | ENTRYPOINT.md rule density | "Kit behavioral rules (action-type) have near-zero compliance regardless of count" |
| KBV: rule restatement ≠ compliance check | ENTRYPOINT.md rule density | "Kit quality check asks model to restate rules — model says rules correctly while violating them" |
| Omission-weighted metrics + judge limitations | ENTRYPOINT.md Phase 7 | "LLM judge calls task complete after missing required elements (partial → yes)" |
| External register for ≥10-step workflows | ENTRYPOINT.md domain-conditional checklist | "Long-horizon workflows rely on in-context tracking that collapses at 10+ steps" |

Max batch size constraint: 4-5 angles. This batch (5 angles) was at the top of the range. Batch 5 should have ≤4 angles unless the research saturation is very high (batch 4 had 2 unsaturated angles — angle 1 and 4 could be batch 5 P0 candidates for follow-up).
