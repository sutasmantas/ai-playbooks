# Quick Start — Building Your First Kit

This guide walks you through building a complete kit using Kit-Maker. Estimated time: 2–4 sessions depending on domain complexity.

---

## Before you start

Read these files in order:

1. [`kit-maker/ENTRYPOINT.md`](../kit-maker/ENTRYPOINT.md) — the full process. Read it completely before starting. The phase gates are not optional.
2. [`kit-maker/definitions/working-kit.md`](../kit-maker/definitions/working-kit.md) — what "done" means. You'll evaluate your kit against these six properties at the end.
3. [`kit-maker-test/code-review-feedback/`](../kit-maker-test/code-review-feedback/) — browse a complete example kit. Seeing the target output before starting helps calibrate what you're building.

---

## Step 1: Phase 1 — Read

Open [`kit-maker/lessons/`](../kit-maker/lessons/) and read any existing lessons. If this is your first run, the directory will be empty — that's expected. Read [`kit-maker/pitfall_register.md`](../kit-maker/pitfall_register.md) and [`kit-maker/principles/kit-design-principles.md`](../kit-maker/principles/kit-design-principles.md).

This phase produces nothing — it loads failure modes into context before you build.

---

## Step 2: Phase 2 — Domain Brief

Run the interview script at [`kit-maker/interview/01-domain-brief.md`](../kit-maker/interview/01-domain-brief.md). Answer each question before moving to the next. The domain brief must include all of:

- **Domain and kit purpose** — what should someone be able to do after using the kit?
- **Quality dimensions** — what does quality look like in this domain? What would an expert immediately notice is missing? (These become your Phase 6 procedure dimensions.)
- **Systematic omission bias** — what does an agent miss in this domain even when trying hard?
- **Parameterization inputs** — what team-specific parameters must be provided before the kit can run?
- **Realistic input scale** — what does a large or hard instance of this task look like? Your kit must handle this size.
- **Success condition** — specific and observable

Write the domain brief in `kit-maker-test/[your-domain]/design_log.md`. Present it to yourself (or a reviewer) and confirm it before proceeding.

**Gate:** do not proceed until the domain brief is confirmed. Silence is not confirmation.

---

## Step 3: Phase 3 — Research

Generate your angle list. Minimum required angles (from ENTRYPOINT.md):

1. GitHub broad discovery
2. GitHub specific (templates, examples in this domain)
3. Academic/technical research on the domain
4. What people complain about in existing tools
5. Meta-research: how to research this domain
6. **Scale failure modes** — what breaks in this domain at 10× typical input size
7. [At least one angle per quality dimension from your Phase 2 domain brief]

Show the angle list with queries to a reviewer before launching. Add any missing dimensions.

Launch using the Workflow tool (not Agent). One parallel agent per angle. Each agent:
- Runs all queries for its angle
- Extracts claims (not source lists) with evidence classification (empirical/consensus/anecdote)
- Logs saturation point

After the wave: run a separate verify pass on all `empirical` claims.

Write results to `kit-maker-test/[your-domain]/research_archive/` — one file per angle.

**Gate:** research_archive/ must exist with saturation logs before Phase 4. This is a hard block.

---

## Step 4: Phase 4 — Synthesis

Run [`kit-maker/procedures/research-synthesis.md`](../kit-maker/procedures/research-synthesis.md).

Group claims by topic. Build a confidence map (HIGH / CONSENSUS / CONTESTED / GAP). Ask one question per CONTESTED or GAP finding — only these, not everything.

Write `kit-maker-test/[your-domain]/synthesis.md` with the confidence map and any hypothesis corrections.

---

## Step 5: Phase 5 — Plan

Use [`kit-maker/templates/plan.md.template`](../kit-maker/templates/plan.md.template).

List every kit file you'll build. Order riskiest-first (hardest to fix if wrong, highest stakes). The behavioral contract (CLAUDE.md) goes first — before any domain-specific skills or procedures.

Required section: **Scale handling** — name specifically how your procedures address the realistic input scale from Phase 2.

---

## Step 6: Phase 6 — Build

Build files in the order from your plan.

For each file:
1. Before drafting: list the structural decisions this file requires. Run alternatives-generation on each before drafting — don't decide invisibly inside the draft.
2. Draft
3. Check for ambiguous phrases ("use judgment here", "as appropriate", "manageable") — replace each with a specific criterion
4. Check for scale: any "for each item" loop needs a scoping rule if the realistic item count exceeds 20
5. Check for classification rules: every classification must have a binary-checkable criterion, not a judgment word
6. Dispatch Completeness + Correctness auditors (prompts in [`kit-maker/scripts/verify_prompt.md`](../kit-maker/scripts/verify_prompt.md))
7. Fix RED findings; hard cap at 3 rounds
8. Add Trace: section citing specific archive claims

**The behavioral contract (CLAUDE.md) must be built first** and must include all six required elements from Hard Rule 13: gold standard, delegation model, after-every-task rule, proactive surfacing, decay warning, repeated-instance consolidation rule.

---

## Step 7: Phase 7 — Verify

Dispatch both auditors on the complete assembled kit (not individual files). Completeness asks what's missing; Correctness asks what's wrong or contradictory.

**Required:** run the kit on a realistically-sized input (the hard case from Phase 2). If the kit hasn't been tested at realistic scale, Phase 7 does not pass.

Route all YELLOW and RED findings to `weakness_register.md`.

---

## Step 8: Phase 8 — Handoff

Confirm all six working-kit properties are present. Submit your kit.

Required deliverables:
- All kit files
- `research_archive/` with saturation logs and verify verdicts
- `weakness_register.md` with real gaps (not "no known weaknesses")
- `pitfall_register.md`
- At least one realistic-scale test run with evaluation

---

## Common mistakes

**Skipping research because the domain seems obvious.** The research phase finds things domain experts take for granted — and those are exactly the things that don't make it into procedures when built from intuition.

**Testing only on toy inputs.** A code review kit tested on 50-line PRs has not been tested. A meeting notes kit tested on a 10-minute transcript has not been tested. Use the scale you defined in Phase 2.

**Weak alternatives generation.** For each design decision, generate alternatives that rest on genuinely different assumptions — not parameter variations. Build the strongest case FOR each alternative before rejecting it. An alternative you can't steelman was a strawman.

**Treating the weakness register as optional.** If your kit has no documented weaknesses, it hasn't been evaluated honestly. Every kit has real gaps; documenting them is what makes the kit trustworthy.
