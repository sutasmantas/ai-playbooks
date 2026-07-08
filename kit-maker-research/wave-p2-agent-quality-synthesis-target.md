# Synthesis Target: Angles 136–142 — Agent Quality Mechanisms

**Purpose:** Pre-planned synthesis structure for seven agent quality mechanism angles: self-review, productive iteration, persona-based prompting, calibrated skepticism, steelmanning, genuine alternatives selection, and brainstorming methodology. These are P2 because they improve existing kit procedures rather than fixing known structural failures.

**When to use:** Phase 4 SYNTHESIS after angles 136–142 have been researched. Read before touching archive files. Run AFTER P1 synthesis — P1 findings on behavioral rules (angles 59–63) directly constrain how these mechanisms should be implemented.

**Expected research character:** Mix of empirical and consensus. Angles 136 (self-review) and 137 (iteration) have emerging empirical literature from LLM evaluation research. Angles 138 (persona), 139 (skepticism), 140 (steelmanning), 141 (alternatives) are mostly consensus and practitioner reports with some adjacent empirical (confirmation bias, devil's advocate research from organizational psychology). Angle 142 (brainstorming) has empirical literature on brainstorming methodology from cognitive science; the LLM-specific slice is newer.

---

## The question this synthesis must answer

Seven mechanisms that could improve agent output quality. For each, synthesis must determine:

1. **What is the specific failure mode this mechanism prevents?** (not the mechanism itself — the output problem it solves)
2. **Does structural implementation (explicit step/instruction) outperform "use judgment"?** (the threshold for adding a kit step)
3. **What is the implementation form — kit procedure step, CLAUDE.md principle, auditor checklist item, or optional technique?**

The output of this synthesis is a prioritized set of implementation recommendations — not a survey of all seven.

---

## Synthesis structure

### Table 1 — Quality mechanism implementation recommendations

| Mechanism | Failure mode it prevents | Evidence for structural > judgment | Recommended form | Priority | Confidence |
|-----------|--------------------------|-----------------------------------|------------------|----------|------------|
| 136: Agent self-review | Rubber-stamping first-pass output | ? | ? | ? | ? |
| 137: Productive iteration | Thrashing — different output, not better output | ? | ? | ? | ? |
| 138: Persona-based prompting | Single-perspective blind spot | ? | ? | ? | ? |
| 139: Calibrated skepticism | Overcautious or undercautious critique | ? | ? | ? | ? |
| 140: Steelmanning | Strawman alternatives — performative rather than genuine | ? | ? | ? | ? |
| 141: Genuine alternatives selection | First-option anchoring — alternatives generated to confirm original | ? | ? | ? | ? |
| 142: Brainstorming methodology | Semantic locality — LLM stays in adjacent solution space | ? | ? | ? | ? |

Fill from research. For "Recommended form," use: PROCEDURE STEP, CLAUDE.MD PRINCIPLE, AUDITOR ITEM, OPTIONAL TECHNIQUE, or SKIP (evidence insufficient).

---

### Table 2 — Interaction with existing kit procedures

Map each EMBED-recommended mechanism to the existing procedure it should modify:

| Mechanism | Existing procedure | Modification type | Where in procedure |
|-----------|-------------------|-------------------|-------------------|
| 136: Self-review | verify_prompt.md | Add self-review step before dispatching auditors | After first draft, before auditor dispatch |
| 140: Steelmanning | alternatives-generation.md | Step 2b already added (this session) — validate against research | Step 2b |
| 141: Alternatives selection | alternatives-generation.md | Add commitment step before evaluation | After alternatives generated, before selecting |
| 137: Productive iteration | Phase 7 fix loop (ENTRYPOINT) | Add thrashing check: compare current vs. previous on explicit criteria | Per auditor round |

Add rows from research. This table becomes the change manifest for Phase 6 procedure updates after Wave 2.

---

### Table 3 — Mechanism failure signatures

For each mechanism, the detectable pattern when it's absent or failing silently:

| Mechanism | Silent failure pattern |
|-----------|----------------------|
| 136: Self-review | Agent produces identical conclusion on review pass as on first pass; no self-correction |
| 137: Iteration | Each revision changes surface phrasing; structural finding count doesn't change |
| 138: Persona | All review comments share the same concern class (e.g., all correctness, no security) |
| 139: Skepticism | Agent never rates a finding as YELLOW or CONTESTABLE; everything is BLOCKING or INFO |
| 140: Steelmanning | Rejected alternatives have no "where it would have won" dimension; strawman signatures present |
| 141: Genuine selection | Alternative chosen is always the one stated first in the prompt |
| 142: Brainstorming | All generated alternatives are variations of one structural approach |

Table 3 feeds into: auditor checklist in `scripts/verify_prompt.md` (add failure signatures as check items for mechanism-related procedures).

---

### Angles 140–141 — Already partially implemented (validate, don't duplicate)

The steelmanning mechanism (angle 140) and genuine alternatives selection (angle 141) have already been added to `procedures/alternatives-generation.md` this session. The purpose of these angles is to **validate** whether those additions are well-calibrated, not to add new steps:

- If research confirms that explicit steelmanning instruction changes which alternative is selected → validate current implementation
- If research shows current implementation is missing a specific element (e.g., no commitment step before evaluation) → add it
- If research contradicts the current approach → revise it; document the conflict and the resolution

The synthesizer must read `procedures/alternatives-generation.md` Step 2b before synthesizing angles 140–141. Do not re-add steps that already exist — validate or revise them.

---

### Confidence calibration for this cluster

**Most likely to return EMBED:** 136 (self-review has empirical backing), 137 (iteration quality detection has some empirical basis), 140/141 (confirmation bias literature is robust; extrapolation to alternatives-generation is reasonable).

**Most likely to return OPTIONAL or SKIP:** 138 (persona prompting effect on quality vs. style is contested), 142 (brainstorming methodology in LLM contexts has weak empirical grounding so far).

**Most uncertain:** 139 (calibration without feedback loops is hard; mechanism may work in one direction but overcorrect in the other).

Do not force EMBED on thin evidence. OPTIONAL means: implement if the cost is low (a sentence in CLAUDE.md) but don't build a procedure around it. SKIP means: evidence too weak or counterindicated — document as "researched, not implemented, reasons below."

---

### Expected synthesis output file

`research_archive/synthesis-agent-quality.md` containing:

- Table 1 filled (implementation verdict for each mechanism)
- Table 2 filled (change manifest for existing procedures)
- Table 3 filled (failure signatures)
- Validation verdict for alternatives-generation.md Step 2b (angles 140–141)
- SKIP rationale for any mechanism not recommended for embedding
- Confidence map: HIGH / CONSENSUS / CONTESTED / GAP per mechanism
