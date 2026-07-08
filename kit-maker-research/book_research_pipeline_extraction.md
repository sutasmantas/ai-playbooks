# H16 Extraction: Book Research Pipeline
# Source: C:\Users\masuta\Desktop\Coding\book\research\_raw\

A validated, in-use research pipeline for narrative/writing research. Extracted to inform kit-maker Phase 3 design.

---

## Innovations (things this pipeline does that current kit-maker design didn't)

**1. Angle = title + specific queries, not just a topic**
Each angle in angles.json has `title` and `queries` (array of 4-5 strings). The queries are specific search strings targeting different facets: foundational paper (author/year/title), meta-analysis, replication failures, practitioner version, computational study. This is how depth-per-angle is enforced structurally — not by telling the agent "be thorough" but by requiring multiple entry points.

**2. Output unit is a claim, not a source**
ideas.json stores claims with: `key` (slug), `claim` (full actionable text with study, numbers, mechanism, implication), `group` (topic cluster), `evidence` (type), `sourceUrls`. The pipeline doesn't collect bibliography — it collects knowledge. A source with no extracted claim is just a URL.

**3. Evidence classification is at the claim level, not the source level**
A high-quality peer-reviewed paper can support a `anecdote`-class claim if the study's domain doesn't map to the application. A practitioner blog can support a `consensus` claim if it reflects widespread agreement. The claim is classified, not the source. This prevents "I found a Nature paper" from inflating confidence in an extrapolation.

**4. Three evidence types with distinct handling:**
- `empirical`: cites a specific study/experiment/dataset with measurable results. Requires verify pass.
- `consensus` (used as "craft-consensus" in the code): practitioner agreement across many sources, no single empirical source. No verify pass.
- `anecdote`: single example or individual account. No verify pass. Usable as illustration only.

**5. Verify pass is ONLY for empirical claims**
The verify_todo batches contain only empirical claims. Consensus and anecdote pass through without verification. This is correct resource allocation: empirical claims are the ones where false confidence does the most damage (you think you have science; you don't). Consensus is fine to accept as consensus. Anecdotes are already labeled as anecdotes.

**6. Verdict structure is adversarial and specific**
Each verdict answers: (a) does the cited source exist and say what the claim says? (b) what is n-size and study design? (c) what checks out vs what's an extrapolation? (d) replication status? (e) confidence: high/medium/low with explanation.

The verdict can say "the numbers are right but the conclusion doesn't follow from the design" — this is `low` confidence assigned even when the source is real. Example: "rewatch-suspense-decay-rate" — source is real, numbers are right, but the study never had participants rewatch under full outcome knowledge, so "70% of suspense survives spoiled outcomes" doesn't follow.

**7. Craft applications explicitly flagged as extrapolations**
Verdicts specifically note when the claim's actionable advice is "the reviewer's untested extrapolation" from a real finding. This creates a distinction between: (a) what the research shows, (b) what practitioners infer. Both are valuable; they should not be conflated.

**8. Batch size of 12 for verify**
Empirical claims are batched 12 per verify agent. At ~216 empirical claims across 18 batches. This is the practical manageability ceiling — enough for a verify agent to hold context and do real work without losing track.

**9. Group minimum threshold of 4**
Ideas with fewer than 4 items in a theme group get merged into "misc." Prevents fragmentation into singleton categories with no synthesis mass. Synthesis requires at least enough items to find a pattern.

**10. Separate research streams for separate domains**
`dark_mc/` is a completely separate pipeline with its own search/ and verdicts/ directories. When a new domain emerges mid-run, it gets its own parallel pipeline rather than being merged into the main one. This allows independent saturation per domain and prevents domain B's claims from polluting domain A's synthesis.

**11. The extract_journal.py is a recovery/audit mechanism**
Pulls StructuredOutput tool calls from all workflow transcript files. Research agents output structured JSON via StructuredOutput, which the extraction script recovers even if a workflow dies. This means: the structured output from research agents is machine-parseable, not just text in the transcript.

**12. Angles array accumulates across waves**
angles.json is an array (not keyed). New angles can be appended without overwriting prior ones. The extraction script extends it with each run.

**13. Verify queue regenerates fresh each run**
Old verify_todo batch files are deleted before regeneration. The queue is always current — no accumulation of outdated batches from prior waves with claims that have since been verified.

---

## Anti-patterns this pipeline avoids

- "Sources found" as the output unit — bibliography ≠ knowledge base
- One generic query per angle — misses the meta-analysis, the critique, the computational study
- Uniform verification of all claims — wastes effort on consensus claims that don't need it
- Self-verification — researcher ≠ verifier
- "The source is good therefore the claim is good" — source quality and claim quality are independent
- Vague verdicts — "this seems plausible" is not a verdict; must name what specifically checks out and what doesn't
- Fragmentation into singleton groups — synthesis requires critical mass

---

## Surprising elements

1. **`low` confidence when the source is real and numbers are right** — the inference structure can be wrong even when the data is real. The pipeline distinguishes "source accurately cited" from "conclusion supported by source design."

2. **dark_mc has a separate verify pipeline** — suggests that dark MC character writing required different verification context/standards, isolating it prevents cross-domain contamination in synthesis.

3. **Craft application explicitly labeled "untested extrapolation" in verdicts** — this is sophisticated and rare; most research-to-practice pipelines don't distinguish what the study shows from what practitioners infer.

4. **The extract script is designed for resilience** — it reads from all transcript files, handles JSONDecodeErrors, deduplicates by key. It's built to recover from partial workflow failures.

5. **Claims that are contradicting each other appear in the same group** — `cliffhanger-arousal-without-pull` and `cliffhangers-raise-continuation-not-enjoyment` appear in the same verify batch. The pipeline doesn't resolve contradictions at the claim level — it accumulates them and leaves resolution to synthesis.

---

## Carry-forward decisions (apply to kit-maker Phase 3)

| Decision | Status |
|----------|--------|
| Angle format: title + 4-5 specific queries | ADOPTED — research-quality.md + ENTRYPOINT updated |
| Claim format: key/claim/group/evidence/sourceUrls | ADOPTED — research-quality.md |
| Evidence types: empirical/consensus/anecdote | ADOPTED |
| Verify pass only for empirical claims | ADOPTED |
| Verdict structure: source confirmed, n-size, extrapolation flagged, confidence | ADOPTED |
| Batch size 12 for verify agents | ADOPTED provisionally |
| Group minimum 4 before separate category | ADOPTED for Phase 4 synthesis |
| Separate research streams for separate domains | NOTED — may apply if kit-maker research expands |
| StructuredOutput for machine-parseable claims | NOTE: should the kit research archive be JSON (parseable) or MD (human-readable)? Open question. |

---

## Open questions generated

- **115.** [FROM EXTRACTION] JSON vs markdown for research archive — the book pipeline uses JSON for claims (machine-parseable, extractable, deduplicable). The kit-maker research archive uses markdown (human-readable, inspectable, portable). Trade-offs: JSON supports programmatic dedup and extraction; markdown is readable without tooling. Is there a hybrid (structured markdown, YAML front-matter per claim)?

- **116.** [FROM EXTRACTION] Claim-level evidence classification vs source-level — is this distinction preserved when a single source supports multiple claims of different evidence strengths? How do you handle a paper that establishes one empirical finding but also motivates three speculative applications?

- **117.** [FROM EXTRACTION] Contradict-accumulation in synthesis — the pipeline accumulates contradicting claims in the same group rather than resolving them at claim time. What's the right synthesis procedure for a group where half the claims support X and half contradict X? The book pipeline doesn't answer this — it's an open design question for Phase 4.

- **118.** [FROM EXTRACTION] Recovery/audit mechanism for kit research — the extract_journal.py pulls structured data from workflow transcripts. Should the kit-maker have an equivalent? If a research workflow dies mid-run, how do you recover what was found?
