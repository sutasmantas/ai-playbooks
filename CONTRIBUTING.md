# Contributing to ai-playbooks

Contributions are research artifacts, not code patches. Every accepted contribution includes evidence — a trial result, a specific failure case, or a documented methodology improvement.

First response to all issues and PRs within 48 hours.

---

## What contributions are accepted

### Type 1 — New playbook

A new playbook for a different task class (e.g., literature review synthesis, hypothesis generation, experiment design critique).

**Minimum bar:**
- Complete methodology following the 8-phase build process (see below)
- Trial results: ≥10 inputs, blind evaluation against named quality dimensions
- Weakness register — documented honestly; "no known weaknesses" is not accepted
- All kit files: intake procedure, core procedure, quality gates, CLAUDE.md behavioral contract

**Submit:** Open a PR with the kit folder and a description of the trial design and results. The PR description must include the quality scores, not just a claim that it works.

---

### Type 2 — Playbook improvement

A change to an existing playbook that measurably improves a quality dimension.

**Minimum bar:**
- Specific claim: "this change improves Q5 (framing distinctiveness) by eliminating the following failure mode: ..."
- Evidence: either (a) a before/after comparison on ≥3 inputs scored on the relevant dimension, or (b) a documented failure case the change prevents
- Changes made "because it seems better" are not accepted

**Submit:** Open a PR. Include the failure mode being fixed and the evidence.

---

### Type 3 — Validation data

Additional trial results for an existing playbook on new inputs.

**Minimum bar:**
- ≥5 new inputs not in the original trial
- Scored using the existing rubric (Q3, Q5, Q7 or the kit's named dimensions)
- Scoring was done independently — not by the same person who ran the kit
- Results submitted in the same format as the existing trial data

**Submit:** Open a PR adding your results to the kit's `research_archive/` or trial directory, or open an issue with the data attached.

---

### Type 4 — Issue or edge case report

A documented case where a playbook produced wrong output.

**Minimum bar:**
- Which kit, which step
- Exact input used
- Actual output produced
- What was wrong and why (not just "it didn't work")
- Whether this is a known case in the weakness register

**Submit:** Open an issue using the bug template. Failure reports that identify the *class* of failure (not just the specific instance) are most useful.

---

## AI contribution policy

AI tools may be used to draft documentation. All submitted validation data must come from human-supervised runs against real inputs. Fabricated or AI-hallucinated trial results will result in permanent contributor ban. Disclose AI tool usage in your PR description.

---

## How the 8-phase build process works

For new playbooks, each phase has a gate that must pass before the next phase starts:

| Phase | Output required |
|-------|----------------|
| 1 — Discovery | Task class defined; quality dimensions named |
| 2 — Domain brief | Realistic input scale confirmed; failure modes identified |
| 3 — Research | ≥6 angles researched to saturation; research archive written |
| 4 — Synthesis | Confidence map; contested claims marked |
| 5 — Plan | Playbook structure specified |
| 6 — Build | All files written; behavioral contract complete |
| 7 — Trial | ≥10 inputs × 3 conditions; blind evaluation; verdict |
| 8 — Archive | Weakness register, pitfall register, research archive present |

Phases cannot be skipped. A playbook that skips Phase 7 (trial) has not been validated and will not be merged.

---

## Process notes

- The weakness register is not a sign of weakness — kits without one listed have not been honestly evaluated
- If you run a kit and find a failure case not in the weakness register, that is valuable data — please report it
- Questions about the methodology: open a Discussion
