# Synthesis Target: Angles 98–107 — Human Problem Solving

**Purpose:** Pre-planned synthesis structure for the 10 human problem-solving angles. Without this, the 10 archive files sit separately with no integration target. This document defines the model the synthesis should build.

**When to use:** Phase 4 SYNTHESIS after angles 98-107 have been researched. Auditor running synthesis should read this before reading the archive files.

---

## The question this synthesis must answer

The user's framing (from RESEARCH_ANGLES.md angle 98):

> "What specifically do humans do that AI doesn't? Which of those things can be structurally encoded? Which would actually IMPROVE on human behavior (since humans also have biases and limits)?"

Three outputs the synthesis must produce:
1. **A mechanism map** — for each human problem-solving mechanism, what is the AI agent analogue (better / worse / absent)?
2. **An encodability verdict** — for each mechanism, can it be structurally encoded in a kit procedure, or is it fundamentally outside what kit design can do?
3. **Kit procedure candidates** — the subset that are both (a) addressing a real AI weakness and (b) encodable; these are candidates for kit procedures in kit design

---

## Synthesis structure

### Table 1 — Mechanism map (one row per human mechanism)

| Mechanism | Human behavior | AI agent analogue | AI vs human (worse / similar / better / absent) | Source angles |
|-----------|---------------|-------------------|--------------------------------------------------|---------------|
| Metacognitive monitoring | "Am I making progress? Should I switch approach?" | ? | ? | 99 |
| Problem reframing | Questioning initial problem statement | ? | ? | 100 |
| Decomposition strategy selection | Choosing hierarchical / sequential / lateral | ? | ? | 101 |
| Recognition-primed decision | Expert pattern matching → retrieve known solution | ? | ? | 102 |
| Deliberate alternative generation | Lateral thinking, TRIZ, SCAMPER | ? | ? | 103 |
| Debiasing | Noticing and correcting anchoring, Einstellung | ? | ? | 104 |
| Dual-process switching | Moving between fast pattern-match and slow deliberate reasoning | ? | ? | 105 |
| Insight / restructuring | Sudden non-incremental solution jump | ? | ? | 106 |
| Improvement over time | Getting better at a problem type through feedback | ? | ? | 107 |
| Saturation / stopping signal | Knowing when to stop and move on | ? | ? | 88–90, 98 |

Fill the "?" columns from research findings. "Absent" means no analogue found in AI behavior; "worse" means AI does something analogous but less reliably; "better" means AI structurally avoids a human limitation.

---

### Table 2 — Encodability verdict (for each mechanism where AI is WORSE or ABSENT)

| Mechanism | Can a kit procedure structurally trigger this? | Confidence | If yes: what trigger? | If no: why not? |
|-----------|------------------------------------------------|------------|----------------------|-----------------|
| Metacognitive monitoring | ? | ? | ? | ? |
| Problem reframing | ? | ? | ? | ? |
| ... | | | | |

**Encodability criteria:**
- YES if: the mechanism can be triggered by a structural prompt or rule (e.g., "after any first-pass output, generate one alternative with a different underlying assumption" encodes deliberate alternative generation)
- PARTIAL if: the mechanism can be approximated but the approximation is known to be weaker (e.g., "review your work" prompts are weaker than true metacognitive monitoring)
- NO if: the mechanism requires something outside kit scope — real-time feedback, embodied experience, genuine emotion, interaction with the physical world

---

### Table 3 — Kit procedure candidates (where AI is WORSE + encodability is YES or PARTIAL)

For each candidate:
- **Name:** what would this procedure be called?
- **Trigger condition:** when does it fire in the kit-maker process?
- **Structural form:** what does the procedure actually say to do?
- **Expected benefit:** what failure mode does it prevent?
- **Confidence:** HIGH / CONSENSUS / CONTESTED (from the confidence map)
- **Already exists in kit-maker?** (check existing procedures/ — don't duplicate)

---

### Contradiction pairs to resolve

Before building Table 3, check for contradictions between the 10 angle findings:

- Angle 102 (expert pattern recognition → fast retrieval) potentially contradicts angle 105 (slow deliberate reasoning is better for novel problems). **Scope condition to resolve:** fast retrieval applies to recognized situations; slow reasoning applies to novel ones. The synthesis should find where this line is.
- Angle 103 (force deliberate alternatives) potentially contradicts angle 102 (expert intuition is fast and reliable). **Scope condition:** structured alternatives matter most when the agent is not in its recognized-pattern repertoire.
- Angle 106 (insight = non-incremental jump) may be fundamentally un-encodable — insight typically requires incubation and can't be forced. This should show up as a NO in Table 2.

---

### What this synthesis is NOT producing

- A complete theory of AI cognition
- A claim that AI agents can fully replicate human problem-solving
- Kit procedures for mechanisms that research shows are encodable in PARTIAL or weak form only — flag these as CONTESTED, don't build procedures on weak evidence

---

## Expected synthesis output file

`research_archive/synthesis-human-problem-solving.md` containing:
- Table 1 filled (mechanism map)
- Table 2 filled (encodability verdicts, AI-worse-or-absent only)
- Table 3 filled (procedure candidates)
- Contradiction pairs resolved
- What was NOT found (null results on which mechanisms have no AI analogue research)
- What remains genuinely open (GAP tier)

This file is the input to Phase 5 PLAN when designing kit procedures from the human problem-solving cluster.
