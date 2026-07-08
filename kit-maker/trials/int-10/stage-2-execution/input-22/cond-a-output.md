# Research Angles: Fine-Tuning vs. Prompting Decision

**Topic:** When to fine-tune a language model vs. use prompting for a given task.

---

## Angle 1: Task Performance Benchmarking

**Vocabulary tradition / field:** NLP benchmarking / empirical ML evaluation

**Search queries:**
- `"fine-tuning vs prompting" performance comparison benchmark NLP`
- `"in-context learning" vs "fine-tuned" accuracy task comparison`
- `few-shot prompting vs supervised fine-tuning evaluation NLP benchmark`

**Best source type:** Academic papers (ACL, EMNLP, NeurIPS, ICLR proceedings); arXiv preprints

---

## Angle 2: In-Context Learning (ICL) Theory and Limits

**Vocabulary tradition / field:** Theoretical ML / in-context learning research

**Search queries:**
- `"in-context learning" theory limitations meta-learning language model`
- `why does in-context learning work mechanistic interpretability`
- `"in-context learning" failure modes task complexity limits`

**Best source type:** Academic papers (NeurIPS, ICML, ICLR); arXiv preprints from DeepMind, Stanford, MIT groups

---

## Angle 3: Parameter-Efficient Fine-Tuning (PEFT) as a Middle Ground

**Vocabulary tradition / field:** Efficient deep learning / adapter-based methods

**Search queries:**
- `"parameter-efficient fine-tuning" LoRA adapters vs prompting comparison`
- `LoRA "prompt tuning" soft prompts performance efficiency tradeoff`
- `PEFT methods survey when to use fine-tuning alternatives`

**Best source type:** Academic papers (ACL, NeurIPS); GitHub repositories (Hugging Face PEFT library); practitioner technical blogs

---

## Angle 4: Data Efficiency and Labeled Data Requirements

**Vocabulary tradition / field:** Semi-supervised learning / low-resource NLP

**Search queries:**
- `"how much data" fine-tuning language model threshold performance`
- `low-resource fine-tuning vs few-shot prompting data requirements`
- `sample efficiency prompting versus supervised fine-tuning LLM`

**Best source type:** Academic papers (EMNLP, NAACL, ACL); AI lab technical reports (Google, Meta AI, Anthropic)

---

## Angle 5: Instruction Tuning and Its Effect on the Decision

**Vocabulary tradition / field:** Instruction following / alignment research

**Search queries:**
- `instruction tuning FLAN T5 effect on prompting vs fine-tuning tradeoff`
- `"instruction-tuned" models prompting sufficiency task generalization`
- `InstructGPT RLHF instruction following vs further fine-tuning`

**Best source type:** Academic papers; AI lab technical reports (OpenAI, Google DeepMind, Anthropic)

---

## Angle 6: Prompt Engineering and Systematic Prompt Optimization

**Vocabulary tradition / field:** Prompt engineering / human-AI interaction

**Search queries:**
- `prompt engineering best practices limits when prompting is insufficient`
- `chain-of-thought prompting vs fine-tuning complex reasoning tasks`
- `automatic prompt optimization vs fine-tuning performance comparison`

**Best source type:** Academic papers; practitioner blogs (Lilian Weng, Simon Willison); AI lab technical reports

---

## Angle 7: Computational Cost and Inference Economics

**Vocabulary tradition / field:** MLOps / production ML / AI economics

**Search queries:**
- `fine-tuning cost inference latency tradeoff vs prompting API economics`
- `LLM deployment cost fine-tuned model vs few-shot prompt engineering`
- `"total cost of ownership" fine-tuning vs prompting production deployment`

**Best source type:** Practitioner blogs (Weights & Biases, Hugging Face, Anyscale); engineering blogs (OpenAI, Anthropic); conference talks (MLSys, SysML)

---

## Angle 8: Domain Adaptation and Out-of-Distribution Generalization

**Vocabulary tradition / field:** Domain adaptation / transfer learning

**Search queries:**
- `domain adaptation fine-tuning vs prompting out-of-distribution language model`
- `specialized domain biomedical legal finance LLM fine-tuning vs prompting`
- `distribution shift prompting robustness vs fine-tuning generalization`

**Best source type:** Academic papers (domain-specific NLP venues: BioNLP, FinNLP, LegalAI workshops); arXiv

---

## Angle 9: Knowledge Injection — Facts, Updates, and Memorization

**Vocabulary tradition / field:** Knowledge representation / factual recall in LLMs

**Search queries:**
- `fine-tuning vs prompting knowledge injection factual recall language model`
- `"knowledge editing" vs RAG vs fine-tuning factual updates LLM`
- `memorization generalization tradeoff fine-tuning new information`

**Best source type:** Academic papers (ACL, EMNLP); AI lab reports; arXiv preprints

---

## Angle 10: Catastrophic Forgetting and Negative Transfer

**Vocabulary tradition / field:** Continual learning / transfer learning failure modes

**Search queries:**
- `catastrophic forgetting fine-tuning large language models task-specific`
- `"negative transfer" fine-tuning LLM degraded performance general capability`
- `fine-tuning hurts general ability language model tradeoff`

**Best source type:** Academic papers (NeurIPS, ICML, ICLR); arXiv preprints; continual learning literature

---

## Angle 11: Null Results and When Fine-Tuning Does Not Help

**Vocabulary tradition / field:** Negative results reporting / empirical NLP

**Search queries:**
- `fine-tuning does not improve prompting null result language model`
- `"no significant difference" fine-tuning few-shot prompting NLP task`
- `failure fine-tuning language model overfitting small dataset`

**Best source type:** Negative results papers (ACL, EMNLP "Findings" track); arXiv; practitioner post-mortems on Medium/Substack

---

## Angle 12: Privacy, Security, and Data Governance Constraints

**Vocabulary tradition / field:** AI security / data privacy / enterprise AI deployment

**Search queries:**
- `fine-tuning on-premise vs prompting API data privacy LLM enterprise`
- `sensitive data fine-tuning local deployment vs cloud prompting tradeoff`
- `PII compliance HIPAA GDPR fine-tuning vs prompt-based LLM approach`

**Best source type:** Practitioner white papers; enterprise AI vendor documentation; legal/compliance-focused blogs; IEEE Security & Privacy

---

## Angle 13: Task Taxonomy and Complexity Thresholds

**Vocabulary tradition / field:** Cognitive task analysis / NLP task classification

**Search queries:**
- `task complexity language model prompting vs fine-tuning classification taxonomy`
- `"simple vs complex tasks" prompting sufficient fine-tuning necessary LLM`
- `task difficulty threshold when to fine-tune language model guidelines`

**Best source type:** Academic survey papers; AI lab technical reports; practitioner decision guides (Hugging Face, LangChain docs)

---

## Angle 14: Behavioral Alignment, Format, and Style Control

**Vocabulary tradition / field:** Alignment research / controllable generation

**Search queries:**
- `fine-tuning vs prompting output format control style consistency LLM`
- `RLHF fine-tuning behavior alignment vs system prompt instruction following`
- `"output format" constrained generation prompting fine-tuning comparison`

**Best source type:** AI lab technical reports (OpenAI, Anthropic); academic papers on alignment (AAAI, NeurIPS Alignment workshops)

---

## Angle 15: Retrieval-Augmented Generation (RAG) as an Alternative to Both

**Vocabulary tradition / field:** Information retrieval / knowledge-augmented generation

**Search queries:**
- `RAG retrieval augmented generation vs fine-tuning vs prompting comparison`
- `"when to use RAG" vs fine-tuning language model decision guide`
- `retrieval augmentation prompting sufficient without fine-tuning knowledge tasks`

**Best source type:** Academic papers (SIGIR, ACL); AI lab blog posts; practitioner benchmarks (LlamaIndex, LangChain blogs)

---

## Angle 16: Emergent Abilities and Scale-Dependent Behavior

**Vocabulary tradition / field:** Scaling laws / emergent capabilities research

**Search queries:**
- `emergent abilities scale language model task prompting threshold fine-tuning`
- `scaling laws prompting sufficient large models fine-tuning small models`
- `"emergent capabilities" when prompting works versus fine-tuning required scale`

**Best source type:** Academic papers (NeurIPS, ICLR); Google, DeepMind, Anthropic technical reports; arXiv

---

## Angle 17: Cognitive Science and Human Skill Acquisition Analogy

**Vocabulary tradition / field:** Cognitive science / analogy-based reasoning (adjacent discipline)

**Search queries:**
- `analogy human skill acquisition "prompting" explicit instruction "fine-tuning" implicit learning`
- `cognitive flexibility procedural vs declarative knowledge LLM analogy prompting`
- `"worked examples" instruction learning cognitive load AI fine-tuning prompting`

**Best source type:** Cognitive science journals (Cognitive Science, Psychological Review); interdisciplinary AI venues; book chapters on human-machine analogy

---

## Angle 18: Evaluation Methodology and Metric Choice

**Vocabulary tradition / field:** ML evaluation methodology / measurement theory

**Search queries:**
- `evaluation metrics fine-tuning vs prompting comparison methodology pitfalls`
- `fair comparison prompting vs fine-tuning benchmark contamination evaluation`
- `hyperparameter tuning prompt sensitivity evaluation variance LLM comparison`

**Best source type:** Academic papers (EMNLP evaluation tracks); arXiv; ML methodology blogs (Sebastian Ruder, Chip Huyen)

---

## Summary Statistics

- **Total angles:** 18
- **Distinct vocabulary traditions used:** 18
  1. NLP benchmarking / empirical ML evaluation
  2. Theoretical ML / in-context learning research
  3. Efficient deep learning / adapter-based methods
  4. Semi-supervised learning / low-resource NLP
  5. Instruction following / alignment research
  6. Prompt engineering / human-AI interaction
  7. MLOps / production ML / AI economics
  8. Domain adaptation / transfer learning
  9. Knowledge representation / factual recall in LLMs
  10. Continual learning / transfer learning failure modes
  11. Negative results reporting / empirical NLP
  12. AI security / data privacy / enterprise AI deployment
  13. Cognitive task analysis / NLP task classification
  14. Alignment research / controllable generation
  15. Information retrieval / knowledge-augmented generation
  16. Scaling laws / emergent capabilities research
  17. Cognitive science / analogy-based reasoning (adjacent discipline)
  18. ML evaluation methodology / measurement theory
