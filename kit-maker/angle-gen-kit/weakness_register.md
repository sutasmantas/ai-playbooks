# weakness_register.md — What This Kit Cannot Reliably Do

**Purpose:** Honest accounting of structural limitations. Users who see limitations can compensate; users who believe the kit is complete cannot. This register is the trust mechanism.

**Update rule:** Add an entry when a limitation is discovered in use. Do not delete entries — supersede them with evidence if a limitation is resolved.

**Entry types:**
- **EVIDENCE-BASED:** The limitation is grounded in a specific research finding
- **EVIDENCE-BASED — GAP:** The limitation exists because no study has answered the relevant question
- **HEURISTIC:** The limitation is observed in practice but lacks empirical backing

---

## Weakness 1 — Vocabulary-tradition discovery limit (EVIDENCE-BASED)

**What the kit cannot do:** When the only vocabulary-tradition bootstrap is LLM enumeration (no survey paper, no external anchor), the kit cannot reliably surface vocabulary traditions the LLM has not encountered in training.

**Why this is structural, not a prompting problem:** Vocabulary mismatch research establishes >80% mismatch probability for cross-tradition information search (Furnas 1987; Tetzlaff/Sampson 137 systematic reviews). The mechanism is that you cannot search for what you cannot name. An LLM cannot enumerate traditions outside its training distribution regardless of how the enumeration prompt is written.

**Scope condition:** This weakness is most acute for cross-disciplinary topics spanning fields underrepresented in LLM training data. Topics well-represented in LLM training (major NLP/ML research areas) have higher vocabulary coverage — but this coverage cannot be verified without external signal.

**Partial mitigation:** The survey-paper bootstrap in intake.md (Source B) and the fallback protocol in intake.md Step 5. These reduce but do not eliminate the gap.

**What to watch for:** An angle list where all vocabulary traditions are variants of the same root term. Example: "LLM instruction following," "language model rule compliance," "transformer behavioral adherence" — three labels but one vocabulary cluster. This is the undetectable failure mode.

**Residual risk after mitigation:** SIGNIFICANT. If no survey paper exists and the LLM cannot enumerate the missing tradition, the kit produces a false-complete angle list with no observable sign of the gap.

**Evidence:** synthesis G1 derivation — vocabulary-mismatch HIGH; counter-prior pass 1 scope annotation.

---

## Weakness 2 — Pre-expansion gating gap (EVIDENCE-BASED — GAP)

**What the kit cannot do:** Reliably predict BEFORE running a query expansion whether that expansion will help (+13% recall average) or hurt (-9% recall average) for a given query.

**Why this matters:** The specificity gate in angle-generation.md Step 4 is a heuristic (no expansion for proper-noun-anchored or post-2023 niche queries). No study found a reliable classifier that predicts expansion benefit before execution. Feature-based gating approaches perform no better than the "never expand" baseline (A09 F2). Some queries will be over-expanded (adding noise) and some under-expanded (missing coverage) with no reliable pre-execution signal distinguishing them.

**Practical consequence:** The kit's expansion guidance is directionally correct (coverage-gap conditioning outperforms unconstrained expansion) but some individual query decisions will be wrong in ways that cannot be detected without running the query and comparing results.

**Residual risk:** MODERATE. The direction is correct; the per-query calibration is imperfect.

**Evidence:** synthesis Step 6 Gap 1; query-expansion-mechanics HIGH (G8) — -9% to +5.1% variance range; SIGIR 2025 gating failure finding (A09 F2).

---

## Weakness 3 — AI-agent confirmation bias magnitude unknown (EVIDENCE-BASED — GAP)

**What the kit cannot do:** Calibrate how aggressive the adversarial angle needs to be. The structural independence requirement (separate agent context for adversarial angles) is empirically grounded, but the required aggressiveness of the adversarial vocabulary is uncalibrated for technical research topics.

**What is known:** The ~10x amplification of confirmation bias in LLM-assisted search (CHI 2024) was measured on opinion-laden political/health topics in short (~45 minute) sessions. Technical research topics with lower prior-belief salience may show smaller amplification. The structural independence requirement survives this counter-argument (same mechanism), but the magnitude is unknown.

**Practical consequence:** The kit labels adversarial angles correctly (ADVERSARIAL-FLAGGED) but cannot specify how different the adversarial vocabulary needs to be from the confirmatory vocabulary to achieve structural independence in practice. The agent dispatching the adversarial angle must make this calibration judgment without empirical guidance.

**Residual risk:** MODERATE on magnitude calibration; LOW on structural direction (separation is required).

**Evidence:** synthesis counter-prior pass 3; synthesis Step 6 Gap 2; confirmation-bias HIGH (G3) scope annotation.

---

## Weakness 4 — Small-literature Boolean-connective test failure (EVIDENCE-BASED — CONTESTED)

**What the kit cannot do:** Automatically detect when the Boolean-connective test will produce false-positive synonymy flags for small literatures.

**The failure mode:** For topics with <20 papers on the subject, two genuinely distinct angles will both retrieve the same 15 papers. The Boolean-connective test correctly identifies that OR retrieval returns the same documents — but this reflects literature size, not angle redundancy. The test cannot distinguish these cases automatically.

**Mitigation in place:** angle-quality.md Gate 2 includes a small-literature exception requiring human judgment. But the kit cannot automatically detect when the exception applies — the agent must check estimated corpus size independently.

**Residual risk:** LOW with the human-judgment flag in place; risk materializes only if the flag is not applied when the literature is small.

**Evidence:** synthesis counter-prior pass 7 — "high Jaccard may reflect a small, authoritative literature rather than angle redundancy"; angle-quality HIGH (G7) scope annotation.

---

## Weakness 5 — Clinical/SE evidence transfer gap (EVIDENCE-BASED)

**What the kit cannot do:** Guarantee that specific recall percentages and threshold recommendations transfer to AI/technical research topics.

**Evidence base concern:** The majority of HIGH-confidence findings in the synthesis come from clinical medicine (PICO frameworks, multi-database recall thresholds, grey-literature bias quantification) and software engineering (grey-lit methodology). The 95% recall threshold from two structurally distinct sources is from Cochrane reviews of clinical RCTs — the equivalent for AI research topics is unmeasured.

**Principle-level vs. percentage-level confidence:**
- Principles are mechanism-grounded and transfer: vocabulary mismatch exists, confirmation bias exists, structural independence helps, single-source is incomplete.
- Specific percentages have medium confidence for AI topics: "95% recall" and "65% arXiv miss rate" are from specific contexts that may not reproduce exactly in AI research applications.

**Practical consequence:** The kit's structural requirements are defensible on mechanism grounds. Specific threshold claims (95% recall, 65% miss rate) should be treated as directional guidance, not precise predictions.

**Evidence:** synthesis Step 6 Gap 5; source-diversity HIGH (G4) scope annotation; platform-search-strategies HIGH (G6) scope annotations throughout.

---

## Weakness 6 — Single-session adversarial generation cannot substitute for structural separation (EVIDENCE-BASED)

**What the kit cannot do:** Enforce execution-time adversarial context separation. The kit labels angles correctly; it cannot control how the downstream research agent executes them.

**The residual gap:** The ADVERSARIAL-FLAGGED label communicates the structural independence requirement to the downstream agent. If the downstream agent ignores the label and executes all angles in the same session context, the structural independence requirement is violated — and the kit has no mechanism to prevent this. The confirmation-bias amplification effect (~10x for opinion-laden topics) applies to the entire angle batch if run in the same context.

**Who owns this risk:** The downstream research agent and the human overseeing it, not this kit. The kit's responsibility ends at correct labeling.

**Residual risk:** SIGNIFICANT if the downstream agent does not honor the ADVERSARIAL-FLAGGED label. LOW if it does.

**Evidence:** synthesis G3 derivation; structural-intervention-effectiveness CONSENSUS (G11) — structural separation is required, instructions overlaid on the same context are insufficient.

---

## Weakness 7 — Coverage gap conditioning assumption (HEURISTIC)

**What the kit cannot do:** Guarantee that coverage-gap conditioning prompts reliably produce vocabulary-diverse angles for an LLM working from a sparse input.

**The assumption:** The kit's Step 2 (coverage-gap conditioning generation) assumes the LLM can accurately identify which vocabulary tradition is NOT yet covered and generate angles from that tradition. But vocabulary-mismatch research shows >80% mismatch applies to humans WITH domain knowledge. An LLM at domain entry may be unable to generate content from vocabulary traditions it has never seen, regardless of how the coverage-gap prompt is framed.

**Evidence status:** No controlled study was found that demonstrates coverage-gap conditioning specifically overcomes LLM vocabulary-tradition blind spots (as opposed to recovering within-tradition diversity alone). The CCQGen principle (WSDM 2025, HIGH) demonstrates coverage-gap conditioning outperforms unconstrained expansion — but that study measured facet coverage within a tradition, not cross-tradition coverage.

**Fallback documented:** intake.md Step 5 and angle-generation.md Step 0 include the survey-paper bootstrap and explicit coverage-map gap flagging as partial mitigations.

**Residual risk:** MODERATE. The mechanism is plausible; the specific cross-tradition application is the strongest unsupported assumption in the kit.

**Evidence:** kit-plan.md "Strongest unsupported assumption" section; synthesis G8 CCQGen scope annotation.

**EMPIRICAL UPDATE — INT-10 2026-07-06:** FM4 triggered. Condition A (no kit) scored Q1=3 on LLM/AI research topic — the same frontier-model score achievable with the kit. Cross-tradition conditioning produces NEAR-ZERO DIFFERENTIAL on topics well-represented in LLM training data (LLM/AI research). Mechanism: FM4 — for heavily-represented training domains, frontier models enumerate vocabulary traditions via general intelligence; coverage-gap conditioning adds marginal signal only.

**EMPIRICAL UPDATE — INT-11 2026-07-08:** FM4 GENERAL confirmed. 22 inputs across standard/hard/edge in endurance sports science domain. Q1 Cond-A = 3.00 uniform (22/22). Q1 Cond-B = 3.00 uniform (22/22). Avg Q1 B-A = 0.00. All 5 vocabulary-trap Hard inputs (H1–H5, designed to predict Cond-A Q1 = 1) produced Q1 = 3 at baseline. FM4 is not domain-conditional: the Q1 ceiling applies to moderately-represented domains (sports science) as well as heavily-represented ones (LLM/AI). The prior claim "retains value for underrepresented domains" is UNVALIDATED — sports science was moderately represented and still produced Q1 = 3 at baseline. Requires INT-12 on a calibration-confirmed sparse domain (calibration Q1 ≤ 2 required before executing trial) before any domain-exception claim can be made.

**Validated kit value (INT-11 evidence):** Q7 avg Cond-B = 3.00 (structural completeness: null-hypothesis angle, adversarial separation, cross-disciplinary labeled — all present uniformly). BIN1 = 22/22, BIN2 = 22/22 (Gap 2 + Gap 5 fixes confirmed). A8 = 3 (longitudinal quality sustained across 10 sequential inputs). Q5 avg = 2.82, Q3 avg = 2.73. The kit adds structural completeness and formulation quality even when Q1 shows no differential.

**Status: EMPIRICALLY_TESTED (FM4 GENERAL confirmed INT-10 + INT-11; Q1 differential claim UNVALIDATED pending INT-12 sparse-domain calibration; Q7/Q5/Q3/BIN1/BIN2 value validated)**

---

**Trace:** vocabulary-mismatch HIGH (G1 — Weakness 1 mechanism; Furnas 1987 + Tetzlaff/Sampson evidence); query-expansion-mechanics HIGH (G8 — Weakness 2 gating gap; SIGIR 2025 A09 F2); confirmation-bias HIGH (G3 — Weakness 3 magnitude gap; CHI 2024 scope annotation); angle-quality HIGH (G7 — Weakness 4 small-literature J threshold); source-diversity HIGH (G4 — Weakness 5 evidence-transfer scope); structural-intervention-effectiveness CONSENSUS (G11 — Weakness 6 label-enforcement gap); kit-plan.md Strongest Unsupported Assumption (Weakness 7).
