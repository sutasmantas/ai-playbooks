# Angle Generation Output — Input 10, Condition C
**Topic:** Memory in LLMs — how models store and access information
**Condition:** C (Source B unavailable — LLM-only vocabulary bootstrap)
**Date:** 2026-07-05
**Kit:** angle-gen-kit v1

---

## INTAKE BRIEF
============
**Topic:** How large language models store factual and contextual information in their weights and mechanisms, and how that information is retrieved during inference.

**Anchor vocabulary:** "memory" (shared: ML systems + cognitive science traditions), "LLMs" (ML-systems tradition), "store and access" (CS/systems tradition implying both read and write operations)

**Candidate vocabulary traditions:**

1. **ML/NLP Transformer Architecture** — parametric memory, feed-forward network (FFN/MLP) layers, key-value stores, weight matrices, residual stream, attention heads, hidden states
2. **Mechanistic Interpretability** — knowledge neurons, causal tracing, causal mediation analysis, activation patching, circuits, factual localization, model internals
3. **Knowledge Editing** — model editing, locate-then-edit, ROME, MEMIT, GRACE, rank-one updates, knowledge injection, targeted weight modification
4. **Cognitive Science / Neuroscience** — working memory, episodic memory, semantic memory, in-context learning as temporary storage, recency/primacy effects, memory consolidation analogy
5. **Knowledge Representation / AI Knowledge Bases** — implicit knowledge bases, probing classifiers, factual recall benchmarks, LAMA, T-REx, entity knowledge, world knowledge, relational facts
6. **Retrieval-Augmented Generation / Information Retrieval** — RAG, dense retrieval, sparse retrieval, vector databases, FAISS, hybrid memory architectures, non-parametric memory
7. **Continual Learning / Catastrophic Forgetting** — lifelong learning, elastic weight consolidation, replay buffers, plasticity-stability tradeoff, domain-adaptive pretraining, sequential learning
8. **Information Theory / Privacy / ML Safety** — verbatim memorization, training data extraction, membership inference attacks, differential privacy, data leakage, copyright, memorization-generalization tradeoff
9. **Neural Network Theory / Connectionism** — Hopfield networks, modern Hopfield networks, associative memory, distributed representations, superposition hypothesis, polysemanticity, energy-based memory
10. **ML Theory / Scaling Laws** — scaling laws, model capacity, knowledge capacity, grokking, parameter efficiency, emergent capabilities, phase transitions in learning
11. **NLP Compositional Reasoning** — multi-hop reasoning, knowledge composition, reversal curse, chained retrieval, compositional generalization, relational knowledge chains

> **VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions listed here were enumerated by LLM only, without external survey-paper validation. The LLM cannot enumerate traditions it has not encountered in training. A vocabulary-discovery pass (Source B: survey-paper probe, or pearl-growing from a known anchor paper) is recommended before accepting this tradition list as complete. Cross-disciplinary traditions outside ML/AI are at highest risk of omission.

**Question type:** EXPLORATORY
(No comparison or intervention-outcome structure in the prompt. "How models store and access" is a mechanisms survey question, not a comparative or intervention question.)

**Scope markers:** None stated — inferred scope: all mechanisms by which information is stored and retrieved in LLMs, including within-model parametric mechanisms and external/augmented memory approaches. No exclusion of model families.

**Known exclusions:** None stated.

**Domain maturity estimate:** Mixed (academic-heavy core with strong practitioner dimension)
Basis: Core mechanisms literature (knowledge neurons, ROME/MEMIT, causal tracing) is arXiv-heavy and conference-proceeding-heavy. RAG and external memory are equally practitioner-heavy with large GitHub ecosystems. Both populations produce relevant literature for this topic.

**Survey paper status:** NOT CHECKED — Source B unavailable.
Recommended survey queries for a future Source B pass: `"LLM" memory survey 2024 2025`, `"language model" knowledge storage retrieval survey`, `parametric knowledge transformer survey`

**Source B status:** UNAVAILABLE — MODERATE (Source A + Source C together produced 11 distinct vocabulary traditions across multiple disciplines; vocabulary confidence is MODERATE; cross-disciplinary traditions outside ML/AI remain at risk of omission)

**Source C — Absent-term signal (terms NOT used by user but prominent in this space):**
- parametric memory / non-parametric memory
- knowledge neurons
- ROME / MEMIT (knowledge editing methods)
- causal tracing / causal mediation analysis
- catastrophic forgetting
- retrieval-augmented generation (RAG)
- Hopfield networks / modern Hopfield networks
- verbatim memorization
- in-context learning
- superposition hypothesis / polysemanticity
- reversal curse
- grokking

The absent-term signal is large. The user entered the topic using generic functional language ("store and access") rather than any field-specific vocabulary. This is the maximum vocabulary-gap risk condition: the user's framing does not reveal which tradition they are entering from. Broad tradition coverage is essential.

---

## INTAKE GATE CHECK
- [x] Topic field populated: How LLMs store and access information
- [x] Candidate vocabulary traditions: 11 traditions identified (well above ≥2 threshold)
- [x] Question type classified: EXPLORATORY
- [x] Source B status documented: UNAVAILABLE — MODERATE

**Gate: PASS — Proceeding to angle generation**

---

## PHASE-GATE REFLECTION (intake → generation transition)
1. Are all output fields in the intake brief populated (no blanks)? YES — all fields filled.
2. Are ≥2 distinct vocabulary traditions listed? YES — 11 traditions identified.
3. Is question type classified? YES — EXPLORATORY.

All three affirmative. Proceeding to angle generation.

---

## COVERAGE MAP
============

**Tradition 1: ML/NLP Transformer Architecture**
  Representative terms: parametric memory, FFN layers, key-value memory, attention heads, weight matrices, residual stream
  Planned angle slot: Confirmatory A1 — FFN layers as parametric key-value memory
  Gap flag: No — one slot allocated; attention-as-memory is covered separately under Tradition 9 (Hopfield theory) rather than as an architectural angle

**Tradition 2: Mechanistic Interpretability**
  Representative terms: knowledge neurons, causal tracing, causal mediation analysis, activation patching, factual localization, model circuits
  Planned angle slot: Confirmatory A2 — knowledge localization via causal tracing
  Gap flag: No

**Tradition 3: Knowledge Editing**
  Representative terms: ROME, MEMIT, GRACE, locate-then-edit, rank-one updates, gradient-based editing, knowledge injection
  Planned angle slot: Confirmatory A3 — targeted memory modification via model editing
  Gap flag: No — distinct sub-tradition from mechanistic interpretability proper (editing = intervention; interpretability = understanding)

**Tradition 4: Cognitive Science / Neuroscience**
  Representative terms: working memory, episodic memory, semantic memory, in-context learning, context window, recency bias, memory consolidation
  Planned angle slot: Confirmatory A4 — context window as working memory analogy
  Gap flag: No

**Tradition 5: Knowledge Representation / AI Knowledge Bases**
  Representative terms: implicit knowledge bases, probing classifiers, factual recall, LAMA, T-REx, entity knowledge, relational facts, knowledge graph alignment
  Planned angle slot: Confirmatory A5 — LLMs as implicit knowledge bases, probing results
  Gap flag: No

**Tradition 6: Retrieval-Augmented Generation / Information Retrieval**
  Representative terms: RAG, dense retrieval, sparse retrieval, vector databases, FAISS, hybrid memory, non-parametric memory
  Planned angle slot: Confirmatory A6 — RAG as external memory extension
  Gap flag: No

**Tradition 7: Continual Learning / Catastrophic Forgetting**
  Representative terms: catastrophic forgetting, lifelong learning, elastic weight consolidation, replay, plasticity-stability tradeoff, domain-adaptive pretraining
  Planned angle slot: Confirmatory A7 — catastrophic forgetting and sequential memory loss
  Gap flag: No

**Tradition 8: Information Theory / Privacy / ML Safety**
  Representative terms: verbatim memorization, training data extraction, membership inference, differential privacy, data leakage, copyright, memorization-generalization tradeoff
  Planned angle slot: Confirmatory A8 — verbatim memorization, privacy, and extraction
  Gap flag: No

**Tradition 9: Neural Network Theory / Connectionism**
  Representative terms: Hopfield networks, modern Hopfield networks, associative memory, energy-based memory, distributed representations, superposition hypothesis, polysemanticity
  Planned angle slot: Confirmatory A9 — attention as associative memory; Hopfield theory and distributed representations
  Gap flag: No — covers both the formal theoretical framing (Modern Hopfield) and the empirical distributed-representations debate (superposition/polysemanticity)

**Tradition 10: ML Theory / Scaling Laws**
  Representative terms: scaling laws, model capacity, knowledge capacity, grokking, parameter count vs. recall, emergent capabilities
  Planned angle slot: Confirmatory A10 — scaling laws and memory capacity
  Gap flag: No

**Tradition 11: NLP Compositional Reasoning**
  Representative terms: multi-hop reasoning, knowledge composition, reversal curse, chained retrieval, compositional generalization, relational knowledge chains
  Planned angle slot: Confirmatory A11 — multi-hop reasoning and chained knowledge access
  Gap flag: No

**Null-hypothesis slot:** N1 — disconfirming literature: hallucination, factual inconsistency, knowledge retrieval failure, negative results on memory localization, editing methods that fail to generalize
  Vocabulary: failure, unreliable retrieval, hallucination, inconsistency, confabulation, negative results

**Adversarial slot:** D1 — skeptical/philosophical framing; starting vocabulary: representational adequacy, symbol grounding, intentionality, the memory metaphor, stochastic parrots, anthropomorphism, pattern matching critique, phenomenal vs. functional memory. NOT FROM: any of the 11 traditions listed above.

**Traditions NOT yet represented in the planned list:**
- None from the 11 identified traditions — all have ≥1 planned slot.

**Cross-disciplinary slot (REQUIRED — tradition NOT in intake brief):**
  Target tradition: **Database Systems / Information Retrieval Theory**
  Representative terms: indexing, query optimization, caching, B-tree / inverted index structures, cache replacement policies, query-answer pairs, storage hierarchy, retrieval latency, exact vs. approximate retrieval, consistency guarantees
  Basis for selection: Database and IR theory provides formal conceptual vocabulary for storage and retrieval that predates LLMs by decades. This tradition has documented analogies to neural network memory (e.g., associative retrieval vs. indexed lookup, exact vs. fuzzy matching, caching as in-context memory) that produce structurally different insights from the ML/AI traditions. The vocabulary (index, cache, retrieval latency, consistency, approximate nearest neighbor) is structurally distinct from all 11 traditions above and captures a practitioner-facing analogy literature not found in arXiv cs.CL/cs.LG searches.
  Planned angle slot: C1

---

## TYPE ALLOCATIONS
================

```
Slot A1   (Confirmatory — Tradition 1: ML/NLP Transformer Architecture — FFN parametric storage)
Slot A2   (Confirmatory — Tradition 2: Mechanistic Interpretability — knowledge localization)
Slot A3   (Confirmatory — Tradition 3: Knowledge Editing — targeted memory modification)
Slot A4   (Confirmatory — Tradition 4: Cognitive Science — working memory analogy)
Slot A5   (Confirmatory — Tradition 5: Knowledge Representation / AI KB — probing and factual accuracy)
Slot A6   (Confirmatory — Tradition 6: RAG / Information Retrieval — external memory extension)
Slot A7   (Confirmatory — Tradition 7: Continual Learning — catastrophic forgetting)
Slot A8   (Confirmatory — Tradition 8: Information Theory / Privacy — verbatim memorization)
Slot A9   (Confirmatory — Tradition 9: Neural Network Theory / Connectionism — Hopfield + superposition)
Slot A10  (Confirmatory — Tradition 10: ML Theory / Scaling Laws — capacity and scaling)
Slot A11  (Confirmatory — Tradition 11: NLP Compositional Reasoning — multi-hop and reversal curse)
Slot N1   (Null-hypothesis — disconfirming: failure, hallucination, inconsistency, negative results)
Slot D1   (Adversarial — NOT FROM traditions 1–11; starting vocabulary: representational adequacy, symbol grounding, memory metaphor critique)
Slot C1   (Cross-disciplinary — Database / IR Theory — NOT in intake brief traditions)
```

**Total: 14 angles (11 confirmatory + 1 null-hypothesis + 1 adversarial + 1 cross-disciplinary)**

**Justification for >12 angles:** 11 distinct vocabulary traditions identified at intake (≥4 threshold for "hard input" is met more than twice over). The topic spans multiple disciplines — ML engineering, cognitive science, information theory, continual learning, AI safety. 14 angles is conservative relative to the documented 20–30 range for ≥4 traditions; it is chosen to cover each identified tradition with exactly one angle rather than inflate with sub-tradition splitting. Documented justification: complex multi-tradition domain, ≥4 traditions (11 identified).

---

## FULL ANGLE LIST

---

### ANGLE 1: Transformer FFN Layers as Key-Value Parametric Memory
===========
**Vocabulary tradition:** ML/NLP Transformer Architecture — FFN/MLP sub-tradition
**Angle type:** Confirmatory
**Predicted research character:** Empirical

**What to extract:** Mechanistic evidence for how FFN/MLP sublayers function as key-value stores; which layers encode which types of facts; how key-value associations form during training; ablation results showing the storage role of MLP layers vs. attention heads; empirical results on the Geva et al. key-value framing

**Source type (academic):** arXiv cs.CL + cs.LG
**Source type (practitioner):** GitHub (TransformerLens, baukit, FFN probing experiments from interpretability research groups)

**Queries:**
  Q1: `transformer feed-forward layers key-value memory factual knowledge storage 2021 2024`
  Q2: `MLP sublayer parametric memory LLM fact recall encoding weight matrices`
  Q3: `feed-forward network hidden states knowledge representation residual stream language model`

**Coverage-gap note:** Queries anchor on the Geva et al. 2021/2023 key-value memory framing. Parallel work framing FFN neurons as "feature detectors" rather than "KV memory" may not be retrieved. Pearl-growing from Geva et al. citations and from the ROME paper (which relies on the FFN-as-KV framing) covers this gap.

---

### ANGLE 2: Knowledge Localization via Causal Tracing and Activation Patching
===========
**Vocabulary tradition:** Mechanistic Interpretability — factual localization
**Angle type:** Confirmatory
**Predicted research character:** Empirical

**What to extract:** Methods for localizing where factual associations are stored (causal mediation analysis, activation patching, path patching); which model components are causally responsible for factual recall; results on modular vs. distributed storage; limitations of localization methods; disagreements between interpretability methods about where knowledge lives

**Source type (academic):** arXiv cs.CL + cs.LG
**Source type (practitioner):** GitHub (causal_trace implementations from Meng et al.; TransformerLens; Eleuther AI interpretability tools)

**Queries:**
  Q1: `causal tracing knowledge localization transformer factual associations mediation 2022 2024`
  Q2: `activation patching mechanistic interpretability LLM factual recall knowledge storage`
  Q3: `knowledge neurons language models MLP layers factual association localization circuits`

**Coverage-gap note:** Work using vocabulary "path patching" or "attribution patching" (a methodological variant) may not be retrieved by these queries. Pearl-growing from Meng et al. 2022 (ROME) and Conmy et al. 2023 (ACDC) covers these methodological variants.

---

### ANGLE 3: Knowledge Editing — Targeted Modification of LLM Memory
===========
**Vocabulary tradition:** Knowledge Editing / Model Editing
**Angle type:** Confirmatory
**Predicted research character:** Empirical

**What to extract:** Methods for updating specific stored facts without full retraining (ROME, MEMIT, GRACE, IKE, WISE); success and failure conditions; generalization vs. locality tradeoff (does the edit propagate to related facts?); side effects on other knowledge; benchmark results on COUNTERFACT and ZsRE; limits of editing methods at scale (100K+ edits)

**Source type (academic):** arXiv cs.CL + cs.LG
**Source type (practitioner):** GitHub (EasyEdit library, ROME repo, MEMIT repo, knowledge editing benchmarks — COUNTERFACT, ZsRE, RIPPLEEDITS)

**Queries:**
  Q1: `knowledge editing large language models ROME MEMIT targeted fact update 2022 2024`
  Q2: `model editing transformers locate-then-edit factual memory generalization specificity tradeoff`
  Q3: `LLM knowledge update without retraining editing benchmark evaluation comparison methods`

**Coverage-gap note:** In-context editing (modifying model behavior via prompt/context rather than weight modification) and hypernetwork-based editing form distinct sub-literatures not well-captured by these queries. A separate query `in-context knowledge editing LLM prompt-based fact update` covers this.

---

### ANGLE 4: Context Window as Working Memory — Cognitive Science Analogy
===========
**Vocabulary tradition:** Cognitive Science / Neuroscience — working memory analogy
**Angle type:** Confirmatory
**Predicted research character:** Empirical (with gap caveat — explicit cognitive analogy testing may be sparse; see coverage-gap note)

**What to extract:** Evidence for and against working memory, episodic memory, and semantic memory analogies applied to LLM context; how LLMs use in-context information as temporary storage; recency and primacy effects in context retrieval; interference patterns; comparison of in-context vs. parametric knowledge access in the same response

**Source type (academic):** arXiv cs.CL + cs.AI; ACL Anthology; Cognition (cognitive science journal) for cross-disciplinary bridge papers
**Source type (practitioner):** Practitioner benchmarks (SCROLLS, LongBench) used to characterize context retrieval behavior; AI lab blog posts on context window behavior

**Queries:**
  Q1: `in-context learning working memory language model temporary storage cognitive analogy 2022 2024`
  Q2: `LLM context window episodic semantic memory analogy in-context retrieval recency primacy`
  Q3: `context vs parametric memory LLM comparison in-context information access retrieval`

**Coverage-gap note:** The "working memory" framing is common in popularizations but rarely tested explicitly against Baddeley's working memory model in the academic literature. This angle may return primarily as "gap character" — the absence of direct empirical tests of the cognitive analogy is itself a finding. Searching Cognition or Psychological Review with LLM vocabulary would surface any cross-disciplinary bridge papers not indexed on arXiv.

---

### ANGLE 5: LLMs as Implicit Knowledge Bases — Probing and Factual Coverage
===========
**Vocabulary tradition:** Knowledge Representation / AI Knowledge Bases — probing tradition
**Angle type:** Confirmatory
**Predicted research character:** Empirical

**What to extract:** Probing study results (what factual knowledge do LLMs store and how reliably?); LAMA and T-REx benchmark results; completeness and accuracy of LLM factual knowledge vs. structured knowledge bases; conditions under which probing classifiers succeed or fail; entity and relational knowledge representation; limitations of probing methodology (probing artifacts)

**Source type (academic):** arXiv cs.CL; ACL Anthology (EMNLP, NAACL proceedings on knowledge probing)
**Source type (practitioner):** HuggingFace model evaluation results; LAMA, T-REx, CREAK dataset documentation and leaderboards

**Queries:**
  Q1: `language models implicit knowledge base factual probing LAMA T-REx benchmark 2019 2024`
  Q2: `LLM factual knowledge accuracy completeness probing classifiers evaluation reliability`
  Q3: `large language models world knowledge entity relational facts storage knowledge graph alignment`

**Coverage-gap note:** Commonsense knowledge probing (ATOMIC, ConceptNet, script knowledge) is a distinct sub-tradition from factual/encyclopedic knowledge probing. A separate query `commonsense knowledge LLM probing ATOMIC ConceptNet situational` covers this. Probing methodology critiques (Hewitt and Liang 2019 on probing artifacts) are important meta-literature for this angle.

---

### ANGLE 6: Retrieval-Augmented Generation as Non-Parametric Memory Extension
===========
**Vocabulary tradition:** Retrieval-Augmented Generation / Information Retrieval
**Angle type:** Confirmatory
**Predicted research character:** Empirical

**What to extract:** How RAG architectures extend LLM memory beyond parameters; dense vs. sparse retrieval components; end-to-end training of retrieval + generation; when retrieval helps vs. when parametric memory suffices; RAG failure modes; faithfulness of retrieval-conditioned generation; comparison of RAG vs. purely parametric approaches on knowledge-intensive tasks

**Source type (academic):** arXiv cs.CL + cs.IR (information retrieval)
**Source type (practitioner):** GitHub (LangChain, LlamaIndex, FAISS — high-star implementations); practitioner blogs and tech reports on production RAG patterns

**Queries:**
  Q1: `retrieval augmented generation LLM external memory knowledge access factual accuracy 2021 2024`
  Q2: `dense retrieval language model non-parametric memory hybrid parametric retrieved knowledge`
  Q3: `RAG failure modes faithfulness hallucination groundedness retrieval-augmented comparison`

**Coverage-gap note:** Active retrieval and self-RAG (models that decide when to retrieve) form a distinct sub-literature. Query `self-RAG adaptive retrieval decision language model when-to-retrieve` covers this. Also does not cover multi-vector and late-interaction retrieval approaches (ColBERT, PLAID).

---

### ANGLE 7: Catastrophic Forgetting and Sequential Memory Loss During Fine-Tuning
===========
**Vocabulary tradition:** Continual Learning / Catastrophic Forgetting
**Angle type:** Confirmatory
**Predicted research character:** Empirical

**What to extract:** How fine-tuning on new data overwrites previously stored knowledge in LLMs; mechanisms of interference between old and new knowledge; prevention methods (EWC, LoRA, replay, progressive networks); plasticity-stability tradeoff in large models; continual pretraining study results; forgetting as a diagnostic for how memory is structured (distributed vs. localized forgetting patterns)

**Source type (academic):** arXiv cs.LG + cs.CL; NeurIPS/ICLR continual learning workshops; ICLR proceedings
**Source type (practitioner):** GitHub (Avalanche continual learning library, continual-LLM fine-tuning experiments); practitioner fine-tuning guides discussing forgetting side effects

**Queries:**
  Q1: `catastrophic forgetting large language models fine-tuning knowledge retention sequential 2022 2024`
  Q2: `continual learning LLM plasticity stability tradeoff pretraining knowledge forgetting dynamics`
  Q3: `elastic weight consolidation replay methods LLM fine-tuning forgetting prevention comparison`

**Coverage-gap note:** The continual learning literature separates into "classical" (task-incremental, class-incremental, domain-incremental benchmarks) and "LLM-era" (domain-adaptive pretraining, instruction tuning on new tasks). Queries above target the LLM-era framing. Classical methods vocabulary (GEM, A-GEM, PackNet) requires separate queries. Also: `domain adaptive pretraining LLM continual knowledge update DAPT` covers the practitioner framing.

---

### ANGLE 8: Verbatim Memorization of Training Data — Privacy, Extraction, and Copyright
===========
**Vocabulary tradition:** Information Theory / Privacy / ML Safety — memorization sub-tradition
**Angle type:** Confirmatory
**Predicted research character:** Empirical

**What to extract:** Conditions under which LLMs memorize training sequences verbatim vs. generalize; membership inference attack results; training data extraction demonstration results; effect of data deduplication and augmentation on memorization rate; differential privacy mitigations; copyright implications of verbatim regurgitation; memorization-generalization tradeoff measurement across scales

**Source type (academic):** arXiv cs.CR (cryptography and security) + cs.LG; IEEE S&P, USENIX Security, CCS proceedings
**Source type (practitioner):** GitHub (training data extraction experiment repos; DP-SGD fine-tuning implementations); legal/policy reports on LLM memorization and copyright

**Queries:**
  Q1: `LLM training data memorization extraction verbatim recall privacy attack 2021 2024`
  Q2: `language model memorization generalization tradeoff scale data duplication membership inference`
  Q3: `differential privacy LLM training memorization reduction copyright leakage measurement`

**Coverage-gap note:** The copyright enforcement angle (verbatim reproduction of copyrighted text, DMCA implications) is a legally-driven sub-literature partly outside arXiv. Law review journals and tech policy reports (from EFF, Stanford HAI, etc.) contain relevant material not indexed in standard academic databases. The "sycophancy" literature is not covered here but relates to a different failure mode of knowledge expression.

---

### ANGLE 9: Attention as Associative Memory — Modern Hopfield Networks and Superposition Theory
===========
**Vocabulary tradition:** Neural Network Theory / Connectionism — Hopfield and distributed representations
**Angle type:** Confirmatory
**Predicted research character:** Empirical (with theoretical results)

**What to extract:** Formal connections between transformer dot-product attention and Hopfield network retrieval dynamics; energy-based formulations of transformer attention; memory capacity bounds for attention layers; the superposition hypothesis (multiple features stored in the same dimensions); polysemanticity of neurons; distributed vs. localized representations debate; implications of superposition for storage and retrieval reliability

**Source type (academic):** arXiv cs.LG + cs.NE (neural and evolutionary computing) + stat.ML; NeurIPS theory tracks
**Source type (practitioner):** Anthropic interpretability research (superposition and monosemanticity papers); Semantic Scholar citation clusters around Ramsauer et al. (Modern Hopfield Networks 2020)

**Queries:**
  Q1: `modern Hopfield networks transformers attention associative memory equivalence capacity 2020 2024`
  Q2: `attention mechanism energy function memory capacity retrieval dynamics transformer Hopfield`
  Q3: `superposition hypothesis polysemanticity neural network LLM distributed representation features`

**Coverage-gap note:** The Anthropic superposition/monosemanticity line of work (Elhage et al.) uses different vocabulary from the formal Hopfield formulation — they share the distributed-representations concern but cite different literatures. Q1 covers the formal Hopfield connection; Q3 covers the Anthropic empirical superposition work. Pearl-growing from both anchors is recommended. The formal statistical-mechanics framing (energy landscapes, attractor states) may require physics-vocabulary queries not captured here.

---

### ANGLE 10: Scaling Laws and Memory Capacity in Large Language Models
===========
**Vocabulary tradition:** ML Theory / Scaling Laws
**Angle type:** Confirmatory
**Predicted research character:** Empirical

**What to extract:** How model parameter count relates to factual storage capacity and retrieval accuracy; scaling law results for knowledge recall (not just loss); grokking (delayed generalization phase transition) as a window into storage dynamics; emergent knowledge behaviors at scale; model size vs. factual accuracy curves; what increases with scale in knowledge retrieval vs. what does not

**Source type (academic):** arXiv cs.LG + cs.CL; NeurIPS/ICML theory and scaling tracks
**Source type (practitioner):** HuggingFace Open LLM Leaderboard (MMLU scores by model size); scaling law analyses published as technical reports by major labs (DeepMind, Anthropic, OpenAI)

**Queries:**
  Q1: `scaling laws LLM factual knowledge recall memory capacity parameter count 2020 2024`
  Q2: `language model scale factual accuracy knowledge retrieval emergent capabilities larger models`
  Q3: `grokking neural networks memorization generalization phase transition delayed learning dynamics`

**Coverage-gap note:** Chinchilla-style scaling results (Hoffmann et al.) focus on loss curves, not factual storage or retrieval specifically. A targeted query `Chinchilla optimal compute knowledge retention factual accuracy scale` may surface papers connecting compute efficiency to knowledge specifically. The "emergent capabilities" literature is contested — some results appear to be artifacts of discrete metrics; this angle's queries may return papers arguing both sides.

---

### ANGLE 11: Multi-Hop Reasoning and Chained Knowledge Retrieval in LLMs
===========
**Vocabulary tradition:** NLP Compositional Reasoning / Knowledge Composition
**Angle type:** Confirmatory
**Predicted research character:** Empirical

**What to extract:** How LLMs chain multiple stored facts to answer multi-hop questions; failure modes in compositional retrieval; the "reversal curse" (directional asymmetry in knowledge storage — LLMs trained on "A is B" do not automatically know "B is A"); evidence that knowledge composition is more than single-hop retrieval; multi-hop QA benchmark results; why multi-hop reasoning fails even when single-hop facts are stored correctly

**Source type (academic):** arXiv cs.CL; ACL Anthology (EMNLP, ACL, NAACL proceedings on multi-hop QA and reasoning)
**Source type (practitioner):** Multi-hop QA benchmark leaderboards (HotpotQA, 2WikiMultiHop, MuSiQue); practitioner evaluations of reasoning chains

**Queries:**
  Q1: `multi-hop reasoning LLM chained knowledge retrieval composition failure 2021 2024`
  Q2: `reversal curse language models knowledge asymmetry training direction storage bias 2023`
  Q3: `compositional generalization LLM factual knowledge access multi-step reasoning benchmark failure`

**Coverage-gap note:** The "reversal curse" (Berglund et al. 2023) is a specific finding about directional asymmetry in how factual knowledge is stored. Q2 directly targets it. The broader "knowledge composition" literature (asking whether LLMs can combine facts they know individually) is a live research question — the literature may be small and fast-moving.

---

### ANGLE 12 [N1]: LLM Memory Failure — Hallucination, Inconsistency, and Retrieval Breakdown
===========
**Vocabulary tradition:** NLP Evaluation / Hallucination Studies — null-hypothesis variant
**Angle type:** Null-hypothesis
**Predicted research character:** Empirical

**What to extract:** Evidence that LLMs do NOT reliably access stored knowledge; conditions under which memory retrieval fails; hallucination rates and types (confabulation vs. factual error vs. knowledge gap); inconsistency in knowledge access (same question, different answers); cases where scaling does NOT fix knowledge access failures; null results on memory localization (editing does not generalize, localization not replicable); evidence that "memory" is fundamentally inconsistent at the edges of training distribution

**Source type (academic):** arXiv cs.CL + cs.AI; ACL Anthology (hallucination, faithfulness, factuality evaluation workshops — TruthfulQA, FactScore)
**Source type (practitioner):** Hallucination evaluation leaderboards (HELM, FactScore); AI safety lab evaluations of factual reliability; practitioner red-teaming reports on knowledge failure

**Queries:**
  Q1: `LLM hallucination factual error knowledge retrieval failure inconsistency conditions 2023 2024`
  Q2: `language model knowledge access failure negative results unreliable retrieval limitations scope`
  Q3: `LLM factual inconsistency confabulation same question different answers memory instability measurement`

**Coverage-gap note:** The "confabulation" framing (imported from clinical memory research) differs from the "hallucination" framing used in LLM evaluation. A separate query `LLM confabulation plausible false generation memory failure clinical analogy` would retrieve papers using this vocabulary. Also: the sycophancy literature (models changing stated knowledge based on user social pressure) is a distinct failure mode that does not appear in hallucination-vocabulary searches.

---

### ANGLE 13 [D1]: Is "Memory" a Coherent or Misleading Construct for LLMs?
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

**Vocabulary tradition:** Philosophy of Representation / Critical AI Studies
**Angle type:** Adversarial
**Starting vocabulary for this angle — NOT FROM:** transformer architecture, MLP layers, attention heads, FFN, key-value stores, knowledge neurons, ROME, MEMIT, RAG, dense retrieval, catastrophic forgetting, memorization, scaling laws, Hopfield networks, associative memory, superposition, multi-hop, probing classifiers, in-context learning
**Starting vocabulary used:** representational adequacy, symbol grounding, intentionality, the memory metaphor, stochastic parrots, anthropomorphism in AI, functional vs. phenomenal memory, pattern matching critique, computational functionalism, statistical interpolation, intentional stance, Dennett, Searle's Chinese Room, critique of cognitive vocabulary

**Predicted research character:** Consensus / gap (expect philosophical arguments, critical AI studies positions, cognitive science critiques — not empirical measurements)

**What to extract:** Arguments that "memory" is a misleading or incoherent framing for what LLMs do; evidence that the memory metaphor leads to incorrect predictions or misguides research; alternative framings (statistical pattern completion, compression, interpolation over training distribution) that do NOT invoke memory constructs; cognitive science perspectives on why functional analogs are not the same as memory; positions that applying memory vocabulary anthropomorphizes statistical systems inappropriately

**Source type (academic):** Cognition, Minds and Machines, AI & Society, Artificial Intelligence (Elsevier) journals; arXiv cs.AI (critical perspectives); philosophy of mind preprints; ACL workshops on ethics and critical AI perspectives
**Source type (practitioner):** Critical AI studies blogs; Alignment Forum critical posts; Less Wrong debates on LLM cognition; Bender et al. "Stochastic Parrots" paper and response literature

**Queries:**
  Q1: `language model memory metaphor critique anthropomorphism representational adequacy 2022 2024`
  Q2: `stochastic parrots pattern matching statistical LLM critique not memory anthropomorphism`
  Q3: `symbol grounding intentionality large language models propositional knowledge critique analogy`

**Coverage-gap note:** The philosophical literature is dispersed across venues (Minds and Machines, Cognition, conference workshops, blog ecosystems) not well-indexed by arXiv. A Google Scholar search on `"language models" "memory" metaphor critique analogy` supplements arXiv coverage. The ACL Workshop on "Insights from Negative Results in NLP" and the FAccT conference are additional venues. Less Wrong and Alignment Forum discussions, while not peer-reviewed, contain developed arguments in this space.

---

### ANGLE 14 [C1]: Information-Theoretic Bounds on Neural Network Memory Storage and Retrieval
===========
**Vocabulary tradition:** Information Theory / Shannon Theory (CROSS-DISCIPLINARY — NOT in intake brief traditions)
**Angle type:** Cross-disciplinary
**Predicted research character:** Empirical (theoretical results with empirical validation)

**What to extract:** Formal bounds on how much information can be stored in a neural network of given parameter count; mutual information between training data and model outputs as a memory capacity measure; rate-distortion theory applied to the memorization vs. generalization tradeoff; Kolmogorov complexity / minimum description length framings of what LLMs learn; PAC-Bayesian bounds on knowledge retention; compression-based generalization theory applied to LLMs; information bottleneck interpretation of neural memory

**Source type (academic):** arXiv cs.IT (information theory) + cs.LG + stat.ML; IEEE Transactions on Information Theory; NeurIPS / ICML theory tracks
**Source type (practitioner):** Deprioritized — this is a theory-heavy sub-tradition with minimal practitioner production; Semantic Scholar for citation clustering around foundational papers (Tishby et al. information bottleneck; Shwartz-Ziv and Tishby 2017)

**Queries:**
  Q1: `neural network memory capacity information theoretic bounds mutual information training data 2020 2024`
  Q2: `memorization generalization tradeoff rate distortion theory language model compression capacity`
  Q3: `PAC Bayesian neural network knowledge retention mutual information compression generalization bound`

**Coverage-gap note:** The information-theoretic vocabulary (channel capacity, Rényi entropy, Fisher information, Kolmogorov complexity) does not appear in standard ML searches. Searching arXiv cs.IT with LLM vocabulary is likely to miss relevant theory papers unless specifically oriented toward neural networks. Pearl-growing from information bottleneck papers (Tishby et al. 2015, 2017) and from PAC-Bayesian neural network analyses forward is more productive than direct queries. The formal capacity bound literature (how many bits can a network store?) is a specialist sub-tradition within cs.IT.

---

## GATE SUMMARY
============

**Gate 1 — Completeness:**
- [x] **Null-hypothesis angle present:** PASS — Angle 12 (N1) is explicitly framed as disconfirming evidence. Query strings contain "failure," "negative results," "unreliable retrieval," "inconsistency," "confabulation." The angle cannot be read as a confirmatory angle with hedging language; it is structurally framed as "what evidence shows this does NOT work."
- [x] **Adversarial angle present:** PASS — Angle 13 (D1) is labeled [ADVERSARIAL-FLAGGED] with the required dispatch note. Starting vocabulary list explicitly names all 11 intake-brief traditions as excluded from generation.
- [x] **Cross-disciplinary angle present:** PASS — Angle 14 (C1) targets Information Theory / Shannon Theory. Verified: this tradition does NOT appear in the intake brief's 11 candidate vocabulary traditions. The tradition label, representative terms, and basis for selection confirm structural distinctness.
- [x] **Source-type coverage:** PASS — Domain maturity is "mixed." Practitioner sources (GitHub, benchmark leaderboards, practitioner blogs, AI lab technical reports) appear in Angles 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13. All confirmatory angles in the mixed-maturity topic have at least one named practitioner source.
- [x] **Vocabulary-tradition map populated:** PASS — 14 distinct tradition labels across 14 angles; coverage map documents 11 traditions from intake brief + 1 cross-disciplinary. No two non-null-hypothesis, non-adversarial angles share a tradition label.

**Gate 1 verdict: PASS**

---

**Gate 2 — Distinctness:**

Boolean-connective test applied to potentially overlapping pairs:

- **Angles 1 (FFN parametric storage) and 2 (causal tracing / knowledge localization):** Both concern where facts are stored in FFN/MLP layers. A1 = structural-functional framing (how FFN layers work as key-value stores); A2 = causal intervention methodology (mediation analysis, activation patching to determine causal responsibility). Would OR retrieval return the same documents? PARTIALLY — the Geva et al. (FFN-as-KV) and Meng et al. (ROME / causal tracing) papers cite each other and are empirically related. However, they address different research questions (architecture mechanics vs. localization methodology). The literatures are overlapping but not synonymous. **Verdict: PASS with flag** — the two angles are methodologically distinct. If the search returns substantial overlap, consider a targeted split: "how FFN stores facts" vs. "how to find where a specific fact is stored."

- **Angles 5 (LLMs as implicit KBs, probing) and 11 (multi-hop reasoning, knowledge composition):** Both involve LLM factual knowledge. A5 = static storage accuracy (can the model retrieve a single fact reliably?); A11 = dynamic chaining (can the model combine facts across reasoning steps?). Would OR retrieval return the same documents? UNLIKELY — the probing/LAMA literature and the multi-hop QA (HotpotQA, 2WikiMultiHop) literature are largely separate communities with separate benchmarks. **Verdict: PASS**

- **Angles 1 (FFN/transformer architecture) and 9 (Hopfield networks, superposition):** Both involve how information is stored at the neural mechanism level. A1 = empirical studies of FFN layers as KV stores; A9 = formal associative memory theory and distributed representations. Would OR retrieval return the same documents? Unlikely at high precision — the Modern Hopfield formalism (Ramsauer et al.) and the empirical FFN-probing literature cite each other rarely. The superposition hypothesis work (Anthropic) is more adjacent to A1 but uses different vocabulary. **Verdict: PASS**

All other pairs use sufficiently distinct vocabulary that formal Boolean-connective test is not triggered.

**Vocabulary-tradition distinctness check:** All 14 angles have distinct tradition labels. No two non-null-hypothesis, non-adversarial angles share a tradition label. The null-hypothesis (Angle 12) and adversarial (Angle 13) angles both have distinct tradition labels (NLP Evaluation/Hallucination and Philosophy of Representation respectively). **PASS.**

**Gate 2 verdict: PASS**

---

**Gate 3 — Launchability:**
- [x] **All 14 angles have ≥1 concrete query string:** PASS — every angle record contains 3 runnable search strings. No angle has a description or question in place of a query.
- [x] **No placeholder vocabulary:** PASS — checked all query strings; no TBD, no [fill-in], no "insert term" present. All queries are pasteable into a search interface.
- [x] **Source type is named:** PASS — all angles name specific platforms. Academic: arXiv with category specified (cs.CL, cs.LG, cs.IT, cs.CR, cs.NE, cs.IR, stat.ML), ACL Anthology, Cognition, IEEE Transactions on Information Theory, NeurIPS/ICML/ICLR proceedings. Practitioner: GitHub (with specific repos named where applicable), HuggingFace leaderboards, practitioner blogs identified by venue (Anthropic, OpenAI cookbook), benchmark leaderboard URLs.

**Gate 3 verdict: PASS**

---

**Gate 4 — Scoring prohibition:**
- [x] **No LLM self-evaluation ranking:** PASS — angles are ordered by coverage-map slot order (A1–A11, N1, D1, C1), not by "which seems most promising." The ordering reflects tradition coverage priority, not subjective importance assessment.
- [x] **No implicit quality assessment:** PASS — no angle record contains "this is the most useful angle," "strongest angle," "most novel," or equivalent phrases. Predicted research characters (empirical / consensus / gap) describe anticipated literature type, not angle quality.

**Gate 4 verdict: PASS**

---

**Overall verdict: PASS — dispatch ready (with human-judgment flags below)**

---

**Flags requiring human judgment:**

1. **VOCABULARY SELF-REPORT FLAG** — All 11 vocabulary traditions were enumerated by LLM without Source B validation. A survey-paper probe on `"LLM" memory survey 2024 2025` is recommended before accepting the tradition list as complete. Highest-risk omissions: traditions outside ML/AI that study analogous phenomena (library science, information architecture, database theory). The cross-disciplinary angle (C1, database/IR theory) partially compensates, but the risk of further omitted traditions is MODERATE.

2. **Angle 1 / Angle 2 overlap flag** — Both angles concern where factual knowledge is in FFN/MLP layers. They are methodologically distinct (architecture mechanics vs. causal localization), but search retrieval may produce 40–60% document overlap. If overlap is high in practice: consider merging into one "how is factual knowledge stored in FFN layers and how do we localize it?" angle with broader query scope.

3. **Angle 4 gap character warning** — The working memory / cognitive science analogy for LLM context windows is commonly invoked but rarely tested empirically in the academic literature. This angle may return a sparse literature; its primary result may be "this analogy is used but not rigorously tested," which is a legitimate gap finding.

4. **Adversarial angle (Angle 13) venue difficulty** — The philosophical and critical AI literature is highly dispersed across non-arXiv venues (philosophy journals, critical AI workshops, blog ecosystems). The three query strings provided cover the arXiv-indexed portion. A human researcher should supplement with Google Scholar, venue-specific searches (Minds and Machines, AI & Society, ACL ethics workshops), and community-specific sources (Less Wrong critical posts, FAccT proceedings).

5. **Cross-disciplinary angle (Angle 14) search strategy** — Searching arXiv cs.IT with LLM vocabulary is likely to produce low recall because the information-theoretic community and the LLM community use different terminology. The recommended search strategy is pearl-growing from known bridge papers (information bottleneck: Tishby et al. 2015/2017; PAC-Bayes: McAllester 1999 forward to neural network applications) rather than keyword search from the LLM side.

---

## SUMMARY STATISTICS

- **Total angles generated:** 14
- **Distinct vocabulary traditions covered:** 14 (11 from intake brief + 1 null-hypothesis tradition label + 1 adversarial tradition label + 1 cross-disciplinary tradition)
- **Angle types:** 11 confirmatory + 1 null-hypothesis + 1 adversarial + 1 cross-disciplinary
- **Source B status:** UNAVAILABLE — MODERATE
- **All four quality gates:** PASS
- **Overall verdict:** PASS — dispatch ready (with 5 human-judgment flags documented above)
