# Interview Script: Domain Brief

**Purpose:** Establish what kit is being built, for whom, what success looks like, and what the user already knows — so the research angles are correctly scoped and the kit's done-criteria are grounded in real user outcomes rather than assumed ones.

**Procedure:** One question at a time. Wait for the answer. Do not batch. Do not generate kit content during this interview.

---

## Questions

**1. What domain or task is this kit for? One sentence: what should someone be able to do after using the kit that they couldn't do as well before?**

- Why: scopes the research angles. "Make better cold emails" and "debug distributed systems" need completely different research.
- What to do with the answer: seed the initial research angle list. Fill `{{DOMAIN}}` and `{{KIT_PURPOSE}}` in the design log.

---

**2. Who is the user of the kit — and what do they already know about this domain?**

- Why: a kit for experts looks completely different from a kit for beginners. Expert users need the kit to enforce rigor they already understand. Beginner users need the kit to teach concepts they don't have.
- What to do with the answer: note the expertise level. This affects (a) how much explanation goes into kit rules vs how much they can be terse, (b) which assumptions the kit can make, (c) what "good output" looks like for this user.
- If "the user is me": treat the user as the domain expert. Ask: what do you NOT know that you'd want the kit to research for you?

---

**2b. What does quality look like in this domain? And what does failure look like?**

Not the same as success (Q3). Quality means: what makes an output good in this domain? What would an expert immediately notice is missing or wrong?

Examples:
- Writing kit: "quality means the voice is consistent and every scene serves the arc; failure is a scene that could be cut without losing anything"
- Research kit: "quality means findings are traceable to specific sources; failure is a claim with no evidence or vague 'experts say'"
- Code review kit: "quality means flagging root causes, not symptoms; failure is comments that say 'this is bad' without explaining why"

- Why: this question produces the specific quality dimensions that Phase 6 procedures must cover. Q3 (success) tells us the outcome; this tells us what "good work" looks like at the task level. These are different — you need both.
- What to do with the answer: add quality dimensions explicitly to the domain brief. Each dimension should appear in at least one Phase 6 procedure. If a quality dimension has no corresponding procedure, that is a gap.

---

**3. What does success look like specifically? Not "a good kit" — what observable outcome tells you the kit is working?**

Examples by domain:
- Writing kit: "my first draft needs fewer than 2 rounds of editing to reach publishable quality"
- Research kit: "I find sources I wouldn't have found myself within the first wave"
- Code review kit: "bugs caught before they reach production, not after"

- Why: this becomes the done-criteria for the kit itself. Without a specific success condition, there is no way to know if the kit is good or just feels good.
- What to do with the answer: write this as the gold standard in the design log. Use it to evaluate kit output throughout Phase 6.

---

**4. What have you already tried for this domain, and what specifically failed or was missing?**

- Why: narrows the research to the actual gap, not the full domain. If the user has already tried prompt-based approaches and found them inconsistent, the research should focus on structural approaches — not re-research what's already known not to work.
- What to do with the answer: add to the design log as "known failures — do not re-research." Add as negative angles: "what makes X fail?" This scopes the research more precisely.

---

**4b. What does an agent miss in this domain even when trying hard?**

Not failure modes (Q4) — the systematic omission bias: content that is consistently underrepresented in output even when the agent is trying to be thorough.

Examples:
- Meeting notes: content in the final third of a transcript; items raised by speakers with fewer turns
- Code review: security issues; operational readiness; anything requiring cross-cutting context
- Research kit: contradicting evidence; null results; studies that failed to replicate

- Why: every domain has a systematic omission bias — something the agent underweights by default because it is cognitively less salient or less frequent. The kit procedure must name this bias and build a compensating extraction pass. "Be thorough" is not a procedure rule.
- What to do with the answer: add to domain brief as "systematic omission bias." Seed research angles about what gets missed. Add a compensating step to the Phase 6 procedure — this step is the single highest-ROI addition to any kit procedure.

---

**5. What is explicitly out of scope for this kit?**

- Why: out-of-scope is as important as in-scope. A kit that tries to handle everything handles nothing well. The user's scope boundary prevents scope creep during Phase 6.
- What to do with the answer: write into plan.md's "What this kit is NOT" section. Use as a hard boundary during Phase 6: any generated file that crosses this boundary is a scope violation.

---

**5b. What team-specific parameters must be known before this kit can run?**

Some domains require external inputs that cannot be inferred from the task input alone — team policies, agreed standards, organizational context.

Examples:
- Code review: does the team require tests on every PR? Is there a written severity guide?
- Meeting notes: what counts as a "decision" in this team's culture? Is there a follow-up system?
- Writing kit: what is the house style? Who is the audience?

- Why: kit procedures that silently assume default policies produce wrong output when the team's policy differs. These parameters must be surfaced before the kit runs — not inferred mid-procedure. They should appear in the kit's "Before you start" section.
- What to do with the answer: list as "parameterization inputs" in the domain brief. Each one becomes a required prompt in the generated kit's procedure preamble.

---

**5c. What does a large or hard instance of this task look like?**

Not the average case — the hard case. What is the upper end of what this kit will face?

Examples:
- Meeting notes: 3-hour board meeting, 15 speakers, 50+ action items, decisions referencing prior meetings
- Code review: 1,500 LOC PR spanning 20 files with cross-cutting architecture changes
- Technical spec: speccing a 6-month feature from a 3-sentence product requirement

- Why: kits built and tested only on small inputs fail at the scale users actually operate at. The "hard case" must be explicit before Phase 6 so procedures include scale-handling rules (chunking, scoping, priority ordering for large output sets).
- What to do with the answer: add to domain brief as "realistic input scale." Add a scale-stress test as a required Phase 7 test case — at minimum one input at the hard-case size described here.

---

**6. What is the broader goal this kit serves — beyond the kit itself?**

Not "I want a kit that does X." "I want X so that I can achieve Y, which matters because Z."

- Why: the broader goal is what the kit serves. Sometimes the most important kit file is not obvious from the immediate request — it becomes obvious from the broader goal. Also: the broader goal is what guides obstacle navigation (procedures/obstacle-navigation.md) — when a choice must be made, the broader goal is the tiebreaker.
- What to do with the answer: write as the Goal Model in the design log. This persists through all phases.

---

## After this script

Synthesize into a one-paragraph domain brief in the design log:
- Domain + kit purpose
- User expertise level
- Specific success condition (done-criteria seed)
- Known failures (negative research angles)
- Scope boundary
- Broader goal

Confirm with the user before proceeding to Phase 3 (Research). User should be able to read the brief and say "yes, that's it" or "no, you missed X."
