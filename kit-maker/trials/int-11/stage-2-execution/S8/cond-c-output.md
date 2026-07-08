# angle-gen-kit Output — INT-11 Stage 2 / S8 / Condition C
**Topic:** Competition pacing strategies in long-distance running
**Source constraint:** LLM enumeration only (Source A + Source C) — no web search available
**Model:** claude-sonnet-4-6

---

## Multi-task enumeration (pre-execution)

Per CLAUDE.md multi-task tracking: enumerate all tasks before starting any.

1. Intake brief (intake.md Steps 1–6)
2. Coverage map (angle-generation.md Step 0)
3. Type allocations (angle-generation.md Step 1)
4. Angle generation with coverage-gap conditioning (Steps 2–4)
5. Quality gates (angle-quality.md Gates 1–4)
6. Gate summary

---

## INTAKE BRIEF
============
**Topic:** Pacing strategies used in competitive long-distance running — what strategies exist, how they work, what moderates their effectiveness, and what the evidence shows about their outcomes.

**Anchor vocabulary:** "competition pacing" (sports science tradition), "long-distance running" (athletics / exercise physiology tradition)

**Candidate vocabulary traditions:**

1. **Exercise physiology / metabolic sports science** — pacing, even pacing, positive split, negative split, variable pacing, energy expenditure, VO2max, lactate threshold, running economy, critical speed, maximal aerobic speed (MAS), glycogen depletion, metabolic substrate utilization

2. **Sports psychology / perceptual regulation** — rating of perceived exertion (RPE), Borg scale, central governor model, teleoanticipation, anticipatory regulation, effort perception, attentional focus, psychological pacing strategies, mental toughness in endurance sports

3. **Competitive athletics / coaching practice** — race tactics, tactical pacing, kick, front-running, rabbit (pacemaker), negative split execution, even pace racing, elite marathon pacing, training periodization for competition, race execution

4. **Environmental and biomechanical physiology** — thermoregulation, heat stress pacing adjustments, altitude effects on pacing, running kinematics, stride frequency, cadence regulation, gait mechanics under fatigue

NOTE: Vocabulary traditions listed here are LLM self-reported (Source A + C only). The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

**Question type:** EXPLORATORY
(No explicit comparison language or intervention-outcome structure in the prompt. Default: EXPLORATORY. PCC frame: Population = competitive long-distance runners; Concept = pacing strategies; Context = competition settings.)

**Scope markers:** None stated — inferred scope: competitive race execution contexts (not training), covering multiple long-distance events (800m through marathon and beyond), not restricted to elite runners unless evidence base requires it.

**Known exclusions:** None stated.

**Domain maturity estimate:** Mixed (academic-heavy with substantial practitioner production)
Basis: "competition pacing" and "long-distance running" are academic sports science terms. However, a large coaching literature exists with practitioner-authored pacing guidance that uses different vocabulary. Both academic and practitioner sources are expected to yield substantive material.

**Survey paper status:** UNAVAILABLE — Source B not available in this execution context.
No survey paper found — vocabulary-discovery pass recommended before finalizing angle list.

**Source B status:** UNAVAILABLE — MODERATE (Source A + C produced 4 distinct vocabulary traditions). Proceeding with VOCABULARY SELF-REPORT FLAG applied throughout.

**Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):**
Target tradition: Optimal control / operations research
Selection basis: Same real-world problem from a different analytical framework — pacing is a resource-allocation problem over time under uncertainty about course conditions and competitor behavior. This tradition treats pacing as a dynamic optimization problem (Bellman equations, state-space formulations, utility functions under resource constraints) using vocabulary completely absent from the sports science bootstrap. This is the tradition least likely to have been enumerated at intake.

---

**Intake gate check:**
- [ x ] Topic field populated
- [ x ] Candidate vocabulary traditions: 4 entries (≥2 required)
- [ x ] Question type classified: EXPLORATORY
- [ x ] Cross-disciplinary tradition pre-committed: Optimal control / operations research

All four gate conditions TRUE. Proceeding to angle-generation.md.

---

## COVERAGE MAP
============

**Tradition 1: Exercise physiology / metabolic sports science**
Representative terms: pacing, energy expenditure, VO2max, lactate threshold, running economy, glycogen depletion, critical speed
Planned angle slot: Confirmatory A1
Gap flag: No

**Tradition 2: Sports psychology / perceptual regulation**
Representative terms: RPE, central governor model, teleoanticipation, effort perception, Borg scale, attentional focus
Planned angle slot: Confirmatory A2
Gap flag: No

**Tradition 3: Competitive athletics / coaching practice**
Representative terms: race tactics, negative split, front-running, rabbit, race execution, elite marathon pacing, tactical pacing
Planned angle slot: Confirmatory A3
Gap flag: No

**Tradition 4: Environmental and biomechanical physiology**
Representative terms: thermoregulation, heat stress, altitude effects, running kinematics, stride frequency, gait mechanics, cadence
Planned angle slot: Confirmatory A4 (environmental sub-tradition) + Confirmatory A5 (biomechanical sub-tradition)
Gap flag: No

Traditions NOT yet represented in the planned list:
All 4 traditions from intake brief have at least one planned angle slot.

**Cross-disciplinary slot (required):**
Target tradition: Optimal control / operations research
Basis for selection: "What field uses similar mathematical structures for this phenomenon?" — control theory and dynamic programming model time-evolving resource allocation under constraints, directly applicable to the pacing problem. Not represented in intake brief traditions. Not likely enumerated by LLM vocabulary bootstrap without explicit cross-disciplinary prompting.

---

## TYPE ALLOCATIONS
================

Slot A1 (Confirmatory — Exercise physiology / metabolic sports science): Exercise physiology
Slot A2 (Confirmatory — Sports psychology / perceptual regulation): Sports psychology
Slot A3 (Confirmatory — Competitive athletics / coaching practice): Coaching / race tactics
Slot A4 (Confirmatory — Environmental physiology): Environmental moderators
Slot A5 (Confirmatory — Biomechanics / gait): Stride and gait mechanics
Slot N1 (Null-hypothesis): assigned — disconfirming search from exercise physiology tradition
Slot D1 (Adversarial — ADVERSARIAL-FLAGGED): Starting vocabulary — competitive behavior / behavioral economics. NOT FROM: exercise physiology, perceptual regulation, coaching tactics, environmental physiology, biomechanics
Slot C1 (Cross-disciplinary — Optimal control / operations research): Optimal control tradition from coverage map

Total: 8 angles. Within 5–12 standard range.

---

## ANGLE LIST
============

### ANGLE 1: Physiological mechanisms governing pacing regulation
===========
**Vocabulary tradition:** Exercise physiology / metabolic sports science
**Angle type:** Confirmatory
**Predicted research character:** empirical — expect peer-reviewed studies with measured effect sizes, metabolic markers, and performance outcomes
**What to extract:** Physiological variables that predict and explain pacing choice (VO2max, lactate threshold, glycogen stores, running economy), evidence on metabolic cost of different pacing profiles, scope conditions on when physiological variables dominate pacing outcome

**Source type (academic):** PubMed; Semantic Scholar (exercise physiology and sports medicine journals — Journal of Applied Physiology, Medicine and Science in Sports and Exercise, European Journal of Applied Physiology)
**Source type (practitioner):** Sports performance coaching manuals, World Athletics technical guidelines

**Queries:**
Q1: pacing strategies long-distance running exercise physiology metabolic mechanisms review
Q2: energy expenditure regulation pacing running VO2max lactate threshold empirical
Q3: running economy pacing strategy performance marathon physiological determinants
Q4: glycogen depletion pacing collapse distance running fatigue mechanisms
Q5: critical speed maximal aerobic speed pacing long-distance running race performance

**Coverage-gap note:** These queries target the physiological mechanism literature. The question of HOW athletes translate physiological limits into real-time pacing decisions (the cognitive/motor implementation step) is not addressed here — that belongs to A2 and A5.

---

### ANGLE 2: Perceptual and cognitive regulation of pacing (RPE, central governor)
===========
**Vocabulary tradition:** Sports psychology / perceptual regulation
**Angle type:** Confirmatory
**Predicted research character:** empirical — expect controlled studies on RPE during paced runs, central governor model tests, and teleoanticipation paradigms; some theoretical/review papers
**What to extract:** Evidence for RPE-based pacing models, central governor evidence base, teleoanticipation findings, conditions under which perception-based cues dominate over physiological signals in pacing decisions

**Source type (academic):** PubMed; Semantic Scholar (Journal of Sport and Exercise Psychology, Psychophysiology, Frontiers in Psychology — exercise section)
**Source type (practitioner):** Sport psychology practitioner resources, coach education materials on mental pacing strategies

**Queries:**
Q1: rating perceived exertion pacing strategies long-distance running evidence
Q2: central governor model pacing endurance exercise empirical review
Q3: teleoanticipation anticipatory regulation pacing running performance experimental
Q4: psychological pacing strategies elite runners race execution perception fatigue

**Coverage-gap note:** The relationship between explicit RPE instruction and actual physiological outputs is addressed; how RPE and physiological signals interact under different race scenarios (e.g., novel vs. familiar courses) is a gap not fully addressed by these queries.

---

### ANGLE 3: Race tactics and split strategies in competitive distance running
===========
**Vocabulary tradition:** Competitive athletics / coaching practice
**Angle type:** Confirmatory
**Predicted research character:** consensus + empirical — expect practitioner frameworks and expert-authored race strategy guides alongside empirical analyses of split data from elite competitions
**What to extract:** Evidence on which split strategies (even, negative, positive) are most common among elite performers, coaching consensus on optimal race execution, tactical variations by event distance, situational moderators (course profile, weather, competition format)

**Source type (academic):** Semantic Scholar (International Journal of Sports Physiology and Performance, Journal of Strength and Conditioning Research)
**Source type (practitioner):** World Athletics technical reports, elite coaching literature, race analysis databases (publicly available split data)

**Queries:**
Q1: even pacing negative split positive split long-distance running race performance comparison
Q2: pacing tactics elite marathon runners world record split analysis
Q3: race strategy execution competitive distance running 1500m 5000m 10000m marathon
Q4: front running vs even pace running tactics competitive evidence

**Coverage-gap note:** Tactical pacing in multi-stage events (track vs. road) and how tactical decisions interact with competitor behavior are not fully addressed. Those aspects are partly captured in D1.

---

### ANGLE 4: Environmental moderators of pacing strategy
===========
**Vocabulary tradition:** Environmental physiology / sports science
**Angle type:** Confirmatory
**Predicted research character:** empirical — expect experimental and observational studies on pacing under varied environmental conditions
**What to extract:** Effect sizes for heat and altitude on pacing adjustments, thermoregulatory pacing mechanisms, evidence-based recommendations for pacing modification in adverse conditions, scope conditions (which runners, which distances, which environmental thresholds)

**Source type (academic):** PubMed (environmental physiology, heat physiology, altitude medicine — relevant journals: Aviation Space and Environmental Medicine, Journal of Thermal Biology, High Altitude Medicine and Biology)
**Source type (practitioner):** World Athletics environmental heat guidelines, altitude training camp resources

**Queries:**
Q1: heat stress pacing strategy long-distance running performance thermoregulation
Q2: altitude effects running pacing strategy endurance performance hypoxia
Q3: environmental conditions pacing adjustment marathon race hot humid cold
Q4: thermoregulation hyperthermia pacing collapse endurance running evidence

**Coverage-gap note:** Humidity effects as distinct from temperature, and combined stressors (heat + altitude simultaneously), are underserved by these queries.

---

### ANGLE 5: Stride and gait mechanics as the biomechanical implementation of pacing
===========
**Vocabulary tradition:** Biomechanics / gait analysis
**Angle type:** Confirmatory
**Predicted research character:** empirical — expect biomechanical measurement studies (kinematics, kinetics) with quantitative data on how stride parameters change across distance and fatigue
**What to extract:** How stride frequency, stride length, cadence, and running mechanics change as a function of pacing strategy and fatigue; whether biomechanical markers predict pacing breakdown; gait adjustments that efficient pacers make

**Source type (academic):** Semantic Scholar (Journal of Biomechanics, Gait and Posture, Journal of Sports Sciences)
**Source type (practitioner):** Running performance analysis tools and GPS/wearable data platforms (e.g., Garmin/Polar technical publications, running efficiency coaching resources)

**Queries:**
Q1: running kinematics pacing strategy fatigue long-distance biomechanical
Q2: stride frequency stride length changes pacing distance running fatigue
Q3: gait mechanics pacing regulation marathon half-marathon biomechanical markers
Q4: cadence regulation pacing endurance running biomechanics efficiency

**Coverage-gap note:** Interaction between biomechanical gait adjustments and concurrent physiological/perceptual signals during pacing is not addressed by these queries — that interaction sits at the intersection of A1, A2, and A5.

---

### ANGLE 6: Evidence that pacing strategies do not determine performance or do not generalize
===========
**Vocabulary tradition:** Exercise physiology (disconfirming variant)
**Angle type:** Null-hypothesis
**Predicted research character:** gap — expect limited literature; this angle documents where the evidence is thin or contradictory; some papers will frame results as showing individual variation overwhelms strategy effects
**What to extract:** Studies showing pacing strategy has no significant effect on performance outcome, scope conditions under which pacing strategy ceases to matter (e.g., highly trained athletes with self-selected pacing), individual variability evidence that undermines general strategy recommendations, replication failures or contradictory findings in the pacing literature

**Source type (academic):** PubMed; Semantic Scholar
**Source type (practitioner):** deprioritized — null results rarely appear in coaching literature

**Queries:**
Q1: pacing strategy performance no significant effect distance running evidence
Q2: individual variability pacing optimal strategy highly trained runners limits
Q3: pacing research contradictory findings replication failure endurance performance
Q4: self-selected pacing performance distance running no controlled strategy advantage

**Coverage-gap note:** Absence of null results in the published literature (publication bias) is itself a finding this angle may surface. The meta-level question — whether the pacing literature has a publication bias problem — is not addressed directly by these queries.

---

### ANGLE 7: Competitive and social dynamics as external drivers of pacing decisions
===========
**Vocabulary tradition:** Competitive behavior / behavioral economics
**Angle type:** Adversarial
**Label:** [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Generation note: Generating from competitive behavior / behavioral economics vocabulary. EXCLUDING from generation prompt: all terms from A1–A5 (VO2max, lactate, RPE, central governor, teleoanticipation, stride frequency, kinematics, thermoregulation, altitude, negative split, race tactics, running economy, glycogen).

Adversarial hypothesis: Pacing decisions in competition are primarily driven by external incentive structures and competitor behavior rather than internal physiological or psychological regulation — and research framed around internal mechanisms misattributes causation.

**Predicted research character:** empirical — some literature on pacemaker effects and competitor proximity exists; broader incentive-structure literature will be sparse
**What to extract:** Evidence for pacemaker (rabbit) effects on race execution and outcomes, competitor proximity effects on pace selection, social facilitation in distance running, prize money or competitive incentive effects on race execution strategy, evidence that external cues override internal regulation signals

**Source type (academic):** Semantic Scholar (behavioral economics, sport competition studies, social psychology of sport)
**Source type (practitioner):** World Athletics analytics reports, athletics agent/race management resources

**Queries:**
Q1: pacemaker rabbit effect race performance long-distance running outcome evidence
Q2: competitor proximity social facilitation pacing distance running experimental
Q3: incentive structure prize money effects elite distance running race execution
Q4: external cue pacing override internal regulation competing athletes evidence

**Coverage-gap note:** The adversarial framing targets external incentives; the interaction between external competitive signals and internal regulation (how the central governor responds to competitor presence, for instance) is an intersection neither the adversarial nor the confirmatory angles fully address.

---

### ANGLE 8: Optimal control and dynamic programming models of pacing
===========
**Vocabulary tradition:** Optimal control / operations research (cross-disciplinary — NOT in intake brief)
**Angle type:** Cross-disciplinary
**Predicted research character:** empirical + gap — some mathematical modeling literature exists; the direct application to running pacing as a formal control problem is likely sparse
**What to extract:** Mathematical models treating pacing as a dynamic optimization problem, evidence on whether optimal control formulations match observed pacing behavior, constraints and uncertainty modeled in formal pacing frameworks (physiological limits, course profile, energy stores), predictions these models make that differ from sports science models

Generation note: Generating from optimal control / operations research vocabulary — NOT from the user's apparent sports science / exercise physiology framing. Vocabulary used: dynamic programming, Bellman equation, state-space model, optimal control, resource allocation under constraints, time-horizon tradeoff, uncertainty, feedback control.

**Source type (academic):** arXiv (cs.SY — Systems and Control; math.OC — Optimization and Control); Semantic Scholar (operations research, applied mathematics, sports science modeling)
**Source type (practitioner):** deprioritized — this is an academic-heavy cross-disciplinary tradition

**Queries:**
Q1: optimal pacing strategy mathematical model running performance dynamic programming
Q2: control theory pacing endurance running optimization energy resource model
Q3: state-space model athletic pacing performance constraints feedback control
Q4: optimal resource allocation model athletic pacing time uncertainty endurance

**Coverage-gap note:** The cross-disciplinary literature may exist under "optimal exercise pacing" or "mathematical pacing models" rather than using the full control-theory vocabulary. These queries span the vocabulary — but if the intersection literature uses primarily sports science vocabulary with incidental optimization language, the queries may underretrieve it.

---

## QUALITY GATE DOCUMENTATION
============

### Gate 1 — Completeness checks

**Null-hypothesis angle present:**
Angle 6 is framed as "Evidence that pacing strategies do NOT determine performance or do NOT generalize." Query strings include: "no significant effect," "limits," "replication failure," "no controlled strategy advantage." Explicit disconfirming vocabulary present.
Result: PASS

**Adversarial angle present:**
Angle 7 is labeled [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]. Label present.
Result: PASS

**Cross-disciplinary angle present:**
Angle 8 targets "Optimal control / operations research" — this tradition does NOT appear in the intake brief's candidate vocabulary traditions (which are: Exercise physiology, Sports psychology, Competitive athletics/coaching, Environmental/biomechanical physiology).
Result: PASS

**Source-type coverage:**
Domain maturity is "mixed" — practitioner sources required. Angles A1, A2, A3, A4, A5 all assign practitioner sources. Multiple angles include World Athletics, coaching literature, and practitioner-facing platforms.
Result: PASS

**Vocabulary-tradition map populated:**
Coverage map lists 4 distinct tradition names + 1 cross-disciplinary tradition. All named before angle generation began.
Result: PASS

**Gate 1 verdict: PASS**

---

### Gate 2 — Distinctness checks

**Boolean-connective test (all angle pairs examined):**

A1 vs A2: A1 distinctive terms: VO2max, lactate threshold, glycogen, running economy. A2 distinctive terms: RPE, central governor, teleoanticipation, Borg scale. No overlap. OR retrieval would not produce the same document set. PASS.

A1 vs A3: A1's distinctive: metabolic mechanisms, physiological determinants. A3's distinctive: negative split, front-running, race tactics, split analysis. Different vocabulary clusters. PASS.

A1 vs A4: A1's distinctive: VO2max, lactate, running economy. A4's distinctive: heat stress, thermoregulation, altitude, hyperthermia. Different sub-domains despite shared parent discipline. PASS.

A1 vs A5: A1's distinctive: metabolic, glycogen, energy expenditure. A5's distinctive: kinematics, stride frequency, cadence, gait mechanics. Different. PASS.

A2 vs A3: A2's distinctive: RPE, central governor, teleoanticipation. A3's distinctive: negative split, world record split analysis, race execution. Different traditions. PASS.

A2 vs A5: A2's distinctive: RPE, effort perception, central governor. A5's distinctive: kinematics, stride length, cadence. Different. PASS.

A3 vs A7 (adversarial): A3's distinctive: negative split, even pacing, race strategy. A7's distinctive: pacemaker effect, competitor proximity, incentive, social facilitation. D1 was generated with explicit exclusion of A3 vocabulary. PASS.

A4 vs A5: A4's distinctive: thermoregulation, heat, altitude. A5's distinctive: kinematics, stride frequency, gait mechanics. Different sub-domains within the biomechanical/environmental cluster. PASS.

A6 (null-hypothesis) vs all: A6 uses disconfirming vocabulary (no effect, replication failure, individual variability). This is structurally distinct from all confirmatory angles. PASS.

A7 (adversarial) vs all: Generated with explicit exclusion of confirmatory angle vocabulary. Distinctive terms (incentive structures, social facilitation, pacemaker effect) do not appear in other angles. PASS.

A8 (cross-disciplinary) vs all: Distinctive terms (dynamic programming, Bellman equation, state-space model, optimal control, feedback control) do not appear in any other angle. PASS.

**Vocabulary-tradition distinctness:**
Each angle has a distinct tradition label:
- A1: Exercise physiology / metabolic sports science
- A2: Sports psychology / perceptual regulation
- A3: Competitive athletics / coaching practice
- A4: Environmental physiology / sports science
- A5: Biomechanics / gait analysis
- A6: Exercise physiology (disconfirming variant) [null-hypothesis variant — exception applies]
- A7: Competitive behavior / behavioral economics [adversarial variant — exception applies]
- A8: Optimal control / operations research

A1 and A4 share "sports science" in their labels but belong to distinct sub-traditions with distinct vocabulary. A1 and A6 share the exercise physiology tradition but A6 is the designated null-hypothesis variant — exception explicitly permitted by procedure.

**Gate 2 verdict: PASS**

---

### Gate 3 — Launchability checks

All 8 angles examined:
- Every angle has at least 4 concrete query strings (no angle has fewer than 4)
- No query string contains "TBD," "to be determined," "[fill in]," or placeholder vocabulary — all queries are runnable search strings
- Every angle names specific platforms: PubMed, Semantic Scholar, arXiv (with category code cs.SY), World Athletics reports, Journal of Biomechanics, etc.

**Gate 3 verdict: PASS**

---

### Gate 4 — Scoring prohibition

No angles were ranked, filtered, or prioritized during generation. No angle record contains "this is likely to be most useful," "this is the strongest angle," or any equivalent subjective quality assessment. Angle ordering follows structural allocation order (confirmatory first, then null-hypothesis, adversarial, cross-disciplinary) — this is structural, not a quality ranking.

**Gate 4 verdict: PASS**

---

## GATE SUMMARY
============
Gate 1 — Completeness: PASS — null-hypothesis present (A6), adversarial present (A7, ADVERSARIAL-FLAGGED), cross-disciplinary present (A8, optimal control tradition), source-type coverage present (practitioner sources in A1–A5 for mixed domain), vocabulary-tradition map present (4 traditions + 1 cross-disciplinary)

Gate 2 — Distinctness: PASS — all 28 angle pairs examined; no synonymous pairs identified; A4/A1 share parent discipline but distinct sub-domain vocabulary; A6/A1 share tradition label (null-hypothesis variant — exception applies per procedure)

Gate 3 — Launchability: PASS — all angles have runnable query strings, no placeholders, all source platforms named specifically

Gate 4 — Scoring prohibition: PASS — no LLM self-evaluation ranking applied; ordering is structural (type-based), not quality-based

**Overall verdict: PASS — dispatch ready**

**Flags requiring human judgment:**
1. VOCABULARY SELF-REPORT FLAG — all traditions enumerated by LLM only (no survey paper, no external anchor). External validation via survey-paper probe is recommended before accepting the tradition list as complete. The traditions that could be missing include: nutrition science (glycogen loading / carbohydrate periodization framing), chronobiology (circadian effects on performance capacity), or motor control neuroscience (neural underpinnings of pace regulation distinct from the central governor model's broader framing).

2. A4/A5 overlap risk — both targets aspects of physical execution, one from environmental and one from biomechanical framing. If the corpus is small, queries may retrieve substantially the same review papers covering "factors affecting pacing." Researcher should monitor for this during execution.

3. A8 (cross-disciplinary) may retrieve sparse results — the optimal control / running pacing intersection is likely small. If fewer than 5 papers are retrieved, apply the small-literature exception and flag for human judgment before concluding the literature is absent (vs. the queries missing it due to vocabulary mismatch at the cross-disciplinary intersection).

4. Source B status: UNAVAILABLE — MODERATE. A survey-paper probe on "pacing strategies long-distance running review 2022 2023 2024 2025" should be run before treating this angle list as final, to verify vocabulary completeness.

---

## Post-gate self-check (CLAUDE.md bookend requirement)

What is missing, incomplete, or questionable in this output:

1. **Survey paper validation absent:** The vocabulary traditions are LLM-enumerated only. A review paper in Journal of Sports Sciences or Medicine and Science in Sports and Exercise on pacing strategies could surface additional traditions (e.g., nutrition science framing, neuroscience of motor control framing) not captured here. This is the highest-residual-risk gap.

2. **Animal locomotion / comparative physiology tradition not pursued:** One of the cross-disciplinary heuristics (adjacent problem solved the same way) suggested comparative biology / animal locomotion as a candidate. I prioritized optimal control because it offers higher vocabulary novelty. However, animal locomotion research on energy-optimal gaits (e.g., work by Ruina, Bertram on walking-running transitions, or optimal migration pacing in birds) might offer distinct mechanistic insights. This tradition is not covered and is an acknowledged gap.

3. **Null-hypothesis gap acknowledged:** Publication bias in sports science may mean the null-hypothesis angle (A6) retrieves sparse results not because pacing doesn't matter but because null-result papers are rarely published. The angle is structurally required and included; the researcher should be aware that sparse retrieval may reflect publication bias, not evidence of effect.

4. **Adversarial angle note:** The behavioral economics / competitive dynamics tradition (A7) challenges the causal attribution in the mainstream pacing literature. Dispatching A7 in a separate context (per the ADVERSARIAL-FLAGGED label) is essential — if run alongside the confirmatory angles, the adversarial hypothesis will be suppressed by prior confirmatory framing.

5. **Coverage-gap conditioning limitation (Weakness 7):** Long-distance running pacing is moderately well-represented in LLM training data. Per the CLAUDE.md deployment constraint (INT-10 FM4), cross-tradition conditioning on domains well-represented in LLM training data may add near-zero differential over what a frontier model would enumerate without the kit. The 4-tradition enumeration here may have been achievable without the kit's coverage-gap conditioning steps. The kit's primary value in this execution may be in Q5 (launchable angle formulation) and Q3 (query precision) rather than Q1 (coverage breadth).

---
*Generated by angle-gen-kit — Source B unavailable; MODERATE severity; VOCABULARY SELF-REPORT FLAG active*
