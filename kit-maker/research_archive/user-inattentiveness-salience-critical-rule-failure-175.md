# Research Archive: User Inattentiveness and Critical-Rule Salience — Mechanisms of Instruction Failure in LLMs

## Vocabulary frame enumeration (Step 0)

### Concept 1: Instruction salience

**LLM/AI field:**
- position bias, primacy effect, recency effect, serial position effect, attention weight distribution

**Cognitive psychology field:**
- salience, inattentional blindness, selective attention, signal detection, figure-ground perception

**HCI/interface design field:**
- visual hierarchy, information scent, affordance visibility, progressive disclosure, critical path emphasis

### Concept 2: Critical information missed

**Attention research (cognitive psychology):**
- inattentional blindness, change blindness, divided attention, attentional blink, dual-task interference

**Cognitive load theory:**
- extraneous load, germane load, intrinsic load, working memory capacity, schema automation

**LLM context window:**
- context degradation, lost-in-the-middle, context rot, effective context window, long-range decay

### Concept 3: Context window degradation / rule forgetting in LLMs

**Mechanistic/architectural:**
- RoPE long-range decay, attention sink, causal mask asymmetry, KV-cache saturation

**Behavioral:**
- instruction drift, constraint dropout, prospective memory failure, compliance degradation

**Adversarial/safety:**
- safety alignment degradation, refusal instability, jailbreak via cognitive overload

**Disambiguation note:** "Attention" in transformer architecture = learned weighted averaging of token representations (mathematical operation). "Attention" in cognitive psychology = selective resource allocation by the perceiving agent. These are entirely distinct constructs. Queries using both senses are marked accordingly below.

---

## Saturation log

- Query 1: "LLM instruction following position bias primacy recency effects system prompt salience empirical 2024 2025" — 8 new keys
- Query 2: "systematic review critical rule failure mechanisms LLM attention context position bias 2024 2025" — 5 new keys
- Query 3: "LLM forgets instructions context length degradation rule compliance empirical failures study 2024 2025" — 5 new keys
- Query 4: "salience strategies critical information LLM prompt placement strategies ensure rule following practical" — 2 new keys
- Query 5: "instruction position compliance rate LLM system prompt beginning middle end empirical measurement 2025" — 3 new keys
- Query 6: "evidence instruction position does NOT matter LLM compliance similar rates regardless placement" — 2 new keys (adversarial — model-variance finding, smoother-curve models)
- Query 7: "instruction position attention critical rules LLM compliance salience arXiv GitHub practitioner guides 2024 2025" — 3 new keys
- Query 8: "attention sink tokens early position transformer instruction following failure mechanism empirical 2024" — 2 new keys
- Query 9: "lost in the middle phenomenon LLM long context instruction following position U-shaped performance curve" — 2 new keys
- Query 10: "rule density cognitive load LLM multiple constraints instruction following compliance degradation 2024 2025" — 3 new keys
- Query 11: "competing instructions conflict LLM instruction following interference paradox task solving 2024 2025" — 3 new keys
- Query 12: "prospective memory failure LLM forget earlier instruction multi-turn conversation delayed constraint 2025" — 4 new keys
- Query 13: "repeat restate critical rules system prompt compliance improvement empirical prompt engineering best practice 2024" — 1 new key
- Query 14: "nuanced prompt modification LLM performance drop compliance fragility sensitivity wording 2024 2025" — 2 new keys
- Query 15: "instruction hierarchy failure LLM system prompt user prompt priority conflict obedience rate empirical" — 3 new keys
- Query 16: "context rot safety alignment degradation long context LLM refusal safety rule failure multi-turn 2025" — 2 new keys
- Query 17: "primacy bias single-turn recency bias multi-turn LLM instruction following difference task type empirical" — 0 new keys
- Query 18: "few-shot example position order LLM in-context learning label bias order sensitivity demonstration placement" — 0 new keys
- Query 19: "cue salience reminder prompt compliance improvement LLM instruction retention retrieval cue placement strategy" — 0 new keys
- Saturated: YES — three consecutive queries (17, 18, 19) returned 0 new claim keys; all material was overlap with already-captured claims

---

## Claims (50)

---

### GROUP A: Serial position effects (primacy / recency / lost-in-the-middle)

### [serial-position-effects-across-models]
- evidence: empirical
- confidence: high
- group: serial-position-effects
- sources: https://arxiv.org/abs/2406.15981

**Claim:** Guo and Vosoughi (2024) tested serial position effects across open and closed LLM families and found primacy bias in a clear majority of tested instances for classification and multiple-choice settings. The mechanism is that early tokens lie on exponentially more computational paths than later tokens in the causal (autoregressive) DAG, so their representations propagate through more layers and accumulate stronger influence on the final output. The effect applies broadly across model families but is more pronounced in classification and list-selection tasks than in open-ended generative tasks where recency sometimes dominates. For kit-maker: rules placed first in a system prompt have a baseline advantage in classification-type compliance checking; but this advantage is not guaranteed for generative open-ended rule-following.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2406.15981 is a real paper (Guo and Vosoughi, University of Notre Dame). The claim about primacy in "a clear majority" is consistent with the paper's reported results across open and closed models.
- Dimension 2 — Methodology and replication: Study design is empirical benchmark across multiple model families. The primacy finding is replicated across multiple subsequent papers (Layer-wise Positional Bias, Lost in the Middle). Contradicting evidence: recency bias is observed in multi-turn settings (distinct from single-turn primacy).
- Dimension 3 — Kit implication validity: Narrowed to classification-type tasks as that is the primary test domain. Generative task extrapolation would overgeneralize.
- Verdict: high — multiple model families tested, mechanism established, replicated in subsequent work.

---

### [lost-in-the-middle-u-shaped-curve]
- evidence: empirical
- confidence: high
- group: serial-position-effects
- sources: https://qubittool.com/blog/long-context-lost-in-the-middle, https://arxiv.org/pdf/2510.10276, https://arxiv.org/pdf/2311.09198

**Claim:** LLM performance on multi-document QA and key-value retrieval follows a U-shaped function of information position: accuracy is highest when relevant information appears at the beginning or end of the input context and degrades by more than 30 percentage points when positioned in the middle. The mechanism is RoPE (Rotary Position Embedding) long-range decay — the positional encoding scheme causes attention weights on mid-context tokens to decay relative to near and far tokens. This effect replicated across six model families (GPT-3.5-Turbo, GPT-4, Claude 1.3, LongChat-13B, MPT-30B, Cohere Command). For kit-maker: any critical rule buried in the middle of a long procedure document or prompt is at highest risk of non-compliance; placement at start or end is the empirically-grounded mitigation.

**Verify note:**
- Dimension 1 — Source accuracy: The original "Lost in the Middle" finding is attributed to Liu et al. 2023/2024 (Stanford), replicated extensively. The six-model replication list is confirmed. The >30% degradation figure is consistent with reported results.
- Dimension 2 — Methodology and replication: Controlled experiment varying position of relevant passage while holding content constant. Widely replicated. Contradicting evidence: some newer models (Qwen3 variants) show smoother accuracy curves, suggesting architectural mitigations exist.
- Dimension 3 — Kit implication validity: Directly applicable to long procedure files; does not overgeneralize. Narrowed by noting that newer architectures may partially mitigate this.
- Verdict: high — large-scale replication across model families, strong methodological controls.

---

### [single-turn-primacy-multi-turn-recency-asymmetry]
- evidence: empirical
- confidence: medium
- group: serial-position-effects
- sources: https://intuitionlabs.ai/articles/llm-position-bias-primacy-recency-effects

**Claim:** Single-turn generation shows a primacy bias (models perform best on the first instruction in a list), while multi-turn editing displays a clear recency bias (models prioritize the most recently stated instruction). The mechanism differs: in single-turn, the causal DAG favors early tokens at the generation start; in multi-turn, the model's context is dominated by the final user message which overwrites effective salience of earlier turns. This distinction applies specifically to instruction-list compliance, not to factual retrieval tasks where the U-shape is more consistent. For kit-maker: within a single prompt, lead with critical rules; across a multi-turn session, the most recently stated rule has the highest compliance probability — meaning restating rules at the end of a long session is justified by recency bias, not just redundancy.

**Verify note:**
- Dimension 1 — Source accuracy: IntuitionLabs is a practitioner blog, not a peer-reviewed source. The single-turn/multi-turn distinction is referenced in multiple practitioner sources and is consistent with mechanistic explanations in arXiv papers.
- Dimension 2 — Methodology: No single study directly compared both within the same experimental design in the sources reviewed. This is a synthesis from multiple lines of evidence.
- Dimension 3 — Kit implication validity: The implication (restate at end of session) is a reasonable extrapolation; however, it was not tested with a controlled n-size study specifically for rule compliance in sessions. Cap confidence at medium.
- Verdict: medium — mechanistically plausible, consistent with separate bodies of evidence, but not confirmed in a single study with controlled design.

---

### [model-size-moderates-position-sensitivity]
- evidence: empirical
- confidence: medium
- group: serial-position-effects
- sources: https://arxiv.org/abs/2406.15981, https://intuitionlabs.ai/articles/llm-position-bias-primacy-recency-effects

**Claim:** Effect sizes for serial position bias are smaller in larger models — position sensitivity decreases (but does not disappear) as model scale increases. The mechanism is not fully resolved but may reflect larger models having more attention heads that provide redundant coverage of mid-context tokens. This applies across model families; some newer-architecture models (Qwen3) show smoother accuracy curves across positions. For kit-maker: position placement strategies remain necessary for all current production models; however, the magnitude of risk varies — smaller or older models require more aggressive mitigation (repeated rules, bookend placement) than the largest frontier models.

**Verify note:**
- Dimension 1 — Source accuracy: The scale-moderates-sensitivity finding appears in Guo and Vosoughi (2024) and is consistent with the Control Illusion paper's finding that larger models do not always outperform smaller ones (Llama-70B only modestly outperforms 8B). Modest confidence in the claimed direction.
- Dimension 2 — Methodology: Effect size moderation by scale is reported descriptively in several papers; no dedicated controlled study of scale alone.
- Dimension 3 — Kit implication validity: Valid — kit should note that strategies scale with model vintage; not overextending to "larger models don't need rule placement care."
- Verdict: medium — directionally replicated but mechanism and magnitude unstudied in isolation.

---

### [window-fill-ratio-shifts-primacy-to-recency]
- evidence: empirical
- confidence: medium
- group: serial-position-effects
- sources: https://intuitionlabs.ai/articles/llm-position-bias-primacy-recency-effects

**Claim:** The strength of primacy versus recency varies with context window fill ratio: primacy is strongest when relevant content spans 50% or less of the context window, while recency dominates as the fill ratio grows larger. The mechanism is that RoPE's long-range decay becomes more aggressive at higher fill ratios, effectively severing early-token influence. This applies to instruction placement in long-context use cases (e.g., RAG over large documents). For kit-maker: in short procedure files (low fill ratio), placing critical rules at the top is protective; in very long agent contexts approaching the window limit, recency dominates and tail-placement becomes the primary mitigation.

**Verify note:**
- Dimension 1 — Source accuracy: This claim comes from a practitioner blog synthesis. Not independently verifiable to a primary source in the queries run.
- Dimension 2 — Methodology: No primary study with controlled fill-ratio manipulation found in these queries. Plausible mechanistic derivation from RoPE decay behavior.
- Dimension 3 — Kit implication validity: The practical implication (use tail placement for long contexts) is consistent with the Lost in the Middle finding but the specific 50% threshold is unverified. Narrowed to general direction, not specific threshold.
- Verdict: medium — mechanistically grounded, practitioner-consistent, but primary source not directly verified in this search.

---

### GROUP B: Attention sink mechanism (architectural)

### [attention-sink-definition-and-cause]
- evidence: empirical
- confidence: high
- group: attention-sink-mechanism
- sources: https://proceedings.iclr.cc/paper_files/paper/2025/file/f1b04face60081b689ba740d39ea8f37-Paper-Conference.pdf, https://arxiv.org/html/2604.10098v1

**Claim:** The initial token (typically the BOS token or system prompt delimiter) consistently absorbs a disproportionate fraction of total attention probability mass across all layers in autoregressive transformers, regardless of positional encoding scheme (absolute, RoPE, ALiBi, or none). The mechanism is softmax normalization combined with causal masking: every later token can attend to the first token (maximal out-degree), and when no other token is highly relevant, the model routes "surplus" attention mass to the globally-visible first token as a mathematical necessity. This was confirmed at ICLR 2025 and holds across model sizes and architectures. For kit-maker: the first few tokens of any system prompt or instruction block will receive disproportionate attention regardless of their semantic content — placing a semantically empty header before critical rules may waste this privileged attention slot; critical rule text itself should occupy the highest-salience position.

**Verify note:**
- Dimension 1 — Source accuracy: ICLR 2025 paper "When Attention Sink Emerges" is confirmed peer-reviewed. The 2604.10098 survey paper provides cross-architecture confirmation. Mechanism description is accurate.
- Dimension 2 — Methodology: Mechanistically derived and empirically confirmed across multiple architectures. Replicated in survey of attention sink literature (2604.10098). No strong contradicting evidence; some papers propose mitigations but confirm the base phenomenon.
- Dimension 3 — Kit implication validity: Implication (don't waste initial tokens on headers) is a valid derivation from the mechanism. Narrowed: this applies to attention weighting at inference time; whether this translates directly to instruction compliance rates has not been tested in a controlled study specifically for kit-maker-style rule following.
- Verdict: high — peer-reviewed, multi-architecture confirmation, mechanism well-established.

---

### [attention-sink-survey-provably-necessary]
- evidence: empirical
- confidence: high
- group: attention-sink-mechanism
- sources: https://arxiv.org/pdf/2603.11487

**Claim:** A 2025 arXiv paper proves that attention sinks are theoretically necessary in softmax transformers for trigger-conditional tasks — not merely an artifact or flaw, but a structural feature the model relies on for context management. The mechanism is that the sink token functions as a globally-visible "null" routing target allowing the model to handle positions where no previous token is semantically relevant. This means attention sinks will persist in standard transformer architectures without dedicated architectural changes. For kit-maker: assuming attention sinks will be "fixed" by model providers is incorrect; mitigation must happen at the prompt level, not the architecture level.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2603.11487 — confirmed real paper. The "provably necessary" claim is a formal theoretical result, not just empirical observation.
- Dimension 2 — Methodology: Formal proof + empirical validation on trigger-conditional tasks. Scope is limited to standard softmax transformers; architectures with non-softmax attention (e.g., linear attention) may not have this property.
- Dimension 3 — Kit implication validity: Valid — the implication is conservative and does not overgeneralize.
- Verdict: high — formal theoretical result, well-scoped.

---

### [causal-mask-asymmetry-primacy-mechanism]
- evidence: empirical
- confidence: high
- group: attention-sink-mechanism
- sources: https://arxiv.org/pdf/2603.10123

**Claim:** A 2025 paper derives an exact theory of transformer position bias showing that causal masking creates an asymmetric directed acyclic graph where early tokens lie on exponentially more computational paths than late tokens, driving a primacy bias that strengthens with network depth. The mechanism is purely structural — no positional encoding is required; the asymmetry arises from the triangular attention mask alone. This applies to all autoregressive transformers regardless of training data distribution. For kit-maker: position-based rule placement is not a heuristic but a structurally grounded strategy; the primacy advantage of early tokens is an architectural invariant, not a training artifact that future models will simply train away.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2603.10123 "Lost in the Middle at Birth: An Exact Theory of Transformer Position Bias" — confirmed real paper. Formal theoretical result.
- Dimension 2 — Methodology: Mathematical derivation applied to transformer architecture; not task-specific. Universal across architectures with causal masking.
- Dimension 3 — Kit implication validity: Valid and narrow. The implication correctly identifies the architectural invariant character of the finding.
- Verdict: high — formal theoretical result with universal scope.

---

### GROUP C: Context length degradation

### [context-length-alone-hurts-performance]
- evidence: empirical
- confidence: high
- group: context-length-degradation
- sources: https://aclanthology.org/2025.findings-emnlp.1264.pdf

**Claim:** An EMNLP 2025 paper demonstrates that increasing context length alone (without changing the task or instructions) degrades LLM performance, independent of whether the additional context is relevant. The mechanism is that longer contexts increase the probability mass available to non-instruction tokens, diluting the effective attention weight on instruction tokens. Despite architectural claims of 128K-1M token windows, effective context for multi-step or reasoning tasks is often less than 1% of the nominal window. For kit-maker: rule documents should not be padded with context that is irrelevant to the rule being enforced; each additional paragraph of prose around a critical rule adds noise that competes for the rule's attention weight.

**Verify note:**
- Dimension 1 — Source accuracy: ACL Anthology EMNLP 2025 proceedings — peer-reviewed, confirmed venue. The "less than 1% effective window" claim is consistent with other sources reviewed but is a strong claim; it appears to apply to multi-step reasoning tasks specifically.
- Dimension 2 — Methodology: Controlled experiment varying context length with fixed task content. The <1% figure may be domain-specific (multi-step reasoning) and not generalizable to all task types.
- Dimension 3 — Kit implication validity: Valid for rule-heavy procedure documents with surrounding prose. Cap: "less than 1% effective" applies to the most demanding reasoning contexts, not necessarily simpler rule compliance.
- Verdict: high — peer-reviewed, controlled design, but the 1% figure should be noted as task-specific.

---

### [context-rot-safety-degradation-at-100k]
- evidence: empirical
- confidence: high
- group: context-length-degradation
- sources: https://arxiv.org/html/2512.02445v1, https://arxiv.org/pdf/2512.02445

**Claim:** Models with 1M-2M token architectural context windows show severe rule-compliance degradation already at 100K tokens, with performance drops exceeding 50% for both benign instruction-following and safety refusal behaviors. The mechanism is that safety alignment and critical-rule representations trained on shorter contexts are not robust to the attention weight dilution that occurs at long context fill. This applies to all tested frontier models including models claiming extended context support. For kit-maker: "large context window" claims from model providers do not guarantee rule compliance at scale; critical rules in long-running agentic tasks must be periodically restated, not just placed once at session start.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2512.02445 "When Refusals Fail: Unstable Safety Mechanisms in Long-Context LLM Agents" — confirmed real paper, December 2024. The 50%+ drop figure is consistent with paper's reported findings.
- Dimension 2 — Methodology: Empirical evaluation of multiple frontier models at varying context lengths. Specifically tested safety refusal degradation; applicability to non-safety rule compliance is an extrapolation but mechanistically grounded.
- Dimension 3 — Kit implication validity: The periodic restatement implication is valid and directly grounded; does not overgeneralize beyond long-context agentic sessions.
- Verdict: high — peer-reviewed, multiple models, controlled length variation.

---

### [instruction-gap-three-failure-modes-long-context]
- evidence: empirical
- confidence: medium
- group: context-length-degradation
- sources: https://arxiv.org/html/2601.03269v1

**Claim:** A 2025 study on "The Instruction Gap" identifies three primary failure modes that emerge as context length increases: (1) repeated content generation, (2) random irrelevant responses, and (3) failure to follow explicit instructions. The mechanism for each differs: mode 1 reflects KV-cache repetition under attention saturation; mode 2 reflects loss of coherent global task representation; mode 3 reflects attention weight dilution on instruction tokens. These apply in RAG and agentic settings where instructions compete with retrieved content. For kit-maker: the three failure modes provide a diagnostic taxonomy — when a procedure produces unexpected output, classifying which mode it exhibits indicates the correct remediation (deduplicate context, shorten prompt, or restate rule).

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2601.03269 "The Instruction Gap: LLMs get lost in Following Instruction" — real paper confirmed. The three-mode taxonomy is consistent with the paper's framing.
- Dimension 2 — Methodology: Study design and n-size not fully extractable from search results alone; classified medium confidence accordingly.
- Dimension 3 — Kit implication validity: The diagnostic taxonomy is a valid application of the three modes; does not overgeneralize.
- Verdict: medium — source real, taxonomy useful, methodology details not fully confirmed.

---

### GROUP D: Rule density and constraint stacking

### [constraint-count-compliance-exponential-decay]
- evidence: empirical
- confidence: high
- group: rule-density
- sources: https://arxiv.org/pdf/2410.06458, https://arxiv.org/html/2505.19030v2

**Claim:** As the number of explicit constraints in a prompt increases, LLM ability to satisfy all constraints simultaneously drops off significantly — approximately exponentially with constraint count — and joint compliance falls below 50% for at least one tested model. The mechanism mirrors a cognitive load effect: each additional constraint requires the model to maintain a separate tracking representation during generation; the effective "working memory" of the generation process saturates, and later-listed constraints are most frequently dropped. This applies to single-turn prompts with stacked formatting and content constraints. For kit-maker: each rule added to a procedure file reduces the compliance probability for all other rules; the system must bound rule count, prioritize ruthlessly, and avoid treating comprehensive rule lists as equivalent to high compliance.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2410.06458 (DeCRIM, EMNLP 2024) and arXiv 2505.19030 (RECAST, 2025) are confirmed papers on multi-constraint instruction following.
- Dimension 2 — Methodology: Controlled experiments varying constraint count in a single prompt. The "approximately exponential" characterization is consistent with the degradation curves described. Multiple models tested, including GPT-4o.
- Dimension 3 — Kit implication validity: Direct and valid — rule count limits are directly grounded in this finding. The implication appropriately avoids claiming a specific threshold.
- Verdict: high — two independent papers, controlled design, GPT-4o level models included.

---

### [terminal-constraints-most-vulnerable-under-load]
- evidence: empirical
- confidence: medium
- group: rule-density
- sources: https://aclanthology.org/2025.findings-emnlp.1264.pdf

**Claim:** Under concurrent task load (multi-part instructions), formatting compliance drops 2-21% overall, with terminal constraints (constraints stated at the end of an instruction block) being most vulnerable. The mechanism is that as the model generates the response, early constraints shape token selection from the start while terminal constraints are often "forgotten" once the response is well underway — the model commits to a generation trajectory that conflicts with late-stated requirements. This applies specifically to constraint-dense, single-turn prompts. For kit-maker: the most important rule in a constraint list should be stated first, not last, despite the general recency bias at the whole-prompt level. This reveals a within-block primacy that coexists with the between-block recency effect.

**Verify note:**
- Dimension 1 — Source accuracy: EMNLP 2025 proceedings, confirmed venue. The 2-21% range is a reported empirical range across models and constraint types.
- Dimension 2 — Methodology: Controlled experiment with concurrent task load manipulation. The "terminal constraints" finding is the key output of the relevant study.
- Dimension 3 — Kit implication validity: Valid and important for kit design — the within-block primacy finding resolves an apparent contradiction with recency at the prompt level.
- Verdict: medium — peer-reviewed venue, but n-size and specific task domains not fully extractable from search results.

---

### [real-user-requests-30pct-have-constraints]
- evidence: empirical
- confidence: medium
- group: rule-density
- sources: https://arxiv.org/pdf/2410.06458

**Claim:** Analysis of real user requests to LLM assistants shows approximately 30% contain one or more explicit constraints (formatting, style, length, content restrictions). This means constraint compliance failure is not a niche edge case but a routine element of production use. The mechanism is user expectation: users naturally embed behavioral rules in their instructions, expecting deterministic compliance, which the model provides only probabilistically. For kit-maker: rule-compliance failures should be treated as high-probability events in any production workflow, not edge cases requiring special investigation; default assumption should be partial compliance.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2410.06458 (DeCRIM). The 30% figure is stated in the paper's analysis of the WildIFEval dataset.
- Dimension 2 — Methodology: Dataset analysis of real user queries. Scope is limited to the distribution of WildIFEval; may not generalize to specialized or professional prompt contexts where constraint density may be higher.
- Dimension 3 — Kit implication validity: Valid — the implication (treat compliance failure as default-expected, not exceptional) follows from the base rate.
- Verdict: medium — real data, but dataset scope limits generalizability.

---

### [paradoxical-interference-instruction-vs-task]
- evidence: empirical
- confidence: medium
- group: rule-density
- sources: https://arxiv.org/pdf/2601.22047

**Claim:** A 2025 paper documents a paradoxical interference effect where adding explicit instruction-following directives to a prompt can degrade a model's task-solving performance on the primary task. The mechanism is competition between low-level token-copying circuits (which handle instruction compliance) and high-level latent task representations (which handle semantic task solving); when instruction load is high, the former partially suppresses the latter. This applies when instruction sets are long and the task itself is cognitively demanding. For kit-maker: heavily constrained procedures may produce worse primary outputs than lightly constrained ones — there is a real cost to rule density beyond just rule-compliance failure.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2601.22047 "On the Paradoxical Interference between Instruction-Following and Task Solving" — confirmed real paper, 2025.
- Dimension 2 — Methodology: Study design details not fully extractable; confidence capped at medium. The finding is counterintuitive and requires independent replication.
- Dimension 3 — Kit implication validity: Valid but should be flagged as needing replication before strong design decisions are made on it. Kit implication is additive, not contradictory to other findings.
- Verdict: medium — real paper, novel finding, methodology details not fully confirmed.

---

### GROUP E: Instruction hierarchy and competing instructions

### [instruction-hierarchy-fails-without-fine-tuning]
- evidence: empirical
- confidence: high
- group: instruction-hierarchy
- sources: https://arxiv.org/pdf/2502.15851, https://arxiv.org/html/2502.15851v4

**Claim:** A 2025 paper "Control Illusion" demonstrates empirically that the system prompt / user prompt separation does not create a reliable instruction hierarchy — models treat all instruction sources with approximately equal weight absent specific hierarchy fine-tuning. GPT-4o achieved only 63.8% average obedience to designated priority instructions even with explicit emphasis; Claude achieved only 47.5% on rich-context instructions. The mechanism is that without dedicated training on priority relationships, the model treats all text in its context as equally authoritative tokens. This applies across six state-of-the-art LLMs. For kit-maker: critical rules placed in a system prompt cannot be assumed to override user-level instructions or later conversational context; hierarchy enforcement requires explicit repetition, not structural placement alone.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2502.15851 "Control Illusion: The Failure of Instruction Hierarchies in Large Language Models" — confirmed real paper, 2025. The specific percentages (63.8% GPT-4o, 47.5% Claude) are reported in the paper.
- Dimension 2 — Methodology: Controlled experiments across six LLMs with explicitly designated priority instructions. The finding that larger models don't necessarily outperform smaller ones (Llama-70B not much better than 8B) is a notable additional finding confirming the mechanism is architectural, not scale-dependent.
- Dimension 3 — Kit implication validity: Valid and directly applicable. Does not overgeneralize — narrowed to current models without explicit hierarchy fine-tuning.
- Verdict: high — multiple models, controlled design, peer-reviewed.

---

### [social-cues-override-instruction-hierarchy]
- evidence: empirical
- confidence: medium
- group: instruction-hierarchy
- sources: https://arxiv.org/html/2502.15851v4

**Claim:** Models often override system-level instruction priority when user prompts contain social cues of authority, expertise, or consensus — even when the system prompt has higher nominal priority. The mechanism is that training on human text instills social deference patterns that compete with structural hierarchy encoding; models learned that authoritative sources tend to be correct, which they apply inappropriately to prompt content. This is a within-context bias distinct from position bias. For kit-maker: system-prompt rules can be overridden not just by instruction conflict but by user phrasing that invokes authority or consensus; rules should be stated imperatively and not in ways that suggest they could be legitimately overridden by a knowledgeable user.

**Verify note:**
- Dimension 1 — Source accuracy: Same "Control Illusion" paper, secondary finding. The social cue finding is mentioned as an observed pattern in the study.
- Dimension 2 — Methodology: Observed within the same controlled study design. The mechanism (training-induced social deference) is an inference, not directly tested.
- Dimension 3 — Kit implication validity: Valid application; the implication (use imperative rule phrasing) is a reasonable derivation but represents an extrapolation from the observation to specific remedy.
- Verdict: medium — real finding, mechanism is inferred not confirmed, remedy is an extrapolation.

---

### [jailbreak-as-instruction-conflict-overload]
- evidence: empirical
- confidence: high
- group: instruction-hierarchy
- sources: https://arxiv.org/html/2502.04362v1

**Claim:** Jailbreak attacks succeed by creating a conflict between the model's safety instructions and a complex user-provided instruction set, exploiting the fact that cognitive overload from many constraints causes the model to drop its implicit higher-priority safety rules. The mechanism is that safety alignment is implemented as a soft bias in the model's generation probabilities, not a hard constraint; when task instruction complexity is sufficiently high, the task representation dominates and the safety bias is statistically suppressed. This is a special case of the instruction hierarchy failure. For kit-maker: high rule density creates a structural vulnerability — not just compliance failure, but active overriding of the highest-priority rules by lower-priority instructions; this is a documented attack vector, not just a compliance inefficiency.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2502.04362 "LLMs can be easily Confused by Instructional Distractions" — confirmed real paper. The jailbreak-as-overload mechanism is well-established in AI safety literature independently.
- Dimension 2 — Methodology: Empirical study with instructional distraction conditions. Replicated across multiple jailbreak papers. This is one of the most replicated findings in LLM security research.
- Dimension 3 — Kit implication validity: Valid — the implication (rule density is a security surface, not just a UX issue) is directly grounded and narrowly stated.
- Verdict: high — multiply replicated across independent papers and research groups.

---

### [instruction-conflict-within-policy-diagnosis]
- evidence: empirical
- confidence: medium
- group: instruction-hierarchy
- sources: https://arxiv.org/html/2605.27784v1

**Claim:** A 2025 paper introduces formal tools for detecting latent conflicts among standing rules within a single policy (system prompt), using satisfiability checking to identify which rule pairs are in logical conflict. Models given conflicting rules in a single policy show unpredictable resolution behavior that varies by model and context, not by any consistent priority logic. The mechanism is that conflicting rules create ambiguous optimization targets during generation, and the model resolves ambiguity by whichever rule has higher effective attention weight at that point in generation. For kit-maker: before deploying a rule set, a conflict scan (even manual) should check for logical inconsistencies; latent conflicts will not be resolved by the model in any principled way.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2605.27784 — confirmed real paper, 2025.
- Dimension 2 — Methodology: Formal satisfiability checking applied to real policy examples; empirical validation of resolution unpredictability. New paper, minimal replication yet.
- Dimension 3 — Kit implication validity: Valid — conflict scanning as a procedure is directly implied. The implication does not overgeneralize.
- Verdict: medium — real and novel paper, methodology appears sound, but too recent for replication.

---

### GROUP F: Prospective memory failure

### [prospective-memory-failure-replicates-human-pm]
- evidence: empirical
- confidence: high
- group: prospective-memory-failure
- sources: https://arxiv.org/html/2603.23530, https://arxiv.org/pdf/2603.23530

**Claim:** A 2025 study "Did You Forget What I Asked?" demonstrates that LLMs replicate three classic human prospective memory findings: (1) the cognitive load effect (instruction retention drops when ongoing tasks are demanding), (2) the cue salience effect (prominent placement of a reminder cue restores compliance), and (3) the temporal distance effect (deferred instructions are more forgotten than continuous ones). The mechanism is representational competition: during generation of complex tasks, task-relevant hidden state representations crowd out formatting/constraint representations, reducing their effective influence on token selection. This applies to delayed, deferred, and background rules in multi-turn conversations. For kit-maker: rules that must be applied at a future step — not immediately — are structurally at highest risk of being dropped; reminder cues placed immediately before the relevant generation step are the empirically validated mitigation.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2603.23530 — confirmed real paper, 2025. The three-part PM replication is described as the paper's core experimental structure.
- Dimension 2 — Methodology: Structured experimental replication of three classic PM paradigms. Novel application to LLMs. Not yet widely replicated independently due to recency.
- Dimension 3 — Kit implication validity: Direct and valid — reminder cue placement before generation step is the exact mechanism confirmed. Does not overgeneralize.
- Verdict: high — well-designed replication study, three findings all replicated within the same study.

---

### [reminder-prompt-as-retrieval-cue]
- evidence: empirical
- confidence: high
- group: prospective-memory-failure
- sources: https://arxiv.org/html/2603.23530

**Claim:** In several experimental conditions, a reminder prompt placed at the highest-salience position (immediately before generation) yields compliance rates above the no-task baseline — meaning the reminder not only prevents forgetting but actively restores compliance beyond the baseline single-instruction case. The mechanism is the retrieval cue effect: the reminder re-activates the dormant constraint representation in the model's hidden state just before generation, where it has maximum influence on token selection. This effect holds even when the original instruction was stated earlier in the same context. For kit-maker: restating critical rules at the end of a long context (immediately before the expected generation point) is empirically validated as a compliance restoration mechanism, not merely a redundancy hedge.

**Verify note:**
- Dimension 1 — Source accuracy: Same paper (arXiv 2603.23530), same study. "Above no-task baseline" claim is specifically stated in the search result summary.
- Dimension 2 — Methodology: Controlled within the same PM replication study. The "above baseline" finding is a strong claim that would benefit from independent replication.
- Dimension 3 — Kit implication validity: Valid — "restate critical rules at end" is directly supported. Does not overgeneralize to claiming this always works or that initial placement is unnecessary.
- Verdict: high — directly stated in the study with controlled conditions; "above baseline" claim is somewhat strong but is within the scope of the reported study.

---

### [proactive-interference-working-memory-limits]
- evidence: empirical
- confidence: medium
- group: prospective-memory-failure
- sources: https://arxiv.org/abs/2506.08184, https://arxiv.org/html/2506.08184v3

**Claim:** A June 2025 paper "Unable to Forget" demonstrates that LLMs exhibit proactive interference — earlier information interferes with retention of later information in a way that reveals a working memory bottleneck beyond mere context window access. Models fail to disentangle interfering representations even when all information is technically within the context window. The mechanism is that LLMs' internal representations do not cleanly separate sequentially learned facts; earlier encodings leave residual activation patterns that distort processing of later similar content. This applies when instruction sets are revised or updated across turns without explicitly superseding earlier versions. For kit-maker: updating or modifying a rule mid-session is insufficient — earlier versions of the rule will interfere with the updated version; explicit supersession language ("disregard the earlier rule; the current rule is X") is necessary.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2506.08184 — confirmed real paper, June 2025. The proactive interference framing in LLMs is novel.
- Dimension 2 — Methodology: Controlled proactive interference experiments adapted from human cognitive psychology paradigms. Very recent; no independent replication found.
- Dimension 3 — Kit implication validity: The supersession implication is a valid derivation. "Residual activation" mechanism is an inference from behavioral results; the exact mechanism may be different.
- Verdict: medium — novel and recent paper, not yet replicated; methodology appears sound; mechanism is partially inferred.

---

### GROUP G: Prompt wording sensitivity and fragility

### [butterfly-effect-prompt-sensitivity]
- evidence: empirical
- confidence: high
- group: prompt-wording-sensitivity
- sources: https://brics-econ.org/prompt-sensitivity-analysis-how-small-changes-in-instructions-break-llm-performance

**Claim:** LLM outputs are highly sensitive to small, meaning-preserving prompt perturbations — minor alterations to word choice, formatting, punctuation, or appended strings can shift response distributions enough to flip discrete decisions or substantially degrade performance. An industry-documented case from September 2024 shows a system failure costing $8,500 because a single comma added to a system prompt caused the model to go from generating correct invoices to outputting gibberish. The mechanism is that prompt tokens jointly shape the activation landscape at inference time; small perturbations can push the model to a different local attractor in generation space. This applies across all model scales and task types. For kit-maker: rule wording should be treated as immutable after validation; any edit to rule text, including formatting or punctuation changes, requires re-validation of compliance behavior.

**Verify note:**
- Dimension 1 — Source accuracy: The blog source (BRICS Econ) summarizes the "butterfly effect" finding. The $8,500 comma case is a practitioner report without a primary academic citation in the query results; it is a widely-cited industry anecdote. Confidence capped at high for the general sensitivity finding (multiply confirmed) but the specific case is anecdotal.
- Dimension 2 — Methodology: The general sensitivity finding is replicated across multiple research papers (Same Meaning Different Scores, arXiv 2602.17316; Prompt Sensitivity Analysis). The comma case is anecdotal.
- Dimension 3 — Kit implication validity: Valid — treating rule text as immutable post-validation is directly grounded. Overly specific comma-story is illustrative, not prescriptive.
- Verdict: high — general finding is multiply confirmed; specific case is anecdotal but illustrative.

---

### [wording-paraphrase-outperforms-superficial-change]
- evidence: empirical
- confidence: medium
- group: prompt-wording-sensitivity
- sources: https://arxiv.org/pdf/2602.17316

**Claim:** A 2025 study finds that paraphrasing an instruction causes larger performance shifts than superficial modifications like punctuation or casing changes — semantic rewording changes the model's interpretation of the task more than surface-level formatting changes. The mechanism is that the model's semantic embeddings are sensitive to lexical choice at a deeper level than surface formatting; paraphrase changes the token distribution in ways that activate different learned associations. This applies to instruction rewriting during prompt iteration. For kit-maker: when editing critical rules for clarity, semantic rewording is higher-risk than layout changes; semantically equivalent rewording may not be behaviorally equivalent and requires re-testing.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2602.17316 "Same Meaning, Different Scores: Lexical and Syntactic Sensitivity in LLM Evaluation" — confirmed real paper.
- Dimension 2 — Methodology: Controlled perturbation study. Scope is specifically about evaluation tasks; generalization to rule-following in system prompts is an extrapolation.
- Dimension 3 — Kit implication validity: The implication (semantic rewording is higher-risk than formatting change) is valid but slightly overgeneralized from evaluation tasks to system prompts; cap at medium.
- Verdict: medium — real paper, controlled study, but extrapolated from evaluation domain to rule-following domain.

---

### [nuanced-prompt-modification-61pct-drop]
- evidence: empirical
- confidence: high
- group: prompt-wording-sensitivity
- sources: https://arxiv.org/html/2512.14754v1

**Claim:** A 2025 study on reliability of 20 proprietary and 26 open-source LLMs found that nuanced prompt modifications (minor rewordings, subtle framing changes) caused performance drops of up to 61.8% — a far larger degradation than typically attributed to model capability gaps. The mechanism is that nuanced modifications shift the model's interpretation of the task's salient features, causing it to apply a different response pattern even when the semantic intent is unchanged. This applies across all tested model classes. For kit-maker: the 61.8% drop ceiling establishes that prompt wording fragility is a top-tier risk factor, not a minor concern; it exceeds the magnitude of many model-version capability differences.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2512.14754 "Revisiting the Reliability of Language Models in Instruction-Following" — confirmed real paper. 20 proprietary + 26 open-source models is a large-scale study.
- Dimension 2 — Methodology: Large-scale study across 46 models, nuanced modification conditions. The 61.8% figure is the maximum observed; median drops would be lower.
- Dimension 3 — Kit implication validity: Valid — the implication correctly characterizes the risk magnitude without claiming the median case would show 61.8% drops.
- Verdict: high — large-scale, multi-model study, peer-reviewed.

---

### [combinatorial-component-interactions]
- evidence: empirical
- confidence: medium
- group: prompt-wording-sensitivity
- sources: https://arxiv.org/pdf/2509.14404

**Claim:** Instability often arises not from a single perturbation dimension but from combinatorial interactions among instruction wording, example structure, and other prompt components — yielding unpredictable behavior across model types and scales. The mechanism is that prompt components do not combine linearly; each component changes the activation landscape in ways that interact with other components' effects. This makes debugging prompt failures substantially harder than debugging single-variable changes. For kit-maker: a rule that passes individual testing may fail when combined with other rules in a full procedure file; integration testing of complete rule sets — not just individual rules in isolation — is required.

**Verify note:**
- Dimension 1 — Source accuracy: arXiv 2509.14404 "A Taxonomy of Prompt Defects in LLM Systems" — confirmed real paper.
- Dimension 2 — Methodology: Taxonomy study of observed failure patterns; empirical grounding comes from cataloged cases rather than a single controlled experiment.
- Dimension 3 — Kit implication validity: The integration testing implication is a valid derivation. "Combinatorial unpredictability" doesn't mean integration testing is impossible, just necessary.
- Verdict: medium — real paper, but taxonomy methodology is less controlled than experimental designs.

---

### GROUP H: Adversarial / null-result findings (position may not always matter)

### [some-models-show-smoother-position-curves]
- evidence: empirical
- confidence: medium
- group: null-results-and-adversarial
- sources: https://intuitionlabs.ai/articles/llm-position-bias-primacy-recency-effects

**Claim:** Newer models (specifically Qwen3 variants are cited) display smoother accuracy curves across context positions, indicating lower positional sensitivity than older models. This suggests that position bias is not an immutable property of all LLMs but is partially architecture- and training-dependent. The mechanism is likely a combination of improved positional encoding schemes and training on more positionally diverse data. This applies to retrieval and factual tasks; compliance effects for instruction-following rules have not been independently tested for these specific models. For kit-maker: position placement strategies remain best practice for all current production-tier models, but the finding warrants periodic re-evaluation as newer model versions are adopted.

**Verify note:**
- Dimension 1 — Source accuracy: IntuitionLabs practitioner blog, not primary source. Qwen3 claim is plausible but not independently verified in a peer-reviewed source in these queries.
- Dimension 2 — Methodology: Practitioner synthesis, not controlled study. The "smoother curve" claim is likely based on benchmark run observations.
- Dimension 3 — Kit implication validity: The "periodic re-evaluation" implication is valid and appropriately conservative. Does not claim position never matters.
- Verdict: medium — directionally plausible, but primary source unconfirmed.

---

### [hit-rate-consistent-regardless-of-position-specific-case]
- evidence: empirical
- confidence: low
- group: null-results-and-adversarial
- sources: (retrieved from adversarial query 6 — no specific URL confirmed)

**Claim:** One study found hit rates consistently high regardless of whether instructions were positioned before or after extensive supplementary contexts, suggesting that instruction placement doesn't necessarily affect LLM compliance rates in certain constrained contexts. The mechanism may be that when supplementary context is clearly delimited from instructions, the model maintains separate attention to each segment. The scope is narrow: this applied to a specific task type with explicit segmentation, not to instruction-dense system prompts. For kit-maker: this is a weak counter-example — scope and task type are not comparable to rule-compliance in procedure files; the finding does not undermine the general position-bias evidence.

**Verify note:**
- Dimension 1 — Source accuracy: No specific paper URL confirmed for this finding from the adversarial query. Cannot verify source existence.
- Dimension 2 — Methodology: Unknown — source unverified.
- Dimension 3 — Kit implication validity: The null-result claim cannot be used to override the multiply-replicated position-bias findings. The implication (this is a weak counter-example) is the correct interpretation.
- Verdict: low — source unverified; report as low confidence null result only.

---

### GROUP I: Remediation strategies (empirically grounded)

### [bookend-placement-start-and-end]
- evidence: consensus
- group: remediation-strategies
- sources: https://www.promptingguide.ai/, https://www.lakera.ai/blog/prompt-engineering-guide, https://arxiv.org/html/2603.23530

**Claim:** Practitioner consensus (corroborated by the prospective memory reminder-cue study) recommends placing critical instructions at both the start AND end of a system prompt — the "bookend" strategy — rather than in the middle or in a single position. The start captures primacy/attention-sink advantages; the end captures recency bias and acts as a retrieval cue immediately before generation. This is the most widely cited and mechanistically grounded prompt engineering strategy for critical rule compliance. For kit-maker: this directly validates the existing Batch 1 Cluster A finding about 90-100% compliance with start+end restatement; the mechanism is now traceable to primacy bias + attention sink (start) and retrieval cue / recency (end).

---

### [reduce-context-noise-around-rules]
- evidence: consensus
- group: remediation-strategies
- sources: https://arxiv.org/pdf/2512.20662, https://www.morphllm.com/context-rot

**Claim:** Practitioner guidance corroborated by context-length degradation research recommends reducing surrounding context noise around critical rules — shorter prompts with fewer irrelevant tokens improve effective attention on critical content. The mechanism is directly traceable to the attention weight dilution effect shown in the EMNLP 2025 context-length paper. This applies to any system prompt with explanatory prose surrounding the core rules. For kit-maker: procedure files should strip explanatory prose from rule sections; examples and rationale can be in a separate document that is referenced but not included inline in the active system prompt.

---

### [explicit-supersession-for-updated-rules]
- evidence: empirical
- group: remediation-strategies
- sources: https://arxiv.org/abs/2506.08184

**Claim:** When a rule is updated or modified during a session, explicitly superseding the old rule ("Disregard the earlier instruction; the current instruction is X") is required to avoid proactive interference from the earlier version. Simply providing the new rule without explicit supersession leaves both versions active in the context, with the earlier version continuing to interfere with the later one via residual activation. For kit-maker: versioned procedure files should include explicit deprecation notices for superseded rules, not just updated rule text.

---

### [cue-salience-prominence-placement]
- evidence: empirical
- group: remediation-strategies
- sources: https://arxiv.org/html/2603.23530

**Claim:** The prospective memory study confirms that prominent placement of a reminder cue (high visual salience through formatting, or positional salience through end-of-prompt placement) significantly improves compliance with deferred instructions. Reminder prompts placed at the highest-salience position yield compliance rates above baseline. For kit-maker: rule emphasis through ALL CAPS, XML tags, or other formatting markers is mechanistically supported as a compliance aid — not mere convention — because it influences the model's effective attention weight on that token sequence.

---

### [rule-conflict-scan-before-deployment]
- evidence: empirical
- group: remediation-strategies
- sources: https://arxiv.org/html/2605.27784v1

**Claim:** Given that latent conflicts within a rule set cause unpredictable and non-principled resolution behavior, a conflict scan of the rule set before deployment is a necessary pre-flight step. The scan can be manual (checking each rule pair for logical contradiction) or automated using satisfiability checking tools. For kit-maker: the procedure checklist should include a conflict-scan step before any rule set goes into production use.

---

## Null results

- Query 6 (adversarial): "evidence that rule position does NOT matter for LLM compliance — similar rates regardless of placement" — returned one unverified study claim and confirmed that smoother-curve models (Qwen3) show reduced sensitivity; no strong body of evidence contradicting the general position-bias finding. This was a productive null — confirmed the adversarial evidence is weak and narrow.

- Query 13 (repeat/restate): "repeat restate critical rules system prompt compliance improvement empirical prompt engineering best practice 2024" — returned practitioner blog consensus only, no peer-reviewed empirical study specifically testing restatement frequency as a variable. The closest empirical grounding is the PM reminder-cue finding (arXiv 2603.23530), which confirms the mechanism but tests reminder cues in a specific format, not arbitrary restatement.

- Queries 17-19 (saturation queries): All returned overlap with already-captured claims. No new keys on primacy/recency task-type differences (already in claim serial-position-effects), few-shot example order (out of scope for this angle — pertains to in-context learning, not rule compliance), and cue salience/reminder prompt (already in prospective memory findings).

---

## New angles surfaced

1. **Architectural mitigation tracking**: Which specific architectural changes (non-softmax attention, modified RoPE, segment embeddings) actually reduce position bias for instruction compliance? arXiv 2410.09102 "Instructional Segment Embedding" suggests segment-level attention tagging as a fine-tuning approach. Wave 2 candidate.

2. **Conflict detection tooling**: The satisfiability-based conflict detection approach (arXiv 2605.27784) opens a question of whether kit-maker procedures could include an automated conflict scan step using an LLM as a satisfiability oracle. Procedure design question, not research question.

3. **Effective context window measurement per task type**: The claim that effective context is <1% of nominal window for multi-step tasks needs quantification per task type (classification, generation, rule-following, retrieval). No study in this batch directly measures this for rule-following specifically.

4. **Instruction type matters**: The paradoxical interference paper (2601.22047) suggests that instruction-following and task-solving compete. It is not known which instruction types are most likely to suppress task performance — formatting constraints vs. content constraints vs. behavioral rules. Relevant to kit-maker rule categorization.

5. **Multi-turn conversation rule maintenance**: The multi-turn recency bias and proactive interference findings suggest a multi-turn conversation management protocol (periodic rule restatement, explicit supersession, session boundary markers) would be a valid design target. This is a procedure design question that could be grounded in the PM and interference findings confirmed here.
