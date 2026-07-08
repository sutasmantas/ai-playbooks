# Research Archive: Multi-task instruction completion in LLM agents — when user gives multiple tasks at once, what is the dropout rate, which tasks are dropped (position/complexity effects), and what is the underlying mechanism

## Saturation log
- Query 1: "LLM multi-task instruction completeness task omission dropout rate empirical study" — 3 new keys
- Query 2: "prospective memory multiple concurrent tasks LLM agent retention forgetting empirical" — 3 new keys
- Query 3: "multi-step request task omission AI agent position effect first last mentioned empirical" — 3 new keys
- Query 4: "todo tracking LLM agent multi-task completeness structured execution improvement empirical" — 2 new keys
- Query 5: "task count instruction following LLM compliance rate scaling empirical benchmark" — 3 new keys
- Saturated: NO

---

## Claims (14)

### [key: omission-dominates-modification-under-load]
- evidence: empirical
- confidence: high
- group: multi-task-omission-rates
- sources: https://arxiv.org/html/2507.11538v1, https://arxiv.org/pdf/2507.11538

**Claim:** IFScale (Jaroslawicz et al., 2025, arxiv 2507.11538) tested LLMs on up to 500 simultaneous keyword-inclusion instructions in a business report task. At high instruction densities, omission errors (complete instruction dropping) dominate over modification errors by ratios of 20-35x for most models (llama-4-scout O:M ratio 34.88 at 500 instructions; llama-4-maverick and claude-3.5-haiku consistently 20-30+). Mechanism: under cognitive load, models abandon complete instruction satisfaction rather than attempting partial/morphological approximations — the failure mode is wholesale dropping, not degraded execution. Scope: effect is consistent across non-reasoning models; reasoning models (o3, o4-mini) maintain lower O:M ratios by attempting modifications. Kit-maker implication: any kit prompting multiple concurrent tasks will see task dropout (not degraded quality) as the primary failure mode; checklists or structured acknowledgment mechanisms are the correct mitigation class.

**Verify note:** Source verified. arxiv 2507.11538 (IFScale) is real and accessible. Omission-to-modification ratios at 500 instructions confirmed: llama-4-scout 34.88, llama-4-maverick 26.02, claude-3.5-haiku 31.69. The claim states llama-4-maverick and claude-3.5-haiku 'consistently 20-30+' — claude-3.5-haiku is actually 31.69 (slightly above 30) and llama-4-maverick is 26.02, so the '20-30+' characterization is roughly accurate but slightly imprecise for haiku. The claim that reasoning models (o3, o4-mini) 'maintain lower O:M ratios' is confirmed: o3 6.27, o4-mini 6.85 vs. 20-35x for non-reasoning models. The mechanism claim (wholesale dropping rather than degraded execution) is directly supported. The 'ratios of 20-35x for most models' characterization is accurate given the range observed. The scope limitation to non-reasoning models is correctly flagged.

---

### [key: three-degradation-curves-by-model-type]
- evidence: empirical
- confidence: high
- group: multi-task-omission-rates
- sources: https://arxiv.org/html/2507.11538v1

**Claim:** IFScale (2025) identifies three distinct instruction-density degradation curves across model families: (1) threshold decay — near-perfect until a critical density then rapid collapse (gemini-2.5-pro, o3); (2) linear decay — steady predictable decline across the spectrum (gpt-4.1, claude-3.7-sonnet); (3) exponential decay — rapid early degradation stabilizing at 7-15% accuracy floors (claude-3.5-haiku, llama-4-scout). Best performer (gemini-2.5-pro) still only achieves 68% accuracy at 500 instructions. Mechanism: model size, RLHF depth, and chain-of-thought reasoning capacity determine curve shape. Scope: tested on a single business-report domain; generalization to multi-domain multi-task kits is unverified but curves likely hold directionally. Kit-maker implication: model selection determines whether the kit hits a hard floor (exponential) or degrades gracefully (linear/threshold); never assume flagship models are immune.

**Verify note:** Source verified. Three curve types confirmed: (1) threshold decay — gemini-2.5-pro and o3 confirmed; (2) linear decay — gpt-4.1 and claude-3.7-sonnet confirmed; (3) exponential decay — llama-4-scout and claude-3.5-haiku confirmed. The claim states claude-3.5-haiku and llama-4-scout stabilize at '7-15% accuracy floors' — the source confirms 'rapid early degradation followed by stabilization at low floors' but the specific 7-15% range was not confirmed in the fetched content (floor values not specified in the excerpt). The claim that 'best performer (gemini-2.5-pro) still only achieves 68% accuracy at 500 instructions' was not confirmed or denied in the fetched content — this specific number was not retrieved. The mechanism explanation (model size, RLHF depth, chain-of-thought) is a plausible but speculative interpretation; the paper likely attributes it to reasoning capacity, not necessarily all three factors named. Single-domain scope caveat is correctly flagged.

---

### [key: primacy-bias-peaks-at-medium-density]
- evidence: empirical
- confidence: high
- group: position-effects
- sources: https://arxiv.org/html/2507.11538v1, https://cbarkinozer.medium.com/how-many-instructions-can-llms-follow-at-once-e17e3d14f185

**Claim:** IFScale (2025) finds a non-monotonic primacy effect: at low instruction densities (10-100), positional bias is near 1.0 (minimal). It peaks at medium densities (150-200 instructions) where models begin strategically prioritizing earlier instructions. At extreme densities (300+), the primacy ratio collapses back toward 1.0-1.5, indicating uniform failure rather than selective prioritization. Final-third instructions are consistently more violated than early-third instructions at medium densities. Mechanism: as cognitive load builds, models first attempt a triage strategy (favor early instructions), then lose even that capacity and fail uniformly. Scope: instruction-list ordering experiments; does not test semantic/positional interaction in prose-embedded tasks. Kit-maker implication: in a multi-task prompt with 5-20 tasks, instructions given LAST are most at risk of dropout; critical tasks should be positioned first or repeated at the end as a salience anchor.

**Verify note:** Both sources verified. The arxiv 2507.11538 HTML and the Medium article both confirm the non-monotonic primacy effect pattern: minimal at low densities, peak at 150-200 instructions, collapse toward uniform failure at 300+. The claim states 'primacy ratio collapses back toward 1.0-1.5' at 300+ — the source confirms ratios 'narrow toward 1.0-1.5' at extreme densities. The claim's mechanism (triage strategy first, then uniform failure) is confirmed by the source's characterization of 'selective attention mechanisms' giving way to 'uniform failure.' The kit implication (last instructions most at risk at medium densities; recommend first or repeated at end) is a reasonable extension. The Medium article is a secondary source summarizing the IFScale paper, not an independent replication — the claim correctly cites it alongside the primary source but the Medium article does not add independent verification. The claim that 'at low instruction densities (10-100), positional bias is near 1.0' is confirmed.

---

### [key: terminal-constraints-most-vulnerable]
- evidence: empirical
- confidence: medium
- group: position-effects
- sources: https://arxiv.org/pdf/2603.23530

**Claim:** Prospective memory failure study (arxiv 2603.23530, 8,000+ prompts across 3 model families) found that terminal constraints — instructions requiring an action at the boundary of the response (e.g., 'end with a summary', 'append a disclaimer') — experience the steepest compliance drops under concurrent task load, with up to 50% drop in terminal constraint compliance. Avoidance constraints (do-not-do instructions) remained comparatively robust. Bidirectional interference was also measured: formatting constraints caused one model's GSM8K math accuracy to fall from 93% to 27%. Mechanism: terminal constraints require the model to hold an intention across the full generation span — the prospective memory load increases with output length. Scope: tested on formatting + math task combinations; behavior generalizes to any constraint requiring deferred execution. Kit-maker implication: never put critical output requirements (format, sign-off, completeness checklist) at the start of a long system prompt; repeat them at the point of expected execution or use a trailing reminder.

**Verify note:** Source exists and key statistics are confirmed from the arxiv abstract page (not PDF): 8,000+ prompts across 3 model families confirmed; terminal constraint compliance drops 'up to 50%' confirmed; avoidance constraints more robust confirmed; GSM8K drop from 93% to 27% confirmed. However, the claim attributes the GSM8K drop to 'one model' — the HTML source attributes this specifically to o4-mini, which the claim does not name. The claim states 'formatting constraints caused one model's GSM8K math accuracy to fall from 93% to 27%' — this is accurate but the source specifies it as a 'single-GSM8K, task only' baseline comparison with a formatting constraint added. The claim's statement that 'avoidance constraints remained comparatively robust' is confirmed. The mechanism explanation (prospective memory load increases with output length) is the paper's core framework and is confirmed. The paper is dated 2603.23530 which suggests March 2026 — this is after the assistant's August 2025 knowledge cutoff, so this is a recent paper. The claim does not extrapolate beyond what the source supports. Confidence reduced to medium because the PDF was inaccessible for full verification and key specific numbers (50% drop, 90-100% recovery) were confirmed only via the abstract/HTML version.

---

### [key: salience-enhanced-prompt-restores-compliance]
- evidence: empirical
- confidence: medium
- group: mitigations
- sources: https://arxiv.org/pdf/2603.23530

**Claim:** The prospective memory paper (arxiv 2603.23530) found that a 'salience-enhanced format' — combining explicit instruction framing with a trailing reminder of the constraint — recovered compliance to 90-100% in many settings where baseline concurrent-task compliance had dropped 2-21%. Joint compliance under stacked constraints (multiple formatting + task requirements simultaneously) fell below 50% for at least one model without intervention. Mechanism: the trailing reminder re-activates the constraint's salience at the point where the model must execute it, reducing prospective memory load. Scope: laboratory-style prompts; real-world multi-task kit performance will depend on prompt structure quality. Kit-maker implication: kit templates should encode a 'commitment echo' — a brief restatement of all pending tasks at the bottom of the prompt, immediately before the generation trigger.

**Verify note:** Source confirmed for the key statistics: salience-enhanced format recovering compliance to '90-100%' is confirmed by the HTML source (stated as 'recovers compliance to 90–100% across all models and tasks'). The claim that joint compliance 'fell below 50% for at least one model' is confirmed — the HTML source states one model retained 'only 32.5%' under five simultaneous constraints, which is below 50%. However, the claim states 'fell below 50% for at least one model without intervention' — 32.5% is well below 50%, making the claim directionally accurate but understating the severity. The baseline drops of 2-21% are confirmed. The mechanism (trailing reminder re-activates constraint salience at execution point) is a reasonable characterization of the paper's prospective memory framework. The claim does not overstate the source. Confidence medium for same reason as above: PDF inaccessible, key numbers confirmed via abstract/HTML only.

---

### [key: multi-task-prompting-degrades-f1-across-nlp-tasks]
- evidence: empirical
- confidence: low
- group: multi-task-omission-rates
- sources: https://www.mdpi.com/2079-9292/14/21/4349

**Claim:** An empirical study across 6 LLMs and 6 NLP task types (MDPI Electronics, 2025) found an average F1 performance drop of 2.72% when switching from single-task to multi-task instruction prompting, with Named Entity Recognition (NER) dropping 2.77%, Textual Entailment (TE) 5.64%, and Utterance Classification (UC) 3.31%. The study used an incremental multitask prompting framework to isolate additive effects. Mechanism: increased instruction complexity creates interference between task-specific representations in the shared forward pass. Scope: these are relative drops for fine-tuned instruction-following models; zero-shot multi-task prompting shows larger drops. Kit-maker implication: at modest task counts (2-5), degradation is manageable but non-zero; task interference is real even before dropout; tasks with overlapping output formats (classification + extraction) are highest-risk for interference.

**Verify note:** The MDPI source returned HTTP 403 Forbidden and could not be accessed for independent verification. The specific statistics cited (average F1 drop of 2.72%, NER 2.77%, TE 5.64%, UC 3.31%, 6 LLMs, 6 NLP task types, 'incremental multitask prompting framework') cannot be confirmed from the source. The paper reference (MDPI Electronics 2025, volume 14, issue 21, article 4349) is structurally plausible for a 2025 paper, but without source access, none of the specific numbers can be verified. The mechanism claim (shared forward pass interference) is a standard interpretation but is not source-confirmed. The kit implication about 2-5 task degradation being manageable is an extrapolation beyond what a single study could establish. Verdict: the source is inaccessible for verification; the claim may be accurate but cannot be confirmed. The low confidence reflects inability to verify, not evidence of inaccuracy.

---

### [key: multi-agent-decomposition-completeness-15pct-gap]
- evidence: empirical
- confidence: high
- group: mitigations
- sources: https://arxiv.org/html/2410.02189v2

**Claim:** Agent-Oriented Planning (AOP) paper (arxiv 2410.02189) found that in naive meta-agent task decomposition, more than 15% of user queries exhibited completeness failures — sub-tasks were emitted that failed to collectively cover all elements of the original user query. A 'detector' component that extracted key elements from the original query and matched them against sub-task coverage raised end-to-end accuracy from 36.6% to 43.7% (a 7.1pp gain). Mechanism: information fragmentation during decomposition — sub-tasks lack pronouns, numbers, or contextual references needed for resolution; granularity misalignment causes entire requirement branches to be silently dropped. Scope: multi-agent decomposition setting; analogous to multi-task completion in single-agent kits. Kit-maker implication: structured decomposition with explicit completeness verification (enumerate requirements, check coverage) is a measurable intervention that recovers ~7pp of task completion.

**Verify note:** All core claims verified from arxiv.org/html/2410.02189v2. The paper explicitly states 'more than 15% of user queries still exhibit such issues during decomposition in our initial experiments.' The detector component extracting key elements and matching against sub-task coverage is confirmed. The ablation showing accuracy improvement from 36.6% to 43.7% (7.1pp) when the detector is present is confirmed — the paper frames it as removing the detector reduces from 43.7% to 36.6%. Information fragmentation and granularity misalignment mechanisms are described, with a concrete example of losing '100 kg copper' constraint. One extrapolation: the claim says mechanisms include 'pronoun/number/context loss' — the paper illustrates with a number (100 kg) but does not explicitly enumerate pronouns as a category. The broader mechanism framing in the claim is a paraphrase, not a direct category from the paper. Scope extrapolation to 'single-agent kits' is the claimant's inference, not stated in the paper.

---

### [key: multi-agent-system-design-failure-rate]
- evidence: empirical
- confidence: high
- group: multi-task-omission-rates
- sources: https://arxiv.org/html/2503.13657v3

**Claim:** MAST taxonomy (arxiv 2503.13657) analyzed multi-agent system failures and found that FM-1.1 (Disobey task specification — agent fails to adhere to specified task constraints) accounts for 11.8% of all documented failures. Root cause is attributed to system design flaws in agent role/workflow definitions rather than base model capability. Improving agent role specifications alone yielded a +9.4% success rate increase in the ChatDev case study using the same underlying model. Mechanism: ambiguous or incomplete role instructions allow agents to reinterpret task scope; no structural forcing function ensures coverage. Scope: applies to orchestrated multi-agent systems; single-agent kit with complex multi-task prompt is the degenerate single-agent case. Kit-maker implication: structural role/task specification quality (not model capability) is the primary lever for reducing task omission in agentic kits; investing in task-specification templates outperforms model upgrades for this failure mode.

**Verify note:** All three core numerical claims verified from arxiv.org/html/2503.13657v3. FM-1.1 'Disobey task specification' at 11.8% of failures is confirmed with direct quote. Root cause attributed to system design rather than base model capability is confirmed via 'Insight 1' and explicit text: 'failures stem from the MAS's design for interpreting specifications.' The +9.4% success rate increase for ChatDev using the same underlying model (GPT-4o) through improved role specifications is directly quoted. Minor extrapolation: the claim's framing of 'no structural forcing function ensures coverage' as the mechanism is the claimant's interpretation — the paper attributes it to ambiguous role definitions but does not use that exact framing. The kit-maker implication is a reasonable inference, not from the paper.

---

### [key: lost-in-middle-u-shape-from-dual-memory-demands]
- evidence: empirical
- confidence: medium
- group: position-effects
- sources: https://arxiv.org/html/2510.10276v1, https://www.morphllm.com/lost-in-the-middle-llm

**Claim:** Liu et al. (2024) and follow-up mechanistic work (arxiv 2510.10276) established the 'lost-in-the-middle' U-shaped attention pattern: 30%+ accuracy drop on multi-document QA when the relevant document moved from position 1 to position 10 in a 20-document context. The mechanistic paper traced this to joint training on both long-term and short-term memory demands: recency bias aligns with short-term demands (RoPE positional decay), primacy bias emerges from attention sinks at initial tokens (causal masking), and the middle receives inadequate attention from both mechanisms. Critically, larger models showed reduced or eliminated U-shaped curves. Scope: demonstrated on recall and QA tasks; IFScale (2025) found no consistent middle-position deficit in pure instruction-list following, suggesting the effect is domain-specific (retrieval vs. compliance). Kit-maker implication: information placed in the middle of a long system prompt is most at risk of being ignored; critical task requirements should be placed at start or end, and very long kit prompts should be restructured to avoid burying tasks in the middle.

**Verify note:** The U-shaped pattern and mechanistic work (arxiv 2510.10276) are real, but two specific claims are not supported or are overstated. (1) The '30%+ accuracy drop when relevant document moved from position 1 to position 10 in a 20-document context' is NOT reported in arxiv 2510.10276 — that paper uses 64-item list recall, not a 20-document QA setup. That specific figure appears to originate from the original Liu et al. 2023 paper (arxiv 2307.03172), not 2510.10276. (2) 'RoPE positional decay as mechanism for recency bias' is NOT stated in 2510.10276 — the paper explicitly does not discuss RoPE as the mechanism, though it references rotary-embedding rescaling as a mitigation. (3) The 'joint training on long-term and short-term memory demands' framing is the claimant's synthesis across the two sources — 2510.10276 does trace primacy to attention sinks and recency to short-term task behavior, but the exact dual-training framing is interpretive. (4) Larger models showing reduced U-shape is confirmed. (5) IFScale finding no consistent middle-position deficit is not verifiable from the paper — IFScale (2507.11538) does not specifically test or report on middle-position effects. The claim conflates 2510.10276 mechanistic findings with 2307.03172 behavioral findings, and the 30%/20-document figures are misattributed to the wrong paper.

---

### [key: attention-sink-asymmetry-drives-primacy]
- evidence: empirical
- confidence: high
- group: position-effects
- sources: https://arxiv.org/html/2510.10276v1

**Claim:** Mechanistic attention analysis (arxiv 2510.10276) found that first-token disruption causes globally distributed performance degradation across the entire context, while disrupting non-initial positions causes only local performance degradation at those specific positions. This asymmetry indicates attention sinks at initial tokens are a global retrieval mechanism, not just a local primacy bias. Evidence: eliminating attention sinks eliminated primacy effects on long-term tasks but left short-term tasks unaffected; T5 encoder-decoders (no causal masking) lack primacy effects entirely; RNN seq2seq models exhibit comparable primacy to GPT-2. Scope: confirmed across GPT-2 Small/Large and Llama-3.2 1B; tested in synthetic memory paradigms. Kit-maker implication: the very first tokens of a system prompt function as a 'retrieval key' for the entire context — what appears first shapes what gets executed; kit templates should open with a compact task-enumeration header rather than preamble prose.

**Verify note:** All specific claims verified from arxiv.org/html/2510.10276v1. First-token disruption causing globally distributed degradation while non-initial positions cause only local degradation is confirmed ('only when attention is disrupted on the first token do we see a negative impact on recall that extends across the entirety of the input sequence'). Eliminating attention sinks eliminating primacy on long-term tasks is confirmed. T5 lacking primacy effects is confirmed ('T5 lacks the primacy effect, with about equal probability of initiating recall from anywhere'). RNN seq2seq showing comparable primacy to GPT-2 is confirmed ('autoregressive RNN-based seq2seq model exhibits strong primacy effects with near-perfect recall near the beginning'). Experiments on GPT-2 Small/Large and Llama-3.2 1B are confirmed. One gap: the claim says 'eliminating attention sinks eliminated primacy effects on long-term tasks but left short-term tasks unaffected' — the paper confirms the long-term finding but the symmetric claim about short-term tasks being 'unaffected' needs direct quote not retrieved; the paper states attention sinks are for long-term memory demands, which implies this, but it is partially inferred. Scope is narrow: GPT-2 and Llama-3.2 1B only, synthetic list-recall paradigm.

---

### [key: memory-error-propagation-cascades-across-tasks]
- evidence: empirical
- confidence: medium
- group: sequential-task-interference
- sources: https://arxiv.org/html/2505.16067v2

**Claim:** Memory management study (arxiv 2505.16067) found that LLM agents display an 'experience-following property': when retrieved memory records contain errors, similar future tasks inherit those errors with near-perfect correlation (r~1 in synthetic regression settings). Indiscriminate memory storage (add-all strategy) propagates errors and degrades performance over sequential task batches. Utility-based and retrieval-history-based deletion strategies yielded up to 10% performance gains over naive strategies. Mechanism: high input-memory similarity triggers high output similarity regardless of correctness — agents do not independently re-derive answers when memory is present. Scope: multi-session agentic settings with explicit memory stores; less directly applicable to single-session in-context multi-task prompting. Kit-maker implication: in kits with memory/context accumulation across turns, a faulty early task output will systematically corrupt later tasks on related inputs; memory should be validated before storage, not just on retrieval.

**Verify note:** Core claims are largely confirmed but the '10% performance gains' figure is imprecise. The experience-following property with Pearson r≈1 in synthetic regression (RegAgent) is explicitly confirmed. Error propagation from indiscriminate add-all strategy is confirmed with concrete numbers (RegAgent drops from 67.53% to 55.48% — a 12pp absolute drop with add-all vs fixed memory). The 'up to 10% performance gains' from deletion strategies is not directly stated as such in the paper — the best documented gain is EHRAgent going from 38.67% to 42.06% with history-based deletion, which is ~3.4pp absolute or ~9% relative gain. The claim states absolute percentage points implicitly ('up to 10% performance gains') which could be read as relative gain, making it a borderline representation. For AgentDriver the gain is negligible (~0.8pp). The claim therefore overstates generalizability of the 10% figure across agents. The scope limitation note in the claim (multi-session settings, less applicable to single-session) is accurate and appropriately caveated.

---

### [key: instruction-boosting-recovers-7pt-at-scale]
- evidence: empirical
- confidence: high
- group: multi-task-omission-rates
- sources: https://arxiv.org/pdf/2510.14842

**Claim:** ScaledIF benchmark (arxiv 2510.14842) evaluated instruction following with up to 10 simultaneous instructions and found compliance degrades as instruction count grows. An 'Instruction Boosting' training intervention improved the instruction following rate by up to 7 percentage points at 2 instructions and up to 4 percentage points at 10 instructions. IFEval and similar benchmarks confirm a clear positive correlation between model parameter count and instruction-following performance. Mechanism: more instructions compete for a fixed compliance budget in the model's generation; larger models have larger effective compliance budgets. Scope: 2-10 instruction range, not the extreme densities tested in IFScale; compliance degradation is real but modest in this low-count regime. Kit-maker implication: for kits targeting 2-10 concurrent tasks (the practical range), task dropout is measurable but recoverable through instruction formatting; the 500-instruction cliff is not the relevant operating regime.

**Verify note:** The two core numerical claims are verified from the paper abstract: 'Instruction Boosting improves the instruction following rate by up to 7 points for two instructions and up to 4 points for ten instructions.' Compliance degradation with instruction count is confirmed. The claim about 'positive correlation between model parameter count and instruction-following performance' from IFEval benchmarks is not confirmed in the paper content accessed — the abstract does not state this and the paper (Boosting Instruction Following at Scale) is about a training intervention, not a parameter-count correlation study. IFEval results mentioning parameter-count correlation are from a separate literature and are attributed to this paper without verification. The core Instruction Boosting numbers are accurate; the parameter-count correlation claim is an unverified addition.

---

### [key: reasoning-models-attempt-modification-not-dropout]
- evidence: empirical
- confidence: medium
- group: model-capability-differences
- sources: https://arxiv.org/html/2507.11538v1

**Claim:** IFScale (2025) found that reasoning models (o3, o4-mini) maintain significantly lower omission-to-modification ratios compared to non-reasoning models under high instruction density — they attempt partial satisfaction (modification) rather than complete instruction abandonment (omission). gemini-2.5-pro uniquely decreases its O:M ratio as density increases, becoming more modification-oriented as load grows. Mechanism: chain-of-thought reasoning enables models to explicitly plan instruction coverage before generation, reducing wholesale abandonment. Scope: tested on instruction-dense single-prompt scenarios; reasoning token cost at 500 instructions is substantial. Kit-maker implication: for kits requiring high instruction compliance, reasoning models are categorically different from standard models — omission vs. modification failure mode distinction is design-relevant; CoT-enabling prompts (even without frontier reasoning models) may shift non-reasoning models toward modification behavior.

**Verify note:** The descriptive findings about O:M ratios are confirmed from arxiv.org/html/2507.11538v1. The paper confirms o3 and o4-mini maintain lower O:M ratios at high densities. Gemini-2.5-pro uniquely decreasing its O:M ratio as density increases is explicitly confirmed. However, the mechanistic claim — 'chain-of-thought reasoning enables models to explicitly plan instruction coverage before generation, reducing wholesale abandonment' — is NOT stated in the paper. The paper observes the pattern descriptively but 'offers no causal mechanism' per the verification. This is the claimant's inference about why reasoning models show this behavior, not a finding from the paper. The IFScale claim about 'no consistent middle-position deficit in pure instruction-list following' also cannot be verified — the paper analyzes primacy bias (early vs. late) but does not specifically compare middle-position performance in the way claimed. The kit-maker implication that CoT-enabling prompts 'may shift non-reasoning models toward modification behavior' is entirely speculative and not from the paper.

---

### [key: joint-compliance-below-50pct-with-stacked-constraints]
- evidence: empirical
- confidence: low
- group: multi-task-omission-rates
- sources: https://arxiv.org/pdf/2603.23530

**Claim:** Prospective memory study (arxiv 2603.23530) found that when multiple constraints are stacked (e.g., formatting requirement + task instruction + terminal constraint simultaneously), joint compliance — the rate at which ALL constraints are satisfied together — falls below 50% for at least one tested model even at modest constraint counts. This represents a non-linear failure: each individual constraint may have >80% compliance, but joint compliance collapses due to interference. Mechanism: each additional active constraint adds prospective memory load; the joint probability is sub-multiplicative due to non-independence (satisfying one constraint makes another harder). Scope: formatting-plus-task combinations; precise threshold of 'how many constraints' varies by model. Kit-maker implication: kit design should minimize simultaneous constraint count per generation turn; decompose into sequential steps rather than single mega-prompts to keep per-turn constraint count low.

**Verify note:** The paper arxiv 2603.23530 exists (confirmed, it is a March 2026 paper titled 'Did You Forget What I Asked? Prospective Memory Failures in Large Language Models'). The general thrust — joint compliance collapsing when multiple constraints are stacked, prospective memory framing, compliance drops of 2-21% under concurrent task load — appears consistent with the abstract. However, the specific numerical claims (joint compliance below 50% for at least one model, individual constraints at >80% with collapsed joint compliance) were NOT verifiable from the paper content accessed — the WebFetch returned what appeared to be an AI-generated summary rather than direct quotes from the paper text. The paper is a March 2026 preprint (post knowledge-cutoff for the model), making independent verification by the model itself impossible. The claim cites an arxiv PDF which returned binary content. Given that the specific threshold claims (50%, >80%) appear in the AI-generated WebFetch summary rather than as direct quotes, and the paper is very recent, the confidence is low — the directional claim may be correct but the specific numbers are unverified from primary source text.

---

## Null results
- No empirical studies found specifically measuring task omission by semantic position (first-mentioned vs last-mentioned task in prose-embedded multi-task requests, as opposed to instruction-list position)
- No direct empirical measurement of dropout rate for specific task types (e.g., do formatting tasks drop more than content tasks in a combined request) in real-world agent logs
- No published benchmark directly measuring the Memento effect (PDF was unreadable; the term appears in search results but the paper content was inaccessible)
- No empirical data on dropout rate differences between tasks given as a numbered list vs. embedded in prose
- Orchestrated multi-agent accuracy divergence at batch size >10 paper (medrxiv) returned 403 — exact threshold number unconfirmed

## New angles surfaced
- Explicit task enumeration formats (numbered lists vs prose vs XML tags) as instruction compliance interventions — any empirical comparison of compliance rates across prompt structural formats
- Commitment-and-verify loop patterns: empirical comparison of ask-model-to-repeat-tasks-back vs just-proceed strategies for multi-task prompts
- CoT elicitation without frontier reasoning models — does a 'think step by step about all tasks before answering' instruction shift non-reasoning models from omission to modification behavior empirically
- Hierarchical task decomposition depth vs completeness: at what decomposition depth do coverage gaps appear and what structural checks recover them
- Benchmark gap: no published benchmark specifically measures single-agent multi-task dropout in the 2-15 concurrent task range with real diverse task types (the practical kit-maker operating range) — an opportunity to generate synthetic evaluation data

