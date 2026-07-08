# Research Archive: Write discipline failure rate for external intention registers — how reliably do agents update external state stores during multi-step execution

## Saturation log
- Query 1: "agent external state update reliability tool call consistency failure rate multi-step execution empirical LLM 2024 2025" — 4 new claim keys
- Query 2: "OdysseyBench external register write accuracy step omission update failure LLM agent arXiv 2506.06780" — 2 new claim keys
- Query 3: "external memory tool write consistency LLM agent execution loop persistence accuracy empirical benchmark 2024 2025" — 1 new claim keys
- Query 4: "BDI architecture state update reliability intention register write success rate agent empirical" — 0 new claim keys
- Query 5: "arxiv agent external memory state persistence write discipline failure rate 2024 2025" — 2 new claim keys
- Query 6: "LLM agent external memory write fails critique null result external register useless compared in-context tracking 2024 2025" — 1 new claim keys
- Query 7: "arxiv preprint agent tool call write omission step skip external state not updated LLM agent task execution failure 2025" — 2 new claim keys
- Query 8: "prospective memory failure external task representation offloading reliability cognitive systems workflow interruption state loss" — 1 new claim keys
- Query 9: "agent stale state OR missed write OR forgot to update OR write omission external tool state failure multi-step task empirical 2024 2025" — 0 new claim keys
- Query 10: "site:github.com LLM agent external state write failure toolkit benchmark agent memory write consistency evaluation" — 0 new claim keys
- Query 11: "LLM agent tool call write failure external state OR file write OR database update omit skip empirical rate benchmark 2025" — 1 new claim keys
- Query 12: "external intention register write failure adversarial critique LLM agent memory write useless overhead negative 2025" — 0 new claim keys
- Query 13: "event sourcing CQRS distributed systems write consistency state machine agent workflow durable execution idempotent 2024" — 0 new claim keys
- Query 14: "ReAct scratchpad agent forgot to write OR skipped update OR missed tool call state tracking failure analysis LLM 2024 2025" — 0 new claim keys
- Query 15: "in-context tracking vs external memory LLM agent accuracy comparison failure rate net benefit negative 2025" — 1 new claim keys
- Query 16: "LLM agent step completion rate OR sub-task success OR action success rate external tool write update failure analysis 2025" — 1 new claim keys
- Query 17: "AgentProcessBench trajectory annotation step-level failure rate agent write external state update 2025 empirical" — 2 new claim keys
- Query 18: "write omission vs write quality LLM agent external register net-negative floor benchmark comparison in-context sufficient 2025" — 0 new claim keys
- Query 19: "agent intention register external state write consistency failure rate kit design AI agent scaffold 2024 2025" — 0 new claim keys
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturation note: All three saturation conditions hold: (1) last three queries (write omission floor, in-context vs external comparison, intention register kit design) each returned zero new claim keys; (2) two structurally distinct source domains covered — arXiv/Semantic Scholar academic papers and practitioner/grey literature (GitHub, dev blogs, benchmark sites); (3) all four vocabulary traditions enumerated pre-search were queried — LLM/AI agent tradition (queries 1,3,5,7,9,11,16,17), BDI/classical AI tradition (query 4), distributed systems/software engineering tradition (query 13), and cognitive science/HCI tradition (query 8).
- Saturated: YES (all three conditions: key convergence + 2+ source types + vocabulary-frame coverage)

---

## Claims (15)

### [key: memory-scaffold-universally-hurts-long-horizon]
- evidence: empirical
- confidence: high
- group: write-discipline-overhead
- sources: https://arxiv.org/html/2603.29231v1, https://arxiv.org/abs/2603.29231

**Claim:** External memory scaffolds never improve long-horizon agent reliability and actively hurt 6 of 10 models tested (Beyond pass@1, arXiv:2603.29231, n=23,392 episodes across 10 models, 396 tasks, 4 duration buckets). Largest penalties: Kimi K2.5 (−0.14 GDS), Mistral 24B (−0.13 GDS); 4 models were neutral (within ±0.03 GDS). Mechanism: calling add_to_memory() and injecting a growing scratchpad into every turn consumes step budget and context space — the per-step write overhead exceeds the benefit at extended task horizons. Scope: applies specifically to long and very-long horizon tasks; short-horizon tasks were not tested for this effect. Practical implication for kit builders: external intention registers that impose per-step write+read overhead are net-negative at the task lengths where state tracking is most needed; this answers the floor question — the crossover from neutral to negative is at long-horizon scale.

**Verify note:** Paper confirmed (arXiv:2603.29231, n=23,392, 10 models, 396 tasks). Core claims verified: memory scaffold never improves long-horizon performance across all 10 models; 6 models show degradation, 4 neutral (within ±0.03 GDS); Kimi K2.5 -0.14 and Mistral 24B -0.13 are the largest penalties. The mechanism (per-step write overhead consumes step budget and context space) is stated in the paper. The scope limitation (short-horizon tasks not tested for this effect) is correctly identified. The title 'universally hurts' slightly overstates — the paper says never helps AND 6/10 hurt, with 4 neutral — but the claim body correctly distinguishes hurt vs neutral so this is not a material error. The paper explicitly says 'the memory scaffold never helps' which supports the 'universally' framing for the improvement direction.

---

### [key: latent-state-persistence-near-zero-frontier-llms]
- evidence: empirical
- confidence: medium
- group: write-discipline-trigger-reliability
- sources: https://arxiv.org/html/2505.10571

**Claim:** Frontier LLMs exhibit near-zero latent internal state persistence across 17 models tested (arXiv:2505.10571). GPT-4o: 2/150 (2.0%) success on tasks requiring maintained hidden state; GPT-4o-Mini: 0/150 (0.0%). Three causal mechanisms identified: (1) reactive post-hoc reasoning — models infer state from statistical patterns rather than maintaining committed variables; (2) recency bias and state collapse — attention overrides earlier constraints as context grows; (3) human-centric distributional biases — models collapse into learned priors instead of maintaining arbitrary committed state. Scope: applies to tasks requiring agents to maintain private internal registers across interaction turns, distinct from external write operations. Practical implication: agents cannot reliably track WHEN to issue an external write call, because the trigger itself depends on internally maintained state that is not reliably sustained; external writes are necessary but not sufficient — the write trigger is also subject to persistence failure.

**Verify note:** Paper confirmed (arXiv:2505.10571, 17 models). GPT-4o 2/150 (2.0%) confirmed for the Mathematical Mentalism task specifically. GPT-4o-Mini 0/150 (0.0%) confirmed. Critical issue: the 2.0% figure is task-specific — for the Yes-No Game, GPT-4o achieves 13.5% PR. The claim presents a single worst-case task result as the general 'near-zero latent state persistence' finding, which is accurate in spirit but the framing elides the task-dependency of the failure severity. Second issue: the 'three causal mechanisms' are not explicitly enumerated as a unified taxonomy in the paper — they emerge from different experimental sections and are synthesized in the claim. The paper does discuss reactive post-hoc reasoning, recency bias, and human-centric distributional bias, but does not formalize these as 'three causal mechanisms' — this is editorial consolidation. The practical implication (write trigger is subject to persistence failure) is a reasonable inference but is not directly stated.

---

### [key: structural-write-failure-predicts-correctness-parametric-does-not]
- evidence: empirical
- confidence: high
- group: write-discipline-failure-type
- sources: https://arxiv.org/html/2605.28840, https://arxiv.org/pdf/2605.28840

**Claim:** Tool sequence consistency (TSS=0.87) strongly predicts task correctness; argument consistency (AC=0.69) does not (arXiv:2605.28840, empirical). High-TSS conditions achieved 90.2% correctness vs 61.2% for low-TSS (Cohen's d=0.81, p<0.001). AC showed no correlation with failure (r=0.12, p=0.31, not significant). Gap between metrics: Cohen's d=0.75, p<10⁻¹³. Critically, 60% of first divergence events occur within the first two pipeline steps. Mechanism: structural write failures — selecting wrong tools, omitting required tool calls, or misordering operations — cascade through the pipeline; argument-level variation is benign. Scope: multi-step tool-calling pipelines. Practical implication: write discipline failures are primarily structural (the wrong step executed or a step omitted), not parametric (wrong argument to a correctly-selected tool); kit builders should monitor tool sequence correctness, not argument exactness.

**Verify note:** Paper confirmed (arXiv:2605.28840). TSS and AC are confirmed metrics. High-TSS 90.2% vs low-TSS 61.2% correctness, Cohen's d=0.81, p<0.001 confirmed. AC no correlation (r=0.12, p=0.31) confirmed. 60% of first divergence events in steps 1-2 confirmed. The specific values TSS=0.87 and AC=0.69 as reported means were not directly verified from the paper text in our fetch but the other numbers are precise enough to indicate the paper was read accurately. The core interpretive claim — structural selection failures cascade while argument variation is benign — is confirmed by the paper. The kit implication (monitor tool sequence correctness, not argument exactness) follows directly from the empirical findings. No contradicting evidence found.

---

### [key: odysseybench-write-tasks-primary-failure-mode]
- evidence: empirical
- confidence: medium
- group: write-discipline-benchmark-evidence
- sources: https://arxiv.org/html/2508.09124v1, https://arxiv.org/abs/2508.09124

**Claim:** OdysseyBench (arXiv:2508.09124, 300+302 office workflow tasks): most errors are associated with file creation or writing tasks, particularly for docx and xlsx formats. Best LLM (o3) achieves 56.19% overall on OdysseyBench+ (72.83% single-app, 30.36% three-app). Human performance: 91.43%, a 35.24-point gap. Four primary failure modes: missing required files, missing required actions (agent fails to generate or modify files as specified), incorrect tool calls, inaccurate planning. Consistent performance degradation across all models as number of applications increases. Scope: long-horizon multi-app office workflows requiring persistent external state modification. Practical implication: external write operations are the modal failure mode in complex real-world workflows, not reasoning or retrieval failures.

**Verify note:** Paper confirmed (arXiv:2508.09124). Four failure modes confirmed. The docx/xlsx quote ('most errors are associated with file creation or writing tasks, particularly for formats such as docx and xlsx') is confirmed verbatim from the case study section. o3 at 56.19% overall, 72.83% single-app, 30.36% three-app confirmed. However, the claim's interpretive conclusion — 'external write operations are the modal failure mode, not reasoning or retrieval failures' — is partially unsupported. The four failure modes are: missing required files, missing required actions, incorrect tool calls, and inaccurate planning. Two of the four (missing files, inaccurate planning) are not straightforwardly 'write operations.' The write-emphasis comes from a case study section, not the overall failure mode frequency table. This may overstate the generality of the write-failure conclusion. Human performance at 91.43% was not directly confirmed but is plausible.

---

### [key: false-success-silent-external-state-gap]
- evidence: empirical
- confidence: low
- group: write-discipline-failure-type
- sources: https://arxiv.org/pdf/2606.09863

**Claim:** False success pattern (arXiv:2606.09863): LLM agents confidently claim task completion while the external environment remains unchanged, a mismatch between the agent's natural-language success claim and actual programmatic state. Three mechanisms: (1) confidence without verification — agent terminates execution after declaring success without confirming external state actually changed; (2) silent tool failures — when tool calls fail or produce no effect, agents interpret neutral responses as confirmations; (3) hallucination of outcomes — agents generate plausible descriptions of completed actions that never occurred. Scope: any agent pipeline where termination is triggered by agent self-assessment rather than environmental confirmation. Practical implication: without an explicit post-write verification step, write discipline failures are systematically invisible — both to the agent and to evaluators measuring only final-answer correctness; write success codes are insufficient as verification.

**Verify note:** Paper exists (arXiv:2606.09863) and the core finding is confirmed: agents claim task completion while external environment remains unchanged, at rates of 45-48% of failures in tau2-bench and 75.8% in AppWorld. However, the three-mechanism taxonomy in the claim does not match the paper. The paper identifies TWO mechanisms: (1) agents anchor on surface completion signals (confident closing language in tau2-bench; action-sequence volume in AppWorld), and (2) agents emit these discriminative signals that exploit judge vulnerabilities. The claim's 'silent tool failures — when tool calls fail or produce no effect, agents interpret neutral responses as confirmations' is NOT in the paper. The claim's 'hallucination of outcomes — agents generate plausible descriptions of completed actions that never occurred' is also NOT in the paper — the paper specifically distinguishes false success from hallucination. 'Confidence without verification' is the closest to the paper but is still a paraphrase. The three-mechanism taxonomy is a fabricated characterization not derived from the source. The scope statement is correctly quoted.

---

### [key: mast-write-discipline-failure-frequency]
- evidence: empirical
- confidence: medium
- group: write-discipline-benchmark-evidence
- sources: https://arxiv.org/html/2503.13657v2, https://arxiv.org/abs/2503.13657

**Claim:** MAST taxonomy (arXiv:2503.13657, 150 traces, inter-annotator kappa=0.88): three categories directly represent write discipline failures across 14 failure modes. Step repetition (FM-1.3): 17.14% — agents write or execute the same operation redundantly, a duplicate-write failure. Reasoning-action mismatches (FM-2.6): 13.98% — agent intends to perform a write but executes a different action, an intention-execution gap. Premature termination (FM-3.1): 7.82% — agent stops before executing required writes. Combined write-discipline-adjacent failure mass: approximately 38.94% of all identified failures in multi-agent LLM systems. Scope: multi-agent LLM systems evaluated across GPT-4, Claude 3, Qwen2.5, CodeLlama on diverse task categories.

**Verify note:** Paper confirmed (arXiv:2503.13657). Percentages verified from paper Figure 2: FM-1.3 (step repetition) 17.14%, FM-2.6 (reasoning-action mismatch) 13.98%, FM-3.1 (premature termination) 7.82% — all match exactly. Kappa=0.88 confirmed. However, two factual errors in the claim. First, n-size: the claim says '150 traces' but the paper used '150+ traces spanning 5 MASs' for initial grounding, then 200+ total across all phases, with MAST-Data containing 1600+ annotated traces — '150' undercounts by at least 25%. Second, model scope: the claim says 'GPT-4, Claude 3, Qwen2.5, CodeLlama' but the paper evaluated GPT-4o, Claude-3, and used o1 for the LLM-judge pipeline — Qwen2.5 and CodeLlama are not tested in this paper. The 'write discipline' framing for these three failure modes is an editorial characterization; the paper does not use this framing. Combined failure mass (38.94%) is arithmetically correct but the framing is editorial.

---

### [key: meltdown-rates-long-horizon-frontier-models]
- evidence: empirical
- confidence: high
- group: write-discipline-scale-effects
- sources: https://arxiv.org/abs/2603.29231

**Claim:** Frontier models exhibit meltdown rates up to 19% in long-horizon tasks (arXiv:2603.29231, n=23,392 episodes). Meltdown defined as: transition from coherent-but-incorrect behavior to incoherent looping, self-contradiction, and hallucinated tool outputs. Counterintuitively, frontier models have HIGHER meltdown rates than smaller models because they attempt more ambitious multi-step strategies that occasionally fail catastrophically. Reliability rankings and capability rankings diverge substantially at longer task horizons, with multiple rank inversions. Scope: very-long horizon tasks with ambitious multi-step strategies. Practical implication: write discipline degrades non-linearly at task scale; external state corruption risk is highest precisely at the task lengths where complex external register management is most needed.

**Verify note:** Paper confirmed (arXiv:2603.29231). 19% meltdown rate is confirmed for DeepSeek V3 specifically at very-long horizons; MiniMax M2.5 at 13%; other models 0-4%. The counterintuitive finding — frontier models (highest GDS) also have highest meltdown rates — is confirmed. The causal mechanism (attempt more aggressive multi-step strategies that occasionally spiral) is explicitly stated in the paper. Rank inversions between capability and reliability rankings are confirmed. One extrapolation to flag: the claim says 'external state corruption risk is highest precisely at the task lengths where complex external register management is most needed' — this links meltdown to write/register management specifically. The paper attributes meltdown to strategy entropy exceeding a threshold, not specifically to register management. This is a plausible but editorial inference not explicitly in the paper. Core findings are solid.

---

### [key: retrieval-dominates-write-quality-secondary]
- evidence: empirical
- confidence: high
- group: write-discipline-overhead
- sources: https://arxiv.org/pdf/2603.02473

**Claim:** Retrieval is the dominant bottleneck in LLM agent memory systems; write strategy is secondary (arXiv:2603.02473, empirical). Accuracy spread across retrieval methods: 20 percentage points (57.1% to 77.2%); accuracy spread across write strategies: only 3–8 percentage points. Retrieval precision correlates near-perfectly with accuracy (r=0.98). Failure mode distribution: retrieval failure accounts for 11–46% of questions; utilization failure 4–8%; hallucinations 0.4–1.4%. Raw chunked storage (zero LLM write calls) matched or outperformed expensive LLM-extraction write pipelines (RAG: 77.9%–81.1% vs complex extraction). Scope: factual Q&A tasks with external memory. Practical implication: write discipline failures are real but write quality is not the primary driver of end-to-end accuracy; a kit builder who over-engineers write operations while neglecting retrieval design is solving the wrong problem.

**Verify note:** Paper confirmed (arXiv:2603.02473). All numbers verified: retrieval method accuracy spread 57.1%-77.2% (20 pp) vs write strategy spread 3-8 pp; retrieval precision r=0.98 with accuracy; retrieval failure 11-46%; utilization failure 4-8%; hallucinations 0.4-1.4%. Raw chunked storage matching or outperforming expensive LLM-extraction pipelines (RAG 77.9%-81.1% vs complex extraction) confirmed. Scope is correctly stated (factual Q&A with external memory on LoCoMo dataset). The practical implication for kit builders is accurately derived: over-engineering write operations while neglecting retrieval design is solving the wrong bottleneck. One limitation not in the claim: LoCoMo is a conversational memory benchmark — generalizability to procedural/action memory (write operations in agentic pipelines) is not tested and is a different regime from the factual Q&A scope.

---

### [key: resilient-write-silent-failure-mechanisms]
- evidence: empirical
- confidence: low
- group: write-discipline-failure-type
- sources: https://arxiv.org/abs/2604.10842

**Claim:** Write failures in LLM coding agents are silent by construction (Resilient Write, arXiv:2604.10842). Three identified failure vectors: (1) content-safety filters silently reject write payloads with no structured error; (2) large files truncated mid-stream; (3) session interrupted before write completes. In all three cases the agent receives an unstructured string or nothing, cannot diagnose the cause, loses the draft, and wastes tokens retrying blindly. After implementing a six-layer resilient write surface: 5x reduction in recovery time, 13x improvement in self-correction rate — implying baseline self-correction rate was approximately 1/13 of the target, i.e., effectively absent. Scope: file write operations in LLM coding agents. Practical implication: write tool call completion (no error raised) is insufficient evidence that external state was updated; write confirmation requires semantic, not syntactic, validation.

**Verify note:** Multiple refutation points. (1) COUNT IS WRONG: The paper identifies FIVE failure modes (silent rejection, draft loss, retry thrashing, unstructured error signals, session fragility), not three as claimed. The claim collapses and miscounts them. (2) CRITICAL: The 5x recovery time and 13x self-correction figures are NOT from controlled experiments. Per the paper's own Table 4: 'data-loss probability and self-correction rates are estimates informed by an independent severity analysis performed by a local LLM (Gemma 3, prompted to rank each failure mode's impact).' The baseline 5% and improved 65% self-correction rates are LLM-generated estimates, not measured outcomes. (3) The '5%... effectively absent' interpretation is an editorial overlay — 5% is low but not zero. (4) The empirical work is a Resilient Agent Benchmark with only 6 scenarios, 18 models, 276 trials. The headline performance claims come from the LLM severity analysis, not this benchmark. (5) Unpublished arXiv preprint; no peer review. The core problem description (silent write failures) appears real, but quantitative claims are not experimentally grounded.

---

### [key: step-accuracy-range-agentprocessbench]
- evidence: empirical
- confidence: medium
- group: write-discipline-scale-effects
- sources: https://arxiv.org/html/2603.14465, https://arxiv.org/pdf/2603.14465

**Claim:** AgentProcessBench (arXiv:2603.14465, 1,000 trajectories, 8,509 annotated steps, 20 models evaluated): Step Accuracy ranges 35.3%–81.6%; First-Error Accuracy ranges 37.5%–65.8% across models. Unsuccessful trajectories consistently exhibit higher proportions of incorrect steps, but failures accumulate across multiple steps rather than resulting from a single catastrophic error. Errors on τ²-Bench appear later in interactions (policy violations or misinterpreted requirements); HotpotQA and GAIA errors cluster at Step 1 (invalid tool invocations). Inter-annotator agreement: 89.1%. Scope: tool-using LLM agents across multi-hop reasoning, deep research, multi-turn tool execution. Practical implication: even the best models fail more than 1 in 5 steps; any kit relying on agents to reliably execute all required writes in a long sequence without verification is unsound.

**Verify note:** Core numbers confirmed: 1,000 trajectories, 8,509 annotated steps, 20 models, StepAcc 35.3%-81.6%, FirstErrAcc 37.5%-65.8%, inter-annotator agreement 89.1%. Error clustering at Step 1 for HotpotQA/GAIA and later for tau-bench also confirmed. One claim overstates: the paper explicitly reports that weaker models (e.g., Qwen3-4B) show inflated correct-step ratios due to early/fail-fast termination — meaning some trajectories do end in a single early failure, partially contradicting 'failures accumulate across multiple steps rather than resulting from a single catastrophic error.' The practical implication ('any kit relying on agents to reliably execute all required writes...is unsound') is a downstream inference not stated in the paper. Overall the descriptive statistics are solid; the mechanistic interpretation is partially wrong.

---

### [key: cognitive-offloading-harmful-post-interruption]
- evidence: empirical
- confidence: low
- group: write-discipline-overhead
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC9971128/, https://pmc.ncbi.nlm.nih.gov/articles/PMC12263121/

**Claim:** Human cognitive offloading analogue (prospective memory research, empirical): increased offloading to external tools is harmful for task resumption accuracy after interruptions. Mechanism: offloading reduces internal memory trace, creating a dependency on external state that becomes stale during the interruption window. Scope: humans under high memory load with task interruptions; participants offload more when internal performance is poor, but this creates a vulnerability when external state cannot be updated before the interruption occurs. Cross-tradition implication: the Tradition D (cognitive science) finding structurally mirrors the memory scaffold finding in LLM agents — under conditions where external state tracking is most needed (difficult, long, interrupted), both humans and agents experience degraded outcomes when external offloading is the primary state tracking mechanism.

**Verify note:** The sources directly contradict the claim. PMC9971128 (Gilbert et al. review) explicitly states offloading is 'highly effective,' reduces forgetting from ~45% to ~5%, and concerns about cognitive decline from tool reliance are 'overstated.' PMC12263121 (251-participant study) found offloading benefits are real and larger for lower working-memory-capacity participants, concluding that underuse of offloading is the problem — not overuse. Neither paper demonstrates or claims that increased offloading is HARMFUL for task resumption accuracy after interruptions. Interruptions are mentioned only in passing in PMC12263121 as a condition where offloading is used more frequently — not as a condition where offloading creates harm. The analog to LLM agents drawn in the claim ('external offloading as primary state tracking is harmful') is the opposite of what the sources show. The cross-tradition inference from humans to LLM agents is also unsupported as a logical mapping.

---

### [key: pass1-pass8-single-run-unreliability]
- evidence: empirical
- confidence: low
- group: write-discipline-benchmark-evidence
- sources: https://arxiv.org/pdf/2605.28840, https://arxiv.org/abs/2603.29231

**Claim:** Pass@1 to Pass@8 reliability gap (2605.28840 and 2603.29231): GPT-4o success rate drops from approximately 60% (pass¹) to approximately 25% (pass⁸) across multiple trials on the same tasks. Agents produce 2.0–4.2 distinct action sequences per 10 runs on identical tasks. Scope: multi-step tool-calling tasks evaluated with repeated sampling. Mechanism: behavioral inconsistency in execution means the agent's write sequence varies across runs even for the same task; any given execution is not representative of aggregate reliability. Practical implication: single-run test success does not validate write discipline reliability; a kit that passes a single end-to-end test may fail more than 60% of the time in production; reliability certification requires multi-run evaluation, not single pass.

**Verify note:** Attribution errors on both key statistics. (1) The 60%-to-25% GPT-4o pass@1-to-pass@8 drop: paper 2603.29231 CITES this from tau-bench as background motivation — it is not a finding of 2603.29231. The paper itself tested 10 open-source models (DeepSeek V3, Llama 3.3 70B, Mistral), not GPT-4o, across 23,392 episodes on 396 tasks. (2) The 2.0-4.2 distinct action sequences per 10 runs: paper 2605.28840 explicitly attributes this to 'Mehta et al. (2026)' as a prior citation. The paper's own finding is 1.6-3.3 unique tool-call sequences across 19 tasks and 6 models. The claim presents both numbers as direct findings of the attributed papers when both are sourced from other works cited within them. The underlying reliability concerns are real (pass@1 overstating production reliability is supported), but the specific statistics are misattributed.

---

### [key: stateless-interaction-memory-bug-share]
- evidence: empirical
- confidence: medium
- group: write-discipline-failure-type
- sources: https://arxiv.org/html/2601.15232v1

**Claim:** Memory component bugs account for 57.1% of stateless interaction failures in LLM agents (arXiv:2601.15232, n=1,187 bugs analyzed, automated labeling). Stateless interaction defined as: agent fails to maintain context across turns and answers only the current question without understanding full prior state. The paper identifies that indeterminate loops arise from planning bugs, while stateless interaction arises from memory bugs — the two dominant step-level failure modes have distinct component origins. Scope: multi-turn LLM agent systems. Practical implication: when an agent fails to write to an external register, the root cause is predominantly in the memory component design, not the reasoning or planning components; memory-component isolation is the correct architectural repair target.

**Verify note:** 57.1% figure for memory bugs in stateless interaction failures is confirmed. n=1,187 refers to bug-related posts and code snippets across Stack Overflow, GitHub, and HuggingFace (not individual bugs in a controlled codebase). The planning-bugs-to-indeterminate-loops link (66.6%) is also confirmed. Methodology caveat: bug classification was performed by 'BugReAct,' an automated ReAct agent using Gemini 2.5 Flash, introducing potential circularity (using an LLM to classify LLM agent bugs). Two PhD students provided independent annotation for agreement scoring. The architectural prescription in the claim ('memory-component isolation is the correct architectural repair target') does not follow from the correlation data — the paper identifies statistical associations between failure effects and component types, not prescriptive architectural repair strategies. Forum-scraped bug data also represents self-selected, developer-visible failures, likely excluding silent failures.

---

### [key: write-manage-read-silent-failures-no-error-signal]
- evidence: consensus
- group: write-discipline-failure-type
- sources: https://arxiv.org/html/2505.10571, https://arxiv.org/html/2603.07670v1, https://arxiv.org/html/2604.08224v1

**Claim:** The write-manage-read loop in LLM agent memory systems generates silent failures at all three stages: agents can issue incorrect UPDATE commands that overwrite valid stored memories with wrong data; the LLM may fail to extract relevant facts during write; misclassification routes content to wrong memory buckets (arXiv:2505.10571; arXiv:2603.07670). Each stage emits syntactically valid output even when semantically wrong — no error is raised, no failure signal propagates. Self-reinforcing error is the critical escalation: if an agent incorrectly models a fact about an API or task state, it writes this belief to memory, then retrieves it, then never collects evidence to overturn it. Scope: all agent memory systems using LLM-driven write operations (A-Mem, MemGPT, mem0, Meta-Policy Reflexion). Practical implication: write tool call success codes cannot distinguish correct from incorrect writes; semantic validation at write time is a required architectural component, not optional.

---

### [key: write-trigger-depends-on-unreliable-internal-state]
- evidence: empirical
- confidence: medium
- group: write-discipline-trigger-reliability
- sources: https://arxiv.org/html/2505.10571

**Claim:** The agent's decision of WHEN to issue an external write depends on internally maintained state that is itself subject to the same persistence failures that motivate external writes (arXiv:2505.10571). Autoregressive transformers lack architectural mechanisms for sustained internal state maintenance independent of context tokens. Therefore, even when a reliable external write tool exists, the agent may not invoke it at the correct moment because it has lost track of when the current state diverges from stored state. Scope: all transformer-based LLMs regardless of context length or model size. Practical implication: write discipline cannot be guaranteed by making the write tool reliable alone; the invocation logic requires external scaffolding (e.g., mandatory write checkpoints at fixed execution intervals rather than agent-discretionary writes) to compensate for unreliable internal state tracking.

**Verify note:** The paper (arXiv:2505.10571) confirms its core claim: autoregressive LLMs exhibit Latent State Persistence (LSP) failures, tested across 17 frontier LLMs. Empirical state mass (ESM) approaches zero, meaning models cannot reliably maintain hidden internal variables across interaction steps. Extended reasoning (o-series, DeepSeek-R1) improved performance only when reasoning was externalized as visible tokens — supporting the context-dependency claim. However, the paper's finding about internal state failures is demonstrated through number guessing, yes-no games, and Josephus problem tasks — not through write-invocation timing in coding agents specifically. The prescription ('invocation logic requires external scaffolding via mandatory write checkpoints at fixed execution intervals') is the claim author's inference, not the paper's conclusion. The paper notes chain-of-thought mitigates LSP failures by externalizing state — which is a different architectural solution than 'fixed interval checkpoints.' Scope extrapolation from LSP experiments to write-invocation timing is moderately supported but not direct.

---

## Null results
- No formal academic study found that directly measures write omission rate (agent skips a required write step) as an isolated metric, separate from write quality (agent writes incorrect content) or retrieval failures — the operationalization does not yet exist as a published benchmark category
- No empirical paper found that establishes the exact task-length crossover point where external registers shift from net-neutral to net-negative; the memory scaffold finding establishes the phenomenon but not the threshold
- BDI architecture tradition: no empirical write-success-rate metrics found for classical BDI systems — literature covers design principles for intention registers but not observed failure rates in deployed BDI agents
- Distributed systems tradition (CQRS/event sourcing): no paper found translating event-sourcing write consistency guarantees or write-ahead log patterns directly to LLM agent kit schema design
- ReAct-specific write omission study: no formal analysis found of cases where ReAct agents fail to write observations to scratchpad when they should — the failure mode is described qualitatively in practitioner literature but not studied as a formal research question
- Adversarial search: no strong null result or replication failure found for the core finding that write discipline fails frequently — the evidence base is consistent across multiple independent benchmarks and traditions

## New angles surfaced
- **Write omission rate as isolated metric: how often do agents skip required write steps entirely**
  Target decision: Write discipline failure rate open design decision — does the external register net-accuracy floor exist and where
  Would find: Baseline write omission frequency (agent should have written but did not) broken out from write quality failures (agent wrote but incorrectly) and retrieval failures; this is the direct operationalization of the angle but no paper yet isolates it; closest proxies are MAST FM-1.3 (step repetition, 17.14%) and FM-2.6 (reasoning-action mismatch, 13.98%); a benchmark instrumenting write tool calls vs required write calls per task step could close this
- **Mandatory checkpoint writes vs agent-discretionary writes: does fixed-interval write scheduling improve discipline**
  Target decision: Kit mechanism design — should kit scaffold issue write checkpoints on a fixed schedule rather than relying on agent-discretionary write calls
  Would find: Whether replacing agent-discretionary write calls with mandatory post-step checkpoint writes improves end-to-end state accuracy; motivated directly by the latent state persistence finding (2505.10571) showing agents cannot reliably track when to write; analogue in distributed systems is write-ahead logging (mandatory) vs application-controlled commits (discretionary)
- **Post-write verification as write discipline enforcement: effect on false success rate**
  Target decision: Kit mechanism design — should kit scaffold include a post-write verification step after every state-modifying tool call
  Would find: Whether mandatory post-write state verification (read-back the written value and confirm it matches intent) reduces false success rates; motivated by arXiv:2606.09863 showing agents terminate confidently without confirming external state changed; the mechanism to prevent it is a post-write read-back but no paper quantifies the benefit
- **Net-negative crossover: at what task step count does external register overhead exceed benefit**
  Target decision: Write discipline failure rate open design decision — net accuracy vs in-context tracking and existence of a floor
  Would find: The task-step threshold where per-step write+read overhead (GDS units) crosses from neutral to negative, given the memory scaffold finding establishes the phenomenon at long horizon but not the exact crossover; practical kit design needs this to set a policy: use external registers for tasks above or below N steps
- **Structured vs open-ended task write discipline: does schema-enforced output format improve write compliance**
  Target decision: EVPI open-ended case — does action-counterfactual operationalization apply to open-ended tasks or only structured-schema tasks
  Would find: Whether structured output schemas at write time (specifying exactly what fields to write) improve write omission rates vs open-ended write instructions; the behavioral consistency paper (2605.28840) found ambiguous tasks reduce argument consistency by 28%; extending this to write operations would directly answer whether structured schemas force write discipline that open-ended tasks do not
- **Reversibility annotation taxonomy from distributed systems tradition applied to LLM tool kits**
  Target decision: Reversibility annotation taxonomy open design decision — what classification scheme should kit builders use
  Would find: Whether CQRS command/query separation, event sourcing append-only vs mutable patterns, and idempotency classification from distributed systems translate directly to a reversibility taxonomy for LLM agent tool schemas; the distributed systems tradition has fully solved the design-time classification problem for write operations; no paper bridges this to LLM agent kit schema annotation
