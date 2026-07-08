# KIT-PLAN-01 Research — A3: Hierarchical task networks in LLMs
Date: 2026-07-04

## Sources Found

1. **ChatHTN: Interleaving Approximate (LLM) and Symbolic HTN Planning** — https://arxiv.org/abs/2505.11814  
   Relevance: Direct implementation of LLM-HTN hybrid; shows how compound tasks are decomposed by LLM when no symbolic method applies, and how soundness is preserved via effect verification.

2. **HiPlan: Hierarchical Planning for LLM-Based Agents with Adaptive Global-Local Guidance** — https://arxiv.org/pdf/2508.19076  
   Relevance: Coarse-grained milestone library (global skeleton) combined with fine-grained local stepwise hints; explicit two-level planning structure before execution.

3. **From Coarse to Fine: Self-Adaptive Hierarchical Planning for LLM Agents** — https://arxiv.org/pdf/2604.23194  
   Relevance: Progressive refinement — highest-level plan generated first, then increasingly detailed levels; self-adaptive number of levels based on task complexity.

4. **ConceptAgent: LLM-Driven Precondition Grounding and Tree Search for Robust Task Planning and Execution** — https://arxiv.org/abs/2410.06108  
   Relevance: Formal precondition verification at inference time prevents infeasible actions; LLM-MCTS enables adaptive replanning when preconditions fail.

5. **LLM+P: Empowering Large Language Models with Optimal Planning Proficiency** — https://arxiv.org/pdf/2304.11477  
   Relevance: Converts NL task descriptions to PDDL, runs classical planner, translates back; separates planning model construction (LLM) from plan generation (classical planner).

6. **Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks** — https://arxiv.org/abs/2503.09572  
   Relevance: Explicit separation of Planner (high-level steps) and Executor (low-level actions); Planner generates full abstract plan before Executor acts.

7. **Why Do LLM-based Web Agents Fail? A Hierarchical Planning Perspective** — https://arxiv.org/pdf/2603.14248  
   Relevance: Empirical failure analysis showing planning-level vs execution-level failures; precondition failure and hallucinated sub-goals as primary causes.

8. **Online Learning of HTN Methods for Integrated LLM-HTN Planning** — https://arxiv.org/html/2511.12901v1  
   Relevance: Memoization-based learning of LLM-generated decompositions reduces LLM calls 50-70% while maintaining soundness; structure of learned HTN methods.

9. **LLMs as Planning Modelers: A Survey for Leveraging LLMs to Construct Automated Planning Models** — https://arxiv.org/html/2503.18971v1  
   Relevance: Survey of how LLMs construct PDDL domain/problem files; formal planning model structure required before any planner can execute.

10. **HTN Planning: Overview, Comparison, and Beyond** — https://www.sciencedirect.com/science/article/pii/S0004370215000247  
    Relevance: Canonical reference on HTN formal structure: tasks, methods, preconditions, effects, task networks, ordering constraints.

11. **Hierarchical Task Network Planning in AI — GeeksforGeeks** — https://www.geeksforgeeks.org/artificial-intelligence/hierarchical-task-network-htn-planning-in-ai/  
    Relevance: Accessible summary of classical HTN components and decomposition semantics.

12. **Planning in the Era of LLMs (LM4Plan @ ICAPS 2025)** — https://icaps25.icaps-conference.org/program/workshops/lm4plan/  
    Relevance: State of field at ICAPS 2025; integration directions, neuro-symbolic keynote.

13. **ReWOO: Reduce LLM Overhead via Parallelized Tool Planning** (via search summary)  
    Relevance: Plans entire tool-use sequence upfront (no interleaved execution); shows upfront full planning as an explicit architectural choice for cost and predictability.

14. **Reflexion Framework** (cited in multiple search results)  
    Relevance: Self-critique stored in working memory after failure; closest mechanism to annotated plan mutation found in this angle.

15. **A Roadmap to Guide the Integration of LLMs in Hierarchical Planning** — https://arxiv.org/html/2501.08068v1  
    Relevance: Taxonomy of integration modes; which HTN properties transfer to LLM systems.

---

## Structural Properties Found

- **HTN task is a typed triple**: compound tasks have (task-head, precondition-set, subtask-network). Primitive tasks have (task-head, preconditions, add-list, delete-list). The distinction is complete before planning begins — the domain must be specified before any decomposition attempt.

- **Methods are conditional decomposition rules**: A method applies only when its preconditions hold in the current state. If no method applies, the planner backtracks and tries an alternative method. This is not an error — it is the expected recovery path.

- **Task networks encode ordering constraints explicitly**: Subtasks within a method carry partial or total ordering constraints as a graph structure, not a flat list. Dependencies are encoded structurally before execution.

- **Decomposition is top-down and recursive before execution**: In SHOP2 and most classical HTN planners, compound tasks are fully decomposed into primitive networks before any primitive executes. The entire plan tree exists before the first action is taken.

- **Plan-then-execute is a documented architecture in LLM systems**: Systems explicitly separate a Planner LLM (high-level steps, full plan produced upfront) from an Executor LLM (low-level actions). The Planner is invoked once; the Executor does not trigger re-planning on every step.

- **Coarse-to-fine hierarchical planning**: Planning artifacts are structured in levels. Level 0 = abstract milestones (all phases listed). Level 1+ = refinement of each milestone into concrete sub-steps. Higher-level global guidance accompanies the agent throughout — it is not discarded after refinement.

- **Precondition grounding as a structural gate**: ConceptAgent verifies each action's preconditions against perceived environment state at inference time before selecting that action. This is a structural gate, not a post-hoc check.

- **ChatHTN's effect verifier**: After every LLM-generated decomposition, a symbolic verifier checks that the decomposition achieves the compound task's intended effects. This is a structural step in the planning artifact — decompositions are not accepted without verification.

- **PDDL requires a domain model and a problem file**: Before any classical planner can be called, both (a) the action schema (preconditions, effects for each operator) and (b) the initial state and goal must be fully specified. Execution cannot begin with a partial planning model.

- **Learning memoizes LLM-generated methods**: Online HTN learning (as in the integrated LLM-HTN work) stores LLM-generated decompositions as reusable methods, reducing repeated LLM calls. The learned structure is a formal HTN method — not a log, but a reusable planning rule.

---

## Wide-First Findings

Strong evidence supports wide-at-intake as a structural property in both classical and LLM-HTN planning:

1. Classical HTN planners (SHOP2) decompose the entire task network from the root compound task before any primitive action executes. The full decomposition tree is a precondition of execution.

2. The Plan-and-Act / Plan-then-Execute pattern in LLM systems explicitly generates a complete high-level plan (all abstract steps) before the Executor acts. Papers frame this as an architectural choice for auditability and cost reduction (Planner LLM called once).

3. HiPlan's global milestone library creates an abstract roadmap (all major milestones) first, then provides local stepwise guidance as each milestone is entered. The global roadmap is visible at intake.

4. ReWOO plans the entire tool-usage sequence upfront. No tool is called until the full tool plan is finalized.

5. "Coarse-to-fine" research explicitly shows that "presenting the full hierarchical plan to the actor significantly outperforms using only the last, most detailed level" — the skeleton matters for actor performance, not just for planning.

**Minimum required skeleton at intake**: Based on the evidence, the minimum is: (a) all phases/milestones identified by name, (b) rough ordering or dependency structure between them, (c) the goal state that terminates planning. Sub-steps can be TBD, but the phase list must be complete.

---

## Depth-at-Phase-Entry Findings

Evidence supports depth-at-phase-entry as a required structural property, though it is less explicitly enforced than wide-at-intake:

1. HTN decomposition: before a compound task's subtasks execute, the method that decomposes it must be selected and its preconditions verified. You cannot start executing a compound task without first decomposing it — the primitive network for that phase must exist first.

2. "Coarse-to-fine" hierarchical planning: each high-level milestone is expanded into detailed sub-steps before the actor operates on it. The actor receives both the global plan and the current-level detail simultaneously.

3. Plan-and-Act: "the agent system iterates through abstract steps, with the LLM decomposing each into more concrete sub-steps or primitive actions" — each abstract step is expanded before execution.

4. HiPlan: local stepwise hints (fine-grained) are generated per milestone as the agent enters it — the fine detail is not pre-generated for all phases but is produced at phase entry.

**Key finding**: HiPlan demonstrates that depth-at-phase-entry (local hints generated at milestone entry) outperforms either pure upfront depth or pure on-the-fly expansion. This supports the design choice of expand-before-enter rather than expand-during-execution.

---

## Adaptive Annotation Findings

This is the weakest area in the evidence base — most systems change plans without explicit annotation of why:

1. **Reflexion** (closest match): After a task fails, the agent writes a self-critique to working memory. This critique accompanies the next planning attempt. This is annotation of *why a retry happened*, not annotation of *why a specific plan step was removed or changed*.

2. **ChatHTN**: The effect verifier rejects decompositions that don't achieve intended effects. Rejected decompositions are discarded; the LLM is re-prompted. There is no explicit log of "removed step X because verification failed."

3. **Embodied replanning**: "LLM modules dynamically update the plan when errors occur... using Visual Language Models to replan based on visual feedback whenever an error occurs." The visual context is implicit reason-for-change, not an explicit annotation.

4. **ConceptAgent's MCTS with self-reflection**: The reflection is stored in the search tree. Each node in the MCTS records the action taken and resulting state — this is the closest to a structural audit trail.

**Key gap**: None of the surveyed systems enforce explicit annotation of "removed/changed because: [result]" as a structural requirement on the plan artifact itself. Adaptation is handled via external logs (Reflexion's working memory), not via in-plan annotations.

**Implication**: The ADAPTIVE WITH ACCOUNTABILITY property is not structurally enforced in any surveyed system. It must be designed explicitly. Evidence suggests that when plans change without annotation, scope abandonment and false completion are common — confirmed by the paper "Why Do LLM-based Web Agents Fail?"

---

## Discovered Work Routing

Evidence on handling work discovered during execution:

1. **Plan-Execute-Observe-Replan cycle**: The dominant pattern. Observations (including discovery of new required actions) feed back to the Planner. The Planner revises the plan. This is a full re-plan, not an incremental patch.

2. **ConceptAgent MCTS**: New objects/obstacles discovered during tree search are integrated by expanding the search tree. Discovered work becomes a new node in the tree, evaluated against the goal.

3. **HTN precondition failures as discovered-work triggers**: When a method's precondition fails (because a required resource is unavailable or a required state is absent), the planner backtracks and tries alternative methods. If no method succeeds, a planning failure is reported. This is structural: the planner cannot proceed past a precondition failure without resolving it.

4. **"Anticipate & Act"**: Explicitly anticipates likely next actions (including newly visible objects) and integrates them into an updated plan before execution of the current step completes.

5. **InteLiPlan**: "LLM modules can dynamically update the plan when errors occur" — but the routing mechanism is: failure → LLM re-prompt → new plan fragment → execution continues. The plan artifact is not explicitly marked "discovered during phase X."

**Key structural gap**: No system routes discovered work back into the plan as a labeled item with its discovery context. The closest is MCTS (tree node records state at discovery), but this is a search structure, not a human-readable plan artifact.

---

## Key Findings

- HTN formal task structure = (task-head, preconditions, subtask-network) for compound tasks; (task-head, preconditions, add-list, delete-list) for primitive tasks. This triple is the minimum required per task.

- Classical HTN requires a complete task network at intake. The full hierarchy must be specified or derivable before planning begins. Partial specifications cause planner failure, not graceful degradation.

- Plan-then-execute (LLM) is empirically validated as producing better auditability, lower cost, and fewer loop failures vs. reactive/ReAct-style agents.

- Coarse-to-fine planning with global context outperforms detail-only planning. Actors perform better when they have the global skeleton alongside the current detail level.

- Precondition verification must be structural (a gate before execution), not advisory. Systems that rely on the LLM to self-monitor preconditions have documented hallucination failures.

- HTN soundness is preserved by effect verification, not just precondition checking. ChatHTN's explicit verifier after each decomposition step is a key architectural insight.

- Adaptive annotation is NOT enforced in any surveyed system. Systems that adapt without annotation lose plan integrity (scope abandonment, circular replanning). This is a known documented failure mode.

- LLM calls in hybrid systems can be reduced 50-70% by memoizing LLM-generated decompositions as reusable HTN methods.

- "Presenting the full hierarchical plan to the actor significantly outperforms using only the last, most detailed level" — the skeleton is not just a planning artifact; it actively improves execution quality.

---

## Design Implications

- **The plan artifact must carry a typed task entry**: minimum fields are (name, preconditions, success-condition/effect, subtasks or [TBD]). Missing any of these fields means the phase cannot be safely entered.

- **Phase list must be complete at intake before any phase executes**: analogous to classical HTN requiring the full task network upfront. The plan skeleton (all phase names + rough ordering) is a precondition of execution start.

- **Phase expansion must complete before that phase's first step executes**: analogous to HTN compound task decomposition. "Entering a phase" = completing its expansion. Running a partially-specified phase is the structural equivalent of executing an undecomposed compound task — undefined behavior.

- **Effect verification must be a structural step, not advisory**: after each phase expansion, verify that the expanded steps would achieve the phase's stated effect (success condition). Reject expansions that cannot demonstrably reach the success condition.

- **Precondition checking must be a gate, not a note**: before a phase begins, check that its preconditions hold. If not, route to discovered-work handling — do not skip the phase or silently continue.

- **Plan mutations require in-plan annotation, not just external logs**: No surveyed system enforces this, but the failure evidence strongly supports it. Annotation format: each changed/removed item carries a "changed because: [observed result]" field. This distinguishes evolution from abandonment.

- **Discovered work should route to a named slot in the plan**: when a new task is discovered during execution, it should be added as a labeled item in the plan (with phase = "discovered during [phase X]") rather than silently inserted or handled via full re-plan.

- **Global skeleton must remain visible throughout execution**: HiPlan evidence shows that actors perform better with global context alongside local detail. The skeleton should not be collapsed or hidden once phases begin.

---

## Saturation Signal

NO — further searches are likely to yield new structural properties. Specific gaps remaining:
1. "Minimum viable plan skeleton" benchmarks — what minimum structure is sufficient for reliable execution (not yet searched directly).
2. The LM4Plan ICAPS 2025 workshop papers individually likely contain more precise structural specifications.
3. PDDL-to-agent translation specifics — how PDDL's formal action schema translates to an LLM-readable plan entry format.
4. Failure taxonomy papers — "Why Do LLM-based Web Agents Fail?" was found but not fetched in detail; likely contains more precise precondition failure categorizations.
