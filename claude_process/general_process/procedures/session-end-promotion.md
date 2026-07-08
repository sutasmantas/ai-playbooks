# Procedure: Session-End Promotion (manual mistake-to-rule loop)

**Use when:** wrapping up a non-trivial work session — before stopping work, before merging, or after a sequence of corrections from the user.

This is the kit's manual analog to autonomous "agent dreaming" systems. It catches the failure mode the user has noticed: agents repeat similar mistakes because in-context corrections don't propagate forward. Measured mechanism: LLM training contains few error-correction sequences, producing a "self-correction blind spot" (~64.5% rate, Self-Correction Bench NeurIPS 2025). The fix is a human-gated promotion loop that converts repeat patterns into static rules the agent will read at session start.

## The procedure

### Step 1 — Enumerate the session's corrections

Re-read the session transcript. List every place where:
- The user corrected the agent's output ("no, that's wrong because...")
- The verifier returned RED on a finding the producer hadn't anticipated
- A bug was found in code the producer had just claimed done
- The user said "that's similar to what I told you before"
- A defect was found (by the user, the verifier, or live use) in behavior the tier-1 VALIDATOR had passed — that is a **validator gap**, a pattern class of its own. The validator silently not-checking something reads as "covered" forever until named.

Count each correction by its **pattern**, not by its specifics. "Forgot null check on a fetch result" and "forgot null check on a query result" are the same pattern. "Used `npm install <name>` without lockfile" is one pattern, regardless of which package.

### Step 2 — Diff against `pitfall_register.md`

For each pattern in step 1, check if it already exists in `pitfall_register.md`. If yes: increment its counter (see entry schema below). If no: create a new entry with `count: 1`.

### Step 3 — Apply the promotion rule

A pitfall at **count ≥ 2** is a pattern, not a one-off. Promote to a kit-level rule:
- Add a line to `CLAUDE.md`'s "Hard rules" section, OR
- Add a check to the verifier's 14-item checklist, OR
- Add a one-line `Use when:` trigger to the relevant principle file, OR
- **Validator gaps promote at count == 1** (a missed defect is direct evidence, not coincidence): add the missing check to the tier-1 validator script. If the check cannot be automated, record why in the entry and route it to a user-manual-verification (🧑) item in PROJECT_PLAN.md instead — never leave it silently uncovered.

A pitfall at **count == 1** stays in the register as a watch-item. Do NOT promote.

This guard exists because of spurious generalization: a single failure overgeneralized to a rule produces an overcorrective rule that paralyzes future work. The N≥2 threshold is the empirical floor for "this is a real pattern, not a coincidence."

### Step 4 — Propose to the user, do NOT auto-apply

Present the proposed promotions as a numbered list. For each:
- The pitfall name + count
- The proposed rule text + where it would land
- One line on why this prevents the observed mistakes

The user accepts, rejects, or modifies each individually. Auto-promotion is forbidden — the degeneration-of-thought failure mode (multi-agent Reflexion research) shows agents over-promote when left unsupervised.

### Step 5 — Apply accepted promotions, log in decision_log

If `decision_log.md` is generated for this project, log each promotion with the standard entry schema. If not, the user records what they want recorded.

## Pitfall register entry schema (extended for this procedure)

```markdown
### <short pitfall name>
- **Pattern:** <abstract description, not the specific instance>
- **How it bites:** <one sentence>
- **Guardrail:** <the rule or check that prevents it>
- **Count:** <number of times observed; promote at ≥ 2>
- **First observed:** <date / PR / incident link>
- **Last observed:** <date>
- **Status:** open | promoted (became <rule path>) | retired (no longer relevant)
```

## What this procedure does NOT do

- It does NOT run autonomously. Cursor's auto-rule-generation is reactive and human-gated for a reason; fully autonomous promotion has measured failure modes (single-agent Reflexion's degeneration of thought).
- It does NOT track recall across sessions like Mem0/Letta. Those systems benchmark on recall, not repeat-mistake reduction — no public benchmark for the latter exists as of mid-2026.
- It does NOT replace `EXCEPTIONS.md`. Exceptions are accepted violations; promotions are new rules.

## When to skip

- Throwaway/hackathon projects (the rule will outlive the project)
- Sessions where the agent made no repeat-class mistakes (no work to do)
- When `pitfall_register.md` is at the 200-line cap — first run `procedures/rule-retirement.md` to prune, then return here

**Trace:** distilled from Self-Correction Bench (NeurIPS 2025, arXiv 2507.02778), Anthropic's "Claude Dreaming" preview (May 2026), and Cursor's auto-rule-generation pattern. The kit ships the human-gated version because autonomous promotion fails (multi-agent Reflexion research, arXiv 2512.20845).
