# angle-gen-kit — Full Procedure Output
**Topic:** I want to research how endurance athletes adapt to altitude training.
**Source B status:** UNAVAILABLE (no web search access — subagent/sandboxed context)
**Run date:** 2026-07-07
**Model:** claude-sonnet-4-6

---

## PHASE 1 — INTAKE PROCEDURE (intake.md)

---

### Step 1 — Sparse-input parsing

| Element | Extracted |
|---------|-----------|
| Target concept | How endurance athletes adapt to altitude training |
| Anchor vocabulary | "endurance athletes" (sports science tradition), "altitude training" (sports science / coaching tradition), "adapt" (physiology tradition) |
| Scope signals | None stated explicitly — no altitude range, sport type, training protocol, or date range constrained |

No ambiguity in target concept — single clear reading. No intake questions required.

---

### Step 2 — Vocabulary bootstrap

**Source A — LLM translation:**

For "endurance athletes":
- Also called: aerobic athletes, distance runners, cyclists, cross-country skiers, rowers, triathletes, long-duration exercise performers, aerobic capacity athletes, sustained-effort athletes

For "altitude training":
- Also called: high-altitude training, hypoxic training, altitude acclimatization, altitude exposure, live high train low (LHTL), live high train high (LHTH), normobaric hypoxia, hypobaric hypoxia, simulated altitude, altitude camp, hypoxic tents

For "adapt" (in physiological context):
- Also called: acclimatization, physiological adaptations, hematological adaptations, molecular adaptations, cellular adaptations, performance adaptations, chronic hypoxic adaptation

Vocabulary traditions identifiable from Source A:

1. **Exercise physiology / sports science** — VO2max, aerobic capacity, hemoglobin mass, oxygen transport, cardiac output, running economy, lactate threshold, altitude acclimatization, stroke volume
2. **Hematology / blood science** — erythropoiesis, erythropoietin (EPO), red blood cell mass, reticulocytes, hemoglobin concentration, iron metabolism, blood volume, transferrin saturation, hematocrit
3. **Molecular biology / genetics** — HIF-1α (hypoxia-inducible factor), VEGF, mitochondrial biogenesis, PGC-1α, AMPK, gene expression, oxidative phosphorylation, hypoxia signaling cascade
4. **Respiratory physiology** — hypoxic ventilatory response (HVR), arterial oxygen saturation (SpO2), pulmonary diffusion capacity, ventilatory acclimatization, minute ventilation, respiratory muscle fatigue
5. **Performance science / coaching** — live high train low, altitude camp periodization, training load, dose-response, race performance, training protocol design

**Source B — Survey-paper probe:** UNAVAILABLE. Web search not available in this execution context. Vocabulary-discovery pass recommended before accepting angle list as covering all traditions.

**Source C — Absent-term signal:**

User said "how endurance athletes adapt to altitude training" but did NOT use:
1. "HIF-1α" — most prominent molecular signaling term in altitude adaptation literature
2. "erythropoiesis" — the canonical hematological mechanism
3. "live high train low (LHTL)" — the most studied altitude training protocol
4. "acclimatization" — the canonical term for physiological altitude adaptation
5. "hypoxic exposure" — common research framing in controlled studies

Absent-term interpretation: User is approaching from a layperson-accessible sports science angle rather than a molecular or clinical angle. The technical vocabulary spanning hematology, molecular biology, and respiratory physiology is absent from their framing — these are high-priority vocabulary gaps to cover.

---

### Step 3 — Question-type classification

**Classification: EXPLORATORY**

Basis: The prompt "I want to research how endurance athletes adapt to altitude training" contains no comparison language, no intervention-outcome structure, no named comparison. It asks for the space of findings on a phenomenon.

PCC frame applied:
- **P**opulation: endurance athletes
- **C**oncept: physiological adaptation to hypoxia / altitude
- **C**ontext: altitude training (training camp, LHTL, or equivalent exposure)

PICO NOT applied at intake — exploratory question type prohibits PICO at intake (PICO requires domain vocabulary for all fields; applying it here would produce empty or forced fields).

---

### Step 4 — Intake brief

```
INTAKE BRIEF
============
Topic: Physiological, molecular, and performance adaptations of endurance athletes to altitude training

Anchor vocabulary: "endurance athletes" (sports science tradition), "altitude training" (sports science / coaching tradition), "adapt" (general physiology tradition)

Candidate vocabulary traditions:
  1. Exercise physiology / sports science — VO2max, hemoglobin mass, oxygen transport, cardiac output, running economy, lactate threshold, altitude acclimatization, stroke volume
  2. Hematology / blood science — EPO, erythropoiesis, red blood cell mass, reticulocytes, iron metabolism, hemoglobin concentration, blood volume, hematocrit, transferrin
  3. Molecular biology / genetics — HIF-1α, VEGF, mitochondrial biogenesis, PGC-1α, AMPK, gene expression, oxidative phosphorylation, hypoxia signaling
  4. Respiratory physiology — hypoxic ventilatory response (HVR), arterial oxygen saturation (SpO2), pulmonary diffusion capacity, ventilatory acclimatization, minute ventilation
  5. Performance science / coaching — live high train low (LHTL), altitude camp, training load, periodization, dose-response, race outcomes, protocol design

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure in the prompt)

Scope markers: None stated — inferred scope: all endurance sports (running, cycling, cross-country skiing, rowing), all altitude adaptation mechanisms (physiological, molecular, performance), altitude range not constrained

Known exclusions: None stated

Domain maturity estimate: Academic-heavy with practitioner component (mixed)
  Basis: Anchor vocabulary is lay-accessible sports science; the underlying mechanism literature (HIF pathway, erythropoiesis) is heavily academic (PubMed, Journal of Applied Physiology, MSSE); practitioner resources exist (altitude camp design literature, coaching manuals, national federation guidelines); classified as mixed.

Survey paper status: NOT FOUND — Source B unavailable. Vocabulary-discovery pass recommended before finalizing angle list.

Source B status: UNAVAILABLE — MODERATE (Source A + Source C together produced 5 distinct vocabulary traditions, well above the ≥2 threshold for MODERATE assessment)

Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):
  Target tradition: Evolutionary biology / comparative physiology
  Selection basis: Same real-world problem from a different perspective — high-altitude indigenous populations (Tibetan, Andean, Ethiopian) have evolved heritable altitude adaptations over geological timescales (EPAS1, EGLN1 gene variants); this literature uses vocabulary entirely absent from sports science (natural selection, population genetics, GWAS, hemoglobin-oxygen affinity curves, genetic sweep). The tradition bounds what training-induced adaptation can achieve by documenting the biological ceiling set by evolution. Adjacent problem solved by similar mechanism: both evolutionary biology and exercise physiology ask how an organism sustains aerobic performance under chronic hypoxia.
```

---

### Step 5 — Fallback protocol applied

Source B unavailable. Flags applied:
- VOCABULARY SELF-REPORT FLAG active — all vocabulary traditions enumerated by LLM only
- Source B status: UNAVAILABLE — MODERATE — 5 traditions identified via Source A + Source C

Severity: MODERATE. Angle generation proceeds with VOCABULARY SELF-REPORT FLAG active throughout.

---

### Step 6 — Intake gate

- [x] Topic field is populated: YES — "Physiological, molecular, and performance adaptations of endurance athletes to altitude training"
- [x] Candidate vocabulary traditions has ≥2 entries: YES — 5 traditions listed
- [x] Question type is classified: YES — EXPLORATORY
- [x] Cross-disciplinary tradition pre-commit field is populated: YES — Evolutionary biology / comparative physiology, selection basis stated

**All four gate conditions met. Proceeding to angle-generation.md.**

---

## PHASE 2 — ANGLE GENERATION (angle-generation.md)

---

### Step 0 — Coverage map

```
COVERAGE MAP
============
Tradition 1: Exercise physiology / sports science
  Representative terms: VO2max, hemoglobin mass, oxygen transport, cardiac output, running economy, lactate threshold, acclimatization, stroke volume
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: Hematology / blood science
  Representative terms: EPO, erythropoiesis, red blood cell mass, reticulocytes, iron metabolism, hemoglobin concentration, blood volume, hematocrit
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: Molecular biology / genetics
  Representative terms: HIF-1α, VEGF, mitochondrial biogenesis, PGC-1α, AMPK, gene expression, oxidative phosphorylation, hypoxia signaling
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Respiratory physiology
  Representative terms: hypoxic ventilatory response (HVR), SpO2, pulmonary diffusion capacity, ventilatory acclimatization, minute ventilation
  Planned angle slot: Confirmatory A4
  Gap flag: No

Tradition 5: Performance science / coaching
  Representative terms: LHTL, altitude camp, training load, periodization, dose-response, race outcomes, protocol comparison
  Planned angle slot: Confirmatory A5
  Gap flag: No

Additional tradition identified during generation:
Tradition 6: Sports medicine / athlete health monitoring
  Representative terms: iron deficiency, AMS, overreaching, HRV, biomarker monitoring, altitude illness, recovery
  Planned angle slot: Confirmatory A6
  Basis for separation: distinct clinical-monitoring vocabulary not addressed by Tradition 5 (which is outcome-focused, not monitoring-focused)
  Gap flag: No

Traditions NOT yet represented in planned list:
  - Pharmacology / doping science (EPO doping, altitude tents legality): intentionally excluded — out of scope for adaptation research; would skew toward anti-doping literature
  - Psychology / motivation science: covered by the adversarial angle D1

Cross-disciplinary slot (required):
  Target tradition: Evolutionary biology / comparative physiology (NOT in intake brief)
  Basis for selection: High-altitude indigenous populations (Tibetan, Andean, Ethiopian) demonstrate heritable altitude adaptations via EPAS1/EGLN1 gene variants — a distinct vocabulary cluster (natural selection, GWAS, hemoglobin-oxygen affinity) not present in any sports science tradition. The tradition answers: what is the biological ceiling of altitude adaptation? How does training-induced adaptation compare to the evolutionary optimum? Adjacent problem solved the same way: both fields ask how aerobic organisms sustain oxidative phosphorylation under low-oxygen conditions.
  Heuristic applied: Same real-world problem (sustained aerobic performance under hypoxia) from a different field perspective.

Angle count justification:
  5+ distinct vocabulary traditions qualify this as a "hard input" per angle-generation.md, which permits 20–30 angles. However, the topic's traditions converge on a single biological phenomenon (altitude hypoxia), reducing meaningful cross-tradition combinatorial space. Target: 9 angles covering all required types and all 6 identified traditions. If a downstream research agent requires broader coverage, additional angles can be generated from the coverage map.
```

---

### Step 1 — Structural angle-type allocation

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Exercise physiology / sports science): Cardiovascular and hematological adaptations
Slot A2 (Confirmatory — Hematology / blood science): Erythropoietic cascade — EPO, RBC mass
Slot A3 (Confirmatory — Molecular biology / genetics): HIF-1α pathway and mitochondrial adaptation
Slot A4 (Confirmatory — Respiratory physiology): Ventilatory acclimatization and pulmonary response
Slot A5 (Confirmatory — Performance science / coaching): LHTL protocols and performance outcomes
Slot A6 (Confirmatory — Sports medicine / athlete health monitoring): Iron status, altitude illness, overreaching risk
Slot N1 (Null-hypothesis): Assigned — evidence against altitude training benefit; non-responders
Slot D1 (Adversarial): Starting tradition: Sports psychology / expectancy / psychobiology. NOT FROM: exercise physiology, hematology, molecular biology, respiratory physiology, performance science, sports medicine
Slot C1 (Cross-disciplinary): Evolutionary biology / comparative physiology (NOT in intake brief — named in coverage map)
```

---

### Step 2 — Coverage-gap conditioning applied

Each angle was generated by first listing which vocabulary traditions were already covered, then asking: what aspect of the topic is NOT yet addressed by those traditions? The conditioning prompt for each slot is documented inline in the angle records below.

---

### Step 3 — Source-type assignment

Domain maturity: Mixed (academic-heavy with practitioner component). Rule: practitioner source REQUIRED for at least one angle.

Practitioner sources assigned to: Angle 1 (coaching manuals, federation guidelines), Angle 2 (WADA biological passport documentation), Angle 5 (altitude camp white papers, federation position statements), Angle 6 (national federation medical guidelines), Angle 7 (sports science critical literature), Angle 8 (elite coach reports, practitioner publications).

---

## ANGLE LIST

---

```
ANGLE 1: Cardiovascular and oxygen-transport adaptations to altitude in endurance athletes
===========
Vocabulary tradition: Exercise physiology / sports science
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Measured changes in VO2max, hemoglobin mass, stroke volume, cardiac output; time-course of adaptations across altitude exposure durations; individual variation magnitudes; recovery trajectory post-altitude; sex differences in adaptation

Coverage-gap conditioning: First angle — no prior traditions to condition against. Starting from the user's entry vocabulary (endurance, altitude training, adapt) and the exercise physiology tradition directly.

Source type (academic): PubMed — Journal of Applied Physiology, Medicine & Science in Sports & Exercise, European Journal of Applied Physiology
Source type (practitioner): National federation altitude training guidelines; elite coaching manuals (e.g., USATF, Athletics Australia altitude camp documentation)

Queries:
  Q1: altitude training VO2max hemoglobin mass endurance athletes adaptation review
  Q2: high altitude acclimatization cardiovascular response endurance performance physiological
  Q3: oxygen transport capacity altitude exposure aerobic athletes meta-analysis systematic review
  Q4: hemoglobin mass increase altitude camp endurance athletes longitudinal study
    [Facet: Q4 covers specifically hemoglobin mass measurement as a distinct outcome variable from VO2max in Q1]

Coverage-gap note: Does not address molecular upstream signals (HIF pathway) or the specific blood-production cascade — those are covered in Angles 2 and 3.
```

---

```
ANGLE 2: Erythropoietic cascade — EPO dynamics, reticulocyte response, and iron metabolism
===========
Vocabulary tradition: Hematology / blood science
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Time-course of EPO elevation at altitude; reticulocyte production kinetics; iron utilization and depletion during erythropoiesis; total hemoglobin mass measurement methodology; minimum altitude duration for erythropoietic benefit; EPO washout after return to sea level

Coverage-gap conditioning: Tradition 1 (exercise physiology) covered. Not yet addressed: the specific biochemical cascade of red blood cell production — EPO as a signaling molecule, iron as the rate-limiting substrate, reticulocyte count as the early-response marker. Exercise physiology searches focus on outcomes (VO2max); hematology searches find the production machinery.

Source type (academic): PubMed — American Journal of Hematology, Haematologica, Blood, plus Journal of Applied Physiology for cross-domain studies
Source type (practitioner): WADA biological passport documentation; anti-doping agency technical reports on altitude-exposed athlete hematological profiles

Queries:
  Q1: erythropoietin altitude exposure endurance athletes erythropoiesis kinetics time-course
  Q2: EPO response high altitude training hemoglobin synthesis reticulocyte athletes
  Q3: iron metabolism altitude training endurance athletes ferritin transferrin saturation
  Q4: total hemoglobin mass measurement altitude training duration dose-response athletes
    [Facet: Q4 covers measurement methodology and duration threshold — distinct from EPO kinetics]

Coverage-gap note: Does not address upstream HIF-1α regulation of EPO gene transcription — that is covered in Angle 3.
```

---

```
ANGLE 3: HIF-1α-mediated hypoxia signaling and mitochondrial adaptation
===========
Vocabulary tradition: Molecular biology / genetics
Angle type: Confirmatory
Predicted research character: empirical
What to extract: HIF-1α activation thresholds by altitude and duration; downstream target gene upregulation (VEGF, EPO, GLUT-1, carbonic anhydrase); mitochondrial biogenesis via PGC-1α/AMPK pathway; oxidative enzyme activity changes in trained vs. untrained skeletal muscle; time-course and reversibility of molecular adaptations in athletes

Coverage-gap conditioning: Traditions 1 (exercise physiology) and 2 (hematology) covered. Not yet addressed: the upstream transcriptional machinery that drives all measured physiological adaptations — HIF-1α is the master regulator of the hypoxic response at cellular level. Terms like gene expression, mitochondrial biogenesis, VEGF, PGC-1α, AMPK are not retrieved by exercise physiology or hematology queries.

Source type (academic): PubMed — Journal of Physiology, American Journal of Physiology-Cell Physiology, PNAS, Free Radical Biology and Medicine
Source type (practitioner): Deprioritized — molecular biology is academic-heavy; minimal practitioner production in this vocabulary cluster

Queries:
  Q1: HIF-1α hypoxia gene expression endurance athletes skeletal muscle altitude
  Q2: hypoxia inducible factor altitude training mitochondrial biogenesis athletes
  Q3: VEGF angiogenesis altitude training muscle adaptation endurance exercise
  Q4: PGC-1α AMPK hypoxia exercise interaction mitochondrial adaptation athletes
    [Facet: Q4 covers AMPK/PGC-1α as a distinct signaling node from HIF-1α direct targets]
  Q5: HIF pathway exercise hypoxia EPO transcription athletes altitude training
    [Facet: Q5 covers HIF regulation of EPO gene specifically — bridging Traditions 2 and 3]

Coverage-gap note: Does not address respiratory physiology adaptations driven separately from HIF pathway — those require Angle 4.
```

---

```
ANGLE 4: Hypoxic ventilatory response and pulmonary adaptations in endurance athletes
===========
Vocabulary tradition: Respiratory physiology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Magnitude and trainability of hypoxic ventilatory response (HVR); changes in arterial oxygen saturation (SpO2) during altitude exercise; pulmonary diffusion capacity and its limits at altitude; respiratory muscle fatigue at altitude; individual variation in HVR predicting altitude acclimatization and performance; time-course of ventilatory adaptation

Coverage-gap conditioning: Traditions 1, 2, 3 covered. Not yet addressed: the respiratory system's response to altitude — a distinct physiological system from the cardiovascular/hematological system covered in A1/A2, and driven partly by different mechanisms than HIF pathway molecular signaling. Hypoxic ventilatory response, SpO2, and pulmonary diffusion capacity are respiratory physiology vocabulary not retrieved by exercise physiology, hematology, or molecular biology searches.

Source type (academic): PubMed — Respiratory Physiology & Neurobiology, High Altitude Medicine & Biology, Journal of Applied Physiology
Source type (practitioner): Deprioritized — respiratory physiology is academic-heavy

Queries:
  Q1: hypoxic ventilatory response altitude training endurance athletes acclimatization
  Q2: arterial oxygen saturation altitude exercise SpO2 endurance performance athletes
  Q3: pulmonary diffusion capacity high altitude athletes aerobic exercise adaptations
  Q4: ventilatory acclimatization altitude training duration reversibility athletes
    [Facet: Q4 covers reversibility of ventilatory adaptations — distinct from magnitude of initial response]

Coverage-gap note: Does not address how ventilatory changes interact with cardiovascular adaptations to determine net oxygen delivery — that integration is covered in Angle 1 at the outcome level.
```

---

```
ANGLE 5: Live high train low protocols — design parameters and performance outcomes
===========
Vocabulary tradition: Performance science / coaching
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Optimal altitude range for LHTL (meters above sea level); minimum exposure duration for performance benefit; sleep vs. exercise altitude combination effects; time-trial and race performance outcomes in controlled studies; comparison of LHTL vs. LHTH vs. normobaric hypoxia tents; washout period and retention of benefits post-camp; responder vs. non-responder rates in protocol studies

Coverage-gap conditioning: Traditions 1, 2, 3, 4 covered. Not yet addressed: practical protocol design — the coaching/performance science literature frames altitude training as a protocol optimization problem (altitude dose, duration, training load combination, LHTL vs. LHTH comparison) rather than a mechanism study. The vocabulary (LHTL, altitude range in meters, washout period, training periodization) is not captured by physiological or molecular searches.

Source type (academic): PubMed — International Journal of Sports Physiology and Performance, Medicine & Science in Sports & Exercise, Journal of Strength and Conditioning Research
Source type (practitioner): Altitude camp white papers from national federations (USATF, Athletics Australia, Norwegian Olympic Federation); elite coaching reports and position statements

Queries:
  Q1: live high train low altitude protocol endurance performance systematic review
  Q2: altitude camp design elevation duration exposure performance outcomes athletes
  Q3: normobaric hypoxia tent sleep altitude training efficacy comparison LHTL
  Q4: live high train low versus live high train high endurance performance comparison
    [Facet: Q4 covers LHTL vs. LHTH protocol comparison — distinct from individual protocol parameters]
  Q5: altitude training washout period performance retention post-camp sea level
    [Facet: Q5 covers retention/washout — distinct from during-camp outcomes]

Coverage-gap note: Does not address the inter-individual response variability in protocol outcomes — that requires Angle 7 (null-hypothesis) and Angle 6 (athlete monitoring).
```

---

```
ANGLE 6: Altitude illness risk, iron status management, and athlete health monitoring
===========
Vocabulary tradition: Sports medicine / athlete health monitoring
Angle type: Confirmatory
Predicted research character: empirical + consensus
What to extract: Iron supplementation protocols during altitude; acute mountain sickness (AMS) incidence and prevention in athletes; overreaching/overtraining risk at altitude; biomarker-guided training monitoring at altitude (HRV, subjective load, sleep quality, ferritin); altitude illness prevention and management; safe altitude exposure ceilings for athlete health

Coverage-gap conditioning: Traditions 1, 2, 3, 4, 5 covered. Not yet addressed: the clinical-monitoring dimension — what can go wrong during altitude training (iron depletion, AMS, overreaching) and how to monitor athletes to prevent harm. This tradition uses clinical vocabulary (AMS, HACE, HAPE, ferritin, HRV, training load monitoring) not present in any preceding angle's vocabulary cluster.

Source type (academic): PubMed — High Altitude Medicine & Biology, British Journal of Sports Medicine, International Journal of Sports Medicine
Source type (practitioner): National Olympic Committee medical guidelines for altitude camps; physician/sports medicine practitioner resources

Queries:
  Q1: iron deficiency altitude training endurance athletes supplementation ferritin
  Q2: acute mountain sickness athletes training camp high altitude prevention
  Q3: overtraining overreaching altitude hypoxia training load biomarkers athletes
  Q4: athlete biomarker monitoring altitude camp iron status EPO HRV sleep quality
    [Facet: Q4 covers integrated biomarker monitoring protocol — distinct from single-variable risk studies]

Coverage-gap note: Does not address pharmacological interventions (altitude illness drugs, iron IV infusion) — intentionally excluded as out of scope for adaptation research.
```

---

```
ANGLE 7: Null-hypothesis — failure to adapt, non-responders, and negative results
===========
Vocabulary tradition: Null-hypothesis methodology (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical + gap (mixed — some non-responder literature exists; replication failure literature is sparse)
What to extract: Studies showing no significant hemoglobin mass change; no VO2max improvement; no performance benefit; "non-responder" phenotype identification and predictors; scope conditions under which altitude training fails (too high, too low, too short, pre-existing iron deficiency, wrong training load); placebo-controlled or sham-altitude studies showing no benefit; individual genetic variation predicting non-response

Coverage-gap conditioning: Disconfirming search — formulated against the literature that altitude training does produce benefits. What query string would retrieve literature showing altitude adaptation does NOT occur, does NOT generalize, or does NOT hold under specific scope conditions?

Source type (academic): PubMed — search specifically for null results, replication failures, non-responder studies in MSSE, Journal of Applied Physiology, IJSPP
Source type (practitioner): Sports science practitioner blogs and critical literature questioning altitude training ROI; coach reports of failed altitude camps

Queries:
  Q1: altitude training non-responders no improvement endurance performance individual variation
  Q2: hypoxic training null result no effect hemoglobin mass athletes failure
  Q3: altitude training placebo control sham hypoxia no performance improvement controlled trial
  Q4: individual variation altitude training response predictors genetics non-response
    [Facet: Q4 covers predictor identification for non-response — distinct from documenting the non-response phenomenon]

Coverage-gap note: The null-hypothesis literature for altitude training is smaller than the confirmatory literature — "gap" character means this angle may return limited results, which is itself a finding worth documenting.
```

---

```
ANGLE 8: Adversarial — psychological, expectancy, and motivational contributions to altitude training "effects"
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Sports psychology / psychobiology
Angle type: Adversarial
Predicted research character: empirical + gap
What to extract: Evidence that altitude training camp effects are partially or fully mediated by psychological factors (expectancy, motivation, structured training compliance, social factors of group training camp environment); studies separating psychological from physiological mechanisms; placebo-controlled designs with sham altitude; whether performance improvement after altitude camps occurs in sea-level control groups with equivalent training load; coach/athlete belief effects

Coverage-gap conditioning: Generated from sports psychology / expectancy science tradition, explicitly excluding vocabulary from all prior confirmatory angles.

Vocabulary terms EXCLUDED from this generation prompt (not to be used in queries below): VO2max, hemoglobin mass, EPO, erythropoiesis, erythropoietin, HIF-1α, mitochondrial biogenesis, VEGF, ventilatory response, SpO2, pulmonary diffusion, LHTL, live high train low, iron deficiency, AMS, ferritin.

Starting vocabulary used: performance expectancy, placebo effect, training motivation, perceived effort, belief effects, psychological adaptation, group cohesion, training camp environment, nocebo, attention, controlled performance setting.

Source type (academic): PubMed, PsycINFO — Sport, Exercise and Performance Psychology; Psychology of Sport and Exercise; Journal of Experimental Psychology: Applied
Source type (practitioner): Elite coaching reports comparing altitude camp vs. equivalent sea-level training camp outcomes; sports psychology practitioner literature

Queries:
  Q1: altitude training camp performance improvement expectancy placebo effect psychology
  Q2: training camp performance gains psychological factors motivation non-physiological mechanisms
  Q3: perceived exertion motivation hypoxia exercise belief performance controlled trial
  Q4: sham altitude normobaric hypoxia placebo controlled design performance belief expectancy
    [Facet: Q4 covers specifically sham/placebo experimental designs — distinct from general expectancy effects]

Coverage-gap note: The literature separating psychological from physiological altitude effects is sparse; this angle may have gap character. That sparseness is itself informative — it suggests the field has not rigorously tested expectancy confounds.
```

---

```
ANGLE 9: Cross-disciplinary — Evolutionary biology of altitude adaptation and biological limits
===========
[CROSS-DISCIPLINARY: tradition NOT in intake brief]

Vocabulary tradition: Evolutionary biology / comparative physiology
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: EPAS1 and EGLN1 genetic variants and their functional effects on hemoglobin-oxygen affinity; comparison of Tibetan vs. Andean vs. Ethiopian altitude adaptation strategies (different evolutionary solutions to the same problem); what heritable limits these findings impose on the magnitude of training-induced adaptation; comparative physiology of high-altitude animals (bar-headed geese, yaks, Tibetan mastiffs) as mechanistic models; whether athletic populations show any allele enrichment related to altitude response

Coverage-gap conditioning: Generating from evolutionary biology / comparative physiology vocabulary — a tradition entirely absent from the intake brief. Not covered by any angle so far: heritable altitude adaptation, EPAS1 gene, natural selection, population genetics, genomic signals of altitude selection, hemoglobin-oxygen affinity evolution, non-human animal comparative physiology.

Source type (academic): PubMed — PNAS, Nature Genetics, American Journal of Human Genetics, Journal of Experimental Biology, Genome Biology and Evolution
Source type (practitioner): Deprioritized — evolutionary biology is academic-heavy; minimal practitioner production in this vocabulary cluster

Queries:
  Q1: EPAS1 altitude adaptation Tibetan Andean indigenous populations genetics hemoglobin
  Q2: evolutionary biology high altitude adaptation hemoglobin oxygen affinity natural selection populations
  Q3: heritable altitude adaptation genetic variants endurance performance athletes
  Q4: comparative physiology altitude adaptation bar-headed geese yaks high altitude animals
    [Facet: Q4 covers non-human comparative physiology — distinct from human population genetics]
  Q5: high altitude native populations athletic performance endurance VO2max advantage
    [Facet: Q5 covers whether indigenous altitude populations have measurable athletic advantages — links evolutionary and sports science traditions]

Coverage-gap note: This angle retrieves human evolutionary genetics and comparative physiology literature — it does not directly answer whether training mimics evolutionary adaptations, but provides the biological reference frame for interpreting training adaptation magnitudes.
```

---

## PHASE 3 — QUALITY GATES (angle-quality.md)

---

### Gate 1 — Completeness checks

| Check | Status | Evidence |
|-------|--------|----------|
| Null-hypothesis angle present | PASS | Angle 7 — uses disconfirming vocabulary: "non-responders," "no improvement," "null result," "failure," "no effect," "no performance improvement" across all 4 queries |
| Adversarial angle present | PASS | Angle 8 — labeled [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results] |
| Cross-disciplinary angle present | PASS | Angle 9 — vocabulary tradition "Evolutionary biology / comparative physiology" is NOT in the intake brief's 5 candidate traditions |
| Source-type coverage (practitioner) | PASS | Domain maturity = mixed. Practitioner sources assigned to Angles 1, 2, 5, 6, 7, 8. |
| Vocabulary-tradition map populated (≥2 traditions) | PASS | Coverage map contains 6 distinct traditions |

**Gate 1 result: PASS**

---

### Gate 2 — Distinctness checks

**Boolean-connective test — key angle pairs:**

| Pair | Most distinctive query terms | Would OR retrieve same documents? | Result |
|------|-----------------------------|------------------------------------|--------|
| A1 vs A2 | A1: "VO2max, cardiovascular" / A2: "erythropoietin, reticulocyte" | No — different systems | PASS |
| A1 vs A3 | A1: "VO2max, cardiac output" / A3: "HIF-1α, gene expression, mitochondrial" | No — different resolution levels | PASS |
| A1 vs A4 | A1: "hemoglobin mass, cardiac output" / A4: "hypoxic ventilatory response, SpO2, pulmonary diffusion" | No — cardiovascular vs. respiratory systems | PASS |
| A1 vs A5 | A1: "VO2max, hemoglobin mass" / A5: "live high train low, LHTL, altitude protocol" | Partial overlap in broad reviews — but A1 retrieves mechanism studies, A5 retrieves protocol comparison studies. Boolean-connective test: would OR on these terms retrieve substantially the same documents? No — mechanism searches and protocol-design searches access different primary literature. PASS — note: broad reviews may appear in both. |
| A2 vs A3 | A2: "EPO, erythropoiesis, reticulocyte" / A3: "HIF-1α, VEGF, mitochondrial biogenesis" | No — A3's VEGF/mitochondrial terms do not appear in A2; EPO appears in A3 only in Q5 where the HIF-EPO link is the explicit topic. Distinct. PASS |
| A3 vs A4 | A3: "HIF-1α, mitochondrial biogenesis" / A4: "hypoxic ventilatory response, pulmonary diffusion" | No — different biological systems | PASS |
| A4 vs A6 | A4: "ventilatory response, SpO2" / A6: "AMS, iron deficiency, overreaching" | No — different topics | PASS |
| A5 vs A6 | A5: "LHTL, protocol, performance outcomes" / A6: "AMS, iron deficiency, HRV, biomarker monitoring" | No — different problem framing | PASS |
| N1 vs A1 | N1: "non-responders, null result, no effect, no improvement" / A1: "adaptation, increase, improvement" | No — disconfirming vs. confirmatory framing retrieves different paper populations | PASS |
| D1 vs all | D1: "expectancy, placebo, psychological, motivation, perceived exertion" / all others: physiological vocabulary | No — entirely different vocabulary cluster | PASS |
| C1 vs all | C1: "EPAS1, evolutionary biology, Tibetan, Andean, natural selection, genetics" / all others: training/physiology vocabulary | No — different fields | PASS |

**Vocabulary-tradition distinctness:**

| Angle | Tradition label | Shared-label check |
|-------|-----------------|--------------------|
| A1 | Exercise physiology / sports science | Unique |
| A2 | Hematology / blood science | Unique |
| A3 | Molecular biology / genetics | Unique |
| A4 | Respiratory physiology | Unique |
| A5 | Performance science / coaching | Unique |
| A6 | Sports medicine / athlete health monitoring | Unique |
| N1 | Null-hypothesis methodology (disconfirming variant) | Exempt — null-hypothesis type |
| D1 | Sports psychology / psychobiology | Unique; exempt — adversarial type |
| C1 | Evolutionary biology / comparative physiology | Unique |

All 9 angles have distinct tradition labels. Null-hypothesis and adversarial exemptions apply correctly.

**Gate 2 result: PASS** — note: A1 and A5 may share broad reviews in overlapping search results; Boolean-connective test confirms they are not synonyms (different facets: mechanisms vs. protocol design). No mergers required.

---

### Gate 3 — Launchability checks

| Angle | Has concrete query | No placeholders | Source types named |
|-------|-------------------|-----------------|--------------------|
| Angle 1 | PASS (4 queries) | PASS | PASS (PubMed journals + federation guidelines) |
| Angle 2 | PASS (4 queries) | PASS | PASS (PubMed journals + WADA documentation) |
| Angle 3 | PASS (5 queries) | PASS | PASS (PubMed journals; practitioner deprioritized with reason) |
| Angle 4 | PASS (4 queries) | PASS | PASS (PubMed journals; practitioner deprioritized with reason) |
| Angle 5 | PASS (5 queries) | PASS | PASS (PubMed journals + federation white papers) |
| Angle 6 | PASS (4 queries) | PASS | PASS (PubMed journals + NOC medical guidelines) |
| Angle 7 | PASS (4 queries) | PASS | PASS (PubMed + practitioner critical literature) |
| Angle 8 | PASS (4 queries) | PASS | PASS (PubMed + PsycINFO + coaching reports) |
| Angle 9 | PASS (5 queries) | PASS | PASS (PubMed journals; practitioner deprioritized with reason) |

**Gate 3 result: PASS**

---

### Gate 4 — Scoring prohibition

Verification: No angle contains "most promising," "most relevant," "most novel," "strongest," or equivalent subjective assessments. All filtering and allocation decisions used structural criteria:
- Vocabulary-tradition coverage (coverage map)
- Type allocation (Step 1 allocations before generation)
- Coverage-gap conditioning (explicit excluded-tradition lists at each slot)
- Source-type coverage (domain maturity → practitioner source rule)
- Boolean-connective test (distinctness, not quality)

**Gate 4 result: PASS**

---

### Gate summary

```
GATE SUMMARY
============
Gate 1 — Completeness: PASS — all five completeness checks passed
Gate 2 — Distinctness: PASS — all angle pairs pass Boolean-connective test; all tradition labels distinct; note: A1 and A5 share some overlapping broad reviews but are not synonyms (different facets)
Gate 3 — Launchability: PASS — all 9 angles have concrete query strings, no placeholders, named source types
Gate 4 — Scoring prohibition: PASS — structural criteria only; no LLM self-evaluation ranking

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all vocabulary traditions were enumerated by LLM only; no survey paper available (Source B unavailable). External validation via survey-paper probe recommended before accepting the tradition check as complete. A domain expert may identify traditions missing from this list (e.g., nutritional physiology, sleep science at altitude, high-altitude pharmacology, neuroscience of altitude effects).
  2. Source B unavailable — MODERATE severity. Expected angle coverage: MODERATE, not FULL. A Source B pass (survey paper probe on "altitude training endurance athletes") may surface additional vocabulary traditions and should be run before accepting the angle list as exhaustive.
  3. Angle count: 9 angles produced against a hard-input domain (≥4 traditions, multi-disciplinary) where 20–30 is permitted. Justification: traditions converge on one biological phenomenon; 9 angles cover all required types and all 6 identified traditions. If broader coverage is required, the coverage map supports extension to the full 20–30 angle range.
  4. Small-literature note: Angle 7 (null-hypothesis) and Angle 8 (adversarial — expectancy effects) are predicted to have gap character — the literature may be sparse. Boolean-connective test cannot distinguish sparse-literature overlap from angle redundancy. Human judgment required if both angles return overlapping results.
```

---

## POST-GATE SELF-CHECK (CLAUDE.md after-every-task rule)

What is missing, incomplete, or questionable in this output:

**1. Source B gap (named — but gap exists).** All vocabulary traditions are LLM self-reported. Per intake.md Step 5 and weakness_register.md Weakness 1: the kit cannot enumerate traditions outside LLM training distribution. An altitude physiology expert may identify gaps in this list. The most likely missing traditions: nutritional physiology at altitude (carbohydrate oxidation at altitude, appetite suppression, body composition), sleep science at altitude (sleep fragmentation, CheyneStokes respiration), neuroscience (cognitive effects of altitude, sleep architecture disruption), and pharmacology (acetazolamide, iron IV). None of these are covered in the 9 angles.

**2. Angle 1 / Angle 5 vocabulary proximity.** Flagged in Gate 2. A downstream research agent should be aware that broad systematic review searches may retrieve overlapping documents. The facet split (mechanisms vs. protocol design) is real, but a single broad search on "altitude training endurance performance review" would overlap both. This is not a quality failure but a research execution note.

**3. No Source B survey paper title vocabulary.** The intake brief's "Survey paper status: NOT FOUND" entry is a gap — it means the vocabulary traditions list rests entirely on LLM enumeration. Running one survey query ("altitude training endurance athletes review 2022 2023 2024 2025") would add significant vocabulary signal.

**4. VOCABULARY SELF-REPORT FLAG active throughout.** Per weakness_register.md Weakness 7 (EMPIRICAL UPDATE — INT-10): coverage-gap conditioning produces NEAR-ZERO DIFFERENTIAL on topics well-represented in LLM training data. Altitude physiology is a topic represented in LLM training (physiology, MSSE, Journal of Applied Physiology). This means the cross-tradition conditioning in Step 2 may add marginal vocabulary novelty only. The kit's primary value on this topic shifts to Q5 (actionability of angle formulation) and Q3 (precision of query strings), per the weakness_register note.

**5. Angle 8 adversarial quality.** The adversarial angle was generated in the same context window as the confirmatory angles, which violates the structural separation requirement in angle-generation.md Step 1. The kit correctly labels it ADVERSARIAL-FLAGGED and includes the dispatch note. Downstream agent must honor the label. Per weakness_register.md Weakness 6: this kit cannot enforce execution-time separation — downstream agent owns this risk.

**Next step:** This angle list is dispatch-ready (all gates PASS). A downstream research agent can begin execution. Recommended execution order: Angles 1-6 (confirmatory, in separate search passes); Angle 7 (null-hypothesis, in its own pass); Angle 9 (cross-disciplinary, in its own pass); Angle 8 (adversarial, in a SEPARATE context with no prior confirmatory results visible). If Source B access becomes available: run survey paper probe before executing any angles and add vocabulary to the intake brief.

---

*End of angle-gen-kit procedure output. 9 angles generated. All quality gates PASS. VOCABULARY SELF-REPORT FLAG active. Dispatch-ready with flags noted above.*
