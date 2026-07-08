# Synthesis Target: Angles 59–63 — Writing Behavioral Kit Rules

**Purpose:** Pre-planned synthesis structure for the five prompt engineering / rule-writing angles. These are the most foundational research cluster — every kit rule written in Phase 6 will be evaluated against what this synthesis produces. Without this target, synthesis agents will group sparse findings and stall with no model to build toward.

**When to use:** Phase 4 SYNTHESIS after angles 59-63 have been researched. Read before touching archive files.

**Expected research character:** Mostly `consensus` and `anecdote`. Controlled empirical studies on behavioral rule compliance in Claude specifically are rare or nonexistent. Do NOT treat consensus-heavy findings as failure — this is an honest picture of the field. Build the model from what exists; flag what needs empirical confirmation; don't withhold guidance pending evidence that may not yet exist.

---

## The question this synthesis must answer

Every rule written for the kit-maker (and every kit the kit-maker produces) will be expressed as text in a file. The quality of that text determines whether Claude follows the rule reliably. This synthesis must produce:

1. **A rule pattern typology** — what structural forms produce reliable compliance vs unreliable compliance?
2. **An anti-pattern register** — what makes a rule ambiguous to Claude even when it reads clearly to humans?
3. **A rule-writing specification** — the concrete writing guidance that becomes a kit procedure (or an auditor checklist item)

---

## Synthesis structure

### Table 1 — Rule pattern typology

For each pattern form identified across the five angles:

| Pattern | Form example | Reliability verdict | When this works | When this fails | Confidence tier | Source angles |
|---------|-------------|--------------------|-----------------|-----------------|--------------------|---------------|
| Hard prohibition | "NEVER do X" | ? | ? | ? | ? | 60 |
| Positive constraint | "Only do Y" | ? | ? | ? | ? | 60 |
| Conditional skip | "Skip X when Z" | ? | ? | ? | ? | 60, 61 |
| Explicit hierarchy | "Rule A overrides Rule B when C" | ? | ? | ? | ? | 61 |
| Decision sequence | "First check X; if X then Y; else Z" | ? | ? | ? | ? | 61, 63 |
| Specific rule | "Generate exactly 3 alternatives" | ? | ? | ? | ? | 62 |
| General rule | "Generate alternatives" | ? | ? | ? | ? | 62 |
| Sequential process step | "After any first-pass output, do X before proceeding" | ? | ? | ? | ? | 63 |
| Named phase gate | "Before Phase N begins: answer these questions in writing" | ? | ? | ? | ? | 63 |

Fill reliability verdict and scope conditions from research findings.

---

### Table 2 — Anti-pattern register (what makes rules ambiguous to Claude)

Sources: angle 59 (what makes a rule ambiguous even when clear to humans), angle 60 (negation failures), angle 61 (hierarchy failures), angle 62 (over-specificity and over-generality failures), angle 63 (process breakdown patterns).

| Anti-pattern | What it looks like | Why Claude misapplies it | Fix | Confidence |
|--------------|--------------------|--------------------------|-----|------------|
| Soft language | "try to", "prefer", "consider" | ? | ? | ? |
| Missing negative rule | Rule says what to do; doesn't say what NOT to do | ? | ? | ? |
| Producer-context leakage | Rule assumes producer's mental model is available | ? | ? | ? |
| Untestable done criterion | "Is complete", "is good", "is appropriate" | ? | ? | ? |
| Ambiguous scope | Rule applies in some situations but doesn't say which | ? | ? | ? |
| Hierarchy without priority | Multiple rules apply; no precedence stated | ? | ? | ? |
| Over-generalized process step | "Review your work" with no structure | ? | ? | ? |
| Over-specified rule | Rule names a specific instance; Claude doesn't generalize | ? | ? | ? |

Fill from research. Add rows if research surfaces other anti-patterns not listed.

**Note:** Table 2 feeds directly into `scripts/verify_prompt.md` — the 10-point checklist there should be validated against these findings. If research contradicts a checklist item, update the checklist. If research adds a new class of ambiguity not in the checklist, add it.

---

### Table 3 — Rule-writing specification candidates

For each pattern or anti-pattern where findings are HIGH or CONSENSUS confidence:

| Writing rule | Rationale (from research) | Applies to | Already in kit? |
|-------------|---------------------------|------------|-----------------|
| Replace "try to" with the specific behavior | ? | All rules | Check verify_prompt.md |
| Pair every positive rule with its explicit negative | ? | Rules with scope boundaries | Check verify_prompt.md |
| State scope conditions inline, not by reference | ? | Conditional rules | ? |
| Use if/then/else for decision hierarchies | ? | Conflicting rules | ? |
| Name the gate explicitly before sequential steps | ? | Process/workflow rules | ? |
| ... | | | |

**"Already in kit?" check:** Before adding anything to Table 3, grep the existing kit files. If the rule is already in `scripts/verify_prompt.md` or `kit-maker/CLAUDE.md`, note it — the synthesis validates existing rules rather than duplicating them.

---

### Pre-identified contradiction pairs

These are likely contradictions within the 59-63 cluster. Resolve with scope-explanation test before finalizing Table 1.

1. **Specificity vs generality (angles 59 and 62):**
   Angle 59 may produce findings that more specific rules = more reliable compliance. Angle 62 may produce findings that overly specific rules miss edge cases. These aren't necessarily contradictions — scope condition expected: specific rules are more reliable within their stated scope; general rules are more reliable across unanticipated situations. The synthesis must resolve where this line is or flag as CONTESTED.

2. **Negative rules vs conditional rules (angles 60 and 61):**
   "Do NOT do X" (angle 60) and "Skip X when Z" (angle 61) may surface conflicting guidance. "Do NOT" is an absolute prohibition; "Skip when Z" is conditional. Research may show one is more reliable. If findings conflict: scope condition expected by use case (absolute prohibitions for hard invariants; conditionals for process steps).

3. **Process guidance vs atomic rule guidance (angle 63 vs 59-62):**
   Sequential process instructions ("do X, then Y, then check Z") may need structurally different design than atomic rules ("never do X"). If research confirms these are distinct: they should produce separate sections in the rule-writing specification, not a unified set of principles.

---

### What this synthesis is NOT producing

- A universal theory of LLM instruction following — scope is behavioral kit rules, not classification prompts, not generation tasks
- Empirical confidence claims where the research found only consensus — claims without empirical backing get CONSENSUS tier, not HIGH, even if practitioners widely agree
- Rules about how to test rule compliance (that's angles 22-24)

---

### Gap handling

Angles 59-63 may return large null-result sections — no controlled research found on certain questions. If gaps appear:

- "How to write behavioral rules" with no empirical grounding → flag as GAP in confidence map; note that the best current guidance is practitioner consensus from CLAUDE.md examples and Anthropic documentation
- "Negative vs positive rule formulation" with no resolution → flag as CONTESTED; write one of each in the kit and note the open question in weakness_register.md
- "Process/workflow vs atomic rule design" with no distinct findings → merge into unified guidance; flag as provisional pending future research

**The weakness_register.md entry for this cluster must say explicitly:** kit rules are currently written on practitioner consensus, not empirical evidence. This is the honest state of the field. If future empirical research contradicts current guidance, the flip trigger is: any controlled study with n>50 showing a different pattern produces higher compliance should trigger a full rule-writing procedure revision.

---

## Expected synthesis output file

`research_archive/synthesis-rule-writing.md` containing:
- Table 1 filled (rule pattern typology with reliability verdicts)
- Table 2 filled (anti-pattern register)
- Table 3 filled (rule-writing specification candidates, checked against existing kit files)
- Contradiction pairs resolved or flagged CONTESTED
- GAP section naming what research couldn't answer
- Confidence map classification: expected mostly CONSENSUS, some GAP, few HIGH

This file is the direct input to two downstream steps:
1. Phase 5 PLAN — which rule-writing procedures to build
2. `scripts/verify_prompt.md` revision — validate 10-point checklist against research findings
