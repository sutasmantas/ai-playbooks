# Research Angles: Building RAG Systems That Work Well in Practice

Generated: 2026-07-05

---

## Angle 1: Core RAG Architecture and Pipeline Design

**Vocabulary tradition:** Natural Language Processing (NLP) / Machine Learning

**Description:** The foundational framing of RAG as a combination of a retriever and a generator, covering architectural variants (naive RAG, advanced RAG, modular RAG), pipeline topology, and component interaction.

**Search queries:**
- `"retrieval-augmented generation" architecture pipeline survey`
- `RAG "retrieve then generate" modular architecture components`
- `"advanced RAG" OR "modular RAG" pipeline design patterns`

**Best source types:** Academic preprints (arXiv cs.CL, cs.IR), survey papers, NeurIPS/ACL/EMNLP proceedings

---

## Angle 2: Chunking and Document Preprocessing Strategies

**Vocabulary tradition:** Information Retrieval (IR)

**Description:** How source documents are split into retrievable units — fixed-size, semantic, hierarchical, or sentence-level chunking — and how preprocessing choices affect downstream retrieval precision and generation quality.

**Search queries:**
- `RAG chunking strategy "chunk size" retrieval performance`
- `document segmentation "passage retrieval" granularity effect`
- `"semantic chunking" OR "hierarchical chunking" RAG indexing`

**Best source types:** Practitioner blog posts (Towards Data Science, LlamaIndex blog, LangChain blog), arXiv preprints, GitHub experiment repos

---

## Angle 3: Dense Retrieval and Embedding Models

**Vocabulary tradition:** Machine Learning / Information Retrieval

**Description:** The choice and fine-tuning of embedding models for encoding queries and passages into dense vector spaces; covers bi-encoder architectures, domain adaptation of embeddings, and the effect of embedding quality on RAG end-to-end performance.

**Search queries:**
- `dense passage retrieval embedding model "bi-encoder" fine-tuning`
- `"sentence transformers" domain adaptation retrieval QA`
- `embedding model comparison RAG retrieval accuracy benchmark`

**Best source types:** arXiv (cs.IR, cs.CL), Hugging Face model cards, BEIR benchmark papers, academic conference proceedings

---

## Angle 4: Hybrid Search — Dense and Sparse Retrieval Fusion

**Vocabulary tradition:** Information Retrieval

**Description:** Combining BM25-style keyword (sparse) retrieval with dense vector retrieval to improve recall; covers reciprocal rank fusion, learned fusion weights, and when hybrid outperforms either modality alone.

**Search queries:**
- `hybrid retrieval BM25 dense vector "reciprocal rank fusion" RAG`
- `sparse dense retrieval fusion comparison question answering`
- `"keyword retrieval" "semantic retrieval" combined RAG performance`

**Best source types:** IR conference papers (SIGIR, ECIR), arXiv preprints, Elasticsearch/OpenSearch technical documentation

---

## Angle 5: Reranking and Context Window Curation

**Vocabulary tradition:** Information Retrieval / Natural Language Processing

**Description:** Using a cross-encoder or LLM-based reranker to reorder retrieved passages before feeding them to the generator; covers the "lost in the middle" problem where position in context affects whether the LLM attends to evidence.

**Search queries:**
- `"reranking" cross-encoder RAG retrieved passages generator`
- `"lost in the middle" long context LLM attention position`
- `context window curation top-k selection reranker RAG quality`

**Best source types:** arXiv preprints, ACL/EMNLP papers, Cohere/Jina AI reranker technical reports

---

## Angle 6: Vector Databases and Indexing Infrastructure

**Vocabulary tradition:** Database Systems / MLOps

**Description:** The engineering layer: approximate nearest neighbor (ANN) index algorithms (HNSW, IVF, ScaNN), vector database products (Pinecone, Weaviate, Qdrant, pgvector), and how index configuration affects retrieval latency and recall at scale.

**Search queries:**
- `vector database ANN index HNSW IVF comparison benchmark`
- `"approximate nearest neighbor" recall latency tradeoff production`
- `Pinecone Weaviate Qdrant pgvector comparison RAG production`

**Best source types:** Vendor technical documentation, GitHub benchmark repos (ann-benchmarks), practitioner engineering blogs, database conference papers (VLDB, SIGMOD)

---

## Angle 7: Query Understanding and Reformulation

**Vocabulary tradition:** Information Retrieval

**Description:** Transforming the raw user query into a form that retrieves better passages — query expansion, HyDE (hypothetical document embeddings), step-back prompting, multi-query generation, and sub-question decomposition.

**Search queries:**
- `"HyDE" hypothetical document embeddings retrieval improvement`
- `query expansion reformulation RAG "multi-query" retrieval`
- `"step-back prompting" query decomposition retrieval augmented generation`

**Best source types:** arXiv preprints, LangChain/LlamaIndex documentation and blogs, ACL proceedings

---

## Angle 8: Evaluation and Benchmarking

**Vocabulary tradition:** NLP Evaluation / Information Retrieval

**Description:** How to measure RAG quality end-to-end and at component level; covers faithfulness, answer relevance, context precision/recall (RAGAS framework), standard QA benchmarks (NQ, TriviaQA, HotpotQA), and automated vs. human evaluation.

**Search queries:**
- `RAG evaluation framework RAGAS faithfulness answer relevance`
- `retrieval augmented generation benchmark NQ TriviaQA HotpotQA`
- `"context recall" "context precision" RAG automatic evaluation metric`

**Best source types:** arXiv preprints, RAGAS GitHub repo, ACL/EMNLP evaluation track papers, blog posts from Hugging Face and Databricks

---

## Angle 9: Failure Cases, Hallucination, and Null Results

**Vocabulary tradition:** AI Reliability / AI Safety

**Description:** When and why RAG systems fail — retrieving irrelevant context, ignoring retrieved evidence, hallucinating despite correct retrieval, conflicting knowledge between parametric and retrieved sources, and cases where RAG does not improve or degrades performance.

**Search queries:**
- `RAG hallucination "conflicting knowledge" parametric retrieval failure`
- `retrieval augmented generation failure modes "null result" degradation`
- `"faithfulness" RAG LLM ignores context incorrect answer analysis`

**Best source types:** arXiv safety/reliability papers, ACL findings papers, practitioner post-mortems (company engineering blogs), AI safety preprints

---

## Angle 10: Production Engineering, Latency, and Cost Optimization

**Vocabulary tradition:** MLOps / Software Engineering

**Description:** The gap between RAG prototypes and production systems: caching strategies, streaming retrieval, batching, infrastructure cost per query, monitoring, observability (tracing retrieval and generation steps), and reliability engineering.

**Search queries:**
- `RAG production deployment latency optimization caching infrastructure`
- `LLM application observability tracing "retrieval augmented" monitoring`
- `RAG cost per query optimization "semantic cache" production system`

**Best source types:** Engineering blogs (Stripe, Airbnb, Databricks, OpenAI), LangSmith/Langfuse observability docs, MLOps conference talks (MLSys), practitioner GitHub repos

---

## Angle 11: Long-Context LLMs vs. RAG — Tradeoffs and Coexistence

**Vocabulary tradition:** Natural Language Processing (NLP)

**Description:** As context windows expand (128k, 1M tokens), whether RAG remains necessary or whether full-document stuffing is preferable; empirical comparisons of retrieval-then-generate vs. in-context learning over full corpora.

**Search queries:**
- `long context LLM vs RAG comparison "needle in a haystack" retrieval`
- `"full context" vs "retrieval augmented" question answering performance`
- `128k context window RAG tradeoff latency cost accuracy`

**Best source types:** arXiv preprints, Google/Anthropic technical reports, NeurIPS/ICML papers, practitioner benchmarks on GitHub

---

## Angle 12: Multi-Hop Reasoning and Iterative Retrieval

**Vocabulary tradition:** Natural Language Processing (NLP)

**Description:** Queries requiring evidence from multiple documents or reasoning chains — iterative/recursive retrieval, chain-of-thought with retrieval (ReAct, IRCoT), and multi-hop QA datasets as testbeds.

**Search queries:**
- `multi-hop retrieval "chain of thought" iterative RAG HotpotQA`
- `"ReAct" OR "IRCoT" iterative retrieval reasoning augmented generation`
- `recursive retrieval multi-step question answering RAG`

**Best source types:** arXiv (cs.CL), ACL/EMNLP/NAACL proceedings, HotpotQA / MuSiQue dataset papers

---

## Angle 13: Knowledge Graph-Augmented Retrieval (GraphRAG)

**Vocabulary tradition:** Knowledge Representation / Semantic Web

**Description:** Augmenting vector retrieval with structured knowledge graphs — entity linking, graph traversal for context enrichment, community summaries (Microsoft GraphRAG), and hybrid graph-vector pipelines.

**Search queries:**
- `"GraphRAG" knowledge graph retrieval augmented generation entity`
- `knowledge graph LLM integration structured retrieval community summary`
- `graph neural network RAG entity linking knowledge base QA`

**Best source types:** arXiv (cs.AI, cs.IR), Microsoft GraphRAG technical report, Semantic Web conference papers (ISWC), GitHub repos

---

## Angle 14: Domain-Specific RAG Adaptation

**Vocabulary tradition:** Applied NLP

**Description:** Adapting RAG to specialized domains — legal, medical, financial, code — where vocabulary mismatch, citation requirements, compliance constraints, and proprietary corpora introduce unique challenges.

**Search queries:**
- `RAG medical clinical "domain adaptation" biomedical retrieval`
- `legal RAG "retrieval augmented" case law compliance domain-specific`
- `code retrieval augmented generation software documentation programming`

**Best source types:** Domain-specific NLP workshops (BioNLP, LegalNLP), applied AI papers, industry case studies, domain-specific benchmark datasets

---

## Angle 15: Security, Prompt Injection, and Adversarial Robustness

**Vocabulary tradition:** AI Security / Adversarial Machine Learning

**Description:** Vulnerabilities introduced by external retrieval — corpus poisoning, prompt injection via malicious documents, data exfiltration through retrieved content, and indirect prompt injection attacks in RAG pipelines.

**Search queries:**
- `RAG "prompt injection" retrieval corpus poisoning attack`
- `"indirect prompt injection" retrieval augmented generation vulnerability`
- `adversarial documents RAG security attack defense`

**Best source types:** arXiv (cs.CR), security conference papers (IEEE S&P, USENIX Security), practitioner security blogs, CVE disclosures

---

## Angle 16: Multi-Modal RAG

**Vocabulary tradition:** Vision-Language Research / Multimodal AI

**Description:** Extending RAG beyond text to retrieve images, tables, figures, audio, or video; covers multi-modal embeddings, cross-modal retrieval, and applications like document understanding with charts and figures.

**Search queries:**
- `multimodal RAG image text retrieval "vision language" generation`
- `"multi-modal retrieval" document understanding table figure RAG`
- `cross-modal embedding retrieval augmented generation visual question answering`

**Best source types:** arXiv (cs.CV, cs.CL), CVPR/ICCV proceedings, Hugging Face model documentation

---

## Angle 17: Knowledge Base Freshness, Update, and Maintenance

**Vocabulary tradition:** Knowledge Management / Information Systems

**Description:** How to keep the retrieval corpus current — incremental indexing, detecting and replacing stale chunks, temporal reasoning about knowledge recency, and the operational burden of corpus curation at scale.

**Search queries:**
- `RAG knowledge base update incremental indexing freshness staleness`
- `"retrieval augmented" corpus maintenance temporal knowledge recency`
- `vector index update continuous ingestion pipeline RAG production`

**Best source types:** Knowledge management journals, MLOps practitioner blogs, information systems conference papers (CIKM), vendor documentation

---

## Angle 18: Human Factors and User Trust Calibration

**Vocabulary tradition:** Human-Computer Interaction (HCI) / Cognitive Engineering

**Description:** How end-users interact with RAG outputs — citation trust, over-reliance on retrieved "evidence," effects of surfacing sources on perceived credibility, and UX patterns for communicating retrieval uncertainty.

**Search queries:**
- `LLM citations trust calibration user study "retrieval augmented"`
- `human factors AI-assisted information retrieval over-reliance trust`
- `"source attribution" RAG user trust credibility interface design`

**Best source types:** CHI / CSCW conference proceedings, cognitive science journals, UX research reports, human-AI interaction arXiv papers

---

## Summary

| # | Angle Title | Tradition |
|---|-------------|-----------|
| 1 | Core RAG Architecture and Pipeline Design | Natural Language Processing (NLP) |
| 2 | Chunking and Document Preprocessing Strategies | Information Retrieval (IR) |
| 3 | Dense Retrieval and Embedding Models | Machine Learning / IR |
| 4 | Hybrid Search — Dense and Sparse Retrieval Fusion | Information Retrieval (IR) |
| 5 | Reranking and Context Window Curation | Information Retrieval / NLP |
| 6 | Vector Databases and Indexing Infrastructure | Database Systems / MLOps |
| 7 | Query Understanding and Reformulation | Information Retrieval (IR) |
| 8 | Evaluation and Benchmarking | NLP Evaluation |
| 9 | Failure Cases, Hallucination, and Null Results | AI Reliability / AI Safety |
| 10 | Production Engineering, Latency, and Cost Optimization | MLOps / Software Engineering |
| 11 | Long-Context LLMs vs. RAG — Tradeoffs and Coexistence | Natural Language Processing (NLP) |
| 12 | Multi-Hop Reasoning and Iterative Retrieval | Natural Language Processing (NLP) |
| 13 | Knowledge Graph-Augmented Retrieval (GraphRAG) | Knowledge Representation / Semantic Web |
| 14 | Domain-Specific RAG Adaptation | Applied NLP |
| 15 | Security, Prompt Injection, and Adversarial Robustness | AI Security / Adversarial ML |
| 16 | Multi-Modal RAG | Vision-Language / Multimodal AI |
| 17 | Knowledge Base Freshness, Update, and Maintenance | Knowledge Management / Information Systems |
| 18 | Human Factors and User Trust Calibration | Human-Computer Interaction (HCI) |

**Total angles:** 18
**Distinct vocabulary traditions:** 11 (NLP, Information Retrieval, Machine Learning, Database Systems/MLOps, NLP Evaluation, AI Reliability/Safety, Software Engineering, Knowledge Representation/Semantic Web, Applied NLP, AI Security, Vision-Language/Multimodal AI, Knowledge Management/Information Systems, HCI — 13 labels used across 11 grouped traditions)
