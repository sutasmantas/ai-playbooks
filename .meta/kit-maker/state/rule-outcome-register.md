# Kit-Maker Rule Outcome Register

Tracks every rule added to kit-maker files via post-cluster-review (Step 4). Each entry has two parts:

1. **Outcome statement (A1):** what improvement the rule should produce and when to check
2. **Flip trigger (A2):** the specific observable state that means the rule should be revised or removed

**Why this file exists:** Rules without exit conditions only accumulate. Behavioral contracts drift toward maximum density as rules are added (from research findings) but never removed (no flip trigger). This register gives every applied rule an exit condition stated at application time, before any anchoring to the rule's presence.

**Format:**

```
## Rule [short-ID] — [one-line description]
Added: [date]
Claim key: [source finding]
Evidence tier: HIGH / CONSENSUS / SYNTHESIZED / MEDIUM
File: [file and section where the rule was applied]

Outcome: Expected to improve [observable dimension]: [what you expect to see more/less of in kit outputs].
Check after: [N=5] trial runs.

Flip trigger: Revise or remove if: [specific observable state — not "if new evidence appears" but a concrete condition].
```

**Flip trigger sensitivity check (PROVISIONAL — based on `nhst-null-power-error-rate` MEDIUM + `null-taxonomy-nibs-prior-expectations` MEDIUM, null-result-interpretation group, PCR-research-quality, 2026-07-05):** A negative flip-trigger result ("no improvement seen across N=5 runs") is valid evidence to remove a rule ONLY when the N=5 trials were sensitive enough to detect the mechanism's effect if it were present. Before acting on any flip trigger: confirm — were the N=5 trials varied enough to reveal the mechanism's contribution, or were they all easy cases where the mechanism's effect would be invisible? If the trials were not sensitive (all easy inputs, coarse evaluation criteria, or mechanism effect expected to be subtle at <15%), the null result is ambiguous absence, not confirmed absence. When writing a flip trigger, add a sensitivity condition if the mechanism's effect is expected to be subtle: format "Flip trigger applies when N=5 trials include [specific variance condition — e.g., at least 2 trials at turns 10+, at least 1 adversarial input, evaluation criteria discriminate at the 10% improvement level]." Without a sensitivity condition, the flip trigger may fire as a false retirement when the test was simply underpowered. Flip trigger for this guidance: remove if N=5 rule retirement decisions are made without consulting sensitivity (using only the outcome statement and the N=5 trial count) and produce no incorrect retirements — indicating sensitivity specification adds overhead without improving retirement accuracy.

---

## Entries

## Rule PCR119-A1 — A1 auditor: observable artifact standard over agent self-report
Added: 2026-07-05
Claim key: goal-directedness-behavioral-vs-mechanistic-split (HIGH, SCOPE: 2D grid navigation; principle extended to self-report evaluation)
Evidence tier: HIGH (conditional — scope caveat applies)
File: kit-maker/CLAUDE.md, External auditor at task close (A1) section, subagent prompt item 4

Outcome: Expected to improve A1 auditor accuracy in detecting rule-compliance failures where agent narrative is the primary evidence source. Expected to see more accurate non-compliance detections — specifically, fewer false-pass verdicts when the agent narrative says "I followed the rule" but artifacts (plan.md entry, Section 6.5 file list) contradict it. Check after N=5 task-close audit cycles.

Flip trigger: PCR119-A1 should be revised or removed if: ≥5 A1 audit sessions produce no detectable difference between auditor verdicts when directed to artifacts vs. when relying on narrative — meaning narrative reliability is adequate and the added instruction provides no diagnostic improvement.

---

## Rule PCR119-A2 — TASK_TEMPLATE: mid-task goal-model re-check for long-horizon tasks
Added: 2026-07-05
Claim key: inherited-drift-trajectory-contamination + non-deterministic-drift-temperature-zero (HIGH, goal-drift-mechanisms, SCOPE: multi-turn sessions; positive prescription is MEDIUM confidence)
Evidence tier: MEDIUM (derived from HIGH negative claim; positive prescription not directly validated)
File: kit-maker/TASK_TEMPLATE.md, Section 5.1 Mid-work coherence check, item 4

Outcome: Expected to catch goal-model drift in long-horizon tasks (15+ steps) before it compounds at Section 6.1 done-criteria check. Expected to see fewer Section 6.1 failures where artifact was produced but the task direction drifted from the stated objective mid-execution. Check after N=5 long-horizon task completions.

Flip trigger: PCR119-A2 should be revised or removed if: ≥5 long-horizon task completions (15+ steps) show accurate goal alignment at Section 6.1 done-criteria check without the mid-task re-read having been applied — indicating the re-read adds overhead without catching genuine drift.

---

## Rule PCR119-A3 — ENTRYPOINT Phase 7: structural mechanism test (adversarial surface/mechanism separation)
Added: 2026-07-05
Claim key: proactive-agent-f1-baseline + goal-directedness-behavioral-vs-mechanistic-split (HIGH×HIGH compound, both with scope caveats; compound confidence MEDIUM)
Evidence tier: MEDIUM (compound mechanism, provisional)
File: kit-maker/ENTRYPOINT.md, Phase 7 gate, Per-constraint validation item

Outcome: Expected to improve Phase 7 kit validation quality by distinguishing kits that enforce mechanisms from kits that only shape surface form. Expected to see: kit trials identify at least one behavioral rule where surface compliance is achievable without the structural trigger firing — producing a more accurate certification of what the kit actually enforces. Check after N=5 kit build runs reaching Phase 7.

Flip trigger: PCR119-A3 should be revised or removed if: adversarial structural tests produce no diagnostic value distinct from standard per-constraint tests across ≥5 kit build runs — specifically, if no kit build run finds a case where surface compliance passes but structural mechanism test fails (indicating the distinction is either always true or never practically observable in kit outputs).

---

## Rule PCR119-A4 — ENTRYPOINT Hard Rule 13: proactive-surfacing self-check at response end
Added: 2026-07-05
Claim key: proactive-agent-f1-baseline (HIGH, SCOPE: spontaneous initiative in general models, angle-119) + omission-commission-asymmetry (HIGH, prior cluster, arXiv:2604.20911) — compound mechanism
Evidence tier: HIGH×HIGH compound, CONDITIONAL (scope caveat on proactive-agent claim; commission-form self-check at structural trigger point is outside the scope caveat)
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 behavioral contract decay warning, element (b) self-check

Outcome: Expected to improve reliability of proactive problem surfacing in generated kits by converting element 4's recognition-required rule into a commission-form structural trigger. Expected to see: generated kits whose agents surface visible problems more consistently in later turns (turns 10+) compared to kits without the self-check question. Check after N=5 generated kit trial runs using the updated Hard Rule 13 template.

Flip trigger: PCR119-A4 should be revised or removed if: ≥5 generated kit trial runs show proactive surfacing compliance is unchanged by the presence vs. absence of the second self-check question — specifically, if the "did I surface all visible problems?" prompt produces no detectable increase in unsolicited problem-surfacing behavior over baseline.

---

## Rule PCR-U0102-A1 — Element 8 security caveat: mechanism named + scope condition added
Added: 2026-07-05
Claim key: aspi-clarification-security-risk (HIGH narrow, arXiv:2605.17324) + compound with clarification-timing-type-dependent (HIGH, arXiv:2605.07937, Group A)
Evidence tier: HIGH (narrow) for core finding; CONSENSUS ONLY for extension to non-clarification engagement patterns (principle-derived)
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 element 8 security caveat; kit-maker/CLAUDE.md element 8 summary

Outcome: Expected to improve generated kit security coverage for external-input domains. Designers reading element 8 will understand the engagement-deepening mechanism — not just clarification as a named symptom — and will avoid adding iterative refinement loops or feedback-solicitation against external documents without security gating. Also closes the context-window-delivered-content loophole by changing "before tool execution" to "before any external content is read or processed." Check after N=5 kit builds targeting external-content processing domains.

Flip trigger: PCR-U0102-A1 should be revised or remove the non-clarification extension if: empirical studies specifically measure injection amplification for iterative refinement or feedback-solicitation patterns (not clarification) and find the effect is absent or materially smaller — confirming the original scope (clarification only) was correct.

---

## Rule PCR-U0102-A2 — Element 8 mid-execution routing: three-class framework for execution-time discoveries
Added: 2026-07-05
Claim key: underspecification-three-classes (CONSENSUS, arXiv:2602.10525) + unknown-unknowns-upfront-limit (CONSENSUS, arXiv:2602.15259), both Group B/G, USER-01-02 cluster
Evidence tier: CONSENSUS ONLY
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 element 8 (execution-time monitoring note)

Outcome: Expected to improve generated kit agents' handling of mid-execution unknowns by providing a decision framework (ask/surface/infer) instead of only "pair with monitoring." Generated kit agents should show more consistent handling of execution-time discoveries — fewer undifferentiated halts or silent continuations when an unknown surfaces mid-task. Check after N=5 generated kit trial runs with tasks that surface mid-execution unknowns.

Flip trigger: PCR-U0102-A2 should be revised or removed if: N=5 generated kit trial runs show that agents require the same rate of user correction for mid-execution unknown handling with the three-class routing guidance as without it — indicating the guidance adds density without behavioral improvement.

---

## Rule PCR176-A1 — Conflict-pair scan in rule density guidance
Added: 2026-07-05
Claim key: pm-llm-bidirectional-interference-gsm8k-collapse (HIGH, arXiv:2603.23530) + multi-instruction-stacking-monotonic-degradation (HIGH, arXiv:2509.21051); PCR-angle-176 compound
Evidence tier: HIGH (conditional — scope: frontier models, potentially conflicting behavioral constraints)
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 Rule density constraint section (after culling priority)

Outcome: Expected to improve generated kit behavioral contract quality by adding a conflict-detection step before the culling priority is applied. Kit designers should produce fewer behavioral contracts with unresolved conflict-capable rule pairs. Observable signal: generated contracts with ≤8 rules that have been checked for pairwise co-activation conflicts, rather than just counted. Check after N=5 generated kit Phase 6 build runs.

Flip trigger: PCR176-A1 should be revised or removed if: N=5 generated kit runs show that conflict-capable pair scan produces no identified pairs across all kits checked — indicating either that the kit's generation process inherently avoids conflict-capable rules (making the check vacuous) or that designers cannot reliably identify co-activation conflicts from this instruction alone.

---

## Rule PCR176-A2 — Phase 6 gate: conflict-capable pair audit
Added: 2026-07-05
Claim key: pm-llm-bidirectional-interference-gsm8k-collapse (HIGH, arXiv:2603.23530) + multi-instruction-stacking-monotonic-degradation (HIGH, arXiv:2509.21051); compound mechanism PCR-angle-176
Evidence tier: HIGH (conditional — scope: frontier models, behavioral contracts with 4+ rules and overlapping trigger conditions)
File: kit-maker/ENTRYPOINT.md, Phase 6 "Gate after all files built" section

Outcome: Expected to catch conflict-capable rule pairs before kit shipping by making the pairwise co-activation check a required Phase 6 gate item. Observable signal: Phase 6 gate item is checked off with either a list of resolved conflict pairs or an explicit "no conflict-capable pairs found" statement. Check after N=5 Phase 6 build runs.

Flip trigger: PCR176-A2 should be revised or removed if: N=5 generated kit Phase 6 runs consistently produce "no conflict-capable pairs found" without any agent identifying potential conflicts during the per-file build loop — indicating the gate adds overhead (a required explicit check) without catching anything the per-file loop would not catch earlier.

---

## Rule PCR176-A3 — Compaction-asymmetric conflict compound note + Phase 7 conditional
Added: 2026-07-05
Claim key: pm-llm-bidirectional-interference-gsm8k-collapse (HIGH, arXiv:2603.23530) × governance-decay-compaction (HIGH, arXiv:2606.22528); compound mechanism derived in PCR-angle-176
Evidence tier: HIGH×HIGH compound (mechanism is derived; neither paper tested the specific compound)
File: kit-maker/ENTRYPOINT.md — (a) Hard Rule 13 Context compaction section; (b) Phase 7 long-session compliance gate item

Outcome: Expected to improve long-horizon kit safety by making kit designers aware that unresolved conflict pairs are doubly dangerous in compaction-prone sessions, and by adding a Phase 7 verification gate that ties conflict resolution to the long-session compliance check. Observable signal: Phase 6 conflict-pair audit result is explicitly referenced in Phase 7 long-session compliance gate. Check after N=5 kit builds targeting long-horizon use.

Flip trigger: PCR176-A3 should be revised or removed if: no kit build across N=5 long-horizon-targeted kits identifies a case where a conflict-capable pair survived to Phase 7 undiscovered (indicating Phase 6 audit is sufficient and Phase 7 conditional is redundant), OR if empirical studies specifically measuring compaction's effect on conflict pairs show the asymmetric dropout mechanism does not apply.

---

## Rule PCR176-A4 — Constraint ordering recommendation in Hard Rule 13
Added: 2026-07-05
Claim key: pm-llm-compliance-drop-2-21pct (HIGH, arXiv:2603.23530); terminal constraint failure rate; PCR-angle-176 Step 3.7 derivation
Evidence tier: HIGH (conditional — scope: frontier models, multi-constraint behavioral contracts with 5+ rules)
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 (after Critical rule placement section)

Outcome: Expected to improve generated kit behavioral contract compliance by causing designers to order elements by failure-cost (goal model first, NEVER rules second, operational procedures last). Observable signal: generated behavioral contracts place goal standard and delegation model in first 1/3, with operational procedures in last 1/3. Check after N=5 generated kit Phase 6 runs.

Flip trigger: PCR176-A4 should be revised or removed if: N=5 generated kit behavioral contract evaluations show no compliance difference between contracts that follow the ordering recommendation vs. contracts that lead with operational procedures — indicating positional ordering has no detectable compliance effect in the kit's specific execution context.

---

## Rule PCR-U0102-A3 — Element 5 decay warning: observable trigger conditions required alongside violation conditions
Added: 2026-07-05
Claim key: implicit-intelligence-unstated-constraints (CONSENSUS ONLY, arXiv:2602.20424, Group E, USER-01-02)
Evidence tier: CONSENSUS ONLY
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 element 5 (behavioral contract decay warning); kit-maker/CLAUDE.md element 5 summary

Outcome: Expected to improve generated kit behavioral contract completeness by requiring designers to name the state that activates each rule, not only the violation state. Rules with implicit triggers (e.g., "when appropriate, escalate") are applied inconsistently; requiring observable trigger conditions forces explicit specification. Generated kit behavioral contracts should show fewer rules with judgment-word triggers. Check after N=5 generated kit builds using the updated Hard Rule 13 template.

Flip trigger: PCR-U0102-A3 should be revised or removed if: N=5 generated kit trial runs show no detectable difference in rule application consistency between contracts that name explicit trigger conditions vs. contracts that only name violation conditions — specifically if agents are no more consistent at activating rules when triggers are explicit.

---

## Rule PCR-U0304-A1 — Hard Rule 13 element 7: domain-specific commitment-point enumeration required
Added: 2026-07-05
Claim key: adaptive-confirmation-reduces-error-and-time (MEDIUM, CHI 2026, arXiv:2510.05307); flagging-frequency principle derivation
Evidence tier: MEDIUM (PROVISIONAL)
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 element 7 (disagreement protocol — after Self-check)

Outcome: Expected to improve kit-generated disagreement protocol precision by requiring designers to enumerate domain-specific irreversible action types at kit-creation time rather than leaving classification to agent runtime judgment. Observable signal: generated kits should show explicit lists of irreversible action types in their element 7 rather than only the abstract threshold description; trial runs should show fewer miscategorized commitment points (irreversible tier applied to reversible actions, or reversible tier applied to genuinely irreversible actions). Check after N=5 generated kit Phase 6 build runs.

Flip trigger: PCR-U0304-A1 should be revised or removed if: N=5 generated kit runs with explicit commitment-point enumeration show no reduction in commitment-point miscategorization relative to kits without enumeration — indicating that agents correctly self-classify commitment points at runtime even without enumeration, making the kit-creation-time listing redundant.

---

## Rule PCR-U0304-A2 — Hard Rule 13 element 7: logged flag basis for sycophancy guard
Added: 2026-07-05
Claim key: user-pushback-reverses-correct-ai-position (CONSENSUS, arXiv:2504.07114); logged-basis derivation HIGH-confidence from mechanism
Evidence tier: CONSENSUS ONLY (base claim); HIGH-confidence derivation from mechanism
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 element 7 (sycophancy guard block)

Outcome: Expected to improve sycophancy guard reliability by giving the "did new information arrive?" check a concrete reference point (the logged concern) rather than reconstructed memory. Observable signal: generated kit agents should show less position-reversal on displeasure alone — specifically, when users express dissatisfaction without new evidence, agents should be able to articulate what their logged concern was and confirm nothing new arrived. Check after N=5 generated kit trial runs where the kit involves concern-flagging and user pushback scenarios.

Flip trigger: PCR-U0304-A2 should be revised or removed if: N=5 generated kit trials show that agents with the logged-basis requirement reverse positions on displeasure at the same rate as agents without it — indicating the logged record does not improve the sycophancy guard's discrimination between new-evidence and approval-seeking updates.

---

## Rule PCR-U0304-A3 — Hard Rule 13 element 7: frozen element designation (conditional)
Added: 2026-07-05
Claim key: disempowerment-higher-approval-paradox (HIGH, SCOPE: general consumer chat, arXiv:2601.19062, 1.5M conversations); behavioral-contract-decay-as-corruption-channel derivation (MEDIUM confidence)
Evidence tier: HIGH (conditional — SCOPE: applies when behavioral contract undergoes iterative user revision; not applicable to frozen/non-user-modifiable contracts)
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 element 7 (kit designer notes, second note)

Outcome: Expected to prevent approval-signal-driven erosion of disagreement protocols in kits whose behavioral contracts are subject to iterative user revision. Observable signal: kits deployed in iterative-refinement contexts should maintain disagreement protocol behavior across revision sessions — correction-seeking behavior should not degrade as users iteratively refine the contract to favor compliance. Check after N=5 kit deployments in contexts where the behavioral contract is revised across sessions.

Flip trigger: PCR-U0304-A3 should be revised or removed if: N=5 longitudinal observations of iteratively-revised kits show that disagreement protocol elements are NOT subject to approval-signal erosion — indicating that kit designers naturally treat correction behavior as non-negotiable without the explicit frozen-element designation, or that the iterative-revision context does not in practice produce the approval-driven drift the principle predicts.

---

## Rule PCR22-24-A1 — Phase 6 gate: rule-interaction audit for semantic/behavioral constraints
Added: 2026-07-05
Claim key: constraint-type-specificity (HIGH, SCOPE: MOSAIC arXiv:2601.18554 EACL 2026)
Evidence tier: HIGH (conditional — scope: kits with 2+ semantic/behavioral rules in behavioral contract)
File: kit-maker/ENTRYPOINT.md, Phase 6 "Gate after all files built" section (new checkbox after conflict-capable pair audit)

Outcome: Expected to catch semantic/behavioral rule pairs that produce behavioral interference invisible to the structural conflict-pair audit. Observable signal: Phase 6 gate item is checked off with either a list of characterized semantic/behavioral rule pairs (synergistic/conflicting/independent) or explicit documentation that no qualifying pairs exist. Check after N=5 Phase 6 build runs where behavioral contract contains 2+ semantic/behavioral rules.

Flip trigger: PCR22-24-A1 should be revised or removed if: N=5 Phase 6 runs where the audit is applied consistently produce only "synergistic" or "independent" characterizations with zero conflicting pairs identified — indicating the semantic/behavioral rule-interaction audit adds overhead without catching interference that the structural conflict-pair audit would not already surface.

---

## Rule PCR22-24-A2 — Hard Rule 13 element 10: sequential depth mechanism for tier determination
Added: 2026-07-05
Claim key: agentic-workflow-small-model-collapse (HIGH narrow, arXiv:2601.22208, ICML 2026)
Evidence tier: HIGH (conditional — scope: applies when no domain-specific empirical model performance data is available)
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 element 10 (after "If uncertain: declare frontier.")

Outcome: Expected to improve tier declaration accuracy when designers lack empirical model performance data. Designers using the sequential depth heuristic (≤2 steps → small; 3–4 → mid; 5+ → frontier) should produce fewer under-declared tier warnings compared to designers defaulting to "frontier" for everything uncertain. Check after N=5 kit builds where tier declaration is required and no domain empirical data is available.

Flip trigger: PCR22-24-A2 should be revised or removed if: empirical studies specifically measuring sequential collapse thresholds find different depth breakpoints than the ≤2/3–4/5+ heuristic, OR if N=5 kit deployments show the heuristic systematically over- or under-predicts collapse relative to observed model behavior at the declared tier.

---

## Rule PCR22-24-A3 — Domain-conditional checklist: small model segmentation rule
Added: 2026-07-05
Claim key: agentic-workflow-small-model-collapse (HIGH narrow, arXiv:2601.22208, ICML 2026)
Evidence tier: HIGH (conditional — scope: kits targeting mid-tier or small (≤7B) models with 4+ sequential step chains)
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 domain-conditional procedure checklist (new table row)

Outcome: Expected to prevent sequential collapse in deployed kits by requiring mandatory re-anchoring checkpoints in procedures that chain 4+ sequential steps on small/mid-tier models. Observable signal: kits targeting small models with deep sequential chains include explicit re-anchoring checkpoints in their procedures; trial runs on small/mid-tier models show completion rates above the 13–23% baseline observed without segmentation. Check after N=5 kit builds targeting small/mid-tier models with deep sequential chains.

Flip trigger: PCR22-24-A3 should be revised or removed if: N=5 small/mid-tier model kit runs with mandatory re-anchoring show no completion rate improvement over runs without it — indicating that the re-anchoring checkpoint mechanism does not address the actual collapse cause for the specific model and task type used.

---

## Rule PCR22-24-A4 — Phase 7 per-constraint validation: prohibition-commission compound at long horizon
Added: 2026-07-05
Claim key: sequential-instruction-universal-failure (HIGH, SIFo arXiv:2406.19999 EMNLP 2024) × omission-commission-asymmetry (HIGH, arXiv:2604.20911); compound PCR-angles-22-24, 2026-07-05
Evidence tier: HIGH×HIGH compound (CONDITIONAL — scope: kits with both NEVER and commission rules, sessions >10 turns)
File: kit-maker/ENTRYPOINT.md, Phase 7 gate, Per-constraint validation section (after structural mechanism test flip trigger)

Outcome: Expected to surface false compliance profiles where NEVER rule decay at long horizon is masked by commission rule compliance. Observable signal: Phase 7 test suites for long-horizon kits include at least one test scenario reaching turn 10+ where both rule types are tested; results show whether NEVER rule compliance degrades relative to commission rule compliance. Check after N=5 kit builds targeting sessions >10 turns.

Flip trigger: PCR22-24-A4 should be revised or removed if: N=5 long-horizon kit test runs (10+ turn scenarios) show no compliance divergence between NEVER and commission rules — indicating the compound failure mode (NEVER decay + commission masking) does not materialize in practice for the kit's specific execution context.

---

## Rule PCR22-24-A5 — Phase 6 step 4: last-position reinforcement check
Added: 2026-07-05
Claim key: code-robustness-first-line-omission Derivation 1 (MEDIUM, PCR-angles-22-24, 2026-07-05)
Evidence tier: MEDIUM (PROVISIONAL)
File: kit-maker/ENTRYPOINT.md, Phase 6 per-file loop step 4 (after classification-anchor check)

Outcome: Expected to reduce silent omission of correctness-critical closing steps in generated kit procedures. Observable signal: generated procedures with correctness-critical closing steps include explicit structural reinforcement (required-field markers, gate labels, agent-verifiable completion signals) at those positions. Check after N=5 Phase 6 procedure file builds.

Flip trigger: PCR22-24-A5 should be revised or removed if: N=5 Phase 6 builds show no difference in closing-step omission rates between procedures with and without explicit structural reinforcement at last positions — indicating that closing-step omission is not driven by the structural reinforcement mechanism, or that existing procedure design already prevents it.

---

## Rule PCR22-24-A6 — Phase 7 per-constraint validation: paraphrase-variant stability test
Added: 2026-07-05
Claim key: prompt-sensitivity-semantic-invariance (MEDIUM, PCR-angles-22-24, 2026-07-05)
Evidence tier: MEDIUM (PROVISIONAL)
File: kit-maker/ENTRYPOINT.md, Phase 7 gate, Per-constraint validation section (after prohibition-commission compound note)

Outcome: Expected to improve per-constraint test coverage by exposing surface-sensitive rules that pass canonical formulations but fail semantically equivalent paraphrases. Observable signal: Phase 7 test suites for natural-language-input kits include paraphrase variants; at least one rule per kit is tested with a paraphrase variant before Phase 7 passes. Check after N=5 kit builds involving natural-language input kits.

Flip trigger: PCR22-24-A6 should be revised or removed if: N=5 kit builds using paraphrase-variant tests show no compliance difference between canonical and paraphrase variants across any rule class — indicating that the kits' rules are not surface-sensitive in their execution context, making the additional test variants overhead without diagnostic value.

---

## Rule PCR22-24-A7 — Phase 6 step 3: rule wording as behavioral decision
Added: 2026-07-05
Claim key: adversarial-perturbation-minimal-change (MEDIUM, PCR-angles-22-24, 2026-07-05)
Evidence tier: MEDIUM (PROVISIONAL)
File: kit-maker/ENTRYPOINT.md, Phase 6 per-file loop step 3 Alternatives (after decision-surfacing note)

Outcome: Expected to improve generated kit behavioral contract quality by requiring designers to treat rule wording selection as a behavioral decision requiring Phase 7 validation, not a stylistic choice made at drafting time. Observable signal: Phase 6 alternatives review for behavioral contract files includes explicit wording alternatives for each rule; Phase 7 per-constraint testing validates the selected wording (not only semantic review). Check after N=5 Phase 6 behavioral contract drafting runs.

Flip trigger: PCR22-24-A7 should be revised or removed if: N=5 kit builds show no compliance difference between wording variants tested in Phase 7 for any rule class — indicating that rule wording variation does not produce measurable behavioral differences in the kit's specific execution context, making the additional wording-alternatives requirement overhead without compliance benefit.

---

## Rule PCR-RQ-A1 — research-quality.md claim format: falsification condition field
Added: 2026-07-05
Claim key: causal-theory-error-base-rate (HIGH SCOPE: trained humans + LLMs, mechanism-and-depth group) + surface-learning-mimicry-failure-mode (CONSENSUS) + mechanism-vs-correlation-depth-signal (MEDIUM); cluster research-quality PCR-research-quality, 2026-07-05
Evidence tier: MEDIUM (mechanism-and-depth group, after fresh-pass downgrade; one HIGH supporting claim with scope caveat)
File: kit-maker/procedures/research-quality.md, Claim format section — new `falsification:` field added

Outcome: Expected to improve mechanism depth quality in research archives by requiring empirical claims to state a falsification condition, preventing mechanism fields from being populated with narratives that cannot generate testable predictions. Observable signal: research archives produced after this change include `falsification:` fields in empirical claims; the field is populated with conditions that specify when the mechanism would fail, not circular restatements of the mechanism. Check after N=5 research angles run under the updated format. Stability note: Angle 4 (falsification condition as depth discriminator) is queued as P2 — results may revise this rule; applied as provisional pending that angle.

Flip trigger: PCR-RQ-A1 should be revised or removed if: N=5 research waves show `falsification:` fields are consistently populated with "NARRATIVE — no falsification condition available" at the same rate as claims previously relied on circular mechanism text (>50% of empirical claims) — indicating the field adds format overhead without discriminating deep from shallow mechanisms, OR if the P2 angle on falsification condition effectiveness finds the requirement creates surface-mimicry of falsification conditions without genuine mechanistic grounding.

---

## Rule PCR-RQ-A2 — Phase 7 test distributional independence (CONDITIONAL)
Added: 2026-07-05
Claim key: automated-grade-domain-accuracy-cliff (HIGH SCOPE: pre-2024 NLP tools) × convergence-blocks-vs-tempers (HIGH SCOPE: causal-inference contexts); compound mechanism PCR-research-quality, 2026-07-05
Evidence tier: compound HIGH×HIGH (both with SCOPE annotations → implemented as CONDITIONAL; compound confidence MEDIUM given scope caveats on both)
File: kit-maker/ENTRYPOINT.md, Phase 7 gate — new checkbox "Test distributional independence (CONDITIONAL)"

Outcome: Expected to improve Phase 7 validation quality for behavioral kit builds by preventing uninformative convergence from homogeneous test sets. Observable signal: Phase 7 test sets for judgment-intensive validations include at least 2 structurally distinct distributional regimes; designers certify GREEN only after confirming test case diversity. Check after N=5 Phase 7 validation runs where scenario-based testing (not field-presence checks alone) was used.

Flip trigger: PCR-RQ-A2 should be revised or removed if: N=5 kit builds using multi-regime test sets detect no compliance issues that single-regime sets missed — indicating that regime diversity adds overhead without improving false-positive-GREEN detection for the kit types being built, OR if controlled studies find that distributional independence requirements in kit behavioral testing produce no detectably better compliance predictions at production scale.

---

## Rule PCR-RQ-A3 — Phase 7 NEVER-rule specialist detection note (CONDITIONAL)
Added: 2026-07-05
Claim key: peer-review-statistical-expert-biggest-gain (HIGH SCOPE: quantitative empirical research) × omission-commission-asymmetry (HIGH, arXiv:2604.20911, prior cluster); compound mechanism PCR-research-quality, 2026-07-05
Evidence tier: compound HIGH×HIGH (peer-review SCOPE: quantitative empirical → extension to behavioral auditing is medium-confidence derivation; omission-commission-asymmetry applied without scope caveat in prior PCRs)
File: kit-maker/ENTRYPOINT.md, Phase 7 gate, Per-constraint validation — "Prohibition-commission interaction at long horizon" paragraph (specialist detection note appended)

Outcome: Expected to improve NEVER-rule decay detection in Phase 7 audits for long-session kits by specializing the Correctness Auditor prompt to explicitly focus on NEVER-rule compliance across turns 5+. Observable signal: Phase 7 audits for long-session kits include a Correctness Auditor prompt that specifies NEVER-rule scanning; auditor reports include specific findings about turn-by-turn NEVER-rule compliance rather than only final-output compliance. Check after N=5 Phase 7 runs on kits with NEVER rules targeting sessions >5 turns.

Flip trigger: PCR-RQ-A3 should be revised or removed if: N=5 kit builds using specialized NEVER-rule auditor prompts vs. general-purpose prompts show no difference in NEVER-rule violation detection rate — indicating either that general auditors already detect decay adequately, or that specialist prompting does not reliably produce cross-turn compliance analysis in the execution context.

---

## Rule PCR-MR-A1 — ENTRYPOINT Phase 6: adversarial plan review gate before Phase 6 build dispatch
Added: 2026-07-05
Claim key: red-team-late-timing-resistance (HIGH, qualitative N=17 + organizational evidence) + red-team-internal-familiarity-blindspot (HIGH); adversarial-review-dynamics group, PCR-meta-research, 2026-07-05
Evidence tier: HIGH (conditional — SCOPE: applies when reviewer is not externally structurally independent of the plan being reviewed; kit-maker writing and building the same plan meets this condition)
File: kit-maker/ENTRYPOINT.md, Phase 6 BUILD section (before Phase 6 subagent dispatch — new adversarial plan review gate block)

Outcome: Expected to prevent plan-level architecture errors from propagating through Phase 6 build into all downstream files. Observable signal: Phase 6 builds should show fewer mid-build plan pivots and fewer "architecture discovered wrong in Phase 7" findings. Specifically, blocking concerns caught pre-Phase-6 should appear in the gate log rather than as Phase 7 audit failures or mid-build revisions. Check after N=5 Phase 6 builds.
Sensitivity condition: the N=5 trials must include at least 2 kits with non-trivial plan complexity (>5 Phase 6 files; at least one architectural decision with ≥2 plausible alternatives). Easy kits with single obvious implementations may never surface blocking concerns regardless of the gate's effectiveness.

Flip trigger: PCR-MR-A1 should be revised or removed if: N=5 Phase 6 builds (meeting sensitivity condition above) show no blocking concerns identified by the adversarial plan review that were not already identified through Phase 5 user review + Phase 5 gate — indicating the pre-build adversarial review adds no new signal beyond existing Phase 5 checks. OR if the adversarial reviewer consistently returns blocking concerns that turn out not to require plan revision (false positives across ≥3 of 5 builds) — indicating the gate produces revision overhead without quality gain.

---

## Rule PCR176-A5 — ENTRYPOINT Hard Rule 13: constraint ordering / NEVER-rule bookend precedence note
Added: 2026-07-05
Claim key: pm-llm-compliance-drop-2-21pct (HIGH, arXiv:2603.23530) × omission-commission-asymmetry (HIGH, arXiv:2604.20911); conflict between PCR176-A4 constraint ordering and NEVER-rule structural reinforcement in same section; Step 5 PCR conflict resolution
Evidence tier: HIGH×HIGH (precedence note resolves a structural conflict between two independently HIGH-confidence rules; the note itself is a logical derivation, not a new empirical claim)
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 Constraint ordering recommendation — one-sentence precedence note appended after "(4) operational procedures last"

Outcome: Expected to eliminate the unresolvable conflict a kit designer faces when building a behavioral contract that includes both NEVER/prohibition rules and operational procedures. Without the note, the designer cannot simultaneously satisfy "NEVER rules second in the ordered body" and "NEVER rules also appear at the session-end position" when operational procedures occupy the terminal position. With the note, the designer applies two-layer structure: ordered body (NEVER rules second, operational procedures last) + bookend addendum (NEVER rules appended after the ordered body ends). Observable signal: kits reviewed at Phase 7 should not contain behavioral contracts where NEVER-rule bookend placement and operational-procedure placement conflict — either the ordering was applied to the body only (correct) or the designer raised a conflict at Phase 6 (which is also correct if the note wasn't read). Check after N=5 kit builds where the behavioral contract includes both NEVER rules and operational procedures.

Flip trigger: PCR176-A5 should be revised or removed if: N=5 kit builds show that designers either (a) naturally apply the two-layer interpretation without the note — indicating the precedence is already implicit in the surrounding text — or (b) the note produces a third interpretation (placing NEVER rules at both the second position AND at the end of the ordered body, before operational procedures) that was absent before the note was added. In case (b): revise note to add explicit clarification that "final addendum" means after the last operational procedure.

---

## Rule SYNTH-03-A1 — ENTRYPOINT external register row: positive-outcome architectural condition required
Added: 2026-07-05
Claim key: OdysseyBench (`arXiv:2506.06780`, HIGH) SYNTHESIZED with arXiv:2603.29231 (HIGH) via architectural scope-explanation (SYNTH-03, 2026-07-05)
Evidence tier: SYNTHESIZED (PROVISIONAL) — architectural distinction inferred from mechanism alignment; not directly tested as controlled variable
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 domain-conditional checklist (external intention register row — "Positive-outcome architectural condition (required)" block)

Outcome: Expected to prevent kit designers from implementing the external register as an unbounded memory accumulator (`add_to_memory()` pattern), which is the architecture associated with the negative-outcome finding (arXiv:2603.29231, HIGH: hurt 6/10 models). The explicit architectural constraint ("bounded K≤6 predicate list, NOT unbounded scratchpad") should produce kit designs that use the positive-outcome architecture. Observable signal: kits implementing an external register use bounded predicate schemas (fixed fields for step status, dependency graph, confirmed parameters, output handles) rather than free-text scratchpad accumulation. Check after N=5 kit builds that include an external register based on this row.

Flip trigger: SYNTH-03-A1 should be revised or removed if: (a) a study directly comparing bounded K≤6 predicate register vs unbounded growing scratchpad vs in-context tracking on long-horizon tasks (≥10 steps), holding task set and models constant, finds that the architectural distinction does NOT account for the outcome difference — i.e., bounded registers produce the same negative result as unbounded scratchpads when write overhead is equalized; OR (b) N=5 kit builds using bounded predicate registers produce long-horizon performance indistinguishable from unbounded scratchpad implementations, suggesting the positive-outcome condition is not in practice determined by the bounded/unbounded distinction. Sensitivity condition: trials must include tasks of ≥10 sequential steps with cross-domain boundaries to be in scope for this flip trigger.

---

## Rule PCR-MR-A2 — ENTRYPOINT Hard Rule 13: independence classification for generated kit multi-pass review procedures
Added: 2026-07-05
Claim key: cascade-peer-review-62pct-time-reduction (HIGH, simulation N=25,000) + resubmission-reopt-out-severe-quality-decline (HIGH, 28% quality decline on second-pass removal); review-system-design group, PCR-meta-research, 2026-07-05
Evidence tier: HIGH (conditional — SCOPE: applies when generated kit has multi-pass review procedures; the independence-quality link was demonstrated under simulation conditions combining two experimental manipulations; the Hellinger-distance proxy may underestimate quality loss for specific high-stakes error types)
File: kit-maker/ENTRYPOINT.md, Hard Rule 13 domain-conditional procedure checklist (new table row: "Kit has multi-pass review procedures")

Outcome: Expected to improve generated kit review procedure quality by preventing accidental independence violations (carrying prior context when clean-slate is needed) and accidental effort waste (re-running independent passes when continuation is acceptable). Observable signal: generated kits with multi-pass review include explicit independence declarations in their behavioral contracts (each pass labeled independence-required or continuation-acceptable with enforcement or justification). Phase 7 verification can confirm the declaration exists and is plausible given the pass's stated purpose. Check after N=5 Phase 6 builds where multi-pass review is specified.
Sensitivity condition: the N=5 trials must include at least 2 kits that specify ≥2 distinct review passes (not kits with only a single auditor pass).

Flip trigger: PCR-MR-A2 should be revised or removed if: N=5 generated kit Phase 7 audits find that independence declarations are either (a) never present — multi-pass review is rare enough that the conditional row never fires across all kits built (conditional is vacuous) OR (b) present but uniformly set to "continuation-acceptable" or "independence-required" without meaningful distinction — indicating the classification adds format overhead without producing behavioral differentiation in how passes are designed or executed.

---
