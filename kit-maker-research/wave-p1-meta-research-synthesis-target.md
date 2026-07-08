# Synthesis Target: Angles 12–14 — Meta-Research Methodology

**Purpose:** Pre-planned synthesis structure for the three meta-research methodology angles. These govern how the research process itself should work. Findings here have direct downstream consequence: they may update `procedures/research-quality.md` and `scripts/research-wave.js` before subsequent waves run.

**When to use:** Phase 4 SYNTHESIS after angles 12-14 have been researched. Read before touching archive files.

**Downstream wiring (critical):** If findings from this cluster produce HIGH or CONSENSUS guidance that contradicts current `procedures/research-quality.md`, that procedure must be updated BEFORE any P2/P3 wave runs. This is the only P1 cluster with a direct update gate on kit infrastructure.

**Overlap note:** Angles 12-14 overlap with angles 108-114 (research quality per angle) at the meta level. Angle 114 is the more specific version of angle 12. Cross-check both synthesis targets before finalizing — don't duplicate findings, do resolve contradictions.

---

## The question this synthesis must answer

How should a research agent approach an angle to produce reliable, deep, triangulated findings rather than shallow high-visibility results? Specifically:

1. **What does systematic review methodology offer** that our current research-wave.js doesn't have? (What to add)
2. **What is overkill** for AI-agent research that doesn't transfer from academic systematic review? (What to skip)
3. **What query formulation techniques** reliably find better sources than naive keyword search?

---

## Synthesis structure

### Table 1 — Systematic review methodology components: transfer verdict

What does academic systematic review methodology say to do, and should our research process adopt it?

| Methodology element | What it is | Currently in research-wave.js? | Transfer verdict | If yes: how? | If no: why skip? |
|--------------------|-----------|-------------------------------|-----------------|-------------|-----------------|
| Documented search strings | Record exact queries run | Yes — queriesRun field | Already done | saturation log | — |
| Multiple databases searched | PubMed + Scopus + Web of Science | Partial — not specified | ? | ? | ? |
| Inclusion/exclusion criteria | Pre-specified rules for what counts as a valid source | No | ? | ? | ? |
| PRISMA flow diagram | Record what was found, screened, included, excluded | No | ? | ? | ? |
| Independent dual extraction | Two agents extract separately, compare | No | ? | ? | ? |
| Per-item quality appraisal | Rate each source's methodological quality | Partial — verify pass on empirical claims | ? | ? | ? |
| Funnel plot / publication bias check | Detect if only positive results were found | No | ? | ? | ? |
| Grey literature search | Non-published, conference, pre-print sources | No | ? | ? | ? |
| Forward/backward citation search | From a known paper, find what cites it and what it cites | No | ? | ? | ? |

Fill transfer verdict from research. "Overkill" is a valid verdict — write why.

---

### Table 2 — Query formulation techniques

For each technique identified in angles 13-14:

| Technique | What it is | Expected improvement vs naive search | When to use | Evidence type |
|-----------|-----------|--------------------------------------|-------------|---------------|
| Boolean operators with controlled vocabulary | AND/OR/NOT with MeSH or domain thesaurus terms | ? | ? | ? |
| Berrypicking / iterative refinement | Each result suggests new terms; search evolves | ? | ? | ? |
| Backward citation chaining | Find the papers cited by the best paper you have | ? | ? | ? |
| Author search | "who else works on this?" | ? | ? | ? |
| Practitioner community search | GitHub issues, HN, Reddit — separate from academic | ? | ? | ? |
| Adversarial query | Explicitly search for "X doesn't work", "failure of X", "critique of X" | ? | ? | ? |

Fill from research. Flag any technique that conflicts with current research-wave.js query format.

---

### Table 3 — research-quality.md / research-wave.js update candidates

For each HIGH or CONSENSUS finding from angles 12-14:

| Finding | Currently in research-quality.md? | Currently in research-wave.js? | Proposed change | Priority |
|---------|----------------------------------|-------------------------------|-----------------|----------|
| ? | ? | ? | ? | ? |

**Update gate:** If any row in this table has Priority = HIGH and "Currently in..." = No for both, that is a blocking update — must be made before subsequent waves run. List blocking updates separately at the top of this section.

---

### Contradiction pairs to watch

1. **Systematic rigour vs AI-agent feasibility (angles 12 vs 13):** Full PRISMA methodology is designed for human teams over months. Angle 12 may recommend elements that are impossible in a single-wave AI research run. Angle 13's information-finding techniques may be more practically transferable. Scope condition: adopt PRISMA *principles* (documented search, bias detection, grey literature), not PRISMA *process* (CONSORT forms, dual independent extraction by human reviewers).

2. **Query breadth vs depth (angles 13 vs 12):** Berrypicking (angle 13) argues for iterative query evolution — each result shapes the next query. Our current saturation mechanism runs pre-specified queries. Potential conflict: should the research agent be allowed to deviate from pre-specified queries when it finds something better? Research may resolve this: pre-specified queries ensure coverage; iterative refinement ensures depth. May need both.

3. **Reviewing methodology vs alternatives generation (angle 14 vs existing kit procedures):** Angle 14 is about systematic approaches to review and alternatives. The kit already has `procedures/alternatives-generation.md`. Research from angle 14 should be checked against that procedure — validate, contradict, or extend it. Don't duplicate.

---

## Expected synthesis output file

`research_archive/synthesis-meta-research-methodology.md` containing:
- Table 1 filled (PRISMA element transfer verdicts)
- Table 2 filled (query formulation techniques with evidence)
- Table 3 filled (update candidates, blocking updates at top)
- Contradictions resolved or flagged CONTESTED
- Null results (what angle 12-14 research found no evidence on)

**Immediately after synthesis:** review Table 3 blocking updates and apply them to `procedures/research-quality.md` before any P2 wave launches. This is the only cluster where synthesis triggers a mandatory kit update before proceeding.
