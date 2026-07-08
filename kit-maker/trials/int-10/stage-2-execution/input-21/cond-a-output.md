# Research Angles: LLM-Based Agents — Planning and Multi-Step Task Execution

Generated: 2026-07-05

---

## Angle 1: Classical AI Planning Frameworks Applied to LLMs

**Vocabulary tradition:** Automated Planning / Knowledge Representation (AI planning community, ICAPS, AAAI)

**Description:** Examines how LLM agents relate to or reimplement concepts from formal planning — STRIPS operators, PDDL, hierarchical task networks (HTN), and goal-state search. Asks whether LLMs internalize planning structure or merely pattern-match to it.

**Search queries:**
- `LLM planning PDDL hierarchical task network grounding`
- `large language model automated planning symbolic grounding evaluation`
- `"task planning" "language model" STRIPS HTN benchmark`

**Best source types:** Academic conference papers (ICAPS, AAAI, NeurIPS), arXiv preprints (cs.AI, cs.CL)

---

## Angle 2: Chain-of-Thought and Scratchpad Reasoning

**Vocabulary tradition:** Natural Language Processing / Large Language Models (NLP/ML community, ACL, EMNLP)

**Description:** Studies how eliciting intermediate reasoning steps (chain-of-thought, scratchpad, least-to-most prompting) affects the ability of LLMs to decompose and execute multi-step tasks. Includes zero-shot, few-shot, and self-consistency variants.

**Search queries:**
- `"chain of thought" prompting multi-step reasoning large language model`
- `scratchpad intermediate steps LLM task decomposition`
- `least-to-most prompting decomposition complex tasks language model`

**Best source types:** arXiv preprints (cs.CL), ACL Anthology, NeurIPS/ICML proceedings

---

## Angle 3: ReAct and Tool-Use Agent Frameworks

**Vocabulary tradition:** LLM Agents / Agentic AI (emerging ML sub-community, prominent in arXiv cs.AI + practitioner blogs)

**Description:** Covers the ReAct (Reason + Act) paradigm and its successors, where the model interleaves verbal reasoning with tool calls (web search, code execution, APIs). Focuses on how action selection and observation integration affect task completion.

**Search queries:**
- `ReAct reasoning acting language model agent tool use`
- `LLM agent interleaved reasoning action web search tool calling`
- `"agentic" language model observe-think-act loop multi-step`

**Best source types:** arXiv preprints (cs.AI, cs.CL), top-conference workshops on agents (NeurIPS, ICLR), practitioner blogs (Lilian Weng / OpenAI, Anthropic research blog)

---

## Angle 4: Tree of Thoughts and Search-Based Reasoning

**Vocabulary tradition:** Natural Language Processing / Search Algorithms (hybrid NLP + classical search community)

**Description:** Examines approaches that frame LLM reasoning as a search problem over a tree or graph of thought states — Tree of Thoughts (ToT), Graph of Thoughts (GoT), Monte Carlo Tree Search (MCTS) applied to LLM reasoning. Relevant to how agents explore solution spaces.

**Search queries:**
- `"tree of thoughts" language model planning search`
- `"graph of thoughts" LLM reasoning structured exploration`
- `Monte Carlo tree search large language model reasoning agent`

**Best source types:** arXiv preprints, NeurIPS/ICLR proceedings

---

## Angle 5: Memory and Context Management in Long-Horizon Tasks

**Vocabulary tradition:** Cognitive Architectures / Memory Systems (cognitive science + AI agents)

**Description:** Investigates how agents manage working memory, episodic memory, and long-term knowledge stores to maintain coherence across many steps. Covers vector database retrieval, compressive summarization, and external scratchpads.

**Search queries:**
- `LLM agent memory architecture long-horizon task working memory`
- `episodic memory language model agent multi-step context management`
- `retrieval augmented memory agent task execution external storage`

**Best source types:** arXiv preprints (cs.AI, cs.CL), cognitive science journals (Cognitive Science, Topics in Cognitive Science), NeurIPS workshops

---

## Angle 6: Multi-Agent Coordination and Task Delegation

**Vocabulary tradition:** Multi-Agent Systems (MAS community, AAMAS, IJCAI)

**Description:** Studies how networks of LLM agents divide work, communicate sub-goals, negotiate task ownership, and reconcile partial results. Includes orchestrator-worker patterns, debate frameworks, and collective planning.

**Search queries:**
- `multi-agent LLM orchestrator worker task delegation coordination`
- `"multi-agent" "language model" planning communication division of labor`
- `LLM agent debate collective planning task decomposition collaboration`

**Best source types:** AAMAS proceedings, arXiv (cs.MA, cs.AI), GitHub repositories (AutoGen, CrewAI, LangGraph)

---

## Angle 7: Reinforcement Learning for Agent Behavior and Plan Optimization

**Vocabulary tradition:** Reinforcement Learning (RL community, ICML, NeurIPS, ICLR)

**Description:** Examines RL-based approaches to training or fine-tuning LLM agents to improve planning quality — RLHF, outcome-reward models, process reward models (PRMs), and RL over tool-use trajectories.

**Search queries:**
- `reinforcement learning LLM agent planning process reward model`
- `RLHF multi-step task execution trajectory optimization language model`
- `"process reward model" language model reasoning step-level feedback`

**Best source types:** arXiv preprints (cs.LG, cs.CL), NeurIPS/ICML proceedings

---

## Angle 8: Program Synthesis and Code as a Planning Representation

**Vocabulary tradition:** Programming Languages / Software Engineering (PL/SE community, PLDI, FSE, OOPSLA)

**Description:** Treats code generation as a form of task planning — executable plans with explicit control flow, subroutines, and error handling. Covers code interpreter agents, program-of-thought prompting, and PAL (Program-Aided Language Models).

**Search queries:**
- `program of thought PAL language model code execution planning`
- `"code interpreter" LLM agent task planning executable plan`
- `program synthesis language model multi-step task tool`

**Best source types:** arXiv preprints (cs.PL, cs.SE, cs.CL), FSE/PLDI proceedings, GitHub repositories

---

## Angle 9: Benchmarking and Evaluation of Agent Task Completion

**Vocabulary tradition:** Empirical Machine Learning / Benchmarking (ML evaluation community, BIG-Bench, HELM)

**Description:** Surveys evaluation frameworks, datasets, and metrics designed specifically to measure LLM agent planning fidelity, task success rates, efficiency, and robustness. Includes ALFWorld, WebArena, AgentBench, SWE-bench, and τ-bench.

**Search queries:**
- `LLM agent benchmark evaluation multi-step task completion metrics`
- `WebArena AgentBench SWE-bench evaluation language model agent`
- `"task success rate" LLM agent planning evaluation benchmark survey`

**Best source types:** arXiv preprints, ACL/NeurIPS proceedings, benchmark leaderboard papers

---

## Angle 10: Failure Modes, Null Results, and Brittleness of LLM Planning

**Vocabulary tradition:** Critical AI / Robustness Research (AI safety + empirical NLP community)

**Description:** Documents where LLM-based planning breaks down — compounding errors, plan abandonment, hallucinated tool calls, goal drift, and sensitivity to prompt phrasing. Explicitly seeks null results and negative evaluations that show the limits of current approaches.

**Search queries:**
- `LLM agent failure modes planning hallucination error propagation multi-step`
- `brittleness language model agent task execution robustness null result`
- `"lost in the middle" context length plan coherence degradation LLM agent`

**Best source types:** arXiv preprints (cs.CL, cs.AI), NeurIPS/ACL workshop papers on robustness, practitioner postmortems (blog posts, GitHub issues)

---

## Angle 11: Cognitive Architectures and the Dual-Process Analogy

**Vocabulary tradition:** Cognitive Science / Cognitive Architectures (ACT-R, SOAR community; Cognitive Science Society)

**Description:** Examines LLM agent planning through the lens of cognitive architecture theory — System 1 / System 2 thinking, goal stack management, subgoal decomposition, and working memory limits. Draws on ACT-R, SOAR, and integrated cognition frameworks.

**Search queries:**
- `large language model cognitive architecture planning ACT-R SOAR analogy`
- `"system 2" deliberate reasoning LLM agent task planning`
- `dual process theory language model planning slow deliberate fast reactive`

**Best source types:** Cognitive science journals (Cognitive Science, Psychological Review), interdisciplinary AI conference papers (CogSci, ICDL), arXiv (cs.AI)

---

## Angle 12: Human-in-the-Loop and Interactive Task Execution

**Vocabulary tradition:** Human-Computer Interaction / Mixed-Initiative Systems (HCI community, CHI, CSCW)

**Description:** Studies how agents clarify ambiguous sub-goals, request human confirmation, and incorporate corrections mid-task. Covers mixed-initiative planning, interruption management, and transparency of agent reasoning to users.

**Search queries:**
- `human-in-the-loop LLM agent clarification multi-step task interactive`
- `mixed initiative planning language model user correction transparency`
- `LLM agent explainability task execution user oversight intervention`

**Best source types:** CHI and CSCW proceedings, arXiv (cs.HC), practitioner UX research blogs

---

## Angle 13: Robotic and Embodied Planning with Language Models

**Vocabulary tradition:** Robotics / Embodied AI (IEEE Robotics, CoRL, RSS)

**Description:** Examines how LLMs ground abstract plans into physical or simulated actions for robotics and embodied agents — including SayCan, inner-monologue frameworks, and VLA (vision-language-action) models. Constraint satisfaction from the physical world differs from purely digital tasks.

**Search queries:**
- `language model robot task planning grounding embodied SayCan`
- `LLM robot action affordance planning physical constraint`
- `vision language action model embodied planning execution`

**Best source types:** CoRL, RSS, ICRA proceedings; arXiv (cs.RO); robotics company research blogs (DeepMind, Google Robotics)

---

## Angle 14: Business Process Automation and Workflow Orchestration

**Vocabulary tradition:** Business Process Management / Workflow Automation (BPM community, BPM conference, practitioner/industry)

**Description:** Takes an industry/practitioner framing — LLM agents as a new automation layer for enterprise workflows (RPA replacement, agentic RPA), process mining integration, and low-code orchestration platforms (n8n, Temporal, Camunda with LLM nodes).

**Search queries:**
- `LLM agent workflow automation business process RPA orchestration enterprise`
- `"agentic AI" enterprise workflow orchestration tool use automation`
- `language model robotic process automation low-code integration`

**Best source types:** BPM conference proceedings, Gartner/Forrester analyst reports, vendor whitepapers and practitioner blogs (Temporal, Camunda, UiPath)

---

## Angle 15: Safety, Alignment, and Containment of Planning Agents

**Vocabulary tradition:** AI Safety / Alignment (MIRI, ARC, Anthropic safety research; SafeAI workshops)

**Description:** Examines risks arising specifically from autonomous multi-step execution — goal misgeneralization, unintended side-effects, prompt injection through tool outputs, irreversible action risks, and minimal-footprint principles for safe agentic behavior.

**Search queries:**
- `LLM agent safety alignment multi-step autonomous task prompt injection risk`
- `agentic AI containment irreversible actions minimal footprint alignment`
- `language model agent goal misgeneralization side effects safety evaluation`

**Best source types:** arXiv (cs.AI, cs.CY), SafeAI / Alignment Forum posts, Anthropic/DeepMind safety research papers

---

## Angle 16: Retrieval-Augmented Planning and External Knowledge Integration

**Vocabulary tradition:** Information Retrieval / Retrieval-Augmented Generation (IR community, SIGIR, ECIR)

**Description:** Studies how agents augment their planning with dynamically retrieved documents, code snippets, or tool documentation — covering RAG architectures, self-RAG, and knowledge-grounded plan generation. Distinct from memory (angle 5) in focusing on external corpora at plan-construction time.

**Search queries:**
- `retrieval augmented generation LLM agent planning external knowledge tool documentation`
- `"self-RAG" language model planning knowledge-grounded multi-step`
- `RAG agent task decomposition knowledge retrieval grounded plan generation`

**Best source types:** SIGIR/ECIR/ACL proceedings, arXiv (cs.IR, cs.CL), vendor technical blogs (LangChain, LlamaIndex)

---

## Summary

| # | Angle Title | Vocabulary Tradition |
|---|-------------|---------------------|
| 1 | Classical AI Planning Frameworks Applied to LLMs | Automated Planning |
| 2 | Chain-of-Thought and Scratchpad Reasoning | NLP / Large Language Models |
| 3 | ReAct and Tool-Use Agent Frameworks | LLM Agents / Agentic AI |
| 4 | Tree of Thoughts and Search-Based Reasoning | NLP / Search Algorithms |
| 5 | Memory and Context Management in Long-Horizon Tasks | Cognitive Architectures / Memory Systems |
| 6 | Multi-Agent Coordination and Task Delegation | Multi-Agent Systems |
| 7 | Reinforcement Learning for Agent Behavior | Reinforcement Learning |
| 8 | Program Synthesis and Code as a Planning Representation | Programming Languages / Software Engineering |
| 9 | Benchmarking and Evaluation of Agent Task Completion | Empirical ML / Benchmarking |
| 10 | Failure Modes, Null Results, and Brittleness | Critical AI / Robustness Research |
| 11 | Cognitive Architectures and the Dual-Process Analogy | Cognitive Science / Cognitive Architectures |
| 12 | Human-in-the-Loop and Interactive Task Execution | Human-Computer Interaction |
| 13 | Robotic and Embodied Planning | Robotics / Embodied AI |
| 14 | Business Process Automation and Workflow Orchestration | Business Process Management |
| 15 | Safety, Alignment, and Containment | AI Safety / Alignment |
| 16 | Retrieval-Augmented Planning | Information Retrieval / RAG |

**Total angles:** 16
**Distinct vocabulary traditions:** 16
