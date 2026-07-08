# ai-playbooks

Structured, research-backed playbooks for AI agents — built with scientific rigor and validated through controlled trials.

## What this is

AI agents produce inconsistent results because they operate without structured procedures. This project builds **playbooks**: step-by-step procedures an AI agent follows to reliably produce high-quality output on a specific task class.

Each playbook is:
- **Research-backed** — built from synthesized academic and practitioner literature, not intuition
- **Tested** — validated through controlled trials (baseline vs. kit vs. degraded conditions)
- **Self-correcting** — includes behavioral contracts, quality gates, and failure-mode registers

## Playbooks built so far

### `angle-gen-kit` — Research angle generation
Given a 1–2 sentence research topic, generates a vocabulary-diverse set of research angles covering traditions a standard keyword search would miss. Includes intake procedure, coverage-gap conditioning, adversarial angle separation, null-hypothesis angle requirement, and quality gating.

**Validated signals:** Structural completeness (Q7 avg 3.0/3), formulation quality (Q5 avg 2.82), query precision (Q3 avg 2.73), procedural compliance (100% BIN1/BIN2 pass rate), longitudinal quality stability (A8 = 3 across 10 sequential inputs).

## How playbooks are built

A rigorous 8-phase process:

1. **Discovery** — identify the task class and what quality means for it
2. **Domain brief** — define the realistic input scale and failure modes
3. **Research** — systematic literature review across vocabulary traditions
4. **Synthesis** — build a confidence map from research findings
5. **Plan** — specify the playbook structure
6. **Build** — write playbook files with behavioral contracts
7. **Trial** — controlled trial (3 conditions × 22+ inputs, blind evaluation)
8. **Archive** — weakness register, pitfall register, research archive

## Repository structure

```
kit-maker/          — the kit-maker process and design log
kit-maker-research/ — research angles and archive for the kit-maker itself
angle-gen-kit/      — the first built playbook (inside kit-maker/)
sport/              — sports science research (exercise, nutrition)
travel/             — trip planning research
website_safety/     — security audit methodology
```

## Status

- `angle-gen-kit` — Phase 7 complete (INT-10 + INT-11 trials done)
- Kit-maker process — Phase 7 active

---

*Built with [Claude Code](https://claude.ai/code)*
