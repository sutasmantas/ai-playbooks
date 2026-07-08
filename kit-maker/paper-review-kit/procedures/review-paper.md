# Review Procedure — Scientific Paper Methodology

**When to use:** Any time you receive a scientific paper to review for methodology quality.
**What you produce:** A structured methodology critique with specific findings, severity, and recommendations.
**Phases:** A (read) → B (design) → C (analysis) → D (interpretation) → E (report)

---

## Scale-handling

**Input size gate:** If the paper exceeds 15 pages (main body, excluding references), activate scale-handling mode.

**Priority order when context is limited:** Run phases in order: A→B→C→D→E. Do NOT skip Phase C or run Phase D before Phase C — except where Phase C is explicitly routed as not applicable for this study type (qualitative papers; protocol papers without statistical content). Phase D Step 4 depends on Phase B and C findings where Phase C applies. If context runs short during Phase C: prioritize Phase C Step 1 (analysis-design mismatch) and Phase C Step 3 (multiple comparisons) — these are the highest-impact statistical dimensions. Steps 2, 4, 5, and 6 of Phase C may be abbreviated to their minimum action:

- **Step 2 abbreviated (power):** Note whether a power calculation is reported (yes/no). If yes: record the stated n. If no: record "no power calculation reported." Skip the underpowered assessment.
- **Step 4 abbreviated (covariate selection):** Note whether regression is used. If yes: check only whether covariates were stated in methods or registration — do not assess collinearity. If no regression: skip.
- **Step 5 abbreviated (effect sizes):** Note whether effect sizes and confidence intervals are reported (yes/no). Skip clinical significance assessment.
- **Step 6 abbreviated (pre-specified vs. exploratory):** Check only whether a registration number is cited. If yes: note it and record "registration cited — verify against actual analysis in Phase C Step 3 (outcome switching check)." If no: record "no registration cited — likely exploratory." Skip full pre/post protocol comparison.

State which steps were abbreviated before moving to Phase D, using: "Phase C Step [N] abbreviated: [minimum action completed]."

**Scoping rule (large papers):** Process in section order. If context fills before completion: state explicitly which sections you have and have not yet reviewed. Do not produce a report that implies full coverage if you have not achieved it.

**State tracking:** After each phase, state what you covered: "Phase B complete — reviewed: study design, sample selection, blinding. Moving to Phase C."

**Consolidation trigger (applies to all papers regardless of size):** When the same flaw class appears in two or more places, consolidate immediately — do not wait for Phase E. Consolidation produces one entry per pattern class, not per instance.

---

## Phase A — Read the paper

**Purpose:** Understand what this study is before assessing how it was done.

### Steps

1. **Read the abstract.** Identify:
   - Study type (see routing table below)
   - Primary outcome
   - Population
   - Key claims in the conclusions

2. **Read the Methods section.** Note:
   - Study design stated by authors
   - Sample: who, how selected, inclusion/exclusion criteria
   - Intervention/exposure: what was done or measured
   - Outcome measurement: how outcomes were defined and measured
   - Statistical approach stated
   - Supplementary materials referenced: if the paper says "see Supplementary X" for key methodology details (protocol, statistical model, sensitivity analyses), note whether those materials are accessible. If accessible: review them as part of Phases B and C. If not accessible: log in the Coverage note — "Methodology detail [X] is described only in supplementary materials [not reviewed]; findings on [affected topic] may be incomplete."

3. **Identify the applicable reporting standard:**
   | Study type | Reporting standard |
   |-----------|-------------------|
   | Randomized controlled trial (RCT) | CONSORT |
   | Systematic review / meta-analysis | PRISMA |
   | Observational (cohort, case-control, cross-sectional) | STROBE |
   | Qualitative research | COREQ or SRQR |
   | Diagnostic accuracy | STARD |
   | Protocol paper (clinical trial) | SPIRIT (Standard Protocol Items: Recommendations for Interventional Trials) |
   | Protocol paper (systematic review) | PRISMA-P (PRISMA for Protocols) |
   | Quasi-experimental | No universal standard — check for design-specific reporting (instrument validity, bandwidth/cutoff documentation, parallel trends evidence, first-stage F-statistic) |
   | Mixed-methods | Apply the applicable standard to each strand (quantitative strand: CONSORT or STROBE; qualitative strand: COREQ or SRQR); note the integration mechanism as an additional check |
   | Other / unclear | Note the absence of an applicable standard |

4. **Note the study type for procedure routing.** Phases B and C differ by study type.

5. **Multi-study routing (if applicable):** If the paper contains 2 or more experiments or studies with distinct samples and methods:
   - Phase A covers the paper as a whole: identify the framing and list all study types present
   - Phase B runs per-study: assess each study's internal validity separately using that study's type-specific checklist; note flaws that appear across studies as one pattern, note study-specific flaws separately
   - Phase C covers all studies together
   - Phase D and E cover the paper as a whole
   - State the study count at the Phase A gate: "This paper contains N studies."

### Phase A gate (from CLAUDE.md — answer before Phase B)

> - What study type is this? (If multi-study: how many studies and what type is each?)
> - What reporting standard applies?
> - What are the 2–3 highest-risk methodology areas for this specific design?

State these answers explicitly before proceeding to Phase B.

---

## Phase B — Design assessment (internal validity)

**Purpose:** Identify flaws in how the study was designed — problems that undermine the validity of its core comparisons.

### Universal checks (apply to all study types)

- Is the research question clearly stated and specific enough to be answerable?
- Is the comparison group appropriate for answering the research question?
- Are the outcome measures valid (measuring what they claim to measure) and reliable (consistent across measurements)?
- Are there obvious confounders that the design did not control?

### Study-type-specific checks

**For RCTs:**
- Was randomization done? How (simple, stratified, blocked)? Was the method adequate?
- Was allocation concealed until after randomization? (Researchers knowing assignment before enrolling patients is selection bias.)
- Were participants blinded to assignment? Were outcome assessors blinded?
- Was there differential dropout (more in one arm than another)? If yes: was it handled (intention-to-treat analysis)?
- Was the control condition appropriate (active control, placebo, usual care)?
- Were outcomes pre-specified before data collection?

**For observational (cohort, case-control, cross-sectional):**
- How was exposure defined and measured? Is this consistent across participants?
- How was the outcome defined and measured? Is there differential measurement by exposure status?
- What confounders were measured? State which obvious confounders were NOT measured (list specifically — not "there may be unmeasured confounders").
- Is there selection bias? Who was included and excluded, and does this distort the comparison?
- For cohort studies: is there differential loss to follow-up?
- For case-control studies: how were cases and controls selected? Is there matching appropriate to the exposure?

**For surveys / cross-sectional:**
- Is the sample representative of the population the authors claim to generalize to?
- What is the response rate? Is it reported? Is non-response bias addressed?
- Are the survey measures validated instruments, or author-created?
- Is the analysis cross-sectional (cannot establish temporal sequence for causality)?

**For qualitative:**
- Is the qualitative method (thematic analysis, grounded theory, etc.) appropriate for the research question?
- Is sampling purposive? Are the selection criteria stated and justified?
- Is data saturation claimed? If yes: how is it defined and justified?
- Is researcher reflexivity addressed? (Positionality, potential biases stated?)
- Are negative cases or disconfirming evidence discussed?

**For quasi-experimental (natural experiments, difference-in-differences, regression discontinuity, instrumental variables):**
- What is the source of quasi-random variation? Is it plausibly exogenous — not chosen by or correlated with characteristics of the participants?
- **Difference-in-differences (DiD):** Is the parallel trends assumption tested or at minimum discussed (pre-treatment trends compared)? Is there evidence of pre-treatment divergence between groups?
- **Regression discontinuity (RDD):** Is there evidence of sorting at the cutoff (manipulation test — density should be smooth across the cutoff)? Is the bandwidth choice stated and justified?
- **Instrumental variables (IV):** Is instrument relevance demonstrated (first-stage F-statistic > 10 is a conventional minimum)? Is the exclusion restriction argued (the instrument affects the outcome only through the treatment, not directly)?
- Were anticipation effects addressed — did participants change behavior before the treatment in response to its expected arrival?
- Were spillover effects addressed — did treatment of some units affect control units?

**For systematic reviews and meta-analyses:**
- Is a protocol pre-registered (PROSPERO or equivalent)? If yes: does the published review match the registered protocol?
- Was the search strategy comprehensive? Were multiple databases searched? Was grey literature included?
- Are inclusion and exclusion criteria stated and applied consistently?
- Is risk of bias assessed for included studies using a validated tool (Cochrane Risk of Bias, GRADE, or equivalent)?
- If a meta-analysis is reported: is I² (heterogeneity) reported? Is the degree of heterogeneity acknowledged and its implications for pooling addressed?
- Is the choice of random vs. fixed effects model stated and justified relative to the heterogeneity?
- Is publication bias assessed (funnel plot, Egger's test, or equivalent)?
- Are the conclusions calibrated to the quality of the included evidence (GRADE or similar confidence grading)?

**For mixed-methods designs:**
- Is the integration design stated (convergent, explanatory sequential, exploratory sequential) and justified — why was this integration design chosen for this research question?
- Is each strand (quantitative and qualitative) assessed against its own study-type standards? Use the relevant section above for the quantitative strand; use the qualitative checks above for the qualitative strand.
- If the quantitative and qualitative strands produce conflicting results: are the conflicts acknowledged and explained rather than hidden?
- Is the integration mechanism described — how do the strands combine to answer the research question?

### Reporting standard check (required for all study types — runs after study-type-specific checks)

After completing the study-type-specific checks above: cross-check key items from the applicable reporting standard (from Phase A Step 3) that are NOT already covered by the checks above.

| Standard | Key items to verify are addressed (beyond the Phase B checks above) |
|----------|----------------------------------------------------------------------|
| CONSORT (RCT) | Participant flow diagram (numbers enrolled → allocated → analyzed); recruitment period and dates; trial registration |
| SPIRIT (RCT protocol) | Patient timeline schema (visits and procedures at each time point); recruitment procedures (how participants identified and enrolled); adverse event reporting plan (definition, collection method, reporting threshold); data monitoring committee composition and mandate (if applicable); consent procedure described; trial registration match confirmed |
| PRISMA-P (systematic review protocol) | PROSPERO or equivalent registration confirmed; amendment policy stated (how deviations from the protocol will be recorded); publication bias/meta-bias assessment plan specified (funnel plot, Egger's test, trim-and-fill, or equivalent) |
| PRISMA (systematic review) | Protocol registration; PRISMA flow diagram (records identified → screened → included); sources of funding for included studies |
| STROBE (observational) | Setting and dates; variable definition including measurement instruments used; handling of missing data; sensitivity analysis |
| COREQ / SRQR (qualitative) | Data collection method; member checking; researcher characteristics disclosure |
| STARD (diagnostic accuracy) | Reference standard; cross-tabulation of results; indeterminate results handling |

Flag any standard item in this table that the paper does not address.

### Phase B consolidation check

Before completing Phase B: are any flaws found so far instances of the same class? If yes: merge into one finding now.

### Phase B gate (from CLAUDE.md)

> - Did I check EVERY internal validity threat for this study type, not just the ones I noticed first?
> - Did I trace any confounders found through to their interpretation consequences (what conclusions does this flaw invalidate)?

State these answers explicitly before proceeding to Phase C.

---

## Phase C — Analysis assessment

**Purpose:** Identify flaws in how the data were analyzed — problems that undermine whether the statistics support the conclusions.

**Study-type routing:**
- Qualitative papers (primary analysis is qualitative): Phase C Steps 1–6 do not apply. State "Phase C: not applicable — qualitative design has no statistical analyses." Proceed to Phase D.
- Mixed-methods papers: apply Phase C to the quantitative strand only. Note which strand is being assessed.
- Protocol papers: see "When to skip" section below — conditional application.
- All other study types: run all six steps.

**For multi-study papers:** Run Phase C separately for each study, using each study's design type as context. Consolidate statistical findings that appear across studies as one pattern.

### Steps

1. **Match analysis to design:**
   - Does the statistical method fit the study design?
   - Examples of mismatches: paired data analyzed as independent samples (should use paired t-test, not independent t-test); longitudinal data analyzed cross-sectionally (should use repeated measures); cluster-randomized data analyzed at individual level (should use multilevel model).

2. **Sample size and power:**
   - Is a power calculation reported?
   - If yes: does the achieved sample size match the planned sample size? If not: is the discrepancy explained?
   - If no power calculation: is the study likely underpowered for the effect size in this domain? (Note: for effect sizes, use domain knowledge or what the authors claim is the expected effect.)

3. **Multiple comparisons:**
   - How many outcomes or subgroups were tested?
   - Is correction for multiple comparisons applied? If not: how many significant findings might be false positives at chance?
   - Is there evidence of outcome switching (primary outcomes changed between registration and reporting)?

4. **Covariate selection in regression:**
   - Are covariates chosen based on prior theory, or does the paper select based on what makes the main result significant?
   - Is there collinearity among predictors (if regression is used)?

5. **Effect sizes:**
   - Are effect sizes reported alongside p-values?
   - Are confidence intervals reported?
   - Is statistical significance conflated with practical significance?

6. **Pre-specified vs. exploratory:**
   - Is the analysis declared pre-specified (registered, protocol published) or exploratory?
   - If exploratory findings are presented as confirmatory: flag this specifically.

### Phase C consolidation check

Before completing Phase C: are any analysis flaws found so far instances of the same class? If yes: merge into one finding now.

### Phase C gate

> - Are the statistical methods appropriate for the stated design — not just unusual-looking?
> - Did I verify whether the analysis was pre-specified or exploratory?

State these answers explicitly before proceeding to Phase D.

---

## Phase D — Interpretation assessment

**Purpose:** Identify flaws in how the results are interpreted — places where the Discussion or Abstract claims more than the evidence supports.

### Steps

1. **Causal language in observational studies:**
   - **For RCTs:** Skip this step — the design supports causal inference. Check only whether effect size claims fall within the study's confidence intervals (scope check, not causal language check).
   - **For quasi-experimental designs:** Skip this step only if Phase B found no major threats to the identification strategy (no parallel trends violation for DiD, no sorting at cutoff for RDD, first-stage F-statistic >10 for IV). If Phase B found a major identification threat: apply this step — the design does not support causal inference in that domain and causal language should be flagged.
   - **For observational studies (cohort, case-control, cross-sectional, survey):** Does the paper use causal language ("X causes Y", "X leads to Y", "X improves Y") that the design cannot support? If yes: flag each instance with the specific phrase and why the design does not permit that conclusion.
   - **For qualitative papers:** Check only whether the paper uses unjustified universalizing language ("qualitative research shows that X is universally true") rather than appropriately bounded transferability claims.

2. **Abstract vs. results consistency:**
   - Does the abstract accurately represent the main results?
   - Does the abstract present exploratory findings as primary outcomes?
   - Does the abstract selectively report significant findings while omitting non-significant ones?

3. **Generalization scope:**
   - What population do the authors claim their findings apply to?
   - What is the actual sample? State the gap between what was sampled and what is claimed.
   - Examples: "students in one US university" generalized to "young adults"; "clinical population" generalized to "the general population."

4. **Limitations section accuracy:**
   - Does the limitations section acknowledge the actual limitations found in Phases B and C?
   - If limitations are not acknowledged by the authors: note which specific limitations should have been disclosed.

5. **Conclusions consistency:**
   - Do the conclusions follow from the results as presented (not as hoped)?
   - If conclusions exceed the results: state specifically what the results DO and DO NOT support.

### Phase D gate

> - Did I check whether Discussion claims exceed what the design permits?
> - Did I check scope conditions on any generalization claims?

State these answers explicitly before proceeding to Phase E.

---

## Phase E — Report assembly

**Purpose:** Consolidate all findings into a structured, actionable report.

### Steps

1. **Review all findings from Phases B, C, D.** They should already be consolidated by pattern class per the consolidation trigger (scale-handling) and Phase B consolidation check. If any finding was not yet consolidated into its pattern class: merge it now before continuing.

2. **Confirm consolidation is complete:**
   - No two findings should describe the same flaw class appearing in different locations. If they do: merge. Format: "[Flaw class] — appears in [location A] and [location B] for the same structural reason."
   - Do not list separate findings for separate instances of the same class.

3. **Classify severity for each finding:**
   - **Fatal:** Main comparison is confounded or invalid — the primary conclusion cannot be drawn from this study as designed.
   - **Major:** A key assumption is violated, or a critical outcome is measured incorrectly — interpretation is substantially limited. (Example: failed blinding in an RCT is Major unless the blinding failure creates confounding of the primary comparison — in that case it is Fatal.)
   - **Minor:** A reporting omission or presentation choice that reduces clarity but does not change the interpretation.

4. **Add recommendation for each finding:**
   - State what should have been done instead: "Should have [specific action] to [specific outcome]. Example: [brief example]."
   - If this is a post-hoc finding (can't be fixed in this study): state what the authors should have disclosed in the limitations section.

5. **Order findings:** Fatal first, then Major, then Minor.

6. **Apply FM checks before submitting:**
   - FM-1: Are all findings about methodology, not conclusions?
   - FM-2: Is every finding specific enough that the authors know exactly what to change?
   - FM-3: Did I cover design → analysis → interpretation → generalization (all four)? *For qualitative papers: the 'analysis' link is served by Phase B qualitative-specific checks (method appropriateness, saturation, reflexivity) — FM-3 passes if those checks are complete; Phase C being not applicable is not an FM-3 failure. For protocol papers: FM-3 applies to the design specification chain only.*
   - FM-4: For every statistical flag — would a peer reviewer in this field flag this specific choice as problematic? Common false positive: flagging t-tests, ANOVA, or regression as issues in designs where they are standard. *Operationalization when uncertain:* (a) If the paper explicitly justifies the statistical choice with reference to design requirements: likely appropriate. (b) If the choice matches the study design's standard first-line method (paired t-test for paired designs; multilevel model for clustered data; logistic regression for binary outcomes; ANOVA for >2 groups): appropriate. (c) If neither (a) nor (b): downgrade to "Possible" confidence — do not assert it is a flaw.
   - FM-5: Did I make all judgment calls without asking the user?

### Report format

```
## Methodology Review: [Paper title or identifier]

**Study type:** [RCT / Observational / etc.]
**Reporting standard applicable:** [CONSORT / PRISMA / STROBE / etc.]
**Overall assessment:** [1-2 sentences: main strength and main limitation]

---

### Fatal flaws
[Numbered list — each with: [Study attribution if multi-study, or omit if single-study] Description | Evidence in paper | What should have been done | Confidence]

### Major issues
[Numbered list — same format]

### Minor issues
[Numbered list — same format]

---

### Coverage note
[Sections reviewed: [list]. Sections not reviewed (if any): [list with reason]. Supplementary materials: [reviewed / not accessible / not present].]
```

**Field definitions:**
- *Study attribution (multi-study only):* "[Study N]" prefix for study-specific flaws; "[Cross-study]" for pattern flaws appearing across multiple studies. Omit for single-study papers.
- *Evidence in paper:* verbatim quote if the specific text is the problem; section reference if the absence is the problem (e.g., "Methods section — no allocation concealment mechanism described").
- *Confidence:* "Definite" (the design cannot support the conclusion as stated) | "Likely" (the design is likely to have this problem; state what additional information would change the assessment) | "Possible" (uncertain — state the specific question and what evidence would resolve it).
- *Overall assessment — main strength:* the single most important methodological asset (examples: large sample with adequate power; pre-registered primary outcome; gold-standard measurement instrument; rigorous matching approach). State one dimension only.

---

## When to skip

**Combine Phase A and B when:** The paper has only an abstract and methods section — no Results or Discussion (e.g., a protocol paper or preregistered study plan). State explicitly: "Phase A and B combined — paper has no Results or Discussion." Do not combine when a Results or Discussion section is present.

**Protocol paper routing (Phases B–E):**

*Phase B — three-step protocol assessment:*

**Step 1 — Universal checks (apply to all protocols):** Run the four universal Phase B checks above (research question, comparison group, outcome measures, obvious confounders), assessing each as "is this adequately specified in the protocol?" rather than "was this done?"

**Step 2 — Study-type-specific checks (adapted for protocol):** Apply the applicable study-type checklist above for the planned design (e.g., RCT protocol → RCT checklist; observational protocol → observational checklist). Interpret each check as: "Is this item adequately specified, or left underdefined?" Omit checks that require results data (e.g., "Was differential dropout observed?" does not apply; "Is the dropout handling plan specified?" does apply).

**Step 3 — Additional items required for all protocol types:**
- Primary outcome: defined with sufficient specificity (what is measured, how, at what time point)?
- Sample size: is a justification reported? If yes: are the assumptions (effect size, alpha, power level) stated?
- Analysis plan: pre-specified and executable — primary vs. secondary analyses named, covariates stated?
- Registration match: if registered, does the protocol match the registration (no post-hoc scope changes)?

**Step 4 — Additional items for RCT protocols only:**
- Blinding plan: who is blinded (participants, outcome assessors, analysts) and how?
- Stopping rules: if interim analyses are planned, are stopping criteria specified (alpha-spending approach, O'Brien-Fleming or equivalent)?
- Missing data plan: intention-to-treat, per-protocol analysis, imputation approach stated?

**Step 5 — Additional items for observational protocols only:**
- Exposure ascertainment: how will exposure be measured consistently across participants?
- Confounder measurement plan: which potential confounders will be collected and how?
- Missing data handling plan: imputation approach or sensitivity analysis plan for expected dropout or missing records?

**Step 6 — Additional items for systematic review/meta-analysis protocols only:**
- PICOS specification: are Population, Intervention, Comparator, Outcomes, and Study design eligibility criteria stated with enough specificity to be applied consistently?
- Search strategy: is the database list and search string specified (or described in enough detail to be reproducible)?
- Inclusion/exclusion criteria: are they operationalizable — specific enough for two independent reviewers to apply and reach agreement?
- Data extraction plan: which data fields will be extracted, by whom, and how disagreements resolved?
- Risk of bias tool: is the planned tool named and justified (Cochrane RoB 2, ROBINS-I, Newcastle-Ottawa, or equivalent)?
- Heterogeneity and synthesis plan: is the approach to statistical pooling (random vs. fixed effects) and anticipated heterogeneity (I² threshold for subgroup analysis) stated?
- Meta-bias/publication bias plan: is there a stated plan for assessing publication bias (funnel plot, Egger's test, trim-and-fill, or equivalent)?

*Phase C — conditional (not a blanket skip):* Does this protocol contain any statistical analyses — pilot feasibility data, simulation-based power calculations, or preliminary data sections? If yes: run Phase C for those sections only — state "Phase C partially applicable: [section name] reviewed below." If no: state "Phase C: not applicable — protocol paper has no Results section." Proceed to Phase D.

*Phase D — partial; apply only Step 4:* Protocol papers have no Results or Discussion. Steps 1, 2, 3, and 5 do not apply. Step 4: if the protocol contains a limitations or anticipated challenges section, check whether it acknowledges limitations found in Phase B (underdefined outcomes, missing blinding plan, unregistered protocol, etc.). If no limitations section: state "Phase D Step 4: not applicable — no limitations section in this protocol." State which steps were skipped and why.

*Phase E done-criteria re-check for protocol papers:* A complete review means: combined Phase A+B complete (Phase B Steps 1–6 as applicable to the planned study type); Phase C completed or stated as not applicable; Phase D Step 4 checked or stated as not applicable; Phase E complete. "All five phases complete" does not apply — do not flag a protocol review as incomplete for skipping Phases C, D Steps 1/2/3/5.

---

## Do NOT skip even when tempted

- **FM check (Phase E Step 6):** Primary defense against the five domain failure modes (FM-1 through FM-5). Temptation: "findings look comprehensive." Check anyway.
- **Phase A gate before Phase B:** Running Phase B without knowing the study type produces wrong checks. Temptation: "study type is obvious." State it explicitly anyway.
- **Phase E merging step:** Producing one finding per instance rather than one per pattern is the documented false-completion failure. Temptation: "each finding is distinct." Check for pattern class overlap anyway.
- **Any phase where the prior phase found findings that cascade:** If Phase B found a confounding problem, Phase D must check whether the Discussion's causal claims acknowledge it. Temptation: "that was already noted." Check the downstream consequences anyway.

---

## Procedure notes

**Uncertainty in statistical assessment:** Paper review agents are not statistical software. When assessing whether an analysis is appropriate: reason from study design principles (does a matched design require a paired test?), not from ability to re-run the analysis. If genuinely uncertain whether a statistical choice is appropriate for this design: flag as "uncertain — [what the question is] — [what evidence would resolve it]" rather than either asserting it is wrong or ignoring it.

**Domain knowledge limits:** This kit covers common methodology flaws in empirical social science, psychology, medicine, and related fields. For highly specialized statistical methods (network analysis, structural causal modeling, Bayesian nonparametrics): flag the method as "specialized — [name] — review by statistical expert recommended" rather than providing a potentially incorrect assessment.

---

**Trace:** Phase structure (A–E) derived from Phase 2 domain brief (phase2-brief.md) and Phase 7 trial audit dimensions (trial-audit-dimensions.md, 38 dimensions, 6 categories). Study-type routing (CONSORT/PRISMA/STROBE/COREQ/STARD) reflects standard reporting standards for each design class. Scale-handling section required by CLAUDE.md scale-handling rule (input size gate, scoping rule, state tracking, consolidation trigger). Domain failure modes FM-1 through FM-5 derived from Phase 2 domain brief. Phase gates derived from CLAUDE.md Hard Rule 13 element 12 (phase-gate reflection). *(Producer reference — not instructions for the agent using this kit. The files named here (phase2-brief.md, trial-audit-dimensions.md) are kit-maker production files — they are not part of this paper review kit and do not need to be accessed to run a review.)*
