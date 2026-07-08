# Contributing to ai-playbooks

## Where things stand

| | Status |
|---|---|
| angle-gen-kit | Done — validated on 22 inputs |
| research-synthesis-kit | Draft — not fully validated yet |
| kit-maker process | Active — being refined as more kits are built |
| Next planned kits | No fixed list — open to suggestions |

The core project (kit-maker) is still being developed. The methodology improves as we build more kits, get more test results, and find better research about how AI agents work.

---

## What actually helps

### 1. Research a question

This is the most wanted contribution.

Building kits requires a lot of research — finding papers, practitioner write-ups, real examples of what works and what doesn't. This is time-consuming and token-intensive to do with AI, so we want humans who enjoy digging for evidence.

**How it works:**
- Look at [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md) — a list of questions we're trying to answer
- Pick one (or suggest a new one that seems relevant)
- Search for evidence online: papers, technical blogs, GitHub repos, conference talks, whatever you find
- Write up what you found: what the evidence says, where it came from, how confident you are in it
- Open a PR adding your writeup to `kit-maker-research/` (one markdown file per question, any format is fine)

You don't need to follow a specific format. If you found useful evidence, just document it clearly. We'll handle turning it into structured research.

Note: All submitted research must be from real sources you actually read. We need to be able to verify it.

---

### 2. Test a playbook

Run a playbook on topics from your own work and report what happened.

**For angle-gen-kit:**
- Use it on 5+ research topics you actually care about (not examples from the docs)
- Note which inputs worked well and which didn't
- Open an issue with your report: what topics you used, what the kit produced, what was good, what was frustrating

This helps more than you might think — we've only tested it on topics we chose ourselves.

---

### 3. Suggest a direction

If you have a thought about where this project should go — a new kit domain, something wrong with the current methodology, a better way to think about a design decision — open a Discussion.

What's useful:
- AI task classes that produce inconsistent results (potential new kit domains)
- Fundamental problems with how the kits are structured
- Research you've done that seems relevant

---

### 4. Build a new kit

The most effort, and the most valuable.

Read [`kit-maker/ENTRYPOINT.md`](kit-maker/ENTRYPOINT.md) to understand the full 8-phase process. Building a kit takes multiple sessions — research, synthesis, writing, and a controlled trial on real inputs. The existing kits in this repo were all built this way.

If you want to build one, open a Discussion first so we can discuss the domain and whether it's a good fit.

---

## Questions

Open a Discussion. Response within 48 hours.
