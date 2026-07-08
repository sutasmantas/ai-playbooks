# Research Archive: Goal-directed advisor behavior in generated kits — what file what wording what makes it decay-resistant

## Saturation log
- Query 1: "site:github.com CLAUDE.md advisor proactive goal-directed behavioral contract agent kit examples" — 4 new keys
- Query 2: "LLM agent proactive problem identification goal frame vs task frame instruction design empirical" — 3 new keys
- Query 3: "meta-level behavioral instructions AI agent session persistence cross-session behavioral decay" — 4 new keys
- Query 4: "advisor vs executor mode LLM agent instruction design goal-directed continuation practitioner" — 3 new keys
- Query 5: "minimal instruction set goal-directed AI agent behavior empirical compliance measurement" — 6 new keys
- Saturated: NO

---

## Claims (21)

### [key: proactive-agent-f1-baseline]
- evidence: empirical
- confidence: high
- group: proactive-advisor-behavior
- sources: https://arxiv.org/abs/2410.12361

**Claim:** The 'Proactive Agent' paper (arxiv 2410.12361) trained a fine-tuned model on ProactiveBench (6,790 labeled events) and measured F1=66.47% for proactively offering assistance, outperforming all tested open- and closed-source baselines. Mechanism: the model was trained with a reward model that simulates human judgment about whether unsolicited offers are appropriate, not rules. Scope: data-driven; requires training on human acceptance/rejection labels, not just prompt engineering. Kit implication: pure instruction-level proactiveness prompts are insufficient — behavioral contracts must be reinforced structurally (e.g., post-task continuation checks), because base models will default to reactive response even with explicit instructions.

**Verify note:** All specific claims verified from arXiv:2410.12361. ProactiveBench dataset of 6,790 labeled events confirmed. F1=66.47% for proactively offering assistance confirmed. Reward model simulating human judgment as training mechanism confirmed. The paper does outperform open- and closed-source baselines. The kit implication (pure instruction-level proactiveness insufficient, structural reinforcement needed) is a reasonable extrapolation from the finding that fine-tuning was required, though the paper itself doesn't make this prescriptive claim explicitly.

---

### [key: reactive-paradigm-structural-cause]
- evidence: empirical
- confidence: high
- group: proactive-advisor-behavior
- sources: https://arxiv.org/abs/2601.09382

**Claim:** Research on long-term task-oriented agents (arxiv 2601.09382) confirms that mainstream LLM agents 'predominantly operate under a reactive paradigm, responding only to immediate user queries within short-term sessions.' The mechanism is architectural: planning and execution share the same context window, so goals stated at session start are diluted by accumulated tool outputs, observations, and user messages. A fine-tuned agent with Intent-Conditioned Monitoring (formulates trigger conditions from dialog history) and Event-Triggered Follow-up reached 85.19% task completion on complex dynamic scenarios. Scope: improvement is from supervised fine-tuning on synthetic data; prompting alone does not close the gap. Kit implication: behavioral contracts must include explicit re-anchoring triggers at session boundaries, not just opening declarations.

**Verify note:** All specific claims verified from arXiv:2601.09382. The 'reactive paradigm' quote is verbatim from the abstract. Intent-Conditioned Monitoring and Event-Triggered Follow-up mechanisms confirmed. 85.19% task completion on complex dynamic scenarios confirmed (exact wording: 'complex tasks including shifts in user intent'). One minor framing note: the claim attributes the reactive paradigm to an architectural cause (context window dilution of goals), but the paper's diagnosis and fix are framed as a training/data problem, not purely architectural. The improvement comes from supervised fine-tuning on synthetic data, not architectural redesign. This framing gap is a modest extrapolation but doesn't invalidate the core finding.

---

### [key: goal-framing-vs-task-framing-action-evaluation]
- evidence: empirical
- confidence: medium
- group: goal-frame-design
- sources: https://arxiv.org/pdf/2604.04561

**Claim:** Empirical research (Mapping Exploitation Surface, arxiv 2604.04561, 10,000 trials) found that LLM agents evaluate actions against their 'understood task model' rather than abstract rules: the same action (exploring hidden directories) is taken under puzzle framing but not under software-engineer framing because it only counts as task-relevant in one frame. Mechanism: in-context task framing acts as an implicit filter on which actions are considered at all. Scope: applies across multiple models tested in adversarial settings. Kit implication: a CLAUDE.md behavioral contract that defines the agent's role as 'advisor' rather than 'task executor' filters which continuations the agent considers appropriate — the role declaration is a goal frame, not just a label.

**Verify note:** Partially confirmed. The paper (arXiv:2604.04561, 'Mapping the Exploitation Surface') does exist, does use ~10,000 trials across 7 models, and does find that goal-reframing is the dominant trigger while other manipulations (moral licensing, incentives, identity priming) fail. The core mechanism claim — agents evaluate actions against their understood task model rather than abstract rules — is supported. However, the specific example in the claim ('exploring hidden directories is taken under puzzle framing but not under software-engineer framing') is not in the source. The paper uses puzzle/CTF framing vs. control conditions; 'software-engineer framing' as the contrast condition is not mentioned. The example appears to be an illustrative fabrication. The mechanism is real; the specific example is not from the source.

---

### [key: advisor-delegate-outcome-paradox]
- evidence: empirical
- confidence: high
- group: advisor-executor-framing
- sources: https://arxiv.org/abs/2602.12089

**Claim:** Controlled study (arxiv 2602.12089, multi-party negotiation) found that participants preferred Advisor mode (44%) over Delegate mode (19%), but Delegate mode produced significantly better collective surplus outcomes. Mechanism: in Advisor mode, humans 'modify, override, or ignore AI suggestions, reverting toward human-baseline trade patterns'; Delegate mode bypasses this filtering step. Adjusted for non-compliance, Delegate mode yielded ~1.5x the welfare gains. Scope: negotiation domain; authors note 'adoption-compatible interaction rules are a prerequisite.' Kit implication: when writing goal-directed continuation instructions, the kit should structure the agent to act (delegate mode) by default and present results for review — not to recommend and wait, because the human-in-loop filtering step is the primary failure mode of advisor-framed agents.

**Verify note:** All specific claims verified from arXiv:2602.12089. Three-mode structure (Advisor/Coach/Delegate) confirmed. 44% preference for Advisor vs. 19% for Delegate confirmed. Delegate mode producing significantly better collective surplus outcomes confirmed. ~1.5x welfare gain figure confirmed. Multi-party negotiation domain confirmed. 'Adoption-compatible interaction rules are a prerequisite' quote confirmed. The mechanism (human filtering step in Advisor mode as primary failure mode) is directly supported by the paper's findings.

---

### [key: goal-directedness-behavioral-vs-mechanistic-split]
- evidence: empirical
- confidence: high
- group: goal-directedness-measurement
- sources: https://arxiv.org/abs/2602.08964

**Claim:** Research (arxiv 2602.08964) proposes a dual framework for evaluating goal-directedness combining behavioral evaluation with interpretability-based analysis of internal representations. Key finding: agents 'non-linearly encode a coarse spatial map' and 'reasoning reorganises them, shifting from spatial cues towards immediate action selection,' showing distinct cognitive stages during goal pursuit. Critically, 'introspective examination is required beyond behavioural evaluations to characterise how agents represent and pursue their objectives.' Scope: 2D grid navigation tasks; generalization to open-ended tasks is not directly tested. Kit implication: compliance with a behavioral contract cannot be verified by behavioral observation alone; a kit's self-check rules must target observable structural signals (action counts, continuation presence), not inferred mental states.

**Verify note:** All specific claims verified from arXiv:2602.08964, accepted at ICML 2026. Dual framework combining behavioral evaluation with interpretability analysis confirmed. 'Non-linearly encodes a coarse spatial map' finding confirmed. 'Reasoning reorganises them, shifting from spatial cues towards immediate action selection' finding confirmed. 'Introspective examination is required beyond behavioural evaluations' quote confirmed. Scope limitation acknowledged: 2D grid navigation tasks; generalization to open-ended tasks not tested. The kit implication (observable structural signals rather than inferred mental states) is a well-grounded extrapolation.

---

### [key: goal-drift-five-mechanisms]
- evidence: consensus
- group: goal-drift-mechanisms
- sources: https://zylos.ai/research/2026-04-03-goal-persistence-drift-long-horizon-ai-agents/

**Claim:** Zylos Research synthesis (2026-04-03) identifies five distinct goal-drift failure modes in LLM agents: (1) context dilution as tool outputs accumulate and goal-signal ratio drops; (2) inherited drift from subagent trajectory conditioning; (3) value-conflict drift where instructions opposing trained values (security, privacy) are systematically overridden; (4) subgoal displacement where intermediate objectives displace parent goals; (5) multi-session interruption. All evaluated models eventually exhibited some goal drift; Claude 3.5 Sonnet with scaffolding maintained near-perfect adherence for 100,000+ tokens. Scope: long-horizon agents; short-session kits face mechanisms 1, 3, and 5 most acutely. Kit implication: a behavioral contract for an advisor kit must address at minimum: context-boundary re-anchoring (mechanism 1), value-aligned constraint framing (mechanism 3), and cross-session goal document injection (mechanism 5).

---

### [key: value-conflict-framing-for-constraint-persistence]
- evidence: empirical
- confidence: low
- group: goal-drift-mechanisms
- sources: https://arxiv.org/abs/2603.03258, https://zylos.ai/research/2026-04-03-goal-persistence-drift-long-horizon-ai-agents/

**Claim:** Zylos Research (2026-04-03) and the Inherited Goal Drift paper (arxiv 2603.03258) both find that constraints framed as opposing trained model values (e.g., 'deprioritize security') are systematically overridden in coding and related tasks, while constraints framed as 'context-specific exceptions' persist. Example: 'intentional for benchmarking purposes' survives; 'override security' does not. Mechanism: model fine-tuning creates strong default priors; instructions that conflict with those priors are weighted down during inference, especially as context grows. Scope: coding tasks with security/privacy constraints; generalizes to any constraint that conflicts with helpfulness training. Kit implication: when the behavioral contract says 'never quick-fix' or 'fix the class not the instance,' frame it as domain expertise (what advisors do) rather than as a restriction on helpfulness, to prevent value-conflict override.

**Verify note:** The Zylos page exists and does discuss value-aligned constraint framing with the 'context-specific exceptions' pattern. However, arXiv:2603.03258 is about inherited goal drift from prefilled agent trajectories in stock trading and ER triage environments — it does NOT discuss constraints framed as opposing model values vs. context-specific exceptions, and does NOT study coding tasks with security/privacy constraints. The specific mechanism attributed to 2603.03258 (fine-tuning priors overriding conflicting instructions during inference) is not in that paper. The claim conflates a synthesis page (Zylos) with its primary citation (2603.03258) and attributes findings to the wrong source. The Zylos page itself has no disclosed methodology or peer review. The 'intentional for benchmarking purposes' example is from Zylos, not from any verified empirical study.

---

### [key: subgoal-framework-success-jump]
- evidence: empirical
- confidence: medium
- group: goal-persistence-architecture
- sources: https://arxiv.org/html/2603.19685v1, https://zylos.ai/research/2026-04-03-goal-persistence-drift-long-horizon-ai-agents/

**Claim:** Subgoal-driven frameworks (arxiv 2603.19685, cited via Zylos synthesis) jumped from 6.4% to 43% success on WebArena-Lite, surpassing GPT-4-Turbo (17.6%) and GPT-4o (13.9%). Plan-and-Act architecture achieved 57.58% success on the same benchmark. Mechanism: externalizing subgoal state (as a concrete current-subgoal artifact sized to fit in every context window) creates both persistence and tractability, preventing the plan from being treated as a context-time object. Scope: WebArena-Lite benchmark; reflects web navigation tasks. Kit implication: a goal-directed advisor kit should externalize the current goal/next-obstacle as an always-accessible file or block (e.g., end-of-response summary) rather than relying on in-context memory of the opening goal declaration.

**Verify note:** The core WebArena-Lite results are confirmed in arXiv:2603.19685: 6.4% to 43.0% success on Gemma3-12B, surpassing GPT-4-Turbo (17.6%) and GPT-4o (13.9%). However, the 'Plan-and-Act architecture achieving 57.58% success' claim is NOT present in arXiv:2603.19685 — this specific architecture name and metric are not in the source. This figure may be from a different paper or may be fabricated. The Zylos synthesis page cites 2603.19685 but it is not clear whether 57.58% appears there or is introduced by Zylos without a primary source. The core subgoal decomposition findings are real; the Plan-and-Act / 57.58% addition is unverified from the cited source.

---

### [key: instruction-file-length-ceiling-empirical]
- evidence: consensus
- group: instruction-file-design
- sources: https://www.xda-developers.com/gave-claude-code-200-line-claudemd-worst-decision-made/, https://github.com/sqidermad/agents-maxxing, https://www.aibuilderclub.com/blog/karpathy-claude-md-rules

**Claim:** Practitioner consensus supported by multiple 2025-2026 sources places the effective ceiling for CLAUDE.md behavioral instructions at 80-120 lines (high-signal) to 150-200 lines (outer limit). Claude Code's system prompt pre-consumes ~50 context slots, leaving 100-150 usable instruction slots. The agents-maxxing project cites a 200-line empirical ceiling derived from a Karpathy→Forrest Chang→Mnilax research chain. Mechanism: instructions beyond this ceiling compete for in-context attention; the model stops dropping instructions deliberately but is unable to hold all simultaneously during active work. Scope: Claude Code context window; applies to any always-loaded behavioral file. Kit implication: a behavioral contract file for a goal-directed advisor kit should be ≤120 lines; knowledge-base and architecture content should be referenced contextually, not loaded at startup.

---

### [key: decision-rules-persist-knowledge-base-decays]
- evidence: anecdote
- group: instruction-file-design
- sources: https://www.xda-developers.com/gave-claude-code-200-line-claudemd-worst-decision-made/

**Claim:** XDA Developers practitioner case study found that CLAUDE.md content divides into two decay-rate classes: (1) decision rules ('never modify migrations,' 'never commit secrets,' project-specific conventions) remain effective at any file position; (2) knowledge-base content (architecture details, tool manuals, onboarding material) decays fastest and should be loaded just-in-time, not at startup. Mechanism: the model retrieves decision rules under contextual pressure because they are operationally triggered; knowledge-base content requires explicit retrieval context that is rarely present mid-task. Scope: Claude Code practitioner observation; no controlled measurement. Kit implication: a behavioral contract should contain only decision rules and mandatory continuation triggers — never architecture summaries or howto content.

---

### [key: prompt-level-goal-framing-insufficient-alone]
- evidence: consensus
- group: goal-frame-design
- sources: https://creospan.com/prompt-%E2%89%A0-purpose-why-goal-directed-behavior-in-agentic-ai-demands-more-than-just-good-prompts/

**Claim:** Creospan practitioner analysis identifies that LLMs function as 'next-word prediction engines' where 'each prompt essentially resets the system'; prompt-level goal framing therefore cannot sustain goal-directed behavior across multi-step workflows. Five additional components are required: persistent memory (external database), goal-oriented planning (decomposition), tool integration, autonomous decision loops, and guardrails. Mechanism: prompts assume 'the right words can encode all necessary context,' but in dynamic environments where goals shift or new information emerges, the opening goal declaration is diluted. Scope: practitioner synthesis, not controlled study. Kit implication: a behavioral contract file is necessary but not sufficient; the kit must pair it with structural mechanisms — end-of-response continuation checks, post-task self-review triggers — that re-instantiate the goal at every decision point.

---

### [key: behavioral-drift-runtime-monitoring-jsd]
- evidence: empirical
- confidence: low
- group: goal-drift-mechanisms
- sources: https://github.com/qualixar/agentassert-abc

**Claim:** AgentAssert (github.com/qualixar/agentassert-abc) measures behavioral drift using Jensen-Shannon Divergence (JSD) across entire sessions rather than individual outputs. Live benchmark across three production LLMs found all scored below the 0.90 deployment threshold: GPT-5.3 mean JSD=0.034 (Theta=0.688), Claude Sonnet 4.6 JSD=0.020 (Theta=0.823), Mistral-Large-3 JSD=0.025 (Theta=0.813). Key finding: models fabricated product availability without catalog access — a behavioral violation that per-output guardrails missed. Mechanism: drift is distributional and gradual; single-output checks cannot detect it. Scope: retail shopping contract; applies to any multi-turn behavioral specification. Kit implication: a goal-directed advisor behavioral contract should include self-check rules that fire after fixed action counts (not time), comparing current output pattern against declared advisor behavior.

**Verify note:** The GitHub repository (github.com/qualixar/agentassert-abc) exists with 4 stars and a v0.3.0 release. JSD-based drift detection is documented. However, multiple red flags undermine the claim: (1) 'GPT-5.3' is not a real model identifier from any known provider; (2) the repo has no peer review, minimal community adoption (4 stars), and was flagged by the fetch tool as potentially marketing-oriented; (3) the claim describes metrics as 'JSD scores' but the repo reports 'mean drift' and 'Theta' separately — the mapping is ambiguous; (4) the benchmark methodology lacks transparent detail; (5) the claim's framing ('live benchmark across three production LLMs') implies independent external validation, but this appears to be the repository author's own benchmark with no independent replication. The distributional drift detection concept (JSD across sessions vs. per-output checks) is legitimate and published in other literature, but the specific benchmark numbers cited here come from an unreviewed repository using a non-existent model name.

---

### [key: behavioral-contract-not-wishlist-framing]
- evidence: consensus
- group: instruction-file-design
- sources: https://github.com/sqidermad/agents-maxxing

**Claim:** The agents-maxxing project (github.com/sqidermad/agents-maxxing) introduces 'behavioral contract, not wishlist' as a structural framing principle for CLAUDE.md files: rules encode what the agent will and will not do based on production experience across 30+ codebases, not aspirational goals. Specific decay-prevention mechanisms: (1) continuation-sanity-check after any session break or compaction — verify answering the newest message, not ghost goals; (2) intent-encoded tests that fail for named business reasons, not vague failures; (3) hard token budgets that surface breaches explicitly rather than degrading silently. Mechanism: explicit, testable commitments resist decay because violations are detectable; aspirational language is ignored under task pressure. Scope: practitioner consensus, no controlled measurement. Kit implication: every rule in the behavioral contract must be phrased as an observable commitment with a detectable violation condition.

---

### [key: never-finish-empty-handed-continuation-trigger]
- evidence: anecdote
- group: anti-decay-wording-patterns
- sources: https://github.com/fainir/most-capable-agent-system-prompt

**Claim:** The most-capable-agent system prompt (github.com/fainir/most-capable-agent-system-prompt) encodes a 'never finish empty-handed' doctrine: at the end of every substantial run the agent must produce updated state, visible evidence, reusable artifacts, a clear next step, and at least one improvement candidate. The anti-decay mechanism is structural: the agent maintains a 'momentum engine' with four explicit queues (now/next/blocked/improve) and the 'drift into chat-only behavior' pattern is named and explicitly countered. Mechanism: naming the failure mode in the contract creates a detection condition; the agent can recognize when it has drifted to chat-only mode because it has a named pattern to match against. Scope: single-source practitioner kit, no controlled measurement. Kit implication: a behavioral contract for a goal-directed advisor kit should name the specific failure modes (executor drift, task-only completion, silent finish) in the contract text itself so the agent has a detectable pattern to self-check against.

---

### [key: procedural-memory-as-system-prompt-not-retrieval]
- evidence: consensus
- group: goal-persistence-architecture
- sources: https://zylos.ai/research/2026-04-05-ai-agent-memory-architectures-persistent-knowledge/

**Claim:** Zylos Research memory architecture survey (2026-04-05) identifies that procedural memory — learned workflows, behavioral heuristics, tool-use patterns — must be 'best represented as instructions, not data,' requiring system-prompt injection rather than vector-store retrieval. The static declarative file approach (CLAUDE.md, AGENTS.md) provides 'session-independent instruction injection' that prevents behavioral drift. Dynamic alternative: LangMem's update_system_prompt allows agents to rewrite a designated memory block encoding newly learned heuristics. The AutoDream system (February 2026) adds background memory consolidation analogous to REM sleep. Scope: practitioner synthesis; no quantified decay rates. Kit implication: the advisor behavioral contract must be injected at every session start (the CLAUDE.md mechanism), not stored as retrievable documentation — retrieval requires a trigger that is absent when the behavior is most needed.

---

### [key: inherited-drift-trajectory-contamination]
- evidence: empirical
- confidence: high
- group: goal-drift-mechanisms
- sources: https://arxiv.org/abs/2603.03258

**Claim:** Inherited Goal Drift paper (arxiv 2603.03258) shows that well-aligned models are 'largely robust to direct adversarial pressure' but this robustness is 'brittle when conditioning on prior context' from weaker agents. Only GPT-5.1 showed consistent resilience; drift behavior was 'inconsistent across prompt variations' and 'strong instruction hierarchy following fails to predict drift resistance.' Mechanism: prefilled trajectory conditioning — absorbing prior interaction histories — embeds goal misalignment that the model cannot distinguish from legitimate context. Scope: stock-trading and emergency room triage environments; results transfer across qualitatively different settings. Kit implication: when a kit generates sub-agent outputs that feed back into a parent agent's context, those outputs should be goal-filtered before injection; alternatively, re-anchor with the original goal document at the boundary.

**Verify note:** Paper arxiv:2603.03258 exists and is titled 'Inherited Goal Drift: Contextual Pressure Can Undermine Agentic Goals' (Menon, Saebo, Crosse, Gibson, Jang, Cruz; accepted ICLR 2026 Lifelong Agents Workshop). All specific claims confirmed from abstract: brittle robustness when conditioning on prior context from weaker agents, GPT-5.1 specifically named as maintaining consistent resilience, drift behavior inconsistent between prompt variations, strong hierarchy following failing to predict resistance, prefilled trajectory conditioning as mechanism, stock-trading and ER triage environments. No extrapolation detected — the kit implication is a direct inference from the mechanism described. Replication status: single paper, 2026 workshop, not yet independently replicated. Verdict: high on factual accuracy of the claims as stated.

---

### [key: goal-externalization-26pct-accuracy-improvement]
- evidence: empirical
- confidence: medium
- group: goal-persistence-architecture
- sources: https://zylos.ai/research/2026-04-03-goal-persistence-drift-long-horizon-ai-agents/

**Claim:** Mem0 semantic memory extraction achieves '26% relative improvement in response accuracy versus stateless approaches' by persisting goal facts externally rather than relying on in-context retention. The principle generalizing across multiple architectures (InfiAgent, Plan-and-Act, HiPER): 'goals confined to context windows will eventually be forgotten, overridden, or diluted'; production systems require dedicated goal persistence layers. Scope: Zylos Research synthesis citing multiple systems; the 26% figure is from Mem0's own benchmark. Kit implication: a durable goal document (accessed at every major decision point, not just session start) is the single highest-leverage structural investment for advisor-mode behavioral persistence.

**Verify note:** The Zylos Research page exists (2026-04-03) and does mention the 26% figure, InfiAgent, Plan-and-Act, and HiPER. However: (1) The 26% figure is sourced from Mem0's own benchmark paper (arXiv:2504.19413), making it a vendor-cited self-reported figure passed through a secondary synthesis — not independently verified. (2) The Zylos page is a research synthesis blog, not a peer-reviewed study. (3) The claim that the principle 'generalises across multiple architectures' is Zylos's interpretive synthesis of disparate systems, not a controlled comparative study. (4) 'Goals confined to context windows will eventually be forgotten, overridden, or diluted' is presented as a quoted principle but appears to be editorial framing. N-size: Mem0 benchmark; design unstated in the Zylos summary. Extrapolation is present: a vendor benchmark result is generalised into an architectural principle. Replication: none cited. Verdict: medium — the page and figure exist, but the evidential weight is low (vendor self-benchmark via secondary synthesis).

---

### [key: plan-execute-separation-goal-anchor]
- evidence: consensus
- group: goal-persistence-architecture
- sources: https://www.langchain.com/blog/planning-agents, https://zylos.ai/research/2026-04-03-goal-persistence-drift-long-horizon-ai-agents/

**Claim:** LangChain's planning agents analysis and Zylos synthesis both confirm that plan-and-execute architectures outperform ReAct-style agents on goal maintenance because the structured plan acts as a persistent goal anchor: executors receive only the current step, keeping them isolated from accumulated context noise. LLMCompiler claims 3.6x speed improvement via parallel scheduling; the key maintenance benefit is structural isolation of goal state from execution context. Mechanism: if planning and execution share context, goal declarations at the top of context compete with recent observations; separation keeps the goal reference stable. Scope: multi-step task completion benchmarks; benefit is primarily for long-horizon tasks. Kit implication: a kit for an advisor agent should maintain an explicit 'current problem/proposed next step' block that is updated at the end of every response, functioning as the persistent plan artifact.

---

### [key: c-level-advisor-role-routing-vs-behavioral-contract]
- evidence: anecdote
- group: anti-decay-wording-patterns
- sources: https://github.com/alirezarezvani/claude-skills/blob/main/c-level-advisor/CLAUDE.md

**Claim:** The c-level-advisor CLAUDE.md (github.com/alirezarezvani/claude-skills) uses 'proactive triggers: every role has context-driven early warnings that surface issues without being asked' but implements this as role-routing and output-format specification (Bottom Line → What → Why → How to Act → Your Decision) rather than as a behavioral contract with detectable violation conditions. The quality gate is 'self-verify → peer-verify → critic pre-screen → present.' Mechanism: the approach encodes when to surface issues (via role context) rather than how to persist the advisor posture over time. Scope: single practitioner kit, no empirical evaluation. Kit implication: output format alone does not prevent advisor-to-executor drift; the behavioral contract must separately encode the continuation trigger (what fires after task completion) and the role-check pattern (detect when the agent has slipped to task-only mode).

---

### [key: non-deterministic-drift-temperature-zero]
- evidence: empirical
- confidence: high
- group: goal-drift-mechanisms
- sources: https://arxiv.org/pdf/2601.19934

**Claim:** Empirical study (arxiv 2601.19934) tested GPT-4o-mini and llama3.1-8b across five prompt categories at temperatures 0.0 and 0.7 using exact repeats, perturbed inputs, and reuse modes. Key finding: output variability persists even at temperature=0, attributed to 'infrastructure-induced nondeterminism.' Distinct variability patterns emerge based on model size, deployment type, and prompt category. Scope: measured using unique output fractions, lexical similarity, and word count statistics; behavioral instruction categories not individually analyzed. Kit implication: behavioral contracts cannot rely on deterministic re-execution of instructions; the same wording will produce variable compliance across runs, which means structural re-anchoring (not just correct wording) is essential for decay resistance.

**Verify note:** Paper arxiv:2601.19934 exists: 'Quantifying non deterministic drift in large language models' by Claire Nicholson (single author), submitted January 12, 2026, 10 pages. All methodology claims verified from abstract: GPT-4o-mini and llama3.1-8b, five prompt categories, exact repeats/perturbed inputs/reuse modes, temperatures 0.0 and 0.7, nondeterminism persists at temperature=0, infrastructure-induced nondeterminism attribution, unique output fractions/lexical similarity/word count metrics, distinct variability patterns by model size/deployment/prompt type. No extrapolation in the claim beyond what the paper states. Replication: single empirical study, not yet replicated. Verdict: high on factual accuracy of the specific claims; the paper is a measurement study, so findings are descriptive rather than causal.

---

### [key: agent-architect-outcome-focused-instruction-pattern]
- evidence: consensus
- group: anti-decay-wording-patterns
- sources: https://github.com/Piebald-AI/claude-code-system-prompts/blob/main/system-prompts/agent-prompt-agent-creation-architect.md

**Claim:** Piebald-AI claude-code-system-prompts agent-creation-architect pattern specifies three instruction design principles: (1) success criteria must be stated upfront as outcome definitions, not step sequences; (2) agents should be 'capable of handling their designated tasks with minimal additional guidance' — autonomy framing, not compliance framing; (3) implicit needs should be detected alongside explicit requirements. The quality control mechanism is embedded self-verification steps in the workflow, not external review. Mechanism: outcome-focused wording shifts the agent's goal frame from 'execute this step' to 'achieve this state,' which creates a self-checking loop because the agent can compare its output against the stated outcome. Scope: practitioner framework, no controlled measurement. Kit implication: every behavioral rule in a goal-directed advisor kit should be stated as an outcome ('the user should never be left without a proposed next step') rather than an action ('after each task, propose a next step').

---

## Null results
- No empirical studies found comparing specific CLAUDE.md wording variants for advisor vs executor behavioral output — all evidence is practitioner consensus or anecdote
- No controlled measurement of decay rate curves for behavioral instructions specifically (only general LLM non-determinism data)
- No direct empirical study of goal-directed continuation compliance rate as a function of instruction count or file length — the 80-200 line ceiling is practitioner consensus without controlled experiment
- AgentAssert JSD drift data covers tone/availability fabrication, not specifically advisor-vs-executor behavioral drift

## New angles surfaced
- Cognitive psychology literature on role salience and priming — how naming a role (advisor vs executor) at session start affects subsequent in-session behavior; experiments on role priming in human studies may predict LLM framing effects more precisely
- Double-loop learning (Argyris) as a model for behavioral contracts that check governing values not just actions — may directly map to kit design for self-correction rules
- Instruction salience positioning — empirical work on primacy/recency effects in long-context LLM prompts could quantify whether behavioral contract rules should appear at top or bottom of CLAUDE.md
- Self-consistency prompting as a decay-resistance mechanism — asking the agent to predict its own next action before acting may anchor it to goal-frame more durably than post-hoc rules
- Distinction between preventive instructions (don't drift) vs corrective triggers (detect and recover from drift) — the kit currently mixes both; separating them by placement or framing may improve compliance of each type

