# Synthesis Target: Angles 143–148 — Problem-Solving Gaps in Kit Procedures

**Purpose:** Pre-planned synthesis structure for six problem-solving mechanism angles that fix known weaknesses in current kit procedures. Each of these mechanisms is absent from the kit despite being a documented failure mode. This target is required before Wave 2 runs — without it, synthesis agents have no model to build toward.

**When to use:** Phase 4 SYNTHESIS after angles 143–148 have been researched. Read before touching archive files.

**Expected research character:** Mix of `empirical` (especially 143, 145, 147 — these have academic grounding) and `consensus`/`anecdote` (especially 144, 146, 148 — newer or more domain-specific). Unlike the rule-writing cluster, these mechanisms come from established fields (cognitive psychology, organizational learning, software engineering) so empirical evidence IS expected for several. Do not default to consensus when empirical literature exists.

---

## The question this synthesis must answer

Six mechanisms are absent from kit procedures. For each, this synthesis must determine:

1. **Does embedding it as an explicit step change output quality in a measurable way?** (vs. leaving it implicit or instructing "use judgment")
2. **What is the structural trigger that reliably fires it?** (not "think about X" but "before doing Y, do Z")
3. **What does it look like when the mechanism fails silently?** (the detectable failure signature)

If the answer to (1) is "no evidence / too weak to act on" for a mechanism: do NOT add it to a kit procedure. Document as GAP. Adding procedures without evidence is exactly the problem these angles are designed to prevent.

---

## Synthesis structure

### Table 1 — Mechanism-to-procedure mapping

For each of the six mechanisms, fill from research:

| Mechanism | Current kit status | Research verdict | Embed as: | Failure signature | Confidence |
|-----------|-------------------|------------------|-----------|-------------------|------------|
| 143: Criteria-before-evaluation | Missing — alternatives-generation triggers without explicit criteria | ? | Step in alternatives-generation? Gate in Phase 5? | Alternatives all support the original option | ? |
| 144: Second-order thinking | Missing — no "what does adding this rule produce?" gate | ? | Phase 6 rule-addition gate? CLAUDE.md principle? | Kit rules interact unexpectedly in unplanned scenarios | ? |
| 145: Backward chaining | Intuitive only — working-kit backward trace is informal | ? | Phase 5 planning step? Phase 2 success-condition question? | Kit plan describes steps but can't explain why they produce the goal | ? |
| 146: Double-loop learning | Missing — pitfall register is single-loop (fix procedure, not question it) | ? | Phase 1 gate question? Periodic procedure retirement trigger? | Same procedure failure recurs in multiple kits with patches, never removal | ? |
| 147: MECE decomposition | Informal — six-dimension pass and completeness auditor designed by intuition | ? | Completeness auditor checklist? Phase 2 quality-dimensions extraction? | Coverage gaps that are systematic across all reviews (a dimension is always missing) | ? |
| 148: Rubber duck debugging | Missing — no articulation gate before finalizing procedure steps | ? | Phase 6 per-step articulation check? Auditor dispatch trigger? | Procedure steps with implicit assumptions visible only during execution, not reading | ? |

Fill "Research verdict" as: EMBED (evidence supports explicit mechanism), OPTIONAL (weak evidence, include if cheap), SKIP (no evidence or counterindicated), or CONTEST (conflicting evidence).

---

### Table 2 — Structural trigger candidates

For each mechanism research recommends embedding, specify the trigger:

| Mechanism | Trigger condition | Trigger form | Scope |
|-----------|------------------|--------------|-------|
| 143 | Before generating or evaluating alternatives | "Before listing alternatives: write the criteria that a correct answer must satisfy. These criteria must exist before any alternative is named." | alternatives-generation.md Step 1 |
| 145 | Before Phase 5 plan is written | "Starting from the success condition (Phase 2): what must have been true one step prior for success to be achievable? Work backwards until you reach the current state." | Phase 5 planning step |
| 147 | Before completeness auditor is dispatched | "Decompose the kit's scope into an issue tree: what are the mutually exclusive, collectively exhaustive categories this kit must cover? Every category must be named before the audit runs." | Phase 7 completeness auditor prompt |

Add rows from research. Delete rows where research returns SKIP.

---

### Table 3 — Failure signatures (for verify_prompt.md update)

For each mechanism, the failure signature is detectable in kit output without running the kit:

| Mechanism | Detectable failure pattern | Where to look |
|-----------|---------------------------|---------------|
| 143: Criteria-before-eval | Alternatives all vary one parameter of the original approach; none rest on a different assumption | alternatives-generation step output |
| 144: Second-order | New rule added to CLAUDE.md has no "interacts with" cross-reference | CLAUDE.md rule text |
| 145: Backward chaining | Phase 5 plan has steps that don't trace to the success condition | plan.md |
| 146: Double-loop | Pitfall register entries for the same procedure class exist in >1 kit | cross-kit pitfall register comparison |
| 147: MECE | Completeness auditor finds the same missing dimension in every review | auditor output |
| 148: Rubber duck | Procedure steps that require re-reading to understand; ambiguous noun reference | procedure file text |

**Note:** Table 3 feeds directly into `scripts/verify_prompt.md` — for each EMBED result, add the failure signature as a detectable checklist item in the auditor prompt.

---

### Pre-identified cross-mechanism interactions

These pairs may produce conflicting or compounding guidance in synthesis:

1. **143 (criteria-before) and 141 (genuine alternatives selection):**
   Both address the alternatives-generation failure mode from different angles. 143 attacks it by forcing criteria upfront; 141 attacks it by forcing commitment before evaluation. Research may show these are additive (criteria + commitment = stronger than either alone) or redundant (one subsumes the other). Resolve: if findings show they address different failure modes, include both as separate steps. If one subsumes the other, collapse.

2. **145 (backward chaining) and ENTRYPOINT Phase 5 planning:**
   Backward chaining is already partially present (Phase 2 asks for success condition; Phase 5 builds toward it). Research may show the current formulation is adequate or that an explicit backward-trace step is needed before the plan is written. If backward chaining is already structurally present in ENTRYPOINT: document as CONFIRMED rather than adding new steps.

3. **146 (double-loop) and procedure retirement:**
   Double-loop triggers procedure-level questioning. The pitfall register currently captures procedure failures but doesn't prompt retirement. Research may show a specific trigger threshold (N failures = question whether procedure should exist) vs. a softer "periodic review." If evidence supports a specific threshold: add to pitfall_register.md format.

4. **147 (MECE) and completeness auditor:**
   The completeness auditor is the natural home for MECE decomposition — it already asks "what's missing?" A MECE-structured auditor prompt would be the concrete implementation. If research supports MECE in auditing specifically: the output of this synthesis should be a revised completeness auditor template in `scripts/verify_prompt.md`.

---

### Expected synthesis output file

`research_archive/synthesis-problem-solving-gaps.md` containing:

- Table 1 filled (mechanism verdict for each of the six)
- Table 2 filled (structural triggers for mechanisms marked EMBED)
- Table 3 filled (failure signatures)
- Cross-mechanism interactions resolved or flagged CONTESTED
- GAP section: mechanisms where evidence is too thin to act on
- Recommended changes to existing kit files (alternatives-generation.md, Phase 5 gate, verify_prompt.md, completeness auditor)

---

### What this synthesis is NOT producing

- A validation of all six mechanisms — some may return SKIP (evidence too weak or counterindicated). This is a valid outcome.
- A full cognitive psychology review — scope is "can this mechanism be embedded in a kit procedure and produce reliable output quality improvement?"
- New procedures for every mechanism — Table 2 only produces triggers for EMBED results; SKIP/CONTEST mechanisms do not produce new procedure steps
