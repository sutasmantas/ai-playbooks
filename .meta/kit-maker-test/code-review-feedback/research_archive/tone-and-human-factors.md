# Research Archive: Tone and Human Factors in Code Review

Evidence track: PRACTITIONER-CONSENSUS (verify pass skipped)
22 sources fetched. 7 search angles + 2 saturation passes. Saturated. 1 confirmed null (anonymity study).

---

## Claims (34)

### [key: psychological-safety-top-predictor]
- evidence: empirical (Google Project Aristotle; SLR 28 studies, arXiv 2508.03369)
- group: psychological-safety
- sources: https://arxiv.org/abs/2508.03369, https://doi.org/10.1007/s10664-024-10512-1

**Claim:** Psychological safety is the top predictor of team effectiveness (Google Project Aristotle). A 2025 SLR of 28 studies confirmed code review is the primary interpersonal risk moment in software teams. A 2024 Springer study confirmed psychological safety directly predicts software quality outcomes. All 28 SLR studies are cross-sectional — no longitudinal data on how safety changes over review cycles. Implication: review process design is also safety design.

### [key: negative-feelings-from-reviews]
- evidence: empirical (Egelman et al. ICSE 2020, n=1,317)
- group: developer-experience
- sources: https://dl.acm.org/doi/10.1145/3377811.3380364

**Claim:** 57% of developers reported negative feelings from code reviews at least quarterly; 26% monthly. Low-frequency hostile events dominated satisfaction variance disproportionately — a single hostile review comment has outsized impact on developer experience. Implication: the tail of toxic interactions matters more than the mean.

### [key: review-anxiety-empirical]
- evidence: empirical (Springer 2024, DOI 10.1007/s10664-024-10550-9)
- group: developer-experience
- sources: https://doi.org/10.1007/s10664-024-10550-9

**Claim:** Nearly 50% of developers reported clinically significant anxiety during code reviews. Anxiety — not code quality — was the strongest predictor of review avoidance. One workshop on feedback clarity and self-efficacy produced clinically significant anxiety reductions for ~50% of participants. Implication: anxiety is the root cause of the "author becomes defensive" pattern; it is a measurable, addressable phenomenon.

### [key: toxishield-toxic-detection]
- evidence: empirical (ToxiShield 2025, trained on 38,761 code review samples)
- group: developer-experience
- sources: https://arxiv.org/abs/2604.14408

**Claim:** ToxiShield binary toxic/not-toxic classification: 98% accuracy, 97% F1. Multiclass (which subcategory): only 42% F1. 65% of false positives are sarcasm, passive-aggressiveness, and mockery — a confirmed unsolved NLP problem. 11 toxicity subcategories: Profanity, Trolling, Insult, Self-deprecation, Entitlement, Identity Attack, Threats, Obscenity, Arrogance, Flirtation, Object-Directed Toxicity. Toxic communication disproportionately deters minority and junior developers.

### [key: code-not-person-attribution]
- evidence: consensus (Google, Greiler, Graphite, Hauer, Sankarram, Microsoft)
- group: attribution
- sources: https://google.github.io/eng-practices/review/reviewer/comments.html, https://www.michaelagreiler.com/respectful-constructive-code-review-feedback/, https://phauer.com/2018/code-review-guidelines/

**Claim:** Universal consensus: author-targeted language ("you wrote," "you didn't") triggers identity defense; code-targeted language ("this code," "this function") enables objective engagement. "This code does not close the socket connection" vs. "You did not close the socket connection." Consistent across all major practitioner sources. Implication: code-targeting vs. person-targeting is word-level checkable.

### [key: i-messages-epistemic-accuracy]
- evidence: consensus (Greiler, Hauer)
- group: attribution
- sources: https://www.michaelagreiler.com/respectful-constructive-code-review-feedback/, https://phauer.com/2018/code-review-guidelines/

**Claim:** I-messages ("It's hard for me to understand this code") are epistemically accurate and less damaging than universal claims ("This code is hard to understand"). The reviewer genuinely cannot speak for all readers — I-messages are more truthful and less accusatory. Hauer's OIR framework: Observation (objective description) → Impact (I-message) → Request (suggestion form).

### [key: words-to-eliminate]
- evidence: consensus (Greiler, Sankarram)
- group: attribution
- sources: https://www.michaelagreiler.com/respectful-constructive-code-review-feedback/

**Claim:** Words to eliminate from review comments: "just," "easy," "only," "obvious," "simply." These function as implicit competence challenges — they carry no information when removed but signal that the author's approach was suboptimal in an obvious way. The sentence is always clearer without them.

### [key: opinion-as-fact-highest-impact]
- evidence: consensus (Sankarram, widely cited)
- group: toxic-patterns
- sources: https://medium.com/@sandya.sankarram/unlearning-toxic-behaviors-in-a-code-review-culture-b7c295498a3e

**Claim:** Opinion stated as fact is the highest-impact single anti-pattern — it conceals reasoning, prevents evaluation, and silences alternatives. Fix: own opinions as opinions, provide reasoning. "This is wrong" → "I think this approach has a problem because [mechanism]. Consider [alternative]." This is checkable: does the comment contain an assertion without supporting reasoning?

### [key: judgmental-questions-defensive-loop]
- evidence: consensus (Sankarram, Greiler)
- group: toxic-patterns
- sources: https://medium.com/@sandya.sankarram/unlearning-toxic-behaviors-in-a-code-review-culture-b7c295498a3e

**Claim:** Judgmental questions ("Did you even test this?") force the author into a defensive justification loop and presuppose negligence. Fix: describe the observed behavior, ask what the author intended. "Why didn't you just...?" is the canonical form — combines minimizer "just" with interrogative presupposing the author's failure was obvious.

### [key: sarcasm-contempt-no-action]
- evidence: consensus (Greiler, citing semantic scholar study)
- group: toxic-patterns
- sources: https://www.michaelagreiler.com/respectful-constructive-code-review-feedback/

**Claim:** Sarcasm in written async context is read as contempt at near-100% rate. There is no repair path — no action is specified. Unlike criticism, sarcasm produces no actionable signal while maximizing social damage. Should be treated as a hard no in any review format.

### [key: comment-avalanche-consolidate]
- evidence: consensus (Sankarram)
- group: toxic-patterns
- sources: https://medium.com/@sandya.sankarram/unlearning-toxic-behaviors-in-a-code-review-culture-b7c295498a3e

**Claim:** Repeating the same criticism across every instance in a diff (comment avalanche) overwhelms and signals contempt for the author's time. Always consolidate: identify the pattern once with a reference to the general rule and note it applies to all instances. Do not file 14 identical comments for 14 instances of the same issue.

### [key: tolerating-senior-toxicity]
- evidence: consensus (Sema Software and practitioner observation)
- group: toxic-patterns
- sources: https://www.semasoftware.com/blog/code-review-best-practices

**Claim:** Tolerating toxic behavior from high-performing senior developers is the most corrosive signal available to a team — it marks the norm as status-contingent. Junior developers learn that the standard does not apply equally, which undermines psychological safety more than any single instance of toxic behavior.

### [key: conventional-comments-eliminates-ambiguity]
- evidence: consensus
- group: constructive-wording
- sources: https://conventionalcomments.org/

**Claim:** Labeling comment intent (using Conventional Comments format) eliminates the primary source of review misunderstanding: whether a comment is blocking or a preference. This is the single most structurally impactful change to review format — requires zero additional effort per comment and removes the primary source of author defensiveness (uncertainty about whether they must respond).

### [key: preference-vs-fact-phrasing]
- evidence: consensus (Hauer, Greiler)
- group: constructive-wording
- sources: https://phauer.com/2018/code-review-guidelines/

**Claim:** Preference-driven feedback should be phrased as a question ("What do you think about naming this X?"); factual correctness issues should be stated directly. Applying statement form to preferences reads as authoritarianism. Applying question form to correctness issues reads as hedging a genuine blocker.

### [key: positive-feedback-required]
- evidence: consensus (Google engineering practices)
- group: constructive-wording
- sources: https://google.github.io/eng-practices/review/reviewer/comments.html

**Claim:** Google Engineering Practices explicitly mandates including positive comments. People learn from reinforcement of what they do well, not only from corrections. Positive feedback is required, not optional — its absence signals that reviews are purely critical evaluation, which increases defensiveness.

### [key: three-filter-check]
- evidence: consensus (Hauer)
- group: constructive-wording
- sources: https://phauer.com/2018/code-review-guidelines/

**Claim:** Three-filter check before posting a review comment: Is it true? Is it necessary (in scope, not caught by linter)? Is it kind (treats author as peer)? All three must be yes. A comment that fails any filter should be rewritten or omitted. This is the operationalizable minimum for review comment quality.

### [key: we-framing-reduces-defensiveness]
- evidence: consensus (Built In)
- group: constructive-wording
- sources: https://builtin.com/software-engineering-perspectives/code-review-best-practices

**Claim:** "We" framing ("We could make this cleaner by...") instead of "you" framing reduces defensiveness for improvement-oriented observations. Frame improvement as a team activity rather than individual correction.

### [key: blocker-phrasing-structure]
- evidence: consensus (Conventional Comments, Google, Hauer)
- group: constructive-wording
- sources: https://conventionalcomments.org/, https://google.github.io/eng-practices/review/reviewer/comments.html

**Claim:** Effective blocker structure: (1) label explicitly as "issue (blocking):", (2) describe what the code does — not what the author did, (3) state the risk or rule violated, (4) propose the specific resolution. Do not hedge a genuine blocker with "I think" or "maybe" — hedging contradicts the label and creates ambiguity about whether resolution is required.

### [key: synchronous-for-persistent-disagreement]
- evidence: consensus (Google eng-practices standard)
- group: constructive-wording
- sources: https://google.github.io/eng-practices/review/reviewer/standard.html

**Claim:** When a blocking disagreement persists in comment threads, synchronous discussion (video/in-person) resolves it faster and without tone amplification that occurs in async text threads. Escalating in async produces longer, more defensive comment threads, not resolution.

### [key: pre-merge-blame-culture-shift]
- evidence: consensus (Verraes)
- group: psychological-safety
- sources: https://verraes.net/2016/04/code-review-is-not-your-enemy/

**Claim:** Pre-merge code review can reduce blame culture by shifting defect attribution from individual to collective: "bugs are now no longer the fault of the person who wrote the code — the team has failed to catch the issues." Triggers collective problem-solving and investment in automated testing. Framing matters: code review as quality gate vs. code review as collaborative practice.

### [key: gender-reviewer-selection-bias]
- evidence: empirical (ESEC/FSE 2023, 1,010 FOSS projects, arXiv 2210.00139)
- group: diversity
- sources: https://arxiv.org/abs/2210.00139

**Claim:** Reviewer selection is the most gender-biased dimension: 11 of 14 datasets show women with significantly lower code review participation, consistent with affinity bias in invitation-based assignment. Male reviewers in 3 of 6 analyzed projects were not only more critical toward female counterparts but withheld positive encouragement — a distinct asymmetric pattern.

### [key: impostor-phenomenon-code-review]
- evidence: consensus (Microsoft Engineering Playbook)
- group: diversity
- sources: https://microsoft.github.io/code-with-engineering-playbook/code-reviews/process-guidance/reviewer-guidance/

**Claim:** Impostor phenomenon (persistent fear of being exposed as a fraud) disproportionately affects underrepresented contributors and is activated by review contexts. Countermeasures: explicit positive intent norms, universal review assignment, cultural communication style acknowledgment.

### [key: anonymity-null-result]
- evidence: null (no controlled empirical study exists)
- group: process
- sources: (confirmed absence)

**Claim:** No controlled empirical study comparing identified vs. anonymous code reviewer tone, thoroughness, or acceptance rates exists. This is a confirmed gap in the literature. Adjacent evidence (reviewers align tone with status and relationships) is consistent with anonymity affecting tone, but direction of effect is unknown. Treat all claims about anonymity effects as speculation.

### [key: eight-safety-practices]
- evidence: consensus (AgileSparks)
- group: psychological-safety
- sources: https://www.agileparks.com/blog/why-code-reviews-are-important-and-how-to-do-them-right/

**Claim:** Eight practices that build psychological safety through code reviews: open discussion in retrospectives, pair review, empathetic language, positive framing, referencing agreed guidelines, frequent small reviews, prioritizing meaningful feedback, clear Definition of Done. These address both the reviewer's behavior and the team's structural context.

## Null results
- Anonymity study: confirmed gap — no controlled experiment on identified vs. anonymous reviewer behavior

## New angles surfaced
- Anonymity RCT in production codebase (production-context gap confirmed)
- Longitudinal safety dynamics (all 28 SLR studies are cross-sectional)
- Sarcasm detection at pragmatic level (unsolved NLP, 65% false-positive rate)
- Intervention efficacy replication (single workshop result unreplicated)
