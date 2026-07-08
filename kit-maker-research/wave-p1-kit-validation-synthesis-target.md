# Synthesis Target: Angles 22–24 — Kit Validation and Behavioral Testing

**Purpose:** Pre-planned synthesis structure for the three kit validation angles. These answer a question the other P1 clusters don't: once the kit exists, how do you know it works? Findings directly inform what Phase 7 VERIFY should actually check — currently a two-auditor verbal review; research may surface more rigorous methods worth incorporating.

**When to use:** Phase 4 SYNTHESIS after angles 22-24 have been researched.

**Angle 23 depth note:** Angle 23 (behavioral testing for LLMs) is flagged BORDERLINE by the user — skim only, 2-3 queries, no forced saturation. Archive file will be thin. Synthesis should weight angle 22 and 24 findings more heavily; angle 23 contributes only if it surfaces something not found by 22 or 24.

**Downstream wiring:** Findings update Phase 7 VERIFY in ENTRYPOINT.md and possibly `scripts/verify_prompt.md`. If HIGH or CONSENSUS findings describe validation methods more rigorous than the current two-auditor pass, propose them as additions to Phase 7 — but only if they're agent-executable without human intervention.

---

## The question this synthesis must answer

The current Phase 7 VERIFY is: two agents (Completeness + Correctness) read the kit with restricted tools and flag issues. This is adversarial review — not behavioral testing. The distinction matters:

- **Adversarial review:** "Does this rule seem correct? Is anything missing?" — finds logical errors and gaps
- **Behavioral testing:** "When an agent actually uses this kit on a real task, does it behave as intended?" — finds compliance failures that look fine on paper

Research may show these are the only two methods available, or it may show additional methods. The synthesis must answer:

1. **What validation methods exist** for AI behavioral kit compliance — beyond adversarial document review?
2. **Which methods are agent-executable** within the kit-maker workflow (not requiring human trial runs)?
3. **What edge case classes** do kits systematically fail to cover — and can these be checked in Phase 7?

---

## Synthesis structure

### Table 1 — Validation method inventory

For each method identified across angles 22-24:

| Method | What it tests | How it works | Agent-executable? | Cost/effort | Already in Phase 7? |
|--------|--------------|-------------|------------------|-------------|---------------------|
| Adversarial verbal review (Completeness) | Missing content | Agent reads kit, lists gaps | Yes | Low | Yes |
| Adversarial verbal review (Correctness) | Logical errors, contradictions | Agent reads kit, finds problems | Yes | Low | Yes |
| Canary test | Auditor calibration | Known-bad kit → expect RED output | Yes | Low | Yes (partial — `scripts/canary_spec.md`) |
| Behavioral trace test | Actual compliance | Run kit on a test task, observe behavior | Partial | High | No |
| Edge case probe | Robustness | Construct inputs at boundary; test coverage | Partial | Medium | No |
| Adversarial input generation | Specification gaming | Generate inputs agent might misinterpret | Partial | Medium | No |
| Cross-kit consistency check | Composability | Run two kits simultaneously; detect conflicts | No (requires two kits) | High | No |
| ? | ? | ? | ? | ? | ? |

Fill from research. "Agent-executable" = can be done by a research agent within the kit-maker workflow with no human trial run required. "Partial" = possible but with known limitations.

---

### Table 2 — Edge case classes kits systematically miss

From angle 24 specifically — what boundary conditions do instruction sets reliably fail at?

| Edge case class | What it looks like | Why kits miss it | Detection method | Currently catchable in Phase 7? |
|----------------|-------------------|-----------------|-----------------|--------------------------------|
| Scope boundary ambiguity | Task is 80% in-scope, 20% not — kit is unclear which rules apply | Rules written for clear cases | Construct an ambiguous test task | ? |
| Rule stacking at limit | 8+ rules simultaneously applicable — agent applies some, drops others | Rules tested independently | Count max simultaneous applicable rules | ? |
| Negation cascade | "Do NOT do X unless Y, except when Z" — agent loses track | Negative rules not tested for chaining | Check for multi-level negations | ? |
| Phase boundary at edge case | Task falls between two phases — agent stalls | Phase gates tested for normal flow only | Construct a between-phase input | ? |
| Instruction conflict under novel input | Two rules both apply, hierarchy underdefined | Conflicts only visible under unusual inputs | Adversarial input targeting hierarchy | ? |
| ? | ? | ? | ? | ? |

Fill from angle 24 research. Add rows for any systematic failure class found.

---

### Table 3 — Phase 7 update candidates

For each validation method from Table 1 that is (a) agent-executable and (b) not currently in Phase 7:

| Method | Proposed Phase 7 addition | What it catches that current Phase 7 misses | Implementation cost | Priority |
|--------|--------------------------|---------------------------------------------|--------------------|----|
| ? | ? | ? | ? | ? |

**Constraint on proposals:** Phase 7 must remain agent-executable without human trial runs. Any method requiring a real user running the kit on a real task is out of scope for Phase 7 — flag it for the weakness_register.md instead ("behavioral testing against live tasks is not done in Phase 7; user should run X before trusting the kit in production").

**If Table 3 is empty:** research confirmed that two-auditor verbal review + canary is the best currently available agent-executable validation method. Record as CONSENSUS: "no superior agent-executable validation method found; behavioral testing against live tasks remains a manual step." This is an honest gap, not a failure.

---

### Contradiction pairs to watch

1. **Adversarial review vs behavioral testing (angle 22 vs 24):** Angle 22 (how to test if a kit works) may produce findings that behavioral testing is the only reliable validation — verbal review catches obvious errors but misses systematic compliance failures. Angle 24 (robustness and edge cases) may find that even behavioral testing has systematic blind spots. These don't necessarily contradict, but if angle 22 argues "verbal review is insufficient" while angle 24 provides only edge cases (not a replacement method), the synthesis must surface this as a GAP rather than claiming it's resolved.

2. **Agent-executable vs comprehensive (angles 22 and 23):** The most comprehensive validation methods likely require human trial runs. The most agent-executable methods (verbal review, canary) are the least comprehensive. If research confirms this is an inherent trade-off with no workaround: flag it in weakness_register.md. Don't pretend the gap can be closed by adding more Phase 7 steps.

3. **Canary design (existing kit vs angle 24 findings):** `scripts/canary_spec.md` already exists as a provisional canary design based on 8 violation types. Angle 24 may surface systematic failure classes not in the current canary. If so: update canary_spec.md. If angle 24 confirms the current 8 types are sufficient: close the provisional flag on canary_spec.md.

---

## Relationship to existing kit components

Before finalizing Table 3 updates, check these existing files:

- `scripts/verify_prompt.md` — current two-auditor prompts. If Table 3 adds a new check, decide: does it go into verify_prompt.md as a new auditor question, or into ENTRYPOINT Phase 7 as a new step?
- `scripts/canary_spec.md` — provisional canary with flip trigger on angle 67. Angle 24 may update the violation menu. If updated: note in design_log that canary_spec.md was revised based on angle 24 findings.
- ENTRYPOINT Phase 7 gate checklist — any new agent-executable method from Table 3 should appear here as a `[ ]` checkbox.

---

## Expected synthesis output file

`research_archive/synthesis-kit-validation.md` containing:
- Table 1 filled (validation method inventory, agent-executable column filled)
- Table 2 filled (edge case classes with detection methods)
- Table 3 filled (Phase 7 update candidates, or honest GAP statement if empty)
- Contradiction pairs resolved or flagged
- Canary update decision (does angle 24 change `scripts/canary_spec.md`?)
- Null results (what research found no evidence on — especially: no controlled studies on kit-specific validation probably expected)

**Immediately after synthesis:**
1. Apply Table 3 updates to ENTRYPOINT Phase 7 and/or `scripts/verify_prompt.md`
2. If canary update decision = YES: update `scripts/canary_spec.md`
3. If Table 3 is empty: add entry to `weakness_register.md.template` under "Coverage limits": "Behavioral testing against live tasks is not automated in Phase 7"
