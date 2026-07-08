# Synthesis Target: Angles 7–11 — GitHub Real-World Examples

**Purpose:** Ground truth on what practitioners actually build and ship. This cluster is the antidote to research that sounds right but has no real-world usage. Synthesis must extract specific patterns from what exists, not infer from what should exist.

**When to use:** Phase 4 SYNTHESIS after angles 7–11 have been researched.

**Downstream wiring:**
- Table 1 (what practitioners ship) → validates or invalidates Phase 6 file manifest structure; if real kits look nothing like our template, the template needs revision
- Table 2 (what's missing in real kits) → feeds weakness_register.md.template pre-identified gaps
- Table 3 (CLAUDE.md patterns) → validates or revises Hard Rule 13 behavioral contract elements

---

## Table 1: Real-World Kit Structure Inventory

What do popular, used-in-production agent kits actually contain? This is the ground truth table.

| Kit name / repo | Files present | Behavioral contract? | Research archive? | Phase structure? | Lessons file? | What makes it notable |
|-----------------|--------------|---------------------|-------------------|-----------------|--------------|----------------------|
| (fill from research) | | | | | | |

**Required output:** At least 5 real kits examined (not described — actually inspected). For each: what files exist, what behavioral contract looks like (or doesn't), what the entry point is.

**Pattern question:** What do the most-used kits have in common structurally? What do failed/abandoned kits lack?

---

## Table 2: Gaps in Real-World Kits

What do practitioners consistently NOT include that the kit-maker is trying to add?

| Gap | How common | Why practitioners skip it | Kit-maker response |
|-----|-----------|--------------------------|-------------------|
| Research archive | (fill) | (fill) | We require it — validate this is the right call |
| Behavioral contract | (fill) | (fill) | We require it — validate wording |
| Weakness register | (fill) | (fill) | We require it — validate format |
| Trace lines | (fill) | (fill) | We require it — validate it's worth the overhead |
| (add from research) | | | |

**Pattern question:** Are these gaps "practitioners skip shortcuts" or "practitioners discovered these aren't worth the overhead"? The answer changes how mandatory our requirements are.

---

## Table 3: CLAUDE.md / Behavioral Contract Patterns

| Pattern | Frequency | What it typically says | Does it produce goal-directed behavior? | Evidence |
|---------|-----------|----------------------|----------------------------------------|---------|
| Short rules list (< 10 lines) | (fill) | | | |
| Detailed role description | (fill) | | | |
| Process-focused (steps to follow) | (fill) | | | |
| Goal-statement focused | (fill) | | | |
| (add from research) | | | | |

**Required output:** Which CLAUDE.md pattern most reliably produces goal-directed behavior in practice? This validates or revises Hard Rule 13.

---

## Contradiction pairs to resolve

1. **"Real practitioners don't include research archives"** — if true, does this mean the requirement is wrong (too much overhead) or right (real kits suffer from archive amnesia)? Research must find evidence either way.

2. **"CLAUDE.md patterns that work"** vs **"CLAUDE.md patterns that are common"** — common ≠ effective. The synthesis must distinguish frequency from impact.

---

## Minimal outcome requirement

1. At least 5 real kit inspections with structure documented
2. Table 2 gaps: is each gap "skipped for good reason" or "skipped because not thought of"?
3. At least one CLAUDE.md pattern that evidence supports as effective (not just common)
