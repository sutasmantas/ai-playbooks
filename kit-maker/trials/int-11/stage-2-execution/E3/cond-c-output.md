# angle-gen-kit — Condition C Output
**Topic:** "I want to research the science of endurance training and performance."
**Run date:** 2026-07-07
**Condition:** Source B unavailable — LLM enumeration only (Source A + Source C)
**Model:** claude-sonnet-4-6

---

## DEPLOYMENT CONSTRAINT NOTICE

Source B (web search / survey-paper probe) is UNAVAILABLE in this execution context.

Severity assessment: **MODERATE** — Source A + Source C together identified ≥5 distinct vocabulary traditions. Proceeding with the VOCABULARY SELF-REPORT FLAG active. Expected angle coverage: MODERATE, not FULL — cross-disciplinary and niche traditions may be under-enumerated.

Domain note: Endurance training science is a biomedical/sports science domain — NOT in the "heavily-represented ML/AI" category flagged in weakness_register.md Weakness 7 (FM4). Coverage-gap conditioning retains meaningful differential value here, unlike LLM/AI research topics where near-zero differential has been measured.

---

## INTAKE BRIEF
============

**Topic:** The scientific basis of endurance training and its effects on athletic performance — covering physiological adaptations, training methods, molecular mechanisms, nutritional factors, and psychological determinants.

**Anchor vocabulary:** "endurance training" (sports science/exercise physiology tradition), "performance" (sports science tradition), "science" (signals academic framing)

**Candidate vocabulary traditions:**

1. **Exercise Physiology** — VO2max, maximal oxygen uptake, cardiac output, stroke volume, oxygen delivery, oxygen utilization, capillary density, blood volume, arteriovenous oxygen difference, lactate threshold, anaerobic threshold, ventilatory threshold
2. **Biochemistry / Molecular Biology** — mitochondrial biogenesis, PGC-1α, AMPK signaling, mTOR, oxidative phosphorylation, lactate shuttle, substrate oxidation, fat oxidation, glycogen metabolism, gene expression, reactive oxygen species, antioxidant response
3. **Sports Science / Training Theory** — periodization, training load, intensity distribution, polarized training, threshold training, pyramidal training, high-intensity interval training (HIIT), long slow distance (LSD), supercompensation, overreaching, overtraining syndrome, tapering, training volume, training density
4. **Sports Nutrition** — carbohydrate loading, glycogen resynthesis, fueling strategies, caloric periodization, ergogenic aids, caffeine, sodium bicarbonate, beta-alanine, iron deficiency, heat acclimatization nutrition, train-low eat-high strategies, metabolic flexibility
5. **Sports Psychology / Neuroscience** — central governor model, pacing strategy, rating of perceived exertion (RPE), mental fatigue, brain-derived neurotrophic factor (BDNF), motivational factors, executive function, attentional focus, central fatigue hypothesis, autonomic nervous system regulation
6. **Biomechanics / Movement Science** — running economy, energy cost of locomotion, stride mechanics, cadence, ground contact time, elastic energy storage, muscle-tendon unit, movement efficiency, biomechanical determinants of performance

NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

**Question type:** EXPLORATORY
(No comparison language, no intervention-outcome structure, no named method being evaluated. "I want to research the science of X" is the canonical exploratory prompt pattern.)

**Scope markers:** None stated — inferred scope: the scientific literature on endurance training adaptations and performance determinants, across all endurance modalities (running, cycling, rowing, swimming) unless a specific modality is later specified.

**Known exclusions:** None stated.

**Domain maturity estimate:** MIXED (academic + practitioner)
Basis: "endurance training" and "performance" span both a substantial academic literature (Journal of Applied Physiology, Medicine and Science in Sports and Exercise, Journal of Physiology, European Journal of Applied Physiology) and a large practitioner production (coaching frameworks, training platforms, practitioner blogs, athlete self-reporting). Neither dominates exclusively. Domain requires coverage of both production types.

**Survey paper status:** NOT FOUND — Source B unavailable. Vocabulary-discovery pass via survey-paper probe is recommended before finalizing the angle list. Procedure: search `"endurance training" performance review 2023 2024 2025` and check title vocabulary for traditions not yet enumerated above.

**Source B status:** UNAVAILABLE — MODERATE (Source A+C produced ≥5 distinct vocabulary traditions, well above the ≥2 threshold for MODERATE severity).

**Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):**
Target tradition: Evolutionary biology / comparative anthropology
Selection basis: Same real-world problem from a human perspective — sustained locomotion and endurance capacity have been studied as an evolutionary adaptation in Homo sapiens. This tradition produced findings (persistence hunting hypothesis, thermoregulatory running adaptations, comparative anatomy of endurance capacity across primates) that do not appear in sports science or exercise physiology journals and use different vocabulary (natural selection, comparative anatomy, Homo sapiens locomotion, hunter-gatherer activity). Highest coverage novelty relative to all six traditions enumerated above.

---

## INTAKE GATE CHECK

- [x] Topic field populated (not "TBD")
- [x] Candidate vocabulary traditions: 6 entries (well above ≥2 minimum)
- [x] Question type classified: EXPLORATORY
- [x] Cross-disciplinary tradition pre-committed: Evolutionary biology / comparative anthropology named; selection basis stated

**Gate status: ALL FOUR CONDITIONS MET. Proceeding to angle-generation.md.**

---

## PHASE-GATE REFLECTION (intake → angle generation)

1. Are all output fields in the intake brief populated (no blanks)? YES — all fields filled; survey paper status explicitly flagged as not found.
2. Are ≥2 distinct vocabulary traditions listed? YES — 6 traditions listed.
3. Is the question type classified? YES — EXPLORATORY.

**Proceeding to angle generation.**

---

## COVERAGE MAP
============

**Tradition 1: Exercise Physiology**
Representative terms: VO2max, cardiac output, stroke volume, oxygen delivery, lactate threshold, capillary density, blood volume
Planned angle slot: Confirmatory A1
Gap flag: No

**Tradition 2: Biochemistry / Molecular Biology**
Representative terms: mitochondrial biogenesis, PGC-1α, AMPK, mTOR, lactate shuttle, substrate oxidation, gene expression
Planned angle slot: Confirmatory A2
Gap flag: No

**Tradition 3: Sports Science / Training Theory**
Representative terms: periodization, polarized training, HIIT, LSD, training load, intensity distribution, supercompensation
Planned angle slot: Confirmatory A3
Gap flag: No

**Tradition 4: Sports Nutrition**
Representative terms: carbohydrate loading, ergogenic aids, fueling strategies, metabolic flexibility, iron, caffeine
Planned angle slot: Confirmatory A4
Gap flag: No

**Tradition 5: Sports Psychology / Neuroscience**
Representative terms: central governor model, RPE, pacing strategy, mental fatigue, central fatigue, BDNF
Planned angle slot: Confirmatory A5
Gap flag: No

**Tradition 6: Biomechanics / Movement Science**
Representative terms: running economy, energy cost of locomotion, stride mechanics, elastic energy storage, muscle-tendon unit
Planned angle slot: Confirmatory A6
Gap flag: No

**Traditions NOT yet represented in the planned list:** None — all 6 traditions from intake brief have at least one angle slot.

**Cross-disciplinary slot (required):**
Target tradition: Evolutionary biology / comparative anthropology — NOT in the intake brief traditions list above
Basis for selection: Heuristic 2 — same real-world problem from a human perspective (sustained locomotion performance). This tradition addresses WHY humans have endurance capacity, using vocabulary (persistence hunting, thermoregulatory adaptation, comparative primate anatomy, natural selection for running) that is not accessible via any of the 6 intake-brief traditions. Highest coverage novelty — the least likely to be retrieved by searches anchored in the intake-brief vocabulary.

---

## TYPE ALLOCATIONS
================

Slot A1 (Confirmatory — Exercise Physiology): cardiovascular and oxygen transport adaptations to endurance training
Slot A2 (Confirmatory — Biochemistry/Molecular Biology): molecular mechanisms of endurance adaptation
Slot A3 (Confirmatory — Sports Science/Training Theory): optimal training intensity distribution and periodization for endurance performance
Slot A4 (Confirmatory — Sports Nutrition): nutritional strategies and substrate utilization for endurance performance
Slot A5 (Confirmatory — Sports Psychology/Neuroscience): central nervous system and psychological determinants of endurance performance
Slot A6 (Confirmatory — Biomechanics/Movement Science): running economy and biomechanical efficiency as performance determinants
Slot N1 (Null-hypothesis): assigned — evidence that common endurance training interventions do NOT produce expected performance gains
Slot D1 (Adversarial): starting vocabulary NOT FROM: Exercise Physiology, Biochemistry, Sports Science, Sports Nutrition, Psychology, Biomechanics — using genetics/heritability vocabulary
Slot C1 (Cross-disciplinary): Evolutionary biology / comparative anthropology (from coverage map cross-disciplinary slot)

Total: 9 angles (6 confirmatory, 1 null-hypothesis, 1 adversarial, 1 cross-disciplinary)
Justification for 9 vs. minimum 5: 6 distinct vocabulary traditions identified at intake; all 6 warrant independent angle representation to prevent vocabulary-tradition gap; total remains within the 5-12 standard range.

---

## ANGLE LIST

---

### ANGLE 1 (N1): Evidence that endurance training interventions do NOT produce expected performance improvements
===========
Vocabulary tradition: Exercise Physiology (disconfirming variant — null-hypothesis framing)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Conditions under which training interventions fail to improve performance, evidence of non-responders, heterogeneity in training adaptation, negative results and null findings, replication failures of widely-cited training protocols

Source type (academic): PubMed (MEDLINE — primary platform for sports science physiology; journal targets: MSSE, Journal of Applied Physiology, British Journal of Sports Medicine)
Source type (practitioner): GitHub repositories for training data analysis tools; athlete monitoring platforms documentation — to capture practitioner-observed non-response patterns not published in academic journals

Queries:
  Q1: endurance training non-responders performance adaptation heterogeneity systematic review
  Q2: high-intensity interval training VO2max no improvement null result randomized controlled trial
  Q3: periodization endurance training failure generalize meta-analysis limitations
  Q4: individual response variability aerobic training exercise intervention replication

Coverage-gap note: This angle focuses on aggregate non-response and heterogeneity; it does not cover the mechanisms of non-response (which is partially addressed by A2's molecular tradition). The boundary between "training does not work" and "training works but not for all individuals" is a scope judgment left to human review.

---

### ANGLE 2 (A1): Cardiovascular and oxygen transport adaptations to endurance training
===========
Vocabulary tradition: Exercise Physiology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Effect sizes for cardiac output increases, stroke volume adaptations, VO2max improvements, oxygen delivery/utilization changes, blood volume expansion, capillary density increases — as a function of training duration, intensity, and modality

Source type (academic): PubMed (Journal of Applied Physiology, Journal of Physiology, Acta Physiologica — field-specific journals with this content)
Source type (practitioner): Training platforms (TrainingPeaks, Garmin Connect) technical white papers where cardiac output/VO2 estimation methodology is documented — practitioner production is relevant here for population-scale observational data

Queries:
  Q1: cardiac adaptations endurance training VO2max stroke volume cardiac output review meta-analysis
  Q2: oxygen delivery utilization skeletal muscle endurance exercise training adaptation
  Q3: blood volume expansion endurance training erythropoiesis hemoglobin mass performance
  Q4: capillary density mitochondrial density skeletal muscle endurance training review

Coverage-gap note: This angle covers systemic and peripheral oxygen transport but does not explicitly address respiratory adaptations (ventilatory threshold, ventilatory efficiency) — these are covered implicitly by the lactate threshold vocabulary but warrant a separate query if respiratory physiology is a key focus.

---

### ANGLE 3 (A2): Molecular and cellular mechanisms of endurance adaptation
===========
Vocabulary tradition: Biochemistry / Molecular Biology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Signaling pathways activated by endurance exercise, mitochondrial biogenesis regulators (PGC-1α, AMPK, p38 MAPK), gene expression changes, protein synthesis and degradation responses, oxidative enzyme upregulation, reactive oxygen species as training signals

Source type (academic): PubMed (Cell Metabolism, Journal of Physiology, American Journal of Physiology — Regulatory Integrative and Comparative Physiology; Semantic Scholar for cross-linking)
Source type (practitioner): deprioritized — molecular biology of exercise adaptation has minimal practitioner production; academic-dominant subfield

Queries:
  Q1: mitochondrial biogenesis endurance exercise PGC-1alpha AMPK signaling pathway review
  Q2: molecular adaptations skeletal muscle endurance training gene expression protein synthesis
  Q3: lactate shuttle hypothesis endurance training George Brooks oxidative metabolism review
  Q4: reactive oxygen species redox signaling endurance exercise training adaptation

Coverage-gap note: mRNA vs. protein-level regulation is a distinction this angle does not specifically separate. If post-translational regulation is a key interest, a facet query targeting proteomics of exercise adaptation would be needed.

---

### ANGLE 4 (A3): Optimal training intensity distribution and periodization for endurance performance
===========
Vocabulary tradition: Sports Science / Training Theory
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Comparisons between polarized, threshold, and pyramidal training intensity distributions; periodization model effectiveness; training load quantification methods; evidence on optimal volume-intensity trade-offs; practitioner models vs. controlled trial findings

Source type (academic): PubMed / Semantic Scholar (International Journal of Sports Physiology and Performance, MSSE — these journals publish intensity-distribution and periodization studies)
Source type (practitioner): TrainingPeaks blog and white papers; coaching certification body publications (USAC, British Cycling); practitioner-authored books/review articles on periodization (these constitute a distinct practitioner production stream that sometimes outpaces academic publication)

Queries:
  Q1: polarized training threshold training endurance performance comparison systematic review
  Q2: training intensity distribution elite endurance athletes observational study
  Q3: periodization model endurance performance high-intensity interval low-intensity volume meta-analysis
  Q4: training load quantification heart rate zones lactate threshold endurance adaptation

Coverage-gap note: This angle covers the distribution question (how much easy vs. hard training) but not the sequencing question (which order training blocks should come in across a season). Macrocycle and mesocycle design is adjacent and not captured here.

---

### ANGLE 5 (A4): Nutritional strategies and substrate utilization for endurance performance
===========
Vocabulary tradition: Sports Nutrition
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Effect sizes for carbohydrate availability on performance, evidence for fat-adaptation strategies, ergogenic aid effectiveness (caffeine, bicarbonate, beta-alanine, nitrate), iron status and endurance performance, caloric periodization outcomes

Source type (academic): PubMed (Journal of the International Society of Sports Nutrition, International Journal of Sport Nutrition and Exercise Metabolism, British Journal of Nutrition for exercise-relevant nutrition)
Source type (practitioner): Sports nutrition practitioner association resources (AIS — Australian Institute of Sport A-B-C supplement classification; ISSN position stands); registered dietitian practitioner blogs with citation practice

Queries:
  Q1: carbohydrate availability endurance exercise performance meta-analysis randomized controlled trial
  Q2: low carbohydrate fat adaptation train low endurance performance systematic review
  Q3: ergogenic aids endurance performance caffeine nitrate beta-alanine sodium bicarbonate evidence review
  Q4: iron deficiency endurance performance supplementation review elite athletes

Coverage-gap note: Hydration strategies and sodium replacement during ultra-endurance events are a distinct subdomain of this tradition not captured by these queries. Gut training (tolerating carbohydrate during exercise) is similarly unaddressed.

---

### ANGLE 6 (A5): Central nervous system and psychological determinants of endurance performance
===========
Vocabulary tradition: Sports Psychology / Neuroscience
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence for central governor model vs. peripheral fatigue model, effect of mental fatigue on endurance performance, pacing strategy effects on outcomes, attentional focus (associative vs. dissociative) and performance, motivational interventions in endurance contexts

Source type (academic): PubMed / Semantic Scholar (Psychophysiology, British Journal of Sports Medicine, Journal of Science and Medicine in Sport, Frontiers in Psychology — exercise and sport psychology section)
Source type (practitioner): Mental performance coaching publications; sport psychology association practitioner guidelines (AASP, BASES)

Queries:
  Q1: central governor model endurance fatigue pacing Noakes peripheral central mechanism review
  Q2: mental fatigue endurance exercise performance systematic review intervention
  Q3: attentional focus dissociation endurance performance running cycling pacing
  Q4: perceived exertion pacing strategy endurance performance energy regulation

Coverage-gap note: Brain stimulation interventions (transcranial direct-current stimulation applied to endurance performance) are a recent and distinct subfield of this tradition not captured by these queries.

---

### ANGLE 7 (A6): Running economy and biomechanical efficiency as determinants of endurance performance
===========
Vocabulary tradition: Biomechanics / Movement Science
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Determinants of running economy (stride mechanics, cadence, ground contact time, spring-mass model parameters), training effects on running economy, elastic energy return mechanisms, technology effects (carbon-plate footwear, force plates), movement variability and efficiency

Source type (academic): PubMed / Semantic Scholar (Journal of Biomechanics, MSSE, International Journal of Sports Physiology and Performance — all publish biomechanics of endurance content)
Source type (practitioner): Biomechanics labs and gait analysis clinic reports; running shoe manufacturer technical documents (limited value but represent practitioner-facing interpretation of biomechanics)

Queries:
  Q1: running economy determinants endurance performance systematic review biomechanics
  Q2: stride mechanics cadence contact time running efficiency endurance training adaptation
  Q3: elastic energy storage muscle-tendon unit Achilles spring-mass endurance running economy
  Q4: footwear midsole stiffness carbon fiber plate running economy performance review

Coverage-gap note: Swimming and cycling biomechanics analogues to running economy (stroke mechanics, power output efficiency, cycling economy) are not captured by these queries — this angle is implicitly running-centered and would need modality-specific expansion for other endurance sports.

---

### ANGLE 8 (D1): Genetic and constitutional determinants of endurance trainability — evidence against training as the primary performance driver
===========
Vocabulary tradition: Behavioral Genetics / Molecular Genetics
Angle type: Adversarial [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]
Predicted research character: empirical
What to extract: Heritability estimates for VO2max and trainability, twin study designs on exercise response, non-responder genetics, polygenic risk scores for endurance performance, evidence that constitutional factors cap training gains — evidence that contradicts or limits the claims of confirmatory angles

ADVERSARIAL GENERATION NOTE: This angle was generated using exclusively genetics/heritability vocabulary, EXCLUDING all vocabulary from confirmatory slots A1–A6 (VO2max training adaptation, mitochondrial biogenesis, polarized training, carbohydrate fueling, central governor, running economy). Starting vocabulary: heritability, twin studies, gene variants, trainability, polygenic, non-responder, genetic predisposition, constitutional limits.

Source type (academic): PubMed (Human Genetics, Medicine and Science in Sports and Exercise, American Journal of Human Genetics — for trainability genetics)
Source type (practitioner): deprioritized — genetic predisposition framing is primarily an academic production; practitioner application (direct-to-consumer genomics for athletes) has low evidentiary value

Queries:
  Q1: heritability VO2max endurance trainability twin study genetics review
  Q2: HERITAGE family study non-responders exercise training genetic determinants cardiovascular
  Q3: polygenic score endurance performance athletic potential genetic predisposition genome-wide association
  Q4: training non-responder phenotype individual genetic variation exercise response mechanism

Coverage-gap note: Gene-environment interaction studies (whether genetic predisposition modifies the response to different training interventions) are a distinct facet not addressed by these queries.

---

### ANGLE 9 (C1): Evolutionary and anthropological basis of human endurance capacity
===========
Vocabulary tradition: Evolutionary Biology / Comparative Anthropology
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: Evidence for natural selection on endurance-related traits in Homo sapiens, comparative anatomy of running adaptations across primates, persistence hunting hypothesis and its evidence base, thermoregulatory adaptations enabling sustained locomotion, archaeological/anthropological evidence for endurance activity in ancestral populations

Source type (academic): Semantic Scholar / PubMed (Journal of Human Evolution, American Journal of Physical Anthropology, Current Biology, PNAS — evolutionary biology venues where this literature lives; NOT sports science journals)
Source type (practitioner): Anthropology/paleoanthropology popular science review articles in Science, Nature, and similar (serve as access points to the academic production for practitioners)

Queries:
  Q1: human endurance running evolution natural selection persistence hunting adaptive hypothesis evidence
  Q2: Homo sapiens anatomical adaptations long distance running comparative primates biomechanics
  Q3: thermoregulation sweating bipedalism endurance running evolutionary advantage review
  Q4: hunter-gatherer physical activity endurance capacity archaeological evidence human evolution

Coverage-gap note: The cultural/social transmission of endurance activity patterns across human populations (e.g., Tarahumara ultramarathon tradition, Kenyan running culture) is adjacent to this evolutionary tradition but primarily anthropological/sociological rather than biological — it is NOT captured here and would need a separate angle if within scope.

---

## QUALITY GATE DOCUMENTATION

---

### GATE 1 — Completeness checks

**Null-hypothesis angle present:** PASS
Angle 1 is explicitly framed as disconfirming. Queries contain "no improvement," "null result," "failure," "non-responders," "replication" — all disconfirming vocabulary. Not a confirmatory angle with hedging. Distinct from all confirmatory angles.

**Adversarial angle present:** PASS
Angle 8 carries the label `[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]`. Generation was performed using exclusively genetics/heritability vocabulary with explicit exclusion list documented.

**Cross-disciplinary angle present:** PASS
Angle 9 targets Evolutionary Biology / Comparative Anthropology. This tradition does NOT appear in the intake brief's 6 candidate vocabulary traditions. Tradition label verified against intake brief: not present. Gate passes.

**Source-type coverage (mixed domain — practitioner source required):** PASS
Angles 2, 4, 5, and 6 all assign practitioner sources (training platforms, practitioner association publications, sport psychology association guidelines). Mixed domain requirement met.

**Vocabulary-tradition map populated:** PASS
Coverage map contains 6 distinct tradition names. Well above the ≥2 minimum.

**Gate 1 verdict: PASS**

---

### GATE 2 — Distinctness checks

**Boolean-connective test (applied to all pairs sharing potentially overlapping vocabulary):**

Pair: Angle 2 (Exercise Physiology: cardiovascular/VO2max) vs. Angle 3 (Biochemistry: molecular mechanisms)
Most distinctive term in Angle 2: "cardiac output," "stroke volume," "oxygen delivery"
Does it appear in Angle 3's queries? No — Angle 3 uses "PGC-1alpha," "AMPK," "gene expression," "lactate shuttle"
Formal test: OR retrieval would retrieve some overlap (any paper studying both cardiac and molecular responses to training), but the majority-retrieved documents would be distinct. Angle 2 targets physiology journals; Angle 3 targets cell/molecular biology venues with different author populations. PASS.

Pair: Angle 1 (Null-hypothesis) vs. Angle 2 (Confirmatory Exercise Physiology)
Most distinctive term in Angle 1: "non-responders," "null result," "no improvement," "failure"
These do NOT appear in Angle 2's queries (which are all positive-framing). Boolean OR would NOT retrieve substantially the same documents — disconfirming literature is structurally separate from confirmatory reviews. PASS.

Pair: Angle 4 (Training Theory) vs. Angle 2 (Exercise Physiology)
Most distinctive term in Angle 4: "polarized training," "intensity distribution," "periodization"
These do NOT appear in Angle 2's queries (which focus on cardiovascular physiology outcomes). PASS.

Pair: Angle 8 (Adversarial/Genetics) vs. Angle 2 (Exercise Physiology)
Most distinctive term in Angle 8: "heritability," "twin study," "polygenic score," "genetic predisposition"
These do NOT appear in Angle 2's queries. The "VO2max" term appears in both — testing formally: OR retrieval on "heritability VO2max twin study" vs. "cardiac adaptations endurance training VO2max" would retrieve substantially different document sets (human genetics journals vs. exercise physiology journals). PASS.

Pair: Angle 9 (Evolutionary Biology) vs. all other angles
Most distinctive terms: "persistence hunting," "natural selection," "Homo sapiens locomotion," "comparative primates"
None of these terms appear in any other angle. Clear pass without formal test.

All other pairs (Angles 5, 6, 7 — Nutrition, Psychology/Neuroscience, Biomechanics) use vocabulary with minimal overlap to each other or to physiological angles. Spot-checked: "cadence stride mechanics" (Angle 7) vs. "mental fatigue pacing" (Angle 6) — these share "pacing" as a term but the document sets they retrieve (biomechanics journals vs. psychophysiology journals) are distinct. PASS.

**Vocabulary-tradition distinctness:** PASS
Every angle has a unique vocabulary-tradition label:
- Angle 1: Exercise Physiology (null-hypothesis variant — distinct from A1)
- Angle 2: Exercise Physiology (confirmatory — note: shares root tradition with Angle 1)
- Angle 3: Biochemistry / Molecular Biology
- Angle 4: Sports Science / Training Theory
- Angle 5: Sports Nutrition
- Angle 6: Sports Psychology / Neuroscience
- Angle 7: Biomechanics / Movement Science
- Angle 8: Behavioral Genetics / Molecular Genetics
- Angle 9: Evolutionary Biology / Comparative Anthropology

NOTE: Angles 1 and 2 share the root tradition "Exercise Physiology." This is permitted because one is the null-hypothesis variant — the specific exemption in Gate 2 ("unless one is the null-hypothesis variant or adversarial variant of the other"). The null-hypothesis designation transforms the angle type and query vocabulary enough to constitute structural distinctness.

**Gate 2 verdict: PASS**

---

### GATE 3 — Launchability checks

All 9 angles: each Queries field contains ≥3 runnable query strings. Verified:
- No query contains "TBD," "to be determined," "[fill in]," or equivalent placeholder. All queries are pasteable directly into PubMed/Semantic Scholar.
- All "Source type (academic)" fields name specific platforms (PubMed, Semantic Scholar) with journal guidance.
- All "Source type (practitioner)" fields either name a specific platform/resource or explain why deprioritized.

Spot-check sample queries for runnability:
- "mitochondrial biogenesis endurance exercise PGC-1alpha AMPK signaling pathway review" — runnable, specific enough to retrieve targeted literature
- "heritability VO2max endurance trainability twin study genetics review" — runnable
- "human endurance running evolution natural selection persistence hunting adaptive hypothesis evidence" — runnable

**Gate 3 verdict: PASS**

---

### GATE 4 — Scoring prohibition

No angle contains language such as "this angle is most useful," "strongest angle," "most likely to yield results," or equivalent LLM self-evaluation. The angle list was filtered and ordered only by structural criteria: type allocation (confirmatory/null-hypothesis/adversarial/cross-disciplinary), vocabulary-tradition coverage, and source-type coverage. No subjective quality ranking applied.

**Gate 4 verdict: PASS**

---

### GATE SUMMARY
============

Gate 1 — Completeness: **PASS** — all 5 completeness items pass
Gate 2 — Distinctness: **PASS** — all pairs pass Boolean-connective test; Angles 1 and 2 share root tradition with null-hypothesis exemption applied
Gate 3 — Launchability: **PASS** — all 9 angles have concrete, placeholder-free, source-specified query sets
Gate 4 — Scoring prohibition: **PASS** — no LLM self-evaluation ranking present

**Overall verdict: PASS — dispatch ready**

---

### Flags requiring human judgment

1. **VOCABULARY SELF-REPORT FLAG** — All vocabulary traditions were enumerated by LLM only (Source B unavailable). External validation via survey-paper probe (search: `"endurance training" performance review 2024 2025`) is recommended before accepting this angle list as complete. Traditions most likely to be missing: specialized clinical exercise medicine traditions (cardiac rehabilitation, exercise as medicine), sports technology/wearables research traditions (HRV, CGM monitoring), and extreme environment physiology (altitude, heat adaptation) — these exist as distinct academic subfields with separate vocabulary that Source A enumeration may have partially missed or conflated with the listed traditions.

2. **Angles 1 and 2 tradition-label boundary** — Both Angles 1 and 2 use the Exercise Physiology root tradition (one confirmatory, one null-hypothesis). The null-hypothesis exemption applies per Gate 2 rules. Human judgment is required if the reviewer considers these too similar to deploy in parallel — an alternative framing for Angle 1 using Sports Science/Training Theory vocabulary ("periodization failure," "training load mismanagement") would give it a fully distinct tradition label if preferred.

3. **Running-modality centrality** — Angle 7 (Biomechanics) and some queries in other angles default to running as the endurance modality. For cycling, swimming, rowing, or cross-country skiing, biomechanical vocabulary differs substantially. If the research scope includes non-running endurance sports, Angle 7 should be expanded or split by modality.

4. **Domain maturity: practitioner sources assigned at resource level, not URL level** — Practitioner sources are specified by type/organization (TrainingPeaks, AIS, AASP) rather than specific URLs. A research agent executing this list must resolve current URLs at execution time. This is by design (URLs change; institutional sources are stable) but requires an extra resolution step.

---

## POST-OUTPUT SELF-CHECK (CLAUDE.md Rule 6 — after-every-task)

What is missing, incomplete, or questionable in this output:

1. **Survey-paper bootstrap not run.** The vocabulary traditions are LLM-enumerated only. The missing-tradition list named above (clinical exercise medicine, wearables/HRV, altitude/heat physiology) is itself an LLM inference — those traditions may be substantially better or worse represented than estimated here. A Source B pass on `"endurance training" performance systematic review 2024` would either confirm these traditions are covered or add vocabulary terms not currently in the coverage map.

2. **Cross-disciplinary angle coverage novelty is estimated, not verified.** Angle 9 (Evolutionary Biology) was selected as the cross-disciplinary tradition on the basis that it is "least likely to be enumerated by intake-brief vocabulary bootstrap." This is a heuristic. An alternative cross-disciplinary candidate that was not selected: **Chronobiology / circadian rhythm science** (timing of training relative to circadian phase as a performance determinant — a distinct literature using vocabulary not in any intake tradition). If the user's research interest includes training timing optimization, Chronobiology would be a higher-priority cross-disciplinary slot than Evolutionary Biology.

3. **No pre-commit alternatives were generated for the cross-disciplinary slot.** The kit's CLAUDE.md requires generating at least one alternative with a different underlying assumption after any first-pass output. The alternative for the cross-disciplinary tradition pre-commit: **Occupational Health / Ergonomics** (sustained physical work capacity in non-athlete populations, fatigue management in labor-intensive work — same real-world problem from an industrial rather than athletic framing). This tradition would retrieve findings on physical capacity limits and fatigue that sports science journals do not publish. Selection remains Evolutionary Biology (higher coverage novelty for pure performance science), but Occupational Health is the documented alternative and would win on applied/translational scope.

4. **Angle count at 9 is near the top of the standard range.** With 6 traditions + 3 required types, 9 angles is justified. No angles should be merged without losing tradition coverage. However, if the user's scope is narrower (e.g., only running, or only molecular mechanisms), several confirmatory angles could be deprioritized — the structural ones to retain are N1 (null-hypothesis), D1 (adversarial), and C1 (cross-disciplinary), plus at minimum A1 (Exercise Physiology) and A3 (Training Theory) as the two most central to the stated topic.
