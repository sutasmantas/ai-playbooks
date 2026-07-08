# Roadmap

---

## Done

### Kit-maker process
- 8-phase process with hard gates (Phases 1–8)
- Always-on behavioral contract system (Hard Rule 13 — six required elements)
- Two-auditor adversarial review model (Completeness + Correctness, read-only tools)
- Evidence classification system (empirical / consensus / anecdote)
- Six working-kit properties with backward trace
- Scale handling (Property 6) — procedures validated at realistic input sizes, not toy examples
- Alternatives-generation procedure with steelmanning requirement
- Decision-surfacing rule — structural decisions must be named before drafting, not made invisibly
- Practitioner-consensus fast track for thin-evidence domains
- Provisionals system — SKELETON files tracked until research clusters update them
- Class-before-instance procedure
- Satisficing and ROI procedure
- Direction-drift check
- Mandatory reflection gate

### Wave 1 meta-research
- 6 angles on kit design, failure modes, behavioral guidance
- Findings embedded in kit-maker procedures

### Example kits
- **Code review feedback kit** — complete, 97% on 520-LOC realistic-scale test
  - Research archive: 152 claims across 4 angles
  - Two test runs (50-LOC and 520-LOC)
  - Weakness register: 7 documented gaps

---

## In progress

- **Meeting notes summarizer kit** — Phase 2 complete, skeleton built; Phases 3–8 pending
- **Technical specification kit** — Phase 2 complete; Phase 3 research pending (7 scoped angles ready)
- **Wave 2 P1 query prep** — synthesis targets for new P1 angles (143–148) needed before launch

---

## Queued — Wave 2 research (155 angles across 13 clusters)

Wave 2 is fully prepped and ready to launch once authorized. Clusters in priority order:

**P1 — Foundation (run first):**
- Angles 59–63: How to write behavioral rules Claude reliably follows
- Angles 12–14: Meta-research methodology and information finding
- Angles 108–114: Research quality criteria
- Angles 22–24: Kit validation and behavioral testing
- Angles 119–120, 125, 135: Goal-directed behavior, diminishing returns, direction alternatives, direction drift
- Angles 143–148: Criteria-before-evaluation, second-order thinking, backward chaining, double-loop learning, MECE decomposition, rubber duck debugging

**P2 — Core kit design:**
- Angles 7–11: GitHub real-world examples
- Angles 18–21: Kit limits, context window economics
- Angles 31–38: AI-specific instruction design
- Angles 48–55: From claude_process — two-auditor, pitfall register, same-mental-model halt
- Angles 136–142: Agent quality mechanisms (reviewing, iteration, personas, skepticism, steelmanning, alternatives selection, brainstorming)
- Angles 149–155: Problem-solving mechanisms (reversibility, confidence calibration, chunking, productive failure, version comparison, constraint relaxation, non-monotonic solving)

**P3 — Enhancement:**
- Angles 81–107: Goal-directed agency, human problem solving
- Angles 25–30: Kit maintenance and adoption
- Angles 64–80: From extractions — self-review, alternatives timing, phase I/O

---

## Planned — next kits

The following domains are planned for kit builds. The coding-related kit will be the third complete kit.

| Domain | Notes |
|--------|-------|
| Code generation / implementation | Planned — generative domain, tests kit-maker on production code output |
| Technical specification writing | Phase 2 done — research pending |
| Bug analysis / root cause investigation | Candidate |
| Documentation writing | Candidate |

---

## How priorities are set

Wave 2 P1 angles are those whose findings would change existing kit-maker procedures if the findings came back differently. P2 are core design improvements. P3 are enhancements after P1+P2 synthesis.

Kit domain priority is user-driven. If you want to build a kit for a domain not listed here, open an issue — if the domain has clear quality dimensions and a realistic failure mode, it's a good candidate.

---

## What would be most valuable from contributors

1. **New complete domain kits** — especially domains where Claude currently produces inconsistent results
2. **Realistic-scale test inputs** — PRs, transcripts, briefs that represent real production scale
3. **Failure reports** — documented cases where a kit produced wrong output; these become pitfall register entries
4. **Research angles** — especially empirical (not consensus) evidence on LLM instruction following
