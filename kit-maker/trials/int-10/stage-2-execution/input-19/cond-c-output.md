# Angle-Gen-Kit Output — Input 19, Condition C

**Topic:** Explainability of chain-of-thought reasoning — mechanistic interpretability approaches  
**Condition:** C (Source B unavailable — LLM-only vocabulary bootstrap)  
**Generated:** 2026-07-05

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: Mechanistic interpretability approaches to explaining how chain-of-thought
reasoning works (and fails) in large language models

Anchor vocabulary:
  - "chain-of-thought reasoning" — NLP / LLM evaluation tradition
  - "mechanistic interpretability" — AI interpretability / circuits tradition
  - "explainability" — XAI tradition (mentioned but immediately scoped out in favor of MI)

Candidate vocabulary traditions:
  1. MI circuits paradigm — circuits, superposition, induction heads, attention heads,
     residual stream, polysemanticity, monosemanticity, ACDC (automatic circuit
     discovery), IOI (indirect object identification), circuit analysis
  2. Causal intervention methods — activation patching, causal tracing, path patching,
     causal scrubbing, indirect effect, mediation analysis, counterfactual activation
  3. SAE / dictionary learning — sparse autoencoders (SAEs), dictionary learning,
     overcomplete features, feature decomposition, monosemanticity scaling,
     Bills et al. neurons-as-features
  4. Probing / representational analysis — linear probes, concept activation vectors,
     linear representation hypothesis, representational geometry, residual stream
     geometry, directional features
  5. CoT faithfulness / NLP evaluation — CoT faithfulness, unfaithful reasoning,
     post-hoc rationalization, reasoning trace fidelity, explanation faithfulness,
     Turpin et al., Lanham et al.
  6. Implicit / latent reasoning — latent chain-of-thought, thinking in activation
     space, implicit reasoning without explicit tokens, reasoning emergence

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot
  enumerate traditions it has not encountered. Vocabulary-discovery pass
  (pearl-growing from a known anchor paper) is recommended before accepting this
  angle list as covering all traditions.

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure; user asked for the space of
  mechanistic approaches, not a comparison between two approaches)

Scope markers:
  - Explicit focus: mechanistic interpretability approaches only
  - Explicit exclusion: "other perspectives" — this rules out attention-visualization-
    only approaches, LIME/SHAP, TCAV standalone, saliency maps, and post-hoc
    explanation methods that are not mechanistic

Known exclusions:
  - Feature attribution methods (LIME, SHAP, integrated gradients) as standalone
    explanations not connected to MI
  - Attention visualization as the primary method (unless analyzed via MI)
  - Concept-based explanations not grounded in mechanistic analysis

Domain maturity estimate: academic-heavy
  Basis: both anchor terms ("mechanistic interpretability," "chain-of-thought
  reasoning") are academic vocabulary; user framing is research-oriented (no
  mention of tools, deployment, or production systems); primary production is
  arXiv preprints and NeurIPS/ICML/ICLR proceedings

Survey paper status: NOT CHECKED — Source B unavailable
  Source B status: UNAVAILABLE — MODERATE (Source A + Source C produced 6 distinct
  vocabulary traditions; vocabulary-discovery confidence is MODERATE, not HIGH RISK;
  proceeding with VOCABULARY SELF-REPORT FLAG)
```

---

## VOCABULARY SELF-REPORT FLAG

All vocabulary traditions in this output were enumerated by LLM only. Source B (web search / survey-paper probe) was not available at execution time. The VOCABULARY SELF-REPORT FLAG applies to the entire angle list. External validation via survey-paper probe is recommended before treating this list as complete. Cross-disciplinary traditions most at risk of being missed: formal verification / program analysis applied to LLMs, cognitive neuroscience of reasoning, information-theoretic approaches to mechanistic explanation.

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: MI circuits paradigm
  Representative terms: circuits, ACDC, induction heads, attention head analysis,
    IOI, circuit discovery, polysemanticity
  Planned angle slot: Confirmatory A1
  Gap flag: No — planned

Tradition 2: Causal intervention methods
  Representative terms: activation patching, causal tracing, path patching,
    causal scrubbing, indirect effect, mediation analysis
  Planned angle slot: Confirmatory A2
  Gap flag: No — planned

Tradition 3: SAE / dictionary learning
  Representative terms: sparse autoencoders, SAE features, dictionary learning,
    overcomplete features, monosemanticity, Bills et al.
  Planned angle slot: Confirmatory A3
  Gap flag: No — planned

Tradition 4: Probing / representational analysis
  Representative terms: linear probes, linear representation hypothesis,
    representational geometry, concept activation vectors, residual stream geometry
  Planned angle slot: Confirmatory A4
  Gap flag: No — planned

Tradition 5: CoT faithfulness / NLP evaluation
  Representative terms: CoT faithfulness, unfaithful reasoning, post-hoc
    rationalization, reasoning trace fidelity, Turpin et al., Lanham et al.
  Planned angle slot: Confirmatory A5
  Gap flag: No — planned

Tradition 6: Implicit / latent reasoning
  Representative terms: latent chain-of-thought, reasoning in activation space,
    implicit reasoning, thinking without tokens, latent CoT
  Planned angle slot: Confirmatory A6
  Gap flag: No — planned

Traditions NOT yet represented in the planned confirmatory list:
  None — all 6 traditions from intake brief have at least one confirmatory slot.

Null-hypothesis slot:
  Target: disconfirming evidence for MI explanations of reasoning
  Framing: what evidence shows MI methods fail, produce spurious results, or do
    not generalize when applied to reasoning circuits
  Assigned: N1

Adversarial slot:
  Starting vocabulary: philosophy of science / epistemology of scientific explanation
  Excluding: MI circuits vocabulary, causal patching vocabulary, SAE vocabulary
  Basis: epistemological challenges to mechanistic explanation as a valid account
    of model reasoning are the adversarial framing least likely to be generated
    from within the MI tradition
  Assigned: D1 (ADVERSARIAL-FLAGGED)

Cross-disciplinary slot (required — targets a tradition NOT in the intake brief):
  Target tradition: program synthesis / formal verification
  Basis: this tradition frames reasoning as algorithm execution and has developed
    formal models of step-by-step computation that could ground MI accounts of CoT;
    it is NOT in the intake brief vocabulary and is structurally distinct from
    the MI / NLP traditions
  Assigned: C1
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — MI circuits paradigm): assigned
Slot A2 (Confirmatory — Causal intervention methods): assigned
Slot A3 (Confirmatory — SAE / dictionary learning): assigned
Slot A4 (Confirmatory — Probing / representational analysis): assigned
Slot A5 (Confirmatory — CoT faithfulness / NLP evaluation): assigned
Slot A6 (Confirmatory — Implicit / latent reasoning): assigned
Slot N1 (Null-hypothesis): assigned
  Framing: disconfirming search — evidence MI methods produce spurious or
  non-generalizing explanations of reasoning
Slot D1 (Adversarial — ADVERSARIAL-FLAGGED): assigned
  Starting vocabulary: philosophy of science / epistemology
  NOT FROM: MI circuits, causal intervention, SAE, probing, CoT faithfulness,
  implicit reasoning
Slot C1 (Cross-disciplinary — program synthesis / formal verification): assigned
  NOT IN intake brief traditions
```

Total: 9 angles (6 confirmatory + 1 null-hypothesis + 1 adversarial + 1 cross-disciplinary)

---

## FULL ANGLE LIST

---

### ANGLE 1: Circuit Discovery for Chain-of-Thought Reasoning Steps
```
Vocabulary tradition: MI circuits paradigm
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Which circuits are identified as implementing reasoning steps;
  methods used (ACDC, path patching, manual ablation); scope conditions (what model
  families, what task types); whether circuits identified for one reasoning task
  generalize to others; circuit fragility findings

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub (Anthropic interpretability repos, ACDC
  implementation repos — filter ≥50 stars + substantive README per platform-calibration.md)

Queries:
  Q1: "chain-of-thought" "mechanistic interpretability" circuits reasoning
      transformer 2023 2024 2025
  Q2: "circuit discovery" "chain-of-thought" OR "multi-step reasoning" language model
      interpretability
  Q3: "ACDC" OR "automatic circuit discovery" reasoning "large language model"
      arXiv cs.LG

Coverage-gap note: This angle focuses on formal circuit-discovery methodology.
  It will likely miss informal mechanistic analyses (e.g., attention head case
  studies) that do not use ACDC-style formal circuit extraction. Those are better
  captured in A2 and A4.
```

---

### ANGLE 2: Causal Intervention Analysis of Reasoning Computation
```
Vocabulary tradition: Causal intervention methods (causal ML)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Activation patching results on CoT reasoning tasks; which
  components carry reasoning-relevant information; causal tracing findings for
  step-by-step computation; indirect effect measurements; comparison between
  patching at different layers/positions during reasoning

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub (causal tracing / ROME / activation patching
  implementations; Neel Nanda's TransformerLens toolkit — filter per
  platform-calibration.md quality criteria)

Queries:
  Q1: "activation patching" "chain-of-thought" OR "multi-step reasoning" language
      model causal
  Q2: "causal tracing" "step-by-step" OR reasoning transformer mechanistic
      interpretability
  Q3: "path patching" OR "causal scrubbing" reasoning chain language model
      interpretability arXiv

Coverage-gap note: Causal intervention papers sometimes report only successful
  localizations; failures to localize are less frequently reported. The null-
  hypothesis angle (N1) targets this underreported side.
```

---

### ANGLE 3: Sparse Autoencoder Decomposition of Reasoning Activations
```
Vocabulary tradition: SAE / dictionary learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Which SAE features activate during chain-of-thought generation;
  whether reasoning-specific features are identifiable and interpretable; SAE
  feature geometry during multi-step reasoning; scaling results for feature
  monosemanticity on reasoning tasks; SAE applied to thinking-model activations

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub (EleutherAI SAE implementations, Anthropic
  SAE releases, dictionary_learning repos — filter per platform-calibration.md)

Queries:
  Q1: "sparse autoencoder" "chain-of-thought" OR reasoning language model features
      interpretability 2024 2025
  Q2: "dictionary learning" reasoning circuits transformer mechanistic
      interpretability features
  Q3: "SAE" "mechanistic interpretability" reasoning "language model" features
      monosemanticity arXiv cs.LG

Coverage-gap note: SAE work on reasoning is a fast-moving area (post-2023);
  the date filter is load-bearing here. Query without a date filter will return
  older dictionary-learning papers that predate the SAE-for-MI application.
  SPECIFICITY GATE NOTE: Q3 uses specific acronym "SAE" — avoid over-expansion.
```

---

### ANGLE 4: Representational Geometry of Reasoning States
```
Vocabulary tradition: Probing / representational analysis (linear representation
  hypothesis tradition)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Linear probe performance on intermediate reasoning states;
  whether reasoning steps are linearly represented in the residual stream;
  geometry of reasoning-relevant subspaces; evidence for or against the linear
  representation hypothesis during CoT computation; directional features for
  logical relations

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub (probing toolkit implementations, residual
  stream analysis notebooks — filter per platform-calibration.md)

Queries:
  Q1: "probing" "chain-of-thought" OR reasoning representation "language model"
      linear mechanistic
  Q2: "linear representation" reasoning states transformer interpretability
      residual stream
  Q3: representational geometry "chain-of-thought" OR "step-by-step reasoning"
      "language model" embedding space

Coverage-gap note: Probing results are known to be ambiguous (probing detects
  information present, not information causally used). Papers distinguishing
  correlation-from-causation in probing may appear more in the causal intervention
  literature (A2) than here.
```

---

### ANGLE 5: Empirical Faithfulness of Chain-of-Thought Traces
```
Vocabulary tradition: CoT faithfulness / NLP evaluation tradition
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for measuring whether CoT tokens reflect actual internal
  computation; faithfulness metrics; conditions under which CoT is faithful vs.
  unfaithful; Turpin et al. and Lanham et al. findings; effect of biasing features
  on CoT fidelity; relationship between verbalized reasoning and activation patterns

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub (CoT faithfulness evaluation benchmarks,
  Turpin et al. replication code)

Queries:
  Q1: "chain-of-thought" faithfulness "language model" internal computation
      mechanistic 2023 2024 2025
  Q2: "unfaithful" "chain-of-thought" OR "post-hoc rationalization" reasoning
      language model empirical
  Q3: chain-of-thought faithful explanation fidelity "mechanistic interpretability"
      OR "probing" language model

Coverage-gap note: This angle specifically targets the faithfulness measurement
  literature — it overlaps thematically with N1 (null-hypothesis), but A5 asks
  "how do we measure faithfulness and what have we found?" while N1 asks "when
  do mechanistic methods themselves fail to detect faithfulness problems?" Queries
  are differentiated accordingly.
```

---

### ANGLE 6: Implicit and Latent Reasoning Mechanisms
```
Vocabulary tradition: Implicit / latent reasoning (MI subfield)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How models perform multi-step reasoning in activation space
  without explicit intermediate tokens; mechanistic analysis of "thinking" in
  early layers before token generation; implicit CoT phenomena; reasoning
  compression into single forward passes; activation-space reasoning traces in
  thinking models (e.g., Claude, o1-style architectures)

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub (TransformerLens analyses of thinking-model
  activations — filter per platform-calibration.md)

Queries:
  Q1: "latent" "chain-of-thought" OR "implicit reasoning" language model
      activation mechanistic interpretability
  Q2: "reasoning" activations transformer "without tokens" OR "internal reasoning"
      mechanistic language model
  Q3: implicit reasoning "large language model" "mechanistic" OR "residual stream"
      multi-step 2024 2025

Coverage-gap note: This angle is speculative for pre-2024 literature — the
  "thinking model" framing is post-2024. Earlier work on this topic uses terms
  like "implicit reasoning" or "reasoning in embedding space." Both phrasings
  needed to cover the full temporal range.
```

---

### ANGLE 7: Failure Cases and Null Results for MI Methods on Reasoning
```
Vocabulary tradition: MI failure cases / disconfirming results (null variant of
  MI circuits tradition)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Cases where mechanistic interpretability methods failed to
  identify genuine reasoning mechanisms; circuits that do not generalize across
  model versions or task variants; spurious circuit attributions; cases where
  activation patching produces misleading results; non-replication of reported
  reasoning circuits; scope conditions under which MI methods break down

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub (issue threads on ACDC, TransformerLens
  repositories documenting failure cases — these failure modes are often reported
  in practitioner forums before academic papers)

Queries:
  Q1: "mechanistic interpretability" failure spurious reasoning circuit language
      model limitations negative
  Q2: "circuit" "chain-of-thought" OR reasoning non-generalizing OR brittle
      explanation language model
  Q3: faithfulness failure "mechanistic" explanation reasoning "language model"
      negative result OR does not generalize

Coverage-gap note: Null results are systematically underreported in this
  literature. This angle will likely find fewer papers than confirmatory angles —
  that scarcity is itself informative (it is a gap signal, not evidence of
  absence). GitHub issue threads may capture failure modes not yet in the
  academic literature.
```

---

### ANGLE 8: Epistemological Challenges to Mechanistic Explanation of Reasoning
```
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior
confirmatory results]

Vocabulary tradition: Philosophy of science / epistemology of scientific
  explanation — NOT from MI circuits, causal intervention, SAE, probing, CoT
  faithfulness, or implicit reasoning traditions
Angle type: Adversarial
Predicted research character: consensus (philosophical arguments + formal
  critiques; fewer empirical measurements)
What to extract: Arguments that mechanistic explanations of neural networks are
  fundamentally underdetermined; critiques of the adequacy of circuit-level
  explanation for high-level cognitive phenomena; whether causal intervention
  (activation patching) provides genuine causal explanation or sophisticated
  correlation; debates about what counts as a satisfying mechanistic explanation;
  challenges to the falsifiability of proposed MI methods

Source type (academic): arXiv cs.LG (interpretability critique papers); philosophy
  of mind / cognitive science journals (Mind & Language, Synthese) for foundational
  epistemology
Source type (practitioner): LessWrong / Alignment Forum posts critiquing MI
  methodology (this literature exists primarily in practitioner venues, not
  academic venues); EAI debate posts

Queries:
  Q1: mechanistic explanation neural network underdetermined falsifiability
      interpretability critique adequacy
  Q2: "causal" interpretability neural network explanation epistemology verification
      reliability sufficient condition
  Q3: "mechanistic interpretability" critique limitations "language model"
      explanation scientific adequacy OR reliability

Exclusions from generation context: circuits, superposition, sparse autoencoder,
  activation patching, causal tracing, induction heads, residual stream, CoT
  faithfulness, linear representation — these were excluded from the adversarial
  generation prompt to force vocabulary from outside the primary MI tradition.

Coverage-gap note: This angle targets a nascent sub-literature. The primary
  production is in philosophy of science venues and practitioner blogs, not arXiv.
  Academic results will be sparse; LessWrong/Alignment Forum is the primary
  practitioner source. A GAP research character is possible.
```

---

### ANGLE 9: Program Synthesis and Formal Verification Perspectives on CoT as Algorithm Execution
```
Vocabulary tradition: Program synthesis / formal verification — NOT in the
  intake brief; cross-disciplinary from computer science formal methods
Angle type: Cross-disciplinary
Predicted research character: empirical / consensus (mixed)
What to extract: Formal models of chain-of-thought as program execution;
  correspondence between reasoning steps and symbolic algorithm steps; formal
  verification approaches applied to reasoning traces; neural-symbolic
  correspondence for multi-step computation; work framing CoT as a program that
  can be verified for correctness; mechanistic connections between LLM computation
  and formal computational models

Source type (academic): arXiv cs.PL + cs.LG (program languages + machine learning);
  also formal verification / NeurIPS proceedings with symbolic-neural work
Source type (practitioner): GitHub (neuro-symbolic hybrid implementations,
  formal reasoning verification tools — filter per platform-calibration.md)

Queries:
  Q1: "chain-of-thought" "program execution" OR "algorithm" formal verification
      language model mechanistic
  Q2: "symbolic reasoning" "language model" formal verification "step-by-step"
      mechanistic correspondence
  Q3: "chain-of-thought" program synthesis "neural" mechanistic computational
      model formal 2023 2024 2025

Coverage-gap note: The formal verification literature uses different vocabulary
  than MI (e.g., "specification," "correctness," "trace equivalence"). Papers
  bridging these traditions explicitly are likely sparse — this angle may have
  GAP character. Its value is identifying whether a bridge literature exists.
```

---

## GATE SUMMARY

```
GATE SUMMARY
============
Gate 1 — Completeness:
  Null-hypothesis angle present: PASS — Angle 7 (N1) is explicitly framed as
    disconfirming; queries contain "failure," "negative," "does not generalize,"
    "spurious," "non-generalizing." Framing is not a confirmatory angle with a
    caveat — it is constructed as a disconfirming search.
  Adversarial angle present: PASS — Angle 8 (D1) is labeled
    [ADVERSARIAL-FLAGGED] with dispatch note. Present.
  Cross-disciplinary angle present: PASS — Angle 9 (C1) targets program
    synthesis / formal verification — confirmed NOT in the intake brief's
    candidate vocabulary traditions list.
  Source-type coverage: PASS — Domain is academic-heavy; practitioner sources
    (GitHub, LessWrong/Alignment Forum) are present in multiple angles. Not
    required by domain maturity assessment but included. No FAIL condition.
  Vocabulary-tradition map populated: PASS — Coverage map has 6 distinct
    tradition names plus adversarial and cross-disciplinary traditions = 8 total.

Gate 2 — Distinctness:
  Boolean-connective test — angle pairs checked:
    A1 (circuits) vs A2 (causal intervention): PASS — A1 queries use "ACDC,"
      "circuit discovery," "IOI"; A2 queries use "activation patching,"
      "causal tracing," "path patching." OR combination would retrieve overlapping
      papers but each angle has queries that would NOT appear in the other's
      primary results. Distinct.
    A1 (circuits) vs A3 (SAE): PASS — A1 is about circuit structure; A3 is about
      feature decomposition via SAE. Different vocabulary, different primary
      papers (Conmy et al. vs Cunningham et al. / Anthropic monosemanticity).
    A2 (causal) vs A4 (probing): PASS — A2 uses intervention vocabulary; A4 uses
      representational geometry vocabulary. Different methods.
    A3 (SAE) vs A4 (probing): PASS — SAE and linear probing are distinct methods
      with different literatures. A3 focuses on overcomplete feature dictionaries;
      A4 focuses on linear classifiers for concept detection.
    A5 (faithfulness) vs N1 (null-hypothesis): PASS — A5 asks "how is faithfulness
      measured and what have we found?" N1 asks "when do MI methods fail to detect
      faithfulness problems?" A5 queries contain "faithfulness" + "mechanistic";
      N1 queries contain "failure," "spurious," "non-generalizing." Boolean OR
      would retrieve overlapping papers but queries are differentiated enough to
      retrieve distinct subsets. Edge case — monitor for overlap during execution.
    All other pairs: PASS on quick-check (no shared distinctive query terms).
  Vocabulary-tradition distinctness: PASS — each angle has a different tradition
    label. No two non-null, non-adversarial angles share a tradition label.

Gate 3 — Launchability:
  All 9 angles: PASS — Each has at minimum 3 concrete query strings that are
    pastable into a search box. No TBD placeholders. No vague descriptions
    substituting for queries.
  Source types: All angles name specific platforms (arXiv with category, GitHub,
    LessWrong/Alignment Forum). No vague language. PASS.

Gate 4 — Scoring prohibition:
  PASS — No angle record contains "most useful," "strongest," "most promising,"
    or equivalent LLM self-evaluation language. No ranking or filtering was
    performed on subjective grounds. PASS.

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all 8 vocabulary traditions were enumerated
     by LLM only; no survey paper probe was run. A tradition may be missing.
     Most likely missing: information-theoretic approaches to mechanistic
     explanation (MDL, compression-based interpretability), cognitive neuroscience
     of human multi-step reasoning (analogy literature), and any post-August-2025
     vocabulary that postdates LLM training. Recommend one survey-paper probe
     before treating this list as complete.
  2. A5 (CoT faithfulness) vs N1 (null-hypothesis) — edge-case overlap noted.
     Boolean-connective test passes because queries are differentiated, but during
     execution these angles may retrieve overlapping papers. Flag for human
     consolidation decision if overlap exceeds 40% of retrieved papers.
  3. Angle 8 (ADVERSARIAL-FLAGGED) — dispatch in a separate research context
     with NO access to the results from Angles 1–7. The label records the
     requirement; downstream execution must honor it. See weakness_register.md
     Weakness 6 — kit cannot enforce execution-time context separation.
  4. Angle 9 (cross-disciplinary — program synthesis) — predicted GAP character.
     If the cross-disciplinary bridge literature does not exist in quantity, the
     query results will be sparse. That absence is itself a finding worth
     reporting.
```

---

## SELF-CHECK (per CLAUDE.md after-every-task rule)

What is missing, incomplete, or questionable in this output:

1. **Missing tradition — information-theoretic interpretability:** MDL-based interpretability (minimum description length as a criterion for good mechanistic explanation), Kolmogorov complexity framing of explanation quality. This tradition exists and is relevant but was not enumerated in the intake brief. No angle covers it. Scope acceptance statement: "Scope accepted — information-theoretic interpretability tradition not covered; identified at self-check; recommend adding one angle in a follow-up pass with Source B available."

2. **Missing tradition — cognitive neuroscience of reasoning:** Human neural circuit correlates of multi-step reasoning (fMRI, EEG literature on reasoning). This was explicitly not part of the user's scope ("mechanistic interpretability" is ML-specific), so omission is justified. Scope acceptance: "Scope accepted — cognitive neuroscience of human reasoning not covered; user's scope is explicitly ML mechanistic interpretability."

3. **A5 / N1 boundary risk flagged:** Not resolved here — flagged for human judgment in Gate Summary. Next action if this is a blocker: split A5 into two angles — one for faithfulness-measurement methods and one for faithfulness findings — and narrow N1 to specifically target MI-method failures rather than CoT faithfulness failures.

4. **Post-training-cutoff coverage:** The user's topic is fast-moving (2024–2025 SAE work, thinking models). Queries include date filters where needed, but vocabulary for architectures released after August 2025 is not available to the LLM. This is a structural limit per weakness_register.md Weakness 1.
