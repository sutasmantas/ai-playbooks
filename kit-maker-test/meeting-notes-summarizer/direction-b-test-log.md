# Direction B — Test Run: Meeting Notes Summarizer

**Purpose:** Run the current kit-maker against a real domain (meeting notes summarizer) and document where each phase breaks. Research only gaps that emerge. This is not validation — the kit is a prototype. Results feed research angles and structural fixes.

---

## Phase 1 — ORIENT

**What happened:** Phase 1 says "look at reference material and existing work." For a fresh domain: there is no reference material.

**Break #1: Phase 1 has no fallback for fresh domains**
The ENTRYPOINT Phase 1 says to read `lessons/` and check design_log.md Goal Model. For a fresh domain kit (not the kit-maker itself), there is no design_log.md yet at the start of Phase 1 — the template is written to the kit-maker's OWN design_log, not to the generated kit's. An agent starting Phase 1 for a new domain would look for design_log.md, find nothing, and have no fallback procedure.

Fix applied: → See below.

**Break #2: Phase 1 ORIENT goal is unclear for generated kits**
The ENTRYPOINT Phase 1 ORIENT description reads like the kit-maker orienting itself (reading lessons/, pitfall_register.md). For a generated kit run, Phase 1 should be "orient to what this domain already has" — existing documentation, reference outputs, past attempts. The current Phase 1 text conflates kit-maker orientation with domain orientation.

**What Phase 1 actually produced for this domain:**
- No lessons/ for meeting notes summarizers
- No prior kit to reference
- No design_log.md to read
- Domain brief: created via Phase 2 interview (moved to Phase 2)
- Research angles seeded from domain brief: completeness in long-transcript summarization, ownership attribution, flagging ambiguity without disrupting usability, meeting note structure

---

## Phase 2 — INTAKE

**What happened:** Interview ran on domain brief. Questions 1-6 plus new 2b (quality dimensions, added this session).

**Break #3: Q2b (quality dimensions) was just added — not validated**
The quality dimensions question was added to the interview based on the Direction C backward trace. It hasn't been tested on a real user. The dimensions I extracted (completeness, ownership, deadline, decision clarity, open question separation) feel right but are derived from my own domain knowledge, not user input. For a domain I DON'T know well, this question is critical — and the procedure for what to DO with the answer (each dimension appears in at least one Phase 6 procedure) is new and untested.

**Break #4: Phase 2 confirmation step has no format**
ENTRYPOINT says "confirm with the user before proceeding to Phase 3." But doesn't specify what confirmation looks like: one-paragraph brief + "yes/no"? A structured checklist? An artifact the user signs off on? For async work (user not present during the session), this is a blocking gap — the kit pauses and waits, but there's no defined format for what it presents.

**What Phase 2 produced:**
- `domain-brief.md` — populated
- 4 research angles seeded

---

## Phase 3 — RESEARCH (not run, but gap analysis)

**Break #5: No academic literature on meeting note summarization**
This is a practitioner-consensus domain. The research wave would produce mostly CONSENSUS and ANECDOTE claims, no EMPIRICAL. The verify pass would find almost nothing to verify. The kit would be built entirely on practitioner consensus with honest weakness_register.md entries about this.

This is NOT a kit-maker failure — it's an honest outcome. But the research wave overhead (20+ angles, full pipeline) is high for a domain where the literature is thin. The kit has no lightweight track for thin-evidence domains where practitioner consensus is the best available evidence. Every domain goes through the full pipeline regardless of evidence quality.

**Potential fix:** Phase 3 should have a "research character assessment" at the start — estimate expected evidence tier before committing to full research wave. If mostly CONSENSUS expected: narrow to 3-5 angles, no verify pass needed (nothing to verify), fast-path to synthesis. Only full wave for empirical-evidence domains.

---

## Phase 5 — PLAN (skeleton only, checking for gaps)

**Break #6: plan.md template requires `{{STRONGEST_UNSUPPORTED_ASSUMPTION}}`**
In the skeleton, I can fill this: "The pre-read scan prevents omissions better than simultaneous read-and-summarize." But for a real domain the agent is less familiar with, identifying the strongest unsupported assumption requires knowing what's being assumed — which requires domain expertise. The template doesn't guide HOW to identify this; it just says fill it in.

---

## Phase 6 — BUILD (skeleton only, checking the loop)

**Break #7: Ambiguity check (just added) immediately fired on the skeleton**
Running the new ambiguity check (step 4 of per-file loop) on `procedures/summarize.md`:
- "If any is missing: add it" — who decides "missing"? The second-pass check is the mechanism, but "add it" is ambiguous: add it where? In what format? Fixed inline in the skeleton.
- "Name one of the following if present" (Step 5) — what if TWO are present? "Name one" was careless. Fixed inline.

The ambiguity check found real issues in the first file it ran on. **The check works.**

**Break #8: `[PROVISIONAL]` markers have no update mechanism**
The skeleton procedure has `[PROVISIONAL]` markers with notes about which research cluster will update them. But there's no mechanism to ensure those updates happen after synthesis. The launch instructions say "apply post-synthesis updates" but don't track WHICH provisional markers exist across WHICH files. A synthesis cluster could complete and the agent could forget to update the provisional markers.

Proposed fix: Phase 6 step 8 (Log) should record every `[PROVISIONAL]` marker and which synthesis cluster will update it. Create a `provisionals.md` tracking file in the kit directory.

---

## Phase 7 — VERIFY (not run, gap analysis only)

**Break #9: Canary for this domain doesn't exist**
`scripts/canary_spec.md` provides the canary design but no canary FILE for meeting notes summarizer. The Correctness Auditor has no known-bad example to calibrate against. Every first kit run has this problem — the canary is only available after a failure has already occurred.

**Break #10: Two-auditor model on a skeleton produces false positives**
Running the auditor prompts on a skeleton with `[PROVISIONAL]` markers would produce many RED findings — not because the kit is wrong, but because the skeleton is explicitly incomplete. The auditors don't know the difference between "incomplete because skeleton" and "incomplete because failed." Need a way to run auditors on the final product, not the skeleton. Currently no phase mechanism for this — auditors run per-file during Phase 6, but the skeleton should not be dispatched to auditors until it's been updated from research.

---

## Summary: breaks by priority

| Break | Phase | Severity | Fix status |
|-------|-------|----------|------------|
| #1: No fallback for fresh-domain Phase 1 | 1 | HIGH — blocks Phase 1 | Needs fix → ENTRYPOINT |
| #2: Phase 1 text conflates kit-maker + domain orientation | 1 | MEDIUM — confusing | Needs fix → ENTRYPOINT |
| #3: Q2b quality dimensions not validated | 2 | LOW — new, will be tested | Monitor |
| #4: Phase 2 confirmation has no format | 2 | MEDIUM — blocks async work | Needs fix → ENTRYPOINT |
| #5: No lightweight track for thin-evidence domains | 3 | MEDIUM — ROI problem | Angle + design decision |
| #6: Strongest-unsupported-assumption has no guidance | 5 | LOW — template gap | Needs fix → plan.md.template |
| #7: Ambiguity check found real issues — works | 6 | POSITIVE finding | Keep |
| #8: Provisional markers have no update mechanism | 6 | HIGH — silent decay | Needs fix → new provisionals.md tracking |
| #9: No canary for first run | 7 | MEDIUM — auditor calibration gap | Known gap, log in weakness register |
| #10: Auditors on skeleton produce false positives | 7 | HIGH — ruins per-file loop for skeletons | Needs design decision |

**Immediate fixes (can apply now without research):** #1, #2, #4, #6, #8
**Need research or design decision:** #5, #10
**Known gap, no fix available:** #9
