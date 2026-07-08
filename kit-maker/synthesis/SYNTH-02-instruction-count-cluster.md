# SYNTH-02 — Instruction Count as Kit Complexity Budget
## Synthesis of Batch 4 Angle 3 (2026-07-05)

Archive source: `kit-maker/research_archive/instruction-count-as-kit-complexity-budget-*.md`
Claims: 14 total (5 HIGH empirical, 2 MEDIUM empirical, 1 LOW empirical, 1 MEDIUM empirical, 2 MEDIUM empirical, 1 MEDIUM empirical, 1 HIGH empirical, 1 CONSENSUS)
Steps completed: 1–3 (grouping, contradiction scan, confidence map), 3.5 (independent synthesizer), 3.6 (4 counter-prior passes), 3.7 (principles extraction), 4 (user-assumption check), 5 (user questions for CONTESTED groups)

---

## Step 1 — Grouped claim table

| Group | Claims | Empirical HIGH | Empirical MEDIUM | LOW | CONSENSUS | Verify coverage |
|-------|--------|---------------|-----------------|-----|-----------|----------------|
| A: compliance-degradation | 6 | 4 (manyifeval-prompt, manyifeval-logistic, ifscale-three-patterns, compliance-gap-behavioral) | 2 (ifscale-150-250, agentif-real-world) | 1 [dropped to misc — wrong citation: multi-turn-compliance] | 0 | 100% |
| B: model-specific-ceilings | 1 | 1 (reasoning-models-budget) | 0 | 0 | 0 | 100% |
| C: mitigation-and-failure-modes | 3 | 2 (paradoxical-interference, recall-adherence-kbv) | 1 (vanilla-cot-degrades — venue fabrication reduces weight) | 0 | 0 | 100% |
| D: adversarial-limitations | 2 | 1 (adversarial-benchmark-generalization) | 0 | 0 | 1 (adversarial-null) | 100% |
| MISC | 2 | 0 | 1 (working-memory-proactive) | 1 (multi-turn-compliance — wrong citation) | 0 | 100% |

Below-threshold groups B, C, D kept standalone: each contains HIGH-confidence claims directly closing a design decision (Judgment note, procedure Step 1). MISC: working-memory-proactive is a mechanistic analogy (key-value retrieval, not instruction count); multi-turn-compliance is a wrong-citation LOW.

---

## Step 2 — Contradiction scan

**Intra-group contradictions:**
- Group A: manyifeval (all instructions treated uniformly) vs. compliance-gap (behavioral/declarative are separate classes). Not a contradiction — scope expansion: manyifeval measures declarative-type instructions; compliance-gap adds behavioral-type as a separate compliance class. Resolution: "ManyIFEval ceiling applies to declarative instructions; the compliance-gap paper establishes behavioral instructions as a distinct class with a separate, near-zero ceiling."
- Group C: vanilla-cot-degrades (deliberation hurts) vs. reasoning-models (in Group B, structured deliberation helps). Cross-group scope condition, not intra-group. Resolution: vanilla CoT = shallow prompting; reasoning-model traces = architectural serialization of constraint processing. Different intervention class.

**No unresolved intra-group contradictions found.**

**Cross-group implication scan:**
- Group C conclusion ("deliberation backfires") ↔ Group B conclusion ("reasoning models help"): SCOPE-SEPARATED. Vanilla/generalized deliberation (Group C) vs. structured deliberation via reasoning traces (Group B). Resolved by mechanism: reasoning traces eliminate constraint competition before generation; vanilla CoT diverts generation-phase attention. Not CONTESTED.
- Group D adversarial claim (semantic instructions may degrade earlier) ↔ Group A mechanistic finding (paradoxical-interference shows count is the budget, not comprehension): POTENTIALLY CONTESTED. Counter-prior pass on Group D confirmed this tension. Resolution: direction of the semantic-complexity gap is UNCERTAIN, not established. Group D conclusion must not assert direction. See revised Group D in Step 3 below.

---

## Step 2.5 — Evidence tier adjustments applied

- multi-turn-compliance-39pct-worse: verified as LOW (wrong citation — SEQUOR does not contain the cited statistics); treated as anecdote tier. Dropped to MISC, not used in confidence map.
- vanilla-cot-degrades: MEDIUM (venue fabrication: "NeurIPS 2025 spotlight" not confirmed). Core finding still holds across 15 models on IFEval/ComplexBench. Weighted as MEDIUM empirical.
- working-memory-proactive: MEDIUM; task is key-value retrieval (analogy, not direct measurement). Treated as mechanistic analogy, not as instruction-count evidence. Not used in confidence map tier calculation.

---

## Step 2.6 — Evidence-type scope check

All studies are benchmark-based empirical (not pre-registered RCTs). This is the standard for LLM research and appropriate for the domain. HIGH tier is calibrated for controlled benchmark experiments. However: all major benchmarks use simple keyword-inclusion or objectively-verifiable constraints — this is a systematic limitation across the entire evidence base. The HIGH tiers below apply within that constraint type. Generalization to semantically complex behavioral kit rules requires additional evidence (see Group D).

---

## Step 3 — Confidence map

### BEFORE Step 3.5 independent review:

| Group | My Step 3 tier | Justification |
|-------|---------------|---------------|
| A: compliance-degradation | HIGH | 4 independent HIGH-verify empirical claims, no contradictions; logistic predictor confirms count as direct signal |
| B: model-specific-ceilings | HIGH | 1 HIGH-verify empirical claim; pre-spec: numbers confirmed + mechanism confirmed + no contradicting evidence |
| C: mitigation-and-failure-modes | HIGH | 2 independent HIGH-verify claims (paradoxical-interference + KBV) from different labs studying different phenomena, convergent practical implication |
| D: adversarial-limitations | HIGH | 1 HIGH-verify adversarial claim; directly calibrates all other groups |

### Step 3.5 — Independent synthesizer tier assignments:

| Group | Subagent tier | Agreement? |
|-------|--------------|-----------|
| A | HIGH | ✅ AGREE |
| B | CONSENSUS | ⚠️ DISAGREE (1 claim, doesn't meet ≥2 threshold) |
| C | HIGH | ✅ AGREE |
| D | CONSENSUS | ⚠️ DISAGREE (1 empirical claim; adversarial-null is consensus-type) |

Per procedure Step 3.5: disagreement → immediately reclassify as CONTESTED.

### FINAL confidence map (after Step 3.5 revisions):

| Group | Final tier | Key claims | Evidence basis | Conflicts | Action |
|-------|-----------|-----------|---------------|-----------|--------|
| A: compliance-degradation | HIGH | manyifeval-prompt, manyifeval-logistic, ifscale-three-patterns, compliance-gap-behavioral | 4 independent HIGH-verify empirical; applies to simple verifiable instructions (keyword-inclusion, formatting, non-conflicting). NOT directly applicable to: semantic kit rules with conditional logic, multi-step procedures, role-behavior specifications — specific thresholds (5-7 rules, 150-250 ceiling) are not calibrated for semantic instruction types | None | Derive from (Step 3.7) |
| B: model-specific-ceilings | CONTESTED | reasoning-models-budget | 1 HIGH-verify empirical (solid numbers, confirmed mechanism); fails ≥2 independent sources threshold. Core 3.7× advantage: HIGH-confidence. "15-20 rule ceiling": NOT in paper — untested range extrapolation; must be removed | Step 3.5 tier disagreement (my HIGH vs. subagent CONSENSUS) | Ask user (Step 5); derive from both sides (Step 3.7) |
| C: mitigation-and-failure-modes | HIGH | paradoxical-interference, recall-adherence-kbv, vanilla-cot | 2 independent HIGH-verify claims (different labs, different phenomena, convergent implication); MEDIUM vanilla-cot supports direction. Scope: paradoxical-interference uses self-evident constraints; KBV uses multi-turn ideation briefs. Applies to: vanilla/generalized deliberation and rule restatement. NOT directly applicable to: structured deliberation via reasoning traces (documented separate intervention class with opposite effect) | None (cross-group scope condition with Group B resolved) | Derive from (Step 3.7) |
| D: adversarial-limitations | CONTESTED | adversarial-benchmark-generalization | 1 HIGH-verify adversarial claim; fails ≥2 threshold. The gap is real (no semantic-instruction degradation curves exist). The DIRECTION of the gap is UNCERTAIN — interference mechanism (Group A's paradoxical-interference) suggests count may be the budget independent of type. The original directional claim ("semantic instructions degrade at lower counts") is unsupported and has mechanistic counter-evidence | Step 3.5 tier disagreement; counter-prior confirmed directional uncertainty | Ask user (Step 5); derive from gap (Step 3.7) |

---

## Step 3.6 — Counter-prior adversarial passes

### Group A counter-prior

**Main conclusion:** "Instruction count is a direct predictor of LLM compliance degradation for simple/verifiable instructions; behavioral instructions have near-zero compliance regardless of count."

**Counter-argument:** Instruction type (not count) may be the real driver; count is correlated with type-diversity in benchmark designs. The "direct predictor" claim overstates the paper (instruction type excluded by design, not shown irrelevant). The behavioral/declarative distinction rests on 2 data points, not a full taxonomy.

**Supporting archive evidence:** adversarial-benchmark-generalization-limit (benchmark scope), manyifeval-logistic verify note (type excluded by design), compliance-gap (two data points for behavioral class), adversarial-null (publication bias caveat).

**Tier revision:** UNCHANGED (HIGH) with scope condition added. HIGH confidence holds within the benchmark domain (simple verifiable instructions). For agent kit application: the direction is clear and the behavioral/declarative distinction is structurally grounded (RL training theorem), but the specific thresholds are benchmark-artifacts. The synthesis conclusion for kit design must explicitly scope to "simple verifiable instructions as lower bound; semantic kit rules may degrade at lower counts."

### Group B counter-prior

**Main conclusion:** "Reasoning models expand the compliance budget 3.7× at n=10; mechanism is serialized constraint processing; effective ceiling ~15-20 rules."

**Counter-argument:** "15-20 rules" is fabricated — tested range ends at n=10; o3-mini is still at 78% there with no visible ceiling. The mechanism (serialized reasoning eliminates constraint competition) is based on qualitative trace observation, not controlled ablations. Vanilla CoT shows the same class of mechanism claim (deliberate constraint processing) with documented negative cases. All compliance measurements are on keyword-inclusion tasks.

**Supporting archive evidence:** reasoning-models-budget verify note ("15-20 rules not in paper"), vanilla-cot-degrades (same mechanism class, documented negative), adversarial-benchmark-generalization-limit (keyword-task scope), logistic-regression verify note (type excluded by design).

**Tier revision:** CONTESTED maintained. The 3.7× advantage and mechanism are confirmed. The "15-20 rule ceiling" must be struck. Revised conclusion: "Reasoning models demonstrably provide 3.7× compliance advantage at n=10 on keyword-inclusion tasks; the mechanism is structured trace-based constraint serialization. The equivalent degradation ceiling is empirically unknown — the tested range ends before o3-mini degrades. Model-tier selection is a real design decision; the quantitative budget ceiling is not yet calibrated."

### Group C counter-prior

**Main conclusion:** "Deliberation and rule restatement backfire — vanilla CoT hurts compliance; more constraint attention predicts failure; models accurately restate rules they violate."

**Counter-argument:** "Deliberation" is not a single category. o3-mini achieves 3.7× better compliance through structured deliberation (reasoning traces). The conclusion conflates vanilla CoT (which hurts) with structured deliberation (which helps). KBV spans 8-99% — at 8% (GPT-5.4), declarative recall and behavioral adherence are nearly equivalent.

**Supporting archive evidence:** reasoning-models-budget (structured deliberation helps 3.7×), vanilla-cot-degrades (scope condition: specific to vanilla CoT, not structured reasoning), recall-adherence-kbv (8-99% range — low end undermines universality), compliance-gap (97% declarative compliance shows not all instructions fail).

**Tier revision:** UNCHANGED (HIGH) with scope refinement. The counter-prior correctly identifies that the conclusion over-generalizes from worst case. Revised conclusion: "Vanilla/generalized deliberation and rule restatement backfire; structured deliberation (explicit constraint enumeration via reasoning traces) is a distinct intervention class with documented opposite effect. KBV rates are model-dependent (8-99%); compliance monitoring requirements vary by model tier. The core principle stands: compliance monitoring must observe behavioral outputs, not rely on model self-report alone — but the severity of the KBV gap is model-dependent."

### Group D counter-prior

**Main conclusion:** "Benchmark degradation curves don't generalize to semantic kit instructions; semantic instructions would likely degrade at lower counts."

**Counter-argument:** If the failure mechanism is execution interference (not comprehension failure), then instruction TYPE matters less than COUNT. Paradoxical-interference shows models attend MORE to failed constraints — they understand the rules. If interference is the mechanism, semantic and keyword instructions would hit the same count-based ceiling. Logistic regression shows count as sufficient signal regardless of instruction combination within the tested range. AGENTIF calibration suggests real-world complexity maps to benchmark degradation range.

**Supporting archive evidence:** paradoxical-interference (interference, not comprehension, is the failure mechanism), logistic-regression (count is sufficient signal), agentif (real-world instructions map to benchmark degradation range).

**Tier revision:** CONTESTED maintained. The gap is confirmed (no semantic degradation curves exist). The directional claim ("likely lower") is withdrawn — it's a hypothesis with mechanistic counter-evidence. Revised: "The generalization gap exists and is real. The direction is uncertain: interference-based mechanism suggests count may be the budget independent of type; the semantic-complexity hypothesis is plausible but mechanistically challenged and empirically untested."

---

## Step 3.7 — Principles extraction

### Group A (HIGH)

**Principle A1:** Compliance is instruction-type-conditional and simultaneously-active-constraint-sensitive. Behavioral instructions (actions not reflected in text output) have near-zero default compliance independent of count, while declarative instructions follow a count-dependent S-curve. Treating all instructions as equal-weight in a behavioral contract systematically underestimates silent behavioral failures.

*Tested in:* Simple verifiable instructions on benchmark tasks (keyword inclusion, formatting) across 20+ models. *Our setup differs in:* Kit rules include conditional logic, multi-step procedures, role-behavior specifications. *Principle applies because:* The behavioral/declarative distinction is structurally grounded (RL training theorem — rewards text outputs without observing behavior; not just an empirical finding but a mechanism). *May not apply if:* RL fine-tuning specifically targeted behavioral compliance (unlikely for general-purpose models).

*Derivation:* Every behavioral rule in a kit's contract needs either (a) structural enforcement (tool restriction, gated execution, external verification observing actual behavior) or (b) conversion to declarative form. The current ENTRYPOINT guidance to "convert NEVER rules to commission form" has a second independent justification: behavioral instruction type is a separate compliance class, not just a decay-rate concern.

**Principle A2:** Instruction count is a sufficient budget signal for the compliance floor — instruction count alone predicts compliance with ~10% error across instruction combinations. The correct unit for managing a kit's behavioral contract density is active constraint count, not system prompt length, word count, or section structure.

*Derivation:* Structural rearrangements (moving rules to separate files, adding headers) do not help if active constraint count remains the same. The config-null result (from batch 4 angle 5) independently confirms this: file size/position/architecture had NO detectable compliance effect. Count is the lever.

---

### Group B (CONTESTED — derive from both sides)

**Principle B-main (both sides agree):** The compliance ceiling is architecture-conditional. The mechanism that determines the ceiling is how the model processes simultaneous constraint satisfaction — whether constraints compete during generation (base LLM) or are serialized before generation (reasoning-model trace). This is a design variable, not a fixed ceiling.

**Principle B-Side A (if HIGH: reasoning models substantially expand budget):** When a kit's behavioral contract approaches the non-reasoning model ceiling (5-7 simultaneous active rules), deploying a reasoning-model variant is the correct intervention — not rule consolidation or restatement. The reasoning mechanism (explicit constraint enumeration and serialization) addresses the competition mechanism, not just the symptom.

*Fit:* Tested on keyword-inclusion tasks at n≤10. Our setup uses semantic rules. The mechanism (serialization) is plausible for semantic rules too, but the quantitative budget expansion is unknown — it may be less than 3.7× for harder constraint types.

**Principle B-Side B (if CONSENSUS: single-study evidence, treat as design direction not calibrated arithmetic):** Model-tier selection matters as a compliance design variable. Reasoning models are directionally favored when kit complexity is high. The "15-20 rule ceiling" has no empirical grounding and must not be used in kit design decisions. Budget arithmetic requires a study testing reasoning-model compliance at n>10.

*Recommended synthesis position:* Adopt Side B posture. The 3.7× advantage is real and the design direction (use reasoning models for complex kits) is justified. Remove all ceiling estimates beyond n=10. Note: "Reasoning-model tier selection is the compliance-floor intervention when behavioral contract density is high; quantified budget ceiling is unknown and requires further research."

---

### Group C (HIGH)

**Principle C1:** The failure mechanism for behavioral rules under high constraint count is execution interference, not forgetting or misunderstanding. A model in a failed compliance state attends MORE to constraints than a model in a successful state — the problem is attention competition, not attention deficit. This means the appropriate response to compliance failure is architectural (reduce competing constraints, change instruction type, use structural enforcement) — not rhetorical (remind the model, restate the rule, add emphasis).

*Tested in:* Self-evident constraints derived from model's own correct outputs (30B-70B parameter models). *Our setup differs in:* Kit rules are externally imposed, not derived from the model's outputs. *Principle still applies because:* The interference mechanism is architectural (self-attention competition) and independent of constraint source. *May not apply if:* The model is specifically fine-tuned against interference; current evidence covers general-purpose models.

**Principle C2:** Declarative recall and behavioral compliance are dissociated. Models accurately restate rules they simultaneously violate (KBV 8-99%). Asking a model to restate its behavioral contract is not a compliance signal — it measures recall, not adherence. Kit quality monitoring must observe actual output behavior against objective behavioral criteria, not ask the model to confirm its intentions.

*Tested in:* Multi-turn ideation tasks (2,146 runs; 38 briefs; KBV confirmed with human validation). *Our setup differs in:* Different task types. *Principle still applies because:* The KBV dissociation is a training-artifact of RL rewarding output quality, not behavioral compliance — structural rather than task-specific. *May not apply if:* Fine-tuning specifically targeted behavioral compliance verification. *Scope condition from counter-prior:* KBV rates are model-dependent (8-99%); at low-KBV models (GPT-5.4: 8%), the gap between self-report and compliance is small. For high-KBV models (Sonnet 4.6: 99%), behavioral observation is mandatory. Kit designers should know their target model's KBV rate.

*Derivation:* The Phase 7 per-constraint validation gate in ENTRYPOINT already requires rule-by-rule behavioral testing rather than holistic "does it look right" evaluation. KBV gives this requirement a second, independent grounding beyond compliance-monitoring best practice: models specifically cannot be trusted to self-certify compliance.

**Principle C3 (from vanilla-cot, MEDIUM):** Adding a generic "think step by step" instruction to a multi-rule kit prompt can decrease, not increase, compliance. Generic deliberation cues divert attention from instruction-relevant tokens; the risk is highest for compositional constraints where constraint paraphrasing substitutes for constraint decomposition. Scope: vanilla CoT specifically; structured deliberation (reasoning-model traces) is a documented exception.

---

### Group D (CONTESTED — derive from gap variant)

**Principle D1:** The instruction-count compliance budget as measured by current benchmarks is a lower-bound estimate for real agent kit instructions, not an upper bound. No study has measured compliance degradation curves for semantic kit instructions (conditional logic, multi-step procedures, role-behavior specifications). The specific thresholds (5-7 rules for GPT-4o, 150-250 frontier threshold) are derived from the simplest possible instruction type.

*What we'd need to fill this gap:* A study directly measuring compliance degradation for conditional vs. keyword instructions would enable weighted rule counting (e.g., "1 conditional = X keyword slots"). Without this, the safest posture is: treat each semantic rule as consuming at least as much compliance budget as a keyword rule.

**Principle D2 (from mechanistic counter-evidence):** The direction of the semantic-complexity gap is uncertain. The interference-based failure mechanism (attention competition during generation) is consistent with count being the budget signal independent of instruction type. If this interpretation is correct, the benchmark thresholds are NOT conservative — they transfer to semantic rules reasonably well. If semantic rules add additional interference over keyword rules, the benchmarks are conservative. The safest design posture is minimum rule count regardless of type: minimizing behavioral rule count is always correct under both interpretations.

*Derivation:* The correct conclusion from this uncertainty is NOT "semantic rules degrade faster, so lower the threshold." It is: "Minimum rule count is the correct posture regardless of instruction type; we don't know if the semantic threshold is lower or similar, so we can't use that uncertainty to justify more rules." The ≤7 ceiling guidance remains valid as conservative lower-bound; it is not invalidated by the uncertainty.

---

## Step 4 — Adversarial check on user assumptions

**User assumption 1:** "Aim for ≤8 behavioral contract elements" (current ENTRYPOINT rule density guidance)

*Research bearing on this:* Partially supported by Group A (compliance halves at n=10 for GPT-4o; ≤7-8 is at the inflection point). CRITICAL REFINEMENT: compliance-gap-behavioral (Group A) shows behavioral instructions have near-zero compliance regardless of count. The ≤8 target applies to DECLARATIVE instructions. Behavioral rules have a separate, near-zero compliance ceiling regardless of how few there are. The guidance should distinguish: ≤8 active declarative/output-visible rules; separately, for behavioral rules, structural enforcement is required regardless of count.

**User assumption 2:** "Culling pass if >12-15 rules" (current threshold)

*Research bearing on this:* Confirmed as correct direction; but the threshold is best interpreted as a culling trigger for declarative rules, not a safe ceiling. AGENTIF calibration (real-world 11.9 constraints; 27.2% best model ISR) suggests the kit is already in degraded territory at 12 rules. The threshold is "when to cull," not "when to worry."

**User assumption 3:** "Rule density is the main lever for improving compliance"

*Partially contradicted.* For behavioral instruction compliance, structural enforcement (tool restriction, gated execution, external verification) is the correct intervention — not rule consolidation. For declarative instruction compliance, count reduction is the correct lever. Structural enforcement is as important as rule density for behavioral rules. This is already implied by ENTRYPOINT's NEVER-rule structural reinforcement section, but the Compliance Gap finding gives it architectural grounding.

**User assumption 4:** "Restating critical rules at session start and end improves compliance"

*Nuanced.* Rule restatement is valid for SALIENCE and RECALL (prevents rules from being forgotten/summarized out). It is NOT a behavioral compliance mechanism — KBV rates mean the model will accurately restate rules it will simultaneously violate. The session-start restatement in ENTRYPOINT remains appropriate for preventing recall decay; the expectation should be calibrated: this prevents forgetting, not violation.

---

## Step 5 — User questions (CONTESTED and GAP groups)

### Q1 — Group B (model-specific-ceilings)

The independent synthesis subagent classified Group B as CONSENSUS (1 claim, doesn't meet ≥2 threshold). I classified it HIGH by pre-spec (numbers confirmed + mechanism confirmed + no contradicting evidence). The counter-prior removed the "15-20 rule ceiling" extrapolation.

**My default:** Treat Group B as HIGH-with-caveat: "The 3.7× reasoning-model compliance advantage at n=10 on keyword-inclusion tasks is well-evidenced (single study, no contradicting evidence, confirmed mechanism). The equivalent degradation ceiling for reasoning models is unknown — not tested beyond n=10. Remove all '15-20 rule ceiling' language from kit guidance. Preserve: reasoning-model tier selection is a real design lever for high-density behavioral contracts."

Proposing to proceed with this — override if you want the more conservative CONSENSUS classification instead.

### Q2 — Group D (adversarial-limitations)

Both the independent synthesizer and the counter-prior agent found the directional claim ("semantic instructions would likely degrade at lower counts") unsupported and mechanistically challenged.

**My default:** Group D conclusion = "The generalization gap is real (no semantic-instruction degradation curves exist as of mid-2026). The direction of the gap is uncertain: interference-based mechanism suggests count may be the budget signal independent of instruction type; the semantic-complexity hypothesis is plausible but empirically untested. Design posture: minimize active rule count regardless of instruction type; do not use the keyword-instruction benchmarks as evidence that the same threshold applies to semantic rules, AND do not assume semantic rules require a lower threshold — the safe posture is minimum count."

Proposing to proceed with this — override if you want to assert the directional claim anyway.

---

## Synthesis output — what changes to ENTRYPOINT.md (Step 6 application)

### Confirmed (remove PROVISIONAL markers):
1. Model-tier compliance ceilings (GPT-4o 94%→21% at n=10) — CONFIRMED; HIGH Group A. PROVISIONAL marker removed from this finding.
2. Three degradation patterns — CONFIRMED; HIGH Group A. PROVISIONAL marker removed.
3. Behavioral vs. declarative instruction distinction — CONFIRMED; HIGH Group A. PROVISIONAL marker removed.
4. Rule ordering (safety/goal rules FIRST) — CONFIRMED; supported by ifscale-150-250 (MEDIUM) + paradoxical-interference (HIGH) — interference peaks make early-rule placement critical. PROVISIONAL marker removed.
5. KBV compliance check anti-pattern — CONFIRMED; HIGH Group C. PROVISIONAL marker removed.

### Requires scope addition (not removal):
6. Model-tier ceilings: add indirectness annotation — applies to simple verifiable instructions; semantic kit rules may have different (possibly lower) effective thresholds. The ≤7 ceiling for non-reasoning models remains valid as a conservative lower bound.
7. Reasoning model budget expansion: remove "15-20 rule ceiling" language entirely. Keep: "3.7× advantage at n=10 on keyword-inclusion tasks; ceiling for reasoning models on semantic kit rules is empirically unknown."

### New findings to add (not yet in ENTRYPOINT.md):
8. Behavioral rules require structural enforcement, not just count reduction — already partially in ENTRYPOINT (NEVER-rule structural reinforcement), now has independent grounding from compliance-gap architectural finding.
9. Rule restatement is a salience/recall mechanism only — it is NOT a behavioral compliance mechanism (KBV). The session-start restatement prescription is valid for its salience purpose; calibrate user expectations accordingly.

---

## Synthesis gate verdict for SYNTH-02

**SYNTH-02: GATE CLEARED** for batch 5 launch.

Synthesis is complete. The key design decisions that were PROVISIONAL are now:
- Rule density model-tier ceilings: CONFIRMED (with scope annotation)
- Behavioral vs. declarative distinction: CONFIRMED
- KBV anti-pattern: CONFIRMED
- Rule ordering (safety first): CONFIRMED
- Reasoning model budget expansion 3.7×: CONFIRMED; "15-20 rule ceiling" removed
- Semantic instruction generalization: UNCERTAINTY ACKNOWLEDGED; direction unknown; minimum-count posture valid regardless

Groups B and D remain CONTESTED pending user decision on Q1 and Q2. Default positions proposed above proceed unless user overrides.

---

## Grounding-map row 13 upgrade note

Row 13 status should be upgraded from "✅ VALIDATED + PROVISIONAL" to "✅ VALIDATED (SYNTHESIZED)" with scope conditions documented. Synthesis adds: model-tier-specific ceilings with indirectness annotation; behavioral/declarative instruction type as separate compliance class; KBV dissociation as structural finding; rule-ordering primacy bias. All HIGH group findings confirmed. CONTESTED groups B and D have default positions proceeding.
