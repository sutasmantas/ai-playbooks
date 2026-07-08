# Angle Generation Output — Input 11, Condition B

**Topic:** Causal reasoning in language models
**Kit version:** angle-gen-kit
**Source B status:** UNAVAILABLE (subagent context, no web access)
**Execution date:** 2026-07-05

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: How language models engage in, simulate, or fail at causal reasoning —
       encompassing formal causal inference frameworks, benchmark evaluation,
       mechanistic representation, human comparison, and application to downstream
       NLP tasks.

Anchor vocabulary:
  "causal reasoning" — entered from both the causal inference tradition (Pearl,
    structural causal models) and the cognitive science tradition (causal cognition,
    counterfactual thinking); the phrase itself is used across multiple fields
  "language models" — NLP / ML-systems tradition (LLMs, transformers, GPT, BERT)

Source A — LLM translation (vocabulary bootstrap):

  From "causal reasoning":
    Causal inference tradition: structural causal models (SCMs), do-calculus,
      Pearl's hierarchy (association/intervention/counterfactual), directed acyclic
      graphs (DAGs), backdoor criterion, interventional queries, confounder adjustment
    Cognitive science tradition: causal judgment, causal mental models, counterfactual
      thinking, mechanism-based reasoning, causal attribution, covariation detection
    ML tradition: causal representation learning, invariant risk minimization (IRM),
      causal disentanglement, identifiable representations, spurious correlations,
      shortcut learning, OOD generalization
    NLP tradition: cause-effect QA, causal NLI, event causality extraction,
      causal commonsense reasoning, temporal causality, narrative causality
    Philosophy tradition: counterfactual conditionals, possible-worlds semantics,
      modal logic, causal conditionals, Humean regularity, mechanism theories

  From "language models":
    NLP benchmarking: evaluation datasets, leaderboards, COPA, CauseNet,
      E-CARE, CRASS, BIG-Bench, HELM, accuracy/F1 metrics, held-out test sets
    ML systems: transformers, autoregressive models, pretraining, foundation models,
      fine-tuning, GPT-4, LLaMA, BERT, PLMs, few-shot prompting
    Interpretability: causal probing, mechanistic interpretability, causal tracing,
      activation patching, circuit-level analysis, attention attribution, ROME, MEMIT
    Prompting / elicitation: chain-of-thought (CoT), scratchpad, zero-shot /
      few-shot, self-consistency, reasoning elicitation

Source C — Absent-term signal (terms expected but not in user's prompt):
  1. "counterfactual" — central to causal reasoning but absent; user may be
     approaching from applied/benchmark framing rather than philosophical framing
  2. "do-calculus" / "Pearl" — foundational formal vocabulary; absent suggests
     user is not entering from the causal inference theory tradition
  3. "spurious correlations" — key failure mode; absent suggests user may not
     know the critique literature
  4. "commonsense" — dominant NLP framing for causal tasks; absent suggests
     user may be thinking of formal rather than commonsense causal reasoning
  5. "chain-of-thought" — most-cited prompting method for reasoning tasks; absent

Candidate vocabulary traditions:
  1. Formal causal inference — SCMs, do-calculus, DAGs, Pearl hierarchy,
     interventional distributions, backdoor criterion, Bayesian networks
  2. NLP/LLM benchmarking and evaluation — COPA, CauseNet, CRASS, E-CARE,
     cause-effect NLI, causal QA datasets, accuracy measurement, leaderboards
  3. ML generalization / robustness — spurious correlations, shortcut learning,
     OOD generalization, invariant risk minimization, annotation artifacts
  4. AI interpretability / mechanistic analysis — causal probing, mechanistic
     interpretability, causal tracing, activation patching, circuit-level analysis
  5. Cognitive science / psychology — causal judgment, mental models, counterfactual
     thinking, causal attribution, covariation detection, mechanism-based reasoning
  6. Formal logic / philosophy — counterfactual conditionals, possible-worlds
     semantics, modal logic, hypothetical reasoning, causal conditionals
  7. Causal representation learning (ML theory) — identifiable representations,
     IRM, causal disentanglement, latent causal variables, causal structure learning
  8. Prompt engineering / reasoning elicitation — chain-of-thought, scratchpad,
     self-consistency, zero-shot / few-shot causal reasoning, reasoning traces
  9. NLP applications / causal relation extraction — causal relation extraction,
     event causality detection, causal NLI, downstream pipeline applications
  10. Temporal reasoning — temporal causality, event sequencing, narrative ordering,
      temporal relation extraction, time-series causal inference

  NOTE: Vocabulary traditions listed here are LLM self-reported. Source B (survey-
  paper probe) was UNAVAILABLE — MODERATE (Source A + Source C produced ≥10
  distinct vocabulary traditions). Vocabulary-discovery pass via survey-paper probe
  recommended before accepting this list as complete.

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure in the prompt; "I want to research"
  language without named comparisons or effect-outcome pairs)

Scope markers: None stated — inferred scope: the full landscape of causal reasoning
  capabilities and limitations in language models, without restriction to any specific
  model architecture, benchmark suite, or application domain.

Known exclusions: None stated

Domain maturity estimate: academic-heavy
  Basis: both anchor terms are from academic traditions; user did not mention specific
  tools, deployment scenarios, or practitioner contexts; the area has a substantial
  and growing arXiv literature (cs.CL, cs.LG, cs.AI).

Survey paper status: NOT SEARCHED — Source B unavailable in this execution context.
  Vocabulary-discovery pass strongly recommended before treating the angle list as
  final; survey papers in this area would use the established field vocabulary and
  could surface traditions the LLM enumeration missed.

Source B status: UNAVAILABLE — MODERATE — subagent context without web access;
  Source A + Source C produced 10 distinct vocabulary traditions; proceed with
  VOCABULARY SELF-REPORT FLAG active.
```

**Intake gate check:**
- Topic field populated: YES
- Candidate vocabulary traditions ≥2: YES (10 identified)
- Question type classified: YES (EXPLORATORY)
- PROCEED to angle generation.

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: Formal causal inference
  Representative terms: structural causal models, do-calculus, Pearl hierarchy,
    DAGs, interventional distributions, backdoor criterion, Bayesian networks
  Planned angle slot: Confirmatory A1
  Gap flag: no

Tradition 2: NLP/LLM benchmarking and evaluation
  Representative terms: COPA, CauseNet, E-CARE, CRASS, cause-effect NLI,
    causal QA datasets, accuracy/F1, held-out test sets, leaderboards
  Planned angle slot: Confirmatory A2
  Gap flag: no

Tradition 3: ML generalization / robustness
  Representative terms: spurious correlations, shortcut learning, OOD
    generalization, invariant risk minimization, annotation artifacts,
    confounded cues, distribution shift
  Planned angle slot: Confirmatory A3
  Gap flag: no

Tradition 4: AI interpretability / mechanistic analysis
  Representative terms: causal probing, mechanistic interpretability, causal
    tracing, activation patching, circuit-level analysis, ROME, MEMIT
  Planned angle slot: Confirmatory A4
  Gap flag: no

Tradition 5: Cognitive science / psychology
  Representative terms: causal judgment, mental models, counterfactual thinking,
    causal attribution, covariation detection, mechanism-based reasoning
  Planned angle slot: Confirmatory A5
  Gap flag: no

Tradition 6: Formal logic / philosophy
  Representative terms: counterfactual conditionals, possible-worlds semantics,
    modal logic, hypothetical reasoning, Humean regularity, mechanism theories
  Planned angle slot: Confirmatory A6
  Gap flag: no

Tradition 7: Causal representation learning (ML theory)
  Representative terms: identifiable representations, IRM, causal disentanglement,
    latent causal variables, causal structure learning in neural networks
  Planned angle slot: Confirmatory A7
  Gap flag: no

Tradition 8: Prompt engineering / reasoning elicitation
  Representative terms: chain-of-thought, scratchpad, self-consistency,
    zero-shot / few-shot causal reasoning, reasoning trace evaluation
  Planned angle slot: Confirmatory A8
  Gap flag: no

Tradition 9: NLP applications / causal relation extraction
  Representative terms: causal relation extraction, event causality detection,
    causal NLI, information extraction, downstream pipeline applications
  Planned angle slot: Confirmatory A9
  Gap flag: no

Tradition 10: Temporal reasoning
  Representative terms: temporal causality, event sequencing, narrative ordering,
    temporal relation extraction, sequence-before-causation conflation
  Planned angle slot: Confirmatory A10
  Gap flag: no

Traditions NOT yet represented in the planned list:
  NONE — all 10 traditions from intake brief have at least one angle slot.

Cross-disciplinary slot (required):
  Target tradition: Linguistics / discourse analysis
  Basis: Discourse analysis and rhetorical structure theory (RST) study causal
    connectives (because, therefore, so, consequently), causal discourse relations,
    and the coherence properties of causal text. This tradition uses vocabulary
    entirely distinct from both the formal causal inference tradition and the NLP
    benchmarking tradition: RST, discourse coherence, rhetorical relations,
    causal connectives, discourse markers, cohesion. It has its own journal
    literature (Discourse Processes, Journal of Pragmatics) and author population
    largely separate from the ML/NLP benchmarking community. NOT in intake brief.

Null-hypothesis slot: assigned — disconfirming framing; vocabulary drawn from
  failure modes, negative results, generalisation failures, pattern-matching critique.

Adversarial slot: assigned — starting tradition: measurement theory / psychometrics.
  Excluding from adversarial generation: all 10 intake brief traditions, all
  confirmatory angle vocabularies.
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1  (Confirmatory): Formal causal inference
Slot A2  (Confirmatory): NLP/LLM benchmarking and evaluation
Slot A3  (Confirmatory): ML generalization / robustness
Slot A4  (Confirmatory): AI interpretability / mechanistic analysis
Slot A5  (Confirmatory): Cognitive science / psychology
Slot A6  (Confirmatory): Formal logic / philosophy
Slot A7  (Confirmatory): Causal representation learning (ML theory)
Slot A8  (Confirmatory): Prompt engineering / reasoning elicitation
Slot A9  (Confirmatory): NLP applications / causal relation extraction
Slot A10 (Confirmatory): Temporal reasoning
Slot N1  (Null-hypothesis): disconfirming variant — LLMs do not genuinely
         reason causally; vocabulary from failure modes, negative results,
         pattern-matching critique (across traditions but framed to disconfirm)
Slot D1  (Adversarial): Measurement theory / psychometrics — starting from
         construct validity, benchmark contamination, ecological validity.
         NOT FROM: any A1–A10 or N1 tradition.
Slot C1  (Cross-disciplinary): Linguistics / discourse analysis — causal
         connectives, RST, discourse coherence. NOT in intake brief.
```

---

## ANGLE LIST

---

### ANGLE 1 (A1): Formal Causal-Inference Frameworks Applied to Language Models

```
Vocabulary tradition: Formal causal inference
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Studies applying SCM, do-calculus, or Pearl's causal hierarchy
  to evaluate, constrain, or interpret LLM outputs; formal characterisations of
  what "causal reasoning" requires for a language model; papers mapping LLM
  behaviour to the association / intervention / counterfactual ladder; methods
  that use DAG-based tools (DoWhy, CausalML) in LLM evaluation pipelines.

Source type (academic): arXiv cs.CL + cs.LG + stat.ML
Source type (practitioner): GitHub — causal ML libraries (DoWhy, CausalML,
  Tigramite) and any repositories integrating them with LLM pipelines

Queries:
  Q1: structural causal model language model reasoning evaluation 2023 2024 2025
  Q2: do-calculus Pearl hierarchy language models interventional counterfactual
  Q3: causal graph directed acyclic graph LLM reasoning formal framework
  Q4: Bayesian network integration large language model causal inference evaluation

Coverage-gap note: Papers using "causal" informally (not grounded in SCM
  formalism) will surface in these queries and belong to Angle 9. A filter
  criterion: does the paper cite Pearl, Spirtes, or use DAG notation? If not,
  it belongs in a different angle.
```

---

### ANGLE 2 (A2): Benchmark Datasets and Evaluation Methodology for Causal Reasoning

```
Vocabulary tradition: NLP/LLM benchmarking and evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Benchmark datasets designed to measure causal reasoning in LLMs
  (COPA, CauseNet, E-CARE, CRASS, BECauSE, CausalQA, CausalBench); reported model
  accuracy and F1 scores; survey and meta-analysis papers critiquing benchmark design,
  annotation quality, construct validity, and data leakage; BIG-Bench and HELM results
  for causal reasoning sub-tasks.

Source type (academic): arXiv cs.CL
Source type (practitioner): GitHub — benchmark repositories (COPA, BIG-Bench,
  HELM, E-CARE); evaluation framework issues and leaderboard archives

Queries:
  Q1: causal reasoning benchmark evaluation large language model 2024 2025
  Q2: cause-effect reasoning dataset LLM commonsense accuracy COPA CauseNet
  Q3: causal question answering evaluation GPT-4 performance zero-shot few-shot
  Q4: causal reasoning benchmark annotation artifact validity critique dataset bias

Coverage-gap note: Benchmark papers vary in scope from narrow (single-hop cause-
  effect choice) to multi-hop generative. Ensure coverage of both discriminative
  and generative evaluation paradigms when retrieving — each has a distinct
  method section and result structure.
```

---

### ANGLE 3 (A3): Spurious Correlations and Shortcut Learning in Causal Reasoning Tasks

```
Vocabulary tradition: ML generalization / robustness
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence that LLMs rely on surface-level lexical or statistical
  cues rather than causal structure; invariant risk minimization applied to NLP
  causal tasks; studies showing performance drops when spurious cues are removed
  or distribution is shifted; annotation artifact analysis for causal benchmarks;
  counterfactual data augmentation results for robustness.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — adversarial NLP evaluation tools;
  counterfactual data augmentation repos (checklist, contrast sets)

Queries:
  Q1: spurious correlations language models causal reasoning robustness
      distribution shift 2023 2024 2025
  Q2: shortcut learning NLP causal benchmark OOD generalization transformer
  Q3: invariant risk minimization natural language processing causal feature
  Q4: annotation artifact causal reasoning NLP dataset bias systematic error

Coverage-gap note: This angle overlaps the null-hypothesis angle (N1) at the
  phenomenon level. The distinction: A3 focuses on the mechanism (what shortcuts
  LLMs exploit) with confirmatory framing; N1 is the disconfirming framing (what
  this evidence means for the claim that LLMs reason causally). Keep separate.
```

---

### ANGLE 4 (A4): Mechanistic Interpretability of Causal Reasoning in Transformers

```
Vocabulary tradition: AI interpretability / mechanistic analysis
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Circuit-level analyses of causal reasoning in transformers;
  causal probing experiments with intervention controls (not just linear probe
  accuracy); activation patching / causal tracing studies on causal tasks;
  ROME/MEMIT applied to causal knowledge editing; papers identifying which
  attention heads or MLP layers are responsible for causal inference steps.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — mechanistic interpretability toolkits
  (TransformerLens, baukit, ROME, MEMIT); Anthropic / EleutherAI research blogs

Queries:
  Q1: causal probing language model internal representation reasoning
      mechanistic interpretability 2023 2024 2025
  Q2: activation patching causal tracing transformer causal relation
  Q3: circuit-level analysis causal reasoning GPT BERT attention heads MLP
  Q4: causal abstraction neural network language model intervention experiment

Coverage-gap note: Distinguish probing studies that use causal intervention
  (patching activations and measuring downstream effects) from those that only
  report probe accuracy — the latter is a weaker claim. Flag the distinction
  when extracting findings.
```

---

### ANGLE 5 (A5): LLM Causal Reasoning Compared to Human Causal Cognition

```
Vocabulary tradition: Cognitive science / psychology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Controlled comparisons between LLM causal reasoning and human
  causal cognition on matched tasks; replication of classic cognitive bias findings
  (Michotte launching, counterfactual regret, covariation neglect) using LLMs;
  human-LLM agreement studies on causal attribution and causal judgment tasks;
  studies drawing on dual-process theory to characterise LLM reasoning mode.

Source type (academic): arXiv cs.CL; Psychological Science, Cognition, Behavior
  Research Methods (journals); PubMed for cognitive science proceedings
Source type (practitioner): deprioritized — primarily academic; limited practitioner
  production in this cognitive science / LLM intersection

Queries:
  Q1: human causal reasoning large language model comparison cognitive psychology
      experiment 2023 2024 2025
  Q2: LLM causal cognition counterfactual thinking mental model human-like bias
  Q3: causal attribution human AI agreement evaluation study matched task design
  Q4: dual-process causal reasoning language model intuitive deliberate inference

Coverage-gap note: Classic cognitive psychology tasks (Wason selection, Michotte
  launching, causal power tasks) applied to LLMs form a distinct sub-cluster that
  may not surface on standard arXiv searches. Supplement with Cognitive Science
  Society (CogSci) proceedings search and direct journal search in Cognition and
  Psychological Science.
```

---

### ANGLE 6 (A6): Counterfactual Conditionals and Hypothetical Reasoning in LLMs

```
Vocabulary tradition: Formal logic / philosophy
Angle type: Confirmatory
Predicted research character: empirical
What to extract: LLM performance on counterfactual conditional tasks ("if X had
  been different, Y would have..."); philosophical analyses of whether LLM
  outputs constitute genuine counterfactual reasoning or pattern completion
  within training distribution; evaluation of possible-worlds reasoning;
  comparisons with formal modal logic requirements.

Source type (academic): arXiv cs.CL; Philosophy & Technology, Synthese, Minds and
  Machines (journals)
Source type (practitioner): GitHub — counterfactual NLP evaluation repos;
  counterfactual generation and evaluation tools

Queries:
  Q1: counterfactual reasoning large language models evaluation philosophy
      2024 2025
  Q2: counterfactual conditional generation LLM accuracy robustness
      out-of-distribution hypothetical
  Q3: hypothetical reasoning "what if" language model generalization inference
      possible-worlds
  Q4: counterfactual language model pattern completion vs genuine reasoning
      philosophical analysis critique

Coverage-gap note: "Counterfactual" appears in three distinct senses in the LLM
  literature: (1) counterfactual data augmentation (ML fairness/robustness),
  (2) counterfactual explanation (XAI), (3) counterfactual conditional reasoning
  (this angle targets sense 3). Senses 1–2 will appear as noise; human filtering
  required to separate them. Key signal for sense 3: papers that evaluate truth-
  value of counterfactual statements, not papers that generate alternative data.
```

---

### ANGLE 7 (A7): Causal Representation Learning and Structural Priors in Language Models

```
Vocabulary tradition: Causal representation learning (ML theory)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Papers on learning causally-structured representations in or from
  LLMs; identifiability results for causal latent variables in neural models;
  invariant risk minimization applied to language; whether pretraining objectives
  encode or suppress causal structure; causal disentanglement in text embeddings.

Source type (academic): arXiv cs.LG + cs.CL + stat.ML
Source type (practitioner): GitHub — IRM and causal representation learning
  codebases; any repos applying causal structure learning to language embeddings

Queries:
  Q1: causal representation learning language models disentanglement
      identifiability 2023 2024 2025
  Q2: invariant risk minimization text classification causal structure NLP
  Q3: causal latent variable language model pretraining structural prior

Coverage-gap note: This is a nascent intersection — most causal representation
  learning work is in vision or tabular settings, not language. Expect sparse
  results. A gap result (fewer than 5 directly relevant papers) is itself
  informative: it identifies an open research area. Flag as predicted-gap when
  dispatching. The Q1–Q3 set covers the three main entry points; a fourth query
  is not justified (would return noise given small literature).
  SPECIFICITY GATE: these are general concept queries — expansion is appropriate.
```

---

### ANGLE 8 (A8): Chain-of-Thought and Reasoning Elicitation for Causal Tasks

```
Vocabulary tradition: Prompt engineering / reasoning elicitation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Whether CoT prompting, scratchpad, self-consistency, or other
  elicitation methods improve LLM performance specifically on causal reasoning
  tasks; analysis of the quality of intermediate causal reasoning steps generated
  by LLMs; studies comparing zero-shot vs. few-shot causal reasoning; cases where
  elicitation methods fail or introduce systematic errors for causal tasks.

Source type (academic): arXiv cs.CL + cs.AI
Source type (practitioner): GitHub — prompting frameworks (LangChain, DSPy);
  prompt engineering community benchmarks and technical reports

Queries:
  Q1: chain-of-thought prompting causal reasoning large language model
      improvement evaluation 2024 2025
  Q2: reasoning elicitation step-by-step causal inference LLM accuracy
      scratchpad self-consistency
  Q3: few-shot zero-shot causal task prompting strategy comparison language model
  Q4: chain-of-thought causal reasoning failure error analysis intermediate steps

Coverage-gap note: Many CoT papers test general reasoning rather than causal
  reasoning specifically. Filter for papers that report results specifically on
  causal benchmarks (COPA, E-CARE, CauseNet) or causal reasoning sub-tasks.
  Papers that test mathematical or logical reasoning are out of scope for this angle.
```

---

### ANGLE 9 (A9): Causal Relation Extraction and Event Causality in NLP Pipelines

```
Vocabulary tradition: NLP applications / causal relation extraction
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Fine-tuned models for causal relation extraction; event causality
  detection from news, scientific, and clinical text; causal NLI in downstream
  applications; integration of causal reasoning into summarisation, dialogue, and
  QA pipelines; task-specific performance benchmarks; annotation schemes for
  causal relations in corpora.

Source type (academic): arXiv cs.CL
Source type (practitioner): GitHub — causal relation extraction pipelines and
  fine-tuned model checkpoints; event causality detection systems

Queries:
  Q1: causal relation extraction LLM transformer fine-tuning NLP 2024 2025
  Q2: event causality detection language model corpus annotation evaluation
  Q3: causal natural language inference pipeline downstream task language model
  Q4: causal information extraction news scientific text pretrained model
      performance comparison

Coverage-gap note: Potential overlap with Angle 2 (benchmarks). Distinguishing
  criterion: Angle 2 papers propose or analyse a benchmark methodology; Angle 9
  papers report task performance in an application setting. Individual papers may
  straddle both; assign to the tradition that dominates the paper's contribution.
```

---

### ANGLE 10 (A10): Temporal Sequencing and Its Conflation with Causation in LLMs

```
Vocabulary tradition: Temporal reasoning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: LLM performance on tasks requiring temporal ordering of causal
  chains; whether LLMs conflate temporal precedence ("A preceded B") with causal
  direction ("A caused B"); temporal causal relation extraction accuracy; narrative
  understanding tasks that require distinguishing correlation, temporal sequence,
  and causation; TimeBank-Dense and ROCStories analyses.

Source type (academic): arXiv cs.CL
Source type (practitioner): GitHub — temporal NLP evaluation tools; narrative
  understanding benchmark repos (TimeBank-Dense, ROCStories, TRACIE)

Queries:
  Q1: temporal causal reasoning language models event ordering evaluation
      2023 2024 2025
  Q2: causal chain temporal sequence LLM narrative understanding conflation
  Q3: temporal causal relation extraction language model performance accuracy
  Q4: causal vs. temporal reasoning LLM distinction evaluation benchmark

Coverage-gap note: The temporal-causal conflation is the central methodological
  issue for this angle. When extracting findings, explicitly flag whether a paper
  tests for this conflation (the interesting result) or only tests temporal
  ordering or only tests causal direction, without comparing the two.
```

---

### ANGLE N1 (Null-hypothesis): Evidence That LLMs Do Not Genuinely Perform Causal Reasoning

```
Vocabulary tradition: Causal inference / NLP critical analysis (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Papers showing LLMs rely on surface correlations rather than
  genuine causal structure; studies where performance on causal benchmarks collapses
  under minimal distribution shift; negative results on causal generalisation; papers
  arguing that LLM "causal reasoning" does not satisfy formal causal inference
  criteria; replication failures; workshop and preprint negative findings.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — adversarial NLP evaluation repos;
  failure-case analysis repositories; issue threads on causal benchmark repos

Queries:
  Q1: large language models fail causal reasoning spurious correlation
      negative results limitations 2024 2025
  Q2: LLM causal reasoning does not generalize out-of-distribution evaluation
      failure systematic
  Q3: causal reasoning language model statistical correlation not causation
      critique limitations analysis
  Q4: replication failure causal benchmark LLM annotation artifact surface cue
      performance collapse

Coverage-gap note: Null results are systematically under-published in formal venues.
  This angle is expected to be sparse in top-tier conference proceedings; supplement
  with workshop papers (BlackboxNLP, FEVER, Findings of ACL), preprints, and GitHub
  issue threads where practitioners document failure cases. Absence of strong negative
  results is itself a finding (publication bias signal), not evidence against the
  null hypothesis.
```

---

### ANGLE D1 (Adversarial): Construct Validity and Measurement Adequacy of Causal Reasoning Evaluation

[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

```
Vocabulary tradition: Measurement theory / psychometrics
Angle type: Adversarial
Predicted research character: consensus + empirical
What to extract: Evidence that causal reasoning benchmarks do not validly measure
  causal reasoning competence; papers examining construct validity, ecological
  validity, convergent validity, or discriminant validity of causal NLP benchmarks;
  studies on benchmark contamination and test-set leakage; item response theory
  or psychometric analysis applied to NLP causal reasoning tasks; Goodhart's law
  arguments applied to LLM causal benchmarks.

Generating from this tradition: construct validity, ecological validity, convergent
  validity, item response theory, psychometrics, measurement invariance, benchmark
  contamination, test-set leakage, Goodhart's law, evaluation validity.
Excluding from generation prompt: structural causal models, do-calculus,
  evaluation datasets (as primary framing), mechanistic interpretability,
  counterfactual conditionals, causal representation learning, causal cognition,
  chain-of-thought, causal relation extraction, temporal ordering, commonsense
  knowledge graphs.

Source type (academic): arXiv cs.CL; Psychometrika, Educational and Psychological
  Measurement (journals) for measurement theory foundations
Source type (practitioner): GitHub — benchmark contamination analysis tools;
  ACL Anthology for evaluation methodology critique papers

Queries:
  Q1: NLP benchmark construct validity measurement causal reasoning evaluation
      2023 2024 2025
  Q2: benchmark contamination test-set leakage causal reasoning language model
      evaluation validity
  Q3: Goodhart law evaluation language model causal reasoning benchmark
      gaming metric
  Q4: ecological validity causal reasoning NLP benchmark real-world
      generalisation assessment

Coverage-gap note: Measurement theory vocabulary is rarely used in NLP papers;
  searches using psychometrics terms will return sparse results. Supplement with
  forward-citation search from any NLP benchmark critique papers found (e.g.,
  papers critiquing GLUE or SuperGLUE benchmark validity — the same arguments
  transfer to causal reasoning benchmarks). The adversarial value of this angle
  comes from asking: even if LLMs score well on causal benchmarks, does that
  constitute evidence of causal reasoning competence? Validity-critique papers
  challenge the inferential chain from benchmark score to capability claim.
```

---

### ANGLE C1 (Cross-disciplinary): Causal Connectives and Discourse Coherence in Language Generation

```
Vocabulary tradition: Linguistics / discourse analysis
  (NOT in intake brief — cross-disciplinary slot)
Angle type: Cross-disciplinary
Predicted research character: empirical + consensus
What to extract: Studies of how LLMs generate and interpret causal discourse markers
  (because, so, therefore, consequently, hence, thus); rhetorical structure theory
  (RST) analyses of causal relations in LLM-generated text; discourse coherence
  and causal cohesion in LLM output; whether LLMs learn the pragmatics of causal
  connectives as opposed to surface co-occurrence; linguistic studies of causal
  language in text generation corpora.

Source type (academic): arXiv cs.CL; Discourse Processes, Journal of Pragmatics,
  Linguistics and Language Compass (journals); ACL Anthology for RST/discourse work
Source type (practitioner): GitHub — discourse parsing tools (e.g., CODRA, DPLP);
  causal connective detection corpora

Queries:
  Q1: causal connectives discourse coherence language model generation evaluation
      2023 2024 2025
  Q2: rhetorical structure theory RST causal relations NLP language model generation
  Q3: causal discourse markers because therefore language model pragmatics learning
  Q4: discourse coherence causal cohesion LLM text generation evaluation quality

Coverage-gap note: The linguistics / discourse tradition uses vocabulary entirely
  distinct from the benchmarking and causal inference traditions. Papers from this
  angle are unlikely to cite Pearl or appear on causal reasoning leaderboards;
  search the ACL Anthology specifically for "RST" and "discourse coherence" to
  reach this literature. Cross-check against Discourse Processes journal for
  empirical linguistics work that does not appear on arXiv.
```

---

## GATE SUMMARY

```
GATE SUMMARY
============
Gate 1 — Completeness:

  Null-hypothesis angle present: PASS
    Angle N1 uses explicit disconfirming framing; query set contains "fail,"
    "does not generalize," "negative results," "not causation," "replication
    failure," "performance collapse." Framing is explicit; not a confirmatory
    angle with hedging language.

  Adversarial angle present: PASS
    Angle D1 carries the ADVERSARIAL-FLAGGED label and the dispatch note
    ("dispatch in separate research context with no prior confirmatory results").

  Cross-disciplinary angle present: PASS
    Angle C1 targets linguistics / discourse analysis, which is NOT present
    in the intake brief's 10 candidate vocabulary traditions. Verified by
    checking all 10 intake traditions: none reference RST, discourse coherence,
    causal connectives, or pragmatics.

  Source-type coverage: PASS
    Domain maturity is academic-heavy. Practitioner sources (GitHub) are included
    for 11 of 13 angles. Two angles deprioritize practitioner sources with explicit
    justification: A5 (primarily academic cognitive science output) and C1 (cross-
    disciplinary — practitioner production near-zero in the RST/discourse intersection
    with LLMs). Both include an alternative supplementary academic source (journals).

  Vocabulary-tradition map populated: PASS
    Coverage map contains 10 distinct traditions from the intake brief, all with
    planned slots. Cross-disciplinary and adversarial slots documented with
    specific tradition names and explicit "NOT in intake brief" notation.

  Gate 1 verdict: PASS

Gate 2 — Distinctness:

  Boolean-connective test (pairs checked):

    A2 (NLP benchmarking) vs. A9 (causal relation extraction):
      A2 most distinctive terms: "COPA CauseNet annotation artifact validity."
      A9 most distinctive terms: "fine-tuning event causality detection downstream."
      Would OR retrieve same documents? No — A2 is about benchmark design
      methodology and dataset properties; A9 is about task performance in
      application pipelines. Different Q-sets, different target papers. PASS.

    A3 (ML robustness) vs. N1 (null-hypothesis):
      A3 most distinctive terms: "invariant risk minimization OOD confounded cues."
      N1 most distinctive terms: "negative results does not generalize critique."
      Mechanism framing (A3) vs. disconfirming framing (N1) — these are
      structurally different angles. PASS with note: A3 is confirmatory on
      a robustness mechanism; N1 asks what the failure evidence implies for
      the capability claim. Distinct on research question even if some papers
      appear in both query results.

    A6 (formal logic/philosophy) vs. A1 (formal causal inference):
      A6 most distinctive terms: "counterfactual conditional possible-worlds
        modal logic pattern completion philosophical analysis."
      A1 most distinctive terms: "structural causal model do-calculus DAG
        Bayesian network interventional."
      Would OR retrieve same documents? No — formal philosophy of counterfactuals
      (Stalnaker/Lewis possible-worlds framework) vs. Pearl SCM formalism are
      distinct literatures with different author populations and journals. PASS.

    A7 (causal representation learning) vs. A1 (formal causal inference):
      A7 most distinctive terms: "disentanglement identifiability IRM latent
        causal variable."
      A1 most distinctive terms: "do-calculus interventional distributions
        backdoor criterion Bayesian network."
      Different ML theory vocabulary vs. formal causal inference vocabulary. PASS.

    A8 (prompt engineering) vs. A2 (benchmarking):
      A8 most distinctive terms: "chain-of-thought scratchpad self-consistency
        elicitation intermediate steps."
      A2 most distinctive terms: "COPA CauseNet dataset annotation leaderboard."
      A8 asks how performance is elicited; A2 asks what performance has been
      measured. Different research questions. PASS.

    D1 (adversarial) vs. N1 (null-hypothesis):
      D1 most distinctive terms: "construct validity psychometrics Goodhart
        ecological validity benchmark gaming."
      N1 most distinctive terms: "does not generalize failure spurious correlation
        negative results replication."
      D1 challenges the inferential validity of the measurement; N1 challenges
      the empirical result. Different vocabulary traditions and questions. PASS.

    All other pairs: no shared distinctive terms. PASS without formal test.

  Vocabulary-tradition distinctness:
    All 13 angles have distinct tradition labels. No two non-null / non-adversarial
    angles share a label. PASS.

  Gate 2 verdict: PASS

Gate 3 — Launchability:

  All 13 angles contain concrete, pasteable query strings in the Queries: field.
  No TBD markers, placeholders, or descriptions-instead-of-queries found.
  Source type (academic) and Source type (practitioner) fields are specific in
  all 13 angles (named platforms: arXiv cs.CL, arXiv cs.LG, arXiv stat.ML,
  GitHub, PubMed, Discourse Processes journal, Psychometrika, etc.).
  Gate 3 verdict: PASS

Gate 4 — Scoring prohibition:

  No angles were ranked by novelty, promise, or likely yield. Type allocations
  used structural criteria only: vocabulary-tradition coverage map, required-type
  slots (null-hypothesis, adversarial, cross-disciplinary), Boolean-connective
  distinctness. No LLM self-evaluation language ("this is the strongest angle,"
  "this is likely most useful") present in any angle record.
  Gate 4 verdict: PASS

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all 10 intake traditions were enumerated by
     LLM only. Source B unavailable. The following traditions may be missing and
     should be verified via survey-paper probe: (a) economics / Granger causality
     — time-series causal inference has its own vocabulary not fully covered by
     tradition 10 (temporal reasoning); (b) legal reasoning — causal attribution
     in law (tort liability, but-for causation) is a distinct tradition; (c)
     medical / clinical decision support — causal reasoning in clinical AI has
     a separate author population (AMIA, JAMIA journals); (d) program synthesis /
     formal verification — symbolic causal reasoning distinct from neural approaches.

  2. A3 and N1 partial overlap at phenomenon level — distinguished by mechanism
     framing (A3 confirmatory on spurious cue mechanism) vs. disconfirming framing
     (N1 on capability claim). Some papers may be retrieved by both. Human
     assignment to the angle with higher relevance is required for such papers.

  3. Angle A7 (causal representation learning) is predicted sparse for the LLM-
     specific intersection. If <5 directly relevant papers are found, treat as a
     gap-documenting angle. This is a substantive finding, not a failed angle.

  4. Angle C1 (cross-disciplinary, linguistics) is expected very sparse in the
     LLM + RST/discourse intersection. A null result here is substantive: it
     indicates the discourse analysis tradition has not been systematically applied
     to evaluate LLM causal language. Report absence explicitly.

  5. Angle D1 (adversarial) requires strict execution-time context separation.
     The ADVERSARIAL-FLAGGED label communicates the requirement; enforcement
     is the responsibility of the dispatching agent.
```

---

## ANGLE COUNT SUMMARY

| # | Angle title | Tradition | Type |
|---|------------|-----------|------|
| 1 | Formal Causal-Inference Frameworks Applied to LMs | Formal causal inference | Confirmatory |
| 2 | Benchmark Datasets and Evaluation Methodology | NLP/LLM benchmarking and evaluation | Confirmatory |
| 3 | Spurious Correlations and Shortcut Learning | ML generalization / robustness | Confirmatory |
| 4 | Mechanistic Interpretability of Causal Reasoning | AI interpretability / mechanistic analysis | Confirmatory |
| 5 | LLM vs. Human Causal Cognition | Cognitive science / psychology | Confirmatory |
| 6 | Counterfactual Conditionals and Hypothetical Reasoning | Formal logic / philosophy | Confirmatory |
| 7 | Causal Representation Learning and Structural Priors | Causal representation learning (ML theory) | Confirmatory |
| 8 | Chain-of-Thought and Reasoning Elicitation | Prompt engineering / reasoning elicitation | Confirmatory |
| 9 | Causal Relation Extraction and Event Causality | NLP applications / causal relation extraction | Confirmatory |
| 10 | Temporal Sequencing and Causal Conflation | Temporal reasoning | Confirmatory |
| 11 | Evidence LLMs Do Not Perform Genuine Causal Reasoning | Causal inference / NLP (disconfirming variant) | Null-hypothesis |
| 12 | Construct Validity of Causal Reasoning Benchmarks | Measurement theory / psychometrics | Adversarial |
| 13 | Causal Connectives and Discourse Coherence | Linguistics / discourse analysis | Cross-disciplinary |

**Total angles: 13**
**Distinct vocabulary traditions: 13**
  (All 13 angles carry distinct tradition labels. N1's label is "Causal inference /
  NLP disconfirming variant" — distinguished from A1's "Formal causal inference"
  and A2's "NLP/LLM benchmarking and evaluation" by the disconfirming framing
  and cross-tradition critical vocabulary.)

**Justification for count 13:** ≥10 distinct vocabulary traditions were identified at
intake (above the ≥4 threshold for complex multi-tradition input). The hard-input
ceiling is 20–30 angles; 13 is the natural saturation point given the coverage map —
all 10 intake traditions plus adversarial, null-hypothesis, and cross-disciplinary
required slots. Boolean-connective test found no redundant pairs. No scope inflation:
each angle addresses a non-overlapping vocabulary facet and would retrieve a
substantially different literature.

---

## POST-GATE SELF-CHECK (CLAUDE.md Rule 6)

**What is missing, incomplete, or questionable in this output:**

1. Source B gap is the primary structural limitation. Five traditions are plausibly
   absent from this list: (a) econometrics / Granger causality — a time-series causal
   inference vocabulary distinct from Pearl's framework, with its own empirical
   literature on applying Granger tests to LLM-generated sequences; (b) legal
   reasoning — but-for causation, proximate cause, and causal attribution in law have
   a separate literature (ICAIL, Artificial Intelligence and Law journal); (c) clinical
   decision support — causal reasoning in medical AI (AMIA, JAMIA) has its own
   author population; (d) program synthesis / formal verification — symbolic causal
   reasoning in AI distinct from neural approaches; (e) education research — causal
   reasoning as a learning objective and LLM errors in pedagogical settings. A survey-
   paper probe would either confirm these are low-yield or add them as new angles.

2. Multi-hop causal reasoning is partially covered by A8 (CoT) and A10 (temporal),
   but a dedicated angle on multi-step causal chain inference was not allocated.
   If multi-hop causal reasoning is identified as a priority by the researcher,
   a 14th angle should be added from the NLP benchmarking tradition using query
   strings specifically targeting multi-hop causal chains.

3. Causal reasoning in safety and alignment — whether LLMs can reason correctly
   about the consequences of actions for alignment purposes — was not allocated a
   dedicated angle. Partially covered by A1 (formal reasoning) and A8 (elicitation)
   but alignment-framed papers use distinct vocabulary (world models, consequence
   prediction, action-effect reasoning) that the current query sets may miss.

4. The adversarial angle D1 (measurement validity) requires context separation at
   execution time. This kit cannot enforce downstream compliance; the flag only
   communicates the requirement to the dispatching agent.
