# Synthesis Target: Angles 126–130 — Adversarial Test Gaps

**Purpose:** Pre-planned synthesis structure for the five gaps surfaced by the adversarial test of the kit prototype. These gaps are structural — they apply to any kit-maker run, not just meeting-notes-summarizer. Synthesis must produce concrete procedures or thresholds, not vague "be aware of X" guidance.

**When to use:** Phase 4 SYNTHESIS after angles 126–130 have been researched.

**Downstream wiring:**
- Angle 126 (minimum viable claims) → `procedures/research-quality.md` saturation criterion + Phase 3 gate
- Angle 127 (session resume) → new `procedures/pipeline-resume.md` OR addition to ENTRYPOINT Phase 1
- Angle 128 (semantic dedup) → `scripts/research-wave.js` comment + `procedures/research-synthesis.md` Step 4.1 grouping
- Angle 129 (dependency vs risk ordering) → `templates/plan.md.template` ordering rule + Phase 5 ENTRYPOINT
- Angle 130 (archive staleness) → new `procedures/archive-maintenance.md` OR ENTRYPOINT Phase 8 gate

---

## Table 1: Minimum Viable Claims (Angle 126)

| Threshold | Evidence basis | Applicable when | Confidence |
|-----------|---------------|-----------------|------------|
| (fill from research) | | | |

**Required output:** A specific claim count or density threshold below which synthesis should be deferred. Must be: (a) a number or range, (b) qualified by evidence type (empirical vs consensus claims may have different thresholds), (c) actionable (agent can check current archive against it).

**If research finds no established threshold:** produce an honest "no evidence-based threshold exists" finding and propose a provisional threshold with explicit flip trigger. Do not leave the current "no threshold" state unchanged — the research either validates a number or licenses a provisional one.

**Update candidate:** `procedures/research-quality.md` — add minimum viable claims check before Phase 3 proceeds to Phase 4.

---

## Table 2: Session Resume Mechanisms (Angle 127)

| Mechanism | How it works | Fidelity loss | When it fails | Agent-implementable? |
|-----------|-------------|---------------|---------------|----------------------|
| Structured handoff file | Write current state to file before ending session | Depends on format | File not read at session start | Yes |
| Summary-based resume | Summarize prior session and inject | High if unstructured | Distortion on summarization | Partial |
| Phase-gate files | Each phase output IS the resume anchor | Low if outputs are structured | Only works if phases are complete | Yes |
| (fill from research) | | | | |

**Required output:** A concrete mechanism the kit-maker can use to resume a multi-session pipeline with minimum fidelity loss. Must be agent-implementable (not requiring human handoff notes). Preference: leverage existing phase-gate outputs as resume anchors rather than a separate mechanism.

**Update candidate:** ENTRYPOINT Phase 1 — add "session resume check" that reads phase-gate outputs to reconstruct state. OR new `procedures/pipeline-resume.md`.

---

## Table 3: Semantic Deduplication (Angle 128)

| Approach | Stage | Overhead | Reliability | Feasible for kit-maker? |
|----------|-------|----------|-------------|------------------------|
| Shared key ontology pre-research | Before wave | High setup | Prevents dups | Possible but fragile |
| Post-hoc semantic clustering | Synthesis | Moderate | Best available | Yes — synthesis responsibility |
| Normalized slug generation | During research | Low | Prevents exact variants | Partial fix |
| (fill from research) | | | | |

**Required output:** A concrete recommendation for the synthesis step: how should the synthesizer handle likely-duplicate claims with different keys? What heuristic or technique produces the least missed deduplication without excessive overhead?

**Update candidate:** `procedures/research-synthesis.md` Step 4.1 (grouping) — add explicit semantic dedup step before grouping by key.

---

## Table 4: Ordering Conflict Resolution (Angle 129)

| Scenario | Recommended resolution | Evidence basis | Confidence |
|----------|----------------------|----------------|------------|
| File A is riskiest but depends on File B being correct first | (fill) | | |
| File A depends on File B but both are HIGH stakes | (fill) | | |
| Dependency chain forces low-stakes file first | (fill) | | |
| (add from research) | | | |

**Required output:** A decision rule for when dependency-first overrides riskiest-first (and vice versa). Must be expressible as a conditional: "when X, use dependency ordering; when Y, use risk ordering." Not "use judgment."

**Update candidate:** `templates/plan.md.template` riskiest-first rationale section — add dependency conflict handling. Phase 5 ENTRYPOINT ordering section.

---

## Table 5: Archive Maintenance Policy (Angle 130)

| Signal | Recommended action | Evidence basis | Threshold |
|--------|-------------------|----------------|-----------|
| Domain evolves rapidly (e.g., LLM tooling) | (fill) | | |
| Claims contradict new practitioner consensus | (fill) | | |
| Archive is >N months old | (fill) | | |
| New research wave returns >X% new keys vs archive | (fill) | | |

**Required output:** A concrete staleness policy for the research archive. Must include: (a) a time-based trigger or activity-based trigger (not just "when it feels stale"), (b) what action it triggers (full re-run vs targeted update), (c) who decides (user vs kit).

**Update candidate:** ENTRYPOINT Phase 8 gate — add archive staleness assessment. Possibly a new `procedures/archive-maintenance.md` if the policy is complex enough.

---

## Contradiction pairs to resolve

1. **Minimum viable claims vs "more is always better":** Research on systematic reviews may show that 15 high-quality claims outperform 50 low-quality claims. The saturation check (diminishing new keys) is a quantity signal, not a quality signal. These may conflict.

2. **Phase-gate resume vs structured handoff file:** Phase-gate outputs are cleaner but only work if every phase completes. A structured handoff file works mid-phase but adds overhead. Research should clarify which is more reliable for interrupted pipelines.

3. **Semantic dedup at research stage vs synthesis stage:** Deduping earlier is cleaner but requires either shared ontology (expensive) or post-hoc clustering (same as synthesis). Research may find a middle ground.

---

## Minimal outcome requirement

This synthesis must produce:
1. A specific minimum viable claims threshold (or an honest "no evidence; provisional: X" with flip trigger)
2. A concrete session-resume mechanism implementable by an agent
3. A recommendation for semantic dedup in the synthesis step
4. A decision rule for dependency vs risk ordering conflict
5. A staleness trigger for the research archive

If any of these five produces no finding: log as GAP in the synthesis output and add to weakness_register.md template as a pre-identified gap.
