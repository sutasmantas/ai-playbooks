# Angle-Gen-Kit Output — Input 9, Condition C

**Topic:** How multiple LLM agents coordinate to solve tasks
**Condition:** C (subagent / no web search context)
**Date:** 2026-07-05

---

## INTAKE BRIEF
============

**Topic:** How multiple LLM agents coordinate to collectively solve tasks — the mechanisms, architectures, failure modes, and theoretical foundations of multi-agent LLM systems.

**Anchor vocabulary:** "LLM agents" (ML systems + agent-AI tradition), "coordinate" (multi-agent systems + distributed systems tradition), "solve tasks" (AI planning + task-oriented agents tradition)

**Candidate vocabulary traditions:**

1. Classical multi-agent systems / AI planning — coordination protocols, belief-desire-intention (BDI), contract net protocol, FIPA ACL, distributed problem solving, agent communication language, coalition formation
2. LLM/NLP research — language model agents, agent loops, ReAct, tool use, chain-of-thought, function calling, AutoGPT, MetaGPT, AgentVerse, AutoGen, orchestrator patterns
3. Distributed systems — workflow orchestration, message passing, DAG execution, fault tolerance, consistency, saga pattern, event-driven architecture
4. HCI / human-AI collaboration — human-in-the-loop, mixed-initiative systems, human oversight, trust calibration, delegation, escalation protocols
5. Software engineering / systems — agent pipeline design patterns, microservices, function calling, reliability engineering, production deployment, DevOps
6. Organizational behavior / management science — division of labor, role specialization, delegation, coordination costs, team dynamics, management overhead, collective decision making
7. Game theory / computational economics — mechanism design, cooperative game theory, Nash equilibrium, incentive alignment, auction theory, coalition stability
8. Cognitive science / psychology — distributed cognition, emergent collective behavior, swarm intelligence, collective intelligence, group problem solving

NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

**Question type:** EXPLORATORY
(No comparison language or intervention-outcome structure in the prompt. The question asks "how" — what the space of mechanisms, architectures, and findings looks like.)

**Scope markers:** None stated — inferred scope: coordination mechanisms across LLM agent systems, encompassing architecture, communication, task decomposition, failure modes, and evaluation. Not restricted to any particular model family, framework, or application domain.

**Known exclusions:** None stated

**Domain maturity estimate:** MIXED
Basis: The anchor vocabulary spans academic research ("coordinate," "agents," "solve tasks" — MAS and NLP traditions) and active practitioner production (AutoGPT, LangGraph, CrewAI, MetaGPT, AutoGen are all deployed frameworks with GitHub activity). This is a fast-moving domain where practitioner frameworks often precede academic formalization.

**Survey paper status:** NOT FOUND — Source B unavailable. Vocabulary-discovery pass recommended before accepting the angle list as covering all traditions.

**Source B status:** UNAVAILABLE — MODERATE — Source A + Source C together identified 8 distinct vocabulary traditions spanning classical MAS, NLP, distributed systems, HCI, software engineering, organizational science, game theory, and cognitive science. MODERATE severity: proceed with VOCABULARY SELF-REPORT FLAG.

**VOCABULARY SELF-REPORT FLAG:** PRESENT — all vocabulary traditions enumerated by LLM only (no survey paper, no web search). Expected coverage: MODERATE. Cross-disciplinary angles may miss traditions that only appear in survey-paper title vocabulary. A Source B pass in a context with web access is recommended before finalizing the angle list.

**Absent-term signal (Source C):** The user did NOT use:
- "task decomposition" — key mechanism in agent planning literature
- "BDI" / "belief-desire-intention" — classical MAS vocabulary
- "emergent behavior" — complex systems / cognitive science framing
- "role specialization" — organizational / management science framing
- "hallucination propagation" — failure mode in multi-agent chains
- "orchestration" — distributed systems / software engineering framing
- "swarm intelligence" — biological / collective AI framing
- "incentive alignment" — game theory / alignment framing
- "human oversight" — HCI / safety framing
- Specific framework names: AutoGen, MetaGPT, CrewAI, LangGraph, LangChain

**Intake gate check:**
- [x] Topic field populated
- [x] Candidate vocabulary traditions: 8 entries (>2 required)
- [x] Question type: EXPLORATORY

Gate passed. Proceeding to angle generation.

---

## COVERAGE MAP
============

**Tradition 1: Classical multi-agent systems / AI planning**
  Representative terms: coordination protocols, BDI, contract net, FIPA ACL, coalition formation, distributed problem solving
  Planned angle slots: A1 (coordination protocols), A2 (task allocation)
  Gap flag: no

**Tradition 2: LLM/NLP research**
  Representative terms: LLM agents, ReAct, agent loop, tool use, chain-of-thought, function calling, AutoGen, MetaGPT
  Planned angle slots: A3 (agent frameworks), A4 (task decomposition), A5 (inter-agent communication), A6 (hierarchical orchestration), A12 (evaluation benchmarks)
  Gap flag: no

**Tradition 3: Distributed systems**
  Representative terms: workflow orchestration, DAG, message passing, fault tolerance, consistency, event-driven
  Planned angle slots: A7 (workflow orchestration)
  Gap flag: no

**Tradition 4: HCI / human-AI collaboration**
  Representative terms: human-in-the-loop, mixed-initiative, oversight, trust, delegation, escalation
  Planned angle slots: A11 (human oversight)
  Gap flag: no

**Tradition 5: Software engineering / systems**
  Representative terms: agent pipeline patterns, microservices, function calling, reliability, production deployment
  Planned angle slots: A8 (agent pipeline design)
  Gap flag: no

**Tradition 6: Organizational behavior / management science**
  Representative terms: division of labor, role specialization, delegation, coordination costs, team dynamics
  Planned angle slots: A9 (role specialization), D1 (adversarial — coordination critique)
  Gap flag: no

**Tradition 7: Game theory / computational economics**
  Representative terms: mechanism design, cooperative game theory, Nash equilibrium, incentive alignment, auctions
  Planned angle slots: A10 (mechanism design)
  Gap flag: no

**Tradition 8: Cognitive science / psychology**
  Representative terms: distributed cognition, emergent behavior, collective intelligence, group cognition
  Planned angle slots: A14 (emergent collective behavior), A15 (agent memory and cognitive architecture)
  Gap flag: no

**Traditions NOT yet represented in the planned list:**
  - Formal methods / verification: not in intake brief traditions — added as A16 (identified during vocabulary discovery as a relevant adjacent field)
  - AI safety / alignment: touches traditions 2 and 6 but has its own publication community — added as A13

**Cross-disciplinary slot (required):**
  Target tradition: Biology — swarm intelligence and collective computation (NOT in the intake brief)
  Basis for selection: Swarm intelligence research (stigmergy, ant colony optimization, bee colony algorithms) provides non-LLM mechanisms for distributed task coordination that are directly analogous to the agent coordination problem. This tradition produces literature that NLP/MAS researchers often cite as prior art but that is not part of any of the 8 identified traditions.

**Hard-input justification:**
  This topic has 8 distinct vocabulary traditions at intake. Per angle-generation.md: "20–30 angles is appropriate when ≥4 distinct vocabulary traditions are identified." Target: ~19 angles.

---

## TYPE ALLOCATIONS
================

```
Slot A1  (Confirmatory — Classical MAS — coordination protocols)
Slot A2  (Confirmatory — Operations research — task allocation)
Slot A3  (Confirmatory — LLM agent frameworks)
Slot A4  (Confirmatory — LLM task decomposition and planning)
Slot A5  (Confirmatory — LLM inter-agent communication protocols)
Slot A6  (Confirmatory — Hierarchical multi-agent orchestration)
Slot A7  (Confirmatory — Distributed systems — workflow orchestration)
Slot A8  (Confirmatory — Software engineering — agent pipeline design)
Slot A9  (Confirmatory — Organizational behavior — role specialization)
Slot A10 (Confirmatory — Game theory / computational economics)
Slot A11 (Confirmatory — HCI — human-in-the-loop oversight)
Slot A12 (Confirmatory — Multi-agent evaluation and benchmarks)
Slot A13 (Confirmatory — AI safety / alignment in multi-agent systems)
Slot A14 (Confirmatory — Cognitive science — emergent collective behavior)
Slot A15 (Confirmatory — Cognitive architecture — cross-agent memory and state)
Slot A16 (Confirmatory — Formal methods — agent system verification)
Slot N1  (Null-hypothesis — Evidence that LLM agent coordination fails or does not improve performance)
Slot D1  (Adversarial — Management science / organizational theory critique)
         NOT FROM: LLM, language model, neural network, transformer, AI, machine learning, agent framework, ReAct, AutoGen
Slot C1  (Cross-disciplinary — Biology — swarm intelligence)
```

Total: 16 confirmatory + 1 null-hypothesis + 1 adversarial + 1 cross-disciplinary = **19 angles**

---

## ANGLE LIST
===========

---

ANGLE 1: Classical MAS Coordination Protocols and Communication Languages
===========
Vocabulary tradition: Classical multi-agent systems — coordination protocols
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Specific coordination protocols, communication language standards (FIPA ACL), proof-of-concept implementations, scope conditions under which formal coordination succeeds vs. degrades, comparisons between protocol variants.

Source type (academic): arXiv cs.MA + cs.AI; ACM Digital Library (AAMAS conference proceedings)
Source type (practitioner): GitHub repositories implementing FIPA-compliant agents; technical reports from JADE/JACK/Jason agent platforms

Queries:
  Q1: multi-agent coordination protocols belief-desire-intention BDI agent communication language FIPA
  Q2: contract net protocol task delegation multi-agent distributed problem solving negotiation
  Q3: agent coordination mechanisms multi-agent systems survey planning commitment 2022 2023 2024

Coverage-gap note: Queries will retrieve classical MAS literature but may miss the specific sub-field of LLM agents reimplementing classical protocols. A follow-up angle on "LLM agents adopting BDI or ACL" may be needed after initial retrieval.

---

ANGLE 2: Task Allocation and Assignment Mechanisms in Agent Teams
===========
Vocabulary tradition: Operations research — combinatorial task allocation in agent systems
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Formulations of multi-agent task assignment as optimization problems, algorithm performance benchmarks, tradeoffs between centralized vs. distributed allocation, scalability limits, failure modes under dynamic task arrival.

Source type (academic): arXiv cs.MA + cs.GT; IEEE Transactions on Cybernetics; Journal of Autonomous Agents and Multi-Agent Systems
Source type (practitioner): GitHub repositories for multi-robot task planning; technical whitepapers from warehouse robotics systems (Amazon, logistics)

Queries:
  Q1: multi-agent task allocation assignment optimization combinatorial distributed 2022 2024
  Q2: coalition formation task assignment heterogeneous agents auction mechanism 2023 2024
  Q3: dynamic task allocation multi-agent scheduling constraint satisfaction decomposition

Coverage-gap note: This angle is centered on formal optimization; it may miss heuristic or emergent allocation strategies used in LLM agent systems. Angle A3 and A6 cover those.

---

ANGLE 3: LLM Agent Frameworks — Architecture and Capabilities
===========
Vocabulary tradition: NLP/ML — LLM agent frameworks and implementations
Angle type: Confirmatory
Predicted research character: consensus (practitioner frameworks), empirical (benchmark studies)
What to extract: Architecture patterns in deployed agent frameworks, comparison of framework capabilities, which coordination patterns each framework embeds, performance on standard tasks, limitation reports from practitioners.

Source type (academic): arXiv cs.CL + cs.LG; NeurIPS / ICLR / ACL proceedings
Source type (practitioner): GitHub (AutoGen, LangGraph, CrewAI, MetaGPT, AgentVerse repositories); technical blog posts (Lilian Weng, Microsoft Research, Anthropic)

Queries:
  Q1: LLM multi-agent framework AutoGen MetaGPT CrewAI AgentVerse survey comparison 2024 2025
  Q2: language model agent architecture tool use autonomous agent loop ReAct 2023 2024 2025
  Q3: multi-agent LLM system design collaboration framework benchmark evaluation 2024 2025

Coverage-gap note: Fast-moving area — framework landscape changes significantly between years. Apply date filter 2024–2025 when possible. Post-2023 niche framework names benefit from SPECIFICITY GATE APPLIED on individual framework queries.

---

ANGLE 4: Task Decomposition and Hierarchical Planning in LLM Agents
===========
Vocabulary tradition: NLP — task decomposition and hierarchical planning in language models
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for decomposing complex tasks into subtasks, quality of decomposition (correctness, coverage), how decomposition interacts with multi-agent assignment, plan revision under failure, comparison with single-agent approaches.

Source type (academic): arXiv cs.CL + cs.AI; ACL / EMNLP / NAACL proceedings
Source type (practitioner): GitHub (task planning libraries, chain-of-thought notebooks); technical reports from LLM labs on agent planning

Queries:
  Q1: large language model task decomposition hierarchical planning subtask generation 2023 2024 2025
  Q2: LLM agent plan generation plan execution step decomposition chain-of-thought multi-step 2024
  Q3: language model planning complex tasks breakdown divide conquer reasoning evaluation 2023 2024

Coverage-gap note: Queries retrieve LLM-specific decomposition. Classical AI planning (STRIPS, HTN) is covered in Angle 1. The gap between the two traditions (can LLM agents learn classical planning structure?) is not explicitly covered here — consider a follow-up angle if this gap materializes.

---

ANGLE 5: Inter-Agent Communication Protocols in LLM Systems
===========
Vocabulary tradition: NLP/ML — agent-to-agent communication and message structure
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How LLM agents structure messages to each other (structured vs. natural language), whether message format affects task performance, shared memory / blackboard vs. direct messaging, protocols for passing partial results or errors between agents.

Source type (academic): arXiv cs.CL + cs.MA; ACL / EMNLP proceedings
Source type (practitioner): GitHub (LangGraph, AutoGen communication layer); blog posts on agent message design

Queries:
  Q1: multi-LLM agent communication message passing protocol structured natural language 2024 2025
  Q2: agent-to-agent conversation shared memory blackboard LLM information passing coordination
  Q3: inter-agent communication format JSON structured output protocol language model agent 2024

Coverage-gap note: The question of whether explicit communication protocols outperform implicit (via shared memory or state) is a research gap not well-covered by current queries. The null-hypothesis angle (N1) covers the case where communication fails.

---

ANGLE 6: Hierarchical Orchestrator–Subagent Architectures
===========
Vocabulary tradition: Hierarchical multi-agent orchestration (NLP/systems)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Architectures separating orchestrator from executor agents, task dispatch mechanisms, feedback loops from executors to orchestrators, performance comparisons with flat agent topologies, failure propagation from subagents upward.

Source type (academic): arXiv cs.CL + cs.LG; NeurIPS / ICLR proceedings
Source type (practitioner): GitHub (AutoGen nested chat, LangGraph supervisor patterns); Microsoft Research multi-agent blog posts

Queries:
  Q1: LLM orchestrator subagent hierarchical architecture manager worker executor 2024 2025
  Q2: multi-agent LLM planner executor role separation supervisor worker pipeline 2024 2025
  Q3: hierarchical agent system planning execution feedback loop multi-agent delegation LLM

Coverage-gap note: These queries surface explicit hierarchical designs. Flat (peer-to-peer) agent topologies are covered in Angles 3 and 5. Hybrid topologies (dynamic hierarchy) may fall between angles.

---

ANGLE 7: Distributed Systems — Workflow Orchestration Patterns for Agent Coordination
===========
Vocabulary tradition: Distributed systems — workflow orchestration
Angle type: Confirmatory
Predicted research character: consensus (engineering patterns), empirical (reliability studies)
What to extract: DAG-based workflow patterns applied to agent coordination, consistency guarantees, retry and compensation mechanisms, fault tolerance patterns (saga, circuit breaker), how distributed systems primitives transfer to LLM agent systems.

Source type (academic): arXiv cs.DC + cs.SE; IEEE / ACM distributed systems conference proceedings (SOSP, OSDI, EuroSys)
Source type (practitioner): Blog posts on Temporal, Prefect, Airflow in AI pipelines; technical documentation on workflow-as-code approaches for LLM agents

Queries:
  Q1: workflow orchestration distributed systems agent coordination fault tolerance DAG 2023 2024
  Q2: saga pattern distributed workflow consistency agent pipeline compensation retry
  Q3: stateful agent workflow orchestration reliability consistency event-driven coordination 2024 2025

Coverage-gap note: This angle draws from distributed systems, not LLM literature. Retrieval may produce results about microservice choreography that are not directly about LLM agents — manual filtering required to find papers applying these patterns to LLM agent systems specifically.

---

ANGLE 8: Software Engineering — Agent Pipeline Design Patterns and Reliability
===========
Vocabulary tradition: Software engineering — LLM agent pipeline design and reliability
Angle type: Confirmatory
Predicted research character: consensus (practitioner patterns), empirical (reliability case studies)
What to extract: Engineering patterns for building multi-agent pipelines, failure modes practitioners encounter in production, observability approaches, testing strategies, patterns for handling non-determinism in LLM agent chains.

Source type (academic): arXiv cs.SE + cs.CL; ICSE / FSE / ASE conference proceedings
Source type (practitioner): GitHub issues on AutoGen / LangChain / CrewAI repositories; practitioner blog posts (Towards Data Science, Engineering at Meta, etc.); Stack Overflow multi-agent threads

Queries:
  Q1: LLM agent pipeline engineering design patterns reliability failure production 2024 2025
  Q2: multi-agent system architecture software engineering best practices testing observability 2024
  Q3: agentic AI application reliability non-determinism evaluation production deployment 2024 2025

Coverage-gap note: Stack Overflow and GitHub issue threads are the best vocabulary source for practitioner failure vocabulary that does not appear in academic papers. Recommend a separate GitHub-issue-vocabulary pass before treating this angle as saturated.

---

ANGLE 9: Organizational Behavior — Role Specialization and Division of Labor in Agent Teams
===========
Vocabulary tradition: Organizational behavior — role specialization in agent teams
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Evidence that role specialization improves multi-agent performance, optimal team compositions, tradeoffs between specialists and generalists, how LLM agent "role" assignments compare to organizational role theory, emergent role formation.

Source type (academic): arXiv cs.CL + cs.AI; Management science journals (Organization Science, Journal of Applied Psychology) for human team analogs
Source type (practitioner): Technical blog posts on role design in MetaGPT, CrewAI (both use explicit role assignment); practitioner conference talks on agent team design

Queries:
  Q1: multi-agent LLM role specialization division of labor task performance 2024 2025
  Q2: agent role assignment persona specialization team coordination language model performance 2024
  Q3: organizational structure AI agent teams specialist generalist performance tradeoff collaboration

Coverage-gap note: The organizational behavior literature may use "role theory" and "functional specialization" vocabulary not common in NLP papers. A PubMed/PsycINFO search for "human team role specialization" may surface transferable findings not in arXiv.

---

ANGLE 10: Game Theory — Mechanism Design and Incentive Alignment in Multi-Agent LLM Systems
===========
Vocabulary tradition: Game theory / computational economics
Angle type: Confirmatory
Predicted research character: empirical (theoretical results), gap (applied to LLM agents)
What to extract: Game-theoretic formulations of multi-agent coordination, mechanism design approaches to incentive alignment, Nash equilibrium analysis of agent interaction, cooperative vs. competitive agent behaviors, stability of agent coalitions.

Source type (academic): arXiv cs.GT + cs.AI + cs.MA; EC (Economics and Computation) conference proceedings; Journal of Economic Theory
Source type (practitioner): Technical reports on multi-agent RL alignment; AI safety organization whitepapers

Queries:
  Q1: multi-agent LLM game theory mechanism design incentive alignment cooperative 2023 2024 2025
  Q2: language model agent cooperation game theory Nash equilibrium coordination problem 2024
  Q3: mechanism design AI agent reward alignment cooperation defection multi-agent 2023 2024

Coverage-gap note: This angle is marked PREDICTED RESEARCH CHARACTER: gap partly because the application of mechanism design specifically to LLM multi-agent systems (as opposed to multi-agent RL or classical MAS) is an emerging research direction. Expect limited literature, which is itself a finding.

---

ANGLE 11: HCI — Human Oversight, Trust Calibration, and Mixed-Initiative Control
===========
Vocabulary tradition: HCI — human-in-the-loop multi-agent system oversight
Angle type: Confirmatory
Predicted research character: empirical
What to extract: How humans maintain oversight over multi-agent systems, what intervention points exist, how trust is calibrated across agent teams, failure modes when human oversight is reduced, design patterns for escalation protocols.

Source type (academic): arXiv cs.HC + cs.CL; ACM CHI / CSCW proceedings; IEEE Transactions on Human-Machine Systems
Source type (practitioner): Practitioner blog posts on human-in-the-loop AI pipelines; product documentation for agent oversight dashboards

Queries:
  Q1: human-in-the-loop multi-agent LLM oversight control trust calibration 2024 2025
  Q2: mixed-initiative AI agent human intervention escalation protocol autonomous oversight
  Q3: human oversight autonomous agent delegation trust adjustment failure recovery 2024 2025

Coverage-gap note: CHI and CSCW proceedings are not well-indexed in arXiv; ACM Digital Library is the correct source for this angle. The arXiv cs.HC category is thin. Platform recommendation: ACM Digital Library + Semantic Scholar citation search.

---

ANGLE 12: Evaluation and Benchmarks for Multi-Agent LLM Task Performance
===========
Vocabulary tradition: NLP evaluation — multi-agent task benchmarks
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Existing multi-agent benchmarks, metrics used to evaluate coordination quality (not just task success), how benchmarks handle credit assignment across agents, benchmark limitations, comparisons between single-agent and multi-agent performance.

Source type (academic): arXiv cs.CL + cs.AI; NeurIPS / ICLR / ACL Anthology proceedings
Source type (practitioner): GitHub benchmark repositories (AgentBench, WebArena, GAIA, etc.); leaderboard discussions

Queries:
  Q1: multi-agent LLM benchmark evaluation task coordination performance 2024 2025
  Q2: agent coordination evaluation metric credit assignment success rate multi-agent 2024 2025
  Q3: collaborative multi-agent reasoning benchmark dataset testbed evaluation 2023 2024 2025

Coverage-gap note: SPECIFICITY GATE APPLIED for named benchmarks (AgentBench, WebArena, GAIA) — run their individual names as separate queries without expansion. General queries above cover the space of unspecified benchmarks.

---

ANGLE 13: AI Safety — Alignment Risks and Security in Multi-Agent Coordination
===========
Vocabulary tradition: AI safety / alignment — multi-agent risk
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Safety failure modes specific to multi-agent settings (e.g., misalignment amplification, prompt injection across agents, deceptive coordination, uncontrolled emergent goals), proposed mitigations, threat models, interaction between alignment of individual agents and alignment of the collective.

Source type (academic): arXiv cs.LG + cs.CY + cs.CL; AI safety venues (AISafety workshop, ICLR safety track)
Source type (practitioner): Anthropic, DeepMind, OpenAI safety whitepapers; AI safety organization blogs (Alignment Forum, LessWrong technical posts)

Queries:
  Q1: multi-agent LLM safety alignment risk emergent behavior misalignment 2024 2025
  Q2: AI agent coordination security prompt injection adversarial multi-agent attack 2024 2025
  Q3: multi-agent system alignment failure deceptive coordination emergent unsafe behavior 2024

Coverage-gap note: This angle overlaps conceptually with the null-hypothesis angle (N1) but focuses on SAFETY-SPECIFIC failures, not just performance failures. The distinction is: N1 asks "does coordination not help performance?" while A13 asks "does coordination introduce new harms?"

---

ANGLE 14: Emergent Collective Behavior in LLM Agent Groups
===========
Vocabulary tradition: Cognitive science — emergent collective behavior and distributed cognition
Angle type: Confirmatory
Predicted research character: empirical (gap — limited literature on LLM-specific emergence)
What to extract: Evidence of emergent capabilities in agent groups not present in individual agents, conditions that produce vs. inhibit emergence, how group size affects emergent behavior, theoretical frameworks from complex systems applied to LLM agents.

Source type (academic): arXiv cs.CL + cs.MA; Cognitive Science journal; Complexity journal; Proceedings of the Cognitive Science Society
Source type (practitioner): Technical blog posts on multi-agent emergent behavior observations; AI lab notes on unexpected behaviors in multi-agent deployments

Queries:
  Q1: emergent behavior multi-agent LLM collective intelligence group capabilities 2024 2025
  Q2: distributed cognition emergent problem solving agent systems collective reasoning 2023 2024
  Q3: group intelligence emergence collective behavior language model cooperation 2024 2025

Coverage-gap note: The cross-disciplinary angle (C1) covers biological swarm emergence, which provides theoretical grounding for this angle. A1 (classical MAS) has treated emergence as a design concern; this angle asks whether it is an empirical finding in LLM agent systems specifically.

---

ANGLE 15: Cross-Agent Memory, Context, and State Management
===========
Vocabulary tradition: Cognitive architecture — agent memory systems and context management
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Architectures for sharing memory across LLM agents, strategies for managing context windows in multi-agent settings, episodic vs. semantic vs. procedural memory in agent systems, retrieval-augmented generation in multi-agent context, failure modes from context loss or state inconsistency.

Source type (academic): arXiv cs.CL + cs.AI; cognitive architecture literature (ACT-R, SOAR papers applied to LLM agents)
Source type (practitioner): GitHub (MemGPT, Zep, Letta memory management repositories); technical blog posts on multi-agent state management

Queries:
  Q1: multi-agent LLM shared memory state management context cross-agent 2024 2025
  Q2: context window memory retrieval augmented generation agent coordination long-term state 2024
  Q3: cross-agent working memory episodic semantic procedural language model architecture 2024 2025

Coverage-gap note: This angle may overlap with Angle 5 (inter-agent communication) for architectures that treat memory as a shared communication channel. The Boolean-connective test: A5 focuses on message protocols; A15 focuses on persistent memory architecture. They are distinct facets.

---

ANGLE 16: Formal Methods — Specification, Verification, and Correctness of Multi-Agent Protocols
===========
Vocabulary tradition: Formal methods — agent system specification and verification
Angle type: Confirmatory
Predicted research character: empirical (gap — limited direct application to LLM agents)
What to extract: Formal specification languages for agent behavior, model checking applied to multi-agent coordination protocols, temporal logic properties (liveness, safety), results on whether LLM agent systems satisfy specified properties, formal treatment of coordination guarantees.

Source type (academic): arXiv cs.LO + cs.MA; Journal of Automated Reasoning; LICS / CAV / FM conference proceedings
Source type (practitioner): Technical reports from formal verification of agent middleware (JADE, ROS); emerging work on LLM output formal verification

Queries:
  Q1: formal verification multi-agent systems specification model checking coordination protocol 2022 2024
  Q2: temporal logic agent behavior specification safety liveness multi-agent formal method
  Q3: LLM agent formal specification correctness verification behavioral guarantee 2024 2025

Coverage-gap note: This angle has limited LLM-specific literature (predicted character: gap). Its value is documenting the absence of formal verification approaches in LLM agent systems, which is itself a research gap finding. The classical MAS formal verification literature (non-LLM) will be well-populated.

---

ANGLE N1: Evidence That LLM Agent Coordination Fails, Degrades Performance, or Does Not Generalize
===========
Vocabulary tradition: NLP/ML — coordination failure and negative results (null-hypothesis variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Studies showing multi-agent setups do NOT outperform single agents, conditions under which coordination overhead eliminates gains, failure modes unique to multi-agent settings (error amplification, cascading hallucinations, circular reasoning, deadlock), scope conditions under which coordination does not generalize across task types.

Source type (academic): arXiv cs.CL + cs.LG; NeurIPS Datasets and Benchmarks track; COLM (Conference on Language Modeling)
Source type (practitioner): GitHub issue threads on AutoGen / CrewAI (failure reports); practitioner blog post-mortems on failed multi-agent deployments

Queries:
  Q1: multi-agent LLM coordination failure degraded performance single agent baseline negative result 2024 2025
  Q2: LLM agent coordination overhead does not improve performance limitations failure mode 2024 2025
  Q3: multi-agent language model cascading hallucination error propagation breakdown negative 2023 2024
  Q4: LLM multi-agent debate consensus failure circular reasoning coordination does not generalize 2024

Coverage-gap note: Negative results are systematically under-reported in AI conferences. GitHub issue threads and practitioner post-mortems are essential sources for failure-mode vocabulary not published in papers. The adversarial angle (D1) approaches failure from a structural critique angle, not an empirical failure-mode angle.

---

ANGLE D1: Organizational Theory Critique — Coordination Costs, Management Overhead, and Delegation Failure
===========
Vocabulary tradition: Management science / organizational theory — coordination cost critique
Angle type: Adversarial [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]
Predicted research character: empirical (organizational behavior), consensus (management theory)
What to extract: Evidence from organizational theory that coordination overhead degrades team performance, conditions under which delegation fails, diseconomies of specialization, research on team communication costs, findings about when centralized vs. distributed decision-making underperforms — evaluated as possible analogies or structural critiques of multi-agent LLM system claims.

Generation note: This angle was generated from the following starting vocabulary ONLY, explicitly excluding prior confirmatory-angle terms:
  STARTING VOCABULARY: coordination costs, overhead, delegation failure, management inefficiency, team dysfunction, communication friction, organizational complexity, role confusion, task interdependence, diseconomy of scale
  EXCLUDED TERMS: LLM, language model, neural network, AI, machine learning, transformer, agent framework, ReAct, AutoGen, MetaGPT, function calling, tool use

Source type (academic): Journal of Management; Organization Science; Administrative Science Quarterly; Harvard Business Review (practitioner-facing research)
Source type (practitioner): Management consulting reports on team coordination; practitioner case studies on delegation failure; McKinsey / Deloitte organizational research

Queries:
  Q1: coordination costs overhead team performance degradation delegation failure management 2015 2024
  Q2: organizational communication friction complexity team dysfunction specialization diseconomy
  Q3: distributed decision making centralization performance tradeoff organizational effectiveness

Coverage-gap note: This angle imports management science's null results on human-team coordination as a structural critique of multi-agent LLM optimism. The adversarial value is highest when run BEFORE reading confirmatory results.

---

ANGLE C1: Biological Swarm Intelligence — Collective Computation and Stigmergic Coordination
===========
Vocabulary tradition: Biology / complex systems — swarm intelligence and stigmergy (NOT in intake brief)
Angle type: Cross-disciplinary
Predicted research character: empirical (biological), consensus (applied algorithms)
What to extract: Mechanisms by which biological collectives coordinate without central control (stigmergy, pheromone gradients, quorum sensing), swarm algorithm formalizations, conditions under which swarm coordination outperforms centralized planning, known failure modes of swarm systems, transfer principles to artificial multi-agent systems.

Source type (academic): Swarm Intelligence journal; Journal of Theoretical Biology; arXiv cs.NE + cs.MA (for applied algorithms); PubMed for biological swarm papers
Source type (practitioner): GitHub (ant colony optimization libraries, particle swarm optimization implementations); technical reports applying swarm algorithms to logistics / robotics

Queries:
  Q1: swarm intelligence stigmergy collective coordination biological emergence distributed 2020 2024
  Q2: ant colony bee swarm collective computation task allocation distributed no central control
  Q3: swarm algorithm multi-agent coordination mechanism quorum sensing collective decision 2020 2024

Coverage-gap note: This angle's value is transferring a well-studied non-LLM coordination mechanism to LLM agent system design. The key follow-up question (not covered by these queries): have any LLM agent systems explicitly implemented stigmergic coordination? This requires a search combining swarm vocabulary with LLM vocabulary, which is a bridge search not captured here.

---

## QUALITY GATE SUMMARY
======================

### Gate 1 — Completeness

- [x] **Null-hypothesis angle present:** Angle N1 — uses terms "failure," "does not improve," "does not generalize," "negative result," "breakdown," "cascading hallucination." Framing is explicit disconfirming. PASS.
- [x] **Adversarial angle present:** Angle D1 labeled `[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]`. PASS.
- [x] **Cross-disciplinary angle present:** Angle C1 — Biology / swarm intelligence — NOT present in the intake brief's 8 candidate traditions. PASS.
- [x] **Source-type coverage:** Domain maturity is MIXED. Practitioner sources are assigned to all relevant angles (GitHub, blog posts, practitioner reports). PASS.
- [x] **Vocabulary-tradition map populated:** Coverage map lists 8 distinct traditions from intake brief + 1 cross-disciplinary. PASS.

**Gate 1: PASS**

---

### Gate 2 — Distinctness

**Vocabulary-tradition distinctness check:** Each angle was assigned a unique tradition label. No two non-null/non-adversarial angles share the same label. Checked:
- A3 (LLM agent frameworks) ≠ A4 (LLM task decomposition) ≠ A5 (LLM inter-agent communication) ≠ A6 (hierarchical orchestration) ≠ A12 (multi-agent benchmarks): all distinct sub-tradition labels. PASS.
- A1 (classical MAS coordination) ≠ A2 (operations research task allocation): distinct traditions. PASS.
- A14 (cognitive science emergent behavior) ≠ A15 (cognitive architecture memory): distinct sub-traditions. PASS.

**Boolean-connective test (selected pairs with potential overlap):**
- A3 (LLM frameworks, ReAct, AutoGen) OR A6 (orchestrator-subagent hierarchies): A3's distinctive term is "framework comparison / ReAct / tool use." A6's distinctive term is "orchestrator subagent hierarchical manager-worker." OR retrieval would return overlapping results for general multi-agent LLM papers but NOT the same documents for framework-comparison vs. hierarchical-architecture queries. Test result: NOT SYNONYMS. PASS.
- A1 (BDI, FIPA, contract net) OR A2 (task allocation auction combinatorial optimization): different query vocabularies, different literatures (MAS communication vs. operations research). PASS.
- A14 (emergent behavior collective LLM) OR C1 (swarm intelligence biological): C1 uses biological vocabulary (ant colony, bee, stigmergy); A14 uses LLM + cognitive science vocabulary. OR retrieval does not return the same documents. PASS.
- N1 (coordination failure, negative results) OR A13 (safety, misalignment, adversarial): N1's distinctive query is "does not improve performance / degraded performance / negative result." A13's distinctive query is "safety alignment misalignment adversarial attack." Not synonyms. PASS.

**Gate 2: PASS**

---

### Gate 3 — Launchability

- [x] All 19 angles contain at least one concrete query string. No angle has a blank Queries field.
- [x] No query string contains TBD, "to be determined," "[fill in]," or placeholder markers. Checked each angle.
- [x] Source type (academic) and Source type (practitioner) fields are named with specific platforms (arXiv with category, ACM Digital Library, IEEE, GitHub, specific repositories, specific journals) in all angles. No vague "relevant sources" language.

**Gate 3: PASS**

---

### Gate 4 — Scoring prohibition

- [x] No angle record contains "this angle is likely to be most useful," "this is the strongest angle," or equivalent subjective ranking.
- [x] Predicted research character is a STRUCTURAL classification (empirical / consensus / gap) used downstream to calibrate saturation expectations — not a quality or importance judgment. No LLM self-evaluation ranking used.

**Gate 4: PASS**

---

### Overall verdict: PASS — dispatch ready

**Flags requiring human judgment:**
1. VOCABULARY SELF-REPORT FLAG — all 8 intake-brief traditions were enumerated by LLM only, with no survey-paper probe. A Source B pass in a context with web access is recommended before treating the tradition enumeration as complete.
2. A10 (game theory) and A16 (formal methods) are predicted as research character GAP — expect limited literature. These angles serve to document the absence of such literature, which is itself a finding. Human judgment required on whether to deprioritize these or use them as deliberate gap-documenting angles.
3. C1 (swarm intelligence) cross-disciplinary angle: the bridge search (swarm vocabulary + LLM vocabulary) is not included in C1's queries. A researcher using this angle should add a bridge query after initial retrieval establishes the swarm literature.
4. A11 (HCI) recommended platform: ACM Digital Library is the primary venue, which requires a separate search pass from arXiv. A researcher using arXiv as their only tool will miss the CHI/CSCW literature for this angle.

---

**Angle count:** 19 (16 confirmatory + 1 null-hypothesis + 1 adversarial + 1 cross-disciplinary)
**Traditions in coverage map (intake brief):** 8 + 1 cross-disciplinary = 9
