# Angle-Gen-Kit Output — INT-11 / E1 / Condition B

**Topic:** Methods for conducting systematic literature reviews in sports science
**Condition:** B (subagent / sandboxed context — Source B unavailable)
**Kit deployment constraints active:**
- Source B (web search / survey-paper probe): UNAVAILABLE
- VOCABULARY SELF-REPORT FLAG: active throughout
- Expected coverage: MODERATE (not FULL)
- Severity assessment per intake.md Step 5: MODERATE — Source A+C produced ≥4 distinct vocabulary traditions

---

## SECTION 1: INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: Methods for conducting systematic literature reviews in the sports science domain

Anchor vocabulary:
  - "systematic literature reviews" (research methodology / evidence synthesis tradition)
  - "sports science" (kinesiology / exercise science tradition)

Candidate vocabulary traditions:
  1. Research methodology / evidence synthesis — systematic review, meta-analysis, PRISMA,
     scoping review, rapid review, umbrella review, Cochrane review, evidence synthesis,
     grey literature, risk of bias, GRADE, protocol registration, PROSPERO
  2. Sports science / kinesiology — kinesiology, exercise physiology, athletic performance,
     sport medicine, biomechanics, sport psychology, human performance research,
     physical activity, exercise training
  3. Information science / library science — bibliometric analysis, search strategy design,
     database coverage, Boolean operators, MeSH terms, reference management, grey literature
     retrieval, PRESS checklist, citation searching, information specialist
  4. Statistics / meta-analytic methods — effect size, heterogeneity, I² statistic,
     random effects model, fixed effects model, forest plot, funnel plot, Egger's test,
     publication bias, small-study effects, GRADE evidence certainty

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate
  traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known
  anchor paper) is recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  Basis: No comparison language, no intervention-outcome structure. The operative question
  is "what methods and approaches exist for conducting SLRs in sports science?" PICO is
  NOT applied at intake (documented failure mode — PICO at intake requires domain vocabulary
  that does not yet exist at domain entry).

Scope markers: Domain constrained to sports science; no date range stated; no specific
  subdomain of sports science excluded
  Inferred scope: general SLR methodology as applied to any sports science subdomain

Known exclusions: None stated

Domain maturity estimate: academic-heavy
  Basis: "Systematic literature review" is formal academic methodology language; "sports
  science" implies peer-reviewed research context; user did not mention tools, software,
  or implementation platforms; no practitioner indicators present in prompt

Survey paper status: NOT CHECKED — Source B unavailable in this execution context

Source B status: UNAVAILABLE — MODERATE
  Reason: Source A (LLM translation) + Source C (absent-term signal) together produced
  4 distinct vocabulary traditions. Severity is MODERATE, not HIGH RISK. Proceeding
  with VOCABULARY SELF-REPORT FLAG active throughout.

Absent-term signal (Source C):
  User did NOT say: "meta-analysis," "PRISMA," "Cochrane," "scoping review," "PROSPERO,"
  "grey literature," "heterogeneity," "effect size" — these are the most academically
  prominent terms in systematic review methodology; their absence may signal the user is
  at domain entry or approaching from a sports science rather than methodology framing.
  User did NOT say: "kinesiology," "exercise physiology," "SPORTDiscus," "PEDro scale" —
  domain-specific terms that would appear in an expert sports science researcher's prompt.

Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):
  Target tradition: Computer science / systematic review automation
    (NLP, text mining, machine learning for citation screening, AI-assisted evidence synthesis)
  Selection basis: Same real-world problem approached via different computational means —
    automating the screening and extraction steps of systematic reviews uses NLP/ML vocabulary
    entirely absent from the traditional methodology literature (PRISMA, Cochrane); this
    tradition has produced a distinct body of tools and algorithms (ASReview, Abstrackr,
    Rayyan, SWIFT-Review, active learning pipelines) that will not surface in
    sports-science-specific or methodology-specific searches.
```

**Intake gate check:**
- [x] Topic field populated (not TBD)
- [x] ≥2 distinct vocabulary traditions (4 identified)
- [x] Question type classified (EXPLORATORY)
- [x] Cross-disciplinary tradition pre-committed (Computer science / SLR automation)

All four gate conditions met. Proceeding to angle generation.

---

## SECTION 2: COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: Research methodology / evidence synthesis
  Representative terms: systematic review, meta-analysis, PRISMA, scoping review,
    Cochrane, grey literature, risk of bias, GRADE, umbrella review, PROSPERO,
    protocol registration, rapid review
  Planned angle slot: Confirmatory A1 — reporting standards and protocol design
  Gap flag: No — primary methodology tradition; well-covered in planned list

Tradition 2: Sports science / kinesiology
  Representative terms: kinesiology, exercise physiology, athletic performance, sport
    medicine, biomechanics, sport psychology, SPORTDiscus, PEDro, physical activity
    intervention, exercise training
  Planned angle slot: Confirmatory A2 — sport-specific database coverage and SLR practice
  Gap flag: No — covered

Tradition 3: Information science / library science
  Representative terms: bibliometric analysis, search strategy design, database coverage,
    Boolean operators, MeSH terms, reference management, grey literature retrieval,
    PRESS checklist, citation searching, information specialist, pearl growing
  Planned angle slot: Confirmatory A3 — search string construction and validation methods
  Gap flag: No — covered

Tradition 4: Statistics / meta-analytic methods
  Representative terms: effect size, heterogeneity, I² statistic, random effects model,
    forest plot, funnel plot, Egger's test, publication bias, GRADE evidence certainty
  Planned angle slot: Confirmatory A4 — meta-analytic statistical methods for sports science
  Gap flag: No — covered

Tradition 5: Dynamic evidence synthesis / living reviews methodology
  Representative terms: living systematic review, continuous update, dynamic synthesis,
    surveillance trigger, surveillance threshold, living meta-analysis, signal detection
  Planned angle slot: Confirmatory A5 — living reviews and dynamic updating
  Gap flag: No — covered (note: this is a methodological sub-tradition distinct from the
    reporting-standards vocabulary of Tradition 1)

Traditions NOT yet represented in planned list:
  All five traditions from the extended vocabulary bootstrap have at least one angle slot.
  Note: "quality appraisal tools" (PEDro scale, TESTEX, Downs and Black, Cochrane RoB)
  overlaps Traditions 1 and 2. Rather than split into a 6th tradition, quality appraisal
  vocabulary is folded into A1 (methodology reporting) and A2 (sport-specific appraisal tools).

Cross-disciplinary slot (required):
  Target tradition: Computer science / systematic review automation
    (NLP, text mining, active learning, AI-assisted screening)
  Basis for selection: Same real-world evidence-synthesis problem addressed via
    computational rather than manual methods; vocabulary pool (NLP pipelines, active learning,
    embedding-based screening, LLM-assisted extraction) does not appear in PRISMA,
    kinesiology, library science, or biostatistics searches.
```

---

## SECTION 3: TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Research methodology / evidence synthesis):
  Focus: PRISMA reporting standards, protocol design, quality appraisal frameworks

Slot A2 (Confirmatory — Sports science / kinesiology):
  Focus: Sport-specific databases (SPORTDiscus, CINAHL), domain-specific appraisal tools,
  grey literature in sports science

Slot A3 (Confirmatory — Information science / library science):
  Focus: Boolean search string construction, PRESS checklist, sensitivity vs. specificity
  tradeoffs, citation-chaining supplementary strategies

Slot A4 (Confirmatory — Statistics / meta-analytic methods):
  Focus: Meta-analytic statistical methods, heterogeneity quantification, publication bias
  detection, GRADE certainty of evidence

Slot A5 (Confirmatory — Dynamic evidence synthesis / living reviews):
  Focus: Living systematic review protocols, update trigger criteria, resource requirements

Slot N1 (Null-hypothesis): assigned
  Focus: Evidence that standard SLR methods fail or produce misleading/inconsistent results
  in sports science

Slot D1 (Adversarial):
  Starting vocabulary: replication science / methodological critique
  NOT FROM: research methodology, sports science, information science, statistics
  Excluded term pool: systematic review, PRISMA, meta-analysis, scoping review, Cochrane,
  sports science, kinesiology, exercise physiology, Boolean, MeSH, heterogeneity,
  effect size, I², publication bias, GRADE

Slot C1 (Cross-disciplinary):
  Target tradition: Computer science / systematic review automation
    (NLP, text mining, active learning, AI-assisted screening)
```

---

## SECTION 4: ANGLE LIST

---

### ANGLE 1: PRISMA compliance and reporting standards for systematic reviews in sports science

```
ANGLE 1: PRISMA compliance and reporting standards for systematic reviews in sports science
===========
Vocabulary tradition: Research methodology / evidence synthesis
Angle type: Confirmatory
Predicted research character: consensus
What to extract: PRISMA adoption rates in sports science journals, PROSPERO registration
  practices, quality of protocol documentation, use of GRADE for evidence certainty grading,
  reporting completeness audits of published reviews, critical appraisal tools used
  (CASP, AMSTAR-2, ROBIS)

Source type (academic): Systematic Reviews (BioMed Central), British Journal of Sports
  Medicine, PubMed / MEDLINE
Source type (practitioner): deprioritized — academic-heavy domain; minimal practitioner
  production on reporting standards

Queries:
  Q1: PRISMA reporting quality systematic review sports science compliance audit
  Q2: PROSPERO protocol registration systematic review exercise physiology kinesiology
  Q3: AMSTAR-2 quality assessment meta-analysis sports medicine physical activity review
  Q4: GRADE evidence certainty grading exercise intervention systematic review outcomes
  Q5: scoping review reporting quality sports science JBI PRISMA-ScR extension

Coverage-gap note: Does not address historical PRISMA versions or pre-2009 review methodology;
  does not cover extensions for specific design types (PRISMA-NMA, PRISMA-IPD) — follow-up
  angle may be warranted if network meta-analysis is in scope.
```

---

### ANGLE 2: Domain-specific database coverage for sports science literature searches

```
ANGLE 2: Domain-specific database coverage for sports science literature searches
===========
Vocabulary tradition: Sports science / kinesiology
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Which databases are used in sports science SLRs, coverage gaps specific
  to SPORTDiscus vs. MEDLINE vs. Embase, grey literature sources specific to sports
  science (theses, conference proceedings, technical reports from governing bodies),
  domain-specific critical appraisal tools (PEDro scale, TESTEX, Downs and Black)

Source type (academic): Journal of Sports Sciences, International Journal of Sports Medicine,
  PubMed, SPORTDiscus (EBSCO)
Source type (practitioner): deprioritized — academic-heavy domain

Queries:
  Q1: SPORTDiscus database systematic review sports science search strategy coverage
  Q2: database selection exercise science kinesiology literature review MEDLINE CINAHL Embase
  Q3: grey literature sports science systematic review conference proceedings theses sources
  Q4: PEDro scale critical appraisal sports physiotherapy physical therapy quality assessment
  Q5: TESTEX exercise training study quality evaluation checklist systematic review

Coverage-gap note: Does not address non-English language database coverage (e.g.,
  LILACS for Latin American sports research); does not cover preprint servers (SportRxiv)
  as emerging grey literature sources.
```

---

### ANGLE 3: Search string construction and validation for sports science systematic reviews

```
ANGLE 3: Search string construction and validation for sports science systematic reviews
===========
Vocabulary tradition: Information science / library science
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Boolean query design methods for sports science, MeSH term selection
  and supplementation with free-text terms, PRESS checklist application,
  sensitivity vs. specificity tradeoffs, information specialist involvement,
  citation-chaining and pearl-growing as supplementary strategies, search strategy
  peer review practices

Source type (academic): Journal of the Medical Library Association, Health Information
  and Libraries Journal, Semantic Scholar
Source type (practitioner): Cochrane Handbook for Systematic Reviews of Interventions
  (technical documentation — practitioner-facing but canonical)

Queries:
  Q1: search strategy construction systematic review sports science Boolean operators
      MeSH thesaurus validation
  Q2: PRESS checklist peer review search strategy exercise research information specialist
  Q3: search filter sensitivity specificity systematic review exercise physical activity
      retrieval performance
  Q4: citation searching reference tracking pearl growing kinesiology sports medicine
      supplementary search strategy
  Q5: librarian information specialist involvement systematic review quality sports
      medicine literature search

Coverage-gap note: Does not address multilingual search strategy adaptation; does not cover
  grey literature search techniques (hand searching journal tables of contents, expert
  consultation for unpublished data) as a standalone facet.
```

---

### ANGLE 4: Meta-analytic statistical methods for sports science reviews

```
ANGLE 4: Meta-analytic statistical methods for sports science reviews
===========
Vocabulary tradition: Statistics / meta-analytic methods
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Effect size conventions used in sports science (Cohen's d, Hedges' g,
  standardised mean difference), heterogeneity quantification (I², tau², prediction
  intervals), publication bias detection methods (Egger's test, Begg's test, trim-and-fill),
  handling of small-sample studies, dose-response meta-analysis methods, individual
  participant data (IPD) meta-analysis in sports contexts

Source type (academic): British Journal of Sports Medicine, International Journal of
  Sports Physiology and Performance, arXiv stat.ME, Semantic Scholar
Source type (practitioner): deprioritized — statistical methodology is academic-heavy;
  practitioner guidance exists (software manuals) but primary literature is academic

Queries:
  Q1: meta-analysis effect size heterogeneity sports science exercise physiology I²
      random effects
  Q2: publication bias detection funnel plot Egger test sports medicine meta-analysis
      small study effects
  Q3: individual participant data meta-analysis sports science exercise intervention
      IPD methodology
  Q4: dose-response meta-analysis physical activity exercise training intensity volume
      systematic review
  Q5: network meta-analysis exercise intervention comparison sports medicine mixed
      treatment comparison

Coverage-gap note: Does not address Bayesian meta-analytic methods; does not cover
  multivariate meta-analysis for correlated outcomes (common in sports science where
  multiple performance measures are collected within the same study).
```

---

### ANGLE 5: Evidence that systematic review methods fail or produce unreliable findings in sports science

```
ANGLE 5: Evidence that systematic review methods fail or produce unreliable findings
  in sports science
===========
Vocabulary tradition: Research methodology / evidence synthesis (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Documented instances of contradictory meta-analyses on the same topic,
  high heterogeneity rendering pooling invalid, replication failures of SLR conclusions,
  methodological quality deficiencies in published sports science reviews, cases where
  grey literature exclusion biased conclusions, outcome reporting bias at the review level

Source type (academic): Systematic Reviews, BMJ Open, BJSM, PLOS ONE, Semantic Scholar
Source type (practitioner): deprioritized

Queries:
  Q1: contradictory meta-analysis results sports science inconsistent systematic review
      conflicting conclusions
  Q2: systematic review replication failure exercise physiology sports science methodology
      limitations
  Q3: high heterogeneity invalid pooling meta-analysis physical activity intervention
      unreliable conclusions
  Q4: methodological quality deficiencies sports science systematic review reporting
      problems audit
  Q5: grey literature bias exclusion unpublished data effect sports medicine meta-analysis
      results change

Coverage-gap note: Does not cover the inverse problem — cases where grey literature
  inclusion rather than exclusion introduced bias. Does not address selective updating
  of living reviews as a failure mode.
```

---

### ANGLE 6: [ADVERSARIAL-FLAGGED] Critique of evidence synthesis from replication and credibility science

```
ANGLE 6: Critique of evidence synthesis from replication and credibility science
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior
  confirmatory results]

Vocabulary tradition: Replication science / methodological critique
Angle type: Adversarial-FLAGGED
Predicted research character: empirical
What to extract: Known failure modes of the evidence synthesis process as identified
  by meta-research, researcher degrees of freedom in review design (arbitrary inclusion
  criteria, post-hoc outcome selection), outcome-reporting bias at the review level,
  selective literature inclusion, p-hacking at the review level, credibility problems
  of the systematic review enterprise, cherry-picking in narrative framing of SLR
  conclusions, undisclosed conflicts of interest in review commissioning

Source type (academic): Science (AAAS), Nature Human Behaviour, PLOS ONE,
  Research Synthesis Methods, Semantic Scholar
Source type (practitioner): Retraction Watch; preprint servers (meta-science / metaresearch)

Generation note: This angle was generated using ONLY the following vocabulary seed:
  "replication science," "credibility," "methodological critique," "researcher degrees
  of freedom," "meta-research."
  Excluded from generation: systematic review, PRISMA, meta-analysis, scoping review,
  Cochrane, sports science, kinesiology, exercise physiology, Boolean, MeSH,
  heterogeneity, effect size, I², publication bias.

Queries:
  Q1: evidence synthesis credibility replication crisis research methodology
      questionable practices failures
  Q2: researcher degrees of freedom literature review design arbitrary inclusion
      criteria outcome reporting bias
  Q3: outcome reporting bias selective inclusion research synthesis cherry-picking
      methodological critique
  Q4: p-hacking review level meta-research problematic practices evidence aggregation
      credibility
  Q5: conflicts of interest review commissioning industry funding systematic review
      conclusion direction bias

Coverage-gap note: The adversarial vocabulary pool selected (replication science) will
  surface literature primarily from medicine and psychology. Sports-science-specific
  credibility critique may require a supplementary search in sports medicine journals.
  Dispatching this angle without any prior confirmatory results is required — see
  angle-quality.md Weakness 6 for the structural separation rationale.
```

---

### ANGLE 7: Automated and AI-assisted approaches to systematic review in sports science

```
ANGLE 7: Automated and AI-assisted approaches to systematic review in sports science
===========
Vocabulary tradition: Computer science / systematic review automation
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: NLP and ML tools for automated title/abstract screening, active learning
  pipelines for citation prioritisation, text mining for data extraction, LLM-assisted
  full-text screening, performance benchmarks for automation tools (recall, precision,
  work saved), specific application to sports science corpora, human-in-the-loop
  automation designs

Source type (academic): arXiv cs.IR, arXiv cs.CL, Journal of the American Society for
  Information Science and Technology (JASIST), Journal of Information Science
Source type (practitioner): GitHub (ASReview, Abstrackr, Covidence, SWIFT-Review,
  Rayyan source repositories and documentation); published tool comparison reviews

Queries:
  Q1: automated systematic review screening machine learning active learning citation
      classification recall performance
  Q2: NLP text mining systematic review title abstract screening automation tool
      comparison benchmark
  Q3: large language model LLM systematic review automation evidence extraction
      screening 2023 2024 2025
  Q4: ASReview Rayyan Abstrackr automated screening tool systematic review performance
      evaluation workload reduction
  Q5: text mining evidence synthesis sports science exercise literature automated
      extraction pipeline

Coverage-gap note: Does not address automated risk-of-bias assessment tools or
  NLP approaches to data extraction from tables/figures (as distinct from text
  screening). These represent distinct automation sub-problems that would require
  separate angles if in scope.
```

---

### ANGLE 8: Living systematic reviews and dynamic evidence updating in sports science

```
ANGLE 8: Living systematic reviews and dynamic evidence updating in sports science
===========
Vocabulary tradition: Dynamic evidence synthesis / living reviews methodology
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Decision criteria for initiating a living review, surveillance trigger
  thresholds, resource and editorial requirements for continuous maintenance, governance
  frameworks for living reviews, evidence on when living reviews are warranted
  vs. periodic full updates, sports-science-specific examples of living review protocols

Source type (academic): Systematic Reviews (BioMed Central), PLOS Medicine,
  Cochrane Database of Systematic Reviews, Semantic Scholar
Source type (practitioner): Cochrane methodology resources (WHO documentation on
  living guidelines — practitioner-adjacent but canonical)

Queries:
  Q1: living systematic review methodology protocol design continuous update trigger
      criteria governance
  Q2: living meta-analysis sports medicine exercise evidence surveillance update
      threshold decision
  Q3: dynamic evidence synthesis methods athletic performance research updating
      approach resource requirements
  Q4: rapid review vs living review methodology systematic comparison design choice
      sports science

Coverage-gap note: 4 queries rather than 5 — the living review literature is smaller
  than the static review literature; additional queries within this tradition face rapid
  diminishing returns. This may warrant a small-literature exception per angle-quality.md
  Gate 2 if the Boolean-connective test flags overlap with Angle 1.
```

---

## SECTION 5: QUALITY GATE DOCUMENTATION

### Gate 1 — Completeness checks

**Null-hypothesis angle present:**
Angle 5 is framed as "Evidence that systematic review methods fail or produce unreliable findings." Query strings contain: "contradictory," "replication failure," "limitations," "unreliable conclusions," "methodological quality deficiencies," "grey literature bias." Explicit disconfirming vocabulary present. PASS.

**Adversarial angle present:**
Angle 6 carries the label `[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]`. PASS.

**Cross-disciplinary angle present:**
Angle 7 targets "Computer science / systematic review automation" — this tradition was NOT listed in the intake brief's candidate vocabulary traditions (which listed: research methodology, sports science, information science, statistics). Confirmed not present in intake brief. PASS.

**Source-type coverage:**
Domain maturity is academic-heavy; practitioner sources are deprioritized per the assignment rule for academic-heavy topics. Angle 7 does include a practitioner source (GitHub tool repositories) as a structurally distinct practitioner source — this covers the automation tool literature not available in academic journals. PASS.

**Vocabulary-tradition map populated:**
Coverage map lists 5 distinct tradition names. ≥2 traditions present. PASS.

**Gate 1 verdict: PASS**

---

### Gate 2 — Distinctness checks

**Boolean-connective test — high-risk pairs examined:**

Pair (A2, A3) — Angles 2 and 3 are both about the search process:
- Angle 2 most distinctive term: "SPORTDiscus" / "database coverage" (WHERE to search)
- Angle 3 most distinctive term: "PRESS checklist" / "Boolean operators MeSH" (HOW to construct queries)
- Would OR of A2 and A3 queries retrieve the same documents? No — A2 queries retrieve studies about database coverage and sport-specific appraisal tools; A3 queries retrieve studies about search string methodology, query validation, and librarian involvement. Different facets of the search process. PASS.

Pair (A1, N1) — Both use "research methodology / evidence synthesis" vocabulary:
- A1 confirms PRISMA reporting and protocol design
- N1 is the null-hypothesis variant (disconfirming framing, different query vocabulary)
- Per the kit rule: null-hypothesis variants sharing a tradition label are exempt from the same-label merger rule. PASS.

Pair (A1, A5):
- A1: PRISMA/reporting/GRADE/AMSTAR-2
- A5: living review, continuous update, surveillance trigger
- Distinctive terms do not overlap — these address different methodological questions (how to report vs. how to maintain over time). PASS.

Pair (A4, A8):
- A4: statistical methods (heterogeneity, I², publication bias)
- A8: living review governance and update protocols
- No vocabulary overlap. PASS.

All remaining pairs pass without formal test (no shared distinctive query terms).

**Vocabulary-tradition distinctness:**
- A1: Research methodology / evidence synthesis
- A2: Sports science / kinesiology
- A3: Information science / library science
- A4: Statistics / meta-analytic methods
- A5: Dynamic evidence synthesis / living reviews methodology
- N1: Research methodology / evidence synthesis (disconfirming variant — null-hypothesis exemption applies)
- D1: Replication science / methodological critique (adversarial — structural exemption)
- C1: Computer science / systematic review automation

No two non-null-hypothesis, non-adversarial angles share a tradition label. PASS.

**Small-literature flag for Angle 8:**
Angle 8 (living reviews) has 4 queries; the living-review literature is smaller than the static-review literature. If the Boolean-connective test at execution time shows Angle 8 queries retrieve a highly overlapping set with Angle 1, this may reflect literature size rather than angle redundancy. SMALL LITERATURE FLAG — human judgment required before any merger of Angles 1 and 8 is applied.

**Gate 2 verdict: PASS (with small-literature flag on Angle 8)**

---

### Gate 3 — Launchability checks

Each angle examined:
- Angle 1: Q1 = "PRISMA reporting quality systematic review sports science compliance audit" — pasteable into any search box. All 5 queries are runnable strings. Source types: PubMed / Systematic Reviews (academic); practitioner deprioritized (stated). PASS.
- Angle 2: Q1 = "SPORTDiscus database systematic review sports science search strategy coverage" — runnable. Sources: Journal of Sports Sciences, PubMed, SPORTDiscus. PASS.
- Angle 3: Q1 = "search strategy construction systematic review sports science Boolean operators MeSH thesaurus validation" — runnable (note: long string but fully formed). Sources: JMLA, Semantic Scholar. PASS.
- Angle 4: Q1 = "meta-analysis effect size heterogeneity sports science exercise physiology I² random effects" — runnable. Sources: BJSM, arXiv stat.ME. PASS.
- Angle 5: Q1 = "contradictory meta-analysis results sports science inconsistent systematic review conflicting conclusions" — runnable. Sources: Systematic Reviews, BJSM. PASS.
- Angle 6: Q1 = "evidence synthesis credibility replication crisis research methodology questionable practices failures" — runnable. Sources: Science (AAAS), Nature Human Behaviour. PASS.
- Angle 7: Q1 = "automated systematic review screening machine learning active learning citation classification recall performance" — runnable. Sources: arXiv cs.IR, GitHub. PASS.
- Angle 8: Q1 = "living systematic review methodology protocol design continuous update trigger criteria governance" — runnable. Sources: Systematic Reviews, Cochrane Database. PASS.

No placeholder vocabulary (TBD / fill in / insert term) found in any angle. PASS.
All source type fields name specific platforms. PASS.

**Gate 3 verdict: PASS**

---

### Gate 4 — Scoring prohibition

Angle allocation was performed entirely on structural criteria:
- Angle 1–5, 8: vocabulary-tradition coverage — each angle assigned to fill a tradition slot with no prior coverage
- Angle 5: null-hypothesis structural requirement (required type, cannot be skipped)
- Angle 6: adversarial structural requirement (required type, different starting vocabulary enforced)
- Angle 7: cross-disciplinary structural requirement (tradition NOT in intake brief, required type)

No angle was ranked or selected on "most promising," "most relevant," or "most novel" criteria. No implicit quality assessment language ("this is the strongest angle") appears in any angle record. PASS.

**Gate 4 verdict: PASS**

---

### Gate Summary

```
GATE SUMMARY
============
Gate 1 — Completeness: PASS
  All five items passed: null-hypothesis present, adversarial-flagged present,
  cross-disciplinary present, source-type coverage adequate for academic-heavy domain,
  vocabulary-tradition map has ≥5 distinct traditions.

Gate 2 — Distinctness: PASS
  Boolean-connective test applied to all high-risk pairs. One small-literature flag
  raised on Angle 8 (living reviews) — human judgment required before any merger with
  Angle 1 if corpus overlap is found at execution time.
  Vocabulary-tradition labels are distinct for all non-null-hypothesis, non-adversarial angles.

Gate 3 — Launchability: PASS
  All 8 angles have ≥1 runnable query string with no placeholder vocabulary.
  All source type fields name specific platforms.

Gate 4 — Scoring prohibition: PASS
  All angle allocation decisions are traceable to structural criteria only.

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all vocabulary traditions were enumerated by LLM only.
     No survey paper probe was run (Source B unavailable). The tradition enumeration may
     miss fields outside LLM training distribution. External validation via a survey-paper
     probe is recommended before accepting the tradition list as complete.
  2. SMALL LITERATURE FLAG — Angle 8 (living reviews). If execution-time search shows
     high overlap between Angle 8 and Angle 1 queries, this may reflect small literature
     size rather than angle redundancy. Do not auto-merge without checking corpus size.
  3. ADVERSARIAL EXECUTION FLAG — Angle 6 must be dispatched in a separate research
     context with no access to Angles 1–5 results. The ADVERSARIAL-FLAGGED label records
     this requirement but cannot enforce it. The dispatching agent is responsible for
     structural context separation.
  4. MODERATE coverage expectation — Source B unavailable; expected coverage of vocabulary
     traditions is MODERATE, not FULL. A Source B pass (survey-paper probe in a context
     with web access) is recommended if FULL tradition coverage is required before
     angle list finalization.
```

---

## SECTION 6: DEPLOYMENT NOTES

**Source B unavailability impact on this run:**

The sports science systematic review methodology domain is moderately well-represented in LLM training data. Unlike LLM/AI research (where Weakness 7 / INT-10 FM4 showed near-zero differential from coverage-gap conditioning), SLR methodology in sports science is a more specialized intersection. Assessment: coverage-gap conditioning likely added real differential on this run — the domain is not as heavily represented as core ML/AI topics. The MODERATE severity rating is appropriate.

**Traditions most at risk of incompleteness (without Source B):**

Survey-paper title vocabulary would most likely surface: specific appraisal tools for sports science (TESTEX, Modified Downs and Black, PEDro — partially captured in A2), equity and diversity reporting extensions (PRISMA-E — not captured; possible gap), and non-English language or regional sports science database coverage (not captured). If these are in scope, a targeted supplementary angle may be warranted after a Source B pass.

**Angle count justification:**

8 angles for a 5-tradition EXPLORATORY topic. Below the 12-angle ceiling for standard questions. Justified by: 5 confirmatory slots (one per tradition), 1 null-hypothesis (required), 1 adversarial (required), 1 cross-disciplinary (required). No inflation beyond structural requirements.
