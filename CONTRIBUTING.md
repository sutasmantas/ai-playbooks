# Contributing to Kit-Maker

Thank you for contributing. This document covers how to add a new domain kit, improve existing procedures, and add research angles.

---

## What contributions are welcome

| Type | Description |
|------|-------------|
| **New domain kits** | Run Phases 2–8 of the kit-maker on a new domain; submit the complete kit |
| **Research angles** | Add angles to the queue with proper format, queries, and priority |
| **Procedure improvements** | Fixes to existing kit-maker procedures — must cite a source |
| **Test inputs** | Realistic-scale test inputs for existing kits |
| **Failure reports** | Document a case where a kit produced wrong output; add to the relevant pitfall_register.md |

---

## Quality bar

All contributions must meet the quality bar described in [`kit-maker/definitions/working-kit.md`](kit-maker/definitions/working-kit.md).

**For new domain kits:** all six working-kit properties must be present. The PR description must include:
- Test run output on a realistic-scale input (not a toy example)
- Evaluation against all six properties
- An honest weakness_register.md — "no known weaknesses" is not accepted

**For procedure improvements:** every change must either (a) cite a specific research claim from an archive file, or (b) document a real failure mode that the change prevents. Changes made "because it seems better" will not be merged.

**For research angles:** follow the angle format in [`kit-maker-research/RESEARCH_ANGLES.md`](kit-maker-research/RESEARCH_ANGLES.md). Each angle needs a title, description of the research question, 4–5 queries, and a priority tier (P1/P2/P3) with justification.

---

## How to build a new domain kit

1. **Read** [`kit-maker/ENTRYPOINT.md`](kit-maker/ENTRYPOINT.md) completely before starting. The process has hard gates — skipping phases produces kits that look complete but aren't.

2. **Run Phase 2 (INTAKE).** Use the interview script at [`kit-maker/interview/01-domain-brief.md`](kit-maker/interview/01-domain-brief.md). The domain brief must include quality dimensions, systematic omission bias, parameterization inputs, and realistic input scale.

3. **Run Phase 3 (RESEARCH).** Show the angle list to reviewers before launching (open an issue or PR draft). Minimum 6 angles including the mandatory ones (GitHub broad discovery, scale failure modes). Research must reach saturation before proceeding.

4. **Run Phases 4–8** as described in ENTRYPOINT.md. Each phase has a gate checklist — answer every gate question before advancing.

5. **Submit the kit** in `kit-maker-test/[domain-name]/` via PR. Include:
   - All kit files (CLAUDE.md, procedures/, weakness_register.md, pitfall_register.md, research_archive/)
   - At least one test run with a realistic-scale input
   - Evaluation against all six working-kit properties

---

## How to add research angles

1. Open `kit-maker-research/RESEARCH_ANGLES.md`
2. Add your angle(s) in the appropriate section with:
   - A sequential number (next after the current last)
   - A descriptive title
   - A clear research question (not just a topic name)
   - 4–5 queries covering: foundational source, meta-analysis, criticisms, practitioner version, quantitative study
   - Priority tier (P1/P2/P3) with a one-line justification
3. Submit via PR

Good angles have a specific, answerable question — not "LLM research" but "does forcing explicit criteria definition before alternatives evaluation change which option is selected, and what structural prompts reliably elicit criteria rather than post-hoc rationalization?"

---

## How to report a procedure failure

If you run a kit and it produces output that violates one of the six working-kit properties, or if you find a procedure rule that produces wrong output in a case not covered by the weakness register:

1. Open an issue using the **Procedure Gap** template
2. Include: which kit, which procedure step, what input, what output, what was wrong
3. If you have a proposed fix: include it in the issue

Failure reports that identify the *class* of failure (not just the specific instance) are most valuable. See [`kit-maker/procedures/class-before-instance.md`](kit-maker/procedures/class-before-instance.md).

---

## Process notes

- The kit-maker process takes multiple sessions for a new domain. This is expected — research saturation takes time.
- The two-auditor model (Completeness + Correctness) must be run on every non-trivial kit file. Do not skip it.
- If you need to skip a step, document the skip and the reason in the design_log.md. Silence is not a skip.
- The weakness register is not a sign of weakness — it is a sign that the kit was honestly evaluated. Kits without weaknesses listed have not been honestly evaluated.
