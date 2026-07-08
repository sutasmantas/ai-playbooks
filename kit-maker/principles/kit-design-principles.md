# Kit Design Principles

These are the synthesized principles for what makes a kit work. Each has a Trace citing its source.

**Status:** Provisional — based on Wave 1 research + claude_process extraction. Wave 2 research (blocked) may confirm, refine, or contradict these. Flip triggers documented for research-dependent claims.

---

## 1. Rules must be followable without the producer's mental model

A rule like "handle this thoughtfully" or "use good judgment here" is not a rule — it requires the producer's mind to execute. Rules must be followable by a fresh agent with only the kit file.

Test: give the rule to someone who has never seen this domain. Can they follow it, or do they need to ask you what it means?

**Flip trigger:** If research on LLM instruction-following (angles 59-62) shows that some class of "soft" language reliably produces correct behavior without specification, this principle is too strict for that class.

Trace: Wave 1 research — instruction specificity findings. claude_process rule clarity checklist item 1. Prompt auditing criterion 1 (behavioral guidance specificity).

---

## 2. Hard caps prevent quality degradation

Quality rules beyond a threshold produce confusion and conflict, not improvement. Concrete numbers from research:
- Hard cap: ≤7 principles in any single file
- Soft limit: 8-10 rules before stacking effects appear (negative interference between rules)
- Hard cap: 3 failure modes per procedure (more degrades quality — anti-sycophancy research)
- Hard cap: 3 RED audit rounds before escalating (LLM-as-judge ceiling ~80% human agreement; past 3 rounds, oscillation without convergence)

**Flip trigger:** If Wave 2 research (angle 18 — kit limits/diminishing returns) produces different thresholds with higher-quality evidence than Wave 1, update these numbers.

Trace: Wave 1 — 8-10 rule stacking threshold. claude_process — 3 failure modes cap, hard cap ≤200 pitfall entries, ≤7 principles. Anti-sycophancy checklist (arXiv 2506.17367).

---

## 3. Negative rules are as important as positive rules

A rule specifying what TO do leaves the agent free to fill the "what NOT to do" gap with its training default — which may contradict intent. Every rule needs an explicit or clearly implied complement.

"Do X" → "Do X and NOT Y, Z" (where Y and Z are the failure modes that look like X).

Trace: Wave 1 — instruction specificity and negative rule absence. claude_process — contradictions between rules without decision hierarchy. Prompt auditing criterion 3 (missing negative rules).

---

## 4. Decision hierarchy must be deterministic

When two rules could fire in the same situation, the kit must specify which takes precedence. Ambiguous priority produces inconsistent behavior that is hard to diagnose.

Every kit file with more than one rule should have an explicit priority ordering or conditional ("Rule A applies unless X, in which case Rule B").

Trace: claude_process — decision hierarchy determinism. Prompt auditing criterion 4.

---

## 5. Trace lines prevent cargo cult

Rules without traceable justification become ritual — followed because they exist, not because they work. When research is updated or findings change, untraceable rules cannot be evaluated for revision.

Every rule or procedure in a kit must have a `Trace:` line citing its source. Sources: a specific research finding, a specific observed failure (with date and context), or a specific design decision.

Trace: claude_process — Trace lines in all procedures. Research archive design (angle 56-57). The principle that a kit without its research archive is a cargo cult by design.

---

## 6. The research archive ships with the kit

Rules produce cargo cult behavior when separated from their justification. The research archive is what allows the kit to be improved, evaluated, and extended. A kit without a research archive cannot be trusted to be correct, cannot be improved safely, and cannot be handed off to a new user without re-researching everything.

This is a hard rule, not a suggestion.

Trace: claude_process — no research archive (critical gap identified in H16 extraction). Archive amnesia anti-pattern in pitfall_register.md. The structural design decision to always ship research alongside the kit.

---

## 7. Known gaps are more valuable than false confidence

A kit that says "no known weaknesses" is not trustworthy — it means the builder didn't look, not that there's nothing to find. The weakness register is the trust mechanism. Users who can see what a kit doesn't do can compensate; users who think a kit does everything cannot compensate.

This is a structural honesty requirement: weakness_register.md must acknowledge real gaps, or the kit is not honest about its scope.

Trace: claude_process — canary (known-bad example for auditor calibration). strength/weakness register. Research gap documentation pattern. The principle that known limitations are more useful than hidden ones.

---

## 9. Default user is a human with sparse input

A kit's intake must work from a one- or two-sentence human prompt ("I want to research X," "help me find better search queries for Y"). The kit must ask clarifying questions to extract what it needs — it cannot assume a pre-structured domain brief, a vocabulary cluster list, or prior knowledge of the kit's concepts.

The kit-maker process is a special consumer that provides structured input. It is not the baseline. Any kit must work for a human first; kit-maker process integration is an optional layer on top.

Test: give the kit only "I want to research instruction-following in LLMs" and nothing else. Can it produce useful output, or does it stall waiting for structured input the user was never going to provide?

Trace: Phase 2 direction decision 2026-07-05 — user noted that humans naturally give sparse input, and designing kits for structured expert input limits their usefulness and excludes the most common use case.

---

## 8. The kit can run with this file set — no more, no less

Rule inflation (adding rules after every failure without retiring) and rule attrition (rules that become unreachable or contradictory) are both failure modes. The kit should have the minimum rule set that produces the desired behavior. More rules is not more quality.

Hard size caps exist for a reason: they enforce satisficing on the kit itself.

**Flip trigger:** If real use produces failures that these rules don't catch, add rules. If rules are repeatedly triggering incorrectly, retire them. The register size cap (200 entries) enforces this cycle.

Trace: claude_process — hard size caps (≤7 principles, ≤350 words CLAUDE.md, ≤200 pitfall entries). Rule inflation anti-pattern. Kit-at-right-scope memory (feedback_kit_at_right_scope.md).
