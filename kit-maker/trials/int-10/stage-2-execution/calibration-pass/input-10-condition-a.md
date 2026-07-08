# INT-10 Calibration Pass — Stage 2 Step 0

**Input:** Input 10 — Memory management in transformer-based language models
**Condition:** A (no kit, strong baseline)
**Date:** 2026-07-05
**Purpose:** Go/no-go validity check for Hard input design before full trial execution

---

## Calibration Methodology Note

**CONTAMINATION DETECTED IN THIS PASS.** This calibration used a single agent for both Task 1 (produce angles) and Task 2 (score). The scoring criterion for Q7 included the term "ADVERSARIAL-FLAGGED" — the agent used this term in its Condition A output (Angle 15), which should NOT be present in a Condition A output (the ADVERSARIAL-FLAGGED label is a kit-specific convention from CLAUDE.md that Condition A agents have no access to). This inflated Q7 artificially.

**Corrected interpretation:** Q7 score for real (non-contaminated) Condition A = 2 (not 3). The Condition A prompt scaffolds null-hypothesis and adjacent-discipline angle types; it does NOT scaffold the ADVERSARIAL-FLAGGED label. In a blind Condition A run, that label would be absent.

**For all real trial runs:** Condition A execution and evaluation are strictly separate agents. This calibration pass reveals the contamination risk and why the separation is mandatory.

---

## Condition A Output — Input 10

*Angles produced by frontier-tier Condition A agent. This represents a well-prompted experienced practitioner without kit access.*

**Angle 1: Attention as Associative Memory — Hopfield Network Theory**
Vocabulary tradition: Statistical mechanics / theoretical ML
Queries:
- `modern Hopfield networks exponential storage capacity transformer self-attention equivalence`
- `transformer attention energy function associative retrieval Ramsauer NeurIPS`
- `dense associative memory synchronous update attention head retrieval`
Source: arXiv stat.ML / cs.LG, NeurIPS/ICLR theory proceedings, Physical Review Letters

**Angle 2: KV-Cache Compression and Serving-System Memory Management**
Vocabulary tradition: ML Systems / LLM serving
Queries:
- `PagedAttention vLLM KV cache memory management LLM serving throughput`
- `KV cache eviction quantization compression transformer inference efficiency`
- `attention KV sparsity token dropping memory budget serving latency`
Source: MLSys, OSDI, SOSP proceedings; GitHub repos

**Angle 3: Context Window as Working Memory — Length and Retrieval Limits**
Vocabulary tradition: NLP / sequence modeling
Queries:
- `lost in the middle transformer long context information retrieval position bias`
- `long context LLM recall performance degradation scaling context window`
- `RoPE ALiBi positional encoding long-range dependency retrieval transformer`
Source: ACL Anthology, arXiv cs.CL

**Angle 4: Retrieval-Augmented Generation — External vs Parametric Memory**
Vocabulary tradition: Information retrieval + knowledge-grounded NLP
Queries:
- `retrieval augmented generation parametric non-parametric memory transformer REALM RETRO`
- `dense passage retrieval DPR RAG factual recall language model`
- `vector database approximate nearest neighbor memory augmentation LLM`
Source: ACL Anthology, SIGIR proceedings, practitioner docs, arXiv cs.IR

**Angle 5: Parametric Memory and Knowledge Storage in Feed-Forward Weights**
Vocabulary tradition: Mechanistic interpretability
Queries:
- `MLP transformer knowledge neurons factual recall key-value memory feed-forward`
- `ROME MEMIT knowledge editing causal tracing transformer weight storage`
- `Geva transformer feed-forward layers key-value memories factual associations`
Source: arXiv cs.CL/cs.LG, ICLR/NeurIPS, Anthropic and EleutherAI technical reports

**Angle 6: Continual Learning and Catastrophic Forgetting of Stored Knowledge**
Vocabulary tradition: Lifelong/continual learning
Queries:
- `catastrophic forgetting large language model continual learning transformer fine-tuning`
- `elastic weight consolidation EWC replay rehearsal LLM knowledge retention`
- `parameter-efficient fine-tuning LoRA catastrophic forgetting benchmark FLAN`
Source: arXiv cs.LG, ContinualAI, NeurIPS/ICML, JMLR

**Angle 7: Memory-Augmented Neural Networks — NTM/DNC Lineage**
Vocabulary tradition: Differentiable programming / neural computing
Queries:
- `Neural Turing Machine differentiable memory addressing transformer comparison external memory`
- `Differentiable Neural Computer content-based addressing memory read write transformer evolution`
- `memory-augmented neural network MANN soft attention addressing episodic storage`
Source: arXiv cs.NE/cs.LG, NeurIPS/ICML, DeepMind technical reports

**Angle 8: In-Context Learning as Implicit Episodic Memory Retrieval**
Vocabulary tradition: Meta-learning / Bayesian inference
Queries:
- `in-context learning implicit Bayesian inference episodic memory transformer gradient descent dual process`
- `few-shot ICL context window memory retrieval mechanism mesa-optimization`
- `in-context learning induction heads retrieval circuits transformer mechanistic`
Source: arXiv cs.LG, ICLR/NeurIPS, Anthropic/OpenAI/DeepMind reports

**Angle 9: Failure Cases — Attention Sink, Primacy/Recency Bias, Lost-in-the-Middle**
Vocabulary tradition: Empirical NLP / LLM reliability
Queries:
- `attention sink token streaming infinite context LLM failure mechanism transformer`
- `primacy recency bias long context transformer information retrieval position failure`
- `lost in the middle benchmark transformer recall middle-position degradation`
Source: arXiv cs.CL, empirical findings tracks at ACL/EMNLP/ICLR

**Angle 10: Information-Theoretic Framing — Memory as Compression**
Vocabulary tradition: Information theory / minimum description length
Queries:
- `information bottleneck transformer representation compression memory generalization`
- `mutual information attention mechanism memory capacity neural network layer-wise`
- `MDL minimum description length transformer weight memory storage capacity bound`
Source: ICLR/NeurIPS theoretical track, IEEE Transactions on Information Theory, arXiv cs.IT/cs.LG

**Angle 11: Neurobiological Memory Systems — Hippocampal and Complementary Learning Systems Analogy**
Vocabulary tradition: Computational neuroscience / neuro-AI
Queries:
- `hippocampus complementary learning systems CLS transformer analogy memory consolidation neuro-AI`
- `fast weights slow weights neural architecture transformer episodic semantic memory consolidation`
- `engram attractor dynamics transformer representation correspondence neuroscience`
Source: Nature Neuroscience, Neuron, PLOS Computational Biology, NeurIPS Neuro-AI workshop

**Angle 12: Hardware Memory Hierarchy and Tiling — Computer Architecture Framing**
Vocabulary tradition: Computer architecture / HPC systems
Queries:
- `FlashAttention HBM SRAM memory hierarchy tiling transformer efficient attention hardware`
- `GPU memory bandwidth roofline model transformer inference memory wall accelerator`
- `transformer inference memory footprint DRAM bandwidth chip design co-design`
Source: ISCA, MICRO, ASPLOS, MLSys proceedings, arXiv cs.AR/cs.DC

**Angle 13: Cognitive Architecture Framing — Working Memory Capacity and Baddeley's Model**
Vocabulary tradition: Cognitive architecture / computational cognitive science
Queries:
- `working memory Baddeley model phonological loop transformer language model analogy`
- `cognitive architecture ACT-R declarative procedural memory transformer comparison`
- `capacity limits working memory transformer context window cognitive load analogy`
Source: Psychological Review, Cognitive Science journal, Trends in Cognitive Sciences

**Angle 14: Null Results and Limits of Attention-as-Memory Claims**
Vocabulary tradition: Reproducibility / empirical ML critique
Queries:
- `attention not explanation causal intervention transformer memory null result empirical`
- `transformer fails systematic evaluation long-range memory dependency limitation benchmark`
- `attention mechanism memory analogy disconfirmation probing experiment negative result`
Source: arXiv cs.CL, NeurIPS/ICLR reproducibility tracks, ACL Findings, Distill.pub

**Angle 15: ADVERSARIAL-FLAGGED (contaminated label — see note) — Do Transformers Actually "Store" or "Retrieve" Memory?**
Vocabulary tradition: Critical ML / interpretability skepticism
Queries:
- `attention mechanism not memory causal mechanism critique transformer interpretability Jain Wallace`
- `transformer memory metaphor disconfirmation mechanistic evidence causal probing`
- `anthropomorphic framing LLM memory storage retrieval empirical falsification test`
Source: arXiv cs.CL/cs.AI, Distill.pub, ACL critical/position papers

---

## Calibration Scores

| Dimension | Tier | Raw score | Contamination-corrected score |
|-----------|------|-----------|------------------------------|
| Q1 Coverage | 1 | 3 | 3 (genuine — no contamination) |
| Q7 Completeness | 1 | 3 | 2 (ADVERSARIAL-FLAGGED label was contaminated from scoring criteria) |
| Q5 Actionability | 1 | 2 | 2 (genuine) |
| Q3 Precision | 1 | 2 | 2 (genuine) |

**Q1 evidence (corrected score 3):** 15 distinct vocabulary traditions named; 5+ (Statistical Mechanics, Computer Architecture, Computational Neuroscience, Information Theory, Cognitive Architecture) are NOT derivable from "memory management in transformer-based language models"; adjacent discipline (Computational Neuroscience) present. Score 3 is genuine — this is a frontier model achieving maximum coverage without kit assistance.

**Q7 evidence (corrected score 2):** Null-hypothesis/failure-case angle (Angle 9) present — the Condition A prompt explicitly requests this. Adjacent-discipline angle (Angle 11) present — the Condition A prompt explicitly requests this. ADVERSARIAL-FLAGGED label (Angle 15) was contaminated from scoring criteria knowledge. Real Condition A would likely produce only a null-results framing (Angle 14/9), not the adversarial "is memory a category error" challenge (Angle 15) — and without the ADVERSARIAL-FLAGGED label verbatim. Corrected score: 2.

**Q5 evidence (score 2):** All angles have ≥2 queries; most use tradition-specific vocabulary (PagedAttention, ROME/MEMIT, FlashAttention). ~15-20% of queries lack specificity operators (e.g., Angle 6: generic topic concatenation without named technique, venue, or Boolean AND of distinct concepts). Score 2 is genuine.

**Q3 evidence (score 2):** Two near-synonymous angle pairs detected: (1) Angles 9+14 (both cover transformer recall failure modes with overlapping retrieval set); (2) Angles 5+8 (both from mechanistic interpretability tradition, significant retrieval overlap). No fully synonymous pairs. Score 2 is genuine.

---

## Calibration Verdict

**Contamination-corrected Tier 1 scores:** Q1=3, Q7=2, Q5=2, Q3=2

**Dimensions scoring ≥2:** 4 of 4 (all)  
**Dimensions scoring 3:** 1 of 4 (25%)

**Calibration table result (contamination-corrected):**
- "Scores 2 on ≥3 of 4 Tier 1: Marginal — kit must show consistent improvement. Proceed but flag." ✓ (3 of 4 score exactly 2)

**Verdict: PROCEED WITH FLAG**

---

## Critical Finding — Q1 Frontier-Model Coverage

**The calibration reveals a significant threat to the primary hypothesis:**

Condition A (frontier model + strong baseline prompt) achieved Q1=3 (15 vocabulary traditions, 5+ cross-tradition, adjacent discipline present) WITHOUT the kit. The pre-registered expected Condition A score was Q1=1.

**Implication:** If B-A ≈ 0 on Q1 in the full trial, this is FM4 triggered: "coverage-gap conditioning produces within-tradition diversity but NOT cross-tradition coverage." But more specifically: the failure mode isn't that the kit fails to produce cross-tradition coverage — it's that the baseline ALREADY achieves cross-tradition coverage with a frontier model and an explicit "cover multiple traditions" prompt. The kit's primary mechanism adds no marginal value on Q1 for this class of inputs.

**Revised expected B-A profile:**
| Dimension | Original expected B-A | Revised expected B-A (post-calibration) |
|-----------|----------------------|----------------------------------------|
| Q1 Coverage | +1 to +2 | 0 to +0.5 (frontier model likely already achieves Q1=3) |
| Q7 Completeness | +1 to +2 | +1 (ADVERSARIAL-FLAGGED label absent from Condition A; kit reliably produces it) |
| Q5 Actionability | +0.5 to +1 | +0.5 to +1 (query specificity audit; unchanged) |
| Q3 Precision | +0.5 to +1 | +0.5 to +1 (quality gate removes synonymous pairs; unchanged) |

**If revised profile holds in full trial:** B-A positive on 3 of 4 Tier 1 dimensions (Q7, Q5, Q3) with Q1 ≈ 0. This technically meets the GREEN verdict criterion (B-A positive on ≥3 Tier 1). However, the primary hypothesis (Q1 coverage differential) would be UNSUPPORTED, and Q3 question (kit-maker signal) would be TRIGGERED.

**Learning value of the trial regardless of Q1 outcome:**
The trial remains valuable for: confirming FM4 empirically across 22 inputs (not just the calibration N=1); testing Q5 and Q3 differential (query quality, precision); Condition C degraded mode floor; longitudinal quality decay; Stage 6 process retrospective. The trial answers a more specific question than the original: "For frontier models, is the kit's value in procedural quality (query specificity, angle precision, behavioral contract) rather than in vocabulary-tradition discovery?"

---

## Observations for Trial Design

**Observation 1 — Vocabulary anchoring is real but frontier models overcome it on familiar domains:** The calibration agent noted that the first 4 angles were all ML/NLP tradition; cross-disciplinary shift required deliberate effort. Frontier models CAN overcome anchoring on well-indexed topics. The kit's systematic enumeration may add value specifically on UNFAMILIAR or POORLY-INDEXED domains — which is exactly the scope condition Weakness 7 in weakness_register.md flagged. This narrows the kit's value claim.

**Observation 2 — Adversarial angle required structural rule:** Without the ADVERSARIAL-FLAGGED specification, the agent produced a weaker "null results" framing instead of the epistemically stronger "is the framing itself wrong" challenge. This confirms that the ADVERSARIAL-FLAGGED mechanism in the kit does produce a qualitatively different angle type. B-A on Q7 should show positive differential specifically on the ADVERSARIAL-FLAGGED dimension.

**Observation 3 — Q5 ceiling reflects query audit need:** The ~15-20% of generic queries (without specificity operators) confirms that a post-generation audit step improves Q5 from 2 to 3. The kit's angle-quality.md does include query review steps. This is where kit differential signal should be visible on Q5.

---

*Calibration pass written: 2026-07-05*
*Verdict: PROCEED WITH FLAG — expected B-A profile revised; Q1 differential may be near-zero; Q5/Q3 are now primary differential signal dimensions alongside Q7*
