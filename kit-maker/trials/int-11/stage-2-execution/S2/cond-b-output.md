# angle-gen-kit output — cond-b
**Topic:** "I want to research nutrition strategies for marathon recovery."
**Run date:** 2026-07-07
**Condition:** B (angle-gen-kit deployed; Source B unavailable — subagent context)
**Model:** claude-sonnet-4-6

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: Nutritional interventions and dietary strategies that support physiological recovery
following marathon racing or equivalent prolonged endurance running

Anchor vocabulary:
  "nutrition strategies" — dietetics / sports nutrition tradition
  "marathon" — endurance sport tradition
  "recovery" — exercise physiology tradition

Candidate vocabulary traditions:
  1. Sports nutrition / dietetics — macronutrient timing, protein synthesis, glycogen
     resynthesis, hydration, carbohydrate loading, energy availability, fueling protocols,
     protein intake, leucine, whey, carbohydrate-protein co-ingestion
  2. Exercise physiology / biochemistry — muscle damage markers (CK, LDH), inflammatory
     cytokines (IL-6, TNF-α, CRP), oxidative stress, reactive oxygen species (ROS),
     cortisol, testosterone, metabolic recovery, DOMS, mitochondrial adaptation
  3. Clinical nutrition / medical nutrition therapy — anti-inflammatory diet, omega-3
     fatty acids, micronutrient supplementation (iron, zinc, magnesium, vitamin D),
     antioxidant nutrition, nutraceuticals, dietary patterns, Mediterranean diet
  4. Endurance sport coaching / performance science — periodization, return-to-training,
     athlete monitoring, recovery protocols, training load management, tapering nutrition

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate
  traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known
  anchor paper) is recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  (Prompt contains no comparison language or intervention-outcome structure; "what are
  nutrition strategies" is a space-mapping question, not a comparative effectiveness question)

Scope markers: None stated — inferred scope: evidence-applicable across adult recreational
  and competitive marathon runners; no restriction to elite athletes or clinical populations;
  no date range stated; post-race and acute recovery window is the primary context, but
  longitudinal recovery (days 2–7) is in scope given prompt framing

Known exclusions: None stated

Domain maturity estimate: MIXED
  Basis: Core macronutrient timing and glycogen resynthesis literature is academic and
  well-established (≥20 years RCT base). Newer areas (polyphenols, gut microbiome,
  immunonutrition for endurance athletes) are academic but less mature. Heavy practitioner
  production exists (coach/dietitian blogs, sport nutrition organization guidelines). Both
  academic and practitioner sources carry distinct signal for this topic.

Survey paper status: NOT SEARCHED — Source B unavailable in subagent context.
  Vocabulary-discovery pass recommended before accepting the angle list as complete.

Source B status: UNAVAILABLE — MODERATE — Source A + Source C together produced 4 distinct
  vocabulary traditions. Angle generation proceeds with VOCABULARY SELF-REPORT FLAG active.

Cross-disciplinary tradition (pre-commit for Slot C1):
  Target tradition: Immunonutrition / clinical immunology
  Selection basis: Same real-world problem from a different disciplinary perspective —
  marathon running causes transient immunosuppression (the "open window" effect); nutrition
  is a primary modulator of this immune perturbation; the immunonutrition literature
  addresses nutritional support for immune function under physiological stress, using
  vocabulary (immunoglobulins, NK cell activity, upper respiratory tract infection incidence,
  secretory IgA) absent from the sports nutrition and exercise physiology traditions above
```

**Intake gate check (all four conditions):**
- [x] Topic field populated
- [x] ≥2 vocabulary traditions (4 identified)
- [x] Question type classified (EXPLORATORY)
- [x] Cross-disciplinary tradition pre-committed (immunonutrition — target tradition named, selection basis stated)

Gate: PASS. Proceeding to angle-generation.md.

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: Sports nutrition / dietetics
  Representative terms: macronutrient timing, protein intake, glycogen resynthesis,
    carbohydrate-protein co-ingestion, leucine, hydration, energy availability
  Planned angle slot: Confirmatory A1
  Gap flag: NO

Tradition 2: Exercise physiology / biochemistry
  Representative terms: muscle damage markers (CK, LDH), inflammatory cytokines
    (IL-6, CRP), oxidative stress, ROS, cortisol, DOMS, metabolic recovery
  Planned angle slot: Confirmatory A2
  Gap flag: NO

Tradition 3: Clinical nutrition / medical nutrition therapy
  Representative terms: anti-inflammatory diet, omega-3 fatty acids, micronutrient
    supplementation, iron, zinc, magnesium, vitamin D, antioxidant nutrition,
    Mediterranean diet
  Planned angle slot: Confirmatory A3
  Gap flag: NO

Tradition 4: Endurance sport coaching / performance science
  Representative terms: periodization, return-to-training, recovery protocols,
    training load management, athlete monitoring, tapering nutrition
  Planned angle slot: Confirmatory A4
  Gap flag: NO

Traditions NOT yet represented in the planned list:
  All four traditions from intake brief have at least one angle slot.
  Note: Phytochemistry / polyphenol research is an emerging sub-area of sports nutrition
  that uses sufficiently distinct vocabulary (quercetin, tart cherry, anthocyanins,
  flavonoids, plant-derived compounds) to warrant a separate slot; added as A5.
  Note: Gut microbiome / gastrointestinal nutrition is a growing research area in
  endurance sports with distinct vocabulary (dysbiosis, intestinal permeability,
  microbiome composition, probiotic supplementation, leaky gut) not captured by
  traditions 1-4; added as A6.

Cross-disciplinary slot (required):
  Target tradition: Immunonutrition / clinical immunology
  Basis for selection: Same real-world problem from a non-sport perspective — the immune
  perturbation after marathon running is the mechanism linking nutrition to infection risk
  during recovery. The immunonutrition literature uses vocabulary (secretory IgA, NK cell
  activity, upper respiratory infection incidence, neutrophil function, mucosal immunity)
  that does not appear in traditions 1-4. Selection heuristic applied: "same real-world
  problem from human/biological perspective." Coverage novelty is high — this tradition
  will not be enumerated by the intake brief's main vocabularies.
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Sports nutrition / dietetics): assigned
Slot A2 (Confirmatory — Exercise physiology / biochemistry): assigned
Slot A3 (Confirmatory — Clinical nutrition / medical nutrition therapy): assigned
Slot A4 (Confirmatory — Endurance coaching / performance science): assigned
Slot A5 (Confirmatory — Phytochemistry / polyphenol research): assigned
  Coverage-gap note: polyphenol vocabulary is sufficiently distinct from A1–A4 to
  warrant a separate slot; confirmed NOT a synonym of A3 (A3 = micronutrients/omega-3;
  A5 = plant phenolics, flavonoids, anthocyanins — different chemical class, different
  literature base)
Slot A6 (Confirmatory — Gut microbiome / gastrointestinal nutrition): assigned
  Coverage-gap note: intestinal permeability and microbiome vocabulary absent from all
  above slots; distinct literature base (Nutrients, Frontiers in Microbiology vs.
  Journal of Applied Physiology / International Journal of Sports Nutrition)
Slot N1 (Null-hypothesis): assigned
  Frame: What evidence would show that nutritional interventions do NOT improve marathon
  recovery outcomes, or do NOT generalize beyond highly controlled lab conditions?
Slot D1 (Adversarial): assigned
  Starting vocabulary: musculoskeletal rehabilitation, tissue repair, wound healing
  NOT FROM: sports nutrition, marathon, glycogen, macronutrient, protein timing, fueling
Slot C1 (Cross-disciplinary — Immunonutrition / clinical immunology): assigned

Total angles: 9 (within 5–12 standard range; justification for upper end: topic spans
4 distinct vocabulary traditions at intake + 2 emerging sub-traditions; total 6 traditions
requiring slots is documented in coverage map)
```

---

## ANGLE LIST

---

### ANGLE 1: Macronutrient timing and quantity for post-marathon glycogen and protein restoration
```
Vocabulary tradition: Sports nutrition / dietetics
Angle type: Confirmatory (A1)
Predicted research character: empirical
What to extract: Optimal carbohydrate and protein intake windows after marathon racing;
  timing recommendations (immediate, 30-min, 2-hr post-race); glycogen resynthesis rates
  under different dietary conditions; protein dose-response for muscle protein synthesis
  after prolonged running; carbohydrate-protein co-ingestion effects; evidence for or
  against a narrow "anabolic window"

Source type (academic): PubMed / Semantic Scholar (target: International Journal of
  Sport Nutrition and Exercise Metabolism, Journal of the International Society of Sports
  Nutrition, European Journal of Sport Science)
Source type (practitioner): Position stands / consensus statements from ISSN, IOC, and
  ACSM (sport nutrition governing bodies); practitioner guidance is distinct from academic
  RCTs here — organizations produce summary recommendations that encode consensus not
  fully represented in individual studies

Queries:
  Q1: post-marathon nutrition recovery protein carbohydrate timing systematic review
  Q2: glycogen resynthesis marathon endurance running dietary intervention randomized
  Q3: carbohydrate protein co-ingestion muscle recovery prolonged exercise 2020 2024
  Q4: optimal protein intake marathon runners acute recovery leucine muscle protein synthesis

Coverage-gap note: Energy availability considerations for runners in energy deficit
  (common in non-elite marathon populations) are not addressed by these queries; may
  require a separate angle targeting low energy availability / relative energy deficiency
  in sport (RED-S) if scope is expanded to include at-risk populations.
```

---

### ANGLE 2: Biochemical markers of muscle damage and inflammation — nutritional modulation
```
Vocabulary tradition: Exercise physiology / biochemistry
Angle type: Confirmatory (A2)
Predicted research character: empirical
What to extract: Studies measuring CK, LDH, IL-6, CRP, myoglobin, or DOMS scores as
  outcomes of nutritional interventions in marathon runners; effect sizes where reported;
  dose-response relationships; timing of nutritional intervention relative to damage
  biomarker peak; hormonal markers (cortisol, testosterone ratio) under different
  nutritional conditions

Source type (academic): PubMed (target: Journal of Applied Physiology, Medicine and
  Science in Sports and Exercise, Scandinavian Journal of Medicine and Science in Sports)
Source type (practitioner): deprioritized for this angle — biochemical marker research
  is primarily academic/laboratory; practitioner resources are unlikely to contain
  independent signal on this facet

Queries:
  Q1: muscle damage biomarkers CK LDH marathon nutrition intervention randomized controlled
  Q2: inflammatory cytokines IL-6 CRP endurance running dietary modulation 2019 2024
  Q3: oxidative stress post-marathon antioxidant supplementation randomized trial
  Q4: DOMS delayed onset muscle soreness marathon nutritional treatment effect size

Coverage-gap note: The interaction between individual antioxidant supplementation and
  endogenous adaptation (i.e., high-dose antioxidants potentially blunting training
  adaptation) is a live controversy not fully addressed by these queries. This is a
  distinct sub-question better served by A3 or the null-hypothesis angle.
```

---

### ANGLE 3: Micronutrient and fatty acid supplementation in post-marathon clinical nutrition
```
Vocabulary tradition: Clinical nutrition / medical nutrition therapy
Angle type: Confirmatory (A3)
Predicted research character: empirical
What to extract: RCT or observational data on omega-3 fatty acids (EPA, DHA),
  iron, zinc, magnesium, vitamin D, vitamin C, vitamin E supplementation in marathon
  or endurance runners during recovery; deficiency prevalence in this population;
  anti-inflammatory dietary pattern effects (Mediterranean diet, plant-based diet)
  on recovery markers; dose recommendations where available

Source type (academic): PubMed / Semantic Scholar (target: Nutrients, American Journal
  of Clinical Nutrition, British Journal of Nutrition)
Source type (practitioner): REQUIRED — dietitian-authored clinical practice guidelines
  and sport dietetics organization statements (e.g., Sports Dietitians Australia, British
  Dietetic Association); these encode practitioner consensus not fully captured in RCT
  literature

Queries:
  Q1: omega-3 fatty acid EPA DHA marathon endurance athlete recovery supplementation
  Q2: micronutrient deficiency iron zinc magnesium endurance runners recovery outcome
  Q3: vitamin D status marathon runners recovery performance supplementation
  Q4: anti-inflammatory dietary pattern Mediterranean diet endurance athlete recovery

Coverage-gap note: The risk of over-supplementation (particularly vitamin E, vitamin C
  blunting adaptation) is a contested area not targeted by these confirmatory queries;
  the adversarial angle (D1) and null-hypothesis angle (N1) address this facet.
```

---

### ANGLE 4: Recovery protocols and return-to-training nutrition in endurance sport practice
```
Vocabulary tradition: Endurance sport coaching / performance science
Angle type: Confirmatory (A4)
Predicted research character: consensus
What to extract: Practitioner-documented recovery nutrition protocols; timing of
  return-to-training nutrition strategies after marathon; periodization of nutrition
  during recovery week; athlete monitoring frameworks that include nutritional
  status; evidence from applied sport science settings (e.g., national team practice,
  elite marathon coaching)

Source type (academic): Semantic Scholar / Google Scholar (target: International Journal
  of Sports Physiology and Performance, Journal of Strength and Conditioning Research,
  Sport Science exchange publications)
Source type (practitioner): REQUIRED — coaching literature, sport science blogs from
  credentialed practitioners (e.g., Gatorade Sports Science Institute, Asker Jeukendrup's
  resources, peak performance publications); athlete-facing protocols contain operational
  knowledge not published in journals

Queries:
  Q1: marathon recovery week nutrition protocol return to training applied sport science
  Q2: athlete monitoring nutritional status post-race endurance performance
  Q3: periodization nutrition marathon training recovery phase elite runners

Coverage-gap note: Amateur/recreational marathon runner data is largely absent from
  this tradition, which skews heavily toward elite athlete observations. Generalizability
  to recreational populations is not addressed by these queries.
```

---

### ANGLE 5: Polyphenols and phytonutrient compounds in exercise-induced muscle damage recovery
```
Vocabulary tradition: Phytochemistry / polyphenol research (sports application)
Angle type: Confirmatory (A5)
Predicted research character: empirical
What to extract: RCT evidence for tart cherry juice, quercetin, curcumin, resveratrol,
  and berry anthocyanins on post-marathon or post-endurance-exercise recovery outcomes;
  effect sizes on muscle soreness, inflammatory markers, performance recovery;
  proposed mechanisms (NF-κB pathway inhibition, COX-2 inhibition); studies using
  marathon race as the exercise stressor specifically

Source type (academic): PubMed / Semantic Scholar (target: Phytotherapy Research,
  Nutrients, Journal of the International Society of Sports Nutrition, Free Radical
  Biology and Medicine)
Source type (practitioner): REQUIRED — tart cherry/polyphenol topic has substantial
  practitioner and commercial interest; practitioner blogs, sports science websites
  often have applied synthesis that precedes or parallels academic publication

Queries:
  Q1: tart cherry juice marathon recovery muscle soreness randomized controlled
  Q2: polyphenol phytonutrient exercise-induced muscle damage recovery meta-analysis
  Q3: quercetin curcumin anthocyanin endurance athlete recovery oxidative stress
  Q4: plant-derived anti-inflammatory compound marathon muscle function recovery

Coverage-gap note: Dosing standardization across polyphenol studies is poor; extracting
  actionable dose recommendations from these queries will be difficult without a
  meta-analysis or systematic review being the primary result.
```

---

### ANGLE 6: Gut microbiome and intestinal permeability — nutritional strategies in post-marathon recovery
```
Vocabulary tradition: Gut microbiome / gastrointestinal nutrition
Angle type: Confirmatory (A6)
Predicted research character: empirical (emerging; expect mixed results and small samples)
What to extract: Evidence for probiotic supplementation, prebiotic dietary strategies,
  and dietary fibre in supporting gut microbiome stability after marathon running;
  intestinal permeability / "leaky gut" data in marathon runners; nutritional strategies
  to reduce exercise-induced gastrointestinal symptoms during recovery; gut-brain axis
  considerations in recovery fatigue

Source type (academic): PubMed / Semantic Scholar (target: Gut, Nutrients, Journal of
  Applied Physiology, Frontiers in Physiology)
Source type (practitioner): REQUIRED — gut health and sports nutrition is an active
  practitioner topic; practitioner publications from sports dietitians often address
  GI symptoms in endurance athletes before the academic literature consolidates

Queries:
  Q1: gut microbiome marathon runners nutritional intervention probiotic recovery
  Q2: intestinal permeability endurance exercise nutrition strategy post-race
  Q3: probiotic supplementation marathon athletes gastrointestinal symptoms recovery
  Q4: dietary fibre gut health endurance athlete recovery training adaptation

Coverage-gap note: This is an emerging field; expect limited RCTs specifically on
  marathon recovery; the angle's value may be primarily in documenting the evidence gap
  and surfacing mechanistic hypotheses rather than practice-ready recommendations.
```

---

### ANGLE 7 [NULL-HYPOTHESIS]: Evidence that nutritional interventions do NOT improve marathon recovery or do not generalize beyond laboratory conditions
```
Vocabulary tradition: Sports nutrition / dietetics (disconfirming variant)
Angle type: Null-hypothesis (N1)
Predicted research character: empirical
What to extract: RCTs showing no significant effect of specific nutritional interventions
  on marathon recovery outcomes; null results, failed replications; scope conditions
  under which positive findings do not hold (e.g., elite vs. recreational, lab vs. field
  conditions); evidence that antioxidant supplementation blunts training adaptation and
  therefore harms recovery at the physiological level; the "anabolic window" controversy
  (evidence that timing urgency is overstated); small effect sizes in well-powered trials

Source type (academic): PubMed (target: same journals as A1–A3; specifically look for
  null-result publications and meta-analyses reporting heterogeneity or lack of effect)
Source type (practitioner): REQUIRED — sport nutrition myths and misconceptions are
  a documented practitioner topic; contrarian practitioners who challenge popular claims
  are most likely to surface in non-academic channels

Queries:
  Q1: nutrition recovery marathon null result no benefit randomized controlled trial
  Q2: post-exercise nutrition timing window overrated evidence against anabolic window
  Q3: antioxidant supplementation blunts adaptation marathon training negative effect
  Q4: protein timing urgency myth endurance athlete recovery evidence limited effect

Coverage-gap note: Publication bias against null results is well-documented; these
  queries will underrepresent null findings relative to their true prevalence. Explicitly
  search for meta-analyses that report heterogeneity and scope conditions, not just
  average effect sizes.
```

---

### ANGLE 8 [ADVERSARIAL-FLAGGED]: Nutritional support for exercise-induced tissue repair — from musculoskeletal rehabilitation literature
```
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Vocabulary tradition: Musculoskeletal rehabilitation / tissue repair medicine
Angle type: Adversarial (D1)
Predicted research character: empirical
Generating from: musculoskeletal rehabilitation, tissue repair, wound healing vocabulary
Excluding from generation prompt: "sports nutrition," "marathon," "glycogen," "macronutrient,"
  "protein timing," "fueling," "endurance athlete," "race recovery"

What to extract: Evidence from rehabilitation medicine and orthopedic/physical therapy
  literature on nutritional support for skeletal muscle repair after exercise-induced
  damage; collagen synthesis nutrition (vitamin C, glycine, proline, gelatin / hydrolyzed
  collagen); tendon repair nutrition; connective tissue healing dietary support;
  findings that may contradict or complicate sports nutrition recommendations on the
  same topic

Source type (academic): PubMed (target: American Journal of Sports Medicine, British
  Journal of Sports Medicine, Osteoporosis International, connective tissue and
  rehabilitation journals — NOT sports nutrition journals for this angle)
Source type (practitioner): REQUIRED — physical therapy and rehabilitation practitioners
  are the primary users of this literature; their practice guidelines may differ
  substantially from sport nutrition guidance

Queries:
  Q1: collagen synthesis dietary support exercise-induced skeletal muscle repair
  Q2: nutritional support connective tissue repair tendon ligament physical therapy
  Q3: gelatin vitamin C hydrolyzed collagen musculoskeletal recovery randomized trial
  Q4: dietary protein wound healing tissue repair rehabilitation evidence review

Coverage-gap note: The adversarial value of this angle lies in its use of a different
  evidence base (rehabilitation medicine) that may reach different conclusions than
  sports nutrition RCTs. Contradictions between findings from these two literatures
  should be explicitly noted when this angle is executed.
```

---

### ANGLE 9 [CROSS-DISCIPLINARY]: Immunonutrition — nutritional modulation of post-marathon immune perturbation
```
Vocabulary tradition: Immunonutrition / clinical immunology (NOT in intake brief)
Angle type: Cross-disciplinary (C1)
Predicted research character: empirical
Generating from: immunonutrition vocabulary — NOT from user's apparent sports nutrition framing
What to extract: Evidence on nutritional interventions that modulate the post-marathon
  "open window" immune suppression (transient immunosuppression 3–72 hr post-marathon);
  secretory IgA response to nutritional interventions; NK cell activity and neutrophil
  function under different nutritional conditions; probiotic and prebiotic effects on
  mucosal immunity in endurance athletes; upper respiratory infection (URI) incidence
  as a recovery outcome measure; nutritional support during the immune perturbation
  window as a recovery strategy

Source type (academic): PubMed (target: Exercise Immunology Review, British Journal of
  Nutrition, Nutrients, Journal of Applied Physiology, Clinical Nutrition — NOT primarily
  sports performance journals)
Source type (practitioner): OPTIONAL — immunonutrition is primarily an academic
  specialization; practitioner translation is limited but may appear in clinical sport
  medicine practice guidelines

Queries:
  Q1: post-marathon immunosuppression open window nutrition intervention secretory IgA
  Q2: immunonutrition endurance athletes upper respiratory infection prevention dietary
  Q3: carbohydrate intake immune function marathon runners NK cell neutrophil activity
  Q4: probiotic mucosal immunity endurance exercise post-race recovery randomized

Coverage-gap note: The immunonutrition literature may use "exercise immunology" as its
  primary vocabulary cluster, which overlaps partially with exercise physiology (A2).
  The distinction is that A2 targets inflammatory markers as performance/recovery outcomes;
  C1 targets immune function parameters (IgA, NK cells, infection incidence) as outcomes.
  Boolean-connective test: A2 query terms (CK, LDH, IL-6, DOMS) would NOT co-retrieve
  the C1 target literature (secretory IgA, NK cell, URI incidence). PASS.
```

---

## QUALITY GATE SUMMARY

```
GATE SUMMARY
============

Gate 1 — Completeness:
  [x] Null-hypothesis angle present: PASS
      Angle 7 explicitly framed as disconfirming search; queries contain "null result,"
      "no benefit," "evidence against," "negative effect," "myth." Confirmed present and
      structurally distinct from hedged confirmatory angles.
  [x] Adversarial angle present: PASS
      Angle 8 labeled [ADVERSARIAL-FLAGGED] with dispatch note. Label present.
  [x] Cross-disciplinary angle present: PASS
      Angle 9 targets immunonutrition / clinical immunology. Checked against intake brief
      traditions (sports nutrition, exercise physiology, clinical nutrition, endurance
      coaching, polyphenols, gut microbiome) — immunonutrition vocabulary (secretory IgA,
      NK cell activity, open window, URI incidence) is NOT in any intake brief tradition.
      CONFIRMED cross-disciplinary.
  [x] Source-type coverage: PASS
      Domain maturity = MIXED. Practitioner sources assigned for A1 (position stands),
      A3 (dietitian guidelines), A4 (coaching literature), A5 (sport science blogs),
      A6 (sport dietitian publications), N1 (contrarian practitioners). Multiple angles
      carry REQUIRED practitioner source designations.
  [x] Vocabulary-tradition map populated: PASS
      Coverage map contains 6 distinct tradition names from intake brief plus 1
      cross-disciplinary tradition. All distinct.

Gate 1 verdict: PASS

---

Gate 2 — Distinctness:
  Boolean-connective test applied to candidate synonym pairs:

  A1 (macronutrient timing) vs A3 (micronutrient/omega-3):
    A1 most distinctive term: "glycogen resynthesis" / "carbohydrate-protein co-ingestion"
    A3 most distinctive term: "omega-3" / "iron" / "vitamin D"
    These terms do NOT appear in each other's query sets. OR retrieval would NOT return
    substantially the same documents (different chemical classes, different measurement
    outcomes). PASS.

  A2 (muscle damage biochemistry) vs A5 (polyphenols):
    A2 most distinctive: "CK LDH inflammatory cytokines"
    A5 most distinctive: "tart cherry juice quercetin anthocyanin"
    No overlap in distinctive terms. A2 targets outcome measurement; A5 targets a specific
    intervention class. OR retrieval would not return same documents. PASS.

  A3 (clinical nutrition/supplements) vs A5 (polyphenols):
    A3 most distinctive: "omega-3 EPA DHA" / "micronutrient iron zinc magnesium"
    A5 most distinctive: "tart cherry" / "quercetin" / "anthocyanin" / "polyphenol"
    Different chemical classes. A3 = fatty acids + minerals; A5 = plant phenolics.
    These are indexed in different subject headings. PASS.

  A6 (gut microbiome) vs A4 (coaching/performance):
    A6 most distinctive: "gut microbiome" / "intestinal permeability" / "probiotic"
    A4 most distinctive: "periodization" / "return-to-training" / "athlete monitoring"
    No overlap. PASS.

  A7 (null-hypothesis) vs A1 (confirmatory macronutrient):
    Rule applies: null-hypothesis angle is explicitly exempted from vocabulary-tradition
    distinctness check (it is the disconfirming variant). Also: A7 queries contain
    "null result," "evidence against," "myth" — vocabulary absent from A1 queries.
    PASS by exemption + vocabulary distinction.

  A8 (adversarial / rehabilitation) vs all confirmatory:
    A8 generating vocabulary explicitly excludes all confirmatory vocabulary (stated in
    angle record). Distinctive terms: "collagen synthesis," "connective tissue repair,"
    "gelatin," "wound healing" — absent from A1–A6 queries. PASS.

  A9 (cross-disciplinary immunonutrition) vs A2 (exercise physiology):
    A9 most distinctive: "secretory IgA" / "NK cell" / "URI incidence" / "open window"
    A2 most distinctive: "CK" / "LDH" / "DOMS" / "cortisol"
    No overlap. PASS. (Note documented inline in A9 coverage-gap note.)

  Vocabulary-tradition distinctness check:
    A1 — Sports nutrition / dietetics
    A2 — Exercise physiology / biochemistry
    A3 — Clinical nutrition / medical nutrition therapy
    A4 — Endurance coaching / performance science
    A5 — Phytochemistry / polyphenol research
    A6 — Gut microbiome / gastrointestinal nutrition
    A7 — Sports nutrition / dietetics (disconfirming variant) — EXEMPTED (null-hypothesis)
    A8 — Musculoskeletal rehabilitation / tissue repair — ADVERSARIAL (different tradition required)
    A9 — Immunonutrition / clinical immunology — CROSS-DISCIPLINARY (different tradition required)
    All traditions distinct. No two non-exempt confirmatory angles share a label. PASS.

Gate 2 verdict: PASS

---

Gate 3 — Launchability:
  All 9 angles checked:
  [x] A1: Has concrete queries, no TBDs, sources named. PASS.
  [x] A2: Has concrete queries, no TBDs, sources named. PASS.
  [x] A3: Has concrete queries, no TBDs, sources named. PASS.
  [x] A4: Has concrete queries, no TBDs, sources named. PASS.
  [x] A5: Has concrete queries, no TBDs, sources named. PASS.
  [x] A6: Has concrete queries, no TBDs, sources named. PASS.
  [x] A7: Has concrete queries, no TBDs, sources named. PASS.
  [x] A8: Has concrete queries, no TBDs, sources named. PASS.
  [x] A9: Has concrete queries, no TBDs, sources named. PASS.
  Source type fields: all angles specify at least one named academic platform (PubMed,
  Semantic Scholar) and specify practitioner source or state reason for deprioritization.
  No angle uses "relevant sources" or vague platform language.

Gate 3 verdict: PASS

---

Gate 4 — Scoring prohibition:
  No angles were ranked by "most promising," "most relevant," or "most novel."
  Selection of A5 and A6 as additional angles was based on structural criterion:
  sufficiently distinct vocabulary tradition absent from A1–A4 (observable in coverage map).
  No implicit quality assessments appear in angle records ("this angle is likely to be
  most useful" — absent from all records).
  Angle count justified by structural criterion (6 distinct vocabulary traditions requiring
  slots), not by LLM assessment of importance.

Gate 4 verdict: PASS

---

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG (active throughout): All vocabulary traditions were
     enumerated by LLM only. Source B (survey-paper probe) was not run. A survey-paper
     query on "marathon recovery nutrition systematic review 2024 2025" may surface
     additional traditions (e.g., sleep/recovery science intersection, biomechanical
     recovery, psychology of recovery — fatigue perception, motivation) not captured
     here. Recommend running Source B before treating this list as exhaustive.

  2. The gut microbiome angle (A6) predicts small-sample emerging literature. If the
     corpus is <20 papers specifically on marathon recovery, the Boolean-connective
     test limitation (Weakness 4) applies. Human judgment required before merging A6
     with other angles based on retrieval overlap.

  3. The polyphenol angle (A5) predicts dosing heterogeneity will limit actionability.
     If the user's goal is practice-ready recommendations (not evidence mapping),
     this angle may require a follow-up systematic review probe to be useful.

  4. Adversarial angle (A8) structural separation: the ADVERSARIAL-FLAGGED label
     communicates the requirement; enforcement at execution time depends on the
     downstream research agent honoring the label. This kit cannot enforce this.
     (Weakness 6 applies.)
```

---

## STRUCTURAL NOTES

**Source B unavailability effect:** This run proceeded at MODERATE severity per intake.md Step 5. Four distinct vocabulary traditions were identified via LLM enumeration (Source A + Source C). Two additional sub-traditions (polyphenols, gut microbiome) were added via coverage-gap conditioning during angle generation. Cross-tradition conditioning value is expected to be moderate on this topic — marathon nutrition is well-represented in LLM training data, so the FM4 condition from Weakness 7 partially applies. However, marathon nutrition spans a more specific intersection (endurance sport + clinical nutrition + biochemistry) than the LLM/AI research domain where FM4 was observed; moderate cross-tradition differential is plausible.

**Expected angle coverage:** MODERATE per deployment constraint (Source B unavailable). The immunonutrition cross-disciplinary angle is the one most likely to add genuine coverage beyond what an unconditioned LLM would enumerate — it was selected precisely because the "open window" framing is less salient than macronutrient timing in mainstream sport nutrition discourse.

**What is missing or questionable:**
  - The sleep science intersection with recovery nutrition (tryptophan/serotonin/melatonin
    pathways; sleep quality as a recovery outcome modulated by nutrition) is absent. This
    may represent a genuine gap not captured by the 6 traditions above. A Source B probe
    might surface it.
  - Psychological recovery dimension (fatigue perception, mood, cognitive recovery
    post-marathon) with a nutritional angle (e.g., carbohydrate and mood, branched-chain
    amino acids and central fatigue hypothesis) is present in A2 only implicitly.
  - The red blood cell / hemoglobin / oxygen carrying capacity nutrition angle (iron
    absorption, sports anemia) was absorbed into A3 (micronutrient supplementation). If
    iron status in endurance athletes is a distinct research priority for the user, a
    dedicated angle may be warranted.
