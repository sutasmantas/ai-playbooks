# Research Angles: Memory in LLMs — How Models Store and Access Information

---

## Angle 1: Knowledge Storage in Feed-Forward Layers (Key-Value Memory View)

**Vocabulary tradition / field:** Mechanistic interpretability; transformer internals

The dominant finding in this tradition is that feed-forward (FFN) sublayers in transformers act as key-value memories, with keys activating on input patterns and values recalling associated facts. Geva et al. (2021) established this framing; subsequent work localizes factual associations to specific layers and neurons.

**Search queries:**
- `"feed-forward" "key-value memory" transformer factual knowledge neurons`
- `"transformer" "knowledge neurons" factual associations FFN layers`
- `site:arxiv.org "MLP" "memory" "transformer" factual recall localization`

**Best source type:** arXiv preprints (cs.LG, cs.CL); NeurIPS/ICLR/ACL proceedings

---

## Angle 2: Attention as Working Memory / Associative Retrieval

**Vocabulary tradition / field:** Cognitive-computational neuroscience; transformer architecture theory

Attention mechanisms are framed as dynamic, content-addressable working memory — the query selects from keys and retrieves associated values. This angle connects to classical Hopfield network theory (modern Hopfield networks as dense associative memories) and to cognitive models of working memory capacity.

**Search queries:**
- `"attention mechanism" "associative memory" Hopfield transformer capacity`
- `"modern Hopfield networks" transformers retrieval memory storage`
- `"self-attention" working memory capacity content-addressable`

**Best source type:** arXiv preprints; ICML/NeurIPS theory papers; Ramsauer et al. 2020 (Hopfield connection); cognitive science journals (Psychological Review)

---

## Angle 3: Mechanistic Interpretability of Factual Recall Circuits

**Vocabulary tradition / field:** Mechanistic interpretability; circuits-level analysis

This tradition decomposes model behavior into interpretable circuits of attention heads and MLP layers. For memory/recall, the key works trace how a model retrieves a specific fact (e.g., "The Eiffel Tower is in [Paris]") through multi-head attention "lookup" heads and residual stream interactions. Wang et al. (IOI circuit), Meng et al. (ROME), and Hernandez et al. are central.

**Search queries:**
- `mechanistic interpretability "factual recall" circuits attention heads residual stream`
- `"indirect object identification" circuits transformer memory trace`
- `"knowledge localization" transformer "causal tracing" factual associations`

**Best source type:** arXiv preprints; Anthropic/DeepMind/EleutherAI technical reports; ICLR proceedings

---

## Angle 4: Knowledge Editing and Surgical Weight Modification

**Vocabulary tradition / field:** Model editing; lifelong learning; knowledge update

This field asks: given a trained LLM, how can a single fact be changed without full retraining? Methods (ROME, MEMIT, GRACE, AlphaEdit) reveal what is modifiable about how facts are encoded — each approach makes implicit claims about memory storage architecture.

**Search queries:**
- `"knowledge editing" LLM "ROME" "MEMIT" factual updates transformer`
- `"model editing" large language models weight modification factual knowledge`
- `"locate and edit" factual associations transformer "causal tracing"`

**Best source type:** arXiv preprints; NeurIPS/ICLR/ACL proceedings; GitHub repos (Rome, EasyEdit)

---

## Angle 5: In-Context Learning as Implicit Memory / Transient Episodic Storage

**Vocabulary tradition / field:** In-context learning (ICL) theory; meta-learning

In-context learning treats the context window as a form of working/episodic memory: the model "stores" examples in the context and retrieves patterns from them at inference time. This angle asks how models use context tokens as an external episodic buffer distinct from parametric (weight-encoded) memory.

**Search queries:**
- `"in-context learning" "implicit Bayesian inference" memory retrieval transformer`
- `"in-context learning" parametric vs episodic memory LLM`
- `"few-shot learning" context window memory capacity retrieval mechanism`

**Best source type:** arXiv preprints (cs.LG); ICML/NeurIPS/ICLR; Anthropic/Google Brain technical reports

---

## Angle 6: Memorization vs. Generalization — Training Data Verbatim Recall

**Vocabulary tradition / field:** Memorization research; privacy/security; generalization theory

This angle studies when and why LLMs reproduce training data verbatim (extractable memorization) vs. generalize. Carlini et al. established extraction attacks showing memorized sequences can be recovered. The angle is central to understanding what "memory" means in the storage sense — distinguishing rote encoding from pattern abstraction.

**Search queries:**
- `"memorization" large language models "training data extraction" verbatim recall`
- `Carlini "extracting training data" language models memorization`
- `"differential privacy" LLM memorization generalization tradeoff`

**Best source type:** IEEE S&P / USENIX Security / CCS proceedings; arXiv (cs.CR, cs.LG); Carlini et al. papers

---

## Angle 7: Catastrophic Forgetting and Continual Learning

**Vocabulary tradition / field:** Continual learning; lifelong learning; neural plasticity

As models are updated or fine-tuned, previously stored knowledge degrades — catastrophic forgetting. This tradition asks how memory is organized across training phases, what makes some knowledge robust and other knowledge fragile, and how to preserve old memory while acquiring new.

**Search queries:**
- `"catastrophic forgetting" large language models continual learning fine-tuning`
- `"continual learning" LLM knowledge retention forgetting plasticity`
- `"sequential fine-tuning" knowledge degradation transformer memory preservation`

**Best source type:** arXiv preprints; ICLR/NeurIPS; Journal of Machine Learning Research (JMLR)

---

## Angle 8: Long-Context and Extended Memory Architectures

**Vocabulary tradition / field:** Long-context modeling; efficient transformers; external memory augmentation

Standard transformer attention scales quadratically with context length, imposing a hard memory horizon. This angle covers architectural solutions: sparse attention (Longformer, BigBird), recurrent state compression (Mamba, RWKV), memory-augmented transformers (Memorizing Transformers, MemGPT), and retrieval-augmented generation (RAG) as external episodic stores.

**Search queries:**
- `"long-context" transformer memory retrieval "extended context" LLM architecture`
- `"retrieval-augmented generation" LLM external memory knowledge retrieval`
- `"memory-augmented" transformer "MemGPT" long-term memory external storage`

**Best source type:** arXiv preprints; GitHub (Langchain, LlamaIndex, MemGPT repos); ACL/EMNLP; practitioner blogs (LangChain, Pinecone)

---

## Angle 9: Grokking — Delayed Memorization to Generalization Transitions

**Vocabulary tradition / field:** Grokking; phase transitions in learning; double descent

Grokking describes a phase transition where a model first memorizes training data (overfitting), then suddenly generalizes long after training loss plateaus. This angle probes the dynamics of memory formation and the distinction between surface memorization and abstract knowledge encoding, relevant to understanding when and how facts move from rote storage to generalized representation.

**Search queries:**
- `"grokking" neural networks "delayed generalization" memorization phase transition`
- `"grokking" modular arithmetic transformers weight structure memorization`
- `"double descent" "memorization" generalization language models training dynamics`

**Best source type:** arXiv preprints; ICLR proceedings (Power et al. 2022); NeurIPS theory track

---

## Angle 10: Memory-Augmented Neural Networks (External Memory Architectures)

**Vocabulary tradition / field:** Neural Turing Machines; differentiable memory; hybrid neuro-symbolic systems

Pre-LLM work on explicit external memory (NTMs, Differentiable Neural Computers, Memory Networks, Neural Program Interpreters) established a vocabulary of read/write heads, addressable memory slots, and content-based vs. location-based addressing. This tradition is adjacent to but distinct from transformer memory and provides contrast cases for understanding what is and is not "memory" in LLMs.

**Search queries:**
- `"Neural Turing Machine" differentiable memory "Memory Networks" external memory neural`
- `"Differentiable Neural Computer" memory addressing read write operations`
- `"memory-augmented neural networks" comparison transformers attention memory`

**Best source type:** NeurIPS/ICML proceedings (Graves et al. 2014, 2016; Weston et al. 2015); arXiv; DeepMind technical reports

---

## Angle 11: Semantic Memory vs. Episodic Memory — Cognitive Science Framing

**Vocabulary tradition / field:** Cognitive science; neuropsychology; cognitive architecture

Tulving's distinction between semantic memory (general world knowledge) and episodic memory (specific contextual events) maps onto the LLM distinction between parametric knowledge (weights) and in-context knowledge (tokens). This angle imports cognitive frameworks to ask whether LLMs have analogues of episodic binding, temporal tagging, and semantic generalization.

**Search queries:**
- `"semantic memory" "episodic memory" large language models cognitive analogy`
- `"parametric knowledge" "contextual memory" LLM Tulving semantic episodic`
- `cognitive architecture memory systems comparison transformers human memory`

**Best source type:** Psychological Review; Trends in Cognitive Sciences; interdisciplinary AI+cog-sci venues (CogSci proceedings, Minds and Machines)

---

## Angle 12: Hallucination as Memory Retrieval Failure

**Vocabulary tradition / field:** Hallucination research; factual consistency; reliability

Hallucinations are the failure mode of LLM memory: the model generates plausible-sounding but factually wrong content. This angle connects memory storage/retrieval mechanisms directly to failure cases — misrouted recall, conflation of similar facts, confabulation under uncertainty. Understanding when retrieval fails illuminates the underlying storage architecture.

**Search queries:**
- `"hallucination" LLM factual errors memory retrieval failure mechanism`
- `"confabulation" large language models knowledge gaps parametric memory`
- `"factual consistency" transformer hallucination causes training data coverage`

**Best source type:** arXiv preprints; ACL/EMNLP/NAACL; AI safety/alignment practitioner blogs (Anthropic, DeepMind safety team reports)

---

## Angle 13: Probing Studies — Representational Geometry of Stored Knowledge

**Vocabulary tradition / field:** Probing classifiers; representational analysis; BERTology

Probing studies train lightweight classifiers on intermediate layer representations to ask what information is encoded where. For memory, probing reveals whether factual attributes (e.g., country of a city) are linearly decodable from specific layers, and how representation geometry shifts across layers as information is processed and retrieved.

**Search queries:**
- `"probing classifiers" transformer "factual knowledge" layer representations geometry`
- `"BERTology" factual knowledge representation layers probing`
- `"linear representation" knowledge attributes transformer hidden states probing`

**Best source type:** ACL/EMNLP/NAACL proceedings; arXiv (cs.CL); EMNLP BlackboxNLP workshop

---

## Angle 14: Null Results and Failure-to-Localize Studies

**Vocabulary tradition / field:** Replication; mechanistic interpretability critique; causal scrubbing

Several studies have challenged the clean "knowledge is localized in FFN layers" picture: causal scrubbing experiments, distributed representations across layers, and failures to replicate ROME-style localization on harder tasks. This angle is essential for triangulating what is actually known vs. oversimplified in the storage narrative.

**Search queries:**
- `"knowledge localization" LLM failure "distributed representations" critique ROME`
- `"causal scrubbing" transformer circuits replication failures interpretability`
- `"factual knowledge" NOT localized distributed transformer null result`

**Best source type:** arXiv preprints (especially replication/critique papers); ICLR/NeurIPS discussions; Alignment Forum / LessWrong technical posts

---

## Angle 15: Compression, Redundancy, and Information Theory of Weight Memory

**Vocabulary tradition / field:** Information theory of deep learning; model compression; knowledge distillation

From an information-theoretic perspective, training encodes a compressed statistical summary of the training corpus into weights. This angle asks how much information is stored, how redundantly, and what the effective capacity of weight-based memory is — drawing on PAC-Bayes bounds, minimum description length, and weight pruning studies.

**Search queries:**
- `"information bottleneck" transformer training memory capacity compression`
- `"model compression" knowledge distillation LLM information retention weight memory`
- `"PAC-Bayes" LLM generalization capacity parametric memory information theory`

**Best source type:** arXiv (cs.LG, cs.IT); ICML/NeurIPS theory track; Journal of Machine Learning Research

---

## Summary Table

| # | Angle Title | Tradition/Field |
|---|-------------|----------------|
| 1 | Knowledge Storage in FFN Layers | Mechanistic interpretability |
| 2 | Attention as Working Memory / Hopfield | Cognitive-computational / architecture theory |
| 3 | Factual Recall Circuits | Mechanistic interpretability (circuits) |
| 4 | Knowledge Editing | Model editing / lifelong learning |
| 5 | In-Context Learning as Episodic Memory | ICL theory / meta-learning |
| 6 | Memorization vs. Generalization | Privacy / security / generalization theory |
| 7 | Catastrophic Forgetting | Continual learning |
| 8 | Long-Context and Extended Memory | Efficient transformers / RAG |
| 9 | Grokking / Phase Transitions | Learning dynamics / phase transitions |
| 10 | Memory-Augmented Neural Networks | NTM / differentiable memory |
| 11 | Semantic vs. Episodic Memory | Cognitive science / neuropsychology |
| 12 | Hallucination as Retrieval Failure | Hallucination research / reliability |
| 13 | Probing and Representational Geometry | Probing / BERTology |
| 14 | Null Results and Failure-to-Localize | Replication / interpretability critique |
| 15 | Compression and Information Theory | Information theory / model compression |

**Total angles: 15**
**Distinct vocabulary traditions: 15**
