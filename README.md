# ai-playbooks

A process for building AI agent procedures that actually work — and the playbooks built with it.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## What this is

Most AI agent tasks fail because the agent follows a vague prompt, not a structured procedure. This project is about building **playbooks**: step-by-step procedures an AI agent follows to produce consistent, quality output on a specific task.

**The main project is the process for making playbooks.** The playbooks in this repo are examples of what that process produces.

---

## What's here

| Folder | What it is |
|--------|-----------|
| [`kit-maker/`](kit-maker/) | The 8-step process for building a validated playbook |
| [`angle-gen-kit/`](angle-gen-kit/) | A finished example playbook — gives an AI 5–12 research questions for any topic, each from a different field or angle |
| [`research-synthesis-kit/`](research-synthesis-kit/) | A finished example playbook — turns a set of research findings into a structured synthesis |
| [`claude_process/`](claude_process/) | Process playbooks for Claude-based coding and web projects |

---

## How the process works

The kit-maker process (in [`kit-maker/ENTRYPOINT.md`](kit-maker/ENTRYPOINT.md)) has 8 phases:

1. Figure out what the task is and what "good" looks like
2. Understand the realistic difficulty of that task
3. Research how to do it well (systematic, not just intuition)
4. Build a confidence map from the research
5. Plan the procedure
6. Write the procedure files with quality checks built in
7. Test on real inputs — not toy examples
8. Document what it does and doesn't handle

The result is a set of files an AI agent reads and follows. Not a prompt — a procedure.

---

## Does it produce results?

The first kit built with this process (angle-gen-kit) was tested on 22 different research topics:

| What was checked | Result |
|-----------------|--------|
| Ran to completion on every input | 22 / 22 |
| Each angle used different vocabulary (not rewording the same idea) | 3.0 / 3 |
| Each angle took a genuinely different approach | 2.82 / 3 |

The test design and scoring rubric are in the kit folder.

---

## Get started

- **To use an existing playbook:** start with [`angle-gen-kit/CLAUDE.md`](angle-gen-kit/CLAUDE.md)
- **To build your own:** start with [`kit-maker/ENTRYPOINT.md`](kit-maker/ENTRYPOINT.md)
- **To see a complete example of what a playbook looks like:** browse [`angle-gen-kit/`](angle-gen-kit/)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the four contribution types and their evidence requirements.

Questions: [GitHub Discussions](https://github.com/sutasmantas/ai-playbooks/discussions)

If ai-playbooks is useful to you, [star the repo](https://github.com/sutasmantas/ai-playbooks) — it helps others find it.
