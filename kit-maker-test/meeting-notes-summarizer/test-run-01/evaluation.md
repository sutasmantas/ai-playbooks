# Direction B — Test Run 01 Evaluation

## What was tested

Transcript: synthetic sprint planning meeting (~400 words, 4 participants)
Procedure: procedures/summarize.md (skeleton, all rules provisional)

## Output quality against 5 working-kit properties

| Property | Result | Notes |
|----------|--------|-------|
| Domain behavior without course-correction | PARTIAL | 1 correction needed: Sarah action item has an unauthorized inference qualifier |
| Goal-directed behavior | PASS | Tensions section fired correctly; 2 real tensions surfaced |
| Procedure reproducibility | FAIL | Hedged facilitator commitment (Sarah's "I'll bring this up") has no procedure rule — different agents would handle this differently |
| Honest weakness register | PASS | Register predicted ambiguity and ownership gaps; both fired |
| Traceable research | N/A | All [PROVISIONAL] — expected for skeleton |

Overall: 70% functional. Works for clear action items and decisions. Fails on edge cases the procedure doesn't define.

## Specific failure found: hedged facilitator commitments

**What happened:** Sarah said "I'll bring it up in all-hands Thursday." The procedure classified this as an Action Item. That's correct. But I added "(note: this is a follow-up action, not a confirmed agenda item)" — an inference the procedure doesn't authorize.

**The general class:** Procedural actions stated in first person by the facilitator are different from committed actions stated about others. "I'll flag this" vs "Jonas will do X" have different certainty levels. The procedure has no rule for this. Two agents would handle it differently.

**Fix:** Add to Step 2 (Classify):
- "If the action is stated in first person by the facilitator with hedging language ('I'll try to', 'I'll flag this', 'I'll bring this up'): classify as action item AND add `[facilitator-commitment — verify before distributing]` tag. Do not add qualifiers about certainty beyond this tag."

## Other gap found: conditional actions

**What happened:** Tom's deploy action is conditional ("after Jonas reviews"). The procedure doesn't say how to represent conditional actions. I wrote "(conditional: after Jonas's review is complete)" — reasonable, but another agent might write it differently.

**Fix:** Add to Step 3 Action Items format:
- "If an action depends on another action completing first: write as `[Owner] will [what] by [deadline] — conditional on [dependency]`"

## Completeness result

Completeness check passed — all items in transcript appeared in summary. The pre-read scan prevented the omission failure mode the procedure was designed to catch. No items missed.

## Kit procedure changes needed from this test

1. Add hedged-facilitator-commitment rule to Step 2 (Classify)
2. Add conditional action format to Step 3 (Action Items section)
3. Both are concrete, specific, can be applied now without research
