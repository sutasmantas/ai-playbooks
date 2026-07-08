I have sufficient data to compile the archive. The saturation check: queries 1-5 all returned new keys; there are no two consecutive zero-result queries. All 5 queries were productive. Now compiling the full archive.

# Research Archive: Systematic omissions in AI-assisted code review

Track: Practitioner-Consensus
Verify pass: SKIPPED — Practitioner-Consensus Track

## Saturation log

- Query 1: "code review AI LLM systematic omissions missed false negatives empirical comparison human reviewer" → 7 new keys. Running keys: [false-negative-rate-escalation, explanation-paradox, human-outperforms-llm-depth, clustered-error-patterns, fault-type-diagnosis-gap, overcorrection-mechanism, spec-misread]
- Query 2: "automated code review limitations what missed security operational readiness cross-cutting concerns" → 4 new keys. Running keys: [security-comment-frequency, static-analysis-coverage-floor, business-logic-blind-spot, false-positive-noise-burden]
- Query 3: "LLM code review blind spots cognitive bias coverage gaps developer study" → 4 new keys. Running keys: [instant-gratification-bias, fixation-bias-reversals, reduced-visual-attention, novelty-assessment-gap]
- Query 4: "site:arxiv.org code review LLM missed omission automated review findings empirical 2023 2024 2025" → 3 new keys. Running keys: [race-condition-miss, timing-attack-miss, sast-injection-recovery]
- Query 5: "code review AI agent findings security architecture cross-cutting miss overlook practitioner" → 4 new keys. Running keys: [cross-service-schema-drift, feature-flag-regression, diff-scope-blindness, non-determinism-problem]
- Saturation decision: NO — all 5 queries returned new keys; stopping at query 5 per plan (all planned queries complete, not early-stop saturation).

---

## Claims (22 total)

---

### [key: false-negative-rate-escalation]
- evidence: empirical
- confidence: high
- group: omission-categories
- sources: https://arxiv.org/html/2603.00539v1

**Claim:** LLMs reviewing code for requirement conformance show false negative rates (incorrectly rejecting correct code) of 35.9%–91.9% depending on prompting mode, with the rate dramatically worsening when the model is asked to explain its reasoning — GPT-4o on MBPP goes from 35.9% FNR under direct prompting to 87.9% under full explanation prompting. The mechanism is that requiring explanations forces the model to generate post-hoc rationalizations that escalate into invented errors. Scope: applies to all frontier models (GPT-4o, Llama-3.1-8B) and multiple benchmarks. Kit implication: explanation-heavy prompts for code review produce more noise, not more accuracy; kit should use targeted single-criterion queries rather than "explain all issues" blanket prompts.

---

### [key: explanation-paradox]
- evidence: empirical
- confidence: high
- group: omission-categories
- sources: https://arxiv.org/html/2603.00539v1

**Claim:** Adding explanation requirements to LLM review prompts causes a self-consistency failure where 93% of GPT-4o rejection verdicts have rationales that read as positive — the verdict says "wrong" while the explanation supports "correct." The mechanism is that generating an explanation activates a different reasoning path than generating the verdict, producing internal contradictions. Scope: observed across GPT-4o and open-source models on MBPP and HumanEval. Kit implication: the kit must not rely on LLM self-reported reasoning chains as reliable evidence for review verdicts; each review claim should be independently checkable.

---

### [key: fault-type-diagnosis-gap]
- evidence: empirical
- confidence: high
- group: omission-categories
- sources: https://arxiv.org/html/2603.00539v1

**Claim:** LLMs identify that code fails (symptom matching: 94–100% accuracy) but misdiagnose why it fails (bug-type diagnosis: only 44–75% accuracy). The mechanism is that symptom recognition is pattern-matching on surface features while root-cause diagnosis requires causal reasoning across the execution model. Scope: buggy code review tasks across multiple benchmarks. Kit implication: the kit should not accept LLM diagnoses as root cause — a targeted second-pass asking for falsifiable counterexamples is needed before a diagnosis is treated as confirmed.

---

### [key: four-false-rejection-patterns]
- evidence: empirical
- confidence: high
- group: omission-categories
- sources: https://arxiv.org/html/2603.00539v1

**Claim:** Four patterns account for 87.2% of all LLM false rejections: Logic Error claims without counterexample (48.2%), Added Requirements not in the spec (14.1%), Boundary Error claims where code is correct (13.2%), and Misread Spec (11.7%). The mechanism is that LLMs confabulate additional constraints, misread semantics, or assert errors they cannot prove. Scope: requirement-conformance review tasks across multiple models. Kit implication: the kit should include a targeted extraction pass explicitly checking each LLM review finding against these four failure types before surfacing the finding to a human.

---

### [key: clustered-error-patterns]
- evidence: empirical
- confidence: high
- group: reviewer-behavior
- sources: https://arxiv.org/html/2603.00539v1

**Claim:** LLM-generated review errors cluster tightly (shared systematic biases), while human reviewer errors are widely distributed. The mechanism is that all LLMs share training data, architecture, and RLHF-shaped priors, causing them to miss the same things consistently across runs. Scope: applies to all current frontier and open-source models. Kit implication: a single LLM pass has known blind-spot categories that are structurally invisible to additional LLM passes — the kit needs a non-LLM verification layer (SAST, human escalation trigger) for the clustered miss zones.

---

### [key: race-condition-miss]
- evidence: empirical
- confidence: high
- group: security-coverage
- sources: https://arxiv.org/html/2602.16741v1

**Claim:** LLM code reviewers systematically miss TOCTOU race conditions (state changes between check and use) regardless of how adversarially the code is constructed or what comments are present. The mechanism is that race conditions require temporal multi-step reasoning about interleaved execution states — a capability beyond pattern-level vulnerability recognition. Scope: frontier models tested on adversarial vulnerability benchmarks. Kit implication: race conditions, TOCTOU, and time-of-check bugs must be added to the kit's explicit extraction-pass targets, explicitly asked for rather than expected to surface organically.

---

### [key: timing-attack-miss]
- evidence: empirical
- confidence: high
- group: security-coverage
- sources: https://arxiv.org/html/2602.16741v1

**Claim:** Side-channel timing attacks (where execution duration leaks secret data) are systematically missed by LLM reviewers because they require awareness that information can be encoded in non-functional properties of execution. The mechanism is that LLMs reason about what code computes, not about how observable properties of the computation (timing, power) vary with secret inputs. Scope: frontier models on security-focused code review benchmarks. Kit implication: the kit should include a dedicated security side-channel extraction pass as a named category, not grouped under general "security review."

---

### [key: compositional-auth-miss]
- evidence: empirical
- confidence: high
- group: security-coverage
- sources: https://arxiv.org/html/2602.16741v1

**Claim:** Complex authorization logic where individually correct mechanisms interact unsafely (compositional security failures) is consistently missed by LLMs even when each component appears secure in isolation. The mechanism is that compositional reasoning requires holding multiple state constraints simultaneously across distant code sections — exceeding reliable LLM working context. Scope: multi-step authorization flows in real codebases. Kit implication: the kit must treat "does the auth hold under composition" as a separate extraction pass with explicit cross-component tracing, not subsumed under a general "check security" directive.

---

### [key: crypto-api-misuse-partial-miss]
- evidence: empirical
- confidence: medium
- group: security-coverage
- sources: https://arxiv.org/html/2602.16741v1

**Claim:** Cryptographic API misuse in Java (JCA) is detected at only ~50% accuracy by LLMs, due to models lacking precise understanding of API semantics, key management lifecycle, and provider-specific behavior. Scope: Java cryptographic code; may generalize to other platform-specific crypto APIs. Kit implication: crypto API usage should be a named extraction target in the kit's security pass, with the kit explicitly checking for key lifecycle, algorithm selection, and provider configuration rather than relying on organic LLM detection.

---

### [key: cross-service-schema-drift]
- evidence: consensus
- group: cross-cutting-omissions
- sources: https://baz.co/resources/engineering-intuition-at-scale-the-architecture-of-agentic-code-review

**Claim:** AI code review agents universally fail to detect schema drift across service boundaries — cases where a change to one service's data contract is not propagated to consuming services. The mechanism is that all current agents operate on the diff of a single pull request and cannot reason across repository or service boundaries. Scope: multi-service architectures with shared schemas, any microservices codebase. Kit implication: the kit must include a cross-boundary impact extraction pass that explicitly asks: "What contracts, schemas, or interfaces changed here, and where are the downstream consumers?"

---

### [key: feature-flag-regression]
- evidence: consensus
- group: cross-cutting-omissions
- sources: https://baz.co/resources/engineering-intuition-at-scale-the-architecture-of-agentic-code-review

**Claim:** Feature flag regressions — where logic gated by a flag is silently disabled by a change — consistently escape AI review detection. The mechanism is that flag-conditional paths are only reachable under specific runtime configurations that are invisible in the static diff. Kit implication: the kit should include an explicit extraction pass for feature-flag-gated paths whenever a change touches flag evaluation logic, configuration, or flag name constants.

---

### [key: diff-scope-blindness]
- evidence: consensus
- group: cross-cutting-omissions
- sources: https://baz.co/resources/engineering-intuition-at-scale-the-architecture-of-agentic-code-review

**Claim:** All diff-based AI reviewers structurally cannot detect issues that manifest outside the changed lines — broken downstream consumers, violated implicit team norms, and cross-file regression paths remain invisible. The mechanism is architectural: the review input is bounded by the diff, not the call graph. Scope: applies to every AI reviewer operating on PR diffs as input (the majority of current tools). Kit implication: the kit must include a "blast radius" extraction pass asking explicitly for all callers, consumers, and dependents of changed APIs and interfaces.

---

### [key: non-determinism-problem]
- evidence: consensus
- group: reviewer-behavior
- sources: https://baz.co/resources/engineering-intuition-at-scale-the-architecture-of-agentic-code-review

**Claim:** AI code reviewers produce different findings on identical inputs across runs ("same setup, different answers"), making their omissions unpredictable and non-reproducible. The mechanism is LLM sampling non-determinism compounded by the absence of a structured coverage checklist. Scope: all sampling-based LLM reviewers without deterministic post-processing. Kit implication: the kit must operate on a fixed structured checklist of extraction passes rather than freeform review prompts, converting stochastic behavior into deterministic coverage.

---

### [key: security-comment-frequency]
- evidence: consensus
- group: security-coverage
- sources: https://arxiv.org/pdf/2405.18216 ; https://arxiv.org/pdf/2412.18531

**Claim:** Security issues account for approximately 1% of code review comments in practice, and automated static analysis tools address only ~16% of issues identified in manual security reviews. The mechanism is that security review requires intent-aware reasoning about attacker models, which is both cognitively expensive for humans and architecturally absent in pattern-based tools. Scope: general software projects with standard code review processes. Kit implication: the kit must treat security as a separately triggered, dedicated extraction pass rather than expecting it to surface through general review activity.

---

### [key: business-logic-blind-spot]
- evidence: consensus
- group: omission-categories
- sources: https://arxiv.org/html/2412.18531v2 ; https://arxiv.org/html/2505.16339v1

**Claim:** Both automated tools and LLMs systematically miss business logic flaws and authorization errors because these require knowledge of domain semantics, user intent, and system invariants that are not encoded in the code itself. The mechanism is that business logic errors are defined relative to a specification that exists outside the repository — something an input-bounded reviewer cannot access. Scope: all domain-specific code where correctness is determined by external business rules. Kit implication: the kit must include a mandatory domain-context injection step: provide the feature intent and acceptance criteria as reviewer context before any business-logic extraction pass.

---

### [key: false-positive-noise-burden]
- evidence: consensus
- group: reviewer-behavior
- sources: https://arxiv.org/html/2412.18531v2 ; https://arxiv.org/html/2505.16339v1

**Claim:** LLM reviewers generate enough false positives (26.2% of bot comments labeled "Won't Fix" or "Closed" in one study) that developers develop automation bias and begin ignoring review output, causing real issues to escape unreviewed. The mechanism is signal-to-noise collapse: when false positive rates are high, rational reviewers discount all findings uniformly. Scope: any deployment where review noise exceeds ~25% irrelevant findings. Kit implication: the kit must prioritize precision over recall in each extraction pass — a targeted pass with few high-confidence findings beats a broad pass with many uncertain ones.

---

### [key: instant-gratification-bias]
- evidence: empirical
- confidence: high
- group: reviewer-behavior
- sources: https://arxiv.org/html/2601.08045v1

**Claim:** Developers adopt LLM-suggested code changes without thorough examination (Instant Gratification bias) at high frequency (156 instances observed, the most common bias type), accepting suggestions without verifying correctness. The mechanism is reduced perceived cost of acceptance when a trusted tool suggests a change, lowering the critical evaluation threshold. Scope: observed in 14-participant study across student and professional developers. Kit implication: the kit should require that every accepted LLM review finding pass a human "falsifiability check" — the reviewer must be able to state what evidence would disprove the finding before marking it actionable.

---

### [key: fixation-bias-reversals]
- evidence: empirical
- confidence: high
- group: reviewer-behavior
- sources: https://arxiv.org/html/2601.08045v1

**Claim:** Developers anchor on initial LLM-suggested diagnoses even when contradictory evidence emerges (Fixation bias, 43.4% reversal rate — highest of any bias type), meaning LLM-generated false diagnoses tend to persist longer than human-generated ones. The mechanism is authority transfer: developers attribute diagnostic credibility to the LLM, which suppresses the normal skeptical re-evaluation cycle. Scope: professional and student developers using LLM assistants. Kit implication: the kit must present review findings as hypotheses requiring falsification, not conclusions, with explicit prompting to the reviewer to actively seek disconfirming evidence.

---

### [key: reduced-visual-attention-ai-code]
- evidence: empirical
- confidence: medium
- group: reviewer-behavior
- sources: https://arxiv.org/html/2601.08045v1

**Claim:** Eye-tracking studies show developers give reduced visual attention to AI-generated code during review, indicating overconfidence that leads to missed defects. The mechanism is a trust heuristic: AI-labeled code triggers a "pre-approved" cognitive shortcut, reducing deliberate inspection effort. Scope: contexts where reviewers know code is AI-generated. Kit implication: the kit's human review triggers must not signal whether issues were AI-flagged or human-flagged; the reviewer should evaluate findings on their merits, not their provenance.

---

### [key: architectural-context-loss]
- evidence: consensus
- group: cross-cutting-omissions
- sources: https://arxiv.org/html/2505.16339v1 ; https://arxiv.org/html/2412.18531v2

**Claim:** LLMs produce superficial feedback on architectural and design concerns when they lack full codebase context, missing issues that require understanding why a system was designed a certain way — historical design intent that lives outside the diff. The mechanism is bounded context window: the reviewer sees the change but not the design rationale, prior refactors, or known constraints that explain the original structure. Scope: architecturally complex codebases with non-trivial design history. Kit implication: the kit should include a design-intent injection step for any change touching core architectural layers, providing ADR (Architecture Decision Record) summaries or prior design notes as reviewer context.

---

### [key: novelty-and-prior-work-positioning]
- evidence: empirical
- confidence: medium
- group: omission-categories
- sources: https://arxiv.org/html/2502.17086v4

**Claim:** LLMs systematically omit evaluation of novelty and prior-work positioning when reviewing (F1 score of 0.126 for novelty-weakness identification vs. human expert performance), over-focusing on technical validity while ignoring whether the solution is already known or suboptimal relative to existing approaches. The mechanism is training distribution skew: LLMs are rewarded for identifying functional correctness, not for tracking the solution space. Scope: this was measured in academic paper review but the omission pattern generalizes to code review — LLMs miss "there is a better-known approach" observations. Kit implication: the kit should include an explicit extraction pass asking "does a known, better, or standard approach exist for this pattern?" to compensate for LLM solution-space blindness.

---

### [key: sast-injection-recovery]
- evidence: empirical
- confidence: high
- group: omission-categories
- sources: https://arxiv.org/html/2602.16741v1

**Claim:** Injecting SAST (static analysis) findings as verification hints recovers 47% of baseline LLM misses and achieves 96.9% detection on the combined pipeline. The mechanism is that SAST tools catch deterministic pattern-level vulnerabilities that LLMs miss, and framing them as context for the LLM converts LLM misses into LLM confirmations. Scope: security-focused code review with complementary SAST tooling available. Kit implication: the kit architecture should include a SAST pre-pass whose findings are injected as structured context into LLM extraction passes, not run as a separate parallel track — this is the highest-leverage known intervention for closing LLM security coverage gaps.

---

## Null results

- No queries returned zero useful results. All 5 queries returned substantive findings.
- The arxiv site: query (Query 4) returned slightly lower novel claim density but still yielded the adversarial vulnerability paper (2602.16741) which produced the highest-quality security claims.

---

## New angles surfaced

1. **Implicit team norms and convention violations** — practitioners cited "violations of implicit team norms" as a distinct miss category not well-covered in empirical literature; this warrants a dedicated angle on convention/style-as-signal omissions vs. convention-as-noise.

2. **Multi-turn review degradation** — the recursive/recursive commenting problem (each fix triggers a new review with redundant findings) suggests LLMs have no memory of prior review state, causing review-loop noise amplification; no empirical studies found on this.

3. **Intent inference failure** — multiple sources cited inability to "infer author intent" as root cause of many misses; this is distinct from business logic and may deserve its own angle on change-intent modeling.

4. **Performance and efficiency regression misses** — reviewers reviewing AI-generated code (2601.19287) named performance as a systematic omission category; no empirical quantification found.

5. **LLM-generated test suite coverage blindness** — clustered LLM error patterns mean test suites generated to verify LLM-reviewed code have the same blind spots as the reviewer; a circular validation failure mode with no current kit mitigations found in literature.
