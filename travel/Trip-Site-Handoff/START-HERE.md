# 🚀 Trip Site — Handoff Pack (START HERE)

> 👉 **If you're the building agent, read `BUILD-BRIEF.md` first** — it's the authoritative, self-contained brief. This pack is now **fully bundled** (specs + demos + the Energylandia checklist + reference sites + the existing sign-up form + the previous build), so everything referenced below is in this folder — nothing needs to be fetched or "already had."

This pack holds **only what's NEW or UPDATED** since the last upload, so nothing is duplicated.

## ⚠️ Content overhauled again — see Trip-Site-Content.md (v3)
The v2 build turned the plan-draft into a flat pile of ungrouped toggles. **v3 restructures it — read Content.md first.** Headline fixes:
- **Plan-draft → day-by-day, BRANCHING flow:** group every choice under Trip-wide / Day 1 / Day 2 / Day 3 / Day 4; **progressive disclosure** (picking one reveals its sub-options — e.g. choose the Morskie Oko hike → its access sub-choice appears); **NO preselections at all** (the mountain day is itself a choice, not assumed); **real detail per option** (€ impact · distance/drive-time · how long · knock-on); **booking is a decision** (each pick gets a "book?" state feeding a live bookings list). Removed "who handles what."
- **Plan page → make it DEEP:** every section a full paragraph/list, not one-liners (see the Kraków driving/legal worked example in §B). Pull full text from the Energylandia checklist.
- **Bookings (§C):** list ALL possible bookings, conditional on the choices — on the Plan page + the download.
- **Download checklist (§D) → in-depth & personalised:** the chosen plan by day + every booking + packing/docs/car/money/apps/safety/final-checks, in full.
- **New: a "Download your checklist" button** (personalized printable/PDF).
- **Section E** (added after a research/brainstorm pass) — more net-new options (Tyniec kayak, Five Lakes hike, a Slovak-side day, Świętokrzyski/Sandomierz drive stops, Zatorland, etc.) **and missed *decision-types*** (arrive-night-before, 1-vs-2-day park, lodging type, rest/buffer day, fitness-tiered hikes, weather plan-B, return overnight). Surface the ⭐ ones.
- **Sign-up page (§F):** leave as-is — it already captures what's needed (no changes).
- **§E6:** the few earlier "skips" are now reinstated as honestly-tagged **extras** (only truly date/route-impossible items are excluded, with the reason).
- Division of labor: **Claude Code supplies the content (Content.md v3); Claude design does the build/layout.**

## ✅ You already have these (from the earlier upload) — reuse them, don't re-request
- **references/** — award-site screenshots + real fonts/colors/easing (REFERENCE-NOTES.md indexes them; Kudanil is the anchor). *Unchanged.*
- **Energylandia-Trip-Planning-Checklist.md** — full source for all Plan content + option detail. *Unchanged — pull from it.*
- The earlier prototype (Index.html).

## 🆕 What's in THIS pack
```
01-specs/
  Trip-Site-Concept-and-Craft.md   ⭐ NEW — the central idea + cohesion system (the missing layer)
  Trip-Site-Liveliness-Spec.md        NEW — prioritized motion menu (P0–P4)
  Trip-Site-Resources.md              NEW — CSS/animation resource toolkit + route-map tutorial
  Trip-Site-Build-Checklist.md        NEW — build structure / IA / locked-state rules
  Trip-Site-Design-Brief.md           UPDATED — replace your old copy (expanded reference board + notes)
  Trip-Site-Content.md                UPDATED v3 ⭐ — day-by-day branching plan-draft, deep Plan, bookings, download
  Trip-Site-PlanDraft-Logic.md        NEW ⭐ — reveal logic (if X→show Y) + live-total compute + bookings map + ⏱️ TIME/feasibility model (per-day budgets, over-commit warnings that name what gets squeezed, conflict rules)
  Trip-Site-Enhancements.md           NEW ⭐ — approved UX/execution/contingency features: presets, compare view, suggested tags, decision progress, per-day timeline, "today"+offline PWA, shared-gear, Plan-B per day, emergency one-pager, booking-status+sell-out alarm, pre-trip countdown, why-popovers. (Data → one shared Excel later; build off one plan-state object.)
03-working-demos/                     NEW — 4 verified, runnable HTML demos to COPY
  route-line-reference/      ⭐ the signature: SVG route draws on scroll + marker + camera follow
  interactions-reference/       custom cursor + magnetic buttons + masked split-text reveals
  page-transition-reference/    masked panel page transition (open index.html, click the link)
  ambient-reference/            velocity-reactive marquee + drifting gradient + film-grain
```
All demos: vanilla HTML/CSS/JS + GSAP & Lenis via CDN, **no build step**, palette-matched (forest `#16241c` / terracotta `#c0613f` / paper `#f3ede1`), `prefers-reduced-motion`-aware. Each `.jpeg` is a captured preview. **Open each index.html in a browser to see it move.**

## Read order
1. **Concept-and-Craft.md** ⭐ — build everything on "The Drawn Route Line" + the cohesion system.
2. **Design-Brief.md** (updated) — page requirements + reference board.
3. **Content.md** (updated v3 in this pack) — the words/numbers.
4. **Liveliness-Spec.md** → **Resources.md** → **Build-Checklist.md**.
5. **03-working-demos/** — copy this proven code instead of reinventing the hard parts.
6. Your existing **references/** — match that caliber.

## The principle (don't lose this)
**Mastery = every detail is the same idea from another angle.** Reuse ONE easing set, ONE timing/stagger scale, ONE `reveal()`, ONE cursor, ONE transition, ONE recurring motif (the route line) on every page. Random unrelated effects = amateur. One coherent system = masterpiece.

## 🔎 If you need MORE (research / assets you don't have)
You (the design tool) can't browse the web. So when you need something not in this pack — **more reference sites, extra screenshots, a specific animation technique, current prices, a new photo, another working snippet** — **don't guess or stub it. Ask the user to have _Claude Code_ research it and add it to this pack.** Claude Code built every demo and reference here by researching + verifying in a real browser; that's the channel for anything else.
- Quick wins are already listed in **Trip-Site-Resources.md** (galleries, Codrops tutorials, GSAP/Lenis docs, the exact scroll-driven SVG route-map article, generators). Reference it for *what* exists; ask for the actual material if you need it pulled in.
- State clearly what you're missing (e.g. "need a hero video of a mountain road", "need the cursor+magnetic snippet for React", "need 3 more minimalist-luxury refs") so it can be fetched precisely.

## Ready-to-paste prompt
> Build "Where To, Crew?" around ONE concept — **The Drawn Route Line** (Concept-and-Craft.md): one terracotta line = logo + nav + page-transition + scroll-progress + loader. FIRST set up the cohesion system (one easing set, one timing/stagger scale, one `reveal()`, one custom cursor, one transition primitive, Lenis as the single scroll conductor, reduced-motion guard). Then build the signature route-map and the motion in Liveliness-Spec (P0→P4). Use Design-Brief.md (updated) for requirements, my existing Content.md for copy/numbers, and match the caliber of my existing references/ (Kudanil = anchor). **Reuse the working code in 03-working-demos for the route line, cursor/magnetic/reveals, page transition, and ambient layer — don't reinvent them.** Stack: vanilla HTML/CSS/JS + GSAP (ScrollTrigger/SplitText/DrawSVG/MotionPath/Flip) + Lenis via CDN, no build; keep prefers-reduced-motion. Palette: forest #16241c / terracotta #c0613f / paper #f3ede1. **If you need anything not provided, ask me to have Claude Code research and add it — don't stub it.**
