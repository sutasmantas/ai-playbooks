# angle-gen-kit Execution — Condition C
**Topic:** Psychological strategies for managing pain and discomfort in ultra-endurance events
**Run date:** 2026-07-07
**Source B status:** UNAVAILABLE (subagent context, no web access)
**Execution path:** Source A + Source C (LLM enumeration only)
**Model:** claude-sonnet-4-6 (frontier tier — meets minimum model requirement)

---

# PART 1 — INTAKE BRIEF

## Step 1 — Sparse-input parsing

**Input:** "I want to research psychological strategies for managing pain and discomfort in ultra-endurance events."

| Element | Extracted value |
|---------|----------------|
| Target concept | Psychological strategies for managing pain and discomfort in ultra-endurance events |
| Anchor vocabulary | "psychological strategies" (sport/clinical psychology tradition); "pain" (pain science/clinical tradition); "discomfort" (broader — sport science and clinical); "ultra-endurance events" (sport science/exercise physiology tradition) |
| Scope signals | Domain: ultra-endurance sport (not general pain management, not recreational exercise); Focus: psychological/mental mechanisms (not pharmacological, not physiological intervention); Management framing (coping/regulation, not elimination) |

No genuine ambiguity found. Target concept is unambiguous. Scope signals are sufficient to distinguish this from adjacent topics (general pain management, exercise physiology without psychological focus). No questions required — proceeding to vocabulary bootstrap.

---

## Step 2 — Vocabulary bootstrap

### Source A — LLM translation

**From "psychological strategies":**
- Sport psychology tradition: attentional focus, associative strategy, dissociative strategy, mental toughness, psychological skills training, self-talk, imagery, visualization, coping strategies, psychological readiness, competition anxiety management, psychological preparation
- Clinical psychology tradition: cognitive-behavioral therapy (CBT), acceptance and commitment therapy (ACT), pain catastrophizing, cognitive reappraisal, emotion regulation, fear-avoidance model, kinesiophobia, psychological flexibility
- Motivational science tradition: self-determination theory, intrinsic motivation, autonomous motivation, self-efficacy, goal-setting theory, motivational regulation, persistence behavior

**From "pain and discomfort":**
- Pain science: nociception, pain perception, pain threshold, pain tolerance, acute pain, exercise-induced pain, perceived effort, affective valence of exercise, pain affect vs. pain intensity
- Psychophysiology: rating of perceived exertion (RPE), central governor model, effort sense, afferent signals, interoception, autonomic nervous system response
- Neuroscience: cortical control of exercise termination, predictive processing of fatigue, attention and pain modulation, opioidergic pathways, descending pain inhibition

**From "ultra-endurance events":**
- Sport science: ultramarathon, ironman triathlon, ultra-trail, multi-day races, extreme endurance, prolonged exercise, high-volume training
- Performance science: performance psychology, elite endurance athlete, sport psychology applied, athlete resilience

### Source C — Absent-term signal

Terms LLM would predict to find associated with this topic that the user did NOT use:
1. **"attentional focus"** — the most documented individual cognitive strategy in the endurance pain literature; user chose "psychological strategies" (broader), not naming attentional focus specifically; suggests possible approach from a practitioner rather than research framing
2. **"pain catastrophizing"** — a key individual-difference predictor in the pain science literature; its absence suggests the user may not be approaching from a clinical/pain-science angle
3. **"central governor model"** — the most cited theoretical framework linking brain/psychology to exercise termination; absent, suggesting the user may not have a sport physiology background
4. **"acceptance and commitment therapy (ACT)"** — increasingly prominent in both pain management and sport psychology; its absence is a vocabulary gap signal
5. **"self-talk"** — the most studied practical technique in applied sport psychology; absent from user input despite being a core psychological strategy for pain

### Source B status

```
Source B status: UNAVAILABLE — MODERATE — Source A + Source C together identified 5 distinct vocabulary traditions (sport psychology, pain science/clinical psychology, exercise physiology/psychophysiology, cognitive neuroscience, mindfulness/acceptance-based). Proceed with VOCABULARY SELF-REPORT FLAG applied.
```

**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions listed in this brief were enumerated by LLM only (no survey paper, no external anchor). The LLM cannot enumerate traditions absent from its training distribution. A vocabulary-discovery pass (pearl-growing from a known anchor paper in sport psychology pain management) is recommended before treating this angle list as having full tradition coverage.

---

## Step 3 — Question-type classification

**Classification: EXPLORATORY**

Basis: The prompt "I want to research psychological strategies for managing pain and discomfort in ultra-endurance events" contains no comparison language, no intervention-outcome pair, no named comparison condition. It asks "what is the space of strategies and findings on this topic." PICO is NOT applied at intake (decision rule: EXPLORATORY default when no explicit comparison structure present — applying PICO at intake for exploratory questions is the documented failure mode per synthesis Step 4).

---

## Step 4 — Populated intake brief

```
INTAKE BRIEF
============
Topic: Psychological strategies athletes use to manage pain and discomfort during ultra-endurance
       events — what strategies exist, what evidence supports them, and under what conditions do
       they operate

Anchor vocabulary:
  "psychological strategies" — sport psychology / clinical psychology tradition
  "pain" — pain science / clinical tradition
  "discomfort" — exercise physiology / sport science tradition (broader valence than pain)
  "ultra-endurance events" — sport science / exercise physiology tradition

Candidate vocabulary traditions:
  1. Sport psychology — attentional focus, associative/dissociative strategy, mental toughness,
     self-talk, imagery, psychological skills training (PST), coping, psychological readiness,
     competition preparation, resilience
  2. Pain science / clinical psychology — pain catastrophizing, pain tolerance, pain threshold,
     CBT, acceptance and commitment therapy (ACT), fear-avoidance model, kinesiophobia,
     cognitive reappraisal, psychological flexibility, pain affect vs. intensity distinction
  3. Exercise physiology / psychophysiology — rating of perceived exertion (RPE), central governor
     model, effort sense, interoception, fatigue, afferent signaling, autonomic response, HPA axis,
     cortisol under prolonged exercise
  4. Cognitive neuroscience — dual-process theory of effort, predictive processing of fatigue/pain,
     attentional resource allocation under noxious stimuli, descending pain inhibition, neural
     correlates of pain tolerance, cortical exercise termination, interoceptive prediction error
  5. Mindfulness / acceptance-based interventions — mindfulness-based stress reduction (MBSR),
     mindfulness meditation, body scan, present-moment awareness in sport, experiential
     acceptance, non-judgmental observation of discomfort

  NOTE: Vocabulary traditions listed here are LLM self-reported. Vocabulary-discovery pass
  recommended before accepting as complete.

Question type: EXPLORATORY
  (No comparison language or intervention-outcome structure in prompt)

Scope markers:
  Domain: ultra-endurance sport events specifically (not general populations, not clinical
  chronic pain patients, not recreational exercise)
  Focus: psychological mechanisms and strategies (not pharmacological, not physiological
  interventions such as heat acclimation)
  Management framing: coping and regulation during events, not pain elimination

Known exclusions: None stated
  Inferred exclusion (flagged for user confirmation): pharmacological pain management;
  exclusively physiological approaches with no psychological component

Domain maturity estimate: MIXED
  Basis: The academic component (sport psychology, pain science, exercise physiology) has a
  substantial peer-reviewed literature with systematic reviews. The practitioner component
  (coaching, race preparation, athlete-reported strategies) is significant — ultra-endurance
  communities produce substantial practitioner literature (race reports, coaching curricula,
  athlete memoirs). User prompt contains neither exclusive academic vocabulary nor practitioner
  jargon — consistent with mixed-domain approach.

Survey paper status: NOT FOUND — Source B unavailable. Vocabulary-discovery pass recommended
  before finalizing angle list as complete. Representative anchor: search for systematic review
  "psychological strategies pain endurance sport" to bootstrap additional vocabulary terms.

Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):
  Target tradition: Military psychology / stress inoculation training
  Selection basis: Same real-world problem from human perspective — military personnel must
  continue operating under physical pain and duress; this tradition has developed a distinct
  vocabulary and evidence base (stress inoculation training, hardiness, SERE training, pain
  tolerance in operational contexts, warfighter resilience) that is unlikely to appear in
  sport psychology searches despite addressing the same functional challenge of continued
  performance despite pain
```

---

## Step 5 — Source B fallback note

Source B unavailable. Severity: MODERATE. Source A + Source C identified 5 distinct vocabulary traditions. Proceeding with VOCABULARY SELF-REPORT FLAG active. Risk: potential missing traditions in underrepresented sub-fields (e.g., ethnographic literature on ritual pain endurance practices, occupational medicine literature on pain management for physically demanding occupations).

---

## Step 6 — Intake gate check

- [x] Topic field populated (not TBD) — PASS
- [x] Candidate vocabulary traditions: 5 entries, all populated — PASS
- [x] Question type classified: EXPLORATORY — PASS
- [x] Cross-disciplinary tradition pre-committed: Military psychology / stress inoculation training, selection basis stated — PASS

**Gate status: ALL FOUR CONDITIONS MET — PROCEED TO angle-generation.md**

---

# PART 2 — PHASE-GATE REFLECTION (intake → angle generation)

1. Are all output fields in the intake brief populated (no blanks)? YES — all fields contain substantive content; no TBD entries.
2. Are ≥2 distinct vocabulary traditions listed? YES — 5 traditions enumerated with representative terms for each.
3. Is the question type classified? YES — EXPLORATORY.

Proceeding to angle generation.

---

# PART 3 — COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: Sport psychology — attentional/cognitive strategies
  Representative terms: attentional focus, associative strategy, dissociative strategy,
  self-talk, mental toughness, psychological skills training, imagery, coping
  Planned angle slot: Confirmatory A1
  Gap flag: NO — full coverage planned

Tradition 2: Pain science / clinical psychology
  Representative terms: pain catastrophizing, CBT, ACT, fear-avoidance, kinesiophobia,
  cognitive reappraisal, pain tolerance, psychological flexibility
  Planned angle slot: Confirmatory A2
  Gap flag: NO — full coverage planned

Tradition 3: Exercise physiology / psychophysiology
  Representative terms: RPE, central governor model, effort sense, interoception, afferent
  signaling, HPA axis response, fatigue mechanisms, psychophysiological regulation
  Planned angle slot: Confirmatory A3
  Gap flag: NO — full coverage planned

Tradition 4: Cognitive neuroscience
  Representative terms: dual-process theory of effort, predictive processing, attentional
  resource allocation, descending pain inhibition, cortical exercise termination, neural
  correlates of pain tolerance
  Planned angle slot: Confirmatory A4
  Gap flag: NO — full coverage planned

Tradition 5: Mindfulness / acceptance-based interventions
  Representative terms: MBSR, mindfulness meditation, body scan, present-moment awareness,
  experiential acceptance, non-judgmental observation
  Planned angle slot: Confirmatory A5
  Gap flag: NO — full coverage planned

Traditions NOT yet represented in planned list: NONE — all 5 intake brief traditions have
  planned angle slots.

Null-hypothesis slot (N1): Assigned — will formulate as disconfirming search across
  traditions (strategies do not work / do not generalize)

Adversarial slot (D1): Assigned — starting vocabulary from Individual differences /
  behavioral genetics tradition. This tradition is NOT in the intake brief. Adversarial
  challenge: pain tolerance is a stable physiological/genetic trait rather than a
  strategy-amenable state; psychological strategies work only within narrow genetic bounds.
  Excluded terms (will not appear in D1 generation): attentional focus, self-talk, CBT,
  ACT, mindfulness, mental toughness, RPE manipulation, central governor, dual process,
  predictive processing.

Cross-disciplinary slot (C1): Military psychology / stress inoculation training
  Basis: Same real-world problem from human perspective (continued performance under physical
  pain and duress); distinct institutional research tradition; vocabulary (stress inoculation,
  SERE, hardiness, warfighter resilience) unlikely to co-appear in sport psychology searches.
  Confirmed as selection: heuristic 2 (same real-world problem from human perspective) yields
  a non-obvious answer. Military tradition has the highest coverage novelty relative to all
  five intake brief traditions.

INT-10 FM4 domain-scope note: This topic (psychological strategies for pain in
ultra-endurance sport) is a moderately-represented domain in LLM training data — not as
dense as LLM/AI research, but not sparse. Coverage-gap conditioning is expected to add
MODERATE differential (not NEAR-ZERO) because: (a) the topic crosses multiple vocabulary
traditions with genuinely different nomenclature; (b) the cross-disciplinary slots (military
psychology, individual differences/genetics) target traditions with low overlap to the primary
sport psychology vocabulary pool. FM4 condition does not fully apply here.
```

---

# PART 4 — TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Tradition 1): Sport psychology — attentional/cognitive strategies
Slot A2 (Confirmatory — Tradition 2): Pain science / clinical psychology
Slot A3 (Confirmatory — Tradition 3): Exercise physiology / psychophysiology
Slot A4 (Confirmatory — Tradition 4): Cognitive neuroscience
Slot A5 (Confirmatory — Tradition 5): Mindfulness / acceptance-based interventions
Slot N1 (Null-hypothesis): Assigned — disconfirming angle across strategy traditions
Slot D1 (Adversarial): Individual differences / behavioral genetics — NOT FROM: sport
  psychology, pain science/clinical, exercise physiology, cognitive neuroscience, mindfulness
Slot C1 (Cross-disciplinary): Military psychology / stress inoculation training — NOT in
  intake brief candidate traditions
```

Total planned angles: 8
Expected range (5–12 standard): WITHIN RANGE. 5 traditions × 1 confirmatory each = 5; plus 3 required structural types = 8 total.

---

# PART 5 — ANGLE LIST

---

## ANGLE 1: Attentional strategies and cognitive regulation in endurance pain
===========

**Vocabulary tradition:** Sport psychology — attentional/cognitive strategies

**Angle type:** Confirmatory A1

**Predicted research character:** EMPIRICAL — expect peer-reviewed studies with measurements of pain perception, performance outcomes, and comparison of strategy conditions; substantial experimental and quasi-experimental literature exists

**What to extract:** Effect sizes for attentional focus manipulations on pain tolerance and endurance performance; distinction between associative (body-focused) and dissociative (distraction-based) strategies and which conditions favor each; self-talk intervention protocols and outcomes; psychological skills training program designs; moderators of effect (expertise level, race distance, pain intensity)

**Source type (academic):** PubMed / Semantic Scholar — sport psychology journals (Journal of Sport and Exercise Psychology, Psychology of Sport and Exercise, International Journal of Sport Psychology)

**Source type (practitioner):** Practitioner-facing sport psychology resources (applied sport psychology textbooks, national sport psychology organization publications, coaching certification curricula)

**Queries:**
- Q1: attentional focus strategies pain management ultra-endurance sport empirical review
- Q2: associative dissociative strategy endurance athletes pain perception performance comparison
- Q3: self-talk intervention pain tolerance distance runners experimental
- Q4: psychological skills training coping pain ultra-marathon systematic review effect size
- Q5: mental toughness grit ultra-endurance athlete pain discomfort performance outcomes

**Coverage-gap note:** This angle does not address motivational science sub-tradition (self-determination theory, intrinsic motivation as a pain tolerance moderator) — this is a distinct vocabulary cluster within exercise/sport psychology that may warrant a separate angle if the literature proves rich enough. Flag for human judgment post-retrieval.

---

## ANGLE 2: Pain catastrophizing, fear-avoidance, and clinical psychology interventions in athletic contexts
===========

**Vocabulary tradition:** Pain science / clinical psychology

**Angle type:** Confirmatory A2

**Predicted research character:** EMPIRICAL — expect both epidemiological studies (catastrophizing prevalence in athletes) and intervention RCTs; growing clinical sport psychology literature

**What to extract:** Prevalence and predictors of pain catastrophizing in endurance athletes; effects of CBT-based programs on pain catastrophizing and performance; ACT protocol outcomes in athletic pain management; fear-avoidance patterns specific to ultra-endurance; dose-response findings; whether clinical constructs (kinesiophobia, psychological flexibility) map cleanly to athletic populations

**Source type (academic):** PubMed — pain science journals (Pain, European Journal of Pain, Journal of Pain), clinical sport psychology literature, also Semantic Scholar for interdisciplinary coverage

**Source type (practitioner):** Clinical sport psychology practitioner publications, sports medicine practitioner guidelines on psychological pain management

**Queries:**
- Q1: pain catastrophizing endurance athletes performance sport psychology empirical
- Q2: acceptance commitment therapy ACT pain management athletic performance controlled trial
- Q3: cognitive behavioral therapy pain tolerance endurance sport intervention outcomes
- Q4: fear avoidance model kinesiophobia exercise pain athlete population
- Q5: psychological flexibility pain coping ultra-marathon ultra-trail athletes

**Coverage-gap note:** Does not specifically address whether clinical frameworks derived from chronic pain patients transfer without modification to the context of voluntary, intense exercise-induced pain — a known validity question in the literature. Flag for targeted follow-up search if clinical-to-sport transfer is a key user concern.

---

## ANGLE 3: Psychophysiological regulation of effort and pain during prolonged exercise
===========

**Vocabulary tradition:** Exercise physiology / psychophysiology

**Angle type:** Confirmatory A3

**Predicted research character:** EMPIRICAL — expect mechanistic studies with physiological measurements; brain stimulation experiments; within-subject designs

**What to extract:** Central governor model evidence for psychological factors modulating exercise termination; RPE manipulation studies and their effect on performance and pain perception; evidence for top-down cortical regulation of afferent pain signals during exercise; HPA axis and stress hormones as mediators; dissociation between peripheral fatigue and perceived effort; studies examining brain-based interventions (e.g., tDCS, motivational cues) on pain and performance

**Source type (academic):** PubMed — exercise physiology and sports medicine journals (Medicine and Science in Sports and Exercise, Journal of Physiology, European Journal of Applied Physiology, Journal of Applied Physiology), also Semantic Scholar

**Source type (practitioner):** Sports science practitioner publications, exercise physiology applied resources — DEPRIORITIZED: this angle is predominantly academic-heavy; practitioner literature is limited for this mechanistic sub-tradition

**Queries:**
- Q1: central governor model psychological factors exercise termination ultra-endurance brain
- Q2: rating perceived exertion RPE psychological manipulation pain performance endurance
- Q3: psychophysiology pain tolerance prolonged exercise HPA axis cortisol neural
- Q4: afferent pain signaling top-down cortical regulation exercise induced pain mechanisms
- Q5: brain stimulation tDCS motivational cues pain perception endurance performance

**Coverage-gap note:** Does not address the affective valence literature (exercise-induced pain is distinct from exercise-induced discomfort — valence matters for continuation behavior). If the user's interest includes the affective/hedonic dimension of pain, a dedicated angle on affective response to exercise pain would add coverage.

---

## ANGLE 4: Cognitive neuroscience of pain tolerance — dual process, predictive processing, and attention
===========

**Vocabulary tradition:** Cognitive neuroscience

**Angle type:** Confirmatory A4

**Predicted research character:** EMPIRICAL — expect neuroimaging studies (fMRI, EEG), computational modeling, experimental pain paradigms; this is a more mechanistic tradition than A3

**What to extract:** Dual-process account of effort and pain in endurance (automatic pain experience vs. controlled regulation); predictive processing models of fatigue and pain (interoceptive prediction error as fatigue mechanism); attentional resource allocation under noxious stimuli (does attention to pain amplify or reduce experience?); descending pain inhibition and conditioned pain modulation in exercising athletes; neural correlates distinguishing high vs. low pain tolerance in endurance contexts

**Source type (academic):** Semantic Scholar, PubMed — neuroscience and cognitive science journals (NeuroImage, Cerebral Cortex, Journal of Neuroscience, Frontiers in Neuroscience), also arXiv for computational models

**Source type (practitioner):** DEPRIORITIZED — this is an academic-heavy mechanistic tradition with minimal practitioner production

**Queries:**
- Q1: dual process effort perception pain endurance sport cognitive neuroscience theoretical
- Q2: predictive processing interoception fatigue exercise pain computational model empirical
- Q3: attentional resource allocation pain amplification reduction endurance athletes neural
- Q4: descending pain inhibition conditioned pain modulation exercise athlete sport
- Q5: neural correlates pain tolerance endurance performance fMRI neuroimaging athletes

**Coverage-gap note:** Overlap with A3 (exercise physiology) exists at the brain-body interface. A3 focuses on exercise physiology mechanisms (RPE, central governor, HPA); A4 focuses on cognitive and computational mechanisms (dual process, predictive processing, neural imaging). The Boolean-connective test predicts these would retrieve different primary literature despite surface proximity — the vocabulary pools (RPE/central governor vs. predictive processing/fMRI) are distinct enough. If overlap is found in retrieval, consider merging with A3 or scoping A4 to computational models only.

---

## ANGLE 5: Mindfulness and acceptance-based interventions for exercise-induced pain in endurance sport
===========

**Vocabulary tradition:** Mindfulness / acceptance-based interventions

**Angle type:** Confirmatory A5

**Predicted research character:** EMPIRICAL — growing body of RCTs; also expect mechanistic studies on pain modulation mechanisms of mindfulness

**What to extract:** RCT or controlled trial evidence for mindfulness interventions on pain tolerance and endurance performance; dose-response findings (how much mindfulness practice produces detectable effects?); mechanisms (is it attention regulation, acceptance, or interoceptive awareness that produces effects?); comparison with other psychological skills (mindfulness vs. self-talk, mindfulness vs. distraction); practitioner protocols; application specifically during events vs. as training-phase preparation

**Source type (academic):** PubMed, Semantic Scholar — mindfulness journals (Mindfulness, Journal of Contextual Behavioral Science), sport psychology journals, pain journals

**Source type (practitioner):** Mindfulness-based sport performance practitioner resources, sport psychology applied publications with mindfulness protocols

**Queries:**
- Q1: mindfulness meditation pain tolerance endurance sport performance controlled trial review
- Q2: mindfulness-based sport performance MBSP pain management endurance athlete intervention
- Q3: body scan present-moment awareness ultra-endurance pain discomfort performance
- Q4: mindfulness versus distraction self-talk pain tolerance exercise comparison experimental
- Q5: acceptance-based interventions exercise-induced pain athletic performance mechanisms

**Coverage-gap note:** There is potential vocabulary overlap with A2 (ACT also incorporates acceptance and present-moment awareness). Distinction: A2 targets the pain catastrophizing and fear-avoidance tradition using clinical psychology vocabulary; A5 targets the contemplative/mindfulness tradition using meditation science vocabulary. The query strings use substantially different terms (ACT/catastrophizing vs. mindfulness/MBSP/body scan). Boolean-connective test passes — would not retrieve the same documents via OR. However, if ACT-mindfulness fusion literature dominates the retrieval for either angle, flag for human judgment.

---

## ANGLE N1: Evidence that psychological strategies for pain management in endurance sport do not work, do not generalize, or have limited scope
===========

**Vocabulary tradition:** Sport psychology — disconfirming variant (crosses multiple traditions)

**Angle type:** Null-hypothesis

**Predicted research character:** GAP + EMPIRICAL — explicit negative results are rare in this literature; expect to find scope limitation papers, failed replications, moderator analyses showing null effects, and meta-analytic heterogeneity analyses rather than direct disconfirmation studies

**What to extract:** Studies reporting null or negative findings for psychological interventions on pain or performance; scope limitations (populations, contexts, pain intensities where strategies fail); high heterogeneity in meta-analyses suggesting strategy effects are not robust; researcher degree-of-freedom concerns or replication failures; conditions under which dissociative strategies backfire (e.g., safety monitoring concerns); studies showing psychological strategies do not outperform physiological/training variables as predictors

**Source type (academic):** PubMed, Semantic Scholar — specifically in sport psychology and pain journals; also search for meta-analytic heterogeneity analyses

**Source type (practitioner):** DEPRIORITIZED — practitioner literature rarely frames findings as null; negative evidence is predominantly academic

**Queries:**
- Q1: psychological strategies pain management endurance sport null result no effect failure limitations
- Q2: attentional focus strategies endurance pain perception no improvement negative findings replication
- Q3: mental skills training pain tolerance athlete ineffective scope limitations boundary conditions
- Q4: psychological intervention ultra-marathon performance pain heterogeneity meta-analysis limits
- Q5: dissociative strategy endurance safety backfire negative consequence pain management failure

**Coverage-gap note:** The absence of explicit disconfirmation studies does not mean strategies work — it may mean the literature has a publication bias toward positive results. The gap prediction is the expected finding from this angle; its value is in documenting the absence and surfacing any available scope conditions.

---

## ANGLE D1 [ADVERSARIAL-FLAGGED]: Pain tolerance as stable trait — evidence against strategy-based modulation
===========
**[ADVERSARIAL-FLAGGED: dispatch in a separate research context with no prior confirmatory results from Angles 1–5. Do not run in the same session as any confirmatory angle retrieval.]**

**Vocabulary tradition:** Individual differences / behavioral genetics — NOT from: sport psychology, pain science/clinical, exercise physiology, cognitive neuroscience, mindfulness

**Angle type:** Adversarial

**Generation note:** Generated using only individual differences and behavioral genetics vocabulary. The following terms were explicitly excluded from generation: attentional focus, self-talk, mental toughness, CBT, ACT, catastrophizing, mindfulness, acceptance, central governor, RPE manipulation, dual process, predictive processing, interoception, psychological skills training.

**Adversarial challenge:** The premise of the confirmatory angles is that athletes can modulate their pain experience via psychological strategies. The adversarial tradition challenges this: pain tolerance during exercise may be primarily a stable physiological and genetic trait (COMT polymorphism, mu-opioid receptor gene variants, pain sensitivity heritability); psychological strategies may work only within narrow genetically determined bounds; observed "strategy" effects in sport psychology research may be partially confounded by individual differences in pain sensitivity that are pre-existing trait differences, not strategy effects.

**Predicted research character:** EMPIRICAL — expect heritability studies, genetic association studies, and individual-difference research; also expect literature questioning whether experimental pain paradigms (cold pressor, ischemic pain) transfer to exercise-induced pain

**What to extract:** Heritability estimates for pain tolerance and pain sensitivity; genetic variants associated with pain tolerance (COMT, OPRM1, ADRB2); twin study evidence for trait stability of exercise pain tolerance; studies showing pain sensitivity as a predictor of endurance performance independent of psychological factors; evidence that experimental pain tolerance (lab paradigms) is the dominant predictor of performance variance; methodology critiques of psychological strategy research (self-report bias, demand characteristics)

**Source type (academic):** PubMed — pain genetics, behavioral genetics, individual differences in pain; also Semantic Scholar

**Source type (practitioner):** DEPRIORITIZED — this is predominantly an academic/empirical tradition

**Queries:**
- Q1: heritability pain sensitivity tolerance twin study genetic predisposition exercise
- Q2: COMT OPRM1 gene polymorphism pain tolerance endurance athletic performance
- Q3: individual differences pain sensitivity trait stability endurance sport predictor
- Q4: experimental pain tolerance cold pressor exercise performance predictor independent psychological
- Q5: pain sensitivity stable trait versus state intervention skepticism sport psychology confound

**Coverage-gap note:** This angle specifically targets evidence that would undermine the confirmatory angles. A research agent running this angle must resist incorporating confirmatory evidence retrieved in prior angles — the value is in finding the strongest physiological-determinist argument, not in confirming the moderate consensus position.

---

## ANGLE C1 [CROSS-DISCIPLINARY]: Stress inoculation, hardiness, and military psychology approaches to pain and physical duress
===========

**Vocabulary tradition:** Military psychology / stress inoculation training — NOT in intake brief candidate traditions

**Angle type:** Cross-disciplinary

**Generation note:** Generated from military psychology vocabulary. NOT from sport psychology framing. The same functional problem (continue performing despite significant physical pain) is addressed in military research with different institutional constraints, vocabulary, and study populations.

**Predicted research character:** EMPIRICAL + CONSENSUS — mixture of empirical research (stress inoculation training RCTs, military selection studies) and applied doctrine/protocol material; this tradition produces both peer-reviewed research and grey literature (military technical reports, training doctrine)

**What to extract:** Stress inoculation training (SIT) protocols and their measured effects on pain tolerance and performance under physical duress; hardiness construct evidence (commitment, control, challenge) in predicting continuation despite pain; SERE training data on psychological strategies for managing pain and discomfort; military selection research distinguishing psychological vs. physiological predictors of persistence; cold water immersion and other military training paradigms for building pain tolerance; transferability to civilian endurance sport contexts

**Source type (academic):** PubMed, Semantic Scholar — military medicine journals (Military Medicine, BMJ Military Health), military psychology (Military Psychology), stress and trauma journals; RAND Corporation reports; Defense Technical Information Center (DTIC) for grey literature

**Source type (practitioner):** Military doctrine documents, training manuals (TRADOC publications where publicly available), SERE instructor training materials; also grey literature from special operations research programs

**Queries:**
- Q1: stress inoculation training pain tolerance physical duress military performance empirical
- Q2: hardiness psychological construct physical pain endurance military personnel
- Q3: SERE training psychological strategies pain discomfort survival resistance military
- Q4: military selection physical duress persistence psychological predictors pain tolerance
- Q5: cold water immersion pain tolerance psychological training military warfighter endurance

**Coverage-gap note:** Transfer validity is the primary concern — military training contexts differ from voluntary ultra-endurance events in population (self-selected vs. conscripted/selected), motivation (obligatory vs. intrinsic), and consequence structure (operational vs. recreational). Any findings from military research should be examined for transfer conditions before applying to sport contexts.

---

# PART 6 — QUALITY GATE SUMMARY

## Gate 1 — Completeness checks

- [x] **Null-hypothesis angle present:** PASS — Angle N1 is framed as disconfirming search. Query set includes terms: "null result," "no effect," "failure," "limitations," "no improvement," "negative findings," "backfire." One and exactly one null-hypothesis angle in the list.

- [x] **Adversarial angle present:** PASS — Angle D1 is labeled [ADVERSARIAL-FLAGGED] with dispatch note ("dispatch in a separate research context with no prior confirmatory results from Angles 1–5"). Label present; dispatch note present.

- [x] **Cross-disciplinary angle present:** PASS — Angle C1 targets military psychology / stress inoculation training. This tradition is NOT in the intake brief's candidate vocabulary traditions (which were: sport psychology, pain science/clinical psychology, exercise physiology, cognitive neuroscience, mindfulness/acceptance-based). Verified: C1 tradition label does not appear in intake brief Candidate Vocabulary Traditions list.

- [x] **Source-type coverage:** PASS — Domain maturity is MIXED. Practitioner sources are assigned in: Angle A1 (practitioner-facing sport psychology resources); Angle A2 (clinical sport psychology practitioner publications); Angle C1 (military doctrine documents, SERE grey literature). MIXED domain requirement met.

- [x] **Vocabulary-tradition map populated:** PASS — Coverage map contains 5 distinct tradition names with representative terms each. Coverage map exists as a populated document above (Part 3).

**Gate 1 verdict: PASS**

---

## Gate 2 — Distinctness checks

**Boolean-connective test — pair-by-pair assessment:**

A1 (attentional focus, self-talk, PST) vs A2 (catastrophizing, CBT, ACT, fear-avoidance): PASS — vocabulary pools are distinct; "attentional focus" and "catastrophizing" do not co-retrieve predominantly the same papers.

A1 vs A3 (RPE, central governor, HPA, afferent signals): PASS — sport psychology vocabulary vs. exercise physiology vocabulary; different journals; different retrieval pools.

A1 vs A4 (dual process, predictive processing, fMRI, descending inhibition): PASS — sport psychology attentional strategies vs. cognitive neuroscience mechanisms; different traditions.

A1 vs A5 (mindfulness, MBSP, body scan, acceptance): PASS — traditional sport psych skills vs. contemplative/mindfulness science; distinct even where both address "psychological strategy."

A2 vs A5 (ACT/catastrophizing vs. mindfulness/MBSP): PARTIAL OVERLAP FLAG — ACT incorporates acceptance components similar to mindfulness; some papers may appear in both. However, A2's primary vocabulary (catastrophizing, fear-avoidance, kinesiophobia, CBT) and A5's primary vocabulary (MBSR, body scan, present-moment, meditation) are sufficiently distinct that OR retrieval would NOT produce substantially the same document set. PASS — flag noted for human monitoring during retrieval.

A3 (RPE, central governor, psychophysiology) vs A4 (dual process, predictive processing, neural imaging): PARTIAL OVERLAP FLAG — both address brain-exercise interface; overlap at the "neural basis of RPE" intersection. However, A3 vocabulary (RPE, HPA, tDCS on performance) and A4 vocabulary (fMRI, predictive processing, computational model) occupy different journal pools. PASS — flag noted.

N1 vs all: PASS — null hypothesis angle uses disconfirming vocabulary structurally distinct from all confirmatory angles.

D1 vs all: PASS — D1 uses biological/genetics vocabulary (COMT, heritability, twin study) explicitly excluded from all other angles.

C1 vs all: PASS — military vocabulary (SERE, hardiness, stress inoculation, warfighter) does not co-appear in sport psychology, pain science, or exercise physiology literature.

**Vocabulary-tradition distinctness check:**
Each angle has a different vocabulary-tradition label:
- A1: Sport psychology — attentional/cognitive strategies
- A2: Pain science / clinical psychology
- A3: Exercise physiology / psychophysiology
- A4: Cognitive neuroscience
- A5: Mindfulness / acceptance-based interventions
- N1: Sport psychology — disconfirming variant (labeled distinctly as null-hypothesis)
- D1: Individual differences / behavioral genetics [ADVERSARIAL-FLAGGED]
- C1: Military psychology / stress inoculation training [Cross-disciplinary]

No two non-null, non-adversarial angles share the same tradition label. PASS.

**Gate 2 verdict: PASS — with two partial-overlap flags (A2/A5 and A3/A4) noted for human monitoring during retrieval**

---

## Gate 3 — Launchability checks

All 8 angles checked:
- [x] **Concrete query strings:** Every angle has ≥5 query strings, all in runnable search form. No descriptions or questions in query fields. PASS for all 8.

- [x] **No placeholder vocabulary:** All query strings reviewed. No "TBD," "[fill in]," "to be determined," or unfilled markers found in any query string. PASS for all 8.

- [x] **Source type named:** Every angle has both academic source (PubMed, Semantic Scholar, arXiv as applicable) and practitioner source (named or explicitly deprioritized with reason). No blank or vague source fields. PASS for all 8.

**Gate 3 verdict: PASS**

---

## Gate 4 — Scoring prohibition

- [x] **No LLM self-evaluation ranking:** No angles were filtered or prioritized during generation. Angles were generated in structural slot order (A1→A2→A3→A4→A5→N1→D1→C1) per type allocations. No angle contains language like "this is the most promising angle" or "this is likely to be most useful." PASS.

- [x] **No implicit quality assessment:** Reviewed all angle records. No phrases found asserting relative quality or likely value of any angle. Coverage-gap notes in each angle record name factual gaps or overlap risks — these are structural observations, not quality rankings. PASS.

**Gate 4 verdict: PASS**

---

## Overall gate summary

```
GATE SUMMARY
============
Gate 1 — Completeness: PASS — All 5 completeness items passed
Gate 2 — Distinctness: PASS — All angle pairs pass Boolean-connective test;
  two partial-overlap flags noted (A2/A5, A3/A4) for human monitoring
Gate 3 — Launchability: PASS — All 8 angles have runnable queries, no placeholders,
  named source types
Gate 4 — Scoring prohibition: PASS — No self-evaluation or implicit quality claims

Overall verdict: PASS — DISPATCH READY

Flags requiring human judgment:
  1. A2/A5 partial overlap — ACT (A2) and mindfulness/acceptance (A5) share acceptance
     components; monitor for document overlap during retrieval; consider scope-splitting
     A2 to emphasize catastrophizing/CBT/fear-avoidance and A5 to emphasize contemplative
     practice if overlap is high
  2. A3/A4 partial overlap — exercise physiology (A3) and cognitive neuroscience (A4)
     intersect at "neural basis of RPE"; monitor for overlap; consider scoping A4 to
     computational/predictive processing models exclusively if overlap is high
  3. VOCABULARY SELF-REPORT FLAG active — all traditions LLM-enumerated; recommend
     survey-paper bootstrap before treating angle list as tradition-complete; specific risk:
     potential missing traditions in ethnographic/anthropological literature on extreme
     endurance practices, or occupational medicine/rehabilitation medicine literature
  4. Motivational science sub-tradition (self-determination theory, intrinsic motivation)
     not covered as a standalone angle — noted in A1 coverage-gap note; flag for human
     judgment on whether this warrants addition as A6 after initial retrieval
  5. Adversarial angle D1 must be dispatched in a separate research context — the
     [ADVERSARIAL-FLAGGED] label communicates this requirement but cannot enforce it at
     execution time
  6. Source B unavailable — expected coverage: MODERATE. If FULL coverage is required,
     run a survey-paper probe in a context with web access and add any new vocabulary
     traditions to the brief before dispatching angles
```

---

# PART 7 — SELF-CHECK (required per CLAUDE.md Rule 6 bookend)

**What is missing, incomplete, or questionable in this output:**

1. **Survey paper vocabulary absent.** Source B unavailable means no external anchor for vocabulary traditions. The five traditions enumerated are plausible and well-represented in LLM training data, but the list cannot be certified as complete. A survey-paper probe on "psychological strategies pain endurance sport review 2022 2023 2024 2025" would add or confirm traditions before dispatch.

2. **Motivational science not covered as standalone angle.** Self-determination theory, intrinsic vs. extrinsic motivation, and self-efficacy as moderators of pain tolerance in endurance events constitute a distinct research sub-tradition within exercise psychology. This is noted in A1's coverage-gap field but not addressed with a standalone angle. If this sub-tradition is important to the user's research goals, A6 should be added.

3. **Practitioner-only literature not targeted.** Angles A3 and A4 deprioritize practitioner sources; the practitioner literature on race strategy, compartmentalization techniques, and coach-taught mental skills for pain management is not specifically targeted in any angle. A "practitioner consensus" angle could add coverage of what is taught vs. what is empirically validated.

4. **Transfer validity gap not addressed as standalone angle.** Most research in A1–A5 uses laboratory pain paradigms (cold pressor, ischemic pain) or simulated exercise; whether findings transfer to actual ultra-endurance race conditions (multiple hours, accumulating fatigue, competitive stakes) is a known gap. An ecological validity angle could target field studies, race-based research, and naturalistic observation specifically.

5. **A2/A5 partial overlap requires monitoring.** As flagged in Gate 2 — if retrieval shows high document overlap between the ACT component of A2 and the acceptance component of A5, these may need scope revision. This cannot be resolved without running the retrieval.

**Next step proposed:** Dispatch angles 1–5 and C1 as one research batch; dispatch D1 in a separate context as labeled. Run N1 independently. After retrieval, re-assess whether to add an A6 (motivational science) angle based on what is missing from the initial returns.
