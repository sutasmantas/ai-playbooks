# Test Transcript — Design Review Meeting (Phase 7 test)

**Purpose of this transcript:** Deliberately includes (a) items with no owner, (b) decisions stated in informal/positive language without clear resolution phrases, (c) important content late in the transcript that would be positionally biased.

---

**Participants:** Alex (lead), Priya (frontend), Dan (backend), Lena (QA)

---

Alex: Okay let's get into the search redesign. Quick reminder — we need to have the new search page live before the Q3 launch, which is eight weeks out. Priya, where are we on the mockups?

Priya: The main search flow is done. The results page still has two layout options I haven't decided between — I'll send both to the group tonight for feedback.

Alex: The advanced filters section is the one I'm worried about. There was a Slack thread last week about whether we're even building advanced filters in this sprint or pushing them to a later one. Did that get resolved?

Dan: I thought we were deprioritizing them. Felt like that was the direction from the last standup.

Priya: I don't think it was official though. We said we might push them but we didn't actually close it.

Alex: Yeah let's just say we're not doing advanced filters in this sprint. Simpler is better and we don't have the time.

Dan: Works for me.

Priya: Yeah sounds good.

Alex: Great. Dan, the API side — the search endpoint still has that latency issue, right?

Dan: Yeah it's about 800ms average. Target is under 400. I know what the fix is, it's an N+1 query problem. I can get it done this week.

Alex: What about the pagination? Is that handled?

Dan: Pagination is done. That's not the issue.

Alex: Okay good. What about error states — when search returns no results, or when the API fails?

Priya: I haven't designed the error states yet. Someone needs to spec those out.

Alex: Can you take that, Priya?

Priya: Sure. I'll do the error state designs. I'll have them ready by end of week.

Alex: The API — does it return a useful error message that the frontend can use, or do we need to handle that on the backend?

Dan: Currently it just returns a 500 with no body. We should probably return a structured error with a code and message. I'll add that to my ticket.

Alex: When will that be done?

Dan: Same as the latency fix — end of this week.

Lena: I have a question about testing coverage. Right now we don't have any automated tests for the search flow at all. Is that intentional for now?

Alex: It's not intentional, it's just where we are. We should definitely get that sorted before launch.

Lena: I can write the integration tests for the search endpoint. I'll need the API spec first though — Dan, can you share that with me once it's updated?

Dan: Yeah of course.

Alex: Let's make that a clear dependency — Lena's test work is blocked on Dan's API spec update.

Alex: One thing I want to flag — the mobile version of the search page hasn't been discussed at all. Priya, is the mockup mobile-first or desktop-first?

Priya: Desktop-first. I haven't thought about mobile at all yet.

Alex: That's going to be a problem for Q3. Mobile search is about 60% of our traffic.

Priya: I can do a mobile pass after the desktop design is finalized. It'll add time though.

Alex: How much time?

Priya: Honestly I don't know. Could be two days, could be a week depending on how different the layouts end up being.

Alex: Okay we need to flag that as a risk. We don't know if mobile fits in the timeline.

Lena: Also — and I should have mentioned this earlier — the search index hasn't been updated since January. It's missing about 3,000 products we added in Q1. So even if everything else works, users will get incomplete results. Someone needs to deal with that.

Alex: That's a big one. Who handles the search index?

Dan: That's technically infrastructure, not our team. We'd need to raise it with the infra team.

Alex: Okay. Let's make sure that gets raised. Can you send them a message today, Dan?

Dan: Yeah I'll ping them.

Alex: Great. I think that covers it. Any other blockers?

Lena: Nothing from me.

Priya: Actually one more thing — the designs use a custom font that may not be licensed for web use. I need to check with legal before we go too far down the road with it.

Alex: Good catch. Please do that this week.

---

*[End of transcript]*
