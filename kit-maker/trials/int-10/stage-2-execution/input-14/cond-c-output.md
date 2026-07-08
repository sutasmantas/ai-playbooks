# Angle-Gen-Kit Output — Condition C
**Input ID:** 14
**Topic:** How to build RAG systems that work well in practice
**Date:** 2026-07-05

---

## INTAKE BRIEF
============
Topic: How to build Retrieval-Augmented Generation (RAG) systems that perform reliably in production and practical deployment

Anchor vocabulary: "RAG systems" (LLM/ML-systems tradition), "work well in practice" (practitioner/deployment framing — scope signal indicating interest in deployment quality, not purely theoretical performance)

Candidate vocabulary traditions:
  1. Neural information retrieval — dense retrieval, sparse retrieval (BM25), hybrid retrieval, bi-encoder, cross-encoder, passage retrieval, BEIR benchmark, open-domain QA, re-ranking
  2. LLM grounding and generation — retrieval-augmented generation, grounded generation, hallucination reduction, factual consistency, context window utilization, knowledge-augmented LLMs, lost-in-the-middle
  3. MLOps / AI infrastructure — vector databases, embedding models, chunking, indexing, pipeline optimization, latency, throughput, production ML, approximate nearest neighbor
  4. Enterprise information management — enterprise search, knowledge bases, document management, structured vs. unstructured data, domain-specific deployment
  5. NLP evaluation and benchmarking — faithfulness evaluation, answer relevance, RAGAS, ARES, TruLens, RAG triad, automated evaluation metrics

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure in the prompt; "how to build" asks for the space of approaches and best practices, not a specific A-vs-B comparison)

Scope markers: "in practice" — practitioner/deployment focus; excludes purely theoretical or purely academic benchmark RAG systems
  Inferred scope: any RAG system design decision affecting real-world performance, including retrieval quality, generation quality, latency, maintainability, and evaluation overhead

Known exclusions: None stated

Domain maturity estimate: mixed
  Basis: RAG has substantial academic literature (Lewis et al. 2020 REALM/RAG, BEIR, ACL papers) AND a very active practitioner community (LangChain, LlamaIndex, Haystack, numerous engineering blogs, GitHub repos). Both produce relevant content; practitioner sources likely contain empirical failure-mode knowledge absent from academic literature.

Survey paper status: not checked — Source B unavailable

Source B status: UNAVAILABLE — MODERATE (Source A + Source C together produced 5 distinct vocabulary traditions, exceeding the ≥2 threshold for MODERATE severity)

Absent-term signal (Source C — terms the user did NOT use):
  - "dense retrieval" (key IR term)
  - "hallucination" (key quality/failure term)
  - "faithfulness" (key evaluation term)
  - "vector database" (key infrastructure term)
  - "chunking" (key preprocessing term)
  - "reranking" (key pipeline optimization term)
  - "embedding" (key representation term)
  Interpretation: User entered from a practitioner framing ("build systems that work") rather than academic framing. Absent terms suggest the user may be unfamiliar with the academic/IR vocabulary cluster — angles should bridge both vocabularies.

---

## INTAKE GATE CHECK

- [x] Topic field populated (not TBD)
- [x] Candidate vocabulary traditions has ≥2 entries (5 traditions identified)
- [x] Question type classified: EXPLORATORY

Gate: PASS — proceeding to angle generation.

---

## COVERAGE MAP
============
Tradition 1: Neural information retrieval
  Representative terms: dense retrieval, BM25, hybrid retrieval, bi-encoder, cross-encoder, BEIR, passage retrieval, reranking
  Planned angle slots: A1 (Confirmatory — retrieval architectures), A6 (Confirmatory — query processing and reranking)
  Gap flag: No — two angle slots planned

Tradition 2: LLM grounding and generation
  Representative terms: RAG, grounded generation, hallucination, faithfulness, context window, lost-in-the-middle, factual consistency
  Planned angle slots: A2 (Confirmatory — context utilization and faithfulness), A7 (Confirmatory — advanced architectures: Self-RAG, FLARE, multi-hop), A10 (Confirmatory — RAG vs. fine-tuning)
  Gap flag: No — three angle slots planned

Tradition 3: MLOps / AI infrastructure
  Representative terms: vector databases, embedding models, approximate nearest neighbor, chunking, indexing, latency, throughput, production ML
  Planned angle slots: A3 (Confirmatory — chunking and preprocessing), A4 (Confirmatory — vector infrastructure), A9 (Confirmatory — production reliability and observability)
  Gap flag: No — three angle slots planned

Tradition 4: Enterprise information management
  Representative terms: enterprise search, knowledge base, domain adaptation, access control, document management, specialized domains (legal, medical, code)
  Planned angle slots: A8 (Confirmatory — domain-specific and enterprise RAG)
  Gap flag: Partial — one slot planned; multi-industry breadth may require additional depth in a follow-up pass

Tradition 5: NLP evaluation and benchmarking
  Representative terms: RAGAS, ARES, TruLens, faithfulness metric, context recall, answer relevance, end-to-end RAG evaluation
  Planned angle slots: A5 (Confirmatory — RAG evaluation frameworks)
  Gap flag: No

Additional traditions (LLM-generated, not from user anchor vocabulary):
  Tradition 6: AI systems economics and efficiency — cost per query, token optimization, semantic caching, cost-quality tradeoff
  Planned angle slot: A11 (Confirmatory)
  Gap flag: No

Traditions NOT yet represented in the planned list:
  "All traditions from intake brief have at least one angle slot"

Cross-disciplinary slot (required):
  Target tradition: Database systems and query optimization
  Basis for selection: Vector search and ANN indexing are database problems; DB systems literature has deep theory on indexing (HNSW, IVF, LSH), query optimization, and storage-compute tradeoffs that appears in ACM SIGMOD/VLDB venues not indexed in standard NLP/ML search paths. RAG practitioners often reinvent solutions already solved in DB theory.

---

## TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Neural information retrieval): Dense, sparse, and hybrid retrieval for RAG
Slot A2 (Confirmatory — LLM grounding and generation): Context utilization and faithfulness
Slot A3 (Confirmatory — Text processing and document engineering): Chunking and preprocessing
Slot A4 (Confirmatory — AI/ML infrastructure): Vector databases and embedding models
Slot A5 (Confirmatory — NLP evaluation and benchmarking): RAG evaluation frameworks
Slot A6 (Confirmatory — Query processing and retrieval optimization): Reranking and query expansion
Slot A7 (Confirmatory — LLM agent architectures): Advanced and agentic RAG architectures
Slot A8 (Confirmatory — Enterprise information management): Domain-specific and enterprise RAG
Slot A9 (Confirmatory — ML systems reliability engineering): Production monitoring and observability
Slot A10 (Confirmatory — Model adaptation research): RAG vs. fine-tuning selection
Slot A11 (Confirmatory — AI systems economics): Cost optimization and semantic caching
Slot N1 (Null-hypothesis): When RAG fails or degrades performance
Slot D1 (Adversarial): NOT FROM: neural IR, LLM grounding, MLOps, enterprise information, NLP evaluation, query optimization, agent architectures, model adaptation, AI economics — starting vocabulary: software engineering / systems complexity
Slot C1 (Cross-disciplinary): Database systems and query optimization

---

## ANGLE LIST

---

ANGLE 1: Dense, Sparse, and Hybrid Retrieval Architectures for RAG
===========
Vocabulary tradition: Neural information retrieval
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Controlled comparisons of retrieval methods (BM25, dense bi-encoder, hybrid), recall and precision at k, latency tradeoffs, conditions where each method outperforms the others, benchmark datasets (BEIR, MSMARCO, NQ)

Source type (academic): arXiv cs.CL + cs.IR
Source type (practitioner): GitHub — search "RAG retrieval benchmark" sorted by most starred; issue threads on BEIR evaluation repositories

Queries:
  Q1: dense retrieval BM25 hybrid RAG retrieval performance comparison benchmark 2024 2025
  Q2: bi-encoder cross-encoder sparse dense hybrid retrieval-augmented generation recall
  Q3: BEIR benchmark retrieval methods open-domain question answering evaluation RAG

Coverage-gap note: These queries focus on document-level and passage-level retrieval; table/code/multimodal retrieval within RAG pipelines is a separate facet not covered here.

---

ANGLE 2: LLM Context Utilization, Faithfulness, and Hallucination in RAG
===========
Vocabulary tradition: LLM grounding and generation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Faithfulness rates, hallucination rates with and without retrieval, lost-in-the-middle effects, context window saturation effects, how retrieval quality propagates to generation quality

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): LangChain/LlamaIndex engineering blogs; Hacker News threads on RAG hallucination (vocabulary signal only — not recall evidence)

Queries:
  Q1: retrieval-augmented generation faithfulness hallucination factual grounding LLM 2024 2025
  Q2: RAG context window utilization lost in the middle generation quality empirical
  Q3: grounded generation factual consistency retrieval augmented language model context attribution

Coverage-gap note: Generation quality measured at the system output level; intermediate chain-of-thought faithfulness and citation attribution are separate sub-facets not directly covered.

---

ANGLE 3: Document Chunking and Preprocessing Strategies
===========
Vocabulary tradition: Text processing and document engineering
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Chunking method comparisons (fixed-size, sentence, semantic, recursive, proposition-level), metadata enrichment effects, preprocessing pipeline decisions, impact on downstream retrieval quality

Source type (academic): arXiv cs.CL + cs.IR
Source type (practitioner): GitHub — LlamaIndex and LangChain text splitter documentation and issues; practitioner blog posts comparing chunking strategies

Queries:
  Q1: document chunking strategies RAG retrieval quality comparison 2024 2025
  Q2: text segmentation passage splitting proposition indexing retrieval-augmented generation
  Q3: metadata enrichment document preprocessing chunk overlap RAG performance impact

Coverage-gap note: PDF/HTML extraction quality and its effect on downstream chunking is a practical failure mode not covered by these queries — likely lives in practitioner blogs rather than academic literature.

---

ANGLE 4: Vector Databases and Embedding Infrastructure for Production RAG
===========
Vocabulary tradition: AI/ML infrastructure
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Vector database comparisons (Weaviate, Qdrant, Pinecone, Milvus, pgvector), embedding model selection criteria, indexing strategy choices, infrastructure design patterns, production scaling characteristics

Source type (academic): arXiv cs.IR + cs.DB; IEEE ICDE proceedings
Source type (practitioner): GitHub repositories for major vector DB projects (sorted by most starred/most forked); vendor technical benchmarks and documentation

Queries:
  Q1: vector database performance comparison RAG production deployment 2024 2025
  Q2: embedding model selection sentence transformers retrieval quality RAG downstream
  Q3: approximate nearest neighbor indexing HNSW IVF vector search production RAG latency

Coverage-gap note: Multi-modal embeddings (image, code, structured data) and their integration into vector infrastructure are not covered by these queries.

---

ANGLE 5: RAG Evaluation Frameworks, Metrics, and Automated Assessment
===========
Vocabulary tradition: NLP evaluation and benchmarking
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evaluation framework designs (RAGAS, ARES, TruLens), metric validity (do automated metrics correlate with human judgments?), the RAG evaluation triad (faithfulness, answer relevance, context recall), benchmark limitations

Source type (academic): arXiv cs.CL + cs.LG; ACL Anthology (evaluation track)
Source type (practitioner): GitHub — RAGAS and ARES repositories (issues, discussion, examples)

Queries:
  Q1: RAGAS ARES TruLens RAG evaluation framework faithfulness relevance metrics 2024 2025
  Q2: retrieval-augmented generation end-to-end automated evaluation benchmark human correlation
  Q3: context recall answer relevance faithfulness RAG triad evaluation automated LLM-as-judge

Coverage-gap note: Evaluation of RAG under distribution shift (queries outside training domain) and adversarial evaluation are not directly covered here — see Angle N1 for disconfirming coverage.

---

ANGLE 6: Query Expansion, Reranking, and Pre-Retrieval Optimization
===========
Vocabulary tradition: Query processing and retrieval optimization
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Query rewriting approaches, HyDE (hypothetical document embeddings), step-back prompting effects, multi-query retrieval, cross-encoder reranking performance, conditions where these techniques add vs. do not add value

Source type (academic): arXiv cs.CL + cs.IR
Source type (practitioner): Technical blog posts from LlamaIndex, LangChain engineering; GitHub implementations of HyDE and multi-query approaches

Queries:
  Q1: query expansion rewriting hypothetical document embeddings HyDE RAG accuracy 2024 2025
  Q2: step-back prompting multi-query retrieval-augmented generation performance empirical
  Q3: cross-encoder reranker cohere BGE retrieval augmented generation quality improvement

Coverage-gap note: Query routing (routing different query types to different retrieval strategies) is an adjacent technique not covered here — partially covered by Angle A7 (agentic architectures).

---

ANGLE 7: Advanced RAG Architectures — Self-RAG, FLARE, Multi-hop, and Agentic Retrieval
===========
Vocabulary tradition: LLM agent architectures
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Self-RAG (adaptive retrieval based on generation needs), FLARE (forward-looking active retrieval), multi-hop reasoning over retrieved documents, agentic RAG with tool use, iterative retrieval architectures — performance gains, complexity costs, when they outperform naive RAG

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub repositories for Self-RAG, FLARE, LlamaIndex agent pipelines (most starred/most forked)

Queries:
  Q1: Self-RAG FLARE adaptive iterative retrieval generation LLM architecture 2024 2025
  Q2: agentic RAG multi-hop retrieval reasoning LLM agent question answering
  Q3: speculative RAG corrective RAG modular RAG retrieval strategy comparison empirical

Coverage-gap note: Long-context retrieval-free approaches as an alternative to agentic RAG are covered in Angle 10 (RAG vs. fine-tuning), not here.

---

ANGLE 8: Domain-Specific and Enterprise RAG Deployment
===========
Vocabulary tradition: Enterprise information management
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Challenges unique to enterprise deployment (access control, document heterogeneity, regulatory compliance), domain adaptation for legal/medical/financial/code, multi-tenant architectures, practical lessons from production enterprise deployments

Source type (academic): arXiv cs.CL; domain-specific venues (ACL ClinicalNLP, LegalBench proceedings)
Source type (practitioner): Enterprise vendor case studies; technical blog posts from enterprise ML teams; GitHub issues in domain-specific RAG projects

Queries:
  Q1: enterprise RAG deployment knowledge base production domain-specific challenges 2024 2025
  Q2: RAG legal medical financial specialized domain adaptation retrieval generation
  Q3: access control multi-tenant RAG enterprise search document heterogeneity production

Coverage-gap note: Non-English enterprise RAG is a significant gap in both academic literature and practitioner resources; these queries will predominantly return English-language results.

---

ANGLE 9: Production Reliability, Monitoring, and Observability for RAG Systems
===========
Vocabulary tradition: ML systems reliability engineering
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Observability tooling for RAG pipelines (tracing retrieval + generation steps), drift detection, production failure patterns, incident case studies, latency profiling, debugging strategies for end-to-end pipelines

Source type (academic): arXiv cs.SE + cs.LG (LLMops, MLops proceedings)
Source type (practitioner): Technical documentation for LangSmith, Arize, MLflow, Weights & Biases; practitioner blog posts on RAG debugging and monitoring

Queries:
  Q1: RAG production monitoring observability tracing LLMops failure detection 2024 2025
  Q2: retrieval-augmented generation pipeline debugging latency optimization production deployment
  Q3: RAG system reliability latency profiling retrieval generation drift production challenges

Coverage-gap note: Feedback loop design (collecting user signals to improve RAG over time) is an adjacent topic that these queries will partially but not completely cover.

---

ANGLE 10: RAG vs. Fine-tuning vs. Long-Context LLM — Selection Criteria
===========
Vocabulary tradition: Model adaptation research
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Systematic comparisons of when RAG outperforms fine-tuning, when fine-tuning outperforms RAG, when long-context LLMs substitute for RAG, complementarity findings, cost-performance tradeoffs across approaches

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): Technical blog posts with benchmark comparisons; Stack Overflow threads on choosing between RAG and fine-tuning

Queries:
  Q1: RAG versus fine-tuning comparison knowledge injection LLM performance 2024 2025
  Q2: retrieval-augmented generation parameter-efficient fine-tuning PEFT tradeoffs knowledge
  Q3: long-context LLM versus RAG 128k context window knowledge retrieval comparison

Coverage-gap note: The three-way comparison (RAG vs. fine-tuning vs. long-context) is newer than the two-way RAG vs. fine-tuning literature; 2025 sources may have better coverage of the three-way comparison.

---

ANGLE 11: Cost Optimization, Semantic Caching, and RAG Efficiency
===========
Vocabulary tradition: AI systems economics and efficiency
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Token cost reduction strategies, semantic caching designs (caching by query semantic similarity), retrieval efficiency approaches, cost-quality tradeoff quantifications, batching strategies for production RAG

Source type (academic): arXiv cs.LG + cs.SE
Source type (practitioner): GitHub — semantic caching library repositories; cost optimization blog posts from practitioners with production RAG experience

Queries:
  Q1: RAG cost optimization token efficiency semantic caching LLM production 2024 2025
  Q2: retrieval-augmented generation latency throughput efficiency approximate caching
  Q3: RAG inference cost reduction batching embedding reuse production deployment economics

Coverage-gap note: Cost of reindexing when documents update is a practical cost not well-covered by these queries — likely lives in practitioner forums rather than academic literature.

---

ANGLE N1: Evidence That RAG Fails, Degrades Performance, or Does Not Generalize
===========
Vocabulary tradition: Neural IR / LLM systems (disconfirming)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Conditions under which RAG degrades generation quality relative to no-retrieval baseline, irrelevant or noisy retrieval effects on LLM generation, failure modes at each pipeline stage, negative results, scope limitations established empirically, out-of-distribution failures

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub issues on LangChain, LlamaIndex, Haystack reporting production failures; practitioner post-mortems and failure reports

Queries:
  Q1: RAG failure modes negative results does not improve LLM generation 2024 2025
  Q2: retrieval-augmented generation harmful context noise degradation irrelevant retrieval
  Q3: when RAG hurts performance robustness failure hallucination worse than no retrieval

Coverage-gap note: "Failure" in academic literature is often framed differently from "failure" in practitioner experience — the practitioner GitHub/blog source is essential here, not optional.

---

ANGLE D1: ADVERSARIAL — RAG as Accidental Complexity: Systems Perspective on Pipeline Overhead
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Software engineering / systems complexity
Angle type: Adversarial
Predicted research character: consensus
Starting vocabulary (explicitly different from all confirmatory angles): technical debt, pipeline complexity, integration failure, operational overhead, system fragility, cascading failure, maintainability
Excluded terms (NOT used to generate this angle): dense retrieval, faithfulness, RAGAS, vector database, chunking, Self-RAG, fine-tuning, embedding model, reranking

What to extract: Arguments and evidence that RAG introduces unnecessary architectural complexity, that simpler alternatives achieve equivalent practical outcomes, that multi-stage pipeline failures compound across retrieval and generation stages, that maintenance burden exceeds the benefit for many use cases, that the gap between benchmark RAG and production RAG is wider than practitioner literature acknowledges

Source type (academic): arXiv cs.SE + cs.LG; IEEE Software Engineering venues
Source type (practitioner): Hacker News threads critical of RAG complexity; practitioner blog posts advocating simpler alternatives (fine-tuning only, long-context LLMs only)

Queries:
  Q1: RAG pipeline complexity maintenance burden technical debt production systems 2024 2025
  Q2: retrieval augmented generation over-engineering alternative simpler LLM deployment failure cascade
  Q3: long-context LLM replace RAG architecture simplification maintenance cost production

Coverage-gap note: Academic critique of RAG complexity is thin; most adversarial signal will come from practitioner sources. This is expected for this angle and does not indicate low importance.

---

ANGLE C1: Database Systems and Query Optimization Theory Applied to RAG
===========
Vocabulary tradition: Database systems and query optimization
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: Indexing theory for approximate nearest neighbor search (HNSW, IVF, LSH), query optimization analogies from relational DB applied to vector search, storage-compute tradeoffs in vector databases, learned index structures, classical information retrieval theory applied to neural RAG components — contributions from a field NOT typically cited in RAG papers

Source type (academic): ACM SIGMOD, VLDB, ICDE proceedings; arXiv cs.DB
Source type (practitioner): Pinecone, Weaviate, pgvector engineering blog posts (these teams come from DB backgrounds and use DB vocabulary)

Queries:
  Q1: approximate nearest neighbor index HNSW IVF LSH vector search query optimization 2024
  Q2: vector database query optimization learned index structure storage compute tradeoff
  Q3: classical information retrieval theory neural dense retrieval convergence vector indexing RAG

Coverage-gap note: Graph database approaches to RAG (GraphRAG, knowledge graph augmentation) are an adjacent cross-disciplinary angle from graph DB theory that is not covered here and may warrant a separate angle in a follow-up pass.

---

## GATE SUMMARY
============
Gate 1 — Completeness:
  - Null-hypothesis angle present: PASS — Angle N1 contains explicit disconfirming vocabulary ("failure," "does not improve," "degradation," "does not generalize," "hurts performance")
  - Adversarial angle present: PASS — Angle D1 carries ADVERSARIAL-FLAGGED label and dispatch note
  - Cross-disciplinary angle present: PASS — Angle C1 targets "Database systems and query optimization," which was NOT in the intake brief's candidate vocabulary traditions list
  - Source-type coverage: PASS — domain marked "mixed"; practitioner sources assigned to all 14 angles
  - Vocabulary-tradition map populated: PASS — coverage map has 6 distinct traditions (5 from intake brief + 1 cross-disciplinary); each angle has a distinct tradition label

Gate 2 — Distinctness:
  Boolean-connective test applied to highest-overlap pairs:
  - A1 vs. A6: A1 anchors on retrieval method selection (BM25, dense, hybrid architecture); A6 anchors on query-side processing (expansion, HyDE, reranking). Most distinctive terms: A1 uses "BEIR benchmark"; A6 uses "HyDE," "step-back prompting." OR retrieval would return different primary sets. DISTINCT.
  - A2 vs. N1: A2 looks for positive faithfulness evidence; N1 explicitly searches for failure/degradation. Structurally opposed search orientations. DISTINCT.
  - A4 vs. A11: A4 anchors on infrastructure selection (which vector DB, which embedding model); A11 anchors on cost and efficiency economics (token cost, semantic caching). Different facets. DISTINCT.
  - A7 vs. A10: A7 anchors on architectural variants of RAG (Self-RAG, FLARE, multi-hop); A10 anchors on when to use RAG vs. other approaches (fine-tuning, long-context). DISTINCT.
  Vocabulary-tradition distinctness: All 14 angles have unique tradition labels. PASS.

Gate 3 — Launchability:
  - All 14 angles: runnable query strings present (no TBD, no placeholders) — PASS
  - All 14 angles: both academic and practitioner source platforms named specifically — PASS

Gate 4 — Scoring prohibition:
  - No LLM self-evaluation ranking applied during generation — PASS
  - No "this is the strongest angle" or equivalent subjective assessments in angle records — PASS

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all vocabulary traditions were enumerated by LLM only; Source B (survey-paper probe) was unavailable. External validation via survey-paper probe (e.g., search `"RAG" OR "retrieval-augmented generation" survey 2024 2025`) is recommended before accepting the tradition list as complete. Cross-disciplinary traditions beyond Database systems (e.g., cognitive science of information seeking, knowledge graph theory, library and information science) may be absent.
  2. Graph-RAG / knowledge graph augmentation is an emerging sub-tradition that may have grown into a distinct tradition since training cutoff. If a survey paper probe returns "GraphRAG" or "knowledge graph RAG" papers as a distinct cluster, consider adding a dedicated angle.
  3. Angle D1 (Adversarial) will return thin academic literature — most signal will be practitioner. This is structurally expected; the research agent should not interpret sparse academic results as absence of the critique.
  4. Non-English and multilingual RAG is absent from all angles. If the use case has multilingual requirements, a dedicated angle is needed.

---

## SUMMARY STATISTICS

Total angles: 14
Angle types: 11 confirmatory, 1 null-hypothesis, 1 adversarial, 1 cross-disciplinary
Distinct vocabulary traditions in coverage map: 6
Distinct tradition labels in angle list: 14
Domain maturity: mixed (academic + practitioner sources required for all angles)
Source B status: UNAVAILABLE — MODERATE
Expected coverage: MODERATE (LLM self-report only; survey-paper bootstrap recommended before finalizing)
