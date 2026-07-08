# Angle-Gen-Kit Output — Condition C
## Input 17: LLM Agents Operating at OS Level

---

## INTAKE BRIEF
============
**Topic:** LLM agents that autonomously control OS-level resources — files, processes, and applications — to accomplish tasks.

**Anchor vocabulary:**
- "LLM agents" — ML/NLP systems tradition
- "operating system level" — Computer systems/OS tradition
- "controlling files, processes, and applications" — Computer systems/OS tradition (also HCI/automation framing)

**Source A — LLM translation (required):**
- "LLM agents" → autonomous agents, AI agents, tool-augmented LLMs, function-calling models, agentic systems, ReAct agents, computer use agents, agent frameworks
- "operating system level" → OS-level control, system-level, shell-level, computer use, desktop automation, GUI automation, terminal access, system call interface
- "controlling files, processes, applications" → file system access, process spawning, shell execution, system calls, CLI automation, desktop GUI control, app orchestration, resource management

**Source B:** UNAVAILABLE (deployment constraint — subagent context without web access)

**Source C — Absent-term signal:**
The user did NOT use: "computer use," "ReAct," "sandboxing," "robotic process automation," "privilege escalation," "prompt injection," "GUI automation," "OSWorld," "function calling," "corrigibility," "CFAA," "capability-based security." These absent terms indicate the user is entering from a general/non-tradition-specific framing, not from any single research community's vocabulary.

**Candidate vocabulary traditions:**
1. ML/NLP systems — LLM agents, tool-augmented LLM, ReAct, agentic systems, computer use agents, autonomous LLM, function calling, agent frameworks
2. Empirical ML evaluation / benchmarking — OSWorld, AgentBench, WebArena, task success rate, benchmark design, computer use evaluation
3. Computer systems / OS design — sandboxing, process isolation, system calls, file system, container, kernel, resource management, privilege, OS permissions
4. Cybersecurity / security engineering — privilege escalation, attack surface, access control, threat modeling, malicious command execution, lateral movement, OS-level attack
5. Adversarial ML / robustness — prompt injection, indirect prompt injection, adversarial inputs, jailbreaking, instruction hijacking, adversarial robustness, tool misuse
6. AI safety / alignment — unintended behaviors, corrigibility, goal misspecification, reward hacking, autonomous agent safety, human oversight, minimal footprint
7. HCI / robotic process automation — robotic process automation, desktop automation, GUI automation, workflow automation, screen scraping, task automation, UiPath
8. Multimodal ML / computer vision — visual grounding, screen understanding, GUI element detection, pixel-level interaction, screenshot parsing, OCR, vision-language models
9. Software engineering / code agents — code execution agents, agentic software development, automated coding, CI/CD, scaffolding, SWE-bench, file editing agents
10. Formal methods / security theory — capability-based security, principle of least privilege, access control models, formal specification, Bell-LaPadula, information flow control

NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper such as the OSWorld paper, an OS agent security survey, or an RPA systematic review) is recommended before accepting the angle list as covering all traditions.

**Question type:** EXPLORATORY
(No comparison language or intervention-outcome structure in the prompt. "I want to research X" is the canonical exploratory framing.)

**Scope markers:** OS-level specifically; files, processes, and applications explicitly enumerated. Web browser-only agents and API-only agents are at the edge of scope — the user's phrasing suggests interest in the OS resource control surface, not purely web-based interaction.

**Known exclusions:** None stated.

**Domain maturity estimate:** MIXED
Basis: The topic includes recent academic research (arXiv papers on computer use agents, OSWorld benchmark, security analyses of OS-controlling agents, 2023–2025) AND heavy practitioner production (GitHub repos for agent frameworks, open-source RPA tools, security research blogs, practitioner incident reports). Practitioner sources REQUIRED for this domain.

**Survey paper status:** Source B UNAVAILABLE — not consulted.

**Source B status:** UNAVAILABLE — MODERATE
Source A + Source C together identified ≥8 distinct vocabulary traditions (ML/NLP, computer systems, cybersecurity, AI safety, HCI/RPA, software engineering, adversarial ML, formal methods, multimodal ML, benchmarking). Severity assessment: MODERATE — proceeding. VOCABULARY SELF-REPORT FLAG is active.

**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions in this brief were enumerated by LLM only. No survey paper was consulted. External validation via survey-paper probe is recommended before accepting the tradition check as complete or the angle list as covering all traditions. Pearl-growing from OSWorld (2024, arXiv) or an OS agent security paper is the recommended entry point.

---

## COVERAGE MAP
============

**Tradition 1: ML/NLP systems (LLM agent architecture, tool use, function calling)**
  Representative terms: LLM agents, tool-augmented LLM, ReAct, agentic systems, computer use agents, autonomous LLM, function calling, agent loop
  Planned angle slot: Confirmatory A1
  Gap flag: No

**Tradition 2: Empirical ML evaluation / benchmarking (OS agent task performance)**
  Representative terms: OSWorld, WebArena, AgentBench, task success rate, benchmark design, computer use evaluation, human baseline comparison
  Planned angle slot: Confirmatory A2
  Gap flag: No

**Tradition 3: Computer systems / OS design (sandboxing, process isolation)**
  Representative terms: sandboxing, container isolation, process isolation, system calls, OS permissions, file system access control, kernel interface, namespace isolation
  Planned angle slot: Confirmatory A3
  Gap flag: No

**Tradition 4: Cybersecurity / security engineering (threat modeling, attack surfaces)**
  Representative terms: privilege escalation, attack surface, threat modeling, malicious command execution, lateral movement, data exfiltration, OS-level attack, red team
  Planned angle slot: Confirmatory A4
  Gap flag: No

**Tradition 5: Adversarial ML / robustness (prompt injection, instruction hijacking)**
  Representative terms: prompt injection, indirect prompt injection, adversarial inputs, jailbreaking, instruction hijacking, adversarial robustness, tool call manipulation
  Planned angle slot: Confirmatory A5
  Gap flag: No

**Tradition 6: AI safety / alignment (unintended behaviors, corrigibility)**
  Representative terms: unintended behaviors, corrigibility, goal misspecification, reward hacking, autonomous agent safety, human oversight, minimal footprint, irreversible actions
  Planned angle slot: Confirmatory A6
  Gap flag: No

**Tradition 7: HCI / robotic process automation (pre-LLM desktop automation)**
  Representative terms: robotic process automation, desktop automation, GUI automation, workflow automation, screen scraping, UiPath, AutoHotKey, task automation
  Planned angle slot: Confirmatory A7
  Gap flag: No

**Tradition 8: Multimodal ML / computer vision (visual grounding, screen understanding)**
  Representative terms: visual grounding, screen understanding, GUI element detection, screenshot parsing, OCR, vision-language models, SeeClick, CogAgent
  Planned angle slot: Confirmatory A8
  Gap flag: No

**Tradition 9: Software engineering / code agents (code execution, SWE agents)**
  Representative terms: code execution agents, agentic software development, automated coding, SWE-bench, scaffolding, Devin, OpenDevin, file editing agents
  Planned angle slot: Confirmatory A9
  Gap flag: No

**Tradition 10: Formal methods / security theory (capability models, access control)**
  Representative terms: capability-based security, principle of least privilege, access control models, formal specification, Bell-LaPadula, information flow control, ambient authority
  Planned angle slot: Confirmatory A10
  Gap flag: No

**Traditions NOT yet represented in planned list:**
  All 10 traditions from intake brief have planned angle slots.
  Note: Multi-agent coordination (multiple LLMs sharing OS access) is a sub-theme of Tradition 1 — addressed in A1 coverage-gap note rather than as a separate angle.

**Cross-disciplinary slot (required):**
  Target tradition: Law / digital governance / legal accountability
  NOT in intake brief — the user's framing is entirely technical
  Basis: Autonomous OS-level actions by AI agents raise legal accountability questions (data protection law, unauthorized computer access statutes, liability for automated actions) studied in legal scholarship and governance research. This vocabulary (CFAA, EU AI Act, data controller liability, AI accountability frameworks) is entirely absent from all 10 intake-brief traditions.

**Adversarial slot:**
  Target tradition: Business process management / enterprise information systems
  NOT FROM: any of the 10 confirmatory traditions
  Starting vocabulary: business process automation, workflow governance, organizational risk, IT governance, adoption barriers, process audit trail, compliance, shadow IT, change management, ROI of automation
  Basis: BPM and enterprise IS research studies organizational adoption and governance of automation systems from a management perspective. Its vocabulary is entirely absent from the technical traditions and would retrieve papers that technical searches miss.

---

## TYPE ALLOCATIONS
================

Slot A1 (Confirmatory — ML/NLP systems): LLM agent architecture and OS-level tool integration
Slot A2 (Confirmatory — Empirical ML evaluation): Computer use agent benchmarks and evaluation
Slot A3 (Confirmatory — Computer systems / OS design): OS sandboxing and process isolation for LLM agents
Slot A4 (Confirmatory — Cybersecurity): Threat modeling and attack surface for OS-level agents
Slot A5 (Confirmatory — Adversarial ML): Prompt injection and adversarial robustness at OS level
Slot A6 (Confirmatory — AI safety): Unintended behaviors and alignment in OS-controlling agents
Slot A7 (Confirmatory — HCI / RPA): Desktop automation and RPA as predecessor tradition
Slot A8 (Confirmatory — Multimodal ML): Multimodal GUI interaction and screen understanding
Slot A9 (Confirmatory — Software engineering): Code execution agents and software engineering automation
Slot A10 (Confirmatory — Formal methods): Formal access control models applied to LLM agents
Slot N1 (Null-hypothesis): Evidence that OS-level LLM agents fail, are unreliable, or cause harm
Slot D1 (Adversarial, ADVERSARIAL-FLAGGED): Enterprise IS and BPM perspective on OS-level AI agent adoption
Slot C1 (Cross-disciplinary): Legal and governance frameworks for autonomous OS-level AI actions

**Total: 13 angles**

Justification for 13 angles (above standard 5–12 range): This topic spans ≥8 distinct vocabulary traditions across computer science, security, AI safety, HCI, software engineering, formal methods, multimodal ML, and law. It qualifies as a complex multi-tradition domain (≥4 traditions identified) per angle-generation.md. 13 angles is conservative relative to the 20–30 range appropriate for hard inputs; the lower count reflects the VOCABULARY SELF-REPORT FLAG limiting discovery confidence — a survey-paper bootstrap would likely expand the tradition count further.

---

## FULL ANGLE LIST

---

### ANGLE 1: LLM Agent Architecture and OS-Level Tool Integration
===========
**Vocabulary tradition:** ML/NLP systems (tool-augmented LLM / agentic systems)
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Architectural patterns for OS tool integration; tool call formats (function calling, shell invocation, bash execution); agent loop designs (ReAct, Plan-and-Execute, Reflexion variants); failure modes in tool use; ablation studies on OS-level tool effectiveness; multi-agent OS access coordination; latency and reliability of OS tool calls

**Source type (academic):** arXiv cs.CL + cs.LG
**Source type (practitioner):** GitHub — high-starred agent framework repos (LangChain, AutoGen, open-interpreter, Claude computer use, smolagents); README vocabulary is the practitioner framing signal

**Queries:**
  Q1: `LLM agent operating system tool use file process control autonomous 2023 2024 2025`
  Q2: `language model agent shell execution bash function calling architecture ReAct computer use`
  Q3: `agentic AI system OS-level resource management tool integration empirical evaluation`

**Coverage-gap note:** Multi-agent coordination (multiple LLM agents sharing OS access with permission delegation) is a sub-pattern not well covered by single-agent-focused searches; a targeted follow-up query may be needed.

---

### ANGLE 2: Computer Use Agent Benchmarks and Evaluation
===========
**Vocabulary tradition:** Empirical ML evaluation / benchmarking
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Benchmark design choices; task categories covered (file management, application control, system configuration); success rate metrics; human baseline comparisons; reported performance ceilings; evaluation reproducibility; ecological validity critiques of benchmark tasks vs. real-world OS usage

**Source type (academic):** arXiv cs.AI + cs.LG
**Source type (practitioner):** GitHub — OSWorld, AgentBench, ScreenAgent, WorkArena, AssistGUI benchmark repositories (code + issue threads reveal evaluation design decisions)

**Queries:**
  Q1: `OSWorld benchmark computer use agent desktop task evaluation 2024 2025`
  Q2: `AgentBench WebArena evaluation framework OS-level agent task success rate comparison`
  Q3: `desktop GUI agent benchmark file management application control evaluation metric design`

**Coverage-gap note:** Evaluation of long-horizon multi-step OS tasks (>10 steps) vs. single-action benchmarks is an underrepresented facet; benchmark ecological validity debates may require a separate search.

---

### ANGLE 3: OS Sandboxing and Process Isolation for LLM Agents
===========
**Vocabulary tradition:** Computer systems / OS design (sandboxing, containerization, process isolation)
**Angle type:** Confirmatory
**Predicted research character:** consensus (practitioner-heavy; academic OS security literature exists but LLM-specific sandboxing is nascent)
**What to extract:** Sandboxing approaches (Docker containers, VMs, seccomp syscall filtering, namespaces); implementation patterns in agent frameworks; performance overhead of isolation; escape risk analysis; integration difficulty with agent tool loops; tradeoffs between security and agent capability

**Source type (academic):** arXiv cs.CR + cs.SY
**Source type (practitioner):** GitHub — sandbox implementations for code execution agents (E2B sandbox, Modal containers, Docker-based agent sandboxes, code interpreter implementations); security research blog posts on agent containment

**Queries:**
  Q1: `LLM agent sandbox container isolation OS execution security syscall filtering 2023 2024 2025`
  Q2: `code execution agent safe environment Docker VM namespace privilege containment implementation`
  Q3: `autonomous agent process isolation operating system design containment escape risk`

**Coverage-gap note:** Formal security proofs for sandbox implementations and empirical performance overhead studies are sparse in the current LLM-agent context; prior work on mobile OS sandboxing (Android, iOS) may transfer but requires explicit bridge search.

---

### ANGLE 4: Cybersecurity Threat Modeling for OS-Level LLM Agents
===========
**Vocabulary tradition:** Cybersecurity / security engineering
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Attack surface enumeration specific to LLM agents with OS access; threat categories (privilege escalation, lateral movement, data exfiltration, malicious command execution); red-team findings; STRIDE or MITRE ATLAS analysis applied to agent systems; supply chain risks in agent tool ecosystems; documented real-world incidents

**Source type (academic):** arXiv cs.CR + cs.AI
**Source type (practitioner):** USENIX Security / IEEE S&P proceedings blogs; MITRE ATLAS framework documentation; security research firms' blog posts on AI agent attacks

**Queries:**
  Q1: `LLM agent cybersecurity threat model attack surface OS privilege escalation 2024 2025`
  Q2: `AI agent red team operating system security vulnerability exploitation data exfiltration`
  Q3: `autonomous agent malicious command execution threat analysis MITRE ATLAS computer use attack`

**Coverage-gap note:** Threat modeling specifically for multi-step chained OS actions (where each step appears benign but the sequence is malicious) is underrepresented relative to single-action attack analyses.

---

### ANGLE 5: Prompt Injection and Adversarial Robustness at OS Level
===========
**Vocabulary tradition:** Adversarial ML / robustness (prompt injection, instruction hijacking)
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Prompt injection attack vectors specific to OS-agent contexts; indirect prompt injection via environment content (file contents, application output, web pages read by agent); robustness of agents to adversarial environmental content; attack success rates; defense mechanisms and their effectiveness; injection via system logs, clipboard, filenames

**Source type (academic):** arXiv cs.CR + cs.LG (also cs.CL for NLP-framing papers)
**Source type (practitioner):** GitHub — prompt injection research repos, adversarial agent attack proof-of-concept implementations; security disclosure reports

**Queries:**
  Q1: `prompt injection LLM agent tool use indirect OS file content attack robustness 2024 2025`
  Q2: `adversarial input language model agent operating system hijacking instruction override`
  Q3: `indirect prompt injection autonomous agent environmental manipulation OS file system attack vector`

**Coverage-gap note:** Defense mechanisms that successfully reduce prompt injection risk in OS-level contexts are less studied than attack demonstrations; the defensive side may require supplementary search augmentation.

---

### ANGLE 6: AI Safety and Alignment in OS-Controlling Agents
===========
**Vocabulary tradition:** AI safety / alignment
**Angle type:** Confirmatory
**Predicted research character:** empirical + consensus (mix of technical measurement papers and position/framework papers)
**What to extract:** Failure modes from misspecified goals at OS level; corrigibility mechanisms in agentic systems; human oversight designs; interruption and correction mechanisms; safety constraints for autonomous OS actions; minimal footprint principles; irreversible action prevention; task specification ambiguity effects on OS behavior

**Source type (academic):** arXiv cs.AI + cs.LG (alignment-focused work; also SafeAI workshop proceedings, NeurIPS alignment workshops)
**Source type (practitioner):** AI safety organization technical reports (Anthropic, DeepMind, ARC Evals); GitHub for safety constraint implementations in agent frameworks

**Queries:**
  Q1: `AI agent safety alignment autonomous OS actions oversight corrigibility irreversible 2024 2025`
  Q2: `LLM agent goal misspecification unintended behavior operating system resource modification`
  Q3: `minimal footprint autonomous agent safety constraint human oversight computer use`

**Coverage-gap note:** Empirical measurement of alignment failure rates in OS-level agents (as opposed to theoretical frameworks) is sparse; most existing work is case-study-based or positions-paper framing.

---

### ANGLE 7: Desktop Automation and RPA as Pre-LLM Predecessor Tradition
===========
**Vocabulary tradition:** HCI / robotic process automation (RPA)
**Angle type:** Confirmatory
**Predicted research character:** consensus (established practitioner and academic HCI/IS literature)
**What to extract:** RPA design patterns and architectural decisions; documented failure modes of pre-LLM desktop automation; what RPA solved and what it could not handle (brittleness, maintenance cost, exception handling); organizational adoption lessons; comparison frameworks for RPA vs. LLM-based agents; what the RPA literature established about screen interaction challenges

**Source type (academic):** ACM Digital Library (CSCW, CHI, ECIS); Semantic Scholar for IS/HCI papers
**Source type (practitioner):** UiPath, Automation Anywhere, Blue Prism documentation and case study libraries; Gartner RPA market analysis; HN / Reddit threads on RPA failure experiences

**Queries:**
  Q1: `robotic process automation RPA desktop automation failure modes limitations maintenance 2019 2020 2021 2022 2023`
  Q2: `RPA vs AI agent comparison automated GUI workflow OS application control transition`
  Q3: `cognitive automation screen scraping enterprise workflow automation challenges lessons learned`

**Coverage-gap note:** Migration paths from RPA to LLM-based agents and hybrid RPA+LLM architectures are an emerging area (2024–2025) not well covered in the established RPA literature; a separate recency-filtered search may be needed.

---

### ANGLE 8: Multimodal GUI Interaction and Screen Understanding
===========
**Vocabulary tradition:** Multimodal ML / computer vision (visual grounding, screen understanding)
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Vision-language model capabilities for GUI element detection and localization; click/type action grounding accuracy; screenshot parsing approaches; OCR integration; performance benchmarks on GUI understanding tasks; limitations in visual understanding of GUIs (small targets, dynamic UIs, accessibility issues, non-English interfaces)

**Source type (academic):** arXiv cs.CV + cs.LG
**Source type (practitioner):** GitHub — GUI understanding model repos (SeeClick, CogAgent, OmniParser, SomAgent, UGround); model cards and README files for deployed screen-understanding models

**Queries:**
  Q1: `vision language model GUI element detection grounding screenshot LLM agent 2023 2024 2025`
  Q2: `multimodal agent screen understanding desktop interface visual grounding localization accuracy`
  Q3: `GUI action grounding pixel-level interaction operating system screenshot parsing vision model`

**Coverage-gap note:** Generalization across OS themes (dark mode, high-contrast modes, accessibility settings, non-English locales, varying screen resolutions) is not well covered in benchmark papers; robustness to UI variation is a known gap.

---

### ANGLE 9: Code Execution Agents and Software Engineering Automation
===========
**Vocabulary tradition:** Software engineering / code agents
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Agentic coding architectures (Devin-style, OpenDevin); code execution loops with OS feedback; SWE-bench performance and task categories; file editing and repository manipulation approaches; scaffolding patterns; CI/CD pipeline automation; real-world software engineering task performance vs. benchmark gaps

**Source type (academic):** arXiv cs.SE + cs.LG
**Source type (practitioner):** GitHub — SWE-agent, Devin, Aider, OpenHands/OpenDevin, Cursor agent repos; engineering blog posts from companies shipping code agents

**Queries:**
  Q1: `LLM agent software engineering code execution file editing SWE-bench agentic 2024 2025`
  Q2: `autonomous coding agent shell command execution repository manipulation scaffolding architecture`
  Q3: `agentic software development pipeline file system OS integration empirical evaluation`

**Coverage-gap note:** Security aspects of code execution agents (executing model-generated code with OS access on real systems) overlap with Angles 3 and 4; this angle focuses specifically on the software engineering task framing and performance, not the attack surface.

---

### ANGLE 10: Formal Access Control Models Applied to LLM Agents
===========
**Vocabulary tradition:** Formal methods / security theory (capability-based security, access control models)
**Angle type:** Confirmatory
**Predicted research character:** gap (very sparse literature; nascent application of established formal security theory to LLM agent contexts)
**What to extract:** Applications of capability-based security, DAC/MAC models, and principle of least privilege to LLM agent permission design; any formal specification approaches proposed for agent OS permissions; prior work from mobile OS permission models (Android) that may transfer; access control proposals in agent framework papers; information flow control applied to agent tool calls

**Source type (academic):** arXiv cs.CR + cs.LO; ACM CCS proceedings (Semantic Scholar); IEEE S&P proceedings
**Source type (practitioner):** Security architecture blog posts; GitHub for permission model proposals in agent frameworks (e.g., capability-scoped tool definitions)

**Queries:**
  Q1: `LLM agent permission model capability-based security principle least privilege formal 2023 2024 2025`
  Q2: `autonomous agent access control information flow formal specification OS permission design`
  Q3: `AI agent authorization model sandboxing formal security policy ambient authority`

**Coverage-gap note:** This angle is predicted to return sparse results — formal treatment of LLM agent permissions is nascent. The absence of literature is itself a useful finding documenting an unstudied area.

---

### ANGLE 11 [N1]: Evidence That OS-Level LLM Agents Fail, Are Unreliable, or Cause Harm
===========
**Vocabulary tradition:** Disconfirming / null-hypothesis (cross-tradition framing)
**Angle type:** Null-hypothesis
**Predicted research character:** empirical (growing; negative results appear in benchmark analyses, red-team reports, and user incident accounts)
**What to extract:** Documented failure modes in OS-level task execution; reported incidents of unintended system modifications, data loss, or process crashes; benchmark performance ceilings and what tasks agents consistently fail at; conditions under which OS agents do NOT generalize; negative replication results; practitioner accounts of agent-caused system damage; evidence that current agents are not reliable enough for production OS access

**Source type (academic):** arXiv cs.AI + cs.LG + cs.CR (papers reporting failures, limitations, negative results in agent evaluations)
**Source type (practitioner):** GitHub issues in agent framework repos (issue threads document real failures); practitioner post-mortems; security disclosure reports; Stack Overflow threads on agent failures

**Queries:**
  Q1: `LLM agent operating system failure negative result unreliable harmful unintended action 2024 2025`
  Q2: `autonomous agent OS control task failure case study data loss unintended file deletion process crash`
  Q3: `computer use agent limitations benchmark ceiling failure does not generalize performance analysis`

**Coverage-gap note:** Negative results are systematically underreported in academic venues. GitHub issues and practitioner incident reports are likely the richest source for this angle and should be prioritized over academic databases.

---

### ANGLE 12 [ADVERSARIAL-FLAGGED]: Enterprise IS and Business Process Management Perspective
===========
[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]

**Vocabulary tradition:** Business process management / enterprise information systems
**Angle type:** Adversarial
**Starting vocabulary (generated from BPM/enterprise IS vocabulary):** business process automation, workflow governance, organizational risk, IT governance, enterprise adoption barriers, process audit trail, compliance, shadow IT, change management, process owner accountability, return on investment, automation maturity model
**NOT FROM:** ML/NLP systems, computer systems/OS, cybersecurity, AI safety, HCI/RPA, software engineering, adversarial ML, formal methods, multimodal ML, benchmarking

**Predicted research character:** consensus (practitioner and academic IS literature)
**What to extract:** Organizational barriers to adopting OS-level AI automation; IT governance frameworks for autonomous system deployment; audit trail and accountability requirements from a process perspective; failure modes from an organizational rather than technical perspective; shadow IT risk when employees deploy unauthorized OS agents; ROI and cost analyses; adoption maturity models; change management in automation transitions

**Source type (academic):** Semantic Scholar (IS journals: MIS Quarterly, JMIS, Journal of Information Systems); ACM Digital Library (CSCW, ECIS)
**Source type (practitioner):** Gartner and Forrester research reports (if accessible); enterprise IT governance documentation; process mining tool vendor case studies

**Queries:**
  Q1: `business process automation AI governance enterprise workflow audit compliance organizational risk 2023 2024 2025`
  Q2: `enterprise AI agent adoption barriers IT governance accountability shadow IT workforce automation`
  Q3: `process automation governance framework human oversight accountability business process management`

**Coverage-gap note:** This angle deliberately uses non-technical vocabulary to surface governance and organizational literature that technical searches miss. BPM research may have studied automation governance problems applicable to LLM agents without using LLM vocabulary at all.

---

### ANGLE 13 [C1]: Legal and Governance Frameworks for Autonomous OS-Level AI Actions
===========
**Vocabulary tradition:** Law / digital governance (NOT in intake brief — cross-disciplinary slot)
**Angle type:** Cross-disciplinary
**Predicted research character:** consensus (legal scholarship, policy papers, regulatory guidance documents)
**What to extract:** Legal liability frameworks for AI agent-initiated unauthorized computer access; data protection law implications of agent file access (GDPR, CCPA); EU AI Act applicability to autonomous OS agents; CFAA and equivalent statutes' application to AI-initiated actions; accountability chain when agents cause system damage; regulatory proposals for autonomous AI system deployment; jurisdiction issues for cloud-hosted OS agents

**Source type (academic):** SSRN (legal scholarship preprints — largest volume for this tradition); law review journals; Semantic Scholar for governance/policy papers
**Source type (practitioner):** EU AI Act regulatory guidance; national computer crime law documentation; AI governance organization reports (CSET, AI Now Institute, Ada Lovelace Institute); legal tech blog analysis

**Queries:**
  Q1: `AI agent autonomous computer access legal liability accountability regulation law 2023 2024 2025`
  Q2: `EU AI Act autonomous system operating system data protection GDPR compliance AI governance`
  Q3: `computer fraud abuse act CFAA unauthorized access automated AI system legal framework liability`

**Coverage-gap note:** Legal vocabulary for this space is inconsistent — "autonomous system," "AI agent," and "automated process" may each retrieve different papers in legal databases. Multiple vocabulary variants may be needed, and SSRN subject headings (Cyberlaw, Law and Technology) should be used alongside keyword search.

---

## GATE SUMMARY
============

**Gate 1 — Completeness:**
- Null-hypothesis angle present: PASS — Angle 11 explicitly frames disconfirming search with "failure," "unreliable," "does not generalize" vocabulary
- Adversarial angle present: PASS — Angle 12 labeled ADVERSARIAL-FLAGGED with dispatch note present
- Cross-disciplinary angle present: PASS — Angle 13 (Law / digital governance) is NOT in the intake brief traditions list
- Source-type coverage (mixed domain): PASS — GitHub/practitioner sources assigned to Angles 1–9, 11, 12; Stack Overflow noted for Angle 11; SSRN for Angle 13
- Vocabulary-tradition map populated (≥2 traditions): PASS — 13 distinct tradition labels across 13 angles

**Gate 2 — Distinctness:**
- Boolean-connective test applied to potentially overlapping pairs:
  - A3 (sandboxing/OS design) vs A4 (cybersecurity): A3 = isolation mechanism design ("sandbox container isolation namespace"); A4 = attack enumeration ("threat model attack surface privilege escalation"). Different vocabulary pools, different paper populations. PASS.
  - A4 (cybersecurity) vs A5 (adversarial ML): A4 = system-level attack vectors; A5 = adversarial NLP input manipulation via environment. Different research communities. PASS.
  - A1 (LLM agent architecture) vs A9 (code agents): A1 = general OS tool integration; A9 = specifically coding/SWE task framing. Different vocabulary ("ReAct tool use architecture" vs "SWE-bench code execution scaffolding"). PASS.
  - A7 (RPA) vs A8 (multimodal GUI): A7 = pre-LLM scripted automation (deterministic); A8 = visual ML for GUIs (probabilistic, LLM-based). Different vocabulary and paper populations. PASS.
- Vocabulary-tradition distinctness: All 13 angles have distinct tradition labels. No two non-null-hypothesis, non-adversarial angles share a tradition label. PASS.

**Gate 3 — Launchability:**
- All 13 angles have ≥1 concrete, pasteable query string. PASS.
- No angle contains "TBD," "to be determined," or unfilled markers. PASS.
- All "Source type (academic)" and "Source type (practitioner)" fields name specific platforms. PASS.

**Gate 4 — Scoring prohibition:**
- No angles were ranked by "most promising," "most relevant," or equivalent subjective criteria. PASS.
- No angle records contain implicit quality assessments ("this angle will be most useful"). PASS.

**Overall verdict: PASS — dispatch ready**

**Flags requiring human judgment:**
1. VOCABULARY SELF-REPORT FLAG — all traditions are LLM-enumerated; external validation via survey-paper probe recommended before accepting tradition list as complete. Suggested entry point: OSWorld (2024, arXiv:2306.06070) citation network, or a keyword search for "computer use agent survey" to discover vocabulary the LLM may have missed.
2. Source B UNAVAILABLE — MODERATE severity. Proceed with understanding that cross-disciplinary angle may miss traditions only surfaced by survey-paper vocabulary. Post-survey-paper supplement recommended.
3. Angle 10 (Formal methods) predicted as GAP — sparse literature expected. Absence of results at this angle is itself a finding documenting an understudied area; the null result should be recorded explicitly, not treated as search failure.
4. Angle 11 (Null-hypothesis) practitioner-source-heavy — negative results are underreported in academic venues; GitHub issue threads and practitioner post-mortems will likely outperform arXiv queries for this angle. The practitioner source should be treated as primary for this angle.

---

*End of cond-c-output.md*
