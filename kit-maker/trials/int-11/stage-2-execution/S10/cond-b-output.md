# Angle-Gen-Kit Output — S10 Condition B
## Topic: Psychological Strategies for Managing Pain and Discomfort in Ultra-Endurance Events

**Session metadata**
- Input: "I want to research psychological strategies for managing pain and discomfort in ultra-endurance events."
- Condition: B — Full kit (all angle-gen-kit files loaded: CLAUDE.md, intake.md, angle-generation.md, angle-quality.md, weakness_register.md)
- Source B status: UNAVAILABLE (subagent context without web access)
- Date: 2026-07-07
- Model: claude-sonnet-4-6

---

## Multi-task enumeration (CLAUDE.md — before starting any task)

Tasks to complete in this session:
1. Intake brief (intake.md Steps 1–6)
2. Phase-gate reflection before angle generation
3. Coverage map (angle-generation.md Step 0 — required before any angle content)
4. Type allocations (angle-generation.md Step 1)
5. Angle list with all required structural types (angle-generation.md Steps 2–4)
6. Quality gate documentation for all four gates (angle-quality.md)
7. Gate summary with overall verdict
8. Post-output self-check (CLAUDE.md Rule 6)

All tasks will be addressed before reporting done.

---

## INTAKE BRIEF

*(intake.md Steps 1–6)*

---

### Step 1 — Sparse-input parsing

| Element | Extracted value |
|---------|----------------|
| Target concept | Psychological strategies athletes use to manage pain and discomfort during ultra-endurance events |
| Anchor vocabulary | "psychological strategies" (sport/clinical psychology tradition); "pain and discomfort" (clinical pain science tradition); "ultra-endurance events" (sports science tradition) |
| Scope signals | "Ultra-endurance events" implies long-duration events (ultramarathons, Ironman triathlons, ultracycling, multi-day events); "psychological" signals focus on mental/cognitive rather than pharmacological or purely physiological strategies |

No genuine ambiguity requiring a question — target concept and scope are inferable from the prompt. Proceeding with 0 questions asked (A1 intake efficiency: 0 questions).

---

### Step 2 — Vocabulary bootstrap

**Source A — LLM translation:**

"Psychological strategies" → also called: mental skills training, cognitive strategies, coping strategies, self-regulatory strategies, psychological skills training, mental techniques, pain coping skills, psychological interventions for pain, mental management

"Pain and discomfort" → also called: pain perception, pain tolerance, pain catastrophizing, pain acceptance, discomfort tolerance, nociception, perceived exertion, pain appraisal, aversive sensations, physical distress, exercise-induced pain

"Ultra-endurance events" → also called: ultra-endurance sport, extreme endurance, ultramarathon, Ironman triathlon, ultra-distance, prolonged exercise, endurance athletics, multi-day events, ultracycling

**Source C — Absent-term signal (terms the user did NOT use):**

- "dissociation / association" — the dominant attentional focus terminology in sport psychology endurance research; user did not use this
- "pain catastrophizing" — the most-studied cognitive appraisal construct in clinical pain research; absent from user's framing
- "self-talk" — the most-tested cognitive strategy in endurance sport psychology; absent
- "central governor" — a leading theoretical framework for exercise regulation; absent
- "mindfulness" — a prominent evidence-based intervention tradition; absent from the user's phrasing
- "mental toughness" — the dominant dispositional construct in extreme performance contexts; absent
- "Rating of Perceived Exertion (RPE)" — the primary psychophysical measure in exercise science; absent

Absence of all seven of these terms indicates the user entered from a lay or general-psychology framing, not from sport psychology or clinical pain science anchors. This is a strong vocabulary-gap signal.

**Vocabulary traditions identified (Source A + Source C):**

1. **Sport psychology — attentional focus:** association, dissociation, attentional strategies, attentional focus, internal monitoring, distraction, cognitive interference, maladaptive focus, flow state
2. **Clinical pain psychology:** pain catastrophizing, Pain Catastrophizing Scale (PCS), pain acceptance, Acceptance and Commitment Therapy (ACT), CBT for pain, fear-avoidance model, kinesiophobia, psychological flexibility, pain self-efficacy, experiential avoidance
3. **Exercise physiology / perceived exertion:** Rating of Perceived Exertion (RPE), central governor theory, psychobiological model of endurance, effort perception, pacing strategy, Borg scale, fatigue regulation, psychophysiological fatigue
4. **Performance psychology / extreme environments:** mental toughness, grit, resilience, hardiness, stress inoculation training, SERE, military selection psychology, psychological hardiness, adversity response
5. **Mindfulness / contemplative interventions:** mindfulness-based stress reduction (MBSR), mindfulness meditation, body scan, non-judgmental awareness, present-moment attention, mindful movement
6. **Emotion regulation:** cognitive reappraisal, emotional suppression, affect labeling, regulatory flexibility, Gross's process model of emotion regulation, affective response modulation
7. **Social psychology of sport:** social support, social facilitation, pacer effects, collective suffering, group cohesion, audience effects, co-suffering, social presence and pain

Source B status: UNAVAILABLE — MODERATE (Source A + Source C produced 7 distinct vocabulary traditions; ≥2 distinct traditions present; severity: MODERATE — proceed with VOCABULARY SELF-REPORT FLAG applied)

**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions listed here were enumerated by LLM only. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

---

### Step 3 — Question-type classification

**EXPLORATORY.** No explicit comparison language, no intervention-outcome pair, no named alternative approach. The user wants to understand the space of strategies ("I want to research..."), not evaluate one strategy against another. PICO is not applicable at this stage.

---

### Step 4 — Populated intake brief (all fields)

```
INTAKE BRIEF
============
Topic: Psychological strategies athletes use to manage pain and discomfort during
ultra-endurance events

Anchor vocabulary: "psychological strategies" (sport/clinical psychology); "pain and
discomfort" (clinical pain science); "ultra-endurance events" (sports science)

Candidate vocabulary traditions:
  1. Sport psychology — attentional focus: association, dissociation, attentional
     focus strategies, attentional narrowing, internal monitoring, distraction,
     flow state, cognitive interference
  2. Clinical pain psychology: pain catastrophizing, PCS, pain acceptance, ACT,
     CBT for pain, fear-avoidance model, kinesiophobia, psychological flexibility,
     pain self-efficacy, experiential avoidance
  3. Exercise physiology / perceived exertion: RPE, central governor theory,
     psychobiological model, pacing strategy, effort perception, Borg scale,
     fatigue regulation
  4. Performance psychology / extreme environments: mental toughness, grit,
     resilience, hardiness, stress inoculation, SERE, military selection,
     adversity response
  5. Mindfulness / contemplative interventions: MBSR, mindfulness meditation,
     body scan, non-judgmental awareness, present-moment attention
  6. Emotion regulation: cognitive reappraisal, affect labeling, emotional
     suppression, regulatory flexibility, Gross's process model
  7. Social psychology of sport: social support, social facilitation, pacer
     effects, collective suffering, group cohesion, co-suffering

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot
  enumerate traditions it has not encountered. Vocabulary-discovery pass
  recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  (No comparison or intervention-outcome structure in the prompt)

Scope markers:
  Domain: Ultra-endurance events (ultramarathons, Ironman triathlons, multi-day
    events, ultracycling)
  Focus: Psychological (not pharmacological) strategies
  During-event and training contexts both in scope unless further delimited
  No date range, population age, or competitive level stated
  Inferred scope: competitive and recreational ultra-endurance athletes;
  psychological/cognitive strategies rather than pharmacological ones

Known exclusions: None stated
  Inferred exclusion: pharmacological pain management (out of scope by framing)

Domain maturity estimate: mixed
  Basis: Active empirical literature in sport psychology and clinical pain
  journals (Psychology of Sport and Exercise, Journal of Pain, Journal of Applied
  Sport Psychology); substantial practitioner literature (coaching manuals,
  athlete memoirs, sport psychology workbooks). Both traditions active and
  use partially different vocabulary.

Survey paper status: NOT FOUND — Source B unavailable
  Vocabulary-discovery pass recommended before finalizing angle list.

Source B status: UNAVAILABLE — MODERATE (Source A+C produced 7 distinct
  vocabulary traditions)

Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):
  Target tradition: Existential/meaning-centered psychology (logotherapy,
    narrative medicine, meaning-centered therapy)
  Selection basis: Same real-world problem from human perspective — existential
    psychology (Frankl's logotherapy, Yalom's existential therapy, narrative
    medicine) developed techniques for bearing unavoidable suffering that directly
    parallel what ultra-endurance athletes do psychologically when managing
    sustained pain. The vocabulary is genuinely distinct from all confirmatory
    traditions: "logotherapy," "meaning-centered therapy," "existential resilience,"
    "voluntary suffering as meaningful," "posttraumatic growth," "existential
    anxiety tolerance." This literature is rarely cross-cited in sport psychology
    empirical studies and addresses the same core problem (how to bear suffering
    that cannot be eliminated) from a completely different epistemological tradition.
```

---

### Step 6 — Intake gate check

- [x] Topic field populated (not "TBD") — PASS
- [x] Candidate vocabulary traditions has ≥2 entries (7 traditions identified) — PASS
- [x] Question type classified (EXPLORATORY) — PASS
- [x] Cross-disciplinary tradition pre-commit field populated (target tradition named + selection basis stated, referencing "same real-world problem from human perspective" heuristic) — PASS

**All four gate conditions: PASS. Proceeding to angle-generation.md.**

---

## PHASE-GATE REFLECTION

*(CLAUDE.md — fires at every phase transition)*

Before proceeding from intake brief to angle generation:
1. Are all output fields in the intake brief populated (no blanks)? YES — all fields filled including source B status, domain maturity, cross-disciplinary pre-commit
2. Are ≥2 distinct vocabulary traditions listed? YES — 7 traditions
3. Is the question type classified? YES — EXPLORATORY

Proceeding to angle generation.

---

## COVERAGE MAP

*(angle-generation.md Step 0 — required before any angle content; this step must complete before any angle is written)*

```
COVERAGE MAP
============
Tradition 1: Sport psychology — attentional focus
  Representative terms: association, dissociation, attentional focus, attentional
    strategy, internal monitoring, distraction, cognitive interference
  Planned angle slot: Confirmatory A1
  Gap flag: NO

Tradition 2: Clinical pain psychology
  Representative terms: pain catastrophizing, PCS, ACT, psychological flexibility,
    fear-avoidance, CBT for pain, kinesiophobia, experiential avoidance
  Planned angle slot: Confirmatory A2
  Gap flag: NO

Tradition 3: Exercise physiology / perceived exertion
  Representative terms: RPE, central governor theory, psychobiological model,
    pacing, Borg scale, effort perception
  Planned angle slot: Confirmatory A3
  Gap flag: NO

Tradition 4: Performance psychology / extreme environments
  Representative terms: mental toughness, grit, hardiness, stress inoculation,
    SERE, military selection, resilience
  Planned angle slot: Confirmatory A4
  Gap flag: NO

Tradition 5: Mindfulness / contemplative interventions
  Representative terms: MBSR, body scan, non-judgmental awareness,
    present-moment attention, mindful movement
  Planned angle slot: Confirmatory A5
  Gap flag: NO

Tradition 6: Emotion regulation
  Representative terms: cognitive reappraisal, affect labeling, emotional
    suppression, regulatory flexibility, Gross's process model
  Planned angle slot: Confirmatory A6
  Gap flag: NO

Tradition 7: Social psychology of sport
  Representative terms: social support, social facilitation, pacer effects,
    collective suffering, group cohesion
  Planned angle slot: Confirmatory A7
  Gap flag: NO

Additional sub-tradition slots (within Tradition 1 and Tradition 2, distinct vocabulary):
  Sport psychology — self-talk / motivational self-regulation:
    distinct mechanism from attentional focus (Tradition 1 sub-tradition)
    Planned angle slot: Confirmatory A8
  Clinical pain neuroscience education:
    distinct intervention vocabulary from ACT/fear-avoidance (Tradition 2 adjacent)
    Planned angle slot: Confirmatory A9

Traditions NOT yet represented in the planned list:
  All 7 traditions from intake brief have at least one angle slot.

Cross-disciplinary slot (required):
  Target tradition: Existential/meaning-centered psychology (logotherapy,
    narrative medicine, meaning-centered therapy)
  Basis for selection: Same real-world problem from human perspective — bearing
    unavoidable suffering through meaning-construction; vocabulary distinct from
    all confirmatory angle traditions (logotherapy, existential resilience,
    meaning-centered therapy); rarely cross-cited in sport psychology literature.
    Matches the cross-disciplinary pre-commit from the intake brief.

Angle count justification: 7 distinct vocabulary traditions with some having 2
angles (sport psychology has attentional + self-talk sub-traditions; clinical
psychology has ACT framework + pain neuroscience education adjacent tradition).
7+ traditions qualifies for extended count per angle-generation.md hard-input
guidance (≥4 traditions). This run produces 12 angles (9 confirmatory + 1
null-hypothesis + 1 adversarial + 1 cross-disciplinary) — MODERATE coverage
expected given Source B unavailability.
```

**Gate: Coverage map is complete. Proceeding to type allocations.**

---

## TYPE ALLOCATIONS

*(angle-generation.md Step 1 — before any angle content)*

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Sport psychology — attentional focus):
  association/dissociation strategies in endurance pain management

Slot A2 (Confirmatory — Clinical pain psychology):
  ACT and pain acceptance (psychological flexibility, fear-avoidance)

Slot A3 (Confirmatory — Exercise physiology / perceived exertion):
  RPE regulation and central governor theory in ultra-endurance

Slot A4 (Confirmatory — Performance psychology / extreme environments):
  mental toughness, hardiness, stress inoculation

Slot A5 (Confirmatory — Mindfulness / contemplative interventions):
  MBSR and mindfulness-based interventions for endurance pain

Slot A6 (Confirmatory — Emotion regulation):
  cognitive reappraisal and affect labeling for pain affect

Slot A7 (Confirmatory — Social psychology of sport):
  social context, pacer effects, collective suffering

Slot A8 (Confirmatory — Sport psychology — self-talk):
  self-talk and motivational language for pain endurance (DISTINCT from A1)

Slot A9 (Confirmatory — Clinical pain neuroscience education):
  pain neuroscience education, belief-based pain modulation, top-down analgesia

Slot N1 (Null-hypothesis — assigned):
  Evidence that psychological strategies do NOT reduce pain or do NOT improve
  performance in ultra-endurance contexts

Slot D1 (Adversarial — starting vocabulary NOT FROM: attentional focus, ACT,
  RPE psychological modulation, mental toughness, MBSR, emotion regulation,
  social support, self-talk, pain neuroscience education):
  Physiological reductionism — psychological strategies as epiphenomenal

Slot C1 (Cross-disciplinary — existential/meaning-centered psychology):
  from coverage map cross-disciplinary slot and intake brief pre-commit
```

---

## ANGLE LIST

*(angle-generation.md Steps 2–4)*

---

### ANGLE A1: Attentional Focus Strategies — Association and Dissociation in Endurance Pain
===========
Vocabulary tradition: Sport psychology — attentional focus (association/dissociation)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Effect sizes for association vs. dissociation strategies on pain tolerance and performance in endurance contexts; conditions under which each strategy is more effective (distance, intensity, experience level); lab pain induction vs. field-race generalizability; mediating mechanisms

Source type (academic): SPORTDiscus, PsycINFO, Psychology of Sport and Exercise
Source type (practitioner): Sport psychology practitioner publications, endurance coaching manuals

Queries:
  Q1: ("association" OR "associative strategy") AND ("dissociation" OR "dissociative strategy") AND ("ultra-endurance" OR ultramarathon OR triathlon) AND pain
  Q2: "attentional focus" AND "pain coping" AND endurance athletes AND empirical
  Q3: "internal focus" AND "external focus" AND pain AND (endurance OR "long-distance running") AND performance
  Q4: "attentional strategy" AND "pain tolerance" AND (ultra OR marathon OR "prolonged exercise") AND (randomized OR experiment OR controlled)

Coverage-gap note: Does not cover temporal dynamics of strategy-switching within a race, or moderating effects of training level and experience on strategy effectiveness.

---

### ANGLE A2: Acceptance and Commitment Therapy — Psychological Flexibility and Pain Acceptance
===========
Vocabulary tradition: Clinical pain psychology — ACT / psychological flexibility
Angle type: Confirmatory
Predicted research character: empirical
What to extract: RCT or quasi-experimental findings on ACT in sport contexts; psychological flexibility and pain tolerance outcomes; experiential avoidance as pain amplifier; fear-avoidance model in endurance athletes; transfer from clinical pain populations to athletic populations

Source type (academic): PubMed (Journal of Contextual Behavioral Science, Psychology of Sport and Exercise, Journal of Pain), PsycINFO
Source type (practitioner): ACT sport application protocols, clinical pain management resources adapted for sport

Queries:
  Q1: "acceptance and commitment therapy" AND (pain OR discomfort) AND (endurance OR athlete OR ultra)
  Q2: "psychological flexibility" AND "pain tolerance" AND (athletic OR endurance) AND performance
  Q3: "experiential avoidance" AND pain AND (endurance OR ultra OR marathon) AND (performance OR dropout)
  Q4: "pain catastrophizing" AND "pain acceptance" AND endurance athlete AND intervention AND empirical
  Q5: "fear-avoidance" AND exercise AND ("endurance sport" OR ultra OR marathon) AND psychological intervention

Coverage-gap note: Protocol adaptations for brief in-event use (vs. full clinical treatment course) remain underspecified. Clinical transfer to competitive athletic populations requires methodological scrutiny.

---

### ANGLE A3: Perceived Exertion and the Psychobiological Model — Central Governor and RPE Regulation
===========
Vocabulary tradition: Exercise physiology / perceived exertion
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence on psychological manipulations of RPE; central governor theory support and critiques; psychobiological model of endurance performance (Marcora's model); pacing strategy and cognitive modulation of effort perception; RPE as a psychological variable in ultra events

Source type (academic): PubMed (International Journal of Sports Physiology and Performance, Journal of Applied Physiology, Medicine and Science in Sports and Exercise)
Source type (practitioner): Training books and coaching resources using RPE frameworks, pacing strategy guides

Queries:
  Q1: "central governor" AND (pain OR fatigue) AND ("ultra-endurance" OR ultramarathon OR "prolonged exercise") AND psychological
  Q2: "rating of perceived exertion" AND ("psychological manipulation" OR "cognitive intervention") AND endurance performance
  Q3: "psychobiological model" AND RPE AND ("endurance performance" OR "pain tolerance") AND empirical
  Q4: "effort perception" AND psychological AND ("pacing strategy" OR "pace regulation") AND (ultra OR endurance)
  Q5: "psychobiological" AND pain AND ultra OR endurance AND cognitive strategies AND performance review

Coverage-gap note: Does not address how physiological state degradation (dehydration, hypoglycemia) interacts with psychological RPE modulation at late-race stages specific to ultra events.

---

### ANGLE A4: Mental Toughness, Hardiness, and Stress Inoculation in Extreme Performance Contexts
===========
Vocabulary tradition: Performance psychology / extreme environments
Angle type: Confirmatory
Predicted research character: empirical / consensus
What to extract: Mental toughness frameworks and their empirical relationship to pain tolerance; stress inoculation training protocols applied to pain management; comparisons between military selection and ultra-endurance athlete populations; hardiness as a moderator of discomfort in prolonged stress

Source type (academic): Journal of Applied Sport Psychology, Military Psychology, PsycINFO
Source type (practitioner): Military psychology reports, high-performance coaching literature, special forces selection documentation

Queries:
  Q1: "mental toughness" AND "pain tolerance" AND (ultramarathon OR "ultra-endurance" OR "extreme sport") AND empirical
  Q2: hardiness AND ("pain endurance" OR "discomfort tolerance") AND performance AND psychological
  Q3: "stress inoculation" AND pain AND (military OR "special forces" OR selection) AND psychological AND endurance
  Q4: grit AND resilience AND pain AND endurance sport AND athlete AND sustained discomfort
  Q5: "mental toughness" AND ultramarathon AND (pain OR suffering) AND performance outcomes AND review

Coverage-gap note: Whether mental toughness is a trainable skill vs. stable disposition is contested; most studies in this tradition are cross-sectional. Military-to-civilian athlete transfer has not been empirically tested.

---

### ANGLE A5: Mindfulness-Based Interventions for Pain in Endurance Sport
===========
Vocabulary tradition: Mindfulness / contemplative interventions
Angle type: Confirmatory
Predicted research character: empirical
What to extract: RCTs or quasi-experiments on mindfulness training and pain tolerance in endurance athletes; MBSR adaptations for sport; mindful movement practices and pain during exercise; dose-response for mindfulness effects on pain and performance; in-event vs. pre-event mindfulness

Source type (academic): PubMed (Mindfulness, Psychology of Sport and Exercise, Journal of Pain), PsycINFO
Source type (practitioner): Mindfulness-based sport training programs, athlete-facing mindfulness workbooks

Queries:
  Q1: "mindfulness-based" AND (pain OR discomfort) AND (endurance OR athletic OR ultra) AND performance
  Q2: MBSR AND "pain tolerance" AND (athlete OR sport OR "endurance performance") AND empirical
  Q3: "mindful movement" AND pain AND (endurance OR ultra) AND (sport OR exercise) AND performance
  Q4: mindfulness AND "pain catastrophizing" AND athlete AND (intervention OR training) AND endurance
  Q5: "body scan" AND pain AND ("endurance sport" OR ultra OR athlete) AND performance

Coverage-gap note: Limited studies examine dose-response (how much practice is sufficient) and in-event mindfulness specifically. Most evidence is from pre-event training programs, not real-competition data.

---

### ANGLE A6: Emotion Regulation — Cognitive Reappraisal and Affect Labeling for Pain Affect
===========
Vocabulary tradition: Emotion regulation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Effect of cognitive reappraisal vs. suppression on pain unpleasantness in athletes; affect labeling studies with exercise-induced pain; regulatory flexibility and endurance outcomes; Gross's process model applied to sport pain; emotional component of pain (affect) vs. sensory intensity

Source type (academic): PubMed (Emotion, Journal of Pain, Psychology of Sport and Exercise), PsycINFO
Source type (practitioner): Minimal direct practitioner production — academic-leaning tradition; note absence

Queries:
  Q1: "cognitive reappraisal" AND (pain OR discomfort) AND (athletic OR endurance OR sport) AND performance
  Q2: "emotion regulation" AND pain AND endurance AND performance AND (athlete OR exercise)
  Q3: "affect labeling" AND (pain OR discomfort) AND (sport OR exercise OR endurance) AND tolerance
  Q4: "emotional suppression" AND pain AND (exercise OR endurance) AND athlete AND performance comparison
  Q5: "regulatory flexibility" AND pain AND endurance sport AND athlete AND performance review

Coverage-gap note: Emotion regulation research in sport pain is sparse; most studies use lab pain induction (cold pressor, ischemic pain) rather than real-event data. Ecological validity is a primary concern for this angle.

---

### ANGLE A7: Social Context — Pacers, Crew, and Collective Suffering Effects on Pain
===========
Vocabulary tradition: Social psychology of sport
Angle type: Confirmatory
Predicted research character: empirical / gap
What to extract: Social facilitation effects on pain tolerance in endurance events; pacer influence on pacing and pain behavior; collective suffering and shared effort in group ultra events; social support and pain behavior during competition; crew effects in ultra events; social comparison and pain threshold

Source type (academic): Journal of Sport Sciences, Social Psychological and Personality Science, PubMed, PsycINFO
Source type (practitioner): Ultra-endurance coaching resources, crew and pacer guidance, community race reports

Queries:
  Q1: "social support" AND pain AND (ultra OR endurance OR "long-distance") AND performance AND psychological
  Q2: pacer AND (pain OR discomfort OR fatigue) AND (ultramarathon OR "ultra-endurance") AND performance
  Q3: "social facilitation" AND "pain tolerance" AND (exercise OR endurance) AND performance
  Q4: ("collective suffering" OR "shared suffering" OR "co-suffering") AND endurance AND performance AND psychological
  Q5: "social comparison" AND pain AND (endurance OR ultra OR athlete) AND performance

Coverage-gap note: Social context literature for ultra-endurance specifically is limited. Most social facilitation studies use lab settings or shorter events. This is a predicted gap-character angle — limited results are expected and document absence.

---

### ANGLE A8: Self-Talk and Motivational Language for Pain Endurance
===========
Vocabulary tradition: Sport psychology — self-talk / motivational self-regulation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Effect of motivational self-talk on pain tolerance and endurance performance; instructional vs. motivational self-talk comparisons; self-talk content in ultra events; implementation of self-talk under fatigue and pain conditions; verbal strategies for pain reframing

Source type (academic): Psychology of Sport and Exercise, Journal of Applied Sport Psychology, PubMed
Source type (practitioner): Sport psychology coaching workbooks, mental skills training resources

Queries:
  Q1: "self-talk" AND pain AND (endurance OR ultra OR marathon) AND performance AND empirical
  Q2: "motivational self-talk" AND "pain tolerance" AND endurance AND (randomized OR experiment OR controlled)
  Q3: "instructional self-talk" AND pain AND fatigue AND endurance performance AND comparison
  Q4: "coping self-statements" AND (pain OR discomfort) AND (athlete OR endurance OR ultra)
  Q5: "inner speech" AND "pain management" AND (sport OR exercise) AND performance

Note on sub-tradition distinctness from A1: "self-talk motivational self-regulation" vocabulary (motivational self-talk, instructional self-talk, coping self-statements, inner speech) does not overlap with A1's vocabulary (association, dissociation, attentional focus, attentional narrowing). These are separate empirical literatures with different measurement instruments and different theoretical mechanisms (language-based regulation vs. attentional focus shifting). Boolean-connective test confirms non-synonymy.

Coverage-gap note: Does not cover the spontaneous vs. trained self-talk distinction, or how self-talk patterns change over the course of multi-hour or multi-day events.

---

### ANGLE A9: Pain Neuroscience Education — Belief-Based Pain Modulation in Athletic Contexts
===========
Vocabulary tradition: Clinical pain neuroscience education / neuromodulation
Angle type: Confirmatory
Predicted research character: empirical / gap
What to extract: Pain neuroscience education (PNE) outcomes in athletic populations; belief-change mechanisms for top-down pain modulation; central sensitization reversal; pain reprocessing therapy applied to exercise-induced pain; placebo and nocebo effects in sport pain; reconceptualization of pain meaning

Source type (academic): PubMed (Physical Therapy, Pain, Journal of Pain, British Journal of Sports Medicine)
Source type (practitioner): Pain neuroscience education clinical resources adapted for sport, athletic rehabilitation manuals

Queries:
  Q1: "pain neuroscience education" AND (sport OR athlete OR exercise OR endurance) AND performance
  Q2: "central sensitization" AND athlete AND psychological intervention AND pain AND endurance
  Q3: "pain reprocessing" AND (sport OR athletic OR exercise) AND performance OR pain management
  Q4: "top-down analgesia" AND (exercise OR sport) AND psychological mechanisms AND endurance
  Q5: (nocebo OR placebo) AND pain AND ("endurance sport" OR athletic) AND performance AND belief

Coverage-gap note: PNE applied specifically to ultra-endurance populations is nearly absent from the literature; evidence base is predominantly clinical (chronic pain patients). Transfer inference from chronic to acute exercise-induced pain requires explicit methodological justification.

---

### ANGLE N1: Null-Hypothesis — Evidence That Psychological Strategies Do NOT Reduce Pain or Improve Ultra-Endurance Performance
===========
Vocabulary tradition: Clinical pain psychology (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Null results for psychological interventions on pain tolerance in endurance; failure conditions and boundary specifications; cases where physiological depletion overrides psychological strategies; publication bias estimates in sport psychology; scope limitations; mechanisms explaining null outcomes

Source type (academic): PubMed, PsycINFO (Journal of Pain, Psychology of Sport and Exercise, International Journal of Sports Medicine)
Source type (practitioner): Athlete and practitioner accounts of strategy failures; coach reports of non-response to psychological training

Queries:
  Q1: psychological strategies pain ultra-endurance ("no effect" OR "not significant" OR "null result") AND performance
  Q2: "pain management" intervention endurance athlete ("did not improve" OR failure OR limitations) AND performance
  Q3: mental skills training pain tolerance endurance ("negative result" OR "null hypothesis" OR "replication failure") empirical
  Q4: psychological intervention pain endurance sport ("boundary conditions" OR "does not generalize" OR "limited to" OR "failed to")
  Q5: "effect size" pain psychological intervention endurance sport AND (meta-analysis OR "systematic review") AND "publication bias"

Coverage-gap note: Publication bias is documented in sport psychology (predominantly positive results published). Null results are systematically underreported; this angle may return limited literature even if the null result is real. This structural limitation is expected and known — per weakness_register.md. Absence of literature here does not confirm that strategies work; it confirms that the non-publication norm is active.

---

### ANGLE D1: Physiological Reductionism — Psychological Strategies as Epiphenomenal to Fitness Adaptations
===========
Vocabulary tradition: Exercise physiology / biological pain science (adversarial — new starting vocabulary)
Angle type: Adversarial

**[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]**

Predicted research character: empirical
What to extract: Evidence that physiological adaptations alone explain variance in pain tolerance in endurance athletes; studies where psychological covariates become non-significant when physical fitness is controlled; evidence that exercise-induced hypoalgesia is physiological not psychological; endorphin/opioid/endocannabinoid mechanisms as primary explanators of pain tolerance; challenges to psychobiological model primacy

Generation starting vocabulary (explicitly chosen to differ from confirmatory angles): "exercise-induced hypoalgesia," "beta-endorphin," "conditioned pain modulation," "diffuse noxious inhibitory control (DNIC)," "nociceptor adaptation," "endocannabinoid system," "cardiovascular fitness pain threshold," "central sensitization reversal via training"

Vocabulary EXCLUDED from generation (used in all confirmatory slots): self-talk, mental toughness, mindfulness, ACT, psychological flexibility, fear-avoidance, RPE psychological modulation, attention dissociation, meaning-making, emotion regulation, social support, pain neuroscience education, cognitive reappraisal, stress inoculation, affect labeling

Source type (academic): PubMed (Journal of Physiology, European Journal of Applied Physiology, Journal of Pain — physiology-focused searches only)
Source type (practitioner): Physiology-focused training resources — deprioritized; academic-leaning challenge tradition

Queries:
  Q1: "exercise-induced hypoalgesia" AND mechanism AND physiological AND endurance sport AND NOT psychological
  Q2: "beta-endorphin" AND pain tolerance AND endurance exercise AND physiological mechanism AND controlled
  Q3: "conditioned pain modulation" AND exercise AND fitness AND cardiovascular AND NOT psychological intervention
  Q4: cardiovascular training AND "pain threshold" AND physiological mechanism AND endurance athlete AND controlled study
  Q5: "diffuse noxious inhibitory control" AND exercise AND endurance athlete AND pain mechanism AND physiological

Coverage-gap note: This angle must be dispatched in a separate research context with no access to confirmatory angle results (A1–A9 and C1). The physiological reductionism challenge tests whether psychological strategy literature adds explanatory value beyond training-induced physiological adaptation. If this angle retrieves literature showing that fitness-matching eliminates psychological group differences, it fundamentally reframes the primary literature.

---

### ANGLE C1: Existential and Meaning-Centered Psychology — Bearing Unavoidable Suffering
===========
Vocabulary tradition: Existential/meaning-centered psychology (NOT in intake brief traditions)
Angle type: Cross-disciplinary
Predicted research character: empirical / consensus (mixed — empirical studies on logotherapy in pain populations; theoretical and qualitative literature predominates)
What to extract: Logotherapy applications to sustained pain management; meaning-making as a coping mechanism for unavoidable suffering; narrative reframing of pain as meaningful; posttraumatic growth in endurance athletes; existential acceptance vs. resistance to suffering; voluntary suffering frameworks

Generating from existential/meaning-centered psychology vocabulary, NOT from the user's apparent sport psychology or clinical pain framing.

Source type (academic): PubMed (Psycho-Oncology, Palliative and Supportive Care, Journal of Existential Psychology — where this literature is most developed), PsycINFO
Source type (practitioner): Logotherapy practitioner literature, narrative medicine resources, existential coaching publications

Queries:
  Q1: "meaning-centered therapy" AND (pain OR suffering) AND (endurance OR athlete OR performance)
  Q2: logotherapy AND ("pain tolerance" OR "bearing suffering") AND (performance OR sport OR endurance)
  Q3: "narrative reframing" AND pain AND meaning AND (athlete OR endurance OR ultra)
  Q4: "posttraumatic growth" AND endurance athlete AND (pain OR suffering OR adversity) AND psychological
  Q5: "existential psychology" AND pain AND ("voluntary suffering" OR endurance OR performance OR "meaningful pain")

Coverage-gap note: This tradition's most developed evidence base is in clinical populations (cancer patients, hospice, chronic illness). Application to athletic pain requires explicit inference. The shared underlying construct — bearing unavoidable suffering through meaning-construction — is genuine, but confounds differ significantly. Qualitative and phenomenological studies likely more abundant than RCTs.

---

## QUALITY GATE DOCUMENTATION

*(angle-quality.md — all four gates)*

---

### GATE 1 — Completeness checks

**Null-hypothesis angle present:**
PASS — Angle N1 is explicitly framed as "Evidence That Psychological Strategies Do NOT Reduce Pain or Improve Ultra-Endurance Performance." Query strings contain disconfirming vocabulary verbatim: "no effect," "not significant," "null result," "negative result," "null hypothesis," "replication failure," "did not improve," "does not generalize," "failed to." This is structurally distinct from a confirmatory angle with hedging — it is framed around failure conditions and disconfirmation as the primary retrieval target.

**Adversarial angle present:**
PASS — Angle D1 carries the label "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]" verbatim in the angle record.

**Cross-disciplinary angle present:**
PASS — Angle C1 targets existential/meaning-centered psychology. Checking C1's tradition label ("Existential/meaning-centered psychology") against the intake brief candidate traditions list (Traditions 1–7: sport psychology, clinical pain psychology, exercise physiology/perceived exertion, performance psychology/extreme environments, mindfulness/contemplative, emotion regulation, social psychology of sport): "Existential/meaning-centered psychology" does NOT appear in any of these seven traditions. PASS.

**Source-type coverage:**
PASS — Domain maturity is MIXED; practitioner sources are required. Practitioner sources assigned to: A1 (sport psychology practitioner publications), A2 (ACT sport protocols), A4 (military psychology reports, coaching), A5 (mindfulness sport programs), A7 (ultra-endurance coaching resources), A8 (coaching workbooks), A9 (rehabilitation manuals). PASS.

**Vocabulary-tradition map populated:**
PASS — Coverage map lists 7 distinct tradition names, each with representative terms. Coverage map was built before any angle content was written (Step 0 gate respected). PASS.

**Gate 1 result: PASS — all 5 items pass**

---

### GATE 2 — Distinctness checks

**Boolean-connective test (applied to potentially overlapping pairs):**

*A1 vs. A8 (both Sport psychology sub-traditions):*
Most distinctive query term for A1: "association dissociation attentional focus." Appears in A8's queries? No — A8 uses "self-talk," "motivational self-talk," "instructional self-talk," "coping self-statements," "inner speech." These terms do not appear in A1's queries. Running A1 queries OR A8 queries: A1 retrieves attentional strategy literature; A8 retrieves self-talk and verbal behavior literature. These are separate empirical traditions studied by different research groups using different instruments. PASS.

*A2 vs. A5 (clinical pain psychology vs. mindfulness):*
Most distinctive for A2: "acceptance and commitment therapy," "psychological flexibility," "fear-avoidance," "kinesiophobia." Appears in A5? A5 uses "MBSR," "mindful movement," "body scan," "present-moment attention." ACT and mindfulness share a conceptual family relationship (both include mindfulness components) — applying formal Boolean test: A2 queries would retrieve ACT, CBT-P, and fear-avoidance model literature; A5 queries would retrieve MBSR and contemplative-practice literature. Overlap is partial but NOT synonymous — ACT outcome studies and MBSR outcome studies are largely distinct literatures. PASS with evaluator note: partial conceptual overlap between ACT and mindfulness warranted; these are distinct interventions with distinct primary authors, journals, and outcome measures.

*A2 vs. N1 (clinical pain psychology vs. null-hypothesis):*
A2 is confirmatory ACT/acceptance; N1 is null-hypothesis framed around failure conditions. Structurally different angle types. Allowed exception per Gate 2. PASS.

*A3 vs. D1 (exercise physiology/RPE vs. adversarial physiology):*
A3 addresses psychological modulation of RPE (confirming psychological contribution to effort perception); D1 addresses physiological reductionism (challenging whether psychology adds explanatory value beyond fitness). These make OPPOSING predictions and retrieve literature from different journals. Not synonymous despite sharing physiology vocabulary family — they test opposite hypotheses. Adversarial exception applies. PASS.

*A4 vs. A1 (performance psychology vs. sport psychology — attentional):*
A4 uses "mental toughness," "hardiness," "stress inoculation," "grit." A1 uses "association," "dissociation," "attentional focus," "attentional strategy." Different theoretical frameworks (dispositional resilience vs. attentional control mechanisms), different measurement instruments, different primary journals. PASS.

*All other pairs:* No shared tradition-root labels not covered above; query vocabulary is highly distinct across traditions.

**Vocabulary-tradition distinctness check:**
All 12 angles have distinct vocabulary-tradition labels:
- A1: Sport psychology — attentional focus (association/dissociation)
- A2: Clinical pain psychology — ACT / psychological flexibility
- A3: Exercise physiology / perceived exertion
- A4: Performance psychology / extreme environments
- A5: Mindfulness / contemplative interventions
- A6: Emotion regulation
- A7: Social psychology of sport
- A8: Sport psychology — self-talk / motivational self-regulation
- A9: Clinical pain neuroscience education / neuromodulation
- N1: Clinical pain psychology (disconfirming variant) — allowed exception (null-hypothesis variant)
- D1: Exercise physiology / biological pain science (adversarial) — allowed exception (adversarial variant)
- C1: Existential/meaning-centered psychology

A1 and A8 share "Sport psychology" as root but carry distinct sub-tradition labels distinguishing mechanism and vocabulary. A2 and N1 share "Clinical pain psychology" root — null-hypothesis variant exception applies. A3 and D1 share exercise physiology family — adversarial variant exception applies.

**Gate 2 result: PASS** (with noted partial conceptual overlap between A2 and A5 — not synonymous; evaluators should assess independently)

---

### GATE 3 — Launchability checks

**Has at least one concrete query string:**
PASS — All 12 angles have 4–5 concrete, runnable query strings. Zero angles have fewer than 4 queries.

**No placeholder vocabulary:**
PASS — Reviewing all query strings: no "TBD," "[fill in]," "insert term," "to be determined," or equivalent placeholder present. All queries use concrete, searchable vocabulary. (Checked character by character for Angles N1 and D1 where negation operators were used — all confirmed runnable.)

**Source type is named:**
PASS — Every angle names specific platforms for both academic and practitioner source types:
- Academic: SPORTDiscus, PsycINFO, PubMed with specific journal guidance, Psychology of Sport and Exercise, Journal of Applied Sport Psychology, Journal of Pain, specific physiology journals for D1
- Practitioner: coaching manuals, practitioner publications, or explicit "academic-leaning; minimal practitioner production" note for A6 and D1
No "some database" or "relevant sources" vagueness present.

**Gate 3 result: PASS — all 12 angles pass all three items**

---

### GATE 4 — Scoring prohibition

**No LLM self-evaluation ranking:**
PASS — The angle list was not filtered, ranked, or prioritized using LLM self-evaluation. All 12 required type slots were generated using structural criteria only: coverage-gap conditioning (what tradition is NOT yet covered), type allocation (required structural types from Step 1), and tradition distinctness. No angle was evaluated as "most promising," "most relevant," or "most novel." Generation followed slot assignment without quality-ordering.

**No implicit quality assessment:**
PASS — No angle record contains "this is the strongest angle," "this is likely most useful," or equivalent subjective assessments. Predicted research character fields (empirical / consensus / gap) are structural predictions, not quality ratings.

**Gate 4 result: PASS**

---

## GATE SUMMARY

```
GATE SUMMARY
============
Gate 1 — Completeness: PASS
  All 5 items pass.
  - Null-hypothesis angle: PRESENT (N1 — explicitly framed as failure/disconfirmation)
  - ADVERSARIAL-FLAGGED label: PRESENT verbatim (D1)
  - Cross-disciplinary angle: PRESENT (C1 — existential/meaning-centered psychology,
    confirmed absent from intake brief tradition list)
  - Practitioner source coverage: PRESENT (A1, A2, A4, A5, A7, A8, A9)
  - Coverage map: PRESENT with 7 distinct traditions, built before angle content

Gate 2 — Distinctness: PASS
  No fully synonymous angle pairs found.
  - A1/A8 (both sport psychology sub-traditions): PASS — distinct vocabulary
    (attentional strategies vs. self-talk/verbal behavior); separate empirical literatures
  - A2/N1 (shared clinical pain psychology root): PASS — null-hypothesis exception applies
  - A3/D1 (shared exercise physiology family): PASS — adversarial exception applies
  Flag for evaluators: A2 (ACT) and A5 (mindfulness) have partial conceptual overlap —
    not synonymous as tested; distinct interventions, distinct primary literatures;
    evaluators should assess independently

Gate 3 — Launchability: PASS
  All 12 angles pass all three launchability checks.
  - Every angle has ≥4 concrete runnable query strings
  - No placeholder vocabulary in any query string
  - All source type fields name specific platforms

Gate 4 — Scoring prohibition: PASS
  No LLM self-evaluation ranking applied.
  No subjective quality language in angle records.

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all vocabulary traditions were enumerated by LLM
     only (Source B unavailable). Survey-paper probe (e.g., "psychological pain
     management ultra-endurance review 2023 2024 2025") recommended before treating
     this list as complete coverage. One or more traditions from the field literature
     may be absent without observable signal.
  2. A2/A5 partial conceptual overlap (ACT vs. mindfulness): not synonymous as tested;
     evaluators should independently verify distinct literature retrieval.
  3. A7 (social psychology) and A9 (pain neuroscience education) are predicted
     gap-character angles in ultra-endurance populations specifically — limited results
     are expected and document absence of literature, not angle failure.
  4. C1 (existential/meaning-centered) and A9 (pain neuroscience education) have
     evidence bases primarily in clinical populations; transfer to athletic contexts
     requires inference by the downstream researcher.
  5. N1 (null-hypothesis) may return limited literature due to publication bias
     in sport psychology (positive results norm). Absence of null-result literature
     does not confirm strategies work; it confirms the publication bias is active.
```

---

## POST-OUTPUT SELF-CHECK

*(CLAUDE.md Rule 6 — fires after any angle list, intake brief, or quality check)*

What is missing, incomplete, or questionable in the current output:

1. **Source B gap (primary residual risk):** All 7 vocabulary traditions in the intake brief are LLM self-reported. A survey-paper probe on "psychological pain management ultra-endurance systematic review" would validate the tradition list and may surface traditions absent here. This is the dominant uncertainty per weakness_register.md Weakness 1. Traditions that may be missing: occupational psychology (work-pain endurance), phenomenological/qualitative inquiry traditions, behavioral economics of discomfort avoidance, physiological psychology of the pleasure-pain interface (runner's high, endocannabinoid system subjective experience), possibly a separate voluntarism/philosophy of sport tradition.

2. **Domain coverage note for INT-11 scoring:** This topic (sport psychology, clinical pain) is moderately represented in LLM training data. The FM4 domain-conditional note from weakness_register.md Weakness 7 empirical update states that cross-tradition conditioning produces near-zero differential for topics heavily represented in LLM training. This topic is moderately (not heavily) represented — expected Q1 score for Condition B is 2–3 per the stage-1-design.md predicted range, with positive differential over Condition A expected. This should be visible when compared against cond-a-output.md.

3. **Adversarial execution gap:** Angle D1 is correctly labeled ADVERSARIAL-FLAGGED. Enforcement at execution time is downstream — the labeling communicates the requirement; this kit cannot enforce it (weakness_register.md Weakness 6).

4. **Angle count:** 12 angles on a 7-tradition domain is toward the lower end of the angle-generation.md hard-input range (20–30 justified for ≥4 traditions). The count reflects MODERATE coverage under Source B unavailability. A Source B pass would likely expand to 15–20 angles by surfacing sub-traditions missed here.

5. **Q5 specificity check (self-check before closing):** Reviewing queries across all angles for specificity operators:
   - Boolean AND operators: present in all angles (e.g., A1 Q1, A2 Q1, A3 Q1)
   - Named phenomena: present (e.g., "central governor theory," "Pain Catastrophizing Scale," "MBSR," "Borg scale," "beta-endorphin," "DNIC")
   - Named frameworks: present (e.g., "psychobiological model," "ACT," "Gross's process model")
   - Venue/date modifiers: partially present (some queries include "empirical," "randomized," "systematic review," "meta-analysis")
   Q5 self-assessment: majority of angles meet the threshold for Score 3 (tradition-specific vocabulary + specificity operator); no angle has only generic topic searches without tradition-specific vocabulary.

Done-criteria re-check (CLAUDE.md — before reporting done):
The done-criteria for this task is: intake brief (all fields populated) + coverage map (built before angles) + type allocations + 12 angle records in required format + documented quality gate results for all four gates + gate summary. All items present. Done-criteria met.

---

*Output complete. VOCABULARY SELF-REPORT FLAG active. Source B pass recommended before treating this list as full-coverage. All four quality gates: PASS.*
