# KIT-PLAN-01 Research — A8: Adversarial — when planning hurts
Date: 2026-07-04

## Sources Found

1. **"Learning When to Plan: Efficiently Allocating Test-Time Compute for LLM Agents"** (arxiv 2509.03581, Sep 2025)
   - https://arxiv.org/abs/2509.03581
   - Most directly relevant: empirically establishes a "Goldilocks" effect where intermediate planning frequency outperforms always-plan and never-plan strategies. First paper to train agents for dynamic compute allocation in sequential decision-making.

2. **"Do Agents Need to Plan Step-by-Step? Rethinking Planning Horizon in Data-Centric Tool Calling"** (arxiv 2605.08477, CAIS 2026)
   - https://arxiv.org/abs/2605.08477
   - Shows full-horizon planning matches or beats single-step planning on data-centric tasks while using 2-3x fewer tokens — challenges the default assumption that step-by-step is safer.

3. **"Plan-Then-Execute: An Empirical Study of User Trust and Team Performance When Using LLM Agents As A Daily Assistant"** (arxiv 2502.01390)
   - https://arxiv.org/pdf/2502.01390
   - User-facing evidence: full plan-then-execute control is NOT desirable for simple tasks (e.g., setting alarms). Overhead exceeds benefit when interaction cost > task execution cost.

4. **"Why Do LLM-based Web Agents Fail? A Hierarchical Planning Perspective"** (arxiv 2603.14248)
   - https://arxiv.org/pdf/2603.14248
   - Identifies hierarchy rigidity: incorrect high-level choice causes cascading wasted effort on flawed sub-plans. Success rates plummet on difficult chained tasks (drops to 0% for chained tasks).

5. **"Exploring Autonomous Agents: A Closer Look at Why They Fail When Completing Tasks"** (arxiv 2508.13143)
   - https://arxiv.org/html/2508.13143v1
   - Failure taxonomy including execution failures misattributed to planning. Provides typology of plan-execution mismatch.

6. **"Beyond Entangled Planning: Task-Decoupled Planning for Long-Horizon Agents"** (arxiv 2601.07577)
   - https://arxiv.org/pdf/2601.07577
   - Argues that tightly coupled plan-execution entanglement prevents adaptation; proposes task-decoupled planning as structural fix.

7. **"From Static to Dynamic: 5 Planning Approaches for LLM Agents"** (Shivam Bhagwani, Medium)
   - https://sbhagwani.medium.com/from-static-to-dynamic-5-planning-approaches-for-llm-agents-5314fb68854a
   - Practitioner overview of planning spectrum; identifies simple/predictable tasks as the explicit domain where upfront full-sequence planning is best.

8. **"The Illusion of Diminishing Returns: Measuring Long Horizon Execution in LLMs"** (arxiv 2509.09677)
   - https://arxiv.org/html/2509.09677v3
   - Shows depth and breadth of execution graphs are overlooked complexity axes; performance degradation is not just a function of sequential length.

9. **"ReAct vs Plan-and-Execute: The Architecture Behind Modern AI Agents"** (Louis Bouchard, Substack)
   - https://louisbouchard.substack.com/p/react-vs-plan-and-execute-the-architecture
   - Comparative architectural analysis: Plan-Execute more token-efficient for long predictable tasks, worse when environment changes mid-task.

10. **"Routine: A Structural Planning Framework for LLM Agent System in Enterprise"** (arxiv 2507.14447)
    - https://arxiv.org/pdf/2507.14447
    - Identifies unstructured/semi-structured natural language plans as a source of rigidity: ambiguity during execution and inability to do static validation.

11. **"Agent Planning Benchmark: A Diagnostic Framework for Planning Capabilities in LLM Agents"** (arxiv 2606.04874)
    - https://arxiv.org/html/2606.04874v1
    - Diagnostic framework. Treats plan correctness as a strict success indicator; useful for understanding where plan-then-execute failure modes concentrate.

---

## Structural Properties Found

Properties of planning artifacts that empirically create problems:

1. **Full upfront commitment before any execution feedback.** When the entire plan is locked before a single tool call, the agent cannot incorporate intermediate observations without triggering a full replan (expensive) or silently ignoring the deviation (dangerous). Source: ReAct vs Plan-and-Execute architectural analysis; "Beyond Entangled Planning."

2. **Unstructured / natural-language plan bodies.** Plans written as prose introduce execution-time ambiguity and cannot be statically validated. There is no machine-checkable postcondition, so failures are detected late. Source: "Routine" paper (arxiv 2507.14447).

3. **Hierarchical plans where high-level nodes are overspecified.** Incorrect choice at a high level causes all refinements below it to be wasted. The problem is not hierarchy itself but over-specification at the top level before lower-level facts are known. Source: "Why Do LLM-based Web Agents Fail? A Hierarchical Planning Perspective."

4. **Fine-grained step granularity applied uniformly.** Treating every action as an explicit planned step adds overhead that exceeds benefit for well-defined data-centric tasks. Full-horizon planning (one upfront pass, lazy replanning) achieves parity with 2-3x less token cost. Source: "Do Agents Need to Plan Step-by-Step?" (CAIS 2026).

5. **Static plan without a living-document update mechanism.** Plans that have no explicit mechanism for incremental update force a binary choice: ignore new information or do a costly full replan. Continual planning (living document pattern) avoids this. Source: ReAct vs Plan-and-Execute analysis.

6. **Entangled plan-execution coupling.** When the planner and executor share state tightly, an execution surprise requires re-entangling with the planner rather than handling locally. Task-decoupled planning isolates these concerns. Source: "Beyond Entangled Planning" (arxiv 2601.07577).

---

## When Planning Hurts

**Task types where planning overhead exceeds benefit:**

- **Simple, single-step or few-step tasks** (e.g., setting an alarm, a single lookup, a direct calculation). When interaction/planning cost exceeds task execution cost, users abandon the system. Explicit finding in 2502.01390.
- **Well-defined data-centric tool-calling tasks.** Step-by-step planning is unnecessary overhead; full-horizon planning with lazy replanning achieves the same accuracy at 2-3x lower token cost. Source: CAIS 2026 paper.
- **Tasks with high environmental dynamism.** When the environment changes during execution, upfront plans become liabilities because replanning cost eats into the efficiency gain the plan was supposed to provide.
- **Tasks where execution failures are frequent.** When each step has a high probability of needing adaptation, the overhead of maintaining plan state and triggering replanning exceeds the benefit of having a plan.
- **Long-horizon tasks where "always planning" is the strategy.** Planning before EVERY action in a long-horizon task degrades performance. The Goldilocks finding (arxiv 2509.03581) shows intermediate frequency is superior to always-plan.

**Conditions that flip the calculus:**
- Short task, predictable environment → skip upfront planning or use minimal skeleton only
- Long task, unpredictable environment → plan but treat as living document (not locked artifact)
- Long task, predictable/data-centric environment → full-horizon single pass + lazy replan on failure

---

## Planning Overhead Threshold

**Empirical data found:**

1. **Goldilocks effect** (arxiv 2509.03581, Crafter environment): Neither always-plan nor never-plan is optimal. An intermediate planning frequency trained via RL consistently outperforms both extremes across complexity levels. No single universal threshold is reported; the optimal frequency is task-dependent and learnable.

2. **2-3x token overhead for step-by-step vs. full-horizon planning** (CAIS 2026, KBQA and Multi-hop QA tasks): Single-step interleaved planning uses 2-3x more tokens than full-horizon planning for the same accuracy on data-centric tasks. This is the clearest quantified overhead number in the literature.

3. **User willingness threshold** (arxiv 2502.01390): For daily-assistant tasks, users reject plan-then-execute control when the effort to control/interact with the agent exceeds the effort to do the task directly. No precise step count is given; it is a subjective UX threshold, not a computational one.

4. **Success rate collapse on complex chained tasks**: Performance drops to 0% success on "chained" difficult tasks with rigid plans (arxiv 2508.13143, 2603.14248). This suggests planning rigidity compounds with task complexity rather than adding flat overhead.

5. **Depth and breadth matter independently**: Execution-graph complexity has two overlooked axes — depth (sequential length) and breadth (parallelism/branching). Performance degrades differently along each axis (arxiv 2509.09677). A plan that handles sequential depth but not breadth will fail on broad parallel tasks despite appearing "complex enough" to warrant planning.

---

## Structures That Reduce Adaptability

Specific planning artifact properties that make adaptation harder:

| Property | Mechanism of harm |
|---|---|
| Locked action sequence before execution | No path for mid-plan learning without full replan |
| Natural-language step descriptions | Ambiguous at execution time; no static checkability |
| Overspecified high-level nodes | Cascading waste if top-level assumption fails |
| Uniform fine-grained step granularity | Overhead regardless of step complexity; cannot skip trivial steps |
| No postcondition per step | Failures detected only at task end, not at step boundary |
| Monolithic plan object (no modular sub-plans) | One error invalidates the whole plan; no partial recovery |
| Entangled planner-executor state | Surprises require planner re-entry; no local executor adaptation |
| Plan length proportional to task complexity (always) | Simple steps get the same planning overhead as hard ones |

---

## Key Findings

- **The Goldilocks finding is the central result**: always-planning and never-planning are both suboptimal. The optimal planning frequency is task-dependent and empirically learnable. No universal threshold exists, but it can be trained.
- **For data-centric/tool-calling tasks, full-horizon + lazy replan beats interleaved step-by-step at 2-3x lower token cost.** The default assumption that step-wise monitoring is safer is empirically wrong for this task class.
- **Simple tasks have a user-willingness threshold**: when agent interaction overhead exceeds task execution effort, users abandon the system. Planning imposes interaction cost even when users don't see it (token cost, latency).
- **Hierarchy rigidity multiplies failure**: a wrong top-level choice wastes all downstream effort. Overspecification at high levels is a structural amplifier of error, not just a planning overhead.
- **Plan-as-locked-artifact is the primary rigidity cause**: treating the plan as a commitment rather than a living document forces a binary update/ignore choice. Living-document and lazy-replan patterns resolve this structurally.
- **Natural-language plan bodies are technically fragile**: ambiguity enters at execution time; failures cannot be caught at plan-generation time. Structured plan representations (with postconditions) catch failures earlier.
- **Execution failures are systematically misattributed to planning**: the literature notes that plan failures are often actually execution failures. This means planning improvements have diminishing returns if execution robustness is the real bottleneck.
- **Depth and breadth of task graphs are independent complexity dimensions**: a wide-at-intake skeleton plan handles depth well but may not structure breadth. Both axes need explicit handling.

---

## Design Implications

For the kit-maker wide-at-intake skeleton plan that expands at phase entry:

1. **Shorten or skip the skeleton for single-phase / obviously-bounded tasks.** The empirical Goldilocks finding confirms that planning overhead is not paid back on simple tasks. Build an explicit task-complexity gate before skeleton generation. Gate criterion: estimated phase count ≤ 2 → skip skeleton, run direct.

2. **Full-horizon skeleton + lazy phase expansion is the correct default for multi-phase tasks.** The CAIS 2026 paper validates this pattern directly: generate the full horizon once, expand lazily only when a phase is entered, replan only on failure. Do NOT interleave skeleton revision with execution unless a phase fails.

3. **Treat phase entries as postcondition checkpoints, not just progression gates.** Each phase entry is the point to verify that the prior phase's output matches what the current phase's plan assumed. If not → local replan of current phase only, not full skeleton revision.

4. **Limit skeleton node overspecification.** High-level skeleton nodes should name the *outcome* of a phase, not its *method*. Method overspecification at phase-0 planning causes cascading waste when a chosen method fails inside a phase. Outcome-anchored skeletons stay valid longer.

5. **Make the plan a living document structurally.** The skeleton file should have an explicit "current state" field per node, updated at phase entry/exit. This enables partial recovery (skip replanning phases already validated) and avoids full-replan cost.

6. **Natural language phase descriptions should be supplemented with a machine-checkable postcondition per phase.** Even one binary check per phase dramatically advances the failure-detection boundary from task-end to phase-boundary.

7. **Breadth is a separate complexity axis from depth.** The skeleton should distinguish sequential phases (depth) from parallel sub-tasks within a phase (breadth). Current wide-at-intake framing handles depth; breadth within a phase should have its own lightweight structure, or it will be treated as sequential and fail silently on parallel work.

8. **Build a complexity classifier to gate planning level.** The "Learning When to Plan" paper shows this is a trainable behavior. For kit-maker, a simpler heuristic is sufficient: task type (data-centric → full-horizon, exploratory/dynamic → interleaved), estimated tool calls (< 5 → skip skeleton), environment predictability (dynamic → living document, static → locked upfront).
