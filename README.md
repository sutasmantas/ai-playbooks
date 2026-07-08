# ai-playbooks

**Validated playbooks — not one-off prompts.**

Research-backed procedures that make AI agents produce structured, reproducible, high-quality output on specific task classes.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Trials](https://img.shields.io/badge/trials-22%2F22%20passing-brightgreen)](angle-gen-kit/research_archive/)

If ai-playbooks saves you prompt design time, [star the repo](https://github.com/sutasmantas/ai-playbooks) — it's how other AI researchers find it.

---

## Results

The first playbook, **angle-gen-kit**, was validated across 22 controlled trial inputs:

| Metric | Result | Max | What it measures |
|--------|--------|-----|-----------------|
| Input coverage | 22/22 | 22 | Playbook runs to completion without failure on every input |
| Vocabulary novelty (Q7) | 3.0 | 3.0 | Each generated angle uses non-overlapping vocabulary |
| Framing distinctiveness (Q5) | 2.82 | 3.0 | Each angle takes a genuinely different epistemic approach |
| Query precision (Q3) | 2.73 | 3.0 | Each angle produces a launchable, specific query |
| Longitudinal stability (A8) | 3.0 | 3.0 | Quality holds across 10 sequential inputs without decay |

Scoring methodology: 0–3 scale, blind evaluation, documented rubric in [`angle-gen-kit/`](angle-gen-kit/).

---

## The problem this solves

Without a structured procedure, LLM agents generating research angles hit three systematic failures:

1. **Vocabulary anchoring** — the model clusters all angles around the same terms the user typed in; it never surfaces the vocabulary a different discipline uses for the same phenomenon
2. **Non-comparability across runs** — outputs vary by session with no criterion for knowing when coverage is sufficient
3. **No coverage criterion** — no signal for when to stop; the agent generates until it pattern-matches "enough"

angle-gen-kit fixes all three with a coverage map, vocabulary bootstrap across traditions, and a quality gate that scores each angle before it is returned.

---

## Try it now

<details>
<summary>Use angle-gen-kit with Claude (click to expand)</summary>

1. Clone or download this repo
2. Open a conversation with Claude
3. Say: "Read the files in angle-gen-kit/ and follow the intake procedure. My research topic is: [your 1-2 sentence topic]"

The agent will run the intake procedure (Step 1–4 of `intake.md`), build a coverage map, generate angles, and self-score them before returning.

**No installation required.** The playbook is just markdown files the agent reads and follows.

</details>

---

## What the output looks like

Without a playbook, a standard "give me research angles on X" prompt returns angles from the same vocabulary cluster — the user's own framing echoed back with synonym variation.

With angle-gen-kit, each angle gets a tradition label and covers a distinct epistemic approach:

| Tradition | Angle (example topic: "instruction-following in LLMs") |
|-----------|-------------------------------------------------------|
| NLP / alignment | Rule compliance under distributional shift |
| Cognitive science | Prospective memory and task-interruption recovery |
| Control theory | Constraint satisfaction under partial observability |
| Educational psychology | Procedural knowledge acquisition from worked examples |
| Human-computer interaction | Command disambiguation in ambiguous interface contexts |

The cross-disciplinary slots (cognitive science, control theory, educational psychology) are the ones a standard keyword search will not find. They are the whole point.

---

## Playbooks

| Kit | Status | What it does |
|-----|--------|-------------|
| [`angle-gen-kit/`](angle-gen-kit/) | Validated (Phase 7 complete) | Research angle generation from a 1-2 sentence topic |

More playbooks in progress. [Watch → Releases](https://github.com/sutasmantas/ai-playbooks/releases) to get notified when new ones ship.

---

## How playbooks are built

<details>
<summary>8-phase build methodology</summary>

1. **Discovery** — identify the task class and what quality means for it
2. **Domain brief** — define the realistic input scale and failure modes
3. **Research** — systematic literature review across vocabulary traditions
4. **Synthesis** — build a confidence map from research findings
5. **Plan** — specify the playbook structure
6. **Build** — write playbook files with behavioral contracts
7. **Trial** — controlled trial (3 conditions × 22+ inputs, blind evaluation)
8. **Archive** — weakness register, pitfall register, research archive

Every playbook in this repo has completed all 8 phases before being published. The trial data and research archive are included in the kit folder.

</details>

---

## Contributing

Contributions that follow the same methodology are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the four accepted contribution types and their minimum evidence bars.

Questions, results, ideas: [GitHub Discussions](https://github.com/sutasmantas/ai-playbooks/discussions)

Found ai-playbooks useful? Star the repo to stay notified as new playbooks ship.

---

*Built with [Claude Code](https://claude.ai/code)*
