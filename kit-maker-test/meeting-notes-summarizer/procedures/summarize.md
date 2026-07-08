# Procedure: Summarize Meeting Transcript

Evidence track: PRACTITIONER-CONSENSUS. Research archive: research_archive/. Synthesis: synthesis.md.

---

## Input

A meeting transcript in text form. Can be raw (with speaker names and timestamps) or cleaned.

## Step 1 — Fact extraction pass (before writing anything)

Read the full transcript. **Do NOT write the summary during this pass.** Produce a discrete extraction list of:

- **[A] Action candidates** — any utterance where someone commits to a task: first-person future constructions ("I'll do X"), direct requests ("can you handle Y by Friday?"), scheduling directives ("let's schedule Z")
- **[D] Decision candidates** — any utterance indicating closure: "we decided", "going with", "agreed:", specific outcomes with a named choice
- **[OQ] Open question candidates** — questions raised, discussed but explicitly not resolved, in-scope for this meeting
- **[PL] Parking lot candidates** — topics explicitly deferred as out-of-scope for this meeting ("let's take that offline", "we'll address that next sprint")

**Speaker coverage check:** After extracting, confirm that each named participant has ≥1 extracted item attributed to them, or note their absence. Speakers with few turns are systematically under-represented — this check counteracts that.

**Final-third check:** After extracting, re-read the last third of the transcript once more and verify no new items emerge. Content late in transcripts is positionally under-represented in first-pass extraction.

Do not begin Step 2 until the extraction list is complete.

**Why:** Fact-extraction before compression reduces omission by 87-96% on meeting benchmarks (Re-FRAME, arXiv 2509.15901). Salient decisions scatter across speaker turns — extracting before compressing prevents the distributed signal from being diluted.

## Step 2 — Classify and complete each extracted item

For each item in the extraction list, apply these rules in order:

### Classification rules

**Action item:** Owner + specific task + deadline. All three required. If any are missing: retain as action item, apply flags below.

**Decision:** Closed, specific outcome statement. "We decided to launch on April 20" = decision. "We're leaning toward April 20" = open question. "We discussed the launch timeline" = not a decision. No hedging, no "might", no "probably" — classify as open question if language is non-committal.

**Decision 4-field requirement:** For each decision, capture: (1) what was decided, (2) alternatives that were considered (write "none stated" if not mentioned), (3) rationale (write [RATIONALE NOT CAPTURED] if absent), (4) who made the decision.

**Open question:** In-scope for this meeting; discussed but not resolved. Explicitly not assigned to a person for resolution.

**Parking lot:** Explicitly deferred as out-of-scope for this meeting ("let's take that offline"). Parking lot items need a resolution owner or they become a permanent backlog. Apply [WHO RESOLVES? / BY WHEN?] flag if no owner stated.

### Ownership rules

**Passive voice conversion:** If the transcript says "it was agreed", "concerns were raised", "it was suggested" — convert to active voice attribution where the source material reveals who said it. If attribution cannot be determined: apply [UNCLEAR] flag.

**Single named owner:** Every action item must have one named person. Never list a team or "we" as owner.

**"Someone should" trap:** "Someone/we/the team should/needs to" patterns → classify as action item with [UNASSIGNED] flag. Do not infer a likely owner from context or topic expertise.

**Facilitator process commitments:** If the action is stated in first person by the meeting facilitator with hedging language ("I'll try to", "I'll flag this", "I'll bring this up", "I'll check with"): classify as action item AND tag [facilitator-commitment — verify before distributing]. Do not add qualifiers about certainty beyond this tag.

**Conditional actions:** If an action depends on another action completing first: retain as action item with a dependency note. Write in Step 3 as: `[Owner] will [what] by [deadline] — conditional on [dependency]`.

**Scope check:** If a task is clearly multi-week or project-level in scope ("redesign the whole onboarding", "figure out the architecture"): add [NEEDS DECOMPOSITION] flag. Do not attempt to decompose — surface it for the owner to break down.

### Flag vocabulary

| Flag | Meaning | Routes to |
|------|---------|-----------|
| [UNASSIGNED] | No owner identified | Meeting chair assigns before distributing |
| [DEADLINE NOT STATED] | No deadline in transcript | Owner confirms deadline before distributing |
| [UNCLEAR] | Attribution or content ambiguous | Sender resolves before distributing |
| [NEEDS CLARIFICATION] | Task too vague to be actionable | Prospective owner clarifies scope |
| [RATIONALE NOT CAPTURED] | Decision rationale not stated in transcript | Documentation quality warning — surface to meeting chair |
| [NEEDS DECOMPOSITION] | Scope too large for a single action item | Owner breaks into trackable sub-tasks |
| [facilitator-commitment — verify before distributing] | Facilitator commitment with hedged language | Verify action is real before distributing |
| [WHO RESOLVES? / BY WHEN?] | Parking lot item without an owner | Meeting chair assigns owner before summary is closed |

## Step 3 — Write the summary

Five sections in this exact order:

---

### Decisions

Format: structured entry per decision.

```
- [Decision stated as closed fact] | Alternatives: [what was considered, or "none stated"] | Rationale: [why, or [RATIONALE NOT CAPTURED]] | Decided by: [who]
```

Past tense. No "it was decided that" — just state the decision. One entry per decision.

---

### Action Items

Format: table. **Only include items with a named owner here.** Unassigned items go to the Unassigned Items section below — do not list them in this table.

| Owner | Task | Deadline | Status | Notes |
|-------|------|----------|--------|-------|
| [Name] | [specific task] | [date or [DEADLINE NOT STATED]] | Open | [conditional dependency or flag if any] |

Sort: items with deadlines first (ascending by date), then [DEADLINE NOT STATED] items.

Absentee legibility test: each row must be understandable by someone who was not in the meeting — expand pronouns, resolve references.

---

### Unassigned Items

Separate section for any action item where ownership could not be resolved. Do not include these in the Action Items table above. Do not omit these — surface them for the meeting chair.

Format: `- [Task description] — [why it was not assigned: no owner volunteered / group assignment not decomposed / pronouns could not be resolved]`

---

### Open Questions

In-scope questions discussed but not resolved.

Format: `- [Question or topic] — [why it's open: insufficient information / needs decision from X / deferred to next meeting]`

Only items explicitly not resolved in the transcript. Do not move items here to avoid flagging missing owners.

---

### Parking Lot

Items explicitly deferred as out-of-scope for this meeting.

Format: `- [Topic] — deferred because [reason stated]. [WHO RESOLVES? / BY WHEN?] if no owner stated.`

If no parking lot items: omit this section.

---

## Step 4 — Completeness check

After writing, run three checks against the transcript:

**Check A — Total omission:** For each item in the Step 1 extraction list, confirm it appears in at least one section of the summary. If any extraction-list item is absent: add it. (Using the extraction list as the scope of "topics" gives a precise, agent-checkable criterion — not a judgment call about what counts as a discussion topic.)

**Check B — Positional bias:** Scan the final third of the transcript once more. Confirm any items from this section appear in the summary. Items late in transcripts are systematically under-represented. (This is intentionally distinct from the Step 1 final-third check — Step 1 is pre-write extraction, Step 4 is post-write verification. Both are required.)

**Check C — Speaker coverage:** Confirm each named participant's contributions appear in at least one summary section. If any speaker's contributions are absent: review their utterances and determine whether something was missed.

Do not skip this step because the transcript was long or because the pre-read felt thorough.

**Check D — Decision field completeness:** For each decision in the Decisions section, verify all 4 fields are present: (1) what was decided, (2) alternatives considered, (3) rationale, (4) who decided. A decision listed as a single statement without rationale is a partial omission. Apply [RATIONALE NOT CAPTURED] to any decision where field 3 is missing.

## Step 5 — Surface tensions

After writing the summary: name one of the following if present:

- **≥2 unassigned items in the Unassigned Items section:** This is a structural ownership problem in the meeting, not just an individual gap — note the count and recommend the meeting chair resolve all of them before distributing.
- **Any item classified as an Open Question where the transcript contains positive-sounding language without a clear resolution phrase** ("sounds good", "let's go with that", "I think we'll do X"): flag with "I classified [X] as [Open Question] — verify: does this positive language close the option space, or is it still open?" This fires when the tone is positive but the Step 2 specificity test was ambiguous.
- **Any participant who appears multiple times in action items** (capacity concern — surface, don't resolve).
- **Any [RATIONALE NOT CAPTURED] flag** — surface all of them, let the meeting chair decide whether rationale documentation is needed given the decision's downstream impact.

If none are present: state "No tensions surfaced."

## Step 6 — Human review checkpoint

Before distributing the summary, flag any of these requiring human resolution:

- [ ] Every [UNASSIGNED] item in the Unassigned Items section has been assigned or explicitly noted as a gap
- [ ] Every [UNCLEAR] item has been resolved or acknowledged
- [ ] Every [RATIONALE NOT CAPTURED] flag has been surfaced to the meeting chair
- [ ] Every [WHO RESOLVES? / BY WHEN?] parking lot item has been assigned or noted as open
- [ ] The Unassigned Items section (if present) has been reviewed by the meeting chair

This step is informational — it generates the review checklist. The human reviewer acts on it, not the kit.

---

## Edge cases

**Transcript with no named speakers:** If the transcript anonymizes speakers (e.g., "Speaker 1", "Speaker 2") or uses no speaker labels: apply [UNCLEAR] to all ownership attributions. Skip the speaker coverage check (Step 1 and Step 4 Check C) — it requires named participants. Note in the Unassigned Items section: "Speaker attribution unavailable — all ownership flags are unconfirmed."

**Duplicate action items:** If the same task is stated by two different speakers: extract once, note "raised by [Speaker A] and [Speaker B]" in the Notes field. Do not list it twice.

**Empty meeting (no decisions, actions, or open questions):** Write the summary with all sections present and each marked "None." Do not omit sections. Add a note at the top: "This transcript produced no action items, decisions, or open questions. Verify the transcript is complete."

## When to abbreviate

**Step 1 for transcripts under 500 words:** Can combine reading and extraction into a single pass (read and extract simultaneously). Still produce a discrete extraction list before writing the summary. Do NOT skip extraction — positional bias and minority speaker bias are not length-correlated.

**Parking Lot section:** Omit if no items were explicitly deferred as out-of-scope.

**Unassigned Items section:** Omit if all action items have named owners.

---

## Trace

Step 1 pre-read mechanism: Re-FRAME paper (arXiv 2509.15901) — fact extraction before compression, 87-96% omission reduction. See research_archive/completeness-in-long-document-summarization.md.

Step 2 ownership rules: practitioner consensus across Fellow.ai, meetingdecisions.com, lucidmeetings.com. Flag vocabulary: sureprompts.com prompt patterns. Decisions 4-field: Martin Fowler ADR pattern, Lucid Meetings glossary. See research_archive/ownership-and-ambiguity-attribution.md.

Step 3 output structure: decisions-first from practitioner consensus (multiple sources); four-section standard from GitHub template convergence. See research_archive/meeting-note-structure-conventions.md.

Step 4 completeness checks: positional bias (Re-FRAME); minority speaker bias (Re-FRAME + OLDS dataset). Two omission types (What's Wrong paper, arXiv 2407.11919). See research_archive/completeness-in-long-document-summarization.md.

Step 2 failure modes: vague action items, group ownership, missing deadlines, passive voice. See research_archive/meeting-note-failure-modes-documented.md.

Test run 01: hedged facilitator commitment rule and conditional action format validated and added. See test-run-01/evaluation.md.

Gap: Short-transcript skip condition for Step 1 pre-read still unconfirmed by research.
