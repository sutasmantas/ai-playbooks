# Synthesis Target: Angle 119 — Goal-Directed Advisor Behavior in Generated Kits

**Purpose:** Pre-planned synthesis structure for angle 119. Every kit the kit-maker produces must include goal-directed advisor behavior — the agent drives toward the goal, surfaces problems proactively, generates the next step after every task without waiting. This synthesis determines what the minimal reliable implementation of that requirement looks like across domains.

**When to use:** Phase 4 SYNTHESIS after angle 119 has been researched.

**Downstream wiring:** Findings feed into two places:
1. **Phase 6 BUILD** — every kit must include a behavioral contract file; this synthesis specifies what that file must contain at minimum
2. **ENTRYPOINT Hard Rule 13** — validate that the rule's required elements are confirmed by research, or update the rule if research finds a better formulation

**Relationship to angles 81-87:** Angles 81-87 (goal-directed agency — theoretical) are P3 and will run later. This angle (119) is practical: what specific text produces the behavior, not why it works. Build on what exists; don't wait for 81-87 before drawing practical conclusions.

---

## The question this synthesis must answer

The goal the user stated (from design_log.md Goal Model):
- **Gold standard:** perfect results with as little correction and feedback from the user as possible
- **Agent owns:** process control, next-step generation, problem identification, research, agenda-setting
- **User owns:** scope decisions, contested judgment calls, approval of major architectural choices, final output validation

Every kit produced by the kit-maker must encode this into the agent that uses it. The synthesis must answer:

1. **What is the minimal file set** that reliably produces goal-directed advisor behavior in a domain kit?
2. **What wording** in that file produces reliable compliance — what patterns work, what patterns decay?
3. **What must be domain-specific** vs what is universal across all kits?

---

## Synthesis structure

### Table 1 — Behavioral contract element inventory

For each element of the behavioral contract required by ENTRYPOINT Rule 13:

| Element | Required wording pattern | Evidence that this wording works | Domain-specific variation needed? | Decay risk |
|---------|------------------------|----------------------------------|----------------------------------|-----------|
| Gold standard statement | "Perfect results with as little correction and feedback as possible. Agent drives toward the goal; user validates and makes judgment calls only." | ? | Minimal — rephrase domain noun only | ? |
| Delegation model — agent owns | Explicit list: process control, next-step generation, problem identification, agenda-setting | ? | Yes — domain-specific agenda items | ? |
| Delegation model — user owns | Explicit list: scope decisions, contested judgment calls, final validation | ? | Minimal | ? |
| After-every-task rule | "After completing ANY task: name the next obstacle, propose the next step, proceed unless redirected. Going silent is a violation." | ? | No — universal | ? |
| Proactive surfacing rule | "If you see something wrong, broken, missing, or inconsistent — say so without being asked." | ? | No — universal | ? |
| Behavioral contract decay warning | Explicit named failure mode: agent will revert to task-executor; check and correct | ? | No — universal | ? |

Fill evidence and decay risk from research. "Decay risk" = how likely this element is to erode after a few turns.

---

### Table 2 — Minimal file set options

Research may surface multiple viable implementations. For each:

| Option | File(s) required | Where it loads | Reliability verdict | Overhead |
|--------|-----------------|----------------|---------------------|---------|
| CLAUDE.md in kit root | One file, always loaded by environment | Automatic — every session | ? | Minimal |
| System prompt injection | Caller injects at session start | Manual — requires caller discipline | ? | Requires caller discipline |
| ENTRYPOINT preamble | First section of kit ENTRYPOINT | Loaded when agent reads ENTRYPOINT | ? | Only loads if agent reads ENTRYPOINT first |
| Distributed per-file | Each kit file repeats key rules inline | Every file load | ? | High maintenance burden |

Fill reliability verdict from research. Expected finding: CLAUDE.md (automatic environment loading) is most reliable because it removes the dependency on the agent choosing to read it. If research contradicts this: update.

---

### Table 3 — Domain-specific wording adaptations

The behavioral contract structure is universal; the domain nouns are not. For each domain type:

| Domain type | How "goal" is stated | How "agenda-setting" is stated | How "next obstacle" is stated |
|-------------|---------------------|-------------------------------|------------------------------|
| Creative writing kit | "Produce the best possible draft with minimal rounds of feedback" | "Surface what the story needs next — structural gaps, character inconsistencies, pacing problems" | "Name the next craft problem you see" |
| Research kit | "Find what the user couldn't find themselves, to saturation, with honest gaps" | "Generate the next research angle based on what was found" | "Name what this finding suggests to look at next" |
| Code review kit | "Catch every class of problem before it reaches production" | "Name what pattern this bug belongs to and scan for other instances" | "Name the next risk area after this finding" |
| [Domain from Phase 2 intake] | Fill from domain brief | Fill from domain brief | Fill from domain brief |

This table is a template for Phase 6 — the kit-maker agent fills in the domain-specific column during BUILD. Phase 6 should generate the behavioral contract file using this as a guide.

---

### Table 4 — Decay resistance mechanisms

Behavioral contract decay is a named failure mode (design_log.md pitfall_register entry, count: 2). Research may surface mechanisms that make the contract more resistant to decay:

| Mechanism | What it does | Evidence of effectiveness | Currently in kit-maker's own CLAUDE.md? |
|-----------|-------------|--------------------------|----------------------------------------|
| Explicit decay warning in contract | Names the failure mode so the agent can self-correct | ? | Yes |
| After-every-response checklist | "Did I complete the goal or just the task? Did I surface anything unsolicited?" | ? | Yes (CLAUDE.md) |
| Hard rule framing ("violation") vs soft framing ("try to") | Hard framing produces more consistent compliance | ? | Yes |
| Environmental loading (CLAUDE.md vs inline) | File loaded automatically vs only if read | ? | Yes |
| Concrete examples of violation | "Going silent after task completion is a violation" | ? | Yes |
| ? | ? | ? | ? |

Fill evidence from research. If research finds a mechanism NOT currently in the kit-maker's own CLAUDE.md that is HIGH confidence: add it to CLAUDE.md immediately as a kit update.

---

### Contradiction pairs to watch

1. **Minimal file set vs comprehensiveness:** Research may find that shorter behavioral contracts decay less (easier to load, easier to hold in context) but cover fewer cases. Current CLAUDE.md is ~45 lines — is that the right length? If research finds a size threshold: enforce it.

2. **Universal wording vs domain-specific wording:** A fully generic contract may not feel relevant to domain-specific agents ("name the next obstacle toward the goal" — what goal?). Domain-specific wording may be more compelling but adds authoring overhead. Expected resolution: universal structure + one domain-specific sentence that names the actual goal.

3. **Explicit decay warning vs self-fulfilling prophecy:** Telling the agent "you will tend to revert to task-executor mode" — does this help the agent catch itself, or does it prime the failure? Research on this is likely sparse. If no evidence found: keep the warning (current approach); flag as provisional.

---

## Phase 6 BUILD consequence

When Phase 6 builds a domain kit, the behavioral contract file is built FIRST — before any domain-specific skills or procedures. Reason: the behavioral contract governs how the agent using the kit approaches every other file it reads. Building it last means the agent's behavior during Phase 6 BUILD isn't shaped by the contract it will eventually have.

This is an ordering rule for Phase 6's riskiest-first manifest: behavioral contract = file #1, regardless of domain.

Add this to plan.md during Phase 5 PLAN: "Behavioral contract file is always the first file built in Phase 6."

---

## Expected synthesis output file

`research_archive/synthesis-advisor-behavior.md` containing:
- Table 1 filled (behavioral contract element inventory with evidence)
- Table 2 filled (minimal file set options with reliability verdicts)
- Table 3 (domain adaptation template — partially filled from research, rest filled during Phase 6)
- Table 4 filled (decay resistance mechanisms)
- Contradiction pairs resolved or flagged
- Null results (what research found no evidence on)
- ENTRYPOINT Rule 13 validation: does research confirm every required element, or should the rule be revised?

**Immediately after synthesis:** If Table 2 confirms CLAUDE.md is the reliable implementation: no change needed. If Table 4 surfaces a new decay-resistance mechanism: update kit-maker's own CLAUDE.md. If Rule 13's required elements are contradicted by research: update Rule 13.
