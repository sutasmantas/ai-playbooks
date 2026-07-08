# Plan: Meeting Notes Summarizer Kit

**Phase 5 output.**

---

## Goal

A kit that produces meeting summaries meeting 5 working-kit properties: domain behavior without course-correction, goal-directed behavior, procedure reproducibility, honest weakness register, traceable research.

Current state: 70% functional (Direction B test run). Reproducibility fails on edge cases. Research archive now complete. All [PROVISIONAL] markers have evidence.

---

## Strongest unsupported assumption

**That the 5-step procedure is sufficient for complete decision capture without a slot-filling extraction template.**

The procedure tells the agent WHAT to look for in Step 1 (extract facts) and WHAT fields a decision needs (4 fields: what decided, alternatives, rationale, who). But it does not give the agent a structured extraction prompt that ensures all 4 fields are found. An agent following the procedure exactly could produce "we decided X" as the entire decision entry — technically compliant, but missing rationale and alternatives.

This assumption must be validated in a second test run after the procedure is updated. If the test shows decision entries still lack rationale fields, a slot-filling template must be added.

---

## File manifest (ordered riskiest first)

### 1. procedures/summarize.md — UPDATE (Phase 6 primary)

**Why riskiest:** Core procedure. Has [PROVISIONAL] markers now backed by research. Step 1, Step 2, Step 3, and Step 4 all need structural updates. This file determines reproducibility — the working-kit property we FAILED on in test run 01.

**Changes required:**
- Step 1: upgrade from "mark" to "extract fact list"; add speaker coverage check; add final-third scan instruction
- Step 2: expand flag vocabulary; add passive-voice conversion rule; add decision 4-field requirement; add parking lot vs open question distinction; add [NEEDS DECOMPOSITION] rule
- Step 3: reorder sections (Decisions first); add table format for action items with Status column; add Parking Lot section; add Unassigned Items subsection
- Step 4: add minority-speaker coverage check; add positional-bias final-third check; distinguish total vs partial omission
- Add Step 6: human review checklist before distribution
- Remove all [PROVISIONAL] markers with research-confirmed evidence

**Done when:** No [PROVISIONAL] markers remain except the one confirmed gap (short-transcript skip condition). All rule changes from synthesis.md are reflected. Test-run-01 failure case (hedged facilitator commitment) is still handled.

---

### 2. CLAUDE.md — UPDATE (Phase 6 secondary)

**Why second:** Behavioral contract. Currently correct but has [PROVISIONAL] on trace. Low structural risk — rule content is confirmed by test run.

**Changes required:**
- Remove [PROVISIONAL] from Trace section
- Update trace to cite research archive files
- Add: "After every summary task — surface tensions" rule is confirmed (test run shows it fires correctly)

**Done when:** No [PROVISIONAL] markers. Trace cites specific research archive files.

---

### 3. weakness_register.md — UPDATE (Phase 6 secondary)

**Why third:** Completeness of the register. Several pre-identified gaps are now partially answered by research; the register needs updating to reflect what's still open vs. resolved.

**Changes required:**
- Gap 1 (CLAUDE.md behavioral contract provisional): UPDATED — rule confirmed by test run
- Gap 2 (completeness threshold no evidence): UPDATED — research confirms second pass always needed; short-transcript skip condition still unconfirmed
- Gap 3 (ambiguity classification heuristic): UPDATED — confirmed as acceptable conservative default
- Gap 4 (multi-meeting transcripts): STILL OPEN
- Gap 5 (pronoun ownership): UPDATED — flag not infer confirmed; [UNASSIGNED] is the right approach
- Add new gap: cross-meeting context carry-over (no procedure)
- Add new gap: hedged decision language thresholds (still no classification rule for provisional decisions)

**Done when:** Each pre-identified gap has a status (RESOLVED/UPDATED/STILL OPEN). New gaps from research are added. Provisional decisions table updated.

---

## Auditor dispatch (Phase 6 gate)

After all three files are updated:

**Auditor 1 — completeness audit:** Does the updated procedure address all 5 quality dimensions from the domain brief? (Completeness, Ownership, Deadline, Decision clarity, Open question separation)

**Auditor 2 — consistency audit:** Does the procedure contradict itself or contain rules that could produce different outputs in ambiguous cases?

Both auditors run before Phase 7 whole-kit audit.

---

## Phase 7 whole-kit audit (after Phase 6 complete)

Run the updated procedure on a second test input — different from test run 01, covering:
- A meeting with no clearly assigned owners on some items
- A meeting with decisions stated in informal language ("sounds good", "let's go with that")
- A meeting with items late in the transcript that would be positionally biased

Evaluate against 5 working-kit properties. Compare to test run 01 (70% → target: 90%+).

---

## What this plan does NOT include

- Meeting-type-specific templates (sprint retro vs client call vs board): out of scope for first complete kit; logged in weakness_register as a future extension
- Follow-up tracking integration: out of scope
- Audio/video transcription: out of scope
