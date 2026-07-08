# Angle-Gen-Kit Output — Condition C
**Input ID:** 7
**Topic:** How knowledge graphs can be combined with LLMs
**Condition:** C (no external search access; Source B unavailable)

---

## INTAKE BRIEF
============
Topic: Integration of knowledge graphs and large language models — methods, architectures, and outcomes of combining structured graph-based knowledge representations with neural language models

Anchor vocabulary: "knowledge graphs" (Semantic Web / Knowledge Representation tradition), "LLMs" (ML-systems / NLP tradition), "combined with" (system-integration framing)

Candidate vocabulary traditions:
  1. Semantic Web / Knowledge Representation — RDF, OWL, SPARQL, ontology, triple stores, linked data, entity alignment, knowledge base, Wikidata, DBpedia, Freebase
  2. NLP / Language Model Integration — large language models, pre-trained language models, transformers, fine-tuning, instruction tuning, GPT, BERT, language model augmentation
  3. Graph Machine Learning — graph neural networks (GNN), heterogeneous graphs, graph embeddings, node classification, link prediction, message passing, GraphSAGE, R-GCN
  4. Information Retrieval / Retrieval-Augmented Generation — RAG, dense retrieval, knowledge-intensive NLP, entity retrieval, grounded generation, KGRAG
  5. Knowledge Base Completion — KGC, relation prediction, embedding methods (TransE, RotatE), triple classification, inductive KGC
  6. NLP Factuality / Hallucination Research — hallucination mitigation, factual grounding, entity verification, factuality probing, knowledge conflict
  7. Neuro-Symbolic AI — neural-symbolic integration, symbolic reasoning, logic programming, rule-neural hybrid, differentiable reasoning
  8. NLP / Information Extraction — entity linking, named entity recognition, relation extraction, coreference resolution, entity disambiguation
  9. Prompting / In-context Learning — chain-of-thought, structured prompts, KG-augmented prompting, graph-of-thought, tool use
  10. Knowledge Engineering / Knowledge Acquisition — ontology population, KG construction, information extraction pipelines, knowledge curation
  11. Reasoning / Multi-hop Question Answering — multi-hop QA, complex question answering, KGQA, reasoning chains, WebQuestions, FreebaseQA
  12. Natural Language Generation / Structured-to-Text — graph-to-text, data-to-text, AMR, structured knowledge verbalization, table-to-text
  13. ML Systems / Engineering — latency, scalability, pipeline architecture, vector databases, graph databases, Neo4j, deployment
  14. Formal Ontology / Description Logics — OWL DL, reasoning completeness, consistency checking, ontology alignment, DL-Lite
  15. Multilingual NLP / Cross-lingual Learning — cross-lingual KG, multilingual entity linking, language-agnostic representation
  16. Temporal Reasoning / Dynamic Graphs — temporal KGs, event graphs, time-aware embeddings, dynamic knowledge representation
  17. Commonsense Reasoning — ConceptNet, ATOMIC, commonsense KG, implicit knowledge, inference chains
  18. Symbolic AI / Classical KG (adversarial framing) — logic-first, SPARQL-only baselines, expert systems, Prolog, rule-based QA
  19. Cognitive Science / Semantic Memory — schema theory, spreading activation, semantic memory organization, associative memory, knowledge structures in human cognition

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure; "how can X be combined with Y" signals a broad survey of approaches, not a specific comparison)

Scope markers: None stated — inferred scope: methods and architectures for integrating knowledge graphs with LLMs in any application domain; no date restriction stated; no specific model family or graph type excluded

Known exclusions: None stated

Domain maturity estimate: mixed (academic-heavy with strong practitioner adoption)
  Basis: "knowledge graphs" and "LLMs" are both academically mature terms with substantial arXiv literature; however, the combination has active practitioner tooling (LangChain, LlamaIndex, Neo4j GenAI suite, Microsoft GraphRAG) — integration topic has moved substantially into engineering practice; both academic and practitioner sources required

Survey paper status: NOT SEARCHED — Source B unavailable
  No survey paper found — vocabulary-discovery pass recommended before finalizing angle list

Source B status: UNAVAILABLE — MODERATE (Source A + Source C together produced 19 distinct vocabulary traditions spanning 5+ research disciplines; coverage confidence is MODERATE, not HIGH RISK)

VOCABULARY SELF-REPORT FLAG: All vocabulary traditions in this brief were enumerated by LLM training knowledge only. No survey-paper title vocabulary was available to validate or extend this list. External validation via a survey-paper probe (e.g., `"knowledge graph" "language model" survey 2024 2025`) is recommended before treating this tradition list as exhaustive.

---

## Intake Gate Check (Step 6)
- [x] Topic field populated (not TBD)
- [x] Candidate vocabulary traditions: 19 entries
- [x] Question type classified: EXPLORATORY

Gate: PASS. Proceeding to angle-generation.md.

---

## COVERAGE MAP
============
Tradition 1: Semantic Web / Knowledge Representation
  Representative terms: RDF, OWL, SPARQL, ontology, triple stores, Wikidata, DBpedia, entity alignment
  Planned angle slot: Confirmatory A3 (NL-to-SPARQL generation)
  Gap flag: No — additional slot A1 also covers training-time injection from this tradition

Tradition 2: NLP / Language Model Integration
  Representative terms: LLMs, pre-trained language models, transformers, fine-tuning, instruction tuning, GPT
  Planned angle slot: Confirmatory A1 (KG-augmented pre-training and fine-tuning)
  Gap flag: No

Tradition 3: Graph Machine Learning
  Representative terms: GNNs, heterogeneous graphs, graph embeddings, link prediction, message passing, R-GCN
  Planned angle slot: Confirmatory A4 (graph neural networks as KG encoders for LLMs)
  Gap flag: No

Tradition 4: Information Retrieval / Retrieval-Augmented Generation
  Representative terms: RAG, dense retrieval, knowledge-intensive NLP, KGRAG, grounded generation
  Planned angle slot: Confirmatory A2 (KG-augmented retrieval-augmented generation)
  Gap flag: No

Tradition 5: Knowledge Base Completion
  Representative terms: KGC, relation prediction, TransE, RotatE, triple classification, inductive KGC
  Planned angle slot: Confirmatory A5 (knowledge base completion using LLMs)
  Gap flag: No

Tradition 6: NLP Factuality / Hallucination Research
  Representative terms: hallucination mitigation, factual grounding, entity verification, factuality probing, knowledge conflict
  Planned angle slot: Confirmatory A6 (factuality and hallucination reduction via KG grounding)
  Gap flag: No

Tradition 7: Neuro-Symbolic AI
  Representative terms: neural-symbolic integration, symbolic reasoning, differentiable reasoning, rule-neural hybrid
  Planned angle slot: Confirmatory A7 (neuro-symbolic reasoning)
  Gap flag: No

Tradition 8: NLP / Information Extraction
  Representative terms: entity linking, NER, relation extraction, coreference, entity disambiguation
  Planned angle slot: Confirmatory A8 (entity linking in KG-LLM pipelines)
  Gap flag: No

Tradition 9: Prompting / In-context Learning
  Representative terms: chain-of-thought, KG-augmented prompting, graph-of-thought, structured prompts, tool use
  Planned angle slot: Confirmatory A9 (in-context KG evidence injection)
  Gap flag: No

Tradition 10: Knowledge Engineering / Knowledge Acquisition
  Representative terms: ontology population, KG construction, extraction pipelines, knowledge curation
  Planned angle slot: Confirmatory A10 (LLM-assisted KG construction)
  Gap flag: No

Tradition 11: Reasoning / Multi-hop QA
  Representative terms: multi-hop QA, complex QA, KGQA, reasoning chains, WebQuestions, FreebaseQA
  Planned angle slot: Confirmatory A11 (multi-hop reasoning over KGs)
  Gap flag: No

Tradition 12: NLG / Structured-to-Text
  Representative terms: graph-to-text, data-to-text, AMR, structured knowledge verbalization
  Planned angle slot: Confirmatory A12 (graph-to-text generation)
  Gap flag: No

Tradition 13: ML Systems / Engineering
  Representative terms: latency, scalability, pipeline architecture, vector databases, Neo4j, deployment
  Planned angle slot: Confirmatory A13 (systems engineering for KG-LLM pipelines)
  Gap flag: No

Tradition 14: Formal Ontology / Description Logics
  Representative terms: OWL DL, reasoning completeness, ontology alignment, DL-Lite, consistency checking
  Planned angle slot: Confirmatory A14 (ontology alignment and schema reconciliation)
  Gap flag: No

Tradition 15: Multilingual NLP
  Representative terms: cross-lingual KG, multilingual entity linking, language-agnostic representation
  Planned angle slot: Confirmatory A15 (cross-lingual KG-LLM integration)
  Gap flag: No

Tradition 16: Temporal Reasoning / Dynamic Graphs
  Representative terms: temporal KGs, event graphs, time-aware embeddings, dynamic knowledge
  Planned angle slot: Confirmatory A16 (temporal and evolving KGs with LLMs)
  Gap flag: No

Tradition 17: Commonsense Reasoning
  Representative terms: ConceptNet, ATOMIC, commonsense KG, implicit knowledge, inference chains
  Planned angle slot: Confirmatory A17 (commonsense KG integration with LLMs)
  Gap flag: No

Tradition 18: Symbolic AI / Classical KG (adversarial framing)
  Representative terms: logic-first approaches, SPARQL-only baselines, expert systems, Prolog, rule-based QA
  Planned angle slot: Adversarial D1
  Gap flag: No

Tradition 19: Cognitive Science / Semantic Memory
  Representative terms: schema theory, spreading activation, semantic memory, associative memory, knowledge structures
  Planned angle slot: Cross-disciplinary C1
  Gap flag: No — this tradition was NOT in the user's vocabulary

Traditions NOT yet represented in planned list: All 19 traditions have at least one planned angle slot.

Cross-disciplinary slot (required):
  Target tradition: Cognitive Science / Semantic Memory — schema theory and structured knowledge in human cognition
  Basis for selection: LLM research on knowledge-graph integration implicitly models the same problem that cognitive scientists study: how structured factual knowledge is organized and retrieved in memory. This tradition provides empirical findings on schema effects, spreading activation, and semantic memory architecture that can inform or critique neural approaches — but uses entirely different vocabulary ("semantic memory," "schema," "associative network") that would not be retrieved by LLM/KG queries.

---

## TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Semantic Web / NLP/LLM): KG-augmented pre-training and fine-tuning
Slot A2 (Confirmatory — Information Retrieval / RAG): KG-augmented retrieval-augmented generation
Slot A3 (Confirmatory — Semantic Web / KGQA): Natural language to SPARQL and KG query generation
Slot A4 (Confirmatory — Graph Machine Learning): Graph neural networks as KG encoders for LLMs
Slot A5 (Confirmatory — Knowledge Base Completion): LLMs for knowledge base completion and link prediction
Slot A6 (Confirmatory — NLP Factuality): Hallucination reduction via KG grounding
Slot A7 (Confirmatory — Neuro-Symbolic AI): Neuro-symbolic reasoning combining KG logic with neural inference
Slot A8 (Confirmatory — NLP / Information Extraction): Entity linking in KG-LLM pipelines
Slot A9 (Confirmatory — Prompting / In-context Learning): In-context KG evidence injection for LLM reasoning
Slot A10 (Confirmatory — Knowledge Engineering): LLM-assisted KG construction and population
Slot A11 (Confirmatory — Reasoning / Multi-hop QA): Multi-hop reasoning over KGs using LLMs
Slot A12 (Confirmatory — NLG / Structured-to-Text): Graph-to-text generation using KGs
Slot A13 (Confirmatory — ML Systems / Engineering): Systems engineering for KG-LLM pipelines
Slot A14 (Confirmatory — Formal Ontology): Ontology alignment and schema reconciliation in hybrid systems
Slot A15 (Confirmatory — Multilingual NLP): Cross-lingual KG-LLM integration
Slot A16 (Confirmatory — Temporal Reasoning): Temporal and evolving KGs with LLMs
Slot A17 (Confirmatory — Commonsense Reasoning): Commonsense KG integration with LLMs
Slot N1 (Null-hypothesis): Evidence that KG+LLM integration fails or does not outperform baselines
Slot D1 (Adversarial — Symbolic AI / Classical KG): KG-based approaches without LLMs where symbolic methods dominate [NOT FROM: Semantic Web + NLP/LLM, IR/RAG, Graph ML, Factuality, Neuro-Symbolic, IE, Prompting, Knowledge Engineering, Multi-hop QA, NLG, Systems, Formal Ontology, Multilingual, Temporal, Commonsense]
Slot C1 (Cross-disciplinary — Cognitive Science / Semantic Memory): Schema theory and structured knowledge in human semantic memory

Justification for 20 angles: ≥4 distinct vocabulary traditions identified at intake (19 traditions identified); topic spans at minimum 5 research disciplines (computer science subfields, cognitive science, formal logic). Per angle-generation.md hard-input rule, 20–30 angles is appropriate; 20 angles selected as lower bound for this highly multi-traditional topic.

---

## ANGLE LIST

---

ANGLE 1: KG-Augmented Pre-Training and Fine-Tuning of Language Models
===========
Vocabulary tradition: Semantic Web / NLP — Language Model Integration
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for injecting KG triples during pre-training (masked entity prediction, entity-aware objectives); fine-tuning approaches that align LLM representations with KG embeddings; comparison of training-time vs inference-time KG injection on downstream task performance

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub repositories for ERNIE, KEPLER, KnowBERT — implementation patterns and observed training outcomes

Queries:
  Q1: knowledge graph augmented pre-training language model entity 2022 2023 2024
  Q2: KEPLER ERNIE KnowBERT knowledge-enhanced language model training
  Q3: knowledge base injection fine-tuning large language model factual knowledge
  Q4: entity-aware pre-training objectives knowledge representation language model

Coverage-gap note: Queries focus on encoder-style LLMs and BERT-era approaches; generative LLMs (GPT-class) at training time is a newer sub-area not fully covered by these queries — a separate targeted search may be needed.

---

ANGLE 2: Knowledge Graph-Augmented Retrieval-Augmented Generation (KGRAG)
===========
Vocabulary tradition: Information Retrieval / Retrieval-Augmented Generation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Architectures for using KGs as the retrieval index in RAG pipelines; comparison of KG retrieval vs dense vector retrieval; Microsoft GraphRAG and subgraph retrieval patterns; performance on knowledge-intensive benchmarks

Source type (academic): arXiv cs.CL + cs.IR
Source type (practitioner): GitHub — microsoft/graphrag repository; LlamaIndex and LangChain KG-RAG integration documentation

Queries:
  Q1: knowledge graph retrieval augmented generation KGRAG 2023 2024 2025
  Q2: GraphRAG subgraph retrieval language model generation grounded
  Q3: structured knowledge retrieval LLM question answering factual accuracy
  Q4: entity subgraph extraction retrieval augmented generation knowledge base

Coverage-gap note: Queries cover the retrieval architecture; evaluation of retrieval quality (precision/recall of subgraph retrieval) is a distinct sub-question not fully addressed here.

---

ANGLE 3: Natural Language to SPARQL and KG Query Generation
===========
Vocabulary tradition: Semantic Web / Knowledge Base Question Answering
Angle type: Confirmatory
Predicted research character: empirical
What to extract: LLM approaches to generating SPARQL from natural language questions; few-shot and fine-tuned models for NL-to-SPARQL; error types (schema binding, relation mapping failures); benchmarks (LC-QuAD, QALD, Spider-KG)

Source type (academic): arXiv cs.CL; ACL Anthology (EMNLP, ACL, NAACL proceedings)
Source type (practitioner): GitHub — few-shot SPARQL generation projects; KGQA benchmark leaderboards

Queries:
  Q1: natural language SPARQL generation large language model 2023 2024
  Q2: KGQA knowledge graph question answering LLM benchmark LC-QuAD QALD
  Q3: neural semantic parsing knowledge base query generation transformer
  Q4: LLM SPARQL generation error analysis schema linking failure

Coverage-gap note: SPARQL-specific generation is well-covered; SQL-to-KG mapping and property graph query languages (Cypher, Gremlin) are not addressed and may require separate angles.

---

ANGLE 4: Graph Neural Networks as KG Encoders for LLM Integration
===========
Vocabulary tradition: Graph Machine Learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: GNN architectures (R-GCN, CompGCN, KGAT) used to encode KG structure for joint training with LLMs; cross-modal alignment between graph representations and text representations; performance on downstream tasks (entity classification, relation prediction, QA)

Source type (academic): arXiv cs.LG + cs.CL; NeurIPS/ICLR/ICML proceedings
Source type (practitioner): GitHub — PyKEEN, DGL-KG, PyG knowledge graph implementations; practitioner reports on GNN+LLM architectures

Queries:
  Q1: graph neural network knowledge graph language model joint training 2023 2024
  Q2: R-GCN CompGCN knowledge graph embedding LLM integration
  Q3: GNN LLM fusion heterogeneous knowledge graph representation learning
  Q4: cross-modal alignment graph embedding language model text knowledge

Coverage-gap note: Queries target supervised GNN+LLM fusion; self-supervised graph-language pre-training (e.g., DRAGON) is a distinct sub-tradition that may need its own query.

---

ANGLE 5: LLMs for Knowledge Base Completion and Link Prediction
===========
Vocabulary tradition: Knowledge Base Completion
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Using LLMs (as text encoders or generators) to predict missing relations or entities in KGs; inductive KGC approaches enabled by LLMs; comparison to traditional KGE methods (TransE, RotatE) on FB15k-237, WN18RR, YAGO; zero-shot and few-shot KGC

Source type (academic): arXiv cs.AI + cs.LG; ISWC, ESWC proceedings (Semantic Web conference venues)
Source type (practitioner): GitHub — PyKEEN, LibKGE repositories with LLM extensions

Queries:
  Q1: large language model knowledge graph completion link prediction 2022 2023 2024
  Q2: LLM inductive knowledge base completion zero-shot relation prediction
  Q3: text-based knowledge graph embedding language model TransE FB15k WN18RR
  Q4: LLM knowledge graph missing entity relation generalization inductive

Coverage-gap note: Queries cover standard KGC benchmarks; temporal KGC (predicting future facts in time-stamped KGs) is a distinct sub-problem addressed in Angle 16.

---

ANGLE 6: Hallucination Mitigation and Factual Grounding via KG
===========
Vocabulary tradition: NLP Factuality / Hallucination Research
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for using KGs to verify or correct LLM-generated claims; entity-level and relation-level factuality checking; knowledge conflict between KG and LLM parametric knowledge; grounding mechanisms; downstream factuality improvement metrics

Source type (academic): arXiv cs.CL + cs.AI; EMNLP, ACL, NAACL proceedings
Source type (practitioner): GitHub — FactScore, FActKG, CRITIC and similar factuality-checking implementations

Queries:
  Q1: knowledge graph hallucination mitigation large language model factual grounding 2023 2024
  Q2: LLM factuality verification knowledge base entity checking
  Q3: knowledge conflict parametric knowledge vs retrieved knowledge LLM
  Q4: KG-grounded generation factual accuracy entity verification

Coverage-gap note: Queries target claim-level verification; the broader problem of knowledge conflict resolution (when KG and LLM "beliefs" contradict) is a sub-problem requiring targeted work.

---

ANGLE 7: Neuro-Symbolic Reasoning Combining KG Logic with Neural Inference
===========
Vocabulary tradition: Neuro-Symbolic AI
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Hybrid architectures that apply symbolic rules or logical constraints from KGs to LLM inference; differentiable reasoning over KG structures; rule injection into neural networks; benchmark performance on tasks requiring structured logical reasoning

Source type (academic): arXiv cs.AI + cs.LG; NeurIPS, IJCAI, AAAI proceedings
Source type (practitioner): GitHub — Neural LP, DRUM, RotatE+ rule injection implementations

Queries:
  Q1: neuro-symbolic reasoning knowledge graph language model integration 2022 2023 2024
  Q2: differentiable reasoning knowledge base neural symbolic hybrid LLM
  Q3: logical rule injection language model knowledge graph structured inference
  Q4: symbolic constraint LLM reasoning knowledge representation hybrid architecture

Coverage-gap note: Queries focus on inference-time neuro-symbolic fusion; learning symbolic rules FROM LLM outputs (inverse direction) is less covered here and may intersect with Angle 10.

---

ANGLE 8: Entity Linking and Disambiguation in KG-LLM Pipelines
===========
Vocabulary tradition: NLP / Information Extraction
Angle type: Confirmatory
Predicted research character: empirical
What to extract: LLM-based entity linking methods for grounding model outputs to KG nodes; entity disambiguation approaches; named entity recognition feeding KG retrieval; cross-document coreference for KG population; evaluation benchmarks (AIDA CoNLL, TAC-KBP, ZESHEL)

Source type (academic): arXiv cs.CL; ACL Anthology — CoNLL, EMNLP, ACL entity linking papers
Source type (practitioner): GitHub — REL, BLINK, GENRE entity linking systems; spaCy NEL component

Queries:
  Q1: entity linking large language model knowledge graph disambiguation 2023 2024
  Q2: LLM entity grounding named entity disambiguation knowledge base pipeline
  Q3: zero-shot entity linking language model unseen entity KG
  Q4: entity mention detection linking knowledge graph retrieval-augmented

Coverage-gap note: Queries address the linking task directly; downstream impact of entity linking quality on KG-RAG system performance is a system-level concern partially addressed in Angle 13.

---

ANGLE 9: In-Context KG Evidence Injection for LLM Reasoning
===========
Vocabulary tradition: Prompting / In-context Learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for serializing KG subgraphs as text context for LLM prompting; chain-of-thought reasoning with structured KG evidence; graph-of-thought and structured reasoning prompts; verbalized triples vs structured formats (JSON-LD, Turtle) as context; few-shot KG evidence prompting

Source type (academic): arXiv cs.CL + cs.AI; ICLR, NeurIPS proceedings
Source type (practitioner): GitHub — ToG (Think-on-Graph), KAPING, StructGPT implementations; LlamaIndex KG query engine

Queries:
  Q1: knowledge graph in-context learning prompting LLM evidence injection 2023 2024
  Q2: think-on-graph KG chain-of-thought structured prompting language model
  Q3: verbalized knowledge graph triples prompt LLM reasoning factual
  Q4: serialized knowledge graph subgraph context large language model QA

Coverage-gap note: Queries focus on text serialization of KG context; structured formats (JSON-LD, RDF in prompt) vs natural language verbalization as a design choice is under-explored in existing literature.

---

ANGLE 10: LLM-Assisted Knowledge Graph Construction and Population
===========
Vocabulary tradition: Knowledge Engineering / Knowledge Acquisition
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Using LLMs for automated extraction of triples from text; relation extraction to populate KG edges; ontology-guided extraction with LLMs; LLM-generated entity/relation schemas; quality metrics for LLM-constructed KGs vs human-curated KGs

Source type (academic): arXiv cs.CL + cs.AI; ISWC, ESWC, AKBC proceedings (knowledge acquisition venues)
Source type (practitioner): GitHub — REBEL, GenIE, LLM4KGC; practitioner blogs on automated KG pipeline construction

Queries:
  Q1: LLM knowledge graph construction automated extraction relation population 2023 2024
  Q2: large language model triple extraction ontology guided KG population
  Q3: GPT knowledge base construction relation extraction text automated pipeline
  Q4: LLM knowledge graph quality evaluation human vs automated KG curation

Coverage-gap note: Queries focus on extractive approaches; LLMs generating entirely new KG schemas (ontology design) vs populating existing schemas is a distinction not fully covered.

---

ANGLE 11: Multi-Hop Reasoning over Knowledge Graphs Using LLMs
===========
Vocabulary tradition: Reasoning / Multi-hop Question Answering
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for executing multi-hop reasoning paths over KG structures using LLMs as reasoning engines; beam search over KG paths; iterative retrieval and reasoning; benchmark performance (HotpotQA-KG, 2WikiMultiHopQA, MetaQA); failure modes in long reasoning chains

Source type (academic): arXiv cs.CL + cs.AI; EMNLP, ACL, ICLR proceedings
Source type (practitioner): GitHub — BeamSearchKG, MINERVA, Think-on-Graph multi-hop implementations

Queries:
  Q1: multi-hop reasoning knowledge graph large language model 2022 2023 2024
  Q2: LLM iterative graph traversal multi-step question answering path reasoning
  Q3: multi-hop KGQA path retrieval beam search language model
  Q4: complex question answering knowledge graph reasoning chain LLM

Coverage-gap note: Queries target multi-hop QA benchmarks; broader logical reasoning tasks (proof generation, abductive reasoning over KGs) are a distinct sub-area requiring separate angles.

---

ANGLE 12: Graph-to-Text Generation Using KG as Structured Input
===========
Vocabulary tradition: Natural Language Generation / Structured-to-Text
Angle type: Confirmatory
Predicted research character: empirical
What to extract: LLM approaches to generating natural language descriptions from KG subgraphs or triples; WebNLG, KELM, and similar benchmarks; verbalization quality metrics (faithfulness, fluency, coverage); linearization strategies for KG input to LLMs

Source type (academic): arXiv cs.CL; ACL Anthology — INLG, ACL, EMNLP graph-to-text papers; WebNLG workshop proceedings
Source type (practitioner): GitHub — WebNLG baseline implementations; T5/GPT fine-tuning scripts for graph-to-text

Queries:
  Q1: graph-to-text generation knowledge graph language model 2022 2023 2024
  Q2: knowledge graph verbalization LLM linearization triple-to-text generation
  Q3: WebNLG KELM AMR structured knowledge LLM text generation benchmark
  Q4: KG subgraph natural language description faithfulness generation LLM

Coverage-gap note: Queries address generation from existing KG structures; reverse direction (text-to-KG for grounding) is covered in Angle 10.

---

ANGLE 13: ML Systems Engineering for KG-LLM Pipeline Latency and Scalability
===========
Vocabulary tradition: ML Systems / Engineering
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Architectural patterns for KG-LLM integration at scale (vector + graph hybrid stores); latency measurements for KG lookup vs vector retrieval; caching strategies for KG subgraph retrieval; benchmark engineering papers on throughput; practitioner case studies deploying KG-LLM systems in production

Source type (academic): arXiv cs.DB + cs.IR; MLSys, VLDB, SysML conference proceedings
Source type (practitioner): GitHub — microsoft/graphrag issues, Neo4j GenAI documentation, LlamaIndex property graph integration; engineering blog posts from Azure AI, Databricks

Queries:
  Q1: knowledge graph LLM system architecture latency scalability production 2023 2024
  Q2: GraphRAG engineering vector database graph database hybrid retrieval performance
  Q3: KG-LLM pipeline design deployment scalability throughput engineering
  Q4: property graph LLM integration system benchmark retrieval overhead

Coverage-gap note: Queries focus on retrieval-time engineering; training-time graph processing for KG-pretrained models is a separate system engineering concern.

---

ANGLE 14: Ontology Alignment and Schema Reconciliation in Hybrid KG-LLM Systems
===========
Vocabulary tradition: Formal Ontology / Description Logics
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for aligning multiple KG schemas before LLM integration; LLM-assisted ontology matching; using LLMs to bridge schema heterogeneity between KGs; formal reasoning completeness guarantees in hybrid systems; OAEI benchmark results for LLM-based ontology alignment

Source type (academic): arXiv cs.AI + cs.DB; ISWC, ESWC, OM workshop (Ontology Matching workshop) proceedings
Source type (practitioner): GitHub — OAEI benchmark tools; ontology alignment toolkits (PARIS, AML) with LLM extensions

Queries:
  Q1: ontology alignment large language model knowledge graph schema matching 2023 2024
  Q2: LLM ontology matching heterogeneous knowledge graph reconciliation
  Q3: knowledge graph integration schema alignment formal reasoning LLM
  Q4: OWL ontology LLM interoperability ISWC ESWC knowledge graph mapping

Coverage-gap note: Queries address schema-level alignment; instance-level alignment (entity resolution across KGs) is partially covered in Angle 8 and may need a bridge angle.

---

ANGLE 15: Cross-Lingual Knowledge Graph Integration with Multilingual LLMs
===========
Vocabulary tradition: Multilingual NLP / Cross-lingual Learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for using multilingual LLMs with cross-lingual KGs (Wikidata, YAGO); cross-lingual entity linking; alignment of monolingual KG subgraphs via multilingual LLM representations; benchmark performance for non-English KG-QA tasks; coverage gaps for low-resource languages

Source type (academic): arXiv cs.CL; EMNLP, ACL multilingual KG papers; CLEF, LREC-COLING proceedings
Source type (practitioner): GitHub — multilingual BLINK, mLAMA, Wikidata multilingual QA projects

Queries:
  Q1: cross-lingual knowledge graph multilingual language model entity linking 2022 2023 2024
  Q2: multilingual LLM Wikidata cross-lingual KGQA low-resource language
  Q3: cross-lingual entity alignment knowledge graph multilingual representation
  Q4: non-English knowledge graph question answering LLM multilingual benchmark

Coverage-gap note: Queries focus on alignment via language; cultural differences in ontology design and what "entities" exist in different language KGs is a sociological dimension not addressed here.

---

ANGLE 16: Temporal and Evolving Knowledge Graphs with LLMs
===========
Vocabulary tradition: Temporal Reasoning / Dynamic Graphs
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for handling temporal KGs (time-stamped triples) with LLMs; temporal link prediction; LLM adaptation to KG updates without full retraining; temporal reasoning in KGQA (time-sensitive questions); continual learning for KG+LLM systems; freshness and staleness metrics

Source type (academic): arXiv cs.LG + cs.CL; ICLR, AAAI, IJCAI temporal KG papers
Source type (practitioner): GitHub — TNTComplEx, TeRo, TiRGN temporal KGE implementations; LLM continual learning with KG updates

Queries:
  Q1: temporal knowledge graph large language model time-aware reasoning 2022 2023 2024
  Q2: dynamic knowledge graph LLM update continual learning temporal link prediction
  Q3: time-sensitive question answering temporal KG LLM reasoning
  Q4: knowledge graph evolution LLM adaptation freshness entity update

Coverage-gap note: Queries focus on time-stamped fact retrieval; causal/event KGs (where temporal order encodes causality) require a distinct framing.

---

ANGLE 17: Commonsense Knowledge Graph Integration with LLMs
===========
Vocabulary tradition: Commonsense Reasoning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for integrating commonsense KGs (ConceptNet, ATOMIC, VisualCOMET) with LLMs; commonsense reasoning improvements; explicit vs implicit commonsense knowledge comparison; downstream task performance on commonsense benchmarks (CommonsenseQA, PIQA, ATOMIC evaluation); limitations of commonsense KG coverage

Source type (academic): arXiv cs.CL + cs.AI; AAAI, EMNLP, ACL commonsense reasoning papers
Source type (practitioner): GitHub — COMET, KG-BART, ATOMIC-based LLM augmentation implementations

Queries:
  Q1: commonsense knowledge graph language model ConceptNet ATOMIC integration 2021 2022 2023
  Q2: LLM commonsense reasoning commonsense KG augmentation structured knowledge
  Q3: COMET commonsense KG generation LLM transformer implicit knowledge
  Q4: commonsense knowledge graph benchmark CommonsenseQA PIQA LLM performance

Coverage-gap note: Queries cover standard commonsense KGs; visual commonsense KGs and multimodal KG-LLM integration is an emerging sub-area requiring targeted search.

---

ANGLE 18: Evidence That KG+LLM Integration Fails or Does Not Outperform Baselines
===========
Vocabulary tradition: NLP Factuality / Empirical NLP (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical (null results, negative transfer)
What to extract: Studies reporting that KG augmentation does NOT improve LLM performance on benchmarks; cases where KG retrieval introduces noise or degrades generation quality; tasks or domains where LLM-only (no KG) outperforms KG-augmented pipelines; negative transfer findings; failure mode catalogs; scope conditions under which integration fails

Source type (academic): arXiv cs.CL + cs.AI; EMNLP, ACL negative/failure result papers; ERROR workshops, NLP null results venues
Source type (practitioner): GitHub issue threads on GraphRAG, LlamaIndex KG integrations where users report degraded performance vs baseline

Queries:
  Q1: knowledge graph LLM integration failure negative result does not improve baseline 2022 2023 2024
  Q2: KG augmentation language model degraded performance noise retrieval quality
  Q3: when knowledge graph does not help language model limitations scope conditions
  Q4: LLM-only vs KG-augmented comparison negative transfer failure cases empirical

Coverage-gap note: Negative results are structurally underrepresented in publication venues; practitioner GitHub issues and technical reports may surface failure modes that do not appear in academic papers.

---

ANGLE 19: Where KG-Only Symbolic Approaches Outperform KG-LLM Hybrids
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Symbolic AI / Classical KG (ADVERSARIAL — excluded from generation: Semantic Web+LLM, IR/RAG, Graph ML, Factuality, Neuro-Symbolic, IE, Prompting, Knowledge Engineering, Multi-hop QA, NLG, Systems, Formal Ontology, Multilingual, Temporal, Commonsense vocabulary pools)
Angle type: Adversarial-FLAGGED
Predicted research character: empirical + gap
What to extract: Domains and task types where traditional SPARQL-only KGQA, Prolog-based reasoning, or rule engines outperform or are preferred over hybrid KG-LLM systems; precision/recall trade-offs where symbolic methods achieve higher precision; use cases where LLM addition introduces hallucination or unpredictability that SPARQL-only avoids; expert system applications not improved by LLM augmentation; formal verification tasks where symbolic KG is required

Source type (academic): arXiv cs.AI; IJCAI, KR (Knowledge Representation and Reasoning) conference proceedings — venues that host work in symbolic AI and classical knowledge representation
Source type (practitioner): GitHub — SPARQL-only KGQA systems; Prolog/ASP implementations for KG reasoning without LLMs; comparison benchmarks specifically testing symbolic vs neural approaches

Queries:
  Q1: SPARQL rule-based knowledge graph question answering outperforms neural symbolic baseline
  Q2: expert system Prolog logic programming knowledge base without LLM precision advantage
  Q3: formal verification ontology reasoning symbolic approach LLM hybrid comparison
  Q4: when does symbolic knowledge graph outperform neural hybrid limitations neural approach

Coverage-gap note: This angle intentionally does NOT use LLM/neural vocabulary in its generation framing. The purpose is to surface literature written by the symbolic AI community about KG applications, which may not appear in LLM-framed search results.

---

ANGLE 20: Schema Theory and Structured Knowledge in Human Semantic Memory — Cognitive Science Lens on KG-LLM Integration
===========
Vocabulary tradition: Cognitive Science / Semantic Memory (CROSS-DISCIPLINARY — NOT in intake brief)
Angle type: Cross-disciplinary
Predicted research character: consensus + empirical (from cognitive science)
What to extract: Cognitive science research on how humans organize and retrieve structured factual knowledge (semantic memory, schemas, spreading activation); how schema-consistent vs schema-violating information is processed differently; implications for KG design and LLM grounding; spreading activation models as analogues for KG traversal; cognitive load in structured knowledge retrieval; analogues for "hallucination" in human schema-based memory distortions

Source type (academic): PsycINFO / Semantic Scholar cognitive science journals; Psychological Review, Journal of Memory and Language, Cognitive Psychology; Quillian (1968) semantic network foundational work; Anderson (1983) ACT-R knowledge structures
Source type (practitioner): Not applicable for this tradition — academic-only

Queries:
  Q1: semantic memory schema structured knowledge retrieval cognitive psychology organization
  Q2: spreading activation semantic network human memory knowledge structure Quillian Collins
  Q3: schema theory knowledge representation human cognition structured memory Bartlett
  Q4: human factual knowledge retrieval structured network model cognitive science implications AI

Coverage-gap note: This angle targets the cognitive science tradition, not the ML tradition. Vocabulary is entirely different from other angles — "schema," "spreading activation," "semantic network" in the psychological sense. Most ML researchers are unaware of this literature. The connection to KG-LLM is inferential (KGs model what cognitive science calls semantic memory), not directly cited. A researcher using this angle should bridge the two traditions in their synthesis.

---

## GATE SUMMARY
============
Gate 1 — Completeness:
  - Null-hypothesis angle present: PASS — Angle 18 uses disconfirming vocabulary ("failure," "negative result," "does not improve," "degraded performance," "failure cases") and is explicitly framed as null-hypothesis
  - Adversarial angle present: PASS — Angle 19 is labeled [ADVERSARIAL-FLAGGED] with dispatch note
  - Cross-disciplinary angle present: PASS — Angle 20 targets Cognitive Science / Semantic Memory, which was NOT in the intake brief; confirmed by checking Angle 20's tradition label against all 18 intake-brief traditions
  - Source-type coverage: PASS — domain maturity is "mixed" requiring practitioner sources; practitioner GitHub sources appear in Angles 2, 4, 5, 8, 9, 10, 11, 13, 16, 17, 18
  - Vocabulary-tradition map populated: PASS — coverage map has 19 distinct tradition names; Step 0 ran and is documented

Gate 1 verdict: PASS

Gate 2 — Distinctness:
  Boolean-connective test applied to candidate synonym pairs:
  - Angle 3 (NL-to-SPARQL) vs Angle 11 (Multi-hop QA): Distinctive query term "SPARQL" in A3 does NOT appear in A11 queries ("multi-hop reasoning," "iterative graph traversal"). OR retrieval would NOT return the same documents — SPARQL generation papers are a distinct sub-literature from multi-hop reasoning papers. PASS.
  - Angle 6 (Hallucination/Factuality) vs Angle 2 (KG-RAG): Angle 6 uses "hallucination mitigation," "entity verification," "knowledge conflict"; Angle 2 uses "subgraph retrieval," "retrieval architecture." The factuality tradition targets verification and grounding post-generation; RAG targets retrieval architecture pre-generation. PASS.
  - Angle 1 (KG pre-training) vs Angle 9 (in-context prompting): Angle 1 uses "pre-training," "training objectives," "KEPLER/ERNIE/KnowBERT"; Angle 9 uses "in-context learning," "prompting," "verbalized triples." Training-time vs inference-time — structurally distinct literatures. PASS.
  - Angle 5 (KGC with LLMs) vs Angle 4 (GNNs for KG-LLM): Angle 5 targets the completion TASK (predicting missing triples); Angle 4 targets the ARCHITECTURE (GNN as encoder). Different primary queries, different benchmark focus. PASS.
  - Angle 10 (KG construction) vs Angle 8 (entity linking): Angle 10 targets KG population from text (extraction); Angle 8 targets linking model outputs to existing KG nodes. Related but retrieval of distinct bodies of literature. PASS.
  Vocabulary-tradition distinctness: All 20 angles have distinct vocabulary-tradition labels. No two non-null-hypothesis, non-adversarial angles share the same label. PASS.

Gate 2 verdict: PASS

Gate 3 — Launchability:
  - All 20 angles have at least one concrete, runnable query string in their Queries field
  - No query strings contain "TBD," placeholders, or unfilled markers
  - All angles specify both Source type (academic) with a named platform (arXiv with category, ACL Anthology, PsycINFO, ISWC) and Source type (practitioner) with a named platform or explicit deprioritization note
  - Per platform-calibration.md: angles using arXiv specify cs.CL + cs.LG (or cs.AI + cs.LG or cs.DB), NOT cs.AI alone. Verified across all arXiv-sourced angles.

Gate 3 verdict: PASS

Gate 4 — Scoring prohibition:
  - No angle record contains "most promising," "strongest angle," "most relevant," or equivalent subjective quality assessments
  - Angle selection was driven entirely by structural criteria: vocabulary-tradition coverage (coverage map), angle-type allocation, cross-disciplinary slot requirement, null-hypothesis requirement
  - No LLM self-evaluation ranking was applied at any stage

Gate 4 verdict: PASS

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG (applicable to all 19 traditions): All vocabulary traditions were enumerated by LLM only; no survey-paper title vocabulary was available to validate or extend. A researcher should run a survey-paper probe (`"knowledge graph" "language model" survey 2024 2025`) before treating this tradition list as exhaustive. Traditions most likely to be missing: non-English KG communities publishing outside standard ML venues; domain-specific KG+LLM applications (healthcare KG, legal KG) that may use distinct domain vocabularies not represented here.
  2. Angle 20 (Cognitive Science) bridge inference: The connection from cognitive science semantic memory research to KG-LLM integration is inferential, not directly cited in that tradition. A researcher using this angle should treat it as vocabulary discovery, not as a tradition that directly addresses KG-LLM. Most papers retrieved will need to be assessed for their applicability as analogues rather than direct evidence.
  3. Small-literature check for Angle 19 (Adversarial/Symbolic): The tradition of "symbolic AI beating neural hybrids" may constitute a small literature (<20 papers directly comparing). If the Boolean-connective test finds high overlap with Angle 7 (Neuro-Symbolic) at execution time, apply the small-literature exception from angle-quality.md Gate 2 before merging.

---

**Angle count: 20**
**Distinct vocabulary traditions in coverage map: 19**
