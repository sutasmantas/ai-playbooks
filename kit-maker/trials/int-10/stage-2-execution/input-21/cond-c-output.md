# Angle-Gen-Kit Output — Input 21, Condition C

**Topic:** How LLM-based agents plan and execute multi-step tasks
**Condition:** C (Source B unavailable — subagent/sandboxed context)
**Date:** 2026-07-05

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: How LLM-based agents plan and execute multi-step tasks — specifically, how
language-model-based autonomous agents decompose goals into sequences of actions,
generate plans, and carry out those plans across multiple steps.

Anchor vocabulary:
  - "LLM-based agents" (ML-systems / NLP tradition)
  - "plan" (AI Planning tradition)
  - "execute" (systems / execution tradition)
  - "multi-step tasks" (task-decomposition / planning tradition)

Candidate vocabulary traditions:
  1. NLP / LLM Agent Research — chain-of-thought (CoT), ReAct, Plan-and-Execute,
     scratchpad reasoning, tool-augmented language models, prompt chaining, in-context
     learning, instruction following, Tree of Thoughts, Reflexion
  2. Classical AI Planning / Automated Planning — STRIPS, PDDL, HTN (Hierarchical
     Task Networks), goal-directed behavior, plan-space planning, task decomposition,
     action preconditions and effects, plan validation
  3. Reinforcement Learning / Sequential Decision Making — MDP (Markov Decision
     Process), reward modeling, policy gradient, temporal credit assignment,
     hierarchical RL, RLHF, exploration-exploitation, Q-learning for agents
  4. Multi-Agent Systems / Distributed AI — BDI (belief-desire-intention) model,
     agent coordination, communication protocols, multi-agent planning, emergent
     coordination, agent societies, inter-agent task delegation
  5. Software Engineering / Practitioner Frameworks — LangChain, AutoGen, CrewAI,
     LangGraph, OpenAI function calling, API integration, workflow automation,
     orchestration pipelines, agentic systems in production
  6. Evaluation / Benchmarking — agent benchmarks, task completion rates, ALFWorld,
     WebArena, AgentBench, GAIA, ToolBench, SWE-bench, evaluation methodology for
     AI agents, capability elicitation
  7. Cognitive Science / Psychology of Planning — working memory, executive function,
     prospective cognition, mental simulation, goal hierarchies, dual-process theory,
     metacognition, planning deficits, means-ends analysis
  8. Robotics / Embodied AI — task and motion planning (TAMP), skill learning,
     language-grounded robotics, sim-to-real transfer, embodied task execution,
     SayCan, PaLM-E
  9. Safety / Alignment / AI Governance — agent safety, corrigibility, unintended
     side-effects, specification gaming, authorization scope, value alignment,
     minimal footprint principle, AI oversight
  10. HCI / Human-Computer Interaction — human-in-the-loop, mixed-initiative systems,
      autonomy calibration, user delegation, trust in automation, interaction design
      for AI agents, adjustable autonomy
  11. Program Synthesis / Code Generation — code as executable plan, program
      synthesis for task solving, structured output planning, verifiable plan
      execution, LLMs as code generators for agentic workflows

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot
  enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing
  from a known anchor paper) is recommended before accepting the angle list as covering
  all traditions.

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure in the prompt; user asks "what is
  the space of findings on how agents plan and execute")

Scope markers: None stated — inferred scope: general planning and execution
  capabilities across LLM agent architectures, not restricted to specific models,
  task types, or deployment contexts.

Known exclusions: None stated

Domain maturity estimate: mixed
  Basis: anchor vocabulary spans academic framing ("LLM-based agents," "multi-step
  tasks") and practitioner framing ("plan," "execute"); the field has substantial
  arXiv literature (ReAct, CoT, Plan-and-Execute, AutoGPT-style systems) and
  significant practitioner output (LangChain, AutoGen, CrewAI); both populations
  produce relevant material with partially non-overlapping vocabulary.

Source B status: UNAVAILABLE — MODERATE — Source A + Source C together produced
  11 distinct vocabulary traditions. Topic is in a domain with strong LLM training
  coverage (NLP/ML research well-represented). VOCABULARY SELF-REPORT FLAG applies
  to all tradition enumeration. Expected angle coverage: MODERATE, not FULL.
  Proceeding per intake.md Step 5 MODERATE pathway.

Absent-term signal (Source C — terms the user did NOT use but that should appear
  in this literature):
  - ReAct, CoT (chain-of-thought)
  - Tool use, function calling
  - Memory management, context window management
  - Grounding, environment interaction
  - Replanning, error recovery
  - Plan verification, plan validation
  - Orchestration, agentic pipeline
```

---

## COVERAGE MAP

```
COVERAGE MAP
============

Tradition 1: NLP / LLM Agent Research
  Representative terms: ReAct, chain-of-thought, Plan-and-Execute, scratchpad, Tree
    of Thoughts, Reflexion, tool-augmented LLMs
  Planned angle slot: Confirmatory A1
  Gap flag: no

Tradition 2: Classical AI Planning / Automated Planning
  Representative terms: STRIPS, PDDL, HTN, goal decomposition, plan-space search,
    action preconditions, plan validation
  Planned angle slot: Confirmatory A2
  Gap flag: no

Tradition 3: Reinforcement Learning / Sequential Decision Making
  Representative terms: MDP, policy gradient, reward signal, hierarchical RL,
    temporal credit assignment, offline RL for planning
  Planned angle slot: Confirmatory A3
  Gap flag: no

Tradition 4: Multi-Agent Systems / Distributed AI
  Representative terms: BDI model, agent coordination, multi-agent orchestration,
    inter-agent delegation, communication protocols
  Planned angle slot: Confirmatory A4
  Gap flag: no

Tradition 5: Software Engineering / Practitioner Frameworks
  Representative terms: LangChain, AutoGen, CrewAI, LangGraph, function calling,
    orchestration, agentic pipelines
  Planned angle slot: Confirmatory A5
  Gap flag: no

Tradition 6: Evaluation / Benchmarking
  Representative terms: AgentBench, WebArena, GAIA, ToolBench, SWE-bench,
    task completion rate, evaluation methodology
  Planned angle slot: Confirmatory A6
  Gap flag: no

Tradition 7: Cognitive Science / Psychology of Planning
  Representative terms: working memory, executive function, prospective cognition,
    goal hierarchies, metacognition, means-ends analysis
  Planned angle slot: Confirmatory A7
  Gap flag: no

Tradition 8: Robotics / Embodied AI
  Representative terms: TAMP (task and motion planning), language-grounded robotics,
    sim-to-real, embodied execution, SayCan, PaLM-E
  Planned angle slot: Confirmatory A8
  Gap flag: no

Tradition 9: Safety / Alignment / AI Governance
  Representative terms: agent safety, corrigibility, unintended side-effects,
    specification gaming, authorization scope, AI oversight
  Planned angle slot: Confirmatory A9
  Gap flag: no

Tradition 10: HCI / Human-Computer Interaction
  Representative terms: human-in-the-loop, mixed-initiative, autonomy calibration,
    user delegation, adjustable autonomy, trust in automation
  Planned angle slot: Confirmatory A10
  Gap flag: no

Tradition 11: Program Synthesis / Code Generation
  Representative terms: code as plan, program synthesis, structured output planning,
    verifiable execution, LLM code generation for tasks
  Planned angle slot: Confirmatory A11
  Gap flag: no

Traditions NOT yet represented in the planned list:
  NONE — all 11 traditions from intake brief have at least one angle slot.

Cross-disciplinary slot (required):
  Target tradition: Management Science / Organizational Behavior — NOT in the
    intake brief. This tradition predates LLM agent research by decades; its
    vocabulary (work breakdown structure, span of control, delegation authority,
    organizational hierarchy, project planning) does not appear in CS literature
    and would be missed by any CS-vocabulary search.
  Basis for selection: LLM agent planning shares structural properties with
    organizational planning (task decomposition, authority chains, delegation,
    subtask handoff, monitoring for completion). The management science literature
    on why decomposed work fails (communication overhead, authority ambiguity,
    goal displacement) offers hypotheses not visible from the CS framing.

Justification for angle count > 12:
  This topic spans 11 distinct vocabulary traditions at intake. Per angle-generation.md:
  "Hard input (complex multi-tradition domain): 20-30 angles is appropriate when ≥4
  distinct vocabulary traditions are identified at intake and the topic spans multiple
  disciplines." This list produces 14 angles across 13 distinct traditions, which is
  at the conservative end of the justified range. Each tradition slot has exactly one
  angle.
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1  (Confirmatory — NLP / LLM Agent Research)
Slot A2  (Confirmatory — Classical AI Planning / Automated Planning)
Slot A3  (Confirmatory — Reinforcement Learning / Sequential Decision Making)
Slot A4  (Confirmatory — Multi-Agent Systems / Distributed AI)
Slot A5  (Confirmatory — Software Engineering / Practitioner Frameworks)
Slot A6  (Confirmatory — Evaluation / Benchmarking)
Slot A7  (Confirmatory — Cognitive Science / Psychology of Planning)
Slot A8  (Confirmatory — Robotics / Embodied AI)
Slot A9  (Confirmatory — Safety / Alignment / AI Governance)
Slot A10 (Confirmatory — HCI / Human-Computer Interaction)
Slot A11 (Confirmatory — Program Synthesis / Code Generation)
Slot N1  (Null-hypothesis): assigned — "What evidence shows LLM agent planning
          fails, does not generalize, or produces systematically wrong outputs?"
Slot D1  (Adversarial): Systems Reliability / Dependability Engineering —
          NOT FROM: NLP/LLM agent research vocabulary (ReAct, chain-of-thought,
          CoT, scratchpad, prompt engineering, instruction following, tool-augmented,
          in-context learning, emergent capability)
Slot C1  (Cross-disciplinary): Management Science / Organizational Behavior
```

---

## FULL ANGLE LIST

---

### ANGLE 1: Core LLM Reasoning Frameworks for Multi-Step Planning
```
Vocabulary tradition: NLP / LLM Agent Research
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Which prompting frameworks (ReAct, CoT, Plan-and-Execute, Tree of
  Thoughts, Reflexion) produce measurable improvements in multi-step task completion;
  scope conditions on which framework works for which task class; ablation results
  showing which components matter.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — repositories implementing these frameworks
  (most-starred, to capture adopted implementations)

Queries:
  Q1: LLM agent planning chain-of-thought ReAct multi-step task execution 2023 2024 2025
  Q2: Plan-and-Execute language model agent task decomposition benchmark empirical
  Q3: Tree of Thoughts Reflexion self-reflection agent planning improvement evaluation

Coverage-gap note: Does not cover how these frameworks degrade under long task
  horizons (>10 steps) or with adversarial inputs — leave to N1 angle.
```

---

### ANGLE 2: Classical AI Planning Methods Applied to LLM Agents
```
Vocabulary tradition: Classical AI Planning / Automated Planning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How symbolic planning techniques (PDDL, HTN, STRIPS) are integrated
  with or inspire LLM-based planning; task decomposition methods borrowed from the
  classical AI planning literature; plan validation and verification results.

Source type (academic): arXiv cs.AI + cs.CL (dual-category search required —
  classical planning crosses cs.AI and cs.CL)
Source type (practitioner): technical reports from AI systems labs (Google DeepMind,
  CMU AI, MIT CSAIL) — deprioritized for practitioner search; Semantic Scholar for
  citation-network exploration of the classical-to-LLM bridge literature

Queries:
  Q1: hierarchical task network language model agent planning PDDL integration
  Q2: symbolic planning LLM grounding task decomposition goal-directed execution
  Q3: classical AI planning techniques large language model agent survey 2024 2025

Coverage-gap note: Does not cover plan repair or replanning after failure — that
  sub-topic appears in the null-hypothesis and adversarial angles.
```

---

### ANGLE 3: Reinforcement Learning Approaches to LLM Agent Planning
```
Vocabulary tradition: Reinforcement Learning / Sequential Decision Making
Angle type: Confirmatory
Predicted research character: empirical
What to extract: RL-based methods for training LLM agents to plan (RLHF for
  long-horizon tasks, offline RL on agent trajectories, reward shaping for
  multi-step completion); comparison with prompting-only approaches; which RL
  methods are effective for which task types.

Source type (academic): arXiv cs.LG + cs.CL
Source type (practitioner): GitHub — RL-based agent training codebases
  (most-forked ordering preferred for active development signal)

Queries:
  Q1: reinforcement learning LLM agent training long-horizon task planning reward
  Q2: offline RL language model agent sequential decision making trajectory optimization
  Q3: RLHF multi-step task execution hierarchical policy language model 2023 2024

Coverage-gap note: Does not cover the interaction between RL-trained planners and
  tool-use environments — that is partially covered in A5 and A8.
```

---

### ANGLE 4: Multi-Agent Coordination and Orchestration
```
Vocabulary tradition: Multi-Agent Systems / Distributed AI
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How multiple LLM-based agents coordinate to execute multi-step
  tasks; division of labor across agents; inter-agent communication protocols;
  comparison of single-agent vs. multi-agent approaches for complex tasks;
  emergent coordination failures.

Source type (academic): arXiv cs.MA + cs.AI (cs.MA = multi-agent systems — do NOT
  substitute cs.AI alone)
Source type (practitioner): GitHub — AutoGen, CrewAI, MetaGPT repositories and
  their issue threads (failure mode vocabulary)

Queries:
  Q1: multi-agent LLM collaboration task planning execution coordination 2024 2025
  Q2: LLM agent society role assignment delegation complex task decomposition
  Q3: AutoGen MetaGPT CrewAI multi-agent workflow orchestration evaluation benchmark

Coverage-gap note: Does not cover adversarial interactions between agents or
  deceptive inter-agent communication — leave to D1 adversarial angle.
```

---

### ANGLE 5: Practitioner Frameworks and Tool-Use Architectures
```
Vocabulary tradition: Software Engineering / Practitioner Frameworks
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Which orchestration frameworks practitioners adopt and why; how
  tool-use (function calling, API integration) is implemented; architectural
  patterns for agentic pipelines that handle multi-step tasks; failure modes
  practitioners encounter in production deployments.

Source type (academic): arXiv cs.SE + cs.CL — some framework papers appear here
Source type (practitioner): GitHub (most-starred LangChain, LangGraph, AutoGen
  repos + their issue threads); practitioner blog posts (Towards Data Science,
  Medium agentic-AI search); technical reports

Queries:
  Q1: LangChain LangGraph agent workflow orchestration multi-step task production
  Q2: agentic pipeline tool use function calling LLM implementation architecture
  Q3: LLM agent framework comparison production deployment failure modes practitioners

Coverage-gap note: Does not cover the formal correctness of these frameworks —
  that is the Program Synthesis angle (A11). Does not cover security vulnerabilities
  in these frameworks — that is a gap not covered by any angle in this list (flag
  for human judgment: may warrant an additional security/adversarial-input angle).
```

---

### ANGLE 6: Benchmark Design and Evaluation Methodology for Agent Planning
```
Vocabulary tradition: Evaluation / Benchmarking
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Which benchmarks exist for evaluating LLM agent planning and
  execution; how task completion, plan quality, and execution fidelity are measured;
  whether current benchmarks capture real-world multi-step complexity; identified
  gaps in evaluation methodology.

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — benchmark repositories (ALFWorld, WebArena,
  AgentBench, GAIA, SWE-bench) for task definitions and evaluation scripts

Queries:
  Q1: LLM agent benchmark evaluation multi-step task completion WebArena AgentBench 2024
  Q2: evaluation methodology AI agent planning capability elicitation task performance
  Q3: GAIA SWE-bench ToolBench agent evaluation survey limitations 2024 2025

Coverage-gap note: Does not cover the meta-question of whether benchmark performance
  predicts real-world agent performance — that is a gap noted here but not covered
  by a specific angle (log for human judgment).
```

---

### ANGLE 7: Cognitive Science Perspectives on LLM Agent Planning
```
Vocabulary tradition: Cognitive Science / Psychology of Planning
Angle type: Confirmatory
Predicted research character: consensus
What to extract: What cognitive science knows about human planning (working memory
  limits, goal hierarchies, means-ends analysis, metacognition) and whether LLM
  agent architectures instantiate or violate those mechanisms; analogies and
  disanalogies between human and LLM planning; cognitive architecture comparisons
  (ACT-R, SOAR vs. LLM agent designs).

Source type (academic): Semantic Scholar + PubMed (this angle spans cognitive
  science journals not indexed on arXiv); search Psychological Review, Cognition,
  Cognitive Psychology; arXiv cs.AI for bridge papers
Source type (practitioner): deprioritized — this is an academic-heavy angle with
  minimal practitioner production

Queries:
  Q1: cognitive architecture planning executive function analogies language model agents
  Q2: working memory goal hierarchies means-ends analysis AI planning comparison
  Q3: metacognition self-monitoring planning LLM agent cognitive science perspective

Coverage-gap note: Does not cover developmental psychology of planning (how humans
  acquire planning skills and whether that provides training signal). May warrant a
  follow-up angle for that sub-question.
```

---

### ANGLE 8: Robotics and Embodied AI Grounding for Multi-Step Execution
```
Vocabulary tradition: Robotics / Embodied AI
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How LLM-based agents ground language-described plans in physical
  or simulated environments; task-and-motion planning (TAMP) with language models;
  the gap between abstract plans and executable robot actions; sim-to-real transfer
  for LLM-planned tasks; key systems (SayCan, PaLM-E, RT-2).

Source type (academic): arXiv cs.RO + cs.CL + cs.AI (robotics papers span multiple
  categories — cs.RO alone misses LLM-grounding papers categorized under cs.CL)
Source type (practitioner): GitHub (robot learning codebases; SayCan, PaLM-E,
  RT-2 associated repos); robotics lab technical reports (Google DeepMind, CMU RI)

Queries:
  Q1: language model robot planning task execution grounding physical environment
  Q2: task and motion planning TAMP large language model embodied agent execution
  Q3: SayCan PaLM-E RT-2 language-grounded robot skill execution survey 2024

Coverage-gap note: Focused on grounding and execution; does not cover robot learning
  as a method for improving LLM planning (covered partially in A3 RL angle).
```

---

### ANGLE 9: Safety and Alignment Risks in Multi-Step LLM Agent Execution
```
Vocabulary tradition: Safety / Alignment / AI Governance
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Alignment failure modes specific to multi-step agent execution
  (specification gaming, goal drift, unintended side-effects, scope creep);
  corrigibility mechanisms for agents mid-execution; minimal footprint principle;
  authorization scope management; documented incidents of LLM agents causing
  unintended harm during multi-step tasks.

Source type (academic): arXiv cs.AI + cs.CY (safety papers appear under both
  Computers and Society and AI categories); Alignment Forum preprints
Source type (practitioner): AI safety organization reports (Anthropic, DeepMind
  Safety, ARC Evals); GitHub (safety evaluation frameworks)

Queries:
  Q1: LLM agent safety alignment multi-step execution unintended side effects 2024
  Q2: corrigibility specification gaming AI agent task planning authorization scope
  Q3: AI agent risk failure mode governance oversight multi-step autonomous execution

Coverage-gap note: Does not cover prompt injection attacks or adversarial misuse
  of agents — those are security concerns adjacent to alignment but distinct.
  Flag for human judgment: may warrant an additional security angle.
```

---

### ANGLE 10: Human-in-the-Loop and Mixed-Initiative Approaches to Agent Planning
```
Vocabulary tradition: HCI / Human-Computer Interaction
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How human oversight is integrated into LLM agent multi-step
  planning (when to interrupt, how to correct, how to delegate); user trust in
  autonomous agents; adjustable autonomy designs; interaction patterns that reduce
  planning errors through human checkpoints; empirical studies of human-agent
  collaboration on tasks.

Source type (academic): ACM CHI / CSCW proceedings (these appear on Semantic
  Scholar and ACM DL, not primarily on arXiv); arXiv cs.HC for bridge papers
Source type (practitioner): practitioner UX research blogs; GitHub issues on
  commercial agent products for user pain points

Queries:
  Q1: human-in-the-loop LLM agent oversight multi-step task execution intervention
  Q2: adjustable autonomy mixed-initiative AI agent user trust interaction design
  Q3: human agent collaboration delegation planning task management empirical study

Coverage-gap note: Does not cover accessibility implications of agent autonomy
  calibration — a gap not covered by any angle in this list.
```

---

### ANGLE 11: Code Generation and Program Synthesis as Planning Mechanisms
```
Vocabulary tradition: Program Synthesis / Code Generation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Whether generating executable code (Python, shell scripts, API
  calls) is more reliable than natural-language planning for multi-step tasks;
  structured output formats (JSON plans, pseudocode plans) vs. free-text plans;
  formal verification of LLM-generated plans; program synthesis approaches where
  the plan IS the executable artifact.

Source type (academic): arXiv cs.PL + cs.CL + cs.SE (program synthesis crosses
  all three categories)
Source type (practitioner): GitHub — code interpreter agent implementations;
  OpenAI code-interpreter, Codex agent tool use repos

Queries:
  Q1: code generation executable plan LLM agent multi-step task program synthesis
  Q2: structured output JSON plan language model execution formal verification
  Q3: LLM code interpreter tool use agent planning reliability comparison 2024 2025

Coverage-gap note: Does not cover the question of whether code-generating agents
  inherit bugs from training data — a code security concern adjacent to this angle.
```

---

### ANGLE N1: Evidence That LLM Agent Planning Fails, Does Not Generalize, or Produces Harmful Outcomes

```
Vocabulary tradition: NLP / LLM Agent Research (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Documented failure modes in LLM multi-step agent planning: cases
  where agents loop, hallucinate steps, fail to recover from errors, exceed context
  limits, produce incorrect plans on novel tasks, or perform below baseline methods
  on realistic benchmarks; null results from agent planning papers; replication
  failures; scope conditions under which planning approaches do NOT hold.

Source type (academic): arXiv cs.CL + cs.LG (negative results often appear as
  ablation sections or follow-up challenge papers)
Source type (practitioner): GitHub issue threads on LangChain, AutoGen, CrewAI
  (these capture practitioner-observed failure modes not published academically);
  blog posts explicitly documenting failure cases

Queries:
  Q1: LLM agent planning failure hallucination long-horizon task breakdown negative
    result 2024 2025
  Q2: language model multi-step execution does not generalize limitation scope
    condition replication
  Q3: agent benchmark failure analysis performance degradation task length complexity

Coverage-gap note: This angle covers failure modes documented in the literature.
  Failure modes only appearing in proprietary deployments (unreported by practitioners)
  are structurally inaccessible.
```

---

### ANGLE D1: Structural Failure Analysis of LLM Agent Execution Systems

[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

```
Vocabulary tradition: Systems Reliability / Dependability Engineering
Angle type: Adversarial
Predicted research character: consensus

Generation note — excluded vocabulary (all terms used in A1–A11 confirmatory slots
  were excluded from this generation):
  EXCLUDED: ReAct, chain-of-thought, CoT, scratchpad, prompt engineering, instruction
  following, tool-augmented, in-context learning, PDDL, HTN, STRIPS, RLHF, reward
  modeling, multi-agent, LangChain, AutoGen, CrewAI, benchmark evaluation, cognitive
  architecture, embodied AI, TAMP, SayCan, alignment, corrigibility, human-in-the-loop,
  program synthesis, code generation.

What to extract: What dependability engineering, fault-tolerant systems design, and
  reliability engineering predict about systems where a generative component (the LLM)
  performs sequential subtask execution with real-world side-effects; FMEA (failure
  modes and effects analysis) applied to agent pipelines; cascading failure patterns;
  verification and validation methodology for non-deterministic AI components;
  whether existing dependability frameworks are sufficient or need extension for
  generative AI systems.

Source type (academic): IEEE Transactions on Reliability; arXiv cs.SE + cs.SY
  (control systems; safety-critical systems literature); ICSE/FSE software engineering
  conference proceedings
Source type (practitioner): dependability engineering technical standards (IEC 61508,
  DO-178C as reference frames); safety-critical software engineering practitioner
  literature

Queries:
  Q1: fault tolerant autonomous system sequential execution verification validation
    non-deterministic 2024 2025
  Q2: FMEA failure modes effects analysis AI pipeline autonomous decision making
    reliability
  Q3: dependability safety-critical generative AI system cascading failure agentic
    workflow 2024

Coverage-gap note: The dependability engineering literature largely predates LLM
  agents. This angle may return principled frameworks without LLM-specific application
  — a "gap" result here is informative (it means the application is novel and
  under-researched).
```

---

### ANGLE C1: Work Decomposition and Delegation Theory from Management Science

```
Vocabulary tradition: Management Science / Organizational Behavior
Angle type: Cross-disciplinary
Predicted research character: consensus
What to extract: What management science and organizational theory know about
  decomposing complex goals into subtasks, assigning subtasks across a hierarchy,
  monitoring progress, and detecting when subtasks fail or drift; work breakdown
  structures (WBS); span of control; principal-agent theory as applied to delegation;
  research on why decomposed work fails (communication overhead, goal displacement,
  authority ambiguity); whether these failure modes have structural parallels in
  LLM agent pipeline failures.

Source type (academic): Semantic Scholar + Google Scholar (management science
  journals are NOT on arXiv — use Academy of Management Review, Management Science
  journal, Harvard Business Review for practitioner bridge); JSTOR for older
  foundational work
Source type (practitioner): McKinsey, BCG practitioner reports on organizational
  planning; project management practitioner literature (PMI PMBOK)

Queries:
  Q1: work breakdown structure task decomposition organizational hierarchy delegation
    failure coordination
  Q2: principal agent theory delegation monitoring subtask autonomous agent goal
    alignment organization
  Q3: organizational planning failure goal displacement authority ambiguity complex
    task decomposition

Coverage-gap note: The management science literature does not use LLM vocabulary.
  Cross-referencing findings back to LLM agent design requires interpretation work
  not automated by search — flag for human synthesis step.
```

---

## GATE SUMMARY

```
GATE SUMMARY
============

Gate 1 — Completeness:
  [x] Null-hypothesis angle present: YES — Angle N1 explicitly framed as
      disconfirming; queries use "failure," "does not generalize," "limitation,"
      "negative result," "breakdown." PASS.
  [x] Adversarial angle present: YES — Angle D1 labeled [ADVERSARIAL-FLAGGED]
      with dispatch note. PASS.
  [x] Cross-disciplinary angle present: YES — Angle C1 (Management Science /
      Organizational Behavior) targets a tradition NOT in the intake brief. PASS.
  [x] Source-type coverage: Domain maturity is MIXED — practitioner sources
      required and present (A5 GitHub LangChain/AutoGen, A4 GitHub AutoGen/CrewAI
      issue threads, N1 GitHub issue threads). PASS.
  [x] Vocabulary-tradition map populated: 11 distinct traditions in coverage map
      (≥2 required). PASS.
  Overall Gate 1: PASS

Gate 2 — Distinctness:
  Boolean-connective test applied to high-risk pairs:
  - A1 (NLP/LLM, ReAct/CoT) vs A2 (Classical AI Planning, PDDL/HTN): distinct
    — A1 queries use "ReAct, chain-of-thought, Plan-and-Execute"; A2 queries use
    "hierarchical task network, PDDL, symbolic planning." OR combination would NOT
    retrieve the same documents. PASS.
  - A2 (Classical AI Planning) vs A8 (Robotics/Embodied AI): A2 focuses on
    symbolic planning applied to LLM agents; A8 focuses on physical grounding and
    sim-to-real execution. Queries differ ("PDDL integration" vs "task and motion
    planning grounding physical environment"). PASS.
  - A4 (Multi-Agent Systems) vs A5 (Software Engineering Frameworks): A4 uses
    "BDI model, multi-agent coordination, agent society"; A5 uses "LangChain,
    LangGraph, orchestration pipeline, production deployment." Structurally distinct
    author populations (MAS researchers vs. SE practitioners). PASS.
  - A9 (Safety/Alignment) vs A10 (HCI): A9 uses "corrigibility, specification
    gaming, authorization scope, unintended side-effects"; A10 uses "adjustable
    autonomy, mixed-initiative, trust in automation, interaction design." Different
    traditions, different publication venues. PASS.
  - N1 vs D1: N1 queries use LLM vocabulary (hallucination, benchmark failure); D1
    queries explicitly exclude that vocabulary and use "FMEA, fault tolerant,
    dependability, cascading failure." PASS.
  Vocabulary-tradition distinctness: all 14 angles have different tradition labels.
    No two non-null, non-adversarial angles share a label. PASS.
  Overall Gate 2: PASS

Gate 3 — Launchability:
  [x] All 14 angles have at least one concrete query string: PASS.
  [x] No placeholder vocabulary (no "TBD," "[fill in]," or vague markers): PASS —
      verified character-by-character on all query fields.
  [x] Source type fields name specific platforms (arXiv with category, GitHub,
      Semantic Scholar, PubMed, ACM DL, IEEE Transactions): PASS.
  Overall Gate 3: PASS

Gate 4 — Scoring prohibition:
  [x] No angle contains "most promising," "most relevant," "strongest angle," or
      equivalent LLM self-evaluation language: PASS — angles are allocated by
      structural type (confirmatory/null/adversarial/cross-disciplinary), not by
      LLM quality assessment.
  [x] No implicit quality ranking was applied during generation: PASS.
  Overall Gate 4: PASS

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG (structural): All 11 vocabulary traditions in the
     intake brief were enumerated by LLM only. Survey-paper probe (intake.md Source B)
     is recommended before accepting this list as covering all traditions. Traditions
     most likely to be missed by LLM enumeration alone: post-2024 niche traditions,
     non-English research communities, and fields underrepresented in LLM training.

  2. Security / adversarial inputs gap: Two confirmatory angles (A5, A9) noted in
     their coverage-gap fields that security concerns (prompt injection, adversarial
     misuse) are not covered by any angle in this list. Human judgment required:
     does this research scope include security-oriented angles? If yes, an additional
     angle targeting the Security / AI Red-Teaming tradition is warranted.

  3. Benchmark-to-real-world validity gap: Angle A6 noted that whether benchmark
     performance predicts real-world agent performance is not covered by any angle.
     This is a methodological meta-question that may warrant its own angle if the
     research goal includes evaluating agent planning for production use.

  4. Adversarial angle magnitude calibration (Weakness 3 from weakness_register.md):
     The required aggressiveness of D1's vocabulary exclusion for technical LLM topics
     is uncharacterized empirically. The exclusion list in D1 is extensive; whether
     it achieves practical context independence for this domain is unknown.

  5. Management Science angle (C1) translation requirement: Synthesis of C1 results
     back to LLM agent design requires human interpretation; this cannot be automated
     by a downstream research agent. Flag for synthesis phase.
```

---

**Angle count: 14**
**Traditions count: 13** (11 from intake brief + 1 cross-disciplinary [Management Science] + 1 adversarial [Systems Reliability / Dependability Engineering])

**VOCABULARY SELF-REPORT FLAG — ACTIVE:** All vocabulary traditions in this output were enumerated by LLM only (no survey-paper probe, no external anchor). The angle list provides MODERATE coverage, not FULL coverage. A Source B pass (survey-paper search on "LLM agent planning survey 2024 2025") is recommended before treating this list as exhaustively covering all research traditions.
