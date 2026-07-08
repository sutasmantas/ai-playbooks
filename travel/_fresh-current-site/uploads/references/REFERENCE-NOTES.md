# Reference Packs — for the Claude design feature

> The design tool can't browse the web, so these folders give it the real **screenshots + extracted style values** (fonts, colors, type scale, easing) for each reference. Captured May 2026 via a real browser. **Inspire from them — don't pixel-clone.**
> Primary anchor = **Kudanil** (also has a fuller `kudanil/STYLE-SPEC.md`).

| Folder | Site | What to steal (standout pattern) |
|---|---|---|
| `kudanil/` ⭐ | Kudanil Explorer | Cinematic luxury; **destination cards over a faded pin-map**; full-bleed photo sections; numbered tabs (01–04) + gallery |
| `explora-world-journey/` ⭐ | Explora "World Journey" | **Multi-stop world map**; stats row (128 days / 4 continents…); sticky "passages" bar; serif elegance |
| `pioneer-expeditions/` ⭐ | Pioneer Expeditions | **Destination catalog grid** + trip-type tiers; warm, earthy, content-rich |
| `visit-greenland/` | Visit Greenland | **Intent-split onboarding** ("I know / I don't know where to go"); airy, big readable type |
| `myswitzerland/` | MySwitzerland | **Month "Inspiration Calendar"**; multi-modal trip-planning tabs |
| `travel-next-level/` | Travel Next Level | **Kinetic type**, drag carousels; energetic, colorful, big light headings on grey |

---

## Style values per reference

### kudanil/ ⭐ (primary)
- **Fonts:** Forma DJR (Deck/Display headings, Micro body) + Monorama labels → **free alt:** Hanken / Schibsted Grotesk + Space Mono
- **Colors:** `#003357` navy text · `#f2ebe3`/`#e6d9cd`/`#c5b7a9` sand neutrals · `#846845`/`#4d3c28` bronze · white + photo blues
- **Type scale:** 75–90px headings (wt 500, line-height ~1.0) ↔ ~14px body (high contrast)
- **Easing:** `cubic-bezier(0.785,0.135,0.15,0.86)` primary · sine · ease-out-back
- *See `kudanil/STYLE-SPEC.md` for full detail. 7 screenshots.*

### explora-world-journey/ ⭐ (serif-luxury)
- **Fonts:** heading **WT Monarch Nova** (serif display, letter-spacing 2px) · body **Shapiro / Sangbleu** (serif) → **free alt:** Playfair Display / Cormorant (display) + Source Serif (body)
- **Colors:** `#f4f2ef` off-white · `#0c2340` deep navy · `#9c441d` terracotta · `#749cb0` muted blue · `#a4c5ba` sage · `#ba0c2f` red accent
- **Feel:** elegant, editorial, restrained; serif-led. 3 screenshots.

### pioneer-expeditions/ ⭐ (warm catalog)
- **Font:** **Golos Text** (a grotesque — **FREE on Google Fonts**, so an exact match is easy)
- **Colors:** `#fffcef` warm cream bg · `#1a1c1a` near-black text · `#343d34`/`#272c27` dark green · `#f4efdb` cream
- **Feel:** earthy, content-rich, catalog grid + mega-menu. 2 screenshots.

### visit-greenland/ (airy tourism)
- **Fonts:** heading **Lalezar** (rounded display) + **Pioneer Brush** (brush accent) · body **Source Sans 3** (**free**) → free alts as-is
- **Colors:** `#cc262e` red accent · white + light greys *(some greys are WordPress defaults, not the design palette — judge by the screenshots)*
- **Feel:** big readable type, lots of white space, intent-split entry. 2 screenshots.

### myswitzerland/ (calendar device)
- **Font:** **ST Allegra** (custom humanist sans) → **free alt:** Mulish / Source Sans 3
- **Colors:** `#b50024` Swiss red + neutrals
- **Feel:** clean tourism board; month-based inspiration calendar; planning tabs. 2 screenshots.

### travel-next-level/ (kinetic, energetic)
- **Fonts:** "Fs R" (custom grotesque) + **Inter** (**free** — use Inter)
- **Colors:** `#f1f1f1` light-grey bg · `#010101` near-black · bright accents `#00b2ff` cyan, `#07c369` green, `#3003e1` indigo, `#f9453a` red
- **Type:** big light headings 64–72px (wt 400). **Easing:** `cubic-bezier(0.4,0,0.2,1)` + `cubic-bezier(0.19,1,0.22,1)` (ease-out-expo)
- **Feel:** energetic, colorful, motion-forward. 3 screenshots.

---

## Quick takeaways for our build
- **Easiest free type match:** Pioneer's **Golos Text** or Greenland's **Source Sans 3** (both free); Kudanil-style needs Hanken/Schibsted Grotesk as the free stand-in.
- **Two palette directions to choose between:** Kudanil/Pioneer/Explora = **warm sand + navy + earthy** (premium, calm); Travel Next Level = **light grey + bright accents** (energetic, young). Pick one lane.
- **Layout patterns worth lifting:** Kudanil's destination-cards-over-map, Explora's multi-stop map + stats row, Pioneer's catalog grid, Greenland's intent-split, MySwitzerland's calendar.
