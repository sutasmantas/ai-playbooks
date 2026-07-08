# Angle Generation Output — Input 13, Condition B

**Topic:** Prompt engineering techniques that work reliably in production systems
**Kit files read:** CLAUDE.md, intake.md, angle-generation.md, angle-quality.md, weakness_register.md, platform-calibration.md
**Execution context:** Subagent — Source B (web search / survey-paper probe) UNAVAILABLE
**Date:** 2026-07-05

---

## Multi-task enumeration (per CLAUDE.md multi-task tracking rule)

Tasks in this session, in order:
1. intake.md Steps 1–5 (sparse-input parsing, vocabulary bootstrap, question-type classification, brief population, fallback protocol)
2. intake.md Step 6 — intake gate check
3. angle-generation.md Step 0 — coverage map
4. angle-generation.md Step 1 — type allocations
5. angle-generation.md Steps 2–4 — coverage-gap conditioned generation + source types + queries
6. angle-quality.md Gates 1–4
7. Write full output to file (this document)

All tasks are addressed before reporting done.

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: Prompt engineering techniques that are effective and reliable in production LLM
deployments — not just research benchmarks; specifically where robustness and
generalization under real-world conditions are the success criterion.

Anchor vocabulary:
  "prompt engineering" — NLP / ML research tradition
  "reliably" — reliability engineering / systems tradition
  "production systems" — ML engineering / software engineering tradition

Candidate vocabulary traditions:
  1. NLP / ML research — chain-of-thought, few-shot learning, in-context learning,
     instruction tuning, meta-prompting, zero-shot, output constraints, structured
     prompting, prompt templates
  2. ML engineering / LLMOps — production deployment, LLMOps, MLOps, inference
     pipeline, prompt versioning, A/B testing prompts, prompt monitoring, latency,
     cost optimization, prompt management
  3. Software reliability engineering — robustness, fault tolerance, graceful
     degradation, consistency, reproducibility, prompt sensitivity, regression testing,
     failure mode analysis
  4. Automatic prompt optimization / program synthesis — DSPy, OPRO, APE, gradient-free
     prompt search, automatic prompt engineer, prompt tuning (soft vs. discrete),
     black-box optimization of prompts
  5. Prompt security / adversarial ML — prompt injection, jailbreaks, red-teaming,
     adversarial prompting, input validation, prompt hardening
  6. Cognitive science / linguistics — natural language instruction design, directive
     formulation, instruction comprehension, command specificity, natural language
     understanding

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot
  enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing
  from a known anchor paper) is recommended before accepting the angle list as covering
  all traditions.

Question type: EXPLORATORY
  Basis: No explicit comparison or intervention-outcome structure in the prompt.
  "Which techniques work reliably" is a scope question — what exists and what works —
  not a structured "does A outperform B" comparison. PICO is NOT applied at intake.

Scope markers:
  - "reliably" constrains the topic toward robustness and generalization, NOT peak
    benchmark performance. Techniques that only work on specific benchmarks are
    de-prioritized.
  - "production systems" constrains toward real-world deployed contexts, NOT research-
    only settings. Techniques that fail outside lab conditions are in-scope as negative
    evidence.
  - Inferred exclusion: techniques with strong benchmark results but no evidence of
    production deployment are lower priority.

Known exclusions: None explicitly stated by user.

Domain maturity estimate: MIXED
  Basis: "prompt engineering" has substantial academic literature on arXiv (NLP venues,
  cs.CL, cs.LG). "Production systems" framing strongly suggests practitioner-heavy
  content — engineering blogs, GitHub repos, LLMOps tooling. Both author populations
  are actively producing relevant content. Neither academic nor practitioner dominates.

Survey paper status: UNAVAILABLE — Source B unavailable in subagent context.
  Source B status: UNAVAILABLE — MODERATE
  Severity assessment: Source A + Source C together identified ≥4 distinct vocabulary
  traditions (NLP/ML research, ML engineering, reliability engineering, prompt security,
  cognitive science/linguistics). Proceeding; VOCABULARY SELF-REPORT FLAG applied
  throughout.

Absent-term signals (Source C — what the field uses that the user did NOT say):
  - "few-shot" / "chain-of-thought" — specific technique names
  - "LLMOps" — practitioner framing for production deployment
  - "prompt injection" / "jailbreak" — security/adversarial framing entirely absent
  - "consistency" / "variance" — reliability metrics absent
  - "evaluation" / "benchmark" — how reliability is measured absent
  - "prompt versioning" / "prompt management" — engineering discipline absent
  - "DSPy" / "OPRO" — automatic optimization sub-field absent
  These absences confirm the user's framing entered from a general engineering concern,
  not from any single sub-field's vocabulary.
```

---

## INTAKE GATE CHECK

- [x] Topic field is populated (not "TBD")
- [x] Candidate vocabulary traditions has ≥2 entries (6 traditions identified)
- [x] Question type is classified (EXPLORATORY)

All three gate conditions pass. Proceeding to angle-generation.md.

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: NLP / ML research
  Representative terms: chain-of-thought, few-shot, in-context learning, instruction
    tuning, meta-prompting, structured output, prompt templates
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: ML engineering / LLMOps
  Representative terms: LLMOps, production deployment, prompt versioning, A/B testing,
    inference pipeline, prompt monitoring, latency
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: Software reliability engineering
  Representative terms: robustness, fault tolerance, consistency, reproducibility,
    sensitivity analysis, regression testing, fault injection
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: Automatic prompt optimization
  Representative terms: DSPy, OPRO, APE, gradient-free optimization, automatic prompt
    engineer, black-box prompt search
  Planned angle slot: Confirmatory A4
  Gap flag: No

Tradition 5: Cognitive science / linguistics
  Representative terms: natural language instruction design, directive formulation,
    instruction comprehension, command specificity
  Planned angle slot: Confirmatory A5
  Gap flag: No

Tradition 6: Prompt security / adversarial ML
  Representative terms: prompt injection, jailbreaks, red-teaming, adversarial prompting,
    input validation, prompt hardening
  Planned angle slot: Adversarial D1 — ADVERSARIAL-FLAGGED
  Gap flag: No

Null-hypothesis slot:
  Assigned as N1 — disconfirming variant of Tradition 1 (NLP/ML research)
  Query framing: "What evidence shows prompt engineering techniques do NOT generalize
    or DO fail in production contexts?"

Traditions NOT yet represented in the planned list:
  All traditions from intake brief have at least one angle slot.

Cross-disciplinary slots (traditions NOT in the intake brief):
  Target tradition C1: Human factors / usability engineering
    Basis: Prompt engineering is a human-system interface design problem. Human factors
    research has studied error-resistant procedure design, operator instruction compliance,
    and checklist effectiveness in safety-critical contexts. This tradition was entirely
    absent from the user's framing and is not in the intake brief.
  Target tradition C2: Information retrieval / query formulation
    Basis: Prompt formulation shares structure with query formulation in IR systems.
    IR research has studied vocabulary mismatch, query expansion, and query effectiveness
    for decades — directly relevant to the vocabulary gap problem in prompt engineering.
    Not in the intake brief.
  Target tradition C3: Educational instructional design
    Basis: Instructional design research specifically studies how instructions must be
    structured to be reliably followed. The cognitive load and clarity literature applies
    directly to prompt formulation principles. Not in the intake brief.

VOCABULARY SELF-REPORT FLAG: All traditions were enumerated by LLM only (Source B
unavailable). External validation via survey-paper probe is recommended before accepting
this coverage map as complete.
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — NLP/ML research):
  Tradition: NLP / ML research
  Focus: Specific established techniques — CoT, few-shot, structured output, prompt
    templates — with evidence of reliable performance

Slot A2 (Confirmatory — ML engineering/LLMOps):
  Tradition: ML engineering / LLMOps
  Focus: Production engineering practices — prompt versioning, monitoring, A/B testing,
    change management for prompts

Slot A3 (Confirmatory — Software reliability engineering):
  Tradition: Software reliability engineering
  Focus: Systematic reliability testing of prompts — sensitivity analysis, consistency
    measurement, fault injection, regression testing

Slot A4 (Confirmatory — Automatic prompt optimization):
  Tradition: Automatic prompt optimization
  Focus: Computational methods for discovering reliable prompts — DSPy, OPRO, APE,
    gradient-free search

Slot A5 (Confirmatory — Cognitive science/linguistics):
  Tradition: Cognitive science / linguistics
  Focus: Linguistic and cognitive factors that make prompts reliably followed —
    instruction clarity, specificity, formulation effects

Slot N1 (Null-hypothesis):
  Tradition: NLP/ML research — disconfirming variant
  Framing: What evidence shows prompt engineering techniques do NOT generalize to
    production, or fail across models/tasks?

Slot D1 (Adversarial — Prompt security/adversarial ML):
  Tradition: Prompt security / adversarial ML
  NOT FROM: NLP/ML research vocabulary, LLMOps vocabulary, reliability engineering
    vocabulary, automatic optimization vocabulary, cognitive science vocabulary
  Label: ADVERSARIAL-FLAGGED

Slot C1 (Cross-disciplinary — Human factors/usability):
  Tradition: Human factors / usability engineering (NOT in intake brief)

Slot C2 (Cross-disciplinary — Information retrieval):
  Tradition: Information retrieval / query formulation (NOT in intake brief)

Slot C3 (Cross-disciplinary — Educational instructional design):
  Tradition: Educational instructional design (NOT in intake brief)

Total slots: 10 angles (within 5–12 standard range; domain maturity = MIXED justifies
upper range; 3 cross-disciplinary slots justified by breadth of adjacent disciplines)
```

---

## ANGLE LIST

---

### ANGLE 1: Core Prompting Technique Efficacy in Deployment Contexts
```
ANGLE 1: Core Prompting Technique Efficacy in Deployment Contexts
===========
Vocabulary tradition: NLP / ML research
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Effect sizes for specific techniques (chain-of-thought, few-shot,
  structured output), scope conditions under which results hold, evidence of
  cross-task and cross-model generalization, failure boundary descriptions where
  provided; prefer papers with production or near-production evaluation

Source type (academic): arXiv cs.CL + cs.LG
  (platform-calibration.md override applied: cs.AI alone undercovers ~65% of LLM
  literature; cs.CL + cs.LG recovers ~80%)
Source type (practitioner): GitHub — prompt engineering evaluation repositories,
  PromptBench, HELM, LLM evaluation frameworks with star count ≥50 and active commits

Queries:
  Q1: chain-of-thought prompting generalization cross-task reliability empirical 2024 2025
    (Facet: CoT technique generalization evidence)
  Q2: few-shot prompting production deployment consistency across models evaluation
    (Facet: few-shot robustness across model families)
  Q3: structured output prompting LLM compliance rate production schema adherence
    (Facet: output format/schema reliability — distinct from reasoning reliability)

Coverage-gap note: This angle does not cover meta-prompting or dynamic prompt
  construction at runtime, which may have distinct reliability properties. A follow-up
  angle on adaptive/dynamic prompting may be warranted if the literature is substantial.
```

---

### ANGLE 2: Production Engineering Practices for Prompt Management
```
ANGLE 2: Production Engineering Practices for Prompt Management
===========
Vocabulary tradition: ML engineering / LLMOps
Angle type: Confirmatory
Predicted research character: consensus
  (practitioner-heavy area; expect guides, blog posts, engineering reports, and
  GitHub tooling rather than controlled studies)
What to extract: Documented engineering patterns — versioning, monitoring, A/B testing
  methodology, change management practices; practitioner-reported failure modes;
  tools used in production; evidence of which practices reduce regression rates

Source type (academic): arXiv cs.LG (MLOps, ML systems)
Source type (practitioner): GitHub (LLMOps frameworks: LangChain, LlamaIndex, PromptFlow,
  Weave, etc.; filter: ≥50 stars, active commits); practitioner engineering blogs
  (Chip Huyen's blog, Hamel Husain's blog, Eugene Yan's writing — search by author)

Queries:
  Q1: LLMOps prompt management production deployment engineering practices 2024 2025
    (Facet: end-to-end prompt lifecycle management)
  Q2: prompt versioning monitoring A/B testing language models production system
    (Facet: change management and evaluation workflow for prompts)
  Q3: prompt regression testing observability production LLM application
    (Facet: detecting prompt degradation after model updates or prompt changes)

Coverage-gap note: "Prompt management" tooling is evolving rapidly; this angle may
  saturate at practitioner blogs and GitHub READMEs before academic literature catches
  up. Gap year (2024–2025) is the priority range.
```

---

### ANGLE 3: Reliability and Robustness Testing of Prompts
```
ANGLE 3: Reliability and Robustness Testing of Prompts
===========
Vocabulary tradition: Software reliability engineering
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for systematically testing prompt robustness — sensitivity
  analysis, variance measurement, fault injection; empirical measurements of output
  consistency under paraphrase/perturbation of prompts; metrics used to quantify
  reliability; evidence that specific prompt properties reduce variance

Source type (academic): arXiv cs.LG + cs.SE
  (cs.SE for software engineering perspective on LLM testing)
Source type (practitioner): GitHub — prompt testing and evaluation toolkits; Stack
  Overflow/Stack Exchange for practitioner failure mode vocabulary

Queries:
  Q1: prompt sensitivity analysis output variance large language model empirical
    (Facet: measuring how much prompt wording affects output quality)
  Q2: LLM output consistency robustness prompt perturbation paraphrase evaluation
    (Facet: consistency across semantically equivalent prompt variants)
  Q3: prompt regression testing language model production quality assurance
    (Facet: engineering discipline for catching prompt quality degradation)

Coverage-gap note: This angle does not cover reliability at the inference-parameter
  level (temperature, top-p). That is a system configuration angle distinct from
  prompt-text engineering and should be tracked separately if scope expands.
```

---

### ANGLE 4: Automatic Prompt Optimization for Production-Grade Reliability
```
ANGLE 4: Automatic Prompt Optimization for Production-Grade Reliability
===========
Vocabulary tradition: Automatic prompt optimization / program synthesis for LLMs
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence that automatically optimized prompts outperform manually
  engineered ones in production-like conditions; generalization of optimized prompts
  across tasks and models; which optimization methods (DSPy, OPRO, APE, etc.) produce
  most transferable results; cost/efficiency tradeoffs

Source type (academic): arXiv cs.CL + cs.LG
  (DSPy paper: cs.LG; OPRO: cs.LG; APE: cs.CL — use both categories)
Source type (practitioner): GitHub — DSPy repository (≥1000 stars, active), OPRO
  repository, automatic prompt optimization toolkits; GitHub issues for documented
  failure modes

Queries:
  Q1: automatic prompt optimization production deployment generalization DSPy OPRO 2024 2025
    (Facet: transfer of auto-optimized prompts to production)
  Q2: gradient-free prompt search black-box optimization language model reliability
    (Facet: optimization methods that don't require gradient access)
  Q3: APE automatic prompt engineer evaluation cross-task robustness
    (Facet: APE specifically and its generalization record)

Coverage-gap note: This angle covers discrete prompt optimization but not soft prompt
  tuning (continuous embeddings), which requires model access and is arguably a
  different engineering paradigm. Scope split may be needed if soft tuning has
  substantial production evidence.
```

---

### ANGLE 5: Linguistic and Cognitive Factors in Reliable Instruction Formulation
```
ANGLE 5: Linguistic and Cognitive Factors in Reliable Instruction Formulation
===========
Vocabulary tradition: Cognitive science / linguistics
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Studies on how linguistic properties of prompts affect instruction
  following — specificity, directness, example inclusion, constraint clarity; cognitive
  science framing of LLM instruction comprehension; empirical measurements of wording
  effects on output quality; any principled vocabulary for what makes an instruction
  "clear"

Source type (academic): arXiv cs.CL; cognitive science journals (Cognitive Science,
  Psychological Science — for human communication-instruction research that may
  transfer); ACL/EMNLP proceedings
Source type (practitioner): deprioritized — this is academic-heavy within the
  broader mixed domain; minimal practitioner production on the cognitive science angle

Queries:
  Q1: prompt wording instruction specificity language model output quality empirical
    (Facet: linguistic properties of prompt text and their effect on output)
  Q2: natural language instruction clarity large language model comprehension following
    (Facet: instruction comprehension from a language understanding perspective)
  Q3: directive formulation ambiguity resolution LLM prompt engineering principles
    (Facet: how ambiguity and underspecification in prompts produce unreliable outputs)

Coverage-gap note: The literature on cognitive science of LLM instruction following
  is thin — this angle may return limited results. Predicted research character
  updated to GAP risk: expect some empirical papers on wording effects but a thin
  principled cognitive science literature.
```

---

### ANGLE 6: Evidence That Prompt Engineering Techniques Fail to Generalize (Null-Hypothesis)
```
ANGLE 6: Evidence That Prompt Engineering Techniques Fail to Generalize
===========
Vocabulary tradition: NLP / ML research — disconfirming variant
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Documented cases where widely-cited techniques (chain-of-thought,
  few-shot) failed to replicate across models, tasks, or deployment conditions;
  negative results; scope conditions under which techniques degrade; production
  post-mortems; evidence of cross-model brittleness; replication failures

Source type (academic): arXiv cs.CL + cs.LG
  (date filter to 2023–2025: negative results in prompt engineering are relatively
  recent as production deployments matured)
Source type (practitioner): GitHub issues on major prompting frameworks (LangChain,
  LlamaIndex) — issue threads documenting production failures; practitioner
  post-mortems (search for "what we learned" + LLM + production in engineering blogs)

Queries:
  Q1: prompt engineering failure generalization production deployment negative results
    limitations 2024 2025
    (Facet: explicit negative results or limitation studies)
  Q2: chain-of-thought prompting does not generalize cross-model brittleness failure
    (Facet: CoT-specific failure evidence)
  Q3: LLM prompt robustness replication failure cross-task inconsistency empirical study
    (Facet: empirical evidence of inconsistency or non-replication)

Coverage-gap note: Negative results are systematically under-published. This angle
  is expected to return fewer papers than confirmatory angles. Absence of papers here
  does not indicate absence of failures — it may indicate publication bias. This
  interpretation should be stated explicitly in the research synthesis.
```

---

### ANGLE 7: Adversarial Reliability — Prompt Security and Attack Surface
```
ANGLE 7: Adversarial Reliability — Prompt Security and Attack Surface
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory
results. Do not run this angle in the same session as Angles 1–6.]

Vocabulary tradition: Prompt security / adversarial ML
Angle type: Adversarial-FLAGGED
Predicted research character: empirical
What to extract: Evidence of adversarial attack surfaces that undermine prompt
  engineering reliability in production — prompt injection, jailbreaks, adversarial
  inputs that defeat system prompts; documented defenses; evidence that "reliable"
  prompt engineering can be systematically defeated; production-level attack patterns

Generation note: Generated from prompt security / adversarial ML vocabulary.
EXCLUDING these terms from generation (used in prior confirmatory slots):
  chain-of-thought, few-shot, in-context learning, LLMOps, monitoring, versioning,
  robustness testing, sensitivity analysis, DSPy, OPRO, instruction clarity,
  directive formulation

Source type (academic): arXiv cs.CR + cs.CL
  (cs.CR for security framing; cs.CL for LLM mechanism)
Source type (practitioner): GitHub — red-teaming tools (Garak, PyRIT), adversarial
  prompt datasets; security-focused practitioner reports; Hugging Face datasets for
  adversarial prompts

Queries:
  Q1: prompt injection attack production LLM system defense reliability failure 2024 2025
    (Facet: prompt injection as a production reliability threat)
  Q2: jailbreak resistance hardening system prompt deployed language model application
    (Facet: jailbreak as a defeat of intended prompt engineering)
  Q3: adversarial prompt attack surface LLM production robustness security evaluation
    (Facet: systematic characterization of adversarial attack surfaces)

Coverage-gap note: This angle targets adversarial-by-intent failures. It does not
  cover inadvertent adversarial inputs (user inputs that break prompt engineering
  without malicious intent) — that failure mode may appear in Angle 3 or Angle 6.
```

---

### ANGLE 8: Error-Resistant Procedure Design — Human Factors and Usability Engineering
```
ANGLE 8: Error-Resistant Procedure Design — Human Factors and Usability Engineering
===========
Vocabulary tradition: Human factors / usability engineering (NOT in intake brief)
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: Principles from human factors research on writing error-resistant
  procedural instructions — operator checklists, alarm management, procedure design
  for nuclear/aviation contexts; empirical evidence on which instruction properties
  reduce compliance failures; transfer implications for LLM prompt design

Generating from human factors vocabulary, NOT from the user's NLP/ML engineering
framing. Key vocabulary: procedure design, operator compliance, error-resistant
instructions, checklist design, cognitive ergonomics, task analysis.

Source type (academic): ACM CHI proceedings; Human Factors (journal); Ergonomics
  (journal); IEA proceedings; Semantic Scholar for cross-field citation search
Source type (practitioner): deprioritized for this cross-disciplinary angle —
  human factors practitioners publish in specialist venues, not general engineering blogs

Queries:
  Q1: error-resistant procedure design operator instruction compliance human factors
    reliability safety-critical
    (Facet: safety-critical domain research on instruction design)
  Q2: checklist design effectiveness compliance procedure following human performance
    (Facet: checklists as a procedural reliability mechanism — transfer potential)
  Q3: cognitive ergonomics instruction complexity task compliance accuracy operator
    (Facet: cognitive load and instruction comprehensibility effects on compliance)

Coverage-gap note: Transfer from human-operator contexts to LLM contexts is not
  established in the literature — this angle surfaces principles that would need
  explicit transfer validation. Treat as hypothesis-generating, not confirmatory.
```

---

### ANGLE 9: Query Formulation Research and Vocabulary Gap Effects
```
ANGLE 9: Query Formulation Research and Vocabulary Gap Effects
===========
Vocabulary tradition: Information retrieval / query formulation (NOT in intake brief)
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: IR research on how query formulation affects retrieval success;
  vocabulary gap / vocabulary mismatch findings and mechanisms; query expansion
  research and its applicability to prompt construction; evidence that formulation
  diversity improves coverage; any work explicitly connecting IR query design to
  LLM prompt design

Generating from information retrieval vocabulary, NOT from the user's NLP/ML
engineering framing. Key vocabulary: query formulation, vocabulary mismatch, query
expansion, Boolean retrieval, facet analysis, recall/precision.

Source type (academic): SIGIR proceedings (premier IR venue); arXiv cs.IR;
  Journal of the American Society for Information Science and Technology (JASIST)
Source type (practitioner): GitHub — search tooling, query expansion libraries;
  Stack Overflow for practitioner query formulation discussions

Queries:
  Q1: query formulation vocabulary mismatch information retrieval user effectiveness
    (Facet: vocabulary gap as the core mechanism behind retrieval failure)
  Q2: natural language query effectiveness information retrieval empirical user study
    (Facet: natural language vs. structured query performance)
  Q3: query expansion recall precision information retrieval practitioner systematic
    (Facet: query expansion — direct parallel to prompt expansion/augmentation)

Coverage-gap note: This angle may surface foundational IR findings (Furnas 1987
  vocabulary mismatch) that predate LLMs. These are mechanism-level findings —
  the vocabulary mismatch problem is not LLM-specific, and IR research offers
  the deepest empirical base on it. Extract principles, not specific tooling.
```

---

### ANGLE 10: Instructional Design Principles for Reliable Task Following
```
ANGLE 10: Instructional Design Principles for Reliable Task Following
===========
Vocabulary tradition: Educational instructional design (NOT in intake brief)
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: Educational research on what makes task instructions reliably
  followed — worked examples, cognitive load theory, the expertise reversal effect,
  procedural vs. conceptual instruction tradeoffs; principles that transfer to
  prompt design; any direct applications of instructional design to AI prompting

Generating from educational instructional design vocabulary, NOT from the user's
NLP/ML engineering framing. Key vocabulary: worked examples, cognitive load,
  instructional clarity, procedural instruction, task analysis, expertise reversal.

Source type (academic): Computers & Education (journal); Educational Psychology
  Review; Educational Technology Research and Development; Instructional Science;
  Semantic Scholar for forward citations from Sweller cognitive load theory work
Source type (practitioner): deprioritized — educational instructional design is
  an academic-heavy tradition with limited practitioner blog presence relevant here

Queries:
  Q1: instructional design worked examples procedural task compliance reliability
    (Facet: worked examples as a reliability mechanism for instruction following)
  Q2: cognitive load theory instruction complexity task accuracy learning empirical
    (Facet: cognitive load — instruction complexity and compliance failure relationship)
  Q3: instructional clarity task directions following accuracy educational psychology
    systematic review
    (Facet: what "clear instructions" means empirically and how it's measured)

Coverage-gap note: Transfer from human learner contexts to LLM contexts requires
  explicit bridging work. This angle is hypothesis-generating. Watch for papers that
  directly apply instructional design theory to LLM prompt engineering — these are
  the highest-value bridge papers.
```

---

## QUALITY GATE SUMMARY

```
GATE SUMMARY
============

Gate 1 — Completeness:
  Null-hypothesis angle present: PASS
    Angle 6 uses explicit disconfirming vocabulary — "failure," "does not generalize,"
    "negative results," "replication failure." Framing is explicit; no hedging language
    substituted.
  Adversarial angle present: PASS
    Angle 7 is labeled [ADVERSARIAL-FLAGGED] with dispatch note. Label is present.
  Cross-disciplinary angle present: PASS
    Angles 8 (human factors), 9 (information retrieval), 10 (instructional design) all
    target traditions NOT in the intake brief.
  Source-type coverage: PASS
    Domain is MIXED. Practitioner sources assigned: Angles 1 (GitHub evaluation
    frameworks), 2 (GitHub LLMOps tools + practitioner blogs), 3 (GitHub testing
    toolkits + Stack Overflow), 4 (GitHub DSPy/OPRO), 6 (GitHub issues), 7 (GitHub
    red-teaming tools). Practitioner sources present throughout.
  Vocabulary-tradition map populated: PASS
    Coverage map lists 6 traditions from intake brief + 3 cross-disciplinary traditions.
    Total: 9 distinct tradition labels represented across 10 angles.

Gate 1 result: PASS

---

Gate 2 — Distinctness:
  Boolean-connective test applied to flagged pairs:

  Pair: Angle 3 (reliability engineering) vs. Angle 6 (null-hypothesis):
    Angle 3 distinctive terms: "sensitivity analysis," "fault injection," "regression
      testing," "variance measurement"
    Angle 6 distinctive terms: "does not generalize," "negative results," "replication
      failure," "post-mortem"
    Semantically equivalent? Angle 3 = methods for testing reliability; Angle 6 =
      documented evidence of failure. Would OR retrieve the same documents? Partial
      overlap on "robustness" / "failure modes" — but the query populations differ
      (methods papers vs. negative result papers). Verdict: STRUCTURALLY DISTINCT.
      OR retrieval would not produce equivalent sets.

  Pair: Angle 8 (human factors) vs. Angle 10 (instructional design):
    Angle 8 distinctive terms: "operator instruction," "human factors," "checklist
      design," "safety-critical," "cognitive ergonomics"
    Angle 10 distinctive terms: "worked examples," "cognitive load theory," "educational
      psychology," "learner," "expertise reversal"
    Semantically equivalent? Both study instruction following, but from distinct
      communities (safety engineering vs. education research), with different journals,
      different author populations, different terminology. OR retrieval would NOT
      produce equivalent document sets. Verdict: STRUCTURALLY DISTINCT.

  All other pairs: no shared distinctive query terms. Pairs pass without formal test.

  Vocabulary-tradition distinctness check:
    Angle 1: NLP / ML research
    Angle 6: NLP / ML research — disconfirming variant (NULL-HYPOTHESIS type)
    Rule check: Two angles share "NLP / ML research" as root tradition. Exception
      applies: one is explicitly the null-hypothesis variant. ALLOWED per
      angle-quality.md Gate 2 rule ("unless one is the null-hypothesis variant or
      adversarial variant of the other").
    All other angles: distinct tradition labels. PASS.

Gate 2 result: PASS

---

Gate 3 — Launchability:
  All 10 angles have at least one concrete, runnable query string.
  No query string contains "TBD," placeholder text, or unfilled markers.
  All "Source type (academic)" and "Source type (practitioner)" fields name specific
    platforms (arXiv cs.CL + cs.LG, GitHub, ACM CHI, SIGIR, Computers & Education, etc.)
  Platform-calibration.md overrides applied: arXiv cs.CL + cs.LG used for NLP/ML
    angles (not cs.AI alone); structurally distinct source pairs used throughout
    (arXiv + GitHub, not arXiv + Semantic Scholar for the same angle).

Gate 3 result: PASS

---

Gate 4 — Scoring prohibition:
  No angles were filtered, ranked, or prioritized by subjective criteria.
  No angle record contains "most useful," "strongest," or "most likely to be novel."
  All ordering decisions used structural criteria: type-allocation slots, vocabulary-
    tradition coverage, Boolean-connective distinctness.

Gate 4 result: PASS

---

Overall verdict: PASS — dispatch ready

---

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG: All 9 traditions were enumerated by LLM only
     (Source B unavailable). An external validation pass (survey-paper probe) is
     recommended before accepting this as complete coverage. One or more traditions
     may exist in the practitioner literature that LLM enumeration cannot surface.
  2. Angle 5 (cognitive science / linguistics): Predicted research character updated
     to GAP risk during generation — this tradition has thin published literature at
     the intersection with LLM prompt formulation. Researcher should plan for low
     yield and not count this as a saturated negative result if few papers are found.
  3. Angles 8 and 10 (human factors, instructional design): Transfer from
     human-subject contexts to LLM contexts is hypothesis-generating, not confirmatory.
     Treat these angles as hypothesis sources for follow-up empirical work, not
     as direct evidence of prompting principles.
  4. Angle 7 (adversarial): Structural separation requirement (ADVERSARIAL-FLAGGED)
     cannot be enforced by this kit. The downstream research agent must honor the
     label by dispatching Angle 7 in a context without prior confirmatory angle results.
```

---

## SELF-CHECK (CLAUDE.md Rule 6 — after-every-task)

**Was the null-hypothesis angle present?** YES — Angle 6 explicitly framed as disconfirming.
**Does the list contain ≥2 distinct vocabulary traditions?** YES — 9 distinct traditions.
**Does each angle have a tradition label and a concrete query string?** YES — all 10 angles have both.
**Did the Boolean-connective test run?** YES — two flagged pairs examined formally.

**What is incomplete or questionable in this output:**
1. Source B unavailability is the primary structural limit. A survey-paper probe could surface 1–2 additional traditions not accessible to LLM self-enumeration. This is a known gap documented throughout and in the VOCABULARY SELF-REPORT FLAG.
2. Angle 5 (cognitive science/linguistics) has GAP-risk predicted research character — the researcher should be warned that low yield here is expected, not a search failure.
3. The cross-disciplinary angles (8, 9, 10) are the most speculative regarding transfer validity. The bridge papers (if they exist) are the high-value items; absence of bridge papers should be explicitly noted in the synthesis.
4. No angle covers the intersection of prompt engineering and model versioning risk (what happens to reliable prompts when the underlying model is updated). This is a production-specific failure mode that is underrepresented. It partially appears in Angle 2 (LLMOps) but may warrant its own angle if the literature is substantial.

**Proposing X — proceeding unless redirected:** If model-versioning / prompt regression risk across model updates has substantial literature, an Angle 11 could be added targeting that specific production failure mode. This is the next identifiable gap in the current angle list.

---

## SUMMARY COUNTS

- Total angles: 10
- Distinct vocabulary traditions: 9 (NLP/ML research; ML engineering/LLMOps; Software reliability engineering; Automatic prompt optimization; Cognitive science/linguistics; Prompt security/adversarial ML; Human factors/usability engineering; Information retrieval/query formulation; Educational instructional design)
- Angle types: 5 Confirmatory + 1 Null-hypothesis + 1 Adversarial-FLAGGED + 3 Cross-disciplinary
- Quality gate verdict: PASS (all 4 gates)
- Source B status: UNAVAILABLE — MODERATE
- Condition: B
