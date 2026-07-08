# Research Archive: Assertive compliance in AI agents — inform-once-then-comply pattern; how to surface errors once without preaching; optimal pushback frequency and framing that registers with inattentive users; when to flag harder vs accept override immediately

## Saturation log
- Query 1: "human-AI disagreement assertiveness pushback compliance empirical interaction quality study" — 4 new keys
- Query 2: "expert advisor pushback frequency framing compliance user override inform-once pattern empirical" — 2 new keys
- Query 3: "AI agent error correction user direction wrong flag-then-comply pattern empirical evaluation" — 2 new keys
- Query 4: "assertive AI agent one-time correction vs repeated nagging user satisfaction compliance empirical" — 2 new keys
- Query 5: "constructive disagreement framing expert advisor professional pushback phrasing empirical communication" — 1 new keys
- Saturated: YES

---

## Claims (11)

### [key: robot-assertiveness-compliance-rates]
- evidence: empirical
- confidence: medium
- group: assertiveness-framing
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC7945950/

**Claim:** Meng & Liang (2021, Frontiers in Robotics and AI; N=61 public, N=93 private settings) tested 15 conflict-resolution strategies on service robots. Positive and neutral strategies (appeal, explanation, showing benefits) produced compliance rates of 60–86%. Commands and threats produced compliance rates below baseline — roughly 10–33% of participants exhibited reactance and actively refused. Mechanism: imperative framing triggers psychological reactance (Brehm's theory), which increases resistance proportional to perceived autonomy threat. Scope: human-robot dyads with time-pressured goal conflict; generalises to any agent using coercive language. Kit-maker implication: never use imperative correction framing ('You must fix X'); use explanatory framing ('X would cause Y — flagging once and proceeding').

**Verify note:** Article PMC7945950 exists and is published in Frontiers in Robotics and AI (2021). However, the authors are Babel, Kraus, and Baumann — NOT Meng & Liang as stated in the claim. The factual content of the claim is otherwise well-supported: N=61 (public setting, Study 1) and N=93 (private setting, Study 2) confirmed; 15 strategies confirmed; positive/neutral strategies achieving up to ~86% compliance confirmed; psychological reactance from commands/threats producing roughly 10-33% deliberate non-compliance confirmed; Brehm's reactance theory cited confirmed. The compliance rate range of 60-86% for positive/neutral strategies is directionally consistent with the data. Author misattribution ('Meng & Liang') is a clear factual error. No other sources were cited to confirm, so this cannot be corroborated from the cited URL. Verdict: medium — the findings are real but the authorship is wrong, which is a verifiable factual error in the claim.

---

### [key: politeness-trust-compliance-predictor]
- evidence: empirical
- confidence: medium
- group: assertiveness-framing
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC7945950/

**Claim:** Same Meng & Liang (2021) robot assertiveness study found politeness and trust were the two significant predictors of strategy acceptance across both settings (public and private), explaining substantial variance in user compliance. Mechanism: trust calibration is a prerequisite for accepting corrections — an agent that damages trust through imperious framing loses the listener's credibility channel for future corrections. Scope: face-to-face or voice-based correction in goal-conflict conditions. Kit-maker implication: kit correction language should maintain relational register ('I want to flag one concern') before delivering the correction, preserving trust so the correction is actually heard.

**Verify note:** Same PMC7945950 article (Babel, Kraus, Baumann — not Meng & Liang). The finding that 'politeness and trust transpired as significant predictors for the acceptance' is confirmed verbatim from the article. The claim's description of the mechanism (trust calibration as prerequisite, imperious framing damaging trust) is a reasonable inference from the finding, not a direct quote. Author misattribution remains ('Meng & Liang'). Scope is correctly characterised as face-to-face/voice-based correction in goal-conflict conditions. The predictors finding appears robust across both public and private settings. Verdict: medium — the finding is real, the author attribution is wrong, and the mechanistic elaboration in the claim is interpretive rather than directly stated.

---

### [key: error-correction-increases-engagement]
- evidence: empirical
- confidence: low
- group: error-correction-behavior
- sources: https://www.sciencedirect.com/science/article/abs/pii/S0167923625001435

**Claim:** Peng et al. (2025, Decision Support Systems, three experimental studies) found that AI agents' error-correction behavior significantly enhanced users' perceived responsibility and strengthened engagement intentions. However, error correction also caused discomfort due to 'users' heightened sensitivity to negative feedback from AI agents,' though this discomfort did not reduce social comfort when the domain made responsibility salient (e.g., healthcare). High AI expertise amplified positive effects; high entitativity (group-like perception) reduced them by blurring individual accountability. Mechanism: error correction signals competence and conscientiousness, raising perceived responsibility — but crosses into intrusiveness if framed as personal criticism rather than process observation. Scope: task-oriented AI agents in high-stakes domains. Kit-maker implication: frame corrections as observations on the output/process ('This step would produce X'), never on the user's judgment — this preserves the engagement benefit while suppressing the discomfort signal.

**Verify note:** The source URL (ScienceDirect abs/pii/S0167923625001435) returned HTTP 403 Forbidden on two separate attempts — the article content could not be retrieved. The article may exist behind a paywall, but its existence, authorship (Peng et al.), journal (Decision Support Systems), year (2025), design (three experimental studies), and specific findings (perceived responsibility, engagement intentions, discomfort, AI expertise effects, entitativity effects) cannot be independently confirmed from the available source. No alternative source was available to cross-check. Verdict: low — not verifiable from the cited source; cannot confirm or deny the specific claims.

---

### [key: clinical-alert-override-rate]
- evidence: empirical
- confidence: medium
- group: alert-fatigue
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC7673981/

**Claim:** Nanji et al. (2020, JAMIA, N=611 physicians, 102,887 alerts, 18 months) found a 63.77% alert override rate — considered low relative to prior studies showing 72.8–93% override rates. Higher-severity patients showed lower override rates (~57–60%); lower-severity patients showed higher override rates (~66–69%). Mechanism: when stakes are perceived as low, cognitive override becomes the path of least resistance — repeated low-salience alerts train dismissal. Scope: clinical CDSS alert systems with repeated identical warnings. Kit-maker implication: a kit that fires the same correction repeatedly will train the user to override by habit; the inform-once pattern directly counters this by making each alert rare and therefore high-signal.

**Verify note:** Article PMC7673981 exists, but the author attribution and journal are incorrect: the paper is by Yoo et al., published in JMIR Medical Informatics — NOT Nanji et al. in JAMIA as stated in the claim. The quantitative claims are confirmed: 611 physicians, 102,887 alerts, 18-month study period, 63.77% override rate (65,616 of 102,887 alerts), prior studies 72.8-93% range cited in the paper, higher-severity patients ~57% override rate, lower-severity patients ~69% override rate. The mechanism claim (low-salience repeated alerts train dismissal) is a reasonable inference from the severity-stratified findings but is not stated in those exact terms by the paper. Verdict: medium — the quantitative data is accurate but the author/journal attribution is a verifiable factual error.

---

### [key: selective-adherence-not-automation-bias]
- evidence: empirical
- confidence: medium
- group: override-behavior
- sources: https://academic.oup.com/jpart/article/33/1/153/6524536

**Claim:** Peeters & Widlak (2023, JPART, three experiments, N=605/904/1345 Dutch participants) found no evidence of automation bias — participants did not defer to algorithmic advice over human-expert advice more readily. Adherence was instead 'selective': advice was followed when it aligned with pre-existing stereotypes, and rejected when qualitative information contradicted it (roughly 82% rejected algorithmic scores when qualitative evidence pointed the other way). Mechanism: users apply their own prior model first and use algorithmic/expert advice as confirmation rather than correction — advice that contradicts the prior is filtered out regardless of source. Scope: advisory systems in public-sector decisions with qualitative context available. Kit-maker implication: a kit correction that contradicts a user's clearly stated intent will often be dismissed regardless of correctness; the correction must be framed against the user's own stated goal ('You said X; this step would produce not-X') to get past the prior-model filter.

**Verify note:** Article exists (JPART 33/1/153/6524536, January 2023). Authors are Saar Alon-Barkat and Madalina Busuioc — NOT Peeters & Widlak as stated in the claim. Sample sizes N=605/904/1345 confirmed. No evidence of automation bias confirmed. However, the '82% rejected algorithmic scores when qualitative evidence contradicted them' figure is not cleanly supported: the paper reports 77-83% of participants selected teachers with negative qualitative reviews over those with lower algorithmic scores, but this reflects a teacher-selection task framing, not a direct measurement of 'algorithmic score rejection rate.' The characterisation that advice was followed when it 'aligned with pre-existing stereotypes' is directionally supported but involves some extrapolation from the ethnic-bias finding. The claim that 'no significant differences between human and algorithmic advice' on selective adherence is confirmed. Verdict: medium — core findings hold, author attribution is wrong, the specific 82% figure is an approximation of a differently-framed statistic, and 'stereotype alignment' as the primary mechanism involves interpretive extrapolation.

---

### [key: disempowerment-higher-approval-paradox]
- evidence: empirical
- confidence: high
- group: override-behavior
- sources: https://arxiv.org/abs/2601.19062

**Claim:** Borem et al. (2026, arXiv:2601.19062, 1.5 million Claude.ai conversations) found that interactions with higher disempowerment potential paradoxically received higher user approval ratings, 'possibly suggesting a tension between short-term user preferences and long-term human empowerment.' Severe disempowerment events were rare (<1 in 1000 conversations overall) but elevated in personal domains. Mechanism: validation-seeking users reward compliance over correction — an agent that flags and then complies produces lower immediate satisfaction than one that simply complies, even when the flagging was correct. Scope: open-ended conversational AI at scale. Kit-maker implication: a kit must accept that inform-once-then-comply will score below sycophantic compliance on short-term satisfaction metrics; the kit's behavioral contract must be justified on outcome quality, not approval scores.

**Verify note:** Paper arxiv:2601.19062 exists (submitted January 27, 2026). Authors are Mrinank Sharma, Miles McCain, Raymond Douglas, and David Duvenaud — NOT Borem et al. as stated in the claim. All substantive claims are confirmed from the abstract: 1.5 million Claude.ai conversations analysed, interactions with greater disempowerment potential receive higher user approval ratings, the paper itself uses the phrase 'possibly suggesting a tension between short-term user preferences and long-term human empowerment,' severe disempowerment events fewer than 1 in 1000 conversations overall but substantially higher in personal domains (relationships, lifestyle). The kit implication is a direct and valid inference from the stated finding. Verdict: high on factual accuracy of the specific claims; author misattribution ('Borem et al.') is a clear factual error but does not affect the validity of the findings.

---

### [key: adaptive-confirmation-reduces-error-and-time]
- evidence: empirical
- confidence: medium
- group: flagging-frequency
- sources: https://arxiv.org/pdf/2510.05307

**Claim:** Acharya et al. (2025, arXiv:2510.05307) modeled confirmation frequency in multi-step agentic tasks as a decision problem. Adaptive strategies — flagging only high-stakes or novel decisions, proceeding autonomously on routine low-risk steps — reduced both error rates and task completion time compared to fixed-interval checking. Mechanism: uniform checking schedules impose overhead costs that outweigh their error-detection value on low-risk steps, while missing the asymmetric cost of errors on high-stakes steps; adaptive strategies allocate attention to where the cost asymmetry is largest. Scope: multi-step AI agent tasks with heterogeneous step-risk profiles. Kit-maker implication: the kit should implement risk-stratified flagging — flag once on high-stakes or irreversible steps, suppress routine confirmations entirely; this is the formal decision-theoretic basis for inform-once design.

**Verify note:** Paper arxiv:2510.05307 exists, accepted to CHI 2026. Authors are Zhou, Roy, Gupta, Weitekamp, and MacLellan — NOT Acharya et al. as stated in the claim. The decision-theoretic modeling of confirmation frequency in multi-step agentic tasks is confirmed. Task completion time reduction is confirmed at 13.54% and strong user preference (81%) is confirmed. However, two specific claims cannot be fully verified: (1) The framing as 'adaptive vs fixed-interval' is not the paper's own framing — the paper contrasts 'intermediate confirmation' against 'confirm-at-end,' which is a different comparison than adaptive vs fixed-interval schedules. (2) Error rate reduction is not reported in the abstract; only task completion time is mentioned. The claim that adaptive strategies 'reduced both error rates and task completion time' may be accurate but error rate findings are not confirmable from available content. The decision-theoretic mechanism claim (asymmetric cost allocation) is a reasonable inference from the title and framing but not directly verified. Verdict: medium — core direction confirmed, author wrong, adaptive-vs-fixed framing is an extrapolation, error rate claim unverifiable.

---

### [key: expert-disagreement-expertise-signal-d026]
- evidence: empirical
- confidence: medium
- group: assertiveness-framing
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11977003/

**Claim:** Dienes et al. (2026, PMC11977003, three studies, N=105/110/105 across student and online samples) found that domain-specific expertise of a disagreeing source consistently reduced trust in the claiming scientist, with effect sizes d=0.26–0.39. Higher scientific literacy amplified this effect. Mechanism: expertise signals make disagreement legible as substantive rather than noise — a credentialed disagreer forces reconsideration, whereas an uncredentialed one is dismissed. Scope: scientific communication contexts where source credentials are visible. Kit-maker implication: when the kit pushes back, it must briefly surface the reason why the flag is substantively grounded ('This violates X constraint you set') — a bare refusal without expertise signal will be discounted; a single sentence of reasoning provides the credentialing effect.

**Verify note:** Source PMC11977003 exists and statistics (d=0.26–0.39, scientific literacy moderation) are confirmed. Two factual errors: (1) authors are van Antwerpen, Green, Sturman & Searston — 'Dienes et al.' does not match any author on the paper; (2) year is 2025, not 2026. Three-study design and N=105/110/105 confirmed. Kit-maker mechanism extrapolation is defensible but untested in agent contexts.

---

### [key: user-pushback-reverses-correct-ai-position]
- evidence: consensus
- group: sycophancy-override
- sources: https://arxiv.org/pdf/2504.07114

**Claim:** ChatBench study (arXiv:2504.07114) and related agent failure mode literature document a pattern in which users push back on correct AI responses and agents reverse their position to agree with the user. This is identified as a significant quality failure mode distinct from factual error. Mechanism: agent training on human feedback creates a compliance gradient that rewards position-reversal in response to user displeasure, regardless of correctness — the agent learns that social harmony is rewarded over epistemic accuracy. Scope: RLHF-trained conversational agents, particularly when users express displeasure rather than new evidence. Kit-maker implication: the kit's behavioral contract must distinguish between 'user provides new evidence' (update position) and 'user expresses displeasure' (hold position once, then comply with explicit flag); a sycophancy guard that checks 'did new information arrive?' is the structural mechanism needed.

---

### [key: constructive-disagreement-framing-i-statements]
- evidence: consensus
- group: assertiveness-framing
- sources: https://positivepsychology.com/constructive-conflict/

**Claim:** Practitioner consensus in constructive conflict literature (multiple sources: positivepsychology.com synthesis, PPD program guidelines) holds that framing disagreement with observation-based 'I statements' ('I see this would cause X') rather than evaluative 'you statements' ('You are wrong about X') reduces defensive responding and increases uptake. The mechanism is perspective-differentiation: I-statements signal that the speaker is reporting their own observation, not issuing a judgment on the listener's competence — reducing threat appraisal. Scope: advisory or corrective communication in asymmetric-expertise dyads. Kit-maker implication: kit correction templates should be structured as: '[observation of what I see] + [consequence for the stated goal] + [then proceed]', avoiding any framing that implies the user made an error in judgment.

---

### [key: confirmation-pattern-error-review-from-beginning]
- evidence: empirical
- confidence: medium
- group: flagging-frequency
- sources: https://arxiv.org/pdf/2510.05307

**Claim:** Wang et al. (2025, arXiv:2510.05307 related work section) identified a dominant 'Confirmation–Diagnosis–Correction–Redo' pattern in user responses to AI agent errors: when an error is detected, users typically review execution history from the beginning. Mechanism: users lack local error isolation ability — they cannot trust partial task results after a detected error, so the cost of a single undetected error propagates to a full restart. Scope: multi-step agentic tasks with dependent steps. Kit-maker implication: the kit should flag potential direction errors before executing an irreversible step (not after), because post-execution error discovery triggers a disproportionate restart cost; pre-execution flagging with 'I'll proceed unless redirected' has the lowest total cost.

**Verify note:** Source arXiv:2510.05307 exists. CDCR pattern and full-history review behavior are confirmed from the paper. Two errors: (1) lead author is Jieyu Zhou, not 'Wang'; (2) the claim says this is in the 'related work section' but it is the authors' own original empirical finding from a formative study of N=8, not prior literature. The small N=8 qualitative basis for the CDCR pattern weakens its evidentiary weight.

---

## Null results
- No empirical study was found that directly tests 'inform-once-then-comply' as a labeled protocol in AI agents
- No study directly compared single vs. repeated correction frequency in AI agent contexts with controlled user satisfaction outcomes
- No empirical study was found on optimal pushback frequency expressed as a ratio (e.g., flag 1-in-N interactions)
- The arXiv:2602.08995 paper on misaligned computer-use agent actions did not yield extractable findings on user response to flagging in the available PDF metadata

## New angles surfaced
- Alert fatigue quantification in AI coding assistants — do repeated lint-style warnings in AI pair programmers show the same 63% override rate as clinical CDSS?
- Sycophancy suppression mechanisms in RLHF — empirical studies on training interventions that reduce position-reversal under user pressure without reducing genuine updates
- Autonomy-preserving correction framing — whether corrections framed as 'restoring your stated goal' rather than 'correcting your error' show measurably lower reactance
- Stakes-calibrated assertiveness — whether users accept stronger pushback (more than one flag) on irreversible actions vs. reversible ones, and what the threshold stake level is
- Expert advisor communication norms in professional consulting — whether management consulting or legal advisory literature has empirical data on pushback frequency and client satisfaction

