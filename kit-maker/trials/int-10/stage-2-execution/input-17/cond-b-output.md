# Angle Generation Output — Input 17, Condition B
**Topic:** LLM agents that operate at the operating system level — controlling files, processes, and applications
**Date:** 2026-07-05
**Kit version:** angle-gen-kit
**Source B status:** UNAVAILABLE — MODERATE (subagent context; Source A + Source C identified ≥5 distinct vocabulary traditions)

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: LLM agents that operate at the OS level — controlling files, processes, and applications

Anchor vocabulary: "LLM agents" (AI Agents/ML Systems tradition), "operating system level"
(Systems/OS Research tradition), "controlling files, processes, and applications"
(Systems + RPA/Automation tradition)

Candidate vocabulary traditions:
  1. AI Agents / ML Systems — autonomous agents, tool-use agents, computer use, code interpreter,
     ReAct framework, agentic AI, OpenAI function calling, LLM-based agents, plan-and-execute
  2. Systems / OS Research — OS-level control, process management, shell execution, system calls,
     POSIX, file system manipulation, programmatic OS access, kernel interfaces
  3. Security / Safety Research — sandboxing, privilege escalation, container isolation,
     prompt injection, adversarial attacks on agents, access control, capability-based security
  4. RPA / Enterprise Automation — robotic process automation, GUI automation, desktop automation,
     workflow automation, application control, UI scripting, enterprise orchestration
  5. HCI / Computer Vision — GUI automation, screen reading, visual grounding, UI element
     localization, desktop UI interaction, OCR, screenshot understanding, pixel-level grounding

  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate
  traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor
  paper) is recommended before accepting this angle list as covering all traditions.

Absent-term signals — terms expected but not used by the user:
  - "computer use" (Anthropic/Claude paradigm)
  - "sandboxing" / "container isolation" (security framing)
  - "tool use" / "function calling" (standard ML framing)
  - "robotic process automation" / "RPA" (enterprise automation framing)
  - "privilege escalation" (security research framing)
  - "code interpreter" (LLM code execution framing)
  - "GUI automation" / "visual grounding" (HCI/vision framing)

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure in the prompt; user asked "I want to research X")

Scope markers: OS-level specifically (files, processes, applications); no date range stated;
  no model family restriction stated
  Inferred scope: encompasses both research (academic) and practitioner (GitHub, tools)
  dimensions of the domain; no single platform restriction

Known exclusions: None stated

Domain maturity estimate: MIXED
  Basis: "LLM agents" is academic vocabulary (arXiv literature present); "operating system level"
  and "controlling files/processes/applications" suggest systems/engineering framing; domain has
  active GitHub output (computer-use implementations, agent frameworks, sandboxes); RPA and
  HCI traditions are practitioner-heavy; security is both academic and practitioner

Survey paper status: NOT FOUND — Source B unavailable (subagent context); vocabulary-discovery
  pass via survey-paper title vocabulary recommended before finalizing tradition list

Source B status: UNAVAILABLE — MODERATE — Source A + Source C produced 5 distinct vocabulary
  traditions; angle generation may proceed; VOCABULARY SELF-REPORT FLAG applies throughout
```

**Intake gate check:**
- [x] Topic field populated: "LLM agents that operate at the OS level — controlling files, processes, and applications"
- [x] Candidate vocabulary traditions: 5 entries identified
- [x] Question type: EXPLORATORY

All three gate conditions true. Proceeding to angle-generation.md.

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: AI Agents / ML Systems
  Representative terms: tool-use agents, computer use, agentic AI, ReAct, code interpreter,
    LLM-based agents, plan-and-execute, function calling
  Planned angle slots: A1 (tool-use architecture), A2 (computer use paradigm),
    A8 (evaluation/benchmarks), A9 (long-horizon planning), A10 (multi-agent coordination),
    N1 (null-hypothesis — failure analysis)
  Gap flag: No — this tradition has the deepest coverage given its centrality

Tradition 2: Systems / OS Research
  Representative terms: OS-level control, process management, shell execution, system calls,
    POSIX, file system manipulation, kernel interfaces
  Planned angle slots: A3 (OS API abstraction and interface design)
  Gap flag: Yes — only one angle planned; this tradition may have more facets (e.g.,
    performance overhead of agent-OS interaction); accepted as single-slot given scope

Tradition 3: Security / Safety Research
  Representative terms: sandboxing, privilege escalation, container isolation, prompt injection,
    adversarial attacks, access control, capability-based security, threat modeling
  Planned angle slots: A4 (sandboxing/isolation), A5 (prompt injection/adversarial),
    A11 (privacy/data exfiltration)
  Gap flag: No

Tradition 4: RPA / Enterprise Automation
  Representative terms: robotic process automation, GUI automation, desktop automation,
    workflow automation, application control, UI scripting
  Planned angle slots: A6 (RPA integration and comparison)
  Gap flag: No

Tradition 5: HCI / Computer Vision
  Representative terms: visual grounding, UI element localization, screen reading, OCR,
    screenshot understanding, pixel-level control, desktop UI interaction
  Planned angle slots: A7 (visual grounding and GUI localization)
  Gap flag: No

Additional traditions identified during coverage-gap conditioning (not in intake brief):
  - Software Engineering / DevOps: A12 (software development automation, CI/CD agents)
  - AI Policy / Legal Studies: A13 (legal and regulatory implications)

Traditions NOT yet represented in the planned list:
  All 5 intake-brief traditions have at least one planned angle slot.
  Two additional traditions identified (SE/DevOps, AI Policy) added during generation.

Cross-disciplinary slots (required — traditions NOT in the intake brief):
  C1 target: Software Engineering / Formal Verification
    Basis: OS-level agents invoke system APIs that have formal specifications; the SE and
    formal verification communities study correctness of programs that interact with OS APIs
    (POSIX compliance, system call contract checking, behavioral specification); this tradition
    uses entirely different vocabulary from the ML/AI community and is absent from the user's
    framing, yet is directly relevant to what makes OS-level operations correct and safe.
  C2 target: Human Factors / Organizational Psychology
    Basis: Agents with OS-level access create novel oversight challenges for human operators
    (file deletion, process termination are irreversible); human factors research on automation
    trust, control interface design, and situation awareness is directly applicable but uses
    vocabulary (trust calibration, mode confusion, supervisory control) absent from AI framing.

Complex multi-tradition domain justification: ≥5 distinct vocabulary traditions identified at
intake + domain spans AI/ML, systems research, security, RPA, HCI, SE, and legal/policy
communities → 20–30 angle range applies; 17 angles generated with explicit coverage rationale.
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1  (Confirmatory — AI Agents / ML Systems — Tool-Use Architecture)
Slot A2  (Confirmatory — AI Agents / ML Systems — Computer Use, Multimodal)
Slot A3  (Confirmatory — Systems / OS Research — Interface Design)
Slot A4  (Confirmatory — Security / Safety — Sandboxing and Isolation)
Slot A5  (Confirmatory — Security / Safety — Adversarial Attacks, Prompt Injection)
Slot A6  (Confirmatory — RPA / Enterprise Automation)
Slot A7  (Confirmatory — HCI / Computer Vision — Visual Grounding)
Slot A8  (Confirmatory — AI Agents / ML Systems — Evaluation Methodology)
Slot A9  (Confirmatory — AI Agents / ML Systems — Task Planning and Reasoning)
Slot A10 (Confirmatory — AI Agents / ML Systems — Multi-Agent Coordination)
Slot A11 (Confirmatory — Security / Safety — Privacy and Data Protection)
Slot A12 (Confirmatory — Software Engineering / DevOps Automation)
Slot A13 (Confirmatory — AI Policy / Legal and Regulatory Studies)
Slot N1  (Null-hypothesis — assigned)
Slot D1  (Adversarial [ADVERSARIAL-FLAGGED] — starting vocabulary: Cybersecurity / Threat
          Research — NOT FROM: AI agents, tool use, computer use, agentic AI [confirmatory
          vocabulary])
Slot C1  (Cross-disciplinary — Software Engineering / Formal Verification)
Slot C2  (Cross-disciplinary — Human Factors / Organizational Psychology)
```

---

## ANGLE LIST

---

### ANGLE 1: LLM Agent Architectures for OS-Level Tool Use
```
ANGLE 1: LLM Agent Architectures for OS-Level Tool Use
=======================================================
Vocabulary tradition: AI Agents / ML Systems — Tool-Use Architecture
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Architectural patterns for connecting LLM reasoning to OS tool invocations;
  comparison of tool-calling frameworks (ReAct, Toolformer, function calling APIs); reported
  success rates on OS tasks; failure modes at the tool-invocation interface

Source type (academic): arXiv cs.CL + cs.LG
Source type (practitioner): GitHub — agent framework repositories (LangChain, AutoGen, CrewAI,
  smolagents) — filter by star count ≥50, active commits

Queries:
  Q1: LLM agent tool use operating system file process management architecture 2023 2024 2025
  Q2: language model function calling shell command execution autonomous agent framework
  Q3: ReAct agent computer task file manipulation tool invocation empirical evaluation
  Q4: autonomous LLM code execution subprocess control programmatic OS interaction

Coverage-gap note: This angle does not cover multimodal (screenshot-based) tool use — that is
  handled in Angle 2. Queries here are text/API-oriented tool invocation only.
```

---

### ANGLE 2: Computer Use Paradigm — Screenshot-Based OS Control
```
ANGLE 2: Computer Use Paradigm — Screenshot-Based OS Control
=============================================================
Vocabulary tradition: AI Agents / ML Systems — Computer Use (Multimodal)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Approaches where agents observe screen state via screenshots and emit
  mouse/keyboard actions; accuracy on GUI tasks; comparison of pixel-level vs. accessibility-
  tree approaches; reported latency and reliability; scope conditions where screenshot-based
  control outperforms or underperforms API-based control

Source type (academic): arXiv cs.CL + cs.CV
Source type (practitioner): GitHub — computer-use implementation repos (Anthropic computer-use
  demo, OpenAdapt, OpenInterpreter); filter by active commits and substantive README

Queries:
  Q1: computer use LLM agent screenshot desktop control mouse keyboard simulation 2024 2025
  Q2: vision language model GUI interaction screen understanding action grounding
  Q3: multimodal agent desktop task screenshot-based pixel-level action prediction
  Q4: large language model computer control accessibility tree screen capture comparison

Coverage-gap note: This angle covers the input/output modality (screenshots, clicks). It does
  not cover evaluation metrics — those are in Angle 8.
```

---

### ANGLE 3: OS-Level API Abstraction and Interface Design for Agents
```
ANGLE 3: OS-Level API Abstraction and Interface Design for Agents
=================================================================
Vocabulary tradition: Systems / OS Research
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Design patterns for OS interfaces intended for LLM agent consumption;
  differences between human-facing CLIs and agent-optimized APIs; abstraction layers that
  isolate agents from raw system calls; documented design decisions and tradeoffs

Source type (academic): arXiv cs.OS + cs.LG; USENIX, OSDI, EuroSys proceedings
Source type (practitioner): GitHub — OS abstraction libraries for agents (e2b sandboxes,
  Modal, Daytona, Devbox); technical design documents

Queries:
  Q1: operating system interface design LLM agent API abstraction programmatic access 2024 2025
  Q2: AI agent OS abstraction layer system call isolation programmatic environment
  Q3: agent-friendly operating system API shell interface design tradeoffs evaluation
  Q4: sandboxed execution environment LLM agent design principles OS interaction layer

Coverage-gap note: This angle covers the API/interface design perspective (OS-side). Agent-side
  architecture is in Angle 1; security isolation is in Angle 4.
```

---

### ANGLE 4: Security Sandboxing and Isolation for OS-Level LLM Agents
```
ANGLE 4: Security Sandboxing and Isolation for OS-Level LLM Agents
===================================================================
Vocabulary tradition: Security / Safety — Sandboxing and Isolation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Isolation mechanisms used for OS-level agents (containers, VMs, seccomp,
  capability-based sandboxes); measured security-functionality tradeoffs; bypass attempts
  documented in practice; recommended architecture patterns for privilege restriction

Source type (academic): arXiv cs.CR + cs.LG; IEEE S&P, USENIX Security proceedings
Source type (practitioner): GitHub — sandboxed agent runtimes (e2b, Modal, Devbox, Daytona);
  Docker security configuration for agent workloads

Queries:
  Q1: LLM agent sandboxing operating system isolation security container privilege 2024 2025
  Q2: AI agent code execution sandbox privilege restriction seccomp capability security
  Q3: language model tool use security isolation file system access control mechanisms
  Q4: agentic AI operating system security boundary enforcement architecture empirical

Coverage-gap note: This angle covers defensive isolation. Attacks against isolation (prompt
  injection, jailbreaking) are in Angle 5. Privacy risks from agents with OS access are in
  Angle 11.
```

---

### ANGLE 5: Prompt Injection and Adversarial Attacks on OS-Level Agents
```
ANGLE 5: Prompt Injection and Adversarial Attacks on OS-Level Agents
=====================================================================
Vocabulary tradition: Security / Safety — Adversarial Attacks (Prompt Injection)
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Prompt injection attack vectors specific to OS-level agents; indirect
  injection via file contents or process outputs; documented attack demonstrations and
  success rates; proposed mitigations and their effectiveness; scope conditions for
  vulnerability

Source type (academic): arXiv cs.CR + cs.CL; IEEE S&P, NDSS, CCS proceedings
Source type (practitioner): Security research blogs (Trail of Bits, NCC Group); GitHub
  PoC repositories for agent injection attacks

Queries:
  Q1: prompt injection LLM agent file system operating system attack vector 2024 2025
  Q2: indirect prompt injection autonomous agent tool use OS environment exploitation
  Q3: adversarial input computer use agent desktop task manipulation attack demonstration
  Q4: agent hijacking language model tool-use security vulnerability jailbreak OS

Coverage-gap note: This angle covers active attacks on agents. Defensive isolation is in
  Angle 4. Malicious use of agents AS attack tools (rather than attacks ON agents) is
  reserved for the adversarial angle (Angle D1).
```

---

### ANGLE 6: RPA and Traditional Desktop Automation — Integration and Comparison with LLM Agents
```
ANGLE 6: RPA and Traditional Desktop Automation — Integration and Comparison
============================================================================
Vocabulary tradition: RPA / Enterprise Automation
Angle type: Confirmatory
Predicted research character: consensus
What to extract: How LLM agents extend or replace traditional RPA systems; documented
  integration patterns; comparative studies of LLM vs. rule-based automation for OS tasks;
  enterprise adoption patterns; failure modes specific to LLM-based automation vs. RPA

Source type (academic): arXiv cs.AI; IEEE Transactions on Automation Science and Engineering;
  BPM (Business Process Management) conference proceedings
Source type (practitioner): RPA vendor technical reports (UiPath, Automation Anywhere,
  Microsoft Power Automate AI Builder documentation); practitioner blogs

Queries:
  Q1: large language model robotic process automation RPA integration comparison 2023 2024 2025
  Q2: LLM agent desktop automation workflow enterprise RPA replacement augmentation
  Q3: AI agent GUI automation comparison traditional rule-based RPA reliability
  Q4: language model workflow automation application control enterprise software task

Coverage-gap note: This angle targets the RPA/enterprise tradition vocabulary. Visual
  grounding for GUI interaction (the CV sub-problem) is in Angle 7.
```

---

### ANGLE 7: Visual Grounding and GUI Element Localization for Desktop Agents
```
ANGLE 7: Visual Grounding and GUI Element Localization for Desktop Agents
=========================================================================
Vocabulary tradition: HCI / Computer Vision — Visual Grounding
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Models and methods for identifying UI elements in screenshots; accuracy on
  grounding benchmarks (ScreenSpot, Mind2Web); comparison of vision-based vs. accessibility-
  tree-based localization; transfer across different OS and application GUIs; failure modes

Source type (academic): arXiv cs.CV + cs.CL; ACM CHI; NeurIPS, CVPR proceedings
Source type (practitioner): GitHub — ScreenSpot dataset, Mind2Web, OmniGUI, SeeAct repos

Queries:
  Q1: visual grounding GUI element localization LLM agent desktop screenshot 2024 2025
  Q2: multimodal language model UI element detection screen understanding widget grounding
  Q3: vision language model interface interaction element localization accuracy benchmark
  Q4: ScreenSpot Mind2Web GUI agent visual grounding evaluation cross-application

Coverage-gap note: This angle focuses on visual/perceptual localization capability. End-to-end
  task completion benchmarks are in Angle 8.
```

---

### ANGLE 8: Benchmarks and Evaluation Methodology for OS-Level Agents
```
ANGLE 8: Benchmarks and Evaluation Methodology for OS-Level Agents
===================================================================
Vocabulary tradition: AI Agents / ML Systems — Evaluation Methodology
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Existing benchmark suites for OS-level agents (OSWorld, WindowsAgentArena,
  GAIA, AssistGUI, AppAgent); reported success rates by task type and OS; evaluation
  methodology critiques; benchmark construction choices; metrics beyond binary success

Source type (academic): arXiv cs.LG + cs.CL; NeurIPS Datasets and Benchmarks track
Source type (practitioner): GitHub — OSWorld, WindowsAgentArena, Mind2Web repos;
  benchmark leaderboard sites

Queries:
  Q1: OSWorld WindowsAgentArena LLM agent operating system task benchmark evaluation 2024 2025
  Q2: computer use agent evaluation benchmark desktop task success rate methodology
  Q3: GAIA AssistGUI AppAgent real-world computer task LLM performance metric comparison
  Q4: OS-level LLM agent evaluation benchmark critique methodology limitations

Coverage-gap note: This angle covers how performance is measured. Agent architectures are in
  Angles 1 and 2; visual grounding capabilities are in Angle 7.
```

---

### ANGLE 9: Long-Horizon Planning and Task Decomposition for OS Agents
```
ANGLE 9: Long-Horizon Planning and Task Decomposition for OS Agents
====================================================================
Vocabulary tradition: AI Agents / ML Systems — Task Planning and Reasoning
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Methods for decomposing complex, multi-step OS tasks into executable
  sub-tasks; handling task dependencies and state across OS operations; error recovery
  planning; comparison of planning architectures (chain-of-thought, tree-of-thought,
  hierarchical planners); scope conditions where planning helps

Source type (academic): arXiv cs.AI + cs.CL; NeurIPS, ICML, ICLR proceedings
Source type (practitioner): GitHub — planning-enabled agent frameworks (AutoGen, CrewAI,
  LangGraph); technical design documents

Queries:
  Q1: LLM agent long-horizon planning task decomposition computer task file management 2024 2025
  Q2: autonomous agent multi-step OS task planning hierarchical subtask execution
  Q3: language model planning complex task execution process control error recovery
  Q4: chain-of-thought tree-of-thought agent OS operations sequential task planning

Coverage-gap note: This angle covers planning strategies within a single agent. Multi-agent
  coordination (distributing tasks across agents) is in Angle 10.
```

---

### ANGLE 10: Multi-Agent Coordination for OS-Level Tasks
```
ANGLE 10: Multi-Agent Coordination for OS-Level Tasks
======================================================
Vocabulary tradition: AI Agents / ML Systems — Multi-Agent Coordination
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Architectures for multiple LLM agents collaborating on OS-level tasks;
  resource contention and conflict resolution when agents share an OS; communication
  protocols between agents operating concurrently on the same system; reported benefits
  and failure modes vs. single-agent approaches

Source type (academic): arXiv cs.MA + cs.AI; AAMAS proceedings
Source type (practitioner): GitHub — multi-agent frameworks (AutoGen, MetaGPT, CrewAI);
  technical reports on multi-agent OS automation

Queries:
  Q1: multi-agent LLM system operating system task coordination concurrent execution 2024 2025
  Q2: collaborative autonomous agents desktop task parallel resource management OS
  Q3: multi-agent framework OS-level concurrency conflict resolution agent communication
  Q4: LLM multi-agent orchestration file process application shared environment

Coverage-gap note: This angle covers coordination between multiple agents. Single-agent
  planning is in Angle 9. Security of multi-agent OS access is a gap not covered here.
```

---

### ANGLE 11: Privacy and Data Exfiltration Risks from OS-Level Agents
```
ANGLE 11: Privacy and Data Exfiltration Risks from OS-Level Agents
===================================================================
Vocabulary tradition: Security / Safety — Privacy and Data Protection
Angle type: Confirmatory
Predicted research character: empirical
What to extract: Privacy risks arising from agents with OS-level file access; documented
  cases or demonstrations of sensitive data exposure; proposed access controls and
  data minimization strategies; GDPR/privacy-regulation implications for OS-level agents;
  user mental models about what agents can see

Source type (academic): arXiv cs.CR; IEEE S&P, PETS (Privacy Enhancing Technologies)
  symposium; law reviews (privacy law dimension)
Source type (practitioner): Security research blogs; privacy-focused practitioner reports;
  GitHub — privacy-aware agent access control implementations

Queries:
  Q1: LLM agent data exfiltration privacy file system sensitive information exposure 2024 2025
  Q2: AI agent OS-level privacy risk data leakage confidential file access implications
  Q3: language model agent file access privacy personal data protection GDPR compliance
  Q4: autonomous agent sensitive data handling operating system access minimization

Coverage-gap note: This angle covers privacy risks from normal agent operation. Deliberate
  injection attacks are in Angle 5. Malicious use of agents to exfiltrate data is in Angle D1.
```

---

### ANGLE 12: Software Development Automation — CI/CD and Coding Agents with OS Access
```
ANGLE 12: Software Development Automation — CI/CD and Coding Agents with OS Access
====================================================================================
Vocabulary tradition: Software Engineering / DevOps Automation
Angle type: Confirmatory
Predicted research character: empirical
What to extract: LLM-based coding agents that interact with OS environments to run tests,
  build systems, and manage codebases; benchmark results (SWE-bench, Devin-style evaluations);
  integration patterns with CI/CD pipelines; failure modes specific to software engineering
  tasks requiring OS interaction; practitioner adoption patterns

Source type (academic): arXiv cs.SE; ICSE, FSE, ISSTA, MSR proceedings
Source type (practitioner): GitHub — SWE-agent, Devin, Aider, OpenHands repos; engineering
  blog posts on coding agents in CI/CD

Queries:
  Q1: LLM agent software development automation code execution CI CD build test 2024 2025
  Q2: coding agent SWE-bench operating system environment test execution file modification
  Q3: autonomous software engineering agent OS interaction debugging repository management
  Q4: language model software agent shell execution git file system integration benchmark

Coverage-gap note: This angle targets the SE/DevOps application domain. Formal verification
  of agent OS behavior is in Angle C1 (different SE sub-tradition).
```

---

### ANGLE 13: Legal and Regulatory Implications of Autonomous OS-Level Agents
```
ANGLE 13: Legal and Regulatory Implications of Autonomous OS-Level Agents
==========================================================================
Vocabulary tradition: AI Policy / Legal and Regulatory Studies
Angle type: Confirmatory
Predicted research character: consensus
What to extract: Legal frameworks applicable to agents that autonomously access and
  manipulate files, processes, and applications; liability questions; GDPR and data
  protection regulation implications; emerging AI Act compliance requirements; audit
  and accountability mechanisms; practitioner compliance guidance

Source type (academic): Law reviews (SSRN, Harvard Law Review, Stanford Technology Law
  Review); AI policy papers (Brookings, AI Now Institute)
Source type (practitioner): NIST AI RMF guidance; industry compliance reports; vendor
  terms-of-service analysis

Queries:
  Q1: autonomous AI agent legal liability operating system file access accountability 2024 2025
  Q2: LLM agent regulatory compliance data access GDPR EU AI Act autonomous software
  Q3: AI agent audit trail accountability OS operations legal framework emerging
  Q4: autonomous software agent legal personhood liability data manipulation regulation

Coverage-gap note: This angle covers governance and compliance. Technical access controls
  are in Angle 4 and 11. This is a gap-risk angle — literature may be sparse for the specific
  LLM-agent framing (most legal research is at a higher level of abstraction).
```

---

### ANGLE N1: Evidence That OS-Level LLM Agents Fail, Do Not Generalize, or Are Unreliable
```
ANGLE N1: Evidence That OS-Level LLM Agents Fail, Do Not Generalize, or Are Unreliable
========================================================================================
Vocabulary tradition: AI Agents / ML Systems — Failure Analysis (Null-Hypothesis)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Conditions under which OS-level agents break down; error cascades in
  multi-step OS tasks; scope limitations (OS versions, application types, task complexity);
  replication failures; evidence of task performance not generalizing beyond benchmark
  conditions; practitioner reports of production failures; quantified failure rates

Source type (academic): arXiv cs.CL + cs.LG (look for negative-result sections in benchmark
  papers; failure analysis papers)
Source type (practitioner): GitHub issues on agent framework repos (failure reports, known
  limitations); practitioner post-mortems on deployed OS agents

Queries:
  Q1: LLM agent operating system failure reliability limitation negative result 2024 2025
  Q2: computer use agent failure mode error analysis breakdown out-of-distribution
  Q3: autonomous agent OS task does not generalize robustness scope limitation empirical
  Q4: language model computer control unreliable inconsistent performance failure cascade

Coverage-gap note: This angle is the disconfirming search. It explicitly targets literature
  showing absence of generalization, error cascades, and scope limitations. Confirmatory angles
  cover what works; this angle covers what does not. SMALL LITERATURE FLAG — the OS-level
  agent field is recent (2023–2025); negative-result publications may be sparse, as the field
  is still in a confirmatory phase. Overlap with Angle 8 (benchmarks) is expected — benchmark
  papers contain failure analyses as sub-sections. This is not synonymy; failure analysis
  requires disconfirming framing that benchmark papers do not foreground.
```

---

### ANGLE D1: LLM Agents as Offensive Attack Tools — Malicious OS Automation
```
ANGLE D1: LLM Agents as Offensive Attack Tools — Malicious OS Automation
=========================================================================
[ADVERSARIAL-FLAGGED: dispatch in a separate research context with no prior confirmatory
results. Do not run this angle in the same session as Angles 1–13 and N1.]

Vocabulary tradition: Cybersecurity / Threat Research
  Starting vocabulary: malware, attack automation, threat actor, adversarial AI,
    cyberweapon, lateral movement, privilege escalation, offensive tooling, exploit automation
  NOT FROM: AI agents, computer use, tool use, autonomous agents, agentic AI, LLM frameworks
    [these are confirmatory-tradition terms excluded from this generation context]

Angle type: Adversarial-FLAGGED
Predicted research character: empirical
What to extract: Documented or demonstrated use of LLM agents to automate cyberattacks;
  autonomous malware generation and execution; LLM-assisted privilege escalation and lateral
  movement; offensive use of OS-level access capabilities; threat models from the attacker's
  perspective rather than the defender's; scenarios where agent capabilities make attacks
  faster, cheaper, or more scalable

Source type (academic): arXiv cs.CR; IEEE S&P, USENIX Security, NDSS, CCS proceedings
Source type (practitioner): DEF CON and Black Hat talk archives; threat intelligence reports
  (Mandiant, CrowdStrike, MITRE ATT&CK LLM extensions); security researcher blogs

Queries:
  Q1: LLM automated attack malware generation operating system privilege escalation 2024 2025
  Q2: AI cyberattack automation threat actor offensive use language model OS exploitation
  Q3: large language model malicious automation lateral movement attack campaign autonomous
  Q4: generative AI cybersecurity offensive tool threat model operating system attack vector

Coverage-gap note: This angle searches from the attacker's framing. Defensive detection and
  mitigation of these attacks is NOT targeted here — that is confirmatory territory (Angle 4,
  Angle 5). This angle targets literature where the agent IS the weapon, not where the agent
  is attacked.
```

---

### ANGLE C1: Behavioral Specification and Formal Verification of OS-Level Agent Actions
```
ANGLE C1: Behavioral Specification and Formal Verification of OS-Level Agent Actions
======================================================================================
Vocabulary tradition: Software Engineering / Formal Verification
  [Cross-disciplinary: this tradition was NOT in the intake brief]
Angle type: Cross-disciplinary
Predicted research character: gap
What to extract: Formal specification of permissible OS-level agent actions; contract-based
  approaches to agent-OS interaction (pre/post-conditions, invariants); runtime verification
  of agent behavior against OS API contracts; synthesis-guided approaches to generating
  provably-correct OS action sequences; connections between formal methods community and
  LLM agent community

Source type (academic): arXiv cs.SE + cs.PL; ICSE, FSE, PLDI, FM proceedings;
  Formal Methods in Computer Science journals
Source type (practitioner): GitHub — formal verification tooling (Coq/Lean/Isabelle specs
  for OS interactions); SPIN/TLA+ specifications for concurrent agent-OS access

Queries:
  Q1: autonomous agent OS interaction formal specification behavioral verification 2024 2025
  Q2: AI agent system call correctness formal methods contract pre-postcondition runtime
  Q3: language model program synthesis operating system API formal correctness verification
  Q4: LLM agent behavioral specification runtime monitoring OS operation invariant enforcement

Coverage-gap note: This is predicted to be a gap angle — there is likely sparse direct
  intersection of formal verification and LLM agents for OS tasks. Literature from formal
  verification of robotic/autonomous systems (adjacent) may serve as the closest proxy.
  Pearl-growing from "autonomous system formal verification" is recommended before treating
  null results as definitive absence.
```

---

### ANGLE C2: Human Oversight, Trust Calibration, and Supervisory Control of OS-Level Agents
```
ANGLE C2: Human Oversight, Trust Calibration, and Supervisory Control of OS-Level Agents
==========================================================================================
Vocabulary tradition: Human Factors / Organizational Psychology
  [Cross-disciplinary: this tradition was NOT in the intake brief]
Angle type: Cross-disciplinary
Predicted research character: consensus
What to extract: How humans form trust in agents with OS-level access; mode confusion
  when agents act autonomously on files and processes; interruption and intervention
  design for agents with irreversible OS operations (file deletion, process termination);
  situation awareness for human operators supervising OS agents; transfer from human factors
  in aviation/process control (supervisory control of automation) to OS agent contexts

Source type (academic): ACM CHI; Human Factors journal; arXiv cs.HC; IJHCI;
  Ergonomics; Applied Ergonomics
Source type (practitioner): UX research reports on AI agent oversight design; product
  design blogs on human-in-the-loop automation interfaces

Queries:
  Q1: human oversight autonomous agent operating system trust calibration control 2024 2025
  Q2: human-in-the-loop AI agent OS-level task interruption irreversible action interface
  Q3: supervisory control automation trust AI agent situation awareness operator oversight
  Q4: user trust AI desktop agent oversight mode confusion automation autonomy levels

Coverage-gap note: This angle imports supervisory control of automation literature (aviation,
  process control) into the OS-agent context. The direct intersection with LLM agents may be
  sparse; the adjacent literature on human-automation interaction is rich. Query 3 intentionally
  uses the Human Factors vocabulary ("supervisory control", "situation awareness") rather than
  AI vocabulary to reach this literature.
```

---

## GATE SUMMARY

Running all four quality gates against the 17-angle list above.

### Gate 1 — Completeness

- [x] **Null-hypothesis angle present:** Angle N1 — "Evidence That OS-Level LLM Agents Fail,
  Do Not Generalize, or Are Unreliable." Query set contains: "failure," "negative result,"
  "does not generalize," "breakdown," "unreliable," "inconsistent." Framing is explicitly
  disconfirming and structurally separate from confirmatory angles. PASS.

- [x] **Adversarial angle present:** Angle D1 is labeled
  `[ADVERSARIAL-FLAGGED: dispatch in a separate research context with no prior confirmatory
  results]`. Label is present with dispatch note. PASS.

- [x] **Cross-disciplinary angle present:** Angle C1 (Software Engineering / Formal
  Verification) and Angle C2 (Human Factors / Organizational Psychology) both target traditions
  NOT in the intake brief's candidate vocabulary traditions list. Verified: neither SE/Formal
  Verification nor Human Factors / Organizational Psychology appear in the 5 intake-brief
  traditions. PASS.

- [x] **Source-type coverage:** Domain maturity estimated MIXED. At least one angle assigns a
  practitioner source: Angles 1, 2, 4, 5, 6, 7, 8, 9, 10, 12 all name practitioner sources
  (GitHub repos, vendor reports, security blogs). PASS.

- [x] **Vocabulary-tradition map populated:** Coverage map has 5 intake-brief traditions +
  2 additional traditions identified during generation. All have distinct labels. PASS.

**Gate 1: PASS**

---

### Gate 2 — Distinctness

**Boolean-connective test — checking pairs with shared parent tradition:**

*AI Agents sub-tradition angles (A1, A2, A8, A9, A10, N1):*
- A1 vs A2: A1 uses "tool use", "function calling", "ReAct"; A2 uses "screenshot", "mouse
  keyboard simulation", "pixel-level", "vision language model". OR retrieval would NOT return
  substantially the same documents. PASS.
- A1 vs A8: A1 uses architecture terms; A8 uses "OSWorld", "WindowsAgentArena", "benchmark",
  "success rate". PASS.
- A1 vs A9: A1 uses architecture terms; A9 uses "long-horizon", "hierarchical", "task
  decomposition". PASS.
- A2 vs A8: A2 covers screenshot modality; A8 covers evaluation methodology (which includes
  but is not limited to screenshot-based agents). Overlap expected but not synonymy — A8
  covers benchmarks across ALL agent types; A2 covers the specific screenshot paradigm. PASS
  with note: some papers will appear in both result sets.
- A9 vs A10: A9 uses "long-horizon planning", "hierarchical", "decomposition"; A10 uses
  "multi-agent", "coordination", "concurrent", "parallel". PASS.
- N1 vs all confirmatory: N1 uses disconfirming vocabulary ("failure", "does not generalize",
  "negative result"). Null-hypothesis framing is structurally distinct. PASS.

*Security sub-tradition angles (A4, A5, A11):*
- A4 vs A5: A4 uses "sandboxing", "container", "privilege restriction", "isolation"; A5 uses
  "prompt injection", "adversarial input", "attack vector", "exploitation". PASS.
- A4 vs A11: A4 uses "isolation mechanisms", "access control", "security boundary"; A11 uses
  "data exfiltration", "privacy", "personal data", "GDPR". PASS.
- A5 vs A11: A5 uses "prompt injection", "attack"; A11 uses "privacy", "data leakage",
  "confidential". PASS.

*SE angles (A12 vs C1):*
- A12 uses "CI CD", "SWE-bench", "Devin", "coding agent", "software development"; C1 uses
  "formal specification", "pre-postcondition", "Coq/Lean/Isabelle", "contract verification".
  PASS — different sub-traditions with different vocabulary pools.

**Vocabulary-tradition distinctness check:**
Each of the 17 angles carries a unique tradition label string. No two non-null-hypothesis,
non-adversarial angles share an identical label. Sub-labels within the same parent tradition
(e.g., "AI Agents / ML Systems — Tool-Use Architecture" vs. "AI Agents / ML Systems —
Computer Use (Multimodal)") are distinct strings.

**VOCABULARY SELF-REPORT FLAG:** All traditions were enumerated by LLM only (Source B
unavailable). External validation via survey-paper probe is recommended before treating the
tradition check as definitive.

**Gate 2: PASS** (with VOCABULARY SELF-REPORT FLAG noted)

---

### Gate 3 — Launchability

Sampled check across all 17 angles:
- Every angle has at least 3 concrete, runnable query strings.
- No query contains "TBD," "[fill in]," or placeholder markers — verified by inspection.
- All "Source type (academic)" fields name a specific platform (arXiv cs.CL + cs.LG, arXiv
  cs.CR, ACM CHI, SSRN, etc.).
- All "Source type (practitioner)" fields name a specific platform or are explicitly noted
  as deprioritized with reason.
- Angle 13 (legal/regulatory) uses SSRN + law reviews as academic source — this is a
  legitimate platform designation for that tradition.

**Gate 3: PASS**

---

### Gate 4 — Scoring Prohibition

- No angle record contains phrases "most promising," "most relevant," "strongest angle," or
  equivalent subjective assessments.
- Type allocations were made on structural criteria: vocabulary-tradition coverage, angle-type
  requirements (null-hypothesis, adversarial, cross-disciplinary must be present), source-type
  coverage.
- No angle was filtered or ranked on "which seems most novel."

**Gate 4: PASS**

---

### Overall Verdict

```
GATE SUMMARY
============
Gate 1 — Completeness:   PASS
Gate 2 — Distinctness:   PASS (with VOCABULARY SELF-REPORT FLAG)
Gate 3 — Launchability:  PASS
Gate 4 — Scoring:        PASS

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all 5 intake-brief traditions were enumerated by LLM only;
     a survey-paper probe (e.g., `"LLM agent operating system" survey 2024 2025`) is recommended
     before treating the tradition list as complete; traditions the LLM cannot enumerate may
     be missing.
  2. SMALL LITERATURE FLAG on Angle N1 — negative-result literature may be sparse; overlap
     with Angle 8 (benchmarks) is expected and does not indicate synonymy.
  3. GAP prediction on Angle C1 (Formal Verification) — direct intersection of formal methods
     and LLM OS agents may be sparse; adjacent literature on autonomous system verification
     is recommended as pearl-growing entry point.
  4. Angle 13 (Legal/Regulatory) — this angle targets a nascent literature; results may be
     predominantly frameworks and opinion pieces rather than empirical studies; expected
     research character is CONSENSUS but actual density may be lower.
  5. Multi-angle overlap (Angles 4, 5, 11, D1) — all touch security but from distinct facets
     (isolation, injection attacks, privacy, offensive use). If corpus is small, a researcher
     may choose to consolidate into 2 angles rather than 4; this is a scope decision for
     the human researcher, not an automatic merge.
```

---

## ANGLE LIST SUMMARY

| # | Title | Tradition | Type | Character |
|---|-------|-----------|------|-----------|
| 1 | LLM Agent Architectures for OS-Level Tool Use | AI Agents — Tool-Use Architecture | Confirmatory | empirical |
| 2 | Computer Use Paradigm — Screenshot-Based OS Control | AI Agents — Computer Use (Multimodal) | Confirmatory | empirical |
| 3 | OS-Level API Abstraction and Interface Design | Systems / OS Research | Confirmatory | consensus |
| 4 | Security Sandboxing and Isolation | Security — Sandboxing and Isolation | Confirmatory | empirical |
| 5 | Prompt Injection and Adversarial Attacks | Security — Adversarial Attacks | Confirmatory | empirical |
| 6 | RPA and Desktop Automation Integration | RPA / Enterprise Automation | Confirmatory | consensus |
| 7 | Visual Grounding and GUI Element Localization | HCI / Computer Vision — Visual Grounding | Confirmatory | empirical |
| 8 | Benchmarks and Evaluation Methodology | AI Agents — Evaluation Methodology | Confirmatory | empirical |
| 9 | Long-Horizon Planning and Task Decomposition | AI Agents — Task Planning and Reasoning | Confirmatory | empirical |
| 10 | Multi-Agent Coordination for OS Tasks | AI Agents — Multi-Agent Coordination | Confirmatory | empirical |
| 11 | Privacy and Data Exfiltration Risks | Security — Privacy and Data Protection | Confirmatory | empirical |
| 12 | Software Development Automation (CI/CD, Coding Agents) | Software Engineering / DevOps | Confirmatory | empirical |
| 13 | Legal and Regulatory Implications | AI Policy / Legal Studies | Confirmatory | consensus |
| N1 | Failure Modes and Non-Generalization (Null-Hypothesis) | AI Agents — Failure Analysis | Null-hypothesis | empirical |
| D1 | LLM Agents as Offensive Attack Tools [ADVERSARIAL-FLAGGED] | Cybersecurity / Threat Research | Adversarial | empirical |
| C1 | Behavioral Specification and Formal Verification | SE / Formal Verification [cross-disciplinary] | Cross-disciplinary | gap |
| C2 | Human Oversight, Trust Calibration, Supervisory Control | Human Factors [cross-disciplinary] | Cross-disciplinary | consensus |

**Total angles: 17**
**Distinct vocabulary traditions (parent labels): 10**
  1. AI Agents / ML Systems (sub-traditions: Tool-Use, Computer Use, Evaluation, Planning, Multi-Agent, Failure Analysis)
  2. Systems / OS Research
  3. Security / Safety (sub-traditions: Sandboxing, Adversarial Attacks, Privacy)
  4. RPA / Enterprise Automation
  5. HCI / Computer Vision
  6. Software Engineering / DevOps
  7. AI Policy / Legal Studies
  8. Cybersecurity / Threat Research
  9. Software Engineering / Formal Verification
  10. Human Factors / Organizational Psychology

---

*What is missing or questionable in this output:*

1. **Source B gap remains open.** No survey paper probe was run (subagent context). The tradition list may be missing traditions that only appear in survey-paper title vocabulary. The largest risk is a tradition this LLM has not encoded — e.g., a robotics sub-tradition that frames OS agents as "digital embodied agents" or a systems security tradition using different vocabulary than what I've covered. A researcher should run `"LLM agent operating system" survey 2024 2025` on Semantic Scholar before finalizing the angle list.

2. **No angle covers performance overhead / efficiency of OS-level agent execution** (latency, token cost, API call cost). This is a systems engineering concern that sits at the boundary of Angles 1 and 3 but is not directly targeted by either. A researcher focused on production deployment should add an angle targeting this.

3. **Multi-agent security (Angle 10 gap)** — the gap note in Angle 10 flags that security of concurrent multi-agent OS access is not covered. If the research scope includes adversarial scenarios involving multiple agents, this gap should be addressed.
