# Angle Generation — Input 12, Condition B

**Topic prompt:** "I want to research how to evaluate whether LLMs follow instructions reliably — what benchmarks and methods exist."

**Kit version:** angle-gen-kit (all procedures: CLAUDE.md, intake.md, angle-generation.md,
angle-quality.md, platform-calibration.md, weakness_register.md)

---

## VOCABULARY SELF-REPORT FLAG

Source B (web search / survey-paper probe) was unavailable in this subagent context. All vocabulary
traditions listed in this document were enumerated by LLM only. The LLM cannot enumerate traditions
it has not encountered in training. A vocabulary-discovery pass (pearl-growing from a known anchor
paper) is recommended before accepting the tradition list as complete. Expected coverage: MODERATE,
not FULL. Severity: MODERATE — Source A + Source C together produced ≥7 distinct vocabulary
traditions. Proceeding per intake.md Step 5 fallback protocol.

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: How to evaluate whether LLMs follow instructions reliably — the landscape of benchmarks
  and evaluation methods for measuring instruction-following behavior in large language models

Anchor vocabulary (terms the user chose — reveal which tradition they entered from):
  "evaluate" / "evaluation" — ML evaluation tradition
  "LLMs" — ML-systems tradition
  "follow instructions" / "instruction-following" — NLP alignment tradition
  "reliably" — reliability / robustness framing
  "benchmarks" — ML benchmarking tradition
  "methods" — general evaluation research

Source A — LLM translation (synonyms and alternative framings per tradition):
  "instruction-following" also called: behavioral adherence, prompt following, directive
    compliance, command execution, rule following, constraint satisfaction, policy following,
    task compliance, instruction adherence, behavioral alignment
  "evaluate reliably" also called: benchmark validity, evaluation reliability, measurement
    consistency, test-retest reliability, inter-rater agreement, scoring reproducibility,
    evaluation robustness, metric validity
  "benchmarks" also called: evaluation suites, test sets, challenge sets, leaderboards,
    evaluation harnesses, assessment datasets, scoring rubrics
  "LLMs" also called: large language models, foundation models, instruction-tuned models,
    chat models, transformers, autoregressive models, generative language models

Candidate vocabulary traditions:
  1. NLP alignment / instruction tuning — RLHF, instruction tuning, FLAN, InstructGPT, IFEval,
     FollowBench, AlpacaEval, prompt following, behavioral alignment, instruction adherence,
     compositional instruction, multi-constraint instruction
  2. ML evaluation / benchmarking — benchmark datasets, leaderboards, evaluation metrics,
     test sets, MT-Bench, Open LLM Leaderboard, win rate, model ranking, evaluation suite
  3. AI safety / alignment evaluation — constitutional AI, safety benchmarks, refusal
     evaluation, red-teaming, value alignment, policy compliance, harmful instruction
     detection, RLHF scoring
  4. LLM-as-judge / automated evaluation — LLM judge, auto-evaluator, judge calibration,
     judge bias, reference-free evaluation, rubric scoring, position bias, verbosity bias,
     GPT-4 evaluator, Chatbot Arena
  5. Constraint satisfaction / programmatic evaluation — programmatic scoring, format
     compliance, keyword constraint, length constraint, structured output verification,
     constraint decomposition, verifiable instruction
  6. HCI / human evaluation methodology — human judges, preference judgments, crowdsourcing,
     inter-annotator agreement, pairwise comparison, annotation protocol, Likert scale,
     human-AI interaction evaluation
  7. Meta-evaluation / benchmark validity — benchmark contamination, data leakage,
     benchmark saturation, evaluation validity, leaderboard reliability, reproducibility,
     over-optimization, construct validity
  8. Software engineering / behavioral specification — oracle problem, mutation testing,
     property-based testing, behavioral conformance, test specification, test coverage
  9. Practitioner / open-source evaluation tooling — lm-evaluation-harness, promptfoo,
     evaluation framework, deployment pipeline, production evaluation, HuggingFace Spaces
  10. Multi-turn / compositional instruction following — multi-turn conversation evaluation,
      compositional task, multi-step instruction, long-context instruction, instruction
      retention, dialogue evaluation
  11. Adversarial robustness evaluation — adversarial prompt, prompt injection, jailbreaking,
      instruction override, robustness testing, adversarial attack on instruction following

  NOTE: Vocabulary traditions listed here are LLM self-reported. Vocabulary-discovery pass
  recommended before accepting this list as complete.

Source C — absent-term signal (terms user did NOT use that domain-entry would expect):
  - IFEval (canonical instruction-following benchmark; Zhou et al. 2023)
  - LLM-as-judge (dominant automated evaluation paradigm)
  - AlpacaEval / MT-Bench / FollowBench (specific benchmark names)
  - win rate (primary metric in comparative evaluation)
  - rubric-based scoring
  - benchmark contamination / data leakage
  - format following / structured output compliance
  - constraint satisfaction
  - inter-annotator agreement

Question type: EXPLORATORY
  (prompt asks "what benchmarks and methods exist" — a landscape/survey question with no
  comparison or intervention-outcome structure; default to EXPLORATORY per intake.md Step 3)

Scope markers: None explicitly stated — inferred scope: all methods and benchmarks for
  evaluating LLM instruction-following regardless of model family, task type, or deployment
  context; recency-weighted (2023-2025 most relevant given rapid field evolution)

Known exclusions: None stated

Domain maturity estimate: mixed (academic-heavy with substantial practitioner production)
  Basis: "benchmarks" and "LLMs" are both academic and practitioner vocabulary; area has
  substantial arXiv literature (IFEval, FollowBench, etc.) AND practitioner tools
  (lm-evaluation-harness, HuggingFace Leaderboard, Chatbot Arena); AI evaluation is both
  a research area and a practitioner engineering problem

Survey paper status: NOT CHECKED — Source B unavailable in subagent context
Source B status: UNAVAILABLE — MODERATE — Source A + Source C produced ≥11 distinct
  vocabulary traditions; topic is well-represented in LLM training data; severity MODERATE;
  proceeding with VOCABULARY SELF-REPORT FLAG applied throughout
```

Intake gate check:
- [x] Topic field populated
- [x] Candidate vocabulary traditions has ≥2 entries (11 traditions identified)
- [x] Question type classified (EXPLORATORY)
All three gate conditions true. Proceeding to angle-generation.md.

---

## COVERAGE MAP

```
COVERAGE MAP
============

Tradition 1: NLP alignment / instruction tuning
  Representative terms: RLHF, instruction tuning, FLAN, InstructGPT, IFEval, FollowBench,
    prompt following, behavioral alignment, compositional instructions
  Planned angle slot: Confirmatory A1; N1 (disconfirming variant)
  Gap flag: No

Tradition 2: ML evaluation / benchmarking
  Representative terms: benchmark datasets, leaderboards, MT-Bench, AlpacaEval, Open LLM
    Leaderboard, win rate, evaluation metrics, model ranking
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: AI safety / alignment evaluation
  Representative terms: constitutional AI, safety benchmarks, refusal evaluation,
    red-teaming, value alignment, policy compliance, harmful instruction detection
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: LLM-as-judge / automated evaluation
  Representative terms: LLM judge, auto-evaluator, judge calibration, judge bias,
    reference-free evaluation, rubric scoring, position bias, verbosity bias
  Planned angle slot: Confirmatory A4
  Gap flag: No

Tradition 5: Constraint satisfaction / programmatic evaluation
  Representative terms: programmatic scoring, format compliance, keyword constraint,
    length constraint, structured output verification, verifiable instruction
  Planned angle slot: Confirmatory A5
  Gap flag: No

Tradition 6: HCI / human evaluation methodology
  Representative terms: human judges, preference judgments, crowdsourcing, inter-annotator
    agreement, pairwise comparison, annotation protocol, Likert scale
  Planned angle slot: Confirmatory A6
  Gap flag: No

Tradition 7: Meta-evaluation / benchmark validity
  Representative terms: benchmark contamination, data leakage, benchmark saturation,
    evaluation validity, leaderboard reliability, reproducibility, over-optimization
  Planned angle slot: Confirmatory A7
  Gap flag: No

Tradition 8: Software engineering / behavioral specification
  Representative terms: oracle problem, mutation testing, property-based testing,
    behavioral conformance, test specification, behavioral contract
  Planned angle slot: Confirmatory A8
  Gap flag: No

Tradition 9: Practitioner / open-source evaluation tooling
  Representative terms: lm-evaluation-harness, promptfoo, evaluation framework,
    deployment pipeline, production evaluation, HuggingFace Spaces
  Planned angle slot: Confirmatory A9
  Gap flag: No

Tradition 10: Multi-turn / compositional instruction following
  Representative terms: multi-turn evaluation, compositional task, multi-step instruction,
    long-context instruction, instruction retention, dialogue evaluation
  Planned angle slot: Confirmatory A10
  Gap flag: No

Tradition 11: Adversarial robustness evaluation
  Representative terms: adversarial prompt, prompt injection, jailbreaking, instruction
    override, robustness testing, adversarial attack
  Planned angle slot: Confirmatory A11
  Gap flag: No

Traditions NOT yet represented in the planned list:
  All 11 traditions from intake brief have at least one angle slot.

Cross-disciplinary slots (required — must target tradition NOT in intake brief):

  Cross-disciplinary C1 — Psychometrics / measurement theory (NOT in intake brief)
  Basis: Psychometrics is the scientific discipline for measuring latent constructs via
    observable behavioral samples. The question "does this benchmark reliably evaluate
    instruction-following?" maps directly onto psychometric concepts: construct validity
    (does the test measure what it claims?), criterion validity (do scores predict
    real-world behavior?), test-retest reliability (are scores stable?), inter-rater
    reliability, item response theory (are some test items harder/easier in principled
    ways?). AI benchmark designers face the identical design problem psychometricians
    solved for educational and cognitive testing. This tradition likely contains
    transferable methodology not yet cited in NLP evaluation literature.

  Cross-disciplinary C2 — Philosophy of language / speech act theory (NOT in intake brief)
  Basis: "Following an instruction" is a speech act (a directive/imperative). What it
    means for an instruction to have been satisfied is studied in philosophy of language:
    illocutionary acts, felicity conditions, directive compliance, propositional content
    satisfaction. This framing clarifies what success conditions for instruction-following
    evaluation actually require and surfaces cases where evaluation benchmarks may use
    incorrect satisfaction criteria (e.g., literal vs. intended meaning).

  Adversarial slot (required):
  Target tradition: Organizational behavior / cognitive compliance (NOT from any intake
    tradition)
  Excluded vocabulary: instruction following, LLMs, NLP, benchmark, leaderboard,
    evaluation metrics, alignment, RLHF, constraint satisfaction, LLM-as-judge,
    automated evaluation, prompt, language model, transformer
  Basis: Organizational behavior and cognitive psychology study how human agents comply
    with directives in structured settings. The measurement methodology (behavioral coding,
    construct validity, reliability coefficients) may transfer to AI evaluation design.
    Running this from outside NLP vocabulary surfaces methods NLP researchers would not
    find in their own literature.
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — NLP alignment / instruction tuning):
  Core instruction-following benchmark literature (IFEval, FollowBench lineage)

Slot A2 (Confirmatory — ML evaluation / benchmarking):
  Standardized leaderboards and comparative evaluation infrastructure

Slot A3 (Confirmatory — AI safety / alignment evaluation):
  Safety-specific instruction following: refusals, policy compliance, harmful instruction

Slot A4 (Confirmatory — LLM-as-judge / automated evaluation):
  LLM-as-judge paradigm for automated instruction-following scoring

Slot A5 (Confirmatory — Constraint satisfaction / programmatic evaluation):
  Programmatic constraint verification and structured output scoring

Slot A6 (Confirmatory — HCI / human evaluation methodology):
  Human judgment-based evaluation methods, annotation protocols

Slot A7 (Confirmatory — Meta-evaluation / benchmark validity):
  Research on whether instruction-following benchmarks measure what they claim

Slot A8 (Confirmatory — Software engineering / behavioral specification):
  SE testing approaches: oracle problem, property-based testing, mutation testing

Slot A9 (Confirmatory — Practitioner / open-source tooling):
  Open-source frameworks and practitioner evaluation tools

Slot A10 (Confirmatory — Multi-turn / compositional instruction following):
  Evaluation methods for multi-step, multi-turn, and complex instructions

Slot A11 (Confirmatory — Adversarial robustness evaluation):
  Adversarial attacks that break instruction following as an evaluation signal

Slot N1 (Null-hypothesis):
  Evidence that instruction-following evaluations fail, do not generalize,
  or produce results that do not predict real-world behavior
  (Disconfirming variant of Tradition 1 — NLP alignment)

Slot D1 (Adversarial — FLAGGED):
  Starting vocabulary: organizational behavior / cognitive compliance
  NOT FROM: NLP alignment, ML benchmarking, HCI, safety, LLM-as-judge,
  constraint satisfaction, psychometrics, practitioner tooling, SE testing,
  multi-turn, adversarial robustness, philosophy of language

Slot C1 (Cross-disciplinary — Psychometrics / measurement theory):
  Tradition NOT in intake brief

Slot C2 (Cross-disciplinary — Philosophy of language / speech act theory):
  Tradition NOT in intake brief
```

Total allocated slots: 15 (A1–A11, N1, D1, C1, C2)

---

## FULL ANGLE LIST

---

### ANGLE N1: Evidence that instruction-following evaluations fail, do not generalize, or produce misleading results

```
Vocabulary tradition: NLP alignment / instruction tuning (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Documented conditions under which evaluation scores do not predict
  real-world instruction-following behavior; benchmark gaming or saturation evidence;
  evidence that LLM-as-judge is miscalibrated or systematically biased; negative
  results where models score high on benchmarks but fail in deployment; scope
  limitations of existing benchmarks; replication failures; evaluation gaps that
  allow models to "pass" while actually not following instructions

Source type (academic): arXiv cs.CL + cs.LG — explicitly check findings and
  limitations sections, not just abstracts; NeurIPS Datasets and Benchmarks track;
  ACL Anthology workshop proceedings (often more candid about failures)
Source type (practitioner): GitHub issues on evaluation frameworks (practitioner
  failure reports); Hacker News discussions on LLM benchmark gaming; post-mortem
  blog posts by practitioners deploying evaluation pipelines

Queries:
  Q1: instruction following benchmark limitations failure generalization LLM does not
    transfer evaluation negative result 2024 2025
  Q2: LLM benchmark gaming saturation evaluation unreliable instruction following
    negative result score inflation
  Q3: evaluation metric failure instruction following LLM misleading results deployment
    gap benchmark validity limitations
  Q4: instruction following evaluation does not predict real-world behavior deployment
    gap negative finding failure mode
  Q5: LLM judge miscalibration systematic bias instruction following evaluation failure
    evidence position verbosity

Coverage-gap note: Negative results are underreported in conference main tracks.
  Check workshop proceedings and paper limitations sections as primary sources,
  not just titles/abstracts. Practitioner failure reports on GitHub are often the
  first record of deployment gaps.
```

---

### ANGLE A1: Core instruction-following benchmarks from the NLP alignment tradition

```
Vocabulary tradition: NLP alignment / instruction tuning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Benchmark designs, scoring rubrics, what instruction types are
  covered (format, keyword, length, style, semantic), evaluation methodology,
  correlation with human judgments, dataset construction process, model comparison
  results, scope conditions stated by benchmark authors

Source type (academic): arXiv cs.CL + cs.LG (per platform-calibration.md — do NOT
  use cs.AI alone; use cs.CL + cs.LG combination)
Source type (practitioner): GitHub repositories for IFEval, FollowBench, InstructEval
  (filtered: ≥50 stars, ≥10 forks, active commit history); HuggingFace model cards
  citing instruction-following benchmarks

Queries:
  Q1: instruction following evaluation benchmark large language models 2023 2024 2025
    scoring methodology constraint verification
  Q2: IFEval instruction following evaluation LLM constraint verification programmatic
    scoring verifiable instruction
    [SPECIFICITY GATE APPLIED — IFEval is a proper noun; no query expansion]
  Q3: instruction-tuned language model evaluation suite behavioral compliance constraint
    satisfaction scoring rubric design
  Q4: FollowBench instruction following benchmark compositional constraint multi-level
    LLM evaluation
    [SPECIFICITY GATE APPLIED — FollowBench is a proper noun; no query expansion]
  Q5: LLM instruction adherence automated benchmark design scoring methodology
    instruction type taxonomy coverage

Coverage-gap note: This angle retrieves foundational benchmark papers but may miss
  follow-up work applying these benchmarks to newer model families. A citation-forward
  search from Zhou et al. 2023 (IFEval) via Semantic Scholar would supplement.
  Multi-turn instruction evaluation is split off to A10 to avoid scope collapse.
```

---

### ANGLE A2: Standardized leaderboards and comparative evaluation infrastructure

```
Vocabulary tradition: ML evaluation / benchmarking
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Leaderboard design decisions, metric choices (win rate vs. absolute
  score), model ranking stability, correlation across evaluation suites, update and
  versioning practices, evaluation infrastructure design, how instruction-following
  is operationalized within broader benchmarks

Source type (academic): arXiv cs.CL + cs.LG; NeurIPS Datasets and Benchmarks track
  proceedings; ACL Anthology
Source type (practitioner): HuggingFace Open LLM Leaderboard documentation and blog
  posts; Papers with Code evaluation tables; GitHub (most-starred evaluation repos,
  most-forked ordering)

Queries:
  Q1: AlpacaEval MT-Bench instruction following leaderboard model comparison evaluation
    methodology
    [SPECIFICITY GATE APPLIED — proper nouns; no expansion]
  Q2: open LLM leaderboard instruction following evaluation standardized comparison
    methodology 2024 2025
  Q3: chat model evaluation benchmark win rate preference automated comparison
    methodology design instruction quality
  Q4: instruction following benchmark suite design model ranking reproducibility
    stability metric selection
  Q5: LLM evaluation leaderboard metric selection bias instruction quality
    measurement validity cross-benchmark correlation

Coverage-gap note: Leaderboard papers rarely discuss benchmark invalidation or
  over-optimization in their primary framing. The meta-evaluation angle (A7) and
  null-hypothesis angle (N1) cover those aspects.
```

---

### ANGLE A3: Safety-specific instruction following — refusals, policy compliance, and alignment evaluation

```
Vocabulary tradition: AI safety / alignment evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Benchmarks for evaluating whether models correctly follow safety
  instructions (refuse harmful requests, adhere to content policies), evaluation
  methodology for measuring safety-instruction compliance, how safety alignment
  evaluation differs from general instruction following, false positive rates
  (over-refusal), false negative rates (under-refusal), adversarial safety probing
  as evaluation

Source type (academic): arXiv cs.CL + cs.LG + cs.CR; Anthropic and OpenAI safety
  research preprints; NeurIPS safety workshop proceedings
Source type (practitioner): Anthropic safety publications; OpenAI system card
  methodology; GitHub safety evaluation repositories (HELM safety subset,
  HarmBench); AI safety practitioner blogs

Queries:
  Q1: LLM safety evaluation instruction following refusal alignment benchmark
    policy compliance 2024 2025
  Q2: constitutional AI rule following evaluation compliance alignment instruction
    adherence benchmark
  Q3: harmful instruction following evaluation safety benchmark refusal detection
    false positive over-refusal measurement
  Q4: red-teaming evaluation safety instruction following alignment assessment
    methodology systematic

Coverage-gap note: This angle focuses on MEASURING safety instruction compliance,
  not on improving it. Extract evaluation designs and metrics; exclude papers where
  the primary contribution is a new alignment technique rather than an evaluation
  methodology.
```

---

### ANGLE A4: LLM-as-judge paradigm for automated instruction-following evaluation

```
Vocabulary tradition: LLM-as-judge / automated evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Judge model selection criteria, judge calibration methods, position
  bias and verbosity bias findings, correlation with human judgments, rubric design
  methodology, reference-free vs. reference-based evaluation tradeoffs, judge
  self-consistency, when LLM judges succeed vs. fail for instruction evaluation
  specifically

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub (MT-Bench judge code, most-starred judge
  implementation repos); Anthropic and OpenAI technical reports on evaluation
  methodology; LMSYS technical blog posts on Chatbot Arena methodology

Queries:
  Q1: LLM-as-judge automated evaluation instruction following scoring bias calibration
    2024 2025
  Q2: GPT-4 evaluator instruction following rubric reference-free scoring human
    correlation validity
    [SPECIFICITY GATE APPLIED — GPT-4 is a proper noun; narrow focus intended]
  Q3: judge LLM position bias verbosity bias instruction evaluation automated
    reliability miscalibration
  Q4: LLM judge agreement human evaluation instruction following correlation
    calibration study 2024 2025
  Q5: auto-evaluator instruction compliance rubric design scoring reliability
    reference-free evaluation methodology

Coverage-gap note: Judge self-consistency (evaluating the same response twice under
  identical conditions) is underexplored in this literature; queries may need
  expansion toward "judge reliability" or "judge consistency" if initial results
  are sparse. This angle is most likely to produce findings that intersect with
  the meta-evaluation angle (A7) regarding whether judge scores are valid measures.
```

---

### ANGLE A5: Programmatic constraint verification and structured-output scoring

```
Vocabulary tradition: Constraint satisfaction / programmatic evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Constraint decomposition taxonomies (format, keyword, length, style,
  content constraints), programmatic verifier designs, scoring granularity (binary
  vs. partial credit), coverage across constraint types, failure distributions by
  constraint category, how constraint-based scoring handles semantic vs. syntactic
  instructions

Source type (academic): arXiv cs.CL + cs.SE
Source type (practitioner): GitHub (IFEval implementation; evaluation harness
  constraint modules — ≥50 stars threshold applies); HuggingFace evaluation library
  documentation; practitioner blog posts on structured output evaluation

Queries:
  Q1: instruction following constraint verification programmatic evaluation format
    compliance LLM scoring 2024
  Q2: automatic evaluation LLM instruction decomposition constraint satisfaction
    scoring verifiable instruction programmatic check
  Q3: structured output evaluation format adherence constraint satisfaction language
    model scoring benchmark design
  Q4: instruction following constraint taxonomy keyword length format style
    programmatic verifier evaluation coverage

Coverage-gap note: Programmatic verification works well for explicit constraints
  (format, keyword presence) but poorly for implicit or stylistic instructions.
  Scope conditions on what constraint types are verifiable vs. require human
  judgment are a key extraction target.
```

---

### ANGLE A6: Human judgment and annotation methodology for instruction-following evaluation

```
Vocabulary tradition: HCI / human evaluation methodology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Annotation protocols specific to instruction following, inter-annotator
  agreement rates on instruction compliance judgments, crowdsourcing platform effects,
  pairwise vs. Likert-scale methodology tradeoffs, evaluator qualification effects
  on reliability, cost and scalability constraints, how human evaluators decompose
  "did this response follow the instruction?"

Source type (academic): arXiv cs.CL + cs.HC; ACL Anthology; CHI proceedings for
  human-subject evaluation methodology papers
Source type (practitioner): Scale AI and Surge AI technical documentation on
  instruction evaluation protocols; LMSYS Chatbot Arena annotator methodology;
  crowdsourcing practitioner guides

Queries:
  Q1: human evaluation instruction following LLM pairwise annotation methodology
    inter-annotator agreement reliability 2024
  Q2: crowdsourcing annotation language model instruction compliance inter-annotator
    agreement study protocol
  Q3: preference-based evaluation instruction quality human judges reliability
    validity annotation agreement study
  Q4: human evaluation LLM instruction following Likert scale pairwise methodology
    comparison annotator calibration

Coverage-gap note: Papers that evaluate overall response quality rather than
  instruction compliance specifically are out of scope. Extract papers that isolate
  instruction adherence as a distinct evaluation dimension with its own annotation
  protocol.
```

---

### ANGLE A7: Meta-evaluation — validity and reliability of instruction-following benchmarks

```
Vocabulary tradition: Meta-evaluation / benchmark validity
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Benchmark contamination evidence, correlation between different
  evaluation methods, reproducibility findings, saturation or over-optimization
  evidence, validity arguments for benchmark design choices, inter-benchmark
  agreement, benchmark update and maintenance practices, evidence that high benchmark
  scores reflect capability vs. artifacts

Source type (academic): arXiv cs.CL + cs.LG; NeurIPS Datasets and Benchmarks track
  (specifically relevant for this tradition); ACL Anthology
Source type (practitioner): Papers with Code benchmark critique posts; practitioner
  blog posts on benchmark validity; GitHub issue discussions on benchmark design
  (filter for substantive threads)

Queries:
  Q1: instruction following evaluation benchmark validity reliability meta-analysis
    LLM 2024 2025
  Q2: benchmark contamination data leakage instruction following LLM evaluation
    test set pollution
  Q3: LLM benchmark saturation over-optimization gaming evaluation metric
    instruction following score inflation
  Q4: evaluation metric validity instruction following LLM correlation human
    judgment cross-benchmark agreement
  Q5: leaderboard reliability instruction following LLM evaluation reproducibility
    benchmark update robustness

Coverage-gap note: This tradition overlaps thematically with the null-hypothesis
  angle (N1). Distinction: A7 targets methodological critique papers with
  constructive validity arguments; N1 targets empirical failure evidence (deployment
  gaps, negative results). Extract papers that propose improvements to benchmark
  design, not just those that document failures.
```

---

### ANGLE A8: Software engineering and behavioral specification testing approaches to LLM evaluation

```
Vocabulary tradition: Software engineering / behavioral specification
Angle type: Confirmatory
Predicted research character: consensus
What to extract: How SE testing concepts (oracle problem, mutation testing, property-
  based testing, behavioral conformance) have been applied to evaluating LLM
  instruction following; test specification frameworks for LLM behavior; coverage
  criteria for instruction-following test suites; how SE researchers frame the
  challenge of verifying that an LLM output satisfies a behavioral specification

Source type (academic): arXiv cs.SE + cs.CL; ICSE / FSE / ASE proceedings; IEEE
  Transactions on Software Engineering
Source type (practitioner): GitHub (testing libraries for LLM behavioral conformance,
  most-starred); technical blog posts from software testing practitioners who have
  applied their methods to LLM evaluation

Queries:
  Q1: language model behavioral specification testing oracle problem software
    engineering evaluation 2024
  Q2: LLM testing behavioral conformance software engineering test oracle automated
    evaluation specification
  Q3: property-based testing large language model instruction following specification
    formal behavioral test
  Q4: mutation testing LLM instruction following test oracle software engineering
    evaluation coverage behavioral

Coverage-gap note: SE research applying formal testing methods to LLMs is a nascent
  area (post-2022); earlier SE literature may use different vocabulary ("requirements
  conformance," "specification satisfaction"). Date filtering to 2022-2025 is
  recommended to capture the LLM-specific application.
```

---

### ANGLE A9: Practitioner open-source evaluation frameworks and tooling

```
Vocabulary tradition: Practitioner / open-source evaluation tooling
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Which frameworks are most widely adopted for instruction-following
  evaluation, what dimensions they cover, how they handle instruction compliance
  specifically, integration patterns, reported limitations in issues and documentation,
  how practitioners operationalize "instruction following" in production pipelines

Source type (academic): arXiv cs.CL (system papers and demos); EMNLP/ACL system
  demonstration track papers
Source type (practitioner): GitHub (most-starred LLM evaluation repos, filtered:
  ≥50 stars, ≥10 forks, active commit history within 6 months); HuggingFace blog;
  Weights & Biases evaluation reports; practitioner conference talks (MLOps)

Queries:
  Q1: open source LLM evaluation framework instruction following benchmark
    implementation design 2024 2025
  Q2: lm-evaluation-harness instruction following evaluation design implementation
    [SPECIFICITY GATE APPLIED — proper noun; no expansion]
  Q3: LLM evaluation toolkit instruction following production deployment framework
    comparison practitioner
  Q4: evaluation pipeline instruction adherence automated production practitioner
    tool design pattern

Coverage-gap note: Practitioner tooling evolves rapidly. GitHub search should filter
  for commits within the last 6 months to avoid outdated implementations. Issue
  threads are the primary source for failure-mode vocabulary not in academic papers
  (per platform-calibration.md GitHub guidance on vocabulary discovery use case).
```

---

### ANGLE A10: Evaluation methods for multi-turn and compositional instruction following

```
Vocabulary tradition: Multi-turn / compositional instruction following evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How multi-turn evaluation differs from single-turn (instruction
  accumulation, context tracking), benchmark designs for compositional multi-step
  instructions, metrics that handle instruction sequences across turns, failure modes
  specific to multi-turn settings (forgetting earlier instructions, conflicting
  instruction resolution), long-context instruction retention measurement

Source type (academic): arXiv cs.CL + cs.LG; ACL Anthology; EMNLP proceedings
Source type (practitioner): GitHub (MT-Bench multi-turn evaluation code;
  LMSYS Arena multi-turn logs); practitioner blog posts on conversational AI
  evaluation

Queries:
  Q1: multi-turn instruction following evaluation LLM conversation benchmark
    methodology 2024 2025
  Q2: compositional instruction following evaluation multi-step complex benchmark
    language model constraint accumulation
  Q3: long-context instruction following evaluation language model task
    decomposition retention benchmark design
  Q4: instruction retention multi-turn dialogue evaluation LLM conflicting
    instruction handling benchmark

Coverage-gap note: Multi-turn evaluation overlaps with the constraint satisfaction
  angle (A5) when multi-turn work frames instructions as constraint chains. Criterion
  for keeping in this angle: papers that treat the multi-turn dimension (instruction
  memory, turn tracking) as the primary evaluation challenge, not papers that apply
  constraint scoring to multi-turn settings incidentally.
```

---

### ANGLE A11: Adversarial robustness evaluation of instruction following

```
Vocabulary tradition: Adversarial NLP / robustness evaluation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Adversarial attack types that specifically cause models to deviate
  from instructions (as opposed to safety failures), robustness metrics for
  instruction following under adversarial conditions, prompt injection as an
  evaluation signal, jailbreaking framed as instruction override measurement,
  benchmark designs for adversarial instruction following robustness, failure
  distributions by attack type

Source type (academic): arXiv cs.CL + cs.CR (security/cryptography) + cs.LG
Source type (practitioner): AI security research blogs; GitHub repositories for
  adversarial LLM evaluation tools (most-starred); practitioner red-teaming
  tooling documentation

Queries:
  Q1: adversarial instruction following robustness evaluation LLM failure mode
    attack benchmark 2024 2025
  Q2: prompt injection instruction override detection evaluation benchmark language
    model adversarial
  Q3: jailbreak evaluation LLM instruction override inverse compliance measurement
    robustness adversarial
  Q4: adversarial examples instruction following failure LLM robustness benchmark
    attack taxonomy evaluation

Coverage-gap note: This angle focuses on adversarial attacks that cause instruction
  deviations; the AI safety angle (A3) covers safety-specific instruction violations
  (harmful content, policy non-compliance). The distinguishing criterion: A11 focuses
  on the adversarial ML research tradition (adversarial suffixes, injection attacks,
  distribution shift); A3 focuses on safety policy compliance evaluation.
```

---

### ANGLE D1: Measuring directive compliance in human agents — organizational behavior and cognitive psychology frameworks

```
Vocabulary tradition: Organizational behavior / cognitive compliance
Angle type: Adversarial
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior
confirmatory results]

Generating from: organizational behavior, cognitive psychology, behavioral
  measurement vocabulary
Excluded from generation prompt: instruction following, LLMs, language models,
  NLP, benchmarks, leaderboard, alignment, RLHF, constraint satisfaction,
  LLM-as-judge, automated evaluation, transformer, prompt, generative AI,
  machine learning evaluation, neural network

Predicted research character: empirical
What to extract: How organizational behavior and cognitive psychology measure
  rule-following and directive compliance in human subjects; reliability and
  validity frameworks used in behavioral compliance research; behavioral coding
  schemes for compliance assessment; methods for distinguishing intentional from
  unintentional non-compliance; scoring instruments for directive adherence;
  what dimensions of compliance are measured (literal, intended, contextual);
  measurement instruments whose design principles could transfer to AI evaluation

Source type (academic): PsycINFO; Journal of Applied Psychology; Organizational
  Behavior and Human Decision Processes; Cognitive Psychology; Journal of
  Experimental Psychology: General
Source type (practitioner): Industrial-organizational psychology practitioner
  resources; military/aviation procedural compliance literature; clinical
  protocol adherence assessment methodology

Queries:
  Q1: rule compliance measurement behavioral assessment reliability validity
    organizational agents procedural adherence scoring 2020 2024
  Q2: directive following instruction comprehension assessment cognitive measure
    reliability compliance behavior scoring instrument
  Q3: task instruction compliance behavioral measure reliability human performance
    scoring methodology construct validity

Coverage-gap note: This tradition uses vocabulary that does not naturally retrieve
  AI or NLP papers. The adversarial value is: (a) vocabulary that NLP researchers
  would not find by searching their own literature; (b) measurement methodology
  from a discipline that has extensively studied what "following instructions"
  means behaviorally and how to measure it reliably. The adversarial angle closes
  only when the downstream research agent has read retrieved papers WITHOUT prior
  exposure to the confirmatory angle findings.
```

---

### ANGLE C1: Psychometric theory applied to LLM evaluation benchmark design

```
Vocabulary tradition: Psychometrics / measurement theory
  [CROSS-DISCIPLINARY — this tradition was NOT in the intake brief's candidate list]
Angle type: Cross-disciplinary
Predicted research character: consensus
What to extract: Construct validity frameworks applicable to LLM benchmarks (does
  a benchmark measure what it claims?), item response theory as a model for
  benchmark item difficulty calibration, test reliability concepts (Cronbach's
  alpha analog for benchmark consistency), criterion validity (do benchmark scores
  predict real-world performance?), generalizability theory applied to evaluation
  design, adaptive testing principles applicable to evaluation efficiency,
  bridge papers that explicitly apply psychometric concepts to AI evaluation

Source type (academic): Educational and Psychological Measurement; Psychometrika;
  Applied Psychological Measurement; arXiv cs.CL papers explicitly citing
  psychometric methods (search via Semantic Scholar forward-citation from
  psychometric foundational papers); NeurIPS Datasets and Benchmarks workshop
Source type (practitioner): AI evaluation papers borrowing psychometric vocabulary
  (search GitHub for "IRT LLM evaluation," "item response theory benchmark");
  R psych package documentation as a source for psychometric method vocabulary

Queries:
  Q1: psychometric validity reliability construct measurement AI evaluation
    benchmark language model 2023 2024 2025
  Q2: item response theory LLM benchmark evaluation construct validity AI
    measurement psychometric framework
  Q3: psychometrics AI evaluation reliability validity measurement cognitive
    testing application benchmark design
  Q4: construct validity benchmark LLM capability evaluation measurement
    criterion validity generalizability theory

Coverage-gap note: The translation from psychometrics to LLM evaluation is nascent;
  most papers will be one-directional — psychometrics papers unaware of LLM problems,
  LLM evaluation papers unaware of psychometrics vocabulary. Bridge papers at AI
  evaluation workshops (NeurIPS, EMNLP evaluation tracks) are the primary target.
  Semantic Scholar citation-network search from Lord & Novick (1968) or Cronbach
  (1951) forward into AI evaluation would find any existing bridges.
```

---

### ANGLE C2: Speech act theory and instruction semantics — philosophical foundations of instruction compliance criteria

```
Vocabulary tradition: Philosophy of language / speech act theory
  [CROSS-DISCIPLINARY — this tradition was NOT in the intake brief's candidate list]
Angle type: Cross-disciplinary
Predicted research character: gap
  (minimal AI evaluation literature from this framing; purpose is to document
  absence and surface any existing bridge papers)
What to extract: Speech act theory treatments of directive illocutionary acts;
  felicity conditions for instruction satisfaction; propositional content
  conditions for compliance (what does it mean for an instruction to be
  "followed"?); distinction between literal and intended compliance; any papers
  that apply philosophy of language to AI instruction evaluation criteria; whether
  evaluation benchmarks implicitly assume a satisfaction criterion and what that
  criterion is

Source type (academic): Journal of Pragmatics; Linguistics and Philosophy; Mind
  & Language; arXiv cs.CL papers with "speech act" or "illocutionary" in title
Source type (practitioner): AI alignment researcher blog posts that engage with
  philosophy of language; LessWrong discussions on instruction interpretation
  and intended compliance (vocabulary discovery use case)

Queries:
  Q1: speech act theory directive compliance language model instruction following
    satisfaction condition 2023 2024
  Q2: illocutionary act imperative satisfaction language model evaluation
    instruction criterion
  Q3: philosophy of language instruction semantics AI command following
    literal intended compliance evaluation

Coverage-gap note: This angle is predicted as a gap — expected to return minimal
  literature. Its function is to (a) document that the philosophical foundations
  of instruction compliance criteria are undertheorized in NLP evaluation; (b)
  surface any bridge papers that do exist. If retrieval returns <5 papers, log
  the absence as a finding. This tradition cannot be merged with the organizational
  behavior tradition (D1) even though both address "what following an instruction
  means" — they have entirely different publication venues and methodology.
```

---

## GATE SUMMARY

```
GATE SUMMARY
============

Gate 1 — Completeness: PASS
  - Null-hypothesis angle present: YES — N1 is explicitly framed as disconfirming;
    query strings contain: "failure," "does not transfer," "negative result,"
    "misleading results," "does not predict real-world behavior," "miscalibration."
    N1 is structurally distinct from A7 (meta-evaluation): A7 targets constructive
    validity critique; N1 targets empirical failure and deployment gap evidence.
  - Adversarial angle present: YES — D1 carries label
    [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior
    confirmatory results] with excluded vocabulary listed explicitly.
  - Cross-disciplinary angle present: YES — C1 (Psychometrics / measurement theory)
    and C2 (Philosophy of language / speech act theory) are both confirmed NOT in
    the intake brief's candidate vocabulary traditions list. Two cross-disciplinary
    slots exceed the minimum requirement of one.
  - Source-type coverage: YES — domain classified as mixed; practitioner sources
    (GitHub, HuggingFace, technical blogs) appear in A1, A2, A3, A4, A5, A6, A7,
    A8, A9, A10, A11, N1. PASS.
  - Vocabulary-tradition map populated: YES — 11 traditions in intake brief (all
    with angle slots); 2 new cross-disciplinary traditions (psychometrics,
    philosophy of language); 1 adversarial tradition (organizational behavior).
    Total: 14 distinct vocabulary traditions across 15 angles. PASS.

Gate 2 — Distinctness: PASS
  Pairwise checks performed on candidate-overlap pairs:
  - A1 (NLP alignment benchmarks) vs. A7 (meta-evaluation): PASS — A1 retrieves
    benchmark construction papers; A7 retrieves validity critique papers. Shared
    topic domain but different questions: "how are benchmarks built" vs. "are they
    valid." Key distinctive terms: A7 uses "contamination," "saturation,"
    "reproducibility," "leakage" — absent from A1.
  - A3 (AI safety evaluation) vs. A11 (adversarial robustness): PASS — A3 retrieves
    safety-specific refusal/policy compliance papers; A11 retrieves adversarial ML
    attack papers (prompt injection, adversarial suffix). Distinctive terms:
    A3 uses "constitutional AI," "harmful instruction," "over-refusal"; A11 uses
    "adversarial suffix," "prompt injection," "jailbreak framed as instruction
    override." Different venues: A3 is safety track; A11 is security/robustness
    track.
  - A4 (LLM-as-judge) vs. A6 (human evaluation): PASS — explicitly contrasting
    evaluation paradigms with different vocabulary. A4: "judge calibration,"
    "position bias," "reference-free"; A6: "inter-annotator agreement,"
    "crowdsourcing," "Likert scale," "annotation protocol."
  - A5 (programmatic constraint) vs. A10 (multi-turn): PARTIAL OVERLAP — noted in
    A10 coverage-gap note. Boolean-connective test: "constraint verification
    programmatic format keyword" OR "multi-turn conversation instruction retention
    dialogue" — different document sets in practice (different primary keywords).
    PASS — but flag for human review during extraction.
  - N1 (null-hypothesis) vs. A7 (meta-evaluation): Addressed above in Gate 1 note.
    PASS — different vocabulary and retrieval targets.
  - C1 (psychometrics) vs. D1 (organizational behavior): These target adjacent
    literatures. Distinctive terms: C1 uses "item response theory," "Cronbach's
    alpha," "test-retest reliability," "IRT," "Psychometrika"; D1 uses "procedural
    adherence," "behavioral coding," "organizational agents," "cognitive compliance."
    Different source databases (PsycINFO broadly vs. educational measurement journals
    specifically). Boolean-connective test: PASS — would retrieve different papers.
  - C2 (philosophy of language) vs. D1 (organizational behavior): PASS — entirely
    different vocabulary and publication venues (linguistics/philosophy vs.
    organizational psychology). No retrieval overlap expected.
  Vocabulary-tradition distinctness: Each angle has a distinct tradition label
    except N1, which shares NLP alignment with A1 as an explicitly permitted
    null-hypothesis variant. PASS.

Gate 3 — Launchability: PASS
  - All 15 angles contain at least one concrete, directly pasteable query string.
  - No placeholder vocabulary ("TBD," "to be determined," "[fill in]") found in
    any query string.
  - All source type fields name specific platforms (arXiv cs.CL + cs.LG, GitHub,
    PsycINFO, HuggingFace, ACL Anthology, specific journal names, etc.). PASS.

Gate 4 — Scoring prohibition: PASS
  - No angle is ranked or filtered by "most promising," "most relevant," or
    "most likely to yield results."
  - No implicit quality assertions present ("this is the strongest angle,"
    "this angle is likely most useful").
  - Structural criteria used throughout for type allocation: vocabulary-tradition
    coverage, source-type coverage, null-hypothesis presence, Boolean-connective
    distinctness. PASS.

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all vocabulary traditions enumerated by LLM only
     (Source B unavailable in subagent context). A survey-paper probe from a known
     anchor paper (e.g., Zhou et al. 2023 IFEval, or a 2024 survey on LLM evaluation)
     is recommended before accepting the tradition list as complete. Expected coverage:
     MODERATE, not FULL. Candidate missing traditions: cross-lingual instruction
     following evaluation; educational AI / tutoring system evaluation; operations
     research task specification.
  2. A5/A10 partial overlap — programmatic constraint evaluation and multi-turn
     evaluation share a conceptual boundary. Boolean-connective test passes on
     query vocabulary, but human review during extraction is recommended to catch
     papers that appear in both angle retrievals. Merge candidates, not angle
     revision candidates.
  3. C2 (philosophy of language) is predicted as a gap angle with expected <5
     papers. This is not a failure condition — documenting absence of this framing
     in the NLP literature is a valid research finding. Human reviewer should decide
     whether to saturate this angle quickly (2-3 queries) or hold for later.
  4. D1 context enforcement — the ADVERSARIAL-FLAGGED label records the structural
     separation requirement but does not enforce it at execution time. The downstream
     research agent must honor the label by running D1 in a context without prior
     exposure to A1-A11 findings (per weakness_register.md Weakness 6).
  5. arXiv category rule applied throughout: cs.CL + cs.LG used for LLM topics
     per platform-calibration.md override. cs.AI alone was avoided. Human reviewer
     should verify that angle A8 (SE testing) queries against cs.SE are being
     executed, as this is a non-standard category for LLM evaluation work.
```

---

## AFTER-EVERY-TASK SELF-CHECK (Rule 6, CLAUDE.md)

What is missing, incomplete, or questionable in this output:

1. **Source B gap is structural.** The survey-paper probe was unavailable in this
   subagent context. A pearl-growing pass from Zhou et al. 2023 (IFEval) or from
   a 2024 LLM evaluation survey would reveal vocabulary traditions not accessible
   to LLM self-report. Candidate missing traditions: cross-lingual instruction
   following evaluation (non-English benchmarks), operations research (formal task
   specification), educational AI / tutoring system instruction following.

2. **C2 gap-angle risk.** The philosophy of language angle (C2) is predicted as a
   gap. If it consistently returns <3 papers, it may not be worth dispatching as
   an independent research angle. A human decision on whether to fold it into C1
   (psychometrics) or treat it as a rapid-saturation probe is needed.

3. **15 angles may exceed downstream agent capacity** if run sequentially in a
   single research session. Recommended batching order: (1) N1 first (null-
   hypothesis — set failure expectations before confirmatory search); (2) A1-A5
   (core literature); (3) A6-A11 (extended traditions); (4) D1 in a separate
   context; (5) C1-C2 last as gap probes.

Angle list is ready for dispatch subject to the human-judgment flags above.
```
