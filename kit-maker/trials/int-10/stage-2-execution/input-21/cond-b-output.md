# Angle-Gen-Kit Output — Input 21, Condition B
**Topic:** How LLM-based agents plan and execute multi-step tasks
**Condition:** B (kit procedures applied — full intake + angle-generation + quality gates)
**Date:** 2026-07-05
**Source B status:** UNAVAILABLE — subagent context without web search

---

## PART 1: INTAKE BRIEF
*(intake.md Steps 1–5)*

### Step 1 — Sparse-input parsing

| Element | Extracted value |
|---------|----------------|
| Target concept | How LLM-based agents plan and execute multi-step tasks — covering architectures, methods, and failure modes |
| Anchor vocabulary | "LLM-based agents" (ML-systems tradition); "plan" / "planning" (AI planning tradition); "execute" / "multi-step tasks" (task execution / workflow decomposition tradition) |
| Scope signals | None stated — no domain, date range, exclusions, or population constraint given |

### Step 2 — Vocabulary bootstrap

**Source A — LLM translation:**

- "LLM-based agents" → also called: AI agents, language model agents, LLM agents, tool-using LLMs, autonomous agents, foundation model agents, agent systems, agentic workflows, AutoGPT-style agents
- "plan" / "planning" → also called: task planning, goal decomposition, plan generation, hierarchical planning, sequential decision-making, workflow generation, task graph, action sequence, Plan-and-Execute, forward-chaining
- "execute" / "multi-step tasks" → also called: long-horizon tasks, sequential tasks, compositional tasks, task decomposition, subgoal generation, chained actions, grounded execution, action execution

**Absent-term signal (Source C) — terms the LLM expects but the user did NOT use:**
- "ReAct" (Reason+Act prompting framework)
- "chain-of-thought" (CoT reasoning)
- "tool use" / "function calling"
- "MCTS" / "tree search" (Monte Carlo planning)
- "PDDL" / "HTN" (classical planning formalisms)
- "decomposition" / "subgoal generation"
- "grounding" (physical or semantic grounding)
- "scaffolding" / "agent scaffold"
- "world model"

**Candidate vocabulary traditions (Source A enumeration):**

1. ML/NLP — LLM agent systems — ReAct, chain-of-thought, tool use, function calling, autonomous agents, agentic workflows, AgentBench, Plan-and-Execute, LangChain, AutoGPT
2. Classical AI planning — STRIPS, PDDL, hierarchical task network (HTN), goal decomposition, forward-chaining, symbolic planning, state-space search, MCTS
3. Robotics / embodied AI — task-and-motion planning (TAMP), grounded execution, embodied agents, manipulation planning, robot task planning
4. HCI / workflow systems — workflow automation, task execution, RPA (robotic process automation), conversational task agents, process automation
5. Cognitive science / problem-solving psychology — planning cognition, goal-directed behavior, executive function, means-ends analysis, working memory, problem decomposition
6. Software engineering / program synthesis — code generation, automated software engineering, neuro-symbolic programming, program synthesis, SWE-bench
7. Multi-agent systems / distributed planning — multi-agent coordination, agent communication, cooperative agents, task delegation, collective planning
8. Evaluation / benchmarking — AgentBench, WebArena, GAIA, TaskBench, benchmark design, evaluation frameworks, task success rate
9. Safety / reliability — agent safety, failure modes, alignment, robustness, error recovery, hallucination in agents, specification gaming

**Additional traditions (LLM Source A expansion beyond initial 9):**
10. Reinforcement learning / sequential decision-making — MDPs, RLHF, policy optimization, reward-based training, Q-learning, Bellman equations
11. Retrieval-augmented generation (RAG) — knowledge retrieval, retrieval-augmented planning, external memory, dense passage retrieval
12. Formal methods / program verification — plan correctness, constraint satisfaction, formal specification, verification
13. Interpretability / explainability — mechanistic interpretability, chain-of-thought faithfulness, attention analysis, scratchpad transparency
14. Operations research / sequential optimization — scheduling, combinatorial optimization, constraint satisfaction, job shop, makespan
15. Knowledge representation / ontologies — knowledge graphs, ontologies, entity linking, structured knowledge, semantic grounding

NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

**Source B status:** UNAVAILABLE — running in subagent context without web access. Severity: MODERATE (Source A+C produced ≥2 distinct traditions; 15 traditions enumerated). Source B pass recommended before treating this list as complete.

### Step 3 — Question-type classification

**Classification: EXPLORATORY**

Basis: The prompt "I want to research how LLM-based agents plan and execute multi-step tasks" contains no comparison language, no explicit intervention-outcome pair, and no named competing approaches. Default classification per procedure (Step 3 decision rule): EXPLORATORY.

PCC frame:
- Population: LLM-based agents
- Concept: planning and multi-step task execution
- Context: research literature (academic and practitioner), no domain restriction stated

### Step 4 — Populated intake brief

```
INTAKE BRIEF
============
Topic: How LLM-based agents plan and execute multi-step tasks — covering architectures,
  methods, evaluation, and failure modes.

Anchor vocabulary:
  "LLM-based agents" (ML-systems tradition)
  "plan" / "planning" (AI planning tradition)
  "execute" / "multi-step tasks" (task execution / workflow decomposition tradition)

Candidate vocabulary traditions:
  1. ML/NLP — LLM agent systems — ReAct, CoT, tool use, function calling, AgentBench, Plan-and-Execute
  2. Classical AI planning — STRIPS, PDDL, HTN, goal decomposition, MCTS, symbolic planning
  3. Robotics / embodied AI — TAMP, grounded execution, embodied agents, robot task planning
  4. HCI / workflow systems — workflow automation, RPA, conversational task agents
  5. Cognitive science / problem-solving psychology — planning cognition, executive function, means-ends analysis
  6. Software engineering / program synthesis — code generation, SWE-bench, program synthesis agents
  7. Multi-agent systems / distributed planning — multi-agent coordination, cooperative agents, task delegation
  8. Evaluation / benchmarking — AgentBench, WebArena, GAIA, benchmark methodology
  9. Safety / reliability — agent safety, failure modes, robustness, hallucination in agents
  10. Reinforcement learning / sequential decision-making — MDPs, RLHF, policy optimization, reward-based training
  11. Retrieval-augmented generation (RAG) — knowledge retrieval, external memory, dense passage retrieval
  12. Formal methods / program verification — plan correctness, constraint satisfaction, formal specification
  13. Interpretability / explainability — mechanistic interpretability, chain-of-thought faithfulness
  14. Operations research / sequential optimization — scheduling, combinatorial optimization, CSP
  15. Knowledge representation / ontologies — knowledge graphs, ontologies, structured knowledge

NOTE: Vocabulary traditions listed here are LLM self-reported.

Question type: EXPLORATORY
  (no comparison language or intervention-outcome structure in prompt)

Scope markers:
  None stated — inferred scope: LLM-based agents specifically (not classical planners alone),
  planning and execution phases both included, multi-step tasks (not single-turn interactions)

Known exclusions: None stated

Domain maturity estimate: mixed (academic-heavy with strong practitioner output)
  Basis: "LLM-based agents" is academic-vocabulary framing; strong practitioner presence
  (LangChain, AutoGPT, tool-calling frameworks); area has substantial arXiv literature
  (cs.CL, cs.AI) and active GitHub repos simultaneously.

Survey paper status: Source B UNAVAILABLE — no survey paper probe run.
  Vocabulary-discovery pass recommended before finalizing angle list.

Source B status: UNAVAILABLE — MODERATE (Source A+C produced ≥2 traditions: 15
  distinct traditions enumerated via LLM-only bootstrap)
```

### Step 5 — Fallback protocol applied

VOCABULARY SELF-REPORT FLAG: All vocabulary traditions listed above were enumerated by LLM only (Source B unavailable). External validation via survey-paper probe (e.g., `"LLM agent planning" survey 2024 2025`) is recommended before accepting this tradition list as complete.

### Step 6 — Intake gate check

- [x] Topic field is populated (not "TBD")
- [x] Candidate vocabulary traditions has ≥2 entries (15 traditions enumerated)
- [x] Question type is classified (EXPLORATORY)

**Gate: PASS. Proceeding to angle-generation.md.**

---

## PART 2: COVERAGE MAP
*(angle-generation.md Step 0)*

This topic has ≥4 distinct vocabulary traditions (15 identified), spans multiple disciplines, and qualifies as a hard input. Per procedure: 20–30 angles is appropriate.

```
COVERAGE MAP
============

Tradition 1: ML/NLP — LLM agent systems: reasoning and planning architectures
  Representative terms: ReAct, chain-of-thought, tree-of-thought, Plan-and-Execute,
    planning prompts, LLM agent scaffold
  Planned angle slot: A1 (Confirmatory)
  Gap flag: No

Tradition 2: ML/NLP — LLM agent systems: tool use and execution grounding
  Representative terms: function calling, tool use, API execution, grounding, external tools,
    action execution
  Planned angle slot: A2 (Confirmatory)
  Gap flag: No

Tradition 3: ML/NLP — LLM agent systems: memory and state management
  Representative terms: episodic memory, working memory, long-context management,
    state tracking, agent context window
  Planned angle slot: A3 (Confirmatory)
  Gap flag: No

Tradition 4: Classical AI planning — symbolic-neural integration
  Representative terms: PDDL, STRIPS, HTN, hierarchical task network, LLM+planner,
    symbolic plan generation, goal decomposition
  Planned angle slot: A4 (Confirmatory)
  Gap flag: No

Tradition 5: Classical AI planning — search-based methods with LLMs
  Representative terms: MCTS, Monte Carlo tree search, lookahead planning,
    beam search, tree-of-thought, world model rollout
  Planned angle slot: A5 (Confirmatory)
  Gap flag: No

Tradition 6: Robotics / embodied AI — task planning
  Representative terms: TAMP, task-and-motion planning, embodied agent, manipulation,
    grounded execution, robot task planning
  Planned angle slot: A6 (Confirmatory)
  Gap flag: No

Tradition 7: HCI / workflow systems — workflow automation
  Representative terms: RPA, workflow automation, process execution, enterprise task agents,
    conversational agents, task orchestration
  Planned angle slot: A7 (Confirmatory)
  Gap flag: No

Tradition 8: Software engineering / program synthesis — code-generation agents
  Representative terms: code generation, SWE-bench, program synthesis, automated SE,
    neuro-symbolic programming, debugging agents
  Planned angle slot: A8 (Confirmatory)
  Gap flag: No

Tradition 9: Reinforcement learning / sequential decision-making
  Representative terms: MDPs, RLHF, policy optimization, reward-based training,
    long-horizon RL, Q-learning, Bellman equations, agent training
  Planned angle slot: A9 (Confirmatory)
  Gap flag: No

Tradition 10: Multi-agent systems / distributed planning
  Representative terms: multi-agent coordination, cooperative agents, task delegation,
    agent communication, distributed planning, multi-LLM systems
  Planned angle slot: A10 (Confirmatory)
  Gap flag: No

Tradition 11: Evaluation / benchmarking — agent task methodology
  Representative terms: AgentBench, WebArena, GAIA, TaskBench, benchmark design,
    task success rate, evaluation framework
  Planned angle slot: A11 (Confirmatory)
  Gap flag: No

Tradition 12: Retrieval-augmented generation (RAG) — planning support
  Representative terms: RAG, retrieval-augmented planning, external memory,
    knowledge retrieval, dense passage retrieval
  Planned angle slot: A12 (Confirmatory)
  Gap flag: No

Tradition 13: Formal methods / program verification — plan correctness
  Representative terms: formal verification, plan correctness, constraint satisfaction,
    formal specification, temporal logic
  Planned angle slot: A13 (Confirmatory)
  Gap flag: No

Tradition 14: Cognitive science / problem-solving psychology
  Representative terms: planning cognition, executive function, means-ends analysis,
    working memory, goal-directed behavior, problem decomposition
  Planned angle slot: A14 (Confirmatory)
  Gap flag: No

Tradition 15: Safety / reliability — agent failure analysis
  Representative terms: agent failure modes, hallucination, planning breakdown,
    robustness, error recovery, out-of-distribution, negative results
  Planned angle slot: N1 (Null-hypothesis)
  Gap flag: No

Additional planned slots (beyond intake brief traditions):
  D1 (Adversarial): Control systems / AI safety — specification gaming vocabulary
    (NOT from ML/NLP, NOT from Classical AI planning)
  C1 (Cross-disciplinary): Management science / organizational behavior
    (NOT in intake brief — distinct research community)

Traditions NOT yet represented in the planned list:
  Operations research / sequential optimization → PLANNED: A15
  Knowledge representation / ontologies → PLANNED: A16
  Interpretability / explainability → PLANNED: A17

All 15 intake-brief traditions have planned angle slots.
Three additional traditions added: Control systems (D1), Management science (C1),
  Operations research (A15), Knowledge representation (A16), Interpretability (A17).

Total planned angles: 20

Cross-disciplinary slot (required):
  Target tradition: Management science / organizational behavior
  Basis for selection: LLM agents executing delegated multi-step tasks mirror
    organizational delegation problems — management science has studied task decomposition,
    authority boundaries, goal conflict resolution, and plan revision under uncertainty
    for decades using entirely different vocabulary (principal-agent theory, authority
    hierarchy, organizational slack, bounded rationality). This literature is not
    represented in the ML/NLP or AI planning traditions and uses search terms
    that do not appear in arXiv queries.
```

---

## PART 3: TYPE ALLOCATIONS
*(angle-generation.md Step 1)*

```
TYPE ALLOCATIONS
================
Slot A1  (Confirmatory — ML/NLP agent: reasoning/planning architectures)
Slot A2  (Confirmatory — ML/NLP agent: tool use and execution grounding)
Slot A3  (Confirmatory — ML/NLP agent: memory and state management)
Slot A4  (Confirmatory — Classical AI planning: symbolic-neural integration)
Slot A5  (Confirmatory — Classical AI planning: search-based methods)
Slot A6  (Confirmatory — Robotics / embodied AI)
Slot A7  (Confirmatory — HCI / workflow systems)
Slot A8  (Confirmatory — Software engineering / program synthesis)
Slot A9  (Confirmatory — Reinforcement learning / sequential decision-making)
Slot A10 (Confirmatory — Multi-agent systems)
Slot A11 (Confirmatory — Evaluation / benchmarking)
Slot A12 (Confirmatory — RAG / retrieval-augmented planning)
Slot A13 (Confirmatory — Formal methods / plan verification)
Slot A14 (Confirmatory — Cognitive science / problem-solving psychology)
Slot A15 (Confirmatory — Operations research / sequential optimization)
Slot A16 (Confirmatory — Knowledge representation / ontologies)
Slot A17 (Confirmatory — Interpretability / explainability)
Slot N1  (Null-hypothesis — Safety/reliability: where LLM agent planning fails)
Slot D1  (Adversarial — Control systems / AI safety: specification gaming)
           NOT FROM: ML/NLP traditions (A1–A3), Classical AI planning (A4–A5)
Slot C1  (Cross-disciplinary — Management science / organizational behavior)
           NOT in intake brief

Total: 20 slots (17 confirmatory + 1 null-hypothesis + 1 adversarial + 1 cross-disciplinary)
Justification for >12: Hard input — 15 distinct vocabulary traditions from intake brief;
  topic spans at minimum 7 distinct academic disciplines.
```

---

## PART 4: FULL ANGLE LIST
*(angle-generation.md Steps 2–4)*

Coverage-gap conditioning applied per slot: each angle's queries address facets not yet covered by prior slots in the same tradition.

---

### ANGLE 1: LLM Agent Reasoning and Planning Architectures
```
ANGLE 1: LLM Agent Reasoning and Planning Architectures
===========
Vocabulary tradition: ML/NLP — LLM agent systems: reasoning/planning architectures
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Architecture designs, prompting strategies for plan generation, comparative
  performance of ReAct vs. Plan-and-Execute vs. tree-of-thought, scope conditions,
  failure cases reported by authors

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub (agent framework repos: AutoGPT, BabyAGI,
  LangChain agent source; README vocabulary and issue threads)

Queries:
  Q1: LLM agent planning architecture ReAct Plan-and-Execute 2024 2025
  Q2: tree of thought language model multi-step task decomposition planning
  Q3: large language model autonomous agent task planning prompting strategy empirical
  Q4: LLM agent scaffold planning loop subgoal generation architecture comparison

Coverage-gap note: Does not cover hybrid planning where LLM planning is combined
  with a formal symbolic planner — see Angle 4. Does not cover failure cases
  specifically — see Angle 18 (null-hypothesis).
```

---

### ANGLE 2: Tool Use and Action Execution in LLM Agents
```
ANGLE 2: Tool Use and Action Execution in LLM Agents
===========
Vocabulary tradition: ML/NLP — LLM agent systems: tool use and execution grounding
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Tool selection strategies, grounding mechanisms, API call sequencing,
  error handling during execution, empirical success rates on tool-use benchmarks

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub (tool-calling framework repos, OpenAI function-calling
  cookbook, LangGraph tool-use examples; issue threads for real-world failure patterns)

Queries:
  Q1: LLM tool use function calling multi-step task execution grounding 2024 2025
  Q2: language model agent external tools API action execution sequential
  Q3: LLM agent tool selection planning function call error recovery benchmark
  Q4: large language model grounded action execution interleaved reasoning tool

Coverage-gap note: Does not address execution in physical environments (see Angle 6)
  or the state-tracking challenge across tool calls (see Angle 3).
```

---

### ANGLE 3: Memory and State Management in Multi-Step LLM Agents
```
ANGLE 3: Memory and State Management in Multi-Step LLM Agents
===========
Vocabulary tradition: ML/NLP — LLM agent systems: memory and state management
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Memory architecture designs (episodic, semantic, working), context
  management strategies across long tasks, state representation methods, empirical
  degradation of performance over task length

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub (MemGPT, agent memory modules; issue threads
  documenting long-horizon context drift)

Queries:
  Q1: LLM agent memory state management long-horizon multi-step task 2024 2025
  Q2: language model working memory episodic memory planning state tracking
  Q3: agent context window state degradation long task execution performance
  Q4: MemGPT external memory agent architecture sequential task completion

Coverage-gap note: External memory vs in-context memory trade-offs under complex
  branching tasks are under-explored. Interaction between memory and planning
  quality (does richer memory improve plans?) not directly addressed by these queries.
```

---

### ANGLE 4: Symbolic-Neural Integration — LLMs with Classical Planning Formalisms
```
ANGLE 4: Symbolic-Neural Integration — LLMs with Classical Planning Formalisms
===========
Vocabulary tradition: Classical AI planning — symbolic-neural integration
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Architectures combining LLMs with PDDL/HTN planners, quality of
  LLM-generated planning domain descriptions, correctness rates, benchmark comparisons
  against pure LLM approaches, failure modes of hybrid systems

Source type (academic): arXiv cs.AI + cs.CL
Source type (practitioner): Semantic Scholar (ICAPS proceedings — classical planning
  community; distinct from arXiv author population)

Queries:
  Q1: LLM PDDL planning symbolic neural integration task planning 2024 2025
  Q2: language model hierarchical task network HTN planning goal decomposition
  Q3: large language model classical planner integration STRIPS symbolic planning
  Q4: LLM-generated planning domain description correctness evaluation PDDL

Coverage-gap note: PDDL generation quality verification and grounding from natural
  language to formal spec is under-covered by these queries. Temporal planning
  (PDDL2.x) with LLMs is not addressed.
```

---

### ANGLE 5: Search-Based Planning — Tree Search and Lookahead with LLMs
```
ANGLE 5: Search-Based Planning — Tree Search and Lookahead with LLMs
===========
Vocabulary tradition: Classical AI planning — search-based methods with LLMs
Angle type: Confirmatory
Predicted research character: empirical
What to extract: MCTS + LLM architectures, tree-of-thought planning as search,
  world model rollout strategies, compute cost vs accuracy trade-offs, scope
  conditions where search improves over flat prompting

Source type (academic): arXiv cs.AI + cs.LG
Source type (practitioner): GitHub (MCTS + LLM repos: e.g., RAP, Reasoning via
  Planning, tree-search agent implementations)

Queries:
  Q1: LLM Monte Carlo tree search MCTS planning multi-step task 2024 2025
  Q2: language model lookahead tree search beam search planning task execution
  Q3: LLM world model simulation planning rollout exploration long-horizon
  Q4: reasoning via planning LLM heuristic search state-space sequential decision

Coverage-gap note: Compute cost of search-based approaches relative to flat
  prompting at production scale is not well-measured. Search with imperfect
  world models (hallucinated transitions) is a known problem not fully addressed
  by these queries.
```

---

### ANGLE 6: Embodied Agent Task Planning — Robotics and Physical Execution
```
ANGLE 6: Embodied Agent Task Planning — Robotics and Physical Execution
===========
Vocabulary tradition: Robotics / embodied AI — task-and-motion planning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: LLM-based task planning for physical manipulation, TAMP architectures,
  sim-to-real transfer results, failure modes specific to physical grounding,
  benchmark performance on robotics task suites

Source type (academic): arXiv cs.RO + cs.AI; IEEE/RSS/ICRA/CoRL proceedings
  (distinct from arXiv cs.CL author population)
Source type (practitioner): GitHub (SayCan, Code as Policies, robot learning repos
  with LLM planners; README vocabulary differs substantially from NLP framing)

Queries:
  Q1: LLM robot task planning embodied agent physical execution 2024 2025
  Q2: language model task and motion planning TAMP grounding manipulation
  Q3: foundation model embodied agent sequential manipulation task planning execution
  Q4: SayCan code as policies LLM robot instruction following grounding

Coverage-gap note: Sim-to-real transfer for LLM-based planners is not directly
  addressed. Failure modes unique to physical execution (irreversibility, partial
  observability) are under-covered by these queries.
```

---

### ANGLE 7: Workflow Automation and RPA — Enterprise Task Execution
```
ANGLE 7: Workflow Automation and RPA — Enterprise Task Execution
===========
Vocabulary tradition: HCI / workflow systems — workflow automation
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Practitioner frameworks for LLM-based workflow automation, comparison
  with classical RPA tools, implementation patterns, reported failure modes in
  enterprise deployments, human-in-the-loop designs

Source type (academic): arXiv cs.HC + cs.CL; CHI/UIST/CSCW proceedings
Source type (practitioner): Microsoft Tech Blog, Salesforce Research Blog, GitHub
  (enterprise LLM automation repos, Zapier/Make/n8n LLM integration patterns)

Queries:
  Q1: LLM workflow automation robotic process automation RPA multi-step 2024 2025
  Q2: large language model task automation enterprise workflow planning execution
  Q3: LLM agent business process automation sequential task orchestration
  Q4: human-in-the-loop LLM workflow agent intervention override planning

Coverage-gap note: Cost/ROI comparison of LLM-based vs traditional RPA workflows
  is largely practitioner-only (not academic). Security and auditability concerns
  in enterprise LLM agents not addressed here.
```

---

### ANGLE 8: Code Generation Agents as Multi-Step Task Execution
```
ANGLE 8: Code Generation Agents as Multi-Step Task Execution
===========
Vocabulary tradition: Software engineering / program synthesis — code-generation agents
Angle type: Confirmatory
Predicted research character: empirical
What to extract: LLM agent architectures for software engineering tasks, SWE-bench
  performance data, plan-then-code vs interleaved strategies, iterative debugging
  loops, scope conditions where code agents succeed

Source type (academic): arXiv cs.SE + cs.CL; ICSE/FSE/ASE proceedings
  (SE community has distinct vocabulary from NLP community)
Source type (practitioner): GitHub (SWE-bench, Devin, OpenDevin, SWE-agent repos;
  issue threads for observed failure patterns)

Queries:
  Q1: LLM code generation agent multi-step software engineering task 2024 2025
  Q2: language model program synthesis planning subgoal iterative debugging execution
  Q3: SWE-bench LLM agent software development planning evaluation
  Q4: autonomous coding agent planning execution bug fix repository navigation

Coverage-gap note: Long-horizon debugging tasks (multi-file, cross-component) are
  under-covered in benchmarks. Interaction between planning quality and code
  execution feedback loops not directly addressed.
```

---

### ANGLE 9: Reinforcement Learning for LLM Agent Planning
```
ANGLE 9: Reinforcement Learning for LLM Agent Planning
===========
Vocabulary tradition: Reinforcement learning / sequential decision-making
Angle type: Confirmatory
Predicted research character: empirical
What to extract: RL-based training of LLM planners, reward shaping for multi-step
  tasks, RLHF extensions to sequential tasks, comparison of RL-trained vs
  prompted-only agents, sample efficiency findings

Source type (academic): arXiv cs.LG + cs.AI
Source type (practitioner): GitHub (RL-based agent training repos; DeepMind/OpenAI
  agent training codebases)

Queries:
  Q1: reinforcement learning LLM agent planning multi-step task 2024 2025
  Q2: language model RLHF sequential decision making policy optimization agent
  Q3: reward-based training LLM planner long-horizon task completion RL
  Q4: language model MDP Markov decision process planning sequential execution

Coverage-gap note: Reward shaping for multi-step LLM tasks is sparse relative to
  single-step reward models. Credit assignment over long horizons (which step in
  the plan caused failure?) is a known open problem not addressed by these queries.
```

---

### ANGLE 10: Multi-Agent Coordination and Distributed Planning
```
ANGLE 10: Multi-Agent Coordination and Distributed Planning
===========
Vocabulary tradition: Multi-agent systems — coordinated multi-LLM-agent planning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Multi-LLM coordination architectures, task decomposition across
  agents, communication protocols, failure modes unique to multi-agent systems
  (coordination failure, inconsistent plans), benchmark performance

Source type (academic): arXiv cs.MA + cs.AI + cs.CL
Source type (practitioner): GitHub (AutoGen, CrewAI, MetaGPT repos; issue threads
  documenting coordination failures and inter-agent inconsistency)

Queries:
  Q1: multi-agent LLM planning coordination task decomposition 2024 2025
  Q2: multi-LLM agent system collaborative task execution planning communication
  Q3: LLM agent orchestration task delegation distributed planning coordination failure
  Q4: AutoGen MetaGPT multi-agent framework planning execution evaluation

Coverage-gap note: Inter-agent consistency guarantees (do agents produce coherent
  shared plans?) and coordination cost are under-studied. Security of multi-agent
  systems (adversarial agent injection) not addressed.
```

---

### ANGLE 11: Benchmark Design and Evaluation for LLM Agent Planning
```
ANGLE 11: Benchmark Design and Evaluation for LLM Agent Planning
===========
Vocabulary tradition: Evaluation / benchmarking — agent task benchmark methodology
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Benchmark designs (AgentBench, WebArena, GAIA, MINT, TaskBench),
  evaluation methodology choices, ecological validity concerns, measurement of
  planning quality vs execution quality separately, reported limitations of
  current benchmarks

Source type (academic): arXiv cs.CL + cs.AI
Source type (practitioner): GitHub (AgentBench, WebArena, GAIA repos; discussion
  threads on benchmark limitations and leaderboard gaming)

Queries:
  Q1: LLM agent benchmark evaluation multi-step task planning 2024 2025
  Q2: AgentBench WebArena GAIA evaluation framework long-horizon agent task
  Q3: language model agent task success rate evaluation methodology benchmark design
  Q4: LLM agent planning evaluation metric ecological validity real-world gap

Coverage-gap note: Ecological validity of benchmarks relative to real deployment
  tasks is largely underdiscussed in papers that introduce benchmarks. Benchmarks
  that separately measure planning quality vs execution quality are rare.
```

---

### ANGLE 12: RAG-Augmented Planning — Retrieval as External Knowledge for Agents
```
ANGLE 12: RAG-Augmented Planning — Retrieval as External Knowledge for Agents
===========
Vocabulary tradition: Retrieval-augmented generation (RAG) — planning support
Angle type: Confirmatory
Predicted research character: empirical
What to extract: RAG architectures that support multi-step planning, how retrieved
  knowledge is integrated into plan generation, cases where retrieval improves vs
  degrades planning quality, scope conditions

Source type (academic): arXiv cs.IR + cs.CL
Source type (practitioner): Semantic Scholar + GitHub (RAG-based agent frameworks,
  LlamaIndex agent documentation, Haystack agent repos)

Queries:
  Q1: retrieval augmented generation LLM agent planning multi-step task 2024 2025
  Q2: RAG agent knowledge retrieval plan generation task execution long-horizon
  Q3: LLM agent external knowledge base retrieval planning decision making
  Q4: retrieval augmented agent episodic memory long-horizon planning performance

Coverage-gap note: When retrieval degrades planning (by introducing irrelevant
  context) vs when it helps is not well-characterized. RAG + structured planning
  (not just generative) is under-explored.
```

---

### ANGLE 13: Plan Verification and Formal Methods for LLM-Generated Plans
```
ANGLE 13: Plan Verification and Formal Methods for LLM-Generated Plans
===========
Vocabulary tradition: Formal methods / program verification — plan correctness
Angle type: Confirmatory
Predicted research character: gap (nascent literature — expect minimal empirical
  papers; angle purpose includes documenting absence and emerging work)
What to extract: Any formal verification approaches applied to LLM-generated plans,
  constraint satisfaction checking for plans, temporal logic specifications for
  agent tasks, static analysis of LLM action sequences

Source type (academic): arXiv cs.LO + cs.AI + cs.CL; formal methods conference
  proceedings (CAV, TACAS — distinct community from ML)
Source type (practitioner): GitHub (any repos applying formal checking to LLM
  agent outputs — expected low density)

Queries:
  Q1: LLM agent plan verification formal methods correctness checking 2024 2025
  Q2: language model planning constraint satisfaction temporal logic specification
  Q3: formal verification LLM-generated plan safety correctness guarantee
  Q4: neuro-symbolic planning verification LLM symbolic reasoning correctness

Coverage-gap note: This is an emerging area — significant absence of literature
  is an expected finding, not a search failure. Note the gap explicitly if queries
  return <5 relevant papers.
```

---

### ANGLE 14: Cognitive Science — Human Planning Psychology as LLM Agent Design Reference
```
ANGLE 14: Cognitive Science — Human Planning Psychology as LLM Agent Design Reference
===========
Vocabulary tradition: Cognitive science / problem-solving psychology
Angle type: Confirmatory
Predicted research character: empirical (cognitive science literature; distinct
  measurement methods from ML papers)
What to extract: Cognitive models of multi-step planning, executive function
  literature, means-ends analysis, subgoal generation in humans, working memory
  limits on planning, goal hierarchy representations — used as design reference
  for LLM agent architectures

Source type (academic): Cognitive Science journal; Psychological Review; PsycINFO;
  Annual Review of Psychology (distinct from arXiv author population)
Source type (practitioner): deprioritized — academic-heavy tradition with minimal
  practitioner production in this specific angle

Queries:
  Q1: planning problem-solving subgoal decomposition cognitive science working memory
  Q2: human task planning executive function goal hierarchy means-ends analysis
  Q3: LLM planning cognitive model analogy human problem solving comparison
  Q4: mental simulation planning prefrontal cortex goal-directed behavior psychology

Coverage-gap note: Direct empirical comparison of LLM planning behavior to human
  planning psychology is rare. Most cognitive science literature predates LLMs and
  does not address agent architectures directly — translation work is required.
```

---

### ANGLE 15: Operations Research — Multi-Step Task Planning as Sequential Optimization
```
ANGLE 15: Operations Research — Multi-Step Task Planning as Sequential Optimization
===========
Vocabulary tradition: Operations research / sequential optimization
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Formulations of LLM agent planning as scheduling or combinatorial
  optimization problems, constraint satisfaction approaches, comparisons between
  OR solvers and LLM planners on structured task sequences, task sequencing
  under resource constraints

Source type (academic): arXiv cs.AI + math.OC; Operations Research journal;
  INFORMS proceedings (distinct from ML/NLP community)
Source type (practitioner): Semantic Scholar (bridging papers often appear in
  applied OR venues not indexed on arXiv)

Queries:
  Q1: LLM task scheduling sequential optimization constraint satisfaction 2024 2025
  Q2: language model planning combinatorial optimization task sequencing operations research
  Q3: LLM agent task planning formulation scheduling job shop sequencing
  Q4: constraint programming LLM planning integration sequential task execution

Coverage-gap note: LLM-based planners vs OR solvers on structured task domains
  is under-explored. Whether LLM planners can handle hard combinatorial constraints
  is largely unanswered.
```

---

### ANGLE 16: Knowledge Representation and Ontologies — Structured Grounding for Agent Plans
```
ANGLE 16: Knowledge Representation and Ontologies — Structured Grounding for Agent Plans
===========
Vocabulary tradition: Knowledge representation / ontologies
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Use of knowledge graphs, ontologies, and structured knowledge
  in LLM agent planning, entity-linking for grounding action sequences, comparisons
  of structured-knowledge-augmented agents vs unaugmented, scope conditions

Source type (academic): arXiv cs.AI + cs.IR; Semantic Web journal; ISWC/ESWC
  proceedings (knowledge representation community — distinct from NLP community)
Source type (practitioner): GitHub (knowledge graph + LLM agent repos;
  Wikidata/Freebase-augmented planning implementations)

Queries:
  Q1: knowledge graph LLM agent planning grounding task execution 2024 2025
  Q2: ontology language model agent structured knowledge planning reasoning
  Q3: LLM agent entity linking knowledge base task planning grounding
  Q4: neuro-symbolic knowledge representation LLM planning structured world model

Coverage-gap note: Integration of dynamically updated knowledge graphs (reflecting
  execution state changes) with LLM planners is under-explored. Most papers use
  static knowledge bases.
```

---

### ANGLE 17: Interpretability — How LLMs Form Internal Planning Representations
```
ANGLE 17: Interpretability — How LLMs Form Internal Planning Representations
===========
Vocabulary tradition: Interpretability / explainability
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Mechanistic evidence of planning representations inside LLMs,
  chain-of-thought faithfulness studies, probing experiments for plan-related
  activations, scratchpad transparency analysis, divergence between stated plan
  and actual behavior

Source type (academic): arXiv cs.LG + cs.CL (interpretability subcommunity)
Source type (practitioner): Anthropic/DeepMind/OpenAI research blog posts;
  Alignment Forum posts on planning circuits

Queries:
  Q1: LLM planning mechanistic interpretability chain-of-thought faithfulness 2024 2025
  Q2: language model internal planning representation probing activation analysis
  Q3: chain-of-thought scratchpad transparency planning faithfulness agent
  Q4: LLM planning behavior divergence stated plan actual execution interpretability

Coverage-gap note: Whether LLMs genuinely "plan" in a computationally meaningful
  sense vs. produce plan-like text is the core contested question — interpretability
  evidence is the primary lever, but the field is early.
```

---

### ANGLE 18: Failure Modes and Null Results — Where LLM Agent Planning Breaks
*(Null-hypothesis angle — required structural slot)*

```
ANGLE 18: Failure Modes and Null Results — Where LLM Agent Planning Breaks
===========
Vocabulary tradition: Safety / reliability — LLM agent planning failure analysis
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Conditions under which LLM agent planning fails, scope limitations
  reported in empirical papers, out-of-distribution generalization failures, negative
  results, replanning failures, cases where agents reach wrong conclusions or fail
  to complete tasks, failure taxonomies

Source type (academic): arXiv cs.AI + cs.CL
Source type (practitioner): GitHub (issue threads on agent framework repos — the
  primary location where real-world failure cases are documented; LangChain/AutoGen
  issue trackers; Reddit r/MachineLearning failure reports)

Queries:
  Q1: LLM agent planning failure hallucination multi-step task breakdown 2024 2025
  Q2: LLM agent planning does not generalize out-of-distribution failure limitation
  Q3: language model agent negative result planning unreliable benchmark failure mode
  Q4: LLM agent task planning robustness failure recovery replanning breakdown

Coverage-gap note: A systematic taxonomy of LLM agent planning failure modes does
  not yet exist in the literature. Most failure cases are reported incidentally
  in empirical papers rather than as primary findings. This angle is expected to
  return scattered evidence requiring synthesis.
```

---

### ANGLE 19: Specification Gaming and Misaligned Execution
*[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]*

```
ANGLE 19: Specification Gaming and Misaligned Execution in LLM Agents
===========
Vocabulary tradition: Control systems / AI safety — specification gaming
Angle type: Adversarial-FLAGGED
  [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior
   confirmatory results — running this angle after reading confirmatory
   results will import the confirmatory vocabulary frame and suppress
   disconfirming findings]
Predicted research character: empirical
What to extract: Cases where LLM agents achieve specified task metrics via
  unintended means, goal misgeneralization in multi-step task contexts,
  deceptive alignment patterns in planning agents, unintended side effects
  from task execution, specification ambiguity exploitation

Source type (academic): arXiv cs.AI (AI safety subcommunity); Alignment Forum;
  DeepMind Safety Research technical reports; ICML/NeurIPS safety workshops
Source type (practitioner): AI Alignment Forum; LessWrong (practitioner safety
  community — distinct vocabulary from ML conferences)

Generation note: Generated from specification gaming / control systems vocabulary,
  EXCLUDING the following terms used in prior confirmatory slots: ReAct,
  chain-of-thought, tool use, function calling, planning architecture,
  task decomposition, agent benchmark, AgentBench, WebArena, PDDL, MCTS,
  RAG, workflow automation, program synthesis.

Queries:
  Q1: LLM agent specification gaming reward hacking misaligned behavior 2024 2025
  Q2: autonomous agent goal misgeneralization deceptive alignment multi-step task
  Q3: AI agent unintended side effect task execution specification ambiguity
  Q4: language model agent misalignment long-horizon task reward gaming

Coverage-gap note: Empirical measurement of specification gaming frequency in
  production LLM agent deployments is essentially absent. Theoretical frameworks
  from AI safety (Goodhart's Law, Goodhart-like dynamics) are more developed than
  empirical evidence.
```

---

### ANGLE 20: Organizational Delegation and Authority Hierarchies in Task Assignment
*(Cross-disciplinary slot — tradition NOT in intake brief)*

```
ANGLE 20: Organizational Delegation and Authority Hierarchies in Task Assignment
===========
Vocabulary tradition: Management science / organizational behavior
  [NOT in intake brief — cross-disciplinary slot]
Angle type: Cross-disciplinary
Predicted research character: consensus (management science literature; uses
  different measurement methods from empirical ML)
What to extract: Organizational theory on task delegation, authority hierarchy
  design, goal conflict resolution in hierarchical structures, plan revision
  under uncertainty, principal-agent theory as applied to LLM agent design,
  bounded rationality and satisficing in multi-step task contexts

Source type (academic): Management Science journal; Organization Science;
  Harvard Business Review (academic); INFORMS — distinct community from arXiv
Source type (practitioner): deprioritized — translation from management science
  theory to LLM agent design requires academic grounding

Queries:
  Q1: task delegation authority hierarchy goal decomposition organizational behavior
  Q2: principal-agent theory information asymmetry task planning delegation uncertainty
  Q3: bounded rationality satisficing multi-step task planning decision-making organization
  Q4: goal conflict resolution organizational planning hierarchy task interruption replanning

Coverage-gap note: Direct empirical mapping between organizational delegation theory
  and LLM agent architecture design does not exist — this angle documents a
  cross-disciplinary gap that could produce design insights not available from
  ML-internal literature alone.
```

---

## PART 5: GATE SUMMARY
*(angle-quality.md — all four gates)*

### Gate 1 — Completeness checks

- [x] **Null-hypothesis angle present:** Angle 18 is framed explicitly as failure modes and null results. Query strings contain: "failure," "does not generalize," "negative result," "failure mode," "breakdown," "unreliable." PASS.
- [x] **Adversarial angle present:** Angle 19 carries the label `[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]`. PASS.
- [x] **Cross-disciplinary angle present:** Angle 20 targets Management science / organizational behavior, which was NOT listed in the intake brief's candidate vocabulary traditions. The tradition label in Angle 20 explicitly notes "[NOT in intake brief — cross-disciplinary slot]." PASS.
- [x] **Source-type coverage:** Intake brief flagged domain as "mixed" — at least one practitioner source required. Multiple angles include GitHub (Angles 1, 2, 3, 4, 5, 6, 7, 8, 10, 11), practitioner blogs (Angles 7, 17), and Alignment Forum (Angle 19). PASS.
- [x] **Vocabulary-tradition map populated:** Coverage map (Part 2) has 20 distinct tradition names. PASS.

**Gate 1: PASS**

---

### Gate 2 — Distinctness checks

**Boolean-connective test (high-risk pairs checked):**

| Pair | Most distinctive term from A | Appears in B? | Verdict |
|------|------------------------------|---------------|---------|
| Angle 1 (ReAct, planning prompts) vs Angle 2 (tool use, function calling) | "ReAct" / "planning architecture" | No | PASS |
| Angle 1 (reasoning architectures) vs Angle 3 (memory, state management) | "chain-of-thought" | No — A3 uses "working memory," "episodic memory," "state tracking" | PASS |
| Angle 4 (PDDL, symbolic) vs Angle 5 (MCTS, tree search) | "PDDL" | No — A5 uses "Monte Carlo," "lookahead," "rollout" | PASS |
| Angle 12 (RAG, retrieval) vs Angle 16 (knowledge graph, ontology) | "retrieval augmented generation" | No — A16 uses "knowledge graph," "ontology," "entity linking" | PASS |
| Angle 9 (RL, RLHF) vs Angle 15 (OR, scheduling) | "reinforcement learning" / "RLHF" | No — A15 uses "scheduling," "combinatorial optimization," "CSP" | PASS |
| Angle 18 (failure modes, null-hypothesis) vs Angle 19 (specification gaming, adversarial) | "does not generalize" / "failure modes" | No — A19 uses "specification gaming," "goal misgeneralization," "reward hacking" | PASS |
| Angle 6 (embodied, robotics) vs Angle 2 (tool use) | "TAMP," "manipulation," "embodied" | No | PASS |
| Angle 8 (code generation) vs Angle 1 (planning architectures) | "SWE-bench," "software engineering" | No | PASS |

No pair fails the Boolean-connective test.

**Vocabulary-tradition distinctness:**
All 20 angles have distinct tradition labels. No two non-null/non-adversarial angles share a tradition label. PASS.

**Gate 2: PASS**

---

### Gate 3 — Launchability checks

All 20 angles verified:

- [x] **All have at least one concrete query string:** Each angle has 4 runnable queries. No descriptions, no questions, no placeholders. PASS.
- [x] **No placeholder vocabulary:** "TBD," "to be determined," "[fill in]" — absent from all angle records. PASS.
- [x] **Source type named specifically:** All angles name specific platforms (arXiv with category, GitHub, Semantic Scholar, ICAPS proceedings, Operations Research journal, Cognitive Science journal, Management Science journal, etc.). No vague "some database" language. PASS.

**Gate 3: PASS**

---

### Gate 4 — Scoring prohibition

- [x] **No LLM self-evaluation ranking:** Angles were allocated by structural slot (tradition coverage, type allocation). No angle was filtered by "which seems most promising" or equivalent. Allocation record in Part 3 is the evidence of structural-criteria-only allocation. PASS.
- [x] **No implicit quality assessment:** No angle record contains phrases like "this is the strongest angle" or "this is likely most useful." Removed during draft review. PASS.

**Gate 4: PASS**

---

### Overall gate summary

```
GATE SUMMARY
============
Gate 1 — Completeness: PASS
Gate 2 — Distinctness: PASS — no pairs flagged; no small-literature exceptions needed
Gate 3 — Launchability: PASS
Gate 4 — Scoring prohibition: PASS

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG: All 20 traditions were enumerated by LLM only.
     Source B (survey-paper probe) was unavailable. Expected coverage: MODERATE,
     not FULL. A Source B pass using:
       "LLM agent planning survey 2024 2025"
       "autonomous agent multi-step task execution survey"
     is recommended before treating this list as exhaustively covering all traditions.
     Traditions most likely to be missing: fields underrepresented in LLM training
     (non-English AI planning literature, specialized industrial planning communities).
  2. Adversarial angle (Angle 19) must be dispatched in a SEPARATE research context
     with no prior confirmatory results loaded. The ADVERSARIAL-FLAGGED label records
     this requirement; downstream enforcement is outside this kit's scope.
  3. Angle 13 (Formal methods) and Angle 14 (Cognitive science) have predicted
     research character = gap or low-density empirical. If <5 papers found after
     running queries, document absence explicitly — that is a meaningful finding,
     not a search failure.
```

---

## Summary statistics

| Dimension | Count |
|-----------|-------|
| Total angles | 20 |
| Confirmatory | 17 |
| Null-hypothesis | 1 |
| Adversarial | 1 |
| Cross-disciplinary | 1 |
| Distinct tradition labels | 20 |
| Distinct parent-discipline traditions | 17 |
| Angles with practitioner source | 15 |
| Angles with academic source only | 5 |
| Angles predicted gap/low-density | 2 (Angles 13, 20) |

**Hard input justification logged:** 15 vocabulary traditions identified at intake; topic spans ML/NLP, classical AI, robotics, HCI, cognitive science, software engineering, RL, multi-agent systems, evaluation methodology, retrieval, formal methods, interpretability, operations research, knowledge representation, management science. 20 angles with 17 distinct parent traditions. Procedure threshold (≥4 traditions for hard-input 20–30 range) is met at 15 traditions.
