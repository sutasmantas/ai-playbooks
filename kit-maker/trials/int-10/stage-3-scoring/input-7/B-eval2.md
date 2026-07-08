# Scoring Rationale — INT-10, Input 7, Condition B, Evaluator 2

**Scored:** 2026-07-06
**Output file:** `stage-2-execution/input-7/cond-b-output.md`
**Evaluator:** blind (condition unknown at scoring time)

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The user prompt words were: "knowledge," "graphs," "combined," "LLMs."

The output lists 16 distinct named vocabulary traditions across three structure elements (intake brief Step 2, coverage map, summary table). The 12 traditions from the intake brief are: KR&R / Semantic Web; Language model knowledge encoding / probing; Information retrieval / RAG; Graph machine learning; Neurosymbolic AI; Knowledge engineering / KG construction; Question answering / semantic parsing; LLM reliability / factuality; LLM structured reasoning / chain-of-thought; Applied ML / domain-specific knowledge integration; NLP evaluation methodology / benchmarks; Dialogue systems / conversational AI. Two further cross-disciplinary traditions are added in the coverage map: Database / data management and Cognitive science / semantic memory.

That is 14 distinct non-synonymous tradition labels (16 if the adversarial slot and null-hypothesis slot labels are counted separately).

Traditions NOT derivable from user input words include: "Neurosymbolic AI," "NLP evaluation methodology / benchmarks," "Dialogue systems / conversational AI," "LLM reliability / factuality," "Cognitive science / semantic memory," "Database / data management" — all 6 require vocabulary entirely absent from the four user prompt words.

The adjacent-discipline requirement is met by Cognitive science / semantic memory, which the coverage map explicitly grounds in cognitive psychology literature: "Collins-Quillian spreading activation, ACT-R... Psychological Review; Cognitive Science journal." This tradition has primary subject matter in human cognition, not information retrieval or machine learning.

**Quoted evidence:** "Cognitive science / semantic memory (cross-disciplinary — NOT in intake brief) [...] Cognitive science has decades of research on knowledge representation, concept organization, and memory retrieval — almost never cited in ML papers"

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present.

**(a) Null-hypothesis angle naming a specific failure mechanism:** Angle N1 is not generic ("failures exist") — it names specific mechanisms: "entity sparsity, KG incompleteness, domain mismatch," and "KGQA LLM zero-shot outperforms knowledge graph structured retrieval." These are specific and checkable conditions, not just an acknowledgment that failures occur.

**(b) Exact text "ADVERSARIAL-FLAGGED":** Present verbatim in multiple locations. In the type allocations: "Slot D1 (Adversarial — DB / NL query systems): [ADVERSARIAL-FLAGGED] Natural language to graph query." In Angle D1 header: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]." In Gate 1 summary: "Adversarial angle: PRESENT (D1, ADVERSARIAL-FLAGGED, separate context note)."

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:** C1 (Database / data management) and C2 (Cognitive science / semantic memory) are both explicitly marked "NOT in intake brief" with stated selection basis. C2 uses vocabulary — "spreading activation, Collins-Quillian, ACT-R, Psychological Review, MeSH semantic memory" — with zero overlap to the confirmatory NLP vocabulary.

**Quoted evidence (a):** "entity sparsity, KG incompleteness, domain mismatch"; "KGQA LLM zero-shot outperforms knowledge graph structured retrieval negative result"
**Quoted evidence (b):** "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"
**Quoted evidence (c):** "Cognitive science / semantic memory (cross-disciplinary — NOT in intake brief) [...] PubMed (search MeSH: 'semantic memory' + 'computational model'); Psychological Review"

---

## Q5 — ACTIONABILITY

**Score: 3**

All 16 angles have 3 or more runnable query strings (N1 has 4). Every query uses tradition-specific vocabulary. Every angle has at least one specificity operator.

Specificity operators observed:
- Named techniques: "LAMA benchmark" (A2), "TransE, RotatE, ComplEx" (A4), "NL2SPARQL NL2Cypher" (D1)
- Named venues: "VLDB / SIGMOD proceedings" (C1), "ACL Anthology" (A7, A11), "Psychological Review; Cognitive Science journal" (C2)
- Named resources: "Wikidata Freebase" (A7), "UMLS" (A9), "ConceptNet ATOMIC" (coverage gap in A7)
- Named systems: "GraphRAG, KGRAG, G-RAG" (A3), "Neo4j / Amazon Neptune / Virtuoso" (C1)
- Year ranges (numerical threshold): "2024 2025" or "2023 2024 2025" present in ≥12 angles

Generic concatenation is absent — queries name specific benchmarks, databases, or systems rather than stringing field nouns together without specificity anchors.

The adversarial angle (D1) uses entirely vocabulary-isolated queries: "natural language interface graph database text-to-Cypher text-to-SPARQL LLM 2024 2025" — no NLP confirmatory terms present.

**Quoted evidence:** "NL2SPARQL NL2Cypher query generation language model property graph benchmark evaluation"; "parametric knowledge large language models probing factual recall LAMA benchmark 2023 2024"

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The output's own Gate 2 runs a Boolean-connective distinctness test on 7 high-overlap candidate pairs. All 7 pass. Independent inspection confirms:

The most plausible overlap risk is A3 (KG-RAG) vs A8 (hallucination reduction), since GraphRAG is frequently motivated by factuality goals. However, A3 queries target retrieval architecture and entity linking ("GraphRAG graph-augmented RAG entity linking retrieval") while A8 queries target measurement of factual error rates ("hallucination reduction factuality measurement," "fact verification knowledge base"). The papers these would retrieve are structurally different: A3 yields system-design papers; A8 yields evaluation and error-analysis papers.

A7 (KGQA / semantic parsing) and A11 (benchmark methodology) could overlap through shared KGQA datasets, but A7 queries target semantic parsing methods and A11 queries target contamination and evaluation design — different research questions even when using the same benchmarks.

D1 (adversarial, text-to-Cypher) is vocabulary-isolated from C1 (data quality / schema consistency) despite both being labeled "Database" tradition. The output documents this explicitly and applies the adversarial exemption.

No pair of non-adversarial, non-null-hypothesis angles shares dominant query terms across more than one query string.

**Quoted evidence:** "No angle pairs flagged for synonymy"; "D1 (adversarial) shares DB tradition with C1 (cross-disciplinary) — adversarial exemption applies; different facets confirmed (query generation vs. data quality)"

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements are present.

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:** The "COVERAGE MAP" block lists all 12 traditions from the intake brief with "Gap flag: No" for each, plus two cross-disciplinary slots (Database / data management; Cognitive science / semantic memory) each with an explicit "Basis:" paragraph explaining why that tradition was selected. The basis statements are substantive, not formulaic.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:** The "INTAKE BRIEF" block contains: 12 vocabulary traditions with representative terms; "Question type: EXPLORATORY" with classification reasoning; "Source B status: UNAVAILABLE — MODERATE" as the severity assessment with a stated basis ("12 distinct vocabulary traditions... domain is well-represented in LLM training data").

**(c) ≥1 gate documented as run with GATE PASSED or GATE FAILED notation:** The intake gate at Step 6 reads "Gate: PASS. Proceed to angle generation." Part 3 documents Gates 1–4 each with an explicit "Gate N: PASS" header and the Gate Summary block restates all four verdicts.

**Quoted evidence:** "Gate: PASS. Proceed to angle generation."; "Gate 1 — Completeness: PASS [...] Gate 2 — Distinctness: PASS [...] Overall verdict: PASS — dispatch ready"

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Three of four required elements are present; one is absent.

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** Present multiple times. First occurrence: "Severity: MODERATE. Proceed with VOCABULARY SELF-REPORT FLAG." Formal declaration: "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions listed above were enumerated by LLM only." Also appears in the intake brief NOTE block and in the Gate Summary.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** The output uses "Severity: MODERATE" and "UNAVAILABLE — MODERATE," not "MODERATE RISK." The risk characterization is present in meaning — the output explains that proceeding with LLM-only enumeration carries the specific risk of missing traditions — but the exact label "MODERATE RISK" does not appear. This element is borderline; I read it as present in substance but absent in the exact prescribed label form. Given that the criterion specifies the label text, I treat this as partially present.

**(c) ≥1 tradition named as possibly absent due to source limitation:** This element is clearly absent. The output says "Traditions from non-English or highly specialized sub-fields may be missing" — this is a categorical hedge, not a named specific tradition. No tradition label (e.g., "Industrial ontology engineering" or "Library and information science") is cited as possibly missing. The Gate Summary repeats the same categorical phrasing without naming a specific tradition.

**(d) Coverage described as reduced (not FULL):** Present. "Survey paper status: UNAVAILABLE — Source B is unavailable in subagent context. Vocabulary-discovery pass recommended after intake." The recommendation for an additional discovery pass is an explicit signal that coverage is not treated as complete.

Elements (a), (d) clearly present; (b) present in substance, absent in exact label form; (c) absent. The output satisfies the self-report flag + severity combination but is missing the named-absent-tradition element. Score 2 applies.

**Quoted evidence:** "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions listed above were enumerated by LLM only. An external survey-paper probe is recommended before treating this as a complete tradition enumeration."; "Traditions from non-English or highly specialized sub-fields may be missing" [no specific tradition named]

---

## Final Scores

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary tradition coverage | 3 |
| Q7 — Structural completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / non-redundancy | 3 |
| P1 — Procedure adherence | 3 |
| M1 — Self-assessment degraded mode | 2 |
