# KIT-PLAN-01 Synthesis — Agent Planning Mechanism
Date: 2026-07-04
Sources: A1–A8 (kit-planning-a1-2026-07-04.md through kit-planning-a8-2026-07-04.md)

---

## 1. CONVERGED STRUCTURAL PROPERTIES

### P1 — Wide-at-intake: full phase skeleton before any execution begins
**Angles:** A1, A2, A3, A5, A6, A7 (6 of 8 angles)
**Confidence:** HIGH
**Evidence summary:**
- A1: LangGraph PlanExecute requires `plan: List[str]` as a populated state field before any executor node fires. MetaGPT requires all upstream artifacts (PRD → Architecture → Task List) before downstream execution. CrewAI with planning=True generates the full roadmap before kickoff.
- A2: Skeleton-of-Thought produces all top-level points before expanding any. ReWOO generates the entire plan with all placeholders before calling any tool. Plan-and-Solve emits the complete ordered task list before any reasoning step.
- A3: Classical HTN planners (SHOP2) fully decompose the task network before any primitive action executes. HiPlan's global milestone library creates an abstract roadmap (all milestones named) before any local expansion.
- A5: MatrixCoT builds a full dependency matrix at initialization. Governance literature requires an "original proposal" as an immutable anchor before execution.
- A6: Devin 2.0's interactive planning feature — introduced specifically to fix v1's black-box failure — shows the full plan skeleton before execution. Agentless defines all three phases before any LLM execution call. SWE-agent specifies all four phases in the system prompt upfront.
- A7: Plan-then-execute is the dominant practitioner pattern across all surveyed frameworks. addyosmani/agent-skills and APM both produce complete plan documents before implementation begins.
**Minimum required at intake:** all phases named (even as stubs), rough ordering, original goal statement anchored as immutable reference.

### P2 — Two-stage planning: coarse skeleton then phase expansion
**Angles:** A1, A2, A3, A4, A6, A7 (6 of 8 angles)
**Confidence:** HIGH
**Evidence summary:**
- A1: TaskWeaver's init_plan (rough decomposition) → plan (refined with merged sequential steps) is the most explicit two-stage implementation found. The two stages are structurally separated.
- A2: Skeleton-of-Thought is the clearest instantiation: Stage 1 (full skeleton) and Stage 2 (expansion) are strictly sequential — no expansion occurs during Stage 1. Hierarchical planning literature (HiPlan, coarse-to-fine) explicitly separates global coarse plan from local fine expansion.
- A3: HTN compound task decomposition requires selecting a method and verifying its preconditions before any subtask executes. The compound-to-primitive decomposition IS the phase expansion step.
- A4: TDP's Supervisor dispatches a scoped sub-task to a Planner-Executor pair, which plans and acts within that scope only. The dispatch is the phase expansion event.
- A6: Agentless hierarchical localization (file → class/function → edit location) must fully complete before the patch phase begins. coding-aider's subplan mechanism allows recursive expansion of a phase into its own checklist.
- A7: SoT pattern produces wide shallow structure then expands each node independently. APM's Planner produces three pre-implementation documents before any execution.
**Key implication:** The skeleton stage and the expansion stage must be separated by a hard gate. Expansion does not begin during skeleton creation; skeleton phases remain TBD until that phase is entered.

### P3 — Plan as external persistent artifact (not held in agent context)
**Angles:** A3, A5, A6, A7 (4 of 8 angles)
**Confidence:** HIGH
**Evidence summary:**
- A3: PDDL domain model and problem file must exist as formal external specifications before any classical planner executes.
- A5: Silent plan mutation (LLM overwrites its plan in context without annotation) is named as the primary accountability failure mode; external immutable records prevent this.
- A6: coding-aider's three-file structure (goal doc + checklist + context.yaml) persists across sessions. OpenHands' append-only event stream is the sole external state representation.
- A7: Across all practitioner implementations, plans are stored as external markdown files outside any agent context window. "The plan is checked, not noticed" is enabled by external storage. Inside the Scaffold survey of 13 real coding agents finds that explicit planning artifacts are ABSENT — the failure case is confirmed.
**Key implication:** Plan state must live in a file on disk, not in the agent's reasoning chain. This makes the plan checkable from outside the agent and prevents context-pressure-driven silent mutation.

### P4 — Adaptive annotation is universally absent and is the primary design gap
**Angles:** A1, A2, A3, A4, A5, A6, A7 (7 of 8 angles)
**Confidence:** HIGH (convergent null finding across all angles)
**Evidence summary:**
All 7 independent research angles independently found: no surveyed framework implements explicit "changed because: [reason]" annotation on plan mutations. The finding is convergent across academic literature (A1–A5), production code agents (A6), and practitioner implementations (A7).
- A1: "Plan-mutation annotation is not implemented anywhere and is the primary mechanism for distinguishing adaptation from abandonment."
- A2: "Change tracking happens in logs or generation traces, not in the plan document itself."
- A3: "Adaptive annotation is NOT enforced in any surveyed system. It must be designed explicitly."
- A4: "Plan annotation is absent from all studied systems. The closest analog is LATS's verbal self-reflection stored in memory — but it is retrospective and separated from the plan artifact."
- A5: Identifies silent plan rewriting as the primary accountability failure mode. Confirms no system currently prevents this structurally.
- A6: "No existing system requires explicit changed-because annotation. Our design would be introducing a novel constraint not present in any of the studied systems."
- A7: "Accountability annotation for plan changes is ABSENT from all practitioner implementations found."
**Design implication:** This is not a gap to fill by adopting a standard — there is no standard. Annotation format must be designed from first principles. The gap's universality strengthens the case: the failure mode is real and documented (scope abandonment, false completion), and the fix is absent from all current systems.

### P5 — Discovered-work routing is structurally absent from all frameworks
**Angles:** A1, A2, A3, A4, A5, A6, A7 (7 of 8 angles)
**Confidence:** HIGH (convergent null finding)
**Evidence summary:**
No framework provides a structural named slot for work discovered during execution. All systems route discovered work either through the replanning mechanism (implicit) or abandon it (silent).
- Most formal routing found: SGH (plan versioning) and TDP (DAG scope confinement) — but neither creates a named discovered-work artifact.
- BabyAGI's task-creation agent (A4, A7) is the closest: a dedicated agent generates follow-up tasks after each execution step, adding them to the prioritized queue. However, no origin metadata is attached.
- A4's routing fidelity ranking: SGH > TDP > BabyAGI > LangGraph > LATS/ReAcTree (least formal).
**Design implication:** A structural `discovered_work_queue` field per phase is a novel requirement with no existing implementation to inherit. It prevents silent injection of scope by requiring discovered tasks to be named, attributed (discovered during: [phase X] from: [result]), and triaged.

### P6 — Structural enforcement reliably beats instructional/behavioral enforcement
**Angles:** A3, A4, A5, A6, A7 (5 of 8 angles)
**Confidence:** HIGH
**Evidence summary:**
- A6 (strongest empirical evidence): Plan compliance drops 13% on harder tasks in SWE-agent, which uses instructional enforcement. AutoCodeRover and Agentless use phase-gated tool access (structural) and do not exhibit this degradation.
- A3: Precondition verification must be structural (a gate before execution), not advisory. Systems relying on LLM self-monitoring of preconditions have documented hallucination failures.
- A4: SGH's plan immutability prevents silent mutation structurally. TDP's DAG boundary prevents scope explosion structurally. Both outperform behavioral rules.
- A5: Planner-auditor decoupling is the only pattern found that enforces "change requires justification" without relying on agent self-monitoring.
- A7: External plan files (not in-context) are the structural mechanism that makes "plan is checked, not noticed" true.
**Key implication:** Any rule that requires the agent to recognize a condition before firing will fail under execution pressure. Replace recognition-dependent rules with structural gates (phase state transitions, tool access grants, required field completeness checks).

### P7 — Planning overhead has an empirical threshold below which it is net-negative
**Angles:** A8 (primary), A2, A7 (supporting)
**Confidence:** HIGH for A8's evidence; the threshold value is MEDIUM
**Evidence summary:**
- A8: Goldilocks finding (arxiv 2509.03581) — always-plan and never-plan are both suboptimal. 2-3x token overhead for step-by-step vs. full-horizon planning on data-centric tasks. User abandonment threshold documented for simple tasks.
- A2: Fixed granularity planning fails — "too coarse = insufficient effectiveness; too fine = reduced efficiency" is empirically documented.
- A7: ADaPT (just-in-time decomposition) is the practitioner counterpattern, deliberately used when planning overhead exceeds benefit.
**Design implication:** Build an explicit task-complexity gate before skeleton generation. See Section 7 for full threshold specification.

### P8 — Global skeleton must remain visible throughout execution (not collapsed after phases begin)
**Angles:** A2, A3, A6 (3 of 8 angles)
**Confidence:** HIGH
**Evidence summary:**
- A3: "Presenting the full hierarchical plan to the actor significantly outperforms using only the last, most detailed level." Skeleton is not just a planning artifact — it actively improves execution quality.
- A2: Hierarchical planning systems keep the global plan (coarse) visible alongside the current-level detail simultaneously.
- A6: Periodic plan reminders (re-injecting the plan into context at checkpoints) measurably improve compliance on long trajectories. Context pressure is the primary mechanism by which plans fail.
**Design implication:** The plan file must be re-exposed to the agent at each phase boundary. Do not collapse phase entries once a phase is executing.

---

## 2. WIDE-SHALLOW SKELETON SPEC

Required fields for the intake skeleton. All fields must be populated before any phase execution begins. Sub-steps, done-criteria, and failure-modes start as TBD stubs — their TBD status is valid at skeleton creation and invalid at phase entry.

**Top-level skeleton fields:**

```
skeleton:
  goal_statement: <immutable one-sentence original objective — never mutated>
  plan_version: v1
  created_at: <timestamp>
  skeleton_complete: false  # set to true before any phase begins; gating field
  complexity_class: TRIVIAL | STANDARD | LARGE  # see Section 7

phases: <ordered list>
  - id: <unique string, e.g. P1>
    name: <short phase name>
    outcome: <one sentence — what this phase produces/achieves — outcome anchor, not method>
    status: PENDING | EXPANDING | EXECUTING | COMPLETE | BLOCKED
    dependencies: [<phase_id>, ...]  # which phases must be COMPLETE before this can begin
    entry_preconditions: TBD  # list of checkable conditions; filled at phase entry
    sub_steps: TBD            # enumerated ordered steps; filled at phase entry
    done_criteria: TBD        # binary-checkable exit condition; filled at phase entry
    failure_modes: TBD        # anticipated failure paths and routing; filled at phase entry
    tool_access_grant: TBD    # which tools are permitted in this phase; filled at phase entry
    postcondition_check: TBD  # at least one binary machine-checkable assertion; filled at phase entry
    discovered_work: []       # empty queue at skeleton creation; filled during execution

plan_mutations: []            # append-only list of change records; see Section 4
```

**Evidence basis:**
- LangGraph's `plan: List[str]` establishes the minimum (ordered list of phase strings) (A1)
- MetaGPT's typed artifact schemas establish the need for named fields per phase (A1)
- coding-aider's three-file structure establishes external persistence requirement (A6, A7)
- Outcome-anchor (not method) at phase level: A8 finding on cascade failure from overspecification
- Postcondition per phase: A8 finding that structured postconditions catch failures at phase boundary, not task end
- Immutable goal_statement: A5 finding that goal shift is abandonment, not replanning; semantic equivalence must be checkable
- Empty discovered_work queue: A4 design implication, TDP scope confinement pattern

**Minimum viable at intake (what must be non-TBD):**
- goal_statement (immutable)
- All phase names and outcomes (even single-sentence stubs)
- Rough dependency order between phases
- status = PENDING for all phases
- complexity_class declared

---

## 3. PHASE EXPANSION PROTOCOL SPEC

A phase moves from PENDING to EXPANDING when the agent begins working on it. A phase moves from EXPANDING to EXECUTING only when ALL of the following fields have been populated (changed from TBD to concrete values). This is a structural gate — the executor cannot begin a phase whose expansion fields remain TBD.

**Required before EXPANDING → EXECUTING transition:**

1. **entry_preconditions**: explicitly listed checkable conditions verified against current global state. Not "assumed to be met" — checked. If a precondition fails: route to blocked status and trigger discovered-work handling before proceeding.

2. **sub_steps**: enumerated ordered list of concrete actions, each with:
   - action description (concrete, not "do the thing")
   - output artifact (what does this step produce)
   - verification method (how will the agent know this step is done)

3. **done_criteria**: binary-checkable statement of the phase's exit condition. Must be testable against observable global state, not isolated step success ("does the global state satisfy X" not "did step 3 succeed").

4. **failure_modes**: at least 2 anticipated failure paths, each with:
   - failure description (what goes wrong)
   - routing decision (abort phase / route to discovered-work / escalate to plan version event)

5. **tool_access_grant**: explicit list of tools permitted within this phase. Tools not in this list are unavailable to the executor for this phase. This enforces phase boundaries structurally, not instructionally. (Evidence: AutoCodeRover/Agentless phase-gated tool access — A6; structural vs. instructional enforcement — A3, A4, A6)

6. **postcondition_check**: at minimum one machine-checkable binary assertion that verifies the done_criteria was actually met (not just claimed met). Even a single binary check dramatically advances failure detection from task-end to phase-boundary. (A8 evidence)

**Evidence basis:**
- A3: "Phase must be fully expanded before phase execution begins = HTN compound task decomposition precondition. Running a partially-specified phase = executing an undecomposed compound task = undefined behavior."
- A4: "Phase node must emit its full expansion before the executor picks up the first sub-step. Implement as a required state transition (PENDING → EXPANDING → EXECUTING), not as an instruction to the agent."
- A6: "Phase expansion documents should be generated and recorded as artifacts before that phase's execution begins."
- A3: "Completion criteria must be per-phase, verified against global state — not 'did this step succeed' but 'does the global state satisfy the phase's exit criteria.'"
- A8: "Each phase entry is the point to verify that the prior phase's output matches what the current phase's plan assumed."

**Phase state machine:**
```
PENDING → EXPANDING (agent begins expansion work)
EXPANDING → EXECUTING (all 6 required fields populated — structural gate)
EXECUTING → COMPLETE (done_criteria verified by postcondition_check)
EXECUTING → BLOCKED (precondition failed mid-phase; discovered-work routing triggered)
Any state → version event (if phase must be restructured; triggers plan_mutations entry)
```

---

## 4. ADAPTIVE ANNOTATION FORMAT

Every entry in `plan_mutations[]` is a change record. A change record is created whenever:
- A phase is added, removed, or reordered
- A sub_step is added, removed, or reordered within a phase
- A done_criteria is changed
- A phase's outcome anchor is changed
- A discovered_work item is added or closed

**Required fields — all 7 are mandatory; a mutation record missing any field is structurally invalid:**

```
mutation_record:
  mutation_id: <unique string>
  mutation_type: ADDITION | REMOVAL | REORDER | RESTRUCTURE | GOAL_REINTERPRETATION
  affected_items: [<phase_id or step_id>, ...]
  trigger_evidence: <explicit reference to the specific result/observation that necessitated this change>
    # Must point to a concrete artifact: tool output, test result, observation, user correction.
    # "It seemed necessary" is not a valid trigger_evidence value.
  prior_plan_version: <plan_version identifier of the version being superseded>
  what_changed: <precise diff: what was removed/added/restructured in human-readable form>
  semantic_equivalence: <boolean + one-sentence justification: does revised plan still address the original goal_statement?>
  goal_unchanged: <boolean>
    # If false: this is not a plan mutation — it requires user authorization.
    # A goal change without user authorization is scope abandonment, not replanning.
  timestamp: <ISO timestamp>
```

**Omission vs. defect distinction (from A5/MatrixCoT):** The `mutation_type` field distinguishes:
- ADDITION: new step required by execution results (omission — something not originally anticipated)
- REMOVAL: a step was wrong or is no longer needed (defect — something that shouldn't have been planned)
These are different event types and warrant different downstream responses.

**Evidence basis:**
- A5 (Reflexion synthesis): required annotation format: task + failure block + trajectory + prior plan version → revised plan. The four fields are the minimum for causal linkage.
- A5: "Planner-auditor decoupling is the only pattern found that enforces 'change requires justification' at runtime without self-monitoring."
- A5: "Goal_unchanged = false requires user authorization, not a plan revision. Semantic equivalence is the structural discriminator between legitimate replanning and scope abandonment."
- A5: "Versioned plan history outperforms mutable plan history for debugging; the version identifier is the minimal unit of accountability."
- A6: "Plan mutation events should be a first-class event type with a required rationale field. Without this, legitimate evolution is indistinguishable from scope abandonment."
- A4: "Embed the reason for plan changes at the point of change. No system does this — it is a design gap."

---

## 5. DISCOVERED-WORK ROUTING MECHANISM

**Design decision: two-tier routing (current-phase queue + phase backlog)**

When work is discovered during execution of phase N, it is routed to one of three destinations:

**Tier 1 — Current-phase queue:** Work that belongs in phase N (a missed sub-step, an unanticipated dependency within the phase scope). Routed to `phases[N].discovered_work[]`. Phase N may not be marked COMPLETE until this queue is empty or explicitly closed with a rationale.

**Tier 2 — Phase backlog (downstream phase):** Work that belongs in a later phase. Routed to `phases[M].discovered_work[]` where M is the identified downstream phase. Propagates only if a dependency relationship between N and M exists or is declared. Following TDP's DAG scope confinement principle (A4): no dependency declaration = no propagation = no scope explosion.

**Tier 3 — New phase:** Work that does not fit any existing phase. Triggers a plan_mutations entry (ADDITION type) creating a new phase entry. This is a structural event requiring a mutation record — it cannot be done silently.

**Discovered work item record (appended to the routing destination queue):**

```
discovered_work_item:
  item_id: <unique string>
  description: <what was discovered>
  discovered_during: <phase_id>
  trigger: <what result produced this discovery — must reference a concrete observation>
  routed_to: <phase_id | NEW_PHASE>
  status: PENDING | ACTIVE | DEFERRED | DROPPED
  dropped_reason: <required if status = DROPPED>
```

**Why this mechanism, not full replanning:**
A4's routing fidelity ranking shows that replanner-rewrites-remaining-plan (LangGraph) has poor scope control: the replanner can add arbitrary steps with no scope gate. SGH's plan versioning (most formal) provides accountability but discards the original plan. TDP's DAG scope confinement is the structural template for the two-tier mechanism: discovered work in a phase propagates to downstream phases only via declared dependencies.

The `dropped_reason` field on DROPPED items is critical: any discovered work item that is not executed must carry an explicit rationale for its non-execution. Silently dropping discovered work is the structural equivalent of silent plan mutation.

**Evidence basis:**
- A4: TDP — "discovered work in phase N should propagate to downstream phases ONLY if there is a declared dependency"
- A4: SGH — "Discovered work forces a version boundary. Cannot be informally injected."
- A4: "An item that appears during phase N may belong in phase N+1 — it should not automatically execute in phase N."
- A7: BabyAGI's task-creation agent is the structural template — dedicated routing step after each execution, not ad-hoc injection.
- A6: "Discovered work should be routed through a formal DiscoveredWorkItem record appended to the plan, not handled ad-hoc."

---

## 6. DESIGN DECISIONS (with rejected alternatives)

### D1 — Wide-shallow skeleton required before any phase executes
**Decision:** Generate a complete phase skeleton (all phases named with outcome anchors, even as stubs) before any phase begins executing.
**Evidence:** A1 (LangGraph, MetaGPT, Routine), A2 (SoT, ReWOO, Plan-and-Solve), A3 (classical HTN, HiPlan), A6 (Devin, Agentless, SWE-agent), A7 (APM, addyosmani)
**Rejected alternative:** Just-in-time decomposition (ADaPT, BabyAGI, CAMEL patterns)
**Why rejected:** JIT decomposition decomposes reactively only when execution fails. A1 documents that JIT is appropriate for open-ended exploration domains (Voyager in Minecraft) where the full task space is unknown at intake. For a kit targeting defined tasks with known phases, JIT produces coherence loss on long-horizon tasks (A2 practitioner reports). A8 confirms: JIT is the right pattern for highly dynamic environments; closed-domain kit execution is not this case.
**Where alternative would win:** exploratory research with unknown scope; embodied environments where world state is unobservable upfront.

### D2 — Phase expansion must complete before phase execution begins
**Decision:** Phase cannot move EXPANDING → EXECUTING until all 6 required expansion fields are populated (see Section 3).
**Evidence:** A3 (HTN decomposition semantics, precondition gates), A4 (TDP dispatch as phase entry pattern), A6 (Agentless hierarchical completion gate, 13% compliance drop under instructional-only enforcement)
**Rejected alternative:** Expand during execution (interleaved planning — ReAct, Plan-and-Act continuous replanning)
**Why rejected:** A6 empirically documents 13% compliance drop when phase enforcement is instructional rather than structural. A3: partially-specified phase execution = undefined behavior (HTN compound task analogy). The project context (45 behavioral trigger failures) provides additional confirming evidence.
**Where alternative would win:** tasks where execution results cannot be anticipated at phase entry at all (highly exploratory). Plan-and-Act's continuous replanning achieves SOTA on WebArena (A1) — but this is a dynamic web environment, not a closed-domain kit.

### D3 — Structural enforcement (state machine + tool access grants) over instructional enforcement
**Decision:** Phase boundaries are enforced by required state transitions (PENDING → EXPANDING → EXECUTING) and tool access grants (tools unavailable outside their phase). Not by instructions to the agent.
**Evidence:** A6 (AutoCodeRover/Agentless phase-gated tool access; SWE-agent 13% compliance drop), A4 (SGH plan immutability, TDP DAG boundaries), A3 (precondition as structural gate), A5 (planner-auditor decoupling removes self-monitoring from accountability path)
**Rejected alternative:** Behavioral / instructional rules ("before entering any phase, you must...")
**Why rejected:** Project history has 45 documented failures of distributed behavioral triggers. A6 provides direct empirical confirmation: compliance drops under execution pressure when enforcement is instructional. The failure mode is not agent misbehavior — it is a reliable property of LLMs under execution pressure. Recognition-dependent rules fail consistently; structural gates do not require recognition.
**Where alternative would win:** prototyping or low-stakes contexts where the structural machinery overhead is not worth it. Instructional rules are cheaper to implement; they just fail on hard tasks.

### D4 — Inline plan mutation annotation (not external log)
**Decision:** Plan mutations are annotated inline in the plan file as append-only `plan_mutations[]` records with required fields. Not stored only in execution logs or generation traces.
**Evidence:** A5 (silent plan mutation is primary accountability failure mode; versioned plan history outperforms mutable), A6 (append-only event stream architecture), A4 (SGH version boundaries), A5 (planner-auditor decoupling)
**Rejected alternative:** External execution log (OpenHands event stream pattern)
**Why rejected:** A5: external logs can be abbreviated, lost, or reconstructed inaccurately by LLMs. Inline annotation in the plan artifact makes the rationale structurally visible to the next planning step — it becomes input to future planning, not just an audit artifact. A5: "Without external append-only logging, the original plan cannot be reconstructed" — but reconstructed logs are the failure mode, not the fix. The inline record is attached to the specific item that changed, making diff visible.
**Where alternative would win:** governance compliance scenarios where an external immutable log satisfies regulatory requirements (EU AI Act Article 12). The two approaches can coexist: inline annotation for planning coherence, external log for compliance.

### D5 — Two-tier discovered-work routing (local queue + phase backlog) over full replanning
**Decision:** Discovered work routes to a named structural slot (current-phase queue or downstream phase queue) rather than triggering full plan rewrite.
**Evidence:** A4 (TDP DAG scope confinement — 82% token reduction, SGH version versioning for structural changes), A7 (BabyAGI task-creation agent as structural template)
**Rejected alternative:** Replanner-rewrites-remaining-plan (LangGraph pattern — most common in production)
**Why rejected:** A4: replanner pattern has no scope gate — the replanner can add arbitrary steps, and the distinction between originally planned and discovered steps is lost. No metadata about why steps were added. A4: TDP's DAG scope confinement prevents the "one discovery triggers full replan" failure. The routing mechanism preserves original plan integrity while accommodating discovered work.
**Where alternative would win:** tasks where discovered work frequently invalidates large portions of the original plan (exploratory research, open-ended environments). For these, full replanning is cheaper than maintaining a partially-valid plan.

### D6 — Outcome-anchored phase nodes (not method-anchored)
**Decision:** The skeleton's phase `outcome` field specifies what the phase produces, not how it will be produced.
**Evidence:** A8 (hierarchy rigidity: incorrect high-level choice causes cascading wasted effort; outcome-anchored skeletons stay valid longer)
**Rejected alternative:** Method-anchored phase nodes (specify the approach at skeleton generation time)
**Why rejected:** A8: "Incorrect choice at a high level causes all refinements below it to be wasted. Method overspecification at phase-0 planning causes cascading waste when a chosen method fails inside a phase." The method belongs in the phase expansion (Section 3), not the skeleton. At skeleton time, the agent does not yet have the information to reliably select methods.
**Where alternative would win:** tasks where the method is fully constrained by requirements (e.g., "must use tool X, no alternatives"). When the method is known and fixed, specifying it upfront avoids ambiguity. Gate condition: method-anchor only when the method is non-negotiable and verifiable at intake.

---

## 7. PLANNING OVERHEAD BOUNDARY

**Source: A8 (primary), A2, A7 (supporting)**

### Empirical findings:
1. Goldilocks effect (A8, arxiv 2509.03581): always-planning and never-planning are both suboptimal. The optimal planning frequency is task-dependent. No universal threshold exists; the finding establishes that the threshold must be evaluated, not assumed.
2. 2-3x token overhead: step-by-step interleaved planning vs. full-horizon planning on data-centric tasks, same accuracy (A8, CAIS 2026). Step-by-step monitoring is not safer — it is more expensive with equal outcomes.
3. User willingness threshold (A8, arxiv 2502.01390): users abandon plan-then-execute control when agent interaction overhead exceeds task execution effort. For simple tasks (e.g., single lookups), planning is net-negative UX.
4. Hierarchy rigidity amplifier (A8, arxiv 2603.14248): performance drops to 0% success on chained difficult tasks with rigid upfront plans. Planning overhead compounds with task complexity in the wrong direction for rigid plans.

### Three-class gate (required in kit mechanism):

**Class TRIVIAL — skip skeleton, run direct:**
Conditions: phase count ≤ 2 AND tool calls ≤ 5 AND task type is single-domain lookup or direct execution
Action: Skip skeleton generation entirely. Execute directly. No plan_mutations required. No phase expansion required.
Evidence: A8 single-step/few-step finding; A2 data-centric task finding.

**Class STANDARD — full skeleton + lazy phase expansion:**
Conditions: phase count 3–5 AND predictable closed domain
Action: Generate complete skeleton before any phase begins. Expand each phase at entry. Replan only on phase failure, not preemptively.
Evidence: A8 full-horizon + lazy replan finding (CAIS 2026). A2 hierarchical granularity.

**Class LARGE — full skeleton + phase expansion + sub-agent delegation:**
Conditions: phase count > 5 OR exploratory/dynamic OR parallel-heavy (breadth > 3 concurrent sub-tasks)
Action: Generate complete skeleton. Delegate each phase to a sub-agent with its own scoped plan. Phase expansions run in sub-agent contexts. Parent skeleton tracks phase outcomes only.
Evidence: A8 breadth vs. depth as independent complexity axes. A6 context pressure as primary plan failure mechanism. A6: shorter context windows per phase as countermeasure.

### "Skip planning" condition (formal):
A task should skip the skeleton generation step when ALL of the following are true:
- The task can be fully specified in a single action sequence with no branching
- The expected number of distinct tool calls is ≤ 5
- Environment is static (no state changes between tool calls that would affect later tool calls)
- Failure recovery can be handled by direct retry without structural replanning

If any condition is false, use at minimum a TRIVIAL three-field skeleton (goal + phases[] + status).

### Overhead anti-patterns to avoid (from A8):
- Do not assign uniform fine-grained step granularity to all phases regardless of complexity
- Do not lock the plan before any execution feedback when the environment is dynamic
- Do not overspecify methods at the skeleton level (see D6)
- Do not plan before every action in a long-horizon task (plan at phase boundaries, not step boundaries)

---

## 8. FRESH-AGENT PREDICTIVENESS TEST

These are structural properties that a fresh agent given ONLY the A1–A8 research files (without this synthesis or any design document) would independently derive. They serve as verification that the design was predicted by the research, not retrospectively fitted.

### Predictable property 1: Plans must be externalized into files outside agent context
**Why a fresh agent would derive this:**
- A7 explicitly states: "Separation of planning from execution is the universally adopted practitioner pattern; plans are stored as external persistent files outside any agent context window — this is the structural mechanism that makes plans checkable."
- A5 independently documents: "Silent plan mutation (LLM overwrites its plan in context without annotation) is the primary accountability failure mode."
- A6 confirms: coding-aider, Agentless, Devin all store plans as external artifacts. Inside the Scaffold survey finds that the absence of explicit planning artifacts IS the failure mode.
A fresh agent reading these three angles would independently arrive at: "plans must be external files, not held in context."

### Predictable property 2: Adaptive annotation is absent from all current frameworks and is the most important gap to fill
**Why a fresh agent would derive this:**
Seven independent angles (A1, A2, A3, A4, A5, A6, A7) all independently report: no existing framework has explicit plan-mutation annotation. The convergent null finding is striking — the failure mode (scope abandonment, false completion) is documented across multiple papers, yet no implementation addresses it. A fresh agent reading all 7 angles would independently notice: "every angle looked for this, every angle found it absent, and several angles independently propose it as the highest-priority design gap." The convergence is not inferential — it is the most repeated explicit finding across the research set.

### Predictable property 3: Structural enforcement (state machine + tool access) beats behavioral rules
**Why a fresh agent would derive this:**
- A6 provides direct empirical evidence: 13% compliance drop under execution pressure for instructional enforcement. AutoCodeRover/Agentless use structural tool-access restriction and do not show this degradation.
- A3 provides the theoretical framing: HTN preconditions are structural gates, not advisory notes. Running a phase without its preconditions verified = executing an undecomposed compound task = undefined behavior.
- A4 provides the mechanism design: SGH plan immutability and TDP DAG boundaries prevent scope explosion structurally.
A fresh agent would synthesize these three independently and arrive at: "the solution to behavioral trigger failure is structural gating, not better behavioral rules."

### Predictable property 4: Wide-at-intake skeleton generation is not optional but not sufficient
**Why a fresh agent would derive this:**
- A2 explicitly states: "LLMs have a hard depth ceiling of 3-7 latent planning steps; explicit plan structures compensate by externalizing planning depth."
- A3: "Presenting the full hierarchical plan to the actor significantly outperforms using only the last, most detailed level."
- A8 tempers this: planning overhead exceeds benefit for simple tasks; the skeleton is necessary for complex tasks but not universal.
A fresh agent reading these would derive: wide-first is necessary for multi-phase tasks but must be gated on task complexity.

---

## SYNTHESIS NOTES: What the research does not resolve

The following design questions were not settled by A1–A8 and require separate investigation or design decisions:

1. **Optimal plan versioning granularity**: Should every sub-step mutation trigger a version, or only phase-level mutations? A5 argues for version-per-mutation; A8's token overhead findings suggest this may be too expensive. No empirical study was found comparing granularities.

2. **How to enforce semantic equivalence at the implementation level**: A5 proposes a semantic-equivalence check (does revised plan still address original goal?) but no implementation was found. The check is currently LLM-judgment-dependent, which makes it susceptible to the same self-monitoring failures the design is trying to eliminate.

3. **Precise tool-access grant specification**: A6 documents that tool-gated phases work in AutoCodeRover and Agentless, but the exact mechanism for declaring tool grants in a kit-maker context was not found. The structural design is clear; the implementation detail requires a Phase 5/6 decision.

4. **Sub-agent boundary for LARGE tasks**: The research supports sub-agent delegation for complex phases (A6, context pressure) but does not specify the handoff protocol. How does the parent plan receive phase completion evidence from a sub-agent without context contamination?
