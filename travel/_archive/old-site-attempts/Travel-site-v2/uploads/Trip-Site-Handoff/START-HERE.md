# 🚀 Trip Site — Handoff Pack (START HERE)

This pack holds **only what's NEW or UPDATED** since the last upload, so nothing is duplicated.

## ✅ You already have these (from the earlier upload) — reuse them, don't re-request
- **Trip-Site-Content.md** — real copy + numbers (Home, sign-up fields, plan-draft options, itinerary). *Unchanged.*
- **references/** — award-site screenshots + real fonts/colors/easing (REFERENCE-NOTES.md indexes them; Kudanil is the anchor). *Unchanged.*
- **Energylandia-Trip-Planning-Checklist.md** — the full Poland source content. *Unchanged.*
- The earlier prototype (Index.html). 

## 🆕 What's in THIS pack
```
01-specs/
  Trip-Site-Concept-and-Craft.md   ⭐ NEW — the central idea + cohesion system (the missing layer)
  Trip-Site-Liveliness-Spec.md        NEW — prioritized motion menu (P0–P4)
  Trip-Site-Resources.md              NEW — CSS/animation resource toolkit + route-map tutorial
  Trip-Site-Build-Checklist.md        NEW — build structure / IA / locked-state rules
  Trip-Site-Design-Brief.md           UPDATED — replace your old copy (expanded reference board + notes)
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
3. Your existing **Content.md** — the words/numbers.
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
