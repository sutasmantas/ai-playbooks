# Scoring Rationale — INT-10, Input 7, Condition B, Evaluator 3

**Date:** 2026-07-06
**Evaluator role:** Blind evaluator (condition identity unknown at scoring time)
**Output file scored:** stage-2-execution/input-7/cond-b-output.md

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output enumerates 12 vocabulary traditions in the intake brief, and adds 2 more cross-disciplinary ones in the coverage map, for 14 distinct named tradition labels total.

The user input contained only three meaningful terms: "knowledge graphs," "LLMs," and "combined with." Traditions NOT derivable from those words include:

- "Language model knowledge encoding / probing" — uses "parametric knowledge," "LAMA," "knowledge probing" — none present in user input
- "Neurosymbolic AI" — "neurosymbolic," "neural-symbolic," "logical inference" — not in user input
- "Information retrieval / RAG" — "retrieval-augmented generation," "dense retrieval" — not in user input
- "Graph machine learning" — "GNN," "TransE," "RotatE," "ComplEx" — not in user input
- "NLP evaluation methodology" — "benchmark contamination," "data leakage" — not in user input
- "Database / data management" (C1) — not in user input
- "Cognitive science / semantic memory" (C2) — not in user input

That is 7+ traditions not derivable from user input words (criterion requires ≥2).

Adjacent discipline criterion: C2 ("Cognitive science / semantic memory") has a clearly different primary subject matter — human memory, concept organization, and cognitive architecture. Its vocabulary ("Collins-Quillian spreading activation, ACT-R, Psychological Review, typicality, semantic distance") is entirely outside ML/NLP. This is unambiguously from an adjacent discipline.

**Key evidence:** "Cognitive science / semantic memory (cross-disciplinary — NOT in intake brief)" and "Cognitive science models of semantic network structure (Collins-Quillian, spreading activation, ACT-R)."

Score 3 is warranted: ≥4 distinct traditions (14 total), ≥2 not derivable from user input (7+), ≥1 from an adjacent discipline (C2 and C1 both qualify).

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements checked independently:

**(a) Null-hypothesis angle naming a SPECIFIC failure mechanism (not just "failures exist"):**

Angle N1 names specific mechanisms: "entity sparsity, KG incompleteness, domain mismatch; failure modes in KG retrieval." These are named conditions — entity sparsity is a specific structural property that can be measured; KG incompleteness is a specific database property; domain mismatch is a specific transfer-learning failure mode. The queries reinforce this: "knowledge graph augmentation LLM does not generalize incomplete KG limitations ablation" and "KGQA LLM zero-shot outperforms knowledge graph structured retrieval negative result." PRESENT.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**

Found at Angle D1 header: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]" and in the summary table: "[ADVERSARIAL-FLAGGED] NL-to-Graph Query (Text-to-Cypher/SPARQL)." PRESENT.

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:**

Angle C2 (Cognitive science / semantic memory) is explicitly labeled "NOT in intake brief." It draws sources from "Psychological Review; Cognitive Science journal; PubMed (search MeSH: 'semantic memory' + 'computational model')" and uses vocabulary including "spreading activation, concept clustering, typicality, semantic distance, ACT-R" — none of which appear in any confirmatory angle. Primary field is cognitive psychology, not NLP/ML. PRESENT.

**Key evidence:** "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]" and "Cognitive science / semantic memory (cross-disciplinary — NOT in intake brief)."

Score 3: all three structural elements are present.

---

## Q5 — ACTIONABILITY

**Score: 3**

All 16 angles have 3 runnable query strings; Angle N1 has 4. This exceeds ≥2 for every angle.

**Tradition-specific vocabulary check (sample across diverse angles):**

- A2: "parametric knowledge large language models probing factual recall LAMA benchmark 2023 2024" — "LAMA benchmark" is a named evaluation instrument from the LM knowledge-probing tradition; year range is a numerical threshold.
- A5: "neurosymbolic reasoning knowledge graph large language model logical inference 2024 2025" — "neurosymbolic" is tradition-specific.
- A7: "Wikidata Freebase question answering language model entity linking multi-hop reasoning" — named KG datasets as specificity operators.
- D1: "NL2SPARQL NL2Cypher query generation language model property graph benchmark evaluation" — named system-level techniques specific to the database NL query tradition.
- C2: "semantic network spreading activation language model associative memory cognitive science 2024" — "spreading activation" is a named cognitive science theory not appearing in ML/NLP vocabulary.
- A9: "medical ontology UMLS knowledge graph LLM clinical NLP entity grounding" — "UMLS" is a named clinical ontology.

No queries are generic phrase concatenations such as "knowledge graph LLM research papers."

**Specificity operators:** Every query contains at least one of: named technique (LAMA, GraphRAG, NL2SPARQL, NL2Cypher, TransE, RotatE, UMLS, ACT-R), named dataset (Wikidata, Freebase, ConceptNet), year range as numerical threshold (2023 2024 2025, 2024 2025), or Boolean AND of two clearly distinct concept clusters. Borderline case — A1 Q3 "entity type hierarchy knowledge base language model factual grounding" — no single named technique but combines three distinct concepts; passes Boolean AND test.

**Key evidence:** "NL2SPARQL NL2Cypher query generation language model property graph benchmark evaluation" and "parametric knowledge large language models probing factual recall LAMA benchmark 2023 2024."

Score 3: every angle ≥2 queries, all use tradition-specific vocabulary, all have ≥1 specificity operator.

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

Checking all plausible high-overlap pairs independently:

**A3 (KG-RAG) vs A8 (hallucination reduction):**
A3 distinctive vocabulary: "retrieval augmented generation, subgraph retrieval, entity linking retrieval, architecture comparison." A8 distinctive vocabulary: "hallucination reduction, factuality measurement, fact verification, factual consistency benchmark." These ask different questions (architecture vs. reliability measurement). Estimated overlap: <40%.

**A7 (KGQA) vs D1 (adversarial: NL-to-graph query):**
This is the most plausible overlap pair. A7 Q3 is "SPARQL generation natural language query LLM knowledge base structured QA." D1 Q2 is "NL2SPARQL NL2Cypher query generation language model property graph benchmark evaluation." Both target NL-to-SPARQL generation. However, the total paper pool for each angle is larger than this shared subproblem. A7's other queries cover "Wikidata Freebase entity linking multi-hop reasoning" and "KGQA semantic parsing" — topics not covered by D1. D1's other queries cover "text-to-Cypher, property graph, database schema awareness, Neo4j, Amazon Neptune" — topics not covered by A7. The NL2SPARQL papers are a shared subset but do not constitute >60% of either angle's total retrieval. Estimated overlap as share of each pool: 20–40%.

**A5 (neurosymbolic) vs A10 (CoT/structured reasoning):**
A5: "neurosymbolic, logical rules, constrained generation, first-order logic." A10: "chain-of-thought, step-by-step planning, scratchpad, reasoning decomposition." Different research questions and vocabulary clusters. Estimated overlap: <30%.

**A1 (KR&R/ontology) vs A6 (KG construction):**
A1: "ontology-grounded, RDF, schema-aware, entity type hierarchy." A6: "relation extraction, named entity recognition, knowledge base population, triple extraction." Different directions (using KG structure vs. building KG). Estimated overlap: <30%.

No pair was identified where total query overlap would retrieve >60% of the same papers. The D1/A7 pair has the strongest overlap concern, concentrated at the NL2SPARQL subproblem, but the total paper pool for each angle extends well beyond that shared region.

**Key evidence:** Gate 2 in the output: "A3 (RAG) vs. A8 (hallucination): 'retrieval augmented generation' — No, A8 uses 'hallucination reduction factuality measurement' — PASS" and "No angle pairs flagged for synonymy."

Score 3: zero angle pairs where query overlap would retrieve >60% of the same papers.

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**

The "COVERAGE MAP" block in Part 2 Step 0 lists all 12 intake-brief traditions with representative terms, planned angle slots, and "Gap flag: No" for each. The gap check explicitly states: "Traditions NOT yet represented in the planned list: All 12 traditions from intake brief have at least one angle slot." Two cross-disciplinary slots are present with explicit, reasoned selection basis: C1 basis states "The database systems community studies query optimization... a perspective almost entirely absent from NLP-focused KG+LLM research. NL-to-query generation bridges this tradition directly to the LLM side." C2 basis cites "Collins-Quillian spreading activation. LLMs are distributional semantic models. Cognitive science has decades of research on knowledge representation... almost never cited in ML papers but structurally relevant." PRESENT.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**

"INTAKE BRIEF" block present with 12 vocabulary traditions listed (each with representative terms). Question type classified: "EXPLORATORY — No comparison language, no intervention-outcome structure." Severity assessment: "Source B status: UNAVAILABLE — MODERATE" with explicit rationale ("Source A + Source C together identified ≥7 distinct vocabulary traditions. Domain is well-represented in LLM training data"). PRESENT.

**(c) ≥1 gate documented as run with GATE PASSED or GATE FAILED notation:**

"Gate: PASS. Proceed to angle generation." appears at Step 6 of the intake. Part 3 documents four more gates with explicit PASS verdicts: "Gate 1: PASS," "Gate 2: PASS," "Gate 3: PASS," "Gate 4: PASS." GATE SUMMARY: "Overall verdict: PASS — dispatch ready." PRESENT.

**Key evidence:** "Gate: PASS. Proceed to angle generation." and "Cross-disciplinary slot 1 (required — NOT in intake brief): Target tradition: Database systems / data management. Basis: KGs are deployed in graph databases (Neo4j, Amazon Neptune, Virtuoso)..."

Score 3: all three procedural elements present and substantively complete.

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Four required elements assessed:

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:**

Appears three times: "**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions listed above were enumerated by LLM only." (Step 2); "NOTE: VOCABULARY SELF-REPORT FLAG — traditions enumerated by LLM only; no survey-paper bootstrap performed" (intake brief block); and once more in the GATE SUMMARY flags section. PRESENT.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":**

The output consistently uses "Severity: MODERATE" and "Source B status: UNAVAILABLE — MODERATE." The exact required phrase "MODERATE RISK" or "HIGH RISK" (with the word "RISK") does not appear anywhere in the document. The semantic content is equivalent — the output clearly conveys a moderate-severity limitation — but the exact required label format is absent. ABSENT by strict reading.

**(c) ≥1 tradition named as possibly absent due to source limitation:**

The GATE SUMMARY flags: "Traditions from non-English or highly specialized sub-fields may be missing." This identifies a category of potentially absent traditions (non-English, highly specialized) but does not name a specific tradition (e.g., "the [X] tradition may be absent"). No specific named tradition is called out as possibly missing due to the source limitation. ABSENT — category named, no specific tradition identified by name.

**(d) Coverage described as reduced (not FULL):**

"All vocabulary traditions listed above were enumerated by LLM only. An external survey-paper probe is recommended before treating this as a complete tradition enumeration." Survey paper status: "UNAVAILABLE — Source B is unavailable in subagent context. Vocabulary-discovery pass recommended after intake." Coverage is explicitly described as incomplete. PRESENT.

Elements (a) and (d) are fully satisfied. Elements (b) and (c) are absent: (b) fails on exact label format ("MODERATE" vs. "MODERATE RISK"); (c) fails because no specific tradition is named as possibly absent, only a generic category.

The flag is present and coverage reduction is described, which distinguishes this from Score 1 (which requires no formal flag text). The two missing elements preclude Score 3. Score 2 ("self-report flag + severity but missing one required element") is the closest match, applied leniently to account for two partially-satisfied elements.

**Key evidence:** "**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions listed above were enumerated by LLM only" and "Source B status: UNAVAILABLE — MODERATE" (not "MODERATE RISK"); "Traditions from non-English or highly specialized sub-fields may be missing" (category, not a named tradition).

Score 2: flag present and coverage described as reduced; severity indicated without required "RISK" suffix; no specific named tradition called out as possibly absent.

---

## Summary

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary tradition coverage | 3 |
| Q7 — Structural completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / non-redundancy | 3 |
| P1 — Procedure adherence | 3 |
| M1 — Self-assessment degraded mode | 2 |
