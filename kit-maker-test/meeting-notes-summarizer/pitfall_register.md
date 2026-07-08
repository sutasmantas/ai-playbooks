# Pitfall Register: Meeting Notes Summarizer

Recurring failure patterns observed in meeting notes summarization. Read before using this kit on a new transcript.

---

## Pitfall 1: Summarizing ambiguity into false clarity

**Pattern:** The transcript has an item with no clear owner or decision status. The note-taker (or AI) writes it as if it were resolved, to avoid an awkward unresolved state in the notes.

**Example:** "Someone should look into the performance issue" → written as "Dan will investigate the performance issue" without explicit assignment.

**Why it happens:** Notes that look clean seem more professional. Flagged ambiguities create follow-up work.

**Consequence:** The inferred owner doesn't know they own it. The task falls through.

**Prevention:** The procedure's flag-not-infer rule in Step 2. [UNASSIGNED] is a better output than a wrong attribution. Proactive problem surfacing (CLAUDE.md) fires before writing if ambiguity is noticed in transcript pre-read.

---

## Pitfall 2: Recording what was discussed instead of what was decided

**Pattern:** A decision is described as a discussion: "We talked about pushing the release date" instead of "Release date moved to March 15."

**Why it happens:** The note-taker either wasn't certain the decision was final, or it's easier to summarize discussion than to resolve ambiguity.

**Consequence:** Attendees reconstruct the outcome from memory, which diverges. The same decision gets re-litigated in the next meeting.

**Prevention:** Step 2's specificity test (closed, specific outcome = decision). Step 3's decision format (past tense, state the fact). Step 5 fires if positive language is present without clear closure.

---

## Pitfall 3: Losing content from the end of long transcripts

**Pattern:** A summary is complete and accurate for the first 75% of the meeting, then sparse or missing for the final section — which often contains the most consequential items (decisions made under time pressure, final action assignments).

**Why it happens:** Notes are typically written linearly. By the end, the note-taker is fatigued or rushing. LLM models have positional bias favoring early content.

**Consequence:** The most time-constrained decisions go undocumented.

**Prevention:** Step 1 final-third check and Step 4 Check B. Both are non-skippable.

---

## Pitfall 4: Group assignment treated as individual accountability

**Pattern:** Action item assigned to "the team", "engineering", "everyone", or "we" — then written as-is in the notes.

**Why it happens:** The transcript uses collective language. The note-taker mirrors it.

**Consequence:** Every team member assumes someone else is handling it (diffusion of responsibility). Action item never completed.

**Prevention:** Step 2 single-named-owner rule. [UNASSIGNED] fires for any group ownership. Unassigned Items section is separate and visible. CLAUDE.md ownership obstacle pattern fires if ≥2 unassigned items exist.

---

## Pitfall 5: Action items without deadlines treated as having indefinite time

**Pattern:** "Alex will send the report" written without a deadline because none was stated in the meeting.

**Why it happens:** Note-takers feel uncomfortable specifying a deadline that wasn't agreed.

**Consequence:** Without a temporal anchor, the task competes against items with deadlines and loses every cycle. Deferred indefinitely.

**Prevention:** Step 2 deadline rule. [DEADLINE NOT STATED] is required output — never silently omit. This flags the gap and forces a deadline conversation.

---

## Pitfall 6: Parking lot items treated as resolved

**Pattern:** Topics deferred during the meeting (e.g., "let's take that offline") get written into the summary as if they were resolved or as open questions — the distinction between "deferred because off-topic" and "unresolved because complex" is lost.

**Why it happens:** The two categories look similar in the transcript.

**Consequence:** Parking lot items disappear — no owner, no follow-up, item is never addressed.

**Prevention:** Step 2 parking lot vs. open question distinction. Parking lot items get [WHO RESOLVES? / BY WHEN?] flag. Step 6 checklist requires human review of parking lot items before distribution.

---

## Pitfall 7: Decisions without rationale generating re-litigation

**Pattern:** A decision is recorded as a bare choice ("we're going with React instead of Vue") without recording why.

**Why it happens:** The immediate context makes the rationale obvious. No one thinks to write it down.

**Consequence:** Three months later, when the context is gone and a new team member joins, the decision is questioned. Without recorded rationale, there's no way to evaluate whether the original reasoning still applies. Time wasted re-litigating.

**Prevention:** Decision 4-field format in Step 2 and Step 3. [RATIONALE NOT CAPTURED] fires when rationale is absent. CLAUDE.md decision-clarity obstacle pattern fires on [RATIONALE NOT CAPTURED] flags.
