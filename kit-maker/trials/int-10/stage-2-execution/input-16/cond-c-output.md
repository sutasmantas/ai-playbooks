# Angle-Gen-Kit Output — Condition C
**Input ID:** 16
**Generated:** 2026-07-05
**Topic:** Formal verification methods for ensuring LLM safety properties hold
**Condition:** Full kit procedure; Source B unavailable (subagent context)

---

## INTAKE BRIEF
============

**Topic:** Formal methods and verification techniques for establishing that safety-relevant properties hold in large language models — covering specification, proof, monitoring, and enforcement approaches.

**Anchor vocabulary:** "formal verification" (formal methods / software verification tradition), "LLM" (ML-systems / NLP tradition), "safety properties" (formal methods + systems safety tradition), "ensuring ... hold" (correctness-guarantee framing)

**Candidate vocabulary traditions:**

1. **Formal methods / software verification** — model checking, theorem proving, abstract interpretation, satisfiability modulo theories (SMT), temporal logic (LTL, CTL), Hoare logic, formal specification, invariant checking, proof assistants (Coq, Isabelle, Lean)
2. **AI safety / alignment research** — behavioral safety, value alignment, safety guarantees, specification gaming, corrigibility, scalable oversight, RLHF safety, constitutional AI, reward misspecification
3. **Neural network / ML verification** — neural network verification, certified robustness, adversarial robustness proofs, interval bound propagation, MILP encoding, Marabou, alpha-beta-CROWN, ERAN
4. **NLP / LLM interpretability** — mechanistic interpretability, circuit discovery, probing classifiers, attribution methods, emergent capabilities, superposition, representation analysis
5. **Runtime monitoring and enforcement** — runtime verification, safety monitors, guardrails, controlled decoding, constrained generation, output filtering, LMQL, Guidance
6. **Trustworthy AI / responsible AI** — fairness verification, AI auditing, certification frameworks, regulatory compliance, EU AI Act, NIST AI RMF, accountability
7. **Type theory / programming language theory** — dependent types, refinement types, gradual typing, type-based safety, effect systems, certified computation, formal semantics for programs
8. **Systems safety engineering** — safety cases, hazard analysis, FMEA, safety contracts, SIL (Safety Integrity Levels), safety argumentation, assurance cases

NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions.

**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only. Source B (survey-paper probe) was not run. External validation via survey-paper probe is recommended before accepting the tradition check as complete.

**Question type:** EXPLORATORY
(no comparison or intervention-outcome structure in the prompt; the user wants to know what approaches exist and what the literature contains)

**Scope markers:** None stated — inferred scope: all formal verification approaches applicable to LLMs at any lifecycle stage (training, inference, deployment), with no date restriction and no model-family restriction.

**Known exclusions:** None stated.

**Domain maturity estimate:** Academic-heavy with emerging mixed character
Basis: Anchor vocabulary is drawn from academic traditions ("formal verification," "safety properties"); the topic bridges two mature academic communities (formal methods + AI safety) and has significant emerging practitioner interest (guardrails frameworks, constrained decoding tooling). Domain maturity is shifting toward mixed as practitioner implementations proliferate.

**Survey paper status:** NOT CHECKED — Source B unavailable in this execution context.

**Source B status:** UNAVAILABLE — MODERATE (Source A + C together produced 8 distinct vocabulary traditions; ≥2-tradition threshold met; proceed with VOCABULARY SELF-REPORT FLAG applied).

**Hard-input justification for extended angle count (20–25 range):** This topic spans ≥4 distinct vocabulary traditions with substantively different query vocabularies, different source populations, and different epistemologies. The formal methods tradition and the AI safety tradition approach the same problem from different starting assumptions and use non-overlapping search vocabulary. The 20–25 angle range is appropriate per angle-generation.md guidance for complex multi-tradition domains.

**Intake gate check:**
- Topic populated: YES
- Candidate vocabulary traditions ≥2: YES (8 traditions identified)
- Question type classified: YES (EXPLORATORY)

Gate PASS — proceeding to angle generation.

---

## COVERAGE MAP
=============

**Tradition 1: Formal methods — model checking**
  Representative terms: LTL, CTL, bounded model checking, temporal logic, state space, Kripke structure, SPIN, NuSMV, trace-based verification
  Planned angle slots: A1 (Confirmatory), A15 (Compositional variant — distinct facet)
  Gap flag: No — two slots cover state-based and compositional facets respectively

**Tradition 2: Formal methods — theorem proving**
  Representative terms: proof assistants, Coq, Isabelle, Lean, HOL, deductive verification, mechanized proof, proof certificate
  Planned angle slot: A2 (Confirmatory)
  Gap flag: No

**Tradition 3: Formal methods — abstract interpretation**
  Representative terms: abstract domain, over-approximation, zonotopes, polyhedra, ERAN, AI2, DeepPoly, reachability analysis, soundness
  Planned angle slot: A3 (Confirmatory)
  Gap flag: No

**Tradition 4: Formal methods — satisfiability / constraint solving**
  Representative terms: SMT, SAT, MILP, Marabou, Reluplex, DNNV, constraint encoding, decidability, NP-hardness
  Planned angle slot: A4 (Confirmatory)
  Gap flag: No

**Tradition 5: AI safety / alignment formalization**
  Representative terms: formal alignment specification, harmlessness predicate, value alignment, reward misspecification, specification gaming
  Planned angle slot: A5 (Confirmatory)
  Gap flag: No

**Tradition 6: AI safety — RLHF / training-time safety**
  Representative terms: RLHF, constitutional AI, preference learning, training-time property preservation, fine-tuning drift
  Planned angle slot: A6 (Confirmatory)
  Gap flag: No

**Tradition 7: Neural network verification — certified robustness**
  Representative terms: certified defense, randomized smoothing, L_p robustness, perturbation bound, adversarial certificate
  Planned angle slot: A7 (Confirmatory)
  Gap flag: No

**Tradition 8: Neural network verification — transformer-scale**
  Representative terms: verification scalability, Lipschitz bounds, attention head analysis, transformer verification, tractability
  Planned angle slot: A8 (Confirmatory)
  Gap flag: No

**Tradition 9: NLP / mechanistic interpretability**
  Representative terms: circuit discovery, superposition, sparse autoencoder, probing, representation analysis, verification-adjacent evidence
  Planned angle slot: A9 (Confirmatory)
  Gap flag: No

**Tradition 10: Runtime verification**
  Representative terms: safety monitor, online verification, formal monitor, compliance checking, LTL at runtime, RV conference
  Planned angle slot: A10 (Confirmatory)
  Gap flag: No

**Tradition 11: Constrained generation / controlled decoding**
  Representative terms: constrained decoding, formal grammar, automaton, structured generation, LMQL, Outlines, Guidance
  Planned angle slot: A11 (Confirmatory)
  Gap flag: No

**Tradition 12: Trustworthy AI / certification**
  Representative terms: EU AI Act, NIST AI RMF, ISO/IEC 42001, audit, certification, compliance, accountability
  Planned angle slot: A12 (Confirmatory)
  Gap flag: No

**Tradition 13: Type theory / refinement types**
  Representative terms: dependent types, refinement types, effect systems, type-based enforcement, static guarantee, PL theory
  Planned angle slot: A13 (Confirmatory)
  Gap flag: No

**Tradition 14: Systems safety engineering**
  Representative terms: safety case, assurance case, hazard analysis, FMEA, SIL, safety argument, GSN
  Planned angle slot: A14 (Confirmatory)
  Gap flag: No

**Tradition 15: Probabilistic / statistical verification**
  Representative terms: probabilistic model checking, PRISM, PAC learning, statistical verification, confidence bounds, stochastic safety
  Planned angle slot: A16 (Confirmatory)
  Gap flag: No

**Tradition 16: Specification mining / invariant inference**
  Representative terms: specification mining, Daikon, behavioral inference, automatic invariant, property discovery
  Planned angle slot: A17 (Confirmatory)
  Gap flag: No

**Tradition 17: Formal semantics / semantic grounding**
  Representative terms: natural language semantics, semantic parsing, formal grounding, semantic predicate, computational semantics
  Planned angle slot: A18 (Confirmatory)
  Gap flag: No

**Traditions NOT yet represented in the planned list:**
  - Differential privacy / cryptographic formal methods (privacy-as-safety angle) — not explicitly in intake brief; will add A19 to cover this sub-tradition
  - All 8 traditions from intake brief have at least one angle slot

**Cross-disciplinary slot (required — tradition NOT in intake brief):**
  Target tradition: Control theory / dynamical systems safety (Lyapunov stability, control barrier functions, reachability analysis from control engineering)
  Basis for selection: LLM-driven agentic systems can be modeled as dynamical systems with state-space trajectories; control-theoretic safety certificates (control barrier functions, Hamilton-Jacobi reachability) provide an independently developed vocabulary for proving safety that does not overlap with the formal methods or AI safety traditions listed above. The safe RL literature has already begun importing this vocabulary into LLM contexts.
  Planned angle slot: C1 (Cross-disciplinary)

---

## TYPE ALLOCATIONS
================

```
Slot A1  (Confirmatory — Formal methods / model checking): Model checking and temporal logic
Slot A2  (Confirmatory — Formal methods / theorem proving): Theorem proving and proof assistants
Slot A3  (Confirmatory — Formal methods / abstract interpretation): Abstract interpretation
Slot A4  (Confirmatory — Formal methods / SMT-constraint solving): SMT and MILP-based verification
Slot A5  (Confirmatory — AI safety / alignment formalization): Formal alignment specification
Slot A6  (Confirmatory — AI safety / training-time safety): RLHF and training-time safety
Slot A7  (Confirmatory — Neural network verification / certified robustness): Certified robustness
Slot A8  (Confirmatory — Neural network verification / transformer-scale): Scaling NN verification
Slot A9  (Confirmatory — NLP / mechanistic interpretability): Interpretability as verification evidence
Slot A10 (Confirmatory — Runtime verification): Runtime monitors and formal enforcement
Slot A11 (Confirmatory — Constrained generation / automata): Constrained decoding
Slot A12 (Confirmatory — Trustworthy AI / certification): Regulatory compliance and auditing
Slot A13 (Confirmatory — Type theory / PL): Type-based and refinement-type approaches
Slot A14 (Confirmatory — Systems safety engineering): Safety cases and hazard analysis
Slot A15 (Confirmatory — Formal methods / compositional): Compositional and modular verification
Slot A16 (Confirmatory — Probabilistic / statistical verification): Probabilistic model checking
Slot A17 (Confirmatory — Specification mining / invariant inference): Specification mining
Slot A18 (Confirmatory — Formal semantics / semantic grounding): Semantic grounding problem
Slot A19 (Confirmatory — Differential privacy / cryptographic methods): Privacy as formal safety
Slot C1  (Cross-disciplinary — Control theory): Control barrier functions and Lyapunov certificates
Slot N1  (Null-hypothesis): Evidence that formal verification does NOT hold for LLMs
Slot D1  (Adversarial — starting vocabulary: empirical AI safety, sociotechnical critique,
          NOT FROM: formal methods, model checking, theorem proving, abstract interpretation,
          certified robustness, SMT, type theory, safety cases, runtime verification,
          alignment formalization, RLHF): Irreducibility and inapplicability arguments
```

---

## FULL ANGLE LIST
================

---

### ANGLE A1: Model Checking and Temporal Logic for LLM Behavioral Specifications
===========
**Vocabulary tradition:** Formal methods — model checking (temporal logic)
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Which temporal properties (safety, liveness, fairness) have been encoded for LLM behavior; what state-space representation was used for the LLM; scalability results; types of safety violations discovered

**Source type (academic):** arXiv cs.LO + cs.LG; proceedings CAV, FMCAD, FM
**Source type (practitioner):** GitHub repositories for agentic LLM frameworks with formal verification hooks; SPIN/NuSMV issue trackers for LLM applications

**Queries:**
  Q1: `model checking temporal logic LLM safety properties behavioral specification`
  Q2: `bounded model checking LTL CTL language model agent trace safety invariant`
  Q3: `LLM agentic system formal model state space safety liveness verification`

**Coverage-gap note:** Queries focus on LLM-as-system; coverage of LLM-as-component embedded in a larger verified system is left to A15 (compositional verification).

---

### ANGLE A2: Theorem Proving and Proof Assistants for LLM Safety
===========
**Vocabulary tradition:** Formal methods — theorem proving / proof assistants
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Which proof assistants have been used; what neural network properties were mechanically proved; how neural network semantics were encoded; scalability upper bound results; proof certificates produced

**Source type (academic):** arXiv cs.LO + cs.PL; proceedings ITP, CPP, LICS, LICS-affiliated workshops
**Source type (practitioner):** GitHub repos for Coq/Lean/Isabelle neural network verification libraries

**Queries:**
  Q1: `theorem proving proof assistant neural network safety property LLM Coq Lean Isabelle`
  Q2: `mechanized proof transformer safety properties formal guarantee interactive theorem prover`
  Q3: `deductive verification large language model proof certificate safety specification`

**Coverage-gap note:** Query set covers static safety proofs; dynamic/runtime proof generation for LLMs is covered in A10.

---

### ANGLE A3: Abstract Interpretation and Reachability Analysis for LLMs
===========
**Vocabulary tradition:** Formal methods — abstract interpretation
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Which abstract domains (interval, zonotope, polyhedra) have been applied to transformers; soundness guarantees obtained; tightness of the over-approximation; specific safety properties verified

**Source type (academic):** arXiv cs.LG + cs.PL; proceedings SAS, PLDI, VMCAI, POPL; journals TOPLAS
**Source type (practitioner):** GitHub repos for ERAN, AI2, DeepPoly, VeriNet applied to transformers

**Queries:**
  Q1: `abstract interpretation transformer language model safety reachability over-approximation`
  Q2: `zonotope polyhedra abstract domain neural network transformer safety bound`
  Q3: `ERAN DeepPoly abstract interpretation LLM formal safety guarantee`

**Coverage-gap note:** Abstract interpretation for pre-training data properties (rather than inference-time properties) is not covered in these queries.

---

### ANGLE A4: Satisfiability Modulo Theories (SMT) and MILP-Based LLM Verification
===========
**Vocabulary tradition:** Formal methods — satisfiability modulo theories (SMT) / constraint solving
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** SMT encodings used for transformer architectures; decidability and complexity results; which safety properties were encoded as SMT formulae; tools (Marabou, Reluplex, DNNV) and their LLM application results

**Source type (academic):** arXiv cs.LO + cs.LG; proceedings FMCAD, CAV, IJCAI, AAAI
**Source type (practitioner):** GitHub for Marabou, alpha-beta-CROWN, DNNV applied to LLMs

**Queries:**
  Q1: `SMT solver neural network verification LLM safety property transformer constraint`
  Q2: `Marabou Reluplex MILP encoding transformer language model safety verification`
  Q3: `satisfiability constraint encoding LLM formal safety NP-hard decidability`

**Coverage-gap note:** SAT-based approaches (without theories) are folded into this angle via the constraint-encoding framing; standalone SAT-only encodings of LLM safety are not separately queried.

---

### ANGLE A5: Formal Specification of Alignment and Safety Properties
===========
**Vocabulary tradition:** AI safety — alignment formalization
**Angle type:** Confirmatory
**Predicted research character:** consensus
**What to extract:** Candidate formal representations of harmlessness, honesty, helpfulness; which mathematical frameworks (first-order logic, temporal logic, probability theory) have been applied; known specification gaps; documented cases of specification gaming

**Source type (academic):** arXiv cs.AI + cs.LG; Alignment Forum technical posts; proceedings AIES, FAccT, NeurIPS Alignment workshops
**Source type (practitioner):** Anthropic, OpenAI, DeepMind safety research blogs and technical reports

**Queries:**
  Q1: `formal specification AI alignment safety properties predicate LLM mathematical definition`
  Q2: `alignment specification problem language model safety formalize harmlessness honesty`
  Q3: `specification gaming reward misspecification formal predicate LLM safety property gap`

**Coverage-gap note:** Empirical validation of formal alignment specs (whether the spec captures human intent) is not covered here; see A9 (interpretability) for evidence-based approaches to that question.

---

### ANGLE A6: RLHF, Constitutional AI, and Training-Time Safety Property Preservation
===========
**Vocabulary tradition:** AI safety — RLHF / training-time safety frameworks
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Formal guarantees or bounds produced by RLHF procedures; property preservation results across fine-tuning steps; reward model misspecification analysis; constitutional AI formal guarantees; catastrophic forgetting of safety properties during fine-tuning

**Source type (academic):** arXiv cs.LG + cs.AI; NeurIPS and ICML alignment workshop proceedings
**Source type (practitioner):** Anthropic and OpenAI training safety technical reports; alignment research blogs

**Queries:**
  Q1: `formal verification RLHF safety property preservation training fine-tuning guarantee`
  Q2: `constitutional AI formal safety guarantee training-time property LLM verification`
  Q3: `reward model misspecification formal bound RLHF alignment safety drift fine-tuning`

**Coverage-gap note:** Queries focus on training-time processes; inference-time enforcement after training is covered in A10 and A11.

---

### ANGLE A7: Certified Adversarial Robustness and Formal Perturbation Bounds
===========
**Vocabulary tradition:** Neural network verification — certified robustness
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Certified robustness methods applied to language models; perturbation metrics used (L_p norms, semantic similarity); certification radius achieved; tools and which LLM architectures they have been applied to; comparison with empirical robustness

**Source type (academic):** arXiv cs.LG + cs.CR; proceedings ICML, NeurIPS, ICLR, IEEE S&P
**Source type (practitioner):** GitHub for certified NLP robustness libraries (e.g., SAFER, RanMASK); technical blogs from adversarial ML practitioners

**Queries:**
  Q1: `certified robustness language model formal guarantee adversarial perturbation bound`
  Q2: `randomized smoothing NLP LLM safety certification adversarial input formal`
  Q3: `certified defense transformer adversarial robustness verification provable formal bound`

**Coverage-gap note:** Certified robustness against semantic perturbations (paraphrase attacks) rather than L_p perturbations is an active gap; these queries may return limited results for the semantic case.

---

### ANGLE A8: Scaling Neural Network Verification to Transformer Architectures
===========
**Vocabulary tradition:** Neural network verification — transformer-scale verification
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Specific challenges of attention mechanism verification; Lipschitz analysis for transformers; which verification approaches have been adapted for transformers vs. those that fail; complexity analysis; partial verification results; approximate methods used

**Source type (academic):** arXiv cs.LG + cs.LO; proceedings CAV, NeurIPS, ICLR focused on verification scalability
**Source type (practitioner):** GitHub repos for transformer-specific verification tools; ONNX verification toolchain issue trackers

**Queries:**
  Q1: `neural network verification scalability transformer architecture formal safety intractable`
  Q2: `attention mechanism verification Lipschitz bound transformer formal safety guarantee`
  Q3: `large language model formal verification tractability complexity analysis scaling`

**Coverage-gap note:** Verification of multi-head attention as distinct from feedforward layers is an emerging research area; queries may surface primarily preliminary results.

---

### ANGLE A9: Mechanistic Interpretability as Verification-Adjacent Evidence
===========
**Vocabulary tradition:** NLP / mechanistic interpretability
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Circuit-level discoveries cited as evidence for or against safety properties; uses of sparse autoencoders to identify safety-relevant features; cases where mechanistic analysis was used to provide verification evidence; limitations as a formal guarantee method

**Source type (academic):** arXiv cs.LG; Alignment Forum technical posts; proceedings NeurIPS and ICML interpretability workshops
**Source type (practitioner):** Anthropic interpretability research blog; EleutherAI interpretability research posts

**Queries:**
  Q1: `mechanistic interpretability formal safety claim LLM circuit verification evidence`
  Q2: `circuit discovery safety property transformer alignment evidence formal`
  Q3: `sparse autoencoder LLM safety feature verification interpretability formal guarantee`

**Coverage-gap note:** This angle covers interpretability-as-evidence, not interpretability-as-tool-for-spec-mining; the latter is covered in A17.

---

### ANGLE A10: Runtime Verification and Formal Safety Monitors for LLM Outputs
===========
**Vocabulary tradition:** Runtime verification
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Formal specifications used in deployed monitors; runtime verification frameworks applied to LLMs; latency and accuracy tradeoffs; what property classes are checkable at runtime vs. only statically; tools evaluated

**Source type (academic):** arXiv cs.LO + cs.LG; proceedings RV (Runtime Verification conference series), FM, ATVA
**Source type (practitioner):** GitHub repos for NeMo Guardrails, Guardrails AI, LlamaGuard, Llama-Guard2; engineering blogs on production LLM safety monitoring

**Queries:**
  Q1: `runtime verification LLM safety monitor formal specification output compliance`
  Q2: `formal safety monitor language model inference time output property checking`
  Q3: `online verification AI system LLM formal monitor runtime enforcement guardrail`

**Coverage-gap note:** This angle focuses on post-generation monitoring; generation-time constraint enforcement is covered separately in A11.

---

### ANGLE A11: Constrained Decoding and Certified Structured Generation
===========
**Vocabulary tradition:** Constrained generation / controlled decoding / automata-theoretic generation
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Formal grammars and automata used as decoding constraints; safety properties enforceable by construction via decoding constraints; tooling (LMQL, Outlines, Guidance, Instructor); what classes of safety properties constrained decoding can and cannot enforce; performance overhead

**Source type (academic):** arXiv cs.CL + cs.LG; proceedings ACL, EMNLP, NAACL, ICLR
**Source type (practitioner):** GitHub repos for Outlines, Guidance, LMQL, Instructor; practitioner blog posts on structured generation

**Queries:**
  Q1: `constrained decoding LLM formal grammar safety property verified structured output`
  Q2: `certified structured generation language model automaton safety constraint decoding-time`
  Q3: `formal output specification enforcement constrained generation LLM grammar automata`

**Coverage-gap note:** Semantic safety constraints (toxicity, misinformation) that cannot be expressed as formal grammars are outside the scope of this angle; see A18 for the semantic grounding problem.

---

### ANGLE A12: Certification Frameworks, Regulatory Compliance, and AI Auditing
===========
**Vocabulary tradition:** Trustworthy AI / responsible AI / certification
**Angle type:** Confirmatory
**Predicted research character:** consensus
**What to extract:** How EU AI Act, NIST AI RMF, and ISO standards operationalize safety requirements as testable/verifiable claims; formal verification requirements in regulatory frameworks; certification body approaches to LLM assurance; gap between regulatory requirements and current verification capabilities

**Source type (academic):** arXiv cs.CY; proceedings FAccT, AIES; law review and technology policy journals
**Source type (practitioner):** NIST, ENISA, BSI technical reports; government AI safety guidance documents; industry compliance whitepapers

**Queries:**
  Q1: `formal verification LLM regulatory compliance EU AI Act certification safety requirement`
  Q2: `AI governance formal safety property audit evidence LLM traceability NIST AI RMF`
  Q3: `safety certification large language model assurance case regulatory requirement verification`

**Coverage-gap note:** Sector-specific certification (medical AI, financial AI) may have distinct formal verification requirements not captured by these general queries.

---

### ANGLE A13: Type-Theoretic, Refinement-Type, and Effect-System Approaches
===========
**Vocabulary tradition:** Type theory / programming language theory
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Refinement type systems applied to LLM outputs or pipelines; effect systems capturing safety-relevant side effects; static enforcement of content constraints via types; examples of type-safe LLM API design; decidability of type checking for these systems

**Source type (academic):** arXiv cs.PL + cs.LG; proceedings POPL, ICFP, PLDI; journals TOPLAS
**Source type (practitioner):** GitHub repos for LLM frameworks using typed output schemas (instructor, pydantic-AI); practitioner engineering blog posts on type-safe LLM APIs

**Queries:**
  Q1: `refinement types language model output safety property static enforcement formal`
  Q2: `type system effect system LLM pipeline formal safety property static guarantee`
  Q3: `dependent types prompt programming language model formal safety specification static`

**Coverage-gap note:** This angle focuses on type-based static analysis; dynamic enforcement via types (gradual typing for LLMs) is an emerging sub-area not well-covered by these queries.

---

### ANGLE A14: Safety Cases, Assurance Cases, and Hazard Analysis for LLM Systems
===========
**Vocabulary tradition:** Systems safety engineering
**Angle type:** Confirmatory
**Predicted research character:** consensus
**What to extract:** Application of Goal Structuring Notation (GSN) and assurance cases to LLM safety; hazard identification methodologies applied to LLMs; which safety cases have been constructed for deployed LLM systems; gaps in the safety case methodology for ML systems

**Source type (academic):** arXiv cs.SE + cs.AI; proceedings SAFECOMP, DSN, ISSRE; journals Safety Science, Reliability Engineering & System Safety
**Source type (practitioner):** UK DSIT, AISI, and NCSC technical guidance on AI assurance; industry safety case templates for ML systems

**Queries:**
  Q1: `safety case assurance case language model LLM hazard analysis formal argument`
  Q2: `GSN goal structuring notation AI safety LLM assurance formal claim`
  Q3: `FMEA hazard analysis large language model safety engineering systematic`

**Coverage-gap note:** These queries focus on the safety case as a structured argument about safety; formal methods to automate safety case construction are partially covered in A2 (theorem proving) and A15.

---

### ANGLE A15: Compositional Verification and Assume-Guarantee Reasoning for LLM Pipelines
===========
**Vocabulary tradition:** Formal methods — compositional / modular verification
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Assume-guarantee contracts used to decompose LLM pipeline verification; which component boundaries were used for compositional decomposition; agentic LLM system compositional verification; scaling benefit demonstrated; failure modes of compositional decomposition

**Source type (academic):** arXiv cs.LO + cs.SE; proceedings CAV, TACAS, ATVA, FM; journals Formal Methods in System Design
**Source type (practitioner):** Technical reports on verified LLM orchestration frameworks; GitHub repos for pipeline verification tooling

**Queries:**
  Q1: `compositional verification LLM pipeline assume-guarantee reasoning formal safety contract`
  Q2: `modular verification language model component safety interface contract agentic`
  Q3: `assume-guarantee agentic AI pipeline formal safety decomposition LLM verification`

**Coverage-gap note:** Compositional verification of RAG (retrieval-augmented generation) systems — where the retrieval component introduces its own safety properties — is not explicitly targeted by these queries.

---

### ANGLE A16: Probabilistic and Statistical Formal Verification for Stochastic LLMs
===========
**Vocabulary tradition:** Probabilistic model checking / statistical verification
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Probabilistic model checking (PRISM, Storm) applied to stochastic LLM behavior; PAC-style statistical verification guarantees; confidence level and sample complexity results; what probability thresholds are used for safety claims; comparison with deterministic verification approaches

**Source type (academic):** arXiv cs.LO + stat.ML; proceedings QEST, CAV (probabilistic track), FORMATS, UAI
**Source type (practitioner):** GitHub for PRISM, Storm model checker; statistical verification toolkits applied to ML systems

**Queries:**
  Q1: `probabilistic model checking LLM neural network safety stochastic property guarantee`
  Q2: `statistical verification PAC learning language model safety confidence bound formal`
  Q3: `PRISM probabilistic temporal logic language model stochastic safety property`

**Coverage-gap note:** Quantum probabilistic verification approaches are outside this scope; also PAC verification frameworks that do not explicitly target LLMs but could be applied are not targeted.

---

### ANGLE A17: Specification Mining and Automatic Safety Property Inference from LLM Behavior
===========
**Vocabulary tradition:** Specification mining / invariant inference
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** Automated methods for discovering candidate safety properties by observing LLM outputs; invariant inference tools (Daikon-style) applied to model behavior; which property types are mineable; validation approach used; false positive rates in mined specifications

**Source type (academic):** arXiv cs.SE + cs.LG; proceedings ICSE, ISSTA, FSE, ASE; journals TSE, IST
**Source type (practitioner):** GitHub for specification mining tools applied to ML; automated testing frameworks with property inference

**Queries:**
  Q1: `specification mining language model safety property behavioral inference automatic`
  Q2: `invariant inference LLM behavior automatic safety property discovery formal`
  Q3: `behavioral specification mining transformer model safety constraint automatic inference`

**Coverage-gap note:** Mining safety properties from model activations (internal states) rather than outputs is not targeted by these queries.

---

### ANGLE A18: Formal Semantics and the Semantic Grounding Problem for LLM Safety
===========
**Vocabulary tradition:** Formal semantics / natural language semantics / semantic grounding
**Angle type:** Confirmatory
**Predicted research character:** gap
**What to extract:** Attempts to formally define high-level semantic safety predicates (toxicity, misinformation, hallucination, hate speech); the semantic grounding gap between informal normative concepts and formal predicates; whether NL semantics (Montague, distributional) can ground LLM safety properties; documented failures of formal grounding

**Source type (academic):** arXiv cs.CL + cs.CY; proceedings ACL, Semantics and Pragmatics, FAccT, NAACL
**Source type (practitioner):** AI ethics whitepapers; content policy technical reports from major AI labs

**Queries:**
  Q1: `formal semantics safety predicate LLM toxicity hallucination harmful content verifiable`
  Q2: `semantic grounding alignment property language model formal verification gap`
  Q3: `NLP computational semantics safety property formalization verifiable predicate LLM`

**Coverage-gap note:** This is predicted as a gap angle — minimal formal literature may be found; the primary value is documenting what cannot yet be formally specified.

---

### ANGLE A19: Differential Privacy and Cryptographic Formal Methods as Safety Verification
===========
**Vocabulary tradition:** Differential privacy / information-theoretic security / cryptographic formal methods
**Angle type:** Confirmatory
**Predicted research character:** empirical
**What to extract:** DP guarantees applied to LLMs as safety properties; formal proofs of membership inference resistance; data extraction bound verification; connections between cryptographic proof methods and LLM safety; zero-knowledge proofs for LLM safety claims

**Source type (academic):** arXiv cs.CR + cs.LG; proceedings CCS, STOC, NeurIPS privacy workshop, IEEE S&P
**Source type (practitioner):** GitHub for DP-SGD implementations; privacy-auditing frameworks for ML models

**Queries:**
  Q1: `differential privacy formal verification LLM safety training data leakage guarantee`
  Q2: `privacy safety property language model formal proof membership inference resistance`
  Q3: `zero-knowledge proof LLM safety formal cryptographic verification guarantee`

**Coverage-gap note:** Privacy is treated here as one formally specifiable safety property class, not as a separate field; this angle surfaces connections between the cryptographic and AI safety verification communities.

---

### ANGLE C1: Control-Theoretic Safety Certificates and Barrier Functions for LLMs
===========
**Vocabulary tradition:** Control theory / dynamical systems safety (cross-disciplinary — NOT in intake brief)
**Angle type:** Cross-disciplinary
**Predicted research character:** empirical
**What to extract:** Control barrier function (CBF) formulations for LLM-driven agents; Lyapunov stability analysis for LLM policies; Hamilton-Jacobi reachability applied to language model agents; connections between safe RL (control-theoretic) and formal verification (formal methods); which dynamical system abstractions best model LLM behavior

**Source type (academic):** arXiv eess.SY + cs.AI + cs.LG; proceedings L4DC, CDC, ICRA, NeurIPS SafeRL workshop; journals IEEE TAC, Automatica
**Source type (practitioner):** GitHub for safe RL frameworks with LLM integration; robotics + LLM safety research blogs

**Queries:**
  Q1: `control barrier function LLM agent safety formal certificate Lyapunov language model`
  Q2: `safe reinforcement learning language model policy formal verification reachability control`
  Q3: `Hamilton-Jacobi reachability safe RL LLM controller formal safety guarantee`

**Coverage-gap note:** This angle assumes the LLM acts as a controller/policy; LLMs used as planners (not controllers) may not fit the dynamical-system framing.

---

### ANGLE N1: Evidence That Formal Verification Cannot Scale or Guarantee Safety in LLMs (Null-Hypothesis)
===========
**Vocabulary tradition:** Formal methods — disconfirming / complexity theory / empirical limits
**Angle type:** Null-hypothesis
**Predicted research character:** empirical
**What to extract:** Complexity-theoretic impossibility results; documented failures of formal verification to detect LLM safety violations; cases where verified properties did not hold empirically; arguments that LLM semantics are too underspecified for formal verification; undecidability results; negative results on scaling formal methods to LLM scale

**Source type (academic):** arXiv cs.LG + cs.LO; NeurIPS "negative results" and "limitations" track papers; proceedings STOC, FOCS for complexity-theoretic bounds; complexity theory survey papers
**Source type (practitioner):** AI safety mailing list discussions on verification limits; practitioner failure reports; post-mortems on deployed guardrails failures

**Queries:**
  Q1: `formal verification LLM safety limitation failure scalability undecidable intractable negative results`
  Q2: `neural network verification does not generalize holds fails language model safety property limit`
  Q3: `formal safety guarantee LLM empirical failure brittleness false assurance verification breakdown`

**Coverage-gap note:** The null-hypothesis for specific sub-methods (e.g., "randomized smoothing fails for semantic perturbations") is partially covered in the individual confirmatory angles; this angle targets the class-level disconfirmation.

---

### ANGLE D1: [ADVERSARIAL-FLAGGED] Why Formal Verification Is the Wrong Framework for LLM Safety
===========
**Vocabulary tradition:** Empirical AI safety / sociotechnical safety critique / epistemological critique of formal methods
**Angle type:** Adversarial
**Predicted research character:** consensus
**What to extract:** Arguments that behavioral safety evaluation outperforms formal guarantees; evidence that real-world LLM safety failures are sociotechnical, not specification violations; critiques of the "safety property" formalism as too narrow for actual harms; human oversight arguments; red-teaming results that formal specs miss; organizational and deployment-context arguments for why formal verification will not solve LLM safety

NOTE: Generating from tradition — empirical AI safety / sociotechnical critique.
Explicitly excluding these terms from generation prompt: formal verification, model checking, theorem proving, abstract interpretation, certified robustness, SMT, Marabou, type theory, safety cases, runtime verification, alignment formalization, RLHF safety, control barrier function.

**Source type (academic):** arXiv cs.AI + cs.CY; proceedings FAccT, AIES, CHI; social science and STS journals on algorithmic accountability
**Source type (practitioner):** Red-teaming reports; AI safety incident databases; policy critiques of formal AI safety approaches; practitioner blogs arguing against over-reliance on technical fixes

**Queries:**
  Q1: `LLM safety empirical red teaming behavioral evaluation outperforms formal methods sociotechnical`
  Q2: `AI safety harms real-world deployment jailbreak human oversight formal guarantee insufficient`
  Q3: `critique formal specification language model safety epistemological limitation sociotechnical`

[ADVERSARIAL-FLAGGED: dispatch this in a separate research context with no prior confirmatory results]

**Coverage-gap note:** This angle intentionally excludes the formal methods vocabulary to force retrieval of literature that would not appear in confirmatory angle searches. Pairwise overlap with confirmatory angles should be near zero.

---

## GATE SUMMARY
============

**VOCABULARY SELF-REPORT FLAG (applied):**
All vocabulary traditions were enumerated by LLM only; no survey-paper probe was run (Source B unavailable). External validation via survey-paper probe is recommended before treating tradition coverage as complete.

---

**Gate 1 — Completeness:**

- Null-hypothesis angle present: PASS — Angle N1 explicitly uses disconfirming vocabulary ("does not," "failure," "limitation," "undecidable," "negative results") and is structurally separated from confirmatory angles.
- Adversarial angle present: PASS — Angle D1 is labeled [ADVERSARIAL-FLAGGED] with dispatch note; vocabulary explicitly excludes confirmatory-angle terms.
- Cross-disciplinary angle present: PASS — Angle C1 targets control theory / dynamical systems safety, a tradition explicitly NOT listed in the intake brief.
- Source-type coverage for mixed domain: PASS — Multiple angles assign practitioner sources (GitHub repos, practitioner blogs): A3, A7, A10, A11, A12, A13. The domain is estimated academic-heavy/mixed, and practitioner sources appear across the list.
- Vocabulary-tradition map populated: PASS — Coverage map lists 17+ distinct tradition entries; coverage map was built before any angle was written.

**Gate 1: PASS**

---

**Gate 2 — Distinctness:**

Boolean-connective test summary (highest-overlap pairs checked):

- A1 (model checking) vs. A4 (SMT): A1 queries use "LTL, CTL, trace, state space"; A4 queries use "SMT, MILP, Marabou, decidability." OR retrieval would not produce substantially the same results. PASS.
- A7 (certified robustness) vs. A8 (transformer-scale verification): A7 queries use "randomized smoothing, L_p, adversarial perturbation, certified defense"; A8 queries use "scalability, attention mechanism, Lipschitz, tractability, complexity." Some overlap on "transformer verification formal" terms. SMALL LITERATURE FLAG — the transformer-specific certified robustness literature is small; pairwise overlap may reflect limited corpus, not angle redundancy. Human judgment required on possible merge before dispatch.
- A3 (abstract interpretation) vs. A15 (compositional): A3 focuses on over-approximation at the network level; A15 focuses on modular decomposition of pipelines. Different vocabulary, different source communities. PASS.
- A10 (runtime verification) vs. A11 (constrained decoding): A10 queries use "safety monitor, online verification, compliance checking"; A11 queries use "grammar, automaton, structured generation." Different retrieval pools. PASS.
- A5 (alignment formalization) vs. A6 (RLHF safety): A5 focuses on specification of what safety means; A6 focuses on whether training procedures preserve it. Different facets; queries use different anchor terms. PASS.
- A17 (specification mining) vs. A9 (mechanistic interpretability): A17 uses "invariant inference, behavioral mining, Daikon"; A9 uses "circuit discovery, superposition, sparse autoencoder." Different retrieval pools. PASS.
- A18 (semantic grounding) vs. A5 (alignment formalization): A18 focuses on the NLP/semantics side of defining safety predicates; A5 focuses on the formal logic/specification side. Boundary is porous — moderate overlap risk. These two angles are candidates for a targeted human judgment merge decision before dispatch.

Vocabulary-tradition distinctness: All 21 angles have distinct tradition labels. PASS.

**Gate 2: PASS with two human-judgment flags:**
1. A7/A8 potential merge — SMALL LITERATURE FLAG applied.
2. A5/A18 porous boundary — human judgment recommended before dispatch.

---

**Gate 3 — Launchability:**

Spot-checked across all 21 angles:
- All angles contain at least one runnable query string (pasteable into a search box). PASS.
- No angle contains "TBD," "[fill in]," or unfilled placeholder vocabulary. PASS.
- All angles name specific platforms in Source type fields (arXiv with category specification, GitHub, specific conference proceedings, practitioner platforms). PASS.

**Gate 3: PASS**

---

**Gate 4 — Scoring prohibition:**

No angles were ranked, filtered, or prioritized during generation. No angle record contains language like "this is the strongest angle" or "most likely to be useful." All type designations (confirmatory, null-hypothesis, adversarial, cross-disciplinary) are structural categories, not quality rankings. PASS.

**Gate 4: PASS**

---

**Overall verdict: PASS — dispatch ready (with human-judgment flags on A7/A8 and A5/A18 boundary)**

**Flags requiring human judgment:**
1. A7/A8 potential overlap — SMALL LITERATURE FLAG: may reflect small corpus of transformer-specific certified robustness literature, not angle redundancy. Human should decide whether to merge or keep separate based on search results.
2. A5/A18 porous boundary — the specification formalization (A5) and semantic grounding problem (A18) overlap conceptually; A18 is predicted as a gap angle and A5 as consensus; keeping separate is defensible but the boundary should be reviewed by the dispatching researcher.
3. VOCABULARY SELF-REPORT FLAG applies to the entire list — survey-paper probe recommended to catch traditions the LLM cannot enumerate.

---

**Angle count:** 21
**Distinct vocabulary traditions (coverage map level):** 9 (8 from intake brief + 1 cross-disciplinary)
**Distinct angle-level tradition labels:** 21 (each angle has a unique tradition label)
**Null-hypothesis angles:** 1 (N1)
**Adversarial angles:** 1 (D1, ADVERSARIAL-FLAGGED)
**Cross-disciplinary angles:** 1 (C1, control theory)
