# Kit-Maker Weakness Register

Known gaps in the kit-maker process itself. The kit-maker requires kits it produces to have honest weakness registers — it should hold itself to the same standard.

---

## Gap 1 — Research wave requires Claude Code workflow tool

**What the kit assumes:** Kit builders can run parallel research waves using the Workflow tool (`kit-maker/scripts/research-wave.js`).

**The limitation:** The Workflow tool is Claude Code-specific. Kit builders using other agent environments (API, non-Claude models, Claude.ai web) cannot run parallel research waves. They would need to serialize research — one angle at a time — which significantly increases the time cost and may produce less consistent evidence classification across angles.

**Mitigation:** Phase 3 documentation makes explicit that research waves are parallel and require Workflow capability. Sequential research is possible but not documented. Add fallback instructions for serialized research to Phase 3.

**Open:** PARTIAL — parallel research workflow is documented; sequential fallback is not.

---

## Gap 2 — Behavioral contract decay validation is untested at scale

**What the kit claims:** The Hard Rule 13 behavioral contract elements (including decay warning) reliably produce goal-directed advisor behavior across sessions.

**The limitation:** This claim rests on practitioner consensus, not controlled measurement. We don't know how many sessions or turns a behavioral contract remains effective before significant decay occurs. The decay warning is self-referential — an agent that has decayed won't reliably read its own decay warning.

**Mitigation:** CLAUDE.md (project root) includes a session-start direction-drift check as an external trigger, partially compensating for self-referential failure. But the drift check is also decay-susceptible.

**Wave 2 relevance:** Angle 119 (advisor behavior) and 59-63 (behavioral rule compliance) directly address this. Findings may change Hard Rule 13 wording.

**Open:** YES — no empirical validation. Flip trigger: controlled study showing decay rate and effective mitigation method.

---

## Gap 3 — Evidence classification depends on researcher judgment

**What the kit claims:** Claims are classified as empirical / consensus / anecdote by the research agent, and this classification is reliable enough to drive synthesis decisions.

**The limitation:** The classification boundary between "consensus" and "empirical" is fuzzy. A well-powered practitioner survey could be either. A single-lab study might be classified "empirical" but have low external validity. The kit provides no threshold for what makes evidence "empirical enough" to anchor a procedure rule.

**Mitigation:** Verify pass on `empirical`-classified claims (Phase 3 step 6) catches false-positive empirical claims. But the verify pass uses the same agent doing the same classification — it's not independent verification.

**Wave 2 relevance:** Angles 108-114 (research quality criteria) and 150 (confidence calibration) directly address this.

**Open:** YES — no calibration threshold documented. Provisional rule: claim is empirical only if it cites a study with n > 20 and a named methodology (RCT, observational, survey with described sampling). Add this threshold to research-quality.md.

---

## Gap 4 — Two-auditor model has no calibration test

**What the kit assumes:** Completeness and Correctness auditors, each using Read/Grep/Glob only, produce reliably non-overlapping and comprehensive findings.

**The limitation:** We don't know whether two auditors using the same tool scope on the same files produce genuinely independent findings or whether they anchor on the same features of the document. The canary kit (canary_spec.md) documents expected violation types, but no canary test has been run to calibrate auditor sensitivity or false-positive rate.

**Mitigation:** Two auditors by design see different failure modes (completeness = what's missing; correctness = what's wrong). The cognitive search task differs enough to expect partial independence.

**Wave 2 relevance:** Angles 22-24 (kit validation and behavioral testing) and 48-55 (claude_process patterns including two-auditor design) directly address this.

**Open:** YES — no calibration data. Flip trigger: run canary_spec.md against both auditors and measure which violation types are caught vs. missed.

---

## Gap 5 — Research saturation is self-reported

**What the kit claims:** Research saturation is reached when "consecutive queries return claim keys already in the set." This judgment is made by the same agent conducting the research.

**The limitation:** An agent that has missed a class of evidence won't know to report that it missed it. Self-reported saturation has a known failure mode: the agent concludes its prior-knowledge frame is complete because no new evidence contradicts it, when in fact the frame is missing entire angles.

**Mitigation:** GitHub broad discovery angle (mandatory first angle) searches by code patterns rather than topic terms, providing one orthogonal signal. Completeness auditor on research archive (Phase 7) catches structural gaps after the fact.

**Open:** PARTIAL — one orthogonal signal present; independent saturation verification not present.

---

## Gap 6 — Phase 2 domain brief accuracy depends on user's prior knowledge

**What the kit assumes:** The Phase 2 domain brief accurately captures quality dimensions, systematic omission bias, and realistic input scale for the domain.

**The limitation:** A user with shallow domain knowledge produces a shallow domain brief, which produces shallow research angles, which produces a kit that doesn't encode the domain's actual failure modes. The kit has no mechanism to detect a low-quality domain brief before Phase 3 launches.

**Mitigation:** Domain brief confirmation gate (Phase 2) and user approval step provide a check, but only if the user notices their own knowledge gap. The interview questions do ask "what would an expert immediately notice is missing?" — this helps, but doesn't fully compensate.

**Open:** YES — no domain-brief quality validation. Provisional: add an auditor pass on the domain brief before Phase 3 launches, asking "what quality dimensions are likely missing from this brief given the domain?" Could use the completeness auditor prompt.

---

## Gap 7 — Kit-maker has no realistic-scale test

**What the kit requires of generated kits:** At least one test run on a realistically-sized input (Phase 2 realistic input scale) must complete before Phase 7 gate closes.

**The irony:** The kit-maker itself has not been tested at "realistic scale" — a scenario where a domain expert with no prior kit-making experience uses it to build a complete kit for a genuinely novel domain. All kit-building runs to date have been conducted by the same person who built the kit-maker, with full context of how it works.

**Mitigation:** The code review kit test-run-02 (520-LOC, cross-cutting) is a realistic-scale test of the generated kit, not of the kit-maker process. The kit-maker process itself has not been handed to an external user.

**Open:** YES — no external-user test. This gap closes when a contributor uses kit-maker to build a new domain kit without guidance from the kit-maker's author.

---

## Gap 9 — Agent cannot self-validate visual output

**What this means:** Any kit generated for a domain with visual output (UI, frontend, layout, design, charts) has a built-in blind spot — the agent cannot reliably detect overlap, spacing errors, alignment issues, or color contrast problems from code alone. The agent may produce correct code that visually breaks in ways it cannot see.

**Scope:** Only affects kits where the domain's quality dimensions include visual correctness. Kits for non-visual domains (code review, meeting notes, research) are unaffected.

**Current mitigation:** Phase 2 now includes a "Visual output" field in the domain brief. Phase 7 includes a conditional gate requiring a human visual review step if the domain brief says yes. These are procedural gates — they require a human to review, they do not fix the underlying capability gap.

**Research:** USER-05 and USER-06 angles address what VLMs actually catch vs. miss and what compensatory structures are tractable in a kit (rendering tools, screenshot annotation, explicit visual checklists).

**Regression sub-problem:** visual domains have a second failure mode beyond evaluation blindness — agents fix one visual issue and inadvertently break others via CSS cascade, shared component styles, or z-index stacking. The fix: kit procedures for visual-output domains must include (1) blast-radius naming before any change, (2) minimum-sufficient-change rule, (3) blast-radius verification after. These are now required in Phase 7 gate but not yet in a procedure file.

**Open:** YES — Phase 7 gate names both gaps (evaluation blindness + regression), but no procedure file yet specifies how to run human visual review or structure the blast-radius check for visual domains.

---

## Gap 8 — Intake protocol boundary is unresearched

**What the kit now requires (Hard Rule 13 element 8):** Generated kits must include an intake protocol specifying what the agent asks before acting (essential unknowns) vs. what it can safely infer (safe defaults).

**The limitation:** The essential/inferable split has not been researched. The provisional stub says "name what you cannot infer" but provides no decision framework for when something is inferable vs. essential. Different domain types may have very different splits.

**Research:** USER-01 (essential vs inferable framework) and USER-02 (front-loaded intake design) are queued. Until research completes, generated kits will have an intake section but no validated classification of what goes in it.

**Open:** YES — no framework. Flip trigger: USER-01/02 synthesis produces a decision tree or heuristic for classifying any information item as essential/inferable given domain type.

---

## Provisional decisions

| Decision | Evidence | Flip trigger |
|----------|----------|-------------|
| 200-line CLAUDE.md soft limit | Angle 19 consensus finding | Wave 2 angle 18/19 research returns contradicting empirical data |
| Hard cap at 3 auditor-fix rounds | Satisficing judgment; no research | Wave 2 angle 137 (productive iteration) returns evidence on optimal iteration count |
| One agent per research angle | Workflow design choice | Wave 2 angle 18 (kit limits) returns evidence that batching angles improves quality |
| Empirical/consensus/anecdote three-way split | Design decision; no comparative validation | Wave 2 angle 150 (confidence calibration) returns evidence for a different classification scheme |
| Disagreement protocol "inform once then comply" pattern | Provisional design — user input, practitioner consensus | USER-03 research returns evidence on optimal pushback frequency or framing |
| Intake protocol "ask essential, infer safe defaults" split | Provisional design — user input, no classification framework yet | USER-01/02 research returns decision framework for essential/inferable boundary |
| Critical rules must appear at top AND end of behavioral contract | HIGH confidence empirical — Batch 1 Cluster A (terminal constraint decay 50%, salience recovery 90-100%) | Cluster A synthesis validates or refines |
| Counter-intuitive constraints require worked examples not restatement | HIGH confidence empirical — Batch 1 Cluster A | Cluster A synthesis validates or refines |
