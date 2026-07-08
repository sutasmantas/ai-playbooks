# Angle Generation — Input 14, Condition B

**Topic:** How to build RAG systems that work well in practice

---

## INTAKE BRIEF (intake.md Steps 1–5)
============

### Step 1 — Sparse-input parsing

| Element | Value |
|---------|-------|
| Target concept | Building Retrieval-Augmented Generation (RAG) systems that perform reliably in real-world / production settings |
| Anchor vocabulary | "RAG systems" (NLP/AI tradition); "work well in practice" (engineering/practitioner framing); "build" (implementation-oriented) |
| Scope signals | "in practice" — practitioner-oriented, implementation-focused, deployment-concerned; "build" — construction/engineering emphasis, not purely theoretical analysis |

### Step 2 — Vocabulary bootstrap

**Source A — LLM translation:**

- "RAG" → also called: Retrieval-Augmented Generation, dense passage retrieval + LLM, retrieval-enhanced language models, knowledge-grounded generation, open-domain QA with retrieval, retrieval-based generation, retrieval-augmented LLMs
- "RAG systems" → also called: retrieval pipelines, document retrieval + generation pipelines, neural retrieval systems, dense retrieval + reader architectures, semantic search + LLM pipelines, knowledge-base QA systems, grounding pipelines
- "work well in practice" → production deployment, real-world performance, system reliability, robustness, deployment challenges, latency/throughput tradeoffs, operational monitoring, failure modes, scalability
- "build" → implement, design, architect, configure, deploy, engineer

**Vocabulary traditions identified:**

1. **NLP / Information Retrieval Research** — DPR (Dense Passage Retrieval), BM25, hybrid retrieval, bi-encoder, cross-encoder, REALM, RAG (Lewis et al. 2020), open-domain QA, reading comprehension, BEIR benchmark, recall@k
2. **ML Systems / LLM Engineering** — RAG pipeline, chunking strategies, embedding models, vector databases, context window utilization, prompt engineering, indexing, LangChain, LlamaIndex, llamaindex
3. **IR / Vector Search Infrastructure** — approximate nearest neighbor (ANN), FAISS, Weaviate, Pinecone, Milvus, Chroma, cosine similarity, semantic search, vector store, HNSW, IVF indexing
4. **MLOps / Software Engineering for AI** — production deployment, latency, throughput, scalability, monitoring, observability, evaluation pipelines, A/B testing, CI/CD for ML, failure detection, data drift
5. **RAG Evaluation / Benchmarking** — RAGAS, faithfulness, groundedness, answer correctness, context precision, context recall, end-to-end RAG evaluation, answer relevance, TREC
6. **Knowledge Grounding / Hallucination Research** — hallucination reduction, factual grounding, knowledge-augmented generation, citation faithfulness, fact verification, factual consistency, confabulation

**Source B:** UNAVAILABLE — running in subagent context without web access.

**Source C — Absent-term signal (terms the user did NOT use):**
- "dense passage retrieval" — core academic term (DPR); user did not use it
- "hallucination" — key failure mode; user did not name it
- "chunking" — key practical engineering parameter not mentioned
- "faithfulness" — a central evaluation metric for RAG quality
- "BEIR" — standard retrieval evaluation benchmark
- "reranking" — a major optimization pattern in production RAG

These absences suggest the user is entering from a high-level practitioner framing, not an academic NLP framing. The query-generation step must compensate by covering all six traditions, not only the NLP-adjacent ones.

### Step 3 — Question-type classification

**EXPLORATORY.** The prompt "how to build RAG systems that work well in practice" does not contain explicit comparison language or intervention-outcome structure. It asks: what approaches, techniques, and design decisions exist for building effective RAG systems? The "in practice" qualifier adds a deployment/reliability dimension but does not define a comparison.

PICO is not applicable at this stage. Use exploratory-search-first at angle generation.

### Step 4 — Populated brief

```
INTAKE BRIEF
============
Topic: How to design, implement, and deploy Retrieval-Augmented Generation (RAG) systems
       that perform reliably in real-world settings — covering retrieval pipeline, generation
       quality, infrastructure, evaluation, and deployment concerns.

Anchor vocabulary: "RAG systems" (NLP/AI tradition), "work well in practice"
                   (engineering/practitioner framing), "build" (implementation-oriented)

Candidate vocabulary traditions:
  1. NLP / Information Retrieval Research — DPR, BM25, hybrid retrieval, REALM, RAG (Lewis et al.
     2020), open-domain QA, BEIR benchmark, recall@k, bi-encoder, cross-encoder
  2. ML Systems / LLM Engineering — RAG pipeline, chunking strategies, embedding models, vector
     databases, context window, prompt engineering, LangChain, LlamaIndex
  3. IR / Vector Search Infrastructure — ANN, FAISS, Weaviate, Pinecone, Milvus, HNSW,
     cosine similarity, vector store, semantic search
  4. MLOps / Software Engineering for AI — production deployment, latency, monitoring,
     observability, failure modes, scalability, A/B testing
  5. RAG Evaluation / Benchmarking — RAGAS, faithfulness, groundedness, answer correctness,
     context precision/recall, end-to-end evaluation
  6. Knowledge Grounding / Hallucination Research — hallucination reduction, factual grounding,
     citation faithfulness, confabulation, knowledge-augmented generation

NOTE: Vocabulary traditions listed here are LLM self-reported. Vocabulary-discovery pass
(pearl-growing from a known anchor paper) is recommended before accepting the angle list
as covering all traditions.

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure; "how to build" = what approaches exist)

Scope markers: "in practice" — practitioner-oriented, implementation-focused, real-world
  deployment concerns; "build" — engineering emphasis.
  Inferred scope: RAG system design and implementation, covering retrieval pipeline, generation,
  evaluation, and deployment. Not limited to a specific domain or model family.

Known exclusions: None stated

Domain maturity estimate: MIXED (academic-heavy on retrieval methods; practitioner-heavy on
  pipeline design and deployment)
  Basis: RAG has a clear academic lineage (Lewis et al. 2020, DPR, REALM) with substantial
  arXiv literature, AND large practitioner production (LangChain docs, LlamaIndex, blog posts,
  GitHub repos). The user's phrasing "work well in practice" signals practitioner-oriented
  intent. Both traditions are active and voluminous. Practitioner sources REQUIRED.

Survey paper status: UNAVAILABLE (Source B cannot run in subagent context)

Source B status: UNAVAILABLE — MODERATE — topic is well-represented in LLM training data;
  Source A + Source C together identified 6 distinct vocabulary traditions. Angle generation
  may proceed. Apply VOCABULARY SELF-REPORT FLAG throughout.
```

### Step 5 — Fallback protocol

Source B unavailable. Severity: MODERATE (6 distinct vocabulary traditions identified via Source A + C). Proceeding with VOCABULARY SELF-REPORT FLAG active.

VOCABULARY SELF-REPORT FLAG: All vocabulary traditions enumerated by LLM only. External validation via survey-paper probe is recommended before accepting this angle list as covering all traditions. Known gap risk: cross-disciplinary traditions not well-represented in LLM training data may be absent.

### Step 6 — Intake gate

- [x] Topic field populated
- [x] ≥2 distinct vocabulary traditions (6 identified)
- [x] Question type classified: EXPLORATORY

Gate: PASS. Proceeding to angle-generation.md.

---

## COVERAGE MAP (angle-generation.md Step 0)
============

```
COVERAGE MAP
============
Tradition 1: NLP / Information Retrieval Research
  Representative terms: DPR, BM25, hybrid retrieval, REALM, BEIR, recall@k, bi-encoder,
                        cross-encoder, open-domain QA
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: ML Systems / LLM Engineering
  Representative terms: RAG pipeline, chunking strategies, embedding models, context window,
                        prompt engineering, LangChain, LlamaIndex
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: IR / Vector Search Infrastructure
  Representative terms: ANN, FAISS, Weaviate, Pinecone, HNSW, cosine similarity, vector store
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: MLOps / Software Engineering for AI
  Representative terms: production deployment, latency, monitoring, failure modes, scalability,
                        observability
  Planned angle slot: Confirmatory A4
  Gap flag: No

Tradition 5: RAG Evaluation / Benchmarking
  Representative terms: RAGAS, faithfulness, groundedness, answer correctness, context
                        precision/recall, end-to-end evaluation
  Planned angle slot: Confirmatory A5
  Gap flag: No

Tradition 6: Knowledge Grounding / Hallucination Research
  Representative terms: hallucination reduction, factual grounding, citation faithfulness,
                        confabulation, factual consistency
  Planned angle slot: Confirmatory A6
  Gap flag: No

Traditions NOT yet represented in the planned list:
  After A1–A6: Advanced RAG orchestration patterns (query decomposition, multi-hop, agentic
  RAG) are not yet covered by A1–A6. Adding Tradition 7.

Tradition 7 (discovered during coverage map): Advanced RAG / Query Orchestration
  Representative terms: query decomposition, HyDE (hypothetical document embedding), FLARE,
                        self-RAG, agentic RAG, multi-hop retrieval, step-back prompting,
                        re-ranking
  Planned angle slot: Confirmatory A7
  Gap flag: Was absent from intake brief; added here.

Cross-disciplinary slot (required):
  Target tradition: Library & Information Science (LIS) / Knowledge Organization
  Basis for selection: LIS has 70+ years of research on information retrieval system design,
  relevance theory, and user information needs that predates and informs neural methods.
  Concepts like relevance judgment, document representation theory, information need modeling,
  and knowledge organization (Dervin's sense-making, Wilson's model, Cranfield paradigm,
  faceted classification) have structural parallels to RAG design decisions. This tradition
  rarely appears in NLP/ML RAG papers but contains theoretically grounded analysis of
  what makes retrieval systems effective for users. Cross-disciplinary slot C1.
```

---

## TYPE ALLOCATIONS (angle-generation.md Step 1)
================

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Tradition 1): NLP / IR Research — retrieval component design
  (DPR, BM25, hybrid retrieval, BEIR benchmark vocabulary)

Slot A2 (Confirmatory — Tradition 2): ML Systems / LLM Engineering — RAG pipeline
  architecture, chunking strategies, embedding selection
  (LangChain, LlamaIndex, chunk size, overlap vocabulary)

Slot A3 (Confirmatory — Tradition 3): IR / Vector Search Infrastructure — embedding
  models and vector store selection
  (ANN, FAISS, Weaviate, HNSW, cosine similarity vocabulary)

Slot A4 (Confirmatory — Tradition 4): MLOps / Software Engineering — production
  deployment, monitoring, failure detection
  (latency, observability, data drift, CI/CD vocabulary)

Slot A5 (Confirmatory — Tradition 5): RAG Evaluation / Benchmarking — evaluation
  frameworks and quality metrics
  (RAGAS, faithfulness, groundedness, context precision vocabulary)

Slot A6 (Confirmatory — Tradition 6): Knowledge Grounding / Hallucination — factual
  accuracy and grounding techniques
  (hallucination reduction, citation faithfulness, factual consistency vocabulary)

Slot A7 (Confirmatory — Tradition 7): Advanced RAG / Query Orchestration — advanced
  pipeline patterns beyond basic retrieve-then-generate
  (HyDE, self-RAG, query decomposition, reranking, multi-hop vocabulary)

Slot N1 (Null-hypothesis): NLP / IR Research — Disconfirming
  "What evidence would show RAG does NOT improve LLM output quality or fails in practice?"
  (failure cases, negative results, when retrieval hurts vocabulary)

Slot D1 (Adversarial): Structured / Symbolic Retrieval Systems
  NOT FROM: Traditions 1–7 (all use neural/embedding/LLM vocabulary)
  Starting vocabulary: SQL retrieval, knowledge graph, SPARQL, structured data grounding,
  relational database QA, entity linking — explicitly excludes embedding, neural, vector,
  dense, and RAG vocabulary

Slot C1 (Cross-disciplinary): Library & Information Science / Knowledge Organization
  Target tradition NOT in intake brief: LIS relevance theory, information seeking models,
  knowledge organization, faceted classification, Cranfield evaluation paradigm
```

Justification for 10 angles: Domain maturity = MIXED with 7 vocabulary traditions. This is a complex multi-tradition topic spanning academic IR research, LLM engineering, infrastructure, MLOps, evaluation, grounding, and advanced patterns. 10 angles with required null-hypothesis, adversarial, and cross-disciplinary slots is within the 5–12 standard range and justified by tradition count.

---

## FULL ANGLE LIST (angle-generation.md Steps 2–4)

---

### ANGLE 1: Retrieval Component Design — Sparse, Dense, and Hybrid Methods
===========

**Vocabulary tradition:** NLP / Information Retrieval Research

**Angle type:** Confirmatory

**Predicted research character:** empirical

**What to extract:** Controlled comparisons of BM25 vs dense retrieval vs hybrid approaches; recall@k and precision metrics; scope conditions under which dense methods outperform sparse; findings on which retrieval architecture performs best in specific domains (legal, medical, general web); BEIR benchmark results as cross-domain generalization evidence.

**Source type (academic):** arXiv cs.CL + cs.IR (NOT cs.AI alone — per platform-calibration.md category override for NLP/IR topics)

**Source type (practitioner):** GitHub — search "RAG retrieval hybrid BM25 dense" sorted by most starred; focus on repos with ≥50 stars and active commit history

**Coverage-gap conditioning note:** No prior traditions covered. Covering the core retrieval methodology angle that academic NLP/IR research has studied most directly.

**Queries:**

Q1: `dense passage retrieval BM25 hybrid RAG performance comparison empirical arXiv cs.CL 2023 2024 2025`

Q2: `BEIR benchmark retrieval augmented generation generalization sparse dense hybrid evaluation`

Q3: `bi-encoder cross-encoder retrieval pipeline recall precision open-domain question answering`

**Coverage-gap note:** These queries cover retrieval algorithm comparison but do not address domain-specific fine-tuning of retrieval models (e.g., medical domain adaptation). That is a separate angle not covered here.

---

### ANGLE 2: RAG Pipeline Architecture — Chunking, Embedding Selection, and Context Assembly
===========

**Vocabulary tradition:** ML Systems / LLM Engineering

**Angle type:** Confirmatory

**Predicted research character:** consensus (practitioner guides dominate; academic coverage thinner)

**What to extract:** Empirically-tested or practitioner-validated guidance on chunk size, overlap, chunking strategy (fixed-size, sentence, semantic, recursive); embedding model selection criteria; context assembly patterns (how chunks are combined into the LLM prompt); framework-specific implementation patterns.

**Source type (academic):** arXiv cs.CL + cs.LG (empirical papers on chunking strategies and embedding model comparison)

**Source type (practitioner):** LlamaIndex documentation and blog; LangChain blog; Towards Data Science / Medium practitioner posts — REQUIRED (practitioner-heavy subtopic)

**Coverage-gap conditioning note:** A1 covered retrieval algorithms. Gap: the engineering pipeline decisions — chunk size, overlap, how text is split and assembled — are not covered by retrieval algorithm papers. This angle targets the "how to build the plumbing" question.

**Queries:**

Q1: `RAG chunking strategy chunk size overlap embedding model selection production performance 2024`

Q2: `LangChain LlamaIndex RAG pipeline implementation best practices context assembly prompt`

Q3: `text splitting recursive character semantic chunking retrieval augmented generation accuracy`

**Coverage-gap note:** Queries focus on static chunking; do not cover dynamic or hierarchical indexing strategies (e.g., parent-child chunk structures, summary + detail hierarchies). That overlap with A7 advanced patterns.

---

### ANGLE 3: Vector Store Infrastructure — Embedding Models and ANN Indexing
===========

**Vocabulary tradition:** IR / Vector Search Infrastructure

**Angle type:** Confirmatory

**Predicted research character:** empirical (benchmarks exist; also some practitioner comparison posts)

**What to extract:** Performance benchmarks comparing vector databases (FAISS, Weaviate, Pinecone, Milvus, Chroma, Qdrant); ANN algorithm comparison (HNSW vs IVF vs flat); latency/recall tradeoffs at different scales; embedding model quality comparison (sentence-transformers, OpenAI, Cohere); cost/performance tradeoffs in managed vs self-hosted vector stores.

**Source type (academic):** arXiv cs.IR + cs.DB; ANN-benchmarks.com results

**Source type (practitioner):** GitHub — ANN-benchmarks repo; vendor comparison blog posts from Weaviate, Pinecone, Qdrant engineering blogs — REQUIRED

**Coverage-gap conditioning note:** A1 covered retrieval algorithms abstractly; A2 covered pipeline architecture. Gap: the storage and indexing infrastructure layer. This angle targets the "what database do I use and why" question — a different decision layer from retrieval algorithm design.

**Queries:**

Q1: `vector database comparison FAISS Weaviate Pinecone Milvus Chroma RAG benchmark latency recall`

Q2: `approximate nearest neighbor HNSW IVF indexing retrieval augmented generation scalability performance`

Q3: `sentence transformer embedding model comparison OpenAI Cohere retrieval quality RAG downstream task`

**Coverage-gap note:** Does not cover multi-modal embeddings (image + text RAG) or sparse + dense hybrid vector stores specifically (that overlaps with A1 hybrid retrieval angle).

---

### ANGLE 4: Production Deployment and Operational Reliability
===========

**Vocabulary tradition:** MLOps / Software Engineering for AI

**Angle type:** Confirmatory

**Predicted research character:** consensus (practitioner-dominated; academic literature sparse for operational RAG specifically)

**What to extract:** Practitioner-documented patterns for deploying RAG in production; latency budgets and optimization techniques; monitoring strategies (what to log, what metrics to track); data freshness and index update patterns; failure detection in retrieval and generation components; operational testing approaches.

**Source type (academic):** arXiv cs.SE + cs.LG (MLOps and software engineering for ML papers); ACM/IEEE software engineering conference proceedings

**Source type (practitioner):** GitHub issues threads in major RAG framework repos (LangChain, LlamaIndex) labeled "production" or "performance"; engineering blogs (Uber, Netflix, LinkedIn AI engineering) — REQUIRED

**Coverage-gap conditioning note:** A1–A3 cover component selection and design. Gap: once you've built the system, how do you run it reliably? This angle covers the operational layer that A1–A3 do not.

**Queries:**

Q1: `RAG production deployment monitoring observability latency failure detection engineering`

Q2: `retrieval augmented generation system reliability testing MLOps data freshness index update`

Q3: `LLM RAG pipeline scalability throughput optimization serving infrastructure 2024 2025`

**Coverage-gap note:** Does not cover cost optimization or budget-aware RAG deployment strategies, which is a practitioner concern not well-represented by these queries.

---

### ANGLE 5: RAG-Specific Evaluation Frameworks and Quality Metrics
===========

**Vocabulary tradition:** RAG Evaluation / Benchmarking

**Angle type:** Confirmatory

**Predicted research character:** empirical (RAGAS paper is empirical; several benchmark papers exist)

**What to extract:** Definition and measurement of RAG-specific metrics (faithfulness, answer relevance, context precision, context recall, groundedness); comparison of automated evaluation frameworks vs human evaluation; correlation between automated metrics and human judgments; evaluation framework tooling (RAGAS, TruLens, DeepEval, Giskard); benchmarking studies comparing RAG configurations.

**Source type (academic):** arXiv cs.CL + cs.IR (RAG evaluation papers); ACL/EMNLP proceedings

**Source type (practitioner):** RAGAS documentation; TruLens/TruEra blog; practitioner posts on RAG evaluation pipelines — REQUIRED

**Coverage-gap conditioning note:** A1–A4 cover component design and operations but not how to measure whether the system is good. This angle covers the measurement methodology layer — absent from all prior angles.

**Queries:**

Q1: `RAGAS RAG evaluation faithfulness answer relevance context precision recall automated metrics 2023 2024`
NOTE: "RAGAS" is a proper noun — SPECIFICITY GATE APPLIED for Q1; run without term expansion. Q2/Q3 use broader vocabulary.

Q2: `retrieval augmented generation evaluation benchmark groundedness factual accuracy human evaluation correlation 2024 2025`

Q3: `end-to-end RAG evaluation pipeline automated testing LLM judge quality metrics production`

**Coverage-gap note:** Does not cover evaluation of RAG in low-resource or non-English settings. Does not cover adversarial evaluation (robustness of RAG to malicious inputs).

---

### ANGLE 6: Hallucination Reduction and Factual Grounding in RAG
===========

**Vocabulary tradition:** Knowledge Grounding / Hallucination Research

**Angle type:** Confirmatory

**Predicted research character:** empirical

**What to extract:** Empirical studies on how retrieval reduces or fails to reduce hallucination; mechanisms by which grounding works (citation generation, faithfulness enforcement, constrained decoding); conditions under which LLMs ignore retrieved context and hallucinate anyway; techniques for improving faithfulness (chain-of-thought with citations, post-generation verification, self-consistency); comparison of RAG grounding vs fine-tuning vs prompting-only approaches.

**Source type (academic):** arXiv cs.CL + cs.AI (hallucination and factuality papers); EMNLP, ACL proceedings

**Source type (practitioner):** GitHub — repos implementing hallucination detection and correction; practitioner posts on citation faithfulness in production

**Coverage-gap conditioning note:** A5 covers evaluation metrics for faithfulness but not the mechanism research. Gap: what techniques actually reduce hallucination and why — the causal/mechanism angle. A5 asks "how do you measure it"; A6 asks "how do you fix it."

**Queries:**

Q1: `retrieval augmented generation hallucination reduction factual accuracy grounding mechanism empirical`

Q2: `RAG LLM faithfulness citation generation factual consistency knowledge-grounded generation`

Q3: `LLM ignores retrieved context hallucination despite retrieval failure mode factual grounding`

**Coverage-gap note:** Does not cover knowledge conflict (when retrieved document contradicts LLM parametric knowledge) as a distinct failure mode. That is a growing sub-topic not fully addressed by these queries.

---

### ANGLE 7: Advanced RAG Patterns — Query Transformation, Re-ranking, and Agentic Retrieval
===========

**Vocabulary tradition:** Advanced RAG / Query Orchestration

**Angle type:** Confirmatory

**Predicted research character:** empirical (several papers on HyDE, self-RAG, FLARE exist)

**What to extract:** Empirical comparisons of advanced retrieval patterns vs naive RAG (query decomposition, HyDE, FLARE, self-RAG, step-back prompting); re-ranking techniques and when they help (cross-encoder re-ranking, Cohere Rerank, ColBERT); multi-hop retrieval for complex questions; agentic RAG patterns (iterative retrieval, tool-augmented retrieval); when advanced patterns add value vs when they add cost without benefit.

**Source type (academic):** arXiv cs.CL + cs.IR (self-RAG, FLARE, HyDE papers specifically; use proper-noun queries for these)

**Source type (practitioner):** LlamaIndex / LangChain advanced RAG tutorials; practitioner comparison blog posts; GitHub repos for advanced RAG frameworks — REQUIRED

**Coverage-gap conditioning note:** A1–A6 cover components and operations of a standard RAG pipeline. Gap: the advanced orchestration patterns that extend beyond basic retrieve-then-generate — query transformation before retrieval, re-ranking after retrieval, iterative/agentic loops. These are a distinct engineering domain.

**Queries:**

Q1: `advanced RAG query decomposition HyDE hypothetical document embedding FLARE self-RAG comparison performance`
NOTE: "HyDE," "FLARE," "self-RAG" are proper nouns — SPECIFICITY GATE APPLIED for these terms. Run targeted queries for each if needed.

Q2: `RAG re-ranking cross-encoder cohere rerank ColBERT retrieval augmented generation improvement`

Q3: `agentic RAG iterative retrieval multi-hop question answering orchestration LLM tool use 2024 2025`

**Coverage-gap note:** Does not cover RAG with structured data (SQL tables, knowledge graphs) — that is covered by the adversarial angle D1. Does not cover RAG with multi-modal inputs (images + text).

---

### ANGLE 8 [NULL-HYPOTHESIS]: When RAG Fails — Negative Results and Scope Limitations
===========

**Vocabulary tradition:** NLP / IR Research — Disconfirming

**Angle type:** Null-hypothesis

**Predicted research character:** empirical (negative results exist but are underrepresented — gap risk)

**What to extract:** Studies showing RAG does NOT improve LLM performance on specific tasks or domains; conditions under which retrieval hurts (e.g., retrieved documents are noisy, off-topic, or contradict LLM knowledge); empirical comparisons where no-RAG outperforms RAG; scope conditions limiting RAG generalization; documented failures in production RAG systems; cases where fine-tuning or prompting-only approaches match or exceed RAG.

**Source type (academic):** arXiv cs.CL + cs.IR (negative result papers; these are underrepresented — expected few results, see predicted research character); ACL/EMNLP negative results workshops

**Source type (practitioner):** HN / Reddit threads discussing RAG failures in production (vocabulary: "RAG doesn't work," "retrieval hurts," "RAG failure") — REQUIRED for failure-mode vocabulary; GitHub issue trackers in LangChain / LlamaIndex tagged with bug/failure

**Coverage-gap conditioning note:** All A1–A7 angles are confirmatory — they assume RAG works and ask how to do it well. N1 asks: what is the evidence that RAG does NOT work, and under what conditions does it fail? This angle requires disconfirming query vocabulary.

**Queries:**

Q1: `RAG retrieval augmented generation failure negative results does not improve performance limitations scope`

Q2: `LLM performance retrieval hurts accuracy no retrieval outperforms RAG comparison negative finding`

Q3: `when does RAG fail noisy retrieval context confusion LLM knowledge conflict production failure mode`

**Coverage-gap note:** Negative results are systematically underrepresented in academic publication. This angle is expected to return fewer high-quality results than confirmatory angles. Absence of papers does not mean RAG always works — it may reflect publication bias.

---

### ANGLE 9 [ADVERSARIAL-FLAGGED]: Structured and Symbolic Retrieval Approaches as Alternatives to Neural RAG
===========

**Vocabulary tradition:** Structured / Symbolic Retrieval Systems

**Angle type:** Adversarial-FLAGGED

**[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]**

**Predicted research character:** empirical (SQL-QA, KG-QA literature is substantial and independent of RAG literature)

**What to extract:** Evidence that structured retrieval (SQL, knowledge graphs, SPARQL) outperforms or matches neural RAG for structured data; cases where symbolic approaches produce more reliable grounding than dense retrieval; Text-to-SQL performance comparisons with RAG; limitations and failure modes of symbolic approaches (to maintain balance); arguments that neural RAG is over-applied where structured retrieval would be more appropriate.

**Source type (academic):** arXiv cs.DB + cs.AI (Text-to-SQL, knowledge graph QA literature — explicitly different ingest categories from RAG literature in cs.CL)

**Source type (practitioner):** GitHub repos for Text-to-SQL tools (Defog/sqlcoder, etc.) sorted by most starred — REQUIRED; practitioner comparison posts

**Generation note:** This angle was generated using explicitly different starting vocabulary — excluding all terms from A1–A7: no use of "RAG," "dense retrieval," "embedding," "vector," "chunking," "neural," "LLM pipeline." Starting vocabulary: SQL, relational database, knowledge graph, SPARQL, entity linking, structured query, symbolic retrieval.

**Queries:**

Q1: `Text-to-SQL structured data retrieval question answering comparison unstructured LLM grounding accuracy`

Q2: `knowledge graph SPARQL question answering structured retrieval vs language model performance enterprise`

Q3: `symbolic retrieval relational database query LLM grounding accuracy reliability comparison 2024 2025`

**Coverage-gap note:** This angle intentionally excludes hybrid approaches (structured + neural RAG) to maintain adversarial independence. If hybrid approaches are important, they require a separate angle in a non-adversarial context.

---

### ANGLE 10 [CROSS-DISCIPLINARY]: Information Seeking Theory and Relevance Design from Library & Information Science
===========

**Vocabulary tradition:** Library & Information Science / Knowledge Organization

**Angle type:** Cross-disciplinary

**Predicted research character:** empirical (LIS has quantitative studies; also substantial theoretical literature)

**What to extract:** Relevance theory (what makes a document relevant to a user need); information seeking models (Dervin's sense-making, Wilson's model, Ingwersen's cognitive model) applied to retrieval system design; Cranfield evaluation paradigm limitations and what it misses; knowledge organization principles (faceted classification, ontologies) as applied to document structure for retrieval; user information need representation — how to model what users actually need vs what they query.

**Source type (academic):** Journal of the American Society for Information Science and Technology (JASIST); Information Processing & Management; ACM SIGIR proceedings (which spans CS and LIS); Library & Information Science Review

**Source type (practitioner):** deprioritized — LIS is primarily academic. Relevant practitioner output is in enterprise search and taxonomist communities.

**Coverage-gap conditioning note:** All A1–A9 angles use vocabulary from NLP, ML, IR infrastructure, MLOps, evaluation, and systems engineering. Gap: the theoretical tradition that studies information retrieval as a human-centered phenomenon — what relevance means, how users formulate queries, how document organization affects retrievability. This tradition does not use "RAG," "LLM," or "embedding" vocabulary — it uses "relevance," "information need," "knowledge organization," "document representation."

**Generation note:** Generated from LIS vocabulary, not from the NLP/ML framing of A1–A7. This tradition predates and informs modern IR; its findings on relevance, user needs, and system design criteria are structurally related to RAG design but are not typically cited in RAG papers.

**Queries:**

Q1: `information seeking behavior relevance judgment retrieval system design user information needs model evaluation`

Q2: `knowledge organization document classification retrieval effectiveness faceted indexing information science`

Q3: `Cranfield evaluation paradigm limitations information retrieval user-centered relevance test collection`

**Coverage-gap note:** This angle does not address how to operationalize LIS findings in a neural RAG implementation — that translation step is left for human judgment. The angle retrieves the theoretical literature; application requires synthesis.

---

## GATE SUMMARY (angle-quality.md — all four gates)

### Gate 1 — Completeness checks

- [x] **Null-hypothesis angle present:** PASS. Angle 8 (N1) is explicitly framed as "When RAG Fails — Negative Results and Scope Limitations." Queries include disconfirming vocabulary: "failure," "does not improve," "negative results," "limitations," "hurts accuracy," "failure mode." Not a confirmatory angle with a caveat.

- [x] **Adversarial angle present:** PASS. Angle 9 (D1) is labeled `[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]`. Generation note explicitly lists excluded vocabulary.

- [x] **Cross-disciplinary angle present:** PASS. Angle 10 (C1) targets Library & Information Science / Knowledge Organization — a tradition NOT present in the intake brief's candidate vocabulary traditions list. Verified: intake brief lists six traditions; none is LIS or knowledge organization.

- [x] **Source-type coverage (practitioner):** PASS. Domain maturity = MIXED. Practitioner sources are assigned and marked REQUIRED in: A2 (LlamaIndex, LangChain blog), A3 (vendor engineering blogs), A4 (GitHub issue threads, engineering blogs), A5 (RAGAS docs, TruLens blog), A7 (LlamaIndex tutorials), A8 (HN/Reddit), A9 (GitHub Text-to-SQL repos).

- [x] **Vocabulary-tradition map populated:** PASS. Coverage map contains 8 tradition entries (6 from intake brief + 1 discovered during coverage map + 1 cross-disciplinary). All have distinct labels.

**Gate 1: PASS**

### Gate 2 — Distinctness checks

**Boolean-connective test (applied to flagged pairs):**

- A1 vs A3: A1's distinctive terms (BM25, DPR, bi-encoder, recall@k, BEIR) do not appear in A3 (ANN, HNSW, FAISS, vector store, cosine similarity, sentence transformers). Different sub-literatures. Would NOT retrieve the same documents via OR. PASS.

- A2 vs A7: A2's distinctive terms (chunking, chunk size, overlap, text splitting, LangChain pipeline) do not appear in A7 (HyDE, self-RAG, FLARE, query decomposition, re-ranking, agentic). Would NOT retrieve the same documents via OR. PASS.

- A5 vs A8: A5's distinctive terms (RAGAS, faithfulness metric, context precision, benchmark) do not appear in A8 (failure, does not improve, negative results, retrieval hurts). Different framing — A5 asks how to measure quality, A8 asks when quality is absent. PASS.

- A4 vs A5: A4's distinctive terms (latency, monitoring, observability, deployment, MLOps) do not appear in A5 (RAGAS, faithfulness, groundedness, context precision). Different decision layers. PASS.

- A6 vs A8: A6's distinctive terms (hallucination reduction mechanism, factual grounding, citation generation) differ from A8's disconfirming vocabulary. A6 asks "how to fix hallucination"; A8 asks "when does RAG fail." Not OR-combinable into same result set. PASS.

**Vocabulary-tradition distinctness:**
All 10 angles have distinct tradition labels. No two non-null-hypothesis, non-adversarial angles share the same label. (N1 shares intellectual heritage with A1 but has the exempted label "NLP / IR Research — Disconfirming"; this is explicitly permitted per angle-quality.md Gate 2.)

**Gate 2: PASS**

### Gate 3 — Launchability checks

All 10 angles inspected:
- Each angle has at least one concrete query string in the Queries field. All queries are runnable search strings (can be pasted into a search box). PASS.
- No query string contains "TBD," "to be determined," "[fill in]," or placeholder markers. Queries are fully specified. PASS.
- All Source type (academic) and Source type (practitioner) fields name specific platforms (arXiv cs.CL+cs.IR, JASIST, GitHub, LlamaIndex blog, RAGAS docs, HN, etc.). No vague language. PASS.

**Gate 3: PASS**

### Gate 4 — Scoring prohibition

- No angles were filtered or ranked by "most promising," "most relevant," or "most novel" criteria during generation. Type allocations were made on structural criteria only: tradition coverage, required type slots (null-hypothesis, adversarial, cross-disciplinary), vocabulary distinctness.
- No angle records contain implicit quality assessments ("this angle is likely to be most useful" etc.). Angles are structurally described without quality ranking.

**Gate 4: PASS**

### Overall verdict

```
GATE SUMMARY
============
Gate 1 — Completeness: PASS
Gate 2 — Distinctness: PASS
Gate 3 — Launchability: PASS
Gate 4 — Scoring prohibition: PASS

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all vocabulary traditions enumerated by LLM only;
     no survey-paper probe ran (Source B unavailable). External validation via survey-paper
     probe recommended before treating this angle list as covering all traditions.
     Known risk: cross-disciplinary traditions underrepresented in LLM training may be absent
     without observable signal (Weakness 1 from weakness_register.md).

  2. Adversarial angle (A9) requires separate execution context — downstream research agent
     must honor the ADVERSARIAL-FLAGGED label by running A9 in a fresh context with no prior
     access to A1–A8 results (see weakness_register.md Weakness 6 on label-enforcement gap).

  3. Negative result underrepresentation risk for Angle 8 (N1) — publication bias means
     this angle may return fewer results than its importance warrants. Absence of papers
     should not be interpreted as evidence RAG always works.
```

---

## Summary statistics

- **Total angles:** 10
- **Confirmatory:** 7 (A1–A7)
- **Null-hypothesis:** 1 (A8)
- **Adversarial-FLAGGED:** 1 (A9)
- **Cross-disciplinary:** 1 (A10)
- **Distinct vocabulary-tradition labels:** 10
- **Vocabulary traditions from intake brief:** 6 (all covered)
- **Traditions added during coverage map:** 1 (Advanced RAG / Query Orchestration)
- **Cross-disciplinary tradition (not in intake brief):** 1 (LIS / Knowledge Organization)
- **Domain maturity:** MIXED — practitioner sources marked REQUIRED in 7 of 10 angles
- **Source B status:** UNAVAILABLE — MODERATE — VOCABULARY SELF-REPORT FLAG active
- **arXiv category guidance applied:** cs.CL + cs.IR for NLP/IR angles; cs.DB + cs.AI for structured retrieval (A9); per platform-calibration.md override rules
