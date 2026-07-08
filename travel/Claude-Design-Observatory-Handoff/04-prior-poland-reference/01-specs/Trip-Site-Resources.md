# 🧰 Trip Site — CSS / Animation Resource Toolkit (2026)

> Resource sites for building award-quality motion. Stack = **vanilla HTML/CSS/JS + CDN (GSAP, Lenis), no build.** Tags: **[vanilla]** = drop-in/CDN-friendly · **[React]** = framework-only, ideas-only (reimplement in GSAP). Links verified live 2026.

## 1. Inspiration galleries
- Awwwards — https://www.awwwards.com · FWA — https://thefwa.com · CSS Design Awards — https://www.cssdesignawards.com
- **Godly** (best for animation/scroll storytelling) — https://godly.website
- Land-book — https://land-book.com · SiteInspire — https://www.siteinspire.com · Maxibestof (shows fonts used) — https://maxibestof.one · Httpster — https://httpster.net

## 2. Code tutorials & demos
- **Codrops / Tympanus** (THE resource — vanilla + GSAP demos) — https://tympanus.net/codrops · demos: https://tympanus.net/Development/
- CodePen — https://codepen.io (search "GSAP ScrollTrigger", "Lenis")
- GSAP Showcase — https://gsap.com/showcase/ · GSAP learning — https://gsap.com/resources/get-started/
- Hyperplexed (recreates award effects, vanilla) — https://youtube.com/@Hyperplexed · Kevin Powell (modern CSS) — https://youtube.com/@KevinPowell · Frontend Horse — https://frontend.horse

## 3. Animation libraries (CDN/vanilla)
- **GSAP + ALL plugins — now 100% free incl. commercial** (Webflow/GreenSock, free since Apr 2025): ScrollTrigger, DrawSVG, MorphSVG, MotionPath, SplitText, ScrollSmoother, Flip. CDN `cdn.jsdelivr.net/npm/gsap@3.13/dist/` — **core of our stack** [vanilla]
- **Lenis** smooth scroll (MIT, ~3KB) — https://lenis.dev · CDN `unpkg.com/lenis/dist/lenis.min.js` — **core** [vanilla]
- Swiper (carousels) — https://swiperjs.com · Splitting.js (text split) — https://splitting.js.org · Anime.js — https://animejs.com · Motion One — https://motion.dev · Barba.js (page transitions) — https://barba.js.org [all vanilla]
- Lottie — https://airbnb.io/lottie/ · Rive (interactive vector + state machines) — https://rive.app [vanilla runtimes]
- AOS (simple scroll reveal, lightly maintained — prefer ScrollTrigger) — https://michalsnik.github.io/aos/ [vanilla]

## 4. Component / snippet libraries
- **UIverse** (copy-paste CSS UI) — https://uiverse.io · **Animista** (CSS keyframe generator) — https://animista.net · **Hover.css** — https://ianlunn.github.io/Hover/ · AnimXYZ — https://animxyz.com · CSS-Tricks Almanac — https://css-tricks.com/almanac/ [all vanilla]
- *Ideas-only (React):* Aceternity UI — https://ui.aceternity.com · Magic UI — https://magicui.design · react-bits — https://reactbits.dev **[React]**

## 5. Generators & micro-tools
- Easing: **easings.net** — https://easings.net · **cubic-bezier.com** — https://cubic-bezier.com
- SVG/shapes: **Clippy** clip-path — https://bennettfeely.com/clippy/ · Haikei (generative SVG bg / mesh / grain) — https://haikei.app · Blobmaker — https://blobmaker.app · Shapedivider — https://shapedivider.app · Get Waves — https://getwaves.io
- Color/gradient: Coolors — https://coolors.co · Mesh Gradient — https://meshgradient.com · Easing Gradients — https://larsenwork.com/easing-gradients/ · Grainy Gradients — https://css-tricks.com/grainy-gradients/
- Type/space: Utopia fluid scale (clamp) — https://utopia.fyi

## 6. Learning / reference
- MDN — https://developer.mozilla.org · web.dev — https://web.dev · GSAP docs — https://gsap.com/docs/v3/
- Josh W. Comeau (CSS/animation) — https://joshwcomeau.com · Emil Kowalski "Animations on the Web" (motion theory) — https://animations.dev
- Native CSS scroll-driven animations — https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-driven_animations

---

## ⭐ Signature: scroll-driven SVG route/map line (DrawSVG + MotionPath + ScrollTrigger)
The exact technique for our "route line connecting destinations" — all vanilla + GSAP CDN:
- **★ Codrops — "Creating Scroll-Driven SVG Map Animations with GSAP" (21 May 2026)** — https://tympanus.net/codrops/2026/05/21/creating-scroll-driven-svg-map-animations-with-gsap/ · **live demo** https://tympanus.net/Tutorials/ScrollMap/ — draws route (DrawSVG) + marker along it (MotionPath) + camera follow (`gsap.quickTo`). *This is the template.*
- Codrops — responsive curved path animations (17 Dec 2025) — https://tympanus.net/codrops/2025/12/17/building-responsive-scroll-triggered-curved-path-animations-with-gsap/
- GSAP MotionPath docs — https://gsap.com/docs/v3/Plugins/MotionPathPlugin/ · DrawSVG docs — https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/
- Frontend Horse — "Swimming on Scroll" (marker along path) — https://frontend.horse/articles/swimming-on-scroll-with-gsap/

**Pattern:** one `scrub` ScrollTrigger timeline, two concurrent `ease:"none"` tweens — `drawSVG:"0% 100%"` on the route `<path>` + `motionPath:{path, align:"#route", autoRotate}` on the marker; drive smoothness with Lenis; optional camera pan via `MotionPathPlugin.getPositionOnPath`. **A working reference of this is in `route-line-reference/`.**

> CDN tip: pin versions (e.g. `gsap@3.13.0`), don't use `@latest` in production.
