# Synthesis: Meeting Notes Summarizer Research

**Phase 4 output — synthesizes 4 practitioner-consensus research angles, 73 claims.**

---

## Confidence map

| Claim cluster | Evidence tier | # Claims | Implication strength |
|--------------|---------------|----------|---------------------|
| Action item must have owner + task + deadline | consensus (multi-source) | 12 | HIGH — universal |
| Single named owner (not team) | consensus (multi-source) | 8 | HIGH — universal |
| Decisions first layout | consensus | 5 | HIGH |
| Four-section template standard | consensus (GitHub convergence) | 3 | HIGH |
| Fact-extraction before compression reduces omission 87-96% | empirical (Re-FRAME, arXiv 2509.15901) | 3 | HIGH — strong mechanism |
| Positional bias — late transcript underrepresented | empirical (same paper) | 2 | HIGH — well-described mechanism |
| Meeting completeness 60-72% baseline without scaffolding | empirical (arXiv 2606.15974, 28 LLMs) | 2 | HIGH — scale validates |
| Flag vocabulary ([UNASSIGNED], [UNCLEAR], etc.) | anecdote (single practitioner source) | 2 | MEDIUM — specific but one source |
| Action item scope >2 weeks = project, not task | consensus | 2 | MEDIUM — rule of thumb |
| Passive voice obscures ownership | consensus | 3 | HIGH |
| 44-73% action item failure rate | anecdote (commercial vendors) | 2 | LOW — directional only |
| Human review before distribution | consensus | 3 | HIGH |

---

## What changed from provisional procedure

### Step 1 — "Pre-read scan" → must be "Fact extraction pass"

**Provisional:** Pre-read prevents omissions (from practitioner experience).
**Research:** Re-FRAME paper shows fact-extraction before compression reduces omission by 87-96% on meeting benchmarks. Mechanism is salient content scatter — decisions distributed across turns are diluted without explicit aggregation. The procedure was right to require a pre-read but named the wrong mechanism. "Scan and mark" ≠ "extract into list" — the extraction must produce a discrete fact inventory, not just mental notes.

**Change:** Step 1 upgraded from passive scanning to active fact list extraction. Speaker coverage check added. Final-third scan added (positional bias finding).

### Step 2 — Classification rules strengthened

**Provisional:** Ownership rule — flag `[owner: unassigned]` if no owner in transcript.
**Research:** "someone/we/the team should" patterns must be classified UNASSIGNED (consensus, multi-source). Passive voice constructions ("it was agreed") obscure ownership — convert to active voice attribution. Flag vocabulary standardized: [UNASSIGNED], [UNCLEAR], [NEEDS CLARIFICATION], [RATIONALE NOT CAPTURED], [NEEDS DECOMPOSITION]. Each flag routes to a different resolution action.

**Provisional:** Decision classification by resolution phrase.
**Research:** Test is specificity of outcome: closed specific outcome = decision; "we're leaning toward", "might", "probably" = open question. Parking lot ≠ open question: parking lot = agenda-irrelevant deferred item, open question = in-scope unresolved.

**New finding:** Action items >2 weeks in scope should be flagged [NEEDS DECOMPOSITION] — these are projects, not tasks.

**New finding:** Decisions require 4 fields for traceability: (1) what was decided, (2) alternatives considered, (3) rationale, (4) who decided. [RATIONALE NOT CAPTURED] fires when rationale is absent.

**Change:** Step 2 expanded with passive-voice rule, full flag vocabulary, parking lot distinction, decision 4-field requirement, scope decomposition rule.

### Step 3 — Output structure revised

**Provisional:** Action Items → Decisions → Open Questions.
**Research:** Decisions first (consensus, multiple sources). Information hierarchy: decisions are highest-value output and should be immediately scannable. Action items as table with Owner / Task / Deadline / Status columns (GitHub four-section standard). Unassigned items get a dedicated section at the bottom of Action Items — not dropped. Parking Lot as a distinct section from Open Questions.

**Change:** Section order → Decisions / Action Items (with Unassigned subsection) / Open Questions / Parking Lot.

### Step 4 — Completeness check strengthened

**Provisional:** Second-pass check after writing.
**Research:** Two omission types: TOTAL (topic absent) and PARTIAL (depth lost). Positional bias: content late in transcript is underrepresented — explicit final-third scan required. Minority speaker bias: speakers with few turns are systematically under-represented — speaker coverage check required.

**Change:** Step 4 now has three explicit checks: (1) topic coverage (total omission), (2) final-third scan (positional bias), (3) speaker coverage check (minority speaker bias).

---

## What stayed the same

- Ambiguity default to Open Question unless closed resolution phrase: CONFIRMED
- Skip Step 1 pre-read for <500 words: still unconfirmed (no length threshold evidence found)
- One-line format for action items: CONFIRMED (table format is slightly richer — both valid)
- Three output categories (decisions/actions/open): CONFIRMED and extended (add parking lot)
- Step 4 required for all transcripts: CONFIRMED — positional bias is not length-correlated

---

## User questions from domain-brief answered

**Q: What research exists on meeting note structure?**
A: Strong practitioner consensus on four-section template (Decisions, Action Items, Open Questions, optional Parking Lot). GitHub convergence on the same structure across independent projects. Empirical benchmarks confirm meeting summarization is the hardest conversation domain for LLMs (60-72% completeness vs 91.5% for healthcare). Structure is not cosmetic — it makes omissions visible and detectable.

**Q: What prompting structures reliably produce completeness?**
A: Two-pass pipeline (fact extraction → compression) reduces omission 87-96% empirically. The extraction must be explicit (produce a discrete list), not a passive scan. Final-third check and speaker coverage check address the two systematic biases (positional and social dominance).

**Q: How to get consistent ownership attribution with pronouns?**
A: Commit to: flag rather than infer. "someone/we/the team" → [UNASSIGNED]. Only assign ownership when a name is immediately adjacent to a task verb in the transcript. Passive voice → convert to active attribution where source material permits, flag where it doesn't.

**Q: Right format for flagging ambiguity without disrupting usability?**
A: Research supports flag vocabulary approach with routing: [UNASSIGNED] → meeting chair; [UNCLEAR] → sender resolves before distributing; [NEEDS CLARIFICATION] → prospective owner; [RATIONALE NOT CAPTURED] → documentation quality warning; [NEEDS DECOMPOSITION] → scope signal. Unassigned items sorted to dedicated section, not inline.

---

## Remaining uncertainty (honest gaps)

**1. <500 word transcript skip condition for Step 1**
No evidence found on whether short transcripts have negligible positional bias or minority-speaker bias. Current approach: always run extraction pass (conservative). Provisional skip condition for <500 words kept but marked as still unconfirmed.

**2. Cross-meeting context carry-over**
Prior meeting action items re-surfacing is mentioned but no procedure found. Gap: the kit doesn't address a recurring meeting scenario where carry-over items from last session are in the new transcript. Logged to weakness_register.

**3. Hedged decision language thresholds**
"We're leaning toward X", "tentatively decided", "probably" — no practitioner source gives a classification rule for these. Current rule: classify as open question unless unambiguously closed. This over-classifies toward open questions in meetings with informal communication styles.

**4. Facilitator process vs substantive action (confirmed but not empirically measured)**
The distinction between "I'll send the calendar invite" (facilitator logistics) and "Sarah will draft the proposal" (substantive action) is confirmed by consensus but no measurement exists of how often this distinction matters in practice. Current approach: keep both as action items, distinguish with [facilitator-commitment] tag. Full separation into a logistics section is optional.

---

## Evidence quality for weakness_register entry

This kit was built on practitioner-consensus evidence (no verify pass). The empirical claims come from NLP/LLM benchmarking papers (arXiv), not controlled practitioner studies. The specific percentages (87-96% omission reduction, 44-73% completion failure) should not be treated as precise targets — treat them as directional. All procedures should be validated by use before treating them as settled.
