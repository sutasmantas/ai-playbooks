# Condition C Output — Context Length Effects on LLM Performance
**Input ID:** 3  
**Condition:** C (Source B unavailable — LLM-only vocabulary bootstrap)  
**Kit version:** angle-gen-kit  
**Date:** 2026-07-05

---

## INTAKE BRIEF
============
**Topic:** How context length affects large language model performance — spanning task accuracy, retrieval fidelity, instruction following, and mechanistic degradation patterns across varying input sequence lengths.

**Anchor vocabulary:** "context length" (ML-systems / NLP tradition), "LLM" (ML-systems tradition), "performance" (ML-systems / benchmark evaluation tradition)

**Candidate vocabulary traditions:**

1. **ML benchmark evaluation / NLP evaluation** — context window, long-context benchmark, downstream task accuracy, perplexity, recall at position, token budget, evaluation harness
2. **Transformer architecture / attention mechanisms** — positional encoding, rotary position embedding (RoPE), ALiBi, sliding window attention, sequence length generalization, attention head, key-value cache, memory complexity, context window extension
3. **Information retrieval / retrieval-augmented generation (RAG)** — needle-in-a-haystack, lost in the middle, multi-document QA, retrieval precision, document chunking, position bias, dense retrieval
4. **Safety / alignment** — instruction following at long context, context manipulation, prompt injection, jailbreaking via long context, behavioral consistency, sycophancy at length
5. **Cognitive science / human memory research** — serial position effect, primacy bias, recency bias, working memory analogy, attention span, interference effects

NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

**Question type:** EXPLORATORY  
(The prompt contains causal framing "how X affects Y," but names no specific comparison pair, no specific performance metric, and no specific model family. Default EXPLORATORY applies.)

**Scope markers:** None stated — inferred scope: general relationship between input sequence length and model output quality, across task types and model families, not restricted to a specific domain or date range.

**Known exclusions:** None stated.

**Domain maturity estimate:** Mixed (academic-heavy for foundational work; practitioner-heavy for long-context benchmark design and deployment evaluation)  
Basis: anchor vocabulary is ML-academic ("LLM," "context length"); the most prominent evaluation paradigms for this topic ("needle-in-a-haystack," "lost in the middle") are practitioner-coined terms widely used in both academic and blog-post literature; major findings (position bias, KV cache constraints) have both arXiv-heavy and technical-report-heavy literatures.

**Survey paper status:** CHECK REQUIRED — Source B unavailable at execution time. Survey-paper probe not run.

**Source B status:** UNAVAILABLE — MODERATE (Source A + Source C together produced ≥5 distinct vocabulary traditions; severity is MODERATE, not HIGH RISK; proceeding with VOCABULARY SELF-REPORT FLAG active).

**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only. Source B (survey-paper probe) was not run. Expected angle coverage: MODERATE, not FULL. Cross-disciplinary angles may miss traditions that appear only in survey-paper title vocabulary. External validation recommended before treating the angle list as complete.

---

## Absent-term signal (Source C)

User did NOT use any of these terms, which are prominent in the relevant literature:
- "positional encoding" — the core architectural mechanism determining how models handle position within long sequences
- "perplexity" — the standard language modeling metric used to measure performance at different sequence lengths
- "needle-in-a-haystack" — the most widely-cited evaluation paradigm for long-context retrieval performance (practitioner-coined)
- "lost in the middle" — a key empirical finding about degraded performance for information placed in the middle of a long context (Liu et al. 2023)
- "attention sink" — a mechanistic finding about attention weight concentration at early tokens under long context (StreamingLLM)
- "KV cache" — the primary hardware-level constraint that limits practical context length deployment
- "RoPE" / "rotary position embedding" — the most-used positional encoding family for extending context window

These absent terms indicate the user is approaching from a high-level framing ("context length affects performance"), not from within any specific technical tradition. Vocabulary bootstrap from Source A is especially important for this input.

---

## INTAKE GATE CHECK

- [x] Topic field populated (not "TBD") ✓
- [x] Candidate vocabulary traditions ≥2 entries: 5 traditions identified ✓
- [x] Question type classified: EXPLORATORY ✓

**Gate passes. Proceeding to angle-generation.md.**

---

## COVERAGE MAP
============

**Tradition 1: ML benchmark evaluation / NLP evaluation**  
Representative terms: context window, long-context benchmark, downstream task accuracy, evaluation harness, token budget, position bias, perplexity  
Planned angle slot: Confirmatory A1  
Gap flag: No — this is the most directly addressable tradition from the user's prompt vocabulary

**Tradition 2: Transformer architecture / attention mechanisms**  
Representative terms: positional encoding, RoPE, ALiBi, sliding window attention, sequence length generalization, attention head saturation, context window extension  
Planned angle slot: Confirmatory A2  
Gap flag: No — well-covered by arXiv cs.LG + cs.CL literature

**Tradition 3: Information retrieval / RAG**  
Representative terms: needle-in-a-haystack, lost in the middle, multi-document QA, position bias, document chunking, retrieval precision  
Planned angle slot: Confirmatory A3  
Gap flag: No — prominent practitioner and academic literature available

**Tradition 4: Safety / alignment**  
Representative terms: instruction following at long context, behavioral consistency, context manipulation, prompt injection via long input  
Planned angle slot: Confirmatory A4  
Gap flag: No — alignment research community has studied this; arXiv cs.CL + RLHF literature

**Tradition 5: Cognitive science / human memory research**  
Representative terms: serial position effect, primacy bias, recency bias, working memory analogy, interference effects  
Planned angle slot: Confirmatory A5 (also informs adversarial slot D1)  
Gap flag: Partial — the cognitive science literature studies humans, not LLMs; the LLM studies that use this vocabulary are predominantly arXiv ML papers borrowing the framing, not cognitive science journals directly

**Traditions NOT yet represented in the planned list from intake brief:**  
All 5 intake traditions have planned angle slots. However, angle generation will also cover:

- Systems / hardware / inference engineering — KV cache, memory bandwidth, computational cost — discovered during Source A vocabulary bootstrap (not in intake brief)
- Measurement theory / evaluation validity — construct validity, benchmark contamination, task difficulty confounds — adversarial perspective
- Computational linguistics / psycholinguistics — discourse coherence, coreference resolution, long-range dependency — cross-disciplinary slot
- Model scaling / capability emergence — scaling laws, emergent capabilities as context increases — discovered during Source A bootstrap

**Cross-disciplinary slot (required):**  
Target tradition: Computational linguistics / psycholinguistics  
Basis for selection: Computational linguistics has an independent research tradition studying how NLP systems handle long-range dependencies, discourse structure, coreference, and coherence in long documents — using vocabulary (discourse coherence, anaphora resolution, narrative structure) distinct from the ML evaluation and architecture traditions in the intake brief. This tradition would surface literature from ACL, EMNLP, and Computational Linguistics journal that may not appear in ML-centric searches.

---

## TYPE ALLOCATIONS
================

Slot A1 (Confirmatory — Tradition 1: ML benchmark evaluation / NLP evaluation): Task performance degradation across context lengths  
Slot A2 (Confirmatory — Tradition 2: Transformer architecture / attention mechanisms): Positional encoding and attention degradation under long sequences  
Slot A3 (Confirmatory — Tradition 3: Information retrieval / RAG): Retrieval accuracy and position bias within long context windows  
Slot A4 (Confirmatory — Tradition 4: Safety / alignment): Instruction following degradation at long context  
Slot A5 (Confirmatory — Tradition 5: Cognitive science): Serial position effects and primacy/recency biases in LLM processing  
Slot A6 (Confirmatory — Systems/hardware): KV cache efficiency and hardware constraints on long-context performance  
Slot A7 (Confirmatory — Model scaling): Context length scaling laws and emergent capabilities  
Slot N1 (Null-hypothesis): Evidence that context length does NOT degrade LLM performance — disconfirming variant of Tradition 1  
Slot D1 (Adversarial-FLAGGED): Starting from measurement theory / evaluation validity vocabulary — NOT FROM: benchmark accuracy, positional encoding, attention mechanism, sequence length, perplexity (all used in A1/A2/A3)  
Slot C1 (Cross-disciplinary): Computational linguistics / psycholinguistics — NOT in intake brief

**Total planned angles: 10**  
**Justification for >5 angles:** Five distinct vocabulary traditions identified at intake, plus three additional traditions discovered during Source A bootstrap. The topic spans ML systems, architecture, IR, safety, cognitive science, hardware, and evaluation methodology — a genuinely multi-tradition domain. 10 angles is within the 5–12 standard range.

---

## FULL ANGLE LIST

---

### ANGLE 1: Task Performance Degradation Across Increasing Context Lengths
===========================================================================
**Vocabulary tradition:** ML benchmark evaluation / NLP evaluation  
**Angle type:** Confirmatory  
**Predicted research character:** Empirical — expect controlled studies measuring accuracy, F1, or exact match across varying context lengths; benchmark papers with ablations on context window size  

**What to extract:** Effect sizes for performance degradation at different context lengths; which task types are most sensitive (QA, summarization, reasoning, coding); whether degradation is monotonic or threshold-based; position within context as a moderator  

**Source type (academic):** arXiv cs.CL + cs.LG  
**Source type (practitioner):** GitHub repositories for long-context evaluation frameworks (e.g., LongBench, SCROLLS, ZeroScrolls, LongEval); model release technical reports (Anthropic, Google, OpenAI)  

**Queries:**  
Q1: `context length performance degradation large language models benchmark evaluation empirical`  
Q2: `long context LLM accuracy task performance NLP downstream evaluation 2023 2024 2025`  
Q3: `context window size effect question answering summarization reasoning transformer evaluation`  

**Coverage-gap note:** These queries target absolute performance at varying lengths. Performance relative to a same-model short-context baseline (within-model degradation rate) may require adding queries that explicitly name the contrast condition.

---

### ANGLE 2: Positional Encoding and Attention Mechanisms Under Long Sequences
=============================================================================
**Vocabulary tradition:** Transformer architecture / attention mechanisms  
**Angle type:** Confirmatory  
**Predicted research character:** Empirical — expect architecture papers with ablations on positional encoding schemes; mechanistic interpretability studies of attention patterns at long ranges  

**What to extract:** Which positional encoding schemes (RoPE, ALiBi, sinusoidal, NoPE) degrade most/least with context length; attention head behavior at long context; interpolation vs. extrapolation as extension strategies; sliding window attention tradeoffs  

**Source type (academic):** arXiv cs.LG + cs.CL  
**Source type (practitioner):** GitHub model repositories (LLaMA, Mistral, Phi) — README and issue threads for context extension implementations; model architecture notes  

**Queries:**  
Q1: `positional encoding context length generalization extrapolation transformers long sequence performance`  
Q2: `rotary position embedding RoPE context window extension performance degradation interpolation`  
Q3: `attention mechanism long context sliding window ALiBi sequence length scaling performance`  
Q4: `transformer architecture context length limitation attention head saturation empirical analysis`  

**Coverage-gap note:** Recent sub-quadratic attention architectures (Mamba, RWKV, Hyena) represent an alternative framing — context length effects in state-space models use different vocabulary and would require separate queries targeting those architectures.

---

### ANGLE 3: Retrieval Accuracy and Position Bias Within Long Context Windows
=============================================================================
**Vocabulary tradition:** Information retrieval / retrieval-augmented generation (RAG)  
**Angle type:** Confirmatory  
**Predicted research character:** Empirical — expect controlled experiments varying position of target information within a long context; studies measuring recall as a function of distance from start/end of context  

**What to extract:** Magnitude of position bias ("lost in the middle" effect); which retrieval tasks are most affected; whether training on position-randomized data mitigates bias; interaction with retrieval architecture (dense vs. sparse retrieval)  

**Source type (academic):** arXiv cs.CL + cs.IR  
**Source type (practitioner):** Technical blog posts from AI labs (Anthropic, OpenAI, Cohere) on context window performance; GitHub NIAH (needle-in-a-haystack) evaluation repositories  

**Queries:**  
Q1: `needle in a haystack long context retrieval evaluation language models position bias`  
Q2: `lost in the middle long context LLM retrieval performance document position 2023 2024`  
Q3: `retrieval augmented generation context length performance multi-document question answering position`  

**Coverage-gap note:** The needle-in-a-haystack evaluation is a single-retrieval paradigm. Multi-hop retrieval (finding multiple pieces of information spread across a long context) may not be fully captured by these queries and is a distinct failure mode.

---

### ANGLE 4: Instruction Following Degradation at Extended Context Lengths
==========================================================================
**Vocabulary tradition:** Safety / alignment  
**Angle type:** Confirmatory  
**Predicted research character:** Empirical — expect studies on alignment-relevant behaviors (instruction compliance, constraint adherence, refusal rates) as context length varies; studies on context manipulation attacks  

**What to extract:** At what context length do models begin ignoring early instructions; whether system-prompt instruction adherence degrades differently from user-instruction adherence; susceptibility to context-based prompt injection as length increases  

**Source type (academic):** arXiv cs.CL + cs.LG (alignment track)  
**Source type (practitioner):** GitHub red-teaming and safety evaluation repositories; Anthropic/DeepMind technical reports on instruction following at long context  

**Queries:**  
Q1: `instruction following long context degradation large language models alignment 2023 2024 2025`  
Q2: `LLM context length prompt injection instruction override long input safety evaluation`  
Q3: `system prompt compliance context window length behavioral consistency language model`  

**Coverage-gap note:** The safety angle focuses on adversarial context manipulation. Non-adversarial behavioral drift (model forgetting instructions without adversarial intent) is a related but distinct failure mode that may be better covered by the benchmark evaluation angle.

---

### ANGLE 5: Serial Position Effects and Primacy/Recency Biases in LLM Processing
==================================================================================
**Vocabulary tradition:** Cognitive science / human memory research  
**Angle type:** Confirmatory  
**Predicted research character:** Empirical — expect studies that explicitly frame LLM behavior using psychological vocabulary (serial position, primacy, recency, interference); may also include interpretability studies linking attention patterns to these effects  

**What to extract:** Whether LLMs show the same U-shaped serial position curve as human memory; whether primacy or recency effects dominate; whether this pattern holds across model families and sizes; relationship to training data structure  

**Source type (academic):** arXiv cs.CL (primary — ML papers borrowing cognitive framing); Cognitive Science or Psychological Review (secondary — foundational human memory literature for comparison)  
**Source type (practitioner):** Technical blog posts explicitly comparing LLM and human memory limits; HN/Reddit discussion threads (vocabulary discovery only — not evidence)  

**Queries:**  
Q1: `serial position effect large language models primacy recency bias long context empirical`  
Q2: `LLM attention primacy recency context window cognitive bias working memory analogy`  
Q3: `language model forgetting early context recency primacy effect long document understanding`  

**Coverage-gap note:** The cognitive science tradition may have limited direct literature on LLMs specifically (it studies humans). Most papers using this vocabulary are ML papers. PubMed queries with cognitive psychology vocabulary ("serial position recall," "primacy recency human memory") would surface the foundational human literature for comparison purposes.

---

### ANGLE 6: Evidence That Context Length Does NOT Degrade LLM Performance (Null-Hypothesis)
=============================================================================================
**Vocabulary tradition:** ML benchmark evaluation / NLP evaluation — disconfirming variant  
**Angle type:** Null-hypothesis  
**Predicted research character:** Empirical — expect papers reporting no significant performance degradation, or papers showing performance improvements from longer context; also expect replication failures of published degradation findings  

**What to extract:** Conditions under which performance does NOT degrade with context length; task types where longer context helps rather than hurts; model families or sizes that are robust to context length; negative results from studies that failed to replicate position-bias findings; training interventions that eliminate degradation  

**Source type (academic):** arXiv cs.CL + cs.LG  
**Source type (practitioner):** GitHub evaluation repos with null-result branches or competing benchmark designs; model release notes claiming context-length robustness  

**Queries:**  
Q1: `long context language model no performance degradation evidence robust context window`  
Q2: `context length LLM performance benefit improvement long context task accuracy 2024 2025`  
Q3: `LLM context length negative result null hypothesis replication failure position bias limits`  

**Coverage-gap note:** Papers specifically reporting null results are underrepresented in academic literature due to publication bias. Grey literature (model release notes, practitioner blogs claiming "our model handles X tokens without degradation") may be more complete for this angle than arXiv alone.

---

### ANGLE 7: KV Cache Efficiency and Hardware Constraints on Long-Context Inference
====================================================================================
**Vocabulary tradition:** Systems / hardware / inference engineering  
**Angle type:** Confirmatory  
**Predicted research character:** Empirical + consensus — expect systems-track papers with memory profiling, latency measurements, and hardware utilization numbers; also expect practitioner guides on optimizing inference for long sequences  

**What to extract:** Relationship between context length and memory consumption (quadratic vs. linear scaling profiles); techniques that reduce KV cache memory requirements (quantization, eviction, compression) and their performance tradeoffs; latency-performance Pareto frontier as context length grows  

**Source type (academic):** arXiv cs.LG + cs.AR (Architecture / Computer Architecture) + MLSys proceedings  
**Source type (practitioner):** GitHub vLLM, TensorRT-LLM, FlashAttention repositories — issue threads and README for KV cache management; LLM inference blog posts (Lmsys, Hugging Face)  

**Queries:**  
Q1: `KV cache memory efficiency long context LLM inference optimization 2023 2024 2025`  
Q2: `context length computational cost quadratic attention memory bandwidth inference latency transformer`  
Q3: `long context inference KV cache eviction compression quantization performance tradeoff`  

**Coverage-gap note:** This angle covers inference-time hardware constraints. Training-time constraints (context length effects on training stability, gradient flow over long sequences) are a distinct systems angle requiring separate queries.

---

### ANGLE 8: Benchmark Validity and Measurement Artifacts in Long-Context Evaluation
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]
=====================================================================================
**Vocabulary tradition:** Measurement theory / evaluation validity  
**Angle type:** Adversarial-FLAGGED  
**Predicted research character:** Empirical + gap — expect methodology critiques, measurement instrument papers, and meta-analyses of long-context evaluation benchmarks; the literature may be sparse (gap) as this is a recent area  

**Generation note:** Generated from measurement theory / evaluation validity vocabulary. Excluded from generation prompt: "context window," "positional encoding," "attention mechanism," "benchmark accuracy," "perplexity," "token budget" as primary framing. Starting from: construct validity, confound, task difficulty, benchmark design, measurement artifact, contamination, ecological validity.

**What to extract:** Whether observed performance degradation reflects genuine context-length effects vs. task difficulty confounds (harder questions placed later in context); whether needle-in-a-haystack tests have ecological validity for real-world tasks; benchmark contamination (models trained on the test distribution); whether practitioner-coined benchmarks have been independently validated  

**Source type (academic):** arXiv cs.CL + cs.AI (evaluation and methodology papers)  
**Source type (practitioner):** HN/Reddit threads critiquing long-context benchmarks (vocabulary discovery); practitioner blog posts questioning benchmark design choices (not evidence — vocabulary and framing discovery only)  

**Queries:**  
Q1: `long context LLM evaluation benchmark confound task difficulty construct validity critique 2024 2025`  
Q2: `language model context length evaluation methodology limitations measurement artifact validity`  
Q3: `LLM benchmark design ecological validity long context evaluation reliability reproducibility`  

**Coverage-gap note:** Benchmark validity literature for LLMs is a young field. Many validity critiques are published as arXiv preprints without peer review. The adversarial nature of this angle means its findings should be held to a higher evidence standard before influencing downstream decisions.

---

### ANGLE 9: Discourse Coherence and Long-Range Dependency Handling in Extended Text
(Cross-Disciplinary)
=====================================================================================
**Vocabulary tradition:** Computational linguistics / psycholinguistics  
**Angle type:** Cross-disciplinary  
**Predicted research character:** Empirical — expect CL papers on coreference resolution, discourse coherence, anaphora, and narrative structure in long documents; some ML papers at the CL/ML intersection  

**What to extract:** How models handle pronoun resolution, coreference, and entity tracking across long texts; whether coherence degrades for model-generated long-form output; how discourse structure affects what information models retain over long sequences; psycholinguistic findings on human long-text comprehension that could inform model evaluation design  

**Source type (academic):** ACL Anthology (primary — Computational Linguistics, ACL, EMNLP, NAACL proceedings); arXiv cs.CL as secondary cross-reference  
**Source type (practitioner):** Deprioritized — this is an academic-heavy cross-disciplinary angle; practitioner sources unlikely to produce novel findings here  

**Queries:**  
Q1: `coreference resolution long document language model coherence long-range dependency 2022 2023 2024`  
Q2: `discourse coherence large language models long text generation narrative structure evaluation`  
Q3: `computational linguistics anaphora long context transformer model entity tracking`  

**Coverage-gap note:** Psycholinguistics studies of human reading comprehension over long texts (eye-tracking, reading time, comprehension accuracy) represent a foundational comparison baseline. PubMed queries using MeSH terms ("reading comprehension," "discourse processing") would surface this literature, which these queries do not reach.

---

### ANGLE 10: Context Length Scaling Laws and Capability Emergence
==================================================================
**Vocabulary tradition:** Model scaling / capability emergence  
**Angle type:** Confirmatory  
**Predicted research character:** Empirical — expect papers establishing predictive relationships between context length (as a training variable), compute budget, and downstream capability; papers on emergent in-context learning abilities at particular context lengths  

**What to extract:** Whether there are predictable scaling relationships between context window size and performance on downstream tasks; whether some capabilities emerge only above a context length threshold; how context length interacts with model size and training data volume in scaling laws; cost-performance tradeoffs of training longer-context models  

**Source type (academic):** arXiv cs.LG + cs.CL (scaling laws track); DeepMind, OpenAI, Anthropic technical reports (grey literature with high evidential weight for this tradition)  
**Source type (practitioner):** Model release notes and technical reports from major labs; LessWrong / alignment forum posts on scaling predictions (vocabulary discovery only)  

**Queries:**  
Q1: `scaling laws context length language model capability performance compute tradeoff`  
Q2: `emergent capabilities context window large language models in-context learning threshold`  
Q3: `context length training data model size interaction scaling performance language model 2023 2024 2025`  

**Coverage-gap note:** Scaling law research typically focuses on model size and training compute. Context length as an independent scaling axis is less studied. This angle may have moderate literature (not gap, but smaller corpus than tradition-1 benchmark papers).

---

## GATE SUMMARY
============

### Gate 1 — Completeness

- [x] **Null-hypothesis angle present:** Angle 6 is framed explicitly as disconfirming. Queries contain: "no performance degradation," "negative result," "null hypothesis," "replication failure." PASS.
- [x] **Adversarial angle present:** Angle 8 is labeled `[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]`. PASS.
- [x] **Cross-disciplinary angle present:** Angle 9 targets computational linguistics / psycholinguistics — not in the intake brief's candidate vocabulary traditions list. PASS.
- [x] **Source-type coverage:** Domain maturity is mixed. Practitioner sources appear in: Angles 1 (GitHub evaluation repos), 2 (GitHub model repos), 3 (technical blog posts), 4 (GitHub red-teaming repos), 6 (GitHub evaluation repos), 7 (GitHub inference repos), 8 (HN/Reddit — vocabulary discovery). PASS.
- [x] **Vocabulary-tradition map populated:** Coverage map has 5 traditions from intake brief plus 4 additional traditions discovered during angle generation. Distinct traditions in the angle list: 9 (ML benchmark evaluation, transformer architecture, IR/RAG, safety/alignment, cognitive science, systems/hardware, measurement theory, computational linguistics, model scaling). PASS.

**Gate 1: PASS**

---

### Gate 2 — Distinctness

**Boolean-connective test results:**

- Angles 1 and 3: A1 uses "benchmark evaluation, task accuracy, downstream performance." A3 uses "needle-in-a-haystack, position bias, retrieval, document position." Most distinctive term from A1 ("task accuracy") does not appear in A3 queries. OR retrieval would return partly overlapping papers (both are about long-context performance) but not substantially the same set — A3 is specifically about retrieval within context, A1 is about NLP task accuracy generally. PASS.
- Angles 1 and 6: A6 is the null-hypothesis variant of A1. Same base tradition. The null-hypothesis exception applies (angle-quality.md Gate 2: "candidates for merger UNLESS one is the null-hypothesis variant"). EXEMPT.
- Angles 2 and 7: A2 uses "positional encoding, RoPE, attention mechanism." A7 uses "KV cache, memory bandwidth, inference latency, computational cost." OR retrieval would return different literatures — architecture papers vs. systems/inference papers. PASS.
- Angles 1 and 10: A1 uses "benchmark evaluation, task accuracy." A10 uses "scaling laws, emergent capabilities, compute tradeoff." Most distinctive A10 term ("scaling laws") does not appear in A1. Different literatures (evaluation vs. scaling-law communities). PASS.
- Angles 4 and 8: A4 uses "instruction following, alignment, behavioral consistency." A8 uses "construct validity, confound, benchmark design, measurement artifact." Most distinctive A8 terms ("construct validity," "measurement artifact") do not appear in A4. PASS.
- Angles 5 and 9: A5 uses "serial position effect, primacy, recency, working memory." A9 uses "discourse coherence, coreference, anaphora, narrative structure." Minimal overlap — both involve long-text understanding but from different sub-literatures (psychology-framed vs. computational linguistics-framed). PASS.
- All other pairs: No shared distinctive terms detected. PASS without formal test.

**Vocabulary-tradition distinctness:** All 10 angles have distinct tradition labels. Angles 1 and 6 share the base tradition "ML benchmark evaluation / NLP evaluation" but Angel 6 is the null-hypothesis variant — explicitly exempt per angle-quality.md Gate 2.

**Gate 2: PASS**

---

### Gate 3 — Launchability

All 10 angles reviewed:
- [x] Each angle contains at least one concrete, runnable query string (pasteable into a search box). PASS for all 10.
- [x] No query string contains "TBD," "to be determined," "[fill in]," or equivalent placeholders. PASS for all 10.
- [x] "Source type (academic)" and "Source type (practitioner)" fields name specific platforms (arXiv + category, ACL Anthology, GitHub, technical blog posts, HN). No vague language ("relevant sources," "some database"). PASS for all 10.

**Gate 3: PASS**

---

### Gate 4 — Scoring prohibition

- [x] No angles were ranked, filtered, or prioritized during generation. Angle order follows type allocation sequence (confirmatory slots in coverage-map order, then null-hypothesis, then adversarial, then cross-disciplinary). No subjective quality assessment was used.
- [x] No angle record contains phrases like "this angle is most useful" or "this is the strongest angle."

**Gate 4: PASS**

---

### Overall verdict: PASS — dispatch ready

**Flags requiring human judgment:**

1. **VOCABULARY SELF-REPORT FLAG (active):** All vocabulary traditions were enumerated by LLM only. No survey-paper probe was run. External validation via a Source B pass (e.g., searching `"context length" LLM survey 2024 2025`) is recommended before accepting the angle list as complete. In particular, the following traditions may be underrepresented if they appear primarily in survey-paper vocabulary rather than primary papers: information-theoretic framings of context (entropy, compression), neuroscience-inspired attention models, multilingual long-context performance.

2. **Cognitive science angle (Angle 5) — tradition scope limitation:** Most papers using "serial position effect" in the LLM context are ML papers borrowing cognitive framing, not cognitive science papers studying LLMs. The predicted research character may be closer to "consensus" (borrowed framing) than "empirical" (independently grounded). Human judgment recommended on whether to supplement with PubMed queries for foundational cognitive science literature.

3. **Adversarial angle (Angle 8) — literature sparsity risk:** Measurement validity critiques of long-context benchmarks are a recent area. The predicted research character of "empirical + gap" means this angle may return few papers. If <5 papers are found after running all 3 queries, log as a gap angle and consider this a structural limitation of the current literature rather than a search failure.

4. **Null-hypothesis angle (Angle 6) — publication bias:** Negative results and null findings in this domain are underrepresented in academic literature. If arXiv queries for Angle 6 return low results, expand to grey literature (model release notes, practitioner blogs) before concluding the evidence base is thin.

---

## SUMMARY STATISTICS

| Field | Value |
|-------|-------|
| Total angles generated | 10 |
| Distinct vocabulary traditions represented | 9 |
| Confirmatory angles | 7 (Angles 1, 2, 3, 4, 5, 7, 10) |
| Null-hypothesis angles | 1 (Angle 6) |
| Adversarial angles | 1 (Angle 8, ADVERSARIAL-FLAGGED) |
| Cross-disciplinary angles | 1 (Angle 9) |
| Traditions from intake brief covered | 5 of 5 |
| Additional traditions discovered during generation | 4 |
| Source B available | No |
| Severity assessment | MODERATE |
| Vocabulary self-report flag | Active |
| Overall gate verdict | PASS |
