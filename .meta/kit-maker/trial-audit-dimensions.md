# Phase 7 Trial — Audit Dimensions

Reference list for designing any future trial. The goal being tested: **kit-maker produces kits that autonomously execute complex tasks at high quality with minimal human interference.**

Do not design a trial around fewer than the dimensions relevant to the failure modes you most need to find. "5 angles" is not enough — pick from this list based on what you're testing, not what's easy to instrument.

**How to use this document:**
1. Run the kit claim → dimension mapping procedure (kit-trial-process.md Stage 1.2) to select which dimensions apply
2. Assign Tier 1 / 2 / 3 per kit type (see Typical Dimension Sets table below)
3. Use the per-dimension scoring rubric to pre-register your specific criteria
4. After the trial: add a carry-forward note to each dimension you tested (see bottom)

---

## Scoring scale (applies to all dimensions)

- **0 — Absent:** No evidence this dimension was addressed
- **1 — Attempted:** Dimension addressed but significant gaps or systematic errors
- **2 — Partial:** Most criteria met; minor gaps acceptable for this stage
- **3 — Full pass:** All observable criteria met

**Verdict thresholds:** GREEN = all Tier 1 ≥2 and avg ≥2.5; YELLOW = all Tier 1 ≥1 and avg ≥1.5; RED = any Tier 1 = 0. See kit-trial-process.md Stage 4 for complete formula.

---

## Typical dimension sets by kit type

Use this as a starting point for the kit claim → dimension mapping step. Override based on actual kit claims.

| Kit type | Tier 1 (must test) | Tier 2 (should test) |
|----------|--------------------|--------------------|
| Research angle generation | Q1 Coverage, Q5 Actionability | A2 Execution autonomy, A7 Completion recognition, Q6 Confidence calibration |
| Research synthesis | Q1 Coverage, Q2 Diagnosis depth, Q3 Precision | A2 Execution autonomy, A4 Error self-detection, M1 Output self-assessment |
| Code review | Q1 Coverage, Q2 Diagnosis depth, Q4 Prioritization | A2 Execution autonomy, S3 Dense/interconnected input, Q3 Precision |
| Behavioral contract / procedure design | P1 Step coverage, P4 Behavioral contract decay | A3 Decision autonomy, Q7 Completeness, K1 Research translation |
| Multi-step agentic execution | A2 Execution autonomy, A6 Goal tracking, P2 Procedure ordering | A4 Error self-detection, S2 Realistic-scale input, A7 Completion recognition |

**Always required regardless of kit type:**
- At least 2 from Category 2 (Output quality) as Tier 1 or Tier 2
- At least 2 from Category 1 (Autonomy) as Tier 1 or Tier 2
- At least 1 from Category 6 (Kit-maker signal)

---

## Per-dimension scoring rubrics

These are category-level rubrics. For Tier 1 dimensions: replace with specific observable criteria from your kit's claims before running the trial. The rubrics here are starting points, not final criteria.

---

## Category 1 — Autonomy (primary goal requirement)

A1. **Intake efficiency** — does the kit gather all essential information with ≤3 questions, and ask only questions whose answers would actually change execution?
- 3: 0–1 questions asked; all questions change execution; no question answerable from the input
- 2: 2–3 questions asked; most necessary; 1 could have been inferred
- 1: 4+ questions, or questions answerable from input, or repeated clarification requests
- 0: Agent halted for clarification on basic task definition or refused to proceed

A2. **Execution autonomy** — does the kit proceed through all steps without the user prompting, redirecting, or correcting mid-task?
- 3: 0 inappropriate stops or redirects across full run
- 2: 1 borderline stop (observer uncertain whether kit should have continued or not)
- 1: 2+ stops, or 1 redirect from observer required
- 0: Multiple redirects required; agent could not sustain execution

A3. **Decision autonomy** — when the kit faces a judgment call within its domain, does it make the call rather than escalating to the user?
- 3: All domain-internal judgment calls made; user-escalation only for genuine scope boundaries
- 2: Most judgment calls made; 1 escalation that could have been an assumption
- 1: Multiple escalations for calls within expert domain
- 0: Agent treats most judgment calls as user-owned

A4. **Error self-detection** — when the kit makes a mistake, does it catch it before the user has to point it out?
- 3: Self-detected all visible errors; no observer corrections required
- 2: Self-detected most errors; 1 observer correction
- 1: Self-detected some errors; 2+ observer corrections
- 0: Did not self-detect any visible errors

A5. **Error self-correction** — after detecting an error, does the kit correct it without user involvement?
- 3: Detected and fully corrected all errors
- 2: Detected and partially corrected errors
- 1: Detected errors but correction required observer input
- 0: Did not correct detected errors

A6. **Goal tracking across subtasks** — does the kit keep the overall goal in focus while executing sub-steps, or does it complete sub-steps while losing the thread?
- 3: No drift events; final output addresses original goal exactly as stated
- 2: Minor drift, self-corrected; final output addresses goal
- 1: Noticeable drift; observer had to redirect to original goal
- 0: Goal lost; final output does not address original task

A7. **Completion recognition** — does the kit know when the task is genuinely done vs. when it stopped early?
- 3: Correctly identifies completion; no over-running or under-running
- 2: Mostly correct; minor over/under-run without consequence
- 1: Stopped early on a significant dimension, or ran significantly past done
- 0: Cannot recognize completion; requires observer to identify done state

A8. **Scope self-enforcement** — does the kit stay in scope without the user having to pull it back when it drifts?
- 3: No scope drift events
- 2: 1 minor scope excursion, self-caught
- 1: Scope drift requiring observer correction
- 0: Significant out-of-scope work produced

A9. **Ambiguity resolution** — when input is ambiguous, does the kit resolve it with a documented assumption rather than halting for clarification?
- 3: All ambiguities resolved with documented assumptions; no halts
- 2: Most ambiguities resolved; 1 halt for genuinely unresolvable ambiguity
- 1: Multiple halts for ambiguities that could have been assumed
- 0: Refused to proceed until ambiguities resolved by observer

---

## Category 2 — Output quality

Q1. **Coverage** — does the kit find everything a skilled domain expert would find?
- 3: Covers all major areas; no significant territory absent
- 2: Covers most major areas; 1 territory cluster absent with acknowledgment
- 1: Covers 50–70% of territory; multiple areas absent without acknowledgment
- 0: Covers <50% of territory; significant areas entirely absent

Q2. **Diagnosis depth** — does the kit diagnose at the specificity needed to act on the finding?
- 3: Every finding includes: what, where (specific location), why it matters, mechanism
- 2: Most findings specific; 1–2 naming the problem without mechanism
- 1: Many findings name problems without specificity
- 0: Findings are vague observations; cannot be acted on without additional investigation

Q3. **Precision** — does the kit avoid flagging non-issues?
- 3: 0 false positives across full output
- 2: 1–2 low-confidence flags clearly marked as uncertain
- 1: Multiple false positives without confidence marking
- 0: High false-positive rate; output is unreliable

Q4. **Prioritization** — does the kit correctly distinguish critical from minor?
- 3: Correct priority ordering; critical items visible at top
- 2: Mostly correct; 1 priority inversion
- 1: Multiple priority inversions; no clear differentiation
- 0: No prioritization; or critical items buried

Q5. **Actionability** — does every finding tell the user what to do?
- 3: Every item has a concrete action
- 2: Most items actionable; 1–2 describe problem only
- 1: Many items describe without prescribing
- 0: Output describes without telling user what to do

Q6. **Confidence calibration** — does the kit distinguish high-confidence from low-confidence findings?
- 3: Explicit confidence signal on every finding
- 2: Confidence signal on most; 1–2 uncertain items not flagged
- 1: Occasionally flags confidence; mostly presents everything equally
- 0: No confidence differentiation

Q7. **Completeness** — is every relevant dimension of the task addressed?
- 3: All relevant dimensions addressed
- 2: Most dimensions; 1 dimension missing with acknowledgment
- 1: Multiple dimensions absent without acknowledgment
- 0: Whole categories of relevant work absent

Q8. **Output usability** — can the user act directly on the output?
- 3: Output is structured, specific, immediately usable
- 2: Output requires minor reformatting or clarification
- 1: Output requires significant work to extract actionable content
- 0: Output is not structured for use; raw text without organization

---

## Category 3 — Scale and complexity handling

S1. **Minimal input** — does the kit handle small, simple inputs without breaking?
- 3: Handles gracefully; produces appropriate output for scope
- 1: Breaks or produces irrelevant output for small inputs
- 0: Cannot run on minimal input

S2. **Realistic-scale input** — does quality hold on full-length, complex inputs?
- 3: Quality matches or exceeds quality on smaller inputs
- 2: Mild degradation; acceptable
- 1: Noticeable degradation; important areas missed at scale
- 0: Quality collapses; output largely unhelpful at scale

S3. **Dense/interconnected input** — does the kit handle cases where issues interact?
- 3: Correctly identifies interactions; resolution accounts for cross-dependencies
- 2: Identifies most interactions; 1 missed cross-dependency
- 1: Treats interconnected issues as isolated
- 0: Produces solutions that contradict each other

S4. **Adversarial input** — does the kit catch problems in inputs that look good on surface?
- 3: Catches all planted issues; surface presentation did not fool the kit
- 2: Catches most issues; 1 missed due to surface presentation
- 1: Multiple surface-presentation failures
- 0: Kit output matches what a naive reader would produce

S5. **Edge cases** — does the kit handle unusual but valid inputs?
- 3: Handles edge input without degradation or confusion
- 2: Handles with minor adaptation acknowledgment
- 1: Produces noticeably weaker output or asks for guidance
- 0: Cannot handle edge input

S6. **Quality degradation curve** — how does quality change as complexity increases?
- (Requires measuring across multiple inputs; score based on slope, not single point)

---

## Category 4 — Procedure adherence and stability

P1. **Step coverage** — does the kit execute ALL steps in its procedure?
- 3: All steps executed; no skips
- 2: All steps executed except explicitly optional ones
- 1: 1 required step skipped
- 0: Multiple required steps skipped

P2. **Procedure ordering** — does the kit follow the correct sequence?
- 3: Correct sequence throughout
- 2: One out-of-order step with no consequence
- 1: Out-of-order steps affecting output quality
- 0: Sequence ignored

P3. **Gate adherence** — do checkpoints actually gate progress?
- 3: All gates queried before advancing; blocked correctly when not met
- 2: Most gates queried; 1 advance without checking
- 1: Gates present but treated as advisory
- 0: Gates ignored entirely

P4. **Behavioral contract decay** — do rules followed early still fire in later steps?
- 3: Consistent rule application throughout
- 2: 1–2 rule fires missed in later steps, non-critical
- 1: Noticeable decay; late-session behavior inconsistent with early-session
- 0: Behavioral contract effectively inactive after first 30% of session

P5. **Procedure adaptation** — does the kit adapt when needed vs. applying mechanically?
- 3: Adapts appropriately when input warrants; notes the adaptation
- 2: Adapts when clearly necessary; mechanical when borderline
- 1: Applies mechanically when situation clearly calls for adaptation
- 0: Cannot adapt; produces output that doesn't fit input

---

## Category 5 — Meta-cognition

M1. **Output self-assessment** — after producing output, does the kit identify its own weaknesses?
- 3: Identifies specific gaps; names what would improve the output
- 2: General self-assessment with 1–2 specific items
- 1: Vague acknowledgment of uncertainty
- 0: Presents output as complete without qualification

M2. **Uncertainty flagging** — does the kit flag low-confidence findings?
- 3: Every low-confidence item explicitly flagged with reason
- 2: Most low-confidence items flagged
- 1: Occasionally flags; inconsistent
- 0: No uncertainty differentiation

M3. **Scope recognition** — does the kit identify when a problem is outside what its procedure handles?
- 3: Correctly identifies out-of-scope problems; names what procedure would handle them
- 2: Identifies out-of-scope; defers without routing
- 1: Attempts out-of-scope problems with degraded quality
- 0: Cannot distinguish in-scope from out-of-scope

M4. **Within-session improvement** — can the kit incorporate feedback and improve on next pass?
- 3: Next pass addresses specific feedback with measurable improvement
- 2: Next pass improves but incompletely
- 1: Next pass shows minimal change from feedback
- 0: Next pass reproduces same output

---

## Category 6 — What the trial produces for the kit-maker

K1. **Research translation** — do the kit's procedures reflect what the kit-maker's research found?
- 3: Clear trace from research archive to specific procedure elements; no major findings absent
- 2: Most findings translated; 1–2 research findings not reflected
- 1: Research findings visible in procedures but several missing
- 0: Procedures appear disconnected from research; Trace: sections absent or superficial

K2. **Procedure gaps** — are there important failure types the kit-maker didn't produce procedures for?
- (Score based on what the trial reveals: did Condition B fail on something a procedure should have covered? That failure is a K2 finding regardless of score.)

K3. **Actionable improvement signal** — does the trial tell you specifically what to change?
- 3: Every failure has a specific file, section, and proposed change
- 2: Most failures have specific routing; 1–2 are vague
- 1: Failures named but routing to specific files unclear
- 0: Trial verdict does not produce specific action items

K4. **Kit-maker process signal** — does the failure trace back to a specific phase?
- (Score based on whether root cause analysis reaches Phase N attribution, not just kit-content attribution)

K5. **Generalization** — does what the trial reveals apply beyond this kit?
- (Note whether each finding is kit-specific or applies to any kit built by this process)

---

## Carry-forward notes (append after each trial)

Format: `[Dimension ID]: tested in [kit name] trial-NN (YYYY-MM-DD). [DIAGNOSTIC / NOT DIAGNOSTIC / INCONCLUSIVE]. [One sentence on what it revealed or why it produced no signal.]`

*No entries yet — first trial pending.*

---

*Added 2026-07-02 after recognizing that prior Phase 7 trial designs covered 3 of these 38 dimensions and zero autonomy dimensions. Scoring rubrics and typical dimension sets added 2026-07-05 (task 23).*

---

*Added 2026-07-02 after recognizing that prior Phase 7 trial designs covered 3 of these 38 dimensions and zero autonomy dimensions.*
