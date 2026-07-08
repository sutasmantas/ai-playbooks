# 🧭 Trip Site — Central Concept & Craft System

> The missing layer. The site has features but **no governing idea** and **no cohesion** — that's why it reads "boring," not "masterpiece." Every award site is built on ONE concept, expressed through ONE motion system, with custom animation + video. This doc supplies that. Pair with `Trip-Site-Liveliness-Spec.md` (full technique menu) + the `references/` packs.

> **The mastery principle (from the research):** *Mastery isn't the number of effects — it's that every detail is the same idea seen from another angle.* ~6–8 primitives (one easing set, one stagger, one reveal, one cursor, one transition, one recurring motif) reused on every page. **Add unrelated effects → amateur. Subtract to one coherent system → masterpiece.**

---

## 1. The Central Concept — build EVERYTHING on this

### ⭐ Recommended: "The Drawn Route Line"
The whole trip is **ONE continuous hand-drawn terracotta line** connecting the crew across destinations. The line is the brand mark, the navigation, the page transition, the scroll-progress, *and* the loader — one motif, everywhere.

How it drives every layer (this is what "everything serves the idea" means — the metaphor lives in the **nav model**, not just decoration):
- **Navigation:** Home = the full route/map with pins (Poland active; Observatory/Paris 🔒). A destination = a "stop" you drive to. The line persists at top as a where-are-we progress indicator.
- **Transitions:** every page change = the line **extends + the view pans to the next pin** (one transition, reused = signature). Sign up → Plan draft → Plan = the pin **filling in** with more route detail.
- **Motion grammar:** one easing family (a gentle accelerate/settle) on everything.
- **Copy:** wayfinding voice — "Next stop," "Plot the route," "Where to next, crew?"
- **Video:** drive / POV footage **masked into the pin / postcard shapes** (muted, looped, paused off-screen).
- **Signature interaction:** **drag along the line** to scrub between destinations; pins magnetize the cursor.
- **Preloader:** the line **draws itself into the logo** (~1.5s) and flows straight into the hero — teaching the metaphor in second one (like Obys's landing plane).
- **Content treatment:** destinations as warm **postcards** (slight rotation, a stamp "thuds" down on confirm) — adds warmth + a natural collaborative "drag-to-plan."

**Why this one:** a single motif is simultaneously logo + nav + transition + progress + loader + hover-underline → maximum cohesion from one idea (the Igloo / Active-Theory pattern), buildable beautifully with **just SVG + GSAP (no WebGL needed)**, and "a drawn line connecting friends" nails road-trip *and* friendship.

### Alternatives (pick one before building)
- **B · The Glovebox / Scrapbook** — the site IS the crew's travel kit (postcards, ticket stubs, fold-out map, passport stamps); planning = assembling the scrapbook. Warmest; the metaphor *is* the Plan artifact. Needs strict rules to stay cohesive.
- **C · Golden-Hour Drive** — a perpetual sunset drive; scroll = road moving; each destination a time-of-day "shade." Most cinematic/video-forward, but most decorative, heaviest, and weakest mapping to the planning steps.

---

## 2. The Cohesion System — BUILD THIS FIRST (this is what makes details "flow together")
Define once, reuse on every page. This is the difference between a system and a pile of effects.
- **One easing set** (never deviate): reveals `expo.out` · transitions/layout `expo.inOut` · short moves `power3.out` · magnetic snap `elastic.out`. Register as `gsap.defaults` + a JS constants object.
- **One timing scale:** micro `0.3s` · standard `0.8–0.9s` · hero/transition `1.0s`. Stagger: chars `0.01` · lines `0.04` · cards `0.1`. Same numbers everywhere.
- **One reveal component** — a single `reveal(el)` (SplitText / clip-path + ScrollTrigger using the tokens), data-attribute driven (`data-reveal="lines|fade|clip"`). **Every** element reveals through this one function. *(Highest-leverage build in the whole project.)*
- **One stateful custom cursor** — a dot that becomes `view / drag / → / label` by context. One system speaking one language across the site.
- **One transition primitive** (GSAP **Flip** / clip-path mask) reused for preloader→hero, card→destination-hero, and route changes.
- **One recurring motif** — the route line (loader, nav, progress, dividers, hover underline, the route-map section).
- **One scroll conductor** — **Lenis** as the single scroll source; `ScrollTrigger.update` on its scroll event; also read velocity for marquee/skew.
- **One reduced-motion + touch guard** — swaps reveals for instant fades; disables cursor/magnetic/displacement; stops idle loops. (Respecting this *is* a craft signal — and prevents the "amateur on mobile" tell.)

---

## 3. Custom animation & video (award sites have these; the current build doesn't)
- **The bespoke SVG route-map** (the signature): a hand-styled road **drawing across destinations on scroll** (DrawSVG) with a **marker traveling it** (MotionPath) and postcards popping at each waypoint. The recurring identity element — hero, progress, menu, section spine.
- **A recurring marker / compass** that drops, bobs, and points to the current destination; reused in nav / loader / pins.
- **Video discipline (the craft is in the performance):** full-bleed or masked-into-shape loops; **muted**, ≤20s, H.264 MP4 + WebM, ~10kB **blurred poster**, `preload` tuned by fold position, **paused off-screen via IntersectionObserver**. Use for hero + per-pin drive footage + short transition clips.
- **Preloader teaches the metaphor** (line draws → logo) and flows seamlessly into the hero — no hard cut.

---

## 4. Craft-detail catalog (the "loads of small things") — top payoff picks
Full menu + priorities live in `Trip-Site-Liveliness-Spec.md`. Highest payoff-for-effort, **all reinforcing the one concept**:
1. **One reveal component + easing/timing tokens** — everything inherits polish for free.
2. **One stateful custom cursor.**
3. **The SVG route motif drawing on scroll** (signature).
4. **Masked page transition** — makes a no-build multi-page site feel like a crafted SPA.
5. **Masked per-line/word text reveals** — the look of every award headline (SplitText).
6. **Button fill + label + magnetic system** — omnipresent tactility from one component.
7. **Preloader → hero Flip handoff** — high-perceived-value intro continuity.
8. **Pinned horizontal "the route" section** — one big on-theme scroll moment.
9. **Form-field craft on Sign up** — floating labels, draw-in underline, valid checkmark, error shake. Premium exactly where competitors get lazy.
10. **One WebGL hover-displacement on the destinations grid only** — the single expensive flourish, confined.
- **Ambient layer (so it's never static):** seamless marquee (speed reactive to scroll velocity) · drifting warm-gradient mesh · subtle film grain · idle motion on the motif.

---

## 5. Build sequence
Cohesion system (§2) → route motif (§3) → reveal / cursor / button / transition primitives → one-off "wow" moments (pinned route, WebGL gallery, video-in-text) → ambient layer → reduced-motion / touch pass.

## 6. Hand-off note for the design tool
> "Build the whole site around ONE concept: **The Drawn Route Line** (§1). FIRST implement the **cohesion system** (§2) — one easing set, one timing scale, one `reveal()` component, one custom cursor, one transition primitive, Lenis as the single scroll conductor, a reduced-motion guard. THEN the **SVG route-map motif** as loader + nav + progress + a pinned route section. Add video (muted, ≤20s, blurred poster, paused off-screen) masked into pins/postcards. **Reuse the same easing / stagger / reveal on EVERY element — no one-off unrelated effects.** GSAP (+ScrollTrigger / SplitText / DrawSVG / Flip / MotionPath) + Lenis via CDN, no build step, keep `prefers-reduced-motion` + touch fallbacks."
