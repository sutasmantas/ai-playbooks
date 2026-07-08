# Angle Generation Output — Input 5, Condition B
**Topic:** RLHF and preference learning for aligning language models
**Date:** 2026-07-05
**Kit version:** angle-gen-kit (CLAUDE.md + intake.md + angle-generation.md + angle-quality.md)
**Source B status:** UNAVAILABLE — MODERATE (subagent context, no web access; Source A + Source C produced ≥8 distinct vocabulary traditions in a well-covered ML domain)
**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only. External validation via survey-paper probe is recommended before accepting the tradition check as complete.

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: How reinforcement learning from human feedback (RLHF) and preference learning methods
are used to align language model behavior with human values and intentions.

Anchor vocabulary:
  "RLHF" — ML/reinforcement learning tradition
  "preference learning" — decision theory / statistical learning tradition
  "aligning language models" — NLP alignment tradition

Candidate vocabulary traditions:
  1. ML/RL optimization — PPO, policy gradient, KL divergence regularization,
     trust region methods, reward modeling, Proximal Policy Optimization, TRPO,
     fine-tuning via RL
  2. NLP/Alignment — instruction tuning, RLHF pipeline, InstructGPT, Constitutional AI,
     helpful-harmless-honest (HHH), safety fine-tuning, value alignment, chat fine-tuning
  3. Preference learning / decision theory — Bradley-Terry model, pairwise comparison,
     ranking learning, pairwise preference data, reward model training, Thurstone scaling,
     comparative feedback, preference elicitation
  4. ML Safety / AI Safety — reward hacking, Goodhart's law, overoptimization of proxy
     rewards, specification gaming, alignment tax, mesa-optimization
  5. Statistics / Econometrics — discrete choice models, random utility models,
     multinomial logit, utility estimation, preference aggregation
  6. Cognitive science / behavioral economics — human preference consistency, anchoring,
     order effects in annotation, labeler disagreement, bounded rationality
  7. Inverse RL / reward learning — inverse reinforcement learning, cooperative IRL,
     reward ambiguity, imitation learning, GAIL, reward inference
  8. RLAIF / synthetic feedback — AI feedback, RLAIF, Constitutional AI label generation,
     LLM-as-judge, model-as-annotator, synthetic preference pairs
  9. Direct preference optimization — DPO, IPO, ORPO, SLiC, offline contrastive
     preference optimization, RLHF-alternative methods
 10. HCI / annotation workflows — crowdworker annotation, labeler disagreement,
     inter-annotator agreement, annotation interface design, preference dataset construction
 11. Scalable oversight / alignment research — scalable oversight, debate, amplification,
     recursive reward modeling, weak-to-strong generalization
 12. Multi-objective RL / value pluralism — multi-objective reward, MORL, Pareto-optimal
     policies, reward weighting, helpfulness-harmlessness tradeoff

  NOTE: Vocabulary traditions listed above are LLM self-reported. External validation
  recommended (Source B unavailable).

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure in the prompt; user seeks broad coverage
  of the research space)

Scope markers: None stated — inferred scope: methods, failure modes, and theoretical
  underpinnings of RLHF and preference learning for LLM alignment; not restricted to a
  specific model family, date range, or application domain

Known exclusions: None stated

Domain maturity estimate: academic-heavy (with practitioner component)
  Basis: anchor vocabulary ("RLHF," "preference learning") is academic; the area has
  substantial arXiv literature; however, major labs (Anthropic, OpenAI, DeepMind) also
  produce practitioner reports and blog posts that constitute primary sources

Survey paper status: NOT CHECKED (Source B unavailable) — vocabulary-discovery pass
  recommended before finalizing angle list

Source B status: UNAVAILABLE — MODERATE — subagent context without web access;
  Source A + Source C produced ≥12 distinct vocabulary traditions in a domain with
  strong LLM training coverage; proceeding with VOCABULARY SELF-REPORT FLAG applied
```

**Intake gate check:**
- Topic populated ✓
- ≥2 candidate vocabulary traditions ✓ (12 identified)
- Question type EXPLORATORY ✓

Proceeding to angle generation.

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: ML/RL optimization (PPO, policy gradient, KL regularization)
  Representative terms: PPO, TRPO, policy gradient, KL divergence, reward model,
    fine-tuning via RL, trust region
  Planned angle slot: Confirmatory A1
  Gap flag: no

Tradition 2: NLP/Alignment (RLHF pipeline, InstructGPT, Constitutional AI)
  Representative terms: RLHF pipeline, InstructGPT, instruction tuning, chat fine-tuning,
    helpful-harmless-honest, safety alignment
  Planned angle slot: Confirmatory A2
  Gap flag: no

Tradition 3: Preference learning / decision theory (Bradley-Terry, pairwise ranking)
  Representative terms: Bradley-Terry model, pairwise preference, reward model training,
    Thurstone scaling, ranking from comparisons
  Planned angle slot: Confirmatory A3
  Gap flag: no

Tradition 4: ML Safety / AI Safety (reward hacking, Goodhart's law)
  Representative terms: reward hacking, Goodhart's law, overoptimization, specification
    gaming, alignment tax, proxy reward, sycophancy
  Planned angle slot: Confirmatory A4 + Null-hypothesis N1 (disconfirming variant)
  Gap flag: no

Tradition 5: Statistics / Econometrics (discrete choice, utility estimation)
  Representative terms: discrete choice model, random utility, multinomial logit,
    choice probability, preference aggregation
  Planned angle slot: Confirmatory A5
  Gap flag: no

Tradition 6: Cognitive science / behavioral economics (annotation biases)
  Representative terms: anchoring, order effects, labeler disagreement, preference
    consistency, bounded rationality, crowdworker annotation quality
  Planned angle slot: Confirmatory A6
  Gap flag: no

Tradition 7: Inverse RL / reward learning (IRL, cooperative IRL)
  Representative terms: inverse reinforcement learning, reward inference, cooperative IRL,
    GAIL, imitation learning, reward ambiguity
  Planned angle slot: Confirmatory A7
  Gap flag: no

Tradition 8: RLAIF / synthetic feedback (AI feedback, LLM-as-judge)
  Representative terms: RLAIF, Constitutional AI, AI feedback, model-as-annotator,
    LLM-as-judge, synthetic preference pairs
  Planned angle slot: Confirmatory A8
  Gap flag: no

Tradition 9: Direct preference optimization (DPO, IPO, offline contrastive)
  Representative terms: DPO, direct preference optimization, IPO, ORPO, SLiC,
    offline RLHF alternatives, contrastive preference optimization
  Planned angle slot: Confirmatory A9
  Gap flag: no

Tradition 10: HCI / annotation workflows (labeler interface, disagreement)
  Representative terms: crowdworker annotation, inter-annotator agreement, annotation
    interface, preference dataset construction, labeler subjectivity
  Planned angle slot: Confirmatory A10
  Gap flag: no

Tradition 11: Scalable oversight / alignment research (debate, amplification)
  Representative terms: scalable oversight, debate, amplification, recursive reward
    modeling, weak-to-strong generalization, oversight bottleneck
  Planned angle slot: Confirmatory A11
  Gap flag: no

Tradition 12: Multi-objective RL / value pluralism (MORL, Pareto policies)
  Representative terms: multi-objective reward, MORL, Pareto frontier, reward weighting,
    value tradeoffs, helpfulness-harmlessness balance
  Planned angle slot: Confirmatory A12
  Gap flag: no

Traditions NOT yet represented in the planned list:
  All 12 traditions from intake brief have at least one angle slot.

Cross-disciplinary slot (required):
  Target tradition: Social choice theory / political philosophy
    (NOT in the intake brief — distinct from preference aggregation in decision theory;
    addresses legitimacy, representation, democratic accountability of value alignment)
  Basis for selection: RLHF aggregates preferences from a specific annotator population
    to produce a "human values" reward signal; political philosophy and social choice
    theory directly address what makes preference aggregation legitimate across heterogeneous
    populations — a question the ML alignment literature rarely engages with explicitly.

Adversarial slot:
  Starting vocabulary — AI accountability / algorithmic auditing tradition:
    algorithmic accountability, bias amplification, value lock-in, demographic disparate
    impact, crowdworker exploitation, structural inequity in preference labeling,
    Campbell's law, audit methodology
  Explicitly excluding from adversarial generation: PPO, RLHF, reward model, DPO,
    preference learning, Bradley-Terry, scalable oversight, IRL, Constitutional AI,
    instruction tuning, alignment, value alignment

Total planned angles: 15
  A1–A12 (Confirmatory, one per tradition), N1 (Null-hypothesis), D1 (Adversarial), C1 (Cross-disciplinary)
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1  (Confirmatory — ML/RL optimization): PPO and policy gradient for LLM fine-tuning
Slot A2  (Confirmatory — NLP/Alignment): RLHF end-to-end pipeline and instruction tuning
Slot A3  (Confirmatory — Preference learning / decision theory): Reward model training from pairwise data
Slot A4  (Confirmatory — ML Safety / AI Safety): Reward hacking and overoptimization
Slot A5  (Confirmatory — Statistics / Econometrics): Choice modeling and utility estimation applied to human feedback
Slot A6  (Confirmatory — Cognitive science / behavioral economics): Annotation biases and labeler disagreement
Slot A7  (Confirmatory — Inverse RL / reward learning): IRL-based approaches to reward inference
Slot A8  (Confirmatory — RLAIF / synthetic feedback): AI-generated preference labels
Slot A9  (Confirmatory — Direct preference optimization): DPO and RLHF-alternative methods
Slot A10 (Confirmatory — HCI / annotation workflows): Preference dataset construction and annotation pipelines
Slot A11 (Confirmatory — Scalable oversight): Oversight methods beyond RLHF for capable models
Slot A12 (Confirmatory — Multi-objective RL / value pluralism): Multi-reward optimization and value tradeoffs
Slot N1  (Null-hypothesis — ML Safety / AI Safety, disconfirming variant): Evidence RLHF fails to produce genuine alignment
Slot D1  (Adversarial — AI accountability / algorithmic auditing): Structural critiques from outside the ML alignment vocabulary
  [NOT FROM: ML/RL optimization, NLP/Alignment, preference learning, ML Safety, statistics,
   cognitive science, inverse RL, RLAIF, DPO, HCI, scalable oversight, multi-objective RL]
Slot C1  (Cross-disciplinary — Social choice theory / political philosophy): Legitimacy of preference aggregation for value alignment
```

---

## FULL ANGLE LIST

---

### ANGLE A1: PPO and Policy Gradient Algorithms for Fine-Tuning Language Models
```
Vocabulary tradition: ML/RL optimization
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Algorithm-level findings — PPO hyperparameter sensitivity for LLM
  fine-tuning, KL divergence penalty choices, policy update stability, comparison of
  RL algorithms (PPO vs TRPO vs A2C) when applied to language models, training dynamics

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub (major RLHF implementation repos, e.g., TRL library
  issues and PRs, trlX issues); Anthropic/OpenAI technical reports

Queries:
  Q1: proximal policy optimization language model fine-tuning RLHF training stability 2023 2024 2025
  Q2: KL divergence penalty reward model policy optimization LLM alignment empirical
  Q3: reinforcement learning language model policy gradient algorithm comparison PPO TRPO
  Q4: RLHF training instability collapse reward model overfit policy optimization

Coverage-gap note: This angle primarily captures algorithm-level mechanics;
  cross-model-family generalization (does PPO instability occur in all LLM sizes?)
  is a gap not directly addressed by these queries.
```

---

### ANGLE A2: The End-to-End RLHF Pipeline — InstructGPT, Reward Modeling, and Instruction Tuning
```
Vocabulary tradition: NLP/Alignment
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Full pipeline findings — SFT (supervised fine-tuning) stage, reward
  model training from human comparisons, PPO fine-tuning stage, ablation results on
  pipeline components, InstructGPT and equivalent papers, scaling effects in RLHF

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): OpenAI / Anthropic / DeepMind technical reports and blog posts

Queries:
  Q1: RLHF instruction following reward modeling PPO language model alignment 2022 2023 2024
  Q2: InstructGPT human feedback fine-tuning supervised reward model training pipeline
  Q3: instruction tuning supervised fine-tuning RLHF helpfulness harmlessness alignment scaling
  Q4: chat fine-tuning preference data helpful harmless honest language model

Coverage-gap note: This angle captures the prototypical RLHF pipeline but may underrepresent
  smaller-scale replication studies that did not achieve lab-equivalent results.
```

---

### ANGLE A3: Reward Model Training from Pairwise Preferences — Bradley-Terry and Statistical Foundations
```
Vocabulary tradition: Preference learning / decision theory
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Statistical model choices for reward learning — Bradley-Terry model
  in RLHF, Thurstone's comparative judgment, reward model architecture (head design,
  loss functions), calibration and uncertainty of reward models, pairwise vs. listwise
  ranking, reward model generalization

Source type (academic): arXiv cs.LG + cs.CL; Journal of Machine Learning Research (JMLR)
Source type (practitioner): GitHub (reward model training scripts, Hugging Face reward
  modeling notebooks)

Queries:
  Q1: Bradley-Terry model reward learning language model preference 2023 2024 2025
  Q2: reward model training pairwise ranking loss calibration uncertainty RLHF
  Q3: preference learning reward function estimation pairwise comparison language model
  Q4: listwise ranking reward model contrastive loss human preference data LLM

Coverage-gap note: Queries focus on pairwise preference; absolute feedback (scalar ratings)
  and ordinal ranking models are an adjacent gap not fully covered here.
```

---

### ANGLE A4: Reward Hacking, Overoptimization, and Goodhart's Law in RLHF
```
Vocabulary tradition: ML Safety / AI Safety
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Mechanisms of reward hacking — proxy reward vs. true reward divergence,
  overoptimization at scale, Goodhart regimes (realization vs. causal vs. extremal vs.
  Goodhart), specification gaming in language model outputs, how reward model errors
  propagate through policy optimization

Source type (academic): arXiv cs.LG + cs.AI; Alignment Forum technical posts (LessWrong/AF)
Source type (practitioner): Alignment Forum posts; EleutherAI reports; Anthropic/DeepMind
  safety papers

Queries:
  Q1: reward hacking overoptimization RLHF language model Goodhart's law proxy reward 2023 2024
  Q2: specification gaming reward model errors language model alignment sycophancy
  Q3: reward overoptimization proxy reward true objective divergence LLM empirical
  Q4: alignment tax RLHF capability degradation reward model overfit language model

Coverage-gap note: The Goodhart taxonomy (realization/causal/extremal) may only be partially
  covered by empirical papers; theoretical treatments appear in Alignment Forum posts
  not indexed in arXiv.
```

---

### ANGLE A5: Discrete Choice Models and Utility Estimation Applied to Human Feedback
```
Vocabulary tradition: Statistics / Econometrics
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Econometric and statistical framings of human preference — random utility
  models (RUM) applied to preference data, multinomial logit for AI feedback, identifiability
  of utility functions from pairwise data, noise models in preference elicitation,
  statistical efficiency of different comparison designs

Source type (academic): arXiv cs.LG + stat.ML; Journal of Econometrics; Operations Research
Source type (practitioner): deprioritized — academic-heavy sub-tradition with minimal
  practitioner production outside conferences

Queries:
  Q1: random utility model pairwise preference learning reward estimation language model
  Q2: discrete choice model human feedback AI alignment utility estimation 2023 2024
  Q3: preference elicitation statistical model noise pairwise comparison identifiability
  Q4: multinomial logit preference aggregation reward learning comparison data efficiency

Coverage-gap note: Econometrics connections (e.g., willingness-to-pay analogy for
  preference strength) are likely underrepresented in AI venues; cross-database search
  in economics journals is recommended.
```

---

### ANGLE A6: Annotation Biases and Labeler Disagreement in RLHF Preference Datasets
```
Vocabulary tradition: Cognitive science / behavioral economics
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Cognitive and behavioral biases in preference annotation — order effects
  (primacy/recency bias in pairwise comparisons), anchoring on response length, inter-rater
  agreement measures (Cohen's kappa, Krippendorff's alpha) for preference data, demographic
  effects on preferences, annotator consistency across sessions

Source type (academic): arXiv cs.CL + cs.HC (HCI track); Cognitive Science journal;
  ACL/EMNLP proceedings
Source type (practitioner): Scale AI and Surge AI annotator quality reports; Hugging Face
  dataset cards for RLHF preference datasets

Queries:
  Q1: annotation bias human feedback RLHF preference data inter-annotator agreement 2023 2024 2025
  Q2: labeler disagreement preference labeling language model reward model quality
  Q3: order effects length bias pairwise preference comparison human feedback LLM
  Q4: annotator subjectivity demographic factors preference data alignment crowdworker

Coverage-gap note: Cognitive science literature on preference elicitation (outside NLP)
  uses different vocabulary (e.g., "comparative judgment," "psychophysical scaling") —
  a separate vocabulary-bridging pass is recommended.
```

---

### ANGLE A7: Inverse Reinforcement Learning and Reward Inference as Alternatives to Direct RLHF
```
Vocabulary tradition: Inverse RL / reward learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: IRL-based approaches to learning reward from demonstrations or
  comparisons — cooperative IRL, maximum entropy IRL applied to language, GAIL adaptations,
  reward ambiguity under IRL, comparison of IRL vs. preference-based reward learning,
  Bayesian reward inference

Source type (academic): arXiv cs.LG + cs.AI; ICML/NeurIPS proceedings
Source type (practitioner): GitHub (IRL codebases, GAIL implementations)

Queries:
  Q1: inverse reinforcement learning language model reward inference alignment 2022 2023 2024 2025
  Q2: cooperative inverse reinforcement learning human AI reward ambiguity language generation
  Q3: maximum entropy IRL imitation learning language model reward learning
  Q4: Bayesian reward learning preference uncertainty reward inference LLM alignment

Coverage-gap note: IRL applied to LLMs is a smaller literature; the Boolean-connective
  test with A3 (preference learning) is applied — the distinguishing vocabulary is
  "inverse RL," "GAIL," "imitation," "demonstrations" vs. "pairwise comparison," "Bradley-Terry."
  These are structurally distinct query anchors.
```

---

### ANGLE A8: RLAIF — Reinforcement Learning from AI Feedback and Synthetic Preference Generation
```
Vocabulary tradition: RLAIF / synthetic feedback
Angle type: Confirmatory
Predicted research character: empirical
What to extract: AI-generated preference labels replacing human feedback — RLAIF pipeline
  (Bai et al.), Constitutional AI self-critique and revision, LLM-as-judge quality vs.
  human labels, scaling synthetic feedback, agreement between AI-generated and human
  preferences, failure modes when AI feedback diverges from human judgment

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): Anthropic technical reports; Hugging Face model cards for
  RLAIF-trained models

Queries:
  Q1: RLAIF reinforcement learning AI feedback language model alignment synthetic 2023 2024 2025
  Q2: Constitutional AI self-critique revision preference labels LLM alignment
  Q3: LLM-as-judge preference label quality human agreement evaluation 2024 2025
  Q4: synthetic preference data AI-generated feedback RLHF scalability quality vs. human

Coverage-gap note: RLAIF failure modes (when AI preferences systematically diverge from
  human preferences) are partially covered by Q4 but may require separate targeted search.
```

---

### ANGLE A9: DPO and RLHF-Alternative Methods — Direct Preference Optimization
```
Vocabulary tradition: Direct preference optimization
Angle type: Confirmatory
Predicted research character: empirical
What to extract: RLHF-alternative pipelines that bypass explicit RL — DPO (Direct
  Preference Optimization) derivation and empirical performance, IPO (Identity Preference
  Optimization), ORPO, SLiC, offline contrastive methods; comparison to on-policy RLHF;
  why DPO works (implicit reward model); known failure modes of DPO

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub (DPO training libraries, TRL DPO examples);
  Hugging Face blog posts on DPO training

Queries:
  Q1: direct preference optimization DPO language model alignment offline 2023 2024 2025
  Q2: IPO identity preference optimization ORPO SLiC preference optimization LLM comparison
  Q3: DPO implicit reward model contrastive preference fine-tuning language model empirical
  Q4: RLHF alternative offline preference optimization versus PPO language model alignment

Coverage-gap note: Recent extensions of DPO (iterative DPO, online DPO variants) may
  require 2025-specific date filtering to surface post-cutoff work.
```

---

### ANGLE A10: Preference Dataset Construction — Annotation Pipelines, Interfaces, and Quality
```
Vocabulary tradition: HCI / annotation workflows
Angle type: Confirmatory
Predicted research character: consensus
What to extract: How preference datasets are constructed in practice — annotation interface
  design decisions, comparison formats (which response is better? vs. Likert rating),
  annotator instructions and their effect on label quality, known RLHF datasets
  (Anthropic HH, OpenAI comparisons, HelpSteer), dataset quality audits

Source type (academic): arXiv cs.CL + cs.HC; ACL Anthology (dataset papers track)
Source type (practitioner): Hugging Face dataset cards; Scale AI annotator guidelines
  (public documentation); Surge AI blog posts on preference labeling workflows

Queries:
  Q1: RLHF preference dataset construction annotation pipeline quality 2022 2023 2024 2025
  Q2: human feedback annotation interface comparison format labeler agreement preference data
  Q3: Anthropic HH dataset helpfulness harmlessness annotation preference quality audit
  Q4: preference labeling workflow crowdworker instructions quality control RLHF dataset

Coverage-gap note: Proprietary annotation processes (OpenAI, Google) are partially obscured;
  this angle will have stronger coverage for open-source and published dataset construction.
```

---

### ANGLE A11: Scalable Oversight — Debate, Amplification, and Beyond-RLHF Methods
```
Vocabulary tradition: Scalable oversight / alignment research
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for maintaining human oversight of AI systems more capable than
  the humans overseeing them — debate, iterated amplification, recursive reward modeling,
  weak-to-strong generalization; empirical results vs. theoretical arguments; which
  scenarios have been tested; how scalable oversight relates to and extends RLHF

Source type (academic): arXiv cs.AI + cs.LG; Alignment Forum (technical posts with
  citations — these are primary sources in this sub-tradition, not secondary commentary)
Source type (practitioner): Alignment Forum posts; OpenAI/Anthropic blog posts on scalable
  oversight research

Queries:
  Q1: scalable oversight debate amplification language model alignment capable AI 2022 2023 2024 2025
  Q2: weak-to-strong generalization oversight bottleneck language model alignment
  Q3: recursive reward modeling iterated amplification human oversight beyond RLHF
  Q4: debate AI alignment verifier language model scalable oversight empirical

Coverage-gap note: Much of this literature lives on the Alignment Forum rather than arXiv;
  a dedicated Alignment Forum search pass is recommended as a complement.
```

---

### ANGLE A12: Multi-Objective Reward Optimization and Value Tradeoffs in Language Model Alignment
```
Vocabulary tradition: Multi-objective RL / value pluralism
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How multiple competing reward signals are combined — helpfulness vs.
  harmlessness tradeoffs, Pareto-optimal policy optimization, reward weighting heuristics,
  multi-objective RL algorithms applied to LLMs, Constitutional AI's multi-criteria design,
  preference heterogeneity across users

Source type (academic): arXiv cs.LG + cs.CL; ICML/NeurIPS multi-objective RL papers
Source type (practitioner): Anthropic alignment research blog; HelpSteer2 technical report

Queries:
  Q1: multi-objective reward language model alignment helpfulness harmlessness tradeoff 2023 2024
  Q2: Pareto-optimal policy RLHF multiple reward functions value tradeoff LLM
  Q3: reward weighting multi-objective reinforcement learning language model fine-tuning
  Q4: preference heterogeneity personalized reward model user values alignment LLM

Coverage-gap note: Value pluralism as a philosophical problem (whose values are weighted
  and by how much) is addressed by C1 (cross-disciplinary); this angle focuses on the
  algorithmic handling of multiple reward signals.
```

---

### ANGLE N1: Evidence that RLHF Fails to Produce Genuine Alignment — Null-Hypothesis Angle
```
Vocabulary tradition: ML Safety / AI Safety (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Conditions under which RLHF-aligned models fail — sycophancy
  (agreement with wrong user claims), superficial alignment (alignment on distribution,
  misalignment off-distribution), adversarial prompting that breaks RLHF alignment,
  red-teaming results, jailbreaking that circumvents alignment, alignment not generalizing
  to unseen tasks, reward model errors that cascade into policy failure

Source type (academic): arXiv cs.CL + cs.LG + cs.AI
Source type (practitioner): GitHub (red-teaming codebases, alignment evaluation benchmarks);
  Anthropic/DeepMind safety evaluation reports

Queries:
  Q1: RLHF alignment failure sycophancy superficial alignment language model does not generalize 2023 2024 2025
  Q2: jailbreak adversarial RLHF-aligned language model alignment circumvention failure
  Q3: RLHF negative result limitation alignment misalignment off-distribution language model
  Q4: reward model errors cascade policy failure RLHF alignment breakdown
  Q5: sycophancy preference learning human feedback language model failure mode empirical

Coverage-gap note: Some null results may not be published in arXiv papers; red-teaming
  documentation lives in safety reports and GitHub repos rather than academic venues.
```

---

### ANGLE D1: Structural Critiques from AI Accountability and Algorithmic Auditing
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

```
Vocabulary tradition: AI accountability / algorithmic auditing
Angle type: Adversarial
Predicted research character: empirical (adversarial)

Generation note: Generated from AI accountability / algorithmic auditing vocabulary ONLY.
Excluded terms: PPO, RLHF, reward model, DPO, preference learning, Bradley-Terry, scalable
  oversight, IRL, Constitutional AI, instruction tuning, alignment, value alignment,
  reinforcement learning, preference optimization.

Starting vocabulary: algorithmic accountability, bias amplification, value lock-in,
  demographic disparate impact, crowdworker exploitation, structural inequity in preference
  labeling, Campbell's law, Goodhart's law (economics framing), audit methodology,
  content moderation externalization, labor precarity

What to extract: Evidence that preference-based training methods systematically encode
  demographic biases, exploit low-wage annotators, amplify majority cultural norms at the
  expense of minority perspectives, lock in a particular value system, or produce a
  "Potemkin alignment" (appearance of alignment without substance); auditing methods that
  detect these failures; labor rights critiques of human feedback pipelines

Source type (academic): ACM FAccT proceedings; arXiv cs.CY (Social and Information Networks);
  AI and Society journal; Critical Algorithm Studies literature
Source type (practitioner): Data & Society reports; Distributed AI Research Institute
  (DAIR) reports; investigative journalism on AI labor practices

Queries:
  Q1: algorithmic accountability bias amplification human feedback preference training language model
  Q2: crowdworker labor exploitation data annotation AI training demographic disparate impact
  Q3: value lock-in cultural bias majority norms preference aggregation AI training data
  Q4: audit methodology detecting bias preference data language model training alignment
  Q5: SPECIFICIY GATE APPLIED — Distributed AI Research Institute "data workers" AI training
      labor conditions 2023 2024 2025

Coverage-gap note: This angle will retrieve literature that does not self-describe as
  "alignment research" — that is the point. Cross-referencing with A2/A6 vocabulary after
  the adversarial pass is the intended synthesis step.
```

---

### ANGLE C1: Whose Preferences? — Social Choice Theory and Political Philosophy of Value Alignment
```
Vocabulary tradition: Social choice theory / political philosophy
  [CROSS-DISCIPLINARY: this tradition is NOT in the intake brief's vocabulary traditions]
Angle type: Cross-disciplinary
Predicted research character: consensus (primarily theoretical / philosophical)
What to extract: Legitimacy arguments for aggregating heterogeneous preferences into a
  single reward signal — social welfare functions, Arrow's impossibility theorem applied
  to value alignment, Rawlsian vs. utilitarian framings of AI alignment, deliberative
  democracy approaches to value specification, whose preferences are represented in
  preference datasets and why, normative critiques of "alignment" as a concept

Source type (academic): Philosophy and Public Affairs journal; Ethics and Information
  Technology journal; arXiv cs.AI (for AI-adjacent philosophy papers); PhilPapers
  (philosophy-specific preprint/aggregation service)
Source type (practitioner): AI ethics reports from think tanks (AI Now Institute,
  Partnership on AI); public consultation frameworks from national AI strategies

Queries:
  Q1: social choice theory AI value alignment preference aggregation legitimacy 2022 2023 2024 2025
  Q2: Arrow impossibility preference aggregation AI alignment value heterogeneity
  Q3: normative critique alignment language model whose values represented preference data
  Q4: deliberative democracy value specification AI alignment participation public preferences

Coverage-gap note: This tradition's primary venue is philosophy journals, not arXiv; PhilPapers
  is a required platform for systematic coverage. Papers using "alignment" in AI venues rarely
  cite social choice theory literature — the vocabulary bridging work is done by the researcher.
```

---

## GATE SUMMARY

```
GATE SUMMARY
============

Gate 1 — Completeness:
  Null-hypothesis angle present: PASS (N1 uses disconfirming vocabulary — "failure,"
    "does not generalize," "negative result," "breakdown," "sycophancy")
  Adversarial angle present: PASS (D1 labeled ADVERSARIAL-FLAGGED with dispatch note)
  Cross-disciplinary angle present: PASS (C1 targets social choice theory / political
    philosophy — NOT in intake brief vocabulary traditions)
  Source-type coverage: PASS (domain-maturity is academic-heavy with practitioner component;
    every angle has both academic and practitioner sources named; D1 specifically uses
    ACM FAccT + DAIR reports as practitioner sources)
  Vocabulary-tradition map populated: PASS (14 distinct traditions across 15 angles)

Gate 2 — Distinctness:
  Boolean-connective test applied to potentially overlapping pairs:
  — A1 (PPO/RL optimization) vs A2 (RLHF pipeline): PASS — A1 anchors on algorithm
    mechanics ("proximal policy optimization," "KL divergence penalty," "training stability");
    A2 anchors on pipeline + output ("instruction following," "InstructGPT," "helpfulness
    harmlessness"). OR would not retrieve the same documents.
  — A3 (Bradley-Terry / preference learning stats) vs A7 (inverse RL): PASS — A3 anchors
    on "Bradley-Terry," "pairwise ranking," "reward model calibration"; A7 anchors on
    "inverse reinforcement learning," "GAIL," "imitation learning," "demonstrations."
    Structurally distinct query vocabulary.
  — A4 (reward hacking / ML Safety) vs N1 (RLHF failure null-hypothesis): PASS — A4
    anchors on mechanisms ("Goodhart's law," "specification gaming," "proxy reward");
    N1 anchors on outcome evidence ("alignment failure," "does not generalize," "jailbreak,"
    "sycophancy"). Distinct facets of the same tradition; type difference (confirmatory vs.
    null-hypothesis) is structurally permitted.
  — A8 (RLAIF) vs A2 (RLHF pipeline): PASS — A8 anchors on "RLAIF," "AI feedback,"
    "LLM-as-judge," "synthetic"; A2 anchors on human feedback pipeline. Distinct.
  — A9 (DPO) vs A2 (RLHF pipeline): PASS — A9 anchors on "direct preference optimization,"
    "offline," "DPO," "ORPO"; A2 anchors on the RLHF pipeline with PPO. The defining
    difference is that DPO explicitly bypasses RL — a structural distinction, not just
    vocabulary.
  — A11 (scalable oversight) vs A4 (reward hacking): PASS — A11 anchors on "scalable
    oversight," "debate," "amplification," "weak-to-strong"; A4 anchors on "reward
    hacking," "overoptimization." These overlap in the AI safety space but have different
    focal mechanisms.
  — A12 (multi-objective RL) vs A1 (PPO/RL): PASS — A12 anchors on "multi-objective,"
    "Pareto-optimal," "value tradeoff," "preference heterogeneity"; A1 anchors on
    single-reward PPO mechanics. Distinct.
  Vocabulary-tradition distinctness: PASS — all 15 angles have distinct tradition labels
    (A4 and N1 share ML Safety but N1 is explicitly the null-hypothesis variant of A4;
    this sharing is structurally permitted per angle-generation.md rule for null-hypothesis
    and adversarial variants).

Gate 3 — Launchability:
  All 15 angles: concrete query strings present (no TBDs), source types named specifically,
  no placeholder vocabulary.
  PASS

Gate 4 — Scoring prohibition:
  No angle contains "most promising," "strongest angle," "most relevant," or equivalent
  subjective quality assessment. Type allocations used structural criteria only
  (vocabulary-tradition coverage, null-hypothesis presence, Boolean-connective distinctness).
  PASS

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all traditions enumerated by LLM only; no survey paper
     probe ran (Source B unavailable). Recommendation: run a survey-paper bootstrap before
     treating this as a complete tradition map. Query: "RLHF preference learning alignment
     language model survey 2024 2025" — examine title vocabulary for traditions not in this list.
  2. ADVERSARIAL EXECUTION — D1 is labeled ADVERSARIAL-FLAGGED. The downstream research
     agent must honor this label by running D1 in a separate session context with no prior
     confirmatory results loaded. This kit cannot enforce downstream execution discipline.
  3. ALIGNMENT FORUM coverage — A4, A11, and N1 have primary sources on the Alignment
     Forum (LessWrong / AF) that are not indexed in arXiv. A dedicated Alignment Forum
     search pass is recommended for these angles.
  4. PhilPapers for C1 — the cross-disciplinary angle (social choice theory / political
     philosophy) requires PhilPapers as a platform; arXiv alone will miss the majority
     of this tradition's literature.
```

---

## POST-GENERATION SELF-CHECK

Per CLAUDE.md behavioral contract Rule 6 (after-every-task self-check):

What is missing, incomplete, or questionable in this output:

1. **Survey-paper probe not run (Source B unavailable):** The vocabulary tradition list is LLM self-reported. A survey-paper probe could surface additional traditions — particularly from social sciences, cognitive science, or legal/regulatory domains that may have RLHF-adjacent literature not well-represented in LLM training.

2. **Regulatory / legal tradition not covered:** A potential gap: data protection and consent frameworks applied to preference data (GDPR, AI Act in EU context) — this is distinct from the AI accountability angle (D1) and would anchor on "consent," "data subject," "lawful basis for processing," "high-risk AI system." This tradition was not enumerated in the intake brief. A scope-acceptance decision is required: Scope accepted as gap unless user requests regulatory angle — the intake prompt ("RLHF and preference learning for aligning language models") does not signal a regulatory research interest.

3. **Cognitive load of 15 angles:** At 15 angles with 3-5 queries each, this list represents 55-75 queries. For a single research agent, chunked execution by tradition cluster is recommended. Suggested grouping: Cluster 1 (algorithmic core: A1, A2, A3, A9), Cluster 2 (safety/failure modes: A4, N1), Cluster 3 (feedback quality: A6, A8, A10), Cluster 4 (theoretical foundations: A5, A7, A12), Cluster 5 (scalability/oversight: A11), Cluster 6 (adversarial + cross-disciplinary: D1, C1).

4. **Small-literature check for A5 and A7:** The Statistics/Econometrics tradition (A5) and Inverse RL tradition (A7) may be small literatures in the specific LLM alignment application context. If the Boolean-connective test produces apparent synonymy with other angles on retrieval, the small-literature exception should be applied before merging.
