# Angle-Gen-Kit Output — INT-11 / S12 / Cond-B
**Topic:** Use of altitude tents for sea-level endurance athletes
**Run context:** Subagent — Source B (web search / survey-paper probe) UNAVAILABLE
**Model:** claude-sonnet-4-6

---

## PRE-EXECUTION CONSTRAINT NOTICE

**Source B status:** UNAVAILABLE — subagent context without web access.
**Severity assessment:** MODERATE — Source A + Source C together identified ≥4 distinct vocabulary traditions. Proceeding per intake.md Step 5 fallback protocol.
**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only. External validation via survey-paper probe is recommended before accepting the tradition check as complete.

**Domain-conditioning note (INT-10 FM4):** Altitude training / sports physiology is a mature, well-represented domain in LLM training data (decades of peer-reviewed research, multiple Cochrane reviews, widely cited systematic reviews). Coverage-gap conditioning differential is expected to be MODERATE, not zero — the domain is well-covered but less saturated in LLM training than major ML/AI subfields. The primary kit value on this topic shifts to Q5 (actionability of angle formulation), Q3 (precision of query strings), and the structural coverage requirements (null-hypothesis, adversarial structural separation, cross-disciplinary slot).

---

## PART 1 — INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: The physiological, performance, and practical effects of altitude tent use
(simulated normobaric hypoxia) in athletes who train and compete at sea level.

Anchor vocabulary: "altitude tents" (sports science / applied training tradition),
"sea-level endurance athletes" (exercise physiology / sports performance tradition)

Candidate vocabulary traditions:
  1. Exercise physiology — hemoglobin mass, erythropoietin (EPO), erythropoiesis,
     hematocrit, VO2max, maximal oxygen uptake, cardiac output, blood volume,
     oxygen-carrying capacity, total hemoglobin mass (tHbmass)

  2. Sports science / training methodology — live-high train-low (LHTL), altitude
     training camps, periodization, training load, competition preparation,
     normobaric intermittent hypoxia (IHT), altitude simulation protocols,
     performance testing, taper phase

  3. Molecular / cellular hypoxia physiology — HIF-1alpha (hypoxia-inducible factor),
     HIF pathway, erythropoietin gene expression, VEGF, angiogenesis, mitochondrial
     biogenesis, reactive oxygen species (ROS), oxidative stress response,
     EPAS1 gene

  4. Environmental / altitude physiology — acclimatization, altitude adaptation,
     acute mountain sickness, hypoxic ventilatory response (HVR), ventilatory
     acclimatization, altitude dose-response, normobaric vs hypobaric hypoxia,
     partial pressure of oxygen (PO2), FiO2

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot
  enumerate traditions it has not encountered. Vocabulary-discovery pass
  (pearl-growing from a known anchor paper) is recommended before accepting
  the angle list as covering all traditions.

Question type: EXPLORATORY
  (no explicit comparison or intervention-outcome structure in the prompt;
  "I want to research" = broad territory survey, not a specific test)
  Note: the topic has an implicit intervention-outcome structure (altitude tents →
  performance), but the user has not named a comparator or specific outcome;
  treating as EXPLORATORY preserves breadth.

Scope markers: Population is sea-level endurance athletes (not pre-acclimatized
  athletes, not altitude-native populations). Intervention is altitude tents
  specifically (simulated altitude, normobaric hypoxia) — not natural altitude
  training camps, not hypobaric chambers, not pharmacological EPO.
  Inferred scope: competitive endurance sport (running, cycling, triathlon,
  swimming) at trained/elite level.

Known exclusions: None explicitly stated by user.

Domain maturity estimate: academic-heavy
  Basis: anchor vocabulary is academic ("altitude tents" is the precise
  instrument term); "sea-level endurance athletes" is a standard research
  population descriptor; the area has substantial PubMed/exercise physiology
  literature including Cochrane reviews and BJSM meta-analyses; no tools or
  commercial products were mentioned in the prompt.

Survey paper status: Source B UNAVAILABLE — survey-paper probe not run.
  Recommendation: before finalizing the angle list, run:
  "altitude tent intermittent hypoxia endurance athletes systematic review 2022 2023 2024"
  on PubMed or Semantic Scholar to harvest vocabulary from review title terms.

Source B status: UNAVAILABLE — MODERATE (Source A+C produced ≥4 distinct traditions)

Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):
  Target tradition: Sleep medicine / sleep science
  Selection basis: Same real-world problem from a different disciplinary perspective —
  altitude tents are worn during sleep; the sleep medicine literature addresses
  how hypoxic exposure during sleep disrupts sleep architecture, produces periodic
  breathing, and impairs sleep quality. This literature is structurally separate
  from the sports science tradition and would not appear in standard exercise
  physiology searches. The sleep-performance recovery chain creates genuine
  cross-tradition value.
```

**Intake gate check:**
- Topic field populated: YES
- Candidate vocabulary traditions ≥2: YES (4 traditions)
- Question type classified: YES (EXPLORATORY)
- Cross-disciplinary tradition pre-committed: YES (Sleep medicine / sleep science)

**Proceed to angle-generation.md: ALL GATE CONDITIONS MET.**

---

## PART 2 — COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: Exercise physiology
  Representative terms: hemoglobin mass, EPO, erythropoiesis, hematocrit,
    VO2max, oxygen-carrying capacity, tHbmass, blood volume
  Planned angle slots: A1 (Confirmatory), A6 (Confirmatory — individual variability)
  Gap flag: NO — 2 slots assigned

Tradition 2: Sports science / training methodology
  Representative terms: live-high train-low (LHTL), altitude training protocols,
    periodization, performance testing, simulated altitude, normobaric
    intermittent hypoxia (IHT)
  Planned angle slots: A2 (Confirmatory — performance outcomes), A4 (Confirmatory — dose-response)
  Gap flag: NO — 2 slots assigned

Tradition 3: Molecular / cellular hypoxia physiology
  Representative terms: HIF-1alpha, HIF pathway, EPO gene expression, VEGF,
    mitochondrial biogenesis, EPAS1, ROS
  Planned angle slots: A3 (Confirmatory — molecular mechanisms)
  Gap flag: NO — 1 slot assigned

Tradition 4: Environmental / altitude physiology
  Representative terms: normobaric vs hypobaric hypoxia, acclimatization,
    HVR, FiO2, PO2, altitude dose-response
  Planned angle slots: A5 (Confirmatory — normobaric vs hypobaric equivalence)
  Gap flag: NO — 1 slot assigned

Traditions NOT yet represented in the planned list:
  All 4 traditions from intake brief have at least one angle slot.

Cross-disciplinary slot (required):
  Target tradition: Sleep medicine / sleep science
    (NOT in intake brief — confirmed by checking: none of the 4 intake traditions
    covers sleep architecture, polysomnography, or sleep disorder vocabulary)
  Basis for selection: Altitude tents are used during sleep; the sleep science
    literature on hypoxia-induced sleep fragmentation, periodic breathing,
    and sleep efficiency is produced by a different author community using
    different journals (Sleep, JCSM, Journal of Sleep Research) than sports
    science. Cross-disciplinary heuristic applied: same real-world problem
    from a different disciplinary perspective.
```

**Coverage map gate:** ≥2 vocabulary traditions with planned slots — CLEARED.

---

## PART 3 — TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Exercise physiology): Erythropoietic adaptations
Slot A2 (Confirmatory — Sports science / training methodology): LHTL performance outcomes
Slot A3 (Confirmatory — Molecular / cellular hypoxia physiology): HIF-1alpha and molecular mechanisms
Slot A4 (Confirmatory — Sports science / training methodology): Dose-response parameters
Slot A5 (Confirmatory — Environmental / altitude physiology): Normobaric vs hypobaric equivalence
Slot A6 (Confirmatory — Exercise physiology): Individual variability and responder phenotypes
Slot N1 (Null-hypothesis): Evidence that altitude tents fail to produce meaningful gains
Slot D1 (Adversarial): Starting vocabulary — clinical/occupational medicine, NOT FROM:
  (hemoglobin, EPO, LHTL, VO2max, HIF-1alpha, acclimatization, performance outcomes)
Slot C1 (Cross-disciplinary — Sleep science): Sleep architecture and hypoxia-induced disruption

Total: 9 angles (within 5–12 standard range; justification for upper range:
  4 distinct vocabulary traditions from intake brief with 2 each warranting
  multiple angles given breadth of the domain)
```

---

## PART 4 — ANGLE LIST

---

### ANGLE 1: Erythropoietic adaptations to altitude tent use
```
ANGLE 1: Erythropoietic adaptations to altitude tent use
===========
Vocabulary tradition: Exercise physiology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Magnitude of hemoglobin mass change (tHbmass g/dL or g), EPO
  response timecourse, hematocrit and blood volume changes, duration of
  adaptation persistence after tent discontinuation, measurement methodology
  (carbon monoxide rebreathing method), effect sizes with confidence intervals

Source type (academic): PubMed / Semantic Scholar
  (exercise physiology literature is indexed in PubMed/MEDLINE; arXiv is not the
  primary venue for this field)
Source type (practitioner): National sports institute technical reports (e.g., AIS,
  English Institute of Sport, USOC); Journal of Sports Science technical notes

Queries:
  Q1: altitude tent hemoglobin mass endurance athletes controlled trial
  Q2: simulated altitude normobaric hypoxia erythropoietin EPO response trained athletes
  Q3: live high train low tHbmass total hemoglobin mass measurement carbon monoxide
  Q4: intermittent hypoxia sleep altitude tent erythropoiesis sea-level athletes

Coverage-gap note: These queries focus on blood oxygen-carrying capacity outcomes.
  They will not capture muscle-level oxygen utilization adaptations (mitochondrial
  density, capillarization) — those are addressed in Angle 3.
```

---

### ANGLE 2: LHTL protocols and endurance performance outcomes
```
ANGLE 2: LHTL protocols and endurance performance outcomes
===========
Vocabulary tradition: Sports science / training methodology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Performance measures used (VO2max, time trial, running economy,
  lactate threshold, race result), magnitude of improvement, duration and level
  of altitude exposure required, protocol comparison (hours/night, weeks,
  altitude level), athlete population characteristics (trained vs elite),
  time-to-peak and decay of performance benefit

Source type (academic): PubMed / Semantic Scholar
Source type (practitioner): Coaching science journals (e.g., International Journal
  of Sports Physiology and Performance); sports federation technical bulletins;
  altitude tent manufacturer white papers (flag as commercial source)

Queries:
  Q1: live high train low sea-level performance endurance sport controlled trial
  Q2: altitude tent VO2max performance improvement endurance athlete meta-analysis
  Q3: normobaric hypoxia tent sleep 3000m endurance performance running economy cycling
  Q4: LHTL simulated altitude protocol weeks outcome endurance competition

Coverage-gap note: These queries focus on performance outcomes; they will not
  capture the physiological mechanisms behind the gains (covered in Angle 1 and 3)
  or adverse effects (covered in Angle D1).
```

---

### ANGLE 3: HIF-1alpha pathway and molecular adaptations from normobaric hypoxia
```
ANGLE 3: HIF-1alpha pathway and molecular adaptations from normobaric hypoxia
===========
Vocabulary tradition: Molecular / cellular hypoxia physiology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: HIF-1alpha stabilization thresholds under normobaric hypoxia,
  downstream gene expression targets (EPO, VEGF, GLUT-1), mitochondrial
  biogenesis markers, muscle angiogenesis data, comparison between normobaric
  and hypobaric hypoxia at molecular level, evidence for or against muscle-level
  adaptation as distinct from erythropoietic adaptation

Source type (academic): PubMed (molecular biology search terms will retrieve
  molecular biology journals: J Physiol, Am J Physiol, Acta Physiol)
Source type (practitioner): Deprioritized — molecular mechanism literature is
  almost exclusively academic; practitioner sources do not produce HIF pathway data

Queries:
  Q1: HIF-1alpha hypoxia-inducible factor normobaric hypoxia intermittent exposure
      molecular adaptation endurance athletes
  Q2: VEGF angiogenesis mitochondrial biogenesis simulated altitude sport exercise
  Q3: normobaric hypoxia HIF pathway EPO gene expression trained muscle biopsy

Coverage-gap note: These queries target the HIF signaling pathway specifically.
  They will not capture redox/oxidative stress pathways (ROS, antioxidant response)
  that are also activated by hypoxia — a separate sub-angle if needed.
```

---

### ANGLE 4: Dose-response — altitude level, nightly exposure duration, and protocol length
```
ANGLE 4: Dose-response — altitude level, nightly exposure duration, and protocol length
===========
Vocabulary tradition: Sports science / training methodology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Minimum effective altitude (meters equivalent or FiO2 threshold
  for erythropoietic response), optimal nightly exposure hours, minimum weeks
  for measurable adaptation, dose-response curves for hemoglobin mass, diminishing
  returns data, comparison of acute vs chronic exposure protocols, any
  evidence of ceiling effects

Source type (academic): PubMed / Semantic Scholar
Source type (practitioner): National anti-doping organization technical reports;
  sports science institute guidelines on altitude exposure protocols

Queries:
  Q1: altitude tent optimal altitude level dose response hemoglobin endurance training
  Q2: minimum effective hypoxia threshold erythropoietic response FiO2 simulated altitude
  Q3: sleeping altitude hours per night weeks protocol hemoglobin mass endurance athlete
  Q4: dose response normobaric hypoxia duration exposure adaptation sport

Coverage-gap note: Dose-response for blood outcomes is well-studied; dose-response
  for molecular adaptations (HIF pathway activation threshold) is less well-covered
  by these queries — Angle 3 addresses mechanisms, this angle addresses the
  quantitative delivery parameters.
  Boolean-connective note: This angle shares some vocabulary with Angle 1
  (both involve hemoglobin measurement). The distinction is preserved: Angle 1
  asks "what happens" (biology of erythropoiesis); Angle 4 asks "how much and
  how long" (delivery parameters). Papers measuring hemoglobin at a single
  protocol will mostly match Angle 1; papers systematically varying dose
  parameters will mostly match Angle 4. Not synonymous on the Boolean-connective test.
```

---

### ANGLE 5: Normobaric vs hypobaric hypoxia — are tents physiologically equivalent to altitude?
```
ANGLE 5: Normobaric vs hypobaric hypoxia — physiological equivalence question
===========
Vocabulary tradition: Environmental / altitude physiology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Direct comparisons of normobaric vs hypobaric hypoxia effects
  on performance and blood markers, proposed mechanisms of difference
  (dehydration, respiratory alkalosis differences, barometric pressure effects),
  whether any observed equivalence or non-equivalence is robust across
  protocols and populations, practical implications for interpreting tent research
  vs altitude camp research

Source type (academic): PubMed / Semantic Scholar
Source type (practitioner): WADA position statements; World Athletics altitude
  training guidance documents (grey literature)

Queries:
  Q1: normobaric versus hypobaric hypoxia training adaptation equivalence
      comparison endurance athletes
  Q2: altitude tent versus altitude camp performance hemoglobin blood comparison
      controlled study
  Q3: normobaric hypobaric hypoxia physiological difference dehydration ventilation
      respiratory mechanism sport

Coverage-gap note: These queries focus on the comparison question. They will not
  capture the philosophical/doping-policy implications of this distinction
  (altitude tents are legal; this angle does not engage that debate).
```

---

### ANGLE 6: Individual response variability and responder/non-responder phenotypes
```
ANGLE 6: Individual response variability and responder/non-responder phenotypes
===========
Vocabulary tradition: Exercise physiology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Prevalence of non-responders in controlled trials, proposed
  predictors of EPO/hemoglobin response (iron status, baseline hemoglobin,
  genetics), genetic polymorphisms associated with hypoxic response (EPAS1, VHL,
  PHD2), practical screening criteria, within-individual variability across
  repeated altitude exposures

Source type (academic): PubMed / Semantic Scholar (genetics + exercise physiology
  intersection — also check European Journal of Applied Physiology)
Source type (practitioner): Sports science consultant case reports; athlete
  monitoring platforms (Firstbeat, Whoop altitude protocols — grey literature)

Queries:
  Q1: altitude training responder non-responder individual variability endurance athletes
  Q2: EPO response altitude individual differences predictors iron hemoglobin
  Q3: altitude tent response variability genetic polymorphism EPAS1 sport endurance
  Q4: non-responder altitude hypoxia performance hemoglobin prevalence evidence

Coverage-gap note: Genetics queries (Q3) require specialist databases beyond PubMed
  general search — PharmGKB or ClinVar if genetic mechanism depth is needed.
  This angle shares the Exercise physiology tradition label with Angle 1;
  the distinction is preserved: Angle 1 covers population-level mechanisms,
  Angle 6 covers individual-level variability and the responder prediction question.
  These are not synonymous on the Boolean-connective test (different primary
  question; different what-to-extract).
```

---

### ANGLE N1: Evidence that altitude tents fail to produce meaningful performance gains
```
ANGLE N1: Evidence that altitude tents fail to produce meaningful performance gains
===========
Vocabulary tradition: Exercise physiology (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Negative trials (tent use without significant performance or
  hemoglobin change), meta-analyses with small or null pooled effect sizes,
  non-responder rates, scope conditions under which benefits fail to appear
  (protocol too short, altitude too low, training load incompatible), replication
  failures, high heterogeneity findings in meta-analyses suggesting instability,
  effect size estimates with confidence intervals crossing zero

Source type (academic): PubMed / Semantic Scholar
Source type (practitioner): Systematic reviews published by WADA, IOC, or national
  sports medicine bodies that evaluate evidence quality

Queries:
  Q1: altitude tent no effect performance endurance athlete negative result trial
  Q2: live high train low failure no significant difference sea-level performance
  Q3: normobaric hypoxia altitude simulation performance no improvement controlled
  Q4: altitude tent non-responder failure hemoglobin erythropoiesis replication

Coverage-gap note: The disconfirming framing focuses on performance and blood
  outcomes; disconfirming evidence for molecular claims (Angle 3) or sleep
  claims (Angle C1) would require separate null-hypothesis searches in those
  literatures.
```

---

### ANGLE D1: Adverse health effects and clinical risk profile of nocturnal hypoxia
```
ANGLE D1: Adverse health effects and clinical risk profile of nocturnal hypoxia
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior
confirmatory results]

Vocabulary tradition: Clinical / occupational medicine
Angle type: Adversarial
Predicted research character: empirical (clinical safety literature)
What to extract: Documented adverse events in altitude tent users, cardiovascular
  risk signals (arrhythmia, autonomic dysregulation), oxidative stress markers
  (pathological interpretation), overtraining interaction, contraindicated
  populations (cardiovascular history, sleep apnea, anemia), clinical
  safety monitoring recommendations, regulatory or anti-doping body
  risk communications

Generation note: This angle was generated from clinical/occupational medicine
vocabulary, explicitly EXCLUDING the following terms that appear in
confirmatory angles: hemoglobin mass, EPO, erythropoiesis, LHTL,
VO2max, HIF-1alpha, acclimatization, performance outcomes, training
methodology.
Starting vocabulary for adversarial generation: intermittent hypoxia
pathology, cardiovascular autonomic dysregulation, sleep-disordered breathing,
nocturnal hypoxia adverse effects, hypoxic injury, arrhythmia risk, oxidative
damage, contraindication, at-risk population, clinical monitoring protocol.

Source type (academic): PubMed (clinical medicine journals: Chest, JACC, Sleep
  Medicine — NOT sports science journals); occupational medicine literature
Source type (practitioner): WADA technical documents; sports medicine body
  position statements (ACSM, BASEM); athlete health monitoring guidance

Queries:
  Q1: intermittent hypoxia adverse effects cardiovascular autonomic dysfunction
      sleep-disordered breathing clinical risk
  Q2: nocturnal hypoxia arrhythmia cardiac risk athlete altitude simulation safety
  Q3: altitude tent health risk contraindication overtraining oxidative stress
      adverse event monitoring
  Q4: chronic intermittent hypoxia pathological effects endurance athlete clinical
      evidence review

Coverage-gap note: This angle targets health and safety literature from a clinical
  framing. It will not capture the sports science interpretation of oxidative
  stress as an adaptive stimulus (covered in Angle 3) — that is the point of
  adversarial structural separation.
```

---

### ANGLE C1: Sleep architecture and quality under altitude tent hypoxic conditions
```
ANGLE C1: Sleep architecture and quality under altitude tent hypoxic conditions
===========
Vocabulary tradition: Sleep medicine / sleep science
  (CROSS-DISCIPLINARY — this tradition was NOT in the intake brief)
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: Sleep efficiency data from altitude tent users, polysomnography
  findings (sleep stage distribution, arousal index, periodic breathing during
  sleep), comparison of sleep quality at 2500m vs 3000m vs 3500m simulated
  altitude, effect of sleep fragmentation on recovery and training adaptation,
  altitude insomnia mechanisms, any evidence that sleep disruption attenuates
  the performance benefits of altitude tent use (direct interaction evidence)

Source type (academic): PubMed (Sleep, Journal of Clinical Sleep Medicine, JCSM,
  Journal of Sleep Research — NOT sports science journals; different author
  community and vocabulary)
Source type (practitioner): Altitude tent manufacturer sleep quality guidance
  (e.g., Hypoxico, Lowoxygen documentation); sleep coach practitioner reports

Queries:
  Q1: altitude hypoxia sleep architecture fragmentation periodic breathing
      polysomnography endurance athlete
  Q2: normobaric hypoxia tent sleep quality efficiency arousal index nocturnal
  Q3: altitude insomnia simulated hypoxia sleep disruption acclimatization tent
      sea-level athlete
  Q4: sleep disordered breathing altitude training performance recovery interaction

Coverage-gap note: These queries focus on sleep quality effects. The relationship
  between sleep disruption and HIF pathway activation (do disrupted sleep
  patterns alter hypoxic stimulus quality?) is a genuine gap that these
  queries do not directly address.
```

---

## PART 5 — QUALITY GATE DOCUMENTATION

### Gate 1 — Completeness checks

- **Null-hypothesis angle present:**
  PASS — Angle N1 is explicitly framed as the disconfirming search. Query strings
  contain: "no effect," "negative result," "no significant difference," "failure,"
  "no improvement," "replication." These are disconfirming vocabulary terms
  per angle-quality.md Gate 1 criteria.

- **Adversarial angle present:**
  PASS — Angle D1 carries the label `[ADVERSARIAL-FLAGGED: dispatch in separate
  research context with no prior confirmatory results]`. Generation note explicitly
  lists excluded vocabulary from confirmatory angles.

- **Cross-disciplinary angle present:**
  PASS — Angle C1 targets Sleep medicine / sleep science. Checking against
  intake brief: none of the 4 candidate vocabulary traditions (Exercise physiology,
  Sports science/training methodology, Molecular hypoxia physiology, Environmental
  physiology) includes sleep medicine vocabulary. CONFIRMED cross-disciplinary.

- **Source-type coverage:**
  Domain maturity estimated as academic-heavy. Practitioner sources are OPTIONAL
  but appear in: Angle 2 (coaching science journals, altitude tent white papers),
  Angle 4 (sports institute guidelines), Angle 6 (athlete monitoring platforms),
  Angle D1 (WADA documents, sports medicine body position statements), Angle C1
  (altitude tent manufacturer documentation).
  PASS — practitioner sources present across multiple angles.

- **Vocabulary-tradition map populated:**
  PASS — Coverage map (Part 2) lists ≥2 distinct tradition names with all fields
  populated. 4 traditions from intake brief + 1 cross-disciplinary tradition
  = 5 traditions total.

**Gate 1: PASS**

---

### Gate 2 — Distinctness checks

**Boolean-connective test — all angle pairs evaluated:**

| Pair | Most distinctive terms compared | Result |
|------|--------------------------------|--------|
| A1 vs A2 | "hemoglobin mass / EPO" vs "LHTL / performance / training protocol" | PASS — different facets: blood biology vs. protocol outcomes |
| A1 vs A3 | "hemoglobin mass / erythropoiesis" vs "HIF-1alpha / gene expression / biopsy" | PASS — blood outcome vs. molecular mechanism; different journals |
| A1 vs A4 | "hemoglobin mass / what happens" vs "dose / how long / threshold" | BORDERLINE — see note below |
| A1 vs A6 | "population-level EPO response" vs "individual variability / non-responder / predictor" | PASS — population mean vs individual variance question |
| A2 vs A4 | "performance outcomes / VO2max / race" vs "dose parameters / exposure duration / protocol" | PASS — what gains vs how to achieve them |
| A2 vs A5 | "performance outcomes" vs "normobaric vs hypobaric equivalence" | PASS — different primary question; A5 is a meta-methodological question |
| A3 vs A5 | "HIF pathway / molecular" vs "normobaric vs hypobaric physiological equivalence" | PASS — molecular mechanism vs. comparison of delivery modalities |
| A4 vs A5 | "dose parameters" vs "normobaric vs hypobaric" | PASS — how much vs which kind |
| A6 vs N1 | "responder phenotypes / predictors" vs "negative result / null trials" | PASS — individual mechanism vs. aggregate null-evidence |
| N1 vs D1 | "no effect / failure" vs "adverse effects / clinical risk" | PASS — performance null vs. health harm; different outcome domain |
| C1 vs all | "sleep architecture / polysomnography / fragmentation" | PASS — no other angle targets sleep medicine vocabulary |

**A1 vs A4 borderline note:** Angles 1 and 4 both involve hemoglobin mass measurement.
Formal Boolean-connective test: would (A1 query terms) OR (A4 query terms) retrieve
substantially the same documents? A1 queries: "hemoglobin mass," "EPO response,"
"erythropoiesis," "tHbmass." A4 queries: "optimal altitude level," "dose response,"
"FiO2 threshold," "minimum effective," "hours per night," "protocol weeks."
Assessment: papers that systematically vary dose parameters and measure hemoglobin
at each level WOULD be retrieved by both. However, the majority of A1-relevant
papers (mechanistic erythropoiesis studies at a single protocol level) will not
appear in A4 results, and the majority of A4-relevant papers (dose optimization
reviews) are a distinct literature type. The OR corpus overlap is PARTIAL, not
SUBSTANTIAL. The distinction between "what happens" and "how much to deliver" is
a genuine facet split. PASS with note — human reviewer may wish to evaluate
merger at retrieval time if results heavily overlap.

**Vocabulary-tradition distinctness check:**
- A1 and A6 share "Exercise physiology" label. Checking exception: one is confirmatory
  (A1, population-level mechanism), the other is confirmatory but focuses on
  individual variance (A6). These are NOT null-hypothesis or adversarial variants
  of each other. However, they address genuinely different research questions
  (population average vs. individual predictor), use different study designs
  (mechanistic trials vs. cohort/genetics studies), and have different what-to-extract.
  Per angle-quality.md Gate 2: "two non-null-hypothesis, non-adversarial angles
  share a label — FAIL unless facet distinction is explicit."
  ACTION TAKEN: Angle 6 label updated to "Exercise physiology — individual variability
  subfield" to make the facet distinction explicit. The angles are not candidates
  for merger: they would retrieve different papers and require different extraction
  protocols.

- A2 and A4 share "Sports science / training methodology" label. Same analysis:
  A2 extracts performance outcomes; A4 extracts delivery parameters. Different study
  types. Same resolution: Angle 4 label clarified to "Sports science / training
  methodology — dose-response subfield."

**Gate 2: PASS** (two same-tradition pairs resolved by explicit facet labeling;
no mergers required; borderline A1 vs A4 flagged for human judgment at retrieval time)

---

### Gate 3 — Launchability checks

**Checked for all 9 angles:**

- **Has at least one concrete query string:** All 9 angles have Q1 through Q3 or Q4
  as runnable search strings. PASS for all.

- **No placeholder vocabulary:** Scanning all query strings — no "TBD," no "[fill in],"
  no vague markers present. PASS for all.

- **Source type is named:**
  - A1: PubMed / Semantic Scholar + National sports institute reports — PASS
  - A2: PubMed / Semantic Scholar + Coaching science journals — PASS
  - A3: PubMed + deprioritized practitioner (documented reason) — PASS
  - A4: PubMed / Semantic Scholar + Sports institute guidelines — PASS
  - A5: PubMed / Semantic Scholar + WADA/World Athletics documents — PASS
  - A6: PubMed / Semantic Scholar + practitioner monitoring platforms — PASS
  - N1: PubMed / Semantic Scholar + systematic review bodies — PASS
  - D1: PubMed (clinical journals, named) + WADA/ACSM documents — PASS
  - C1: PubMed (sleep science journals, named) + manufacturer documentation — PASS

**Gate 3: PASS — all 9 angles are dispatch-ready**

---

### Gate 4 — Scoring prohibition

- **No LLM self-evaluation ranking:** No angle was described as "most promising,"
  "strongest," "most likely to yield results," or equivalent. No ranking was
  produced. Angles were generated and checked for structural coverage criteria only.
  PASS.

- **No implicit quality assessment:** Checked all 9 angle records — no phrases
  of the form "this angle is likely to be most useful" or "this is the strongest
  angle." Coverage-gap notes are structural observations, not quality rankings.
  PASS.

**Gate 4: PASS**

---

### GATE SUMMARY

```
GATE SUMMARY
============
Gate 1 — Completeness: PASS
  (null-hypothesis present, adversarial labeled, cross-disciplinary confirmed,
  source coverage present, vocabulary-tradition map populated with ≥5 traditions)

Gate 2 — Distinctness: PASS
  (borderline A1 vs A4 flagged for human judgment at retrieval time;
  same-tradition pairs A1/A6 and A2/A4 resolved by explicit facet labeling)

Gate 3 — Launchability: PASS
  (all 9 angles have runnable query strings, no placeholders, named sources)

Gate 4 — Scoring prohibition: PASS
  (no LLM self-evaluation ranking or implicit quality assessment present)

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. A1 vs A4 borderline Boolean-connective test — verify at retrieval whether
     the hemoglobin-measurement papers retrieved by both are duplicates or
     represent genuinely different study types. If >50% overlap: consider merger
     with explicit facet note.
  2. VOCABULARY SELF-REPORT FLAG — all 4 vocabulary traditions from intake brief
     were enumerated by LLM only; Source B (survey-paper probe) not run.
     Before treating this list as complete: run the following on PubMed:
     "altitude tent intermittent hypoxia endurance athletes review 2022 2024"
     and check title terms for vocabulary not yet in the angle list.
  3. Domain-conditioning caveat (INT-10 FM4): altitude training is a well-represented
     sports science domain; coverage-gap conditioning is expected to have
     MODERATE (not zero) differential over unconditioned generation. Kit's
     primary value on this topic is structural coverage requirements and
     query precision, not cross-tradition expansion.
```

---

## PART 6 — ANGLE LIST SUMMARY TABLE

| # | Title | Tradition | Type | Research character | Queries |
|---|-------|-----------|------|--------------------|---------|
| A1 | Erythropoietic adaptations | Exercise physiology | Confirmatory | empirical | 4 |
| A2 | LHTL performance outcomes | Sports science / training methodology | Confirmatory | empirical | 4 |
| A3 | HIF-1alpha molecular adaptations | Molecular / cellular hypoxia physiology | Confirmatory | empirical | 3 |
| A4 | Dose-response parameters | Sports science / training methodology — dose-response | Confirmatory | empirical | 4 |
| A5 | Normobaric vs hypobaric equivalence | Environmental / altitude physiology | Confirmatory | empirical | 3 |
| A6 | Individual variability / responders | Exercise physiology — individual variability | Confirmatory | empirical | 4 |
| N1 | Failure evidence (null-hypothesis) | Exercise physiology (disconfirming) | Null-hypothesis | empirical | 4 |
| D1 | Adverse health effects | Clinical / occupational medicine | Adversarial-FLAGGED | empirical | 4 |
| C1 | Sleep architecture disruption | Sleep medicine / sleep science (CROSS-DISCIPLINARY) | Cross-disciplinary | empirical | 4 |

**Total angles: 9**
**Traditions covered: 6** (Exercise physiology, Sports science/methodology, Molecular hypoxia physiology, Environmental/altitude physiology, Clinical/occupational medicine, Sleep science)
**Required type coverage:**
- Confirmatory ≥2 from different traditions: YES (6 confirmatory across 5 traditions)
- Null-hypothesis exactly 1: YES
- Adversarial ≥1 with ADVERSARIAL-FLAGGED: YES
- Cross-disciplinary ≥1 from outside intake brief: YES

---

## PART 7 — AFTER-TASK SELF-CHECK

**Per CLAUDE.md and angle-gen-kit CLAUDE.md bookend requirement — what is missing, incomplete, or questionable in this output:**

1. **Source B gap is the most significant limitation.** The vocabulary-tradition
   coverage is LLM self-reported. Specific traditions that might appear in survey
   paper titles but were not enumerated: nutrition science (iron supplementation
   for erythropoiesis is a real sub-literature), pharmacology (EPO mimetics,
   altitude tent comparison to micro-dosing), sports psychology (placebo effects
   in altitude training belief). If any of these are relevant to the user's scope,
   a Source B probe would surface them before the angle list is finalized.

2. **The adversarial angle (D1) is labeled correctly but requires downstream
   enforcement.** Per weakness_register.md Weakness 6: the ADVERSARIAL-FLAGGED
   label communicates the structural independence requirement but cannot enforce
   it. The research agent executing this list must run D1 in a separate context
   with no prior reading of A1–A6.

3. **A1 vs A4 borderline pair.** Human judgment required at retrieval time.
   This cannot be resolved here without running the queries.

4. **No sports nutrition / iron supplementation tradition.** Iron status
   is a known determinant of altitude tent response (insufficient iron prevents
   erythropoiesis regardless of EPO stimulus). This sub-literature (sports
   nutrition, micronutrient science) is not covered by any current angle.
   Scope acceptance required: "Scope accepted — sports nutrition / iron
   supplementation tradition not covered in current angle list. If the user's
   scope includes dietary co-interventions, add an angle from the sports
   nutrition tradition."

5. **Doping/ethics tradition absent.** Altitude tents occupy a contested
   regulatory space (legal, but discussed as a borderline practice by WADA).
   The sports ethics / anti-doping policy literature is not covered.
   Scope acceptance: "Sports ethics / anti-doping policy tradition not covered.
   If the user's scope includes regulatory context, add one angle from this tradition."
