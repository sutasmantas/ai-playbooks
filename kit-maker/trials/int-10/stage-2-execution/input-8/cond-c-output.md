# Condition C Output — Angle Generation Run
**Input ID:** 8
**Topic:** Uncertainty quantification for language model outputs — how to measure and express uncertainty in what LLMs generate
**Condition:** C (no web search / Source B unavailable)
**Date generated:** 2026-07-05
**Kit files read:** CLAUDE.md, intake.md, angle-generation.md, angle-quality.md, weakness_register.md, platform-calibration.md

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: How to measure and express uncertainty in the outputs of large language models

Anchor vocabulary:
  - "uncertainty quantification" (probability/statistics/ML calibration tradition)
  - "language model outputs" (NLP/ML-systems tradition)
  - "measure" and "express" (dual framing: technical measurement AND communication to users)

Candidate vocabulary traditions:
  1. Probabilistic ML / Bayesian deep learning — epistemic uncertainty, aleatoric uncertainty,
     Bayesian neural networks, MC dropout, posterior uncertainty, variational inference
  2. Calibration and reliability (ML) — Expected Calibration Error (ECE), temperature scaling,
     Platt scaling, reliability diagrams, overconfidence, underconfidence
  3. Conformal prediction / distribution-free UQ — conformal sets, coverage guarantees,
     prediction intervals, exchangeability, conformal risk control
  4. NLP / LLM — verbalized confidence and model metacognition — verbalized uncertainty,
     self-assessment accuracy, "I don't know" behavior, linguistic hedging
  5. NLP / LLM — sampling-based uncertainty estimation — self-consistency, semantic entropy,
     generation diversity, multiple-sample agreement
  6. Hallucination detection and factuality — factual consistency, faithfulness, grounding,
     confabulation, factual accuracy, retrieval-augmented correction
  7. Selective prediction and abstention — reject option, risk-coverage tradeoff, confidence
     thresholding, abstaining from uncertain predictions
  8. Semantic uncertainty theory — meaning-space uncertainty, semantic equivalence classes,
     paraphrase diversity, token probability vs. semantic probability
  9. Information retrieval / RAG systems — retrieval uncertainty, source attribution,
     grounded generation, uncertainty propagation in pipelines
  10. HCI / uncertainty communication — confidence display, automation bias, over-trust,
      risk communication, user calibration, uncertainty UI patterns
  11. OOD detection / distributional robustness — distribution shift, covariate shift,
      novel input detection, in-distribution vs. out-of-distribution
  12. Black-box / deployment UQ — no-logit uncertainty, API access constraints,
      prompt-based UQ, uncertainty without model internals
  13. Fine-grained claim-level uncertainty granularity — claim-level, sentence-level,
      span-level uncertainty attribution, attribution to specific model beliefs

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate
  traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known
  anchor paper) is recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  (prompt asks "how to measure and express" — a space-of-approaches question with no explicit
  comparison, intervention-outcome pair, or named competing methods)

Scope markers: None stated — inferred scope: full methods landscape for UQ in LLM generation,
  not restricted to a specific model family, task type, or deployment domain

Known exclusions: None stated

Domain maturity estimate: academic-heavy
  Basis: user's anchor vocabulary is from the academic ML/statistics tradition
  ("uncertainty quantification"); the field has substantial arXiv preprint activity in
  cs.LG + cs.CL; domain is 3–5 years into rapid academic growth; practitioner tooling
  is emerging but primary production is academic research groups

Survey paper status: NOT CHECKED — Source B unavailable (subagent context)
  Recommendation: run survey probe ("uncertainty quantification language model survey 2024 2025")
  in a context with web access before accepting this angle list as tradition-complete

Source B status: UNAVAILABLE — MODERATE
  Reason: Source A + Source C together identified 13 distinct vocabulary traditions, meeting
  the MODERATE threshold (≥2 traditions). The topic is a well-established ML research area
  with strong LLM training coverage. Proceeding per intake.md Step 5 severity assessment.
  VOCABULARY SELF-REPORT FLAG is applied throughout.

Absent-term signal (Source C — terms the user did NOT use that are central to this area):
  - "calibration" (one of the primary research areas; its absence may signal the user is
    approaching from the theoretical UQ tradition, not the empirical calibration tradition)
  - "conformal prediction" (statistical framework with coverage guarantees; major 2022–2025
    activity)
  - "hallucination" (most prominent failure mode framing in practitioner literature)
  - "ECE" / Expected Calibration Error (central metric; absence suggests user may not have
    prior ML calibration background)
  - "verbalized confidence" (growing LLM-specific area; distinct from probability-based UQ)
  - "epistemic vs. aleatoric" (core conceptual distinction in the UQ tradition)
  - "semantic entropy" (influential 2023 method by Kuhn et al.; not yet prominent in user
    vocabulary)
  - "selective prediction" / "abstention" (related but distinct research community)
```

---

## COVERAGE MAP

```
COVERAGE MAP
============

Tradition 1: Probabilistic ML / Bayesian deep learning
  Representative terms: epistemic uncertainty, aleatoric uncertainty, Bayesian neural networks,
    MC dropout, variational inference, deep ensembles
  Planned angle slot: Confirmatory A1
  Gap flag: NO — well-covered in planned list

Tradition 2: Calibration and reliability (ML)
  Representative terms: ECE, temperature scaling, Platt scaling, reliability diagrams,
    overconfidence, calibration error, post-hoc calibration
  Planned angle slot: Confirmatory A2; Null-hypothesis N1 (disconfirming variant)
  Gap flag: NO

Tradition 3: Conformal prediction / distribution-free UQ
  Representative terms: conformal sets, coverage guarantees, exchangeability, conformal
    risk control, prediction intervals
  Planned angle slot: Confirmatory A3
  Gap flag: NO

Tradition 4: NLP / LLM — verbalized confidence and model metacognition
  Representative terms: verbalized uncertainty, self-assessment, "I don't know" elicitation,
    linguistic hedging, expressed confidence
  Planned angle slot: Confirmatory A4
  Gap flag: NO

Tradition 5: NLP / LLM — sampling-based uncertainty estimation
  Representative terms: self-consistency, semantic entropy, sampling diversity, multi-sample
    agreement, stochastic decoding
  Planned angle slot: Confirmatory A5
  Gap flag: NO

Tradition 6: Hallucination detection and factuality
  Representative terms: hallucination, factual consistency, faithfulness, grounding,
    confabulation, factuality metrics
  Planned angle slot: Confirmatory A6
  Gap flag: NO

Tradition 7: Selective prediction and abstention
  Representative terms: reject option, risk-coverage tradeoff, confidence thresholding,
    selective prediction, abstention, know-what-you-know
  Planned angle slot: Confirmatory A7
  Gap flag: NO

Tradition 8: Semantic uncertainty theory
  Representative terms: meaning-space uncertainty, semantic equivalence classes, paraphrase
    diversity, semantic vs. token-level probability
  Planned angle slot: Confirmatory A8
  Gap flag: NO

Tradition 9: Information retrieval / RAG systems
  Representative terms: retrieval uncertainty, source attribution, grounded generation,
    uncertainty propagation in retrieval pipelines
  Planned angle slot: Confirmatory A9
  Gap flag: NO

Tradition 10: HCI / uncertainty communication
  Representative terms: uncertainty display, automation bias, over-reliance, risk
    communication, user calibration, uncertainty UI
  Planned angle slot: Confirmatory A10
  Gap flag: NO

Tradition 11: OOD detection / distributional robustness
  Representative terms: OOD detection, distribution shift, covariate shift, novel input
    detection, in-distribution vs. out-of-distribution
  Planned angle slot: Confirmatory A11
  Gap flag: NO

Tradition 12: Black-box / deployment UQ
  Representative terms: no-logit uncertainty, API access constraints, prompt-based UQ,
    uncertainty without model weights
  Planned angle slot: Confirmatory A12
  Gap flag: NO

Tradition 13: Fine-grained claim-level uncertainty granularity
  Representative terms: claim-level uncertainty, sentence-level uncertainty, span-level
    attribution, fact-level confidence
  Planned angle slot: Confirmatory A13
  Gap flag: NO

Traditions NOT yet represented in the planned list:
  All 13 traditions from the intake brief have at least one planned angle slot.
  VOCABULARY SELF-REPORT FLAG: This completeness claim holds only within LLM-enumerated
  traditions. A survey-paper probe may surface additional traditions not represented here.

Cross-disciplinary slot (required):
  Target tradition: Probabilistic forecasting / meteorological scoring (NOT in intake brief)
  Basis for selection: Meteorology developed the formal apparatus for probabilistic forecast
    evaluation decades before ML: Brier scores, proper scoring rules, reliability diagrams,
    sharpness/resolution decomposition, skill scores. This tradition's evaluation framework
    directly applies to LLM output uncertainty but is rarely cited in the NLP/ML literature.
    It represents genuinely independent prior art with worked solutions to problems the ML
    community is treating as novel.

Adversarial slot:
  Starting vocabulary: Statistical critique / frequentist skepticism
  Excluding from generation prompt: all terms from confirmatory slots (calibration,
    Bayesian, conformal, verbalized, self-consistency, semantic entropy, hallucination,
    selective prediction, RAG, HCI, OOD, deployment, claim-level)
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1  (Confirmatory — Probabilistic ML / Bayesian deep learning): assigned
Slot A2  (Confirmatory — Calibration and reliability ML): assigned
Slot A3  (Confirmatory — Conformal prediction / distribution-free UQ): assigned
Slot A4  (Confirmatory — NLP / LLM verbalized confidence): assigned
Slot A5  (Confirmatory — NLP / LLM sampling-based methods): assigned
Slot A6  (Confirmatory — Hallucination detection and factuality): assigned
Slot A7  (Confirmatory — Selective prediction and abstention): assigned
Slot A8  (Confirmatory — Semantic uncertainty theory): assigned
Slot A9  (Confirmatory — Information retrieval / RAG systems): assigned
Slot A10 (Confirmatory — HCI / uncertainty communication): assigned
Slot A11 (Confirmatory — OOD detection / distributional robustness): assigned
Slot A12 (Confirmatory — Black-box / deployment UQ): assigned
Slot A13 (Confirmatory — Fine-grained claim-level uncertainty): assigned
Slot N1  (Null-hypothesis — disconfirming, Calibration tradition variant): assigned
Slot D1  (Adversarial — Statistical critique / frequentist skepticism — NOT FROM: all
          confirmatory traditions listed above): assigned
Slot C1  (Cross-disciplinary — Probabilistic forecasting / meteorology): assigned

Total: 16 angles
Justification for count exceeding standard range (5–12): ≥4 distinct vocabulary traditions
identified at intake (13 total); topic spans ML theory, statistics, NLP, HCI, and decision
science; hard-input rule in angle-generation.md Step 0 permits 20–30 for this profile.
16 angles was chosen as a conservative middle ground covering all traditions without angle
inflation. Any tradition gap from the VOCABULARY SELF-REPORT FLAG may add angles in a
Source B follow-up pass.
```

---

## ANGLE LIST

---

### ANGLE 1: Bayesian and Ensemble Approaches to LLM Uncertainty
```
ANGLE 1: Bayesian and Ensemble Approaches to LLM Uncertainty
==============================================================
Vocabulary tradition: Probabilistic ML / Bayesian deep learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: which Bayesian approximations (MC dropout, deep ensembles, Laplace
  approximation, variational inference) have been applied to LLMs; accuracy of resulting
  uncertainty estimates vs. baseline; computational cost tradeoffs; whether posterior
  approximation is tractable at LLM scale

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub — search for repos implementing ensemble or Bayesian
  uncertainty for transformer models (≥50 stars, ≥10 forks per platform-calibration.md)

Queries:
  Q1: Bayesian deep learning large language model uncertainty estimation epistemic aleatoric 2023 2024 2025
  Q2: deep ensembles uncertainty quantification language model scalability transformer
  Q3: MC dropout uncertainty estimation language generation transformer architecture

Coverage-gap note: Queries focus on post-training Bayesian approximation; Bayesian
  pretraining (training with uncertainty objectives from scratch) is a related but
  distinct literature not covered by these queries. Flag for a sub-angle if the primary
  search returns substantial Bayesian pretraining literature.
```

---

### ANGLE 2: Calibration of LLM Output Probability Scores
```
ANGLE 2: Calibration of LLM Output Probability Scores
======================================================
Vocabulary tradition: Calibration and reliability (ML)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: which calibration methods have been applied to LLMs (temperature scaling,
  label smoothing, Platt scaling, histogram binning); measurement tools (ECE, MCE, Brier
  score); evidence of miscalibration direction (overconfident vs. underconfident); whether
  RLHF/instruction tuning affects calibration; per-task calibration differences

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): Hugging Face blog posts and model cards (practitioner-oriented
  calibration documentation for deployed models)

Queries:
  Q1: calibration large language model expected calibration error probability score 2023 2024 2025
  Q2: temperature scaling LLM confidence score overconfidence RLHF instruction tuning effect
  Q3: language model miscalibration direction underconfident overconfident task-specific 2024

Coverage-gap note: These queries target post-hoc calibration. In-training calibration
  objectives (e.g., loss functions designed to produce calibrated probabilities from the
  start) are a separate literature that may not be recovered here.
```

---

### ANGLE 3: Conformal Prediction for Language Model Output Coverage Guarantees
```
ANGLE 3: Conformal Prediction for Language Model Output Coverage Guarantees
===========================================================================
Vocabulary tradition: Conformal prediction / distribution-free UQ
Angle type: Confirmatory
Predicted research character: empirical
What to extract: how conformal prediction has been adapted from structured classification
  to text generation; coverage guarantee derivations; what the "prediction set" means for
  text outputs; conformal risk control applications; exchangeability assumption validity
  for LLM outputs; empirical coverage vs. nominal coverage

Source type (academic): arXiv cs.LG + cs.CL + stat.ML (distribution-free methods span
  all three categories)
Source type (practitioner): GitHub repos implementing conformal prediction for NLP tasks

Queries:
  Q1: conformal prediction language model text generation coverage guarantee 2023 2024 2025
  Q2: conformal risk control LLM output natural language generation distribution-free uncertainty
  Q3: split conformal prediction NLP classification generation exchangeability assumption

Coverage-gap note: Conformal prediction for multi-step reasoning (chain-of-thought) is
  a gap — existing work largely addresses single-turn generation. Compound generation
  pipelines may violate exchangeability in ways these queries will not surface.
```

---

### ANGLE 4: Verbalized Confidence and Model Metacognition in LLMs
```
ANGLE 4: Verbalized Confidence and Model Metacognition in LLMs
==============================================================
Vocabulary tradition: Language model metacognition / verbalized confidence
Angle type: Confirmatory
Predicted research character: empirical
What to extract: accuracy of LLM self-reported confidence vs. actual accuracy; elicitation
  methods (numeric probability requests, verbal hedging, calibration prompts); whether
  verbalized confidence is calibrated differently from token-probability confidence;
  "I don't know" elicitation results; linguistic hedging correlation with factual accuracy

Source type (academic): arXiv cs.CL + cs.AI
Source type (practitioner): LLM evaluation benchmark GitHub repos with verbalized
  uncertainty assessments

Queries:
  Q1: verbalized confidence calibration language model self-assessment accuracy 2023 2024 2025
  Q2: LLM "I don't know" elicitation know-what-you-know metacognition empirical study
  Q3: expressed uncertainty linguistic hedging language model factual accuracy correlation 2024

Coverage-gap note: These queries target English-language LLMs. Whether verbalized
  uncertainty behavior transfers across languages is not covered; multilingual models may
  show different metacognitive calibration patterns.
```

---

### ANGLE 5: Sampling-Based Uncertainty Estimation — Self-Consistency and Semantic Entropy
```
ANGLE 5: Sampling-Based Uncertainty Estimation — Self-Consistency and Semantic Entropy
======================================================================================
Vocabulary tradition: Sampling-based uncertainty estimation (LLM)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: how sampling multiple outputs from an LLM can estimate uncertainty;
  methods (self-consistency, semantic entropy, lexical diversity, embedding variance);
  empirical accuracy as uncertainty estimators; cost of multi-sample approaches; whether
  sampling-based UQ outperforms token-probability-based UQ; failure modes

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — semantic entropy and self-consistency implementations
  (≥50 stars)

Queries:
  Q1: self-consistency sampling uncertainty estimation language model 2023 2024 2025
  Q2: semantic entropy language model uncertainty generation diversity cluster 2023 2024
  Q3: multiple sampling generation agreement uncertainty LLM empirical evaluation hallucination

Coverage-gap note: Queries focus on generation-time sampling. The relationship between
  training-time stochasticity and sampling-based uncertainty (e.g., dropout at inference)
  vs. decoding stochasticity (temperature sampling) is not clearly separated in these
  queries — downstream searcher should note the distinction.
```

---

### ANGLE 6: Hallucination Detection as Revealed Uncertainty Failure
```
ANGLE 6: Hallucination Detection as Revealed Uncertainty Failure
================================================================
Vocabulary tradition: Hallucination detection and factuality (NLP)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: how hallucination detection methods relate to uncertainty quantification;
  whether high uncertainty predicts hallucination events; factuality metrics (FactScore,
  FACTSCORE, FActScoring); whether uncertainty signals can be used as pre-hoc hallucination
  guards; the relationship between confidence scores and factual error rates

Source type (academic): arXiv cs.CL
Source type (practitioner): GitHub — hallucination detection benchmark repos; practitioner
  guides on LLM factuality auditing

Queries:
  Q1: hallucination detection uncertainty quantification language model factual error 2023 2024 2025
  Q2: LLM confidence score predict hallucination factual accuracy correlation empirical
  Q3: overconfident language model factual error confabulation uncertainty signal 2024

Coverage-gap note: Queries target factual hallucination. Other hallucination types
  (faithfulness hallucination in summarization, instruction hallucination) have separate
  literature that these queries may not fully recover.
```

---

### ANGLE 7: Selective Prediction and Abstention Under Uncertainty
```
ANGLE 7: Selective Prediction and Abstention Under Uncertainty
==============================================================
Vocabulary tradition: Selective prediction and abstention (ML reliability)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: how LLMs can be configured to abstain from answering when uncertainty
  is high; risk-coverage tradeoff curves; threshold selection methods; empirical
  accuracy-abstention tradeoffs; comparison of abstention triggers (uncertainty score
  threshold, verbalized "I don't know," confidence thresholding); deployment implications

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): LLM deployment guides and model card documentation for
  production abstention behavior

Queries:
  Q1: selective prediction abstention language model uncertainty threshold risk coverage 2023 2024 2025
  Q2: LLM abstain uncertain question confidence threshold know-your-limits tradeoff empirical
  Q3: reject option language model high-stakes deployment uncertainty threshold accuracy

Coverage-gap note: Most existing selective prediction work is for classification tasks.
  How abstention behaves for open-ended generation (where the boundary between "uncertain"
  and "low-quality" outputs is less crisp) may not be well-covered.
```

---

### ANGLE 8: Semantic Uncertainty Theory — Meaning-Space vs. Token-Space Uncertainty
```
ANGLE 8: Semantic Uncertainty Theory — Meaning-Space vs. Token-Space Uncertainty
=================================================================================
Vocabulary tradition: Semantic uncertainty theory
Angle type: Confirmatory
Predicted research character: empirical
What to extract: theoretical arguments for why token-level probability is an insufficient
  proxy for semantic uncertainty; methods for aggregating token probabilities to the
  semantic/meaning level; equivalence class construction for LLM outputs; empirical
  comparison of token-level vs. semantic-level uncertainty estimates; when they diverge;
  implications for UQ methodology

Source type (academic): arXiv cs.CL + cs.LG + stat.ML
Source type (practitioner): deprioritized — this is a theoretical subfield with minimal
  direct practitioner production; check GitHub for semantic uncertainty toolkits as a
  secondary source

Queries:
  Q1: semantic uncertainty language model meaning space paraphrase equivalence 2023 2024 2025
  Q2: token probability versus semantic probability language model uncertainty distinction 2024
  Q3: natural language generation uncertainty aggregation meaning level claim level token level

Coverage-gap note: The interface between semantic uncertainty and formal linguistic
  semantics (formal meaning representations, truth conditions) is a gap — this angle
  focuses on the empirical ML tradition, not formal language theory.
```

---

### ANGLE 9: Uncertainty in Retrieval-Augmented Generation (RAG) Pipelines
```
ANGLE 9: Uncertainty in Retrieval-Augmented Generation (RAG) Pipelines
=======================================================================
Vocabulary tradition: Information retrieval / RAG systems
Angle type: Confirmatory
Predicted research character: empirical
What to extract: how uncertainty propagates through retrieval-generation pipelines; source
  attribution confidence; uncertainty about retrieval relevance vs. uncertainty in
  generation; whether retrieved context reduces or transfers uncertainty; methods for
  uncertainty-aware RAG; failure modes specific to RAG uncertainty

Source type (academic): arXiv cs.CL + cs.IR
Source type (practitioner): GitHub — RAG framework repos with uncertainty/confidence
  features (LangChain, LlamaIndex issue threads as vocabulary source per
  platform-calibration.md GitHub guidance)

Queries:
  Q1: uncertainty quantification retrieval-augmented generation RAG language model 2023 2024 2025
  Q2: confidence estimation RAG pipeline retrieval uncertainty generation uncertainty propagation
  Q3: source attribution uncertainty grounded generation language model faithfulness confidence

Coverage-gap note: These queries target standard RAG (retrieve-then-generate). Iterative
  RAG, multi-hop retrieval, and agentic RAG pipelines have distinct uncertainty propagation
  dynamics not well-covered by these queries.
```

---

### ANGLE 10: Human Reception of LLM Uncertainty Signals — HCI and Trust
```
ANGLE 10: Human Reception of LLM Uncertainty Signals — HCI and Trust
=====================================================================
Vocabulary tradition: HCI / uncertainty communication
Angle type: Confirmatory
Predicted research character: empirical
What to extract: how different uncertainty display formats (verbal, numeric, visual) affect
  user reliance and decision quality; automation bias findings specific to LLM uncertainty;
  over-trust and under-trust calibration in users; uncertainty communication designs that
  improve human-AI team performance; PubMed/HCI literature on uncertainty communication
  design (this angle warrants PubMed as a secondary source given HCI conference publication
  patterns)

Source type (academic): arXiv cs.HC + ACM DL (CHI, CSCW venues); secondarily PubMed for
  human factors / decision support findings
Source type (practitioner): Nielsen Norman Group reports; UX practitioner blogs on
  AI uncertainty display

Queries:
  Q1: uncertainty communication language model human AI trust decision reliance 2023 2024 2025
  Q2: LLM confidence display user interface automation bias over-reliance calibration effect
  Q3: expressed AI uncertainty human decision quality uncertainty presentation format effect

Coverage-gap note: The PubMed translation note in platform-calibration.md applies here —
  HCI and human factors literature uses different MeSH terms. If arXiv queries return
  insufficient HCI literature, translate to: "clinical decision support uncertainty
  communication" + "automation bias intelligent systems" as PubMed entry points.
```

---

### ANGLE 11: OOD Detection and Distributional Robustness as Uncertainty Sources
```
ANGLE 11: OOD Detection and Distributional Robustness as Uncertainty Sources
=============================================================================
Vocabulary tradition: OOD detection / distributional robustness
Angle type: Confirmatory
Predicted research character: empirical
What to extract: methods for detecting when an LLM input is outside its training
  distribution; whether OOD scores correlate with calibration failure; how covariate
  shift affects LLM confidence scores; whether OOD uncertainty is epistemic or
  aleatoric in nature; empirical benchmarks for OOD detection in LLMs

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub — OOD detection libraries with LLM support

Queries:
  Q1: out-of-distribution detection language model uncertainty open domain novel inputs 2023 2024 2025
  Q2: distributional shift covariate shift LLM uncertainty calibration failure empirical
  Q3: anomaly detection language model input uncertainty in-context learning OOD robustness

Coverage-gap note: OOD detection in LLMs is often framed as detecting harmful or
  off-policy inputs (safety literature) rather than as a calibration/UQ concern.
  The safety-framing literature may require different vocabulary to retrieve.
```

---

### ANGLE 12: Black-Box Uncertainty Estimation — No Access to Model Internals
```
ANGLE 12: Black-Box Uncertainty Estimation — No Access to Model Internals
=========================================================================
Vocabulary tradition: Black-box / deployment UQ
Angle type: Confirmatory
Predicted research character: empirical
What to extract: methods for estimating LLM uncertainty without access to token
  probabilities or model weights (API-only deployment context); verbalization-only
  approaches; prompt-based uncertainty elicitation; behavioral consistency probes;
  external verifier approaches; limitations of black-box vs. white-box UQ methods

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — black-box LLM uncertainty tools; practitioner blogs
  on LLM reliability for API-only deployments

Queries:
  Q1: black-box uncertainty language model without logits API access confidence estimation 2023 2024 2025
  Q2: prompt-based uncertainty quantification language model no probability access API-only
  Q3: LLM uncertainty estimation without token probability verbalization consistency probe 2024

Coverage-gap note: This angle assumes a single API call model. Batch sampling for
  uncertainty (possible even in black-box API contexts) overlaps with Angle 5
  (sampling-based methods). Downstream searcher should note the distinction and merge
  results where sampling-based methods are applied in black-box contexts.
```

---

### ANGLE 13: Claim-Level and Fine-Grained Uncertainty Attribution
```
ANGLE 13: Claim-Level and Fine-Grained Uncertainty Attribution
==============================================================
Vocabulary tradition: Fine-grained claim-level uncertainty granularity
Angle type: Confirmatory
Predicted research character: empirical
What to extract: methods for attributing uncertainty to specific claims or sentences
  within a longer LLM output (rather than a single output-level score); annotation
  frameworks for claim-level uncertainty; span-level confidence; whether fine-grained
  attribution improves downstream use; long-form generation uncertainty decomposition

Source type (academic): arXiv cs.CL
Source type (practitioner): GitHub — citation/attribution tools with confidence scoring

Queries:
  Q1: claim-level uncertainty attribution language model factual statement sentence 2023 2024 2025
  Q2: span-level confidence LLM long-form generation uncertainty decomposition granularity
  Q3: fine-grained uncertainty annotation language model response claim attribution 2024

Coverage-gap note: Claim-level uncertainty overlaps with factual grounding literature
  (Angle 6) and fine-grained attribution to retrieved sources (Angle 9). Downstream
  searcher should review for overlap and merge or differentiate explicitly.
```

---

### ANGLE 14: Evidence That UQ Methods Fail or Do Not Generalize for LLMs
*(Null-hypothesis angle)*

```
ANGLE 14: Evidence That UQ Methods Fail or Do Not Generalize for LLMs
======================================================================
Vocabulary tradition: Calibration and reliability (ML) — disconfirming variant
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: conditions under which LLM uncertainty estimates are unreliable,
  misleading, or uncorrelated with actual uncertainty; negative results for calibration
  methods; evidence that well-calibrated models become miscalibrated under distribution
  shift or after RLHF fine-tuning; scope conditions under which UQ methods fail to
  generalize; documented failure modes of specific UQ methods; cases where UQ signals
  are worse than random baselines; null results for verbalized uncertainty accuracy

Source type (academic): arXiv cs.LG + cs.CL — specifically look for ablation sections
  in calibration papers that report failure conditions; Semantic Scholar for citation
  network of papers criticizing LLM calibration claims
Source type (practitioner): GitHub issue threads on UQ toolkits — practitioner-reported
  failures are a non-academic failure-mode source

Queries:
  Q1: language model uncertainty quantification failure misleading unreliable negative results limitations 2023 2024 2025
  Q2: LLM confidence score not correlated accuracy miscalibrated RLHF fine-tuning distribution shift
  Q3: uncertainty estimation language model failure generalization scope condition breakdown empirical
  Q4: well-calibrated language model harmful overconfident adversarial prompt out-of-distribution negative

Coverage-gap note: Null results are systematically underrepresented in preprint archives.
  This angle may return fewer results than its importance warrants — absence of literature
  is not absence of failure modes. Downstream searcher should treat low retrieval as a
  gap signal, not as evidence the failure modes do not exist.
```

---

### ANGLE 15: Whether LLM Token Probabilities Are Fundamentally Uninformative as Uncertainty Signals
*(Adversarial angle)*

```
ANGLE 15: Whether LLM Token Probabilities Are Fundamentally Uninformative as Uncertainty Signals
================================================================================================
Vocabulary tradition: Statistical critique / frequentist skepticism
Angle type: Adversarial-FLAGGED
  [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Predicted research character: empirical + conceptual
What to extract: arguments and empirical evidence that LLM token probabilities are
  not meaningful probability estimates at all; theoretical critiques of treating softmax
  outputs as probabilities; empirical decoupling of token probability from semantic
  uncertainty; evidence that LLMs' probability scores encode surface features rather
  than epistemic state; distributional arguments that LLMs are not probabilistic models
  in the statistical sense; critiques from frequentist and statistical learning theory
  perspectives that the entire UQ for LLMs framing is misspecified

Generating from vocabulary: statistical critique, frequentist skepticism, softmax
  arbitrariness, miscalibration as fundamental not incidental, LLM-as-not-a-probabilistic-model
Excluding from generation prompt: calibration, Bayesian, conformal, verbalized,
  self-consistency, semantic entropy, hallucination, selective prediction, RAG, HCI, OOD,
  deployment, claim-level (all confirmatory angle traditions excluded)

Source type (academic): arXiv cs.LG + stat.ML; look for papers by authors skeptical of
  probabilistic LLM outputs (Gal, Ghahramani, Wilson traditions in Bayesian deep learning
  critique; statistical learning theory venues)
Source type (practitioner): LessWrong / alignment forum discussions; practitioner blogs
  explicitly questioning LLM probability interpretation

Queries:
  Q1: language model probability softmax arbitrary uninformative uncertainty critique statistical 2023 2024 2025
  Q2: LLM token likelihood not calibrated spurious correlation surface form not semantic content
  Q3: next-token probability true epistemic uncertainty decoupled large language model empirical critique

Coverage-gap note: This angle is intentionally adversarial and should be dispatched
  separately from the confirmatory angles. Results from this angle should be synthesized
  last, after confirmatory results are established, to prevent premature dismissal of the
  UQ literature.
```

---

### ANGLE 16: Proper Scoring Rules and Probabilistic Forecast Calibration from Meteorology
*(Cross-disciplinary angle)*

```
ANGLE 16: Proper Scoring Rules and Probabilistic Forecast Calibration from Meteorology
=======================================================================================
Vocabulary tradition: Probabilistic forecasting / meteorological scoring (CROSS-DISCIPLINARY)
  — this tradition is NOT in the intake brief's candidate vocabulary traditions list
Angle type: Cross-disciplinary
Predicted research character: consensus (mature methodological tradition)
What to extract: how proper scoring rules (Brier score, CRPS, log score, energy score)
  have been adapted for LLM output evaluation; sharpness vs. reliability decomposition
  applied to LLM uncertainty; skill score methodology for LLM calibration evaluation;
  reliability diagram methodology from meteorology imported to NLP evaluation; any
  direct citations of meteorological forecasting literature in LLM UQ papers

Source type (academic): arXiv cs.LG + cs.CL for application papers; Journal of the
  Royal Statistical Society and Journal of Applied Meteorology for source methodology;
  Semantic Scholar citation network from Brier (1950) to find ML papers citing it
Source type (practitioner): deprioritized — this angle targets methodological import
  from a mature scientific tradition; practitioner blogs are unlikely to cover it

Queries:
  Q1: proper scoring rules Brier score language model probabilistic output evaluation 2023 2024 2025
  Q2: probabilistic forecast calibration reliability diagram sharpness language model LLM evaluation
  Q3: scoring rule decomposition resolution reliability NLP generation uncertainty evaluation meteorological

Coverage-gap note: The meteorological/statistical tradition is largely unknown to the NLP
  community. Queries using NLP+meteorology vocabulary may return few results — low retrieval
  is likely a vocabulary-gap signal (the literature exists but does not co-cite these terms),
  not a substantive absence. In that case: search the meteorological forecasting literature
  directly (e.g., Journal of the American Meteorological Society + "proper scoring rules")
  and look for citations from LLM calibration papers.
```

---

## GATE SUMMARY

```
GATE SUMMARY
============

Gate 1 — Completeness:
  Null-hypothesis angle present: PASS — Angle 14 is explicitly framed as disconfirming;
    query set includes "failure," "negative results," "limitations," "breakdown,"
    "miscalibrated" (disconfirming vocabulary requirement met)
  Adversarial angle present: PASS — Angle 15 carries ADVERSARIAL-FLAGGED label with
    dispatch note ("dispatch in separate research context with no prior confirmatory results")
  Cross-disciplinary angle present: PASS — Angle 16 targets probabilistic forecasting /
    meteorology which does NOT appear in the intake brief's candidate vocabulary traditions
  Source-type coverage: PASS — Domain maturity is academic-heavy; practitioner sources
    are present across multiple angles (GitHub repos, Hugging Face documentation, LLM
    deployment blogs, practitioner issue threads) meeting the "recommended but not required"
    standard for academic-heavy topics
  Vocabulary-tradition map populated: PASS — Coverage map lists 13 distinct tradition
    names; all are populated with representative terms; coverage map was produced before
    any angle content was written

Gate 2 — Distinctness:
  Boolean-connective test applied to candidate synonym pairs:
    Angles 5 vs 8 (sampling-based vs. semantic uncertainty theory): PASS — A5 queries
      use "self-consistency sampling," "semantic entropy," "multiple sampling";
      A8 queries use "meaning space paraphrase equivalence," "token probability versus
      semantic probability," "aggregation meaning level." OR retrieval would not return
      substantially the same documents. Angle 5 is empirical methods; Angle 8 is
      theoretical/conceptual framing of what LLM uncertainty means in meaning space.
    Angles 6 vs 14 (hallucination vs. null-hypothesis): PASS — A6 is confirmatory
      (hallucination as signal); A14 is disconfirming (UQ methods fail). Angle type
      separation is structural, not just vocabulary.
    Angles 5 vs 12 (sampling-based vs. black-box UQ): PASS — A5 queries do not include
      "API-only" or "without logits" vocabulary; A12 queries do not include "semantic
      entropy" or "self-consistency" as target terms. These recover different literature
      (theoretical sampling methods vs. deployment-constrained approaches).
    Angles 2 vs 14 (calibration vs. null-hypothesis): PASS — different angle types;
      tradition label is "disconfirming variant" which is permitted to share parent
      tradition per angle-quality.md Gate 2.
  Vocabulary-tradition distinctness: PASS — All 16 angles have distinct vocabulary-
    tradition labels. No two non-null-hypothesis, non-adversarial angles share a label.
  SMALL LITERATURE NOTE: This is a fast-growing field (2022–2025 primary production
    period). Some angles may have <20 directly relevant papers. Downstream searcher
    should apply the small-literature exception in angle-quality.md Gate 2 if retrieval
    returns very small result sets.

Gate 3 — Launchability:
  All 16 angles contain at least 3 concrete query strings with no placeholder vocabulary.
  All query strings are pasteable into a search box without modification.
  All source type fields name specific platforms (arXiv with correct category pairs,
    GitHub, Hugging Face, ACM DL, PubMed, Semantic Scholar).
  arXiv category override applied per platform-calibration.md: cs.AI alone is not used
    in any angle; all LLM-topic angles use cs.CL + cs.LG or cs.CL + cs.AI pairings.
  arXiv + Semantic Scholar not used as sole pair for any angle (structural distinctness
    requirement met: Semantic Scholar is recommended for citation network exploration
    only, not as a primary retrieval source).
  Result: PASS for all 16 angles

Gate 4 — Scoring prohibition:
  No angle record contains "this angle is most useful," "this is the strongest angle,"
    "this angle is likely to be most relevant," or any equivalent LLM self-evaluation.
  Angle selection was driven by coverage map slots (structural), type allocation
    requirements (required types), and vocabulary-tradition distinctness (structural).
  No ranking by novelty, relevance, or promise was applied.
  Result: PASS

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG: All 13 intake-brief traditions were enumerated by LLM
     only (no survey paper, no external anchor). A survey-paper probe
     ("uncertainty quantification language model survey 2024 2025") is strongly recommended
     before accepting this list as tradition-complete. The meteorological forecasting
     tradition (Angle 16) was identified as cross-disciplinary; other adjacent traditions
     (formal epistemology, decision theory, cognitive psychology of uncertainty, medical
     diagnosis uncertainty literature) may contain relevant prior art not represented here.
  2. SMALL LITERATURE EXCEPTION: Several sub-fields (semantic uncertainty theory, Angle 8;
     LLM-specific conformal prediction, Angle 3; claim-level uncertainty, Angle 13) have
     limited corpora (<20 papers as of training data). If the Boolean-connective test flags
     overlap at search time, apply the small-literature exception and do not auto-merge.
  3. ADVERSARIAL DISPATCH DISCIPLINE: Angle 15 must be executed in a separate research
     context with no prior confirmatory results visible. If the downstream agent runs
     all angles in a single session, the adversarial angle provides no structural protection
     against confirmation bias (weakness_register.md Weakness 6 applies).
  4. SOURCE B RECOMMENDED BEFORE FINAL ACCEPTANCE: Run intake.md Source B probe before
     treating this angle list as final. The survey-paper probe specifically targets
     tradition vocabulary the LLM cannot self-enumerate.
```

---

## SELF-CHECK (required per angle-gen-kit CLAUDE.md after-every-task rule)

**Did I complete the goal or just the task?**
The goal is an angle list requiring minimal user correction for a thorough UQ literature
review. The task was to produce the list. The list is complete with all required angle types,
all identified traditions covered, gate summary passed. Goal = met conditionally on the
VOCABULARY SELF-REPORT FLAG caveats.

**What does the goal require next?**
Source B is the outstanding gap. The angle list is MODERATE quality (not FULL) because
traditions outside LLM training coverage may be missing. Next step: run the survey-paper
probe in a context with web access. This is not optional for FULL coverage.

**Did I surface anything the user didn't ask about?**
Yes — the meteorological forecasting tradition (Angle 16) is unlikely to be in the user's
radar. The statistical critique / frequentist skepticism framing (Angle 15) is a perspective
that actively challenges the UQ-for-LLMs framing itself — a user who only read confirmatory
literature would miss it.

**What is missing, incomplete, or questionable in this output?**
1. Absence of a formal epistemology angle (what does it mean for a model to "be uncertain"
   in the philosophical sense — credences, propositional attitudes, degrees of belief). This
   tradition exists and would recover different literature. Flagging as a gap; not adding now
   to avoid scope inflation, but recommend adding if Source B survey probe surfaces it.
2. Medical / clinical decision-making uncertainty literature is not directly represented
   (only referenced in Angle 10's coverage-gap note). High-stakes UQ for medical LLM
   applications is a distinct and growing sub-literature.
3. The adversarial angle (Angle 15) requires structural enforcement at dispatch that this
   kit cannot provide (weakness_register.md Weakness 6). This is documented but not solvable
   within the kit.
```

---

*End of Condition C output. angleCount=16, traditionsCount=15.*
