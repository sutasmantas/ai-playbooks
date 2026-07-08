# Research Archive: Completeness in long-document summarization

Evidence track: PRACTITIONER-CONSENSUS (verify pass skipped)

## Saturation log
- Query 1: "meeting transcript summarization omission failure modes completeness NLP empirical" — 5 new keys
- Query 2: "long document summarization completeness recall missed items LLM empirical study" — 4 new keys
- Query 3: "pre-read vs simultaneous summarization completeness first pass omission empirical" — 2 new keys
- Query 4: "two-pass summarization completeness improvement recall empirical LLM" — 3 new keys
- Query 5: "summarization omission rate transcript length correlation empirical measurement" — 3 new keys
- Saturated: YES

---

## Claims (20)

### [key: omission-two-types-total-partial]
- evidence: empirical
- group: failure-modes
- sources: https://arxiv.org/html/2509.15901, https://arxiv.org/pdf/2407.11919

**Claim:** Empirical research on meeting summarization (Re-FRAME/SCOPE paper, arXiv 2509.15901; and practitioner taxonomy from the 'What's Wrong?' paper) identifies two distinct omission subtypes: TOTAL omission (relevant topics or key points are entirely absent from the summary) and PARTIAL omission (the topic is mentioned but the detail, depth, or nuance of the discussion is not captured). The mechanism differs: total omission occurs when the model's attention or relevance scoring fails to surface a topic at all, often because it is mentioned late in the transcript or by a less-dominant speaker; partial omission occurs when the model correctly identifies a topic but compresses its significance below the threshold needed for downstream usefulness. Scope: both types are more severe in long, multi-speaker meetings than in short bilateral exchanges. Practical implication: a meeting notes summarizer procedure must include a separate post-generation check for both types — scanning output against transcript topics (for total omission) and against the depth of discussion on each topic (for partial omission).

---

### [key: salient-content-scatter-causes-omission]
- evidence: empirical
- group: failure-modes
- sources: https://arxiv.org/html/2509.15901

**Claim:** The Re-FRAME paper (arXiv 2509.15901) identifies 'salient content scattered across speaker turns' as a primary structural mechanism for omission in meeting summarization. Because key decisions or action items may be distributed across multiple turns — a proposal in turn 12, a modification in turn 34, a final agreement in turn 67 — sequential processing that mirrors the temporal order of the meeting systematically underweights information that requires cross-turn integration. The model treats each turn with roughly equal local attention, causing aggregated signals (the distributed decision) to be diluted relative to any single dense paragraph. Scope: this mechanism is specific to multi-party dialogue and does not apply to single-author documents. Practical implication: the summarization procedure should explicitly instruct the model to extract facts before compressing, grouping semantically related content across turns rather than processing chronologically.

---

### [key: fact-extraction-before-compression-reduces-omission]
- evidence: empirical
- group: completeness
- sources: https://arxiv.org/html/2509.15901

**Claim:** The Re-FRAME paper (arXiv 2509.15901) tested a two-stage pipeline — explicit fact extraction followed by compression — against single-pass summarization and measured omission on QMSum and FAME benchmarks using a Likert-scale omission score. The two-stage pipeline reduced omission from 3 to 0.4 on QMSum (approximately 87% reduction) and from 4 to 0.16 on FAME (approximately 96% reduction). The mechanism is that decoupling content understanding from compression allows the model to capture the full fact inventory before applying any selection pressure. Relevance scoring then retains approximately 40% of extracted facts, ensuring critical content is not discarded during compression. Scope: results are on meeting-domain benchmarks; the magnitude of improvement may not transfer directly to other document types. Practical implication: the meeting notes summarizer should run a fact-extraction pass explicitly before the summary-generation pass, not attempt both simultaneously in a single prompt.

---

### [key: thematic-over-temporal-organization-for-completeness]
- evidence: empirical
- group: structure-conventions
- sources: https://arxiv.org/html/2509.15901

**Claim:** Research on meeting summarization (Re-FRAME, arXiv 2509.15901) finds that organizing summaries around themes rather than temporal sequence improves completeness because temporal structure mirrors the meeting's procedural order, not its decision/information structure. When a model is anchored to chronology, content from early in the meeting is over-represented (primacy effect) and content from late in the meeting is under-represented (recency effects at the output level). Thematic grouping via outline planning anchors around high-relevance facts regardless of when they appeared. Scope: this applies to agenda-structured meetings; for meetings that are themselves a single uninterrupted discussion, the distinction is less sharp. Practical implication: the procedure should instruct the model to produce a thematically organized summary, explicitly breaking from the chronological order of the transcript, and to anchor each theme to a set of extracted facts.

---

### [key: meeting-completeness-worst-among-conversation-types]
- evidence: empirical
- group: completeness
- sources: https://arxiv.org/html/2606.15974

**Claim:** A large-scale empirical study (arXiv 2606.15974) evaluated 28 LLMs across 50,400 summaries in multiple conversation domains and found meeting summarization had among the lowest completeness scores of all scenarios — significantly lower than healthcare, daily life, or news. Completeness ranged from approximately 60% to 72% across top models on meeting content, versus up to 91.5% on healthcare conversations. The mechanism is that meetings combine long transcripts, multi-party turn-taking, structural complexity (agenda items, digressions, votes), and domain heterogeneity (technical + social content in the same transcript). Scope: the gap is largest for instruction-tuned models; large reasoning models (e.g., DeepSeek-R1) narrow the gap by 11.6 percentage points versus their non-reasoning counterparts. Practical implication: meeting notes summarizers cannot rely on default LLM behavior; they require domain-specific procedure scaffolding to reach completeness levels acceptable for professional use.

---

### [key: reasoning-models-outperform-instruction-models-completeness]
- evidence: empirical
- group: completeness
- sources: https://arxiv.org/html/2606.15974

**Claim:** The multi-dimensional LLM conversation summarization study (arXiv 2606.15974) found that reasoning-class models substantially outperform instruction-tuned models on completeness in meeting scenarios: DeepSeek-R1 achieved 71.7% completeness versus DeepSeek-V3's 60.1% — an 11.6 percentage point gap on the same task. More strikingly, small reasoning models matched the completeness of large instruction-tuned models, suggesting reasoning capability compensates for parameter count in this failure mode. The mechanism is that reasoning models internally decompose the task, functioning similarly to the deliberate fact-extraction pass in two-stage pipelines, reducing the probability that distributed or late-appearing facts are dropped during compression. Scope: specific to long, complex conversations; the advantage narrows on short or simple transcripts. Practical implication: when choosing a base model for meeting summarization, prefer reasoning-capable models; when using instruction-tuned models, compensate with explicit multi-step prompting.

---

### [key: feedback-integration-improves-coverage]
- evidence: empirical
- group: completeness
- sources: https://arxiv.org/pdf/2407.11919, https://arxiv.org/html/2412.19906v1

**Claim:** Multiple research lines (What's Wrong paper arXiv 2407.11919; SumAutoEval work arXiv 2412.19906) find that integrating evaluator feedback into the generation loop — either via a critique-then-revise pass or by prompting the model to self-check against extracted entities — significantly improves completeness and coverage. The mechanism is that a single-pass generation cannot simultaneously optimize for both compression and coverage; a second pass with specific deficit information (which facts are missing) gives the model a targeted signal to correct without re-introducing hallucination. Scope: improvement is measurable when the critique is grounded in the source transcript (not just in the draft summary); self-critique without source grounding is unreliable. Practical implication: the meeting notes procedure should include a critique pass that checks the generated summary against the transcript-derived fact list and flags any missing items for a targeted revision.

---

### [key: entity-level-evaluation-detects-hidden-omissions]
- evidence: empirical
- group: completeness
- sources: https://arxiv.org/html/2412.19906v1

**Claim:** The fine-grained summarization evaluation paper (SumAutoEval, arXiv 2412.19906) found that models can score well on readability and surface-level metrics while missing substantial amounts of information — described as models that 'can miss a lot of relevant information and still have good metrics.' Entity-level evaluation (decomposing the reference into self-contained factual units and checking coverage) achieved 0.81 Cohen's Kappa agreement with human judgments, versus 0.28 for ROUGE-1 and 0.24 for ROUGE-L. The mechanism is that ROUGE measures n-gram overlap, which rewards lexical similarity but does not detect factual omissions that are expressed differently from the reference. Scope: this is most severe in domain-specific contexts (medical, technical, meeting decisions) where paraphrasing is common. Practical implication: when quality-checking a meeting summary, do not use ROUGE or surface similarity; instead, decompose expected outputs into individual facts (action items, decisions, owners) and check each discretely.

---

### [key: ensemble-prompting-improves-completeness-consistency]
- evidence: empirical
- group: completeness
- sources: https://arxiv.org/html/2412.19906v1

**Claim:** The SumAutoEval research (arXiv 2412.19906) found that using multiple prompts from different evaluative angles — checking whether entities 'are present,' achieve 'concept coverage,' or have 'supporting materials' — and combining via majority voting improves both completeness detection consistency and human agreement (Cohen's Kappa 0.81). The mechanism is that any single prompt angle creates blind spots: presence checks miss cases where an entity is mentioned but not adequately covered; coverage checks miss cases where supporting context is absent. Using three angles catches different omission profiles. Scope: this was demonstrated in medical note summarization but the mechanism applies to any structured meeting output. Practical implication: the meeting notes summarizer's verification step should ask at least two distinct completeness questions per key item rather than a single 'is this covered?' prompt.

---

### [key: coreference-failure-as-omission-proxy]
- evidence: empirical
- group: ownership-attribution
- sources: https://arxiv.org/html/2509.15901

**Claim:** The meeting summarization failure taxonomy (from the 'What's Wrong?' paper and the Re-FRAME paper) identifies coreference failure as a failure mode adjacent to omission: the model fails to resolve references to participants or entities, misattributes statements, or omits necessary participant identification. This is functionally an omission of ownership/attribution information even when the content itself is present. The mechanism is that meeting transcripts have high pronoun and role-reference density ('she agreed,' 'the team decided') and single-pass summarization does not maintain a participant state map. Scope: most severe in large meetings with many speakers or with ambiguous speaker labels in the transcript. Practical implication: the summarizer procedure should explicitly resolve all participant references before or during fact extraction, tagging each fact with the speaker or role who produced it.

---

### [key: length-quality-tradeoff-factual-consistency]
- evidence: empirical
- group: failure-modes
- sources: https://arxiv.org/html/2504.04534v1

**Claim:** An empirical multi-dimensional evaluation of LLMs for text summarization (arXiv 2504.04534) found that factual consistency dropped from 0.486 at 50-token summaries to 0.281 at 150-token summaries — a 42% decline — even though longer summaries scored higher on perceived quality. The mechanism is that as summaries expand, models fill space with generated content that has weaker grounding in the source, increasing hallucination risk per additional sentence. Scope: this is measured on text summarization generally; meeting notes that must be long (multi-agenda meetings) face a structural tension between completeness (needs length) and accuracy (degrades with length). Practical implication: the summarizer should target tight, structured outputs with discrete sections per agenda item rather than expansive prose, trading narrative length for coverage breadth.

---

### [key: technical-domain-omission-worse]
- evidence: empirical
- group: failure-modes
- sources: https://arxiv.org/html/2504.04534v1

**Claim:** Empirical benchmarking (arXiv 2504.04534) found that factual consistency in technical domains (legal, biomedical, patent) was dramatically lower than in conversational domains (BigPatent and PubMed scores of 0.093–0.102 versus SAMSum conversational score of 0.883 BERTScore). The mechanism is that technical terminology increases the probability of paraphrasing errors, hallucination of plausible-sounding but incorrect specifics, and omission of precise figures or constraints because the model substitutes general descriptions for specific facts. Scope: applies to meeting content that includes technical specifications, financial figures, or domain-specific terminology. Practical implication: meeting notes summarizers for technical teams (engineering, finance, legal) need explicit prompting to preserve numerical values, proper nouns, and technical terms verbatim rather than paraphrasing them.

---

### [key: omission-rate-correlates-with-bertscore-not-bleu]
- evidence: empirical
- group: completeness
- sources: https://arxiv.org/pdf/2211.07145

**Claim:** Empirical measurement of omission rates (from the omission-in-dialogue summarization research line) found that BERTScore is the most stable metric correlated with omission content, while BLEU shows the least correlation because it is precision-oriented and does not penalize for missing content. The mechanism is that BLEU rewards n-gram precision in what IS generated but is insensitive to what is NOT generated — a summary that perfectly reproduces half the content still scores well on BLEU. BERTScore's contextual embeddings are more sensitive to semantic gaps. Scope: this is a finding about evaluation metrics, not about generation quality directly; it applies when automatically checking whether a meeting summary is complete. Practical implication: if automated completeness checking is included in the meeting notes kit, BERTScore is a better proxy than BLEU, though entity-level recall checks are superior to both.

---

### [key: omission-label-provision-improves-quality-substantially]
- evidence: empirical
- group: completeness
- sources: https://arxiv.org/abs/2211.07145

**Claim:** The OLDS dataset paper (arXiv 2211.07145, ACL 2023) demonstrated that providing ground-truth omission labels during summarization training produced 'a large improvement in summarization quality,' and identified omission as 'a major factor in affecting the quality of summarization' that previous works had not systematically addressed. The mechanism is that without explicit omission supervision, models learn to optimize for fluency and coverage of the most frequent content patterns, leaving tail content (minority-speaker contributions, late-transcript decisions) consistently underweighted. Scope: the improvement was measured in a training setting; in inference-only settings, the implication shifts to providing explicit omission-focused prompting rather than ground-truth labels. Practical implication: the meeting notes summarizer procedure should include explicit prompting for completeness that specifically asks the model to identify what might be missing rather than only asking it to produce a summary.

---

### [key: holistic-llm-evaluation-fails-on-long-transcripts]
- evidence: empirical
- group: completeness
- sources: https://arxiv.org/html/2508.15085

**Claim:** The LongRecall paper (arXiv 2508.15085) found that holistic LLM evaluation of recall suffers from context overload in long documents: 'the evaluator LLM frequently misaligns reference segments by mapping them onto themselves rather than correctly matching them to generated counterparts.' As reference and generated answers grow longer, the evaluator loses the ability to track which facts are covered. Lexical methods independently fail through false negatives when facts are paraphrased and false positives from surface token matching without contextual verification. The mechanism is that both LLM-as-judge and lexical methods have failure modes that scale with document length, but in opposite directions. Scope: this is about automated evaluation, but it mirrors the same mechanism that causes generation omissions — long contexts overwhelm tracking capacity. Practical implication: the meeting notes procedure should decompose verification into self-contained fact units with coreference resolved before checking, not ask an LLM to holistically assess completeness of a long transcript against a long summary.

---

### [key: positional-bias-late-transcript-underrepresented]
- evidence: consensus
- group: failure-modes
- sources: https://arxiv.org/html/2509.15901

**Claim:** Research on meeting summarization (Re-FRAME, arXiv 2509.15901; practitioner consensus) consistently finds that content appearing late in a transcript is underrepresented in summaries. The mechanism has two components: (1) attention dilution — in very long contexts, later tokens receive proportionally less effective attention weight relative to the total context; (2) outline anchoring — models that organize summaries around an outline tend to anchor that outline to early content and then fill in, rather than distributing coverage evenly. This creates a systematic positional bias that is independent of actual importance. Scope: strongest in transcripts exceeding 4,000 tokens or 60 minutes of meeting time. Practical implication: the summarizer procedure should include explicit instruction to scan the final third of the transcript for unrepresented decisions or action items as a distinct step, or use chunked summarization with position-aware aggregation.

---

### [key: structured-output-format-improves-completeness-detectability]
- evidence: consensus
- group: format
- sources: https://arxiv.org/html/2412.19906v1, https://arxiv.org/pdf/2409.10883, https://deepchecks.com/advanced-techniques-evaluating-llm-text-summarization/

**Claim:** Practitioner consensus across evaluation frameworks (SumAutoEval, CREAM, deepchecks.com review) holds that structured output formats — discrete sections per agenda item, explicit action-item lists, clearly labeled decision records — make omissions detectable that would be invisible in prose summaries. The mechanism is that structured format creates binary coverage slots: an agenda item either has a summary section or it does not, so omission is self-evident. Prose summaries can weave around omitted content without creating an obvious gap. Scope: applies when the meeting has a known agenda or recurring structure; less applicable to unstructured brainstorming sessions. Practical implication: the meeting notes kit should mandate structured output (agenda-keyed sections, action item table with owner/deadline slots) as the default format, not because it improves generation quality, but because it makes omissions visible to the reviewer.

---

### [key: minority-speaker-omission-bias]
- evidence: consensus
- group: failure-modes
- sources: https://arxiv.org/html/2509.15901, https://arxiv.org/abs/2211.07145

**Claim:** Practitioner consensus and meeting summarization research note that contributions from speakers who have fewer turns or shorter utterances are systematically more likely to be omitted than contributions from dominant speakers. The mechanism is that models implicitly weight content by volume of discussion: a point raised once briefly is less likely to appear in extracted facts than a point debated at length, even if the brief point is more consequential (e.g., a final decision stated in one sentence after a long debate). Scope: most pronounced in meetings with unequal power dynamics or where subject-matter experts make brief but critical interventions. Practical implication: the summarizer procedure should instruct the model to consider each speaker's contributions independently, regardless of utterance volume, and flag any speaker whose content does not appear in the draft summary for a targeted completeness check.

---

### [key: extrinsic-validation-catches-omissions-intrinsic-misses]
- evidence: consensus
- group: completeness
- sources: https://deepchecks.com/advanced-techniques-evaluating-llm-text-summarization/, https://arxiv.org/html/2412.19906v1

**Claim:** Practitioner consensus (deepchecks.com evaluation guide; SumAutoEval paper) holds that intrinsic metrics (ROUGE, BERTScore, readability) systematically miss omissions that extrinsic or task-based evaluation catches. A summary can score highly on all intrinsic metrics while failing to support the downstream task (e.g., a team cannot identify who owns action items, or cannot reconstruct the decision rationale). The mechanism is that intrinsic metrics measure surface properties of the text in isolation; extrinsic evaluation tests whether the summary actually serves its purpose. Scope: this gap is largest for high-stakes meeting outputs like legal decisions, budget approvals, and engineering commitments. Practical implication: the meeting notes kit should include an extrinsic check list — can a reader who was not in the meeting identify: all action items and owners, all decisions and their rationale, all open issues deferred to the next meeting? Any gap on these functional questions signals an omission regardless of metric scores.

---

### [key: omission-dataset-absence-prior-to-2023]
- evidence: empirical
- group: completeness
- sources: https://arxiv.org/abs/2211.07145

**Claim:** Prior to the OLDS dataset (ACL 2023, arXiv 2211.07145), no high-quality annotated dataset existed specifically for omission in dialogue summarization. This means the research literature on what gets omitted and why was based on ad hoc analysis rather than systematic measurement. The mechanism is an incentive gap: omission is harder to annotate than hallucination (hallucination produces visible wrong content; omission requires knowing what should have been there), so benchmarks defaulted to faithfulness and fluency rather than completeness. Scope: this is a research infrastructure gap that limits the confidence of empirical omission-rate numbers available before 2023. Practical implication: claims about specific omission rates from pre-2023 literature should be treated as indicative rather than precise; procedures should be designed conservatively, assuming omission rates are higher than measured.

---

## Null results
- pre-read vs simultaneous summarization completeness first pass omission empirical — no studies directly comparing a pre-reading pass vs. simultaneous summarization in terms of first-pass omission rates were found; the closest finding was about presenting the already-read portion improving remainder summarization quality, which is a different construct

## New angles surfaced
- Speaker-role-weighted summarization: whether assigning explicit importance weights to speakers (e.g., decision-maker vs. contributor) reduces minority-speaker omission — no empirical study found on this
- Chunked vs. full-context summarization completeness tradeoffs: empirical comparison of sliding-window vs. full-context approaches specifically for completeness on meeting transcripts — found general LLM context literature but no meeting-specific controlled study
- Agenda-injection as a completeness scaffold: whether providing the meeting agenda as a structured prompt constraint reduces omission of agenda items — mentioned in practitioner literature but not empirically measured
- Action-item-specific recall benchmarks: no benchmark was found specifically measuring recall of action items (owner + task + deadline) as distinct from general content completeness — this is a gap for the kit-maker
- Human-in-the-loop completeness correction: no empirical study found on how much human review time is required and which omission types humans catch most reliably vs. miss
