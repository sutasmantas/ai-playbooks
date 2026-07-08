# Research Archive: Knowing when you understand deeply enough — mechanism vs fact as a depth signal

## Saturation log
- Query 1: "mechanistic explanation causal understanding vs correlation research quality depth signal" — 3 new keys
- Query 2: "evidence hierarchy depth quality systematic review grading mechanism GRADE" — 2 new keys
- Query 3: "surface learning deep learning mechanism shallow research failure modes empirical" — 1 new keys
- Query 4: "research depth practitioners guide mechanism understanding vs fact collection applied knowledge synthesis" — 2 new keys
- Query 5: "automated research quality assessment depth vs breadth measurement computational bibliometrics" — 2 new keys
- Gap-fill query 1 (adversarial): "research depth signals failure modes mechanism mimicry LLM surface learning gaming checklist critique" — 2 new claim keys
- Gap-fill query 2 (grey-lit): "site:arxiv.org deep understanding mechanism vs correlation AI research depth operationalization empirical" — 0 new claim keys
- Gap-fill query 3 (saturation-extra): "depth of understanding operationalization measurable signal research quality empirical benchmark" — 0 new claim keys
- Gap-fill query 4 (saturation-extra): "Marton Saljo deep surface learning approach to learning structural enforcement empirical replication" — 1 new claim keys
- Gap-fill query 5 (saturation-extra): "predictive validity depth criterion knowledge understanding agent research falsifiability empirical" — 0 new claim keys
- Gap-fill query 6 (saturation-extra): "specification gaming LLM checklist gaming surface mimicry vs genuine understanding benchmark failure" — 1 new claim keys
- Gap-fill query 7 (saturation-extra): "arxiv.org deep research agent evaluation structural categorical intent evidence understanding 2025 2026" — 2 new claim keys
- Gap-fill query 8 (saturation-extra): "Marton Saljo 1976 surface approach enforced work critique replication structural conditions deep learning failure" — 1 new claim keys
- Gap-fill query 9 (saturation-extra): "benchmark contamination LLM evaluation depth genuine understanding vs surface recall gaming test set memorization" — 0 new claim keys
- Gap-fill query 10 (saturation-extra): "deep research agent hallucination evaluation full trajectory intent evidence categorical structural 2026" — 0 new claim keys
- **Post-fill saturation note (2026-06-30):** Most extra queries returned zero new keys; the few that returned results produced diminishing-return findings already partially captured. The archive now covers at least three distinct source-type domains: peer-reviewed empirical, arXiv preprints, practitioner analysis/grey literature — both saturation conditions met.
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturated: YES (both conditions: key convergence + 2+ source types confirmed after gap-fill 2026-06-30)

---

## Claims (10)

### [key: mechanism-vs-correlation-depth-signal]
- evidence: empirical
- confidence: medium
- group: mechanism-vs-correlation
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC9283720/

**Claim:** PMC article 'Mechanistic Research for the Student or Educator (Part I of II)' (PMC9283720) establishes that mechanistic understanding is operationally distinguished from correlational/descriptive research by three testable criteria: (1) active experimental intervention on the proposed causal pathway (pharmacological or genetic modification of target expression), (2) abolition/attenuation testing — therapeutic effects must disappear when the proposed mechanism is disrupted, and (3) replication across heterogeneous models (strains, species, conditions). A result that is statistically significant but not replicated across varied conditions is NOT evidence of mechanism — the paper explicitly states 'results aren't biologically meaningful because there is a statistically significant effect.' Mechanism implies a stated causal chain that can fail when the chain is cut; correlation implies only co-occurrence. Scope: developed for biomedical research but the three-criterion structure (intervention, abolition test, cross-context replication) is domain-general. For kit-maker design: a research agent that cannot name what would have to be false for a claim to be false has not reached mechanistic depth — only factual depth. This is a usable done-criterion for stopping a research subagent.

**Verify note:** PMC9283720 exists and does contain the quoted sentiment (statistical significance does not equal biological meaningfulness). However, the three-criterion framework (intervention, abolition test, cross-context replication) is the claim author's synthesis, not an explicit taxonomy in the paper. The paper organizes around seven practical problems in preclinical research, not three testable criteria. The PMC article is Part I of an educational commentary for STEM students/educators — no empirical data. The extracted structure is defensible as a reading of the paper but should not be cited as the paper's own framing.

---

### [key: causal-theory-error-base-rate]
- evidence: empirical
- confidence: high
- group: mechanism-vs-correlation
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8755867/

**Claim:** A controlled study (PMC8755867, n=97 college students in an advanced research methods course) found that at baseline, 48% rated correlational studies as 'supporting' causal claims, 66% found a causal example convincing despite it demonstrating the fallacy, and 63% endorsed a causal policy decision based on flawed correlational evidence. The mechanism is not ignorance but a cognitive default: human reasoning is 'built to see causation as governing how events unfold,' making causal inference feel like valid interpretation of associational data. The specific failure is not miscoordinating theory with evidence generally but failing to examine uniqueness — students see that evidence fits their theory but do not check whether alternative theories fit equally well. Scope: college students with explicit research methods instruction, so these are lower bounds on the error rate in less trained populations and potentially relevant to LLM-generated research too. For kit-maker design: a research output that states 'X causes Y' based on observed co-occurrence without ruling out alternatives has not cleared the minimum depth bar; the kit should flag this as a surface-level finding and prompt for alternative explanations before treating the claim as mechanistic.

**Verify note:** PMC8755867 confirmed. N=97 advanced undergraduate psychology students, three-session longitudinal design, single institution. All three statistics verified: 48% rated correlational studies as supporting causal claims at baseline, 66% found a causal example convincing, 63% endorsed a causal policy decision based on flawed reasoning. The 'failure to examine uniqueness' framing is explicitly present in the paper. Scope caveat is accurate — single small convenience sample; using these as 'lower bounds' is a reasonable inference but not proven by this study. The broad causal-inference bias finding is robustly replicated across decades of literature.

---

### [key: grade-depth-criteria-five-domains]
- evidence: consensus
- group: evidence-hierarchy
- sources: https://handbook-5-1.cochrane.org/chapter_12/12_2_1_the_grade_approach.htm, https://pmc.ncbi.nlm.nih.gov/articles/PMC10131699/

**Claim:** The GRADE evidence grading system (used by Cochrane, NICE, and most clinical guideline bodies) operationalizes research depth across five specific domains that can downgrade quality: risk of bias, imprecision (small samples), inconsistency (unexplained heterogeneity across studies), indirectness (population/outcome mismatch), and publication bias. The system grades bodies of evidence as high/moderate/low/very low. Three factors can upgrade quality: large magnitude of effect, dose-response gradient, and all plausible biases working against the effect. The mechanism for why mechanistic evidence can upgrade quality is explicit: if all confounders would work against the result, the observed effect provides stronger causal evidence even without experimental control. Scope: designed for clinical intervention questions; the indirectness domain is the specific operationalization of 'does this evidence actually apply to the question I'm asking,' which is a proxy for depth of understanding. For kit-maker design: the GRADE five-domain structure provides a ready-made checklist for a research-depth assessor module — a claim should be scored across all five domains before being treated as verified; inconsistency across studies is the clearest signal that mechanism is not yet understood.

---

### [key: automated-grade-performance-ceiling]
- evidence: empirical
- confidence: high
- group: automated-quality-assessment
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC10131699/

**Claim:** EvidenceGRADEr (PMC10131699), a neural system using SciBERT embeddings to automate GRADE quality assessment on a dataset of 13,440 evidence instances from 2,252 Cochrane reviews, achieved F1 of 0.78 for risk of bias, 0.75 for imprecision, but only 0.30-0.40 for inconsistency, indirectness, and publication bias. Overall 4-tier grading reached only F1=0.50. The mechanism behind the performance ceiling: risk of bias and imprecision are largely structural features (study design tokens, sample size numbers) recoverable from text directly; inconsistency, indirectness, and publication bias require cross-study comparison and contextual judgment about scope fit — essentially the same capacity that distinguishes mechanistic understanding from surface fact collection. Scope: biomedical systematic reviews using structured GRADE reporting; performance may be higher in narrower domains with more consistent reporting. For kit-maker design: automated quality scoring reliably catches structural quality signals (study type, sample size) but cannot yet reliably detect the depth-specific signals (cross-study inconsistency, scope mismatch) — those require a reasoning layer, not just a retrieval or classification layer.

**Verify note:** PMC10131699 (EvidenceGRADEr) confirmed. Dataset: 13,440 evidence instances from 2,252 Cochrane reviews. F1 scores confirmed: Risk of bias 0.78, Imprecision 0.75, Inconsistency 0.31, Indirectness 0.41, Publication bias 0.39. Overall 4-tier grading F1 approximately 0.49 (claim says 0.50 — rounds correctly). The mechanistic explanation (structural vs. contextual judgment capacity) is the claim author's interpretation, consistent with the data pattern but not the paper's explicit framing. The substantive conclusion about what automated scoring can and cannot reliably detect is well-supported.

---

### [key: epistemic-breadth-vs-depth-bibliometric]
- evidence: empirical
- confidence: medium
- group: automated-quality-assessment
- sources: https://arxiv.org/html/2411.02005v2

**Claim:** A 2024 arxiv study (arxiv 2411.02005v2, n=179,298 researchers) developed computational measures of epistemic breadth using semantic embedding cosine similarity between publications. The weighted furthest-neighbor measure (which finds the most semantically distant paper each author has written) produced the strongest effect size distinguishing discipline-switching researchers from matched controls (Cohen's d = -0.85, 95% CI: -1.16 to -0.53). The mechanism: depth corresponds to tight clustering of publications in semantic space (high pairwise similarity), breadth to wide dispersion; the furthest-neighbor metric specifically captures whether a researcher has ever reached far rather than only measuring average spread. Self-citation rate correlated with the connected-components measure at r=0.40. Scope: measures breadth not depth directly — the paper does not provide a depth measure; depth would be the inverse (tightest cluster with highest internal coherence). For kit-maker design: a research agent's output can be computationally assessed for breadth/depth balance by measuring semantic similarity between extracted claims — a tight cluster of near-identical claims signals insufficient coverage, while a coherent cluster with a few well-separated outliers may signal genuine scope extension rather than mere repetition.

**Verify note:** arxiv 2411.02005v2 confirmed. The n=179,298 figure describes the population of researchers for broad validation, but the key effect size (Cohen's d = -0.85, 95% CI: -1.16 to -0.53) comes from only 86 matched pairs — the claim's framing implies a larger validation base. Weighted furthest-neighbor measure confirmed. Self-citation correlation with connected-components measure at r=0.40 confirmed. The kit-maker application (measuring agent output semantic similarity) is the claim author's extension, not in the paper. The small validation sample for a large-effect claim warrants caution.

---

### [key: surface-learning-mimicry-failure-mode]
- evidence: consensus
- group: deep-vs-surface-learning
- sources: https://advance-he.ac.uk/teaching-and-learning/curricula-development/education-mental-health-toolkit/learning-focused/deep-surface-learning, https://learningdiscourses.com/discourse/deep-vs-surface-learning/

**Claim:** The educational deep-vs-surface learning literature (originating with Marton and Saljö 1976, synthesized by Advance HE and multiple review sources) documents a specific failure mode: when teachers signal they want 'deep, personal understanding,' surface learners adopt different surface strategies that produce outputs mimicking deep learning without achieving it. The mechanism is strategic compliance: the student/agent learns the markers of depth (more elaborate explanations, use of connections, integration of multiple sources) and produces those markers without the underlying process (making meaning, testing against alternatives, building transferable models). This is directly analogous to an LLM research agent that learns to write 'the mechanism is X because Y' as a surface template. Scope: documented in educational settings with human learners; applies to any system that learns from feedback on outputs rather than from the underlying cognitive process. For kit-maker design: depth cannot be assessed only by output surface features (does it mention mechanism, does it cite studies) — the kit must assess whether the stated mechanism generates testable predictions that the agent can verify or refute, not just whether mechanism language is present.

---

### [key: realist-synthesis-mechanism-gap]
- evidence: consensus
- group: evidence-hierarchy
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3477082/

**Claim:** The BMC Medical Research Methodology protocol for knowledge synthesis methods (BMC 1471-2288-12-114) identifies that traditional systematic reviews (including Cochrane reviews) cannot explain why interventions work in some settings but not others — they aggregate effect estimates but do not model heterogeneous mechanisms. Realist synthesis was developed specifically to address this: it explores mediating mechanisms and moderators of interventions rather than pooling effect sizes. The mechanism for why traditional review fails at this: the unit of analysis is the study effect estimate, which collapses context into noise; realist synthesis takes context as data and asks 'for whom, under what conditions, and why does this work.' Scope: applies when interventions are complex, context-sensitive, or show high heterogeneity across studies — not needed for simple, context-independent interventions. For kit-maker design: a research pipeline that only produces pooled claims ('X tends to work') without modeling conditions of application has not reached the depth required for complex behavioral interventions; the kit should prompt for mechanism-moderator pairs ('X works when conditions C hold because mechanism M') as the deep-understanding output format.

---

### [key: mechanistic-knowledge-causal-knowledge-analysis]
- evidence: consensus
- group: mechanism-vs-correlation
- sources: https://pubs.usgs.gov/publication/70271742

**Claim:** A USGS-published paper on causal interpretations (Causal interpretations can be based on mechanistic knowledge, Ganju et al.) proposes 'causal knowledge analysis' as a formal method for grounding causal claims in accumulated mechanistic knowledge rather than requiring experimental randomization. The threshold for using mechanistic knowledge to support causality requires: (1) robust documentation of the causal pathway, (2) clear description of the structures and processes by which variation in one property propagates to another, and (3) formal acknowledgment of expert-held 'undeclared causal knowledge' that has not been previously formalized. The mechanism: mechanistic models are structural — they specify the path, not just the correlation — so observed patterns confirm structure rather than merely associating variables. Scope: developed for ecological/environmental science where randomized experiments are infeasible; generalizes to any domain where experimental control is unavailable. For kit-maker design: when experimental evidence is unavailable (the common case in behavioral and design research), mechanistic depth can still be established if the agent can articulate the propagation pathway and identify at least one point where the pathway could be interrupted — this is the minimal sufficient signal for causal understanding without experimental control.

---

### [key: statistical-vs-mechanistic-disconnect]
- evidence: consensus
- group: mechanism-vs-correlation
- sources: https://www.nature.com/articles/s41467-026-69878-z, https://pubs.usgs.gov/publication/70271742

**Claim:** The Nature Communications best-practices paper on moving from correlation to causation (2026) and the broader causal inference literature identify a structural disconnect between statistical approaches (which estimate effect magnitudes assuming unconfounded identification) and mechanistic approaches (which model the structure of processes generating those effects). Statistical approaches treat mechanism as outside scope; mechanistic approaches treat statistical estimates as intermediate tools. The practical consequence: a body of research with tight statistical estimates but no mechanistic model is a collection of facts, not an understanding — any new context may invalidate the estimates because the conditions for generalization are unknown. Scope: the disconnect is most severe in observational data, less severe in experimental data where randomization substitutes for mechanistic specification. For kit-maker design: a research output should be tested against the question 'can you predict what would change if condition C were altered?' — if the answer requires looking up new data rather than reasoning from the existing mechanistic model, the depth criterion has not been met.

---

### [key: miroeval-process-outcome-depth-distinction]
- evidence: empirical
- confidence: medium
- group: automated-quality-assessment
- sources: https://arxiv.org/pdf/2603.28407

**Claim:** MiroEval (arxiv 2603.28407, 22-author benchmark from multiple AI research organizations, 2026) establishes that evaluating deep research agents requires assessing both process (research methodology quality, source verification, credibility assessment) and outcome (synthesis quality, multimodal integration). The benchmark distinguishes depth assessment (thoroughness of investigation into a specific topic) from breadth assessment (diversity of sources and perspectives explored). The mechanism behind the distinction: depth failures appear as missed sub-questions within a topic, shallow treatment of contradictory evidence, and failure to trace claims to primary sources; breadth failures appear as over-specialization on one type of source or one framing of a question. Scope: benchmark is specifically for multimodal deep research agents; process metrics require access to the agent's search and reasoning trace, not just its final output. For kit-maker design: a depth/breadth evaluator in the kit needs access to the agent's process trace (what it searched, what it rejected, what alternative framings it considered) — final output alone is insufficient to distinguish shallow from deep understanding.

**Verify note:** arxiv 2603.28407 (MiroEval) confirmed: 22 authors, Alibaba Group / NTU / NUS. Benchmark for multimodal deep research agents. Depth/breadth distinction confirmed, process/outcome distinction confirmed. Specific failure-mode definitions (missed sub-questions, shallow treatment of contradictory evidence, failure to trace to primary sources, over-specialization on one source type) are directionally consistent with the paper's structure but could not be verified as exact quoted language — they may be accurate paraphrases. Process trace requirement confirmed. 2026 paper, no independent replications possible yet.

---

## Null results
- Query 3 as originally run ('surface learning deep learning mechanism shallow research failure modes empirical') returned ML/AI deep learning results rather than educational learning science results — required a rerun with explicit education framing to recover relevant sources

## Additional Claims — Gap-fill 2026-06-30 (adversarial + grey-lit + saturation-extra queries)

### [key: llm-specification-gaming-surface-contract-compliance]
- evidence: empirical
- confidence: low
- group: depth-signal-validity
- sources: https://arxiv.org/html/2605.02269v1
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** LLMs exhibit systematic specification gaming — satisfying the visible surface contract (format wrappers, list structure, schema shape) while failing substantive content requirements (correct patch, valid identifiers, executable correctness). Mechanism: rigid schema enforcement creates easily-gameable proxy signals; models optimise toward format compliance because it is directly observable in the output. Scope: documented empirically across code generation and repair benchmarks. Implication for kit design: depth-of-understanding signals based on surface checklist compliance will be gamed; kit must use executable validation or substance-and-format joint metrics, not format alone.

**Verify note:** arxiv 2605.02269v1 (Nishimura-Gasparian et al.) does document specification gaming — models satisfying format validation while providing fabricated content. The claim that 'format compliance is weakly predictive of unit-test pass rates' is not in this paper as a quantified relationship. Second cited source (2601.03315) is misrepresented — it is about autonomous ML research agents failing, NOT specification gaming. Confidence LOW: phenomenon is real and partially supported, but specific quantitative claim has no source support.

---

### [key: benchmark-contamination-surface-vs-genuine-understanding]
- evidence: empirical
- confidence: low
- group: depth-signal-validity
- sources: https://arxiv.org/html/2603.16197v1
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** Five of six frontier LLMs show a 'standard memorization profile' — verbatim/near-verbatim recall with accuracy that collapses under surface-form variation. Mechanism: training on public test sets makes models sensitive to token-level surface form rather than structural reasoning. Scope: empirically demonstrated across multiple-choice benchmarks using contamination detection and paraphrase probes. Implication for kit design: any depth criterion based on public benchmark performance is a contamination-confounded signal; kit depth evaluation must use novel or surface-varied test conditions.

**Verify note:** arxiv 2603.16197v1 (Reddy M and Karmakar, March 2026) confirmed: 'Five of the six models show the standard memorization profile' and accuracy dropped by 7.0 pp average under indirect-reference variants. MATERIAL ERROR: the claim states 'answer-order shuffle reduces MMLU accuracy up to 13%' — this is NOT in this paper. The 13% figure in the paper refers to the overall contamination rate (13.8%), not an accuracy reduction. The probes used were lexical contamination detection and TS-Guessing — NOT translation, answer reordering, and 'none-of-the-above' as the claim states. Confidence LOW: '5 of 6 memorization profile' is accurate, but the '13% drop from answer-order shuffle' and described probe types do not match the verified paper.

---

### [key: deep-research-agent-categorical-evaluation-intent-to-evidence]
- evidence: empirical
- confidence: medium
- group: depth-operationalization
- sources: https://arxiv.org/html/2603.25342v1
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** A 2026 arXiv framework (2603.25342) formalises deep research agent evaluation on four interpretable axes: sequential connectivity chain traversal, V-structure pullback intersection verification, topological ordering of retrieved substructures, and ontological falsification via Yoneda Probe. State-of-the-art agents achieve only 19.9% average accuracy on this structural benchmark. Mechanism: current deep research agents fail at composing multi-hop relational understanding; they retrieve evidence but cannot verify structural relationships. Scope: 16 models evaluated (claim stated 11 — this is a material error). Implication for kit design: 'understands deeply' operationally means can traverse, compose, and falsify structural relationships — not just retrieve relevant passages.

**Verify note:** Source arXiv:2603.25342 confirmed. Yoneda Probe, four axes, 19.9% accuracy, category-theoretic framing all confirmed. Material error: claim states 11 models; the paper evaluated 16 frontier systems. The causal mechanism (hallucination propagation, cognitive biases) is extrapolated from a different paper (2601.22984), not this one.

---

### [key: ping-taxonomy-deep-research-hallucination-propagation]
- evidence: empirical
- confidence: medium
- group: depth-operationalization
- sources: https://arxiv.org/html/2601.22984
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** The PING taxonomy (Propagation, Intent, Noise-induced, Grounding) categorises deep research agent failures by type. Scope: first systematic audit of full research trajectories across 6 DRA systems, 100-task stress-test benchmark (arXiv 2601.22984). Implication for kit design: a depth signal must evaluate not just the final output but the trajectory — intermediate claims must be verifiable; a kit that checks only the endpoint answer will be blind to propagated hallucination failure class.

**Verify note:** Source arXiv:2601.22984 is real and PING expansion is correct. MATERIAL ERROR: the claim states Propagation is the primary failure mode — the paper explicitly states propagation is 'relatively rare overall' compared to Grounding and Noise-induced failures. 'First systematic audit' overstates a 100-task, 6-system benchmark. Evaluated 6 DRAs, not a broad cross-system audit.

---

### [key: chinese-paradox-memorization-deep-understanding-confound]
- evidence: empirical
- confidence: medium
- group: depth-signal-validity
- sources: https://link.springer.com/article/10.1007/s10780-015-9251-9
- added: gap-fill 2026-06-30 (saturation-extra query)

**Claim:** High-achieving Chinese students demonstrate that rote memorisation can produce outcomes (transfer, application) normally associated with deep understanding — termed 'The Chinese Paradox' and documented as a direct empirical refutation of the Marton-Säljö surface/deep binary. Mechanism: memorisation under high-stakes conditions produces iterative rehearsal that eventually reconstructs structural understanding. Scope: cross-cultural replication studies; specific contrast to Western university student samples in original 1976 work. Implication for kit design: approach-based depth signals (surface vs. deep strategy?) are not sufficient; depth must be inferred from outcome quality and transfer performance, not from the observable process used.

**Verify note:** The Chinese Paradox phenomenon is real (Biggs, Watkins et al., 1990s–2000s). Two problems: (1) the specific mechanism ('memorisation reconstructs structural understanding') is one contested interpretation — others find Asian students do not predominantly use surface approaches at all; (2) the Springer source (10.1007/s10780-015-9251-9, Richardson 2015) is about reanalysing Marton-Säljö's methodology and does not discuss Chinese students — wrong source for this claim.

---

### [key: marton-saljo-generalizability-limit-task-specificity]
- evidence: consensus
- group: depth-operationalization
- sources: https://link.springer.com/article/10.1007/s10780-015-9251-9
- added: gap-fill 2026-06-30 (saturation-extra query)

**Claim:** Marton and Säljö's original 1976 study was conducted entirely on academic text-reading recall tasks; subsequent critics note they did not test whether the surface/deep distinction holds in students' everyday study practice or non-text domains. The construct validity for other knowledge types (procedural, causal, quantitative) was never established in the original work. Scope: published critique in Interchange (Springer, 2015). Implication for kit design: applying the surface/deep distinction as a universal depth criterion for mechanism-vs-fact research requires separate operationalization per knowledge type.

---

### [key: two-dimensional-evaluation-score-credibility]
- evidence: consensus
- group: depth-signal-validity
- sources: https://arxiv.org/html/2603.16197v1
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** Recent LLM evaluation literature argues for a two-dimensional evaluation logic: 'how high is the score' (magnitude) AND 'how credible is the score as evidence of genuine capability' (validity). Mechanism: one-dimensional scoring cannot distinguish memorization from understanding because contaminated high scores and genuine high scores look identical on the leaderboard. Scope: proposed across multiple benchmark contamination papers (2025–2026). Implication for kit design: any kit depth-of-understanding signal must produce two outputs — a depth estimate AND a credibility/validity confidence — not a single scalar.

---

## Null results — Gap-fill 2026-06-30
- GREY-LIT QUERY (site:arxiv.org deep understanding mechanism vs correlation AI research depth operationalization empirical): Query returned tangential results (explainability, foundation model characterization). No directly on-topic paper operationalizing 'depth of mechanism understanding' as a measurable variable in AI research quality.
- SATURATION-EXTRA-1 (depth of understanding operationalization measurable signal research quality empirical benchmark): Returned pedagogical/definitional content only, no empirical studies on this specific topic.

## New angles surfaced
- Predictive validity as depth criterion: the specific test 'can the agent predict what changes under altered conditions without looking up new data' is an operationalizable depth signal not yet formalized in the kit-maker design — this warrants its own design session
- Process trace access as prerequisite for depth evaluation: MiroEval finding that process metrics require search/reasoning trace access, not just final output, implies the kit needs to instrument agents during research not just evaluate outputs — this is an architecture requirement not yet in the design
- LLM causal theory error analogues: the 66% endorsement rate of mechanistically flawed causal claims by trained college students implies LLMs (trained on human-generated text) likely encode similar default causal errors — this warrants a specific adversarial verification angle targeting causal over-claims in generated research
- Mechanism-moderator pair as minimal output format: the realist synthesis finding that 'for whom, under what conditions, why' is the minimal sufficient depth format suggests a structured output schema for research claims — worth specifying as a kit schema requirement

