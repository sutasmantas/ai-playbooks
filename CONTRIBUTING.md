# Contributing to ai-playbooks

## Where things stand

| | Status |
|---|---|
| angle-gen-kit | Done — validated on 22 inputs across 5+ domain types |
| research-synthesis-kit | Draft — not yet fully validated |
| kit-maker process | Active — methodology improves with each kit built |
| Tested procedures | Very few — most kit-maker phases have only been run by us |
| Next planned kits | No fixed list — open to suggestions in Discussions |

---

## What actually helps

### 1. Run a research wave

This is the most wanted contribution.

Building kits requires systematic research — finding papers, practitioner write-ups, empirical comparisons, real failure cases. We research by running AI agents in parallel across 15–30 angles simultaneously. One research wave is token-intensive enough that we can't run every angle ourselves.

**What you do:** Pick a research question from [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md), run the research workflow on your own PC using Claude Code, and submit the output.

**What you need:** Claude Code with a Claude API account. The research runs using the Workflow tool built into Claude Code.

**How it works:**
1. Browse [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md) and pick a question — or propose a new one in [Discussions](https://github.com/sutasmantas/ai-playbooks/discussions)
2. Clone the repo. Research scripts are in `kit-maker/scripts/`
3. Open Claude Code in the repo root and ask it to run the research workflow for your chosen question, following the script structure in `kit-maker/scripts/`
4. Submit a PR adding the output files to `kit-maker-research/`

You don't need to synthesize or summarize. Raw research output — AI agents searching for relevant literature, recording what they found, noting confidence — is exactly what we need. We handle turning it into kit improvements.

All submitted research must link real sources (papers, repos, practitioner posts). We need to be able to verify what was found.

---

### 2. Test a procedure

Run something from this repo on a real task and report what happened.

Most procedures in this project have only been run by us, on inputs we chose. External testing — different people, different inputs, different task domains — is one of the highest-value contributions.

**What needs testing:**

*Kit-maker process phases (most undertested):*
- Phase 1 (task discovery) — given a task you do repeatedly, does it surface the right unknowns?
- Phase 2 (domain brief) — does it produce a useful difficulty estimate for a new task?
- Phase 3 (research) — does the research workflow find literature you wouldn't find with keywords alone?
- Phases 5–6 (procedure design) — do the generated procedures produce sensible output on a new task?
- Phase 7 (trial design) — is the trial spec rigorous or does it have obvious gaps?

*Generated kits:*
- angle-gen-kit — run it on 5+ real research topics you care about (not examples from the docs)
- research-synthesis-kit — run it on a real synthesis task from your own work

**How to submit:** Open an issue with what procedure you tested, what inputs you used, what worked, what didn't, and any failures or unexpected behavior. Reproduce steps if you found a failure.

This is more valuable than it sounds. Procedures that work fine on our inputs often fail in unexpected ways on inputs we didn't anticipate.

---

### 3. Build a new kit

Follow the kit-maker process to build a validated playbook for a task you do repeatedly with inconsistent AI results.

**How it works:**
1. Pick an AI task where you get inconsistent results ("the AI sometimes does this well and sometimes badly, and I don't know why")
2. Open a [Discussion](https://github.com/sutasmantas/ai-playbooks/discussions) first — describe the task and why you think it needs a kit. We'll discuss whether it's a good fit
3. Read [`kit-maker/ENTRYPOINT.md`](kit-maker/ENTRYPOINT.md) — this walks you through the 8 phases
4. Work through the phases with Claude Code. Realistic estimate: several sessions of work spread over a few days
5. Run the Phase 7 trial on ≥20 real inputs before calling it done

The result is a set of procedure files an AI agent follows. The existing kits in this repo (angle-gen-kit, research-synthesis-kit) were all built this way.

**What a finished kit looks like:** Phase 2 domain brief exists, Phase 3 research archive exists, Phase 7 trial ran on ≥20 inputs with published results. The bar is intentionally high — a kit without trial data misrepresents what the process produces.

---

### 4. Propose a direction

Open a [Discussion](https://github.com/sutasmantas/ai-playbooks/discussions) if you have:
- An AI task domain where you get inconsistent results (potential new kit)
- A problem with the current methodology or a better way to approach something
- Research that seems relevant to any of the [open questions](OPEN-QUESTIONS.md)

---

## AI tool policy

This project is built and tested with AI tools. Contributions using Claude Code or similar AI agents are expected and welcome — the kit-maker process is designed for AI execution.

**Required:** the AI actually ran the procedure. Submitted outputs must be from real runs, not fabricated or hallucinated. If the AI produced low-quality output, document it as a finding — that's a test result, not a disqualification. Submitting fabricated outputs wastes everyone's time and poisons the research base.

---

## Questions

Open a [Discussion](https://github.com/sutasmantas/ai-playbooks/discussions). Response within 48 hours.
