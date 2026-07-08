# Travel Design Process

Purpose: a repeatable process for creating or refreshing a destination design on the "Where To, Crew?" travel site without losing previous destination designs.

This is separate from `Travel-Plan-Playbook.md`. The playbook owns trip research/content. This file owns design sourcing, theme preservation, code-snippet gathering, and Claude Design handoff.

## Principle

Each destination can have its own visual theme, but the site keeps one shared planning skeleton:

- Home
- Destination switcher
- Sign up
- Plan draft
- Plan
- Emergency / checklist support

Design changes should not erase older destination looks. They become selectable themes/destination experiences.

## Roles

- **Claude Code**
  - Reads the existing site and prior handoffs.
  - Finds how the previous design was created.
  - Researches references, motion ideas, CSS/JS snippets, and visual patterns.
  - Creates a clear one-page brief plus appendices/reference material for Claude Design.
  - Preserves or archives old design attempts safely.

- **Claude Design**
  - Builds the actual visual design.
  - Applies the concept, references, snippets, and theme rules.
  - Keeps the shared skeleton working.

## Required Outputs Per Design Run

Create all run artifacts under:

`travel/design-runs/<destination-slug>/`

Required files:

- `00-brief.md`
- `01-current-design-inventory.md`
- `02-theme-preservation.md`
- `03-reference-research.md`
- `04-candidate-inventory.md`
- `05-candidate-provenance.md`
- `06-code-snippets/`
- `07-animation-alternatives/` when the destination needs a broader visual/motion exploration
- `Claude-Design-Handoff.md`
- `verification-checklist.md`

Do not hand off to Claude Design until all required files exist.

## Decision Gates

- **Gate A - Brief ready:** destination slug, scope, default/selectable/locked status, preserve/change list, content source, target site path, and old-theme behavior are explicit.
- **Gate B - Preservation ready:** previous design survival path, destination switcher behavior, default theme, and theme manifest are documented.
- **Gate C - Concept ready:** one governing concept is selected, and every candidate has a concept-fit status.
- **Gate D - Research ready:** every candidate has a provenance row with a source URL or an explicit researched reason no usable source/code exists.
- **Gate E - Code pack ready:** local snippet/demo files exist for all core candidates and for any strong candidate where code is materially useful. Candidates without local code must explain why source link / implementation notes are enough.
- **Gate F - Alternatives ready if needed:** if the design relies on a major signature mechanic, include 2-3 alternatives for that mechanic or explain why the core snippet is enough.
- **Gate G - Handoff ready:** required run files exist, non-goals are stated, Claude Design source-use expectations are included, code snippets and alternatives are linked, and verification checklist is included.

## Phase 0 - Brief the design job

Capture only the choices that change design direction:

- Destination slug / theme key.
- Destination name and status: default / selectable / locked / future.
- Current default before the change.
- Target default after the change.
- Mood: e.g. observatory night, Polish road-trip adventure, Paris city break.
- Must-preserve pieces from current design.
- Must-change pieces.
- Whether this is a new destination theme or a full site-shell redesign.
- Whether old destination design remains selectable.
- Content source file.
- Current site folder.
- Target implementation folder if known.
- Build/preview command if known.
- Required viewports: desktop, mobile, any special phone size.
- Known constraints: no redesign of specific pieces, no deleted old theme, local/online asset requirements.

Example:

```text
Destination slug: observatory
Default destination: Observatory
Current default before change: Poland
Keep selectable: Poland
Future selectable: Paris
Shared skeleton: yes
Design scope: mostly new look, same planning structure
Old Poland design: preserve as "Poland theme"
Content source: travel/Observatory-Trip-Research.md
```

Record this phase in `travel/design-runs/<destination-slug>/00-brief.md`.

## Phase 1 - Inventory current design assets

Find and record:

- Current live/current site folder.
- Current deployment/export folder, if different.
- Current routes/pages.
- Theme state storage or routing behavior, if it already exists.
- Previous design attempts.
- Existing CSS/JS primitives.
- Existing image assets.
- Asset pipeline: local files, generated images, hotlinks that must be replaced.
- Build tooling / no-build setup.
- Existing reference packs.
- Existing handoff docs.
- Existing demos/snippets.
- Existing responsive breakpoints or mobile constraints.
- Design-system/component files.

For this project, important prior design sources include:

- `travel/Trip-Site-Handoff/01-specs/Trip-Site-Concept-and-Craft.md`
- `travel/Trip-Site-Handoff/01-specs/Trip-Site-Design-Brief.md`
- `travel/Trip-Site-Handoff/01-specs/Trip-Site-Resources.md`
- `travel/Trip-Site-Handoff/04-reference-sites/REFERENCE-NOTES.md`
- `travel/Trip-Site-Handoff/03-working-demos/`

Do not delete old design work just because it is not current. Archive it first.

Record this phase in `travel/design-runs/<destination-slug>/01-current-design-inventory.md`.

## Phase 2 - Preserve the previous design as a theme

Before requesting a new design, define how the old design survives.

Minimum requirement:

- Home has a visible destination/theme switcher.
- Default destination/theme can change.
- Previous destination themes remain reachable.

Recommended model:

```text
Theme key: observatory | poland | paris | future
Default theme: observatory
Switcher labels: Observatory, Poland, Paris
Poland behavior: opens previous Poland visual system
Observatory behavior: opens new default visual system
Paris behavior: locked/future unless researched
```

For the builder, specify that a theme is not just a color change. A destination theme may change:

- hero treatment
- palette
- type mood
- motion motif
- ambient layer
- route/map metaphor
- card style
- photo/video style

Shared planning components should still behave consistently.

Create a theme manifest in `travel/design-runs/<destination-slug>/02-theme-preservation.md`.

Theme manifest fields:

- Theme key.
- Label shown in the switcher.
- Status: default / selectable / locked / archived.
- Is default: yes/no.
- Content source.
- Visual source folder or design origin.
- Route behavior: where the theme opens.
- Switcher behavior.
- Fallback behavior if theme assets fail.
- Old-theme survival path: how the previous theme remains reachable.
- Assets that must stay bundled for the theme to work.

Also define the **handover transition** between the old active design and the new default design. A redesign should not feel like the old destination disappeared; the Home page should make it clear that the site has moved from the previous destination mood into the new one.

For example:

```text
Previous active design: Poland / drawn road-trip line
New default design: Observatory / cosmos
Transition idea: the road-route line leaves Poland, darkens into night, becomes a constellation/orbit line, then lands on the Observatory destination.
Switcher behavior: Poland remains available as a theme/destination button.
```

The handover transition can be a loader, first-screen animation, destination switcher animation, scroll moment, or page-transition motif. It should explain the design change through motion, not through a paragraph of text.

Do not proceed to visual research until the default theme, preserved themes, switcher behavior, and old-theme survival path are written down.

## Phase 3 - Research visual references

Do this per destination. Gather references for the destination mood, not generic travel beauty.

For each reference, capture:

- URL
- site/source name
- date checked
- why it fits
- what to borrow
- what not to copy
- screenshots if the design tool cannot browse
- fonts / colors / motion notes if relevant
- fallback if the link disappears

Useful source categories:

- Awwwards, FWA, CSS Design Awards, Godly, Land-book, SiteInspire.
- Codrops / Tympanus demos.
- GSAP showcase and docs.
- CodePen searches for specific effects.
- UIverse, Animista, Hover.css for small CSS snippets.
- Tourism boards, museum sites, observatory/science sites, hospitality sites.

Keep references ranked:

- Primary inspiration
- Supporting references
- Code-technique references
- Rejected references with reason

Record this phase in `travel/design-runs/<destination-slug>/03-reference-research.md`.

Before collecting individual code snippets, also run a **source-pool audit**. This prevents the run from grabbing random snippets and missing the major sites that are built specifically for shared CSS/animation/code demos.

Minimum source pools to check:

- **Codrops / Tympanus Creative Hub** - creative web demos, GSAP, SVG, scroll, WebGL, page transitions.
- **GSAP docs / GSAP demos / GSAP showcase** - reliable production patterns for ScrollTrigger, DrawSVG, MorphSVG, MotionPath, SplitText, Flip.
- **CodePen** - largest broad creative-code pool; use targeted searches.
- **UIverse** - copy-paste UI elements: buttons, cards, inputs, loaders, toggles.
- **Animista** - tweakable CSS keyframe animations.
- **CSSFX** - simple click-to-copy CSS effects.
- **FreeFrontend** - aggregated HTML/CSS/JS animation examples, often with CodePen originals.
- **Awwwards / Godly / Land-book / SiteInspire** - inspiration and quality benchmark, not usually direct code.
- **Three.js examples/demos** - only for 3D/particle work with static fallback.

Record the ranked source-pool audit in `03-reference-research.md`, including:

- which pools were checked
- what each pool is best for
- which pools should be used for core mechanics
- which pools should be used only for small UI/microinteractions
- which pools are inspiration-only

Do not proceed to Phase 6 code collection until this source-pool audit exists.

## Phase 4 - Define one governing concept

Do not hand Claude Design a random list of effects. Define one concept that explains the whole destination.

The Poland concept was:

- "The Drawn Route Line"
- One route line as logo, nav, loader, progress, transition, and map motif.

Future destination concepts should be similarly singular.

Examples:

- Observatory: "The Clear-Sky Call" / "Orbit to the Telescope" / "Night Map"
- Paris: "City Layers" / "A Timed City Walk" / "Postcards and Metro Lines"

The concept should drive:

- navigation
- hero
- transitions
- scroll progress
- button/hover behavior
- map/route section
- Plan-draft state feedback

## Phase 5 - List the full design-code candidate inventory

Before collecting code, make a broad list of everything that might support the destination concept.

The list should be wider than the final build will use. Claude Design is less likely to research independently unless prompted, so the handoff should give it enough researched options to choose from.

For each candidate, assign:

- **ID** - stable ID such as `CAND-001`.
- **Candidate** - short name.
- **Priority** - core / strong / maybe / nice.
- **Role** - hero, transition, navigation, cards, background, route/map, Plan-draft UI, form, micro-interaction, etc.
- **Research status** - not researched / source found / code found / local demo made.
- **Concept fit** - supports concept directly / supports shared skeleton / reject.
- **Decision** - recommend / optional / reject.

Use this table shape:

| ID | Candidate | Role | Priority | Concept fit | Research status | Source summary | Decision |
|---|---|---|---|---|---|---|---|
| CAND-001 | Road line to constellation transition | handover transition | core | supports concept directly | source found | GSAP path morph / constellation refs | recommend |

Example for an astronomy destination:

- Theme/destination switcher.
- Road-line-to-constellation handover transition.
- Starfield hero.
- Constellation route line.
- Orbiting planet/nav markers.
- Telescope reticle cursor.
- Moon phase/date widget.
- Weather/clear-sky status badge.
- Night-sky gradient and grain.
- Star-trail scroll effect.
- Planetary loading animation.
- Scroll-driven route from Kaunas to Observatory.
- Card hover with parallax stars.
- Plan-draft option cards with "sky status" tags.
- Timeline scrubber from afternoon drive to night telescope slot.
- Form field focus animations.
- Button hover effects.

Do not treat this inventory as a build mandate. It is a researched menu.

Reject candidates that do not support the governing concept or the shared skeleton. Rejected candidates can stay in the table with a reason; they should not receive implementation effort.

Record this phase in `travel/design-runs/<destination-slug>/04-candidate-inventory.md`.

## Phase 6 - Gather source links and code for every candidate

After the inventory, collect source/code material for every candidate. The amount of depth can vary by priority, but no candidate should be left without provenance.

Recommended collection rule:

- **Core** - source link + code/demo or enough implementation notes to build it.
- **Strong** - source link + code/demo where possible; otherwise detailed technique notes.
- **Maybe** - source link + short implementation note.
- **Nice** - source link + one-line note explaining why it might help.

This gives Claude Design a complete researched menu. The final handoff should still say that not every candidate must be used; the builder should choose what reinforces the governing concept.

Claude Code should provide proven, small pieces the design tool can reuse or research from. Source links alone are not enough for the main mechanics. The Poland process included actual working code demos; future destination runs should do the same.

Useful snippet/source categories:

- page transition
- handover transition from old theme to new theme
- reveal system
- cursor/magnetic buttons
- route/map line
- starfield / constellation / orbital motion
- scroll-linked progress
- card hover
- tabs/switcher
- calendar/date treatment
- weather/status badge
- timeline scrubber

Snippet rules:

- Prefer vanilla HTML/CSS/JS with CDN libraries.
- Keep snippets tiny and documented.
- Do not make the full site yourself if Claude Design owns the build.
- Use local assets when bundling examples.
- Do not include orphan snippets. Every code/design candidate must include where it came from and why it is included.
- Create a local snippet/demo pack under `travel/design-runs/<destination-slug>/06-code-snippets/`.
- For every **core** candidate, include a local runnable snippet/demo unless the candidate is purely strategic/content-only.
- For every **strong** candidate where the technique is visual or interactive, include either a local runnable snippet/demo or a clear implementation-notes file.
- The local demos should be small, static, and inspectable: usually one `.html` file per effect, with embedded CSS/JS or clearly named adjacent files.
- Do not stop at links to CodePen/Codrops/GSAP docs when the effect is central to the design. Adapt the technique into a local demo that Claude Design can open without rediscovering the code.
- If a demo uses CDN libraries, pin versions where practical.
- If a candidate is intentionally not given code, write the reason in provenance, such as "inspiration only", "content/state model only", or "too heavy; use source as mood reference".

For each candidate, record:

- **ID** - same `CAND-###` used in the inventory.
- **Name** - short label for the effect/pattern.
- **Purpose** - what it would do on this travel site.
- **Priority** - core / strong / maybe / nice.
- **Source URL** - original tutorial, demo, docs, CodePen, gallery page, or inspiration page.
- **Source type** - tutorial / demo / docs / inspiration / snippet.
- **Source/site name** - human-readable source name.
- **Date checked** - when the source was last verified.
- **Tech** - vanilla CSS, GSAP, Lenis, Three.js, canvas, etc.
- **Why it fits** - one practical sentence tied to the destination concept.
- **What to avoid** - performance risk, too flashy, weak mobile behavior, off-theme, etc.
- **Research result** - code found / technique only / inspiration only / no usable source found.
- **Implementation depth** - demo/code / implementation notes / source link only / rejected.
- **Fallback** - what to use if the source disappears or is too heavy.

The point is not to force Claude Design to use every snippet. The point is to give it traceable research so it can inspect the originals and choose coherently.

Use this table shape:

| ID | Name | Priority | Source URL | Source type | Source/site | Date checked | Tech | Research result | Implementation depth | Why it fits | What to avoid | Fallback |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CAND-001 | Road line to constellation transition | core | https://... | tutorial | Codrops | 2026-06-02 | GSAP/SVG | technique found | implementation notes | Converts Poland route motif into cosmos motif | overlong intro | simple SVG DrawSVG fade |

Record this phase in `travel/design-runs/<destination-slug>/05-candidate-provenance.md`.

Also create:

`travel/design-runs/<destination-slug>/06-code-snippets/`

Minimum snippet-pack contents:

- `README.md` explaining each snippet and when to use it.
- One local demo/snippet for each core visual/interactive mechanic.
- Any supporting implementation-notes files needed for strong candidates without runnable demos.

Example snippet-pack shape:

```text
travel/design-runs/observatory/06-code-snippets/
  README.md
  road-to-constellation-transition.html
  cosmos-starfield-hero.html
  orbit-theme-switcher.html
  sky-status-badges.html
  afternoon-to-night-time-orbit.html
```

If the destination needs a richer visual/motion pass, also create:

`travel/design-runs/<destination-slug>/07-animation-alternatives/`

Use this folder for curated alternatives from the best source pools. It should not be a dump of random effects. It should give Claude Design a few choices for the biggest design mechanics:

- hero/background alternative
- page/section transition alternative
- route/orbit/motion-path alternative
- button/form/status microinteraction alternative
- loader/progress alternative

Minimum alternatives-pack contents:

- `README.md`
- `SOURCES.md`
- local demos or implementation-note files for the alternatives
- clear guidance on when to use each alternative and when to ignore it

Existing Poland snippets live in:

- `travel/Trip-Site-Handoff/03-working-demos/route-line-reference/`
- `travel/Trip-Site-Handoff/03-working-demos/interactions-reference/`
- `travel/Trip-Site-Handoff/03-working-demos/page-transition-reference/`
- `travel/Trip-Site-Handoff/03-working-demos/ambient-reference/`

## Phase 7 - Write the Claude Design handoff

Create a destination-specific handoff at:

`travel/design-runs/<destination-slug>/Claude-Design-Handoff.md`

The handoff should start with a one-page brief that names the design direction and the few most important choices. Put the full candidate inventory and source/code provenance in appendices or linked sections so Claude Design has the material without losing the main concept.

Include:

- goal and scope
- existing site paths
- preserved themes
- default theme
- theme manifest
- shared skeleton
- destination concept
- handover transition from previous active design
- full candidate inventory
- complete candidate provenance
- local code snippet/demo pack
- recommended design direction subset
- reference list
- code snippets/demos
- required pages
- content source files
- implementation constraints
- asset map
- source-use expectations for Claude Design
- non-goals
- verification checklist

Template:

```text
# <Destination> Design Handoff

## Goal
## Preserve
## Default / Switcher Behavior
## Shared Skeleton
## Destination Concept
## Handover Transition
## Theme Manifest
## Candidate Inventory
## Complete Candidate Provenance
## Recommended Direction Subset
## References
## Snippets / Demos
## Pages to Build
## Content Sources
## Implementation Constraints
## Asset Map
## Source-Use Expectations
## Non-goals
## Verification
```

## Phase 8 - Design handoff rules

Tell Claude Design:

- Do not delete old destination themes.
- Do not flatten everything into one generic style.
- Do not make a landing page instead of the usable travel-planning experience.
- Do not hardcode plan content that should come from the selected destination.
- Use local assets, not hotlinked images.
- Keep the site phone-friendly.
- Keep reduced-motion fallbacks for heavy animation.
- Review the candidate inventory before designing.
- Open the local code snippet/demo pack before implementing the main visual mechanics.
- Use the provided candidate provenance as research starting points, but choose only the effects that reinforce the concept.
- Include a source-use map in its output or final summary:
  - sources inspected
  - sources used
  - sources intentionally ignored
  - which UI section each used source influenced

## Phase 9 - Archive safely after each cycle

After a design cycle:

- Keep the current site visible.
- Move only superseded attempts into `travel/_archive/old-site-attempts/YYYY-MM-DD-<destination>-<short-label>/`.
- Do not archive an active selectable theme or any assets it needs at runtime.
- Keep source handoffs and process files.
- Keep zipped exports in `travel/_archive/zips/`.
- Do not delete unless a duplicate is proven unnecessary and the user approves.

Before moving anything, create or update an archive manifest:

`travel/_archive/ARCHIVE-NOTES.md`

Archive manifest fields:

- Date.
- Source path.
- Destination path.
- Reason.
- File count or size.
- Whether the item is still referenced.
- Whether active themes depend on it.
- Post-archive verification performed.

Prefer copy-then-verify-then-remove for risky moves. Simple moves are acceptable only when the source is clearly an old attempt and not referenced by the current runtime.

## Output checklist

Before handing to Claude Design, verify these exact run files exist:

- `travel/design-runs/<destination-slug>/00-brief.md`
- `travel/design-runs/<destination-slug>/01-current-design-inventory.md`
- `travel/design-runs/<destination-slug>/02-theme-preservation.md`
- `travel/design-runs/<destination-slug>/03-reference-research.md`
- `travel/design-runs/<destination-slug>/04-candidate-inventory.md`
- `travel/design-runs/<destination-slug>/05-candidate-provenance.md`
- `travel/design-runs/<destination-slug>/06-code-snippets/`
- `travel/design-runs/<destination-slug>/07-animation-alternatives/` if created or required by the brief
- `travel/design-runs/<destination-slug>/Claude-Design-Handoff.md`
- `travel/design-runs/<destination-slug>/verification-checklist.md`

Also verify:

- Every Phase 5 candidate has a Phase 6 provenance row with source URL or explicit researched reason no usable source/code exists.
- Every core visual/interactive candidate has a local snippet/demo or an explicit reason no local code is appropriate.
- The handoff links to `06-code-snippets/` and names the most important demos.
- If `07-animation-alternatives/` exists, the handoff links to it and explains that alternatives are optional, not mandatory.
- Theme manifest includes old-theme survival path.
- Handoff includes non-goals and source-use expectations.

## Verification checklist for the built design

- Default destination opens correctly.
- Previous destination design is still reachable.
- Previous destination route URLs still work.
- Selected theme persistence works if the site stores theme state.
- Theme switcher works on desktop and mobile.
- Shared skeleton still works.
- Destination content is not cross-contaminated.
- Plan draft and Plan pages read from the right destination state.
- Heavy animation has reduced-motion fallback.
- Images are local.
- No hotlinked assets remain unless explicitly approved.
- Console has no major runtime errors.
- Build/lint/no-build verification command was run if applicable.
- Desktop and mobile screenshots were captured if the task includes implementation verification.
- Sign-up, Plan draft, and Plan flows were spot-checked for the destination.
- Claude Design source-use map is present in its output/final summary.
- No old theme was deleted without approval.
