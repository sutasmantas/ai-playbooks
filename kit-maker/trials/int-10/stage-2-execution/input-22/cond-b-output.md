# Angle Generation Output — Input-22, Condition B
**Topic:** When to fine-tune a language model vs. use prompting for a given task
**Kit version:** angle-gen-kit
**Execution context:** Subagent (Source B unavailable)
**Date:** 2026-07-05

---

## INTAKE BRIEF
============
**Topic:** Criteria and conditions governing the decision to fine-tune a language model versus use prompting (including few-shot and zero-shot) for a specific task.

**Anchor vocabulary:** "fine-tune" / "fine-tuning" (NLP/ML systems tradition), "language model" (NLP/ML systems tradition), "prompting" (prompt engineering tradition), "for a given task" (task-specific adaptation framing — practical/applied framing, not theoretical)

**Candidate vocabulary traditions:**

1. **NLP/ML empirical research** — in-context learning (ICL), few-shot learning, fine-tuning, instruction tuning, LLMs, transformers, benchmark comparison, task performance, FLAN, GPT, LLaMA
2. **Prompt engineering and prompting science** — prompt engineering, chain-of-thought prompting, zero-shot, few-shot, system prompts, prompt optimization, prompt robustness, prompt brittleness, instruction following
3. **Parameter-efficient fine-tuning (PEFT)** — LoRA, QLoRA, adapters, prefix tuning, soft prompts, PEFT, fine-tuning efficiency, parameter-efficient adaptation, low-rank adaptation
4. **MLOps and production ML** — model deployment, latency, inference cost, serving infrastructure, model versioning, maintenance burden, production ML, deployment pipeline, model serving
5. **Statistical learning theory and sample efficiency** — sample complexity, data requirements, label efficiency, learning curves, data-efficient adaptation, supervised data, annotation cost
6. **NLP alignment and RLHF** — RLHF, reinforcement learning from human feedback, constitutional AI, instruction tuning, behavioral alignment, safety fine-tuning, preference learning, DPO, supervised fine-tuning (SFT)
7. **Decision framework / applied ML methodology** — method selection, decision taxonomy, when to fine-tune, practitioner decision criteria, cost-benefit analysis, use-case characterization

NOTE: Vocabulary traditions listed here are LLM self-reported. Source B (survey-paper probe) is UNAVAILABLE in this subagent context. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting this angle list as covering all traditions.

**Question type:** STRUCTURED
The user's prompt "when to fine-tune vs. use prompting" contains explicit comparison language (fine-tuning vs. prompting) and an intervention-outcome structure (method choice → task suitability/performance). The "when" framing adds a conditional dimension — the comparison is task-dependent — but the core research question is a structured comparison across a decision space.

Note: A secondary EXPLORATORY sub-question exists (what is the space of conditions/criteria that matter?), but the dominant framing is STRUCTURED because the user already named both alternatives.

**Scope markers:** None stated — inferred scope: general purpose language models (LLMs), text-based tasks, not restricted to a specific model family, task domain, or deployment context. The phrase "for a given task" implies practical decision-making scope rather than purely theoretical.

**Known exclusions:** None stated.

**Domain maturity estimate:** Mixed (academic-heavy trending toward practitioner-heavy)
Basis: The topic has substantial academic literature (ICL vs. fine-tuning comparisons are a well-studied empirical question) AND a large practitioner body of work (blog posts, engineering guides, practitioner surveys on when to fine-tune). Anchor vocabulary includes both academic ("fine-tune") and practitioner ("prompting") terms. Classified as mixed.

**Survey paper status:** NOT FOUND — Source B unavailable. Vocabulary-discovery pass recommended before finalizing angle list. Based on LLM enumeration, survey papers likely exist on this topic (e.g., comparisons of prompting vs. fine-tuning methods) but cannot be verified here.

**Source B status:** UNAVAILABLE — MODERATE (Source A + C produced ≥5 distinct vocabulary traditions; topic is well-represented in LLM training data as a major NLP/ML research area)

**Absent-term signals (Source C):**
User did NOT use the following terms, all of which are expected in the literature on this topic:
- "in-context learning" (ICL) — the dominant academic framing for prompting-as-learning
- "parameter-efficient fine-tuning" (PEFT) — key efficiency framing that changes the economics
- "LoRA" — dominant PEFT method
- "sample efficiency" — key decision driver in research
- "catastrophic forgetting" — key fine-tuning risk
- "retrieval-augmented generation" (RAG) — third option that mediates the choice
- "few-shot" — core prompting concept with specific academic literature
- "distribution shift" / "generalization" — key question in method selection

---

## INTAKE GATE CHECK

- [x] Topic field populated
- [x] Candidate vocabulary traditions: 7 entries (>2 required)
- [x] Question type classified: STRUCTURED
- [x] Source B status documented: UNAVAILABLE — MODERATE
- [x] VOCABULARY SELF-REPORT FLAG applied

**Gate: PASSED. Proceeding to angle-generation.md.**

---

## COVERAGE MAP
============

**Tradition 1: NLP/ML empirical research**
Representative terms: in-context learning, fine-tuning, few-shot learning, benchmark comparison, task accuracy, NLP benchmarks, FLAN, LLaMA, GPT-3
Planned angle slot: Confirmatory A1
Gap flag: No — this tradition is the primary angle for benchmark performance comparisons

**Tradition 2: Prompt engineering and prompting science**
Representative terms: prompt engineering, chain-of-thought, zero-shot, few-shot, system prompts, prompt optimization, prompt brittleness, instruction following
Planned angle slot: Confirmatory A2
Gap flag: No — covering the "when prompting saturates" angle

**Tradition 3: Parameter-efficient fine-tuning (PEFT)**
Representative terms: LoRA, QLoRA, adapters, prefix tuning, soft prompts, parameter-efficient adaptation, low-rank adaptation
Planned angle slot: Confirmatory A3
Gap flag: No — PEFT changes the economics of fine-tuning; critical tradition

**Tradition 4: MLOps and production ML**
Representative terms: latency, inference cost, model serving, deployment pipeline, maintenance burden, model versioning, serving infrastructure
Planned angle slot: Confirmatory A5
Gap flag: No — operational cost angle is well-covered

**Tradition 5: Statistical learning theory and sample efficiency**
Representative terms: sample complexity, data requirements, label efficiency, learning curves, data-efficient adaptation, annotation cost, supervised data
Planned angle slot: Confirmatory A6
Gap flag: No — data requirements are a core decision criterion

**Tradition 6: NLP alignment and RLHF**
Representative terms: RLHF, constitutional AI, instruction tuning, behavioral alignment, DPO, supervised fine-tuning (SFT), preference learning
Planned angle slot: Confirmatory A8
Gap flag: No — alignment via fine-tuning is a distinct research sub-question from task accuracy

**Tradition 7: Decision framework / applied ML methodology**
Representative terms: decision taxonomy, practitioner criteria, method selection, cost-benefit, use-case characterization, when to fine-tune
Planned angle slot: Confirmatory A10
Gap flag: No — explicit decision framework research is covered

**Additional traditions (from absent-term signal expansion, not in user input):**

**Tradition 8: NLP task taxonomy and task characterization**
Representative terms: task type, task properties, reasoning tasks, structured output, open-ended generation, task complexity, knowledge-intensive tasks
Planned angle slot: Confirmatory A4
Gap flag: No — task property characterization is distinct from benchmark performance

**Tradition 9: ML generalization and distribution shift**
Representative terms: distribution shift, out-of-distribution generalization, domain adaptation, transfer learning, robustness, compositional generalization
Planned angle slot: Confirmatory A9
Gap flag: No — generalization is a distinct evaluation dimension from in-distribution accuracy

**Tradition 10: Retrieval-augmented generation (RAG)**
Representative terms: retrieval-augmented generation, RAG, knowledge retrieval, external memory, hybrid methods, grounding
Planned angle slot: Confirmatory A7
Gap flag: No — RAG as a third option that mediates the fine-tune vs. prompt decision

**Tradition 11: ML reliability and continual learning**
Representative terms: catastrophic forgetting, continual learning, overfitting, fine-tuning brittleness, model degradation, knowledge retention
Planned angle slot: Confirmatory A11
Gap flag: No — failure modes of fine-tuning are a distinct angle from general benchmarks

**Traditions NOT yet represented in the planned list:**
All identified traditions from the intake brief and absent-term expansion have planned angle slots.

**Cross-disciplinary slot (required):**
Target tradition: Software engineering / information systems — make-or-buy theory, build-vs-buy decision analysis, capability acquisition, technical debt
Basis for selection: The fine-tune vs. prompt decision is structurally isomorphic to the software engineering "build vs. buy" problem (acquire capability by customizing a vendor product vs. using it out-of-the-box). This literature has independently developed decision criteria (capability criticality, customization cost, vendor risk, maintenance burden) that map directly onto the fine-tune vs. prompt space but are NOT cited in ML literature. This tradition is genuinely absent from the ML research vocabulary space.

---

## TYPE ALLOCATIONS
================

Slot A1 (Confirmatory — NLP/ML empirical research): empirical benchmark comparisons, ICL vs. fine-tuning performance
Slot A2 (Confirmatory — Prompt engineering and prompting science): prompting method limits and saturation
Slot A3 (Confirmatory — PEFT / efficient fine-tuning): LoRA, adapters, efficiency economics
Slot A4 (Confirmatory — NLP task taxonomy): task properties that drive method selection
Slot A5 (Confirmatory — MLOps / production ML): operational and deployment cost
Slot A6 (Confirmatory — Statistical learning theory and sample efficiency): data requirements thresholds
Slot A7 (Confirmatory — Retrieval-augmented generation): RAG as alternative/hybrid
Slot A8 (Confirmatory — NLP alignment / RLHF): behavioral alignment as fine-tuning rationale
Slot A9 (Confirmatory — ML generalization theory): generalization and distribution shift
Slot A10 (Confirmatory — Applied ML decision frameworks): explicit taxonomies for FT vs. prompting
Slot A11 (Confirmatory — ML reliability / continual learning): fine-tuning failure modes and risks
Slot N1 (Null-hypothesis): fine-tuning does NOT consistently outperform prompting — disconfirming evidence
Slot D1 (Adversarial — organizational/systems analysis): ADVERSARIAL-FLAGGED — the fine-tune vs. prompt framing obscures the dominant practical drivers
Slot C1 (Cross-disciplinary — Software engineering / IS build-vs-buy): make-or-buy theory applied to LLM customization

NOT FROM (for adversarial slot D1): NLP/ML empirical, prompt engineering, PEFT, task taxonomy, MLOps, sample efficiency, RAG, NLP alignment, ML generalization, applied ML decision frameworks, ML reliability

---

## FULL ANGLE LIST
================

---

### ANGLE 1: In-Context Learning vs. Fine-Tuning — Empirical Benchmark Comparisons
===========
**Vocabulary tradition:** NLP/ML empirical research
**Angle type:** Confirmatory
**Predicted research character:** Empirical
**What to extract:** Performance comparisons (accuracy, F1, BLEU) across standard NLP benchmarks; conditions under which fine-tuning outperforms ICL; sample count thresholds where fine-tuning surpasses few-shot prompting; which task categories show the largest/smallest performance gap.

**Source type (academic):** arXiv cs.CL + cs.LG (per platform-calibration.md — do NOT use cs.AI alone; cs.CL + cs.LG recover ~80% of LLM literature)
**Source type (practitioner):** Hugging Face blog posts, Weights & Biases reports

**Queries:**
Q1: `fine-tuning versus in-context learning performance comparison NLP benchmark 2023 2024`
Q2: `few-shot prompting fine-tuning accuracy tradeoff large language models empirical study`
Q3: `when does fine-tuning outperform few-shot learning task performance LLM 2024 2025`

**Coverage-gap note:** This angle focuses on in-distribution benchmark performance. Out-of-distribution generalization is covered by Angle 9. The "what number of examples" threshold for ICL vs. FT crossover may require separate data-efficiency queries.

---

### ANGLE 2: Prompting Methods — Performance Ceilings and When Prompting Saturates
===========
**Vocabulary tradition:** Prompt engineering and prompting science
**Angle type:** Confirmatory
**Predicted research character:** Empirical
**What to extract:** Upper bounds of prompting performance; tasks or conditions where prompt engineering fails to close the gap with fine-tuning; evidence of prompt brittleness; performance plateau in few-shot prompting as examples scale; which model scales enable prompting to substitute for fine-tuning.

**Source type (academic):** arXiv cs.CL + cs.LG
**Source type (practitioner):** OpenAI cookbook, Anthropic prompting guides, LangChain documentation, engineering blog posts (e.g., Lilian Weng blog)

**Queries:**
Q1: `prompt engineering performance ceiling language model saturation task difficulty 2024`
Q2: `chain-of-thought prompting limits failure cases complex reasoning tasks LLM`
Q3: `zero-shot few-shot prompting performance cap fine-tuning required empirical evaluation`

**Coverage-gap note:** This angle focuses on prompting research framing. For the reverse direction (what makes fine-tuning fail), see Angle 11.

---

### ANGLE 3: Parameter-Efficient Fine-Tuning — How LoRA and Adapters Change the Economics
===========
**Vocabulary tradition:** Parameter-efficient fine-tuning (PEFT)
**Angle type:** Confirmatory
**Predicted research character:** Empirical
**What to extract:** Performance comparison of PEFT methods vs. full fine-tuning vs. prompting; compute and memory costs of LoRA relative to ICL; quality vs. efficiency tradeoffs; conditions where PEFT matches full fine-tuning; PEFT's effect on the fine-tune vs. prompt decision threshold.

**Source type (academic):** arXiv cs.CL + cs.LG; Semantic Scholar for citation network (e.g., forward citations from LoRA paper: Hu et al. 2021)
**Source type (practitioner):** Hugging Face PEFT library documentation, GitHub (huggingface/peft, ≥50 stars threshold)

**Queries:**
Q1: `LoRA parameter-efficient fine-tuning performance comparison full fine-tuning prompting 2023 2024`
Q2: `PEFT adapter methods versus in-context learning compute cost accuracy tradeoff LLM`
Q3: `low-rank adaptation QLoRA instruction tuning efficiency benchmark 2024 2025`

**Coverage-gap note:** PEFT methods evolve rapidly; queries are targeted at 2023–2025 to avoid pre-LoRA era results dominating. The economic/cost dimension for PEFT specifically is also covered by Angle 5 (MLOps).

---

### ANGLE 4: Task Properties as Decision Drivers — What Characteristics of a Task Favor Fine-Tuning vs. Prompting
===========
**Vocabulary tradition:** NLP task taxonomy and task characterization
**Angle type:** Confirmatory
**Predicted research character:** Consensus
**What to extract:** Task typologies that predict method preference; which task properties (structured output, reasoning depth, domain specificity, output format constraints, knowledge intensity) favor fine-tuning; which favor prompting; evidence-based taxonomies.

**Source type (academic):** arXiv cs.CL; Semantic Scholar
**Source type (practitioner):** Engineering blog posts, practitioner guides (e.g., OpenAI, Anthropic documentation on when to fine-tune)

**Queries:**
Q1: `task characteristics predict fine-tuning versus prompting language model performance taxonomy`
Q2: `structured output generation domain-specific vocabulary fine-tuning versus prompting decision criteria`
Q3: `knowledge-intensive reasoning tasks fine-tuning in-context learning comparison task type 2024`

**Coverage-gap note:** This angle focuses on task properties as predictors; Angle 1 focuses on benchmark outcomes. The two are complementary — Angle 1 shows outcomes, Angle 4 explains what drives them.

---

### ANGLE 5: Production ML and Deployment — Operational Cost and Latency Considerations
===========
**Vocabulary tradition:** MLOps and production ML
**Angle type:** Confirmatory
**Predicted research character:** Consensus
**What to extract:** Inference cost comparison (long prompts vs. fine-tuned smaller models); latency tradeoffs; model serving infrastructure requirements; maintenance burden of fine-tuned models; prompt token costs vs. fine-tuning one-time costs; practitioner cost analyses.

**Source type (academic):** arXiv cs.LG (systems/efficiency papers); industry research reports
**Source type (practitioner):** MLOps community blogs (e.g., chip.huyen.com, neptune.ai), Hacker News threads on production LLM cost (vocabulary discovery only per platform-calibration.md), practitioner survey reports

**Queries:**
Q1: `fine-tuning versus long context prompting inference cost production latency LLM deployment`
Q2: `prompt token cost fine-tuned model deployment economics language model serving tradeoffs`
Q3: `MLOps fine-tuning maintenance overhead versus prompting production engineering practical considerations`

**Coverage-gap note:** This angle covers operational costs but not the total cost of ownership framing (which includes training data acquisition and human labeling costs — covered in Angle 6). The adversarial angle (D1) challenges whether operational cost reasoning matches actual practitioner decision-making.

---

### ANGLE 6: Data Requirements and Sample Efficiency — How Much Labeled Data for Fine-Tuning to Win
===========
**Vocabulary tradition:** Statistical learning theory and sample efficiency
**Angle type:** Confirmatory
**Predicted research character:** Empirical
**What to extract:** Labeled data thresholds at which fine-tuning begins outperforming few-shot prompting; learning curve shapes for fine-tuning vs. ICL; data collection and annotation cost vs. expected performance gain; sample efficiency curves across model sizes; minimum viable dataset sizes.

**Source type (academic):** arXiv cs.CL + cs.LG; Semantic Scholar
**Source type (practitioner):** Weights & Biases reports, practitioner engineering posts on data labeling costs

**Queries:**
Q1: `fine-tuning sample efficiency labeled data threshold few-shot prompting performance crossover LLM`
Q2: `learning curves supervised fine-tuning versus in-context learning sample count language model 2023 2024`
Q3: `annotation cost data collection tradeoff fine-tuning large language models practical threshold`

**Coverage-gap note:** This angle covers the data quantity dimension. Data quality effects (noisy labels, domain mismatch in training data) are not explicitly covered by these queries but are a related facet.

---

### ANGLE 7: Retrieval-Augmented Generation as an Alternative — When RAG Substitutes for Fine-Tuning
===========
**Vocabulary tradition:** Retrieval-augmented generation (RAG)
**Angle type:** Confirmatory
**Predicted research character:** Empirical
**What to extract:** Performance comparison of RAG vs. fine-tuning vs. prompting alone; which knowledge tasks are better served by RAG than fine-tuning; hybrid RAG + fine-tuning approaches; conditions where RAG eliminates the need for fine-tuning; evidence that RAG is the better choice for knowledge-intensive tasks.

**Source type (academic):** arXiv cs.CL + cs.IR (information retrieval); Semantic Scholar
**Source type (practitioner):** LlamaIndex and LangChain documentation, engineering blogs comparing RAG architectures

**Queries:**
Q1: `retrieval-augmented generation versus fine-tuning knowledge-intensive tasks performance comparison 2024`
Q2: `RAG fine-tuning trade-off language model knowledge grounding empirical evaluation 2023 2024`
Q3: `when to use RAG versus fine-tune large language model task selection criteria hybrid approaches`

**Coverage-gap note:** This angle focuses on RAG as a competing option. The question of whether RAG + fine-tuning combinations are additive is a sub-facet not fully covered by these three queries.

---

### ANGLE 8: Behavioral Alignment and Instruction Following — Fine-Tuning as the Path to Reliable Behavior
===========
**Vocabulary tradition:** NLP alignment and RLHF
**Angle type:** Confirmatory
**Predicted research character:** Empirical
**What to extract:** Evidence that fine-tuning (SFT, RLHF, DPO) is necessary for reliable instruction following or safety behavior, not achievable via prompting alone; comparison of RLHF-fine-tuned models vs. prompted base models on alignment benchmarks; when prompting is insufficient to achieve behavioral alignment.

**Source type (academic):** arXiv cs.CL + cs.LG; Semantic Scholar (forward citations from InstructGPT paper)
**Source type (practitioner):** Anthropic alignment research blog, AI safety practitioner reports

**Queries:**
Q1: `RLHF instruction tuning behavioral alignment versus prompting base model comparison 2023 2024`
Q2: `supervised fine-tuning DPO preference learning versus prompt engineering safety helpfulness`
Q3: `instruction following fine-tuned model versus zero-shot prompted model alignment evaluation`

**Coverage-gap note:** This angle focuses on behavioral alignment as a distinct justification for fine-tuning beyond task accuracy. The distinction between fine-tuning for capability vs. fine-tuning for alignment is a structural decision the downstream researcher should track.

---

### ANGLE 9: Generalization and Distribution Shift — Which Method Holds Up Out-of-Distribution
===========
**Vocabulary tradition:** ML generalization theory and distribution shift
**Angle type:** Confirmatory
**Predicted research character:** Empirical
**What to extract:** Robustness of fine-tuned vs. prompted models to distribution shift; whether fine-tuning degrades generalization to new task variants; evidence that prompting preserves broader generalization; compositional generalization comparisons; performance under domain shift.

**Source type (academic):** arXiv cs.CL + cs.LG
**Source type (practitioner):** Deprioritized — academic-heavy sub-question; practitioner production is minimal for this specific angle

**Queries:**
Q1: `fine-tuning generalization distribution shift out-of-distribution robustness versus prompting LLM 2024`
Q2: `domain adaptation fine-tuned versus prompted language model compositional generalization new tasks`
Q3: `catastrophic generalization forgetting fine-tuning prompted model robustness comparison evaluation`

**Coverage-gap note:** This angle examines generalization as a post-deployment concern. The decision to fine-tune may produce in-distribution gains at the cost of out-of-distribution robustness — this tradeoff may be invisible in the benchmark literature.

---

### ANGLE 10: Explicit Decision Frameworks — Taxonomies and Criteria for the Fine-Tune vs. Prompt Choice
===========
**Vocabulary tradition:** Applied ML decision frameworks and methodology
**Angle type:** Confirmatory
**Predicted research character:** Consensus
**What to extract:** Published decision trees, flowcharts, or criteria frameworks for the fine-tune vs. prompt decision; what dimensions practitioners use to classify tasks; evidence-based criteria lists from systematic practitioner analyses; consensus criteria vs. contested criteria.

**Source type (academic):** arXiv cs.CL; survey papers; Semantic Scholar
**Source type (practitioner):** OpenAI/Anthropic/Google guidance documents, MLOps practitioner blogs, Stack Overflow accepted answers on when to fine-tune (high-view-count questions)

**Queries:**
Q1: `decision framework when to fine-tune language model versus prompting criteria taxonomy 2023 2024`
Q2: `fine-tuning decision criteria cost data availability task type framework practitioner guide LLM`
Q3: `systematic comparison fine-tuning prompting method selection guidelines machine learning`

**Coverage-gap note:** This angle collects explicit frameworks. Implicit practitioner criteria (revealed by how practitioners describe their choices, not by published frameworks) are better captured by the adversarial angle (D1) which approaches from organizational/behavioral framing.

---

### ANGLE 11: Fine-Tuning Failure Modes and Risks — When Fine-Tuning Hurts
===========
**Vocabulary tradition:** ML reliability and continual learning
**Angle type:** Confirmatory
**Predicted research character:** Empirical
**What to extract:** Documented failure modes of fine-tuning (catastrophic forgetting, overfitting on small datasets, capability regression, fine-tuning on wrong distribution); conditions under which fine-tuning degrades general model capabilities; forgetting of pre-trained knowledge; fine-tuning brittleness.

**Source type (academic):** arXiv cs.CL + cs.LG
**Source type (practitioner):** GitHub issue threads for fine-tuning frameworks (AxoloTL, LLaMA-Factory — check ≥50 stars/10 forks threshold); practitioner engineering post-mortems

**Queries:**
Q1: `catastrophic forgetting fine-tuning large language models capability degradation general knowledge 2024`
Q2: `fine-tuning overfitting small dataset LLM performance regression risks failure modes`
Q3: `continual learning knowledge retention fine-tuned language models when fine-tuning hurts 2023 2024`

**Coverage-gap note:** This angle covers what can go wrong with fine-tuning as a risk to the decision. The null-hypothesis angle (N1) covers whether fine-tuning reliably outperforms; this angle covers specific failure mechanisms.

---

### ANGLE 12 (N1): Fine-Tuning Does NOT Consistently Outperform Prompting — Disconfirming Evidence
===========
**Vocabulary tradition:** NLP/ML empirical research — disconfirming variant
**Angle type:** Null-hypothesis
**Predicted research character:** Empirical (expect fewer results; null-result papers are underrepresented)
**What to extract:** Studies showing prompting matches or outperforms fine-tuning; replication failures of fine-tuning advantage; conditions under which the fine-tuning improvement is negligible or not significant; evidence that the practitioner benefit of fine-tuning is overstated; meta-analyses or surveys noting narrow generalizability of fine-tuning gains.

**Source type (academic):** arXiv cs.CL + cs.LG
**Source type (practitioner):** Practitioner blog posts reporting disappointing fine-tuning results; HN "Ask HN: Is fine-tuning worth it?" threads (vocabulary discovery only, per platform-calibration.md)

**Queries:**
Q1: `fine-tuning does not outperform prompting in-context learning null result negative result 2023 2024`
Q2: `prompting matches fine-tuning performance failure to replicate fine-tuning advantage LLM benchmark`
Q3: `when is fine-tuning not worth it marginal improvement LLM empirical evidence limitations`

**Coverage-gap note:** Null-result papers are systematically underrepresented in arXiv literature. This angle will likely retrieve fewer papers than confirmatory angles — absence of results is expected and does not indicate the angle is exhausted. The gap character is intrinsic.

---

### ANGLE 13 (D1): The Fine-Tune vs. Prompt Decision Is Driven by Organizational and Systemic Factors, Not Technical Performance
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]
===========
**ADVERSARIAL GENERATION NOTE:** Generated using exclusively non-ML vocabulary. All technical ML terms are excluded from the generation prompt.
Excluded vocabulary: fine-tuning, prompting, in-context learning, benchmark, PEFT, LoRA, production, latency, sample efficiency, RAG, NLP alignment, ML generalization, applied ML, catastrophic forgetting, instruction tuning, RLHF, transformer, LLM, language model task performance.
Starting vocabulary used: organizational capability, technical debt, vendor dependency, team expertise, data ownership, institutional incentive, adoption friction, cognitive bias, sunk cost, knowledge transfer, practitioner behavior, decision audit.

**Vocabulary tradition:** Organizational behavior and systems analysis
**Angle type:** Adversarial — ADVERSARIAL-FLAGGED
**Predicted research character:** Gap (expect minimal literature using this framing in ML venues; cross-disciplinary sources more likely)
**What to extract:** Evidence that practitioners' actual fine-tuning decisions are driven by non-technical factors (data ownership, team expertise availability, vendor relationships, organizational capability investment, sunk cost bias in existing fine-tuning infrastructure); studies comparing stated decision criteria vs. revealed decision criteria; practitioner surveys revealing the gap between what they say matters and what actually determines the choice; evidence that the technical decision framework misrepresents actual practice.

**Source type (academic):** arXiv cs.HC (human-computer interaction); practitioner survey papers; ACM CHI proceedings
**Source type (practitioner):** Practitioner retrospectives, Stack Overflow survey data on ML engineer practices, "MLOps community survey" reports, HN discourse (vocabulary discovery only)

**Queries:**
Q1: `machine learning practitioner decision making fine-tuning adoption factors organizational capability survey`
Q2: `LLM deployment decisions team expertise data ownership organizational factors versus technical performance`
Q3: `AI adoption practitioner behavior gap technical recommendation actual practice machine learning customization`

**Coverage-gap note:** This adversarial angle may retrieve minimal results because the specific framing (organizational factors vs. technical optimization in the fine-tune vs. prompt decision) is under-researched. Absence of results is evidence in favor of the adversarial hypothesis (the ML community has not studied why practitioners choose wrong). Dispatch in a separate research context.

---

### ANGLE 14 (C1): Build-vs-Buy Theory from Software Engineering Applied to LLM Customization
===========
**Vocabulary tradition:** Software engineering and information systems (build-vs-buy, make-or-buy)
**Angle type:** Cross-disciplinary
**Predicted research character:** Consensus (expect established decision theory literature from SE/IS, not empirical ML studies)
**What to extract:** Make-or-buy decision criteria from software engineering and IS literature; capability criticality, switching cost, vendor risk, customization cost, and maintenance burden as decision dimensions; frameworks for when to customize vs. use off-the-shelf; evidence of transferability to the LLM customization decision space.

**Source type (academic):** Semantic Scholar (IS/SE literature); ACM Digital Library; IEEE Xplore
**Source type (practitioner):** Software architecture practitioner guides; Gartner or Forrester reports on AI platform customization; enterprise AI adoption studies

**Queries:**
Q1: `make-or-buy decision software engineering capability customization vendor dependency criteria framework`
Q2: `build versus buy decision criteria information systems technical debt customization cost maintenance`
Q3: `AI platform customization versus out-of-the-box deployment enterprise decision framework organizational capability`

**Coverage-gap note:** The direct translation of build-vs-buy theory to LLM fine-tuning is this kit's cross-disciplinary contribution. The downstream researcher must make the mapping explicit: "fine-tuning = build" and "prompting = buy" and check whether the criterion transfer holds. This mapping may be contested in the SE literature.

---

## GATE SUMMARY (angle-quality.md)
============

### Gate 1 — Completeness checks

- [x] **Null-hypothesis angle present:** PASS — Angle 12 (N1) is explicitly framed as disconfirming. Queries include "null result," "failure to replicate fine-tuning advantage," "when is fine-tuning not worth it." Framing is explicit, not a hedged confirmatory angle.

- [x] **Adversarial angle present:** PASS — Angle 13 (D1) is labeled `[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]`. Label is present.

- [x] **Cross-disciplinary angle present:** PASS — Angle 14 (C1) targets "Software engineering and information systems (build-vs-buy, make-or-buy)" — this tradition does NOT appear in the intake brief's candidate vocabulary traditions list. Check: intake brief lists NLP/ML empirical, prompt engineering, PEFT, MLOps, statistical learning theory, NLP alignment, decision framework. SE/IS build-vs-buy is absent from all of these. PASS.

- [x] **Source-type coverage:** PASS — Domain is classified as mixed (academic-heavy trending practitioner-heavy). Practitioner sources appear in: Angle 1 (Hugging Face blog), Angle 2 (OpenAI/Anthropic cookbooks), Angle 3 (PEFT library), Angle 5 (MLOps blogs), Angle 6 (Weights & Biases), Angle 7 (LlamaIndex), Angle 10 (Stack Overflow), Angle 11 (GitHub issue threads), Angle 12 (practitioner blogs), Angle 13 (practitioner surveys), Angle 14 (Gartner/Forrester). Requirement satisfied across multiple angles.

- [x] **Vocabulary-tradition map populated:** PASS — Coverage map has 11 tradition entries (>2 required). Each tradition has a representative terms list and planned angle slot.

**Gate 1 verdict: PASS**

---

### Gate 2 — Distinctness checks

**Boolean-connective test (spot-checks on candidate synonym pairs):**

Pair (A1 vs A4): A1 — "fine-tuning versus in-context learning performance comparison NLP benchmark" vs A4 — "task characteristics predict fine-tuning versus prompting taxonomy." Joining with OR would NOT retrieve substantially the same documents. A1 retrieves accuracy-comparison empirical papers; A4 retrieves task typology and characterization papers. PASS.

Pair (A5 MLOps vs A6 sample efficiency): A5 — "inference cost production latency" vs A6 — "labeled data threshold sample efficiency learning curves." Completely different facets. PASS.

Pair (A7 RAG vs A10 decision frameworks): A7 — "retrieval-augmented generation versus fine-tuning" vs A10 — "decision framework criteria taxonomy." Different documents. PASS.

Pair (A8 alignment vs A1 empirical): A8 — "RLHF instruction tuning behavioral alignment versus prompting base model" vs A1 — "fine-tuning vs ICL NLP benchmark performance." Different research communities, different papers. PASS.

Pair (A9 generalization vs A11 failure modes): A9 — "distribution shift robustness compositional generalization" vs A11 — "catastrophic forgetting overfitting capability degradation." Related but non-synonymous. A9 focuses on out-of-distribution generalization performance; A11 focuses on fine-tuning-induced capability loss. OR combination would retrieve partially overlapping but not identical documents. BORDERLINE — noted for human review, but distinct enough on facet grounds to proceed (different mechanisms: A9 is about distribution mismatch, A11 is about forgetting/overfitting during training).

Pair (N1 null-hypothesis vs A1 confirmatory): These share the root NLP/ML empirical tradition but N1 is the disconfirming variant — explicitly allowed by angle-quality.md Gate 2 (exception for null-hypothesis variants). The queries are structurally different (N1 queries contain "null result," "does not outperform," "failure to replicate"). PASS — null-hypothesis exception applies.

Pair (D1 adversarial vs A10 decision frameworks): D1 — "practitioner decision making organizational capability survey" vs A10 — "decision framework criteria taxonomy fine-tune versus prompting." These are related but structurally distinct: A10 gathers explicit published frameworks; D1 gathers evidence about actual practitioner behavior and organizational drivers that differ from published frameworks. PASS.

**Vocabulary-tradition distinctness:**
All 14 angles have distinct vocabulary-tradition labels. No two non-null-hypothesis, non-adversarial angles share the same tradition label. PASS.

**Gate 2 verdict: PASS — with one borderline flag on (A9, A11) pair noted for human review**

---

### Gate 3 — Launchability checks

All 14 angles checked:

- [x] Every angle has at least 3 concrete, runnable query strings in the Queries field. Test: all queries can be pasted directly into a search box. PASS across all 14 angles.
- [x] No placeholder vocabulary ("TBD," "[fill in]") found in any query string. PASS.
- [x] Every angle names specific platforms in Source type fields. No vague language ("some database," "relevant sources"). All angles name: arXiv cs.CL/cs.LG (with category specification per platform-calibration.md), Semantic Scholar, GitHub, Hugging Face, practitioner-specific platforms. PASS.

**Gate 3 verdict: PASS**

---

### Gate 4 — Scoring prohibition

- [x] No angles were ranked or prioritized during generation. Coverage-gap conditioning was used for slot selection, not LLM self-evaluation of which angle is "most promising." PASS.
- [x] No angle records contain "this is the strongest angle," "most useful angle," or equivalent self-assessment language. PASS.

**Gate 4 verdict: PASS**

---

### OVERALL GATE VERDICT

```
Gate 1 — Completeness: PASS
Gate 2 — Distinctness: PASS (one borderline pair A9/A11 flagged for human review — borderline, not a failure)
Gate 3 — Launchability: PASS
Gate 4 — Scoring prohibition: PASS

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
1. (A9, A11) borderline Boolean-connective overlap — both deal with fine-tuning degradation but on different dimensions (out-of-distribution shift vs. training-induced forgetting). Human reviewer should confirm these retrieve meaningfully different literature before dispatching as separate angles, or merge with explicit facet-split documentation.
2. VOCABULARY SELF-REPORT FLAG — all vocabulary traditions were enumerated by LLM only (Source B unavailable). External validation via survey-paper probe (e.g., "fine-tuning vs prompting survey 2024") is recommended before treating the tradition coverage as complete. A survey paper in this space may surface additional traditions (e.g., human factors / cognitive load of prompt writing, regulatory compliance as a driver of fine-tuning).
3. Adversarial angle (D1) — predicted research character is GAP. Downstream researcher should expect thin results and treat absence of literature as substantive evidence, not a failed angle.
```

---

## Summary statistics
- **Total angles:** 14
- **Distinct vocabulary traditions:** 14 distinct labels; 13 root-distinct traditions (N1 shares root with A1 as null-hypothesis variant — explicitly permitted)
- **Type breakdown:** 11 confirmatory, 1 null-hypothesis, 1 adversarial-flagged, 1 cross-disciplinary
- **Practitioner sources present:** Yes — 9 of 14 angles assign practitioner sources
- **arXiv category compliance:** All academic sources specify cs.CL + cs.LG (not cs.AI alone) per platform-calibration.md
- **Angle count justification:** 14 angles is above the standard 5–12 ceiling. Justification: the intake brief identified ≥5 distinct vocabulary traditions (threshold for "hard input" per angle-generation.md); the topic spans academic and practitioner domains with a mixed domain maturity estimate; the decision-space structure (fine-tuning vs. prompting vs. RAG, with multiple evaluation dimensions: accuracy, cost, generalization, alignment, data requirements) generates genuinely distinct angles that would not be retrievable via a single tradition pass. 14 angles is within the hard-input range (20–30 ceiling) with headroom — I did not pad to 20 because the goal was coverage of confirmed distinct traditions, not maximum count.
