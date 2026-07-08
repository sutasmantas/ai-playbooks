# KIT-PLAN-01 Research — A5: Adaptive replanning with accountability
Date: 2026-07-04

## Sources Found

1. **Reflexion: An Autonomous Agent with Dynamic Memory and Self-Reflection** (Shinn et al., 2024)
   - URL: https://www.semanticscholar.org/paper/Reflexion:-an-autonomous-agent-with-dynamic-memory-Shinn-Labash/46299fee72ca833337b3882ae1d8316f44b32b3c
   - Relevance: Foundational paper on post-failure self-reflection; defines the plan change annotation structure as "task + failure identification + trajectory scenario + previous plans" — explicit format for why a plan changed.

2. **Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks** (SqueezeAILab, ICML 2025)
   - URL: https://arxiv.org/abs/2503.09572
   - Relevance: Defines dynamic replanning as Planner re-runs after EACH executor step with prior plan + action + observation as inputs — separates "planning state" from "execution state" structurally.

3. **Matrix as Plan: Structured Logical Reasoning with Feedback-Driven Replanning** (ACM WWW 2026)
   - URL: https://arxiv.org/abs/2601.10101
   - Relevance: Matrix-based plan with explicit dependency representation; replanner identifies omissions and defects against semantic-equivalence constraints — distinguishes structural gaps from task abandonment.

4. **From Agent Traces to Trust: A Survey of Evidence Tracing and Execution Provenance in LLM Agents** (2026)
   - URL: https://arxiv.org/html/2606.04990v3
   - Relevance: Documents that mutable-history systems lose accountability; immutable plan-version is the minimal unit of accountability; versioned-history enables reconstruction of which plan governed which actions.

5. **What Is Your Agent's GPA? A Framework for Evaluating Agent Goal-Plan-Action Alignment** (2025)
   - URL: https://arxiv.org/abs/2510.08847
   - Relevance: Defines Plan Adherence and Plan Quality as separable metrics; evaluators must identify replans within the trace and assess how closely execution follows each plan/replan — defines accountability structure.

6. **Using Sub-Optimal Plan Detection to Identify Commitment Abandonment in Discrete Environments** (Pereira, Oren, Meneguzzi, 2020)
   - URL: https://arxiv.org/abs/1904.11737
   - Relevance: Formal definition of commitment abandonment (switching to actions from another plan without completing current commitment); landmark-based detection distinguishes legitimate replanning from abandonment.

7. **Action Accountability: Why Every AI Agent Needs a Trace Layer** (IBM, 2025)
   - URL: https://www.ibm.com/think/insights/action-accountability-ai-agent-needs-trace-layer
   - Relevance: Production accountability guidance; trace layer must capture original proposal, policy decisions, execution observations, intervention events, and recovery path — full session provenance.

8. **Harnessing Embodied Agents: Runtime Governance for Policy-Constrained Execution** (2026)
   - URL: https://arxiv.org/pdf/2604.07833
   - Relevance: Governance layer records full trace including replanning events; planner-auditor decoupling separates generation from rule-based validation.

9. **Agent Audit Trail Design: 7 Best Practices for 2026** (Digital Applied)
   - URL: https://www.digitalapplied.com/blog/agent-audit-trail-design-7-best-practices-2026
   - Relevance: Every record must carry event type, principal, target, timestamp, agent/model versions, structured inputs/outputs, tool calls, and chain hash linking previous records — standardized change record schema.

10. **Audit Trails for Accountability in Large Language Models** (2026)
    - URL: https://arxiv.org/html/2601.20727v1
    - Relevance: Documents the audit-trail fabrication failure mode — LLMs can rewrite plan mid-execution silently; original plan is overwritten in context, making faithful audit trail reconstruction impossible.

11. **ReflAct: World-Grounded Decision Making in LLM Agents via Goal-State Reflection** (2025)
    - URL: https://arxiv.org/html/2505.15182v2
    - Relevance: Goal-state reflection instead of action reflection; replanning is grounded in whether goal state was reached, not just whether the action executed — ties plan revision to outcome evidence.

12. **Devil's Advocate: Anticipatory Reflection for LLM Agents** (2024)
    - URL: https://arxiv.org/pdf/2405.16334
    - Relevance: Pre-execution reflection to anticipate plan failures; distinguishes anticipatory (before-execution) from retrospective (after-failure) replanning.

---

## Structural Properties Found

- Plans that must be versioned (not mutated) to support accountability: each plan-version is a distinct immutable artifact; the execution record names which version governed which actions.
- Reflexion annotation structure: [task statement] + [failure block: which specific actions failed and why] + [full trajectory] + [previous plan version] → generates revised plan with causal linkage.
- Plan-and-Act separation: Planner and Executor are structurally distinct; replanning fires after each execution step with explicit inputs: (original_plan, action_just_taken, environment_observation) → new_plan.
- MatrixCoT dependency matrix: plan is represented as a matrix of reasoning steps and precedence constraints; replanner rewrites and compresses the matrix under semantic-equivalence constraints, identifying omissions vs. abandonment.
- GPA framework structural decomposition: plan artifacts are evaluated on Plan Quality (alignment to goal), Plan Adherence (actions follow plan), and goal fulfillment independently — separable metrics mean a plan can be valid but abandoned.
- Commitment abandonment operationalization: an agent has abandoned a commitment when it executes actions that are sub-optimal for the committed goal but optimal for another goal — detectable via landmark analysis of the execution trace.
- Planner-auditor decoupling: generation (LLM) and validation (deterministic rule-based auditor) are separate modules; auditor can detect drift, trigger replanning, and annotate the event — no self-monitoring required.
- Append-only audit log: every lifecycle event is chained cryptographically to the previous; replanning events are a class of lifecycle events with required fields (trigger, prior plan reference, new plan, justification).
- Silent plan rewriting is the primary accountability failure mode: LLM mid-execution plan revision overwrites context; without external append-only logging, the original plan cannot be reconstructed.

---

## Wide-First Findings

Weak signal for wide-at-intake as an explicit design requirement. Plan-and-Act initializes with a "high-level plan" from the Planner before execution begins, but the plan is not required to list all anticipated phases — it is structured enough to guide the Executor but is expected to evolve. MatrixCoT builds a full dependency matrix at initialization, which is closer to wide-first: all reasoning steps and their precedence constraints are declared before any solving begins. The GPA framework's Plan Quality metric implicitly rewards completeness of the initial plan (how well it covers the goal), which would favor wide-first skeletons. No source describes a formal requirement that all phases be named before execution begins. The closest is the governance framework literature (IBM, Digital Applied), where an "original proposal" is required as the immutable anchor; this anchor could naturally include a complete phase skeleton.

---

## Depth-at-Phase-Entry Findings

No source explicitly requires that a phase section be fully expanded before that phase begins. Plan-and-Act's dynamic replanning is the closest analog: before each executor step, the Planner generates a fresh plan based on current state — effectively expanding the next step to full operational detail before the Executor sees it. Reflexion's pattern of populating the failure block with trajectory evidence before generating a revised plan is structurally similar: the next plan is only written when the prior plan's results are fully visible. The Reflexion prompt template format (task + failure evidence + trajectory + previous plan) enforces that the agent cannot produce a revision without having first surfaced all relevant evidence — a gating constraint that is analogous to requiring full expansion before proceeding.

---

## Adaptive Annotation Findings

This is the most richly documented area across sources.

**Required format for a plan change entry (synthesized from Reflexion + audit trail literature):**
1. Trigger type: result-based (prior step outcome) vs. structural (prerequisite discovered) vs. scope (goal reinterpretation)
2. Reference to prior plan version (immutable identifier)
3. Causal linkage: which specific evidence caused the change (trajectory slice, tool output, observation)
4. What was removed/added/restructured
5. Semantic equivalence check: does the revised plan still address the original goal? (MatrixCoT calls this "semantic-equivalence constraint")

**Distinguishing legitimate replanning from scope abandonment:**
- Legitimate replanning: actions following the revision remain optimal for the original goal
- Scope abandonment: actions following the revision are optimal for a different goal than the one committed to (detectable via commitment abandonment analysis)
- The key structural discriminator is whether the goal statement is unchanged across the plan revision; if the goal shifts without user authorization, it is abandonment not evolution

**"Change requires justification" rules:**
The planner-auditor decoupling pattern (governance literature) is the strongest operational instance: the auditor is a deterministic rule-based module that validates every plan mutation against policy. If the mutation lacks a causal trigger (an observation or tool output that necessitates it), the auditor rejects it. This is structurally equivalent to "change requires justification." The EU AI Act Article 12 compliance literature adds a regulatory dimension: for high-risk systems, every plan modification must be logged with the initiator and reason, making justification-required a legal constraint not just a design choice.

**Plan revision history visibility for retrospective audit:**
- Versioned-history systems outperform mutable-history systems for debugging (From Agent Traces to Trust)
- Cryptographically chained append-only logs with chain hash linking each record to its predecessor make revision history tamper-evident
- The minimal visible artifact is: original plan + ordered list of (trigger, prior plan ref, new plan, timestamp) tuples

---

## Discovered-Work Routing

Plan-and-Act handles discovered work implicitly: after each executor step, the Planner receives the observation and may add, remove, or reorder steps in the revised plan. There is no explicit structural slot for "discovered work" — it just enters the replanning cycle. MatrixCoT's replanner handles discovered omissions explicitly: the dependency matrix has a module that identifies missing steps (omissions) and adds them, distinct from identifying defective steps. This is the closest to a formal discovered-work routing mechanism. Reflexion routes discovered work through the episodic memory — lessons learned from one trial become available as context for the next trial's plan. No source describes a structural inbox or queue for discovered work items; they flow into the replanning mechanism directly, which risks losing them if a replanning step is skipped or abbreviated.

---

## Key Findings

- The minimal accountability requirement for plan changes is: immutable prior plan reference + causal trigger (evidence that necessitated the change) + semantic equivalence check against original goal.
- Silent plan mutation (LLM overwrites its plan in context without annotation) is the primary accountability failure mode, documented independently in audit trail research.
- Commitment abandonment and legitimate replanning are structurally distinguishable: abandonment = actions become sub-optimal for committed goal; replanning = actions remain optimal for committed goal given new information.
- Planner-auditor decoupling is the only pattern found that enforces "change requires justification" at runtime without relying on the agent's self-monitoring — the auditor is a separate deterministic module.
- Versioned plan history outperforms mutable plan history for audit and debugging; the version identifier is the minimal unit of accountability.
- No existing system found that requires a full-width phase skeleton before any execution begins (closest: MatrixCoT's full dependency matrix initialization, governance literature's "original proposal" anchor).
- The GPA framework's Plan Adherence metric formally requires identifying each replan within the trace — this is a post-hoc accountability measure, not a runtime enforcement mechanism.
- Discovered work is handled implicitly by most systems (enters replanning cycle); MatrixCoT's omission-detection module is the only found example of explicit structural routing.
- The Reflexion prompt template format is the most detailed specification of a plan change annotation format found: task + failure block + trajectory + previous plan → revised plan.

---

## Design Implications

- **Plan change entries must have a required schema** with at minimum: (a) trigger evidence reference, (b) prior plan version identifier, (c) what was removed/changed/added, (d) semantic equivalence assertion (does the revised plan still address the original goal?). A change entry without all four fields should be invalid.
- **Use planner-auditor decoupling** for runtime enforcement: the Planner proposes mutations; a separate deterministic Auditor validates each against the justification schema before accepting them. This removes self-monitoring from the accountability path.
- **Immutable plan versions**: each plan state is an append-only record; the "current plan" is always the latest version in a chain, not an overwritten state. Silent mutation is structurally impossible in this design.
- **Semantic equivalence gate**: every plan mutation must include a check that the revised plan still addresses the original goal. If the goal shifts, that is a separate event requiring explicit user authorization — not a plan revision.
- **Commitment abandonment detection**: track whether post-revision actions remain optimal for the original goal. Actions that are optimal for a different goal than the committed one are a signal of scope abandonment, not replanning.
- **Omission vs. defect distinction** (from MatrixCoT): discovered work (omissions — new steps required by results) and plan defects (existing steps that were wrong) are different event types and should be annotated differently in the plan change record.
- **Wide-at-intake enforcement**: the "original proposal" anchor in governance frameworks supports this; implementing a required skeleton with TBD sections before execution begins maps directly to this anchor, and downstream mutations are measured against it.

---

## Saturation Signal

NO — further searches targeting specific systems with explicit "change requires justification" enforcement (e.g., AutoGen plan governance, CrewAI task mutation logging, OpenDevin replanning traces) would likely surface additional concrete implementations and format specifications not found in this pass. The academic literature is well-covered; the production system implementations are a gap.
