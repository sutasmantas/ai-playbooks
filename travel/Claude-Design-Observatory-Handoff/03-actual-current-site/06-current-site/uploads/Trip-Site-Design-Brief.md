# 🎨 Trip Site — Brief for the Builder

> Hand this to the **Claude design feature** (the dedicated site-builder). Two parts: **(1) what the site must do/contain** (requirements — facts, not taste) and **(2) the look = reference sites to emulate** (the tool interprets the visual direction from these; we don't prescribe colors/fonts/motion).
> Claude Code maintains this spec + supplies content; the design tool builds.

## How to use this
- Give the tool **Part 1 (requirements) + Part 2 (reference links)**. Let it derive the look from the references — don't over-specify aesthetics.
- Start with the **POC scope** (bottom), review, then expand using the full structure.

---

## Part 1 — What the site needs (requirements)

**Purpose:** a friends-only, multi-destination trip-planning site. **No accounts, no security, no payments.**

**Structure**
- **Home:** hero + 3 **destination cards** — **Poland active**; **Observatory & Paris greyed-out + 🔒 locked** ("coming soon," not clickable) + a short "how it works."
- **Each destination → 3 pages:**
  1. **Sign up** — collect who's coming + preferences. Fields: name · going? (yes/maybe/no) · availability (calendar) · suggested stops (pin on a map) · vibes · activity ideas · preferred trip length · budget · notes.
  2. **Plan draft** — interactive options where **each choice shows its price + time + knock-on impact**, with a **live per-person total** that updates as you pick (the group-decision layer).
  3. **Plan** — the finalized itinerary: day-by-day, route map, bookings, tips, packing.

**Content**
- **Poland** content already exists (in `Energylandia-Trip-Planning-Checklist.md`) — supply it to the tool.
- **Observatory & Paris** = locked placeholders for now.

**Functionality**
- Sign-up form **saves responses** somewhere we can read (see Constraints).
- Plan-draft **recomputes the total live** as options change.
- Works well on **phones**.

---

## Part 2 — The look (reference sites to emulate)

> Match the **caliber and feel** of these. The tool chooses the execution. **Inspire — don't pixel-clone code/assets.** ⭐ = closest structural fit for our multi-destination trip site (weight these). *(Links live-checked May 2026; some may move — they're inspiration, not dependencies.)*

**Owner's picks**
- https://pioneerexpeditions.com ⭐ — destination-card catalog + trip-type tiers
- https://sponsorcontent.cnn.com/edition/2022/hilton/en/maldives-for-the-senses/ — cinematic scrollytelling benchmark
- https://erikte-travel.space — scramble/"decode" text effect (cheap, striking)
- https://aspen.com — interactive timeline, multi-row carousels
- https://y.co — luxury-restrained, refined hover/scroll

**Cinematic scroll-storytelling**
- https://travelnextlvl.de/en ⭐ — Awwwards SOTD; drag carousels, progressive reveal
- https://cooksonadventures.com — full-bleed expedition footage, elegant pinned scroll
- https://explorajourneys.com/int/en — narrative "Maybe…" progressive-reveal scroll
- https://onwaystorytellers.com/ — type-led editorial, slow-travel tone

**Expedition / adventure travel**
- https://www.kudanil.com/ ⭐ — *best structural model:* one journey, many destinations/legs; cinematic but buildable
- https://muchbetteradventures.com — bold, friendly, photography-rhythm (closest in spirit to a friends' trip)
- https://www.greatcanadiantrails.com — route-by-region trip logistics UX
- https://antaeustravel.com — oversized editorial type, image masking on scroll
- https://reveriesafaris.com — minimalist-luxury, signature-journey cards

**Tourism boards / destinations**
- https://visitgreenland.com ⭐ — intent-split onboarding ("I know / I don't know where to go")
- https://www.myswitzerland.com/en/ ⭐ — month-based "Inspiration Calendar" (great "when to go where")
- https://www.inspiredbyiceland.com — modular category-card discovery
- https://www.banfflakelouise.com — landscape photography + gentle parallax

**Minimalist luxury / hospitality**
- https://www.aman.com — restraint/type/imagery benchmark (aspirational ceiling)
- https://luxatolls.com ⭐ — card-based "compare destinations" pattern
- https://www.fourseasons.com — buttery scroll, premium via polish not effects
- https://explorajourneys.com/int/en/destinations-globe/world-journey ⭐ — SVG world-map + tabbed "passages" = a multi-stop trip layout, very emulate-able

**Aspirational craft (WebGL — optional mood only, high effort, NOT required)**
- https://lusion.co — 3D visual storytelling, interactive WebGL
- https://activetheory.net — real-time rendered game-like worlds
- https://igloo.inc/ — heavy-WebGL, Site-of-the-Year-class
- https://oimo.io — playful physics/fluid micro-interactions

---

## Constraints
- **Deployable for free** — static site (Netlify / GitHub Pages) preferred; no heavy backend.
- **Sign-up data** → Netlify Forms, or a Google Sheet (one per destination).
- **Responsive (phones first)**, fast, smooth.
- Friends-only — skip auth/login entirely.

---

## POC scope (build this first, then review)
1. **Home** — hero + the 3 destination cards (Poland active, others locked).
2. **One Poland section** — a taste of the Plan (scrolling itinerary teaser).
*Review the POC → if the look lands, expand to full Home + Poland, then clone the destination layout for the others.*
