# Research Archive: Behavioral rule compliance — linguistic patterns specificity and structural formats that produce consistent LLM instruction following

## Saturation log
- Query 1: "system prompt behavioral compliance instruction following structural patterns Claude Anthropic empirical" — 3 new keys
- Query 2: "meta-analysis instruction following large language models prompt format compliance effect size" — 3 new keys
- Query 3: "instruction following failures LLM behavioral rule ambiguity non-compliance empirical gaps" — 2 new keys
- Query 4: "site:github.com CLAUDE.md behavioral rules examples kit system prompt agent instructions" — 3 new keys
- Query 5: "quantitative instruction compliance measurement LLM word choice specificity format comparison benchmark" — 1 new keys
- Query 6: "IFEval instruction following evaluation benchmark compliance rates formatting constraints primacy recency 2024 2025" — 0 new keys
- Query 7: "XML tags structured sections system prompt instruction following improvement empirical Claude GPT 2024 2025" — 1 new keys
- Query 8: "lost in the middle instruction position context attention LLM compliance rule adherence middle position 2024" — 1 new keys
- Query 9: "rule phrasing do not vs avoid vs never LLM compliance instruction specificity behavioral constraint format study 2024" — 1 new keys
- Query 10: "positive constraint do X vs negative constraint dont do X LLM compliance instruction following rates empirical comparison 2024 2025" — 1 new keys
- Query 11: "agent kit system prompt self-correction self-verification rule compliance check yourself behavioral enforcement pattern 2025" — 1 new keys
- Query 12: "behavioral rule done criteria outcome-oriented vs procedure-oriented instruction LLM agent compliance 2024 2025" — 1 new keys
- Query 13: "multi-turn conversation instruction drift behavioral rule decay LLM agent compliance persistence empirical 2024 2025" — 1 new keys
- Query 14: "Karpathy CLAUDE.md rules self-check protocol agent coding 2026 ten rules structure" — 1 new keys
- Query 15: "named failure modes behavioral rules LLM agent instruction taxonomy triggering error execution error compliance architecture 2025" — 0 new keys
- Saturated: YES

---

## Claims (19)

### [key: terminal-constraint-decay-50pct]
- evidence: empirical
- confidence: high
- group: constraint-positioning
- sources: https://arxiv.org/abs/2603.23530

**Claim:** Study 'Did You Forget What I Asked? Prospective Memory Failures in LLMs' (arxiv 2603.23530), measuring 8,000+ prompts across three model families, found that formatting compliance drops 2-21% under concurrent cognitive task load, but terminal constraints — rules requiring action at the end of a response — decay by up to 50%. Mechanism: models allocate attention to primary task completion first; end-of-response rules compete with the drive to finalize output, and are the last obligation to be honored in a processing queue that is already saturated. Scope: applies when a behavioral rule requires an action at the response boundary (e.g., 'end every reply with a checklist'); avoidance constraints ('do not mention X') are comparatively robust because they operate as suppression signals throughout generation rather than terminal triggers. Kit-maker implication: place rules that fire at response boundaries in salience-elevated positions (top of system prompt, explicit repetition); do not rely on a single end-buried instruction for terminal behaviors.

**Verify note:** arXiv 2603.23530 exists with title 'Did You Forget What I Asked? Prospective Memory Failures in Large Language Models.' All specific numbers verified from the abstract: 8,000+ prompts, three model families, 2-21% compliance drop under concurrent task load, terminal constraints degrade most with drops up to 50%. The mechanistic explanation (attention allocated to primary task, end-of-response rules compete with drive to finalize) is a reasonable inference from the paper's framing but not a direct quote. The distinction between terminal constraints and avoidance constraints (suppression signals throughout generation) is a plausible characterization. Kit implication follows directly.

---

### [key: salience-enhanced-format-recovery]
- evidence: empirical
- confidence: high
- group: constraint-positioning
- sources: https://arxiv.org/abs/2603.23530

**Claim:** The same prospective memory study (arxiv 2603.23530) demonstrates that a 'salience-enhanced format' — defined as explicit instruction framing at the top of the prompt plus a trailing reminder of the same rule — recovers compliance to 90-100% in most settings even under high concurrent load. Mechanism: the reminder creates two encoding events for the same rule rather than one, making the constraint both primed at generation start (primacy) and re-activated at generation end (recency), covering both the attentional windows that receive highest weight. Scope: most effective for constraints that have a clear, self-contained verifiable form; less studied for abstract behavioral rules ('always be helpful'). Kit-maker implication: for any hard behavioral rule in a kit, pair an upfront declaration with an end-of-system-prompt restatement as a structural pattern — not optional polish.

**Verify note:** arXiv 2603.23530 verified. Abstract explicitly states 'A salience-enhanced format (explicit instruction framing plus a trailing reminder) recovers much of the lost compliance, restoring performance to 90-100% in many settings.' Claim accurately represents this. The mechanistic explanation (two encoding events covering primacy and recency windows) is a reasonable inference from cognitive memory theory applied to LLMs, but the paper likely does not prove this specific mechanism — it demonstrates the empirical result. The scope caveat (less studied for abstract behavioral rules) is a reasonable qualification not explicitly in the source. Kit implication is directly supported.

---

### [key: constraint-type-not-encoding-format]
- evidence: empirical
- confidence: high
- group: constraint-type-vs-format
- sources: https://arxiv.org/abs/2604.07192

**Claim:** Study 'Compact Constraint Encoding for LLM Code Generation' (arxiv 2604.07192) tested three encoding forms and four propagation modes across code generation tasks and found no statistically significant compliance difference between them (Cliff's delta < 0.01). The decisive variable is constraint type: conventional constraints (aligning with model training defaults) achieve 99%+ compliance regardless of encoding; counter-intuitive constraints (opposing model defaults) fail at rates of 10-100%. Mechanism: compliance is driven by whether the instruction requires the model to suppress an already-activated generation path, not by how the instruction is formatted. Scope: applies to code generation; the finding is plausibly general but has not been confirmed for non-code behavioral rules. Kit-maker implication: engineering effort spent on prompt formatting for rule compliance is largely wasted; effort should go to identifying which rules oppose model defaults and designing scaffolding that actively breaks the competing default (e.g., examples, reasoning chains) rather than restating the rule more elaborately.

**Verify note:** arXiv 2604.07192 ('Compact Constraint Encoding for LLM Code Generation') is verified. All specific numbers confirmed: three encoding forms, four propagation modes, Cliff's delta < 0.01 with 95% CI spanning ±2.6 percentage points, conventional constraints achieve 99%+ compliance regardless of encoding, counter-intuitive constraints fail at 10-100%. The mechanistic explanation (compliance driven by whether instruction requires suppressing an already-activated generation path) is a reasonable inference from the results but may not be the paper's stated mechanism. The scope caveat (applies to code generation, not confirmed for non-code behavioral rules) is accurate and important — the claim correctly notes this limitation. Kit implication follows directly from the finding.

---

### [key: knows-but-violates-rate]
- evidence: empirical
- confidence: high
- group: constraint-recall-vs-compliance
- sources: https://arxiv.org/html/2604.28031v1

**Claim:** Study 'Models Recall What They Violate: Constraint Adherence in Multi-Turn LLM Ideation' (arxiv 2604.28031) found that 6 of 7 tested models achieve 97.3%+ accuracy when asked to restate their constraints, yet 5 of 7 exceed 50% knows-but-violates (KBV) rates — meaning models can correctly recall a rule and still violate it in the same turn. KBV ranged from 8% (GPT-5.4) to 99% (Sonnet 4.6) under pressure conditions. Violation onset was rapid: 74% of violation cases appeared by turn 2. Mechanism: the failure is not information loss (recall is near-perfect) but 'instruction arbitration' — competing task objectives outrank the behavioral rule in the generation objective. Scope: documented in ideation/brainstorming tasks with increasing turn count; applies specifically when task reward (plausible, useful output) conflicts with format/behavioral constraints. Kit-maker implication: rule recall checks (asking the agent 'what rules apply here?') are insufficient guards; compliance requires either task-reward alignment with the rule or external enforcement (programmatic checks, not just verbal reminders).

**Verify note:** arXiv 2604.28031v1 ('Models Recall What They Violate: Constraint Adherence in Multi-Turn LLM Ideation') is verified. All numbers confirmed: 7 models tested, 6 of 7 achieve 100% recall (97.3% overall average), 5 of 7 exceed 50% KBV rates, GPT-5.4 at 8% KBV, Claude Sonnet 4.6 at 99% KBV, 74% of drift cases show first violations by turn 2. The model 'Sonnet 4.6' is confirmed as Claude Sonnet 4.6. The paper is dated April 30, 2026, which is consistent with the current date of June 29, 2026 — it is a recent preprint. The mechanistic label 'instruction arbitration' is confirmed as the paper's framing. Tasks are research ideation with structured briefs across 24 scientific domains. Kit implication (rule recall checks are insufficient; compliance requires task-reward alignment or external enforcement) follows directly from the finding.

---

### [key: instruction-hierarchy-conflict-48pct]
- evidence: empirical
- confidence: medium
- group: instruction-hierarchy
- sources: https://arxiv.org/abs/2502.08745

**Claim:** IHEval benchmark (arxiv 2502.08745), with 3,538 test cases across 9 tasks, found that the best open-source model achieves only 48% accuracy when resolving conflicts between system-level and user-level instructions. All models show sharp performance decline versus their baseline instruction-following when instructions conflict. Mechanism: models lack an internalized priority ordering for instruction sources — they treat system-prompt rules and user-turn requests as roughly peer-weight signals rather than applying a firm hierarchy. Scope: applies when instructions at different context levels (system vs. user, older vs. newer) contradict each other; models perform well when instructions agree. Kit-maker implication: a kit cannot rely on a system-prompt rule silently beating a contradicting user instruction; rules whose violation risk is high must be re-anchored in the system prompt turn by turn or backed by external enforcement that does not depend on model-internal hierarchy recognition.

**Verify note:** arxiv 2502.08745 is a plausible February 2025 ID within the knowledge window and the IHEval paper is consistent with the field's direction. The 48% figure cannot be independently pulled and confirmed in this session. The directional claim (models fail at system-vs-user instruction conflicts) is well-supported by 2024-2025 evaluation literature. The mechanism language ('peer-weight signals') is the claim-author's interpretive gloss on behavioral benchmark results, not a stated finding. Kit implication outpaces what an accuracy benchmark can directly support. Assign medium: trust the direction, treat the specific figure and mechanism framing as needing direct verification.

---

### [key: enterprise-instruction-gap-2x-model-spread]
- evidence: empirical
- confidence: low
- group: enterprise-compliance-rates
- sources: https://arxiv.org/abs/2601.03269

**Claim:** 'The Instruction Gap' study (arxiv 2601.03269) evaluated 13 LLMs on enterprise RAG scenarios and found a 2x spread in instruction violation counts: best performer (GPT-5 Medium) produced 660 violations; worst (Gemini 2.0-Flash) produced 1,330. Claude Sonnet 4 produced 731 violations, ranking best among non-reasoning models. Formatting rules were identified as a particularly vulnerable category: models 'fail to produce HTML-formatted responses despite explicit formatting requirements.' The study found that instruction compliance and response accuracy are statistically independent — high accuracy does not predict high compliance. Mechanism: behavioral rules compete with knowledge-retrieval and generation objectives when context is long; models sacrifice rule adherence rather than accuracy when under attentional pressure. Scope: enterprise RAG context with lengthy knowledge snippets; violation rates would differ in shorter-context settings. Kit-maker implication: rule compliance quality varies dramatically by model and cannot be assumed; kit design must include model-specific fallback stances for critical rules.

**Verify note:** arxiv 2601.03269 is a January 2026 ID, beyond the August 2025 knowledge cutoff — cannot be verified. The model names cited ('GPT-5 Medium', 'Claude Sonnet 4') are temporally inconsistent with a paper that could have predated the cutoff, a strong hallucination signal. Specific violation counts (660, 1,330) and model rankings are unverifiable. The statistical independence of compliance and accuracy is a plausible directional claim but has no verifiable empirical basis as cited here.

---

### [key: silent-gray-error-majority]
- evidence: consensus
- group: compliance-failure-detection
- sources: https://arxiv.org/pdf/2601.22290, https://arxiv.org/pdf/2602.02475

**Claim:** Agent failure mode research (multiple 2025 sources including MAESTRO, TRAIL, and the agentic failure mode survey) consistently finds that 75%+ of compliance failures manifest as 'silent gray errors' — plausible-looking outputs that are technically non-compliant but do not trigger explicit error signals or refusals. Mechanism: LLMs are trained to produce fluent, confident outputs; a failure to follow a formatting or behavioral rule generates a response that looks valid, not an error response. Scope: applies to behavioral rule violations in agent loops; safety refusals (jailbreaks, harmful content) follow different mechanics. Kit-maker implication: a kit that relies on inspecting whether the agent 'errored' will miss the majority of non-compliance; evaluation must include programmatic rule checks against outputs, not just error-log monitoring.

---

### [key: constraint-decay-30pt-assertion-loss]
- evidence: empirical
- confidence: low
- group: constraint-count-scaling
- sources: https://arxiv.org/abs/2605.06445

**Claim:** 'Constraint Decay: The Fragility of LLM Agents in Backend Code Generation' (arxiv 2605.06445) found that capable agent configurations lose 30 assertion pass-rate points on average as structural requirements accumulate from baseline to fully specified tasks. Convention-heavy frameworks (FastAPI, Django) produce substantially worse constraint compliance than minimal, explicit frameworks (Flask). Data-layer defects — incorrect query composition, ORM runtime violations — are the leading root cause. Mechanism: as constraint count and framework opacity increase, the agent's working model of 'what is required' becomes under-specified; each additional implicit constraint not stated in the prompt is a compliance miss waiting to happen. Scope: code generation; but the mechanism (implicit vs. explicit constraint specification) applies to behavioral rule kits. Kit-maker implication: every behavioral rule in a kit must be made explicit in the prompt; never rely on convention or 'the model knows this framework' to carry compliance of structural requirements.

**Verify note:** arxiv 2605.06445 is a May 2026 ID, well beyond the August 2025 knowledge cutoff — cannot be verified. The 30-point assertion-loss figure, framework-specific comparisons (FastAPI/Django vs Flask), and 'leading root cause' framing are all unsubstantiated. The kit implication (explicit constraint specification in prompts) is independently defensible as engineering advice, but the specific empirical claims rest on an unverifiable source.

---

### [key: non-determinism-15pct-audit-unreliability]
- evidence: empirical
- confidence: low
- group: compliance-measurement
- sources: https://arxiv.org/abs/2601.11783

**Claim:** 'The Stability Trap' (arxiv 2601.11783) found that LLM-based compliance auditors show verdict stability above 99% but reasoning stability dramatically lower: 19% for quantitative tasks (word counting), 35-83% for subjective evaluations, above 90% for objective entity extraction. Standard deviation of accuracy up to 15% across identical runs. Mechanism: the model learns to produce consistent verdict labels (yes/no) while the internal justification chain is stochastic; high label consistency masks fragile reasoning. Scope: applies when using an LLM as a judge for compliance of other LLM outputs; less relevant to programmatic rule checking. Kit-maker implication: do not use an LLM judge to audit compliance of quantitative or format rules; delegate those to deterministic code; reserve LLM judgment only for semantic evaluation where no programmatic checker is feasible.

**Verify note:** arxiv 2601.11783 is a January 2026 ID, beyond the knowledge cutoff. The specific stability figures (99% verdict stability, 19% reasoning stability, 35-83% range for subjective tasks) cannot be verified. The core insight — LLM judges produce stable verdict labels while their reasoning chains are stochastic — is a real and documented phenomenon in 2023-2024 LLM-as-judge critique literature, but the specific percentages attributed to this paper are unverifiable. Kit implication is sound practice independent of this paper.

---

### [key: xml-tags-20-40pct-consistency-improvement]
- evidence: consensus
- group: structural-formatting
- sources: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/use-xml-tags, https://www.dbreunig.com/2025/06/03/comparing-system-prompts-across-claude-versions.html

**Claim:** Anthropic's prompt engineering documentation (platform.claude.com) and multiple practitioner sources report that structured XML prompts produce 20-40% more consistent outputs than unstructured plain-text equivalents for Claude models. Claude's system prompt (23,000 tokens) uses sections wrapped in XML tags like <behavior_instructions>, <artifacts_info>, and <knowledge_cutoff>. Mechanism: Claude was trained on XML-structured data and learned to treat tagged sections as semantically discrete instruction regions, reducing bleed between content types; XML makes section boundaries unambiguous, reducing the model's need to infer structure from prose. Scope: specific to Claude; GPT models are officially recommended to use Markdown headers instead; the mechanism is model-training-specific. Kit-maker implication: for Claude-targeted kits, wrap behavioral rule sections in named XML tags rather than prose paragraphs or Markdown headers; treat tag names as semantic handles the model can use to route instructions.

---

### [key: positive-framing-near-perfect-negative-high-variance]
- evidence: consensus
- group: rule-phrasing
- sources: https://arxiv.org/abs/2603.16417, https://arxiv.org/abs/2604.07192

**Claim:** Research on constraint framing (multiple 2025 sources including the Via Negativa paper arxiv 2603.16417 and the constraint encoding study arxiv 2604.07192) reveals a context-dependent split: positively framed behavioral principles ('do X') achieve near-perfect adherence across all tested models when the behavior aligns with training defaults; negatively framed principles ('do not do Y') show high variance and are model-specific. However, negative constraints are structurally superior for training and alignment because prohibitions are discrete, finite, and independently verifiable — unlike positive preferences which require exhaustive specification. Mechanism: at inference time, positive framing activates an already-trained generation path (easy to follow); at training time, negative signals are cleaner learning targets because they converge to stable boundaries. Scope: the inference-time framing effect applies to behavioral rules in system prompts; the training advantage applies to RLHF/DPO, not to prompt engineering. Kit-maker implication: for prompt-based behavioral rules, frame as positive actions ('always state your assumptions before coding') rather than open-ended negations ('do not guess'); reserve negative framing ('never touch files outside the requested scope') for discrete, verifiable prohibitions where the model's default behavior is clearly opposite.

---

### [key: failure-mode-named-rules-41pct-to-11pct]
- evidence: anecdote
- group: rule-phrasing
- sources: https://www.aibuilderclub.com/blog/karpathy-claude-md-rules, https://www.techtimes.com/articles/316798/20260518/karpathy-inspired-claudemd-passes-220000-combined-github-stars-four-rules-that-stop-ai-breaking.htm

**Claim:** The Karpathy-inspired CLAUDE.md pattern (community-documented, 220,000+ combined GitHub stars; techtimes.com 2026-05-18, aibuilderclub.com) reports cutting Claude coding errors from 41% to 11% through four rules that each target a named failure mode: (1) Think Before Coding — addresses silent wrong assumptions; (2) Simplicity First — addresses speculative abstraction; (3) Surgical Changes — addresses unauthorized scope expansion; (4) Goal-Driven Execution — reframes instructions as success criteria rather than steps. Mechanism: naming a failure mode before it occurs ('you tend to make silent assumptions — state them explicitly') primes the model to recognize and interrupt the pattern; each rule is a meta-cognitive trigger, not a behavioral preference. Scope: practitioner report, not controlled study; the 41%→11% figure lacks methodology disclosure; applicable to coding tasks; untested in non-code behavioral rule contexts. Kit-maker implication: behavioral rules in a kit should name the specific failure mode they prevent (e.g., 'Models tend to skip this step when under token pressure — do not skip it'), not just state the desired behavior; failure-mode framing is the activation pattern, not generic imperatives.

---

### [key: claude-md-40kb-degradation-threshold]
- evidence: consensus
- group: rule-file-architecture
- sources: https://claudelint.com/rules/claude-md/claude-md-size, https://github.com/abhishekray07/claude-md-templates

**Claim:** Claude Code (Anthropic, documented at claudelint.com/rules/claude-md/claude-md-size) warns at 40KB CLAUDE.md file size and recommends preventive action at 30KB, citing performance degradation. The abhishekray07 CLAUDE.md templates recommend staying under 80 lines. CLAUDE.md instructions are delivered as user context (probabilistic compliance), not system prompt (deterministic). Mechanism: instructions in user context compete with conversation history and retrieved files for attention weight; larger instruction files dilute per-rule attention. The 40KB threshold is an empirically observed warning point, not a theoretically derived limit. Scope: specific to Claude Code's architecture where CLAUDE.md is injected as user context; system-prompt behavioral rules in API usage face a different (higher) effective limit. Kit-maker implication: a kit's behavioral rules file has a practical size ceiling around 30-40KB/80 lines in Claude Code; beyond this, rules should be split into path-scoped modules under .claude/rules/ activated by glob patterns, not appended to a monolithic instruction file.

---

### [key: instruction-attenuation-long-context]
- evidence: empirical
- confidence: medium
- group: constraint-positioning
- sources: https://arxiv.org/abs/2601.03269, https://www.morphllm.com/lost-in-the-middle-llm

**Claim:** Multiple studies (The Instruction Gap arxiv 2601.03269; Lost in the Middle literature; Agent Drift arxiv 2601.04170) converge on 'instruction attenuation' as a failure mode: behavioral rules placed in the middle of a long context window receive substantially less attention weight than those at the start or end, consistent with the U-shaped attention pattern. A 2024 study measured 30%+ accuracy drop when a relevant document moved from position 1 to position 10 in a 20-document context. Critically, however, one study found no consistent relationship between instruction position and compliance rates when looking specifically at rule position within a multi-rule list (as opposed to document position in long RAG contexts). Mechanism: the U-shaped attention effect operates at the scale of documents or sections; within a single compact instruction block, position within the block shows weaker effects. Scope: strong for document-scale positioning; weak for rule ordering within a short instruction block. Kit-maker implication: place the system prompt (and any CLAUDE.md) at the top of context, not injected mid-conversation; but do not over-engineer rule ordering within a compact rule set — the gains are marginal.

**Verify note:** The foundational 'Lost in the Middle' paper (Liu et al.) is verified, widely cited, and its U-shaped attention finding is well-replicated — the 30%+ accuracy drop from position 1 to 10 in a 20-document context is consistent with its findings. However, two of the three cited sources (arxiv 2601.03269 and 2601.04170) are January 2026 IDs beyond the cutoff, and morphllm.com is an unverified third-party URL. The 'multi-study convergence' framing is inflated by two unverifiable sources. The within-block ordering nuance is a reasonable engineering inference but the contradicting 'one study' finding cannot be checked. Medium: anchor claim is solid, convergence framing overclaims.

---

### [key: multi-turn-behavioral-drift-bounded-not-monotonic]
- evidence: empirical
- confidence: low
- group: multi-turn-drift
- sources: https://arxiv.org/abs/2510.07777, https://arxiv.org/abs/2601.04170

**Claim:** 'Drift No More? Context Equilibria in Multi-Turn LLM Interactions' (arxiv 2510.07777) and related research found that behavioral drift in multi-turn conversations stabilizes at a finite level rather than monotonically increasing, and can be shifted downward by lightweight interventions such as goal reminders. Research on multi-agent systems (arxiv 2601.04170) identified three drift types: semantic (progressive deviation from original intent), coordination (breakdown in consensus), and behavioral (emergence of unintended strategies). 75.93% of multi-turn conversations contain at least one compliance failure. Mechanism: drift reflects attention decay to system prompts as conversation history grows; the model's effective context increasingly prioritizes recent user turns over initial setup. Scope: applies in extended conversations (5+ turns); short interactions show minimal drift. Kit-maker implication: a kit deployed in long-horizon agent loops must include periodic rule re-injection or 'goal reminder' prompts; treat the initial system prompt as priming, not as a persistent anchor for all subsequent behavior.

**Verify note:** Both cited sources (arxiv 2510.07777 October 2025; arxiv 2601.04170 January 2026) are beyond the August 2025 knowledge cutoff and cannot be verified. The 75.93% compliance-failure figure is suspiciously precise for a behavioral survey. The 'context equilibria' mechanistic claim (drift stabilizes rather than grows monotonically) is a specific assertion requiring longitudinal conversation analysis that cannot be assessed. Multi-turn drift direction is supported by pre-cutoff alignment literature; the specific 'bounded not monotonic' mechanism and all cited figures are unverifiable.

---

### [key: three-tier-global-project-local-hierarchy]
- evidence: consensus
- group: rule-file-architecture
- sources: https://github.com/abhishekray07/claude-md-templates, https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/use-xml-tags

**Claim:** Practitioner consensus in the Claude Code ecosystem (abhishekray07/claude-md-templates, Anthropic docs) has converged on a three-tier instruction hierarchy: global (~/.claude/CLAUDE.md, personal cross-project preferences), project (.claude/CLAUDE.md, team-shared conventions committed to git), and local (.claude/CLAUDE.local.md, individual overrides, gitignored). Path-scoped rules under .claude/rules/ activate via YAML frontmatter glob patterns for specific file types. Mechanism: hierarchical specificity allows the model to apply only relevant rules per context, reducing both instruction volume (limiting attenuation) and rule-conflict probability (limiting IHEval-type conflict failures). Scope: Claude Code-specific architecture; the principle generalizes but the file structure does not directly translate to API-based agents. Kit-maker implication: a kit should ship with a pre-structured three-tier layout; rules that apply globally should be separated from project-specific rules at the file-system level, not just commented differently within one file.

---

### [key: outcome-statement-vs-step-instruction-compliance]
- evidence: consensus
- group: rule-phrasing
- sources: https://arxiv.org/abs/2603.03116, https://www.aibuilderclub.com/blog/karpathy-claude-md-rules

**Claim:** The Karpathy-inspired CLAUDE.md pattern and the PAE (Procedure-Aware Evaluation) research (arxiv 2603.03116) converge on a key distinction: providing success criteria ('write tests that reproduce the bug, then make them pass') rather than step-by-step instructions produces lower goal-drift and higher adherence to intent. PAE research formalizes that current benchmarks evaluate task completion but miss 'corrupt success' — agents completing a task while violating procedural constraints. Mechanism: step-by-step instructions shift model attention to next-step prediction, causing early steps to be forgotten by the time later steps are reached; outcome statements keep the goal in active context throughout generation. Scope: practitioner claim is anecdote-level; PAE framework is empirical but measures trajectories, not the specific outcome vs. steps comparison. Kit-maker implication: behavioral rules should specify completion conditions (what the world looks like when the rule is satisfied) rather than procedure steps; this aligns with both the CLAUDE.md goal-driven pattern and the done-criteria principle in the kit's own CLAUDE.md.

---

### [key: hot-fix-system-prompt-vs-training-baked]
- evidence: anecdote
- group: rule-lifecycle
- sources: https://www.dbreunig.com/2025/06/03/comparing-system-prompts-across-claude-versions.html

**Claim:** Analysis of Claude system prompt evolution across versions (dbreunig.com, June 2025) found that Anthropic uses the system prompt as a 'hot-fix layer' — adding targeted behavioral corrections for specific failure modes before they can be addressed in the next training cycle. Claude 4.0's system prompt removed three hot-fixes present in Claude 3.7's, indicating they were subsequently baked into model weights. The system prompt occupies approximately 23,000 tokens (~11% of available context). Mechanism: system prompt instructions target specific observed failure modes with direct behavioral negation ('Claude never starts a response by saying...'); this is faster to deploy than retraining but competes with context budget and creates drift risk as the model is updated. Scope: applies to production deployments by Anthropic; the hot-fix pattern is directly replicable in kit system prompts. Kit-maker implication: kit behavioral rules should be reviewed against each model version — rules that worked as hot-fixes for one model version may be unnecessary (or harmful, if they conflict with baked-in behaviors) after a model update.

---

### [key: deterministic-code-checker-over-llm-judge]
- evidence: empirical
- confidence: medium
- group: compliance-measurement
- sources: https://arxiv.org/abs/2601.11783

**Claim:** The Stability Trap paper (arxiv 2601.11783) and practitioner consensus in compliance auditing recommend: 'Delegate all deterministically verifiable logic to code, while reserving LLM judges for complex semantic evaluation.' This is because LLM judges achieve 99% verdict stability but only 19% reasoning stability on quantitative tasks, creating audit results that appear reliable but are not. Mechanism: LLMs are optimized for plausible output generation, not deterministic rule verification; they can produce correct verdicts via shortcut pattern-matching while their reasoning is unstable. Scope: applies when compliance criteria are machine-checkable (word counts, format presence, keyword inclusion); semantic criteria require LLM judgment. Kit-maker implication: any kit mechanism for self-checking rule compliance must route verifiable rules to programmatic checkers (regex, JSON schema, string matching) and route only genuinely ambiguous semantic judgments to an LLM verifier — mixing them produces spuriously confident but unreliable audit trails.

**Verify note:** The engineering principle — route machine-checkable rules to deterministic code, route semantic judgment to LLM judges — is independently well-supported by 2023-2024 LLM-as-judge critique literature and does not require the cited paper. The 19% reasoning stability figure depends on arxiv 2601.11783, which is January 2026 and unverifiable. Medium: the recommendation is correct and defensible; the specific empirical figure attributed to it is not verified and should not be cited as established evidence.

---

## Null results
- IFEval-specific primacy/recency position within multi-rule lists: the search confirmed IFEval measures constraint types but found no controlled study isolating rule-position-within-a-list as a compliance factor independent of document-level positioning
- Empirical comparison of imperative phrasing forms (NEVER vs DO NOT vs AVOID): no controlled study found directly comparing these three phrasing forms; the constraint encoding paper addressed positive vs negative framing but not among negative variants

## New angles surfaced
- Constraint conflict detection within a single rule set: when two rules in the same kit contradict each other, what is the model's resolution behavior? IHEval shows conflict resolution at 48% for system-vs-user conflicts; intra-system-prompt conflicts are unstudied.
- Rule retirement cadence: given that Anthropic removes hot-fixes from system prompts after training absorbs them, what framework should kit designers use to decide when a behavioral rule is no longer necessary or has become counterproductive against a newer model?
- Programmatic rule compliance checker design: given the finding that LLM judges are unreliable for verifiable rules, what specific checker architectures (regex, schema, semantic embeddings) map to which rule types? This is an engineering gap not covered by the research found.
- Scope-based rule activation via glob/path patterns: the three-tier architecture uses path matching to load rules conditionally; no empirical study examines whether conditional activation improves compliance compared to loading all rules always — the hypothesis is that lower rule volume per context improves per-rule compliance.

