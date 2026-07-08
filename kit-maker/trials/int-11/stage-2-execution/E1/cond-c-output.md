# angle-gen-kit — Condition C Output
# INT-11 / Stage 2 Execution / E1

**Run date:** 2026-07-07
**Topic:** "I want to research methods for conducting systematic literature reviews in sports science."
**Condition:** C — Source A + Source C only (LLM enumeration; no web search)
**Model:** claude-sonnet-4-6 (frontier tier — satisfies minimum model tier requirement)
**Source B status:** UNAVAILABLE — running under subagent deployment constraint per CLAUDE.md §Deployment constraints

---

## SECTION 1 — INTAKE BRIEF

Populated per intake.md Steps 1–5. All fields filled; no blanks.

```
INTAKE BRIEF
============
Topic: Methods and protocols for conducting systematic literature reviews in sports science

Anchor vocabulary:
  "systematic literature reviews" — Library/Information Science / Evidence Synthesis methodology tradition
  "sports science" — Applied sports science / exercise science domain

Candidate vocabulary traditions:
  1. Information retrieval / Database search methodology — PRISMA, systematic review protocol,
     grey literature, database search strategy, citation searching, PROSPERO, pearl growing,
     SPORTDiscus, MEDLINE, CINAHL, Cochrane methodology, hand searching, MESH terms
  2. Evidence synthesis reporting standards — EQUATOR Network, PRISMA-P, PRISMA 2020,
     protocol registration, reporting checklists, AMSTAR, ROBIS
  3. Study quality appraisal / Risk of bias assessment — risk of bias (Cochrane RoB 2.0), GRADE,
     PEDro scale, COSMIN, critical appraisal, Newcastle-Ottawa Scale, CASP checklists
  4. Meta-analytic statistical synthesis — meta-analysis, heterogeneity, I² statistic, forest plots,
     funnel plots, random-effects model, effect sizes, Cohen's d, SMD, meta-regression,
     network meta-analysis, publication bias
  5. Sports science / Kinesiology domain — exercise science, sport performance, athletic training,
     sport-specific outcome measures, training load, kinesiology, SPORTDiscus journals,
     sport and exercise science, physical activity, ACSM, BASES
  6. Bibliometrics / Scientometrics — VOSviewer, Biblioshiny, bibliometrix (R package),
     co-citation analysis, bibliographic coupling, keyword co-occurrence, CiteSpace,
     scoping review, systematic mapping, research output assessment
  7. Research quality / Replication crisis — publication bias, small-study effects, p-hacking,
     outcome reporting bias, QRPs (questionable research practices), HARKing, replication
     failure, preregistration, registered reports

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate
  traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known
  anchor paper) is recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  Basis: No comparison or intervention-outcome structure in the prompt. User asks for
  "methods" in general — this is a landscape question ("what approaches exist for X"),
  not a comparative question ("does method A outperform method B"). Default to EXPLORATORY
  per intake.md Step 3 decision rule.

Scope markers:
  Domain = sports science (specified)
  No date range stated — inferred scope: includes both established methods (PRISMA 2009/2020,
  PICO) and contemporary developments (living reviews, automated screening)
  No specific review type specified — inferred: all review types applicable to sports science
  (systematic reviews, scoping reviews, meta-analyses, rapid reviews)

Known exclusions: None stated

Domain maturity estimate: Academic-heavy
  Basis: "systematic literature reviews" is academic vocabulary; combination with "sports
  science" suggests an academic researcher or graduate student entering the methods
  literature; no mention of software tools, practical deployment, or institutional
  workflows = academic framing, not practitioner framing

Survey paper status: UNAVAILABLE (Source B cannot be run in this execution context)

Source B status: UNAVAILABLE — MODERATE
  Reason: Source A + Source C together produced 7 distinct vocabulary traditions spanning
  library/information science, clinical research methodology, sports science domain,
  bibliometrics, and research quality traditions. ≥2 traditions confirmed — severity
  is MODERATE, not HIGH RISK. Angle generation may proceed.

Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):
  Target tradition: Theory-driven evaluation / Realist synthesis
  (Pawson & Tilley tradition in policy evaluation and social science)
  Selection basis: Same real-world problem from human perspective — complex sports
  interventions (multi-component training programs, behavioral coaching approaches,
  performance optimization protocols) share structural similarity with complex social
  programs; realist synthesis, framework synthesis, and meta-narrative review address
  "what works for whom under what circumstances" — the same challenge as sports
  science SLRs that face heterogeneous interventions — but from a theory-driven
  rather than aggregative/statistical tradition entirely absent from sports science
  SLR methodology literature. Heuristic 2 (same real-world problem from human
  perspective) applies.
```

---

### Step 2 — Vocabulary bootstrap detail (Sources A and C)

**Source A — LLM translation:**

Anchor term 1: "systematic literature reviews"
→ Also called: systematic review, systematic research synthesis, evidence synthesis,
scoping review, meta-analysis, integrative review, umbrella review, rapid review, living
systematic review, bibliometric analysis, grey literature review, narrative review (contrast
term), Cochrane review, Campbell review, knowledge synthesis
→ Key sub-processes named in the literature: protocol registration, search strategy
development, title/abstract screening, full-text eligibility assessment, data extraction,
quality appraisal, synthesis, narrative synthesis, meta-analysis, certainty assessment

Anchor term 2: "sports science"
→ Also called: sport science, exercise science, kinesiology, sports medicine, athletic
performance research, sport and exercise science, physical activity research, sport
performance science, strength and conditioning science, applied sport science

**Source C — Absent-term signal:**

Terms the LLM would expect associated with this topic that the user did NOT use:

1. "meta-analysis" — the dominant quantitative synthesis method; absence may indicate
   entry from the process/conduct side rather than the statistical analysis side
2. "PRISMA" — the universally required reporting standard; absence suggests the user
   is at the "how to conduct" stage before the "how to report" stage
3. "grey literature" — critical search component often missed in sports science SLRs;
   absence may indicate awareness gap or deliberate scope narrowing
4. "scoping review" — distinct methodology often confused with systematic review;
   user may not yet have differentiated these types
5. "GRADE" — evidence quality assessment system; absence confirms EXPLORATORY entry
   point rather than expert-level methods question

---

### Intake gate check

- [x] Topic field populated: "Methods and protocols for conducting systematic literature
      reviews in sports science" — not TBD
- [x] Candidate vocabulary traditions: 7 entries — ≥2 confirmed
- [x] Question type classified: EXPLORATORY
- [x] Cross-disciplinary tradition pre-committed: Theory-driven evaluation / Realist synthesis
      (target tradition named, selection basis stated)

**Gate status: ALL FOUR CONDITIONS MET. Proceeding to angle-generation.md.**

---

## SECTION 2 — COVERAGE MAP

Built from intake brief vocabulary traditions list. Governs angle generation — not a
post-hoc description.

```
COVERAGE MAP
============
Tradition 1: Information retrieval / Database search methodology
  Representative terms: SPORTDiscus, MEDLINE, CINAHL, grey literature, search filter,
    MESH terms, pearl growing, citation chaining, hand searching
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: Evidence synthesis reporting standards
  Representative terms: PRISMA, PRISMA-P, PROSPERO, EQUATOR Network, AMSTAR 2,
    ROBIS, protocol registration, reporting checklist
  Planned angle slot: Confirmatory A6
  Gap flag: No

Tradition 3: Study quality appraisal / Risk of bias assessment
  Representative terms: Cochrane RoB 2.0, GRADE, PEDro, Newcastle-Ottawa, CASP,
    COSMIN, critical appraisal, methodological quality
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 4: Meta-analytic statistical synthesis
  Representative terms: meta-analysis, heterogeneity, I², forest plots, effect sizes,
    random-effects, meta-regression, publication bias, Egger test
  Planned angle slot: Confirmatory A5
  Gap flag: No

Tradition 5: Sports science / Kinesiology domain
  Representative terms: exercise science, sport performance, training load, kinesiology,
    SPORTDiscus, athlete populations, sport-specific outcomes, ACSM, BASES
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 6: Bibliometrics / Scientometrics
  Representative terms: VOSviewer, bibliometrix, co-citation, scoping review,
    systematic mapping, keyword co-occurrence, CiteSpace, research output
  Planned angle slot: Confirmatory A4
  Gap flag: No

Tradition 7: Research quality / Replication crisis
  Representative terms: publication bias, p-hacking, QRPs, HARKing, replication
    failure, preregistration, registered reports, small-study effects
  Planned angle slot: Adversarial D1 (ADVERSARIAL-FLAGGED)
  Gap flag: No

Traditions NOT yet represented in the planned list:
  Open science / research transparency — preregistration platforms, data sharing
  mandates, open-access publishing requirements for SLR data and protocols. This
  partially overlaps with Tradition 2 (protocol registration) but has distinct
  vocabulary around open data, FAIR principles, and reproducibility infrastructure.
  GAP FLAG: PARTIAL — A6 touches preregistration but does not cover data sharing,
  code sharing, or open-access mandates as methodology. Scope accepted for this
  run; named as coverage gap in self-check (Section 5).

  All intake brief traditions have at least one planned angle slot.

Cross-disciplinary slot (required):
  Target tradition: Theory-driven evaluation / Realist synthesis
    (Pawson & Tilley; NOT in intake brief traditions list)
  Basis for selection: Complex sports interventions share structural properties
    with complex social programs — both involve multiple components, context-dependent
    mechanisms, and heterogeneous populations where aggregative synthesis is
    epistemically inadequate. Realist synthesis addresses this by seeking CMO
    (context-mechanism-outcome) configurations. The realist synthesis literature
    (Pawson 2006; RAMESES standards) is entirely absent from sports science SLR
    methodology literature at training-data level — highest coverage novelty
    among candidates checked.
```

**Coverage map gate: ≥2 traditions with planned slots — CONFIRMED (7 traditions mapped).**
**Cross-disciplinary slot populated — CONFIRMED.**

---

## SECTION 3 — TYPE ALLOCATIONS

Written before any angle content per angle-generation.md Step 1.

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Tradition 1): Information retrieval / Database search methodology
Slot A2 (Confirmatory — Tradition 3): Study quality appraisal / Risk of bias assessment
Slot A3 (Confirmatory — Tradition 5): Sports science / Kinesiology domain
Slot A4 (Confirmatory — Tradition 6): Bibliometrics / Scientometrics
Slot A5 (Confirmatory — Tradition 4): Meta-analytic statistical synthesis
Slot A6 (Confirmatory — Tradition 2): Evidence synthesis reporting standards
Slot N1 (Null-hypothesis): assigned — disconfirming framing on generalizability
  of sports science SLR findings
Slot D1 (Adversarial): Tradition 7 — Research quality / Replication crisis
  NOT FROM: Traditions 1, 2, 3, 4, 5, 6 (all terms from those traditions excluded
  from D1 generation)
Slot C1 (Cross-disciplinary): Theory-driven evaluation / Realist synthesis
  (NOT in intake brief — named in coverage map cross-disciplinary slot)
```

Total allocated: 9 angles. Within the 5–12 expected range for a standard
research question. Justification for 9 (above minimum of 5): 7 distinct vocabulary
traditions in the coverage map require separate angles to achieve tradition coverage;
null-hypothesis and adversarial slots are required additions that cannot be
traded against tradition coverage.

---

## SECTION 4 — ANGLE LIST

### ANGLE 1: Database search strategies and grey literature for sports science SLRs
```
ANGLE 1: Database search strategies and grey literature for sports science SLRs
===========
Vocabulary tradition: Information retrieval / Database search methodology
Angle type: Confirmatory
Predicted research character: consensus — expect practitioner-authored methodological
  guides, database-specific search filter papers, and comparative studies of search
  strategy performance; small empirical component (sensitivity/specificity studies)
What to extract: recommended databases for sports science SLRs (SPORTDiscus, MEDLINE,
  CINAHL, Embase, PsycINFO, Web of Science), grey literature inclusion strategies and
  sources (theses, conference proceedings, clinical trial registries), database-specific
  MESH/thesaurus terms for exercise/sport concepts, evidence on search strategy
  comprehensiveness and what studies are missed by partial search strategies

Source type (academic): Semantic Scholar (LIS and health informatics literature;
  not arXiv — this domain is not CS-preprint-heavy)
Source type (practitioner): PubMed supplemented by SPORTDiscus interface documentation;
  EBSCO sport database help resources

Queries:
  Q1: systematic review search strategy sports science databases SPORTDiscus MEDLINE CINAHL
  Q2: grey literature systematic review exercise science sport unpublished studies
      conference proceedings theses
  Q3: database selection comprehensive search systematic literature review exercise
      kinesiology sports medicine
  Q4: MeSH controlled vocabulary exercise physical activity sport systematic search strategy
  Q5: search filter validation sports science systematic review sensitivity specificity recall

Coverage-gap note: Queries do not cover automated search strategy generation tools
  (machine learning-assisted query construction) or citation network searching as
  a supplemental strategy. These are emerging methods that a Source B pass would
  surface more reliably.
```

---

### ANGLE 2: Quality assessment and critical appraisal tools for sports science studies
```
ANGLE 2: Quality assessment and critical appraisal tools for sports science studies
===========
Vocabulary tradition: Study quality appraisal / Risk of bias assessment
Angle type: Confirmatory
Predicted research character: empirical — expect comparative studies of appraisal
  tool performance (inter-rater reliability, kappa statistics), consensus papers
  on tool selection for sports science study designs, and methodological guidance
  on adapting clinical tools (RoB 2.0, GRADE) to exercise science contexts
What to extract: specific risk of bias tools recommended for sports science (PEDro,
  Cochrane RoB 2.0, GRADE, COSMIN for outcome measures), tool reliability data
  (kappa scores between raters in exercise science), guidance on applying tools to
  non-RCT designs common in sports science (single-subject, crossover, performance
  monitoring), COSMIN methodology for appraising measurement properties of
  sport-specific outcome measures

Source type (academic): PubMed (clinical methods and sports medicine methodology
  literature; this is where RoB and GRADE papers are indexed)
Source type (practitioner): PEDro database documentation; Cochrane Handbook
  Chapters 7-8; GRADE working group guidance documents

Queries:
  Q1: risk of bias assessment tools systematic review sports science exercise
      RCT observational studies PEDro Cochrane
  Q2: GRADE evidence quality assessment physical activity exercise systematic review
      certainty evidence
  Q3: PEDro scale critical appraisal physiotherapy exercise intervention reliability
      inter-rater kappa
  Q4: quality appraisal tools comparison sports science systematic review agreement
      methodological quality
  Q5: COSMIN outcome measure quality assessment sports science measurement reliability
      validity systematic review

Coverage-gap note: Queries do not specifically cover QUADAS-2 (diagnostic test accuracy
  studies in sport screening), or methodological guidance for qualitative evidence
  synthesis appraisal tools (CASP qualitative — relevant if the SLR includes mixed
  methods sport studies).
```

---

### ANGLE 3: Domain-specific challenges of systematic reviews in sports science
```
ANGLE 3: Domain-specific challenges of systematic reviews in sports science
===========
Vocabulary tradition: Sports science / Kinesiology domain
Angle type: Confirmatory
Predicted research character: consensus — expect editorial and methodological commentary
  in sports science journals, position papers from ACSM/BASES/NSCA, and some
  empirical papers documenting heterogeneity and outcome diversity; lower proportion
  of controlled study designs here (this is methodological commentary territory)
What to extract: sport-specific challenges for conducting SLRs (heterogeneity of
  training interventions, outcome measure non-standardization, athlete population
  specificity, competitive level variation, sex-disaggregated reporting gaps),
  proposed solutions from sports science methodologists, current best practices
  documented in sports science SLR guidelines, editorial commentary on evidence
  quality in the field

Source type (academic): PubMed; Semantic Scholar
  (targeting sports science journals: Sports Medicine, Journal of Strength and
  Conditioning Research, IJSPP, BJSM, EJSS)
Source type (practitioner): ACSM Evidence Statements; BASES position papers;
  NSCA systematic review guidelines

Queries:
  Q1: systematic review challenges heterogeneity sports science exercise interventions
      outcome measures variability
  Q2: limitations systematic review methodology sports performance athletic population
      evidence quality
  Q3: meta-analysis difficulties exercise science training studies variability population
      specificity
  Q4: best practices systematic literature review kinesiology sport science evidence-based
      methodology guidelines

Coverage-gap note: Queries do not cover sex-disaggregated data reporting requirements
  in sports science SLRs (emerging mandatory reporting standard), or Paralympic /
  adaptive sports research as an underrepresented sub-domain in SLR methodology.
```

---

### ANGLE 4: Scoping reviews and bibliometric mapping of the sports science literature
```
ANGLE 4: Scoping reviews and bibliometric mapping of the sports science literature
===========
Vocabulary tradition: Bibliometrics / Scientometrics
Angle type: Confirmatory
Predicted research character: empirical — expect published bibliometric studies
  mapping sports science sub-domains, scoping review methodology papers describing
  JBI framework application, and software-specific tutorial/methods papers
What to extract: scoping review frameworks applied in sports science (JBI, PRISMA-ScR),
  bibliometric analysis methods used for sports science mapping (co-citation, keyword
  co-occurrence), software tools (VOSviewer, Biblioshiny/bibliometrix R package,
  CiteSpace), examples of research mapping studies in sports science sub-domains,
  when to choose scoping review vs. systematic review in sports science

Source type (academic): Semantic Scholar; Scientometrics; Journal of Informetrics;
  International Journal of Environmental Research and Public Health
Source type (practitioner): GitHub repository for bibliometrix R package (documentation
  and vignettes); VOSviewer software manual

Queries:
  Q1: scoping review framework sports science exercise literature mapping JBI PRISMA-ScR
  Q2: bibliometric analysis sports science kinesiology VOSviewer CiteSpace co-citation
      keyword mapping
  Q3: research mapping systematic review methodology sport exercise science Joanna Briggs
      Institute scoping protocol
  Q4: keyword co-occurrence analysis bibliometric sports medicine exercise science
      research trends visualization

Coverage-gap note: Queries do not cover umbrella reviews (reviews of systematic reviews)
  as a distinct methodology, or machine-readable literature map formats (EPPI-Mapper,
  SWIFT-Active Screener) that are increasingly used for large-scale sports science
  evidence mapping.
```

---

### ANGLE 5: Meta-analytic statistical methods for heterogeneous sports science outcomes
```
ANGLE 5: Meta-analytic statistical methods for heterogeneous sports science outcomes
===========
Vocabulary tradition: Meta-analytic statistical synthesis
Angle type: Confirmatory
Predicted research character: empirical — expect statistical simulation studies,
  methods comparison papers, and tutorial/applied papers demonstrating technique
  on sports science datasets; moderate practitioner guidance component in
  statistics methodology journals and sports medicine methodological papers
What to extract: approaches to heterogeneity in sports science meta-analysis
  (I² quantification, prediction intervals, subgroup analysis, meta-regression
  on moderators), effect size metrics appropriate for sport performance outcomes
  (standardized mean difference, mean difference with minimal important change
  thresholds, response rates), handling of continuous vs. categorical sport
  outcomes, network meta-analysis applications for comparing training programs,
  dose-response meta-analysis for exercise prescriptions

Source type (academic): PubMed; arXiv stat.ME (statistical methodology preprints);
  British Journal of Sports Medicine (publishes methods papers)
Source type (practitioner): Cochrane Statistical Methods Group handbooks;
  Stata and R meta-analysis package documentation (metafor, meta)

Queries:
  Q1: meta-analysis heterogeneity sports science exercise intervention I-squared
      subgroup analysis prediction interval
  Q2: effect size calculation standardized mean difference athletic performance sport
      meta-analysis Cohen's d
  Q3: meta-regression sports science moderator variables exercise dose-response
      training load
  Q4: network meta-analysis exercise training interventions sports performance
      comparison multiple arms

Coverage-gap note: Queries do not cover individual participant data (IPD) meta-analysis
  for sports science (a more demanding but more informative method), or Bayesian
  meta-analytic approaches which are gaining traction in exercise physiology research.
```

---

### ANGLE 6: Protocol preregistration and reporting standards for sports science SLRs
```
ANGLE 6: Protocol preregistration and reporting standards for sports science SLRs
===========
Vocabulary tradition: Evidence synthesis reporting standards
Angle type: Confirmatory
Predicted research character: consensus — expect normative guidance papers (PRISMA 2020,
  PRISMA-P 2015, EQUATOR Network documentation), compliance studies documenting
  adherence rates in published sports science SLRs, and editorial guidance from
  sports medicine journals on reporting requirements
What to extract: PROSPERO registration requirements and process, PRISMA-P checklist
  components and their application in sports science, compliance rates of published
  sports science SLRs with PRISMA standards (empirical compliance studies),
  barriers to preregistration in sports science research culture, EQUATOR Network
  reporting guidelines relevant to sport and exercise research (CONSORT extension
  for exercise trials, STROBE for observational sport studies)

Source type (academic): Semantic Scholar; PubMed
  (targeting reporting standards journals: Research Synthesis Methods, Systematic
  Reviews, BMJ Open)
Source type (practitioner): PROSPERO database registration guidance; EQUATOR
  Network checklist repository; CONSORT and STROBE extension documentation

Queries:
  Q1: PROSPERO registration systematic review sports science protocol preregistration
      exercise
  Q2: PRISMA reporting guidelines adherence systematic review sports medicine
      compliance audit
  Q3: PRISMA-P protocol reporting standards systematic review exercise sport
      methodology
  Q4: preregistration benefits systematic review sports science bias prevention
      outcome switching

Coverage-gap note: Queries do not cover registered reports as a publication format
  (where the protocol is peer-reviewed before data collection) — an emerging
  open-science mechanism being adopted in sports science journals. The Open Science
  Framework (OSF) as a preregistration platform is also not covered by these queries.
```

---

### ANGLE N1: Evidence that sports science SLR findings fail to replicate or generalize
```
ANGLE N1: Evidence that sports science SLR findings fail to replicate or generalize
===========
Vocabulary tradition: Study quality appraisal / Risk of bias assessment
  (disconfirming variant — null-hypothesis formulation)
Angle type: Null-hypothesis
Predicted research character: empirical — expect meta-studies of SLR quality,
  replication studies, studies documenting inflated effect sizes in sports science
  due to publication bias, scope-condition analyses showing non-generalizability
  of SLR conclusions to different populations
What to extract: documented scope conditions where sports science SLR conclusions
  do not generalize (athlete vs. non-athlete populations, training level, sport
  type specificity), cases where meta-analysis pooling was inappropriate due to
  clinical/statistical heterogeneity, evidence that published sports science SLRs
  overestimate effect sizes due to publication bias or small-study effects,
  negative results about the reliability of sports science evidence synthesis,
  failure of SLR conclusions to withstand follow-up empirical study

Source type (academic): PubMed; Semantic Scholar
Source type (practitioner): Deprioritized — replication failure / generalizability
  literature is primarily academic; ACSM position-stand updates where prior
  conclusions were revised may serve as practitioner-facing evidence of
  non-generalizability

Queries:
  Q1: systematic review replication failure sports science exercise findings
      generalizability limitations scope
  Q2: meta-analysis results inconsistency sports performance population specificity
      athlete non-athlete
  Q3: sports science systematic review publication bias inflated effects small-study
      effect size overestimation
  Q4: exercise intervention effect size replication failure scope conditions
      training level moderation negative result

Coverage-gap note: This angle targets failure of findings to generalize — a different
  failure mode from failure of the SLR method itself (which is the adversarial angle
  D1). Angle N1 is asking "do the conclusions hold?" — D1 asks "was the method
  credibly executed?". These are genuinely non-overlapping failure modes that the
  Boolean-connective test confirms as distinct.
```

---

### ANGLE D1: [ADVERSARIAL-FLAGGED] Methodological quality failures in published sports science SLRs
```
ANGLE D1: Methodological quality failures in published sports science SLRs
===========
Vocabulary tradition: Research quality / Replication crisis
Angle type: Adversarial-FLAGGED
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior
confirmatory results]

Generation note: Generated from Research quality / Replication crisis vocabulary.
Excluding these terms from the generation prompt: SPORTDiscus, grey literature,
MESH terms, pearl growing, PRISMA, PROSPERO, EQUATOR, GRADE, PEDro, COSMIN,
heterogeneity, I-squared, forest plots, SPORTDiscus, kinesiology, ACSM — all
terms from prior confirmatory slots.

Predicted research character: empirical — expect audit studies quantifying
  methodological quality of published SLRs in sports science, studies documenting
  prevalence of protocol deviations, and empirical surveys of QRP rates in
  exercise science research
What to extract: studies auditing methodological compliance of published SLRs in
  sports science, prevalence of inadequate search strategies in published sports
  medicine systematic reviews, outcome reporting bias rates (outcomes registered
  vs. reported), failure to assess or account for publication bias, inappropriate
  pooling of clinically heterogeneous studies, selective inclusion criteria
  introduced post-search, author team conflicts of interest in sports supplement
  systematic reviews

Source type (academic): PubMed; Semantic Scholar
  (targeting: Research Synthesis Methods journal; Sport, Exercise and Performance
  Psychology; Accountability in Research)
Source type (practitioner): BJSM editorial series on evidence quality; Research
  integrity commentary in Sports Medicine

Queries:
  Q1: methodological quality audit sports science systematic reviews published
      evidence base failures
  Q2: publication bias outcome reporting bias sports science research QRPs
      questionable practices exercise
  Q3: search strategy inadequacy sports medicine systematic review comprehensiveness
      database gaps failure
  Q4: small study effects p-hacking exercise science intervention research
      literature distortion inflated estimates

Coverage-gap note: Does not cover editorial/retraction rates specific to sports
  science SLRs, or cases where financial conflicts of interest (sports supplement
  industry funding) distort SLR conclusions — a documented concern in this domain.
```

---

### ANGLE C1: Realist synthesis and theory-driven approaches for complex sports interventions
```
ANGLE C1: Realist synthesis and theory-driven approaches for complex sports interventions
===========
Vocabulary tradition: Theory-driven evaluation / Realist synthesis
  (Pawson & Tilley tradition — NOT in intake brief)
Angle type: Cross-disciplinary
Predicted research character: gap — the realist synthesis literature in sports
  science-specific contexts is expected to be sparse; adjacent physical activity
  promotion and health behaviour literature is more likely to contain applications;
  the angle's purpose is to surface this literature and document scope of existing
  application to sports science contexts
What to extract: realist synthesis protocols applied to sport, exercise, or physical
  activity interventions, logic model approaches to complex sports program evaluation,
  framework synthesis methods for heterogeneous evidence in sports contexts, meta-
  narrative reviews of sport/exercise evidence traditions, CMO (context-mechanism-
  outcome) configurations from exercise/sport program evaluations, RAMESES standards
  application to sport interventions, arguments for why complex sports interventions
  require theory-driven rather than aggregative synthesis

Source type (academic): Semantic Scholar; BMC Medical Research Methodology;
  Implementation Science (where realist synthesis methods papers are published)
Source type (practitioner): RAMESES project documentation (realist synthesis
  reporting standards); NIHR evaluation methodology programme reports

Queries:
  Q1: realist synthesis complex interventions sport exercise physical activity
      program evaluation context mechanism outcome
  Q2: logic model framework synthesis sport physical activity heterogeneous
      evidence methodology
  Q3: meta-narrative review physical activity sport exercise research traditions
      paradigm Pawson
  Q4: theory-driven evaluation sports programme intervention mechanism context
      realist evaluation CMO

Coverage-gap note: These queries primarily access the physical activity health
  promotion literature, which is adjacent to but not identical with sports
  performance/elite sport science. Application to high-performance sport specifically
  (coaching methodology, training periodization) may require additional targeted
  queries not included here.
```

---

## SECTION 5 — QUALITY GATE SUMMARY

```
GATE SUMMARY
============

Gate 1 — Completeness:

  Null-hypothesis angle present:
    PASS — N1 is explicitly framed as disconfirming; query strings contain
    "replication failure," "negative result," "publication bias inflated effects,"
    "scope conditions," "non-generalizability" — unambiguous disconfirming vocabulary.
    N1 cannot be satisfied by hedging language in a confirmatory angle — confirmed
    structurally separate angle record exists.

  Adversarial angle present:
    PASS — D1 carries the label [ADVERSARIAL-FLAGGED: dispatch in separate research
    context with no prior confirmatory results]. Dispatch note present. Generation
    note explicitly lists excluded vocabulary from all prior confirmatory slots.

  Cross-disciplinary angle present:
    PASS — C1 targets "Theory-driven evaluation / Realist synthesis" — this tradition
    is NOT in the intake brief's candidate vocabulary traditions list (which covers
    LIS, clinical methodology, sports science, bibliometrics, and research quality
    traditions). Cross-disciplinary condition confirmed.

  Source-type coverage:
    PASS — Domain is academic-heavy; practitioner sources are OPTIONAL but recommended.
    All 9 angles include both academic and practitioner source specifications. No
    angle uses vague language ("relevant sources"); all name specific platforms.

  Vocabulary-tradition map populated:
    PASS — Coverage map contains 7 distinct tradition names with representative
    terms listed. Cross-disciplinary slot populated. All traditions have planned
    angle slots. ≥2 traditions confirmed (7 present).

Gate 1 overall: PASS

---

Gate 2 — Distinctness:

  Boolean-connective test applied to same-tradition pairs and near-duplicate candidates:

  A1 vs A6 (both LIS tradition — most proximate pair):
    A1 distinctive terms: "SPORTDiscus," "grey literature," "MESH terms," "search
    filter," "database selection," "pearl growing"
    A6 distinctive terms: "PROSPERO," "PRISMA-P," "PRISMA reporting," "EQUATOR,"
    "preregistration," "protocol"
    Test: Would OR-combining A1Q1 ("systematic review search strategy sports science
    databases") with A6Q1 ("PROSPERO registration systematic review sports science")
    retrieve the same documents? NO — search strategy design papers and reporting
    standard compliance papers are indexed in distinct literatures with different
    citation networks. The two angles address WHAT to search / WHERE (A1) vs. HOW
    to register and report (A6).
    Result: PASS — angles are genuinely distinct despite both being LIS tradition.
    Tradition labels have been differentiated: A1 = "Information retrieval / Database
    search methodology"; A6 = "Evidence synthesis reporting standards." Both labels
    are now unique across the angle list.

  A2 vs A5 (both clinical research methodology — most proximate pair):
    A2 distinctive terms: "risk of bias," "PEDro," "GRADE," "CASP," "COSMIN,"
    "critical appraisal," "RoB 2.0"
    A5 distinctive terms: "heterogeneity," "I-squared," "forest plots," "meta-
    regression," "effect sizes," "Cohen's d," "network meta-analysis"
    Test: Would OR-combining produce same documents? NO — quality appraisal
    methodology papers and meta-analytic statistics papers are distinct literatures.
    Result: PASS. Tradition labels differentiated: A2 = "Study quality appraisal /
    Risk of bias assessment"; A5 = "Meta-analytic statistical synthesis." Unique.

  N1 vs A2 (both in RoB/quality space, surface-level overlap):
    N1 purpose: What OUTCOMES of sports science SLRs fail to generalize or replicate
    A2 purpose: TOOLS for appraising study quality within an SLR
    Test: N1 queries include "replication failure," "generalizability," "publication
    bias inflated effects" — these do not retrieve the same literature as "PEDro
    scale," "critical appraisal tools," "GRADE certainty." PASS.

  D1 vs N1 (both critical/failure-mode oriented):
    D1 purpose: Methodological PROCESS failures in how SLRs were conducted
    N1 purpose: OUTCOME failures — findings don't replicate or generalize
    D1 distinctive terms: "audit," "QRPs," "p-hacking," "outcome reporting bias,"
    "HARKing," "inadequate search strategy," "financial conflicts of interest"
    N1 distinctive terms: "replication failure," "generalizability," "scope conditions,"
    "population specificity," "inflated effects"
    Test: These address genuinely distinct failure modes. A SLR can be methodologically
    rigorous and still produce findings that don't generalize (N1 scenario). A SLR can
    have QRPs and still happen to find a generalizable result (D1 scenario). PASS.

  All other pairs: tradition labels are distinct (T1a, T2a, T3, T4, T2b, T1b, N, D, C).
  No further pairs require formal Boolean-connective test.

  Vocabulary-tradition distinctness check:
    Every angle has a unique vocabulary-tradition label in its record. No two
    non-null-hypothesis, non-adversarial angles share a label.
    PASS.

Gate 2 overall: PASS

---

Gate 3 — Launchability:

  Every angle checked for concrete query strings (no TBD), named source platforms,
  and pasteable query strings.

  A1: 5 queries, all concrete. Sources: Semantic Scholar + PubMed/SPORTDiscus. PASS.
  A2: 5 queries, all concrete. Sources: PubMed + PEDro/Cochrane Handbook. PASS.
  A3: 4 queries, all concrete. Sources: PubMed+Semantic Scholar + ACSM/BASES. PASS.
  A4: 4 queries, all concrete. Sources: Semantic Scholar+Scientometrics + GitHub/VOSviewer. PASS.
  A5: 4 queries, all concrete. Sources: PubMed+arXiv stat.ME + Cochrane/R packages. PASS.
  A6: 4 queries, all concrete. Sources: Semantic Scholar+PubMed + PROSPERO/EQUATOR. PASS.
  N1: 4 queries, all concrete. Sources: PubMed+Semantic Scholar + ACSM (deprioritized). PASS.
  D1: 4 queries, all concrete. Sources: PubMed+Semantic Scholar + BJSM editorials. PASS.
  C1: 4 queries, all concrete. Sources: Semantic Scholar+BMC Med Res Meth + RAMESES. PASS.

  No placeholder vocabulary ("TBD," "[fill in]") in any query string. PASS.
  All source type fields name specific platforms. PASS.

Gate 3 overall: PASS

---

Gate 4 — Scoring prohibition:

  No angles contain phrases like "this angle is most useful," "this is the strongest
  angle," "most relevant," "most likely to yield results," or equivalent subjective
  quality assessments. Checked all 9 angle records.

  Structural criteria only used for all decisions (vocabulary-tradition coverage,
  source-type coverage, null-hypothesis presence, Boolean-connective distinctness).

  No LLM self-evaluation ranking applied during generation or gate running.

Gate 4 overall: PASS

---

Overall verdict: PASS — angle list is dispatch-ready.

---

Flags requiring human judgment:

1. VOCABULARY SELF-REPORT FLAG — Source B was unavailable. All 7 vocabulary traditions
   were enumerated by LLM only. External validation via survey-paper probe (e.g.,
   search: "systematic review methods sports science" survey 2022 2023 2024 and checking
   title vocabulary against the traditions listed here) is recommended before accepting
   the tradition list as complete. This is a structural constraint of the deployment
   context, not a per-run failure. Expected coverage: MODERATE (per CLAUDE.md
   §Deployment constraints).

2. Source B status: UNAVAILABLE — MODERATE. Severity assessment: MODERATE (5 distinct
   vocabulary traditions confirmed from Source A+C alone). Angle generation proceeded
   per intake.md Step 5 fallback protocol.

3. C1 (Cross-disciplinary / Realist synthesis): Predicted research character is GAP.
   Human judgment required on whether to include C1 in the dispatch batch or to first
   run a probe search to confirm the angle is not completely empty. If the gap is
   confirmed, the angle still has value for documenting absence of this literature in
   sports science SLR methodology.

4. Open science / transparency tradition: Flagged as PARTIAL coverage. A6 covers
   protocol preregistration; data sharing mandates, open-access publishing, and
   reproducibility infrastructure are not covered by any angle. Human scope decision
   required: add a 10th angle (T8: Open science / FAIR data) or accept the gap.

5. Domain-scope condition from CLAUDE.md §Deployment constraints (INT-10 FM4): Systematic
   review methodology is a well-represented topic in LLM training data; cross-tradition
   conditioning on this topic may produce NEAR-ZERO DIFFERENTIAL compared to what a
   frontier model would enumerate without the kit. This condition applies here — the kit's
   Q1 coverage differential should not be assumed to be HIGH. The primary kit value for
   this run is Q5 (actionability / precision of angle formulation) and Q3 (query string
   precision), not Q1 (breadth of coverage). Human evaluator should score this accordingly.
```

---

## SECTION 6 — SELF-CHECK (Required per CLAUDE.md Rule 6)

What is missing, incomplete, or questionable in this output:

**Named gap 1 — Open science tradition not covered.**
The intake brief flagged T8 (Open science / FAIR data / transparency) as a partial gap.
A6 covers protocol preregistration only. Data sharing mandates, open-access infrastructure,
registered reports as a publication format, and replication infrastructure in sports science
are not covered by any angle. This is a scope acceptance, not an omission by oversight.
Next step if full coverage is required: add Angle A7 targeting "Open science / research
transparency" tradition.

**Named gap 2 — Qualitative synthesis methods not represented.**
The angle list covers quantitative synthesis (meta-analysis, A5), scoping reviews (A4),
and realist synthesis (C1), but does not address qualitative evidence synthesis methods
(meta-ethnography, thematic synthesis, framework synthesis of qualitative evidence) as they
apply to sports science. Sports science has a growing qualitative research base (athletes'
lived experience, coaching perspectives) where qualitative SLR methods are increasingly
relevant. Scope accepted for this run.

**Named gap 3 — Automated/AI-assisted SLR tools not covered.**
Machine-learning-assisted title/abstract screening (Rayyan, EPPI-Reviewer AI, ASReview),
NLP-based evidence extraction, and automated risk-of-bias assessment are a growing methods
area for SLRs in sports science. None of the 9 angles directly targets this sub-domain.
The A1 coverage-gap note flags this as missing. Human scope decision required.

**Named gap 4 — Vocabulary-tradition audit still recommended.**
Source B was unavailable. The 7 traditions enumerated may not include discipline-specific
vocabulary that only surfaces in survey-paper titles (e.g., specialized sports medicine
review series, national sports science body guidance documents). The VOCABULARY SELF-REPORT
FLAG applies throughout.

**Questionable item — C1 predicted research character.**
Predicting "gap" for the realist synthesis angle carries meaningful uncertainty.
Physical activity promotion and health behaviour intervention literature does contain
realist synthesis applications. The "gap" prediction applies specifically to high-performance
sports science and competitive sport SLRs — the broader exercise/physical activity domain
may have more coverage than this prediction suggests. Researcher dispatching C1 should
expect 0-8 results, not zero results.

**Scope accepted statements:**
- Open science tradition (T8): Scope accepted — not covered because partial coverage via
  A6 was judged sufficient for this run; full coverage requires a 10th angle with user
  authorization.
- Qualitative synthesis methods: Scope accepted — not covered because the intake prompt
  did not signal qualitative evidence synthesis specifically; user can add this angle.
- AI-assisted SLR tools: Scope accepted — emerging sub-domain; requires Source B pass
  to identify the correct vocabulary for this rapidly evolving area.

---

## SUMMARY TABLE

| Angle | Tradition | Type | Character | Academic source | Practitioner source |
|-------|-----------|------|-----------|-----------------|---------------------|
| A1 | Information retrieval / DB search methodology | Confirmatory | consensus | Semantic Scholar | PubMed + SPORTDiscus docs |
| A2 | Study quality appraisal / RoB assessment | Confirmatory | empirical | PubMed | PEDro + Cochrane Handbook |
| A3 | Sports science / Kinesiology domain | Confirmatory | consensus | PubMed + Semantic Scholar | ACSM + BASES |
| A4 | Bibliometrics / Scientometrics | Confirmatory | empirical | Semantic Scholar + Scientometrics | GitHub (bibliometrix) |
| A5 | Meta-analytic statistical synthesis | Confirmatory | empirical | PubMed + arXiv stat.ME | Cochrane Stats Group |
| A6 | Evidence synthesis reporting standards | Confirmatory | consensus | Semantic Scholar + PubMed | PROSPERO + EQUATOR |
| N1 | Study quality appraisal — disconfirming | Null-hypothesis | empirical | PubMed + Semantic Scholar | ACSM (deprioritized) |
| D1 | Research quality / Replication crisis | Adversarial-FLAGGED | empirical | PubMed + Semantic Scholar | BJSM editorials |
| C1 | Theory-driven evaluation / Realist synthesis | Cross-disciplinary | gap | Semantic Scholar + BMC Med Res Meth | RAMESES project |

Total angles: 9. All gates: PASS. Overall verdict: PASS — dispatch-ready.
