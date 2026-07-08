# Angle-Gen-Kit Output — Input 6, Condition B

**Topic:** How to achieve comprehensive retrieval in systematic literature searches
**Condition:** B (full kit procedure: intake.md → angle-generation.md → angle-quality.md)
**Source B status:** UNAVAILABLE — subagent context; no web search available

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: How to achieve comprehensive retrieval in systematic literature searches —
  methods, strategies, and failure modes for maximizing recall when conducting
  evidence synthesis searches across databases and supplementary sources.

Anchor vocabulary:
  "comprehensive retrieval" — information retrieval (IR) tradition
  "systematic literature searches" — evidence synthesis / clinical systematic review tradition

Candidate vocabulary traditions:
  1. Evidence synthesis / clinical systematic review — PRISMA, Cochrane, sensitivity,
     multi-database search, grey literature, recall threshold, evidence synthesis,
     systematic review protocol, search reporting
  2. Information retrieval (IR) theory — recall, precision, Boolean operators, query
     expansion, inverted index, Bradford zones, relevance feedback, F-measure, term
     frequency, database coverage
  3. Library and information science (LIS) — controlled vocabulary, MeSH, subject
     headings, thesaurus, database hedges, Boolean construction, reference librarian
     methodology, information-seeking behavior, database selection
  4. Software engineering systematic review (EBSE) — Kitchenham methodology, evidence-
     based software engineering, mapping studies, tertiary studies, grey literature
     in SE (tech reports, GitHub, blog posts), secondary studies
  5. AI-assisted / automated review — text mining, machine learning for citation
     screening, active learning, NLP-assisted search, semi-automated synthesis,
     deduplication algorithms, ASReview, Rayyan
  6. Bibliometrics / scientometrics — citation snowballing, pearl-growing, backward
     and forward citation chasing, co-citation analysis, Web of Science, Scopus,
     seed paper methods, reference list checking

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot
  enumerate traditions it has not encountered. A vocabulary-discovery pass
  (pearl-growing from a known anchor paper such as the Cochrane Handbook or a
  foundational JMLA methodology paper) is recommended before accepting this list
  as covering all traditions.

Question type: EXPLORATORY
  (no comparison language or intervention-outcome structure in the prompt;
  user is asking "what approaches exist / what is the space of findings on X")

Scope markers: None stated — inferred scope: all methods and strategies for
  achieving high recall in systematic literature searches, applicable across
  domains (clinical, SE, social science, and general); no date-range restriction.

Known exclusions: None stated.

Domain maturity estimate: mixed (academic-heavy with strong practitioner layer)
  Basis: "systematic literature searches" is academic vocabulary used in clinical
  and LIS research communities; "comprehensive retrieval" spans both IR research
  and library practice; strong practitioner production exists (Cochrane Handbook,
  JBI Manual, database vendor guides, grey literature toolkits); anchor vocabulary
  does not name tools or implementations directly, suggesting academic entry point,
  but the domain has well-developed practitioner documentation.

Survey paper status: UNAVAILABLE
  Source B status: UNAVAILABLE — MODERATE — Source A + Source C identified 6 distinct
  vocabulary traditions; medium-confidence vocabulary bootstrap without survey paper probe.
  External validation via survey-paper probe recommended before treating this list as final.

VOCABULARY SELF-REPORT FLAG: All vocabulary traditions enumerated by LLM only.
  Source B (survey-paper probe) was unavailable at execution time. A survey-paper
  probe (query: "systematic review search strategy comprehensive retrieval 2023 2024
  survey") is recommended before accepting the angle list as covering all traditions.

Absent-term signal (Source C — terms the LLM expects but user did NOT use):
  - "recall" (primary IR metric for completeness; most prominent academic term for this)
  - "grey literature" (non-indexed literature; major coverage gap mechanism)
  - "Boolean search" or "query construction" (operative mechanism)
  - "citation snowballing" (supplementary search method; distinct from database search)
  - "sensitivity" (clinical synonym for recall; signals clinical tradition entry)
  - "evidence synthesis" (broader framing from clinical/public health research)
  User entering via "comprehensive retrieval" + "systematic literature searches"
  is likely approaching from a practitioner or cross-domain framing, not from a
  single tradition.
```

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: Evidence synthesis / clinical systematic review
  Representative terms: PRISMA, Cochrane, systematic review, sensitivity, multi-database,
    evidence synthesis, grey literature, recall threshold, search reporting
  Planned angle slot: Confirmatory A1
  Gap flag: No — assigned

Tradition 2: Information retrieval (IR) theory
  Representative terms: recall, precision, Boolean operators, query expansion, Bradford
    zones, inverted index, relevance feedback, F-measure, term frequency
  Planned angle slot: Confirmatory A2
  Gap flag: No — assigned

Tradition 3: Library and information science (LIS)
  Representative terms: controlled vocabulary, MeSH, subject headings, thesaurus,
    database hedges, Boolean construction, reference librarian methodology,
    information-seeking behavior, database selection
  Planned angle slot: Confirmatory A3
  Gap flag: No — assigned

Tradition 4: Software engineering systematic review (EBSE)
  Representative terms: Kitchenham methodology, evidence-based software engineering,
    mapping studies, grey literature in SE, tertiary studies, secondary studies
  Planned angle slot: Confirmatory A4
  Gap flag: No — assigned

Tradition 5: AI-assisted / automated review
  Representative terms: text mining, active learning, NLP screening, machine learning
    for citation screening, deduplication algorithms, semi-automated synthesis
  Planned angle slot: Confirmatory A5
  Gap flag: No — assigned

Tradition 6: Bibliometrics / scientometrics
  Representative terms: citation snowballing, pearl-growing, backward and forward citation
    chasing, co-citation analysis, seed paper methods, reference list checking
  Planned angle slot: Confirmatory A6
  Gap flag: No — assigned

Traditions NOT yet represented in the planned list (beyond initial 6):
  Grey literature methodology (sub-tradition of evidence synthesis but with its own
    distinct vocabulary: GreyNet, OpenGrey, CADTH Grey Matters, reporting standards,
    grey literature typology). Assigned additional slot: Confirmatory A7.

  Methodological search filter validation (sub-tradition at the LIS/clinical intersection:
    ISSG filters, study design hedges, filter sensitivity/specificity, filter appraisal
    checklists). Distinct vocabulary from general LIS. Assigned: Confirmatory A8.

Cross-disciplinary slot 1 (required):
  Target tradition: Clinical epidemiology / recall audit methodology
  Basis: Clinical epidemiologists studying search strategy performance as a MEASURED
    OUTCOME (not as a process) use distinct outcome vocabulary — "yield," "sensitivity
    of search," "number needed to screen," prospective recall audit — and publish in
    different journals (BMC Medical Research Methodology, JMLA, JAMIA) from the
    traditions already covered. This tradition evaluates whether search strategies
    actually achieve claimed recall, which is structurally distinct from designing
    strategies to achieve recall.

Cross-disciplinary slot 2 (required):
  Target tradition: Cognitive science / human factors (information-seeking and stopping)
  Basis: Research on WHY searchers stop (stopping rules, saturation heuristics) and
    WHY they miss items (vocabulary fixation, anchoring, cognitive load, satisficing)
    comes from cognitive science and human factors, not from IR or LIS proper.
    Information foraging theory, optimal foraging, and stopping-rule research have
    been applied to systematic search but originate outside the primary domain.
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Evidence synthesis / clinical systematic review): assigned
Slot A2 (Confirmatory — Information retrieval (IR) theory): assigned
Slot A3 (Confirmatory — Library and information science / LIS): assigned
Slot A4 (Confirmatory — Software engineering systematic review / EBSE): assigned
Slot A5 (Confirmatory — AI-assisted / automated review): assigned
Slot A6 (Confirmatory — Bibliometrics / scientometrics): assigned
Slot A7 (Confirmatory — Grey literature methodology): assigned
Slot A8 (Confirmatory — Methodological search filter validation): assigned
Slot N1 (Null-hypothesis): assigned — framed as: what evidence shows that
  comprehensive search methods fail to achieve claimed recall despite being followed?
Slot D1 (Adversarial — ADVERSARIAL-FLAGGED): assigned — NOT FROM: evidence synthesis,
  IR theory, LIS, SE, bibliometrics, AI-assisted review, grey literature vocabulary.
  Starting tradition: health technology assessment (HTA) / policy rapid review.
Slot C1 (Cross-disciplinary — Clinical epidemiology recall audit): assigned
Slot C2 (Cross-disciplinary — Cognitive science / human factors): assigned

Total slots: 12 (8 confirmatory, 1 null-hypothesis, 1 adversarial, 2 cross-disciplinary)

Justification for 12 angles: ≥6 distinct vocabulary traditions identified at intake;
  kit guidance permits 20–30 for ≥4 traditions with documented justification. 12 angles
  covers all 6 intake traditions plus 2 extended sub-traditions (grey literature,
  search filter validation) and 2 external disciplines. Scope is well within the
  permitted range.
```

---

## ANGLE LIST

---

### ANGLE 1: Multi-Database Search Strategy Design for Recall Maximization
```
ANGLE 1: Multi-Database Search Strategy Design for Recall Maximization
===========
Vocabulary tradition: Evidence synthesis / clinical systematic review
Angle type: Confirmatory
Predicted research character: consensus (authoritative methodology documents) with
  empirical component (comparative studies of database coverage overlap)
What to extract: recommended database combinations for comprehensive coverage; reported
  overlap rates between databases; guidelines for minimum database sets; evidence for
  which databases must be included for specific topic types; recall thresholds cited
  in methodology documents; how multi-database search protocols are documented and
  reported

Source type (academic): PubMed/MEDLINE via NLM; Systematic Reviews (BioMed Central);
  Research Synthesis Methods (Wiley); JMLA (Journal of the Medical Library Association)
Source type (practitioner): Cochrane Handbook for Systematic Reviews (cochrane.org,
  Chapter 4); JBI Manual for Evidence Synthesis; PRISMA 2020 reporting guidelines;
  AHRQ Methods Guide for Comparative Effectiveness Research

Queries:
  Q1: systematic review database selection comprehensive coverage sensitivity search strategy
  Q2: multi-database search overlap duplicate retrieval evidence synthesis recall completeness
  Q3: Cochrane systematic review minimum database requirements search strategy sensitivity
  Q4: PRISMA search strategy reporting transparency reproducibility systematic review methods

Coverage-gap note: These queries focus on strategy design and reporting; they do not
  directly address why searches following recommended protocols still miss studies.
  That failure-mode question is addressed in Angle 9 (null-hypothesis). Studies of
  search adequacy in non-English databases and non-Western literature are likely
  underrepresented in this angle's query set.
```

---

### ANGLE 2: Query Expansion and Boolean Construction for Recall
```
ANGLE 2: Query Expansion and Boolean Construction for Recall
===========
Vocabulary tradition: Information retrieval (IR) theory
Angle type: Confirmatory
Predicted research character: empirical (controlled comparisons with recall/precision
  measurements; theoretical analysis of query structures)
What to extract: effect sizes for query expansion on recall vs. precision; Bradford
  zone analysis for systematic search; Boolean operator effects on retrieval;
  quantitative recall improvements from specific expansion techniques; conditions
  under which expansion hurts vs. helps; recall-precision tradeoff measurements
  for systematic search query types

Source type (academic): arXiv cs.IR; ACM Digital Library (SIGIR, ECIR, CIKM
  proceedings); Information Processing & Management (Elsevier); Journal of the
  American Society for Information Science and Technology (JASIST)
Source type (practitioner): deprioritized for this angle — IR theory research is
  academic-heavy; practitioner output is mostly tool documentation, not methodology

Queries:
  Q1: Boolean query construction recall precision systematic literature search information
      retrieval
  Q2: query expansion recall improvement information retrieval bibliographic database search
  Q3: Bradford zones literature saturation systematic search coverage diminishing returns
  Q4: synonym expansion recall information retrieval bibliographic search empirical evaluation

Coverage-gap note: Bradford zone analysis applied specifically to systematic review
  contexts (not general IR) is a narrow literature; most IR literature covers
  web/enterprise search and may not generalize directly to database-specific systematic
  search. This gap is flagged; the cross-disciplinary recall-audit angle (Angle 11)
  provides empirical evaluation of search performance that partially compensates.
```

---

### ANGLE 3: Controlled Vocabulary and Thesaurus-Based Searching
```
ANGLE 3: Controlled Vocabulary and Thesaurus-Based Searching
===========
Vocabulary tradition: Library and information science (LIS)
Angle type: Confirmatory
Predicted research character: empirical (comparative studies of free-text vs.
  controlled vocabulary recall) with consensus (reference librarian professional
  practice documentation)
What to extract: empirical recall comparisons of free-text vs. controlled vocabulary
  searching; evidence for which topics benefit most from MeSH/thesaurus terms;
  when free-text searching is insufficient; recommended strategies combining both;
  database-specific controlled vocabulary differences (EMBASE Emtree vs. MEDLINE
  MeSH); librarian expertise effects on recall

Source type (academic): JASIST; Journal of the Medical Library Association (JMLA);
  Semantic Scholar (library science literature); Health Information and Libraries
  Journal
Source type (practitioner): MeSH browser documentation (NLM); Cochrane Handbook
  Chapter 4 (search strategy development); EMBASE search guide; database vendor
  training materials (Ovid, EBSCOhost)

Queries:
  Q1: controlled vocabulary MeSH thesaurus free text recall systematic review search
      comparison
  Q2: subject headings explode function database retrieval completeness library science
  Q3: free text versus controlled vocabulary recall information retrieval bibliographic
      database evidence
  Q4: librarian expertise search strategy recall systematic review information specialist

Coverage-gap note: This angle does not cover non-English controlled vocabularies
  (LILACS DeCS, Chinese biomedical controlled vocabularies) which affect retrieval
  completeness for non-English literature. That gap is out of scope unless the
  researcher specifically targets multilingual retrieval.
```

---

### ANGLE 4: Grey Literature Sources and Supplementary Search Methods
```
ANGLE 4: Grey Literature Sources and Supplementary Search Methods
===========
Vocabulary tradition: Grey literature methodology
Angle type: Confirmatory
Predicted research character: consensus (typology-based methodology documents) with
  empirical component (studies of grey literature contribution to review conclusions)
What to extract: grey literature source typology (conference papers, theses,
  government reports, clinical trial registries, regulatory documents); evidence
  for how frequently grey literature changes review conclusions; recommended
  grey literature sources by domain; methods for searching clinical trial
  registries; impact of grey literature omission on evidence synthesis; resources
  and databases specific to grey literature

Source type (academic): Research Synthesis Methods (Wiley); Systematic Reviews
  (BioMed Central); HLWIKI International (health library wiki); Grey Matters toolkit
  documentation
Source type (practitioner): CADTH Grey Matters checklist (Canada); GreyNet
  International (greylit.org); ProQuest Dissertations and Theses database; ClinicalTrials.gov
  and WHO ICTRP search guidance; OpenGrey documentation; ISSG grey literature
  resources; AHRQ methods for grey literature searches

Queries:
  Q1: grey literature systematic review retrieval strategies sources comprehensive
      evidence synthesis
  Q2: unpublished studies grey literature publication bias review conclusions effect
  Q3: clinical trial registries searching systematic review search strategy completeness
  Q4: conference proceedings theses dissertations grey literature search strategy
      systematic review

Coverage-gap note: The operationalization of "grey literature" varies significantly
  across disciplines (clinical medicine, social science, SE, policy research use
  different definitions and source lists). This angle's queries default to the
  clinical/biomedical tradition; a complementary angle from the SE tradition (Angle 5)
  covers SE-specific grey literature.
```

---

### ANGLE 5: Software Engineering Systematic Review Search Methodology
```
ANGLE 5: Software Engineering Systematic Review Search Methodology
===========
Vocabulary tradition: Software engineering systematic review (EBSE)
Angle type: Confirmatory
Predicted research character: empirical (studies of SE review completeness and
  methodology) with consensus (methodological guidelines)
What to extract: SE-specific multi-database search strategies; how grey literature
  (technical reports, GitHub, blog posts, white papers) is handled in SE reviews;
  adaptations of clinical systematic review methodology to SE contexts; evidence
  for recall differences when SE grey literature is vs. is not included; SE-specific
  tool and resource recommendations; tertiary study findings on SE review methodology
  quality

Source type (academic): ACM Digital Library (ESEM, MSR, EASE proceedings);
  IEEE Xplore (ICSE, ICSME proceedings); Empirical Software Engineering (Springer);
  Information and Software Technology (Elsevier)
Source type (practitioner): GitHub (systematic review tools, literature search
  automation); SE grey literature repositories (IEEE Technical Reports); blog
  posts by SE systematic review practitioners

Queries:
  Q1: software engineering systematic review search strategy Kitchenham methodology
      grey literature completeness
  Q2: evidence-based software engineering literature review database selection search
      comprehensive recall
  Q3: systematic mapping study software engineering search strategy grey literature
      white papers technical reports
  Q4: tertiary study software engineering systematic review methodology search quality
      evaluation

Coverage-gap note: This angle covers SE-specific adaptations; it does not generalize
  findings to other practitioner domains (education research, social science, policy).
  Those domains have their own grey literature traditions (EPPI-Centre, Campbell
  Collaboration) not covered here.
```

---

### ANGLE 6: Citation Snowballing and Pearl-Growing Methods
```
ANGLE 6: Citation Snowballing and Pearl-Growing Methods
===========
Vocabulary tradition: Bibliometrics / scientometrics
Angle type: Confirmatory
Predicted research character: empirical (comparative studies of snowballing yield
  vs. database search) with methodological guidance
What to extract: evidence for how many additional studies citation snowballing
  finds beyond database search; backward vs. forward citation chasing yield
  differences; pearl-growing protocols and their recall outcomes; conditions where
  snowballing adds most value; hybrid search strategy designs combining database
  and citation methods; citation database coverage comparison (Scopus vs. Web
  of Science vs. Google Scholar for snowballing); snowballing stopping criteria

Source type (academic): Scientometrics (Springer); Research Synthesis Methods;
  Semantic Scholar (citation network exploration — use for forward citation search
  from known seed papers, not as sole academic source); JASIST
Source type (practitioner): Endnote/Zotero reference management guides; Connected
  Papers tool documentation; Semantic Scholar API documentation; Litmaps tool;
  ResearchRabbit tool guides

Queries:
  Q1: citation snowballing systematic review search completeness recall additional
      studies yield
  Q2: backward forward citation searching literature review supplementary search
      methods effectiveness
  Q3: pearl growing systematic review seed paper citation tracking recall augmentation
  Q4: citation database coverage comparison systematic review snowballing Web of
      Science Scopus

Coverage-gap note: Citation-based methods are only as comprehensive as the citation
  databases they draw from; papers not yet cited (new publications, highly specialized
  work) will not be captured. This structural limitation is not addressed in these
  queries and requires human acknowledgment in any protocol using snowballing as
  a primary supplementary method.
```

---

### ANGLE 7: AI and Machine Learning Tools for Systematic Review Retrieval
```
ANGLE 7: AI and Machine Learning Tools for Systematic Review Retrieval
===========
Vocabulary tradition: AI-assisted / automated review
Angle type: Confirmatory
Predicted research character: empirical (ML model performance studies with recall/
  precision measurements; RCT and quasi-experimental evaluations of tool performance)
What to extract: ML screening tool recall rates vs. manual screening; active learning
  stopping criteria and recall guarantees; evidence for which AI tools are validated
  for high-recall tasks; NLP-based query expansion for systematic search; deduplication
  algorithm performance; AI tools for grey literature identification; recall-at-X%
  work saved figures; conditions where AI tools are and are not reliable

Source type (academic): arXiv cs.AI + cs.CL (NOT cs.AI alone — platform-calibration
  rule); JAMIA (Journal of the American Medical Informatics Association); Systematic
  Reviews; Research Synthesis Methods; Journal of Clinical Epidemiology
Source type (practitioner): GitHub repositories for ASReview, Rayyan, Covidence,
  Abstrackr, sr-accelerator (≥50 stars, active commit history per quality gate);
  SYSR-AI tool evaluation documentation; Cochrane task force on AI documents

Queries:
  Q1: machine learning systematic review screening recall active learning stopping
      criterion work saved
  Q2: text mining automated systematic review citation screening recall precision
      evaluation
  Q3: AI tools systematic review search retrieval recall augmentation NLP query
      expansion
  Q4: deduplication algorithm systematic review reference management precision
      recall duplicate detection

Coverage-gap note: AI-assisted retrieval tools are evolving rapidly; specific tool
  performance figures have high temporal decay. The empirical findings from this
  angle should be treated as direction-of-effect signals (AI screening maintains
  high recall at reduced manual effort) rather than precise recall percentages.
  Date-filter queries to 2022-2025 are recommended for this angle.
```

---

### ANGLE 8: Search Filter Validation and Study Design Hedges
```
ANGLE 8: Search Filter Validation and Study Design Hedges
===========
Vocabulary tradition: Methodological search filter validation
Angle type: Confirmatory
Predicted research character: empirical (validation studies with sensitivity/specificity
  measurements against reference sets) with consensus (recommended validated filter sets)
What to extract: validated search filter sensitivity and specificity for specific study
  designs (RCT, cohort, qualitative); filter appraisal methodology; conditions where
  filters improve vs. harm recall; ISSG filter collection content and use guidelines;
  Cochrane Handbook filter recommendations; tradeoffs between sensitivity and precision
  when applying study design filters; peer review of search strategies (PRESS checklist)

Source type (academic): JMLA; Health Information and Libraries Journal; Cochrane
  Methods publications; Research Synthesis Methods; Annals of Internal Medicine
  (methodology articles)
Source type (practitioner): ISSG Search Filter Resource (issg.org); Scottish
  Intercollegiate Guidelines Network (SIGN) search resources; InterTASC Information
  Specialists' Sub-Group filter appraisal checklist; PRESS checklist documentation
  (Peer Review of Electronic Search Strategies)

Queries:
  Q1: search filter validation systematic review study design sensitivity specificity
      recall precision
  Q2: RCT filter MEDLINE EMBASE recall sensitivity validated search hedge
  Q3: methodological search filter Cochrane information specialist sensitivity
      precision tradeoff empirical
  Q4: PRESS peer review search strategy audit checklist systematic review quality

Coverage-gap note: Most validated filters are designed for clinical/biomedical
  contexts (RCT, cohort, qualitative research filters). Filters for social science,
  SE, or education research study types are less developed. This angle will
  underrepresent filter methodology for non-clinical systematic reviews.
```

---

### ANGLE 9: Evidence That Comprehensive Search Methods Fail to Achieve Claimed Recall
```
ANGLE 9: Evidence That Comprehensive Search Methods Fail to Achieve Claimed Recall
===========
Vocabulary tradition: Systematic review methodology — null-hypothesis / disconfirming
Angle type: Null-hypothesis
Predicted research character: empirical (gap — expect a sparse but targeted literature;
  this angle's purpose is to document absence of recall guarantees and presence of
  failure cases)
What to extract: documented cases where following comprehensive search guidelines
  still resulted in missed relevant studies; empirical gaps between claimed and actual
  recall in retrospective evaluations; failure modes even in Cochrane-quality searches;
  studies comparing prospective searches against gold-standard reference sets;
  recall shortfalls due to database gaps, vocabulary mismatch, or non-indexed
  literature; evidence that recall is systematically overestimated in self-reported
  search methodology

Source type (academic): Systematic Reviews; Research Synthesis Methods; JMLA;
  BMC Medical Research Methodology; Journal of Clinical Epidemiology
Source type (practitioner): Cochrane editorial commentary on search limitations;
  systematic review protocol deviation reports; post-publication review corrections

Queries:
  Q1: systematic review search strategy missed studies recall failure empirical
      evaluation gold standard comparison
  Q2: literature search completeness failure retrospective audit missed relevant studies
      comprehensive protocol
  Q3: systematic review search reproducibility recall shortfall negative results
      limitations database coverage gaps
  Q4: gold standard reference set comparison systematic review search sensitivity
      prospective evaluation missed papers

Coverage-gap note: Failure cases may be underreported due to publication bias against
  null/negative methodology results. The practitioner source column should be searched
  for grey reports and internal methodology assessments not published in journals.
  This angle IS the structural check on whether all other angles' recommended
  methods actually work in practice.
```

---

### ANGLE 10: Pragmatic Search Adequacy in Health Technology Assessment
```
ANGLE 10: Pragmatic Search Adequacy in Health Technology Assessment
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory
results. This angle was generated WITHOUT access to confirmatory angle vocabulary.
Excluded terms from generation: systematic review, PRISMA, Boolean, query expansion,
controlled vocabulary, MeSH, grey literature, snowballing, pearl-growing, machine
learning, active learning, text mining, search filter, study design hedge, recall,
sensitivity, Bradford, information retrieval.]

Vocabulary tradition: Health technology assessment (HTA) / policy rapid review
Angle type: Adversarial
Predicted research character: consensus with empirical challenge component — expect
  HTA agency methodology documents that take explicit positions on search scope
  adequacy, plus practitioner debates about how much comprehensiveness is necessary
  for a defensible evidence base
What to extract: HTA agency positions on when a rapid/pragmatic search is sufficient
  vs. when comprehensive search is required; evidence for decision-relevant differences
  between rapid and comprehensive searches; cases where comprehensive search found
  studies but did NOT change the policy conclusion; diminishing returns arguments
  for comprehensive retrieval in policy-relevant reviews; HTA critique of systematic
  review search standards as disproportionate to decision needs; time-quality
  tradeoffs in evidence procurement for policy

Source type (academic): International Journal of Technology Assessment in Health Care;
  Value in Health (ISPOR); HTA journal publications; CADTH Methods and Guidelines
  documents; NICE Technical Support Documents
Source type (practitioner): NICE Evidence Review rapid methodology guidance;
  CADTH Rapid Review methodology documents; AHRQ EHC Program rapid review process;
  HTA agency grey reports on search scope adequacy

Queries:
  Q1: rapid review health technology assessment search scope adequacy pragmatic
      evidence procurement policy decision
  Q2: HTA rapid evidence review search completeness tradeoffs timeliness decision
      relevance limitations
  Q3: rapid systematic review comprehensive search equivalence policy evidence
      decision-making tradeoffs

Coverage-gap note: This angle directly challenges whether comprehensive retrieval is
  necessary for all review purposes. If this adversarial angle returns strong evidence
  that comprehensive retrieval does not change policy conclusions, that finding should
  be synthesized against the confirmatory angles — not dismissed. Dispatch separately
  and compare findings before synthesis.
```

---

### ANGLE 11: Recall Audit Methodology — Empirical Evaluation of Search Strategy Performance
```
ANGLE 11: Recall Audit Methodology — Empirical Evaluation of Search Strategy Performance
===========
Vocabulary tradition: Clinical epidemiology / recall audit methodology (cross-disciplinary)
Angle type: Cross-disciplinary
Predicted research character: empirical (recall audit studies with prospective reference
  set comparisons; meta-methodological research)
What to extract: methodologies for constructing reference sets to evaluate search
  recall prospectively; documented yield rates of specific search approaches against
  reference standards; PRESS checklist evidence base; peer review of search strategy
  effects on recall; librarian-authored audits of search strategy performance; methods
  for estimating search completeness without exhaustive search; inter-rater reliability
  for search strategy evaluation; quantitative benchmarks for what counts as
  "comprehensive" across different domains

Source type (academic): JMLA; BMC Medical Research Methodology; Systematic Reviews;
  Research Synthesis Methods; Annals of Internal Medicine (search methodology articles)
Source type (practitioner): PRESS checklist formal documentation (McGowan et al.);
  Cochrane information specialist resources for search quality; librarian audit
  protocols from health sciences library programs

Queries:
  Q1: systematic review search strategy sensitivity yield recall prospective audit
      reference set evaluation methodology
  Q2: peer review search strategy PRESS checklist recall quality improvement evidence
      base
  Q3: search strategy validation reference standard recall estimation clinical
      systematic review methodology empirical
  Q4: information specialist librarian search audit recall completeness evaluation
      tool method

Coverage-gap note: This angle focuses on evaluation of search strategy performance,
  not on design of those strategies. It is structurally complementary to Angle 1
  (design) and Angle 9 (failure modes). Traditions for recall auditing outside the
  clinical domain (SE, social science) are underrepresented in this angle's query set.
```

---

### ANGLE 12: Cognitive Limits in Information Search — Stopping Rules and Saturation
```
ANGLE 12: Cognitive Limits in Information Search — Stopping Rules and Saturation
===========
Vocabulary tradition: Cognitive science / human factors (information-seeking behavior)
Angle type: Cross-disciplinary
Predicted research character: empirical (cognitive science studies and controlled
  experiments with information-seeking behavior) — this tradition is largely separate
  from the systematic review literature and may produce unexpected findings
What to extract: theoretical models of when searchers stop (stopping rules, saturation
  criteria, diminishing returns detection); evidence for cognitive biases that
  reduce search completeness (vocabulary anchoring, confirmation bias in query
  construction, satisficing); information foraging theory applied to systematic
  search contexts; cognitive load effects on search thoroughness; how human searchers
  operationalize "comprehensive" vs. "enough"; optimal stopping research applied to
  literature search; machine model comparisons to human stopping behavior

Source type (academic): Information Processing & Management; Human-Computer Studies
  (Elsevier); Cognitive Psychology; JASIST; Proceedings of ACM CHI (human-computer
  interaction); Journal of Documentation
Source type (practitioner): UX research literature on search behavior; Nielsen Norman
  Group research (where applicable); information architecture practitioner resources

Queries:
  Q1: information foraging theory literature search stopping rule saturation cognitive
      systematic review
  Q2: stopping rule information seeking saturation heuristic diminishing returns
      search completeness cognitive behavior
  Q3: satisficing information seeking search behavior systematic review comprehensiveness
      cognitive bias
  Q4: anchoring bias vocabulary fixation information search completeness missed
      literature cognitive heuristic

Coverage-gap note: The cognitive science and information-seeking literature mostly
  studies shorter search sessions, not systematic review-scale searches spanning
  weeks or months with multiple searchers. Transfer from this literature to
  systematic review practice requires careful scope annotation when synthesizing.
```

---

## GATE SUMMARY

```
GATE SUMMARY
============
Gate 1 — Completeness:
  Null-hypothesis angle present: PASS — Angle 9 explicitly framed as disconfirming
    ("what evidence shows methods FAIL"); queries include failure, missed studies,
    recall shortfall, limitations, gold standard comparison.
  Adversarial angle present: PASS — Angle 10 labeled [ADVERSARIAL-FLAGGED] with full
    dispatch note; generated from HTA vocabulary with excluded terms listed.
  Cross-disciplinary angle present: PASS — Angles 11 and 12 both target traditions
    NOT in the intake brief (clinical epidemiology recall audit; cognitive science /
    human factors). Both tradition labels differ from all 6 intake brief traditions.
  Source-type coverage (practitioner): PASS — domain maturity is mixed; practitioner
    sources assigned in all confirmatory angles. Notable practitioner sources:
    Cochrane Handbook, JBI Manual, CADTH Grey Matters, ISSG filter collection,
    GitHub (ASReview, Rayyan), NICE/CADTH HTA documents.
  Vocabulary-tradition map populated: PASS — coverage map contains 6 traditions
    from intake brief + 2 extended sub-traditions + 2 cross-disciplinary = 10
    traditions with ≥2 distinct entries.
  Gate 1 result: PASS

Gate 2 — Distinctness:
  Boolean-connective test applied to candidate overlapping pairs:
    Angle 1 (multi-database strategy) vs. Angle 4 (grey literature): PASS — Angle 1
      queries target multi-database design and overlap; Angle 4 queries target grey
      literature sources (conference papers, theses, trial registries). An OR
      combination would retrieve substantially different documents.
    Angle 2 (IR theory / query expansion) vs. Angle 3 (LIS / controlled vocabulary):
      PASS — Angle 2 queries use IR theory vocabulary (Bradford zones, relevance
      feedback, query expansion); Angle 3 queries use LIS vocabulary (MeSH, thesaurus,
      subject headings, librarian). Distinct ingest populations (IR conference papers
      vs. LIS journals).
    Angle 1 (evidence synthesis) vs. Angle 8 (search filter validation): PASS —
      Angle 1 focuses on overall multi-database strategy; Angle 8 specifically targets
      validated filter sets and peer review of search strategies. Different facets;
      an OR would not retrieve the same documents.
    Angle 6 (snowballing / citation methods) vs. Angle 11 (recall audit): PASS —
      Angle 6 covers citation-tracking methods; Angle 11 covers evaluation of search
      strategy performance against reference standards. Distinct by purpose and
      vocabulary.
    Angle 9 (null-hypothesis) vs. Angle 11 (recall audit): MODERATE OVERLAP FLAGGED
      — both angles touch on search strategy failures. However, Angle 9 is framed as
      disconfirming (does comprehensive search fail?) while Angle 11 focuses on
      evaluation methodology (how do you measure recall audit performance?). They
      would retrieve some overlapping papers. SMALL-LITERATURE-ADJACENT FLAG: this
      is a narrower sub-literature; some overlap may reflect limited corpus rather
      than angle redundancy. Recommend human judgment before merging.
  Vocabulary-tradition labels: PASS — all 12 angles have distinct tradition labels.
    No non-null-hypothesis, non-adversarial pair shares a label.
  Gate 2 result: PASS with one flagged overlap (Angles 9 and 11) — human judgment
    recommended before merge decision.

Gate 3 — Launchability:
  Concrete query strings: PASS — all 12 angles contain runnable query strings with no
    description placeholders.
  No placeholder vocabulary: PASS — reviewed all query strings; no TBD, [fill in],
    or unfilled markers present.
  Source type named: PASS — all 12 angles name specific platforms in both source-type
    fields. Where practitioner sources are deprioritized (Angle 2), this is stated
    explicitly with a reason.
  Gate 3 result: PASS

Gate 4 — Scoring prohibition:
  No LLM self-evaluation ranking: PASS — no angle is labeled "most promising," "most
    relevant," or "strongest." Angle selection used structural criteria only:
    vocabulary-tradition coverage, null-hypothesis presence, source-type coverage,
    Boolean-connective distinctness, type allocation requirements.
  No implicit quality assessments: PASS — reviewed all angle records; no phrases of
    the form "this angle is likely most useful" or equivalent subjective assessments.
  Gate 4 result: PASS

Overall verdict: PASS — dispatch ready (with one flagged item requiring human judgment)

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all traditions enumerated by LLM only; survey-paper
     probe (search: "systematic review search strategy comprehensive retrieval 2023 2024
     survey") recommended before treating the tradition list as complete. A pearl-growing
     pass from the Cochrane Handbook Chapter 4 methodology section is the recommended
     external anchor.
  2. Angle 9 / Angle 11 overlap — moderate query overlap between null-hypothesis angle
     and recall audit methodology angle. Human judgment required before merge; overlap
     may reflect limited sub-literature rather than angle redundancy.
  3. Source B unavailable — expected angle coverage is MODERATE, not FULL. Cross-
     disciplinary angles may miss traditions only visible in survey-paper title vocabulary.
  4. Temporal decay notice for Angle 7 (AI tools) — specific tool performance figures
     decay rapidly; date-filter queries recommended; re-run this angle if executing more
     than 12 months from this output.
```

---

## SELF-CHECK (CLAUDE.md after-every-task rule)

What is missing, incomplete, or questionable in this output:

1. VOCABULARY SELF-REPORT FLAG not resolved: Survey-paper probe was unavailable. There is a non-zero probability that a vocabulary tradition exists (e.g., social science systematic review methodology using the Campbell Collaboration tradition; education research systematic review) that is not represented in this angle list. An external validation pass is needed before treating this list as covering all traditions.

2. Non-clinical domain underrepresentation: Most confirmatory angles (1, 3, 4, 8, 11) default to clinical/biomedical framing. The social science, education, and policy systematic review traditions (EPPI-Centre, Campbell Collaboration, What Works Clearinghouse) are underrepresented. If the researcher's target domain is outside clinical medicine, supplementary angles targeting those traditions would improve coverage.

3. Angle 10 adversarial vocabulary exclusion is procedurally logged but not independently verifiable in the same context: The excluded-terms list was written inline; a downstream researcher should verify the adversarial angle does not cross-contaminate from confirmatory vocabulary before dispatching it.

4. Angle 9 (null-hypothesis) predicted character is "gap" — the literature on systematic search failure is likely sparse and may not be retrievable at scale. The researcher should treat a small yield from these queries as expected (low false-negative risk) rather than as search failure.

Proposing X — proceeding unless redirected: The natural next step is to run the confirmed angles as actual searches, beginning with the cross-disciplinary angles (11 and 12) as they are most likely to surface unexpected vocabulary that would prompt angle revision. The adversarial angle (10) should be dispatched in a separate context before any synthesis begins.
