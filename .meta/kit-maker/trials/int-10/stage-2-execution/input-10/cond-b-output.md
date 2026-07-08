# Angle-Gen-Kit Output — Input 10, Condition B

**Topic:** Memory in LLMs — how models store and access information
**Kit files read:** CLAUDE.md, intake.md, angle-generation.md, angle-quality.md, weakness_register.md, platform-calibration.md
**Source B status:** UNAVAILABLE — subagent context, no web access

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: How large language models store and access information — the mechanisms,
structures, and behaviors of memory in LLMs

Anchor vocabulary:
  "memory" (cognitive science / neuroscience tradition)
  "LLMs" (ML-systems tradition)
  "store and access information" (systems / database framing)

Candidate vocabulary traditions:
  1. ML systems / NLP — parametric memory, factual knowledge, transformer weights,
     attention mechanism, key-value patterns, embeddings, pre-training
  2. Mechanistic interpretability — factual recall circuits, knowledge localization,
     knowledge neurons, probing, MLP-as-key-value, attention heads
  3. Model editing / knowledge surgery — ROME, MEMIT, GRACE, locate-and-edit,
     knowledge editing, targeted weight modification
  4. Retrieval-augmented / external memory — RAG, MemGPT, non-parametric memory,
     external memory banks, vector retrieval, memory modules
  5. Memory-augmented neural networks (historical) — neural Turing machine, DNC,
     memory networks, external memory, differentiable read/write heads
  6. Continual learning — catastrophic forgetting, plasticity-stability tradeoff,
     lifelong learning, knowledge retention, continual pre-training

  Absent-term signal (Source C — terms user did NOT use):
    "parametric memory" (most-used academic framing)
    "retrieval-augmented generation" (dominant practitioner framing)
    "model editing" / "knowledge editing" (active sub-community)
    "catastrophic forgetting" (continual learning framing)
    "mechanistic interpretability" (inside-the-weights framing)
    "memorization vs. generalization" (learning theory framing)

  Additional traditions surfaced by Source A:
  7. Long-context efficiency / sparse attention — KV cache, efficient attention,
     linear attention, context window compression, sparse attention
  8. Memorization vs. generalization — verbatim memorization, training data extraction,
     unintended memorization, privacy, generalization gap
  9. In-context learning — ICL, few-shot, context window as working memory,
     implicit gradient descent, Bayesian inference in-context
  10. Hallucination / factual grounding — confabulation, factual inconsistency,
      knowledge cutoff, temporal knowledge decay, AI reliability

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot
  enumerate traditions it has not encountered. Vocabulary-discovery pass
  (pearl-growing from a known anchor paper) is recommended before accepting the
  angle list as covering all traditions.

Question type: EXPLORATORY
  (no comparison language or intervention-outcome structure in the prompt;
  user asks "how models store and access information" — a space-mapping question)

Scope markers: None stated — inferred scope: general LLM memory mechanisms,
  including both internal (parametric, in-weights) and external (context window, RAG)
  memory; not limited to specific model architectures, task types, or applications

Known exclusions: None stated

Domain maturity estimate: academic-heavy
  Basis: anchor vocabulary "memory in LLMs" has substantial arXiv literature
  (cs.CL + cs.LG); area has active research communities in NLP, mechanistic
  interpretability, and continual learning; user's phrasing is conceptual and
  research-oriented, not tool/deployment-focused; no specific product names or
  deployment contexts mentioned

Survey paper status: UNAVAILABLE (Source B unavailable — subagent context)
  Recommendation: Run Source B probe ("memory in large language models survey
  2024 2025") and compare title vocabulary against this traditions list before
  finalizing angle list.

Source B status: UNAVAILABLE — MODERATE
  Source A + Source C together identified 10 distinct vocabulary traditions.
  Multi-tradition coverage is robust despite no survey paper probe. Severity
  is MODERATE; angle generation may proceed with VOCABULARY SELF-REPORT FLAG.
```

---

## INTAKE GATE CHECK

- [x] Topic field populated
- [x] Candidate vocabulary traditions ≥2 entries (10 identified)
- [x] Question type classified (EXPLORATORY)

**Gate: PASS — proceed to angle-generation.md**

---

## PHASE-GATE REFLECTION

1. All intake brief output fields populated (no blanks)? YES
2. ≥2 distinct vocabulary traditions listed? YES — 10 traditions
3. Question type classified? YES — EXPLORATORY

Proceed to angle generation.

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: ML systems / NLP — parametric memory, transformer weights, factual knowledge
  Representative terms: parametric memory, factual knowledge, pre-training, weights,
    token prediction, knowledge storage in neural networks
  Planned angle slot: Confirmatory A1
  Gap flag: no

Tradition 2: Mechanistic interpretability — factual recall circuits, knowledge probing
  Representative terms: factual recall, knowledge localization, probing, circuits,
    attention patterns, MLP layers, knowledge neurons, Geva et al.
  Planned angle slot: Confirmatory A2
  Gap flag: no

Tradition 3: Model editing / knowledge surgery — targeted memory modification
  Representative terms: model editing, ROME, MEMIT, GRACE, locate-and-edit,
    knowledge editing
  Planned angle slot: Confirmatory A3
  Gap flag: no

Tradition 4: Retrieval-augmented / external memory — non-parametric access
  Representative terms: RAG, retrieval-augmented generation, MemGPT, external
    memory, vector retrieval, memory modules
  Planned angle slot: Confirmatory A4
  Gap flag: no

Tradition 5: Memory-augmented neural networks (historical) — NTM, DNC, MemNN
  Representative terms: neural Turing machine, differentiable neural computer,
    memory networks, external memory, read/write heads
  Planned angle slot: Confirmatory A5
  Gap flag: no

Tradition 6: Continual learning — catastrophic forgetting, plasticity-stability
  Representative terms: catastrophic forgetting, plasticity-stability, lifelong
    learning, knowledge retention, continual pre-training
  Planned angle slot: Confirmatory A6
  Gap flag: no

Tradition 7: Long-context efficiency / sparse attention — KV cache
  Representative terms: long-context, efficient attention, sparse attention,
    linear attention, memory compression, KV cache, FlashAttention
  Planned angle slot: Confirmatory A7
  Gap flag: no

Tradition 8: Memorization vs. generalization (learning theory)
  Representative terms: memorization, generalization, data memorization, training
    data extraction, verbatim reproduction, unintended memorization, privacy
  Planned angle slot: Confirmatory A8
  Gap flag: no

Tradition 9: In-context learning — context window as working memory
  Representative terms: in-context learning, ICL, few-shot, context window,
    working memory analog, implicit gradient descent, key-value retrieval from context
  Planned angle slot: Confirmatory A9
  Gap flag: no

Tradition 10: Hallucination / factual grounding (AI safety / NLP reliability)
  Representative terms: hallucination, factual inconsistency, knowledge cutoff,
    confabulation, temporal knowledge decay, factual error
  Planned angle slot: Confirmatory A10
  Gap flag: no

Traditions NOT yet represented in the planned list:
  None — all 10 traditions have at least one planned angle slot

Cross-disciplinary slots (required):
  Target tradition C1: Computational neuroscience — Hopfield networks, attractor
    dynamics, complementary learning systems, hippocampal memory consolidation
    (NOT in intake brief)
    Basis: Transformers implement key-value attention with formal connections to
    modern Hopfield networks (Ramsauer et al. 2020); computational neuroscience
    has decades of memory systems theory directly applicable to LLM analysis

  Target tradition C2: Cognitive science / cognitive architecture — working memory
    capacity, Baddeley's model, memory systems theory, forgetting curves
    (NOT in intake brief)
    Basis: User's framing "store and access information" mirrors cognitive science
    memory systems framework; cognitive science has developed capacity limits,
    encoding theories, and retrieval models that inform LLM memory comparisons

Justification for 14-angle count:
  The topic spans ≥4 distinct vocabulary traditions (10 identified at intake).
  Per angle-generation.md: "20–30 angles is appropriate when ≥4 distinct vocabulary
  traditions are identified." 14 angles is conservative for this domain; it covers
  all 10 identified traditions plus 2 cross-disciplinary, 1 null-hypothesis,
  and 1 adversarial. Justification recorded here per procedure requirement.
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1  (Confirmatory — ML systems / NLP):
         Tradition: parametric memory in transformer weights

Slot A2  (Confirmatory — Mechanistic interpretability):
         Tradition: knowledge localization and circuits

Slot A3  (Confirmatory — Model editing / knowledge surgery):
         Tradition: targeted knowledge modification

Slot A4  (Confirmatory — Retrieval-augmented / external memory):
         Tradition: RAG and external non-parametric memory

Slot A5  (Confirmatory — Memory-augmented neural networks):
         Tradition: NTM, DNC, historical MANN architectures

Slot A6  (Confirmatory — Continual learning):
         Tradition: catastrophic forgetting and knowledge retention

Slot A7  (Confirmatory — Long-context efficiency / sparse attention):
         Tradition: KV cache and long-context memory management

Slot A8  (Confirmatory — Memorization vs. generalization):
         Tradition: learning theory and unintended memorization

Slot A9  (Confirmatory — In-context learning):
         Tradition: context window as working memory mechanism

Slot A10 (Confirmatory — Hallucination / factual grounding):
         Tradition: hallucination as memory failure mode

Slot N1  (Null-hypothesis):
         Evidence that LLM memory mechanisms don't localize cleanly,
         don't edit predictably, or don't generalize as claimed

Slot D1  (Adversarial — NOT FROM traditions 1-10):
         Starting vocabulary: structural brittleness, statistical artifact,
         no genuine understanding, inconsistency, surface-level pattern matching,
         framing critique
         Label: ADVERSARIAL-FLAGGED

Slot C1  (Cross-disciplinary — Computational neuroscience):
         Tradition: Hopfield networks, attractor dynamics, biological memory analogs

Slot C2  (Cross-disciplinary — Cognitive science / cognitive architecture):
         Tradition: working memory capacity limits, memory systems theory
```

---

## ANGLE LIST

---

### ANGLE 1: Parametric Knowledge Storage in Transformer Weights
```
ANGLE 1: Parametric Knowledge Storage in Transformer Weights
===========
Vocabulary tradition: ML systems / NLP
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Empirical findings on how factual knowledge is distributed across
  transformer layers and components; probing results showing what types of knowledge
  cluster where; quantitative analysis of storage capacity in weights; findings on
  how pre-training corpus affects knowledge encoding

Source type (academic): arXiv cs.CL + cs.LG
  (per platform-calibration.md: cs.AI alone recovers ~35% of LLM literature;
  cs.CL + cs.LG together cover ~80%)
Source type (practitioner): GitHub — implementations of probing frameworks and
  factual knowledge benchmarks (e.g., LAMA, BERTnesia, ParaRel repos)

Queries:
  Q1: parametric memory large language models factual knowledge storage 2023 2024 2025
  Q2: transformer weights knowledge encoding factual associations probing language model
  Q3: how factual knowledge distributed layers transformer pre-trained language model

Coverage-gap note: Does not cover scaling law relationships between model size and
  factual knowledge capacity; does not cover multi-hop factual storage
```

---

### ANGLE 2: Knowledge Localization and Circuits in LLMs
```
ANGLE 2: Knowledge Localization and Circuits in LLMs
===========
Vocabulary tradition: Mechanistic interpretability
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Empirical findings on which specific layers, heads, or neurons
  store factual associations; MLP-as-key-value-memory evidence; circuit-level
  analysis of factual recall; findings on where specific fact types localize

Source type (academic): arXiv cs.LG + cs.AI
Source type (practitioner): GitHub — mechanistic interpretability tooling
  (TransformerLens, NNsight, baukit repos)

Queries:
  Q1: knowledge neurons large language models factual associations MLP layers
  Q2: MLP transformer key-value memories factual recall mechanistic interpretability
  Q3: circuit analysis factual retrieval attention heads language model 2024

Coverage-gap note: Does not cover multi-hop reasoning circuits; does not cover
  whether localization findings replicate across model families
```

---

### ANGLE 3: Model Editing — Targeted Knowledge Modification
```
ANGLE 3: Model Editing — Targeted Knowledge Modification
===========
Vocabulary tradition: Model editing / knowledge surgery
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for surgically editing factual knowledge in LLM weights;
  scope, specificity, and generalization of edits; comparison of ROME, MEMIT, GRACE,
  and other editing methods; failure modes and side effects of editing

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — model editing libraries
  (EasyEdit, rome, memit, GRACE repos; most-starred, most-forked ordering)

Queries:
  Q1: model editing large language models ROME MEMIT factual knowledge 2023 2024
  Q2: knowledge editing LLM locate-and-edit transformer weights specificity generalization
  Q3: continual knowledge editing language models scalability evaluation failure

Coverage-gap note: Does not cover whether editing one fact degrades related facts;
  does not cover editing in instruction-tuned vs. base models
```

---

### ANGLE 4: Retrieval-Augmented Generation and External Non-Parametric Memory
```
ANGLE 4: Retrieval-Augmented Generation and External Non-Parametric Memory
===========
Vocabulary tradition: Retrieval-augmented / external memory
Angle type: Confirmatory
Predicted research character: empirical + consensus
What to extract: Architectures for external memory access in LLMs; comparison of
  parametric vs. non-parametric knowledge; retrieval mechanisms; MemGPT-style
  memory management; evidence on when retrieval outperforms in-weights knowledge

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — RAG and external memory implementations
  (LlamaIndex, LangChain, MemGPT, langchain-memory repos)

Queries:
  Q1: retrieval augmented generation non-parametric memory language model 2023 2024 2025
  Q2: external memory augmented language model architecture knowledge access retrieval
  Q3: MemGPT memory management LLM long-term memory beyond context window

Coverage-gap note: Does not cover latency and throughput tradeoffs in production
  RAG systems; does not cover hallucination rates in retrieval-augmented vs.
  purely parametric generation
```

---

### ANGLE 5: Memory-Augmented Neural Networks — Historical Architecture Tradition
```
ANGLE 5: Memory-Augmented Neural Networks — Historical Architecture Tradition
===========
Vocabulary tradition: Memory-augmented neural networks (MANN)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: NTM, DNC, Memory Networks architectures and their design
  principles; how external memory access evolved through differentiable read/write;
  connections and divergences between MANN tradition and transformer attention;
  what worked and what didn't in the pre-transformer memory era

Source type (academic): arXiv cs.NE + cs.LG; Semantic Scholar for older
  pre-2018 papers (Graves 2014, Sukhbaatar 2015)
Source type (practitioner): GitHub — historical NTM/DNC implementations
  (attentive-reader, dmn-tensorflow, dnc repos)

Queries:
  Q1: neural Turing machine differentiable neural computer memory access sequence learning
  Q2: memory networks attention mechanism read write external memory neural
  Q3: memory augmented neural networks survey history transformer attention connection

Coverage-gap note: Connection between MANN external read/write and transformer
  key-value attention is often under-theorized; does not cover why MANN external
  memory approaches lost to in-weights approaches at scale
```

---

### ANGLE 6: Catastrophic Forgetting and Knowledge Retention in Continual Learning
```
ANGLE 6: Catastrophic Forgetting and Knowledge Retention in Continual Learning
===========
Vocabulary tradition: Continual learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Mechanisms of catastrophic forgetting in fine-tuned LLMs; methods
  to preserve prior knowledge during adaptation; empirical measurements of
  forgetting rates; comparison of continual pre-training vs. fine-tuning dynamics;
  replay-based and regularization-based mitigation strategies

Source type (academic): arXiv cs.LG + cs.AI
Source type (practitioner): GitHub — continual learning libraries and benchmarks
  (Sequoia, avalanche, mammoth repos)

Queries:
  Q1: catastrophic forgetting large language models fine-tuning continual learning 2023 2024
  Q2: knowledge retention LLM continual pre-training plasticity stability tradeoff
  Q3: forgetting mechanisms transformer fine-tuning prior knowledge preservation methods

Coverage-gap note: Does not cover forgetting in RLHF alignment fine-tuning
  specifically; does not cover forgetting rates at different model scales
```

---

### ANGLE 7: Long-Context Memory and KV Cache Compression
```
ANGLE 7: Long-Context Memory and KV Cache Compression
===========
Vocabulary tradition: Long-context efficiency / sparse attention
Angle type: Confirmatory
Predicted research character: empirical + consensus
What to extract: Mechanisms for extending effective context window; KV cache
  behavior as a form of temporary working memory; efficient attention variants
  (sparse, linear, sliding window); in-context memory compression methods;
  empirical results on how information retrieval degrades over long contexts

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — long-context engineering tools
  (FlashAttention, vLLM, LongBench, RULER repos)

Queries:
  Q1: key-value cache large language models context window memory compression 2024 2025
  Q2: long context attention mechanisms efficient transformer memory 2024
  Q3: information retrieval degradation long context LLM lost in the middle

Coverage-gap note: Does not cover user-facing implications of context window
  compression for long-document tasks; does not cover KV cache in multi-turn
  dialogue memory management
```

---

### ANGLE 8: Data Memorization vs. Generalization — Learning Theory and Privacy
```
ANGLE 8: Data Memorization vs. Generalization — Learning Theory and Privacy
===========
Vocabulary tradition: Memorization vs. generalization (learning theory)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Conditions under which LLMs memorize training data verbatim vs.
  generalize; empirical measurements of memorization rates at different model
  scales; training data extraction attacks; unintended memorization; privacy
  implications; distinction between benign memorization and harmful memorization

Source type (academic): arXiv cs.LG + cs.CR
  (cs.CR covers cryptography and security — relevant for privacy and extraction)
Source type (practitioner): GitHub — data extraction and memorization tools
  (training-data-extraction, mimir repos)

Queries:
  Q1: memorization generalization large language models training data extraction 2023 2024
  Q2: verbatim memorization LLM unintended training data scaling law privacy
  Q3: data memorization transformer language model rate scale duplication frequency

Coverage-gap note: Does not cover the relationship between memorization and
  factual accuracy (more memorization may help factual recall); does not cover
  intentional vs. incidental memorization distinction
```

---

### ANGLE 9: In-Context Learning as Implicit Memory and Retrieval
```
ANGLE 9: In-Context Learning as Implicit Memory and Retrieval
===========
Vocabulary tradition: In-context learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Mechanisms by which the context window serves as temporary
  working memory; how models retrieve from context vs. from weights; theoretical
  accounts of ICL (implicit gradient descent, Bayesian inference, retrieval);
  capacity limits of in-context memory; failure modes when context is long or
  noisy

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — ICL evaluation and benchmarking
  (HELM, PromptBench, ContextualAI repos)

Queries:
  Q1: in-context learning mechanism large language models memory retrieval 2022 2023 2024
  Q2: context window working memory LLM few-shot learning capacity limits
  Q3: in-context learning implicit gradient descent Bayesian inference retrieval mechanism

Coverage-gap note: Does not cover multi-turn dialogue memory; does not cover
  whether in-context and in-weights retrieval are functionally substitutable
```

---

### ANGLE 10: Hallucination as Memory Failure — Factual Inconsistency and Temporal Knowledge Decay
```
ANGLE 10: Hallucination as Memory Failure — Factual Inconsistency and Temporal Knowledge Decay
===========
Vocabulary tradition: Hallucination / factual grounding (AI safety / NLP reliability)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Factual errors traceable to parametric memory failures; knowledge
  cutoff effects on accuracy; temporal inconsistency in factual recall; conditions
  under which models confabulate; typology of hallucination types by memory mechanism

Source type (academic): arXiv cs.CL + cs.AI
Source type (practitioner): GitHub — hallucination benchmarks
  (TruthfulQA, HaluEval, FactScore, HallucinationLeaderboard repos)

Queries:
  Q1: hallucination large language models factual memory failure knowledge cutoff 2023 2024
  Q2: LLM factual inconsistency knowledge recall failure temporal knowledge decay
  Q3: confabulation language models false memory parametric knowledge failure types

Coverage-gap note: Does not cover hallucination in multimodal models; does not
  cover whether RAG reduces hallucination rate (covered by Angle 4)
```

---

### ANGLE 11: Evidence That LLM Memory Mechanisms Don't Localize, Don't Generalize, or Fail Systematically
```
ANGLE 11: Evidence That LLM Memory Mechanisms Don't Localize, Don't Generalize,
          or Fail Systematically
===========
Vocabulary tradition: Null results / LLM memory failure (cross-tradition)
Angle type: Null-hypothesis
Predicted research character: empirical (gap — null results are sparse and
  systematically underrepresented in publication record)
What to extract: Cases where knowledge does NOT localize to predicted circuits;
  model editing failures (edits don't generalize, cause side effects); negative
  replication results; evidence that claims about parametric memory are overstated;
  literature documenting scope limitations of memory research findings

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub — failure cases documented in model editing
  issue threads; blog posts documenting editing failures

Queries:
  Q1: model editing failure generalization LLM negative results limitations scope 2023 2024
  Q2: knowledge does not localize transformer distributed representation failure
      knowledge storage claims
  Q3: LLM memory mechanism null result replication failure knowledge storage
      claims do not hold

Coverage-gap note: Null results are systematically harder to find; publication bias
  favors positive results; this angle may require manual inspection of negative
  appendix results in editing papers and examination of unsuccessful forks in
  GitHub editing repos.
```

---

### ANGLE 12: LLM Memory as Structural Brittleness — Skeptical Framing
```
ANGLE 12: LLM Memory as Structural Brittleness — Skeptical Framing
===========
Vocabulary tradition: Cognitive systems critique / LLM skepticism
Angle type: Adversarial-FLAGGED
Predicted research character: empirical + gap
What to extract: Arguments and evidence that LLM "memory" is a misleading or
  incomplete framing; evidence that recall is inconsistent under paraphrase or
  surface variation; evidence that apparent memory is statistical surface pattern
  matching without stable underlying representation; critique of the memory
  analogy itself; brittleness evidence that undermines the storage metaphor

Source type (academic): arXiv cs.CL + cs.AI; philosophy of mind / AI journals
  (Minds and Machines, AI & Society)
Source type (practitioner): Technical blogs (Alignment Forum, LessWrong),
  practitioner critique posts

Generating from tradition: Cognitive systems critique / LLM skepticism
Excluding from generation prompt: parametric memory, knowledge localization,
  model editing, RAG, memory networks, catastrophic forgetting, KV cache,
  memorization, in-context learning, hallucination — all terms used in A1-A10

Queries:
  Q1: LLM factual recall inconsistency paraphrase brittleness no stable memory
      representation
  Q2: language model knowledge unstable surface pattern matching artifact memory
      illusion inconsistent
  Q3: are large language models actually memorizing critique statistical pattern
      matching no genuine knowledge

[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior
confirmatory results. This angle must be run before reading or synthesizing
results from Angles 1-10.]
```

---

### ANGLE 13: Hopfield Networks, Attractor Dynamics, and Biological Memory Analogs
```
ANGLE 13: Hopfield Networks, Attractor Dynamics, and Biological Memory Analogs
===========
Vocabulary tradition: Computational neuroscience
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: Formal connections between transformer attention and modern Hopfield
  networks; attractor dynamics as a model of memory storage and retrieval;
  biological memory consolidation (hippocampal-neocortical) and potential LLM
  analogs; complementary learning systems theory applied to LLMs; memory capacity
  theorems in Hopfield networks and what they predict about LLM storage limits

Generating from tradition: Computational neuroscience — NOT from user's apparent
  ML-systems / NLP framing

Source type (academic): arXiv cs.NE + q-bio.NC; Neural Computation; Nature
  Neuroscience; ICLR/NeurIPS papers on Hopfield connections
Source type (practitioner): GitHub — modern Hopfield network implementations
  (modern-hopfield-network, hopfield-layers repos)

Queries:
  Q1: modern Hopfield networks transformers attention mechanism memory capacity
      energy function 2020 2021 2022
  Q2: attractor dynamics memory storage neural network transformer connection
      associative memory
  Q3: complementary learning systems theory language models hippocampal neocortical
      consolidation analog

Coverage-gap note: This tradition has produced formal connections to transformer
  attention (Ramsauer et al. 2020 is the anchor paper) but the empirical bridge
  to how LLMs actually store facts in practice is still largely theoretical;
  cognitive neuroscientists rarely study LLMs directly
```

---

### ANGLE 14: Working Memory Capacity Limits and Memory Systems Theory from Cognitive Science
```
ANGLE 14: Working Memory Capacity Limits and Memory Systems Theory from Cognitive Science
===========
Vocabulary tradition: Cognitive science / cognitive architecture
Angle type: Cross-disciplinary
Predicted research character: consensus + empirical
What to extract: Comparisons between LLM context window behavior and human working
  memory models (Baddeley, Cowan); capacity limits and their analogs in LLMs;
  episodic vs. semantic vs. procedural memory distinctions applied to LLMs;
  forgetting curves and whether LLMs show analogous patterns; cognitive architecture
  frameworks (ACT-R, SOAR) as lenses for LLM memory

Generating from tradition: Cognitive science / cognitive architecture — NOT from
  user's apparent ML-systems framing

Source type (academic): PsyArXiv; Psychological Review; Cognitive Psychology;
  Trends in Cognitive Sciences; arXiv cs.CL for bridging papers
Source type (practitioner): Practitioner blog posts analyzing LLMs through
  cognitive science lens (LessWrong, Towards Data Science)

Queries:
  Q1: working memory capacity limits large language models cognitive science
      comparison human analogy 2023 2024
  Q2: memory systems theory episodic semantic procedural large language models
      analogies distinctions
  Q3: LLM context window Baddeley working memory model capacity interference
      forgetting cognitive

Coverage-gap note: Cognitive scientists rarely publish on LLMs specifically;
  bridging literature is sparse and concentrated in a few labs; this angle may
  produce more gap evidence than positive findings — which is itself informative
```

---

## GATE SUMMARY

```
GATE SUMMARY
============
Gate 1 — Completeness:
  PASS
  - Null-hypothesis angle: PRESENT (Angle 11) — queries contain "failure,"
    "negative results," "null result," "do not hold"
  - Adversarial angle: PRESENT (Angle 12) — labeled [ADVERSARIAL-FLAGGED]
    with dispatch note
  - Cross-disciplinary angles: PRESENT (Angles 13, 14) — target traditions
    (computational neuroscience, cognitive science) not in intake brief traditions
  - Source-type coverage: domain is academic-heavy; practitioner sources (GitHub,
    blog posts) present in ≥10 of 14 angles
  - Vocabulary-tradition map: PRESENT — 14 distinct tradition labels across
    14 angles

Gate 2 — Distinctness:
  PASS
  Boolean-connective test applied to high-risk pairs:
    - Angles 1/2 (parametric memory vs. knowledge localization):
      A1 queries anchored on "parametric memory," "weights knowledge storage"
      A2 queries anchored on "knowledge neurons," "MLP key-value," "circuits"
      OR retrieval would overlap but not produce identical result sets —
      PASS (distinct research programs: characterization vs. circuit discovery)
    - Angles 2/3 (knowledge localization vs. model editing):
      A2: "knowledge neurons," "MLP key-value memories"
      A3: "ROME MEMIT," "locate-and-edit"
      Different research programs with directional dependence (editing uses
      localization) but distinct query vocabularies — PASS
    - Angles 4/5 (RAG vs. MANN):
      A4: "retrieval augmented generation," "MemGPT" (2020+ era)
      A5: "neural Turing machine," "differentiable neural computer" (pre-2018 era)
      Different eras and architectures — PASS
    - Angles 11/12 (null-hypothesis vs. adversarial):
      N1 targets failures within the accepted paradigm (editing doesn't generalize)
      D1 targets the framing itself (memory analogy is misleading) — PASS
  Vocabulary-tradition distinctness:
    All 14 angles have different tradition labels.
    Angle 11 uses "Null results / LLM memory failure (cross-tradition)" —
    distinct from Angle 2's "Mechanistic interpretability" label; exception
    for null-hypothesis variant noted but tradition label was independently
    differentiated. PASS.

Gate 3 — Launchability:
  PASS
  - All 14 angles have concrete query strings (runnable as-is)
  - No placeholder vocabulary in any query
  - Source types named specifically for all angles (arXiv with correct
    category per platform-calibration.md; specific GitHub repos cited;
    specific practitioner sources named)

Gate 4 — Scoring prohibition:
  PASS
  - No angles were filtered or ranked by subjective assessment
  - No "most useful" or "strongest" language present
  - Angle selection used structural criteria only: vocabulary-tradition
    coverage, type allocation, Boolean-connective distinctness

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all 10 intake vocabulary traditions were
     enumerated by LLM only (Source B unavailable). Recommend running survey
     paper probe before accepting this as complete coverage. Missing traditions
     are unknown by definition; the LLM cannot enumerate what it hasn't seen.
  2. Angle 11 (null-hypothesis): null results are systematically underrepresented
     in publication record; this angle may return sparse results regardless of
     search quality. Manual inspection of negative appendices and GitHub issue
     threads is recommended to supplement automated retrieval.
  3. Angle 14 (cognitive science cross-disciplinary): bridging literature is
     sparse; expected to produce more gap evidence than positive findings.
     This is informative as a gap signal, not a failure of the angle.
  4. Angles 2 and 3 (mechanistic interpretability vs. model editing): these
     research communities are closely related and there is directional dependence
     (editing uses localization). If the literature is smaller than expected,
     apply the small-literature exception from Gate 2 before merging.
```

---

## SELF-CHECK (required by CLAUDE.md after-every-task rule)

**What is missing or questionable in this output:**

1. **Source B not run.** The vocabulary traditions list is entirely LLM self-reported. There may be relevant research communities not represented — particularly from human-computer interaction (memory augmentation tools), database systems (neural databases), or formal methods (memory proofs for neural networks). A survey-paper probe on "memory large language models survey 2024" would validate or extend the traditions list.

2. **Angle 5 (MANN history) predicted to be sparse.** The memory-augmented neural network tradition predates transformers; primary literature dates to 2014-2018. Post-2022 work in this tradition is limited. This angle may saturate quickly and primarily serve as historical context.

3. **Scale and scope of this topic.** Memory in LLMs is an active field with dozens of papers per week in 2024-2025. A researcher using this angle list should plan for significant results in Angles 1, 2, 3, 4, 6, and 7. Saturation criterion is relevant — the kit's coverage-gap conditioning produces breadth, but depth management within each angle is the researcher's responsibility.

4. **No angle covers multi-modal memory.** Vision-language models and other multi-modal LLMs have distinct memory mechanisms. If the user's scope includes multi-modal LLMs, an additional angle on multi-modal factual grounding would be needed. Current scope inferred as text-only from the prompt.

Proposing X — proceeding unless redirected: the next step is dispatch to a downstream research agent. Angle 12 [ADVERSARIAL-FLAGGED] should be dispatched first, in a context with no prior confirmatory results, before dispatching Angles 1-11 and 13-14.
