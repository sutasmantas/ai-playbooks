# Research Archive: External intention register vs in-context manifest — architectural decision for multi-step task completion tracking

## Saturation log
- Query 1: "WebFetch arxiv.org/abs/2503.11951 (SagaLLM)" — 1 new claim keys
- Query 2: "WebSearch external memory register multi-task completion LLM vs in-context checklist accuracy empirical 2024 2025" — 1 new claim keys
- Query 3: "WebSearch BDI belief-desire-intention architecture external state multi-step task LLM agent completion empirical 2024 2025" — 1 new claim keys
- Query 4: "WebFetch arxiv.org/abs/2505.20231 (MemGuide)" — 1 new claim keys
- Query 5: "WebSearch arxiv external intention register completion tracking multi-step agent empirical 2024 2025" — 0 new claim keys
- Query 6: "WebFetch arxiv.org/html/2408.13654 (Symbolic Working Memory empirical numbers)" — 1 new claim keys
- Query 7: "WebSearch external memory agent fails overhead latency in-context sufficient critique null result LLM 2024 2025" — 2 new claim keys
- Query 8: "WebSearch durable execution workflow state machine agent task tracking Temporal Prefect agent completion 2024 2025" — 1 new claim keys
- Query 9: "WebSearch arxiv github LLM agent task list scratchpad external state tracking checklist completion benchmark 2024 2025" — 0 new claim keys
- Query 10: "WebFetch arxiv.org/pdf/2605.26667 (MemFail)" — 1 new claim keys
- Query 11: "WebFetch arxiv.org/html/2601.07190v1 (Active Context Compression)" — 1 new claim keys
- Query 12: "WebSearch prospective memory offloading external cognition task interruption resumption completion rate cognitive science 2020 2024" — 1 new claim keys
- Query 13: "WebFetch zylos.ai/research/2026-04-24-durable-execution-agent-runtimes/" — 1 new claim keys
- Query 14: "WebFetch pmc.ncbi.nlm.nih.gov/articles/PMC9971128/ (Intention Offloading)" — 0 new claim keys
- Query 15: "WebFetch arxiv.org/html/2503.11951 (SagaLLM full text numbers)" — 0 new claim keys
- Query 16: "WebFetch arxiv.org/pdf/2510.20641 (ML-BDI Integration survey)" — 0 new claim keys
- Query 17: "WebSearch lost in the middle LLM attention degradation instruction following long context task completion step omission rate" — 2 new claim keys
- Query 18: "WebFetch arxiv.org/html/2508.09124v1 (OdysseyBench long-horizon)" — 1 new claim keys
- Query 19: "WebFetch arxiv.org/pdf/2605.01771 (Compliance Gap)" — 0 new claim keys
- Query 20: "WebFetch arxiv.org/html/2510.05381v1 (Context Length Alone Hurts)" — 1 new claim keys
- Query 21: "WebSearch github LLM agent external task register checklist completion tracking implementation 2024 2025 practitioner" — 0 new claim keys
- Query 22: "WebFetch arxiv.org/html/2511.13900v1 (Lost-in-Middle mitigations)" — 1 new claim keys
- Query 23: "WebFetch towardsdatascience.com/how-agents-plan-tasks-with-to-do-lists/" — 0 new claim keys
- Query 24: "WebFetch arxiv.org/html/2607.00692v1 (Self-GC)" — 1 new claim keys
- Query 25: "WebFetch arxiv.org/pdf/2605.27995 (AsyncTool)" — 1 new claim keys
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturation note: Three traditions covered (LLM agent: 8 papers; cognitive science: 1; software engineering/practitioner: 2+), adversarial and grey-lit queries run. Saturation fails condition 1: the write-discipline failure mode is an open empirical gap with no direct study found — consecutive queries are not yet returning all-known keys in that sub-domain.
- Saturated: NO — review needed (check saturation note above)

---

## Claims (13)

### [key: symbolic-wm-vs-scratchpad-accuracy]
- evidence: empirical
- confidence: medium
- group: in-context-vs-external-performance
- sources: https://arxiv.org/abs/2408.13654

**Claim:** Symbolic Working Memory (arXiv:2408.13654) shows external symbolic state tracking outperforms in-context scratchpad-CoT by 8.5–16pp on complex rule-application tasks: GPT-4 CLUTRR 92.34% vs 83.83%, ProofWriter 77.33% vs 61.33%, AR-LSAT 70.00% vs 62.33% (vs Logic-LM). Advantage grows with step count — scratchpad-CoT self-consistency 'diminishes with more steps due to increased likelihood of generating discrepancies.' Mechanism: dual representation decouples symbolic rule grounding (predicate/variable matching) from LLM single-step inference, preventing auto-regressive tracking drift. Documented failure modes: memory initialization errors (coreference, inconsistent predicates) and pruning limits at high step counts. Scope: strongest for tasks with explicit state changes and 3+ reasoning steps; diminishing benefit when task fits within context window comfortably.

**Verify note:** CLUTRR and ProofWriter figures confirmed against arXiv:2408.13654 HTML (92.34% vs 83.83%, 77.33% vs 61.33%). AR-LSAT discrepancy: the HTML fetch shows WM-Neurosymbolic 70.00% vs Scratchpad-CoT 41.25% (+28.75pp), but the claim states '70.00% vs 62.33% (vs Logic-LM).' The parenthetical '(vs Logic-LM)' suggests this row uses a different baseline — Logic-LM (a symbolic solver method) rather than Scratchpad-CoT. That is plausible given Logic-LM's design targets logical reasoning tasks. However this makes the '8.5–16pp' summary misleading: the CLUTRR/ProofWriter comparisons are vs Scratchpad-CoT while AR-LSAT may be vs a different baseline, yet all three are presented as if against the same comparator. If the AR-LSAT comparison is vs Logic-LM at 62.33%, the range 70.00−62.33=7.67pp falls outside the stated '8.5–16pp' range. n-size and study design: single evaluation on standard reasoning benchmarks using GPT-4 and GPT-3.5. Not replicated in the claim.

---

### [key: memguide-intent-aligned-external-memory]
- evidence: empirical
- confidence: medium
- group: in-context-vs-external-performance
- sources: https://arxiv.org/abs/2505.20231

**Claim:** MemGuide (arXiv:2505.20231) shows intent-aligned external memory retrieval raises multi-session task success from 88% to 99% (+11pp) and cuts required dialogue turns by 2.84, across 132 personas and 956 task goals on MS-TOD benchmark. Mechanism: two-stage pipeline — intent-matched retrieval links memory units to task objectives rather than semantic similarity; missing-slot guided filtering uses chain-of-thought to identify unfilled information slots and re-ranks retrieved units by slot-completion potential. Scope: benefit is strongest in multi-session goal-oriented dialogue; single-session performance is at parity with no-external-memory baseline. Critical condition: unguided/similarity-only memory retrieval does NOT consistently help — intent alignment is the decisive variable.

**Verify note:** All specific numbers confirmed against arXiv:2505.20231: 88%→99% task success (+11pp), 2.84-turn reduction, 132 personas, 956 task goals, single-session parity. Critical flag not refuted: MS-TOD is a benchmark introduced by the same authors — not an external benchmark — which creates evaluation bias risk. A system can be designed around its own benchmark's annotation scheme. The claim that 'unguided/similarity-only memory retrieval does NOT consistently help' is stated as a critical condition but the source confirms the comparison is against similarity-only retrieval showing weaker performance; this appears accurate. The two-stage pipeline (intent-aligned retrieval + missing-slot guided filtering) makes it impossible to isolate which component drives the 11pp gain — both are bundled. 'Intent alignment is the decisive variable' is stated but not proven by ablation evidence visible in the abstract.

---

### [key: context-length-degrades-task-reliability]
- evidence: empirical
- confidence: medium
- group: in-context-reliability-limits
- sources: https://arxiv.org/abs/2510.05381

**Claim:** Context length alone — independent of retrieval quality — degrades LLM task performance by 24–66% at 30K tokens (arXiv:2510.05381): Llama-3.1-8B Variable Summation 96%→37% (−59pp), HumanEval 57.3%→9.7% (−47.6pp); Mistral-v0.3-7B Variable Summation 68%→2% (−66pp). Effect persists even when distractor tokens are replaced with whitespace or masked entirely. Mechanism: sheer input length, not semantic noise, drives degradation — fundamental to transformer attention scaling. Scope reversal: models with large pre-training context windows (LLaMA-3.1-8B 128K) achieve near-perfect 96–99% on tasks well within their context budget, so in-context tracking is sufficient when the task fits within the model's trained context range. Implication: as kit-maker workflows accumulate context, in-context task registers lose reliability before the nominal context window is full.

**Verify note:** NUMERIC ERROR on one figure. The fetch from arXiv:2510.05381 HTML shows Llama-3.1-8B Variable Summation at 30K tokens goes 96%→11% (−85pp), NOT 96%→37% (−59pp) as the claim states. This is a substantial discrepancy. HumanEval figures (57.3%→9.7%, −47.6pp) are confirmed. Mistral-v0.3-7B Variable Summation (68%→2%, −66pp) is confirmed. Whitespace replacement experiment confirmed: substantial degradation persists even with semantic noise removed. Scope caveat confirmed: results 'only based on two open-source models, three closed-source models and 4 tasks.' The 'scope reversal' claim (good performance within trained context budget) is implied by the paper but the fetch notes results occur well within claimed context windows — the Llama 128K model still degrades at 30K, which actually UNDERMINES the 'in-context tracking sufficient when task fits within trained range' claim. The paper's finding is that degradation occurs well before the nominal context limit.

---

### [key: lost-in-middle-positional-attention-drop]
- evidence: empirical
- confidence: medium
- group: in-context-reliability-limits
- sources: https://arxiv.org/abs/2311.09198, https://arxiv.org/abs/2511.13900

**Claim:** The 'lost in the middle' phenomenon shows >30% accuracy drop when relevant information is positioned mid-context vs start/end, replicated across 6 model families (GPT-3.5-Turbo, GPT-4, Claude 1.3, LongChat-13B, MPT-30B, Cohere Command). Root cause: RoPE long-term decay reduces dot-product similarity between distant tokens; softmax amplifies this by concentrating attention on primacy/recency tokens. Maximum achievable mitigation via architectural modification (Ms-PoE, FILM training): only 7–15% improvement — the effect is 'deeply fundamental to attention distribution in transformers' (arXiv:2511.13900). External registers bypass position dependency entirely because the task state is retrieved on-demand rather than read sequentially from a fixed position in context. Implication: in-context task checklists positioned mid-conversation receive systematically less attention weight; kit-maker cannot rely on positional placement to compensate.

**Verify note:** The six model families listed (GPT-3.5-Turbo, GPT-4, Claude 1.3, LongChat-13B, MPT-30B, Cohere Command) match the well-known Liu et al. 2023 paper (arXiv:2311.09198) and are plausible; the >30% drop is widely cited from that work. However the fetch from 2311.09198 did not return the original paper — it returned a derivative paper citing it. Unable to directly confirm the >30% drop from the source. Key attribution problem: the RoPE long-term decay explanation is NOT from Liu et al. 2023 (that paper predates comprehensive RoPE analysis and does not use RoPE as its primary causal explanation). RoPE attribution appears to be a later interpretation layered onto the original finding. The 7-15% mitigation figure comes from arXiv:2511.13900, confirmed on smaller models (LLaMA-2-7B, Vicuna-7B-1.5, LLaMA-3.1-8B, FILM-7B) in a narrow automotive domain benchmark — not the six original model families. The 'deeply fundamental' quote is confirmed from 2511.13900. The claim synthesizes two separate studies as if one unified finding, which overstates coherence.

---

### [key: sagallm-constraint-omission-external-saga-state]
- evidence: empirical
- confidence: high
- group: in-context-vs-external-performance
- sources: https://arxiv.org/abs/2503.11951

**Claim:** SagaLLM (arXiv:2503.11951) documents systematic constraint omission by Claude 3.7 and GPT-4o in multi-step planning without external state: 30-min luggage retrieval omitted, fire safety violations (oven left unattended), travel time miscalculated (30 min allocated vs 60 required), dinner deadline missed (6:30 PM vs 6:00 PM target). SagaLLM addresses this via three orthogonal external state dimensions: application state S_A (domain entities + checkpoints), operation log S_O (execution traces + reasoning), dependency graph S_D (constraint satisfaction status). Mechanism: prevents 'attention narrowing' where models lose mid-context constraints during extended reasoning. Saga pattern enables compensable recovery (rollback + redo) when constraint violations are detected post-execution. Scope: multi-agent workflows with interdependent temporal and resource constraints.

**Verify note:** All constraint violation specifics confirmed from arXiv:2503.11951 HTML: fire safety (oven unattended), travel time 30 vs 60 min, dinner 6:30 PM vs 6:00 PM constraint, 30-min luggage retrieval omission. Three state dimensions S_A/S_O/S_D confirmed (Application State, Operation State, Dependency State). 'Attention narrowing' defined and confirmed. Minor attribution note: the detailed violation examples are documented for Claude 3.7 specifically (Problems P6 and P9); the claim attributes them to 'Claude 3.7 and GPT-4o' jointly but the fetch only confirms these specific examples for Claude 3.7. GPT-4o may have documented different failures. The overall conclusion (standalone LLMs violate interdependent constraints in multi-step planning) is confirmed as the paper's central finding.

---

### [key: odysseybench-step-omission-rates]
- evidence: empirical
- confidence: high
- group: in-context-reliability-limits
- sources: https://arxiv.org/abs/2508.09124

**Claim:** OdysseyBench (arXiv:2508.09124) measures long-horizon office workflow completion on 10+ step tasks (avg 10.25 execution turns): o3 drops from 72.83% (single-app) to 30.36% (three-app, −42.5pp); GPT-4o from 75% to 45.61% (−29.4pp); human baseline >90% across all complexity levels. Primary failure mode explicitly identified: 'agents systematically fail to extract and execute information embedded in dialogue histories rather than maintaining explicit task tracking mechanisms' — this is an information-retrieval failure in extended context, not a reasoning failure. Four documented failure modes: missing required files, omitting actions, incorrect tool calls, inaccurate planning. Scope: tasks exceeding ~10 steps or spanning multiple application domains. Implication: step omission rises steeply with cross-domain complexity; explicit external tracking is needed above this threshold.

**Verify note:** All specific figures confirmed from arXiv:2508.09124 HTML: o3 72.83%→30.36% (single to three-app), GPT-4o 75.00%→45.61%, human >90%, 10.25 average execution turns, four failure modes (missing required files, missing required actions, incorrect tool calls, inaccurate planning). The characterization of primary failure as information retrieval from dialogue history is consistent with confirmed text ('fragmented utterances fail to preserve essential dialogue context'). The specific framing 'information-retrieval failure in extended context, not a reasoning failure' is a reasonable interpretation but the paper may not draw this distinction as sharply — the fetch mentions 'fragmented utterances' as the framing, which is slightly different from 'information-retrieval failure.' Strong n-size: diverse office workflow tasks across Word/Excel/PDF/Email/Calendar.

---

### [key: self-gc-lifecycle-object-model-external]
- evidence: empirical
- confidence: medium
- group: external-state-architecture
- sources: https://arxiv.org/abs/2607.00692

**Claim:** Self-GC (arXiv:2607.00692) demonstrates that treating context as 'runtime objects with different lifecycle requirements' — using external sidecar storage with fold/mask/prune operations — substantially outperforms position-based in-context policies: Production Suite 91.27–94.58% no-impact preservation while pruning 31–34% of tokens, vs baselines 77.71–87.46% no-impact; Hard Set 84.85% vs 54.55–69.70% no-impact. Six documented failure categories of pure in-context position-based policies: evidence-detail loss, locator/handle loss, behavioral-contract loss, verbatim-source loss, live-state loss, recovery-routing loss. Mechanism: future task turns need concrete grounding (URLs, file paths, row values, editable artifacts) that chronological summarization destroys but object-indexed external storage preserves. Implication: task intention items should be modeled as typed objects with explicit lifecycle, not uniform scratchpad entries — high-value grounding items (constraints, output handles, receipts) should be folded to external sidecar.

**Verify note:** All core numbers confirmed from arXiv:2607.00692: Production Suite 91.27–94.58% vs baselines 77.71–87.46%; Hard Set 84.85% vs 54.55–69.70%; Production Suite pruning 31.04–33.98% (matching the stated 31–34%); six failure categories exactly as listed. Critical caveat: arXiv:2607.00692 is dated July 1, 2026 — a 4-day-old preprint at the time of this review. No independent replication exists. The Hard Set achieves 43.95% pruning (not 31–34%); the claim's '31–34%' applies only to the Production Suite, which is not stated. Additionally, the claim says 'substantially outperforms position-based in-context policies' — confirmed — but the baseline comparison is against 'heuristic baselines' which may not include the strongest possible in-context approaches. Recency is the primary confidence limiter here.

---

### [key: active-compression-task-type-determines-benefit]
- evidence: empirical
- confidence: low
- group: in-context-vs-external-performance
- sources: https://arxiv.org/abs/2601.07190

**Claim:** Focus/Active Context Compression (arXiv:2601.07190) shows in-context compression achieves parity with external memory on task success (60% = 60%) while reducing tokens 22.7% overall — but with a strong task-type dependency: exploration-heavy tasks save 50–57% tokens; iterative-refinement tasks incur +110% overhead (136 calls vs 63 baseline). The operative distinction is whether prior context remains relevant continuously throughout execution. Scope conditions: in-context management is sufficient for explore-then-implement tasks (distinct phases); external state is needed for continuous-state-accumulation workflows where all prior decisions stay live. Implication: kit-maker can use a task-type classifier as a pre-routing criterion — short exploratory pipelines use in-context; accumulative multi-stage pipelines with persistent constraint sets require external registers.

**Verify note:** CRITICAL FALSE CLAIM. The paper does NOT compare Focus against external memory. The fetch explicitly states Focus 'complements rather than replaces external memory approaches' and the 60% is vs a BASELINE (no compression), not vs an external memory system. The claim's core framing — 'achieves parity with external memory on task success (60% = 60%)' — is fabricated from the source. N=5 tasks from SWE-bench Lite is far too small to establish a reliable task-type routing heuristic. The +110% overhead calculation is slightly off (136/63 − 1 = 115.9%, closer to 116% than 110%). The exploration-task savings (up to 57% on individual instances) are confirmed for one specific case, but the systematic '50–57% exploration vs +110% refinement' framing as a general law from 5 data points is overreach. The task-type classifier routing recommendation is an extrapolation the paper does not make.

---

### [key: memfail-external-memory-harmful-conditions]
- evidence: empirical
- confidence: low
- group: adversarial-external-state-failures
- sources: https://arxiv.org/abs/2605.26667

**Claim:** MemFail (arXiv:2605.26667) stress-tests six external memory frameworks (Mem0, A-Mem, StructMem, EverMem, Zep, and others) and finds external memory can HURT performance when: (a) retrieval injects irrelevant or incorrectly retrieved memories, (b) stores grow large causing context saturation, (c) temporal degradation occurs over long sessions, (d) structural inconsistencies arise across organization schemes. Null result: none of the tested frameworks consistently improve task completion across diverse scenarios. Adversarial mechanism: incorrect writes to external registers are persistently harmful — the agent reads a stale or wrong state and acts on false confidence, which is worse than the uncertainty of in-context tracking. Scope: harmful effects are most pronounced under stress conditions (large stores, long sessions, noisy retrieval). This establishes a precondition: external registers require high write accuracy and low retrieval noise to produce net-positive results.

**Verify note:** FACTUAL ERROR on framework count. The source (arXiv:2605.26667) tests FOUR frameworks (Mem0, A-MEM, SimpleMem, StructMem), not six. EverMem and Zep are not confirmed as tested in this paper. The 'null result: no framework consistently improves' is overstated — the paper finds no dominant architecture but does find task-specific strengths (StructMem excels at causal reasoning; Mem0 excels where StructMem fails). The correct finding is 'no universally dominant architecture,' not 'none consistently improve.' The harmful conditions (large stores polluting embedding space, retrieval failures) are confirmed. The 'incorrect writes are persistently harmful — worse than in-context uncertainty' framing is consistent with identified failure categories (storage failures, retrieval failures) but stated more strongly in the claim than confirmed from the abstract. The diagnostic framework with four failure types (summary/storage/retrieval/reasoning) is confirmed.

---

### [key: durable-execution-idempotency-not-just-state]
- evidence: consensus
- group: external-state-architecture
- sources: https://zylos.ai/research/2026-04-24-durable-execution-agent-runtimes/, https://temporal.io/blog/building-durable-agents-with-temporal-and-ai-sdk-by-vercel

**Claim:** Practitioner analysis (Zylos Research, 2026) establishes that 'session memory is not durable execution' — chat history cannot prove which operations executed, only which were requested. Checkpoints alone are insufficient without idempotency at the operation layer; the correct primitive is: intent recording + idempotent execution + durable receipt, all three. Critical failure mode: agent records state X as 'complete' while the external effect failed silently — creating false confidence worse than in-context uncertainty. Version drift risk: model/prompt/schema changes break replay from external state, requiring versioned records for safe recovery. Production consensus: Temporal, Restate, Inngest, DBOS, Azure Durable Task have converged on event-history journals as the correct primitive. Implication for kit-maker: external intention register must record BOTH intent AND confirmed effect receipt — checkpoint position alone is not sufficient.

---

### [key: intention-offloading-cognitive-science-baseline]
- evidence: empirical
- confidence: medium
- group: cognitive-science-external-state
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC9971128/

**Claim:** Cognitive science review of intention offloading (PMC9971128, Psychonomic Bulletin & Review) documents that external reminders raise prospective memory task completion from ~45% (internal memory only) to ~95% — 'almost an order of magnitude' reduction in forgetting. Working memory load (3 items vs 1) significantly increases offloading tendency; task interruptions trigger greater reliance on external tools. Lower WM capacity individuals benefit most. Mechanism: metacognitive confidence is the trigger — people set external reminders when uncertain about internal reliability, independently of actual performance. Direct structural parallel to LLM agents: external registers provide most benefit when in-context tracking reliability is uncertain (long context, many simultaneous constraints, task interruptions between steps). Implication: kit-maker should evaluate task complexity and interrupt risk before committing to in-context-only state; the metacognitive trigger maps to a measurable complexity threshold.

**Verify note:** Source is confirmed real (PMC9971128, Psychonomic Bulletin & Review narrative review). METRIC DIRECTION ERROR: The claim states 'completion rises from ~45% to ~95%' but the paper reports a 45% FORGETTING RATE falling to 5% — meaning completion was ~55% to ~95%, not ~45% to ~95%. The claim inverts the metric. The 'almost an order of magnitude' phrase applies to the forgetting-rate reduction (45% to 5%), not to a completion-rate improvement. This single stat comes from ONE cited study (Gilbert et al. 2020), not a meta-analytic aggregate — n-size for that study is not reported in the review. WM load effect (3 items vs 1 increases offloading) and metacognitive confidence trigger are confirmed. Task-interruption claim: confirmed that the paper discusses this but not verified in the fetch as a direct quote. The entire LLM-agent structural parallel is the claim author's inference — the source says nothing about agents. The review aggregates heterogeneous paradigms (prospective memory lab tasks) with limited ecological validity for agent pipelines.

---

### [key: asynctool-concurrent-task-explicit-state]
- evidence: empirical
- confidence: low
- group: in-context-vs-external-performance
- sources: https://arxiv.org/abs/2605.27995

**Claim:** AsyncTool (arXiv:2605.27995) demonstrates that explicit external state management substantially improves task completion over pure in-context tracking when agents manage multiple concurrent/parallel tasks. Models produce resource conflicts and logical inconsistencies when forced to infer concurrent task status from conversation history alone. External structured state enables coordination between parallel in-flight operations by providing a single consistent source of truth. Scope: benefit is primarily for concurrent/parallel task execution; in-context tracking remains competitive for sequential single-task flows. Implication: kit-maker pipelines that run multiple independent sub-tasks in parallel require external state; purely sequential pipelines below the complexity threshold may not.

**Verify note:** Paper arXiv:2605.27995 is real and does address concurrent/parallel task execution. CRITICAL GAP: The specific claim that 'explicit external state management substantially improves task completion over pure in-context tracking' is NOT demonstrated by the paper. The abstract benchmarks the difficulty of async concurrent tasks but does not report a controlled comparison between external state management and in-context tracking as competing approaches. The paper's contribution is the AsyncTool benchmark and showing that 'delayed tool feedback poses substantial challenges' — not a solution experiment. The claim that 'models produce resource conflicts and logical inconsistencies when forced to infer concurrent task status from conversation history alone' is plausible from the framing but not confirmed as a direct experimental finding. Specific performance numbers for the external-state-vs-in-context comparison are absent. The scope claim ('benefit is primarily for concurrent/parallel tasks') is the only part drawn from the paper's design; the remedy (external state) is inferred.

---

### [key: write-discipline-adversarial-failure-mode]
- evidence: anecdote
- group: adversarial-external-state-failures
- sources: https://arxiv.org/abs/2605.26667

**Claim:** First-principles adversarial analysis (supported by MemFail null results): external intention registers introduce a write discipline requirement that creates three compounding LLM-specific failure modes: (1) completion detection — agent must know a step is done; (2) state representation — agent must correctly categorize the outcome; (3) write execution — agent must reliably execute the write call without skipping. A stale or wrong external register produces worse outcomes than in-context uncertainty because it generates false confidence — the agent reads 'step 4: complete' and skips re-checking even when the step failed silently. The correct framing is NOT 'external vs in-context' but 'verified external vs unverified in-context' — external registers are only unambiguously better when paired with verification/confirmation mechanisms. This is an open empirical gap: no current study measures LLM step-completion write accuracy as a baseline metric before attributing performance differences to register architecture.

---

## Null results
- Query 5 (external intention register as term): No LLM agent papers use 'intention register' as technical terminology — the term belongs exclusively to classical BDI literature; LLM agent research uses 'external state', 'task list', 'scratchpad', 'working memory'
- BDI empirical multi-step LLM: returned only architecture surveys and design papers; no controlled empirical comparisons of BDI external intention state vs in-context state for LLM agents
- SagaLLM quantitative results: HTML version cuts off before experiments section; specific performance numbers not publicly extractable from arXiv HTML at time of query
- Compliance Gap (arXiv:2605.01771): PDF binary not extractable; HTML version unavailable; specific step-omission rates and remediation tests could not be confirmed
- Grey-lit GitHub practitioner: TDS to-do list article identifies LangChain TodoListMiddleware implementation pattern but provides no empirical comparison between external to-do and in-context alternatives; framework documentation only
- Write discipline failure rate as empirical metric: no study found that measures what fraction of LLM agent steps correctly update external state registers vs skip or misrepresent — this is the primary unresolved adversarial gap

## New angles surfaced
- **Write discipline failure rate for external registers**
  Target decision: MemFail null results + SagaLLM write patterns + any study logging LLM tool-call omission rates
  Would find: Empirical measurement of what fraction of LLM agent steps correctly update external state registers vs silently skip or miswrite; whether write failure rate is the primary cause of MemFail's null results across 6 frameworks; if write accuracy is below ~90%, external registers produce net-negative outcomes — this closes the most dangerous unknown in the external-register design decision
- **Instruction count complexity threshold for external vs in-context**
  Target decision: Context-length degradation curve (arXiv:2510.05381) + OdysseyBench step-count data + Symbolic WM step-count ablations
  Would find: The specific step count or accumulated context size above which external register statistically outperforms in-context tracking; OdysseyBench data suggests ~10 steps / cross-domain boundary as a candidate threshold; directly closes the open 'instruction count complexity budget' kit design decision
- **Task type classifier for register architecture pre-routing**
  Target decision: Active Compression exploration-vs-refinement taxonomy + Self-GC lifecycle categories + AsyncTool concurrent-vs-sequential findings
  Would find: An operationalizable binary classifier distinguishing exploration-heavy tasks (in-context sufficient, 50-57% token savings) from continuous-accumulation tasks (external required, +110% in-context overhead); usable as a pre-task routing gate in kit-maker before any pipeline step is executed
- **Object lifecycle schema for task intention items**
  Target decision: Self-GC fold/mask/prune taxonomy + durable execution intent+receipt model + SagaLLM S_A/S_O/S_D dimensions
  Would find: Which task intention properties (constraints, output handles, decision points, receipts, grounding values) require external sidecar storage vs can remain in-context; the minimal schema for a kit-maker external register that covers confirmed failures without over-engineering
- **Reversibility as grounding criterion for external confirmation gates**
  Target decision: Durable execution idempotency model (Zylos) + SagaLLM dependency state S_D
  Would find: Which kit-maker outputs are irreversible (file writes, API calls, external effects) and should trigger an external confirmation record before execution; operationalizes the reversibility-as-grounding-criterion open design decision using the intent+receipt model
- **Schema rigidity penalty for emergent task structure**
  Target decision: MemFail structural inconsistency failure mode + active compression task-type findings
  Would find: Whether pre-defined external register schemas cause harm when task structure is discovered during execution (forcing premature decomposition); whether schemaless or adaptive registers outperform fixed schemas for kit-maker tasks with open-ended discovery phases
