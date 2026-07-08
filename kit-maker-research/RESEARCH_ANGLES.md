# Kit-Making Research: Full Angle List

All suggested angles — user suggestions flagged with [USER]. Add more here before they get dropped.

---

## Angle format (required before dispatch)

Each angle below is a title only. Before dispatching any angle to a research agent, expand it to full format:

```
Title: [descriptive name]
Queries:
- Q1: [foundational paper or primary source — specific author/year/title fragment]
- Q2: [meta-analysis or systematic review on this topic]
- Q3 (adversarial, REQUIRED): "[topic] fails because..." OR "critique of [topic]" OR "[topic] null result" — targeting failures, critiques, contradictions
- Q4: [practitioner/applied version — how it shows up in real use]
- Q5 (grey-lit, REQUIRED): site:arxiv.org OR site:github.com OR [topic] practitioner blog — targeting preprints, repos, grey literature
```

**Saturation: dual condition (BOTH required before marking saturated):**
1. Consecutive queries return claim keys already in the set
2. At least 2 distinct source type domains were covered (academic + grey/GitHub/practitioner)
Saturation on one source type alone = partial saturation. Log it explicitly: "saturated within [type]; [other type] not covered."

**Adversarial + grey-lit are not optional:** The research-wave.js script enforces these at execution — missing either produces a ⚠️ flag in the archive saturation log. If you expand an angle without including Q3 and Q5, the flag will fire and a gap-fill pass will be required.

See `procedures/research-quality.md` for the full saturation and claim format.

**Before launching a wave:** queries for all angles in that wave are generated FIRST and shown to the user. The user can add or modify queries before research runs.

---

## Priority ordering (for wave dispatch)

Before launching any wave, order angles by: **most foundational × most uncertain**. An angle is high-priority if getting it wrong would invalidate many other design decisions. An angle is low-priority if it only affects one optional feature.

---

### Wave 2 status

**Original P1 clusters — ALL RESEARCHED:**
- ✓ 59–63 Cluster A (behavioral rule writing) — researched 2026-06-29 → 21 stubs (A-NEW-01 to A-NEW-21)
- ✓ 12–14 Cluster B (meta-research methodology) — researched 2026-06-29 → 18 stubs (B-NEW-01 to B-NEW-18)
- ✓ 108–114, 162 Cluster C (research quality + source selection) — researched 2026-06-29/30; 162 COMPLETED → 20 stubs (C-NEW-01 to C-NEW-20)
- ✓ 22–24 Cluster D (kit validation) — researched 2026-06-29 → 14 stubs (D-NEW-01 to D-NEW-14)
- ✓ 119, 120, 135 Cluster E/G (advisor behavior, diminishing returns, direction drift) — researched 2026-06-30 → Batch 2 stubs
- ✓ 125 Cluster F (direction-level alternatives) — researched 2026-06-30 → Batch 2 stubs
- ✓ 143–148 Cluster H (problem-solving P1: criteria, second-order, backward chaining, double-loop, MECE, rubber duck) — researched 2026-06-30 → Batch 2 stubs
- ✓ USER-01/02/03/04/07/08 (intake protocol, disagreement, multi-task retention) — researched 2026-06-30 → Batch 2 USER stubs

**What this means:** Batches 1 and 2 ARE the output of P1 cluster research. The stubs they generated are the NEXT work queue — they are NOT yet researched themselves.

**166 COMPLETED 2026-06-30.** **162 COMPLETED 2026-06-30.**

---

### P1 current queue — unresearched, highest priority

Run these before any P2 original angle. Ordered within tier by research risk.

**Gap-fill angles — researched:**
- ✓ 173 [P0]: behavioral-testing-methods vocabulary gap-fill → `behavioral-testing-methods-gap-fill-173.md`
- ✓ 174 [P1]: behavioral-rule-compliance vocabulary gap-fill → `behavioral-rule-compliance-framing-phrasing-effects-174.md`
- ✓ 175 [P1]: user-inattentiveness-salience vocabulary gap-fill → `user-inattentiveness-salience-critical-rule-failure-175.md`

**Gap-fill angles — UNRESEARCHED:**
- 176 [P1]: multi-task-instruction-completion vocabulary gap-fill (5 queries, sat=NO) — **batch 3**

**Standalone P1 labeled angles — researched:**
- ✓ 167: Evidence synthesis procedure validation → `evidence-synthesis-procedure-validation-167.md`
- ✓ 168: Reflection quality → `mandatory-reflection-quality-metacognitive-prompting-168.md`
- ✓ 170: Pre-search vocabulary-frame enumeration effectiveness → `vocabulary-frame-enumeration-effectiveness-170.md`
- ✓ USER-03: Assertive compliance in AI agents → `assertive-compliance-in-ai-agents-inform-once-then-comply-pa.md`
- ✓ USER-04: User inattentiveness and critical information salience → `user-inattentiveness-and-critical-information-salience-users.md`
- ✓ USER-07: Multi-task instruction completion in LLM agents → `multi-task-instruction-completion-in-llm-agents-when-user-gi.md`
- ✓ USER-08: Compensatory structures for multi-task retention → `compensatory-structures-for-multi-task-retention-explicit-pr.md`

**Standalone P1 labeled angles — UNRESEARCHED:**
- 169 [**P0**]: Citation-graph disconnection as vocabulary-island detector — **batch 3**
- 171 [P1]: Adversarial saturation validation (validates Category D requirement) — **batch 3**
- USER-01 [P1]: Essential vs inferable intake information — **batch 3** (affects Hard Rule 13 element 8)
- USER-02 [P1]: Front-loaded intake design for autonomous work — **batch 3** (affects Hard Rule 13 element 8)
- 178 [P1]: Expert search cognition and query vocabulary acquisition — how expert programmers/researchers think about queries before knowing field vocabulary; seed paper method; failure diagnosis from result quality; the tacit expertise behind effective searching — **batch 3**
- 179 [P1]: Query composition strategy — AND/OR/NOT Boolean reasoning, specificity calibration, diagnosing over-constrained vs under-constrained queries from result volume/quality, how many concepts belong in one query — **batch 3**
- 180 [P2]: GitHub as a deep research tool — code search vs repo search, issue/discussion archaeology (finding failure modes and real usage patterns), contributor/fork analysis, advanced techniques beyond what GH-01 captured — **batch 4**
- USER-09 [P1]: Action-counterfactual operationalization for intake protocols — would upgrade grounding-map row 7 from 🔬 SYNTHESIZED to ✅ VALIDATED if confirmed. Does the action-counterfactual question selection rule (which answer changes the action taken?) measurably improve intake efficiency or task completion quality vs. relevance/uncertainty-based selection in open-ended agent tasks? Surfaced in USER-01-02 PCR (2026-07-05), Step 3.7 Group C principle derivation.
- USER-10 [P1]: Reversibility as grounding criterion for ask-vs-proceed decisions — would upgrade grounding-map row 7 from 🔬 SYNTHESIZED to ✅ VALIDATED if confirmed. Does weighting ask-vs-proceed by reversibility of the next action (not by question volume cap alone) reduce user corrections during task execution? Surfaced in USER-01-02 PCR (2026-07-05), Step 3.7 Group G Principle derivation 2.
- 163: Practitioner blog curation for AI agent research — defer to P2

**Batch 2 labeled P1 stubs** (B2-P1-01 through B2-P1-13 — 13 stubs; full list in "Wave 2 P1 Batch 2" section below):
Role salience + priming, self-consistency as decay-resistance, preventive vs corrective instruction separation, sycophancy suppression, autonomy-preserving correction framing, stakes-calibrated assertiveness, friction mechanics, consequence framing vs severity rating, commitment-and-verify loop, criteria contamination in multi-turn loops, structural separation as pipeline primitive, alert fatigue in AI coding assistants, automation bias + overtrust.

**Batch 1 stubs — UNCLASSIFIED** (73 stubs: C-NEW, B-NEW, A-NEW, D-NEW — see "Wave 2 P1 Batch 1" section below):
No per-stub priority assigned yet. Treat as P2 default until Phase 4 synthesis triage. Do NOT dispatch without first running the triage pass.

---

**P2 — Core kit design (run second, after P1 queue above clears):**

*Original P2 — not yet researched:*
- 7–11: GitHub real-world examples — what actually exists and works
- 18–21: Kit limits, context window economics, instruction conflict, rule prioritization
- 31–38: AI-specific instruction design (first-solution bias, examples vs rules, spec gaming)
- 48–55: From claude_process — two-auditor, pitfall register, same-mental-model halt patterns
- 136–142: Agent quality mechanisms — reviewing, iteration, personas, skepticism, steelmanning, alternatives selection, brainstorming
- 149–155: Problem-solving structural mechanisms — reversibility, confidence calibration, chunking, productive failure, version comparison, constraint relaxation, non-monotonic solving
- 126–134: From adversarial test + structural alternatives

*Generated P2 labeled angles — not yet researched:*
- 164, 165: arXiv field qualifiers, Semantic Scholar API recall parity
- 168: Reflection quality (mandatory-reflection.md is UNRESEARCHED)
- 172: Dense retrieval as concept-frame-lock mitigation
- 177: articulation-before-commitment gap-fill (verbal overshadowing)
- USER-05, USER-06: Visual output evaluation + compensatory structures
- B2-P2-01 through B2-P2-33: Batch 2 labeled P2 stubs (see "Wave 2 P1 Batch 2" section)
- Batch 1 stubs after triage (expected P2 majority)

**P3 — Enhancement (run third, after P1+P2 synthesis):**
- 81–97: Goal-directed agency + human cognitive traits
- 98–107: Human problem solving
- 25–30: Kit maintenance, failure-driven improvement, adoption patterns
- 64–77: From extractions — self-review, alternatives, phase I/O, saturation
- 131–134: Structural alternative directions (adversarial test)
- 156–161: P3 problem-solving mechanisms
- B2-P3-01 through B2-P3-10: Batch 2 labeled P3 stubs

**P4 — Supplementary (run last or skip if saturated):**
- 115–118: Pipeline architecture (JSON vs markdown, contradiction synthesis, recovery)
- 39–47: Knowledge organization, process design, collaboration
- 78–80: General-class identification, mandatory alternatives, stepping-back

---

## Wave 1 — DONE
1. AI agent kit failure modes
2. Cognitive load / instruction complexity (found: 200-line limit, 8-10 rule stacking threshold)
3. Reusable framework/methodology design principles
4. Tacit knowledge extraction from experts
5. Analogous kit examples (generic search)
6. Research methodologies for tool design

## Wave 2 — QUEUED
### GitHub / Real-World Examples
7. [USER] GitHub popular agent kits — broad discovery (most starred, most forked, most used)
8. [USER] GitHub specific: CLAUDE.md examples, Claude kit templates, prompt scaffold templates
9. GitHub: AGENTS.md, system-prompt libraries, AI workflow scaffolds
10. What people complain about in existing kits — GitHub issues, Reddit, HN frustration threads
11. How kit authors document their own design decisions and known limitations

### Meta-Research & Information Finding
12. [USER] How to research scientifically — meta-research methodology, can it be improved?
13. [USER] Information finding as a skill — search strategies, query formulation, source evaluation
14. [USER] Reviewing, alternatives generation, improving methodology — systematic approaches
15. Saturation-based research stopping criterion — when have you learned enough?
16. Wisdom of crowds for weak/anecdotal sources — when do many weak signals add up?
17. Adversarial review methodology — how to structure it so it's not just "opposing opinion"

### Kit Limits & Diminishing Returns
18. [USER] Kit limits / diminishing returns — how much is too much? Where do negative returns start?
19. Context window economics — cost/benefit of each added rule or skill
20. Instruction conflict resolution — what happens when kit rules contradict each other?
21. Rule prioritization in AI systems — how do models triage competing directives?

### Kit Quality & Testing
22. [USER] How to test if a kit actually works — validation methodology for AI behavior
23. Behavioral testing for LLMs — what methods exist to verify instruction compliance? [BORDERLINE: user tests empirically; skim only, don't deep-research]
24. Kit robustness — what edge cases do kits systematically fail to cover?

### Kit Evolution & Maintenance
25. [USER] Kit maintenance lifecycle — how kits age, become outdated, get forked
26. ~~Kit versioning — how to evolve a kit without breaking existing uses~~ REMOVED: solo user, no breaking-change concern; generated files are already self-contained by design
27. Rule retirement methodology — when and how to remove rules from a kit
28. [USER] Failure-driven improvement — how to capture failure signals from real use and feed them back into kit improvement; feedback loop design (what counts as a failure, how to log it, how to decide it warrants a kit change vs a one-off fix)

### Adoption & Usage Patterns (reframed: what makes a kit enjoyable and sustainable for the builder themselves)
28. What makes a kit enjoyable to keep using long-term — even as the person who built it? What makes you reach for it vs ignore it?
29. Why people abandon their own toolkits — what friction or failure patterns make even the author stop using it?
30. Re-onboarding friction — after not touching a kit for a month, how easy is it to pick back up? What design choices make this better or worse?

### AI-Specific Instruction Design
31. [USER] First-solution bias in AI — does this happen? how bad is it? how to prevent it?
32. Examples vs rules in AI instructions — which is more effective and when?
33. Instruction generalization — when do specific rules generalize to new situations?
34. Multi-domain kit design — how to make one kit work across different domains
35. Cross-model compatibility — do kits designed for Claude work on GPT/Gemini? What general instruction design principles does cross-model research surface?
36. [CLAUDE] Specification gaming — AI finding technically-correct but unintended interpretations of rules; documented failure mode; how to write rules that close this gap
37. [CLAUDE] Kit composability — what happens when two kits are active simultaneously? Do they conflict? How should conflicts be handled? Almost nobody has researched this
38. [CLAUDE] Expert blind spot in kit design — how domain experts systematically over-specialize kits for their own workflow; research on this in UX, software, medicine
39. [CLAUDE] Progressive disclosure in kit design — instead of dumping all rules upfront, kits that teach themselves to the agent as situations arise; is this better? any evidence?

### Knowledge Organization
36. How to structure knowledge for AI consumption — different formats and their effects
37. Modular vs monolithic instruction design — trade-offs
38. When to inline vs reference — pointer-based vs content-based kit design

### Process Design
42. Academic research on prompt engineering as a design discipline
43. How other disciplines (UX, engineering, medicine) design process checklists that work
44. Checklist design principles (Gawande, WHO surgical checklist research)
45. [CLAUDE] Budget constraint alongside saturation — practical "good enough" threshold for research; some domains never fully saturate; how do other research disciplines handle this?
46. [USER+CLAUDE] Collaboration between user and AI during kit-making — what does good human-AI collaboration look like when designing a process? when should AI challenge vs defer? research on this
47. [USER] Checking/challenging user's own assumptions — adversarial pass specifically on the user's stated requirements and decisions, not just the research findings; user can be wrong too

### Prompt Engineering for Kit Skills (NEEDS DEEP RESEARCH — current knowledge flawed)
56. [FROM prompt_auditor.txt] Prompt auditing criteria for behavioral guidance specifically — contradictions between rules, ambiguous/soft language ("try", "prefer"), missing negative rules (what does NOT count), decision hierarchy determinism. How do these criteria differ for behavioral guidance vs classification prompts?
57. [FROM prompt_auditor.txt] Minimal edit principle — fix only Critical/High issues, smallest necessary change, preserve intent. Cluster failures before fixing. Research: is there evidence this is better than rewriting?
58. Adversarial prompt testing for behavioral guidance — what failure patterns are specific to kit skills (vs classification prompts)? How do you stress-test a rule rather than a classifier?
59. [DEEP RESEARCH NEEDED] How to write behavioral rules Claude reliably follows — what linguistic patterns, structures, specificity levels produce consistent compliance? What makes a rule ambiguous to Claude even when it seems clear to humans?
60. [DEEP RESEARCH NEEDED] Negative rules in AI instructions — "do NOT do X" vs "only do Y" vs "skip X when Z". Which formulations are more reliable? Research on negation in LLM instruction following.
61. [DEEP RESEARCH NEEDED] Decision hierarchy design in complex skill files — when rules conflict, how should priority be expressed? Explicit ordering, conditionals, if/then structures? What works?
62. [DEEP RESEARCH NEEDED] Specificity vs generality in rules — overly specific rules miss edge cases, overly general rules get misapplied. Where is the right level? Any research on this trade-off?
63. Prompt engineering for process/workflow guidance specifically — most prompt engineering research is about tasks (classify, summarize, generate). Process/workflow guidance (do this, then this, then check) is different. What research exists on this?

### Research Archive Design
56. [CLAUDE] Kit output should include a research archive alongside the kit — without it, rules become cargo cult (no traceable justification). How should the archive be structured? What level of detail is enough to be useful for future improvement without being a maintenance burden?
57. [CLAUDE] Trace lines in lessons (claude_process pattern) — each rule links to its evidence source inline. Does this scale? When is inline citation sufficient vs when do you need the full research corpus?

### From claude_process — Patterns to Research & Possibly Adapt
48. [FROM CP] Two-auditor model — Completeness auditor + Correctness auditor as separate independent agents with restricted tools (read-only); no self-certification; hard cap at 3 RED rounds. Is this the right structure for kit review?
49. [FROM CP] Session-end promotion / pitfall register — count≥2 before promoting a mistake to a rule (count=1 is noise); user-gated; does this pattern apply to kit improvement too?
50. [FROM CP] Same-mental-model halt — after N actions on one hypothesis, must enumerate fundamentally different approaches; prevents local-optimum traps. What should N be for kit design?
51. [FROM CP] Stake-tagging — certain content is high-stakes regardless of apparent simplicity; what would high-stakes spots in a kit look like?
52. [FROM CP] Known-bad-example (canary) — a deliberately wrong example auditors can test against; should the kit-maker produce one for each kit?
53. [FROM CP] Riskiest-first ordering — hardest/highest-stakes skills built and reviewed first. Does this apply to kit design the same way it applies to software?
54. [FROM CP] Strongest unsupported assumption — explicit field in every plan naming the weakest link. Should every kit-making phase have a required assumption-naming step?
55. [FROM CP] Phase model with named inputs/outputs — each phase has a named input and output so phases can be retried in isolation. Good structure for the kit-maker itself?

## Wave N+ — Generated from Research Findings (CORE PRINCIPLE)

Research findings should generate new angles. After each wave synthesis, any finding that reveals a gap, contradiction, or unexplored direction gets added here before the next wave launches. This is the loop — not "research then build" but "research → gaps emerge → more research → saturation".

Wave 1 generated findings — angles to pursue:
- 29. [FROM WAVE 1] LLM-generated kit files underperform human-written — WHY exactly? What makes human-written better? Can we partially automate without losing the benefit?
- 30. [FROM WAVE 1] "Bottom 80% of long files ignored" — what IS attended to at the top? Does placement/ordering of rules inside a file matter significantly?
- 31. [FROM WAVE 1] Claude Process bootstrap auditors check internal consistency not user-intent alignment — what would a user-intent alignment check look like? How do you verify the kit does what the user actually wanted?
- 32. [FROM WAVE 1] Cascading error at 10+ steps — does this argue for flat (few-step) kit designs? What's the right pipeline length for a kit?
- 33. [FROM WAVE 1] Rule stacking threshold at 8-10 — does chunking/grouping rules (e.g. "when doing X, apply rules A-C") extend this limit? Any research on grouped vs flat rule presentation?

(Wave 2 angles TBD after wave 2 runs)

From claude_process H16 extraction:
- 64. [FROM EXTRACTION] LLM-as-judge calibration ceiling for non-code artifacts — code review hits ~80% human agreement ceiling; does the same apply to kit/text review? Does the 3 RED round cap still make sense?
- 65. [FROM EXTRACTION] "Behavior not counts" for text/rule artifacts — how do you assert that a rule "works" in a behavioral sense, not a count sense? What does a behavioral assertion for a kit rule look like?
- 66. [FROM EXTRACTION] Termination contracts for iterative refinement — research on when to stop improving (vs fixed count stop). Any evidence on optimal stopping for text/process refinement?
- 67. [FROM EXTRACTION] Known-bad example (canary) design for non-code artifacts — what makes a deliberately bad kit example useful for calibration? What violations should it demonstrate?
- 68. [FROM EXTRACTION] Session handoff: structured files vs freeform summaries — Factory.ai measured 20-30% fidelity loss per summarization pass; any research on structured handoff files vs summarization for multi-session non-code work?

From self-review of extraction (tunnel-vision problem):
- 69. [FROM REVIEW] AI self-review absence as a failure mode — the fundamental problem the user named: AI completes the defined task and stops, doesn't ask "was that all I could get, what does this suggest?" Research on this specifically: is there evidence that adding an explicit self-review step after task completion improves output quality? What triggers it reliably?
- 70. [FROM REVIEW] Alternatives generation timing — claude_process adds an alternatives phase only when a design choice has "more than one plausible shape" (reactive). Is proactive alternatives generation after ANY task better? Research on when to force alternatives generation vs when to let the agent proceed.
- 71. [FROM REVIEW] Explicit "when to skip" sections in procedural guidance — every claude_process procedure has a "When to skip" and "When NOT to skip even when tempted" section. Research: does including explicit skip conditions improve compliance with the procedure overall, or does it create rationalization loopholes?
- 72. [FROM REVIEW] Two-level high-stakes routing: stake-tagging (content-based) + concern-protected paths (location-based) — claude_process uses both independently. Research on whether layered routing like this outperforms single-threshold routing for catching high-stakes changes.
- 73. [FROM REVIEW] Named anti-pattern vocabulary as a prevention mechanism — pitfall register has a section of NAMED failure modes (vocabulary only, not promoted rules). Research on whether naming failure mode patterns explicitly improves recognition and prevention vs just listing rules.
- 74. [FROM REVIEW] Phase input/output naming — every claude_process interview script ends with "You now know X. Move to Y." This is a named input/output contract for each phase. Research on whether explicit phase input/output contracts reduce errors at phase transitions.
- 75. [FROM REVIEW] Adaptive process ceremony scaling — claude_process right-sizes by criticality/lifespan. Research on adaptive process scaling more broadly: is interview-driven scaling better or worse than fixed-ceremony-with-escapes?
- 76. [FROM REVIEW] Prospective coordination cost estimation — claude_process coordination cost cap is retrospective (learn after the slice). Should kit-maker have a prospective estimate step (before dispatching, estimate coordination cost vs inline cost, pick inline if close)? Research on whether prospective estimation reduces coordination waste.
- 77. [USER PROBLEM → ANGLE] No-self-review / tunnel-vision problem for AI — the core failure: AI finishes a defined task and stops without stepping back to think "was that everything? what does this suggest?" This is documented as a general AI failure. Research: what structural triggers reliably produce post-task reflection in LLM agents? Is "review your work" in the prompt sufficient? Are there more reliable mechanisms?
- 78. [FROM DESIGN_LOG] Mandatory stepping-back mechanisms from other disciplines — medicine's cognitive forcing strategies, chess post-mortem analysis, military after-action reviews; how do these structure forced reflection? What's transferable to LLM agents?
- 79. [FROM DESIGN_LOG] Mandatory alternatives generation — evidence for/against forcing at least one alternative after any first-pass output; does it improve quality or just add overhead? When is it worth forcing vs letting the agent proceed?
- 80. [FROM DESIGN_LOG] General-class identification before specific-instance fixing — research on problem-solving that addresses root class vs symptom; evidence on which produces better outcomes; any AI-specific research on this?

### Goal-Directed Agency (from user insight — 2026-06-28)
- 81. [FROM USER] Goal internalization in LLM agents — what mechanisms enable goal frame (what does the goal require?) vs task frame (complete what was asked)? Research on agents that maintain persistent goal models and generate their own agenda.
- 82. [FROM USER] Autonomous agenda generation — how do long-horizon AI agents generate their own work queues without user direction? What research exists on self-directed task selection?
- 83. [FROM USER] Proactive obstacle identification — can agents reliably spot upcoming problems before the user sees them? Research on proactive vs reactive problem-handling in AI systems.
- 84. [FROM USER] Calibrated autonomy — the line between "proceed" and "ask" in agentic systems. Research on when AI initiative helps vs creates problems. What threshold produces best outcomes?
- 85. [FROM USER] Goal drift detection — agents getting absorbed in subproblems that aren't the actual bottleneck to the goal. Research on detecting and correcting goal drift.
- 86. [FROM USER] Human-AI collaboration allocation — optimal split: what AI should own vs what human should own in long-horizon tasks. Which decision types genuinely need human judgment?
- 87. [FROM USER] Initiative vs deference trade-off — why do instruction-following models underperform at goal-driven behavior? What training or prompting approaches close this gap?

### Human Cognitive Traits Worth Modeling (from user insight — 2026-06-28)
- 88. [FROM USER] Satisficing in AI agents — do LLMs naturally satisfice or over-optimize? Can the "good enough and move on" heuristic be reliably induced structurally? What does research say about when satisficing produces better outcomes than maximizing?
- 89. [FROM USER] Opportunity recognition vs problem finding — research on agents that identify positive opportunities alongside deficits. Does prompting for both explicitly improve output quality vs deficit-only prompting?
- 90. [FROM USER] Boredom/diminishing-returns signal as a useful heuristic — human boredom signals diminishing returns and redirects effort. What structural mechanisms in AI agents approximate this? Effort-fatigue modeling?
- 91. [FROM USER] Analogical reasoning and cross-domain transfer — how reliably do LLMs make productive analogical leaps from other domains? When does this help vs produce false analogies? Can it be triggered structurally?
- 92. [FROM USER] Aesthetic judgment in AI — "this feels off / this feels right" before being able to articulate why. Does this exist in LLMs at a reliable level? Can it be elicited as a quality signal?
- 93. [FROM USER] Context sensitivity in effort allocation — knowing when to go deep vs when a quick scan suffices. Research on matching effort to stakes in AI systems; any evidence on right-sizing approaches?
- 94. [FROM USER] ROI-based task prioritization — agents deciding which next step is highest value toward the goal, not just following a plan sequence. Research on dynamic prioritization in long-horizon AI tasks.
- 95. [FROM USER] Productive obstacle navigation vs reward hacking — the distinction between "find a legitimate alternative path to the goal" and "find a shortcut that satisfies the verifier." Research on agents that navigate obstacles productively without generalizing to corner-cutting. Does user-authorization of shortcuts prevent hacking generalization?
- 96. [FROM USER] Reward hacking generalization and contamination — how quickly do LLMs generalize from one permitted shortcut to always taking shortcuts? School of Reward Hacks (arXiv 2508.17511) found 1% contamination produces durable behavior — what is the mechanism and can it be countered?
- 97. [FROM USER] Tunnel vision in AI agents — why do agents keep applying the same mental model incrementally instead of recognizing they need a fundamentally different approach? What triggers reliable model-switching? (Related to same-mental-model halt but broader — when is the obstacle a signal to change approach vs navigate around?)

### Human Problem Solving — Replication and Improvement for AI Agents (from user — 2026-06-28)

The framing: humans solve problems in ways that are often more robust, flexible, and creative than AI agents. What specifically do humans do that AI doesn't? Which of those things can be structurally encoded? Which would actually IMPROVE on human behavior (since humans also have biases and limits)?

- 98. [FROM USER] Human problem-solving: comprehensive survey — divergent/convergent thinking, problem representation, incubation, insight, fixation and overcoming it, expert vs novice differences. What is the full taxonomy of human problem-solving strategies? Which map cleanly to AI agent behaviors? Which are fundamentally different?

- 99. [FROM USER] Metacognition in problem solving — humans monitor their own problem-solving in real time: "am I making progress?", "do I understand what I'm doing?", "should I try a different approach?" Metacognitive monitoring and control. Research on how to structurally encode this in AI agents — not as a rule ("check your work") but as a real-time monitoring mechanism.

- 100. [FROM USER] Problem representation and framing — how the initial framing of a problem constrains the solution space. Humans reframe problems; AI agents typically take the framing as given. Research on problem reframing: when is the user's problem statement wrong or incomplete? What mechanisms prompt reframing rather than solving the presented problem?

- 101. [FROM USER] Problem decomposition strategies — hierarchical decomposition (break into parts), sequential decomposition (first do X then Y), lateral decomposition (approach from a different angle). Research on how humans choose decomposition strategies and whether AI agents can be guided to use better decomposition.

- 102. [FROM USER] Expert intuition and recognition-primed decision making — Klein's RPD model: experts recognize situation types and retrieve solutions without deliberate analysis. What does this mean for kit design? Pattern libraries vs rule sets? Can AI agents be given "expert pattern recognition" through kit design?

- 103. [FROM USER] Creative problem solving methodologies — TRIZ (systematic innovation), design thinking (empathy → define → ideate → prototype → test), lateral thinking (de Bono), SCAMPER. Are any of these encodable as agent procedures? Which produce outputs AI agents can't reach through normal reasoning?

- 104. [FROM USER] Cognitive biases in problem solving — confirmation bias, anchoring, availability heuristic, functional fixedness, Einstellung effect (prior success blocks new solutions). Which of these affect AI agents in analogous ways? Which are WORSE in AI (anchoring seems much worse — arXiv 2511.05766)? Which are BETTER (no ego, no status quo preference)? What de-biasing techniques transfer?

- 105. [FROM USER] System 1 / System 2 duality in AI — Kahneman's fast intuitive vs slow analytical processing. Do LLMs have an analogous duality? When should a kit procedure force "slow down and reason carefully" vs allow fast pattern-matching? Research on chain-of-thought, extended thinking, and effort-scaling as approximations.

- 106. [FROM USER] Insight and "aha moment" in problem solving — sudden restructuring of a problem that produces a solution not reachable by incremental refinement. Can insight be triggered structurally in AI agents? Or does incremental refinement always dominate? Research on AI creativity and non-monotonic problem solving.

- 107. [FROM USER] Human problem-solving improvement over time — humans get better at problem types through deliberate practice, feedback loops, and reflection. What does this suggest for kit improvement mechanisms? The pitfall register + lessons loop is a rough analogy — is there research on more effective learning feedback loops for agents?

### Research Quality — Depth and Thoroughness Per Angle (from user — 2026-06-28)

The problem: an angle list ensures broad coverage, but doesn't ensure each angle is well-researched. A research agent could superficially skim an angle and produce shallow findings with high confidence. The saturation check catches "no new findings across angles" but not "each angle was researched poorly." These angles and the resulting procedure address per-angle quality.

- 108. [FROM USER] What does "thoroughly researched" look like for one angle? — Academic systematic review methodology: documented search strings, databases searched, inclusion/exclusion criteria, PRISMA flow diagrams. What elements of systematic review methodology are useful for AI agent research tasks? Which are overkill?

- 109. [FROM USER] Search strategy documentation and reproducibility — systematic reviews document their search strategy so findings can be reproduced and updated. Should kit research agents document their search strings? What level of search documentation is useful vs bureaucratic overhead?

- 110. [FROM USER] Research bias detection — confirmation bias in research: agent finds evidence supporting the hypothesis and stops. How do you structure research to actively seek contradicting evidence? What adversarial search strategies find what confirming searches miss?

- 111. [FROM USER] Source triangulation — a finding supported by only one source type (e.g., only GitHub repos, no academic evidence) is weaker than one appearing across multiple independent source types. When is one strong source sufficient? When must findings be triangulated? What source diversity is needed for high-confidence classification?

- 112. [FROM USER] Research depth signals — beyond "I found something", how do you know you understand it deeply enough to use it? Shallow research produces facts ("LLMs anchor on first hypothesis"). Deep research produces mechanisms ("anchoring occurs because autoregressive generation weights initial tokens more heavily in subsequent attention patterns"). Can the difference be structurally enforced?

- 113. [FROM USER] Deliberate search for null results and absence-of-evidence — "no research found on X" is itself a finding, but only if you deliberately searched. Systematically searching for null results (absence of research on an angle) is different from just not finding anything. How is this done in academic meta-analysis? What's the AI agent equivalent?

- 114. [FROM USER] Meta-research methodology — how to do research well, as a skill in itself. Information finding, query formulation, source evaluation, synthesis across conflicting sources. This is a foundational skill for Phase 3. What's the best current framework? (NOTE: partially overlaps with angles 12-14 which are earlier but less specific — cross-check and potentially merge or distinguish.)

- 162. [FROM USER] Research source selection and effective search strategy — which sources are most valuable for kit-maker research and how to search each effectively. User-named candidates: Anna's Archive (https://annas-archive.cc), GitHub, arXiv. Broader scope: Semantic Scholar, PubMed, Google Scholar, practitioner communities (Hacker News, Reddit, LessWrong, Substack). Questions: (a) which sources give the best signal-to-noise for AI agent research vs. academic research vs. grey literature? (b) what search operators, query patterns, and filters work best per source? (c) for sources that require navigation tricks (site-specific search, GitHub code search, Anna's Archive), what are the highest-leverage techniques? (d) how do you know when a source type is exhausted for a given angle? Priority: P1 — sourcing strategy is upstream of everything; a bad source selection silently degrades all downstream research quality without a visible failure signal.

Queries (pre-generated):
- "academic database comparison coverage recall precision systematic review Semantic Scholar PubMed Google Scholar empirical"
- "grey literature sources AI machine learning research arXiv preprint practitioner blog quality signal empirical"
- "GitHub code search operators effective research source practitioner knowledge AI agent prompt engineering"
- "HackerNews Reddit LessWrong practitioner knowledge quality signal research AI systems empirical"
- "Boolean search query formulation effectiveness academic database retrieval precision recall empirical study" (grey-lit)
- "search strategy source diversity coverage gap grey literature academic complementarity empirical"

**Status: COMPLETED 2026-06-30** — archive at `research-source-selection-and-effective-search-strategy-which-.md`. New angles surfaced:

- 163. [FROM ANGLE 162] Practitioner blog curation landscape for AI agent research — which specific practitioner blogs (Lilian Weng, Simon Willison, Chip Huyen, Eugene Yan, etc.) have the highest signal density for agent design topics; whether any aggregators (The Batch, Import AI) systematically track these. Priority: P1 — directly improves grey-lit search quality for all future waves.
  Queries: "Lilian Weng blog agent design LLM research quality signal", "Simon Willison AI tools practitioner blog signal frequency", "Chip Huyen ML systems blog technical depth empirical", "AI agent design newsletter aggregator Import AI The Batch quality ranking", "site:github.com awesome-llm-agents practitioner resource list maintained"

- 164. [FROM ANGLE 162] arXiv search API field-qualifier empirical testing — concrete precision/recall data comparing ti: vs abs: vs full-text arXiv queries for AI agent topics; whether category filtering (cs.AI OR cs.MA) quantifiably improves results vs keyword-only search. Priority: P2.
  Queries: "arXiv API search field qualifiers precision recall ti abs full-text empirical comparison", "arXiv category filtering cs.AI cs.MA precision recall agent topics", "arxiv search query strategy systematic literature review CS AI empirical"

- 165. [FROM ANGLE 162] Semantic Scholar API vs web UI recall parity — whether the Semantic Scholar API returns the same result set as the web interface, or whether API access bypasses influence-based re-ranking (which would make API more useful for exhaustive recall). Priority: P2.
  Queries: "Semantic Scholar API web UI result parity recall difference empirical", "Semantic Scholar API documentation search endpoint ranking algorithm", "Semantic Scholar influence citation re-ranking API bypass developer forum"

- 166. [FROM USER 2026-06-30] Premature saturation failure modes and structural mitigations — how do systematic reviewers validate they've achieved true coverage (conceptual exhaustion) rather than reachable saturation (vocabulary cluster exhausted)? What query expansion techniques, cross-disciplinary vocabulary mapping, and saturation validation methods have empirical evidence for improving recall? What does premature saturation look like in real systematic reviews, and what structural checks catch it?
  Priority: P1 — affects every existing archive and every future research wave. If our current saturation calls are wrong, synthesis produces false confidence maps.
  Key sub-questions: (a) PICO/SPIDER/SPIDER structured concept decomposition vs free-text — empirical recall improvement? (b) Forward/backward citation snowballing — how much additional coverage does it add per angle? (c) Query vocabulary expansion via thesaurus/synonym mapping — measurable precision/recall tradeoff data? (d) How do researchers identify when they've searched only one vocabulary cluster for a multi-vocabulary phenomenon? (e) Minimum query count before saturation can be responsibly declared — is there empirical guidance?
  Queries:
  - "premature saturation systematic review false convergence incomplete coverage empirical evidence"
  - "query expansion thesaurus MeSH synonym recall improvement systematic literature search empirical"
  - "snowballing citation tracking forward backward recall improvement systematic review empirical"
  - "PICO SPIDER concept decomposition structured search recall precision improvement empirical"
  - "search saturation stopping criterion qualitative research grounded theory theoretical saturation empirical"
  - "cross-disciplinary vocabulary mapping same phenomenon different field terminology missed literature" (grey-lit, adversarial framing of the concept-frame-lock problem)

### Direction-Level Strategic Alternatives (from user — 2026-06-29)

- 125. [FROM USER] Direction-level strategic alternatives in AI agents — how do you build a mechanism that periodically asks "are we pursuing the right overall direction?" rather than just "is this the best next step in the current direction?" Research on strategic reframing in problem solving: when is it better to abandon a direction entirely vs iterate within it? How do human experts recognize that a direction is wrong, not just that the current approach is suboptimal? What structural triggers reliably produce direction-level reconsideration in AI agents?

Queries:
- "strategic reframing problem solving direction change expert recognition empirical"
- "metacognitive direction monitoring high-level goal approach reconsideration research"
- "when to pivot vs iterate decision making empirical psychology research"
- "direction blindness local optimum global optimum trap AI agent research"
- "strategic alternatives generation AI agent direction-level vs task-level reconsideration"

Priority: P1 — this is a structural absence in the kit-maker's current procedures (mandatory-reflection.md question 9 was just added as a result of this gap firing). Synthesis target: needed.

- 167. [FROM PROCESS AUDIT 2026-06-30] Evidence synthesis procedure validation — how do systematic review synthesizers validate that their confidence maps are reliable and reproducible? What are the known failure modes of evidence synthesis (grouping errors, contradiction misclassification, confidence miscalibration)? Are there empirical studies comparing different synthesis structures against ground-truth outcomes? What does GRADE methodology say about validating the synthesis step itself?
  Priority: P1 — synthesis is the step that produces the confidence map driving all kit decisions. It is ❌ UNRESEARCHED. If synthesis produces unreliable confidence classifications, every downstream kit decision built on it is compromised. This is the highest-risk unvalidated step in the entire process.
  Queries:
  - "evidence synthesis reliability reproducibility systematic review confidence map empirical validation"
  - "GRADE methodology confidence classification inter-rater reliability synthesis empirical"
  - "evidence synthesis failure modes grouping errors confidence miscalibration systematic review"
  - "umbrella review synthesis of syntheses methodology validation empirical"
  - "meta-synthesis qualitative confidence calibration inter-rater agreement empirical study"
  - "evidence-to-recommendation translation reliability empirical health technology assessment" (adversarial: when do confidence maps fail to produce correct recommendations?)

- 168. [FROM PROCESS AUDIT 2026-06-30] Structured reflection quality — what distinguishes genuine reflection that catches missed problems from performative reflection that satisfies a checklist? Are there empirical designs for reflection prompts that are harder to game with superficially-correct answers? Research from medical education (structured debriefs), design reviews, incident post-mortems, and organizational learning.
  Priority: P2 — mandatory-reflection.md measures effort (long answers required) not quality. Different agents could write detailed-sounding answers to the same questions and one misses the key gap while the other catches it. The procedure cannot distinguish these outcomes.
  Queries:
  - "structured reflection quality cognitive depth empirical measurement debriefing"
  - "post-mortem review effectiveness incident analysis learning outcome empirical"
  - "reflection prompts design medical education genuine vs surface learning empirical"
  - "after-action review structured debriefing quality factors military empirical"
  - "checkback reflection structured quality performance improvement empirical organizational learning"
  - "site:arxiv.org structured reflection LLM agent quality self-evaluation" (grey-lit)

---

### From Adversarial Test (2026-06-29 prototype run)

New angles and alternative directions surfaced by adversarial review of the current kit prototype. These are research questions and design pivots, not fixes — the kit is a prototype and these inform future iterations.

**Research angles:**

- 126. [FROM ADVERSARIAL] Minimum viable claim count before synthesis is useful — at what point does a research archive have enough claims that synthesis produces actionable output rather than noise? The "fewer than 15 claims" heuristic in research-synthesis.md is ungrounded — what evidence exists on minimum evidence thresholds for evidence synthesis in systematic review?

Queries:
- "minimum evidence threshold evidence synthesis systematic review adequate sample"
- "evidence base size synthesis reliability meta-analysis minimum studies"
- "sparse evidence synthesis premature conclusion risk threshold empirical"
- "when is there enough evidence to synthesize LLM research claim threshold"
- "adequacy of evidence synthesis quality minimum viable research base"

- 127. [FROM ADVERSARIAL] Multi-session pipeline resume path — the kit assumes one agent runs all 8 phases in one session. How do you design a multi-phase process so an agent can reliably re-enter mid-pipeline after context loss, session reset, or interruption? What structured handoff mechanisms preserve sufficient context for reliable re-entry?

Queries:
- "multi-session AI agent pipeline resume context handoff mechanism design"
- "Factory.ai session handoff structured files fidelity loss summarization empirical"
- "agentic pipeline interruption recovery re-entry mechanism research"
- "context persistence multi-step AI agent structured handoff design patterns"
- "session loss recovery pipeline state machine re-entry empirical"

- 128. [FROM ADVERSARIAL] Claim key standardization across parallel research agents — when parallel agents independently name findings, semantic duplicates get different keys and saturation detection silently fails. What key standardization approaches (shared ontology, post-hoc semantic clustering, normalized slug generation) reduce this problem?

Queries:
- "knowledge graph entity resolution entity linking parallel extraction empirical"
- "duplicate claim detection semantic similarity research extraction NLP"
- "parallel information extraction deduplication entity resolution empirical"
- "claim normalization key standardization information extraction consistency"
- "semantic deduplication research findings parallel agents NLP empirical"

- 129. [FROM ADVERSARIAL] Riskiest-first vs dependency-first ordering conflict — when file A logically depends on file B being correct first, but file A is higher-stakes, which ordering wins? Under what conditions does dependency ordering override riskiest-first? Any research on build order optimization in software or document generation?

Queries:
- "build order optimization dependency graph risk-first conflict software empirical"
- "task ordering dependency vs priority conflict resolution empirical"
- "critical path dependency ordering risk priority trade-off empirical project"
- "file generation ordering dependency risk trade-off AI agent empirical"
- "dependency-first vs risk-first ordering quality outcome empirical comparison"

- 130. [FROM ADVERSARIAL] Research archive maintenance and versioning over time — a kit used actively in an evolving domain will have an aging archive. When does research become stale enough to require a re-run? What versioning and expiry policies exist for evidence bases in maintained systematic reviews?

Queries:
- "systematic review update frequency evidence aging staleness empirical"
- "living systematic review maintenance update policy evidence versioning"
- "research archive update trigger evidence expiry policy empirical"
- "when to update systematic review staleness signal evidence decay"
- "evidence base maintenance versioning policy AI kit domain drift"

**Alternative directions worth exploring (design pivots, not incremental improvements):**

- 131. [FROM ADVERSARIAL] Constraint-driven kit design — start by generating and stress-testing done-criteria before any research; research fills gaps discovered by constraint stress-testing rather than preceding it. The claim: most kit failures come from underspecified done-criteria and ambiguous rules, not from lack of domain knowledge. Research that validates this assumption would justify restructuring Phase 2/3/4 order.

Queries:
- "constraint-driven design upfront specification stress-test quality outcome empirical"
- "done-criteria specification quality kit design outcomes empirical"
- "requirements stress-testing adversarial specification review quality empirical"
- "specification-first vs research-first design quality empirical comparison"
- "constraint specification quality kit rules empirical design outcome"

- 132. [FROM ADVERSARIAL] Example-inversion approach — collect labeled examples of excellent and terrible domain outputs, cluster what separates them, extract rules by inversion from failure cases. This replaces the research-synthesis pipeline with ground-truth labeled data. Evidence on whether this produces better rules than literature synthesis?

Queries:
- "example-based rule extraction inductive learning labeled examples quality empirical"
- "failure case analysis rule generation inversion design empirical"
- "contrastive examples rule induction good vs bad labeled outcomes empirical"
- "ground truth examples vs literature synthesis rule quality empirical"
- "example-driven specification expert knowledge extraction empirical comparison"

- 133. [FROM ADVERSARIAL] Executable specification — kit procedures as structured schemas with programmatic validation rather than markdown interpreted by LLM self-assessment. Evidence on whether deterministic structural checking (file exists, field non-empty, claim count above threshold) produces better outcomes than LLM self-review for structural properties?

Queries:
- "programmatic specification validation vs LLM self-assessment quality empirical"
- "schema-driven process validation deterministic vs LLM empirical"
- "executable specification structured validation AI agent quality empirical"
- "formal specification process validation programmatic LLM hybrid empirical"
- "structured schema validation AI workflow quality outcome empirical"

- 134. [FROM ADVERSARIAL] Domain-agnostic skeleton with expert interview instead of web research — replace Phase 3/4/5 with a structured interview that elicits what the domain expert already knows, classified into evidence tiers. When is expert tacit knowledge superior to web research? When is it worse? What interview structure reliably surfaces tacit knowledge in classifications usable for kit design?

Queries:
- "tacit knowledge elicitation structured interview expert knowledge extraction empirical"
- "knowledge engineering expert interview vs literature research quality empirical"
- "domain expert knowledge elicitation structured technique empirical comparison"
- "tacit knowledge explicit classification interview technique empirical"
- "expert interview vs web research domain knowledge quality outcome empirical"

Priority: angles 126-130 are P2. Angles 131-134 (alternative directions) are P3 — evaluate after P1/P2 synthesis determines whether the current direction is producing value.

---

### Structural Alternatives (from advisor review — 2026-06-29)

These are design pivots, not incremental improvements. Each reverses a current assumption. They need research AND a design decision before any changes are made to the kit.

- 121. [STRUCTURAL] Examples vs rules as the primary kit artifact — angle 32 covers research; this angle covers the kit-maker design implication: should generated kits lead with worked demonstrations of the desired behavior rather than rules? What is the split between examples and rules in effective instruction sets? Is there evidence that example-first kits outperform rule-first kits?

Queries:
- "few-shot examples vs rules instruction following LLM empirical comparison"
- "meta-analysis examples vs rules LLM behavioral guidance compliance"
- "worked examples rules LLM instruction following failure modes"
- "site:github.com CLAUDE.md examples behavioral demonstrations vs rules kit"
- "example-first instruction design AI agent compliance measurement quantitative"

- 122. [STRUCTURAL] Kit complexity threshold — ENTRYPOINT length and agent comprehension — is the kit-maker process too complex to run reliably as written? Research on instruction length, rule count, and comprehension failure in LLM agents. What's the maximum viable process length? Is a QUICK-START entry point needed?

Queries:
- "instruction length LLM comprehension failure threshold empirical study"
- "system prompt length performance degradation 200 lines threshold LLM"
- "cognitive load instruction complexity LLM agent performance measurement"
- "process length agent reliability failure rate empirical benchmark"
- "minimal viable process AI agent instruction complexity trade-off"

- 123. [STRUCTURAL] Domain framing failure — adversarial challenge on user's Phase 2 problem statement — how often is the initial domain framing wrong, and what mechanisms prompt productive reframing rather than solving the presented problem? What questions challenge framing without alienating the user?

Queries:
- "problem reframing wicked problems design thinking framing failure empirical"
- "user requirement misspecification design failure reframing mechanism research"
- "adversarial requirements challenge problem statement AI assistant refusal framing"
- "domain framing errors kit design wrong problem specification failure modes"
- "problem statement adversarial challenge productive reframing without conflict"

- 124. [STRUCTURAL] Rapid iteration vs thorough research — does "build thin, run once, learn from failures" reach kit quality faster than "research deeply before building"? Evidence on speed-to-quality trade-offs in iterative vs upfront design approaches.

Queries:
- "iterative design vs upfront design speed to quality empirical software"
- "fail fast iterate rapid prototyping vs thorough planning quality outcomes"
- "lean startup MVP vs waterfall quality evidence empirical comparison"
- "rapid iteration AI agent kit quality research upfront vs incremental"
- "design thoroughness vs speed quality outcomes agile empirical"

Priority: P2 — these are design pivots that require Wave 1 synthesis findings before making architectural changes. Exception: angle 122 (complexity threshold) — if research finds the current kit is already over the threshold, this would require an immediate simplification pass before Wave 2 synthesis.

---

### Work Direction Saturation and ROI Monitoring (from user — 2026-06-29)

- 120. [FROM USER] Diminishing returns detection in AI agent work — how do you recognize when a line of work is producing smaller and smaller improvements and what triggers switching to a higher-value direction? What structural mechanisms prevent an agent from continuing to micro-optimize a saturated area instead of stepping back? Connects to: angle 88 (satisficing), angle 90 (boredom/diminishing-returns signal), angle 85 (goal drift detection) — but this is more specific: detecting saturation in a WORK DIRECTION, not just in research findings.

Queries (pre-generated):
- "diminishing returns task switching cognitive science when to stop iterating decision research"
- "meta-cognitive monitoring work direction saturation stopping rule problem solving research"
- "goal drift detection AI agent subproblem absorption higher-level goal monitoring"
- "satisficing stopping rule optimal stopping sequential decision empirical psychology"
- "AI agent work allocation ROI prioritization dynamic task switching long-horizon empirical"

Priority: P1 — this applies to the kit-maker agent's own behavior at every session, not just research. Synthesis target: needed before Wave 2 (the kit-maker must know when to stop iterating Wave 2 prep and switch to running the wave).

---

### Goal-Directed Advisor Behavior in Generated Kits (from user — 2026-06-29)

**Context:** The kit-maker itself operates with goal-directed advisor behavior (CLAUDE.md in project root). The question is: how do you bake this into every kit the kit-maker produces, reliably, across different domains?

- 119. [FROM USER] Goal-directed advisor behavior in generated kits — what is the minimal file set and wording that reliably produces advisor behavior (proactive next-step generation, problem surfacing, agenda-setting) in a domain-specific kit? What structural elements transfer across domains (writing kits, research kits, code review kits) and what must be domain-specific? How does the behavioral contract wording differ when the "goal" varies? Any evidence on what makes behavioral contracts decay-resistant across sessions?

Queries (pre-generated):
- "CLAUDE.md system prompt behavioral contract always-on rules agent advisor proactive goal-directed"
- "LLM agent proactive problem identification goal frame vs task frame instruction design"
- "meta-level behavioral instructions AI agent session persistence cross-session behavioral decay"
- "advisor vs executor mode LLM agent instruction design goal-directed continuation practitioner"
- "minimal instruction set goal-directed AI agent behavior empirical compliance measurement"

---

### Direction Drift in Multi-Session Agent Work (from session — 2026-06-29)

- 135. [FROM SESSION FAILURE] Direction-drift in multi-session agent work — the trajectory signal catches when individual actions get smaller within a session. It does NOT catch when consecutive sessions or logical units all go the same direction without the direction being questioned. This session demonstrated the failure: multiple sessions of research prep (angles, queries, synthesis targets, launch instructions) with no cross-unit direction check. What mechanisms in human project management or AI agent design prevent this? Does "exploration vs exploitation" switching research apply here? What's the right granularity for a direction check (per task, per session, per N logical units)?

Queries:
- "exploration exploitation switching multi-session project momentum direction change cognitive empirical"
- "project direction revalidation cadence strategy review frequency outcome quality empirical"
- "meta-cognitive direction monitoring multi-step problem solving when to question approach empirical"
- "AI agent long-horizon direction drift higher-level goal monitoring session boundary empirical"
- "momentum bias cognitive perseveration task switching cost direction change stopping rule empirical"

Priority: P1 — this is a current behavioral failure in the kit-maker itself. Fix already applied to satisficing-and-roi.md and CLAUDE.md (direction-drift check section). This angle validates whether those fixes are well-calibrated or need revision.

---

### Agent Quality Mechanisms — Reviewing, Iteration, Personas, Skepticism, Alternatives, Brainstorming (from user — 2026-06-29)

These angles address structural mechanisms for improving agent output quality: how agents review work, iterate productively, take multiple perspectives, stay skeptical, generate and genuinely select among alternatives, and brainstorm divergently. Priority: P2 — these improve the kit-maker's core procedures (alternatives-generation, verify_prompt, CLAUDE.md rules).

- 136. [FROM USER] Agent self-review and critique methodology — what structural approaches make an agent's self-review genuinely critical rather than rubber-stamping? Evidence on single-pass vs multi-pass self-review, what triggers honest evaluation of own output, how to prevent the agent from confirming its first-pass output. Connection to angle 69 (AI self-review absence) and 77 (post-task reflection). Key question: does structural self-review (checklist, step, named pass) outperform free-form "review your output"? What prevents sycophancy in self-review?

Queries:
- "LLM self-review self-critique output quality improvement structured vs freeform empirical"
- "AI agent self-evaluation honest critique sycophancy prevention mechanism empirical"
- "chain-of-thought self-refinement iterative revision quality LLM empirical study"
- "self-critique structured pass improvement quality LLM agent empirical comparison"
- "review own output LLM AI agent honest evaluation prevention overcorrection mechanism"

- 137. [FROM USER] Productive iteration loops — when does agent iteration produce genuine quality improvement vs local minima (surface rewording, incremental refinement that doesn't change substance)? Evidence on: how many rounds of revision are productive, what triggers a fundamentally different approach vs a surface revision, how to detect when iteration has saturated. Connection to angle 66 (termination contracts) and angle 120 (diminishing returns). Key question: what is the structural difference between an agent "iterating" and an agent "thrashing"?

Queries:
- "iterative refinement LLM quality improvement convergence local minima empirical"
- "AI agent revision loop productive improvement stopping criterion empirical"
- "LLM revision rounds diminishing returns quality plateau measurement empirical"
- "iterative improvement vs fundamental redesign when to switch approach agent empirical"
- "revision iteration quality gain curve LLM agent empirical study measurement"

- 138. [FROM USER] Persona-based prompting for cognitive diversity — does assigning a cognitive role or perspective to an agent (skeptic, domain expert, adversary, naive reader) reliably change output quality beyond style changes? Evidence: which personas produce structurally different outputs vs. just different tone? When does "think like a security engineer" outperform "check for security issues"? What is the mechanism when persona prompting works? Does it stack with chain-of-thought?

Queries:
- "persona prompting LLM output quality role assignment empirical comparison study"
- "cognitive role assignment adversarial persona skeptic expert LLM performance empirical"
- "role-playing LLM diverse perspective generation quality measurement empirical"
- "persona vs direct instruction LLM behavioral guidance output quality empirical"
- "multi-persona prompting cognitive diversity output LLM empirical benchmark"

- 139. [FROM USER] Calibrated skepticism in AI agents — how do you build structural skepticism into an agent without causing calibration failure in either direction: overcautious (doubts everything, won't commit to conclusions) vs undercautious (skepticism is a checkbox, no real effect)? Evidence on: red-teaming methodology, pre-mortem technique, devil's advocate assignment. What conditions make agent skepticism produce useful output vs. paralysis or refusal? How is skepticism calibrated without feedback loops?

Queries:
- "red teaming AI agent skepticism structured critique mechanism empirical quality"
- "pre-mortem technique adversarial review quality improvement empirical study"
- "devil's advocate assignment AI agent honest critique overcaution calibration empirical"
- "skeptical agent design overcorrection refusal undercorrection checklist mechanism empirical"
- "adversarial critique structured skepticism LLM output quality calibration empirical"

- 140. [FROM USER] Strawmanning vs steelmanning in agent reasoning — strawmanning (building the weakest version of an alternative to dismiss it) is the documented failure mode in alternatives-generation. Steelmanning (building the strongest version before evaluating) is the structural countermeasure. Evidence: does requiring agents to steelman alternatives before rejecting them change which alternative is selected? Does explicit steelmanning instruction produce structurally different outputs vs implicit "evaluate alternatives"? What does a strawman alternative look like as a detectable pattern (features that identify it)?

Queries:
- "steelmanning prompt agent alternatives generation strongest case empirical quality"
- "strawman fallacy AI reasoning detection adversarial argument alternative quality"
- "steel man argument LLM output quality honest evaluation alternative approaches empirical"
- "adversarial alternative construction agent best case before rejection quality empirical"
- "steelman instruction alternatives selection quality LLM empirical study benchmark"

- 141. [FROM USER] Alternatives generation where agent actually selects the better one — the documented failure mode is performative alternatives (generate alternatives, immediately endorse the first approach without genuine comparison). Evidence on: what structures force genuine evaluation and selection among alternatives, when agents select the first option and why, how to detect that an "alternatives" step was performative rather than exploratory. Connection to angle 79 (mandatory alternatives generation) and angle 70 (timing of alternatives generation). Key question: what makes alternative selection genuine rather than anchored-to-original?

Queries:
- "LLM alternatives generation genuine selection vs anchoring empirical study"
- "agent first-option bias alternatives exploration selection quality measurement empirical"
- "alternatives generation commitment mechanism LLM quality exploration exploitation empirical"
- "AI agent option selection genuine comparison vs confirmation bias empirical"
- "multiple alternatives genuine evaluation selection LLM instruction design empirical"

- 142. [FROM USER] Brainstorming methodology for LLM agents — which structured brainstorming techniques (SCAMPER, six thinking hats, lateral thinking, random stimuli, constraint injection, TRIZ) transfer to LLM contexts? LLMs tend to stay in semantically adjacent space — does forcing constraint-based divergence ("generate an idea that would work if X were impossible") produce meaningfully different outputs? Evidence on: LLM ideation diversity measurement, what makes LLM brainstorming fail (semantic locality, first-token anchoring), what interventions increase idea diversity and novelty.

Queries:
- "SCAMPER lateral thinking LLM brainstorming divergent thinking technique effectiveness empirical"
- "constraint injection creativity LLM agent idea diversity novelty measurement empirical"
- "semantic locality LLM brainstorming diversity failure divergent thinking empirical"
- "six thinking hats structured brainstorming LLM agent effectiveness empirical study"
- "idea diversity novelty LLM generation measurement prompt intervention empirical benchmark"

Priority: P2 — these improve the alternatives-generation procedure, verify_prompt, and CLAUDE.md. Angles 140-141 are most directly tied to the current alternatives-generation procedure fix. Angles 136-137 are tied to the reviewing/self-iteration mechanisms.

---

### Problem-Solving Mechanisms for Kit Design — From Taxonomy Gap Analysis (2026-06-29)

13 angles identified by comparing the full problem-solving taxonomy against existing angle coverage. P1 angles fix known weaknesses in current kit procedures; P2 are structural improvements.

#### P1 — Fix known weaknesses in current kit procedures

- 143. [FROM TAXONOMY] Criteria definition before evaluation — defining what "good" means explicitly before generating or evaluating alternatives. The failure mode: the agent uses "I already chose this" as the implicit criterion, which explains weak alternatives-generation outcomes. Research: does forcing explicit criteria definition before alternatives generation change which option is selected? What structural prompts reliably elicit criteria rather than post-hoc rationalization? How do evaluation criteria interact with anchoring bias?

Queries:
- "criteria definition before evaluation decision quality improvement empirical study"
- "pre-commitment criteria evaluation anchoring bias prevention decision making empirical"
- "explicit criteria specification alternatives evaluation LLM quality outcome empirical"
- "decision criteria definition post-hoc rationalization prevention empirical psychology"
- "evaluation criteria upfront specification AI agent quality selection improvement empirical"

- 144. [FROM TAXONOMY] Second-order thinking — consequences of consequences — "if we add this rule, what downstream behaviors does it produce?" The kit has no mechanism that asks: does adding procedure X create unintended behavior in scenarios not yet tested? Relevant to every Phase 6 draft and to CLAUDE.md rule additions. Research: what structural triggers reliably produce second-order consequence analysis in agents? Does explicit "what happens next, and then what?" prompting change output quality? Any evidence on consequence-chain prompting in LLM agents?

Queries:
- "second order thinking consequences agent reasoning quality empirical study"
- "downstream consequence analysis LLM agent instruction rule addition unintended effects empirical"
- "consequence chain prompting second order effects AI reasoning quality empirical"
- "rule interaction unintended consequences AI agent behavior empirical measurement"
- "systems thinking second order effects prompt engineering quality empirical study"

- 145. [FROM TAXONOMY] Backward chaining from goal state — starting from "what does success look like?" and reasoning backwards through what must have been true one step prior. Different from forward reasoning: you discover necessary conditions for success rather than plausible next steps from the current state. The backward trace in working-kit.md is an intuitive version, not grounded in research. Evidence: when does backward chaining outperform forward chaining? What classes of problem does it find solutions for that forward reasoning misses? How reliably can LLM agents be directed to use it?

Queries:
- "backward chaining goal-directed reasoning forward chaining comparison quality empirical"
- "working backwards from goal problem solving strategy effectiveness empirical psychology"
- "means-ends analysis backward induction problem solving quality comparison empirical"
- "backward reasoning LLM agent planning quality forward vs backward empirical"
- "goal-state backward inference necessary conditions problem solving empirical study"

- 146. [FROM TAXONOMY] Double-loop learning — questioning the governing structure, not just fixing execution. Single-loop: "this procedure failed; fix the procedure." Double-loop: "this procedure failed; should this procedure exist?" The kit has a pitfall register and lessons loop (single-loop mechanisms). No mechanism periodically asks whether an entire phase or procedure is the wrong thing to be doing. Research on Argyris double-loop learning: what conditions produce it rather than single-loop? What structural triggers prompt assumption-level questioning rather than execution-level fixing? Evidence on double-loop learning in AI-assisted iterative work.

Queries:
- "double loop learning Argyris governing assumptions single loop comparison empirical"
- "assumption questioning vs execution fixing learning organizational empirical study"
- "meta-level learning AI agent process improvement governing structure empirical"
- "second order change process improvement assumption questioning empirical evidence"
- "double loop feedback organizational learning AI agent workflow empirical"

- 147. [FROM TAXONOMY] Issue tree and MECE decomposition — mutually exclusive, collectively exhaustive decomposition of a problem space. The six-dimension pass in the code review kit and the completeness auditor are informal MECE applications — designed by intuition. A principled MECE decomposition would guarantee no gaps and no double-counting in coverage. Research: when does MECE decomposition improve coverage completeness in systematic reviews and audits? How reliably can LLM agents apply MECE decomposition? What failure modes does MECE catch that intuitive checklists miss? Does over-rigid MECE structure create its own blind spots?

Queries:
- "MECE decomposition mutually exclusive collectively exhaustive coverage completeness empirical"
- "issue tree problem decomposition completeness quality improvement empirical study"
- "structured decomposition coverage gaps checklists MECE vs intuitive quality empirical"
- "McKinsey issue tree MECE framework completeness audit quality empirical evidence"
- "LLM agent MECE decomposition structured coverage quality empirical benchmark"

- 148. [FROM TAXONOMY] Rubber duck debugging — articulation as a forcing function for surfacing hidden assumptions. Explaining a solution to an external listener (even inanimate) forces implicit assumptions to become explicit; errors invisible during silent evaluation become visible during verbalization. For kit-making: could "explain this procedure step to a hypothetical junior user before finalizing" be a procedure gate that reliably catches ambiguity? Research: does articulation-before-commitment reduce errors compared to silent evaluation? Is the effect specific to verbalization or does writing produce the same forcing function?

Queries:
- "rubber duck debugging articulation assumption surfacing empirical software engineering"
- "explaining reasoning before committing implicit assumption surfacing empirical study"
- "verbalization problem solving error reduction implicit assumption explicit empirical"
- "self-explanation effect learning problem solving quality improvement empirical"
- "articulation forcing function hidden assumption surfacing LLM agent quality empirical"

---

#### P2 — Structural improvements

- 149. [FROM TAXONOMY] Reversibility and option value under uncertainty — when uncertain between options, prefer the one that leaves more choices open. For kit design: which Phase 6 decisions are hard to undo after the kit ships? The kit has no mechanism that asks "how reversible is this decision?" before committing. Research on option value and reversibility in decision making under uncertainty (real options theory, satisficing under uncertainty). Does explicit reversibility consideration change which option is selected? What procedure trigger reliably elicits it?

Queries:
- "reversibility option value decision making uncertainty preference empirical psychology"
- "real options theory decision reversibility preference empirical evidence"
- "prefer reversible decisions uncertainty risk management empirical study"
- "option preservation flexibility under uncertainty decision making quality empirical"
- "reversibility consideration LLM agent design decision quality empirical"

- 150. [FROM TAXONOMY] Confidence calibration — distinguishing felt certainty from evidenced certainty. For kit-making: when the synthesis confidence map classifies a finding as HIGH vs. CONSENSUS vs. CONTESTED, how well-calibrated is that classification? Do LLM agents systematically overclaim confidence on practitioner-consensus findings that are actually contested? Research on LLM overconfidence: is there a systematic direction (overconfident vs. underconfident)? Does the evidence classification tier (empirical/consensus/anecdote) track actual reliability? What calibration mechanisms (uncertainty quantification, explicit confidence labeling) reduce overconfidence in synthesis?

Queries:
- "LLM confidence calibration overconfidence systematic bias empirical measurement"
- "AI agent certainty estimation accuracy calibration evidence quality empirical"
- "overconfidence language models expressed certainty reliability empirical study"
- "confidence calibration uncertainty quantification LLM quality improvement empirical"
- "synthesis confidence calibration empirical consensus contested classification accuracy empirical"

- 151. [FROM TAXONOMY] Chunking for cognitive management of rule sets — experts perceive meaningful groups where novices see isolated items. For kit-making: how should kit procedures be chunked and grouped so an agent processes them as meaningful units rather than isolated rules? The 200-line limit finding (angle 18/19) gives a length threshold but not a structure principle. Research: does grouping related rules into named chunks extend the effective rule count beyond the threshold? What chunk sizes and grouping principles produce most reliable rule compliance in LLM agents?

Queries:
- "chunking cognitive load rule sets LLM instruction compliance grouping empirical"
- "rule grouping named categories LLM compliance instruction following empirical study"
- "information chunking working memory capacity AI agent instruction processing empirical"
- "procedural instruction grouping agent comprehension compliance quality empirical benchmark"
- "chunking principle rule set design LLM behavioral guidance effectiveness empirical"

- 152. [FROM TAXONOMY] Productive failure — designing for useful failure rather than failure avoidance. Failing in an informative way generates better learning and better next attempts than either avoiding failure or failing uninformatively. For kit-making: should test input design be optimized for informative failure rather than pass/fail evaluation? What does a maximally informative failure look like for a kit procedure? Research on productive failure (Kapur), desirable difficulties, and failure-as-information in learning and system design. Evidence on whether failure-optimized testing produces better improvements than success-optimized testing.

Queries:
- "productive failure Kapur learning design deliberate failure informative empirical"
- "failure optimized testing system improvement informative failure design empirical"
- "desirable difficulties learning failure design quality improvement empirical study"
- "failure as information system design AI testing improvement empirical evidence"
- "deliberate error injection testing quality improvement informative failure LLM empirical"

- 153. [FROM TAXONOMY] Version comparison — explicit before/after evaluation to detect whether iteration improved output or just changed it. "Change theater": iterations that produce different output but not better output, indistinguishable from genuine improvement without explicit comparison. Currently no kit procedure asks "compare current version against previous version on specific criteria — did it get better?" Relevant to Phase 7 fix loop and every procedure edit. Research: does explicit version comparison reduce change theater? What comparison criteria reliably distinguish improvement from change? How do LLM agents perform on before/after comparative evaluation of their own output?

Queries:
- "version comparison before after evaluation quality improvement detection empirical"
- "change detection improvement vs modification explicit comparison quality empirical study"
- "iterative refinement quality gain detection before after comparison LLM empirical"
- "change theater detection genuine improvement evaluation mechanism empirical"
- "comparative self-evaluation LLM agent before after version quality empirical benchmark"

- 154. [FROM TAXONOMY] Constraint relaxation — temporarily removing a constraint to open solution space, then deciding whether the constraint was load-bearing or habitual. "What would the procedure look like if we didn't require a separate verify pass?" Forces visibility on which constraints are genuine (the answer is still worse without it) vs. inherited without justification (the answer is better or equal). Could be a specific technique within alternatives-generation for generating structurally different alternatives. Research: does explicit constraint relaxation as a technique produce qualitatively different alternatives compared to open-ended "generate an alternative"? What makes a constraint load-bearing vs. habitual in AI procedure design?

Queries:
- "constraint relaxation problem solving solution space expansion technique empirical"
- "assumption relaxation design alternatives generation quality improvement empirical study"
- "remove constraints temporarily solution space AI agent design quality empirical"
- "load-bearing vs habitual constraint identification procedure design empirical"
- "constraint relaxation technique alternatives generation divergent thinking empirical comparison"

- 155. [FROM TAXONOMY] Non-monotonic solving — paths that go through wrong intermediate states. Sometimes the path to a good solution requires producing a deliberately wrong answer first, then critiquing it. For kit-making: does producing a deliberately flawed draft and then critiquing it reach a better final result than attempting a correct draft directly? Related to productive failure (152) but different mechanism: this is intentional wrong intermediates as a search strategy, not failure as information. Research: adversarial self-drafting, inversion drafting, intentionally-bad first draft as a technique. Evidence on whether non-monotonic approaches outperform monotonic approaches on quality tasks.

Queries:
- "non-monotonic problem solving wrong intermediate state better solution empirical"
- "adversarial draft inversion deliberate bad first draft quality improvement empirical"
- "intentionally wrong intermediate state reasoning LLM quality output empirical study"
- "red team own work deliberate flaw draft critique improvement empirical evidence"
- "inversion drafting technique quality improvement LLM agent empirical benchmark"

Priority: 143-148 are P1 (fix known kit procedure weaknesses); 149-155 are P2 (structural improvements). All 13 queued for Wave 2 dispatch alongside angles 136-142.

---

### P3 Problem-Solving Mechanisms — From Taxonomy Gap Analysis (2026-06-29)

Six additional mechanisms from the problem-solving taxonomy that weren't captured by P1/P2 angles. Priority P3 — enhancements that build on P1/P2 synthesis results. Run after P2 synthesis is complete.

- 156. [FROM TAXONOMY P3] Scenario planning and pre-mortem analysis — "what would the future look like if this decision was wrong?" Pre-mortem (imagine it failed, work backward to why) applied to kit Phase 5 planning. When does pre-mortem change which plan is selected? Evidence on structured pre-mortem vs. unstructured risk identification for plan quality. Relevant to Phase 5 "strongest unsupported assumption" field — is asking one assumption enough, or does structured pre-mortem surface more?

Queries:
- "pre-mortem prospective hindsight failure analysis plan quality empirical psychology"
- "scenario planning decision quality improvement pre-mortem structured anticipation empirical"
- "Klein pre-mortem technique plan quality failure prediction empirical study"
- "prospective failure analysis structured vs unstructured risk identification quality empirical"
- "scenario planning AI agent decision quality planning failure mode empirical"

- 157. [FROM TAXONOMY P3] Risk-adjusted evaluation — weighting alternatives by downside severity, not just expected value. For kit design: when two approaches have similar expected quality, the one with a worse failure mode should be penalized. The alternatives-generation procedure currently evaluates alternatives by quality; it doesn't ask "which alternative fails worse?" Research on risk-adjusted decision making (expected utility theory, loss aversion, minimax regret). Does adding explicit downside evaluation change which alternative is selected in design decisions?

Queries:
- "risk adjusted decision making loss aversion expected utility alternative evaluation empirical"
- "minimax regret decision rule alternative selection empirical comparison expected value"
- "downside risk evaluation design decision quality alternative selection empirical"
- "worst-case scenario evaluation alternative ranking empirical study quality"
- "LLM agent risk-adjusted alternative evaluation downside weighting empirical"

- 158. [FROM TAXONOMY P3] Mental model quality and updating — experts hold accurate domain models that novices don't; the gap produces different procedure design. For kit-making: the kit builder's mental model of how Claude processes instructions determines which procedure forms they use. If the mental model is wrong (e.g., "Claude remembers context reliably"), the kit will have structural failures. Research on mental model accuracy in LLM users: what incorrect mental models do practitioners hold? How do they update when confronted with evidence? Does explicit mental model documentation in design_log.md reduce model-based errors?

Queries:
- "mental model LLM users misconceptions accuracy practitioners empirical"
- "expert mental model domain knowledge kit design accuracy updating empirical"
- "incorrect mental model LLM instruction design failure mode practitioners empirical"
- "mental model documentation knowledge management design quality improvement empirical"
- "cognitive model accuracy updating feedback confrontation empirical study"

- 159. [FROM TAXONOMY P3] Morphological analysis — systematic enumeration of all possible combinations in a design space before selecting. For kit Phase 5 planning: what are the independent design dimensions (file format, instruction type, audit model, evidence classification) and what are the possible values for each? A morphological chart forces visibility on design options that might be implicitly foreclosed. Research: does morphological analysis produce better design coverage than unstructured brainstorming? What's the cost (cognitive load, time) vs. the benefit?

Queries:
- "morphological analysis design space exploration systematic enumeration quality empirical"
- "morphological chart design option coverage vs brainstorming quality empirical"
- "design space systematic enumeration decision quality creativity empirical study"
- "combinatorial design exploration morphological analysis quality improvement empirical"
- "LLM agent design decision systematic option enumeration quality empirical"

- 160. [FROM TAXONOMY P3] Incubation and insight — periods of non-engagement between work sessions can produce qualitative improvements in problem-solving that continued engagement doesn't. For kit-making: multi-session kit building may benefit from genuine incubation between sessions rather than continuing immediately where the last session ended. Research on incubation effects in creative problem solving (verified empirically). Does session boundary produce incubation for agent-assisted work, or is the mechanism human-specific? What is the best way to capture mid-session state for an incubation break?

Queries:
- "incubation effect creative problem solving empirical psychology structured review"
- "insight problem solving rest break incubation effect measurement empirical"
- "multi-session problem solving incubation benefit between-session pause quality empirical"
- "design log state capture between-session continuity quality improvement empirical"
- "LLM agent session break incubation analogue multi-session quality improvement"

- 161. [FROM TAXONOMY P3] Strategic forward/backward chaining choice — when to use forward (from current state to goal) vs. backward (from goal to current state) planning. The backward chaining angle (145) asks whether backward chaining is better overall. This angle asks the decision problem: in kit-making specifically, for which sub-problems should the builder use forward vs. backward reasoning? Research on strategy selection meta-cognition: do experts explicitly select their chaining strategy, or is it implicit? What problem features trigger each strategy?

Queries:
- "forward vs backward planning strategy selection meta-cognition empirical problem solving"
- "means-ends analysis strategy selection when to use backward chaining empirical"
- "planning strategy forward backward choice problem features empirical psychology"
- "expertise strategy selection problem solving forward backward planning empirical"
- "LLM agent planning strategy forward backward selection quality empirical"

Priority: P3 — these build on P1/P2 synthesis. Run after P2 synthesis is complete and P1/P2 findings are embedded in updated procedures.

---

### From Book Research Pipeline Extraction (2026-06-28)
- 115. [FROM EXTRACTION] JSON vs markdown for research archive — book pipeline uses JSON (machine-parseable, deduplicable, extractable by script). Kit-maker uses markdown (human-readable, no tooling needed). Is there a viable hybrid? YAML front-matter per claim? Does parsability matter enough to add the overhead?
- 116. [FROM EXTRACTION] Claim-level vs source-level evidence classification — when one source supports multiple claims of different evidence strength, how is classification handled? Does the practitioner-application claim inherit the empirical source's evidence type, or get classified independently?
- 117. [FROM EXTRACTION] Synthesis under contradiction — when a group contains claims that contradict each other, what's the right synthesis procedure? The book pipeline accumulates contradictions without resolving them at claim time. Academic systematic review uses GRADE methodology for this — does it apply here?
- 118. [FROM EXTRACTION] Research pipeline recovery mechanisms — extract_journal.py pulls structured data from workflow transcripts; handles mid-run failures. Should the kit-maker research workflow have an equivalent recovery mechanism? What does partial-wave recovery look like for a non-JSON archive?

---

## Wave 2 P1 Batch 1 — Generated from Research Findings (2026-06-29)

73 new angles surfaced across clusters C (research quality), B (meta-research), A (behavioral rules), D (kit validation). Title-only stubs — expand to full format before dispatching. Priority not yet assigned; flag for Phase 4 synthesis review.

### From Cluster C — Research Quality

- [C-NEW-01] Outcome reporting bias vs transparency bias as distinct failure modes — protocol registration addresses transparency but not selective result reporting; needs its own kit mechanism
- [C-NEW-02] Within-tier quality discrimination for non-RCT evidence domains — GRADE's binary starting points collapse all practical evidence in kit research into one tier; empirical literature on observational study quality ladders needed
- [C-NEW-03] Iterative checklist refinement via retrospective output audit — PRISMA 2020 expansion was driven by meta-research on existing reviews; a kit maintenance protocol based on auditing completed outputs for systematic omissions would apply the same corrective loop
- [C-NEW-04] Terminology collision between technical quality ratings and stakeholder interpretation — GRADE's low/weak language was misread as 'unreliable' by policymakers; kit output labels need stakeholder-side semantic testing
- [C-NEW-05] Search strategy as first-class deliverable — PRISMA requires full reproducible search strategy per database; only 5% of veterinary reviews complied; kit pipelines should treat query construction as a separable artifact with its own QA step
- [C-NEW-06] Living review documentation standards — PRISMA-S and related frameworks were designed for static reviews; living reviews that update continuously require a different documentation model (versioned search logs, update triggers, sunset criteria) that no current standard adequately addresses
- [C-NEW-07] AI-assisted search documentation burden — when the search itself is conducted or augmented by an AI agent, the 'exact executed string' model breaks down because the query may be iteratively reformulated by the agent; this creates a new documentation gap not covered by PRISMA-S
- [C-NEW-08] Tiered documentation standards by review type — there is no widely adopted tiered framework distinguishing documentation requirements for full systematic review vs. scoping review vs. rapid review vs. kit-generated exploratory search; this is a design gap with direct kit implications
- [C-NEW-09] PRESS checklist for search peer review — the Peer Review of Electronic Search Strategies (PRESS) checklist is a companion standard to PRISMA-S that governs the quality-review step; kit designs should account for the peer-review workflow state as a distinct documentation tier
- [C-NEW-10] Adversarial framing in claim robustness testing — arXiv:2405.18779 quantifies claim robustness scores under adversarial reframing; a direct methodological primitive for kit-maker agent pipelines that has no current angle
- [C-NEW-11] LLM scalable oversight failure modes — arXiv:2507.19486 shows a specific failure mode where verification search reinforces wrong AI outputs; this is a distinct angle from general confirmation bias and warrants its own research wave focusing on oversight protocol design
- [C-NEW-12] Anchoring bias in LLMs as a search-framing problem — arXiv:2511.05766 and arXiv:2412.06593 both document that GPT-4 anchoring bias is resistant to standard mitigation prompts; this directly contradicts the assumption that instructing an agent to 'consider alternatives' is sufficient; warrants a dedicated angle on structural (non-instructional) debiasing methods
- [C-NEW-13] Registered reports as a structural protocol model — the 52-percentage-point drop in positive results (96% → 44%) in Scheel et al. 2021 suggests that pre-registration protocol design is an underexplored source of kit architecture patterns; what would a 'registered report' equivalent look like for an agent research pipeline?
- [C-NEW-14] DAG-based bias audit for source selection — the European Journal of Epidemiology framework uses Directed Acyclic Graphs to model which biases each study design is susceptible to before deciding which combinations neutralize each other; this is a formal method not currently in the kit-maker angle list
- [C-NEW-15] Conflict coefficient thresholds in Dempster-Shafer fusion — the sensor fusion literature has quantitative thresholds for when a conflicting source should be isolated vs integrated; translating these into kit evidence-quality gates is a distinct engineering angle
- [C-NEW-16] GRADE vs GRADE-CERQual as type-appropriate confidence scoring — the Cochrane framework's separation of quantitative and qualitative confidence criteria suggests that kit evidence scoring should be type-aware, not unified; this design choice is not in any existing angle
- [C-NEW-17] Predictive validity as depth criterion — the specific test 'can the agent predict what changes under altered conditions without looking up new data' is an operationalizable depth signal not yet formalized in the kit-maker design; this warrants its own design session
- [C-NEW-18] Process trace access as prerequisite for depth evaluation — MiroEval finding that process metrics require search/reasoning trace access, not just final output, implies the kit needs to instrument agents during research not just evaluate outputs; this is an architecture requirement not yet in the design
- [C-NEW-19] LLM causal theory error analogues — the 66% endorsement rate of mechanistically flawed causal claims by trained college students implies LLMs (trained on human-generated text) likely encode similar default causal errors; warrants a specific adversarial verification angle targeting causal over-claims in generated research
- [C-NEW-20] Mechanism-moderator pair as minimal output format — the realist synthesis finding that 'for whom, under what conditions, why' is the minimal sufficient depth format suggests a structured output schema for research claims; worth specifying as a kit schema requirement

### From Cluster B — Meta-Research Methodology

- [B-NEW-01] Equivalence testing adoption rates in practitioner fields — how widely has TOST actually displaced NHST in applied research, and what does that mean for the proportion of 'positive null' claims a kit will encounter in the wild?
- [B-NEW-02] Preregistration as a null-result surfacing mechanism — does mandatory pre-registration (e.g., AsPredicted, OSF) empirically increase the publication rate of null findings, and by how much?
- [B-NEW-03] Registered Reports journal format — outcome-blind peer review accepts papers before results are known; this is the structural fix to publication bias; what is adoption rate and evidence of effect?
- [B-NEW-04] LLM-based claim extraction accuracy on null vs. positive findings — do current LLMs systematically under-extract or misclassify null findings when parsing abstracts, introducing a new automated layer of absence-suppression?
- [B-NEW-05] Pre-registration as a structural kit-enforced gate — the literature repeatedly names pre-registration as the highest-leverage single intervention against QRPs and publication bias; this is a separate implementable angle for how a kit enforces or rewards pre-registration of research questions before search begins
- [B-NEW-06] Replication tagging as a first-class metadata field — the decline-effect and winner's-curse evidence suggests every claim in a kit's evidence store should carry a replication-status tag (original, replicated, failed-to-replicate, not-yet-replicated); this is an angle for kit data-model design not covered by any current wave-1 angle
- [B-NEW-07] Domain-transfer limits of EBP frameworks — PRISMA/AMSTAR/GRADE were built for clinical RCTs; their application to practitioner-generated, computational, or grey literature is an open problem; this is a gap angle for kit design when the evidence base is non-academic
- [B-NEW-08] Replication crisis in AI/ML research specifically — do AI agent kit claims suffer the same false-positive inflation as biomedical claims, and can kit-design borrow Ioannidis's PPV framework for AI capability claims?
- [B-NEW-09] Protocol pre-registration as a bias-prevention mechanism — PROSPERO and OSF pre-registration demonstrably reduces outcome-switching and HARKing; a kit could enforce pre-registration of its own research questions before running queries
- [B-NEW-10] Living systematic reviews — continuously updated reviews (vs. point-in-time snapshots) are an emerging methodology with specific automation requirements; relevant to a kit that synthesizes evolving literatures like AI agent design
- [B-NEW-11] Search result evaluation and source credibility assessment — how users (and agents) judge retrieved documents for relevance and authority, distinct from the query-formulation stage studied here
- [B-NEW-12] Zero-result and empty-SERP handling — what agents should do when a query returns nothing, a poorly studied but high-impact failure mode in automated pipelines
- [B-NEW-13] Cross-database search translation — how a search strategy built for one database (MEDLINE boolean) must be reformulated for another (Scopus, EMBASE, Google Scholar) without losing construct validity
- [B-NEW-14] Temporal coverage gaps — systematic review literature shows that searches anchored to a fixed date range systematically miss pre-publication grey literature and ongoing trials; implications for kit design of time-bounded research tasks
- [B-NEW-15] Structured critique protocols in intelligence analysis (ACH — Analysis of Competing Hypotheses) — a formalized adversarial review method with documented application and measurable outcome improvement; not yet in the angle list
- [B-NEW-16] Pre-mortem methodology (Gary Klein) as a prospective adversarial technique — distinct from post-hoc red teaming; empirical evidence exists on whether it changes decisions
- [B-NEW-17] Delphi method as structured multi-round alternatives assessment with convergence tracking — empirical literature on when Delphi improves vs. degrades group judgment quality
- [B-NEW-18] Registered reports and pre-registration as structural interventions against hypothesis-after-results (HARKing) — large empirical literature on effect on replication rates; directly relevant to kit's generation-then-review architecture

### From Cluster A — Behavioral Rule Writing (angles 59–63)

- [A-NEW-01] Constraint conflict detection within a single rule set — when two rules in the same kit contradict each other, what is the model's resolution behavior? IHEval shows conflict resolution at 48% for system-vs-user conflicts; intra-system-prompt conflicts are unstudied
- [A-NEW-02] Rule retirement cadence — given that Anthropic removes hot-fixes from system prompts after training absorbs them, what framework should kit designers use to decide when a behavioral rule is no longer necessary or has become counterproductive against a newer model?
- [A-NEW-03] Programmatic rule compliance checker design — given the finding that LLM judges are unreliable for verifiable rules, what specific checker architectures (regex, schema, semantic embeddings) map to which rule types? This is an engineering gap not covered by the research found
- [A-NEW-04] Scope-based rule activation via glob/path patterns — the three-tier architecture uses path matching to load rules conditionally; no empirical study examines whether conditional activation improves compliance compared to loading all rules always
- [A-NEW-05] Instruction conflict resolution ordering — when two rules conflict, does rule position (first vs last) or rule specificity (broad vs narrow) dominate? This is unresolved in current literature and directly affects kit rule file structure
- [A-NEW-06] Conditional exception syntax variants — does 'do X unless Y' perform differently from 'if not Y then do X' vs 'when Y: skip X' vs 'only do X if not-Y'? The compositional logic is identical but surface framing differs — no study has isolated this
- [A-NEW-07] Negation robustness across output modalities — the finding that image-generation models use a structurally separate negative prompt mechanism (classifier-free guidance subtraction) suggests multimodal kits need modality-specific negation conventions
- [A-NEW-08] Chain-of-thought as negation compensator — the 52% sensitivity reduction from reasoning-enabled variants (arXiv:2601.21433) suggests explicit scratchpad reasoning partially compensates for negation failures — but the conditions under which CoT reliably compensates vs fails to are not mapped
- [A-NEW-09] Negation in multi-agent delegation — when one agent passes a prohibition to a sub-agent via tool call or message, does the negation failure rate compound across delegation hops? No empirical data found
- [A-NEW-10] Implicit rule precedence from training data distribution — models may have absorbed implicit priority structures from pretraining corpora (e.g., legal documents, official policy texts) that silently compete with kit-defined priorities; needs investigation as a confound in rule conflict studies
- [A-NEW-11] Conflict detection as a first-class pipeline stage — the NSHA and CoT-reasoning results both suggest a pre-generation conflict detection layer is more reliable than in-generation priority arbitration; a dedicated angle on architectures for that detection stage (classifiers, symbolic checkers, LLM-as-judge) would be valuable
- [A-NEW-12] Prompt injection vs. rule conflict unified framing — goal hijacking and supply-chain injection (Microsoft RT findings) suggest that prompt injection is structurally the same problem as rule conflict — an adversarial instruction competing with a legitimate one. A unified defense angle treating both under a single priority-enforcement framework has not yet appeared in the literature
- [A-NEW-13] Rule formulation syntax effects — categorical vs. continuous constraint finding (Control Illusion) and ordering sensitivity (RuleArena) suggest that HOW rules are written (not just what they say) significantly affects conflict resolution; a dedicated angle on rule syntax, specificity, and formulation patterns is warranted
- [A-NEW-14] Multi-agent trust boundary propagation — when a kit spawns sub-agents, the priority hierarchy of the parent agent does not automatically propagate; Microsoft RT and the agentic fault taxonomy both gesture at this gap without a systematic treatment
- [A-NEW-15] Instruction placement and positional bias — SIFo benchmark shows rule position in a sequence affects adherence independently of rule content; a dedicated angle on positional effects in multi-rule prompts would extend the abstraction-level findings
- [A-NEW-16] Quantifier precision in behavioral rules — the finding that models collapse 'primarily' to 'exclusively' suggests a dedicated angle on linguistic hedging in instructions (soft vs. hard quantifiers) and its effect on behavioral boundaries
- [A-NEW-17] Evaluation harness design for instruction variants — the empirical finding that abstraction-level optimality is task-dependent and must be measured suggests an angle on how to design fast A/B evaluation loops for rule variants inside a kit
- [A-NEW-18] Checkpoint and state validation strategies for mid-pipeline LLM outputs — distinct from both planning and execution, not currently covered as a standalone angle
- [A-NEW-19] Thinking models (o1/r1-style) as a structural mitigation for sequential failure — they internalize multi-step reasoning within a single turn, changing the architecture surface for kit-maker pipelines
- [A-NEW-20] Instruction format encoding (numbered lists vs. prose vs. XML tags vs. dependency graphs) as a discrete variable affecting sequential compliance — PADME graph work suggests this is a real design lever
- [A-NEW-21] Model routing by step type — evidence that smaller models can safely execute simple sequential steps while larger models handle planning suggests per-step model selection as a design dimension for kit pipelines

### From Cluster D — Kit Validation (angles 22–24)

- [D-NEW-01] Behavioral drift detection — how to monitor a deployed kit over time for silent degradation across model updates, analogous to ML model monitoring for data drift
- [D-NEW-02] Adversarial kit probing — red-teaming methodologies specific to behavioral kits (jailbreaks, instruction injection, conflicting user instructions that contradict kit rules)
- [D-NEW-03] Constraint decomposition as a design discipline — how to write kit rules in forms that are independently verifiable at the constraint grain (ties to AGENTIF CSR/ISR finding)
- [D-NEW-04] Cost and latency as behavioral compliance signals — over-tool-calling as a measurable proxy for kit rule violations in agentic systems
- [D-NEW-05] Multi-model portability testing — systematic methodology for verifying that a kit written for model A produces equivalent behavior on model B, given the version-churn finding
- [D-NEW-06] Deterministic code-based compliance checkers vs LLM-as-judge — when each is appropriate and what the precision/recall tradeoff looks like empirically
- [D-NEW-07] Constraint interaction effects — how combining multiple behavioral constraint types (format + avoidance + style) compounds failure rates non-linearly; needs its own investigation beyond the five-constraint finding
- [D-NEW-08] Recovery prompt engineering — salience-enhanced reminders restored compliance to 90-100%; what is the minimal effective reminder structure, and does it generalize across constraint types?
- [D-NEW-09] Agentic multi-step compliance — all current benchmarks test single-turn instruction following; how compliance degrades across a multi-turn agentic sequence with evolving instructions is an open empirical gap
- [D-NEW-10] Organizational signal ownership as a kit design requirement — kits currently treat monitoring as purely technical but the cross-team ownership blind spot (ML metrics vs product metrics) is a structural deployment gap that requires kit-level specification of role assignments, not just metric definitions
- [D-NEW-11] Fallback path behavioral specification — timeout and degraded-mode paths are completely unspecified in most instruction kits; this is a distinct coverage gap from the happy path rules

---

### Archive Gap-Fill — Frame Lock Remediation (2026-06-30)

Gap-fill angles for archives identified as having concept frame lock during audit. These supplement, not replace, existing research — the existing claims are valid within the vocabulary searched. Purpose: add missing vocabulary traditions. Priority reflects research risk (P0 = severely underresearched, P1 = high frame-lock risk, P2 = partial gap).

Step 0 (pre-search vocabulary-frame enumeration) was added to research-quality.md AFTER these archives were written. Their saturation logs reflect what was searched, not what exists.

- 173. [GAP-FILL P0] behavioral-testing-methods gap-fill — archive has only 2 queries. Declared saturated. Missing vocabulary traditions: (a) software testing methodology — property-based testing, mutation testing, equivalence partitioning, boundary value analysis, test oracle problem; (b) red-teaming and adversarial testing — security testing, penetration testing applied to AI; (c) conformance and model-based testing — FSM-based testing, specification conformance; (d) behavioral science experimental design — A/B testing, factorial design, within/between subjects for rule variant evaluation.

Queries to add:
- "property-based testing LLM behavioral specification test oracle problem empirical QuickCheck Hypothesis"
- "mutation testing AI agent behavioral rules robustness verification empirical"
- "specification conformance testing LLM agent model-based testing FSM empirical"
- "red team adversarial probing LLM behavioral compliance testing methodology framework 2024 2025"
- "behavioral rule variant A/B testing factorial design LLM compliance empirical evaluation"
- "conformance testing LLM instruction following specification deviation empirical benchmark"

- 174. [GAP-FILL P1] behavioral-rule-compliance gap-fill — 15 queries, all AI/NLP vocabulary. Missing vocabulary traditions: (a) behavioral economics — implementation intentions, default bias, present bias, commitment devices; (b) organizational compliance — policy adherence, norm enforcement, compliance costs; (c) social psychology of compliance — Cialdini, conformity, authority effects; (d) human factors — vigilance decrements, sustained compliance, cognitive load and rule-following.

Queries to add:
- "implementation intentions if-then planning behavioral compliance rule adherence empirical psychology"
- "default bias opt-out opt-in compliance behavioral economics policy design empirical"
- "organizational policy compliance adherence norm enforcement behavioral factors empirical"
- "Cialdini compliance principles commitment consistency authority instruction following LLM analogue"
- "vigilance decrement sustained compliance rule following extended session empirical human factors"
- "cognitive load rule compliance human factors dual-task behavioral degradation empirical"

- 175. [GAP-FILL P1] user-inattentiveness-salience gap-fill — 5 queries, sat=NO, HCI/UX vocabulary. Missing traditions: (a) signal detection theory — sensitivity/criterion, d-prime, ROC curves in warning response; (b) expectancy-based attention — violation capture, mismatch negativity, expectation violation effects; (c) risk communication — health warning effectiveness, nutritional labels, safety label design; (d) clinical alerting — alarm fatigue in ICUs, clinical decision support alert override studies.

Queries to add:
- "signal detection theory warning compliance sensitivity criterion d-prime alerting empirical"
- "alarm fatigue clinical alert override rate ICU warning effectiveness empirical study"
- "expectation violation attention capture mismatch novelty salience empirical cognitive psychology"
- "risk communication health warning effectiveness behavioral response empirical systematic review"
- "alert override clinical decision support critical information salience empirical hospital"

- 176. [GAP-FILL P1] multi-task-instruction-completion gap-fill — 5 queries, sat=NO, AI/prospective memory vocabulary. Missing traditions: (a) human prospective memory research — Einstein & McDaniel, event-based vs time-based PM, failure under load; (b) dual-task interference — central executive capacity, task switching costs; (c) task management — interruption recovery, task prioritization under load.

Queries to add:
- "prospective memory event-based time-based failure rate cognitive load Einstein McDaniel empirical"
- "dual-task interference central executive multiple concurrent task maintenance empirical cognitive psychology"
- "task switching cost interruption recovery multiple tasks empirical human performance"
- "prospective memory failure mechanisms encoding delay cognitive load empirical review"
- "multi-task dropout interference dual task human performance concurrent instruction empirical"

- 177. [GAP-FILL P2] articulation-before-commitment gap-fill — 5 queries, sat=YES, reasonably covered across software engineering and cognitive psychology. Specific gap: (a) verbal overshadowing effect — articulating a holistic judgment can DEGRADE its quality (Schooler et al.), a direct counterpoint to the archive's pro-articulation findings; (b) insight problem solving — conditions where verbalization blocks restructuring and impasse resolution; (c) dual-process theory — when deliberate articulation disrupts intuition-based accuracy.

Queries to add:
- "verbal overshadowing effect articulation quality degradation holistic judgment empirical Schooler"
- "insight problem solving impasse verbalization help hinder restructuring empirical"
- "dual process system 1 system 2 articulation disrupts intuitive accuracy empirical"
- "think-aloud effect problem solving quality disruption vs facilitation empirical comparison"

Note on verbal overshadowing: the pro-articulation finding (articulating helps surface implicit assumptions) and the verbal overshadowing finding (articulating can degrade holistic accuracy) are implication-level contradictions. The archive only has one side. This affects the kit rule: mandatory articulation before commitment may hurt precision in tasks that depend on holistic pattern recognition.

sequential-process-workflow (14 queries, sat=YES): NOT queued for gap-fill. Already spans chain-of-thought, SIFo, FollowBench, RIFT, PADME, seqBench, and workflow practitioners — distributed cognition and hierarchical task analysis are potential gaps but risk is LOW given breadth achieved.
- [D-NEW-12] Decoding-strategy interventions for instruction compliance — the latent-awareness finding (model knows the rule but greedy decoding bypasses it) suggests a class of kit failures that cannot be fixed by instruction wording alone and require decoding-time or post-generation verification steps
- [D-NEW-13] Cross-surface behavioral consistency as a first-class kit requirement — kits are written for a single surface and never specify that the same rules apply consistently across API/UI/webhook ingestion paths
- [D-NEW-14] Belief-update protocols as explicit kit components — the anchoring bias finding suggests every reasoning-heavy kit needs a mandatory contradiction-handling protocol as a named rule, not an implicit expectation of model behavior

---

## User-Identified Gaps (2026-06-30) [USER]

Behavioral contract coverage gaps: neither intake protocol (what to ask vs infer before acting) nor disagreement protocol (what to do when user direction is wrong) appear in the current behavioral contract template (Hard Rule 13). Every generated kit has both gaps. Four angles below; provisional design note in `kit-maker/ENTRYPOINT.md` Hard Rule 13.

### Intake protocol angles

- [USER-01] Essential vs inferable information in AI agent intake — decision framework for what an agent MUST ask before acting vs what it can safely default or infer; aiming for a front-loaded single intake pass that enables fully autonomous subsequent work

  Priority: P1 — affects Phase 2 domain brief and behavioral contract intake section of every generated kit

  Queries:
  - "minimal viable requirements elicitation agent autonomous task completion what to ask vs infer empirical"
  - "requirements prioritization essential vs desirable decision agent information gathering stopping rule empirical"
  - "cold-start context gathering LLM agent minimum question set one-pass intake autonomous work empirical"
  - "expert consultant upfront discovery interview structure essential unknowns autonomous execution practitioners"
  - "requirement elicitation completeness one-session vs iterative comparison quality empirical study"

- [USER-02] Front-loaded intake design for autonomous agent work — how to structure a single intake pass that captures all essential unknowns in dependency order, so no questions need to be asked mid-task; what question sequencing, question dependency graphs, and intake completeness signals look like

  Priority: P1 — directly determines whether the kit can deliver "ask upfront, then work autonomously" vs "interrupt mid-task"

  Queries:
  - "requirements interview dependency ordering question sequencing design empirical elicitation quality"
  - "upfront context gathering autonomous task execution intake completeness signal practitioner guide"
  - "discovery interview structure consultant intake essential unknowns completeness one-pass empirical"
  - "minimum viable context agent planning completeness vs over-elicitation tradeoff empirical"
  - "intake protocol design LLM agent autonomous work reduce mid-task interruptions empirical comparison"

### Disagreement and pushback angles

- [USER-03] Assertive compliance in AI agents — the "inform once, then comply" pattern; how agents should surface user errors without preaching; optimal pushback frequency, framing, and phrasing that registers with inattentive users without becoming annoying or repetitive; when to push harder vs when to accept the user's override and proceed

  Priority: P1 — directly affects the disagreement protocol element of every generated kit behavioral contract

  Queries:
  - "human-AI disagreement assertiveness pushback compliance empirical interaction quality study"
  - "expert advisor pushback frequency framing compliance user override inform-once pattern empirical"
  - "AI agent error correction user direction wrong flag-then-comply pattern empirical evaluation"
  - "assertive AI agent one-time correction vs repeated nagging user satisfaction compliance empirical"
  - "constructive disagreement framing expert advisor professional pushback phrasing empirical communication"

- [USER-04] User inattentiveness and critical information salience — users don't read agent outputs carefully, skip warnings, and override without registering flags; research on how to make critical information actually register with low-attention users without degrading normal output; progressive disclosure, TLDR patterns, flag formatting, placement effects

  Priority: P1 — users being inattentive is a given; the kit must be designed for this reality not against it

  Queries:
  - "user attention management critical information surfacing salience design empirical study"
  - "warning design effectiveness low-attention users information salience empirical HCI"
  - "progressive disclosure TLDR summary placement critical information user attention empirical"
  - "AI agent output scanning behavior user attention eye-tracking reading empirical study"
  - "flag formatting placement critical information LLM agent output user attention empirical comparison"

---

## Wave 2 P1 Batch 2 — Generated from Research Findings (2026-06-30)

62 new angles surfaced across clusters E/F/G/H + USER. Triaged below with priority tier and cluster assignment. Title-only stubs — expand to full format before dispatching.

**Triage key:** P1 = foundational/affects current decisions; P2 = important but narrower; P3 = refinement; DUP = duplicate of existing angle (do not dispatch separately)

### P1 — Directly affect current provisional decisions

- [B2-P1-01] Role salience and priming — how naming a role (advisor vs executor) at session start affects subsequent behavior; role priming experiments may quantify whether advisor-framing in HR13 element 1 actually shifts behavior or is cosmetic. Cluster: E (advisor behavior synthesis)
- [B2-P1-02] Self-consistency prompting as decay-resistance — asking agent to predict its own next action before acting may anchor goal-frame more durably than post-hoc rules. Cluster: E (advisor behavior)
- [B2-P1-03] Preventive vs corrective instruction separation — kit currently mixes "don't drift" and "detect and recover from drift"; separating by placement or framing may improve compliance of each type. Cluster: E
- [B2-P1-04] Sycophancy suppression mechanisms in RLHF — training interventions that reduce position-reversal under user pressure; directly informs whether disagreement protocol needs structural support beyond wording. Cluster: USER (disagreement synthesis)
- [B2-P1-05] Autonomy-preserving correction framing — corrections framed as 'restoring your stated goal' vs 'correcting your error'; measurably lower reactance? Directly affects disagreement protocol wording. Cluster: USER
- [B2-P1-06] Stakes-calibrated assertiveness — do users accept stronger pushback on irreversible actions? What is the threshold stake level? Validates or revises the two-tier disagreement protocol. Cluster: USER
- [B2-P1-07] Friction mechanics as attention restoration — mandatory confirmation dialogs, forced delays for high-stakes actions; clinical and security context empirical data (CPOE overrides). Directly affects irreversible-tier flag design. Cluster: USER
- [B2-P1-08] Consequence framing vs severity rating — "this will delete X" vs "HIGH severity"; no direct empirical comparison found; gap relevant to irreversible-tier wording. Cluster: USER
- [B2-P1-09] Commitment-and-verify loop — ask-model-to-repeat-tasks-back vs just-proceed; empirical comparison. Directly affects multi-task tracking rule. Cluster: USER (multi-task synthesis)
- [B2-P1-10] Criteria contamination in multi-turn loops — when agent sees partial results from prior iterations, does criteria authoring shift toward justifying those results? Directly affects alternatives-generation procedure. Cluster: A (rule writing synthesis)
- [B2-P1-11] Structural separation as pipeline primitive — forking criteria-generation from alternatives-evaluation (separate context windows) replicates SSR-level authentic-reasoning gains. Directly affects alternatives-generation. Cluster: A
- [B2-P1-12] Alert fatigue in AI coding assistants — do repeated warnings in AI pair programmers show the same 63% override rate as clinical CDSS? Validates USER-04 (inattentiveness) findings. Cluster: USER
- [B2-P1-13] Automation bias and overtrust — users discount flags when agent track record is good; Parasuraman & Manzey 2010 empirical grounding. Affects disagreement protocol design. Cluster: USER

### P2 — Important but narrower scope

- [B2-P2-01] Metacognitive calibration gaps in LLMs — LLMs overconfident about task completion, causing premature stopping. Relevant to saturation criterion. Cluster: C (research quality synthesis)
- [B2-P2-02] Instruction salience positioning — primacy/recency effects in long-context prompts for behavioral contract rule placement. Extends Batch 1 Cluster A findings. Cluster: A
- [B2-P2-03] Explicit task enumeration formats — numbered lists vs prose vs XML tags; compliance rate comparison. Extends USER-07/08. Cluster: USER
- [B2-P2-04] CoT elicitation for non-reasoning models — does 'think step by step about all tasks' shift from omission to modification behavior? Cluster: USER
- [B2-P2-05] Hierarchical task decomposition depth — at what depth do coverage gaps appear? Cluster: USER / H
- [B2-P2-06] Self-verification architectures — SelfCheck paper; +2 to +14pp gains. Mechanism for multi-task completion verification. Cluster: USER
- [B2-P2-07] Hierarchical working memory (HiAgent subgoal chunking) — prevents context overflow causing late-task dropout. Cluster: USER
- [B2-P2-08] Insight velocity as pivot signal — rate-of-learning-per-iteration as independent metric from output quality. Cluster: F (direction alternatives synthesis)
- [B2-P2-09] Zoom-in pivot as kit strategy — single-feature zoom-in as productive pivot type; kit mechanism for identifying highest-signal sub-component. Cluster: F
- [B2-P2-10] Assumption audit as pre-pivot step — Bellis et al.; external experts target assumptions not frames; assumption-extraction pass before generating alternatives. Cluster: F
- [B2-P2-11] Rule retirement / prompt aging — old rules may become liabilities as model capabilities change. Extends A-NEW-02. Cluster: A
- [B2-P2-12] Consequence-chain prompt templates — which structural formats most reliably elicit second-order reasoning. Cluster: H (problem-solving synthesis)
- [B2-P2-13] Rule ordering effects — primacy/recency in multi-rule prompts when rules conflict. Extends A-NEW-05 and Batch 1 Cluster A. Cluster: A
- [B2-P2-14] Second-order effects of role assignment — 'advisor' vs 'executor' role and how downstream rule interpretation changes. Cluster: E
- [B2-P2-15] Notification channel diversity — mixing modalities (visual + auditory + positional) to prevent single-channel habituation. Cluster: USER
- [B2-P2-16] User-controlled flag verbosity threshold — personalized notification settings; alert fatigue reduction in clinical informatics. Cluster: USER
- [B2-P2-17] Expert advisor communication norms — management consulting / legal advisory pushback frequency and client satisfaction empirical data. Cluster: USER
- [B2-P2-18] Exploration vs exploitation tradeoff in CoT — reasoning steps before accuracy plateaus. Cluster: E (diminishing returns synthesis)
- [B2-P2-19] Work abandonment in software engineering — ICSE/FSE empirical studies on when developers abandon a debugging line. Cluster: E
- [B2-P2-20] BeliefShift benchmark — temporal belief consistency and opinion drift across LLM sessions. Cluster: G (direction drift synthesis)
- [B2-P2-21] Sunk cost sensitivity — change-of-mind decisions informed by spent and remaining costs. Cluster: G
- [B2-P2-22] Cognitive dissonance and belief perseverance — why governing assumptions resist questioning even under contradictory evidence. Cluster: H (double-loop synthesis)
- [B2-P2-23] Reflexive monitoring — designated evaluator with no stake in evaluated system; independent audit vs self-assessment accuracy gaps. Cluster: H
- [B2-P2-24] Checklist effectiveness — Gawande/Pronovost ICU studies; structured vs intuitive coverage with outcome data. Cluster: H (MECE synthesis)
- [B2-P2-25] LLM self-consistency and tree-of-thought as MECE approximators — whether ToT/CoT produces non-overlapping reasoning paths. Cluster: H
- [B2-P2-26] Verbal overshadowing effect (Schooler) — articulation degrades accuracy for gestalt/pattern tasks; tests whether articulation benefit is specific to propositional tasks. Directly relevant to rubber-duck angle. Cluster: H
- [B2-P2-27] Counterfactual explanations before commitment — requiring agents to state 'this would fail if X is wrong' before acting; more targeted than generic self-explanation. Cluster: H
- [B2-P2-28] Deutero-learning (Bateson) — learning how to learn; structural triggers for improving the learning system itself. Extends double-loop. Cluster: H
- [B2-P2-29] Deutero-learning and exploration vs exploitation (March 1991) — when does a system question the solution space definition vs search within it. Cluster: H
- [B2-P2-30] Cognitive psychology of coverage estimation — availability heuristic, scope insensitivity; how humans misjudge exhaustiveness. Cluster: H (MECE)
- [B2-P2-31] WBS 100% rule — project management ancestor of MECE; empirical literature on coverage gaps and rework costs. Cluster: H
- [B2-P2-32] Pre-mortem as criteria-forcing function — failure-imagination is criteria-generative; more discriminative criteria vs post-hoc review. Cluster: H
- [B2-P2-33] LLM position bias interaction with criteria order — later-listed criteria weighted toward preferred-position alternative; directly informs kit prompt structure. Cluster: A / H

### P3 — Refinement after P1/P2 synthesis

- [B2-P3-01] Computational budget allocation in test-time compute scaling (o1/o3) — early exit triggers. Interesting but not blocking.
- [B2-P3-02] Interrupt cost modeling from OS literature — formal models as analogy for task-switch overhead.
- [B2-P3-03] RL for tool-use completeness reward — completeness as RL reward signal. Interesting future direction.
- [B2-P3-04] Fine-tuning LLMs on backward-reasoning corpora — architecture-level fix, not kit-procedure relevant.
- [B2-P3-05] Backward chaining in RAG — goal-anchored retrieval queries. Specific application.
- [B2-P3-06] R2L factorisation (Zhang 2025) — architectural lever, not kit-procedure relevant.
- [B2-P3-07] LLM planning ceiling research — long-horizon planning structural failures. Background context.
- [B2-P3-08] Metacognitive R1 — reasoning model metacognition. Background context.
- [B2-P3-09] Cross-domain analogical reframing — Jobs-to-Be-Done analogical methods vs assumption reframing; consensus only. P3.
- [B2-P3-10] Precision-recall framing of decomposition quality — IR methodology for measuring coverage. P3 background.

### Duplicates (do not dispatch separately)

- [B2-DUP-01] Double-loop learning (Argyris) — DUPLICATE of angle 146 already run in Batch 2. Findings already in archive.
- [B2-DUP-02] Pre-mortem technique (Gary Klein) — SIMILAR to B-NEW-16 already added from Batch 1. Consolidate.
- [B2-DUP-03] Canary rules — already covered by D-NEW concept; consolidate with D-NEW angles.

### Visual output evaluation angles

- [USER-05] LLM/VLM visual understanding accuracy for UI and layout debugging — what vision-language models actually get right vs. wrong when evaluating rendered visual output; overlap detection, spacing errors, alignment, color contrast, z-index stacking; how accuracy compares to human visual inspection; which visual error classes are systematically missed vs. reliably caught; whether prompting strategies (annotated screenshots, structured descriptions) close the gap

  Priority: P2 generally; becomes P1 for any kit whose domain produces or modifies visual output (UI, frontend, design, document layout)

  Queries:
  - "vision language model UI bug detection accuracy overlap layout errors empirical evaluation benchmark"
  - "GPT-4 vision screenshot visual debugging accuracy UI errors human comparison empirical"
  - "LLM visual reasoning failure modes UI layout spacing overlap systematic errors empirical"
  - "multimodal AI visual QA accuracy web interface design evaluation benchmark empirical study"
  - "structured visual description vs screenshot LLM UI error detection accuracy comparison empirical"

- [USER-06] Compensatory structures for visual evaluation gaps in AI kits — since agents cannot reliably self-validate visual output, what kit structures compensate effectively: explicit visual requirement checklists as code-adjacent specs, rendering tool integration (Playwright/screenshot), human-review gates for visual output, visual diff tools, annotation-based screenshot prompting; which compensations are tractable to specify in a kit behavioral contract

  Priority: P2 generally; becomes P1 for visual-output domains

  Queries:
  - "automated visual regression testing tools Playwright screenshot comparison CI empirical effectiveness"
  - "visual requirement specification checklist UI code review missing bugs empirical study"
  - "human review gate visual output quality AI-assisted development when required empirical"
  - "screenshot annotation prompting LLM visual debugging accuracy improvement empirical comparison"
  - "visual diff tooling CSS regression detection accuracy effectiveness empirical benchmark"

### Multi-task retention angles

- [USER-07] Multi-task instruction completion in LLM agents — when a user gives multiple tasks in one message, what is the dropout rate, which tasks get dropped (first/last/most complex), and what is the underlying mechanism; whether the failure scales with task count and whether task type or position predicts omission

  Priority: P1 — affects behavioral contract design of every generated kit; the multi-task tracking rule (Hard Rule 13 element 9) is provisional and needs calibration on how severe the problem is and whether enumeration alone is sufficient

  Queries:
  - "LLM multi-task instruction completeness task omission dropout rate empirical study"
  - "prospective memory multiple concurrent tasks LLM agent retention forgetting empirical"
  - "multi-step request task omission AI agent position effect first last mentioned empirical"
  - "todo tracking LLM agent multi-task completeness structured execution improvement empirical"
  - "task count instruction following LLM compliance rate scaling empirical benchmark"

- [USER-08] Compensatory structures for multi-task retention — explicit pre-execution task enumeration, checklist-style tracking, self-check patterns, structured decomposition; which mechanisms empirically reduce task dropout; whether listing tasks before starting is sufficient or whether additional structures (mid-task tracking, completion verification prompt) are needed

  Priority: P1 — directly determines what the Hard Rule 13 element 9 should require beyond "enumerate before starting"

  Queries:
  - "explicit task enumeration before execution LLM completeness improvement empirical comparison"
  - "checklist self-check multi-task LLM agent completion verification dropout reduction empirical"
  - "pre-task listing vs natural language task instruction completeness LLM empirical study"
  - "structured task decomposition enumeration completeness AI agent dropout prevention empirical"
  - "meta-cognitive task tracking instruction following LLM agent completeness empirical benchmark"

---

## Source Strategy + Saturation Research (2026-06-30)

### Completed angles

- **162. [COMPLETED 2026-06-30]** Research source selection and effective search strategy — which sources are most useful for AI agent research (Semantic Scholar, arXiv, GitHub, Anna's Archive, Google Scholar, HN/Reddit, LessWrong) and how to search them effectively. Archive: `research_archive/research-source-selection-and-effective-search-strategy-which-.md`. Key findings applied: minimum two structurally distinct sources, GS scoping-only, HN/Reddit discovery-only, grey-lit quality filter (MLR authority+methodology+impact trifecta).

- **166. [COMPLETED 2026-06-30]** Premature saturation failure modes and structural mitigations — how concept frame lock causes early false saturation, what techniques add recall beyond keyword convergence, how to distinguish reachable saturation from true saturation. Archive: `research_archive/premature-saturation-failure-modes-and-structural-mitigations.md`. Key findings applied: Step 0 vocabulary-frame enumeration (research-quality.md), Condition 3 in saturation definition, snowballing as recommended gap-fill, Category D cross-tradition query, LLM expansion failure mode warning.

### New angles from angle 162

- **163.** [P1] Practitioner blog curation landscape for AI agent research — which specific practitioner blogs (Lilian Weng, Simon Willison, Chip Huyen, Eugene Yan, etc.) have the highest signal density for agent design topics; whether any aggregators (The Batch, Import AI) systematically track these.

  Queries:
  - "AI agent research practitioner blogs signal density curated index awesome-list GitHub"
  - "Lilian Weng Simon Willison Chip Huyen agent design blog ranking practitioner"
  - "AI newsletter aggregator Import AI The Batch practitioner research quality comparison"
  - "grey literature AI agent research practitioner community blog quality empirical"
  - "site:github.com awesome-list AI agent LLM practitioner blog curated"

- **164.** [P2] arXiv search API field-qualifier empirical testing — concrete precision/recall data comparing ti: vs abs: vs full-text arXiv queries for AI agent topics; quantified improvement from category filtering.

  Queries:
  - "arXiv search API field qualifier precision recall comparison empirical benchmark"
  - "arXiv abs title full-text search recall precision AI topics empirical comparison"
  - "arXiv category filtering cs.AI cs.MA recall precision empirical information retrieval"
  - "arXiv API search strategy systematic review recall benchmark"
  - "arXiv search metadata field qualifier empirical evaluation quality retrieval"

- **165.** [P2] Semantic Scholar API vs web UI recall parity — whether the Semantic Scholar API returns the same result set as the web interface; whether API access bypasses influence-based re-ranking.

  Queries:
  - "Semantic Scholar API web interface recall parity comparison empirical"
  - "Semantic Scholar API influence ranking bypass recall comparison empirical"
  - "Semantic Scholar influence ranking bias API retrieval empirical study"
  - "academic search API vs web interface recall precision parity systematic"
  - "Semantic Scholar API documentation recall developer forum comparison"

### New angles from angle 166

- **167.** [P1] Synthesis procedure validation — research how confidence maps produced by evidence synthesis are validated; what signals distinguish reliable confidence maps from unreliable ones; what peer-review or meta-review processes exist for synthesis procedure outputs. The kit's research-synthesis.md is UNRESEARCHED and drives all downstream kit decisions. Provisional fixes applied (4-claim heuristic flagged, contradiction scope expanded, calibration note added) but the procedure itself has no empirical grounding.

  Queries:
  - "confidence map validation systematic review synthesis reliability empirical study"
  - "evidence synthesis quality assessment inter-rater reliability confidence map"
  - "GRADE certainty evidence validation practical application reliability empirical"
  - "systematic review synthesis procedure bias sources validation methods empirical"
  - "meta-synthesis confidence rating calibration quality assessment empirical research"

- **168.** [P2] Reflection quality — what distinguishes genuine reflection from performative reflection; what structural indicators predict depth of reflection vs. surface compliance; how mandatory reflection procedures can be designed to produce quality outcomes rather than effort metrics. The kit's mandatory-reflection.md questions are UNRESEARCHED; current design measures effort (questions answered) not quality (whether answers produce new insight).

  Queries:
  - "genuine vs performative reflection quality indicators empirical professional learning"
  - "structured reflection depth quality assessment framework empirical evidence"
  - "metacognitive reflection outcome quality measurement criteria empirical study"
  - "mandatory reflection design quality vs compliance procedural learning empirical"
  - "AI agent self-reflection quality depth genuine insight surface compliance empirical"

- **169.** [P0] Citation-graph disconnection as structural indicator of vocabulary-island boundaries — if different vocabulary traditions use different citation networks, cross-tradition paper connectivity is measurable. Can citation-graph disconnection be used as a detector for concept frame lock before saturation is declared? What does the empirical literature on citation network community detection show about vocabulary clustering?

  Queries:
  - "citation network community detection vocabulary clustering bibliometric empirical"
  - "citation graph disconnection vocabulary island bibliometric field boundary empirical"
  - "cross-disciplinary citation network boundary detection empirical analysis"
  - "snowballing citation graph connected component vocabulary tradition empirical"
  - "bibliometric mapping vocabulary cluster citation network separation empirical"

- **170.** [P1] Pre-search vocabulary-frame enumeration effectiveness — does explicitly enumerating research traditions before searching increase cross-tradition coverage? What prompt structures reliably produce vocabulary-frame enumeration rather than keyword variation? Provisional fix already applied (Step 0 in research-quality.md, Category D in research-wave.js). This angle validates whether the fix is well-calibrated.

  Queries:
  - "query expansion vocabulary framing enumeration recall improvement empirical"
  - "pre-search concept frame enumeration systematic search effectiveness empirical"
  - "cross-disciplinary search vocabulary tradition enumeration coverage improvement empirical"
  - "concept mapping before search vocabulary coverage recall empirical study"
  - "LLM pre-search framing vocabulary tradition enumeration structured prompt empirical"

- **171.** [P1] Adversarial saturation validation — the 'outside the frame' mandatory check — is there empirical evidence for a stopping rule that asks 'have I checked outside my vocabulary tradition?' before declaring saturation? What does the IR literature say about mandatory cross-frame checks in systematic review stopping criteria? Provisional check: Category D already required; this angle validates whether Category D alone is sufficient.

  Queries:
  - "systematic review stopping criteria adversarial cross-frame check empirical"
  - "saturation validation mandatory alternative vocabulary check empirical qualitative"
  - "information retrieval stopping criterion adversarial check recall improvement empirical"
  - "qualitative saturation adversarial validation alternative frame empirical study"
  - "systematic search stopping rule alternative framing check empirical effectiveness"

- **172.** [P2] Dense retrieval as concept-frame-lock mitigation — dense/semantic retrieval (embedding-based, not keyword-based) may cross vocabulary barriers by matching meaning rather than terms. Does dense retrieval empirically outperform sparse retrieval for cross-disciplinary recall? What are the precision trade-offs? Does hybrid retrieval (BM25 + dense) close the gap further?

  Queries:
  - "dense retrieval vs sparse retrieval cross-disciplinary recall precision empirical comparison"
  - "embedding-based semantic search cross-vocabulary recall improvement empirical benchmark"
  - "hybrid retrieval BM25 dense neural cross-domain recall precision empirical"
  - "semantic search cross-disciplinary coverage vocabulary-independent retrieval empirical"
  - "dense retrieval systematic review cross-field recall improvement empirical study"

## New angles surfaced — batch 3 (wave run 2026-07-02)
- **Citation-gap circularity: does vocabulary inaccessibility generate the citation gap that then appears to confirm the vocabulary island?** (P0): Empirical studies testing whether controlling for vocabulary accessibility (jargon level, controlled-vocabulary indexing) eliminates citation gaps — if yes, the causal direction is vocabulary→citation-gap, not citation-gap→vocabulary-island; this would mean citation-gap detection is a lagging indicator, not a leading detector, of vocabulary silos [grounding: closes kit Hard Rule 13 element 8 — intake protocol vocabulary classification (essential vs. inferable) needs to account for self-reinforcing silo dynamics]
- **Two-signal audit: when do citation-gap and co-word/semantic-similarity maps agree vs. disagree, and what does disagreement signal?** (P0): Empirical cases where citation-gap is present but co-word analysis finds no vocabulary island (social/prestige confound), and cases where co-word analysis finds a vocabulary island but citation-gap is absent (parallel discovery / no mutual awareness yet) — these are the two false-positive and false-negative cells for the kit's detection logic [grounding: closes open kit design decision: citation-graph gap detection as vocabulary-frame validation method — current evidence shows partial orthogonality between the two signals but no quantified disagreement rate across domain types]
- **Adversarial saturation check: is requiring two structurally distinct source types for 95% recall evidence-backed or a rule-of-thumb?** (P1): Empirical database coverage comparison studies (e.g., Scopus vs. WoS vs. Semantic Scholar recall for specific domain types) with actual precision/recall numbers to confirm or revise the 52–79% / 95%+ claim [grounding: Category A query instruction states 52–79% single-database recall and 95%+ for two distinct source types — validate whether these specific numbers come from empirical bibliometric coverage studies or are estimates]
- **Entity-level vs. concept-composition boundary: which vocabulary island types are detectable via citation gaps vs. which require entity-level NER?** (P1): A taxonomy of vocabulary island types (concept-composition islands detectable by embeddings; entity-level islands detectable only by citation structure; social-prestige gaps not detectable by either) with domain examples and empirical validation rates [grounding: Mohr et al. finding that embeddings fail on entity-level distinctions (instruments, organisms, compounds) while citation structure succeeds — this maps directly onto the kit's vocabulary-island detection strategy]
- **Intake protocol essential vs. inferable split: what fraction of cross-domain vocabulary can be inferred from context vs. must be explicitly provided in the intake?** (P2): Studies on cross-domain query reformulation, query expansion, or zero-shot retrieval in heterogeneous knowledge bases — specifically, what fraction of terminology gaps can be bridged by LLM inference vs. require explicit domain-expert input; candidate literature: information retrieval query expansion, cross-lingual information retrieval, RAG system failure analysis [grounding: Kit Hard Rule 13 element 8 PROVISIONAL — needs empirical grounding for the split]
- **Action-counterfactual relevance as the operationalization of 'essential' — empirical test in kit-maker context** (P0): For each information type in a kit-maker intake (goal, constraints, style, audience, domain), whether knowing it would change the output action — this directly closes the essential/inferable split decision for Hard Rule 13 element 8 [grounding: SAGE-Agent EVPI framework (arXiv:2511.08798) applied to kit-maker task types]
- **Reversibility as the grounding criterion — which kit-maker outputs are irreversible enough to require upfront confirmation** (P0): A principled list of which kit-maker task outputs are irreversible (and thus require grounded upfront elicitation) vs. recoverable (safe to infer and correct), operationalizing the grounding criterion for intake protocol design [grounding: Information State theory (Traum & Larsson) + COCORELI precondition blocking + kit-maker output taxonomy]
- **Taxonomy of inferable-from-artifact vs. must-ask — what information can be read from provided files, conversation history, or environment state before asking the user** (P1): Evidence for which information types are reliably recoverable from artifact inspection (file type, length, existing style, genre signals) versus genuinely absent from all observable sources — closes the 'infer from environment, never ask' category [grounding: LHAW benign-class variants + Implicit Intelligence environment-exploration finding]
- **Security perimeter around clarification mode — whether kit-maker intake should sandbox clarification away from tool execution** (P1): Whether intake-phase clarification (before any tool execution) carries lower prompt-injection risk than mid-task clarification, or whether all clarification-seeking states are equally vulnerable — determines whether to gate clarification to the intake phase only [grounding: ASPI (arXiv:2605.17324) — clarification-seeking amplifies prompt injection]
- **Persona-level context accumulation — cross-session stable user preferences that should never be re-elicited** (P2): Which categories of user context (writing style preferences, domain expertise level, output format preferences) are stable enough to store and infer across sessions, eliminating repeat intake questions — directly reduces intake question count for repeat users [grounding: pi-Bench cross-session continuity finding (arXiv:2605.14678)]
- **Clarification paradox domain boundary — which kit-maker task types are 'service-oriented' (clarification backfires) vs. 'state-oriented' (clarification helps)** (P2): Whether kit-maker generation tasks (structured output, schema-bound) fall in the service-oriented category where clarification logic structurally degrades performance — if so, intake must be completed before any generation begins, not interleaved [grounding: Drift-Bench clarification paradox finding (arXiv:2602.02455)]
- **Essential vs. inferable split: empirical threshold for the kit-maker intake protocol** (P0): Operationalizable criteria for which intake questions are 'essential' (answer changes solution correctness) vs. 'inferable' (derivable from codebase, domain conventions, or prior context). The current kit Hard Rule 13 element 8 is marked PROVISIONAL — this angle would close the decision with specific thresholds: ask rate ~62-78% scales with task difficulty; for easy tasks with <15min scope, over half of candidate questions are inferable. [grounding: arXiv:2603.26233 (UA-Multi ask-rate by task difficulty) + arXiv:2510.08517 (CaRT 50% sufficiency threshold)]
- **Handoff specification loss: whether inter-agent contracts need their own intake protocol** (P1): Whether a single front-loaded intake (at orchestrator level) is sufficient or whether each agent-to-agent handoff requires its own micro-specification step. AgentAsk shows 29-37% of handoff errors are Data Gap and Signal Corruption — catchable with lightweight clarification. This closes the design question of whether the kit's intake protocol should be global-only or include handoff templates. [grounding: arXiv:2510.07593 (AgentAsk handoff error taxonomy) + arXiv:2503.13657 (MAST cascade propagation)]
- **Intake schema structure: structured fields vs. free-text goal for information-gain computation** (P1): Whether structured intake schemas (fields with known domains: metric, scope, constraint, success-criteria) enable better clarification selection than free-text goals. EVPI approach requires explicit parameter domains to compute information gain; Ambig-DS shows that prompt framing (permissive vs. conservative) determines whether agents over-ask or silently default — this suggests schema design determines which failure mode you get. [grounding: arXiv:2511.08798 (EVPI operates over explicit parameter domains) + arXiv:2605.09698 (Ambig-DS: permissive vs. conservative prompt framing)]
- **Irreversibility as intake trigger: empirical threshold for mandatory pre-task clarification** (P2): Whether action irreversibility should be a mandatory intake trigger — i.e., agents should refuse to begin execution until goal is clarified when the first planned action is irreversible. This is currently a heuristic in the kit; empirical data on what percentage of cascades start from irreversible actions taken under ambiguous goals would convert this from heuristic to evidence-based rule. [grounding: Galileo agent failure modes blog + arXiv:2604.03714 (runtime enforcement for ethics) + MAST cascade data]
- **Vocabulary-frame coverage gap: cognitive science 'pre-task briefing' literature not yet searched** (P2): Empirical evidence from aviation CRM, surgical briefing, and military operations research on how pre-task briefing depth reduces mid-task errors — a tradition with 30+ years of empirical data that uses 'briefing quality' vocabulary rather than 'intake protocol.' This tradition likely has controlled studies (e.g., WHO surgical checklist: 47% reduction in major complications) that would provide calibration for how thorough an agent intake needs to be. [grounding: Human factors / CRM literature on pre-task briefing depth and error reduction]
- **Adversarial saturation check: is the Category D requirement itself evidence-backed?** (P3): Whether the four research traditions identified (AI/Agent Systems, Requirements Engineering, HCI/CSCW, Cognitive Science) actually use structurally different vocabulary that produces recall-complementary results, or whether they converge on the same papers. This would validate or falsify the multi-tradition search requirement itself. [grounding: Citation graph of arXiv:2605.07937 + arXiv:2603.26233 for alternative vocabulary traditions cited]
- **Operationalizing citation-graph gap detection as a vocabulary-island validation method for kit-maker agents** (P0): Whether citation probability between content-similar but citation-sparse communities is a computable signal an agent can use to detect missed vocabulary islands in real time — specifically whether citation-graph gap detection can be automated in a kit-maker's saturation check module without requiring full bibliometric infrastructure [grounding: PMC12316298 (knowledge transfer gap methodology) + CitNetExplorer + Citationchaser]
- **Relative recall benchmarking for agent kit research loops: minimum viable benchmark set size** (P0): Whether there is a minimum viable benchmark set size below which relative-recall estimates are meaningless, and what that threshold is — this directly closes the question of how many seed papers a kit-maker agent needs before its saturation check is informative [grounding: PMC12621535 (Johnson et al. practical guide) — the paper explicitly states optimal set size is unknown, with published studies using 15–1347 papers]
- **LLM self-report of search completeness is unreliable: evidence and mitigation patterns** (P1): Empirical confirmation that prompting-based stopping (asking the LLM 'do you have enough information?') is systematically worse than external signals — and which external signals (cosine convergence, MDP value, CMR estimation) are practical in a kit-maker context without requiring full training infrastructure [grounding: arXiv:2510.14337 (Stop-RAG), arXiv:2604.17143 (SeekerGym), CMU optimal termination research]
- **Adversarial query design: what query structures reliably surface null results and contradict apparent saturation** (P1): Whether specific adversarial query structures (critique framing, null-result framing, failure-mode framing) have higher yield than standard queries when saturation appears to have been reached — quantifying the expected uplift of a mandatory adversarial query phase [grounding: Red-teaming literature + negative case analysis tradition + information foraging theory]
- **Essential vs. inferable intake information for autonomous agent kits: a decision-theoretic analysis** (P2): Whether there is a principled framework for separating information that must be provided at intake from information the agent can infer or default — this is a null-result zone (no empirical studies found) that requires design-session resolution rather than research, but grounding in agent delegation/authorization literature may provide structure [grounding: Agent context management literature + Hard Rule 13 element 8 PROVISIONAL in kit design requirements]
- **Interdisciplinary vocabulary translation gap: how often does same-phenomenon evidence cluster under non-overlapping terminology across disciplines** (P2): Empirical rates of vocabulary fragmentation for specific phenomena across disciplines — e.g. what percentage of relevant AI safety evidence exists only under HCI or management science vocabulary — providing the empirical case for why mandatory Category D framing is required rather than optional [grounding: Cross-concordance mapping literature + knowledge silo study (PMC12316298)]
- **Omission vs. commission failure ratio in multi-constraint instruction following: closing the kit quality metric decision** (P0): Specific per-constraint omission rate vs. conflict/commission rate breakdown in real agentic instruction sets; needed to decide whether kit quality metrics should weight omission detection more heavily than error detection — currently PROVISIONAL in Hard Rule 13 element 8 [grounding: seqBench (arXiv:2509.16866), AgentIF (arXiv:2505.16944), MCJudgeBench (arXiv:2605.03858)]
- **External intention register vs. in-context manifest: architectural decision for kit completion tracking** (P0): Empirical comparison of in-context completion lists vs. externalised state repositories for multi-step task completion accuracy; closes the design decision between context-embedded checklists and tool-based state management in the kit's completion tracking mechanism [grounding: SagaLLM (arXiv:2503.11951), BDI architecture literature, MemGuide (arXiv:2505.20231)]
- **Instruction count as a kit complexity budget: calibrating the N-constraint ceiling** (P1): Model-specific performance curves as a function of constraint count, enabling a quantified budget (e.g., 'kits should target ≤6 simultaneous active constraints for 80%+ compliance on frontier models') rather than a qualitative warning [grounding: arXiv:2509.21051 (When Instructions Multiply), arXiv:2503.23530 (PM Failures)]
- **Mid-response instruction reinstatement: ARQ pattern applicability to kit scaffolding** (P1): Whether ARQ-style inline constraint restatement generalises beyond customer-service multi-turn to single-turn agentic kit instructions; determines whether kit system prompts should embed mid-instruction checkpoints vs. relying on terminal reminders alone [grounding: arXiv:2503.03669 (ARQ), arXiv:2606.23459 (TriggerBench)]
- **Proactive interference unbinding: architectural mitigations beyond prompt engineering** (P1): Whether instruction versioning strategies (explicit 'superseding' markers in context structure) measurably reduce proactive interference from revised instructions mid-session; relevant for kits that allow in-session parameter updates [grounding: arXiv:2506.08184 (PI-LLM), arXiv:2603.23530 (PM Failures)]
- **Vocabulary-frame validation via citation graph: does the Category D HCI tradition cite the LLM-PM tradition?** (P2): Whether the LLM-PM researchers cite HCI interruption science — cross-citation presence would confirm these are the same phenomenon studied under different vocabulary frames; absence would indicate the traditions are genuinely parallel and both must be consulted for complete coverage [grounding: Citation graph of arXiv:2603.23530, TriggerBench references, HCI interruption recovery literature]
- **Completion recognition failure as a distinct class from omission: closing the 12.4% MAST finding** (P2): Empirical evidence on how 'not recognising task completion' manifests in practice (false continuation, redundant actions, or stuck loops) and what signals reliably trigger termination — needed to design the kit's done-state detection mechanism [grounding: arXiv:2503.13657 (MAST), arXiv:2512.12791 (Beyond Task Completion)]
- **Adversarial saturation check: evidence base for Category D requirement in kit research methodology** (P3): Whether the 52–79% single-database recall figure and the 95%+ two-source-type figure cited in the research protocol are themselves empirically grounded — closes the open question about whether the adversarial saturation methodology is evidence-backed or stipulative [grounding: Information retrieval recall literature, systematic review methodology, vocabulary-frame enumeration research]

---

### Multi-Agent Quality Patterns — From User Direction (2026-07-04)

**Context:** We already use multi-agent patterns (A1 external auditor, goal checker — both separate agents reading produced artifacts). The user observed that almost everything in the process uses a single agent and that empirical research on multi-agent quality mechanisms exists and is substantial. These angles ground the patterns we've already built and identify which additional patterns have evidence for quality improvement.

**Wave assignment:** P1 — batch 4. Queue after existing P1 batch 3 (angles 169, 171, USER-01, USER-02, 176). Research execution blocked pending user authorization per standard wave-block rule. Priority rationale: we are already using multi-agent patterns (A1, goal checker) without empirical grounding; the research would immediately inform whether to extend or revise those mechanisms.

- **178. [FROM USER] Multi-agent adversarial review — independent producer-reviewer quality delta**

  The pattern behind A1 (external auditor) and goal checker: a separate fresh agent reads the produced artifact and looks for failures the producer cannot self-detect. Empirical question: what is the actual quality delta from context isolation? Does requiring the reviewer to be a fresh agent (no shared context with producer) produce materially different output than self-review? What failure modes appear (rubber-stamp, echo chamber, adversarial overcorrection)? What context isolation requirements are necessary for genuinely independent review? How does the reviewer's access scope (read-only vs tool-enabled) affect finding quality?

  Queries:
  - "LLM external critic producer reviewer context isolation quality delta adversarial independent empirical"
  - "Constitutional AI self-critique vs external critique quality comparison context isolation LLM empirical"
  - "LLM-as-judge rubber stamp echo chamber independent reviewer failure modes fresh context empirical"
  - "multi-agent critique external review quality improvement vs single agent self-review adversarial empirical benchmark"
  - "site:arxiv.org independent reviewer agent context isolation fresh agent quality delta LLM empirical 2024 2025"

  Priority: P1 — batch 4. Directly grounds A1 auditor and goal checker design. Research would tell us whether context isolation is sufficient and what failure modes to watch for (especially rubber-stamp drift, which goal-checker-maintenance.md documents but doesn't empirically calibrate).

---

- **179. [FROM USER] LLM debate architectures — argue then judge**

  Two agents argue opposing positions; a judge or synthesis step produces a final output. Irving et al. "AI Safety via Debate" (2018) is the foundational proposal. Empirical literature since has tested when debate actually helps. Key questions: does debate improve accuracy vs single-best-of-N sampling? What are the failure modes (both agents converge, one persuades with false confidence, judge is biased toward more fluent argument)? When is the explicit judge step necessary vs when does synthesis emerge from debate? Can single-agent argue-with-yourself approximate multi-agent debate?

  Queries:
  - "Irving AI safety via debate scalable oversight argument quality adversarial reviewer empirical evidence"
  - "LLM debate architecture two agent judge quality improvement meta-analysis systematic review 2024"
  - "multi-agent debate failure modes false confidence persuasion accuracy judge bias empirical benchmark"
  - "argue with yourself single agent debate simulation vs multi-agent debate quality empirical comparison"
  - "site:arxiv.org LLM debate quality judge synthesis adversarial argumentation quality empirical 2024 2025"

  Priority: P1 — batch 4. Directly relevant to whether to add debate mechanisms between A1 and the worker, or between goal checker iterations.

---

- **180. [FROM USER] Multi-agent judge panels — N independent reviewers, aggregate**

  N independent agents each review the same artifact; their judgments are aggregated (majority vote, weighted, ranked, or synthesized by a meta-judge). Key questions: what is the optimal panel size? Does reviewer diversity (different prompts, different models, different assigned roles) add value beyond same-prompt redundancy? When does a panel outperform the best single reviewer? What aggregation methods work (majority vote vs structured debate vs judge synthesis)? At what panel size does marginal gain disappear?

  Queries:
  - "LLM panel review N agents majority vote quality improvement vs single reviewer panel size empirical"
  - "ensemble LLM evaluation diverse reviewers panel size optimum quality aggregation empirical study"
  - "mixture of agents multi-agent panel judgment aggregation quality benchmark empirical 2024"
  - "reviewer diversity panel composition same model different prompt vs different model quality empirical"
  - "site:arxiv.org multi-agent evaluation panel reviewer diversity aggregation quality optimal size 2024 2025"

  Priority: P1 — batch 4. Would inform whether to expand from single A1 to a 3-agent panel for high-stakes task closes, and what diversity requirements matter.

---

- **181. [FROM USER] Structural role assignment across agents — prosecutor, defender, judge architecture**

  Not per-turn persona prompting within one agent (angle 138), but persistent structural role assignment to separate agents: one agent always argues for the work, one always argues against, a third synthesizes or judges. Key questions: does persistent role assignment produce structurally different output than per-turn persona prompting? What role set produces the most coverage (prosecutor/defender/judge vs advocate/skeptic vs domain-expert/naive-reader)? When does role diversity outperform skill diversity? Does assigning roles at agent-creation time (in system prompt) vs per-call produce different behavior?

  Queries:
  - "structural role assignment multi-agent system prosecutor defender judge quality coverage empirical"
  - "persistent role LLM agent architecture vs per-turn persona prompting quality comparison empirical"
  - "adversarial collaboration assigned roles debate architecture quality coverage structural empirical"
  - "devil's advocate structural assignment separate agent vs per-prompt instruction quality empirical comparison"
  - "site:arxiv.org multi-agent role assignment persistent prosecutor defender judge structural quality 2024 2025"

  Priority: P1 — batch 4. Would inform whether to add a persistent devil's advocate agent alongside A1 and goal checker, and what role architecture produces the best coverage.

---

- **182. [FROM USER] Multi-agent coordination cost vs quality benefit — when is multi-agent worth it?**

  The foundational question: we do most things with one agent; for which task types does a multi-agent architecture produce quality gains that justify the coordination overhead (context cost, latency, complexity, prompt complexity)? What task properties predict when multi-agent wins? When does a simpler single-agent outperform a complex multi-agent setup? What is the minimum task complexity threshold above which multi-agent helps? What does the empirical literature on multi-agent frameworks (ChatDev, AutoGen, MetaGPT) show about actual quality vs coordination cost?

  Queries:
  - "multi-agent architecture quality gain vs single agent coordination cost task type threshold empirical"
  - "ChatDev AutoGen MetaGPT multi-agent framework quality benchmark empirical comparison single agent"
  - "when does multi-agent outperform single agent task complexity threshold overhead quality empirical study"
  - "multi-agent coordination overhead cost benefit tradeoff AI agent pipeline quality empirical benchmark"
  - "site:arxiv.org multi-agent vs single agent quality cost tradeoff task complexity threshold empirical 2024 2025"

  Priority: P1 — batch 4. Gives the empirical answer to the user's core question and prevents indiscriminately adding multi-agent patterns everywhere (coordination cost matters and has a threshold).

---

**NOTE — M-41 expansion (2026-07-04):** Original section had 5 angles (one per user-provided example — enumeration collapse). Angles 183–196 added after correction to cover the full research landscape across output aggregation, critique loops, framework architectures, evaluation calibration, adversarial patterns, context isolation, specialization, and cost tradeoffs.

---

- **183. [FROM USER] Self-consistency and majority voting — multiple generations, aggregate by agreement**

  Wang et al. 2022 showed large gains from sampling K outputs from the same prompt and selecting by majority vote agreement. Simplest multi-agent-equivalent quality pattern. Questions: quality-cost tradeoff for different K values; when does majority vote outperform best-of-N; which task types benefit most (reasoning vs generation vs behavioral compliance); does the gain generalize beyond chain-of-thought reasoning to procedural/behavioral tasks?

  Queries:
  - "Wang self-consistency majority voting chain of thought LLM quality improvement 2022 empirical"
  - "best-of-N sampling vs majority voting quality tradeoff task type LLM empirical comparison"
  - "self-consistency K samples quality gain diminishing returns curve empirical benchmark"
  - "self-consistency behavioral compliance instruction following non-reasoning quality empirical"
  - "site:arxiv.org self-consistency sampling multi-sample aggregation quality empirical 2023 2024 2025"

  Priority: P1 — batch 4. Directly applicable to goal checker: should we run it 3x and vote rather than once?

---

- **184. [FROM USER] Mixture of Agents (MoA) — diverse model ensemble for quality**

  Li et al. 2024 showed that aggregating outputs from multiple diverse models (not just same-model K-samples) produces quality gains beyond single-model self-consistency. The diversity hypothesis: heterogeneous models catch different errors. Questions: is quality gain from model diversity, prompt diversity, or both; minimum diversity for measurable benefit; how does aggregation method (concat-then-synthesize vs vote) affect results; does MoA generalize from reasoning benchmarks to procedural tasks?

  Queries:
  - "Mixture of Agents MoA diverse model ensemble quality improvement Li 2024 empirical benchmark"
  - "model diversity ensemble LLM quality gain heterogeneous vs homogeneous sampling empirical"
  - "diverse model aggregation synthesis quality improvement task type generalization empirical"
  - "MoA quality vs single model vs same-model ensemble token cost tradeoff empirical"
  - "site:arxiv.org mixture of agents diverse LLM ensemble aggregation quality empirical 2024 2025"

  Priority: P1 — batch 4.

---

- **185. [FROM USER] Iterative critic-revise loops — Self-Refine, Reflexion, convergence**

  Iterative loops: producer generates, external critic evaluates, producer revises. Self-Refine (Madaan et al. 2023), Reflexion (Shinn et al. 2023), Constitutional AI revision. Key questions: do these loops converge or thrash; marginal quality gain per round; when does a critic-revise loop outperform single high-effort generation; what structural feature prevents oscillation; at what round does quality saturate?

  Queries:
  - "Self-Refine iterative critique revision LLM quality convergence Madaan 2023 empirical"
  - "Reflexion verbal reinforcement external feedback LLM iterative revision quality empirical Shinn"
  - "critic-revise loop convergence thrashing quality gain per round saturation LLM empirical"
  - "iterative refinement multi-turn critique LLM quality curve diminishing returns empirical"
  - "site:arxiv.org iterative revision producer critic loop convergence quality empirical 2023 2024 2025"

  Priority: P1 — batch 4. Relevant to adding more A1/goal checker rounds between task phases.

---

- **186. [FROM USER] Constitutional AI — principle-based self-critique as quality mechanism**

  Bai et al. 2022 (Constitutional AI): a fixed principle set guides a critique-revision cycle within or across agents. Questions: how do critique principles affect output quality vs open-ended critique; does having explicit dimensions outperform unconstrained critique; does the self-critique vs external-agent distinction matter; how does CAI quality compare to RLHF; is the goal checker's structured prompt functionally equivalent to CAI principles?

  Queries:
  - "Constitutional AI self-critique revision quality improvement principle-based Bai 2022 empirical"
  - "RLAIF AI feedback critique quality vs RLHF human feedback comparison empirical benchmark"
  - "explicit critique dimensions vs open-ended free-form critique quality LLM empirical comparison"
  - "self-critique loop principle-driven convergence quality revision improvement LLM empirical"
  - "site:arxiv.org constitutional AI critique principle revision quality improvement empirical 2022 2023 2024"

  Priority: P1 — batch 4.

---

- **187. [FROM USER] Process reward models — step-by-step verification as quality filter**

  Lightman et al. 2023 ("Let's Verify Step by Step"): a verifier evaluates each intermediate step rather than only final outputs. PRMs catch errors before they compound. Questions: quality gain from step verification vs outcome verification only; when is per-step verification worth the overhead; does PRM-style verification generalize from math to procedural reasoning (e.g., kit-maker procedure execution); what granularity of step verification is optimal?

  Queries:
  - "process reward model step verification LLM quality improvement Lightman 2023 Let's Verify empirical"
  - "outcome reward model vs process reward model quality verification LLM comparison empirical"
  - "step-by-step verification intermediate state checking LLM quality gain overhead empirical"
  - "PRM verifier generalization procedural reasoning beyond math quality empirical"
  - "site:arxiv.org process reward model step verification quality filter LLM 2023 2024 2025"

  Priority: P1 — batch 4.

---

- **188. [FROM USER] Multi-agent framework architectures — ChatDev, MetaGPT, AutoGen collaboration patterns**

  Role-specialized frameworks: ChatDev (sequential product manager → engineer → tester), MetaGPT (structured document passing), AutoGen (dynamic orchestrator-worker). Key questions: which collaboration topology produces best quality; does role specialization improve quality or just tone; at what task complexity does multi-agent framework outperform a well-prompted single agent; what are framework-specific failure modes (role drift, communication failure, context loss at handoff)?

  Queries:
  - "ChatDev MetaGPT AutoGen multi-agent collaboration architecture quality comparison empirical"
  - "role-based multi-agent framework quality improvement vs single-agent complex task empirical"
  - "multi-agent topology sequential parallel hierarchical quality comparison task type empirical"
  - "role specialization multi-agent drift communication failure context handoff quality empirical"
  - "site:arxiv.org multi-agent framework collaboration architecture quality comparison empirical 2023 2024 2025"

  Priority: P1 — batch 4.

---

- **189. [FROM USER] LLM-as-judge calibration — biases, reliability, what judges get wrong**

  Zheng et al. 2023 (MT-Bench, Chatbot Arena) is foundational. Documented biases: position bias, length bias, self-enhancement bias, verbosity bias. Questions: severity of each bias and which mitigations work empirically; do multi-judge panels reduce bias; what tasks are judges reliable vs unreliable at; what is the quality ceiling of LLM-as-judge; how does judge calibration degrade on non-standard outputs?

  Queries:
  - "LLM-as-judge calibration position bias length bias self-enhancement Zheng MT-Bench 2023 empirical"
  - "LLM judge bias mitigation calibration multi-judge panel vs single judge empirical comparison"
  - "LLM judge reliability unreliable task type ceiling quality empirical benchmark"
  - "judge panel bias reduction inter-judge agreement consistency quality empirical"
  - "site:arxiv.org LLM-as-judge bias calibration reliability quality empirical 2023 2024 2025"

  Priority: P1 — batch 4. Goal checker is an LLM judge; its calibration biases are uncharted.

---

- **190. [FROM USER] Red team agent patterns — dedicated failure-finder architecture**

  A dedicated agent whose only purpose is to find failure modes, not to review or improve. Unlike A1 (compliance auditor), a red team agent actively tries to make the output fail. Questions: does a dedicated red team agent (goal: break it) produce qualitatively different findings than a reviewer (goal: identify weaknesses); what prompting patterns maximize failure discovery rate; what is the false positive rate; how is a red team agent calibrated to avoid both rubber-stamping and adversarial overcorrection?

  Queries:
  - "red team LLM dedicated adversarial failure discovery agent vs reviewer quality findings empirical"
  - "adversarial agent red team failure discovery vs critical review quality finding type empirical"
  - "red teaming LLM failure discovery rate false positive calibration structured methodology empirical"
  - "AI red team adversarial probing gap discovery prompting strategy calibration empirical"
  - "site:arxiv.org red team adversarial agent failure discovery quality calibration empirical 2024 2025"

  Priority: P1 — batch 4.

---

- **191. [FROM USER] Orchestrator-worker-verifier hierarchy — three-tier agent architectures**

  Beyond two-tier (orchestrator + worker), three tiers add a dedicated verifier: orchestrator plans, workers execute, verifier checks each output before the next step. Questions: does a verifier tier improve quality vs two-tier; what should the verifier see (output only vs producer reasoning); what does a verifier catch that a reviewer wouldn't; when is three-tier overkill; what task types justify the additional coordination cost?

  Queries:
  - "orchestrator worker verifier three tier multi-agent architecture quality comparison empirical"
  - "agentic pipeline verifier layer quality improvement two vs three tier empirical comparison"
  - "dedicated verifier agent multi-step pipeline quality gate output check empirical"
  - "orchestrator worker verifier hierarchy failure modes quality improvement task type empirical"
  - "site:arxiv.org three tier agent hierarchy verifier quality gate pipeline empirical 2024 2025"

  Priority: P1 — batch 4.

---

- **192. [FROM USER] Context isolation requirements — what must be isolated between agents**

  A foundational architectural decision: what information should the reviewer/critic NOT see from the producer? Complete isolation (fresh context) vs partial isolation (sees task not reasoning) vs no isolation (shared context). Questions: how does isolation level affect finding novelty and critic quality; is fresh context always better or sometimes harmful; minimum isolation requirement for genuinely independent review; when does shared context help rather than hurt?

  Queries:
  - "context isolation multi-agent review critic fresh context independence quality novelty empirical"
  - "shared vs isolated context multi-agent critique finding quality novelty comparison empirical"
  - "reviewer independence context access level finding quality empirical comparison"
  - "fresh context critic review quality vs shared context reviewer independence empirical"
  - "site:arxiv.org agent context isolation reviewer independence quality finding empirical 2024 2025"

  Priority: P1 — batch 4. Architectural question for A1 and goal checker design.

---

- **193. [FROM USER] Inter-agent calibration and disagreement resolution**

  When multiple agents produce conflicting outputs, resolution options include majority vote, hierarchical arbitration, debate-to-consensus, or escalate to user. Questions: which resolution protocol works by task type; how often do agents genuinely vs superficially disagree; does disagreement signal uncertainty (high disagreement = low confidence and should escalate); when should disagreement be resolved automatically vs escalated?

  Queries:
  - "multi-agent disagreement resolution protocol majority vote arbitration quality outcome empirical"
  - "LLM agent disagreement conflict resolution debate consensus quality outcome empirical"
  - "inter-agent disagreement uncertainty signal calibration confidence quality empirical"
  - "when to escalate multi-agent disagreement vs resolve automatically quality empirical"
  - "site:arxiv.org multi-agent conflict disagreement resolution calibration quality protocol 2024 2025"

  Priority: P1 — batch 4.

---

- **194. [FROM USER] Agent specialization vs generalization — when specialist multi-agent wins**

  Specialist agent (narrowly prompted) vs generalist (broadly capable). Multi-agent setups typically specialize roles. Questions: does specialist prompting produce expert-level output or only change tone; when does a team of specialists outperform a single generalist on quality tasks; what specialization granularity is optimal; does domain-specific role prompting transfer to procedural quality tasks vs knowledge-domain tasks?

  Queries:
  - "specialist vs generalist LLM agent role assignment quality outcome task type empirical"
  - "multi-agent specialist team vs single generalist agent quality complexity threshold empirical"
  - "role-specific prompting specialist domain quality improvement mechanism empirical"
  - "agent specialization granularity optimal quality task type empirical benchmark"
  - "site:arxiv.org specialist generalist multi-agent quality role assignment empirical 2024 2025"

  Priority: P1 — batch 4.

---

- **195. Multi-agent quality saturation — where does adding more agents or rounds stop improving quality?**

  Different patterns scale differently: majority voting (K generations), iterative loops (N rounds), judge panels (M judges). Pure quality question: at what scale does quality plateau for each pattern type? What is the observable ceiling per pattern? Does the model tier of supporting-role agents (verifier, critic, judge) affect final output quality — or can a smaller model in a supporting role produce the same final quality as a frontier model in that role? These are quality-maximization questions, not cost-efficiency questions.

  Queries:
  - "multi-agent LLM quality saturation scaling plateau diminishing returns empirical"
  - "majority voting LLM quality ceiling N generations plateau empirical"
  - "model tier supporting role verifier critic judge final output quality comparison"
  - "smaller cheaper model critic verifier role vs frontier model multi-agent quality cost empirical"
  - "site:arxiv.org multi-agent token economics cost quality pattern tradeoff empirical 2024 2025"

  Priority: P1 — batch 4. Informs whether expanding beyond A1+goal-checker is economically justified.

---

- **196. [FROM USER] Emergent quality behaviors — what only multi-agent interaction produces**

  Beyond additive quality gains, are there qualitatively different outputs that only emerge from multi-agent interaction? Questions: does debate produce genuinely novel reasoning not reachable by single-agent CoT; are there documented cases where multi-agent finds solutions no single agent finds; what task types show emergent multi-agent behavior; how is "emergent" distinguished from "additive" in controlled studies?

  Queries:
  - "emergent behavior multi-agent LLM novel reasoning not reachable single agent empirical"
  - "multi-agent debate emergence novel solution single-agent ceiling qualitative difference empirical"
  - "qualitative vs quantitative quality difference multi-agent single agent output empirical benchmark"
  - "emergent quality multi-agent collaboration novel reasoning mechanisms empirical study"
  - "site:arxiv.org emergent multi-agent LLM quality novel single-agent ceiling empirical 2024 2025"

## New angles surfaced — batch 4 (wave run 2026-07-05)
- **EVPI generalization to open-ended kit tasks: does structured schema assumption hold?** (P0): Whether action-counterfactual EVPI scoring (validated in SAGE-Agent for structured API schemas) generalizes to open-ended kit tasks (research synthesis, creative generation, document drafting) where the action space is continuous and multiple valid trajectories exist — or whether rubric-based / information-gain alternatives are strictly necessary for those task types. [grounding: arXiv search: 'EVPI clarification open-ended generation task ambiguous action space' + 'information gain clarification creative research task LLM 2025']
- **Reversibility taxonomy for kit-maker output types: empirical grounding for confirmation threshold** (P1): A grounded reversibility scale applicable to kit-maker output categories (in-memory state, file writes, external API calls, destructive operations, published artifacts) that operationalizes which intake questions require upfront confirmation vs can be corrected post-execution — closes the open kit design decision on confirmation thresholds. [grounding: arXiv:2603.03515 (Irreversibility Budget), arXiv:2602.15259 (epistemic commitment), arXiv:2605.14407 (Metis real options) + search: 'agent action reversibility classification taxonomy empirical 2025']
- **Claude Sonnet 4-class instruction-count ceiling: empirical threshold for kit behavioral compliance** (P1): The specific instruction-count threshold at which kit behavioral compliance degrades for Claude Sonnet 4.x class models — AGENTIF shows 14 constraints as a general average but does not break out by model family. This would close the kit design question on how many simultaneously active behavioral rules are safe to specify. [grounding: AGENTIF benchmark results for Claude Sonnet class models + arXiv:2509.21051 (When Instructions Multiply) + search: 'Claude Sonnet instruction following constraint count degradation 2025 2026']
- **Bounded predicate register vs full episodic store: which external intention architecture best supports kit step-tracking?** (P1): Which external state representation — bounded predicate list (CGDP style, K<=6), hierarchical task tree (TME style), or flat episodic log — produces the best step-completion tracking for multi-step kit execution, including which information fields (status, inputs, outputs, dependencies) must be externalized vs can stay in context. [grounding: arXiv:2605.07042 (CGDP K<=6 predicates), arXiv:2504.08525 (TME hierarchical tree), arXiv:2604.08224 (Externalization review) + search: 'agent step completion tracking external register architecture comparison 2025']
- **Omission-weighted quality metric: what weighting ratio is empirically justified?** (P2): The empirical ratio of omission-to-commission errors in LLM agent tasks (the paper establishes omission dominates but does not give a precise ratio) and whether a specific weighting multiplier (e.g., 2x, 3x) for omission in kit quality metrics is justified by the error distribution data. [grounding: arXiv:2606.09863 (From Confident Closing to Silent Failure) + search: 'omission commission error ratio LLM agent evaluation weighting benchmark 2025 2026']
- **Cross-task SHAP analysis: does error-information-first intake priority generalize beyond software tasks?** (P2): Whether the Ambig-SWE finding (Error Information SHAP=0.183 dominates) generalizes to non-software kit tasks (research, document generation, analysis). If the error-first priority is domain-specific, a different SHAP analysis is needed for kit-maker's primary task types before intake question templates can be finalized. [grounding: arXiv:2502.13069 (Ambig-SWE, SHAP 0.183/0.098/0.057/0.035) + search: 'SHAP question type task completion clarification agent non-software task 2025']
- **Intent-slot two-level intake hierarchy: empirical validation for LLM agents (not just task-oriented dialogue systems)** (P2): Whether the classical NLU finding (intent errors propagate more than slot errors) holds empirically for modern LLM agents on open-ended tasks, validating the two-level intake prioritization (intent/goal first, parameters second) for kit-maker intake question ordering. [grounding: Search: 'intent disambiguation slot filling LLM autonomous agent intake task completion 2025 2026' + ACL Anthology recent clarification papers]
- **Non-monotonic clarification overload: where is the task-type-specific 6-turn equivalent for kit-maker tasks?** (P3): Whether the 6-turn context pollution threshold generalizes across task types or is domain-specific, and what the equivalent threshold is for kit-maker task categories — needed to set the kit intake question budget limit as a concrete design parameter rather than an open variable. [grounding: arXiv:2606.03135 (>6 turns threshold) + search: 'clarification question budget threshold context pollution LLM task type 2025']
- **Reversibility annotation taxonomy for kit-maker tool schemas** (P0): A direct operationalization — a concrete label vocabulary (e.g., reversibility: none|soft|hard combined with consequence_domain: legal|financial|data|internal) grounded in three independent taxonomies that converge on the same underlying distinction. This closes the 'which outputs require upfront confirmation' decision without requiring runtime inference. [grounding: Which specific kit-maker output operations map to which reversibility tier when labeled at tool-design time, using the Parallax local/external split, WCAG domain categories, and mobile UI taxonomy as convergent classification axes?]
- **Two-factor gate empirical test: irreversibility x consequence magnitude vs single-factor** (P0): An empirical comparison of the two gate designs — either a controlled study in an agent evaluation environment or an ablation in a production system. Would determine whether consequence magnitude should be a required second condition or whether irreversibility alone is sufficient as a gate trigger. [grounding: Does the Anthropic minimal footprint two-factor gate (irreversible AND material consequence both required) produce lower over-confirmation rates and lower omission rates than a single-factor irreversibility-only gate in a kit-maker intake context?]
- **EVPI extension: reversibility as consequence multiplier for execution threshold** (P1): Either a published extension of the SAGE-Agent framework or an original derivation showing how the stopping criterion changes when the consequence term is reversibility-weighted. Both arXiv 2606.03135 and arXiv 2511.08798 explicitly identify this as unbuilt; this angle would produce the first principled integration of uncertainty-based clarification with reversibility-based confirmation. [grounding: Extending arXiv 2511.08798's POMDP clarification framework to model irreversibility as a multiplicative weight on the consequence term — raising tau_exec proportionally for irreversible outputs — and measuring impact on intake under-clarification rate for high-stakes irreversible actions.]
- **MCP tool-level reversibility annotation specification — current gap and minimal spec** (P1): Either a GitHub issue/PR in the MCP specification repository showing community discussion, or confirmation of the gap and an opportunity for original contribution. Practitioner blog confirms the gap exists; this angle establishes whether a community-level solution is emerging or whether kit-maker must build its own canonical vocabulary. [grounding: What minimal reversibility metadata schema in MCP tool definitions would allow orchestrators to apply confirmation policies without bespoke per-kit middleware, and what is the current state of any MCP spec roadmap discussion?]
- **Context-aware reversibility resolution: same action class, different storage backends** (P2): Either a framework for dynamic reversibility resolution based on storage backend properties (transaction support, versioning, access-control state), or evidence that this problem is unsolved and must be addressed through conservative static classification (treat all deletions as irreversible unless positively confirmed reversible). [grounding: How should a kit-maker resolve 'deleting from a git repo is reversible; deleting from unversioned S3 is not' — what environmental context signals at tool-call time determine true reversibility when the action class alone is ambiguous?]
- **Semantic instruction complexity units — degradation curves for conditional vs. keyword rules** (P0): Whether compliance degradation per instruction is steeper for conditional/semantic rules than for keyword-inclusion rules, enabling a 'weighted instruction count' budget (e.g., 1 conditional = 3 keyword slots). Current benchmarks use only simple verifiable constraints; real kit instructions are semantically complex. This closes the generalization gap flagged in the adversarial finding. [grounding: instruction count complexity budget — model-specific ceiling for behavioral compliance]
- **Reasoning-effort as budget multiplier — quantified expansion ceiling per model** (P0): Whether extended thinking / reasoning effort predictably multiplies the instruction budget ceiling (e.g., high-effort o3 sustains 3.7x more rules than GPT-4o at equivalent compliance) and whether there is a diminishing return point. Would directly answer: 'should the kit's deployment target a reasoning model to unlock a higher rule budget, and by how much?' [grounding: instruction count complexity budget — model-specific ceiling for behavioral compliance]
- **Instruction ordering and compliance — primacy bias at kit-relevant densities (5-20 rules)** (P1): Whether the primacy bias documented in IFScale (earlier rules survive degradation more than later ones) also holds at low rule counts (5-20) typical of agent kits. If so, kit instruction ordering is a first-class design decision: safety/behavioral rules must be placed first, not last. Current evidence only demonstrates the peak at 150-200 instructions. [grounding: instruction count complexity budget — model-specific ceiling for behavioral compliance]
- **Behavioral vs. declarative instruction taxonomy for compliance ceiling prediction** (P1): A taxonomy of instruction types by their compliance class (behavioral-action vs. declarative-output) with measured compliance rates per class. The Compliance Gap paper shows a 93pp difference between instruction types, but provides only two data points. A full taxonomy would let a kit designer classify each rule and predict which instructions will have near-zero compliance regardless of placement or count — directly informing the omission vs. commission failure ratio question. [grounding: omission vs. commission failure ratio — should kit quality metrics weight omission detection more heavily?]
- **Structural compliance interventions — quantified effect of instruction chunking, external registers, and tool restriction** (P2): Whether architectural interventions (structured constraint enumeration, external compliance registers, tool removal, checkpoint queries) quantifiably raise the per-model compliance ceiling above the logistic regression baseline. The Compliance Gap paper shows tool removal gives Cohen's d=2.47; no study compares all structural mitigations head-to-head. This grounds the external intention register design decision. [grounding: external intention register — in-context vs. external state for multi-step completion tracking]
- **KBV rate as kit quality signal — can output-behavioral audits detect the recall-adherence gap?** (P2): Whether automated behavioral auditing (running outputs against objective constraint checkers, not asking the model to restate rules) reliably detects KBV failures across the 8-99% range found in arXiv:2604.28031. If so, kit quality scoring should weight constraint-verified behavioral output checks more heavily than model self-reports — directly addressing the omission detection weighting question. [grounding: omission vs. commission failure ratio — should kit quality metrics weight omission detection more heavily?]
- **Write discipline failure rate for external registers** (P0): Empirical measurement of what fraction of LLM agent steps correctly update external state registers vs silently skip or miswrite; whether write failure rate is the primary cause of MemFail's null results across 6 frameworks; if write accuracy is below ~90%, external registers produce net-negative outcomes — this closes the most dangerous unknown in the external-register design decision [grounding: MemFail null results + SagaLLM write patterns + any study logging LLM tool-call omission rates]
- **Instruction count complexity threshold for external vs in-context** (P0): The specific step count or accumulated context size above which external register statistically outperforms in-context tracking; OdysseyBench data suggests ~10 steps / cross-domain boundary as a candidate threshold; directly closes the open 'instruction count complexity budget' kit design decision [grounding: Context-length degradation curve (arXiv:2510.05381) + OdysseyBench step-count data + Symbolic WM step-count ablations]
- **Task type classifier for register architecture pre-routing** (P1): An operationalizable binary classifier distinguishing exploration-heavy tasks (in-context sufficient, 50-57% token savings) from continuous-accumulation tasks (external required, +110% in-context overhead); usable as a pre-task routing gate in kit-maker before any pipeline step is executed [grounding: Active Compression exploration-vs-refinement taxonomy + Self-GC lifecycle categories + AsyncTool concurrent-vs-sequential findings]
- **Object lifecycle schema for task intention items** (P1): Which task intention properties (constraints, output handles, decision points, receipts, grounding values) require external sidecar storage vs can remain in-context; the minimal schema for a kit-maker external register that covers confirmed failures without over-engineering [grounding: Self-GC fold/mask/prune taxonomy + durable execution intent+receipt model + SagaLLM S_A/S_O/S_D dimensions]
- **Reversibility as grounding criterion for external confirmation gates** (P2): Which kit-maker outputs are irreversible (file writes, API calls, external effects) and should trigger an external confirmation record before execution; operationalizes the reversibility-as-grounding-criterion open design decision using the intent+receipt model [grounding: Durable execution idempotency model (Zylos) + SagaLLM dependency state S_D]
- **Schema rigidity penalty for emergent task structure** (P2): Whether pre-defined external register schemas cause harm when task structure is discovered during execution (forcing premature decomposition); whether schemaless or adaptive registers outperform fixed schemas for kit-maker tasks with open-ended discovery phases [grounding: MemFail structural inconsistency failure mode + active compression task-type findings]
- **Omission metric weight calibration — empirically derive optimal weight ratio** (P0): The weight ratio at which omission-weighted metrics best predict actual task completion; whether a single universal ratio applies or must be constraint-type-specific (soft/hard, requirement/prohibition) [grounding: Run kit evaluation experiments comparing unweighted CSR, recall-weighted CSR (2:1, 3:1, 5:1 omission:commission), and practitioner 10x critical-failure scheme against downstream task-success outcomes]
- **Negation reframing as kit-authoring intervention — does positive rewriting close the asymmetry gap** (P0): Whether the observed 5:1 to 34:1 omission:commission failure gap is partially an instruction-framing artifact rather than an inherent architectural asymmetry; this is the single cheapest intervention available before metric reweighting [grounding: arXiv:2601.08070, arXiv:2603.16417, SRD paper (2604.20911) — test whether rewriting all prohibition-type kit constraints as positive requirements reduces omission failure rate to commission failure rate]
- **KBV rate as model-selection criterion for constrained kit tasks** (P1): Which currently available model minimizes KBV under multi-turn iterative pressure; whether the 91-percentage-point KBV variance across models means model selection dominates metric weighting as a quality lever [grounding: DriftBench (arXiv:2604.28031) KBV rates: GPT-5.4 at 8% vs Sonnet-4.6 at 99% under identical conditions]
- **Placeholder/checklist injection as omission scaffold in kit output format** (P1): Whether a structural output format change (checklist header before prose) enables automated LLM-judge evaluation of omissions at usable accuracy (target: above 85% F1 vs current 69.6% baseline) [grounding: AbsenceBench (arXiv:2506.11440) finding that placeholder insertion improves omission detection by 35.7%; test whether requiring kit outputs to enumerate required elements as a structured checklist before free-text generation improves automated omission detection]
- **Session depth ceiling as kit session design parameter — model-specific STD budgets** (P1): Whether kit pipelines should chunk sessions at STD-derived turn/token limits with mandatory omission constraint re-injection, and what the operational cost of that chunking is vs the compliance benefit [grounding: SRD STD thresholds: Qwen 3.5 STD=7.1, Mistral Large 3 STD=10.6 (arXiv:2604.20911); convert to token budgets per deployment]
- **Context compaction audit — soft constraint survival through compaction events** (P2): Whether kit-specific soft organizational constraints survive context compaction in typical kit deployment patterns; whether explicit compaction-resistant encoding (e.g., constraint preamble before every context window refill) prevents the 8.3x gap [grounding: Governance Decay / ConstraintRot (arXiv:2606.22528); 30% pooled violation rate from 0% after compaction for soft policies]

  Priority: P2 — batch 4.

## New angles surfaced — batch 5 (wave run 2026-07-05)
- **Distributional EVPI via hypothesis sampling for open-ended preference tasks** (P0): Whether EIG computed over a distribution of sampled user-preference hypotheses (rather than against a fixed ground truth) is a tractable and reward-hacking-resistant clarification value estimator for creative and research synthesis kits. This directly closes the open kit design decision: does action-counterfactual apply to subjective tasks? BED-LLM applies this to structured preference inference; the gap is whether it generalizes to multi-dimensional creative quality where preferences cannot be enumerated as discrete hypotheses. [grounding: BED-LLM (arXiv:2508.21184) + structured preference-inference evaluation games]
- **Clarification timing window as a kit configuration variable** (P1): Concrete trajectory-percentage thresholds for clarification window by information type (goal: ask within first 10% of steps; input: ask within first 50%) that can be parameterized in kit schemas. The paper provides demand-side VOI curves for structured benchmarks; the gap is translating these into kit-design configuration parameters (e.g., max_clarification_step_fraction per tool type) and whether the thresholds hold for open-ended tasks or shift. [grounding: Ask Early Ask Late (arXiv:2605.07937) forced-injection VOI curves]
- **Contrastive trajectory scoring as reward-hacking-resistant quality signal for open-ended research synthesis** (P1): Whether contrastive trajectory scoring (comparing high-quality vs. low-quality outputs within a training group) provides a reward-hacking-resistant quality signal that can substitute for ground-truth-based EVPI in research synthesis kits. ARBOR achieves this for multi-hop QA; the gap is creative writing and design tasks where quality dimensions are not reducible to information coverage. Would determine whether the contrastive approach avoids the preference-circularity problem or merely shifts it. [grounding: ARBOR (arXiv:2606.03239) + DeepRubric (arXiv:2606.17029)]
- **Capability dilution budget allocation for clarification-seeking modules in fixed-token kits** (P2): Empirical thresholds for reasoning budget allocation between uncertainty assessment and task execution, as a function of task complexity. The documented capability dilution effect (clarification seeking reduces net task quality on complex benchmarks) means kit designs must explicitly budget the clarification module. Would find: at what context-length or task-complexity level does the break-even point shift from net-positive to net-negative for clarification-seeking overhead. [grounding: Uncertainty Decomposition paper (arXiv:2606.19559), REAL benchmark results (32.1% to 19.2% success rate loss)]
- **Rubric-absence criteria as a design requirement for open-ended kit rewards** (P2): Whether explicitly including absence/avoidance criteria in kit rubrics (what the output should NOT contain or do) reduces the reward hacking failure modes. The paper documents 90.2% presence-based criteria as the driver of length/density inflation; absence criteria are a straightforward fix. Would find: empirical validation that presence+absence rubric balance reduces partial-compound and imprecise-verification failures in open-ended task kits. [grounding: Reward hacking paper (arXiv:2605.12474) decomposition of failure modes by criteria type]
- **Write omission rate as isolated metric: how often do agents skip required write steps entirely** (P0): Baseline write omission frequency (agent should have written but did not) broken out from write quality failures (agent wrote but incorrectly) and retrieval failures; this is the direct operationalization of the angle but no paper yet isolates it; closest proxies are MAST FM-1.3 (step repetition, 17.14%) and FM-2.6 (reasoning-action mismatch, 13.98%); a benchmark instrumenting write tool calls vs required write calls per task step could close this [grounding: Write discipline failure rate open design decision — does the external register net-accuracy floor exist and where]
- **Mandatory checkpoint writes vs agent-discretionary writes: does fixed-interval write scheduling improve discipline** (P0): Whether replacing agent-discretionary write calls with mandatory post-step checkpoint writes improves end-to-end state accuracy; motivated directly by the latent state persistence finding (2505.10571) showing agents cannot reliably track when to write; analogue in distributed systems is write-ahead logging (mandatory) vs application-controlled commits (discretionary) [grounding: Kit mechanism design — should kit scaffold issue write checkpoints on a fixed schedule rather than relying on agent-discretionary write calls]
- **Post-write verification as write discipline enforcement: effect on false success rate** (P1): Whether mandatory post-write state verification (read-back the written value and confirm it matches intent) reduces false success rates; motivated by arXiv:2606.09863 showing agents terminate confidently without confirming external state changed; the mechanism to prevent it is a post-write read-back but no paper quantifies the benefit [grounding: Kit mechanism design — should kit scaffold include a post-write verification step after every state-modifying tool call]
- **Net-negative crossover: at what task step count does external register overhead exceed benefit** (P1): The task-step threshold where per-step write+read overhead (GDS units) crosses from neutral to negative, given the memory scaffold finding establishes the phenomenon at long horizon but not the exact crossover; practical kit design needs this to set a policy: use external registers for tasks above or below N steps [grounding: Write discipline failure rate open design decision — net accuracy vs in-context tracking and existence of a floor]
- **Structured vs open-ended task write discipline: does schema-enforced output format improve write compliance** (P1): Whether structured output schemas at write time (specifying exactly what fields to write) improve write omission rates vs open-ended write instructions; the behavioral consistency paper (2605.28840) found ambiguous tasks reduce argument consistency by 28%; extending this to write operations would directly answer whether structured schemas force write discipline that open-ended tasks do not [grounding: EVPI open-ended case — does action-counterfactual operationalization apply to open-ended tasks or only structured-schema tasks]
- **Reversibility annotation taxonomy from distributed systems tradition applied to LLM tool kits** (P2): Whether CQRS command/query separation, event sourcing append-only vs mutable patterns, and idempotency classification from distributed systems translate directly to a reversibility taxonomy for LLM agent tool schemas; the distributed systems tradition has fully solved the design-time classification problem for write operations; no paper bridges this to LLM agent kit schema annotation [grounding: Reversibility annotation taxonomy open design decision — what classification scheme should kit builders use]
- **Enforce annotation at registration vs. infer at runtime: calibration dataset for kit tool reversibility** (P0): Whether Contract2Tool-style learned contracts (from tool documentation + execution traces) can automatically infer reversibility tier with sufficient accuracy to replace mandatory design-time annotation. Specifically: what sample size of execution traces is needed per tool before inferred annotations reach 90%+ accuracy on reversibility tier? This closes the design decision of whether kit builders must manually annotate every tool or whether annotation inference from traces is viable as the primary path. [grounding: EVPI open-ended case and reversibility annotation taxonomy open decision]
- **Compensation-link annotation: annotating tools with their compensating operation pointer** (P0): Whether existing agent frameworks (LangGraph, AutoGen, CrewAI, Semantic Kernel) have implemented a compensating-operation pointer in their tool schemas — a field that identifies which tool call undoes the current one. This is the saga-pattern approach applied to tool registration and is more operationally useful than a reversibility score alone. Would also find whether kits that implement compensating-operation pointers show measurably lower irreversible-action error rates. [grounding: Reversibility annotation taxonomy: what classification scheme should kit builders use]
- **Annotation staleness: how often do static reversibility annotations become incorrect after system changes** (P1): Empirical data on annotation drift — how often a tool annotated as reversible at design time becomes irreversible after downstream system changes (e.g., recycle bin removed, recall window eliminated, third-party API changes). This closes the open question about whether design-time annotation accuracy degrades enough to make it net-negative relative to runtime context checking. [grounding: Write discipline failure rate open decision (external register accuracy floor)]
- **Annotation enforcement architecture: required-field validation vs. trusted-server model** (P1): Whether kit harnesses that enforce annotations at registration time (schema validation: tool cannot be registered without all required annotation fields populated) outperform hint-based approaches (MCP default) in annotation completeness and accuracy. Would also find whether the 'trusted server' model in MCP is operationally viable for kit ecosystems, or whether kit-level enforcement is necessary. [grounding: Reversibility annotation taxonomy: practical implementation for kit builders]
- **Multi-dimension interaction effects: when reversibility and scope interact to change the approval gate** (P2): Whether reversibility + scope + idempotency + openWorld are truly independent dimensions or whether specific combinations create emergent risk that a single-dimension annotation misses (e.g., an idempotent+irreversible+narrow-scope tool requiring different gating than an idempotent+irreversible+broad-scope tool). Would ground the choice between a multi-field annotation schema vs. a computed risk score. [grounding: Reversibility annotation taxonomy: what dimensions are necessary and sufficient]

## New angles surfaced — INT-10 post-trial (2026-07-06): Expert search cognition gap

The INT-10 user review identified that Angle 162 + GH-01 cover the **mechanical layer** of search (operator syntax, source calibration, API endpoints) but not the **cognitive layer** — how expert researchers/programmers think about queries, acquire vocabulary in unfamiliar domains, and diagnose failure from result quality. This layer is upstream of all operator guidance: if you use the wrong word, no operator knowledge helps. Three angles address this gap.

- 178. [P1] Expert search cognition and query vocabulary acquisition — the tacit expertise that separates a skilled programmer's searches from a novice's: how to choose initial terms before knowing the field vocabulary, how to bootstrap vocabulary from the first few results, how to recognize that your search words are wrong vs. your operators are wrong, when to pivot strategies entirely. Includes the seed-paper method as a systematic vocabulary acquisition technique. Priority: P1 — upstream of all query operator guidance; a search with correct syntax but wrong vocabulary finds nothing. Connects to angle 170 (vocabulary-frame enumeration) but is distinct: 170 addresses pre-search enumeration; 178 addresses runtime vocabulary acquisition when you don't already know the vocabulary.

  Queries:
  - "expert searcher information seeking behavior query formulation vocabulary acquisition empirical study"
  - "novice expert difference search query formulation domain vocabulary knowledge empirical"
  - "query reformulation strategies recognition failure vocabulary mismatch information seeking empirical"
  - "seed paper method vocabulary bootstrapping unfamiliar domain search strategy systematic review"
  - "site:arxiv.org OR site:github.com expert search cognition query vocabulary unknown domain practitioner"

- 179. [P1] Query composition strategy — the reasoning behind which concepts to include in a query, AND vs OR logic selection, specificity calibration (when to start broad vs narrow), diagnosing over-constrained queries from near-zero results vs under-constrained from noise, how many operators is too many, the progressive narrowing loop. This is the decision layer between "I have a concept I want to find" and "I have a string to type in a search box." Priority: P1 — directly determines whether GH-01's operator knowledge gets applied correctly; operator knowledge without composition strategy produces syntactically correct but structurally wrong queries.

  Queries:
  - "Boolean query composition AND OR NOT strategy information retrieval precision recall tradeoff empirical"
  - "query specificity calibration broad to narrow search strategy information retrieval effectiveness empirical"
  - "over-constrained query diagnosis zero results operator budget information seeking empirical study"
  - "query concept selection how many terms constraints recall precision information retrieval empirical"
  - "site:arxiv.org query formulation composition strategy practitioner programmer tacit knowledge empirical"

- 180. [P2] GitHub as a deep research tool — code search vs repo search (different tools, different results), searching GitHub Issues and Discussions for real-world failure modes and limitations (issue archaeology), using pull request history to understand design decisions, contributor and fork graph analysis to find related projects, reading README evolution across time, finding actual usage examples in the wild vs curated demos. Priority: P2 — extends GH-01 which covered repo-level discovery; this angle covers the investigative layer (what GitHub contains besides repositories). Particularly valuable for finding evidence of how agents behave in real deployments — GitHub issues often contain ground-truth failure reports that no paper documents.

  Queries:
  - "GitHub advanced search code search vs repository search techniques practitioner research discovery"
  - "GitHub issues search failure modes limitations real-world evidence extraction practitioner guide"
  - "site:github.com search issues discussions archaeology failure modes agent deployment evidence"
  - "GitHub fork contributor graph analysis related repository discovery research methodology"
  - "GitHub pull request history design decision rationale research reverse engineering practitioner"

## New angles surfaced — SYNTH-03 PCR (2026-07-05)
- **Bounded vs unbounded external register architecture: head-to-head comparison on long-horizon tasks** (P1): Whether the positive/negative outcome split between OdysseyBench (bounded K≤6 predicate register, HIGH: step omission 75%→45.61%) and arXiv:2603.29231 (unbounded add_to_memory() scratchpad, HIGH: hurt 6/10 models) is specifically explained by the bounded/unbounded architectural distinction, or whether other confounds (task type, model family, task length, write accuracy) account for the difference. SYNTH-03 resolved this contradiction by inferring the architectural explanation from mechanism alignment (the negative-outcome mechanism requires register growth AND full injection per turn; a bounded register violates condition 1); this angle would provide direct empirical confirmation. Required to upgrade grounding-map.md row 15 from 🔬 SYNTHESIZED (PROVISIONAL) to ✅ VALIDATED. [grounding: Flip trigger from SYNTH-03 — search: 'bounded predicate register unbounded scratchpad long-horizon agent comparison external memory architecture 2025 2026' + 'structured external state fixed schema vs free-text memory LLM agent task completion ablation' + arXiv:2506.06780 (OdysseyBench citing papers) + arXiv:2603.29231 (citing papers and follow-up work); adversarial: does write accuracy confound explain the OdysseyBench positive result independent of bounded architecture?]
- **HCI commensurate effort empirical validation: does gate friction proportional to reversibility reduce agent errors** (P2): Whether the HCI Commensurate Effort Principle (invocation friction should be proportional to reversal difficulty) has been empirically tested in agent contexts. Specifically: do confirmation dialogs proportional to reversibility tier reduce the rate of irreversible-action errors without increasing task abandonment beyond an acceptable threshold? [grounding: Reversibility annotation taxonomy: gate friction mapping]

## New angle — INT-10 post-trial (2026-07-06)
- **Cross-tradition conditioning effectiveness in non-LLM domains: does domain-vocabulary baseline determine kit differential?** [P0 — pre-INT-11 requirement]: INT-10 (2026-07-06) triggered FM4: Condition A (no kit) scored Q1=3 on LLM/AI research topic — same as maximum kit score. Cross-tradition conditioning produced near-zero differential. Proposed explanation: frontier models have strong prior vocabulary coverage for heavily-represented training domains (LLM/AI research); coverage-gap conditioning adds marginal signal because the model already enumerates traditions via general intelligence. The kit's Weakness 7 scope condition is: this gap applies most acutely to cross-disciplinary topics spanning fields underrepresented in LLM training data. This angle tests whether the FM4 explanation is correct and whether the kit's differential is preserved on underrepresented domains (e.g., niche scientific fields, specialist industrial domains, emerging interdisciplinary topics not well-represented in LLM training). Required before INT-11 to determine whether the test topic for INT-11 should be chosen from an underrepresented domain. [Grounding: vocabulary-mismatch HIGH (G1, Furnas 1987), CCQGen (WSDM 2025 — G8, facet coverage within tradition); gap is between-tradition coverage on low-representation domains. Search: 'coverage gap conditioning LLM vocabulary tradition domain familiarity differential empirical' + 'LLM domain knowledge baseline coverage-gap prompting effectiveness underrepresented domain empirical' + 'prompt conditioning effectiveness LLM unfamiliar domain vocabulary enumeration empirical comparison']

## New angles surfaced — SYNTH-04 PCR (2026-07-05)
- **PCR-S04-A1: Two-axis annotation comparison — consequence-type × domain-type gate calibration accuracy** (P1): Whether a two-axis annotation scheme (consequence type: reversible/recoverable × domain type: legal/financial/user-data) achieves higher gate calibration accuracy than either axis alone. R-Judge's 10-type taxonomy establishes consequence type and domain type are orthogonal; the WCAG domain-category shortcut uses only domain; gap is whether adding consequence type as a separate axis reduces mis-classification of innocuous-domain/irreversible-consequence tool calls. [grounding: misc GAP group — rjudge-10type-taxonomy-empirical; WCAG domain shortcut — search: 'reversibility annotation two-axis classification consequence-type domain-type LLM agent tool schema accuracy 2025 2026']
- **PCR-S04-A2: Reversibility-weighted EVPI extension — enriching uncertainty-based clarification with consequence terms** (P2): Whether extending EVPI/PMI clarification criteria with a reversibility-weighted consequence term (as flagged by when-to-clarify source papers as "unbuilt") achieves comparable gate coverage to a separate reversibility structural gate, with lower pipeline complexity. The `when-to-clarify` counter-prior identified this as an open research direction equally consistent with the three convergent empirical studies; the architectural choice (separate gate vs. enriched EVPI) cannot be resolved without a head-to-head test. [grounding: arXiv:2511.08798 (explicitly names reversibility-weighted EVPI as P1 research gap); search: 'EVPI reversibility-weighted consequence term clarification gate LLM agent 2025 2026']
- **PCR-S04-A3: MCP protocol-level approval primitive — status and timeline** (P2): Whether MCP has added or roadmapped a protocol-level blocking or approval primitive since mid-2025 when `mcp-no-standardized-approval-primitives` was the ground truth. If added: assess whether it implements structural blocking (hard-blocks execution) or advisory warning (can be bypassed), and whether it closes the kit bespoke-middleware requirement. [grounding: mcp-no-standardized-approval-primitives (batch 5, anecdote, mid-2025 snapshot) — search: 'MCP model context protocol approval confirmation blocking primitive 2025 2026 specification']
- **PCR-S04-A4: Confirmation volume empirical validation — the 10-15% target** (P1): Whether the 10-15% HITL confirmation volume target (cited as directionally plausible from practitioner guidance in confirmation-gate-design group) has empirical grounding in agent-HITL contexts. The claim's source was unverified; a separate study grounding this threshold for LLM agent pipelines would upgrade the confirmation-gate-design group from CONSENSUS to at least MEDIUM empirical, and directly informs kit gate calibration decisions. [grounding: confirmation-fatigue-override-rates (batch 5, medium empirical) — search: 'human-in-the-loop confirmation rate sustainable threshold LLM agent pipeline 2025 2026 empirical']
