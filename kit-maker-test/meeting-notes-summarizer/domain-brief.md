# Domain Brief: Meeting Notes Summarizer

**Phase 2 output — confirmed before Phase 3.**

---

## Domain and purpose

Summarize meeting transcripts into structured output: action items (who, what, by when), decisions made, and open questions deferred for later. A user reading the summary should be able to act on it without re-reading the transcript.

## User

Developers and project managers summarizing team meetings. Users know what was discussed — they need the summary to capture it accurately and structurally. They will notice missed items.

## Quality dimensions (what good looks like)

1. **Completeness** — every action item in the transcript appears in the summary. No items silently dropped.
2. **Ownership** — every action item has an owner. If the transcript didn't assign one: flagged, not omitted.
3. **Deadline** — every action item has a deadline or a flag that none was stated.
4. **Decision clarity** — decisions are stated as decisions ("decided: X"), not as discussions ("there was discussion about X").
5. **Open question separation** — items that were discussed but not resolved are in a separate section, not mixed with decisions.

## Failure modes (what bad looks like)

- Summary omits action items that are clearly in the transcript
- "Someone should look into this" with no owner
- A topic listed under Decisions that was actually still open
- Open questions mixed with decisions in the same section
- Summary length close to transcript length (failure to compress)

## Scope

In: meeting transcript (text). Out: structured summary with three sections (Action Items, Decisions, Open Questions). Length: substantially shorter than transcript. Out of scope: scheduling follow-ups, drafting emails from action items, tracking whether action items were completed.

## Broader goal

Meeting notes become actionable artifacts rather than reference documents no one re-reads.

## Known failures from existing approaches

- Generic "summarize this" prompts miss items when the transcript is long
- No structure = mixing decisions and discussions
- No ownership prompt = items stated as "we should" with no owner assigned

## Done criteria

A summary is working when: a participant who attended the meeting reads it and says "yes, that's everything I needed to remember" without reaching for the transcript to verify anything.

---

**Phase 3 research angles to generate from this brief:**

- What research exists on meeting note structure and which elements (action items, decisions, open questions) consistently matter? [Gap likely — thin academic literature; practitioner consensus expected]
- What prompting structures reliably produce completeness (no omission) in long-transcript summarization?
- How do you get consistent ownership attribution when transcripts use pronouns rather than names?
- What's the right format for flagging ambiguity (missing owner, missing deadline) without disrupting the summary's usability?
