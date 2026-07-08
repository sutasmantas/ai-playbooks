# Verifier Prompts for Kit Content

Two auditors, both dispatched with **Read, Grep, Glob ONLY** — no Edit, Write, Bash. Auditors find problems; they do not fix them. Dispatch both in parallel for any non-trivial kit artifact. Each looks for a different failure class.

Dispatch both for every file during Phase 6, and again on the complete assembled kit in Phase 7.

---

## Structural pre-check (runs before both auditors — deterministic, not judgment)

Before dispatching Auditor A and B, verify these structural requirements mechanically (Read + Grep — no interpretation needed):

- [ ] Every procedure file has a `## When to skip` section AND a `## Do NOT skip even when tempted` section
- [ ] No rule uses soft language: grep for "try to", "prefer", "if possible", "where appropriate", "ideally", "generally" — each hit is a finding
- [ ] Every rule is in imperative mood (MUST/ALWAYS/NEVER/DO NOT) or explicitly marked as optional (with the optional-because documented)
- [ ] The file ends with a `**Trace:**` line citing justification for the rules
- [ ] No TBD, TODO, placeholder text, or "add examples here" present

These are not sent to the auditors — they are checked before dispatch. Any failure here is a structural RED finding, logged separately, and counts against the same 3-round cap. Fix structural failures before running the semantic auditors — a file with TBD sections wastes semantic auditor capacity.

---

## Hard rules for both auditors

1. **Tool scope:** Read, Grep, Glob only. No Bash, no Edit, no Write.
2. **Input hygiene:** The artifact and the done-criteria ONLY. Do NOT include the producer's reasoning, chat history, plan rationale, or what the producer was trying to do. If producer reasoning leaks in, the auditor rationalizes instead of reviews.
3. **No re-negotiation:** Producer does not push back before the verdict is delivered. Verdict first, then fixes.
4. **Verbatim quoting — enforced:** Every finding quotes the offending text verbatim with file path and line number. Before reporting a finding, verify the quote literally exists at that location. If it cannot be verified: reject the finding before reporting. Unverified findings are hallucinated findings.
5. **Cite the checklist by number** when applicable. Unlisted findings are allowed — flag them `(unlisted)`.
6. **"Wait —" before finalizing findings:** Re-read your own findings. Did you hallucinate any quotes? Did you miss an obvious category? Did you flag something the done-criteria explicitly allows?

---

## The checklist (both auditors use this)

**1. Rule clarity** — Every rule in the file can be followed without producer context. A rule like "do this thoughtfully" or "handle edge cases appropriately" requires interpretation that a fresh agent won't have. Flag any rule that requires the producer's mental model to execute.

**2. No soft language** — "try to", "prefer", "if possible", "where appropriate" are not rules — they are wishes. Either the rule is required (must/always) or it is not a rule (remove it). Flag every instance of soft language.

**3. Negative rules present** — For every rule specifying what TO do, is there a corresponding rule or clear implication of what NOT to do? Missing negative rules leave the agent free to fill gaps with behavior that violates the intent. Flag any rule whose complement case is unspecified.

**4. Decision hierarchy determinism** — When two rules in this file could conflict, which takes precedence? If the answer is unclear, flag the conflict. A kit that creates ambiguous situations produces inconsistent behavior.

**5. Done-criteria testable** — If the file specifies any success condition or completion criterion: is it testable without running the kit? "High quality output" is not testable. "Output contains X and does not contain Y" is testable. Flag any criterion that requires judgment to evaluate.

**6. No producer context leaked** — Comments like "I added this because...", "this handles the case where...", explanations of the producer's reasoning embedded in the file. The file should stand alone. Flag any prose that reads as the producer talking to the reader rather than the rule talking to the executor.

**7. Scope matches the file's purpose** — Does everything in this file belong here, or has content crept in that belongs in a different file? Flag content that is out of place.

**8. Examples present where needed** — Rules that are non-obvious in application benefit from examples. Abstract rules without examples produce varied interpretations. Flag any rule that a new agent would plausibly apply incorrectly without an example.

**9. Contradiction scan** — Read the file against itself. Do any two rules contradict each other? Flag any pair of rules that could produce conflicting behavior in the same situation.

**10. Trace line present** — Does the file (or relevant rule) have a Trace: section citing why this rule exists? Rules without traces become cargo cult over time. Flag any rule whose justification is not documented.

---

## Auditor A — Completeness Auditor

> You are the **Completeness Auditor** for this kit file. You have ZERO context about what the producer intended. Your job is to find **what is MISSING**.
>
> **Self-preference bias warning:** This file was likely produced by an AI system similar to yourself. Your strongest failure mode is finding it complete because it *matches your output distribution* — it was written the way you would write it. Apply extra scrutiny to any section that feels complete without you being able to point to a specific concrete reason why. "It covers the topic" is not a reason. "It covers the following specific use cases: [list]" is a reason.
>
> Frame everything as: *"what would a senior kit designer be unhappy was not included here?"*
>
> **Your input:**
> - The kit file to review: [PASTE PATH]
> - The done-criteria for this file: [PASTE FROM PLAN]
> - The broader goal the kit serves: [PASTE FROM DESIGN LOG — goal model section]
>
> Look for:
> - Use cases the file does not cover — situations a real user would encounter that these rules do not handle
> - The "what NOT to do" complement for rules that only specify what to do (checklist item 3)
> - Soft language that makes rules optional when they should be required (checklist item 2)
> - Missing examples for rules that are non-obvious in application (checklist item 8)
> - Rules that silently assume context the user of this kit won't have
> - Anything the done-criteria requires that the file does not deliver
>
> **Output format:**
>
> ```
> ## Findings
>
> 1. [Verbatim quote or specific gap description + file:line if applicable] — violates check #N — [why the absence matters]
> 2. ...
>
> ## Did not check
>
> [Anything you could not assess with the artifacts given]
>
> ## Verdict
>
> [GREEN | YELLOW | RED]
> ```
>
> GREEN: file is complete for its stated purpose, no blocking gaps.
> YELLOW: gaps present but none would block a real user; note for improvement.
> RED: gaps that would cause a real user to fail or be misled.

---

## Auditor B — Correctness Auditor

> You are the **Correctness Auditor** for this kit file. You have ZERO context about what the producer intended. Your job is to find **what is WRONG**.
>
> **Self-preference bias warning:** This file was likely produced by an AI system similar to yourself. Your strongest failure mode is confirming rules that *sound right* because they match your training distribution's idea of what a good rule looks like. Apply extra scrutiny to any rule that feels correct without a specific falsifiable reason. "The rule is clearly stated" is not correctness evidence. "The rule produces behavior X in situation Y and that behavior is right for goal Z" is correctness evidence.
>
> Frame everything as: *"if you had to use this kit file right now, what would you fix FIRST?"*
>
> **Your input:** identical to Auditor A's input.
>
> Look for:
> - Rules that contradict each other within this file (checklist item 9)
> - Decision hierarchy ambiguity — two rules could fire in the same situation with conflicting results (checklist item 4)
> - Rules with soft language that would produce inconsistent behavior (checklist item 2)
> - Producer context embedded in the file — the file requires reading the producer's mind to execute correctly (checklist item 6)
> - Rules that are technically correct but would produce the wrong behavior for the goal — the rule is internally consistent but misaligned with what the kit is trying to achieve
> - Anything that "looks right" but would cause unexpected behavior in real use
>
> **Output format:**
>
> ```
> ## Correctness findings
>
> 1. [Verbatim quote + file:line] — violates check #N — [observable evidence of wrongness]
> 2. ...
>
> ## Did not check
>
> [Anything you could not assess with the artifacts given]
>
> ## Verdict
>
> [GREEN | YELLOW | RED]
> ```

---

## Dispatch protocol

1. Spawn both auditors in parallel — independent subagents, no shared context.
2. Log raw output to `diagnostics/last_verify_completeness.md` and `diagnostics/last_verify_correctness.md`.
3. Combined verdict:
   - Both GREEN → overall GREEN
   - Any RED → overall RED. Fix and re-dispatch (fresh subagents — not the same ones; they now have context)
   - YELLOW + GREEN or both YELLOW → overall YELLOW. Surface caveats to user, do not auto-promote to GREEN
4. Hard cap: 3 consecutive RED rounds on the same file → escalate to user. Do not re-dispatch. LLM-as-judge calibration ceiling is ~80% human agreement; past 3 rounds the loop oscillates without converging.

---

## When to skip full two-auditor dispatch

Skip the two-auditor dispatch (use quick self-check instead) ONLY when ALL of the following are true:
- The change is a single-field edit (one word, one sentence, one link corrected)
- The change cannot affect any other file (no cross-file dependency)
- The change corrects a clear factual error (typo, broken reference, wrong number)

Do NOT skip when:
- The change modifies a rule, procedure, or done-criterion (these affect behavior)
- The change is in a file that other files reference
- The change was produced to fix a RED audit finding (re-dispatch is required)

If in doubt: dispatch. The cost of a false positive is one wasted agent call. The cost of a false negative is a broken kit rule that ships undetected.

---

## Canary integration

A known-bad kit example is defined in `scripts/canary_spec.md`. Include it in the auditor inputs:

> The following is a DELIBERATELY INCORRECT version of a similar file. It contains known violations. Your first task is to flag at least [N] violations from the canary before reviewing the actual file. If you cannot flag [N] violations from the canary, your calibration is off — stop and report this rather than continuing.

Purpose: catches an auditor that rates everything GREEN regardless of content. If the auditor can't find the planted violations, its findings on the real file cannot be trusted.

Read `scripts/canary_spec.md` before dispatching auditors — it contains the violations list and the appropriate [N] count.

---

## Phase 7 whole-kit audit additions

When auditing the complete assembled kit (Phase 7), both auditors additionally check:

- **Cross-file consistency** — do rules in different files contradict each other?
- **Coverage completeness** — is there a use case the user would hit that no file in the kit handles?
- **Entry point clarity** — can a new agent start from ENTRYPOINT and reach the right file without producer guidance?
- **Archive present** — is the research_archive/ directory present alongside the kit files? If not: RED.
- **Weakness register honest** — does weakness_register.md acknowledge real gaps, or does it say "no known weaknesses"? A kit with no acknowledged weaknesses is not trustworthy.
