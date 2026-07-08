# Angle-Gen-Kit Output — Condition C
**Input ID:** 6
**Topic:** How to achieve comprehensive retrieval in systematic literature searches
**Generated:** 2026-07-05
**Model:** claude-sonnet-4-6
**Source B status:** UNAVAILABLE (subagent context without web access)

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: Methods and strategies for achieving comprehensive retrieval in systematic literature
searches — ensuring that a search identifies all or nearly all relevant sources on a topic
without systematic omission.

Anchor vocabulary:
  - "comprehensive retrieval" → Information retrieval (IR) tradition
  - "systematic literature searches" → Evidence synthesis / systematic review methodology
    tradition

Candidate vocabulary traditions:
  1. Evidence synthesis / systematic review methodology — systematic review, PICO, search
     strategy, grey literature, MEDLINE, Cochrane, PRISMA, MECIR, information specialist,
     publication bias, sensitivity, multi-database search
  2. Information retrieval (academic CS/IR) — recall, precision, F-measure, Boolean retrieval,
     query formulation, query expansion, high-recall retrieval, relevance, Bradford's Law,
     recall-oriented retrieval, sensitivity-specificity
  3. Library and information science (LIS) — reference librarianship, controlled vocabulary,
     subject headings, pearl-growing, bibliographic database, grey literature, citation
     tracking, snowballing, reference chaining, MeSH, EMTREE, CINAHL headings
  4. Bibliometrics / scientometrics — citation analysis, co-citation analysis, forward citation,
     backward citation, snowballing, bibliographic coupling, citation network, literature
     mapping, Bradford zones
  5. Text mining / NLP / ML for systematic review automation — SR automation, PICO extraction,
     machine-assisted search, natural language processing, semi-automated screening,
     technology-assisted review, active learning
  6. Software engineering grey literature / multivocal literature review — MLR, multivocal
     literature review, grey literature vs. white literature, practitioner sources, engineering
     evidence

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate
  traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known
  anchor paper) is recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  (No comparison or intervention-outcome structure in the prompt; user asks "how to achieve"
  which maps to "what is the space of approaches" — PCC frame: Population = researchers
  conducting systematic searches; Concept = comprehensive retrieval; Context = systematic
  literature searches)

Scope markers: None stated — inferred scope: any academic or practitioner domain conducting
  systematic literature searches; not restricted to clinical medicine despite that tradition
  being the most mature; includes both manual and automated/assisted search approaches

Known exclusions: None stated

Domain maturity estimate: MIXED (academic-heavy with significant practitioner component)
  Basis: "systematic literature searches" is academic vocabulary; "comprehensive retrieval"
  has both academic (IR journals) and practitioner (Cochrane Handbook, librarian guidance)
  production; neither anchor term is exclusively practitioner-facing; clinical SR methodology
  is highly developed in academic literature; LIS practitioner community also produces
  substantial guidance

Survey paper status: CHECK REQUIRED — Source B unavailable; vocabulary-discovery pass
  recommended before finalizing

Source B status: UNAVAILABLE — MODERATE (Source A + Source C together identified 6 distinct
  vocabulary traditions; severity is MODERATE; proceed with VOCABULARY SELF-REPORT FLAG)

Source C — absent-term signal (terms expected in this topic area that the user did NOT use):
  - "grey literature" — major route to comprehensive retrieval not named by user
  - "snowballing" — standard supplementary technique not named
  - "publication bias" — major threat to completeness not named
  - "PRISMA" / "Cochrane" — dominant standard frameworks not named
  - "query expansion" / "MeSH" — key vocabulary mechanisms not named
  - "backward/forward citation chasing" — pearl-growing technique not named
  - "technology-assisted review" — ML-assisted approaches not named
  - "multivocal literature review" — SE-specific tradition not named
  - "recall audit" / "benchmarking" — evaluation methods not named
  User framing is neutral — neither committed to clinical/Cochrane vocabulary nor to IR
  vocabulary. This is a clean EXPLORATORY entry with no tradition-loading.
```

**Intake gate check:**
- Topic field populated: YES
- Candidate vocabulary traditions: 6 entries — YES
- Question type classified: EXPLORATORY — YES
- Source B handling: UNAVAILABLE — MODERATE flag written — YES

Proceed to angle generation.

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: Evidence synthesis / systematic review methodology
  Representative terms: systematic review, grey literature, MEDLINE, EMBASE, Cochrane,
    PRISMA, MECIR, publication bias, information specialist, multi-database, search strategy
  Planned angle slots:
    A1 (Confirmatory) — multi-database coverage
    A2 (Confirmatory) — grey literature inclusion
    A3 (Confirmatory) — search reporting and documentation standards
  Gap flag: NO — 3 slots assigned

Tradition 2: Information retrieval (academic CS/IR)
  Representative terms: recall, precision, Boolean retrieval, query formulation, query
    expansion, high-recall retrieval, recall-precision tradeoff, Bradford's Law
  Planned angle slots:
    A4 (Confirmatory) — Boolean query design for recall maximization
    A5 (Confirmatory) — query expansion and vocabulary enrichment
    A6 (Confirmatory) — recall measurement and evaluation
  Gap flag: NO — 3 slots assigned

Tradition 3: Library and information science (LIS)
  Representative terms: controlled vocabulary, subject headings, pearl-growing,
    citation tracking, snowballing, reference chaining, MeSH, EMTREE, search filter design
  Planned angle slots:
    A7 (Confirmatory) — citation tracking and reference snowballing
    A8 (Confirmatory) — controlled vocabulary and indexing systems
    A9 (Confirmatory) — search filter development and validation
  Gap flag: NO — 3 slots assigned

Tradition 4: Bibliometrics / scientometrics
  Representative terms: citation network, co-citation analysis, bibliographic coupling,
    Bradford zones, literature mapping, forward/backward citation
  Planned angle slot:
    A10 (Confirmatory) — bibliometric mapping for coverage completeness
  Gap flag: PARTIAL — bibliometrics is underrepresented at 1 slot; acceptable given overlap
    with LIS tradition (citation tracking); scope accepted at 1 slot

Tradition 5: Text mining / NLP / ML for systematic review automation
  Representative terms: SR automation, machine-assisted search, NLP, semi-automated
    screening, technology-assisted review, active learning, PICO extraction
  Planned angle slots:
    A11 (Confirmatory) — ML and NLP for automated search generation
    A12 (Confirmatory) — technology-assisted screening and active learning
  Gap flag: NO — 2 slots assigned

Tradition 6: Software engineering grey literature / multivocal literature review
  Representative terms: MLR, multivocal literature review, practitioner sources, white
    literature, grey literature, SE evidence synthesis
  Planned angle slot:
    A13 (Confirmatory) — multivocal literature review methodology
  Gap flag: NO — 1 slot assigned; this tradition has a narrower scope than the others

Traditions NOT yet represented in the planned list:
  None — all 6 traditions from the intake brief have at least one angle slot.
  NOTE: Health technology assessment (HTA) / regulatory search requirements was considered
  as an additional tradition but its vocabulary overlaps substantially with Tradition 1
  (evidence synthesis); scoped in under A3.

Cross-disciplinary slot (required — tradition NOT in the intake brief):
  Target tradition: Patent search / intellectual property research
  Basis for selection: Patent prior art searches have an independent, legally-enforced
    requirement for comprehensive retrieval. The tradition uses different vocabulary (prior
    art, patent classification, IPC/CPC codes, non-patent literature), different databases
    (EPO Espacenet, USPTO, Derwent Innovation), and different methodological frameworks.
    Patent search methodology has developed its own completeness standards independent of
    the clinical SR and LIS traditions. This is the only major domain where exhaustive
    retrieval is a legal requirement — making it a high-value adversarial cross-check on
    what "comprehensive" actually means in practice.

Angle count justification: 16 angles for 6 vocabulary traditions. The standard range
  is 5–12; the hard-input range (≥4 traditions, multi-discipline) is 20–30. 16 is between
  these ranges, appropriate for 6 well-defined traditions where some have more productive
  facets (SR methodology, IR, LIS) than others (bibliometrics, SE grey literature).
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Evidence synthesis): Multi-database coverage strategies
Slot A2 (Confirmatory — Evidence synthesis): Grey literature and unpublished sources
Slot A3 (Confirmatory — Evidence synthesis): Search documentation and reporting standards
Slot A4 (Confirmatory — IR): Boolean query design for recall maximization
Slot A5 (Confirmatory — IR): Query expansion and vocabulary enrichment
Slot A6 (Confirmatory — IR): Recall measurement and search evaluation
Slot A7 (Confirmatory — LIS): Citation tracking and reference snowballing
Slot A8 (Confirmatory — LIS): Controlled vocabulary and indexing systems
Slot A9 (Confirmatory — LIS): Search filter development and validation
Slot A10 (Confirmatory — Bibliometrics): Bibliometric mapping for coverage completeness
Slot A11 (Confirmatory — Text mining/NLP/ML): ML and NLP for automated search generation
Slot A12 (Confirmatory — Text mining/NLP/ML): Technology-assisted screening and active learning
Slot A13 (Confirmatory — SE grey literature): Multivocal literature review methodology
Slot C1 (Cross-disciplinary — Patent search): Exhaustive prior art search methodology
Slot N1 (Null-hypothesis): Evidence of search failure and systematic recall deficits
Slot D1 (Adversarial — Decision science / satisficing): Rapid review and targeted search as
  alternatives to comprehensive search
  NOT FROM: evidence synthesis, IR, LIS, bibliometrics, text mining, SE grey literature
```

---

## ANGLE LIST

---

### ANGLE 1: Multi-Database Search Strategy Design
```
ANGLE 1: Multi-Database Search Strategy Design
===========
Vocabulary tradition: Evidence synthesis / systematic review methodology
Angle type: Confirmatory
Predicted research character: consensus (practitioner guidelines + empirical recall studies)
What to extract: Which database combinations achieve highest recall; evidence on how many
  databases are required for adequate coverage; domain-specific database selection guidance;
  how much each additional database contributes to recall

Source type (academic): PubMed/MEDLINE (primary; SR methodology papers indexed here);
  Cochrane Methodology Register
Source type (practitioner): Cochrane Handbook for Systematic Reviews; JBI Manual for
  Evidence Synthesis; institutional search guides from medical library associations

Queries:
  Q1: systematic review database search strategy multiple databases comprehensiveness recall
  Q2: MEDLINE EMBASE Cochrane Central database coverage overlap recall systematic review
  Q3: database selection systematic evidence synthesis number databases adequate coverage

Coverage-gap note: Queries cover general multi-database logic; domain-specific database
  selection (e.g., PsycINFO for psychology, AGRICOLA for agriculture) is not addressed
  in these three queries. A follow-up domain-scoped angle would be needed for non-clinical
  domains.
```

---

### ANGLE 2: Grey Literature and Unpublished Sources
```
ANGLE 2: Grey Literature and Unpublished Sources for Comprehensive Retrieval
===========
Vocabulary tradition: Evidence synthesis / systematic review methodology
Angle type: Confirmatory
Predicted research character: empirical (quantified impact on recall) + consensus (guidance)
What to extract: Quantified contribution of grey literature to overall recall in SRs;
  types of grey literature sources (clinical trial registries, conference proceedings,
  theses, technical reports); methods for identifying unpublished or ongoing studies;
  publication bias reduction through grey literature inclusion

Source type (academic): PubMed/MEDLINE; Systematic Reviews journal; Research Synthesis
  Methods journal
Source type (practitioner): WHO trial registry guidelines; PROSPERO (systematic review
  registry); clinical trial registries documentation; grey literature search guides from
  NYAM Grey Literature Report

Queries:
  Q1: grey literature systematic review comprehensiveness unpublished studies recall
  Q2: publication bias grey literature retrieval supplementary sources impact systematic review
  Q3: clinical trials registries theses conference proceedings grey literature search strategy

Coverage-gap note: Queries do not specifically address web-scraped or social media sources
  as grey literature, which is an emerging and contested area.
```

---

### ANGLE 3: Search Reporting Standards and Peer Review of Search Strategies
```
ANGLE 3: Search Reporting Standards and Peer Review of Search Strategies
===========
Vocabulary tradition: Evidence synthesis / systematic review methodology
Angle type: Confirmatory
Predicted research character: consensus (standards documents) + empirical (compliance studies)
What to extract: PRISMA and MECIR standards for search reporting; evidence on whether
  peer review of search strategies improves recall; role of information specialists in
  ensuring search comprehensiveness; documentation requirements that enforce completeness

Source type (academic): PubMed/MEDLINE; Journal of Clinical Epidemiology; Research Synthesis
  Methods
Source type (practitioner): PRISMA guidelines website (prisma-statement.org); Cochrane
  MECIR standards; Medical Library Association guidelines; PRESS checklist documentation

Queries:
  Q1: PRISMA search reporting standards systematic review documentation reproducibility
  Q2: MECIR search strategy peer review information specialist systematic review quality
  Q3: librarian information specialist systematic review search comprehensiveness impact

Coverage-gap note: These queries primarily capture the clinical SR context; reporting
  standards in non-clinical disciplines (social science, education) use different frameworks
  (ENTREQ, PRISMA-S) not addressed here.
```

---

### ANGLE 4: Boolean Query Design for High-Recall Retrieval
```
ANGLE 4: Boolean Query Design for High-Recall Retrieval
===========
Vocabulary tradition: Information retrieval (academic CS/IR)
Angle type: Confirmatory
Predicted research character: empirical (controlled studies with recall/precision metrics)
What to extract: Boolean query construction techniques that maximize recall; effects of
  OR vs. AND operator balance on recall; proximity operators; truncation and wildcard
  strategies; query length effects on recall; sensitivity-optimized search string design

Source type (academic): ACM Digital Library (SIGIR, ECIR proceedings); arXiv cs.IR;
  Semantic Scholar (IR conference papers)
Source type (practitioner): Cochrane Handbook Chapter 4 (search strategy design); Evidence
  Aid search strategy documentation; practitioner guides from health sciences libraries

Queries:
  Q1: Boolean search strategy high recall sensitivity literature retrieval systematic
  Q2: search string construction truncation wildcards recall optimization information retrieval
  Q3: sensitivity specificity tradeoff Boolean query systematic literature search recall

Coverage-gap note: Queries are general-purpose; field-specific Boolean syntax differences
  (OVID vs. Embase vs. EBSCO interfaces) are not addressed.
```

---

### ANGLE 5: Query Expansion and Synonym Enrichment for Recall
```
ANGLE 5: Query Expansion and Synonym Enrichment for Recall
===========
Vocabulary tradition: Information retrieval (academic CS/IR)
Angle type: Confirmatory
Predicted research character: empirical (controlled recall measurements before/after expansion)
What to extract: Evidence on how much query expansion improves recall; automatic vs. manual
  synonym identification; thesaurus-based vs. corpus-based expansion; combined free-text
  and controlled vocabulary strategies; diminishing returns on expansion; which expansion
  techniques achieve best recall gains

Source type (academic): arXiv cs.IR; ACM SIGIR proceedings; Semantic Scholar
Source type (practitioner): PubMed MeSH documentation; Embase EMTREE documentation;
  librarian search strategy templates

Queries:
  Q1: query expansion synonym enrichment systematic review recall improvement
  Q2: free text controlled vocabulary combination recall sensitivity literature search
  Q3: thesaurus automatic query expansion information retrieval recall precision empirical

Coverage-gap note: Queries cover vocabulary expansion broadly; domain-specific synonym
  generation challenges (e.g., drug name variants, disease synonym complexity in clinical SR)
  are a distinct sub-area not fully covered here.
```

---

### ANGLE 6: Recall Measurement and Evaluation of Search Completeness
```
ANGLE 6: Recall Measurement and Evaluation of Search Completeness
===========
Vocabulary tradition: Information retrieval (academic CS/IR)
Angle type: Confirmatory
Predicted research character: empirical (benchmark studies, known-item test methodologies)
What to extract: Methods for measuring actual recall of a search strategy; known-item
  test approaches (ISSG test sets); benchmarking against gold standards; recall audit
  methodologies; how researchers estimate and report recall; whether 95% recall thresholds
  are achievable in practice

Source type (academic): Semantic Scholar; JASIST; arXiv cs.IR; Information Processing
  and Management journal
Source type (practitioner): Cochrane ISSG test set documentation; health library
  association benchmark resources

Queries:
  Q1: recall measurement systematic review search strategy evaluation benchmarking
  Q2: ISSG test set recall audit systematic review known-item search evaluation
  Q3: search completeness estimation methods systematic literature review recall threshold

Coverage-gap note: Known-item test benchmarks exist mainly in clinical domains; whether
  equivalent evaluation standards exist for social science, education, or engineering
  SRs is an open question not addressed by these queries.
```

---

### ANGLE 7: Citation Tracking and Reference Snowballing
```
ANGLE 7: Citation Tracking and Reference Snowballing as Supplementary Search Techniques
===========
Vocabulary tradition: Library and information science (LIS)
Angle type: Confirmatory
Predicted research character: empirical (recall improvement studies) + consensus (guidance)
What to extract: Contribution of forward/backward citation chasing to overall recall;
  pearl-growing technique (start from a known relevant paper, trace references and
  citations); comparison of snowballing vs. database search recall; when snowballing
  adds unique hits not found by database search; hand-searching as complementary technique

Source type (academic): PubMed/MEDLINE; JASIST; Systematic Reviews journal; Semantic Scholar
Source type (practitioner): Cochrane Handbook guidance on supplementary search techniques;
  JBI supplementary search guidance; professional search guides from medical libraries

Queries:
  Q1: snowballing citation tracking systematic review supplementary search recall
  Q2: backward forward citation chasing pearl growing literature review comprehensiveness
  Q3: reference list checking hand searching systematic review additional studies recall

Coverage-gap note: Most recall evidence for snowballing comes from clinical systematic
  reviews; whether these recall improvement figures transfer to social science or technical
  domains is uncertain.
```

---

### ANGLE 8: Controlled Vocabulary and Indexing Systems for Comprehensive Search
```
ANGLE 8: Controlled Vocabulary and Indexing Systems for Comprehensive Search
===========
Vocabulary tradition: Library and information science (LIS)
Angle type: Confirmatory
Predicted research character: empirical (recall comparison studies) + consensus (guidance)
What to extract: Effect of MeSH, EMTREE, CINAHL subject headings on recall versus free-text
  searches; consistency and completeness of database indexing; lag between publication and
  indexing (reduces recall for recent papers); strategies for combining controlled vocabulary
  with free-text to maximize recall; explosion vs. focused subject heading strategies

Source type (academic): PubMed/MEDLINE; JASIST; Journal of the Medical Library Association
Source type (practitioner): PubMed MeSH Browser documentation; Embase EMTREE database
  documentation; NLM training materials; CINAHL subject headings documentation

Queries:
  Q1: MeSH subject headings controlled vocabulary recall systematic review search
  Q2: controlled vocabulary free text combination systematic search sensitivity recall
  Q3: database indexing completeness lag controlled vocabulary retrieval systematic review

Coverage-gap note: This angle covers MeSH and EMTREE primarily; controlled vocabulary
  systems in non-health domains (ERIC for education, PsycINFO Thesaurus, INSPEC) are
  not covered by these queries. SPECIFICITY GATE APPLIED for Q1 (MeSH is a proper noun
  — query not further expanded).
```

---

### ANGLE 9: Search Filter Development and Sensitivity-Specificity Optimization
```
ANGLE 9: Search Filter Development and Validation for Sensitivity Maximization
===========
Vocabulary tradition: Library and information science (LIS)
Angle type: Confirmatory
Predicted research character: empirical (validation studies with sensitivity/specificity metrics)
What to extract: Methodologies for developing high-sensitivity search filters; validated
  filters for study design identification (RCT filters, observational study filters);
  sensitivity vs. specificity tradeoffs in filter design; whether maximizing sensitivity
  reduces workload for screening; filter validation and transfer across databases

Source type (academic): PubMed/MEDLINE; Journal of Clinical Epidemiology; Semantic Scholar
Source type (practitioner): Cochrane Highly Sensitive Search Strategy documentation;
  InterTASC (Information Specialists' Sub-Group) filter register; ISSG search filter resource

Queries:
  Q1: search filter development validation sensitivity systematic review
  Q2: highly sensitive search strategy Cochrane RCT filter recall maximizing
  Q3: methodological search filter sensitivity specificity optimization systematic review

Coverage-gap note: Most validated filters are for clinical study designs (RCT, cohort);
  equivalent validated filters for qualitative research or software engineering studies
  are less well-developed.
```

---

### ANGLE 10: Bibliometric Mapping and Citation Network Analysis for Coverage Completeness
```
ANGLE 10: Bibliometric Mapping and Citation Network Analysis for Coverage Completeness
===========
Vocabulary tradition: Bibliometrics / scientometrics
Angle type: Confirmatory
Predicted research character: empirical (network analysis studies) + gap (limited direct
  application to comprehensiveness assessment)
What to extract: Whether bibliometric analysis can identify uncovered literature clusters;
  co-citation analysis as a tool for discovering adjacent literature; Bradford zone analysis
  for estimating coverage of core journals; using citation networks to detect database
  coverage gaps; whether visible-literature concentration signals invisible-literature gaps

Source type (academic): Scientometrics journal; JASIST; Semantic Scholar; Journal of
  Informetrics
Source type (practitioner): VOSviewer and CiteSpace documentation; bibliometric mapping
  guides for researchers; research front identification tutorials

Queries:
  Q1: bibliometric analysis literature coverage completeness systematic review citation network
  Q2: co-citation analysis database coverage gap identification systematic literature search
  Q3: Bradford zones journal coverage systematic review database comprehensiveness

Coverage-gap note: This tradition has limited direct evidence on whether bibliometric
  analysis improves retrieval comprehensiveness in practice; most studies describe the
  technique rather than validating its impact on recall. This may be a productive gap angle.
```

---

### ANGLE 11: Machine Learning and NLP for Automated Search Generation
```
ANGLE 11: Machine Learning and NLP for Automated Search Strategy Generation
===========
Vocabulary tradition: Text mining / NLP / ML for systematic review automation
Angle type: Confirmatory
Predicted research character: empirical (recall measurements for ML-generated vs. manual searches)
What to extract: Whether ML-generated search strings match recall of expert-designed
  searches; NLP approaches to query generation from protocol text; large language models
  for search string development; active learning to iteratively expand search coverage;
  which NLP techniques achieve recall comparable to information specialists

Source type (academic): arXiv cs.CL + cs.IR (correct category combination per
  platform-calibration.md); ACM Digital Library (SIGIR, CIKM); JAMIA
  (Journal of the American Medical Informatics Association)
Source type (practitioner): GitHub (search: systematic review automation, ≥50 stars);
  Cochrane AI working group reports; Systematic Review Toolbox (srtoolbox.org)

Queries:
  Q1: machine learning automated search strategy generation systematic review recall
  Q2: natural language processing query generation systematic literature review NLP
  Q3: large language model search string development systematic review 2023 2024 2025

Coverage-gap note: Most empirical studies of ML-assisted search come from clinical domains;
  transfer to social science or engineering SR contexts is under-studied.
```

---

### ANGLE 12: Technology-Assisted Screening and Active Learning for Recall Assurance
```
ANGLE 12: Technology-Assisted Review and Active Learning to Reduce Missed Studies
===========
Vocabulary tradition: Text mining / NLP / ML for systematic review automation
Angle type: Confirmatory
Predicted research character: empirical (recall at various stopping points; missed-study rates)
What to extract: Active learning approaches that prioritize screening to minimize missed
  relevant studies; recall estimates at different screening stopping rules; whether
  technology-assisted review achieves equivalent or higher recall than full manual screening;
  false-negative rates; stopping criteria that guarantee specified recall levels

Source type (academic): arXiv cs.LG + cs.IR; Systematic Reviews journal; JAMIA;
  Semantic Scholar (ACL, ECIR, SIGIR proceedings)
Source type (practitioner): GitHub (search: active learning systematic review, CLEF eHealth
  repositories); SWIFT-Review and Rayyan tool documentation; Cochrane technology-assisted
  review guidance

Queries:
  Q1: technology-assisted review active learning systematic review recall missed studies
  Q2: semi-automated screening stopping rule recall guarantee systematic review false negatives
  Q3: machine learning screening systematic review sensitivity missed relevant papers

Coverage-gap note: This angle focuses on the screening phase (post-search); while screening
  completeness is part of comprehensive retrieval broadly construed, the search strategy
  phase (Angles 1-9) is the primary route. This angle addresses the boundary where retrieved
  sets are filtered.
```

---

### ANGLE 13: Multivocal Literature Review Methodology for Mixed-Source Domains
```
ANGLE 13: Multivocal Literature Review (MLR) Methodology for Engineering and Technology Domains
===========
Vocabulary tradition: Software engineering grey literature / multivocal literature review
Angle type: Confirmatory
Predicted research character: consensus (methodological guidance) + empirical (few validation studies)
What to extract: MLR methodology for combining academic white literature with practitioner
  grey literature; systematic search strategies adapted for non-indexed practitioner sources;
  quality criteria for grey literature in engineering contexts; completeness standards when
  academic databases cover only a fraction of relevant practitioner knowledge; how MLR extends
  systematic review methods for practitioner-facing domains

Source type (academic): Semantic Scholar; IEEE Transactions on Software Engineering;
  Empirical Software Engineering journal; Information and Software Technology journal
Source type (practitioner): GitHub (grey literature guidelines); practitioner blog archives;
  Stack Overflow Data Explorer for practitioner question vocabulary; ACM DL EASE proceedings

Queries:
  Q1: multivocal literature review grey literature software engineering search strategy
  Q2: MLR systematic review practitioner sources white literature grey literature completeness
  Q3: grey literature search engineering systematic review supplementary sources methodology

Coverage-gap note: MLR methodology is primarily developed for software engineering; transfer
  to other applied domains (education technology, information systems) is emerging but
  less documented.
```

---

### ANGLE 14 (C1): Exhaustive Prior Art Search in Patent Research
```
ANGLE 14: Exhaustive Prior Art Search Methodology in Patent and IP Research
===========
[CROSS-DISCIPLINARY: tradition NOT in intake brief]
Vocabulary tradition: Patent search / intellectual property research
Angle type: Cross-disciplinary
Predicted research character: consensus (professional guidelines + legal standards)
What to extract: Standards for exhaustive prior art search imposed by patent law; vocabulary
  and classification systems (IPC, CPC) used to achieve complete coverage across patent
  offices; non-patent literature search alongside patent databases; techniques for ensuring
  no prior art is missed (which has legal consequences); cross-database search strategies
  for patents (EPO, USPTO, Derwent); parallels and divergences from systematic review
  methodology for achieving completeness

Source type (academic): World Patent Information journal; Semantic Scholar (patent search
  methodology papers); IP law review journals
Source type (practitioner): EPO search guidelines (European Patent Office); USPTO search
  procedure documentation; WIPO training materials; patent examiner search manuals

Queries:
  Q1: patent prior art search exhaustive comprehensive methodology completeness
  Q2: patent search strategy classification IPC CPC non-patent literature comprehensive
  Q3: prior art search systematic recall completeness patent examination methodology

Coverage-gap note: Patent search standards are legally enforced in a way that academic
  SR standards are not — the consequences of missing prior art (invalidating a patent)
  differ fundamentally from missing a study in an SR. This limits direct transfer but
  makes the tradition a valuable adversarial benchmark for what "comprehensive" means under
  enforcement pressure.
```

---

### ANGLE 15 (N1): Evidence of Search Failure and Systematic Recall Deficits
```
ANGLE 15: Evidence That Systematic Searches Fail to Achieve Comprehensive Retrieval
===========
[NULL-HYPOTHESIS]
Vocabulary tradition: Evidence synthesis / systematic review methodology (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical (recall audits, missed study counts, reproducibility failures)
What to extract: Studies demonstrating that even well-conducted systematic searches miss
  significant proportions of relevant literature; recall audit findings; studies showing
  that replication of systematic searches fails to reproduce the same results; evidence
  that no search strategy achieves 100% recall; cases where systematic reviews were updated
  and found prior omissions; conditions under which comprehensive retrieval is structurally
  unachievable; high-miss-rate domains

Source type (academic): PubMed/MEDLINE; Research Synthesis Methods; Systematic Reviews
  journal; Semantic Scholar
Source type (practitioner): Cochrane documentation of search updates finding missed studies;
  correction and retraction records in systematic review literature

Queries:
  Q1: systematic review missed studies recall deficit search strategy failure limitations
  Q2: recall audit systematic search missed papers incomplete retrieval quantified
  Q3: systematic review reproducibility search strategy replication failure comprehensiveness limits

Coverage-gap note: Evidence of failure is concentrated in clinical SR literature;
  whether comparable recall deficit data exists for social science, education, or engineering
  systematic searches is uncertain and itself a potential gap.
```

---

### ANGLE 16 (D1): Rapid Review and Targeted Search as Adequate Alternatives
```
ANGLE 16: Rapid Review and Targeted Search as Cost-Effective Alternatives to
  Comprehensive Retrieval
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]
Starting vocabulary (used for generation): satisficing, rapid evidence synthesis, targeted
  literature review, focused search, decision-relevant evidence, resource constraints,
  diminishing returns, acceptable comprehensiveness, scoping review
Excluded from generation (all terms used in confirmatory angles): systematic review,
  recall maximization, comprehensive retrieval, multi-database, grey literature, snowballing,
  PRISMA, Boolean query, MeSH, query expansion, machine learning, multivocal literature review
Vocabulary tradition: Decision science / evidence synthesis efficiency
Angle type: Adversarial
Predicted research character: empirical (comparative recall studies) + contested (active
  methodological debate in evidence synthesis community)
What to extract: Evidence that rapid reviews achieve comparable conclusions to full
  systematic reviews; satisficing thresholds in evidence gathering; marginal recall gain
  per additional search effort (diminishing returns); contexts where targeted evidence
  synthesis is sufficient for decision-making; whether comprehensive search is required
  for all review types or only high-stakes questions; costs of comprehensive search
  that may outweigh its benefits

Source type (academic): PubMed/MEDLINE (rapid review comparative studies); Health Technology
  Assessment journal; Cochrane rapid review guidance
Source type (practitioner): WHO rapid review guidance; government health agency
  evidence review methodologies; decision-support evidence synthesis reports

Queries:
  Q1: rapid review systematic review comparison completeness conclusions accuracy
  Q2: targeted evidence synthesis focused search satisficing acceptable comprehensiveness
  Q3: diminishing returns comprehensive search systematic review efficiency resource tradeoff

Coverage-gap note: This angle questions the premise of comprehensive retrieval; the
  literature is divided. Some studies show rapid reviews reach equivalent conclusions;
  others show clinically significant differences. The adversarial angle is strongest
  in applied policy contexts where resource constraints are binding.
```

---

## GATE SUMMARY

```
GATE SUMMARY
============

Gate 1 — Completeness:

  Null-hypothesis angle present:
    PASS — Angle 15 (N1) is explicitly framed as disconfirming; queries use "missed studies,"
    "recall deficit," "failure," "incomplete retrieval," "limits." Framing is not hedged
    confirmatory language.

  Adversarial angle present:
    PASS — Angle 16 (D1) is labeled [ADVERSARIAL-FLAGGED] with full dispatch note; generated
    from excluded vocabulary (satisficing, targeted, diminishing returns) not used in
    confirmatory angles.

  Cross-disciplinary angle present:
    PASS — Angle 14 (C1) targets patent search / IP research tradition, which is NOT in the
    intake brief's 6 candidate traditions. Tradition label differs from all intake brief
    traditions.

  Source-type coverage for practitioner (domain = MIXED → REQUIRED):
    PASS — Multiple angles assign specific practitioner sources: Cochrane Handbook (A1, A4),
    JBI Manual (A1, A7), PRISMA guidelines (A3), EPO/USPTO documentation (A14), GitHub
    repositories with quality thresholds (A11, A12, A13), MECIR standards (A3), ISSG
    documentation (A6, A9).

  Vocabulary-tradition map populated:
    PASS — Coverage map lists 6 distinct tradition names with representative terms. Cross-
    disciplinary tradition is a 7th.

  Gate 1 verdict: PASS

---

Gate 2 — Distinctness (Boolean-connective test):

  Pair A5 (query expansion) vs. A8 (controlled vocabulary):
    Most distinctive term A5: "thesaurus automatic query expansion"
    Most distinctive term A8: "MeSH EMTREE subject headings"
    Boolean OR test: Would OR retrieve same documents? NO — A5 retrieves computational
    IR papers on expansion algorithms; A8 retrieves LIS/MEDLINE-focused papers on indexing
    systems. Different author populations (IR CS researchers vs. medical librarians).
    PASS.

  Pair A7 (citation tracking/snowballing) vs. A10 (bibliometric mapping):
    Most distinctive term A7: "snowballing citation chasing pearl growing"
    Most distinctive term A10: "co-citation analysis Bradford zones bibliometric mapping"
    Boolean OR test: Would OR retrieve same documents? NO — A7 retrieves SR methodology
    papers on snowballing as a search technique; A10 retrieves scientometrics papers on
    network analysis methodology. PASS.

  Pair A11 (ML search generation) vs. A12 (technology-assisted screening):
    Most distinctive term A11: "automated search strategy generation NLP query"
    Most distinctive term A12: "active learning screening stopping rule missed studies"
    Boolean OR test: Would OR retrieve same documents? PARTIAL OVERLAP possible — both
    appear in SR automation literature. However, the facets are distinct: A11 is about
    generating queries, A12 is about processing retrieved sets. Both appear in the same
    SR automation review articles. FLAG: potential overlap in reviews of SR automation
    tools that cover both phases. A forward-citation check of SR automation surveys would
    likely retrieve both. SMALL-LITERATURE-ADJACENT — the SR automation literature is not
    small but the specific sub-area may produce overlap. Human judgment recommended before
    merging; the conceptual facets are genuinely different.

  Pair A1 (multi-database) vs. A2 (grey literature):
    These are both about what sources to search. Boolean OR would retrieve some of the same
    guidance documents. However, grey literature sources are structurally different from
    formal databases (different search interfaces, different vocabulary, different inclusion
    rationale). The traditions that produce these papers overlap in evidence synthesis but
    diverge in methodology. PASS — facets are distinct.

  Pair A3 (reporting standards) vs. A1 (multi-database strategy):
    A3 is about how searches are documented; A1 is about which databases to search. Different
    research questions produce different literatures. PASS.

  All other pairs: no shared distinctive vocabulary terms; PASS without formal test.

  Vocabulary-tradition distinctness:
    All 16 angles have distinct tradition labels or are clearly labeled as null-hypothesis /
    adversarial variants. The two text-mining angles (A11, A12) share the same tradition label
    (Text mining / NLP / ML). They are NOT the null-hypothesis or adversarial variants of each
    other. FLAG: A11 and A12 share a tradition label — this is a candidate for merger.
    Resolution: A11 focuses on the search generation phase; A12 focuses on the screening
    phase. These are structurally distinct phases of systematic review methodology. Scope split
    accepted: A11 = search phase; A12 = screening/selection phase. Both angles retained.

  Gate 2 verdict: PASS with two human-judgment flags:
    (1) A11/A12 tradition-label sharing — scope split accepted as above; human reviewer
        should validate that the facet distinction warrants separate angles
    (2) A11/A12 potential Boolean overlap in SR automation surveys — may retrieve overlapping
        review papers; acceptable given distinct operational facets

---

Gate 3 — Launchability:

  All 16 angles checked:
  - Concrete query strings: PASS — all 16 angles contain 3 runnable query strings each;
    no queries are descriptions or questions; all are pasteable search strings
  - No placeholder vocabulary: PASS — no "TBD," "[fill in]," or equivalent markers found
  - Source type named: PASS — all angles name specific academic platforms (PubMed/MEDLINE,
    arXiv cs.IR/cs.CL/cs.LG, JASIST, Semantic Scholar, ACM Digital Library) and specific
    practitioner sources (Cochrane Handbook, JBI Manual, EPO guidelines, PRISMA website,
    ISSG resource, GitHub with quality threshold stated)

  Gate 3 verdict: PASS

---

Gate 4 — Scoring prohibition:

  Check for LLM self-evaluation ranking: PASS — no angle contains "most promising," "most
  relevant," "strongest angle," or equivalent subjective quality assessments. No angles
  were ranked or filtered by content quality.

  Check for implicit quality assessment: PASS — angle records contain structural notes
  (coverage-gap notes, small-literature flags) but no quality claims about which angle
  will produce the best results.

  Gate 4 verdict: PASS

---

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — All 6 vocabulary traditions were enumerated by LLM
     only (Source B unavailable). A survey-paper probe (e.g., query: "systematic review
     search strategy comprehensive retrieval survey 2022 2025") may surface traditions
     not represented here. Recommendation: run one survey-paper query in a context with
     web access before treating this angle list as complete.
  2. A11/A12 shared tradition label — scope split accepted (search phase vs. screening
     phase); human reviewer should confirm the distinction warrants separate angles vs.
     merger into one angle covering SR automation holistically.
  3. A11/A12 potential Boolean overlap in SR automation survey papers — flag for human
     review; automatic merge not applied per angle-quality.md Gate 2 procedure.
  4. Bibliometrics tradition (A10 only) — flagged as underrepresented at 1 slot; scope
     accepted given overlap with LIS citation-tracking angle. Human reviewer may want to
     expand if bibliometric coverage assessment is a research priority.
  5. Platform selection for non-clinical angles (A4-A6, IR tradition) — arXiv cs.IR is
     the correct category per platform-calibration.md; however, much IR methodology
     literature also appears in ACM/SIGIR proceedings not on arXiv. Recommend supplementing
     with ACM Digital Library queries for these angles.
```

---

## SELF-CHECK (per CLAUDE.md after-every-task rule)

**Missing or questionable in this output:**

1. Source B unavailability is the structural gap. The 6 vocabulary traditions were entirely
   LLM-self-reported. There may be traditions this output missed — most likely candidates:
   health technology assessment (HTA) regulatory search requirements (partially scoped
   under A3 but not given its own tradition slot), and cognitive/behavioral research on
   searcher behavior and information seeking (which is distinct from the practitioner LIS
   tradition).

2. Non-clinical domain coverage is thin. The angle list is skewed toward clinical systematic
   review methodology, which is the most developed literature. Social science, education,
   and engineering SR methods are mentioned in coverage-gap notes but not given dedicated
   angles. A domain-scoped follow-up angle set would be warranted for a researcher working
   outside clinical medicine.

3. The adversarial angle (D1) uses "decision science / evidence synthesis efficiency" as
   its tradition label. This is an LLM-constructed composite — the research on rapid reviews
   comes from evidence synthesis researchers (same community as A1-A3) not from decision
   science proper. The adversarial angle's starting vocabulary is distinct, but the author
   population may overlap. The structural independence requirement (ADVERSARIAL-FLAGGED)
   remains valid; this note is about tradition-label accuracy.

Proposing: if the user has access to web search, run the following survey-paper probe before
dispatching these angles: `"systematic review search strategy" survey 2022 2025` — title
vocabulary will surface any traditions missed by LLM enumeration. Results should be
integrated into the intake brief traditions list before the angle list is considered final.
