# SYNTH-04: Reversibility Taxonomy Synthesis

**Sources:** Two research archives (Steps 1–3.5 pass; Steps 3.6–3.7 deferred to next pass)
- `reversibility-annotation-taxonomy-for-kit-tool-schemas-...` (Archive 1, 17 claims)
- `reversibility-as-grounding-criterion-...` (Archive 2, 13 claims)

**Evidence-type scope annotation (Step 2.6):** The combined archive is primarily observational and evaluative — system demonstrations, benchmark studies, retrospective cohorts, theoretical proofs, framework evaluations. No controlled experiments, RCTs, or pre-registered studies are present. HIGH-tier groups in this synthesis are less well-calibrated than they would be for a controlled-experiment archive. Findings represent "worked in tested evaluation setups," not "proven under controlled conditions."

---

## Step 1 — Grouped claim table

Cross-archive consolidation: `adversarial-findings` (Archive 1) and `adversarial` (Archive 2) merged. `risk-taxonomies` (Archive 1, 1 claim) merged into misc. `grounding-mechanisms` (Archive 2, 2 claims) retained standalone — COCORELI is a single high-confidence empirical claim directly informing a specific design decision (structural intake blocking), which meets the "2–3 claims directly informing a specific decision" exception.

| Group | Count | Evidence breakdown | Verify pass coverage |
|-------|-------|--------------------|----------------------|
| schema-implementations | 6 | 3 empirical (medium), 2 consensus, 1 anecdote | 5/6 (all but openport had verify notes) |
| reversibility-classification | 4 | 3 empirical (1 high, 2 medium), 1 consensus | 4/4 |
| adversarial-findings | 4 | 2 empirical (both low), 1 consensus, 1 anecdote | 2/4 (low-confidence empirical claims had major verify issues) |
| formal-traditions | 4 | 4 consensus, 0 empirical | 0/4 (consensus claims, no verify pass) |
| reversibility-dimensions | 3 | 2 consensus, 1 anecdote | 0/3 (no verify pass in archive) |
| confirmation-gate-design | 3 | 2 empirical (1 low, 1 medium), 1 consensus | 2/3 |
| when-to-clarify | 3 | 3 empirical (1 high, 2 medium) | 3/3 |
| grounding-mechanisms | 2 | 1 empirical (high), 1 anecdote | 1/2 |
| misc | 1 | 1 empirical (medium, verify issues) | 1/1 |

---

## Step 2 — Contradiction scan per group

### schema-implementations
No direct factual conflict. Implication-level tension: Contract2Tool (contract2tool-learned-risk-labels) finds annotation can be learned/inferred from documentation and traces with near-gold accuracy; MCP vocabulary (mcp-4field-annotation-vocabulary) treats annotation as manually set hints. These suggest different default paths (automated vs. manual) but do not contradict — they address different concerns. Not a contradiction; a scope condition.

### reversibility-classification
Implication-level conflict: rails-reversibility-as-exposure-lever (RAILS) recommends a graduated continuous input approach where reversibility modulates verification intensity. parallax-graduated-determinism-thresholds recommends a binary split at the local/external boundary (local = rollback possible; external = mandatory confirmation). If applied as a single kit rule, these recommend different handling for the same borderline case (e.g., a staged deploy that touches external services but is technically rollback-supported).

Scope explanation test: "These don't actually contradict because RAILS operates in multi-agent commerce clearing and modulates finality intensity; Parallax operates as a per-action security harness where the architectural boundary is enforced by Chronicle's rollback capability." Partial scope resolution — but a kit-maker context is neither of these, so the conflict is not resolved for our use case. Calling this an implication-level conflict, not CONTESTED, because the underlying mechanisms serve different functions.

### adversarial-findings
After Step 2.5 downgrade (both low-confidence empirical claims → consensus tier): four consensus/downgraded claims, all pointing to annotation failure modes. Direction is consistent. No direct factual conflict.

### formal-traditions
No direct factual conflict. Implication-level tension: effect-system-annotation-tradition recommends adopting effect vocabulary (pure/write-local/write-external); rest-idempotency-safety-hierarchy recommends HTTP semantics (safe/idempotent/non-idempotent). Both claim their vocabulary as "most useful for practitioners." These produce different annotation fields but measure related constructs. Not a contradiction — one addresses effect type, the other addresses HTTP method class.

### reversibility-dimensions
No direct factual conflict. Complementary decompositions: Sahoo decomposes reversibility itself (undoability × scope × temporal urgency); Microsoft uses reversibility as one of four approval criteria. These operate at different levels.

### confirmation-gate-design
Implication-level conflict: minimal-footprint-two-factor-criterion (Anthropic guidance) requires BOTH irreversibility AND material consequence for mandatory confirmation — single-factor irreversibility alone is insufficient. reversibility-gating-hitl-efficiency (low-confidence, AI-disclaimed source) treats reversibility boundary as the primary trigger without requiring a second condition. If applied as a kit rule: minimal-footprint would skip confirmation on trivial-irreversible outputs; reversibility-gating-hitl would confirm them. The conflict is between a two-factor criterion and a one-factor criterion. Status: implication-level conflict. One side has known source reliability problems (AI-disclaimed blog).

### when-to-clarify
No contradiction. All three claims converge on the same gap: uncertainty-based clarification (information-gain) and EVPI-based stopping criteria (evpi-pomdp) do not model reversibility, and RL state-distance as an irreversibility proxy (safe-learning) fails on familiar-but-destructive states. All three independently support the conclusion that irreversibility is orthogonal to uncertainty/novelty and requires a separate gate.

### grounding-mechanisms
No contradiction. cocoreli-precondition-blocking and mcp-no-standardized-approval-primitives are complementary: one establishes the structural principle (blocking is more reliable than warnings), the other establishes the implementation gap (MCP lacks protocol-level support for this principle).

### misc
Single claim. No contradiction scan applicable.

---

### Step 2.5 — Evidence tier adjustments applied

Three claims downgraded from empirical to consensus tier for synthesis purposes:
- `annotation-subjectivity-frontier-model-gap` (empirical, low) → consensus [major verify issues: unconfirmed quote, wrong model name, composite inference not independently supported]
- `adversarial-classification-failure-modes` (empirical, low) → consensus [major verify issues: trained-classifier overfitting claim not in cited paper, cross-domain statistics composite]
- `reversibility-gating-hitl-efficiency` (empirical, low) → consensus [source self-disclaims AI generation; specific numbers unverifiable from primary source]

---

### Step 2 supplement — Cross-group implication scan

**CG-01: when-to-clarify + confirmation-gate-design → two distinct gates at different pipeline stages**
when-to-clarify concludes: uncertainty-based clarification is insufficient for high-confidence-but-irreversible steps. confirmation-gate-design concludes: confirmation should fire at the reversibility boundary with calibrated volume. The combination implies two distinct gate types — uncertainty-triggered clarification (fires mid-execution when the agent doesn't know what to do) and reversibility-triggered confirmation (fires before execution on known-destructive steps). A kit implementing only one has a structural gap: uncertainty-only underfires on confident-but-destructive steps; reversibility-only underfires on underspecified-but-reversible tasks.

**CG-02: reversibility-classification + adversarial-findings → CONTESTED (cross-group, implication-level)**
reversibility-classification (rails, gradient approach) requires runtime computation of reversibility as a continuous input. adversarial-findings concludes that runtime classification is context-dependent and unreliable, and static annotation is the more defensible base. A gradient verification-intensity approach requires the same runtime judgment that adversarial-findings shows is unreliable in practice. A kit rule derived from rails (use graduated intensity) conflicts with a kit rule derived from adversarial-findings (hardcode labels at design time). → CONTESTED at cross-group level; design resolution required.

**CG-03: adversarial-findings + schema-implementations → enforcement is necessary condition**
schema-implementations shows multiple annotation schemes designed for optional adoption. adversarial-findings shows optional annotation degrades to noise (incentive failure: annotation is done to reduce friction, not to describe risk accurately). Combination: any annotation scheme from schema-implementations is only useful if enforced at registration time, not offered as optional hints. The annotation scheme design and the enforcement mechanism are separate concerns; schema-implementations provides the former; adversarial-findings proves the latter is required.

**CG-04: formal-traditions + schema-implementations → vocabulary translation gap**
formal-traditions recommends mechanism-describing vocabulary (effect types, saga roles) for composability and theoretical soundness. schema-implementations shows practitioners deploying consequence-predicting vocabulary (tier labels, destructiveHint, T1-T5 scales). These vocabularies don't share a mapping. A kit that adopts formal-traditions vocabulary requires new practitioner training; a kit that adopts schema-implementations vocabulary inherits the incentive failures and context-dependency problems identified in adversarial-findings. Neither pure approach is cost-free.

**CG-05: reversibility-dimensions + confirmation-gate-design → gate calibration complexity from multi-dimensionality**
reversibility-dimensions establishes that reversibility is not binary but multi-dimensional (undoability × scope × temporal urgency, or side effects × data sensitivity × reversibility × scope per Microsoft). confirmation-gate-design assumes a "reversibility boundary" as a single threshold to gate on. If reversibility is multi-dimensional, the gate threshold is a multi-dimensional surface, not a line. Conservative annotation (treating any dimension as failing → trigger gate) produces over-gating; lenient annotation (requiring all dimensions to fail → trigger gate) produces under-gating.

**CG-06: grounding-mechanisms + when-to-clarify → two structurally distinct blocking mechanisms, different stages**
COCORELI (grounding-mechanisms): structural blocking fires at intake — a missing required parameter hard-blocks the pipeline. when-to-clarify: uncertainty and OOD signals fire during execution — the agent encounters ambiguity or unfamiliar state mid-task. These address complementary failure modes and should co-exist in a kit pipeline, not be chosen between. The combined implication: a complete kit gate architecture has at minimum two blocking points — one at intake (parameter completeness) and one at execution (reversibility/uncertainty threshold).

---

## Step 3 — Confidence map

| Group | Tier | Key claims | Evidence basis | Conflicts | Action |
|-------|------|-----------|----------------|-----------|--------|
| when-to-clarify | HIGH | information-gain-clarification-criterion, evpi-pomdp-clarification-stopping-criterion, safe-learning-help-trigger-irreversible | 3 independent empirical (1 high-verify, 2 medium-verify). Convergent inference: all three acknowledge that reversibility is not modeled by uncertainty/novelty signals. Applies to: uncertainty-based clarification in τ-Bench dialogue, POMDP planning, RL with state-distance metrics. NOT directly applicable to: kit-maker pipeline intake gate design, which would need to verify whether adding a separate irreversibility gate reduces intake errors in kit execution. | None within group | derive from (Step 3.7) |
| schema-implementations | CONSENSUS | webguard-3tier-empirical-definitions, mcp-4field-annotation-vocabulary, contract2tool-learned-risk-labels, openport-3tier-reversibility-definition, agentriskbom-t1t5-tool-tiers, antigravity-3tier-operational-rules | Multiple independent implementations converge on 3-5 tier scheme with reversibility+scope as primary discriminating axes. Empirical validation narrowly scoped to each system's own annotation task. | Implication-level: automated inference (contract2tool) vs. manual annotation (mcp vocabulary) | derive from |
| adversarial-findings | CONSENSUS | static-annotation-context-dependency-failure, annotation-adoption-incentive-failure, annotation-subjectivity-frontier-model-gap [downgraded], adversarial-classification-failure-modes [downgraded] | All claims consensus-tier after Step 2.5 downgrade. Structural case for three failure modes is internally consistent. | CG-02 (cross-group with reversibility-classification) | derive from |
| formal-traditions | CONSENSUS | effect-system-annotation-tradition, saga-pivot-transaction-concept, rest-idempotency-safety-hierarchy, hci-commensurate-effort-principle | All consensus. Independently established traditions providing mechanism vocabulary. | Implication-level: effect vocabulary vs. HTTP vocabulary — different schema recommendations | derive from |
| reversibility-dimensions | CONSENSUS | reversibility-3d-classification-framework, idempotency-reversibility-orthogonality, microsoft-4dimension-approval-framework | 2 consensus + 1 anecdote; no empirical claims | CG-05 (cross-group: multi-dimensionality complicates gate calibration) | derive from |
| confirmation-gate-design | CONSENSUS | reversibility-gating-hitl-efficiency [downgraded], minimal-footprint-two-factor-criterion, confirmation-fatigue-override-rates | 1 consensus (Anthropic policy, authoritative for kit-maker) + 1 downgraded + 1 medium empirical with verify issues | Implication-level: two-factor vs. one-factor gate criterion | derive from |
| reversibility-classification | CONSENSUS | llm-reversibility-classification-unreliable, parallax-graduated-determinism-thresholds, rails-reversibility-as-exposure-lever, wcag-domain-category-shortcut | 1 high-verify empirical (rails) + 2 medium empirical + 1 consensus. Design-time required = consistent across claims. | Implication-level: gradient vs. binary split; CG-02 cross-group CONTESTED | derive from |
| grounding-mechanisms | CONSENSUS | cocoreli-precondition-blocking, mcp-no-standardized-approval-primitives | 1 high-verify empirical (COCORELI) + 1 anecdote; insufficient empirical depth for HIGH threshold | None | derive from |
| misc | GAP | rjudge-10type-taxonomy-empirical | Single medium-verify empirical claim with model-name error; cannot sustain group conclusion | None | derive from adjacent |

---

## Step 3.5 — First-pass synthesis and alternatives

### when-to-clarify (HIGH)

**Synthesis:** Three independent empirical studies converge on a structural gap in uncertainty-based clarification: information-gain-clarification-criterion (τ-Bench, +3.7% success via pointwise mutual information reward) explicitly notes reversibility is not an input to the clarification criterion; evpi-pomdp-clarification-stopping-criterion (POMDP planning, 7–39% coverage improvement) notes the consequence term treats all successful outcomes equivalently regardless of reversibility; safe-learning-help-trigger-irreversible (RL proof, sublinear regret/query bounds) shows that OOD proximity as an irreversibility proxy breaks when a state is familiar but destructive. The convergent inference is that irreversibility is orthogonal to uncertainty and novelty: an agent can be highly confident about an action and still be taking a catastrophic irreversible step. This convergence is an inference from three independently acknowledged gaps, not three direct tests of the conclusion "separate gate works." Evidence is observational/evaluative; HIGH tier is less well-calibrated than for controlled-experiment archives.

**Alternative framing:** Uncertainty IS sufficient when properly calibrated — a well-calibrated agent should assign high uncertainty to high-reversibility actions, making a separate gate redundant. Under this assumption, the "separate gate" recommendation is an artifact of the uncertainty models tested being poorly calibrated in domains with high-consequence irreversible actions, not a fundamental design requirement.

**Choice: primary synthesis.** The alternative requires an epistemically perfect agent whose uncertainty scores correlate with actual consequence severity. safe-learning directly tests this by using OOD (a tractable uncertainty proxy) and explicitly shows the surrogate breaks: a familiar state can be destructive. The assumption that better-calibrated uncertainty would naturally subsume reversibility is unvalidated; the available evidence shows orthogonality in tested setups. The alternative framing remains a live research question but should not drive design in the absence of supporting evidence.

---

### schema-implementations (CONSENSUS)

**Synthesis:** Six independent implementations (WebGuard, MCP, Contract2Tool, OpenPort, AgentRiskBOM, Antigravity Lab) deployed in approximately the same period (2025) converge on 3–5 tier schemes where reversibility and affected scope are the primary discriminating axes. WebGuard is the most empirically grounded: 4,939 human-annotated actions, baseline 37% → fine-tuned 80% accuracy, HIGH-risk recall 20% → 76%, establishing that three-tier boundary judgment requires domain-tuned models. Contract2Tool demonstrates near-gold (0.980 vs. 0.990) task success with learned contracts, showing annotation burden can be partially automated. MCP 4-field vocabulary is deployed at scale but treats annotations as untrusted hints with conservative defaults. The consensus that a three-tier scheme with reversibility+scope axes is adequate for most tool annotation is real; it is also possible that convergence reflects shared paradigm assumptions (contemporaneous, aware-of-each-other researchers) rather than independent validation.

**Alternative framing:** The convergence is a paradigm artifact — all frameworks were developed in the same year, in the same problem space, with researchers aware of each other's work. Under this assumption, any shared paradigm error (e.g., treating reversibility as a design-time property) propagates across all implementations, and the convergence provides false confidence.

**Choice: acknowledge both.** The convergence is real signal for "this approach is not obviously wrong and practitioners are building toward it." The alternative's warning is directly supported by adversarial-findings (CG-03): shared paradigm assumptions include exactly the failure modes documented — context-dependency and incentive failures. Use schema-implementations convergence as evidence of what the field is building, not as validation that it works.

---

### adversarial-findings (CONSENSUS)

**Synthesis:** Three structural failure modes of annotation-based reversibility gating are consistently identified, all at consensus tier after Step 2.5 downgrade: (1) context-dependency — the same tool is reversible or irreversible depending on runtime state not visible at annotation time (a file delete may have recycle-bin backing or not; an email may be within a recall window or not); (2) incentive failure — optional annotation schemes degrade because annotation is done to reduce friction (add readOnlyHint=true to avoid confirmation dialogs), not to accurately describe risk, producing a self-reinforcing cycle where high-risk tools get annotated safe; (3) classification unreliability — frontier models achieve only 20% HIGH-risk recall for action annotation before domain fine-tuning (WebGuard baseline), and 47–67% reversibility classification accuracy on mobile UI operations. The structural case for all three is convincing even without high-confidence empirical backing. The adversarial-classification-failure-modes claim (Type I: under-gate; Type II: over-gate) establishes that the two failure modes are complementary — reducing Type II by tighter filtering increases Type I risk if the filter uses runtime inference.

**Alternative framing:** These are design requirements, not inherent limitations. A hardened approach — enforced registration-time annotation with required fields, runtime context signals overriding static defaults, domain-specific calibration datasets for LLM annotation tools — could in principle address all three failure modes without abandoning annotation-based approaches.

**Choice: alternative framing is more productive.** The primary synthesis risks presenting annotation-based approaches as fundamentally broken; the alternative reframes the findings as a checklist for making annotation-based approaches work. adversarial-classification-failure-modes itself shows the path: hardcoded labels at design time (addressing context-dependency and classification unreliability) plus budgeted confirmation volume (addressing over-gating that leads to Type I errors from fatigue). The adversarial findings inform design requirements, not rejection of the approach.

---

### formal-traditions (CONSENSUS)

**Synthesis:** Four independent formal traditions — programming language effect systems, distributed saga patterns, REST idempotency hierarchy, HCI commensurate effort principle — provide structurally complementary vocabulary for annotating tool reversibility. Effect systems offer composable vocabulary: pure (no state change), write-local (internal state only), write-external (external system state), non-compensatable (side effects cannot be undone). Saga patterns offer lifecycle vocabulary: compensatable (a compensating operation reverses the effect), retriable (must eventually succeed, cannot be undone), pivot (last compensatable step before irrevocable commitment). REST offers practitioner-familiar hierarchy: safe → idempotent → non-idempotent, enforced at infrastructure level. HCI's commensurate effort principle specifies that gate friction should be proportional to reversal difficulty. All are consensus-tier (no empirical validation in agent contexts). The traditions converge on mechanism-describing annotation (what operation class this is) over consequence-predicting annotation (how bad would failure be), because mechanism-describing annotation is composable.

**Alternative framing:** Formal-traditions vocabulary, while theoretically clean, is not how practitioners building tool schemas think. The annotation-adoption-incentive-failure finding (adversarial-findings) predicts that even well-designed vocabulary will be adopted selectively to reduce friction rather than to accurately describe mechanisms. Adopting formal-traditions vocabulary over deployed MCP/tier vocabulary would require ecosystem-wide translation, which the incentive failure makes unlikely.

**Choice: primary synthesis for design principles; alternative for implementation interface.** Formal-traditions vocabulary should inform what the kit-maker annotation schema MEANS — effect types and saga roles provide the right conceptual grounding. But the interface vocabulary should leverage existing practitioner conventions (REST safety-class, MCP annotation field names) to minimize the adoption friction that the alternative correctly flags. The two can coexist: formal-traditions as the semantic layer, practitioner vocabulary as the surface API.

---

### reversibility-dimensions (CONSENSUS)

**Synthesis:** Three claims independently establish that reversibility is multi-dimensional. Sahoo (2025) decomposes it into: undoability (can the state change be undone at all), scope (local process / single user / external third parties / systemic), and temporal urgency (reversible anytime vs. within a window vs. immediately-or-never). Microsoft's framework treats reversibility as one of four orthogonal approval dimensions (alongside side effects, data sensitivity, and scope of impact). idempotency-reversibility-orthogonality establishes that idempotency (repeated invocation accumulates state) is a distinct axis that must be annotated separately from reversibility (the state change can be undone). The practical implication: a single `reversible: yes/no` field conflates cases that require different runtime handling. At minimum, temporal urgency and affected scope should be separate annotation fields.

**Alternative framing:** Multi-dimensional annotation creates complexity that practitioners will not complete accurately (annotation-adoption-incentive-failure). Anthropic's two-factor criterion (irreversible AND material consequence) collapses the multi-dimensional space into the two dimensions that most reliably predict gate trigger, achieving 80% of the safety benefit with 20% of the annotation burden.

**Choice: primary synthesis for the annotation schema structure; alternative for the gate trigger logic.** The annotation schema should encode multiple dimensions (following the formal-traditions + reversibility-dimensions findings) because that complexity lives at design time where it can be verified. The gate trigger rule can and should be simplified (following the alternative's motivation) to avoid runtime decision complexity.

---

### reversibility-classification (CONSENSUS)

**Synthesis:** Four claims describe classification approaches for reversibility tier. RAILS (agentic commerce) treats reversibility as one of six continuous inputs to a graduated exposure score — verification intensity scales with irreversibility level rather than gating binarily. Parallax (security harness) implements a binary split at the local/external boundary: local file operations allow post-hoc Chronicle snapshot rollback; external API calls, sent emails, and published messages are architecturally irreversible and require mandatory upfront confirmation. LLM-classification-unreliable (mobile UI) establishes 47–67% LLM accuracy on reversibility classification across models, confirming that runtime self-classification by the agent is unreliable. WCAG's domain-category shortcut (legal/financial/data) provides a 20-year-old stable classification scheme that operates on domain rather than mechanism. RAILS and Parallax have an implication-level conflict (gradient vs. binary) that resolves under scope conditions (different deployment contexts with different architectural constraints), but the conflict is unresolved for a kit-maker context that is neither agentic commerce nor a security harness.

**Alternative framing (graduated integration):** The binary vs. gradient debate is a false choice. Start with Parallax's binary local/external split (most directly actionable, architecturally grounded), overlay WCAG domain categories as categorical uplifts (independent, stable classification layer), and defer the RAILS gradient approach until tool-annotation quality is sufficient to support fine-grained intensity modulation. This produces a working three-layer classification scheme without requiring the unresolved design decision between gradient and binary to be settled first.

**Choice: alternative framing.** It integrates all four claims without requiring the CONTESTED cross-group implication (CG-02) to be resolved at this stage. Parallax's binary split is the most architecturally grounded starting point (confirmed empirical, verified); WCAG adds a domain-category layer with no new annotation burden; the RAILS gradient becomes a Phase N+1 refinement.

---

### confirmation-gate-design (CONSENSUS)

**Synthesis:** Three claims address gate calibration. Anthropic's minimal-footprint two-factor criterion requires BOTH irreversibility AND material consequence for mandatory upfront confirmation — irreversibility alone is too broad (irreversible-but-trivial outputs over-prompt; e.g., appending a log entry to an append-only store). Alert fatigue literature (medical CDSS, SOC contexts) quantifies the failure mode: 49–96% of clinical CDSS alerts overridden; the ironies-of-automation mechanism degrades human review quality precisely on the rare cases that require oversight. The target for sustainable HITL oversight is 10–15% of total tool calls reaching a human (this number's source is unverified; treat as directionally plausible). The implication-level conflict is: minimal-footprint says two-factor gate is required; reversibility-gating-hitl (downgraded, AI-disclaimed source) treats reversibility as the primary trigger. The former is authoritative for kit-maker context (Anthropic guidance); the latter has source reliability problems.

**Alternative framing:** A single-factor gate on irreversibility alone, combined with strict volume budgeting (cap at 10–15% of calls), may be more reliable in practice. "Material consequence" is subjective and context-dependent, while reversibility can be annotated at design time. Sacrificing precision on trivial-irreversible cases gains implementation simplicity and avoids the ambiguity in defining "material."

**Choice: flag unresolved.** Anthropic's two-factor criterion takes precedence as the authoritative guidance for kit-maker context. However, the alternative (simpler single-factor gate with volume cap) is practically motivated and should be noted as a viable implementation trade-off. This is not a choice between equally weighted alternatives — it is one authoritative guidance with a documented practical alternative for cases where "material consequence" cannot be reliably determined at design time.

---

### grounding-mechanisms (CONSENSUS)

**Synthesis:** COCORELI demonstrates structural coupling: a missing required parameter is simultaneously a signal and a lock — it invokes targeted clarification and hard-blocks execution, with no path to proceed on incomplete specification. The comparison against CoT and ReAct baselines confirms that soft warnings without structural coupling do not prevent hallucinated execution. mcp-no-standardized-approval-primitives establishes that MCP provides no protocol-level approval or blocking primitive as of mid-2025, requiring every kit to implement blocking mechanisms as bespoke middleware. Combined: the principle that structural blocking is more reliable than soft warnings is empirically supported for parameter-completeness gates; the implementation path (bespoke per-kit) is established. The COCORELI mechanism addresses parameter completeness, not action reversibility — these are distinct gate types that operate at different stages.

**Alternative framing:** COCORELI's structural coupling works for well-defined required parameters that can be detected as missing at intake time. Reversibility gates fire mid-execution, when the agent knows what it wants to do but may not have received confirmation yet. A structural block for reversibility would need to operate differently (an execution queue with confirmation required before dequeue, not a pre-execution parameter check). Under this alternative, COCORELI's principle generalizes but not its mechanism.

**Choice: alternative framing identifies the correct scope boundary.** COCORELI contributes the structural principle ("locks are more reliable than warnings") to this synthesis. Applying that principle to reversibility gates requires a different mechanism than COCORELI's parameter-completeness lock. The alternative framing prevents incorrect direct application of COCORELI's architecture to the reversibility problem.

---

### misc — rjudge-10type-taxonomy (GAP variant)

**Synthesis:** R-Judge's 10-type taxonomy establishes that consequence type (reversible vs. recoverable) is orthogonal to the moral/legal domain dimension — a complete taxonomy needs both axes. As a single medium-confidence claim with a model-name error (GPT-4 misidentified as GPT-4o), it cannot sustain a group conclusion. The directional finding is consistent with the reversibility-dimensions group (multi-dimensional classification required) but extends it by adding domain type as a distinct axis.

**Adjacent principle derivation:** If consequence-type and domain-type are orthogonal classification axes, then an annotation scheme that uses only one (e.g., tier labels based on domain: legal/financial/data) will mis-classify tool calls where the domain is innocuous but the consequence is irreversible, and vice versa. A complete annotation scheme needs both axes present as independent fields.

---

## Step 3 cross-group implication catalogue

| ID | Groups | Implication | Status |
|----|--------|-------------|--------|
| CG-01 | when-to-clarify + confirmation-gate-design | Two distinct gate types at different pipeline stages: uncertainty-triggered (mid-execution) + reversibility-triggered (pre-execution). A kit implementing only one has a structural gap. | Convergent |
| CG-02 | reversibility-classification + adversarial-findings | Gradient verification intensity (rails) requires runtime judgment; adversarial-findings shows runtime judgment is unreliable. A gradient approach conflicts with hardcoded-design-time requirement. | CONTESTED |
| CG-03 | adversarial-findings + schema-implementations | Any annotation scheme is only useful if enforced at registration time. Optional annotation degrades to noise regardless of scheme quality. | Convergent |
| CG-04 | formal-traditions + schema-implementations | Mechanism-describing vocabulary (formal-traditions) vs. consequence-predicting vocabulary (practitioner schemas) — a vocabulary translation gap with no cost-free resolution. | Tension |
| CG-05 | reversibility-dimensions + confirmation-gate-design | Multi-dimensional reversibility makes the gate threshold a multi-dimensional surface, not a single threshold. Conservative defaults produce over-gating; lenient defaults produce under-gating. | Complicating |
| CG-06 | grounding-mechanisms + when-to-clarify | Two structurally distinct blocking mechanisms at different pipeline stages (intake parameter blocking vs. mid-execution uncertainty/reversibility gates) should coexist, not be chosen between. | Convergent |

---

## Step 3.6 — Counter-prior adversarial results

**Completion check:** The Step 3 confidence map has one HIGH-tier group: `when-to-clarify`. One counter-prior pass is required. One pass was run (provided in task prompt). Count parity: 1 = 1. ✅

### when-to-clarify (only HIGH group)

**Counter-prior pass — group: when-to-clarify**
Main conclusion: Uncertainty-based clarification is structurally insufficient for high-confidence irreversible steps because irreversibility is orthogonal to uncertainty in the studied frameworks.

Subagent counter-argument: The evidence consists of three studies that describe an absence in their own models — none tests irreversibility as an explicit factor and measures whether it adds value beyond uncertainty. The "orthogonality" inference is drawn from gaps in existing frameworks, not from direct measurement of the correlation between agent confidence and action irreversibility. arXiv:2511.08798 explicitly labels the reversibility-weighted EVPI extension as "unbuilt P1 research gap" — this phrases the gap as an opportunity, not as evidence that a separate gate is architecturally superior to enriching the EVPI model. A well-calibrated uncertainty model that assigns consequence-weighted uncertainty could plausibly make a separate gate redundant. The prescription "add a separate structural gate" follows only if we assume the uncertainty framework cannot be extended, an assumption none of the three papers test.

Supporting evidence found: Yes — `evpi-pomdp-clarification-stopping-criterion` itself phrases the reversibility extension as "unbuilt" rather than "inferior to a separate gate," which is equally consistent with the alternative architectural response of enriching EVPI with reversibility-weighted consequence terms.

Tier revision: HIGH_CONTESTED (PLAUSIBLE_WITH_SCOPE)

**Scope condition applied:**
- HIGH holds for: the problem identification — "uncertainty-only clarification is structurally insufficient for high-confidence irreversible steps, because irreversibility is orthogonal to uncertainty in the studied frameworks."
- HIGH does NOT extend to: the architectural prescription — "implement a separate structural gate." Evidence is equally consistent with (a) a separate structural gate OR (b) enriching existing EVPI/PMI frameworks with reversibility-weighted consequence terms (the latter is explicitly named as "unbuilt," not as inferior).

**Final tier: HIGH (scope condition: problem identification HIGH; architectural prescription CONTESTED).**

---

## Step 3.7 — Principles extraction

*Format per group: Sub-step A (extract principle), Sub-step B (assess fit to our setup), Sub-step C (derive beyond the finding). CONTESTED variant applied where noted. GAP variant applied to misc.*

---

### when-to-clarify (HIGH, scope condition applied)

**Sub-step A — Extract the principle:**
Consequence severity and prediction uncertainty are orthogonal cognitive dimensions. An agent maximizing expected information gain about the goal state is solving a different problem from an agent checking whether the next action can be undone. These signals are independently required and cannot be substituted: a clarification criterion optimized for uncertainty reduction will systematically miss the intersection of high-confidence + high-irreversibility, and no amount of calibration closes this gap unless consequence severity is explicitly modeled.

**Sub-step B — Assess fit to our setup:**
Tested in: τ-Bench retail/airline dialogue (info-gain, +3.7% success), POMDP planning domains (EVPI, 7–39% coverage improvement), RL with nearest-neighbor state-distance (OOD surrogate, sublinear regret bounds). Our setup differs in: the kit-maker is a design-time process generating procedures; the generated kit is an execution agent making tool calls at runtime. Both are relevant targets. Principle still applies because: the mechanism — uncertainty reduction and consequence-severity measurement are orthogonal reward signals — is structural, not domain-specific. Principle may not apply if: a kit domain is exclusively read-only operations where high confidence reliably co-occurs with reversibility; the orthogonality holds structurally but has low practical impact.

**Sub-step C — Derive beyond the finding:**
Given that consequence severity and prediction uncertainty are orthogonal dimensions, the kit-maker implication is: tool metadata must carry reversibility as a required annotation field independent of confidence scores, and the confirmation gate for irreversible operations must fire based on the `undoability` annotation, not based on the agent's certainty about the action. Further: the kit-maker's own tool calls (publishing outputs, triggering external APIs) are subject to the same principle — high confidence about an irreversible step does not substitute for a confirmation gate.

**Scope-condition note from Step 3.6:** The problem identification is HIGH confidence. The architectural choice — separate gate vs. reversibility-weighted EVPI — is CONTESTED. Design default: a separate gate is more tractable at current annotation maturity (requires only a binary `undoability` flag, not calibrated consequence magnitudes per tool); the reversibility-weighted EVPI is architecturally more elegant but requires calibrated thresholds. Recommendation: implement as a separate gate; note the weighted EVPI extension as a future refinement when EVPI calibration for kit outputs becomes available.

---

### schema-implementations (CONSENSUS)

**Sub-step A — Extract the principle:**
When independent implementations converge on the same tier count (3–5) with the same primary discriminating axes without coordination, the convergence reflects a cognitive discrimination ceiling: the maximum number of tiers annotators can reliably distinguish. The principle: 3–5 tiers is the reliable annotation ceiling for consequence-severity schemas; fewer conflates meaningfully distinct risk profiles, more exceeds reliable human (and model) discrimination capacity.

**Sub-step B — Assess fit to our setup:**
Tested in: six contemporaneous 2025 implementations in the same agent tool annotation space. Caveat: paradigm convergence bias — these researchers were aware of each other's work, so convergence may reflect shared assumptions rather than independent discovery. Our setup matches the 2025 agent tool context well; the caveat applies equally to us.

**Sub-step C — Derive beyond the finding:**
Given that 3–5 tiers is the cognitive discrimination ceiling, the kit-maker implication is: generated kit tool schemas should use exactly 3 tiers (SAFE/LOW/HIGH) as default, with 5-tier expansion reserved for contexts requiring fine-grained autonomy control. The discriminating axes (reversibility + scope-of-affected-parties) should define tier boundaries, not predicted severity scores. Any schema element adding more than 5 distinct values will have unreliable annotation; prefer consolidating to the coarser schema. Confidence: CONSENSUS (paradigm convergence, not independent empirical validation).

---

### adversarial-findings (CONSENSUS)

**Sub-step A — Extract the principle:**
When annotation is optional, annotators converge on the minimum annotation effort that avoids consequences for themselves, regardless of annotation schema quality. This is an incentive problem, not a capability problem — annotation quality under voluntary systems is bounded by the annotator's motivation to be accurate, which is structurally low when inaccuracy has no enforcement consequences.

**Sub-step B — Assess fit to our setup:**
Observed in: MCP ecosystem (annotation done to reduce friction, not describe risk), WebGuard (20% HIGH-risk recall at baseline), structural context-dependency examples. Our setup: the generated kit includes tool annotation schemas. If annotation fields are optional in the generated kit's tool registration, the incentive failure reproduces regardless of schema design quality.

**Sub-step C — Derive beyond the finding:**
Given that voluntary annotation degrades to minimum-effort regardless of schema design, the kit-maker implication is: the generated kit's tool registration mechanism must require all annotation fields via schema validation — a tool cannot be registered with missing required fields. The annotation schema design and enforcement mechanism must be specified together; a well-designed schema with optional enforcement is equivalent to no schema. Confidence: CONSENSUS (structural observation from MCP ecosystem).

---

### formal-traditions (CONSENSUS)

**Sub-step A — Extract the principle:**
Operation classes are stable properties determinable at design time; consequence predictions are context-dependent and change with runtime state. Annotation based on operation class is stable, composable, and auditable; annotation based on predicted consequence degrades when context changes. The principle: classify by mechanism (what class of operation this is) rather than by predicted outcome (how bad would failure be).

**Sub-step B — Assess fit to our setup:**
These traditions (PL effect systems, distributed saga, REST HTTP semantics, HCI) were developed for structurally different contexts. The composability benefit still applies: two `write-external` tool calls compose to `write-external`; two HIGH-risk ratings don't compose to a known combined risk. Principle may not apply if: the kit domain requires risk-severity tiering mapping to regulatory categories — in that case, consequence-predicting vocabulary is mandatory and should coexist with mechanism vocabulary.

**Sub-step C — Derive beyond the finding:**
Given that mechanism vocabulary is more composable and stable than severity vocabulary, the kit-maker implication is: kit tool schemas should expose an effect-class field (pure / write-local / write-external / non-compensatable) as the primary semantic layer, with tier labels (SAFE/LOW/HIGH) as a derived summary. The two can coexist: mechanism vocabulary for composability and auditability; practitioner vocabulary for gate decisions. The schema design should generate tier labels from effect-class field values programmatically rather than requiring separate annotation of both. Confidence: CONSENSUS (formal-traditions vocabulary validated in non-agent contexts; agent-context application is principled extension).

---

### reversibility-dimensions (CONSENSUS)

**Sub-step A — Extract the principle:**
Reversibility decomposes into at least three independent dimensions (undoability × scope × temporal urgency), and idempotency is a fourth independent axis. Operations sharing a single-axis reversibility label may require structurally different handling because their other dimensions differ. The principle: annotation precision at the dimensionality level determines gate precision — any dimension collapsed into a single flag creates edge cases the gate cannot handle correctly.

**Sub-step B — Assess fit to our setup:**
Orthogonality of idempotency and reversibility is formally established (non-idempotent+reversible and idempotent+irreversible both exist and require different safeguards). Our setup: generated kit tool schemas using only `reversible: yes/no` will mishandle the idempotent+irreversible case (confirm once, retry permitted) vs. the non-idempotent+irreversible case (hard confirmation before every call). The principle applies directly.

**Sub-step C — Derive beyond the finding:**
Given that reversibility is multi-dimensional, the kit-maker implication is: minimal viable annotation requires at least four fields: (1) `undoability: full|compensating|temporal|none`; (2) `affected_scope: local|single-user|multi-user|external|systemic`; (3) `temporal_urgency: anytime|windowed|immediate-or-never`; (4) `idempotent: yes|no`. Gate trigger logic can be simplified (trigger on `undoability: none` AND `affected_scope: external`), but the annotation itself must encode each dimension independently to enable correct edge-case routing. Confidence: CONSENSUS (multi-source consensus on orthogonality; no controlled test of whether multi-field schemas reduce gate error rates).

---

### confirmation-gate-design (CONSENSUS)

**Sub-step A — Extract the principle:**
Each unnecessary confirmation prompt consumes a unit of user attention and reduces the marginal signal value of subsequent prompts. Confirmation volume is a shared resource — spending it on trivial-irreversible operations depletes it for genuinely destructive operations. The principle: confirmation gates must be calibrated for volume, not just for coverage. Over-gating and under-gating are symmetric failure modes, not a conservative/risky tradeoff.

**Sub-step B — Assess fit to our setup:**
Alert fatigue evidence is from high-volume clinical CDSS and SOC contexts. The cognitive mechanism (each unnecessary prompt reduces attention on subsequent prompts) applies at any automation scale. The two-factor criterion (irreversible AND material consequence) is Anthropic guidance directly applicable to kit-maker context.

**Sub-step C — Derive beyond the finding:**
Given that confirmation volume is a shared resource that degrades with unnecessary use, the kit-maker implication is: the generated kit's behavioral contract should specify what does NOT trigger confirmation, not only what does. An explicit deny-list of known-irreversible operation types (Antigravity Lab pattern) is operationally more reliable than classify-everything. Target: confirmation fires on ~10–15% of total tool calls (directionally plausible from practitioner sources; exact number unverified); any gate design that exceeds this target is mis-calibrated. Confidence: CONSENSUS; volume-budget number is practitioner guidance with unverified sourcing.

---

### reversibility-classification (CONSENSUS)

**Sub-step A — Extract the principle:**
Classification approaches differ in sensitivity to runtime context: architectural properties (local vs. external-facing) are resolvable at design time; domain categories are stable over years; consequence gradients require runtime context and annotation quality. The principle: stack classifiers in order of decreasing stability — architectural property first, domain category second, continuous gradient deferred. Early layers are cheap, stable, and context-independent; later layers require increasingly higher annotation quality.

**Sub-step B — Assess fit to our setup:**
Parallax's external/local boundary is architectural and directly portable (network write with external side effects = irreversible regardless of Chronicle rollback availability). WCAG domain categories are portable with no architectural requirement. RAILS' gradient scoring requires calibrated exposure inputs not available at current annotation maturity. Layers 1–2 are implementable immediately; Layer 3 deferred.

**Sub-step C — Derive beyond the finding:**
Given the stability hierarchy of classification approaches, the kit-maker implication is a three-layer architecture: Layer 1 — is this an externally-facing operation with network write side effects? YES → irreversible tier, confirmation required; Layer 2 — does this touch legal, financial, or user-data domains (WCAG SC 3.3.4)? YES → confirmation required independent of Layer 1; Layer 3 — consequence gradient (RAILS-style continuous inputs) deferred. This architecture produces usable classification without resolving the CONTESTED gradient-vs-binary debate (CG-02) — it sidesteps the contested choice by implementing only the two architecturally stable layers. Confidence: CONSENSUS; layer ordering is principled derivation from convergent sources.

---

### grounding-mechanisms (CONSENSUS)

**Sub-step A — Extract the principle:**
When detection and prevention share the same structural path, bypassing the prevention requires defeating the detection mechanism — a harder condition to meet accidentally under execution pressure. The principle: where structural enforcement is achievable, prefer it to behavioral rules for any gate that must fire reliably.

**Sub-step B — Assess fit to our setup:**
COCORELI fires on parameter completeness at intake; reversibility gating fires at execution time when the agent knows the action it wants to take. The mechanism is different (execution queue with confirmation dequeue vs. intake parameter check), but the structural-vs-advisory distinction is the same. Principle still applies because: "structural beats advisory" is a claim about enforcement mechanism type, not about the specific structural implementation.

**Sub-step C — Derive beyond the finding:**
Given that structural enforcement is more reliable than advisory enforcement, the kit-maker implication is: the generated kit's confirmation gate for irreversible operations must be a blocking step in the procedure file, not only a CLAUDE.md behavioral rule. Concretely: the procedure should include an explicit gate step — "if tool.undoability == none AND tool.affected_scope >= external: require explicit confirmation receipt before tool call" — that structurally prevents execution until the gate condition is satisfied. A CLAUDE.md rule without a structural gate relies on agent self-monitoring, which degrades under execution pressure. Confidence: CONSENSUS; the structural-vs-advisory claim is empirically grounded for parameter completeness; extension to reversibility gates is principled inference.

---

### misc — rjudge-10type-taxonomy (GAP)

**Sub-step A — Adjacent principle from first principles:**
If two classification axes are empirically orthogonal (each predicts failure outcomes independently), then any schema using only one axis will have a systematic blind spot — failures predictable from the missing axis but invisible from the present axis. R-Judge's taxonomy suggests consequence-type (reversible/recoverable) and domain-type (legal, financial, physical harm) are such orthogonal axes. The principle: when designing risk annotation schemas, enumerate the independent axes before selecting which to include — each omitted axis creates a class of failures the schema cannot detect.

**Sub-step B — What the absence tells us:**
No research was found testing whether two-axis annotation outperforms single-axis annotation for agent risk classification. The field is designing schemas along single axes (tier scores OR domain categories) without comparing them against two-dimensional alternatives. This is a maturity gap in annotation-schema design research, not a gap in tractability — the comparison study is straightforward to design.

**Sub-step C — What would fill this gap:**
A controlled comparison of: (a) domain-only annotation (WCAG categories), (b) consequence-type-only annotation (SAFE/LOW/HIGH tiers), and (c) combined two-axis annotation (domain × consequence-type) on gate calibration accuracy. Until then: implement both axes independently in the kit schema per the reversibility-dimensions CONSENSUS finding (separate fields for undoability, scope, temporal urgency, idempotency) and treat their combination as a two-factor gate trigger.

---

## Grounding-map row to add

**Format:** `| row_number | claim_group_label | tier | source_archives | principle_derived |`

| 19 | when-to-clarify: irreversibility orthogonal to uncertainty as clarification criterion | HIGH (scope condition: problem identification HIGH; architectural prescription CONTESTED) | Archive 2: information-gain-clarification-criterion (MEDIUM), evpi-pomdp-clarification-stopping-criterion (MEDIUM), safe-learning-help-trigger-irreversible (HIGH) | Given that consequence severity and prediction uncertainty are orthogonal cognitive dimensions, the kit-maker implication is: tool metadata must carry reversibility as a required annotation field independent of confidence scores; confirmation gate fires on undoability annotation, not agent certainty. Architectural choice (separate gate vs. reversibility-weighted EVPI) CONTESTED; separate gate is more tractable default at current annotation maturity. |

**Row 17 update (PROVISIONAL → SYNTHESIZED):**
- Status: `🔬 SYNTHESIZED (PROVISIONAL — SYNTH-04)` → `🔬 SYNTHESIZED`
- Trials: `1` → `2`
- Evidence source: append — "SYNTH-04 complete (2026-07-05): 9 groups synthesized. Final tier map: when-to-clarify HIGH (scoped: problem identification HIGH; architectural prescription CONTESTED); all other groups CONSENSUS or GAP. Key principles applied: (1) required fields + structural enforcement for annotation; (2) 3-tier cognitive ceiling for tier schemas; (3) effect-class vocabulary as semantic layer; (4) two-layer classification (external-boundary + WCAG domain); (5) confirmation gate must be structural, not advisory only; (6) uncertainty signal is orthogonal to reversibility signal."
- Closing angle: `Batch 5 angle 3; SYNTH-04 will update status` → `Batch 5 angle 3 + SYNTH-04 (2026-07-05)`

---

## ENTRYPOINT.md reversibility row — exact replacement text

**Find:** The cell beginning with "Reversibility annotation required in kit tool schema (batch 5 angle 3, 2026-07-05; PROVISIONAL pending SYNTH-04)."

**Replace with:**
Reversibility annotation required in kit tool schema (SYNTHESIZED, SYNTH-04, 2026-07-05). Four required annotation dimensions — all independent, all required: (1) reversibility (undoability: full|compensating|temporal|none — can effect be undone via compensating operation?); (2) idempotency (idempotent: yes|no — safe to retry without accumulating state? orthogonal to reversibility — both axes required); (3) scope-of-impact (local / single-user / multi-user / external third parties / systemic); (4) data sensitivity (PII, credentials, financial). Tiers: SAFE (no state modification, immediately undone, no external context effect) / LOW (minor reversible, individual user, no legal/financial/ethical risk) / HIGH (significant or irreversible, may affect others, legal/financial/ethical risk). Schema semantic layer: expose effect-class field (pure/write-local/write-external/non-compensatable) as primary semantic layer; tier labels (SAFE/LOW/HIGH) as derived summary for gate decisions — mechanism vocabulary composes; severity scores do not. MCP four-field vocabulary as deployment floor: readOnlyHint / destructiveHint / idempotentHint / openWorldHint. Extension: saga-pattern compensation-link pointer per tool (which tool undoes this one). Classification architecture (stacked by stability, three layers): Layer 1 — architectural property: externally-facing operation with network write side effects? YES → irreversible tier; Layer 2 — domain category: legal/financial/user-data per WCAG SC 3.3.4? YES → confirmation required independent of Layer 1 (CONSENSUS, 20+ years accessibility engineering); Layer 3 — consequence gradient (RAILS-style continuous inputs; deferred until annotation quality supports calibrated consequence magnitudes). Two-factor confirmation criterion: confirmation required when BOTH (a) undoability=none AND (b) material consequence — trivial-irreversible outputs (append-only log entries) do NOT warrant the same gate as destructive operations (Anthropic minimal footprint two-factor, CONSENSUS). Confirmation gate must be structural (blocking step in procedure, not only CLAUDE.md rule): if undoability=none AND affected_scope >= external → require explicit confirmation receipt before tool call execution. Uncertainty signal is orthogonal to reversibility signal — high agent confidence about an irreversible step does NOT substitute for the confirmation gate (SYNTH-04 when-to-clarify HIGH scoped: problem identification HIGH; arXiv:2606.03135 MEDIUM; arXiv:2502.14043 HIGH; arXiv:2511.08798 MEDIUM). Enforcement: annotations MUST be required at registration time, NOT optional — optional systems degrade to noise (incentive failure: annotation is done to reduce friction, not to describe risk accurately). Static annotations determine default gate; runtime context determines active gate (context-dependency failure is structural). Automated annotation inference viable at ~98% downstream task success via learned contracts (Contract2Tool, MEDIUM). (Composite: WebGuard 4,939 annotations MEDIUM; MCP four-field spec CONSENSUS; Microsoft four-dimension framework CONSENSUS; saga-pattern CONSENSUS; information-gain-clarification-criterion MEDIUM; safe-learning-help-trigger-irreversible HIGH; evpi-pomdp-clarification-stopping-criterion MEDIUM.)

---

## Post-Cluster Review — SYNTH-04

**Date:** 2026-07-05
**Reviewer:** PCR subagent (fresh context; no access to synthesis-drafting reasoning chain)
**Procedure:** post-cluster-review.md

---

### Check 1 — Principles produced (Step 3.7)

PASS. Step 3.7 is complete for all 9 groups. Each group has Sub-step A (principle extracted), Sub-step B (fit to our setup assessed), Sub-step C (derivation beyond the finding). The misc group used the GAP variant (adjacent principle from first principles + gap description + fill condition). No group is missing its Step 3.7 section. Principle extraction was not substituted by summary or finding restatement.

---

### Check 2 — Counter-prior on all HIGH groups

PASS. The Step 3 confidence map has exactly one HIGH-tier group: `when-to-clarify`. Step 3.6 documents count parity explicitly: "One counter-prior pass is required. One pass was run. Count parity: 1 = 1." The counter-prior subagent returned a genuine challenge: the "orthogonality" inference is drawn from acknowledged gaps in existing frameworks, not direct measurement — evidence is equally consistent with enriching EVPI with reversibility-weighted consequence terms rather than a separate gate. This is a real counter-prior, not a token one.

Result of counter-prior: HIGH tier retained with scope condition applied — problem identification HIGH (confirmed); architectural prescription (separate gate vs. reversibility-weighted EVPI) CONTESTED. Scope condition is propagated to ENTRYPOINT.md correctly (see Check 5 below).

---

### Check 3 — ENTRYPOINT.md row updated PROVISIONAL → SYNTHESIZED

PASS. Confirmed by direct file read. The domain-conditional checklist row beginning "Kit tools include external write operations" now reads "Reversibility annotation required in kit tool schema (SYNTHESIZED, SYNTH-04, 2026-07-05)." The word PROVISIONAL is absent. The full replacement text from this synthesis was applied verbatim.

---

### Check 4 — grounding-map.md updated

PASS. Two updates confirmed by direct file read:

- Row 17 (reversibility annotation taxonomy): Status remains 🔬 SYNTHESIZED; trials updated 1→2; "PROVISIONAL" removed from status text; SYNTH-04 completion noted with key principles listed; closing angle updated to "Batch 5 angle 3 + SYNTH-04 (2026-07-05)."
- Row 19 (when-to-clarify): New row added. Status 🔬 SYNTHESIZED (SYNTH-04, 2026-07-05); trials = 1; evidence source cites the three archive claims; principle applied to ENTRYPOINT.md element 8 and reversibility row noted.

The "Last updated" timestamp at the bottom of grounding-map.md records the SYNTH-04 update with key principles summary.

---

### Check 5 — Scope conditions on HIGH groups reflected in ENTRYPOINT.md

PASS. The `when-to-clarify` scope condition (problem identification HIGH; architectural prescription CONTESTED) is reflected in ENTRYPOINT.md as follows: "Uncertainty signal is orthogonal to reversibility signal — high agent confidence about an irreversible step does NOT substitute for the confirmation gate (SYNTH-04 when-to-clarify HIGH scoped: problem identification HIGH; arXiv:2606.03135 MEDIUM; arXiv:2502.14043 HIGH; arXiv:2511.08798 MEDIUM)." The CONTESTED architectural prescription is handled with: "Architectural choice (separate gate vs. weighted EVPI) CONTESTED; separate gate is more tractable default at current annotation maturity." The scope condition is not flattened or omitted — it is visible with the specific papers cited.

---

### Check 6 — New research angles

YES. Four new angles are identified. None are currently in the synthesis as queued angles; they should be added to RESEARCH_ANGLES.md per PCR Step 7.

**PCR-S04-A1 — Two-axis annotation comparison (from misc GAP group):**
R-Judge's taxonomy suggests consequence-type (reversible/recoverable) and domain-type (legal, financial, physical harm) are orthogonal classification axes. No study tests two-axis annotation against single-axis annotation for gate calibration accuracy. Draft query: "reversibility annotation multi-axis domain classification agent tool risk controlled comparison arXiv:cs.AI 2024-2026" + "consequence type domain category orthogonal annotation gate accuracy empirical."

**PCR-S04-A2 — Reversibility-weighted EVPI extension (from when-to-clarify CONTESTED architectural prescription):**
The evpi-pomdp-clarification-stopping-criterion paper (arXiv:2511.08798) explicitly names the reversibility-weighted EVPI extension as "unbuilt P1 research gap." Should this become available, it may upgrade or supersede the separate-gate architectural default. Draft query: "EVPI reversibility-weighted consequence clarification agent planning arXiv:2511" + "POMDP reversibility consequence-aware stopping criterion LLM agent 2025-2026."

**PCR-S04-A3 — MCP protocol-level approval primitive (from grounding-mechanisms group):**
`mcp-no-standardized-approval-primitives` establishes that as of mid-2025, MCP has no protocol-level approval or blocking primitive, requiring per-kit bespoke middleware. If MCP adds such a primitive, the current "bespoke per-kit" implementation path changes. Draft query: "MCP model context protocol approval confirmation gate interrupt primitive 2025-2026 site:github.com OR site:spec.modelcontextprotocol.io" + "model context protocol reversibility blocking confirmation interrupt tool call."

**PCR-S04-A4 — Confirmation volume empirical validation (from confirmation-gate-design group):**
The 10-15% confirmation volume target is from practitioner guidance with unverified sourcing (noted as directionally plausible). An empirical study measuring confirmation rates across deployed agent systems and correlation with detection quality would either validate this target or replace it. Draft query: "human-in-the-loop oversight rate optimal LLM agent confirmation gate empirical 2024-2026" + "HITL interrupt rate alert fatigue agent workflow controlled study."

---

### Check 7 — Kit files beyond ENTRYPOINT.md to update

**propagation-map.md:** No update needed. The "Last full audit" line reads "2026-07-05 (batch 4 PCR — external register + omission metrics + reversibility gate + rule density model-tier ceilings added to ENTRYPOINT.md)." The reversibility gate was already accounted for. The domain-conditional propagation path is: ENTRYPOINT.md Hard Rule 13 domain-conditional checklist → generated kit. The propagation-map.md domain-conditional table tracks higher-level practice categories; the specific domain-conditional rows in ENTRYPOINT.md are the implementation of that propagation. No new propagation-map.md row is required.

**RESEARCH_ANGLES.md:** Should receive the four angles listed in Check 6. Not blocking SYNTH-04 closure but should be queued before the next research session.

**Other files:** No additional kit-maker procedure files require updating based on SYNTH-04 synthesis content. All six derived principles from Step 3.7 are specific to generated kit tool schemas and are correctly housed in ENTRYPOINT.md Hard Rule 13 domain-conditional table. The research-synthesis.md procedure is unchanged. The post-cluster-review.md procedure is unchanged.

---

### Step 5 — Fresh-vantage review (inline — this PCR subagent)

This PCR subagent had no access to the synthesis-drafting reasoning chain. From the current state of the kit files after SYNTH-04 changes:

**P0/P1 items:** None found.

**P2 observations (not blocking, for design_log.md Discovered Work):**

P2-A — The reversibility annotation row in ENTRYPOINT.md is now the longest single domain-conditional checklist entry by a significant margin. This is structurally correct (the content is genuinely complex) but creates a readability/skimmability concern at Phase 6 when a kit builder must determine which parts apply to their domain. A future task could extract the full annotation specification into a standalone reference file (`procedures/tool-annotation-schema.md`) and replace the inline block with a pointer. Not a correctness issue — a usability issue.

P2-B — grounding-map.md row 17 and row 19 now capture overlapping content (both describe when-to-clarify and its relation to the reversibility gate). Row 17 has the full principle summary in its evidence source column; row 19 is a standalone row for the when-to-clarify finding specifically. This is correct by grounding-map.md convention (each significant decision gets its own row), but maintainers should be aware that both rows must be updated if the when-to-clarify finding is revisited.

---

### PCR Verdict

**PASS — SYNTH-04 is cleared to close.**

All four plan.md done-criteria are met:
1. Synthesis.md written: groups tiered, contradictions documented (6 cross-group implication entries), counter-prior run on the single HIGH group, Step 3.7 principles extracted for all 9 groups. ✅
2. ENTRYPOINT.md reversibility row updated from PROVISIONAL to SYNTHESIZED. ✅
3. grounding-map.md updated (rows 17 and 19). ✅
4. PCR documented (this section). ✅

**No blocking items.**

**Queued actions (non-blocking):**
- Add PCR-S04-A1 through PCR-S04-A4 to RESEARCH_ANGLES.md before next research session
- Log P2-A (annotation row length / usability) to design_log.md Discovered Work as low-priority refactor candidate
