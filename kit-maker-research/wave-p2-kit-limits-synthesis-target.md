# Synthesis Target: Angles 18–21 — Kit Limits and Diminishing Returns

**Purpose:** Every kit has limits — context window capacity, instruction complexity threshold, domain complexity ceiling. This cluster identifies those limits empirically so the kit-maker can set honest scope boundaries and tell users when a kit won't help them.

**When to use:** Phase 4 SYNTHESIS after angles 18–21 have been researched.

**Downstream wiring:**
- Table 1 (context window limits) → Phase 3 angle count guidance (how many angles before context degrades?)
- Table 2 (instruction complexity threshold) → `procedures/research-quality.md` claim format limits; Phase 6 procedure length guidance
- Table 3 (domain complexity ceiling) → `interview/01-domain-brief.md` Q5 (scope) — add "complexity ceiling check"
- Table 4 (diminishing returns signals) → `procedures/satisficing-and-roi.md` — validate or update current trajectory signal

---

## Table 1: Context Window Degradation by Content Type

| Content type | Degradation point | Study evidence | Kit implication |
|-------------|------------------|----------------|----------------|
| Procedural instructions | (fill) | | |
| Research claims (dense) | (fill) | | |
| Multiple competing rules | (fill) | | |
| Long-form behavioral guidance | (fill) | | |
| (add from research) | | | |

**Required output:** A specific context budget guidance for kit files. "How long is too long for a kit procedure?" is currently unanswered — this synthesis must produce a number or range.

---

## Table 2: Instruction Complexity Threshold

| Complexity measure | Threshold (specific) | Evidence | Kit rule candidate |
|-------------------|---------------------|---------|-------------------|
| Rule count per file | (fill) | | |
| Nesting depth (if/then/else chains) | (fill) | | |
| Number of exceptions/qualifications | (fill) | | |
| Conditional rule count | (fill) | | |

**Required output:** A maximum complexity budget per procedure file. Currently the kit has no upper bound on how complex a procedure can get. This synthesis produces that bound.

---

## Table 3: Domain Complexity Ceiling

When is a domain too complex for a kit to handle reliably? This is the "scope honesty" question — some domains require human judgment in ways that can't be proceduralized.

| Domain complexity factor | Effect on kit reliability | Mitigation | Still worth building kit? |
|--------------------------|--------------------------|-----------|--------------------------|
| Highly contextual decisions | (fill) | | |
| Requires tacit expert knowledge | (fill) | | |
| Output quality is subjective | (fill) | | |
| Domain changes faster than kit | (fill) | | |

**Required output:** Add a "domain complexity check" to Phase 2 INTAKE that flags when a domain may exceed kit reliability. Not to block — to set honest expectations in the weakness_register.md.

---

## Table 4: Diminishing Returns Signals

This validates the trajectory signal in `procedures/satisficing-and-roi.md`. Is "three consecutive decreasing-value actions" the right trigger?

| Signal | Research basis | Threshold | False positive rate | Current kit has this? |
|--------|---------------|-----------|--------------------|-----------------------|
| Action size decreasing (trajectory signal) | (fill) | 3 consecutive | (fill) | Yes |
| New claims per query dropping | Research wave saturation | 2 consecutive 0s | Low | Yes |
| Phase output quality decreasing | (fill) | (fill) | (fill) | No |
| (add from research) | | | | |

**Required output:** Validate or update the trajectory signal threshold. If research shows 3 consecutive is too aggressive (high false positives in early phases where small actions are appropriate): increase or qualify. If too conservative: decrease.

---

## Contradiction pairs to resolve

1. **More instructions = more reliable vs more instructions = context degradation:** if both are true, there's an optimal range. The synthesis must identify that range, not just say "both are true."

2. **Domain complexity ceiling vs "kits can be built for any domain":** research may show some domains genuinely don't benefit from proceduralized guidance. The kit-maker should know this rather than silently producing low-quality kits for high-complexity domains.

---

## Minimal outcome requirement

1. A specific procedure length/complexity guidance (not "keep it short" — a number)
2. A domain complexity check question for Phase 2 INTAKE
3. Validated or updated trajectory signal threshold in satisficing-and-roi.md
