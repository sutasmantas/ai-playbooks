# angle-gen-kit Output — Condition B
**Topic:** "I want to research periodization for improving marathon performance."
**Date:** 2026-07-07
**Source B status:** UNAVAILABLE (subagent context — no web search access)
**Domain scope condition:** Marathon periodization / sports science is well-represented in LLM training data. Per CLAUDE.md INT-10 FM4 note: coverage-gap conditioning produces NEAR-ZERO DIFFERENTIAL on topics of this type. Primary kit value for this run shifts to Q5 (actionability of angle formulation) and Q3 (query precision). Cross-disciplinary slot (C1) is the primary coverage novelty mechanism.

---

## Multi-task enumeration (CLAUDE.md multi-task tracking)

Tasks to complete before reporting done:
1. Intake brief — all fields populated per intake.md Step 4
2. Intake gate check — all four conditions verified per intake.md Step 6
3. Coverage map — Step 0 of angle-generation.md, required before any angle content
4. Type allocations — Step 1 of angle-generation.md, required before angle content
5. Angle list — 8 angles with tradition labels, queries, source types, predicted research character
6. Quality gate documentation — all four gates per angle-quality.md, gate summary produced

---

## INTAKE BRIEF

**Source:** intake.md procedure applied to sparse input "I want to research periodization for improving marathon performance."

### Step 1 — Sparse-input parsing

| Element | Extracted value |
|---------|----------------|
| Target concept | How to structure periodized training to maximize marathon race performance |
| Anchor vocabulary | "periodization" (coaching / training science tradition); "marathon performance" (endurance sports tradition) |
| Scope signals | Running modality = marathon (42.2km, implies distance-specific physiology); Outcome = performance improvement (not injury prevention, not general health) |

Absent scope signals: athlete level (recreational vs. elite), time horizon, specific periodization model. Will flag these as scope markers.

### Step 2 — Vocabulary bootstrap

**Source A — LLM translation:**

- "periodization" → also called: training periodization, training cycles, macrocycle, mesocycle, microcycle, block periodization, linear periodization, nonlinear/undulating periodization, polarized training, pyramidal training, intensity distribution, training load distribution, concurrent training scheduling, taper
- "marathon performance" → also called: endurance performance, aerobic capacity, VO2max, lactate threshold, lactate turn point, running economy, cardiorespiratory fitness, race-specific fitness, 42.2km running, long-distance running, sub-3-hour performance

**Candidate vocabulary traditions identified by Source A:**

1. **Exercise physiology** — VO2max, lactate threshold, running economy, aerobic adaptations, mitochondrial biogenesis, cardiorespiratory fitness, oxygen kinetics
2. **Coaching science / applied sport science** — block periodization, linear periodization, undulating periodization, polarized training, pyramidal training, training load, macrocycle, mesocycle, microcycle, taper, intensity zones, training distribution
3. **Endurance running / sport-specific training** — marathon preparation, long slow distance (LSD), tempo runs, interval training, race-specific fitness, competitive running, peaking, race-pace training
4. **Strength and conditioning / concurrent training** — resistance training, neuromuscular adaptations, strength-endurance interference, running economy enhancement through strength, plyometrics, concurrent training integration
5. **Sports medicine / load monitoring** — training load monitoring, internal load, external load, HRV (heart rate variability), RPE (rating of perceived exertion), overtraining syndrome, non-functional overreaching, load-to-injury relationship, recovery management

**Source B:** UNAVAILABLE — subagent context without web search access.

**Source C — Absent-term signal:**

User did NOT say:
- "block periodization" — one of the most debated periodization models in the literature; its absence may indicate the user is not yet familiar with the subspecialties within periodization
- "polarized training" — growing evidence base; specific 80/20 training intensity split; entirely absent from user input
- "VO2max" — primary physiological determinant of marathon performance; absence suggests practitioner-entry framing rather than exercise physiology framing
- "running economy" — key outcome alongside VO2max; absent despite being a major research construct
- "taper" — pre-race periodization phase with a dedicated research body; absence is notable
- "lactate threshold" / "lactate turn point" — central construct in endurance training science; absent

NOTE: Vocabulary traditions listed in this brief are LLM self-reported. Source B (survey-paper probe) was unavailable. A vocabulary-discovery pass (pearl-growing from a known anchor paper, e.g., Seiler 2010 on polarized training or Issurin 2010 on block periodization) is recommended before treating the tradition list as complete.

### Step 3 — Question-type classification

**Classification: EXPLORATORY**

Basis: User's prompt contains no explicit comparison structure ("A vs. B"), no named intervention, no named outcome measurement beyond "improving performance." "I want to research" signals broad survey intent. No PICO structure applicable at intake — user has not yet entered the domain vocabulary needed to fill PICO fields.

Decision rule applied: Default to EXPLORATORY when no explicit comparison language is present.

### Step 4 — Intake brief (populated)

```
INTAKE BRIEF
============
Topic: How to structure periodized training to maximize marathon race performance

Anchor vocabulary:
  "periodization" — coaching / training science tradition
  "marathon performance" — endurance sports / sport-specific tradition

Candidate vocabulary traditions:
  1. Exercise physiology — VO2max, lactate threshold, running economy, aerobic adaptations,
     mitochondrial biogenesis, cardiorespiratory fitness, oxygen kinetics
  2. Coaching science / applied sport science — block periodization, linear periodization,
     undulating periodization, polarized training, pyramidal training, training load,
     macrocycle, mesocycle, microcycle, taper, intensity distribution
  3. Endurance running / sport-specific training — marathon preparation, long slow distance,
     tempo runs, interval training, race-specific fitness, peaking, race-pace training
  4. Strength and conditioning / concurrent training — resistance training, neuromuscular
     adaptations, strength-endurance interference, plyometrics, concurrent training integration
  5. Sports medicine / load monitoring — HRV, RPE, overtraining, non-functional overreaching,
     load-to-injury, internal/external load, recovery management

NOTE: Vocabulary traditions listed here are LLM self-reported (VOCABULARY SELF-REPORT FLAG).
Source B (web search) was unavailable. Vocabulary-discovery pass recommended before finalizing.

Question type: EXPLORATORY
  (No comparison or intervention-outcome structure in the prompt; "I want to research"
  signals broad survey intent.)

Scope markers:
  Stated: marathon (42.2km) as the distance; performance improvement as the outcome
  Inferred scope: general periodization evidence applicable to marathon preparation,
  not constrained to elite athletes or specific models
  Not stated: athlete level (recreational vs. elite), time horizon, specific periodization
  model of interest

Known exclusions: None stated

Domain maturity estimate: mixed
  Basis: "periodization" is academic coaching-science vocabulary; "marathon performance"
  bridges academic (exercise physiology research) and practitioner (training programs,
  coaching guides) traditions. Extensive peer-reviewed literature exists (IJSPP, Med Sci
  Sports Exerc, Eur J Appl Physiol) AND extensive practitioner literature (coaching manuals,
  IAAF bulletins, training program publications). Both warrant inclusion.

Survey paper status: UNAVAILABLE
  Source B was not accessible in this execution context. Sports science periodization has
  known survey literature (e.g., Issurin 2010 block periodization; Seiler 2010 polarized
  training; Laursen 2010 HIIT in endurance). Running Source B before finalizing is recommended.

Source B status: UNAVAILABLE — MODERATE
  Reason: Source A + Source C produced ≥5 distinct vocabulary traditions.
  Marathon periodization is a mainstream sports science topic well-represented in LLM
  training data. Severity: MODERATE — proceeding with VOCABULARY SELF-REPORT FLAG.

Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):
  Target tradition: Control theory / adaptive systems modeling
  Selection basis: Similar mathematical structures — the periodization optimization problem
  (find a training stimulus sequence that maximizes performance at a target date subject to
  recovery constraints) is structurally isomorphic to optimal control problems. The
  fitness-fatigue (impulse-response) model of training adaptation is formally a transfer
  function of an adaptive system; control theory offers formal optimization methods
  (model predictive control, bang-bang control, systems identification) that sports
  scientists cite sporadically but have not systematically applied to marathon periodization.
  This tradition has the highest coverage novelty of any candidate cross-disciplinary field.
```

### Step 5 — Fallback protocol (applied)

Source B was unavailable. Source A + Source C produced ≥5 distinct traditions. Severity: MODERATE. Proceeding with VOCABULARY SELF-REPORT FLAG. Angle generation can proceed; limitation is visible in the brief.

**Possible undetected tradition:** Sports nutrition / dietary periodization (fueling strategy, carbohydrate periodization, nutrition timing relative to training phases) was not enumerated in Source A's first pass. This may be a gap — dietary periodization is a distinct research tradition that intersects with marathon training periodization. Flagged for human judgment.

### Step 6 — Intake gate check

- [x] Topic field populated (not "TBD"): "How to structure periodized training to maximize marathon race performance" — POPULATED
- [x] Candidate vocabulary traditions ≥2: 5 traditions identified — PASSES
- [x] Question type classified: EXPLORATORY — CLASSIFIED
- [x] Cross-disciplinary tradition pre-committed: Control theory / adaptive systems modeling, selection basis stated — POPULATED

**Gate result: ALL FOUR CONDITIONS MET — proceed to angle-generation.md**

---

## COVERAGE MAP

**Required before any angle content per angle-generation.md Step 0.**

```
COVERAGE MAP
============
Tradition 1: Exercise physiology
  Representative terms: VO2max, lactate threshold, running economy, aerobic adaptations,
    mitochondrial biogenesis, cardiorespiratory fitness
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: Coaching science / applied sport science (periodization models)
  Representative terms: block periodization, linear periodization, polarized training,
    pyramidal training, undulating periodization, training load, macrocycle, mesocycle,
    microcycle, taper, intensity distribution
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: Endurance running / sport-specific training
  Representative terms: marathon preparation, long slow distance, tempo runs, interval
    training, race-specific fitness, peaking, race-pace training
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Strength and conditioning / concurrent training
  Representative terms: resistance training, neuromuscular adaptations, concurrent training,
    plyometrics, strength-endurance interference, running economy
  Planned angle slot: Confirmatory A4
  Gap flag: No

Tradition 5: Sports medicine / load monitoring
  Representative terms: HRV, RPE, overtraining, non-functional overreaching,
    load-to-injury, internal/external load, recovery management
  Planned angle slot: Confirmatory A5
  Gap flag: No

Traditions NOT yet represented in planned list:
  All five traditions from intake brief have planned angle slots.

  Possible undetected tradition (flagged in intake brief Step 5):
    Sports nutrition / dietary periodization — carbohydrate periodization, fueling strategy,
    nutrition timing. Not confirmed as a separate tradition via Source B. Flagged for
    human judgment — if this is a distinct tradition the user wants covered, an additional
    confirmatory angle should be added.

Cross-disciplinary slot (required):
  Target tradition: Control theory / adaptive systems modeling (NOT in intake brief)
  Basis for selection: Similar mathematical structures — periodization optimization maps
    onto optimal control / model predictive control problems; the fitness-fatigue
    impulse-response model is a formal transfer function. This is the tradition least
    likely to have been enumerated by the vocabulary bootstrap and most likely to contain
    overlooked methodology.
```

**Gate: Coverage map populated before any angle content written. Evidence: this map exists prior to Step 1.**

---

## TYPE ALLOCATIONS

**Required before angle content per angle-generation.md Step 1.**

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Exercise physiology):
  Tradition: Exercise physiology
  Conditioning: first slot; generate from exercise physiology vocabulary

Slot A2 (Confirmatory — Coaching science / periodization models):
  Tradition: Coaching science / applied sport science
  Conditioning: A1 covered physiological mechanisms; generate from
    periodization model structure / comparison vocabulary NOT yet covered by A1

Slot A3 (Confirmatory — Endurance running / sport-specific):
  Tradition: Endurance running / sport-specific training
  Conditioning: A1-A2 covered physiology and model comparisons; generate from
    race-specific preparation vocabulary NOT yet covered

Slot A4 (Confirmatory — Strength and conditioning):
  Tradition: Strength and conditioning / concurrent training
  Conditioning: A1-A3 covered aerobic and endurance content; generate from
    resistance/neuromuscular vocabulary NOT yet covered

Slot A5 (Confirmatory — Sports medicine / load monitoring):
  Tradition: Sports medicine / load monitoring
  Conditioning: A1-A4 covered training content and structure; generate from
    monitoring/management vocabulary NOT yet covered

Slot N1 (Null-hypothesis): assigned
  Framing: "What evidence would show periodization does NOT improve marathon performance?"

Slot D1 (Adversarial): [ADVERSARIAL-FLAGGED]
  Starting vocabulary: implementation science / behavioural adherence
  NOT FROM: exercise physiology, coaching science, periodization model terminology
  Excluded terms: VO2max, lactate threshold, block periodization, polarized training,
    macrocycle, mesocycle, microcycle, running economy, training load

Slot C1 (Cross-disciplinary): Control theory / adaptive systems modeling
  Starting from: control theory vocabulary — optimal control, fitness-fatigue model,
    impulse-response, model predictive control, systems identification
  NOT from user's apparent sports science framing
```

---

## ANGLE LIST

**Generated using coverage-gap conditioning per angle-generation.md Step 2.**
**Total angles: 8 (within the 5-12 expected range; 5 traditions justify 5 confirmatory + required structural types)**

---

### ANGLE 1: Physiological mechanisms of periodized training adaptation in distance runners

```
ANGLE 1: Physiological mechanisms of periodized training adaptation in distance runners
===========
Vocabulary tradition: Exercise physiology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Effect sizes for VO2max, lactate threshold, and running economy changes
  under different periodization structures; scope conditions for aerobic adaptations;
  populations (elite vs. recreational; findings should be disaggregated if possible);
  training volume and intensity parameters associated with adaptation magnitude

Source type (academic): PubMed / Semantic Scholar
  Note: Exercise physiology for endurance sports is indexed primarily in PubMed (Med Sci
  Sports Exerc, Eur J Appl Physiol, IJSPP, J Appl Physiol). arXiv cs/stat categories
  are not the primary venue for this tradition.
Source type (practitioner): deprioritized — academic-heavy for this specific angle;
  physiology findings originate predominantly in peer-reviewed research

Queries:
  Q1: periodization training effects VO2max lactate threshold distance runners systematic
      review meta-analysis
  Q2: aerobic adaptations marathon training structure running economy physiology endurance
  Q3: training volume intensity distribution aerobic capacity endurance athlete randomized
      controlled trial
  Q4: mitochondrial biogenesis endurance training periodized program marathon runners

Coverage-gap note: Does not cover: how individual variation in adaptation rate (non-responder
  status) interacts with periodization structure; long-term adaptation timelines (>12 months);
  sex-specific physiological responses to periodized training.
```

---

### ANGLE 2: Periodization model comparisons for marathon and long-distance running outcomes

```
ANGLE 2: Periodization model comparisons for marathon and long-distance running outcomes
===========
Vocabulary tradition: Coaching science / applied sport science (periodization models)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Head-to-head comparisons of periodization models (block vs. linear
  vs. undulating vs. polarized vs. pyramidal); outcome measures specific to marathon-
  distance performance; physiological vs. performance outcomes; time-to-peak-performance
  timelines across models; contexts in which each model is recommended
Coverage-gap conditioning: A1 covered physiological mechanisms. This angle covers
  the structural model question A1 does not address: which periodization system design
  produces better marathon outcomes, and under what conditions?

Source type (academic): Semantic Scholar (IJSPP, Strength Cond J, Scand J Med Sci
  Sports are the primary venues; these are reliably indexed in Semantic Scholar)
Source type (practitioner): REQUIRED — IAAF/World Athletics technical bulletins;
  coaching science publications; practitioner reviews in Strength and Conditioning
  Journal practitioner columns

Queries:
  Q1: block periodization versus linear periodization endurance running marathon
      performance comparison
  Q2: polarized training pyramidal intensity distribution marathon long-distance runners
      2019 2020 2021 2022 2023 2024
  Q3: periodization models comparison marathon performance review evidence-based coaching
  Q4: undulating nonlinear periodization endurance runners performance outcomes

Coverage-gap note: Does not cover: ultra-marathon periodization (beyond 42.2km, different
  physiology); periodization for age-group masters runners; non-English literature
  (Eastern European block periodization tradition has separate publication stream).
```

---

### ANGLE 3: Marathon-specific intensity distribution, taper protocols, and race preparation sequencing

```
ANGLE 3: Marathon-specific intensity distribution, taper protocols, and race preparation sequencing
===========
Vocabulary tradition: Endurance running / sport-specific training
Angle type: Confirmatory
Predicted research character: empirical + consensus
What to extract: Evidence-based taper durations and volume-reduction protocols for
  marathon runners; intensity zone prescriptions for marathon training phases; race-
  specific preparation sequencing (what training content goes into each phase);
  mileage targets and structure for marathon build phases
Coverage-gap conditioning: A1 covered physiology of adaptation; A2 covered model structure
  comparisons. This angle covers the content question neither addresses: what specific
  training workouts, intensity distributions, and taper structures are used in marathon
  preparation, and what evidence exists for them?

Source type (academic): PubMed / Semantic Scholar
Source type (practitioner): REQUIRED — IAAF/World Athletics technical documents;
  certified coach training curricula; evidence-based coaching publications;
  running-specific training program literature

Queries:
  Q1: marathon taper protocol duration volume reduction performance peak systematic review
  Q2: intensity zone distribution marathon training preparation evidence aerobic threshold
  Q3: marathon-specific periodization 16-week 20-week preparation phase structure athletes
  Q4: race-pace training marathon specificity preparation performance outcome

Coverage-gap note: Does not cover: multiple marathon cycles within a year (double-peak
  periodization); heat/altitude adjustment to marathon preparation; sex-specific taper
  evidence (most taper studies have predominantly male samples).
```

---

### ANGLE 4: Concurrent strength training integration in periodized marathon preparation

```
ANGLE 4: Concurrent strength training integration in periodized marathon preparation
===========
Vocabulary tradition: Strength and conditioning / concurrent training
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Effect of concurrent resistance training on running economy in trained
  distance runners; optimal timing of strength work within periodized marathon programs
  (in-season vs. off-season emphasis); interference effect magnitude; specific training
  modes (plyometrics, heavy resistance, explosive training) and their effect on marathon
  performance
Coverage-gap conditioning: A1-A3 all covered aerobic endurance training content.
  This angle covers a different intervention class: strength and neuromuscular training
  as a supplement to periodized endurance work, and how to integrate it without causing
  interference.

Source type (academic): PubMed / Semantic Scholar (Sports Med, J Strength Cond Res,
  IJSPP)
Source type (practitioner): REQUIRED — NSCA publications; strength and conditioning
  practitioner literature; endurance athlete strength program guides

Queries:
  Q1: concurrent training resistance running economy marathon endurance athletes
      systematic review
  Q2: strength training periodization distance runners performance meta-analysis
  Q3: plyometric training marathon runners running economy improvement concurrent
  Q4: neuromuscular training interference endurance running periodized program marathon

Coverage-gap note: Does not cover: neural vs. hypertrophic adaptations in marathon-
  specific strength training; concurrent training timing within a single training day
  (session order effects); concurrent training for female marathon runners specifically.
```

---

### ANGLE 5: Training load monitoring and recovery management within marathon periodization

```
ANGLE 5: Training load monitoring and recovery management within marathon periodization
===========
Vocabulary tradition: Sports medicine / load monitoring
Angle type: Confirmatory
Predicted research character: empirical + consensus
What to extract: HRV-guided periodization protocols for endurance athletes; load-to-
  injury relationships in marathon training populations; overtraining detection methods
  and thresholds; recovery monitoring during high-load phases and taper; evidence for
  specific load metrics (ACWR, subjective wellbeing, sleep quality) in marathon training
Coverage-gap conditioning: A1-A4 all covered training content (what to do). This angle
  covers the monitoring and management question: how to measure whether the periodized
  plan is working and adjust it in real time without causing injury or overtraining.

Source type (academic): PubMed / Semantic Scholar (Br J Sports Med, IJSPP, Sports Med)
Source type (practitioner): REQUIRED — sports science practitioner guides; Garmin/
  Polar/Whoop monitoring tools' published methodology; physiotherapist-authored
  load management resources

Queries:
  Q1: heart rate variability HRV guided training periodization endurance marathon runners
  Q2: acute chronic workload ratio ACWR marathon training injury prevention load monitoring
  Q3: overtraining non-functional overreaching detection marathon endurance athletes
      periodization
  Q4: recovery monitoring fatigue management marathon training periodized program
      subjective wellbeing

Coverage-gap note: Does not cover: technology-assisted load monitoring (wearable devices,
  GPS metrics) beyond what appears in clinical literature; load monitoring in amateur
  recreational runners with highly variable schedules.
```

---

### ANGLE N1: Evidence that periodization does NOT improve or does not generalize to marathon performance

```
ANGLE N1: Evidence that periodization does NOT improve or does not generalize to marathon performance
===========
Vocabulary tradition: Exercise physiology (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: gap
  (Negative results are underrepresented in sports science publishing; this angle
  will encounter more absence of literature than confirmatory angles, which is itself
  a finding.)
What to extract: Studies finding no significant difference between periodized and
  non-periodized marathon training; conditions under which periodization effects are
  absent (athlete level, training background, study duration); non-responders to
  periodized training; failure of laboratory periodization findings to generalize to
  recreational marathon populations; methodological critiques of periodization evidence
  base

Source type (academic): PubMed / Semantic Scholar
Source type (practitioner): REQUIRED — running communities, coach forums, athlete
  self-report studies showing structured programs failed; practitioner reports of
  periodization failures in real-world contexts

Queries:
  Q1: periodization training no significant effect endurance running marathon null result
      limitations
  Q2: non-periodized training marathon performance equal comparison no difference
  Q3: periodization non-responders marathon endurance athletes individual variation
      limitations generalization
  Q4: limitations periodization evidence recreational runners field vs laboratory
      efficacy gap

Coverage-gap note: This angle will likely surface methodological critiques more than
  direct null results. Absence of literature is itself a data point — document it.
  Small-literature exception applies: if total corpus for these queries is <20 papers,
  pairwise overlap with confirmatory angles may reflect corpus size, not angle synonymy.
```

---

### ANGLE D1: Real-world adherence failures and individualization critique of marathon periodization

```
ANGLE D1: Real-world adherence failures and individualization critique of marathon periodization
===========
Vocabulary tradition: Implementation science / behavioural adherence
Angle type: Adversarial
  [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior
  confirmatory results]
Predicted research character: empirical + gap
What to extract: Evidence that periodized marathon programs have low adherence or are
  impractical for recreational runners; individual variation that undermines group-level
  periodization prescriptions; injury rates in highly structured vs. self-coached training;
  barriers to implementing periodized plans; practitioner critiques of laboratory-derived
  periodization recommendations; mismatch between controlled study populations and real-
  world marathon training contexts

Generation note: Generated from implementation/adherence/failure vocabulary.
  Explicitly excluding from generation: VO2max, lactate threshold, block periodization,
  polarized training, macrocycle, mesocycle, microcycle, running economy, training load.
  Starting terms used: adherence, dropout, real-world, recreational, non-compliance,
  implementation, barriers, overuse injury, self-coached, attrition, individual variation,
  accessibility.

Source type (academic): Semantic Scholar / PubMed (sport psychology, implementation
  science, behavioural sports science)
Source type (practitioner): REQUIRED — running community surveys; coach critique
  literature; athlete experience studies; qualitative research on training plan
  non-compliance

Queries:
  Q1: marathon training program adherence dropout attrition recreational runners real-world
      barriers compliance
  Q2: individual variation response marathon training non-responder recreational self-coached
      periodization
  Q3: overuse injury structured marathon program compliance barriers recreational runners
  Q4: "one size fits all" periodization critique recreational marathon runners self-coached
      individualization

Coverage-gap note: This angle deliberately opposes the confirmatory literature. A fresh
  research context is required — do NOT execute after reading confirmatory angle results.
  Adversarial separation is the operative mechanism against confirmation bias.
```

---

### ANGLE C1: Optimal control and mathematical modeling approaches to marathon training periodization

```
ANGLE C1: Optimal control and mathematical modeling approaches to marathon training periodization
===========
Vocabulary tradition: Control theory / adaptive systems modeling
  (NOT in intake brief — cross-disciplinary target)
Angle type: Cross-disciplinary
Predicted research character: empirical + gap
  (Literature exists but is sparse and fragmented; this angle documents what has and
  has not been formalized.)
What to extract: Mathematical models of fitness-fatigue dynamics used for periodization
  planning; applications of optimal control formulations to training schedule optimization;
  systems identification methods for calibrating individual fitness-fatigue response
  parameters; model predictive control applications to periodization; Banister impulse-
  response model extensions; computational tools for training optimization

Generation note: Generated from control theory vocabulary, NOT from sports science
  framing. Starting terms: fitness-fatigue model, impulse-response model, Banister model,
  optimal control, model predictive control, transfer function, systems identification,
  nonlinear dynamics, performance modeling, adaptive systems, optimization.

Source type (academic): Semantic Scholar (primary — interdisciplinary reach);
  arXiv cs.SY (Systems and Control) / math.OC (Optimization and Control) for
  formal methods; Journal of Theoretical Biology / mathematical biology for
  systems modeling of biological adaptation
Source type (practitioner): REQUIRED — sports analytics; computational tools for
  athletes/coaches (TrainingPeaks performance management chart methodology);
  technical reports on fitness-fatigue model implementations

Queries:
  Q1: Banister fitness fatigue impulse-response model marathon performance prediction
      optimal control
  Q2: mathematical modeling training periodization performance optimization endurance
      athletes systems
  Q3: model predictive control athletic training optimization periodization schedule
  Q4: nonlinear dynamics fitness fatigue adaptation endurance training performance
      modeling marathon

Coverage-gap note: The Banister model (1975, 1991) is known in sports science but
  its formal control-theory extensions are not widely cited in exercise physiology.
  This angle may surface fragmented literature across disciplines that has never been
  synthesized in a marathon-specific context — which is precisely the coverage value
  of the cross-disciplinary slot.
```

---

## QUALITY GATE DOCUMENTATION

**Applying angle-quality.md — all four gates.**

---

### Gate 1 — Completeness checks

**Null-hypothesis angle present:**
Angle N1 explicitly framed as "evidence that periodization does NOT improve or does not generalize." Query set contains: "no significant effect," "null result," "limitations," "no difference," "does not generalize." Disconfirming vocabulary present. Framing is explicit — not a confirmatory angle with hedging language.
**PASS**

**Adversarial angle present:**
Angle D1 carries label `[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]`. Label present on the angle record.
**PASS**

**Cross-disciplinary angle present:**
Angle C1 targets "Control theory / adaptive systems modeling." Checked against intake brief traditions list: Exercise physiology, Coaching science, Endurance running, Strength and conditioning, Sports medicine. Control theory is NOT in this list.
**PASS**

**Source-type coverage (practitioner):**
Domain maturity = mixed. Practitioner sources REQUIRED. Practitioner sources assigned in: A2 (IAAF bulletins, coaching publications), A3 (IAAF, coaching curricula), A4 (NSCA, practitioner guides), A5 (practitioner guides, wearable monitoring), N1 (running communities, coach forums), D1 (running surveys, qualitative research), C1 (sports analytics, TrainingPeaks).
**PASS**

**Vocabulary-tradition map populated:**
Coverage map contains 5 distinct tradition names from intake brief + 1 cross-disciplinary tradition. Coverage map existed before any angle content was written.
**PASS**

**Gate 1 overall: PASS**

---

### Gate 2 — Distinctness checks

**Boolean-connective test applied to each angle pair:**

A1 (VO2max, lactate threshold, mitochondria, cardiorespiratory) vs. A2 (block periodization, polarized training, model comparison, linear vs. undulating):
- Most distinctive A1 term: "VO2max" / "mitochondrial biogenesis"
- Does it appear in A2 queries? No
- Would OR retrieve the same documents? No — A1 is mechanism-focused (what physiological adaptations occur); A2 is model-structure-focused (which periodization system is better). Different research questions producing different literatures.
**PAIR A1-A2: PASS**

A1 vs. A3 (marathon taper, intensity zones, race preparation):
- A1's distinctive terms: VO2max, cardiorespiratory, mitochondrial, physiology
- A3's distinctive terms: taper, race-pace training, 16-week/20-week preparation, phase sequencing
- Would OR retrieve same documents? Partial overlap possible (some papers cover both physiology and race preparation), but A1 asks "what adaptations occur?" and A3 asks "what training to do before a race?" — different primary research question.
**PAIR A1-A3: PASS**

A1 vs. A4 (resistance training, neuromuscular, concurrent, plyometrics):
- A4 introduces a different intervention class (resistance/strength training) entirely absent from A1
**PAIR A1-A4: PASS**

A1 vs. A5 (HRV, ACWR, overtraining, recovery):
- A1 = adaptation mechanisms; A5 = monitoring and management of the training process
- Different research questions, different measurement tools, different study designs
**PAIR A1-A5: PASS**

A2 vs. A3:
- A2 = which periodization model structure produces better outcomes (model-comparison research question)
- A3 = what training content and taper to use in marathon preparation (protocol research question)
- Partial overlap exists on "intensity distribution" — but A2 is studying models, A3 is studying content
- Would OR retrieve same documents? Some overlap expected, but the primary retrieval sets are different. Intensity distribution queries in A2 are about polarized vs. pyramidal as systems; in A3 about zone prescriptions for race preparation.
**PAIR A2-A3: PASS (borderline — flag for human attention if post-retrieval Jaccard is high)**

A2 vs. A4, A2 vs. A5: Clearly distinct — different intervention types and research questions
**PAIRS A2-A4, A2-A5: PASS**

A3 vs. A4: Race preparation content vs. concurrent strength training — distinct
**PAIR A3-A4: PASS**

A3 vs. A5: Training content (what workouts) vs. load monitoring (how to track and adjust) — distinct facets of practice
**PAIR A3-A5: PASS**

A4 vs. A5: Strength training as intervention vs. load monitoring as management strategy — distinct
**PAIR A4-A5: PASS**

N1 vs. all confirmatory: N1 uses explicitly disconfirming vocabulary ("no significant effect," "null result," "does not generalize"). This vocabulary is structurally absent from confirmatory angle queries.
**N1 vs. A1-A5: PASS**

D1 vs. all confirmatory: D1 uses implementation/adherence vocabulary (adherence, dropout, recreational, barriers, compliance, self-coached) explicitly excluded from confirmatory angle generation.
**D1 vs. A1-A5, N1: PASS**

C1 vs. all: Control theory vocabulary (Banister model, impulse-response, optimal control, model predictive control) is structurally distinct from all sports science traditions.
**C1 vs. all: PASS**

**Vocabulary-tradition distinctness (per angle label):**
- A1: Exercise physiology
- A2: Coaching science / applied sport science (periodization models)
- A3: Endurance running / sport-specific training
- A4: Strength and conditioning / concurrent training
- A5: Sports medicine / load monitoring
- N1: Exercise physiology (disconfirming variant) — acceptable: null-hypothesis variant of A1's tradition
- D1: Implementation science / behavioural adherence — distinct, adversarial variant
- C1: Control theory / adaptive systems modeling — distinct, cross-disciplinary

No two non-null-hypothesis, non-adversarial angles share the same tradition label.
**PASS**

**Gate 2 overall: PASS**
**Human flag: A2-A3 pair has the highest expected pairwise overlap; if post-retrieval Jaccard > 0.4, consider merging or splitting by facet (A2 = model structure debate; A3 = race-specific content prescription).**

---

### Gate 3 — Launchability checks

**Concrete query strings:** Every angle has 4 runnable query strings. Tested: each could be pasted into a search box (PubMed, Semantic Scholar) without modification.
**PASS for all 8 angles**

**No placeholder vocabulary:** Checked all 32 query strings for "TBD," "[fill in]," "insert term," "to be determined." None found.
**PASS**

**Source type named:** All angles specify named platforms:
- A1: PubMed / Semantic Scholar
- A2: Semantic Scholar / IAAF publications
- A3: PubMed / Semantic Scholar / IAAF documents
- A4: PubMed / Semantic Scholar / NSCA
- A5: PubMed / Semantic Scholar (Br J Sports Med, IJSPP)
- N1: PubMed / Semantic Scholar
- D1: Semantic Scholar / PubMed (sport psychology)
- C1: Semantic Scholar / arXiv cs.SY / math.OC

**PASS for all 8 angles**

**Gate 3 overall: PASS**

---

### Gate 4 — Scoring prohibition

**LLM self-evaluation ranking check:** Angles were assigned types based on structural criteria only: vocabulary-tradition coverage, required type allocation (null-hypothesis, adversarial, cross-disciplinary). No ranking by "most promising," "most novel," or "most relevant" was applied. Coverage-gap conditioning drove generation sequence, not salience judgments.
**PASS**

**Implicit quality assessment check:** Reviewing all angle records for phrases like "this angle is likely to be most useful" or "this is the strongest angle." None found. "Predicted research character" (empirical/consensus/gap) is a structural prediction about what the literature will look like, not a quality ranking.
**PASS**

**Gate 4 overall: PASS**

---

## GATE SUMMARY

```
GATE SUMMARY
============
Gate 1 — Completeness: PASS
  All five items checked: null-hypothesis angle present (N1), adversarial angle
  present (D1, labeled), cross-disciplinary angle present (C1, tradition not in
  intake brief), practitioner sources present (mixed domain — required), vocabulary-
  tradition map populated (5 traditions + cross-disciplinary).

Gate 2 — Distinctness: PASS
  All angle pairs checked with Boolean-connective test. No synonymy detected.
  Human flag: A2-A3 pair has the highest expected pairwise overlap (intensity
  distribution vocabulary appears in both); monitor post-retrieval Jaccard.
  No small-literature exception required (periodization is a mainstream sports
  science topic with a substantial corpus).

Gate 3 — Launchability: PASS
  All 8 angles have ≥1 runnable concrete query. No placeholders. Source types named
  on all angles.

Gate 4 — Scoring prohibition: PASS
  No LLM self-evaluation ranking or implicit quality assessment found in any angle
  record. Structural criteria used throughout.

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG: All vocabulary traditions were enumerated by LLM
     only; Source B (survey-paper probe) was unavailable. External validation via
     survey-paper probe recommended before accepting the tradition list as complete.
     Specifically: sports nutrition / dietary periodization (carbohydrate periodization,
     fueling strategy) may be a distinct tradition not captured here.

  2. Source B status: UNAVAILABLE — MODERATE. Severity: MODERATE (≥5 traditions
     produced by Source A + Source C). Proceeding per fallback protocol.

  3. Scope ambiguity — athlete level: User did not state elite vs. recreational.
     Most periodization research uses trained/competitive populations; findings may
     not generalize to recreational marathoners (first-time or back-of-pack runners).
     Angle N1 addresses non-generalization indirectly. User decision required on
     scope before commissioning research agent dispatch.

  4. A2-A3 post-retrieval Jaccard: If retrieval results show high overlap on
     intensity distribution papers, merge A2 (model structure) and A3 (race-specific
     content) into one angle with an explicit facet split, or accept overlap as
     reflecting a genuinely integrated literature.

  5. Domain-scope condition note (INT-10 FM4): Marathon periodization is well-
     represented in LLM training data. Coverage-gap conditioning produces NEAR-ZERO
     DIFFERENTIAL on such topics versus an unconditioned frontier model. Primary kit
     value for this run: Q5 (actionability of angle formulation) and Q3 (query
     precision). Cross-disciplinary slot C1 (control theory) is the principal source
     of coverage novelty and is unlikely to be spontaneously generated without the
     kit's structural elicitation.
```

---

## Self-check (after-every-task rule — CLAUDE.md)

**Did I complete the goal or just the task?**
All six tasks enumerated at the start are addressed: intake brief (populated, all fields), intake gate (all four conditions verified), coverage map (5 traditions + cross-disciplinary, written before any angle), type allocations (8 slots allocated before angle content), angle list (8 angles with tradition labels, queries, source types, predicted research character), quality gate documentation (all four gates with gate summary). Goal = angle list ready for dispatch with minimal user correction. The list passes all four quality gates.

**What does the goal require next?**
The next obstacle is scope confirmation: the user needs to decide on athlete level (recreational vs. elite) before dispatching — this affects which practitioner sources are highest priority and whether the N1 non-generalization queries are the primary use case. Once scope is confirmed, the adversarial angle (D1) must be dispatched in a separate research context with no prior confirmatory results — this is the structural requirement most at risk of being violated in a single-session research run.

**Did I surface anything the user didn't ask about?**
Yes: the sports nutrition / dietary periodization tradition gap; the A2-A3 pairwise overlap flag; the athlete-level scope ambiguity; the INT-10 domain-scope condition (coverage-gap conditioning near-zero differential on this topic); the adversarial dispatch requirement.

**Proposing next step:** User should confirm athlete level (recreational vs. elite) and then the angle list is ready for dispatch. D1 must be dispatched in a separate context from A1-A5, N1, and C1 — this is a structural requirement, not advisory.
