# 🪄 Trip Site — Liveliness Upgrade Spec (make the home page feel ALIVE)

> For the Claude design feature. The home page has a solid structure + a motion baseline, but it reads **flat/boring** vs the award references. This spec says exactly why and what to add. All techniques are **CDN / no-build** (GSAP + Lenis), and must keep `prefers-reduced-motion` fallbacks (the code already respects this — keep it).

---

## 0. Status check — what's already built (keep it)
Hero (3 variants: cinematic/split/editorial), **scramble headline**, scroll-reveals (`.reveal`/`.rv-wipe`), **count-up** stat band, **drag carousel**, card hover lift + image zoom, single-layer **parallax**, Ken Burns on hero image, sticky-nav state, scroll cue. Good bones.

## 0b. Images (correction)
Images **do load fine** — my earlier "empty hero" screenshot was just a capture-timing issue on my end, not a real bug. Disregard. (Still worth using strong, high-res hero photography/video, since the concept leans on full-bleed imagery — see `Trip-Site-Concept-and-Craft.md`.)

---

## 1. Why it feels boring (diagnosis)
- **Static between reveals** — once something fades in, nothing moves again. Award sites *always* have ambient motion.
- **Native scroll** — no smooth/inertia scroll; on its own this reads "cheaper."
- **Nothing reacts to the cursor** — no custom cursor, magnetic buttons, mouse-parallax, or hover media effects. *"Everything reacts to what you do"* is the exact thing that's missing.
- **Reveals are plain fades** — not per-word/line staggered, not directional masks.
- **No page-load intro, no marquee/ticker, no scroll-scrubbed sequences.**

---

## 2. The "alive" playbook — what award sites do → how to build it (no-build)
Impact ★(1–5) · Effort L/M/H. Add **GSAP + ScrollTrigger + SplitText + DrawSVG** (all free now) and **Lenis**, via CDN.

### A. Foundational feel
1. **Lenis smooth scroll** ★★★★★ L — the #1 "premium/alive" tell; wire it to `ScrollTrigger.update()` (~6 lines). *(Kudanil, Explora, every ref.)*
2. **Scroll-scrubbed hero** ★★★★ L — hero image slowly zooms/pans + headline drifts up as you scroll out (ScrollTrigger `scrub`). Turns a static hero into a living one.

### B. Pointer reactivity ("reacts to you") — the biggest missing layer
3. **Custom cursor** ★★★★ M — a dot + trailing ring; grows / shows a label ("View →", "Drag") over cards, links, the carousel. ~40 lines vanilla. *(Travel Next Level, agency refs.)*
4. **Magnetic CTAs/links** ★★★ L — primary button & nav links ease toward the cursor on hover (GSAP `quickTo`).
5. **Mouse-parallax hero** ★★★★ L — background/foreground layers shift a few px with cursor movement (mousemove → transform). Makes the hero feel 3D and reactive.
6. **Hover media motion on cards** ★★★ M — keep the zoom; add a subtle parallax/skew of the image toward the cursor + a sliding "→" label reveal. (Optional: one **Curtains.js** WebGL displacement on the hero only.)

### C. Ambient / continuous motion ("always something happening")
7. **Marquee / ticker strip** ★★★ L — a slow looping band ("PLAN THE TRIP · BRING THE CREW · POLAND 2026 ·") or scrolling destination names. Constant life, cheap.
8. **Multi-layer drifting** ★★ L — animate more than one parallax layer + a slow-drifting gradient/grain overlay on dark sections.
9. **Looping micro-motion** ★★ L — gently pulse the scroll cue (exists), animate a route-line dot, subtle float on the editorial side image.

### D. Choreographed reveals (upgrade the plain fades)
10. **Split-text reveals** ★★★★ M — headline + section titles animate **per word/line** with stagger + a mask wipe (GSAP **SplitText**). Replace the basic `.reveal` fade on headings. This is a huge perceived-quality jump.
11. **Directional image masks** ★★★ L — upgrade `rv-wipe` to a clip-path wipe + slight scale, direction varying by side.
12. **Staggered groups** ★★★ L — steps/cards animate in sequence with overlap (stagger), not all at once.

### E. Scroll-linked storytelling
13. **Animated SVG route-map** ★★★★ M — the **signature moment**: a line draws between Kaunas → Kraków → Energylandia → Tatras as you scroll (GSAP **DrawSVG** / MotionPath). On-theme, memorable, unique.
14. **Pinned "How it works"** ★★★ M — pin the section; steps 01→02→03 advance/highlight as you scroll through.
15. **Scrubbed stat band** ★★ L — tie the count-up to scroll progress so the numbers roll as the band crosses center.

### F. Micro-interactions
16. **Animated nav underlines / link hover** ★★ L — underline grows from left; or letter-swap on hover.
17. **Button hover** ★★ L — fill sweep + arrow slide.
18. **Smart nav** ★★ L — hide on scroll-down, reveal on scroll-up; thin scroll-progress bar.
19. **Page-load intro** ★★★ M — a brief curtain/logo wipe that hands off into the hero scramble — sets the "crafted" tone immediately.

---

## 3. Do it in this order (priority)
- **P0 — kill the deadness:** fix images (§0b) · Lenis smooth scroll (#1) · scrubbed hero (#2).
- **P1 — reactivity:** custom cursor (#3) · magnetic CTAs (#4) · mouse-parallax hero (#5).
- **P2 — choreography:** split-text headings (#10) · staggered cards/steps (#12) · directional masks (#11).
- **P3 — ambient + signature:** marquee (#7) · animated route-map (#13) · pinned how-it-works (#14).
- **P4 — polish:** nav underline/hover + button micro-interactions (#16–18) · smart nav (#18) · page-load intro (#19).

> P0+P1 alone will flip it from "boring" to "alive." P3's route-map is the signature that makes it feel bespoke.

---

## 4. Tech (all CDN, no build) + guardrails
- GSAP + ScrollTrigger + SplitText + DrawSVG (free), Lenis. Optional Curtains.js for **one** hero WebGL effect only.
- Keep **`prefers-reduced-motion`** guards on everything (already in `anim.js` — preserve).
- Watch **mobile**: smooth-scroll + heavy effects must stay smooth; disable cursor/mouse-parallax on touch; lazy-init heavy bits.

## 5. Hand-off note for the design tool
> "Implement P0 then P1 first (fix images, add Lenis smooth scroll, scrubbed hero, custom cursor, magnetic CTAs, mouse-parallax hero). Use GSAP (+ScrollTrigger/SplitText/DrawSVG) and Lenis via CDN — no build step. Keep prefers-reduced-motion fallbacks. Then P2–P4. The animated SVG route-map (P3) is the signature moment."
