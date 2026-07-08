# Angle-Gen-Kit — Full Execution Output
**Topic:** "I want to research fatigue in endurance athletes during prolonged exercise."
**Condition:** B (subagent context — Source B unavailable)
**Date:** 2026-07-07

---

## PHASE 1: INTAKE BRIEF

*(Produced per intake.md Steps 1–6)*

---

### Step 1 — Sparse-input parsing

| Element | Extracted value |
|---------|----------------|
| Target concept | Fatigue in endurance athletes during prolonged exercise |
| Anchor vocabulary | "fatigue" (exercise physiology tradition); "endurance athletes" (sports medicine/exercise science tradition); "prolonged exercise" (exercise physiology tradition) |
| Scope signals | Endurance athletes (implies aerobic, long-duration sports — not sprint or power events); prolonged exercise (implies sustained, submaximal effort); no date range, population subgroup, or exclusion stated |

Genuine ambiguity check: Target concept is unambiguous. No clarifying questions required.

---

### Step 2 — Vocabulary bootstrap

**Source A — LLM translation:**

- "fatigue" → also called: peripheral fatigue, central fatigue, neuromuscular fatigue, exercise-induced fatigue, muscle fatigue, exhaustion, time to exhaustion (TTE), performance decrement, fatigue index, overreaching
- "endurance athletes" → also called: aerobic athletes, distance runners, cyclists, triathletes, marathon runners, ultramarathon athletes, long-distance athletes, endurance sports participants, sub-elite endurance athletes
- "prolonged exercise" → also called: sustained exercise, long-duration exercise, continuous exercise, ultra-endurance exercise, submaximal exercise, steady-state exercise, prolonged aerobic effort

**Vocabulary traditions identified from Source A:**

1. Exercise physiology — peripheral fatigue, central fatigue, neuromuscular fatigue, VO2max, lactate threshold, glycogen depletion, blood lactate, time to exhaustion, fatigue index, oxygen uptake kinetics
2. Neuroscience / psychophysiology — central governor model, rating of perceived exertion (RPE), brain fatigue, serotonin hypothesis, dopamine hypothesis, neurotransmitter dysregulation, cerebral oxygenation, neural drive, corticospinal excitability
3. Biochemistry / molecular biology — reactive oxygen species (ROS), oxidative stress, mitochondrial function, ATP depletion, glycogen depletion, ammonia accumulation, heat shock proteins, inflammation biomarkers, cytokines, creatine kinase
4. Sports psychology — mental fatigue, effort perception, pacing strategy, motivation, tolerance, psychobiological model of endurance, self-regulation, cognitive fatigue, ego depletion

**Source B — Survey-paper probe:** UNAVAILABLE (subagent execution context; see Source B status below)

**Source C — Absent-term signal:** User did NOT use: central governor model, neuromuscular fatigue, RPE, glycogen depletion, lactate threshold, mitochondrial function, mental fatigue, pacing, reactive oxygen species, serotonin. These are the most academically prominent terms in this area; the user entered from a lay-language framing ("fatigue," "endurance athletes," "prolonged exercise") rather than from within any specific research tradition.

---

### Step 3 — Question-type classification

**EXPLORATORY**

Basis: No comparison or intervention-outcome structure present in the prompt. "I want to research X" is a domain-entry statement. PICO not applied at intake.

---

### Step 4 — Populated intake brief

```
INTAKE BRIEF
============
Topic: Mechanisms and manifestations of fatigue in endurance athletes during prolonged
physical exercise

Anchor vocabulary:
  "fatigue" (exercise physiology tradition)
  "endurance athletes" (sports medicine / exercise science tradition)
  "prolonged exercise" (exercise physiology tradition)

Candidate vocabulary traditions:
  1. Exercise physiology — peripheral fatigue, central fatigue, neuromuscular fatigue,
     VO2max, lactate threshold, glycogen depletion, time to exhaustion, fatigue index
  2. Neuroscience / psychophysiology — central governor model, RPE, brain fatigue,
     serotonin/dopamine hypothesis, corticospinal excitability, cerebral oxygenation
  3. Biochemistry / molecular biology — ROS, oxidative stress, mitochondrial function,
     ATP depletion, ammonia, heat shock proteins, inflammatory cytokines
  4. Sports psychology — mental fatigue, effort perception, pacing strategy, motivation,
     psychobiological model, self-regulation, cognitive fatigue

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate
  traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known
  anchor paper) is recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure in the prompt)

Scope markers:
  Endurance athletes — inferred scope: aerobic, long-duration sports (marathon, cycling,
  triathlon, ultramarathon); not sprint events, not power/strength sports
  Prolonged exercise — inferred scope: sustained submaximal to maximal aerobic effort
  exceeding approximately 30 minutes
  No date range, population subgroup, or exclusions stated by user

Known exclusions: None stated

Domain maturity estimate: academic-heavy
  Basis: anchor vocabulary is from exercise science; substantial peer-reviewed literature
  exists in PubMed, Journal of Applied Physiology, Medicine and Science in Sports and
  Exercise, Journal of Physiology; user did not mention tools, implementations, or
  practitioner contexts; no blog-post or GitHub framing present

Survey paper status: NOT CHECKED — Source B unavailable
  Source B status: UNAVAILABLE — MODERATE
  Reason: Source A + Source C together identified 4 distinct vocabulary traditions.
  Severity = MODERATE. Proceeding with VOCABULARY SELF-REPORT FLAG active.
  Recommendation: before finalizing angle list, run Source B probe
  ("fatigue endurance exercise review 2023 2024 2025") in a context with web access.

Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):
  Target tradition: Occupational ergonomics / human factors engineering
  Selection basis: Same real-world problem from human perspective — fatigue in sustained
  physical labor has been studied extensively in occupational health, with well-developed
  fatigue measurement instruments, work-rest cycle models, and physical capacity limit
  frameworks (e.g., NIOSH manual tasks guidelines) that exist independently of sports
  science vocabulary and represent a literature the user's exercise-physiology entry point
  would not enumerate. Selection heuristic used: "same real-world problem from human/
  organizational perspective."
```

---

### Step 5 — Fallback protocol application

Source B unavailable. Source A + C produced 4 distinct traditions. Severity = MODERATE. VOCABULARY SELF-REPORT FLAG applied. Angle generation may proceed.

---

### Step 6 — Intake gate check

- [x] Topic field populated (not "TBD")
- [x] Candidate vocabulary traditions has ≥2 entries (4 traditions identified)
- [x] Question type classified (EXPLORATORY)
- [x] Cross-disciplinary tradition pre-commit populated (occupational ergonomics; selection basis stated)

**Gate: PASS — proceeding to angle-generation.md**

---

## PHASE 2: COVERAGE MAP

*(Produced per angle-generation.md Step 0)*

```
COVERAGE MAP
============
Tradition 1: Exercise physiology
  Representative terms: peripheral fatigue, central fatigue, neuromuscular fatigue,
    VO2max, lactate threshold, glycogen depletion, time to exhaustion
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: Neuroscience / psychophysiology
  Representative terms: central governor model, RPE, brain fatigue, serotonin hypothesis,
    dopamine, corticospinal excitability, cerebral oxygenation
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: Biochemistry / molecular biology
  Representative terms: ROS, reactive oxygen species, mitochondrial function, ATP depletion,
    oxidative stress, ammonia, inflammatory cytokines
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Sports psychology
  Representative terms: mental fatigue, effort perception, pacing strategy, motivation,
    psychobiological model, cognitive fatigue, self-regulation
  Planned angle slot: Confirmatory A4
  Gap flag: No

Traditions NOT yet represented in the planned list:
  All traditions from intake brief have at least one angle slot.

Cross-disciplinary slot (required):
  Target tradition: Occupational ergonomics / human factors engineering
  Basis for selection: Same real-world problem from human perspective — sustained physical
    effort and its limits are studied in industrial/occupational contexts with different
    measurement vocabulary and intervention frameworks. This tradition is structurally
    separate from sports science and unlikely to have been enumerated via the user's
    exercise-physiology entry point. Matches heuristic 2 (same real-world problem).
```

**Coverage map populated. Proceeding to type allocation.**

---

## PHASE 3: TYPE ALLOCATIONS

*(Produced per angle-generation.md Step 1)*

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Exercise physiology):
  Peripheral and central fatigue mechanisms — classical exercise physiology framing
Slot A2 (Confirmatory — Neuroscience / psychophysiology):
  Central governor model and neural regulation of fatigue
Slot A3 (Confirmatory — Biochemistry / molecular biology):
  Molecular and metabolic mechanisms — oxidative stress, mitochondrial disruption
Slot A4 (Confirmatory — Sports psychology):
  Mental fatigue and effort perception in endurance performance
Slot N1 (Null-hypothesis):
  Assigned — disconfirming framing: what literature shows fatigue mechanisms do NOT
  operate as theorized, fail to generalize, or face replication failure?
Slot D1 (Adversarial — Measurement theory / philosophy of biology):
  Construct validity of "fatigue" as a concept — starting vocabulary NOT FROM
  Traditions 1-4; excluding: peripheral fatigue, central fatigue, neuromuscular, glycogen,
  VO2max, RPE, central governor, oxidative stress, mitochondrial, mental fatigue, pacing
  ADVERSARIAL-FLAGGED
Slot C1 (Cross-disciplinary — Occupational ergonomics / human factors):
  Fatigue measurement and management frameworks from sustained physical labor research
```

**7 angles allocated (within 5-12 standard range). Proceeding to content generation.**

---

## PHASE 4: ANGLE LIST

*(Produced per angle-generation.md Steps 2–4)*

---

### ANGLE 1: Peripheral and Central Fatigue Mechanisms in Endurance Exercise
```
Vocabulary tradition: Exercise physiology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Physiological markers of fatigue onset (lactate, glycogen depletion,
  muscle contractile failure); relative contributions of peripheral (muscle-level)
  vs central (neural-level) fatigue; scope conditions (exercise duration, modality,
  intensity); measurement approaches used in controlled studies

Source type (academic): PubMed; Journal of Applied Physiology; Journal of Physiology
Source type (practitioner): deprioritized — academic-heavy domain; practitioner
  production in this subdomain is minimal relative to journal output

Queries:
  Q1: peripheral fatigue central fatigue endurance exercise mechanisms review
  Q2: neuromuscular fatigue marathon cycling sustained aerobic exercise muscle twitch force
  Q3: glycogen depletion performance decrement endurance athletes fatigue biomarkers
  Q4: lactate threshold exercise-induced fatigue endurance sport physiological markers

Coverage-gap note: Queries focus on established fatigue paradigm; literature on
  interactions between peripheral and central fatigue (rather than either alone) may
  require a separate search strategy. Also, ultra-endurance (>6 hours) may not be
  well-represented in the same PubMed population as marathon/cycling studies.
```

---

### ANGLE 2: Central Governor Model and Neural Regulation of Fatigue
```
Vocabulary tradition: Neuroscience / psychophysiology
Angle type: Confirmatory
Predicted research character: empirical (significant debate in the literature; contested
  model)
What to extract: Evidence for and against the central governor model; neural mechanisms
  of performance limitation (cerebral oxygenation, corticospinal drive); evidence that
  brain regulates exercise termination before physiological failure; scope conditions
  under which neural vs peripheral limitation dominates

Source type (academic): PubMed; Semantic Scholar (cs → q-bio for modeling approaches);
  British Journal of Sports Medicine
Source type (practitioner): deprioritized — academic-heavy domain

Queries:
  Q1: central governor model Noakes fatigue regulation endurance exercise evidence
  Q2: corticospinal excitability motor drive fatigue prolonged exercise neuroimaging
  Q3: cerebral oxygenation NIRS prefrontal cortex fatigue endurance exercise athletes
  Q4: serotonin dopamine neurotransmitter hypothesis fatigue prolonged exercise brain

Coverage-gap note: The central governor model (Noakes) and the psychobiological model
  (Marcora) represent overlapping but distinct theoretical frameworks; queries here cover
  the Noakes tradition. Marcora's work is partially covered by A4 (Sports psychology).
  Full picture requires both angles.
```

---

### ANGLE 3: Molecular and Metabolic Fatigue Mechanisms — Oxidative Stress and Mitochondrial Disruption
```
Vocabulary tradition: Biochemistry / molecular biology
Angle type: Confirmatory
Predicted research character: empirical (biochemical assay studies; controlled interventions
  with biopsy or blood sampling)
What to extract: Molecular markers of fatigue (ROS, inflammatory cytokines, mitochondrial
  damage markers); causality evidence distinguishing correlation from mechanism; whether
  molecular disruption precedes or follows performance decrement; modifiability via
  antioxidant or nutritional interventions

Source type (academic): PubMed; Free Radical Biology and Medicine; European Journal of
  Applied Physiology
Source type (practitioner): deprioritized — academic-heavy domain

Queries:
  Q1: reactive oxygen species oxidative stress fatigue endurance exercise skeletal muscle
  Q2: mitochondrial dysfunction prolonged exercise fatigue ultramarathon cyclists biomarkers
  Q3: ammonia accumulation fatigue prolonged exercise muscle brain mechanism
  Q4: inflammatory cytokines interleukin fatigue endurance exercise performance decrement

Coverage-gap note: Molecular studies are disproportionately cross-sectional; intervention
  studies with pre-registered fatigue outcomes are less common. Literature on inter-
  individual variability in molecular fatigue response is a likely gap.
```

---

### ANGLE 4: Mental Fatigue and Effort Perception in Endurance Performance
```
Vocabulary tradition: Sports psychology
Angle type: Confirmatory
Predicted research character: empirical (growing experimental evidence base; psychobiological
  model is well-operationalized)
What to extract: Distinction between mental fatigue (cognitive resource depletion) and
  physical fatigue; experimental evidence for mental fatigue impairing endurance
  performance; effort perception as a regulatory variable; pacing strategy and motivation
  effects; magnitude of effects in experimental settings

Source type (academic): PubMed; Journal of Sports Sciences; Psychology of Sport and
  Exercise; Sports Medicine
Source type (practitioner): deprioritized — academic-heavy domain

Queries:
  Q1: mental fatigue endurance performance psychobiological model Marcora effort perception
  Q2: pacing strategy fatigue regulation decision-making endurance athletes experimental
  Q3: cognitive fatigue physical performance interaction endurance sport randomized trial
  Q4: motivation exertion tolerance prolonged exercise self-regulation ultramarathon

Coverage-gap note: Most psychobiological model studies use cycling protocols in the lab;
  ecological validity in field conditions and ultra-endurance events is less studied.
  Also, the Noakes central governor model (A2) and Marcora psychobiological model are
  competing frameworks that both claim to explain effort regulation; angle A2 and this
  angle together cover both sides of that debate but the debate itself may require
  a targeted search.
```

---

### ANGLE N1: Disconfirming Evidence — Where Dominant Fatigue Theories Fail or Do Not Generalize
```
Vocabulary tradition: Exercise physiology / Neuroscience (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical (critical reviews, failed replications, boundary
  conditions, scope limitation studies)
What to extract: Conditions under which central governor model, glycogen depletion,
  or oxidative stress frameworks do not predict fatigue; failed replication studies;
  populations for whom standard fatigue models do not generalize (e.g., ultra-endurance
  athletes, female athletes, heat/altitude contexts); scope limits of laboratory-derived
  findings applied to field events

Source type (academic): PubMed; Semantic Scholar; systematic review / meta-analysis
  databases (Cochrane where relevant)
Source type (practitioner): deprioritized — academic-heavy domain; but note that
  practitioner-authored review articles often document field contradictions not
  captured in controlled studies

Queries:
  Q1: central governor model criticism limitations counterevidence endurance fatigue review
  Q2: glycogen depletion fatigue evidence against NOT performance limitation limitations
  Q3: fatigue mechanisms endurance exercise failed replication negative results scope
    conditions
  Q4: peripheral fatigue dominant NOT central limitation counterevidence sprint recovery

Coverage-gap note: Disconfirming literature is systematically underproduced (publication
  bias); this angle will likely return smaller absolute volumes than confirmatory angles.
  A gap result (few critical papers found) is itself informative — it may indicate
  publication bias rather than consensus.
```

---

### ANGLE D1: Construct Validity of "Fatigue" — Is the Concept Coherent Across the Literature?

**[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]**

```
Vocabulary tradition: Measurement theory / philosophy of biology / science and technology
  studies
Angle type: Adversarial
  Generation note: Generated from measurement theory and construct validity vocabulary,
  EXCLUDING the following terms from the generation prompt: peripheral fatigue, central
  fatigue, neuromuscular, glycogen, VO2max, RPE, central governor, oxidative stress,
  mitochondrial, mental fatigue, pacing, serotonin, dopamine, lactate

Predicted research character: gap (this angle may return limited direct literature —
  its purpose is diagnostic; absence of findings is informative)
What to extract: Evidence of operational definition heterogeneity across the fatigue
  literature; construct validity assessments of "fatigue" as a measured variable;
  alternative framings of performance termination that do not use "fatigue" as the
  primary construct; measurement artifacts in self-reported vs. physiological fatigue
  proxies

Source type (academic): Semantic Scholar; Journal of Sports Sciences; Measurement in
  Physical Education and Exercise Science; philosophy of biology journals
Source type (practitioner): deprioritized — adversarial angle targets academic construct
  validity literature specifically

Queries:
  Q1: construct validity fatigue measurement definition operational heterogeneity sport
    exercise science
  Q2: fatigue definition inconsistency literature review sport exercise contradictory
    findings taxonomy
  Q3: performance termination endurance NOT fatigue voluntarily stopping motivation
    disengagement construct
  Q4: self-report physiological fatigue divergence measurement artifact reliability
    endurance athletes

Coverage-gap note: If this angle returns minimal results, it documents a genuine gap:
  the field may lack systematic construct validity assessments of "fatigue." That
  finding should be surfaced to the user as a research gap, not treated as angle failure.
```

---

### ANGLE C1: Sustained Physical Labor — Fatigue Frameworks from Occupational Ergonomics
```
Vocabulary tradition: Occupational ergonomics / human factors engineering
Angle type: Cross-disciplinary
Predicted research character: consensus (ergonomics has established fatigue assessment
  frameworks and measurement instruments); empirical (occupational field studies)
What to extract: Fatigue measurement instruments from occupational health that could
  transfer to endurance athlete populations; work-rest cycle models and recovery
  curve parameters; fatigue trajectory patterns during sustained labor; differences and
  similarities in fatigue profile between industrial workers and endurance athletes;
  physical capacity limit models developed in ergonomics

Source type (academic): Ergonomics (journal); Applied Ergonomics; Safety Science; Human
  Factors; Occupational and Environmental Medicine
Source type (practitioner): NIOSH technical reports; OSHA guidelines; industry-specific
  fatigue management protocols (mining, military, construction)

Queries:
  Q1: physical fatigue sustained manual labor occupational ergonomics fatigue index
    measurement instruments
  Q2: work-rest cycle optimization recovery fatigue sustained physical demand occupational
    health
  Q3: fatigue assessment tools instruments validity physical work ergonomics review
  Q4: cumulative physical fatigue trajectory prolonged manual tasks workers biomechanics
    performance degradation

Coverage-gap note: Occupational fatigue literature often uses fatigue as an injury-risk
  variable rather than a performance variable; translation to endurance sports context
  requires attention to different outcome definitions. Military fatigue research (which
  uses "physical performance under load" framing) may be a better cross-disciplinary
  bridge — a follow-up angle could target military occupational physiology.
```

---

## PHASE 5: QUALITY GATE DOCUMENTATION

*(Produced per angle-quality.md)*

---

### Gate 1 — Completeness checks

| Check | Evidence | Verdict |
|-------|----------|---------|
| Null-hypothesis angle present | Angle N1 explicitly formulated as disconfirming search; queries include "failed replication," "evidence against," "counterevidence," "NOT performance limitation," "negative results" | PASS |
| Adversarial angle present | Angle D1 carries label [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results] | PASS |
| Cross-disciplinary angle present | Angle C1 targets occupational ergonomics / human factors — NOT in the intake brief's candidate vocabulary traditions list (confirmed against intake brief traditions 1-4) | PASS |
| Source-type coverage | Domain maturity: academic-heavy. Practitioner source required only for practitioner-heavy or mixed domains. Academic-heavy = practitioner not required. C1 additionally names NIOSH / OSHA practitioner sources. | PASS |
| Vocabulary-tradition map populated | Coverage map contains 4 distinct traditions; cross-disciplinary slot populated | PASS |

**Gate 1: PASS**

---

### Gate 2 — Distinctness checks

**Boolean-connective test — angle pairs examined:**

| Pair | Most distinctive term (A) | Present in B? | Verdict |
|------|--------------------------|---------------|---------|
| A1 vs A2 | "glycogen depletion," "lactate threshold" | Not in A2 (A2 uses "central governor," "cerebral oxygenation," "serotonin") | PASS |
| A1 vs A3 | "neuromuscular fatigue," "lactate" | Not in A3 (A3 uses "reactive oxygen species," "mitochondrial," "cytokines") | PASS |
| A1 vs A4 | "VO2max," "peripheral fatigue" | Not in A4 (A4 uses "mental fatigue," "pacing," "psychobiological model") | PASS |
| A2 vs A4 | "central governor," "cerebral oxygenation," "corticospinal" | Not in A4 | PASS — with note (see below) |
| A3 vs A4 | "ROS," "mitochondrial," "cytokines" | Not in A4 | PASS |
| N1 vs A1 | Disconfirming vocabulary: "counterevidence," "replication failure," "evidence against" | Not in A1 | PASS |
| D1 vs A1-A4 | "construct validity," "operational heterogeneity," "measurement artifact," "disengagement" | Not in A1-A4 | PASS |
| C1 vs A1-A4 | "occupational ergonomics," "NIOSH," "manual labor," "workers" | Not in A1-A4 | PASS |

**Adjacency note (A2 and A4):** A2 (central governor model, neural physiology) and A4 (psychobiological model, effort perception) are adjacent theoretical frameworks that both address effort regulation. They share the concept of RPE as a mediating variable. The Boolean-connective test: would a query combining "central governor model" OR "psychobiological model Marcora" retrieve the same documents? No — these are distinct research programs with mostly non-overlapping citation networks (Noakes vs Marcora). They converge on RPE as a construct but approach it through different mechanisms. Scope split is clear: A2 covers neural substrate and brain physiology; A4 covers psychological constructs and behavioral outcomes.

**Vocabulary-tradition distinctness:**
Each of A1, A2, A3, A4, C1 carries a distinct tradition label. N1 shares Exercise physiology with A1 but is exempt (null-hypothesis variant). D1 shares no tradition label with A1-A4 (its tradition is measurement theory / philosophy of biology). No two non-null-hypothesis, non-adversarial angles share a tradition label.

**Gate 2: PASS**

---

### Gate 3 — Launchability checks

| Angle | Has concrete query string | No placeholder vocabulary | Source type named |
|-------|--------------------------|--------------------------|-------------------|
| A1 | Yes — 4 runnable strings | No placeholders | PubMed; J Applied Physiology; J Physiology |
| A2 | Yes — 4 runnable strings | No placeholders | PubMed; Semantic Scholar; Br J Sports Med |
| A3 | Yes — 4 runnable strings | No placeholders | PubMed; Free Radical Biol Med; Eur J Appl Physiol |
| A4 | Yes — 4 runnable strings | No placeholders | PubMed; J Sports Sciences; Psychol Sport Exercise |
| N1 | Yes — 4 runnable strings | No placeholders | PubMed; Semantic Scholar; Cochrane |
| D1 | Yes — 4 runnable strings | No placeholders | Semantic Scholar; J Sports Sciences |
| C1 | Yes — 4 runnable strings | No placeholders | Ergonomics (journal); Applied Ergonomics; NIOSH reports |

**Gate 3: PASS**

---

### Gate 4 — Scoring prohibition

No angles were ranked by "most promising," "most relevant," or equivalent subjective assessment. Angle allocation was governed exclusively by structural criteria: vocabulary-tradition coverage, type-allocation rules (one null-hypothesis, one adversarial, one cross-disciplinary), and coverage-map slots. No phrase "this angle is likely to be most useful" or equivalent appears in the angle records.

**Gate 4: PASS**

---

### Gate Summary

```
GATE SUMMARY
============
Gate 1 — Completeness: PASS
  All five items passed. Null-hypothesis, adversarial, cross-disciplinary, source-type,
  and vocabulary-tradition map all present and populated.

Gate 2 — Distinctness: PASS
  No angle pairs flagged as synonyms by Boolean-connective test.
  A2/A4 adjacency noted; confirmed as distinct research programs despite shared
  RPE vocabulary.
  Vocabulary-tradition labels: all distinct (null-hypothesis and adversarial variants
  exempt from shared-label rule per angle-quality.md Gate 2).
  Small-literature exception: NOT triggered — this is an established research field
  with a large corpus.

Gate 3 — Launchability: PASS
  All 7 angles have concrete, runnable query strings. No placeholders. All source
  types named at platform level.

Gate 4 — Scoring prohibition: PASS
  No LLM self-evaluation ranking applied. Structural allocation criteria only.

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all 4 vocabulary traditions were enumerated by LLM
     only (Source B unavailable). External validation via survey-paper probe recommended
     before accepting the tradition list as complete. A survey-paper probe may surface
     additional traditions not identified here (e.g., immunology / neuroimmunology,
     nutrition science, chronobiology/sleep science, computational physiology).
  2. ADVERSARIAL LABEL enforcement — Angle D1 is labeled ADVERSARIAL-FLAGGED. The
     downstream research agent must honor this label by dispatching D1 in a separate
     context from A1-A4. This kit cannot enforce that at execution time.
  3. A2/A4 overlap at RPE intersection — confirmed distinct but if the downstream
     agent finds these return heavily overlapping results, a merge with explicit facet
     split should be considered.
  4. MODERATE coverage expected (not FULL) — consistent with Source B unavailable
     per CLAUDE.md deployment constraints. If FULL coverage is required, run a
     Source B probe in a context with web access before launching the research phase.
```

---

## APPENDIX: KNOWN LIMITATIONS APPLICABLE TO THIS RUN

Per weakness_register.md, the following weaknesses are active for this execution:

**Weakness 1 (vocabulary-tradition discovery limit):** Active. Source B unavailable; all traditions are LLM self-reported. Sports physiology / exercise science is reasonably well-represented in LLM training, but niche sub-literatures (e.g., neuroimmunology of fatigue, altitude physiology, sex differences in fatigue) may not have been enumerated.

**Weakness 2 (pre-expansion gating gap):** Active. Specificity gate was applied (no highly niche or post-2023 proper-noun anchored queries identified in this topic; expansion is appropriate). Per-query calibration remains imperfect.

**Weakness 6 (adversarial label enforcement gap):** Active. D1 is labeled; downstream enforcement is the downstream agent's responsibility.

**Weakness 7 domain scope condition (INT-10 FM4):** Domain assessment — exercise physiology / sports science is a legitimate academic field but is NOT in the "heavily-represented in LLM training" category comparable to LLM/AI research (FM4 trigger condition). Coverage-gap conditioning is expected to provide meaningful signal for this topic. Near-zero differential condition does NOT apply here.

---

**Self-check (CLAUDE.md bookend requirement):**

What is missing or incomplete in this output:

1. Source B survey-paper probe has not run — the 4 vocabulary traditions may be incomplete. Likely missing traditions: immunology/neuroimmunology (cytokine signaling and fatigue is a distinct research program from the biochemistry tradition labeled here), nutrition science (carbohydrate fueling, hydration), chronobiology/sleep science (circadian effects on fatigue), computational physiology (mathematical modeling of fatigue). A researcher using this list should run the Source B probe before treating the tradition list as exhaustive.

2. Angle N1 query Q2 uses "NOT" as a Boolean operator in a natural-language string ("glycogen depletion fatigue NOT performance limitation"). This is intended to retrieve contrarian literature but actual Boolean NOT behavior depends on the search platform. If run on PubMed or Semantic Scholar, this may need reformulation as "glycogen depletion fatigue evidence against performance limitation" for non-Boolean systems.

3. D1 is predicted as "gap" research character — if the angle returns minimal direct literature on construct validity of fatigue, this is informative rather than a failure, but the downstream agent should be primed to document absence as a finding rather than abandoning the angle.

4. No platform-calibration.md file was consulted (file not present in the angle-gen-kit directory) — source type assignments used general platform knowledge. If platform-calibration.md is added to the kit, source type assignments should be reviewed against it.
