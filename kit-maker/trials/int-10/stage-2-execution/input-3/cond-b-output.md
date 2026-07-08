# Angle Generation Output — Condition B
**Topic:** How context length affects LLM performance
**Input ID:** 3
**Condition:** B
**Date:** 2026-07-05

---

# INTAKE BRIEF
============

**Topic:** How context length (input token count) affects LLM performance across tasks, model families, and evaluation settings

**Anchor vocabulary:**
- "context length" — ML systems / transformer architecture tradition
- "LLM" — ML systems tradition
- "performance" — general ML evaluation (no specific metric stated)

**Candidate vocabulary traditions:**
1. ML systems / transformer architecture — context window, sequence length, positional encoding (RoPE, ALiBi, absolute), KV cache, attention mechanism, quadratic complexity, sliding window attention
2. NLP evaluation / benchmarks — SCROLLS, LongBench, ZeroScrolls, L-Eval, long document understanding, document QA, multi-hop reasoning, reading comprehension, summarization benchmarks
3. ML efficiency / systems — KV cache compression, O(n²) attention complexity, flash attention, linear attention, state space models (Mamba), sparse attention, throughput, memory footprint
4. Alignment / instruction following — lost in the middle (Liu et al. 2023), position bias, primacy bias, recency bias, attention sink, context utilization, distraction effects, needle-in-a-haystack evaluation
5. Cognitive science / human memory (absent from user framing) — working memory, cognitive load, reading comprehension, document length effects, attention span, human recall from long texts

NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

**Question type:** EXPLORATORY
No explicit comparison stated ("A vs. B"), no intervention-outcome pair specified. "How X affects Y" has causal framing but no controlled comparison or stated metric — default to EXPLORATORY. Scope: general treatment of the effect of context length on performance across all relevant tasks, metrics, and model families.

**Scope markers:** None stated — inferred scope: any model family, any task type, any context window size range; full treatment including architectural mechanisms, empirical evaluation, efficiency constraints, and failure modes.

**Known exclusions:** None stated

**Domain maturity estimate:** Mixed (leaning academic)
Basis: Anchor vocabulary is ML-academic ("LLM," "context length"); however, this topic has significant practitioner content — context window limits are a common engineering constraint with blog posts, GitHub repositories, and technical reports from model vendors (Anthropic, OpenAI, Google). Strong arXiv literature exists alongside practitioner production.

**Survey paper status:** UNAVAILABLE — Source B (web search) cannot be executed in this subagent context. Several survey papers on long-context LLMs likely exist (e.g., "long context LLMs survey 2024 2025") but cannot be probed here. Vocabulary-discovery pass recommended before accepting the tradition list as complete.

**Source B status:** UNAVAILABLE — MODERATE — Source A (LLM translation) + Source C (absent-term signal) together identified 5 distinct vocabulary traditions. Proceeding; VOCABULARY SELF-REPORT FLAG active.

**Absent-term signal (Source C):**
Terms expected but NOT used by the user, indicating potential vocabulary gaps:
- "lost in the middle" — key empirical finding on position degradation (Liu et al. 2023)
- "positional encoding" — the architectural mechanism underlying context length behavior
- "needle in a haystack" — standard evaluation paradigm for long-context retrieval
- "KV cache" — efficiency mechanism that determines practical context length limits
- "SCROLLS" / "LongBench" / "L-Eval" — major long-context benchmark suites
- "retrieval-augmented generation" / "RAG" — the principal alternative approach to long raw context

**Intake gate:**
- [x] Topic field populated
- [x] Candidate vocabulary traditions: 5 entries (≥2 satisfied)
- [x] Question type classified: EXPLORATORY
Gate passes. Proceeding to angle-generation.md.

---

# COVERAGE MAP
============

**Tradition 1:** ML systems / transformer architecture
Representative terms: context window, sequence length, positional encoding, RoPE, ALiBi, KV cache, attention mechanism, quadratic complexity
Planned angle slot: Confirmatory A1
Gap flag: No — primary tradition; the user entered from this framing

**Tradition 2:** NLP evaluation / benchmarks
Representative terms: SCROLLS, LongBench, ZeroScrolls, L-Eval, document QA, multi-hop reasoning, long document summarization, needle-in-a-haystack
Planned angle slot: Confirmatory A2 (aggregate benchmarks); also N1 (disconfirming variant)
Gap flag: No — well-covered empirical tradition

**Tradition 3:** ML efficiency / systems
Representative terms: KV cache compression, O(n²) attention, flash attention, linear attention, Mamba, state space models, sparse attention, memory footprint, throughput
Planned angle slot: Confirmatory A3
Gap flag: No

**Tradition 4:** Alignment / instruction following
Representative terms: lost in the middle, position bias, primacy bias, recency bias, attention sink, context utilization, distraction
Planned angle slot: Confirmatory A4
Gap flag: No — key phenomenon; significant literature

**Tradition 5:** Cognitive science / human memory (absent from user framing; in intake brief)
Representative terms: working memory, cognitive load, reading comprehension, serial position effect, human recall from long documents
Planned angle slot: Confirmatory A8
Gap flag: No — will be covered

**Additional traditions identified beyond intake brief (for extended slots):**
- Retrieval-augmented generation / hybrid NLP (A6) — distinct from pure transformer architecture; RAG literature straddles NLP and IR
- Task-specific NLP analysis (A5) — moderating effect of task type on context length; distinct from aggregate benchmark coverage in A2
- Software engineering / LLM application development (A7) — practitioner angle on context limit engineering; NOT in any intake brief tradition

**Traditions NOT yet represented in the planned list:**
None — all 5 intake brief traditions have planned angle slots. Three additional traditions (RAG, task-specific NLP, SE/LLM deployment) are added beyond the intake brief.

**Cross-disciplinary slots (required — traditions NOT in intake brief):**

C1 target tradition: Information retrieval (IR)
Basis: IR has a long-standing literature on how document length affects retrieval precision/recall and how position within a document affects relevance; the "lost in the middle" LLM phenomenon has direct analogues in early/late position bias in TREC document collections; this tradition is NOT in the intake brief and uses distinct vocabulary (BM25, TREC, passage ranking, position normalization).

C2 target tradition: Information theory / compression
Basis: Information theory provides a formal framework for asking whether models effectively use the information content of long inputs; concepts such as information entropy, minimum description length, and information bottlenecks apply to LLM context processing; this tradition is NOT in the intake brief and uses genuinely distinct vocabulary (entropy, mutual information, compression, redundancy, bottleneck).

---

# TYPE ALLOCATIONS
================

Slot A1 (Confirmatory — Tradition 1: ML systems / transformer architecture): assigned
Slot A2 (Confirmatory — Tradition 2: NLP evaluation / benchmarks): assigned
Slot A3 (Confirmatory — Tradition 3: ML efficiency / systems): assigned
Slot A4 (Confirmatory — Tradition 4: Alignment / instruction following): assigned
Slot A5 (Confirmatory — Task-specific NLP analysis): assigned — moderating role of task type
Slot A6 (Confirmatory — Retrieval-augmented generation): assigned — RAG vs. long context
Slot A7 (Confirmatory — Software engineering / LLM application development): assigned — practitioner perspective
Slot A8 (Confirmatory — Tradition 5: Cognitive science / human memory): assigned
Slot N1 (Null-hypothesis — Tradition 2 disconfirming): assigned — evidence that longer context does NOT improve performance or that claimed gains do not hold
Slot D1 (Adversarial — Information science / knowledge management): assigned — starting vocabulary: NOT FROM any ML systems, NLP evaluation, alignment, efficiency, or cognitive science framing
Slot C1 (Cross-disciplinary — Information retrieval): assigned — NOT in intake brief
Slot C2 (Cross-disciplinary — Information theory / compression): assigned — NOT in intake brief

Total: 12 angles

Adversarial vocabulary exclusion list for D1 generation:
Excluded terms: LLM, transformer, context window, positional encoding, KV cache, attention mechanism, benchmark, SCROLLS, LongBench, instruction following, RAG, retrieval augmented, alignment, RLHF, token, sequence length, perplexity, BLEU, ROUGE, empirical evaluation, model capability

---

# FULL ANGLE LIST

---

## ANGLE 1: Positional Encoding Mechanisms and Context Length Generalization
===========
**Vocabulary tradition:** ML systems / transformer architecture
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Effect sizes comparing different positional encoding schemes (absolute, RoPE, ALiBi, learned) at varying sequence lengths; extrapolation failures when context exceeds training length; attention score degradation patterns; empirical comparisons of encoding schemes on long-context tasks

**Source type (academic):** arXiv cs.CL + cs.LG (NOT cs.AI alone — platform-calibration override)
**Source type (practitioner):** GitHub repositories for extended-context model releases (LongLLaMA, LongLoRA, YaRN — most starred + most forked ordering)

**Queries:**
Q1: positional encoding context length extrapolation large language models RoPE ALiBi 2023 2024 2025
Q2: transformer attention mechanism long sequence degradation positional interpolation empirical
Q3: context window extension training-free length generalization LLM positional bias
Q4: YaRN RoPE scaling LongRoPE position interpolation context window performance evaluation

**Coverage-gap note:** Queries do not cover very recent (post-2025) positional encoding innovations beyond RoPE variants; may miss papers not using "positional encoding" terminology (e.g., referring only to "attention span" or "receptive field").

---

## ANGLE 2: Long-Context Benchmark Landscape and Aggregate Performance Results
===========
**Vocabulary tradition:** NLP evaluation / benchmarks
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Benchmark design choices (task coverage, document length distributions, evaluation metrics); aggregate performance trends of frontier models as context length increases; which tasks show largest/smallest gains from longer context; benchmark validity limitations

**Source type (academic):** arXiv cs.CL (benchmark papers typically cs.CL-primary)
**Source type (practitioner):** GitHub — SCROLLS, LongBench, L-Eval, ZeroScrolls official repositories; also model provider technical reports (Anthropic, Google)

**Queries:**
Q1: long context language model benchmark evaluation SCROLLS LongBench ZeroScrolls L-Eval 2023 2024 2025
Q2: LLM long document understanding performance scaling context window frontier models empirical
Q3: needle in a haystack evaluation context window retrieval accuracy LLM benchmark 2024 2025
Q4: long context benchmark design document QA multi-hop reasoning evaluation methodology

**Coverage-gap note:** Queries focus on English-language benchmarks; multilingual long-context evaluation is not addressed. Model-specific capability evaluations from vendors (not on arXiv) may be missed.

---

## ANGLE 3: KV Cache, Sparse Attention, and Efficiency Architectures for Long Context
===========
**Vocabulary tradition:** ML efficiency / systems
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Memory and compute cost scaling under long context; KV cache compression techniques and their performance-efficiency trade-offs; comparison of linear attention / state space models (Mamba) vs. full attention at long sequences; practical throughput and latency measurements

**Source type (academic):** arXiv cs.LG + cs.CL (efficiency papers span both)
**Source type (practitioner):** GitHub — FlashAttention, vLLM, PagedAttention, Mamba repositories (≥50 stars, ≥10 forks threshold per platform-calibration); also NVIDIA/HuggingFace technical blogs

**Queries:**
Q1: KV cache memory efficiency long context inference large language models compression 2024 2025
Q2: linear attention state space model Mamba long sequence performance comparison transformer
Q3: sparse attention sliding window efficient transformer long context memory throughput 2023 2024 2025
Q4: flash attention ring attention long context training inference efficiency empirical benchmark

**Coverage-gap note:** Does not cover hardware-level optimizations (custom ASIC / TPU attention kernels) that may extend practical context length; also does not explicitly cover quantization approaches to KV cache reduction.

---

## ANGLE 4: Position Bias and Context Utilization Failures in Long Inputs
===========
**Vocabulary tradition:** Alignment / instruction following
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Empirical measurements of position-dependent performance degradation (primacy, recency, middle effects); conditions under which models fail to attend to relevant information in long contexts; task types most/least sensitive to position bias; interventions that mitigate position bias

**Source type (academic):** arXiv cs.CL + cs.LG
**Source type (practitioner):** GitHub — needle-in-a-haystack evaluation framework repositories; practitioner blog posts from Anthropic, OpenAI, Google on long-context behavior

**Queries:**
Q1: "lost in the middle" LLM context length position bias document retrieval 2023 2024 2025
Q2: large language model attention primacy recency bias long context position utilization empirical
Q3: LLM context window position retrieval accuracy degradation attention sink 2024 2025
Q4: long context instruction following position effect empirical evaluation primacy recency middle

**Coverage-gap note:** Primarily covers retrieval and QA tasks; does not fully address position effects in generation tasks (long-form writing, code) where "failing to attend to the middle" has different consequences.

---

## ANGLE 5: Task-Type Moderation of Context Length Effects
===========
**Vocabulary tradition:** Task-specific NLP analysis
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Differential effects of context length across task types (document QA, summarization, code completion, few-shot learning, long-form generation, reasoning); tasks where longer context reliably helps vs. hurts vs. has no effect; interaction effects between task type and context length

**Source type (academic):** arXiv cs.CL
**Source type (practitioner):** Technical reports from model providers; practitioner blog posts on specific use-case performance

**Queries:**
Q1: context length effect task type LLM performance code completion summarization QA comparison
Q2: few-shot learning in-context examples performance context window length scaling
Q3: long context LLM code generation understanding performance context size empirical 2024 2025
Q4: multi-document reasoning context length benefit harm task-dependent LLM empirical

**Coverage-gap note:** "Task type" is heterogeneous; this angle may need sub-angles for specific high-priority task types (especially code and long-form reasoning). Queries do not cover multimodal tasks where context includes images.

---

## ANGLE 6: RAG vs. Long Context — When Does Retrieval Outperform Raw Context?
===========
**Vocabulary tradition:** Retrieval-augmented generation / hybrid NLP systems
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Direct comparisons of RAG vs. full-context approaches on document QA, summarization, and multi-hop reasoning; conditions under which retrieval outperforms raw long context; chunk size effects; failure modes of each approach

**Source type (academic):** arXiv cs.CL + cs.IR (RAG bridges NLP and IR categories)
**Source type (practitioner):** GitHub — LangChain, LlamaIndex, RAG framework repositories; practitioner benchmarks comparing RAG vs. long context

**Queries:**
Q1: retrieval augmented generation vs long context LLM performance comparison empirical 2024 2025
Q2: RAG context window performance trade-off document question answering evaluation
Q3: chunking strategy retrieval accuracy long document question answering LLM chunk size
Q4: long context versus retrieval augmented generation benchmark comparison 2024 2025

**Coverage-gap note:** Does not address hybrid approaches (e.g., re-ranking retrieved passages inside a long context window). Also does not cover very recent agentic retrieval patterns where retrieval is interleaved with generation.

---

## ANGLE 7: Practitioner Experience with Context Length Limits in LLM Applications
===========
**Vocabulary tradition:** Software engineering / LLM application development
**Angle type:** Confirmatory
**Predicted research character:** consensus
**What to extract:** Practitioner-documented failure modes when context limits are exceeded; engineering patterns for managing context (chunking, summarization, truncation, prioritization); observed performance cliffs in production; workarounds and their documented effectiveness

**Source type (academic):** arXiv cs.SE + cs.CL (applied LLM engineering papers, limited volume)
**Source type (practitioner):** GitHub issues and READMEs on LLM frameworks (LangChain, LlamaIndex, Haystack); Stack Overflow questions with high view counts on context management; practitioner blog posts — REQUIRED given mixed domain maturity

**Queries:**
Q1: LLM context limit engineering context management chunking summarization production 2024 2025
Q2: large language model context window overflow truncation performance degradation practitioner
Q3: context length limit LLM application development strategy workaround evaluation
Q4: long context LLM deployment failure mode production engineering challenge 2024 2025

**Coverage-gap note:** Practitioner literature is not systematically indexed; this angle will have lower recall than academic angles. HN and Reddit upvote scores should NOT be used as quality signals (platform-calibration: r=0.29 correlation with quality).

---

## ANGLE 8: Human Working Memory and Serial Position Effects as Analogues to LLM Context Behavior
===========
**Vocabulary tradition:** Cognitive science / human memory
**Angle type:** Confirmatory
**Predicted research character:** empirical + cross-domain synthesis
**What to extract:** Human working memory capacity limits and their parallels to LLM context window limits; serial position effects in human recall (primacy, recency) and whether they predict LLM position bias; cognitive load theory applied to LLM input length; empirical human studies on comprehension from long vs. short documents

**Source type (academic):** PubMed / PsycINFO (cognitive science, psychology — MeSH vocabulary needed); also arXiv cs.CL for papers explicitly drawing human-LLM cognitive analogies
**Source type (practitioner):** deprioritized — minimal practitioner production in this tradition; review articles and textbook-level consensus sources preferred

**Queries:**
Q1: working memory capacity limits serial position effect human recall primacy recency experimental
Q2: human reading comprehension document length effect recall accuracy cognitive load experiment
Q3: language model working memory analogy cognitive science human memory comparison 2023 2024 2025
Q4: serial position curve recall long text human subjects cognitive psychology

**Coverage-gap note:** PubMed MeSH vocabulary differs from ML vocabulary — translation needed for effective queries. Papers in this angle may not cite LLM literature at all; synthesis across the human-ML gap requires manual bridging.

---

## ANGLE 9 [NULL-HYPOTHESIS]: Evidence That Longer Context Does Not Improve Performance or That Context Scaling Claims Fail
===========
**Vocabulary tradition:** NLP evaluation / benchmarks (disconfirming variant)
**Angle type:** Null-hypothesis
**Predicted research character:** empirical (gap findings and null results)
**What to extract:** Null results where longer context produced no improvement; cases where more context degraded performance; failures of long-context benchmarks to reflect real capability; replication failures; studies showing effective context utilization is far smaller than nominal context window size; performance plateau findings

**Source type (academic):** arXiv cs.CL + cs.LG
**Source type (practitioner):** GitHub issues on LLM evaluation frameworks where users report unexpected performance failures; practitioner blog posts documenting context length not helping

**Queries:**
Q1: long context LLM performance no improvement negative result failure limit 2023 2024 2025
Q2: context length scaling LLM performance plateau degradation irrelevant tokens distraction
Q3: large language model longer context hurts performance hallucination noise context length
Q4: LLM effective context window smaller than nominal claimed context length evidence

**Coverage-gap note:** Null results are systematically underreported in LLM literature (publication bias). This angle may need supplementing with informal channels (GitHub issues, practitioner reports) where failure cases are more likely to appear than in peer-reviewed venues.

---

## ANGLE 10 [ADVERSARIAL-FLAGGED]: Information Overload and Diminishing Returns from Document Length — Non-ML Framing
===========
**Vocabulary tradition:** Information science / knowledge management
**Angle type:** Adversarial-FLAGGED — dispatch in separate research context with no prior confirmatory results
**Predicted research character:** empirical (information science literature)
**What to extract:** Evidence that more information does NOT always improve decision-making or comprehension; information overload effects; optimal document length for comprehension; diminishing returns from additional content; whether existing knowledge management and information science literature predicts that LLM performance claims about longer context overestimate real gains

**Generation note:** Generated from Information science / knowledge management vocabulary, explicitly excluding: LLM, transformer, context window, positional encoding, KV cache, attention, benchmark, SCROLLS, instruction following, RAG, retrieval augmented, alignment, token, sequence length, perplexity.

**Source type (academic):** Semantic Scholar + JASIST (Journal of the American Society for Information Science and Technology); also Information Processing & Management journal
**Source type (practitioner):** deprioritized — academic-heavy tradition; some practitioner content in knowledge management trade publications

**Queries:**
Q1: information overload document length comprehension accuracy decision quality diminishing returns empirical
Q2: optimal document length information processing comprehension knowledge management evidence
Q3: more information worse performance information science cognitive overload experiment review
Q4: document length reading comprehension retention accuracy review meta-analysis

**Coverage-gap note:** This tradition's empirical findings may not transfer directly to LLM processing (LLMs are not human readers). The angle's value is adversarial: it challenges the assumption that more context is uniformly beneficial by providing evidence from a non-ML domain that "more is better" is not a generalizable law.

---

## ANGLE 11 [CROSS-DISCIPLINARY]: Position Effects in Document Retrieval — Information Retrieval Literature
===========
**Vocabulary tradition:** Information retrieval (NOT in intake brief)
**Angle type:** Cross-disciplinary
**Predicted research character:** empirical
**What to extract:** Evidence of position-dependent retrieval bias in traditional IR systems (TREC/CLEF); how document length normalization (BM25, TF-IDF) accounts for length effects; whether IR position findings predict or explain LLM "lost in the middle" behavior; passage-level retrieval accuracy by position in long documents

**Source type (academic):** arXiv cs.IR; ACM Digital Library (SIGIR proceedings); ECIR proceedings
**Source type (practitioner):** GitHub — neural retrieval model repositories (DPR, ColBERT, BM25 implementations)

**Queries:**
Q1: document position bias retrieval precision recall TREC CLEF long document information retrieval
Q2: passage retrieval position effect neural ranking model long document evidence 2023 2024 2025
Q3: BM25 TF-IDF document length normalization retrieval effect position term frequency
Q4: LLM lost in the middle information retrieval position bias comparison analogy 2024 2025

**Coverage-gap note:** Traditional IR literature predates the LLM era; direct empirical bridges between classic IR position findings and LLM behavior are sparse and may require manual synthesis. Query Q4 specifically searches for papers making this bridge explicitly.

---

## ANGLE 12 [CROSS-DISCIPLINARY]: Information Entropy and Context Compression — Information Theory Framing
===========
**Vocabulary tradition:** Information theory / compression (NOT in intake brief)
**Angle type:** Cross-disciplinary
**Predicted research character:** empirical + theoretical
**What to extract:** Formal information-theoretic analysis of how information content scales with context length in LLM inputs; information bottleneck theory applied to transformer attention; entropy of long-context inputs and whether models extract proportional information; theoretical bounds on what LLMs can extract from long sequences

**Source type (academic):** arXiv cs.IT + cs.LG (information theory papers crossing into ML)
**Source type (practitioner):** deprioritized — theoretical tradition; limited practitioner production

**Queries:**
Q1: information bottleneck transformer attention context length information theory 2023 2024 2025
Q2: entropy mutual information long context LLM sequence compression theoretical analysis
Q3: minimum description length language model long input information content extraction bound
Q4: attention as information compression context window information theory LLM 2024 2025

**Coverage-gap note:** This is expected to be a sparse literature (predicted research character: gap + theoretical). Queries may return adjacent work on model compression or knowledge distillation rather than the specific information-theoretic analysis of context length; careful filtering required.

---

# GATE SUMMARY
============

## Gate 1 — Completeness checks

- [x] **Null-hypothesis angle present:** PASS — Angle 9 is explicitly framed as "evidence that longer context does NOT improve performance"; queries contain "no improvement," "negative result," "failure," "hurts performance," "plateau" — disconfirming vocabulary present.

- [x] **Adversarial angle present:** PASS — Angle 10 is labeled ADVERSARIAL-FLAGGED with dispatch note: "dispatch in separate research context with no prior confirmatory results."

- [x] **Cross-disciplinary angle present:** PASS — Angle 11 (Information retrieval, NOT in intake brief) and Angle 12 (Information theory / compression, NOT in intake brief). Both tradition labels verified absent from intake brief traditions list.

- [x] **Source-type coverage:** PASS — Domain maturity is MIXED. Angles 7 (SE/LLM deployment), 6 (RAG/GitHub), 3 (KV cache/GitHub), and 4 (needle-in-a-haystack/GitHub) all assign practitioner sources. Gate requires ≥1 practitioner source for mixed domain — multiple present.

- [x] **Vocabulary-tradition map populated:** PASS — Coverage map has 5 intake brief traditions + 2 cross-disciplinary additions + 3 extended slots = 10 distinct traditions represented. All intake brief traditions have planned slots.

**Gate 1: PASS**

---

## Gate 2 — Distinctness checks

**Boolean-connective test applied to candidate overlapping pairs:**

**Pair A1 / A3 (ML systems / ML efficiency):**
A1's distinctive term: "positional encoding." A3's queries use "KV cache," "linear attention," "Mamba" — does not appear in A1. Would OR return substantially the same documents? No — A1 targets architecture papers on position representations; A3 targets efficiency/systems papers on memory and compute optimization. PASS.

**Pair A2 / A5 (NLP benchmarks / Task-specific NLP analysis):**
A2's distinctive term: "SCROLLS," "LongBench," "ZeroScrolls." A5 uses "task type," "code completion," "few-shot." A2 targets papers that DESIGN or report on aggregate benchmarks; A5 targets papers analyzing how effects vary BY TASK TYPE. Would OR return substantially the same set? Partial overlap possible, but A5's Q1 ("task type LLM performance code completion summarization QA comparison") and A2's Q1 ("SCROLLS LongBench ZeroScrolls evaluation") target different paper types. PASS with note: moderate overlap risk; researcher should apply title-level filtering to separate benchmark design papers from task-analysis papers.

**Pair A2 / N1 (NLP benchmarks / Null-hypothesis):**
These share the NLP evaluation tradition label. Null-hypothesis angles are explicitly permitted to share a tradition label per angle-quality.md Gate 2: "If two non-null-hypothesis, non-adversarial angles share a label: FAIL" — N1 IS the null-hypothesis. EXEMPT. PASS.

**Pair A4 / A8 (Alignment-position-bias / Cognitive-science):**
A4's distinctive terms: "lost in the middle," "attention sink," "position bias" (LLM-specific). A8's terms: "working memory," "serial position curve," "cognitive load," "human subjects." Different source types (arXiv vs. PubMed). Would OR return substantially the same documents? No — A4 targets ML papers, A8 targets cognitive psychology literature. PASS.

**Pair C1 / A6 (Information retrieval / RAG):**
C1's distinctive terms: "TREC," "CLEF," "BM25," "document length normalization" (traditional IR). A6's terms: "retrieval augmented generation," "RAG," "LangChain," "chunk size." Traditional IR and RAG are related but distinct traditions with different venue populations. Would OR retrieve the same documents? No for pre-2020 IR literature; possible overlap for recent neural RAG papers. PASS with note: Q4 of C1 ("LLM lost in the middle information retrieval comparison") may retrieve some papers also returned by A6; acceptable bridge query, not a redundancy flag.

**Pair D1 / A9 (Adversarial information-science / Null-hypothesis):**
D1 uses "information overload," "knowledge management," "document length comprehension." N1 uses "LLM performance no improvement," "context length scaling failure." Different traditions, different source types. No Boolean-connective overlap. PASS.

**All other pairs:** No distinctive-term overlap flagged. PASS.

**Vocabulary-tradition distinctness:**
All 12 angles have distinct tradition labels, with the sole exception of N1 (NLP evaluation disconfirming) sharing the Angle 2 label — explicitly permitted for null-hypothesis angles. PASS.

**Gate 2: PASS**

---

## Gate 3 — Launchability checks

All 12 angles:
- [x] Have at least one concrete, runnable query string (each has Q1 minimum — all are pasteable into a search box)
- [x] No placeholder vocabulary in any query string — no TBD, no [fill in], no "insert term" present
- [x] Source type (academic) names a specific platform for all angles; Source type (practitioner) is either a specific platform or "deprioritized" with explicit justification

Specific flags:
- Angle 8 (cognitive science): Source is "PubMed / PsycINFO" — VALID specific platforms. Coverage-gap note flags MeSH vocabulary translation requirement — this is a gap note, not a launchability failure.
- Angle 10 (adversarial): Source is "Semantic Scholar + JASIST" — VALID specific sources.
- Angle 12 (information theory): Source is "arXiv cs.IT + cs.LG" — VALID arXiv category combination.

**Gate 3: PASS**

---

## Gate 4 — Scoring prohibition

- [x] No LLM self-evaluation ranking: No angle is marked "most promising," "most relevant," or "strongest." Angles are listed by type allocation order (A-slots, then N1, D1, C1, C2) — structural ordering, not quality ranking.
- [x] No implicit quality assessment: No phrases such as "this angle is likely to be most useful" appear in any angle record.

**Gate 4: PASS**

---

## Overall verdict: PASS — dispatch ready

**Flags requiring human judgment:**

1. **VOCABULARY SELF-REPORT FLAG:** All 11 vocabulary traditions were enumerated by LLM only (Source B unavailable). External validation via survey-paper probe is recommended before accepting the tradition list as complete. One or more applied traditions (e.g., legal/regulatory uses of long-context LLMs; computational biology / genomics sequences) may be missing.

2. **Possible A2/A5 overlap:** Moderate overlap risk between NLP benchmarks (A2) and task-specific analysis (A5). If researcher budget is limited: consider merging into a single slot with explicit task-type sub-queries, or apply title-level filtering during collection.

3. **Null-result underreporting:** Angle 9 (null-hypothesis) is likely to face publication bias in academic venues. Supplementing with practitioner channels (GitHub issues, blog posts) is recommended for this angle specifically.

4. **Angle 8 cross-domain synthesis:** Human cognitive science findings (Angle 8) may not directly generalize to LLM processing. Papers retrieved by this angle require explicit framing when synthesizing — analogy vs. causal claim.

5. **Angle 12 sparse literature:** Information theory / LLM context length intersection is predicted to be a GAP angle (sparse literature). Researcher should set expectations accordingly and not treat low recall as a search failure.

---

**VOCABULARY SELF-REPORT FLAG (per intake.md Step 5 and angle-quality.md Limit 3):**
All traditions were enumerated by LLM only; external validation via survey-paper probe is recommended before accepting the tradition check as complete.

---

**Angle count:** 12
**Distinct traditions:** 11 (N1 shares the NLP evaluation tradition with A2; all others are distinct)
**Required types present:** Confirmatory (8) ✓, Null-hypothesis (1) ✓, Adversarial-FLAGGED (1) ✓, Cross-disciplinary (2) ✓
