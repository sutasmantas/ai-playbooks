# Angle-Gen-Kit Execution — INT-11 / E5 / Condition C
**Topic:** Wearable sensor data and machine learning for monitoring athlete training load and injury risk
**Date:** 2026-07-07
**Execution context:** Subagent / no web access — Source B unavailable
**Model:** claude-sonnet-4-6

---

## DEPLOYMENT CONSTRAINTS APPLIED

- Source B (web search / survey-paper probe): UNAVAILABLE
- Source B status written in intake brief per intake.md Step 5 protocol
- VOCABULARY SELF-REPORT FLAG will appear in the angle list per CLAUDE.md deployment constraint
- Cross-tradition conditioning domain scope note: This topic (sports science + ML + biomechanics) is moderately represented in LLM training data — not as saturated as core NLP/AI research, but not an obscure niche. Cross-tradition conditioning expected to produce LOW-TO-MODERATE differential vs. a baseline frontier-model enumeration. Kit value shifts to Q5 (actionability of query formulation) and angle-type structural completeness (null-hypothesis, adversarial). VOCABULARY SELF-REPORT FLAG applied throughout.

---

# SECTION 1: INTAKE BRIEF

Procedure: intake.md Steps 1–5

## Step 1 — Sparse-input parsing

**Input:** "I want to research wearable sensor data and machine learning for monitoring athlete training load and injury risk."

| Element | Extracted value |
|---------|----------------|
| Target concept | Use of wearable sensors + ML to monitor athlete training load and predict injury risk |
| Anchor vocabulary | "wearable sensor data" (sensor/IoT tradition), "machine learning" (ML tradition), "athlete training load" (sports science tradition), "injury risk" (sports medicine tradition) |
| Scope signals | "athlete" — competitive/training sport context, not clinical rehabilitation or general population; "monitoring" — implies real-time or longitudinal tracking; no date range or exclusions stated |

No ambiguity requiring clarification. Both target concept and scope are clear from the prompt. Proceeding without user questions.

**Questions asked: 0**

---

## Step 2 — Vocabulary bootstrap

### Source A — LLM translation (required)

**"wearable sensor data" anchor:**
- Also called: accelerometry, inertial measurement unit (IMU), GPS tracking, heart rate variability (HRV), electromyography (EMG), photoplethysmography (PPG), bioimpedance, wrist-worn device, body-worn sensor, e-textiles, motion capture, kinematic data, physiological monitoring, smart garment, optical sensor

**"machine learning" anchor:**
- Also called: deep learning, neural network, artificial intelligence, data-driven model, predictive modeling, classification, regression, LSTM, random forest, gradient boosting, supervised learning, feature engineering, convolutional neural network, ensemble model, time-series model

**"athlete training load" anchor:**
- Also called: training stress, accumulated load, session RPE (sRPE), acute:chronic workload ratio (ACWR), monotony, strain, external load, internal load, GPS load metric, training volume, training intensity, progressive overload, periodization, workload management, readiness

**"injury risk" anchor:**
- Also called: injury prediction, injury prevention, injury surveillance, musculoskeletal injury, overuse injury, injury incidence, prospective injury risk, risk stratification, biomechanical risk factor, functional movement screening, time loss injury, return to play

**Vocabulary traditions identified from Source A:**
1. Sports science / exercise physiology — ACWR, session RPE, internal load, external load, monotony, strain, periodization
2. Machine learning / AI — deep learning, LSTM, random forest, time-series classification, feature engineering, transfer learning
3. Sports medicine / epidemiology — injury surveillance, injury incidence, prospective cohort, overuse injury, musculoskeletal injury, risk stratification
4. Biomedical engineering / sensor technology — IMU, accelerometry, GPS, HRV, EMG, photoplethysmography, wearable technology, kinematic data
5. Biomechanics — kinematic analysis, joint loading, gait analysis, movement patterns, neuromuscular fatigue, force plates

### Source B — Survey-paper probe: UNAVAILABLE

Cannot run survey-paper probe in this execution context. Source B status written in intake brief below.

### Source C — Absent-term signal

Terms the LLM would expect to appear in this literature that the user did NOT use:

1. **"ACWR"** (acute:chronic workload ratio) — the dominant operationalized injury-risk metric in sports science; its absence may signal the user is approaching from an applied/practitioner framing rather than the research literature
2. **"IMU"** (inertial measurement unit) — the dominant sensor type in wearable sports research; absent suggests the user has not yet entered the sensor-technology vocabulary
3. **"external load / internal load"** — the conceptual partition that organizes the entire training monitoring literature
4. **"overuse injury" / "non-contact injury"** — the specific injury subtypes most studied via wearable monitoring
5. **"time-series"** — the ML problem type; absent suggests the user is thinking of wearables generically rather than as sequential data
6. **"transfer learning"** — critical for small-dataset sports ML; absent suggests the user has not yet encountered the sample-size challenge
7. **"prospective"** — the study design terminology for injury prediction; absent suggests entry from applied rather than clinical-research tradition
8. **"survival analysis"** / **"time-to-event"** — the statistical framework for time-to-injury; absent suggests entry from ML rather than biostatistics tradition
9. **"epidemiology"** — the methodological tradition for population-level injury research; fully absent from prompt
10. **"biomechanics"** — parallel tradition for injury mechanism; absent despite being a major literature cluster

---

## Step 3 — Question-type classification

**Classification: EXPLORATORY**

Basis: The prompt contains no explicit comparison language ("does A work better than B"), no intervention-outcome structure, and no named comparison pair. "I want to research X" with no qualification is the canonical EXPLORATORY input.

PICO/SPIDER not applied at intake (documented failure mode per intake.md Step 3 — PICO at intake for EXPLORATORY questions produces incomplete fields, not structure).

---

## Step 4 — Intake brief (all fields populated)

```
INTAKE BRIEF
============
Topic: Use of wearable sensors and machine learning to monitor athlete training load
and predict injury risk across competitive and recreational sport populations.

Anchor vocabulary:
  - "wearable sensor data" — sensor/IoT tradition
  - "machine learning" — ML/AI tradition
  - "athlete training load" — sports science tradition
  - "injury risk" — sports medicine tradition

Candidate vocabulary traditions:
  1. Sports science / exercise physiology — ACWR, session RPE, internal load,
     external load, monotony, strain, periodization, workload management
  2. Machine learning / AI — deep learning, LSTM, random forest, time-series
     classification, feature engineering, transfer learning, supervised learning
  3. Sports medicine / epidemiology — injury surveillance, injury incidence,
     prospective cohort, overuse injury, musculoskeletal injury, risk stratification
  4. Biomedical engineering / sensor technology — IMU, accelerometry, GPS, HRV,
     EMG, photoplethysmography, wearable technology, kinematic data
  5. Biomechanics — kinematic analysis, joint loading, gait analysis, movement
     patterns, neuromuscular fatigue, force plates

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot
  enumerate traditions it has not encountered. Vocabulary-discovery pass
  (pearl-growing from a known anchor paper) is recommended before accepting the
  angle list as covering all traditions.

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure in the prompt)

Scope markers:
  - "athlete" — competitive and recreational sport populations; not clinical
    rehabilitation or general population
  - "monitoring" — real-time or longitudinal sensor-based tracking; not
    single-assessment clinical tests
  - Inferred scope: instrumented sport contexts (team sports, running, cycling,
    cross-training); ML applied to time-series wearable data; injury types
    capturable via load/movement monitoring (primarily overuse and non-contact)

Known exclusions: None stated

Domain maturity estimate: MIXED (academic-leaning)
  Basis: User uses both academic vocabulary ("machine learning") and practitioner
  vocabulary ("training load," "wearable sensor data"). Area has substantial
  academic literature (BJSM, Journal of Sports Sciences, IEEE, arXiv cs.LG) but
  also strong practitioner production (sports analytics companies, coaching
  frameworks, commercial wearable vendors). Not exclusively academic — practitioner
  sources are required.

Survey paper status: NOT ATTEMPTED — Source B unavailable at execution time.
  Vocabulary-discovery pass recommended before treating angle list as exhaustive.

Source B status: UNAVAILABLE — MODERATE
  Reason: Source A (LLM translation) + Source C (absent-term signal) together
  identified 5 distinct vocabulary traditions. Severity = MODERATE; proceed with
  VOCABULARY SELF-REPORT FLAG applied.

Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):
  Target tradition: Industrial prognostics / predictive maintenance (PHM)
  Selection basis: Same mathematical structure — predicting when a system
  (athlete body) will "fail" (sustain injury) from continuous sensor streams
  under rare-event conditions (injuries are sparse relative to total monitoring
  time) is formally equivalent to predicting remaining useful life (RUL) in
  mechanical systems. The PHM literature has solved sensor fusion, anomaly
  detection, and threshold-calibration under class-imbalanced, high-dimensional
  sensor data — identical structural challenges to sports injury prediction. This
  tradition is NOT enumerated from any of the five intake brief traditions.
```

---

## Step 5 — Fallback protocol

Source B unavailable. Applied per intake.md Step 5:
- Severity = MODERATE (5 distinct traditions from Source A + C)
- VOCABULARY SELF-REPORT FLAG active throughout
- Angle generation proceeds

---

## Step 6 — Intake gate

| Gate condition | Status |
|---------------|--------|
| Topic field populated (not TBD) | PASS |
| Candidate vocabulary traditions has ≥2 entries | PASS (5 traditions) |
| Question type classified | PASS (EXPLORATORY) |
| Cross-disciplinary tradition pre-committed | PASS (industrial prognostics / PHM) |

All four gate conditions met. Proceeding to angle-generation.md.

---

# SECTION 2: COVERAGE MAP AND TYPE ALLOCATIONS

Procedure: angle-generation.md Steps 0–1

## Step 0 — Coverage map

```
COVERAGE MAP
============

Tradition 1: Sports science / exercise physiology
  Representative terms: ACWR, session RPE, internal load, external load,
    monotony, strain, periodization
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: Machine learning / AI
  Representative terms: deep learning, LSTM, random forest, time-series
    classification, feature engineering, transfer learning
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: Sports medicine / epidemiology
  Representative terms: injury surveillance, injury incidence, prospective
    cohort, overuse injury, musculoskeletal injury, risk stratification
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Biomedical engineering / sensor technology
  Representative terms: IMU, accelerometry, GPS, HRV, EMG, PPG, wearable
    technology, kinematic data
  Planned angle slot: Confirmatory A4
  Gap flag: No

Tradition 5: Biomechanics
  Representative terms: kinematic analysis, joint loading, gait analysis,
    movement patterns, neuromuscular fatigue
  Planned angle slot: Confirmatory A5
  Gap flag: No

Additional traditions identified during angle planning:
  Tradition 6: Measurement theory / psychometrics
    Representative terms: minimal detectable change, test-retest reliability,
      criterion validity, ecological validity, coefficient of variation
    Planned angle slot: Confirmatory A6
    Gap flag: No

  Tradition 7: Data science / statistics
    Representative terms: class imbalance, survival analysis, time-to-event,
      temporal cross-validation, SMOTE, hazard model, data leakage
    Planned angle slot: Confirmatory A7
    Gap flag: No

  Tradition 8: Digital health / mHealth
    Representative terms: consumer wearable, remote monitoring, FDA cleared,
      Garmin, Apple Watch, Fitbit, recreational athlete, clinical validation
    Planned angle slot: Confirmatory A8
    Gap flag: No

Null-hypothesis slot: N1 — assigned
  Disconfirming focus: What evidence shows ML-based injury prediction does NOT
  work, does NOT generalize, or fails in deployment?

Adversarial slot: D1 — assigned
  Starting vocabulary: organizational behavior / coaching practice
  NOT FROM: any of traditions 1–8 above

Traditions NOT yet represented in the planned list:
  All 8 traditions have at least one angle slot.

Cross-disciplinary slot (C1):
  Target tradition: Industrial prognostics / predictive maintenance (PHM)
  Basis for selection: Mathematically equivalent problem (predicting rare-event
  failure from continuous sensor streams, sparse labels, class-imbalanced data).
  PHM literature has solved sensor fusion, anomaly detection, and threshold
  calibration under these exact structural conditions. Least likely to have been
  enumerated by the intake brief's five traditions.
```

---

## Step 1 — Type allocations

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Sports science / exercise physiology):
  Training load monitoring via wearable sensors — ACWR, sRPE, internal/external load

Slot A2 (Confirmatory — Machine learning / AI):
  ML model architectures for injury prediction from wearable time-series data

Slot A3 (Confirmatory — Sports medicine / epidemiology):
  Injury incidence and surveillance in instrumented athlete populations

Slot A4 (Confirmatory — Biomedical engineering / sensor technology):
  Validity and reliability of research-grade wearable sensors in sport
  (SCOPE: professional/research-grade instrumentation — IMU, GPS, HRV research devices)

Slot A5 (Confirmatory — Biomechanics):
  Biomechanical load and movement pattern monitoring via wearable sensors

Slot A6 (Confirmatory — Measurement theory / psychometrics):
  Standardization, minimal detectable change, and validity of wearable-derived metrics

Slot A7 (Confirmatory — Data science / statistics):
  Class imbalance, survival analysis, and temporal validation for injury prediction models

Slot A8 (Confirmatory — Digital health / mHealth):
  Consumer-grade wearable accuracy and non-elite athlete monitoring
  (SCOPE: commercial off-the-shelf devices — Garmin, Apple Watch, Fitbit)

Slot N1 (Null-hypothesis): assigned
  "What evidence shows ML injury prediction does NOT work or does not generalize?"

Slot D1 (Adversarial): starting vocabulary from organizational behavior / coaching practice
  NOT FROM: traditions 1–8; terms "wearable," "sensor," "IMU," "GPS," "ACWR,"
  "machine learning," "deep learning," "LSTM," "random forest," "biomechanics,"
  "kinematic," "HRV," "EMG," "epidemiology" excluded from generation prompt

Slot C1 (Cross-disciplinary — Industrial prognostics / PHM):
  Remaining useful life, predictive maintenance, sensor fusion under rare events
```

**Total angle count: 11** (8 confirmatory + 1 null-hypothesis + 1 adversarial + 1 cross-disciplinary)

Justification for exceeding 5–12 standard range note: 8 distinct vocabulary traditions identified at intake + 1 cross-disciplinary = 11 is at the upper edge of the standard range but within it. The domain spans multiple distinct fields with their own publication venues and terminology. 11 angles is appropriate; 20–30 would be over-generation for this topic.

---

# SECTION 3: ANGLE LIST

Procedure: angle-generation.md Steps 2–4

VOCABULARY SELF-REPORT FLAG: All vocabulary traditions in this angle list were enumerated by LLM only (Source B unavailable). External validation via survey-paper probe (e.g., searching `"athlete injury prediction" wearable survey 2023 2024 2025` and examining title vocabulary) is recommended before treating this tradition list as complete.

---

## ANGLE 1: Training load quantification via wearable sensors — sports science framework

```
ANGLE 1: Training load quantification via wearable sensors — sports science framework
======================================================================================
Vocabulary tradition: Sports science / exercise physiology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Quantification methods (ACWR, sRPE, monotony, strain), threshold
  recommendations, effect sizes linking load spikes to injury occurrence, scope
  conditions under which relationships hold

Source type (academic): PubMed, SPORTDiscus (primary venues for sports science journals:
  International Journal of Sports Physiology and Performance, Journal of Sports Sciences,
  British Journal of Sports Medicine)
Source type (practitioner): arXiv cs.LG (sports-load ML preprints), commercial sports
  analytics vendor technical reports (Catapult, STATSports, Playermaker)

Queries:
  Q1: acute chronic workload ratio wearable sensors athlete injury risk monitoring
  Q2: internal load external load GPS accelerometer athlete training monitoring relationship
  Q3: training monotony strain session RPE wearable technology sport periodization
  Q4: athlete training load quantification wearable devices systematic review
  Q5: training load spike injury occurrence prospective cohort team sport athlete

Coverage-gap note: These queries retrieve load-injury association studies but may miss
  within-session real-time monitoring designs (as opposed to week-to-week load tracking).
  A separate search on "real-time training load monitoring" is recommended.
```

---

## ANGLE 2: ML model architectures for injury prediction from wearable time-series

```
ANGLE 2: ML model architectures for injury prediction from wearable time-series
================================================================================
Vocabulary tradition: Machine learning / AI
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Model types (LSTM, random forest, CNN, transformer), feature engineering
  approaches, input representations, performance benchmarks (AUC, sensitivity/specificity),
  dataset sizes used

Source type (academic): arXiv cs.LG, IEEE Transactions on Neural Systems and Rehabilitation
  Engineering, Sensors (MDPI), Journal of Biomedical Informatics
Source type (practitioner): GitHub repositories on sports injury ML (search: "injury
  prediction" "wearable" in GitHub), sports analytics Kaggle competitions

Queries:
  Q1: machine learning injury prediction wearable sensor athlete time series 2022 2023 2024
  Q2: deep learning LSTM recurrent neural network sport injury risk wearable data
  Q3: random forest gradient boosting feature importance training load injury prediction
  Q4: transfer learning sport injury prediction small dataset wearable machine learning

Coverage-gap note: These queries focus on supervised prediction architectures.
  Unsupervised anomaly detection approaches (identifying unusual load patterns
  without injury labels) are not captured here — add an anomaly-detection angle
  if that design space is in scope.
```

---

## ANGLE 3: Injury incidence and surveillance in instrumented athlete populations

```
ANGLE 3: Injury incidence and surveillance in instrumented athlete populations
==============================================================================
Vocabulary tradition: Sports medicine / epidemiology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Injury incidence rates in wearable-monitored populations, injury
  definitions used, time-loss vs. medical attention criteria, prospective cohort
  designs, which sport populations have been instrumented

Source type (academic): British Journal of Sports Medicine, American Journal of Sports
  Medicine, Clinical Journal of Sport Medicine, PubMed
Source type (practitioner): IOC Consensus Statement on injury surveillance, national
  federation injury surveillance reports (UEFA, FIFA medical reports)

Queries:
  Q1: athlete injury incidence prospective cohort wearable monitoring instrumented sport
  Q2: injury surveillance GPS accelerometer team sport overuse injury epidemiology
  Q3: non-contact injury musculoskeletal wearable sensor cohort study prevention
  Q4: injury definition operational wearable monitoring sports epidemiology consensus

Coverage-gap note: These queries retrieve population-level studies. Individual-level
  risk profiling (which specific athlete, not which population) is captured better
  by A2 (ML architectures). Clarify which level of analysis is in scope.
```

---

## ANGLE 4: Validity and reliability of research-grade wearable sensors in sport

```
ANGLE 4: Validity and reliability of research-grade wearable sensors (research-grade scope)
===========================================================================================
Vocabulary tradition: Biomedical engineering / sensor technology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Validity coefficients, test-retest reliability, criterion measures
  used (force plate, motion capture, laboratory metabolic cart), conditions of use
  (field vs. lab), artifact sources

SCOPE NOTE: This angle covers professional/research-grade instrumentation (research
  IMU units, GPS devices deployed in professional sport). Consumer-grade commercial
  wearables are covered in ANGLE 8. The Boolean-connective overlap between A4 and A8
  is reduced by the instrument-grade scope split.

Source type (academic): IEEE Transactions on Instrumentation and Measurement,
  Journal of Sports Sciences, Sensors (MDPI), Gait & Posture
Source type (practitioner): Catapult Sports research publications, Vicon motion
  capture integration studies, STATSports validation documents

Queries:
  Q1: wearable accelerometer IMU validity reliability criterion measure sport athlete
  Q2: GPS accuracy sport wearable position tracking error validation field
  Q3: heart rate variability HRV wearable validity athlete training monitoring
  Q4: wearable sensor data quality missing data noise artifact athlete motion

Coverage-gap note: These queries retrieve single-sensor validation studies.
  Multi-sensor fusion validation (combining IMU + GPS + HRV simultaneously) is a
  distinct problem not well covered here — flag if sensor fusion is in scope.
```

---

## ANGLE 5: Biomechanical load and movement pattern monitoring via wearables

```
ANGLE 5: Biomechanical load and movement pattern monitoring via wearables
=========================================================================
Vocabulary tradition: Biomechanics
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Joint loading estimates from wearables, gait parameter changes
  under fatigue, movement asymmetry as injury markers, comparison to laboratory
  criterion (force plate, 3D motion capture), neuromuscular fatigue indicators

Source type (academic): Journal of Biomechanics, Journal of Orthopaedic and Sports
  Physical Therapy, Gait & Posture, Journal of Sports Sciences
Source type (practitioner): Sports biomechanics laboratory applied reports, clinical
  gait analysis reports from high-performance sport centers

Queries:
  Q1: biomechanical load wearable sensor joint stress athlete gait analysis injury
  Q2: neuromuscular fatigue wearable accelerometry running mechanics change training
  Q3: movement asymmetry wearable IMU injury risk athlete monitoring prospective
  Q4: lower limb loading wearable sensor running athlete biomechanical injury

Coverage-gap note: These queries retrieve wearable-derived biomechanics studies.
  The inverse problem (inferring joint loading from surface-mounted wearables without
  inverse dynamics modeling) is only partially captured — flag if modeling rigor is
  in scope.
```

---

## ANGLE 6: Standardization, reliability, and minimal detectable change of wearable metrics

```
ANGLE 6: Standardization and measurement validity of wearable-derived training metrics
=======================================================================================
Vocabulary tradition: Measurement theory / psychometrics
Angle type: Confirmatory
Predicted research character: empirical (with some consensus from professional bodies)
What to extract: Minimal detectable change (MDC) values for training load metrics,
  intraclass correlation coefficients, standard error of measurement, ecological
  validity studies comparing field to lab conditions, consensus on unit standardization

Source type (academic): Measurement in Physical Education and Exercise Science,
  International Journal of Sports Physiology and Performance, Journal of Strength
  and Conditioning Research
Source type (practitioner): NSCA (National Strength and Conditioning Association)
  position statements, ACSM guidelines, national sport institute technical publications

Queries:
  Q1: minimal detectable change training load wearable metric standardization athlete
  Q2: reliability coefficient variability wearable sensor athlete monitoring intraclass
  Q3: criterion validity concurrent validity wearable derived training load measure
  Q4: ecological validity wearable sensor athlete field laboratory comparison

Coverage-gap note: These queries focus on metric-level reliability. System-level
  reliability (full pipeline from sensor to coach dashboard) is not captured —
  add if implementation fidelity is in scope.
```

---

## ANGLE 7: Class imbalance, survival analysis, and temporal validation methodology

```
ANGLE 7: Statistical methodology — class imbalance, survival analysis, temporal
  cross-validation for injury prediction models
================================================================================
Vocabulary tradition: Data science / statistics
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for handling rare-event injury data (SMOTE, cost-sensitive
  learning, threshold moving), survival analysis / Cox proportional hazards for
  time-to-injury, temporal vs. random cross-validation and data leakage in sport ML,
  sample size requirements

Source type (academic): arXiv cs.LG (methodology papers), Statistics in Sports,
  Journal of Statistical Software, BMJ Statistics in Medicine
Source type (practitioner): GitHub repositories with sports injury ML benchmarks,
  Kaggle notebooks on class-imbalanced sports datasets

Queries:
  Q1: class imbalance injury prediction wearable sport machine learning rare event
  Q2: survival analysis time-to-injury athlete wearable sensor hazard model prospective
  Q3: cross-validation temporal split sports injury prediction data leakage athlete
  Q4: sample size sports injury machine learning wearable sensor study design

Coverage-gap note: These queries retrieve statistical methodology papers. Applied
  reporting of these methods in sport injury studies may be captured better in A3
  (epidemiology tradition). A7 specifically targets the methodology literature, not
  the applied sports studies.
```

---

## ANGLE 8: Consumer-grade wearable accuracy and non-elite athlete monitoring

```
ANGLE 8: Consumer-grade wearable device accuracy and mHealth monitoring for non-elite
  athletes (consumer/commercial scope)
======================================================================================
Vocabulary tradition: Digital health / mHealth
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Accuracy of commercial consumer devices vs. research-grade criterion,
  adherence/compliance in non-elite populations, mHealth platform deployment findings,
  regulatory context (FDA clearance, CE marking for medical claims)

SCOPE NOTE: This angle covers consumer/commercial off-the-shelf wearables (Apple Watch,
  Garmin, Whoop, Fitbit, Polar, Oura). Research-grade instrumentation covered in
  ANGLE 4. Scope split reduces Boolean-connective overlap.

Source type (academic): npj Digital Medicine, JMIR mHealth and uHealth, Sensors,
  Journal of Medical Internet Research
Source type (practitioner): Consumer wearable company validation white papers, Garmin
  Health SDK documentation, Whoop research publications, Apple Health research studies

Queries:
  Q1: consumer wearable device accuracy athletic monitoring Garmin Apple Watch Fitbit
      Polar sport validation
  Q2: mHealth remote monitoring recreational athlete training load injury wearable
  Q3: wearable device accuracy versus laboratory criterion measure recreational athlete
  Q4: digital health wearable adherence compliance non-elite athlete sport monitoring

Coverage-gap note: These queries focus on accuracy and deployment. Behavior change
  and engagement outcomes (whether athletes act on wearable data) are a separate
  literature captured better by the adversarial angle (D1).
```

---

## ANGLE N1: Evidence that ML-based injury prediction does NOT work or does not generalize

```
ANGLE N1: Evidence that ML-based injury prediction does NOT work or does not generalize
=======================================================================================
Vocabulary tradition: Sports science / exercise physiology (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: gap (some empirical critique papers exist;
  absence of positive evidence also expected in this search)
What to extract: Conditions under which ML injury prediction fails, studies reporting
  null or negative results, critiques of ACWR validity, replication failures, scope
  conditions where the relationship does not hold (sport type, athlete age, injury type),
  systematic reviews concluding insufficient evidence

Source type (academic): British Journal of Sports Medicine, International Journal of
  Sports Physiology and Performance, arXiv cs.LG (negative results), Systematic Reviews
  (Cochrane, Campbell)
Source type (practitioner): Sports analytics practitioner commentary on ML hype,
  coaching community skepticism surveys

Queries:
  Q1: machine learning injury prediction wearable failure generalization negative result
      sport athlete
  Q2: ACWR acute chronic workload ratio criticism does not work limitations validity
  Q3: athlete injury risk model overfitting small sample size sport machine learning failure
  Q4: wearable sensor injury prediction insufficient evidence systematic review limitations
  Q5: ML sport injury prediction false positive practical utility clinical relevance

SPECIFICITY GATE CHECK: "ACWR criticism" (Q2) is a specific well-known debate —
  run original query without expansion. Other queries are general enough for expansion.

Coverage-gap note: This angle retrieves explicit critique papers. Absence-of-evidence
  (no papers found on an injury type) is a different evidence type — log search failures
  separately from negative-result papers.
```

---

## ANGLE D1: Technology adoption barriers and coach decision-making in athlete monitoring

```
ANGLE D1: Technology adoption barriers and coach decision-making in athlete monitoring
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]
==============================================================================================
Vocabulary tradition: Organizational behavior / coaching practice
Angle type: Adversarial
Predicted research character: consensus (largely organizational/behavioral research)
What to extract: Barriers to wearable technology adoption by coaches, data overload
  and decision fatigue from monitoring systems, coach autonomy vs. algorithmic
  recommendations, athlete resistance to monitoring, implementation failures in
  high-performance sport programs

ADVERSARIAL GENERATION NOTE: Generated from coaching practice and organizational
  behavior vocabulary. The following terms were EXCLUDED from the generation prompt:
  wearable, sensor, IMU, GPS, accelerometer, machine learning, deep learning, LSTM,
  random forest, ACWR, biomechanics, kinematic, HRV, EMG, epidemiology.

The adversarial framing: What if the primary limiting factor in athlete monitoring
is not the accuracy of sensors or ML models, but organizational and behavioral
barriers that prevent effective use of data that already exists? This angle would
surface if technology adoption, coach compliance, and athlete monitoring culture
literature shows that existing (non-ML) tools are underused due to implementation
failures.

Source type (academic): Psychology of Sport and Exercise, Journal of Applied Sport
  Psychology, Implementation Science, Computers in Human Behavior
Source type (practitioner): Sports analytics practitioner community surveys, coaching
  body surveys (BASES, NSCA), athlete monitoring adoption case studies

Queries:
  Q1: athlete monitoring technology adoption barriers coach compliance sport training
  Q2: data-driven coaching decision making implementation barriers sport
  Q3: coach knowledge translation sports science evidence gap athlete monitoring practice
  Q4: athlete monitoring compliance trust algorithm coach autonomy sport performance

Coverage-gap note: This angle is structurally independent from A1–A8. Dispatch it
  in a fresh research context with no prior results from A1–A8 loaded. If run after
  confirmatory angles, the ADVERSARIAL-FLAGGED requirement has been violated.
```

---

## ANGLE C1: Industrial prognostics and predictive maintenance applied to athlete monitoring

```
ANGLE C1: Industrial prognostics / predictive maintenance methodology applied to
  athlete sensor monitoring (cross-disciplinary)
================================================================================
Vocabulary tradition: Industrial prognostics / predictive maintenance (PHM)
  [NOT in intake brief — cross-disciplinary tradition]
Angle type: Cross-disciplinary
Predicted research character: empirical (from industrial PHM domain;
  application transfer to sports is expected to be a gap)
What to extract: Remaining useful life (RUL) estimation methods, anomaly detection
  under class imbalance, sensor fusion for multimodal data streams, threshold
  calibration under sparse failure labels — then check for sports/human applications
  or direct methodological transfer papers

CROSS-DISCIPLINARY GENERATION NOTE: Generating from industrial PHM / prognostics
  vocabulary, NOT from sports science or ML-for-sports framing. This tradition uses
  "remaining useful life," "health index," "degradation trajectory," "condition
  monitoring" — terms absent from all intake brief traditions.

Source type (academic): IEEE Transactions on Industrial Electronics, Mechanical
  Systems and Signal Processing (MSSP), PHM Society Annual Conference proceedings,
  Reliability Engineering and System Safety
Source type (practitioner): NASA Prognostics Center repositories (GitHub), PHM
  challenge competition datasets and solution repositories (IEEE PHM Challenge)

Queries:
  Q1: remaining useful life prediction sensor data prognostics health management
      sparse failure labels
  Q2: predictive maintenance machine learning sensor fusion rare event anomaly
      detection imbalanced
  Q3: condition monitoring threshold calibration class imbalance failure prediction
      physiological human
  Q4: prognostics health management wearable sensor human performance degradation
      monitoring

SPECIFICITY GATE: Q4 combines PHM vocabulary with human monitoring — run without
  expansion (niche combination; expansion would degrade retrieval).

Coverage-gap note: The transfer from industrial PHM to athlete monitoring has not
  been systematically reviewed. This angle is expected to surface methodology
  papers from PHM that researchers in sports science have not yet applied. The
  gap between C1 results and A1–A8 results is itself a finding — document what
  PHM methods are NOT yet in the sports literature.
```

---

# SECTION 4: QUALITY GATE DOCUMENTATION

Procedure: angle-quality.md — all four gates

---

## Gate 1 — Completeness checks

**Item: Null-hypothesis angle present**
Check: ANGLE N1 explicitly framed as "what evidence shows ML injury prediction does NOT work or does not generalize?" Query strings Q1–Q5 contain "failure," "negative result," "limitations," "insufficient evidence," "does not work," "false positive."
Result: PASS

**Item: Adversarial angle present**
Check: ANGLE D1 is labeled `[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]`.
Result: PASS

**Item: Cross-disciplinary angle present**
Check: ANGLE C1 targets industrial prognostics / predictive maintenance. Cross-checking against intake brief candidate traditions: Sports science, ML/AI, Sports medicine/epidemiology, Biomedical engineering/sensor technology, Biomechanics, Measurement theory, Data science/statistics, Digital health/mHealth. None of these is industrial prognostics / PHM.
Result: PASS

**Item: Source-type coverage**
Domain maturity classified as MIXED (academic-leaning). Practitioner sources required. Present in: A1 (commercial sports analytics vendor reports), A2 (GitHub repositories), A3 (national federation reports), A4 (Catapult validation documents), A7 (GitHub sports ML benchmarks), A8 (consumer wearable vendor white papers), D1 (coaching body surveys), C1 (NASA PHM GitHub repositories).
Result: PASS

**Item: Vocabulary-tradition map populated**
Check: Coverage map has 8 named traditions from intake brief + 1 cross-disciplinary tradition. Coverage map was populated before any angle was written (Step 0). ≥2 distinct traditions: Yes (8+1=9).
Result: PASS

**Gate 1 verdict: PASS**

---

## Gate 2 — Distinctness checks

**Boolean-connective test — flagged pairs:**

*A4 vs. A8:*
- A4 most distinctive terms: IMU, criterion measure, GPS accuracy, research-grade
- A8 most distinctive terms: Apple Watch, Garmin, Fitbit, consumer wearable, mHealth
- Would "wearable validity athlete" OR "consumer wearable accuracy sport" retrieve the same documents?
- Assessment: Partially overlapping, but scope-split (research-grade vs. consumer-grade) produces meaningfully different corpora. A4 retrieves laboratory validation studies of professional sport sensor suites; A8 retrieves mass-market device accuracy studies in non-elite populations. The overlap is in the general concept of "wearable validity" but the specific papers differ by device type and population.
- Resolution applied: Explicit SCOPE NOTE added to both A4 and A8 in the angle records; "research-grade instrumentation" vs. "consumer/commercial off-the-shelf." The scope split is documented, not just asserted.
- Result: PASS WITH SCOPE-SPLIT APPLIED

*A2 vs. A7:*
- A2 most distinctive terms: LSTM, random forest, deep learning, feature importance, transfer learning
- A7 most distinctive terms: survival analysis, class imbalance, SMOTE, temporal cross-validation, data leakage
- Assessment: A2 retrieves papers proposing ML architectures; A7 retrieves statistical methodology papers (how to validate, how to handle rare events). These are structurally different paper types with different authors and venues.
- Result: PASS

*A3 vs. A7:*
- A3 most distinctive terms: injury incidence, prospective cohort, overuse injury, epidemiology
- A7 most distinctive terms: survival analysis, class imbalance, temporal cross-validation
- Assessment: A3 retrieves sport epidemiology cohort studies; A7 retrieves statistical methodology papers. Different venues (BJSM vs. Statistics in Sports / arXiv).
- Result: PASS

*N1 vs. A1:*
- N1 is the disconfirming variant of the sports science / exercise physiology tradition. Same base tradition as A1 but opposite framing.
- Per angle-quality.md Gate 2: "Two non-null-hypothesis, non-adversarial angles sharing the same tradition label FAIL." N1 IS the null-hypothesis angle — the shared-label exception applies.
- Result: PASS (null-hypothesis exception applies)

*All other pairs:* Tradition labels are distinct; most-distinctive terms do not appear in adjacent angles. Formal Boolean-connective test not required.

**Vocabulary-tradition distinctness:**
Every angle has a different vocabulary-tradition label:
A1: Sports science/exercise physiology | A2: ML/AI | A3: Sports medicine/epidemiology | A4: Biomedical engineering/sensor technology | A5: Biomechanics | A6: Measurement theory/psychometrics | A7: Data science/statistics | A8: Digital health/mHealth | N1: Sports science (disconfirming variant — exception applies) | D1: Organizational behavior/coaching practice | C1: Industrial prognostics/PHM
Result: PASS

**Gate 2 verdict: PASS** (A4/A8 scope-split documented; N1 null-hypothesis tradition-label exception applied)

---

## Gate 3 — Launchability checks

**Has at least one concrete query string:**
All 11 angles contain at least one query string in the "Queries:" field that can be pasted directly into a search box.
Result: PASS

**No placeholder vocabulary:**
Scanning all query strings for "TBD," "to be determined," "[fill in]," "insert term":
None found.
Result: PASS

**Source type is named:**
All 11 angles name specific platforms:
- A1: PubMed, SPORTDiscus, arXiv cs.LG
- A2: arXiv cs.LG, IEEE Transactions on Neural Systems, Sensors (MDPI), GitHub
- A3: British Journal of Sports Medicine, American Journal of Sports Medicine, PubMed
- A4: IEEE Transactions on Instrumentation and Measurement, Journal of Sports Sciences, Sensors (MDPI)
- A5: Journal of Biomechanics, Journal of Orthopaedic and Sports Physical Therapy
- A6: Measurement in Physical Education and Exercise Science, Journal of Strength and Conditioning Research
- A7: arXiv cs.LG, Statistics in Sports, Journal of Statistical Software, GitHub
- A8: npj Digital Medicine, JMIR mHealth and uHealth, Sensors, JMIR
- N1: British Journal of Sports Medicine, arXiv cs.LG
- D1: Psychology of Sport and Exercise, Journal of Applied Sport Psychology, Implementation Science
- C1: IEEE Transactions on Industrial Electronics, PHM Society proceedings, NASA Prognostics GitHub
Result: PASS

**Gate 3 verdict: PASS**

---

## Gate 4 — Scoring prohibition

**No LLM self-evaluation ranking:**
Scanning all angle records for: "most promising," "most relevant," "most novel," "strongest angle," "likely to be most useful":
None found. No filtering or ranking was performed during generation. Structural criteria only: vocabulary-tradition coverage, source-type coverage, null-hypothesis presence, Boolean-connective distinctness.
Result: PASS

**No implicit quality assessment:**
No angle record contains subjective quality language.
Result: PASS

**Gate 4 verdict: PASS**

---

## Gate summary

```
GATE SUMMARY
============
Gate 1 — Completeness: PASS
  - Null-hypothesis angle: present (N1)
  - Adversarial angle: present (D1, ADVERSARIAL-FLAGGED)
  - Cross-disciplinary angle: present (C1, industrial prognostics / PHM)
  - Source-type coverage: practitioner sources present across 8 of 11 angles
  - Vocabulary-tradition map: populated with 8+1 traditions

Gate 2 — Distinctness: PASS
  - Flagged pairs: A4/A8 (research-grade vs. consumer-grade scope split applied
    and documented); N1/A1 (same base tradition — null-hypothesis exception applies)
  - No small-literature flag needed (corpus is large for this domain)

Gate 3 — Launchability: PASS
  - All 11 angles have concrete runnable query strings
  - No placeholder vocabulary found
  - All source types named to specific platform level

Gate 4 — Scoring prohibition: PASS
  - No LLM self-evaluation language found
  - Structural criteria only

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG: All 8 intake-brief traditions were enumerated by
     LLM only (Source B unavailable). A survey-paper probe is recommended before
     treating the tradition list as complete. Undiscovered traditions — if any — are
     most likely to be: rehabilitation science / physiotherapy, sports nutrition /
     dietary monitoring, or wearable human-computer interaction / UX design.
  2. A4/A8 scope-split: The scope boundary (research-grade vs. consumer-grade
     instrumentation) was inferred, not stated by the user. User should confirm
     whether both are in scope or whether one should be deprioritized.
  3. ANGLE D1 adversarial separation: This angle must be dispatched in a fresh
     research context with no results from A1–A8 loaded. The kit cannot enforce
     this at execution time — human oversight of dispatch order required.
  4. C1 transfer gap: The PHM cross-disciplinary angle is expected to produce
     industrial methods results, not sports-specific papers. The value is in
     identifying PHM methods not yet applied to sports. This requires human
     synthesis judgment — an automated agent would not naturally flag "this PHM
     method from C1 is not yet in any A1–A8 result."
```

---

# SECTION 5: SELF-CHECK (Rule 6 — after-every-task)

Per CLAUDE.md angle-gen-kit behavioral contract Rule 6: name what is missing, incomplete, or questionable before reporting done.

**What is missing:**

1. **Source B (survey-paper probe) is absent.** The vocabulary-tradition list was derived entirely from LLM enumeration. The most likely undetected traditions are:
   - Rehabilitation science / physiotherapy (return-to-play monitoring, functional assessment via wearables)
   - Sports nutrition / dietary monitoring (integrated load management including fueling state)
   - Human-computer interaction / UX design (wearable usability, data visualization for coaches)
   If any of these is relevant to the user's scope, at least one angle is missing.

2. **No angle covers real-time or in-game monitoring.** All confirmatory angles implicitly assume longitudinal training-period monitoring (days to weeks). In-game or within-session real-time injury prediction (e.g., detecting fatigue spikes mid-match) is a distinct literature not covered.

3. **The A4/A8 scope split was user-inferred.** The user did not distinguish research-grade from consumer-grade wearables. This split should be confirmed before dispatching both angles — if the user's interest is only in consumer-grade devices, A4 may be deprioritized.

4. **Cross-tradition differential may be low for this domain.** Per CLAUDE.md deployment constraint (INT-10 FM4): sports science + ML is moderately well-represented in LLM training data. The coverage-gap conditioning likely produced LOW-TO-MODERATE differential above a baseline frontier-model enumeration. The primary kit value here is structural completeness (null-hypothesis, adversarial, cross-disciplinary slots), not vocabulary-discovery novelty.

5. **D1 adversarial angle requires separate dispatch context.** The ADVERSARIAL-FLAGGED label is a requirement but not an enforcement mechanism. The downstream user must honor it.

**What is questionable:**

- The cross-disciplinary tradition (industrial prognostics / PHM) is the highest-novelty choice but also the highest-transfer-gap choice — the connection from RUL estimation to athlete injury is conceptually sound but has not (to LLM knowledge) been systematically applied. C1 may return primarily industrial papers with no direct sports application. This is a feature (methodology transfer opportunity), not a defect — but the user should know to expect that.

**Proposing X — proceeding unless redirected:** Run Source B (survey-paper probe) in a context with web access on query `"athlete injury prediction" wearable sensor machine learning survey 2023 2024 2025` and compare title vocabulary against the 8 traditions listed. Any title term not already in the list is a vocabulary gap candidate that would add a 9th+ angle or revise existing angle scope.
