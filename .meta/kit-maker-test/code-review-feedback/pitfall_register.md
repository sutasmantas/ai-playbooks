# Pitfall Register — Code Review Feedback Generator

Failure modes observed in practice or derivable from research. Each entry has a cause and a procedure checkpoint that prevents it.

---

## Pitfall 1: Severity inflation — every comment becomes a blocker

**What it looks like:** 8-12 blocking comments, including naming preferences, style choices, "this could be better." Author rubber-stamps the review or disputes everything.

**Cause:** Reviewer conflates "I notice this" with "this must change before merge." Severity inflation is a documented failure chain: signal erosion → rubber-stamping → critical issues buried → cycle time 6h → 2-3 days.

**Procedure checkpoint:** Step 4 severity audit: "Can you name the policy or risk? If no, reclassify as suggestion." Inflation check: >5 blockers triggers mandatory audit.

---

## Pitfall 2: Severity deflation — genuine blockers labeled as suggestions

**What it looks like:** Security issue prefixed "Nit:" or "suggestion." Author treats it as optional. Ships with SQL injection.

**Cause:** Politeness bias, uncertainty masking, shipping pressure. The reviewer hedges a genuine finding to avoid conflict.

**Procedure checkpoint:** Step 4 deflation check: if PR touches security-sensitive areas and has zero blocking comments, re-run security dimension pass. Step 3 label guide: uncertain findings go to `suggestion (non-blocking)` with an explicit uncertainty note — NOT `nitpick`.

---

## Pitfall 3: Coverage collapse to readability

**What it looks like:** 10 readability comments, 0 security comments. Reviewer raises readability issues at 7x the rate of bugs (Atlassian 2025 empirical data).

**Cause:** Readability is cognitively easy to spot and low-conflict to raise. Security requires deliberate, structured effort. Without explicit prompting, reviewers default to readability.

**Procedure checkpoint:** Step 2 mandates six named passes in order. Security is dimension 2 (not 5). Step 5A requires explicit "nothing found" for every skipped dimension.

---

## Pitfall 4: Comment avalanche — 14 identical comments for 14 identical instances

**What it looks like:** Same naming style flagged once per occurrence. Author receives 14 comments and feels attacked.

**Cause:** Reviewer processes the diff line-by-line and raises each instance separately. No consolidation step.

**Procedure checkpoint:** Step 3 pre-write filter: "Is this the same pattern as a previous comment? → Consolidate — 1 comment, note applies throughout." Edge case: "Same issue in many places" — write once, note applies throughout.

---

## Pitfall 5: Blocking on out-of-scope issues

**What it looks like:** Reviewer finds a bug in adjacent code not in the diff. Blocks merge. PR author says "that's not my change." Conflict.

**Cause:** Reviewer catches a genuine issue but applies it to the wrong scope — existing tech debt from outside the current change.

**Procedure checkpoint:** Step 1 scope boundary: identify files NOT in the diff before writing any comments. Step 3 pre-write filter: "Is this in the diff? → Omit. Out-of-scope."

---

## Pitfall 6: Person-targeting language triggers defensiveness

**What it looks like:** "You didn't validate the input." Author becomes defensive. Dispute escalates. Technical content of the comment is lost.

**Cause:** Author-targeted language activates identity defense. "You did not close the connection" is indistinguishable in tone from personal criticism.

**Procedure checkpoint:** Step 3 pre-write filter: "Does this address code or the author? → Rewrite with code-targeted language." Step 6 checklist: □ No person-targeting language.

---

## Pitfall 7: Opinion stated as fact silences alternatives

**What it looks like:** "This architecture is wrong." No reasoning. Author has a different opinion but cannot dispute a blank assertion. Either capitulates or escalates.

**Cause:** Reviewer has an opinion but doesn't distinguish it from fact. Stated as fact to sound authoritative.

**Procedure checkpoint:** Step 3 pre-write filter: "Is it an opinion stated as fact? → Add 'I think' or add reasoning." The rule is checkable: does the comment contain an assertion without supporting reasoning?
