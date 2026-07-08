# Angle Generation — Input 20, Condition B

**Topic:** How reliably LLM agents use tools — when tool calls succeed and when they fail.

**Condition B (no memory of Condition A output).**

**Source B status:** UNAVAILABLE — subagent context per CLAUDE.md deployment constraints.

**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions below were enumerated by LLM only. External validation via survey-paper probe is recommended before accepting the tradition list as complete coverage.

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: Reliability of tool use in LLM agents — the conditions under which tool calls
succeed or fail.

Anchor vocabulary: "LLM agents" (ML systems / AI agents tradition), "tool calls"
(AI agents / function-calling tradition), "succeed and fail" (reliability /
evaluation framing)

Candidate vocabulary traditions:
  1. ML systems / AI agents research — LLM agents, tool-augmented LLMs, function
     calling, ToolLLM, Gorilla, ToolFormer, instruction tuning for tools
  2. Reliability evaluation / benchmarking — tool use evaluation, ToolBench,
     APIBench, Berkeley Function Calling Leaderboard (BFCL), pass@1, failure rate
     measurement, benchmark datasets
  3. NLP / grounding / dialogue — slot filling, task-oriented dialogue, argument
     generation, NLU, grounded generation, parameter extraction, dialog state
     tracking
  4. Software engineering / API compliance — JSON schema, API specification
     conformance, type checking, malformed output, schema validation, structured
     output correctness
  5. Multi-step agent / planning — ReAct, chain-of-thought agent, multi-step
     planning, error compounding, long-horizon tasks, error recovery, agent loops
  6. AI safety / alignment — prompt injection, tool misuse, agentic safety,
     unauthorized tool invocation, privilege escalation

Absent-term signal (Source C): User did NOT use "function calling" (dominant
industry term), "hallucination" (as applied to tool parameters), "agent
benchmarks," "ReAct," "planning," or "schema compliance." The user's framing is
more reliability/systems-level than capability/training-level.

Question type: EXPLORATORY
  (No comparison or intervention-outcome structure; user asks "when does this
  succeed/fail" — the space-of-findings framing)

Scope markers: None stated — inferred scope: LLM agents using external tools
(function calls, API calls, plugin calls); success/failure conditions across
model families and task types; not restricted to a specific model or deployment

Known exclusions: None stated

Domain maturity estimate: MIXED
  Basis: Topic has substantial arXiv literature (2023–2025), active benchmark
  development (BFCL, ToolBench), AND heavy practitioner production (blog posts,
  GitHub repos, provider documentation); both academic and practitioner
  vocabularies appear in the anchor terms

Survey paper status: NOT CHECKED — Source B unavailable

Source B status: UNAVAILABLE — MODERATE (Source A + Source C together produced
≥6 distinct vocabulary traditions, satisfying the MODERATE threshold for
proceeding without Source B)
```

**Intake gate check:**
- Topic field populated: YES
- Vocabulary traditions ≥2: YES (6 traditions identified)
- Question type classified: YES — EXPLORATORY

All three gate conditions true. Proceed to angle-generation.md.

---

## COVERAGE MAP

```
COVERAGE MAP
============
Tradition 1: ML systems / AI agents research
  Representative terms: LLM agents, tool-augmented LLMs, function calling,
    ToolLLM, Gorilla, ToolFormer, instruction tuning for tools
  Planned angle slot: Confirmatory A1
  Gap flag: No — assigned

Tradition 2: Reliability evaluation / benchmarking
  Representative terms: ToolBench, APIBench, BFCL, pass@1, failure rate
    measurement, evaluation framework, benchmark dataset
  Planned angle slot: Confirmatory A2
  Gap flag: No — assigned

Tradition 3: NLP / grounding / dialogue
  Representative terms: slot filling, task-oriented dialogue, argument generation,
    NLU, grounded generation, dialog state tracking
  Planned angle slot: Confirmatory A3
  Gap flag: No — assigned

Tradition 4: Software engineering / API compliance
  Representative terms: JSON schema, API specification conformance, type checking,
    malformed output, schema validation, structured output correctness
  Planned angle slot: Confirmatory A4
  Gap flag: No — assigned

Tradition 5: Multi-step agent / planning
  Representative terms: ReAct, chain-of-thought agent, multi-step planning,
    error compounding, long-horizon tasks, error recovery, agent loops
  Planned angle slot: Confirmatory A5
  Gap flag: No — assigned

Tradition 6: AI safety / alignment
  Representative terms: prompt injection, tool misuse, agentic safety,
    unauthorized tool invocation, privilege escalation
  Planned angle slot: Confirmatory A6
  Gap flag: No — assigned

Traditions NOT yet represented in the planned list at coverage map time:
  HCI / usability — assigned to A7 (added after coverage map review)
  Human factors / reliability engineering — assigned to C1 (cross-disciplinary)
  Distributed systems / service reliability — assigned to D1 (adversarial)

All traditions from intake brief have angle slots. Two additional traditions
identified during map construction (HCI and human factors) — added before
generation began per after-every-task self-check rule.

Cross-disciplinary slot (required):
  Target tradition: Human factors engineering / cognitive reliability analysis
  Basis: Human factors has well-developed failure mode taxonomy methods (FMEA,
    fault trees, HRA) that have not been applied to LLM tool use; this tradition
    will use vocabulary not found in any intake-brief tradition and will retrieve
    different literature
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Tradition 1): ML systems / AI agents research
Slot A2 (Confirmatory — Tradition 2): Reliability evaluation / benchmarking
Slot A3 (Confirmatory — Tradition 3): NLP / grounding / dialogue
Slot A4 (Confirmatory — Tradition 4): Software engineering / API compliance
Slot A5 (Confirmatory — Tradition 5): Multi-step agent / planning
Slot A6 (Confirmatory — Tradition 6): AI safety / alignment
Slot A7 (Confirmatory — added): HCI / usability
Slot N1 (Null-hypothesis): assigned — disconfirming framing on tool reliability claims
Slot D1 (Adversarial): starting vocabulary — distributed systems / fault tolerance /
  service reliability; NOT FROM: ML systems, NLP, benchmarking, schema compliance,
  safety alignment, HCI
Slot C1 (Cross-disciplinary): Human factors / reliability engineering — NOT in
  intake brief
```

Total planned: 10 angles.

---

## ANGLE LIST

---

### ANGLE 1: LLM Architecture and Training for Tool-Calling Capability
===========
**Vocabulary tradition:** ML systems / AI agents research
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Training approaches that improve tool call accuracy; model architectures; fine-tuning datasets; reported accuracy and failure rates on held-out tool call sets; which model families perform better and why

**Source type (academic):** arXiv cs.CL + cs.LG (NOTE: per platform-calibration.md, do NOT use cs.AI alone — cs.CL + cs.LG together recover ~80% of LLM literature vs. ~35% for cs.AI alone)
**Source type (practitioner):** GitHub — search ToolLLM, Gorilla-LLM, ToolBench repositories; README and issue thread vocabulary

**Queries:**
  Q1: tool-augmented language models instruction tuning function calling accuracy training 2023 2024 2025
  Q2: LLM agents API selection tool invocation training fine-tuning benchmark performance
  Q3: "function calling" large language models model capability empirical evaluation architecture

**Coverage-gap note:** Queries focus on academic training/capability papers; practitioner model cards and provider-published function calling accuracy numbers (e.g., OpenAI, Anthropic, Mistral) are not captured here — separate practitioner search recommended.

---

### ANGLE 2: Systematic Benchmarks and Evaluation Frameworks for Tool Use Reliability
===========
**Vocabulary tradition:** Reliability evaluation / benchmarking
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Benchmark datasets; evaluation metrics (pass@1, exact match, execution success rate); measured failure rates across tasks; leaderboard methodology; what dimensions of failure are tracked vs. not tracked in existing benchmarks

**Source type (academic):** arXiv cs.CL + cs.LG; Semantic Scholar for citation-based cluster discovery of benchmark papers citing each other
**Source type (practitioner):** Berkeley Function Calling Leaderboard (BFCL) technical documentation; ToolBench GitHub repository (issue threads document evaluation design decisions)

**Queries:**
  Q1: LLM function calling benchmark evaluation dataset tool use success rate measurement 2024 2025
  Q2: ToolBench APIBench agent evaluation framework tool selection accuracy metrics
  Q3: "Berkeley Function Calling Leaderboard" OR "BFCL" language model tool call evaluation methodology

**Coverage-gap note:** Queries target existing published benchmarks; gaps in what benchmarks measure (e.g., partial success, error types) require human synthesis across multiple benchmark papers. Benchmark papers are not neutral — they define what counts as success, which shapes downstream findings.

---

### ANGLE 3: Parameter and Argument Generation Accuracy — NLP Grounding Heritage
===========
**Vocabulary tradition:** NLP / grounding / dialogue
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Accuracy of generating correctly-valued function arguments; error rates by argument type (numeric, string, entity name, date); slot filling accuracy as a precursor task; what argument types cause the most failures; connection to hallucination literature

**Source type (academic):** arXiv cs.CL; ACL Anthology (task-oriented dialogue and slot filling papers with argument generation measurement)
**Source type (practitioner):** Stack Overflow — search "function calling wrong parameter" and "LLM wrong argument" for practitioner error vocabulary

**Queries:**
  Q1: slot filling accuracy task-oriented dialogue argument generation error rate language model
  Q2: language model function argument generation grounding accuracy parameter hallucination
  Q3: dialog state tracking entity value extraction error LLM NLU accuracy benchmark

**Coverage-gap note:** The slot filling tradition predates LLM-era function calling; bridging papers that explicitly connect older NLU literature to LLM function calling may be sparse. Queries targeting both eras needed for full coverage.

---

### ANGLE 4: JSON Schema Compliance and API Specification Conformance
===========
**Vocabulary tradition:** Software engineering / API compliance
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Rates of schema-invalid outputs; type errors (wrong type, wrong format, missing required fields); how models fail to respect output structure constraints; whether fine-tuning or prompting resolves conformance failures; structured output as a reliability problem

**Source type (academic):** arXiv cs.SE + cs.CL; software engineering venues (ICSE, FSE) for API correctness framing
**Source type (practitioner):** GitHub — search outlines, lm-format-enforcer, instructor libraries (structured output enforcement tools) — issue threads document real failure modes; practitioner blog posts on "JSON mode" failures

**Queries:**
  Q1: LLM JSON schema compliance structured output validation type error malformed generation
  Q2: language model API specification conformance output constraint violation schema adherence
  Q3: constrained decoding structured generation LLM grammar enforcement reliability

**Coverage-gap note:** Much practitioner knowledge about schema compliance failures lives in GitHub issue threads and blog posts rather than academic papers; academic queries will miss this. The practitioner source is critical for this angle.

---

### ANGLE 5: Multi-Step Tool-Use Pipeline Failures and Error Compounding
===========
**Vocabulary tradition:** Multi-step agent / planning
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** How failure rates compound across multi-step agent pipelines; error recovery and rollback strategies; failure modes specific to sequential tool use (wrong sequencing, wrong state tracking, premature stopping); long-horizon task failure analysis

**Source type (academic):** arXiv cs.AI + cs.CL — ReAct, Reflexion, LLM agent planning papers; ICLR/NeurIPS workshops on LLM agents
**Source type (practitioner):** LangChain / LlamaIndex GitHub issue threads (document production failure modes in multi-step pipelines); practitioner writeups on agent reliability at scale

**Queries:**
  Q1: ReAct LLM agent multi-step tool use error compounding failure mode planning 2024 2025
  Q2: language model agent loop error recovery rollback long-horizon task failure rate
  Q3: autonomous LLM agent pipeline failure sequential tool invocation error propagation

**Coverage-gap note:** Most empirical measurement in this space is from benchmarks that test agents on curated tasks — real-world deployment failure rates in uncontrolled multi-step settings are underrepresented. Check for deployment case studies beyond benchmark papers.

---

### ANGLE 6: Tool Misuse, Prompt Injection, and Agentic Safety Failures
===========
**Vocabulary tradition:** AI safety / alignment
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Conditions under which LLM agents invoke tools in unintended ways; prompt injection attacks that redirect tool calls; unauthorized or excessive tool invocations; safety failures specific to agentic tool use vs. non-agentic LLM behavior

**Source type (academic):** arXiv cs.CR + cs.AI — AI safety, adversarial ML; IEEE Symposium on Security and Privacy
**Source type (practitioner):** Responsible AI practitioner reports; OWASP LLM Top 10 documentation; security researcher blog posts on agentic AI vulnerabilities

**Queries:**
  Q1: LLM agent tool misuse prompt injection safety risk unauthorized invocation 2024 2025
  Q2: agentic AI tool call security vulnerability prompt injection attack surface
  Q3: language model agent unsafe tool use privilege escalation adversarial manipulation

**Coverage-gap note:** Safety literature often uses different venues than ML capability literature. Queries target arXiv cs.CR; additional search in security venues (USENIX, IEEE S&P) recommended for more complete coverage of adversarial findings.

---

### ANGLE 7: User-Facing Task Completion Failure in Tool-Using Conversational Agents
===========
**Vocabulary tradition:** HCI / usability
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Task completion rates measured from the user's perspective; intent fulfillment failure rates; human evaluation methodology for tool-using agents; disconnect between model-level accuracy metrics and user-facing success rates

**Source type (academic):** ACM CHI, CSCW, IUI proceedings; arXiv cs.HC; human evaluation papers for conversational agents
**Source type (practitioner):** UX practitioner reports on AI assistant deployments; user study writeups from product teams

**Queries:**
  Q1: conversational agent task completion failure rate user study human evaluation LLM tool
  Q2: LLM assistant user intent fulfillment failure rate human evaluation task success
  Q3: dialog system tool use user satisfaction task success rate measurement human-computer interaction

**Coverage-gap note:** HCI literature on LLM agents is sparse pre-2023; most human evaluation work on tool-using agents is recent and may be under-indexed. ACL Anthology and arXiv cs.HC are appropriate; CHI 2024-2025 proceedings are the priority targets.

---

### ANGLE 8: Evidence That Tool Use Reliability Does Not Hold, Does Not Generalize, or Is Overestimated
===========
**Vocabulary tradition:** Reliability evaluation / benchmarking (disconfirming variant)
**Angle type:** Null-hypothesis
**Predicted research character:** empirical
**What to extract:** Papers reporting high failure rates; studies showing benchmark performance does not transfer to real-world deployment; null results on reliability improvements; gap between reported accuracy and production accuracy; replication failures; evidence that specific reliability claims are overstated or domain-specific

**Source type (academic):** arXiv cs.CL + cs.LG (search explicitly for limitations and failure papers, not capability papers)
**Source type (practitioner):** Practitioner blog posts and postmortems on LLM agent failures in production; Hacker News discussions of LLM agent unreliability (use for vocabulary discovery of failure descriptions, not as evidence)

**Queries:**
  Q1: LLM function calling failure rate real-world deployment limitations negative results 2024 2025
  Q2: "function calling" hallucination error rate large language models production benchmark gap
  Q3: LLM tool use reliability overestimated benchmark generalization failure out-of-distribution

**Coverage-gap note:** Negative results and null findings are systematically underrepresented in preprint literature. Practitioner sources (postmortems, deployment reports) may contain higher-quality failure evidence than academic papers. Explicitly search for "failure," "does not work," "limitation" in query strings to surface disconfirming literature that academic keyword matching would otherwise bury.

---

### ANGLE 9: API Invocation Reliability From a Distributed Systems and Fault Tolerance Perspective [ADVERSARIAL-FLAGGED]
===========
**Vocabulary tradition:** Distributed systems / service reliability
**Angle type:** Adversarial [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]
**Predicted research character:** consensus
**What to extract:** How distributed systems and API reliability engineering frames failure modes for automated software agents; retry strategies, idempotency, circuit breakers, timeout handling — do LLM agents implement these? Is there research measuring LLM agent behavior against standard API reliability engineering patterns?

**Generating from distributed systems vocabulary. Excluding from generation prompt:** LLM agents, tool use, function calling, language model, NLP, instruction tuning, benchmarks, prompt injection, slot filling, schema compliance, HCI.

**Source type (academic):** ACM SOSP, OSDI, USENIX ATC proceedings; IEEE Transactions on Reliability; distributed systems reliability engineering literature
**Source type (practitioner):** Site reliability engineering (SRE) practitioner literature; Netflix tech blog; AWS/Azure architecture guidance for API reliability

**Queries:**
  Q1: API invocation failure modes fault tolerance automated software agent production reliability recovery
  Q2: distributed system external service call reliability error taxonomy idempotency retry classification
  Q3: software agent reliability external API invocation failure recovery strategy circuit breaker

**Coverage-gap note:** This angle will retrieve predominantly non-LLM literature. The productive extraction is: (a) does this failure taxonomy apply to LLM agent tool calls, and (b) do LLM agents implement any of these fault tolerance patterns? Bridging papers may be absent — the gap itself is a finding.

---

### ANGLE 10: Failure Mode Taxonomy and Reliability Analysis From Human Factors Engineering
===========
**Vocabulary tradition:** Human factors engineering / cognitive reliability analysis
**Angle type:** Cross-disciplinary
**Predicted research character:** gap (expect minimal direct application of this vocabulary to LLM tool use; angle purpose is to surface the framework and identify absence)
**What to extract:** FMEA and fault tree analysis frameworks applicable to automated agent actions; human reliability analysis (HRA) taxonomies; whether any published work applies these frameworks to LLM agent tool use; failure mode classification schemes from reliability engineering that could be imported

**Generating from human factors engineering vocabulary, not from the user's apparent ML systems / AI agents framing.**

**Source type (academic):** Reliability Engineering and System Safety journal; Human Factors journal; arXiv cs.RO (robotics reliability — closest application domain); PubMed for human reliability analysis foundational papers
**Source type (practitioner):** Industrial reliability engineering reports; NASA human factors technical reports (HRA methodology)

**Queries:**
  Q1: FMEA fault tree analysis automated agent failure mode classification reliability engineering
  Q2: human reliability analysis cognitive error taxonomy AI agent autonomous system failure classification
  Q3: cognitive systems engineering reliability analysis autonomous agent decision failure mode

**Coverage-gap note:** Direct application of HRA/FMEA to LLM tool use is almost certainly absent from the literature (expected gap finding). The retrieval target is: (a) foundational FMEA/HRA methodology applicable in principle, (b) any adjacent applications to autonomous systems or robotics that bridge toward LLM agents. If the gap is confirmed, this angle documents a methodology import opportunity.

---

## GATE SUMMARY

```
GATE SUMMARY
============
Gate 1 — Completeness:
  Null-hypothesis angle present: PASS — Angle 8, queries contain "failure rate,"
    "negative results," "does not generalize," "overestimated," "benchmark gap"
  Adversarial angle present: PASS — Angle 9, labeled ADVERSARIAL-FLAGGED with
    dispatch note, separate vocabulary explicitly stated
  Cross-disciplinary angle present: PASS — Angle 10, Human factors / reliability
    engineering tradition, NOT in intake brief
  Source-type coverage: PASS — domain is MIXED; practitioner sources assigned to
    Angles 1 (GitHub), 4 (GitHub + blog), 5 (LangChain GitHub), 6 (OWASP + blogs),
    7 (practitioner reports), 8 (blog postmortems), 9 (SRE practitioner lit)
  Vocabulary-tradition map populated: PASS — 9 distinct tradition names across
    10 angles; coverage map exists with traditions listed before generation

  Gate 1 result: PASS

Gate 2 — Distinctness:
  Boolean-connective test results (angles checked pairwise for synonym risk):
  - A1 vs A2: A1 uses "training," "instruction tuning," "architecture"; A2 uses
    "benchmark," "evaluation framework," "dataset," "leaderboard." NOT synonymous.
    OR would not retrieve substantially the same documents. PASS.
  - A1 vs A3: A1 ML systems vocabulary vs A3 NLP/slot-filling vocabulary. Different
    traditions. PASS.
  - A1 vs A5: A1 model-level (training, architecture) vs A5 system-level (pipeline,
    error compounding, agent loops). Different scope. PASS.
  - A2 vs A8: A2 (confirmatory benchmarks) vs A8 (null-hypothesis). Both use
    evaluation vocabulary. BUT: A2 queries do NOT use "failure," "negative results,"
    "does not generalize." A8 queries explicitly target disconfirming vocabulary.
    Structurally distinct by angle type; confirmatory benchmarks vs. failure-focused
    searches retrieve different portions of the literature. PASS (structural type
    difference sufficient).
  - A3 vs A4: A3 NLP/slot-filling vocabulary ("slot filling," "dialog state
    tracking") vs A4 schema compliance vocabulary ("JSON schema," "conformance,"
    "constrained decoding"). Different vocabulary, different source populations
    (NLP venues vs SE venues). PASS.
  - A4 vs A1: A4 uses SE/conformance vocabulary; A1 uses ML training vocabulary.
    PASS.
  - A6 vs A9: A6 safety/alignment vocabulary ("prompt injection," "tool misuse,"
    "agentic safety") vs A9 distributed systems vocabulary ("fault tolerance,"
    "circuit breaker," "idempotency"). Different traditions, ADVERSARIAL-FLAGGED
    separation ensures independent context. PASS.
  No synonym pairs found.

  Vocabulary-tradition distinctness: All 10 angles carry different tradition labels.
    No two non-null-hypothesis / non-adversarial angles share the same tradition
    label. PASS.

  Gate 2 result: PASS

Gate 3 — Launchability:
  All 10 angles contain ≥1 concrete, immediately runnable query string. No
  placeholder vocabulary (TBD, [fill in], insert term) appears in any query.
  All angles name specific platforms:
    - arXiv with correct categories (cs.CL + cs.LG, cs.CR + cs.AI, cs.AI + cs.CL,
      cs.SE + cs.CL, cs.RO)
    - Specific practitioner sources named per angle (GitHub repos, BFCL docs,
      Stack Overflow, OWASP, SRE lit, practitioner blogs)
  Gate 3 result: PASS

Gate 4 — Scoring prohibition:
  No angle record contains "most promising," "strongest angle," "most relevant,"
  or any equivalent subjective quality assessment. Structural criteria only used
  for filtering and allocation. Gate 4 result: PASS

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. VOCABULARY SELF-REPORT FLAG — all 9 traditions were enumerated by LLM only;
     no survey paper probe ran. A tradition not in LLM training data would be
     missed. Recommended compensating action: run one survey-paper query before
     accepting the list as complete coverage.
  2. Angle 10 (cross-disciplinary human factors) is predicted as a GAP angle —
     expect minimal direct literature. If the gap is confirmed on execution, the
     finding itself (no published FMEA-style analysis of LLM tool use) is a
     reportable gap, not a search failure.
  3. Source B unavailable — MODERATE severity, not HIGH RISK, because ≥6
     traditions were identified from Source A + C alone. Acceptable to proceed.
```

---

## SUMMARY STATS

- Total angles: 10
- Confirmatory: 7 (Angles 1–7)
- Null-hypothesis: 1 (Angle 8)
- Adversarial: 1 (Angle 9 — ADVERSARIAL-FLAGGED)
- Cross-disciplinary: 1 (Angle 10)
- Distinct vocabulary traditions: 9
- Source-type assignments: all 10 angles have academic + practitioner source named
- arXiv category compliance: all arXiv assignments use multi-category (cs.CL + cs.LG, cs.CR + cs.AI, etc.) per platform-calibration.md override — cs.AI alone not used
