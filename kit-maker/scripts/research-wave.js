export const meta = {
  name: 'kit-maker-research-wave',
  description: 'Run one research wave for the kit-maker: parallel angle research + empirical verify pass',
  phases: [
    { title: 'Research', detail: 'Parallel agents per angle — search all queries, extract claims' },
    { title: 'Verify', detail: 'Adversarial verify pass on empirical claims only, batched 12' },
    { title: 'Archive', detail: 'Write structured markdown to research_archive/' },
  ],
}

// args: { angles: [ { title, queries: string[] }, ... ], archivePath: string, domain: string }
// angles are passed in — generate them from RESEARCH_ANGLES.md before launching this script

const CLAIM_SCHEMA = {
  type: 'object',
  properties: {
    claims: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key:        { type: 'string', description: 'short-hyphenated-slug, unique' },
          claim:      { type: 'string', description: 'Full actionable finding: study + numbers + mechanism + scope + implication' },
          group:      { type: 'string', description: 'topic cluster slug' },
          evidence:   { type: 'string', enum: ['empirical', 'consensus', 'anecdote'] },
          sourceUrls: { type: 'array', items: { type: 'string' } },
        },
        required: ['key', 'claim', 'group', 'evidence'],
      },
    },
    saturated:    { type: 'boolean', description: 'true ONLY when ALL THREE conditions hold: (1) consecutive queries return no new keys, (2) at least 2 distinct source type domains were covered (e.g. academic + grey/GitHub/practitioner), AND (3) the vocabulary-frame enumeration produced at least one query per identified research tradition. Saturation on one source type alone is partial — set false and explain in saturationNote. Saturation within only one vocabulary tradition is also partial — set false, note "reachable saturation only".' },
    saturationNote: { type: 'string', description: 'One sentence on saturation status: what source types were covered, whether both conditions hold. REQUIRED when saturated=false.' },
    adversarialQueryRun: { type: 'boolean', description: 'true if at least one query was explicitly adversarial (targeting failures, critiques, null results)' },
    greyLitQueryRun: { type: 'boolean', description: 'true if at least one query explicitly targeted grey literature: arXiv, GitHub, preprints, technical reports, practitioner blogs' },
    queriesRun:   { type: 'array', items: { type: 'string' }, description: 'exact queries run in order' },
    newKeysPerQuery: { type: 'array', items: { type: 'number' }, description: 'new claim count per query run' },
    nullResults:  { type: 'array', items: { type: 'string' }, description: 'queries that returned nothing, with reason — adversarial and grey-lit null results are VALID outputs, not failures; log them' },
    newAngles: {
      type: 'array',
      description: 'New research angles this angle surfaced. Two types: decision-closing (P1) and new-direction (P2/P3). Both are valid — surface both, assign priority at generation time.',
      items: {
        type: 'object',
        properties: {
          title:           { type: 'string', description: 'The research question this angle would answer' },
          priority:        { type: 'string', enum: ['P0', 'P1', 'P2', 'P3'], description: 'P0 = foundational blocker, must run before anything else; P1 = foundational, affects multiple current decisions; P2 = important but narrower scope; P3 = refinement after P1/P2. Rate on importance, not on whether the angle closes an existing decision or opens a new direction — both types can be any tier.' },
          groundingTarget: { type: 'string', description: 'If this angle closes a specific open kit decision: name that decision (e.g. "disagreement protocol framing", "intake protocol boundary"). If this is a new direction: describe what new area it opens. Always fill this.' },
          wouldFind:       { type: 'string', description: 'What this angle would find: for decision-closing angles, what result moves it to VALIDATED; for new directions, what the territory is and why it matters for kit quality.' },
        },
        required: ['title', 'priority', 'wouldFind'],
      },
    },
  },
  required: ['claims', 'saturated', 'queriesRun'],
}

const VERDICT_SCHEMA = {
  type: 'object',
  properties: {
    verdicts: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key:        { type: 'string' },
          confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
          note:       { type: 'string', description: 'what checks out, what is extrapolation, n-size, replication status' },
        },
        required: ['key', 'confidence', 'note'],
      },
    },
  },
  required: ['verdicts'],
}

if (!args || !Array.isArray(args.angles) || args.angles.length === 0) {
  throw new Error('research-wave: args.angles is required (array of {title: string, queries: string[]})')
}
const angles = args.angles
const archivePath = args.archivePath || 'kit-maker/research_archive'
const domain = args.domain || '(domain not specified)'
const researchAnglesPath = archivePath.replace(/\/research_archive\/?$/, '') + '/RESEARCH_ANGLES.md'
// openDecisions: optional array of open grounding-map decision names to target with new angles
const openDecisionsBlock = (args.openDecisions && args.openDecisions.length > 0)
  ? `\nOpen decisions needing evidence (priority targets for new angles):\n${args.openDecisions.map(d => `- ${d}`).join('\n')}\n`
  : ''

// ── PHASE 1: Research — one agent per angle ──────────────────────────────────
phase('Research')

const angleResults = await pipeline(
  angles,
  (angle, _, i) => agent(
    `You are a research agent for the kit-maker project. Domain: ${domain}.

Your angle: "${angle.title}"

## REQUIRED QUERY STRUCTURE

Run ALL of the following queries. After each query, record how many NEW claim keys you found (claim keys not seen in prior queries for this angle).

**Required query types (must run all three categories):**

**Source strategy:** Run Category A queries primarily via Semantic Scholar (cs.AI domain, field-level qualifiers) and arXiv (cat:cs.AI OR cat:cs.MA, abs: qualifier). These are the minimum two structurally distinct source types — single-database searches achieve only 52–79% recall; two structurally distinct sources reach 95%+. Google Scholar is adequate for scoping but its 1,000-result cap and opaque indexing make it unreliable for systematic coverage — do not treat GS results alone as exhaustive for any angle.

**Category A — Standard queries from angle list:**
${angle.queries.map((q, n) => `${n + 1}. ${q}`).join('\n')}

**Category B — Adversarial query (REQUIRED, do not skip):**
Two components — run both:
(a) External critique search: search for failures, critiques, null results, contradicting evidence. Phrase as: "[topic] fails because...", "critique of [topic]", "[topic] null result", "[topic] replication failure". The gold standard is a source that has already done rigorous argumentative work against the claim.
(b) Self-argumentation (regardless of search results): Construct the strongest case against the current claim using first principles. Identify the weakest assumption. Model the failure mode: under what conditions would this break? What measurement artifact or confound could explain the finding without the claimed mechanism? Argumentation is building the opposition case — not "find someone who disagrees," but reasoning to the best counter-position. If you cannot construct any credible counter-argument: document specifically what makes this hard to refute.
If neither component finds anything meaningful: log it in nullResults — that is a valid output. Do not skip.

**Category C — Grey literature query (REQUIRED, do not skip):**
Run at least one query targeting grey literature: arXiv, GitHub, preprints, technical reports, practitioner blogs.
Preferred patterns: arXiv category search (cat:cs.AI OR cat:cs.MA "[topic]") rather than generic site: search; "site:github.com [topic]"; "[topic] site:lesswrong.com OR site:simonwillison.net".
When using HN or Reddit as a grey-lit source: extract and evaluate the LINKED sources independently — upvote counts are discovery signals, not quality signals (early-vote anchoring means popular ≠ accurate).
If this domain has no meaningful grey literature: document rationale in nullResults. Do not skip.

**Category D — Alternative framing query (REQUIRED, do not skip):**
Run at least one query that approaches the same topic using a DIFFERENT vocabulary or research tradition than Category A used. This is not a synonym — it is a different discipline or conceptual frame that studies the same underlying phenomenon.
WHY: the same phenomenon exists under different names across disciplines. Searching only one vocabulary cluster produces reachable saturation (no new keys in that cluster) while missing all other clusters. Example: angle on "adversarial review" → Category A uses "adversarial, critique, red-team" → Category D uses "pre-mortem analysis, assumption mapping, devil's advocate, structured devil's advocacy" (organizational behavior / decision science vocabulary). If you cannot identify an alternative framing, document why — that itself is a finding.
Record in saturationNote whether alternative framing was explored or not.

## SATURATION DEFINITION (three conditions — ALL must hold before claiming saturated)

**Pre-search (required before queries):** Enumerate the research traditions that study this phenomenon. Same phenomenon exists under different names across disciplines — vocabulary-frame enumeration before search prevents concept frame lock. Format: "Tradition A: vocabulary [term1, term2]; Tradition B: vocabulary [term1, term2]; plan: query N covers tradition A, query M covers tradition B." If you can only name one tradition, flag this.

**Condition 1:** Consecutive queries return claim keys already in the set (key convergence).
**Condition 2:** At least 2 distinct source type domains were covered (academic database + grey/GitHub/practitioner resource OR similar cross-type coverage).
**Condition 3:** The vocabulary-frame enumeration was covered — at least one query per identified research tradition was run.

If only one source type was covered: set saturated=false, saturationNote="saturated within [source type]; [other type] not covered."
If only one vocabulary tradition was searched: set saturated=false, saturationNote="reachable saturation only — saturated within [vocabulary cluster]; [other tradition] not searched."
True saturation requires all three conditions. Failing to meet Condition 3 loses ~10% of relevant literature to concept frame lock.

## CLAIM FORMAT

For each finding, extract a CLAIM — not a source:
- key: short-hyphenated-slug (unique, descriptive)
- claim: Full actionable text. Must include: the specific study or source, specific numbers/effects where available, the MECHANISM (why this is true, not just that it is), the SCOPE CONDITIONS (when this applies and when it doesn't), the practical implication for kit design
- group: topic cluster this belongs to (use consistent slugs across the wave)
- evidence: "empirical" (specific study/experiment with measurable results), "consensus" (widespread practitioner agreement, no single study), or "anecdote" (single example)
- sourceUrls: direct links

Also record:
- nullResults: queries that returned nothing useful, with reason — adversarial and grey-lit null results are VALID findings, not failures; log them here
- adversarialQueryRun: true/false — did you run an adversarial query?
- greyLitQueryRun: true/false — did you run a grey literature query?
- newAngles: research angles this angle suggests. Surface two types freely: (a) decision-closing angles — they target a specific open kit design decision and would move it toward VALIDATED; (b) new directions — genuinely new territory the research opened that isn't in the current angle list. Both types are valid. For each new angle, assign priority (P0/P1/P2/P3) based on importance to the kit goal — not based on type. A new direction can be P0 if it's foundational. Rate on the same scale as all other angles. For each: (1) title, (2) priority, (3) groundingTarget — for decision-closing angles name the specific open decision; for new directions describe the territory, (4) wouldFind — what the angle would produce.${openDecisionsBlock}
CRITICAL: Do NOT return sources. Return claims. A source with no extracted claim is useless.
CRITICAL: State scope conditions. A claim without "this applies when X, doesn't apply when Y" is over-generalized.
CRITICAL: State mechanism. A claim that only says "X produces Y" without saying WHY is shallow.
CRITICAL: Run the adversarial and grey-lit queries. Do not stop at the standard queries alone.`,
    { label: `research:${angle.title.slice(0, 40)}`, phase: 'Research', schema: CLAIM_SCHEMA }
  )
)

// collect all claims, deduplicate by key, track new angles
// NOTE: parallel agents may assign different keys to the same insight — dedup by key catches
// exact duplicates but NOT semantic duplicates with different keys. The archive step preserves
// all claims; the synthesis step is where semantic overlap gets caught via the grouping threshold.
// A future improvement: add a semantic-dedup pass between research and verify phases.
const allClaims = []
const seenKeys = new Set()
const allNewAngles = []

for (const result of angleResults.filter(Boolean)) {
  for (const claim of result.claims) {
    if (!seenKeys.has(claim.key)) {
      seenKeys.add(claim.key)
      allClaims.push(claim)
    }
  }
  if (result.newAngles) allNewAngles.push(...result.newAngles)
}

log(`Key dedup note: ${allClaims.length} unique keys. Semantic duplicates with different keys are NOT caught here — synthesis grouping handles this.`)

log(`Research complete: ${allClaims.length} claims across ${angles.length} angles`)
log(`New angles surfaced: ${allNewAngles.length}`)

// ── PHASE 2: Verify — empirical claims only, batched 12 ──────────────────────
phase('Verify')

const empiricalClaims = allClaims.filter(c => c.evidence === 'empirical')
log(`Verify pass: ${empiricalClaims.length} empirical claims`)

const BATCH_SIZE = 12
const batches = []
for (let i = 0; i < empiricalClaims.length; i += BATCH_SIZE) {
  batches.push(empiricalClaims.slice(i, i + BATCH_SIZE))
}

const verifyResults = await parallel(
  batches.map((batch, i) => () => agent(
    `You are an adversarial verifier for research claims. You are NOT the same agent that found these claims.

**Framing: Try to refute each claim.** Your job is to find what is wrong, overstated, or unsupported — not to confirm what is right. If you tried to refute it and could not, assign high confidence. If you found a way it could be wrong, assign medium or low.

For each claim below:
1. Does the source say what the claim says — or does it say something subtly different? Find it. Look for: misquoted numbers, wrong study design, wrong year, wrong author, scope condition the claim ignores.
2. What is the n-size and study design? (One 1982 experiment with 40 participants is different from a 2024 meta-analysis of 174 studies.)
3. Find at least one study or argument that contradicts or limits the claim. Does it replicate? Name one contradicting study if it exists.
4. What does the source ACTUALLY show vs what the claim says? Flag any extrapolation — where the claim's practical advice goes beyond what the study tested.
5. Verdict: high / medium / low confidence. In your note: what checks out, what is extrapolation, what n-size concern, what contradicting evidence.

IMPORTANT: You can assign LOW confidence even when the source is real and the numbers are right — if the conclusion doesn't follow from the study design. Searching to "confirm" a claim is the failure mode — search to refute it.

Claims to verify (batch ${i + 1}/${batches.length}):
${batch.map(c => `KEY: ${c.key}\nCLAIM: ${c.claim}\nSOURCES: ${(c.sourceUrls || []).join(', ')}`).join('\n\n---\n\n')}`,
    { label: `verify:batch-${String(i + 1).padStart(2, '0')}`, phase: 'Verify', schema: VERDICT_SCHEMA }
  ))
)

// merge verdicts back into claims
const verdictsMap = {}
for (const result of verifyResults.filter(Boolean)) {
  for (const v of result.verdicts) {
    verdictsMap[v.key] = { confidence: v.confidence, verifyNote: v.note }
  }
}

for (const claim of allClaims) {
  if (verdictsMap[claim.key]) {
    claim.confidence = verdictsMap[claim.key].confidence
    claim.verifyNote = verdictsMap[claim.key].verifyNote
  }
}

log(`Verify complete: ${Object.keys(verdictsMap).length} verdicts`)

// ── PHASE 3: Archive — generate content, write to disk, persist new angles ────
phase('Archive')

// Generate archive content (sync transform — no agent calls here)
const validFiles = angles.map((angle, i) => {
  const result = angleResults[i]
  if (!result) return null
  const angleSlug = angle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const angleClaims = allClaims.filter(c => result.claims.some(rc => rc.key === c.key))

  const adversarialFlag = result.adversarialQueryRun === false
    ? '- ⚠️ ADVERSARIAL QUERY: NOT RUN — gap-fill required before synthesis'
    : result.adversarialQueryRun === true
      ? '- ✅ Adversarial query: run'
      : '- ⚠️ ADVERSARIAL QUERY: not confirmed in schema — verify before synthesis'

  const greyLitFlag = result.greyLitQueryRun === false
    ? '- ⚠️ GREY LITERATURE QUERY: NOT RUN — gap-fill required before synthesis'
    : result.greyLitQueryRun === true
      ? '- ✅ Grey literature query: run'
      : '- ⚠️ GREY LITERATURE QUERY: not confirmed in schema — verify before synthesis'

  const saturationNote = result.saturationNote
    ? `- Saturation note: ${result.saturationNote}`
    : ''

  const saturationLog = [
    ...(result.queriesRun || []).map((q, j) =>
      `- Query ${j + 1}: "${q}" — ${result.newKeysPerQuery?.[j] ?? '?'} new claim keys`
    ),
    adversarialFlag,
    greyLitFlag,
    saturationNote,
  ].filter(Boolean).join('\n')

  const claimsText = angleClaims.map(c => {
    const conf = c.confidence ? `\n- confidence: ${c.confidence}` : ''
    const verifyNote = c.verifyNote ? `\n\n**Verify note:** ${c.verifyNote}` : ''
    return `### [key: ${c.key}]
- evidence: ${c.evidence}${conf}
- group: ${c.group}
- sources: ${(c.sourceUrls || []).join(', ')}

**Claim:** ${c.claim}${verifyNote}`
  }).join('\n\n---\n\n')

  const nullText = (result.nullResults || []).length > 0
    ? `## Null results\n${result.nullResults.map(n => `- ${n}`).join('\n')}`
    : '## Null results\n- None'

  const newAnglesText = (result.newAngles || []).length > 0
    ? `## New angles surfaced\n${result.newAngles.map(a => {
        if (typeof a === 'string') return `- ${a}`
        return `- **${a.title}**\n  Target decision: ${a.groundingTarget}\n  Would find: ${a.wouldFind}`
      }).join('\n')}`
    : ''

  const content = `# Research Archive: ${angle.title}

## Saturation log
${saturationLog || '- (no saturation log recorded)'}
- Saturated: ${result.saturated ? 'YES (both conditions: key convergence + 2+ source types)' : 'NO — review needed (check saturation note above)'}

---

## Claims (${angleClaims.length})

${claimsText || '(no claims extracted)'}

---

${nullText}

${newAnglesText}
`
  return { slug: angleSlug, content, claimCount: angleClaims.length }
}).filter(Boolean)

// Write archive files to disk
await parallel(validFiles.map(f => () =>
  agent(
    `Write the following content to the file at this exact path: ${archivePath}/${f.slug}.md\n\nUse the Write tool. Create the file (overwrite if it exists).\n\nContent:\n${f.content}\n\nReturn "written: ${f.slug}" when done.`,
    { label: `write:${f.slug}`, phase: 'Archive' }
  )))

// Persist new angles to RESEARCH_ANGLES.md
if (allNewAngles.length > 0) {
  const anglesText = allNewAngles.map(a =>
    typeof a === 'object'
      ? `- **${a.title}** (${a.priority || 'P2'}): ${a.wouldFind || ''} [grounding: ${a.groundingTarget || 'new direction'}]`
      : `- ${a}`
  ).join('\n')
  await agent(
    `Append these new research angles to the end of the file at: ${researchAnglesPath}\n\nIf the file exists: use the Edit tool to append at the very end of the file.\nIf the file does not exist: use the Write tool to create it with this content as the initial content.\n\nContent to append:\n\n## New angles surfaced (wave run)\n${anglesText}\n\nReturn "appended: RESEARCH_ANGLES.md" or "created: RESEARCH_ANGLES.md" when done.`,
    { label: 'persist-new-angles', phase: 'Archive' }
  )
}

const totalClaims = validFiles.reduce((n, f) => n + f.claimCount, 0)
const empiricalCount = allClaims.filter(c => c.evidence === 'empirical').length
const consensusCount = allClaims.filter(c => c.evidence === 'consensus').length
const anecdoteCount = allClaims.filter(c => c.evidence === 'anecdote').length
const highVerdict = allClaims.filter(c => c.confidence === 'high').length
const medVerdict = allClaims.filter(c => c.confidence === 'medium').length
const lowVerdict = allClaims.filter(c => c.confidence === 'low').length

log(`Archive ready: ${validFiles.length} angle files, ${totalClaims} claims total`)

return {
  summary: {
    anglesRun: angles.length,
    totalClaims,
    breakdown: { empirical: empiricalCount, consensus: consensusCount, anecdote: anecdoteCount },
    verifyResults: { high: highVerdict, medium: medVerdict, low: lowVerdict, unverified: empiricalCount - (highVerdict + medVerdict + lowVerdict) },
    newAngles: allNewAngles,
    nullResultCount: angleResults.filter(Boolean).reduce((n, r) => n + (r.nullResults?.length || 0), 0),
  },
  archiveFiles: validFiles,
  allClaims,
  instructions: `Archive files written to ${archivePath}/. New angles appended to ${researchAnglesPath}. Next: run research-synthesis.md (Phase 4) on the archived claims.`,
}
