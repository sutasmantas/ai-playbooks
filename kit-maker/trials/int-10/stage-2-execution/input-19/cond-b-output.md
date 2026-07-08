# Condition B — Angle Generation Output
## Input 19: Mechanistic Interpretability of Chain-of-Thought Reasoning

**Kit version:** angle-gen-kit  
**Deployment context:** Subagent (Source B unavailable — MODERATE severity per intake.md Step 5)  
**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only. Source B (web search / survey-paper probe) is unavailable in this execution context. External validation via survey-paper probe is recommended before treating the angle list as covering all traditions. Expected coverage: MODERATE, not FULL (per CLAUDE.md deployment constraints).

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: Mechanistic interpretability approaches to explaining chain-of-thought reasoning in large
language models — specifically, what internal computations, circuits, and representations
implement the sequential reasoning steps visible in CoT outputs.

Anchor vocabulary: "chain-of-thought reasoning" (NLP/prompting tradition), "mechanistic
interpretability" (MI research tradition), "explainability" (XAI tradition)

Candidate vocabulary traditions:
  1. Mechanistic interpretability / circuits analysis — activation patching, causal tracing,
     path patching, induction heads, ablations, direct logit attribution, circuit discovery;
     key researchers: Elhage, Wang, Nanda, Conmy, Lieberum
  2. Sparse features / dictionary learning — superposition hypothesis, polysemanticity,
     monosemantic features, sparse autoencoders (SAEs), dictionary learning, feature
     visualization; key researchers: Cunningham, Bricken, Anthropic Scaling Monosemanticity team
  3. CoT faithfulness evaluation — faithfulness, post-hoc rationalization, unfaithful CoT,
     explanation fidelity, chain-of-thought steganography, process-level reward, reasoning
     trace fidelity; key researchers: Turpin, Lanham, Lyu, Kim
  4. Representation engineering / probing — probing classifiers, linear representation
     hypothesis, representation engineering, concept erasure, truth probes, activation
     steering; key researchers: Marks, Tegmark, Zou, Burns
  5. In-context learning mechanisms — induction heads, task vectors, few-shot prompting
     mechanism, retrieval heads, key-value memory; key researchers: Olsson, Todd, Geva

  NOTE: Vocabulary traditions listed here are LLM self-reported. Source B (web search) is
  unavailable. Survey-paper vocabulary probe recommended before accepting as complete.

Question type: EXPLORATORY
  (No comparison or intervention-outcome structure in the prompt; user asks "I want to research X")

Scope markers:
  - Domain: mechanistic interpretability approaches only
  - User explicitly excluded "other perspectives" on CoT explainability
  - No date range restriction stated
  - Inferred scope: CoT in decoder-only LLMs; extends to encoder-decoder if found

Known exclusions: Non-mechanistic interpretability approaches to CoT explainability, including:
  attention visualization without causal claims, RLHF-based explanation methods, LIME/SHAP
  feature attribution, behavioral probing without circuit-level claims

Domain maturity estimate: academic-heavy
  Basis: Both anchor terms are academic vocabulary; mechanistic interpretability is
  arXiv-native; user mentioned no tools, products, or deployment contexts; field has active
  research communities at Anthropic, DeepMind, EleutherAI, and multiple universities

Survey paper status: NOT CHECKED — Source B UNAVAILABLE
Source B status: UNAVAILABLE — MODERATE (Source A + Source C produced 5 distinct
  vocabulary traditions; proceeding with VOCABULARY SELF-REPORT FLAG active)
```

**Intake gate check:**
- Topic field populated: YES
- Candidate vocabulary traditions: 5 entries — YES
- Question type classified: EXPLORATORY — YES

Gate conditions satisfied. Proceeding to angle-generation.md.

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: Mechanistic interpretability — circuits & attention analysis
  Representative terms: circuits, attention head analysis, QK/OV matrices, induction heads,
    ablation, direct logit attribution, circuit discovery, superposition
  Planned angle slot: Confirmatory A1
  Gap flag: no

Tradition 2: Mechanistic interpretability — causal mediation analysis
  Representative terms: activation patching, causal tracing, path patching, causal mediation,
    causal scrubbing, residual stream decomposition, ROME, localization
  Planned angle slot: Confirmatory A2
  Gap flag: no

Tradition 3: Sparse features / dictionary learning
  Representative terms: superposition hypothesis, polysemanticity, monosemantic features,
    sparse autoencoders (SAEs), dictionary learning, feature visualization, Neuronpedia
  Planned angle slot: Confirmatory A3
  Gap flag: no

Tradition 4: CoT faithfulness evaluation
  Representative terms: faithfulness, post-hoc rationalization, unfaithful CoT, explanation
    fidelity, steganographic reasoning, process reward, reasoning trace fidelity
  Planned angle slot: Confirmatory A4
  Gap flag: no

Tradition 5: Representation engineering / probing
  Representative terms: probing classifiers, linear representation hypothesis, representation
    engineering, concept erasure, truth probes, activation steering, geometric structure
  Planned angle slot: Confirmatory A5
  Gap flag: no

Tradition 6: In-context learning mechanisms
  Representative terms: induction heads, task vectors, few-shot prompting mechanism,
    retrieval heads, key-value memory, associative recall, compositional retrieval
  Planned angle slot: Confirmatory A6
  Gap flag: no

Traditions NOT yet represented in the planned list:
  All 6 traditions from the intake brief have planned angle slots.
  The adversarial slot (D1) uses vocabulary from OUTSIDE these traditions.
  The null-hypothesis slot (N1) targets MI methodology limits — a self-critique sub-tradition.

Cross-disciplinary slot (required):
  Target tradition: Cognitive neuroscience / computational neuroscience
  Basis for selection: Cognitive neuroscience studies how biological neural networks implement
    sequential reasoning (working memory, prefrontal planning, episodic retrieval). This
    tradition provides a theoretical framework for what MI approaches are trying to find. Terms
    such as "working memory models," "prefrontal cortex sequential reasoning," "hierarchical
    prediction in neural circuits," and "neural basis of planning" are absent from all 6 MI
    traditions above. The bridge literature (transformer analogies to biological neural circuits
    for reasoning) is a genuinely adjacent cross-disciplinary connection.
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Tradition 1: circuits & attention analysis):
  Focus: what CoT-specific circuits and attention head roles exist
Slot A2 (Confirmatory — Tradition 2: causal mediation analysis):
  Focus: what causal interventions reveal about CoT computation
Slot A3 (Confirmatory — Tradition 3: sparse features / SAEs):
  Focus: what SAE-discovered features are active during CoT
Slot A4 (Confirmatory — Tradition 4: CoT faithfulness evaluation):
  Focus: what mechanistic analysis reveals about CoT faithfulness
Slot A5 (Confirmatory — Tradition 5: representation engineering):
  Focus: what representation probing reveals about CoT intermediate states
Slot A6 (Confirmatory — Tradition 6: ICL mechanisms):
  Focus: whether ICL mechanisms (induction heads, task vectors) are operative in CoT
Slot N1 (Null-hypothesis):
  Focus: evidence that MI approaches do NOT validly explain CoT
  Vocabulary: MI methodology critique, replication limits, scope conditions, failure cases
Slot D1 (Adversarial):
  Starting vocabulary: behavioral pattern learning, shortcut learning, surface statistics,
    spurious correlations, format bias, pattern completion
  NOT FROM: circuits, activation patching, causal tracing, sparse autoencoders, probing,
    faithfulness, induction heads, task vectors, dictionary learning, representation engineering
Slot C1 (Cross-disciplinary — cognitive neuroscience):
  Focus: biological neural circuit models of sequential reasoning as a reference frame for CoT
```

---

## FULL ANGLE LIST

---

### ANGLE 1: Circuit-Level Analysis of Attention Heads During Chain-of-Thought Reasoning

```
ANGLE 1: Circuit-Level Analysis of Attention Heads During Chain-of-Thought Reasoning
===========
Vocabulary tradition: Mechanistic interpretability — circuits & attention analysis
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Specific attention head functions operative during CoT (which heads attend to
  prior reasoning steps, copy operations, in-context retrieval, multi-hop bridging); circuit
  diagrams of CoT-specific computation; ablation results showing which heads are causally
  necessary for correct multi-step reasoning output; evidence for or against CoT-specific
  circuits that don't appear in non-CoT inference

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub repos for interpretability tooling (TransformerLens, baukit,
  nnsight) — issue threads and notebooks specifically analyzing CoT attention patterns

Queries:
  Q1: mechanistic interpretability chain-of-thought attention heads circuits transformers
  Q2: circuit analysis multi-step reasoning transformer intermediate steps ablation language models
  Q3: induction heads role chain-of-thought scratchpad reasoning attention pattern analysis
  Q4: QK OV circuit decomposition chain-of-thought multi-hop inference transformer

Coverage-gap note: Queries are calibrated for GPT-style decoder-only models. Encoder-decoder
  architectures performing CoT (T5, FLAN-T5, T5-based reasoning models) may have different
  circuit structures not covered by this angle. A separate angle may be needed if the scope
  includes non-decoder architectures.
```

---

### ANGLE 2: Causal Tracing and Activation Patching for Chain-of-Thought Computation

```
ANGLE 2: Causal Tracing and Activation Patching for Chain-of-Thought Computation
===========
Vocabulary tradition: Mechanistic interpretability — causal mediation analysis
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Causal intervention results identifying which MLP layers and residual stream
  positions causally mediate CoT steps; path patching experiments on reasoning errors;
  component-level decomposition of multi-step inference; causal localization of where
  reasoning steps are "computed" vs. "retrieved"; comparison of causal structure across
  reasoning-correct vs. reasoning-incorrect CoT traces

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): Anthropic interpretability blog posts; EleutherAI alignment blog;
  LessWrong posts on causal tracing methodology applied to reasoning

Queries:
  Q1: activation patching causal tracing chain-of-thought reasoning large language models 2024
  Q2: path patching causal mediation analysis intermediate reasoning steps transformer
  Q3: causal scrubbing chain-of-thought component localization MLP attention residual stream
  Q4: direct logit attribution multi-step reasoning mechanistic analysis transformer scratchpad

Coverage-gap note: Causal tracing methodology (ROME / Meng et al.) was developed for factual
  recall tasks. Its transfer to multi-step symbolic reasoning in CoT is not established and
  may be a literature gap. Activation patching confounds are more severe for sequential tasks
  where intermediate tokens are causally entangled.
```

---

### ANGLE 3: Sparse Autoencoders and Dictionary Learning Applied to Chain-of-Thought Representations

```
ANGLE 3: Sparse Autoencoders and Dictionary Learning Applied to Chain-of-Thought Representations
===========
Vocabulary tradition: Sparse features / dictionary learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Whether SAE-discovered features active during CoT tokens correspond to
  interpretable intermediate reasoning concepts; feature steering effects on CoT quality and
  faithfulness; polysemanticity vs. monosemanticity of features active on scratchpad tokens;
  evidence for or against "reasoning features" as distinct SAE feature clusters

Source type (academic): arXiv cs.LG
Source type (practitioner): Anthropic Scaling Monosemanticity technical report; Neuronpedia
  feature annotations; EleutherAI SAE training codebase (GitHub — issue threads and
  notebooks on reasoning-domain features)

Queries:
  Q1: sparse autoencoders chain-of-thought reasoning features language models interpretability
  Q2: dictionary learning transformer residual stream reasoning intermediate states SAE features
  Q3: monosemantic features scratchpad polysemanticity superposition chain-of-thought tokens
  Q4: feature steering chain-of-thought quality intervention causal SAE activation

Coverage-gap note: SAEs applied specifically to CoT tokens (scratchpad representations, not
  final answer tokens) is a narrow area. Most published SAE work targets semantic and factual
  features rather than reasoning-process features. This angle may return sparse literature —
  treat low result count as a gap signal, not a search failure.
```

---

### ANGLE 4: Mechanistic Analysis of Chain-of-Thought Faithfulness

```
ANGLE 4: Mechanistic Analysis of Chain-of-Thought Faithfulness
===========
Vocabulary tradition: CoT faithfulness evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Mechanistic evidence on whether CoT tokens causally influence final answer
  computation (vs. being post-hoc text outputs); comparison of internal computation across
  models with CoT trained-in vs. prompted; faithfulness metrics grounded in activation-level
  evidence; evidence for or against steganographic reasoning (hidden computation not reflected
  in CoT text); process-level vs. output-level faithfulness distinctions

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): LessWrong / Alignment Forum posts where MI community discusses
  CoT faithfulness; OpenAI preparedness posts on process supervision

Queries:
  Q1: chain-of-thought faithfulness mechanistic causal influence final answer computation
  Q2: faithful explanation reasoning trace language model post-hoc rationalization mechanistic
  Q3: chain-of-thought tokens causally necessary computation transformer ablation scratchpad
  Q4: steganographic reasoning hidden computation chain-of-thought mechanistic interpretability

Coverage-gap note: "Faithfulness" has at least two distinct definitions in this literature —
  process faithfulness (whether the CoT reflects the actual computation path) and output
  faithfulness (whether following the CoT steps would produce the right answer). Queries
  may not cleanly separate these. Manual disambiguation may be needed in the extraction phase.
```

---

### ANGLE 5: Representation Engineering and Probing of Chain-of-Thought Intermediate States

```
ANGLE 5: Representation Engineering and Probing of Chain-of-Thought Intermediate States
===========
Vocabulary tradition: Representation engineering / probing
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Linear probes detecting semantic content of intermediate CoT tokens;
  representation engineering (activation steering) interventions on reasoning steps;
  geometry of reasoning-relevant representations in activation space; evidence for or
  against linear representation of intermediate reasoning states; probing accuracy as a
  function of CoT step depth

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub — TransformerLens probing experiment notebooks;
  interpretability community shared notebooks on residual stream geometry

Queries:
  Q1: probing classifiers chain-of-thought intermediate states reasoning language models
  Q2: linear representation hypothesis chain-of-thought reasoning geometry activation space
  Q3: representation engineering intervention chain-of-thought intermediate token steering
  Q4: concept representation multi-step reasoning transformer linear probe mechanistic

Coverage-gap note: Probing is contested within the MI community — some researchers exclude
  it from "mechanistic interpretability" on grounds that probe accuracy does not establish
  causal role. Literature on probing CoT states may not self-identify as MI and may require
  separate vocabulary to locate (e.g., "representation analysis" or "activation analysis").
```

---

### ANGLE 6: In-Context Learning Mechanisms as the Computational Substrate of Chain-of-Thought

```
ANGLE 6: In-Context Learning Mechanisms as the Computational Substrate of Chain-of-Thought
===========
Vocabulary tradition: In-context learning mechanisms
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Whether the computational mechanisms discovered for ICL (induction heads,
  task-vector formation, associative recall) are also operative during CoT reasoning; whether
  CoT is implemented by ICL-type retrieval mechanisms or requires distinct circuit structures;
  interaction effects between retrieval and inference mechanisms in multi-step CoT; evidence
  on whether CoT and ICL share or diverge in their mechanistic substrate

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): Neel Nanda's blog on transformers and ICL mechanisms;
  Anthropic interpretability team publications on induction heads

Queries:
  Q1: in-context learning mechanism chain-of-thought reasoning computational substrate
      transformer circuits
  Q2: task vectors induction heads multi-step reasoning chain-of-thought relationship
      mechanistic
  Q3: retrieval heads chain-of-thought factual reasoning mechanistic interpretability
      associative recall
  Q4: few-shot prompting mechanism chain-of-thought computation similarity circuits
      induction head role

Coverage-gap note: Most ICL mechanism papers predate widespread CoT analysis. The bridging
  literature — explicitly linking ICL mechanisms to CoT computation — may be thin or absent.
  This angle may require combining ICL mechanism papers with CoT interpretation papers even
  where neither cites the other.
```

---

### ANGLE 7 [ADVERSARIAL-FLAGGED]: Chain-of-Thought as Learned Text Pattern Without Mechanistic Reasoning Substance

```
ANGLE 7: Chain-of-Thought as Learned Text Pattern Without Mechanistic Reasoning Substance
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Behavioral pattern learning / shortcut learning
Angle type: Adversarial
Predicted research character: empirical

Generating from: behavioral pattern learning / shortcut learning vocabulary.
Excluding from generation: circuits, activation patching, causal tracing, sparse autoencoders,
  probing classifiers, induction heads, path patching, faithfulness evaluation, dictionary
  learning, representation engineering, task vectors, retrieval heads.

What to extract: Evidence that CoT outputs are surface-statistical text patterns rather than
  mechanistically grounded sequential computation; evidence that models produce CoT-shaped
  text without corresponding internal reasoning structure; shortcut learning in multi-step
  response generation; evidence that CoT performance gains disappear when surface format is
  controlled; evidence that CoT output quality is predicted by text-format similarity to
  training data rather than by internal computation structure

Source type (academic): arXiv cs.CL + cs.LG (specifically seeking failure-mode and critical
  analysis papers; filter for negative results and null findings)
Source type (practitioner): NeurIPS/ICLR/ICML workshop proceedings on LLM failure modes;
  critical analysis posts on LessWrong and the Alignment Forum that challenge CoT claims

Queries:
  Q1: chain-of-thought shortcut learning surface statistics text pattern language models
      spurious correlation
  Q2: language model multi-step inference without genuine computation format bias evaluation
  Q3: chain-of-thought improvement benchmark artifact format effect controlled evaluation
  Q4: reasoning trace without reasoning language model pattern matching benchmark inflation

Coverage-gap note: Literature explicitly framing CoT as pattern-matching is likely
  underrepresented because researchers motivated to study CoT positively dominate the
  publication record. The adversarial angle is especially important for detecting publication
  bias in confirmatory angles A1–A6. Expect sparser literature than confirmatory angles.
```

---

### ANGLE 8 (Null-Hypothesis): Evidence That Mechanistic Interpretability Does NOT Validly Explain Chain-of-Thought

```
ANGLE 8: Evidence That Mechanistic Interpretability Does NOT Validly Explain Chain-of-Thought
===========
Vocabulary tradition: MI methodology critique / replication and generalization limits
Angle type: Null-hypothesis
Predicted research character: empirical (with expected gap character — systematic null results
  are underreported)
What to extract: Evidence that MI circuits found for CoT are not causally sufficient for CoT
  outputs; evidence that circuit findings do not replicate across model architectures or
  training runs; evidence that activation patching confounds exist specifically for CoT tasks;
  evidence that SAE decompositions miss causally relevant CoT computation; scope conditions
  under which MI methods break down for sequential or multi-step reasoning; replication
  failures of specific MI claims about reasoning

Source type (academic): arXiv cs.LG + cs.CL (specifically seeking scope condition papers,
  limitation analyses, and replication studies)
Source type (practitioner): GitHub issues on TransformerLens and related tools specifically
  about CoT analyses; Alignment Forum discussions on MI methodology limits

Queries:
  Q1: mechanistic interpretability limitations failure cases chain-of-thought reasoning
      validity scope
  Q2: circuit analysis does not generalize replication failure language models reasoning
      architecture
  Q3: activation patching confounds limitations causal claims sequential reasoning
      scratchpad chain-of-thought
  Q4: sparse autoencoders incomplete representation reasoning mechanistic failure scope
      conditions
  Q5: mechanistic interpretability when fails multi-step reasoning negative results scope
      conditions

Coverage-gap note: Null results on MI methodology limits are systematically underreported.
  Low result count from this angle is expected and signals a genuine gap in the literature,
  not a search failure. If fewer than 10 papers are found: flag as SMALL LITERATURE per
  angle-quality.md Gate 2 exception. Absence of literature here is itself a finding to report.
```

---

### ANGLE 9 (Cross-Disciplinary): Cognitive Neuroscience of Sequential Reasoning as a Reference Frame for CoT Mechanistic Analysis

```
ANGLE 9: Cognitive Neuroscience of Sequential Reasoning as Reference Frame for CoT MI
===========
Vocabulary tradition: Cognitive neuroscience / computational neuroscience
Angle type: Cross-disciplinary
Predicted research character: empirical (biological neural circuits) + consensus (analogy
  assessments); likely gap for the bridge literature specifically
What to extract: Computational neuroscience models of sequential reasoning (working memory,
  prefrontal planning, episodic retrieval) that could be tested against MI findings in
  transformers; neural basis of step-by-step problem solving in primates; evidence for or
  against analogy between transformer CoT circuits and neural circuits for sequential
  reasoning; what cognitive neuroscience would predict about the architecture of a circuit
  that implements sequential inference

Source type (academic): PubMed + Cognitive Science journal + Nature Neuroscience
  (NOT arXiv — different ingest policy; this angle targets a distinct author population and
  publication incentive structure from all confirmatory angles)
Source type (practitioner): deprioritized — minimal practitioner production in cognitive
  neuroscience research; practitioner source is not applicable here

Queries:
  Q1: neural mechanisms sequential reasoning working memory prefrontal cortex step-by-step
      problem solving
  Q2: computational model episodic reasoning biological neural circuit artificial neural
      network analogy
  Q3: transformer chain-of-thought analogy biological sequential processing neural substrate
  Q4: cognitive neuroscience multi-step inference planning computational substrate language
      model comparison

Coverage-gap note: The bridge between cognitive neuroscience and transformer MI is largely
  unmapped in published literature. Queries Q3 and Q4 specifically target bridge literature
  and are expected to return sparse results. Q1 and Q2 return the neuroscience-internal
  literature that could inform the bridge. Treat low result count on Q3/Q4 as a gap signal —
  the absence of bridge literature is itself a finding.
```

---

## GATE SUMMARY

```
GATE SUMMARY
============
Gate 1 — Completeness:

  Null-hypothesis angle present: PASS
    Angle 8 is explicitly framed as disconfirming; queries contain "failure cases,"
    "does not generalize," "limitations," "failure," "when fails," "negative results."
    The framing is explicit, not a confirmatory angle with hedging language.

  Adversarial angle present: PASS
    Angle 7 is labeled [ADVERSARIAL-FLAGGED] with the required dispatch note.
    Label and note both present.

  Cross-disciplinary angle present: PASS
    Angle 9 targets cognitive neuroscience / computational neuroscience. This tradition
    does NOT appear in the intake brief's candidate vocabulary traditions list (1–6).
    Confirmed distinct by tradition label check.

  Source-type coverage: PASS
    Domain: academic-heavy. Practitioner sources appear in Angles 1 (GitHub/TransformerLens),
    2 (Anthropic blog, LessWrong), 3 (Neuronpedia, GitHub), 4 (LessWrong/Alignment Forum),
    5 (GitHub notebooks), 6 (Nanda blog), 7 (LessWrong/workshop proceedings), 8 (GitHub
    issues). Academic-heavy domain: practitioner sources are optional-but-present. PASS.

  Vocabulary-tradition map populated: PASS
    Coverage map has 6 distinct tradition names from intake brief + cross-disciplinary +
    adversarial + null-hypothesis sub-traditions. All traditions have distinct labels.

Gate 1 Overall: PASS

---

Gate 2 — Distinctness:

  Boolean-connective test results:
    A1 vs A2: Distinctive terms — A1: "attention heads circuits QK OV"; A2: "activation
      patching causal tracing." Different literature (Elhage circuits thread vs. Meng causal
      tracing). OR retrieval would not produce the same documents. PASS.

    A1 vs A3: A1: circuits/attention; A3: sparse autoencoders/dictionary learning. Different
      methodology, different vocabulary. PASS.

    A2 vs A4: A2: causal tracing for computation; A4: faithfulness of CoT outputs. Partial
      vocabulary overlap possible ("causal" appears in both) but the research question is
      distinct — A2 asks WHERE computation happens; A4 asks WHETHER the CoT text reflects
      that computation. PASS.

    A3 vs A5: A3: SAE features; A5: probing / linear representations. Different methodology
      (SAE unsupervised decomposition vs. supervised linear probing). PASS.

    A5 vs A1: Closest non-adversarial pair. Both study transformer internals during CoT.
      A5: probing/geometry (supervised, correlation-grounded). A1: circuits/attention
      (causal, ablation-grounded). Different epistemological commitments and different paper
      populations. OR retrieval would overlap partially but not substantially. PASS with note.

    A6 vs A1: Second-closest pair. A6: ICL mechanisms (induction heads, task vectors,
      retrieval heads). A1: CoT-specific circuits. Both involve attention head analysis.
      IMPORTANT: A6 is about whether the existing ICL mechanism literature transfers to CoT;
      A1 is about discovering what CoT-specific circuits exist. Different research question
      and different primary literature. PASS — but human reviewer should check if execution
      returns substantially overlapping paper sets.

    A7 (adversarial) vs all: By structural design, A7 uses vocabulary explicitly excluded
      from A1–A6. PASS.

    A8 (null-hypothesis) vs A4: A4 asks what MI reveals about CoT faithfulness (positive
      framing). A8 asks what evidence shows MI methodology itself fails to explain CoT
      (methodological self-critique). Different question direction, different vocabulary
      cluster ("replication failure," "does not generalize," "confounds"). PASS.

    A9 (cross-disciplinary) vs all: Cognitive neuroscience vocabulary does not overlap
      with any confirmatory angle tradition. PASS.

  Vocabulary-tradition distinctness: All 9 angles have distinct tradition labels. PASS.

Gate 2 Overall: PASS
  Note: A1/A6 flagged as closest pair. If execution returns substantially overlapping
  paper sets: consider human judgment on scope split (A1 = CoT-native circuit discovery;
  A6 = ICL mechanism transfer to CoT) or merger with explicit facet distinction.
  Not a mandatory merge — flagged for human review.

---

Gate 3 — Launchability:

  All 9 angles contain at least one concrete, runnable query string. PASS.
  No query string contains "TBD," "[fill in]," or equivalent placeholder. PASS.
  All angles name specific source platforms (arXiv cs.LG/cs.CL, GitHub, PubMed,
  LessWrong/Alignment Forum, Anthropic blog, Neuronpedia). PASS.

Gate 3 Overall: PASS

---

Gate 4 — Scoring prohibition:

  Type allocations used structural criteria only: vocabulary-tradition coverage, required-type
  fulfillment (null-hypothesis, adversarial, cross-disciplinary), source-type balance.
  No angle was ranked, filtered, or ordered by "most promising" or "most relevant."
  No "strongest angle" or "most useful" language appears in any angle record.

Gate 4 Overall: PASS

---

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. A1/A6 pair: closest pairwise vocabulary overlap (both involve attention head analysis).
     Human reviewer should check after execution whether paper sets substantially overlap.
     If yes: scope-split recommended (A1 = CoT-native circuits; A6 = ICL mechanism transfer).

  2. VOCABULARY SELF-REPORT FLAG: All 6 intake traditions were enumerated by LLM only.
     No survey-paper probe ran (Source B unavailable). Missing traditions may exist in the
     MI+CoT literature that LLM enumeration did not surface. This is a structural constraint
     of the subagent deployment context, not a per-run failure. MODERATE severity per
     intake.md Step 5. A survey-paper probe pass is recommended before treating the angle
     list as covering all traditions.

  3. Angles 7, 8, and 9 are predicted to return sparse literature (gap character). Low
     result count is expected and should be treated as a gap signal, not a search failure.
     For Angle 8 (null-hypothesis): if fewer than 10 papers are found, apply the SMALL
     LITERATURE exception from angle-quality.md Gate 2 and flag for human judgment.

  4. Angle 5 (probing): probing is contested within the MI community as a methodology.
     Some retrieved papers may need manual assessment of whether they meet the user's
     "mechanistic interpretability" scope criterion.
```

---

## ANGLE COUNT SUMMARY

| Angle | Title | Tradition | Type |
|-------|-------|-----------|------|
| 1 | Circuit-Level Analysis of Attention Heads During CoT | MI — circuits & attention analysis | Confirmatory |
| 2 | Causal Tracing and Activation Patching for CoT Computation | MI — causal mediation analysis | Confirmatory |
| 3 | Sparse Autoencoders and Dictionary Learning for CoT Representations | Sparse features / dictionary learning | Confirmatory |
| 4 | Mechanistic Analysis of CoT Faithfulness | CoT faithfulness evaluation | Confirmatory |
| 5 | Representation Engineering and Probing of CoT Intermediate States | Representation engineering / probing | Confirmatory |
| 6 | In-Context Learning Mechanisms as CoT Computational Substrate | In-context learning mechanisms | Confirmatory |
| 7 | [ADVERSARIAL-FLAGGED] CoT as Learned Text Pattern | Behavioral pattern learning / shortcut learning | Adversarial |
| 8 | Evidence That MI Does NOT Validly Explain CoT | MI methodology critique / replication limits | Null-hypothesis |
| 9 | Cognitive Neuroscience of Sequential Reasoning as Reference Frame | Cognitive neuroscience / computational neuroscience | Cross-disciplinary |

**Total angles: 9**  
**Distinct vocabulary traditions: 9**  
**Required types satisfied:** Confirmatory (6, ≥2 from different traditions) ✓ | Null-hypothesis (1, exactly 1) ✓ | Adversarial (1, FLAGGED) ✓ | Cross-disciplinary (1, outside intake brief) ✓
