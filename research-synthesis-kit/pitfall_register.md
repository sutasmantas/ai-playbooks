# Pitfall Register — Research Synthesis Kit

Failure modes observed during real use. Each entry: what happened, class, structural fix.

---

## P-01 — Cross-group contradiction scan absent (CRITICAL)

**What happened:** Step 2 as initially built scanned only intra-group contradictions. The second pass — checking whether conclusions from different groups imply contradictions at the design level — was structurally absent. This was caught by the Completeness Auditor (Round 1) and fixed before any output was produced.

**Class:** Scope underspecification. "Scan for contradictions" defaults to the smallest obvious scope (within a group). Cross-group is the non-obvious scope, and the one most likely to surface design-consequential conflicts.

**Structural fix (applied):** Step 2 now explicitly requires two passes: (1) intra-group, (2) cross-group implications. The short-form path also requires the cross-group scan.

**Propagation note:** This fix should propagate to kit-maker/procedures/research-synthesis.md Step 2 — the upstream source did not distinguish the two scan types.

**Source:** Phase 6 Round 1 completeness audit (2026-07-04), plan.md Discovered Work item 3.

---

## P-02 — Threshold term shorthand introduced before definition

**What happened:** "HIGH-verify" (informal shorthand for "medium+ verify confidence") was introduced in Step 1's merge exception without a definition, then propagated to Step 3.5 without being defined. A fresh agent reading the procedure would encounter the shorthand before the formal definition and apply it inconsistently.

**Class:** Undefined term propagation. Terms introduced in early steps for convenience are used later as if defined, without a visible definition.

**Structural fix (applied):** All shorthand removed. "Medium+ verify confidence" is the canonical term. Defined in the Preamble at first use. Only the defined form appears in subsequent steps.

**Rule:** Define precision threshold terms in the Preamble. Any shorthand introduced before the Preamble definition is a residual — scan for it during auditing.

**Source:** Phase 7 cross-file correctness audit (2026-07-04), Key Learning 2 from Phase 6.

---

## P-03 — Write-timing checkpoint placed downstream of the step it guards

**What happened:** A "write X before Y" instruction was placed in Step 6 when its purpose was to prevent memory loss between Steps 2 and 3. The instruction was inoperable at its placement: by the time a fresh agent reached Step 6, Steps 2-5 were already complete and no checkpoint had fired.

**Class:** Write-timing mismatch. Checkpoint instructions placed at a step they are supposed to prevent from being skipped cannot protect the steps before them.

**Structural fix (applied):** Write-timing instructions moved to the end of the step whose output they checkpoint. A "write X before Y" instruction at the end of Step 2 fires before Step 3 begins.

**Rule:** Place checkpoint instructions at the step that produces the output to be written, not at the step that will need the output.

**Source:** Phase 6 Round 2 correctness audit (2026-07-04), Key Learning 3.

---

## P-04 — Observable violation condition missed boundary case (CRITICAL)

**What happened:** The initial observable violation for counter-prior requirement stated: "counter-prior section is empty (zero entries)." A synthesis with 5 HIGH groups but only 4 counter-prior entries would not trigger this observable — the section is not empty. The Phase 7 canary confirmed this: a missing entry for one HIGH group out of six would not have been caught by the original condition.

**Class:** Cardinality mismatch in observable violation. "Zero" catches total absence; "fewer than N" catches partial coverage. Rules written from a "typical case" perspective miss boundary cases.

**Structural fix (applied):** Observable violation now states: "the number of counter-prior entries is fewer than the number of HIGH groups." This fires for both zero-entry and partial-coverage cases.

**Rule:** When writing observable violation conditions for per-item requirements (one X per Y): the condition must check count parity (entries = HIGH groups count), not boolean presence (section exists / is non-empty).

**Source:** Phase 7 canary (2026-07-04), Key Learning 4.

---

## P-05 — Template status-tracking column misread as meta-instructions

**What happened:** The template's confidence map Action column contained text like "derive from (Step 3.7)" — the intended output content for that cell. A fresh agent (and the Correctness Auditor in Round 1) interpreted this as a meta-instruction: "derive this from Step 3.7" rather than a placeholder whose value should be literally written to the output.

**Class:** Status-tracking vs. result-tracking ambiguity. When a column holds the next required action (status-tracking) rather than the result of an action (result-tracking), the distinction is not visible without an explicit label.

**Structural fix (applied):** Added explicit clarifying comment to the Action column: "This IS the output text — write this exact string in the Action column of the confidence map. It is not a meta-instruction."

**Rule:** When a template column contains status-tracking text rather than result text, label it explicitly: "write the literal text below" vs. "fill in the result from step X."

**Source:** Phase 6 Round 1 correctness audit (2026-07-04), Key Learning 5.
