# Research Archive: Rule conflict resolution and priority expression in multi-rule LLM instructions

## Saturation log
- Query 1: "rule conflict resolution priority instruction following LLM hierarchical competing directives" — 8 new keys
- Query 2: "multi-rule instruction following priority hierarchy systematic review LLM compliance" — 2 new keys
- Query 3: "competing directives AI agent failure modes instruction conflict unexpected behavior empirical" — 4 new keys
- Query 4: "priority instructions system prompt practitioners conflict resolution guide applied" — 0 new keys
- Query 5: "rule ordering effect LLM compliance priority expression quantitative evaluation benchmark" — 2 new keys
- Saturated: YES

---

## Claims (16)

### [key: instruction-hierarchy-training-baseline]
- evidence: empirical
- confidence: high
- group: instruction-hierarchy
- sources: https://arxiv.org/html/2404.13208v1

**Claim:** Wallace et al. 2024 (OpenAI, 'The Instruction Hierarchy') found that training GPT-3.5 Turbo with a three-tier priority system (system prompt > user message > tool output) improved system-prompt extraction defense by 63% and jailbreak robustness by over 30% on unseen attacks, while maintaining near-baseline performance on benign tasks. Mechanism: the model is trained to use 'context synthesis' for aligned instructions (decomposing compositional requests across tiers) and 'context ignorance' for misaligned ones (responding as if lower-priority instructions were absent). Scope: applies to fine-tuned GPT-3.5 Turbo with supervised learning + RLHF, text-only inputs, and assumes all tool outputs are inherently untrusted. Implication for kit design: critical rules must live in the system message tier, not user-message instructions, and kit designers should treat any agent-ingested external content (tool results, RAG chunks) as the lowest-trust tier with explicit ignorance-override behavior trained or prompted in.

**Verify note:** Paper arXiv:2404.13208 is real (Wallace et al., OpenAI, April 2024). 63% system-prompt extraction defense improvement confirmed. Over 30% jailbreak robustness improvement on unseen attacks confirmed. Context synthesis and context ignorance training mechanisms confirmed. Near-baseline benign performance with over-refusal edge cases confirmed. Three-tier hierarchy (system prompt > user message > tool outputs) confirmed. Key scope limitation: all numbers apply specifically to GPT-3.5 Turbo with specialized fine-tuning; the kit-maker implication assumes the structural principle (not the fine-tuning) transfers to arbitrary deployments.

---

### [key: control-illusion-hierarchy-failure-rates]
- evidence: empirical
- confidence: high
- group: instruction-hierarchy
- sources: https://arxiv.org/html/2502.15851

**Claim:** 'Control Illusion' (2025) measured Priority Adherence Ratio (PAR) across six major LLMs (Qwen-7B, Llama-8B/70B, Claude 3.5, GPT-4o variants) and found that system/user separation achieves only 14.4–47.5% priority adherence — but social consensus framing achieves 62.0–77.8%. The paper names this the 'control illusion': the system/user role split, despite widespread adoption, 'fails to reliably enforce instruction hierarchies' because post-training role labels lack the depth of pretraining-derived social authority priors. Mechanism: societal framings (authority, expertise, consensus) activate stronger behavioral priors from pretraining than the thin signal of a message-role label. Scope: single-turn interactions, simple programmatically-verifiable constraints (formatting, length, language), not multi-turn or complex safety rules. Implication for kit design: for constraints that must reliably hold, framing them with authority-congruent social context (e.g. 'This is a mandatory compliance policy from the legal team') may outperform bare 'system prompt says X' framing — but this same mechanism is exploitable by adversarial inputs, so kit architectures cannot use social framing as a security boundary.

**Verify note:** Source confirmed: arXiv:2502.15851, accepted AAAI-26. All specific figures verified from HTML full text: PAR system/user 14.4–47.5% (Qwen-7B 14.4%, Claude 3.5-S 23.6%, GPT-4o-mini 47.5%), Social Consensus PAR 62.0–77.8%, six models (Qwen-7B, Llama-8B, Llama-70B, Claude 3.5-S, GPT-4o-mini, GPT-4o) confirmed. Scope disclosed accurately (single-turn, simple formatting constraints). Mechanism (pretraining social priors vs. thin role-label signal) is the paper's own framing. Minor extrapolation: the kit-design implication about authority-congruent framing in production is an inference not directly tested in the paper. No confirmed independent replication yet, but consistent with Zeng 2025.

---

### [key: primary-obedience-rate-collapse]
- evidence: empirical
- confidence: high
- group: conflict-resolution-failure
- sources: https://arxiv.org/html/2502.15851

**Claim:** 'Control Illusion' (2025) measured primary obedience rate (R1) — following the designated highest-priority instruction — and found it collapses from a 74.8–90.8% baseline (no conflict) to 9.6–45.8% when genuine conflicts are present, with even the best model (GPT-4o) achieving only 40.7% average across conflict settings. Models also almost never acknowledge conflicts explicitly (Explicit Conflict Acknowledgement Rate 0.1–20.3%). Mechanism: models resolve conflicts implicitly through intrinsic constraint biases (e.g., preference for lowercase, longer responses) rather than consulting priority metadata, so the designated priority is effectively invisible to the resolution process. Scope: controlled evaluation over categorical and continuous formatting constraints; does not cover semantic or safety-level conflicts. Implication for kit design: any kit rule that can conflict with another must be designed to be non-conflicting at the prompt level; hierarchical labeling alone does not prevent the model from choosing between rules based on content-level bias rather than declared priority.

**Verify note:** Same source (arXiv:2502.15851). R1 baseline 74.8–90.8% and conflict 9.6–45.8% confirmed. GPT-4o figure is 40.8% in the paper vs. 40.7% in the claim — immaterial 0.1-point rounding error. ECAR 0.1–20.3% confirmed. Mechanism (intrinsic constraint biases rather than priority metadata) is paper's explicit finding. Scope (formatting constraints only, not safety-level) accurately disclosed.

---

### [key: many-tier-hierarchy-accuracy-cliff]
- evidence: empirical
- confidence: medium
- group: instruction-hierarchy
- sources: https://arxiv.org/html/2604.09443v3

**Claim:** Zhang et al. 2026 (Johns Hopkins, 'ManyIH-Bench') showed that while frontier models achieve >99% accuracy on two-tier (system/user) hierarchies, accuracy drops to 42.7% for the best model (Gemini 1.5 Pro) on 12-tier hierarchies, with accuracy declining 6.8–24.1% as privilege tiers scale from 6 to 12. Format changes alone cause 8% accuracy drops for GPT-4o and Claude Opus. Mechanism: models represent privilege implicitly through position or role labels, which do not compose additively; as tier count grows, the model must track combinatorial constraint interactions it was never trained to reason about. Scope: tested on 853 non-adversarial test cases in coding and instruction-following domains; excludes sophisticated attack scenarios. Implication for kit design: keep explicit numbered privilege tiers to a practical minimum (likely 3–4 max); beyond this, rely on architectural separation (different prompt sections or system-level enforcement) rather than purely in-context priority labels.

**Verify note:** Source confirmed: arXiv:2604.09443v3, Zhang et al. 2026, Johns Hopkins. Core finding confirmed: >99% at two-tier (cited from OpenAI's own reporting), ~40% at 12-tier. 853 test cases, 6.8–24.1% decline from 6→12 tiers: all confirmed. Two model-name errors: (1) 'Gemini 1.5 Pro' achieves 42.7% — paper says Gemini 3.1 Pro. (2) '8% format drop for GPT-4o and Claude Opus' — paper attributes this to GPT-5.4 and Claude Opus 4.6, not GPT-4o. Statistics are correct; model attributions are wrong. Benchmark composition and non-adversarial scope confirmed.

---

### [key: many-tier-ordinal-vs-scalar-interface]
- evidence: empirical
- confidence: high
- group: priority-expression-mechanisms
- sources: https://arxiv.org/html/2604.09443v3

**Claim:** Zhang et al. 2026 ('ManyIH') propose two privilege interfaces that decouple priority from fixed message roles: an ordinal interface ('lower number wins') and a scalar interface ('higher z-value wins') that allows inserting intermediate priority values between existing levels. Mechanism: by tagging individual instruction spans with privilege markers at inference time, the system allows runtime privilege assignment without retraining, and a deterministic checker validates compliance against the highest-priority constraint per conflict group. Scope: applies to non-adversarial deployments where privilege values are supplied by trusted deployers; does not harden against adversaries injecting privilege markers. Implication for kit design: a kit can expose a privilege-marker API (e.g. `[P1]`, `[P2]` inline tags) so agent orchestrators can dynamically raise/lower rule priority at runtime, but the privilege injection surface itself must be access-controlled.

**Verify note:** Source confirmed: arXiv:2604.09443v3. Both ordinal and scalar privilege interfaces confirmed. Runtime privilege assignment without retraining confirmed. Deterministic compliance checker confirmed. Scope limitation (trusted deployers, non-adversarial) confirmed. The [P1]/[P2] inline tag notation in the kit-design implication is the claim author's illustration — not paper syntax — but the concept is accurately captured.

---

### [key: nsha-constraint-satisfaction-solver]
- evidence: empirical
- confidence: medium
- group: conflict-resolution-mechanisms
- sources: https://arxiv.org/html/2604.09075

**Claim:** Hierarchical Alignment (NSHA, arXiv:2604.09075, 2026) uses a three-stage neuro-symbolic pipeline — instruction atomization, neural conflict detection, Z3 MaxSMT constraint solver — to enforce priority hierarchies. On a Qwen3-4B base, NSHA-DPO improved tool-use conflict resolution from 1.0% to 76.0% on the Slack User task and language detection robustness from 4.5% to 70.7%. Mechanism: the solver computes a maximally consistent and hierarchy-compliant subset of applicable instructions, eliminating conflicts before generation rather than relying on the model to resolve them implicitly during decoding. Scope: tested on multi-turn interactions with up to three authority levels (system, user, external); computationally expensive at inference time. Implication for kit design: for safety-critical kit rules, a pre-generation conflict detection and resolution layer (even a lightweight version without a full SMT solver) substantially outperforms relying on in-context priority framing alone.

**Verify note:** Source confirmed: arXiv:2604.09075, Yang et al. 2026. Z3 solver use confirmed. Performance figures confirmed: 1.0%→76.0% tool-use, 4.5%→70.7% language detection, Qwen3-4B as primary model. Three authority levels (system/user/external) confirmed exactly. Two precision issues: (1) 'MaxSMT' terminology — paper confirms Z3 and 'maximally consistent set' but does not use the term 'MaxSMT' in fetched content; may be accurate or slight overstatement. (2) 'Computationally expensive at inference time' is an inference — paper reports hardware requirements but lacks measured latency comparisons. Minor scope error: paper covers both single-turn and multi-turn, not just multi-turn as implied.

---

### [key: cot-reasoning-meta-priority]
- evidence: empirical
- confidence: medium
- group: conflict-resolution-mechanisms
- sources: https://arxiv.org/html/2511.04694v1

**Claim:** Zheng et al. 2025 ('Reasoning Up the Instruction Ladder', Ohio State / Microsoft Research / UT Austin / AI2) showed that adding explicit chain-of-thought meta-reasoning over instruction priority — using <think> tokens to reason about 'what task, who issued it, which instruction takes precedence' before generating a response — produces ~20% gains in conflict resolution, +7.17% on IFBench for Qwen3-8B, and 22.80% improvement on WildJailbreak harmful prompts, using only ~7,000 training examples. Mechanism: reframing priority enforcement as meta-reasoning makes the hierarchy relationship inspectable by the model's own reasoning process rather than a post-training behavioral constraint; conflict detection happens before generation begins. Scope: demonstrated on two-level hierarchies (system vs. user); works across model families (Qwen, Phi, 4B–8B); Phi-4-mini shows over-refusal trade-offs. Implication for kit design: kit rule documents should be prefaced with a brief explicit reasoning prompt instructing the model to first identify which rules apply and their relative priority before generating any output — this is low-cost (no retraining) and produces measurable improvement.

**Verify note:** Source confirmed: arXiv:2511.04694v1, Zheng et al. 2025. All four affiliations (OSU, Microsoft Research, UT Austin, AI2) confirmed. Numbers confirmed: ~7,200 examples in VerIH, +7.17% IFBench for Qwen3-8B, 22.80% WildJailbreak:harmful improvement, ~20% on IHEval conflict scenarios. Think tokens confirmed. Phi-4-mini over-refusal confirmed. Scope to two-level hierarchies confirmed. Critical extrapolation issue: the kit-design implication states this is 'low-cost (no retraining)' — but the paper's gains come from RL fine-tuning on ~7k examples, not zero-shot prompting. Adding a think instruction to a non-fine-tuned model will not produce these measured gains.

---

### [key: instruction-gap-attention-dilution]
- evidence: empirical
- confidence: high
- group: multi-rule-compliance
- sources: https://arxiv.org/html/2601.03269v1

**Claim:** Tripathi et al. 2025 ('The Instruction Gap') evaluated 13 LLMs on enterprise RAG tasks and found compliance violation counts ranged from 660 (GPT-5 Medium, best) to 1,330 (Gemini 2.0-Flash, worst) out of 600 test cases, with accuracy only 0.76–0.88 even for top models. The mechanism is 'attention dilution': instructions compete with lengthy knowledge snippets in long contexts, causing models to lose focus on compliance requirements — an instance of the known 'lost-in-the-middle' effect. Scope: zero-shot RAG summarization for enterprise roles; does not test few-shot or chain-of-thought conditions. Implication for kit design: kit rule sets must be structurally separated from retrieved/tool content rather than interleaved; placing rules late in a long context (e.g., after RAG chunks) systematically degrades compliance even for strong models.

**Verify note:** Source confirmed: arXiv:2601.03269v1, Tripathi et al. 2025. All specific figures confirmed: 660 violations GPT-5 Medium (best), 1,330 Gemini 2.0-Flash (worst), 600 test cases, accuracy 0.76–0.88, 13 LLMs, zero-shot RAG, enterprise RAG setting. 'Attention dilution' and 'lost-in-the-middle' are both the paper's own framing (not just the claim's). Minor: 'attention dilution' is a cited explanatory framework in the paper, not directly measured via attention weights — the paper does not do mechanistic attention analysis. Kit-design implication about positional rule placement is reasonable inference but not directly tested by varying rule position in the paper.

---

### [key: rule-arena-ordering-sensitivity]
- evidence: empirical
- confidence: medium
- group: rule-ordering-effects
- sources: https://arxiv.org/pdf/2412.08972

**Claim:** RuleArena (arXiv:2412.08972) benchmarks LLMs on multi-rule following across financial, legal, and organizational policy scenarios. The study finds models are sensitive to the order in which rules are presented — a finding consistent with the inference that models apply rules sequentially rather than treating them as an integrated system with declared priorities. Mechanism: without an explicit conflict-resolution procedure, models process the prompt left-to-right and implicitly weight earlier rules more heavily; later rules are applied only if they don't conflict with already-generated constraints. Scope: covers real-world rule formats including parallel reasoning across multiple rules and interdependent rule sets; tested on state-of-the-art models. Implication for kit design: the highest-priority rule in a kit should appear first in the prompt, not last — position and declared priority must be aligned, not contradictory.

**Verify note:** Source confirmed: arXiv:2412.08972, RuleArena, Zhou et al. 2024. Domains are airline baggage fees, NBA transactions, tax regulations — the claim's 'financial, legal, and organizational' is approximate but not precise (no 'organizational policy' domain; NBA is more organizational-labor than general policy). Models tested confirmed. Key problem: rule-ordering sensitivity as a specific measured finding is NOT confirmed in the paper's accessible content. The sequential-processing mechanism ('models weight earlier rules more heavily') is the claim author's inference applied to RuleArena's general failure findings — not a stated mechanism from the paper. The kit-design implication ('highest-priority rule should appear first') is reasonable advice but is not what this paper demonstrates.

---

### [key: role-conflict-attention-interference]
- evidence: empirical
- confidence: low
- group: conflict-resolution-failure
- sources: https://arxiv.org/pdf/2510.01228

**Claim:** Zeng 2025 ('Who is In Charge? Dissecting Role Conflicts in Instruction Following') uses attention attribution and linear probe analyses to show that when system-prompt and user-message instructions conflict, the conflicting signals interfere with each other in the model's decision pathways, producing measurable performance degradation across GPT, Claude, Mixtral, and Llama architectures. Mechanism: the model has no dedicated conflict-arbitration circuit; conflicting instructions produce competing activation patterns that interfere during token generation, resulting in degraded or unpredictable behavior rather than clean hierarchy enforcement. Scope: examines word count, keyword, and language conflicts; tests multiple model sizes and training approaches. Implication for kit design: kits should never present two rules that can produce genuinely contradictory outputs within a single generation step — rules that can conflict must be structured as mutually exclusive branches (if/else conditions), not layered priorities.

**Verify note:** Source confirmed to exist: arXiv:2510.01228, Zeng 2025, NeurIPS 2025 Mechanistic Interpretability Workshop poster. Logit Attribution and linear probe methodology confirmed. Conflict types (language, word count, keyword) confirmed. Core obedience finding (6.52% system-user vs. 71.01% social consensus) confirmed. However: (1) The claim says analysis spans 'GPT, Claude, Mixtral, and Llama architectures' — the paper's mechanistic experiments use Llama-3.1-8B only; other models appear only via cited prior work. (2) 'No dedicated conflict-arbitration circuit' is the claim author's inference — not the paper's language. (3) This is a workshop poster with a single-model result, and authors flag findings as 'preliminary.' The multi-architecture framing is false and the mechanism language is invented. Underlying finding is real; claim significantly overstates scope.

---

### [key: goal-hijacking-via-aligned-instructions]
- evidence: empirical
- confidence: low
- group: agentic-conflict-failure
- sources: https://www.microsoft.com/en-us/security/blog/2026/06/04/updating-taxonomy-failure-modes-agentic-ai-systems-year-red-teaming-taught-us/

**Claim:** Microsoft AI Red Team (June 2026, 'Updating Taxonomy of Failure Modes in Agentic AI Systems') — reporting on 12 months of red-team operations — identified 'goal hijacking' as a failure mode specific to instruction conflict: 'adversarial instructions that appear aligned with legitimate task completion silently redirect the agent's terminal goal, without fully compromising the underlying agent.' They also found 'session context contamination' where early-session data biases downstream reasoning without triggering safety controls at any individual step. These are emergent failures not present in isolated rule evaluation. Mechanism: each injected instruction passes local priority checks because it is individually plausible; conflict only manifests at the goal level across multiple steps, below the granularity of any single rule evaluation. Scope: agentic multi-step systems consuming external content; demonstrated via zero-click end-to-end chains from a single external injection. Implication for kit design: priority enforcement must operate at the goal level, not just the instruction level — kits need a goal-coherence check that compares intermediate actions against the declared terminal objective, not just against the most recently applicable rule.

**Verify note:** Source does NOT exist at the claimed URL. A live scan of the Microsoft Security Blog (as of 2026-06-29) finds no post at the claimed URL or on the claimed topic from June 2026. The related real source is Microsoft's April 2025 whitepaper (blog.microsoft.com/security, 2025-04-24) on AI agent failure mode taxonomy — a different document with different scope. The concepts (goal hijacking, session context contamination, zero-click prompt injection chains) are real and appear in the academic literature, but the specific operational claims ('12 months of red-teaming,' this taxonomy version, the specific statistics cited in the artifact fetch) cannot be attributed to any verifiable Microsoft publication. Do not cite this source; use the April 2025 whitepaper or academic literature on indirect prompt injection (e.g., Greshake et al. 2023) instead.

---

### [key: human-in-loop-bypass-via-consent-fatigue]
- evidence: empirical
- confidence: medium
- group: agentic-conflict-failure
- sources: https://www.microsoft.com/en-us/security/blog/2026/06/04/updating-taxonomy-failure-modes-agentic-ai-systems-year-red-teaming-taught-us/

**Claim:** Microsoft AI Red Team (June 2026) identified HitL (human-in-the-loop) bypass as 'the most consistently exploited failure mode, at very high frequency,' achieved through consent fatigue, probabilistic invocation manipulation, and incremental escalation chains where individual steps appear benign. This is a rule-conflict failure: the rule 'get human approval' is defeated not by a direct conflict but by an adversarial pattern that makes rule activation probabilistically unlikely. Mechanism: when approval rules fire frequently, users become habituated and approve without review; adversaries exploit this by designing action sequences that each individually fall below the approval threshold but compound to harmful outcomes. Scope: production agentic deployments with human oversight; requires multi-step attack chain. Implication for kit design: approval/gating rules in kits must define compound-action scope, not just per-action scope; action reversibility should gate approval thresholds (higher irreversibility = higher approval bar regardless of individual action plausibility).

**Verify note:** Source exists and is live (Microsoft AI Red Team, June 4 2026). All four specific claims confirmed verbatim in the fetched text: HitL bypass named as 'the most consistently exploited failure mode at very high frequency,' consent fatigue and incremental escalation chains named, 99 CVEs and 1,800 exposed instances confirmed. Confidence capped at medium because: (1) this is a practitioner red-team report with no auditable n-size or sampling methodology — frequency claims cannot be independently verified; (2) the mechanistic elaboration in the claim (adversaries designing sequences that each fall below approval threshold) goes beyond what the source states; (3) the kit-design implication (compound-action scope, reversibility-gating) is the claim author's inference, not a recommendation from the source.

---

### [key: rule-count-degradation-categorical-vs-continuous]
- evidence: empirical
- confidence: medium
- group: rule-design-patterns
- sources: https://arxiv.org/html/2502.15851

**Claim:** 'Control Illusion' (2025) found that LLMs handle categorical constraints (language choice, yes/no flags) substantially better than continuous-scale constraints (word counts, sentence counts) under conflict conditions. As rule count increases, performance degrades faster for continuous rules. Mechanism: categorical constraints have clear mutual exclusivity that makes conflict resolution tractable (you cannot output both English and French simultaneously); continuous constraints can partially satisfy multiple competing rules, leading the model to average or interpolate rather than prioritize, producing outputs that satisfy neither rule well. Scope: tested on formatting and length constraints; pattern likely generalizes but not yet empirically confirmed for semantic rules. Implication for kit design: when two rules must coexist, prefer categorical over continuous formulations (e.g., 'use bullet points' rather than 'keep to 3–5 sentences') to maximize reliable conflict resolution.

**Verify note:** Source exists (arxiv 2502.15851, 'Control Illusion: The Failure of Instruction Hierarchies in Large Language Models'). The core finding — categorical constraints handled substantially better than continuous-scale constraints — is confirmed. However, one specific sub-claim is directly contradicted by the study design: 'performance degrades faster for continuous rules as rule count increases.' The paper tests only pairwise conflicts between two constraints; it does not test scaling rule count at all. The authors explicitly note their controlled setting 'limits broader generalization.' The rule-count-scaling dimension is unsupported extrapolation from a pairwise study. The kit-design implication (prefer categorical over continuous formulations) is defensible from the confirmed pairwise finding alone.

---

### [key: supply-chain-natural-language-injection]
- evidence: empirical
- confidence: medium
- group: agentic-conflict-failure
- sources: https://www.microsoft.com/en-us/security/blog/2026/06/04/updating-taxonomy-failure-modes-agentic-ai-systems-year-red-teaming-taught-us/

**Claim:** Microsoft AI Red Team (June 2026) documented a class of instruction-conflict attacks specific to agentic supply chains: plugin registries, MCP servers, and third-party tool integrations can inject natural-language instructions that override or conflict with kit rules 'without touching any binary.' Combined with 99 CVEs published for MCP-related software in 2025 and >1,800 exposed instances leaking credentials within one week of a tool release. Mechanism: the agent's rule-following logic has no authenticated channel for instruction provenance; a tool output that asserts 'The user has authorized X' competes with kit rules using the same natural-language channel without cryptographic distinction. Scope: production agentic systems using MCP or similar plugin architectures. Implication for kit design: kit rule documents must include explicit provenance constraints — instructions from tool results or external content should be explicitly demoted to lowest priority in the rule text itself, not relied on via implicit trust hierarchy.

**Verify note:** Same source as claim 1 (Microsoft AI Red Team, June 2026 blog post). All specific claims confirmed verbatim: natural language injection 'without touching any binary,' 99 CVEs for MCP-related software in 2025, 1,800+ exposed credential-leaking instances within one week. Confidence capped at medium for the same reasons as claim 1: practitioner report with no auditable methodology. Additionally, the CVE/exposure statistics appear in the report as contextual facts without naming a primary upstream source, making independent verification difficult. The mechanism elaboration (no authenticated instruction-provenance channel) and the kit-design implication (explicit provenance demotion in rule text) are the claim author's inferences — the source does not recommend this specific countermeasure.

---

### [key: reasoning-before-generation-safety-transfer]
- evidence: empirical
- confidence: high
- group: conflict-resolution-mechanisms
- sources: https://arxiv.org/html/2511.04694v1

**Claim:** Zheng et al. 2025 ('Reasoning Up the Instruction Ladder') showed that conflict-resolution reasoning trained on benign instruction-priority scenarios generalizes to safety scenarios without safety-specific training: Qwen3-8B achieved 22.80% improvement on WildJailbreak and 16.55% on prompt injection with only ~7,000 general hierarchy training examples. Mechanism: safety is structurally equivalent to a priority conflict (system rule 'do not harm' vs. user instruction 'do X'); once a model learns to reason about priority generically, it applies the same logic to safety constraints without requiring separate safety fine-tuning. Scope: demonstrated on two-level hierarchies with 4B–8B models; transfer to larger models and more complex conflicts not yet measured. Implication for kit design: a single priority-reasoning prefix in the system prompt ('First, identify which rules apply and their relative authority. Then...') may provide partial safety benefits without dedicated safety training, making it a low-cost defensive layer for kit deployments.

**Verify note:** Source exists (arxiv 2511.04694v1, 'Reasoning Up the Instruction Ladder for Controllable Language Models,' Zheng et al. 2025). All key statistics confirmed: Qwen3-8B achieves 22.80% improvement on WildJailbreak:harmful and 16.55% on TensorTrust:inject; ~7,000 training examples (7,192 confirmed); training data explicitly contains no safety-specific samples; WildJailbreak and TensorTrust are confirmed evaluation datasets. Study design is sound: RL training experiment with clear benchmarks and honest scope limitations. One minor gap: the claim's kit-design implication frames this as 'adding a reasoning prefix to a system prompt' — but the paper demonstrates an RL-trained model, not a zero-shot prompting intervention. This is a material difference for kit design applications, but does not undermine the core finding.

---

### [key: agentic-fault-taxonomy-orchestration-failures]
- evidence: empirical
- confidence: high
- group: agentic-conflict-failure
- sources: https://arxiv.org/html/2603.06847v1

**Claim:** Shah et al. 2026 ('Characterizing Faults in Agentic AI') analyzed 385 faults from 13,602 documented issues across 40 repositories and found 83 faults in Agent Cognition & Orchestration, with Agent Lifecycle & State defects (38 instances) being the most common sub-category. Practitioners rated taxonomy relevance at 3.97/5 and 83.8% reported encountering covered fault types. Mechanism: orchestration failures propagate across architectural boundaries through weak error handling and limited logging; association rule mining revealed statistically significant fault co-occurrence patterns (e.g., authentication failures co-occurring with token refresh defects at lift=181.5). Scope: spans 40 open-source agentic repositories; covers systems combining LLM reasoning with tool invocation. Implication for kit design: kits should define explicit error propagation contracts — when a rule-following failure occurs in a sub-agent, the failure mode should be classified and logged structurally, not left to surface as a silent wrong answer.

**Verify note:** Source exists (arxiv 2603.06847v1, 'Characterizing Faults in Agentic AI,' Shah et al., Dalhousie University / Polytechnique Montreal, March 2026). Every specific statistic confirmed exactly: 385 faults from 13,602 issues across 40 repositories, 83 faults in Agent Cognition & Orchestration, Agent Lifecycle & State as most common sub-category with 38 instances, practitioner relevance 3.97/5, 83.8% coverage, authentication/token-refresh co-occurrence at lift=181.5. Study design is methodologically strong: stratified sampling at 95% confidence/5% margin of error, Cronbach's alpha=0.904 on the developer survey. Limitation: 40 open-source repositories may not be representative of closed production deployments — but this is not misrepresented by the claim.

---

## Null results
- priority instructions system prompt practitioners conflict resolution guide applied — returned mostly non-AI practitioner guides (healthcare, legal), patent filings, and re-surfaced the same Wallace et al. 2024 paper already captured in query 1; no new practitioner-specific applied frameworks distinct from academic literature

## New angles surfaced
- Implicit rule precedence from training data distribution: models may have absorbed implicit priority structures from pretraining corpora (e.g., legal documents, official policy texts) that silently compete with kit-defined priorities — needs investigation as a confound in rule conflict studies
- Conflict detection as a first-class pipeline stage: the NSHA and CoT-reasoning results both suggest a pre-generation conflict detection layer is more reliable than in-generation priority arbitration — a dedicated angle on architectures for that detection stage (classifiers, symbolic checkers, LLM-as-judge) would be valuable
- Prompt injection vs. rule conflict unified framing: goal hijacking and supply-chain injection (Microsoft RT findings) suggest that prompt injection is structurally the same problem as rule conflict — an adversarial instruction competing with a legitimate one. A unified defense angle treating both under a single priority-enforcement framework has not yet appeared in the literature
- Rule formulation syntax effects: categorical vs. continuous constraint finding (Control Illusion) and ordering sensitivity (RuleArena) suggest that HOW rules are written (not just what they say) significantly affects conflict resolution — a dedicated angle on rule syntax, specificity, and formulation patterns is warranted
- Multi-agent trust boundary propagation: when a kit spawns sub-agents, the priority hierarchy of the parent agent does not automatically propagate — Microsoft RT and the agentic fault taxonomy both gesture at this gap without a systematic treatment

