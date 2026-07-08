# Canary Specification

A canary is a deliberately wrong kit file — a known-bad example used to test auditor calibration before the auditor reviews real files. If an auditor cannot flag the planted violations, its GREEN verdict on a real file cannot be trusted.

**Status:** Provisional — angle 67 (canary design for non-code artifacts) is queued for Wave 2 research. This spec is a first-pass design based on the verify_prompt.md 10-point checklist. Review after Wave 2.

**Flip trigger:** If Wave 2 research shows that certain violation types (e.g. soft-language rules) are unreliable detection targets for LLM auditors, remove those violation types from canaries and note them as unchecked gaps in the weakness register.

---

## What a canary is NOT

- Not a "bad example" that is obviously terrible — obvious garbage doesn't calibrate an auditor, it just confirms the auditor reads at all
- Not a synthetic worst-case — violations should be realistic mistakes a producer might actually make
- Not a separate domain — use the same domain as the kit being reviewed, or a closely related domain
- Not a fixed set — the canary should be updated as new failure modes are discovered

---

## Canary design rules

**1. Target the 10-point checklist, not general badness**

A useful canary contains violations that map to specific items in the shared auditor checklist. An auditor that passes on a canary with 3 embedded violations should name which 3 checklist items were violated.

**2. Violations must be plausible, not cartoonish**

Wrong: "This rule is bad and you shouldn't follow it"
Right: "Try to include examples where helpful" (soft language — checklist item 2)

The violation should look like something a well-intentioned producer might write.

**3. Include at least 3 violation types**

Calibration requires the auditor to demonstrate it can see at least 3 different failure classes, not just catch the most obvious one. Use 3-5 violations across different checklist items.

**4. Include one GREEN section**

A canary that is entirely broken doesn't calibrate — it just confirms the auditor can see anything. Include one section that is genuinely correct. An auditor that flags the correct section as wrong is over-flagging (also a calibration failure).

---

## Violation menu (for canary construction)

Pick 3-5 from this list when constructing a canary. Mark which items you chose so the auditor can be told what to find.

| Violation type | Checklist item | Example |
|---------------|----------------|---------|
| Soft language | 2 | "Try to include examples where the rule is ambiguous" |
| Missing negative rule | 3 | "Include a summary section" [without: "do NOT include a summary if the section is under 200 words"] |
| Rule requires producer context | 1 | "Handle edge cases appropriately" |
| Untestable done-criterion | 5 | "Output should be comprehensive and accurate" |
| Producer reasoning leaked | 6 | "I added this rule because we found that..." |
| Contradiction | 9 | Rule A says "always include X"; Rule B says "only include X when Y" with no priority ordering |
| No trace line | 10 | Any rule with no Trace: citation |
| Out-of-scope content | 7 | Section on implementation details in a rule file that specifies behavior |

---

## Canary structure template

```markdown
# [Domain] Skill: [SkillName] — CANARY VERSION

[Write a plausible-looking skill file for this domain. Embed N violations from the violation menu.
Mark the violations in an AUDIT KEY at the end — hidden from the auditor input, revealed after the verdict.]

---

## AUDIT KEY (hidden from auditor — producer reference only)

Violations embedded:
1. [Checklist item N] — "[verbatim text of the violation]"
2. [Checklist item N] — "[verbatim text of the violation]"
3. [Checklist item N] — "[verbatim text of the violation]"

Correct section: [which section was deliberately left clean]

Expected auditor result: RED, citing at least 3 of the above.
```

---

## How to use the canary in dispatch

From verify_prompt.md canary integration section:

1. Strip the AUDIT KEY from the canary before giving it to the auditor.
2. Give the auditor the canary FIRST with: "This is a test file for calibration. Find at least 3 violations before reviewing the real file."
3. If the auditor finds ≥ 3 violations from the correct categories: calibration passes. Review its real-file findings.
4. If the auditor finds < 3: stop. Do not use this auditor's findings. Re-dispatch with a fresh context.
5. If the auditor flags the correct section as wrong: over-flagging calibration failure. Same response: re-dispatch.

---

## Maintaining the canary over time

- After any new failure mode is added to pitfall_register.md with count ≥ 2: add the failure mode to the violation menu
- After any auditor passes on a real file that later turned out to be wrong: check if the violation type was in the canary; if not, add it
- Hard cap: 8 violation types in the menu at once. Retire violations that are reliably caught (>90% detection rate in real auditing) — they are no longer informative about calibration

Trace: Canary concept from claude_process (known-bad example for auditor calibration). LLM-as-judge calibration ceiling (arXiv 2501.11885 — ~80% human agreement ceiling for code review; analogous ceiling for text). The principle that a calibration test must be realistic enough that passing it is meaningful signal, not just a sanity check.
