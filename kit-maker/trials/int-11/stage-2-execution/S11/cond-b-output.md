# angle-gen-kit Trial Output — INT-11 / S11 / Cond-B
**Topic:** "I want to research VO2max as a predictor of endurance performance."
**Date:** 2026-07-07
**Model:** claude-sonnet-4-6
**Context:** Subagent (Source B unavailable)

---

# PART 1: INTAKE BRIEF

## Step 1 — Sparse-input parsing

**Target concept:** VO2max as a predictor of endurance performance

**Anchor vocabulary from user input:**
- "VO2max" — exercise physiology tradition (user entered from the physiological measurement framing)
- "predictor" — statistical / epidemiological tradition (implies a quantitative causal or correlational model)
- "endurance performance" — sports science / athletic performance tradition

**Scope signals:** None stated. User did not specify: sport type, population (recreational vs. elite), date range, comparison predictors, or outcome metric (race time, time to exhaustion, power output).

---

## Step 2 — Vocabulary bootstrap

### Source A — LLM translation

**"VO2max" synonyms and adjacent terms NOT used by the user:**
- Maximal oxygen uptake, maximal oxygen consumption, peak VO2, VO2peak
- Aerobic capacity, maximal aerobic capacity, aerobic power
- Cardiorespiratory fitness (CRF), cardiovascular fitness, aerobic fitness
- Maximal aerobic power output, peak aerobic capacity

**"endurance performance" synonyms and adjacent terms NOT used by the user:**
- Aerobic endurance, submaximal performance, exercise capacity
- Race performance, time-trial performance, competitive endurance performance
- Marathon performance, cycling time trial, triathlon, long-distance running performance
- Time to exhaustion, critical speed, critical power, exercise tolerance
- Performance index, relative performance capacity

**"predictor" synonyms and adjacent terms NOT used by the user:**
- Determinant, correlate, explanatory variable, performance variable
- Biomarker, physiological marker, performance indicator
- Explained variance, R-squared, predictive coefficient, criterion variable
- Performance predictor model, regression coefficient, partial correlation

**Absent-term signal (Source C — terms LLM would expect but user did NOT use):**
- Running economy / movement economy (well-established co-predictor alongside VO2max)
- Lactate threshold / ventilatory threshold / anaerobic threshold (major competing predictor)
- Fractional utilization (% VO2max sustainable in competition — key moderating variable)
- Critical power / critical speed (mechanistically related, distinct tradition)
- Trainability / heritability (genetic dimension user did not mention)
- Peak power output (cycling-specific performance variable)
- Maximal lactate steady state (MLSS — submaximal threshold concept)

User absence from all of these suggests they are entering from a high-level "VO2max = fitness" framing, possibly without detailed sport-science vocabulary. Vocabulary gap = SIGNIFICANT — the absent terms represent the most academically prominent competing concepts in this literature.

**Vocabulary traditions identified:**

| Tradition | Representative Terms |
|-----------|---------------------|
| 1. Exercise physiology / sports science | VO2max, maximal oxygen uptake, running economy, lactate threshold, ventilatory threshold, fractional utilization, aerobic power |
| 2. Clinical cardiology / cardiorespiratory fitness | Cardiorespiratory fitness, peak VO2, exercise tolerance, METs, cardiac output, stroke volume, oxygen delivery |
| 3. Biostatistics / epidemiology | Predictor, explained variance, R-squared, multivariate regression, effect size, correlation coefficient, incremental validity |
| 4. Athletic coaching / applied sport science | Talent identification, athlete selection, training load, competition performance, performance monitoring, race-specific fitness |
| 5. Genetics / genomics | VO2max heritability, trainability, ACTN3, ACE gene, polygenic score, twin study, genetic determinants, interindividual variation |
| 6. Measurement science / exercise testing methodology | Test-retest reliability, coefficient of variation, ergospirometry, direct measurement, indirect estimation, intraclass correlation coefficient, measurement error |

NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

### Source B status
Source B unavailable — this kit is running in a subagent context without web access. Severity assessment: **MODERATE** — Source A + Source C together identified 6 distinct vocabulary traditions, exceeding the ≥2 threshold. Proceeding with VOCABULARY SELF-REPORT FLAG applied.

```
Source B status: UNAVAILABLE — MODERATE (Source A+C produced 6 distinct traditions; exceeds minimum ≥2 threshold)
```

---

## Step 3 — Question-type classification

**Classification: EXPLORATORY**

**Decision basis:** The user's prompt does not contain explicit comparison language ("A vs. B") or a named intervention-outcome structure (e.g., "does VO2max predict better than lactate threshold?"). The word "predictor" implies a directional hypothesis but does not specify a comparison population, comparison predictor, or outcome measure. Default to EXPLORATORY per intake.md Step 3 decision rule.

**Structural note:** The "predictor" framing gives this question STRUCTURED aspects — it implies a testable quantitative relationship (VO2max → endurance performance). If the user later specifies a comparison predictor (VO2max vs. running economy) or population (elite vs. recreational), the question can be reformulated as STRUCTURED and PICO/PECO applied at that stage. Exploratory-first is the correct entry point.

---

## Step 4 — Intake brief (all fields populated)

```
INTAKE BRIEF
============
Topic: How well does VO2max predict endurance performance, and under what conditions does this
       predictive relationship hold, fail, or compete with other physiological and non-physiological
       predictors?

Anchor vocabulary: "VO2max" (exercise physiology tradition); "predictor" (biostatistics/epidemiology
                   tradition); "endurance performance" (sports science tradition)

Candidate vocabulary traditions:
  1. Exercise physiology / sports science — VO2max, maximal oxygen uptake, running economy, lactate
     threshold, ventilatory threshold, fractional utilization, aerobic capacity
  2. Clinical cardiology / cardiorespiratory fitness — peak VO2, cardiorespiratory fitness, exercise
     tolerance, METs, cardiac output, stroke volume, oxygen delivery
  3. Biostatistics / epidemiology — predictor, explained variance, R-squared, regression coefficient,
     incremental validity, multivariate model, effect size
  4. Athletic coaching / applied sport science — talent identification, athlete selection, performance
     monitoring, training load, race performance, competition-specific fitness
  5. Genetics / genomics — VO2max heritability, trainability, ACTN3, ACE, polygenic score, twin
     studies, genetic determinants, interindividual variation
  6. Measurement science / exercise testing methodology — test-retest reliability, coefficient of
     variation, ergospirometry, direct measurement, intraclass correlation, measurement error

  NOTE: Vocabulary traditions listed here are LLM self-reported. Vocabulary-discovery pass
  recommended before treating this list as exhaustive.

Question type: EXPLORATORY
  (No explicit comparison or intervention-outcome structure; "predictor" implies directional
  hypothesis but user has not specified comparison predictor or population)
  Note: Reformulable as STRUCTURED if user specifies a comparison predictor or population.

Scope markers: None stated — inferred scope: general relationship between VO2max and endurance
  performance across endurance sports and populations; not restricted to elite athletes, a specific
  sport, or a specific outcome metric. Cross-sport and cross-population coverage is the default.

Known exclusions: None stated

Domain maturity estimate: academic-heavy
  Basis: VO2max research dates to A.V. Hill (1920s); anchor vocabulary ("VO2max," "predictor") is
  academic; the topic has high-density peer-reviewed coverage in sports medicine, exercise
  physiology, and clinical cardiology journals; user did not mention tools, apps, or practical
  implementations, suggesting academic rather than practitioner entry.

Survey paper status: NOT FOUND (Source B unavailable — subagent context)
  Source B status: UNAVAILABLE — MODERATE (Source A+C produced 6 distinct traditions)
  Recommendation: Before treating angle list as comprehensive, run survey-paper probe:
  "VO2max endurance performance predictor systematic review" in PubMed or Semantic Scholar;
  examine title vocabulary for traditions not listed above.

Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):
  Target tradition: Psychometrics / measurement theory
  Selection basis: Same real-world problem from human perspective — predicting a criterion
  performance outcome from a single measured variable is formally identical to the psychometric
  problem of criterion-related (predictive) validity. Psychometrics has developed formal frameworks
  for predictive validity coefficients, criterion contamination, regression to the mean, incremental
  validity, and the test-criterion relationship that are directly applicable to VO2max-performance
  prediction but are absent from exercise physiology vocabulary. This tradition is unlikely to appear
  in a standard sports science literature search.
```

---

## Step 6 — Intake gate check

- [x] Topic field populated (not "TBD")
- [x] Candidate vocabulary traditions has ≥2 entries (6 traditions listed)
- [x] Question type classified as EXPLORATORY
- [x] Cross-disciplinary tradition pre-committed (Psychometrics / measurement theory; selection basis stated)

**Gate: PASS. Proceeding to angle-generation.md.**

---

# PART 2: COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: Exercise physiology / sports science
  Representative terms: VO2max, maximal oxygen uptake, running economy, lactate threshold,
                        ventilatory threshold, fractional utilization, aerobic capacity, VO2peak
  Planned angle slot: Confirmatory A1
  Gap flag: No — primary vocabulary tradition; well-covered at A1

Tradition 2: Clinical cardiology / cardiorespiratory fitness
  Representative terms: peak VO2, cardiorespiratory fitness, exercise tolerance, METs, cardiac
                        output, stroke volume, oxygen delivery, cardiovascular fitness
  Planned angle slot: Confirmatory A2
  Gap flag: No — covered at A2 with clinical/cardiac vocabulary distinct from A1

Tradition 3: Biostatistics / epidemiology
  Representative terms: predictor, explained variance, R-squared, regression coefficient,
                        multivariate model, incremental validity, effect size, partial correlation
  Planned angle slot: Confirmatory A3
  Gap flag: No — statistical modeling facet; distinct from physiological framing in A1/A2

Tradition 4: Athletic coaching / applied sport science
  Representative terms: talent identification, athlete selection, performance monitoring,
                        training load, competition performance, race-specific fitness, periodization
  Planned angle slot: Confirmatory A4
  Gap flag: No — applied/practical facet distinct from mechanistic framing in A1

Tradition 5: Genetics / genomics
  Representative terms: VO2max heritability, trainability, ACTN3, ACE gene, polygenic score,
                        twin studies, genetic determinants, interindividual variation, QTL
  Planned angle slot: Confirmatory A5
  Gap flag: No — genetic/heritable component; distinct vocabulary tradition from A1–A4

Tradition 6: Measurement science / exercise testing methodology
  Representative terms: test-retest reliability, coefficient of variation, ergospirometry,
                        direct measurement, intraclass correlation coefficient, measurement error,
                        protocol effects, indirect estimation
  Planned angle slot: Confirmatory A6
  Gap flag: No — measurement reliability facet; distinct from performance prediction facet in A1/A3

Traditions NOT yet represented in the planned list:
  All traditions from the intake brief have at least one planned angle slot.
  Additional slots: N1 (null-hypothesis — disconfirming variant of exercise physiology tradition)
  and D1 (adversarial — sport psychology / tactical / non-physiological tradition, not in intake brief).

Cross-disciplinary slot (required):
  Target tradition: Psychometrics / measurement theory
  Basis for selection: Same real-world problem from human perspective — predicting a criterion
  performance outcome from a measured variable (VO2max → performance is structurally identical to
  test score → criterion performance in psychometrics). Psychometrics has a mature formal framework
  for criterion-related validity, predictive validity coefficients, and incremental validity that
  the sports science literature does not draw from directly. This tradition is verified NOT to appear
  in any of the six intake brief traditions.
```

---

# PART 3: TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Exercise physiology / sports science): exercise physiology tradition
Slot A2 (Confirmatory — Clinical cardiology / cardiorespiratory fitness): clinical/cardiac tradition
Slot A3 (Confirmatory — Biostatistics / epidemiology): statistical modeling tradition
Slot A4 (Confirmatory — Athletic coaching / applied sport science): applied coaching tradition
Slot A5 (Confirmatory — Genetics / genomics): genetics tradition
Slot A6 (Confirmatory — Measurement science / exercise testing): measurement science tradition
Slot N1 (Null-hypothesis): assigned — disconfirming variant; evidence VO2max fails to predict or
         is limited as a predictor; vocabulary: "does not predict," "failure," "limitations,"
         "poor indicator," "ceiling effect"
Slot D1 (Adversarial): starting vocabulary from sport psychology / tactical / non-physiological
         tradition — NOT FROM: exercise physiology, clinical cardiology, biostatistics,
         applied coaching, genetics, measurement science
Slot C1 (Cross-disciplinary): Psychometrics / measurement theory (from coverage map;
         matches intake brief pre-commit)

Total allocated slots: 9
Expected angle count: 9 (within 5–12 standard range)
```

---

# PART 4: ANGLE LIST

---

## ANGLE N1: Evidence that VO2max fails to predict or is insufficient as a predictor of endurance performance
```
Vocabulary tradition: Exercise physiology / sports science (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Conditions under which VO2max fails to discriminate performance differences,
negative results, scope limitations, populations or sports where VO2max prediction breaks down,
comparisons where other predictors explain more variance than VO2max, ceiling effects in elite
athletes, evidence of poor predictive validity for specific race distances or conditions.

Source type (academic): PubMed / Semantic Scholar (sport science journals: Int J Sports Physiol
                        Perform, Med Sci Sports Exerc, J Appl Physiol)
Source type (practitioner): Deprioritized — academic-heavy topic; negative results appear in
                            peer-reviewed literature rather than practitioner sources.

Queries:
  Q1: VO2max limitations predictor endurance performance elite athletes review
  Q2: VO2max "poor predictor" OR "does not predict" OR "fails to discriminate" endurance performance
  Q3: endurance performance predictors VO2max running economy lactate threshold explanatory variance
      comparison elite
  Q4: VO2max ceiling effect homogeneous group performance prediction limits trained athletes

Coverage-gap note: This angle targets published literature reporting negative or limiting findings.
Literature reporting partial failures (VO2max works at some levels but not others) may be scattered
across positive-result papers rather than concentrated in negative-result papers; a targeted query
for "scope conditions" may be needed as a follow-up.
```

---

## ANGLE A1: Core correlational and mechanistic relationship between VO2max and endurance performance (exercise physiology tradition)
```
Vocabulary tradition: Exercise physiology / sports science
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Correlation coefficients between VO2max and race/time-trial performance,
effect sizes, how VO2max relates to the other two primary predictors (running economy, lactate
threshold / fractional utilization), relative explained variance, moderators (sport type,
distance, performance level), review and meta-analytic summaries.

Source type (academic): PubMed / Semantic Scholar (target journals: Med Sci Sports Exerc,
                        J Appl Physiol, Int J Sports Physiol Perform, Eur J Appl Physiol)
Source type (practitioner): Deprioritized — academic-heavy topic.

Queries:
  Q1: VO2max correlation endurance performance systematic review meta-analysis marathon running
      cycling
  Q2: maximal oxygen uptake endurance performance predictor mechanism aerobic physiology review
  Q3: VO2max running economy lactate threshold fractional utilization performance predictors
      relative contribution
  Q4: "maximal oxygen consumption" "endurance performance" predictor correlation effect size
      athletes

Coverage-gap note: This angle covers the core exercise physiology literature. The interaction
between VO2max and its competing predictors (running economy, fractional utilization) may require
a separate angle if the user wants to go deeper on that triangular relationship.
```

---

## ANGLE A2: Cardiorespiratory fitness framing — clinical and cardiac physiology perspective on VO2max and performance capacity
```
Vocabulary tradition: Clinical cardiology / cardiorespiratory fitness
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How clinical cardiorespiratory fitness literature conceptualizes and measures
aerobic performance capacity, cardiac determinants of VO2max (stroke volume, cardiac output, oxygen
extraction), how clinical measures of exercise tolerance relate to athletic performance, any
translation gaps between clinical and athletic populations.

Source type (academic): PubMed (clinical journals: Circulation, Eur Heart J, J Am Coll Cardiol,
                        J Cardiopulm Rehabil Prev)
Source type (practitioner): Deprioritized — clinical/academic-heavy domain.

Queries:
  Q1: peak VO2 exercise capacity cardiovascular performance determinants cardiac physiology
  Q2: cardiorespiratory fitness aerobic performance exercise tolerance cardiac output stroke volume
      VO2max
  Q3: oxygen delivery cardiac determinants VO2max endurance performance physiological
  Q4: VO2max exercise testing cardiorespiratory fitness performance prediction clinical
      cardiorespiratory

Coverage-gap note: Clinical populations (cardiac patients, sedentary adults) differ from athletic
populations in VO2max range and performance relevance. Studies in clinical populations may not
transfer directly to athletic performance prediction. This gap should be noted when extracting.
```

---

## ANGLE A3: Statistical modeling and explained variance — how much of endurance performance variance does VO2max explain?
```
Vocabulary tradition: Biostatistics / epidemiology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: R-squared values and partial R-squared for VO2max in multivariate performance
models, regression coefficients, incremental validity (does VO2max add predictive value beyond
other physiological variables?), moderator analyses, meta-analytic effect sizes, confidence
intervals, predictive model comparisons.

Source type (academic): Semantic Scholar / PubMed (target: sports science with statistical
                        modeling focus, epidemiological exercise literature)
Source type (practitioner): Deprioritized — statistical modeling is academic-heavy.

Queries:
  Q1: VO2max explained variance R-squared endurance performance regression model statistical
  Q2: multivariate predictors endurance performance VO2max running economy lactate threshold
      relative contribution statistical model
  Q3: VO2max incremental validity performance prediction multiple regression physiological
      variables
  Q4: VO2max performance correlation effect size meta-analysis systematic review statistical
      endurance

Coverage-gap note: Many sports science studies report correlations but not multivariate regression
models with partial R-squared. Papers that explicitly model the incremental contribution of VO2max
beyond other predictors are the target here; they may be a smaller subset of the literature.
```

---

## ANGLE A4: Applied coaching and talent identification — practical predictive use of VO2max in athletic contexts
```
Vocabulary tradition: Athletic coaching / applied sport science
Angle type: Confirmatory
Predicted research character: consensus
What to extract: How VO2max is used in practice for athlete selection, talent identification, and
performance monitoring; documented cases of VO2max-based predictions in real competitive contexts;
practitioner frameworks for VO2max testing and performance forecasting; longitudinal studies
following athletes whose VO2max predicts (or fails to predict) competition outcomes.

Source type (academic): Semantic Scholar / Int J Sports Physiol Perform / Journal of Sports
                        Sciences
Source type (practitioner): Available — this tradition produces technical reports, coaching
                            manuals, and applied sport science documents.

Queries:
  Q1: VO2max talent identification athlete selection endurance sports performance prediction
      applied
  Q2: VO2max field test competition performance prediction athletic training longitudinal
  Q3: VO2max monitoring performance change endurance athletes practical applied sport science
  Q4: VO2max training response competition outcome prediction coach applied periodization

Coverage-gap note: Applied coaching literature may be in grey literature (national governing body
documents, coaching federation reports) not indexed on Semantic Scholar. A broader practitioner
search using Google Scholar may be needed for this angle.
```

---

## ANGLE A5: Genetic and heritability framing — VO2max as a heritable trait and its implications for performance prediction
```
Vocabulary tradition: Genetics / genomics
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Heritability estimates for VO2max, genetic variants associated with high VO2max,
trainability (VO2max response to training as a predictor), polygenic predictors of aerobic
capacity, how genetic ceiling on VO2max affects its performance prediction at population level,
interindividual variation in VO2max trainability as a confound for performance prediction.

Source type (academic): PubMed / Semantic Scholar (target: genetics journals, exercise genomics:
                        J Appl Physiol, Physiol Genomics, Med Sci Sports Exerc)
Source type (practitioner): Deprioritized — genetics research is academic-heavy.

Queries:
  Q1: VO2max heritability twin study genetic contribution endurance performance prediction
  Q2: genetic variants VO2max aerobic capacity endurance performance ACTN3 ACE trainability
  Q3: VO2max trainability exercise training response individual differences genetic determinants
  Q4: polygenic score VO2max aerobic capacity endurance performance genomics prediction

Coverage-gap note: Genetic prediction of athletic performance is an active and sometimes contested
area (see adversarial angle D1 for the mechanistic challenge). The adversarial angle should be run
in a separate context. This angle covers the confirmatory genetics literature only.
```

---

## ANGLE A6: Measurement reliability and methodology — how test-retest reliability of VO2max affects its predictive validity
```
Vocabulary tradition: Measurement science / exercise testing methodology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Test-retest reliability coefficients (ICC, CV%) for VO2max, differences between
direct ergospirometry and indirect estimation methods, protocol effects on VO2max values (treadmill
vs. cycle, slope vs. speed increment protocols), how measurement error in VO2max limits its ceiling
predictive validity (attenuation formula), standard error of measurement, minimal detectable change.

Source type (academic): PubMed / Semantic Scholar (target: measurement-focused sport science,
                        exercise testing journals)
Source type (practitioner): Available — exercise testing methodology appears in clinical exercise
                            physiology practice guidelines and sports science field testing manuals.

Queries:
  Q1: VO2max test-retest reliability intraclass correlation coefficient coefficient variation
      endurance performance
  Q2: VO2max direct measurement indirect estimation agreement ergospirometry protocol reliability
  Q3: VO2max measurement error attenuation predictive validity performance correction reliability
  Q4: VO2max maximal graded exercise test protocol differences performance correlation sport
      methodology

Coverage-gap note: The relationship between VO2max measurement reliability and its predictive
validity ceiling is a methodological facet that may not be systematically addressed in the
performance prediction literature. Papers explicitly linking ICC/CV% of VO2max to its R-squared
with performance may be sparse — flag this at extraction if literature is thin.
```

---

## ANGLE C1: Psychometrics / measurement theory framing — criterion-related validity of VO2max as a performance predictor
```
Vocabulary tradition: Psychometrics / measurement theory [CROSS-DISCIPLINARY — not in intake brief]
Angle type: Cross-disciplinary
Predicted research character: gap (low expected volume; this vocabulary is rarely applied in sport
                              science literature; purpose is to surface any formal validity studies
                              using psychometric frameworks, and to identify methodology this
                              tradition offers that the sports science tradition has not applied)
What to extract: Any literature applying criterion-related validity frameworks (predictive validity,
concurrent validity, construct validity) to VO2max as a performance measure; psychometric
methodology for evaluating single-predictor performance models (regression to the mean, range
restriction correction, criterion contamination); incremental validity frameworks applied to
physiological predictors; any cross-disciplinary applications of validity theory to exercise
science.

Source type (academic): Semantic Scholar / PsycINFO / Journal of Applied Psychology /
                        Psychological Measurement / Applied Psychological Measurement
Source type (practitioner): Deprioritized — psychometrics is academic-heavy.

Queries:
  Q1: criterion validity physical fitness test performance prediction psychometric measurement
  Q2: predictive validity coefficient physiological biomarker performance criterion construct
      validity sport
  Q3: incremental validity single predictor physiological performance outcome measurement theory
  Q4: "criterion-related validity" fitness test sport performance measurement psychometrics
      validity

Coverage-gap note: This angle is likely to produce sparse results (GAP predicted research
character). Its value is twofold: (1) identifying any cross-disciplinary work that has applied
psychometric frameworks to VO2max; (2) surfacing methodological tools from psychometrics
(range restriction correction, criterion contamination) that could be applied by a researcher
who reads both literatures. Non-results here are informative — they identify a methodology
transfer opportunity.
```

---

## ANGLE D1: Non-physiological and psychological determinants of endurance performance as a challenge to VO2max primacy

**[ADVERSARIAL-FLAGGED: dispatch in a separate research context with no prior confirmatory results]**

```
Vocabulary tradition: Sport psychology / tactical / non-physiological determinants
  [Adversarial starting vocabulary — EXCLUDING: VO2max, maximal oxygen uptake, aerobic capacity,
  cardiorespiratory fitness, lactate threshold, running economy, explained variance, regression,
  genetic variants, ergospirometry, reliability]
Angle type: Adversarial [ADVERSARIAL-FLAGGED]
Predicted research character: empirical
What to extract: Evidence that non-physiological factors (psychological, tactical, environmental,
training quality, coaching, socioeconomic) predict or explain endurance performance independently
of VO2max; studies showing pacing strategy, mental toughness, or motivation accounts for
performance variance not captured by physiology; arguments that physiological testing systematically
overstates its predictive contribution; ecological critiques of laboratory-based prediction models.

Source type (academic): Semantic Scholar / PsycINFO / Journal of Sport and Exercise Psychology /
                        International Journal of Sport Psychology
Source type (practitioner): Available — this tradition produces coaching and sport psychology
                            practitioner literature with applied performance models.

Queries:
  Q1: endurance performance prediction non-physiological factors psychological determinants
      independent physiology
  Q2: pacing strategy performance determinant endurance race psychological tactical model
  Q3: mental toughness motivation endurance performance predictor psychological model sport
  Q4: training environment coaching quality socioeconomic endurance performance determinants
      prediction beyond physiology

Coverage-gap note: The adversarial framing here targets the claim that VO2max explains performance
variation as a causal mechanism. An alternative adversarial framing (VO2max as epiphenomenon of
actual causal variables — e.g., mitochondrial density, capillarization — rather than a cause itself)
could be a second adversarial angle if the user wants to go deeper on mechanistic challenge.
Note: run this angle in a fresh context with NO access to results from A1–A6 and C1. The
confirmation-bias structural separation requirement applies.
```

---

# PART 5: QUALITY GATE DOCUMENTATION

## Gate 1 — Completeness checks

- [x] **Null-hypothesis angle present:** ANGLE N1 is framed explicitly as "evidence that VO2max fails to predict." Queries contain "does not predict," "poor predictor," "fails to discriminate," "limitations," "ceiling effect." Disconfirming vocabulary is present. PASS.

- [x] **Adversarial angle present:** ANGLE D1 is labeled `[ADVERSARIAL-FLAGGED: dispatch in a separate research context with no prior confirmatory results]`. PASS.

- [x] **Cross-disciplinary angle present:** ANGLE C1 targets Psychometrics / measurement theory, which is NOT listed in the intake brief's six candidate vocabulary traditions. Verified: none of the intake brief traditions include psychometrics/measurement theory as a separate entry. PASS.

- [x] **Source-type coverage:** Domain maturity is academic-heavy; practitioner sources are deprioritized for most angles. ANGLE A4 (athletic coaching) and ANGLE D1 (adversarial / sport psychology) both explicitly assign practitioner sources as available. This is appropriate for the domain — the intake brief does not flag this as practitioner-heavy or mixed, so the practitioner-source-required condition does not apply strictly. The academic-heavy classification justifies the primarily academic source assignments. PASS.

- [x] **Vocabulary-tradition map populated:** Coverage map lists 6 distinct tradition names plus 1 cross-disciplinary tradition. ≥2 distinct traditions present. PASS.

**Gate 1: PASS**

---

## Gate 2 — Distinctness checks

**Boolean-connective test — angle pair checks:**

Pairs with greatest overlap risk (checked formally):

*N1 vs. A1:* N1 most distinctive query terms: "does not predict," "poor predictor," "fails to discriminate," "ceiling effect." A1 most distinctive terms: "correlation," "mechanism," "review," "meta-analysis." Would OR retrieve same documents? N1 targets negative-result papers; A1 targets confirmatory-result papers. The query framing ("does not predict" vs. "correlation predictor") would retrieve different subsets of the literature even within the same journals. PASS — different outcome framing, not synonyms.

*A1 vs. A3:* A1 focuses on physiological mechanism ("running economy," "lactate threshold," "aerobic physiology"). A3 focuses on statistical modeling ("R-squared," "regression," "explained variance," "incremental validity"). These retrieve overlapping papers but from different angles — A3 targets papers with explicit statistical modeling sections; A1 targets mechanistic/correlational papers. PASS — different facets (mechanistic vs. statistical).

*A1 vs. A4:* A1 uses exercise physiology vocabulary; A4 uses "talent identification," "athlete selection," "applied," "coaching," "longitudinal," "field test." Different application contexts and vocabulary pools. PASS.

*A3 vs. A6:* A3 asks about variance explained by VO2max in performance models; A6 asks about reliability of the VO2max measurement itself. These are different methodological facets (prediction vs. reliability). PASS — distinct facets confirmed.

*A4 vs. A6:* A4 is about practical use in coaching contexts; A6 is about measurement methodology. Non-overlapping vocabulary. PASS.

All remaining pairs (A1 vs. A2, A1 vs. A5, A2 vs. A3–A6, A3 vs. A4–A5, A4 vs. A5): Each pair uses vocabulary from genuinely distinct traditions (clinical/cardiac vs. sports science, genetics vs. biostatistics, etc.). No OR-retrieval synonymy detected.

C1 vs. all: Psychometrics vocabulary ("criterion validity," "predictive validity coefficient," "psychometrics," "criterion-related validity") does not appear in any of A1–A6 or N1 queries. PASS.

D1 vs. all: Adversarial vocabulary ("pacing strategy," "mental toughness," "non-physiological," "coaching quality," "socioeconomic") is explicitly excluded from all confirmatory angle query terms. PASS.

**Vocabulary-tradition distinctness check:** Each angle carries a distinct tradition label:
- N1: Exercise physiology (disconfirming variant) — distinct from A1 (confirmatory variant)
- A1: Exercise physiology / sports science
- A2: Clinical cardiology / cardiorespiratory fitness
- A3: Biostatistics / epidemiology
- A4: Athletic coaching / applied sport science
- A5: Genetics / genomics
- A6: Measurement science / exercise testing methodology
- C1: Psychometrics / measurement theory
- D1: Sport psychology / tactical / non-physiological

N1 and A1 share the exercise physiology tradition but are null-hypothesis vs. confirmatory variants — this is an explicitly permitted exception per Gate 2 rules. All other angles carry distinct tradition labels.

No two non-null, non-adversarial angles share a tradition label.

**Gate 2: PASS**

---

## Gate 3 — Launchability checks

**Has at least one concrete query string:** All nine angles contain at least one query string phrased as a runnable search. No angles contain only descriptions or questions. PASS for all angles.

**No placeholder vocabulary:** All query strings checked for TBD, [fill in], "insert term," or equivalent. No placeholders found in any of the 36 queries (4 per angle × 9 angles). PASS.

**Source type is named:** All angles name a specific platform or publication venue in both source-type fields:
- N1: PubMed / Semantic Scholar + specific journal names; practitioner deprioritized with explicit reason. PASS.
- A1–A6: All name specific platforms (PubMed, Semantic Scholar, arXiv equivalent journals). PASS.
- C1: Semantic Scholar / PsycINFO / specific journals. PASS.
- D1: Semantic Scholar / PsycINFO / specific journals + practitioner available. PASS.

**Gate 3: PASS**

---

## Gate 4 — Scoring prohibition

**LLM self-evaluation ranking:** No filtering, ranking, or prioritization of angles by perceived quality was performed during generation. Angle selection was driven entirely by:
1. Type allocation structure (N1, A1–A6, C1, D1) — required types filled
2. Vocabulary-tradition coverage from the coverage map — each tradition received an angle
3. Boolean-connective distinctness — no synonym pairs retained
No criterion of "this angle seems most promising" or "this seems most novel" was used. PASS.

**No implicit quality assessment phrases detected:** No angle record contains phrases like "this is the strongest angle" or "likely most useful." PASS.

**Gate 4: PASS**

---

## Gate Summary

```
GATE SUMMARY
============
Gate 1 — Completeness: PASS (null-hypothesis present, adversarial flagged, cross-disciplinary
         present, source-type coverage appropriate for academic-heavy domain,
         vocabulary-tradition map populated with 6 traditions + 1 cross-disciplinary)
Gate 2 — Distinctness: PASS (Boolean-connective test run on all high-risk pairs; no synonym
         pairs retained; N1/A1 tradition-sharing is permitted null-hypothesis exception;
         all other angles carry distinct tradition labels)
Gate 3 — Launchability: PASS (all 9 angles have concrete runnable query strings; no
         placeholders; source types named specifically for all angles)
Gate 4 — Scoring prohibition: PASS (no LLM self-evaluation ranking; no implicit quality
         assessment phrases)

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all 6 vocabulary traditions were enumerated by LLM only;
     Source B (survey-paper probe) was unavailable. Expected coverage: MODERATE, not FULL.
     Recommend running survey-paper probe ("VO2max endurance performance predictor systematic
     review" in PubMed or Semantic Scholar) before treating this angle list as exhaustive.
     Specifically: the Molecular biology / exercise biochemistry tradition (mitochondrial
     biogenesis, substrate utilization, cytochrome oxidase) was not included as a named
     tradition and may represent a gap if the user wants mechanistic depth beyond the
     physiology-level coverage in A1/A2.
  2. ADVERSARIAL EXECUTION NOTE — ANGLE D1 must be dispatched in a separate research context
     with no prior access to results from A1–A6 and C1. The downstream research agent must
     honor the ADVERSARIAL-FLAGGED label. This kit cannot enforce execution-time context
     separation.
  3. C1 SMALL-LITERATURE RISK — ANGLE C1 (Psychometrics / measurement theory) is predicted
     to produce sparse results (GAP research character). The Boolean-connective test was not
     applied against a literature probe — the small-literature exception may apply for this
     angle if the psychometrics/VO2max intersection has fewer than ~20 papers. Non-results
     are informative (methodology transfer opportunity); human judgment required to decide
     whether to merge with A6 (measurement science) if the corpus is empty.
  4. SCOPE ACCEPTANCE — Molecular biology / biochemistry tradition (mitochondrial density,
     substrate utilization, oxidative phosphorylation) is not covered in this angle list.
     This tradition addresses the mechanism by which VO2max relates to performance and could
     be a 10th angle. Scope accepted: omitted because (a) the user's EXPLORATORY question
     does not specifically ask for mechanism, and (b) A1 and A2 cover the physiology
     sufficiently for a first-pass survey. A mechanistic angle can be added if the user
     specifies interest in the causal mechanism.
```

---

# PART 6: SELF-CHECK (Rule 6 — After-every-task)

**What is missing, incomplete, or questionable in this output:**

1. **Source B gap is the primary structural limitation.** All 6 vocabulary traditions were LLM-enumerated. The VO2max literature is well-covered in LLM training (sports science, exercise physiology), so this is likely MODERATE risk, not HIGH RISK. But it is not verified without a survey paper probe. Before dispatch, run: `VO2max endurance performance predictor systematic review` in PubMed to catch any traditions I have not named.

2. **Molecular biology / biochemistry tradition is omitted (scope-accepted but logged).** The mechanistic level (mitochondrial biogenesis, oxidative phosphorylation, capillarization as mechanisms linking VO2max to performance) is not covered. If the user's goal includes understanding the mechanism — not just the prediction — a 10th angle is warranted. This needs a user scope decision.

3. **"Fractional utilization" tradition.** The topic of how fractional utilization of VO2max mediates performance prediction is closely related to A1 but could be a distinct sub-angle. Currently it is embedded in A1's query Q3 ("VO2max running economy lactate threshold fractional utilization"). If the user wants deeper coverage of the A1 tradition, splitting fractional utilization into its own angle is an option.

4. **Practical implication:** Before dispatching D1 (adversarial), ensure the research agent receives no materials from the other eight angles. The adversarial angle is the most likely to be run incorrectly in a same-context batch — the label must be honored.

**Next action (proceeding unless redirected):** Output is complete and dispatch-ready per all four quality gates. The next action is for the user to review scope acceptance decisions (items 2–3 above) and confirm whether a 10th mechanistic angle is wanted before dispatching to a research agent.

---

**Deployment note (per CLAUDE.md Weakness 7 — INT-10 update):** VO2max is a well-represented topic in LLM training data (exercise physiology and sports science are covered in LLM pretraining). Per Weakness 7, coverage-gap conditioning on well-represented training domains may produce NEAR-ZERO DIFFERENTIAL vs. unconstrained enumeration. The kit's primary value on this topic shifts to Q5 (actionability of angle formulation — concrete query strings, source targeting) and Q3 (precision via vocabulary separation), not Q1 (cross-tradition coverage breadth). A Source B probe would be needed to verify whether the 6 traditions listed are actually all the traditions in this literature.
