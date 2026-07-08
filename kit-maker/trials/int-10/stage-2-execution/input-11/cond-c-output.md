# Angle-Gen-Kit Output — Condition C
## Topic: Causal Reasoning in Language Models
## Input ID: 11 | Condition: C | Date: 2026-07-05

---

# PART 1 — INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: Whether and how language models perform, represent, or fail at causal reasoning —
including counterfactual inference, interventional reasoning, causal chain understanding,
and causal structure learning.

Anchor vocabulary: "causal reasoning" (philosophy / cognitive science / statistics
tradition), "language models" (NLP / ML-systems tradition)

Candidate vocabulary traditions:
  1. Causal inference / statistics — SCM, do-calculus, counterfactuals, DAGs,
     interventional reasoning, Pearl's causal hierarchy, ladder of causation,
     Rubin causal model, potential outcomes, causal effect estimation
  2. NLP / ML benchmarks and evaluation — language models, LLMs, transformers,
     probing, task benchmarks, evaluation datasets, fine-tuning, zero-shot,
     in-context learning
  3. Commonsense NLP / NLU — causal chains in text, event schemas, temporal
     ordering, ATOMIC, ConceptNet, commonsense inference, COPA, narrative causality
  4. AI safety / interpretability — spurious correlations, shortcut learning,
     causal representation, feature attribution, mechanistic interpretability,
     distribution shift, causal abstraction
  5. Cognitive science / psychology — causal attribution, causal judgment,
     causal learning, causal Bayesian networks, mechanism reasoning, causal
     cognition, interventional learning
  6. Philosophy of causation — counterfactual theories, interventionism,
     manipulationist account, Lewis counterfactuals, causal mechanism,
     epistemic causation, understanding vs. performance

NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot
enumerate traditions it has not encountered. Vocabulary-discovery pass
(pearl-growing from a known anchor paper) is recommended before accepting the
angle list as covering all traditions.

VOCABULARY SELF-REPORT FLAG: All vocabulary traditions were enumerated by LLM
only. Source B (survey-paper probe) is unavailable. External validation via a
survey-paper probe is recommended before accepting the tradition check as
complete. Coverage is MODERATE, not FULL — cross-disciplinary angles may miss
traditions that only appear in survey-paper title vocabulary.

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure in the prompt; user asked
  "I want to research X" with no named comparison, intervention, or outcome pair)

Scope markers: None stated — inferred scope: general capability of language
  models to perform causal reasoning, across task types and model families,
  not restricted to specific architectures or application domains

Known exclusions: None stated

Domain maturity estimate: mixed
  Basis: anchor vocabulary spans formal academic ("causal reasoning" with strong
  statistics/philosophy lineage) and ML-systems ("language models"); significant
  arXiv literature exists from both cs.CL and cs.LG; active benchmark and
  dataset development indicates both academic and practitioner production;
  growing practitioner deployment for causal reasoning in applications

Survey paper status: CHECK REQUIRED — Source B unavailable; survey-paper probe
  recommended as first post-intake step

Source B status: UNAVAILABLE — MODERATE (Source A+C produced ≥5 distinct
  vocabulary traditions; causal reasoning in LLMs is a well-represented domain
  in LLM training data; vocabulary confidence is MODERATE, not HIGH RISK)
```

---

# PART 2 — COVERAGE MAP (Step 0)

```
COVERAGE MAP
============

Tradition 1: Causal inference / statistics
  Representative terms: SCM, do-calculus, counterfactuals, DAGs, interventional
    reasoning, Pearl's hierarchy, ladder of causation, potential outcomes,
    causal effect
  Planned angle slot: Confirmatory A1
  Gap flag: No — slot assigned

Tradition 2: NLP / ML benchmarks and evaluation
  Representative terms: language models, LLMs, transformers, probing, task
    benchmarks, evaluation datasets, COPA, CausalQA, CLADDER, zero-shot,
    in-context learning
  Planned angle slot: Confirmatory A2
  Gap flag: No — slot assigned

Tradition 3: Commonsense NLP / NLU
  Representative terms: causal chains, event schemas, temporal ordering, ATOMIC,
    ConceptNet, commonsense inference, narrative causality, causal connectives
  Planned angle slot: Confirmatory A3
  Gap flag: No — slot assigned

Tradition 4: AI safety / interpretability
  Representative terms: spurious correlations, shortcut learning, causal
    representation, feature attribution, mechanistic interpretability,
    causal abstraction
  Planned angle slot: Confirmatory A4
  Gap flag: No — slot assigned

Tradition 5: Cognitive science / psychology
  Representative terms: causal attribution, causal judgment, causal Bayesian
    networks, mechanism reasoning, causal cognition, interventional learning
  Planned angle slot: Confirmatory A5
  Gap flag: No — slot assigned

Tradition 6: Philosophy of causation
  Representative terms: counterfactual theories, interventionism, manipulationist
    account, Lewis counterfactuals, epistemic causation, competence vs.
    performance, understanding in AI
  Planned angle slot: Adversarial D1 (ADVERSARIAL-FLAGGED)
  Gap flag: No — slot assigned

Additional traditions identified via Source A / Source C absent-term scan:

Tradition 7: Causal ML theory / representation learning
  Representative terms: causal representation learning, invariant causal
    prediction, ICP, causal discovery algorithms, structural causal models,
    FCI, PC algorithm, causal feature learning
  Planned angle slot: Confirmatory A6
  Gap flag: No — slot assigned

Tradition 8: Econometrics / social science
  Representative terms: Granger causality, instrumental variables, difference-
    in-differences, regression discontinuity, observational study, treatment
    effect, structural equation modeling in social science
  Planned angle slot: Confirmatory A7
  Gap flag: No — slot assigned

Tradition 9: Biomedical / clinical NLP
  Representative terms: clinical causal reasoning, adverse drug event, causal
    relation extraction, biomedical literature mining, PubMed causal claims
  Planned angle slot: Confirmatory A8
  Gap flag: No — slot assigned

Tradition 10: NLP / prompting methods
  Representative terms: chain-of-thought, few-shot prompting, in-context
    causal reasoning, prompt engineering, causal explanation generation
  Planned angle slot: Confirmatory A9
  Gap flag: No — slot assigned

Tradition 11: Scientific NLP / information extraction
  Representative terms: scientific causal relation extraction, hypothesis
    generation, causal claim detection in papers, science text mining
  Planned angle slot: Confirmatory A10
  Gap flag: No — slot assigned

Tradition 12: ML theory / distribution shift
  Representative terms: OOD generalization, novel causal structure transfer,
    distribution shift, causal graph generalization, zero-shot causal transfer
  Planned angle slot: Confirmatory A11
  Gap flag: No — slot assigned

Tradition 13: AI agents / embodied AI
  Representative terms: LLM agent, tool-augmented reasoning, causal world model,
    embodied agent, physical causation, planning under causal uncertainty,
    causal action selection
  Planned angle slot: Confirmatory A12
  Gap flag: No — slot assigned

Tradition 14: Linguistics / discourse analysis
  Representative terms: causal discourse relations, RST (Rhetorical Structure
    Theory), causal connectives, discourse coherence, implicit causality,
    causal language use, because/since/therefore markers
  Planned angle slot: Cross-disciplinary C1
  Gap flag: No — slot assigned; this tradition was NOT in the intake brief

Traditions NOT yet represented in the planned list:
  All traditions from intake brief plus 8 additional traditions have at least
  one angle slot.

  Remaining potential gaps (not covered by current 15-angle list):
  - Legal / forensic causation (but-for causation, proximate cause) — small
    practitioner literature with LLMs; classified as scope-accepted gap
  - Neuroscience (causal inference in the brain, neural correlates) —
    crossing into a different object of study; classified as scope-accepted gap

Cross-disciplinary slot (required):
  Target tradition: Linguistics / discourse analysis
  Basis for selection: The user's framing ("causal reasoning in language
    models") is entirely from cognitive/ML vocabulary; the linguistics tradition
    studies causal language use, causal connectives, and discourse coherence as
    surface-form phenomena — a framing orthogonal to inference capability and
    likely to surface papers about how LLMs handle causal markers in text vs.
    whether they understand causal structure. This tradition was NOT in the
    intake brief and would be missed without explicit cross-disciplinary
    conditioning.
```

---

# PART 3 — TYPE ALLOCATIONS (Step 1)

```
TYPE ALLOCATIONS
================
Slot A1  (Confirmatory — Causal inference / statistics)
Slot A2  (Confirmatory — NLP / ML benchmarks and evaluation)
Slot A3  (Confirmatory — Commonsense NLP / NLU)
Slot A4  (Confirmatory — AI safety / interpretability)
Slot A5  (Confirmatory — Cognitive science / psychology)
Slot A6  (Confirmatory — Causal ML theory / representation learning)
Slot A7  (Confirmatory — Econometrics / social science)
Slot A8  (Confirmatory — Biomedical / clinical NLP)
Slot A9  (Confirmatory — NLP / prompting methods)
Slot A10 (Confirmatory — Scientific NLP / information extraction)
Slot A11 (Confirmatory — ML theory / distribution shift)
Slot A12 (Confirmatory — AI agents / embodied AI)
Slot N1  (Null-hypothesis — disconfirming)
Slot D1  (Adversarial — Philosophy of causation; NOT FROM: traditions 1–12 above)
Slot C1  (Cross-disciplinary — Linguistics / discourse analysis; NOT in intake brief)

Justification for above-standard count (15 angles, above standard 5–12):
14 distinct vocabulary traditions identified across intake brief + Source A/C
expansion. Per angle-generation.md hard-input rule: "20–30 angles is appropriate
when ≥4 distinct vocabulary traditions are identified at intake and the topic
spans multiple disciplines." 15 is a conservative application of this rule,
justified by the constraint that Source B is unavailable — generating 20–30
angles in a Source-B-absent context risks quality degradation from coverage-gap
conditioning at high counts without external vocabulary anchoring. 15 is the
coverage-maximizing count compatible with MODERATE confidence.
```

---

# PART 4 — FULL ANGLE LIST

---

## ANGLE A1: LLMs and Pearl's Causal Hierarchy — Interventional and Counterfactual Reasoning
```
Vocabulary tradition: Causal inference / statistics
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How well LLMs perform at tasks requiring interventional
  (do(X)) versus observational reasoning; whether LLMs conflate association
  with causation; whether they can climb the three rungs (association,
  intervention, counterfactual); scope conditions under which they succeed or
  fail; empirical evaluations against formal causal benchmarks

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub repositories for CLADDER and similar causal
  reasoning benchmark implementations

Queries:
  Q1: language models counterfactual reasoning do-calculus Pearl causal hierarchy
      evaluation 2024 2025
  Q2: LLM interventional query causal effect estimation observational versus
      interventional distinction
  Q3: large language models ladder of causation associational interventional
      counterfactual level performance benchmark
  Q4: GPT causal inference structural causal model intervention do-operator
      probing 2023 2024

Coverage-gap note: Queries focus on formal Pearl-framework evaluation; they
  may miss work using Rubin potential outcomes framing rather than Pearl DAG
  framing — a methodological split in the causal inference community that maps
  onto different literatures.
```

---

## ANGLE A2: Benchmarks and Task Evaluation for LLM Causal Reasoning
```
Vocabulary tradition: NLP / ML benchmarks and evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: What benchmarks exist for causal reasoning in LLMs; what
  these benchmarks measure and what they miss; state-of-the-art performance;
  dataset construction methodology; known annotation artifacts; task taxonomies
  (causal QA, causal NLI, causal commonsense completion, etc.)

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): Papers With Code leaderboards for causal reasoning
  benchmarks; GitHub benchmark repositories

Queries:
  Q1: causal reasoning benchmark evaluation large language models survey 2023 2024
  Q2: COPA CausalQA CRASS causal NLI dataset language model performance
  Q3: commonsense causal inference evaluation LLM CLADDER temporal causal
      dataset annotation 2024 2025
  Q4: causal question answering language model benchmark construction
      annotation methodology

Coverage-gap note: Benchmark papers may not distinguish between LLMs that
  perform well due to statistical shortcuts versus genuine causal understanding —
  that distinction is covered by A4 and N1. Dataset construction methodology
  flaws (annotation artifacts, spurious correlations in datasets) are partially
  covered here but more deeply in N1.
```

---

## ANGLE A3: Causal Chain and Narrative Causality Understanding in LLMs
```
Vocabulary tradition: Commonsense NLP / NLU
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Whether LLMs can follow multi-step causal chains in narrative
  text; performance on causal chain completion and temporal ordering; how LLMs
  use knowledge graph resources (ATOMIC, ConceptNet) for causal inference; how
  narrative event schemas encode causal structure

Source type (academic): arXiv cs.CL + cs.LG; ACL Anthology
Source type (practitioner): GitHub repositories for commonsense reasoning
  datasets (ATOMIC 2020, CausalBank)

Queries:
  Q1: causal chain reasoning language model narrative commonsense event temporal
      ordering 2024
  Q2: LLM ATOMIC ConceptNet commonsense causal inference knowledge graph
      transformer
  Q3: event schema causal structure generation language model story understanding
      causal link
  Q4: multi-step causal reasoning chain LLM commonsense completion evaluation

Coverage-gap note: The focus is on causal structure encoded in natural language
  text; does not cover causal reasoning from formal logical or mathematical
  representations (those fall under A1 and A6).
```

---

## ANGLE A4: Spurious Correlations vs. Causal Structure — AI Safety and Interpretability
```
Vocabulary tradition: AI safety / interpretability
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence that LLMs learn spurious (non-causal) correlations
  rather than causal structure; mechanistic interpretability findings about
  causal representations; shortcut learning in causal tasks; causal abstraction
  of LLM circuits; feature attribution for causal judgments

Source type (academic): arXiv cs.LG + cs.CY (safety/interpretability category)
Source type (practitioner): Alignment Forum posts on causal abstraction and
  mechanistic interpretability; GitHub for interpretability tools

Queries:
  Q1: spurious correlations language models causal reasoning shortcut learning
      interpretability 2024
  Q2: LLM causal feature attribution mechanistic interpretability causal circuit
      analysis
  Q3: causal abstraction language model representation probing causal versus
      statistical feature
  Q4: neural network causal mechanism shortcut confounding spurious
      correlation causal task

Coverage-gap note: Mechanistic interpretability of causal reasoning is an
  emerging area; literature density may be low in formal venues and higher
  in preprints and alignment blogs. Gap between formal AI safety work and
  empirical ML work on shortcuts may require two separate source passes.
```

---

## ANGLE A5: Human vs. LLM Causal Cognition — Cognitive Science Comparison
```
Vocabulary tradition: Cognitive science / psychology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Direct comparisons of LLM and human performance on causal
  reasoning tasks; whether LLMs exhibit the same systematic biases as humans
  (e.g., temporal order bias, mechanism bias); what causal reasoning processes
  humans use that LLMs may lack; studies triangulating LLM behavior against
  cognitive science models of causal inference

Source type (academic): PubMed / psych journals (Cognition, Psychological
  Science); arXiv cs.CL + cs.AI
Source type (practitioner): Research blogs (e.g., Google AI, DeepMind) on
  human-like reasoning in LLMs

Queries:
  Q1: human causal reasoning comparison language model cognitive science
      behavioral evaluation 2024
  Q2: LLM causal inference Bayesian network human-like causal judgment
      comparison experiment
  Q3: causal reasoning bias temporal order mechanism language model human
      subject study
  Q4: artificial intelligence causal cognition developmental comparison
      adult human performance

Coverage-gap note: Most cognitive science causal reasoning work uses human
  subjects and structured vignettes — the mapping to LLM evaluation may
  require methodological translation. Papers bridging both fields are the
  highest-value finds.
```

---

## ANGLE A6: Causal Discovery and Representation Learning with LLMs
```
Vocabulary tradition: Causal ML theory / representation learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Whether LLMs can perform causal discovery (inferring causal
  structure from data descriptions or observations); use of LLMs as components
  in causal discovery pipelines; invariant causal prediction; causal
  representation learning from text; LLMs for structure equation model
  identification

Source type (academic): arXiv cs.LG + stat.ML
Source type (practitioner): GitHub repositories for causal discovery tools
  (CausalNex, Causal-learn, DoWhy) that integrate LLM components

Queries:
  Q1: causal discovery language model structural equation model LLM 2024 2025
  Q2: LLM causal representation learning invariant causal prediction
      latent variable structure
  Q3: large language model causal structure identification observational
      data constraint-based algorithm
  Q4: invariant risk minimization causal feature learning language model
      training signal

Coverage-gap note: Causal discovery from data is technically distinct from
  causal reasoning about a known structure — A1 covers reasoning about known
  causal structure; A6 covers learning the structure. Literature may use
  different vocabulary; overlap is possible and should be checked.
```

---

## ANGLE A7: Temporal Causal Reasoning and Econometric Framing
```
Vocabulary tradition: Econometrics / social science
Angle type: Confirmatory
Predicted research character: gap (econometrics framing rarely applied to LLM
  evaluation; literature may be sparse — this angle documents what exists)
What to extract: Applications of Granger-causality framing to LLM temporal
  text; whether LLMs can reason about observational data in ways consistent
  with econometric identification strategies; LLM-assisted causal inference in
  social science data analysis; instrumental variable reasoning in LLMs

Source type (academic): arXiv econ.EM + cs.CL
Source type (practitioner): Social science research blogs; economics preprint
  servers (NBER, SSRN) for LLM in causal inference studies

Queries:
  Q1: Granger causality language model temporal text prediction causal inference
  Q2: LLM observational study causal identification instrumental variable
      treatment effect estimation
  Q3: large language model econometric causal inference social science
      counterfactual policy evaluation 2024
  Q4: difference-in-differences regression discontinuity language model
      application causal estimation

Coverage-gap note: Econometric causal inference literature may treat LLMs as
  tools for data analysis rather than studying their reasoning capabilities —
  both senses are valid but produce different kinds of evidence. Queries cover
  both framings.
```

---

## ANGLE A8: Biomedical Causal Reasoning with LLMs
```
Vocabulary tradition: Biomedical / clinical NLP
Angle type: Confirmatory
Predicted research character: empirical
What to extract: LLM performance on clinical causal reasoning tasks (e.g.,
  attributing symptoms to causes, adverse drug events, differential diagnosis
  as causal inference); causal relation extraction from biomedical literature;
  how well LLMs handle epidemiological causal language; failure modes in
  medical causal reasoning

Source type (academic): PubMed; arXiv cs.CL; Journal of the American Medical
  Informatics Association (JAMIA)
Source type (practitioner): Hugging Face medical LLM model cards; GitHub for
  clinical NLP tools

Queries:
  Q1: biomedical clinical causal reasoning large language model evaluation 2024
  Q2: LLM causal relation extraction biomedical literature adverse drug event
      attribution
  Q3: clinical natural language processing causal inference language model
      diagnosis etiology
  Q4: medical question answering causal mechanism LLM GPT patient outcome
      treatment effect

Coverage-gap note: Clinical causal reasoning overlaps significantly with
  medical AI benchmarks (MedQA, MedMCQA) but those benchmarks may not isolate
  the causal component. Papers that explicitly target causal sub-skills in
  medical LLMs are the primary targets.
```

---

## ANGLE A9: Chain-of-Thought and Prompting Strategies for Causal Reasoning
```
Vocabulary tradition: NLP / prompting methods
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Whether chain-of-thought prompting improves causal reasoning
  specifically; which prompting strategies elicit better causal inference;
  whether step-by-step reasoning in CoT reflects genuine causal modeling or
  surface pattern generation; comparison of zero-shot vs. few-shot vs. CoT
  for causal tasks; causal explanation generation quality

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): Prompt engineering guides (e.g., promptingguide.ai);
  GitHub prompt evaluation repositories

Queries:
  Q1: chain-of-thought prompting causal reasoning language model evaluation 2024
  Q2: few-shot in-context learning causal inference LLM prompting strategy
      comparison
  Q3: step-by-step reasoning causal explanation generation language model
      quality assessment
  Q4: zero-shot causal reasoning prompting GPT-4 Claude LLM comparison
      causal task

Coverage-gap note: This angle covers prompting as an intervention; it may
  overlap with A2 (benchmarks) when benchmark papers also compare prompting
  strategies. The Boolean-connective test: A9 focuses on the prompting mechanism
  while A2 focuses on the evaluation landscape — distinct facets that would
  retrieve different document clusters.
```

---

## ANGLE A10: Causal Relation Extraction from Scientific Text
```
Vocabulary tradition: Scientific NLP / information extraction
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How well LLMs extract causal claims from scientific papers;
  LLM-based pipelines for scientific causal discovery; annotation schemes for
  causal relations in scientific text; accuracy of LLM-extracted causal claims
  versus human annotators; hallucination of causal claims in scientific contexts

Source type (academic): arXiv cs.CL + cs.IR; ACL Anthology
Source type (practitioner): GitHub for scientific NLP tools (e.g., SciSpacy,
  SemEval task implementations)

Queries:
  Q1: causal relation extraction scientific text language model LLM 2024 2025
  Q2: LLM scientific causal claim detection literature mining hypothesis
      generation
  Q3: scientific NLP causal event argument extraction transformer annotation
      scheme
  Q4: LLM hallucination causal claims scientific text factuality causal
      assertion

Coverage-gap note: Scientific causal extraction is domain-specific; findings
  may not generalize to non-scientific causal reasoning. Also does not cover
  whether LLMs understand the causal claims they extract, only whether they
  can identify them — a competence gap that connects to D1 and N1.
```

---

## ANGLE A11: Out-of-Distribution Generalization of Causal Reasoning
```
Vocabulary tradition: ML theory / distribution shift
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Whether LLM causal reasoning performance holds on novel causal
  structures not seen in training; systematic studies of OOD generalization in
  causal tasks; whether models generalize causal rules or memorize causal
  templates; the role of training data composition in causal generalization;
  transferability of causal reasoning across domains

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): Papers With Code OOD robustness leaderboards;
  GitHub for OOD evaluation frameworks

Queries:
  Q1: causal reasoning generalization language model out-of-distribution
      distribution shift 2024
  Q2: LLM novel causal structure zero-shot transfer systematic generalization
      causal rule
  Q3: language model causal task memorization versus generalization training
      data causal template
  Q4: causal reasoning robustness held-out causal graph test LLM
      compositional generalization

Coverage-gap note: OOD generalization for causal tasks is distinct from
  spurious correlations (A4) — A4 asks what LLMs learn from training data,
  A11 asks whether what they learn transfers. Boolean-connective test: the
  vocabulary clusters are different (spurious/shortcut vs. OOD/transfer), and
  the intervention implied by each is different (fixing training data vs.
  fixing test distribution).
```

---

## ANGLE A12: Causal Reasoning in LLM Agents and Embodied Settings
```
Vocabulary tradition: AI agents / embodied AI
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How LLM-based agents reason about causation when they can
  take actions (true interventions); whether embodied action improves causal
  reasoning; causal world models in LLM agents; planning under causal
  uncertainty; comparison of passive text-based causal reasoning vs. active
  agent-based causal reasoning

Source type (academic): arXiv cs.AI + cs.LG + cs.RO
Source type (practitioner): GitHub for LLM agent frameworks (ReAct, Toolformer,
  agent benchmarks); blog posts on LLM agent reasoning

Queries:
  Q1: LLM agent causal reasoning tool use intervention action planning 2024 2025
  Q2: embodied language model causal world model physical causation environment
      interaction
  Q3: large language model agent causal intervention counterfactual action
      selection planning
  Q4: causal reasoning robotic manipulation LLM grounded physical causation
      world model

Coverage-gap note: This angle requires distinguishing between LLMs used as
  planning engines for agents vs. LLMs that reason causally as part of an
  agent loop — both are valid but produce different evidence types. The agent
  setting allows for true interventions (do(X)), which makes it a natural test
  bed for Pearl-level 2 reasoning (connects to A1).
```

---

## ANGLE N1: Evidence That LLMs Lack Genuine Causal Reasoning [NULL-HYPOTHESIS]
```
Vocabulary tradition: NLP / ML evaluation (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Studies showing LLMs fail causal reasoning tasks under
  adversarial conditions, probing interventions, or held-out evaluations;
  evidence that LLM causal "reasoning" is explained by statistical pattern
  matching; annotation artifact critiques of causal benchmarks; replication
  failures; scope conditions under which LLMs reliably fail; systematic
  negative results

Source type (academic): arXiv cs.CL + cs.LG (specifically negative results
  sections and adversarial evaluation papers)
Source type (practitioner): GitHub issues on causal benchmark repositories
  documenting failure modes; practitioner blog posts documenting LLM causal
  reasoning limitations

Queries:
  Q1: language models causal reasoning failure statistical pattern matching
      surface form negative result 2024
  Q2: LLM spurious causal competence probe annotation artifact benchmark
      critique confound
  Q3: counterfactual probing language model causal understanding failure
      does not generalize limits 2024 2025
  Q4: LLM causal reasoning replication failure benchmark critique
      annotation artifact spurious 2023 2024

Coverage-gap note: The null-hypothesis framing targets evidence of non-
  causal explanations for LLM causal task performance. This is the angle most
  likely to be suppressed in publication-biased literature — GitHub issue
  threads, workshop proceedings, and preprints are higher-yield sources than
  top-venue publications for this angle. This angle should be dispatched as
  a fresh research pass before seeing results from confirmatory angles (see
  weakness_register.md Weakness 3 on adversarial angle calibration).
```

---

## ANGLE D1: Epistemological Status of Causal Understanding in Language Models [ADVERSARIAL-FLAGGED]
```
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior
confirmatory results. This angle was generated using exclusively philosophy of
science and epistemology vocabulary. The following terms were EXCLUDED from
the generation prompt: causal inference, SCM, do-calculus, benchmark,
evaluation, probing, shortcut learning, spurious, commonsense, ATOMIC,
chain-of-thought, representation, distribution shift, Granger, biomedical,
discourse, embodied.]

Vocabulary tradition: Philosophy of causation / philosophy of science
Angle type: Adversarial-FLAGGED
Predicted research character: consensus (primarily philosophical argument;
  empirical evidence secondary)
What to extract: Philosophical arguments about whether statistical pattern
  matching can constitute causal understanding; whether the competence/
  performance distinction (Chomsky) applies to LLMs and causation; Searle-type
  arguments against machine causal understanding; interventionist theories of
  causation and whether they require agency; philosophical criteria for what
  it means for a system to "understand" causation vs. to use causal language

Source type (academic): PhilPapers; philosophy of AI journals (Minds and
  Machines, Synthese); arXiv cs.AI (philosophy of AI papers)
Source type (practitioner): Stanford Encyclopedia of Philosophy entries
  on causation and AI; philosophy blog posts on large language models

Queries:
  Q1: understanding competence performance artificial intelligence philosophy
      causation language use meaning 2023 2024
  Q2: causal understanding language systems Chinese room functionalism
      manipulationist theory philosophy
  Q3: interventionist theory causation agency artificial system philosophical
      analysis mechanistic understanding
  Q4: philosophy of artificial intelligence causal knowledge semantic
      grounding symbol manipulation

Coverage-gap note: This angle uses vocabulary orthogonal to the empirical
  ML literature; papers it retrieves are unlikely to overlap with A1–A12 or
  N1. The adversarial value is that philosophical arguments set scope conditions
  that empirical work often ignores — what counts as causal reasoning in
  principle constrains what LLM evaluation should measure in practice.
```

---

## ANGLE C1: Causal Discourse Relations and Connectives in LLMs [CROSS-DISCIPLINARY]
```
Vocabulary tradition: Linguistics / discourse analysis
  [NOT in intake brief — selected as cross-disciplinary slot]
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: How LLMs handle causal discourse markers (because, since,
  therefore, as a result); whether discourse-level causal relations are
  preserved in LLM text generation and comprehension; performance on RST-
  based (Rhetorical Structure Theory) causal relation tasks; implicit vs.
  explicit causal marking; cross-lingual causal discourse patterns in LLMs

Source type (academic): ACL Anthology; arXiv cs.CL; linguistics journals
  (Discourse Processes, Linguistics and Philosophy)
Source type (practitioner): HuggingFace model evaluations for discourse
  coherence; GitHub for RST parsing tools with LLM components

Queries:
  Q1: causal discourse relations RST rhetorical structure theory language
      model connectives coherence 2024
  Q2: LLM causal connective because since therefore implicit explicit
      discourse coherence comprehension
  Q3: language model causal relation discourse marker understanding
      pragmatics inference 2024 2025
  Q4: cross-lingual causal discourse structure language model multilingual
      causal marking

Coverage-gap note: This angle captures the surface-form linguistic dimension
  of causation — how causal language is marked and used — which is distinct
  from causal reasoning (whether the model can infer causal structure). A paper
  can do well on this angle and poorly on A1 or vice versa. That gap is itself
  a research finding: surface form competence vs. structural reasoning
  competence are dissociable.
```

---

# PART 5 — GATE SUMMARY (angle-quality.md)

```
GATE SUMMARY
============

Gate 1 — Completeness:

  Null-hypothesis angle present: PASS
    N1 is framed as disconfirming; queries contain "failure," "negative result,"
    "does not generalize," "limits," "replication failure" vocabulary. Cannot
    be merged with any confirmatory angle.

  Adversarial angle present: PASS
    D1 is labeled [ADVERSARIAL-FLAGGED] with dispatch note.

  Cross-disciplinary angle present: PASS
    C1 targets Linguistics / discourse analysis, which was NOT in the intake
    brief's candidate vocabulary traditions list. Tradition label confirmed
    absent from intake brief.

  Source-type coverage: PASS
    Domain maturity is "mixed" — at least one practitioner source (GitHub,
    practitioner blogs, Hugging Face, alignment blogs) appears in angles A1,
    A2, A4, A7, A9, A10, A12, N1. Requirement satisfied.

  Vocabulary-tradition map populated: PASS
    Coverage map in Part 2 lists 14 distinct tradition names; ≥2 distinct
    traditions present with explicit angle slots.

Gate 1 — Overall: PASS

---

Gate 2 — Distinctness:

  Boolean-connective test (spot-check on highest-overlap candidate pairs):

  A2 (benchmarks) vs. A9 (prompting methods):
    A2 key terms: benchmark, evaluation dataset, COPA, CRASS, annotation.
    A9 key terms: chain-of-thought, few-shot, in-context learning, prompting.
    "benchmark" does not appear in A9 queries; "chain-of-thought" does not
    appear in A2 queries. OR retrieval would retrieve both benchmark papers
    AND prompting papers but not the same documents. PASS.

  A4 (spurious correlations) vs. A11 (OOD generalization):
    A4 key terms: spurious, shortcut learning, mechanistic interpretability,
    causal abstraction.
    A11 key terms: out-of-distribution, distribution shift, novel causal
    structure, zero-shot transfer, systematic generalization.
    "spurious" does not appear in A11 queries; "out-of-distribution" does
    not appear in A4 queries. Different object of study (training-time features
    vs. test-time distribution). PASS.

  A1 (Pearl hierarchy) vs. A6 (causal discovery):
    A1 key terms: do-calculus, Pearl, interventional query, ladder of causation.
    A6 key terms: causal discovery, structural equation model identification,
    invariant causal prediction, causal representation learning.
    Different objects of study (reasoning about known structure vs. discovering
    structure). PASS.

  N1 (null-hypothesis) vs. A4 (spurious correlations):
    These may have partial overlap — both deal with LLMs not having genuine
    causal understanding.
    N1 key terms: failure, negative result, does not generalize, replication
    failure, annotation artifact.
    A4 key terms: spurious correlations, shortcut learning, interpretability,
    causal abstraction.
    N1 is framed as disconfirming evidence broadly (across all phenomena);
    A4 is framed as interpretability analysis of what LLMs learn. Different
    source types (workshop/preprint negative results for N1; mechanistic
    interpretability papers for A4). Framing is different enough to retrieve
    distinct primary papers. PASS — monitor for overlap; if executed, check
    whether A4 interpretability papers would also appear in N1 results.

  Vocabulary-tradition distinctness:
    All 15 angles have different vocabulary-tradition labels. No two non-null
    non-adversarial angles share a tradition label. PASS.

Gate 2 — Overall: PASS (minor monitor flag on N1/A4 overlap noted above)

---

Gate 3 — Launchability:

  Each angle checked:
  - All 15 angles have at least one concrete, pasteable query string. PASS.
  - No query string contains TBD, "[fill in]," or equivalent placeholder. PASS.
  - All angles name a specific source platform in both the academic and
    practitioner fields (arXiv with category, PubMed, PhilPapers, ACL
    Anthology, GitHub, etc.). PASS.

Gate 3 — Overall: PASS

---

Gate 4 — Scoring prohibition:

  No angle contains phrases like "this is the most useful angle" or "this
  angle is likely strongest." No filtering, ranking, or prioritization was
  applied during generation. Angle order reflects coverage-map slot order,
  not quality assessment. PASS.

Gate 4 — Overall: PASS

---

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG: All 14 vocabulary traditions were enumerated
     by LLM only. External validation via survey-paper probe recommended before
     accepting tradition coverage as complete. Residual risk: SIGNIFICANT per
     weakness_register.md Weakness 1.

  2. N1 / A4 partial overlap monitor: If both angles are dispatched in the
     same research pass, check for paper overlap at retrieval time. If overlap
     is >50% of retrieved papers, consider a scope-split: A4 = interpretability
     framing; N1 = behavioral/evaluation framing.

  3. A7 (Econometrics) predicted research character = gap. The econometrics
     framing for LLM causal reasoning may have sparse literature. If retrieval
     returns <5 papers, flag as small-literature condition per angle-quality.md
     Gate 2 small-literature exception.

  4. D1 requires structural separation at execution. The downstream research
     agent must dispatch D1 in a separate context with no prior confirmatory
     results visible. This kit cannot enforce that at execution time
     (weakness_register.md Weakness 6).
```

---

# PART 6 — SUMMARY STATISTICS

- Total angles: 15
- Confirmatory angles: 12 (A1–A12)
- Null-hypothesis angles: 1 (N1)
- Adversarial angles: 1 (D1)
- Cross-disciplinary angles: 1 (C1)
- Distinct vocabulary traditions in coverage map: 14
- Source B availability: UNAVAILABLE — MODERATE
- Overall gate verdict: PASS
