export const meta = {
  name: 'kit-maker-research-batch3',
  description: 'Batch 3: angles 169, USER-01, USER-02, 171, 176 — hardcoded angles (args parsing workaround)',
  phases: [
    { title: 'Research', detail: 'Parallel agents per angle — search all queries, extract claims' },
    { title: 'Verify', detail: 'Adversarial verify pass on empirical claims only, batched 12' },
    { title: 'Archive', detail: 'Write structured markdown to research_archive/' },
  ],
}

const angles = [
  {
    title: "Citation-graph disconnection as vocabulary-island detector — how citation network gaps signal cross-disciplinary vocabulary silos",
    queries: [
      "citation network analysis cross-disciplinary knowledge fragmentation vocabulary silos Steyvers Tenenbaum 2005",
      "systematic review cross-disciplinary literature search vocabulary inconsistency retrieval gaps empirical",
      "citation graph disconnection false detection vocabulary island failure modes cross-community search limits empirical",
      "site:github.com citation network vocabulary gap detection cross-disciplinary literature mining",
      "site:arxiv.org citation graph analysis vocabulary islands community fragmentation knowledge transfer",
    ],
  },
  {
    title: "Essential vs inferable intake information — what an AI agent must explicitly ask vs can safely assume when starting a task",
    queries: [
      "requirements elicitation essential information AI agent task planning inference vs clarification empirical",
      "systematic review conversational agent clarification questions user friction essential unknowns protocol",
      "over-clarification failure AI agent too many questions user abandonment friction empirical",
      "site:github.com CLAUDE.md intake protocol essential unknowns inferable defaults autonomous agent",
      "site:arxiv.org autonomous agent task specification clarification requirements essential inferable decision",
    ],
  },
  {
    title: "Front-loaded intake design for autonomous work — structuring upfront clarification to minimize mid-task interruptions in long-horizon agents",
    queries: [
      "front-loaded requirements gathering autonomous agent upfront clarification design empirical long-horizon",
      "systematic review requirements elicitation protocol AI agent autonomous task initiation effectiveness",
      "front-loaded intake failure modes AI agent over-specification ambiguity cascade midwork interruption empirical",
      "site:github.com autonomous agent intake design front-loaded batch clarification examples",
      "site:arxiv.org autonomous agent upfront requirements specification interrupt-free execution empirical",
    ],
  },
  {
    title: "Adversarial saturation validation — methods for verifying research saturation was not declared prematurely and that vocabulary-island gaps were covered",
    queries: [
      "search completeness systematic review stopping rule literature search saturation evidence coverage empirical",
      "systematic review completeness testing sensitivity analysis missed evidence search saturation validation",
      "premature saturation false negative failure modes literature search incomplete evidence empirical",
      "site:github.com search completeness checking sensitivity analysis literature review practitioners guide",
      "site:arxiv.org information retrieval search saturation completeness adversarial validation missed evidence",
    ],
  },
  {
    title: "Multi-task instruction completion vocabulary gap-fill — prospective memory and multi-intent parsing traditions missed in original USER-07 research",
    queries: [
      "prospective memory intention tracking concurrent task completion all sub-goals LLM empirical psychology",
      "multi-intent query processing task enumeration LLM instruction set completion systematic review",
      "task omission multi-task instruction failure LLM agent sequential list completion empirical gaps",
      "site:arxiv.org attention allocation multiple concurrent instructions LLM prospective memory task tracking",
    ],
  },
]

const archivePath = "kit-maker/research_archive"
const domain = "kit-maker agent kit design and deployment"
const researchAnglesPath = "kit-maker-research/RESEARCH_ANGLES.md"
const openDecisionsBlock = "\nOpen decisions needing evidence (priority targets for new angles):\n- intake protocol essential/inferable split (Hard Rule 13 element 8 PROVISIONAL)\n- adversarial saturation check — is Category D requirement evidence-backed?\n- citation-graph gap detection as vocabulary-frame validation method\n"

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
    saturated:    { type: 'boolean', description: 'true ONLY when ALL THREE conditions hold: (1) consecutive queries return no new keys, (2) at least 2 distinct source type domains were covered, AND (3) vocabulary-frame enumeration produced at least one query per identified research tradition. Saturation on one source type alone = false.' },
    saturationNote: { type: 'string', description: 'One sentence on saturation status: source types covered, whether all three conditions hold. REQUIRED when saturated=false.' },
    adversarialQueryRun: { type: 'boolean', description: 'true if at least one query was explicitly adversarial (targeting failures, critiques, null results)' },
    greyLitQueryRun: { type: 'boolean', description: 'true if at least one query explicitly targeted grey literature: arXiv, GitHub, preprints, practitioner blogs' },
    queriesRun:   { type: 'array', items: { type: 'string' }, description: 'exact queries run in order' },
    newKeysPerQuery: { type: 'array', items: { type: 'number' }, description: 'new claim count per query run' },
    nullResults:  { type: 'array', items: { type: 'string' }, description: 'queries that returned nothing — adversarial and grey-lit null results are valid outputs' },
    newAngles: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title:           { type: 'string' },
          priority:        { type: 'string', enum: ['P0', 'P1', 'P2', 'P3'] },
          groundingTarget: { type: 'string' },
          wouldFind:       { type: 'string' },
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

// ── PHASE 1: Research ────────────────────────────────────────────────────────
phase('Research')

const angleResults = await pipeline(
  angles,
  (angle, _, i) => agent(
    `You are a research agent for the kit-maker project. Domain: ${domain}.

Your angle: "${angle.title}"

## REQUIRED QUERY STRUCTURE

Run ALL of the following queries. After each query, record how many NEW claim keys you found.

**Source strategy:** Run Category A queries primarily via Semantic Scholar (cs.AI domain) and arXiv (cat:cs.AI OR cat:cs.MA, abs: qualifier). These are the minimum two structurally distinct source types — single-database searches achieve only 52–79% recall; two structurally distinct sources reach 95%+.

**Category A — Standard queries from angle list:**
${angle.queries.map((q, n) => `${n + 1}. ${q}`).join('\n')}

**Category B — Adversarial query (REQUIRED, do not skip):**
Two components — run both:
(a) External critique search: search for failures, critiques, null results, contradicting evidence. Phrase as: "[topic] fails because...", "critique of [topic]", "[topic] null result", "[topic] replication failure".
(b) Self-argumentation: Construct the strongest case against the current claim using first principles. Identify the weakest assumption. Model the failure mode: under what conditions would this break?
If neither finds anything meaningful: log it in nullResults — that is a valid output. Do not skip.

**Category C — Grey literature query (REQUIRED, do not skip):**
Run at least one query targeting grey literature: arXiv, GitHub, preprints, practitioner blogs.
If this domain has no meaningful grey literature: document rationale in nullResults.

**Category D — Alternative framing query (REQUIRED, do not skip):**
Run at least one query using a DIFFERENT vocabulary or research tradition than Category A used. Same phenomenon, different discipline's terminology.
Record in saturationNote whether alternative framing was explored.

## SATURATION DEFINITION

**Pre-search:** Enumerate research traditions that study this phenomenon. Format: "Tradition A: vocabulary [term1, term2]; Tradition B: vocabulary [term1, term2]."

**ALL THREE must hold before claiming saturated:**
1. Consecutive queries return claim keys already in the set
2. At least 2 distinct source type domains covered
3. Vocabulary-frame enumeration covered — at least one query per identified tradition

## CLAIM FORMAT

For each finding, extract a CLAIM:
- key: short-hyphenated-slug (unique)
- claim: Full text with study name, specific numbers, mechanism (WHY), scope conditions (when applies / doesn't), practical implication
- group: topic cluster slug
- evidence: "empirical" / "consensus" / "anecdote"
- sourceUrls: direct links

Also record:
- nullResults: queries returning nothing (adversarial + grey-lit null = valid findings)
- adversarialQueryRun: true/false
- greyLitQueryRun: true/false
- newAngles: surface BOTH decision-closing angles (close an open kit design decision) and new directions (genuinely new territory). Assign priority P0/P1/P2/P3 by importance. For each: (1) title, (2) priority, (3) groundingTarget, (4) wouldFind.
${openDecisionsBlock}
CRITICAL: Return claims, not sources. State scope conditions. State mechanism. Run adversarial and grey-lit queries.`,
    { label: `research:${angle.title.slice(0, 40)}`, phase: 'Research', schema: CLAIM_SCHEMA }
  )
)

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

log(`Research complete: ${allClaims.length} unique claims across ${angles.length} angles`)
log(`New angles surfaced: ${allNewAngles.length}`)

// ── PHASE 2: Verify ──────────────────────────────────────────────────────────
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
    `You are an adversarial verifier for research claims. Try to refute each claim.

For each claim:
1. Does the source say what the claim says — or does it say something subtly different?
2. What is the n-size and study design?
3. Find a study or argument that contradicts or limits the claim.
4. What does the source ACTUALLY show vs what the claim says? Flag extrapolation.
5. Verdict: high / medium / low confidence.

IMPORTANT: Search to REFUTE, not to confirm. Assign LOW even when source is real — if the conclusion doesn't follow from the study design.

Claims to verify (batch ${i + 1}/${batches.length}):
${batch.map(c => `KEY: ${c.key}\nCLAIM: ${c.claim}\nSOURCES: ${(c.sourceUrls || []).join(', ')}`).join('\n\n---\n\n')}`,
    { label: `verify:batch-${String(i + 1).padStart(2, '0')}`, phase: 'Verify', schema: VERDICT_SCHEMA }
  ))
)

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

// ── PHASE 3: Archive ─────────────────────────────────────────────────────────
phase('Archive')

const validFiles = angles.map((angle, i) => {
  const result = angleResults[i]
  if (!result) return null
  const angleSlug = angle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const angleClaims = allClaims.filter(c => result.claims.some(rc => rc.key === c.key))

  const adversarialFlag = result.adversarialQueryRun === false
    ? '- ⚠️ ADVERSARIAL QUERY: NOT RUN — gap-fill required before synthesis'
    : '- ✅ Adversarial query: run'
  const greyLitFlag = result.greyLitQueryRun === false
    ? '- ⚠️ GREY LITERATURE QUERY: NOT RUN — gap-fill required before synthesis'
    : '- ✅ Grey literature query: run'
  const saturationNote = result.saturationNote ? `- Saturation note: ${result.saturationNote}` : ''

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
- Saturated: ${result.saturated ? 'YES (all three conditions: key convergence + 2+ source types + vocabulary-frame coverage)' : 'NO — review needed (check saturation note above)'}

---

## Claims (${angleClaims.length})

${claimsText || '(no claims extracted)'}

---

${nullText}

${newAnglesText}
`
  return { slug: angleSlug, content, claimCount: angleClaims.length }
}).filter(Boolean)

await parallel(validFiles.map(f => () =>
  agent(
    `Write the following content to the file at this exact path: ${archivePath}/${f.slug}.md\n\nUse the Write tool. Create the file (overwrite if it exists).\n\nContent:\n${f.content}\n\nReturn "written: ${f.slug}" when done.`,
    { label: `write:${f.slug}`, phase: 'Archive' }
  )
))

if (allNewAngles.length > 0) {
  const anglesText = allNewAngles.map(a =>
    typeof a === 'object'
      ? `- **${a.title}** (${a.priority || 'P2'}): ${a.wouldFind || ''} [grounding: ${a.groundingTarget || 'new direction'}]`
      : `- ${a}`
  ).join('\n')
  await agent(
    `Append these new research angles to the end of the file at: ${researchAnglesPath}\n\nUse the Edit tool to append at the very end of the file.\n\nContent to append:\n\n## New angles surfaced — batch 3 (wave run 2026-07-02)\n${anglesText}\n\nReturn "appended: RESEARCH_ANGLES.md" when done.`,
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
  },
  archiveFiles: validFiles,
  allClaims,
  instructions: `Archive files written to ${archivePath}/. New angles appended to ${researchAnglesPath}. Next: run wave2-launch-instructions.md Steps 4a-4d.`,
}
