# Blind Scoring Rationale — INT-10, Input-14, Condition A, Evaluator 1

Scored: 2026-07-06
Evaluator model: claude-sonnet-4-6 (subagent, blind)

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output's summary table lists 13 distinct vocabulary tradition labels across 18 angles:
Natural Language Processing, Information Retrieval, Machine Learning, Database Systems/MLOps,
NLP Evaluation, AI Reliability/AI Safety, Software Engineering, Knowledge Representation/Semantic Web,
Applied NLP, AI Security/Adversarial ML, Vision-Language/Multimodal AI, Knowledge Management/Information Systems,
and Human-Computer Interaction (HCI)/Cognitive Engineering.

This exceeds the >= 4 threshold.

User input words: "research," "build," "RAG systems," "work well," "practice." Traditions NOT derivable:
- "Human-Computer Interaction (HCI) / Cognitive Engineering" (Angle 18)
- "Knowledge Representation / Semantic Web" (Angle 13)
- "AI Security / Adversarial Machine Learning" (Angle 15)
- "Vision-Language Research / Multimodal AI" (Angle 16)
- "Knowledge Management / Information Systems" (Angle 17)

Adjacent-discipline criterion: Angle 18 "Human Factors and User Trust Calibration" (tradition:
"Human-Computer Interaction (HCI) / Cognitive Engineering") has a different primary subject matter
(user interface design, cognitive science) and vocabulary — "trust calibration," "over-reliance,"
"credibility interface design," "CHI / CSCW conference proceedings" — none of which appear in
NLP/IR tradition.

Evidence: "Human-Computer Interaction (HCI) / Cognitive Engineering"; "LLM citations trust calibration user study 'retrieval augmented'."

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 2**

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:** Present. Angle 9 ("Failure Cases,
Hallucination, and Null Results") names specific mechanisms: "retrieving irrelevant context, ignoring
retrieved evidence, hallucinating despite correct retrieval, conflicting knowledge between parametric and
retrieved sources." This identifies causal categories beyond "failures exist" — the parametric-vs-retrieved
knowledge conflict and context-ignoring are distinct named mechanisms. PRESENT.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:** The word "adversarial" appears in the tradition label
"AI Security / Adversarial Machine Learning" and in query strings ("adversarial documents RAG security
attack defense") but the exact token string "ADVERSARIAL-FLAGGED" does not appear anywhere. ABSENT.

**(c) Cross-disciplinary angle from a different primary field with non-overlapping vocabulary:** Present.
Angle 18 ("Human Factors and User Trust Calibration") is from HCI/Cognitive Engineering — a primary field
distinct from NLP/IR. Queries use "over-reliance," "source attribution," "credibility interface design,"
"CHI / CSCW conference proceedings" — vocabulary with no overlap with the ML/IR/NLP core of other angles.
PRESENT.

Two of three elements present; "ADVERSARIAL-FLAGGED" absent.

Evidence: (a) "conflicting knowledge between parametric and retrieved sources"; (b) "ADVERSARIAL-FLAGGED" not found; (c) "CHI / CSCW conference proceedings."

---

## Q5 — ACTIONABILITY

**Score: 2**

All 18 angles have 3 queries each (>= 2 threshold met for all). Most queries use tradition-specific
vocabulary and have specificity operators (named techniques, benchmarks, exact phrases, algorithms).

Strong specificity examples:
- Angle 4: `hybrid retrieval BM25 dense vector "reciprocal rank fusion" RAG` — named algorithm, Boolean AND of distinct concepts
- Angle 7: `"HyDE" hypothetical document embeddings retrieval improvement` — named technique
- Angle 8: `RAG evaluation framework RAGAS faithfulness answer relevance` — named framework + metrics
- Angle 11: `128k context window RAG tradeoff latency cost accuracy` — numerical threshold
- Angle 12: `"ReAct" OR "IRCoT" iterative retrieval reasoning augmented generation` — named systems

Generic concatenations lacking specificity operators (no quoted phrase, no named technique, no numerical threshold):
- Angle 3 query 3: `embedding model comparison RAG retrieval accuracy benchmark` — multi-term list with no specificity anchor
- Angle 10 query 1: `RAG production deployment latency optimization caching infrastructure` — generic term list
- Angle 17 query 1: `RAG knowledge base update incremental indexing freshness staleness` — generic term list
- Angle 17 query 3: `vector index update continuous ingestion pipeline RAG production` — generic term list

Approximately 50 of 54 queries (>80%) use tradition-specific vocabulary and have specificity operators,
but not "all" — the four queries above are generic concatenations. Score 3 requires "all" to have
specificity operators; this output does not meet that threshold. Score 2 threshold (>= 80%) is met.

Evidence: Score 2 ceiling set by "RAG production deployment latency optimization caching infrastructure" (Angle 10 query 1 — no specificity anchor). Score 2 floor confirmed by `"reciprocal rank fusion"` (Angle 4) and `"HyDE" hypothetical document embeddings` (Angle 7).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

No angle pairs identified where query overlap would retrieve > 60% of the same papers.

Closest candidate pairs examined:
- Angle 3 (Dense Retrieval: bi-encoder fine-tuning, domain adaptation, BEIR) vs. Angle 4
  (Hybrid Search: BM25, reciprocal rank fusion, sparse-dense fusion): distinct sub-problems with
  non-overlapping specific vocabulary. Embedding model training papers are not BM25 fusion papers.
- Angle 1 (Core Architecture: survey-level) vs. Angle 12 (Multi-Hop: HotpotQA, ReAct, IRCoT):
  survey papers vs. iterative reasoning benchmark papers — different paper sets.
- Angle 8 (Evaluation: RAGAS, faithfulness metrics) vs. Angle 9 (Failure Cases: hallucination,
  null results): evaluation metric papers vs. failure-mode analysis papers — different corpora.

Each angle occupies a distinct sub-problem: pipeline stages (chunking, embedding, hybrid search,
reranking, vector DB, query reformulation), quality concerns (evaluation, failures, security, freshness),
extension directions (multi-modal, knowledge graph, domain-specific), adjacent disciplines (HCI, Knowledge
Management). No two angles are synonymous.

Evidence: Angle 3 queries on `"sentence transformers" domain adaptation`; Angle 4 queries on `"reciprocal rank fusion"` — non-overlapping technical vocabulary within IR.

---

## P1 — PROCEDURE ADHERENCE

**Score: 0**

The output contains 18 research angles and a summary table — no structured procedural framing is visible.

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
The summary table lists tradition labels, but it is a plain enumeration. There is no gap analysis
("what traditions are missing?"), no identification of underrepresented domains, and no stated rationale
for which adjacent field was selected. A list of what was produced is not a coverage map with gap-check
logic.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
Absent. No preamble or intake section exists classifying the question type, assessing severity, or
listing vocabulary traditions as a pre-generation planning step.

**(c) >= 1 gate documented as run (GATE PASSED or GATE FAILED notation):** Absent.

The -1 threshold condition requires "no coverage map, intake brief, or gate notation visible anywhere."
The summary table provides a rudimentary tradition list, which is a partial element of a coverage map —
this is enough to avoid -1 (some procedural artifact is present, even if highly incomplete). P1=0
("Angles only; no procedural structure visible") fits: the table adds tradition labeling but no procedure.

Evidence: Document opens directly with "## Angle 1" — no intake brief or coverage map precedes it. Summary table ends document with no gate notation, no gap-check language, no cross-disciplinary selection rationale.

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: -1**

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** Absent. Not found anywhere in the document.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** Absent.

**(c) >= 1 tradition named as possibly absent due to source limitation:** Absent. No tradition is flagged
as potentially missing.

**(d) Coverage described as reduced (not FULL):** Absent. The document presents its output as a complete
count: "Total angles: 18 / Distinct vocabulary traditions: 11" with no qualification, hedge, or limitation
flag.

The -1 threshold applies: "no VOCABULARY SELF-REPORT FLAG and no coverage limitation language visible
anywhere in the output." Both conditions are met — the flag is absent and the output is presented as
complete without any coverage caveat.

Evidence: "13 labels used across 11 grouped traditions" — factual count with no hedge. No coverage limitation language anywhere in the document.

---

## Score Summary

| Dimension | Score |
|-----------|-------|
| Q1 Vocabulary Tradition Coverage | 3 |
| Q7 Structural Completeness | 2 |
| Q5 Actionability | 2 |
| Q3 Precision / Non-Redundancy | 3 |
| P1 Procedure Adherence | 0 |
| M1 Self-Assessment Degraded Mode | -1 |
