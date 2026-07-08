# 🌐 Trip Site — Build Checklist

> A semi-professional, **friends-only** site to organize group trips. One site, multiple destinations.
> Companion to the trip-content docs — `Energylandia-Trip-Planning-Checklist.md` supplies **Poland's** content.
> **Status key:** ✅ done · 🟡 in progress · ❌ to do
>
> ⚠️ **This doc is the IA / page-structure / hosting checklist.** Where it differs from the newer specs, **the newer specs win:** the **design ambition** is the bespoke *"Drawn Route Line"* cohesion system (Concept-and-Craft + Liveliness + Resources + the 4 working demos to reuse) — **not** "adapt a generic template." The **plan-draft** is the day-by-day branching tool in **Content.md §A + PlanDraft-Logic.md** (progressive disclosure, no preselections, bookings-as-decisions, the time/feasibility meter) — **not** the flat option list described in §7 below. Treat §3/§7 here as superseded on those two points.

---

## 🎯 What we're building

- **One site, multiple destinations.** Home page + top nav: **Poland · Observatory · Paris**.
- **Each destination = 3 pages:**
  - **Sign up** — who's coming + their preferences (upgrade of the current form)
  - **Plan draft** — interactive options with **live price + time** (the 🟦 *decide* layer)
  - **Plan** — the finalized itinerary + tips/bookings (the 🟩 *execution* layer)
- **Way better than the prototype** (`example_form/` = single-page Apps Script form). Award-tier look built on the **bespoke "Drawn Route Line" cohesion system** (one easing set / timing scale / reveal / cursor / transition / motif), **reusing the 4 working demos** so the hard parts aren't reinvented. *(Earlier drafts said "adapt a template" — superseded; see the banner above.)*
- **Friends-only — no accounts, no security, no payments.**
- **Poland is live** (content ready); **Observatory & Paris** start as templated "coming soon."

---

## 🧭 Decisions to make (lock before / during build)

- [ ] **Architecture (revised for the high-end design goal):** the award-tier animation ambition (GSAP/Lenis/maybe WebGL + local assets) is painful to inline into Apps Script → **recommend hosting static on Netlify / GitHub Pages**, with **Google Apps Script (or a Google Form) only as the sign-up data endpoint**. Confirm: `____`
- [ ] **Design:** adopt a ready-made polished template & adapt it (§3) — fast, low-risk. Base template: `____`
- [ ] **Data destination:** two data sets, one model — **sign-up** data → Netlify Forms or the Google Sheet (one tab per destination); **plan-draft** picks/status → one **plan-state object** (localStorage adapter now → **one shared Excel/sheet later**). Keep them swappable. → `____`
- [ ] **Site name / title** (+ custom domain? optional). → `____`
- [ ] **Observatory & Paris** — real upcoming trips, or placeholders for now? → `____`

---

## 1. Setup & foundations
- [ ] Put the code under version control (a folder/repo) so changes are tracked
- [ ] Decide file structure (shared layout + per-page files)
- [ ] Keep `example_form/` as reference (don't delete yet)

## 2. Architecture — host + data
> ⚠️ **Revised:** given the high-end animated design goal (§3), **static hosting is now the recommended path** — Apps Script would only serve as the data endpoint. (Still fine to spend ~30 min confirming you don't prefer all-Apps-Script.)
- [ ] **Host:** static on **Netlify** (drag-and-drop deploy, free) or **GitHub Pages** — serves the template's HTML/CSS/JS + local assets as-is (no inlining pain)
- [ ] **Sign-up data:** **Netlify Forms** (zero-code, built in) **or** reuse the existing **Google Sheet** via the Apps Script `submitResponse` endpoint (POST from the static site), **one tab per destination**
- [ ] *(Only if you'd rather keep everything in Apps Script:)* multi-page via `doGet(e)` routing + `HtmlService` — possible, but inlining a heavy animated template is the painful part
- [ ] Record the call: `____`

## 3. Design — adapt a ready-made template (fast & low-risk)
> The user wants a great look **without** a slow, failure-prone from-scratch rebuild. So: **start from a polished, already-animated free template**, swap in our content/photos, and add **light smooth-scroll polish only if it's a clean drop-in**. We are NOT replicating award-tier WebGL from scratch.
- [ ] **Pick the base template** (candidate: **Tour by Untree.co** — polished + already animated; or find one flashier): `____`
- [ ] Swap content/photos for our destinations; **keep the template's built-in animations**
- [ ] *(Optional, only if easy)* add **Lenis** smooth-scroll (CDN, ~5 lines) for a premium feel — skip if fiddly
- [ ] **Mobile check** (most friends are on phones)
- [ ] Assets: wordmark, per-destination hero photo, favicon, OG image
- [ ] *(Use the `frontend-design` skill to adapt tastefully — adapt, don't rebuild.)*

## 4. Information architecture (the map)
- [ ] **Home** (`/`)
- [ ] **Poland** → Sign up · Plan draft · Plan
- [ ] **Observatory** → Sign up · Plan draft · Plan
- [ ] **Paris** → Sign up · Plan draft · Plan
- [ ] Global **header/nav** (Home + 3 destinations) + **footer**
- [ ] Route scheme decided (e.g. `?dest=poland&page=signup`)

## 5. Shared components (build once, reuse everywhere)
- [ ] Page shell / layout (header, footer, container)
- [ ] Responsive nav + mobile menu; active-page highlight; **unbuilt destinations shown greyed + 🔒 locked**
- [ ] Destination card (for Home) — with an **active** state and a **locked / "coming soon"** state (greyed out + 🔒, not clickable) for unbuilt destinations
- [ ] Sub-page tabs within a destination (Sign up / Plan draft / Plan)
- [ ] Reusable form controls (chips, availability calendar, map, sliders) — port from the prototype
- [ ] Loading / success / error states

## 6. Home page
- [ ] Hero (site name + tagline)
- [ ] 3 destination cards → **Poland active** (clickable); **Observatory & Paris greyed-out + 🔒 locked** ("coming soon," clearly not built yet)
- [ ] Short "how it works" (sign up → draft → plan)

## 7. Destination template (reusable for all 3)

**Sign-up page**
- [ ] Port + upgrade the existing form (name, going?, availability calendar, map stops, vibes, activities, length, budget, notes)
- [ ] Validation + friendly success state
- [ ] Saves to the destination's sheet tab
- [ ] *(Nice)* show who's signed up / a tally

**Plan-draft page (🟦 decide layer — interactive)** — *build per Content.md §A + PlanDraft-Logic.md (this supersedes the older bullets here):*
- [ ] **Day-by-day, branching** layout (Trip-wide → Day 1–4); **progressive disclosure** (a pick reveals its sub-options); **NO preselections**; total shows a **range until length is chosen**.
- [ ] Each option shows **€Δ · time/distance · why · knock-on**; **live per-person total** + a **per-day time/feasibility meter** that names what gets squeezed (Logic §6).
- [ ] **Bookings are decisions** — every 📌 pick feeds the "Your bookings" list (Logic §4).
- [ ] Keep **all** picks/status in **one plan-state object** (localStorage now as a temporary adapter; **moving to one shared Excel later** — build to swap the backend).
- [ ] Seed content from Content.md §A / the Energylandia checklist (Poland ready).
- [ ] *(Nice)* reflect real sign-up responses (common dates, popular vibes).

**Plan page (🟩 final layer)**
- [ ] Render the finalized plan: day-by-day, route map, bookings, tips, packing
- [ ] Pull from the trip-content doc's 🟩 sections
- [ ] Print-friendly / shareable

## 8. Poland content (live — content already exists)
- [ ] Map `Energylandia-Trip-Planning-Checklist.md` → the 3 pages (Decisions → draft; 🟩 sections → plan)
- [ ] Real prices/times/options wired into the draft cascade
- [ ] Route map + stops on the Plan page

## 9. Observatory & Paris (not implemented yet — show as LOCKED)
- [ ] Show them **greyed-out with a 🔒 lock** in the nav + Home cards so it's obvious they're not built yet
- [ ] Clicking shows a clean **"Coming soon"** state (optionally a register-interest sign-up) — never a half-built page
- [ ] When ready, build from the destination template (§7) and **unlock**

## 10. Polish (semi-pro details)
- [ ] Meta titles/descriptions, favicon, OG preview image
- [ ] Smooth transitions, hover states, consistent spacing
- [ ] Mobile pass (tap targets; calendar + map usable on a phone)
- [ ] Lightweight accessibility (labels, contrast, keyboard)
- [ ] Fast load (compress images, minimal libraries)

## 11. Test
- [ ] Cross-browser (Chrome / Firefox / Safari) + mobile
- [ ] Submit a test sign-up on each destination → lands in the right sheet tab
- [ ] Plan-draft totals compute correctly
- [ ] All nav/links work; no dead pages

## 12. Deploy & share
- [ ] Deploy (Apps Script → "Deploy as web app," access = anyone with link; or GitHub Pages / Netlify)
- [ ] Test the live link on a phone
- [ ] Share with friends (link + what to do)

## 13. Launch & iterate
- [ ] Send sign-up links; collect responses
- [ ] Review responses → firm up the draft → publish the Plan
- [ ] Add future destinations by cloning the template

---

*Build order suggestion: §2 spike → §3 template → §5 shared components → §6 Home → §7 destination template → §8 Poland → §9 others → §10–12 polish/test/deploy.*
