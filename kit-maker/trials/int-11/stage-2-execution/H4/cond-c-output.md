# Angle-Gen-Kit Output — INT-11 / H4 / Cond-C

**Topic:** Fatigue in endurance athletes during prolonged exercise
**Condition:** Cond-C — Source A + Source C only (no web search / Source B)
**Execution date:** 2026-07-07
**Model:** claude-sonnet-4-6

---

# STAGE 1: INTAKE BRIEF

## Step 1 — Sparse-input parsing

**Input received:** "I want to research fatigue in endurance athletes during prolonged exercise."

| Element | Extracted value |
|---------|----------------|
| Target concept | Fatigue in endurance athletes during prolonged exercise |
| Anchor vocabulary | "fatigue" (exercise physiology tradition); "endurance athletes" (sports science tradition); "prolonged exercise" (exercise physiology / sports science tradition) |
| Scope signals | Domain: trained endurance athletes specifically; context: prolonged (not brief/sprint) exercise; no date range, no population restriction, no exclusions stated |

No genuine ambiguity in target concept — single plausible reading. No questions asked.

---

## Step 2 — Vocabulary bootstrap

### Source A — LLM translation

**"fatigue" in exercise context → terms the literature uses that the user did NOT:**
- Peripheral fatigue (muscle-level)
- Central fatigue (CNS-level)
- Neuromuscular fatigue
- Supraspinal fatigue
- Task failure / exercise cessation
- Performance decrement
- Exhaustion
- Metabolic fatigue
- Substrate depletion
- Glycogen depletion
- Intramuscular acidosis / pH reduction
- Inorganic phosphate (Pi) accumulation
- Reactive oxygen species (ROS), oxidative stress
- Ammonia accumulation
- Cardiovascular drift
- Thermoregulatory fatigue
- Overreaching / overtraining syndrome

**"endurance athletes" → terms the literature uses:**
- Distance runners, marathon runners, ultramarathon runners
- Road cyclists, track cyclists
- Triathletes
- Long-distance swimmers
- Aerobic athletes, trained athletes, highly trained subjects
- Competitive vs. recreational vs. masters athletes

**"prolonged exercise" → terms the literature uses:**
- Sustained aerobic exercise
- Long-duration exercise
- Continuous exercise bout
- Ultra-endurance exercise
- Multi-hour exercise
- High-intensity sustained exercise
- Time-to-exhaustion (TTE) protocols
- Time trial (TT) performance

**Vocabulary traditions identified by Source A:**

| Tradition | Representative terms |
|-----------|---------------------|
| Exercise physiology / muscle physiology | peripheral fatigue, glycogen depletion, metabolic acidosis, Pi accumulation, ROS, neuromuscular fatigue, cross-bridge cycling inhibition, ATP depletion |
| Neuroscience / central fatigue | central fatigue, supraspinal fatigue, central governor model (Noakes), neural drive, voluntary activation (VA), motor cortex excitability, TMS, group III/IV muscle afferents |
| Sports science / performance science | endurance performance, training-induced fatigue resistance, pacing strategy, time trial, overtraining syndrome (OTS), performance decrement, tapering, training load |
| Nutritional biochemistry / dietetics | carbohydrate (CHO) metabolism, substrate depletion, glycogen stores, fuel oxidation rate, exogenous carbohydrate intake, fat oxidation, ketone supplementation, carbohydrate loading |
| Psychophysiology / perception science | rating of perceived exertion (RPE), Borg scale, affect valence, mental fatigue, brain endurance training, dissociation theory, effort perception, psychological tolerance |
| Thermoregulation / environmental physiology | hyperthermia, core temperature, dehydration, cardiovascular drift, sweat rate, fluid balance, heat stress, cooling interventions |
| Immunology / exercise immunology | exercise-induced muscle damage (EIMD), inflammation markers (CK, IL-6, CRP, troponin), oxidative stress, overreaching, overtraining syndrome, cytokine responses |

**7 distinct vocabulary traditions identified by Source A.**

### Source C — Absent-term signal

Terms the LLM would expect to see associated with this topic that the user did NOT use:

1. **"central fatigue"** — the most prominent academic sub-debate (peripheral vs. central); user only said "fatigue" without this distinction; high-risk absence
2. **"neuromuscular fatigue"** — standard umbrella term for motor-unit-level mechanisms; absent
3. **"RPE" / "perceived exertion"** — psychophysiological tradition entirely absent from user framing; the user's framing is entirely physiological
4. **"glycogen depletion"** — the earliest and still highly cited metabolic mechanism; absent
5. **"thermoregulation"** — heat stress is a major mechanism in prolonged exercise fatigue, especially in outdoor and warm-weather contexts; absent
6. **"central governor"** — Noakes' influential (and contested) theoretical framework; absent; its absence may signal the user has not engaged with the debate
7. **"overtraining"** — the chronic fatigue distinction from acute exercise fatigue; absent

**Absence inference:** The user entered from the most general possible framing — no mechanism, no tradition, no level of analysis specified. This confirms EXPLORATORY classification. The absence of "central vs. peripheral" terminology is the highest-signal absence: it is the organizing debate in academic fatigue physiology, and its non-appearance suggests the user has not yet engaged with the primary academic structuring of the topic.

---

## Step 3 — Question-type classification

**Classification: EXPLORATORY**

Basis: "I want to research X" contains no comparison, no intervention-outcome pair, no named hypothesis. The user wants to understand the landscape of findings on fatigue in endurance athletes. PICO/SPIDER are not applicable at this stage.

PCC frame (applicable for EXPLORATORY):
- **Population:** Endurance athletes
- **Concept:** Fatigue occurring during prolonged exercise (mechanisms, manifestations, determinants)
- **Context:** Prolonged exercise (competitive or laboratory, not short-duration/sprint)

---

## Step 4 — Populated intake brief

```
INTAKE BRIEF
============
Topic: Mechanisms and manifestations of fatigue in endurance athletes during prolonged exercise

Anchor vocabulary:
  "fatigue" — exercise physiology tradition
  "endurance athletes" — sports science tradition
  "prolonged exercise" — exercise physiology / sports science tradition

Candidate vocabulary traditions:
  1. Exercise physiology / muscle physiology — peripheral fatigue, glycogen depletion,
     metabolic acidosis, Pi accumulation, ROS, neuromuscular fatigue, cross-bridge inhibition
  2. Neuroscience / central fatigue — central fatigue, supraspinal fatigue, central governor
     model (Noakes), neural drive, voluntary activation (VA), TMS, group III/IV muscle afferents
  3. Sports science / performance science — endurance performance, training-induced fatigue
     resistance, pacing strategy, time trial, overtraining syndrome, performance decrement
  4. Nutritional biochemistry / dietetics — CHO metabolism, substrate depletion, fuel oxidation
     rate, exogenous carbohydrate intake, fat oxidation, glycogen loading, sports nutrition
  5. Psychophysiology / perception science — RPE, Borg scale, affect valence, mental fatigue,
     brain endurance training, dissociation theory, effort perception
  6. Thermoregulation / environmental physiology — hyperthermia, core temperature, dehydration,
     cardiovascular drift, sweat rate, fluid balance, heat stress fatigue
  7. Immunology / exercise immunology — EIMD, CK, IL-6, CRP, oxidative stress, overreaching,
     overtraining syndrome (OTS), cytokine responses

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate
  traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known
  anchor paper) is recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure; user stated "I want to research")

Scope markers: None stated — inferred scope: fatigue occurring specifically during prolonged
  exercise (implied ≥1 hour) in trained endurance athletes; exercise modality unrestricted
  (running, cycling, triathlon, swimming); population unrestricted within endurance athletes

Known exclusions: None stated

Domain maturity estimate: academic-heavy
  Basis: anchor vocabulary is standard academic exercise physiology framing; area has
  decades of peer-reviewed research; user did not mention specific tools, apps, coaching
  products, or practitioner implementations; primary publication venues are academic journals
  (Journal of Applied Physiology, Medicine & Science in Sports & Exercise, EJAP)

Survey paper status: UNAVAILABLE — Source B (web search) not available in this execution
  context. Vocabulary-discovery pass recommended before finalizing angle list.

Source B status: UNAVAILABLE — MODERATE
  Basis: Source A + Source C together identified 7 distinct vocabulary traditions
  (exercise physiology, neuroscience, sports science, nutrition, psychophysiology,
  thermoregulation, immunology). ≥2 traditions confirmed. Proceeding with
  VOCABULARY SELF-REPORT FLAG applied. Expected coverage: MODERATE, not FULL.

Cross-disciplinary tradition (pre-commit for Slot C1):
  Target tradition: Occupational ergonomics / industrial fatigue science
  Selection basis: Same real-world problem from a human/organizational perspective —
  industrial workers performing sustained physical labor face fatigue mechanisms
  (biomechanical, metabolic, cognitive) that parallel endurance athlete fatigue, but are
  framed in terms of injury risk, productivity loss, work capacity limits, and occupational
  exposure. Fatigue Risk Management Systems (FRMS), cumulative exposure models, and
  biomechanical load quantification in occupational settings address the same cumulative-
  fatigue phenomenon with different terminology and validated measurement instruments,
  representing a literature not routinely cited in sports science.

Domain scope condition note (CLAUDE.md INT-10 FM4):
  Exercise physiology / sports science is moderately represented in LLM training data
  (academic biomedical literature; extensive PubMed corpus). This is NOT an LLM/AI-adjacent
  domain. Coverage-gap conditioning is expected to produce MEANINGFUL DIFFERENTIAL for
  cross-tradition angles (especially occupational ergonomics and predictive processing),
  unlike the near-zero differential documented for LLM/AI topics. Kit value applies.
```

---

## Step 6 — Intake gate check

| Gate condition | Status |
|---------------|--------|
| Topic field populated (not "TBD") | PASS |
| Candidate vocabulary traditions ≥2 entries | PASS — 7 traditions identified |
| Question type classified (EXPLORATORY or STRUCTURED) | PASS — EXPLORATORY |
| Cross-disciplinary tradition pre-committed | PASS — Occupational ergonomics / industrial fatigue |

**INTAKE GATE: ALL FOUR CONDITIONS MET — proceed to angle-generation.md.**

---

---

# STAGE 2: COVERAGE MAP AND TYPE ALLOCATIONS

## Coverage Map (Step 0)

```
COVERAGE MAP
============
Tradition 1: Exercise physiology / muscle physiology
  Representative terms: peripheral fatigue, glycogen depletion, metabolic acidosis, Pi
    accumulation, ROS, neuromuscular fatigue, cross-bridge cycling inhibition
  Planned angle slot: Confirmatory A1
  Gap flag: No — covered by A1

Tradition 2: Neuroscience / central fatigue
  Representative terms: central fatigue, supraspinal fatigue, central governor model,
    voluntary activation (VA), TMS, neural drive, group III/IV muscle afferents
  Planned angle slot: Confirmatory A2
  Gap flag: No — covered by A2

Tradition 3: Sports science / performance science
  Representative terms: endurance performance, training-induced fatigue resistance, pacing
    strategy, time trial, overtraining syndrome, performance decrement markers
  Planned angle slot: Confirmatory A3
  Gap flag: No — covered by A3

Tradition 4: Nutritional biochemistry / dietetics
  Representative terms: CHO metabolism, substrate depletion, exogenous carbohydrate, fuel
    oxidation, glycogen loading, fat oxidation, sports nutrition intervention
  Planned angle slot: Confirmatory A4
  Gap flag: No — covered by A4

Tradition 5: Psychophysiology / perception science
  Representative terms: RPE, Borg scale, affect valence, mental fatigue, brain endurance
    training, dissociation, effort perception, psychological tolerance to discomfort
  Planned angle slot: Confirmatory A5
  Gap flag: No — covered by A5

Tradition 6: Thermoregulation / environmental physiology
  Representative terms: hyperthermia, core temperature, dehydration, cardiovascular drift,
    sweat rate, heat stress, cooling strategies, fluid balance
  Planned angle slot: Confirmatory A6
  Gap flag: No — covered by A6

Tradition 7: Immunology / exercise immunology
  Representative terms: EIMD, CK, IL-6, CRP, oxidative stress, overreaching, overtraining
    syndrome (OTS), cytokine responses, muscle damage markers
  Planned angle slot: Confirmatory A7
  Gap flag: No — covered by A7

Traditions NOT yet represented in the planned list:
  All 7 traditions from intake brief have at least one planned angle slot.

Cross-disciplinary slot (required):
  Target tradition: Occupational ergonomics / industrial fatigue science
    (NOT present in any intake brief tradition)
  Basis for selection: Heuristic 2 (same real-world problem from human/organizational
    perspective). Industrial workers performing sustained physical tasks experience
    fatigue accumulation from the same mechanisms as endurance athletes but are studied
    with different instruments (FRMS, biomechanical exposure limits, Karolinska fatigue
    models, cumulative damage models). This literature may contain validated fatigue
    quantification frameworks not adopted by sports science.
```

---

## Type Allocations (Step 1)

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Exercise physiology / muscle physiology):
  Focus: peripheral fatigue mechanisms — metabolic acidosis, Pi accumulation, glycogen
  depletion effects on cross-bridge cycling, ROS-mediated contractile impairment

Slot A2 (Confirmatory — Neuroscience / central fatigue):
  Focus: supraspinal fatigue, voluntary activation decline, TMS-measured motor cortex
  output, role of group III/IV afferent feedback in central fatigue

Slot A3 (Confirmatory — Sports science / performance science):
  Focus: endurance performance decrements, training-induced fatigue resistance, pacing
  strategy optimization, practical markers in field settings

Slot A4 (Confirmatory — Nutritional biochemistry / dietetics):
  Focus: substrate availability and utilization rates, exogenous carbohydrate supplementation
  effect on performance, fat oxidation under different conditions

  Coverage-gap conditioning note for A4: distinguish from A1 — A1 covers what happens
  mechanistically when fuel runs low (cross-bridge, pH); A4 covers what determines
  how much fuel is available and nutritional interventions to maintain it.

Slot A5 (Confirmatory — Psychophysiology / perception science):
  Focus: RPE trajectory over prolonged exercise, mental fatigue overlay on physical
  fatigue, affect dynamics, perception-based models of exercise regulation

Slot A6 (Confirmatory — Thermoregulation / environmental physiology):
  Focus: hyperthermia-induced fatigue mechanisms, dehydration-induced cardiovascular
  drift, core temperature limits, cooling intervention effectiveness

Slot A7 (Confirmatory — Immunology / exercise immunology):
  Focus: EIMD and inflammatory cascade timeline, cytokine-fatigue relationship,
  overreaching vs. overtraining diagnostic markers

Slot N1 (Null-hypothesis):
  Focus: evidence that dominant fatigue models do NOT hold, do NOT generalize, or fail
  to replicate; ecological validity critiques; scope limitations in laboratory models

Slot D1 (Adversarial — Computational neuroscience / predictive processing):
  Starting tradition: predictive processing, active inference, allostatic regulation,
    Bayesian brain
  Excluding (all terms used in A1–A7): glycogen, lactate, metabolic acidosis, Pi,
    cross-bridge, ROS, TMS, voluntary activation, neural drive, afferent feedback, RPE,
    Borg scale, glycogen loading, IL-6, CK, core temperature, dehydration, pacing strategy

Slot C1 (Cross-disciplinary — Occupational ergonomics / industrial fatigue):
  Generating from occupational ergonomics vocabulary, NOT from sports physiology framing.
  Focus: sustained physical work fatigue models, FRMS, biomechanical exposure limits,
  cumulative fatigue quantification in industrial settings

Total angles: 10
  Confirmatory: 7 (A1–A7)
  Null-hypothesis: 1 (N1)
  Adversarial: 1 (D1)
  Cross-disciplinary: 1 (C1)

Justification for 7 confirmatory slots: 7 distinct vocabulary traditions identified at
intake; one confirmatory slot per tradition to ensure cross-tradition coverage. Count
of 10 is within the 5–12 standard range.
```

---

---

# STAGE 3: ANGLE LIST

---

## ANGLE 1: Peripheral metabolic mechanisms of muscle fatigue during prolonged exercise
```
Vocabulary tradition: Exercise physiology / muscle physiology
Angle type: Confirmatory
Predicted research character: empirical
  (expect peer-reviewed studies with controlled exercise protocols, muscle biopsies,
  in vitro single-fiber preparations, and metabolite measurements)
What to extract: Specific metabolites causing contractile impairment (Pi, H+, Mg2+),
  rate-limiting steps in ATP resynthesis during prolonged work, fiber-type-specific
  fatigue profiles, interaction effects between metabolites, thresholds for fatigue onset

Source type (academic): PubMed/Medline
  (primary index for exercise physiology/biomedical literature; Journal of Applied
  Physiology, American Journal of Physiology, Acta Physiologica indexed here)
Source type (practitioner): ACSM (American College of Sports Medicine) position papers
  on exercise physiology; deprioritized — domain is academic-heavy with minimal
  practitioner-specific production on mechanisms

Queries:
  Q1: peripheral fatigue mechanisms endurance exercise skeletal muscle metabolic review
  Q2: glycogen depletion mechanism muscle fatigue prolonged exercise fiber type specificity
  Q3: intramuscular acidosis inorganic phosphate cross-bridge inhibition fatigue exercise
  Q4: reactive oxygen species oxidative stress muscle contractile fatigue prolonged
      aerobic exercise
  Q5: ATP resynthesis demand mismatch fatigue skeletal muscle sustained exercise
      phosphocreatine

Coverage-gap note: Queries do not cover in vitro vs. in vivo discrepancy in fatigue
  mechanisms (lab models may overestimate pH effects at physiological temperatures);
  requires separate follow-up angle if mechanistic validity across settings is a
  priority. Also does not cover ultra-endurance durations (>6 hours) where mechanisms
  may shift.
```

---

## ANGLE 2: Central and supraspinal fatigue — neural drive, voluntary activation, and afferent feedback
```
Vocabulary tradition: Neuroscience / central fatigue
Angle type: Confirmatory
Predicted research character: empirical
  (expect TMS studies, interpolated twitch technique, central activation ratio
  measurements, neuroimaging during exercise, animal afferent block studies)
What to extract: Magnitude of voluntary activation decline during prolonged exercise,
  brain regions showing activity changes, role of group III/IV afferent input in limiting
  voluntary drive, central vs. peripheral contribution ratios, time course of central
  fatigue onset

Source type (academic): PubMed/Medline
  (Journal of Physiology, Journal of Neurophysiology, Experimental Physiology)
Source type (practitioner): deprioritized — central fatigue research is primarily
  academic laboratory science with limited practitioner output

Queries:
  Q1: central fatigue supraspinal drive endurance exercise voluntary activation review
  Q2: transcranial magnetic stimulation TMS motor cortex excitability fatigue prolonged
      exercise endurance
  Q3: central governor model brain regulation exercise fatigue Noakes evidence
  Q4: group III IV muscle afferents metaboreflex central fatigue endurance exercise
      feedback inhibition

Coverage-gap note: Does not explicitly cover neuroimaging (fMRI/EEG) during exercise —
  a methodologically distinct sub-literature; does not cover animal studies using
  afferent nerve blockade (which provide causal evidence not available from human TMS).
```

---

## ANGLE 3: Performance decrements, pacing, and training-induced fatigue resistance in endurance athletes
```
Vocabulary tradition: Sports science / performance science
Angle type: Confirmatory
Predicted research character: empirical
  (expect training intervention trials, time trial studies, field data, observational
  studies of athletic performance across competitive seasons)
What to extract: Validated performance-based markers of fatigue in field settings,
  dose-response of endurance training on fatigue resistance, pacing strategy adjustments
  under different fatigue conditions, performance decrement rates during prolonged events,
  overtraining diagnosis criteria and prevalence

Source type (academic): PubMed/Medline; Semantic Scholar
  (Medicine & Science in Sports & Exercise, International Journal of Sports Physiology
  and Performance, European Journal of Applied Physiology)
Source type (practitioner): British Journal of Sports Medicine (BJSM) — practitioner-
  facing systematic reviews; NSCA Strength & Conditioning Journal

Queries:
  Q1: endurance performance fatigue training adaptations fatigue resistance athletes
      review
  Q2: pacing strategy fatigue management prolonged running cycling competitive
  Q3: overtraining syndrome fatigue endurance athletes diagnosis performance markers
  Q4: training load monitoring fatigue management endurance athletes systematic review

Coverage-gap note: Does not cover sex differences in fatigue resistance (female
  endurance athletes represent a distinct sub-literature); does not cover ultra-
  endurance events (>12 hours) where pacing and fatigue dynamics may differ
  qualitatively.
```

---

## ANGLE 4: Nutritional substrate availability and carbohydrate metabolism as fatigue determinants
```
Vocabulary tradition: Nutritional biochemistry / dietetics
Angle type: Confirmatory
Predicted research character: empirical
  (expect nutrition trials, stable isotope tracer studies, metabolic chamber studies,
  randomized crossover designs comparing carbohydrate conditions)

  Coverage-gap conditioning note: This angle is distinct from A1 (peripheral metabolic
  mechanisms). A1 covers what happens mechanistically at the muscle when fuel runs low
  (cross-bridge inhibition, pH, Pi); this angle covers what determines how much fuel
  is available and how nutritional interventions maintain substrate supply.

What to extract: Carbohydrate intake dose-response for performance, exogenous CHO
  oxidation kinetics, fat oxidation rates under varying conditions, effect sizes for
  nutritional interventions on time-to-exhaustion and time trial performance,
  glycogen resynthesis rates relevant to recovery

Source type (academic): PubMed/Medline
  (International Journal of Sport Nutrition and Exercise Metabolism, Journal of the
  International Society of Sports Nutrition, American Journal of Clinical Nutrition)
Source type (practitioner): ACSM/AND/DC nutrition position papers; BJSM practitioner
  reviews on sport nutrition

Queries:
  Q1: carbohydrate oxidation substrate depletion fatigue prolonged endurance exercise
      nutrition metabolism
  Q2: exogenous carbohydrate ingestion fatigue prevention endurance performance
      systematic review meta-analysis
  Q3: glycogen content training status fatigue threshold endurance athletes substrate
  Q4: fat oxidation carbohydrate dependency fatigue ultra-endurance exercise
      ketoadaptation

Coverage-gap note: Does not cover micronutrients (iron, magnesium, vitamin D) with
  documented roles in fatigue; does not cover timing protocols (periodized fueling,
  train-low strategies) which represent a distinct sub-literature. These may be added
  as angles if the topic scope expands.
```

---

## ANGLE 5: Perceived exertion, mental fatigue, and psychological determinants of endurance capacity
```
Vocabulary tradition: Psychophysiology / perception science
Angle type: Confirmatory
Predicted research character: empirical
  (expect psychophysiological studies with RPE protocols, mental fatigue induction
  paradigms (Stroop, congruent/incongruent tasks), affect measurement instruments,
  brain endurance training intervention trials)

  Coverage-gap conditioning note: This angle covers the psychological experience and
  perception of fatigue — distinct from A2 (central fatigue neuroscience), which covers
  neural drive and TMS-measurable motor output. A5's queries use Borg/RPE vocabulary
  and psychological fatigue induction; A2 uses TMS and voluntary activation vocabulary.

What to extract: RPE trajectory over prolonged exercise duration, magnitude of mental
  fatigue effect on endurance performance, affect dynamics (pleasure-displeasure
  bifurcation at intensity thresholds), effect sizes for brain endurance training
  interventions, motivation-effort-perception coupling models

Source type (academic): PubMed/Medline; Semantic Scholar
  (Psychophysiology, British Journal of Sports Medicine, Journal of Sports Sciences,
  Frontiers in Psychology)
Source type (practitioner): BJSM review articles; sports psychology practitioner
  literature — OPTIONAL (academic-heavy sub-field but applied psychology literature
  exists)

Queries:
  Q1: rating perceived exertion RPE dynamics fatigue prolonged endurance exercise
      psychophysiology
  Q2: mental fatigue effect endurance exercise performance mechanisms systematic review
  Q3: affect valence exercise intensity fatigue dissociation theory endurance athletes
  Q4: brain endurance training cognitive fatigue tolerance endurance performance

Coverage-gap note: Does not cover self-regulation / motivational intensity theory
  explicitly; does not cover individual differences in pain tolerance and fatigue
  perception, which represents a distinct psychophysiological research stream.
```

---

## ANGLE 6: Thermoregulatory and dehydration-induced fatigue during prolonged aerobic exercise
```
Vocabulary tradition: Thermoregulation / environmental physiology
Angle type: Confirmatory
Predicted research character: empirical
  (expect controlled heat exposure studies, dehydration level manipulation trials,
  rectal/esophageal temperature measurement during exercise, cardiovascular drift
  quantification studies)

  Coverage-gap conditioning note: Adding an environmental/thermal dimension not yet
  represented in A1–A5. Heat and dehydration are among the most operationally
  significant fatigue causes in field competition settings.

What to extract: Core temperature threshold for fatigue onset, dose-response of
  dehydration on endurance performance, cardiovascular mechanisms of dehydration-
  induced fatigue, effectiveness of pre-cooling and mid-exercise cooling strategies,
  interaction between hyperthermia and other fatigue mechanisms

Source type (academic): PubMed/Medline
  (Journal of Applied Physiology, International Journal of Sports Physiology and
  Performance, Experimental Physiology, Temperature)
Source type (practitioner): ACSM position stand on exercise in heat; BJSM heat illness
  guidelines — RECOMMENDED (cooling strategies are practitioner-relevant)

Queries:
  Q1: hyperthermia core temperature fatigue endurance performance heat stress mechanism
  Q2: dehydration cardiovascular drift fatigue prolonged aerobic exercise
  Q3: thermoregulatory strain fatigue mechanisms endurance athletes warm conditions
      review
  Q4: pre-cooling cooling strategies core temperature fatigue mitigation endurance
      performance meta-analysis

Coverage-gap note: Does not cover altitude / hypoxia as a fatigue-inducing environmental
  stress (separate and substantial sub-literature); does not cover cold-environment
  exercise, which has distinct fatigue mechanisms. Humidity effects are
  underrepresented in these queries.
```

---

## ANGLE 7: Exercise-induced muscle damage, inflammation, and immune responses as fatigue determinants
```
Vocabulary tradition: Immunology / exercise immunology
Angle type: Confirmatory
Predicted research character: empirical
  (expect post-exercise biopsy studies, blood biomarker assays, inflammatory cascade
  timelines, longitudinal monitoring studies in athletes)

  Coverage-gap conditioning note: Adding the inflammatory/immune dimension — distinct
  from A1 (metabolic mechanisms), A3 (performance), and A6 (thermoregulation). The
  fatigue-inflammation link involves cytokines and EIMD pathways not covered by
  earlier angles.

What to extract: Timeline of inflammatory marker elevation after prolonged exercise,
  CK and troponin thresholds predictive of prolonged fatigue, IL-6 role in central vs.
  peripheral fatigue signaling, overreaching vs. overtraining diagnostic criteria,
  relationship between immune stress and performance decrements

Source type (academic): PubMed/Medline
  (Medicine & Science in Sports & Exercise, Journal of Applied Physiology,
  Brain Behavior and Immunity, European Journal of Applied Physiology)
Source type (practitioner): BJSM clinical reviews on overtraining; ACSM position on
  athlete health monitoring

Queries:
  Q1: exercise-induced muscle damage inflammation fatigue endurance athletes prolonged
      immune response
  Q2: cytokine IL-6 fatigue prolonged endurance exercise systemic brain signaling
  Q3: oxidative stress biomarkers creatine kinase fatigue endurance prolonged exercise
      time course
  Q4: overreaching overtraining syndrome immune fatigue markers endurance athletes
      diagnosis

Coverage-gap note: Does not cover the gut microbiome–fatigue link (emerging
  sub-literature); does not cover sleep disruption as an immune-mediated fatigue
  pathway; does not cover COVID-19 / post-viral fatigue in athletes, which represents
  a recent and growing research area.
```

---

## ANGLE 8: Evidence that dominant fatigue models do not generalize — replication failures and scope limitations [NULL-HYPOTHESIS]
```
Vocabulary tradition: Exercise fatigue research (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: gap
  (disconfirming literature is sparse — much fatigue research is confirmatory; this
  angle's purpose is partly to document what absence of disconfirming literature means,
  and partly to find methodological critiques and negative results that do exist)
What to extract: Conditions under which proposed fatigue mechanisms fail to explain
  performance, failed replications of landmark studies, methodological critiques of
  laboratory protocols (ecological validity), scope conditions under which central
  governor model predictions do not hold, inter-individual variability studies showing
  mechanism heterogeneity, cases where fatigue mechanism research did not translate
  to real competition

Source type (academic): PubMed/Medline; Semantic Scholar
  (Sports Medicine, British Journal of Sports Medicine, Frontiers in Physiology —
  all carry critical commentary and methodological reviews)
Source type (practitioner): BJSM editorial and debate pieces — recommended
  (practitioner journals occasionally publish critique and controversy pieces)

Queries:
  Q1: central fatigue endurance exercise limitations not generalize critique failure
      replicate
  Q2: glycogen depletion fatigue hypothesis limitations counter-evidence controlled
      conditions
  Q3: central governor model critique falsifiability Noakes evidence against
      counter-argument
  Q4: fatigue mechanisms endurance exercise ecological validity laboratory field
      discrepancy negative result

Coverage-gap note: This angle may retrieve few papers because the field produces
  relatively little explicit null-result / negative-finding literature. If queries
  return low yield, the documented ABSENCE of disconfirming literature is itself
  a finding — report it as such. The gap between "failure to find disconfirming
  evidence" and "no disconfirming evidence exists" must be made explicit at
  synthesis.
```

---

## ANGLE 9: Predictive processing, active inference, and allostatic regulation as alternative frameworks for exercise fatigue [ADVERSARIAL-FLAGGED]
```
[ADVERSARIAL-FLAGGED: dispatch in a separate research context with no prior
 confirmatory results. Running this angle after reading A1–A7 confirmatory
 literature will not escape the prior-belief vocabulary pool — context separation
 is required. Reviewer reading A1–A7 before executing this angle is a structural
 violation of the adversarial requirement.]

Vocabulary tradition: Computational neuroscience / predictive processing
Angle type: Adversarial

Generation method: Generated from explicitly different starting vocabulary.
  Starting tradition: computational neuroscience — Friston's active inference
  framework, predictive coding, allostasis (Sterling/Schulkin), Bayesian brain,
  interoceptive prediction error.
  Terms excluded (all from A1–A7): glycogen, lactate, metabolic acidosis,
  inorganic phosphate, cross-bridge, ROS, TMS, voluntary activation, neural drive,
  afferent feedback, RPE, Borg scale, glycogen loading, IL-6, CK, core temperature,
  dehydration, pacing strategy, overtraining, EIMD.

Predicted research character: gap
  (this is a relatively novel application of predictive processing to exercise fatigue;
  most papers in this vocabulary tradition are theoretical or in adjacent domains;
  few directly-titled exercise fatigue papers expected — purpose is to surface the
  sparse literature and theoretical frameworks that DO exist)

What to extract: Papers applying predictive coding or active inference to exercise
  regulation; allostatic models of fatigue onset; evidence that fatigue is anticipatory
  rather than reactive (brain predicts depletion before it occurs); challenges to the
  claim that fatigue tracks a peripheral physiological limit; theoretical arguments
  against reductionist single-mechanism accounts of exercise fatigue

Why adversarial: The dominant models (peripheral metabolic, central governor, RPE-
  linked) are largely mechanism-reductionist — they look for a single limiting variable.
  The predictive processing framework challenges this by proposing fatigue as an
  emergent property of a Bayesian predictive system regulating interoceptive state,
  not a threshold phenomenon. Literature from this tradition would challenge A1, A2, and
  A5 at the conceptual level, not just the empirical level.

Source type (academic): Semantic Scholar (cross-disciplinary; will retrieve cognitive
  science and computational neuroscience papers not indexed together in PubMed);
  PubMed/Medline for any direct exercise-application papers
Source type (practitioner): Not applicable — this tradition is academic/theoretical

Queries:
  Q1: predictive processing active inference fatigue exercise effort regulation brain
  Q2: allostatic regulation exercise fatigue interoceptive prediction error Bayesian
  Q3: free energy principle interoception exercise regulation fatigue Friston
  Q4: anticipatory vs reactive fatigue mechanisms brain prediction exercise termination

Coverage-gap note: The Fristonian predictive processing framework is highly
  theoretical; it may retrieve philosophy of mind and theoretical neuroscience papers
  rather than exercise-science empirical studies. The downstream research agent should
  be prepared to extract conceptual frameworks (not just effect sizes) from this angle.
  This is expected — gap predicted research character applies.
```

---

## ANGLE 10: Occupational ergonomics and industrial fatigue models — transferable frameworks for sustained physical effort
```
Vocabulary tradition: Occupational ergonomics / industrial fatigue science
  [NOT in intake brief traditions list — verified cross-disciplinary]
Angle type: Cross-disciplinary
Predicted research character: consensus
  (occupational fatigue has established measurement and modeling frameworks; expect
  validated tools, position papers, standards documents, and review articles describing
  validated approaches — less RCT-type empirical literature, more framework/model
  literature)
What to extract: Validated occupational fatigue assessment instruments applicable to
  endurance contexts, biomechanical and metabolic cumulative exposure models,
  Fatigue Risk Management System (FRMS) frameworks and their quantitative basis,
  work capacity limits at different sustained effort levels, any studies directly
  comparing occupational and athletic fatigue using the same measurement tools

Source type (academic): Semantic Scholar (cross-disciplinary — ergonomics literature
  spans Human Factors, Applied Ergonomics, Ergonomics, Occupational & Environmental
  Medicine); PubMed for medical-occupational fatigue content
Source type (practitioner): NIOSH (National Institute for Occupational Safety and
  Health) technical reports; ISO standards on physical work demands — RECOMMENDED
  (occupational fatigue is explicitly practitioner-facing with regulatory context)

Queries:
  Q1: occupational fatigue physical labor sustained work biomechanical model assessment
  Q2: fatigue risk management systems FRMS physical work capacity endurance
      quantification
  Q3: cumulative physical fatigue industrial workers sustained effort biomechanical
      exposure limits
  Q4: work capacity limits physical occupational exposure fatigue assessment instruments
      validated

Coverage-gap note: Occupational fatigue research is primarily concerned with injury
  prevention and work scheduling — the translation to athletic performance contexts
  may require methodological adaptation. Does not cover cognitive/mental fatigue in
  occupational settings (separate sub-literature); does not cover circadian fatigue
  models from occupational sleep science (Karolinska, FRMS for shift work) which
  may also yield transferable tools.
```

---

---

# STAGE 4: QUALITY GATES

## Applying angle-quality.md — all four gates

---

### Gate 1 — Completeness checks

**Null-hypothesis angle present:**
- Angle 8 is explicitly framed as null-hypothesis.
- Query strings include disconfirming vocabulary: "failure," "limitations," "not generalize," "critique," "counter-evidence," "counter-argument," "negative result," "discrepancy."
- PASS

**Adversarial angle present:**
- Angle 9 carries label: `[ADVERSARIAL-FLAGGED: dispatch in a separate research context with no prior confirmatory results]`
- Label present. PASS

**Cross-disciplinary angle present:**
- Angle 10 (Occupational ergonomics / industrial fatigue science) targets a tradition NOT in the intake brief's candidate vocabulary traditions list.
- Intake brief traditions: exercise physiology, neuroscience, sports science, nutrition, psychophysiology, thermoregulation, immunology.
- Occupational ergonomics does not appear in any of these seven traditions. PASS

**Source-type coverage:**
- Domain maturity: academic-heavy.
- Under academic-heavy: practitioner sources optional but recommended.
- Practitioner sources are named in A3, A4, A6, A7, A8, A10.
- PASS (optional condition met)

**Vocabulary-tradition map populated:**
- Coverage map names 7 distinct vocabulary traditions plus 1 cross-disciplinary tradition (8 total).
- Coverage map is populated before any angle was written.
- PASS

**Gate 1 verdict: PASS — all five items pass.**

---

### Gate 2 — Distinctness checks

**Boolean-connective test (applied to potentially overlapping pairs):**

**Pair: A1 (peripheral metabolic) vs. A4 (nutritional biochemistry)**
- A1's most distinctive terms: "cross-bridge inhibition," "Pi accumulation," "intramuscular acidosis"
- A4's most distinctive terms: "exogenous carbohydrate ingestion," "fuel oxidation," "glycogen loading," "ketoadaptation"
- Overlap check: "glycogen depletion" appears in A1-Q2; "glycogen content" appears in A4-Q3.
- Formal Boolean test: A1 OR A4 — would these retrieve the same documents?
- A1 queries target mechanistic consequences within the muscle cell (metabolite measurements, in vitro fiber studies). A4 queries target upstream substrate availability and nutrition intervention trials. These have different populations of source documents. Glycogen is a shared term but the surrounding vocabulary is different enough that OR retrieval would NOT produce the same documents.
- PASS

**Pair: A2 (central fatigue neuroscience) vs. A9/D1 (predictive processing)**
- A2's most distinctive terms: "TMS," "voluntary activation," "afferent feedback," "supraspinal"
- D1's most distinctive terms: "predictive processing," "active inference," "allostatic regulation," "interoceptive prediction error"
- No shared distinctive terms. PASS (no formal test required)

**Pair: A5 (psychophysiology / RPE) vs. A9/D1 (predictive processing)**
- A5's most distinctive terms: "RPE," "Borg scale," "mental fatigue," "dissociation theory"
- D1's most distinctive terms: "active inference," "free energy principle," "Bayesian brain"
- No shared distinctive terms. PASS

**Pair: A1 (peripheral fatigue) vs. A7 (exercise immunology)**
- A1 queries: metabolic acidosis, Pi, cross-bridge, glycogen
- A7 queries: IL-6, CK, oxidative stress, EIMD, overreaching
- Shared term: "oxidative stress" / "ROS" appears in both A1-Q4 and A7-Q3.
- Overlap risk: Some review papers on exercise fatigue discuss both metabolic and inflammatory markers. However: A1's oxidative stress query is framed as "ROS-mediated muscle contractile fatigue" (mechanism); A7's oxidative stress query is framed as "biomarkers" and "muscle damage" (measurement and immune response). These would retrieve different document populations. PASS with note: if oxidative stress literature yields heavy overlap in retrieval, consider scoping A1-Q4 to "in vitro ROS contractile fatigue" and A7-Q3 to "serum oxidative stress biomarkers."

**Vocabulary-tradition distinctness check:**
- All 10 angles have distinct vocabulary-tradition labels.
- The only potential exception is N1, which uses "Exercise fatigue research (disconfirming variant)" — this is the null-hypothesis variant of the exercise physiology tradition, which is explicitly permitted by the rule ("one is the null-hypothesis variant").
- PASS

**VOCABULARY SELF-REPORT FLAG (angle-quality.md Limit 3):**
All vocabulary traditions in this angle list were enumerated by LLM only (Source A + Source C). No survey paper was consulted. The cross-tradition coverage check assumes accurate tradition enumeration, which cannot be verified without external signal. External validation via survey-paper probe is recommended before accepting this tradition check as complete. Traditions most at risk of being missing: niche sub-fields (e.g., comparative physiology / animal models of fatigue; circadian / sleep science fatigue models; rehabilitation science / return-to-sport fatigue frameworks).

**Gate 2 verdict: PASS — no failing pairs identified. VOCABULARY SELF-REPORT FLAG required.**

---

### Gate 3 — Launchability checks

**Has at least one concrete query string (per angle):**
- All 10 angles have concrete query strings pasteable into a search interface. PASS across all angles.

**No placeholder vocabulary:**
- Reviewed all query strings across all 10 angles. No "TBD," "to be determined," "[fill in]," or equivalent placeholder vocabulary found. PASS

**Source type is named:**
- All 10 angles name at least one specific platform (PubMed/Medline, Semantic Scholar, BJSM, ACSM, NIOSH). No angle uses vague language like "relevant sources" or "some database."
- PASS

**Gate 3 verdict: PASS — all angles dispatch-ready.**

---

### Gate 4 — Scoring prohibition

**No LLM self-evaluation ranking:**
- No angles were ranked or prioritized during generation.
- Selection criteria used throughout: vocabulary-tradition coverage (structural), source-type coverage (structural), null-hypothesis presence (required), Boolean-connective distinctness (structural).
- No phrase "most promising," "most relevant," or "strongest angle" appears in any angle record. PASS

**No implicit quality assessment:**
- Reviewed all angle records. No "this angle is likely to be most useful" or equivalent phrases. PASS

**Gate 4 verdict: PASS.**

---

### Gate Summary

```
GATE SUMMARY
============
Gate 1 — Completeness: PASS
  All five completeness items confirmed:
  - Null-hypothesis angle present (Angle 8): PASS
  - Adversarial angle present with ADVERSARIAL-FLAGGED label (Angle 9): PASS
  - Cross-disciplinary angle not in intake brief (Angle 10): PASS
  - Source-type coverage for academic-heavy domain: PASS (practitioner sources named
    in A3, A4, A6, A7, A8, A10)
  - Vocabulary-tradition map populated with ≥2 distinct traditions: PASS (7 traditions
    in map, populated before angle generation)

Gate 2 — Distinctness: PASS
  Boolean-connective test run on all potentially overlapping pairs:
  - A1 vs. A4: PASS (distinct document populations despite shared "glycogen" term)
  - A2 vs. D1: PASS (no shared distinctive terms)
  - A5 vs. D1: PASS (no shared distinctive terms)
  - A1 vs. A7: PASS with caution note (oxidative stress appears in both; scoping
    recommendation noted in coverage-gap notes)
  All tradition labels distinct (N1 null-hypothesis exception applied correctly).
  VOCABULARY SELF-REPORT FLAG: all traditions enumerated by LLM only;
  survey-paper validation recommended.

Gate 3 — Launchability: PASS
  All 10 angles have concrete query strings, no placeholder vocabulary, named sources.

Gate 4 — Scoring prohibition: PASS
  No LLM self-evaluation ranking used. Structural criteria throughout.

Overall verdict: PASS — angle list is dispatch-ready.

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all 7 vocabulary traditions were enumerated by LLM
     only. Missing traditions are possible. Recommended action: run one survey-paper
     probe (e.g., "fatigue endurance exercise review 2023 2024") and check title
     vocabulary against this list before finalizing.
  2. Occupational ergonomics cross-disciplinary translation gap — occupational fatigue
     frameworks were developed for injury prevention and work scheduling contexts;
     translation to athletic performance contexts requires methodological judgment.
     Human decision required at synthesis stage.
  3. A1 vs. A7 oxidative stress overlap — if retrieval produces heavy overlap, narrow
     A1-Q4 to "in vitro ROS contractile fatigue" and A7-Q3 to "serum oxidative stress
     biomarkers in athletes." No action needed before dispatch; decision at synthesis.
  4. Null-hypothesis (Angle 8) may return sparse results — the exercise fatigue
     literature produces relatively little explicit null-result literature. Low yield
     is itself informative; document and report the absence at synthesis.
  5. D1 (predictive processing) may return theoretical rather than empirical papers —
     this is expected given the "gap" predicted research character. The downstream
     research agent should be calibrated to extract conceptual frameworks, not just
     effect sizes.
```

---

---

# POST-GENERATION SELF-CHECK (CLAUDE.md Rule 6 — after-every-task)

**What is present:**
- Intake brief: populated, all fields complete, intake gate passed
- Coverage map: 7 intake traditions + 1 cross-disciplinary tradition
- Type allocations: documented before any angle was written
- Angle list: 10 angles — 7 confirmatory, 1 null-hypothesis, 1 adversarial, 1 cross-disciplinary
- Quality gates: all 4 run; gate summary produced; overall verdict PASS

**What is missing or questionable in this output:**

1. **Survey paper validation absent (Source B unavailable):** The vocabulary traditions are entirely LLM self-reported. The occupational ergonomics cross-disciplinary angle is the most at risk — if the dominant framing in occupational fatigue has shifted or uses different terms than expected, this angle's queries may miss the target literature. VOCABULARY SELF-REPORT FLAG is present; human action required.

2. **No comparative anatomy / evolutionary biology tradition** enumerated. The evolution of fatigue mechanisms in locomoting animals (migratory birds, fish, large mammals) represents a comparative physiology literature that could provide causal evidence on fatigue mechanisms that is ethically unavailable in human research. This tradition was not identified by Source A/C. It is flagged here as a potential omission — not added as an angle because the evidence for its existence requires Source B to confirm.

3. **Sleep science / circadian fatigue models** were not enumerated as a separate tradition. Fatigue accumulation models from sleep science (two-process model, three-process model, FRMS for shift work) have a quantitative framework that might transfer to exercise fatigue. This is a potential missing tradition. Flagged — not acted on without Source B.

4. **Ultra-endurance duration scope** (>6 hours: multi-day events, ultra-marathons) may have qualitatively different fatigue dynamics from standard prolonged exercise. None of the angles explicitly target this scope. The existing queries may miss this sub-literature. If the user's interest includes ultra-endurance specifically, A3 or A4 should add a scope-specific query.

5. **No angle on individual differences in fatigue susceptibility** — some athletes are dramatically more fatigue-resistant than others for reasons not fully explained by training history. This represents a research question in genetics, psychophysiology, and exercise physiology. Not covered — flagged as a potential 11th angle if scope warrants.

**Proposed next step for user:**
Before dispatching this angle list, run a single survey-paper probe (Source B) on "fatigue endurance exercise review 2024 2025" and check the title and abstract vocabulary against the 7 traditions listed here. Any tradition label in the survey paper title NOT in this list is a vocabulary gap requiring a new angle. This is the highest-priority gap given VOCABULARY SELF-REPORT FLAG.

---

*End of angle-gen-kit output — INT-11 / H4 / Cond-C*
