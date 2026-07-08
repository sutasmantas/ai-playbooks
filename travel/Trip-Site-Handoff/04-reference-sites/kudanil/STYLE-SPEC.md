# Kudanil Explorer — Reference Pack (for the design tool)

> Primary visual reference for the trip site. Hand the **screenshots + this spec** to the Claude design feature.
> Source: https://www.kudanil.com/ (captured May 2026). Inspire from it — don't pixel-clone.

## Screenshots in this folder
- `01-hero.jpeg` — hero: full-bleed aerial sea/island, huge centered headline, airy transparent nav
- `02-section.jpeg` / `03-section.jpeg` — intro/story sections (type scale, spacing, full-bleed photos)
- `04-section.jpeg` — ⭐ **destinations**: faded outline map w/ location pins + a row of 4 **destination cards** (photo, season eyebrow, name + pin badge). This is the multi-destination model.
- `05-section.jpeg` — content section
- `06-section.jpeg` — ⭐ full-bleed photo section + big headline + **numbered tab nav (01–04)** + thumbnail gallery/carousel
- `07-mobile-hero.jpeg` — mobile: burger nav, stacked headline, full-bleed photo

## Fonts (exact)
- **Display / headings:** *Forma DJR Deck* (weight 500) — big headings; *Forma DJR Display* (weight 400) — card titles/medium
- **Body:** *Forma DJR Micro* / *Forma DJR Text* — small body
- **Labels / numbers / eyebrows:** *Monorama* (mono-ish; used for season labels, "01–04")
- Forma DJR is a **commercial** grotesque sans. **Free near-matches:** *Hanken Grotesk* or *Schibsted Grotesk* (headings/body), *Space Mono* / *Geist Mono* (labels/numbers).

## Color palette (real hex + roles)
- `#003357` — **deep navy**, primary text / dark UI on light sections
- `#12173d` — near-black navy (darkest)
- `#ffffff` — white: page bg + text over photos
- `#f2ebe3` — warm off-white / sand: light section background
- `#e6d9cd` · `#d6c9bc` · `#c5b7a9` — sand/taupe neutrals (the map, borders, gradients)
- `#846845` (bronze) · `#4d3c28` (dark brown) — earthy accents (pins, labels)
- *(Blues/teals come from the photography, not the palette.)*

## Type scale (desktop)
- Hero H1/H2: **75–90px**, weight **500**, line-height ~**1.0**, letter-spacing ~**0.01em**
- H3: **54px**, weight 500
- Card title (H4): **24px**, weight 400 (Forma DJR Display)
- Body: **~13.5–14px**, line-height ~1.4, color `#003357`
- Big headline ↔ small body = **high-contrast scale** (a key part of the premium feel)
- Eyebrow labels/numbers: small, uppercase, letter-spaced (Monorama)

## Motion / easing (real curves)
- **Primary easing:** `cubic-bezier(0.785, 0.135, 0.15, 0.86)` (strong ease-in-out — used everywhere)
- Secondary: `cubic-bezier(0.445, 0.05, 0.55, 0.95)` (ease-in-out sine)
- Small "pop"/overshoot: `cubic-bezier(0.175, 0.885, 0.32, 1.275)` (ease-out-back)
- Feel: smooth, weighted, unhurried. Scroll-reveal on sections; swipeable carousels.

## Layout / structure notes
- **Nav:** letter-spaced wordmark (left), centered text-link menu, boxed "GET IN TOUCH" button (right); transparent over the hero.
- **Hero:** full-bleed photo/video; big centered headline + one line of subcopy; lots of vertical breathing room.
- **Destinations:** faded outline **map with pins** on a sand background, then a row of **photo cards** — each with a season eyebrow + name + small pin badge; horizontally swipeable.
- **Content sections:** full-bleed photo backgrounds with overlaid headline + body; **numbered tabs (01–04)** with animated underlines; thumbnail **gallery/carousel**.
- Generous negative space throughout.

## Tech (observed)
- Built on **Webflow**; **Swiper** for carousels (swiper-icons present). Custom easing curves above. Smooth scroll-reveal interactions.
- For our build: this look is reproducible with vanilla HTML/CSS/JS + GSAP/Swiper (CDN). No need for Webflow.
