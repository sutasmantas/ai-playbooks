# Weakness Register: Meeting Notes Summarizer

Updated after Phase 4 research synthesis. Reflects current state of all gaps.

---

## Pre-identified gaps — updated status

**1. Goal-directed advisor behavior is provisional**
Status: UPDATED
The CLAUDE.md behavioral contract was tested in test-run-01. Goal-directed behavior PASSED — tensions surfaced correctly. The rule wording is functioning. Remaining risk: no second test run with more complex transcript.

**2. Completeness threshold has no evidence base**
Status: UPDATED
Research confirms second-pass completeness check is required regardless of transcript length. The positional bias finding (content late in transcript is under-represented) is not length-correlated — a short transcript can still have late-section items underweighted. The specific 15-30% omission-catch estimate is now grounded in Re-FRAME (arXiv 2509.15901) data showing 87-96% reduction from two-stage pipeline. Skip condition for <500 words: still unconfirmed. Approach: always run Step 4 checks.

**3. Ambiguity classification is a heuristic**
Status: UPDATED
Research confirms the conservative "open question default" is correct: requires closed, specific outcome statement to classify as decision. "Sounds good", "let's go with that" — still ambiguous, still conservative. Over-classification toward open questions is the safer failure mode (surfaced to human) versus under-classification (decision buried in discussion). User remains responsible for promoting open questions to decisions when they know the meeting context.

**4. No handling of multi-meeting transcripts**
Status: STILL OPEN
The kit assumes one meeting per transcript. Cross-meeting continuity (prior action items resurfacing) also unaddressed. No research found on procedure for this. Workaround: split transcript at major topic breaks before running the kit.

**5. Ownership inference from pronouns is not addressed**
Status: UPDATED
Research confirms: flag not infer. "they/someone/the team" → [UNASSIGNED]. [UNASSIGNED] items go to the dedicated Unassigned Items section. No pronoun resolution — surface to meeting chair for owner assignment.

---

## New gaps identified from research

**6. Hedged decision language — no classification threshold**
"We're leaning toward X", "tentatively decided", "probably we'll do Y" — no practitioner source gives a classification rule for provisional decisions vs. firm ones. Current approach: all hedged language → open question. Limitation: over-classifies in teams with informal communication styles.
Workaround: user reviews Open Questions section for items they know were actually decided.

**7. Cross-meeting context carry-over — no procedure**
When a recurring meeting resumes prior action items, those items appear as references in the new transcript without their original context. The kit has no mechanism for tracking carry-over items across sessions.
No current workaround — surface to user.

**8. Short-transcript skip condition for Step 1 — still unconfirmed**
Procedure currently says "for <500 words, can combine reading and extraction into a single pass but must still produce extraction list." The specific 500-word threshold is a heuristic with no research validation. The two-pass architecture itself is confirmed; the length threshold is not.
No risk to current users — conservative position (always extract) is correct.

---

## Gaps identified during Phase 7 audit

*(To be populated after Phase 7 VERIFY runs. Every YELLOW and RED auditor finding that was not fixed goes here.)*

---

## Provisional decisions table — updated

| Decision | Provisional approach | Evidence status | Flip trigger |
|----------|---------------------|-----------------|--------------|
| Second-pass completeness check always required | Yes, no skip | CONFIRMED (positional bias not length-correlated) | None — always required |
| Open Question default for ambiguous items | Conservative default | CONFIRMED | If testing shows over-classification is a bigger problem than under-classification, flip to decision default |
| One-line format vs table for action items | Table format (updated) | CONFIRMED (GitHub four-section standard) | N/A |
| Decisions section first | Yes, before action items | CONFIRMED (multiple practitioner sources) | N/A |
| Step 1 skip for <500 words | Abbreviated but not skipped | UNCONFIRMED | If research shows short transcripts have negligible positional/minority bias, add skip condition |

---

## Coverage limits

This kit does not cover:
- Transcripts in languages other than English
- Transcripts with multiple simultaneous speakers (crosstalk)
- Follow-up tracking (whether action items were completed after the meeting)
- Integration with task management tools
- Audio/video transcription (input must be text)
- Meeting-type-specific templates (sprint retro vs client call vs board meeting) — single template covers all types; type-specific extensions are a future extension
- Cross-meeting continuity (carry-over action items from prior sessions)

---

## Evidence quality note

This kit was built on practitioner-consensus evidence (no verify pass, per Practitioner-Consensus Track). The empirical claims (87-96% omission reduction, 44-73% completion failure rate) come from NLP benchmarking papers and commercial vendor statistics respectively. Treat as directional. All procedures should be validated through use before treating them as settled.
