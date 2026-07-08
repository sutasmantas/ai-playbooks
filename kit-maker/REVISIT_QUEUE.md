# Revisit Queue — Methodology Vintage Debt

When a procedure improves, prior work done under the old procedure is silently degraded. This file makes that debt visible and actionable.

**Scope: kit-maker internal for methodology debt. May be needed in generated kits depending on workflow structure — decide at design time.**

The kit-maker needs this mechanism because its research procedure evolves mid-project, retroactively degrading earlier work. That's a specific form of the general case:

**Rechecking is needed when:** later outputs are built on earlier outputs AND earlier outputs could be wrong (chain-dependent workflow). Example: a book kit where chapter structure decisions in chapter 3 affect all subsequent chapters — if chapter 3's structural decision was wrong, those chapters need revisiting.

**Rechecking is optional or not needed when:** outputs are independent of each other (each one stands alone regardless of prior outputs). Example: a code review kit reviewing independent pull requests — a wrong finding on PR #1 doesn't affect PR #2.

**How to decide at kit design time:** map which outputs have dependencies on prior outputs. If the dependency graph is a chain (A→B→C→D) or a tree (A branches into B, C, D all of which depend on A), a rechecking mechanism belongs in the kit. If the dependency graph is flat (A, B, C, D all independent), no mechanism needed.

**What "rechecking mechanism" looks like in a generated kit:** a register of chain-dependency decisions (not a methodology-vintage tracker like this file), a trigger for when a foundational decision is revised (flag downstream work as potentially outdated), and a procedure for scope-limited re-review (not a full redo unless the dependency is load-bearing).

**Not all vintage debt is worth paying.** Each entry has an impact assessment (HIGH / MEDIUM / LOW) and a revisit decision. LOW-impact entries are explicitly accepted-as-degraded — they appear here so the choice is documented, not forgotten.

**Trigger rule:** Any time research-quality.md or research-synthesis.md changes, a sweep fires before the PCR closes: enumerate what work used the old procedure, assess whether the gap is material, and add material gaps here with priority and decision. This file is checked at session start alongside plan.md.

---

## Methodology timeline (reference)

| Date | Change | Affects |
|------|--------|---------|
| ~pre-2026-06-25 | No formal methodology — raw search, no source requirements, confirmatory verify prompt | All Cluster A archives and very early work |
| 2026-06-30 (Angle 162 PCR) | Two-source-type minimum; arXiv field qualifier guidance; HN/Reddit discovery-only rule | Archives pre-dating this used single-source searches |
| 2026-06-30 (Angle 166 PCR) | Step 0 vocabulary-frame enumeration; Condition 3 saturation (vocab-frame coverage); snowballing as gap-fill; LLM expansion adversarial check | Archives pre-dating this had no pre-search vocabulary enumeration |
| 2026-06-30 (Cluster C synthesis) | Adversarial query (Q3) required; grey-literature leg required; verify prompt changed from confirmatory to adversarial (refutation framing) | Archives verified with old prompt have systematically inflated verify ratings |
| 2026-06-30 (Angle 167 PCR) | research-synthesis.md: Step 2.6 evidence-type scope check; precision pre-specification note; indirectness annotation required; composition check; evidence basis column; Step 3.5 dual-pass | Syntheses done before this date missing these calibration steps |
| 2026-07-01 (Cluster B synthesis) | research-synthesis.md: Step 3.6 counter-prior pass added | Syntheses done before this date missing counter-prior falsification check |
| 2026-07-04 (GH-01) | research-quality.md: per-source query construction added (arXiv field qualifiers, Semantic Scholar API operators, GitHub quality thresholds, web search operators); failed-query recovery protocol; tool decision matrix; API access guide; adversarial calibration (A1-A7); divergences. Critical: `cat:cs.AI` corrected to `cs.LG/cs.CL` as primary LLM/agent categories — `cs.AI` is classical AI, misses most LLM papers. | All prior arXiv searches using `cat:cs.AI` alone for LLM/agent topics were using the wrong category. All searches run without per-source query construction guidance had no failure-mode awareness. |
| 2026-07-04 (CTRL-01) | procedures/agent-control-mechanisms.md CREATED: per-mechanism decision rules (skills, hooks, custom agent types, permissions); corrected skill frontmatter (name: + description: both required — synthesis had description: only); corrected custom agent format (.claude/agents/name.md — synthesis said "CLAUDE.md files"); confirmed hooks settings.json format; Phase 6 mechanism pre-draft gate + count check added to ENTRYPOINT.md. | LOW impact on past kits (no prior kit Phase 6 used mechanism generation). HIGH impact on future kits (mechanism gate now fires). Any prior generated skill files missing name: frontmatter field cannot be slash-command invoked by name. |
| 2026-07-04 (9c) | ENTRYPOINT.md updated with four kit-test value-extraction gates from INT-05: (1) Phase 5 gate — input-type coverage matrix required for kits with >3 input types (new checkbox; N/A path for ≤3 types); (2) Phase 6 gate-after-files-built — real-input validation: ≥1 run on actual work-queue input, documented in diagnostics/test_run_01.md (old behavior: toy/synthetic inputs accepted); (3) Phase 7 canary — now required (not conditional); defines "known-bad" via 3 criteria (prior failure modes / type-aligned deliberate flaws / prior RED-finding input); PASS = ≥50% expected findings caught; anti-circular TYPE-aligned vs. finding-predetermined distinction added; (4) Phase 6 BUILD — subagent dispatch block: phase6-brief.md required before worktree dispatch (specifies gold standard, done-criteria, real-input test case, high-risk files); goal model transmitted via brief + CLAUDE.md. | LOW impact on past kits (no prior kit reached Phase 7 using the kit-maker). HIGH impact on 9b (next Phase 6 kit test now has all four mechanisms to exercise). |
| 2026-07-05 (9k) | research-synthesis.md: 3 structural additions from 9b Phase 6/7 findings: (1) Step 2 — cross-group implication scan added as explicit required second pass (intra-group scan was already present; cross-group was absent); (2) Step 3 threshold note — "empirical" qualifier made explicit in both sub-cases (both 2-at-high and 3-at-medium now state "independent empirical claims"; added sentence explicitly excluding consensus/anecdotal regardless of verify confidence); (3) Step 3.6 — scope changed from single-highest-confidence-group to every HIGH group; count-parity completion check added ("count must equal number of HIGH groups"); execution sub-steps residual reference to "highest-confidence group" fixed. Also: D4 (Step 3.6 targeting one group vs. every HIGH group) was incorrectly assessed as "confirmed alignment" in 9b plan-archive — this was the most significant divergence, now fixed. | HIGH impact on future syntheses: every synthesis run after this date correctly runs cross-group scan + per-HIGH-group counter-prior + count-parity check. MEDIUM impact on past syntheses: prior syntheses (Clusters A–E) ran under old Step 3.6 (single-group only) and had no cross-group scan. REDO not required (synthesized findings are still valid; counter-prior was run for the top group); SUPPLEMENT recommended when Cluster E synthesis runs formally. |
| 2026-07-04 (9e+9f+9g+9h+9j) | TASK_TEMPLATE.md updated with five Pattern B structural gates: (1) Research "Adds to Section 3" — agentType tool-requirements gate: enumerate tool requirements before assigning agentType; default = omit agentType when Write/Agent/Workflow/Bash needed (9h); (2) Research "Adds to Section 5" — pre-synthesis PCR gate moved here — silent skip now requires written exception (9e); (3) Research "Adds to Section 6" — alternatives gate: ≥1 alternative with different underlying assumption before verification (9f); (4) Research "Adds to Section 7" — procedure-file modification trigger: REVISIT_QUEUE + grounding-map checkboxes required (9g); (5) Section 1.1 N/A path — observable yes/no eligibility test: "Does this task add/change/remove a behavioral gate? YES = N/A not eligible" (9j). | LOW impact on past tasks: gates are prospective (govern future Research tasks). MEDIUM impact on 9f: past Research task first-pass implementations lack alternatives documentation — implicit choices only; no retroactive REDO needed (archives valid). LOW impact on 9h: past workflows using agentType without tool-requirements verification are documented in M-48 (CTRL-01); those specific instances already logged. |

---

## Category 1 — Synthesis files with missing procedure steps (HIGHEST IMPACT)

These feed kit file decisions directly. Missing steps may have produced unchecked prior-biased conclusions.

*Completed items moved to revisit-archive.md.*

**All Category 1 items complete as of 2026-07-05.** REVISIT-S-01 (2026-07-02), REVISIT-S-02 (2026-07-02), REVISIT-S-03 (2026-07-05) — see revisit-archive.md.

---

## Category 2 — Research archives with missing methodology steps

**Sweep complete 2026-07-02.** 45 archives checked.

### Scale of the problem

| Methodology step | Archives with step | Archives missing step | % missing |
|-----------------|-------------------|----------------------|-----------|
| Step 0 (vocab enumeration) | 1 of 45 | **44 of 45** | 98% |
| Adversarial query | ~18 of 45 | **~27 of 45** | 60% |
| Grey literature | ~20 of 45 | **~25 of 45** | 56% |
| 2+ source types | 45 of 45 | 0 | 0% |
| Condition 3 (vocab saturation) | 4 of 45 | **41 of 45** | 91% |

**Step 0 and Condition 3 are near-universal gaps.** Step 0 was only fully logged once (angle 175). Every other archive — including the most recent batch 3 archives — shows no explicit pre-search vocabulary enumeration in the saturation log. This doesn't mean enumeration never happened, but it wasn't documented. The effect: reachable saturation (exhausting one vocabulary cluster but missing cross-disciplinary synonyms) cannot be ruled out for most archives.

### Full sweep table

| Archive (short name) | Step0 | Adv | Grey | Cond3 | Grounding-map row | Impact |
|---------------------|-------|-----|------|-------|------------------|--------|
| documenting-search-strategies | NO | NO | NO | NO | Research process | LOW |
| meta-research-methodology | NO | NO | NO | NO | Research process | LOW |
| search-strategies-query-formulation | NO | NO | NO | NO | Research process | LOW |
| behavioral-rule-compliance-linguistic | NO | NO | NO | NO | HR-13 (rule phrasing) | MEDIUM |
| negation-in-llm | NO | NO | NO | NO | HR-13 (NEVER-rule) | MEDIUM |
| rule-conflict-resolution | NO | NO | NO | NO | HR-13 | MEDIUM |
| instruction-abstraction-level | NO | NO | NO | NO | HR-13 | MEDIUM |
| sequential-process-workflow | NO | NO | NO | NO | HR-13 | MEDIUM |
| validation-methodology (22-24) | NO | NO | YES | NO | Phase Gates (HIGH synthesis) | MEDIUM |
| systematic-failure-modes (22-24) | NO | NO | NO | NO | Phase Gates (HIGH synthesis) | MEDIUM |
| diminishing-returns-detection | NO | NO | NO | NO | Cluster E/F (no synthesis yet) | MEDIUM |
| goal-directed-advisor | NO | NO | YES | NO | 🔬 SYNTHESIZED (angle-119) | MEDIUM |
| assertive-compliance (USER-03) | NO | NO | NO | NO | Row 6 (disagreement protocol) | **HIGH** |
| user-inattentiveness (early) | NO | NO | NO | NO | Row 9 (critical placement) | MEDIUM |
| multi-task-instruction (USER-07) | NO | NO | NO | NO | Row 8 (multi-task tracking) | MEDIUM |
| compensatory-structures (USER-08) | NO | NO | NO | NO | Row 8 (multi-task tracking) | LOW (covered by 176) |
| direction-level-pivot | NO | NO | NO | NO | Cluster F (no synthesis yet) | MEDIUM |
| direction-drift-detection | NO | NO | NO | NO | Cluster F | MEDIUM |
| explicit-criteria-definition | NO | NO | NO | NO | Cluster F | MEDIUM |
| second-order-consequences | NO | NO | NO | NO | Cluster F | MEDIUM |
| backward-chaining | NO | NO | NO | NO | Cluster F | MEDIUM |
| double-loop-learning | NO | NO | NO | NO | Cluster F | MEDIUM |
| issue-tree-mece | NO | NO | NO | NO | Cluster F | MEDIUM |
| articulation-before-commitment | NO | NO | NO | NO | Cluster F | MEDIUM |
| systematic-review-methodology (12-14) | NO | YES | YES | NO | Research process (SYNTHESIZED) | LOW |
| confirmation-bias (12-14) | NO | YES | YES | NO | Research process | LOW |
| systematic-approaches-adversarial (12-14) | NO | YES | YES | NO | Research process | LOW |
| multi-source-triangulation (12-14) | NO | YES | YES | NO | Research process | LOW |
| knowing-when-understand (12-14) | NO | YES | YES | NO | Research process | LOW |
| systematically-searching-null (12-14) | NO | YES | YES | NO | Research process | LOW |
| meta-research-foundational-skill (12-14) | NO | YES | YES | NO | Research process | LOW |
| research-source-selection (12-14) | NO | YES | YES | NO | Research process | LOW |
| premature-saturation (12-14) | NO | YES | YES | NO | Research process | LOW |
| behavioral-testing-gap-fill-173 | NO | NO | NO | NO | Phase 7 (behavioral testing) | LOW |
| vocabulary-frame-enumeration-170 | NO | YES | YES | NO | Research process | LOW |
| evidence-synthesis-procedure-167 | NO | YES | YES | NO | research-synthesis.md | LOW |
| behavioral-testing-sk | NO | NO | NO | NO | Phase 7 | LOW |
| user-inattentiveness-salience-175 | **YES** | YES | NO | NO | Row 9 (critical placement) | LOW (best-vintage archive here) |
| mandatory-reflection-168 | NO | NO | NO | NO | mandatory-reflection.md | **MEDIUM** |
| behavioral-rule-compliance-framing-174 | NO | YES | YES | NO | NEVER-rule reinforcement | MEDIUM |
| citation-graph-169 (batch 3) | NO | YES | YES | YES | (no synthesis yet) | LOW |
| multi-task-vocab-gap-fill-176 (batch 3) | NO | YES | YES | YES | ✅ VALIDATED (just synthesized) | LOW |
| adversarial-saturation-171 (batch 3) | NO | YES | YES | YES | (no synthesis yet) | LOW |
| front-loaded-intake-USER-02 (batch 3) | NO | YES | YES | YES | Row 7 (🔬 SYNTHESIZED) | LOW |
| essential-vs-inferable-USER-01 (batch 3) | NO | YES | YES | NO | Row 7 (🔬 SYNTHESIZED) | LOW |

### Prioritized revisit items from Category 2

**REVISIT-A-01: assertive-compliance (USER-03) — MEDIUM (downgraded from HIGH)**
Archive missing Step0, Adversarial, GreyLit, Cond3. Feeds ENTRYPOINT element 7 (disagreement protocol, 🔬 SYNTHESIZED).

**Priority reassessed 2026-07-05:** Original P1 was set when no synthesis existed and REVISIT-S-02 was bundled. REVISIT-S-02 completed 2026-07-02 — full synthesis (Steps 1–6 including 2.5, 2.6, 3.5, 3.6) was applied. Synthesis found: Group B HIGH (disempowerment-approval paradox, 1.5M conversations — high-confidence); Group A MEDIUM (assertiveness-framing, N=154/320/605-1345). Step 3.6 counter-prior passes ran on all HIGH groups. The synthesis compensated for the archive's methodology gaps for the purpose of the kit rule decision. Remaining risk: missing vocabulary traditions (social psychology, organizational consulting) and no adversarial query may mean some counter-evidence was not found. But the HIGH finding (1.5M conversations) is robust regardless.

Priority: P2 (archive gap noted; synthesis was full-procedure; HIGH finding robust)

**REVISIT-A-02: mandatory-reflection-168 — MEDIUM**
Archive missing Adversarial, GreyLit, Step0, Cond3. Fed substantial changes to mandatory-reflection.md (effectiveness conditions section). The key findings (iclr2024-cannot-self-correct HIGH, external-feedback-requirement HIGH) were HIGH confidence but came from an archive with no adversarial query and no grey-lit. An adversarial query might have found counter-evidence for the "external signal required" finding.
Priority: P2

**REVISIT-A-03: early behavioral rule archives (linguistic, negation, rule-conflict, instruction-abstraction, sequential-process) — MEDIUM as a cluster**
~~Check whether synthesized; if not, formal synthesis needed.~~

**ACCEPT-DEGRADED 2026-07-05.** No synthesis file exists for this cluster. Decision: accept-degraded because:
- behavioral-rule-compliance-framing-174 (REVISIT-A-08, ✅ VALIDATED, has adversarial + grey-lit) covers the most critical element — commission/omission asymmetry in NEVER-rule enforcement. That is the load-bearing finding in ENTRYPOINT's NEVER-rule reinforcement section.
- Remaining unsynthesized topics (rule-conflict-resolution, instruction-abstraction, sequential-process) are MEDIUM impact; no wave 2 decision or active kit rule turns specifically on them.
- A new synthesis of the early behavioral rule cluster would have MEDIUM marginal value given framing-174 covers the critical subset with better methodology.

Priority: CLOSED (accept-degraded). Flag for wave 2+ consideration if rule-conflict-resolution or instruction-abstraction becomes load-bearing in a future kit.

**REVISIT-A-04: Cluster F archives (direction-pivot, direction-drift, explicit-criteria, second-order, backward-chaining, double-loop, issue-tree, articulation) — MEDIUM as a cluster**
~~No synthesis, 8 archives, large area of unverified content.~~

**ACCEPT-DEGRADED for wave 2, 2026-07-05.** No synthesis file exists. Decision: accept-degraded for wave 2 purposes because:
- These archives feed alternatives-generation.md and mandatory-reflection.md — both Phase 5/6 procedures
- Wave 2 is research collection and synthesis; Phase 5/6 procedures are not load-bearing during wave 2 execution
- A formal Cluster F synthesis (8 archives, 20+ claims each) is significant scope; doing it before wave 2 delays research start without reducing wave 2 research quality

**Revisit trigger:** When Phase 5 (kit planning) begins for the next kit, Cluster F synthesis becomes load-bearing. Resume before Phase 5 planning for any kit that requires direction-revalidation or alternatives-generation guidance.

Priority: DEFERRED to Phase 5 trigger (not blocking wave 2)

**REVISIT-A-05: validation-methodology + systematic-failure-modes (22-24) — MEDIUM**
Missing Step0, GreyLit (systematic-failure-modes), Adversarial, Cond3. The synthesis has steps 2.5, 2.6, 3.5 but not 3.6 (covered in REVISIT-S-01). For the archives specifically: an adversarial query might have surfaced counter-evidence for workflow-pattern-model-tier (the counter-prior for this is "model tier failure is a prompting problem"). The finding itself is HIGH-confidence (arXiv:2601.22208 ICML 2026, verbatim-confirmed) so the archive gap is less critical than the synthesis step gap.
Priority: P2 (bundle with REVISIT-S-01)

**REVISIT-A-06: USER-07 multi-task-instruction — MEDIUM**
Missing all methodology steps. Feeds HR-13 element 9 (multi-task tracking rule). However, angle 176 (batch 3, full methodology) covered the same topic domain more thoroughly and is now synthesized. The USER-07 archive is superseded for most findings by 176. Main risk: USER-07 may have covered aspects of single-agent multi-task that 176 didn't (176 focused on prospective memory + constraint stacking). Check whether the USER-07 synthesis (if any) is still used for kit decisions independent of 176.
Priority: P2 (check what USER-07/08 synthesis produced; may already be superseded)

**REVISIT-A-07: goal-directed-advisor — MEDIUM**
Missing Step0, Adversarial, GreyLit, Cond3. Fed angle-119-synthesis.md which was done with FULL procedure (including 3.6). The synthesis procedure compensated for the archive gap — it correctly handles LOW-confidence downgrades and runs adversarial check. The archive gap means some literature may have been missed but the synthesis was rigorous.
Priority: P3 (synthesis was full-procedure; archive gap is lower risk when synthesis was thorough)

**REVISIT-A-08: behavioral-rule-compliance-framing-174 — MEDIUM**
Missing Step0 and Cond3; HAS Adversarial and GreyLit. Feeds NEVER-rule structural reinforcement (HIGH impact decision, ✅ now VALIDATED row 9). The HIGH findings (omission-commission-asymmetry, MMLU-drop) were adversarially verified. Missing vocabulary traditions (cognitive linguistics? legal prohibitions?) could have added nuance but the core finding is well-confirmed from NLP benchmarks. Step 0 gap most likely low-risk here.
Priority: P3 (HIGH findings adversarially confirmed; missing vocabulary traditions unlikely to overturn)

---

**REVISIT-A-09: GH-01 — cs.AI category correction — impact on prior arXiv searches**
~~Any prior research angle that used `cat:cs.AI` alone to scope arXiv searches for LLM/agent topics was using the wrong category.~~

**RESOLVED 2026-07-05 — NOT AFFECTED.**

Scan executed: grep for `cat:cs.AI` and `cat:` across all 67 research_archive files.
- All hits were in GH-01 files (the methodology discovery research itself) and research-source-selection — none in angle saturation logs.
- Saturation logs checked across representative angle files (behavioral-rule-compliance, negation-in-llm, goal-directed-advisor, sequential-process-workflow): ALL used keyword-based web search queries. No saturation log contains any `cat:` arXiv category filter.
- Conclusion: The cat:cs.AI risk was theoretical. No prior angle executed arXiv category-filtered API queries. All arXiv papers in source citations arrived via keyword matches in web searches (WebSearch tool), not category-scoped arXiv queries.
- No synthesis files require marking. research-quality.md already has corrected guidance.

Priority: CLOSED

---

**Accept-as-degraded items (LOW):**
All Cluster B archives (12-14): research process methodology decisions. These have been substantially revised since. Step 0 and Cond3 gaps exist but these don't drive active kit rules.
All batch 3 archives (169, 176, 171, USER-01, USER-02): Step 0 gap only — all have adversarial, grey-lit, 2+ sources. Condition 3 is present in 4 of 5. Step 0 gap noted but not material given comprehensive vocabulary coverage in batch 3 saturation logs.
PCR archives (170, 167, 168, 173, 175): mixed; the most critical ones (175, 174) are noted above. Others support methodology decisions that have since been refined.

---

## Category 3 — Verify prompt vintage (confirmatory vs. adversarial)

All archives verified BEFORE the Cluster C synthesis (2026-06-30) used a CONFIRMATORY verify prompt. This means:
- Claims verified as MEDIUM may be LOW under adversarial framing
- Claims verified as HIGH may be MEDIUM under adversarial framing
- The verify ratings for early archives are systematically inflated

**[PENDING — agent sweep will identify which archives predate the prompt change]**

The Cluster C synthesis changed the prompt to refutation framing ("try to disprove this claim"). Archives using old framing have verify ratings that overstate confidence.

**Revisit decision for old-prompt archives:** Accept-degraded with a blanket caveat rather than re-verifying each claim. Reason: re-verifying ~30+ archives is impractical; the downgrade is probabilistic, not claim-specific. The practical mitigation is: for any OLD-PROMPT archive that contributes to a HIGH-tier synthesis group, run the specific HIGH claims through the adversarial verify prompt and update if necessary.

---

## Category 4 — Kit decisions applied without any research (separate from vintage)

These are not vintage debt — they were never done. Tracked here because they're adjacent to the rework question.

**Source:** grounding-map.md ❌ UNRESEARCHED rows and ⚠️ CONSENSUS ONLY rows where kit file decisions were applied.

| Decision | grounding-map row | Risk level |
|----------|------------------|-----------|
| Repeated-instance consolidation rule (HR-13 element 5) | Row 5 | MEDIUM — no evidence this rule works; could be wrong |
| Large-task segmentation guidance (HR-13 element 12) | Row 12 | MEDIUM — design intuition only |
| Phase 5 strongest-unsupported-assumption gate | Phase gates | LOW |
| Regression gate design (blast-radius + min-diff + verify) | Phase gates | LOW |
| SKELETON file pattern | Architecture | LOW |
| class-before-instance.md procedure | Behavioral procedures | LOW |
| Parallel wave structure assumption (all angles in one wave) | Research process | LOW |

These need research angles assigned, not revisits. They are listed here as a cross-reference.

---

## Category 5 — Kit file decisions where the supporting archive has known vintage gaps

Once Category 2 is populated from the agent sweep, this table will cross-reference which grounding-map decisions depend on low-vintage archives.

**[PENDING — requires Category 2 completion]**

---

## Trigger rule (reproduced here for enforcement)

**Fires when:** any change to research-quality.md or research-synthesis.md

**Required before closing the PCR:**
1. Name the procedure change and its date
2. Enumerate all work done under the old procedure (archives, syntheses, kit file updates)
3. For each: assess impact (HIGH/MEDIUM/LOW) using the heuristics above
4. Add HIGH and MEDIUM items to this file with priority and revisit decision
5. Explicitly mark LOW items as accepted-as-degraded with a one-sentence reason

**Impact assessment heuristics:**
- HIGH: work that directly contributed to a ✅ VALIDATED or 🔬 SYNTHESIZED grounding-map row that was applied to a kit file
- MEDIUM: work that contributed to a 📋 ARCHIVE EXISTS row, or that feeds a HIGH-impact synthesis
- LOW: work that produced only CONSENSUS or ANECDOTE-tier findings; or that targets an ❌ UNRESEARCHED decision (can't make it worse)

---

## Revisit decision options

| Decision | Meaning |
|----------|---------|
| REDO | Run the full current procedure again from scratch; old output is replaced |
| SUPPLEMENT | Run only the missing steps (e.g., Step 3.6 only) on the existing output |
| RECHECK-HIGH | Re-run the adversarial verify prompt specifically on HIGH claims only |
| ACCEPT-DEGRADED | Explicitly accept the vintage gap; note it in grounding-map as a caveat on the confidence tier |
| CHECK | Read the file and verify whether the gap is actually present before deciding |

---

*Created: 2026-07-02. Populate Category 2 and 5 once agent sweep completes. Check this file at session start alongside plan.md.*
