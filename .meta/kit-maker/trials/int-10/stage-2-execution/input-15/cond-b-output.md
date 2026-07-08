# Angle-Gen-Kit Output — Input 15, Condition B

**Topic:** How to conduct systematic literature reviews in AI and ML research — what methods, databases, and approaches give comprehensive coverage.

**Kit procedures followed:** intake.md (Steps 1–6), angle-generation.md (Steps 0–4), angle-quality.md (Gates 1–4), CLAUDE.md behavioral contract.

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: How to conduct systematic literature reviews specifically in AI and ML research —
  including what methods, databases, and search approaches produce comprehensive coverage.

Anchor vocabulary: "systematic literature reviews" (Library/Information Science tradition),
  "AI and ML research" (Computer Science tradition),
  "methods, databases, approaches" (Research Methodology tradition)

Candidate vocabulary traditions:
  1. Library and Information Science (LIS) / Evidence Synthesis — systematic review,
     PRISMA, inclusion/exclusion criteria, grey literature, meta-analysis, scoping review,
     evidence synthesis, search string, PROSPERO protocol registration
  2. Software Engineering Empirical Research — Kitchenham SLR guidelines, mapping study,
     tertiary study, evidence-based software engineering, SLR protocol
  3. Computer Science Research Culture — survey paper, arXiv, conference proceedings,
     benchmark comparison, literature survey, technical report
  4. Bibliometrics / Scientometrics — citation analysis, co-citation, bibliographic
     coupling, VOSviewer, CiteSpace, h-index, journal impact factor, co-word analysis
  5. Information Retrieval — Boolean search, query expansion, precision, recall, relevance
     ranking, database indexing, search facet, retrieval strategy
  6. Library Science — Grey Literature Coverage — preprint, unpublished research,
     publication bias, fugitive literature, grey literature databases
  7. Natural Language Processing / Automation — automated screening, text mining,
     abstract screening, active learning, LLM-assisted review, topic modeling
  8. Evidence-based Practice / Quality Appraisal — quality assessment, risk of bias,
     critical appraisal, GRADE, study validity
  9. Research Infrastructure / Academic Database Coverage — ACM Digital Library,
     IEEE Xplore, Scopus, Web of Science, Semantic Scholar, arXiv API
  10. Research Methodology / Reproducibility Studies — inter-rater reliability,
      kappa coefficient, replication, reproducibility, registered report

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate
  traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known
  anchor paper) is recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  (Prompt does not contain explicit comparison language or intervention-outcome structure.
   "What approaches give comprehensive coverage" = exploratory space-mapping question.)

Scope markers: None stated — inferred scope: the full range of methods applicable to
  conducting rigorous, comprehensive systematic reviews of AI/ML research literature,
  including search strategy, database selection, screening, and quality assessment.

Known exclusions: None stated.

Domain maturity estimate: mixed
  Basis: Topic spans a highly academized tradition (LIS/evidence synthesis with
  established standards like PRISMA, Cochrane) AND a practitioner-heavy community
  (ML researchers who rarely follow formal SLR protocols). Anchor vocabulary is
  academic but the question implies practical application in a field with distinct
  informal norms.

Survey paper status: CHECK REQUIRED — Source B unavailable (subagent context).
  Source B status: UNAVAILABLE — MODERATE — Source A + Source C produced 10 distinct
  vocabulary traditions, satisfying the ≥2 tradition threshold for MODERATE severity.
  Angle generation can proceed. VOCABULARY SELF-REPORT FLAG applies.
```

**Intake gate check:**
- [x] Topic field populated
- [x] Candidate vocabulary traditions ≥2 (10 traditions identified)
- [x] Question type classified: EXPLORATORY

Gate cleared. Proceeding to angle-generation.md.

---

## PHASE-GATE REFLECTION

Before proceeding from intake brief to angle generation:

1. Are all output fields populated? YES — no blanks in the intake brief above.
2. Are ≥2 distinct vocabulary traditions listed? YES — 10 traditions listed.
3. Is the question type classified? YES — EXPLORATORY.

All three conditions satisfied. Proceeding to angle generation.

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: Library and Information Science (LIS) / Evidence Synthesis
  Representative terms: PRISMA, systematic review protocol, inclusion/exclusion criteria,
    grey literature, scoping review, PROSPERO
  Planned angle slot: Confirmatory A1; Null-hypothesis N1 (disconfirming variant)
  Gap flag: no

Tradition 2: Software Engineering Empirical Research
  Representative terms: Kitchenham guidelines, SLR in SE, mapping study, tertiary study,
    evidence-based SE, protocol, data extraction
  Planned angle slot: Confirmatory A2
  Gap flag: no

Tradition 3: Computer Science Research Culture
  Representative terms: survey paper, arXiv, conference proceedings, benchmark,
    technical report, literature survey
  Planned angle slot: Confirmatory A3
  Gap flag: no

Tradition 4: Bibliometrics / Scientometrics
  Representative terms: citation analysis, co-citation, VOSviewer, CiteSpace,
    co-word analysis, publication pattern, h-index
  Planned angle slot: Confirmatory A4
  Gap flag: no

Tradition 5: Information Retrieval
  Representative terms: Boolean search, query expansion, precision, recall,
    search string, query facet, retrieval strategy, search validation
  Planned angle slot: Confirmatory A5
  Gap flag: no

Tradition 6: Library Science — Grey Literature Coverage
  Representative terms: preprint, unpublished research, publication bias, fugitive
    literature, conference paper, technical report, dissertation
  Planned angle slot: Confirmatory A6
  Gap flag: no

Tradition 7: Natural Language Processing / Automation
  Representative terms: automated screening, active learning, LLM-assisted review,
    text mining, abstract classification, Rayyan, ASReview
  Planned angle slot: Confirmatory A7
  Gap flag: no

Tradition 8: Evidence-based Practice / Quality Appraisal
  Representative terms: quality assessment, risk of bias, critical appraisal, GRADE,
    study validity, appraisal checklist, evidence hierarchy
  Planned angle slot: Confirmatory A8
  Gap flag: no

Tradition 9: Research Infrastructure / Academic Database Coverage
  Representative terms: ACM Digital Library, IEEE Xplore, Scopus, Web of Science,
    Semantic Scholar, arXiv API, database completeness, coverage comparison
  Planned angle slot: Confirmatory A9
  Gap flag: no

Tradition 10: Research Methodology / Reproducibility Studies
  Representative terms: inter-rater reliability, kappa, replication, registered report,
    protocol pre-registration, methodological transparency
  Planned angle slot: Confirmatory A10
  Gap flag: no

Traditions NOT yet represented in the planned list:
  All 10 traditions from intake brief have at least one planned angle slot.

Cross-disciplinary slot (required):
  Target tradition: Clinical Medicine / Cochrane Collaboration Methods
    (NOT in intake brief — the Cochrane tradition has its own distinct methodological
     vocabulary and institutional apparatus separate from LIS-general evidence synthesis)
  Basis for selection: Cochrane systematic review methodology is the most formally
    developed SLR tradition globally and is frequently cited as the gold standard
    against which CS/AI review methods are compared or contrasted. This tradition uses
    distinct controlled-vocabulary querying (MeSH), formal protocol registration
    (PROSPERO), and meta-analysis pipelines that have been both applied and critiqued
    in AI/ML contexts. The transfer literature (what works, what fails to transfer)
    is a productive angle distinct from the general LIS tradition.

Adversarial slot:
  Target tradition: Science Studies / Empirical Research Practice (how ML researchers
    actually conduct literature searches in practice)
  Starting vocabulary to EXCLUDE from generation: PRISMA, Kitchenham, systematic review
    protocol, evidence synthesis, SLR, inclusion/exclusion criteria, grey literature,
    quality appraisal
  Basis: ML researchers routinely publish "surveys" and "literature reviews" without
    following formal SLR protocols. The practice-reality angle uses vocabulary from
    a different community (science studies, HCI, bibliometrics of researcher behavior)
    and generates questions the prescriptive traditions cannot surface.
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — LIS / Evidence Synthesis): PRISMA and formal SLR protocols in AI/ML
Slot A2 (Confirmatory — SE Empirical Research): Kitchenham guidelines applied to AI/ML
Slot A3 (Confirmatory — CS Research Culture): Survey paper vs. SLR conventions in CS/AI
Slot A4 (Confirmatory — Bibliometrics / Scientometrics): Bibliometric coverage mapping
Slot A5 (Confirmatory — Information Retrieval): Query construction and search strategy
Slot A6 (Confirmatory — Grey Literature Coverage): Preprint and grey literature inclusion
Slot A7 (Confirmatory — NLP / Automation): AI-assisted screening and review automation
Slot A8 (Confirmatory — Evidence-based Practice): Quality appraisal of primary AI/ML studies
Slot A9 (Confirmatory — Research Infrastructure): Multi-database coverage strategies
Slot A10 (Confirmatory — Research Methodology): Reproducibility and replication of SLRs
Slot N1 (Null-hypothesis — LIS disconfirming): Where SLR methods fail in AI/ML contexts
Slot D1 (Adversarial — Science Studies): NOT FROM: LIS, SE, Cochrane, PRISMA, Kitchenham
Slot C1 (Cross-disciplinary — Clinical Medicine / Cochrane): Methods transfer from medicine

Total: 13 angle slots — justified by ≥4 distinct vocabulary traditions in a multi-discipline
  topic (angle-generation.md hard-input note; 10 traditions identified at intake).
```

---

## ANGLE LIST

---

### ANGLE 1: PRISMA Protocol and Formal SLR Standards in AI/ML Research
```
Vocabulary tradition: Library and Information Science (LIS) / Evidence Synthesis
Angle type: Confirmatory
Predicted research character: consensus
What to extract: How PRISMA (2020 version) and similar reporting standards are applied or
  adapted for AI/ML systematic reviews; which components transfer directly, which require
  domain-specific modification; documented PRISMA adaptations for CS topics.

Source type (academic): Systematic Reviews (BioMed Central journal); JASIST; arXiv cs.LG +
  cs.AI for AI-domain application examples; Information Processing & Management
Source type (practitioner): PRISMA official website (prisma-statement.org) checklist;
  PROSPERO protocol database (registered AI/ML reviews)

Queries:
  Q1: PRISMA systematic review protocol AI machine learning application 2020 2024
  Q2: systematic review reporting standards computer science evidence synthesis adaptation
  Q3: scoping review versus systematic review artificial intelligence methodology comparison

Coverage-gap note: Does not cover how AI/ML researchers who follow PRISMA report on
  domain-specific challenges (e.g., how to handle constantly-updated arXiv preprints,
  fast-moving fields). This gap is partly covered by Angle 6 (grey literature).
```

---

### ANGLE 2: Kitchenham/SE Systematic Review Guidelines Applied to AI and ML
```
Vocabulary tradition: Software Engineering Empirical Research
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Kitchenham's original SLR guidelines for SE and their evolution; how
  SE-tradition SLR methods have been applied to AI/ML sub-topics; what the Kitchenham
  framework adds over general PRISMA for technically-oriented CS research topics;
  tertiary studies (SLRs of SLRs) in SE/AI.

Source type (academic): Empirical Software Engineering (Springer); Information and Software
  Technology; Journal of Systems and Software; IEEE Transactions on Software Engineering
Source type (practitioner): Kitchenham's original 2004 + 2007 + 2015 technical reports
  (Keele University and EBSE); empirical-software.com

Queries:
  Q1: Kitchenham systematic literature review guidelines software engineering AI machine learning
  Q2: SLR protocol evidence-based software engineering methodology empirical study AI
  Q3: tertiary study systematic review computer science AI mapping study survey

Coverage-gap note: Kitchenham-tradition guidance is primarily calibrated for SE; coverage
  of how it transfers to deep learning / neural architecture research specifically is
  likely sparse. That specificity gap is not addressed by these queries.
```

---

### ANGLE 3: Survey Paper Conventions in CS/AI Versus Formal Systematic Reviews
```
Vocabulary tradition: Computer Science Research Culture
Angle type: Confirmatory
Predicted research character: consensus
What to extract: How the "survey paper" genre in CS/AI differs methodologically from
  a formal systematic review; what implicit coverage conventions exist in ML survey papers;
  whether major AI/ML venues (NeurIPS, ICML, ICLR) have explicit survey track standards;
  how incomplete coverage in CS survey papers is discussed or critiqued by the community.

Source type (academic): arXiv cs.AI + cs.LG (survey papers themselves as objects of study);
  Semantic Scholar (citation-network analysis of survey coverage)
Source type (practitioner): NeurIPS/ICML/ICLR survey track call-for-papers; ml-survey
  GitHub repositories; researcher blog posts on "how I wrote a survey paper"

Queries:
  Q1: survey paper methodology machine learning systematic coverage conventions arXiv
  Q2: literature survey versus systematic literature review computer science rigor methodology
  Q3: AI NLP survey paper best practices completeness coverage 2022 2023 2024 2025

Coverage-gap note: Does not address how survey authors in CS decide scope — how many
  papers is "enough," which subfields to exclude. That is a tacit convention not
  well-documented in the literature and would require interview-based or citation-trace
  research to surface.
```

---

### ANGLE 4: Bibliometric and Scientometric Approaches to AI/ML Literature Mapping
```
Vocabulary tradition: Bibliometrics / Scientometrics
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How bibliometric methods (co-citation, bibliographic coupling, keyword
  co-occurrence) are used to map the AI/ML literature; what tools are used; what coverage
  claims can be made using bibliometric methods; publication venue bias in AI/ML as
  revealed by bibliometric analysis; conference-vs-journal publication patterns.

Source type (academic): Scientometrics (Springer); Journal of Informetrics; JASIST;
  arXiv cs.DL (Digital Libraries / Bibliometrics)
Source type (practitioner): VOSviewer tutorials; Bibliometrix R package documentation;
  CiteSpace user guides; Dimensions.ai and Lens.org for bulk extraction

Queries:
  Q1: bibliometric analysis machine learning artificial intelligence research mapping
      VOSviewer co-citation 2023 2024
  Q2: scientometrics deep learning NLP research trends keyword co-occurrence publication patterns
  Q3: publication bias conference proceedings journal machine learning bibliometric
      evidence empirical

Coverage-gap note: Does not address how to handle arXiv preprint versions vs. published
  versions in bibliometric counts — a known methodological challenge specific to CS/AI
  where the same work appears at multiple stages and venues.
```

---

### ANGLE 5: Search String Construction and Query Optimization for AI/ML SLRs
```
Vocabulary tradition: Information Retrieval
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Best practices for constructing Boolean search strings for AI/ML topics;
  query validation methods (e.g., checking that known-relevant seed papers are retrieved);
  query expansion strategies and their effect on recall/precision; vocabulary mismatch
  in AI/ML terminology across databases.

Source type (academic): Information Processing & Management; SIGIR conference proceedings
  (arXiv cs.IR); Systematic Reviews journal; Journal of the Medical Library Association
Source type (practitioner): Cochrane Handbook search strategy chapter (publicly available);
  JBI Manual for Systematic Reviews (search strategy sections)

Queries:
  Q1: search string construction systematic review AI machine learning Boolean query
      validation recall
  Q2: query expansion precision recall systematic literature review computer science
      empirical evaluation
  Q3: vocabulary mismatch terminology variation systematic review AI NLP search string
      synonyms

Coverage-gap note: Does not address database-specific query syntax differences (ACM vs.
  IEEE vs. Scopus accept different Boolean operators and field-code prefixes) — that
  specificity requires database-by-database guidance beyond these queries.
```

---

### ANGLE 6: Grey Literature and Preprint Coverage in AI/ML Systematic Reviews
```
Vocabulary tradition: Library Science — Grey Literature Coverage
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Whether and how AI/ML systematic reviews include arXiv preprints,
  workshop papers, and technical reports; publication bias introduced by conference-only
  searches; empirical studies comparing published vs. preprint coverage; criteria for
  including/excluding non-peer-reviewed sources; whether OpenReview (NeurIPS/ICLR)
  counts as grey or formal literature.

Source type (academic): Systematic Reviews; Scientometrics; JASIST; Journal of Evidence-Based
  Medicine
Source type (practitioner): arXiv API documentation; OpenReview.net; Semantic Scholar
  preprint coverage statistics; HuggingFace Papers (practitioner-community preprint discovery)

Queries:
  Q1: grey literature systematic review machine learning arXiv preprint inclusion criteria
      publication bias
  Q2: unpublished research bias systematic review AI ML technical reports workshop papers
  Q3: preprint arXiv coverage systematic review completeness recall AI NLP empirical study

Coverage-gap note: Does not address the recency problem specific to AI/ML — where a
  systematic review can become outdated within months. Living systematic reviews and
  continuous update protocols are a gap in these queries (partially adjacent to Angle 7
  on automation).
```

---

### ANGLE 7: AI-Assisted and Automated Systematic Review Tools for ML Research
```
Vocabulary tradition: Natural Language Processing / Automation
Angle type: Confirmatory
Predicted research character: consensus
What to extract: What tools exist for AI-assisted systematic review (Rayyan, ASReview,
  Covidence, SWIFT-Review, Elicit, Consensus); how LLMs are being used for title/abstract
  screening; active learning approaches for screening prioritization; validation studies
  comparing AI-assisted vs. manual screening; tools specifically adapted for AI/ML
  subject matter.

Source type (academic): arXiv cs.CL + cs.IR; Journal of Medical Internet Research (JMIR);
  Systematic Reviews; NPJ Digital Medicine
Source type (practitioner): GitHub — ASReview (≥3.5k stars), Rayyan, Covidence,
  SWIFT-Review; Elicit.org and Consensus.app tool documentation; HuggingFace (model
  cards for screening classifiers)

Queries:
  Q1: automated systematic review machine learning NLP screening tools active learning 2023 2024
  Q2: large language model LLM systematic review automation title abstract screening
      evaluation accuracy
  Q3: AI assisted literature review Rayyan ASReview Covidence comparison validation study

Coverage-gap note: Does not directly address false negative rates in AI-assisted screening —
  the question of how often automated tools miss relevant papers compared to manual review.
  That is covered partly by Angle 10 (null-hypothesis) and Angle 13 (reproducibility).
```

---

### ANGLE 8: Quality Assessment Frameworks for Evaluating AI/ML Primary Studies
```
Vocabulary tradition: Evidence-based Practice / Quality Appraisal
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Checklists and rubrics for assessing methodological quality of primary
  AI/ML studies included in a systematic review; how concepts like "risk of bias" are
  adapted for ML benchmarking studies; criteria for evaluating reporting completeness
  (e.g., reproducibility, dataset documentation, hyperparameter disclosure); any
  validated instruments for appraising ML studies.

Source type (academic): arXiv cs.LG (ML reproducibility papers); Systematic Reviews;
  JAMIA (Journal of the American Medical Informatics Association); Nature Machine
  Intelligence
Source type (practitioner): ARRIVE guidelines equivalent for ML; ML reproducibility
  checklists from NeurIPS/ICML author guidelines; Papers With Code reproducibility criteria;
  ACM Artifact Evaluation guidelines

Queries:
  Q1: quality assessment checklist machine learning studies systematic review criteria
      evaluation
  Q2: risk of bias assessment AI ML empirical studies appraisal tool evidence synthesis
  Q3: reproducibility checklist machine learning primary study evaluation systematic review
      criteria

Coverage-gap note: Domain-specific quality assessment tools for AI/ML are emerging rather
  than established — query results may be sparse for validated instruments specific to
  deep learning or RL studies. This is a genuine research gap.
```

---

### ANGLE 9: Multi-Database Coverage Strategies for Comprehensive AI/ML Literature Search
```
Vocabulary tradition: Research Infrastructure / Academic Database Coverage
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Empirical comparisons of database coverage for AI/ML topics (ACM Digital
  Library, IEEE Xplore, Scopus, Web of Science, Semantic Scholar, arXiv, DBLP);
  how many databases are needed to achieve high recall; which combination of databases
  covers the most unique AI/ML papers; evidence-based database selection guidance for
  CS systematic reviews.

Source type (academic): JASIST; Scientometrics; Systematic Reviews; IEEE Access
Source type (practitioner): Semantic Scholar API documentation; arXiv API; ACM DL and
  IEEE Xplore search tips; DBLP coverage statistics

Queries:
  Q1: database coverage comparison ACM IEEE Scopus Web of Science Semantic Scholar AI
      machine learning systematic review recall
  Q2: how many databases systematic review computer science coverage completeness threshold
      empirical
  Q3: arXiv Semantic Scholar DBLP coverage overlap AI ML systematic literature review
      unique papers

Coverage-gap note: arXiv-specific coverage within AI/ML sub-fields (cs.AI vs. cs.CL vs.
  cs.LG split) is addressed by platform-calibration but may not appear in these queries.
  Cross-reference with Angle 5 (query construction) for the within-database strategy layer.
```

---

### ANGLE 10: Failure Cases — Gaps, Limitations, and Null Results of SLR Methods in AI/ML

*[NULL-HYPOTHESIS ANGLE — formulated as disconfirming search]*
```
Vocabulary tradition: Library and Information Science (LIS) / Evidence Synthesis
  — disconfirming variant
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Evidence that standard SLR methods produce poor recall, missed papers,
  or misleading conclusions when applied to AI/ML research; documented cases where
  published AI/ML systematic reviews were later found to be incomplete; studies showing
  SLR methods do NOT generalize from clinical to CS contexts; negative results, failures,
  and critiques of existing AI/ML systematic reviews.

Source type (academic): Systematic Reviews; Scientometrics; JASIST; arXiv cs.LG
  (meta-science and reproducibility papers)
Source type (practitioner): Replication Crisis in ML blog posts; ACM/IEEE workshop
  proceedings on ML reproducibility; Retraction Watch (AI/ML)

Queries:
  Q1: systematic literature review limitations failures AI machine learning incomplete
      coverage negative results
  Q2: SLR methodology problems computer science reproducibility failure does not generalize
      critique
  Q3: systematic review replication failure AI ML research study coverage gaps missed papers
      evidence

Coverage-gap note: The AI/ML SLR failure literature may be sparse — this angle may surface
  few papers, which itself constitutes a gap finding. The practitioner source channel
  (blog posts, conference discussions) is likely to surface more failures than the
  peer-reviewed channel.
```

---

### ANGLE 11: How ML Researchers Actually Conduct Literature Searches in Practice

*[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]*

*Generation note: Generating from Science Studies / Empirical Research Practice vocabulary, NOT from LIS/SE/Cochrane framing. EXCLUDED terms: PRISMA, Kitchenham, systematic review protocol, evidence synthesis, SLR, inclusion/exclusion criteria, grey literature, quality appraisal, PROSPERO.*
```
Vocabulary tradition: Science Studies / Empirical Research Practice
Angle type: Adversarial [ADVERSARIAL-FLAGGED]
Predicted research character: empirical (survey-based / ethnographic)
What to extract: Empirical studies of how ML researchers actually find, collect, and
  select papers; informal citation-chasing and connected-paper browsing behavior;
  how community Twitter/X threads and Slack channels function as informal literature
  discovery; what proportion of ML researchers have ever followed a formal review protocol;
  practitioner mental models of "knowing the literature."

Source type (academic): CHI conference proceedings; CSCW (arXiv cs.HC); Science & Technology
  Studies journals; arXiv (sociological studies of ML community practices)
Source type (practitioner): Hacker News "Ask HN" threads on paper discovery; ML researcher
  blog posts on literature review workflow; Connected Papers, ResearchRabbit, Elicit usage
  discussions

Queries:
  Q1: how machine learning researchers find papers practice survey study information behavior
  Q2: informal literature search data scientists practitioners citation chasing paper discovery
      behavior study
  Q3: academic paper discovery tools Connected Papers ResearchRabbit actual use ML community
      survey

Coverage-gap note: This angle is likely to surface limited peer-reviewed literature —
  the information-seeking behavior of ML practitioners is understudied compared to
  clinical or library-science practitioner populations. Gap finding is informative.
```

---

### ANGLE 12: Clinical/Cochrane Evidence Synthesis Methods Transferred to AI/ML Research

*[CROSS-DISCIPLINARY — target tradition NOT in intake brief]*
```
Vocabulary tradition: Clinical Medicine / Cochrane Collaboration Methods
  [CROSS-DISCIPLINARY: this tradition was NOT in the intake brief]
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: Which Cochrane-style methods have been successfully adapted for AI/ML
  systematic reviews (e.g., protocol pre-registration, meta-analysis of accuracy/AUC,
  GRADE for AI evidence quality); which methods fail to transfer and why (e.g., RCT
  bias tools applied to observational ML experiments); hybrid review methodologies
  combining clinical and CS traditions; PICO applied to AI intervention research.

Source type (academic): Journal of Clinical Epidemiology; Cochrane Database of Systematic
  Reviews; Systematic Reviews; JAMIA; BMJ (AI in medicine reviews)
Source type (practitioner): Cochrane Handbook (cochrane-handbook.org) Chapter 2;
  PROSPERO database (search for AI/ML registered reviews); Campbell Collaboration
  guidance for technology intervention reviews

Queries:
  Q1: Cochrane systematic review methods applied AI machine learning transfer adaptation
      evidence synthesis
  Q2: PICO framework AI intervention clinical machine learning evidence synthesis systematic
      review
  Q3: evidence hierarchy AI machine learning research clinical epidemiology methods
      comparison transfer adapt

Coverage-gap note: Medical AI (AI applied to clinical problems) is better covered by
  this angle than pure ML research (algorithm development). For pure ML benchmarking
  contexts, transfer from Cochrane methods is less documented and may be a genuine gap.
```

---

### ANGLE 13: Reproducibility and Replication of AI/ML Systematic Literature Reviews
```
Vocabulary tradition: Research Methodology / Reproducibility Studies
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Studies measuring whether two independent teams following the same SLR
  protocol on an AI/ML topic arrive at the same result set; inter-rater reliability
  statistics for title/abstract screening in CS contexts; protocol pre-registration
  and its effect on SLR quality in AI/ML; whether published AI/ML systematic reviews
  could be replicated with published search strings.

Source type (academic): Empirical Software Engineering; Systematic Reviews; arXiv
  (meta-science, reproducibility); ReScience C journal
Source type (practitioner): OSF.io (registered protocols for CS/AI reviews); PROSPERO
  (registered review protocols); GitHub repositories of published SLR data extraction sheets

Queries:
  Q1: systematic review reproducibility replication machine learning computer science
      inter-rater reliability kappa
  Q2: SLR protocol pre-registration computer science AI replication study registered report
  Q3: systematic literature review same topic different results AI machine learning
      reproducibility evidence

Coverage-gap note: Replication studies of SLRs are rare in any field and even rarer in
  CS/AI specifically. This angle may be a gap-finding angle — surfacing the absence of
  replication studies is itself a finding.
```

---

## GATE SUMMARY

```
GATE SUMMARY
============

Gate 1 — Completeness:

  Null-hypothesis angle present: PASS
    Angle 10 uses explicit disconfirming vocabulary:
    "limitations failures," "does not generalize," "negative results," "missed papers."
    Distinct from any confirmatory angle.

  Adversarial angle present: PASS
    Angle 11 is labeled [ADVERSARIAL-FLAGGED] with dispatch note.
    Generated from excluded vocabulary set stated explicitly.

  Cross-disciplinary angle present: PASS
    Angle 12 targets Clinical Medicine / Cochrane Collaboration Methods,
    which was NOT in the intake brief's 10 candidate traditions.

  Source-type coverage: PASS
    Domain maturity = mixed. Practitioner sources appear in:
    - Angle 3 (GitHub, researcher blogs)
    - Angle 7 (GitHub: ASReview, Rayyan; HuggingFace)
    - Angle 11 (Hacker News, blog posts, practitioner tools)
    - Angle 9 (API documentation)
    Mixed-domain requirement satisfied.

  Vocabulary-tradition map populated: PASS
    Coverage map lists 10 distinct traditions plus the cross-disciplinary target.

Gate 1 verdict: PASS

---

Gate 2 — Distinctness:

  Boolean-connective test results:

  Angle 1 vs. Angle 2: PASS — Angle 1 queries center on PRISMA/reporting standards;
    Angle 2 centers on Kitchenham/SE guidelines. Different documents; different communities.

  Angle 1 vs. Angle 10: PASS — Angle 1 is confirmatory (how PRISMA is applied);
    Angle 10 is null-hypothesis (where methods fail). Different query vocabulary
    ("application" vs. "failures," "limitations," "does not generalize"). Structural
    angle-type distinction confirmed.

  Angle 5 vs. Angle 9: PASS — Angle 5 queries focus on query CONSTRUCTION (Boolean,
    precision/recall, vocabulary); Angle 9 queries focus on DATABASE SELECTION (coverage
    comparison, ACM/IEEE/Scopus). OR retrieval would not conflate these — different
    facets of distinct sub-fields (IR vs. Research Infrastructure).

  Angle 3 vs. Angle 13: PASS — Angle 3 is about survey-paper conventions (genre norms);
    Angle 13 is about reproducibility of SLRs (replication methodology). Distinct
    query vocabulary.

  Angle 7 vs. Angle 10: PASS — Angle 7 targets automation tools; Angle 10 targets
    failure cases of SLR methodology broadly. Different query strings; different
    document types expected.

  Angle 6 vs. Angle 9: PASS — Angle 6 is about grey literature inclusion criteria
    (what counts, publication bias); Angle 9 is about database selection and empirical
    coverage studies. Non-overlapping query vocabularies.

  No angle pair flagged as synonymous by Boolean-connective test.

  Vocabulary-tradition distinctness:
    All 13 angles have distinct vocabulary-tradition labels EXCEPT:
    - Angle 1 (LIS / Evidence Synthesis — confirmatory) and
    - Angle 10 (LIS / Evidence Synthesis — disconfirming)
    This is the allowed exception: one is the null-hypothesis variant of the other.
    All other angles have unique tradition labels.

Gate 2 verdict: PASS

---

Gate 3 — Launchability:

  All 13 angles checked:
  - Concrete query string present: PASS (all 13 × 3 queries are runnable strings)
  - No placeholder vocabulary: PASS (no TBD or fill-in markers found)
  - Source type named: PASS (both academic and practitioner source named for all angles;
    Angle 4 practitioner sources are VOSviewer/Bibliometrix — specific platform names)

Gate 3 verdict: PASS

---

Gate 4 — Scoring prohibition:

  No angles were ranked, filtered, or prioritized during generation.
  Selection was made by structural criteria only: vocabulary-tradition coverage,
  source-type coverage, null-hypothesis presence, angle-type completeness.
  No angle record contains phrases like "most promising" or "strongest angle."

Gate 4 verdict: PASS

---

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG: All 10 traditions enumerated by LLM only (Source B
     unavailable). A survey-paper probe (e.g., "systematic review AI machine learning
     methodology survey 2024") is recommended before treating the tradition map as
     complete. Hidden traditions may exist in the LIS-for-CS literature.
  2. Angles 8, 10, 13 are expected to surface sparse literature — they may function
     as gap-documentation angles rather than literature-dense angles. This is informative,
     not a failure.
  3. The adversarial angle (Angle 11) MUST be dispatched in a separate research context
     with no access to the confirmatory angle results. The ADVERSARIAL-FLAGGED label
     communicates this requirement; enforcement is the downstream research agent's
     responsibility.
```

---

## SUMMARY STATISTICS

- Total angles: **13**
- Distinct vocabulary traditions: **12** (10 from intake brief; 1 cross-disciplinary addition [Clinical/Cochrane]; LIS appears twice as confirmatory + null-hypothesis pair, counted once toward tradition count)
- Angle types: Confirmatory 10, Null-hypothesis 1, Adversarial 1, Cross-disciplinary 1
- Source B status: UNAVAILABLE — MODERATE (subagent context; ≥2 traditions satisfied by LLM enumeration alone)
- All four quality gates: PASS
- Dispatch readiness: READY (with VOCABULARY SELF-REPORT FLAG noted)
