# KIT-PLAN-01 Research — A2: Skeleton and plan-then-execute patterns
Date: 2026-07-04

## Sources Found

1. **Plan-and-Solve Prompting (Wang et al., 2023)**
   - URL: https://aclanthology.org/2023.acl-long.147.pdf
   - GitHub: https://github.com/AGI-Edgerunners/Plan-and-Solve-Prompting
   - Relevance: Defines the two-stage plan-then-execute structure; upfront planning before any step execution; zero-shot trigger sentence to elicit plan-first behavior.

2. **Skeleton-of-Thought (Ning et al., 2023)**
   - URL: https://arxiv.org/abs/2307.15337
   - OpenReview: https://openreview.net/pdf?id=mqVgBbNCm9
   - Relevance: Clearest structural evidence for wide-first skeleton: full skeleton is generated (3-5 words per point) before any branch is expanded; parallel expansion in stage two.

3. **Tree of Thoughts (Yao et al., 2023)**
   - URL: https://arxiv.org/abs/2305.10601
   - NeurIPS 2023: https://proceedings.neurips.cc/paper_files/paper/2023/file/271db9922b8d1f4dd7aaef84ed5ac703-Paper-Conference.pdf
   - Relevance: Planning as tree search; multiple candidate thoughts at each node; BFS/DFS traversal; backtracking; evaluative self-monitoring at each step.

4. **Least-to-Most Prompting (Zhou et al., 2022)**
   - URL: https://www.researchgate.net/publication/360804483_Least-to-Most_Prompting_Enables_Complex_Reasoning_in_Large_Language_Models
   - Relevance: Two-stage: decompose into ordered subproblems first; then solve sequentially from simplest to most complex, appending each solution before the next.

5. **Algorithm of Thoughts (2023)**
   - URL: https://arxiv.org/abs/2308.10379
   - Relevance: Generates 5 distinct plans first, selects the most promising, then refines; single unified generation sweep; embeds algorithmic reasoning in-context.

6. **The Depth Ceiling: On the Limits of Large Language Models in Discovering Latent Planning (2026)**
   - URL: https://arxiv.org/abs/2604.06427
   - Relevance: Foundational evidence that LLMs have a depth ceiling of 3-7 latent planning steps; explicit plan structures compensate for this architectural limitation.

7. **ReWOO Pattern (Reasoning Without Observation)**
   - URL: https://langchain-ai.github.io/langgraphjs/tutorials/rewoo/rewoo/
   - IBM: https://www.ibm.com/think/topics/rewoo
   - Relevance: Full plan with placeholders generated upfront before any tool execution; 2 LLM calls total; 5x token efficiency over ReAct; separates planning from execution.

8. **Plan-and-Execute Agents (LangChain/LangGraph)**
   - URL: https://www.langchain.com/blog/planning-agents
   - LangGraph mirror: https://www.baihezi.com/mirrors/langgraph/tutorials/plan-and-execute/plan-and-execute/index.html
   - Relevance: DAG Plan & Execute with Planner, Executor, Replanner; Replanner triggered by CHECKPOINT, INTERRUPT, RESUME events; local vs. global replanning.

9. **HiPlan: Hierarchical Planning for LLM Agents with Adaptive Global-Local Guidance**
   - URL: https://arxiv.org/html/2508.19076
   - Relevance: Addresses coarse-vs-fine granularity trade-off; adaptive switching between high-level global plan and local step-wise planning.

10. **From Coarse to Fine: Self-Adaptive Hierarchical Planning for LLM Agents**
    - URL: https://arxiv.org/pdf/2604.23194
    - Relevance: Fixed-granularity planning fails; evidence for adaptive depth triggered by task complexity; coarse plans insufficient for complex tasks.

11. **Navigating Modern LLM Agent Architectures**
    - URL: https://www.wollenlabs.com/blog-posts/navigating-modern-llm-agent-architectures-multi-agents-plan-and-execute-rewoo-tree-of-thoughts-and-react
    - Relevance: Side-by-side comparison of ReAct, Plan-and-Execute, ReWOO, ToT; trade-off between upfront planning and adaptive flexibility.

12. **Why Your Agent Can't Follow a Plan (DEV Community)**
    - URL: https://dev.to/manfredmacx/why-your-agent-cant-follow-a-plan-and-how-to-fix-it-f4g
    - Relevance: Practitioner documentation of plan-following failure modes; importance of visible plan state.

13. **Agent-Oriented Planning in Multi-Agent Systems**
    - URL: https://arxiv.org/html/2410.02189v1
    - Relevance: Structural properties of planning artifacts in multi-agent systems; high-level decomposition before per-agent assignment.

---

## Structural Properties Found

- **Plan-and-Solve** emits an explicit plan (ordered list of subtasks) as its first output before any step is executed; the trigger sentence forces plan-generation before reasoning steps.
- **Skeleton-of-Thought** produces a full skeleton with all answer points listed (3-5 words each) before expanding any single point; the two stages are strictly sequential: skeleton → parallel expansion.
- **Least-to-Most Prompting** produces a complete ordered decomposition (all subproblems listed) before solving the first subproblem; the decomposition is a separate LLM call.
- **ReWOO** generates a complete dependency-annotated plan with variable placeholders (#E{N}) for all tool results before executing any tool; the plan encodes execution order and data dependencies upfront.
- **Tree of Thoughts** does NOT produce a full skeleton at intake; instead it explores branches incrementally — this is the structural contrast to wide-first methods.
- **Algorithm of Thoughts** generates 5 candidate plans before selecting and executing — a fan-out-then-select structure rather than a single wide skeleton.
- **DAG Plan & Execute** separates planner, executor, and replanner as distinct components; the replanner is a separate node triggered by execution events, not embedded in executor logic.
- Pre-trained LLMs have a depth ceiling of 3-7 latent planning steps; beyond this, reasoning must be externalized into explicit plan structures to remain reliable.
- Hierarchical planning systems use coarse global plans with local step-wise expansion — two levels of granularity that are explicitly separated.
- Plan mutation (replanning) is categorized as local (suffix correction) or global (full regeneration); intermediate-granularity insertion of discovered work is not structurally formalized in any reviewed system.

---

## Wide-First Findings

Strong evidence supports wide-first skeleton creation:

- **Skeleton-of-Thought** is the clearest instantiation: the model is explicitly prompted to produce "the skeleton of the answer" — all top-level points — before expanding any point. The skeleton is complete (covers all answer dimensions) before the expansion stage begins. This is a hard sequential gate: Stage 1 output (skeleton) feeds Stage 2 (parallel expansion). No expansion occurs during Stage 1.
- **Plan-and-Solve** and **Least-to-Most** both front-load the full decomposition. The plan/decomposition is the first output; execution begins only after the full task list exists.
- **ReWOO** creates the entire plan with all placeholders and dependency annotations before calling any tool. The plan structure includes every anticipated tool call; no execution begins before the plan is complete.
- **Algorithm of Thoughts** generates multiple candidate plans first, then selects one — a different wide-first variant where width comes from generating alternatives rather than breadth of coverage.

Minimum viable planning structure at intake (from evidence):
- All top-level work categories / answer dimensions named (even as 3-5 word placeholders)
- Order or dependency relationships encoded where known
- Variable/placeholder slots for results not yet available
- The intake skeleton does NOT require full sub-step expansion — that is a separate stage

The contrast case (Tree of Thoughts) builds breadth incrementally; this trades upfront orientation for flexibility. Evidence from practitioner reports shows incremental-breadth approaches lose coherence on long-horizon tasks.

---

## Depth-at-Phase-Entry Findings

Evidence for phase-entry expansion is implicit in Least-to-Most but not explicitly formalized in any reviewed paper as a separate mechanism:

- **Least-to-Most Prompting** expands each subproblem at the point of solving it, using all prior solutions as context. This is effectively "expand at entry": the solution to subproblem N is constructed only when the agent reaches N, using the accumulated context of N-1 prior solutions. This is the strongest structural analogue to "deep at phase entry."
- **Skeleton-of-Thought** inverts this: it expands all points in parallel simultaneously (not sequentially at entry). Phase entry expansion is NOT the Skeleton-of-Thought model — it uses batch parallel expansion.
- **HiPlan and coarse-to-fine hierarchical planning** implicitly implement phase-entry expansion: global plan is high-level; when execution reaches a phase, that phase is expanded into detailed local steps. This is the hierarchical planning community's answer to granularity trade-offs.
- The **DAG Plan & Execute** planner in LangGraph does not mandate phase expansion at entry — plans are generated in full upfront but may remain at high granularity throughout.
- No reviewed paper formalizes "phase must be fully expanded before that phase begins" as a hard gate. This is a design space gap — the mechanism exists implicitly in hierarchical approaches but is not stated as a rule.

Key implication: a "deep at phase entry" gate requires explicit enforcement; no existing framework automatically triggers full expansion before phase start.

---

## Adaptive Annotation Findings

This is the weakest area in the literature — no reviewed paper defines an explicit annotation format for plan mutations:

- **Practitioner replanning patterns** (LangGraph, Plan-and-Execute agents) support replanning as a first-class event — a "Replanner" node is triggered by CHECKPOINT, INTERRUPT, or RESUME signals — but the replanner generates a new plan; it does not annotate the old plan with a change rationale.
- **Code-as-Agent-Harness literature** describes "governed harness mutation" with auditable rationales and sandbox evaluation — the closest analog to adaptive annotation — but this applies to code mutation, not plan step mutation.
- **Chain-of-Thought mutation tracking**: some systems require a reasoning block justifying a proposed change before the change is emitted; this reasoning block becomes part of the generation trace. However, it is not attached as annotation to the plan artifact itself.
- **No reviewed system** embeds change rationale directly into plan structure as annotation. Changes are tracked in execution logs or generation traces, not in the plan document.
- The concept of "removed/changed because: [result]" as an in-plan annotation is not an established pattern in the literature — it is a design choice to be introduced, not adopted from evidence.

This gap strengthens the design case: existing systems lose the reason for plan changes in execution traces. An annotated plan artifact that carries mutation rationale inline is a structural improvement with no competing existing standard.

---

## Discovered Work Routing

How existing systems handle work discovered during execution:

- **DAG Plan & Execute (LangGraph)**: Replanner node receives the original goal, original plan, and the current result, then generates either "Response" (task complete) or a new plan. Discovered work is handled by GLOBAL replanning — the entire plan may be regenerated. No mechanism for inserting discovered work as a new step into the existing plan at the point of discovery.
- **Local replanning** (referenced in LLM-Assisted Plan Execution for Robots): spot-correction of suffix steps or subgoals when local failure occurs. Discovered work is handled as plan extension — remaining steps are re-evaluated but the completed steps are not touched.
- **ReWOO**: Does not handle discovered work mid-execution; plans once with placeholders. If placeholders are wrong, the integration (Solver) stage must compensate. No structural routing for unplanned discoveries.
- **Tree of Thoughts**: Most adaptive to discovered work — can backtrack and explore new branches. But this comes at the cost of the wide-first structure.
- **HiPlan**: global plan is updated adaptively; the global-local separation provides a routing point — discovered work at the local level can be escalated to the global plan level.

The structural gap: no reviewed system has an explicit "insert discovered work here" mechanism that preserves existing plan integrity. The dominant patterns are (a) ignore discoveries (ReWOO), (b) locally patch the suffix (local replanning), or (c) generate an entirely new plan (global replanning). A structural routing mechanism that inserts a discovered task as a new annotated step at the point of discovery — without discarding the rest of the plan — is not an established pattern.

---

## Key Findings

- Wide-first skeleton creation is well-supported by Skeleton-of-Thought, Plan-and-Solve, and ReWOO; the minimum skeleton is all top-level work categories named before any expansion.
- The sequence is consistently: (1) full skeleton/decomposition, (2) expansion/execution — the two stages are separated; no system expands while creating the skeleton.
- Least-to-Most is the closest analog to "deep at phase entry": it expands each subproblem using full accumulated prior context at the moment of solving it.
- Tree of Thoughts is the structural opposite of wide-first: it builds breadth incrementally. This is the performance contrast — ToT achieves 74% on Game of 24 where CoT achieves 4%, but requires many LLM calls and is not orientation-first.
- LLMs have a hard depth ceiling of 3-7 latent planning steps; explicit plan structures compensate by externalizing planning depth.
- No existing system embeds plan mutation rationale as inline annotation on the plan artifact. Change tracking happens in logs or generation traces, not in the plan document itself.
- Discovered work is handled by full replanning or local suffix patching — no insertion-at-discovery mechanism exists in reviewed literature.
- Hierarchical planning (coarse global + fine local) is the established solution to the granularity problem; this maps onto wide-at-intake + deep-at-phase-entry as two separate levels.
- ReWOO achieves 5x token efficiency over ReAct by separating planning from execution; cost evidence supports upfront planning as a practical architecture choice.
- Fixed granularity planning fails: "too coarse = insufficient effectiveness; too fine = reduced efficiency" is empirically documented.

---

## Design Implications

1. **Wide-at-intake is structurally grounded**: generate all phase headers and major work categories before any expansion begins. The minimum skeleton is top-level labels only — 3-5 words per point is sufficient at intake (Skeleton-of-Thought evidence).

2. **Two-stage gating is the correct model**: Stage 1 (full skeleton) and Stage 2 (expansion) must be separated by a hard gate — Stage 2 does not begin until Stage 1 is complete. Do not interleave creation of skeleton with expansion of any branch.

3. **Phase-entry expansion must be enforced as a rule**: it does not emerge from any existing mechanism; it must be specified as a hard precondition — "this phase may not begin until its section is fully expanded with sub-steps, done-criteria, and failure modes."

4. **Adaptive annotation is a novel design choice**: there is no literature standard to adopt. Design the annotation format from first principles; the closest analog is Chain-of-Thought reasoning blocks that precede changes.

5. **Discovered work routing needs a structural slot**: current literature defaults to full replanning; insert-in-place with annotation is the preferred alternative for accountability. The plan must have a structural mechanism (e.g., a "discovered work" section at each phase, or inline insertion with annotation) to route unexpected tasks without discarding the existing plan.

6. **Depth ceiling evidence strengthens the case for explicit plans**: LLMs cannot reliably hold more than 3-7 planning steps latently; any task with more phases than this requires an explicit external plan structure to remain coherent.

7. **Hierarchical granularity is the right model for coarse-to-fine**: encode global phases at intake (wide, coarse), expand each phase at entry (deep, fine). This matches the HiPlan/coarse-to-fine evidence and addresses the known fixed-granularity failure mode.

8. **Replanning architecture should be a separate node**: do not embed replanning logic in the executor. A dedicated replanner that receives (original goal, current plan, current result) and can issue targeted amendments is the structurally sound pattern from DAG Plan & Execute evidence.

---

## Saturation Signal

NO — one additional angle would be valuable: production agent frameworks (AutoGPT, BabyAGI, OpenDevin, SWE-agent) that have documented multi-phase planning artifacts in their actual implementations. Academic papers describe the methods; practitioner frameworks encode the tradeoffs in real plan schemas. The mutation annotation and discovered-work routing gaps specifically would benefit from examining what production systems actually store in their plan objects, not just what papers propose.
