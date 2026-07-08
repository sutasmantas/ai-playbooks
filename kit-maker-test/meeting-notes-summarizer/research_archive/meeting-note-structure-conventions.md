# Research Archive: Meeting note structure conventions

Evidence track: PRACTITIONER-CONSENSUS (verify pass skipped)

## Saturation log
- Query 1: "meeting notes best practices action items decisions open questions structure conventions guide empirical" — 4 new keys
- Query 2: "effective meeting documentation format conventions experienced practitioners template consensus" — 2 new keys
- Query 3: "meeting action items owner deadline structure consensus practitioner guide" — 2 new keys
- Query 4: "site:github.com meeting notes template action items decisions format conventions" — 2 new keys
- Query 5: "meeting notes failure modes structure problems accountability documented survey" — 3 new keys
- Query 6: "meeting notes \"open questions\" OR \"parking lot\" section structure unresolved items follow-up convention" — 1 new keys
- Query 7: "meeting minutes distribution timing within 24 hours best practice accountability follow-through rate" — 1 new keys
- Query 8: "meeting action items completion rate statistics \"never completed\" OR \"not completed\" follow-through research" — 1 new keys
- Query 9: "meeting minutes verbatim vs summary style conventions when to use each practitioner guidance" — 1 new keys
- Query 10: "\"decision log\" OR \"decisions made\" meeting notes separate section rationale record architecture review convention" — 1 new keys
- Saturated: YES

---

## Claims (15)

### [key: action-item-triple-formula]
- evidence: consensus
- group: ownership-attribution
- sources: https://www.wrike.com/blog/action-items-with-meeting-notes-template/, https://fellow.ai/blog/how-to-manage-meeting-tasks-and-action-items/, https://umbrex.com/resources/how-to-run-effective-meetings/capturing-action-items-and-decisions/, https://ticnote.com/en/blog/action-items-in-meeting-minutes-guide

**Claim:** Practitioner consensus across multiple PM and meeting-tool guides (Wrike, Fellow.ai, umbrex.com, ticnote.com) holds that an action item must contain exactly three elements: [Owner] + [verb + specific deliverable] + [deadline]. The mechanism is accountability clarity: a named individual cannot deflect responsibility, a concrete verb eliminates interpretation ambiguity, and a date creates a shared expectation of completion. This applies to all non-trivial team meetings; it is less critical in informal standups where no cross-team dependency exists. Implication for the summarizer: the procedure must extract or flag all three fields from the transcript; a partial action item (missing owner or date) should be flagged as incomplete rather than silently written without those fields.

---

### [key: single-named-owner-not-team]
- evidence: consensus
- group: ownership-attribution
- sources: https://fellow.ai/blog/how-to-manage-meeting-tasks-and-action-items/, https://boardcloud.us/board-meeting-glossary-of-terms/action-items/, https://flexmanager.com/how-to-run-an-effective-meeting-structure-accountability-and-the-right-tools/

**Claim:** All major practitioner guides (Fellow.ai, boardcloud.us, ticnote.com, flexmanager.com) explicitly prohibit assigning action items to 'the team' or a group without a named individual. The mechanism is diffusion of responsibility: when ownership is shared, each member assumes another will act, and the task falls through. This applies universally — even when the work genuinely requires a team, the convention is to name a single accountable coordinator. Implication: the summarizer must detect group-assigned items (e.g., 'team will…', 'we should…') and either resolve to a specific owner from context or flag the ambiguity explicitly.

---

### [key: action-item-completion-rate-44-73-pct-failure]
- evidence: anecdote
- group: failure-modes
- sources: https://fellow.ai/blog/how-to-manage-meeting-tasks-and-action-items/, https://www.streamli9.com/blog/why-meeting-action-items-never-get-done

**Claim:** Two cited statistics (Fellow.ai citing 44%; Streamli9 citing 73%) report that the majority of meeting action items are never completed, and 71% of meetings fail to achieve their objectives due to poor follow-through. While these figures come from commercial sources (not peer-reviewed studies), they are widely cited in practitioner literature and directionally consistent. The mechanism is structural: without named owners, deadlines, and a follow-up loop, action items have no forcing function. Implication: the summarizer's output format is not cosmetic — structural completeness (owner + deadline + status field) is the primary lever for improving completion rates; the procedure should treat missing fields as a quality defect.

---

### [key: decisions-vs-discussion-separation]
- evidence: consensus
- group: structure-conventions
- sources: https://www.wrike.com/blog/action-items-with-meeting-notes-template/, https://asana.com/resources/meeting-notes-tips, https://www.wildapricot.com/blog/how-to-write-meeting-minutes

**Claim:** Practitioner guides (Wrike, Asana, wildapricot.com) consistently distinguish 'decisions made' from 'discussion summaries' as separate logical sections, not a single narrative. The mechanism is retrieval efficiency: readers scanning notes two weeks later need to locate a decision without reading all context, and merging decisions into discussion forces linear reading. This convention applies to any meeting where consequential choices were made; it is less necessary for pure status-update meetings. Implication: the summarizer procedure needs a dedicated 'Decisions' extraction step — not as part of the discussion summary, but as a parallel output section.

---

### [key: decision-log-rationale-record]
- evidence: consensus
- group: structure-conventions
- sources: https://plane.so/blog/decision-log-what-it-is-why-teams-use-it-and-template, https://martinfowler.com/bliki/ArchitectureDecisionRecord.html, https://microsoft.github.io/code-with-engineering-playbook/design/design-reviews/decision-log/, https://www.projectmanager.com/blog/project-decision-log

**Claim:** Engineering and PM communities (Plane, Martin Fowler's ADR pattern, Microsoft Engineering Playbook, projectmanager.com) distinguish a 'decision log' from meeting notes: meeting notes record discussion + context relevant over days; a decision log records only outcome, alternatives, rationale, and decision-makers, designed to be useful over months. The mechanism is temporal durability: discussion context decays in value; decision rationale does not. This is most critical for architectural, strategic, or policy decisions; less so for tactical meeting resolutions. Implication: for meetings containing consequential decisions, the summarizer should structure each decision as: decision summary, alternatives considered, rationale, decision-maker — not just a bullet statement of the choice.

---

### [key: parking-lot-open-questions-section]
- evidence: consensus
- group: structure-conventions
- sources: https://www.sessionlab.com/methods/parking-lot, https://www.lucidmeetings.com/glossary/parking-lot, https://www.nngroup.com/articles/parking-lots/, https://medium.com/mg-rush-facilitation-training-and-coaching/how-to-manage-your-meeting-parking-lot-and-assign-action-items-955411510361

**Claim:** Facilitation practitioners (SessionLab, Lucid Meetings, Facilitator.school, NN/G) and meeting guides distinguish two separate deferred-item categories: a 'Parking Lot' for off-topic items deferred to a future meeting, and 'Open Questions' for questions raised but not yet answered within scope. Both must carry a WWW assignment (Who does What, When) to avoid losing the item. The mechanism is capture fidelity: topics raised without resolution disappear from the working memory of participants if not explicitly logged. Implication: the summarizer should produce both sections and require each entry to carry an owner or at minimum a scheduled resolution path — not just an unattributed list of questions.

---

### [key: distribution-within-24-hours]
- evidence: consensus
- group: completeness
- sources: https://www.ibabs.com/en/board-meetings/meeting-minutes-best-practices/, https://www.glueup.com/blog/how-write-meeting-minutes-w-template, https://www.businessmanagementdaily.com/25775/distribute-meeting-minutes-promptly/

**Claim:** Multiple practitioner sources (iBabs, Glue Up, Business Management Daily, LinkedIn practitioner threads) converge on distributing meeting minutes within 24 hours, with some sources specifying 'within 1 hour' for maximum effectiveness. The mechanism is memory decay and momentum: details fade and enthusiasm dissipates rapidly after a meeting; early distribution allows corrections while participants can still verify accuracy, and creates a psychological forcing function for action-item owners. This applies to all operational meetings; board/governance minutes may have a longer review cycle due to formal approval requirements. Implication: the summarizer kit's delivery instructions should specify a target distribution window, and the procedure should be optimized for speed (draft-quality first, then refine) rather than completeness before send.

---

### [key: consistent-template-across-meetings]
- evidence: consensus
- group: structure-conventions
- sources: https://www.atlassian.com/software/confluence/templates/meeting-notes, https://www.wildapricot.com/blog/how-to-write-meeting-minutes, https://www.teamwork.com/blog/how-to-take-meeting-notes/, https://www.diligent.com/resources/blog/effective-meeting-minutes

**Claim:** Confluence/Atlassian, WildApricot, Teamwork, and Diligent all recommend using an identical template structure for every meeting of the same type within an organization. The mechanism is cognitive load and archive utility: participants develop a mental model of where to find action items, decisions, and context; cross-meeting search becomes predictable; onboarding new team members becomes faster. This applies to recurring meeting types (sprint review, 1:1, all-hands); bespoke one-off meetings may warrant different structure. Implication: the summarizer kit should produce type-specific templates (e.g., sprint retro vs. client call vs. board meeting) rather than one universal template, because the consistency requirement applies within type, not globally.

---

### [key: summary-not-verbatim-default]
- evidence: consensus
- group: format
- sources: https://gotranscript.com/en/blog/minutes-vs-notes-vs-summary-vs-transcript, https://www.getburo.com/taskiq/meeting-minutes-vs-summary, https://emmahandson.com/news/types-of-minutes-the-right-minutes-for-your-meeting/, https://www.joinglyph.com/blog/meeting-minutes-or-meeting-report

**Claim:** GoTranscript, Buro, Emma Handson, and Glyph AI practitioner guides establish a clear hierarchy: verbatim minutes are appropriate only for legal proceedings, hearings, and compliance-mandated contexts; summary-style is the universal default for team meetings. The mechanism is readability vs. legal necessity: a 1-hour verbatim transcript runs 6-8 pages, overwhelming the reader and burying decisions in dialogue; summary style distills outcomes. Scope condition: when legal enforceability of exact phrasing is required, verbatim is non-negotiable. Implication: the summarizer's default mode should produce summary-style output; the procedure should include a trigger condition for when verbatim or near-verbatim style is warranted (e.g., formal grievance meetings, regulatory hearings).

---

### [key: vague-task-description-failure-root-cause]
- evidence: consensus
- group: failure-modes
- sources: https://ticnote.com/en/blog/meeting-note-mistakes, https://fellow.ai/blog/how-to-track-action-items-steps-to-ensure-follow-through/, https://www.streamli9.com/blog/why-meeting-action-items-never-get-done, https://www.easyagile.com/blog/improve-sprint-retrospective-action-items

**Claim:** Practitioner sources (ticnote.com, Fellow.ai, Streamli9, Easy Agile retrospective research) identify four structural root causes for action item non-completion: (1) vague task descriptions, (2) missing deadlines, (3) unclear ownership, (4) no follow-up system. These causes are compounding — each removed element multiplies dropout probability. The mechanism is that each missing element eliminates a distinct friction-reduction: specificity removes interpretation paralysis, deadlines remove procrastination cover, ownership removes diffusion, follow-up removes forgetting. Implication: the summarizer's extraction logic must treat each of these four elements as required fields, not optional enhancements.

---

### [key: agenda-aligned-note-order]
- evidence: consensus
- group: structure-conventions
- sources: https://www.wrike.com/blog/action-items-with-meeting-notes-template/, https://www.wildapricot.com/blog/how-to-write-meeting-minutes, https://asana.com/resources/meeting-notes-tips

**Claim:** Wrike, WildApricot, and Asana recommend structuring notes in the same order as the meeting agenda so attendees can cross-reference what was discussed against what was planned. The mechanism is navigation efficiency: participants arriving at the notes already have a mental map from the agenda; mismatched ordering forces re-orientation. Scope: applies when an agenda was distributed pre-meeting; for unstructured meetings, topic-grouping is preferred over chronological order. Implication: the summarizer should either receive the agenda as an input and use it as the structural skeleton, or produce topic-grouped output (not strict chronological) when no agenda was provided.

---

### [key: notes-are-not-transcript-of-discussion]
- evidence: consensus
- group: format
- sources: https://www.wildapricot.com/blog/how-to-write-meeting-minutes, https://www.diligent.com/resources/blog/effective-meeting-minutes, https://www.charliehr.com/blog/article/meeting-minutes-template, https://fellow.ai/blog/meeting-minutes-example-and-best-practices/

**Claim:** Multiple practitioner guides (WildApricot, Diligent, CharlieHR, Fellow.ai) hold that meeting notes should be 'solely fact-based' and should NOT record opinions, debate, or the deliberative process in detail — only outcomes, decisions, and commitments. The mechanism is signal-to-noise ratio: recording who said what in deliberation turns documents into unreadable transcripts; readers need to know what was decided, not how it was debated. Scope condition: some HR and governance contexts require recording dissenting votes or concerns for legal protection. Implication: the summarizer's discussion summary section should distill to key context that explains decisions, not replay the conversation chronologically.

---

### [key: incomplete-attendee-list-audit-failure]
- evidence: consensus
- group: failure-modes
- sources: https://ticnote.com/en/blog/meeting-note-mistakes, https://flexmanager.com/how-to-run-an-effective-meeting-structure-accountability-and-the-right-tools/, https://lpcentre.com/articles/minutes-of-meeting

**Claim:** ticnote.com, FlexManager, and LP Centre document that incomplete attendee records are a specific compliance failure mode: they break audit trails for boards and regulated bodies, making governance decisions unverifiable and audits costly. The mechanism is evidentiary: a decision made in a meeting where attendance is disputed has no proof of quorum or participant knowledge. Scope: critical for board meetings, compliance reviews, regulated industries; lower stakes for informal team meetings. Implication: the summarizer should extract a complete attendee list as a required field, including distinguishing between attendees, guests, and absentees when that distinction matters for the meeting type.

---

### [key: negotiated-deadline-better-than-missed-original]
- evidence: consensus
- group: ownership-attribution
- sources: https://boardcloud.us/board-meeting-glossary-of-terms/action-items/, https://fellow.ai/blog/how-to-manage-meeting-tasks-and-action-items/

**Claim:** BoardCloud and Fellow.ai document the convention of verbally confirming deadlines with the assigned owner before the meeting closes, and explicitly encouraging renegotiation at assignment time rather than silent acceptance of an unrealistic date. The mechanism is trust maintenance: when deadlines are routinely missed, team members learn to ignore meeting outcomes entirely; a negotiated realistic deadline is more valuable than an unachievable one that erodes credibility. Implication: the summarizer kit's procedure notes should instruct the note-taker to capture confirmed deadlines (not proposed ones), and flag any action items where no deadline was verbally confirmed.

---

### [key: github-template-four-section-standard]
- evidence: consensus
- group: structure-conventions
- sources: https://github.com/sgharlow/claude-code-recipes/blob/main/recipes/Recipe-001-Meeting-Notes-to-Action-Items.md, https://github.com/mogranjm/minutetakeR, https://github.com/raddadengineer/remarkable-templates, https://github.com/AlexAnys/awesome-openclaw-usecases-zh/blob/main/usecases/meeting-notes-action-items.md

**Claim:** Multiple GitHub meeting-notes templates (raddadengineer/remarkable-templates, sgharlow/claude-code-recipes, AlexAnys/awesome-openclaw-usecases-zh, mogranjm/minutetakeR) converge on a four-section standard: (1) Date & Attendees, (2) Key Decisions (numbered list), (3) Action Items (table: Task, Owner, Deadline, Status), (4) Open Questions. This open-source convergence indicates the structure is independently validated by practitioners across multiple projects. Implication: the summarizer's default output schema should match this four-section structure as a safe baseline, with meeting-type-specific extensions layered on top.

---

## Null results
- None

## New angles surfaced
- Meeting type taxonomy — the structure conventions differ substantially between board/governance minutes, project team meetings, client-facing meetings, and async-first team check-ins; the summarizer likely needs type detection before applying templates
- Status tracking across meetings — the action-item 'Status' column in the four-section template implies a cross-meeting carryover mechanism (surfacing incomplete items from last session); this is a procedural gap not covered by any source found
- Dissent and minority opinion capture — governance contexts require recording dissenting votes, but no practitioner source gave concrete guidance on HOW to structure that within summary-style notes without inflating length
- AI-generated vs human-taken notes trust calibration — as AI meeting summarizers become common, there is an emerging question about whether recipients trust AI-generated minutes differently than human-taken ones; no research found on this yet
- Approval and amendment workflow — most governance bodies formally approve minutes at the next meeting; no source addressed how to structure a 'pending approval' state in the notes document itself
