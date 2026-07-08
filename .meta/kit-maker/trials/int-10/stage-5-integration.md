# Stage 5 Integration Report — INT-10
# Angle-Gen-Kit Proper-Scale Re-Trial
# Written: 2026-07-06

---

## 1. Finding-to-Mechanism Mapping

For each Tier 1 dimension where B–A nonzero (Hard median), the operative kit file, step, and rule responsible for the differential.

### q7 — Adversarial angle quality (B–A = +1 across all 7 Hard inputs)

**Operative cause:** CLAUDE.md Rule 4 (Adversarial angle structural separation) + angle-generation.md Step 1 (structural angle type slots).

Rule 4 mandates the ADVERSARIAL-FLAGGED label and the "dispatch this in a separate research context" note as mandatory output elements. Condition A's task description explicitly requests "at least one angle from a discipline adjacent to the primary one" but does not require adversarial framing, structural context separation, or ADVERSARIAL-FLAGGED labeling. The entire +1 differential is attributable to this single rule — the kit converts adversarial angle quality from a stylistic suggestion into a structural output requirement.

Supporting evidence: Condition A q7=2 uniformly across all 7 Hard inputs. Condition B q7=3 uniformly. The differential is perfectly consistent, indicating mechanism-level causation, not input-level variation. ID17 (post-cutoff) shows the largest individual differential (+2) on this dimension, suggesting the structural discipline matters most when source availability forces the agent to work harder.

**Mechanism sufficiency:** Sufficient for angle-list-level compliance. Does not enforce execution-time separation downstream (Weakness 6 confirmed out-of-scope per FM8: NOT_TRIGGERED within trial scope).

---

### q5 — Query specificity (B–A = +1, Hard median; B–A = +0.29 Hard avg)

**Operative cause:** angle-generation.md Step 3 (precision requirements on query strings) + angle-generation.md Step 4 (specificity gate — "no expansion for proper-noun-anchored or post-2023 niche queries") + coverage-gap conditioning effect on query construction.

The coverage map produced in Step 0 and the tradition-labeling requirement in Step 3 force the agent to construct queries with tradition-specific vocabulary rather than generic surface terms. Condition A produces queries that use the user's input vocabulary; Condition B produces queries anchored in enumerated tradition-specific vocabulary. On Hard inputs specifically designed as vocabulary traps (e.g., Input 10 "memory in LLMs," Input 14 "RAG systems"), tradition-specific vocabulary produces more precise queries even when the count of traditions does not differ from baseline.

Note that q5 shows more variance than q7 across Hard inputs (sorted A medians: [2,2,2,2,3,3,3] vs. q7 [2,2,2,2,2,2,2]). This indicates the query-construction mechanism fires reliably on most Hard inputs but not universally — the specificity improvement depends on whether the tradition vocabulary is sufficiently distinct from the input vocabulary to produce a material query change.

**Mechanism sufficiency:** Sufficient but not perfectly reliable. The per-query calibration gap (Weakness 2) explains the residual variance. No revision required; Weakness 2's residual risk is MODERATE and documented.

---

### q3 — Precision (B–A = +1, Hard median; B–A = +0.29 Hard avg)

**Operative cause:** angle-generation.md Step 3 (precision requirements: each angle must have a vocabulary-tradition label, a concrete query string, a source-type specification, and a platform-calibration pointer) + CLAUDE.md Rule 2 (vocabulary-tradition gate: "An angle without a tradition label is an incomplete angle").

Condition A's task description requests tradition labeling as a preference; Condition B's Rule 2 makes it a behavioral contract violation to omit it. The difference is enforcement level: Condition A tradition labeling is optional output formatting; Condition B tradition labeling is a gated structural requirement with a compliance check. This shifts q3 from "tradition-labeled output sometimes" to "tradition-labeled output always," and the precision measurement detects this.

Same variance pattern as q5: Hard inputs where tradition vocabulary is highly distinctive from input vocabulary show the largest precision differential; Hard inputs where user vocabulary already implicitly names distinct traditions show smaller differentials.

**Mechanism sufficiency:** Sufficient. Rule 2 + Step 3 together produce the precision differential. No revision required.

---

### q1 — Vocabulary-tradition coverage (B–A = 0 across ALL 22 inputs)

**Operative cause (absence finding):** angle-generation.md Step 2 (coverage-gap conditioning) is the mechanism designed to produce this differential. It did NOT produce a differential. The two competing interpretations:

1. **FM4 (triggered — mechanism scope mismatch):** Coverage-gap conditioning (modeled on CCQGen, WSDM 2025) produces within-tradition facet diversity, not cross-tradition vocabulary expansion. The CCQGen study measured facet coverage within a single tradition. Phase 4 synthesis adopted this finding as evidence for cross-tradition coverage expansion — a scope mismatch that was identified in weakness_register.md Weakness 7 but not resolved before kit build. Result: the conditioning mechanism produces more facets per tradition in B vs. A, but does not produce more traditions. Since q1 measures tradition count, not facet count, the differential is zero.

2. **Domain-familiarity ceiling (non-refutation):** All 22 inputs are in LLM/AI research. Condition A (frontier model) already saturates q1 at 3/3 on every input including all 7 vocabulary-trap Hard inputs. If the trial had been run on sparse-tradition domains (specialized applied fields, non-English literature, post-cutoff emerging domains), the A ceiling might not be 3 and the differential might appear.

Both are consistent with the data. The conservative interpretation (FM4 as primary) is carried forward per pre-registration Section 2 Q1 and Q3 routing.

**Operative file for this gap:** The grounding for Step 2 is synthesis G8 (CCQGen, WSDM 2025). Phase 4 synthesis (grounding-map.md G8 entry) did not annotate the scope mismatch between within-tradition facet evidence and cross-tradition design application. The kit-maker process problem is in Phase 4 synthesis, not in the kit generation phase.

---

## 2. Failure Mode Resolutions

### FM1 — Source B unavailable / false-complete angle list: NOT_TRIGGERED

**Evidence:** B–C avg 0.18 on Tier 1 Hard inputs. Source B unavailability (Condition C) produced only minor quality degradation on two inputs (IDs 14 and 20: minor q5/q3 gaps) with no systematic false-complete pattern. For this domain (LLM/AI research), Source A (LLM training data) is sufficient to enumerate vocabulary traditions at Condition B quality levels.

**Mechanism assessment: SUFFICIENT.** The intake.md Step 5 MODERATE/HIGH RISK assessment and VOCABULARY SELF-REPORT FLAG mechanism are functioning as designed. No revision required for this domain. Caveat: this finding is domain-specific — the kit's Source B robustness in LLM/AI research does not generalize to sparse-literature or non-English domains where Weakness 1 is acute.

**Residual gap:** Gap 3 from Appendix A (the "highly specialized" definition in Step 5) remains unresolved and would be tested by INT-11 on sparse-tradition domains. Not blocking for this domain.

---

### FM2 — Rule 6 diagnostic but not generative: INSUFFICIENT_EVIDENCE

**Evidence:** Input 16 (sparse-literature formal verification) scored B.q1=3, B.q7=3, B.q5=3, B.q3=3 — maximum on all Tier 1 dims. This means either (a) Rule 6 fired and successfully generated from sparse traditions, or (b) Rule 6 did not fire because coverage was already adequate. The mechanism behavior is not separable from the dimensional score.

**Mechanism assessment: UNTESTED.** Neither confirmed sufficient nor triggering. The specific failure mode (Rule 6 names a missing tradition that the LLM literally cannot generate angles for) requires a domain where the missing tradition is genuinely outside LLM training data. LLM/AI research does not provide that test. This failure mode carries forward to INT-11 as a required test.

---

### FM3 — Meta-domain recursive vocabulary collision: NOT_TRIGGERED

**Evidence:** Input 15 (systematic literature reviews in AI/ML) scored maximum on all Tier 1 dims (B.q1=3, B.q7=3, B.q5=3, B.q3=3). The meta-domain recursive collision concern was not observed.

**Mechanism assessment: SUFFICIENT for LLM/AI research meta-topics.** The mechanism at play is likely that the kit's procedure vocabulary (angles, traditions, coverage maps) is domain-jargon-specific enough to not collide with the research methodology vocabulary the intake brief enumerates. The INT-10 confirmation cannot generalize to meta-domains in other fields. Not a revision target.

---

### FM4 — Coverage-gap conditioning: within-tradition diversity but NOT cross-tradition coverage: TRIGGERED

**Evidence:** q1 B–A=0 on all 22 inputs. Full analysis in Section 1 above (q1 finding-to-mechanism mapping).

**Mechanism assessment: REVISION NEEDED.** The mechanism itself (Step 2 coverage-gap conditioning) is sound for within-tradition facet diversity. The claim associated with the mechanism is wrong: the kit's Phase 6 documentation (CLAUDE.md gold standard: "the agent drives vocabulary discovery") implies cross-tradition expansion that the mechanism does not produce on frontier-model-familiar domains. Required actions:

1. **Claim revision (CLAUDE.md + angle-generation.md):** The primary capability claim must be scoped from "covers the full vocabulary territory including traditions the user did not name" to "produces structurally complete angle lists with enforced type diversity (null-hypothesis, adversarial, cross-disciplinary) and tradition-labeled precision, on LLM/AI research domains." The cross-tradition vocabulary expansion claim is a follow-on research target, not a demonstrated capability.

2. **Synthesis update (grounding-map.md G8):** The CCQGen annotation must be updated to include the scope mismatch between within-tradition facet evidence and cross-tradition inference. Weakness 7 status should be updated from HEURISTIC to EMPIRICALLY_TESTED_NOT_CONFIRMED.

3. **New research angle (RESEARCH_ANGLES.md):** Add an angle specifically testing whether coverage-gap conditioning produces cross-tradition jumps in non-frontier-model-familiar domains (sparse-tradition, specialized applied fields). This is the evidence gap that would distinguish FM4 trigger from domain-ceiling explanation.

---

### FM5 — Boolean-connective test false positives: INSUFFICIENT_EVIDENCE

**Evidence:** Gate 2 execution is not observable from dimensional scores. Input 16 scored maximally but the actual Gate 2 execution trace is unavailable.

**Mechanism assessment: UNTESTED.** Gap 4 from Appendix A (no corpus size estimation procedure) remains unresolved. This failure mode carries forward to INT-11. The resolution requires either (a) a corpus probe step in the angle-quality procedure, or (b) INT-11 on a confirmed small-literature domain where Gate 2 behavior is independently verifiable.

---

### FM6 — Coverage map soft gate: INSUFFICIENT_EVIDENCE

**Evidence:** The longitudinal batch shows strong structural compliance (10/10 NH and ADVERSARIAL-FLAGGED presence), but coverage map presence for primary inputs is not encoded in dimensional scores. Whether Step 0 fired for all 22 inputs cannot be determined from Stage 4 evidence.

**Mechanism assessment: STRUCTURAL GAP CONFIRMED (from pre-registration Appendix A Gap 2) — mechanism observation NOT POSSIBLE in INT-10.** The soft gate remains a structural vulnerability. Gap 2 resolution (moving coverage map to a required intake brief field or TASK_TEMPLATE section) remains an open action item. This is a design deficiency, not a trial finding — INT-10 could not observe it, and INT-11 cannot either without adding a coverage-map-presence observability dimension to the scoring rubric.

**Required action before INT-11:** Add a coverage-map-presence dimension to the INT-11 scoring rubric as a binary (present/absent) so the soft gate can be observed.

---

### FM7 — Interdisciplinary vocabulary collision collapse: NOT_TRIGGERED

**Evidence:** Interdisciplinary Hard inputs 10 ("memory in LLMs" — 4 distinct traditions, highest collision potential in the entire input set) and 14 ("RAG systems" — 3 traditions) both score B.q1=3. The vocabulary-collision design specifically targeted FM7 and found no degradation. Kit handles multi-tradition collision inputs as effectively as non-collision inputs.

**Mechanism assessment: SUFFICIENT.** The vocabulary-frame enumeration in intake.md Step 2 handles collision cases because the step explicitly asks for multiple traditions with distinct queries — the collision is surfaced as a feature (multiple traditions named) rather than a bug (merged under one label). No revision required.

---

### FM8 — ADVERSARIAL-FLAGGED label-only enforcement: NOT_TRIGGERED (within trial scope)

**Evidence:** q7 B=3 on every Hard input vs. A q7=2 on every Hard input. Label consistently present in B. Downstream execution-time separation is explicitly out of scope per pre-registration Section 4.

**Mechanism assessment: SUFFICIENT for label-layer compliance; execution-layer enforcement is a structural gap by design.** Weakness 6 documents this gap accurately. No revision to the mechanism; the labeling layer is functioning. The downstream execution question is an INT-11 or external-enforcement question, not a kit-revision question.

---

### FM9 — Question-type misclassification: INSUFFICIENT_EVIDENCE

**Evidence:** Intake question-type assignment is not observable from dimensional scores. Input 22 (fine-tuning vs. prompting — explicit STRUCTURED framing) and Input 19 (conflicting-instructions Hard+Edge) would be the diagnostic inputs but their type assignment traces are unavailable.

**Mechanism assessment: UNTESTED.** Carries forward to INT-11. Scoring rubric for INT-11 should include a question-type-assignment observability dimension.

---

### FM10 — Post-cutoff topic failure: NOT_TRIGGERED

**Evidence:** Input 17 (LLM OS agents, post-cutoff): B.q1=3, B.q7=3, B.q5=3, B.q3=2 — strong performance. Highest single-dimension B–A differential in the entire trial appears here (ID17 q7 B–A=+2), suggesting the kit adds MORE value on post-cutoff topics, not less. B–C gap for ID17 on q3=–1 (Condition C marginally outperforms B on precision, possibly due to constraint-induced conservatism anchoring to well-known literature).

**Mechanism assessment: SUFFICIENT for post-cutoff LLM topics within this domain.** The intake.md Step 5 MODERATE/HIGH RISK assessment behaved appropriately. The q3 B–C inversion (–1) on post-cutoff input is a minor anomaly consistent with Weakness 2 (per-query calibration imperfection) rather than a systematic failure. No revision required.

---

## 3. Weakness Register Update

### Weakness 1 — Vocabulary-tradition discovery limit: STATUS UPDATED

**Pre-trial status:** EVIDENCE-BASED. "Most acute for cross-disciplinary topics spanning fields underrepresented in LLM training data."

**INT-10 finding:** The scope condition in the original entry ("This weakness is most acute for... underrepresented fields") is validated by the domain-ceiling observation: all 22 inputs are well-represented LLM/AI research; q1 A saturates at 3/3. The weakness does not fire in well-represented domains, which is consistent with the original scope condition. The entry is accurate.

**Updated status:** EMPIRICALLY CONFIRMED — scope condition validated. The weakness fires in its documented scope (underrepresented fields) and is correctly not observed outside that scope. No revision to the entry text required.

---

### Weakness 2 — Pre-expansion gating gap: STATUS UNCHANGED

**INT-10 finding:** The q5 variance pattern on Hard inputs (some show +1 differential, some zero) is consistent with per-query calibration imperfection. However, the trial cannot isolate whether this reflects Weakness 2 (gating calibration) or input-specific tradition vocabulary distinctiveness. No direct evidence for or against.

**Updated status:** UNCHANGED — EVIDENCE-BASED GAP. Still plausible, not refuted, not confirmed empirically.

---

### Weakness 3 — AI-agent confirmation bias magnitude unknown: STATUS UNCHANGED

**INT-10 finding:** q7 B–A=+1 on all Hard inputs, confirming the ADVERSARIAL-FLAGGED mechanism fires and produces quality differential. The magnitude gap (how different adversarial vocabulary needs to be) is not observable from dimensional scores.

**Updated status:** UNCHANGED — EVIDENCE-BASED GAP. The structural direction is confirmed (separation produces measurable quality improvement). The magnitude calibration remains uncalibrated.

---

### Weakness 4 — Small-literature Boolean-connective test failure: STATUS UNCHANGED

**INT-10 finding:** FM5 insufficient evidence. Input 16 scored maximally, but Gate 2 execution trace is not observable.

**Updated status:** UNCHANGED — EVIDENCE-BASED (CONTESTED). Neither confirmed nor refuted. Carries to INT-11.

---

### Weakness 5 — Clinical/SE evidence transfer gap: STATUS UNCHANGED

**INT-10 finding:** No direct test of transfer fidelity. Trial domain is LLM/AI research, not clinical or software engineering.

**Updated status:** UNCHANGED — EVIDENCE-BASED. Scope condition applies; not testable in INT-10.

---

### Weakness 6 — Single-session adversarial generation cannot substitute for structural separation: STATUS UPDATED

**INT-10 finding:** FM8 NOT_TRIGGERED within trial scope (label layer confirmed functioning). The label-enforcement gap is structural-by-design and not testable in a single-agent angle-generation trial.

**Updated status:** EMPIRICALLY CONFIRMED AT LABEL LAYER — the label fires consistently (q7 B=3 all Hard inputs). The execution-layer gap remains structural and unresolvable by this trial design. Entry text is accurate as written; add a note: "INT-10 confirmed label-layer compliance at q7=3/3 across 22 inputs. Execution-layer gap confirmed out-of-scope for single-agent trials."

---

### Weakness 7 — Coverage gap conditioning assumption: STATUS MATERIALLY UPDATED

**Pre-trial status:** HEURISTIC. "No controlled study was found that demonstrates coverage-gap conditioning specifically overcomes LLM vocabulary-tradition blind spots (as opposed to recovering within-tradition diversity alone)."

**INT-10 finding:** FM4 TRIGGERED. The heuristic-level concern is now empirically tested. q1 B–A=0 on all 22 inputs, including 7 vocabulary-trap Hard inputs specifically designed to test cross-tradition expansion. The CCQGen scope mismatch is now an empirically grounded finding, not a design-time concern.

**Updated status:** UPGRADED from HEURISTIC to EMPIRICALLY TESTED — CROSS-TRADITION CLAIM NOT CONFIRMED on LLM/AI research domains with frontier models. Required text revision:

> **What the kit cannot do:** Guarantee that coverage-gap conditioning prompts produce cross-tradition vocabulary expansion. INT-10 empirically tested this on 22 LLM/AI research inputs (7 Hard vocabulary-trap inputs) against a strong frontier model baseline and found q1 B–A=0 across all 22 inputs. Coverage-gap conditioning demonstrably produces within-tradition facet diversity (q3 B–A=+1, q5 B–A=+1 on Hard inputs) but does not produce cross-tradition coverage beyond what a well-prompted frontier model achieves on familiar domains. The mechanism may produce cross-tradition expansion on sparse-tradition or non-frontier-model-familiar domains — this is the open empirical question. Phase 8 documentation must not claim cross-tradition vocabulary expansion as a demonstrated capability.

---

## 4. Gap Confirmations — Stage 0 Appendix A

### Gap 1 — platform-calibration.md referenced but not in kit file list

**INT-10 status: NOT CONFIRMED IN TRIAL.** Gap 1 was a pre-execution operational concern (file might be missing). Trial proceeded, implying the file existed. However, whether platform-calibration.md was correctly populated and whether source-type assignment steps produced correct output is not observable from dimensional scores alone. The gap itself was noted in pre-registration as a potential operational issue; the trial does not confirm or refute whether it caused any quality degradation.

**Status: OPEN — unresolved by INT-10. Requires direct file inspection and INT-11 source-type-assignment observability.**

---

### Gap 2 — Step 0 coverage map is a declared gate but not a structural gate

**INT-10 status: EMPIRICALLY CONFIRMED AS A STRUCTURAL DESIGN GAP.** FM6 returned INSUFFICIENT_EVIDENCE — the gap exists and is not observable from dimensional scores because coverage map presence is not a scored dimension. The trial confirms that FM6 cannot be detected without a coverage-map-presence scoring dimension. The gap is not merely architectural (the gate is missing); it is also observationally invisible without a dedicated scoring measure.

**Status: CONFIRMED GAP. Action required: (1) Structural fix — move coverage map to required intake brief field with structural enforcement. (2) INT-11 scoring revision — add binary coverage-map-presence dimension.**

---

### Gap 3 — "Highly specialized" definition absent from intake.md Step 5

**INT-10 status: EMPIRICALLY RELEVANT but not directly tested.** FM1 NOT_TRIGGERED on LLM/AI research, but this is the domain where "highly specialized" is least likely to be ambiguous. The gap would fire on Input 16 (formal verification of LLM safety properties), but FM5 returned INSUFFICIENT_EVIDENCE. The severity assessment behavior on Input 16 is not observable from scores.

**Status: CONFIRMED GAP — not directly testable on LLM/AI research domain; primary test requires INT-11 on sparse-tradition inputs where the ambiguity is load-bearing.**

---

### Gap 4 — No corpus size estimation procedure for Gate 2 Boolean-connective test

**INT-10 status: NOT DIRECTLY TESTED.** FM5 INSUFFICIENT_EVIDENCE. The gap is an operational hole confirmed by architectural inspection (no corpus probe step exists in any procedure). INT-10 could not observe whether agents guessed corpus size, used a consistent heuristic, or simply skipped the small-literature check.

**Status: CONFIRMED GAP — structural inspection confirms no corpus probe step exists. INT-11 requires sparse-literature inputs with Gate 2 observability.**

---

### Gap 5 — Cross-disciplinary slot selection has no selection criterion

**INT-10 status: INDIRECTLY CONFIRMED.** The cross-disciplinary slot fired correctly in the longitudinal batch (≥1 new cross-disciplinary tradition per 3 inputs, zero reuse across L1–L10). However, the longitudinal batch domain (self-correction in LLMs) has rich adjacent traditions that a frontier model can enumerate from general knowledge. The gap — that the agent makes this judgment without procedural guidance — is not stressed by this domain.

The q7 mechanism (adversarial angle quality) partially depends on cross-disciplinary slot distinctiveness, and q7 B=3 consistently confirms the slot produces quality output. But whether a less-familiar domain would expose the selection criterion absence remains untested.

**Status: CONFIRMED GAP (structural) — not stress-tested empirically. INT-11 on sparse-tradition or non-LLM domains is the required test. A short heuristic (e.g., "what field uses similar mathematical structure? what field addresses the same phenomenon from a human behavior perspective?") should be added to angle-generation.md Step 0 regardless of INT-11 results — low cost, positive direction.**

---

### Gap 6 — 2-question intake cap creates ambiguity on multi-faceted topics

**INT-10 status: NOT DIRECTLY TESTED.** No scoring dimension for intake scope accuracy was pre-registered. The q5 query specificity dimension is a downstream signal that would degrade if intake scope was wrong, but q5 B–A=+1 on Hard inputs suggests the intake mechanism performed adequately. Whether the 2-question cap ever forced incorrect scope inferencing is not observable.

**Status: CONFIRMED GAP (structural) — not refuted empirically. The 2-question cap and fallback inference behavior remain untested at the scope-accuracy level. INT-11 should add an intake-scope-accuracy observability dimension for multi-faceted inputs.**

---

## 5. INT-11 Scope

### Required: The 5 Out-of-Scope Items from Stage 0 Section 4

**Item 1 (Out-of-scope 1): Multi-session drift — quality decay over sessions separated by days or weeks.**

INT-10 tested within-session longitudinal decay (L1–L10, single session, no context reset). Cross-session drift — vocabulary assumptions and tradition repertoire carried over from prior sessions — is a qualitatively different failure mode. INT-11 must test the kit with an agent that has prior session context from a different domain run in a prior session, to observe whether prior-session vocabulary anchoring degrades tradition enumeration for a new input.

**Item 2 (Out-of-scope 2): Deliberate incorrect or misleading domain framing by the user.**

All INT-10 inputs used genuine domain vocabulary. An adversarial user who confidently names the wrong vocabulary tradition as the anchor tests Rule 7 (Disagreement protocol) and the coverage-gap conditioning mechanism in a fundamentally different way. INT-11 must include ≥2 inputs where the user's stated anchor vocabulary is demonstrably wrong (e.g., a user who describes "knowledge distillation" when they mean "model compression" — genuinely distinct literatures with surface overlap).

**Item 3 (Out-of-scope 3): Adversarial angle execution-time separation enforcement.**

INT-10 confirmed the ADVERSARIAL-FLAGGED label fires consistently (q7 B=3). Whether a downstream research agent honors the label — running the adversarial angle in a separate context — is the next test layer. INT-11 must include a downstream research agent execution phase where ADVERSARIAL-FLAGGED angles are dispatched, and the trial must score whether context separation was maintained (observable as: does the adversarial agent have access to prior confirmatory results in its context?).

**Item 4 (Out-of-scope 4): Domains outside LLM/AI research requiring evaluators with non-LLM domain knowledge.**

INT-10 was limited to LLM/AI research because evaluators needed domain knowledge to score vocabulary-tradition coverage. INT-11 requires ≥1 domain batch in a non-LLM field (candidate: biomedical NLP, computational social science, or human-computer interaction) with domain-expert evaluators. This is the only way to test whether the domain-ceiling interpretation of q1 B–A=0 is correct (frontier model saturates LLM/AI q1 but not non-LLM q1) vs. the FM4 interpretation (mechanism doesn't produce cross-tradition jumps regardless of domain).

**Item 5 (Out-of-scope 5): Compute budget constraints, shortened context windows, non-frontier model tiers.**

INT-10 ran frontier models with full context windows. The kit explicitly declares "Frontier required" and documents "77–87% failure rate for Plan-and-Execute workflows at ≤7B" (CLAUDE.md, minimum model tier). INT-11 must test the kit at mid-tier model (e.g., a strong but non-frontier model) to: (a) verify the failure rate claim empirically, (b) establish where exactly quality degrades (which mechanism fails first: coverage-gap conditioning? adversarial labeling? structural gate compliance?), and (c) validate or revise the tier boundary in the kit documentation.

---

### Additional Required INT-11 Tests (from FM and Gap Analysis)

**FM2 test (Rule 6 diagnostic vs. generative gap):** ≥3 inputs on domains with traditions genuinely outside LLM training data (e.g., pre-1990 specialized applied science, non-English language literature, highly specialized professional domains). Scoring must include: did Rule 6 name a missing tradition? If yes, did the agent then successfully generate an angle for that tradition, or did it produce a placeholder/hallucination?

**FM5 test (Boolean-connective false positive):** ≥2 sparse-literature inputs (estimated corpus <30 papers) with Gate 2 execution trace observability. The INT-11 scoring rubric must include a binary "small-literature exception applied correctly (Y/N)" dimension derived from the actual Gate 2 execution trace, not from dimensional scores alone.

**FM6 fix + test (coverage map soft gate):** Before INT-11, move coverage map to a structurally enforced intake brief field. INT-11 must then test whether structural enforcement eliminates FM6 as a failure mode. Add a binary "coverage map present in output (Y/N)" dimension to the INT-11 scoring rubric.

**FM9 test (question-type misclassification):** ≥3 inputs where the user framing is ambiguous between EXPLORATORY and STRUCTURED. Scoring must include: what question type did the intake brief record? Did the agent flag the ambiguity or infer silently? INT-11 scoring rubric must include a "question-type assignment observable and correct (Y/N)" dimension.

**Gap 3 test (highly specialized definition):** ≥2 inputs where the "highly specialized" criterion in intake.md Step 5 is genuinely ambiguous. Pre-register an expected MODERATE vs. HIGH RISK classification for each. Score whether the kit's severity assessment matches the pre-registered expectation.

**Gap 5 fix (cross-disciplinary slot heuristic):** Add a short heuristic to angle-generation.md Step 0 before INT-11. INT-11 must include ≥2 sparse-tradition inputs where the heuristic would need to fire, to test whether the procedural guidance improves cross-disciplinary slot selection quality over INT-10 levels.

---

## 6. INT-11 Scope Summary Table

| Test target | Source | Priority | Requires |
|-------------|--------|----------|----------|
| Multi-session drift | Out-of-scope 1 | P1 | Cross-session context protocol |
| Misleading user framing | Out-of-scope 2 | P1 | ≥2 wrong-anchor inputs |
| Execution-time separation enforcement | Out-of-scope 3 | P1 | Downstream research agent execution layer |
| Non-LLM domain batch | Out-of-scope 4 | P1 — blocks FM4 interpretation | Domain-expert evaluators |
| Mid-tier model tier boundary | Out-of-scope 5 | P2 | Non-frontier model deployment |
| FM2 Rule 6 diagnostic gap | FM analysis | P1 | Out-of-LLM-training domains |
| FM5 Boolean-connective false positive | FM analysis | P2 | Sparse-literature inputs + Gate 2 trace |
| FM6 coverage map structural gate | FM analysis | P1 | Pre-INT-11 fix required first |
| FM9 question-type misclassification | FM analysis | P2 | Ambiguous EXPLORATORY/STRUCTURED inputs |
| Gap 3 "highly specialized" definition | Appendix A | P2 | Sparse-tradition inputs |
| Gap 5 cross-disciplinary heuristic | Appendix A | P2 | Pre-INT-11 fix required first |

**Blocking dependency:** The non-LLM domain batch (Out-of-scope 4) is the highest-priority INT-11 test because it is the only way to distinguish the FM4 trigger interpretation from the domain-ceiling explanation. Until this is run, the vocabulary-expansion claim cannot be evaluated on its merits. If Out-of-scope 4 shows q1 B–A=0 on non-LLM domains as well, FM4 is confirmed as a mechanism failure. If it shows positive B–A differential on non-LLM domains, the domain-ceiling interpretation is correct and the kit's vocabulary-expansion claim is valid for non-frontier-model-familiar domains.

---

## 7. INT-10 Integration Verdict

**Overall assessment:** GREEN verdict confirmed. The kit ships on execution quality evidence: adversarial angle structural labeling (q7 B–A=+1 uniformly), query specificity via tradition-anchored vocabulary (q5), and output precision via structural angle completeness (q3). These three mechanisms are empirically confirmed as producing consistent differential value over a strong frontier model baseline across 7 Hard vocabulary-trap inputs.

**Primary limitation of the shipped kit:** The vocabulary-expansion claim (cross-tradition coverage extension) is not supported for frontier-model-familiar domains. Phase 8 documentation must be revised to scope the claimed capability accurately. The kit is a structural discipline enforcer, not a vocabulary discoverer, in the LLM/AI research domain.

**Primary Phase 4 finding:** The Phase 4 synthesis adopted CCQGen evidence (within-tradition facet coverage) as grounding for a cross-tradition design inference without flagging the scope mismatch. This is the most actionable kit-maker process gap from INT-10. Required fix: add a "evidence scope vs. design inference scope" check to the Phase 4 synthesis procedure, requiring explicit annotation when the evidence scope is narrower than the design claim being grounded.

---

*Stage 5 integration written: 2026-07-06*
*Based on: stage-4-verdict.md, stage-0-preregistration.md, angle-gen-kit/CLAUDE.md, angle-gen-kit/weakness_register.md*
*Verdict: GREEN — ships on execution quality; vocabulary-expansion claim revised*
