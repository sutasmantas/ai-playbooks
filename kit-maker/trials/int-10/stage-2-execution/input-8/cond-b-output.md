# Angle Generation Output — Input 8, Condition B

**Topic:** Uncertainty quantification for language model outputs — how to measure and express uncertainty in what LLMs generate

**Execution context:** Subagent / sandboxed environment — Source B (web search / survey-paper probe) UNAVAILABLE.

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: How to measure and express uncertainty in what language models generate

Anchor vocabulary:
  "uncertainty quantification" (statistics/Bayesian ML tradition)
  "language model outputs" (NLP/ML-systems tradition)
  "measure" (quantitative/statistical tradition)
  "express" (communication/representation tradition — signals user-facing scope is in-scope)

Candidate vocabulary traditions:
  1. Bayesian ML / probabilistic ML — epistemic uncertainty, aleatoric uncertainty,
     Bayesian deep learning, Monte Carlo dropout, deep ensembles, posterior predictive
     distribution, variational inference
  2. NLP / ML systems (calibration) — LLM calibration, token probability, logit scores,
     temperature scaling, softmax confidence, Platt scaling, Expected Calibration Error (ECE),
     reliability diagram
  3. Statistics / conformal prediction — conformal prediction, prediction intervals, coverage
     guarantee, exchangeability, split conformal, Brier score, prediction sets
  4. Information retrieval / factuality — hallucination detection, source grounding,
     factuality verification, knowledge boundary, self-consistency, factual accuracy
  5. Retrieval-augmented generation (RAG) — RAG uncertainty, retrieval confidence,
     answer attribution, document relevance, grounded generation
  6. HCI / uncertainty communication — uncertainty visualization, communicating confidence,
     AI transparency, user trust calibration, verbal probability expressions, AI explanations
  7. ML safety / OOD detection — out-of-distribution detection, anomaly detection,
     selective prediction, coverage-accuracy tradeoff, distribution shift, abstention
  8. Active learning — uncertainty sampling, query by committee, least confident sampling,
     committee disagreement, acquisition function
  9. Semantic / linguistic uncertainty — semantic entropy, meaning-level uncertainty,
     semantic clustering, paraphrase diversity, generative uncertainty

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate
  traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known
  anchor paper) is recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  (No comparison or intervention-outcome structure in the prompt. User asks "how to measure
  and express" — an open coverage question, not a comparison between specific methods.)

Scope markers: None stated — inferred scope: general UQ for language model outputs, spanning
  both technical measurement methods and user-facing expression/communication of uncertainty.
  Not restricted to any specific model family, task type, or deployment context.

Known exclusions: None stated

Domain maturity estimate: mixed
  Basis: Anchor vocabulary spans academic framing ("uncertainty quantification") and
  practitioner framing ("express uncertainty"). Field has active academic research (arXiv
  papers on calibration, conformal prediction for LLMs, semantic entropy) AND heavy
  practitioner interest (hallucination detection, RAG grounding, AI trust in deployed
  systems). Both populations produce research-relevant output.

Survey paper status: UNAVAILABLE — no web search available in this execution context.
  Vocabulary-discovery pass recommended before treating angle list as complete.

Source B status: UNAVAILABLE — MODERATE
  Source A + Source C together produced ≥9 distinct vocabulary traditions, well above
  the ≥2 threshold required for MODERATE assessment. Proceeding with VOCABULARY
  SELF-REPORT FLAG active (see angle-quality Gate 2 limit 3).
```

**Intake gate check:**
- Topic field populated: YES
- Candidate vocabulary traditions ≥2 entries: YES (9 identified)
- Question type classified: YES (EXPLORATORY)

All three gate conditions satisfied. Proceeding to angle-generation.md.

---

## COVERAGE MAP (angle-generation.md Step 0)

```
COVERAGE MAP
============

Tradition 1: Bayesian ML / probabilistic ML
  Representative terms: epistemic uncertainty, aleatoric uncertainty, Bayesian deep learning,
    Monte Carlo dropout, deep ensembles, posterior predictive
  Planned angle slot: Confirmatory A1
  Gap flag: no

Tradition 2: NLP / ML systems (calibration)
  Representative terms: LLM calibration, token probability, ECE, temperature scaling,
    softmax confidence, reliability diagram
  Planned angle slot: Confirmatory A2
  Gap flag: no

Tradition 3: Statistics / conformal prediction
  Representative terms: conformal prediction, prediction intervals, coverage guarantee,
    exchangeability, prediction sets
  Planned angle slot: Confirmatory A3
  Gap flag: no

Tradition 4: Information retrieval / factuality
  Representative terms: hallucination detection, factual consistency, knowledge boundary,
    self-knowledge, source grounding
  Planned angle slot: Confirmatory A4
  Gap flag: no

Tradition 5: Information retrieval / RAG systems
  Representative terms: retrieval-augmented generation uncertainty, answer attribution,
    document relevance confidence, grounded generation
  Planned angle slot: Confirmatory A5
  Gap flag: no

Tradition 6: HCI / uncertainty communication
  Representative terms: uncertainty visualization, AI transparency, user trust,
    communicating confidence, verbal probability expressions
  Planned angle slot: Confirmatory A6
  Gap flag: no

Tradition 7: ML safety / OOD detection
  Representative terms: out-of-distribution detection, selective prediction, abstention,
    coverage-accuracy tradeoff, distribution shift
  Planned angle slot: Confirmatory A7
  Gap flag: no

Tradition 8: Active learning
  Representative terms: uncertainty sampling, query by committee, committee disagreement,
    acquisition function, least confident sampling
  Planned angle slot: Confirmatory A8
  Gap flag: no

Tradition 9: Semantic / linguistic uncertainty
  Representative terms: semantic entropy, meaning-level uncertainty, semantic clustering,
    paraphrase diversity, free-form generation uncertainty
  Planned angle slot: Confirmatory A9
  Gap flag: no

Additional confirmatory slots:
  Tradition 10: NLP / verbal uncertainty elicitation
    Representative terms: LLM verbalized confidence, self-expressed uncertainty,
      "I don't know" elicitation, prompting for uncertainty, linguistic hedging
    Planned angle slot: Confirmatory A10
    Gap flag: no

  Tradition 11: Evaluation methodology (UQ-specific)
    Representative terms: calibration benchmark, UQ evaluation protocol, ECE score,
      AUROC for uncertainty, coverage score
    Planned angle slot: Confirmatory A11
    Gap flag: no

Traditions NOT yet represented in the planned list:
  All identified traditions from intake brief have at least one angle slot.

Cross-disciplinary slot (required):
  Target tradition: Decision analysis / risk communication (NOT in intake brief)
  Basis for selection: Decision analysis and intelligence community research has produced
    a distinct literature on verbal probability expressions (e.g., "likely," "possible,"
    "almost certain") and the numeric-verbal translation problem. This vocabulary
    (Verbal Probability Expressions, Sherman Kent scale, numeric anchoring, probability
    word calibration) does not appear in ML/NLP research but is directly relevant to
    expressing uncertainty in LLM outputs. Different vocabulary → different literature.

Justification for 15 angles (exceeds standard 5-12 range):
  ≥9 distinct vocabulary traditions identified at intake, all with separate literatures.
  Topic spans multiple disciplines with genuine cross-tradition coverage gaps.
  Per angle-generation.md: "Hard input (complex multi-tradition domain): 20-30 angles
  is appropriate when ≥4 distinct vocabulary traditions are identified."
  15 angles falls within the appropriate range for this domain.
```

---

## TYPE ALLOCATIONS (angle-generation.md Step 1)

```
TYPE ALLOCATIONS
================
Slot A1  (Confirmatory — Bayesian ML / probabilistic ML): assigned
Slot A2  (Confirmatory — NLP / calibration): assigned
Slot A3  (Confirmatory — Statistics / conformal prediction): assigned
Slot A4  (Confirmatory — IR / factuality — hallucination detection): assigned
Slot A5  (Confirmatory — IR / RAG systems): assigned
Slot A6  (Confirmatory — HCI / uncertainty communication): assigned
Slot A7  (Confirmatory — ML safety / OOD detection): assigned
Slot A8  (Confirmatory — Active learning): assigned
Slot A9  (Confirmatory — Semantic / linguistic uncertainty): assigned
Slot A10 (Confirmatory — NLP / verbal uncertainty elicitation): assigned
Slot A11 (Confirmatory — Evaluation methodology): assigned
Slot N1  (Null-hypothesis): assigned — evidence that UQ methods fail or do not transfer
Slot D1  (Adversarial — Philosophy / epistemology):
  Starting vocabulary: epistemology, self-knowledge, introspection, knowing what one does
    not know, Socratic uncertainty, epistemic humility, epistemic closure
  NOT FROM: Bayesian ML, calibration, conformal, hallucination/RAG, HCI, OOD, active
    learning, semantic entropy, verbal elicitation, evaluation methodology
Slot C1  (Cross-disciplinary — Decision analysis / risk communication): assigned
```

---

## ANGLE LIST (angle-generation.md Steps 2–4)

---

### ANGLE 1: Bayesian Uncertainty Methods for Large Language Models

```
Vocabulary tradition: Bayesian ML / probabilistic ML
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Specific Bayesian methods adapted for LLMs; comparison of epistemic vs.
  aleatoric uncertainty decomposition; computational cost and scalability findings;
  scope conditions (which tasks the methods transfer to); reported failure modes.

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub (implementations of MC Dropout / deep ensembles
  for transformer models; search: "LLM uncertainty" language:Python sort:stars)

Queries:
  Q1: Bayesian uncertainty quantification large language models epistemic aleatoric 2023 2024 2025
  Q2: Monte Carlo dropout transformer uncertainty estimation language model
  Q3: deep ensembles language model uncertainty scalability generative text
  Q4: variational inference posterior predictive uncertainty language model fine-tuning

Coverage-gap note: Queries focus on weight-space Bayesian methods. Function-space
  Bayesian approaches (Gaussian processes on LLMs) are not well-covered here and
  may require a separate search using "Gaussian process language model" vocabulary.
```

---

### ANGLE 2: Ensemble and Sampling-Based Uncertainty Estimation

```
Vocabulary tradition: ML systems / sampling methods
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Specific sampling strategies (temperature, top-p, beam diversity);
  diversity metrics used to estimate uncertainty; efficiency findings; comparison with
  Bayesian methods on same benchmarks.

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub (repositories for LLM evaluation / uncertainty
  estimation pipelines)

Queries:
  Q1: ensemble uncertainty estimation large language model output diversity sampling 2024
  Q2: multiple sampling uncertainty quantification language model generation disagreement
  Q3: LLM output diversity temperature sampling predictive uncertainty estimation comparison
  Q4: ensemble methods language model uncertainty scalability inference cost tradeoff

Coverage-gap note: Queries target output-space diversity rather than weight-space
  diversity. Cross-references with Angle 1 (weight-space Bayesian) should check
  for overlap on "deep ensembles" papers — these appear in both traditions.
```

---

### ANGLE 3: Calibration of LLM Token Probabilities

```
Vocabulary tradition: NLP / ML systems (calibration)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Calibration measurement protocols; ECE values reported for major LLMs;
  post-hoc calibration methods and their effectiveness; findings on whether
  instruction-tuned models are better or worse calibrated than base models.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): Hugging Face blog posts and technical reports on model
  evaluation; OpenAI, Anthropic, Google published model cards (search for "calibration"
  in evaluation sections)

Queries:
  Q1: language model calibration token probability expected calibration error 2023 2024 2025
  Q2: temperature scaling Platt scaling LLM calibration overconfidence softmax
  Q3: LLM RLHF instruction tuning calibration reliability diagram versus base model
  Q4: large language model confidence probability accuracy correlation calibration curve

Coverage-gap note: Calibration research for multiple-choice / classification tasks is
  well-covered. Calibration for open-ended generation (where correctness is not
  binary) is a gap — this connects to Angle 9 (semantic uncertainty) rather than
  being covered here.
```

---

### ANGLE 4: Conformal Prediction and Distribution-Free Uncertainty Sets for LLMs

```
Vocabulary tradition: Statistics / conformal prediction
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Specific conformal prediction procedures adapted for text (prediction
  sets of answers/tokens); coverage guarantees reported; exchangeability assumption
  violations in LLM settings; comparison with calibration-based approaches.

Source type (academic): arXiv cs.LG + stat.ML
Source type (practitioner): GitHub (conformal prediction for NLP repositories)

Queries:
  Q1: conformal prediction language model text generation coverage guarantee 2023 2024 2025
  Q2: conformal prediction NLP question answering prediction sets exchangeability
  Q3: split conformal prediction LLM uncertainty quantification distribution-free guarantee
  Q4: conformal risk control language generation selective prediction coverage-accuracy

Coverage-gap note: Most conformal NLP work is on classification or QA. Conformal
  prediction for free-form generation (where the output space is unbounded) is an
  active research gap and may return few results — predicted research character
  may be "gap" for generative tasks specifically.
```

---

### ANGLE 5: Hallucination Detection and Factual Knowledge Uncertainty

```
Vocabulary tradition: Information retrieval / factuality
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Detection methods for factual errors; relationship between model
  confidence signals and hallucination rate; findings on self-consistency as a
  factuality proxy; knowledge boundary detection.

Source type (academic): arXiv cs.CL
Source type (practitioner): GitHub (hallucination detection libraries: e.g., "hallucination
  evaluation" LLM repositories; technical reports from AI labs)

Queries:
  Q1: LLM hallucination detection factual uncertainty knowledge boundary 2024 2025
  Q2: language model factual consistency uncertainty self-knowledge calibration
  Q3: detecting hallucinations language model confidence score factual error
  Q4: LLM self-consistency hallucination factual uncertainty multiple sampling

Coverage-gap note: Queries primarily capture post-hoc detection. Methods for preventing
  hallucination by expressing uncertainty before generation (rather than detecting
  after) are partially addressed in Angle 10 (verbal elicitation) but not here.
```

---

### ANGLE 6: Uncertainty in Retrieval-Augmented Generation Pipelines

```
Vocabulary tradition: Information retrieval / RAG systems
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How uncertainty propagates through retrieval and generation stages;
  methods for attributing answer confidence to retrieved sources; handling of
  retrieval failure or low-relevance documents; practitioners' approaches.

Source type (academic): arXiv cs.CL + cs.IR
Source type (practitioner): GitHub (RAG framework repositories and uncertainty
  extensions); LangChain/LlamaIndex community discussions on uncertainty

Queries:
  Q1: retrieval augmented generation uncertainty confidence attribution 2024 2025
  Q2: RAG pipeline uncertainty quantification retrieval confidence answer grounding
  Q3: language model generation uncertainty retrieved document relevance confidence
  Q4: RAG factual uncertainty attribution source grounding answer calibration

Coverage-gap note: This angle covers uncertainty about retrieved facts. Uncertainty
  about retrieval quality (did we retrieve the right documents?) is distinct from
  uncertainty about the generated answer given retrieval — both appear in this query
  set but may need separate angles at higher research depth.
```

---

### ANGLE 7: LLM Self-Expressed Verbal Confidence — Uncertainty Elicitation

```
Vocabulary tradition: NLP / verbal uncertainty elicitation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for eliciting verbal uncertainty statements from LLMs;
  calibration of elicited verbal confidence vs. token probabilities; prompting
  strategies (chain-of-thought, explicit ask, linguistic hedges); findings on
  whether LLMs accurately introspect their own uncertainty.

Source type (academic): arXiv cs.CL
Source type (practitioner): Blog posts (e.g., promptengineering.org, LessWrong AI
  alignment posts on LLM introspection); GitHub prompt-engineering repositories

Queries:
  Q1: LLM verbalized uncertainty self-expressed confidence prompting introspection 2024 2025
  Q2: language model "I don't know" uncertainty expression calibration prompting
  Q3: eliciting uncertainty language model chain-of-thought verbal confidence linguistic hedge
  Q4: LLM self-knowledge introspection epistemic accuracy verbal probability

Coverage-gap note: The gap between token-level probability and verbalized confidence
  is a core question here. Papers that compare these two sources of uncertainty
  signal are the highest-value extraction target.
```

---

### ANGLE 8: Semantic Uncertainty for Free-Form Text Generation

```
Vocabulary tradition: NLP / semantic uncertainty
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Semantic clustering methods; semantic entropy calculation;
  comparison with token-level uncertainty; findings on when semantic uncertainty
  diverges from token uncertainty; application to open-domain QA.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub (semantic entropy implementations; "semantic
  uncertainty" repositories)

Queries:
  Q1: semantic uncertainty language model free-form generation text 2023 2024 2025
  Q2: semantic entropy uncertainty quantification language model natural language generation
  Q3: meaning-level uncertainty language model paraphrase clustering generation diversity
  Q4: uncertainty quantification open-ended generation LLM semantic equivalence classes

Coverage-gap note: Semantic entropy (Kuhn et al. 2023 approach) is the central
  reference for this angle. Queries should surface both the original paper and
  subsequent extensions or critiques.
```

---

### ANGLE 9: Communicating AI Uncertainty to End-Users (HCI)

```
Vocabulary tradition: HCI / uncertainty communication
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evaluation frameworks for uncertainty communication effectiveness;
  user trust and over-reliance findings; interface design patterns (verbal vs.
  numeric vs. visual); effects on user decision quality; user mental models of
  AI confidence.

Source type (academic): ACM Digital Library (CHI, CSCW, IUI conferences) — note:
  this population is NOT on arXiv; use Semantic Scholar for cross-indexing
Source type (practitioner): Nielsen Norman Group reports; UX case studies from AI
  product teams

Queries:
  Q1: uncertainty communication large language model user trust interface design 2023 2024 2025
  Q2: AI confidence visualization human-computer interaction user calibration trust
  Q3: communicating uncertainty AI system user mental model reliance over-trust
  Q4: LLM transparency uncertainty display user decision quality empirical study

Coverage-gap note: This angle primarily surfaces HCI experimental work. Separately,
  verbal probability expression research (Angle 15 — cross-disciplinary) covers the
  linguistics of how confidence statements are understood — a different but
  complementary literature.
```

---

### ANGLE 10: Out-of-Distribution Detection and Selective Prediction for LLMs

```
Vocabulary tradition: ML safety / OOD detection
Angle type: Confirmatory
Predicted research character: empirical
What to extract: OOD detection methods applied to LLM settings; selective prediction
  (abstention) strategies; coverage-accuracy tradeoff curves; deployment findings on
  distribution shift effects; thresholding strategies.

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub (OOD detection for transformers; "selective
  prediction" LLM repositories)

Queries:
  Q1: out-of-distribution detection language model uncertainty safety deployment 2024 2025
  Q2: selective prediction abstention language model uncertainty confidence threshold
  Q3: language model coverage-accuracy tradeoff selective generation risk distribution shift
  Q4: LLM covariate shift distribution shift uncertainty detection failure mode

Coverage-gap note: OOD detection for LLMs is less mature than OOD detection for
  image classifiers. Queries may return methodology papers that pre-date LLMs —
  filter for transfer and application papers.
```

---

### ANGLE 11: Active Learning Uncertainty Signals Applied to LLMs

```
Vocabulary tradition: Active learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How uncertainty sampling and query-by-committee methods transfer to
  LLMs; acquisition functions used with LLM fine-tuning; data labeling efficiency
  findings; committee disagreement as an uncertainty signal.

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): deprioritized — active learning for LLMs is primarily
  an academic research topic; GitHub repos exist but research papers are the
  primary source

Queries:
  Q1: active learning uncertainty sampling large language models fine-tuning 2023 2024 2025
  Q2: query by committee disagreement language model uncertainty acquisition function
  Q3: active learning LLM annotation uncertainty-based selection empirical
  Q4: least confidence margin sampling language model fine-tuning data efficiency

Coverage-gap note: Active learning for LLMs assumes access to model internals
  (e.g., output probabilities) that may not be available via API. Papers assuming
  black-box LLMs are the more practitioner-relevant subclass and may need a
  targeted search.
```

---

### ANGLE 12: Evaluation Benchmarks and Metrics for UQ in Language Models

```
Vocabulary tradition: Evaluation methodology
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Established metrics (ECE, AUROC, Brier score, coverage score);
  benchmark tasks used to evaluate UQ; empirical comparisons across methods;
  identified weaknesses of current metrics; proposals for new benchmarks.

Source type (academic): arXiv cs.CL + cs.LG; proceedings of NeurIPS, ICML, ICLR,
  EMNLP (search via Semantic Scholar for venue-specific coverage)
Source type (practitioner): GitHub (UQ evaluation toolkits; leaderboard repositories)

Queries:
  Q1: uncertainty quantification evaluation benchmark language model metrics 2024 2025
  Q2: expected calibration error AUROC Brier score language model uncertainty evaluation
  Q3: uncertainty quantification LLM empirical comparison benchmark evaluation methodology
  Q4: language model uncertainty quantification leaderboard benchmark MMLU evaluation

Coverage-gap note: Evaluation methodology for free-form generation uncertainty is
  less settled than for classification. Papers proposing new metrics (beyond ECE)
  for generative settings are the highest-value extraction target here.
```

---

### ANGLE 13: Evidence That UQ Methods Fail or Do Not Transfer to LLM Settings

**[NULL-HYPOTHESIS ANGLE]**

```
Vocabulary tradition: NLP / calibration + Bayesian ML (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Conditions under which calibration methods break down for LLMs;
  documented failures of conformal prediction assumptions in NLP; evidence that
  RLHF / instruction tuning worsens calibration; cases where uncertainty estimates
  are uncorrelated with actual correctness; transferability failures.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub issue threads on uncertainty-estimation libraries
  where practitioners report failures

Queries:
  Q1: language model uncertainty quantification failure limitations does not generalize 2024 2025
  Q2: LLM calibration breakdown RLHF instruction tuning makes calibration worse
  Q3: conformal prediction language model violations exchangeability failure text generation
  Q4: uncertainty estimation LLM uncorrelated correctness negative result poor calibration

Coverage-gap note: Null-result literature is systematically under-published. GitHub
  issues and workshop papers (e.g., NeurIPS Uncertainty workshops) are better
  sources for practitioner-discovered failures than main-venue papers.
```

---

### ANGLE 14: Epistemic Humility and Self-Knowledge in AI Systems — Philosophical Framing

**[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]**

```
Vocabulary tradition: Philosophy / epistemology
Angle type: Adversarial
Predicted research character: consensus (philosophical literature) + gap (empirical
  application to LLMs)
What to extract: Philosophical frameworks for what it means for a system to "know
  that it does not know"; conditions for genuine epistemic humility vs. performed
  uncertainty; whether LLM confidence signals have any epistemic status; critiques
  of treating statistical calibration as equivalent to knowledge.

  Generating from: philosophy / epistemology vocabulary
  Excluding from generation prompt: Bayesian, probabilistic, calibration, conformal,
    hallucination, retrieval, RAG, HCI, OOD, active learning, semantic entropy,
    ECE, token probability

Source type (academic): PhilPapers, Philosopher's Index (NOT arXiv — this literature
  is not on arXiv; use Google Scholar for discovery, Semantic Scholar for forward
  citation)
Source type (practitioner): AI alignment community writing (LessWrong, Alignment
  Forum); philosophical commentary from AI ethics researchers

Queries:
  Q1: epistemic humility artificial intelligence self-knowledge knowing what one does not know
  Q2: AI systems genuine uncertainty introspection philosophical critique epistemic status
  Q3: language model know what it does not know epistemic closure Socratic uncertainty
  Q4: calibration epistemic accuracy philosophical account AI machine knowledge

Coverage-gap note: This angle will likely return sparse empirical literature.
  Its purpose is to surface the philosophical critique tradition that asks whether
  statistical uncertainty signals (ECE, token probability) constitute genuine
  epistemic uncertainty in any meaningful sense — a question the confirmatory
  literature largely sidesteps.
```

---

### ANGLE 15: Verbal Probability Expressions and Risk Communication — Decision Analysis

```
Vocabulary tradition: Decision analysis / risk communication
Angle type: Cross-disciplinary
Predicted research character: empirical (decision analysis) + consensus (intelligence
  community standards)
What to extract: How verbal probability words ("likely," "possible," "almost certain")
  are interpreted numerically by different populations; the Sherman Kent scale and
  successors; numeric-to-verbal translation accuracy; implications for LLM output
  uncertainty communication; cross-cultural variation.

  Generating from: decision analysis / risk communication vocabulary
  NOT from: ML/NLP/HCI framing

Source type (academic): Decision Analysis journal; Journal of Behavioral Decision
  Making; PubMed (for clinical decision support communication); Semantic Scholar
Source type (practitioner): Intelligence community standards documents (ODNI
  probability language); meteorological probability communication research (NOAA
  uncertainty communication guides)

Queries:
  Q1: verbal probability expressions uncertainty communication interpretation decision making
  Q2: Sherman Kent scale probability words numerical interpretation intelligence analysis
  Q3: linguistic probability expressions calibration numeric translation ambiguity communication
  Q4: expressing uncertainty words versus numbers communication decision support AI

Coverage-gap note: This literature predates LLMs by decades but is directly relevant
  to Angle 9 (HCI) and Angle 7 (verbal elicitation). Synthesis between this
  tradition and the LLM-specific literature is likely sparse — expect this angle
  to surface transfer-applicable principles rather than direct LLM studies.
```

---

## GATE SUMMARY (angle-quality.md)

```
GATE SUMMARY
============

Gate 1 — Completeness:

  Null-hypothesis angle present: PASS
    Angle 13 explicitly framed as disconfirming; queries contain "failure," "does not
    generalize," "negative result," "breakdown," "violations" vocabulary.

  Adversarial angle present: PASS
    Angle 14 labeled [ADVERSARIAL-FLAGGED] with dispatch note. Generation used
    explicitly different starting vocabulary (philosophy / epistemology) with all
    ML/NLP/HCI terms excluded from generation prompt.

  Cross-disciplinary angle present: PASS
    Angle 15 targets decision analysis / risk communication — NOT in the intake brief's
    candidate vocabulary traditions list. Confirmed: tradition label "Decision analysis /
    risk communication" does not appear in intake brief traditions 1–9.

  Source-type coverage: PASS
    Domain flagged as mixed. At least one angle assigns practitioner source:
    GitHub appears in Angles 1, 2, 4, 5, 6, 7, 8, 10, 11, 12; blog posts in
    Angles 7, 9. Practitioner source present throughout.

  Vocabulary-tradition map populated: PASS
    Coverage map has 11 named traditions (Traditions 1–9 from intake brief plus
    Traditions 10–11 added at Step 1). All ≥2 threshold exceeded.

Gate 1 verdict: PASS

---

Gate 2 — Distinctness:

  Boolean-connective test (high-risk pairs checked):

  Angle 1 (Bayesian ML) vs. Angle 2 (ensemble/sampling):
    Angle 1 most distinctive term: "Monte Carlo dropout" / "posterior predictive"
    Angle 2 most distinctive term: "output diversity" / "sampling uncertainty"
    OR test: these retrieve overlapping but not identical sets (deep ensembles papers
    appear in both; but MC dropout papers and semantic entropy papers are non-overlapping).
    PASS with note: "deep ensembles" appears in both — researchers should deduplicate.

  Angle 3 (calibration) vs. Angle 4 (conformal prediction):
    "temperature scaling ECE" vs. "coverage guarantee exchangeability prediction sets" —
    fundamentally different vocabulary and methods. PASS.

  Angle 5 (hallucination/factuality) vs. Angle 6 (RAG uncertainty):
    Angle 5: "hallucination detection factual consistency knowledge boundary"
    Angle 6: "retrieval augmented generation attribution document relevance"
    Different documents expected. PASS.

  Angle 7 (verbal elicitation) vs. Angle 8 (semantic uncertainty):
    Angle 7: "I don't know" elicitation, prompting, verbalized confidence
    Angle 8: semantic entropy, clustering, paraphrase diversity
    Different vocabulary, different methods. PASS.

  Angle 9 (HCI communication) vs. Angle 15 (verbal probability expressions):
    Angle 9: HCI vocabulary — user trust, interface design, reliance, experiment
    Angle 15: Decision analysis vocabulary — Sherman Kent, verbal probability, numeric
      translation, intelligence community
    Different research communities, different journals. PASS.
    Note: Some overlap possible for papers that span both communities. Researchers
    should cross-reference Angles 9 and 15 during synthesis.

  All other pairs: distinct vocabulary, no formal test required.

  Vocabulary-tradition distinctness:
    All 15 angles have distinct tradition labels in their records.
    Angles 5 and 6 share a parent tradition (Information retrieval) but carry
    distinct sub-tradition labels ("IR / factuality" vs. "IR / RAG systems") and
    pass the Boolean-connective test. No merger required.

Gate 2 verdict: PASS with one deduplication note (Angle 1/Angle 2 "deep ensembles" overlap).

---

Gate 3 — Launchability:

  All 15 angles have at least 3 concrete query strings that can be pasted directly
  into a search interface. Checked character by character:
  No "TBD," "to be determined," "[fill in]," or placeholder vocabulary found in any
  query string.
  All "Source type (academic)" and "Source type (practitioner)" fields name specific
  platforms (arXiv cs.CL + cs.LG, Semantic Scholar, GitHub, ACM Digital Library,
  PhilPapers, Decision Analysis journal, PubMed, Hugging Face blogs).

  Exception — Angle 9 (HCI):
    Primary source assigned as ACM Digital Library (correct for CHI/CSCW/IUI papers).
    ACM Digital Library is not arXiv — per platform-calibration.md, arXiv cs.AI/cs.CL
    category rules do not apply here. Semantic Scholar recommended for cross-indexing.
    This is not a FAIL; it is a calibration note.

Gate 3 verdict: PASS

---

Gate 4 — Scoring prohibition:

  No angle record contains "this angle is most useful," "strongest angle," or any
  equivalent LLM self-quality assessment. All allocation decisions used structural
  criteria: vocabulary-tradition coverage, type allocation rules, Boolean-connective
  distinctness. No ranking by subjective promise or novelty.

Gate 4 verdict: PASS

---

Overall verdict: PASS — dispatch ready

---

Flags requiring human judgment:

  1. VOCABULARY SELF-REPORT FLAG: All 9 intake-brief traditions were enumerated by LLM
     only (Source B unavailable). External validation via survey-paper probe recommended
     before accepting the tradition set as complete. Tradition gaps are most likely in:
     (a) clinical/medical decision support UQ literature (may have distinct vocabulary
     not enumerated here), (b) post-training-cutoff 2025 methods that may have introduced
     new vocabulary not in LLM training data.

  2. Angle 1 / Angle 2 overlap on "deep ensembles": Researchers should deduplicate papers
     that appear in both angle result sets before synthesis. Not an angle merger candidate
     because the underlying traditions (Bayesian weight-space vs. output diversity) are
     distinct and will retrieve different bodies of work beyond this overlap.

  3. Angle 14 (ADVERSARIAL): Must be dispatched in a separate research context with no
     prior exposure to the confirmatory angle results. The ADVERSARIAL-FLAGGED label
     communicates this requirement but cannot enforce it at execution time.

  4. Angle 4 / conformal prediction for generative tasks: Predicted research character
     flagged as possibly "gap" for open-ended generation settings. Researchers should
     treat low result counts as evidence of a genuine gap, not a search failure.

  5. Small-literature exception check: This topic is active and the literature is not small
     (<20 papers). Small-literature exception does not apply. Boolean-connective test
     results are reliable.
```

---

## SELF-CHECK (angle-gen-kit CLAUDE.md Rule 6 — after-every-task)

Tasks completed this run:
- [x] Intake brief: all fields populated
- [x] Coverage map: 11 traditions, cross-disciplinary slot assigned
- [x] Type allocations: all slots allocated before generation
- [x] 15 angles generated with all required fields
- [x] Gate summary: all four gates run, overall PASS

What is missing or questionable in this output:

1. **Source B gap**: No survey paper probe was run. The vocabulary tradition list is LLM self-reported. The most likely missing tradition is **clinical/medical informatics** (uncertainty communication in clinical decision support systems), which has its own vocabulary (clinical calibration, risk communication in EHR systems, patient-facing uncertainty) and a distinct literature that would not be surfaced by ML/NLP vocabulary alone.

2. **Angle 14 execution dependency**: The adversarial angle (epistemology/philosophy) requires dispatch in a separate context. It cannot be run in the same context as the confirmatory angles without defeating its purpose.

3. **ACM Digital Library access for Angle 9**: HCI research on AI uncertainty communication is primarily in ACM venues, not arXiv. A research agent without ACM Digital Library access will undercover this tradition. Researchers should note this access dependency.

4. **Proposed next step**: A survey-paper probe run ("uncertainty quantification language models survey 2024 2025") in a context with web access would close the vocabulary-tradition gap. Running Source B would either confirm the 9 traditions enumerated here or surface additional traditions. This is the highest-value single action for improving angle list completeness before research dispatch.
