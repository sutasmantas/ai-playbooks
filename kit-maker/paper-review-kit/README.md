# Paper Methodology Review Kit

**Purpose:** Autonomous methodology critique of scientific papers. Agent runs the full review and delivers actionable findings without user intervention mid-task.

**Kit source:** Built by kit-maker Phase 6, 2026-07-03. Trial domain for kit-maker Phase 7 diagnostic trial.

---

## File manifest

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Behavioral contract — always-on rules for the reviewing agent. Read first at every session start. |
| `phase2-brief.md` | Domain brief — defines the domain, realistic scale, quality dimensions, domain-specific failure modes. Input to all other files. |
| `procedures/review-paper.md` | Main review procedure — step-by-step methodology review across five phases. |
| `audit-log.md` | Auditor findings — Auditor A (completeness) and Auditor B (correctness) records. |

## Build order

1. phase2-brief.md (input)
2. CLAUDE.md (behavioral contract — required first per Hard Rule 13)
3. procedures/review-paper.md
4. audit-log.md (populated during auditor review)

## How to use

1. Agent reads CLAUDE.md at session start.
2. Intake: agent receives paper (URL or text) and identifies study type.
3. Agent runs procedures/review-paper.md Phases A through E.
4. Agent delivers Phase E report without user prompting.

## What this kit deliberately omits

- No implementation of goal-achieving-plan.md Phase A mechanisms (external verification, adversarial verifier) — baseline kit; mechanisms added after Phase 7 trial reveals gaps
- No systematic review support (multi-paper synthesis) — v1 targets single papers
- No domain research archive (kit-maker's research_archive/ covers behavioral contract decisions; domain knowledge is embedded in procedures)

## Minimum model tier

Frontier. See CLAUDE.md.
