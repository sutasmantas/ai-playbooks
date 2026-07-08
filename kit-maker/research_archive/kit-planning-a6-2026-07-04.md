# KIT-PLAN-01 Research — A6: Code agent planning — Devin, SWE-agent, Aider, OpenHands
Date: 2026-07-04

## Sources Found

1. **Devin Interactive Planning Docs** — https://docs.devin.ai/work-with-devin/interactive-planning
   Relevance: Official documentation of Devin's plan structure and user interaction model before execution.

2. **How Devin AI Actually Thinks (Medium)** — https://medium.com/@nitinmatani22/how-devin-ai-actually-thinks-autonomous-planning-dag-execution-and-dynamic-re-planning-explained-997be175a475
   Relevance: Describes internal DAG representation for task dependencies and dynamic re-planning behavior.

3. **Devin 2.0 Blog Post (Cognition)** — https://cognition.com/blog/devin-2
   Relevance: Announces Interactive Planning as core feature; addresses the "black-box execution" failure of v1.

4. **Devin Annual Performance Review 2025 (Cognition)** — https://cognition.ai/blog/devin-annual-performance-review-2025
   Relevance: Production learnings from 18 months of agent deployment.

5. **SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering (NeurIPS 2024)** — https://proceedings.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf
   Relevance: Original SWE-agent paper; thought-action-observation loop, ACI design.

6. **Evaluating Plan Compliance in Autonomous Programming Agents (arXiv 2604.12147)** — https://arxiv.org/html/2604.12147v2
   Relevance: Formal study of SWE-agent plan adherence across 16,991 trajectories. Documents plan phases, compliance metrics, and consequences of plan deviation.

7. **OpenHands: An Open Platform for AI Software Developers as Generalist Agents (ICLR 2025)** — https://arxiv.org/html/2407.16741v3
   Relevance: Defines OpenHands event-stream architecture, AgentDelegateAction, and state structure.

8. **coding-aider plan-mode documentation** — https://github.com/p-wegner/coding-aider/blob/main/docs/plan-mode.md
   Relevance: Concrete three-file plan structure with checkboxes, context files, and subplan hierarchy.

9. **Aider Chat Modes documentation** — https://aider.chat/docs/usage/modes.html
   Relevance: Architect mode (planner model + editor model separation) in official Aider.

10. **Inside the Scaffold: A Source-Code Taxonomy of Coding Agent Architectures (arXiv 2604.03515)** — https://arxiv.org/html/2604.03515v2
    Relevance: Source-code-level taxonomy of 13 coding agents; identifies five loop primitives and plan-execute as a distinct primitive.

11. **Agentless: Demystifying LLM-based Software Engineering Agents (arXiv 2407.01489)** — https://arxiv.org/html/2407.01489v1
    Relevance: Fixed three-phase pipeline (localize → patch → validate) that outperforms agent approaches at lower cost; demonstrates viability of explicit phase structure.

12. **SWE-Search: Enhancing Software Agents with Monte Carlo Tree Search (arXiv 2410.20285)** — https://arxiv.org/pdf/2410.20285
    Relevance: Tree search planning extension to SWE-agent; shows how expanded search over plan space improves outcomes.

13. **Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks (arXiv 2503.09572)** — https://arxiv.org/html/2503.09572v3
    Relevance: Research confirming that explicit plan-then-act separation improves long-horizon outcomes.

14. **The Long-Horizon Task Mirage: Diagnosing Where and Why Agentic Systems Break (arXiv 2604.11978)** — https://arxiv.org/html/2604.11978v1
    Relevance: Identifies failure modes in long-horizon agentic systems; context pressure and plan drift.

15. **SWE-agent 2.0 (YUV.AI Blog)** — https://yuv.ai/blog/swe-agent-v2
    Relevance: Overview of SWE-agent 2.0 multi-agent orchestration with manager-worker decomposition.

---

## Structural Properties Found

- Devin generates a plan containing: (1) relevant files identified, (2) key findings from codebase analysis, (3) implementation questions, (4) numbered multi-step task list with code citations and deep IDE links. All generated before any code is written.

- Devin represents the task list internally as a Directed Acyclic Graph (DAG): nodes = tasks, directed edges = prerequisites. Dynamic re-planning modifies this graph at runtime when blockers occur.

- SWE-agent's standard plan is a four-phase instruction sequence embedded in the system prompt: Navigation (find relevant files) → Reproduction (generate tests to reproduce the bug) → Patch (edit code) → Validation (run tests, confirm fix). These phases are defined before execution begins.

- SWE-agent plan compliance is measured on three dimensions: Plan Phase Compliance (all phases appear), Plan Order Compliance (phases in correct sequence), Plan Phase Fidelity (no out-of-plan actions).

- coding-aider's plan-mode uses three persisted files: `feature_name.md` (goal, overview, implementation approach), `feature_name_checklist.md` (granular steps as markdown checkboxes), `feature_name_context.yaml` (list of relevant source files). These survive across sessions.

- coding-aider supports subplans: complex features decompose into a main plan + one or more subplan triplets (each subplan has its own .md + _checklist.md + _context.yaml).

- Aider architect mode separates planner from executor: the architect model produces a written plan/proposal, then a dedicated editor model reads that plan and generates file edits. The editor model has no knowledge of the user's original request — only the architect's plan.

- OpenHands uses an append-only event stream as its sole state representation. Events include: actions (IPythonRunCellAction, CmdRunAction, BrowserInteractiveAction, AgentDelegateAction) and observations. Events are never edited; they are superseded by Condensation events that mark ranges as forgotten.

- OpenHands has no separate planning document. Planning is implicit — the agent reasons from event history at each step. The planning artifact IS the event stream.

- OpenHands AgentDelegateAction creates a child AgentController for a delegated subtask. The delegation metadata appears in the parent's event stream alongside all other events, creating an audit trail of what was delegated to whom.

- Agentless implements a fixed three-phase pipeline: localize (hierarchical: file → class/function → edit location) → patch (multiple candidate patches in diff format, alongside reproduction tests) → validate (re-rank candidates, select). All phases defined before any execution; LLM cannot choose next action.

- The "Inside the Scaffold" taxonomy identifies five loop primitives composable across systems: ReAct (thought-action-observation), generate-test-repair (run tests, re-prompt on failure), plan-execute (distinct phases with constrained tool access), multi-attempt retry (bounded retries on failure signals), tree search (MCTS). 11 of 13 agents studied use multiple primitives.

- Plan-execute primitive enforces phase-gated tool access: in AutoCodeRover, the localization phase agents can only use search tools; the patch phase agent operates without search, working from gathered context. Tool restrictions are architectural, not instructional.

- Plan compliance drops by 13% on harder tasks (SWE-bench Pro vs Verified). Agents skip Reproduction and Validation phases under execution pressure. Agents do not explicitly abandon plans — they compress them.

- Periodic plan reminders (re-injecting the plan into context at checkpoints) measurably improve compliance on long trajectories.

- Without an explicit plan, agents fall back on training-internalized workflows that are often incomplete or overfit to training distribution.

---

## Wide-First Findings

Strong evidence that wide-first planning is the dominant pattern:

- Devin 2.0 explicitly moved to wide-first: the "black-box execution" failure of v1 (where users discovered after execution that Devin had gone in the wrong direction) was addressed by showing the full plan skeleton upfront.
- Agentless defines all three phases before any LLM call to execute them: the pipeline structure is fully specified before execution starts.
- SWE-agent's standard plan specifies all four phases (N/R/P/V) in the system prompt before any trajectory step.
- coding-aider generates the full plan + checklist + context files before implementing any checklist item.
- Minimum viable skeleton from evidence: (a) anticipated phases listed, (b) relevant files/locations identified, (c) major steps per phase as stubs (even if TBD), (d) known dependencies between steps. No system generates a skeleton with zero phase content — even "TBD" sections require the phase name and rough scope.

The gap: no system requires the full skeleton to be reviewed and approved before ANY execution. Devin waits 30 seconds by default, then auto-proceeds. This is the weakest link — plan approval is optional in all current systems.

---

## Depth-at-Phase-Entry Findings

Mixed evidence — current systems constrain phase entry but do not require full upfront expansion:

- Agentless is closest: localization is itself hierarchical (file → class/function → edit location), meaning the localization phase must fully complete before the patch phase begins. The patch phase cannot start until edit locations are fully specified. This is structural gating, not instructional.
- AutoCodeRover (from Inside the Scaffold): tool access is restricted per phase. The localization phase agent literally cannot call file-edit tools — the scaffolding prevents it. Phase boundary is enforced by tool availability, not agent self-discipline.
- coding-aider: subplans allow recursive expansion of a phase into its own checklist. This is manual — the user or LLM creates the subplan when a checklist item turns out to be complex.
- SWE-agent: no formal "expand before entering" mechanism. The agent proceeds through phases based on system prompt instructions, but there is no gate that checks whether the current phase is fully specified before execution begins.
- Key failure mode documented: on harder tasks, agents compress phases (skip Reproduction entirely) under execution pressure. This is phase-entry failure — entering Patch without completing Reproduction. The architecture does not prevent this.

Design implication: phase-gated tool access (structural enforcement) is more reliable than instructional enforcement. Requiring a written phase expansion document is instructional — it will fail under pressure unless verified architecturally.

---

## Adaptive Annotation Findings

No existing system requires explicit "changed because: [reason]" annotation on plan mutations:

- Devin dynamic re-planning: when Devin hits a blocker, it reasons about the situation and adjusts the plan, but there is no documented requirement to annotate WHY the plan changed. The change is visible in the session UI but not formally attributed.
- OpenHands event stream: the append-only nature provides implicit accountability — you can see what actions were taken — but there is no explicit "plan mutation event" with a rationale field.
- coding-aider: plan files are markdown that can be edited. User can manually adjust checkboxes. No accountability mechanism for who removed a task or why.
- SWE-agent: no plan mutation mechanism — the plan is in the system prompt and is not modified during execution. Agents deviate from the plan silently (the compliance research measures deviation after the fact).

This is a structural gap across all studied systems. Explicit plan mutation annotation is NOT a standard practice. Our design would be introducing a novel constraint not present in any of the studied systems. This strengthens the rationale for including it (it solves a known failure mode with no current solution) but means there is no existing implementation to reference.

---

## Discovered-Work Routing

Three patterns found for routing discovered subtasks:

1. **AgentDelegateAction (OpenHands)**: Discovered subtask is routed to a child agent via a formal action type. The delegation appears in the parent event stream. The parent resumes after the child returns. This is the most structured routing mechanism found.

2. **DAG mutation (Devin)**: Discovered subtask is inserted as a new node in the execution DAG. The dynamic re-planning mechanism handles this. No formal "discovered work" event type — it is absorbed into re-planning. Not publicly documented at the implementation level.

3. **Manual checklist addition (coding-aider)**: Discovered work is handled by the user or LLM adding a new checklist item to the plan file. There is no automated routing — the responsibility to not drop discovered work is on the human or the LLM's next-step reasoning.

4. **No mechanism (SWE-agent standard, Agentless)**: Both systems have fixed phase structures. Discovered work that doesn't fit the phases either causes the agent to deviate silently (SWE-agent, documented as plan compliance failure) or is unaddressable within the fixed pipeline (Agentless). Agentless by design does not handle discovered work — the pipeline is external and fixed.

Key finding: discovered work routing is universally weak. The strongest mechanism (OpenHands AgentDelegateAction) routes work to a new agent but provides no guarantee that the discovered work is logged back into the parent plan or that it is not silently dropped.

---

## Key Findings

- Wide-first planning is universal in production systems. All four systems generate some form of plan structure before execution. The minimum viable skeleton includes: phase list, relevant files, major steps per phase (even if stubs).

- Phase-gated tool access is more reliable than instructional phase enforcement. AutoCodeRover and Agentless restrict tool availability by phase. SWE-agent uses instructional enforcement and compliance drops 13% on harder tasks.

- Plan compliance degrades under execution pressure. The harder the task, the more likely agents are to skip phases (especially Reproduction/Validation). This is documented across 16,991 SWE-agent trajectories.

- Periodic plan reminders mitigate context-pressure drift. Re-injecting the plan into context at checkpoints measurably improves compliance. This suggests a monitoring/reminder loop is a necessary component.

- Without an explicit plan, agents fall back on training-internalized workflows. These are often incomplete or overfit. Explicit planning provides better scaffolding than relying on model priors.

- No system uses explicit "changed because: [reason]" annotation. Plan mutation accountability is a gap across all studied systems. Changes are either visible through event history (OpenHands) or invisible (all others).

- Discovered work is universally at risk of being dropped. No system has a robust mechanism to ensure discovered subtasks are incorporated into the plan and not silently abandoned. OpenHands AgentDelegateAction is the closest, but it routes to sub-agents rather than back into the parent plan.

- The two-model separation (planner + executor) in Aider architect mode enforces planning discipline structurally: the executor cannot deviate from the plan because it only sees the plan, not the original request.

- Agentless shows that a fully external, fixed pipeline (no agent choice of next action) outperforms flexible agent systems at lower cost, on SWE-bench. This is evidence that strong structural constraints on phase ordering improve outcomes.

- Context pressure is the primary mechanism by which plans fail. As trajectories lengthen, early plan instructions lose influence. Countermeasures: shorter context windows per phase, periodic reminders, and phase-scoped sub-agents.

---

## Design Implications

- The minimum viable intake skeleton must include at minimum: (1) list of anticipated phases, (2) relevant files/locations identified in each phase, (3) per-phase stub steps (even if "TBD"). This is the empirical baseline from Devin, Agentless, and SWE-agent.

- Phase-gated tool access should be the primary enforcement mechanism for phase boundaries, not instructional prompting alone. If a phase's tools are unavailable to subsequent phases, entry before completion is physically impossible.

- Phase expansion documents should be generated and recorded as artifacts (e.g., markdown files) before that phase's execution begins. This makes "full expansion before entry" auditable — the artifact either exists or it doesn't.

- Plan mutation events should be a first-class event type with a required `rationale` field. OpenHands' append-only event stream is the right architecture; what is missing is a `PlanMutationEvent(changed_steps, rationale)` type. Without this, legitimate evolution is indistinguishable from scope abandonment.

- Discovered work should be routed through a formal `DiscoveredWorkItem` record appended to the plan (not handled ad-hoc). The record includes: what was discovered, in which phase, what phase it belongs to, and its current status (pending/delegated/dropped with reason).

- Periodic plan reminder injection at phase transitions is empirically supported. Re-expose the full plan at each phase boundary to counteract context-pressure drift.

- Two-stage plan review (user or verifier reviews the plan before execution begins) is the correct default, not the Devin default (30-second auto-proceed). The Devin v1 failure mode (executing in the wrong direction) is caused by insufficient plan review before execution.

- The checklist-plus-context-file structure (coding-aider) is a practical minimum for cross-session persistence. Three files: goal document, granular checklist with checkboxes, context file listing relevant source artifacts. This is the minimum viable plan document for a kit.

- Subplan recursion (coding-aider) provides the depth-at-phase-entry mechanism: when a checklist item is too large, it spawns a subplan with its own checklist. The original item is not executed until the subplan is created. This is the closest existing mechanism to "expand before entering."

---

## Saturation Signal

NO — further searches in adjacent spaces are likely to yield additional structural properties not found here. Specifically:

- The "Inside the Scaffold" paper's detailed source-code taxonomy of 13 agents was not fully retrieved; full analysis of all 13 would yield more specific planning artifact structures.
- Research on AgentForge, COMPASS, and other 2025-2026 papers on long-horizon planning likely contains additional evidence on phase expansion and discovered-work routing.
- The SWE-agent 2.0 multi-agent architecture (manager-worker) was mentioned but not deeply explored; it may contain more specific planning document structure.
- Academic literature on PDDL-hybrid planners (LaMMA-P, LlamaR) likely contains more formal planning artifact specifications.

However, the four target systems (Devin, SWE-agent, Aider, OpenHands) are now sufficiently characterized for design decisions at the current level of resolution.
