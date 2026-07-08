# Synthesis: USER-01/02 — Intake Protocol (Essential vs. Inferable)

**Date:** 2026-07-02
**Archives:** essential-vs-inferable-intake-information-*.md (USER-01, 20 claims), front-loaded-intake-design-for-autonomous-work-*.md (USER-02, 19 claims)
**Procedure:** research-synthesis.md (Steps 1–6)
**Kit file target:** ENTRYPOINT.md Hard Rule 13 element 8

---

## Step 1 — Grouped table

| # | Group | n | Empirical | Consensus | Anecdote | Max verify |
|---|-------|---|-----------|-----------|----------|------------|
| A | goal-level-blocking | 4 | 3 | 1 | 0 | HIGH |
| B | essential-inferable-classifier | 6 | 4 | 1 | 1 | MEDIUM |
| C | evpi-question-selection | 4 | 4 | 0 | 0 | MEDIUM |
| D | execution-gating-structural | 4 | 3+1↓ | 0 | 0 | MEDIUM |
| E | implicit-inference-answerability | 5 | 2+1↓ | 2 | 0 | MEDIUM |
| F | security-failure-modes | 2 | 1+1↓ | 0 | 0 | HIGH |
| G | intake-limitations | 3 | 0 | 3 | 0 | CONSENSUS |
| MISC | clarification-efficiency, underspecification-detection, silent-misframing, goal-specification-impact, multi-agent-spec, pre-execution-planning, intake-patterns | 11 | 8 | 0 | 3 | MEDIUM |

↓ = LOW-confidence empirical downgraded to consensus tier at Step 2.5

**Total: 39 claims** (20 USER-01 + 19 USER-02)

Claims by group assignment:

**Group A** (4): clarification-timing-type-dependent [HIGH], goal-clarification-timing-cliff [MEDIUM], input-clarification-midpoint-decay [MEDIUM], goal-level-unknowns-upfront-blocking [CONSENSUS]

**Group B** (6): underspecification-three-classes [MEDIUM], ua-multi-essential-inferable-split [MEDIUM], cart-stopping-criterion-counterfactual [MEDIUM], goal-drift-strong-elicitation [MEDIUM], clarevals-three-ambiguity-types [LOW→consensus], information-state-dialogue-grounding [CONSENSUS]

**Group C** (4): sage-agent-pomdp-evpi [MEDIUM], uncertainty-decomposition-aleatoric-epistemic [MEDIUM], information-gain-reward-clarification [MEDIUM], structured-uncertainty-evpi-vs-naive [MEDIUM]

**Group D** (4): cocoreli-execution-precondition-blocking [MEDIUM], lm-agents-fail-to-act-on-risk-knowledge [MEDIUM], ambig-swe-three-step-capability [MEDIUM], ask-or-assume-decoupled-scaffold [LOW→consensus]

**Group E** (5): implicit-intelligence-unstated-constraints [MEDIUM], pi-bench-proactive-unstated-intent [MEDIUM], user-answerability-constraint [LOW→consensus], open-world-closed-world-inference-defaults [CONSENSUS], progressive-disclosure-reduces-intake-friction [CONSENSUS]

**Group F** (2): aspi-clarification-security-risk [HIGH], clarification-service-task-backfire [LOW→consensus]

**Group G** (3): unknown-unknowns-upfront-limit [CONSENSUS], waterfall-overspec-60pct-failure [CONSENSUS], proactivity-interruption-cost-framework [CONSENSUS]

**MISC** (11): clariti-fewer-questions-same-performance [MEDIUM], no-model-asks-in-optimal-window [LOW], interactive-clarification-baseline-overtask [LOW], ambig-swe-interactive-74pct-gain [MEDIUM], silent-misframing-ambig-ds [MEDIUM], agentask-handoff-clarification-error-types [LOW], mast-taxonomy-specification-failure [MEDIUM], anticipatory-planning-vs-reactive [MEDIUM], llm-generated-context-files-degrade-performance [ANECDOTE], liza-goal-doc-coach-challenger [ANECDOTE], arbor-research-contract-intake [ANECDOTE]

---

## Step 2 — Contradiction scan

**Potential contradiction 1: Group A (front-loading required) vs Group G (front-loading fails)**
Group A: goal unknowns must be resolved before 10% of execution. Group G: front-loaded intake cannot capture unknown unknowns.
Resolution: SCOPE CONDITION — Group A covers known unknowns (explicit gaps you can ask about); Group G covers unknown unknowns (requirements users haven't articulated). Not a contradiction — complementary constraints.

**Potential contradiction 2: Group F clarification-backfire vs Group A (front-loading is correct)**
Group F: clarification logic in SERVICE-ORIENTED tasks (schema-bound execution) degrades performance 33%.
Group A: goal clarification must be front-loaded before execution.
Resolution: SCOPE CONDITION — the service-task failure occurs when clarification logic interacts with schema execution; the fix (from both findings) is to COMPLETE intake before execution begins, not to remove intake. Not a contradiction — Group F validates the architecture of completing intake first.

**Potential contradiction 3: Group E user-answerability vs Group B outcome-critical**
Group E (LOW→consensus): if user cannot answer, information is inferable. Group B: outcome-critical unknowns must be asked.
Resolution: SCOPE CONDITION — user-answerability is a FILTER applied after identifying outcome-critical unknowns. If outcome-critical information is also un-answerable by the user, this is a design failure or a mis-classification (information may be infer-from-artifact, not infer-from-question). The LOW→consensus downgrade on user-answerability means this cannot override the outcome-critical classification anyway.

**Result: No CONTESTED contradictions.** All apparent conflicts resolve with scope conditions.

---

## Step 2.5 — Evidence tier adjustment

LOW-confidence empirical claims downgraded to consensus tier for synthesis:

- `ask-or-assume-decoupled-scaffold` [LOW]: 38% over-clarification rate is fabricated; 'zero attempts' qualifier unverified → CONSENSUS
- `clarification-service-task-backfire` [LOW]: mechanism names ('Clarification-Induced Syntactic Collapse', 'Abandonment Catalyst') not confirmed in source; 'zero attempts' qualifier unverified → CONSENSUS
- `user-answerability-constraint` [LOW]: specific DeepSeek/Claude model comparison not found in any source → CONSENSUS
- `clarevals-three-ambiguity-types` [LOW]: the normative resolution-path assignments (which type blocks vs. infers) not confirmed in source → CONSENSUS

Archives are not altered. Downgrades applied only in synthesis.

---

## Step 2.6 — Evidence-type scope check

Archive is primarily benchmark-based evaluation studies (SWE-bench variants, ClarifyBench, ASPI, pi-Bench, LHAW). These are controlled benchmarks but not RCTs or pre-registered experiments. Mechanism claims are observational. HIGH-tier calibration: applies to "benchmark-validated in coding/planning/tool-calling agent settings" — NOT RCT-grade evidence for human intake protocol design.

---

## Step 3 — Confidence map (tiers updated 2026-07-05 from fresh-pass)

| Group | Tier | Key claims | Evidence basis | Conflicts | Action |
|-------|------|-----------|----------------|-----------|--------|
| A: goal-level-blocking | **HIGH** (SCOPE: The 10% cliff and near-zero residual value of goal clarification applies specifically to tasks with early irreversible s) | clarification-timing-type-dependent (HIGH, arXiv:2605.07937), goal-level-unknowns-upfront-blocking (CONSENSUS, 3 papers), goal-clarification-timing-cliff (MEDIUM), input-clarification-midpoint-decay (MEDIUM) | pass@3 drops 0.78→baseline after 10% execution; input clarification retains value through ~50%. Applies to: coding/planning agents. NOT directly tested in free-form generation. Indirectness note: evidence is from agentic coding and planning benchmarks, not kit-maker generation specifically. | None | Goal unknowns = blocking before execution; input/constraint unknowns = deferrable to ~50%; USE DIRECTLY |
| B: essential-inferable-classifier | **CONSENSUS** | underspecification-three-classes (MEDIUM, arXiv:2602.10525), ua-multi-essential-inferable-split (MEDIUM, arXiv:2603.26233), cart-stopping-criterion-counterfactual (MEDIUM, arXiv:2510.08517), goal-drift-strong-elicitation (MEDIUM, arXiv:2505.02709) | LHAW three-class taxonomy (outcome-critical/divergent/benign) confirmed at paper level. UA-Multi 69.40% confirmed; ask rate 62-78% by difficulty unverified in source. CaRT counterfactual mechanism confirmed; OOD domain claim wrong (not dermatology). Framework is sound; specific threshold numbers are illustrative not prescriptive. | None | Use framework (three-class taxonomy); treat 62-78% as ballpark not calibrated threshold; note as CONSENSUS |
| C: evpi-question-selection | **CONSENSUS** | sage-agent-pomdp-evpi (MEDIUM, arXiv:2511.08798), information-gain-reward-clarification (MEDIUM, arXiv:2606.03135), structured-uncertainty-evpi-vs-naive (MEDIUM, arXiv:2511.08798) | Note: sage-agent and structured-uncertainty-evpi cite the same paper — partially dependent. 59.73% vs 55.70% confirmed from PDF; 3.7% improvement (arXiv:2606.03135) confirmed. Self-benchmark limitation on SAGE-Agent. EVPI direction confirmed across 3 citation instances (2 independent papers). Indirectness: tested on tool-calling agents with explicit parameter domains. | None | Use EVPI framing; note it requires explicit parameter domains to compute; works best with structured intake schemas |
| D: execution-gating-structural | **CONSENSUS** | cocoreli-execution-precondition-blocking (MEDIUM, arXiv:2509.04470), lm-agents-fail-to-act-on-risk-knowledge (MEDIUM, arXiv:2508.13465), ambig-swe-three-step-capability (MEDIUM, arXiv:2502.13069) | Agents detect underspecification and proceed anyway: >98% risk knowledge but <26% action avoidance (arXiv:2508.13465). Structural coupling between detection and blocking eliminates hallucinated actions (COCORELI). ICLR 2026 confirms three-step independence. Indirectness: controlled settings; specific domains may vary. | None | **GAP IN ELEMENT 8: structural enforcement language absent.** Add to element 8: intake gate must be enforced structurally — behavioral rule without enforced gate is insufficient |
| E: implicit-inference-answerability | **CONSENSUS** | implicit-intelligence-unstated-constraints (MEDIUM, arXiv:2602.20424), open-world-closed-world-inference-defaults (CONSENSUS), progressive-disclosure-reduces-intake-friction (CONSENSUS) | Best agents achieve 48.3% on implicit constraints. CWA/OWA distinction determines when defaults are safe. Progressive disclosure: max 4-5 intake steps; stagger questions. | None | Implicit-constraint category should be named in element 8; CWA/OWA helps classify domains; stagger ≤4-5 questions |
| F: security-failure-modes | **HIGH (narrow)** (SCOPE: HIGH applies only when clarification logic is actively present and triggered in the agent pipeline; agentic systems that) | aspi-clarification-security-risk (HIGH, arXiv:2605.17324, 728 scenarios) | o3: 1.8%→34.0%; Gemini: 2.2%→35.7% injection amplification confirmed. 728 scenarios. Indirectness: agents with tool-calling in adversarial environments. | None | Security caveat already applied to element 8 — CONFIRMED; scope: kits processing external inputs |
| G: intake-limitations | **CONSENSUS** | unknown-unknowns-upfront-limit (CONSENSUS, arXiv:2602.15259), waterfall-overspec-60pct-failure (CONSENSUS, Standish CHAOS), proactivity-interruption-cost-framework (CONSENSUS, arXiv:2605.06717) | Front-loaded intake captures known unknowns only. Unknown unknowns emerge during execution. Interruption cost computation is the right decision criterion for ask-vs-proceed. | None | Execution-time monitoring note already in element 8 — CONFIRMED |

---

## Step 3.5 — Dual-pass reliability check

**Second pass (shuffled reading order within groups):**

- Group A (CONSENSUS anchor read first, HIGH read last): CONSENSUS anchor from 3 papers establishes goal-blocking conclusion before HIGH claim confirms it empirically. Tier assignment unchanged → **HIGH**
- Group B (LOW→consensus read first): ClarEval normative claim is consensus-tier; reading it first doesn't elevate Group B to HIGH. Three MEDIUM claims still converge. Tier unchanged → **CONSENSUS**
- Group C (smallest-improvement claim first): Information-gain 3.7% improvement (modest) read first. Still sees SAGE-Agent and UC-decomposition converging. Tier unchanged → **CONSENSUS**
- Group D (LOW→consensus read first): Ask-or-assume 69.40% confirmed but 38% fabricated → consensus tier. Other MEDIUM claims still establish structural-gate need. Tier unchanged → **CONSENSUS**
- Groups E, F, G: Reading order cannot change outcomes (all CONSENSUS or one dominant HIGH anchor in F).

**All tier assignments stable. No CONTESTED reclassifications.**

---

## Step 3.6 — Counter-prior pass

**Highest-confidence group: Group A (goal-level-blocking) — HIGH**

Main conclusion: Goal unknowns must be resolved before any execution begins. Goal clarification loses nearly all value after 10% of execution.

Counter-hypothesis: Goal clarification can be effectively deferred because agents self-correct task framing from execution context. Once an agent begins executing, the emergent task context disambiguates the goal, making upfront clarification unnecessary.

Required evidence: A study showing goal clarification at 30-50% of execution produces equivalent outcomes to pre-execution clarification; or that agents reliably self-correct goal framing mid-execution without performance loss.

Supporting evidence in archive: None. input-clarification-midpoint-decay (MEDIUM) explicitly contrasts INPUT deferability against GOAL non-deferability. goal-drift-strong-elicitation (MEDIUM) shows stronger initial specification REDUCES drift — directional opposite. No claim supports mid-execution goal recovery.

Scope caveat: Counter-hypothesis might hold for tasks with only one valid interpretation where execution context fully specifies the goal. Archive doesn't cover this scope.

Tier revision: **Unchanged. HIGH confirmed.**

---

## Step 4 — Adversarial check on user assumptions (element 8 as written)

| Assumption | Verdict | Evidence |
|-----------|---------|---------|
| Goal unknowns are blocking | SUPPORTED | Group A, HIGH |
| Input/constraint unknowns deferrable | SUPPORTED | Group A, HIGH (input-clarification-midpoint-decay) |
| 1-3 questions max | SUPPORTED | Group C CONSENSUS (1.3 optimal from information-gain; CLARITI 3.0 vs 5.1) |
| EVPI/action-counterfactual selection | SUPPORTED | Group C CONSENSUS |
| Benign-class unknowns are inferable | SUPPORTED | Group B CONSENSUS (LHAW taxonomy) |
| Security sandbox before tool execution | SUPPORTED | Group F HIGH (narrow) |
| Pair with execution-time monitoring | SUPPORTED | Group G CONSENSUS |
| **Structural enforcement of intake gate (MISSING from element 8)** | **GAP** | Group D CONSENSUS: agents detect gaps and proceed anyway; structural coupling required |

**One gap: element 8 specifies what to ask/infer but does not require structural enforcement of the intake gate.** Group D (CONSENSUS, 3 independent papers) establishes that behavioral rules without structural enforcement are insufficient — agents with >98% gap-detection accuracy still proceed to execution 74%+ of the time without structural blocking.

---

## Step 5 — User questions

CONTESTED groups: none

GAP items requiring decision:
- Structural enforcement language: should element 8 require that the behavioral contract mandate a structural gate (do not proceed to tool execution until essential unknowns are resolved)? → Decision: YES, apply. This is within expert domain and directly supported by Group D research. No user input needed — applying as a direct research implication.

---

## Step 6 — Kit file updates

**Change 1: ENTRYPOINT.md element 8 — Add structural enforcement requirement**

The current element 8 states what to ask/infer but not how to enforce the gate. Adding:

"Structural enforcement: the intake gate must block tool execution — do not proceed to any tool call until all outcome-critical unknowns are resolved. Agents routinely detect specification gaps and proceed anyway (>98% detection rate, <26% halt rate — arXiv:2508.13465); a behavioral specification without structural blocking is insufficient. The kit's behavioral contract must include an explicit self-check before the first tool call: 'Are all essential unknowns resolved? If not: do not proceed.'"

**Change 2: grounding-map.md row 7 — Status update**

Row 7 (Intake protocol) updated: 📋 ARCHIVE EXISTS → 🔬 SYNTHESIZED (applied 2026-07-02)

---

## Confidence map summary

| Group | Tier | Kit rule decision |
|-------|------|------------------|
| A: goal-level-blocking | **HIGH** | Goal unknowns = blocking; input unknowns = deferrable to ~50% |
| B: essential-inferable-classifier | **CONSENSUS** | Three-class taxonomy valid; ask rate 62-78% is illustrative |
| C: evpi-question-selection | **CONSENSUS** | EVPI/action-counterfactual is correct filter; requires explicit intake schema |
| D: execution-gating-structural | **CONSENSUS** | Structural gate required; behavioral rule alone insufficient → **add to element 8** |
| E: implicit-inference-answerability | **CONSENSUS** | Implicit-constraint category; CWA/OWA domain classification helps |
| F: security-failure-modes | **HIGH (narrow)** | Injection amplification 10-20x confirmed — already applied |
| G: intake-limitations | **CONSENSUS** | Front-loaded captures known unknowns only — already applied |

---

*Synthesis complete 2026-07-02. Procedure: research-synthesis.md Steps 1–6 including 2.5, 2.6, 3.5, 3.6.*

---

## Step 3.7 — Principled Derivation (2026-07-05)

### A: goal-level-blocking (HIGH)
**Finding (data point):** Goal unknowns must be resolved before any execution begins: pass@3 drops from 0.78 to baseline after 10% of execution (arXiv:2605.07937). Input/constraint unknowns retain value through ~50% of execution. Goal clarification loses nearly all value after the 10% window; input clarification is deferrable to roughly the midpoint.

**Principle (Sub-step A):** The urgency of resolving an unknown before execution begins is proportional to how structurally that unknown determines the shape of what is being built — not to how important it is in absolute terms. Unknowns that fix direction (what is being built and for what purpose) lose resolution value as soon as execution shapes itself around an implicit answer, because late resolution then requires restarting rather than adjusting. Unknowns that fix parameters (how it is built, under what constraints, with what inputs) retain value through much of the execution, because their resolution modifies existing work without requiring it to be discarded. These two classes are distinguished by structural coupling, not importance: a direction unknown answered late forces a restart; a parameter unknown answered late forces a correction. The class determines the resolution deadline; the importance determines whether the unknown is worth resolving at all.

**Fit to our setup (Sub-step B):** The finding was tested in single-run agentic task execution (a coding or problem-solving task completed in one continuous run). Kit-making differs in three ways that affect applicability. First, it is a multi-phase design process, not a single run — the "execution window" maps to phases, not steps within a phase, and the value-cliff concept applies phase-by-phase rather than globally. Second, earlier phases are revisable: a Phase 2 goal clarification discovered in Phase 5 is costly but survivable, which lowers (but does not eliminate) the urgency asymmetry. Third, kit-making operates at a meta-level — we are designing the intake protocol that governs the kit's runtime behavior, not executing the kit ourselves, so the principle applies twice: once to how the kit-maker resolves its own goal unknowns at intake (Phases 1-2), and once to how the generated kit's intake protocol should be structured for the agent that runs it. The principle holds in both layers because the structural asymmetry between direction unknowns and parameter unknowns is domain-independent. It applies somewhat less strongly than in single-run execution because phase revisability reduces restart cost, but the cost reduction is partial — a direction unknown surfacing in Phase 6 still invalidates Phase 3-5 work, so the urgency gap between the two classes survives.

**Derivations beyond the finding (Sub-step C):**
- Intake question selection should rank by temporal decay profile, not by importance alone. A moderately important goal-class unknown (one that determines what is being built) outranks a highly important parameter-class unknown (one that constrains how it is built) at the intake gate, because the goal-class unknown loses value immediately while the parameter-class unknown can be resolved or inferred mid-execution. The generated kit's intake protocol should explicitly classify each candidate question as goal-class or parameter-class, block on goal-class unknowns before any tool call, and defer or infer parameter-class unknowns. A flat list of intake questions treated as equally urgent mixes the two classes and will either over-block (asking too many questions before execution) or under-protect (allowing execution to begin with goal direction unresolved).
- Phase gates in multi-phase kits function as temporal checkpoints — each gate is the last structural moment at which a given class of unknown can be resolved before its value cliff. This implies that phase gate positioning should be audited against which unknown class each gate is designed to catch: a gate placed after a goal-unknown's value cliff catches nothing; a gate placed before a parameter-unknown's value cliff blocks unnecessarily. For the kit-maker, Phase 2 completion is the goal-unknown gate; later phase gates (4, 5) are the natural checkpoints for parameter-class unknowns. If a phase gate does not map to a recognizable unknown class, it is either mispositioned or redundant.
- When the same unknown surfaces repeatedly across multiple sessions or use cases of a generated kit, the recurrence pattern is evidence that the unknown is structural (goal-class) rather than incidental (parameter-class) — because parameter unknowns tend to resolve early and not recur. A kit that accumulates a backlog of frequently-asked intake questions should reclassify those questions upward toward goal-class and move them earlier in the intake sequence. This implies a review mechanism: after a set number of kit runs, audit which intake questions were asked most often and whether any should be promoted to pre-execution required questions.

### F: security-failure-modes (HIGH (narrow))
**Finding (data point):** Clarification logic in adversarial environments amplifies prompt-injection success rates 10–20×: o3 rises from 1.8% to 34.0% and Gemini from 2.2% to 35.7% (arXiv:2605.17324, 728 scenarios). Scope: agents with tool-calling in adversarial environments processing external inputs.

**Principle (Sub-step A):** Any agent mechanism that increases the depth or frequency of engagement with external input content — whether by soliciting clarification, requesting elaboration, or iterating on ambiguous material — unconditionally amplifies the influence that content exerts on the agent's behavior. The same mechanism that improves output quality in benign conditions becomes an attack-surface multiplier in adversarial conditions, because the mechanism does not distinguish intent: it increases the agent's receptivity to whatever the external source supplies. Helpful engagement behaviors and adversarial-influence pathways share the same underlying channel.

**Fit to our setup (Sub-step B):** Tested in: tool-calling agents processing external, untrusted inputs in explicitly adversarial environments, with prompt injection as the attack vector and two frontier models as subjects. Kit-making differs in two ways. First, the kit-maker itself (the agent building a kit) typically operates in a trusted-input context — the user is the input source, not an external adversarial party. The direct injection risk during kit construction is therefore lower. Second, the kit's output is a behavioral specification for a downstream agent that will face real external inputs; the principle applies one level removed — it constrains what behaviors we should embed in the generated kit's intake protocol, not how we run kit-making. The principle applies most strongly when a generated kit is designed for: tool-calling in adversarial environments, external document or web content processing, or any domain where inputs arrive from parties other than the trusted user. It applies least strongly for kits operating entirely within a closed, trusted corpus with no external-source tool calls.

**Derivations beyond the finding (Sub-step C):**
- If any engagement-deepening behavior amplifies adversarial influence regardless of mechanism label, then iterative refinement loops, multi-turn context accumulation from external sources, and feedback-solicitation directed at external documents share the same amplification property as clarification logic — even though the study only measured clarification. Kit intake protocols should treat any multi-step engagement with external content as a high-risk pattern, not just the clarification subtype. Confidence: medium (same mechanism; different surface behavior; not independently measured).
- The amplification is proportional to the number of engagement turns, not merely the presence of engagement. A single-pass agent that reads external input and acts is categorically less exposed than one that reads, asks for more, then reads again. Kit design decisions should default to minimizing the number of turns an agent spends processing external content before reaching a trusted boundary — each additional turn is an additional amplification stage. Confidence: medium (mechanism-derived; turn-count effect not directly measured in the source study).
- If the risk is that the agent treats external-source content as authoritative context during clarification, then sequencing the clarification before external-content processing — asking the trusted user to resolve ambiguities before the agent reads any external input — should reduce amplification, because the agent's receptivity is primed by trusted context before encountering adversarial material. Kit intake protocols should implement a clarify-first, read-external-second ordering rule rather than interleaving. Confidence: medium (follows from the channel model; not tested in the study, which compared clarification-on vs. clarification-off rather than varying the sequencing).

### B: essential-inferable-classifier (CONSENSUS)
**Finding (data point):** A three-class taxonomy (outcome-critical / divergent / benign) correctly partitions unknowns: outcome-critical unknowns must be asked, benign-class unknowns are safely inferable. The LHAW taxonomy framework is confirmed at the paper level; specific ask-rate thresholds (62–78% by difficulty) are illustrative, not prescriptive calibrated values.

**Principle (Sub-step A):** The appropriate treatment of any unknown is class-conditional, not uniform. Unknowns partition by consequence profile: those whose resolution would alter the task outcome require explicit action before proceeding; those whose resolution cannot affect outcome adequacy can be resolved by the agent from available context. A blanket policy — always ask, or always infer — is wrong in either direction; correctness requires classifying each unknown by its outcome-consequence profile and applying the matching resolution strategy per class.

**Fit to our setup (Sub-step B):** The finding was established in agent intake contexts — an agent receiving a task from a user, deciding what to ask before starting. Our setup (building behavioral kits for LLM agents) differs in two ways: we are writing the rules that govern intake rather than performing intake ourselves, and the taxonomy must be encoded into a kit contract that operates across diverse future tasks whose consequence profiles were not fully specified at build time. This makes the principle apply more strongly at the rule-design level — we are directly specifying which unknowns the deployed agent should treat as outcome-critical — but less reliably at deployment time if the kit's domain has dynamic consequence profiles (unknowns that are benign in most contexts but outcome-critical in specific edge cases the kit author did not anticipate). The principle holds wherever consequence-class is determinable before the agent acts; it weakens where consequence-class is itself context-dependent and not pre-specifiable.

**Derivations beyond the finding (Sub-step C):**
- The same three-class consequence logic that governs intake unknowns should govern mid-task unknowns discovered during execution. A kit's behavioral contract that specifies intake classification but is silent on mid-task classification leaves the agent without a principled policy when new unknowns surface after tool execution has begun — the principle implies mid-task gates are required, not just intake gates. Confidence in this derivation: high, because the mechanism (consequence-class determines resolution strategy) does not depend on when in the task the unknown surfaces.
- Over-asking is a symmetric failure to under-asking. If the consequence-class taxonomy is correct, treating benign unknowns as outcome-critical imposes friction cost with no outcome benefit — it is not a conservative safe default, it is a miscalibration in the opposite direction. This implies that kit intake rules should not default to 'ask when uncertain about class'; they should default to 'infer when class is uncertain but stakes are low, ask only when the cost of wrong inference is high.' A kit contract that instructs the agent to ask broadly is not cautious — it is wrong about half of the time. Confidence: medium, because the costs of over-asking relative to under-asking are not symmetrical in all domains.
- The principle applies at the meta-level to the kit-builder facing design unknowns. When a mechanism's behavior is unclear during kit construction, the same classification question applies: would getting this wrong alter the kit's outcome (outcome-critical — research before building), produce systematically different designs (divergent — surface for decision), or have no effect on adequacy (benign — proceed and adjust)? This derivation suggests the kit-maker's own decision procedure should be governed by the same taxonomy it is trying to encode into the generated kit.

### C: evpi-question-selection (CONSENSUS)
**Finding (data point):** Selecting clarification questions by Expected Value of Perfect Information (EVPI / action-counterfactual criterion) outperforms naive question selection: SAGE-Agent scores 59.73% vs. 55.70% for naive, and information-gain reward achieves a 3.7% improvement (arXiv:2511.08798, arXiv:2606.03135). The method requires explicit parameter domains to compute and works best with structured intake schemas.

**Principle (Sub-step A):** When choosing which unknown information to resolve before acting, the criterion for selection should be action-counterfactual weight: which resolution would most change the set of actions taken? A question or unknown that, when answered, leaves the downstream action unchanged has zero information value regardless of how relevant or comprehensive it appears. Conversely, an unknown that, when resolved in different ways, leads to meaningfully different actions is high-value to resolve first. The mechanism is: rank unknowns by the degree to which resolving them changes the action, not by surface relevance, apparent importance, or coverage completeness.

**Fit to our setup (Sub-step B):** Tested in: structured agentic task-completion settings where an AI must select clarifying questions before acting on a user-specified goal, with explicitly defined parameter domains that make EVPI computable. Our setup differs in: kit-making is a design task with a diffuse action space — the "actions" (which procedures to write, which rules to include, which mechanisms to activate) are not enumerable in advance the way task-completion actions are. Parameter domains in kit-making are not always explicit, especially in early phases (Phase 1–2) before the design space is bounded. Additionally, some intake questions in kit-making are asked to surface user intent rather than to inform the agent's next branch — those do not fit the EVPI frame. Principle still applies because the core mechanism — action-counterfactual weight — is domain-agnostic and does not require fully explicit parameter domains to apply heuristically: "if the answer is X vs. Y, does the next procedure differ?" is a question any designer can ask even without a formal EVPI computation. Principle applies less strongly when: the action space is undefined early in the design process, where there is not yet enough structure to evaluate what would change; in those phases, the principle degrades to a weaker heuristic rather than a computable criterion.

**Derivations beyond the finding (Sub-step C):**
- Intake gate design rule: before including any question in a kit's intake protocol, apply the action-counterfactual test — 'if the answer to this is X vs. Y, does the kit's subsequent procedure, rule selection, or phase approach branch differently?' If the procedure is identical regardless of answer, the question is noise and should be dropped. This converts kit intake from a coverage exercise ('ask everything that seems relevant') into a decision-relevance filter. Confidence: medium-high — the mechanism transfers cleanly; the challenge is that kit designers must know the action space well enough to evaluate branching, which is easier at Phase 5 than Phase 2.
- Phase-gate question design: each phase gate's advancement questions should be selected by asking 'which unknowns, if resolved, would change this phase's output?' Gate questions whose answers are invariant across typical inputs add no decision value and should be removed. The implication is that phase gates should be designed backward from the phase's decision outputs — enumerate what the phase decides, then derive the questions that would flip those decisions — rather than forward from 'what should we check before proceeding?' Confidence: medium — the logic is sound but kit phases have interdependencies that complicate backward enumeration.
- Mechanism activation policy: the EVPI principle implies that a mechanism whose output is invariant across typical inputs provides no information value for those inputs and should default to off. The mechanism toggle dashboard should therefore include metadata on the condition under which each mechanism changes the output — not just what it produces, but when that output differs from baseline. Mechanisms with near-zero action-counterfactual weight for a given input class are candidates for default-off status, reducing noise without losing signal. Confidence: medium — this is a principled derivation but requires empirical profiling of mechanism variance across inputs to operationalize.

### D: execution-gating-structural (CONSENSUS)
**Finding (data point):** Agents detect specification gaps and proceed to execution anyway: >98% risk-knowledge detection rate but <26% halt rate without a structural gate (arXiv:2508.13465). A behavioral specification rule without structural blocking — explicitly preventing tool execution until essential unknowns are resolved — is insufficient; structural coupling between detection and blocking is required to eliminate hallucinated actions (COCORELI, ICLR 2026).

**Principle (Sub-step A):** When a system can detect that a condition requiring a specific response has occurred, but the response is governed only by a behavioral rule rather than a structural constraint, the detection fires reliably while the response fails at a high rate. Detection capability and response reliability are independent properties: a system that knows it should halt does not thereby halt. For any critical gate — a condition whose occurrence genuinely requires a specific response before continuation — reliable behavior requires that the path forward be structurally closed until the required response completes. Behavioral specification alone (stating what ought to happen) cannot close this gap regardless of how accurately the detection mechanism performs.

**Fit to our setup (Sub-step B):** Tested in: LLM agents executing task sequences where specification gaps were present — the study measured whether agents detected the gap and whether they halted before tool execution. Our setup differs in that we are not the executing agent but the authors of behavioral contracts for other agents. This means the principle applies at two levels simultaneously: (a) to the kit-building process itself — when this agent detects a problem mid-build, does it structurally gate its own continuation, or does it proceed? (b) to every rule we write in a generated kit — each "if condition X, then do Y before proceeding" rule we ship is a behavioral specification rule, exactly the class the finding identifies as insufficient. The principle applies more strongly in our setup than in the tested one: we are literally producing behavioral specification rules, the mechanism identified as failing. The one condition that would weaken applicability is an external enforcer at the gate — a human-in-the-loop checkpoint that substitutes for the structural constraint — but our generated kits are designed for autonomous agents with minimal user interruption, so this condition is not met.

**Derivations beyond the finding (Sub-step C):**
- Any kit rule whose required response involves stopping or reversing forward momentum (halting, asking, logging before acting) is structurally more vulnerable than rules that require continuing. The principle implies these counter-flow rules need structural enforcement more urgently than compliance-aligned rules — the more the required response conflicts with execution momentum, the more a behavioral specification alone will fail. Kit design should therefore stratify rules: counter-flow critical gates get structural checkpoints; compliance-aligned rules can remain behavioral. Derivation confidence: high — the mechanism (detection without structural closure) predicts exactly this asymmetry, and the documented failure history in mistakes.md is consistent with it.
- Self-monitoring rules — where the agent detects its own failures and responds — are the extreme case of this failure mode, because detection and response are coupled within the same cognitive system with no external structural element at all. The principle predicts that self-monitoring rules will show high detection capability (when explicitly queried, the agent can identify violations) paired with near-zero spontaneous response rate. This implies that no behavioral contract should rely on self-monitoring as the primary enforcement mechanism for any rule whose violation is costly. Structural checkpoints, required-field gates, or external auditors are required for anything that matters. Derivation confidence: high — directly implied by the mechanism, and independently evidenced by the mistakes.md violation history in this project.
- The principle implies that detection accuracy is not a useful design target for critical gates. Improving how reliably the agent can identify that the condition has occurred does not improve response rate if the detection-to-response path is not structurally closed. This means research or engineering effort aimed at 'better detection' for an ungated behavioral rule is wasted effort for compliance purposes — the investment must go into structural coupling, not detection quality. For kit design, this rules out a class of potential mechanisms: rules that say 'look more carefully for X before proceeding' are not substitutes for structural gates when the required response to X is counter-flow. Derivation confidence: medium — implied by the mechanism, but the exact threshold at which detection accuracy becomes irrelevant may depend on conditions not tested.

### E: implicit-inference-answerability (CONSENSUS)
**Finding (data point):** Best agents achieve only 48.3% on implicit (unstated) constraints (arXiv:2602.20424). Closed-world vs. open-world assumption (CWA/OWA) determines when inferring defaults is safe. Progressive disclosure reduces intake friction; intake should be staggered across no more than 4–5 steps.

**Principle (Sub-step A):** The accuracy with which an agent satisfies constraints is bounded by how explicitly those constraints were captured at intake. Constraints left implicit require the agent to infer defaults — and whether those inferences are safe depends on the structural assumption governing what the agent treats as known versus unknown: a closed-world assumption treats the unstated as absent, an open-world assumption treats it as unresolved. Staging constraint elicitation across sequential, bounded steps reduces handling error by narrowing the scope of each capture event and reducing the attentional load of both the agent capturing and the human providing constraints.

**Fit to our setup (Sub-step B):** Tested in: LLM agents completing tasks where some requirements were stated explicitly and others were only implied by the task context — the agent had to discover implicit constraints from the task description itself. Our setup differs in two ways. First, at kit-build time the kit-maker is the agent receiving implicit constraints — the user's unstated requirements about what the generated kit must do are the analog to implicit task constraints. Second, at kit-use time, the generated kit agent interprets its own rules, which may themselves be underspecified, leaving trigger conditions implicit. The principle applies strongly at kit-build time because the mechanism is identical: the user describes what they want by example and omits structural requirements they consider obvious, and the kit-maker must either infer or surface them. The principle applies moderately at kit-use time because the agent's behavioral contract is authored explicitly (the kit-maker controls it), reducing implicit-constraint risk — but only insofar as the kit-maker correctly forced all constraints into explicit form during build. The principle applies less strongly if the kit operates in a tightly bounded, well-typed domain where OWA-style "unstated means unknown" queries would produce noise rather than safety. Principle may not apply if the kit behavioral contract is fully closed — every trigger condition, every exception, every default named — in which case the agent has no implicit inference to perform.

**Derivations beyond the finding (Sub-step C):**
- Kit rules that leave trigger conditions implicit (e.g., 'when appropriate, escalate' without naming what makes a condition appropriate) will be applied inconsistently across runs, because each invocation forces a fresh inference against an unstated standard. The principle implies that every behavioral rule in a generated kit must name its observable trigger condition explicitly — not the action alone, but the state the agent must detect before the action fires. This is derivable from the mechanism (implicit constraints degrade handling accuracy), not from any specific benchmark result.
- The CWA/OWA distinction implies that a generated kit's behavioral contract should declare its inference assumption explicitly. A kit operating under CWA (unstated requirements are treated as not-required) will silently drop constraints the user expected to be inferred from context; a kit operating under OWA (unstated requirements are treated as unresolved, requiring a query) will produce more clarification overhead but fewer silent omissions. Kit design should match the declared inference assumption to the domain's cost-of-omission: high-stakes or irreversible domains warrant OWA; well-bounded, low-stakes domains may safely use CWA. Without declaring the assumption, the kit agent will switch between them opportunistically and unpredictably.
- If staged constraint elicitation reduces per-step error by reducing attentional load, the same mechanism implies that kit auditing procedures should be staged rather than run as a single whole-kit pass. A reviewer asked to check all constraint satisfaction simultaneously faces the same load problem as the agent capturing all constraints at intake — compressed scope coverage and higher miss rate. Breaking the audit into bounded sequential passes (e.g., trigger-condition pass, exception-coverage pass, default-assumption pass) should produce fewer missed violations than a single comprehensive pass of equal total time, because each pass narrows the construct being checked.

### G: intake-limitations (CONSENSUS)
**Finding (data point):** Front-loaded intake captures known unknowns only; unknown unknowns emerge during execution and cannot be elicited upfront (arXiv:2602.15259). Front-loaded over-specification is associated with ~60% failure rates (Standish CHAOS). Interruption cost computation — not a fixed question count — is the correct decision criterion for ask-vs-proceed.

**Principle (Sub-step A):** Pre-execution specification is bounded by the specifier's current model of the problem space. The information that most changes execution behavior — unknown unknowns — is only discoverable during execution, not before it. The correct decision criterion for whether to ask before proceeding is therefore the cost of interrupting execution when new information surfaces, not the completeness of the pre-execution question set. Front-loading questions is an attempt to make the problem space legible before entering it; the problem space only becomes fully legible by entering it.

**Fit to our setup (Sub-step B):** Tested in: Software project management (Standish CHAOS) and general agent task-execution research. Those setups involve human teams coordinating over calendar time, multi-stakeholder ambiguity, and months-long execution cycles where discovery latency is high and interruption has organizational cost. Our setup differs in three ways: (1) the executor is an LLM agent — interruption cost is lower (no meeting coordination), but context window loss is a real, distinct cost not present in human teams; (2) kit-making tasks have more bounded scope than software projects — the question space is partially enumerable upfront, which weakens but does not eliminate the unknown-unknowns problem; (3) execution cycles are faster — a kit agent can probe, discover, and surface findings within a single session, so mid-task clarification is structurally cheaper than in software projects. The principle still applies — unknown unknowns are real in kit-making (research contradicts assumptions, user preferences have latent constraints, edge cases in agent behavior are not visible from the brief) — but the interruption-cost calculus favors proceeding more aggressively in kit contexts than it would in long-cycle human projects, because the cost of a mid-task pivot is lower and the discovery-to-surface latency is shorter.

**Derivations beyond the finding (Sub-step C):**
- Checkpoint-based clarification gates outperform front-loaded intake: rather than attempting to exhaust the question space before execution begins, the intake protocol should place clarification gates at natural phase transitions — after research surfaces findings, after synthesis resolves contradictions — so that unknown unknowns discovered during execution become inputs to subsequent phases rather than silent distortions of already-committed design decisions. Confidence in this derivation: medium (mechanism is consistent with the principle; not directly tested in kit-making contexts).
- The ask-vs-proceed criterion should weight reversibility of the next action multiplicatively against interruption cost: for reversible actions (drafting, structuring, generating a proposal), the cost of discovering mid-task is low, so proceeding is almost always correct; for irreversible or high-propagation actions (deleting source data, committing a structural design decision that downstream phases build on), even a small probability of misalignment justifies a pre-execution ask. The finding's interruption-cost framing is extended by recognizing that interruption cost and irreversibility cost are distinct and multiply — a highly reversible action with high interruption cost still favors proceeding. Confidence: medium.
- Execution-time discovery requires an explicit routing protocol, not just permission to discover: since unknown unknowns will surface during execution regardless of intake quality, the kit needs a declared protocol for how mid-execution discoveries are handled — immediate stop and ask, log-and-continue with stated assumption, or auto-resolve with a default. Without this protocol, discoveries become unhandled exceptions that degrade output quality silently and are invisible to the user. The finding establishes that discovery happens during execution; the implication is that the kit must engineer for discovery as an expected event, not treat it as a failure of intake. Confidence: high (this is a direct structural consequence of the principle, not a speculative extension).

---

## Steps 3.5 and 3.6 — Fresh Subagent Passes (2026-07-05)

### Step 3.5 — Independent Tier Assignment
Discrepancies found (existing → fresh-pass):
- **essential-inferable-classifier**: CONSENSUS → MEDIUM. Four converging MEDIUM empiricals support the taxonomy framework, but unverified threshold numbers, one wrong domain attribution, and one LOW downgrade to consensus prevent the group from reaching HIGH despite convergence.
- **evpi-question-selection**: CONSENSUS → MEDIUM. EVPI direction is confirmed across three citation instances from two independent papers with key improvements verified from source PDFs, but partial citation dependency (same paper twice), self-benchmarking, and domain applicability constraints cap the group at MEDIUM.
- **execution-gating-structural**: CONSENSUS → MEDIUM. Three independent MEDIUM-tier papers converge on the structural-gate requirement, but one LOW-to-consensus downgrade (fabricated statistic removed) and controlled-setting scope limitations prevent a higher assignment.
- **implicit-inference-answerability**: CONSENSUS → MEDIUM. Two MEDIUM empiricals provide directional support, but two LOW-to-consensus downgrades and two unvalidated consensus claims weaken the empirical base, and the absence of any HIGH anchor holds the group at MEDIUM.
- **security-failure-modes**: HIGH (narrow) → HIGH. One HIGH-tier empirical source (728 adversarial scenarios, two frontier models, 10-20x amplification confirmed) provides a strong anchor with a clear mechanism, sufficient for HIGH within its explicitly narrow scope of tool-calling agents in adversarial environments.
- **MISC (clarification-efficiency, underspecification-detection, silent-misframing, goal-specification-impact, multi-agent-spec, pre-execution-planning, intake-patterns)**: MEDIUM (Step 1 max verify; not separately evaluated in Step 3 confidence map) → MEDIUM. The strongest individual claims (ambig-swe-interactive-74pct-gain, clariti) carry MEDIUM benchmark support, but two LOW claims and three anecdotes dilute the group, and spread across unrelated sub-topics prevents cross-claim convergence above MEDIUM.

### Step 3.6 — Counter-Prior Results
HIGH groups tested: 2 | Confirmed: 0 | Scope caveat: 2 | CONTESTED: 0

**PLAUSIBLE WITH SCOPE CAVEAT:**
- goal-level-blocking: The 10% cliff and near-zero residual value of goal clarification applies specifically to tasks with early irreversible structural commits, fixed externally-defined goals, and automated agents that cannot pause to re-query. For iterative, discovery-oriented, or human-supervised tasks where goals legitimately emerge from execution, the residual value of goal clarification likely extends materially beyond 10% and the cliff may be absent.
- security-failure-modes: HIGH applies only when clarification logic is actively present and triggered in the agent pipeline; agentic systems that do not include clarification logic show the baseline 1.8–2.2% injection success rate in the same adversarial scenarios, making the elevated risk entirely contingent on that design choice being present.
