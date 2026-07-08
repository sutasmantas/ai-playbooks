# Angle-Gen-Kit Output: In-Context Learning in Language Models
## Condition B | Input 18

**VOCABULARY SELF-REPORT FLAG:** Source B (web search / survey-paper probe) was unavailable at execution time (subagent context). All vocabulary traditions below were enumerated by LLM only. External validation via survey-paper probe is recommended before accepting this tradition list as complete. Severity: MODERATE — Source A + Source C together identified ≥6 distinct vocabulary traditions; proceeding per intake.md Step 5 fallback protocol.

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: How and why in-context learning works in language models — mechanisms,
       theoretical explanations, and conditions of generalization

Anchor vocabulary: "in-context learning" (NLP/ML tradition), "language models"
                   (ML-systems tradition)

Candidate vocabulary traditions:
  1. NLP / ML empirical evaluation — ICL, few-shot learning, demonstrations,
     prompt-based learning, GPT, foundation models, benchmark evaluation
  2. Meta-learning / learning to learn — MAML, task-conditioned adaptation,
     few-shot meta-learner, algorithm distillation, gradient-free adaptation
  3. Mechanistic interpretability — induction heads, attention circuits,
     transformer circuits, in-context algorithms, copying behavior
  4. Bayesian / probabilistic ML — implicit Bayesian inference, posterior update,
     task inference, hierarchical Bayesian, implicit computation
  5. Cognitive science / learning theory — analogical reasoning, concept learning,
     working memory, few-shot human learning, pattern recognition
  6. Statistical learning theory — generalization bounds, sample complexity,
     PAC learning, learnability, VC dimension

  NOTE: All traditions listed here are LLM self-reported. VOCABULARY SELF-REPORT
  FLAG applies (see top of document).

Question type: EXPLORATORY
  Basis: user asks "how and why it works" — a mechanistic understanding question
  with no explicit comparison or intervention-outcome structure in the prompt.
  Default to EXPLORATORY per intake.md Step 3 decision rule.

Scope markers: None stated.
  Inferred scope: general ICL mechanisms and explanations; not restricted to any
  model family, task type, or modality; both empirical findings and theoretical
  accounts are in scope.

Known exclusions: None stated.

Domain maturity estimate: mixed (academic-heavy primary, practitioner-present secondary)
  Basis: anchor vocabulary is academic; ICL has substantial arXiv and NeurIPS/
  ICML/ACL/ICLR literature (academic-heavy signal); however, practitioners
  actively engage with few-shot prompting / prompt engineering under different
  vocabulary (practitioner-present signal). Classify as mixed per intake.md Step 4.

Survey paper status: UNAVAILABLE — Source B not accessible in subagent context.
  Vocabulary-discovery pass recommended. Absent-term signal (Source C) applied
  below as partial compensation.

Source B status: UNAVAILABLE — MODERATE — Source A + Source C produced ≥2 distinct
  vocabulary traditions (6 identified); proceeding with VOCABULARY SELF-REPORT FLAG.

Source C — Absent-term signal (terms user did NOT use but literature uses):
  - "few-shot" — the most common alternative vocabulary for ICL in the literature
  - "demonstrations" — how the NLP literature refers to in-context examples
  - "induction heads" — central mechanistic interpretability concept for ICL
  - "meta-learning" — foundational framing from an adjacent ML tradition
  - "Bayesian" — major theoretical interpretation stream not named by user
  - "implicit gradient descent" — prominent theoretical account of ICL mechanism
  Absence of these terms does not imply out-of-scope; it signals entry from a
  high-level framing rather than any particular sub-tradition.
```

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: NLP / ML empirical evaluation
  Representative terms: ICL, few-shot learning, demonstrations, benchmark, GPT,
                        prompt-based learning
  Planned angle slot(s): Confirmatory A1 (empirical characterization),
                         Confirmatory A6 (prompt sensitivity / calibration facet),
                         Confirmatory A9 (chain-of-thought facet),
                         Confirmatory A10 (retrieval-augmented ICL facet)
  Note: Multiple distinct facets within this broad tradition; each assigned a
        more granular tradition label to pass Gate 2 distinctness check.
  Gap flag: No — multiple slots allocated

Tradition 2: Meta-learning / learning to learn
  Representative terms: MAML, few-shot meta-learning, algorithm distillation,
                        task-conditioned adaptation, learning to learn
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: Mechanistic interpretability / circuit analysis
  Representative terms: induction heads, attention circuits, transformer circuits,
                        in-context algorithms, copying behavior
  Planned angle slot(s): Confirmatory A3 (circuits facet),
                         Confirmatory A11 (implicit gradient descent facet)
  Note: A3 and A11 are mechanistically adjacent but address different research
        questions (circuit-level "what components" vs. algorithmic "what computation").
        Distinct tradition labels assigned; Boolean-connective test passes.
  Gap flag: No

Tradition 4: Bayesian / probabilistic ML
  Representative terms: implicit Bayesian inference, posterior update, task
                        inference, prior, hierarchical Bayesian
  Planned angle slot: Confirmatory A4
  Gap flag: No

Tradition 5: Cognitive science / learning theory
  Representative terms: analogical reasoning, concept learning, working memory,
                        few-shot human learning, pattern recognition
  Planned angle slot: Confirmatory A13
  Note: This tradition WAS in the intake brief — angle A13 is a confirmatory slot,
        not a cross-disciplinary slot (which requires a tradition NOT in the brief).
  Gap flag: No

Tradition 6: Statistical learning theory
  Representative terms: generalization bounds, sample complexity, PAC learning,
                        learnability, VC dimension
  Planned angle slot: Confirmatory A5
  Gap flag: No

Additional traditions identified during generation (not in intake brief):
  Tradition 7: Scaling laws / emergent capabilities — scaling, phase transition,
               emergence, grokking (distinct from empirical evaluation framing)
               Planned angle slot: Confirmatory A7
  Tradition 8: Instruction tuning / fine-tuning analysis — FLAN, InstructGPT,
               SFT, instruction following (distinct ML research sub-community)
               Planned angle slot: Confirmatory A8
  Tradition 9: Chain-of-thought / multi-step reasoning — CoT, scratchpad,
               intermediate reasoning (distinct research thread within NLP)
               Planned angle slot: Confirmatory A9
  Tradition 10: Retrieval-augmented ICL — dynamic example selection, KATE,
                kNN retrieval (distinct engineering + ML research thread)
                Planned angle slot: Confirmatory A10
  Tradition 11: Implicit gradient descent / transformer optimization theory —
                attention as GD, dual form, weight construction (theoretical ML)
                Planned angle slot: Confirmatory A11
  Tradition 12: Demonstration role / ICL mechanistic debate — task recognition vs.
                task learning, what ICL learns (specific debate thread in NLP/ML)
                Planned angle slot: Confirmatory A12
  Tradition 13: Pretraining data analysis / data-centric ML — pretraining corpus
                composition, multitask data, data diversity effects on ICL
                Planned angle slot: Confirmatory A14

Traditions NOT yet represented in the planned confirmatory list:
  None — all identified traditions have at least one planned angle slot.

Null-hypothesis slot: N1 (assigned)
  Framing: What evidence would show ICL does NOT work, does NOT generalize, or
           does NOT hold under scope conditions?

Adversarial slot: D1 (assigned)
  Starting tradition: Computational learning theory (formal complexity,
                      expressiveness limits)
  Explicitly EXCLUDED from D1 generation: all NLP/ML empirical vocabulary,
  mechanistic interpretability vocabulary, Bayesian ML vocabulary.
  Basis: Formal learnability analysis is structurally separate from the
         confirmatory traditions and will surface impossibility results,
         expressiveness limits, and hardness arguments that confirmatory
         angles are structurally unlikely to retrieve.

Cross-disciplinary slot 1 (C1): Neuroscience / memory systems
  Basis: NOT in intake brief. Associative memory research (modern Hopfield
         networks, fast-weight programmers, hippocampal rapid binding) provides
         a biologically-grounded parallel to ICL that is structurally distinct
         from cognitive science. Uses vocabulary (Hopfield energy, fast weight
         programmers, pattern completion) not present in any confirmatory tradition.

Cross-disciplinary slot 2 (C2): Program synthesis / formal computation
  Basis: NOT in intake brief. ICL has been analyzed as models implicitly learning
         to "execute" programs or synthesize algorithms — the program synthesis
         framing (inductive program synthesis, algorithm induction, Turing
         completeness of transformers) uses vocabulary absent from all NLP/ML
         traditions in the intake brief.

Coverage justification for angle count: 6+ distinct vocabulary traditions
  identified at intake; topic spans NLP, ML theory, cognitive science, and formal
  computation. Per angle-generation.md "Hard input" note: 20–30 angles is
  appropriate; 18 angles are generated here with explicit justification.
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1  (Confirmatory — NLP/ML empirical benchmarking)
Slot A2  (Confirmatory — Meta-learning / learning to learn)
Slot A3  (Confirmatory — Mechanistic interpretability / circuit analysis)
Slot A4  (Confirmatory — Bayesian / probabilistic ML)
Slot A5  (Confirmatory — Statistical generalization theory)
Slot A6  (Confirmatory — Prompt sensitivity / calibration research)
Slot A7  (Confirmatory — Scaling laws / emergent capabilities)
Slot A8  (Confirmatory — Instruction tuning / fine-tuning analysis)
Slot A9  (Confirmatory — Chain-of-thought / multi-step reasoning)
Slot A10 (Confirmatory — Retrieval-augmented ICL)
Slot A11 (Confirmatory — Implicit gradient descent / transformer optimization theory)
Slot A12 (Confirmatory — Demonstration role / ICL mechanistic debate)
Slot A13 (Confirmatory — Cognitive science / analogical reasoning)
Slot A14 (Confirmatory — Pretraining data analysis / data-centric ML)
Slot N1  (Null-hypothesis — assigned)
Slot D1  (Adversarial — Computational learning theory; NOT FROM: NLP/ML empirical,
          mechanistic interpretability, Bayesian ML, statistical learning theory,
          meta-learning, cognitive science)
Slot C1  (Cross-disciplinary — Neuroscience / memory systems)
Slot C2  (Cross-disciplinary — Program synthesis / formal computation)
```

---

## ANGLE LIST

---

### ANGLE A1: Empirical Characterization of In-Context Learning
```
Vocabulary tradition: NLP / ML empirical evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Effect sizes, task-type breakdowns, scaling behavior of ICL
  accuracy, empirical comparisons between ICL and fine-tuning, conditions under
  which ICL matches or fails to match fine-tuned baselines

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): ACL Anthology (workshop papers and system descriptions
  reporting practical ICL behavior)

Queries:
  Q1: "in-context learning" large language models empirical evaluation benchmark
      tasks 2022 2023 2024
  Q2: few-shot prompting GPT language model accuracy comparison fine-tuning
      demonstrations
  Q3: in-context learning performance factors number shots task type systematic
      evaluation

Coverage-gap note: Queries above target general characterization; cross-lingual
  and multilingual ICL is a sub-facet not covered here — would require a dedicated
  angle with multilingual vocabulary.
```

---

### ANGLE A2: In-Context Learning as Meta-Learning / Algorithm Distillation
```
Vocabulary tradition: Meta-learning / learning to learn
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Theoretical accounts of ICL as a meta-learner; empirical tests
  of the meta-learning hypothesis; algorithm distillation as a training procedure;
  scope conditions under which the meta-learning framing holds

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub — algorithm distillation implementations
  (search "algorithm distillation" OR "in-context RL" most-starred)

Queries:
  Q1: in-context learning meta-learning transformers task-conditioned adaptation
      mechanism
  Q2: algorithm distillation in-context reinforcement learning transformer
      distillation pretraining
  Q3: transformers as meta-learners few-shot gradient-free adaptation learning
      to learn 2022 2023

Coverage-gap note: The gradient-based meta-learning (MAML) interpretation is
  covered; implicit gradient descent (the optimization-equivalence claim) is
  separated into A11 as a distinct theoretical framing.
```

---

### ANGLE A3: Induction Heads and Transformer Circuit Analysis
```
Vocabulary tradition: Mechanistic interpretability / circuit analysis
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Identification of induction heads, their role in copying and
  pattern completion, circuit-level evidence for in-context behavior, ablation
  studies removing induction heads, evidence for the circuit hypothesis

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): Anthropic interpretability blog posts; EleutherAI
  research notes (practitioners who publish circuit-analysis work in blog form)

Queries:
  Q1: induction heads in-context learning transformer circuits attention
      mechanistic 2022 2023
  Q2: "in-context learning" mechanistic interpretability attention head circuits
      ablation
  Q3: transformer in-context algorithms copying behavior prefix completion
      induction circuit

Coverage-gap note: This angle targets the "what components" question. The "what
  computation" question (attention as gradient descent) is in A11. The boundary
  between A3 and A11 is the level of analysis: circuits vs. algorithms.
```

---

### ANGLE A4: In-Context Learning as Implicit Bayesian Inference
```
Vocabulary tradition: Bayesian / probabilistic ML
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Bayesian formulations of ICL, empirical tests of the Bayesian
  hypothesis, comparison of implicit posterior updates in ICL vs. explicit
  Bayesian inference, conditions under which the Bayesian account holds or breaks

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): deprioritized — this is a theoretical account with
  limited practitioner production; GitHub implementations of Bayesian ICL
  analysis are sparse

Queries:
  Q1: in-context learning Bayesian inference implicit posterior update language
      model task inference
  Q2: "in-context learning" prior posterior Bayesian computation transformer
      probabilistic 2022 2023
  Q3: large language models implicit Bayesian task inference hierarchical prior
      few-shot

Coverage-gap note: The Bayesian framing here covers the task-inference
  (prior over tasks) interpretation. A separate Bayesian angle on the token-
  prediction level (next-token Bayesian prediction) is not covered here.
```

---

### ANGLE A5: Theoretical Generalization Bounds for In-Context Learning
```
Vocabulary tradition: Statistical learning theory
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Formal generalization bounds for ICL, sample complexity results
  for few-shot learning, PAC-learning analysis of transformer ICL, theoretical
  conditions for ICL generalization, failure cases predicted by theory

Source type (academic): arXiv cs.LG (theory papers); proceedings of COLT,
  NeurIPS theory track
Source type (practitioner): deprioritized — theoretical; minimal practitioner
  production

Queries:
  Q1: in-context learning generalization bounds sample complexity statistical
      theory transformer
  Q2: few-shot learning PAC learning theoretical analysis transformer learnability
  Q3: in-context learning theory VC dimension hypothesis class transformer formal
      analysis 2022 2023 2024

Coverage-gap note: Covers formal learning-theoretic generalization. Computational
  complexity / expressiveness limits (what transformers CANNOT compute) are
  separated into D1 (adversarial) as they come from a distinct community with
  a different research question.
```

---

### ANGLE A6: Prompt Sensitivity, Label Calibration, and Demonstration Format Effects
```
Vocabulary tradition: Prompt sensitivity / calibration research
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Quantified sensitivity of ICL to demonstration order, label
  choice, surface format; calibration methods for ICL; effect size of format
  manipulations; whether format sensitivity undermines ICL reliability claims

Source type (academic): arXiv cs.CL
Source type (practitioner): HuggingFace blog posts on prompt sensitivity; GitHub
  issue threads in LLM evaluation frameworks (BIG-bench, EleutherAI lm-evaluation-
  harness) documenting format sensitivity findings

Queries:
  Q1: in-context learning sensitivity demonstration order label format calibration
      instability 2021 2022 2023
  Q2: few-shot prompting ordering effects label noise sensitivity GPT instability
      evaluation
  Q3: language model in-context learning calibration recalibration demonstration
      selection surface-form

Coverage-gap note: Covers sensitivity to surface-level format. Sensitivity to
  semantic content (what the examples mean, whether they are relevant to the
  task) is a different facet not fully covered here.
```

---

### ANGLE A7: Emergent ICL Abilities and Scaling Laws
```
Vocabulary tradition: Scaling laws / emergent capabilities
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence for phase transitions in ICL ability with scale,
  emergence thresholds, scaling law fits for few-shot performance, debates
  about whether emergence is an artifact of evaluation metrics

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): Google Research blog posts; DeepMind technical
  reports documenting emergent abilities findings (grey literature with high
  practitioner relevance)

Queries:
  Q1: emergent abilities large language models few-shot in-context learning
      scaling 2022 2023 2024
  Q2: scaling laws in-context learning capability emergence phase transition
      model size
  Q3: language model scale few-shot grokking emergence sudden capability
      appearance 2022 2023

Coverage-gap note: The scaling law framing covers the size dimension. The
  data-mix / pretraining composition angle (what data causes ICL to emerge,
  not just how much scale) is separated into A14.
```

---

### ANGLE A8: Instruction Tuning vs. In-Context Learning: Interaction and Comparison
```
Vocabulary tradition: Instruction tuning / fine-tuning analysis
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Empirical comparisons of ICL and instruction-tuned models on
  few-shot tasks; how instruction tuning changes the ICL mechanism; whether
  FLAN/InstructGPT-style fine-tuning replaces or augments ICL; zero-shot gains
  from instruction tuning that substitute for few-shot ICL

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub repositories for FLAN, InstructGPT, T0
  (issue threads discuss practitioner understanding of ICL vs. instruction
  tuning)

Queries:
  Q1: instruction tuning in-context learning FLAN comparison few-shot zero-shot
      mechanism
  Q2: InstructGPT supervised fine-tuning few-shot prompting interaction ablation
      2022 2023
  Q3: instruction following fine-tuned language model zero-shot few-shot ICL
      comparison empirical

Coverage-gap note: Covers the SFT instruction-tuning tradition. RLHF (reward
  model fine-tuning) as a distinct mechanism affecting ICL behavior is not
  covered here.
```

---

### ANGLE A9: Chain-of-Thought Prompting as Structured In-Context Learning
```
Vocabulary tradition: Chain-of-thought / multi-step reasoning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence for CoT as an extension of ICL; when CoT improves
  over standard ICL; mechanistic accounts of why intermediate steps help;
  theoretical analyses of CoT expressiveness; failure modes of CoT

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): HuggingFace blog; AI safety researcher blogs where
  CoT is analyzed from a reasoning-transparency perspective

Queries:
  Q1: chain-of-thought prompting in-context learning reasoning mechanism
      multi-step 2022 2023 2024
  Q2: scratchpad intermediate reasoning steps language model in-context
      decomposition
  Q3: "chain of thought" few-shot prompting emergent reasoning transformer
      expressiveness mechanism

Coverage-gap note: Covers standard CoT. Self-consistency, tree-of-thought, and
  program-of-thought variants are sub-facets not fully covered here.
```

---

### ANGLE A10: Retrieval-Augmented and Dynamic Example Selection for ICL
```
Vocabulary tradition: Retrieval-augmented ICL / dynamic example selection
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for selecting demonstrations, evidence that selection
  quality matters, kNN / similarity-based retrieval effects, comparison of
  retrieved vs. random examples, Oracle selection upper bounds

Source type (academic): arXiv cs.CL
Source type (practitioner): GitHub — KATE, LangChain few-shot selector,
  similar tools; README vocabulary reveals practitioner framing of the selection
  problem

Queries:
  Q1: retrieval augmented in-context learning example selection similarity few-shot
      performance
  Q2: KATE kNN-augmented in-context learning nearest neighbor demonstration
      retrieval 2022 2023
  Q3: in-context learning demonstration selection dynamic retrieval oracle
      comparison random 2022 2023 2024

Coverage-gap note: Covers kNN / similarity retrieval. Active learning approaches
  to example selection (iterative refinement of the demonstration set) are a
  sub-facet not covered here.
```

---

### ANGLE A11: Transformers Implementing Gradient Descent in the Forward Pass
```
Vocabulary tradition: Implicit gradient descent / transformer optimization theory
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Formal equivalence proofs between attention and gradient descent
  steps, empirical evidence for the equivalence, construction of weights
  implementing GD in-context, conditions under which the GD account holds or
  breaks, dual-form attention analysis

Source type (academic): arXiv cs.LG (theory; also NeurIPS/ICML proceedings)
Source type (practitioner): deprioritized — theoretical; GitHub implementations
  of GD-as-ICL analyses are sparse but exist (search "in-context gradient
  descent" most-starred)

Queries:
  Q1: transformers learn in-context gradient descent attention dual form
      equivalence 2022 2023
  Q2: in-context learning implicit gradient descent forward pass weight
      construction transformer
  Q3: attention mechanism gradient descent update in-context meta-gradient
      transformer theory

Coverage-gap note: Covers single-layer / shallow equivalence results.
  Multi-layer or deep transformer equivalence analysis is underrepresented in
  current queries — would require extending Q1 with "deep" or "multi-layer."
```

---

### ANGLE A12: What Does ICL Actually Learn? The Task-Recognition vs. Task-Learning Debate
```
Vocabulary tradition: Demonstration role / ICL mechanistic debate
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence for and against "task recognition" (ICL retrieves a
  memorized task from pretraining) vs. "task learning" (ICL updates
  representations at inference time); papers that test the role of ground-truth
  labels in demonstrations; the "rethinking demonstrations" literature

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): ACL Anthology (this debate is concentrated in
  ACL/EMNLP proceedings)

Queries:
  Q1: rethinking role demonstrations in-context learning task recognition ground
      truth labels 2022 2023
  Q2: in-context learning label information task specification gold labels random
      labels ablation
  Q3: what in-context learning learns task inference format recognition latent
      concept empirical 2022 2023 2024

Coverage-gap note: Covers the discrete labels debate. Whether ICL "learns"
  continuous representations vs. retrieves templates is a further sub-debate
  not fully covered.
```

---

### ANGLE A13: Human Analogues to Few-Shot Learning — Cognitive Science Perspective
```
Vocabulary tradition: Cognitive science / analogical reasoning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Cognitive mechanisms of few-shot concept learning in humans,
  analogical reasoning frameworks, comparison of LLM ICL behavior to human
  learning curves, whether human and model mechanisms are structurally similar
  or superficially analogous

Source type (academic): Semantic Scholar (for cognitive science + AI cross-
  disciplinary papers); Cognition, Psychological Review, CogSci conference
  proceedings
Source type (practitioner): deprioritized — theoretical; minimal practitioner
  production

Queries:
  Q1: few-shot learning analogical reasoning cognitive science human comparison
      concept learning
  Q2: in-context learning human cognitive analogues fast learning working memory
      binding
  Q3: concept learning few examples humans cognitive mechanisms language model
      structural comparison

Coverage-gap note: Covers general analogical and concept learning. Formal
  process models from cognitive science (Bayesian program induction,
  MCMC models of human generalization) are a sub-tradition that would require
  more specific vocabulary.
```

---

### ANGLE A14: Pretraining Data Composition and Its Effect on ICL Capabilities
```
Vocabulary tradition: Pretraining data analysis / data-centric ML
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How pretraining corpus composition (data diversity, task mix,
  format variety) affects ICL capability; ablation studies manipulating
  pretraining data; multi-task pretraining as an ICL enabler; data mix scaling
  effects on few-shot performance

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): HuggingFace dataset documentation; GitHub repos for
  large pretraining datasets (The Pile, C4, Dolma) — issue threads reveal
  practitioner understanding of data-ICL links

Queries:
  Q1: pretraining data composition in-context learning ability emergence
      multitask diversity
  Q2: language model pretraining corpus data mixture few-shot capability scaling
      ablation
  Q3: in-context learning pretraining multitask data format variety influence
      2022 2023 2024

Coverage-gap note: Covers pretraining composition effects. Post-training data
  effects (instruction tuning data composition on ICL) are separated into A8.
```

---

### ANGLE N1: When In-Context Learning Fails — Null Results and Scope Limits
```
Vocabulary tradition: NLP / ML empirical (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Documented failure modes of ICL, tasks where ICL does not
  generalize, negative results, robustness breakdowns, cases where ICL
  underperforms fine-tuning by large margins, out-of-distribution limits,
  replication failures, contradictions between studies

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub issue threads in LLM evaluation frameworks
  (BIG-bench, lm-evaluation-harness, HELM) — practitioners document ICL failures
  before researchers write papers about them

Queries:
  Q1: in-context learning failure cases limitations does not generalize negative
      results robustness 2022 2023 2024
  Q2: few-shot prompting out-of-distribution breakdown adversarial failure
      catastrophic inconsistency
  Q3: in-context learning unreliable sensitivity failure regime task type
      benchmark

Coverage-gap note: These queries target general failure modes. Domain-specific
  failures (e.g., mathematical reasoning, long-context ICL, low-resource
  language ICL) are sub-facets that would require targeted vocabulary beyond
  these queries.
```

---

### ANGLE D1: Formal Expressiveness and Learnability Limits of Transformer ICL
**[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]**

```
Vocabulary tradition: Computational learning theory (formal complexity)
Angle type: Adversarial
  Starting vocabulary: formal complexity, learnability, expressiveness, computational
    limits, impossibility results, Turing completeness, circuit complexity
  Explicitly EXCLUDED from generation: NLP empirical vocabulary (ICL, few-shot,
    demonstrations), mechanistic interpretability vocabulary (induction heads,
    circuits), Bayesian ML vocabulary (posterior, prior), meta-learning vocabulary
    (MAML, task-conditioned)
Predicted research character: empirical (in the sense of formal proofs)
What to extract: Formal limits on what transformers can learn in-context;
  impossibility results; hardness arguments; function classes transformers
  cannot express; theoretical conditions under which ICL must fail; formal
  separations between ICL and fine-tuning expressiveness

Source type (academic): arXiv cs.LG + cs.CC (computational complexity);
  COLT, FOCS, STOC proceedings for formal results
Source type (practitioner): deprioritized — theoretical; no practitioner
  production

Queries:
  Q1: transformer expressiveness formal learnability computational complexity
      limits functions 2022 2023 2024
  Q2: what functions transformers cannot learn in-context computational limits
      impossibility formal
  Q3: in-context learning impossibility results formal bounds Turing completeness
      hardness

Coverage-gap note: This angle approaches from formal computation theory — what
  transformers provably cannot do. The complement (what they provably CAN do
  via Turing-completeness results) is present in C2 (program synthesis cross-
  disciplinary). Running D1 before reading confirmatory angles is the dispatch
  requirement.
```

---

### ANGLE C1: Associative Memory, Hopfield Networks, and Fast-Weight Programmers
```
Vocabulary tradition: Neuroscience / memory systems
  [CROSS-DISCIPLINARY: this tradition was NOT in the intake brief]
  Basis for selection: Modern Hopfield networks and fast-weight programmers
    (Schmidhuber 1992; Ramsauer et al. 2020) provide a biologically-grounded
    memory retrieval account of ICL. This literature uses vocabulary (energy
    function, retrieval dynamics, storage capacity, Hopfield energy, fast weights)
    absent from all NLP/ML traditions in the intake brief.
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: Formal connections between attention mechanisms and Hopfield
  energy minimization; fast-weight programmer framing of ICL; hippocampal binding
  and prefrontal memory as biological analogues; storage capacity limits of
  attention as associative memory

Source type (academic): arXiv cs.LG + q-bio.NC; Journal of Neuroscience;
  Neural Computation (for biologically-inspired memory models)
Source type (practitioner): deprioritized — this is a formal theoretical
  framing with limited practitioner uptake; GitHub repos for modern Hopfield
  network implementations exist but are research-grade

Queries:
  Q1: modern Hopfield networks associative memory in-context attention
      energy function retrieval
  Q2: fast weight programmers neural network in-context adaptation rapid
      binding memory 1991 2020 2021
  Q3: attention mechanism associative memory in-context learning Hopfield
      equivalence storage capacity

Coverage-gap note: Covers the modern Hopfield / fast-weight framing.
  Hippocampal rapid-learning analogues (biological fast binding, CLS theory)
  are represented in Q3 but would benefit from a dedicated PubMed search
  with MeSH terms (hippocampus, rapid binding, episodic memory) for deeper
  coverage.
```

---

### ANGLE C2: In-Context Learning as Implicit Program Synthesis
```
Vocabulary tradition: Program synthesis / formal computation
  [CROSS-DISCIPLINARY: this tradition was NOT in the intake brief]
  Basis for selection: The program synthesis community studies "inductive
    program induction" — learning programs from input-output examples, which
    is structurally isomorphic to ICL. The vocabulary (inductive program
    synthesis, algorithm induction, input-output specification, program
    execution, DreamCoder) is absent from all NLP/ML intake traditions and
    would retrieve a structurally distinct literature.
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: Framings of ICL as algorithm or program induction; evidence
  that transformers learn to "execute" programs from demonstrations; program
  synthesis accounts of few-shot generalization; Turing-completeness results
  for transformers in the context of program induction; DreamCoder / library
  learning as a computational analogue

Source type (academic): arXiv cs.LG + cs.PL (programming languages);
  ICML/NeurIPS program synthesis track
Source type (practitioner): GitHub — program synthesis implementations that
  overlap with LLM few-shot; DreamCoder repository (MIT); most-starred
  repositories under "inductive program synthesis"

Queries:
  Q1: transformers program synthesis in-context algorithm induction execution
      formal 2021 2022 2023
  Q2: in-context learning implicit algorithm synthesis induction Turing complete
      program
  Q3: language models inductive program induction input-output specification
      few-shot generalization computation

Coverage-gap note: Covers the program induction framing. DreamCoder / library
  learning as an architecture for compositional few-shot generalization is
  a sub-facet that may be underrepresented without explicit "library learning"
  vocabulary.
```

---

## GATE SUMMARY

```
GATE SUMMARY
============
Gate 1 — Completeness:
  [PASS]
  Null-hypothesis angle present: YES — N1 contains "failure cases," "does not
    generalize," "negative results," "unreliable," "breakdown" vocabulary.
    Query set explicitly uses disconfirming framing. ✓
  Adversarial angle present: YES — D1 is labeled ADVERSARIAL-FLAGGED with full
    dispatch note. ✓
  Cross-disciplinary angle present: YES — C1 (Neuroscience / memory systems) and
    C2 (Program synthesis / formal computation) both target traditions NOT in the
    intake brief. ✓
  Source-type coverage: PASS — domain classified as mixed; practitioner sources
    assigned to A1 (ACL Anthology), A2 (GitHub), A6 (HuggingFace blog, GitHub),
    A7 (Google Research blog), A8 (GitHub), A10 (GitHub), A14 (HuggingFace,
    GitHub). Multiple angles with practitioner sources. ✓
  Vocabulary-tradition map populated: YES — 18 distinct tradition labels across
    18 angles, all from named traditions in the coverage map. ✓

Gate 2 — Distinctness:
  [PASS — with one flag]
  Vocabulary-tradition distinctness: All 18 angles have distinct tradition labels.
    No two non-null/non-adversarial angles share a label. ✓
  Boolean-connective test — pairs requiring explicit check:
    A3 (Mechanistic interpretability) vs. A11 (Implicit gradient descent):
      A3 queries use "induction heads," "circuits," "copying behavior."
      A11 queries use "gradient descent," "dual form," "weight construction."
      OR retrieval would NOT return substantially the same documents: PASS ✓
    A12 (Demonstration role debate) vs. A6 (Prompt sensitivity):
      A12 queries use "task recognition," "ground truth labels," "latent concept."
      A6 queries use "ordering effects," "calibration," "surface-form."
      OR retrieval would NOT return substantially the same documents: PASS ✓
    A5 (Statistical learning theory) vs. D1 (Computational learning theory):
      A5 queries use "generalization bounds," "sample complexity," "PAC learning."
      D1 queries use "expressiveness," "computational complexity," "impossibility."
      These target different paper populations. PASS ✓
  FLAG: VOCABULARY SELF-REPORT FLAG — all traditions were enumerated by LLM only;
    external validation via survey-paper probe is recommended before accepting the
    tradition check as complete. This is a known structural limitation per
    angle-gen-kit weakness_register.md Weakness 1. Does not block dispatch but
    should be noted before treating the tradition list as exhaustive.

Gate 3 — Launchability:
  [PASS]
  All 18 angles have at least one concrete, runnable query string in their
  Queries: fields. ✓
  No placeholder vocabulary (no "TBD," "to be determined," "[fill in]") found
  in any query string. ✓
  Source type (academic) and Source type (practitioner) fields are both named
  in all 18 angles. Where practitioner sources are deprioritized, an explicit
  "deprioritized" statement with rationale is given. ✓
  Platform assignments follow platform-calibration.md rules:
    - arXiv assignments use cs.CL + cs.LG (NOT cs.AI alone) per calibration
      table for LLM/NLP tasks ✓
    - Semantic Scholar used only for citation network / cross-disciplinary
      discovery, not as primary academic source alongside arXiv ✓
    - GitHub quality gate noted in angles where GitHub is the practitioner
      source ✓

Gate 4 — Scoring prohibition:
  [PASS]
  No angles contain "this is the strongest angle," "this is likely most useful,"
  "this appears most novel," or equivalent LLM self-evaluation language. ✓
  Angle ordering follows structural criteria (confirmatory → null-hypothesis →
  adversarial → cross-disciplinary), not perceived salience. ✓

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG: All 18 traditions enumerated by LLM. A survey-
     paper probe (e.g., query: "in-context learning survey 2023 2024 2025" on
     Semantic Scholar) should be run before treating this tradition list as
     exhaustive. Any title vocabulary in survey papers not matching the 18
     traditions above is a gap signal.
  2. ADVERSARIAL DISPATCH NOTE: Angle D1 must be dispatched in a separate
     research context with no prior access to confirmatory angle results
     (A1–A14, N1, C1, C2). The ADVERSARIAL-FLAGGED label is necessary but not
     sufficient — the downstream agent must honor it.
  3. CROSS-DISCIPLINARY DEPTH NOTE: Angle C1 (Hopfield / neuroscience) would
     benefit from a PubMed search using MeSH terms alongside the arXiv queries
     listed. Current queries are arXiv-centric and may miss the biological
     memory literature.
  4. SMALL-LITERATURE NOTE: Does not apply here — ICL is a large, active
     literature. Boolean-connective false-positive synonymy for small corpora
     is not the risk at this topic.
```

---

## SELF-CHECK (CLAUDE.md Rule 6 — after-every-task)

**What is missing, incomplete, or questionable in this output:**

1. **Source B gap not compensated:** The vocabulary-discovery pass recommended
   by intake.md Step 5 has not run. Traditions 9–14 (CoT, retrieval-augmented
   ICL, implicit GD, demonstration role debate, cognitive science, pretraining
   data) were added during generation via LLM enumeration — a survey paper might
   surface additional traditions (e.g., continual learning / plasticity research
   as a tradition with its own vocabulary that would frame ICL differently).

2. **Instruction tuning and ICL interaction angle (A8) could overlap with A12:**
   If the downstream research agent searches for InstructGPT + few-shot + task
   recognition, some papers retrieved by A8 will also appear in A12. This is
   acceptable (both angles are valid; the overlap is a sub-facet, not angle
   synonymy) but the agent running retrieval should be aware.

3. **Cross-disciplinary C1 PubMed gap:** Angle C1 (neuroscience / memory) is
   currently arXiv-centric. A complete coverage would add a PubMed search
   pass with MeSH-translated vocabulary. This is logged as a known gap in the
   C1 Coverage-gap note.

4. **Multimodal ICL not covered:** Few-shot in-context learning in vision-
   language models is a sub-tradition with its own literature (Flamingo, BLIP-2)
   that none of the 18 angles target. If the user's scope includes multimodal
   models, this would require an additional angle.

These are scope limitations, not structural failures. The angle list as written
passes all four quality gates and is dispatch-ready for a text-modality ICL
literature review.
