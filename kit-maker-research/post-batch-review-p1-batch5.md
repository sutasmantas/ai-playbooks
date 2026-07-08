# Post-Batch Review — Batch 5 (2026-07-05)

3 angles, 50 claims, 35 empirical, 12 consensus, 3 anecdote.
Verify results: 10 HIGH / 18 MEDIUM / 7 LOW / 0 unverified.
HIGH rate: 20% (10/50). Lower than batch 4 (32%).

---

## Step 4a — New angle triage

17 angles surfaced across 3 archive files. Priority assignments:

**P0 (close open kit decisions this batch or next):**
1. **Distributional EVPI via hypothesis sampling for open-ended preference tasks** — BED-LLM (arXiv:2508.21184) → closes EVPI open-ended case; only tractable operationalization found so far
2. **Write omission rate as isolated metric** — no paper yet isolates write-skip from write-quality or retrieval failures; this is the direct missing measurement for the external register floor question
3. **Mandatory checkpoint writes vs agent-discretionary writes** — motivated by latent-state-persistence finding (2505.10571); closes kit mechanism design: fixed vs discretionary write scheduling
4. **Enforce annotation at registration vs infer at runtime** — closes whether kit builders must annotate every tool or whether trace-based inference (Contract2Tool) is viable at 90%+

**P1 (important; not blocking batch 6):**
5. Clarification timing window as kit config variable — Ask Early Ask Late VOI curves → parameterizable thresholds
6. Post-write verification effect on false success rate — post-write read-back to reduce false success (motivated by arXiv:2606.09863)
7. Net-negative crossover: task step threshold for external register net benefit
8. Compensation-link annotation — saga compensating-operation pointer as tool schema extension
9. Annotation staleness: how often static reversibility annotations become incorrect after system changes
10. Annotation enforcement architecture — required-field validation vs trusted-server model
11. Contrastive trajectory scoring for creative tasks — ARBOR validated for research synthesis; creative extension open

**P2 (lower priority):**
12. Capability dilution budget allocation for clarification-seeking modules
13. Rubric-absence criteria as design requirement for open-ended kit rewards
14. Reversibility annotation from distributed systems tradition to LLM tool kits (partial overlap with angle 3)
15. Multi-dimension interaction effects (reversibility + scope + idempotency combinations)
16. HCI commensurate effort empirical validation in agent contexts
17. Structured vs open-ended write discipline (schema-enforced output format effect on write compliance)

**Duplicate check:** P1 item 14 (reversibility from distributed systems) partially overlaps with angle 3 coverage (saga, HTTP, effect systems already researched). Lower priority confirmed.

---

## Step 4b — Decision closure per angle

**M-52 gate applied before each closure:** Verify notes scanned for: "extrapolation," "not in the paper," "beyond tested range," "assumes," "inferred."

**Claims flagged by M-52 gate — NEEDS-SYNTHESIS-CONFIRMATION (do NOT apply to ENTRYPOINT.md):**
- `information-gain-reward-structured` (LOW): Verify note: "41% fewer questions" and "GPT-5-level performance" cross-contaminated from CLARITI (arXiv:2604.14624), not in arXiv:2606.03135. → BLOCKED
- `proactivity-gap-supply-side` (LOW): Verify note: CLARITI and SAGE-Agent stats attributed to papers that don't contain them. → BLOCKED
- `rubric-generation-failure-modes` (MEDIUM): Verify note: RIFT percentages (32%/28%/24%) "appear to be fabricated or imported from an unidentified source" — not in arXiv:2604.01375. → BLOCKED (RRD numbers from arXiv:2602.05125 are confirmed; can apply RRD finding only)
- `false-success-silent-external-state-gap` (LOW): Verify note: "three-mechanism taxonomy is a fabricated characterization not derived from the source" — NOT in arXiv:2606.09863. → BLOCKED
- `cognitive-offloading-harmful-post-interruption` (LOW): Sources directly contradict the claim. → BLOCKED
- `pass1-pass8-single-run-unreliability` (LOW): Verify note: both key statistics are secondary citations from OTHER papers, not primary findings of the attributed sources. → BLOCKED
- `resilient-write-silent-failure-mechanisms` (LOW): Verify note: quantitative claims from LLM-generated estimates (Gemma 3 severity analysis), not controlled experiments. → BLOCKED

**7 of 35 empirical claims (20%) flagged by M-52 gate.** Process note: this rate is elevated vs batch 4. Common failure pattern: cross-paper contamination (numbers from paper A attributed to paper B) and taxonomies presented as paper findings when they are editorial synthesis.

---

### Angle 1 — EVPI generalization to open-ended tasks

**Decision: PARTIALLY CLOSED — structural resolution reached; creative-task case acknowledged as confirmed gap.**

Evidence map by task type:
- **Tool-use kits (discrete bounded action spaces):** CLOSED — TRUST (arXiv:2606.06976, HIGH): perplexity-based action-counterfactual validated; 11.47% When2Call improvement, 8.37% over GRPO. Requires bounded action spaces; continuous generation space is out of scope.
- **Structured QA kits:** CLOSED — Clarify DPO (arXiv:2410.13788, HIGH): future-simulation implicit counterfactual, 56% relative improvement over direct answers. Requires enumerable answer sets; authors explicitly state inapplicable to creative/subjective tasks.
- **Research synthesis kits:** CLOSED (proxy) — ARBOR (arXiv:2606.03239, HIGH) contrastive trajectory scoring and DeepRubric/DR-rubric (arXiv:2606.17029 + arXiv:2606.01091, HIGH) evidence-tree rubric construction. Neither provides formal EVPI; both provide reward-hacking-resistant quality signals for multi-hop QA and research tasks.
- **Creative writing kits:** CONFIRMED GAP — epistemic circularity is structural (consensus, arXiv:2606.03135 + arXiv:2602.11199 + arXiv:2605.07937): computing E[quality|clarification] - E[quality|no clarification] requires a quality model encoding user preferences, which is exactly what clarification is intended to reveal. BED-LLM (arXiv:2508.21184, MEDIUM) is the nearest candidate (distributional EVPI via hypothesis sampling) but not validated for creative quality. Queue P0 angle: Distributional EVPI via hypothesis sampling.

Additional scope findings for Element 8:
- `askbench-structured-scope-only` (HIGH): Authors explicitly state AskBench doesn't cover open-ended tasks.
- `adaptive-rubric-task-specific` (HIGH): AdaRubric validated for tool-use/web-navigation/code (structured outcome-verifiable tasks); not validated for preference-dependent tasks.
- `capability-dilution-clarification-cost` (MEDIUM): Clarification module is net-positive on simpler benchmarks but net-negative on complex ones (REAL benchmark: 32.1% → 19.2%). Budget allocation required.

**Kit implication (applying now as PROVISIONAL):** EVPI/action-counterfactual framework applies directly to tool-use kits and structured-schema kits. Research synthesis kits use contrastive trajectory proxy. Creative/design kits require a different operationalization — currently no validated approach; BED-LLM is P0 research.

**Scope conflict with batch 4 closure:** Batch 4 partially closed action-counterfactual operationalization as "structured schemas only." Batch 5 confirms this and adds: research synthesis kits have validated proxies; creative kits are confirmed gap. Element 8 can be updated to reflect this fuller picture.

---

### Angle 2 — Write discipline failure rate for external intention registers

**Decision: PARTIALLY CLOSED — CONTESTED cross-batch conflict; write failure characterization CLOSED; external register net-benefit NEEDS SYNTH-03.**

**CLOSED findings (apply now):**
- Write failure is primarily STRUCTURAL (tool selection/omission/sequence errors), NOT parametric (argument errors). `structural-write-failure-predicts-correctness-parametric-does-not` (HIGH): TSS=0.87 predicts correctness (90.2% vs 61.2%); AC=0.69 does not (r=0.12, p=0.31). 60% of first divergence events occur within first two pipeline steps.
- Write trigger depends on unreliable internal state. `write-trigger-depends-on-unreliable-internal-state` (MEDIUM): Agents lack architectural mechanisms for sustained internal state maintenance; cannot reliably know WHEN to issue an external write. Mandatory checkpoints required.
- Frontier models exhibit up to 19% meltdown rates at very-long horizons (arXiv:2603.29231, HIGH). Reliability rankings diverge substantially from capability rankings at longer horizons.
- Retrieval is the dominant bottleneck in agent memory systems; write strategy spread is only 3-8pp vs retrieval's 20pp (arXiv:2603.02473, HIGH). Kit builders over-engineering write operations while neglecting retrieval are solving the wrong problem.

**CONTESTED finding — DO NOT APPLY, FLAG AS SYNTH-03 REQUIRED:**
- `memory-scaffold-universally-hurts-long-horizon` (HIGH, arXiv:2603.29231): External memory scaffolds NEVER improve long-horizon reliability; hurt 6/10 models. Mechanism: per-step write overhead exceeds benefit at extended horizons.
- CONFLICTS WITH batch 4: OdysseyBench (arXiv:2506.06780, HIGH, batch 4) found external registers improve step completion (omission 75% → 45.61%).

**Possible resolution hypothesis for SYNTH-03:** The two findings may target different constructs:
- arXiv:2603.29231 tests an unbounded growing memory scratch pad (add_to_memory() + full scratchpad injection each turn)
- OdysseyBench tests a bounded structured task-state register (K≤6 bounded predicates, step-completion tracking)

Architectural distinction: unbounded scratch pad (net-negative) vs bounded predicate register (possibly positive). This distinction is NOT empirically validated in either paper and requires synthesis investigation.

**External register element status:** Mark as CONTESTED pending SYNTH-03. DO NOT remove the ≥10-step workflow recommendation from ENTRYPOINT.md; instead, add a CONTESTED marker referencing the batch 4 / batch 5 conflict.

---

### Angle 3 — Reversibility annotation taxonomy for kit tool schemas

**Decision: CLOSED (composite taxonomy, PROVISIONAL pending SYNTH-04).**

**No HIGH findings.** Best evidence is MEDIUM + multiple consensus/framework sources.

Composite taxonomy derived from converging evidence:

**Required dimensions (four-dimension schema):**
1. Reversibility (can effect be undone via compensating operation?) — Microsoft Agent Framework (consensus): reversibility as one of four independent approval dimensions
2. Idempotency (safe to retry without accumulating state?) — WorkOS + arXiv:2603.13404 (consensus): idempotency ≠ reversibility; orthogonal axes; both required
3. Scope-of-impact (who is affected: local / single-user / multi-user / external third parties / systemic) — from multiple sources (WebGuard, AgentRiskBOM, R-Judge)
4. Data sensitivity (PII, credentials, financial) — Microsoft four-dimension framework (consensus)

**Practical tiers (empirically grounded):**
- SAFE: no state modification; consequences immediately undone; no external context effect (WebGuard SAFE definition, empirical, 4,939 annotations)
- LOW: minor reversible consequences affecting only the individual user; no legal/financial/ethical risk (WebGuard LOW definition)
- HIGH: significant or irreversible consequences; may affect others; legal/financial/ethical risk (WebGuard HIGH, empirically validated — baseline frontier model achieves only 20% HIGH-risk recall without domain fine-tuning)

**MCP four-field vocabulary as deployment floor:** readOnlyHint / destructiveHint / idempotentHint / openWorldHint. Current MCP spec. Reversibility is not a direct field (only implicitly via destructiveHint). Three proposed extensions: reversibleHint, sensitiveHint, egressHint.

**Saga-pattern compensation-link as extension:** Annotate each tool with its compensating-operation pointer (which tool undoes this one). More operationally useful than a reversibility score alone.

**Key structural constraints:**
- Static annotations are necessary but insufficient — context-dependency failure is structural (what is reversible in one environment is irreversible in another). Static annotation determines default gate; runtime context determines active gate.
- Annotations MUST be required at registration, not optional. Optional annotation systems are observed to degrade to noise (MCP ecosystem analysis, anecdote).
- Deny-list for known-irreversible operations outperforms inference for Tier 3/HIGH-risk operations (Antigravity Lab, anecdote).
- Automated annotation inference via Contract2Tool is viable: 98% downstream task success with learned contracts (vs 99% gold-standard, MEDIUM).

**Implication:** ENTRYPOINT.md Phase 6 checklist should include reversibility annotation as a required element of kit tool schema, with the four dimensions and MCP-compatible vocabulary.

---

## Step 4c — Process review

**Confidence distribution:**
- HIGH: 10 (20%) — lower than batch 4's 32%
- MEDIUM: 18 (36%)
- LOW: 7 (14%) — elevated; see fabrication note below
- Consensus/anecdote (not verified): 15 (30%)
- Unverified: 0

**M-52 gate hit rate:** 7/35 empirical claims (20%) blocked by verify-note scope check. Common patterns:
- Cross-paper contamination: numbers from paper A cited as findings of paper B (CLARITI stats in arXiv:2606.03135; SAGE-Agent stats in the proactivity-gap claim)
- Fabricated taxonomies: percentages (32%/28%/24%) attributed to RIFT paper that doesn't contain them
- Three-mechanism taxonomies that are editorial synthesis presented as paper findings (arXiv:2606.09863)
- Source-contradicting claims: cognitive offloading paper directly contradicts the claim built on it

**Saturation rates:**
- Angle 1 (EVPI): NOT SATURATED — confirmed evidence gap for distributional EVPI on creative tasks. 30 queries run. Absence of evidence is confirmed, not just lack of search.
- Angle 2 (Write discipline): SATURATED (all three conditions)
- Angle 3 (Reversibility): SATURATED (all three conditions)

**Process improvement flag:** 20% fabrication/misattribution rate among empirical claims is notable. Possible root cause: angle 1 is a newer/less established research area where the research agent synthesized across papers more aggressively. Recommendation for batch 6: add explicit anti-synthesis instruction to the research agent prompt — "do not combine statistics from different papers into a single claim; each claim must be attributable to ONE primary source."

---

## Step 4d — Synthesis gate

**Synthesis candidates:**
- **SYNTH-03 (batch 5 angle 2 + batch 4 angle 4 cross-cluster):** Write discipline failure rate reconciliation — must resolve the OdysseyBench (external register positive) vs arXiv:2603.29231 (memory scaffold negative) conflict before batch 6 launches, because this directly affects the external register recommendation currently in ENTRYPOINT.md. Priority: REQUIRED before applying the full write discipline cluster.
- **SYNTH-04 (batch 5 angle 3):** Reversibility annotation taxonomy synthesis — consolidate 17 claims from 5 research traditions into a final annotation schema recommendation. Lower urgency; PROVISIONAL can remain until synthesis validates.

**Batch 6 gate condition:** SYNTH-03 must complete before batch 6 launches. SYNTH-04 can be deferred to post-batch 6.

---

*Written: 2026-07-05. Batch 5 post-batch review complete.*
