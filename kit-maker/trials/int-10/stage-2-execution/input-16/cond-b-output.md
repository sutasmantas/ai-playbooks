# Angle-Gen-Kit Output — Input 16, Condition B

**Topic:** Formal verification methods for ensuring LLM safety properties hold
**Condition:** B (full kit procedure execution)
**Date:** 2026-07-05
**Source B status:** UNAVAILABLE (subagent context) — MODERATE (Source A + Source C produced ≥5 distinct vocabulary traditions)

---

## INTAKE BRIEF

```
INTAKE BRIEF
============
Topic: Formal verification methods for ensuring safety properties hold in large language models

Anchor vocabulary:
  "formal verification" — formal methods tradition (program verification, model checking, theorem proving)
  "LLM" — ML-systems tradition (large language models, transformers, foundation models)
  "safety properties" — formal methods / AI safety tradition (invariants, specifications, behavioral constraints)

Candidate vocabulary traditions:
  1. Formal methods / program verification — model checking, theorem proving, temporal logic, SMT solvers,
     abstract interpretation, satisfiability, decidability, soundness, formal proofs, Coq, Lean, Isabelle, HOL
  2. Neural network (NN) verification — certified robustness, Marabou, alpha-beta-CROWN, CROWN, DeepPoly,
     reachability analysis, bound propagation, interval arithmetic, safety envelopes, LP relaxations
  3. ML safety / AI alignment — alignment, RLHF, constitutional AI, safety training, red-teaming,
     jailbreaking, harmful outputs, safety constraints, specification gaming, value alignment
  4. Programming languages / type theory — type safety, formal semantics, denotational semantics,
     dependent types, refinement types, type checking, static analysis, program synthesis
  5. AI governance / systems assurance — safety cases, assurance cases, certification, audit, compliance,
     AI safety standards, regulatory requirements, Goal Structured Notation (GSN)
  NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions
  it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is
  recommended before accepting the angle list as covering all traditions.

Question type: EXPLORATORY
  (No comparison or intervention-outcome structure in the prompt. User wants a broad survey of the
  landscape of formal verification approaches for LLM safety properties.)

Scope markers:
  None stated — inferred scope: any formal verification approach applicable to LLMs or large neural
  networks with safety-relevant properties; likely spans recent literature (post-2020 given LLM
  emergence as distinct research object); does not appear restricted to a single model family or
  deployment context.

Known exclusions: None stated

Domain maturity estimate: academic-heavy with emerging practitioner track
  Basis: "formal verification" is distinctly academic vocabulary; "LLM safety" spans academic and
  practitioner communities; the intersection (formal verification of LLM safety specifically) is
  very recent (2022–2025); arXiv cs.LG/cs.LO/cs.PL is primary; some GitHub toolkits exist for
  general NN verification (Marabou, alpha-beta-CROWN) but LLM-specific tooling is nascent;
  AI governance / safety-case tradition has practitioner publications (safety-critical systems
  conferences, technical reports).

Survey paper status: NOT CHECKED — Source B unavailable
  Recommendation: Run query "formal verification large language models safety properties survey
  2023 2024 2025" in a context with web access before treating the angle list as exhaustive.
  Expected survey terms not yet in traditions list may include: "neurosymbolic verification,"
  "AI safety guarantees," "provable alignment," "LLM specification."

Source B status: UNAVAILABLE — MODERATE — Source A + Source C together produced ≥5 distinct
  vocabulary traditions. Proceeding with VOCABULARY SELF-REPORT FLAG.
```

**Absent-term signal (Source C):** The user's prompt did NOT use:
- "model checking" — central to formal verification; most active NN verification tool family
- "neural network verification" — the primary sub-field name for NN-specific formal methods
- "certified robustness" — key NN verification output concept
- "SMT solvers" / "SAT solvers" — solver-based verification vocabulary
- "specification" / "invariants" — formal methods vocabulary for property expression
- "abstract interpretation" — major formal analysis paradigm
- "conformal prediction" / "PAC learning" — probabilistic verification vocabulary

Absence of "neural network verification" is notable: this is the largest active research tradition for formally verifying neural network properties and is likely the field with the most directly relevant literature.

**Intake gate check:**
- Topic field populated: PASS
- Candidate vocabulary traditions ≥2: PASS (5 traditions identified)
- Question type classified: PASS (EXPLORATORY)

Proceeding to angle generation.

---

## COVERAGE MAP

```
COVERAGE MAP
============
This topic is classified as a HARD INPUT (complex multi-tradition domain): ≥4 distinct vocabulary
traditions identified and the topic spans multiple disciplines. Per angle-generation.md, 20–30 angles
is appropriate. Target: 15 angles, justified as: 5 intake traditions + 1 cross-disciplinary tradition;
several traditions have multiple active research sub-communities producing structurally distinct
literatures. Each intake tradition receives 2–3 slots with explicit sub-tradition scope splits.

Tradition 1: Formal methods / program verification
  Representative terms: model checking, theorem proving, temporal logic, SMT solvers, abstract
    interpretation, satisfiability, Coq, Lean, Isabelle, HOL, formal proof, decidability
  Sub-traditions warranting separate slots:
    (a) Deductive verification / theorem proving — interactive proof assistants, formal proofs
    (b) Model checking / temporal logic — automata-based, LTL/CTL, safety specifications
    (c) Abstract interpretation — over-approximating static analysis, ERAN/DeepAbstract
  Planned angle slots: A1 (deductive), A2 (model checking), A3 (abstract interpretation), N1 (null-hypothesis)
  Gap flag: No — tradition is the primary one named by the user; three sub-slots cover the
    major paradigms within formal methods

Tradition 2: Neural network (NN) verification
  Representative terms: certified robustness, Marabou, alpha-beta-CROWN, CROWN, DeepPoly,
    reachability analysis, bound propagation, interval arithmetic, safety envelopes
  Sub-traditions warranting separate slots:
    (a) Architecture scaling — applying existing NN verification tools to transformer-scale models
    (b) Robustness certification — certified defenses, perturbation bounds, formal certificates
  Planned angle slots: A4 (scaling), A5 (robustness certification)
  Gap flag: No

Tradition 3: ML safety / AI alignment
  Representative terms: alignment, RLHF, constitutional AI, red-teaming, jailbreaking, harmful
    outputs, safety training, specification gaming, value alignment, corrigibility
  Sub-traditions warranting separate slots:
    (a) Property specification — formalizing alignment objectives as verifiable specifications
    (b) Mechanistic interpretability — understanding model internals to enable verification
  Planned angle slots: A9 (property specification), A12 (mechanistic interpretability)
  Gap flag: No

Tradition 4: Programming languages / type theory
  Representative terms: type safety, formal semantics, denotational semantics, dependent types,
    refinement types, type checking, static analysis, program synthesis, DSL
  Sub-traditions warranting separate slots:
    (a) Formal specification languages — designing languages to express LLM safety properties
    (b) Type theory — using type systems / refinement types for enforcement
  Planned angle slots: A6 (formal specification), A7 (type theory)
  Gap flag: No

Tradition 5: AI governance / systems assurance
  Representative terms: safety cases, assurance cases, certification, GSN, structured argument,
    audit, AI safety standards, regulatory requirements, DO-178C adjacent
  Planned angle slots: A10 (safety cases and assurance frameworks)
  Gap flag: Tradition receives 1 slot; a second slot for specific certification standards could
    be added but is not scheduled — log as acknowledged gap

Additional tradition identified via absent-term signal (not in intake brief but warranted by topic):
  Probabilistic verification — PAC learning, conformal prediction, stochastic model checking,
    statistical guarantees; this is a distinct formal tradition from deterministic formal methods
    (different mathematical apparatus, different completeness guarantees)
  Planned angle slot: A8 (probabilistic verification)

Runtime verification — a distinct CS sub-discipline concerned with monitoring running systems
  against formal specifications (distinct from static/offline verification)
  Planned angle slot: A13 (runtime monitoring)

Traditions NOT yet represented in the planned list:
  AI governance tradition receives only 1 slot (acknowledged gap above).
  "Neurosymbolic AI" as a verification-enabling approach — not scheduled; may be partly captured
    by A3 (abstract interpretation) and A12 (interpretability).

Cross-disciplinary slot (required):
  Target tradition: Control theory / cyber-physical systems (CPS) safety
  Basis for selection: Formal safety verification in control systems (barrier certificates,
    Lyapunov functions, control barrier functions, reachability analysis for dynamical systems)
    has been applied to neural network controllers and safety-critical AI. This vocabulary
    (CBF, CLF, Lyapunov, reachability, safety envelope) is distinct from all 5 intake traditions
    and from NN verification tradition. The CPS community produces formal methods for neural
    networks in physical-world safety contexts — transferable to LLM safety property verification.
    Planned slot: A11 (CPS cross-disciplinary)
```

---

## TYPE ALLOCATIONS

```
TYPE ALLOCATIONS
================
Slot A1  (Confirmatory — Formal methods: deductive verification)
Slot A2  (Confirmatory — Formal methods: model checking / temporal logic)
Slot A3  (Confirmatory — Formal methods: abstract interpretation)
Slot A4  (Confirmatory — Neural network verification: architecture scaling)
Slot A5  (Confirmatory — Neural network verification: robustness certification)
Slot A6  (Confirmatory — Programming languages: formal specification languages)
Slot A7  (Confirmatory — Programming languages: type theory)
Slot A8  (Confirmatory — Probabilistic verification)
Slot A9  (Confirmatory — ML safety / alignment: property specification)
Slot A10 (Confirmatory — AI governance / safety assurance)
Slot A11 (Cross-disciplinary — Control theory / CPS safety)
         [NOT IN INTAKE BRIEF — cross-disciplinary requirement satisfied]
Slot A12 (Confirmatory — Mechanistic interpretability)
Slot A13 (Confirmatory — Runtime verification / systems monitoring)
Slot N1  (Null-hypothesis — Formal methods: disconfirming variant)
         [CANNOT be merged or satisfied by hedging language in a confirmatory angle]
Slot D1  (Adversarial — Empirical ML reliability / statistical testing)
         [ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]
         [Starting vocabulary: empirical ML reliability, red-teaming, statistical testing, systems evaluation]
         [Excluded from generation: formal verification, theorem proving, model checking, specification,
          temporal logic, abstract interpretation, soundness, formal proof, certified]

Total: 15 angles (13 confirmatory, 1 null-hypothesis, 1 adversarial, 1 cross-disciplinary embedded in confirmatory count)
Justification for count >12: Complex multi-tradition domain with ≥6 traditions; each major tradition
  warranted ≥1 slot; formal methods warranted 3 slots for its distinct sub-paradigms (theorem proving,
  model checking, abstract interpretation). Count is explicitly justified here per angle-generation.md.
```

---

## FULL ANGLE LIST

---

### ANGLE 1: Theorem Proving and Proof-Assistant Approaches to LLM Safety
**Vocabulary tradition:** Formal methods — deductive verification
**Angle type:** Confirmatory
**Predicted research character:** gap — formal proof-assistant work on LLMs is nascent; expect few papers, mostly 2024–2025; some theoretical proposals with limited implementation
**What to extract:** Proof assistant systems used (Coq, Lean, Isabelle), which safety properties were formally specified and proved, what fragments of LLM behavior were amenable to proof, scope conditions and limitations stated by authors

**Source type (academic):** arXiv cs.LO + cs.LG; LICS, LPAR, CADE proceedings
**Source type (practitioner):** GitHub repos using proof assistants for neural network properties; Lean community (leanprover-community) forums

**Queries:**
- Q1: `theorem proving safety properties large language models formal verification proof assistant 2024 2025`
- Q2: `Coq Isabelle Lean HOL neural network behavior verification formal proof safety`
- Q3: `deductive verification language model output specification formal proof correctness 2023 2024`

**Coverage-gap note:** This angle does not cover "lightweight" theorem proving / SMT-backed automated verification — those are captured in A2 and A4. Does not cover probabilistic proof methods (A8).

---

### ANGLE 2: Temporal Logic Specifications and Model Checking of LLM Behavioral Properties
**Vocabulary tradition:** Formal methods — model checking / temporal logic
**Angle type:** Confirmatory
**Predicted research character:** gap — applying classical model checking to LLMs is architecturally non-trivial; expect proposals and feasibility studies rather than mature tools; some work on finite-state abstractions
**What to extract:** Which temporal logics were used (LTL, CTL, CTL*), how LLM states were abstracted for model checking, which behavioral safety properties were specified, tool implementations and scalability findings

**Source type (academic):** arXiv cs.LO + cs.AI + cs.LG; CAV, FMCAD, TACAS proceedings (Formal Methods in Computer-Aided Design)
**Source type (practitioner):** deprioritized — model checking is predominantly academic at this intersection

**Queries:**
- Q1: `model checking language model behavior temporal logic safety specification LTL CTL 2024 2025`
- Q2: `formal safety specification autoregressive language model LTL temporal property verification`
- Q3: `model checking LLM behavioral policy finite-state abstraction safety automaton 2023 2024`

**Coverage-gap note:** Does not cover runtime monitoring against temporal specifications (A13). Does not cover probabilistic model checking (A8).

---

### ANGLE 3: Abstract Interpretation and Sound Over-Approximation for LLMs
**Vocabulary tradition:** Formal methods — abstract interpretation
**Angle type:** Confirmatory
**Predicted research character:** empirical — AI2/ERAN/DeepPoly family has an active publication record for neural networks; LLM-scale application is a newer question
**What to extract:** Abstract domains used (zonotopes, intervals, polyhedra), which safety properties were verified, scalability results for transformer-scale networks, soundness guarantees, tools (AI2, ERAN, DeepAbstract, DeepPoly)

**Source type (academic):** arXiv cs.LG + cs.PL; PLDI, POPL, CAV proceedings; ICLR, NeurIPS
**Source type (practitioner):** GitHub (ETH Zurich ERAN repository, ai2 repo)

**Queries:**
- Q1: `abstract interpretation neural network safety property verification sound over-approximation 2023 2024`
- Q2: `ERAN DeepAbstract DeepPoly AI2 abstract interpretation large neural network safety formal`
- Q3: `abstract interpretation transformer language model safety formal analysis scalability 2024 2025`

**Coverage-gap note:** Abstract interpretation results are typically for feedforward / convolutional networks; the specific gap for autoregressive LLMs (unbounded generation, softmax, attention) is worth extracting explicitly.

---

### ANGLE 4: Scaling Neural Network Verification Tools to Transformer Architectures
**Vocabulary tradition:** Neural network verification — architecture scaling
**Angle type:** Confirmatory
**Predicted research character:** empirical — active tooling community with benchmarks; scaling challenge is well-documented
**What to extract:** Which verification tools were applied (Marabou, alpha-beta-CROWN, CROWN, MIPVerify, VeriNet), what the architectural obstacles were (attention mechanisms, large weight matrices, softmax), what scalability benchmarks showed, whether LLM-specific modifications to tools were proposed

**Source type (academic):** arXiv cs.LG + cs.CY; NeurIPS, ICLR, ICML; IEEE S&P, CCS
**Source type (practitioner):** GitHub — Marabou (Stanford), alpha-beta-CROWN (UIUC/CMU), alpha-beta-CROWN VNN-COMP results

**Queries:**
- Q1: `neural network verification transformer scalability large language model formal guarantee tool 2024 2025`
- Q2: `Marabou alpha-beta-CROWN CROWN MIPVerify transformer architecture verification LLM`
- Q3: `formal verification tool transformer attention mechanism softmax safety scalability benchmark 2024`

**Coverage-gap note:** Does not cover certified robustness as a type of guarantee (A5). Does not cover NN verification for the generation / decoding process specifically (which is architecturally distinct from single-pass inference verification).

---

### ANGLE 5: Certified Robustness and Formal Perturbation-Bound Guarantees for LLMs
**Vocabulary tradition:** Neural network verification — robustness certification
**Angle type:** Confirmatory
**Predicted research character:** empirical — active NLP robustness research; formal certification for text modality is harder than image modality (discrete input space)
**What to extract:** Certification methods used (randomized smoothing, deterministic bounds, interval propagation), which input perturbation types were bounded (character-level, word-level, semantic), certification radius or bound values reported, applicability to safety-relevant outputs

**Source type (academic):** arXiv cs.LG + cs.CL; ACL, EMNLP, NAACL; ICLR, NeurIPS; IEEE S&P
**Source type (practitioner):** deprioritized — certification research is predominantly academic

**Queries:**
- Q1: `certified robustness language model formal guarantee perturbation bound output safety NLP 2023 2024`
- Q2: `randomized smoothing certification transformer language model semantic safety input perturbation`
- Q3: `Lipschitz bound certified defense LLM text input adversarial formal robustness certificate 2024`

**Coverage-gap note:** Does not cover certification of training-time safety properties (only inference-time input-output certification). Semantic-level certification (meaning-preserving perturbations) is an open research direction — queries should surface whether it exists.

---

### ANGLE 6: Formal Specification Languages for Expressing LLM Safety Properties
**Vocabulary tradition:** Programming languages — formal specification
**Angle type:** Confirmatory
**Predicted research character:** gap-to-consensus — specification language design proposals exist; adoption and standardization are early-stage
**What to extract:** Specification languages or DSLs proposed for AI safety properties, expressiveness vs. decidability tradeoffs, which safety properties (content restrictions, behavioral invariants, alignment constraints) were expressible, existing formal languages repurposed for this domain

**Source type (academic):** arXiv cs.PL + cs.SE + cs.AI; FSE, ICSE, PLDI, VMCAI proceedings
**Source type (practitioner):** GitHub repos for LLM guardrail DSLs; Semantic Scholar (citation from known specification language papers)

**Queries:**
- Q1: `formal specification language LLM safety property verifiable definition DSL design 2023 2024 2025`
- Q2: `property specification behavioral constraint language model output formal language expressiveness`
- Q3: `specification language AI safety alignment property domain-specific verification LLM 2024`

**Coverage-gap note:** Does not cover runtime monitoring of specifications after the fact (A13). Does not cover temporal logic specifications specifically (A2). This angle focuses on the language design question — what formalism is used — not how verification is performed after specifying.

---

### ANGLE 7: Type Systems, Refinement Types, and Static Analysis for LLM Safety Enforcement
**Vocabulary tradition:** Programming languages — type theory
**Angle type:** Confirmatory
**Predicted research character:** gap — type-theoretic approaches to LLM safety are early-stage and exploratory; limited implementations; expect theoretical proposals
**What to extract:** Type system proposals (dependent types, refinement types, linear types), what safety properties the type system enforced, whether type checking was decidable for the proposed system, implementation status

**Source type (academic):** arXiv cs.PL + cs.LG; POPL, ICFP, LICS proceedings; PLDI
**Source type (practitioner):** deprioritized — predominantly academic at this stage

**Queries:**
- Q1: `type system formal safety constraint language model neural network static analysis property 2023 2024`
- Q2: `refinement type dependent type neural network safety property enforcement LLM formal`
- Q3: `type-theoretic approach LLM output safety specification correctness formal programming language 2024`

**Coverage-gap note:** Static analysis approaches that are not type-based (e.g., dataflow analysis, taint analysis applied to LLM pipelines) are at the boundary of this angle but not its center — a follow-up angle on program analysis for LLM pipelines could be warranted.

---

### ANGLE 8: Probabilistic and Statistical Formal Verification for LLM Safety Properties
**Vocabulary tradition:** Probabilistic verification
**Angle type:** Confirmatory
**Predicted research character:** empirical — probabilistic verification for neural networks exists; LLM-specific application is emerging; conformal prediction for LLMs is an active 2023–2025 area
**What to extract:** Formal frameworks used (PAC learning, conformal prediction, stochastic model checking, concentration bounds), which safety properties were given probabilistic guarantees, what failure probabilities/confidence levels were achieved, scope conditions

**Source type (academic):** arXiv cs.LG + cs.LO + cs.AI; QEST, TACAS (verification track); NeurIPS, ICLR; Journal of Machine Learning Research
**Source type (practitioner):** Semantic Scholar (citation from Tibshirani conformal prediction papers); deprioritized beyond that

**Queries:**
- Q1: `probabilistic verification language model safety property statistical guarantee PAC learning formal 2023 2024`
- Q2: `conformal prediction formal safety bound language model output distribution guarantee 2024 2025`
- Q3: `stochastic model checking language model safety property formal probabilistic guarantee bound`

**Coverage-gap note:** PAC-learning-style guarantees and conformal prediction guarantees are mathematically distinct — a future angle could separate these. This angle captures both under "probabilistic verification" as a single tradition.

---

### ANGLE 9: Formal Specification of Alignment Objectives and Value Safety Properties
**Vocabulary tradition:** ML safety / AI alignment — property specification
**Angle type:** Confirmatory
**Predicted research character:** consensus + gap — significant theoretical proposal work exists; mechanically verified implementations are sparse; formalizations of "alignment" are contested
**What to extract:** What alignment properties were formally specified (corrigibility, value alignment, harm avoidance), what formalism was used (utility theory, game-theoretic, logical), which specifications were machine-checkable vs. human-readable, what verification approach was paired with the specification

**Source type (academic):** arXiv cs.AI + cs.LG; NeurIPS, ICML, AAAI; Alignment Forum (LessWrong technical posts — primary source for this community)
**Source type (practitioner):** Alignment Forum / LessWrong (high-quality technical posts from this community precede arXiv publications); AI Safety Research Institute (AISI) technical reports

**Queries:**
- Q1: `formal specification alignment objective language model verifiable safety property value 2023 2024`
- Q2: `reward specification formal correctness value alignment verification language model machine`
- Q3: `corrigibility shutdown safety specification formal model large language model agent 2024`

**Coverage-gap note:** This angle focuses on the alignment community's attempts to formalize safety properties; it does not cover formal verification methods themselves (those are in A1–A5). The gap between specification and verification in this tradition is worth extracting explicitly.

---

### ANGLE 10: Safety Cases, Assurance Frameworks, and Certification Arguments for LLMs
**Vocabulary tradition:** AI governance / safety assurance
**Angle type:** Confirmatory
**Predicted research character:** consensus — safety case methodology is mature in aerospace/automotive; application to LLMs is new; expect structured argument frameworks adapted from high-assurance engineering
**What to extract:** Safety case templates or frameworks proposed for LLMs, evidence types used (testing, formal verification, operational monitoring), how formal verification results are incorporated into safety arguments, connection to regulatory standards (EU AI Act, UK AI Safety Institute), assurance level claims

**Source type (academic):** arXiv cs.AI + cs.SE; ISSRE, DSN, SAFECOMP proceedings; IEEE Transactions on Software Engineering; IEEE Systems Journal
**Source type (practitioner):** UK AI Safety Institute (AISI) reports; NIST AI Risk Management Framework; safety engineering technical reports; EUROCAE / SAE documents (aerospace LLM certification)

**Queries:**
- Q1: `safety case assurance case large language model AI system certification structured argument 2024 2025`
- Q2: `goal structured notation GSN LLM AI safety evidence assurance argument formal verification`
- Q3: `structured safety argument LLM formal verification evidence deployment certification standard 2024`

**Coverage-gap note:** Does not cover the specific verification methods used as evidence within safety cases — those are covered by other angles. This angle focuses on the overall argument structure and the evidentiary role of verification results.

---

### ANGLE 11: Reachability Analysis and Control-Theoretic Safety Certificates for Neural Networks
**Vocabulary tradition:** Control theory / cyber-physical systems safety
**Angle type:** Cross-disciplinary
**Predicted research character:** empirical — CPS/robotics NN verification is an active field; direct application to LLMs (not neural controllers) is a gap; transferable methods and concepts exist
**What to extract:** Reachability analysis methods applied to neural networks (e.g., SHERLOCK, NNV), control barrier functions (CBFs) and Lyapunov-based safety certificates for learned policies, how safety envelopes were defined for neural controllers, what aspects transfer to language generation safety

**Source type (academic):** arXiv cs.SY + cs.LG + cs.RO; IEEE CDC, ACC, ICCPS, HSCC proceedings; IEEE Transactions on Automatic Control; IROS
**Source type (practitioner):** GitHub repos for NNV (neural network verification for control systems), dReal; NASA technical reports on neural network verification for aviation

**Queries:**
- Q1: `reachability analysis neural network safety verification control barrier certificate Lyapunov formal`
- Q2: `control barrier function neural network policy safety guarantee formal property certificate 2023 2024`
- Q3: `Lyapunov neural network safety property dynamical system formal certificate verification language model`

**Coverage-gap note:** The CPS tradition verifies neural controllers over continuous state spaces; LLMs operate over discrete token sequences. The transfer requires identifying the analogous concept to a "state space" for LLM generation. This conceptual gap is worth explicitly extracting from any papers that attempt this transfer.

---

### ANGLE 12: Mechanistic Interpretability as a Foundation for Formal Property Verification
**Vocabulary tradition:** Mechanistic interpretability
**Angle type:** Confirmatory
**Predicted research character:** empirical + gap — mechanistic interpretability is an active 2022–2025 research area; its connection to formal verification is nascent
**What to extract:** Interpretability results (circuits, attention heads, features) that were leveraged for formal property claims, whether interpretability enabled constructive verification proofs, what safety properties were addressable via this approach, tooling (TransformerLens, Baukit)

**Source type (academic):** arXiv cs.LG + cs.AI; ICLR, NeurIPS; Anthropic research reports; Distill.pub (for foundational circuit-analysis papers)
**Source type (practitioner):** Anthropic, DeepMind mechanistic interpretability blog posts and technical reports; EleutherAI interpretability work; GitHub (TransformerLens, ACDC repos)

**Queries:**
- Q1: `mechanistic interpretability formal verification LLM safety circuit property 2024 2025`
- Q2: `interpretable representation neural network formal property verification explainability safety guarantee`
- Q3: `circuit-level analysis large language model safety property formal verification mechanistic 2024`

**Coverage-gap note:** Mechanistic interpretability may enable informal rather than formal verification — the literature likely contains both claims; the formal vs. informal boundary is worth extracting explicitly.

---

### ANGLE 13: Runtime Monitoring and Online Enforcement of LLM Safety Properties
**Vocabulary tradition:** Runtime verification / systems monitoring
**Angle type:** Confirmatory
**Predicted research character:** consensus + empirical — runtime monitoring for software systems is a mature tradition; LLM-specific guardrails are emerging practitioner tooling; formal specifications for monitors are less common
**What to extract:** Runtime monitoring frameworks applied to LLM outputs, what formal specifications (if any) the monitors check, detection accuracy and latency tradeoffs, enforcement mechanisms (blocking, rewriting, alerting), integration with formal property specifications

**Source type (academic):** arXiv cs.SE + cs.LG; RV (Runtime Verification conference) proceedings; TACAS; IEEE Transactions on Dependable and Secure Computing
**Source type (practitioner):** GitHub — NeMo Guardrails (NVIDIA), Guardrails AI, LLM Guard, LlamaGuard; practitioner blog posts on LLM output monitoring

**Queries:**
- Q1: `runtime monitoring LLM safety property violation detection online verification enforcement 2024 2025`
- Q2: `guardrail LLM output formal safety specification monitor enforcement runtime verification`
- Q3: `runtime verification language model generation output constraint enforcement monitoring system property`

**Coverage-gap note:** Most practitioner guardrail tools do not use formal specifications — they use classifier-based or heuristic monitors. The angle should distinguish between formally-specified and informally-specified runtime monitors when extracting findings.

---

### ANGLE N1: Failure Modes, Undecidability, and Fundamental Limits of Formal Verification for LLMs
**Vocabulary tradition:** Formal methods — disconfirming (null-hypothesis)
**Angle type:** Null-hypothesis
**Predicted research character:** empirical + gap — scalability failures are documented for NN verification; decidability/undecidability results for LLM-scale systems are sparse; negative results in verification are underreported
**What to extract:** Documented cases where formal verification failed or did not generalize for LLMs, theoretical hardness results (NP-hardness, undecidability, approximation lower bounds), scalability failure points (model size, property complexity), cases where verified properties were vacuously satisfied, gaps between formal guarantees and real-world safety failures

**Source type (academic):** arXiv cs.LG + cs.LO + cs.CC (computational complexity); NeurIPS, ICML; JACM, SIAM Journal on Computing (for theoretical limits); USENIX Security (for gap between formal guarantees and real attacks)
**Source type (practitioner):** GitHub issues in NN verification tools (Marabou, alpha-beta-CROWN) documenting failure cases; practitioner reports of verification failures at deployment scale

**Queries:**
- Q1: `formal verification LLM failure limitation does not generalize undecidability hardness negative result 2024`
- Q2: `neural network verification scalability failure negative result LLM safety property barrier limit`
- Q3: `limits formal methods AI safety verification intractable undecidable LLM challenge gap inadequacy`

**Coverage-gap note:** This angle captures both theoretical limits (undecidability proofs) and empirical failure modes. These are distinct subcategories and should be separated when extracting findings — theoretical hardness results do not automatically imply practical unverifiability at useful scales.

---

### ANGLE D1: Statistical and Empirical Adequacy as Alternative to Formal Verification
**[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]**

**Vocabulary tradition:** Empirical ML reliability / statistical testing
**Angle type:** Adversarial
**Predicted research character:** empirical — active red-teaming and empirical safety evaluation literature; arguments about the sufficiency of empirical methods exist
**Generating from vocabulary tradition:** empirical ML reliability, red-teaming, statistical testing, systems evaluation, benchmark-based safety assessment
**Excluded from generation prompt:** formal verification, theorem proving, model checking, specification, temporal logic, abstract interpretation, soundness, formal proof, certified, certificate

**What to extract:** Arguments that statistical testing, red-teaming, or empirical evaluation are SUFFICIENT for LLM safety without formal verification, empirical evidence that formal verification coverage does not predict real-world safety outcomes, cases where formal verification was bypassed in practice with acceptable results, literature questioning the necessity or ROI of formal approaches

**Source type (academic):** arXiv cs.LG + cs.CR; USENIX Security, CCS, IEEE S&P; NeurIPS, ICML (safety evaluation track)
**Source type (practitioner):** Red-teaming reports (Anthropic, OpenAI, Google safety team technical reports); GitHub red-teaming toolkits (PyRIT, Garak, promptbench); practitioner blog posts arguing against formal methods overhead

**Queries:**
- Q1: `LLM safety evaluation red-teaming empirical testing sufficiency formal methods alternative adequacy 2024`
- Q2: `large language model safety benchmark statistical testing jailbreak evaluation formal verification comparison`
- Q3: `red-team evaluation empirical safety assessment language model deployment formal approach inadequacy 2024`

**Coverage-gap note:** This adversarial angle may also surface literature arguing that formal + empirical approaches are complementary rather than alternatives. Both outcomes are valuable — extract the argument structure, not just the conclusion.

---

## BOOLEAN-CONNECTIVE DISTINCTNESS CHECK

Applying Boolean-connective test to potentially overlapping pairs:

**A1 (theorem proving) vs. A2 (model checking):**
A1 anchor term "theorem proving" + "proof assistant" does not appear in A2's queries ("model checking," "LTL," "CTL"). OR retrieval would not produce the same results — these are distinct verification paradigms. PASS.

**A2 (model checking) vs. A3 (abstract interpretation):**
A2 anchor "model checking"/"temporal logic" vs. A3 anchor "abstract interpretation"/"ERAN." Distinct methods. PASS.

**A3 (abstract interpretation) vs. A4 (NN verification scaling):**
A3 uses "ERAN/DeepAbstract/AI2" + "over-approximation"; A4 uses "Marabou/alpha-beta-CROWN" + "transformer scalability." Some papers appear in both communities but the primary retrieval sets are distinct. PASS.

**A4 (NN verification scaling) vs. A5 (certified robustness):**
A4 anchor "transformer architecture verification" + "scalability"; A5 anchor "certified robustness" + "randomized smoothing." Distinctly different aspects of NN verification. PASS.

**A6 (formal specification languages) vs. A9 (alignment property specification):**
Potential overlap on "specification" vocabulary. A6 queries use "specification language," "DSL," "domain-specific language" (language design focus); A9 queries use "alignment objective," "reward specification," "corrigibility" (semantic content focus). The Boolean test: would "formal specification" OR retrieve the same documents? SMALL LITERATURE FLAG — for LLM-specific specification literature, the corpus is sparse enough that both queries may retrieve the same 10–15 papers. Human judgment required before merge decision. The distinction (language design vs. alignment semantics) is conceptually genuine; the literary separation may be weak at this stage of field development.

**A8 (probabilistic verification) vs. D1 (adversarial/empirical):**
A8 uses "PAC learning," "conformal prediction," "stochastic model checking" (formal probabilistic guarantees); D1 uses "red-teaming," "empirical testing," "benchmark" (non-formal empirical evaluation). Distinct. PASS.

**A13 (runtime monitoring) vs. A6 (formal specification):**
A13 uses "runtime monitoring," "guardrail," "enforcement"; A6 uses "specification language," "DSL design." Distinct. PASS.

**N1 (null-hypothesis) vs. A4/A5 (NN verification confirmatory):**
N1 explicitly uses "failure," "does not generalize," "negative result," "undecidability" — disconfirming framing. A4 and A5 use capability-positive framing. Different documents. PASS.

**No angle pairs fail the Boolean-connective test.** Small-literature flag applied to A6/A9 pair.

---

## QUALITY GATE SUMMARY

```
GATE SUMMARY
============
Gate 1 — Completeness:
  Null-hypothesis angle present: PASS — N1 contains "failure," "does not generalize," "negative result,"
    "limitation," "undecidability," "inadequacy" — explicit disconfirming vocabulary throughout
  Adversarial angle present: PASS — D1 labeled [ADVERSARIAL-FLAGGED] with dispatch note
  Cross-disciplinary angle present: PASS — A11 targets control theory / CPS, which was NOT in the
    intake brief's candidate vocabulary traditions
  Source-type coverage: PASS — domain is academic-heavy with practitioner track; practitioner sources
    present in A3 (GitHub NN verification tools), A10 (AISI reports, standards), A12 (Anthropic/DeepMind
    technical reports), A13 (GitHub guardrail repos), D1 (red-teaming toolkits)
  Vocabulary-tradition map populated: PASS — 15 distinct tradition labels, coverage map present

  Gate 1: PASS

Gate 2 — Distinctness:
  Boolean-connective test: PASS on all pairs — see distinctness check section above
  Small-literature flag: A6/A9 pair — overlap may reflect sparse LLM-specific specification literature,
    not angle redundancy. Human judgment required before merge decision. Angles are conceptually distinct
    (language design vs. alignment semantics) and have been retained; user should verify at retrieval time.
  Vocabulary-tradition distinctness: PASS — each of the 15 angles has a unique tradition label

  Gate 2: PASS (with small-literature flag on A6/A9 pair)

Gate 3 — Launchability:
  Concrete query strings present: PASS — all 15 angles have 3 concrete, runnable query strings
  No placeholder vocabulary: PASS — no "TBD" or placeholder markers in any query
  Source types named: PASS — all 15 angles name specific platforms for both academic and practitioner
    sources (or explicitly state "deprioritized: academic-heavy topic")

  Gate 3: PASS

Gate 4 — Scoring prohibition:
  No LLM self-evaluation ranking: PASS — angles were generated by structural criteria (tradition
    coverage, type allocation); no filtering or ranking by "most promising" or "most relevant"
  No implicit quality assessment: PASS — no "this is the strongest angle" type language present

  Gate 4: PASS

Overall verdict: PASS — dispatch ready

Flags requiring human judgment:
  1. SMALL LITERATURE FLAG — A6/A9 pair: overlap may reflect limited corpus; do not merge
     automatically; verify at retrieval time.
  2. VOCABULARY SELF-REPORT FLAG — all vocabulary traditions were enumerated by LLM only;
     Source B (web search/survey probe) was unavailable; external validation via survey-paper
     probe recommended before accepting the tradition list as complete. Specifically, the following
     terms did not appear in the intake brief and may signal traditions not yet covered:
     "neurosymbolic," "neuro-symbolic verification," "provable safety," "policy verification,"
     "LLM specification mining." Run a survey probe on one of these terms if FULL coverage is required.
  3. COVERAGE ACKNOWLEDGED GAP — AI governance tradition (A10) received only 1 angle; a second
     angle covering specific regulatory standards (EU AI Act technical requirements, NIST AI RMF
     verification requirements) could be added without creating redundancy. Not scheduled — user
     decision required.
```

---

## ANGLE COUNT AND TRADITION SUMMARY

**Total angles: 15**
- Confirmatory: 13 (A1–A10, A12–A13)
- Null-hypothesis: 1 (N1)
- Adversarial [ADVERSARIAL-FLAGGED]: 1 (D1)
- Cross-disciplinary: 1 (embedded in A11, counted within confirmatory)

**Distinct vocabulary traditions: 15**

| # | Tradition label | Angle(s) |
|---|-----------------|----------|
| 1 | Formal methods — deductive verification | A1 |
| 2 | Formal methods — model checking / temporal logic | A2 |
| 3 | Formal methods — abstract interpretation | A3 |
| 4 | Neural network verification — architecture scaling | A4 |
| 5 | Neural network verification — robustness certification | A5 |
| 6 | Programming languages — formal specification | A6 |
| 7 | Programming languages — type theory | A7 |
| 8 | Probabilistic verification | A8 |
| 9 | ML safety / AI alignment — property specification | A9 |
| 10 | AI governance / safety assurance | A10 |
| 11 | Control theory / CPS safety (cross-disciplinary) | A11 |
| 12 | Mechanistic interpretability | A12 |
| 13 | Runtime verification / systems monitoring | A13 |
| 14 | Formal methods — disconfirming (null-hypothesis) | N1 |
| 15 | Empirical ML reliability / statistical testing (adversarial) | D1 |

**Count justification:** Complex multi-tradition domain (≥6 traditions at intake + cross-disciplinary). Formal methods warranted 3 sub-tradition slots (theorem proving, model checking, abstract interpretation — distinct paradigms with distinct tool ecosystems and publication venues). Neural network verification warranted 2 sub-tradition slots (architecture scaling vs. robustness certification). PL tradition warranted 2 sub-tradition slots (specification language design vs. type theory — distinct communities). All sub-splits are scope-split resolutions of the "two angles sharing a tradition label" rule.

---

## WHAT IS MISSING OR QUESTIONABLE IN THIS OUTPUT

Per behavioral contract Rule 6 (after-every-task self-check):

1. **Source B unavailable.** The vocabulary tradition list is LLM self-reported. Traditions the LLM has not encountered cannot be enumerated. For a niche and rapidly evolving intersection (formal verification × LLMs), post-2024 vocabulary may not be well-represented. Specific risk: "neuro-symbolic verification" may be a distinct tradition not currently captured. Recommend: run `"formal verification" "large language model" survey 2024 2025` before treating this list as exhaustive.

2. **Small-literature flag on A6/A9.** At retrieval time, these two angles may surface the same sparse set of papers. The user should verify before deciding to merge. If merged, the new angle needs a tradition label that captures both facets.

3. **AI governance tradition underrepresented.** One angle (A10) covers a tradition that spans multiple research communities (safety engineering, AI governance, regulation). A second angle specifically on regulatory and standards-body requirements (EU AI Act Art. 9/13, NIST AI RMF, IEEE P2817) could be warranted if the user's research has a policy or deployment dimension.

4. **Adversarial angle dispatch requirement.** D1 is ADVERSARIAL-FLAGGED. The downstream research agent must honor this label by running D1 in a separate context with no prior access to confirmatory angle results. This kit cannot enforce that downstream discipline — it is the user's responsibility to verify the dispatch is structurally separated.
