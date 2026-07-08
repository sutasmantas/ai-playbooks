# Angle Generation Output — Condition B
## Topic: How knowledge graphs can be combined with LLMs
**Generated:** 2026-07-05 | **Condition:** B | **Input ID:** 7

---

# PART 1 — INTAKE BRIEF

## Step 1 — Sparse-input parsing

**User prompt:** "I want to research how knowledge graphs can be combined with LLMs."

| Element | Extraction | Notes |
|---------|-----------|-------|
| Target concept | Combination / integration of knowledge graphs (KGs) with large language models (LLMs) | Bidirectional: KGs augmenting LLMs AND LLMs augmenting KGs |
| Anchor vocabulary | "knowledge graphs" (KR/semantic web tradition), "LLMs" (ML/NLP tradition), "combined with" (neutral integration framing) | Neither term anchors to a specific sub-area; question is deliberately broad |
| Scope signals | None stated — no date range, no KG type, no LLM architecture, no task domain restriction | Inferred scope: all directions, all KG types, modern transformer-era (post-2020) |

Target concept is unambiguous. No intake question required.

---

## Step 2 — Vocabulary bootstrap

**Source A — LLM translation:**

"knowledge graphs" → also called: knowledge base, ontology, RDF graph, semantic network, property graph, entity-relation graph, triple store, knowledge graph embedding (KGE), linked data, schema.org, Wikidata, DBpedia, Freebase, Neo4j graph, entity-relationship model

"LLMs" → also called: large language models, foundation models, transformers, pre-trained language models, autoregressive language models, generative models, GPT, BERT, T5, instruction-tuned models

"combined with" → also called: integrated, hybrid, augmented, enhanced, grounded, neurosymbolic, retrieval-augmented, injected, fused, jointly trained, knowledge-enhanced

Expanded traditions and absent terms identified:

| User did NOT use | What this signals |
|-----------------|------------------|
| "retrieval-augmented generation" / RAG | User is not entering from the IR/retrieval framing |
| "neurosymbolic" | User is not entering from the symbolic AI tradition |
| "knowledge graph completion" / KGC | User is not entering from the KG-maintenance direction |
| "ontology" | User is not entering from semantic web / description logics |
| "entity linking" / relation extraction | User is not entering from information extraction |
| "hallucination" | User is not entering from the LLM reliability angle |
| "graph neural networks" / GNN | User is not entering from the graph ML tradition |
| "question answering" / KGQA | User is not entering from the QA application direction |

Vocabulary traditions identified by LLM enumeration:

1. **KR&R / Semantic Web** — ontology, RDF, SPARQL, triple store, description logics, linked data, Wikidata, DBpedia, OWL
2. **Language model knowledge encoding / probing** — parametric knowledge, LAMA, knowledge probing, implicit factual knowledge, transformers as knowledge bases
3. **Information retrieval / RAG** — retrieval-augmented generation, dense retrieval, knowledge injection, grounding, REALM, KGRAG
4. **Graph machine learning** — graph neural networks, GNN, knowledge graph embedding, TransE, RotatE, ComplEx, graph transformers
5. **Neurosymbolic AI** — neurosymbolic integration, neural-symbolic, logical reasoning, rule-based inference with neural models
6. **Knowledge engineering / KG construction** — entity linking, relation extraction, knowledge graph completion, named entity recognition, information extraction, knowledge base population
7. **Question answering / semantic parsing** — KGQA, knowledge graph question answering, semantic parsing, SPARQL generation, multi-hop QA
8. **LLM reliability / factuality** — hallucination reduction, factual consistency, knowledge grounding for factuality, fact verification
9. **LLM structured reasoning / chain-of-thought** — chain-of-thought, structured reasoning, scratchpad, multi-step inference, reasoning with structured knowledge
10. **Applied ML / domain-specific knowledge integration** — biomedical KG+LLM, legal ontology, scientific knowledge graph, clinical NLP
11. **NLP evaluation methodology** — benchmark design, evaluation metrics, data contamination, KGQA benchmarks, Freebase-based evaluation
12. **Dialogue systems / conversational AI** — knowledge-grounded dialogue, entity tracking, conversational KG maintenance, long-term memory in agents

**Source B status: UNAVAILABLE — MODERATE**
Running in subagent context without web access. Source A + Source C together identified ≥7 distinct vocabulary traditions. Domain (LLM + knowledge graphs) is well-represented in LLM training data. Severity: MODERATE. Proceed with VOCABULARY SELF-REPORT FLAG.

**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions listed above were enumerated by LLM only. An external survey-paper probe is recommended before treating this as a complete tradition enumeration.

**Source C — Absent-term signal:**
The following terms would be expected in this literature but were absent from the user prompt: RAG, neurosymbolic, entity linking, hallucination, GNN, KGQA, ontology, KGE (TransE/RotatE), SPARQL, knowledge graph completion. This confirms the user is approaching from a high-level framing without anchoring to a specific sub-community.

---

## Step 3 — Question-type classification

**Question type: EXPLORATORY**

Basis: No comparison language, no intervention-outcome structure, no named method or alternative. The prompt "how knowledge graphs can be combined with LLMs" asks for a space of approaches — the definition of an exploratory question. PICO is NOT applied at this stage.

---

## Step 4 — Populated intake brief

```
INTAKE BRIEF
============
Topic: How knowledge graphs can be combined with large language models — integration
architectures, mutual enhancement, hybrid approaches, and failure conditions across
all directions (KG-augmented LLMs and LLM-augmented KGs).

Anchor vocabulary:
  - "knowledge graphs" — KR&R / Semantic Web tradition
  - "LLMs" — ML/NLP tradition
  - "combined with" — neutral integration framing, not anchored to a specific sub-tradition

Candidate vocabulary traditions:
  1. KR&R / Semantic Web — ontology, RDF, SPARQL, triple store, linked data
  2. Language model knowledge encoding / probing — parametric knowledge, LAMA, knowledge
     probing, implicit vs. explicit knowledge
  3. Information retrieval / RAG — retrieval-augmented generation, dense retrieval,
     knowledge injection, grounding
  4. Graph machine learning — GNN, knowledge graph embedding, TransE, RotatE, ComplEx,
     graph transformers
  5. Neurosymbolic AI — neurosymbolic integration, logical inference, rule-based reasoning
     with neural models
  6. Knowledge engineering / KG construction — entity linking, relation extraction, KG
     completion, knowledge base population
  7. Question answering / semantic parsing — KGQA, SPARQL generation, multi-hop QA,
     entity linking for QA
  8. LLM reliability / factuality — hallucination reduction, factual consistency, fact
     verification, knowledge-grounded generation
  9. LLM structured reasoning / chain-of-thought — CoT, scratchpad, step-by-step inference,
     structured knowledge support for reasoning
  10. Applied ML / domain-specific knowledge integration — biomedical KG+LLM, legal, clinical
  11. NLP evaluation methodology — KGQA benchmarks, evaluation metrics, data contamination
  12. Dialogue systems / conversational AI — knowledge-grounded dialogue, entity tracking,
      conversational KG maintenance

  NOTE: VOCABULARY SELF-REPORT FLAG — traditions enumerated by LLM only; no survey-paper
  bootstrap performed (Source B unavailable). Vocabulary-discovery pass recommended.

Question type: EXPLORATORY
  No comparison or intervention-outcome structure in the prompt.

Scope markers: None stated — inferred scope: all integration directions, all KG types
  (heterogeneous, commonsense, biomedical), all LLM architectures, post-2020 era

Known exclusions: None stated

Domain maturity estimate: MIXED (academic-heavy with strong practitioner production)
  Basis: Anchor vocabulary is academic; but KG+LLM integration also has substantial
  practitioner output — Neo4j blog, LangChain, LlamaIndex, GraphRAG implementations.
  This is not an academic-only topic.

Survey paper status: UNAVAILABLE — Source B is unavailable in subagent context.
  Vocabulary-discovery pass recommended after intake.

Source B status: UNAVAILABLE — MODERATE — Source A + Source C produced 12 distinct
  vocabulary traditions; domain is well-represented in LLM training data; proceed.
```

---

## Step 5 — Fallback protocol

Source B unavailable. Severity: MODERATE (12 traditions identified from Source A + C, well-represented domain). VOCABULARY SELF-REPORT FLAG applied above.

---

## Step 6 — Intake gate

- [x] Topic field populated
- [x] Candidate vocabulary traditions: 12 entries (well above ≥2 minimum)
- [x] Question type classified: EXPLORATORY

**Gate: PASS. Proceed to angle generation.**

---

## Phase-gate reflection (fires at every phase transition)

1. Are all output fields in the intake brief populated (no blanks)? YES — all fields filled; Source B unavailability noted with severity assessment.
2. Are ≥2 distinct vocabulary traditions listed? YES — 12 traditions identified.
3. Is the question type classified? YES — EXPLORATORY.

All three conditions affirmative. Proceeding to angle-generation.md.

**Scope justification for angle count:** This is a complex multi-tradition domain with 12 identified vocabulary traditions spanning multiple disciplines. Per angle-generation.md: "Hard input (complex multi-tradition domain): 20–30 angles is appropriate when ≥4 distinct vocabulary traditions are identified." Target: 16 angles with explicit type coverage, justified by tradition count.

---

# PART 2 — ANGLE GENERATION

## Step 0 — Coverage map

```
COVERAGE MAP
============

Tradition 1: KR&R / Semantic Web
  Representative terms: ontology, RDF, SPARQL, triple store, linked data, OWL
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: Language model knowledge encoding / probing
  Representative terms: parametric knowledge, LAMA, knowledge probing, implicit knowledge
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: Information retrieval / RAG
  Representative terms: RAG, retrieval-augmented generation, dense retrieval, knowledge
  injection, REALM, KGRAG
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Graph machine learning
  Representative terms: GNN, graph neural network, knowledge graph embedding, TransE,
  RotatE, ComplEx, graph transformer
  Planned angle slot: Confirmatory A4
  Gap flag: No

Tradition 5: Neurosymbolic AI
  Representative terms: neurosymbolic, neural-symbolic, logical reasoning, rule-based
  reasoning, hybrid reasoning
  Planned angle slot: Confirmatory A5
  Gap flag: No

Tradition 6: Knowledge engineering / KG construction
  Representative terms: entity linking, relation extraction, KG completion, knowledge
  base population, NER, triple extraction
  Planned angle slot: Confirmatory A6
  Gap flag: No

Tradition 7: Question answering / semantic parsing
  Representative terms: KGQA, knowledge graph question answering, SPARQL generation,
  semantic parsing, multi-hop QA, entity linking for QA
  Planned angle slot: Confirmatory A7
  Gap flag: No

Tradition 8: LLM reliability / factuality
  Representative terms: hallucination, factual consistency, fact verification,
  knowledge-grounded generation, factual accuracy
  Planned angle slot: Confirmatory A8
  Gap flag: No

Tradition 9: LLM structured reasoning / chain-of-thought
  Representative terms: chain-of-thought, CoT, scratchpad, multi-step inference,
  structured reasoning, reasoning decomposition
  Planned angle slot: Confirmatory A10
  Gap flag: No

Tradition 10: Applied ML / domain-specific knowledge integration
  Representative terms: biomedical KG, clinical NLP, legal ontology, scientific KG,
  domain-specific LLM grounding
  Planned angle slot: Confirmatory A9
  Gap flag: No

Tradition 11: NLP evaluation methodology / benchmarks
  Representative terms: KGQA benchmark, evaluation metrics, data contamination,
  benchmark leakage, Freebase-based evaluation
  Planned angle slot: Confirmatory A11
  Gap flag: No

Tradition 12: Dialogue systems / conversational AI
  Representative terms: knowledge-grounded dialogue, entity tracking, conversational
  KG, long-term memory, chatbot grounding
  Planned angle slot: Confirmatory A12
  Gap flag: No

Traditions NOT yet represented in the planned list:
  All 12 traditions from intake brief have at least one angle slot.

Cross-disciplinary slot 1 (required — NOT in intake brief):
  Target tradition: Database systems / data management
  Basis: KGs are deployed in graph databases (Neo4j, Amazon Neptune, Virtuoso). The
  database systems community studies query optimization, natural language interfaces,
  schema design, and data quality for graph storage — a perspective almost entirely
  absent from NLP-focused KG+LLM research. NL-to-query generation (NL2Cypher,
  NL2SPARQL) bridges this tradition directly to the LLM side.

Cross-disciplinary slot 2 (optional, selected for depth — NOT in intake brief):
  Target tradition: Cognitive science / semantic memory
  Basis: Knowledge graphs model associative semantic memory structure (Collins-Quillian
  spreading activation). LLMs are distributional semantic models. Cognitive science has
  decades of research on knowledge representation, concept organization, and memory
  retrieval — almost never cited in ML papers but structurally relevant to understanding
  what KG+LLM integration is doing computationally.

Null-hypothesis slot:
  Disconfirming target: Cases where KG+LLM combinations do NOT outperform LLM-only or
  KG-only baselines; scope limitations and negative results.

Adversarial slot:
  Starting vocabulary: Database / natural language query interface tradition.
  Explicitly excludes: ontology, RDF, embedding, grounding, neurosymbolic, relation
  extraction, KGQA, semantic parsing, hallucination, parametric knowledge, GNN (all
  confirmatory vocabulary).
```

---

## Step 1 — Type allocations

```
TYPE ALLOCATIONS
================
Slot A1  (Confirmatory — KR&R / Semantic Web):              KG ontological structure for LLM grounding
Slot A2  (Confirmatory — LM knowledge encoding / probing):  Parametric vs. explicit knowledge comparison
Slot A3  (Confirmatory — IR / RAG):                         KG-augmented retrieval-augmented generation
Slot A4  (Confirmatory — Graph machine learning):            GNN and LLM joint architecture
Slot A5  (Confirmatory — Neurosymbolic AI):                 Neurosymbolic reasoning with KGs and LLMs
Slot A6  (Confirmatory — Knowledge engineering):            LLMs for KG construction and completion
Slot A7  (Confirmatory — QA / semantic parsing):            KGQA with LLMs
Slot A8  (Confirmatory — LLM reliability / factuality):     KG grounding for hallucination reduction
Slot A9  (Confirmatory — Domain-specific applications):     Domain KG+LLM integration
Slot A10 (Confirmatory — LLM structured reasoning / CoT):  Structured KG support for LLM reasoning
Slot A11 (Confirmatory — NLP evaluation methodology):       Benchmarks and evaluation of KG+LLM systems
Slot A12 (Confirmatory — Dialogue / conversational AI):     KG memory for conversational agents
Slot N1  (Null-hypothesis):                                 Failure cases and null results
Slot D1  (Adversarial — DB / NL query systems):             [ADVERSARIAL-FLAGGED] Natural language to graph query
Slot C1  (Cross-disciplinary — DB / data management):       Data quality and schema for KG+LLM
Slot C2  (Cross-disciplinary — Cognitive science):          Semantic memory models and KG analogues
```

---

## Step 2–4 — Angle records

---

### ANGLE 1: KG Ontological Structure as LLM Grounding Signal
```
Vocabulary tradition: KR&R / Semantic Web
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence that schema structure (types, hierarchies, constraints) improves
  LLM factual accuracy; how OWL/RDF ontology encoding is used to condition generation;
  which KG structural properties correlate with grounding quality

Source type (academic): arXiv cs.CL + cs.AI
Source type (practitioner): GitHub (search: "ontology LLM grounding", filter ≥50 stars)

Queries:
  Q1: ontology-grounded language model knowledge representation structured data 2023 2024 2025
  Q2: RDF knowledge graph LLM injection semantic schema-aware generation
  Q3: entity type hierarchy knowledge base language model factual grounding

Coverage-gap note: Does not cover dynamic/evolving ontologies or ontology alignment;
  does not cover very large-scale RDF stores (e.g., Wikidata full dump vs. curated subsets).
```

---

### ANGLE 2: Parametric vs. Explicit Knowledge — What LLMs Know Internally
```
Vocabulary tradition: Language model knowledge encoding / probing
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Measurements of what factual knowledge is stored parametrically in LLMs;
  comparison of implicit LLM knowledge vs. external KG knowledge; conditions under which
  parametric knowledge fails (recency, specificity, low-frequency entities)

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): deprioritized — academic-heavy; LM knowledge probing is
  primarily an academic research area

Queries:
  Q1: parametric knowledge large language models probing factual recall LAMA benchmark 2023 2024
  Q2: LLM implicit knowledge vs explicit knowledge base comparison external memory
  Q3: transformers knowledge base knowledge probing limitations low-frequency entity recall

Coverage-gap note: Does not directly address how to reconcile conflicts between parametric
  knowledge and KG facts (knowledge conflict resolution).
```

---

### ANGLE 3: Knowledge Graph-Augmented Retrieval-Augmented Generation (KG-RAG)
```
Vocabulary tradition: Information retrieval / RAG
Angle type: Confirmatory
Predicted research character: empirical
What to extract: System architectures for KG-based retrieval; how entity linking connects
  queries to KG nodes; comparison of KG retrieval vs. dense vector retrieval for factual QA;
  implementation patterns (GraphRAG, KGRAG, G-RAG)

Source type (academic): arXiv cs.CL + cs.IR
Source type (practitioner): GitHub (search: "GraphRAG knowledge graph", "KGRAG" — filter
  ≥50 stars); Neo4j blog and LangChain documentation

Queries:
  Q1: knowledge graph retrieval augmented generation structured knowledge factual QA 2024 2025
  Q2: GraphRAG graph-augmented RAG entity linking retrieval language model
  Q3: KG-RAG subgraph retrieval generation architecture comparison dense vector retrieval

Coverage-gap note: Does not directly cover multi-hop retrieval chains or retrieval over
  very large heterogeneous KGs (billions of triples).
```

---

### ANGLE 4: Graph Neural Networks and LLM Joint Architectures
```
Vocabulary tradition: Graph machine learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Joint training approaches; how GNN encoders and LLM decoders are coupled;
  what tasks benefit from joint GNN+LLM vs. pipeline approaches; effect of KGE
  (TransE, RotatE, ComplEx) as LLM input features

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub (search: "GNN LLM knowledge graph", filter ≥50 stars)

Queries:
  Q1: graph neural network language model joint training knowledge graph fusion 2023 2024 2025
  Q2: GNN LLM integration knowledge graph embedding representation learning co-training
  Q3: graph transformer language model knowledge reasoning architecture comparison

Coverage-gap note: Does not cover scalability of GNN+LLM joint training on billion-edge
  KGs; does not cover dynamic KG updates during inference.
```

---

### ANGLE 5: Neurosymbolic Integration — KGs as Symbolic Reasoning Substrate for LLMs
```
Vocabulary tradition: Neurosymbolic AI
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How KG logical rules are used to constrain or guide LLM outputs; methods
  for injecting symbolic inference (SPARQL, Datalog, first-order logic) into neural
  generation pipelines; comparison of neurosymbolic vs. pure neural approaches on
  structured reasoning tasks

Source type (academic): arXiv cs.AI + cs.CL
Source type (practitioner): GitHub (search: "neurosymbolic reasoning LLM", filter ≥50 stars)

Queries:
  Q1: neurosymbolic reasoning knowledge graph large language model logical inference 2024 2025
  Q2: neural symbolic integration LLM knowledge base logical rules constrained generation
  Q3: symbolic knowledge retrieval neural text generation hybrid reasoning benchmark

Coverage-gap note: Does not cover theorem-proving integration; does not cover
  differentiable logic approaches (Markov Logic Networks, Probabilistic Soft Logic) with LLMs.
```

---

### ANGLE 6: LLMs for Knowledge Graph Construction and Completion
```
Vocabulary tradition: Knowledge engineering / KG construction
Angle type: Confirmatory
Predicted research character: empirical
What to extract: LLM-based relation extraction and entity linking pipelines; LLMs for KG
  completion (predicting missing triples); accuracy vs. human-curated KG construction;
  which LLM prompting strategies work best for relation extraction; failure modes

Source type (academic): arXiv cs.CL + cs.AI
Source type (practitioner): GitHub (search: "LLM knowledge graph extraction construction");
  blog posts from enterprise KG vendors (Microsoft, Amazon)

Queries:
  Q1: LLM knowledge graph construction extraction relation extraction population automated 2024 2025
  Q2: large language model entity linking named entity recognition knowledge base construction
  Q3: GPT knowledge graph completion triple extraction in-context learning few-shot

Coverage-gap note: Does not cover dynamic KG maintenance (real-time updates); does not
  cover schema induction (building the KG schema from scratch, not just populating it).
```

---

### ANGLE 7: Knowledge Graph Question Answering (KGQA) with LLMs
```
Vocabulary tradition: Question answering / semantic parsing
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Semantic parsing approaches that bridge KG structure and LLM;
  end-to-end KGQA vs. pipeline approaches; multi-hop reasoning on KGs; SPARQL generation
  from natural language; entity linking accuracy as bottleneck; benchmark results

Source type (academic): arXiv cs.CL + cs.AI; ACL Anthology
Source type (practitioner): GitHub (search: "KGQA LLM", filter ≥50 stars); ISWC
  proceedings practitioner track

Queries:
  Q1: knowledge graph question answering KGQA large language model semantic parsing 2023 2024 2025
  Q2: Wikidata Freebase question answering language model entity linking multi-hop reasoning
  Q3: SPARQL generation natural language query LLM knowledge base structured QA

Coverage-gap note: Does not cover conversational (multi-turn) KGQA; does not cover
  KGQA on commonsense KGs (ConceptNet, ATOMIC) vs. factual KGs (Freebase, Wikidata).
```

---

### ANGLE 8: Knowledge Graph Grounding for LLM Hallucination Reduction
```
Vocabulary tradition: LLM reliability / factuality
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Measurements of factual error rate with/without KG grounding; which entity
  types benefit most; whether KG grounding reduces hallucination or merely shifts it;
  effect sizes; comparison across KG types (sparse vs. dense coverage)

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub issues on hallucination eval frameworks; practitioner
  blog posts from enterprise NLP teams (Microsoft, Google DeepMind)

Queries:
  Q1: knowledge graph grounding LLM hallucination reduction factuality measurement 2024 2025
  Q2: entity constraint structured knowledge reduce LLM hallucination factual accuracy evaluation
  Q3: fact verification knowledge base language model hallucination factual consistency benchmark

Coverage-gap note: Does not address KG staleness causing hallucinations (outdated KG facts
  accepted uncritically); does not cover adversarial entity manipulation in KGs.
```

---

### ANGLE 9: Domain-Specific KG+LLM Integration Patterns
```
Vocabulary tradition: Applied ML / domain-specific knowledge integration
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Which domain-specific adaptations are required (biomedical ontology terms,
  legal taxonomy, scientific KG schema); evidence that domain KG+LLM outperforms general
  LLM; domain-specific failure modes; whether domain KG improves few-shot vs. zero-shot

Source type (academic): arXiv cs.CL + cs.AI; PubMed for biomedical domain; ACL Anthology
Source type (practitioner): GitHub (search: "biomedical knowledge graph LLM"); clinical NLP
  practitioner reports

Queries:
  Q1: biomedical knowledge graph language model clinical drug interaction disease entity 2024 2025
  Q2: domain-specific knowledge graph LLM integration evaluation legal financial scientific
  Q3: medical ontology UMLS knowledge graph LLM clinical NLP entity grounding

Coverage-gap note: Does not cover the question of whether domain-specific KGs transfer
  across domains; does not cover knowledge graph construction in low-resource domain settings.
```

---

### ANGLE 10: Structured KG Support for LLM Chain-of-Thought Reasoning
```
Vocabulary tradition: LLM structured reasoning / chain-of-thought
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Whether KG access improves step-by-step reasoning on multi-hop questions;
  how KG subgraphs are integrated into CoT generation; comparison of KG-guided CoT vs.
  ungrounded CoT; interpretability benefits from explicit KG reasoning traces

Source type (academic): arXiv cs.CL + cs.AI
Source type (practitioner): GitHub (search: "knowledge graph chain of thought reasoning")

Queries:
  Q1: knowledge graph chain of thought reasoning LLM multi-step inference structured 2024 2025
  Q2: KG-guided reasoning decomposition language model logical consistency interpretable
  Q3: structured knowledge grounding LLM step-by-step reasoning planning benchmark

Coverage-gap note: Does not cover whether KG-CoT improves calibration or just accuracy;
  does not cover failure modes of KG-guided CoT (wrong entity retrieval polluting reasoning).
```

---

### ANGLE 11: Benchmarks and Evaluation Methodology for KG+LLM Systems
```
Vocabulary tradition: NLP evaluation methodology / benchmarks
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Survey of benchmark datasets used for KG+LLM evaluation; documented
  contamination issues (LLM training data leakage into KG benchmarks); evaluation
  metric choices and their limitations; gaps in current benchmark coverage

Source type (academic): arXiv cs.CL; ACL Anthology; NeurIPS datasets and benchmarks track
Source type (practitioner): GitHub (search: "KGQA benchmark evaluation leakage", filter
  ≥10 stars); practitioner blog posts from benchmark creators

Queries:
  Q1: knowledge graph LLM evaluation benchmark survey dataset 2023 2024 2025
  Q2: KGQA benchmark contamination LLM data leakage evaluation methodology fairness
  Q3: evaluation framework knowledge-enhanced language model factual correctness metric

Coverage-gap note: Does not cover human evaluation of KG+LLM outputs (preference studies);
  does not cover cost-quality tradeoffs in evaluation (automated vs. human annotation).
```

---

### ANGLE 12: KG Memory for Conversational Agents and Dialogue Systems
```
Vocabulary tradition: Dialogue systems / conversational AI
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How KGs are used as persistent entity memory across dialogue turns;
  conversational KG maintenance (update, deletion); entity tracking accuracy;
  comparison of KG-based memory vs. context-window-based memory; agent use cases

Source type (academic): arXiv cs.CL; ACL/EMNLP dialogue system papers
Source type (practitioner): GitHub (search: "conversational agent knowledge graph memory");
  LangChain / LlamaIndex documentation on agent memory

Queries:
  Q1: knowledge graph memory conversational agent dialogue LLM long-term 2024 2025
  Q2: KG-grounded chatbot entity tracking dialogue state management persistent memory
  Q3: conversational knowledge graph update maintenance LLM interaction memory retrieval

Coverage-gap note: Does not cover KG memory for non-chat agents (autonomous agents,
  tool-use agents); does not cover privacy implications of persistent KG memory.
```

---

### ANGLE N1: Failure Cases and Null Results — When KG+LLM Does NOT Improve
```
Vocabulary tradition: ML empirical evaluation / negative results (disconfirming)
Angle type: Null-hypothesis
Predicted research character: gap (null results are underreported; this angle documents absence)
What to extract: Conditions under which adding a KG does NOT improve LLM performance;
  cases where LLM-only outperforms KG+LLM; scope limitations (entity sparsity, KG
  incompleteness, domain mismatch); failure modes in KG retrieval; papers that explicitly
  report negative or null comparisons

Source type (academic): arXiv cs.CL + cs.AI; NeurIPS / ICML papers with ablation sections
Source type (practitioner): GitHub issue threads on GraphRAG and KG-RAG implementations;
  Stack Overflow questions about KG+LLM integration failures

Queries:
  Q1: knowledge graph LLM no improvement baseline comparison failure scope limitation 2023 2024 2025
  Q2: KGQA LLM zero-shot outperforms knowledge graph structured retrieval negative result
  Q3: knowledge graph augmentation LLM does not generalize incomplete KG limitations ablation
  Q4: LLM parametric knowledge outperforms external knowledge graph retrieval comparison

Coverage-gap note: Null results are systematically underreported in ML venues. This angle
  is likely to surface mainly as ablation sections within positive-result papers, not as
  standalone null-result papers. The absence of papers here is itself a finding.
```

---

### ANGLE D1: Natural Language to Graph Query — Text-to-Cypher / Text-to-SPARQL
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

```
Vocabulary tradition: Database / natural language query systems (adversarial)
  Generating from database / query systems vocabulary.
  Excluding from generation prompt: ontology, RDF, embedding, grounding, neurosymbolic,
  relation extraction, KGQA, semantic parsing, hallucination, parametric knowledge,
  GNN, chain-of-thought, entity linking, knowledge graph completion (all confirmatory terms).

Angle type: Adversarial-FLAGGED
Predicted research character: empirical
What to extract: How well LLMs translate natural language questions into formal graph
  query languages (Cypher, SPARQL, PGQL); benchmark performance on text-to-query
  tasks; error analysis; approaches that improve query correctness; how schema awareness
  in LLMs affects query generation

Source type (academic): arXiv cs.DB + cs.CL
Source type (practitioner): GitHub (search: "text to Cypher", "NL2SPARQL", filter ≥50 stars);
  Neo4j developer blog; Amazon Neptune documentation

Queries:
  Q1: natural language interface graph database text-to-Cypher text-to-SPARQL LLM 2024 2025
  Q2: NL2SPARQL NL2Cypher query generation language model property graph benchmark evaluation
  Q3: database schema awareness LLM structured query language graph query generation accuracy

Coverage-gap note: Does not cover query optimization or execution; does not cover schema
  inference from natural language when schema is unknown.
```

---

### ANGLE C1: Data Quality and Schema Consistency in KG+LLM Pipelines
```
Vocabulary tradition: Database / data management (cross-disciplinary — NOT in intake brief)
Angle type: Cross-disciplinary
Predicted research character: consensus
What to extract: How data quality in knowledge graphs affects downstream LLM performance;
  schema-aware generation from graph databases; challenges of integrating heterogeneous
  KGs (schema alignment, entity resolution); data pipeline reliability for KG+LLM systems

Source type (academic): arXiv cs.DB; VLDB / SIGMOD proceedings; IEEE TKDE
Source type (practitioner): GitHub (search: "knowledge graph data quality pipeline");
  blog posts from enterprise data teams (Palantir, Databricks); Neo4j community posts

Queries:
  Q1: knowledge graph data quality schema consistency LLM pipeline heterogeneous integration 2024 2025
  Q2: entity resolution schema alignment knowledge graph integration language model data management
  Q3: graph database data quality LLM downstream performance evaluation structured knowledge

Coverage-gap note: This tradition is almost entirely absent from NLP-focused KG+LLM papers.
  Key question not yet addressed: whether data quality degradation in KGs has measurable
  effect on LLM output quality.
```

---

### ANGLE C2: Semantic Memory Models as Cognitive Science Analogues for KG+LLM
```
Vocabulary tradition: Cognitive science / semantic memory (cross-disciplinary — NOT in intake brief)
Angle type: Cross-disciplinary
Predicted research character: gap (rarely cited in ML literature)
What to extract: Cognitive science models of semantic network structure (Collins-Quillian,
  spreading activation, ACT-R); how these models compare to KG+LLM architectures;
  whether cognitive principles (concept clustering, typicality, semantic distance) have
  been applied to KG design; analogues between human memory retrieval and KG+LLM retrieval

Source type (academic): PubMed (search MeSH: "semantic memory" + "computational model");
  Psychological Review; Cognitive Science journal
Source type (practitioner): deprioritized — this is primarily an academic theoretical angle

Queries:
  Q1: semantic network spreading activation language model associative memory cognitive science 2024
  Q2: human semantic memory knowledge representation computational model cognitive architecture
  Q3: knowledge graph semantic memory cognitive analogy concept representation retrieval

Coverage-gap note: Very little direct literature likely exists connecting cognitive semantic
  memory models to modern KG+LLM systems. This angle primarily documents a cross-disciplinary
  gap — absence of this literature is itself a finding that informs future research directions.
```

---

# PART 3 — QUALITY GATES (angle-quality.md)

## Gate 1 — Completeness checks

- [x] **Null-hypothesis angle present:** Angle N1 explicitly frames disconfirming search. Query set contains: "failure," "no improvement," "does not generalize," "negative result," "ablation." PASS.

- [x] **Adversarial angle present:** Angle D1 labeled `[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]`. PASS.

- [x] **Cross-disciplinary angle present:** Angles C1 (Database/data management) and C2 (Cognitive science/semantic memory) both target traditions NOT listed in the intake brief. PASS.

- [x] **Source-type coverage:** Domain maturity = MIXED. Practitioner sources assigned to A1 (GitHub), A3 (GitHub + Neo4j blog), A4 (GitHub), A5 (GitHub), A6 (GitHub + vendor blogs), A7 (GitHub + ISWC), A8 (GitHub + blogs), A9 (GitHub), A10 (GitHub), A11 (GitHub + blogs), A12 (GitHub + LangChain docs), D1 (GitHub + Neo4j blog), C1 (GitHub + enterprise blogs). PASS.

- [x] **Vocabulary-tradition map populated:** Coverage map at Step 0 has 14 distinct tradition entries (12 from intake brief + 2 cross-disciplinary). PASS.

**Gate 1: PASS**

---

## Gate 2 — Distinctness checks

**Boolean-connective test on highest-overlap pairs:**

| Pair | Most distinctive term A | Appears in B? | Test result |
|------|------------------------|---------------|------------|
| A3 (RAG) vs. A8 (hallucination) | "retrieval augmented generation" | No — A8 uses "hallucination reduction factuality measurement" | PASS |
| A1 (KR&R) vs. A6 (KE construction) | "ontology RDF schema-aware" | No — A6 uses "relation extraction knowledge base population" | PASS (different directions) |
| A2 (parametric) vs. A10 (CoT) | "parametric knowledge probing LAMA" | No — A10 uses "chain of thought reasoning decomposition" | PASS |
| A7 (KGQA) vs. A11 (evaluation) | "semantic parsing entity linking SPARQL generation" | No — A11 uses "benchmark contamination leakage methodology" | PASS |
| A4 (GNN) vs. A5 (neurosymbolic) | "graph neural network joint training embedding" | No — A5 uses "neurosymbolic logical rules constrained" | PASS |
| D1 (adversarial) vs. C1 (cross-disciplinary DB) | D1: "text-to-Cypher query generation" vs. C1: "data quality schema consistency pipeline" | Different facets; both from DB tradition but D1 is adversarial (exempted) | PASS — different facets; adversarial exemption applies |
| A8 (hallucination) vs. A2 (parametric) | "hallucination reduction factuality" vs. "parametric knowledge probing" | No overlap in distinctive terms | PASS |

No angle pairs flagged for synonymy.

**Vocabulary-tradition distinctness:**

| Angle | Tradition label |
|-------|----------------|
| A1 | KR&R / Semantic Web |
| A2 | Language model knowledge encoding / probing |
| A3 | Information retrieval / RAG |
| A4 | Graph machine learning |
| A5 | Neurosymbolic AI |
| A6 | Knowledge engineering / KG construction |
| A7 | Question answering / semantic parsing |
| A8 | LLM reliability / factuality |
| A9 | Applied ML / domain-specific knowledge integration |
| A10 | LLM structured reasoning / chain-of-thought |
| A11 | NLP evaluation methodology / benchmarks |
| A12 | Dialogue systems / conversational AI |
| N1 | ML empirical evaluation / negative results (disconfirming) |
| D1 | Database / natural language query systems (adversarial) |
| C1 | Database / data management |
| C2 | Cognitive science / semantic memory |

All 16 tradition labels are distinct. No two non-null-hypothesis, non-adversarial angles share a tradition label. PASS.

**Gate 2: PASS**

---

## Gate 3 — Launchability checks

All 16 angles checked:
- [x] Each angle record contains at least one concrete, runnable query string (no descriptions or questions). Example spot-check: A1 Q1 = "ontology-grounded language model knowledge representation structured data 2023 2024 2025" — paste-ready. PASS.
- [x] No query string contains "TBD," "to be determined," "[fill in]," or equivalent placeholders. PASS.
- [x] All "Source type (academic)" and "Source type (practitioner)" fields name specific platforms (arXiv, PubMed, GitHub, Semantic Scholar, VLDB, ACL Anthology, Neo4j blog, LangChain docs). PASS.

**Gate 3: PASS**

---

## Gate 4 — Scoring prohibition

- [x] No angles were filtered or ranked by "most promising," "most relevant," or equivalent subjective assessment during generation. All filtering was by structural criteria: vocabulary-tradition coverage, angle-type requirement, Boolean-connective distinctness. PASS.
- [x] No angle record contains phrases like "this is the strongest angle" or "this is likely to be most useful." PASS.

**Gate 4: PASS**

---

## GATE SUMMARY
```
GATE SUMMARY
============
Gate 1 — Completeness: PASS
  Null-hypothesis angle: PRESENT (N1, explicit disconfirming vocabulary)
  Adversarial angle: PRESENT (D1, ADVERSARIAL-FLAGGED, separate context note)
  Cross-disciplinary angle: PRESENT (C1 — database/data management; C2 — cognitive science)
  Source-type coverage: PRESENT (practitioner sources across 13 of 16 angles)
  Vocabulary-tradition map: PRESENT (16 traditions in coverage map)

Gate 2 — Distinctness: PASS
  All high-overlap pairs tested. No synonymy flags triggered.
  D1 (adversarial) shares DB tradition with C1 (cross-disciplinary) — adversarial
  exemption applies; different facets confirmed (query generation vs. data quality).

Gate 3 — Launchability: PASS
  All 16 angles have ≥1 runnable query string, no placeholder vocabulary, named platforms.

Gate 4 — Scoring prohibition: PASS
  No LLM self-evaluation ranking applied at any generation step.

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — traditions enumerated by LLM only; no survey-paper
     bootstrap performed (Source B unavailable). Traditions from non-English or highly
     specialized sub-fields may be missing. Recommend a survey-paper probe pass
     (query: "knowledge graph LLM survey 2024 2025") before treating this list as
     covering all traditions.
  2. C2 (Cognitive science) is predicted to return sparse results — absence of literature
     is itself a finding (cross-disciplinary gap). Human judgment required on whether to
     treat absence as saturation or as a research opportunity.
  3. N1 (null-hypothesis) likely surfaces primarily as ablation sections within
     positive-result papers, not as standalone negative results. Low yield is expected
     and does not indicate the angle is exhausted.
  4. D1 (adversarial): MUST be dispatched in a separate research context with no prior
     confirmatory angle results present. This is a structural requirement — ignoring the
     label and running D1 in the same context as A1–A12 violates the adversarial
     separation requirement.
```

---

# SUMMARY TABLE — All 16 Angles

| # | Title | Tradition | Type | Predicted character |
|---|-------|-----------|------|---------------------|
| A1 | KG Ontological Structure as LLM Grounding Signal | KR&R / Semantic Web | Confirmatory | empirical |
| A2 | Parametric vs. Explicit Knowledge — What LLMs Know Internally | LM knowledge encoding / probing | Confirmatory | empirical |
| A3 | KG-Augmented Retrieval-Augmented Generation (KG-RAG) | Information retrieval / RAG | Confirmatory | empirical |
| A4 | GNN and LLM Joint Architectures | Graph machine learning | Confirmatory | empirical |
| A5 | Neurosymbolic Integration — KGs as Symbolic Reasoning Substrate | Neurosymbolic AI | Confirmatory | empirical |
| A6 | LLMs for KG Construction and Completion | Knowledge engineering / KG construction | Confirmatory | empirical |
| A7 | Knowledge Graph Question Answering (KGQA) with LLMs | Question answering / semantic parsing | Confirmatory | empirical |
| A8 | KG Grounding for LLM Hallucination Reduction | LLM reliability / factuality | Confirmatory | empirical |
| A9 | Domain-Specific KG+LLM Integration Patterns | Applied ML / domain-specific | Confirmatory | empirical |
| A10 | Structured KG Support for LLM Chain-of-Thought Reasoning | LLM structured reasoning / CoT | Confirmatory | empirical |
| A11 | Benchmarks and Evaluation Methodology for KG+LLM Systems | NLP evaluation methodology | Confirmatory | consensus |
| A12 | KG Memory for Conversational Agents | Dialogue systems / conversational AI | Confirmatory | empirical |
| N1 | Failure Cases and Null Results | ML empirical evaluation / negative results | Null-hypothesis | gap |
| D1 | [ADVERSARIAL-FLAGGED] NL-to-Graph Query (Text-to-Cypher/SPARQL) | DB / NL query systems | Adversarial | empirical |
| C1 | Data Quality and Schema Consistency in KG+LLM Pipelines | Database / data management | Cross-disciplinary | consensus |
| C2 | Semantic Memory Models as KG+LLM Cognitive Analogues | Cognitive science / semantic memory | Cross-disciplinary | gap |

**Total angles: 16**
**Distinct traditions: 16**
**Null-hypothesis angles: 1 (N1)**
**Adversarial angles: 1 (D1)**
**Cross-disciplinary angles: 2 (C1, C2)**
**Overall gate verdict: PASS — dispatch ready**
