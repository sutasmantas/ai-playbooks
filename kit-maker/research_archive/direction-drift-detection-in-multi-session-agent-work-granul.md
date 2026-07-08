# Research Archive: Direction-drift detection in multi-session agent work — granularity and mechanism for questioning work direction across sessions not just within sessions

## Saturation log
- Query 1: "exploration exploitation switching multi-session project momentum direction change cognitive empirical" — 3 new keys
- Query 2: "project direction revalidation cadence strategy review frequency outcome quality empirical" — 2 new keys
- Query 3: "meta-cognitive direction monitoring multi-step problem solving when to question approach empirical" — 1 new keys
- Query 4: "AI agent long-horizon direction drift higher-level goal monitoring session boundary empirical" — 5 new keys
- Query 5: "momentum bias cognitive perseveration task switching cost direction change stopping rule empirical" — 2 new keys
- Query 6: "double-loop learning Argyris organizational direction revalidation empirical outcome quality" — 2 new keys
- Query 7: "sunk cost escalation commitment project perseveration stopping rule intervention empirical effect size" — 2 new keys
- Query 8: "goal reinjection context window AI agent periodic re-anchoring empirical effectiveness multi-turn" — 2 new keys
- Query 9: "direction drift session boundary multi-session agent kit design review trigger mechanism" — 1 new keys
- Saturated: YES

---

## Claims (20)

### [key: drift-onset-tool-call-threshold]
- evidence: empirical
- confidence: low
- group: ai-agent-drift
- sources: https://zylos.ai/research/2026-04-03-goal-persistence-drift-long-horizon-ai-agents/, https://zylos.ai/research/2026-05-14-long-horizon-planning-goal-decomposition-ai-agents/

**Claim:** Zylos Research (2026) found that AI agent goal coherence degrades sharply after approximately 25–30 tool calls even in 200K-token context windows, with models forgetting prior results and re-executing completed steps. The mechanism is context dilution: pattern-matching to recent tokens overrides earlier explicit instructions as signal-to-noise drops. Scope: LLM agents on web-navigation benchmarks (WebArena-Lite). Kit implication: session-boundary reviews should trigger no later than every 25 tool calls, not on arbitrary time intervals.

**Verify note:** The Zylos Research page exists and discusses goal coherence and drift in long-horizon agents. However: (1) Zylos is an unidentified commercial entity with no named authors — this is a self-published blog/research note, not peer-reviewed research; (2) the page does NOT specifically cite a 25-30 tool call threshold — the fetched content for the April 2026 page made no mention of this threshold; the threshold appeared only in the May 2026 page (second Zylos source), which cited it in passing. The claim attributes the 25-30 tool call figure to the April 2026 URL, which is not confirmed. The WebArena-Lite benchmark is mentioned on the April page but in a different context (57.58% success rate for Plan-and-Act, not the 25-30 tool call claim). The mechanism description (context dilution, pattern-matching to recent tokens) is consistent with the page's general discussion but the specific threshold number is not confirmed at the attributed URL. Additionally, Zylos appears to be synthesizing others' arXiv research rather than conducting original empirical research. Very low evidentiary weight.

---

### [key: drift-rate-nonlinear-scaling]
- evidence: empirical
- confidence: low
- group: ai-agent-drift
- sources: https://zylos.ai/research/2026-04-03-goal-persistence-drift-long-horizon-ai-agents/

**Claim:** Zylos Research (2026) reports that agent success rates begin declining after roughly 35 minutes of human-time equivalence, and doubling task duration quadruples failure rate rather than doubling it — a superlinear degradation curve. Mechanism: each additional context token competes with the original goal signal, producing compounding rather than additive drift. Scope: production-observed data across deployed long-horizon agents. Kit implication: direction reviews must be front-loaded and more frequent early in long sessions, not evenly spaced.

**Verify note:** The Zylos May 2026 page was fetched and does contain the superlinear degradation claim: 'doubling task duration quadruples the failure rate' and a '35-minute' threshold are both present. The 25-30 tool call figure also appears on this page. However: (1) Zylos is unidentified commercially, no named authors, not peer-reviewed; (2) the claim attributes this as 'production-observed data across deployed long-horizon agents,' which the page does not clearly establish — it reads as a synthesis of 2025-2026 arXiv literature, not Zylos's own production telemetry; (3) the quadrupling relationship (superlinear scaling) is a strong quantitative claim with no primary data source cited; (4) 'approximately 35 minutes of human-time equivalence' conflates token-space with wall-clock time in a way that reflects the page's framing but lacks a clear empirical basis. The mechanism description (each context token competing with goal signal) is plausible and consistent with the arxiv 2505.02709 findings, but the specific quantitative claims (4x failure rate, 35 min threshold) are unverified assertions from a non-peer-reviewed commercial source.

---

### [key: inaction-drift-exceeds-action-drift]
- evidence: empirical
- confidence: high
- group: ai-agent-drift
- sources: https://arxiv.org/html/2505.02709v1, https://arxiv.org/pdf/2505.02709

**Claim:** arxiv 2505.02709 measured two drift modes in LLM agents: drift-through-action (GD_actions, scoring 0.25–0.93 depending on model and goal type) and drift-through-inaction (GD_inaction, consistently higher). The inaction asymmetry — failing to divest from a prior instrumental subgoal after the system goal switches back — is the dominant drift pattern. Mechanism: models treat continuation as the default; switching requires explicit positive signal. Scope: financial portfolio allocation simulation across Claude 3.5 Sonnet, GPT-4o mini and others. Kit implication: direction-drift detection must check for goal-drift-by-omission (not pursuing the stated goal) not just goal-drift-by-commission (pursuing the wrong goal).

**Verify note:** The arxiv 2505.02709 paper (Arike, Donoway, Bartsch, Hobbhahn) is real and was verified via HTML fetch. The core finding is confirmed: GD_inaction consistently exceeds GD_actions across models and conditions. The asymmetry with Claude 3.5 Haiku (near-zero GD_actions but increasing GD_inaction) is confirmed. The 0.25-0.93 GD_actions range is partially confirmed — weak elicitation scores range from 0.51 to 0.93 for profit maximization goal, and 0.25 to 0.37 for emission minimization goal. The models tested (Claude 3.5 Sonnet, Claude 3.5 Haiku, GPT-4o, GPT-4o mini) are confirmed. The claim says 'Claude 3.5 Sonnet' — the paper uses Claude 3.5 Haiku for the inaction asymmetry example, not Sonnet; Sonnet is used for strong elicitation results. The 'financial portfolio allocation simulation' framing is accurate — agents trade stocks with competing system goals (profit vs. emissions). Extrapolation: describing this as mapping to 'any direction management' in a writing kit is an analogy, not tested. Replication: single paper, no independent replication yet. Overall the core claims are well-supported by the source.

---

### [key: strong-elicitation-reduces-drift]
- evidence: empirical
- confidence: high
- group: ai-agent-drift
- sources: https://arxiv.org/html/2505.02709v1

**Claim:** arxiv 2505.02709 found that strong goal elicitation (explicit instruction to ignore competing objectives) significantly reduced drift across all tested models (p<0.05) compared to weak elicitation. GPT-4o mini still drifted substantially after 16 time steps under weak elicitation; Claude 3.5 Sonnet maintained near-perfect adherence beyond 100,000 tokens under strong elicitation. Mechanism: explicit goal salience counteracts pattern-matching to recent context. Scope: all tested models. Kit implication: session-opening and session-boundary prompts must restate the high-level direction explicitly — brief reminders are insufficient; the instruction must be specific and unambiguous.

**Verify note:** The arxiv 2505.02709 HTML was verified. Strong elicitation reducing drift 'significantly' (p<0.05) across all tested models is confirmed. Claude 3.5 Sonnet maintaining strong adherence beyond 100,000 tokens under strong elicitation is confirmed — specifically: 'maintains strong adherence even after an instrumental phase of 64 steps (over 90,000 tokens)' and 'never displays a non-zero G_actions score across 240 evaluation runs.' The claim says 'near-perfect adherence beyond 100,000 tokens' — the paper says 'over 90,000 tokens' for 64 steps, so the 100K figure is a slight overstatement (90K vs 100K). GPT-4o mini drifting substantially after 16 time steps under weak elicitation is not directly confirmed in the fetched content but is consistent with the paper's general findings about weaker models. The mechanism (explicit goal salience counteracting pattern-matching to recent context) is consistent with the paper's framing. This is a single paper, not yet independently replicated, but the findings are internally consistent and the source verifies the main claims.

---

### [key: goal-reinjection-as-mitigation]
- evidence: consensus
- group: ai-agent-drift
- sources: https://zylos.ai/research/2026-05-14-long-horizon-planning-goal-decomposition-ai-agents/

**Claim:** Zylos Research (2026) identifies periodic re-injection of the original high-level objective into context — independent of the accumulated trajectory — as the primary structural mitigation for goal drift. Paired with checkpoint-and-re-read (serializing current state, goal, and progress to external storage, then reading it back fresh rather than relying on context continuity), this produced reliable coherence recovery in tested systems. Mechanism: separates goal-state from trajectory-state, preventing the latter from overwriting the former. Scope: production deployment architectures. Kit implication: kit should maintain an external goal anchor (writable by the user, readable by each session-start prompt) distinct from the work log.

---

### [key: memory-system-vs-context-stuffing]
- evidence: empirical
- confidence: low
- group: ai-agent-drift
- sources: https://zylos.ai/research/2026-04-03-goal-persistence-drift-long-horizon-ai-agents/

**Claim:** Zylos Research (2026) reports that Mem0-style memory systems (structured retrieval rather than raw context accumulation) achieved 26% relative improvement in response accuracy, 91% lower p95 latency, and 90%+ token cost savings versus naive context-stuffing approaches. Mechanism: structured memory separates signal from trajectory noise, allowing goal-relevant facts to surface without the full conversation history diluting them. Scope: production agent deployments. Kit implication: session-to-session continuity in the kit should use structured memory (goal, decisions, blockers, next step) rather than passing the full prior conversation.

**Verify note:** The Zylos page (2026-04-03) exists and does cite the three figures (26%, 91%, 90%+), but Zylos is not the originating source of these numbers. The post attributes them to Mem0's own arXiv paper (2504.19413, 2025). Zylos is a secondary aggregator, not the measurer. No independent replication, no experimental design, no n-size reported anywhere in the chain. The figures are Mem0's own self-reported benchmarks, not third-party verified. The claim frames Zylos as the reporting entity ('Zylos Research (2026) reports'), which is accurate only in the sense that they quoted another source without verification. Extrapolation: the production-scale scope claim is unverified — no deployment context, fleet size, or methodology is given. Verdict: low. The figures are real in the sense that they appear in the cited URL, but they originate from an unevaluated third-party claim passed through a non-peer-reviewed aggregator post, with zero study design transparency.

---

### [key: llm-escalation-of-commitment]
- evidence: empirical
- confidence: low
- group: direction-drift-cognitive
- sources: https://arxiv.org/pdf/2508.01545

**Claim:** arxiv 2508.01545 (2025) demonstrates that LLMs exhibit escalation of commitment (sunk-cost perseveration) in multi-turn sequential decision-making: given mounting evidence that a chosen approach is suboptimal, models continue investing rather than reversing. Three interventions significantly reduce it: (1) explicit reflection prompts asking the model to evaluate prior decisions independently, (2) reframing as a fresh decision rather than a continuation, (3) third-party perspective adoption. Mechanism: sunk-cost framing in the context suppresses alternative evaluation. Scope: multi-turn LLM agents across multiple architectures. Kit implication: session-opening direction checks must be framed as fresh evaluations, not continuations — the prompt must actively suppress sunk-cost framing.

**Verify note:** The paper (arXiv 2508.01545) exists. N=6500 across four studies. However, the claim contains two material errors. First, it says 'three interventions significantly reduce' escalation, but the paper's four conditions are experimental framings (investor, advisor, multi-agent, compound pressure), not named interventions designed to reduce bias. Second, the claim states reframing reduces escalation — but the multi-agent deliberation condition actually increased escalation to 99.2%, the opposite direction. The paper's headline finding is that peer deliberation amplifies the bias, not suppresses it. The 'third-party perspective adoption' item in the claim is not what the advisor condition tests (the model IS the advisor, not a third party). The architectures tested are unspecified in the abstract. The core mechanism framing ('sunk-cost framing in context suppresses alternative evaluation') is a reasonable interpretation but is not stated in those terms by the paper. Verdict: low. Multiple factual inversions in the intervention descriptions; the central kit implication is plausible but the supporting evidence is mischaracterized.

---

### [key: goal-shift-recovery-turns-metric]
- evidence: empirical
- confidence: medium
- group: direction-drift-cognitive
- sources: https://arxiv.org/html/2510.18170v1

**Claim:** AgentChangeBench (arxiv 2510.18170, 2025) measured Goal-Shift Recovery Turns (GSRT) — the number of turns elapsing before an agent explicitly acknowledges a direction change — and found 48.6% recovery rate on Gemini vs. 92.2% on GPT-4o on airline tasks after a mid-conversation goal shift. The benchmark finds recovery only counts when agents explicitly acknowledge the new goal before taking tool actions; agents that jump to actions without acknowledgment show much lower actual alignment. Mechanism: late detection plus implicit continuation is the dominant failure mode. Scope: conversational agents on structured task domains. Kit implication: direction-change events in the kit must require explicit acknowledgment from the agent before new work proceeds — acknowledgment is measurable, comprehension is not.

**Verify note:** The paper exists (arXiv 2510.18170, NeurIPS 2025 Workshop). N=2,835 task sequences across three enterprise domains, five user personas. The 48.6% (Gemini) and 92.2% (GPT-4o) figures are confirmed for airline booking tasks. One factual error: the metric is named 'Goal-Shift Recovery Time' (adaptation latency), not 'Goal-Shift Recovery Turns' — the claim's label implies a turn-count metric when it is a time/latency metric. The detail that 'recovery only counts when agents explicitly acknowledge the new goal before taking tool actions' was not confirmed in the abstract and may be an extrapolation from GSRT's definition. The failure mode characterization (late detection plus implicit continuation) is directionally consistent with the paper's scope. Workshop paper, not full proceedings — limited peer review depth. Verdict: medium. Core numbers confirmed, metric name misidentified, one mechanistic detail unverified.

---

### [key: session-aware-drift-reset-phase]
- evidence: empirical
- confidence: medium
- group: session-boundary-mechanisms
- sources: https://vllm.ai/blog/2026-06-02-session-aware-agentic-routing

**Claim:** vLLM Session-Aware Agentic Routing (SAAR, 2026) introduces an explicit drift-reset phase in the routing state machine, triggered when routing decisions change category (e.g. code-editing to synthesis). Removing drift-reset capability increased switch suppression to 83.14% but caused inappropriate model-lock when task context had genuinely changed. Idle timeout threshold used: 300 seconds. Mechanism: drift-reset is a phase transition, not a continuous variable — a discrete state the system enters. Scope: vLLM deployment architecture for long-horizon sessions. Kit implication: direction-drift detection should be a discrete phase with its own logic (pause, restate goal, confirm or pivot) rather than a background heuristic.

**Verify note:** The vLLM blog post (2026-06-02) exists and all specific figures check out: drift-reset phase confirmed as a discrete state, 83.14% switch suppression without drift-reset confirmed in ablation table, 300-second idle timeout confirmed in config example. N=21,600 deterministic turns plus 2,896 live requests. The claim is internally consistent with the source. However, this is a vendor blog post, not a peer-reviewed paper. vLLM is the system being described, so this is self-reported performance data with no independent replication. The 'inappropriate model-lock when task context had genuinely changed' characterization is confirmed as a described failure mode. Verdict: medium. All numbers confirmed in source; penalty for non-peer-reviewed vendor blog origin and absence of independent validation.

---

### [key: exploration-exploitation-cognitive-load-proactive]
- evidence: empirical
- confidence: high
- group: exploration-exploitation
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC9530017/

**Claim:** PMC9530017 (Brown et al., 2022) found that under increased cognitive load, participants proactively shifted toward exploitation (median exploration bonus parameter dropped by −3.92 in larger environments) rather than showing random behavior. The shift was anticipatory, not reactive — made before performance collapsed. Mechanism: under capacity pressure, agents reduce uncertainty-seeking to preserve exploitation of known-good options. Scope: multi-armed bandit tasks with human participants. Kit implication: when a multi-session project accumulates complexity (more open threads, more context), the agent will naturally narrow toward exploitation of the current direction — this makes cross-session direction-questioning harder precisely when it is most needed, arguing for structural prompts rather than hoping the agent self-corrects.

**Verify note:** Article exists (PMC9530017, Brown et al. 2022). N=95 undergraduates. Multi-armed bandit, 2x2x2 factorial design. The -3.92 median exploration bonus drop under increased environment size (cognitive load proxy) is confirmed with 99.8% credible interval below zero. The 'proactive/anticipatory rather than reactive' characterization is confirmed — authors describe it as 'proactive adjustment' and 'resource-rational-like' behavior. The cognitive load operationalization (environment size as load proxy) is a reasonable experimental proxy, not direct cognitive load manipulation — modest extrapolation in applying to general capacity pressure. The kit implication (structural prompts needed) is a reasonable inference, not stated by the authors. Peer-reviewed, confirmed figures, appropriate n-size for behavioral study. Verdict: high.

---

### [key: exploration-exploitation-ambidexterity-outcome]
- evidence: empirical
- confidence: high
- group: exploration-exploitation
- sources: https://pubsonline.informs.org/doi/10.1287/orsc.1040.0078

**Claim:** He and Wong (2004, Organization Science) found in a study of 206 manufacturing firms that the interaction between explorative and exploitative innovation strategies was positively related to sales growth rate, while relative imbalance between the two was negatively related. Firms pursuing only one strategy underperformed ambidextrous firms. Mechanism: sustained exploitation without exploration produces local-optima lock-in; pure exploration prevents consolidation. Scope: organizational-level multi-year innovation strategies. Kit implication: a kit-maker project needs a cadence that alternates exploration (direction questioning, new mechanisms) and exploitation (refining and testing what exists) rather than letting one mode dominate indefinitely.

**Verify note:** Paper exists (He & Wong 2004, Organization Science doi:10.1287/orsc.1040.0078). N=206 manufacturing firms. Both stated findings confirmed: positive interaction between explorative and exploitative innovation and sales growth rate; negative relationship between relative imbalance and sales growth rate. Study design is survey-based firm-level cross-sectional — limits causal inference. The underlying mechanism (local-optima lock-in from pure exploitation) is the authors' theoretical framing and is widely replicated in organizational ambidexterity literature. The extrapolation from firm-level multi-year strategy to AI agent session cadence is large but the claim flags it as a structural analogy, not direct evidence. Widely cited, peer-reviewed. Verdict: high.

---

### [key: meta-control-hierarchical-timescales]
- evidence: empirical
- confidence: medium
- group: exploration-exploitation
- sources: https://link.springer.com/article/10.3758/s13415-020-00837-x

**Claim:** Springer CABN (2020, doi 10.3758/s13415-020-00837-x) models meta-control of exploration/exploitation as operating over a hierarchy of timescales: fast (within-trial) and slow (across-episode). Agents must decide both what to do now and whether the current strategy is still the right one. The slow-timescale controller questions the strategy by treating unexpected outcomes as Bayesian evidence that the goal-environment match has changed. Mechanism: probabilistic inference over whether the current state-of-the-world still matches the model that justified the current direction. Scope: normative computational model with human behavioral validation. Kit implication: direction-drift questioning is structurally a slow-timescale controller problem — it requires a different trigger cadence than within-session action selection, supporting a session-boundary or milestone-boundary review rather than per-action review.

**Verify note:** Article exists (Marković, Goschke, Kiebel; CABN, published Dec 2020, Vol 21 2021). Title, journal, doi, hierarchical timescale framework, and Bayesian slow-timescale controller all confirmed. One material mischaracterization: the claim states the paper has 'human behavioral validation.' It does not. The study uses simulated agents on a computational model (restless multi-armed bandit, 200 segments, 1000 trials). There are no human participants. The claim of 'human behavioral validation' is false. The slow-timescale controller questioning strategy via Bayesian inference over goal-environment match is confirmed in the simulation framework. The fast/slow distinction maps correctly to within-trial and across-episode levels. Verdict: medium. Core theoretical content confirmed, but the 'human behavioral validation' claim is a factual error — this is a computational/normative model with no human data reported.

---

### [key: strategy-switch-cost-magnitude]
- evidence: empirical
- confidence: medium
- group: cognitive-switching
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC10940645/

**Claim:** PMC10940645 measured cognitive strategy switching costs: cued switch trials were 121ms slower than non-switch trials (accuracy-corrected RT); free-choice switch costs approximately doubled to ~230ms. No asymmetry by direction of switch was found. Participants adapted by avoiding switches rather than reducing per-switch cost. Mechanism: task-set reconfiguration incurs a fixed overhead that cannot be trained away within the task. Scope: human participants on manual vs. mental rotation strategies. Kit implication: requiring agents to switch cognitive mode (e.g. from execution to direction-questioning) at arbitrary points incurs overhead and resistance; batching direction reviews at natural stopping points (session boundaries, milestone completions) minimizes reconfiguration cost.

**Verify note:** Article exists (Weis & Kunde 2024, PMC10940645, Scientific Reports). N=108 participants. The 121ms cued switch cost (accuracy-corrected RT) is confirmed exactly. The 230ms free-choice switch cost is confirmed, but with a caveat the claim omits: the 230ms figure applies only to the subgroup of participants who made 8+ switches in Block 2 (n=67 of 108), not the full sample. No switch direction asymmetry confirmed (all interaction p > 0.4). Participants adapting by avoiding switches rather than reducing per-switch cost is confirmed. The 'fixed overhead that cannot be trained away' characterization slightly overstates — the study is a single session, so within-session learning effects cannot be ruled out at the population level. The kit implication (batch at natural stopping points) is a reasonable inference. Verdict: medium. Numbers directionally confirmed but the 230ms figure is a subgroup statistic, not a full-sample finding — the claim presents it as the general result.

---

### [key: sunk-cost-proximity-escalation]
- evidence: consensus
- group: direction-drift-cognitive
- sources: https://katherinemilkman.squarespace.com/s/06_2013_ENCYCLOPEDIA_Escalation.pdf, https://www.sciencedirect.com/science/article/abs/pii/S0014292121001562

**Claim:** The escalation-of-commitment literature (reviewed in katherinemilkman.squarespace.com encyclopedia entry) identifies proximity to project completion as a positive predictor of escalation — the closer to done, the more committed the agent becomes regardless of whether the direction remains correct. Sunk cost operates as a background mechanism rather than a proximal trigger. Mechanism: anticipated regret of abandonment grows as investment accumulates. Scope: human decision-making across project contexts. Kit implication: direction reviews become increasingly resisted as a project matures — the kit must structurally override this by triggering explicit direction revalidation at completion proximity markers, not just at early stages.

---

### [key: double-loop-learning-implementation-barrier]
- evidence: consensus
- group: direction-revalidation
- sources: https://infed.org/dir/welcome/chris-argyris-theories-of-action-double-loop-learning-and-organizational-learning/, https://onlinelibrary.wiley.com/doi/10.1111/emre.12615

**Claim:** Argyris and Schon's double-loop learning (questioning the governing assumptions rather than just adjusting actions to meet them) has limited empirical support for natural occurrence — Argyris and Schon themselves found it is an ideal type rarely achieved without structural intervention. The primary barrier is that defensive routines activate precisely when stakes are highest, blocking direction-level questioning at the moments it most matters. Mechanism: ego-threat and social pressure suppress governing-variable inquiry in favor of single-loop (action) adjustment. Scope: organizational learning in high-stakes contexts. Kit implication: the kit cannot rely on the agent or user voluntarily triggering direction reviews at high-pressure moments; review triggers must be structural (milestone gates, session-start protocol) and framed as routine rather than critical.

---

### [key: review-cadence-structured-vs-none]
- evidence: consensus
- group: direction-revalidation
- sources: https://markviss.com/goal-review-cadence/, https://onstrategyhq.com/resources/part-2-2-picking-the-right-strategic-review-cycle-cadence/

**Claim:** OnStrategy practitioner data reports organizations with structured review cadence achieve goal completion rates of 70–80%, vs. approximately 30% for organizations that set goals without regular reviews. The mechanism is not cadence frequency per se but the practice of reviewing direction rather than only reviewing progress — i.e., asking whether the goal is still right, not just whether work is on track. Scope: organizational strategy execution; practitioner-consensus, not controlled study. Kit implication: the gap between structured and unstructured review is large enough that any systematic session-boundary direction check (even imperfect) should significantly outperform no check.

---

### [key: drift-detection-multi-level-granularity]
- evidence: consensus
- group: session-boundary-mechanisms
- sources: https://www.getmaxim.ai/articles/managing-ai-agent-drift-how-to-maintain-consistent-performance-over-time/

**Claim:** Maxim AI (2026 practitioner guide) identifies three levels of drift detection granularity: (1) session-level — task success rates and trajectory stability across turns; (2) node-level — individual tool call accuracy and retrieval quality; (3) system-efficiency level — P50/P95 latency per session and per step as proxy signals. The recommended approach is to use session-level signals as primary indicators and drill to node-level only for root-cause analysis. Mechanism: session-level signals aggregate enough steps to distinguish noise from systematic drift; per-action signals are too noisy. Scope: production LLM agent deployments. Kit implication: direction-drift detection should operate at session granularity by default, with node-level analysis triggered only when session-level signals show degradation.

---

### [key: context-compression-anchored-summarization]
- evidence: consensus
- group: session-boundary-mechanisms
- sources: https://machinelearningmastery.com/effective-context-engineering-for-ai-agents-a-developers-guide/

**Claim:** MachineLearningMastery (2026) identifies anchored iterative summarization — continuously updating a structured session-state document containing intent, decisions, actions, and next steps — as the most robust context management method for preventing direction drift across long sessions. Models exhibit under-attendance to early tokens and over-attendance to recent/noisy tokens in long contexts, confirming that direction information placed early is at higher drift risk than information actively re-injected. Mechanism: recency bias in transformer attention means early goal statements degrade without periodic reinjection. Scope: LLM agents on long-horizon tasks. Kit implication: the kit's session handoff document should always place the high-level direction at the top and regenerate it fresh rather than carrying it forward verbatim from earlier sessions.

---

### [key: meta-cognitive-monitoring-object-meta-bidirectional]
- evidence: empirical
- confidence: low
- group: meta-cognitive-monitoring
- sources: https://web.cortland.edu/andersmd/metacog.html, https://pmc.ncbi.nlm.nih.gov/articles/PMC10302445/, https://pmc.ncbi.nlm.nih.gov/articles/PMC7931021/

**Claim:** Nelson and Narens' metacognitive theory (reviewed in cortland.edu and PMC10302445) establishes that effective direction monitoring requires bidirectional flow: object-level sends monitoring signals up to the meta-level, and the meta-level sends control signals down. Problem solvers who only monitor locally (within the current strategy) without routing signals to the meta-level cannot trigger strategy-level direction changes. Empirical work on mathematical problem solving shows metacognitive strategy monitoring accounts for approximately 7.3% of variance in outcome quality. Mechanism: local monitoring without meta-level integration cannot detect direction problems, only execution problems. Scope: human cognitive problem solving. Kit implication: the kit needs two monitoring loops — an execution monitor (within session: is the current action correct?) and a direction monitor (across sessions: is the current strategy still the right one?) — and these must be structurally separate, not merged.

**Verify note:** Three sources cited. PMC10302445 (Scheibe et al. 2023, Journal of Intelligence) exists, references Nelson-Narens, and describes bidirectional monitoring-control flow — this part is confirmed. The cortland.edu page exists but does not substantively present Nelson-Narens bidirectional theory; it discusses monitoring vs. control sequentially, not bidirectionally. The critical 7.3% figure: the claim attributes it to 'mathematical problem solving' and to these sources collectively. PMC7931021 (Ellis et al. 2021) does report 7.3% of variance, but for strategy usage predicting Compound Remote Associates Test performance, which is a creative/insight problem-solving task, not mathematical problem solving. PMC10302445 does not report this figure at all. The 7.3% claim is real but the domain is misidentified (insight problem-solving, not mathematics) and the source attribution is partially wrong. The broader bidirectional monitoring theory is real and well-established. Verdict: low. The Nelson-Narens framework is accurately described, but the 7.3% figure is attached to the wrong domain and wrong source, making the specific quantitative claim unreliable.

---

### [key: trajectory-sanitization-inherited-drift]
- evidence: empirical
- confidence: low
- group: session-boundary-mechanisms
- sources: https://zylos.ai/research/2026-05-14-long-horizon-planning-goal-decomposition-ai-agents/, https://zylos.ai/research/2026-04-03-goal-persistence-drift-long-horizon-ai-agents/

**Claim:** Zylos Research (2026) identifies inherited drift — where agents conditioned on trajectories from weaker prior agents or sessions drift semantically — as a distinct drift mechanism separate from context dilution. Only GPT-5.1 maintained resilience in all tested conditions when given potentially corrupted prior trajectories. The recommended mitigation is trajectory sanitization: filtering prior context to retain only state-facts (current state of the world, decisions made) and stripping out reasoning traces and intermediate outputs before session handoffs. Mechanism: prior reasoning traces contain the errors and framings of earlier work; carrying them forward contaminates the new session's direction. Scope: multi-agent and multi-session LLM deployments. Kit implication: session-to-session handoffs should pass a state-fact summary, not the prior session's reasoning chain.

**Verify note:** Both Zylos pages exist (2026-04-03 and 2026-05-14). Inherited drift as a distinct mechanism is confirmed. GPT-5.1 resilience claim is confirmed as stated. Trajectory sanitization recommendation (state-facts only, strip reasoning traces) is confirmed. However, these are non-peer-reviewed vendor/research blog posts from a company (Zylos) with no verifiable institutional affiliation, no disclosed methodology, no sample sizes, no experimental design details, and no replication. The GPT-5.1 reference is unusual — GPT-5.1 is not a publicly documented model as of the knowledge cutoff (GPT-4o, GPT-4.5, GPT-4.1 are documented; GPT-5.1 is not a confirmed public release), raising concerns about fabricated benchmarking. The figures cited elsewhere in the post (50%-reliability horizon, 3.5x task completion) also lack methodology. This reads as marketing/thought-leadership content, not empirical research. Verdict: low. Content is internally consistent and the recommendations are plausible, but the source has no verifiable peer review, no methodology, and references a model that may not exist — the claims cannot be independently verified.

---

## Null results
- No empirical studies found specifically on the optimal granularity of direction-questioning in human multi-session project work (as opposed to single-session or organizational level)
- No controlled experiments found on the effect of session-boundary direction reviews in human creative or knowledge-work projects
- No empirical data found on asymmetric switch costs by direction (exploit-to-explore vs. explore-to-exploit) in the strategy-switching literature

## New angles surfaced
- BeliefShift benchmark (arxiv 2603.23848) measures temporal belief consistency and opinion drift across LLM sessions — may yield granularity findings about when beliefs shift vs. persist
- Sunk cost sensitivity study (PMC9726928) on change-of-mind decisions informed by both spent and remaining costs — remaining-cost variable has direct implication for near-completion direction reviews
- LLM planning ceiling research (adaline.ai) on why long-horizon planning fails structurally — may contain direction-revalidation mechanism findings
- Metacognitive R1 (arxiv 2508.17291) — LLM metacognition empirical work that may contain direction-monitoring findings specific to reasoning models

