# KIT-PLAN-01 Research — A7: GitHub and practitioner broad discovery
Date: 2026-07-04

## Sources Found

- **addyosmani/agent-skills (GitHub)**: https://github.com/addyosmani/agent-skills — Production-grade engineering skills for AI coding agents; planning-and-task-breakdown SKILL.md defines three-phase structure with per-task acceptance criteria and required output files (plan.md + todo.md).
- **Separation of Planning and Execution (DEV Community)**: https://dev.to/varun_pratapbhardwaj_b13/separation-of-planning-and-execution-the-key-pattern-for-reliable-ai-coding-agents-5b53 — Practitioner article on two-phase split; plan document contains upfront files-to-modify, test criteria, execution order, risks.
- **Agentic Project Management (APM Framework)**: https://github.com/sdi2200262/agentic-project-management / https://agentic-project-management.dev/ — Spec-driven multi-agent framework; Planner produces three pre-implementation documents (Spec, Plan, Rules); project state lives in files external to agent context.
- **How Agents Plan Tasks with To-Do Lists (Towards Data Science)**: https://towardsdatascience.com/how-agents-plan-tasks-with-to-do-lists/ — Structured to-do list with pending/in-progress/completed states; write_todos tool for updating; middleware-managed plan updates.
- **LangGraph Plan-and-Execute**: https://langchain-ai.lang.chat/langgraph/tutorials/plan-and-execute/plan-and-execute/ — Full upfront plan generated then executed step-by-step; replanner receives objective + original plan + completed steps and produces updated plan; joiner decides whether to replan or finish.
- **Inside the Scaffold (arxiv 2604.03515)**: https://arxiv.org/html/2604.03515v2 — Taxonomy of 13 coding agent scaffolds; finding: explicit planning artifacts are absent from most; plans are embedded in loop structure or LLM-driven reactively; no accountability annotation found in any agent.
- **ADaPT (arxiv 2311.05772)**: https://arxiv.org/abs/2311.05772 — As-needed decomposition: decomposition is triggered reactively when execution fails, not upfront; represents the opposite of wide-first planning.
- **Why Your Agent Can't Follow a Plan (DEV Community)**: https://dev.to/manfredmacx/why-your-agent-cant-follow-a-plan-and-how-to-fix-it-f4g — TaskTree with dependency DAG; max decomposition depth of 4; checkpointing after every task; replanning capped at 3 attempts; failure isolation via dependency graph.
- **Plans vs Tasks in Agent Design (CrabTalk)**: https://crabtalk.ai/blog/plans-vs-tasks-agent-design — Plans as pre-execution documents; tasks as execution-time tracking; plan revision treated as feature not failure; no formal annotation mechanism found.
- **BabyAGI**: https://github.com/yoheinakajima/babyagi_archive — Pioneer open-source agent with dynamic task queue; three-phase loop: execute task, create follow-up tasks, prioritize queue; no upfront skeleton; plan emerges through execution.
- **Skeleton-of-Thought (SoT)**: https://learnprompting.org/docs/advanced/decomposition/skeleton_of_thoughts — Skeleton phase (3-10 bullet outline) then parallel expansion phase per point; 2x+ speed improvement; structural analogue to wide-first then depth-at-entry.
- **DeepPlanner (arxiv 2510.12979)**: https://arxiv.org/pdf/2510.12979 — Scaling planning capability for deep research agents; separate planning model trained with advantage shaping.
- **Plan-then-Execute LLM Agents (EmergentMind)**: https://www.emergentmind.com/topics/plan-then-execute-llm-agents — Survey of plan-then-execute implementations; dedicated Planner + Executor separation is dominant pattern.
- **From Coarse to Fine: Self-Adaptive Hierarchical Planning (arxiv 2604.23194)**: https://arxiv.org/pdf/2604.23194 — Most existing methods generate plans at fixed granularity; argues for adaptive granularity: less detail for simple tasks, full expansion for complex ones.
- **LATTE / Adaptive Task Graphs (arxiv 2605.06320)**: https://arxiv.org/html/2605.06320 — Formal task graph where nodes = subtasks, edges = dependencies; graph mutation operators allow teams to restructure coordination as execution unfolds.
- **GitHub Blog — Agentic Primitives**: https://github.blog/ai-and-ml/github-copilot/how-to-build-reliable-ai-workflows-with-agentic-primitives-and-context-engineering/ — Reliable workflows via context engineering; agentic primitives pattern.

---

## Structural Properties Found

- Plans are most commonly represented as **ordered flat lists or DAGs**, not nested trees; dependencies declared per-task.
- The dominant practitioner pattern is **plan-then-execute**: a complete plan document is produced before any execution step begins.
- Plans are stored as **external persistent files** (markdown or JSON) outside any agent context window; project state lives in files, not in LLM memory.
- Most implementations track tasks with a **three-state status**: pending / in-progress / completed.
- Task items in mature implementations include: title, description, acceptance criteria (checklist), verification steps, dependencies (referenced task IDs), and estimated scope.
- **Checkpoints/gates** appear after groups of tasks (every 2-3 tasks in addyosmani; after every completed task in TaskTree) — they block the next group until verification passes.
- Replanning is triggered by **execution results**, not by a timer or arbitrary count — the replanner receives prior plan + completed-steps-with-results as context.
- **Just-in-time decomposition** (ADaPT pattern) is an alternative: no upfront skeleton; decompose only when execution fails. This is convergently used by practitioners who want minimal planning overhead.
- The **Skeleton-of-Thought** pattern produces a wide shallow structure first, then expands each node independently — the closest practitioner analogue to wide-first / depth-at-entry.
- In the "Inside the Scaffold" taxonomy of 13 real coding agents: **no agent uses an explicit plan artifact**; plans are either scaffold-embedded (phase transitions) or LLM-driven reactively.
- The **separation of plan document from execution loop** is treated as the key structural reliability improvement in multiple practitioner sources.
- Task dependency graphs prevent one failure from blocking independent branches (failure isolation property).
- **Maximum decomposition depth** (e.g., 4 levels in TaskTree) is a practitioner constraint to prevent runaway planning.

---

## Wide-First Findings

Practitioners converge on generating the complete plan before any execution begins, but this is a flat ordered list or DAG — not necessarily a full-width skeleton. The addyosmani/agent-skills framework produces tasks/plan.md + tasks/todo.md before implementation; APM produces Spec + Plan + Rules before implementation phase begins. Neither requires listing all phases with TBD content — the plan is expected to be reasonably complete before execution starts, but no implementation was found that enforces a "full-width skeleton even if TBD" requirement. The closest structural analogue is Skeleton-of-Thought: the skeleton phase produces a 3-10 point outline (all points at once, even if brief), then each is expanded. This maps directly to wide-first: the skeleton is the intake output, and expansion is per-point entry. BabyAGI is the clear counter-pattern: emergent plan, no upfront width.

---

## Depth-at-Phase-Entry Findings

No practitioner implementation was found that requires full expansion of a phase before that phase begins. The addyosmani/agent-skills framework has the closest mechanism: checkpoints after every 2-3 tasks that require all tests to pass and human review before proceeding. However, this is a completion gate, not an expansion gate — it does not require pre-expansion of the next phase. ADaPT does the opposite: it decomposes just-in-time when execution fails. From Coarse to Fine (arxiv 2604.23194) argues explicitly that most systems fail by using fixed granularity — too coarse for complex tasks, too fine for simple ones — and proposes adaptive hierarchical granularity. This is the closest research-level argument for depth-at-phase-entry: phases should be fully expanded to the granularity required by their actual complexity before execution begins.

---

## Adaptive Annotation Findings

No practitioner implementation was found that requires explicit annotation of plan changes with reasons. The dominant pattern is silent replanning: the replanner receives the current state and produces a new plan without documenting why changes were made. LangGraph's replanner receives "objective + original plan + completed steps" and produces an updated plan, but the output is the new plan only — no diff, no annotation. BabyAGI continuously mutates the task queue without any change log. The plans-vs-tasks analysis explicitly frames plan revision as "a feature, not a failure" but does not propose a formal annotation structure. This represents a clear gap: accountability annotation is not a practitioner-converged pattern — it is absent from all implementations found.

---

## Discovered Work Routing

BabyAGI: after executing each task, a task-creation agent generates follow-up tasks based on the result; these are added to the queue and re-prioritized. This is the most explicit mechanism — discovered work feeds directly back into the plan via a dedicated agent role. LangGraph plan-and-execute: completed steps (with results) are passed to the replanner; the replanner adds new steps as needed. This is a structured but informal route: results inform new plan steps, but there is no formal "discovered work" field or routing mechanism. ADaPT: execution failure triggers recursive decomposition of the failed subtask — discovered complexity is handled structurally but only as a response to failure. TaskTree: dependency graph allows adding new tasks but provides no formal mechanism for routing discovered work back into the plan with metadata. addyosmani/agent-skills: dependency graph mapping mentioned, but no specific discovered-work routing found.

---

## Key Findings

- Separation of planning and execution is the universally adopted practitioner pattern; plans are produced as complete artifacts before any execution begins.
- Plans are almost always external persistent files (markdown), not in-context data structures — this is the structural mechanism that makes plans checkable rather than relying on the LLM to "remember" the plan.
- Task status (pending/in-progress/completed) with dependency declarations is the minimum viable planning artifact structure that practitioners converge on.
- Accountability annotation for plan changes is ABSENT from all practitioner implementations found. Replanning is silent in every system.
- Wide-first (full skeleton before any execution) is partially evidenced by Skeleton-of-Thought and plan-then-execute frameworks, but no implementation enforces a TBD-prefilled skeleton as the first output.
- Depth-at-phase-entry is not a practitioner pattern — most systems either expand everything upfront (flat plan) or just-in-time (ADaPT); mandatory pre-phase expansion was not found.
- In 13 real coding agent scaffolds (Inside the Scaffold survey), explicit planning artifacts are absent — plans are implicit in loop structure; this contradicts the assumption that planning is already well-structured in practice.
- Discovered-work routing is handled most explicitly by BabyAGI (dedicated task-creation agent) and LangGraph (completed-steps-inform-replanner), but neither produces structured metadata about why tasks were added.
- Practitioner systems deliberately cap planning complexity: max decomposition depth (TaskTree: 4 levels), max replanning attempts (TaskTree: 3), human review gates every 2-3 tasks (addyosmani).
- The "plan is checked, not noticed" property is supported structurally by the external-file approach: the plan exists outside the agent and must be consulted explicitly.

---

## Design Implications

- Store the plan as an external markdown file from the first output — not in the agent's reasoning chain. This makes it checkable rather than relying on LLM memory.
- The minimum viable plan artifact should have: task ID, title, description, acceptance criteria, status (pending/in-progress/done), dependencies (referenced IDs). These fields are convergently present across multiple independent practitioner implementations.
- Enforce wide-first at intake by producing a skeleton with all phases listed (even if TBD) before populating any phase content — Skeleton-of-Thought is the structural template; apply it to plan documents, not just answer generation.
- Depth-at-phase-entry requires a pre-expansion step: before a phase's first task begins, that phase section must be expanded to full sub-task detail with done criteria. This is not currently a practitioner pattern — it would need to be a hard constraint in the kit mechanism, not a behavioral prompt.
- Add accountability annotation as a new structural requirement: any plan change (add, remove, restructure task) must write a change record with: change type, affected task(s), triggering result ("removed because: [X]"). No existing system does this — it is a genuine design addition.
- Discovered-work routing should be a named mechanism: results from completed tasks flow to a replanning step that can add tasks with an origin field (discovered during: [task ID] from [result summary]). BabyAGI's task-creation agent is the structural template.
- Implement verification gates between phases (addyosmani pattern): before entering Phase N+1, all Phase N tasks must be in done state and verification must pass. This is the closest existing mechanism to depth-at-phase-entry.
- Cap decomposition depth (recommend 3-4 levels) and replan attempts (recommend 3-5) to prevent runaway planning — these are convergent practitioner constraints.

---

## Saturation Signal

NO — further searches are likely to return new structural properties. Specific areas not yet saturated: (1) HuggingFace-specific paper search on plan evolution with annotations; (2) production post-mortems or failure analyses of agent planning in practitioner blogs (LessWrong, The Batch); (3) specific open-source tools like OpenDevin, SWE-Agent internal plan representation; (4) Devin's "pressure-test" review agent as a discovered-work routing mechanism. The broad discovery pass found strong convergent patterns but the accountability annotation gap and discovered-work routing mechanisms warrant deeper targeted search.
