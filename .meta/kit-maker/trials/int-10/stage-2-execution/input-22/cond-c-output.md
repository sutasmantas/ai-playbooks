# Angle-Gen-Kit Output — Input 22, Condition C

**Topic:** When to fine-tune a language model vs. use prompting for a given task  
**Condition:** C — Source B (web search / survey-paper probe) unavailable  
**Generated:** 2026-07-05  

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: Decision criteria for choosing between fine-tuning and prompting a language model
for a specific task — what factors determine which approach performs better or is more
appropriate.

Anchor vocabulary: "fine-tune" (ML transfer learning tradition), "language model"
(NLP/ML systems tradition), "prompting" (prompt engineering / in-context learning
tradition), "for a given task" (task-adaptation framing)

Candidate vocabulary traditions:
  1. ML Systems / Transfer Learning — fine-tuning, pre-training, transfer learning,
     domain adaptation, supervised fine-tuning (SFT), full fine-tuning, model updating
  2. Prompt Engineering / In-Context Learning — prompting, in-context learning (ICL),
     few-shot prompting, zero-shot, chain-of-thought, instruction prompting, prompt design
  3. NLP / LLM Capabilities Research — large language model benchmarks, scaling laws,
     emergent capabilities, foundation models, task performance evaluation
  4. ML Engineering / Economics — compute budget, training cost, inference cost,
     data requirements, deployment cost, resource constraints
  5. HCI / Applied AI / Practitioner Knowledge — practitioner decision-making,
     deployment guides, MLOps, tool selection, industry best practices
  6. Continual Learning / Catastrophic Forgetting — model plasticity, knowledge
     retention, forgetting, plasticity-stability tradeoff, sequential adaptation
  7. Data Efficiency / Few-shot Learning — sample efficiency, label efficiency,
     low-resource adaptation, data scarcity, annotation cost
  8. Parameter-Efficient Fine-Tuning (PEFT) / Hybrid Methods — LoRA, adapters,
     prefix tuning, soft prompts, prompt tuning (the middle ground between prompting
     and full fine-tuning)
  9. NLP Alignment / RLHF — behavioral alignment, instruction tuning, reinforcement
     learning from human feedback, constitutional AI, behavior modification
  10. NLP Task Taxonomy — task type classification, reasoning tasks, generation tasks,
      classification tasks, task complexity, task structure

NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate
traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known
anchor paper) is recommended before accepting the angle list as covering all traditions.

Question type: STRUCTURED
  Comparison pair: Fine-tuning vs. Prompting
  Condition variable: task characteristics, data availability, cost constraints,
  model scale, task type

Scope markers: "for a given task" — task-level, not system-level; implies practical
deployment decision rather than theoretical analysis.
  Inferred scope: real-world task adaptation decisions for existing language models;
  does not exclude theoretical comparisons but practitioner decision context is primary.

Known exclusions: None stated

Domain maturity estimate: MIXED
  Basis: Topic is heavily researched academically (scaling laws, ICL, PEFT papers have
  major arXiv presence) AND has strong practitioner production (MLOps blogs, LLM
  deployment guides widely published). Both populations produce distinct vocabulary
  and distinct findings. Practitioner sources REQUIRED per platform-calibration.md rules.

Survey paper status: NOT FOUND — Source B unavailable in this execution context
  Vocabulary-discovery pass recommended before finalizing angle list.

Source B status: UNAVAILABLE — MODERATE — Source A + Source C identified 10 distinct
vocabulary traditions; severity threshold for proceeding is ≥2. Proceeding with
VOCABULARY SELF-REPORT FLAG applied.

Source C — Terms the user did NOT use (candidate vocabulary gaps):
  - in-context learning (ICL)
  - parameter-efficient fine-tuning (PEFT), LoRA, adapters
  - retrieval-augmented generation (RAG) — an alternative to both
  - catastrophic forgetting, continual learning
  - scaling laws, emergent capabilities
  - compute budget, training cost
  - sample efficiency, data scarcity
  - soft prompts, prompt tuning
  - behavioral alignment, instruction tuning
  - task distribution shift, domain adaptation
```

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: ML Systems / Transfer Learning
  Representative terms: fine-tuning, pre-training, transfer learning, domain adaptation,
    supervised fine-tuning, model updating
  Planned angle slot: Confirmatory A1
  Gap flag: No

Tradition 2: Prompt Engineering / In-Context Learning
  Representative terms: in-context learning, few-shot prompting, zero-shot, chain-of-
    thought, instruction prompting, prompt design
  Planned angle slot: Confirmatory A2
  Gap flag: No

Tradition 3: NLP / LLM Capabilities Research
  Representative terms: scaling laws, emergent capabilities, benchmark evaluation,
    foundation models, task performance
  Planned angle slot: Confirmatory A3
  Gap flag: No

Tradition 4: ML Engineering / Economics
  Representative terms: compute budget, training cost, inference cost, data requirements,
    deployment cost, resource constraints
  Planned angle slot: Confirmatory A4
  Gap flag: No

Tradition 5: HCI / Applied AI / Practitioner Knowledge
  Representative terms: practitioner decision-making, MLOps, deployment guides, tool
    selection, industry patterns
  Planned angle slot: Confirmatory A5
  Gap flag: No

Tradition 6: Continual Learning / Catastrophic Forgetting
  Representative terms: catastrophic forgetting, plasticity-stability tradeoff, knowledge
    retention, sequential adaptation, model updating
  Planned angle slot: Confirmatory A6
  Gap flag: No

Tradition 7: Data Efficiency / Few-shot Learning
  Representative terms: sample efficiency, label efficiency, low-resource adaptation,
    data scarcity, annotation cost
  Planned angle slot: Confirmatory A7
  Gap flag: No

Tradition 8: PEFT / Hybrid Methods
  Representative terms: LoRA, adapters, prefix tuning, soft prompts, prompt tuning
  Planned angle slot: Confirmatory A8
  Gap flag: No

Tradition 9: NLP Alignment / RLHF
  Representative terms: RLHF, instruction tuning, behavioral alignment, constitutional AI
  Planned angle slot: Confirmatory A9
  Gap flag: No

Tradition 10: NLP Task Taxonomy
  Representative terms: task type, task complexity, reasoning tasks, generation tasks,
    classification tasks, task structure
  Planned angle slot: Confirmatory A10
  Gap flag: No

Traditions NOT yet represented in the planned list:
  All 10 traditions from the intake brief have at least one angle slot.

Cross-disciplinary slot (required):
  Three cross-disciplinary traditions identified — all three assigned slots:
  C1: Decision Theory / Operations Research
    Basis: The "when to" question is structurally identical to make-or-buy / technology
    adoption decisions studied in operations research and decision theory. These communities
    have decision frameworks (expected value, real options, threshold models) not present
    in ML research.
  C2: Software Engineering / Architecture
    Basis: Fine-tuning vs. prompting is an instance of build-vs-configure architecture
    decisions studied in SE. SE research examines maintenance cost, coupling, modularity
    consequences that ML research rarely addresses.
  C3: Information Retrieval / Retrieval-Augmented Generation (RAG)
    Basis: RAG is a third paradigm not reducible to either fine-tuning or prompting; IR
    communities study when retrieval-based knowledge injection outperforms parametric
    knowledge, which directly bears on the fine-tuning vs. prompting decision.
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1  (Confirmatory — ML Systems / Transfer Learning): assigned
Slot A2  (Confirmatory — Prompt Engineering / In-Context Learning): assigned
Slot A3  (Confirmatory — NLP / LLM Capabilities Research): assigned
Slot A4  (Confirmatory — ML Engineering / Economics): assigned
Slot A5  (Confirmatory — HCI / Applied AI / Practitioner Knowledge): assigned
Slot A6  (Confirmatory — Continual Learning / Catastrophic Forgetting): assigned
Slot A7  (Confirmatory — Data Efficiency / Few-shot Learning): assigned
Slot A8  (Confirmatory — PEFT / Hybrid Methods): assigned
Slot A9  (Confirmatory — NLP Alignment / RLHF): assigned
Slot A10 (Confirmatory — NLP Task Taxonomy): assigned
Slot N1  (Null-hypothesis): assigned
Slot D1  (Adversarial — ADVERSARIAL-FLAGGED): assigned
  Starting vocabulary: instruction following, system prompt, prompt engineering,
    zero-shot, chain-of-thought, LLM capability
  NOT FROM: fine-tuning, gradient update, weight update, training data, parameter
    update, supervised training, LoRA, adapters, PEFT, SFT
Slot C1  (Cross-disciplinary — Decision Theory / Operations Research): assigned
Slot C2  (Cross-disciplinary — Software Engineering / Architecture): assigned
Slot C3  (Cross-disciplinary — Information Retrieval / RAG): assigned

Total planned angles: 15
```

---

## ANGLE LIST

---

### ANGLE A1: Fine-tuning performance advantage — empirical benchmark evidence

```
Vocabulary tradition: ML Systems / Transfer Learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Conditions under which fine-tuning outperforms prompting; effect sizes
  on task benchmarks; task types where the gap is largest; required dataset size
  thresholds; which benchmarks showed most reliable fine-tuning advantage.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — repositories benchmarking fine-tuning vs. prompting
  on standardized NLP tasks (≥50 stars, active commit history)

Queries:
  Q1: fine-tuning versus prompting task performance benchmark comparison language model
  Q2: supervised fine-tuning outperforms in-context learning evaluation NLP tasks 2023 2024
  Q3: domain adaptation fine-tuned language model vs prompted baseline performance gap
  Q4: full fine-tuning task-specific model few-shot prompting empirical comparison

Coverage-gap note: Queries focus on accuracy/F1 metrics; downstream impact metrics
  (latency, deployment cost, maintenance burden) are not captured here — see A4.
```

---

### ANGLE A2: In-context learning capabilities and the conditions where prompting suffices

```
Vocabulary tradition: Prompt Engineering / In-Context Learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Tasks where few-shot or chain-of-thought prompting matches or exceeds
  fine-tuned baselines; model scale at which ICL becomes competitive; prompt design
  factors that determine prompting effectiveness; scope conditions.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): OpenAI / Anthropic / Google technical reports and prompt
  engineering guides (authored documentation, not blog posts)

Queries:
  Q1: in-context learning versus fine-tuning performance large language model
  Q2: few-shot prompting matches fine-tuning conditions chain-of-thought evaluation
  Q3: prompt engineering task adaptation without training language model effectiveness
  Q4: zero-shot chain-of-thought prompting surpasses fine-tuned model task benchmark

Coverage-gap note: Prompt quality variance is not captured — the same model can
  perform very differently with different prompt designs; queries do not separate
  prompt engineering skill from ICL capability.
```

---

### ANGLE A3: Scaling laws and model size as a moderator of the fine-tuning vs. prompting tradeoff

```
Vocabulary tradition: NLP / LLM Capabilities Research
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Whether the performance advantage of fine-tuning decreases as model
  size increases; which model scale threshold makes prompting competitive; emergent
  capabilities that appear without fine-tuning at sufficient scale; scaling law
  implications for the decision.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): Hugging Face blog posts and model cards documenting
  scale-dependent behavior

Queries:
  Q1: scaling laws prompting fine-tuning tradeoff model size language model performance
  Q2: emergent capabilities in-context learning large model scale without fine-tuning
  Q3: model size threshold prompting competitive fine-tuning few-shot learning
  Q4: scaling behavior instruction following versus supervised fine-tuning foundation model

Coverage-gap note: Most scaling law papers study a small number of model families;
  generalization across architectures and training regimes is not well-covered here.
```

---

### ANGLE A4: Cost-benefit and resource analysis — compute, data, and deployment economics

```
Vocabulary tradition: ML Engineering / Economics
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Frameworks for calculating total cost of fine-tuning vs. prompting;
  training compute cost vs. inference token cost analysis; break-even analysis for
  how many inference calls justify fine-tuning investment; data annotation cost
  estimates; practitioner cost benchmarks.

Source type (academic): arXiv cs.LG + cs.AI (ML systems papers); ACM surveys
Source type (practitioner): MLOps blogs (Weights & Biases, Comet ML, Hugging Face
  blog); company technical reports on LLM deployment cost

Queries:
  Q1: fine-tuning cost versus prompting cost language model deployment economics
  Q2: parameter efficient fine-tuning compute budget comparison prompt engineering
  Q3: LLM API inference cost versus fine-tuning training cost break-even analysis
  Q4: total cost of ownership fine-tuned model versus prompted foundation model

Coverage-gap note: Cost structures vary significantly by provider (proprietary API vs.
  self-hosted open model) — queries do not segment by deployment model; separate
  searches for proprietary vs. open-weight contexts recommended.
```

---

### ANGLE A5: Practitioner decision patterns — how practitioners actually choose between fine-tuning and prompting

```
Vocabulary tradition: HCI / Applied AI / Practitioner Knowledge
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Decision heuristics used by practitioners; common criteria cited in
  practitioner guides; when practitioners report switching from prompting to fine-tuning;
  failure modes practitioners encountered; practitioner decision frameworks that differ
  from academic recommendations.

Source type (academic): ACM CHI, arXiv cs.HC (human-computer interaction); IEEE
  Transactions on Professional Communication
Source type (practitioner): REQUIRED — Hacker News discussions, Reddit r/MachineLearning,
  Stack Overflow; engineering blogs (Stripe, Airbnb, Uber, LinkedIn AI blogs); GitHub
  README decision guides

Queries:
  Q1: when to fine-tune vs prompt engineer LLM practitioner guide decision criteria
  Q2: fine-tuning language model decision framework industry deployment recommendation
  Q3: prompting vs fine-tuning model customization practitioner experience lessons learned
  Q4: LLM adaptation strategy choice production deployment engineering decision

Coverage-gap note: Practitioner knowledge is not systematically collected; queries
  surface published guides but not the tacit knowledge held by practitioners who
  did not write about their decisions.
```

---

### ANGLE A6: Catastrophic forgetting and knowledge retention — continual learning perspective

```
Vocabulary tradition: Continual Learning / Catastrophic Forgetting
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Whether fine-tuned models lose general capabilities (catastrophic
  forgetting); conditions under which fine-tuning degrades performance on held-out
  tasks; whether prompting avoids this degradation; plasticity-stability tradeoff
  quantifications; mitigation approaches and their effectiveness.

Source type (academic): arXiv cs.LG + cs.CL; NeurIPS, ICML proceedings
Source type (practitioner): GitHub — issues in major LLM fine-tuning libraries
  documenting unexpected capability regression after fine-tuning

Queries:
  Q1: catastrophic forgetting fine-tuning language models general capability retention
  Q2: fine-tuning LLM performance degradation held-out tasks knowledge loss
  Q3: continual learning language model fine-tuning versus prompting knowledge retention
  Q4: plasticity stability tradeoff fine-tuned versus prompted large language model

Coverage-gap note: Most continual learning research is on smaller models; whether
  the same forgetting dynamics apply at LLM scale is not fully established.
```

---

### ANGLE A7: Data and label efficiency — when data scarcity determines the choice

```
Vocabulary tradition: Data Efficiency / Few-shot Learning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Minimum labeled dataset size at which fine-tuning begins to
  outperform few-shot prompting; how annotation cost affects the threshold decision;
  label efficiency comparisons between ICL and fine-tuning across data sizes;
  low-resource task adaptation results.

Source type (academic): arXiv cs.CL + cs.LG; ACL Anthology
Source type (practitioner): Hugging Face datasets documentation; annotation cost
  benchmarks from data labeling vendors (scale.ai, labelbox blog posts)

Queries:
  Q1: labeled data threshold fine-tuning versus few-shot prompting performance crossover
  Q2: sample efficiency in-context learning versus supervised fine-tuning low-resource
  Q3: data size requirement fine-tuning language model outperform few-shot prompting
  Q4: label efficiency NLP task adaptation prompting versus fine-tuning annotation cost

Coverage-gap note: The crossover point varies significantly by task type and model
  size; queries do not fully segment these interaction effects.
```

---

### ANGLE A8: Parameter-efficient fine-tuning and hybrid methods — the spectrum between prompting and full fine-tuning

```
Vocabulary tradition: Parameter-Efficient Fine-Tuning (PEFT) / Hybrid Methods
Angle type: Confirmatory
Predicted research character: empirical
What to extract: When PEFT methods (LoRA, adapters, prefix tuning, prompt tuning)
  outperform both full fine-tuning and prompting; computational and data efficiency
  of PEFT vs. prompting; which PEFT methods work best for which task types; whether
  soft prompts are a viable middle-ground alternative.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): Hugging Face PEFT library documentation and GitHub issues;
  technical blogs from researchers who implemented these methods

Queries:
  Q1: LoRA parameter efficient fine-tuning versus prompting performance comparison
  Q2: adapter tuning soft prompt tuning full fine-tuning comparison NLP tasks
  Q3: PEFT methods versus in-context learning prompt engineering tradeoff
  Q4: prefix tuning prompt tuning LoRA few-shot prompting efficiency accuracy

Coverage-gap note: PEFT landscape evolves rapidly; queries should include 2024-2025
  date filters to avoid over-representing early LoRA papers that predate current
  best practices.
```

---

### ANGLE A9: Behavioral alignment and stylistic adaptation — when fine-tuning shapes model behavior vs. prompting shapes it

```
Vocabulary tradition: NLP Alignment / RLHF
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Whether instruction tuning or RLHF produces more reliable behavioral
  adaptation than prompting alone; evidence on which approach better instills
  consistent style, tone, or persona; when prompt engineering for alignment breaks
  down; comparison of RLHF vs. system-prompt-based behavioral control.

Source type (academic): arXiv cs.CL + cs.AI; EMNLP, ACL proceedings
Source type (practitioner): OpenAI technical reports; Anthropic model card documentation;
  practitioner guides for system prompt design for behavioral control

Queries:
  Q1: instruction tuning RLHF behavioral alignment versus system prompt engineering
  Q2: fine-tuning language model style tone persona versus prompting behavioral control
  Q3: RLHF versus prompt-based alignment reliability consistency comparison
  Q4: model behavior adaptation fine-tuning versus in-context instruction following

Coverage-gap note: Behavioral alignment research is heavily concentrated on safety-
  critical behaviors; style and tone adaptation is less systematically studied.
```

---

### ANGLE A10: Task type and complexity as the primary decision variable

```
Vocabulary tradition: NLP Task Taxonomy
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Which categories of NLP tasks benefit most from fine-tuning vs.
  prompting (e.g., classification vs. generation vs. reasoning vs. structured output);
  task complexity thresholds; evidence on task structure determining the optimal
  adaptation method; taxonomy of tasks where prompting reliably fails.

Source type (academic): arXiv cs.CL; ACL Anthology survey papers on task-specific
  NLP models
Source type (practitioner): BIG-Bench and HELM evaluation suite documentation and
  associated GitHub repos

Queries:
  Q1: task type classification reasoning generation fine-tuning vs prompting performance
  Q2: NLP task complexity determines fine-tuning versus few-shot prompting effectiveness
  Q3: structured output extraction fine-tuning versus prompted language model comparison
  Q4: task taxonomy optimal adaptation method fine-tuning prompting reasoning tasks

Coverage-gap note: Task taxonomy is not standardized across research communities;
  different papers use different task categorizations, making meta-analysis difficult.
```

---

### ANGLE N1: Evidence that fine-tuning does NOT reliably outperform prompting (Null-hypothesis)

```
Vocabulary tradition: NLP / LLM Capabilities (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Studies reporting null or near-null differences between fine-tuning
  and prompting; conditions under which fine-tuning fails to improve over strong
  prompting baselines; replication failures; cases where fine-tuned models are
  outperformed by better-prompted foundation models; scope limitations of fine-tuning
  advantage claims.

Source type (academic): arXiv cs.CL + cs.LG; ACL Anthology — specifically negative
  result papers and benchmark papers that include strong prompted baselines
Source type (practitioner): GitHub issues documenting fine-tuning failures; practitioner
  posts describing when fine-tuning was abandoned in favor of prompting

Queries:
  Q1: fine-tuning does not outperform prompting null result language model task
  Q2: prompted foundation model outperforms fine-tuned model benchmark negative result
  Q3: fine-tuning limitations failure cases when prompting sufficient language model
  Q4: replication failure fine-tuning advantage prompting strong baseline comparison
  Q5: fine-tuning overfitting degradation versus in-context learning generalization

Coverage-gap note: Negative results are systematically underreported in ML literature;
  this angle may return fewer papers than confirmatory equivalents — absence of
  results here should be interpreted cautiously, not as evidence fine-tuning always wins.
```

---

### ANGLE D1: The prompting-sufficiency case — when instruction following eliminates the need for fine-tuning [ADVERSARIAL-FLAGGED]

```
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory 
results. Starting vocabulary below excludes all fine-tuning tradition terms to force 
vocabulary-independent generation.]

Vocabulary tradition: Instruction Following / Prompted Capability (adversarial framing)
  Vocabulary EXCLUDED from generation: fine-tuning, gradient update, weight update,
  training data, parameter update, supervised training, LoRA, adapters, PEFT, SFT,
  domain adaptation, transfer learning
Angle type: Adversarial-FLAGGED
Predicted research character: empirical
What to extract: Evidence that sufficiently capable prompted models make fine-tuning
  unnecessary; instruction following capabilities that eliminate task-specific
  adaptation; system prompt designs that substitute for model training; cases where
  task performance ceilings are reached through prompting alone; evidence that the
  premise of fine-tuning necessity is overstated in industry guidance.

Source type (academic): arXiv cs.CL + cs.LG — specifically papers testing prompted
  frontier model capability without any task-specific training
Source type (practitioner): REQUIRED — practitioner accounts of abandoning fine-tuning
  after finding prompted models sufficient; Hacker News threads challenging fine-tuning
  recommendations

Queries:
  Q1: instruction following capability LLM task performance without task-specific training
  Q2: system prompt engineering sufficiency large language model complex task performance
  Q3: prompted GPT-4 Claude performance matches specialized model without adaptation
  Q4: zero-shot instruction following replaces task-specific model deployment evidence
  Q5: prompting as complete alternative to model customization empirical evidence

Coverage-gap note: This angle is designed to challenge the premise of the research
  question — the user should expect this angle to surface arguments that the
  fine-tuning vs. prompting decision is sometimes a false dilemma.
```

---

### ANGLE C1: Decision theory and make-or-buy framework applied to model adaptation choices [Cross-disciplinary]

```
Vocabulary tradition: Decision Theory / Operations Research
  [NOT IN INTAKE BRIEF — cross-disciplinary slot]
Angle type: Cross-disciplinary
Predicted research character: consensus
What to extract: Decision frameworks for technology adoption or make-vs-configure
  choices applicable to fine-tuning vs. prompting; threshold models for when
  customization investment pays off; real options analysis; expected value frameworks;
  decision tree models for adaptation method selection; any operations research
  papers that explicitly model AI/ML customization decisions.

Source type (academic): INFORMS journals (Management Science, Operations Research);
  Decision Sciences journal; arXiv cs.GT (game theory / decision theory)
Source type (practitioner): McKinsey / Gartner / Forrester AI deployment decision
  guides; enterprise AI vendor decision matrices

Queries:
  Q1: make or buy decision framework AI model customization technology adoption
  Q2: technology adoption threshold model AI system configuration versus training
    decision theory
  Q3: real options analysis AI model investment fine-tuning versus API prompting
  Q4: decision tree framework machine learning model customization build configure
    expected value

Coverage-gap note: Operations research literature rarely uses LLM-specific vocabulary;
  a translation pass from OR decision vocabulary to ML vocabulary is likely required
  before these sources become directly useful.
```

---

### ANGLE C2: Software engineering and architecture — build vs. configure decisions and maintenance cost [Cross-disciplinary]

```
Vocabulary tradition: Software Engineering / System Architecture
  [NOT IN INTAKE BRIEF — cross-disciplinary slot]
Angle type: Cross-disciplinary
Predicted research character: consensus
What to extract: SE research on build-vs-buy / configure-vs-build decisions and how
  maintenance cost, coupling, and modularity affect the tradeoff; technical debt
  implications of fine-tuned models; architectural patterns for ML system design
  that address model customization decisions; software maintenance cost of fine-tuned
  models vs. prompt-based systems over time.

Source type (academic): IEEE Transactions on Software Engineering; ACM TOSEM;
  ICSE and FSE conference proceedings; arXiv cs.SE
Source type (practitioner): REQUIRED — Martin Fowler / thoughtworks blog; engineering
  blogs from companies maintaining large ML systems; GitHub discussions on LLM
  architecture decisions

Queries:
  Q1: machine learning system architecture fine-tuning prompting design pattern
    software engineering
  Q2: technical debt fine-tuned model versus prompted LLM maintenance cost software
  Q3: build versus configure AI model software architecture decision coupling modularity
  Q4: LLM integration architectural patterns fine-tuning system design software
    engineering best practices

Coverage-gap note: SE literature on LLM-specific architectural patterns is recent
  (2023-2025) and may not yet be in major conference proceedings; arXiv cs.SE
  is more likely to yield current results than journal archives.
```

---

### ANGLE C3: Retrieval-augmented generation as a third paradigm — when RAG renders the fine-tuning vs. prompting decision moot [Cross-disciplinary]

```
Vocabulary tradition: Information Retrieval / Retrieval-Augmented Generation (RAG)
  [NOT IN INTAKE BRIEF — cross-disciplinary slot]
Angle type: Cross-disciplinary
Predicted research character: empirical
What to extract: Evidence on when RAG outperforms both fine-tuning and prompting for
  knowledge-intensive tasks; conditions where fine-tuning is superior to RAG (e.g.,
  behavioral, style, or reasoning tasks rather than factual retrieval); when RAG+prompting
  eliminates the need for fine-tuning; task type taxonomy for RAG vs. fine-tuning
  applicability.

Source type (academic): arXiv cs.IR + cs.CL; SIGIR proceedings; ACL proceedings
Source type (practitioner): LlamaIndex and LangChain documentation and GitHub issues;
  Pinecone and Weaviate blog posts on RAG vs. fine-tuning decisions

Queries:
  Q1: retrieval augmented generation versus fine-tuning knowledge-intensive tasks
    comparison
  Q2: RAG versus fine-tuning language model when to use comparison empirical
  Q3: retrieval augmented generation prompting fine-tuning task performance tradeoff
  Q4: when RAG outperforms fine-tuning language model knowledge injection
  Q5: RAG fine-tuning prompting three-way comparison NLP task adaptation

Coverage-gap note: RAG literature is developing rapidly and many comparison papers
  use proprietary or internal datasets that are not reproducible; treat practitioner
  accounts with higher weight than academic papers for current RAG best practices.
```

---

## BOOLEAN-CONNECTIVE DISTINCTNESS CHECK

Applying Gate 2 check to candidate synonym pairs:

| Pair | Potentially overlapping terms | Boolean OR test | Verdict |
|------|-------------------------------|-----------------|---------|
| A1 / A2 | Both use "fine-tuning" and "language model" | A1 centers "benchmark comparison, domain adaptation"; A2 centers "in-context learning, chain-of-thought" — different retrieval populations | DISTINCT |
| A1 / A8 | Both involve fine-tuning | A1 = full fine-tuning performance; A8 = LoRA/adapters/hybrid space — PEFT papers are structurally distinct from full fine-tuning papers | DISTINCT |
| A2 / D1 | Both involve prompting | A2 = ICL capability empirical; D1 = adversarial case for sufficiency, different vocabulary excluded — ADVERSARIAL separation enforced | DISTINCT (by design) |
| A3 / A1 | Both involve performance comparisons | A3 centers "scaling laws, emergent capabilities, model size" — distinct vocabulary facet from A1 task benchmarks | DISTINCT |
| A7 / A2 | Both relate to few-shot scenarios | A7 centers "label efficiency, annotation cost, data size threshold"; A2 centers "ICL capability, chain-of-thought" — different facets | DISTINCT |
| A9 / A5 | Both involve deployment context | A9 centers "RLHF, behavioral alignment, constitutional AI"; A5 centers "practitioner decision-making, MLOps" — different traditions | DISTINCT |
| C3 / A1 | Both involve performance comparisons | C3 centers "retrieval, RAG, knowledge-intensive tasks"; A1 centers "task benchmark, supervised fine-tuning" — different vocabulary populations | DISTINCT |

No synonym merges required. All 15 angles pass the Boolean-connective distinctness test.

**Vocabulary-tradition distinctness:** All 15 angles have different vocabulary-tradition labels. No two non-null, non-adversarial angles share a tradition label. PASS.

---

## GATE SUMMARY

```
GATE SUMMARY
============
Gate 1 — Completeness:
  [PASS]
  - Null-hypothesis angle: PRESENT (Angle N1) — explicit disconfirming vocabulary:
    "null result," "does not outperform," "failure cases," "limitations"
  - Adversarial angle: PRESENT (Angle D1) — ADVERSARIAL-FLAGGED label present;
    dispatch note included; excluded vocabulary listed
  - Cross-disciplinary angle: PRESENT (Angles C1, C2, C3) — three traditions not in
    intake brief: Decision Theory, Software Engineering, Information Retrieval / RAG
  - Source-type coverage: PASS — domain maturity is MIXED; practitioner sources
    assigned to A4, A5, A6, A8, C2, C3, D1; Gate 1 practitioner requirement met
  - Vocabulary-tradition map: PRESENT — 13 distinct traditions across 15 angles

Gate 2 — Distinctness:
  [PASS]
  - Boolean-connective test: 7 candidate pairs checked; 0 synonym flags
  - Vocabulary-tradition distinctness: all 15 angles have distinct tradition labels
  - Small-literature flag: NOT APPLICABLE — this topic has a large literature
    (fine-tuning vs. prompting is extensively researched); Boolean-connective test
    applied at full standard

Gate 3 — Launchability:
  [PASS]
  - All 15 angles have ≥1 concrete, pasteable query string
  - No TBD or placeholder vocabulary in any query
  - Source type (academic) and source type (practitioner) both named in all angles
    (practitioner is "deprioritized" for none — all have practitioner source assigned)

Gate 4 — Scoring prohibition:
  [PASS]
  - No angle record contains phrases like "most promising," "strongest angle,"
    "most relevant," or equivalent LLM self-quality assessment
  - Type allocations were made on structural criteria only: tradition coverage,
    source-type coverage, null-hypothesis presence, Boolean-connective distinctness

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all 10 intake-brief traditions were enumerated
     by LLM only. A survey-paper probe (Source B) is recommended before accepting
     the tradition list as complete. A tradition not in LLM training data cannot be
     discovered here. Residual risk: SIGNIFICANT per weakness_register.md Weakness 1.
  2. ADVERSARIAL-FLAGGED label on Angle D1 — enforcement of context separation is
     the downstream research agent's responsibility, not this kit's. If the adversarial
     angle is run in the same context as confirmatory angles, structural independence
     is violated.
  3. Rapid-evolution note for Angles A8 and C3 — PEFT landscape and RAG literature
     evolve rapidly; queries should be filtered to 2023-2025 to avoid over-representing
     outdated baselines.
  4. Angle D1 (adversarial) should be dispatched last and in isolation — see
     ADVERSARIAL-FLAGGED label.
```

---

## SUMMARY METRICS

| Metric | Value |
|--------|-------|
| Total angles | 15 |
| Distinct vocabulary traditions | 13 |
| Traditions from intake brief | 10 |
| Cross-disciplinary traditions | 3 |
| Confirmatory angles | 10 |
| Null-hypothesis angles | 1 |
| Adversarial angles | 1 |
| Cross-disciplinary angles | 3 |
| Source B status | UNAVAILABLE — MODERATE |
| Domain maturity | MIXED |
| Dispatch verdict | PASS |
