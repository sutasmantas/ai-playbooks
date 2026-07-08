# angle-gen-kit Execution — INT-11 S9 Condition B
**Topic:** "I want to research lactate threshold and its role in endurance performance."
**Execution context:** Subagent — Source B (web search / survey-paper probe) UNAVAILABLE
**Model:** claude-sonnet-4-6 (frontier tier — meets minimum model requirement)
**Date:** 2026-07-07

---

## DEPLOYMENT CONSTRAINT NOTICE

Source B (web search / survey-paper probe) is unavailable in this execution context (subagent / sandboxed).

Per CLAUDE.md deployment constraints:
- VOCABULARY SELF-REPORT FLAG is active — all vocabulary traditions were enumerated by LLM only
- Expected angle coverage: MODERATE, not FULL
- Cross-disciplinary angle may miss traditions that only appear in survey-paper title vocabulary
- Per weakness_register.md Weakness 7 empirical update (INT-10 FM4): lactate threshold in exercise physiology is a well-represented domain in LLM training data; cross-tradition conditioning differential is expected to be MODERATE rather than zero (exercise physiology is not LLM/AI research — it spans multiple subdisciplines with partially distinct vocabulary pools). Primary kit value shifts toward Q5 (actionability of angle formulation) and Q3 (precision of queries).

---

## PHASE 1 — INTAKE BRIEF

*(Following intake.md Steps 1–6)*

---

### Step 1 — Sparse-input parsing

| Element | Extracted |
|---------|-----------|
| Target concept | The role of lactate threshold in determining and predicting endurance exercise performance |
| Anchor vocabulary | "lactate threshold" (exercise physiology / sports science tradition); "endurance performance" (sports science / performance research tradition) |
| Scope signals | None stated |

**Absent-term signal (Source C):** User said "lactate threshold" and "endurance performance" but did NOT say: VO2max, MLSS (maximal lactate steady state), critical power, ventilatory threshold, running economy, training intensity distribution. The absence of "VO2max" and "MLSS" is notable — these are the most academically prominent associated constructs. Absence suggests the user is approaching from general curiosity or early exploration, not deep in the exercise physiology literature.

---

### Step 2 — Vocabulary bootstrap (Source A only — Source B unavailable)

**Source A — LLM translation:**

"lactate threshold" → synonyms and alternative framings in the literature:
- Lactate threshold 1 / LT1 (aerobic threshold)
- Lactate threshold 2 / LT2 (anaerobic threshold proper)
- Anaerobic threshold (AT) — historical term, still used clinically
- Maximal lactate steady state (MLSS) — gold standard operational definition
- OBLA — Onset of Blood Lactate Accumulation (4 mmol/L criterion)
- D-max method — mathematical detection of inflection point
- Individual anaerobic threshold (IAT)
- Lactate inflection point
- First / second ventilatory threshold (VT1 / VT2) — respiratory analog

"endurance performance" → synonyms and alternative framings:
- Time trial performance (TT)
- Aerobic capacity, VO2max
- Race performance, competitive performance
- Running economy, cycling economy
- Exercise tolerance, fatigue resistance
- Cardiorespiratory fitness
- Submaximal exercise economy

**Vocabulary traditions identified:**

1. **Exercise physiology / sports science** — lactate threshold, LT1, LT2, MLSS, VO2max, running economy, critical power, blood lactate, anaerobic threshold
2. **Clinical exercise physiology / cardiology** — ventilatory threshold, VT1, VT2, cardiopulmonary exercise test (CPET), anaerobic threshold (clinical), cardiac rehabilitation, exercise testing
3. **Biochemistry / cellular metabolism** — lactate production, lactate clearance, mitochondrial oxidative capacity, muscle fiber type (I/II), oxidative phosphorylation, lactate flux, monocarboxylate transporters (MCT1, MCT4), pyruvate/lactate ratio
4. **Strength and conditioning / coaching practice** — training zones, zone 2 training, threshold training, polarized training, training intensity distribution (TID), heart rate zones, FTP (functional threshold power)

**Source B status:** UNAVAILABLE — MODERATE (Source A+C together produced ≥2 distinct vocabulary traditions — 4 distinct traditions identified; severity is MODERATE, not HIGH RISK). Proceed with VOCABULARY SELF-REPORT FLAG applied.

---

### Step 3 — Question-type classification

**Classification: EXPLORATORY**

Basis: The prompt "I want to research lactate threshold and its role in endurance performance" contains no comparison language, no intervention-outcome structure, no "does A work better than B." Default to EXPLORATORY per intake.md Step 3 decision rule.

PICO is NOT applicable at this stage — the user does not yet have domain vocabulary sufficient to fill PICO fields, and forcing PICO at intake for exploratory questions is the documented failure mode.

---

### Step 4 — Intake brief (all fields populated)

```
INTAKE BRIEF
============
Topic: The role of lactate threshold in determining, predicting, and explaining
       endurance exercise performance

Anchor vocabulary:
  - "lactate threshold" [exercise physiology / sports science tradition]
  - "endurance performance" [sports science / performance research tradition]

Candidate vocabulary traditions:
  1. Exercise physiology / sports science — lactate threshold, LT1, LT2,
     MLSS, VO2max, running economy, critical power, blood lactate, anaerobic
     threshold, performance prediction
  2. Clinical exercise physiology / cardiology — ventilatory threshold,
     VT1, VT2, CPET, cardiopulmonary exercise testing, anaerobic threshold
     (clinical definition), cardiac rehabilitation, exercise testing protocols
  3. Biochemistry / cellular metabolism — lactate production, lactate
     clearance, mitochondrial oxidative capacity, muscle fiber type, oxidative
     phosphorylation, lactate flux, monocarboxylate transporters (MCT1, MCT4),
     pyruvate/lactate ratio, Cori cycle
  4. Strength and conditioning / coaching practice — training zones, zone 2
     training, threshold training, polarized training, training intensity
     distribution (TID), heart rate zones, FTP, periodization

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot
  enumerate traditions it has not encountered. Vocabulary-discovery pass
  (pearl-growing from a known anchor paper) is recommended before accepting
  the angle list as covering all traditions.

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure in the prompt)

Scope markers: None stated — inferred scope: general role of lactate threshold
  across endurance sports (running, cycling, swimming, rowing) in healthy
  exercising populations; likely includes both measurement methodology and
  performance prediction; no age, sex, or training-status restriction stated

Known exclusions: None stated

Domain maturity estimate: MIXED (academic-heavy with a significant practitioner layer)
  Basis: "lactate threshold" is a formal academic term originating in exercise
  physiology research (Wasserman et al. 1973); major peer-reviewed journals
  (J. Appl. Physiol., Med. Sci. Sports Exerc., Eur. J. Appl. Physiol.) publish
  heavily in this area. Substantial practitioner production also exists:
  coaches, training platforms (TrainingPeaks, WKO), and online coaching
  resources use LT extensively. Mixed domain maturity = practitioner source
  REQUIRED in angle list.

Survey paper status: NOT FOUND — Source B unavailable. Vocabulary-discovery pass
  (e.g., search "lactate threshold endurance performance review 2023 2024")
  recommended before finalizing the angle list.

Source B status: UNAVAILABLE — MODERATE — Source A+C produced 4 distinct vocabulary
  traditions. Proceeding with VOCABULARY SELF-REPORT FLAG.

Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):
  Target tradition: Comparative animal physiology / ecology of sustained aerobic
  performance
  Selection basis: Same real-world problem (sustaining aerobic output near
  physiological capacity) studied from a different phylogenetic and ecological
  angle. Uses vocabulary absent from human exercise physiology: aerobic scope,
  factorial aerobic scope, sustainable metabolic rate, maximum sustained
  metabolic rate, ecological endurance performance in migratory and athletic
  non-human species (thoroughbred horses, Alaskan sled dogs, migratory birds).
  Heuristic applied: Question 2 (same real-world problem from a different
  perspective). Exercise physiologists rarely cite this literature; highest
  coverage novelty.
```

---

### Step 6 — Intake gate check

- [x] Topic field is populated (not "TBD") — PASS
- [x] Candidate vocabulary traditions has ≥2 entries — 4 entries — PASS
- [x] Question type is classified — EXPLORATORY — PASS
- [x] Cross-disciplinary tradition pre-commit field is populated — comparative animal physiology / ecology of sustained aerobic performance — PASS

**All four gate conditions met. Proceeding to angle-generation.md.**

---

## PHASE 2 — ANGLE GENERATION

*(Following angle-generation.md Steps 0–4)*

---

### Step 0 — Coverage Map

```
COVERAGE MAP
============
Tradition 1: Exercise physiology / sports science
  Representative terms: lactate threshold, LT1, LT2, MLSS, VO2max, running
    economy, critical power, blood lactate, performance prediction
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: Clinical exercise physiology / cardiology
  Representative terms: ventilatory threshold, VT1, VT2, CPET, cardiopulmonary
    exercise testing, anaerobic threshold (clinical), cardiac rehabilitation
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: Biochemistry / cellular metabolism
  Representative terms: lactate production, lactate clearance, mitochondrial
    oxidative capacity, muscle fiber type (I/II), monocarboxylate transporters
    (MCT1, MCT4), pyruvate/lactate ratio, oxidative phosphorylation
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Strength and conditioning / coaching practice
  Representative terms: training zones, zone 2 training, threshold training,
    polarized training, training intensity distribution (TID), FTP, heart rate
    zones, periodization
  Planned angle slot: Confirmatory A4
  Gap flag: No

Traditions NOT yet represented in the planned list:
  All traditions from intake brief have at least one angle slot.

Cross-disciplinary slot (required):
  Target tradition: Comparative animal physiology / ecology of sustained aerobic
    performance
  Basis for selection: Same real-world problem — sustaining aerobic output near
    physiological capacity — studied in wild and athletic non-human species.
    Uses "aerobic scope," "factorial aerobic scope," "sustainable metabolic
    rate" vocabulary absent from human exercise physiology. Exercise
    physiologists rarely cite this literature; highest coverage novelty.
    Cross-disciplinary heuristic applied: Question 2 (same real-world problem
    from a human/organismal perspective).

Domain-scope condition note (INT-10 FM4 applied):
  Exercise physiology / lactate threshold is a well-established field (~50+
  years of research) likely well-represented in LLM training data. Per
  weakness_register.md Weakness 7 and CLAUDE.md deployment constraints:
  cross-tradition conditioning differential is MODERATE rather than NEAR-ZERO
  (exercise physiology spans multiple distinct subdisciplines unlike the
  LLM/AI domain tested in INT-10). Primary kit value shifts to Q5
  (actionability) and Q3 (precision). Cross-disciplinary angle (C1) provides
  maximum novelty contribution.
```

**Gate:** Coverage map populated. Proceeding to Step 1.

---

### Step 1 — Structural angle-type allocation

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Exercise physiology / sports science):
  Predictive relationship between LT and endurance performance outcomes

Slot A2 (Confirmatory — Clinical exercise physiology / cardiology):
  Ventilatory threshold, CPET protocols, clinical measurement equivalence

Slot A3 (Confirmatory — Biochemistry / cellular metabolism):
  Cellular and molecular mechanisms underlying lactate threshold

Slot A4 (Confirmatory — Coaching practice / strength and conditioning):
  Training zone design, threshold training dose-response, TID

Slot N1 (Null-hypothesis): Assigned — evidence that LT does NOT predict
  endurance performance, construct validity failure, or measurement
  dependency rendering the concept meaningless

Slot D1 (Adversarial — Research methodology / measurement science):
  Starting from measurement reliability and construct validity vocabulary.
  NOT FROM: exercise physiology (Tradition 1), clinical exercise physiology
  (Tradition 2), biochemistry (Tradition 3), coaching practice (Tradition 4).
  Excluding: lactate threshold, ventilatory threshold, VO2max, running economy,
  MLSS, training zones, muscle metabolism, mitochondria, blood lactate.

Slot C1 (Cross-disciplinary — Comparative animal physiology):
  Aerobic scope, factorial aerobic scope, sustained metabolic rate in
  non-human athletic and migratory species.
```

---

### Step 2 — Coverage-gap conditioning generation (angle content)

**Generating each slot with explicit coverage-gap conditioning:**

---

**Slot A1 (Confirmatory — Exercise physiology):**
Traditions already covered by prior slots: None (this is the first slot).
What aspect of the topic is NOT yet addressed: All aspects in this tradition are open.
Focus: Predictive relationship between measured LT and endurance performance outcomes (race times, time trial performance, competitive results).

**Slot A2 (Confirmatory — Clinical exercise physiology):**
Traditions already covered: Exercise physiology / sports science (LT, MLSS, VO2max, running economy, performance prediction).
What is NOT yet addressed by prior queries: Clinical measurement via CPET, the respiratory/ventilatory analog of LT, clinical populations, equivalence between ventilatory and lactate threshold definitions.

**Slot A3 (Confirmatory — Biochemistry / cellular metabolism):**
Traditions already covered: Exercise physiology, clinical exercise physiology.
What is NOT yet addressed: Cellular and molecular WHY — why does a metabolic threshold exist, what happens at the mitochondrial and transporter level, how do training adaptations change the threshold mechanistically.

**Slot A4 (Confirmatory — Coaching practice):**
Traditions already covered: Exercise physiology, clinical exercise physiology, biochemistry.
What is NOT yet addressed: Practical translation — how LT data is converted to training zones, what evidence supports threshold-based training prescriptions, polarized vs. threshold-dominant training.

**Slot N1 (Null-hypothesis):**
Formulation: What query string would retrieve literature showing lactate threshold does NOT reliably predict endurance performance, or that LT measurement is so protocol-dependent as to undermine its validity as a construct?

**Slot D1 (Adversarial):**
Generating from research methodology / measurement science vocabulary.
Excluded terms: lactate threshold, ventilatory threshold, VO2max, running economy, MLSS, training zones, muscle metabolism, mitochondria, blood lactate.
Generation terms: operational definition, measurement heterogeneity, construct validity, test-retest reproducibility, inter-method variability, D-max, OBLA criterion, protocol dependency, measurement artifact, metabolic threshold definition.

**Slot C1 (Cross-disciplinary — Comparative animal physiology):**
Generating from comparative animal physiology vocabulary, NOT from human exercise physiology framing.
Vocabulary: aerobic scope, factorial aerobic scope, sustainable metabolic rate, maximum sustained metabolic rate, migratory performance, thoroughbred horses, Alaskan huskies, avian endurance, wild animal performance.

---

### Steps 3–4 — Source-type assignment and query generation

---

```
ANGLE 1 (A1): Lactate threshold as a predictor of endurance performance
================================================================
Vocabulary tradition: Exercise physiology / sports science
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Effect sizes (r, R²) for LT → performance prediction;
  comparisons of LT vs. VO2max vs. running economy as predictors; scope
  conditions (sport type, athlete caliber, event distance); direction of
  relationship; conditions under which LT adds predictive value beyond VO2max

Source type (academic): PubMed/MEDLINE; Semantic Scholar (exercise physiology
  and sports science journals: J. Appl. Physiol., Med. Sci. Sports Exerc.,
  Int. J. Sports Physiol. Perform., Eur. J. Appl. Physiol.)
Source type (practitioner): deprioritized for this angle — academic sources
  dominate for performance prediction; TrainingPeaks white papers as
  supplementary practitioner signal

Queries:
  Q1: lactate threshold endurance performance prediction time trial correlation
      systematic review
  Q2: MLSS maximal lactate steady state race performance prediction effect size
      running cycling
  Q3: LT2 anaerobic threshold VO2max relative intensity performance elite
      endurance athletes comparison
  Q4: lactate threshold versus VO2max versus running economy performance
      predictor multivariate regression

Coverage-gap note: This angle does not distinguish between LT measured as
  absolute workload vs. relative (%VO2max) — follow-up angle or sub-query may
  be needed if the user wants to isolate those comparisons.
```

---

```
ANGLE 2 (A2): Ventilatory threshold and CPET equivalence to lactate threshold
================================================================
Vocabulary tradition: Clinical exercise physiology / cardiology
Angle type: Confirmatory
Predicted research character: empirical (measurement comparison studies)
What to extract: Agreement/disagreement between VT1/VT2 and LT1/LT2;
  CPET protocol effects on threshold detection; clinical utility of VT as
  non-invasive surrogate for blood lactate measurement; cardiac rehabilitation
  applications; healthy vs. clinical population differences

Source type (academic): PubMed/MEDLINE (cardiology journals: Circulation,
  J. Am. Coll. Cardiol., Eur. Heart J.; exercise testing: Med. Sci. Sports
  Exerc., Chest)
Source type (practitioner): deprioritized — clinical measurement is
  predominantly academic; clinical practice guidelines as supplementary

Queries:
  Q1: ventilatory threshold anaerobic threshold blood lactate equivalence
      agreement Bland-Altman
  Q2: VT1 VT2 cardiopulmonary exercise test CPET endurance performance
      validity cardiac
  Q3: first second ventilatory threshold maximal lactate steady state
      comparison healthy athletes
  Q4: CPET protocol dependency ventilatory threshold ramp incremental
      exercise detection

Coverage-gap note: This angle does not cover pediatric or elderly populations
  where CPET thresholds may behave differently from adult athletes.
```

---

```
ANGLE 3 (A3): Cellular and molecular mechanisms underlying lactate threshold
================================================================
Vocabulary tradition: Biochemistry / cellular metabolism
Angle type: Confirmatory
Predicted research character: empirical (mechanistic studies, often
  laboratory-based with muscle biopsies or in vitro assays)
What to extract: Which cellular processes determine the inflection point;
  role of MCT1/MCT4 in lactate clearance; mitochondrial density and oxidative
  enzyme activity as determinants; muscle fiber type composition; how training
  shifts the threshold mechanistically; lactate as signal vs. waste product

Source type (academic): PubMed/MEDLINE (biochemistry / physiology journals:
  J. Physiol., Am. J. Physiol., FASEB J., Acta Physiol.)
Source type (practitioner): deprioritized — mechanistic biochemistry is
  primarily academic literature

Queries:
  Q1: lactate threshold mitochondrial oxidative capacity muscle fiber type
      mechanisms exercise
  Q2: monocarboxylate transporter MCT1 MCT4 lactate clearance aerobic
      threshold exercise intensity
  Q3: oxidative phosphorylation pyruvate lactate ratio exercise intensity
      metabolic threshold skeletal muscle
  Q4: lactate production clearance balance aerobic threshold training
      adaptations mitochondrial biogenesis

Coverage-gap note: This angle covers classical Warburg-effect-adjacent
  biochemistry but does not deeply address the more recent view of lactate as
  an intracellular/intercellular signaling molecule (lactate shuttle hypothesis,
  Brooks); that may warrant a separate sub-query.
```

---

```
ANGLE 4 (A4): Training zone design and threshold-based training prescription
================================================================
Vocabulary tradition: Strength and conditioning / coaching practice
Angle type: Confirmatory
Predicted research character: empirical (intervention studies, TID
  comparisons) and consensus (coaching frameworks, expert guidelines)
What to extract: Evidence for threshold-based training zones (2-zone, 3-zone,
  5-zone, 7-zone models); polarized vs. threshold-dominant TID comparative
  evidence; FTP and its validity as a surrogate for LT; practical protocol for
  threshold testing outside lab; dose-response of threshold training on LT
  shift; practitioner-reported implementation patterns and failure modes

Source type (academic): Semantic Scholar / PubMed (Int. J. Sports Physiol.
  Perform., J. Strength Cond. Res., Front. Physiol.)
Source type (practitioner): TrainingPeaks blog and white papers; WKO
  documentation; GoldenCheetah documentation; coaching blogs (Empirical
  Cycling, Training Science Podcast transcripts); practitioner-authored books
  (Seiler, Coggan). REQUIRED — domain is mixed; practitioner sources carry
  training-zone implementation knowledge not in academic literature.

Queries:
  Q1: lactate threshold training zones endurance athletes dose-response
      performance prescription
  Q2: polarized training threshold training intensity distribution TID
      comparison endurance performance
  Q3: training intensity distribution low-intensity high-intensity
      threshold zone effectiveness systematic review
  Q4: FTP functional threshold power cycling lactate threshold validity
      surrogate comparison

Coverage-gap note: This angle does not cover periodization (how LT-based
  zones change across a training year) — that is a separate downstream angle
  if needed.
```

---

```
ANGLE N1: Evidence that lactate threshold does NOT reliably predict
          endurance performance or lacks construct validity
================================================================
Vocabulary tradition: Exercise physiology / sports science (disconfirming
  variant)
Angle type: Null-hypothesis
Predicted research character: empirical (negative results, replication
  failures, scope-condition failures)
What to extract: Studies where LT failed to predict performance; cases where
  VO2max or running economy outperformed LT as a predictor; protocol-dependent
  variability that undermines LT as a stable construct; contradictory evidence
  across sports or performance levels; conditions under which LT is redundant
  with other measures; scope conditions where LT does not generalize

Source type (academic): PubMed/MEDLINE; Semantic Scholar
Source type (practitioner): GitHub issues on lactate testing software;
  practitioner critiques in coaching forums (supplementary)

Queries:
  Q1: lactate threshold endurance performance prediction failure limitations
      weak predictor
  Q2: lactate threshold measurement variability protocol dependency
      poor reproducibility negative results
  Q3: MLSS OBLA LT2 individual variability poor predictor race performance
      contradictory evidence
  Q4: VO2max running economy better predictor than lactate threshold
      performance redundant
  Q5: lactate threshold does not generalize performance prediction scope
      conditions failure replication

Coverage-gap note: This angle specifically targets predictive validity failure.
  Measurement construct validity failures are addressed separately in Angle D1.
```

---

```
ANGLE D1 [ADVERSARIAL-FLAGGED]: Methodological critique of the lactate
          threshold construct — measurement heterogeneity and construct validity
================================================================
[ADVERSARIAL-FLAGGED: dispatch in a separate research context with no prior
confirmatory results]

Vocabulary tradition: Research methodology / measurement science
Angle type: Adversarial
Predicted research character: empirical (methodological comparison studies,
  construct validity analyses) and consensus (measurement standards critiques)

Generation note: This angle was generated EXCLUDING the following vocabulary
  from the generation prompt: lactate threshold, ventilatory threshold, VO2max,
  running economy, MLSS, training zones, muscle metabolism, mitochondria, blood
  lactate, aerobic capacity, endurance performance (as a performance outcome).
  Generation terms used: operational definition, measurement heterogeneity,
  construct validity, test-retest reproducibility, inter-method agreement,
  D-max, OBLA criterion, protocol dependency, measurement artifact, metabolic
  threshold definition, methodological pluralism.

What to extract: Evidence that different LT detection methods produce different
  thresholds in the same subjects; test-retest reliability coefficients for
  various LT protocols; critiques of whether "lactate threshold" is a single
  biological phenomenon or an operational artifact of measurement protocol;
  papers calling for standardization; discordance between LT methods and their
  downstream performance predictions; meta-methodological critiques

Source type (academic): PubMed/MEDLINE (methodology-focused journals:
  Meas. Phys. Educ. Exerc. Sci.; Sports Med.; methodological papers in
  general exercise physiology journals)
Source type (practitioner): deprioritized — construct validity critique is
  primarily academic; OPTIONAL: practitioner discussion in coaching communities
  about inconsistent LT results

Queries:
  Q1: lactate threshold operational definition measurement heterogeneity
      construct validity critique method comparison
  Q2: blood lactate inflection point detection method D-max OBLA
      individual anaerobic threshold variability comparison
  Q3: metabolic threshold protocol dependency test-retest reliability
      inter-method agreement sport science measurement
  Q4: lactate threshold detection method comparison same subjects
      discordance systematic review

Coverage-gap note: This angle does not cover recent debates about whether
  lactate IS a threshold phenomenon vs. a continuous function — that
  philosophical distinction may require a targeted additional query.
```

---

```
ANGLE C1 (Cross-disciplinary): Aerobic scope and sustained metabolic rate
          in comparative animal physiology
================================================================
Vocabulary tradition: Comparative animal physiology / ecology of sustained
  aerobic performance
Angle type: Cross-disciplinary
Predicted research character: empirical (field and laboratory studies on
  non-human athletes and migratory species)
What to extract: How non-human species sustain aerobic output near capacity;
  whether a metabolic threshold analog exists in animal species; aerobic scope
  as a predictor of ecological performance; how migratory birds or athletic
  mammals (thoroughbred horses, sled dogs) compare to human endurance athletes
  on threshold-like constructs; evolutionary insights that may reframe the
  human LT phenomenon; whether training adaptations in aerobic scope parallel
  LT shifts in humans

Source type (academic): Semantic Scholar / Web of Science (comparative
  physiology journals: J. Exp. Biol., Physiol. Biochem. Zool., Comp. Biochem.
  Physiol., J. Exp. Zool.)
Source type (practitioner): deprioritized — this is a specialized academic
  literature with minimal practitioner production

Queries:
  Q1: aerobic scope sustained metabolic rate endurance performance comparative
      physiology animal
  Q2: factorial aerobic scope migratory birds thoroughbred horses sustained
      aerobic output ecological performance
  Q3: maximum sustained metabolic rate wild animals endurance capacity
      ecological context exercise physiology
  Q4: comparative exercise physiology sled dogs Alaskan huskies lactate
      metabolic threshold training adaptation

Coverage-gap note: This angle may retrieve literature that uses "aerobic
  scope" and "factorial aerobic scope" as constructs NOT mapped to the human
  LT concept — a targeted synthesis step will be needed to translate findings
  back to the human exercise physiology framing.
```

---

## PHASE 3 — QUALITY GATES

*(Following angle-quality.md Gates 1–4)*

---

### Gate 1 — Completeness checks

**Null-hypothesis angle present:**
ANGLE N1 exists. Query strings contain disconfirming vocabulary: "failure," "limitations," "weak predictor," "poor reproducibility," "negative results," "failure replication," "does not generalize." Not a confirmatory angle with a caveat — the entire angle is framed as a disconfirming search.
**Result: PASS**

**Adversarial angle present:**
ANGLE D1 is labeled `[ADVERSARIAL-FLAGGED: dispatch in a separate research context with no prior confirmatory results]`. Label is present and includes the dispatch note.
**Result: PASS**

**Cross-disciplinary angle present:**
ANGLE C1 targets comparative animal physiology / ecology of sustained aerobic performance. Checking against intake brief traditions: (1) exercise physiology / sports science, (2) clinical exercise physiology / cardiology, (3) biochemistry / cellular metabolism, (4) coaching practice / S&C. Comparative animal physiology is NOT in the intake brief traditions list.
**Result: PASS**

**Source-type coverage:**
Domain maturity was classified as MIXED — practitioner source REQUIRED in at least one angle. ANGLE A4 assigns practitioner sources: TrainingPeaks blog and white papers, WKO documentation, GoldenCheetah documentation, coaching blogs (Empirical Cycling, Training Science Podcast), practitioner-authored books. REQUIRED flag is met.
**Result: PASS**

**Vocabulary-tradition map populated:**
Coverage map lists 4 named traditions from the intake brief + 1 cross-disciplinary tradition (comparative animal physiology) + 1 adversarial tradition (research methodology / measurement science) = 6 distinct tradition labels. Well above the ≥2 minimum.
**Result: PASS**

**Gate 1 Overall: PASS**

---

### Gate 2 — Distinctness checks

**Boolean-connective test — angle pair analysis:**

For each pair, identified most distinctive query term per angle, then checked for semantic equivalence:

| Pair | Distinctive terms | OR-merge verdict |
|------|------------------|-----------------|
| A1 × A2 | A1: "performance prediction" / A2: "CPET ventilatory threshold" | PASS — different vocabulary anchors; A2 retrieves clinical cardiology literature not returned by A1 |
| A1 × A3 | A1: "performance prediction" / A3: "MCT mitochondria mechanisms" | PASS — A1 is about prediction; A3 is about mechanism |
| A1 × A4 | A1: "prediction correlation" / A4: "training zones TID prescription" | PASS — A1 is about outcomes; A4 is about training design |
| A1 × N1 | A1: confirmatory / N1: "failure limitations negative" | PASS — structurally opposite framing |
| A1 × D1 | A1: "prediction" / D1: "construct validity measurement heterogeneity" | PASS — A1 asks whether LT predicts; D1 asks whether LT is measurable |
| A1 × C1 | A1: human exercise physiology / C1: "aerobic scope factorial comparative" | PASS — different species, different vocabulary |
| A2 × A3 | A2: "CPET ventilatory threshold" / A3: "MCT1 MCT4 mitochondria" | PASS — clinical measurement vs. cellular mechanisms |
| A2 × A4 | A2: "CPET clinical" / A4: "training zones TID" | PASS — clinical testing vs. training application |
| A2 × N1 | A2: "equivalence validity clinical" / N1: "failure negative" | PASS — different targets |
| A2 × D1 | A2: "VT1 VT2 CPET agreement" / D1: "construct validity D-max OBLA heterogeneity" | NEAR-OVERLAP FLAG: Both can surface measurement methodology papers. However, A2 focuses on VT/LT equivalence (cross-method agreement with clinical purpose); D1 focuses on LT detection method variability and construct validity critique (within-LT-methodology). OR-merge would NOT retrieve the same documents: A2 retrieves cardiology/CPET literature; D1 retrieves methodology critique literature targeting LT detection specifically. PASS with near-overlap note. |
| A3 × A4 | A3: "mechanisms mitochondria" / A4: "training zones TID" | PASS — mechanisms vs. training application |
| A3 × N1 | A3: "mechanisms" / N1: "failure limitations" | PASS — different questions |
| A3 × D1 | A3: "biochemistry mechanisms" / D1: "measurement construct validity" | PASS — different levels of analysis |
| A3 × C1 | A3: "human skeletal muscle" / C1: "animal species aerobic scope" | PASS — different organisms |
| A4 × N1 | A4: "training prescription zones" / N1: "prediction failure negative" | PASS — different questions |
| A4 × D1 | A4: "training zones FTP" / D1: "construct validity measurement" | PASS — application vs. critique |
| A4 × C1 | A4: "coaching training" / C1: "comparative animal ecology" | PASS |
| N1 × D1 | N1: "prediction failure performance" / D1: "construct validity measurement heterogeneity" | NEAR-OVERLAP: Both can retrieve papers about LT limitations. However, N1 focuses on PREDICTIVE VALIDITY (does LT predict performance outcomes?); D1 focuses on CONSTRUCT VALIDITY / MEASUREMENT RELIABILITY (is LT reliably measurable?). A paper showing "LT predicts nothing after controlling for VO2max" appears in N1; a paper showing "D-max and OBLA give different thresholds in the same subject" appears in D1. Structurally distinct questions — PASS with near-overlap note. |
| N1 × C1 | N1: "human performance prediction failure" / C1: "animal aerobic scope" | PASS |
| D1 × C1 | D1: "measurement construct validity" / C1: "animal ecology comparative" | PASS |

**Vocabulary-tradition distinctness check:**
- A1: exercise physiology / sports science
- A2: clinical exercise physiology / cardiology
- A3: biochemistry / cellular metabolism
- A4: strength and conditioning / coaching practice
- N1: exercise physiology / sports science (disconfirming variant)
- D1: research methodology / measurement science
- C1: comparative animal physiology / ecology

N1 shares the "exercise physiology / sports science" root label with A1 but is the explicit null-hypothesis variant — per angle-quality.md Gate 2: "two non-null-hypothesis, non-adversarial angles share a label: FAIL." N1 is the null-hypothesis variant of A1. Exception applies. PASS.

All other traditions are distinct.

**Gate 2 Overall: PASS (two near-overlap pairs noted but both pass the Boolean-connective test on distinct primary vocabulary)**

---

### Gate 3 — Launchability checks

**Has at least one concrete query string:** All 7 angles have concrete, pasteable query strings. No angle relies on a description or question format.
**Result: PASS for all angles**

**No placeholder vocabulary:** Every query string was checked character by character for "TBD," "[fill in]," "insert term." None found.
**Result: PASS for all angles**

**Source type is named:** Every angle names specific platforms:
- A1: PubMed/MEDLINE; Semantic Scholar
- A2: PubMed/MEDLINE (specific journals named)
- A3: PubMed/MEDLINE (specific journals named)
- A4: Semantic Scholar / PubMed; TrainingPeaks, WKO, GoldenCheetah, coaching blogs
- N1: PubMed/MEDLINE; Semantic Scholar; GitHub (supplementary)
- D1: PubMed/MEDLINE (specific journals named)
- C1: Semantic Scholar / Web of Science (specific journals named)

**Result: PASS for all angles**

**Gate 3 Overall: PASS**

---

### Gate 4 — Scoring prohibition

**No LLM self-evaluation ranking:** Angles were not ranked by "which seems most promising" or "which appears most novel." The type allocation in Step 1 used structural criteria only: vocabulary-tradition coverage (4 traditions represented), required type presence (null-hypothesis, adversarial, cross-disciplinary), source-type coverage (practitioner required for mixed domain). No subjective quality assessment was applied.

**No implicit quality assessment:** Angle records were reviewed. No phrases of the form "this angle is likely to be most useful" or "this is the strongest angle" appear in any angle record.

**Result: PASS**

**Gate 4 Overall: PASS**

---

### Gate Summary

```
GATE SUMMARY
============
Gate 1 — Completeness: PASS
  - Null-hypothesis angle (N1): present with explicit disconfirming vocabulary
  - Adversarial angle (D1): present with ADVERSARIAL-FLAGGED label and dispatch note
  - Cross-disciplinary angle (C1): present, targets tradition NOT in intake brief
  - Source-type coverage: PASS — A4 assigns practitioner sources (REQUIRED for mixed domain)
  - Vocabulary-tradition map: PASS — 6 distinct tradition labels

Gate 2 — Distinctness: PASS
  - A2 × D1 near-overlap: FLAGGED but passes — different vocabulary anchors
    (clinical CPET vs. construct validity critique); OR-merge retrieves
    different corpora
  - N1 × D1 near-overlap: FLAGGED but passes — predictive validity failure vs.
    construct validity / measurement reliability; structurally distinct questions
  - N1 / A1 tradition label shared: PASS — exception applies (N1 is the explicit
    null-hypothesis variant)

Gate 3 — Launchability: PASS
  - All 7 angles have concrete, pasteable query strings
  - No placeholder vocabulary found
  - All source type fields name specific platforms

Gate 4 — Scoring prohibition: PASS
  - Structural criteria only used for type allocation
  - No implicit quality assessment found in angle records

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all traditions were enumerated by LLM only;
     external validation via survey-paper probe is recommended before accepting
     the tradition check as complete
  2. Source B unavailable — survey-paper vocabulary pass recommended
     (e.g., "lactate threshold endurance performance review 2023 2024")
     before treating the angle list as covering all traditions
  3. A2 × D1 near-overlap — monitor for document overlap when both are
     executed; consider merging into one measurement-methodology angle if
     the corpora overlap significantly in practice
  4. N1 × D1 near-overlap — same monitoring recommendation
  5. Domain-scope condition (INT-10 FM4): lactate threshold is a
     well-represented LLM training domain; cross-tradition conditioning
     differential is MODERATE, not zero; C1 (comparative animal physiology)
     is the highest-novelty angle
  6. ADVERSARIAL label (D1) records structural separation requirement; the
     downstream research agent MUST honor the label by executing D1 in a
     separate context with no prior confirmatory results (weakness_register.md
     Weakness 6 — this kit cannot enforce downstream execution discipline)
```

---

## COMPLETE ANGLE LIST — DISPATCH READY

| # | Title | Tradition | Type | Research character | Academic source | Practitioner source |
|---|-------|-----------|------|--------------------|----------------|---------------------|
| A1 | LT as predictor of endurance performance | Exercise physiology / sports science | Confirmatory | Empirical | PubMed/MEDLINE, Semantic Scholar | Deprioritized |
| A2 | Ventilatory threshold and CPET equivalence | Clinical exercise physiology / cardiology | Confirmatory | Empirical | PubMed/MEDLINE | Deprioritized |
| A3 | Cellular mechanisms of lactate threshold | Biochemistry / cellular metabolism | Confirmatory | Empirical | PubMed/MEDLINE | Deprioritized |
| A4 | Training zone design and threshold prescription | Coaching practice / S&C | Confirmatory | Empirical + Consensus | Semantic Scholar / PubMed | TrainingPeaks, WKO, coaching blogs — REQUIRED |
| N1 | LT does not predict endurance performance | Exercise physiology (disconfirming) | Null-hypothesis | Empirical | PubMed/MEDLINE, Semantic Scholar | GitHub (supplementary) |
| D1 | Methodological critique of LT construct | Research methodology / measurement science | Adversarial-FLAGGED | Empirical + Consensus | PubMed/MEDLINE | Deprioritized |
| C1 | Aerobic scope in comparative animal physiology | Comparative animal physiology / ecology | Cross-disciplinary | Empirical | Semantic Scholar / Web of Science | Deprioritized |

**Total angles: 7** — within 5–12 standard range; justified by 4 intake traditions + required structural types (N1, D1, C1).

---

## STRUCTURAL SELF-CHECK (Rule 6 — after-every-task)

What is missing, incomplete, or questionable in this output:

1. **Source B gap is the primary quality ceiling.** Survey-paper vocabulary pass is absent. If executed with web access, the vocabulary-bootstrap step should be re-run against recent survey papers ("lactate threshold endurance performance review 2024 2025") before treating the tradition list as complete. A fifth tradition may exist (e.g., sports nutrition / dietetics framing of threshold training, or respiratory physiology as a distinct tradition from clinical exercise physiology).

2. **Angle C1 translation risk.** Comparative animal physiology uses "aerobic scope" and "factorial aerobic scope" — these constructs are not directly mapped to human LT. The downstream researcher will need a synthesis step to translate animal physiology findings back to human endurance physiology. This is expected for a cross-disciplinary angle; flag it explicitly so the downstream agent allocates time for translation.

3. **A2 × D1 and N1 × D1 near-overlaps.** Both pairs flagged in Gate 2. If in practice the corpora overlap significantly, consider merging D1 into N1 under a unified "LT measurement and predictive validity failure" angle, and treating the adversarial framing as a sub-focus rather than a standalone angle.

4. **No age, sex, or training-status sub-angles.** The intake brief stated "no restriction" on these scope variables. In exercise physiology, LT behavior differs substantially across training status (untrained vs. elite), sex, and age. These are candidate angles if the user's research question extends to those populations — they are not covered by the current list.

5. **Adversarial context enforcement.** ANGLE D1 must be dispatched in a separate research context. This kit cannot enforce that — the downstream agent must honor the label.
