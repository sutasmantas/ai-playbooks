# 🛠️ BUILD BRIEF — for the building agent

## ⛔ Read this first — you are EXTENDING an existing site, NOT rebuilding it
There is already a built website in **`06-current-site/`**. Its **visual design, layout, motion, and stack are FINE and stay as-is.** **Do NOT redesign it, do NOT restyle it, do NOT swap its tech stack, do NOT start fresh.** Your job is **content + logic**, working *inside* the existing codebase and matching its existing style.

The site looks good but has two real gaps:
1. The **Plan-draft page** is a flat pile of ungrouped toggles with thin content → **rebuild its structure & content** into the day-by-day branching engine (below), **using the existing visual style/components**.
2. The **Plan page** is too shallow → **deepen it** with the real content.

That's the work. If something tempts you to "improve the design," don't — the design is not in scope.

## What the site is
**"Where To, Crew?"** — a friends-only, multi-destination trip-planning site. Nav: **Poland · Observatory · Paris**. Each has 3 pages: **Sign up → Plan draft → Plan**. **POLAND is the only one with content.** Observatory & Paris stay greyed-out + 🔒 locked (already done — leave them).

## Where everything is (paths relative to this folder)
**Your codebase:**
- **`06-current-site/`** — THE existing site. Work here. **Keep its stack:** GSAP 3.13 + Lenis via CDN + `assets/motion.js` / `motion.css` / `site.css` / `crew.js` (crew voting) / `image-slot.js`. Run it (`python -m http.server` from this folder) and look at it before changing anything. See the "Current code map" below for exactly what to touch.

**The content & logic to implement (this is the actual task):**
- **`01-specs/Trip-Site-Content.md`** — all the words/numbers/options for Poland. **§A = the new plan-draft options** (day-by-day, branching) · **§B = the deep Plan page** · §C = bookings · §D = download checklist.
- **`01-specs/Trip-Site-PlanDraft-Logic.md`** — THE spec for the plan-draft engine: reveal rules (if X → show Y), live-total compute (§3 days/nights/€ model), bookings map (§4), and the **TIME/feasibility meter (§6)**. Implement exactly.
- **`01-specs/Trip-Site-Enhancements.md`** — approved UX features to add (presets, per-day timeline, Plan-B, emergency one-pager, countdown, booking status, etc.).
- **`Energylandia-Trip-Planning-Checklist.md`** (pack root) — the full source for all Plan-page depth (pull the complete text, not one-liners).

**Background only — NOT instructions for this task (do not act on these):**
- **`01-specs/Trip-Site-Concept-and-Craft.md`, `Trip-Site-Liveliness-Spec.md`, `Trip-Site-Resources.md`, `Trip-Site-Design-Brief.md`, `03-working-demos/`, `04-reference-sites/`** — these describe an *aspirational visual rebuild* (the "Drawn Route Line", GSAP animations, award-site references). **They are NOT this task.** The existing site's look stands. Ignore them unless I explicitly ask for a visual pass later.
- **`START-HERE.md`** — older index written for a different tool; superseded by this brief.
- **`05-existing-signup-form/`** — the original sign-up prototype, for reference only. The sign-up already exists in `06-current-site/` — **leave it as-is.**

## The work, concretely
1. **Rebuild the Plan-draft page** (`06-current-site/poland/plan-draft.html` + its JS) into the **day-by-day branching** flow per Content §A + PlanDraft-Logic — **in the existing visual style** (reuse the current components/CSS, don't invent a new look):
   - Group choices under Trip-wide / Day 1 / Day 2 / Day 3 / Day 4.
   - **Progressive disclosure** (a pick reveals its sub-options).
   - **NO preselections** — nothing checked on load; total shows a **range until trip length is picked**.
   - Each option shows **€Δ · time/distance · why · knock-on**.
   - **Live per-person total** + a **per-day time/feasibility meter** that names what gets squeezed (Logic §6).
   - **Bookings are decisions** — every 📌 pick feeds a "Your bookings" list (Logic §4).
2. **Deepen the Plan page** (`poland/plan.html`) per Content §B — full sections from the checklist (route, driving/legal, packing, money, food, safety, apps, day-by-day), reflecting the CHOSEN draft (never hardcode Morskie Oko).
3. **Add the approved Enhancements** (Enhancements.md) where they fit the existing UI.
4. **Download-checklist button** (Content §D) — personalised printable.
5. Keep the **sign-up** and **Home** pages as they are (touch only if the data model below requires it).

## Hard constraints — do NOT violate
- **"No drinking" is the ONE hard rule:** alcohol-free evenings default; bars are an optional aside, never the headline. **Adventure/thrill IS the headline.**
- **NO preselections** anywhere in the plan-draft. Total = a **range until trip length is chosen**.
- The **Plan page reflects the CHOSEN draft** — never hardcode any pick.
- **Keep ALL plan-draft picks/status in ONE plan-state object** (localStorage now as a temporary adapter; it MOVES to one shared Excel/sheet later — keep the backend swappable).
- Implement the **days/nights/lodging model + time meter EXACTLY** as Logic §3/§6 (e.g. `night3` only on 4-day trips, the buffer night is its own picker, **€18/extra-night is the only lodging cost**, hike hours are door-to-door).
- **Match the existing site's stack and style** — keep GSAP/Lenis/motion.js, reuse its components/CSS, **no redesign**.

## Current code map — exactly what to change (so you don't rediscover it)
I read the current `poland/plan-draft.html` (38 KB; option markup + an **inline `<script>` compute block** near the bottom, ~lines 297–388, plus a Wikimedia-thumbnail script and `crew.js` voting). Reuse its patterns; change the content+logic:

**Reuse as-is (the design vocabulary — don't reinvent):**
- Each decision is a `<div class="opt" data-group="X" data-type="single|multi">` containing `<button class="choice" data-val="…" data-price="…">`. Keep this exact markup pattern for every option.
- The sticky `<aside class="summary">` (total `#sum-total`, `#sum-days`, `#breakdown`, crew-`#lean`, the mobile `.minibar`) and the GSAP count-up on total. Keep it; extend it.
- `crew.js` real-vote "leaning" avatars under each choice, and the thumbnail script. Keep both.

**Restructure (this is the job):**
1. The options are currently a **flat column with `<p class="eyebrow">` section headers** ("The drive down", "The mountains", "Stays", "Smart planning", "Logistics"). **Regroup them into day blocks** — Trip-wide / Day 1 / Day 2 / Day 3 / Day 4 — per Content §A, using the same `.opt`/`.choice` markup.
2. **DELETE the `data-group="logistics"` "Who handles what" block** (lines ~246–253) — the user removed this decision.
3. **Add the missing options** from Content §A: hike is missing chill-lake / Slovak / Strążyska / Chochołowska / Gęsia Szyja; there's **no chillLake, no Night-2/Night-3/buffer/arrival lodging pickers** (only Night-1 exists), no Energylandia 1-vs-2-day, no Aqualantis, and the stops/krakowEve/addons/mtnEvening lists are short. Add them.
4. **Add progressive disclosure** — right now `mokaccess` is always visible. Implement the §2 reveal rules (hike=morskie→mokAccess; hike=chill→chillLake; length=4d→Day4+night3; buffer→bufferWhere/activity/night; warsaw-night→warsawNight; base2→night2 list; geography greying for slovak/pieniny).
5. **Replace the inline compute()** (the `var BASE=285; var sel={…}` block) with the full **Logic §3 model**: the `extraNights`×€18 lodging rule, correct days/nights, all option deltas, range-until-length. The current compute only handles length/day4/pass/addons — it's missing base2/breakdrive/buffer/arrival and the new nights math.
6. **Add the per-day TIME/feasibility meter** (Logic §6) — there's only a cosmetic "fuelbar" today; add real per-day time bars + the "names-what-gets-squeezed" warnings.
7. **Add the "Your bookings" panel** (Logic §4) — doesn't exist yet; every 📌 pick feeds it.
8. Keep saving to one object in `localStorage 'wtc-poland-plan'` (already does — extend the shape).

**Images — bundle LOCAL files, do NOT hotlink (any free source is fine).** The current thumbnail script (plan-draft.html ~lines 390–419) hotlinks `commons.wikimedia.org/wiki/Special:FilePath/<name>`. Two problems: (1) Wikimedia **403s any request without a real browser User-Agent and 429s on bursts**, so those URLs fail in headless/automated/offline contexts (and the PWA goal) even though they work in a normal browser; (2) hotlinking anything breaks offline. **So: all images must be local files in `assets/img/`, referenced as `../assets/img/...` — no live hotlinks, ever.**
  - **Sources:** you're NOT limited to Wikimedia. Use whatever free-license source gives the best photo — **Unsplash, Pexels, Wikimedia Commons**, etc. (Unsplash/Pexels are often higher quality and don't have the UA/403 hassle.) Download the file locally; don't embed a remote URL.
  - A starter set is **already bundled** in `assets/img/` (a verified per-place library — see the files there; e.g. `giewont.jpg`, `morskie-oko.jpg`, `koscieliska.jpg`, `kasprowy.jpg`, `salt-mine.jpg`, `energylandia.jpg`, `krakow.jpg`, `wawel.jpg`, `augustow.jpg`, …). Map options to the closest place photo; reuse one photo across related options where needed.
  - For any option without a good photo (venue-only picks like Arcade Bee, VR, specific hostels), keep the clean striped `.ph` placeholder — that's fine, don't force a bad image.
  - If you fetch more: save locally, and if you do use Commons, send a browser `User-Agent` and fetch one at a time (it 429s on bursts).
  - **This applies to ALL pages.** The plan-draft thumbnails are already localized. **`index.html` (Home) and `poland/plan.html` still hotlink Wikimedia** (Home loads hero + destination-card images via `data-img="…Special:FilePath/…"` + a `W()` helper ~line 418; Plan has 6). Localize those too — download the files (Home needs hero-res ~1600px, incl. **Milky Way** for the Observatory card and **Paris Night** for the Paris card, which aren't in `assets/img/` yet) and repoint to local. **"Leave Home as-is" means don't redesign its layout — but DO swap its image URLs to local files.**

**Plan page:** `poland/plan.html` (34 KB) — deepen per Content §B (same approach: keep its layout, fill the thin sections from the checklist). Glance at it first to map its current sections.

## Verify before you call it done
- Run it in a browser (`python -m http.server`) and check **every reveal rule** and the **live total + time meter on edge cases**: 3-day+buffer · 4-day+warsaw-night · the "Max thrill" preset (it should legitimately flag Day-3 red). **Don't ship logic you haven't run.**
- Mobile check.
- **Done =** Poland's plan-draft is the day-by-day branching engine with correct totals/time-meter/bookings, the Plan page is deep and reflects the draft, enhancements are in, and **the existing visual design is unchanged**. Show me the running site and which edge cases you tested.
