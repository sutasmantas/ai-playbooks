# Synthesis Target: Angles 149–155 — Problem-Solving Structural Mechanisms

**Purpose:** Pre-planned synthesis structure for seven structural problem-solving mechanisms that could be embedded as explicit kit procedure steps. Priority P2 — structural improvements to Phase 5/6 decision-making and testing quality.

**When to use:** Phase 4 SYNTHESIS after angles 149–155 have been researched. Run AFTER P1 synthesis — P1 findings constrain which mechanisms are appropriate given what we learn about behavioral rule design (angles 59–63) and kit limits (angles 18–21 from P2-B).

**Expected research character:** Mix. Angles 149 (reversibility) and 150 (confidence calibration) have empirical grounding in decision science and LLM evaluation. Angle 151 (chunking) has cognitive psychology backing. Angles 152 (productive failure) and 153 (version comparison) have some empirical basis. Angles 154 (constraint relaxation) and 155 (non-monotonic solving) are more speculative — expect mostly consensus/anecdote.

---

## The question this synthesis must answer

Seven mechanisms that could be embedded in kit procedures. For each, synthesis must determine:

1. **At which phase or step does this mechanism add the most value?** (Phase 2, 5, 6, or 7?)
2. **What is the minimum viable implementation?** (A sentence in ENTRYPOINT? A dedicated procedure step? A template field?)
3. **What does the mechanism miss that its natural alternative doesn't?** (the cost of implementing it wrong)

This synthesis is NOT recommending all seven. Some will return SKIP — evidence too thin, cost too high, or already structurally present in the kit. The goal is to identify the 2–3 with the strongest evidence-to-cost ratio and implement those.

---

## Synthesis structure

### Table 1 — Mechanism implementation recommendations

| Mechanism | Best phase/step | Min viable implementation | Evidence-to-cost ratio | Verdict |
|-----------|----------------|--------------------------|----------------------|---------|
| 149: Reversibility | Phase 6 design decisions, Phase 5 plan | Add to alternatives-generation: "Is this decision reversible after the kit ships? If not, generate an additional alternative that keeps more options open." | ? | ? |
| 150: Confidence calibration | Phase 3 evidence classification, Phase 4 synthesis | Add calibration check to evidence classifier: "Would the confidence tier change if the strongest source were removed?" | ? | ? |
| 151: Chunking | Phase 6 CLAUDE.md and procedure design | Add to verify_prompt.md: "Are related rules grouped under named headers? A rule that appears without a grouping context is likely to be missed." | ? | ? |
| 152: Productive failure | Phase 7 test input design | Add to Phase 7 gate: "Design at least one test input specifically to fail on a known weakness. Does the kit fail informatively?" | ? | ? |
| 153: Version comparison | Phase 7 fix loop | Add comparison step after each auditor round: "Compare current version to previous on the specific failing criterion. Did it improve on THAT criterion, or did it change something else?" | ? | ? |
| 154: Constraint relaxation | Phase 6 alternatives generation | Add as optional alternative-generation technique: "Remove one requirement temporarily. What design becomes possible? Is the removed requirement load-bearing?" | ? | ? |
| 155: Non-monotonic solving | Phase 6 per-file draft | Add as optional technique: "Draft a deliberately flawed version of this rule, then critique it. Does the critique produce a better rule than direct drafting?" | ? | ? |

Fill verdict as: HIGH-VALUE (strong evidence, low cost — implement now), MEDIUM-VALUE (moderate evidence — implement as optional step), LOW-VALUE (weak evidence or high cost — skip), or ALREADY PRESENT (mechanism structurally present in current kit).

---

### Table 2 — What each mechanism catches that intuitive approaches miss

| Mechanism | Intuitive approach | What intuition misses | What mechanism catches |
|-----------|-------------------|-----------------------|----------------------|
| 149: Reversibility | "Choose the best option" | Hard-to-undo decisions that close off future options | Decisions where all alternatives lead to the same reversibility profile (different problem) vs. decisions where one alternative is clearly more reversible |
| 150: Confidence calibration | "Evidence is strong" | Fragile consensus — N sources all cite the same original, which itself is anecdote | Inflated confidence from circular citation chains |
| 151: Chunking | "Write clear rules" | Rules that are individually clear but lose each other when read in sequence | Rules that exceed compliance threshold because they're ungrouped |
| 152: Productive failure | "Test the happy path" | Failure modes that only appear at production scale or with adversarial input | Weaknesses that are invisible to pass/fail testing |
| 153: Version comparison | "The revision looks better" | Revisions that change surface appearance without fixing the root issue | Local improvement that doesn't track to criterion improvement |
| 154: Constraint relaxation | "Generate alternatives" | Alternatives that are all variations within the same constraint space | Alternatives that rest on genuinely different assumptions |
| 155: Non-monotonic | "Draft a correct version" | The ability to see what's wrong with an approach you already believe is correct | Implicit assumptions visible only when they're violated in a draft |

---

### Priority considerations

**Highest priority (if evidence supports):** 150 and 153. Both address problems with the research/synthesis pipeline (150) and the fix-loop (153) that are currently unaddressed. If these return HIGH-VALUE, implement before Wave 2 synthesis runs — the synthesis process itself will benefit.

**Lowest priority:** 155 (non-monotonic solving). This technique is unnatural to implement as a procedure step and has the weakest prior evidence. Unless research produces a specific controlled result showing quality improvement, it should remain SKIP.

**Already partially present:** 149 (reversibility) is already implicitly present in riskiest-first ordering (Phase 5) and provisional decision mechanism. Research may confirm it's structurally present rather than adding a new step.

---

### Expected synthesis output file

`research_archive/synthesis-problem-solving-structural.md` containing:

- Table 1 filled (implementation verdict for each mechanism)
- Table 2 filled (what each mechanism catches)
- Priority ranking for HIGH-VALUE mechanisms
- ALREADY PRESENT verdicts with specific file and line citations
- SKIP rationale for LOW-VALUE mechanisms
- Phase-specific implementation recommendations for HIGH-VALUE and MEDIUM-VALUE mechanisms

After synthesis, the HIGH-VALUE mechanisms go into the Phase 5 plan as explicit implementation items. MEDIUM-VALUE go into the weakness register as "researched but not yet implemented; implement when cost allows."
