# Research Archive: Ownership and ambiguity attribution in meeting notes

Evidence track: PRACTITIONER-CONSENSUS (verify pass skipped)

## Saturation log
- Query 1: "meeting notes unclear ownership attribution flagging ambiguity conventions practitioner" — 4 new keys
- Query 2: "action item owner assignment ambiguous transcript conventions practitioner guide" — 4 new keys
- Query 3: "decision vs open question boundary meeting notes classification practitioner" — 0 new keys
- Query 4: "facilitator commitment vs assigned action item meeting notes distinction" — 2 new keys
- Query 5: "meeting documentation ambiguity handling flagging vs inferring best practices" — 3 new keys
- Query 6: "meeting notes decisions vs open questions parking lot tabled items documentation how to" — 4 new keys
- Query 7: "collective ownership meeting action items assigned to the team failure mode practitioner" — 3 new keys
- Saturated: YES

---

## Claims (20)

### [key: single-named-owner-rule]
- evidence: consensus
- group: ownership-attribution
- sources: https://www.meetingdecisions.com/blog/complete-guide-meeting-action-items, https://www.joinglyph.com/blog/meeting-action-items-how-to-write-them-best-practices, https://www.lucidmeetings.com/glossary, https://asana.com/resources/action-items

**Claim:** Practitioners universally hold that every action item must have exactly one named person as owner — not a team, department, or pair. The mechanism is diffusion of responsibility: when multiple people are listed, each assumes another will act, producing collective amnesia. This rule applies in all synchronous meeting contexts with a designated note-taker; it does not resolve for inherently multi-party deliverables where a lead must still be nominated even if others contribute. Implication for the summarizer: the procedure must refuse to emit an action item with a group or vague pronoun as owner, and must flag or escalate any candidate item that lacks a single named individual.

---

### [key: someone-should-trap]
- evidence: consensus
- group: failure-modes
- sources: https://www.meetingdecisions.com/blog/complete-guide-meeting-action-items, https://www.joinglyph.com/blog/meeting-action-items-how-to-write-them-best-practices

**Claim:** The phrase 'someone should...' in meeting transcripts is a canonical failure mode that produces non-accountable action items. The mechanism is linguistic: using an indefinite pronoun at assignment time allows all participants to rationalize non-ownership, so the task surfaces repeatedly in future meetings without progress. Scope: applies specifically when no named person is identified in the same utterance or in immediate adjacent context. Implication: the summarizer must detect 'someone/we/the team should/needs to' patterns and classify these as UNASSIGNED rather than inferring a likely owner from context.

---

### [key: explicit-assignment-over-inference]
- evidence: consensus
- group: ownership-attribution
- sources: https://www.meetingdecisions.com/blog/complete-guide-meeting-action-items

**Claim:** Practitioners distinguish between two ownership-capture modes: explicit assignment (meeting leader names a person during the meeting and that person accepts) versus note-taker inference (note-taker deduces ownership post hoc from discourse). Explicit assignment is strongly preferred because acceptance is confirmed in the room and reduces later repudiation. Note-taker inference is treated as a fallback of last resort and is prone to error. Scope: inference becomes necessary when recordings or transcripts are the only input, which is the typical AI summarizer scenario. Implication: the procedure should prioritize utterances where a name is immediately adjacent to a task verb ('Sarah will...', 'I'll take...') over inferences drawn from role or topic expertise.

---

### [key: implicit-commitment-language-patterns]
- evidence: consensus
- group: ownership-attribution
- sources: https://circleback.ai/blog/how-ai-meeting-notes-work

**Claim:** Practitioners and AI tool designers both identify specific commitment language patterns as markers for action items in transcripts: first-person future constructions ('I'll send that over'), modal requests ('can you handle that by Friday?'), and scheduling directives ('let's schedule a follow-up'). The mechanism is that these verb forms linguistically encode a commitment in a way that third-person statements do not. Scope: the same words carry different weight depending on meeting structure — an 'I'll...' in a standup is firmer than one in a brainstorm; the summarizer must treat meeting type as a scope modifier. Implication: the procedure should include a commitment-language pattern list, but annotate matched items as 'candidate action items' pending owner confirmation when speaker attribution is uncertain.

---

### [key: flag-not-infer-ambiguity]
- evidence: consensus
- group: failure-modes
- sources: https://sureprompts.com/blog/prompt-patterns-meeting-notes

**Claim:** When a meeting note or transcript item is ambiguous in ownership, task, or status, practitioners prescribe flagging with a visible marker ([UNCLEAR], [UNASSIGNED], [NEEDS CLARIFICATION]) rather than inferring and silently filling in the gap. The mechanism is error propagation: a silently wrong inference gets circulated as fact, requiring costly correction later, whereas a flag invites the meeting owner to resolve it before distribution. Scope: applies to AI-generated summaries and notes taken by non-participants; human note-takers present in the room may be able to resolve on the spot. Implication: the summarizer procedure must have an explicit flag vocabulary and rules for when each flag fires.

---

### [key: flag-vocabulary-three-markers]
- evidence: anecdote
- group: structure-conventions
- sources: https://sureprompts.com/blog/prompt-patterns-meeting-notes

**Claim:** A practitioner prompt-engineering source documents a three-part flag vocabulary for AI meeting summarizers: [UNCLEAR] for content that is ambiguous in the notes, [NEEDS CLARIFICATION] for tasks that are too vague to be actionable even if ownership is clear, and [RATIONALE NOT CAPTURED] for decisions whose reasoning was not stated. The mechanism is that different flag types route to different resolution actions: [UNASSIGNED] goes to the meeting chair for owner assignment; [NEEDS CLARIFICATION] goes to the prospective owner; [RATIONALE NOT CAPTURED] is a documentation quality warning. Implication: the summarizer procedure should adopt this vocabulary (or a mapped equivalent) and specify which flag triggers which downstream resolution action.

---

### [key: unassigned-items-sorted-last]
- evidence: anecdote
- group: structure-conventions
- sources: https://sureprompts.com/blog/prompt-patterns-meeting-notes

**Claim:** Practitioners recommend that unassigned action items be sorted to the end of the action item table (after items sorted by deadline), not omitted. The mechanism is visibility: surfacing unassigned items as a distinct group forces the meeting chair to resolve ownership gaps before the summary is closed, rather than letting them silently drop. Scope: applies to distributed meeting summaries; in-meeting review is a better intervention point but is not always available to an AI summarizer. Implication: the summarizer should output a dedicated 'Unassigned / Needs Owner' section at the bottom of the action item list.

---

### [key: decisions-require-decision-log-fields]
- evidence: consensus
- group: structure-conventions
- sources: https://www.lucidmeetings.com/glossary

**Claim:** Practitioners prescribe that logged decisions include four fields beyond the bare choice: what was decided, what alternatives were considered, why this choice was made, and who was involved. The mechanism is traceability: decisions without rationale generate re-litigations when context changes; the rationale field is what prevents that. Scope: applies to consequential decisions; trivial logistical choices (e.g., meeting time) do not require full decision-log treatment. Implication: the summarizer must distinguish between a decision (a closed choice with rationale) and a discussion point (a topic explored without resolution), and emit [RATIONALE NOT CAPTURED] when the rationale field cannot be filled.

---

### [key: decision-vs-discussion-specificity-test]
- evidence: consensus
- group: structure-conventions
- sources: https://sureprompts.com/blog/prompt-patterns-meeting-notes

**Claim:** The practitioner test for whether something is a decision vs. a discussion is specificity of outcome: 'we decided to launch on April 20' is a decision; 'we discussed the launch timeline' is not. The mechanism is that a decision closes an option space and creates accountability for an outcome, whereas a discussion merely explores it. Scope: the test applies to synchronous verbal meetings; async written threads often have softer decision signals and need a separate convention. Implication: the summarizer must require a closed, specific outcome statement to classify something as a decision; exploratory or hedged language ('we might', 'we're leaning toward') should be classified as open question.

---

### [key: open-question-as-distinct-category]
- evidence: consensus
- group: structure-conventions
- sources: https://sureprompts.com/blog/prompt-patterns-meeting-notes, https://www.lucidmeetings.com/knowledge/decisions-issues-parking-lot-working-with-tagged-notes

**Claim:** Practitioners treat open questions (things raised but not resolved) as a distinct documentation category from decisions and action items, not as a subcategory of either. The mechanism is status clarity: an open question has no owner and no resolution, unlike an action item (owner, task, deadline) or a decision (closed outcome). Scope: open questions are particularly important in technical or design reviews where unresolved dependencies can block subsequent work. Implication: the summarizer should maintain three output buckets — decisions, action items, open questions — and resist collapsing open questions into either of the other two.

---

### [key: parking-lot-vs-open-question-boundary]
- evidence: consensus
- group: structure-conventions
- sources: https://www.nngroup.com/articles/parking-lots/, https://www.lucidmeetings.com/knowledge/decisions-issues-parking-lot-working-with-tagged-notes

**Claim:** Practitioners distinguish parking lot items from open questions by agenda relevance, not by resolution status: a parking lot item is one that arose but is out of scope for the current meeting; an open question is in-scope but unresolved. The mechanism is meeting hygiene — the parking lot preserves momentum by not letting off-topic discussions consume agenda time. Scope: in unstructured or ad hoc meetings, the boundary blurs; a facilitator judgment call is required. Implication: the summarizer should classify unresolved items as parking lot only when there is a clear signal they were deferred (e.g., 'let's take that offline', 'we'll address that next sprint') rather than simply not resolved.

---

### [key: parking-lot-items-need-owners-too]
- evidence: anecdote
- group: failure-modes
- sources: https://www.nngroup.com/articles/parking-lots/

**Claim:** Practitioners warn that parking lot items without an assigned owner and a 'how this will be resolved' plan become a graveyard of deferred questions. The mechanism is out-of-sight, out-of-mind: items captured without owner or next-step accountability are never revisited. Scope: this failure mode is most acute in large organizations with frequent meeting cadences where there is no explicit parking-lot review ritual. Implication: the summarizer should emit parked items with a [WHO RESOLVES? / BY WHEN?] flag rather than leaving them as bare topics.

---

### [key: issues-as-precursor-to-action-items]
- evidence: consensus
- group: structure-conventions
- sources: https://www.lucidmeetings.com/glossary

**Claim:** Practitioners treat 'issues' (areas of concern or uncertainty blocking progress) as a distinct category that precedes action items: an issue is unresolved concern, while an action item is the specific task created to resolve it. The mechanism is that conflating the two causes the summarizer to emit tasks before the problem is understood, producing action items that solve the wrong thing. Scope: applies primarily to project status and retrospective meetings. Implication: the summarizer should not auto-convert 'we have a problem with X' statements into action items; it should log them as issues and only promote them to action items when a task-owner-deadline triple is explicitly stated.

---

### [key: facilitator-process-commitment-vs-substantive-action]
- evidence: consensus
- group: ownership-attribution
- sources: https://www.meetingdecisions.com/blog/complete-guide-meeting-action-items, https://pumble.com/blog/meeting-roles/

**Claim:** Practitioners implicitly distinguish between process commitments made by a facilitator (e.g., 'I'll send the calendar invite', 'I'll circulate the notes') and substantive action items owned by participants (e.g., 'Sarah will draft the proposal'). The mechanism is role segregation: facilitator process tasks are logistical scaffolding, not project deliverables, and conflating them inflates action item lists and dilutes accountability tracking. Scope: this distinction matters most in recurring meeting types with dedicated facilitators; in peer-led meetings, the distinction collapses. Implication: the summarizer should optionally separate 'meeting logistics' tasks from 'project work' tasks, and avoid emitting facilitator process commitments as first-class action items.

---

### [key: ai-diarization-error-rate-ownership-risk]
- evidence: empirical
- group: failure-modes
- sources: https://circleback.ai/blog/how-ai-meeting-notes-work

**Claim:** AI speaker diarization systems currently achieve 11-13% word error rates, with accuracy dropping substantially during crosstalk (simultaneous speech), which is common in real meetings. Since speaker identity is the foundation of ownership attribution, action items, and decision authorship, diarization errors propagate directly into misattributed ownership in the summary. Scope: error rate is higher in large groups, poor audio, and remote meetings with overlapping speech. Implication: the summarizer procedure must treat AI-inferred speaker identity as probabilistic, not deterministic, and should flag ownership attribution as unconfirmed when the transcript shows crosstalk markers or low-confidence speaker labels.

---

### [key: human-review-as-mandatory-ambiguity-resolution]
- evidence: consensus
- group: completeness
- sources: https://circleback.ai/blog/how-ai-meeting-notes-work, https://www.meetingdecisions.com/blog/complete-guide-meeting-action-items

**Claim:** AI meeting note practitioners universally recommend a human review step to resolve ownership ambiguities before the summary is distributed, treating AI-extracted action items as a strong starting point rather than a finished deliverable. The mechanism is that AI cannot confirm owner acceptance or resolve referential ambiguity ('they/someone/the team') without additional context not present in the transcript. Scope: applies to all AI summarizer pipelines; human review is less critical when the meeting chair is also the note-taker and reviews before sending. Implication: the procedure should include an explicit human-review checkpoint with a checklist of what to verify: (1) every action item has a named single owner, (2) all [UNASSIGNED] flags are resolved, (3) all [UNCLEAR] flags are addressed or escalated.

---

### [key: action-item-legibility-test]
- evidence: consensus
- group: completeness
- sources: https://www.meetingdecisions.com/blog/complete-guide-meeting-action-items, https://www.joinglyph.com/blog/meeting-action-items-how-to-write-them-best-practices

**Claim:** Practitioners use an absentee legibility test for action items: a well-formed item should be fully understandable by someone who was not in the meeting — who does what by when. The mechanism is that meeting notes are often read asynchronously by people who lack the conversational context, so shorthand or in-meeting references become incompatible. Scope: applies to distributed teams and organizations with multiple time zones; less critical for small co-located teams with high shared context. Implication: the summarizer should expand pronouns, resolve references, and include the 'why' of the task when it disambiguates the scope — not just copy the raw task description from the transcript.

---

### [key: decisions-first-layout-convention]
- evidence: consensus
- group: format
- sources: https://sureprompts.com/blog/prompt-patterns-meeting-notes

**Claim:** Practitioners recommend organizing meeting summaries by category (decisions, action items, open questions) rather than chronologically, and placing decisions at the top. The mechanism is information hierarchy: decisions are the highest-value output of most meetings and should be immediately scannable without reading the full summary. Scope: applies most strongly to distributed teams who rely on written summaries as the primary record; in-person teams with shared memory may not need strict ordering. Implication: the summarizer output schema should enforce decisions-first ordering and resist chronological output, which is the default for transcript-based tools.

---

### [key: action-item-scope-two-weeks]
- evidence: consensus
- group: structure-conventions
- sources: https://www.lucidmeetings.com/glossary

**Claim:** Practitioners define action items as tasks completable within one to two weeks as a scope boundary. Tasks that span longer are projects, not action items, and should be decomposed. The mechanism is accountability decay: multi-week items have no natural check-in point and tend to drift; two-week scope forces decomposition into auditable increments. Scope: this boundary is a rule of thumb, not a hard rule; sprint-based teams may use sprint length as the natural scope. Implication: when the summarizer encounters a vague large-scope commitment ('we need to redesign the onboarding'), it should flag it as [NEEDS DECOMPOSITION] rather than emitting it as a single action item.

---

### [key: ownership-ambiguity-at-scale]
- evidence: consensus
- group: ownership-attribution
- sources: https://www.scarletink.com/p/vanquishing-ownership-ambiguity-navigating-complexity-office

**Claim:** Ownership ambiguity in organizations is positively correlated with organizational size and seniority level. At individual contributor level, ownership is clear (single ticket assignments); at senior levels, ownership becomes contested across teams. The mechanism is that senior-level work involves cross-functional concerns where multiple people have legitimate but overlapping claims. Scope: this is not a meeting notes problem per se, but it means meeting notes for leadership meetings contain more inherently ambiguous ownership signals than notes for team-level standups. Implication: the summarizer should apply stricter flagging thresholds for executive and cross-team meetings, not assume one person's statement implies ownership.

---

## Null results
- decision vs open question boundary meeting notes classification practitioner — returned only machine-learning classification papers (decision boundaries as ML concept); no practitioner meeting-notes content surfaced; recovered by reformulating as 'decisions vs open questions parking lot tabled items'

## New angles surfaced
- Role-differentiated summarization: standups vs. design reviews vs. retrospectives likely need different classification thresholds and flag vocabularies — no source addressed meeting-type as a scope variable for ownership rules
- Owner acceptance as a distinct signal: no source explicitly addressed how a summarizer should handle cases where a name is mentioned but no acceptance is signaled ('let's get Sarah to do this' vs 'Sarah, can you take this?' vs 'Sarah: yes, I'll do it') — these are meaningfully different confidence levels
- Retroactive ownership assignment: the failure mode of executive assistants or note-takers silently assigning owners after the meeting (not in the room) is mentioned but not addressed procedurally — a flag for 'owner inferred post-meeting' may be needed
- Recurring meeting context: prior meeting action items re-surfacing as open in a new meeting is a distinct ownership signal (the item was assigned previously and is still owned by that person) — no source addressed cross-meeting continuity as an ownership inference source
- Hedged decisions: language like 'we're leaning toward X', 'probably we'll do X', 'tentatively decided' — no source provided a classification rule for provisional decisions vs. firm ones
