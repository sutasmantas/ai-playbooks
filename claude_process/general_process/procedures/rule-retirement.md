# Procedure: Rule Retirement (quarterly prune)

**Use when:** the kit's combined rules + concerns + principles + pitfall register have grown past comfort, OR every quarter as a scheduled cadence, OR whenever an agent visibly starts ignoring rules.

Rule files accumulate. Each "ah, this caught a real mistake" promotion adds a line. Over six months, the project's `CLAUDE.md` doubles in length, principles multiply, pitfall_register fills with stale entries. Past ~200 lines of CLAUDE.md content, instruction-following drops sharply (empirical finding: median high-performing AGENTS.md is 300-350 words; diminishing returns past 500 words; *negative* correlation past ~1000 words / 200 lines). The kit's rules silently become noise.

The retirement procedure is the counterweight: rules earn their place by preventing real incidents, and rules that haven't earned it in 90 days get demoted.

## The procedure

### Step 1 — Inventory current rules

Scan every rule-bearing surface:
- `CLAUDE.md`'s "Hard rules" section (numbered list)
- `pitfall_register.md` entries (project-specific patterns)
- `EXCEPTIONS.md` entries (accepted waivers)
- Verifier prompt's 14-item checklist (`scripts/verify_prompt.md`)
- Each principle file's `Rule` section

For each rule, find its provenance:
- **Where did this come from?** A lesson? A session-end promotion? An external port? An initial concern?
- **When did it last fire?** Search the project's commit history, PR descriptions, decision_log, or verifier reports for evidence this rule prevented a real incident.

### Step 2 — Apply the "would-the-model-make-this-mistake-without-this-line" test

For each rule, ask: *"if I removed this line right now, would the agent make a meaningful mistake within the next month?"*

- **Yes, demonstrably (cite a recent near-miss or audit hit):** KEEP.
- **Yes, theoretically (no recent evidence but the pattern is plausible):** WATCH (move to pitfall_register if not already there).
- **No (no evidence, no plausible near-term failure):** DEMOTE.

This is Tianpan's empirical test, validated in 2026 production agent setups.

### Step 3 — Demote, don't delete

A demoted rule moves DOWN the salience hierarchy, not out of existence:
- A hard rule in `CLAUDE.md` → moves to `pitfall_register.md` as a watch item
- A pitfall register entry → moves to a "Retired pitfalls" section at the bottom of `pitfall_register.md` (institutional memory; reviewers can re-promote later)
- A principle whose `Use when:` trigger never fires → consider whether it's redundant with another principle

Outright deletion is reserved for rules whose context no longer applies (e.g., a Next.js 14 rule when the project migrated to Astro). When deleting, log in `decision_log.md` why.

### Step 4 — Audit `EXCEPTIONS.md`

For each entry:
- Has the `Revisit by:` date passed? If yes, the exception is already auto-promoted to a blocker by the verifier — confirm the underlying issue was either fixed or the exception was renewed with a new date.
- Has the exception been invoked > 3 times in 30 days? That signals the underlying rule needs revision (the rule is over-strict or the situation it's blocking is actually fine). Convert to a `decision_log` entry proposing the rule change.

### Step 5 — Audit pitfall_register for size

If `pitfall_register.md` exceeds 200 lines, the register is too noisy to consult. Hard prune:
- Move entries with `count: 1` and `last observed > 60 days ago` to a "Retired" section at the bottom
- Promote entries with `count ≥ 5` to `CLAUDE.md` hard rules (they've earned permanent residency)
- Collapse near-duplicates

### Step 6 — Update CLAUDE.md if it exceeds caps

Hard caps from empirical research:
- Principles directory: ≤ 7 files (you're at the limit; each addition requires a removal)
- `CLAUDE.md` body: ≤ 350 words of rule content (preamble + structural sections separate)
- Pitfall register: ≤ 200 active entries (retired pool below the line is unbounded)
- EXCEPTIONS: review monthly, no permanent waivers

If a cap is breached, this procedure isn't optional — it's required.

## What this procedure does NOT do

- It is NOT a "delete rules I don't like." Every demotion needs a justification logged in `decision_log.md`.
- It is NOT a substitute for `session-end-promotion.md`. The two are paired: promotion adds, retirement removes. Neither alone is healthy.
- It does NOT delete `lessons/` — lessons are pedagogical historical patterns, not active rules. They stay regardless of usage.

## When to skip

- Project is younger than 90 days (no rules have aged yet)
- The combined rule files are under the caps and no rule-ignoring behavior has been observed

**Trace:** distilled from Tianpan's "Effective Agent Instruction Files" empirical findings (2026), Cursor agent best practices, and the `claude-md-improver` skill's audit rubric. Paired with `session-end-promotion.md`.
