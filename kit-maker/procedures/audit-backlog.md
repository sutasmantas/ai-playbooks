# Audit Backlog

Tracks every process problem identified so far. Each problem is addressed one at a time — not patched in bulk and declared fixed. The approach here is **improve, not remove**: existing structure is preserved and improved unless removal is the only path forward.

**Status key:**
- ✅ RESOLVED — fix applied, verified against original problem
- 🔄 PARTIAL — provisional fix applied; research angle queued for validation
- 🔶 OPEN — no fix applied yet; next in queue
- 💤 DEFERRED — lower priority; blocked on upstream work

**How to work through this list:**
1. Pick the top OPEN item
2. Name what's worth preserving (improve-not-remove)
3. Apply a concrete fix (not just a research angle)
4. If the fix requires evidence not yet available: add the angle AND apply a provisional fix
5. Mark resolved
6. Move to next item

Do NOT batch multiple open items into one fix session — this is what created the shallow-patch problem in the first place.

---

## Resolved

### 1. Saturation criterion did not require cross-source-type coverage ✅
**Problem class:** Saturation condition was self-satisfiable within one source type.
**Preserved:** Key convergence as Condition 1 — still correct and important.
**Fixed:** Added Condition 2 (source-type coverage) during Cluster C synthesis. All 7 archives retroactively gap-filled.

### 2. Post-cluster-review success criterion was self-sealing ✅
**Problem class:** "At least one kit file changed" — LLMs always find something to change; criterion could be satisfied without any genuine improvement.
**Preserved:** The review-improve-re-review structure — the cycle is sound.
**Fixed:** Criterion now requires "cross-match complete AND findings documented (including nulls)." Changed ≠ improved; two valid outcomes: specific improvement traceable to a claim, OR explicit null result.

### 3. Contradiction scan too narrow (direct conflicts only) ✅
**Problem class:** Implication-level conflicts (two claims that, if applied together, produce contradictory recommendations) were not caught.
**Preserved:** Direct factual conflict detection — still required.
**Fixed:** research-synthesis.md now defines two contradiction types: direct factual + implication-level. Scope-explanation test unchanged.

### 4. 4-claim minimum threshold presented as rule, not heuristic ✅
**Problem class:** Unvalidated threshold treated as a rule — downstream decisions were made against it as if it were empirically calibrated.
**Preserved:** The grouping minimum concept — a single-claim group is often noise.
**Fixed:** research-synthesis.md now explicitly flags this as a satisficing rule, not a validated threshold. Judgment call explicitly allowed.

### 5. Adversarial query = find external critics only ✅
**Problem class:** Treated adversarial research as "find someone who disagrees" rather than "construct the strongest case against the claim from first principles." External critics may not exist for novel or interdisciplinary topics.
**Preserved:** External critic search — gold standard when a rigorous source has already done the work.
**Fixed:** Query 3 (research-quality.md) now has two components: (a) external critic search, (b) mandatory self-argumentation — identify weakest assumption, model failure mode, construct steel-man opposition, then compare which side is stronger.

### 6. Saturation criterion did not account for vocabulary-frame lock ✅
**Problem class:** Exhausting one vocabulary cluster declared as saturation while missing entire research traditions using different terminology. ~10% of relevant literature permanently unreachable.
**Preserved:** Dual-condition saturation — both prior conditions still required.
**Fixed:** Added Condition 3 (vocabulary-frame coverage) to all saturation definitions. Added Step 0 (pre-search vocabulary-frame enumeration) to research-quality.md and research-wave.js. Research-synthesis.md "reachable saturation" term added.

### 7. LLM-generated query expansion not warned as within-frame-only ✅
**Problem class:** When agents generate synonyms/alternatives for Category D queries, they systematically stay within the dominant vocabulary frame (SIGIR 2025).
**Preserved:** LLM synonym generation as a starting point — useful for within-frame expansion.
**Fixed:** Category D section in research-quality.md now includes explicit warning and adversarial check: verify whether any expansion term comes from a different discipline.

### 8. Snowballing not included as a gap-fill technique ✅
**Problem class:** Backward snowballing adds ~9-10% recall beyond keyword saturation but was not in any procedure. Caveat: snowballing bounded by start set's vocabulary tradition.
**Preserved:** Keyword saturation still the primary stopping signal.
**Fixed:** Snowballing added as a recommended step in research-quality.md saturation section, with explicit caveat about start-set dependency.

### 9. Source strategy not documented in research-quality.md ✅
**Problem class:** Agents had no guidance on which sources to use, in what order, for what purposes.
**Preserved:** n/a (new section, no prior content to preserve).
**Fixed:** Full source calibration table added (7 sources, Use for / Do NOT use for), minimum viable search pair (Semantic Scholar + arXiv), grey-lit quality filter.

---

## Partial — fix applied, validation pending

### 10. Synthesis procedure (research-synthesis.md) is unvalidated 🔄
**Problem class:** The procedure driving all downstream confidence maps was designed from first principles — no empirical backing for grouping threshold, contradiction resolution, confidence tier definitions. Error in synthesis propagates to every kit rule built from it.
**Preserved:** The structure — grouping, contradiction scan, confidence tiers, adversarial check on user assumptions — is structurally sound. Do not replace; validate and calibrate.
**Fix applied (2026-06-30):**
- HIGH tier threshold note added: "multiple" is a design judgment (2 high-conf or 3 medium-conf, provisional); not resolvable by literature; self-testing is the right validation method if ROI justifies it.
- CONTESTED default hardened: "uncertain whether scope explanation resolves it → default CONTESTED" moved from calibration note to operative rule; false resolution is the worse error.
- GRADE gap acknowledged in trace: procedure approximates GRADE conceptually but does not assess imprecision/indirectness/publication bias; specific thresholds are design judgments, not derivable from literature — self-testing needed to calibrate.
**Still open:** Angle 167 (synthesis procedure validation, P1) still queued, but scope narrowed: research the conceptual tier alignment with GRADE and what the literature says about confidence map reliability methodology — NOT to validate specific threshold numbers (research can't answer those; self-testing is the method).

### 11. Mandatory reflection questions measure effort, not quality ✅
**Problem class:** mandatory-reflection.md had 9 questions (not 4 as originally noted); any answer technically valid — the gate measured whether questions were answered, not whether answers engaged with the phase's specific output.
**Preserved:** All 9 questions — structurally sound, target the right blind spots.
**Fixed (2026-06-30):**
- Specificity anchor added to gate language: answers must reference something specific to this phase's output; generic answers that could apply to any phase fail.
- All-green trajectory note added: three consecutive null-deficit-finding checkpoints = trajectory signal, surface to user.
- Count consistency fixed: header now says "nine," trace updated from "5-question format" to "9-question checkpoint."
**Note on depth threshold:** "How specific is specific enough" and other quality-bar thresholds are design judgments that research cannot calibrate — self-testing is the right method if ROI justifies it. Angle 168 still queued but scope narrowed: what does the education/training literature say about prompting techniques that produce deeper reflection (not "how deep is deep enough" — that's design judgment).

---

## Open — no fix applied

### 12. Gap-fill: 5-6 archives likely have concept frame lock 🔄
**Problem class:** Archives written before vocabulary-frame enumeration requirement missed entire research traditions.
**Preserved:** All existing claims in each archive — valid within the vocabulary searched. Gap-fill adds missing traditions, not replaces.
**Fix applied (2026-06-30):** Vocabulary-frame analysis completed for all 6 archives. Gap-fill angles 173-177 added to RESEARCH_ANGLES.md. One exception: sequential-process-workflow (14 queries, good breadth) not queued — risk is LOW.
**Archive status:**
- behavioral-testing-methods → Angle 173 (P0) — only 2 queries; missing software testing, red-teaming, conformance testing, experimental design vocabulary
- behavioral-rule-compliance → Angle 174 (P1) — 15 queries all AI/NLP; missing behavioral economics, organizational compliance, human factors
- user-inattentiveness-salience → Angle 175 (P1) — sat=NO; missing signal detection theory, alarm fatigue, risk communication
- multi-task-instruction-completion → Angle 176 (P1) — sat=NO; missing human prospective memory, dual-task interference, task switching
- articulation-before-commitment → Angle 177 (P2) — sat=YES but missing verbal overshadowing (Schooler) which is an implication-level contradiction to the archive's pro-articulation claims
- sequential-process-workflow → Not queued; already at 14 queries with good vocabulary breadth
**Remaining:** The gap-fill angles are queued; actual research runs in Phase 4 batch, one at a time per research batch constraint.

### 13. Hard cap at 3 RED auditor rounds is unvalidated ✅
**Problem class:** The "3 rounds max" cap was a heuristic satisficing judgment with no empirical calibration.
**Preserved:** The cap itself — uncapped iteration is a real failure mode.
**Fixed (2026-06-30):** Honest-labeling applied in ENTRYPOINT.md Hard Rule 5: cap is explicitly called a satisficing design judgment, not empirically calibrated; self-testing is the right validation method if ROI justifies it.
**Not queued for research:** "What is the right number" is not a literature question — research will not tell us the correct audit round cap for AI kit verification. Self-testing is the method. Current value (3) is probably fine; deferred.

### 14. Large-task segmentation guidance unvalidated ✅
**Problem class:** Segmentation patterns in Hard Rule 13 were designed from intuition, no empirical backing.
**Preserved:** The structural requirement (segmentation guidance must exist in generated kits).
**Fixed (2026-06-30):** Honest-labeling applied in CLAUDE.md Large-task guidance section: the specific patterns (what to signal, how often to check in) are design judgment; the structural requirement is not in question. Self-testing against realistic inputs is the right calibration; deferred.

### 15. Decay warning as self-correcting mechanism unvalidated ✅
**Problem class:** A decayed agent may not reliably notice its own decay warning.
**Preserved:** The decay warning concept — naming the failure mode is valuable even if the mechanism is imperfect.
**Fixed (2026-06-30):** Honest-labeling applied in CLAUDE.md Hard Rule 13 item 5: self-correction via reading the warning is unvalidated; structural re-anchoring triggers (session-start checks, after-every-task patterns) are independently reliable. Angle 119 still queued for broader behavioral contract decay research, but the decay warning itself is no longer presented as a proven self-correction mechanism.

---

## Deferred — lower priority, upstream work first

### 16. Parallel wave structure assumption unvalidated 💤
**Problem class:** Assumption that running all angles in one parallel wave is better than sequential was never tested.
**Deferred until:** Angles 18-21 synthesis (P2 wave).

### 17. One-agent-per-angle assumption unvalidated 💤
**Problem class:** Could be inefficient (agent overhead for short angles) or insufficient (one agent may not run enough queries for complex angles).
**Deferred until:** Angles 18-21 synthesis (P2 wave).

---

## Procedures audit observations (from 2026-06-30 deep audit)

These were identified as unvalidated design decisions in the broader process audit. Many are tracked in grounding-map.md as ❌ UNRESEARCHED. Collected here for visibility; not individually tracked since they map to existing grounding-map entries.

- Phase 5 strongest-unsupported-assumption gate — design intuition only
- Regression gate (blast-radius + min-diff + verify) — design intuition only
- SKELETON file pattern — design intuition only
- Three-tier evidence split (empirical/consensus/anecdote) — not compared to GRADE or alternatives
- Evidence threshold (n>20 + named methodology = empirical) — provisional rule
- Two-auditor model with Read/Grep/Glob only — design choice, not calibrated
- class-before-instance.md — software engineering best practice, no empirical backing for this domain

These are tracked in grounding-map.md. Do not duplicate tracking here — use grounding-map.md as the source of truth for design decision status.

---

*Last updated: 2026-06-30. Items 10-15 addressed. All open items now resolved or partial (gap-fill angles queued). Items 16-17 remain deferred. Next: proceed to Phase 2 (general review) per plan.md.*
