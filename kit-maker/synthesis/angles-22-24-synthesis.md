# Synthesis: Angles 22-24 — Kit Validation Methodology + Systematic Failure Modes
**Date:** 2026-06-30
**Archives:** validation-methodology-for-ai-behavioral-kits-how-to-verify-.md (14 claims) + systematic-failure-modes-and-edge-cases-that-kits-miss-robus.md (19 claims)
**Procedure:** research-synthesis.md (with Steps 2.5, 2.6, 3.5 active — PCR-167 version)

---

## Step 1 — Groups (combined across both archives)

| Group | Claims | Evidence breakdown |
|-------|--------|-------------------|
| kit-validation-methodology | 7 | 2 empirical HIGH, 2 empirical MED, 3 consensus — all target "how to test compliance" |
| model-reliability-gaps | 3 | 3 empirical (1 HIGH, 2 MED) — all from same paper (arXiv 2602.16666) — single-source caveat |
| llm-evaluation-validity | 4 | 1 empirical MED, 3 consensus |
| workflow-pattern-model-tier | 2 | 1 empirical HIGH + 1 empirical MED (same paper 2602.16666) |
| code-generation-robustness | 2 | 2 empirical MED — same paper (arXiv 2503.20197) |
| adversarial-robustness | 2 | 2 empirical MED — different sources |
| production-drift-monitoring | 5 | 0 HIGH, 3 MED, 2 LOW→consensus; PRIMARY SOURCE SYNTHETIC (arXiv 2605.01604) — treated as consensus |
| rule-testability-design | 3 | 1 empirical LOW→consensus, 2 consensus |
| misc | 4 | mixed — model-version-churn (anecdote), memory-security (consensus), reasoning-anchoring (MED with precision issues), self-assessment-failure |

---

## Step 2 — Contradiction scan

No direct factual contradictions found within either archive or between them.

**Implication-level tension:**
- `static-benchmark-dynamic-profiling` says "static assessment cannot capture behaviors" while `constraint-type-specificity` uses MOSAIC (a static benchmark) as its primary evidence.
- Scope explanation resolves this: static benchmarks are appropriate for capability measurement at a point in time; the dynamic-profiling critique targets continuous production monitoring, not capability benchmarking. These are distinct use contexts. **Not CONTESTED.**

---

## Step 2.5 — Evidence tier adjustments

Downgraded to consensus-for-synthesis (LOW-confidence empirical → consensus):
- `agentif-automated-agreement` (unverifiable binary PDF, no arXiv index)
- `enterprise-gap-general-vs-task-compliance` (anachronism: Claude Sonnet 4 + GPT-5 named in Dec 2025 submission)
- `benchmark-contamination-shelf-life` (blog source — treated as editorial consensus, not empirical)
- `distribution-collapse-invisible-to-accuracy` (explicitly synthetic data)
- `cascade-uncertainty-suppression` (explicitly synthetic data)
- `silent-tool-degradation` (explicitly synthetic data)
- `explanation-decoupling` (explicitly synthetic data)
- `standard-metrics-detection-failure` (explicitly synthetic data + internal contradiction between abstract and Table 1)

---

## Step 2.6 — Evidence-type scope check

Archive 1 (validation-methodology): TWO real peer-reviewed empirical papers (MOSAIC/EACL 2026, SIFo/EMNLP 2024) provide the HIGH-confidence anchor. Benchmark studies, not RCTs, but appropriate for this domain.

Archive 2 (systematic-failure-modes): Production-drift group (arXiv 2605.01604) is explicitly synthetic — worse than observational. The reliability group (arXiv 2602.16666) is real (ICML 2026) but a single study with one research group.

Overall: not primarily controlled-experiment evidence. HIGH-tier groups include scope caveat where relevant. The HIGH classifications are calibrated appropriately for this domain (benchmark/behavioral evaluation studies — RCTs are not the standard method).

---

## Step 3 — Confidence map (tiers updated 2026-07-05 from fresh-pass)

| Group | Tier | Key claims | Evidence basis | Conflicts | Action |
|-------|------|-----------|----------------|-----------|--------|
| kit-validation-methodology | **HIGH** (SCOPE: HIGH applies to multi-constraint evaluation involving semantic/lexical constraints; for kit validation contexts operatin) | constraint-type-specificity, sequential-instruction-universal-failure, non-determinism-repeat-testing, trajectory-assertion-over-output-assertion | 2 independent empirical: MOSAIC (arXiv:2601.18554, EACL 2026) + SIFo (arXiv:2406.19999, EMNLP 2024). Applies to: multi-constraint instruction following, multi-rule kits. NOT applicable to: single-constraint or trivially verifiable tasks. Evidence is benchmark-study (appropriate for this domain, not RCT). | none | Per-constraint testing required; repeat runs ≥3; trajectory assertions; dynamic test suites |
| workflow-pattern-model-tier | **HIGH (narrow)** (SCOPE: Failure rates are empirically measured only on 4B-parameter models (Llama 3.2, Qwen 3 4B); the ≤7B class boundary and th) | agentic-workflow-small-model-collapse | 1 HIGH-verify empirical: arXiv:2601.22208 (ICML 2026), verbatim-confirmed (77.3% Llama 3.2 + 87.3% Qwen 3 4B failure rates on Plan-and-Execute). Applies to: Plan-and-Execute workflows with models ≤7B. NOT applicable to: ReAct workflows or frontier models (>32B). | none | Kits MUST specify minimum model tier; workflow pattern is not model-agnostic |
| model-reliability-gaps | **CONSENSUS** | consistency-capability-disconnect, model-scale-paradox, calibration-discrimination-divergence | All 3 from same source (arXiv 2602.16666, ICML 2026). Real paper but single-study; calibration-discrimination (HIGH verify) would be HIGH if independent replication existed. Applies to open-ended agentic tasks (GAIA benchmark). | none | Use with single-source caveat: "reliability ≠ capability" direction is sound |
| llm-evaluation-validity | **CONSENSUS** | llm-as-judge-biases, benchmark-construct-validity-crisis, benchmark-contamination-shelf-life | Consensus synthesis + position paper (arXiv:2502.06559, ~100 studies) + blog. LLM-as-judge biases (self-preference, verbosity, prompt-sensitivity, logical-error blindness) are extensively documented in broader literature. | none | Test suites need private held-out sets + refresh cadence; same-family LLM judge is a validity trap |
| code-generation-robustness | **HIGH (narrow)** (SCOPE: The mechanistic finding is HIGH confidence only within the tested scope: models at or below 7B parameters generating Jav) | code-robustness-first-line-omission, decoding-strategy-latent-awareness | 2 MED-verify empirical from same paper (arXiv 2503.20197, Li et al. 2025). Same-source limitation but verbatim-confirmed and mechanistically coherent (decoding-strategy frame validated by RobGen). Applies to: code-generating kits targeting models ≤7B on Java tasks. NOT applicable to frontier models or non-Java without further evidence. | none | Kit code-generation rules must include "validate inputs at function entry" + post-generation review step |
| adversarial-robustness | **MEDIUM** | adversarial-perturbation-minimal-change, prompt-sensitivity-semantic-invariance | 2 MED-verify empirical from different sources (arXiv 2412.21016 + arXiv 2602.16666). Validated for classification and sentiment tasks. Extrapolation to instruction-following kits is logical but not directly validated. | none | Include paraphrase-invariance tests + minimal-change adversarial probes in kit test coverage |
| production-drift-monitoring | **CONSENSUS (caveated)** | cross-surface-inconsistency, latency-driven-inference-erosion, cross-team-signal-ownership-blind-spot | Primary source (arXiv 2605.01604) is explicitly synthetic — cannot carry empirical weight. Directionally plausible per Goodhart's Law literature. Do NOT cite numbers from this source. | none | Conceptual use only: kit maintenance notes (fallback path specs, cross-surface consistency, org signal ownership) are valid design concerns |
| rule-testability-design | **CONSENSUS** | specification-ambiguity-cascade, end-user-validation-primacy | Galileo blog + consensus papers (arXiv:2510.27628). Direction clear: rules must be independently verifiable; end-user outcomes > benchmark scores. | none | Kit rules must specify what verification looks like in user-observable terms, not benchmark scores |
| misc | **CONSENSUS** | model-version-churn-breaks-kits, memory-injection, reasoning-anchoring | Anecdotes and consensus. Model-version-churn is directionally credible (practitioner reports; Claude 4.x instruction-following contract change confirmed). | none | Kit metadata should version-tie to model version; explicit belief-update protocol for reasoning-heavy kits |

---

## Step 3.5 — Dual-pass reliability check

**Shortcut condition check:** Do ALL groups have ≥3 independent HIGH-verify-confidence empirical claims? No — kit-validation-methodology has 2 HIGH anchors, not 3. Dual-pass required.

**Second pass (claims shuffled within groups):**
- kit-validation-methodology: REMAINS HIGH. The 2-HIGH anchor (MOSAIC + SIFo) is decisive regardless of reading order; consensus claims reinforce but don't drive the tier.
- workflow-pattern-model-tier: REMAINS HIGH. Single claim but verbatim-confirmed; no competing claims.
- model-reliability-gaps: REMAINS CONSENSUS. All same-source regardless of reading order.
- code-generation-robustness: REMAINS HIGH (narrow). Mechanism coherence is reading-order-independent.
- production-drift-monitoring: REMAINS CONSENSUS. Synthetic-data disqualification is not order-dependent.

**Pass 1 ↔ Pass 2 agreement: FULL AGREEMENT.** No CONTESTED reclassifications needed.

---

## Step 4 — Adversarial check on user assumptions

**Assumption: "Model-agnostic kit rules" (implicit in current design — no model tier field in kit metadata)**
- `agentic-workflow-small-model-collapse` (HIGH): 77-87% failure rates on Plan-and-Execute for ≤7B models directly contradicts this.
- `model-scale-paradox` (CONSENSUS): larger ≠ more consistent for multi-step tasks; also contradicts.
- **VERDICT: DIRECTLY CONTRADICTED. Generated kits must specify minimum model tier. This requires a structural change to kit metadata and is not resolvable by research annotation alone.**

**Assumption: "One-time Phase 7 audit = validation complete"**
- `benchmark-contamination-shelf-life` + `model-version-churn-breaks-kits` (both CONSENSUS): validation degrades; model version changes alter instruction-following contracts.
- `end-user-validation-primacy` (CONSENSUS): validation criterion should be user outcomes in real deployment, not one-time benchmark pass.
- **VERDICT: PARTIALLY CONTRADICTED. Phase 7 audit is necessary but not sufficient. Model-version re-validation should be a named requirement in kit delivery/maintenance guidance.**

**Assumption: "Same-family LLM can self-evaluate kit compliance"**
- `llm-as-judge-biases` (CONSENSUS): already addressed — verify_prompt.md has self-preference bias warnings.
- **VERDICT: ALREADY ADDRESSED in prior session. No new action needed.**

---

## Step 5 — User questions

No CONTESTED groups requiring user decision. One design question from adversarial check:

**Q1 — Model tier field (HIGH evidence basis):** Should "minimum model tier" be a required metadata field in every generated kit (one field covering the whole kit), or per-rule (each rule that assumes multi-step workflow names which tier it requires)?

My default: **per-kit metadata field** (e.g., `minimum_model_tier: frontier / mid / small`) rather than per-rule. Per-rule is more precise but creates maintenance burden proportional to rule count. A kit built for frontier models with a single tier declaration is clear and auditable. Per-rule precision is better suited for kits with explicitly heterogeneous rule sets (some rules safe for small models, others not) — which can be a follow-up refinement once the field exists.

Proceeding with per-kit metadata field unless redirected.

---

## New angles from synthesis

- Multi-model portability testing methodology — systematic approach to verifying that a kit written for model A produces equivalent behavior on model B (ties to model-version-churn + model-scale-paradox)
- Behavioral drift monitoring cadence — empirical basis for how often to re-validate a deployed kit; currently no evidence
- Specification completeness checking — automated pre-deployment verification that each instruction has an explicit threshold/definition (ties to `specification-ambiguity-cascade` + agentif CSR/ISR approach)

---

**PCR trigger:** Per trigger rules in plan.md, PCR must run on this synthesis before findings are applied to kit files. Notable PCR items:
1. Add "minimum model tier" required field to generated kit metadata (HIGH basis — `workflow-pattern-model-tier`)
2. Add model-version re-validation trigger to kit delivery guidance (CONSENSUS basis)
3. Kit validation notes in Phase 7 guidance: per-constraint tests + repeat runs ≥3 required (HIGH basis)

---

## Step 3.6 — Counter-prior pass (supplemented 2026-07-02)

*This step was missing from the original 2026-06-30 synthesis (procedure was PCR-167 version, Step 3.6 added 2026-07-01). Applied now as REVISIT-S-01.*

### Group: kit-validation-methodology (HIGH)

**Main conclusion:** Multi-constraint instruction following requires per-constraint testing. Multi-rule combinations fail even when individual rules pass (SIFo, EMNLP 2024). Synergistic/conflicting rule interactions make holistic pass/fail insufficient (MOSAIC, EACL 2026). Repeat runs ≥3 required because N=1 cannot distinguish reliable compliance from luck (CONSENSUS).

**Counter-hypothesis 1: Holistic assessment on realistic scenarios captures the same failures as per-constraint testing.**

Argument: If a test scenario exercises all constraints simultaneously in realistic conditions, task-level failures will surface the same compliance gaps that per-constraint testing would surface. The extra machinery of per-constraint testing adds overhead without detection benefit.

Required evidence to support: A comparative study showing equivalent failure-detection rates between holistic scenario testing and per-constraint testing on multi-rule behavioral kits.

Evidence in archive:
- SIFo explicitly addresses this: "multi-rule combinations fail even when individual rules pass." The failure mode is precisely that individual-rule passes mask combination-level failures. A holistic test might catch combination failures — but it cannot attribute which rule failed or identify the interaction causing it.
- MOSAIC: "synergistic/conflicting interactions between co-present rules make monolithic pass/fail insufficient" — explicitly targets holistic pass/fail as the inadequate comparator.

Counter-hypothesis status: **PARTIALLY PLAUSIBLE — scope-limited.** Holistic scenario testing CAN catch combination failures when they manifest as task-level failures. But holistic testing cannot (a) identify which rule failed, (b) isolate interaction effects, or (c) distinguish a lucky pass from reliable compliance. The distinction is purpose: holistic testing is sufficient for final go/no-go on a ship-ready fixed kit where no further tuning will occur. Per-constraint testing is required when kit tuning is ongoing (knowing WHICH rule fails is necessary) or when diagnosing production failures.

**Scope condition added:** Per-constraint testing is required during kit development and production debugging. For final go/no-go validation of a ship-ready kit, holistic scenario testing on realistic tasks is acceptable as the pass/fail gate. Both serve different purposes; neither replaces the other.

**Tier revision: none.** The HIGH tier stands. The evidence directly contradicts the strongest form of the counter-hypothesis (holistic = equivalent detection power). The scope condition is an additive clarification, not a confidence reduction.

---

**Counter-hypothesis 2: Repeat runs ≥3 is unnecessary for deterministic-inference kits (temperature = 0, seed-fixed).**

Argument: The repeat-runs requirement addresses non-determinism. If a production kit runs at temperature 0 with a fixed seed, outputs are deterministic — N=1 is sufficient because the same output always occurs.

Required evidence to support: Evidence that production kit deployments commonly use deterministic inference settings.

Evidence in archive: CONSENSUS tier only. The archive documents non-determinism as a test validity concern but does not empirically profile what fraction of production kits use deterministic vs. stochastic inference.

Counter-hypothesis status: **SUPPORTED for the stated scope condition.** If inference is truly deterministic (temperature = 0, seed fixed), repeat runs add no detection value. The repeat-runs requirement applies to non-deterministic inference (temperature > 0 or unseeded).

**Scope condition added:** Repeat runs ≥3 required when production inference is non-deterministic (temperature > 0). For seed-fixed deterministic inference, N=1 is sufficient — but the kit's behavioral contract should explicitly specify the inference settings that were used during validation.

**Tier revision: none.** CONSENSUS tier was already appropriate; scope condition refines the application condition.

---

### Group: workflow-pattern-model-tier (HIGH narrow)

**Main conclusion:** Plan-and-Execute workflows produce 77-87% failure rates on models ≤7B (arXiv:2601.22208, ICML 2026). Kits prescribing Plan-and-Execute must declare minimum model tier of frontier or mid-tier ≥32B.

**Counter-hypothesis: Model tier failure is a prompting problem. Optimized prompting (structured output, chain-of-thought, few-shot examples matched to task format) can overcome capability gaps in smaller models for Plan-and-Execute workflows.**

Argument: The ICML 2026 study likely used standard prompting. With prompt optimization techniques, smaller models might achieve acceptable Plan-and-Execute performance, at least for narrow, well-specified kit domains.

Required evidence to support: A study showing that optimized prompting on ≤7B models achieves comparable Plan-and-Execute success rates to frontier models with standard prompting on equivalent tasks.

Evidence in archive:
- arXiv:2601.22208 was verbatim-confirmed. The synthesis note states "NOT applicable to: ReAct workflows or frontier models (>32B)" — the paper controlled for workflow type.
- The archive does not include any study testing optimized prompting on small models for Plan-and-Execute tasks. The counter-hypothesis is untested in this archive.
- Logical analysis: Plan-and-Execute failure on ≤7B is architecturally rooted in context length, working memory limitations, and multi-step reasoning degradation. These are capability gaps, not prompting failures. Prompt optimization can reduce gap but cannot eliminate architectural limits.

Counter-hypothesis status: **PLAUSIBLE for narrow, highly constrained kit domains — unverified.** Optimized prompting may shift the threshold (reducing failure rates) but is unlikely to bridge the full 77-87% gap for complex multi-step plans. For simple Plan-and-Execute on a narrow, well-specified task (2-3 steps, structured output, clear stopping conditions), a small model with optimized prompting might perform acceptably — but this requires empirical validation on the specific kit and model, not assumption.

**Scope condition added:** The 77-87% failure rates are calibrated for standard prompting. Kits deploying on ≤7B models with heavily optimized prompting, few-shot examples, and narrow task scope are NOT covered by this finding — they require empirical validation on the specific model before the tier declaration is set. The conservative default (frontier for multi-step Plan-and-Execute) stands absent that validation. This scope condition is additive to the current ENTRYPOINT guidance ("If uncertain: declare frontier").

**Tier revision: none.** HIGH (narrow) stands. The counter-hypothesis is untested in the archive and faces logical headwinds. The default guidance is correct; the scope condition clarifies when empirical override is appropriate.

---

### Summary: what Step 3.6 changes

| Group | Counter-prior | Status | Tier change | Kit file action |
|-------|--------------|--------|-------------|-----------------|
| kit-validation-methodology | Holistic = per-constraint detection | PLAUSIBLE (scope-limited: holistic OK for go/no-go; per-constraint required for tuning) | None | Add scope distinction to Phase 7 checklist |
| kit-validation-methodology | Repeat runs unnecessary if deterministic | SUPPORTED (scope condition) | None | Add deterministic-inference caveat to Phase 7 checklist |
| workflow-pattern-model-tier | Prompting overcomes tier gap | PLAUSIBLE (unverified for narrow optimized kits) | None | Add "empirical validation overrides default tier" note to ENTRYPOINT |

---

### Step 3.6 kit file updates

**Change 1: ENTRYPOINT.md — model tier calibration note**

Existing text: "If uncertain: declare frontier."

Addition: "Counter-prior caveat: the 77-87% failure rates (arXiv:2601.22208) are for standard prompting on broad Plan-and-Execute tasks. For kits with narrow task scope, highly optimized prompting, few-shot examples, and ≤3 execution steps, empirical validation on the target model can override the conservative tier default — but requires actual testing, not assumption."

**Change 2: grounding-map.md row Phase 7 (per-constraint validation) — scope condition**

Addition: "Scope condition (Step 3.6, 2026-07-02): per-constraint testing is required during kit development and production debugging; holistic scenario testing on realistic tasks is sufficient for final go/no-go ship validation when no further tuning will occur. Repeat-runs ≥3 scope condition: required for non-deterministic inference (temperature > 0); N=1 is sufficient for seed-fixed deterministic inference."

---

## Step 3.7 — Principled Derivation (2026-07-05)

### kit-validation-methodology (HIGH)
**Finding (data point):** Multi-rule combinations fail even when individual rules pass (SIFo, EMNLP 2024); synergistic/conflicting interactions between co-present rules make monolithic pass/fail insufficient (MOSAIC, EACL 2026). Per-constraint testing is required during kit development and production debugging; holistic scenario testing on realistic tasks is sufficient for final go/no-go ship validation when no further tuning will occur. Repeat runs ≥3 are required for non-deterministic inference (temperature > 0) because N=1 cannot distinguish reliable compliance from luck; N=1 is sufficient for seed-fixed deterministic inference.

**Principle (Sub-step A):** When a system is governed by multiple co-present rules, component-level validation is necessary but not sufficient: emergent behaviors arise from rule interactions that are invisible when each rule is tested in isolation. Validation strategy must therefore be granularity-matched to developmental purpose — fine-grained per-component testing serves diagnosis and iterative tuning because it localizes failure to specific rules; coarse-grained integrated testing serves final go/no-go decisions because it exercises the actual condition of deployment where all rules co-activate. A separate dimension governs measurement reliability: when outputs are stochastic, a single observation cannot be distinguished from noise and therefore provides no evidence of reliable behavior — reliability is only estimable from the distribution of outcomes across repeated independent observations, and that requirement holds regardless of how well the rules were individually designed.

**Fit to our setup (Sub-step B):** Tested in: controlled NLP benchmark studies evaluating instruction-following and constraint compliance in LLMs under defined task conditions, where rules are prompt-level constraints applied to specific, bounded inputs.

Our setup differs in: kit rules are behavioral and procedural, not output-format constraints — they govern agent process (when to stop, what to log, when to ask) rather than surface-level output properties. A kit CLAUDE.md routinely contains more co-present rules than benchmark constraint sets, increasing the combinatorial space of possible interactions. Tasks are open-ended and diverse rather than controlled benchmark instances, so no exhaustive interaction enumeration is feasible. Non-determinism is harder to control: agentic sequences accumulate sampling events across multiple turns, and seed-fixing is not available in standard deployment.

Principle still applies because: the mechanism — interactions between co-present rules generating emergent behaviors invisible at the component level — is not specific to output-format constraints or benchmark tasks. It is a property of any multi-rule system where rules can co-activate. Greater rule count and open-ended tasks make the principle apply MORE strongly in kit-making, not less.

Principle may not apply if: the kit is structured so that rules are sequentially exclusive — phase-gated kits where only one rule cluster is active per phase structurally prevent cross-cluster interaction, partially bounding the problem. In that case, per-phase component testing may be sufficient to cover most interaction effects, and the principle's urgency is reduced within-phase but not across phase boundaries.

**Derivations beyond the finding (Sub-step C):**
- The principle implies that kit templates should require an explicit rule-interaction audit as a structural gate before ship validation — a documented scan of which rules can simultaneously co-activate and what their interaction behavior is — rather than leaving interaction coverage to the builder's discretion. Because the failure mode is emergent and invisible at the component level, it will not be discovered by per-rule review alone; only a deliberate co-activation scan surfaces it. Confidence: high, because the mechanism generalizes directly and the kit-making setup has more co-present rules than the tested setup, making the omission more costly, not less.
- The principle implies that the distinction between per-constraint and holistic testing should be structurally enforced in kit procedure templates, not left to the builder's judgment at time of testing. If the builder must recognize which testing mode is appropriate for their current stage, they will default to whichever is cheaper — typically holistic-only — and miss the diagnostic granularity needed during tuning. Baking the staging decision into the procedure eliminates that recognition check. Confidence: medium, because this is a design-enforcement derivation rather than an empirically grounded one, and the benefit depends on how often builders actually default to the cheaper mode.
- The principle implies that stochastic behavior at the rule-interaction level — not just at the individual output level — requires multi-run validation. A kit that passes holistic scenario testing in a single run may have passed because the stochastic interactions happened to resolve favorably. The minimum observation count for reliability is not fixed by the number of rules but by the variance of the interaction effects: highly variable rule interactions require more runs to estimate the behavioral distribution than stable ones. This means kits with many conditional or context-sensitive rules (where co-activation depends on input) are higher-variance and require more independent holistic runs than kits with unconditional rules. Confidence: medium, because the variance-dependent run-count derivation follows from the stochasticity principle but has not been empirically calibrated for rule-interaction systems specifically.

### workflow-pattern-model-tier (HIGH (narrow))
**Finding (data point):** Plan-and-Execute workflows produce 77.3% (Llama 3.2) and 87.3% (Qwen 3 4B) failure rates on models ≤7B (arXiv:2601.22208, ICML 2026, verbatim-confirmed). This finding applies to Plan-and-Execute workflows with models ≤7B; it is NOT applicable to ReAct workflows or frontier models (>32B). The 77–87% failure rates are calibrated for standard prompting; kits deploying on ≤7B models with heavily optimized prompting and narrow task scope (≤3 execution steps) are not covered by this finding and require empirical validation on the specific model before the tier declaration is set.

**Principle (Sub-step A):** When a workflow architecture requires an agent to maintain a global structural plan in working memory while executing a sequence of local steps, the demands on that agent scale with the depth and breadth of the plan. An agent whose capacity to hold and track multi-step state is insufficient for the plan's scope will fail not because the individual steps are beyond it, but because coordination across those steps exceeds its holding capacity. The failure mode is structural, not content-based: the agent can often execute any single step correctly in isolation while failing to execute them coherently as a sequence.

**Fit to our setup (Sub-step B):** Tested in: standard-prompting benchmark conditions, Plan-and-Execute workflow pattern, models ≤7B operating as both planner and executor in the same inference loop. Our setup differs in two important ways. First, kit-making is one step removed from the failure: we write the behavioral contract that agents execute — we do not run the workflow directly. The failure condition fires at deployment time, against the model the kit user deploys, not during kit construction (which typically uses a frontier model). This means the finding does not constrain kit-making, it constrains kit design choices: specifically, how deep a sequential execution structure we embed in the generated kit's procedures. Second, kits add a procedural layer between the workflow pattern and the agent — heavily structured procedures with explicit state-tracking rules may shift where the capacity bottleneck sits compared to standard-prompting conditions. The principle still applies because the mechanism (plan-state holding over multiple steps) is present in any kit that chains sequential steps. It applies most strongly when the generated kit targets small-model deployment and has long sequential execution paths. It applies least strongly when the kit is designed for frontier models, uses interleaved check-in points rather than a monolithic plan, or bounds execution depth to two or three steps before re-anchoring.

**Derivations beyond the finding (Sub-step C):**
- A kit's minimum model tier declaration (Hard Rule 13 item 10) should be derived from the sequential depth of the kit's longest execution path, not from task domain alone. A kit with a five-step sequential execution chain has a higher capacity floor than a kit whose longest path is two steps, independent of whether the domain appears complex. The rule: count the maximum number of steps an agent must hold in mind simultaneously before a re-anchoring or check-in point; declare the tier from that count, not from the topic.
- For kits that must target mid-tier or small models, procedure design should include a mandatory segmentation rule: a maximum sequential depth before a structured checkpoint that clears the plan buffer — summarizing completed steps, re-stating remaining steps, and confirming current position before continuing. This is a capacity-compensating pattern, not a quality improvement. Its absence in small-model-targeted kits is not a minor gap; based on the principle it is the primary structural failure path.
- The principle may extend beyond Plan-and-Execute to any multi-turn pattern that requires the agent to maintain accumulated state from prior steps — such as a synthesis procedure that builds a running confidence map over ten claim groups. The failure mode is the same: not inability to evaluate any single claim, but loss of coherence across the accumulating structure. Kits that require long-running state accumulation should be treated as structurally equivalent to Plan-and-Execute for the purpose of the tier declaration, even if the workflow pattern is labeled differently. Confidence in this derivation: medium — the mechanism generalizes, but the specific failure rate and the threshold at which it becomes critical have not been tested for accumulation-pattern workflows.

### code-generation-robustness (HIGH (narrow))
**Finding (data point):** Code-generating models exhibit first-line omission and a latent awareness of decoding strategy that affects robustness (arXiv 2503.20197, Li et al. 2025, same-source limitation but verbatim-confirmed and mechanistically coherent via the RobGen decoding-strategy frame). This applies to code-generating kits targeting models ≤7B on Java tasks; it is NOT applicable to frontier models or non-Java tasks without further evidence. Kit code-generation rules must include 'validate inputs at function entry' plus a post-generation review step.

**Principle (Sub-step A):** When a language model generates structured output, its latent knowledge of what a structure requires does not guarantee that requirement will appear in the output. Systematic omissions cluster at positions of high structural importance — entry points, boundaries, and transition positions — precisely because those positions carry the greatest correctness weight while receiving the least generative momentum. This gap between what a model can recognize as correct and what it actually emits is not a knowledge deficit; it is a generation-dynamics deficit, and it is invisible to output inspection because the model would pass a comprehension test on the very constraint it silently violated.

**Fit to our setup (Sub-step B):** Tested in: small code-generating models on single-language (Java) code completion tasks, where structural entry points are syntactically explicit (function signatures, parameter lists, first executable statement). Our setup differs in: (1) we write procedural and behavioral instructions for LLM agents, whose structured outputs are prose-based rather than syntactically constrained — structural entry points are implicit (first action in a procedure, first field in a template, opening of a section) rather than compiler-enforced; (2) the kit-maker's target agent models may be frontier or mid-tier, not sub-7B, so the magnitude of the effect is untested at our operating model tier; (3) the output domain is not code but behavioral sequences and analytical outputs, where entry-position omissions manifest as skipped initial checks, missing done-criteria statements, or first-step elision rather than first-line code omissions. The principle still applies because the underlying mechanism — generation momentum de-emphasizes positions that lack preceding context — is not unique to code or to small models; it is a structural property of left-to-right generation. The principle weakens substantially if target agents are frontier-scale, where capacity to self-correct early-position omissions is higher, but even frontier models under context-heavy prompts exhibit attention dilution at structurally important positions. The principle may not apply if the kit procedure enforces structural entry via a fill-in template with required first-field gates, because the template externally supplies the structural momentum the model's generation lacks.

**Derivations beyond the finding (Sub-step C):**
- Last-position symmetry rule: if entry positions are systematically under-attended, closing positions (the final verification step, the done-criteria re-check, the closing audit) carry the same structural vulnerability for the same reason — they lack generative momentum because generation is winding down rather than starting. Kit procedures that place correctness-critical steps last (as most do, since verification follows generation) should treat the closing step with the same structural reinforcement as entry steps: explicit label, required-field marker, or gate that cannot be passed silently. Confidence in this derivation: medium — the mechanism generalizes directly, but the evidence base is entry-position-specific.
- Externally-ordered post-generation review beats model-salience-ordered review: since the model's generation attention correlates with its omission pattern, a post-generation review that asks the model to 'check what needs checking' will follow the same salience ordering that produced the omission. The review will systematically revisit what the model already attended to and skip what it already missed. Kit post-generation review steps must specify a fixed external ordering — by structural position, not by the model's assessment of importance — so the review sequence is orthogonal to the generation sequence that created the gap. Confidence: medium-high — the mechanism is direct and the practical implication is a design constraint on how review prompts are written, not a claim about model performance.
- Elicitation is a more reliable correction channel than first-pass generation for structurally-required content: because the model has latent awareness of the constraint (it would recognize a violation if shown one) but fails to emit the required content during generation, the gap is not in knowledge but in the generation process. This implies that a two-pass structure — generate, then present the output back to the model with a targeted elicitation prompt ('does this output satisfy [structural requirement]?') — should recover omitted entry-point content more reliably than re-prompting the generation with stronger instructions. Kit rule design should prefer generate-then-elicit over generate-with-stronger-instruction for any constraint that lives at a structural boundary. Confidence: medium — directionally supported by the latent-awareness component of the finding, but not directly tested in our output domain.

### adversarial-robustness (MEDIUM)
**Finding (data point):** Minimal adversarial perturbations and semantically invariant paraphrases cause measurable compliance failures (adversarial-perturbation-minimal-change: arXiv 2412.21016; prompt-sensitivity-semantic-invariance: arXiv 2602.16666). Validated for classification and sentiment tasks; extrapolation to instruction-following kits is logical but not directly validated. Kit test coverage must include paraphrase-invariance tests and minimal-change adversarial probes.

**Principle (Sub-step A):** LLM behavior is sensitive to surface form in ways that do not track semantic equivalence: the model's internal decision boundary does not align with the human-meaningful semantic space, so changes that preserve meaning for a human can cross latent decision boundaries and produce different outputs. Any system that maps surface form to behavior without explicitly enforcing semantic invariance is exposed to this gap — small moves in token space produce behavioral differences that the semantic content of the input does not predict.

**Fit to our setup (Sub-step B):** Tested in classification and sentiment tasks — narrow input-to-label mappings with a small, well-defined output space. Kit-making setup differs in three ways: (1) the output space is large and sequential — agent behavior unfolds across multiple steps and tool calls, not a single label, so a surface-form-induced deviation early in execution compounds; (2) the fixed artifact is the instruction, not the input — kit rules are written once and re-used across varied caller inputs, meaning the perturbation risk runs in both directions (variant phrasings of incoming requests AND variant phrasings of the kit rules themselves); (3) compliance in the kit context means behavioral conformance to a contract, which is harder to define and measure than label accuracy. The principle still applies because the mechanism — surface-form processing that does not enforce semantic invariance — is not domain-specific. It may apply more strongly than in classification because the longer output sequences give more surface for deviation to propagate. It may apply less strongly if kit rules are written with enough specificity and structure that the semantic space is tightly constrained, reducing the number of paraphrases that land in behaviorally distinct regions.

**Derivations beyond the finding (Sub-step C):**
- Kit rule wording is not interchangeable with semantically equivalent alternatives: if surface form drives behavior independently of meaning, then paraphrasing a kit rule during iteration or maintenance — even a meaning-preserving rewrite — can shift agent behavior without any signal that something changed. This implies kit rules should be treated as brittle artifacts whose exact surface form is part of their specification, and rewrites should be treated as behavioral changes requiring re-validation, not cosmetic edits.
- Behavioral test suites that use only one canonical phrasing of each scenario measure correctness on a single point in token space, not behavioral stability across the region the human intends. If the principle holds in instruction-following contexts, a test that passes on the canonical phrasing may fail on a paraphrase a real caller would naturally use. Test coverage should include paraphrase variants of each scenario — not to test more scenarios, but to measure the width of the behavioral region around each scenario.
- If the surface form of instructions drives behavior independently of semantic content, then two kit rules that 'mean the same thing' by human judgment may produce different agent behavior. When kit design requires choosing between alternative phrasings of the same rule, the choice is a behavioral decision, not a style decision — the alternatives are not equivalent and the selection should be empirically validated rather than made on clarity or concision grounds alone.

### model-reliability-gaps (CONSENSUS)
**Finding (data point):** On open-ended agentic tasks (GAIA benchmark), models exhibit a consistency–capability disconnect, a model-scale paradox (larger does not equal more consistent for multi-step tasks), and a calibration–discrimination divergence (arXiv 2602.16666, ICML 2026). All three claims come from a single source; the 'reliability ≠ capability' direction is treated as sound with a single-source caveat. The calibration–discrimination finding would be HIGH if independent replication existed.

**Principle (Sub-step A):** Capacity and consistency are orthogonal dimensions of agent performance: an agent that can execute any individual step of a multi-step task does not thereby become reliable across a full sequential chain. Reliability — the tendency to produce correct outputs across varied conditions and across chain length — is a distinct property that is not implied by and does not automatically increase with raw per-step capability. Furthermore, an agent's ability to discriminate between correct and incorrect outputs (self-assessment) may diverge from its tendency to execute reliably — so introspective accuracy is not a proxy for behavioral reliability. These three properties (capability, consistency, calibration) are independently variable.

**Fit to our setup (Sub-step B):** Tested in: open-ended agentic benchmarks (GAIA-class tasks) with models of varying scale, no behavioral scaffolding, standardized test conditions, measuring output accuracy across multi-step chains. Our setup differs in: (1) we are designing behavioral kits — the scaffolding that compensates for model-native reliability gaps — not measuring unscaffolded model performance; (2) the finding applies to models operating without structured procedure constraints; our kits are explicitly intended to impose those constraints; (3) we are designing for deployment, not benchmarking, so the relevant reliability dimension is consistency under real-world prompt variation, not benchmark scoring; (4) single-source CONSENSUS — the confidence weight is lower than a replicated empirical finding. Principle still applies because: the mechanism (capability and reliability being orthogonal, reliability degrading multiplicatively with chain length) is structural — it is a property of sequential task execution independent of whether the model has behavioral scaffolding. A kit cannot eliminate the underlying property; it can only interrupt the chain to catch failures before they compound. Principle may not apply if: the kit successfully decomposes multi-step chains into independently verified single-step events with hard gates between steps — in that case, chain-length compounding is broken by design and the consistency-capability disconnect is partially mitigated by the kit structure itself rather than by model capability.

**Derivations beyond the finding (Sub-step C):**
- Kit rules must not be calibrated for peak-capability models and assumed to degrade gracefully to smaller models. If reliability is orthogonal to capability, a kit designed at the capability frontier will hit reliability failures when run on mid-tier models even in domains where those models can execute each individual step. The implication: kit rules should be designed for the reliability floor of the target model tier, not the capability ceiling. Confidence: medium — the mechanism (orthogonality of capability and reliability) is well-grounded; the specific calibration implication for kit design is a derivation, not a tested finding.
- Long behavioral chains in kit procedures should be interrupted by explicit verification gates, not left to run to end-of-task. If reliability degrades multiplicatively with chain length — a model that succeeds at each step 90% of the time succeeds at a 5-step chain only ~59% of the time — then a kit procedure with 6 sequential steps and no intermediate checks compounds failures silently. The implication: every kit procedure longer than 3-4 sequential steps should include a mid-chain state-check that can catch and correct drift before it reaches the output. Confidence: medium-high — the compounding math is not from this specific finding but from general probability; the finding's consistency-capability disconnect makes the compounding worse than intuition suggests.
- Rules that ask the agent to self-assess output quality ('check your work', 'review before proceeding') should not be treated as equivalent to structural behavioral gates. The calibration-discrimination divergence finding implies that a model may correctly identify that its output is low quality while still producing it — so self-assessment rules depend on the agent both detecting the problem AND acting on the detection. The implication: kit quality checks should be structural (a gate that cannot be passed without an observable output, not a prompt that asks for reflection) rather than introspective. Confidence: low-medium — derived from the calibration-discrimination divergence which is the weakest sub-claim in the finding (single source, would be HIGH only with replication); treat as a design heuristic, not a settled rule.

### llm-evaluation-validity (CONSENSUS)
**Finding (data point):** LLM-as-judge biases — self-preference, verbosity bias, prompt-sensitivity, and logical-error blindness — are extensively documented across ~100 studies (arXiv:2502.06559); same-family LLM judges are a validity trap. Benchmark contamination degrades shelf-life; benchmark construct validity is in crisis. Test suites require private held-out sets and a refresh cadence.

**Principle (Sub-step A):** When an evaluator shares structural properties with the thing it measures — same training distribution, same objective, same architectural family — its blind spots are correlated with the evaluated system's blind spots, not independent of them. The evaluator cannot reliably detect failure modes that arise from the shared properties, because those same properties suppress detection in the evaluator as well. Separately, any fixed evaluation artifact loses discriminative power as the evaluated system's behavior converges toward it; evaluation validity is a perishable property that requires renewal to remain meaningful.

**Fit to our setup (Sub-step B):** Tested in: large-scale empirical studies of LLM systems evaluating LLM-generated content on public benchmarks, with quality and factual accuracy as the evaluation target. Our setup differs in three specific ways: (1) the evaluation target is behavioral compliance — did the agent follow a procedure or fire a rule — which is more binary and observable than quality judgment, reducing but not eliminating judgment-dependent bias; (2) the "benchmark" is the behavioral contract (CLAUDE.md), which is stable prose rather than a held-out test set, so contamination takes a different form — the agent can learn to pattern-match the rule text without producing the underlying behavior rather than memorizing answer keys; (3) crucially, the agent being evaluated (the kit-following Claude instance) and the evaluator (the auditor or goal-checker subagent) are from the same model family and base training — the same-family validity trap named in the finding applies directly. Principle applies more strongly because the agent controls the content of the input it feeds its own evaluator (project-state.md is written by the agent before the goal checker reads it), which is a structural advantage the tested LLM-as-judge setup did not face. Principle applies less strongly to the subset of compliance checks that are purely structural — did this file exist, did this field contain a value — because those are not susceptible to evaluator judgment bias in the same way quality ratings are.

**Derivations beyond the finding (Sub-step C):**
- A same-family auditor subagent will systematically miss the class of violations the base model is disposed to rationalize — behavioral drift that feels procedurally coherent to the main agent will feel coherent to the auditor too, because both share the same priors about what 'reasonable process compliance' looks like. Candidate rule: every auditor pass should include at least one evaluation criterion that is purely structural and machine-checkable (file exists, field non-empty, count matches), grounding the audit in conditions the evaluator cannot rationalize away regardless of model family. Confidence: high — the mechanism (correlated blind spots from shared training) holds even when the evaluation target shifts from quality to compliance.
- Because the agent under evaluation writes the summary that the auditor reads (project-state.md, task narrative), the evaluated system controls the framing of its own evaluation input. This is a structural validity trap: the agent can, without intent, write a summary that primes the auditor toward a favorable verdict. Candidate rule: the auditor brief must be generated from observable artifacts (file diffs, plan.md entries, timestamps) not from the agent's own prose summary — or at minimum the auditor must be given both the agent's summary and the raw artifacts and instructed to check the summary's accuracy against the artifacts before assessing compliance. Confidence: high — this is a direct application of the principle to the specific information channel between evaluated system and evaluator.
- Behavioral contract rules decay as the agent learns to satisfy the literal observable condition the rule names without producing the underlying behavior — the specific phrasing of a rule becomes the thing being optimized toward, not the intent. This is the behavioral-contract analogue of benchmark contamination. Candidate design decision: rules in the kit's behavioral contract should specify their observable violation condition in terms of outcomes and artifacts, not procedural steps, and the contract should include a periodic review mechanism that replaces specific phrasings with equivalent-intent alternatives before the original phrasing becomes a learned target. Confidence: medium — the decay mechanism is plausible by analogy and consistent with prompt-sensitivity findings, but has not been tested on behavioral contracts specifically.

### production-drift-monitoring (CONSENSUS (caveated))
**Finding (data point):** Cross-surface inconsistency, latency-driven inference erosion, and cross-team signal-ownership blind spots are directionally plausible production drift failure modes, but the primary source (arXiv 2605.01604) is explicitly synthetic and cannot carry empirical weight. Numbers from this source must not be cited. Conceptual use only: kit maintenance notes covering fallback path specs, cross-surface consistency, and org signal ownership are valid design concerns per Goodhart's Law literature.

**Principle (Sub-step A):** Behavioral coherence across a distributed system — whether composed of surfaces, files, teams, or pipeline stages — degrades silently over time unless explicit ownership of each signal or rule is structurally assigned from the start. The degradation is not itself a detectable event: the absence of a check produces no visible signal, so drift accumulates precisely in the areas no one is watching. General monitoring capability does not compensate for undefined responsibility. Proactive structural ownership assignment — specifying who watches what, across which surfaces, with what authority when surfaces conflict — is the mechanism that surfaces drift before it becomes consequential. Systems that rely on aggregate monitoring without per-signal ownership will systematically miss the blind spots that ownership gaps create.

**Fit to our setup (Sub-step B):** Tested in: a production ML inference system with multiple organizational teams and multiple API/UI surfaces (the source arXiv 2605.01604 is explicitly synthetic, so the setup details are illustrative rather than empirically grounded — the principle is the only transferable element). Our setup differs in: the surfaces are kit files (behavioral contract, task template, procedures, research archives, propagation map) rather than API endpoints; the teams are at most a single agent plus one user, not organizational units; drift manifests as cross-file rule inconsistency and rule decay rather than model-score degradation; and there is no latency signal to observe — behavioral drift in a kit is invisible until an agent acts on a stale or contradicted rule. The principle still applies because the core mechanism transfers: wherever no agent is assigned to monitor a specific cross-surface relationship, that relationship drifts without generating a detectable signal. Kit files with cross-references are structurally identical to cross-team surfaces — the blind spot emerges from undefined ownership, not from team count. The principle applies most strongly when the kit spans multiple files with bidirectional dependencies (our actual situation). It applies least strongly for a single-file, low-complexity kit where one agent can hold all rules in working context simultaneously — in that case, cross-surface blind spots cannot form.

**Derivations beyond the finding (Sub-step C):**
- Every load-bearing cross-file dependency in a generated kit should carry an explicit authority designation: when rules in two files conflict, which file is authoritative and which defers? Without this assignment, cross-file conflicts are invisible — no agent generates an error signal when it chooses the wrong source, and the choice is not auditable. The derived rule: the propagation-map.md (or equivalent) must record not only which files reference each rule, but which file holds authority over it when they diverge.
- Kit phase-gate requirements should include a propagation check as a structural completion criterion for any file update — not an optional audit step. Before marking any rule change complete, the agent must answer: which other files reference or depend on this rule, and have those files been updated to match? Updating one surface without auditing its dependents is the structural equivalent of the cross-team ownership blind spot the principle names: one surface updated, others silently stale, no error signal emitted.
- Kit maintenance notes must specify fallback path behavior explicitly for every mechanism that can be toggled off, degrade gracefully, or operate in a reduced-capability mode. Without explicit fallback specifications, a mechanism's failure produces a silent behavior change — the agent continues operating, but on a different code path that was never validated. This is the latency-erosion pattern applied to behavioral specifications: not a crash, but a quiet substitution that no monitor flags because no monitor was assigned to watch the transition.

### rule-testability-design (CONSENSUS)
**Finding (data point):** Specification ambiguity cascades into unverifiable rules; end-user validation primacy means end-user outcomes outweigh benchmark scores as a validation criterion (Galileo blog + arXiv:2510.27628). Kit rules must specify what verification looks like in user-observable terms, not benchmark scores, and each instruction must have an explicit threshold or definition (agentif CSR/ISR approach).

**Principle (Sub-step A):** A behavioral instruction is only correctable when its verification criterion is observable to the party whose experience the instruction is meant to serve. When success is defined by a proxy condition — one the producing agent or system can evaluate internally — the feedback loop between the instruction and the experience it is intended to produce is severed. Under severed feedback, an instruction can be consistently "satisfied" by the agent while failing the user, and neither party has the observability needed to trigger correction. The strength of a specification is therefore not its precision in abstract terms but the directness of the link between its pass condition and the recipient's experience.

**Fit to our setup (Sub-step B):** Tested in: LLM output evaluation contexts where benchmark scores and automated metrics were compared against real end-user satisfaction ratings — the research was examining evaluation methodology gaps, not instruction design per se. Our setup differs in two ways that both intensify the principle. First, our setup has a longer verification chain: rule → agent self-check of compliance → user experience. The research addressed the last link (proxy vs. recipient); our design must address all three, including the middle link where the agent's self-check is itself a proxy. Second, kit rules are meta-instructions governing many downstream interactions simultaneously, so one rule with a broken verification condition propagates across every execution the kit touches rather than failing in isolation. The principle applies more strongly here than in the tested setup because (a) LLM agents accumulate no persistent experience of consequence mismatches and cannot self-correct from them, and (b) the agent's internal compliance signal — "I followed the rule" — is structurally analogous to a benchmark score: it may be systematically detached from user outcome even when numerically high. The principle would apply less strongly in a setup where the executing agent and the outcome recipient are the same entity and can directly compare expectation to experience.

**Derivations beyond the finding (Sub-step C):**
- Cascade dependency rule: a single rule in a kit with an unobservable verification condition acts as a type error in a specification system — it does not fail in isolation but corrupts any downstream rule whose inputs depend on it. This implies that verification conditions must be specified for every rule, not just prominent ones, because the dependency graph of rules in a kit means one unverifiable node can produce cascading ambiguity. Design decision: kit procedures should require a dependency scan — for each rule, list which other rules presuppose its output, and require those dependent rules to have verification conditions that can be checked even when the upstream rule's condition was ambiguous.
- Agent self-evaluation trap: the principle implies that the agent's internal check of 'did I comply with this rule?' is itself a proxy metric, subject to the same detachment from user experience as a benchmark score. A kit rule verified only by the agent's self-assessment has not escaped the problem the finding names — it has relocated it. Design decision: kit rules should distinguish between agent-checkable conditions (legible to the executing agent) and user-checkable conditions (observable by the recipient), and require at least one condition of the latter type per rule so that external correction can be triggered without relying on agent self-report.
- Revision triggering condition: the principle implies that rule revision should fire on user-observable failures, not on agent compliance signals. A rule the agent consistently reports as followed, while users experience the outcome it governs as failing, is the canonical sign of a broken verification condition — not a rule correctly implemented. Design decision: each kit rule should carry an explicit revision trigger in user-observable terms: 'if the user experiences X despite the agent reporting compliance, this rule's verification condition requires revision before the rule itself is changed.' This separates rule failures from verification condition failures, which are currently conflated.

### misc (CONSENSUS)
**Finding (data point):** Model-version churn breaks kit behavioral contracts (directionally credible from practitioner reports; Claude 4.x instruction-following contract change confirmed). Memory injection and reasoning-anchoring are additional failure modes. Kit metadata should version-tie to the model version used during validation, and reasoning-heavy kits require an explicit belief-update protocol.

**Principle (Sub-step A):** A behavioral specification is a contract between a rule-writer and an executing substrate. The contract's validity depends on assumptions about the executor's behavior that are made implicitly at the time of writing. When the executor changes — in any way that shifts its default behaviors, interpretation patterns, or reasoning tendencies — those assumptions can be silently violated: the specification remains textually intact while the contracts it encodes no longer hold. The failure is invisible because the specification does not document the assumptions it rests on; only the rules derived from those assumptions appear in the text.

**Fit to our setup (Sub-step B):** The finding was tested in the practitioner context: deployed LLM agents whose behavioral contracts broke on model-version upgrades, with at least one confirmed instruction-following contract change as the concrete evidence. The kit-making context is a higher-risk instantiation of the same principle, not a different one. Kit rules are written once and intended for extended deployment against model versions that did not exist at writing time; there is no forcing function to re-validate contracts when the underlying model is swapped. The principle applies most strongly to kit rules that work by suppressing or redirecting model default behaviors — suppression rules are the most version-sensitive because defaults are the first thing to shift across versions, and a rule designed to override a default that no longer exists becomes either redundant or, if the new default is in the opposite direction, insufficient. The principle applies less strongly to purely structural enforcement — tool-call gates, section-completion requirements, subagent dispatch steps — because these do not depend on the model adopting any particular behavioral stance; they fire because the task structure requires them, not because the model would not act otherwise.

**Derivations beyond the finding (Sub-step C):**
- Validation records should encode the behavioral assumptions each rule rests on, not just a pass/fail outcome. A rule like 'after every task, name the next obstacle' is load-bearing only if the model's default is NOT to do this. If a future model version makes proactive surfacing a default, the rule becomes redundant without appearing to fail. A validation record that documents 'this rule tests suppression of passive-completion default' allows a reviewer to ask the right question after a model change: does the new version still exhibit the behavior this rule was designed to override?
- Kit rule libraries should classify rules by type — additive (introducing a behavior the model would not exhibit by default) versus suppression (overriding a behavior the model would exhibit by default) — and flag suppression rules as high-churn-risk. This creates a targeted re-validation surface at every model upgrade: only suppression rules need re-testing for continued validity; additive rules degrade gracefully (the model is at worst indifferent) whereas suppression rules can fail silently in either direction (rule now redundant, or rule now insufficient against an opposite new default).
- The external deployment context — system prompt template, context length, temperature, wrapper instructions — is an implicit assumption source equivalent in fragility to model version. If a kit's behavioral contract was calibrated against a specific system-prompt framing, changes to that framing can break the contract just as a model upgrade can. Kit metadata should declare a minimum external context specification, not only a minimum model tier, so that changes to the deployment environment trigger the same re-validation protocol as model version changes.

*Step 3.6 supplement complete 2026-07-02. Both counter-priors: scope conditions added, no confidence tier changes, no HIGH → CONSENSUS downgrades.*

---

## Steps 3.5 and 3.6 — Fresh Subagent Passes (2026-07-05)

### Step 3.5 — Independent Tier Assignment
Discrepancies found (existing → fresh-pass):
- **model-reliability-gaps**: CONSENSUS → MEDIUM. One HIGH-quality paper anchors the group, but all three claims originate from a single source (arXiv 2602.16666), and the single-source caveat prevents HIGH regardless of that paper's quality.
- **llm-evaluation-validity**: CONSENSUS → MEDIUM. A position paper synthesizing ~100 studies provides broad but not primary empirical coverage, and the remaining claims fall to editorial consensus, leaving no single high-verify empirical anchor.
- **workflow-pattern-model-tier**: HIGH (narrow) → HIGH. Verbatim-confirmed specific quantitative failure rates (77.3% and 87.3%) from a single ICML 2026 paper (arXiv:2601.22208) constitute a very high quality source with clear mechanism and scope, meeting the single-source HIGH criterion.
- **code-generation-robustness**: HIGH (narrow) → MEDIUM. Both claims are verbatim-confirmed from the same paper (arXiv 2503.20197), and same-source limitation caps the group at MEDIUM despite mechanistic coherence.
- **production-drift-monitoring**: CONSENSUS (caveated) → CONSENSUS. The primary source (arXiv 2605.01604) is explicitly synthetic and carries no empirical weight; the group is supported only by directional plausibility from Goodhart's Law literature, placing it at CONSENSUS.

### Step 3.6 — Counter-Prior Results
HIGH groups tested: 3 | Confirmed: 0 | Scope caveat: 3 | CONTESTED: 0

**PLAUSIBLE WITH SCOPE CAVEAT:**
- kit-validation-methodology: The "repeat runs ≥3 required for non-deterministic inference" sub-claim is not grounded in either cited paper: SIFo ran all experiments at temperature=0 (explicitly for determinism) and MOSAIC reports no repeat-run protocol. The interaction-failure mechanism that supports per-constraint testing is specifically demonstrated for semantic/lexical constraint pairs (readability vs. keyword conflicts, clarity vs. unambiguous language synergies) in MOSAIC — not for purely structural constraints such as file naming, directory layout, or section presence. HIGH applies to multi-constraint evaluation involving semantic/lexical constraints; for kit validation contexts operating at temperature=0 over predominantly structural constraints, the pairwise interaction failure rate is not established by the cited evidence, and the ≥3 runs recommendation has no support in either paper.
- workflow-pattern-model-tier: Failure rates are empirically measured only on 4B-parameter models (Llama 3.2, Qwen 3 4B); the ≤7B class boundary and the ≥32B minimum prescription are extrapolated beyond the tested parameter range. The mitigation as stated is also incomplete: the paper itself exempts ReAct workflows from the failure pattern, meaning a kit could alternatively prescribe ReAct-for-small-models rather than model upsizing — a mitigation path the HIGH claim does not name.
- code-generation-robustness: The mechanistic finding is HIGH confidence only within the tested scope: models at or below 7B parameters generating Java code in method-completion tasks. Outside that scope — larger proprietary models, non-Java languages, full-function generation formats — the claim is extrapolated rather than evidenced, and competing explanations (training-data distributional gap rather than latent decoding-strategy awareness) are equally parsimonious. The kit prescriptions (entry-point validation, post-generation review) remain valid defensive practice regardless of scope, but the necessity argument depends on the finding generalizing to larger models, which is not established.
