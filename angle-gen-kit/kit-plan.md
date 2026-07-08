# kit-plan.md — angle-gen-kit Phase 5

**Generated:** 2026-07-05
**Input:** synthesis.md (Phase 4), ENTRYPOINT.md (Hard Rule 13), kit-design-principles.md

---

## Goal

The angle-gen-kit produces a quality-gated list of research angles from a sparse input (1–2 sentence human prompt), ready for dispatch to a downstream research agent. The agent using the kit drives the process; the user validates the final angle list and makes scope decisions only.

## What this kit is NOT

- Not a research execution kit — it produces angles, not findings
- Not a systematic review tool — it does not manage database credentials, Boolean syntax, or deduplication
- Not a synthesis kit — angles out, not confidence maps out
- Not designed for structured expert input — the baseline user gives a one-sentence prompt; the kit-maker's structured briefing is an optional upgrade layer, not the default

## Done-criteria (testable)

Kit is done when:
1. Given only "I want to research instruction-following in LLMs," the kit produces ≥5 structurally distinct angles spanning ≥3 vocabulary traditions, at least one null-hypothesis angle, and at least one adversarial/disconfirming angle
2. Each angle passes the Boolean-connective test (cannot be combined with another using OR) and the vocabulary-tradition check (each angle targets a different tradition)
3. The angle list includes source-type assignments (academic + practitioner pair per angle where applicable)
4. No angle was scored using LLM self-evaluation — all quality criteria are structural and checkable
5. The intake procedure produces a research brief from a 1-2 sentence input with no prior structured input from the user

---

## Strongest unsupported assumption

Coverage-gap conditioning prompts can reliably produce vocabulary-diverse angles for an LLM working from a sparse input — when all studies demonstrating LLM diversity collapse used unconstrained prompting, and no controlled study has demonstrated that coverage-gap conditioning specifically overcomes vocabulary-tradition blind spots (as opposed to recovering within-tradition diversity alone).

**Why this matters:** The kit's core mechanism — prompt the LLM to identify which vocabulary tradition is NOT yet covered — assumes the LLM can accurately identify absent vocabulary traditions. But vocabulary-mismatch research shows the 20% overlap problem applies to humans with domain knowledge. An LLM at domain entry may be unable to name the traditions it has never seen. If this assumption fails: the coverage-gap conditioning step produces false confidence that all traditions are covered.

**Fallback if assumption fails:** Seed the vocabulary-discovery step with external signal (survey-paper titles, pearl-growing from a known anchor) rather than relying on LLM introspection to enumerate unknown traditions. This fallback is documented in intake.md.

---

## File manifest

### File 1: CLAUDE.md

**Purpose:** Behavioral contract governing how any agent using this kit approaches the task. Must be the first file built and the first file an agent reads.

**Key content:**
- Gold standard: angle list that requires minimal user correction; agent drives coverage; user validates and narrows scope only
- Delegation model: agent owns vocabulary discovery, angle generation, quality gating, next-step proposals; user owns topic boundary, contested scope decisions, final angle selection
- After-every-task rule (bookended at top AND bottom of file): after producing any angle list, intake brief, or quality check — name what is missing, incomplete, or questionable in the current output before reporting done
- Domain-specific next-step examples drawn from Phase 2 quality dimensions (angle completeness, distinctness, launchability):
  - "After generating an angle list: check whether a null-hypothesis angle is present. If absent — that is the next task."
  - "After running the vocabulary-tradition check: name which traditions are NOT covered and propose whether to add angles or accept the gap."
  - "After the Boolean-connective test flags two angles as synonyms: propose a merged angle or a scope split before reporting the list as ready."
- Decay warning naming the domain-specific failure mode: producing a list of angles that look diverse but cluster in the same vocabulary tradition is the primary failure mode; it is invisible without the vocabulary-tradition check; observable violation = angle list does not have a vocabulary-tradition column populated
- Goal-model-at-intake: at every session start, re-read intake.md to confirm whether the topic brief is complete or needs updating before generating angles
- Intake protocol: outcome-critical unknowns only (topic boundary, question type); infer vocabulary clusters from the sparse input using vocabulary-discovery step; cap at 2 questions maximum
- Intake structural gate: do NOT proceed to angle generation until topic brief exists — this is binary-checkable
- Minimum model tier declaration: frontier (multi-step vocabulary discovery with coverage-gap conditioning requires reliable multi-hop instruction following; small model collapse documented at 77-87% failure rate for Plan-and-Execute workflows)
- Rule density culling: ≤7 simultaneously active behavioral rules; commission form preferred over NEVER form; prohibition rules bookended at top and bottom

**Done-criteria:** All 12 Hard Rule 13 elements present (checked against ENTRYPOINT.md directly, not from memory); ≤8 actionable behavioral rules; each rule has observable trigger condition AND observable violation condition; 2-3 domain-specific next-step examples using angle-gen vocabulary; no generic "be thorough" language; behavioral contract text ≤350 words.

---

### File 2: intake.md

**Purpose:** Converts a 1-2 sentence sparse input into a structured research brief that angle-generation.md can consume. Answers: what is the topic, what is the question type, which vocabulary traditions are known at intake, what scope markers exist.

**Key content:**
- Sparse-input processing: extract 3 elements from any human prompt — (1) the target concept, (2) any vocabulary anchor terms the user used, (3) any scope signal (domain, date range, explicit exclusions)
- Vocabulary bootstrap step: given the extracted anchor terms, enumerate candidate vocabulary traditions using 3 sources: (a) LLM enumeration of known synonyms/alternative framings (fast, cheap, guaranteed to find the obvious ones); (b) identify whether a survey paper exists by querying "[topic] survey 2023 2024 2025" — survey paper title terms are vocabulary audit material; (c) note any terms the user did NOT use that the LLM would expect — absence is a signal of vocabulary-tradition gap
- Question-type classification: classify as EXPLORATORY (what is the space of findings on X?) vs. STRUCTURED (does intervention A work better than B?); this gates the framework-application decision per the CONTESTED synthesis finding
  - EXPLORATORY → use PCC frame (Population, Concept, Context); do NOT apply PICO at intake; exploratory-search-first
  - STRUCTURED → PICO/SPIDER applicable after vocabulary is established
- Output format: populated brief with fields: Topic, Anchor vocabulary, Candidate vocabulary traditions (numbered list), Question type, Scope markers, Known exclusions, Estimated domain maturity (academic-heavy / practitioner-heavy / mixed)
- Fallback protocol (for when LLM vocabulary enumeration is the only bootstrap available): flag that vocabulary-tradition check is operating on self-reported traditions only; recommend a survey-paper pass before finalizing angle list; this goes into the brief as a caveat, not a blocker
- 1-3 question cap: only ask the user if the topic boundary is genuinely ambiguous (outcome-critical unknown per intake protocol); infer everything else from the sparse input

**Done-criteria:** Procedure produces a populated brief from "I want to research instruction-following in LLMs" with no other input; brief contains all output fields populated (no blanks); procedure does not ask more than 2 questions; vocabulary traditions list has ≥2 entries or explicitly flags "only 1 tradition identified at intake — vocabulary-discovery pass required before angle generation."

---

### File 3: angle-generation.md

**Purpose:** Main procedure for generating a quality angle list from the intake brief. The core of the kit.

**Key content:**

**Step 0 — Vocabulary-frame enumeration (required before first angle)**
Given the vocabulary traditions from intake.md, build a coverage map: what traditions are known, what angle-slot each tradition gets, and which traditions are NOT yet represented in the planned list. Minimum: 2 vocabulary traditions per high-priority concept. Log any concept with only 1 known tradition as a vocabulary-discovery gap.

**Step 1 — Structural angle-type allocation**
Before generating any angle content, allocate angle TYPES:
- Confirmatory angles: at least 2 (different vocabulary traditions)
- Null-hypothesis angle: exactly 1 required — cannot be skipped; format: "what evidence would show this intervention does NOT work / this effect does NOT hold?"
- Adversarial/disconfirming angle: at least 1 — different starting vocabulary from confirmatory angles; if the kit session cannot structurally separate adversarial generation context (separate agent call), flag the angle as "ADVERSARIAL-FLAGGED: dispatch this in a separate research context with no prior confirmatory results"
- Cross-disciplinary angle: at least 1 — targets a vocabulary tradition the intake brief did NOT contain

This allocation is done BEFORE any angle content is generated. Allocation is a structural gate — the content generation step cannot begin without it.

**Step 2 — Coverage-gap conditioning generation**
For each allocated angle slot, generate angle content using coverage-gap conditioning:
- For confirmatory slots: "Given the following vocabulary traditions already covered: [list]. Which aspect of [topic] is NOT yet addressed by these queries?"
- For null-hypothesis slot: "Formulate the angle as a disconfirming search: what query string would retrieve literature showing [phenomenon] does NOT occur or does NOT generalize?"
- For adversarial slot: explicitly exclude prior vocabulary from the generation prompt — this is the structural operationalization of the independence requirement
- For cross-disciplinary slot: name a discipline DIFFERENT from the user's apparent discipline and generate an angle from that discipline's vocabulary

**Step 3 — Source-type assignment per angle**
Every angle receives a source-type pair before being finalized:
- Academic source (arXiv, Semantic Scholar, PubMed — field-dependent; see platform-calibration.md for field-specific category rules)
- Practitioner source (GitHub, blog posts, technical reports, Stack Overflow, HN/Show-HN)
- Grey-literature note: if the topic is practitioner-heavy (from intake brief: "practitioner-heavy" or "mixed"), the practitioner source is not optional; it captures practitioner knowledge absent from academic literature
- If topic is academic-only mature (intake brief: "academic-heavy" with minimal practitioner production): practitioner source may be deprioritized; log the decision

**Step 4 — Query generation within each angle**
Generate 3–5 queries per angle using expansion-as-facet-generation (not synonym proliferation):
- Specificity gate: do NOT expand well-anchored queries (proper-noun anchored, specific-tool named, post-2023 niche topic) — expansion degrades retrieval for these; run the original query
- Coverage-gap check before each additional query: "Has the facet covered by [new query] already been addressed by a prior query in this angle?"
- Cap at 5 queries per angle — Bradford zone returns show diminishing value beyond 3–5 distinct source strategies

**Trace:** vocabulary-mismatch HIGH (G1 principle — Step 0); llm-generation-failure-modes HIGH (G2 — Step 1, Step 2); confirmation-bias HIGH (G3 — adversarial slot structural separation); source-diversity HIGH (G4 — source-type assignment); query-expansion-mechanics HIGH (G8 — specificity gate, coverage-gap conditioning); platform-search-strategies HIGH (G6 — platform calibration pointer)

**Done-criteria:** Angle list has: ≥1 null-hypothesis angle present; ≥2 confirmatory angles from different vocabulary traditions; ≥1 adversarial-flagged angle; ≥1 cross-disciplinary angle; every angle has a vocabulary-tradition label and a source-type pair; Step 0 coverage map populated; no angle uses LLM self-evaluation for ranking; angle count is between 5 and 12 (below 5 = undercoverage; above 12 without justification = mode collapse or scope inflation).

---

### File 4: angle-quality.md

**Purpose:** Binary-checkable quality criteria for a completed angle list. Applied after angle-generation.md produces the draft list, before the list is delivered to the user or dispatched to a research agent. Every criterion must be checkable by a fresh agent without judgment calls.

**Key content:**

**Gate 1 — Completeness checks (pass/fail)**
- [ ] Null-hypothesis angle present: one angle explicitly framed as "what would show this does NOT work/hold?"
- [ ] Adversarial angle present: one angle marked ADVERSARIAL-FLAGGED with note to dispatch in separate context
- [ ] Cross-disciplinary angle present: one angle targeting a vocabulary tradition not in the intake brief
- [ ] Source-type coverage: at least one angle targets a practitioner/grey-literature source IF intake brief flagged topic as practitioner-heavy or mixed
- [ ] Vocabulary-tradition map populated: Step 0 coverage map in angle-generation.md has ≥2 traditions listed

**Gate 2 — Distinctness checks (pass/fail)**
Boolean-connective test for each pair of angles:
- Take any two angles. Can their query strings be combined with OR and still retrieve substantially the same documents as running them separately?
- If YES: the angles are synonyms — one of them should be revised or merged
- Test is pairwise: apply to every angle pair, not just adjacent ones
- Note: for small literatures (<20 papers on topic from intake), high pairwise overlap may reflect literature size, not angle redundancy — flag for human judgment rather than automatic merge

Vocabulary-tradition distinctness:
- Every angle must have a different vocabulary-tradition label in its source field
- Two angles with the same vocabulary-tradition label are candidates for merger unless one is the null-hypothesis or adversarial variant of the other

**Gate 3 — Launchability checks (pass/fail)**
Each angle must pass all three:
- [ ] Has at least one concrete query string (not a description, a runnable query)
- [ ] Query contains no "TBD", "to be determined", or vague placeholder vocabulary
- [ ] Source type is named (not "some database") — specific enough that a research agent knows where to start

**Gate 4 — Scoring prohibition (pass/fail)**
- [ ] No angle was ranked or scored using LLM output quality judgment
- [ ] If angles were filtered or ranked: the criterion used was structural (vocabulary-tradition coverage, source-type coverage, null-hypothesis presence) — not "which seems most promising" or "which seems most novel"

**Known limits of these criteria (from synthesis):**
- The Boolean-connective test cannot detect distinctness for angles in very small literatures (<20 papers) — human judgment required
- The PICO facet test (not included here) systematically rejects exploratory angles — this kit uses the Boolean-connective test as the more general alternative
- Vocabulary-tradition distinctness check assumes the agent can accurately enumerate traditions — this is the unsupported assumption in kit-plan.md; flag any angle list where vocabulary traditions are ALL self-reported by LLM enumeration alone

**Trace:** angle-quality HIGH (G7 principle — Boolean-connective test as gold standard proxy; mode collapse warning); llm-generation-failure-modes HIGH (G2 — LLM self-evaluation prohibition); source-diversity HIGH (G4 — source-type completeness check)

**Done-criteria:** Every criterion in all four gates is binary-checkable by a fresh agent (no "use judgment" phrasing); known limits section is present and cites synthesis evidence; a sample angle list passes all four gates OR fails with a specific, named reason; no criterion uses a synonym or near-synonym of "important," "significant," "sufficient," or "reasonable."

---

### File 5: platform-calibration.md

**Purpose:** Per-source calibration rules with specific override instructions. Agents following "search arXiv" without this file default to cs.AI category, missing 65% of LLM literature. This file is the mechanism that prevents platform-design constraints from becoming invisible search failures.

**Key content:**

**arXiv**
- Default agent behavior (wrong): search cs.AI for LLM topics
- Override rule: for LLM/NLP topics use cs.CL + cs.LG; for AI systems use cs.AI + cs.LG; for agent/robotics use cs.RO + cs.AI; cs.AI alone misses ~65% of LLM papers (empirical, 2023 snapshot — verify this distribution periodically as field matures)
- Result cap: arXiv search has effective caps for large result sets — paginate or use Semantic Scholar API for >200 results
- Temporal note: these category distributions are from 2023 snapshot data; revalidate if this kit is used in 2027 or later

**Semantic Scholar**
- Use for: cross-reference, citation network, paper clustering
- Avoid using as sole source: overlaps substantially with arXiv for preprints
- Note: Semantic Scholar + arXiv = NOT structurally distinct for AI topics (same ingest policy for many papers); pair with GitHub or practitioner sources for genuine structural diversity

**Google Scholar**
- Role restriction: discovery-only, not systematic retrieval
- Hard limits: 1000-result cap; non-reproducible sort; no robust Boolean support for nested queries
- Exclusion rule: never use as the sole academic source; never use for systematic recall claims
- When to use: finding the original paper for a cited claim; finding author pages; discovery of unexpected adjacent fields

**GitHub**
- Quality gate: repositories with fewer than 50 stars AND fewer than 10 forks AND no README = low-confidence signal
- Fake-star contamination note: ~16.66% of repos with 50+ stars showed fake-star patterns in 2024 peak measurement; look for commit history and contributor diversity as quality signals beyond star count
- Use for: practitioner implementation patterns, issue discussions (what practitioners actually struggle with), README vocabulary (how practitioners describe the problem)
- GitHub search ordering: "most starred" and "most forked" are the useful orderings; "best match" (default) is unreliable for research purposes

**HN / Reddit / Community Sources**
- Role: vocabulary discovery and failure-mode identification only
- Score decoupling: HN/Reddit popularity scores are decoupled from quality (r=0.29 for HN, practitioner grey-lit study); do NOT use upvote count as a quality signal
- Use for: what practitioners find confusing, what terminology they use that differs from academic literature, failure modes mentioned in comments

**Temporal maintenance note:** arXiv category distributions and GitHub fake-star rates change over time. This file should be verified against current platform behavior at kit launch and annually thereafter. The directional findings (Google Scholar non-reproducibility, HN score decoupling) are from documented platform behavior and are more stable; the specific percentages (65% arXiv miss, 16.66% fake stars) have temporal scope conditions.

**Trace:** platform-search-strategies HIGH (G6 principle — per-source calibration is the mechanism preventing platform-design constraints from becoming invisible failures); source-diversity HIGH (G4 — structurally distinct means different ingest policy, not different interface to same corpus)

**Done-criteria:** Covers ≥4 source types; every source entry has a "role restriction" (what it is and is NOT for); every hard limit is stated as a specific constraint (not "may have limitations"); temporal-maintenance note present; no generic "search X for papers" instructions; arXiv category overrides cover LLM, NLP, AI systems, and agent domains.

---

### File 6: weakness_register.md

**Purpose:** Honest accounting of what this kit cannot reliably do. The trust mechanism — users who can see limitations can compensate; users who believe the kit is complete cannot.

**Key content:**

**Weakness 1 — Vocabulary-tradition discovery limit (EVIDENCE-BASED)**
When the only vocabulary-tradition bootstrap is LLM enumeration, the kit cannot reliably surface traditions the LLM has not encountered in training. The vocabulary-mismatch research (>80% mismatch probability, HIGH confidence) establishes this as a structural property, not a prompting problem. Mitigation path: survey-paper bootstrap from intake.md; human expert consultation for niche cross-disciplinary domains.

**Weakness 2 — Pre-expansion gating gap (EVIDENCE-BASED — GAP)**
No study found a reliable method to predict BEFORE expansion whether expansion will help (+13%) or hurt (-9%) for a given query. The kit's specificity gate (no expansion for proper-noun anchors) is a heuristic without empirical validation. Some angles will be over- or under-expanded with no reliable pre-execution signal. Evidence: synthesis Step 6 Gap 1.

**Weakness 3 — AI-agent confirmation bias magnitude unknown (EVIDENCE-BASED — GAP)**
The 10x confirmation bias amplification finding (CHI 2024) was measured on human subjects in short sessions on opinion-laden topics. The specific magnitude of confirmation bias in an agent-generated angle list on technical topics is unmeasured. The adversarial-flagged angle mechanism is grounded in structural independence research but the required "aggressiveness" of the adversarial arm is uncalibrated. Evidence: synthesis Step 6 Gap 2.

**Weakness 4 — Small-literature Jaccard failure mode (EVIDENCE-BASED — CONTESTED)**
For topics with <20 papers, two valid distinct angles will retrieve the same 15 papers (high Jaccard), and the Boolean-connective test may incorrectly flag them as synonyms. The angle-quality.md criteria include a human-judgment flag for this case, but the kit cannot automatically detect when this failure mode is active. Evidence: synthesis Step 3.6 counter-prior pass 7.

**Weakness 5 — Clinical/SE evidence transfer gap (EVIDENCE-BASED)**
The majority of HIGH-confidence findings come from clinical medicine (PICO, multi-database recall, grey-lit bias) and software engineering contexts. Direct empirical validation for AI research angle generation has not been conducted. The principles are mechanism-grounded but the specific recall percentages (95% two-source threshold) have medium confidence for AI topics. Evidence: synthesis Step 6 Gap 5.

**Weakness 6 — Single-session angle generation cannot substitute for structural adversarial separation (EVIDENCE-BASED)**
The confirmation-bias research requires a SEPARATE agent context for adversarial queries. This kit can produce ADVERSARIAL-FLAGGED angles, but if the downstream research agent executes all angles in the same session without context separation, the structural independence requirement is violated. The kit cannot enforce downstream execution discipline — it can only label the angles correctly.

**Done-criteria:** ≥5 weakness entries; each entry is labeled EVIDENCE-BASED (citation to synthesis claim) or HEURISTIC; no entry claims the weakness has been fully mitigated (mitigations listed as partial only); weakness 1 (vocabulary-discovery limit) and weakness 2 (pre-expansion gating) are present as the two most consequential unsupported areas.

---

### File 7: strength_register.md

**Purpose:** What this kit does reliably well, grounded in synthesis evidence. Counterpart to weakness_register.md — both required for honest capability claims.

**Key content:**

**Strength 1 — Structural null-hypothesis angle generation (HIGH)**
The null-hypothesis blindspot is documented as a systematic LLM default failure (A10 F4). By requiring a null-hypothesis angle as a structural gate, the kit guarantees this angle class is present in every output — regardless of whether the LLM would have generated it without the explicit requirement.
Evidence: llm-generation-failure-modes HIGH — synthesis G2.

**Strength 2 — Vocabulary-tradition coverage audit (HIGH)**
The vocabulary-mismatch finding (HIGH) establishes that single-tradition search misses the majority of literature. The kit's Step 0 vocabulary-frame enumeration maps traditions before any angle is generated — this is the operative intervention that determines the accessible literature space. Even with an imperfect vocabulary enumeration, requiring the agent to populate the map surfaces gaps earlier than purely implicit search would.
Evidence: vocabulary-mismatch HIGH — synthesis G1 derivation.

**Strength 3 — Adversarial angle structural labeling (HIGH)**
The same-agent adversarial pass failure (confirmation-bias HIGH) is prevented at the architectural level: adversarial angles are labeled ADVERSARIAL-FLAGGED with an explicit dispatch note for context separation. This means the downstream research agent has the signal it needs to enforce structural independence — without it, the independence requirement would be invisible.
Evidence: confirmation-bias HIGH — synthesis G3 derivation.

**Strength 4 — Mode collapse detection via Boolean-connective test (HIGH)**
LLM mode collapse (synonym clusters) is the documented default for unconstrained angle generation. The Boolean-connective test and vocabulary-tradition distinctness check are both applied before the angle list is delivered — these catch the most common form of mode collapse (same angle in different vocabulary).
Evidence: angle-quality HIGH — synthesis G7; llm-generation-failure-modes HIGH — synthesis G2.

**Strength 5 — Sparse-input operability (Principle 9)**
The kit works from a 1–2 sentence input. This is the most common user input pattern and the hardest to support — most structured research tools assume pre-organized input. The intake.md procedure bootstraps vocabulary and question type from minimal signal.
Evidence: kit-design-principles.md Principle 9.

**Done-criteria:** ≥4 strength entries; each entry cites the specific synthesis claim (not just the group); no strength claims 100% reliability — each names the scope condition under which it holds; Strength 1 (null-hypothesis gate) and Strength 2 (vocabulary map) present.

---

## Phase 6 build order (riskiest-first, behavioral contract first)

**Rule:** Behavioral contract (CLAUDE.md) is always built first per Hard Rule 13.

| Order | File | Risk level | Risk reason |
|-------|------|-----------|-------------|
| 1 | CLAUDE.md | CRITICAL | Governs how agent uses every other file; wrong behavioral contract means all downstream files operate under wrong assumptions; cannot be fixed after other files are built without rebuilding them |
| 2 | intake.md | HIGH | Entry point to the kit; if intake produces a malformed brief, angle-generation.md receives garbage input and all angles fail; sparse-input operability is the hardest design requirement (Principle 9) |
| 3 | angle-generation.md | HIGH | Core procedure; most research-grounded rules; most likely to require research gap fill during drafting; if Step 0 vocabulary-frame enumeration is wrong, quality gates will not catch the failure |
| 4 | angle-quality.md | MEDIUM | Depends on angle-generation.md being well-defined — quality gates must match what angle-generation.md produces; ambiguity in generation step creates false pass/fail in quality step |
| 5 | platform-calibration.md | MEDIUM | Supports angle-generation.md Step 3; contains temporal data (arXiv categories, GitHub fake-star rates) that requires the most careful tracing; wrong platform rules produce systematically biased angle lists |
| 6 | weakness_register.md | LOW-MEDIUM | Can only be properly written after seeing what the kit does and doesn't do; content is driven by synthesis gaps and Phase 7 findings |
| 7 | strength_register.md | LOW | Content is driven by synthesis HIGH findings applied to kit design; low risk of getting this wrong; most useful when read alongside weakness_register.md |

**Riskiest-first ordering criteria used:**
- (a) If this file is wrong, how many other files break? CLAUDE.md and intake.md break everything; angle-quality.md only breaks the quality gate
- (b) How hard is it to fix after the kit is partially built? intake.md/angle-generation.md design decisions are baked into later files; platform-calibration.md is standalone
- (c) How uncertain is this design choice after synthesis? angle-generation.md has the most CONTESTED findings (PICO vs. exploratory-first); CLAUDE.md has the most Hard Rule 13 density compliance risk

---

## Alternatives considered and rejected

**Alternative A — Single omnibus procedure file**
One file combining intake + angle-generation + quality checks. Simpler to read; no cross-file navigation.
Rejected: violates Principle 1 (rules must be followable by fresh agent); combining intake, generation, and quality criteria in one file creates a procedure no single agent can hold in context. Mixing intake questions with generation steps with quality checks in one file would require the agent to track its position across three distinct task types. Separation by responsibility reduces context burden.
Where it would have won: single-shot toy use cases with a structured expert user who can fill in all fields manually.

**Alternative B — Minimal 3-file kit (CLAUDE.md + one procedure + one register)**
Lean-core alternative: CLAUDE.md, angles.md (combined intake+generation+quality), weakness_register.md.
Rejected: the platform-calibration data is temporal and updateable — merging it into angles.md makes it harder to update without re-auditing the entire procedure. The intake/generation/quality separation reflects three distinct task types (information gathering, creative generation, evaluation) that mix badly. The lean-core argument (Principle 8) supports minimal files, not incorrect file boundaries.
Where it would have won: kits for very narrow topics where vocabulary traditions are well-known and platform rules are stable.

---

## Input-type coverage

| Input type | Kit file | Procedure step |
|-----------|----------|----------------|
| 1-2 sentence sparse prompt | intake.md | Sparse-input processing step |
| Domain + known vocabulary | intake.md | Anchor vocabulary extraction |
| Structured research brief (advanced user) | intake.md | Brief is a valid intake — validates the brief against output fields, proceeds directly |
| "I don't know where to start" (zero anchor) | intake.md | Survey-paper bootstrap fallback; vocabulary-discovery gap flagged |
| Topic with known exclusions | intake.md | Scope markers field |
| Cross-disciplinary topic (2 fields) | angle-generation.md | Step 1 cross-disciplinary angle allocation |

Input-type coverage: 3 types explicit, 3 inferred — all routes through intake.md as the single entry point.

---

## Scale handling

Realistic input scale for angle generation is small (1 research question, 5–12 angles, 3–5 queries per angle). This kit does not face a large-input scale problem at the angle-generation stage.

The downstream scale risk is in the research execution stage (not this kit's scope). The kit explicitly marks angles with ADVERSARIAL-FLAGGED to signal execution context requirements — this is the handoff mechanism to downstream scale management.

Known scale limit: vocabulary-tradition enumeration degrades for topics that span >5 disciplines simultaneously (e.g., "ethics of AI in healthcare law"). In this case, Step 0 produces a coverage map that is necessarily incomplete, and the weakness register entry for vocabulary-discovery limits applies.

---

## Plan quality audit checklist

- [x] "Strongest unsupported assumption" is filled and specific — not vague
- [x] Every file has testable done-criteria (observable outcomes, not artifact presence)
- [x] Files are ordered riskiest-first with ordering criteria stated explicitly
- [x] Behavioral contract (CLAUDE.md) is listed first in the manifest
- [x] Quality dimension coverage: completeness (null-hypothesis gate), distinctness (Boolean-connective test), launchability (query string gate) — all covered
- [x] What alternatives were considered: Alternative A (omnibus) and Alternative B (3-file minimal) both rejected with steelmanned reasoning
- [x] Execution-Ready Gate: no "we'll figure out X later" in prose; all decisions written
- [x] Input-type coverage matrix complete

---

## Discovered work (starts empty)

_No discovered work items at plan creation._
