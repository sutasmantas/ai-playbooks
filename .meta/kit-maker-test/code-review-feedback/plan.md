# Phase 5 — Plan: Code Review Feedback Generator

## Strongest unsupported assumption

**"Six explicit coverage dimensions can replace perspective-based reading (PBR) at acceptable fidelity."**

Evidence: PBR (multiple reviewers taking distinct roles) outperforms structured checklists (51.5% vs 36.5% detection). The kit uses a single reviewer covering all 6 dimensions sequentially — this is a structured checklist, not PBR. We are explicitly substituting a less-effective mechanism because PBR requires multiple reviewers.

Acceptance criteria for test run: if the six-dimension pass on a real PR misses a security or correctness issue that would have been caught by a dedicated security-pass reviewer, this assumption has failed.

---

## File manifest (riskiest first)

Risk ordering criterion: files where an error in the procedure produces wrong output, not just incomplete output.

| Order | File | Riskiest claim | Risk if wrong |
|---|---|---|---|
| 1 | `procedures/review.md` | "Blocker requires named policy/risk" rule | Reviewer can still inflate or deflate severity by omitting justification |
| 2 | `procedures/review.md` | Six-dimension pass prevents coverage omission | Security issues escape; readability overrepresented |
| 3 | `CLAUDE.md` | Proactive next-step pattern (Hard Rule 13) | Kit goes silent after review; advisor contract broken |
| 4 | `weakness_register.md` | Checklist generalizability caveat documented | Kit user assumes CBR/PBR evidence applies without qualification |
| 5 | `pitfall_register.md` | Team policy parameterization | Test-missing blocker applied without team context |

---

## Build order

1. **`procedures/review.md`** — full 6-step procedure based on synthesis.md
2. **Two-auditor pass** — completeness + consistency, Read/Grep/Glob only
3. **`CLAUDE.md`** — behavioral contract + 3 domain-specific next-step examples
4. **`weakness_register.md`** — parameterization gap + checklist generalizability + severity disagreement
5. **`pitfall_register.md`** — top 7 pitfalls from research

---

## Two-auditor pass criteria

**Completeness auditor:**
- Every claim in synthesis.md that maps to a procedure step has a corresponding rule in review.md
- Six dimensions are ALL listed by name
- Severity audit step has the "policy or risk" criterion
- Edge cases: no-test change, security-touching PR, >400 LOC, multi-directory PR

**Consistency auditor:**
- No two steps give conflicting instructions for the same case
- "Blocking" label in procedure matches hard-blocker criteria in synthesis
- Exclusion rules (what NOT to comment on) are complete and non-overlapping
- Human review checklist aligns with what the procedure produces

---

## Test run design

**Input**: real or realistic PR diff with deliberate planted issues:
- A security issue that requires cross-cutting context (input validation, not locally visible)
- A correctness bug
- A naming preference that should be a nit, not a blocker
- A comment avalanche opportunity (same pattern repeated 3x)
- Out-of-scope issue in adjacent file

**Pass criteria:**
- Security issue caught AND labeled correctly
- Correctness bug caught AND labeled blocker with named risk
- Naming preference NOT labeled as blocker (no policy/risk named)
- Comment avalanche consolidated (1 comment, not 3)
- Out-of-scope issue NOT commented on

---

## Structural comparison hypothesis tracking

**Hypothesis:** Meeting notes (extractive, objective quality) vs. code review (generative+extractive, subjective quality) will reveal what is structural in the kit-maker vs. what was domain-specific.

**What to compare after test run:**
- Did the "policy or risk" anchor for severity appear because this domain needed it, or should meeting notes have a similar "evidence or attribution" anchor for decisions?
- Did the six-dimension coverage pass parallel the final-third check from meeting notes (both compensate for systematic omission biases)?
- Is the "comment avalanche consolidate" rule analogous to the meeting notes "deduplication" edge case?
- Does the two-auditor model perform the same way on generative output as on extractive output?
