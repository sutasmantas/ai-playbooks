# Meeting Summary — Search Redesign Design Review

---

## Step 1 — Fact Extraction List (procedure-required pre-write pass)

**[A] Action candidates extracted:**
1. Priya: "I'll send both [layout options] to the group tonight"
2. Priya: "I'll do the error state designs. I'll have them ready by end of week."
3. Dan: fix N+1 query latency (800ms → target 400ms), end of week
4. Dan: "I'll add that to my ticket" — structured error response (code + message), end of week
5. Lena: write integration tests for search endpoint — stated conditional on Dan's API spec
6. Dan: share updated API spec with Lena (implied by end of week timeline)
7. Dan: "I'll ping [infra team] today" — re: outdated search index
8. Priya: "I need to check with legal" — font license for web use
9. Priya: mobile pass on search design — mentioned but no deadline confirmed

**[D] Decision candidates extracted:**
1. Advanced filters not in this sprint — Alex: "let's just say we're not doing advanced filters in this sprint"; Dan: "Works for me"; Priya: "Yeah sounds good" — informal language, specificity test: PASSES (specific outcome stated)

**[OQ] Open question candidates:**
1. Mobile search timeline — flagged as risk, 2 days to 1 week estimate, no resolution
2. Font license status — unknown pending legal check

**[PL] Parking lot candidates:** None explicitly deferred as out-of-scope.

**Speaker coverage check:** Alex (decision + facilitation), Priya (4 items), Dan (4 items), Lena (1 item) — all covered ✓

**Final-third scan:** Last third of transcript: mobile risk, search index gap, font license. All captured ✓

---

## Summary

### Decisions

- **Advanced filters excluded from this sprint** | Alternatives: build advanced filters in sprint (considered and rejected) | Rationale: insufficient time given 8-week Q3 deadline; simpler is better | Decided by: Alex; confirmed by Dan and Priya

---

### Action Items

| Owner | Task | Deadline | Status | Notes |
|-------|------|----------|--------|-------|
| Dan | Contact infra team to update search index (missing ~3,000 Q1 products) | Today | Open | |
| Priya | Send both results-page layout options to group for feedback | Tonight | Open | |
| Dan | Fix N+1 query causing 800ms average search latency (target: <400ms) | End of week | Open | |
| Dan | Update search API to return structured error response with code and message (currently returns 500 with no body) | End of week | Open | |
| Dan | Share updated API spec with Lena | End of week | Open | |
| Priya | Design error states: no-results view and API-failure view | End of week | Open | |
| Priya | Verify custom font in designs is licensed for web use (check with legal) | This week | Open | |
| Lena | Write integration tests for search endpoint | [DEADLINE NOT STATED] | Open | Conditional on Dan's updated API spec |
| Priya | Create mobile version of search page designs | [DEADLINE NOT STATED] | Open | Conditional on desktop designs being finalized; Priya estimated 2 days–1 week depending on layout divergence |

---

### Unassigned Items

*(None — all action candidates were assigned by end of meeting.)*

---

### Open Questions

- **Mobile search timeline** — unclear whether mobile redesign (estimated 2 days–1 week) fits within Q3 launch window; flagged as risk but no resolution or decision made
- **Font license for web use** — outcome unknown pending Priya's legal check this week

---

### Parking Lot

*(No items explicitly deferred as out-of-scope.)*

---

## Step 5 — Tensions

1. **Advanced filters decision used informal confirmation language.** Alex stated the decision specifically; Dan said "Works for me" and Priya said "Yeah sounds good." The Step 2 specificity test is met (outcome is specific: no advanced filters this sprint). However: "sounds good" without an explicit "agreed" or "decided" could be re-litigated. I classified this as a **Decision** — verify this is the correct classification before distributing.

2. **Dan has 4 action items all due end of week,** including a significant latency fix and an API spec update that Lena is blocked on. Capacity concern — this is a potential bottleneck for the whole sprint if Dan's items slip. Surface to Alex.

---

## Step 6 — Human review checklist

- [ ] Every [UNASSIGNED] item has been assigned or explicitly noted as a gap — *No unassigned items in this transcript.*
- [ ] Every [UNCLEAR] item has been resolved or acknowledged — *No [UNCLEAR] flags in this transcript.*
- [ ] Every [RATIONALE NOT CAPTURED] flag has been surfaced — *No [RATIONALE NOT CAPTURED] flags; advanced filters rationale captured.*
- [ ] Every [WHO RESOLVES? / BY WHEN?] parking lot item has been assigned — *No parking lot items.*
- [ ] Lena's and Priya's [DEADLINE NOT STATED] items reviewed — these are intentionally undated due to dependencies; verify with owners that they have planned completion targets.
