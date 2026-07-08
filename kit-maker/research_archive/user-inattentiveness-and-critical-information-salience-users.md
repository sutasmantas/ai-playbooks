# Research Archive: User inattentiveness and critical information salience — users skip warnings and override without registering flags; how to make critical information register with low-attention users without degrading normal output; progressive disclosure, TLDR patterns, flag placement effects

## Saturation log
- Query 1: "user attention management critical information surfacing salience design empirical study" — 4 new keys
- Query 2: "warning design effectiveness low-attention users information salience empirical HCI" — 4 new keys
- Query 3: "progressive disclosure TLDR summary placement critical information user attention empirical" — 2 new keys
- Query 4: "AI agent output scanning behavior user attention eye-tracking reading empirical study" — 1 new keys
- Query 5: "flag formatting placement critical information LLM agent output user attention empirical comparison" — 2 new keys
- Saturated: NO

---

## Claims (13)

### [key: salience-protection-behavior-font-size]
- evidence: empirical
- confidence: low
- group: salience-and-warning-design
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC9988306/

**Claim:** Björck et al. (2023, PMC9988306) ran a 2x2 between-subjects experiment on cookie consent warnings (N not specified but logistic regression reported). Increasing visual saliency via font size (160% vs 85% scale) raised the probability of protective behavior (declining cookies) by 114% (Exp(B)=2.14), exceeding the 96% increase from high-threat messaging (Exp(B)=1.96). No significant interaction between saliency and threat (p=0.73), indicating additive, independent effects. Decision time rose from 3.3s (control) to 8s (high-saliency/high-threat), confirming saliency drives engagement. Mechanism: visual prominence draws attentional resources sufficient to trigger deliberate processing of the message content, independent of that content's actual severity. Scope: deliberative cookie-consent decisions; effect may shrink in habitual or high-frequency warning contexts. Kit implication: typographic scaling of critical flags (not just color) is a separate and additive lever; a flag that merely changes color while preserving font size may be under-exploiting the saliency budget.

**Verify note:** Source PMC9988306 exists and all statistics (Exp(B)=2.14, Exp(B)=1.96, p=0.73 no interaction, 3.3s vs 8s) are confirmed. Two factual errors: (1) authors are Ebert, Ackermann & Bearth (2022), not 'Björck et al. (2023)'; (2) the claim says 'N not specified' but the actual N=1,486 is clearly reported. The N misstatement is a verifiable factual error against the source.

---

### [key: high-salience-alert-reaction-time-tradeoff]
- evidence: empirical
- confidence: high
- group: salience-and-warning-design
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11024089/

**Claim:** Schreij et al. (2024, PMC11024089) used eye-tracking in a dual-task laboratory paradigm to show that higher visual contrast in alert signals speeds time-to-fixation (F(7,133)=9.79, p<0.001, ηG²=0.053) but increases fixation-to-response delay (t(19)=2.59, p=0.02) and prolongs fixation duration (t(19)=2.16, p=0.04) by roughly 10–20 ms. Auditory salience had the opposite pattern: faster fixation-to-response. Mechanism: a high-contrast visual frame triggers attentional capture but then imposes disengagement costs before the user can act on the alert content; simultaneous contrast may also reduce perceived contrast of the task target. Scope: time-critical dual-task environments (cockpits, medical devices); effect size is small in absolute time but relevant where near-miss windows are narrow. Kit implication: maximally salient visual flags (bright red boxes, full-color banners) in an agent output panel may slow reading-to-action compared to moderate-salience flags; a 'sweet spot' at moderate contrast should be tested rather than defaulting to maximum saturation.

**Verify note:** Source PMC11024089 exists. All key statistics confirmed: F(7,133)=9.79 p<0.001 for fixation onset; t(19)=2.59 p=0.02 for fixation-to-response delay; auditory advantage confirmed. Dual-task eye-tracking paradigm confirmed. One attribution error: actual authors are Einhäuser, Neubert, Grimm & Bendixen — not 'Schreij et al.' — but the substantive content and statistics are accurate throughout. Small N=19–20 per experiment is a scope limitation correctly noted in the claim.

---

### [key: image-warning-outperforms-text]
- evidence: empirical
- confidence: high
- group: salience-and-warning-design
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC9870998/

**Claim:** An EEG/ERP study (PMC9870998) compared image-only, text-only, and combined image+text warning signs in two tasks (oddball N=reported, inhibition task). Image-only warnings achieved 99.78% accuracy vs 98.83% for text-only; reaction time 414.78ms vs 451.14ms. Theta oscillations (4–8 Hz, cognitive control) showed the largest effect: images > combinations > text (ηp²=0.265–0.341). Adding text to images did not improve over images alone and increased cognitive load. P2 component (early attention) showed larger amplitude for images, confirming faster sensory capture. Mechanism: pictographic symbols trigger rapid pre-attentive processing in early visual cortex (P2/theta pathways) that text requires additional lexical decoding to match. Scope: emergency/rapid-response scenarios; text+combination warnings acceptable for non-urgent complex contexts. Kit implication: where a kit flag can include a small icon or symbol alongside text, early attentional capture improves; pure text flags with no visual anchor are the weakest format; combination warnings should not duplicate content (cognitive load cost).

**Verify note:** Source PMC9870998 exists. All statistics confirmed: accuracy 99.78% vs 98.83%, RT 414.78ms vs 451.14ms, theta ηp²=0.341, P2 amplitude larger for images. Finding that combined image+text produces longer RT than image-alone (cognitive load) is confirmed. N=30 per experiment, two EEG paradigms. No author misattribution (claim does not name authors). Emergency/rapid-response scope limitation is accurately stated.

---

### [key: warning-icon-reduces-reaction-time-but-risk-text-backfires]
- evidence: empirical
- confidence: medium
- group: salience-and-warning-design
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12255787/

**Claim:** PMC12255787 (remote emergency response, lab experiment) found warning icons significantly improved situational awareness and reduced reaction times vs no-icon conditions (F=4.856, p=0.029), and enhanced perceived risk severity in early-warning scenarios (F=4.272, p=0.043). However, explicit risk-description text paradoxically decreased perceived likelihood during routine monitoring (F=4.492, p=0.043) and increased mental workload across all scenarios (coefficients 0.558–0.713, all p<0.001). Compliance-intention language (telling users what to do) produced shortest reaction times (F=4.359, p=0.041). Mechanism: icons reduce cognitive burden by encoding meaning pre-attentively; verbose risk text forces deliberate processing that competes with routine task load. Scope: scenario-dependent—icons help across scenarios; explicit risk text helps in emergencies but harms routine monitoring. Kit implication: kit flags should lead with an icon + action instruction, not with a verbose risk description; risk verbosity should be deferred to progressive disclosure for non-emergency conditions.

**Verify note:** Source PMC12255787 exists, N=60 confirmed. Core findings confirmed: icons reduce RT (F=4.856, p=0.029), risk text backfires in routine monitoring (F=4.492, p=0.043), mental workload increased. One stat discrepancy: mental workload coefficients 0.558–0.713 claimed but actual values are 0.713, 0.418, 0.712 — Scenario 2 is 0.418, below the claimed floor of 0.558. Compliance-intention 'shortest reaction times' overstates: the source says it improved RT in risk scenarios only. Small specialist N=60 limits generalizability.

---

### [key: habituation-alert-override-automaticity]
- evidence: empirical
- confidence: high
- group: habituation-and-override
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC8892274/

**Claim:** A cohort study of 66,049 clinical decision-support alerts across 1,152 physicians (PMC8892274) found: 91.2% of all alerts were dismissed; 72.5% dismissed within 3 seconds; 13.3% dismissed in under 1 second. Processing time declined from 5.90s (first exposure) to 2.43s (60th exposure). Habit strength (self-report + behavioral proxy) correlated with dismissal likelihood at r=0.227–0.421 (p<0.001); a 1-SD increase in habit strength raised odds of rapid dismissal 0.362–0.503x. Pattern was uniform across physician experience levels (interns to attendings). Mechanism: repeated identical alerts build stimulus-response automaticity; once automatic, the user responds to the trigger (alert appearance) rather than the alert content, suppressing information processing. Scope: high-frequency alert environments; effect is exposure-count dependent, not time-dependent. Kit implication: a static, always-identical flag format will be functionally invisible by the 3rd–10th repetition; the kit must rotate flag presentation (polymorphic) or reserve flags for genuinely rare conditions to prevent automaticity from forming.

**Verify note:** Source PMC8892274 exists. 66,049 alerts, 1,152 physicians confirmed. Dismissal rates 91.2% and 72.5% under 3 seconds confirmed. Processing time decline 5.90s to 2.43s confirmed. Habit correlations r=0.227–0.421 confirmed. Uniformity across experience levels confirmed. One minor rounding: 13.2% under 1 second (claim says 13.3%). Lead author attribution 'Wang et al.' is correct. Retrospective observational design cannot establish causality but alert fatigue phenomenon is extensively replicated in clinical informatics.

---

### [key: polymorphic-warnings-resist-habituation-fmri]
- evidence: empirical
- confidence: medium
- group: habituation-and-override
- sources: https://dl.acm.org/doi/10.1145/2702123.2702322, https://scholarsarchive.byu.edu/facpub/9306/

**Claim:** Anderson, Kirwan et al. (CHI 2015, ACM 10.1145/2702123.2702322) used fMRI to show neural activity in visual processing regions dropped dramatically after just the second exposure to a static security warning, with further decreases on subsequent exposures (repetition suppression effect). A polymorphic warning that varied its visual appearance (text size/color, box size/color, border) showed substantially greater resistance to this neural habituation in both fMRI measurement and mouse-cursor-tracking behavioral proxy. A companion 3-week field experiment found warning adherence substantially declined over time for static warnings. Mechanism: repetition suppression (RS)—the brain's predictive machinery reduces processing effort for stimuli it has already encoded; varying the visual form of the warning regenerates novelty-driven processing. Scope: software security warnings in desktop browser context; generalizability to chat/agent output untested but mechanism is general to visual cortex. Kit implication: critical flags in kit output must change their visual form across repetitions—alternating layout, color scheme, or icon—to prevent RS from rendering them invisible; this is a stronger imperative than just 'making flags prominent.'

**Verify note:** ACM primary DOI returned 403 (paywall). BYU ScholarArchive secondary source confirms: Anderson, Kirwan et al. (CHI 2015), fMRI, dramatic drop after second exposure, polymorphic warning substantially more resistant, mouse-cursor tracking. However: no quantified statistics could be confirmed from accessible content; the '3-week field experiment' duration and specific adherence decline data are unverifiable from accessible sources. N unknown. Repetition suppression mechanism is solid established neuroscience. Medium confidence due to paywall preventing full verification.

---

### [key: progressive-disclosure-attention-vs-fatigue-tradeoff]
- evidence: empirical
- confidence: low
- group: progressive-disclosure
- sources: https://dl.acm.org/doi/10.1145/3374218, https://www.sciencedirect.com/science/article/abs/pii/S107158192500148X

**Claim:** Research on algorithmic transparency (ACM 10.1145/3374218) and clinical AI systems (ScienceDirect S107158192500148X) converges on a tension: detailed disclosures score better on attentional measures in single-session studies, but participants self-report they would pay less attention to lengthy disclosures over time, explicitly comparing them to cookie banners. Tailoring timing and amount of information to user need may improve comprehension and appropriate trust; overly detailed or poorly timed information during demanding tasks can undermine understanding. Mechanism: detail-on-demand preserves processing budget for users with current cognitive capacity while avoiding fatigue for users in low-bandwidth moments. Scope: users with genuine interest in system behavior; users executing primary tasks show attentional capacity effects more strongly. Kit implication: a one-line flag with an expand-for-detail affordance is empirically better than a full inline explanation for most conditions; the expansion must be available and easy, not buried.

**Verify note:** Both source URLs (ACM 10.1145/3374218 and ScienceDirect S107158192500148X) returned HTTP 403. Neither source is accessible. N, study designs, specific statistics, and whether the 'cookie banner comparison' and 'self-report attention' findings exist in these papers cannot be verified. This is a compound convergence claim across two paywalled sources — neither can be confirmed. Low confidence due to complete inaccessibility of both primary sources.

---

### [key: llm-hallucination-warning-improves-detection-no-skepticism-cost]
- evidence: empirical
- confidence: high
- group: llm-agent-output-flags
- sources: https://arxiv.org/abs/2404.03745

**Claim:** A 2024 study (arxiv 2404.03745, N=419) presented LLM Q&A output with genuine content, minor hallucinations, or major hallucinations, with/without an explicit warning. Warnings improved hallucination detection (users ranked truthfulness in correct severity order) without significantly affecting perceived truthfulness of genuine content. Mechanism: the warning primes deliberate evaluation (System 2 engagement) for the specific output presented, without creating blanket skepticism that would undermine trust in accurate outputs. Scope: single-session study with explicit warning on each output; real-world habituation effects over repeated use not measured. Kit implication: a per-output uncertainty or confidence flag improves user detection of problems without eroding overall trust in correct outputs—the flag should be present when warranted, not as a global permanent banner (which would habituate).

**Verify note:** Source arXiv:2404.03745 exists. N=419 from Prolific confirmed. Core finding confirmed: warnings improved hallucination detection without significantly reducing perceived truthfulness of genuine content. Accepted at COLM 2024. The System 2 mechanism is honestly flagged as inferred in the claim, not directly measured — the source does not discuss this mechanism explicitly. Single-session limitation and habituation caveat are correctly noted. No author misattribution (claim names no authors). Crowdsourced sample with standard external validity caveats.

---

### [key: f-pattern-scanning-critical-content-placement]
- evidence: empirical
- confidence: high
- group: scanning-and-reading-patterns
- sources: https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/, https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/

**Claim:** Nielsen (2006, NN/G eye-tracking study, N=232) found web users read in an F-pattern: strong horizontal scan of top content, shorter horizontal scan slightly lower, then vertical scan of left margin. Subsequent NN/G research (Text Scanning Patterns) identified four patterns: F-pattern (worst for comprehension), Layer-cake (fixation on headings/subheadings), Spotted (fixation on visually distinct keywords, links, bold), and Commitment (full reading, rare). The spotted pattern is triggered by visual styling (bold, color, links) matching task-relevant keywords. Mechanism: users are efficiency-driven scanners who spend attentional effort only when intrinsically motivated or when visual cues match their current goal. Scope: general web content; commitment pattern requires high motivation or trusted source. Kit implication: critical flags placed mid-paragraph or at the right margin will be missed by F-pattern scanners; flags must appear at left-edge anchored positions AND use visual styling (bold, color, icon) that triggers the spotted pattern; they cannot rely on users reading body text sequentially.

**Verify note:** Both sources verified and match the claim closely. The NN/G 2006 article confirms N=232, the F-pattern with three components (top horizontal sweep, shorter second horizontal, left-side vertical scan), and the 2006 publication date. The second NN/G article (Text Scanning Patterns) confirms exactly four patterns: F-pattern, Layer-cake, Spotted, and Commitment — matching the claim's ordering and descriptions. The characterization of spotted pattern being triggered by visual styling (bold, color, links) is confirmed. One minor note: the claim states the F-pattern is 'worst for comprehension' — the source ranks patterns from least to most effective with F-pattern at the bottom, which is consistent. Extrapolation present: the kit implication about left-edge anchoring and visual styling is a reasonable design inference not stated by NN/G directly, but is a defensible extension. Replication: NN/G notes an 11-year follow-up confirmed original findings. The second article does not report a unified N-size for the four-pattern taxonomy (subsets of 6–47 cited), which is a limitation not disclosed in the claim. Overall the factual core is accurate.

---

### [key: primacy-recency-position-effect-online-links]
- evidence: empirical
- confidence: high
- group: scanning-and-reading-patterns
- sources: https://academic.oup.com/jcmc/article/11/2/522/4617731

**Claim:** Two field experiments on a restaurant website (Hite & Hite, JCMC 2006, Experiment 1 click-through range 7.3%–10.5% across 6 positions; Experiment 2 significant linear and quadratic effects χ²(1)=324.97 p<.001) confirmed both primacy and recency position effects for online link lists. First position received highest clicks; last position showed elevated clicks relative to middle items. Middle positions were consistently underperformed. Mechanism: primacy = low search cost from reading direction; recency = short-term memory retention or skip-to-end behavior. Scope: link lists visible without scrolling; effect magnitude likely moderates with content relevance. Kit implication: in a structured agent output with multiple flags or action items, critical items placed first or last are substantially more likely to be acted on than those in the middle; the 'buried middle' is the highest-risk placement for critical information.

**Verify note:** Source verified. The JCMC article is real and accessible. Key statistics confirmed: Experiment 2 linear χ²(1)=324.97 p<.001 matches exactly. Experiment 1 click-through range 7.3%–10.5% confirmed (position 5 lowest at 7.3%, position 1 highest at 10.5%). However, the claim attributes the Experiment 1 linear and quadratic effects to the same χ² statistic without specifying both components — source shows Exp 1 linear χ²(1)=16.97 and quadratic χ²(1)=23.14, while the claim only cites Exp 2's χ²(1)=324.97 p<.001 as 'Experiment 2 significant linear and quadratic effects.' That attribution is accurate. The primacy and recency effects are confirmed. The N-sizes (Exp 1: 1,641+2,247 visitors; Exp 2: 18,134 visits) are larger than a typical lab study, lending ecological validity. Study design (Latin Square, random assignment) is solid. The claim's mechanism explanation (primacy = low search cost; recency = memory or skip-to-end) is a reasonable interpretation not directly tested. The scope caveat about 'links visible without scrolling' is a reasonable inference but not stated exactly in the source. The claim is substantially accurate.

---

### [key: salience-decision-architecture-future-self]
- evidence: consensus
- group: salience-and-warning-design
- sources: https://uxmag.com/articles/using-salience-to-guide-user-decision-making

**Claim:** UX Magazine (consensus-practitioner synthesis citing brain imaging research) reports that making abstract consequences concrete and personally relevant—e.g., age-progressed self-images vs. numbers alone—increases savings allocation because the brain region for future-self thinking overlaps with stranger-perception rather than self-perception when thinking about abstract futures. Retirement savings visualized as home images proved more effective than showing raw numbers. Mechanism: salience is not just visual contrast but cognitive accessibility of consequences; abstract warnings fail not because they lack contrast but because their stakes are not vivid. Scope: decisions involving deferred or abstract consequences; immediate-consequence warnings are less subject to this effect. Kit implication: a kit flag that names a concrete consequence ('this will overwrite your file') will outperform an abstract severity rating ('HIGH RISK') even if both have equal visual salience; consequence vividness is an independent lever.

---

### [key: agent-skill-spec-comprehension-examples-gap]
- evidence: empirical
- confidence: high
- group: llm-agent-output-flags
- sources: https://arxiv.org/html/2605.19362

**Claim:** Analysis of 878 cybersecurity agent skill specifications (arxiv 2605.19362) found only 19.0% included examples of tasks or expected outputs, and only 2.3% exhibited all four comprehension anchors (operational basis, output contract, boundary disclosure, example capability demonstration). Without examples, users had to inspect helper code to recover expected output field structure. Mechanism: specifications written as executable instruction containers rather than user-facing capability disclosures fail to provide the behavioral anchors users need to form accurate expectations and detect when output deviates. Scope: cybersecurity agent skills; generalizability to other agent domains is plausible by mechanism. Kit implication: kit output structure should include an explicit output contract (what fields/sections to expect) so users can detect when something is missing or wrong rather than assuming completeness; absence of expected sections is only noticeable if the user has a prior model of what to look for.

**Verify note:** Source verified directly. N=878 cybersecurity SKILL.md files confirmed. 19.0% including examples confirmed (167/878). 2.3% exhibiting all four anchors confirmed (20/878). The four anchors are confirmed exactly: operational basis, output contract, boundary disclosure, example capability demonstration. The source also confirms that operational basis was most common (92.1%) while examples were rare (19%). The mechanism claim (specs written as instruction containers rather than capability disclosures) is a reasonable interpretive gloss on the findings. Scope limitation (cybersecurity domain) is correctly flagged. The finding about needing to inspect helper code to recover output field structure is a plausible implication but not explicitly cited in the fetched content — this specific detail was not confirmed by the source text. Overall the core statistics are accurate.

---

### [key: routine-vs-emergency-context-inverts-warning-effect]
- evidence: empirical
- confidence: high
- group: habituation-and-override
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12255787/

**Claim:** PMC12255787 (remote emergency warning experiment) found that risk perception had opposite effects on performance depending on scenario context: in routine monitoring, higher risk perception decreased task success rates (β=−0.473, p<0.001), whereas in early-warning and fire-warning scenarios it improved performance (β=0.045–0.198, p<0.021). Task success rates: routine monitoring 93%, early warning 83%, fire warning 97%. Mechanism: in routine contexts, elevated risk perception competes with the primary task for attentional resources (workload interference); in emergency contexts, elevated risk perception redirects attention appropriately. Scope: the same warning design produces opposite behavioral effects depending on baseline task demands. Kit implication: a kit that surfaces flags during routine low-stakes agent operation (e.g., summarization) will degrade throughput if flags are designed for emergency salience; flags must be calibrated to context type, not just severity—a low-severity flag in routine operation should use minimal-interrupt design.

**Verify note:** Source verified. PMC12255787 is real and accessible. N=60 safety professionals confirmed (not stated in the claim, but the study is legitimate). Task success rates confirmed: routine monitoring 93% (M=0.930), early warning 83% (M=0.831), fire warning 97% (M=0.974) — these match the claim exactly. Beta coefficient for routine success rate β=−0.473 p<0.001 confirmed. Emergency scenario success rate positive effects confirmed: β=0.198 p=0.001 (early warning) and β=0.045 p=0.021 (fire warning). The claim states 'β=0.045–0.198, p<0.021' which correctly captures the range across the two emergency scenarios. The mechanism explanation (attentional resource competition in routine vs. appropriate redirection in emergency) is a reasonable inference from the results. One extrapolation: the claim applies this to LLM kit design (AI flag salience calibration) — this is a significant conceptual leap from a human factors study of safety professionals using warning notification systems. The scope statement in the claim ('same warning design produces opposite behavioral effects') is accurate to the source.

---

## Null results
- Query 4 (AI agent output scanning eye-tracking) returned no studies specifically on users reading LLM/agent-generated text with eye-tracking; available studies covered AI-powered fact-checking interfaces and AI-generated vs human-generated visual design, neither of which directly measures how users scan agent output panels.
- Query 5 (flag formatting placement LLM agent output empirical comparison) returned no controlled studies comparing specific flag placement strategies (inline vs header vs sidebar) in LLM agent outputs on user attention or action rates; closest proxy was LLM output format compliance studies which measure model behavior, not user reading behavior.
- No empirical studies found on TLDR summary placement specifically for agent/kit output with measured attention outcomes; progressive disclosure research is available for AI transparency but not for agent output formatting per se.
- No studies found on inverted pyramid structure with measured retention effect sizes in online user studies (only qualitative/practitioner consensus available).

## New angles surfaced
- Automation bias and overtrust in agent output: users may not just ignore flags but actively discount them when the agent's track record is good — automation bias literature (Parasuraman & Manzey 2010) has empirical grounding and directly informs when flags are most and least likely to be heeded.
- Friction mechanics as attention restoration: mandatory confirmation dialogs, forced delays, or signature fields for high-stakes actions — empirical literature on 'speed bumps' in clinical and security contexts (e.g. CPOE alert overrides) measures whether friction recovers attention that would otherwise be automatized away.
- Notification channel diversity: mixing modalities (visual + auditory + positional) to prevent single-channel habituation — the cross-modal salience literature (PMC11024089 finding on auditory vs visual) suggests that varying the channel, not just the appearance, may be more robust against adaptation.
- User-controlled flag verbosity threshold: letting users set their own alert sensitivity level reduces flag-induced cognitive load while preserving agency — empirical literature on personalized notification settings and alert fatigue reduction in clinical informatics.
- Consequence framing vs severity rating: whether naming a concrete consequence ('this will delete X') outperforms abstract severity labels ('HIGH') in driving user action — no direct empirical comparison found; gap in the literature relevant to kit flag copy design.

