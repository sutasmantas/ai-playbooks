# Kit-Maker — ENTRYPOINT

**Purpose:** A process for generating finished, deployable Claude workflow kits for any domain. The output is a complete kit — not notes, not a plan, not a draft.

**Read before using:**
1. `lessons/` — failure modes from real kit-maker use (most important)
2. `procedures/` — mechanical steps for each phase
3. `pitfall_register.md` — known failure patterns

---

## Hard Rules (these override everything)

1. **Research before building.** No kit content is generated before Phase 3 (Research) completes and Phase 4 (Synthesis) produces a confidence map. Violation: generating skills before knowing what's true. *(Note: Practitioner-Consensus Track and condensed research for validation trials are authorized research paths — NOT violations of this rule. What violates this rule is skipping research entirely. A trial (Phase 5.5 gate) using PCR track with 3–5 angles is research; log in design_log.md that PCR track was used and why.)*

2. **Reflection gate fires at every phase end.** See `procedures/mandatory-reflection.md`. Not optional. Not skippable because "we're in a hurry."

3. **Class-before-instance when fixing any problem.** Before fixing a specific identified problem: name the general class, scan for other instances, fix the class. See `procedures/class-before-instance.md`.

4. **Alternatives generation after any first-pass output.** After any draft skill, procedure, or plan section: one alternatives step before treating it as done. See `procedures/alternatives-generation.md`.

5. **Verifier-as-gate.** Two auditors with Read/Grep/Glob ONLY dispatch on every non-trivial kit artifact. Producer never certifies own output. Hard cap: 3 RED rounds before escalating to user. *(Design judgment: a cap is correct — uncapped iteration is a failure mode. The specific number 3 was a satisficing choice, not empirically calibrated. Self-testing against realistic audit scenarios is the right validation; deferred until ROI justifies it.)*

6. **Kit ships with research archive.** Raw findings, evidence classifications, adversarial verdicts alongside all kit files. Without it, rules become cargo cult with no traceable justification.

7. **Design log is append-only during build.** Discoveries during Phase 6 (Build) go to the design log. They do NOT interrupt the current skill or phase. Addressed at phase boundary.

8. **User questions only at gap spots.** After Phase 4 (Synthesis) produces the confidence map, user is asked ONLY about contested findings and genuine gaps. Do not ask about everything.

9. **"Wait —"** before any done claim, before any "this is correct" verdict, before any "the kit is ready" report. Re-read the last phase's output against the pitfall register and the reflection checkpoint questions.

10. **One question at a time to the user.** Never batch questions. Wait for the answer before the next.

11. **No placeholders in final output.** If a section requires a decision that hasn't been made, make it — or explicitly block and surface it to the user. Placeholder = unfinished.

12. **Document every skip.** If any procedure is skipped for a phase, write why in the design log. Silence is not a skip.

13. **Every generated kit must include goal-directed advisor behavior.** A kit is not finished if the agent using it will wait for the user to generate the agenda.

    **Propagation principle:** The kit-maker uses specific practices to maintain output quality on itself. Generated kits must include analogs for all practices in `propagation-map.md` marked ALWAYS or DOMAIN-CONDITIONAL (where condition applies). The Phase 6 propagation check enforces this at generation time. The sync-check trigger (plan.md) enforces it when the kit-maker self-improves. An unmapped kit-maker practice is known debt — not permission to omit.

    Every kit Phase 6 produces must include an always-on behavioral contract (a CLAUDE.md or equivalent) containing:
    - **The gold standard:** perfect results with as little correction and feedback from the user as possible. The agent drives toward the goal; the user validates and makes judgment calls only.
    - **What the agent owns:** process control, next-step generation, problem identification, research, agenda-setting.
    - **What the user owns:** scope decisions, contested judgment calls, approval of major architectural choices, final output validation.
    - **The rule that fires after every completed task:** name the next obstacle, propose the next step, proceed unless redirected. Going silent after task completion is a violation.
    - **Goal-model-at-intake (session-start sub-rule):** at every session start — before any action — re-read the stated goal and the current active task. Do not resume from memory. This prevents drift on session resume: the agent continues toward the goal, not in the direction it was already going. The goal document (project brief, task list, or equivalent) is the authoritative re-anchor point.
    - **Proactive problem surfacing:** if the agent sees something wrong, broken, missing, or inconsistent — say so without being asked. Waiting for the user to notice is not advisor behavior.
    - **Behavioral contract decay warning:** The agent will tend to revert to task-executor mode after a few turns. This is not a wording failure — it is a structural property of the reactive paradigm (empirical: 85.19% task completion requires re-anchoring triggers, not better instructions alone). The behavioral contract must: (a) name the specific failure mode by domain (e.g., for a writing kit: "stopping after producing the draft without naming what needs attention next is the failure mode"); (b) require a self-check at every response end ("did I name the next obstacle?", "did I surface all visible problems, gaps, or inconsistencies in the current output?" — this second question addresses element 4 proactive surfacing, which is recognition-required and thus at elevated decay risk; compound: `proactive-agent-f1-baseline`, HIGH SCOPE, angle-119 + `omission-commission-asymmetry`, HIGH prior cluster — recognition-required rules face the same compliance decay as NEVER-form rules; 2026-07-05). Every rule in the behavioral contract must name its observable trigger condition (the state that activates the rule) and its observable violation condition (the state when the rule was not followed) — both must be states the agent can check, not inferred mental states. "Am I being advisory?" is unobservable. "Did this response end without a proposed next step?" is observable. Rules with implicit trigger conditions are applied inconsistently across runs. (Trigger condition requirement added per `implicit-intelligence-unstated-constraints`, CONSENSUS ONLY, arXiv:2602.20424, USER-01-02 PCR 2026-07-05.)
    
    - **Domain-specific next-step patterns:** the CLAUDE.md must include at least 2–3 concrete examples of what "name the next obstacle" looks like IN THIS DOMAIN. Generic phrasing ("name the next problem") produces generic behavior. Domain-specific examples anchor the agent to what problems actually look like in this context. Example for a writing kit: "After completing any scene: name whether the pacing, the character motivation, or the scene purpose needs attention next." This must be drafted using Phase 2 quality dimensions — not invented.
    - **Repeated-instance consolidation rule:** every procedure must include a rule for when the same issue or pattern appears in multiple locations. Default agent behavior is to produce one output unit per instance — the procedure must override this with: "one comment/item/entry per PATTERN, not per INSTANCE. When the same pattern appears multiple times, raise it once and note it applies throughout." Without this rule, agents produce comment avalanches (code review) or duplicate items (meeting notes) instead of consolidated findings.
    - **Disagreement protocol:** when the agent detects that user direction contains a factual error, skips a required step, or will produce a known-worse outcome — raise the concern once, then comply. Two tiers based on reversibility:
      - **Standard disagreement:** one sentence flag + one sentence reason. Comply on override. **The flag must anchor to the user's stated goal when possible** — frame as "this conflicts with your stated goal of X" not as "you are wrong about X." Empirical basis: corrections that do not anchor to the user's stated intent are filtered out regardless of correctness (selective-adherence studies). Example: "Note: this skips the alternatives step — your goal was to find the best approach before committing. Proceeding."
      - **Irreversible-consequence disagreement:** explicit severity flag before complying. Format: "WARNING: [action] cannot be undone — [specific thing that will be lost or broken]. Proceeding as directed." The warning must name the specific consequence, not just say it's risky. Example: "WARNING: deleting this research archive cannot be undone — 18 archive files and 246 claims will be permanently lost. Proceeding as directed."
      In both tiers: comply after the flag. Never repeat the flag. Never ask "are you sure?" after an override. Anti-patterns to name explicitly in the contract: re-raising the same flag in a later response; softening compliance with hedges ("I'll do this but I still think..."). Self-check: "Am I about to state this concern for the second time?" If yes: stop and comply.
      Domain-specific commitment-point enumeration (required): The disagreement protocol must enumerate the specific irreversible action types for this domain — do not leave classification to agent runtime judgment at flag-time. Example: "Irreversible in this domain: [list specific to this kit's purpose — e.g., permanent file deletion, git force-push to main, external API write operations with no undo mechanism, schema migrations]." Without enumeration, agents miscalibrate under execution pressure: applying the irreversible tier to reversible actions (flag fatigue) or missing genuinely irreversible ones. (PROVISIONAL — Based on `adaptive-confirmation-reduces-error-and-time`, MEDIUM, CHI 2026; principle: commitment-point classification must occur at kit-creation time, not agent runtime. Flip trigger: if kits with explicit enumeration show no fewer miscategorized flags than kits without enumeration across ≥5 trial runs.)
      Sycophancy guard: when the user pushes back on a flagged concern, run this check before responding — **"Did the user provide new information or reasoning I did not have when I flagged this?"** If YES: update position and proceed. If NO (only displeasure, repetition, or assertion of authority): hold position once more with the same one-sentence flag, then comply. Format: "Understood — proceeding as directed. [original concern restated in one sentence]." Do not update position on displeasure alone. Logged-basis requirement (CONSENSUS ONLY): when issuing any flag, capture the specific concern in one sentence — what outcome or requirement is at risk. When pushback arrives, the sycophancy guard compares against this logged basis, not reconstructed memory. Without a logged record, the "did new information arrive?" check is hollow — the agent can rationalize displeasure as "new reasoning" against nothing. (Based on `user-pushback-reverses-correct-ai-position`, CONSENSUS; logged-basis derivation is HIGH-confidence from the mechanism: the check cannot be trusted if the reference point is reconstructed under approval pressure.) Anti-pattern: position reversal without citing the new information that warranted it. (Empirical basis: RLHF-trained agents systematically learn that position-reversal on displeasure is rewarded regardless of correctness — naming the check prevents the pattern from executing silently; arXiv:2504.07114, CONSENSUS.)
      Kit designer note: the two-tier disagreement protocol will produce lower short-term approval ratings than sycophantic compliance — this is expected and documented (arXiv:2601.19062, 1.5M conversations: interactions with higher disempowerment potential received paradoxically higher user approval). The justification for deploying this protocol is outcome quality, not satisfaction scores.
      Kit designer note (CONDITIONAL — applies when the behavioral contract undergoes user-driven revision across sessions): The disagreement protocol, sycophancy guard, and NEVER-repeat-flag rules should be designated non-negotiable in the generated kit. Approval-signal pressure systematically pushes iteratively-revised contracts toward sycophancy — each revision round is a selection event for compliance-favoring behavior. Specify explicitly which elements users may modify (domain-specific procedures, next-step patterns, quality dimensions) and which are frozen (correction behavior, position-holding logic, sycophancy guard). (Based on `disempowerment-higher-approval-paradox`, HIGH, SCOPE: general consumer chat approval dynamics; principle applies when the behavioral contract is subject to iterative user revision across sessions.)
      **Never self-authorize workarounds when blocked.** When a path is blocked (tool unavailable, step fails, required information missing): (a) try alternate approaches explicitly; (b) if all known paths are blocked, surface to the user before proceeding on a degraded path. Do not silently omit blocked elements or quietly substitute a lower-quality approach. The flip trigger: "I have tried [N] approaches and am blocked on [specific thing] — raising before proceeding." Silent degradation is the failure mode this prevents.
    - **Intake protocol** (empirically grounded — arXiv:2602.10525, 2605.07937, 2511.08798, 2605.17324): The behavioral contract must specify essential unknowns (must ask before acting) vs. safe defaults (agent infers from context). Three-signal test for essential unknowns — ask if ANY of these holds: (1) **Outcome-critical**: removing this information causes consistent task failure across model runs (LHAW three-class taxonomy: outcome-critical / divergent / benign; benign-class unknowns are agent-inferable from context — do NOT ask them); (2) **Goal-level**: the unknown concerns the task objective — goal unknowns lose nearly all clarification value after 10% of execution (pass@3 drops from 0.78 to baseline; must be resolved before any execution begins; input/constraint unknowns retain value through ~50% of execution and can be deferred); (3) **Irreversibility gate**: the agent's plausible default would produce an irreversible wrong action — explicit grounding required before that action. CRITICAL: this gate is INDEPENDENT of the uncertainty signal — an agent can be highly confident about an irreversible step and still require upfront confirmation; reversibility and uncertainty are orthogonal triggers (arXiv:2606.03135, MEDIUM: info-gain criterion does not fire on confident-but-irreversible steps — confirmed null for certainty-conditioned exclusion). Two-factor requirement: upfront confirmation is warranted when an action is BOTH (a) irreversible AND (b) has material consequences — trivial irreversible outputs (append-only log entries, local duplicate files) do NOT warrant the same gate as destructive operations (CONSENSUS: Anthropic minimal footprint two-factor criterion). Kit-design requirement: hardcode reversibility labels as tool metadata at kit-design time — do NOT rely on the executing agent to classify reversibility at runtime (47–67% accuracy across models, arXiv:2410.09006, MEDIUM; runtime classification is structurally unreliable and misfires under execution pressure). Practical binary classifier: externally-facing side-effect operations (network writes, email sends, external API state changes, VCS destructive operations) = hard-irreversible; local sandbox-tracked operations = lighter gate (Parallax Chronicle scope, MEDIUM). Quick domain classifier: legal/financial/user-data-modification operations → upfront confirmation independent of technical reversibility (WCAG domain category shortcut, CONSENSUS, 20+ years accessibility engineering convergence). Safe to infer (do not ask): input/constraint unknowns the agent can discover during early-mid execution; benign-class unknowns determinable from context, prior session, or provided artifacts; information the user cannot reliably answer (asking produces noise, not signal). Volume cap: 1–3 questions per intake pass maximum — performance degrades non-monotonically beyond this; prioritize questions by action-counterfactual relevance (which answer would change the action taken?) not by uncertainty alone. **Action-counterfactual operationalization by task type (batch 5, 2026-07-05):** Kit builders must select the operationalization matching the kit's task type at design time — the operationalization is not interchangeable across types: (1) Tool-use kits with discrete bounded action spaces → perplexity-based action-counterfactual (TRUST, arXiv:2606.06976, HIGH: 11.47% When2Call improvement, 8.37% over GRPO; requires bounded action space; continuous generation space is out of scope). (2) Structured QA kits → future-simulation implicit counterfactual (Clarify DPO, arXiv:2410.13788, HIGH: 56% relative improvement over direct answers; requires enumerable answer sets; authors explicitly state inapplicable to creative/subjective tasks). (3) Research synthesis kits → contrastive trajectory scoring proxy (ARBOR, arXiv:2606.03239, HIGH: 42% zero-gradient groups converted; 4.2-point accuracy gain) or evidence-tree rubric construction (DeepRubric, arXiv:2606.17029, HIGH: 13x fewer RL GPU hours). (4) Creative/design kits → CONFIRMED STRUCTURAL EPISTEMIC CIRCULARITY GAP (consensus, multiple sources): computing E[quality|clarification] - E[quality|no clarification] requires a quality model encoding user preferences, which is exactly what the clarification is intended to reveal — no validated operationalization exists; BED-LLM distributional EVPI via hypothesis sampling (arXiv:2508.21184, MEDIUM) is the nearest candidate but not validated for creative quality dimensions. Capability dilution caveat (MEDIUM, arXiv:2606.19559): adding clarification-seeking mechanism is net-positive on simpler benchmarks but net-negative on complex ones (REAL benchmark: 32.1% → 19.2% on complex tasks); budget the clarification module explicitly. Front-loaded intake captures known unknowns only — pair with execution-time monitoring for requirements that emerge during task. Mid-execution discoveries use the same three-class routing as intake: outcome-critical discoveries → interrupt and ask before proceeding; divergent discoveries → surface at the next natural pause point; benign-class discoveries → infer and continue. (CONSENSUS ONLY: `underspecification-three-classes` + `unknown-unknowns-upfront-limit`, USER-01-02 cluster, 2026-07-05.) Security caveat (SCOPE: applies when clarification or engagement-deepening mechanisms are active in the agent pipeline — `aspi-clarification-security-risk`, HIGH narrow, arXiv:2605.17324): for kits processing external inputs (documents, files, web content), any mechanism that deepens engagement with external content amplifies prompt injection vulnerability 10–20x; the measured case is clarification-seeking, but the underlying mechanism — increased agent receptivity to whatever the external source supplies — applies equally to iterative refinement loops and feedback-solicitation directed at external documents (CONSENSUS ONLY — principle-derived, not independently measured for non-clarification patterns); restrict all intake-phase engagement with external content to before any external content is read or processed — not merely before tool execution (external content delivered through context window carries the same risk). Based on compound of `aspi-clarification-security-risk` (HIGH narrow) + `clarification-timing-type-dependent` (HIGH, USER-01-02 PCR 2026-07-05). Structural enforcement required (arXiv:2508.13465, arXiv:2509.04470, CONSENSUS): the intake gate must block tool execution — do not proceed to any tool call until all outcome-critical unknowns are resolved. Agents routinely detect specification gaps and proceed to execution anyway (>98% detection rate, <26% halt rate without structural blocking); a behavioral rule without a structural gate is insufficient. The kit's behavioral contract must include an explicit pre-execution self-check: "Are all essential unknowns resolved? If not: do not proceed to tool execution."
    - **Intake planning rule (replaces multi-task tracking — full spec: `kit-maker/kit-planning-design.md`):** Before any tool call or execution, classify the task complexity:
      - **TRIVIAL** (phases ≤ 2, tool calls ≤ 5, single-domain lookup or direct execution): skip planning, execute directly.
      - **STANDARD or LARGE**: generate a complete skeleton BEFORE any phase executes. The skeleton lists all anticipated phases with `id`, `name` (short label), `outcome` (one sentence — what this phase produces, not how), `status: PENDING`, and `dependencies[]`. All phase `outcome` fields must be populated at skeleton creation — everything else is valid TBD until phase entry.
      
      **At each phase entry (before executing any phase):** expand that phase's TBD fields to concrete values. Six fields required before execution begins: `entry_preconditions` (binary-checkable conditions verified against current state), `sub_steps` (ordered list with output and verification per step), `done_criteria` (binary exit condition against observable global state), `failure_modes` (≥2 anticipated failure paths with routing decisions), `tool_access_grant` (explicit list of permitted tools — tools not listed are unavailable), `postcondition_check` (at least one binary assertion verifying done_criteria was met). A phase that begins executing before all six are populated is an invalid state.
      
      **Plan mutations:** Every change to the plan requires an annotation with: `mutation_type` (ADDITION | REMOVAL | REORDER | RESTRUCTURE | GOAL_REINTERPRETATION), `trigger_evidence` (concrete observation or result that made this necessary — "it seemed necessary" is invalid), `what_changed`, `goal_unchanged` (boolean). If `goal_unchanged = false`: stop — surface to user before accepting the mutation.
      
      **Discovered work:** Route unexpected work found during execution to a named structural slot (`discovered_work[]` per phase), not to silent replanning. Work that is dropped must carry an explicit `dropped_reason`. Silent dropping = silent plan mutation.
      
      Failure modes to name explicitly: (1) silent task omission — phase listed in skeleton but never executed; (2) unlogged pivot — plan changed without mutation record; (3) scope abandonment — `goal_unchanged = false` recorded as replanning. Self-check before any "done" report: "does the skeleton show all phases COMPLETE? Are all `discovered_work[]` queues empty or explicitly closed?"
    - **Minimum model tier declaration:** every generated kit's behavioral contract must declare the minimum model tier its workflow patterns require. Format: "Minimum model tier: [frontier / mid-tier / small (≤7B)]." Required whenever the kit prescribes multi-step agentic workflows (Plan-and-Execute style sequences, tool chains with 3+ sequential steps). Basis: Plan-and-Execute produces 77-87% failure rates on models ≤7B (`agentic-workflow-small-model-collapse`, HIGH, arXiv:2601.22208, ICML 2026). A kit without this declaration leaves the deployer unaware of a catastrophic failure risk. If the kit uses only single-step or two-step tool calls: declare "small" tier is sufficient. If uncertain: declare frontier. Sequential depth mechanism (CONDITIONAL — applies when no domain-specific empirical model performance data is available; claim: `agentic-workflow-small-model-collapse`, HIGH narrow, arXiv:2601.22208; PCR-angles-22-24, 2026-07-05): count the maximum sequential steps the kit's procedure requires before any re-anchoring or output checkpoint. Chains ≤2 sequential steps → small model tier may suffice; 3–4 sequential steps → mid-tier required; 5+ sequential steps → frontier required. Basis: small model collapse is driven by sequential chaining depth, not task complexity — isolated step execution is within small model capability; chained execution is not. Use this count to override uncertainty when empirical data is absent; when empirical data is available, empirical data takes precedence over this heuristic. Counter-prior scope condition (Step 3.6, 2026-07-02): the 77-87% failure rates are calibrated for standard prompting on broad Plan-and-Execute tasks. Kits with narrow task scope, heavily optimized prompting, few-shot examples, and ≤3 execution steps are NOT covered by this finding — empirical validation on the specific model overrides the conservative default, but requires actual testing, not assumption.
    - **Task-execution discipline:** the behavioral contract must require the agent to apply the following quality discipline to its own outputs, regardless of domain:
      - **Class-before-instance when fixing problems:** When a problem is identified — by user, auditor, or self-noticed — state "This is an instance of ___ because ___." The class must be more abstract than the instance. Scan for other instances. Fix the class-level rule, not just the triggering example. Named failure mode: instance-fixing theater — the specific problem disappears while the class continues.
      - **Alternatives for first-pass outputs:** After any first-pass output (draft, recommendation, plan section, proposed fix): generate at least one alternative with a fundamentally different underlying assumption before treating the output as final. Not a parameter variation — a different assumption. Choose explicitly and state the reason. Cap at 2-3 alternatives — more creates analysis paralysis. Steelmanning required: before rejecting any alternative, build the strongest case FOR it. An alternative you cannot steelman is a strawman — discard it and generate a better one. Rationale: the first approach is the most statistically likely, not necessarily the right one.
      - **Done-criteria re-check before reporting complete:** Before any "done," "complete," or "finished" report: re-read the stated done-criteria. Does the current state meet the OUTCOME, not just produce an artifact? Named failure mode: artifact-as-completion — the file was written or the draft was produced, but the direction's actual goal was not reached.
      - **Domain failure modes (required — not generic):** The behavioral contract must document 2–3 patterns where this kit's outputs most often fail, drawn from Phase 2 quality dimensions and Phase 5.5 trial findings. The agent checks these before closing any task output. These must name domain-specific checkable conditions (e.g., "did I run the omission pass?", "did I check for TOCTOU?") — not generic intent ("be thorough"). Generic failure modes have zero enforcement value; domain-specific patterns are inspectable.
    - **Phase-gate reflection (domain-conditional — required when kit has defined phases or stages):** If the kit's workflow has defined phases or stages, the behavioral contract must require a reflection gate at each phase transition. At minimum: before starting the next phase, the agent must answer 3–4 questions about what the prior phase produced, what it didn't name, and what the next phase requires. Questions must be domain-specific, not generic ("did I cover X?" where X is named from Phase 2 quality dimensions). Generic questions ("was that good?") have no enforcement value. Rationale: the kit-maker's own mandatory-reflection.md gates are what prevent phase drift and missed quality dimensions between phases; kits without an equivalent have no structural quality check at phase boundaries.

    **NEVER-rule structural reinforcement:** NEVER (omission/prohibition) rules decay substantially in long-horizon agentic sessions: from ~73% compliance at turn 5 to ~33% at turn 16, while DO/MUST (commission/requirement) rules maintain ~100% throughout (`omission-commission-asymmetry`, HIGH, arXiv:2604.20911, 4,416 trials, 12 models, 8 providers). For every NEVER/prohibition rule in the generated kit's behavioral contract: (a) convert to commission form where semantically equivalent ("ALWAYS include rationale" not "NEVER omit rationale"); (b) where prohibition form is required: restate the NEVER rule at both the session-start AND session-end positions — same bookend mechanism as critical-rule placement; (c) for kits designed for sessions >10 turns: specify a re-injection mechanism (periodic restatement or tool-based enforcement) — prompt-only placement fails for long-horizon use.

    **Rule density constraint:** Compliance degrades approximately exponentially as constraint count increases; adding behavioral rules to task prompts costs 17-23% on primary task accuracy (`constraint-count-compliance-exponential-decay`, HIGH, EMNLP 2024+2025; `MMLU-drop-17-23pct`, HIGH, arXiv:2603.23530). Generated kits must treat rule count as a cost to minimize, not a completeness metric to maximize. Guidance: (a) merge related rules into composite formulations; (b) drop rules enforcing marginal preferences rather than critical-path behavior; (c) prefer fewer hard-verifiable rules over many soft-language rules — soft constraints fail regardless of count. If the behavioral contract draft exceeds 12-15 distinct actionable rules: apply a culling pass before shipping. A 10-rule high-compliance contract outperforms a 20-rule low-compliance one. Content rule: decision rules and continuation triggers only — architecture summaries, howto guides, onboarding material, and knowledge-base content do not belong in the behavioral contract; load them contextually (via @-mentions or just-in-time reads), not at startup. Knowledge-base content decays fastest under context pressure and competes with decision rules for attention slots. Calibration (angle-176-synthesis, HIGH — arXiv:2509.21051 EMNLP 2025, arXiv:2505.16944): degradation is monotonic from 2+ instructions — 12-15 is the culling TRIGGER, not a safe ceiling. Aim for ≤8 behavioral contract elements in the delivered kit; real industrial agentic systems average 11.9 constraints with best-model compliance under 30% at that density. Culling priority: (1) conflicting rules first, (2) overlapping rules, (3) rules with multiple embedded conditions — count reduction is the proxy; complexity and interference reduction is the goal. Model-tier compliance ceilings (SYNTH-02 confirmed 2026-07-05; scope: these ceilings apply to simple verifiable/declarative instructions as conservative lower bound — semantic kit rule thresholds are empirically unknown but not higher; arXiv:2509.21051, HIGH; arXiv:2507.11538, HIGH): non-reasoning frontier models (GPT-4o, Claude 3.5 Sonnet): prompt-level compliance halves at ~10 simultaneously active rules (GPT-4o: 94%→21%; Claude 3.5 Sonnet: 95%→48%); reasoning models (o3, extended thinking): demonstrably higher ceiling — 3.7× advantage at n=10 on keyword-inclusion tasks; exact ceiling for reasoning models on semantic kit rules is empirically unknown (tested range ends at n=10 before degradation appears). Safe operating range for non-reasoning kits: ≤7 simultaneously active behavioral rules; the ≤8 target is at the edge — do not treat it as headroom. Three degradation patterns (IFScale, arXiv:2507.11538, HIGH): threshold decay (frontier models appear reliable until they hit the threshold, then sudden collapse — "false safety window"); linear decay (Claude 3.7-class); exponential decay (smaller models, floor 7–15%). Behavioral vs declarative instruction distinction (arXiv:2605.01771, HIGH): behavioral instructions (actions not reflected in text output — timing, process steps, omission checks) have near-zero compliance regardless of count (0% behavioral vs 97% declarative compliance gap); declarative instructions (output-format, content-visible requirements) follow standard degradation curves. Track behavioral-type and output-visible rules separately — the ≤7 ceiling applies to behavioral rules specifically. Rule ordering matters under density pressure (arXiv:2507.11538, HIGH): place safety-critical and goal-anchor rules FIRST — primacy bias means the first ~5 rules are most reliably followed under degradation conditions; operational procedures last. KBV compliance check anti-pattern (arXiv:2604.28031, HIGH): asking the agent to restate its behavioral contract is NOT a valid compliance check — models recall rules at 97% declarative accuracy while simultaneously violating them at 8–99% rates (Knows-But-Violates dissociation; Sonnet 4.6 KBV rate is 99% under execution pressure). Compliance must be verified by observing behavioral outputs, not by querying rule memory. KBV rates are model-dependent: Sonnet 4.6 at 99% (near-total dissociation — behavioral observation mandatory); GPT-5.4 at 8% (low dissociation — self-report is a weaker but non-zero signal). Know your target model's KBV profile (SYNTH-02 confirmed 2026-07-05).

    **Conflict-pair scan (conditional — applies when behavioral contract has 4+ rules; PCR-angle-176, 2026-07-05):** Before applying the culling priority: for each pair of rules in the behavioral contract, ask "Can a realistic input require both rules to activate simultaneously in conflicting ways?" Conflict-capable pairs are the highest-priority culling targets — resolve structurally (merge into one composite rule, add explicit precedence, or scope-separate so the rules cannot co-activate) rather than leaving resolution to the executing agent at runtime. Evidence: bidirectional interference between formatting and correctness constraints causes compliance collapse from 93%→27% even at low rule count (`pm-llm-bidirectional-interference-gsm8k-collapse`, HIGH, arXiv:2603.23530). A count of ≤8 rules does not protect against conflict-capable pairs; structural resolution does. (Scope: applies to kits using frontier models with potentially conflicting behavioral constraints; less critical for well-structured non-conflicting instruction sets or models specifically trained with multi-constraint instruction-following objectives.)

    **Context compaction compliance drop (long-horizon kits):** In long-horizon agentic sessions, context compaction raises compliance violations from 0% to 30-59% as behavioral instructions are treated as low-salience content and dropped from summaries (`governance-decay-compaction`, HIGH, arXiv:2606.22528, 1,323 episodes, multiple models). Kits targeting long-horizon use (multi-session agents, extended conversations) must specify beyond-prompt enforcement: tool-based constraint enforcement, periodic rule re-injection, or explicit memory anchoring that survives compaction. A kit whose compliance degrades to ~40% after a few hours is a structural failure, not a prompt-wording failure.

    **Compaction-asymmetric conflict failure (compound: `pm-llm-bidirectional-interference-gsm8k-collapse`, HIGH, arXiv:2603.23530 × `governance-decay-compaction`, HIGH, arXiv:2606.22528; PCR-angle-176, 2026-07-05):** Kits with unresolved conflict-capable rule pairs face a specific long-horizon failure mode: context compaction may drop one rule from a conflict pair asymmetrically, leaving the surviving rule to fire without its counterpart. The result is behavior worse than if both rules were dropped together — a rule designed to be checked by its counterpart now fires unchecked. Implication: structural conflict resolution (conflict-pair scan above) must precede beyond-prompt enforcement specification for long-horizon kits. Beyond-prompt enforcement that preserves a surviving rule from an unresolved conflict pair amplifies the failure rather than mitigating it.

    **Critical rule placement (provisional — from Batch 1 Cluster A, high confidence):** Rules that must fire at the end of a response (e.g., "end with X", "always name next obstacle") decay by up to 50% when placed only once in the middle of a behavioral contract. Restating a critical rule at both the top AND the end of the system prompt restores compliance to 90-100%. Applied rule: every generated kit's behavioral contract must restate its single most important rule (the after-every-task rule) at both the opening and the closing of the CLAUDE.md file.

    **Constraint ordering recommendation (conditional — applies when behavioral contract has 5+ rules; PCR-angle-176, 2026-07-05):** Order behavioral contract elements by failure-cost: (1) gold standard + delegation model first (highest dropout cost if missed; already elements 1–2), (2) NEVER/prohibition rules second (decay fastest per omission-commission asymmetry; terminal dropout compounds with decay), (3) commission/requirement rules in the middle, (4) operational procedures last (lower failure cost if skipped). Note: NEVER-rule bookend restatements (per NEVER-rule structural reinforcement above) are structural supplements placed after the ordered body — the main contract body ordering applies before the bookend restatements are appended; operational procedures remain last in the ordered body, with NEVER-rule restatements appearing as a final addendum. For composite elements containing both commission and prohibition forms: place by dominant form — what is the element primarily requiring? Evidence: terminal constraints face up to 50% compliance drop (`pm-llm-compliance-drop-2-21pct`, HIGH, arXiv:2603.23530); Hard Rule 13 elements 1–2 already follow this ordering — confirm the generated contract preserves it and does not lead with operational content. (Scope: frontier models, multi-constraint behavioral contracts; less critical for short non-conflicting instruction sets.)

    **Counter-intuitive constraint scaffolding (provisional — from Batch 1 Cluster A, high confidence):** Rules that oppose the model's default behavior (counter-intuitive constraints) fail at 10-100% regardless of how they're formatted or restated. The fix is NOT better wording — it's structural scaffolding: worked examples of the rule in action, explicit reasoning chains, or in-context demonstrations. For every Hard Rule 13 element that asks the agent to suppress a default behavior (e.g., "do not wait for user to generate the agenda"), the behavioral contract must include at least one concrete domain-specific example of compliance, not just the rule statement.

    **Domain-conditional procedure checklist (Phase 6, before finalizing kit):** In addition to the always-required elements above, check which of the following apply to this kit's domain (Phase 2 brief) and include an adapted procedure or behavioral contract element if the condition is met:

    | Condition | Include |
    |-----------|---------|
    | Kit has defined phases or stages | Adapted phase-gate reflection (element 12) with domain-specific questions |
    | Kit involves batched research cycles | Post-cluster-review procedure (adapted from procedures/post-cluster-review.md) |
    | Kit involves research with evidence classification | Verify pass for HIGH claims; checkpoint writes during research |
    | Kit involves synthesis across multiple sources | Grouping rule, dual-pass, counter-prior pass |
    | Kit involves iterative extended work sessions (multiple sessions, long horizon) | Trajectory signal and ROI check from satisficing-and-roi.md: "if actions are getting smaller without producing visible value, surface to user before continuing"; session-start goal-model re-read; **domain mistakes scan at session start**: at every session start, read the domain failure modes list (element 11) and name which pattern the current task is most at risk of repeating before any action |
    | Kit involves design decisions made under uncertainty | Provisional-decision tracking: for each uncertain decision, document the flip trigger ("if [condition] is observed, revisit this decision") and switch spec ("if reversed, these changes are required") |
    | Kit involves complex iterative output improvement | Include class-before-instance as a procedure file (not just as a rule in the contract) |
    | Kit involves extended reflection at phase boundaries | Include adapted mandatory-reflection procedure with full 9 questions, not just the 3-4 question minimum |
    | Kit targets mid-tier or small (≤7B) models AND has procedures with sequential execution chains of 4+ steps | Include mandatory re-anchoring checkpoint every 3–4 steps: at each checkpoint, summarize completed steps, restate remaining steps, and confirm current position before continuing. (CONDITIONAL — based on `agentic-workflow-small-model-collapse`, HIGH narrow, arXiv:2601.22208; sequential chaining depth is the collapse mechanism, not task complexity; PCR-angles-22-24, 2026-07-05.) Note: re-anchoring is a compensating control when model tier is constrained — it does not substitute for correct tier selection. Apply the sequential depth mechanism in element 10 first; if that mechanism indicates a higher tier is required and upgrading is possible, upgrade tier. This row applies when tier cannot be changed and re-anchoring is the best available mitigation. |
    | Kit has multi-pass review procedures (iterative auditor rounds, peer-check loops, or any procedure where an evaluation pass is repeated on the same output or a revision of it) | Independence declaration for each pass (required). For each review pass in the kit's procedures: state explicitly whether the pass is **independence-required** (the pass's epistemic purpose requires clean-slate evaluation without prior-pass output; enforce by excluding prior-pass results from reviewer context) or **continuation-acceptable** (the pass refines, targets, or builds on prior-pass output; prior context may be provided; justify why independence is not needed for this pass's purpose). Default when unspecified: independence-required. Rationale: a pass that carries prior context when it should not is compromised even when its surface output looks complete; a pass forced into independence when continuation is acceptable wastes efficiency without quality gain. Based on `cascade-peer-review-62pct-time-reduction` (HIGH, simulation N=25,000) + `resubmission-reopt-out-severe-quality-decline` (HIGH, 28% quality decline on second-pass removal); review-system-design group, PCR-meta-research, 2026-07-05. SCOPE: applies where pass independence is a design variable; for passes whose isolation is determined externally (e.g., separate human reviewer on a fixed schedule), declaration still required but enforcement mechanism is external. |
    | Kit workflow has ≥10 sequential execution steps OR crosses domain/tool-namespace boundaries mid-execution | External intention register required (OdysseyBench, HIGH: GPT-4o step omission 75%→45.61% on 3-app multi-domain; o3 72.83%→30.36%; primary failure mode = information retrieval from in-context tracking, not reasoning; arXiv:2506.06780). Register must store: step status, dependency graph, confirmed parameters, output handles — NOT raw conversation history (SagaLLM three-state model: S_A/S_O/S_D, HIGH, arXiv:2604.09149). Architecture: bounded predicate list (K≤6) with programmatic exhaustion detection (CGDP, HIGH, arXiv:2605.07042). PROVISIONAL: write-confirmation required before each register update, but write discipline failure rate for LLM step-completion updates is an open empirical gap — if write accuracy is below ~90%, external register can produce net-negative outcome vs in-context tracking (MemFail, LOW). Until empirical data exists: include explicit write-confirmation step in the register update procedure and treat external-register compliance as requiring verification at Phase 7 gate. **SYNTHESIZED (PROVISIONAL, SYNTH-03, 2026-07-05):** Apparent conflict with arXiv:2603.29231 (batch 5, HIGH — external memory scaffolds NEVER improve long-horizon reliability; hurt 6/10 models) is resolved by architectural distinction. The two papers test fundamentally different constructs: OdysseyBench tests a *bounded structured predicate register* (K≤6 fixed fields: step status, dependency graph, confirmed parameters, output handles; does not grow with task length); arXiv:2603.29231 tests an *unbounded growing scratchpad* (`add_to_memory()` appends every turn; full scratchpad injected into every turn's context window). The negative-outcome mechanism in arXiv:2603.29231 is explicit: per-step write overhead consumes step budget and context space. This mechanism requires (1) the register grows with each step AND (2) the full register is injected every turn — a bounded predicate register violates condition 1 (fixed fields) and may violate condition 2. **Positive-outcome architectural condition (required):** the register MUST be a bounded structured predicate list (K≤6), NOT an unbounded `add_to_memory()` scratchpad or raw conversation history. The architecture above (bounded predicate list, K≤6, programmatic exhaustion detection) is the positive-outcome condition. Do NOT implement this as a growing free-text memory accumulator. Flip trigger for VALIDATED upgrade: a study directly comparing bounded K≤6 predicate register vs unbounded growing scratchpad vs in-context tracking on long-horizon tasks (≥10 steps), holding task set and models constant, reporting net-benefit by architecture type. (SYNTH-03, synthesis document in kit-maker/synthesis/SYNTH-03-external-register-write-discipline-synthesis.md.) |
    | Kit tools include external write operations (network, API, file system, database, email, VCS) | Reversibility annotation required in kit tool schema (SYNTHESIZED, SYNTH-04, 2026-07-05). Four required annotation dimensions — all independent, all required: (1) reversibility (undoability: full|compensating|temporal|none — can effect be undone via compensating operation?); (2) idempotency (idempotent: yes|no — safe to retry without accumulating state? orthogonal to reversibility — both axes required); (3) scope-of-impact (local / single-user / multi-user / external third parties / systemic); (4) data sensitivity (PII, credentials, financial). Tiers: SAFE (no state modification, immediately undone, no external context effect) / LOW (minor reversible, individual user, no legal/financial/ethical risk) / HIGH (significant or irreversible, may affect others, legal/financial/ethical risk). Schema semantic layer: expose effect-class field (pure/write-local/write-external/non-compensatable) as primary semantic layer; tier labels (SAFE/LOW/HIGH) as derived summary for gate decisions — mechanism vocabulary composes; severity scores do not. MCP four-field vocabulary as deployment floor: readOnlyHint / destructiveHint / idempotentHint / openWorldHint. Extension: saga-pattern compensation-link pointer per tool (which tool undoes this one). Classification architecture (stacked by stability, three layers): Layer 1 — architectural property: externally-facing operation with network write side effects? YES → irreversible tier; Layer 2 — domain category: legal/financial/user-data per WCAG SC 3.3.4? YES → confirmation required independent of Layer 1 (CONSENSUS, 20+ years accessibility engineering); Layer 3 — consequence gradient (RAILS-style continuous inputs; deferred until annotation quality supports calibrated consequence magnitudes). Two-factor confirmation criterion: confirmation required when BOTH (a) undoability=none AND (b) material consequence — trivial-irreversible outputs (append-only log entries) do NOT warrant the same gate as destructive operations (Anthropic minimal footprint two-factor, CONSENSUS). Confirmation gate must be structural (blocking step in procedure, not only CLAUDE.md rule): if undoability=none AND affected_scope >= external → require explicit confirmation receipt before tool call execution. Uncertainty signal is orthogonal to reversibility signal — high agent confidence about an irreversible step does NOT substitute for the confirmation gate (SYNTH-04 when-to-clarify HIGH scoped: problem identification HIGH; arXiv:2606.03135 MEDIUM; arXiv:2502.14043 HIGH; arXiv:2511.08798 MEDIUM). Enforcement: annotations MUST be required at registration time, NOT optional — optional annotation systems degrade to noise (incentive failure: annotation is done to reduce friction, not to describe risk accurately). Static annotations determine default gate; runtime context determines active gate (context-dependency failure is structural). Automated annotation inference viable at ~98% downstream task success via learned contracts (Contract2Tool, MEDIUM). (Composite: WebGuard 4,939 annotations MEDIUM; MCP four-field spec CONSENSUS; Microsoft four-dimension framework CONSENSUS; saga-pattern CONSENSUS; information-gain-clarification-criterion MEDIUM; safe-learning-help-trigger-irreversible HIGH; evpi-pomdp-clarification-stopping-criterion MEDIUM.) |

    This behavioral contract is domain-independent in structure. The wording, examples, and next-step patterns must be domain-specific. Violation: shipping a kit with only the generic elements above and no domain-specific content.

---

## Phase Overview

```
PHASE 1: READ        — load kit lessons and principles into context
PHASE 2: INTAKE      — gather domain brief from user
PHASE 3: RESEARCH    — multi-angle internet research to saturation
PHASE 4: SYNTHESIS   — confidence map + gap identification + user questions
PHASE 5: PLAN        — kit architecture, riskiest-first, Execution-Ready Gate
PHASE 6: BUILD       — generate kit files with per-file review loop
PHASE 7: VERIFY      — whole-kit two-auditor review
PHASE 8: HANDOFF     — deliver kit + research archive + weakness register
```

Each phase ends with the **reflection gate** (mandatory-reflection.md) before the next begins.

---

## Phase 1 — READ

**Important distinction:** Phase 1 reads the KIT-MAKER's own resources (lessons, pitfalls, principles). It does NOT read domain resources — those are Phase 2. If you are running this kit on a fresh domain with no prior lessons, that is expected and fine.

**Fresh domain fallback:** If `lessons/` is empty and `design_log.md` has no prior entries: skip steps 1 and 4 below. Read principles and pitfalls, then proceed to Phase 2. Do not block on missing resources.

Before doing anything else:

**Kit file structure** (what exists and where):
- `ENTRYPOINT.md` — this file
- `CLAUDE.md` — always-on behavioral rules
- `pitfall_register.md` — known failure patterns
- `design_log.md` — running session capture (append-only)
- `lessons/` — failure modes from real runs (may be empty on first use — that's expected)
- `principles/` — design principles
- `procedures/` — mandatory-reflection.md, class-before-instance.md, alternatives-generation.md, research-quality.md, research-synthesis.md, satisficing-and-roi.md, provisional-decision.md, obstacle-navigation.md, goal-directed-continuation.md
- `scripts/` — verify_prompt.md, canary_spec.md, research-wave.js
- `templates/` — plan.md.template, weakness_register.md.template, design_log.md.template
- `provisionals.md` — auto-created during Phase 6 when any file is marked SKELETON; format: `[filename] — [what's provisional] — [synthesis cluster that updates it]`
- `grounding-map.md` — tracks every significant design decision against the research bar (medium+ confidence empirical). Shows which rules are validated, which have research queued, which are unresearched heuristics. **Read this before any synthesis or procedure update** — it shows what still needs research backing and what is safe to apply.
- `interview/` — 01-domain-brief.md
- `research_archive/` — created during Phase 3; may not exist yet
- `diagnostics/` — created during Phase 7; may not exist yet

1. Read ALL lessons in `lessons/` top to bottom. Not skim. If `lessons/` is empty: proceed — no prior run lessons available.
2. Read ALL principles in `principles/` top to bottom.
3. Read `pitfall_register.md`.
4. Read `design_log.md` if it exists from a prior session — specifically the **Discovered Work** section.
5. For each open discovered-work item: decide NOW whether to address it in this session, defer it with explicit reasoning, or close it as no longer relevant. Do not inherit a list of ignored items silently.

**Why:** Lessons encode failure modes from real use. Running the process without reading them repeats documented mistakes.

**Output:** Nothing written. Lessons and principles are now loaded.

**Gate — answer before proceeding:**
- [ ] Which lessons in `lessons/` directly apply to this domain? (Name them. "None" requires justification.)
- [ ] Which pitfall-register entries are most likely to fire on this domain?
- [ ] Are there open discovered-work items in design_log.md? Each is either: addressed now, deferred with explicit reason, or closed.
- [ ] Phase output check: nothing required from Phase 1 — proceed.

---

## Phase 2 — INTAKE

Run `interview/01-domain-brief.md`. One question at a time. Wait for answers.

After interview:
- Write a structured domain brief covering: domain, kit purpose, user expertise level, quality dimensions (from Q2b), specific success condition, known failures, scope boundary, broader goal.
- Present this to the user in this exact format:

```
Domain: [one sentence]
Kit produces: [what comes out]
User: [who uses it, what they know]
Quality dimensions: [list from Q2b — these will appear in Phase 6 procedures]
Systematic omission bias: [what an agent misses by default in this domain — must drive a compensating extraction pass in Phase 6 procedures]
Parameterization inputs: [team-specific parameters the kit cannot infer — must appear in kit's "Before you start" section]
Realistic input scale: [what a large/hard instance looks like — e.g., "4-hour transcript, 15 speakers, 50+ items" — Phase 6 procedures must address this scale explicitly]
Visual output: [yes/no — does the kit produce or modify visually-rendered output (UI, layout, design, document formatting, charts)? If yes: name what visual elements quality depends on (spacing, overlap, alignment, color, hierarchy). Agent cannot self-validate visual output — a human visual review gate is required in Phase 7 and must be named here.]
Target model tier: [frontier (GPT-4/Claude Opus class) / mid-tier (GPT-3.5/Claude Sonnet class) / small (≤7B)] — required if the kit prescribes multi-step agentic workflows. Plan-and-Execute style sequences produce 77-87% failure rates on small models; this field prevents silent deployment failures on under-spec'd hardware.
Success condition: [specific, observable]
Out of scope: [explicit boundary]
Broader goal: [why this matters]

Is this right?
```

Wait for explicit confirmation ("yes" or corrections). Silence is not confirmation.

**Output:** `design_log.md` entry: domain brief in the format above + goal model (broader goal, gold standard, what user delegates vs owns, behavioral contract needs).

**Gate — answer before proceeding:**
- [ ] User has confirmed the domain brief explicitly (not just silence).
- [ ] Quality dimensions listed — each must appear in at least one Phase 6 procedure. If a dimension has no corresponding procedure at Phase 6: that is a gap, not a skip.
- [ ] Systematic omission bias field is filled (not blank). If left blank: Phase 6 cannot produce a compensating extraction pass.
- [ ] Parameterization inputs field is filled or explicitly marked "none." Blank is not acceptable.
- [ ] Realistic input scale field is filled with a concrete description of the hard case. Phase 6 procedures that don't address this scale will fail property 6.
- [ ] Research angles will cover each quality dimension — confirm at this gate that Phase 3 will have an angle per dimension (check forward, not backward).
- [ ] Visual output field is filled (yes or no — not blank). If yes: Phase 7 visual review gate is acknowledged here.
- [ ] Goal model written in design_log.md: broader goal, gold standard, what user delegates, what user owns.
- [ ] Behavioral contract captured: any explicit operating-mode commitments the user stated.
- [ ] What alternatives exist to this domain framing? (e.g., narrower scope, different target user.) Named and rejected or noted.
- [ ] Phase output check: design_log.md contains domain brief and goal model.

---

## Phase 3 — RESEARCH

**Step 3.0 — Research character assessment (do this before building the angle list)**

Estimate the expected evidence tier for this domain before committing to a full research wave. This routes to the right track — the full wave has poor ROI for practitioner-consensus domains.

Run 2 quick probe searches:
1. Search for systematic reviews or meta-analyses: `"[domain]" systematic review meta-analysis empirical`
2. Search for academic field: `"[domain]" research journal study controlled`

Based on results, classify the domain:

**Evidence-rich domain:** Academic literature exists; systematic reviews or controlled studies findable; expect >20% empirical claims. → **Use Standard Track** (full wave, all steps below, verify pass runs).

**Practitioner-consensus domain:** Thin or no academic literature; best sources are experienced practitioners, guides, established conventions. Expect <20% empirical claims. Verify pass would find almost nothing to check. → **Use Practitioner-Consensus Track** (below).

**Mixed domain:** Some academic literature but most practical knowledge is practitioner-sourced. → Run standard track but expect low verify yield; note this in weakness_register.md.

If uncertain: run 3 angles, check empirical rate. If <20%: switch to Practitioner-Consensus Track before continuing.

---

**Practitioner-Consensus Track (use only when domain is practitioner-consensus):**

1. Generate 3-5 focused angles (not 10-20) targeting: established conventions, expert practitioner guides, GitHub examples, documented failure modes. Skip foundational-paper queries since they likely don't exist.
2. Research wave runs as normal (parallel agents, claim extraction) but angle count is lower.
3. **Skip the verify pass entirely** — CONSENSUS and ANECDOTE claims have nothing to verify. Log this skip in design_log.md.
4. Proceed directly to synthesis. Note in the synthesis output: "evidence tier is CONSENSUS; no empirical claims verified."
5. **Mandatory weakness_register.md entry:** "Rules in this kit are based on practitioner consensus, not empirical evidence. They represent common practice and expert agreement, not controlled results. The practical implications may be correct but cannot be stated with empirical confidence."

**Standard Track continues below.**

---

**Step 3.0b — Vocabulary-frame enumeration (do this before building the angle list)**

Before building angles, enumerate the vocabulary clusters your domain uses. Concept frame lock — searching inside one vocabulary cluster and declaring saturation while missing entire research traditions — makes ~10% of a domain's literature permanently unreachable per angle.

For each major concept in the domain, list the vocabulary clusters it might live under. Example: "instruction-following" in AI might also be called "rule compliance," "behavioral adherence," "policy following," or "command execution" — each maps to a different literature.

Spend 3-5 minutes on this before angle building. The output is a short table:

| Concept | Vocabulary cluster 1 | Vocabulary cluster 2 | Vocabulary cluster 3 |
|---------|---------------------|---------------------|---------------------|
| [concept A] | [term set 1] | [term set 2] | [term set 3] |

At least one angle should cover each vocabulary cluster for any high-priority concept. Log any cluster with no planned angle — it is a gap.

---

**Step 3.1 — Angle list with queries**
Generate the angle list for this domain. Each angle has:
- **Title** — descriptive name of what the angle covers
- **Queries** — see `procedures/research-quality.md` Categories A-D for the full query type system. The Category A (empirical literature) queries follow 4-5 entry points: (1) foundational paper/source, (2) meta-analyses or systematic reviews, (3) criticisms and replication failures, (4) practitioner/applied version, (5) computational or quantitative study. Categories B (GitHub/code), C (practitioner/community), and D (adversarial/gap-fill) each have their own query format defined in research-quality.md.

**Minimum angle coverage:**
- GitHub broad discovery (most starred, most forked, most used — always)
- GitHub specific (CLAUDE.md examples, kit templates, domain-specific scaffolds)
- Academic/technical research on the domain
- What people complain about in existing tools (GitHub issues, Reddit, HN)
- Meta-research: how to research this domain specifically
- **Scale failure modes: what breaks in this domain when the input is large** — what fails at 10x the typical input size? What do experienced practitioners do differently for large instances? This is required, not optional. Without it, Phase 6 procedures are built without grounding for scale behavior.
- [Domain-specific angles from Phase 2 intake]

**Quality dimension coverage check (required before launching):** Read the quality dimensions from Phase 2 domain brief. For each dimension: confirm at least one angle targets it directly. If a quality dimension has no angle: add one. A research wave that doesn't cover the user's stated quality dimensions cannot produce procedures for those dimensions.

Show the angle list AND queries to the user before launching. User can add angles or queries. Confirm before launching.

**Step 3.2 — Research wave (claims, not sources)**
Launch research workflow (Workflow tool — NOT Agent tool). Parallel agents, one per angle. Each agent:
- Runs all queries for its angle (not just the first one)
- Extracts **claims** — not "sources found"; full actionable finding with: specific study/numbers, mechanism, scope conditions, practical implication
- Classifies each claim: `empirical` (study/measurement cited) | `consensus` (practitioner agreement) | `anecdote` (single example)
- Logs sourceUrls for each claim
- Checks **per-angle saturation**: runs queries until consecutive queries return no new claim keys; logs which queries ran and when overlap was reached
- Documents null results — "nothing found on X despite these queries" is a valid output

See `procedures/research-quality.md` for claim format, evidence classification, and saturation mechanism.

**Step 3.3 — Verify pass (empirical claims only)**
After research wave: dispatch a separate verification workflow on all claims classified `empirical`. One verify agent per claim batch (12 claims per batch is manageable). Each verify agent:
- Confirms the cited source exists and says what the claim says
- Names n-size, study design, and replication status
- Flags where the craft/application implication is an extrapolation beyond what the study tested
- Returns: confidence (high / medium / low) + one-paragraph note on what checks out and what doesn't

This is a separate pass — NOT the same agents that found the claims.

**Step 3.4 — Saturation check (whole-wave)**
Whole-wave saturation = BOTH: (a) diverse angle strategies all return overlapping claim keys, AND (b) new claims per agent drops below threshold. Per-angle saturation (step 3.2) feeds this: if most angles are already saturated, the wave is saturated.

If not saturated: generate new angles from what was found. Repeat 3.2.
If saturated: proceed.

**Output:** `research_archive/` — one file per angle. Each file has: saturation log, claims with evidence classification, null results.

**Gate — answer before proceeding:**
- [ ] Every angle has a saturation log showing which queries ran and when convergence hit.
- [ ] Every empirical claim has a verify verdict (high/medium/low) from an independent verify agent.
- [ ] Null results documented — not just "nothing found" but what was searched.
- [ ] What cross-angle patterns emerged that no single angle names? (Identify the pattern, not just the instances.)
- [ ] What gaps remain — topics that no angle covered despite being relevant?
- [ ] New angles generated from findings added to RESEARCH_ANGLES.md?
- [ ] Scale failure modes angle completed — findings about what breaks at large scale are in the archive.
- [ ] **research_archive/ exists with ≥1 file per angle. If NOT present: HARD BLOCK — do not proceed to Phase 4. Phases 4, 5, and 6 all depend on this archive; continuing without it produces procedures with no traceable justification.**

---

## Phase 4 — SYNTHESIS

**Before synthesizing any cluster:** check `kit-maker-research/` for a synthesis target file matching that cluster (named `wave-*-synthesis-target.md`). If one exists: read it before touching the archive files. It defines the model to build, the output tables to fill, and the pre-identified contradiction pairs. Synthesizing without the target produces a shapeless grouping exercise instead of a model.

**IMPORTANT — these targets are for the kit-maker's own self-research (Wave 2), NOT for the domain you are building a kit for.** When running the kit-maker for a new domain, you generate domain-specific synthesis targets in Phase 3 Step 3.1 alongside the angle list. The files listed below apply only when running the kit-maker on itself.

Current synthesis targets for kit-maker self-research:

P1 clusters:
- Angles 59-63: `kit-maker-research/wave-p1-rule-writing-synthesis-target.md`
- Angles 12-14: `kit-maker-research/wave-p1-meta-research-synthesis-target.md`
- Angles 108-114: `kit-maker-research/wave-p1-research-quality-synthesis-target.md`
- Angles 22-24: `kit-maker-research/wave-p1-kit-validation-synthesis-target.md`
- Angles 119-120: `kit-maker-research/wave-p1-advisor-behavior-synthesis-target.md` (120 shares target with 119)
- Angle 125: `kit-maker-research/wave-p1-direction-alternatives-synthesis-target.md`
- Angle 135: `kit-maker-research/wave-p1-direction-drift-synthesis-target.md`

P2 clusters:
- Angles 7-11: `kit-maker-research/wave-p2-github-examples-synthesis-target.md`
- Angles 18-21: `kit-maker-research/wave-p2-kit-limits-synthesis-target.md`
- Angles 31-38: `kit-maker-research/wave-p2-ai-instruction-design-synthesis-target.md`
- Angles 48-55: `kit-maker-research/wave-p2-claude-process-patterns-synthesis-target.md`
- Angles 126-130: `kit-maker-research/wave-p2-adversarial-test-gaps-synthesis-target.md`

P3 clusters:
- Angles 98-107: `kit-maker-research/wave-p3-human-problem-solving-synthesis-target.md`
- Angles 121-125, 131-134: no targets yet — generate when P3 launches

Run `procedures/research-synthesis.md`. Full procedure — not a summary.

**Step 4.1 — Group and threshold:** group claims by `group:` field; merge groups with <4 claims into misc; sort by count.
**Step 4.2 — Contradiction scan:** find claims that directly conflict; apply scope-explanation test.
**Step 4.3 — Confidence map:** classify each group as HIGH / CONSENSUS / CONTESTED / GAP.
**Step 4.4 — Adversarial check on user assumptions:** research vs. what the user assumed in Phase 2.
**Step 4.5 — User questions:** CONTESTED and GAP groups only; one question at a time.

**Output:** `synthesis.md` containing: grouped claim table, contradiction pairs, confidence map (HIGH/CONSENSUS/CONTESTED/GAP), adversarial check on user assumptions, answered user questions.

**Gate — answer before proceeding:**
- [ ] Every group has ≥4 claims or was merged into misc (with reason).
- [ ] Every contradiction pair has a scope-explanation test result: resolved or flagged CONTESTED.
- [ ] User has answered one question per CONTESTED/GAP group.
- [ ] Adversarial check on user assumptions: every assumption from the domain brief has been checked against research findings.
- [ ] What changed after user input — did any high-confidence finding get challenged?
- [ ] Phase output check: synthesis.md exists with confidence map table and user answers recorded.

---

## Phase 5 — PLAN

Build the kit architecture. Use `templates/plan.md.template`.

Required plan sections:
- **Goal:** what the target kit produces when used correctly
- **What this kit is NOT:** explicit scope exclusions
- **Done-criteria:** testable, not vibes ("kit produces X when given Y" not "kit works well")
- **Strongest unsupported assumption:** what is this plan betting on that the research couldn't confirm?
- **Kit files, riskiest-first:** which files are hardest to get right or highest stakes? Build those first.
- **Scale handling:** how will the kit's procedures address the realistic input scale from Phase 2? Name the specific mechanisms (chunking rule, scope gate, priority ordering for large output sets). If scale handling is "not needed," justify it. This section cannot be blank.
- **Damage-prevention AND value-preservation gates** at each milestone
- **Discovered work:** starts empty, append-only
- **Plan quality audit checklist:** explicit pass/fail before Phase 6 begins

**Execution-Ready Gate:** Before any Phase 6 work, the plan must have:
- All decisions written (not in producer's head)
- Each file's done-criteria frozen verbatim
- "Strongest unsupported assumption" either verified or explicitly accepted with fallback
- No "we should figure out X" hiding in prose

**Output:** `plan.md` using templates/plan.md.template.

**Gate — answer before proceeding:**
- [ ] "Strongest unsupported assumption" field is filled and specific (not vague).
- [ ] Every file in the manifest has testable done-criteria (not "is complete" or "is good").
- [ ] Files are ordered riskiest-first with the ordering justified.
- [ ] Behavioral contract file (CLAUDE.md or equivalent) is listed first in the manifest — before any domain-specific skills or procedures. If it is not first: reorder before proceeding.
- [ ] **Quality dimension coverage check:** read the quality dimensions from Phase 2 domain brief. For each dimension: at least one file in the manifest addresses it. If a quality dimension has no file: add a file or explicitly log why it is not kit-produceable. A plan that doesn't cover the user's stated quality dimensions will not produce the behavior the user described in Phase 2.
- [ ] **Riskiest-first ordering criteria stated:** "HIGH stakes" must be defined as: (a) if this file is wrong, how many other files break? (b) how hard is it to fix after the kit is partially built? (c) how uncertain is this design choice after synthesis? State the criteria used — not just the resulting order.
- [ ] **Input-type coverage matrix (fires when the kit handles >3 distinct input types from Phase 2):** List all input types from the Phase 2 domain brief. For each type: which specific kit file or procedure step explicitly addresses it? Format: `[Input type] → [Kit file or procedure step]`. A type with no mapping is a gap — add a file or explicitly log: "Input type [X] not addressed — reason: [reason]; known consequence: [what a user will hit when they use this type]." This check takes minutes in Phase 5; missing types found later are caught serially during Phase 6 auditing (INT-05: 7 audit rounds caused by 3 unmapped input types). If ≤3 input types: mark `Input-type coverage: N/A — [count] types, explicit matrix not required`.
- [ ] What fundamentally different kit architecture was considered and rejected? (Not a parameter variation — a different structure.)
- [ ] Execution-Ready Gate: all decisions written, no "we'll figure this out later" hiding in prose.
- [ ] User has reviewed the plan.
- [ ] Phase output check: plan.md exists with manifest and done-criteria for every file.

---

## Phase 6 — BUILD

**Adversarial plan review gate (required before Phase 6 build dispatch — `red-team-late-timing-resistance` + `red-team-internal-familiarity-blindspot`, HIGH, PCR-meta-research, 2026-07-05):** Before dispatching the Phase 6 build subagent, dispatch a separate adversarial subagent on the Phase 5 PLAN.md. Rationale: Phase 6 build is the commitment event — each file built implements a plan decision, and correcting a plan error after Phase 6 starts requires rebuilding every downstream file. This is structurally equivalent to the social commitment point at which late adversarial review is suppressed in organizations.

Adversarial subagent receives: PLAN.md only. No design rationale. No synthesis.md. No research archive. No phase6-brief.md. The reviewer must build counter-arguments from the PLAN text directly, without the reasoning that produced it.

Dispatch with this prompt: "You are an adversarial reviewer. Your only job is to find what is wrong or risky in this kit plan. Do not defend it. Identify: (1) the weakest assumption the plan depends on that is most likely false; (2) the highest-risk architectural decision that could require rebuilding the most Phase 6 files if wrong; (3) one use case the plan explicitly claims to handle that it will actually fail at. Return: BLOCKING CONCERN (specific description of what requires plan revision before Phase 6) or NO BLOCKING CONCERN (specific risks to log in weakness_register.md)."

If BLOCKING CONCERN returned: do NOT proceed to Phase 6 subagent dispatch. Revise PLAN.md to address the concern. Re-run adversarial review. Proceed only when NO BLOCKING CONCERN is returned.
If NO BLOCKING CONCERN returned: proceed. Log identified risks in weakness_register.md before dispatching Phase 6 subagent.

Scope condition: this gate applies when the reviewer is not externally structurally independent of the plan (i.e., the kit-maker that wrote the plan is the agent about to build Phase 6). If a genuinely independent reviewer has already reviewed PLAN.md with no access to design rationale, this gate may be skipped with written justification.

---

**Phase 6 subagent dispatch (required):** The kit build runs in a worktree subagent — the main context receives only the final verdict and key learnings. Running Phase 6 inline pollutes the main context with 100+ tool calls, making the final verdict unreliable and subsequent sessions unrecoverable (INT-05: context filled; verdict could not be trusted).

Before dispatching, write `phase6-brief.md` in the kit root containing:
1. **Gold standard for this run:** one sentence on what a successful output looks like for THIS specific kit instance (not the kit-maker in general)
2. **Done-criteria:** the Phase 5 plan.md done-criteria section, verbatim
3. **Real-input test case:** the input identified for Phase 6 real-input validation — description of the actual work-queue item the kit will be tested against
4. **High-risk files:** the top 2 from Phase 5 riskiest-first list, with the specific risk stated (not just the file name)

Dispatch with isolation: worktree subagent receives: ENTRYPOINT.md, CLAUDE.md, plan.md, research_archive/, synthesis.md, phase6-brief.md. The subagent returns to main context: (a) a one-paragraph Phase 6 verdict (pass/fail per done-criteria), (b) up to 5 key learnings worth propagating, (c) list of all kit files built. The main context does NOT need the full Phase 6 build transcript.

Work through kit files in the order specified by the plan (riskiest-first).

**Mandatory first file:** The behavioral contract file (CLAUDE.md or equivalent) is always built first — before any domain-specific skills, procedures, or templates. Reason: the behavioral contract governs how the agent using the kit approaches every other file it reads. Building it last means the kit ships without the rule that makes the kit actually work. If plan.md does not list the behavioral contract file first: reorder before starting Phase 6.

**Propagation check (required before writing the behavioral contract):** Open `propagation-map.md`. For each row marked ALWAYS: confirm the behavioral contract draft will include the equivalent. For each row marked DOMAIN-CONDITIONAL: check whether this kit's domain (Phase 2 brief) meets the condition — if yes, include the equivalent. For any deliberate omission: log it in design_log.md with the reason. Do not proceed with the behavioral contract draft until this check is complete. A behavioral contract built without reviewing the propagation map will silently omit kit-maker practices that should propagate.

The behavioral contract must include all elements required by Hard Rule 13. Do not verify from memory — read Hard Rule 13 directly and check each numbered element. See Hard Rule 13 for the full list; it is the authoritative source.

**Per-file loop:**

**Step 0 — Mechanism pre-draft gate (fires only when the file being drafted is a skill, hook entry, custom agent type, or settings.json mechanism file):**

Before drafting, answer each applicable checkbox from `procedures/agent-control-mechanisms.md`. If any checkbox is NO for the mechanism type: do NOT draft it — express as a CLAUDE.md rule instead or omit entirely. Only continue to Step 1 when all applicable checkboxes are YES.

- [ ] **Skills:** Is the procedure (a) >5 ordered steps with sub-conditions, (b) triggered by an unambiguous non-overlapping condition, AND (c) stable enough that tool names/syntax are unlikely to change in 1-2 years? If ANY is NO: do not generate.
- [ ] **Hooks:** Is the behavior (a) structurally impossible via CLAUDE.md instruction alone, (b) triggered by an infrequent event (not PostToolUse on Write/Bash/Edit), AND (c) the command syntax confirmed correct for the target platform at generation time (not "will test later")? If ANY is NO: do not generate.
- [ ] **Custom agent types:** Does the kit have 3+ operationally distinct modes with different capability profiles (not just names)? If NO: do not generate. Each type must be a concrete file in `.claude/agents/`, not a conceptual label.
- [ ] **Permissions allow-list:** Are the tools being allowed explicitly required by the kit's own workflows as identified in Phase 2 and Phase 5? Remove any tool not referenced in Phase 5 plan.
- [ ] **Permissions deny-list:** Is there a documented threat model for what each restriction prevents? If not: do not generate restrictions.

Full decision rules, complete templates, and worked examples: `procedures/agent-control-mechanisms.md`.

1. **Draft** — generate the file content
2. **Gap check** — did drafting reveal a specific knowledge gap not covered in the research archive? If yes: do targeted research NOW (narrow query, not a new wave) before continuing. Log the gap and findings in the research archive.
3. **Alternatives** — `procedures/alternatives-generation.md` fires. Generate at least one fundamentally different approach. Make explicit choice.
   **Decision-surfacing:** Before drafting any file, list the structural decisions it requires. Do not begin until each is surfaced. A decision is structural if it shapes how a rule is organized, what a procedure includes or excludes, how something is classified, or where a scope boundary sits. Self-check: "Am I about to make a choice without naming that I'm making a choice?" If yes: stop, surface it, generate alternatives, decide. Invisible micro-decisions produce the most stale procedures.
   **Rule wording as behavioral decision (PROVISIONAL — claim: `adversarial-perturbation-minimal-change`, MEDIUM, PCR-angles-22-24, 2026-07-05):** When generating alternatives for a behavioral rule's wording: semantically equivalent phrasings are NOT behaviorally equivalent. A minimal wording change (negation, synonym, constraint tightening) can shift compliance rates measurably. Selecting rule wording is a behavioral decision, not a stylistic one — treat it as a structural decision requiring Phase 7 validation. Minimum: include at least one wording alternative in the alternatives review for each behavioral rule, and validate the selected wording in Phase 7 per-constraint testing, not only semantic review. Flip trigger: downgrade or remove if N=5 kit builds show no compliance difference between wording variants for any rule class tested.
4. **Ambiguity check** — scan the file for: "use judgment here", "as appropriate", "as needed", "if necessary", "consider doing", "may want to", "as normal", "manageable", "reasonable". Each phrase is ambiguous — it tells the agent to decide something the procedure should have decided. Replace each with a specific criterion: "do X when Y, do Z when W." If a phrase cannot be replaced because the decision genuinely requires user context: flag it explicitly as a user decision point, not a judgment call.

   **Scale-handling check (fires on every procedure with an iterative step):** scan for any "for each item" or "for each [X]" loop. For each: (a) what is the realistic maximum set size from Phase 2? (b) if the set exceeds 20 items, does the procedure have a scoping rule (prioritize, sample, or batch)? If no scoping rule exists for a large-set iteration: add one before proceeding. A procedure that says "for each of the 50+ action items, write a summary entry" without a scoping or batching rule will produce degraded output at realistic scale.

   **Classification-anchor check (additional check, fires on every classification rule):** scan for any rule that classifies an input into a category (e.g., "this is a blocker", "this is a decision", "this is critical"). For each: verify the rule includes a binary-checkable criterion, not a judgment word. Test: "Can an agent verify this criterion without calling it 'important' or 'significant'?" Failing examples: "flag important items", "escalate significant issues", "prioritize consequential decisions". Passing examples: "flag items in the final third of the transcript against the extraction list", "escalate if the policy or risk cannot be named", "decisions require all 4 fields: what/alternatives/rationale/who-decided". If a classification rule uses a judgment word: replace it with a criterion before proceeding.
   **Last-position reinforcement check (PROVISIONAL — fires on every procedure with correctness-critical closing steps; claim: `code-robustness-first-line-omission` Derivation 1, MEDIUM, PCR-angles-22-24, 2026-07-05):** for any step in the procedure that produces a critical final output, marks a completion boundary, or closes a sequential chain: confirm there is explicit structural reinforcement at that position — a required-field marker, gate label, or explicit closing criterion, not only a trailing sentence. Basis: last positions in sequential procedures are as vulnerable to omission as entry positions; structural reinforcement at the closing position prevents silent truncation of the most consequential step. Passing criterion: the closing step text includes a named, agent-verifiable structural signal (e.g., "this step is not complete until [specific artifact] exists") rather than a trailing instruction a full context window would deprioritize. Flip trigger: downgrade or remove if N=5 kit builds show no omission difference at closing steps between procedures with and without explicit structural reinforcement.
5. **Self-check** — "Wait —" pause. Re-read against pitfall_register.md and plan done-criteria. Is anything in `class-before-instance.md`'s scan needed?
6. **Verifier dispatch (conditional)** — before dispatching auditors, check: are the research clusters this file's rules depend on complete? Look at the file's Trace: section — which synthesis clusters does it cite?

- **If all cited clusters are complete:** dispatch Completeness and Correctness Auditors normally (see `scripts/verify_prompt.md`). Fresh context, no producer reasoning leaked.
- **If any cited cluster is incomplete:** mark file as SKELETON. Skip auditor dispatch. Log in `provisionals.md`: `[filename] — [what's provisional] — [cluster that must complete before auditors run]`. Auditors fire on this file after the blocking cluster synthesizes — not before.

**After any synthesis cluster completes:** read `provisionals.md` and find all files blocked on that cluster. Update their `[PROVISIONAL]` markers with the synthesized findings, then dispatch auditors. Do not leave files in SKELETON state after their blocking cluster is done.
7. **Fix loop** — address RED findings. Hard cap: 3 RED rounds. At cap: escalate to user.
8. **Trace line** — add a `Trace:` section to the file citing its evidence source from the research archive. Format: `**Trace:** [angle name] — [archive file] — [specific claim key(s) that justify this file's core rules]`. Required on every file. Phase 8 final gate checks for this — do not skip.
9. **Log** — append result to design_log.md. If discoveries found during this file that affect other files: append to design_log Discovered Work section. Do NOT interrupt current file.

**Gate after each file (per-file loop step 4, self-check):**
- [ ] Does this file meet its done-criteria from plan.md verbatim?
- [ ] If this file is the behavioral contract (file #1): does it contain ALL required elements from Hard Rule 13? Do not verify from memory — read Hard Rule 13 directly and check each numbered element. Missing any one = not done.
- [ ] If this file is a procedure with an iterative step: did the scale-handling check (step 4) confirm a scoping rule exists for large set sizes from Phase 2? If a realistic input scale >20 items was defined in Phase 2 and no scoping rule exists: not done.
- [ ] Is there a general-class problem visible in how this file was produced? (class-before-instance check)
- [ ] What alternative structure for this file was considered?
- [ ] Are there soft rules ("try to", "prefer") that should be hard rules?

**Gate after all files built:**
- [ ] **Mechanism count check:** Count all mechanism files generated (skills + hook entries + agent type files + settings.json entries). For any count above 2 skills, 1 hook entry, 0 custom agent types — state the justification explicitly per file in design_log.md. See `procedures/agent-control-mechanisms.md` CF-3.
- [ ] Every file in the plan manifest is accounted for — built or explicitly skipped with reason in design_log.md.
- [ ] Every file has a Trace: section — read each file and confirm before proceeding to Phase 7.
- [ ] What patterns appeared across multiple files that suggest a class-level problem?
- [ ] All discovered-work items logged during Phase 6: each has been explicitly addressed, deferred with reason, or closed. None silently inherited into Phase 7.
- [ ] **Provisional marker inventory:** scan all built files for `[PROVISIONAL]` markers. For each: (a) which synthesis cluster will update it? (b) is that cluster complete? If the cluster is complete and the marker still says `[PROVISIONAL]`: update it now or log as a discovered-work item. If the cluster is not yet complete: log in `provisionals.md` (create if absent) with format: `[file] — [marker description] — [synthesis cluster that updates it]`. Do not ship a kit with stale `[PROVISIONAL]` markers that had their research cluster complete.
- [ ] **Real-input validation (required before Phase 7):** Identify ≥1 input from the actual work queue or production context (not a toy example or synthetic input) that this kit is designed to handle. Run the complete kit flow against it. Document in `diagnostics/test_run_01.md`: (a) input description, (b) which procedures fired or failed to fire, (c) any step that produced wrong or absent output, (d) pass/fail verdict against each plan.md done-criteria item verbatim. A kit tested only on synthetic inputs is not validated at the scale Phase 2 described — "we'll test on real input after Phase 7" is not a pass for this checkpoint.
- [ ] **Conflict-capable pair audit (conditional — required when behavioral contract has 4+ rules):** For each pair of rules in the generated kit's behavioral contract: verified that no realistic input could require both rules to activate simultaneously in conflicting ways. All conflict-capable pairs resolved structurally (merged, precedence rule added, or scope-separated). If no conflict-capable pairs found after full pairwise check: document explicitly ("No conflict-capable pairs identified"). Leaving conflict-capable pairs unresolved is a shipping blocker — agent runtime adjudication under constraint pressure is the failure mode this prevents. Evidence: `pm-llm-bidirectional-interference-gsm8k-collapse` (HIGH, arXiv:2603.23530) + `multi-instruction-stacking-monotonic-degradation` (HIGH, arXiv:2509.21051); PCR-angle-176, 2026-07-05. (Scope: applies to kits using frontier models with behavioral contracts that include multiple rules with overlapping trigger conditions.)
- [ ] **Rule-interaction audit for semantic/behavioral constraints (CONDITIONAL — required when behavioral contract includes 2+ semantic/behavioral rules, i.e., rules that constrain how the agent interprets, frames, or classifies content, distinct from purely structural procedural rules; claim: `constraint-type-specificity`, HIGH, MOSAIC arXiv:2601.18554 EACL 2026; PCR-angles-22-24, 2026-07-05):** For each pair of semantic/behavioral rules in the generated kit's behavioral contract: document (a) can both rules co-activate on a realistic input? (b) if yes, characterize the interaction as: synergistic (both fire and reinforce the same behavior), conflicting (both fire and pull in opposite behavioral directions), or independent. Synergistic pairs: no action required. Conflicting pairs: treat as conflict-capable and route to structural resolution (same path as conflict-pair audit above). Independent pairs: document as checked. This audit is distinct from the conflict-capable pair audit — that audit detects structural-rule interference; this audit addresses semantic/behavioral rule interactions where co-activation interference is not visible from structural review alone. If no semantic/behavioral rule pairs exist in the contract: document explicitly ("Semantic/behavioral rule-interaction audit: no qualifying pairs"). (Scope: applies when behavioral contract has 2+ rules governing interpretation, classification, framing, or tone; less critical for kits with only structural procedural rules.)
- [ ] Phase output check: all kit files exist; each has at least one completed auditor GREEN or YELLOW.

---

## Phase 7 — VERIFY

**Before dispatching auditors:** run a Phase 7 trial per `procedures/kit-trial-process.md`. The two-auditor review and the trial are separate — both required. The trial tests differential signal (does the kit add measurable value over baseline?); the auditors test internal completeness and correctness. A kit that passes auditors but produces no differential signal in trial is not ready to ship.

Two-auditor review on the COMPLETE KIT, not per-file.

Auditor raw output goes to `diagnostics/` (auto-create if absent): `diagnostics/last_verify_completeness.md` and `diagnostics/last_verify_correctness.md`. These are working files — not deliverables. They are NOT included in the shipped kit.

Dispatch both auditors in parallel on the assembled kit. Prompts in `scripts/verify_prompt.md`.

Completeness Auditor asks: what is missing from the kit as a whole? What use cases are uncovered? What would a new user of this kit get wrong?

Correctness Auditor asks: what is wrong in the kit as a whole? What rules contradict each other? What rules are ambiguous to Claude even when they seem clear to humans? What would produce unexpected behavior?

**Canary (required):** A canary validates that the Correctness Auditor is calibrated — that it catches real problems, not just obvious ones.

**What makes an input "known-bad" (required before choosing the canary input):** A canary input must satisfy one of:
- (a) It exercises ≥2 documented failure modes from pitfall_register.md or weakness_register.md for this kit type; OR
- (b) It contains deliberate, observable flaws aligned with the kit's Phase 2 quality criteria — e.g., for a research synthesis kit: a synthesis where sources contradict each other with no acknowledgment; for a procedure kit: input that triggers a known edge case the kit's rules are designed to handle; OR
- (c) It is a real input from a prior run that produced ≥1 auditor RED finding

A canary input is NOT valid if the flaws were engineered to produce a specific auditor output (circular — the canary passes by design). Distinction: criterion (b) is valid when flaws are TYPE-aligned — you know the category of flaw (e.g., "contradictory sources") but not the specific auditor finding it will produce. It is circular when you engineer flaws so the auditor produces a pre-written finding (finding-predetermined). If you wrote the expected findings list before introducing the flaws: TYPE-aligned. If you introduced flaws to match findings you already wrote: circular.

Required execution steps:
1. **Choose canary input using the above criteria.** State which criterion (a/b/c) it satisfies.
2. **Design the expected findings before dispatching:** List the specific problems the auditor MUST flag. Write these down before the dispatch — not after.
3. **Dispatch the Correctness Auditor on the canary input.**
4. **Compare:** If ≥50% of expected problems were found: auditor passes calibration. If <50%: auditor is miscalibrated — do NOT accept Phase 7 GREEN without escalating to the user.

If weakness_register.md and pitfall_register.md have no entries (new domain, first run): use the diagnostics/test_run_01.md real-input output as the canary input, deliberately introduce ≥2 flaws of a type the Phase 2 quality criteria say the kit must handle, then follow the steps above. Mark `Canary: first-run baseline — no prior failure modes documented; see diagnostics/canary_01.md`.

**Output:** diagnostics/last_verify_completeness.md + diagnostics/last_verify_correctness.md. Combined verdict.

**Route audit findings to weakness_register.md (required before Phase 8):**

After both auditors complete, do this before proceeding:
1. Read diagnostics/last_verify_completeness.md — every YELLOW and RED finding is a candidate for weakness_register.md
2. Read diagnostics/last_verify_correctness.md — same
3. For each finding that was not fixed (YELLOW caveats, unfixable gaps): add an entry to weakness_register.md under "Gaps identified during Phase 7 audit"
4. A weakness_register.md that does not contain Phase 7 findings is not honest — it only has the pre-identified template gaps, not the real gaps this specific kit run exposed

**Gate — answer before proceeding:**
- [ ] Combined verdict is GREEN or YELLOW (not RED). If RED: fix and re-dispatch.
- [ ] All YELLOW caveats surfaced to user explicitly.
- [ ] Cross-file consistency checked: no rules in different files contradict each other.
- [ ] Entry-point clarity: a new agent starting from ENTRYPOINT can reach every file without producer guidance.
- [ ] research_archive/ is present. If not: RED, do not proceed.
- [ ] weakness_register.md contains Phase 7 audit findings (not just template pre-identified gaps). If it only has template content: RED.
- [ ] **Realistic-scale test run completed:** at least one test input at the size described in Phase 2 "realistic input scale" has been run through the full procedure. A kit tested only on toy inputs has not been tested. If no realistic-scale test has been run: this gate does not pass. If the realistic input scale from Phase 2 produced failures: each failure is in weakness_register.md.
- [ ] **Per-constraint validation:** the realistic-scale test evaluated compliance RULE-BY-RULE, not only as a monolithic pass/fail. Compliance is not a monolithic capability — it varies with rule type, rule quantity, and rule position in the system prompt; co-present rules create synergistic or conflicting interactions invisible to whole-output evaluation. At minimum: each distinct behavioral rule in the kit exercised at least once. A test that only checks whether the final output "looks right" does not pass this item (basis: `constraint-type-specificity`, HIGH, MOSAIC arXiv:2601.18554 EACL 2026; `sequential-instruction-universal-failure`, HIGH, SIFo arXiv:2406.19999 EMNLP 2024). **Structural mechanism test (PROVISIONAL — compound mechanism: `proactive-agent-f1-baseline` + `goal-directedness-behavioral-vs-mechanistic-split`, both HIGH with scope caveats; compound confidence MEDIUM; PCR-angle-119, 2026-07-05):** For each behavioral rule in the kit that enforces a structural mechanism (e.g., agent re-reads goal model at session start, agent names next obstacle before closing, agent runs class-before-instance scan), at least one test case should be adversarially constructed so that the agent could produce surface-compliant output WITHOUT the structural trigger having fired. If the agent passes this test, the rule is enforcing mechanism — the trigger fired. If it fails, the rule is only shaping surface form. A kit certified against surface compliance only may fail in novel execution contexts. Flip trigger: remove if adversarial structural tests produce no diagnostic value distinct from standard per-constraint tests across ≥5 kit build runs. **Prohibition-commission interaction at long horizon (CONDITIONAL — applies when behavioral contract contains both NEVER/prohibition rules and commission/requirement rules AND the kit targets sessions >10 turns; compound: `sequential-instruction-universal-failure`, HIGH, SIFo arXiv:2406.19999 × `omission-commission-asymmetry`, HIGH, arXiv:2604.20911; PCR-angles-22-24, 2026-07-05):** Include at least one test scenario run to turns 10+ that checks commission rules AFTER NEVER rules have had opportunity to decay. Basis: NEVER rules decay from ~73% compliance at turn 5 to ~33% at turn 16 while commission rules hold ~100% throughout; test suites checking only turns 3–5 produce false confidence in kits with both rule types. The compound failure mode: a commission rule firing at turn 12 may fire in the absence of a NEVER rule that decayed at turn 8, creating behavior worse than if neither rule were present. Test criterion: the scenario should produce a state where the NEVER rule has had ≥8 turns to decay and the commission rule then activates — confirming commission compliance is not masking NEVER rule decay in the certified profile. If no test suite reaches turn 10+: flag as a gap in weakness_register.md. **Specialist detection note (CONDITIONAL — applies when kit has NEVER/prohibition rules and targets sessions >5 turns; compound: `peer-review-statistical-expert-biggest-gain`, HIGH SCOPE: quantitative empirical research × `omission-commission-asymmetry`, HIGH, arXiv:2604.20911; PCR-research-quality, 2026-07-05):** When dispatching the Correctness Auditor for long-session kits with NEVER rules, specialize the auditor prompt with an explicit scope addition: "Your specific focus includes finding turns where a NEVER/prohibition rule in this behavioral contract was stated but did not fire — examine turns 5+ specifically." The single highest-ROI auditor addition for behavioral kits targeting long sessions is an auditor scoped to the highest-decay failure class (NEVER rules). General-purpose auditors tend to miss NEVER-rule decay because it is not visible in any single turn — it appears only as a cross-turn trend. A scoped instruction converts a general review into a specialist pass for the hardest-to-detect failure mode. PROVISIONAL — the specialist-reviewer principle derives from quantitative empirical research contexts (scope caveat); extension to behavioral contract auditing for LLM kits is a medium-confidence principle derivation. Flip trigger: remove if N=5 kit builds using specialized vs. general-purpose auditors show no difference in NEVER-rule violation detection rate. (Scope: applies to kits targeting sessions >10 turns; note "not applicable for short single-session kits" and proceed if turn depth is ≤10.) **Paraphrase-variant stability test (PROVISIONAL — applies when kit input naturally includes varied natural-language framing; claim: `prompt-sensitivity-semantic-invariance`, MEDIUM, PCR-angles-22-24, 2026-07-05):** For kits whose per-constraint test suite includes natural-language input scenarios: include at least two paraphrase variants of one key scenario per tested rule. A rule that passes on one formulation but fails on a semantically identical paraphrase is surface-sensitive, not reliably enforced. Minimum: one paraphrase variant per behavioral rule where production input phrasing is expected to vary. If all kit inputs are structured/programmatic (not natural language): note "paraphrase-variant test not applicable" and proceed. Flip trigger: downgrade or remove if N=5 kit builds show no compliance difference between canonical and paraphrase variants across any rule class.
- [ ] **Omission-weighted quality assessment (arXiv:2507.11538, HIGH; arXiv:2605.03858, HIGH; PCR-batch-4, 2026-07-05):** Kit quality evaluation must use recall-based completion metrics (verify every required output is present) NOT precision-only or F1 scores — omission failures dominate commission failures at 34.88:1 ratio at high instruction density (IFScale, HIGH); recall collapses while precision holds steady (seqBench, MEDIUM). LLM judges over-credit partial omissions — they systematically map 'partial' satisfaction to 'yes' (MCJudgeBench, HIGH, arXiv:2605.03858); do NOT use LLM judge alone as the omission detection mechanism. Required: structural checklist before free-text quality review — enumerate required outputs by name before assessing completeness; checklist-based enumeration outperforms open-ended LLM review by 35.7% for absence detection (AbsenceBench placeholder insertion, MEDIUM). Session length management is the dominant compliance lever, NOT structural instruction placement — file size/position/architecture had NO detectable effect on compliance in N=16,050 sessions (config null result, HIGH; per-step session-length odds reduction OR=0.944/function). Soft constraints (omission-type) must be re-injected periodically — they decay from 73% to 20% by turn 25 while commission constraints hold above 100%+ (SRD, MEDIUM). Canary calibration note: when testing the Correctness Auditor with a canary input, include at least one required output that is ABSENT (not just present-but-wrong) — auditors calibrated only on present-but-flawed inputs will miss the dominant failure class.
- [ ] **Structural write failure quality monitoring (arXiv:2605.28840, HIGH; batch 5 angle 2, 2026-07-05):** Kit quality evaluation must track tool-sequence correctness (TSS), NOT argument correctness alone. Write failure is primarily STRUCTURAL: tool selection, omission, and sequence errors; TSS=0.87 predicts task correctness (90.2% vs 61.2%); argument-level correctness (AC=0.69) is NOT predictive (r=0.12, p=0.31). 60% of first divergence events occur within the first two pipeline steps — evaluation that only checks final output quality will miss the dominant failure class. For kits with multi-step tool workflows: Phase 7 validation must verify that each required tool was called in the correct sequence at least once in the test run, not only that the final output is correct. Retrieval is the dominant bottleneck in agent memory systems; write strategy spread is only 3–8pp vs retrieval's 20pp (arXiv:2603.02473, HIGH) — if the kit includes both write and retrieval mechanisms, prioritize retrieval validation. Mandatory checkpoints outperform agent-discretionary writes: agents lack architectural mechanisms for sustained internal state maintenance and cannot reliably know WHEN to issue an external write without structural forcing. (Scope: applies when the kit's procedures include multi-step tool chains with ≥2 sequential tool calls; less critical for single-tool operations.)
- [ ] **Test distributional independence (CONDITIONAL — applies when Phase 7 validation uses scenario-based or holistic evaluation rather than purely field-presence checks; compound: `automated-grade-domain-accuracy-cliff`, HIGH SCOPE: pre-2024 NLP tools × `convergence-blocks-vs-tempers`, HIGH SCOPE: causal-inference contexts; PCR-research-quality, 2026-07-05):** When validation uses scenario-based testing (not only field-presence checks), ensure test cases are drawn from at least 2 structurally distinct distributional regimes — e.g., simple well-specified input vs. complex underspecified input, or typical-use scenario vs. adversarial edge case. Test sets where all inputs come from the same distributional source (same domain, same complexity tier, same specification style) produce uninformative convergence: agreement proves only that the shared failure mode is absent, not that the kit generalizes. If all test inputs come from one regime: add at least one test from a structurally distinct regime before accepting Phase 7 GREEN. Scope: most relevant when Phase 7 evaluates behavioral compliance holistically rather than per-field; less critical for structural rule validation where field presence is directly observable. PROVISIONAL — the convergence principle is HIGH confidence within causal-inference contexts; extension to general kit validation is a medium-confidence derivation. Flip trigger: remove if N=5 kit builds show no diagnostic difference between single-regime and multi-regime test sets for kit behavioral compliance certification.
- [ ] **Minimum model tier validated:** the model used in the realistic-scale test meets or exceeds the minimum model tier declared in the generated kit's behavioral contract. If the test was run on a lower tier than declared: the results are not valid and the test must be rerun.
- [ ] **Long-session compliance (conditional):** if the kit is designed for long-horizon agentic sessions (>10-15 turns or sessions with context compaction), verify that the kit specifies a beyond-prompt enforcement mechanism for critical NEVER/prohibition rules. Context compaction raises compliance violations from 0% to 30-59% as behavioral instructions are dropped from summaries (`governance-decay-compaction`, HIGH, arXiv:2606.22528). If the kit targets single-session or short interactions only: note "long-session compliance not applicable" and proceed. Additionally, if Phase 6 conflict-capable pair audit identified any conflict-capable pairs: confirm those pairs were structurally resolved before marking this gate passed — beyond-prompt enforcement cannot mitigate asymmetric compaction of an unresolved conflict pair (compound: `pm-llm-bidirectional-interference-gsm8k-collapse` × `governance-decay-compaction`, HIGH×HIGH, PCR-angle-176, 2026-07-05).
- [ ] **Visual output gate (conditional):** if Phase 2 domain brief "Visual output" is YES — a human visual review step is present in the kit's procedure files. Agent cannot self-validate visual output (overlap, spacing, alignment, color errors are systematically missed). If the kit has no human visual review gate and the domain produces visual output: add to weakness_register.md as an open gap before proceeding.
- [ ] **Regression gate (conditional):** if Phase 2 domain brief "Visual output" is YES, or the domain involves changes to interconnected outputs (CSS cascade, shared components, shared utilities) — the kit's procedure files must include: (1) blast-radius naming before any change (what else does this affect?); (2) minimum-sufficient-change rule (fix only the specific target; no adjacent refactoring); (3) blast-radius verification after (check not just the fix but everything the blast-radius list named). A kit that tells the agent to fix things without these three rules will fix one thing and break another.
- [ ] Phase output check: combined verdict GREEN or YELLOW with caveats documented.

---

## Phase 8 — HANDOFF

Assemble final output:

1. **Kit files** — all generated files, verified
2. **Research archive** — `research_archive/` with all findings and evidence classifications
3. **Weakness register** — `weakness_register.md`: known gaps, contested decisions, confidence levels. Kit knows what it doesn't know.
4. **Pitfall register** — `pitfall_register.md` pre-populated with problem classes discovered during this kit-making run
5. **Design log** — `design_log.md` with full session history
6. **Trace lines** — every principle and procedure in the kit has a Trace: section citing its evidence source from the research archive

**Output:** Assembled kit directory ready for use.

**Final gate — answer before shipping:**
- [ ] research_archive/ contains one file per angle with saturation logs and verify verdicts.
- [ ] weakness_register.md lists real gaps — not "no known weaknesses."
- [ ] Every hard rule in the kit has a Trace: line citing the specific archive claim that motivated it — not just an archive file name. A Trace: that points to a file without naming the claim is not traceable.
- [ ] pitfall_register.md is pre-populated with problem classes discovered during this run.
- [ ] design_log.md is complete and honest — full session history including dead ends and alternatives rejected.
- [ ] "Wait —" pause: re-read the kit's ENTRYPOINT as if you were a new agent with no context. Does it make sense? Is anything missing?
- [ ] **Realistic-scale test documented:** the Phase 7 realistic-scale test run has a written evaluation (test output + evaluation.md). Any failures from that test are captured in weakness_register.md. "The test ran" is not sufficient — the outcomes must be documented and the weakness register must reflect them. If neither exists: this gate does not pass.
- [ ] Phase output check: all items above are YES before declaring the kit done.

---

## What this process is NOT

- Not a one-shot generation: kit content is generated, reviewed adversarially, revised, then reviewed again
- Not a research-then-forget pipeline: the research archive ships with the kit
- Not user-driven throughout: user is involved at intake (Phase 2), gap questions (Phase 4), plan review (Phase 5), and escalations only
- Not perfect: the weakness register names what it doesn't know; improvement happens through real use and the pitfall register feedback loop

---

## Failure modes to watch (see pitfall_register.md for full list)

- **Scope-completion blindness** — completing a phase and stopping, no reflection, no "what else?"
- **Class-before-instance violation** — fixing specific instances without naming the general class
- **Research-as-procrastination** — infinite research without reaching saturation criterion
- **Producer certification** — claiming a file is done without auditor sign-off
- **Placeholder shipping** — delivering files with "TBD" or vague sections
- **Archive amnesia** — shipping kit files without the research archive
