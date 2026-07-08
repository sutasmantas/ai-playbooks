# Wave 2 — P1 Angle Queries (ready for research-wave.js)

Generated: 2026-06-29. Status: DRAFT — user should review before launching.

These are the P1 priority angles fully expanded to title + queries format, ready to pass as `args.angles` to `kit-maker/scripts/research-wave.js`.

**⚠️ FORMAT UPDATE (2026-06-30):** The required query structure changed after Cluster C synthesis. Each angle now requires:
- **Adversarial query (Q3 or explicit label):** targeting failures, critiques, null results, contradictions — phrase as "[topic] fails because", "critique of [topic]", "[topic] null result"
- **Grey literature query (explicit label):** targeting arXiv, GitHub, preprints, practitioner blogs — phrase as "site:arxiv.org [topic]" or "site:github.com [topic]"

The queries below use the old format. Most angles have an adversarial-leaning Q3 (failures/critiques), but few have explicit grey-lit queries. **Before launching Wave 2:** either add explicit adversarial + grey-lit query strings per angle, OR rely on research-wave.js enforcement — the script now instructs agents to run adversarial and grey-lit queries as mandatory categories B and C regardless of what's listed here. If you rely on script enforcement, the agent will choose the adversarial/grey-lit queries independently; adding explicit strings gives better targeting for narrow or technical angles.

Each query set targets: (1) foundational paper/primary source, (2) meta-analysis or systematic review, (3) criticisms/replication failures/contradicting evidence, (4) practitioner/applied version, (5) computational or quantitative study.

---

## P1-A: Prompt Engineering for Behavioral Kit Rules (angles 59–63)

### Angle 59 — How to write behavioral rules Claude reliably follows

Title: Behavioral rule compliance — linguistic patterns, specificity, and structural formats that produce consistent LLM instruction following

Queries:
- "system prompt behavioral compliance instruction following structural patterns Claude Anthropic empirical"
- "meta-analysis instruction following large language models prompt format compliance effect size"
- "instruction following failures LLM behavioral rule ambiguity non-compliance empirical gaps"
- "site:github.com CLAUDE.md behavioral rules examples kit system prompt agent instructions"
- "quantitative instruction compliance measurement LLM word choice specificity format comparison benchmark"

---

### Angle 60 — Negative rules in AI instructions

Title: Negation in LLM instruction following — "do NOT do X" vs "only do Y" vs "skip X when Z"

Queries:
- "negation comprehension large language models forbidden prohibitions do not instruction following NLP"
- "negation instruction following systematic review LLM compliance positive negative framing"
- "negative instruction failure LLM forbidden constraints non-compliance empirical failure modes"
- "positive vs negative framing prompt engineering practitioners guide which formulation works"
- "boolean negation language model benchmark evaluation negation understanding quantitative"

---

### Angle 61 — Decision hierarchy design in complex skill files

Title: Rule conflict resolution and priority expression in multi-rule LLM instructions

Queries:
- "rule conflict resolution priority instruction following LLM hierarchical competing directives"
- "multi-rule instruction following priority hierarchy systematic review LLM compliance"
- "competing directives AI agent failure modes instruction conflict unexpected behavior empirical"
- "priority instructions system prompt practitioners conflict resolution guide applied"
- "rule ordering effect LLM compliance priority expression quantitative evaluation benchmark"

---

### Angle 62 — Specificity vs generality in rules

Title: Instruction abstraction level — overly specific vs overly general rules in LLM instruction following

Queries:
- "abstract concrete instructions LLM generalization specificity overfitting behavioral"
- "instruction abstraction level following generalization meta-analysis systematic review"
- "overly specific rule failures edge cases LLM overfitting behavioral out-of-distribution"
- "rule abstraction level practitioners prompt engineering which level works applied guide"
- "instruction specificity measurement compliance quantitative study LLM evaluation"

---

### Angle 63 — Prompt engineering for process/workflow guidance

Title: Sequential process and workflow instruction following in LLM agents — distinct from task instructions

Queries:
- "chain-of-thought Wei 2022 sequential multi-step task following LLM procedural NeurIPS"
- "systematic review multi-step instruction following sequential workflow LLM agentic"
- "sequential instruction failure multi-step task breakdown LLM process order error"
- "workflow procedure prompt practitioners recipe following sequential steps applied guide"
- "procedural instruction following benchmark evaluation multi-step sequential LLM"

---

## P1-B: Meta-Research Methodology (angles 12–14)

### Angle 12 — How to research scientifically

Title: Meta-research methodology — how to do research well; can the methodology itself be improved?

Queries:
- "PRISMA reporting systematic reviews Moher 2009 research methodology checklist standards"
- "meta-research Ioannidis improving research quality research on research 2014 PLOS Medicine"
- "systematic review methodology failures limitations biases validity threats critique"
- "evidence-based practice research methodology practitioners applied guide"
- "automated systematic review NLP information retrieval AI-assisted meta-analysis"

---

### Angle 13 — Information finding as a skill

Title: Search strategies, query formulation, and source evaluation — information finding as a learnable skill

Queries:
- "Bates berrypicking model information seeking search behavior 1989 foundational"
- "information literacy search strategy systematic review librarian expert instruction"
- "search strategy failures missed evidence gaps information retrieval empirical"
- "expert vs novice search strategies practitioners query formulation database applied"
- "automated query expansion information retrieval NLP optimization quantitative"

---

### Angle 14 — Reviewing and alternatives generation methodology

Title: Systematic approaches to adversarial review and alternatives generation — improving first-pass outputs

Queries:
- "structured adversarial review red team methodology criticism organizational research quality"
- "alternative hypothesis generation systematic methodology research quality improvement"
- "peer review failures bias alternatives assessment critique empirical organizational"
- "alternatives generation lateral thinking TRIZ de Bono practitioners applied creative methods"
- "structured decision alternatives analysis quantitative comparison framework evaluation"

---

## P1-C: Research Quality Per Angle (angles 108–114)

### Angle 108 — What does "thoroughly researched" look like for one angle?

Title: Systematic review methodology as a model for thorough single-angle research — which elements transfer

Queries:
- "PRISMA systematic review methodology Moher 2009 completeness reporting checklist standards"
- "systematic review quality assessment AMSTAR criteria evidence synthesis appraisal"
- "systematic review methodological limitations validity threats critique empirical"
- "GRADE evidence grading practical guide applied systematic review methodology"
- "automated systematic review quality measurement completeness evaluation computational"

---

### Angle 109 — Search strategy documentation and reproducibility

Title: Documenting search strategies for reproducibility — what is sufficient vs overhead

Queries:
- "PRISMA-S search reporting extension Rethlefsen 2021 systematic review documentation standards"
- "search reproducibility systematic reviews librarian documentation methods replication"
- "search strategy failures reproducibility gaps literature review empirical audit"
- "search documentation practical guide applied research librarians how-to"
- "search strategy reproducibility measurement audit automated AI computational"

---

### Angle 110 — Research bias detection and adversarial search

Title: Confirmation bias in research — how to structure search to actively find contradicting evidence

Queries:
- "confirmation bias systematic review publication bias detection Egger funnel plot meta-analysis"
- "bias sources types systematic reviews meta-analysis prevalence survey empirical"
- "confirmation bias research cherry-picking evidence selective reporting failures empirical"
- "adversarial search strategy devil's advocate bias mitigation practitioners applied guide"
- "bias detection algorithms literature search systematic computational automated"

---

### Angle 111 — Source triangulation

Title: Multi-source evidence triangulation — when is one source type sufficient vs when must findings appear across types

Queries:
- "triangulation mixed methods research Lincoln Guba credibility trustworthiness 1985"
- "multi-source evidence synthesis systematic review qualitative quantitative integration"
- "single source failures evidence reliability triangulation absence risks empirical"
- "triangulation practitioners guide credibility mixed methods applied research"
- "information fusion multiple evidence sources quantitative reliability measurement"

---

### Angle 112 — Research depth signals (mechanism vs fact)

Title: Knowing when you understand deeply enough — mechanism vs fact as a depth signal

Queries:
- "mechanistic explanation causal understanding vs correlation research quality depth signal"
- "evidence hierarchy depth quality systematic review grading mechanism"
- "surface learning deep learning mechanism shallow research failure modes empirical"
- "research depth practitioners guide mechanism understanding vs fact collection applied"
- "automated research quality assessment depth vs breadth measurement computational"

---

### Angle 113 — Deliberate search for null results

Title: Systematically searching for null results and absence-of-evidence as research outputs

Queries:
- "absence of evidence evidence of absence null results reporting Altman Bland BMJ 1995"
- "publication bias null results underreporting systematic reviews meta-analysis empirical"
- "null result interpretation errors absence evidence assumption failures empirical"
- "grey literature unpublished results search strategy systematic reviews practitioners"
- "null result detection automated literature mining gap identification computational"

---

### Angle 114 — Meta-research methodology (broader)

Title: Meta-research as a foundational skill — frameworks for doing research well across domains

Queries:
- "Ioannidis meta-research research on research discipline 2015 PLoS Biology evidence quality"
- "meta-research methodology systematic review research quality framework improvement"
- "research quality failures meta-research evidence base critique empirical"
- "evidence-based practice practitioners meta-research application skills guide"
- "computational meta-research automated quality assessment NLP applied"

---

## P1-D: Kit Validation and Behavioral Testing (angles 22–24)

### Angle 22 — How to test if a kit actually works

Title: Validation methodology for AI behavioral kits — how to verify a kit produces intended behavior

Queries:
- "LLM evaluation methodology instruction following compliance testing benchmark empirical"
- "AI behavior validation systematic review methods LLM agent evaluation"
- "AI evaluation failures benchmark inadequacy validity threats instruction following"
- "prompt testing practitioners verify Claude behavior kit validation applied guide"
- "automated LLM instruction compliance testing benchmark evaluation quantitative"

---

### Angle 23 — Behavioral testing for LLMs (skim — user flagged BORDERLINE)

Title: Behavioral testing methods for LLM instruction compliance — what methods exist

Queries:
- "behavioral testing large language models prompt robustness evaluation compliance"
- "systematic review LLM evaluation methods instruction following testing"
- "behavioral test failures LLM compliance edge cases gaps empirical"
- "practitioners behavioral testing AI systems prompt compliance verification applied"
- "automated behavioral test generation LLM compliance measurement quantitative"

---

### Angle 24 — Kit robustness and edge cases

Title: Systematic failure modes and edge cases that kits miss — robustness gaps in AI instruction sets

Queries:
- "edge case failure modes AI instruction following robustness analysis empirical"
- "systematic review AI agent failure modes robustness gaps instruction"
- "robustness failures LLM unexpected inputs edge cases documentation empirical"
- "robustness testing practitioners AI kit coverage gaps how to find applied"
- "adversarial robustness testing automated edge case generation LLM quantitative"

---

## P1-F: Direction-Level Strategic Alternatives (angle 125)

### Angle 125 — Pivot vs. persist signals and alternative direction generation

Title: Direction-level pivot signals and alternative direction generation — when to recognize a fundamentally different approach is needed and how to generate credible alternatives

Queries:
- "pivot vs persist decision heuristics project direction change signals empirical research"
- "strategic alternatives generation methods reframing problem-solving direction change empirical"
- "diminishing returns vs plateau distinction creative work research productivity empirical"
- "direction change decision making goal persistence exploration vs exploitation empirical"
- "alternative approach generation problem reframing cognitive techniques empirical comparison"

---

## P1-E: Goal-Directed Advisor Behavior + Diminishing Returns (angles 119, 120)

### Angle 120 — Diminishing returns detection and work direction saturation

Title: Diminishing returns detection in AI agent work — recognizing when a line of work is saturating and what triggers switching to a higher-value direction

Queries:
- "diminishing returns task switching cognitive science when to stop iterating decision research"
- "meta-cognitive monitoring work direction saturation stopping rule problem solving research"
- "goal drift detection AI agent subproblem absorption higher-level goal monitoring"
- "satisficing stopping rule optimal stopping sequential decision empirical psychology"
- "AI agent work allocation ROI prioritization dynamic task switching long-horizon empirical"

---

## P1-E (continued): Goal-Directed Advisor Behavior in Generated Kits (angle 119)

### Angle 119 — Minimal file set and wording for advisor behavior across domain kits

Title: Goal-directed advisor behavior in generated kits — what file, what wording, what makes it decay-resistant

Queries:
- "site:github.com CLAUDE.md advisor proactive goal-directed behavioral contract agent kit examples"
- "LLM agent proactive problem identification goal frame vs task frame instruction design empirical"
- "meta-level behavioral instructions AI agent session persistence cross-session behavioral decay"
- "advisor vs executor mode LLM agent instruction design goal-directed continuation practitioner"
- "minimal instruction set goal-directed AI agent behavior empirical compliance measurement"

---

## P1-G: Direction Drift in Multi-Session Agent Work (angle 135)

### Angle 135 — When to question the direction, not just the task

Title: Direction-drift detection in multi-session agent work — granularity and mechanism for questioning work direction across sessions, not just within sessions

Queries:
- "exploration exploitation switching multi-session project momentum direction change cognitive empirical"
- "project direction revalidation cadence strategy review frequency outcome quality empirical"
- "meta-cognitive direction monitoring multi-step problem solving when to question approach empirical"
- "AI agent long-horizon direction drift higher-level goal monitoring session boundary empirical"
- "momentum bias cognitive perseveration task switching cost direction change stopping rule empirical"

---

## P1-H: Problem-Solving Gaps in Kit Procedures (angles 143–148)

These six angles fix known structural weaknesses in current kit procedures: the alternatives-generation procedure lacks explicit criteria-before-evaluation; no procedure applies second-order thinking or backward chaining; no phase gate prompts double-loop questioning; MECE decomposition is informal; no procedure uses rubber-duck articulation as a forcing function.

### Angle 143 — Criteria definition before evaluation

Title: Explicit criteria definition before alternatives evaluation — prevents post-hoc rationalization where the agent selects the original option and retroactively constructs criteria supporting it

Queries:
- "criteria definition before evaluation decision quality improvement empirical study"
- "pre-commitment criteria evaluation anchoring bias prevention decision making empirical"
- "explicit criteria specification alternatives evaluation LLM quality outcome empirical"
- "decision criteria definition post-hoc rationalization prevention empirical psychology"
- "evaluation criteria upfront specification AI agent quality selection improvement empirical"

---

### Angle 144 — Second-order thinking for kit rule additions

Title: Second-order consequences — "if we add this rule, what downstream behaviors does it produce?" — structural prompts that trigger consequence-chain analysis in LLM agents

Queries:
- "second order thinking consequences agent reasoning quality empirical study"
- "downstream consequence analysis LLM agent instruction rule addition unintended effects empirical"
- "consequence chain prompting second order effects AI reasoning quality empirical"
- "rule interaction unintended consequences AI agent behavior empirical measurement"
- "systems thinking second order effects prompt engineering quality empirical study"

---

### Angle 145 — Backward chaining from goal state

Title: Backward chaining — starting from "what does success look like?" and reasoning backwards through necessary conditions — vs. forward reasoning from current state

Queries:
- "backward chaining goal-directed reasoning forward chaining comparison quality empirical"
- "working backwards from goal problem solving strategy effectiveness empirical psychology"
- "means-ends analysis backward induction problem solving quality comparison empirical"
- "backward reasoning LLM agent planning quality forward vs backward empirical"
- "goal-state backward inference necessary conditions problem solving empirical study"

---

### Angle 146 — Double-loop learning in iterative processes

Title: Double-loop learning (Argyris) — questioning whether a procedure should exist, not just whether execution was correct — and what structural triggers produce it rather than single-loop fixing

Queries:
- "double loop learning Argyris governing assumptions single loop comparison empirical"
- "assumption questioning vs execution fixing learning organizational empirical study"
- "meta-level learning AI agent process improvement governing structure empirical"
- "second order change process improvement assumption questioning empirical evidence"
- "double loop feedback organizational learning AI agent workflow empirical"

---

### Angle 147 — MECE decomposition for coverage completeness

Title: Issue tree and MECE (mutually exclusive, collectively exhaustive) decomposition — principled coverage that guarantees no gaps and no double-counting, vs. intuitive checklists

Queries:
- "MECE decomposition mutually exclusive collectively exhaustive coverage completeness empirical"
- "issue tree problem decomposition completeness quality improvement empirical study"
- "structured decomposition coverage gaps checklists MECE vs intuitive quality empirical"
- "McKinsey issue tree MECE framework completeness audit quality empirical evidence"
- "LLM agent MECE decomposition structured coverage quality empirical benchmark"

---

### Angle 148 — Rubber duck debugging as a forcing function

Title: Articulation before commitment — explaining a procedure step aloud/in writing to a hypothetical reader forces implicit assumptions to become explicit; reduces errors vs. silent evaluation

Queries:
- "rubber duck debugging articulation assumption surfacing empirical software engineering"
- "explaining reasoning before committing implicit assumption surfacing empirical study"
- "verbalization problem solving error reduction implicit assumption explicit empirical"
- "self-explanation effect learning problem solving quality improvement empirical"
- "articulation forcing function hidden assumption surfacing LLM agent quality empirical"

---

## Notes for launch

- Angle 23 is flagged BORDERLINE by user: "skim only, don't deep-research." Treat as a light-touch angle — run 2-3 queries, stop early, don't force saturation.
- Domain for research-wave.js args: `"kit-maker agent kit design and deployment"`
- archivePath: `"kit-maker/research_archive"`
- Wave 2 is BLOCKED until user explicitly authorizes. This file is prep only.

## Expected research character per cluster

**Angles 59–63 (prompt engineering for behavioral rules):** Expect MOSTLY `consensus` and `anecdote` claims, very few `empirical`. This field has no canonical empirical literature yet — findings will be practitioner experience, blog posts, and Anthropic documentation rather than controlled studies. The verify pass will find little to verify. In synthesis, these groups default to CONSENSUS tier unless a specific controlled study turns up. Kit rules derived from these angles must carry explicit trace lines saying "no empirical evidence; based on practitioner consensus + Anthropic documentation." Do NOT treat consensus-heavy findings as a research failure — it's an honest picture of the state of the field.

**Angles 12–14 (meta-research methodology):** Expect a mix of `empirical` (PRISMA, Cochrane methodology studies) and `consensus` (information science practitioner knowledge). The academic systematic review literature is robust; the "information finding as a skill" literature is patchier.

**Angles 108–114 (research quality per angle):** Expect strong `empirical` grounding — this is the academic systematic review methodology field, which has extensive self-documentation. GRADE, AMSTAR, PRISMA-S all have published validation studies.

**Angles 22–24 (kit validation and behavioral testing):** Expect mostly `consensus` and `anecdote` for kit-specific validation (very new area), but solid `empirical` for LLM evaluation methodology in general. The kit-specific slice will likely land in GAP — be ready to surface this to the user in Phase 4.

**Angle 125 (direction-level pivot signals):** Expect `empirical` from exploration/exploitation literature (psychology of persistence, cognitive flexibility, creativity research) and `consensus` from project management and agile practitioners. The "when to pivot" question has academic grounding in goal-persistence research (Wrosch, Carver) and creative cognition; the kit-specific framing will require manual synthesis. Synthesis target: `wave-p1-direction-alternatives-synthesis-target.md`.

**Angle 119 (advisor behavior in generated kits):** Expect almost entirely `consensus` and `anecdote` — no controlled studies on CLAUDE.md behavioral contracts or goal-directed advisor wording exist. The verify pass will have near-zero empirical claims to process. Primary sources will be Anthropic documentation, practitioner CLAUDE.md examples on GitHub, and AI agent design blog posts. Treat findings as CONSENSUS tier; the synthesis target explicitly handles this — read `wave-p1-advisor-behavior-synthesis-target.md` before synthesizing.

## Query quality notes

**Angles 59–62, 22–24, and 119** have no specific foundational author/year in query 1 — the fields are too new. For these angles, query 1 should be interpreted as "earliest known empirical work OR most-cited practitioner guide." Research agents should not reject results because no 2009 Moher-style anchor paper exists — fall back to the most authoritative available source and classify accordingly.
