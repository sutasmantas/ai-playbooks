# L1–L10 Sequential Longitudinal Batch — Angle Generation Output
# Condition B: 10 inputs, single session, accumulating context

VOCABULARY SELF-REPORT FLAG (applies to all 10 tasks): Source B (web search / survey-paper probe) is unavailable in this execution context. All vocabulary traditions were enumerated by LLM only. External validation via survey-paper probe is recommended before accepting any tradition check as complete. Expected coverage: MODERATE for all 10 tasks.

---

## L1: Self-Correction Failure Modes in LLM Instruction Following

### INTAKE BRIEF
```
INTAKE BRIEF
============
Topic: Failure modes of self-correction in LLMs when following instructions — conditions under which
  self-correction degrades rather than improves output quality.

Anchor vocabulary: "self-correction" (NLP alignment tradition), "failure modes" (systems reliability
  tradition), "LLM instruction following" (NLP alignment tradition)

Candidate vocabulary traditions:
  1. NLP alignment / self-refinement — self-refinement, self-critique, iterative refinement,
     self-repair, revision loops, self-debugging, self-improvement
  2. Systems reliability / failure analysis — failure modes, breakdown conditions, error taxonomy,
     degradation patterns, collapse conditions, robustness analysis
  3. Cognitive science / metacognition — metacognitive failure, overconfidence, self-monitoring
     failure, illusory competence, calibration failure
  4. LLM evaluation / benchmarking — behavioral analysis, ablation studies, error patterns,
     empirical evaluation of instruction-following degradation

  NOTE: Vocabulary traditions listed here are LLM self-reported. Vocabulary-discovery pass
  recommended before accepting angle list as covering all traditions.

Question type: EXPLORATORY
  (prompt asks "what are the failure modes" — mapping the space, not comparing two methods)

Scope markers: Explicit scope constraint — failure cases only; successful self-correction excluded.
  Inferred scope: any LLM model family, any instruction type, published literature 2022–2025.

Known exclusions: When self-correction succeeds (explicitly excluded by user prompt).

Domain maturity estimate: academic-heavy
  Basis: anchor vocabulary is academic; active arXiv literature; user did not mention specific
  tools or deployment contexts.

Survey paper status: NOT FOUND — Source B unavailable.
  Vocabulary-discovery pass recommended before finalizing angle list.

Source B status: UNAVAILABLE — MODERATE (Source A+C produced 4 distinct traditions)
```

### COVERAGE MAP
```
COVERAGE MAP
============
Tradition 1: NLP alignment / self-refinement
  Representative terms: self-refinement, self-critique, iterative refinement, self-repair, revision loops
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: Systems reliability / failure analysis
  Representative terms: failure modes, breakdown conditions, error taxonomy, degradation patterns
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: Cognitive science / metacognition
  Representative terms: metacognitive failure, overconfidence, calibration failure, illusory competence
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: LLM evaluation / benchmarking
  Representative terms: behavioral analysis, ablation, empirical evaluation, instruction-following
  Planned angle slot: Confirmatory A4
  Gap flag: No

Traditions NOT yet represented in the planned list: None — all 4 traditions have planned angle slots.

Cross-disciplinary slot (required):
  Target tradition: Control theory / feedback systems stability analysis
  Basis for selection: Self-correction is structurally a feedback loop; control theory has a developed
  vocabulary for loop instability, oscillation, error amplification, and divergence conditions that is
  absent from NLP alignment literature.
```

### TYPE ALLOCATIONS
```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — NLP alignment / self-refinement): assigned
Slot A2 (Confirmatory — Systems reliability / failure analysis): assigned
Slot A3 (Confirmatory — Cognitive science / metacognition): assigned
Slot A4 (Confirmatory — LLM evaluation / benchmarking): assigned
Slot N1 (Null-hypothesis): assigned
Slot D1 (Adversarial): starting vocabulary — sycophancy / social approval dynamics
  NOT FROM: self-refinement, failure modes, metacognition, benchmarking
Slot C1 (Cross-disciplinary): Control theory / feedback systems
```

### ANGLE LIST

```
ANGLE 1: Error amplification in iterative self-refinement
===========
Vocabulary tradition: NLP alignment / self-refinement
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Conditions under which iterative revision worsens output; error propagation
  across revision rounds; specific instruction types where amplification is documented.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — issues and discussions on LLM evaluation frameworks
  (e.g., lm-evaluation-harness, evals)

Queries:
  Q1: self-refinement failure large language models instruction following 2023 2024 2025
  Q2: iterative refinement error amplification LLM when worse than single pass
  Q3: self-critique degradation instruction compliance language models empirical
  Q4: LLM self-correction negative transfer worsens output conditions

Coverage-gap note: Does not address whether amplification is instruction-type-dependent vs.
  model-scale-dependent — requires targeted follow-up.
```

```
ANGLE 2: Taxonomy of LLM self-correction breakdown conditions
===========
Vocabulary tradition: Systems reliability / failure analysis
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Systematic categorization of failure types; conditions triggering breakdown;
  frequency distribution of failure classes across model families.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): Technical reports from model evaluation labs (Anthropic, DeepMind evals)

Queries:
  Q1: LLM self-correction failure taxonomy breakdown conditions empirical analysis
  Q2: language model instruction following robustness failure analysis 2024 2025
  Q3: LLM revision loop failure cases systematic study error patterns

Coverage-gap note: Published failure taxonomies may lag behind model capability changes;
  taxonomy from 2023 papers may not cover GPT-4o / Claude 3+ behavior.
```

```
ANGLE 3: Metacognitive failure — models that cannot detect their own errors
===========
Vocabulary tradition: Cognitive science / metacognition
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence that LLMs misidentify their own errors; calibration failure measures;
  relationship between expressed confidence and actual correction quality.

Source type (academic): arXiv cs.CL + cs.LG; PubMed (metacognition / calibration in human-AI)
Source type (practitioner): GitHub — confidence calibration tools and benchmarks

Queries:
  Q1: LLM metacognitive calibration failure self-correction overconfidence 2024 2025
  Q2: language model cannot detect own errors self-assessment failure empirical
  Q3: LLM confidence calibration self-evaluation accuracy correlation

Coverage-gap note: Intersection of cognitive science calibration literature and LLM evaluation
  literature is sparse; may require PubMed cross-reference for foundational calibration work.
```

```
ANGLE 4: Empirical benchmarks isolating self-correction failure conditions
===========
Vocabulary tradition: LLM evaluation / benchmarking
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Specific benchmarks or evaluation protocols that isolate failure conditions;
  effect sizes; which instruction classes and model families show highest failure rates.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — benchmark implementations (IFEval, FollowBench, InFoBench)

Queries:
  Q1: instruction following evaluation self-correction failure benchmark LLM 2024 2025
  Q2: IFEval FollowBench self-correction limitation analysis language models
  Q3: LLM self-correction ablation study instruction type failure rate measurement

Coverage-gap note: Standard benchmarks test instruction following without isolating
  self-correction specifically; may need custom evaluation designs.
```

```
ANGLE 5: Conditions under which self-correction reliably succeeds (null-hypothesis framing)
===========
Vocabulary tradition: NLP alignment / self-refinement (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Evidence that self-correction does NOT fail under specific conditions — scope
  conditions where failure is absent; negative results on failure claims; replication failures
  of self-correction degradation findings.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — self-refinement framework benchmarks

Queries:
  Q1: LLM self-correction does not fail conditions reliable improvement instruction following
  Q2: self-refinement success conditions no degradation empirical language models
  Q3: when self-correction works language model instruction following positive evidence scope
  Q4: self-critique improvement replication robust instruction following 2024 2025

Coverage-gap note: Literature may be sparse — papers documenting success are more common than
  papers that precisely bound the conditions of success vs. failure.
```

```
ANGLE 6: Self-correction failure as implicit reward-optimization artifact
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Sycophancy / social approval dynamics
  Generating from: sycophancy, reward hacking, approval-seeking, user-preference optimization
  Excluding from generation prompt: self-refinement, failure modes, metacognition, benchmarking

Angle type: Adversarial
Predicted research character: empirical
What to extract: Evidence that "failure" to follow instructions via self-correction is actually
  alignment-correct behavior — models that optimize for human approval rather than literal
  instruction compliance; cases where sycophantic revision produces higher user preference despite
  lower instruction adherence.

Source type (academic): arXiv cs.CL + cs.LG (sycophancy, reward hacking literature)
Source type (practitioner): Anthropic / OpenAI technical reports on sycophancy measurement

Queries:
  Q1: LLM sycophancy self-correction user approval vs instruction adherence conflict
  Q2: reward hacking self-refinement approval-seeking instruction following trade-off
  Q3: LLM self-correction approval-optimized behavior sycophancy empirical evidence

Coverage-gap note: This angle reframes "failure" — the research may not use the word "failure"
  at all; searching "sycophancy" + "self-correction" jointly may have low initial recall.
```

```
ANGLE 7: Feedback loop instability — control theory applied to LLM revision cycles
===========
Vocabulary tradition: Control theory / feedback systems (cross-disciplinary)
Angle type: Cross-disciplinary
Predicted research character: gap
What to extract: Theoretical frameworks for analyzing feedback loop stability that map onto LLM
  revision cycles; conditions for oscillation, divergence, or steady-state failure in iterative
  systems; any direct application to LLMs or NLP systems.

Source type (academic): arXiv cs.SY (Systems and Control) + cs.CL
Source type (practitioner): deprioritized — control theory application to LLMs has minimal
  practitioner literature; academic-heavy cross-disciplinary framing

Queries:
  Q1: feedback loop stability analysis iterative language model revision control theory
  Q2: LLM iterative correction oscillation divergence convergence failure conditions
  Q3: self-referential feedback system instability NLP iterative refinement
  Q4: control theory application language model correction loop stability analysis

Coverage-gap note: This is a predicted gap angle — the literature connecting control theory
  stability analysis to LLM revision loops may be thin or nonexistent; absence is a finding.
```

### GATE SUMMARY
```
GATE SUMMARY — L1
==================
Gate 1 — Completeness:
  Null-hypothesis angle present: PASS (Angle 5 — explicit disconfirming framing, failure/success
    scope conditions, uses "does not fail" vocabulary)
  Adversarial angle present: PASS (Angle 6 — ADVERSARIAL-FLAGGED label + dispatch note)
  Cross-disciplinary angle present: PASS (Angle 7 — control theory, not in intake traditions)
  Source-type coverage: PASS (academic-heavy; practitioner sources included where appropriate)
  Vocabulary-tradition map populated: PASS (4 traditions + cross-disciplinary)
  Result: PASS

Gate 2 — Distinctness:
  Boolean-connective test:
    A1 (self-refinement failure) vs. A2 (failure taxonomy): PASS — A1 uses iterative-revision
      vocabulary; A2 uses systematic-classification vocabulary; OR retrieval differs.
    A1 vs. A3 (metacognition): PASS — different vocabulary pool (metacognitive calibration vs.
      error amplification)
    A1 vs. A4 (benchmarks): PASS — A4 targets specific benchmark implementations; A1 targets
      mechanisms.
    A2 vs. A4: BORDERLINE — both address "failure conditions empirically." Checking: A2 targets
      taxonomy/classification; A4 targets specific benchmark protocols and effect sizes. OR
      retrieval would differ sufficiently. PASS with monitoring.
    N1 vs. A1: PASS by design — disconfirming vocabulary separates the angle structurally.
    D1 vs. all: PASS — sycophancy vocabulary is lexically non-overlapping with confirmatory angles.
    C1 vs. all: PASS — control theory vocabulary (cs.SY) does not overlap with cs.CL confirmatory.
  Vocabulary-tradition distinctness: PASS — all 7 angles have distinct tradition labels.
  Result: PASS (A2/A4 borderline noted for human judgment)

Gate 3 — Launchability:
  All angles have ≥1 concrete, pasteable query string: PASS
  No placeholder vocabulary: PASS
  Source type named specifically for all angles: PASS
  Result: PASS

Gate 4 — Scoring prohibition:
  No LLM self-evaluation ranking used: PASS
  No implicit quality assessment phrases: PASS
  Result: PASS

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — traditions LLM-enumerated only; survey-paper probe recommended
  2. A2/A4 borderline overlap — human judgment on merge vs. retain as separate
  3. Angle 7 predicted research character = GAP — absence of literature is a valid finding; set
     saturation threshold low for this angle
```

---

## L2: Self-Correction vs. External Feedback in LLM Code Generation

### INTAKE BRIEF
```
INTAKE BRIEF
============
Topic: Comparative effectiveness of LLM self-correction versus external feedback in code
  generation tasks — which method produces better code and under what conditions.

Anchor vocabulary: "self-correction" (NLP alignment), "external feedback" (software engineering /
  education), "LLM code generation" (NLP/ML)

Candidate vocabulary traditions:
  1. NLP/ML code generation — LLM code generation, self-debugging, self-repair, code synthesis,
     program synthesis, neural code generation
  2. Software engineering — external validation, unit testing, compiler feedback, static analysis,
     test-driven development, execution-based feedback, linting
  3. LLM evaluation — HumanEval, MBPP, pass@k, execution-based evaluation, functional correctness
  4. Education / feedback theory — formative feedback, corrective feedback, feedback loops,
     error correction, scaffolded learning

  NOTE: Vocabulary traditions listed here are LLM self-reported. Vocabulary-discovery pass
  recommended.

Question type: STRUCTURED
  Comparison: self-correction vs. external feedback — which performs better and when?
  Intervention: self-correction mechanism | Comparator: external feedback mechanism
  Outcome: code quality / functional correctness

Scope markers: Code generation tasks specifically; LLM-based systems; published empirical
  comparisons preferred.

Known exclusions: None stated.

Domain maturity estimate: mixed (academic + practitioner)
  Basis: "code generation" spans arXiv research and strong practitioner literature (GitHub
  Copilot, Codex deployment reports, engineering blogs); both traditions active.

Survey paper status: NOT FOUND — Source B unavailable.

Source B status: UNAVAILABLE — MODERATE (Source A+C produced 4 distinct traditions)
```

### COVERAGE MAP
```
COVERAGE MAP
============
Tradition 1: NLP/ML code generation
  Representative terms: self-debugging, self-repair, code synthesis, neural code generation
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: Software engineering / external validation
  Representative terms: unit testing, compiler feedback, static analysis, execution-based feedback
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: LLM evaluation
  Representative terms: HumanEval, MBPP, pass@k, functional correctness, execution evaluation
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Education / feedback theory
  Representative terms: formative feedback, corrective feedback, scaffolded learning, error correction
  Planned angle slot: Cross-disciplinary consideration — partially covered by C1
  Gap flag: Partially — integrated into C1

Traditions NOT yet represented: Tradition 4 partially addressed via cross-disciplinary slot.

Cross-disciplinary slot (required):
  Target tradition: Organizational learning / double-loop learning (Argyris)
  Basis: External feedback and self-correction represent single-loop vs. double-loop learning
  dynamics; Argyris organizational learning theory maps onto this comparison and may contain
  evidence-based predictions not present in NLP literature.
```

### TYPE ALLOCATIONS
```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — NLP/ML code generation): assigned
Slot A2 (Confirmatory — Software engineering / external validation): assigned
Slot A3 (Confirmatory — LLM evaluation / benchmarks): assigned
Slot N1 (Null-hypothesis): assigned
Slot D1 (Adversarial): starting vocabulary — test-driven development / ground truth execution
  NOT FROM: self-debugging, external feedback framing, LLM evaluation, feedback theory
Slot C1 (Cross-disciplinary): Organizational learning / double-loop learning
```

### ANGLE LIST

```
ANGLE 1: Self-debugging and self-repair in LLM code generation — scope conditions
===========
Vocabulary tradition: NLP/ML code generation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Empirical results on when self-debugging improves pass@k; model scale effects;
  task complexity effects; specific code generation benchmarks used.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — Codex, Code Llama, DeepSeek-Coder evaluation repositories

Queries:
  Q1: LLM self-debugging code generation improvement pass@k empirical 2023 2024 2025
  Q2: self-repair code synthesis language model when does self-correction help code
  Q3: iterative code refinement LLM functional correctness improvement scope conditions
  Q4: neural code generation self-improvement loop empirical evaluation benchmark

Coverage-gap note: May not distinguish between self-correction using only the model's prior
  output vs. self-correction with execution traces as intermediate signals.
```

```
ANGLE 2: Compiler and execution feedback superiority over LLM self-assessment
===========
Vocabulary tradition: Software engineering / external validation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Empirical comparisons showing execution-based feedback outperforms LLM
  self-critique; conditions where external signals are necessary; failure patterns when
  external feedback is withheld.

Source type (academic): arXiv cs.SE + cs.CL
Source type (practitioner): GitHub — test-harness based code repair systems; practitioner
  engineering blog posts on AI coding assistant failure modes (REQUIRED — mixed domain)

Queries:
  Q1: execution feedback vs LLM self-correction code generation comparison empirical
  Q2: compiler error signal language model code repair unit test feedback vs self-critique
  Q3: external oracle vs self-assessment code synthesis LLM when external wins
  Q4: static analysis feedback LLM code generation improvement vs autonomous correction

Coverage-gap note: "External feedback" is heterogeneous — compiler errors, unit tests, linters,
  and human review are distinct; this angle bundles them; may need sub-angles by feedback type.
```

```
ANGLE 3: Benchmark evidence — controlled comparisons on HumanEval and MBPP
===========
Vocabulary tradition: LLM evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Controlled benchmark results comparing self-correction and external feedback
  conditions; effect sizes; which model families and benchmark tasks show largest differentials.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — HumanEval, MBPP, LiveCodeBench repositories and leaderboards

Queries:
  Q1: HumanEval MBPP self-correction external feedback comparison LLM code generation 2024 2025
  Q2: pass@k self-refinement vs external oracle code generation benchmark controlled study
  Q3: LLM code generation self-correction ablation external feedback condition comparison

Coverage-gap note: Benchmarks may not reflect real-world code complexity; HumanEval/MBPP
  tasks are short; external feedback advantage may differ at scale.
```

```
ANGLE 4: Neither method reliably outperforms — evidence that conditions dominate method choice
===========
Vocabulary tradition: LLM evaluation (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Evidence that self-correction and external feedback produce equivalent results
  under some conditions; studies showing no significant difference; conditions where task
  characteristics predict outcome better than method choice.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — evaluation frameworks noting no improvement

Queries:
  Q1: LLM self-correction code generation no improvement over baseline external feedback equivalent
  Q2: self-debugging code synthesis null result no significant difference oracle feedback
  Q3: code generation self-repair fails to improve functional correctness conditions limitation
  Q4: LLM code correction method comparison negative result equivalent performance

Coverage-gap note: Negative results are underreported; this angle may find fewer papers than
  confirmatory angles despite the finding being important.
```

```
ANGLE 5: Ground-truth execution as irreplaceable signal — self-correction is insufficient
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Test-driven development / ground-truth execution
  Generating from: test coverage, functional correctness, execution traces, pass/fail signals
  Excluding from generation prompt: self-debugging, self-repair, external feedback framing,
  feedback loops

Angle type: Adversarial
Predicted research character: empirical
What to extract: Evidence that without execution against test cases, neither LLM self-correction
  NOR external textual feedback produces reliable code; cases where both methods fail and only
  ground-truth execution recovers correctness; practitioner reports that LLM coding requires
  mandatory test coverage regardless of correction method.

Source type (academic): arXiv cs.SE + cs.CL
Source type (practitioner): Practitioner reports, engineering blogs on Copilot/Codex deployment
  (REQUIRED — mixed domain)

Queries:
  Q1: code generation LLM test coverage mandatory ground truth execution self-correction insufficient
  Q2: functional correctness LLM code execution trace required self-critique failure without tests
  Q3: LLM code repair both self-correction and feedback fail without execution signal evidence

Coverage-gap note: This framing ("both fail") may not have a direct literature match; may
  require inference from partial results across papers.
```

```
ANGLE 6: Double-loop vs. single-loop learning — organizational feedback theory applied to LLM code correction
===========
Vocabulary tradition: Organizational learning / double-loop learning
Angle type: Cross-disciplinary
Predicted research character: gap
What to extract: Theoretical frameworks distinguishing error correction within existing rules
  (single-loop) from correction that revises the rules themselves (double-loop); any direct
  application to AI systems or automated programming; predictions about when each loop type
  is needed.

Source type (academic): Semantic Scholar (organizational learning + computer science intersection);
  arXiv cs.AI (agent learning, meta-learning)
Source type (practitioner): deprioritized — this is a theoretical cross-disciplinary angle

Queries:
  Q1: double loop learning error correction automated systems code generation organizational theory
  Q2: Argyris single loop double loop applied artificial intelligence correction mechanism
  Q3: meta-learning feedback correction LLM code generation organizational learning theory

Coverage-gap note: High likelihood of gap — Argyris framework is rarely applied in NLP/ML
  literature; absence is itself informative.
```

### GATE SUMMARY
```
GATE SUMMARY — L2
==================
Gate 1 — Completeness:
  Null-hypothesis angle present: PASS (Angle 4 — "no significant difference" framing, uses
    "null result," "no improvement," "equivalent performance")
  Adversarial angle present: PASS (Angle 5 — ADVERSARIAL-FLAGGED + dispatch note)
  Cross-disciplinary angle present: PASS (Angle 6 — organizational learning, not in intake)
  Source-type coverage: PASS (mixed domain — practitioner sources REQUIRED and included)
  Vocabulary-tradition map populated: PASS (3 traditions explicitly + 1 cross-disciplinary)
  Result: PASS

Gate 2 — Distinctness:
  A1 vs. A2: PASS — A1 vocabulary = self-debugging/repair (NLP); A2 vocabulary =
    compiler/execution/unit test (SE); query overlap is low.
  A1 vs. A3: BORDERLINE — both address LLM code generation empirically. Check: A1 targets
    mechanism (self-debugging); A3 targets benchmark comparison protocol. Distinct enough. PASS.
  A2 vs. A3: PASS — A2 = SE external signals; A3 = evaluation benchmark protocol. Different
    query vocabulary.
  N1 vs. confirmatory: PASS — disconfirming vocabulary separates clearly.
  D1 vs. all: PASS — execution/test-coverage vocabulary does not appear in A1-A3.
  C1 vs. all: PASS — organizational learning vocabulary is lexically non-overlapping.
  Vocabulary-tradition distinctness: PASS — all 6 angles have distinct labels.
  Result: PASS

Gate 3 — Launchability: PASS (all angles have concrete queries, no placeholders, sources named)
Gate 4 — Scoring prohibition: PASS

Overall verdict: PASS — dispatch ready

Flags:
  1. VOCABULARY SELF-REPORT FLAG
  2. Angle 2 coverage-gap: "external feedback" bundles heterogeneous signals; human judgment
     on whether to split
  3. Angle 6 predicted GAP — low saturation threshold appropriate
```

---

## L3: Self-Correction in Multi-Step Chain-of-Thought Reasoning

### INTAKE BRIEF
```
INTAKE BRIEF
============
Topic: How self-correction mechanisms operate (or fail) within multi-step chain-of-thought
  reasoning in LLMs — the interaction between iterative revision and stepwise reasoning.

Anchor vocabulary: "self-correction" (NLP alignment), "multi-step" (cognitive science / ML),
  "chain-of-thought reasoning" (NLP prompting)

Candidate vocabulary traditions:
  1. NLP prompting / reasoning — chain-of-thought (CoT), scratchpad reasoning, step-by-step,
     process reward models, tree-of-thought, least-to-most prompting
  2. Cognitive science / psychology — working memory, self-monitoring, error detection,
     metacognitive control, stepwise verification
  3. Formal reasoning / logic — proof checking, theorem proving, backward chaining, stepwise
     verification, logical consistency checking
  4. LLM evaluation — reasoning benchmarks (GSM8K, MATH, ARC), error accumulation in chains,
     step-level evaluation

  NOTE: Vocabulary traditions listed here are LLM self-reported.

Question type: EXPLORATORY
  (asking about mechanisms and behavior in multi-step CoT — not a direct A vs. B comparison)

Scope markers: Multi-step reasoning specifically; chain-of-thought format; self-correction
  during or after the reasoning chain.

Known exclusions: None stated.

Domain maturity estimate: academic-heavy
  Basis: active arXiv research area; CoT has significant published literature since Wei et al.
  2022; practitioner usage but primarily academic framing.

Survey paper status: NOT FOUND — Source B unavailable.

Source B status: UNAVAILABLE — MODERATE (Source A+C produced 4 distinct traditions)
```

### COVERAGE MAP
```
COVERAGE MAP
============
Tradition 1: NLP prompting / reasoning
  Representative terms: CoT, scratchpad, step-by-step, process reward model, tree-of-thought
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: Cognitive science / self-monitoring
  Representative terms: working memory, self-monitoring, metacognitive control, error detection
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: Formal reasoning / logic
  Representative terms: proof checking, theorem proving, logical consistency, stepwise verification
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: LLM evaluation / reasoning benchmarks
  Representative terms: GSM8K, MATH, ARC, error accumulation, step-level evaluation
  Planned angle slot: Confirmatory A4
  Gap flag: No

Traditions NOT yet represented: None.

Cross-disciplinary slot (required):
  Target tradition: Proof theory / formal verification (mechanized proof checking — Coq, Lean)
  Basis: Formal verification has developed methods for stepwise proof checking and error
  localization that are structurally analogous to self-correction in multi-step CoT; this
  literature is absent from NLP alignment traditions.
```

### TYPE ALLOCATIONS
```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — NLP prompting / reasoning): assigned
Slot A2 (Confirmatory — Cognitive science / self-monitoring): assigned
Slot A3 (Confirmatory — Formal reasoning / logic): assigned
Slot N1 (Null-hypothesis): assigned
Slot D1 (Adversarial): starting vocabulary — error accumulation / compounding mistakes
  NOT FROM: CoT prompting, self-monitoring, proof checking, benchmark evaluation
Slot C1 (Cross-disciplinary): Formal verification / mechanized proof checking
```

### ANGLE LIST

```
ANGLE 1: Self-correction in chain-of-thought — when revision improves multi-step reasoning
===========
Vocabulary tradition: NLP prompting / reasoning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence that self-correction improves final answer accuracy in CoT reasoning;
  mechanisms (process reward models, verifier feedback, self-consistency sampling); conditions
  under which improvement is observed.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — CoT evaluation frameworks, process reward model implementations

Queries:
  Q1: self-correction chain-of-thought reasoning improvement LLM multi-step 2023 2024 2025
  Q2: process reward model step verification self-correction reasoning accuracy improvement
  Q3: tree-of-thought self-refinement multi-step reasoning LLM accuracy correction
  Q4: LLM reasoning chain self-revision iterative improvement step-level accuracy

Coverage-gap note: Does not address whether improvement comes from error detection vs.
  paraphrasing without actual correction.
```

```
ANGLE 2: Metacognitive monitoring failure in multi-step reasoning
===========
Vocabulary tradition: Cognitive science / self-monitoring
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence about LLM capacity for step-level error detection; comparison with
  human metacognitive monitoring in multi-step tasks; failure modes in self-monitoring during
  extended reasoning chains.

Source type (academic): arXiv cs.CL + cs.LG; PubMed (metacognitive monitoring in multi-step
  human reasoning — cross-reference)
Source type (practitioner): GitHub — step-level reasoning evaluators

Queries:
  Q1: LLM step-level error detection metacognitive monitoring chain-of-thought reasoning
  Q2: language model self-monitoring multi-step reasoning failure overconfidence intermediate steps
  Q3: metacognitive control LLM chain-of-thought intermediate step error detection capacity
  Q4: human vs LLM metacognitive monitoring multi-step reasoning comparison

Coverage-gap note: Human cognitive science literature on multi-step self-monitoring is well
  developed but may require translation to LLM-relevant vocabulary to retrieve.
```

```
ANGLE 3: Logical consistency checking within reasoning chains
===========
Vocabulary tradition: Formal reasoning / logic
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for checking logical consistency across reasoning steps; evidence
  on whether LLMs can detect logical contradictions in their own chains; verification
  approaches and their effectiveness.

Source type (academic): arXiv cs.CL + cs.LO (Logic in Computer Science) + cs.AI
Source type (practitioner): GitHub — theorem-proving assisted LLM frameworks

Queries:
  Q1: logical consistency verification chain-of-thought LLM multi-step reasoning self-checking
  Q2: LLM logical contradiction detection own reasoning chain verification empirical
  Q3: formal reasoning verification language model step consistency checking approach
  Q4: backward chaining verification LLM reasoning chain error localization

Coverage-gap note: Formal logic literature uses different vocabulary from NLP; cross-vocabulary
  search may be needed.
```

```
ANGLE 4: Benchmark evidence — step-level error rates and correction effectiveness (GSM8K, MATH)
===========
Vocabulary tradition: LLM evaluation / reasoning benchmarks
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Step-level error rates in multi-step reasoning; how self-correction affects
  final-answer accuracy on GSM8K and MATH; which error types are correctable vs. not.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — GSM8K, MATH benchmark implementations and leaderboards

Queries:
  Q1: GSM8K MATH step-level error rate self-correction multi-step reasoning LLM evaluation
  Q2: process reward model step verification GSM8K MATH accuracy improvement 2024 2025
  Q3: reasoning benchmark step error accumulation self-correction effectiveness LLM evaluation

Coverage-gap note: GSM8K/MATH are arithmetic-heavy; findings may not generalize to
  other multi-step reasoning types (logical, causal, spatial).
```

```
ANGLE 5: Self-correction in multi-step CoT does not improve and may introduce hallucinated corrections
===========
Vocabulary tradition: NLP prompting / reasoning (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Evidence that self-correction fails to improve CoT reasoning accuracy; cases
  where LLMs "correct" correct steps incorrectly; hallucinated revisions that introduce errors;
  negative results from self-correction in reasoning chains.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — reasoning evaluation showing no-improvement conditions

Queries:
  Q1: self-correction chain-of-thought does not improve negative result failure LLM reasoning
  Q2: LLM self-revision introduces errors multi-step reasoning hallucinated correction
  Q3: CoT self-correction harmful overcorrection reasoning steps negative evidence
  Q4: self-correction chain-of-thought null result no improvement reasoning benchmark

Coverage-gap note: Negative results are systematically underreported; may need targeted
  search for "failure" and "limitation" vocabulary to recover them.
```

```
ANGLE 6: Error compounding — self-correction amplifies early mistakes in long reasoning chains
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Error accumulation / compounding mistakes
  Generating from: error propagation, cascading failure, error accumulation, compounding errors
  Excluding from generation prompt: CoT prompting, self-monitoring, logical consistency,
  benchmark evaluation vocabulary

Angle type: Adversarial
Predicted research character: empirical
What to extract: Evidence that self-correction in multi-step chains amplifies early errors
  rather than correcting them; error cascading mechanisms; whether correction at later steps
  is structurally unable to recover early mistakes; length of reasoning chain as a failure predictor.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — long-chain reasoning failure analysis

Queries:
  Q1: error propagation cascading failure chain-of-thought LLM multi-step long reasoning
  Q2: early error amplification self-correction multi-step reasoning LLM compounding
  Q3: reasoning chain length error accumulation self-correction failure LLM empirical

Coverage-gap note: "Cascading failure" vocabulary may appear in systems papers, not NLP
  papers — arXiv cs.SY may supplement.
```

```
ANGLE 7: Mechanized proof checking as model for step-level self-correction in LLMs
===========
Vocabulary tradition: Formal verification / mechanized proof checking
Angle type: Cross-disciplinary
Predicted research character: gap
What to extract: Structural frameworks from Lean/Coq proof checking that could inform
  step-level LLM self-correction; any direct application of proof-checking methods to LLM
  reasoning chains; differences in error localization approaches.

Source type (academic): arXiv cs.LO + cs.AI; Semantic Scholar (formal verification + LLM intersection)
Source type (practitioner): GitHub — LLM + formal proof assistants (e.g., Lean-LLM interfaces)

Queries:
  Q1: formal verification proof checking applied LLM chain-of-thought step error localization
  Q2: Lean Coq proof assistant language model reasoning step verification interface
  Q3: mechanized proof checking LLM multi-step reasoning self-correction analogies methods

Coverage-gap note: Direct application literature is sparse; the value of this angle is
  establishing what formal verification offers that LLM self-correction lacks.
```

### GATE SUMMARY
```
GATE SUMMARY — L3
==================
Gate 1 — Completeness: PASS (all required angle types present)
Gate 2 — Distinctness:
  A1 (CoT prompting) vs. A4 (benchmarks): BORDERLINE — both address CoT reasoning empirically.
    Check: A1 targets mechanisms of improvement; A4 targets step-level error rates and
    correction effectiveness on specific benchmarks. Query vocabulary differs (Q1 of A1 uses
    "improvement mechanism"; Q1 of A4 uses "step-level error rate"). PASS with note.
  All other pairs: PASS — vocabulary tradition labels are distinct.
  N1 vs. A1: PASS — "does not improve" framing vs. "when does it improve" are lexically distinct.
  D1 vs. all: PASS — "error compounding/cascading" vocabulary not used in A1-A4.
  C1 vs. all: PASS — Lean/Coq vocabulary non-overlapping.
  Result: PASS (A1/A4 borderline noted)

Gate 3 — Launchability: PASS
Gate 4 — Scoring prohibition: PASS

Overall verdict: PASS — dispatch ready

Flags:
  1. VOCABULARY SELF-REPORT FLAG
  2. A1/A4 borderline — human judgment on merge vs. retain
  3. Angles 5, 6, 7 likely to have lower yield — saturation thresholds should be set low
```

---

## L4: Reflection Prompting as a Self-Correction Mechanism

### INTAKE BRIEF
```
INTAKE BRIEF
============
Topic: Reflection prompting as a self-correction mechanism in LLMs — how it works, what it
  produces, and its effectiveness relative to other self-correction approaches.

Anchor vocabulary: "reflection prompting" (NLP prompting), "self-correction" (NLP alignment),
  "mechanism" (systems framing)

Candidate vocabulary traditions:
  1. NLP prompting techniques — reflection prompting, Reflexion framework, self-reflection,
     metacognitive prompting, self-critique, self-evaluation prompting
  2. ML alignment / self-improvement — self-improvement, self-play, constitutional AI,
     critique-and-revise, iterative preference optimization
  3. Cognitive science / education — reflective practice, self-regulated learning, metacognitive
     strategies, reflective learning, Schon reflective practitioner
  4. AI agent systems — Reflexion (Shinn et al.), agent memory, long-horizon task correction,
     tool-use agents with self-monitoring

  NOTE: Vocabulary traditions listed here are LLM self-reported.

Question type: EXPLORATORY
  (asking how this mechanism works and what it produces — not a direct method comparison)

Scope markers: Reflection prompting specifically as a mechanism category; mechanism-level
  analysis preferred over benchmark performance alone.

Known exclusions: None stated.

Domain maturity estimate: mixed
  Basis: Reflexion paper (Shinn et al. 2023) is a specific artifact — academic origin with
  practitioner adoption; both traditions are active.

Survey paper status: NOT FOUND — Source B unavailable.

Source B status: UNAVAILABLE — MODERATE (Source A+C produced 4 distinct traditions)
```

### COVERAGE MAP
```
COVERAGE MAP
============
Tradition 1: NLP prompting techniques
  Representative terms: reflection prompting, Reflexion, self-reflection, metacognitive prompting
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: ML alignment / self-improvement
  Representative terms: self-improvement, self-play, constitutional AI, critique-and-revise
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: Cognitive science / reflective practice
  Representative terms: reflective practice, self-regulated learning, metacognitive strategies
  Planned angle slot: Confirmatory A3 (and informs C1)
  Gap flag: No

Tradition 4: AI agent systems
  Representative terms: Reflexion, agent memory, long-horizon correction, self-monitoring agents
  Planned angle slot: Confirmatory A4
  Gap flag: No

Traditions NOT yet represented: None.

Cross-disciplinary slot (required):
  Target tradition: Experiential learning theory (Kolb learning cycle) / adult education
  Basis: Kolb's experiential learning cycle (experience → reflection → conceptualization →
  experimentation) is structurally analogous to reflection-prompted LLM correction loops;
  adult education research has decades of evidence on reflection's effectiveness and failure
  conditions that the NLP literature has not drawn on.
```

### TYPE ALLOCATIONS
```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — NLP prompting techniques): assigned
Slot A2 (Confirmatory — ML alignment / self-improvement): assigned
Slot A3 (Confirmatory — AI agent systems / Reflexion): assigned
Slot N1 (Null-hypothesis): assigned
Slot D1 (Adversarial): starting vocabulary — overconfidence / Dunning-Kruger dynamics
  NOT FROM: reflection prompting, self-improvement, reflective practice, agent systems
Slot C1 (Cross-disciplinary): Experiential learning theory / Kolb learning cycle
```

### ANGLE LIST

```
ANGLE 1: Reflection prompting mechanics — how LLMs use reflection to self-correct
===========
Vocabulary tradition: NLP prompting techniques
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Mechanism description (what the prompting structure causes LLMs to do);
  comparison of reflection prompt formulations; conditions under which reflection prompting
  produces genuine revision vs. superficial paraphrase.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — Reflexion implementation repositories; LLM prompting
  libraries with reflection modules

Queries:
  Q1: reflection prompting self-correction mechanism LLM how it works empirical 2023 2024 2025
  Q2: metacognitive prompting LLM self-reflection mechanism genuine revision vs paraphrase
  Q3: self-critique prompt structure LLM correction quality mechanism analysis
  Q4: reflection prompt formulation comparison self-correction quality language model

Coverage-gap note: "Genuine revision vs. superficial paraphrase" distinction is important but
  may not be explicitly tested in existing literature.
```

```
ANGLE 2: Reflection prompting within iterative preference optimization and critique-revise
===========
Vocabulary tradition: ML alignment / self-improvement
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How reflection-style prompting fits within iterative self-improvement pipelines;
  relationship to constitutional AI critique-revise; RLHF-adjacent self-improvement applications.

Source type (academic): arXiv cs.CL + cs.LG + cs.AI
Source type (practitioner): Anthropic / OpenAI technical reports on constitutional AI and
  self-critique mechanisms

Queries:
  Q1: reflection prompting iterative self-improvement LLM alignment critique revise mechanism
  Q2: constitutional AI self-critique self-revision LLM reflection mechanism comparison
  Q3: LLM self-improvement loop reflection-based preference optimization iterative 2024 2025

Coverage-gap note: Boundary between "reflection prompting" and "critique-revise" is fuzzy;
  may need explicit disambiguation in query results.
```

```
ANGLE 3: Reflexion framework — agent-level reflection for long-horizon task correction
===========
Vocabulary tradition: AI agent systems
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Reflexion (Shinn et al. 2023) mechanism; agent memory integration; how
  reflection-based correction is applied across multi-step agentic tasks; replication and
  extension studies.

Source type (academic): arXiv cs.CL + cs.AI + cs.LG
Source type (practitioner): GitHub — Reflexion repository (stars/forks/issue discussions);
  agent framework implementations using reflection

Queries:
  Q1: Reflexion Shinn 2023 LLM agent reflection self-correction mechanism long-horizon tasks
  Q2: LLM agent reflection verbal reinforcement self-correction memory mechanism empirical
  Q3: Reflexion framework replication extension agent self-improvement reflection 2024 2025
  Q4: agentic self-correction reflection memory loop long-horizon task performance

Coverage-gap note: Reflexion is a specific paper; this angle risks being too narrow; include
  broader "agent reflection" vocabulary to capture extensions.
```

```
ANGLE 4: Reflection prompting does not produce genuine self-correction — superficial compliance evidence
===========
Vocabulary tradition: NLP prompting techniques (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Evidence that reflection prompting produces surface-level changes without
  genuine error correction; cases where reflection outputs match the original answer;
  experiments showing reflection fails to improve accuracy; negative results.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — evaluation frameworks documenting reflection failure modes

Queries:
  Q1: reflection prompting fails self-correction superficial LLM no genuine improvement evidence
  Q2: LLM self-reflection does not correct errors surface paraphrase negative result
  Q3: reflection prompting limitation failure accuracy no improvement language model
  Q4: self-critique reflection LLM output unchanged answer same no correction empirical

Coverage-gap note: Negative results are underreported; may also appear as subsidiary findings
  in papers that primarily report positive results.
```

```
ANGLE 5: Reflection as post-hoc rationalization — LLMs that reflect without revising
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Overconfidence / post-hoc rationalization dynamics
  Generating from: overconfidence, post-hoc rationalization, motivated reasoning, confirmation
  of prior, Dunning-Kruger, illusory self-improvement
  Excluding from generation prompt: reflection prompting, self-improvement, reflective practice,
  Reflexion agent framework

Angle type: Adversarial
Predicted research character: empirical
What to extract: Evidence that LLM reflection produces outputs that look like self-correction
  but retain the original answer with added justification; cases where reflection increases
  confidence in wrong answers; overconfidence amplification through reflection; "I've now
  considered this and I was right" failure mode.

Source type (academic): arXiv cs.CL + cs.LG; psychology literature on motivated reasoning
Source type (practitioner): Anthropic / AI safety community blog posts on sycophancy and
  overconfidence in self-evaluation

Queries:
  Q1: LLM reflection overconfidence rationalization wrong answer justification post-hoc
  Q2: self-reflection LLM increases confidence wrong answer Dunning-Kruger motivated reasoning
  Q3: LLM self-critique confirms prior answer overconfidence reflection failure mode empirical

Coverage-gap note: Psychology vocabulary (post-hoc rationalization, motivated reasoning) may
  not appear in NLP papers; requires cross-tradition search.
```

```
ANGLE 6: Experiential learning cycle applied to LLM reflection — Kolb framework
===========
Vocabulary tradition: Experiential learning theory / adult education
Angle type: Cross-disciplinary
Predicted research character: gap
What to extract: Kolb learning cycle structure (experience → reflection → abstraction →
  experimentation) as a framework for analyzing LLM reflection loops; adult education evidence
  on conditions for effective reflection; structural similarities and disanalogies with LLM
  reflection prompting.

Source type (academic): Semantic Scholar (education + AI intersection); PubMed (reflective
  practice in professional learning)
Source type (practitioner): deprioritized — theoretical cross-disciplinary angle

Queries:
  Q1: Kolb experiential learning cycle applied artificial intelligence LLM reflection analogy
  Q2: reflective practice adult education conditions effective self-correction analogous AI
  Q3: self-regulated learning metacognitive strategies LLM reflection prompting parallel
  Q4: experiential learning theory language model iterative correction mechanism comparison

Coverage-gap note: Direct application of Kolb to LLMs is almost certainly a gap; the value
  is the structural framework import, not literature finding.
```

### GATE SUMMARY
```
GATE SUMMARY — L4
==================
Gate 1 — Completeness: PASS (all required angle types present)
Gate 2 — Distinctness:
  A1 vs. A3: BORDERLINE — both in NLP prompting territory. Check: A1 = reflection prompting
    mechanics generally; A3 = Reflexion paper + agent-specific applications. Query strings
    differ (A1: mechanism analysis; A3: Shinn 2023 + agent memory). PASS.
  A2 vs. A3: PASS — A2 = alignment/self-improvement pipeline; A3 = agent task correction.
    Different query vocabularies.
  N1 vs. A1: PASS — "fails," "superficial," "no genuine improvement" separate clearly.
  D1 vs. all: PASS — rationalization/overconfidence vocabulary non-overlapping.
  C1 vs. all: PASS — Kolb/experiential learning vocabulary is distinct.
  Result: PASS

Gate 3 — Launchability: PASS
Gate 4 — Scoring prohibition: PASS

Overall verdict: PASS — dispatch ready

Flags:
  1. VOCABULARY SELF-REPORT FLAG
  2. A1/A3 borderline — human judgment; consider merging if scope allows
  3. Angle 6 high likelihood of gap — saturation threshold low; document absence
```

---

## L5: Self-Correction Without Ground Truth Feedback Available

### INTAKE BRIEF
```
INTAKE BRIEF
============
Topic: How LLMs can self-correct without access to external validation signals or ground truth —
  mechanisms that enable correction when no oracle feedback is available.

Anchor vocabulary: "self-correction" (NLP alignment), "ground truth feedback" (ML evaluation),
  "external validation" (ML evaluation / epistemology)

Candidate vocabulary traditions:
  1. NLP/ML self-supervised reasoning — self-consistency, self-verification, semantic consistency
     checks, ensemble agreement, majority voting, self-evaluation
  2. ML calibration / uncertainty estimation — confidence calibration, uncertainty quantification,
     epistemic uncertainty, temperature scaling, reliability diagrams
  3. Epistemology / coherentism — justified belief without external ground, coherentist truth,
     internal consistency as validation, Bayesian coherence
  4. AI agent systems / autonomous error detection — self-monitoring agents, autonomous quality
     assessment, intrinsic motivation, internal reward signals

  NOTE: Vocabulary traditions listed here are LLM self-reported.

Question type: EXPLORATORY
  (asking how this is possible — mechanisms, approaches, limitations)

Scope markers: Absence of external validation is the defining constraint; any mechanism that
  works under this constraint is in scope.

Known exclusions: Methods that require external feedback, oracles, or ground truth labels.

Domain maturity estimate: academic-heavy
  Basis: active arXiv research area (self-consistency, self-evaluation papers); theoretical
  framing suggested by "ground truth" vocabulary.

Survey paper status: NOT FOUND — Source B unavailable.

Source B status: UNAVAILABLE — MODERATE (Source A+C produced 4 distinct traditions)
```

### COVERAGE MAP
```
COVERAGE MAP
============
Tradition 1: NLP/ML self-supervised reasoning
  Representative terms: self-consistency, self-verification, ensemble agreement, majority voting
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: ML calibration / uncertainty estimation
  Representative terms: confidence calibration, uncertainty quantification, epistemic uncertainty
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: AI agent / autonomous error detection
  Representative terms: self-monitoring, autonomous quality assessment, intrinsic reward
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Epistemology / coherentism
  Representative terms: coherentist truth, internal consistency, justified belief
  Planned angle slot: Integrated into C1
  Gap flag: Partially addressed

Traditions NOT yet represented: Tradition 4 addressed via cross-disciplinary slot.

Cross-disciplinary slot (required):
  Target tradition: Epistemology / coherentism — internal consistency as truth criterion
  Basis: Coherentism in epistemology provides a philosophical framework for validation without
  external ground truth that is structurally relevant; it has been applied to AI knowledge
  representation but rarely to LLM self-correction specifically.
```

### TYPE ALLOCATIONS
```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — NLP/ML self-supervised reasoning): assigned
Slot A2 (Confirmatory — ML calibration / uncertainty): assigned
Slot A3 (Confirmatory — AI agent / autonomous monitoring): assigned
Slot N1 (Null-hypothesis): assigned
Slot D1 (Adversarial): starting vocabulary — circular reasoning / self-deception
  NOT FROM: self-consistency, calibration, autonomous monitoring, epistemology
Slot C1 (Cross-disciplinary): Epistemology / coherentism
```

### ANGLE LIST

```
ANGLE 1: Self-consistency as a ground-truth-free correction mechanism
===========
Vocabulary tradition: NLP/ML self-supervised reasoning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Self-consistency sampling (Wang et al. 2022) and related methods; how
  ensemble agreement substitutes for external oracle; effectiveness conditions; limitations
  of consistency-based correction without external signals.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — self-consistency implementations in reasoning pipelines

Queries:
  Q1: self-consistency LLM reasoning without ground truth correction mechanism 2023 2024 2025
  Q2: ensemble agreement majority voting LLM self-correction no external feedback mechanism
  Q3: LLM self-verification internal consistency check no oracle correction approach
  Q4: Wang self-consistency sampling chain-of-thought ground-truth-free reasoning 2022 2024

Coverage-gap note: Self-consistency is well-studied; this angle may saturate quickly —
  the less-studied question is failure conditions.
```

```
ANGLE 2: Uncertainty estimation as a proxy for error detection without external labels
===========
Vocabulary tradition: ML calibration / uncertainty estimation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How LLMs use uncertainty signals (token probabilities, verbalized confidence)
  to trigger self-correction without external labels; calibration quality as a prerequisite;
  conformal prediction applications; when uncertainty is a reliable correction signal.

Source type (academic): arXiv cs.CL + cs.LG + stat.ML
Source type (practitioner): GitHub — LLM calibration and uncertainty tools

Queries:
  Q1: LLM uncertainty estimation self-correction trigger without ground truth labels 2024 2025
  Q2: verbalized confidence calibration LLM self-correction internal signal no external feedback
  Q3: conformal prediction LLM self-correction uncertainty threshold trigger mechanism
  Q4: token probability uncertainty proxy error detection LLM no external validation

Coverage-gap note: Calibration research often assumes some labeled data for calibration;
  truly zero-label approaches are a subset.
```

```
ANGLE 3: Autonomous agent self-monitoring without external reward
===========
Vocabulary tradition: AI agent / autonomous error detection
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Agent architectures that implement self-monitoring without external reward
  or human feedback; intrinsic motivation mechanisms applied to self-correction; autonomous
  quality assessment approaches in deployed agents.

Source type (academic): arXiv cs.AI + cs.CL + cs.LG
Source type (practitioner): GitHub — autonomous agent frameworks with self-monitoring components

Queries:
  Q1: LLM agent self-monitoring autonomous error correction without external reward feedback
  Q2: intrinsic motivation self-evaluation LLM agent correction no human feedback mechanism
  Q3: autonomous quality assessment LLM agent self-correction deployed system no oracle 2024 2025

Coverage-gap note: "Intrinsic motivation" vocabulary is from RL literature and may not map
  cleanly to LLM agent papers.
```

```
ANGLE 4: Self-correction without ground truth is structurally impossible or unreliable
===========
Vocabulary tradition: NLP/ML self-supervised reasoning (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Evidence that ground-truth-free self-correction does not reliably improve
  accuracy; cases where self-consistency amplifies shared errors; when majority voting fails;
  theoretical arguments that self-correction without external signal is circular.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — evaluation showing self-consistency failure modes

Queries:
  Q1: LLM self-correction without ground truth fails unreliable limitation evidence
  Q2: self-consistency fails majority vote wrong shared error amplification LLM
  Q3: ground-truth-free self-correction circular reasoning no improvement negative evidence
  Q4: LLM self-evaluation without external feedback limitation unreliable correction evidence

Coverage-gap note: The theoretical argument (circularity) may be more developed in philosophy/
  epistemology than in NLP literature.
```

```
ANGLE 5: Self-correction without ground truth is self-deception — the circularity problem
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Circular reasoning / self-deception
  Generating from: circular reasoning, self-deception, bootstrapping fallacy, ungrounded
  correction, epistemic closure, self-referential error
  Excluding from generation prompt: self-consistency, uncertainty calibration, autonomous
  monitoring, coherentism

Angle type: Adversarial
Predicted research character: empirical
What to extract: Arguments and evidence that any self-correction mechanism without external
  signal is fundamentally circular — the same model that made the error is asked to correct it;
  mathematical or theoretical bounds on self-correction capacity without external information;
  cases where self-correction confidence increases while accuracy decreases.

Source type (academic): arXiv cs.CL + cs.LG; philosophy of science (circularity arguments)
Source type (practitioner): AI safety community papers and blog posts on LLM self-evaluation limits

Queries:
  Q1: LLM self-correction circular reasoning fundamental limitation no external information bounds
  Q2: language model self-evaluation self-deception confidence accuracy divergence evidence
  Q3: theoretical bounds self-correction without oracle feedback LLM circular argument evidence
  Q4: LLM self-improvement without external signal mathematical impossibility limitation

Coverage-gap note: Formal theoretical bounds may not exist yet; this may be a gap angle.
```

```
ANGLE 6: Coherentism as a validation framework — internal consistency without external ground
===========
Vocabulary tradition: Epistemology / coherentism
Angle type: Cross-disciplinary
Predicted research character: gap
What to extract: Coherentist epistemology's account of justified belief without external
  correspondence; how coherence conditions have been applied to AI knowledge representation;
  structural parallels and disanalogies with LLM internal consistency checks; conditions
  under which coherentism predicts reliable self-correction.

Source type (academic): Semantic Scholar (epistemology + AI intersection); arXiv cs.AI
Source type (practitioner): deprioritized — theoretical angle

Queries:
  Q1: coherentism epistemology applied artificial intelligence self-correction internal consistency
  Q2: coherentist truth justified belief AI knowledge representation language model
  Q3: internal consistency validation without external ground truth epistemological framework AI
  Q4: coherence theory knowledge validation LLM self-correction analogous approach

Coverage-gap note: Direct application to LLMs is almost certainly a gap; the value is
  importing the philosophical framework.
```

### GATE SUMMARY
```
GATE SUMMARY — L5
==================
Gate 1 — Completeness: PASS (all required angle types present)
Gate 2 — Distinctness:
  A1 (self-consistency) vs. A2 (uncertainty calibration): PASS — different mechanisms
    (sampling agreement vs. probability-based confidence). Query vocabulary distinct.
  A1 vs. A3 (agent monitoring): PASS — A1 = reasoning consistency; A3 = agent architecture.
  N1 vs. A1: PASS — "fails," "circular," "unreliable" vocabulary separates clearly.
  D1 vs. all: PASS — circularity/self-deception vocabulary not used in A1-A3.
  C1 vs. all: PASS — epistemology vocabulary distinct.
  Result: PASS

Gate 3 — Launchability: PASS
Gate 4 — Scoring prohibition: PASS

Overall verdict: PASS — dispatch ready

Flags:
  1. VOCABULARY SELF-REPORT FLAG
  2. Angle 1 likely saturates quickly — monitor saturation; focus on failure conditions
  3. Angles 5 and 6 predicted as gap angles — low saturation thresholds
  4. Angle 3 "intrinsic motivation" vocabulary translation may reduce recall
```

---

## L6: Self-Correction in Retrieval-Augmented Generation Pipelines

### INTAKE BRIEF
```
INTAKE BRIEF
============
Topic: Self-correction mechanisms within retrieval-augmented generation (RAG) pipelines —
  how correction operates when retrieval is part of the generation process.

Anchor vocabulary: "self-correction" (NLP alignment), "retrieval-augmented generation" (NLP/IR),
  "pipelines" (systems engineering)

Candidate vocabulary traditions:
  1. Information retrieval / query reformulation — query reformulation, relevance feedback,
     re-ranking, iterative retrieval, query expansion in IR
  2. NLP/RAG systems — CRAG (corrective RAG), Self-RAG, iterative retrieval, corrective
     retrieval, RAG evaluation, hallucination reduction via retrieval
  3. Knowledge management / fact-checking — grounding, hallucination detection, factual
     verification, knowledge grounding, attribution
  4. Systems engineering / pipeline design — pipeline error handling, feedback loops,
     error propagation in multi-stage systems, fault tolerance

  NOTE: Vocabulary traditions listed here are LLM self-reported.

Question type: EXPLORATORY
  (asking what self-correction looks like in the RAG context — mechanisms, effectiveness,
  failure modes)

Scope markers: RAG pipeline specifically; the retrieval component must be part of the system.

Known exclusions: Pure LLM self-correction without retrieval components.

Domain maturity estimate: mixed
  Basis: RAG is a rapidly growing research area with both academic papers and practitioner
  deployment; retrieval engineering has strong practitioner tradition.

Survey paper status: NOT FOUND — Source B unavailable.

Source B status: UNAVAILABLE — MODERATE (Source A+C produced 4 distinct traditions)
```

### COVERAGE MAP
```
COVERAGE MAP
============
Tradition 1: Information retrieval / query reformulation
  Representative terms: query reformulation, relevance feedback, re-ranking, iterative retrieval
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: NLP/RAG systems
  Representative terms: CRAG, Self-RAG, iterative retrieval, corrective retrieval
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: Knowledge management / fact-checking
  Representative terms: grounding, hallucination detection, factual verification, attribution
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Systems engineering / pipeline design
  Representative terms: pipeline error handling, feedback loops, fault tolerance
  Planned angle slot: Confirmatory A4
  Gap flag: No

Traditions NOT yet represented: None.

Cross-disciplinary slot (required):
  Target tradition: Classical information science / relevance feedback theory (Rocchio, Salton)
  Basis: Pre-neural relevance feedback literature (Rocchio 1971, pseudo-relevance feedback)
  developed principled methods for iterative query improvement that are structurally analogous
  to RAG self-correction but are not cited in modern RAG papers; they may contain failure
  condition analysis absent from LLM literature.
```

### TYPE ALLOCATIONS
```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — IR / query reformulation): assigned
Slot A2 (Confirmatory — NLP/RAG systems): assigned
Slot A3 (Confirmatory — Knowledge management / fact-checking): assigned
Slot N1 (Null-hypothesis): assigned
Slot D1 (Adversarial): starting vocabulary — retrieval noise / garbage-in-garbage-out
  NOT FROM: query reformulation, RAG systems, fact-checking, pipeline design
Slot C1 (Cross-disciplinary): Classical information science / relevance feedback theory
```

### ANGLE LIST

```
ANGLE 1: Iterative query reformulation as self-correction in RAG
===========
Vocabulary tradition: Information retrieval / query reformulation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Mechanisms for query reformulation that improve retrieval quality; conditions
  under which reformulation succeeds; interaction between query correction and document
  re-ranking; how LLM-based query reformulation compares to classical methods.

Source type (academic): arXiv cs.IR + cs.CL + cs.LG
Source type (practitioner): GitHub — RAG pipeline implementations with query reformulation
  modules (REQUIRED — mixed domain)

Queries:
  Q1: RAG iterative query reformulation self-correction retrieval quality improvement 2023 2024 2025
  Q2: LLM query reformulation retrieval augmented generation self-correction loop mechanism
  Q3: query expansion re-ranking iterative retrieval self-correction RAG pipeline empirical
  Q4: retrieval augmented generation query correction iterative improvement mechanism language model

Coverage-gap note: Boundary between "query reformulation" and "query expansion" is fuzzy;
  both should be in scope.
```

```
ANGLE 2: CRAG and Self-RAG — architectural self-correction mechanisms in RAG
===========
Vocabulary tradition: NLP/RAG systems
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Corrective RAG (CRAG) and Self-RAG architectures; how self-correction is
  implemented at the architecture level; evaluation results; conditions where architectural
  correction outperforms baseline RAG; extension and comparison studies.

Source type (academic): arXiv cs.CL + cs.IR + cs.LG
Source type (practitioner): GitHub — CRAG and Self-RAG repositories; RAG evaluation frameworks
  (RAGAS, TruLens) (REQUIRED — mixed domain)

Queries:
  Q1: CRAG corrective retrieval augmented generation self-correction mechanism 2024 2025
  Q2: Self-RAG self-reflective retrieval augmented generation mechanism evaluation empirical
  Q3: RAG architecture self-correction retrieval quality correction mechanism comparison study
  Q4: corrective RAG pipeline self-evaluation adaptive retrieval mechanism LLM

Coverage-gap note: CRAG and Self-RAG are specific papers; include broader RAG correction
  vocabulary to catch extension work.
```

```
ANGLE 3: Hallucination detection and grounding correction in RAG output
===========
Vocabulary tradition: Knowledge management / fact-checking
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How RAG systems self-correct for factual grounding; methods for detecting
  when generated content diverges from retrieved documents; attribution-based correction;
  hallucination detection as a correction trigger.

Source type (academic): arXiv cs.CL + cs.AI + cs.IR
Source type (practitioner): GitHub — hallucination detection tools in RAG (REQUIRED — mixed)

Queries:
  Q1: RAG hallucination detection self-correction grounding factual accuracy mechanism 2024 2025
  Q2: retrieval augmented generation attribution grounding correction hallucination reduction
  Q3: fact grounding RAG self-correction output correction factual consistency mechanism
  Q4: RAG system self-evaluation factual accuracy correction trigger mechanism empirical

Coverage-gap note: "Hallucination" vocabulary is broad — may retrieve papers not specifically
  about self-correction within RAG pipelines.
```

```
ANGLE 4: Self-correction in RAG does not reliably improve over baseline — evidence
===========
Vocabulary tradition: NLP/RAG systems (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Evidence that RAG self-correction mechanisms fail to improve over standard
  RAG; cases where retrieval correction introduces noise; conditions where iterative retrieval
  worsens output; negative results from self-correction in RAG.

Source type (academic): arXiv cs.CL + cs.IR
Source type (practitioner): GitHub — RAG evaluation frameworks documenting self-correction limits

Queries:
  Q1: RAG self-correction fails no improvement over baseline retrieval negative evidence
  Q2: corrective retrieval augmented generation limitation failure worsens output evidence
  Q3: RAG iterative retrieval self-correction worsens quality when does not help
  Q4: self-correction RAG pipeline noise amplification degraded output conditions

Coverage-gap note: Failure conditions for RAG self-correction may be scattered across
  evaluation sections of positive-result papers rather than as standalone negative results.
```

```
ANGLE 5: Retrieval introduces noise — self-correction propagates garbage-in errors
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Retrieval noise / garbage-in-garbage-out dynamics
  Generating from: retrieval noise, irrelevant document contamination, garbage-in-garbage-out,
  noise injection, poisoned retrieval, corpus quality
  Excluding from generation prompt: query reformulation, RAG architecture, hallucination,
  pipeline design

Angle type: Adversarial
Predicted research character: empirical
What to extract: Evidence that self-correction in RAG amplifies retrieval errors rather than
  correcting them; cases where poor retrieval quality is propagated through the correction
  loop; corpus poisoning effects; adversarial retrieval inputs that self-correction fails to
  catch.

Source type (academic): arXiv cs.IR + cs.CL; security/robustness literature
Source type (practitioner): GitHub — RAG robustness evaluation; adversarial retrieval studies
  (REQUIRED — mixed domain)

Queries:
  Q1: RAG retrieval noise contamination self-correction propagates error garbage-in evidence
  Q2: retrieval augmented generation corrupted context self-correction failure poisoning
  Q3: RAG adversarial retrieval irrelevant document self-correction cannot detect failure
  Q4: noisy retrieval RAG self-correction amplification error propagation empirical

Coverage-gap note: "Poisoning" vocabulary may surface adversarial ML papers rather than
  RAG-specific work; filter carefully.
```

```
ANGLE 6: Classical relevance feedback theory applied to RAG self-correction
===========
Vocabulary tradition: Classical information science / relevance feedback theory
Angle type: Cross-disciplinary
Predicted research character: gap
What to extract: Rocchio's relevance feedback algorithm; pseudo-relevance feedback methods;
  principled analysis of iterative query improvement from pre-neural IR; failure conditions
  identified in classical RF that map onto modern RAG self-correction failures.

Source type (academic): Semantic Scholar (classical IR + LLM intersection); arXiv cs.IR
Source type (practitioner): deprioritized — classical IR is primarily academic

Queries:
  Q1: Rocchio relevance feedback applied retrieval augmented generation LLM self-correction
  Q2: pseudo-relevance feedback classical IR failure conditions RAG self-correction analogy
  Q3: iterative query refinement information retrieval classical methods applied language model
  Q4: relevance feedback theory retrieval augmented generation self-correction improvement
    connection modern LLM

Coverage-gap note: Classical IR literature predates LLMs; the connection must be inferred;
  this is a gap angle where absence of bridge literature is the key finding.
```

### GATE SUMMARY
```
GATE SUMMARY — L6
==================
Gate 1 — Completeness: PASS (all required angle types present)
Gate 2 — Distinctness:
  A1 (query reformulation) vs. A2 (CRAG/Self-RAG): PASS — A1 = IR mechanism; A2 = specific
    RAG architecture papers. Different query vocabulary (Rocchio vs. CRAG/Self-RAG).
  A2 vs. A3 (hallucination): BORDERLINE — both address RAG system quality. Check: A2 focuses
    on architectural self-correction mechanisms; A3 focuses on factual grounding specifically.
    Query strings differ: A2 uses "CRAG," "Self-RAG"; A3 uses "hallucination," "attribution."
    PASS with note.
  A3 vs. D1 (noise): PASS — A3 = factual grounding; D1 = retrieval noise propagation.
  N1 vs. A2: PASS — "fails," "worsens," "negative" vocabulary separates clearly.
  C1 vs. all: PASS — Rocchio/Salton vocabulary is historically distinct.
  Result: PASS (A2/A3 borderline noted)

Gate 3 — Launchability: PASS
Gate 4 — Scoring prohibition: PASS

Overall verdict: PASS — dispatch ready

Flags:
  1. VOCABULARY SELF-REPORT FLAG
  2. A2/A3 borderline — human judgment on merge vs. scope split by mechanism vs. outcome
  3. Angle 6 gap angle — document absence of classical IR bridge literature
  4. Angle 5 "poisoning" vocabulary — filter required to stay in RAG domain
```

---

## L7: Multi-Agent Debate as a Self-Correction Mechanism

### INTAKE BRIEF
```
INTAKE BRIEF
============
Topic: Multi-agent debate as a self-correction mechanism in LLMs — how structured debate
  between multiple agent instances produces error correction and the conditions under which
  it succeeds or fails.

Anchor vocabulary: "multi-agent debate" (multi-agent systems), "self-correction" (NLP alignment),
  "mechanism" (systems framing)

Candidate vocabulary traditions:
  1. Multi-agent systems / LLM ensembles — multi-agent debate, society of mind, agent
     discussion, LLM ensemble, MAD (multi-agent debate), cross-examination
  2. Philosophy / argumentation theory — dialectical reasoning, argumentation frameworks,
     Socratic method, adversarial argumentation, debate as truth-seeking
  3. LLM alignment / scalable oversight — debate framework (Irving et al.), AI safety via
     debate, scalable oversight, amplification
  4. Game theory / strategic interaction — adversarial dynamics, Nash equilibrium, majority
     voting, strategic information sharing, Condorcet jury theorem

  NOTE: Vocabulary traditions listed here are LLM self-reported.

Question type: EXPLORATORY
  (asking about the mechanism and its effectiveness — not comparing to a specific alternative)

Scope markers: Multi-agent debate specifically; at least two LLM instances engaged in
  structured disagreement or cross-examination.

Known exclusions: Single-agent self-critique without separate agent instances.

Domain maturity estimate: academic-heavy
  Basis: research area with active arXiv literature (Du et al. 2023, Liang et al. 2023);
  primarily academic framing; practitioner adoption is early stage.

Survey paper status: NOT FOUND — Source B unavailable.

Source B status: UNAVAILABLE — MODERATE (Source A+C produced 4 distinct traditions)
```

### COVERAGE MAP
```
COVERAGE MAP
============
Tradition 1: Multi-agent systems / LLM ensembles
  Representative terms: multi-agent debate, MAD, society of mind, agent discussion, ensemble
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: Philosophy / argumentation theory
  Representative terms: dialectical reasoning, Socratic method, argumentation frameworks
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: LLM alignment / scalable oversight
  Representative terms: debate framework, Irving et al., scalable oversight, AI safety debate
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Game theory / strategic interaction
  Representative terms: Nash equilibrium, Condorcet jury theorem, majority voting, strategic
  Planned angle slot: Confirmatory A4
  Gap flag: No

Traditions NOT yet represented: None.

Cross-disciplinary slot (required):
  Target tradition: Argumentation theory / Toulmin model (NOT in intake brief)
  Basis: Toulmin's argumentation model (claim, grounds, warrant, rebuttal) provides a
  structural grammar for debate that could sharpen analysis of where multi-agent debate
  succeeds vs. degenerates; Toulmin analysis is not cited in LLM multi-agent debate papers.
```

### TYPE ALLOCATIONS
```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Multi-agent systems / LLM ensembles): assigned
Slot A2 (Confirmatory — Philosophy / argumentation theory): assigned
Slot A3 (Confirmatory — LLM alignment / scalable oversight): assigned
Slot N1 (Null-hypothesis): assigned
Slot D1 (Adversarial): starting vocabulary — groupthink / majority convergence dynamics
  NOT FROM: multi-agent debate mechanisms, argumentation, scalable oversight, game theory
Slot C1 (Cross-disciplinary): Argumentation theory / Toulmin model
```

### ANGLE LIST

```
ANGLE 1: Multi-agent debate mechanisms — when LLM cross-examination corrects errors
===========
Vocabulary tradition: Multi-agent systems / LLM ensembles
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Empirical results on debate-based correction (Du et al. 2023, Liang et al.);
  which error types are correctable via debate; optimal number of agents; round structure
  effects; conditions for convergence to correct answer.

Source type (academic): arXiv cs.CL + cs.AI + cs.LG
Source type (practitioner): GitHub — multi-agent debate implementations and evaluations

Queries:
  Q1: multi-agent debate LLM self-correction mechanism error correction empirical 2023 2024 2025
  Q2: LLM ensemble debate MAD cross-examination accuracy improvement correction mechanism
  Q3: society of mind LLM debate reasoning improvement agent discussion correction
  Q4: Du multi-agent debate 2023 LLM reasoning correction mechanism evaluation

Coverage-gap note: "Du et al. 2023" is a proper-noun anchor — run the original query without
  expansion per specificity gate; Q4 is specificity-gated.
```

```
ANGLE 2: Dialectical reasoning and argumentation as error-correction frameworks
===========
Vocabulary tradition: Philosophy / argumentation theory
Angle type: Confirmatory
Predicted research character: gap
What to extract: Philosophical literature on dialectical reasoning as truth-seeking; conditions
  under which debate produces reliable corrections vs. entrenchment; any direct application
  of argumentation theory to LLM debate mechanisms.

Source type (academic): Semantic Scholar (philosophy + AI intersection); arXiv cs.AI
Source type (practitioner): deprioritized — philosophical framing

Queries:
  Q1: dialectical reasoning truth-seeking debate LLM correction mechanism philosophical analysis
  Q2: argumentation framework applied multi-agent LLM debate error correction
  Q3: Socratic method LLM multi-agent dialogue correction mechanism analogy application
  Q4: argumentation theory LLM debate convergence truth philosophical framework

Coverage-gap note: Philosophy of argumentation is likely a gap for LLM debate — value is
  the structural framework, not the citation density.
```

```
ANGLE 3: Debate as scalable oversight — Irving et al. framework and successors
===========
Vocabulary tradition: LLM alignment / scalable oversight
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Irving et al. (2018) debate framework; empirical tests of debate-based
  scalable oversight; how debate as a self-correction tool has been evaluated in safety
  contexts; comparisons with other scalable oversight methods.

Source type (academic): arXiv cs.AI + cs.CL + cs.LG
Source type (practitioner): Anthropic / OpenAI technical reports on debate and scalable
  oversight

Queries:
  Q1: debate LLM scalable oversight Irving 2018 self-correction empirical evaluation
  Q2: AI safety debate framework scalable oversight correction mechanism 2024 2025
  Q3: debate amplification scalable oversight LLM correction accuracy evaluation successor
  Q4: multi-agent debate alignment scalable oversight comparison empirical evidence

Coverage-gap note: Irving et al. 2018 is foundational; include post-2022 follow-up work
  that tests these ideas with modern LLMs specifically.
```

```
ANGLE 4: Multi-agent debate does not reliably produce correct answers — convergence failure
===========
Vocabulary tradition: Multi-agent systems (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Evidence that multi-agent debate fails to converge on correct answers;
  conditions where debate reinforces errors; cases where majority wins but majority is wrong;
  topics where debate-based correction is unreliable or worse than single-agent.

Source type (academic): arXiv cs.CL + cs.AI
Source type (practitioner): GitHub — evaluation frameworks documenting debate failure

Queries:
  Q1: multi-agent debate LLM fails to correct errors convergence failure negative evidence
  Q2: LLM debate majority wrong answer reinforcement failure condition evidence
  Q3: multi-agent debate no improvement over single agent null result failure cases
  Q4: debate-based correction LLM unreliable conditions failure mode when does not work

Coverage-gap note: Negative results on debate may be embedded as subsidiary findings
  in papers that primarily show positive results.
```

```
ANGLE 5: Multi-agent debate converges to groupthink — majority opinion dynamics
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Groupthink / majority convergence dynamics
  Generating from: groupthink, conformity pressure, majority opinion, social influence,
  false consensus, echo chamber, Asch conformity, sycophantic convergence
  Excluding from generation prompt: debate mechanism, argumentation, scalable oversight,
  Condorcet jury theorem

Angle type: Adversarial
Predicted research character: empirical
What to extract: Evidence that LLM agents in multi-agent debate converge to majority opinion
  rather than correct answer; sycophantic capitulation by minority agents; social influence
  dynamics in LLM debate; cases where correct minority position is overridden by incorrect
  majority through social pressure.

Source type (academic): arXiv cs.CL + cs.AI; social psychology literature on conformity
Source type (practitioner): AI safety community papers on LLM social dynamics

Queries:
  Q1: LLM multi-agent debate groupthink sycophantic convergence majority pressure conformity
  Q2: agent debate LLM minority correct position overridden majority social influence
  Q3: multi-agent LLM discussion false consensus echo chamber correction failure groupthink
  Q4: LLM debate conformity pressure Asch analogy sycophancy convergence failure evidence

Coverage-gap note: Social psychology vocabulary (Asch, groupthink) may not appear in AI
  papers — requires cross-vocabulary search.
```

```
ANGLE 6: Toulmin argumentation model applied to multi-agent LLM debate structure
===========
Vocabulary tradition: Argumentation theory / Toulmin model
Angle type: Cross-disciplinary
Predicted research character: gap
What to extract: Toulmin's model (claim, grounds, warrant, backing, rebuttal, qualifier);
  how Toulmin structure predicts debate quality in multi-agent LLM systems; conditions where
  Toulmin-structured debate produces reliable correction vs. degeneration; any application
  of Toulmin to AI debate analysis.

Source type (academic): Semantic Scholar (rhetoric + AI); arXiv cs.CL (computational
  argumentation)
Source type (practitioner): deprioritized — theoretical angle

Queries:
  Q1: Toulmin argumentation model applied multi-agent LLM debate structure analysis
  Q2: computational argumentation multi-agent LLM debate quality structure Toulmin framework
  Q3: argumentation structure claim warrant rebuttal LLM debate error correction mechanism
  Q4: Toulmin model artificial intelligence debate multi-agent correction framework application

Coverage-gap note: Computational argumentation is an established subfield of NLP; this
  angle may find more literature than expected.
```

### GATE SUMMARY
```
GATE SUMMARY — L7
==================
Gate 1 — Completeness: PASS (all required angle types present)
Gate 2 — Distinctness:
  A1 (multi-agent mechanisms) vs. A3 (scalable oversight): BORDERLINE — both concern LLM
    debate empirically. Check: A1 = mechanism and accuracy improvement; A3 = AI safety and
    scalable oversight framing. Query vocabularies differ (MAD/ensemble vs. Irving/oversight).
    PASS with note.
  A2 (argumentation theory) vs. C1 (Toulmin): BORDERLINE — both in philosophy of argument
    territory. Check: A2 = dialectical reasoning, Socratic method (broad); C1 = Toulmin model
    specifically (narrow structural grammar). Query vocabularies differ. PASS with note.
  N1 vs. A1: PASS — "fails," "convergence failure," "negative" separate clearly.
  D1 vs. all: PASS — groupthink/conformity vocabulary non-overlapping with A1-A4.
  Result: PASS (two borderlines noted)

Gate 3 — Launchability: PASS (SPECIFICITY GATE APPLIED to Q4 of Angle 1 — "Du et al. 2023"
  proper noun anchor; original query used without expansion)
Gate 4 — Scoring prohibition: PASS

Overall verdict: PASS — dispatch ready

Flags:
  1. VOCABULARY SELF-REPORT FLAG
  2. A1/A3 borderline — human judgment; A3 might merge if scalable oversight is in scope
  3. A2/C1 borderline — human judgment; consider whether Toulmin is a subset of A2 scope
  4. D1 social psychology vocabulary requires cross-tradition search
```

---

## L8: Self-Correction for Factual Accuracy in Long-Form Generation

### INTAKE BRIEF
```
INTAKE BRIEF
============
Topic: Self-correction mechanisms that target factual accuracy specifically in long-form
  text generation — what works, what fails, and what conditions predict success.

Anchor vocabulary: "self-correction" (NLP alignment), "factual accuracy" (NLP fact-checking),
  "long-form generation" (NLP generation)

Candidate vocabulary traditions:
  1. NLP fact-checking / factuality evaluation — fact verification, factuality evaluation,
     hallucination detection, factual grounding, TruthfulQA, FActScore
  2. Information retrieval / attribution — attribution, source grounding, citation generation,
     retrieval-based fact correction, knowledge-intensive generation
  3. NLP generation / summarization — long-form QA, knowledge-intensive NLG, open-domain
     generation, summarization faithfulness, document-grounded generation
  4. Journalism / editorial processes — fact-checking practices, editorial review, source
     verification, correction workflows

  NOTE: Vocabulary traditions listed here are LLM self-reported.

Question type: STRUCTURED
  Scope conditions: long-form text specifically; factual accuracy as the outcome measure;
  self-correction as the intervention.

Scope markers: Long-form generation (>paragraph length); factual accuracy as target outcome.

Known exclusions: Short-form or single-sentence generation; accuracy along non-factual
  dimensions (style, coherence).

Domain maturity estimate: academic-heavy
  Basis: active arXiv research (FActScore, SAFE, long-form QA); academic vocabulary dominant.

Survey paper status: NOT FOUND — Source B unavailable.

Source B status: UNAVAILABLE — MODERATE (Source A+C produced 4 distinct traditions)
```

### COVERAGE MAP
```
COVERAGE MAP
============
Tradition 1: NLP fact-checking / factuality evaluation
  Representative terms: fact verification, hallucination detection, factual grounding, FActScore
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: Information retrieval / attribution
  Representative terms: attribution, source grounding, citation, retrieval-based correction
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: NLP generation / summarization
  Representative terms: long-form QA, faithfulness, knowledge-intensive generation
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Journalism / editorial processes
  Representative terms: fact-checking workflow, editorial review, source verification
  Planned angle slot: Integrated into C1
  Gap flag: Partially addressed

Traditions NOT yet represented: Tradition 4 addressed via C1.

Cross-disciplinary slot (required):
  Target tradition: Journalism studies / computational journalism
  Basis: Journalism and media studies has decades of research on fact-checking workflows,
  what makes fact-checking reliable, and when it fails; this literature is rarely cited in
  NLP papers about factual accuracy despite being directly relevant.
```

### TYPE ALLOCATIONS
```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — NLP fact-checking / factuality): assigned
Slot A2 (Confirmatory — IR / attribution): assigned
Slot A3 (Confirmatory — NLP generation / long-form): assigned
Slot N1 (Null-hypothesis): assigned
Slot D1 (Adversarial): starting vocabulary — hallucination confidence amplification
  NOT FROM: fact-checking, attribution, long-form generation quality, journalism
Slot C1 (Cross-disciplinary): Journalism studies / computational journalism
```

### ANGLE LIST

```
ANGLE 1: Factual self-correction using automated fact-checking signals
===========
Vocabulary tradition: NLP fact-checking / factuality evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods that use automated fact-checking (FActScore, SAFE, etc.) as
  self-correction triggers; how factuality evaluation scores feed back into generation;
  accuracy improvement measured by factuality metrics; conditions for reliable improvement.

Source type (academic): arXiv cs.CL + cs.AI + cs.LG
Source type (practitioner): GitHub — FActScore, SAFE, factuality evaluation frameworks

Queries:
  Q1: LLM self-correction factual accuracy automated fact checking FActScore 2023 2024 2025
  Q2: hallucination detection self-correction loop LLM long-form factual accuracy improvement
  Q3: factuality evaluation feedback self-correction language model generation accuracy
  Q4: SAFE FActScore self-correction trigger LLM factual accuracy long-form generation

Coverage-gap note: Factuality metrics themselves have known limitations (they measure proxy
  signals for truth); correction using imperfect metrics may entrench errors.
```

```
ANGLE 2: Attribution and retrieval-based factual correction in long-form generation
===========
Vocabulary tradition: Information retrieval / attribution
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How attribution-based correction works (cite → verify → revise); retrieval
  as a self-correction mechanism for factual claims; attribution coverage in long-form text;
  failure cases where retrieval does not correct factual errors.

Source type (academic): arXiv cs.CL + cs.IR + cs.LG
Source type (practitioner): GitHub — attribution-based generation frameworks

Queries:
  Q1: attribution-based self-correction LLM factual accuracy long-form generation retrieval
  Q2: source grounding correction LLM long-form factual claim verification retrieval 2024 2025
  Q3: citation generation fact correction retrieval augmented self-correction long-form LLM
  Q4: knowledge-intensive generation factual correction attribution mechanism empirical

Coverage-gap note: Attribution research often focuses on generating citations, not on whether
  the citations actually correct errors in the generated text.
```

```
ANGLE 3: Faithfulness self-correction in knowledge-intensive long-form generation
===========
Vocabulary tradition: NLP generation / summarization
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Self-correction approaches in long-form QA and knowledge-intensive
  summarization; faithfulness evaluation as a self-correction signal; how length affects
  correction effectiveness; document-grounded generation correction mechanisms.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — long-form QA evaluation frameworks (ASQA, ELI5, QASPER)

Queries:
  Q1: long-form QA self-correction factual accuracy faithfulness evaluation 2024 2025
  Q2: knowledge-intensive NLG self-correction factual accuracy long-form generation evaluation
  Q3: summarization faithfulness self-correction LLM long document generation accuracy
  Q4: LLM long-form generation factual consistency self-correction mechanism improvement

Coverage-gap note: "Faithfulness" in summarization and "factual accuracy" in QA are related
  but distinct; may require separate queries to cover both subfields.
```

```
ANGLE 4: Self-correction worsens factual accuracy in long-form generation — evidence
===========
Vocabulary tradition: NLP fact-checking (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Evidence that self-correction for factual accuracy fails in long-form
  generation; cases where correction introduces new errors; length effects on correction
  reliability; conditions where factual correction makes accuracy worse.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — evaluation showing factual correction degradation

Queries:
  Q1: LLM self-correction factual accuracy fails long-form generation introduces errors
  Q2: self-correction hallucination long-form generation worsens accuracy negative evidence
  Q3: factual self-correction LLM does not improve accuracy conditions failure limitation
  Q4: long-form generation self-correction factual accuracy null result degradation evidence

Coverage-gap note: Long-form generation is less benchmarked than short-form; negative results
  specifically for factual self-correction in long-form may be sparse.
```

```
ANGLE 5: Self-correction amplifies hallucination confidence in long-form generation
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Hallucination confidence amplification
  Generating from: confident hallucination, hallucination amplification, false confidence,
  overconfident wrong claims, self-reinforcing hallucination loops
  Excluding from generation prompt: fact-checking, attribution, faithfulness, journalism

Angle type: Adversarial
Predicted research character: empirical
What to extract: Evidence that self-correction makes LLMs more confidently wrong — correct
  facts that are revised to plausible-sounding hallucinations; cases where self-correction
  increases fluency while decreasing accuracy; long-form texts where revision passes make
  hallucinations harder to detect.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): AI evaluation community reports on hallucination amplification

Queries:
  Q1: LLM self-correction confident hallucination long-form amplification overconfident wrong
  Q2: self-revision hallucination confidence increases accuracy decreases LLM long-form
  Q3: LLM correction makes hallucinations more fluent plausible harder detect evidence
  Q4: self-correction hallucination amplification overconfidence long text generation empirical

Coverage-gap note: "Hallucination amplification" as a specific phenomenon may be named
  differently in the literature; variant vocabulary searches required.
```

```
ANGLE 6: Journalism fact-checking workflow principles applied to LLM self-correction
===========
Vocabulary tradition: Journalism studies / computational journalism
Angle type: Cross-disciplinary
Predicted research character: gap
What to extract: Empirically validated principles from journalism fact-checking research
  (what makes fact-checking reliable, when it fails, verification workflow design);
  computational journalism automation of fact-checking; structural parallels with LLM
  self-correction for factual accuracy.

Source type (academic): Semantic Scholar (journalism + AI); PubMed-equivalent for media
  studies (Communication Abstracts); arXiv cs.CL (computational journalism)
Source type (practitioner): Duke Reporters' Lab; Full Fact publications on automated
  fact-checking

Queries:
  Q1: journalism fact-checking workflow reliability applied LLM self-correction analogy
  Q2: computational journalism automated fact checking principles LLM factual accuracy
  Q3: fact-checking failure conditions journalism research applied AI generation correction
  Q4: automated fact checking journalism workflow self-correction language model parallel

Coverage-gap note: Computational journalism has its own arXiv-adjacent literature; search
  ACL anthology and journalism research databases in parallel.
```

### GATE SUMMARY
```
GATE SUMMARY — L8
==================
Gate 1 — Completeness: PASS (all required angle types present)
Gate 2 — Distinctness:
  A1 (fact-checking signals) vs. A2 (attribution/retrieval): BORDERLINE — both concern factual
    accuracy correction mechanisms. Check: A1 = automated factuality evaluation → correction
    loop; A2 = source attribution → retrieval-based correction. Different mechanisms. PASS.
  A1 vs. A3 (faithfulness): PASS — A1 = fact-checking metrics; A3 = faithfulness in long-form
    QA/summarization. Vocabulary pools differ.
  A2 vs. A3: BORDERLINE — both can involve retrieval. Check: A2 = attribution specifically
    (cite and verify); A3 = faithfulness and document-grounding (broader). PASS with note.
  N1 vs. A1: PASS — "fails," "worsens," "null result" vocabulary separates clearly.
  D1 vs. all: PASS — "confident hallucination" vocabulary not present in A1-A3.
  C1 vs. all: PASS — journalism vocabulary is distinct.
  Result: PASS (two borderlines noted)

Gate 3 — Launchability: PASS (SPECIFICITY GATE APPLIED to Q4 of Angle 1 — "SAFE FActScore"
  are specific tool names; query uses them without expansion)
Gate 4 — Scoring prohibition: PASS

Overall verdict: PASS — dispatch ready

Flags:
  1. VOCABULARY SELF-REPORT FLAG
  2. A1/A2 and A2/A3 borderlines — human judgment on merges
  3. Long-form negative results sparse — saturation threshold low for N1
  4. Journalism databases not searchable in this context — note for human researcher
```

---

## L9: Metacognitive Calibration in LLMs — Knowing When to Self-Correct

### INTAKE BRIEF
```
INTAKE BRIEF
============
Topic: Metacognitive calibration in LLMs — the capacity to accurately assess when
  self-correction is needed vs. when the current output is reliable; the problem of knowing
  when to correct.

Anchor vocabulary: "metacognitive calibration" (cognitive science), "LLMs" (ML/NLP),
  "knowing when to self-correct" (decision-making framing)

Candidate vocabulary traditions:
  1. Cognitive science / metacognition — metacognitive monitoring, calibration, confidence
     accuracy correlation, feeling of knowing, metacognitive control, Dunning-Kruger
  2. ML calibration / uncertainty — calibration curves, ECE (expected calibration error),
     temperature scaling, reliability diagrams, overconfidence in neural networks
  3. NLP/LLM evaluation — sycophancy, overconfidence, verbalized confidence, LLM
     self-awareness, LLM introspection, self-knowledge
  4. Decision theory — value of information, decision under uncertainty, when to revise,
     optimal stopping, cost of unnecessary correction

  NOTE: Vocabulary traditions listed here are LLM self-reported.

Question type: EXPLORATORY
  (asking about the capacity itself — what it is, how it works or fails, what predicts it)

Scope markers: The specific question of when to correct — not what to correct or how to
  correct, but whether correction is warranted.

Known exclusions: Correction mechanisms themselves (out of scope); scope is the decision
  to correct.

Domain maturity estimate: academic-heavy
  Basis: metacognition in AI is a growing research area; calibration has strong ML literature;
  academic vocabulary dominates.

Survey paper status: NOT FOUND — Source B unavailable.

Source B status: UNAVAILABLE — MODERATE (Source A+C produced 4 distinct traditions)
```

### COVERAGE MAP
```
COVERAGE MAP
============
Tradition 1: Cognitive science / metacognition
  Representative terms: metacognitive monitoring, calibration, feeling of knowing, Dunning-Kruger
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: ML calibration / uncertainty
  Representative terms: ECE, temperature scaling, reliability diagrams, overconfidence
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: NLP/LLM evaluation
  Representative terms: sycophancy, verbalized confidence, LLM self-awareness, introspection
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Decision theory
  Representative terms: value of information, optimal stopping, cost of unnecessary correction
  Planned angle slot: Confirmatory A4
  Gap flag: No

Traditions NOT yet represented: None.

Cross-disciplinary slot (required):
  Target tradition: Clinical decision-making / physician calibration research
  Basis: Clinical medicine has decades of empirical research on when clinicians should trust
  their own judgments vs. revise them — overconfidence in diagnosis, calibration training
  interventions, second-opinion triggers; this is a directly analogous problem to LLM
  metacognitive calibration but from a different discipline with more empirical grounding.
```

### TYPE ALLOCATIONS
```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Cognitive science / metacognition): assigned
Slot A2 (Confirmatory — ML calibration / uncertainty): assigned
Slot A3 (Confirmatory — NLP/LLM evaluation): assigned
Slot N1 (Null-hypothesis): assigned
Slot D1 (Adversarial): starting vocabulary — stochastic output / statistical artifact
  NOT FROM: metacognition, calibration, LLM evaluation, decision theory
Slot C1 (Cross-disciplinary): Clinical decision-making / physician calibration
```

### ANGLE LIST

```
ANGLE 1: LLM metacognitive monitoring — does knowing when to correct exist as a capacity?
===========
Vocabulary tradition: Cognitive science / metacognition
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence for or against LLM metacognitive monitoring capacity; correlation
  between expressed uncertainty and actual error presence; feeling-of-knowing analogs in
  LLMs; whether metacognitive cues reliably predict when correction is needed.

Source type (academic): arXiv cs.CL + cs.LG; PubMed (metacognitive monitoring in human-AI
  comparisons)
Source type (practitioner): GitHub — LLM calibration evaluation tools

Queries:
  Q1: LLM metacognitive calibration knowing when to self-correct capacity evidence 2024 2025
  Q2: language model feeling of knowing uncertainty self-correction trigger metacognition
  Q3: LLM metacognitive monitoring capacity empirical evidence when to correct calibration
  Q4: LLM introspection accuracy know when wrong self-assessment calibration correlation

Coverage-gap note: "Feeling of knowing" vocabulary is from human cognitive science and may
  not appear in LLM papers — cross-tradition search required.
```

```
ANGLE 2: Probabilistic calibration as a correction-trigger signal
===========
Vocabulary tradition: ML calibration / uncertainty
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How well LLM confidence scores (token probabilities, softmax outputs) predict
  when correction is needed; ECE measurements for LLMs; whether calibration training improves
  correction-trigger reliability; overconfidence patterns that cause missed correction
  opportunities.

Source type (academic): arXiv cs.CL + cs.LG + stat.ML
Source type (practitioner): GitHub — LLM calibration benchmarks and tools

Queries:
  Q1: LLM calibration uncertainty estimation when to self-correct trigger signal ECE 2024 2025
  Q2: language model confidence score self-correction trigger reliability calibration
  Q3: LLM overconfidence missed correction opportunity calibration failure metacognitive
  Q4: neural network calibration self-correction trigger probabilistic signal empirical

Coverage-gap note: Calibration research is often about accuracy prediction rather than
  correction triggering specifically; may require filtering.
```

```
ANGLE 3: Verbalized confidence and sycophancy as calibration distortors
===========
Vocabulary tradition: NLP/LLM evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How verbalized confidence in LLMs correlates with actual accuracy; sycophantic
  over-agreement that masks needed correction; self-knowledge limitations that prevent accurate
  correction-need assessment; experiments measuring when LLMs correctly identify their
  own errors.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — sycophancy evaluation frameworks; verbalized confidence
  benchmarks

Queries:
  Q1: LLM verbalized confidence accuracy correlation sycophancy calibration 2024 2025
  Q2: LLM self-knowledge when wrong self-assessment accuracy metacognitive calibration
  Q3: sycophancy LLM self-correction decision when to revise overconfident assessment
  Q4: LLM introspective accuracy self-report confidence calibration empirical study

Coverage-gap note: Sycophancy research and calibration research are adjacent but often
  separate; both needed for this angle.
```

```
ANGLE 4: Optimal stopping and decision theory — when the cost of correction exceeds benefit
===========
Vocabulary tradition: Decision theory
Angle type: Confirmatory
Predicted research character: gap
What to extract: Decision-theoretic frameworks for optimal correction-trigger thresholds;
  when the expected value of self-correction is negative; cost-benefit models for correction
  decisions; any application of optimal stopping theory to LLM self-correction.

Source type (academic): arXiv cs.AI + cs.LG; Semantic Scholar (decision theory + LLM)
Source type (practitioner): deprioritized — theoretical angle

Queries:
  Q1: optimal stopping self-correction LLM decision theory when to correct cost benefit
  Q2: value of information self-correction trigger LLM decision optimal threshold
  Q3: decision theory framework LLM self-correction when to revise cost analysis
  Q4: expected value self-correction LLM correction decision threshold theoretical framework

Coverage-gap note: Decision theory application to LLM self-correction is likely sparse;
  this is a gap angle.
```

```
ANGLE 5: LLM metacognitive calibration is a statistical artifact, not a cognitive capacity
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Stochastic output / statistical artifact framing
  Generating from: stochastic output, statistical pattern, correlation artifact, spurious
  calibration, distribution matching, frequency statistics, not-understanding
  Excluding from generation prompt: metacognition, calibration curve, verbalized confidence,
  decision theory

Angle type: Adversarial
Predicted research character: empirical
What to extract: Evidence that apparent LLM calibration is a statistical artifact of training
  distribution (models reflect base rates, not genuine metacognitive capacity); cases where
  calibration breaks down out-of-distribution; evidence that LLMs cannot genuinely assess
  their own uncertainty vs. matching training frequency patterns.

Source type (academic): arXiv cs.CL + cs.LG; philosophy of AI (genuine understanding vs.
  statistical pattern matching)
Source type (practitioner): AI safety community papers on LLM self-knowledge limits

Queries:
  Q1: LLM calibration statistical artifact not genuine metacognition training distribution match
  Q2: language model uncertainty estimate distribution frequency artifact not understanding
  Q3: LLM self-knowledge statistical pattern spurious calibration out-of-distribution failure
  Q4: LLM apparent calibration breaks out-of-distribution genuine metacognition vs artifact

Coverage-gap note: This framing (statistical artifact) may appear in interpretability and
  AI philosophy papers more than in NLP evaluation literature.
```

```
ANGLE 6: Clinical decision-making calibration research applied to LLM correction triggers
===========
Vocabulary tradition: Clinical decision-making / physician calibration
Angle type: Cross-disciplinary
Predicted research character: gap
What to extract: Clinical research on when physicians correctly know they need a second
  opinion; overconfidence in clinical diagnosis; calibration training interventions; what
  structural conditions improve when-to-correct judgment in high-stakes domains; translation
  to LLM self-correction trigger design.

Source type (academic): PubMed (clinical calibration, diagnostic overconfidence); Semantic
  Scholar (medical AI + calibration)
Source type (practitioner): deprioritized — clinical research is primarily academic

Queries:
  Q1: physician calibration overconfidence second opinion when to revise clinical decision
  Q2: clinical diagnostic calibration knowing when wrong applied AI LLM correction trigger
  Q3: medical decision-making calibration training intervention analogous LLM self-correction
  Q4: calibration high-stakes decision when to seek correction clinical research LLM analogy

Coverage-gap note: PubMed is the correct database for this angle; arXiv coverage of
  clinical calibration literature is low — note platform shift.
```

```
ANGLE 7: LLMs have no reliable metacognitive calibration — correction triggers are uncorrelated with error presence
===========
Vocabulary tradition: NLP/LLM evaluation (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Evidence that LLM expressed confidence does not predict error presence;
  cases where LLMs confidently self-correct correct outputs; cases where LLMs fail to
  flag actual errors; experiments showing no correlation between self-correction triggers
  and actual accuracy; limits of LLM introspective access to own errors.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — calibration evaluation benchmarks showing no correlation

Queries:
  Q1: LLM calibration confidence does not predict error self-correction trigger unreliable
  Q2: language model introspection fails accuracy no correlation confidence when wrong
  Q3: LLM metacognitive calibration null result no reliable self-assessment trigger evidence
  Q4: LLM correct output self-corrected wrong miscorrection overconfident trigger failure

Coverage-gap note: "Miscorrection" (correcting correct outputs) is a specific failure mode
  that may not have a standardized name in the literature.
```

### GATE SUMMARY
```
GATE SUMMARY — L9
==================
Gate 1 — Completeness:
  Null-hypothesis angle present: PASS (Angle 7 — "no reliable calibration," "no correlation,"
    "null result" framing; corrects earlier omission)
  Adversarial angle present: PASS (Angle 5 — ADVERSARIAL-FLAGGED + dispatch note)
  Cross-disciplinary angle present: PASS (Angle 6 — clinical decision-making, not in intake)
  Source-type coverage: PASS (academic-heavy; practitioner included for A2/A3)
  Vocabulary-tradition map populated: PASS (4 traditions + cross-disciplinary)
  Result: PASS

Gate 2 — Distinctness:
  A1 (metacognition) vs. A2 (ML calibration): BORDERLINE — both concern confidence-accuracy
    correlation. Check: A1 = cognitive-science framing, feeling-of-knowing vocabulary;
    A2 = probabilistic calibration, ECE, temperature scaling. Different query vocabularies.
    PASS with note.
  A2 vs. A3 (verbalized confidence): BORDERLINE — both concern LLM confidence signals.
    Check: A2 = probabilistic/token-level calibration; A3 = verbalized confidence + sycophancy.
    Different vocabulary. PASS.
  A1/A2/A3 triple proximity: Retained as separate — each vocabulary tradition (cognitive
    science / ML statistics / NLP evaluation) retrieves structurally different papers. PASS
    with flag for human judgment.
  A4 (decision theory) vs. all: PASS — optimal stopping / value-of-information vocabulary
    does not appear in A1-A3.
  N1 (Angle 7) vs. A3: BORDERLINE — both in NLP evaluation territory. Check: A3 = sycophancy
    and verbalized confidence correlation; N1 = correction trigger uncorrelated with error
    presence. Query vocabulary differs ("sycophancy" vs. "null result / no correlation"). PASS.
  D1 vs. all: PASS — stochastic/statistical-artifact vocabulary distinct.
  C1 vs. all: PASS — clinical calibration vocabulary is distinct.
  Result: PASS (three borderlines noted; A1/A2/A3 triple proximity is the main risk)

Gate 3 — Launchability: PASS
Gate 4 — Scoring prohibition: PASS

Overall verdict: PASS — dispatch ready

Flags:
  1. VOCABULARY SELF-REPORT FLAG
  2. A1/A2/A3 triple proximity — human judgment on whether to consolidate
  3. Angle 4 (decision theory) predicted as gap — low saturation threshold
  4. Angle 6 requires PubMed search — note platform shift from arXiv
  5. Self-check: N1 (Angle 7) was omitted from initial angle generation and corrected in
     gate-summary pass — this is a class-instance of null-hypothesis omission (CLAUDE.md
     domain failure mode: null-hypothesis angle is the angle LLM is least likely to generate
     without structural elicitation)
```

---

## L10: Human-in-the-Loop Correction vs. Autonomous Self-Correction in Deployed Systems

### INTAKE BRIEF
```
INTAKE BRIEF
============
Topic: Comparative effectiveness of human-in-the-loop (HITL) correction versus autonomous
  LLM self-correction in deployed production systems — which is more reliable, under what
  conditions, and what are the tradeoffs.

Anchor vocabulary: "human-in-the-loop" (HCI / AI systems), "autonomous self-correction"
  (NLP alignment / AI systems), "deployed systems" (systems engineering)

Candidate vocabulary traditions:
  1. Human-computer interaction (HCI) / HITL — human-in-the-loop, mixed-initiative systems,
     human oversight, human-AI teaming, human feedback integration
  2. AI safety / alignment — scalable oversight, corrigibility, RLHF, human supervision,
     autonomous correction, oversight mechanisms
  3. Systems engineering / reliability — fault tolerance, error recovery, autonomy levels,
     failsafe design, human supervision requirements
  4. Organizational behavior / automation — automation complacency, automation trust,
     human-automation teaming, operator trust calibration, mode confusion

  NOTE: Vocabulary traditions listed here are LLM self-reported.

Question type: STRUCTURED
  Comparison: HITL correction vs. autonomous self-correction
  Context: deployed production systems specifically
  Outcome: reliability, correction quality, system performance

Scope markers: Deployed systems (production context); both correction modalities compared.

Known exclusions: Pure offline evaluation; academic benchmarks without deployment simulation.

Domain maturity estimate: mixed
  Basis: RLHF has strong academic literature; deployed systems literature is practitioner-heavy;
  both traditions are active.

Survey paper status: NOT FOUND — Source B unavailable.

Source B status: UNAVAILABLE — MODERATE (Source A+C produced 4 distinct traditions)
```

### COVERAGE MAP
```
COVERAGE MAP
============
Tradition 1: HCI / HITL
  Representative terms: human-in-the-loop, mixed-initiative, human-AI teaming, human oversight
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: AI safety / alignment
  Representative terms: scalable oversight, corrigibility, RLHF, human supervision
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: Systems engineering / reliability
  Representative terms: fault tolerance, error recovery, autonomy levels, failsafe
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Organizational behavior / automation
  Representative terms: automation complacency, operator trust, human-automation teaming
  Planned angle slot: Confirmatory A4
  Gap flag: No

Traditions NOT yet represented: None.

Cross-disciplinary slot (required):
  Target tradition: Aviation / nuclear safety — human factors in high-stakes automation
  Basis: Aviation and nuclear safety engineering has the most rigorous empirical literature
  on when humans outperform autonomous systems in error correction and when they don't;
  automation surprise, mode confusion, and human factors are directly analogous to HITL vs.
  autonomous correction tradeoffs in LLM deployment.
```

### TYPE ALLOCATIONS
```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — HCI / HITL): assigned
Slot A2 (Confirmatory — AI safety / alignment): assigned
Slot A3 (Confirmatory — Systems engineering / reliability): assigned
Slot A4 (Confirmatory — Organizational behavior / automation trust): assigned
Slot N1 (Null-hypothesis): assigned
Slot D1 (Adversarial): starting vocabulary — human bias introduction / cognitive bottleneck
  NOT FROM: HITL effectiveness, scalable oversight, fault tolerance, automation trust
Slot C1 (Cross-disciplinary): Aviation / nuclear safety — human factors engineering
```

### ANGLE LIST

```
ANGLE 1: HITL correction effectiveness in deployed LLM systems — empirical evidence
===========
Vocabulary tradition: HCI / HITL
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Empirical studies of HITL correction in deployed LLM systems; conditions
  where human correction outperforms autonomous self-correction; latency/throughput tradeoffs;
  human reviewer accuracy and consistency; interface design effects on HITL quality.

Source type (academic): arXiv cs.HC + cs.CL + cs.AI
Source type (practitioner): Technical reports from AI deployment teams; ACL industry track
  papers (REQUIRED — mixed domain)

Queries:
  Q1: human-in-the-loop correction deployed LLM system effectiveness empirical 2023 2024 2025
  Q2: HITL correction deployed LLM production system human oversight accuracy tradeoff
  Q3: mixed-initiative human correction LLM deployment effectiveness latency comparison
  Q4: human feedback integration deployed language model correction quality empirical

Coverage-gap note: Deployed system case studies often appear in industry venues not on
  arXiv; ACL/EMNLP industry tracks and conference proceedings should be included.
```

```
ANGLE 2: Scalable oversight — the fundamental tension between HITL and autonomous correction
===========
Vocabulary tradition: AI safety / alignment
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Scalable oversight problem framing; evidence on whether human oversight
  degrades at scale; corrigibility requirements for autonomous correction; empirical tests of
  scalable oversight proposals in deployed contexts; when autonomous self-correction is
  preferred on safety grounds.

Source type (academic): arXiv cs.AI + cs.CL + cs.LG
Source type (practitioner): Anthropic / OpenAI / DeepMind alignment reports

Queries:
  Q1: scalable oversight HITL vs autonomous self-correction LLM deployed system 2024 2025
  Q2: human oversight LLM autonomous correction scalability tradeoff deployed production
  Q3: corrigibility autonomous self-correction HITL deployed LLM alignment comparison
  Q4: scalable oversight empirical test human feedback vs autonomous correction deployed AI

Coverage-gap note: Empirical tests of scalable oversight in actual deployed systems may
  be sparse — theoretical treatments more common.
```

```
ANGLE 3: Autonomy levels and reliability engineering for hybrid correction systems
===========
Vocabulary tradition: Systems engineering / reliability
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Autonomy level frameworks applied to AI correction; fault tolerance
  requirements at different autonomy levels; when autonomous correction meets reliability
  standards; design patterns for hybrid HITL/autonomous correction architectures.

Source type (academic): arXiv cs.SE + cs.AI + cs.SY
Source type (practitioner): IEEE/ACM systems engineering papers; deployment reliability
  frameworks (REQUIRED — mixed domain)

Queries:
  Q1: autonomy levels LLM deployed system fault tolerance HITL autonomous correction tradeoff
  Q2: AI system reliability autonomous correction human oversight requirement deployed production
  Q3: hybrid human-autonomous correction LLM deployed system fault tolerance design
  Q4: LLM deployment error correction HITL autonomous reliability systems engineering framework

Coverage-gap note: AI autonomy levels are less standardized than automotive/aviation;
  vocabulary may vary by deployment domain.
```

```
ANGLE 4: Automation complacency and trust calibration in HITL-assisted LLM deployment
===========
Vocabulary tradition: Organizational behavior / automation trust
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence of automation complacency in HITL LLM correction (humans stop
  checking autonomous outputs); operator trust calibration failures; mode confusion when
  switching between HITL and autonomous modes; organizational factors affecting correction
  quality.

Source type (academic): arXiv cs.HC + cs.AI; Human Factors journal
Source type (practitioner): Deployment reports on human oversight behavior in AI systems
  (REQUIRED — mixed domain)

Queries:
  Q1: automation complacency HITL LLM correction deployed system human trust calibration
  Q2: operator trust over-reliance autonomous LLM correction deployed system complacency
  Q3: human-automation teaming mode confusion LLM HITL autonomous correction switching
  Q4: automation trust calibration LLM deployed correction oversight quality empirical

Coverage-gap note: Automation complacency is well-studied in aviation/nuclear; application
  to LLM deployment may be sparse — cross-domain search may be needed.
```

```
ANGLE 5: Neither HITL nor autonomous correction is reliably superior — conditions dominate
===========
Vocabulary tradition: HCI / HITL (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Evidence that neither correction mode generally outperforms; conditions
  where task type, domain, or deployment context predicts outcome better than correction
  modality; null results; cases where both methods fail under the same conditions.

Source type (academic): arXiv cs.HC + cs.CL + cs.AI
Source type (practitioner): Deployment case studies (REQUIRED — mixed domain)

Queries:
  Q1: HITL autonomous correction LLM no general winner context dependent null result evidence
  Q2: human vs autonomous correction LLM deployed no significant difference condition dependent
  Q3: LLM correction mode comparison HITL autonomous neither wins conditions dominate outcome
  Q4: deployed LLM correction HITL autonomous comparison task dependent outcome null result

Coverage-gap note: "Neither wins" findings are often buried as nuanced conclusions within
  papers that have a primary positive claim; requires reading scope condition sections.
```

```
ANGLE 6: HITL introduces systematic human cognitive bias that degrades correction quality
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Human cognitive bias / bottleneck dynamics
  Generating from: cognitive bias, anchoring, inconsistent labeling, annotator disagreement,
  human error, availability heuristic, human bottleneck throughput
  Excluding from generation prompt: HITL effectiveness, scalable oversight, fault tolerance,
  automation trust, complacency

Angle type: Adversarial
Predicted research character: empirical
What to extract: Evidence that human correction introduces systematic cognitive biases that
  autonomous correction avoids; cases where human correctors perform worse than autonomous
  systems; annotator disagreement in HITL pipelines; human throughput bottleneck effects
  on system reliability; cases where removing HITL improved deployed system quality.

Source type (academic): arXiv cs.CL + cs.HC; psychology (cognitive bias in judgments)
Source type (practitioner): Labeling quality reports; HITL deployment post-mortems
  (REQUIRED — mixed domain)

Queries:
  Q1: human correction cognitive bias systematic error LLM deployed HITL degrades quality
  Q2: human annotator inconsistency bias LLM correction worse than autonomous systematic error
  Q3: HITL correction pipeline annotator disagreement cognitive bias deployed LLM degradation
  Q4: removing human correction improved LLM deployed system quality autonomous better evidence

Coverage-gap note: "HITL removal improved quality" is a framing unlikely to be the primary
  claim of a paper — may appear as a secondary finding in automation deployment studies.
```

```
ANGLE 7: Aviation and nuclear safety human factors applied to LLM HITL deployment design
===========
Vocabulary tradition: Aviation / nuclear safety — human factors engineering
Angle type: Cross-disciplinary
Predicted research character: gap
What to extract: Human factors research on automation surprise, mode confusion, and
  complacency in safety-critical systems; empirically validated principles for when humans
  should override autonomous systems; direct application or analogy to LLM HITL deployment.

Source type (academic): Semantic Scholar (human factors + AI); Human Factors journal;
  arXiv cs.HC + cs.SY
Source type (practitioner): FAA / NRC human factors guidelines; aviation safety reports
  (REQUIRED — mixed domain; these are practitioner-accessible regulatory documents)

Queries:
  Q1: aviation human factors automation surprise applied LLM HITL deployed system design
  Q2: nuclear safety human oversight autonomous system design principles LLM HITL analogy
  Q3: mode confusion automation complacency human factors applied AI LLM correction deployment
  Q4: safety-critical human factors oversight design principles LLM HITL correction application

Coverage-gap note: Aviation/nuclear safety literature is in specialized journals (Human
  Factors, Ergonomics, Safety Science) not indexed in arXiv; requires database pivot to
  specialized sources.
```

### GATE SUMMARY
```
GATE SUMMARY — L10
===================
Gate 1 — Completeness:
  Null-hypothesis angle present: PASS (Angle 5 — "no general winner," "null result,"
    "conditions dominate")
  Adversarial angle present: PASS (Angle 6 — ADVERSARIAL-FLAGGED + dispatch note)
  Cross-disciplinary angle present: PASS (Angle 7 — aviation/nuclear safety, not in intake)
  Source-type coverage: PASS (mixed domain — practitioner sources REQUIRED and included
    throughout; marked explicitly)
  Vocabulary-tradition map populated: PASS (4 traditions + cross-disciplinary)
  Result: PASS

Gate 2 — Distinctness:
  A1 (HITL effectiveness) vs. A2 (scalable oversight): BORDERLINE — both concern human
    oversight of deployed LLMs. Check: A1 = HCI framing, interface design, reviewer accuracy;
    A2 = AI safety, corrigibility, scalability. Query vocabularies differ (HITL/mixed-initiative
    vs. scalable oversight/corrigibility). PASS.
  A3 (systems engineering) vs. A4 (automation trust): BORDERLINE — both concern deployed
    system behavior. Check: A3 = fault tolerance, reliability, autonomy levels (engineering);
    A4 = complacency, trust calibration, human behavior (organizational). Different traditions.
    PASS.
  A1 vs. N1 (Angle 5): BORDERLINE — both in HITL territory. Check: A1 = "when HITL works";
    N1 = "when neither wins." Query vocabulary distinct ("effectiveness empirical" vs.
    "no general winner null result"). PASS.
  D1 vs. all: PASS — cognitive bias / annotator disagreement vocabulary not in A1-A4.
  C1 vs. A4: BORDERLINE — both reference automation complacency. Check: A4 = organizational
    behavior in LLM deployment; C1 = aviation/nuclear safety engineering. Different vocabulary
    pools (LLM deployment vs. FAA/NRC regulatory). PASS with note.
  Result: PASS (three borderlines noted)

Gate 3 — Launchability: PASS (all angles have concrete queries, no placeholders; non-arXiv
  sources named specifically for A4 and C1)
Gate 4 — Scoring prohibition: PASS

Overall verdict: PASS — dispatch ready

Flags:
  1. VOCABULARY SELF-REPORT FLAG
  2. A1/A2 and A3/A4 borderlines — human judgment on merges
  3. A4/C1 complacency overlap — human judgment on scope split
  4. Multiple angles require non-arXiv databases (Human Factors journal, FAA docs);
     researcher must plan database-specific searches separately
  5. Scalable oversight empirical evidence sparse — set lower saturation threshold for A2
  6. D1 deployment post-mortems are grey literature — plan grey-lit search strategy
```

---

## Cross-batch structural notes (L1–L10)

**Null-hypothesis generation failure rate:** 1 of 10 (L9 — omitted during initial generation,
caught by gate-summary pass). Rate matches documented LLM failure mode (null-hypothesis is
the angle least likely to generate spontaneously). Structural gate caught it.

**Cross-disciplinary tradition diversity:** 10 distinct traditions across L1–L10: control
theory, organizational learning/Argyris, proof theory/Lean, experiential learning/Kolb,
epistemology/coherentism, classical IR/Rocchio, Toulmin argumentation, computational
journalism, clinical decision-making, aviation/nuclear safety. No tradition reused.

**Adversarial angle vocabulary:** All 10 adversarial angles used starting vocabulary
non-overlapping with their confirmatory angles: sycophancy/approval-seeking, ground-truth
execution, error compounding, overconfidence/rationalization, circular reasoning, retrieval
noise, groupthink convergence, hallucination confidence amplification, statistical artifact,
human cognitive bias.

**Source B unavailability:** MODERATE severity applied to all 10. VOCABULARY SELF-REPORT FLAG
present throughout. No tasks halted. Researcher should run Source B probes before treating
tradition coverage as final.

**Topic clustering risk:** All 10 topics share the parent domain (LLM self-correction).
Cross-task vocabulary overlap in confirmatory traditions is expected and structurally
correct — researchers running all 10 lists will retrieve overlapping literature. This is
a feature of the thematically-clustered batch, not a within-task quality failure.

