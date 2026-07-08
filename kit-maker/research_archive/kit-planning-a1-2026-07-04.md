# KIT-PLAN-01 Research — A1: Agent frameworks — planning artifacts
Date: 2026-07-04

## Sources Found

1. **MetaGPT: Meta Programming for a Multi-Agent Collaborative Framework** (ICLR 2024)
   - URL: https://arxiv.org/html/2308.00352v6
   - Relevance: Describes SOPs-as-structure approach; each role emits a typed artifact (PRD, architecture doc, task list); all planning artifacts are created before execution begins.

2. **LangGraph Plan-and-Execute Tutorial** (LangChain official)
   - URL: https://langchain-ai.github.io/langgraphjs/tutorials/plan-and-execute/plan-and-execute/
   - Relevance: Provides exact TypedDict schema for the PlanExecute state — fields: input, plan (List[str]), past_steps (List[Tuple]), response. Plan is generated complete before any execution step.

3. **Planning for Agents** (LangChain blog)
   - URL: https://blog.langchain.com/planning-for-agents/
   - Relevance: Explains plan-and-execute vs. ReAct; notes planner emits complete ordered list[str] before any code runs.

4. **TaskWeaver: A Code-First Agent Framework** (Microsoft Research, 2023)
   - URL: https://arxiv.org/pdf/2311.17541
   - Relevance: Describes two-stage planning (init_plan + refined plan), post/attachment communication structure, ReAct observation loop. Most complete structural specification found.

5. **TaskWeaver planner_prompt.yaml** (GitHub, Microsoft)
   - URL: https://github.com/microsoft/TaskWeaver/blob/main/taskweaver/planner/planner_prompt.yaml
   - Relevance: Source of truth for planner prompt structure — init_plan, plan, current_step fields.

6. **CAMEL: Communicative Agents for "Mind" Exploration of Large Language Model Society** (NeurIPS 2023)
   - URL: https://arxiv.org/abs/2303.17760
   - Relevance: Role-playing two-agent structure; task-specifier generates task description; AI user plans step-by-step; AI assistant executes — no persistent plan document.

7. **CrewAI Planning Documentation** (official)
   - URL: https://docs.crewai.com/en/concepts/planning
   - Relevance: AgentPlanner generates shared roadmap before each iteration when planning=True; plan appended to task descriptions. Plan fields: role, goal, backstory, tools (agent); description, expected_output (task).

8. **Voyager: An Open-Ended Embodied Agent with Large Language Models** (2023)
   - URL: https://arxiv.org/html/2305.16291
   - Relevance: Just-in-time curriculum — proposes ONE next subtask per action loop; NOT wide-first; uses skill library as persistent capability store; past_tasks with pass/fail as context.

9. **Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks** (ICML 2025)
   - URL: https://arxiv.org/html/2503.09572v3
   - Relevance: 2-agent (Planner + Executor); dynamic replanning after every executor step; Planner input is current state + previous plans + previous actions; achieves SOTA on WebArena.

10. **Routine: A Structural Planning Framework for LLM Agent System in Enterprise** (2025)
    - URL: https://arxiv.org/html/2507.14447v1
    - Relevance: Structured natural-language Routine artifact; dramatically improves accuracy (GPT-4o: 41.1%→96.3%); named fields, parameter-passing between steps, context templates.

11. **Verified Multi-Agent Orchestration: A Plan-Execute-Verify-Replan Framework** (2026)
    - URL: https://arxiv.org/html/2603.11445
    - Relevance: Identifies three levels of plan adjustment: light (parameter), medium (reorder), heavy (full re-decomposition).

12. **SHIELDA: Structured Handling of Exceptions in LLM-Driven Agentic Workflows** (2025)
    - URL: https://arxiv.org/pdf/2508.07935
    - Relevance: Exception handling for plan deviation; structural mechanisms for preventing abandonment.

13. **Beyond Task Completion: An Assessment Framework for Evaluating Agentic AI Systems** (2025)
    - URL: https://arxiv.org/html/2512.12791v2
    - Relevance: Names specific failure modes — scope creep, stopping too early, premature task abandonment; requires explicit completion criteria verified against global state.

14. **Web Agents Should Adopt the Plan-Then-Execute Paradigm** (2025)
    - URL: https://arxiv.org/html/2605.14290
    - Relevance: Argues for plan-first (produce task-specific program), then executor runs it — structural separation reduces hallucinated actions.

15. **Using CrewAI Planning to Build a Structured Multi-Agent Workflow** (Analytics Vidhya, 2025)
    - URL: https://www.analyticsvidhya.com/blog/2025/12/crewai-planning/
    - Relevance: Practical demonstration of CrewAI planning step pattern; shows shared roadmap prevents agent drift and duplication.

---

## Structural Properties Found

- **LangGraph PlanExecute schema**: `input: str`, `plan: List[str]` (ordered steps), `past_steps: List[Tuple[str, str]]` (step + result), `response: str`. Plan is generated complete and stored as explicit state field before any execution begins.

- **MetaGPT typed artifact chain**: PRD → Architecture Document → Task List → Code → Test. Each artifact has a named schema (product goals, user stories, requirement pool; file list, data structures, interface definitions). No execution before all upstream artifacts exist for that phase. Communication is structured (not free natural language).

- **TaskWeaver two-stage plan**: `init_plan` (raw decomposition with dependency annotations for sequential and interactive dependencies) → `plan` (refined: adjacent steps with sequential dependency merged). Each plan step is enumerated. Current step tracked. Post/attachment communication: each message = `type` + `content`. Step-wise plan history maintained in Memory module.

- **CrewAI agent/task schema**: Agent = `{role, goal, backstory, tools}`. Task = `{description, expected_output}`. When `planning=True`, AgentPlanner generates a shared plan appended to each task description before kickoff.

- **Voyager per-loop task proposal**: At start of each loop, curriculum proposes ONE next task. Input: inventory snapshot + list of past tasks with pass/fail. No upfront full plan. Task is a natural-language string goal. Verified code skills stored in library for reuse.

- **CAMEL conversational planning**: Task-specifier refines goal into detailed task description. AI user generates next instruction step; AI assistant executes. No persistent plan document — plan is emergent from conversation turn sequence.

- **Plan-and-Act Planner input**: `current_state + previous_plans + previous_actions → new_plan`. Planner is a separate model fine-tuned to generate structured high-level plans. Plan regenerated after every Executor step.

- **Routine artifact fields**: Named steps with explicit parameters, parameter-passing between steps, context templates specifying required information per step. Drafted by business expert + optimized by LLM into structured natural language.

- **Three-level plan adjustment taxonomy**: (1) light = parameter modifications within existing subtasks, (2) medium = subtask reorder and dependency restructuring, (3) heavy = complete re-decomposition.

- **Completion criteria as structural property**: Frameworks that prevent abandonment require explicit termination conditions verified against global state, not isolated per-step success signals.

---

## Wide-First Findings

**Strong evidence for wide-first in production frameworks:**

- LangGraph plan-and-execute: Planner emits complete ordered list before any execution node fires. This is structural — the plan is a required state field that must be populated before the executor node runs.
- MetaGPT: All upstream artifacts (PRD, Architecture, Task List) must exist before downstream execution (code, tests). The waterfall structure enforces wide-first within each phase.
- CrewAI with planning=True: AgentPlanner generates the full roadmap before kickoff; it is appended to all task descriptions simultaneously.
- Routine: The full Routine artifact (all steps, parameters, context) is constructed before any tool call.

**Counterexample — just-in-time:**
- Voyager: deliberately avoids wide-first because the open-ended environment makes full upfront planning impossible. One task at a time, calibrated to current inventory and world state.
- CAMEL: no upfront plan — planning is interleaved with execution conversationally.
- Plan-and-Act: technically regenerates the plan after every executor step — partial wide-first (full plan exists at each step, but it is also ephemeral and continually replaced).

**Design signal:** Wide-first is the dominant pattern for closed-domain task execution (software dev, data analytics, web tasks). Just-in-time appears in open-ended, exploration-driven domains where the full task space is unknown at intake. For a kit targeting defined tasks with known phases, wide-first is well-supported.

**Minimum viable skeleton at intake:** LangGraph evidence shows a flat List[str] of step strings is sufficient to be structurally wide-first. MetaGPT evidence shows typed artifact schemas (named fields) add more guardrails. The minimum is: all major phases named (even if TBD), stored in a persistent state structure, before execution of any phase.

---

## Depth-at-Phase-Entry Findings

**No framework found that explicitly gates phase entry on full expansion of that phase.**

The closest examples:
- TaskWeaver: init_plan (coarse) → plan (refined with merged sequential steps) happens before execution. This is pre-execution refinement of the full plan, not per-phase entry expansion.
- MetaGPT: Each role (phase) receives the complete upstream artifact before acting. The Architect receives the full PRD; the Engineer receives the full Architecture Doc. This enforces artifact completeness before downstream work — but it is about inter-role handoff, not within-phase expansion.
- Routine: Each step has explicit parameter definitions and context templates that must be populated before the step executes. Closest to depth-at-entry of any system found.

**Gap identified:** No framework explicitly requires that a phase's sub-steps, done-criteria, discovered-work routing, and failure modes be fully written before phase execution begins. This is an unimplemented structural property — an opportunity for novel design.

**Evidence from failure mode research:** "Stopping Too Early" and "scope creep" failure modes are named in agent evaluation literature and linked to missing explicit completion criteria. TaskWeaver's self-reflection after observing results (ReAct loop) is a reactive mechanism — it does not prevent incomplete phase entry.

---

## Adaptive Annotation Findings

**No framework found with explicit "changed because: [reason]" annotation on plan mutations.**

What exists:
- Plan-and-Act: plan is fully replaced after each executor step (current state + history used). No annotation of what changed or why — old plans are implicitly discarded.
- TaskWeaver: Planner "may update its plan" after observing execution results (ReAct). The observation is logged in Memory but the plan change itself carries no annotation.
- LangGraph: re-planning node generates revised plan when past_steps indicate failure. The replanner sees history but the new plan carries no diff or reason annotation.
- Three-level taxonomy (light/medium/heavy): a classification exists in research but no production framework enforces agents to annotate their own plan mutations.

**Design signal:** Explicit plan-mutation annotation ("removed step X because result Y showed Z") is absent from all surveyed frameworks. This is a structural gap — particularly important for distinguishing legitimate adaptation from scope abandonment. The behavioral property exists only as evaluation criteria in assessment frameworks, not as a structural requirement during execution.

---

## Discovered-Work Routing

**How frameworks handle work found during execution:**

- LangGraph replanner: examines past_steps for failures or new constraints; generates revised plan. New discovered tasks enter the plan as additional steps in the next iteration. No separate "discovered work" bucket — everything flows through the plan list.
- TaskWeaver: Planner self-reflects after CI returns results; can add new subtasks to the plan. New work flows back through the Planner's initiative — no structural slot for discovered work, it is recognized via LLM judgment.
- MetaGPT: Sequential pipeline — discovered work at a late stage (e.g., Engineer finds a design gap) requires communicating back through the role hierarchy. No explicit backflow structure; the SOP defines explicit outputs, so discovered work that doesn't fit the SOP schema is structurally awkward.
- CrewAI: Agents can report output back; Crew can be re-run. No dedicated discovered-work routing — depends on agent output feeding back into task context.
- Voyager: Discovered capabilities (failed/succeeded tasks) update the curriculum's context for the next task proposal. Pass/fail is the discovery signal. Implicit routing: curriculum proposes a different next task based on failures.
- Plan-and-Act: Executor failures are visible to Planner via previous_actions; Planner adapts next plan accordingly. Implicit routing — no named slot.

**Pattern across all:** Discovered work is routed implicitly through re-observation by a planner/orchestrator. No framework provides a structural "discovered_work" queue or annotation. The replanner sees results and decides whether to add steps — the routing is via LLM judgment, not structural constraint.

**Design implication:** A structural "discovered_work" field — tasks added during execution with mandatory annotation of what triggered their addition — would be novel. It separates the original plan from execution-discovered additions and makes the expansion visible for audit.

---

## Key Findings

- LangGraph plan-and-execute schema is the most concrete: `{input, plan: List[str], past_steps: List[Tuple], response}`. Plan = flat ordered string list; complete before execution.
- MetaGPT shows typed artifact schemas enforce structure without requiring agents to decide what to include — the schema defines the fields and agents fill them.
- TaskWeaver is the only framework with two-stage plan refinement (init_plan → plan) making rough-to-refined planning explicit and structural.
- Voyager is the clearest counterexample to wide-first: just-in-time is right for open-ended domains; wrong for closed-domain kit execution.
- Plan-and-Act (ICML 2025) shows dynamic replanning (full plan regenerated after every step) can achieve SOTA without plan-mutation annotation. Performance is measurable; accountability is not.
- Routine (2025) shows structured planning artifacts dramatically improve multi-step accuracy (GPT-4o: 41.1%→96.3%), confirming structural planning beats prompt-based guidance.
- No framework found requiring depth-at-phase-entry expansion before phase execution begins. This is a structural gap.
- No framework found with explicit plan-mutation annotation ("changed because X"). Evaluation literature names this as needed; no production system implements it.
- Discovered-work routing is universally implicit (LLM replanner notices and adapts). No framework provides a structural discovered-work queue.
- Three failure modes named in evaluation literature: scope creep, stopping too early, premature abandonment — all linked to absent explicit completion criteria.

---

## Design Implications

- **Flat ordered list is the minimum viable plan structure** (LangGraph evidence). All phases named as strings before execution begins. Adding typed fields per phase (done-criteria, failure modes) is additive on top of this minimum.
- **Use typed artifact schemas per phase** (MetaGPT evidence): named fields constrain what agents must provide, preventing missing elements. A schema with mandatory fields (sub-steps, done-criteria, discovered-work-routing, failure-modes) enforces depth-at-entry structurally.
- **Implement two-stage planning** (TaskWeaver evidence): rough decomposition at intake (all phases, TBD content) → per-phase detailed expansion before that phase runs. This maps directly to the wide-first + depth-at-entry requirement.
- **Add a `discovered_work` field to plan state** (gap across all frameworks): tasks added during execution must be nameable and traceable. Structural slot prevents them from being invisible insertions.
- **Require plan-mutation annotation as a structural field** (gap across all frameworks): any change to the plan must include `{changed_item, reason, triggering_result}`. This is not implemented anywhere and is the primary mechanism for distinguishing adaptation from abandonment.
- **Completion criteria must be per-phase, verified against global state** (abandonment prevention evidence): not "did this step succeed" but "does the global state satisfy the phase's exit criteria."
- **Replanning must operate at three levels** (light/medium/heavy taxonomy): parameter tweak, reorder, full re-decomposition — each level has different annotation requirements; full re-decomposition is the high-risk operation that most needs accountability.
- **Voyager skill-library pattern is worth borrowing**: verified completed capabilities stored persistently. For kits, equivalent = verified completed sub-tasks stored as facts the next phase can reference.

---

## Saturation Signal

NO — further search likely to return additional structural properties.

One clear gap: the detailed field schema of the Routine artifact (from arXiv:2507.14447) was not fully retrieved — its specific named fields, parameter-passing format, and context template structure could add concrete design detail. A targeted fetch of that paper or the MetaGPT source code would provide exact schema definitions for the typed artifact fields. A search targeting AutoGen's planning module (magentic-one or group chat orchestrator) was not completed and may show different structural properties. However, the core structural taxonomy (wide-first vs JIT, typed schemas, two-stage refinement, discovered-work routing, plan-mutation annotation) appears saturated within this search set.
