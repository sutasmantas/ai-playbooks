# Angle Generation Output — Input-12, Condition C

**Topic prompt:** "I want to research how to evaluate whether LLMs follow instructions reliably — what benchmarks and methods exist."

**Kit files read:** CLAUDE.md, intake.md, angle-generation.md, angle-quality.md, weakness_register.md, platform-calibration.md

---

## INTAKE BRIEF
============

**Topic:** Benchmarks and evaluation methods for assessing whether large language models reliably follow natural language instructions.

**Anchor vocabulary:**
- "evaluate" / "benchmarks" / "methods" — ML evaluation tradition
- "LLMs" — ML-systems tradition
- "instructions" — NLP alignment tradition
- "reliably" — robustness/consistency dimension (not named as a research term by user)

**Source C — Absent-term signal:** User did NOT use any of: "IFEval," "FollowBench," "InFoBench," "MT-Bench," "AlpacaEval," "LLM-as-judge," "RLHF," "instruction tuning," "red-teaming," "jailbreaking," "benchmark contamination," "constraint satisfaction," "programmatic evaluation." These are academically prominent terms in this space. Their absence signals the user is approaching from a discovery/survey framing rather than an embedded-researcher framing.

**Candidate vocabulary traditions:**

1. **NLP alignment / instruction tuning** — instruction following, instruction tuning, InstructGPT, FLAN, RLHF, helpfulness alignment, chat model, prompt following, aligned model
2. **ML evaluation / benchmarking (benchmark design)** — benchmark construction, evaluation dataset, test set design, IFEval, FollowBench, InFoBench, MT-Bench, HELM, scoring metrics, evaluation framework
3. **Automated evaluation methodology (LLM-as-judge)** — LLM-as-judge, rubric scoring, GPT-4 evaluator, reference-free evaluation, judge bias, position bias, verbosity bias, self-enhancement bias, automatic scoring
4. **Adversarial robustness / OOD evaluation** — adversarial prompting, prompt injection, jailbreaking, out-of-distribution evaluation, robustness benchmarks, instruction override, perturbation testing
5. **HCI / human evaluation / preference annotation** — human preference annotation, pairwise comparison, crowdsourcing, inter-annotator agreement, user satisfaction, win rate, human-in-the-loop evaluation
6. **Formal / programmatic constraint checking** — verifiable instructions, constraint satisfaction, format compliance, length constraint, keyword constraint, structured output verification, rule-based evaluation
7. **AI safety / red-teaming** — safety alignment, refusal behavior, harmful instruction rejection, over-refusal, jailbreak evaluation, safety benchmarks, policy compliance
8. **Benchmark validity / meta-evaluation** — benchmark contamination, data leakage, leaderboard gaming, benchmark inflation, construct validity, meta-evaluation, benchmark saturation

NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

**Question type:** EXPLORATORY — "what benchmarks and methods exist" is a landscape/survey question with no comparison or intervention-outcome structure.

**Scope markers:** None stated — inferred scope: all methods and benchmarks for evaluating LLM instruction following, model families not restricted, methods both automated and human-judged, recency-weighted (2023–2025 most relevant given rapid field evolution).

**Known exclusions:** None stated.

**Domain maturity estimate:** MIXED — academic-heavy (substantial arXiv/ACL/NeurIPS literature on instruction tuning evaluation and benchmark construction) plus practitioner-heavy dimension (evaluation leaderboards, GitHub evaluation frameworks, AI lab technical reports). User vocabulary ("benchmarks and methods") reflects familiarity with ML evaluation discourse.

**Survey paper status:** UNAVAILABLE (Source B not run) — based on LLM training knowledge, survey papers on LLM evaluation broadly exist (plausible: Guo et al. 2023, Chang et al. 2024) but title vocabulary cannot be verified without retrieval.

**Source B status:** UNAVAILABLE — MODERATE (Source A + Source C together produced 8 distinct vocabulary traditions, satisfying the ≥2 threshold for MODERATE severity)

**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only. No survey-paper probe was run (deployment constraint). External validation via a survey-paper probe is recommended before accepting the tradition list and angle list as complete. Traditions outside LLM training coverage (non-English evaluation research, specialized cognitive science subfields, post-2024 developments) may be absent.

---

## INTAKE GATE CHECK

- [x] Topic field populated (not "TBD")
- [x] Candidate vocabulary traditions: 8 entries (≥2 required)
- [x] Question type classified: EXPLORATORY
- [x] Source B unavailability: MODERATE — proceeding with VOCABULARY SELF-REPORT FLAG

All gate conditions satisfied. Proceeding to angle-generation.md.

---

## PHASE-GATE REFLECTION

1. All output fields in the intake brief populated (no blanks)? YES
2. ≥2 distinct vocabulary traditions listed? YES — 8 identified
3. Question type classified (EXPLORATORY or STRUCTURED)? YES — EXPLORATORY

All three affirmed. Proceeding to angle-generation.md procedure.

---

## COVERAGE MAP
============

**Tradition 1: NLP alignment / instruction tuning**
  Representative terms: instruction following, instruction tuning, RLHF, InstructGPT, FLAN, aligned model, helpfulness
  Planned angle slot: Confirmatory A1
  Gap flag: No — slot assigned

**Tradition 2: ML evaluation / benchmarking (benchmark design)**
  Representative terms: benchmark construction, IFEval, FollowBench, InFoBench, MT-Bench, AlpacaEval, HELM, evaluation dataset
  Planned angle slot: Confirmatory A2
  Gap flag: No — slot assigned

**Tradition 3: Automated evaluation methodology (LLM-as-judge)**
  Representative terms: LLM-as-judge, GPT-4 evaluator, rubric scoring, judge bias, position bias, verbosity bias, reference-free evaluation
  Planned angle slot: Confirmatory A3
  Gap flag: No — slot assigned

**Tradition 4: Adversarial robustness / OOD evaluation**
  Representative terms: adversarial prompting, prompt injection, out-of-distribution evaluation, instruction override, robustness benchmarks
  Planned angle slot: Confirmatory A4
  Gap flag: No — slot assigned

**Tradition 5: HCI / human evaluation / preference annotation**
  Representative terms: human preference annotation, pairwise comparison, crowdsourcing, inter-annotator agreement, win rate, user satisfaction
  Planned angle slot: Confirmatory A5
  Gap flag: No — slot assigned

**Tradition 6: Formal / programmatic constraint checking**
  Representative terms: verifiable instructions, constraint satisfaction, format compliance, length constraint, keyword constraint, rule-based evaluation
  Planned angle slot: Confirmatory A6
  Gap flag: No — slot assigned

**Tradition 7: AI safety / red-teaming**
  Representative terms: safety alignment, refusal behavior, harmful instruction rejection, over-refusal, jailbreak evaluation, safety benchmarks
  Planned angle slot: Confirmatory A7
  Gap flag: No — slot assigned

**Tradition 8: Benchmark validity / meta-evaluation**
  Representative terms: benchmark contamination, data leakage, leaderboard gaming, construct validity, meta-evaluation, benchmark saturation
  Planned angle slot: Confirmatory A8
  Gap flag: No — slot assigned

**Traditions NOT yet represented in the planned list:**
  All 8 traditions from the intake brief have at least one planned angle slot.

**Cross-disciplinary slot (required):**
  Target tradition: Cognitive science / linguistics / pragmatics
  Basis for selection: Cognitive science and linguistics have a substantial literature on instruction comprehension, directive interpretation, pragmatic inference, and the conditions under which humans follow (or fail to follow) instructions. This tradition uses vocabulary — "pragmatic inference," "command semantics," "directive comprehension," "Gricean implicature," "discourse compliance" — that does not appear in any of the eight NLP/ML/HCI traditions in the intake brief. The cognitive science framing could surface findings about what makes instructions legible that NLP evaluation literature has not operationalized.

---

## TYPE ALLOCATIONS
================

```
Slot N1 (Null-hypothesis — ML evaluation disconfirming variant): assigned
Slot A1 (Confirmatory — Tradition 1, NLP alignment / instruction tuning): assigned
Slot A2 (Confirmatory — Tradition 2, ML evaluation / benchmark design): assigned
Slot A3 (Confirmatory — Tradition 3, Automated evaluation methodology): assigned
Slot A4 (Confirmatory — Tradition 4, Adversarial robustness / OOD): assigned
Slot A5 (Confirmatory — Tradition 5, HCI / human evaluation): assigned
Slot A6 (Confirmatory — Tradition 6, Formal / programmatic constraint checking): assigned
Slot A7 (Confirmatory — Tradition 7, AI safety / red-teaming): assigned
Slot A8 (Confirmatory — Tradition 8, Benchmark validity / meta-evaluation): assigned
Slot D1 (Adversarial-FLAGGED — Software engineering / behavioral specification testing;
         NOT FROM: NLP alignment, ML benchmarking, LLM-judge, adversarial robustness,
         HCI, formal constraint, safety, meta-evaluation, cognitive science): assigned
Slot C1 (Cross-disciplinary — Cognitive science / linguistics / pragmatics): assigned
```

Total planned angles: 11

---

## FULL ANGLE LIST

---

ANGLE 1 (N1): Failure evidence — when instruction-following benchmarks and methods do not measure actual compliance
===========
Vocabulary tradition: ML evaluation — disconfirming variant
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Empirical evidence that benchmark scores do not predict downstream instruction compliance; conditions under which evaluation methods fail (contamination, ceiling effects, narrow construct coverage); replication failures; cases where fine-tuned models score highly but fail real-world instructions; documented scope limitations of existing benchmarks; negative results explicitly.

Source type (academic): arXiv cs.CL + cs.LG (date-filtered 2023–2025)
Source type (practitioner): GitHub issues on evaluation frameworks (lm-evaluation-harness, OpenCompass, EleutherAI/lm-eval); practitioner post-mortems on leaderboard score inflation

Queries:
  Q1: instruction following benchmark evaluation failure generalization limitations LLM 2024 2025
  Q2: LLM instruction following evaluation does not generalize negative result replication benchmark
  Q3: benchmark contamination data leakage instruction following LLM evaluation gaming leaderboard
  Q4: instruction compliance benchmark score ceiling saturation failure real-world performance gap

Coverage-gap note: The null hypothesis here is at the benchmark/method level. A separate angle framing the null hypothesis at the model-capability level (instruction following does not improve with scale) would be a distinct disconfirming search not covered here.

---

ANGLE 2 (A1): Instruction-following benchmark taxonomy — named suites, design choices, and model rankings
===========
Vocabulary tradition: NLP alignment / instruction tuning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Named benchmarks and their design choices (what instruction types are covered, how ground truth is operationalized, what task distribution is used); benchmark construction methodology; reported model scores and rankings; open-source availability and reproducibility; how instruction-following performance correlates with instruction tuning method (RLHF vs SFT vs DPO).

Source type (academic): arXiv cs.CL + cs.LG (date-filtered 2022–2025)
Source type (practitioner): GitHub repositories for evaluation suites (IFEval, FollowBench, InFoBench, MT-Bench, AlpacaEval); AI lab model card evaluation sections

Queries:
  Q1: instruction following evaluation benchmark LLM IFEval FollowBench InFoBench 2023 2024 2025
  Q2: instruction tuning evaluation benchmark construction language model scoring methodology
  Q3: instruction following benchmark survey large language models evaluation landscape 2024
  Q4: AlpacaEval MT-Bench HELM instruction following evaluation leaderboard methodology comparison

Coverage-gap note: Multilingual instruction-following benchmarks (non-English) are unlikely to be retrieved by these queries; a dedicated multilingual angle would be required for full cross-lingual coverage.

---

ANGLE 3 (A2): Automated evaluation methodology — LLM-as-judge design, biases, and calibration
===========
Vocabulary tradition: Automated evaluation methodology (LLM-as-judge)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Design choices in LLM-as-judge evaluation systems; documented biases (position bias, verbosity bias, self-enhancement, instruction-following bias in the judge model itself); calibration methods for reducing judge bias; comparison of LLM judges against human judgment; conditions under which automated judges are and are not valid; rubric construction methodology; judge reliability metrics.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub repositories for LLM judge implementations (MT-Bench eval code, AlpacaEval judge code, Prometheus); practitioner blog posts on evaluation tooling

Queries:
  Q1: LLM as judge instruction following evaluation bias calibration reliability 2024 2025
  Q2: automated evaluation instruction compliance judge bias position verbosity self-enhancement language model
  Q3: GPT-4 judge rubric scoring instruction following benchmark validity automatic evaluation
  Q4: judge calibration LLM evaluation instruction following inter-rater agreement human benchmark

Coverage-gap note: Multi-turn and conversational judge evaluation (evaluating instruction following across dialogue turns) is a distinct sub-facet partially addressed but deserving a standalone query set if multi-turn compliance is a core research interest.

---

ANGLE 4 (A3): Adversarial and out-of-distribution robustness evaluation of instruction following
===========
Vocabulary tradition: Adversarial robustness / OOD evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Adversarial instruction types and prompt injection patterns that cause compliance failure; out-of-distribution instruction generalization gaps; robustness measurement methodology; what conditions trigger instruction-following breakdown; comparison of model robustness across families and scales; adversarial instruction benchmarks (datasets, metrics); prompt injection as evaluation method.

Source type (academic): arXiv cs.CL + cs.LG + cs.CR (security dimension where prompt injection framing applies)
Source type (practitioner): GitHub red-teaming toolkits; prompt injection security advisories; adversarial prompting practitioner blogs

Queries:
  Q1: adversarial instruction following robustness evaluation LLM prompt injection benchmark 2024 2025
  Q2: out-of-distribution instruction following generalization evaluation large language model breakdown
  Q3: instruction override adversarial attack language model compliance failure evaluation robustness
  Q4: robustness instruction following constraint violation stress testing LLM adversarial benchmark

Coverage-gap note: Physical-world robustness (instructions given in noisy or degraded text, OCR errors, transliteration) is a sub-facet not addressed by these queries.

---

ANGLE 5 (A4): Human evaluation and preference annotation methods for instruction compliance
===========
Vocabulary tradition: HCI / human evaluation / preference annotation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Protocols for human evaluation of instruction following; inter-annotator agreement rates; crowdworker reliability; preference annotation designs; biases in human evaluation (verbosity preference, format preference); comparison of human vs. automated evaluation; annotation guideline design; what human evaluation captures that automated evaluation misses; win-rate methodology.

Source type (academic): arXiv cs.CL; ACL Anthology (EMNLP, ACL, NAACL proceedings); ACM CHI for HCI perspectives
Source type (practitioner): Crowdsourcing platform evaluation guidelines (Scale AI, MTurk); AI lab human evaluation methodology documentation

Queries:
  Q1: human evaluation instruction following language model annotation protocol inter-annotator agreement
  Q2: preference annotation instruction compliance LLM crowdsourced evaluation reliability bias win rate
  Q3: human evaluation bias verbosity position instruction following LLM benchmark crowdworker
  Q4: human vs automated evaluation instruction following LLM comparison agreement correlation

Coverage-gap note: Specialist annotator evaluation (domain-expert annotation of instruction compliance in technical domains) is not addressed by these queries; expert evaluation methodology is a distinct sub-facet.

---

ANGLE 6 (A5): Programmatic and verifiable instruction constraint checking
===========
Vocabulary tradition: Formal / programmatic constraint checking
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Programmatic verification methods for instruction-imposed constraints (format, length, keyword inclusion/exclusion, structure, case, count); which constraint types are verifiable programmatically vs. require judgment; tool implementations; benchmark designs based on verifiable constraints (IFEval-style); performance profiles across constraint types; limitations of rule-based approaches; coverage gaps relative to real-world instructions.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub repositories with constraint-checking evaluation code; practitioner evaluation notebooks and scripts

Queries:
  Q1: verifiable instruction following evaluation rule-based constraint checking format length keyword LLM 2024
  Q2: programmatic evaluation instruction compliance constraint satisfaction automatic language model structured
  Q3: IFEval verifiable instruction following benchmark constraint type coverage evaluation methodology
  Q4: instruction constraint checking evaluation format compliance structured output LLM automated

Coverage-gap note: Open-ended stylistic constraints (e.g., "write in a formal tone") resist programmatic checking; evaluation of those requires human judgment or learned models and is not addressed here.

---

ANGLE 7 (A6): Safety instruction evaluation — refusal behavior, policy compliance, and the over/under-refusal tradeoff
===========
Vocabulary tradition: AI safety / red-teaming
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Benchmarks and methods for evaluating safety instruction following (whether models correctly refuse harmful requests while complying with benign ones); over-refusal rates and measurement; under-refusal/jailbreak evaluation; safety-helpfulness tradeoff quantification; red-teaming methodology; safety evaluation datasets (TruthfulQA, HarmBench, StrongREJECT); policy compliance measurement; how safety evaluation relates to general instruction following evaluation.

Source type (academic): arXiv cs.CL + cs.LG + cs.AI (AI safety)
Source type (practitioner): GitHub safety evaluation frameworks (HarmBench, StrongREJECT, TruthfulQA repositories); AI lab safety evaluation documentation and blog posts

Queries:
  Q1: safety instruction following evaluation LLM refusal harmful requests benchmark over-refusal 2024 2025
  Q2: red-teaming jailbreak evaluation LLM safety instruction compliance HarmBench StrongREJECT
  Q3: safety helpfulness tradeoff instruction following evaluation policy compliance language model benchmark
  Q4: refusal behavior evaluation language model safety alignment over-refusal under-refusal rate measurement

Coverage-gap note: Enterprise policy compliance (evaluating whether a model follows system-prompt-defined organizational policies) is adjacent but not directly addressed; system-prompt instruction following deserves a separate angle for enterprise-context research.

---

ANGLE 8 (A7): Benchmark validity and meta-evaluation — what makes an instruction-following benchmark credible
===========
Vocabulary tradition: Benchmark validity / meta-evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Meta-evaluation criteria for benchmark quality (construct validity, ecological validity, contamination risk, gaming resistance); benchmark contamination detection methods; evidence of leaderboard gaming and inflation in instruction following benchmarks; correlation between benchmark scores and downstream task performance; benchmark saturation evidence; recommendations for benchmark construction and release; methodology for auditing existing benchmarks.

Source type (academic): arXiv cs.CL + cs.LG; NeurIPS Datasets and Benchmarks track
Source type (practitioner): Practitioner critiques of LLM leaderboards; AI lab blog posts on benchmark design principles; GitHub data-contamination-detection tools

Queries:
  Q1: benchmark validity meta-evaluation instruction following LLM leaderboard contamination 2024 2025
  Q2: evaluation benchmark quality assessment instruction following LLM gaming inflation construct validity
  Q3: benchmark contamination data leakage instruction following LLM test set evaluation methodology
  Q4: meta-evaluation instruction following benchmark score correlation downstream performance validity

Coverage-gap note: Cross-benchmark generalization (whether a model's score on benchmark A predicts performance on benchmark B) is a sub-facet not fully addressed; that would require a dedicated angle on benchmark-to-benchmark transfer.

---

ANGLE 9 (D1) [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]: Behavioral specification testing for language system compliance — a software engineering framing
===========
Vocabulary tradition: Software engineering / behavioral specification testing
Angle type: Adversarial
Predicted research character: empirical (SE venues) with gap (SE-to-NLP transfer literature may be sparse)
What to extract: Software engineering literature on testing systems against behavioral specifications; test oracle design for NLP-output-producing systems; metamorphic testing applications to language systems; property-based testing for natural language generation; acceptance testing methodology; specification non-compliance patterns; formal verification applied to language model outputs; cases where systems satisfy surface-level tests but violate underlying specification.

Adversarial generation note: Generated from SE testing tradition vocabulary only. Excluded from generation prompt: "instruction following," "alignment," "RLHF," "benchmark dataset," "IFEval," "LLM-as-judge," "helpfulness," "harmlessness," "red-teaming," "jailbreak," "preference annotation." These exclusions enforce structural vocabulary independence from all eight confirmatory angle traditions.

Source type (academic): ACM TOSEM, ICSE, FSE, ASE proceedings; arXiv cs.SE + cs.PL
Source type (practitioner): SE practitioner blogs on testing LLM-backed systems; GitHub issue threads on specification non-compliance in NLP pipelines

Queries:
  Q1: behavioral specification compliance testing language model test oracle NLP system software engineering
  Q2: metamorphic testing large language model instruction compliance property-based verification
  Q3: acceptance testing language model output specification adherence automated SE methodology
  Q4: property-based testing natural language generation specification compliance constraint verification

Coverage-gap note: This angle deliberately targets SE literature that may use vocabulary entirely different from NLP venues. Low result counts are expected and are themselves informative (gap finding: SE researchers have not yet systematically framed LLM evaluation in specification-testing terms).

---

ANGLE 10 (A8): Multi-constraint and compositional instruction following — evaluation of complex, multi-requirement instructions
===========
Vocabulary tradition: NLP evaluation — compositional instruction complexity
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How evaluation methods handle instructions with multiple simultaneous constraints; compositional instruction following benchmarks; degradation patterns as instruction complexity increases; method designs for evaluating multi-turn or long-horizon instruction compliance; what types of constraint combinations are hardest for models; evaluation granularity at the per-constraint level.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub multi-constraint evaluation repositories; practitioner writeups on complex system-prompt compliance

Queries:
  Q1: multi-constraint instruction following evaluation LLM compositional benchmark 2024 2025
  Q2: complex instruction following evaluation multiple requirements simultaneous constraint language model
  Q3: instruction following evaluation granularity constraint-level scoring compositional language model

Coverage-gap note: Long-context instruction following (instructions provided across a very long context window) is a distinct sub-facet not fully covered; recency bias in long contexts may require a dedicated angle.

---

ANGLE 11 (C1): Cognitive science and linguistics perspectives on instruction comprehension and directive compliance
===========
Vocabulary tradition: Cognitive science / linguistics / pragmatics [cross-disciplinary — NOT in intake brief]
Angle type: Cross-disciplinary
Predicted research character: consensus (cognitive science and linguistics) + empirical (psycholinguistics)
What to extract: Cognitive science findings on how directives and instructions are processed; pragmatic inference and implicature in instruction interpretation; syntactic/semantic features of instructions that affect compliance; psycholinguistic models of command comprehension; cross-disciplinary implications for what "instruction following" means and how to measure it; linguistic features that predict instruction-following failure; how ambiguity resolution affects compliance.

Source type (academic): Cognition, Journal of Memory and Language, Psychological Review (cognitive science); Language and Cognitive Processes (psycholinguistics); arXiv cs.CL for NLP work that draws on cognitive science
Source type (practitioner): deprioritized — academic-heavy sub-domain with minimal practitioner production; cognitive science findings primarily affect benchmark design, not practitioner tooling

Queries:
  Q1: instruction comprehension directive following cognitive science pragmatic inference evaluation
  Q2: natural language command interpretation compliance cognitive linguistics psycholinguistics empirical
  Q3: instruction following ambiguity pragmatic implicature human language understanding cognitive model

Coverage-gap note: The intersection between cognitive science models of instruction following and LLM evaluation design is a gap in current literature; queries may retrieve the two literatures separately without bridge papers, which is itself a useful finding (no cross-disciplinary synthesis exists yet).

---

## BOOLEAN-CONNECTIVE DISTINCTNESS CHECK

Checking each angle pair for whether OR retrieval would return substantially the same documents:

- N1 (null hypothesis) vs A7/A8 (benchmark validity, meta-evaluation): N1 focuses on compliance failures; A8 focuses on benchmark quality criteria. Overlap on "benchmark contamination" terms expected. Discriminating terms: N1 uses "failure," "does not generalize," "negative result"; A8 uses "validity," "gaming," "meta-evaluation," "construct validity." Different research question framing. PASS with note.
- A1 (benchmark taxonomy) vs A2 (LLM-as-judge): A1 retrieves dataset/suite papers; A2 retrieves evaluation method papers. Shared root "evaluation + LLM" produces some overlap but discriminating terms differ (A1: benchmark names; A2: "judge bias," "rubric," "calibration"). PASS.
- A1 vs A8 (meta-evaluation): A1 asks what benchmarks exist; A8 asks how to assess benchmark quality. Both use "benchmark + LLM" but discriminating terms differ (A1: benchmark names; A8: "contamination," "validity," "gaming"). BORDERLINE — will retrieve some shared papers on benchmark construction. Distinct enough by research question; no merge required. PASS with note.
- A2 (LLM-as-judge) vs A5 (human evaluation): A2 focuses on automated judge methodology; A5 focuses on human annotation protocols. These are contrasted sub-traditions in the same domain. Queries use distinct vocabulary. PASS.
- A3 (adversarial robustness) vs A6 (safety): A3 covers adversarial evaluation methodology broadly; A6 focuses on safety-specific refusal/compliance. Overlap on "jailbreak" term. Discriminating terms: A3 uses "robustness," "OOD," "perturbation"; A6 uses "refusal," "harmful," "over-refusal," "policy compliance." PASS.
- A9 (adversarial-FLAGGED, SE) vs A10 (compositional): Completely different vocabulary traditions. PASS.
- C1 (cognitive science) vs all others: Queries use "cognitive science," "pragmatic inference," "psycholinguistics" — absent from all other angles. PASS.
- A10 (multi-constraint, compositional) vs A1 (benchmark taxonomy): A10 focuses on evaluation of complex multi-constraint instructions; A1 covers named benchmark suites broadly. Overlap on "benchmark + instruction following" but A10 discriminating terms ("compositional," "multi-constraint," "per-constraint granularity") are distinct. PASS.
- All other pairs: vocabulary tradition labels are distinct; no synonym risk flagged.

Overall distinctness: PASS — one BORDERLINE noted (A1/A8) but distinct by research question framing; no merges required.

---

## GATE SUMMARY
============

```
Gate 1 — Completeness:
  - Null-hypothesis angle present: PASS
    (ANGLE 1 (N1) — explicit disconfirming framing; queries contain "failure,"
    "does not generalize," "negative result," "gaming")
  - Adversarial angle present: PASS
    (ANGLE 9 (D1) labeled [ADVERSARIAL-FLAGGED] with dispatch note; SE tradition,
    excluded from confirmatory context)
  - Cross-disciplinary angle present: PASS
    (ANGLE 11 (C1) — cognitive science / linguistics / pragmatics; this tradition
    was NOT in the intake brief's candidate list)
  - Source-type coverage: PASS
    (domain is MIXED; practitioner sources assigned to angles 1, 2, 3, 4, 5, 6, 7, 8, 9)
  - Vocabulary-tradition map populated: PASS
    (10 distinct traditions: 8 from intake brief + cognitive science/linguistics (C1)
    + software engineering/behavioral testing (D1))
Overall Gate 1: PASS

Gate 2 — Distinctness:
  - Boolean-connective test: A1/A8 flagged BORDERLINE; discriminating terms
    sufficiently distinct; no merge required. All other pairs PASS.
  - Vocabulary-tradition distinctness: Each non-adversarial, non-null-hypothesis
    angle has a distinct tradition label. PASS.
  - Note: ANGLE 9 (adversarial) and ANGLE 11 (cross-disciplinary) both use
    traditions outside the intake brief — permitted by type allocation rule.
  - Note: A10 (compositional instruction complexity) and A1 (benchmark taxonomy)
    both nominally fall within NLP evaluation — tradition labels are distinguished
    as "NLP alignment / instruction tuning" (A1) vs. "NLP evaluation — compositional
    instruction complexity" (A10). Different research questions and query sets. PASS.
Overall Gate 2: PASS

Gate 3 — Launchability:
  - All 11 angles have concrete, runnable query strings.
  - No placeholders or TBD markers in any query string.
  - Source types named specifically (arXiv cs.CL + cs.LG, GitHub, ACL Anthology,
    ACM TOSEM/ICSE, Cognition, etc.) for all 11 angles.
Overall Gate 3: PASS

Gate 4 — Scoring prohibition:
  - No angles ranked by "most promising" or "most novel."
  - No implicit quality assessments in angle records.
  - Type allocations used structural criteria only (tradition coverage,
    required-type slots, coverage-gap conditioning).
Overall Gate 4: PASS

Overall verdict: PASS — dispatch ready.

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all 10 traditions identified by LLM enumeration
     only; no survey-paper probe run. Traditions outside LLM training coverage may be
     absent. Recommend Source B probe before treating coverage as complete.
  2. A1/A8 borderline overlap — users may wish to merge if retrieval confirms they
     return substantially the same papers; retain as separate angles until retrieval
     results are available.
  3. Multilingual instruction following evaluation — not covered by any angle.
     If the research scope includes non-English instruction following, a dedicated
     multilingual angle is required.
  4. System-prompt / enterprise-context instruction following — not fully covered.
     Angle 7 (safety) partially touches policy compliance; a dedicated system-prompt
     adherence angle would be required for enterprise-deployment research contexts.
  5. ANGLE 9 (D1, adversarial, SE tradition) may retrieve sparse results — SE
     researchers have not yet systematically published on specification-compliance
     testing of LLMs in SE venues. Low result count is an informative null result,
     not a search failure.
```

---

**Total angles produced:** 11
**Distinct vocabulary traditions represented:** 10
  (NLP alignment/instruction tuning; ML evaluation/benchmark design;
  Automated evaluation methodology/LLM-as-judge; Adversarial robustness/OOD;
  HCI/human evaluation/preference annotation; Formal/programmatic constraint checking;
  AI safety/red-teaming; Benchmark validity/meta-evaluation;
  NLP evaluation/compositional instruction complexity;
  [cross-disciplinary] Cognitive science/linguistics/pragmatics;
  [adversarial] Software engineering/behavioral specification testing)
**Required type coverage:**
  - Null-hypothesis (exactly 1): PRESENT — ANGLE 1 (N1)
  - Adversarial (≥1): PRESENT — ANGLE 9 (D1), ADVERSARIAL-FLAGGED
  - Cross-disciplinary (≥1): PRESENT — ANGLE 11 (C1), cognitive science/linguistics
  - Confirmatory (≥2, from different traditions): PRESENT — ANGLES 2–8, 10 (8 confirmatory)
