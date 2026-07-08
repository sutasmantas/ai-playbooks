# KIT-PLAN-01 Research — A4: Discovered-work routing
Date: 2026-07-04

## Sources Found

1. **LangGraph Plan-and-Execute Tutorial** — https://www.baihezi.com/mirrors/langgraph/tutorials/plan-and-execute/plan-and-execute/index.html
   Relevance: Shows the canonical replanner-node pattern: replanner takes (objective + original plan + past steps) and either signals done or emits a revised remaining plan. Discovered work routes through plan rewrite.

2. **LangChain Blog: Planning Agents** — https://blog.langchain.com/planning-agents/
   Relevance: Describes plan-and-execute architecture, replanning architecture, and how dynamic replanning differs from static planning. Notes that replanner uses past steps to decide whether to replan or finish.

3. **BabyAGI (IBM, Wordware explainers)** — https://www.ibm.com/think/topics/babyagi / https://blog.wordware.ai/babyagi-explained-how-ai-task-management-can-solve-complex-problems
   Relevance: The most explicit discovered-work queue among common systems: after executing a task, new tasks are created and added to a prioritized task list. Task cycle: execute → store → create new tasks → reprioritize → repeat.

4. **Language Agent Tree Search (LATS)** — https://arxiv.org/pdf/2310.04406
   Relevance: Tree-based routing of discovered work via MCTS-style expansion. Each failed node triggers verbal self-reflection stored in memory; subsequent expansions incorporate those reflections. Computational budget (k trajectories) caps scope explosion.

5. **ReAcTree: Hierarchical LLM Agent Trees with Control Flow** — https://arxiv.org/abs/2511.02424
   Relevance: Agent nodes dynamically expand into subgoal sub-trees when they encounter complexity. Tree expansion IS the routing mechanism for discovered work. Accepted at AAMAS 2026.

6. **Beyond Entangled Planning: Task-Decoupled Planning (TDP)** — https://arxiv.org/abs/2601.07577
   Relevance: Decomposes tasks into a DAG of subgoals. A Self-Revision module updates the dependency graph as execution unfolds. Discovered work is confined to the local DAG node scope, preventing global replanning. Reduces token consumption by up to 82%.

7. **ALAS: A Stateful Multi-LLM Agent Framework for Disruption-Aware Planning** — https://arxiv.org/abs/2505.12501
   Relevance: Disruption-aware framework with ACID-like guarantees. Agent Factory uses exact + approximate matching to discover existing implementations; generates custom agents when none match. Formal two-stage agent discovery mechanism.

8. **From Agent Loops to Structured Graphs: A Scheduler-Theoretic Framework (SGH)** — https://arxiv.org/abs/2604.11378
   Relevance: Proposes that execution plans be immutable within a plan version. Planning, execution, and recovery are separated into three layers with explicit interfaces. Recovery follows a bounded escalation protocol — not an ad-hoc LLM decision.

9. **Routine: A Structural Planning Framework for LLM Agent System in Enterprise** — https://arxiv.org/abs/2507.14447
   Relevance: Decomposes instructions into structured sub-tasks with explicit parameter passing before execution. Improves GPT-4o tool-call accuracy from 41.1% to 96.3% by providing a stable format. Focuses on pre-execution decomposition stability.

10. **ReflexGrad: Within-Episode Failure Recovery via Progress-Gated Dual-Process Routing** — https://arxiv.org/pdf/2511.14584
    Relevance: Uses dual-process routing — a fast path and a slow deliberate path — triggered by progress signals. Routing is structural (gated by observed progress), not self-monitored.

11. **ReCAP: Recursive Context-Aware Reasoning and Planning** — https://arxiv.org/html/2510.23822v1
    Relevance: Maintains multi-level context across planning; planner updates subtask plan based on previous task state, latest execution outcome, and evaluator feedback.

12. **AI Agent Audit Trails** — https://cordum.io/blog/ai-agent-audit-trails-compliance-guide / https://www.adopt.ai/glossary/audit-trails-for-agents
    Relevance: Governance-focused audit logging captures decision, policy version, and reason metadata. Closest existing analog to plan-mutation annotation — but applied for compliance, not for plan integrity.

13. **EvoMAS: Learning Execution-Time Workflows for Multi-Agent Systems** — https://arxiv.org/pdf/2605.08769
    Relevance: Focuses on execution-time workflow management — workflows evolve during execution rather than being fixed at intake.

14. **Architecting Resilient LLM Agents: Plan-then-Execute Implementations** — https://arxiv.org/pdf/2509.08646
    Relevance: Addresses bounded recovery — converts failure handling from ad-hoc LLM decision into a protocol with auditable escalation rules; prevents both failure loops and premature replanning.

---

## Structural Properties Found

- **Replanner-node pattern**: Discovered work routes through a dedicated replanner LLM node that consumes (objective, original plan, past steps) and emits either a terminal Response or a rewritten remaining Plan. The plan state is always visible; the replanner is forced to emit a structural artifact, not just take an action.
- **Explicit task queue with create/prioritize cycle (BabyAGI)**: After executing a task, a task-creation agent generates new tasks; a prioritization agent re-orders the entire queue. Discovered work has a formal structural home: the task list.
- **Tree expansion as routing mechanism (LATS, ReAcTree)**: The plan IS the tree. Discovered work creates new nodes (children or sibling branches) in the tree. The structure routes discovered work without a separate routing step.
- **DAG scope confinement (TDP)**: A Self-Revision module updates the DAG dependency graph. A local failure in one subgoal does NOT trigger global replanning — only the affected DAG node is re-evaluated. Scope explosion is prevented by the DAG boundary.
- **Plan immutability with versioned escalation (SGH)**: Plans are immutable within a plan version. When execution cannot proceed, control escalates to a recovery layer (distinct from the executor), which may produce a new plan version. Discovered work forces a version boundary.
- **Bounded recovery protocol**: Recovery actions have explicit trigger conditions, bounded scope, and a strict escalation protocol that prevents unbounded replanning loops.
- **Agent Factory discovery (ALAS)**: Two-stage discovery mechanism — exact matching first, approximate matching second, custom generation third. Formal fallback chain for discovered agent requirements.
- **Action Scheduler Queue (ASQ)**: A priority queue managing LLM-generated action candidates. Dynamic insertion of new actions with priority ordering.
- **Progress-gated dual-process routing (ReflexGrad)**: Route to fast vs. slow processing is determined by a structural signal (progress measurement), not by self-monitored noticing.

---

## Wide-First Findings

No system studied implements wide-at-intake as a hard constraint. The closest approximations:

- **Routine** decomposes all steps before execution and provides explicit parameter passing between them — but the full skeleton is not required to be TBD-complete; it may still be partially formed.
- **LangGraph planner** emits a multi-step plan at intake, but steps are high-level strings, not fully expanded sections with done-criteria.
- **BabyAGI** creates an initial task list from the objective, but the list grows during execution — it is NOT a fixed wide skeleton.
- **TDP** generates a DAG at intake via a Supervisor, but the DAG nodes contain only sub-goal labels, not full expansion.

The evidence supports that wide-at-intake (full-width skeleton with TBD sections) is NOT currently a standard structural commitment in any major framework. Systems either: (a) plan one step and replan, (b) plan at one level of abstraction and expand later, or (c) build the plan tree incrementally during execution. The value of wide-at-intake as a commitment that separates "what will be done" from "how each phase will be done" is not implemented but is consistent with TDP's separation of DAG-structure from node-level execution.

---

## Depth-at-Phase-Entry Findings

Several systems expand locally before executing a node — but none enforce this as a hard gating constraint:

- **TDP**: The Planner-Executor pair receives a dispatched sub-task and plans+acts within that scope only. The sub-task is dispatched (expanded from the Supervisor's DAG) before execution of that node begins — this is the closest structural analog to depth-at-phase-entry.
- **ReAcTree**: Agent nodes reason and then may expand into subgoal children before acting. Expansion can happen mid-execution, not necessarily at entry.
- **LATS**: Selection → expansion → evaluation → simulation loop. Expansion is driven by the search algorithm, not by a phase-entry rule.
- **LangGraph**: The replanner can add steps to the remaining plan before the executor picks up the next step. But this is triggered by execution completion, not by phase entry.

The evidence supports depth-at-phase-entry as a structural commitment that would be novel relative to existing systems. The benefit (no phase begins without full expansion) is consistent with the TDP finding that scoped context reduces token consumption by 82% — suggesting that local, full-context execution is strictly more efficient than global replanning.

---

## Adaptive Annotation Findings

No system studied implements explicit "changed because: [what result triggered this]" annotation on plan mutations. The closest analogs:

- **LATS**: Failed trajectories and verbal self-reflections are stored in memory and integrated as context in subsequent iterations. This is retrospective annotation, not prospective annotation at the point of mutation. The reflection explains why the previous path failed, not why the plan changed.
- **BabyAGI**: No annotation. Tasks are added/removed without explanation attached to the plan itself.
- **LangGraph replanner**: The replanner prompt states "Update your plan accordingly. Only add steps that still NEED to be done." — reasoning is implicit in the LLM's prompt context, not attached to the plan artifact.
- **Audit trail literature**: Captures decision + policy version + reason metadata — but for governance replay, not for plan integrity. The annotation is stored in a separate log, not annotated onto the plan structure.
- **SGH framework**: Solves this by plan immutability — changes produce a new plan version. The version boundary is the accountability mechanism, but there is no annotation explaining why the new version was created.

The evidence shows that accountability through annotation is absent from current systems. The closest pattern is LATS's reflection-in-memory, which produces a natural-language reason for change but attaches it to memory rather than to the plan artifact. The SGH versioning approach provides auditability through version comparison but loses the causal explanation.

---

## Discovered-Work Routing

Five distinct structural mechanisms found:

**1. Replanner rewrites remaining plan (LangGraph Plan-and-Execute)**
Mechanism: After each executor step, a replanner LLM consumes (objective, original plan, past_steps) and emits a revised list of remaining steps. Discovered work appears as new items in the revised plan. The plan state is always a flat ordered list visible in the state object.
Limitation: No formal distinction between "originally planned" vs "discovered during execution" steps. No scope gate — replanner can add arbitrary steps.

**2. Explicit task queue with create/prioritize cycle (BabyAGI)**
Mechanism: After each task execution, a task-creation agent generates new tasks based on the result; a prioritization agent re-orders the entire queue. Discovered work is formally routed: it enters the queue through the create step and gets a priority through the prioritize step.
Limitation: No scope gate. In principle, the queue can grow without bound. Scope control relies entirely on the LLM's judgment about what is necessary.

**3. Tree expansion as implicit routing (LATS, ReAcTree)**
Mechanism: The plan is the tree. Discovered subtasks = new tree nodes. In ReAcTree, an agent node decides to "expand" when it encounters complexity — creating children. In LATS, the MCTS expansion step generates candidate actions, which are the routing mechanism.
Limitation: Scope is bounded by computational budget (k trajectories in LATS). In ReAcTree, no explicit scope cap — expansion depth is bounded only by the LLM's judgment.

**4. DAG Self-Revision with local scope confinement (TDP)**
Mechanism: A Self-Revision module updates the dependency graph as execution unfolds, but confines changes to the minimal affected scope. A local failure does NOT trigger global replanning — only the affected DAG node is re-evaluated. Discovered work is routed to the local node; downstream nodes are updated only if there is a dependency.
Scope control: The DAG boundary IS the scope control mechanism. Changes cannot propagate beyond declared dependencies.

**5. Plan version with escalation layer (SGH)**
Mechanism: Execution plans are immutable within a version. When discovered work cannot be handled within the current plan, control escalates to a dedicated recovery layer. The recovery layer may produce a new plan version. Discovered work cannot be informally injected — it must force a formal version boundary.
Scope control: Strongest scope control found. The immutability constraint prevents ad-hoc injection. The escalation protocol prevents unbounded recovery loops.

**Summary of routing fidelity ranking:**
- Most formal: SGH (immutable plan + versioned escalation + bounded recovery protocol)
- Second: TDP (DAG with scoped Self-Revision module)
- Third: BabyAGI (explicit queue with create/prioritize cycle)
- Fourth: LangGraph (replanner rewrites remaining plan — semi-formal)
- Least formal: LATS/ReAcTree (tree expansion — implicit, no named mechanism)

---

## Key Findings

- No major agent framework implements an explicit "discovered work" concept as a named field or formal queue separate from the primary task structure. All systems route discovered work through the same mechanism used for planned work (queue, tree, plan list).
- The most effective scope-explosion prevention is structural, not behavioral: DAG boundaries (TDP) and plan immutability (SGH) prevent unbounded injection. Systems that rely on LLM judgment to "not add unnecessary steps" have no mechanical scope gate.
- The replanner-rewrites-remaining-plan pattern (LangGraph) is the most common in production frameworks. It provides good visibility (plan state is always in the state object) but poor scope control and no annotation.
- BabyAGI's explicit task queue with a separate create step and prioritize step is the closest to a formal discovered-work routing mechanism — but it operates on a flat list, not a structured plan.
- Plan annotation (changed because: X) is absent from all studied systems. The closest analog is LATS's verbal self-reflection stored in memory — but this is retrospective and separated from the plan artifact.
- Tree-based systems (LATS, ReAcTree) conflate "plan" with "execution history" — the tree IS both the plan and the record of what was tried. This makes annotation implicit (failed nodes are visible) but prevents clean plan-vs-history separation.
- SGH's finding that mutable execution history "complicates debugging" is direct evidence that plan immutability + version boundaries is superior to in-place plan mutation for accountability.
- TDP's 82% token reduction from scoped context is the strongest empirical signal that local expansion (depth-at-phase-entry) is better than global context replanning.
- Progress-gated dual-process routing (ReflexGrad) shows that structural signals (measured progress) can replace self-monitoring as a routing trigger — directly relevant to replacing behavioral triggers with plan-structural triggers.

---

## Design Implications

- **Implement a formal "discovered work" section in each phase block.** No studied system has this. It should be a named field that separates work discovered during execution from work planned at intake. This prevents informal injection into the main plan body.
- **Use DAG-style scope confinement for discovered-work propagation.** Following TDP: discovered work in phase N should propagate to downstream phases ONLY if there is a declared dependency. No dependency = no propagation = no scope explosion.
- **Require plan versioning for any structural change.** Following SGH: in-place mutation should be disallowed. A change to the plan creates a new version with a required annotation (reason for version boundary). This gives accountability without requiring agents to annotate mid-flight.
- **Separate the discovered-work intake from the execution flow.** Following BabyAGI's create/prioritize cycle: discovered work should pass through a triage step (is this phase-current or phase-deferred?) before being routed. An item that appears during phase N may belong in phase N+1 — it should not automatically execute in phase N.
- **Use computational budget as the scope cap.** Following LATS: each phase has a bounded budget for discovered-work handling. Budget exhaustion forces escalation to a re-planning step rather than unbounded growth.
- **Embed the reason for plan changes at the point of change.** No system does this; it is a design gap. The annotation format "removed/changed because: [what result triggered this]" should be a required field on any plan mutation — not stored in a separate log.
- **Do not use self-monitoring as the trigger for discovered-work routing.** Following ReflexGrad: use structural signals (phase completed, item consumed from queue, budget counter decremented) as routing triggers. Behavioral triggers ("notice when you discover new work") are the documented failure mode this design is trying to replace.
- **Enforce depth-at-phase-entry as a structural gate, not a behavioral rule.** Following TDP's dispatch pattern: a phase node must emit its full expansion before the executor picks up the first sub-step. Implement this as a required state transition (phase = PENDING → EXPANDING → EXECUTING), not as an instruction to the agent.

---

## Saturation Signal

NO — further search in two sub-spaces is likely to yield new structural properties:
(1) Formal task queue implementations in multi-agent orchestration systems (CrewAI, AutoGen) — these systems may have more explicit discovered-work handling than studied here.
(2) Hierarchical planning literature (HTN planning, STRIPS) from classical AI — the structural properties of how discovered work is handled in classical planners may provide cleaner formal vocabulary for the design.
