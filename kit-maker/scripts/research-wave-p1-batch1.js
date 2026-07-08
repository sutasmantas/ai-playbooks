export const meta = {
  name: 'kit-maker-wave2-p1-batch1',
  description: 'Wave 2 P1 Batch 1: clusters C (research quality), B (meta-research), A (behavioral rules), D (kit validation) — 18 angles',
  phases: [
    { title: 'Research', detail: 'Parallel agents per angle — search queries, extract claims with evidence classification' },
    { title: 'Verify', detail: 'Adversarial verify pass on empirical claims (batched 10)' },
    { title: 'Archive', detail: 'Compile structured markdown output per angle' },
  ],
}

const ANGLES = [
  // ── CLUSTER C: Research Quality (angles 108–114) ──────────────────────────
  {
    title: 'Systematic review methodology as a model for thorough single-angle research — which elements transfer',
    queries: [
      'PRISMA systematic review methodology Moher 2009 completeness reporting checklist standards',
      'systematic review quality assessment AMSTAR criteria evidence synthesis appraisal',
      'systematic review methodological limitations validity threats critique empirical',
      'GRADE evidence grading practical guide applied systematic review methodology',
      'automated systematic review quality measurement completeness evaluation computational',
    ],
  },
  {
    title: 'Documenting search strategies for reproducibility — what is sufficient vs overhead',
    queries: [
      'PRISMA-S search reporting extension Rethlefsen 2021 systematic review documentation standards',
      'search reproducibility systematic reviews librarian documentation methods replication',
      'search strategy failures reproducibility gaps literature review empirical audit',
      'search documentation practical guide applied research librarians how-to',
      'search strategy reproducibility measurement audit automated AI computational',
    ],
  },
  {
    title: 'Confirmation bias in research — how to structure search to actively find contradicting evidence',
    queries: [
      'confirmation bias systematic review publication bias detection Egger funnel plot meta-analysis',
      'bias sources types systematic reviews meta-analysis prevalence survey empirical',
      'confirmation bias research cherry-picking evidence selective reporting failures empirical',
      "adversarial search strategy devil's advocate bias mitigation practitioners applied guide",
      'bias detection algorithms literature search systematic computational automated',
    ],
  },
  {
    title: 'Multi-source evidence triangulation — when is one source type sufficient vs when must findings appear across types',
    queries: [
      'triangulation mixed methods research Lincoln Guba credibility trustworthiness 1985',
      'multi-source evidence synthesis systematic review qualitative quantitative integration',
      'single source failures evidence reliability triangulation absence risks empirical',
      'triangulation practitioners guide credibility mixed methods applied research',
      'information fusion multiple evidence sources quantitative reliability measurement',
    ],
  },
  {
    title: 'Knowing when you understand deeply enough — mechanism vs fact as a depth signal',
    queries: [
      'mechanistic explanation causal understanding vs correlation research quality depth signal',
      'evidence hierarchy depth quality systematic review grading mechanism',
      'surface learning deep learning mechanism shallow research failure modes empirical',
      'research depth practitioners guide mechanism understanding vs fact collection applied',
      'automated research quality assessment depth vs breadth measurement computational',
    ],
  },
  {
    title: 'Systematically searching for null results and absence-of-evidence as research outputs',
    queries: [
      'absence of evidence evidence of absence null results reporting Altman Bland BMJ 1995',
      'publication bias null results underreporting systematic reviews meta-analysis empirical',
      'null result interpretation errors absence evidence assumption failures empirical',
      'grey literature unpublished results search strategy systematic reviews practitioners',
      'null result detection automated literature mining gap identification computational',
    ],
  },
  {
    title: 'Meta-research as a foundational skill — frameworks for doing research well across domains',
    queries: [
      'Ioannidis meta-research research on research discipline 2015 PLoS Biology evidence quality',
      'meta-research methodology systematic review research quality framework improvement',
      'research quality failures meta-research evidence base critique empirical',
      'evidence-based practice practitioners meta-research application skills guide',
      'computational meta-research automated quality assessment NLP applied',
    ],
  },

  // ── CLUSTER B: Meta-Research Methodology (angles 12–14) ──────────────────
  {
    title: 'Meta-research methodology — how to do research well; can the methodology itself be improved?',
    queries: [
      'PRISMA reporting systematic reviews Moher 2009 research methodology checklist standards',
      'meta-research Ioannidis improving research quality research on research 2014 PLOS Medicine',
      'systematic review methodology failures limitations biases validity threats critique',
      'evidence-based practice research methodology practitioners applied guide',
      'automated systematic review NLP information retrieval AI-assisted meta-analysis',
    ],
  },
  {
    title: 'Search strategies query formulation and source evaluation — information finding as a learnable skill',
    queries: [
      'Bates berrypicking model information seeking search behavior 1989 foundational',
      'information literacy search strategy systematic review librarian expert instruction',
      'search strategy failures missed evidence gaps information retrieval empirical',
      'expert vs novice search strategies practitioners query formulation database applied',
      'automated query expansion information retrieval NLP optimization quantitative',
    ],
  },
  {
    title: 'Systematic approaches to adversarial review and alternatives generation — improving first-pass outputs',
    queries: [
      'structured adversarial review red team methodology criticism organizational research quality',
      'alternative hypothesis generation systematic methodology research quality improvement',
      'peer review failures bias alternatives assessment critique empirical organizational',
      'alternatives generation lateral thinking TRIZ de Bono practitioners applied creative methods',
      'structured decision alternatives analysis quantitative comparison framework evaluation',
    ],
  },

  // ── CLUSTER A: Prompt Engineering for Behavioral Rules (angles 59–63) ─────
  {
    title: 'Behavioral rule compliance — linguistic patterns specificity and structural formats that produce consistent LLM instruction following',
    queries: [
      'system prompt behavioral compliance instruction following structural patterns Claude Anthropic empirical',
      'meta-analysis instruction following large language models prompt format compliance effect size',
      'instruction following failures LLM behavioral rule ambiguity non-compliance empirical gaps',
      'site:github.com CLAUDE.md behavioral rules examples kit system prompt agent instructions',
      'quantitative instruction compliance measurement LLM word choice specificity format comparison benchmark',
    ],
  },
  {
    title: 'Negation in LLM instruction following — do NOT do X vs only do Y vs skip X when Z',
    queries: [
      'negation comprehension large language models forbidden prohibitions do not instruction following NLP',
      'negation instruction following systematic review LLM compliance positive negative framing',
      'negative instruction failure LLM forbidden constraints non-compliance empirical failure modes',
      'positive vs negative framing prompt engineering practitioners guide which formulation works',
      'boolean negation language model benchmark evaluation negation understanding quantitative',
    ],
  },
  {
    title: 'Rule conflict resolution and priority expression in multi-rule LLM instructions',
    queries: [
      'rule conflict resolution priority instruction following LLM hierarchical competing directives',
      'multi-rule instruction following priority hierarchy systematic review LLM compliance',
      'competing directives AI agent failure modes instruction conflict unexpected behavior empirical',
      'priority instructions system prompt practitioners conflict resolution guide applied',
      'rule ordering effect LLM compliance priority expression quantitative evaluation benchmark',
    ],
  },
  {
    title: 'Instruction abstraction level — overly specific vs overly general rules in LLM instruction following',
    queries: [
      'abstract concrete instructions LLM generalization specificity overfitting behavioral',
      'instruction abstraction level following generalization meta-analysis systematic review',
      'overly specific rule failures edge cases LLM overfitting behavioral out-of-distribution',
      'rule abstraction level practitioners prompt engineering which level works applied guide',
      'instruction specificity measurement compliance quantitative study LLM evaluation',
    ],
  },
  {
    title: 'Sequential process and workflow instruction following in LLM agents — distinct from task instructions',
    queries: [
      'chain-of-thought Wei 2022 sequential multi-step task following LLM procedural NeurIPS',
      'systematic review multi-step instruction following sequential workflow LLM agentic',
      'sequential instruction failure multi-step task breakdown LLM process order error',
      'workflow procedure prompt practitioners recipe following sequential steps applied guide',
      'procedural instruction following benchmark evaluation multi-step sequential LLM',
    ],
  },

  // ── CLUSTER D: Kit Validation and Behavioral Testing (angles 22–24) ───────
  {
    title: 'Validation methodology for AI behavioral kits — how to verify a kit produces intended behavior',
    queries: [
      'LLM evaluation methodology instruction following compliance testing benchmark empirical',
      'AI behavior validation systematic review methods LLM agent evaluation',
      'AI evaluation failures benchmark inadequacy validity threats instruction following',
      'prompt testing practitioners verify Claude behavior kit validation applied guide',
      'automated LLM instruction compliance testing benchmark evaluation quantitative',
    ],
  },
  {
    title: 'Behavioral testing methods for LLM instruction compliance — SKIM two queries only',
    queries: [
      'behavioral testing large language models prompt robustness evaluation compliance',
      'systematic review LLM evaluation methods instruction following testing',
    ],
  },
  {
    title: 'Systematic failure modes and edge cases that kits miss — robustness gaps in AI instruction sets',
    queries: [
      'edge case failure modes AI instruction following robustness analysis empirical',
      'systematic review AI agent failure modes robustness gaps instruction',
      'robustness failures LLM unexpected inputs edge cases documentation empirical',
      'robustness testing practitioners AI kit coverage gaps how to find applied',
      'adversarial robustness testing automated edge case generation LLM quantitative',
    ],
  },
]

const CLAIM_SCHEMA = {
  type: 'object',
  properties: {
    claims: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key:        { type: 'string', description: 'short-hyphenated-slug, unique across this angle' },
          claim:      { type: 'string', description: 'Full actionable finding: study + numbers + mechanism + scope + implication for kit design' },
          group:      { type: 'string', description: 'topic cluster slug' },
          evidence:   { type: 'string', enum: ['empirical', 'consensus', 'anecdote'] },
          sourceUrls: { type: 'array', items: { type: 'string' } },
        },
        required: ['key', 'claim', 'group', 'evidence'],
      },
    },
    saturated:       { type: 'boolean', description: 'true when consecutive queries returned no new keys' },
    queriesRun:      { type: 'array', items: { type: 'string' } },
    newKeysPerQuery: { type: 'array', items: { type: 'number' } },
    nullResults:     { type: 'array', items: { type: 'string' } },
    newAngles:       { type: 'array', items: { type: 'string' } },
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
          note:       { type: 'string' },
        },
        required: ['key', 'confidence', 'note'],
      },
    },
  },
  required: ['verdicts'],
}

const domain = 'kit-maker agent kit design and deployment'
const archivePath = 'kit-maker/research_archive'
const researchAnglesPath = 'kit-maker/RESEARCH_ANGLES.md'

// ── PHASE 1: Research ────────────────────────────────────────────────────────
phase('Research')

const angleResults = await pipeline(
  ANGLES,
  (angle, _, i) => agent(
    `You are a research agent for the kit-maker project. Domain: ${domain}.

Your angle: "${angle.title}"

Run ALL of the following search queries in order. After each query, record how many NEW claim keys you found. When consecutive queries return 0 new keys: the angle is saturated — stop early.

Queries:
${angle.queries.map((q, n) => `${n + 1}. ${q}`).join('\n')}

For each finding, extract a CLAIM — not a source. Each claim must include:
- key: short-hyphenated-slug unique to this angle
- claim: The specific finding with: study/source name, numbers/effect sizes where available, the MECHANISM (why this is true, not just that it is), SCOPE CONDITIONS (when this applies and when it doesn't), and the practical implication for kit-maker design
- group: topic cluster slug
- evidence: "empirical" (controlled study with measurable results), "consensus" (widespread practitioner agreement, no single study), or "anecdote" (single source or example)
- sourceUrls: direct links

Also record nullResults (queries that returned nothing useful, with reason) and newAngles (gaps this angle reveals not in the current angle list).

CRITICAL: Return claims, not sources. A source with no extracted claim is useless.
CRITICAL: State mechanism and scope conditions. A claim without these is over-generalized.
CRITICAL: For angles 108-114 (research methodology): this field HAS extensive empirical literature — PRISMA, AMSTAR, GRADE, Cochrane. Expect empirical claims here.
CRITICAL: For angles 59-63 (behavioral rules): expect mostly consensus/anecdote. No canonical empirical literature exists yet. Do NOT treat consensus-heavy results as a research failure.`,
    { label: `research:${angle.title.slice(0, 45)}`, phase: 'Research', schema: CLAIM_SCHEMA }
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

log(`Research complete: ${allClaims.length} unique claims across ${ANGLES.length} angles`)
log(`New angles surfaced: ${allNewAngles.length}`)

// ── PHASE 2: Verify empirical claims ────────────────────────────────────────
phase('Verify')

const empiricalClaims = allClaims.filter(c => c.evidence === 'empirical')
log(`Verify pass: ${empiricalClaims.length} empirical claims to verify`)

const BATCH_SIZE = 10
const batches = []
for (let i = 0; i < empiricalClaims.length; i += BATCH_SIZE) {
  batches.push(empiricalClaims.slice(i, i + BATCH_SIZE))
}

const verifyResults = await parallel(
  batches.map((batch, i) => () => agent(
    `You are an adversarial verifier. You did NOT find these claims — verify them independently.

For each claim:
1. Does the cited source exist and say what the claim says? Find it.
2. What is the n-size and study design? (One 1982 lab study ≠ 2024 meta-analysis of 174 studies.)
3. What does the source ACTUALLY show vs what the claim says? Flag extrapolation — where practical advice goes beyond what the study tested.
4. Has this been replicated? Name confirming and contradicting studies if they exist.
5. Verdict: high / medium / low. Be specific about what checks out and what doesn't.

You may assign LOW confidence even when the source is real — if the conclusion doesn't follow from the study design.

Claims (batch ${i + 1}/${batches.length}):
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

// ── PHASE 3: Archive — generate content, write to disk, persist new angles ────
phase('Archive')

// Generate archive content (sync transform — no agent calls)
const validFiles = ANGLES.map((angle, i) => {
  const result = angleResults[i]
  if (!result) return null
  const slug = angle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60)
  const angleClaims = allClaims.filter(c => result.claims.some(rc => rc.key === c.key))

  const satLog = (result.queriesRun || []).map((q, j) =>
    `- Query ${j + 1}: "${q}" — ${result.newKeysPerQuery?.[j] ?? '?'} new keys`
  ).join('\n')

  const claimsText = angleClaims.map(c => {
    const conf = c.confidence ? `\n- confidence: ${c.confidence}` : ''
    const vn = c.verifyNote ? `\n\n**Verify note:** ${c.verifyNote}` : ''
    return `### [key: ${c.key}]\n- evidence: ${c.evidence}${conf}\n- group: ${c.group}\n- sources: ${(c.sourceUrls || []).join(', ')}\n\n**Claim:** ${c.claim}${vn}`
  }).join('\n\n---\n\n')

  const nullText = (result.nullResults || []).length > 0
    ? `## Null results\n${result.nullResults.map(n => `- ${n}`).join('\n')}`
    : '## Null results\n- None'

  const newAnglesText = (result.newAngles || []).length > 0
    ? `## New angles surfaced\n${result.newAngles.map(a => `- ${a}`).join('\n')}`
    : ''

  return {
    slug,
    content: `# Research Archive: ${angle.title}\n\n## Saturation log\n${satLog || '- (no log)'}\n- Saturated: ${result.saturated ? 'YES' : 'NO — review needed'}\n\n---\n\n## Claims (${angleClaims.length})\n\n${claimsText || '(no claims extracted)'}\n\n---\n\n${nullText}\n\n${newAnglesText}\n`,
    claimCount: angleClaims.length,
  }
}).filter(Boolean)

// Write archive files to disk
await parallel(validFiles.map(f => () =>
  agent(
    `Write the following content to the file at this exact path: ${archivePath}/${f.slug}.md\n\nUse the Write tool. Create the file (overwrite if it exists).\n\nContent:\n${f.content}\n\nReturn "written: ${f.slug}" when done.`,
    { label: `write:${f.slug}`, phase: 'Archive' }
  )))

// Persist new angles to RESEARCH_ANGLES.md
if (allNewAngles.length > 0) {
  const anglesText = allNewAngles.map(a => `- ${typeof a === 'string' ? a : JSON.stringify(a)}`).join('\n')
  await agent(
    `Append these new research angles to the end of the file at: ${researchAnglesPath}\n\nIf the file exists: use the Edit tool to append at the very end.\nIf not: use Write to create it.\n\nContent to append:\n\n## New angles surfaced (Batch 1 wave)\n${anglesText}\n\nReturn "appended" or "created" when done.`,
    { label: 'persist-new-angles', phase: 'Archive' }
  )
}

const total = validFiles.reduce((n, f) => n + f.claimCount, 0)
const emp = allClaims.filter(c => c.evidence === 'empirical').length
const con = allClaims.filter(c => c.evidence === 'consensus').length
const anc = allClaims.filter(c => c.evidence === 'anecdote').length

log(`Archive written: ${validFiles.length} files, ${total} claims (empirical: ${emp}, consensus: ${con}, anecdote: ${anc})`)

return {
  summary: {
    batch: 'P1 Batch 1 — clusters C, B, A, D',
    anglesRun: ANGLES.length,
    totalClaims: total,
    breakdown: { empirical: emp, consensus: con, anecdote: anc },
    verifyResults: {
      high: allClaims.filter(c => c.confidence === 'high').length,
      medium: allClaims.filter(c => c.confidence === 'medium').length,
      low: allClaims.filter(c => c.confidence === 'low').length,
    },
    newAngles: allNewAngles,
  },
  archiveFiles: validFiles,
  allClaims,
  instructions: `Archive files written to ${archivePath}/. New angles appended to ${researchAnglesPath}. Next: run Batch 2 script. Then synthesize in cluster order: C → B → A → D.`,
}
