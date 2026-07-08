# Design Decisions

Key architectural decisions made during Kit-Maker's development, with rationale.

---

## Decision 1: Research before building (Hard Rule 1)

**Decision:** No Phase 6 (Build) content may be drafted before Phase 3 (Research) and Phase 4 (Synthesis) exist.

**Alternatives considered:**
- Build first, research-validate after — faster first draft; allows "intuition-guided" starting point
- Interleave research and build — most flexible; can research exactly what's needed at each step

**Why research first won:** Building from intuition anchors the kit to what the builder already believes. Research surfaces the things experts take for granted — those are exactly the things that don't make it into procedures when built from intuition alone. Post-hoc research validates rather than informs. The code review kit research confirmed this: the severity-classification anchor (policy-or-risk framing) and the six-dimension coverage requirement both came from research, not intuition. Neither would have been in the kit otherwise.

**What "build first" loses:** Any claim in the kit that isn't traced to a specific research archive file has no falsifiability. When the claim turns out to be wrong, there's nothing to update — just a procedure rule with no source.

---

## Decision 2: Two separate auditors (not one combined review)

**Decision:** Completeness and Correctness are always dispatched as separate agents with separate restricted tool scopes. Neither knows what the other found.

**Alternatives considered:**
- Single combined auditor — simpler; one prompt instead of two
- Sequential auditors — Correctness reviews what Completeness surfaced

**Why independent auditors won:** A single auditor anchors on what it already found and stops looking. The completeness problem (what's missing) and the correctness problem (what's wrong with what's there) are structurally different search tasks. Completeness requires asking "what would need to be here for this kit to handle [domain scenario X]" — a generative task. Correctness requires asking "if I follow this procedure rule literally, does the output meet the standard" — an adversarial task. Merging them into one prompt means one of the tasks gets squeezed.

**Tier restriction (read-only tools only):** Both auditors are restricted to Read/Grep/Glob. This is a features-of-the-restriction decision: if auditors can call agents, spawn subagents, or write files, they start fixing things instead of naming things — and you lose the separation between "what's wrong" and "what the fix is." The auditor's job is to name the finding. The fix decision belongs to the kit builder.

---

## Decision 3: Evidence classification (empirical / consensus / anecdote)

**Decision:** Every research claim in every archive file must be classified as empirical, consensus, or anecdote. Classification is required before synthesis. Anecdote-only findings are flagged but not discarded.

**Alternatives considered:**
- No classification — simpler; just extract findings
- Binary (verified / unverified) — simpler than three-way

**Why three-way classification won:** The failure mode we're defending against is treating consensus opinion as if it were measured evidence. In the LLM instruction-following space, "best practices" are often practitioner consensus with no empirical backing — and many are wrong. The three-way split forces the researcher to distinguish measured results (empirical), aggregated practitioner agreement (consensus), and single-source claims (anecdote). This changes how findings are used in synthesis: empirical findings can anchor procedures directly; consensus findings should be implemented but flagged for Wave 2 empirical verification; anecdote findings must not be used as foundation claims.

**Binary loses:** Binary "verified/unverified" collapses the consensus vs. anecdote distinction that matters most for LLM research where "everyone does X" is a common claim that often isn't backed by controlled study.

---

## Decision 4: Weakness register is required (not optional)

**Decision:** Every kit must ship with a non-empty `weakness_register.md`. "No known weaknesses" is not accepted.

**Alternatives considered:**
- Optional weakness register — contributor decides
- Single "known limitations" section in the main procedure file

**Why required non-empty register won:** Kits that claim no weaknesses have not been honestly evaluated. Every procedure has failure modes — cases where it produces wrong output given valid input. The weakness register's purpose is to make failure modes inspectable before use, not to shame the kit. A kit user who knows Gap 6 (async propagation) in the code review kit will double-check caller updates when a fix changes function signatures. Without the register, they learn this the hard way. A required register with real entries also signals to contributors that the standard is honest evaluation, not maximum coverage.

**"No known weaknesses" failure mode:** Kits with no weakness entries get treated as comprehensive. When they fail (and they will), the failure looks surprising rather than documented. Documented failures are followable; undocumented failures erode trust in the whole kit.

---

## Decision 5: SKELETON files for provisional content

**Decision:** Files built before their supporting research cluster runs are marked with a prominent SKELETON header and a list of specific update triggers (e.g., "Update when Wave 2 Cluster X runs").

**Alternatives considered:**
- Build nothing until research is complete — maximum quality; no provisional content
- Mark provisional informally in comments — same information, less enforced

**Why SKELETON with explicit triggers won:** "Build nothing provisional" is correct in theory but wrong in practice for kit building. A kit builder often needs to see the rough shape of a procedure before they can identify what research they actually need. SKELETON files are allowed as a planning artifact — but they must name their update triggers explicitly. An update trigger is a specific claim that could arrive from a specific research angle. A SKELETON file with no update triggers is not a provisional file — it's an incomplete file that will never be updated.

**Informal comments lose:** "This section needs more work" doesn't propagate to the Wave 2 launch prep. Explicit triggers do.

---

## Decision 6: Realistic-scale testing as a hard gate

**Decision:** A kit that has only been tested on toy inputs does not pass Phase 7 gate, regardless of how well it performed on those inputs.

**Alternatives considered:**
- Toy inputs acceptable for initial kit — scale tested when deployed
- Scale recommendation but not gate

**Why hard gate won:** A code review procedure tested on 50-line PRs has not been tested. The scale problems are different in kind, not just degree: a 520-LOC cross-cutting change triggers both LARGE CHANGESET and CROSS-CUTTING CHANGE flags; async propagation issues that appear only when fixing spans multiple directories; role definition divergence that only surfaces when three separate files are reviewed together. These don't appear in toy inputs. Making scale testing a gate rather than a recommendation means it actually happens before the kit ships.

The realistic input scale (Phase 2 Q5c) is the test target. The kit builder names it in the domain brief; they're accountable to it in Phase 7.

---

## Decision 7: Alternatives generation fires before drafting, not after first-pass output

**Decision:** Before drafting any Phase 6 file, the builder must list the structural decisions that file requires and run alternatives-generation on each. Do not begin drafting until decisions are surfaced.

**Alternatives considered:**
- Fire after first-pass draft — builder sees what they built, then asks "were there alternatives?"
- Fire on user prompting only — lightweight, flexible

**Why before-drafting won:** The primary failure mode of alternatives-generation is not that the builder skips it explicitly — it's that the decision happens silently inside the draft. Once a structural decision is embodied in draft text, anchoring means alternatives will be evaluated against "is this better than what I just wrote?" rather than against independent criteria. Before-drafting removes the anchor. The steelmanning requirement (build the strongest case FOR each alternative before rejecting it) compounds this: without it, alternatives are generated to confirm the first choice, not to genuinely test it.

**What after-first-pass loses:** The anchor. A rejected alternative named "option B was also considered" after drafting is not the same decision as "option B was fully built before option A was drafted."
