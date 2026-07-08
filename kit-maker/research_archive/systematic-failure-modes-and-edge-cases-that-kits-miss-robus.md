# Research Archive: Systematic failure modes and edge cases that kits miss — robustness gaps in AI instruction sets

## Saturation log
- Query 1: "edge case failure modes AI instruction following robustness analysis empirical" — 6 new keys
- Query 2: "systematic review AI agent failure modes robustness gaps instruction" — 4 new keys
- Query 3: "robustness failures LLM unexpected inputs edge cases documentation empirical" — 4 new keys
- Query 4: "robustness testing practitioners AI kit coverage gaps how to find applied" — 2 new keys
- Query 5: "adversarial robustness testing automated edge case generation LLM quantitative" — 3 new keys
- Saturated: NO — review needed

---

## Claims (19)

### [key: consistency-capability-disconnect]
- evidence: empirical
- confidence: medium
- group: reliability-evaluation-gaps
- sources: https://arxiv.org/html/2602.16666v1

**Claim:** Towards a Science of AI Agent Reliability (arXiv 2602.16666, 2026) found that over 18 months of model releases, accuracy rose steadily while overall reliability showed only small improvements — on open-ended tasks (GAIA benchmark), reliability improvement was negligible despite significant capability gains. Mechanism: capability training optimizes for task completion on benchmark distributions; reliability dimensions (consistency, discrimination, robustness) are orthogonal optimization targets not addressed by standard RLHF/SFT pipelines. Scope: applies to all transformer-based agents evaluated on episodic benchmarks; effect is strongest on open-ended vs. structured tasks. Kit implication: a kit that only checks for capability (can the agent do the task?) while omitting reliability probes (does it do it consistently across runs and input variants?) will ship agents that benchmark well but fail in production.

**Verify note:** Paper is real (arXiv:2602.16666, Rabanser, Kapoor et al., Princeton). 18 months of model releases confirmed. GAIA benchmark used; reliability improvement on GAIA described as 'barely any improvement even amongst the latest models' — confirmed. Core finding (reliability gains lag behind capability progress) confirmed. Minor uncertainties: year attributed as 2026 but date is not definitively confirmed in source (models tracked to late 2025). The distinction between open-ended (GAIA, barely any improvement) and structured tasks (tau-bench, moderate gains) is accurate and present in the paper. Preprint from one group; reliability framework not yet independently replicated.

---

### [key: model-scale-paradox]
- evidence: empirical
- confidence: medium
- group: reliability-evaluation-gaps
- sources: https://arxiv.org/html/2602.16666v1

**Claim:** The same reliability study (arXiv 2602.16666) found that larger models often exhibit lower outcome consistency than smaller counterparts: 'larger models have more ways to solve a task, which increases run-to-run variability.' Mechanism: a larger hypothesis space means more equally-plausible solution paths, so stochastic decoding selects different ones across runs even when all are correct on average. Scope: affects sequential, multi-step agentic tasks where path order matters; single-step classification tasks show normal scaling. Kit implication: instruction kits that assume 'use the biggest available model' as a safety margin for consistency are miscalibrated — kits must specify consistency-targeted evaluation, not just capability tier selection.

**Verify note:** Source exists (arXiv 2602.16666, Rabanser et al., ICML 2026 accepted). Both exact quotes confirmed: 'larger models have more ways to solve a task, which increases run-to-run variability' and 'smaller models often achieve equal or higher consistency.' Finding is for sequence consistency on GAIA (165 tasks) and tau-bench (26 tasks), K=5 runs. The mechanistic explanation is the authors' proposed hypothesis, not causally validated. The scope restriction to sequential tasks is reasonable but is not directly compared against single-step tasks within the same study. Modest n-size limits generalization confidence. No independent replication of this specific cross-scale finding yet.

---

### [key: prompt-sensitivity-semantic-invariance]
- evidence: empirical
- confidence: medium
- group: instruction-sensitivity
- sources: https://arxiv.org/html/2602.16666v1

**Claim:** The reliability study (arXiv 2602.16666) tested prompt robustness across semantically equivalent paraphrases (e.g., 'cancel my subscription' vs. 'end my plan') and found performance degrades substantially — with non-monotonic improvement trajectories across model versions, suggesting prompt robustness is not systematically optimized during training. Mechanism: models are trained on surface form statistics; semantic equivalence classes are not explicitly represented, so paraphrase creates distribution shift. Scope: applies to natural-language instruction following; structured/formal syntax (code, JSON) less affected. Kit implication: instruction kits must include paraphrase-invariance tests as a core coverage requirement, not an optional stress test — a kit whose rules only hold for the exact wording in which they were written is not robust.

**Verify note:** Source exists (arXiv 2602.16666). The paraphrase robustness dimension is tested (J=5 GPT-4o-generated paraphrases). Directional finding confirmed: sensitivity varies substantially across models; frontier models show 'modest but not dependable improvements.' However, two precision problems: (1) 'non-monotonic improvement trajectories' is an invented phrase not in the source — the paper says 'not dependable improvements,' which is weaker; (2) no specific degradation numbers appear in the main text, only in figures; (3) the example 'cancel my subscription vs. end my plan' does not appear to be a verbatim test case from this paper. The directional finding is real and directionally replicated in broader NLP paraphrase literature (Lu et al. 2022, Mizrahi et al. 2024).

---

### [key: calibration-discrimination-divergence]
- evidence: empirical
- confidence: high
- group: self-assessment-failure
- sources: https://arxiv.org/html/2602.16666v1

**Claim:** Reliability benchmarking (arXiv 2602.16666) found that calibration (confidence-accuracy alignment) and discrimination (ability to distinguish correct from incorrect predictions) move in opposite directions: calibration improved in recent models (especially Claude variants) while discrimination worsened on GAIA despite improving on structured τ-bench tasks. Mechanism: models have learned to express appropriate aggregate uncertainty without learning to identify which specific instances they will fail on — these are separable skills. Scope: divergence strongest on open-ended, multi-step tasks; structured customer-service tasks show alignment. Kit implication: kits that rely on model self-reported confidence to trigger human escalation will get calibrated-sounding but poorly-discriminating signals — the agent says 'I'm 60% sure' accurately on average but cannot distinguish its 40%-failure cases from its 95%-success cases.

**Verify note:** Source exists (arXiv 2602.16666). All three factual assertions confirmed with near-exact quotes: calibration improved in recent models; Claude models show stronger calibration on both benchmarks; discrimination 'has in fact mostly worsened' on GAIA while improving on tau-bench. These are measured separately as distinct metrics. The mechanistic interpretation (models learn aggregate uncertainty without instance-level discrimination) is a reasonable inference, not the paper's stated explanation, but clearly labeled as inference in the claim. Scope restriction to open-ended vs. structured tasks maps correctly to the GAIA vs. tau-bench split. Single study, no independent replication yet, but finding is internally well-supported.

---

### [key: distribution-collapse-invisible-to-accuracy]
- evidence: empirical
- confidence: low
- group: production-drift-failures
- sources: https://arxiv.org/html/2605.01604

**Claim:** Evaluating Agentic AI in the Wild (arXiv 2605.01604) documented production drift where accuracy remained flat at 0.86–0.88 across five weekly windows while diversity score collapsed from 0.200 to 0.030 (a 6.5x reduction), repeat rate reached 1.0, and entropy dropped from 0.979 to 0.867. The accuracy degradation followed 1–2 cycles later. Mechanism: the system converged on a small set of high-confidence responses, optimizing measurable accuracy while losing coverage of the true output distribution — a proxy-goal convergence failure. Scope: continuous production deployments with repeated request distributions; episodic benchmark settings cannot detect this. Kit implication: a kit that only validates accuracy metrics will miss a class of failures that are forewarned by distribution metrics — kits need entropy and diversity monitoring hooks, not just correctness checks.

**Verify note:** Source exists (arXiv 2605.01604, Pandey, May 2026). All specific numbers confirmed in the paper: accuracy 0.86-0.88 across five windows, diversity 0.200 to 0.030, repeat rate 1.000, entropy 0.979 to 0.867. Critical flaw: the study is entirely synthetic. The paper explicitly states it uses 'controlled traces that replicate the statistical signatures observed in production' — these are not measurements from a real deployed system. The claim says this was 'documented production drift,' which falsely presents simulated data as empirical observation. The paper is also a solo preprint by an unaffiliated independent researcher with no peer review. The concept (distribution collapse preceding accuracy degradation) is theoretically plausible and related to documented Goodhart's Law dynamics, but this source cannot support the empirical claim at the strength implied.

---

### [key: cascade-uncertainty-suppression]
- evidence: empirical
- confidence: low
- group: multi-step-pipeline-failures
- sources: https://arxiv.org/html/2605.01604

**Claim:** The production evaluation framework paper (arXiv 2605.01604) showed that a five-step pipeline with one low-confidence step (0.31) generated downstream mean confidence of 0.875, with overall pipeline confidence appearing 'reasonable at 0.762' despite ground-truth correctness of only 0.41 — a 0.35 divergence between internal and external signals. Mechanism: downstream steps treat upstream outputs as facts, compounding confidence from local conditional probability rather than tracking propagated uncertainty. Scope: multi-step pipelines where agents call agents or chain tool outputs; single-step inference is unaffected. Kit implication: instruction kits for multi-step agent pipelines must include explicit uncertainty propagation rules — each step must receive and forward confidence scores, not just outputs, or the kit will produce internally coherent but externally wrong results.

**Verify note:** Source exists (arXiv 2605.01604). All numbers confirmed: 0.31 confidence step, downstream mean 0.875, pipeline mean 0.762, ground-truth correctness 0.41, 0.35 divergence. Same critical flaw as FM-3/FM-4: entirely synthetic data constructed to illustrate the failure mode, not measured from real pipelines. Solo, unaffiliated, unreviewed preprint. The mechanism (uncertainty suppression through chained steps treating upstream outputs as facts) is theoretically sound and conceptually established in Bayesian network and multi-agent planning literature. But the precise numbers are artifacts of construction, not discovery. Citing them as measured production characteristics overstates evidential weight.

---

### [key: silent-tool-degradation]
- evidence: empirical
- confidence: low
- group: tool-dependency-failures
- sources: https://arxiv.org/html/2605.01604

**Claim:** The production agentic AI paper (arXiv 2605.01604) tracked a tool degradation failure where partial response rate rose from 4% to 58% across four production stages while external accuracy moved only -0.03 total — well within normal variation thresholds. Mechanism: tools return structurally valid but semantically incomplete data; downstream agents treat structural validity as semantic completeness. PAEF detected failure at stage 2 when partial rate crossed 20%, but standard accuracy metrics showed no signal. Scope: any pipeline with external tool or API dependencies; rate of increase is gradual enough to evade point-in-time testing. Kit implication: kits that do not specify tool-output completeness validation separate from tool-call success/failure will silently degrade; the kit needs explicit 'partial-response' detection rules, not just error-code handling.

**Verify note:** Source exists (arXiv 2605.01604). All numbers confirmed: partial response rate 4% (Stage 1) to 58% (Stage 4), accuracy drop -0.03 total, PAEF flagged at Stage 2 at 20% threshold. Same fatal design flaw: entirely synthetic data from controlled traces, solo preprint, no peer review, no institutional affiliation. The concept (structural validity masking semantic incompleteness) is realistic and the concern is legitimate. But 'documented production drift' language in the claim implies real-world observation that the source does not provide. No independent empirical study of this specific failure pattern in real production agentic systems is cited.

---

### [key: explanation-decoupling]
- evidence: empirical
- confidence: low
- group: explainability-failures
- sources: https://arxiv.org/html/2605.01604

**Claim:** The production evaluation paper (arXiv 2605.01604) found that SHAP attribution consistency score dropped from 0.907 to 0.357 with proxy feature ranking, while top-feature perturbation impact fell to 0.036 (vs. true signal 0.451) — yet accuracy was identical across correct and incorrect attribution cases. Mechanism: the model learned a spurious proxy feature that correlates with the correct answer in training but explanations become detached from actual decision logic. Scope: systems where post-hoc explainability is used for auditing or trust-building; direct input-output accuracy metrics will not surface this. Kit implication: a kit that treats explanation consistency as an optional audit artifact rather than a core reliability signal will ship systems that are explainable-looking but not actually explainable — explanation consistency metrics must be in the kit's definition of done.

**Verify note:** Source exists (arXiv 2605.01604). Numbers confirmed: SHAP consistency 0.907 to 0.357, perturbation impact 0.036 vs 0.451. Same source-level problems: entirely synthetic, solo preprint, unreviewed, unaffiliated. The claim states 'the model learned a spurious proxy feature' as if documenting a real system failure — the paper demonstrates only what the metrics would show if that scenario occurred, not that it did occur in any real deployment. The underlying concern about spurious proxy features in explainability is genuinely well-established (Adebayo et al. 2018 'Sanity Checks for Saliency Maps'; Rudin 2019), but that support comes from other literature, not from this paper. Kit implication may be sound; source cannot carry the evidential weight assigned.

---

### [key: code-robustness-first-line-omission]
- evidence: empirical
- confidence: medium
- group: code-generation-robustness
- sources: https://arxiv.org/html/2503.20197v1

**Claim:** Empirical study on LLM code robustness (arXiv 2503.20197) found that 43.1% of LLM-generated code is less robust than human-written equivalents, with over 90% of deficiencies stemming from missing conditional checks, and 70% of those omissions concentrated in the first line of code (input validation gates). Mechanism: LLMs optimize for generating plausible middle-of-function logic; defensive input validation is a low-frequency pattern in training data relative to core logic. Scope: tested on 230 Java tasks from CoderEval (repository-level context); effect is larger with smaller models. Kit implication: instruction kits for code-generating agents must include explicit 'validate inputs before processing' rules at the start of every function-generation prompt — relying on model defaults for defensive programming covers only 57% of cases.

**Verify note:** Source exists (arXiv 2503.20197, Li et al., Sun Yat-sen / Fudan, 2025). Multi-authored, university-affiliated. All three numbers confirmed verbatim: 43.1% less robust; over 90% from missing conditional checks; 70% of omissions in first line. Key scope limits: Java only; four small/medium code-specialized models (DeepSeekCoder 1.3B/6.7B, Qwen2.5-Coder 1.5B/7B); frontier models (GPT-4, Claude) not tested. Unreviewed preprint. The kit implication generalizes to 'LLMs' broadly, which overstates the evidence. The 57% coverage figure is correct arithmetic (100% - 43.1%) but reframes the result as a coverage claim across a broader model ecosystem than was tested. Adjacent literature (Perry et al. 2023) supports the directional concern for security/robustness gaps in LLM code, but the specific percentages and first-line concentration are novel to this study.

---

### [key: decoding-strategy-latent-awareness]
- evidence: empirical
- confidence: medium
- group: code-generation-robustness
- sources: https://arxiv.org/html/2503.20197v1

**Claim:** The same code robustness study (arXiv 2503.20197) found that in 69% of cases where a conditional statement was necessary but absent, the 'if' token still ranked 3rd or higher in the model's predicted token probabilities. Mechanism: greedy decoding selects the highest-probability next token, which is often not the defensive construct even when the model 'knows' it is needed — this is a decoding strategy failure, not a knowledge failure. Scope: applies to standard greedy/beam-search decoding; sampling strategies or constrained decoding could shift this. Kit implication: a kit instruction saying 'add input validation' is insufficient alone — the kit must either constrain the decoding path (e.g., force conditional constructs at function entry) or include a post-generation review step that specifically checks for first-line guards.

**Verify note:** Source exists (arXiv 2503.20197). Number confirmed verbatim: in 69% of cases where a conditional was needed but absent, 'if' token ranked 3rd or higher in predicted token probabilities. Same scope limits: Java only, 4 small models, unreviewed preprint. The 'decoding failure not knowledge failure' framing is the paper's own interpretation and is reasonable; the RobGen framework they develop acts on this inference. However, 'ranking 3rd' does not unambiguously mean the model 'knows' the guard is needed — it could reflect surface co-occurrence. The token probability interpretation requires care. Kit implication (instruction alone insufficient; need decoding constraint or post-generation review) is consistent with the paper's own proposed solution.

---

### [key: adversarial-perturbation-minimal-change]
- evidence: empirical
- confidence: medium
- group: adversarial-robustness
- sources: https://arxiv.org/html/2412.21016v1

**Claim:** AORTA framework study (arXiv 2412.21016) demonstrated that adversarial test cases required only 0.961%–16.811% word modification rate to induce misclassification in LLM-based NLP systems, with concrete examples showing ChatGPT flipping from 91% confidence NEGATIVE to 96% confidence POSITIVE after swapping 'want'→'hope' and 'debates'→'discussions'. Mechanism: LLMs encode statistical surface patterns from training; near-synonyms occupy adjacent but non-identical regions in the embedding space, sufficient to cross decision boundaries. Scope: classification and sentiment tasks validated; transferability across models confirmed at 82.321% success rate (Llama2-70b→13b on MR dataset). Kit implication: a kit that tests only paraphrased or rephrased instructions misses a structurally different failure class — minimal-change adversarial probes must be part of the kit's robustness test harness, especially for instruction-following rules with precise semantic requirements.

**Verify note:** Source exists (arXiv 2412.21016, Xiao et al. 2024). All numbers confirmed: modification rate 0.961%-16.811%; ChatGPT flip from 91% NEGATIVE to 96% POSITIVE via 'want'->'hope' and 'debates'->'discussions'; 82.321% transferability on MR dataset Llama2-70b->13b. Two precision issues: (1) the five main experimental models are all open-source (Mistral, Llama-2 variants, Internlm2, Yi); the ChatGPT example appears to be an illustrative demo/figure, not part of the controlled experimental cohort, so its methodological basis is less clear; (2) 82.321% is one specific model-pair result on one dataset, not a general cross-model transferability rate as implied. The underlying phenomenon (minimal-word-change adversarial attacks flipping NLP classifier outputs) is among the most thoroughly replicated findings in NLP adversarial ML (TextFooler 2020, BERT-Attack 2020, Jia & Liang 2017). Kit implication extends from classification tasks to instruction-following, which is a different and harder setting not validated by this study.

---

### [key: anchoring-bias-correctness-reduction]
- evidence: empirical
- confidence: medium
- group: reasoning-failure-modes
- sources: https://arxiv.org/html/2601.22208

**Claim:** Empirical study of 3,073 LLM reasoning traces in RCA tasks (arXiv 2601.22208) found that anchoring bias was among the strongest negative predictors of correct outcomes, reducing correctness likelihood by 45–55%. For path validity specifically, simulation confusion, excessive speculation, and repetition/stalling each showed ≥68% correctness likelihood reduction. Mechanism: once a model latches onto an early hypothesis, subsequent evidence is interpreted to confirm it rather than update it — the 'failure to update belief' failure mode is structurally built into single-pass reasoning without explicit contradiction-handling rules. Scope: multi-step diagnostic and reasoning tasks with sequential evidence; affects Llama 3.2 and small Qwen variants most severely; larger models (≥32B) partially mitigate. Kit implication: instruction kits for reasoning-heavy agents must include an explicit belief-update protocol (e.g., 'after receiving each new piece of evidence, state whether it supports or contradicts your current hypothesis and why') — without it, the agent's reasoning will structurally bias toward its first hypothesis.

**Verify note:** Source exists (arXiv 2601.22208, 'Stalled, Biased, and Confused'). N=3,073 reasoning traces confirmed. Anchoring bias (RF-13) is confirmed as a strong negative predictor. HOWEVER, the '45-55% reduction' framing in the claim is a misread of the paper's risk-ratio language. The paper states RR<0.55, meaning correct predictions are made at less than 55% the rate when the failure is absent — i.e., correctness is reduced by MORE than 45%, not 'by 45-55%'. The claim's phrasing is directionally correct but imprecise about what the interval represents. The '≥68% correctness likelihood reduction' for simulation confusion/excessive speculation/repetition is also a misread: the 68.6%/80.6% figures are co-occurrence rates of RF-10/RF-11 in Plan-and-Execute vs ReAct samples, NOT correctness reductions. The actual path-validity reduction for these failures is RR<0.32 (i.e., >68% reduction in correctness likelihood), so the conclusion is approximately right but the sourced numbers are conflated from two different columns in the paper. Model scope is accurate: Llama 3.2 (3B) and Qwen 3 (4B) are tested; ≥32B mitigation is a reasonable inference from the data (Qwen 3 32B and Llama 3.3 70B perform better) but the paper does not state '≥32B partially mitigate' as a threshold finding. The kit implication (explicit belief-update protocol) goes beyond what the study tested — the paper identifies the failure mode but does not test whether an instruction-level protocol fixes it. Overall: source is real and largely supports the claims directionally, but specific percentages are imprecise or conflated, and the kit implication is extrapolation beyond the study scope.

---

### [key: agentic-workflow-small-model-collapse]
- evidence: empirical
- confidence: high
- group: workflow-pattern-failures
- sources: https://arxiv.org/html/2601.22208

**Claim:** The RCA reasoning study (arXiv 2601.22208) found that small models (Llama 3.2, Qwen 3 4B) showed 77–87% failure rates under Plan-and-Execute agentic workflows, while the same models performed better under simpler ReAct workflows. Mechanism: Plan-and-Execute requires maintaining a structured plan across many tool invocations, creating a working-memory load that exceeds small models' capacity to track state and constraints — procedural complexity inversely correlates with model capacity. Scope: agentic workflows with 5+ sequential reasoning steps; does not apply to single-step or two-step tool calls. Kit implication: a kit that prescribes a single workflow pattern regardless of the target model tier will produce catastrophic failures on smaller deployments — kits must specify workflow-pattern/model-tier compatibility requirements explicitly.

**Verify note:** Source exists (arXiv 2601.22208). N=3,073 reasoning traces (subset of 48,000 simulated failure scenarios) confirmed. The specific failure rates are confirmed verbatim: 'Qwen 3 (4B) and Llama 3.2 suffer high failure rates under Plan-and-Execute (87.3% and 77.3%, respectively).' The claim's range of '77-87%' directly matches. The comparison to ReAct (better performance) is also supported. The mechanistic explanation (working-memory load exceeding small models' capacity) is a plausible interpretation consistent with the paper's framing but is not stated in those exact terms — it is an inference. The scope claim ('5+ sequential reasoning steps') is not a specific threshold stated in the paper but is consistent with Plan-and-Execute workflow structure. The kit implication is logical and follows from the finding, though the paper does not itself prescribe kit-level remediation. This is the best-supported claim in the batch.

---

### [key: specification-ambiguity-cascade]
- evidence: consensus
- group: specification-failures
- sources: https://galileo.ai/blog/agent-failure-modes-guide

**Claim:** Galileo's production agent failure analysis (galileo.ai) documents that ambiguous requirement specifications cascade through downstream systems: an agent instructed to 'remove outdated entries' without defining 'outdated' led to destructive misinterpretation; hallucinated facts triggered multi-system incidents spanning ordering, fulfillment, and customer communications. Mechanism: LLMs default to the most plausible interpretation of underspecified instructions given their training distribution, which may not match the deployer's intent; there is no backpropagation of ambiguity signals to the original specification. Scope: any multi-step or multi-agent pipeline; single-step, fully-specified tasks are less affected. Kit implication: kits must include a specification-completeness check as a pre-deployment gate — every instruction that involves a threshold, a boundary condition, or a categorical term must have an explicit definition included in the rule, not assumed as shared background knowledge.

---

### [key: memory-injection-cross-session-persistence]
- evidence: consensus
- group: memory-security-failures
- sources: https://galileo.ai/blog/agent-failure-modes-guide

**Claim:** Research cited by Galileo's agent failure analysis demonstrates that injected instructions can persist across agent sessions and propagate autonomously through memory systems, creating multi-session security and behavioral corruption failures. Mechanism: agent memory systems prioritize recency and salience of stored entries without provenance validation — a malicious or erroneous write to memory is indistinguishable from a legitimate one and is retrieved in future sessions as ground truth. Scope: agents with persistent memory backends (vector stores, conversation logs); stateless agents with no cross-session memory are not affected. Kit implication: a kit that specifies memory read/write rules without provenance tagging and integrity validation creates a structural attack surface — every memory write must include source attribution and every memory read must include a relevance-and-integrity check.

---

### [key: cross-surface-inconsistency]
- evidence: empirical
- confidence: medium
- group: multi-surface-failures
- sources: https://arxiv.org/html/2605.01604

**Claim:** The production agentic AI evaluation paper (arXiv 2605.01604) identifies cross-surface inconsistency as a distinct failure mode: the same requests yield different decisions across API and UI entry points within the same system. Mechanism: different surface paths may invoke different prompt templates, context-window sizes, or tool call orderings — the system has no canonical representation of 'the same request.' Scope: systems with multiple ingestion surfaces (API, UI, webhook, batch); single-surface deployments are unaffected. Kit implication: a kit that only specifies behavioral rules without specifying which surface those rules apply to, or without a cross-surface consistency test, will allow behavioral divergence that is invisible to single-surface testing.

**Verify note:** Source exists (arXiv 2605.01604, 'Evaluating Agentic AI in the Wild'). The failure mode is confirmed as FM-4 ('Consistency Collapse Across Entry Points'), which maps to what the claim calls 'cross-surface inconsistency'. The PAEF framework includes a 'Cross-Surface Consistency' dimension explicitly. HOWEVER, the paper's abstract states 'standard metrics fail to detect four of the seven failure modes entirely' — contradicting the claim (and the table extraction) that ROUGE/BERTScore detect zero. There is an internal inconsistency between the abstract text and Table 1 as extracted. The mechanism described in the claim (different prompt templates, context-window sizes, tool call orderings per surface) is a plausible elaboration not explicitly stated in the paper — the paper names the failure mode but the mechanistic detail appears to be the claim author's inference. The kit implication is logical extrapolation, not a finding of the study. Single-author paper (Mukund Pandey); no indication of peer review or replication. Caution warranted.

---

### [key: latency-driven-inference-erosion]
- evidence: empirical
- confidence: medium
- group: production-drift-failures
- sources: https://arxiv.org/html/2605.01604

**Claim:** The production evaluation paper (arXiv 2605.01604) documents latency-driven erosion as a failure mode where hard timeouts trigger degraded inference paths while SLA metrics remain green. Mechanism: timeout-triggered fallback paths were designed for availability, not quality — the system reports successful response delivery while the response quality has silently downgraded. Scope: production deployments with SLA monitoring and timeout-based failover; systems without fallback paths are not affected. Kit implication: kits that only specify the 'happy path' behavior without specifying fallback-path quality requirements will ship systems where the timeout-path is an unspecified and untested behavioral mode.

**Verify note:** Source exists (arXiv 2605.01604). The failure mode is confirmed as FM-6 ('Silent Correctness Erosion Under Latency Pressure'), which maps to the claim's 'latency-driven inference erosion'. The framing that 'SLA metrics remain green while quality silently downgrades' is consistent with 'availability-truth decoupling' (FM-2) and FM-6 as described. HOWEVER, the specific mechanism — 'timeout-triggered fallback paths designed for availability, not quality' — is the claim author's inference; the paper names the failure mode but this mechanistic detail was not confirmed in the extraction. The claim correctly notes scope (production deployments with SLA monitoring). The kit implication is logical but goes beyond what the paper tested. Same single-author paper caveat applies: no peer review confirmed, no replication data available.

---

### [key: standard-metrics-detection-failure]
- evidence: empirical
- confidence: low
- group: evaluation-methodology-gaps
- sources: https://arxiv.org/html/2605.01604

**Claim:** The production evaluation paper (arXiv 2605.01604) benchmarked standard evaluation metrics (ROUGE, BERTScore, accuracy, AUC, AgentBench, MT-Bench) against seven identified production failure modes and found ROUGE and BERTScore detected zero of the seven failure modes; accuracy/AUC detected only two with significant lag. Only the custom PAEF framework detected all seven. Mechanism: standard metrics were designed to score episodic capability, not monitor continuous-operation reliability — they have no sensitivity to distribution collapse, drift, or cross-signal correlations. Scope: production continuous-operation deployments; single-session benchmark evaluation is the intended scope of these metrics. Kit implication: a kit that specifies standard NLP metrics as its quality gates is systematically blind to five out of seven known production failure modes — the kit must specify complementary reliability metrics (entropy, diversity, attribution consistency, partial-response rate) alongside standard accuracy metrics.

**Verify note:** Source exists (arXiv 2605.01604). The paper does benchmark ROUGE, BERTScore, Accuracy/AUC, AgentBench, and MT-Bench. BUT there is a direct contradiction between the abstract and Table 1 as extracted: the abstract says 'standard metrics fail to detect four of the seven failure modes entirely and detect three others only after a lag' — meaning three ARE detected (with lag). The claim states 'ROUGE and BERTScore detected zero of the seven failure modes; accuracy/AUC detected only two with significant lag.' The extraction from Table 1 shows Accuracy/AUC detecting 3 of 7, AgentBench 2 of 7, MT-Bench 1 of 7 — contradicting the claim's 'accuracy/AUC detected only two.' The claim also adds 'AgentBench' and 'MT-Bench' to the benchmarked set (confirmed in extraction) but omits them from the summary. The PAEF framework detecting 'all seven' is confirmed. The claim is directionally correct that standard metrics miss most failure modes, but the specific numbers ('zero of seven' for ROUGE/BERTScore is confirmed; 'only two' for accuracy/AUC is incorrect per the extraction — should be three) are inaccurate. Single-author paper, no peer review or replication confirmed, making strong quantitative claims from this source higher-risk regardless.

---

### [key: cross-team-signal-ownership-blind-spot]
- evidence: empirical
- confidence: medium
- group: operational-deployment-gaps
- sources: https://arxiv.org/html/2605.01604

**Claim:** The production evaluation framework paper (arXiv 2605.01604) identifies a critical organizational failure: detecting proxy-vs-true-objective drift requires correlating ML metrics (AUC, accuracy) owned by ML teams with product metrics (session depth, retention, diversity) owned by product teams — teams monitor separate dashboards with different sampling frequencies, blocking visibility. Mechanism: organizational boundaries fragment the signal space needed to detect system-level failures that span ML and product dimensions. Scope: medium-to-large organizations with distinct ML and product teams; single-team deployments have full signal visibility. Kit implication: a kit that only specifies technical evaluation steps without also specifying which organizational role owns each monitoring signal, and how signals are correlated, will be operationally undeployable in any multi-team setting.

**Verify note:** Source exists (arXiv 2605.01604). The organizational finding is confirmed with a near-verbatim match: 'Several failure modes (FM-3, FM-7) are detectable only by combining signals owned by different teams: ML metrics (AUC, accuracy) and product metrics (session depth, retention, diversity). In practice, these teams monitor different dashboards, sample at different frequencies, and may not have a shared escalation path.' This directly supports the claim. HOWEVER, the paper also explicitly states 'The organisational problem — creating shared ownership of the gap between proxy and true metrics — is beyond the scope of this framework and remains an open challenge' — meaning the paper itself acknowledges it cannot solve or fully characterize this. The claim's framing that this is an 'identified' failure mode is accurate, but the paper does not empirically demonstrate this causes misses in practice — it reasons about why it would. The kit implication (specifying organizational role ownership per monitoring signal) is a logical extrapolation but goes beyond anything the paper tested. The 'proxy-vs-true-objective drift' maps to FM-7 ('Proxy Goal Convergence'). Single-author paper, no peer review or empirical validation of the organizational claim beyond reasoning. Directionally supported but not empirically validated.

---

## Null results
- robustness testing practitioners AI kit coverage gaps how to find applied — weakest query; returned mostly testing-tool marketing content and generic AI-assisted testing articles rather than practitioner research on kit-specific coverage gaps; the AI Singapore robustness testing resource was relevant in principle but lacked extractable empirical claims with mechanisms and numbers

## New angles surfaced
- Organizational signal ownership as a kit design requirement — kits currently treat monitoring as purely technical but the cross-team ownership blind spot (ML metrics vs product metrics) is a structural deployment gap that requires kit-level specification of role assignments, not just metric definitions
- Fallback path behavioral specification — timeout and degraded-mode paths are completely unspecified in most instruction kits; this is a distinct coverage gap from the happy path rules
- Decoding-strategy interventions for instruction compliance — the latent-awareness finding (model knows the rule but greedy decoding bypasses it) suggests a class of kit failures that cannot be fixed by instruction wording alone and require decoding-time or post-generation verification steps
- Cross-surface behavioral consistency as a first-class kit requirement — kits are written for a single surface and never specify that the same rules apply consistently across API/UI/webhook ingestion paths
- Belief-update protocols as explicit kit components — the anchoring bias finding suggests every reasoning-heavy kit needs a mandatory contradiction-handling protocol as a named rule, not an implicit expectation of model behavior

