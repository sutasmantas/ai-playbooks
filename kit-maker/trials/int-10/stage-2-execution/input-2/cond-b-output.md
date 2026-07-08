# Angle Generation — Chain-of-Thought Reasoning in LLMs
**Condition B | Input 2 | angle-gen-kit full procedure**

---

## INTAKE BRIEF
============

**Topic:** Chain-of-thought (CoT) reasoning in LLMs — the conditions under which it works, the conditions under which it fails, and the mechanistic reasons for both.

**Anchor vocabulary:** "chain-of-thought reasoning" (NLP/ML research tradition), "LLMs" (ML-systems tradition)

**Candidate vocabulary traditions:**

1. NLP/ML prompting — chain-of-thought prompting, few-shot CoT, zero-shot CoT ("let's think step by step"), self-consistency, tree of thought, graph of thought, step-by-step reasoning, rationale generation, reasoning elicitation, scratchpad
2. ML learning/training (process supervision) — process reward model (PRM), outcome supervision, intermediate step supervision, RLHF with reasoning traces, fine-tuning on CoT, learning from rationales, reward shaping over steps
3. Mechanistic interpretability — latent reasoning, hidden states, attention patterns, internal computation, transformer circuits, emergent reasoning, emergent abilities, in-context learning mechanisms, representation analysis
4. AI safety/alignment (faithfulness) — unfaithful reasoning, post-hoc rationalization, deceptive alignment, sycophancy, faithful explanation, causal role of reasoning trace, alignment via CoT, reasoning transparency
5. Formal methods/logic — logical consistency, deductive reasoning, inductive reasoning, abductive reasoning, neuro-symbolic, arithmetic reasoning, mathematical proof, symbolic AI integration, formal verification of reasoning
6. Cognitive science/psychology — System 2 reasoning, dual-process theory, working memory, problem decomposition, metacognition, analogical reasoning, human vs. LLM reasoning comparison, cognitive architecture
7. ML evaluation/benchmarking — benchmark performance, data contamination, benchmark saturation, evaluation methodology, reasoning benchmarks (GSM8K, MATH, BBH, ARC, HellaSwag), generalization measurement, evaluation validity

NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

**Question type:** EXPLORATORY
(The prompt "when it works, when it fails, and why" asks for the space of findings across multiple dimensions — success conditions, failure conditions, mechanistic explanation. No explicit comparison pair or intervention-outcome structure is stated.)

**Scope markers:** None stated — inferred scope: chain-of-thought reasoning as an approach (prompting-time and training-time), across model sizes and task types, not restricted to a single model family or benchmark. The "why" framing includes mechanistic and theoretical explanations, not just behavioral outcomes.

**Known exclusions:** None stated.

**Domain maturity estimate:** academic-heavy
Basis: anchor vocabulary is research-academic ("chain-of-thought reasoning"); the topic has a large arXiv/NeurIPS/ICML/ACL literature; user did not mention specific toolkits, deployment platforms, or engineering contexts; absence of practitioner framing suggests academic entry point.

**Survey paper status:** CHECK REQUIRED — Source B is UNAVAILABLE in this execution context.

**Source B status:** UNAVAILABLE — MODERATE
Source A + Source C together identified 7 distinct vocabulary traditions. Severity: MODERATE. Proceeding with VOCABULARY SELF-REPORT FLAG applied.

**Absent-term signal (Source C):** User did NOT use the following terms that the LLM would expect to appear in this literature:
- "scratchpad" (alternative framing used in Nye et al. 2021 foundational paper)
- "faithfulness" (the gap between CoT trace and actual computation — AI safety framing)
- "process reward model" / PRM (training-time analog of prompting-time CoT)
- "self-consistency" (majority voting over multiple CoT paths — a key variant)
- "emergent" (CoT as an emergent ability vs. a learned behavior)
- "benchmark contamination" (confound on all positive CoT results)
- "System 2" (cognitive science analog used in cross-disciplinary framing)

---

## COVERAGE MAP
============

**Tradition 1: NLP/ML prompting**
Representative terms: chain-of-thought prompting, few-shot CoT, zero-shot CoT, self-consistency, tree of thought, step-by-step, rationale, scratchpad
Planned angle slot: Confirmatory A1
Gap flag: No — will be covered by A1

**Tradition 2: ML learning/training (process supervision)**
Representative terms: process reward model, outcome supervision, intermediate step supervision, RLHF with CoT, fine-tuning on reasoning traces
Planned angle slot: Confirmatory A2
Gap flag: No — will be covered by A2

**Tradition 3: Mechanistic interpretability**
Representative terms: hidden states, attention patterns, internal computation, transformer circuits, emergent abilities, representation analysis, latent reasoning
Planned angle slot: Confirmatory A3
Gap flag: No — will be covered by A3

**Tradition 4: AI safety/alignment (faithfulness)**
Representative terms: unfaithful reasoning, post-hoc rationalization, deceptive alignment, faithful explanation, causal role of CoT trace
Planned angle slot: Confirmatory A4
Gap flag: No — will be covered by A4

**Tradition 5: Formal methods/logic**
Representative terms: logical consistency, neuro-symbolic, arithmetic reasoning, deductive reasoning, mathematical proof
Planned angle slot: Confirmatory A5
Gap flag: No — will be covered by A5

**Tradition 6: Cognitive science/psychology**
Representative terms: System 2 reasoning, dual-process theory, working memory, metacognition, human vs. LLM reasoning comparison
Planned angle slot: Confirmatory A6
Gap flag: No — will be covered by A6

**Tradition 7: ML evaluation/benchmarking**
Representative terms: benchmark contamination, benchmark saturation, evaluation methodology, GSM8K, MATH, reasoning evaluation validity
Planned angle slot: Confirmatory A7
Gap flag: No — will be covered by A7

**Traditions NOT yet represented in planned list:** None — all 7 traditions from intake brief have at least one planned angle slot.

**Cross-disciplinary slot (required):**
Target tradition: Educational psychology / learning science — specifically worked examples research, self-explanation effect, cognitive load theory, expertise reversal effect
Basis for selection: Educational psychology has a 40+ year empirical literature on when explicit step-by-step reasoning (worked examples, self-explanation prompts) aids or hinders learning. The expertise reversal effect shows that explicit reasoning scaffolding harms expert learners — a finding that may have direct analogues for larger/more capable LLMs. This tradition does NOT appear in the intake brief vocabulary and uses non-ML terminology (cognitive load, expertise reversal, self-explanation, redundancy effect). It is structurally distinct from all seven identified traditions.
Planned angle slot: Cross-disciplinary C1

---

## TYPE ALLOCATIONS
================

Slot A1 (Confirmatory — Tradition 1 NLP/ML prompting): CoT prompting techniques and behavioral effectiveness
Slot A2 (Confirmatory — Tradition 2 ML learning/training): Process supervision and training-time CoT
Slot A3 (Confirmatory — Tradition 3 Mechanistic interpretability): Internal computation during CoT
Slot A4 (Confirmatory — Tradition 4 AI safety/alignment): Faithfulness of CoT traces
Slot A5 (Confirmatory — Tradition 5 Formal methods/logic): CoT and formal/mathematical reasoning
Slot A6 (Confirmatory — Tradition 6 Cognitive science/psychology): Human reasoning analogs and dual-process
Slot A7 (Confirmatory — Tradition 7 ML evaluation/benchmarking): Evaluation validity and data contamination
Slot N1 (Null-hypothesis): Assigned — disconfirming evidence on CoT effectiveness
Slot D1 (Adversarial-FLAGGED): Starting vocabulary from knowledge representation / program synthesis / automated planning — NOT FROM: NLP/ML prompting, mechanistic interpretability, AI safety/alignment, formal methods, cognitive science, education, benchmarking
Slot C1 (Cross-disciplinary): Education/pedagogy (worked examples, cognitive load theory)

---

## ANGLE LIST

---

### ANGLE 1: Chain-of-Thought Prompting Techniques and Their Behavioral Effectiveness
===========
**Vocabulary tradition:** NLP/ML prompting
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Which CoT prompting variants (few-shot, zero-shot, self-consistency, tree of thought, structured CoT) produce measurable performance gains; on what task types; at what model scales; effect sizes vs. standard prompting baselines; which prompting strategies generalize across tasks vs. being task-specific

**Source type (academic):** arXiv cs.CL + cs.LG (NOT cs.AI alone — per platform-calibration.md)
**Source type (practitioner):** GitHub repositories with reasoning benchmark evaluation frameworks (filter: ≥50 stars, active commit history)

**Queries:**
Q1: "chain-of-thought" prompting performance few-shot large language models reasoning tasks 2022 2023 2024
Q2: zero-shot chain-of-thought "let's think step by step" reasoning effectiveness benchmark comparison
Q3: self-consistency chain-of-thought majority voting aggregation reasoning accuracy 2023 2024
Q4: tree-of-thought graph-of-thought program-of-thought CoT variants comparison LLM reasoning 2024 2025

**Coverage-gap note:** Queries focus on outcome benchmarks (accuracy, task performance). They do not directly surface papers on CoT prompt format sensitivity (how exactly the prompt is worded affects outcomes) — that facet is partially covered by A1 Q1–Q4 but may need a targeted search if prompt-sensitivity papers are missing from results.

---

### ANGLE 2: Process Supervision and Training-Time Chain-of-Thought
===========
**Vocabulary tradition:** ML learning/training (process supervision)
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** How training on intermediate reasoning steps (process reward models, PRMs) vs. final answer supervision (outcome reward models) affects reasoning quality; which approach produces better generalization; failure modes of PRM training; evidence for/against outcome supervision being sufficient

**Source type (academic):** arXiv cs.LG + cs.CL (process reward literature straddles both categories)
**Source type (practitioner):** OpenAI technical reports, DeepMind/Google technical reports (these are practitioner-produced but research-grade; structurally distinct ingest from arXiv)

**Queries:**
Q1: process reward model "process supervision" OR "outcome supervision" reasoning language model intermediate steps 2023 2024 2025
Q2: training chain-of-thought fine-tuning reasoning traces intermediate steps language model generalization
Q3: "let's verify step by step" process reward mathematical reasoning LLM training 2024 2025

**Coverage-gap note:** The literature on synthetic CoT data generation for training (generating CoT traces to use as training signal) is adjacent to this angle but may not appear unless specifically queried. If initial results are sparse, add: "synthetic chain-of-thought training data generation language models reasoning" as Q4.

---

### ANGLE 3: Mechanistic Interpretability of Chain-of-Thought — What Happens Inside the Model
===========
**Vocabulary tradition:** Mechanistic interpretability
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** What internal computations occur during CoT generation; whether the reasoning trace reflects actual computation or is post-hoc; attention head patterns during multi-step reasoning; whether emergent CoT abilities arise from scale or training; how scratchpad tokens influence subsequent computation

**Source type (academic):** arXiv cs.LG + cs.CL (mechanistic interpretability papers span both)
**Source type (practitioner):** Anthropic Interpretability Team blog posts and technical reports; EleutherAI research reports — these are practitioner-produced but contain primary interpretability findings not on arXiv

**Queries:**
Q1: chain-of-thought mechanistic interpretability transformer internal computation hidden states 2023 2024 2025
Q2: scratchpad tokens intermediate computation language model forward pass reasoning mechanism
Q3: emergent reasoning abilities scale chain-of-thought language models "in-context learning" mechanism 2024

**Coverage-gap note:** The specific question of whether CoT tokens causally influence model outputs (vs. being a side effect of an internal computation that proceeds independently) is a particularly important facet. If papers using causal intervention methodology (activation patching, logit lens analysis) do not surface from Q1-Q3, add: "causal intervention chain-of-thought scratchpad causal role computation language model 2024 2025."

---

### ANGLE 4: Faithfulness of Chain-of-Thought — Do Reasoning Traces Reflect Actual Reasoning?
===========
**Vocabulary tradition:** AI safety/alignment (faithfulness)
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Evidence that CoT traces are or are not causally responsible for model outputs; studies measuring the gap between stated reasoning and actual computation; post-hoc rationalization findings; how sycophancy affects CoT traces; implications for using CoT as an alignment or interpretability mechanism

**Source type (academic):** arXiv cs.CL + cs.LG; NeurIPS/ICML proceedings (faithfulness papers tend to appear at top ML venues)
**Source type (practitioner):** Anthropic, DeepMind alignment team technical reports — primary source for faithfulness evaluation methodology

**Queries:**
Q1: chain-of-thought faithfulness "unfaithful reasoning" OR "post-hoc rationalization" language model causal 2023 2024 2025
Q2: language model reasoning trace faithful explanation causal role sycophancy counterfactual intervention
Q3: "chain of thought" explanation fidelity alignment transparency "does not reflect" computation 2024 2025

**Coverage-gap note:** Borderline overlap with A3 (mechanistic interpretability). The distinction: A3 asks "what computation happens" (mechanistic); A4 asks "does the trace tell the truth about it" (faithfulness evaluation). Papers that do causal interventions on CoT traces address both angles. Flag for human judgment if both angles retrieve the same paper cluster — this may justify merging A3 and A4 into one angle, or splitting more narrowly by method (causal intervention vs. behavioral probe).

---

### ANGLE 5: Chain-of-Thought and Formal/Mathematical Reasoning — Logical Consistency and Limits
===========
**Vocabulary tradition:** Formal methods/logic
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Performance of CoT on formal reasoning tasks (arithmetic, algebra, logical deduction, proof steps); failure modes in logical consistency (invalid deductive steps, arithmetic errors that propagate through chains); conditions under which explicit steps improve vs. degrade formal reasoning; comparison to symbolic solvers

**Source type (academic):** arXiv cs.CL + cs.LG + cs.LO (cs.LO for formal logic — different category, different author population)
**Source type (practitioner):** GitHub repositories for mathematical reasoning evaluation (e.g., MATH benchmark tooling, theorem proving integration); filter: ≥50 stars

**Queries:**
Q1: chain-of-thought reasoning arithmetic errors logical consistency failures LLM multi-step 2023 2024 2025
Q2: "chain of thought" mathematical reasoning GSM8K MATH benchmark accuracy failure analysis 2024 2025
Q3: neuro-symbolic integration chain-of-thought formal reasoning deductive LLM 2023 2024

**Coverage-gap note:** Queries focus on benchmark tasks. The question of whether CoT LLMs commit specific classes of logical fallacies (circular reasoning, invalid substitution) — as opposed to arithmetic errors — is a distinct facet. If not surfaced: add "logical fallacies chain-of-thought deductive errors language models systematic 2024."

---

### ANGLE 6: Cognitive Science Perspective — Chain-of-Thought as System 2 Analog
===========
**Vocabulary tradition:** Cognitive science/psychology
**Angle type:** Confirmatory
**Predicted research character:** consensus (theoretical/comparative; some empirical on human-LLM reasoning comparison)
**What to extract:** Theoretical frameworks comparing CoT to dual-process theory (System 1/System 2); empirical comparisons between human step-by-step reasoning and LLM CoT; metacognition and self-monitoring during CoT; working memory constraints and their LLM analogs; whether CoT LLMs exhibit planning or only simulation of planning

**Source type (academic):** arXiv cs.CL + cognitive science journals (Cognition, Psychological Review) — different ingest than arXiv; PsycINFO for psychology-side literature
**Source type (practitioner):** ACL Anthology cognitive NLP papers; blog posts from cognitive scientists commenting on LLM reasoning

**Queries:**
Q1: language model chain-of-thought "system 2" reasoning dual-process theory comparison analogy 2023 2024 2025
Q2: LLM reasoning human cognitive science working memory planning decomposition analogy 2024 2025
Q3: chain-of-thought metacognition self-monitoring reasoning language model cognitive architecture 2024 2025

**Coverage-gap note:** The literature on whether CoT constitutes "genuine" deliberate reasoning vs. a simulacrum is philosophically contentious; papers may appear in philosophy of mind journals not indexed by arXiv. If initial retrieval is sparse from a cognitive science framing: add Semantic Scholar citation network exploration from the dual-process literature as a supplemental source.

---

### ANGLE 7: Evaluation Validity — Benchmark Contamination, Saturation, and Measurement of CoT Gains
===========
**Vocabulary tradition:** ML evaluation/benchmarking
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Evidence of data contamination in CoT benchmark results; studies measuring whether reported CoT gains hold on held-out or novel tasks; benchmark saturation timelines; evaluation methodology critiques; what properties of a task actually cause CoT to improve performance (difficulty, multi-step structure, symbolic reasoning requirement)

**Source type (academic):** arXiv cs.CL + cs.LG; NeurIPS/ICML evaluation track proceedings
**Source type (practitioner):** GitHub repositories for new reasoning benchmark construction (filter: ≥50 stars, active development); BIG-bench and related community benchmark projects

**Queries:**
Q1: chain-of-thought benchmark contamination "data contamination" evaluation validity reasoning LLM 2024 2025
Q2: reasoning evaluation methodology LLM benchmark saturation generalization "out-of-distribution" 2024 2025
Q3: what tasks benefit chain-of-thought prompting task properties difficulty structure 2023 2024 2025

**Coverage-gap note:** The specific question of what TASK PROPERTIES (not model properties) predict CoT benefits is underserved by queries focused on benchmark performance. If not surfaced: add "task complexity features chain-of-thought benefit prediction analysis 2024."

---

### ANGLE 8 (N1): Evidence That Chain-of-Thought Does Not Work, Does Not Generalize, or Is Overrated
===========
**Vocabulary tradition:** NLP/ML prompting (disconfirming variant)
**Angle type:** Null-hypothesis
**Predicted research character:** empirical (negative results; these may appear in workshop proceedings, blog posts, or as negative finding sections within positive papers — less likely to be full standalone papers)
**What to extract:** Cases where CoT prompting degrades performance or adds noise; evidence that CoT gains do not transfer to new benchmarks or model families; evidence that CoT improvements are smaller than claimed or are artifacts of benchmark contamination; evidence that smaller models are harmed by CoT prompting; replication failures; null results from CoT ablations

**Source type (academic):** arXiv cs.CL + cs.LG; workshop tracks (NeurIPS negative results workshops); ML reproducibility challenge reports
**Source type (practitioner):** GitHub issues on reasoning benchmark repos where practitioners report unexpected failures; HN/Reddit threads on CoT failures (vocabulary-discovery only; do not use for recall claims)

**Queries:**
Q1: chain-of-thought prompting failure "does not improve" OR "hurts performance" OR "negative results" language models 2023 2024 2025
Q2: chain-of-thought reasoning limitations "smaller models" degraded performance when fails harmful 2023 2024 2025
Q3: "chain of thought" replication failure overestimated gains artifacts evaluation language model 2024 2025

**Coverage-gap note:** Negative results are structurally underrepresented in academic literature (publication bias). If Q1-Q3 return few results: this is expected and IS itself a finding to record (absence of published null results is evidence of publication bias on CoT, not evidence that null results don't exist). Supplement with GitHub issue thread searches and ML reproducibility challenge reports.

---

### ANGLE 9 (D1): Program Synthesis and Intermediate Computation — Does Chain-of-Thought Map Onto Known Computation Models?
===========
**Vocabulary tradition:** Knowledge representation / program synthesis / automated planning
**Angle type:** Adversarial-FLAGGED
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

Generating from this tradition: knowledge representation, program synthesis, automated planning, search algorithms, symbolic AI. Explicitly EXCLUDING from generation: "chain-of-thought," "CoT," "few-shot prompting," "language model," "LLM," "reasoning trace," "faithfulness," "benchmark," "cognitive science."

**Predicted research character:** gap (moderate literature — this tradition does not typically study LLMs directly; it may have foundational work on intermediate computation that the LLM CoT literature has not cited)
**What to extract:** How the knowledge representation and automated planning literature conceptualizes intermediate reasoning steps; whether CoT maps onto known models of step-wise planning or search (e.g., heuristic search, constraint propagation, policy decomposition); what this literature would predict about the conditions under which intermediate step generation helps vs. hurts; gaps between LLM CoT behavior and what the AI planning literature would expect

**Source type (academic):** arXiv cs.AI + cs.SC (symbolic computation); AAAI proceedings; IJCAI proceedings — these have different author populations from cs.CL
**Source type (practitioner):** Deprioritized — this is an academic tradition with minimal practitioner production on the specific intersection

**Queries:**
Q1: intermediate computation steps program synthesis neural networks problem solving generalization 2023 2024 2025
Q2: knowledge representation multi-step inference symbolic computation neural integration intermediate states reasoning
Q3: automated planning language models step-by-step decomposition search heuristic reasoning 2024 2025

**Coverage-gap note:** This angle may return sparse results if the program synthesis / planning community has not engaged directly with LLM CoT. Sparse results ARE informative — they would indicate a cross-disciplinary gap (the two communities have not connected their work). Record the absence as a finding.

---

### ANGLE 10 (C1): Educational Psychology — When Do Explicit Reasoning Steps Help or Hurt?
===========
**Vocabulary tradition:** Educational psychology / learning science (NOT in intake brief)
**Angle type:** Cross-disciplinary
**Predicted research character:** empirical (40+ years of experimental literature)
**What to extract:** Worked examples effect (when explicit step-by-step solutions help learners); expertise reversal effect (when worked examples harm expert learners); self-explanation effect (prompting learners to explain each step improves outcomes under some conditions); cognitive load theory (explicit steps can overload working memory); redundancy effect (showing steps that the learner can infer is harmful, not neutral); transferability of findings to LLM CoT behavior

**Source type (academic):** ERIC database (education research); Psychological Review; Journal of Educational Psychology; Cognition and Instruction — these are NOT arXiv-indexed; different ingest policy from all other angles
**Source type (practitioner):** Deprioritized for this cross-disciplinary angle — education practitioners do not publish in ML venues; the academic literature is the primary signal

**Queries:**
Q1: worked examples "self-explanation" explicit reasoning steps learning cognitive load theory expert novice 2020 2021 2022 2023 2024
Q2: "expertise reversal effect" step-by-step reasoning instruction performance when harmful redundancy 2018 2024
Q3: explicit reasoning scaffolding problem solving learning performance LLM analogy transfer 2023 2024 2025

**Coverage-gap note:** The direct analogy between educational psychology expertise reversal and LLM scale (larger model = "more expert") may not appear in the literature as an explicit connection — the researcher may need to synthesize it. If Q3 returns thin results: this confirms the analogy is currently understated in the literature and must be synthesized from the Q1+Q2 educational literature applied to the LLM context.

---

## GATE SUMMARY
============

**Gate 1 — Completeness:** PASS
- Null-hypothesis angle present: YES (Angle 8, N1) — explicit disconfirming vocabulary ("does not improve," "negative results," "failure") ✓
- Adversarial angle present: YES (Angle 9, D1) — ADVERSARIAL-FLAGGED label and dispatch note present ✓
- Cross-disciplinary angle present: YES (Angle 10, C1) — education/pedagogy tradition; NOT in intake brief ✓
- Source-type coverage: domain is academic-heavy; practitioner sources included for all confirmatory angles (GitHub, technical reports) ✓
- Vocabulary-tradition map: 9 distinct tradition names across coverage map and angle list ✓

**Gate 2 — Distinctness:** PASS with one flag
- A1 vs A2: distinct (inference-time prompting vs. training-time supervision) ✓
- A1 vs A3: distinct (behavioral outcomes vs. internal mechanisms) ✓
- A3 vs A4: BORDERLINE — mechanistic interpretability (A3) and faithfulness (A4) share some causal-intervention methodology. Verdict: PASS — different research communities (interpretability community vs. alignment/safety community), different primary question ("what happens" vs. "does the trace tell the truth"). Flag for human judgment if retrieval produces identical paper clusters.
- A5 vs A7: distinct (logical/mathematical properties vs. evaluation methodology) ✓
- N1 vs all confirmatory: distinct (disconfirming vocabulary) ✓
- D1: distinct (different starting vocabulary, different disciplinary source) ✓
- C1: distinct (education databases, non-ML vocabulary) ✓
- Vocabulary-tradition distinctness: each angle has a different tradition label ✓

**Gate 3 — Launchability:** PASS
- All 10 angles have at least one concrete, pasteable query string ✓
- No TBD, placeholder, or unfilled markers in any query ✓
- Source type (academic) and Source type (practitioner) are specific for all angles ✓

**Gate 4 — Scoring prohibition:** PASS
- No angles ranked, filtered, or prioritized by subjective quality judgment ✓
- No "this angle is likely most useful" language ✓
- Type allocation used structural criteria only (vocabulary-tradition coverage, null-hypothesis requirement, adversarial separation) ✓

**Overall verdict:** PASS — dispatch ready

**Flags requiring human judgment:**
1. A3/A4 borderline overlap — if retrieval produces largely identical paper clusters, consider merging into one angle with explicit mechanistic-faithfulness split or reassigning one angle to cover a tradition gap.
2. VOCABULARY SELF-REPORT FLAG — all 9 vocabulary traditions were enumerated by LLM only. Source B (survey-paper probe) was unavailable. External validation via survey-paper probe recommended before treating this tradition list as exhaustive. One tradition present in the actual literature may be missing.
3. N1 expected sparse coverage — publication bias against null results is documented; sparse retrieval from N1 is a finding (publication bias), not a search failure. Record the absence.
4. A9 (D1 adversarial) expected gap literature — this tradition may not engage with LLM CoT directly; sparse results are informative, not a failure.
5. Source B assessment: MODERATE — 7 traditions identified from Source A+C; LLM coverage of this topic is expected to be strong given its prominence in training data; however, the exact vocabulary used by cognitive neuroscience or philosophy of mind communities on this topic is unverified.

---

**Summary counts:**
- Total angles: 10
- Confirmatory angles: 7 (A1–A7)
- Null-hypothesis angles: 1 (N1 / Angle 8)
- Adversarial angles: 1 (D1 / Angle 9)
- Cross-disciplinary angles: 1 (C1 / Angle 10)
- Distinct vocabulary traditions: 9 (NLP/ML prompting; ML learning/training; Mechanistic interpretability; AI safety/alignment; Formal methods/logic; Cognitive science/psychology; ML evaluation/benchmarking; Knowledge representation/program synthesis [adversarial]; Education/pedagogy [cross-disciplinary])
