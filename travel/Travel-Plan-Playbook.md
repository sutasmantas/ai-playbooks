# 🧭 Travel-Plan Playbook — How We Build a Trip (plan + site)

> A reusable process for turning a rough trip idea into (1) a thorough, fact-checked plan and (2) a **new destination on the live "Where To, Crew?" website**.
> Built from the **Energylandia road trip** (Kaunas → Poland) and the site we shipped for it. Re-run these steps for any new trip — next up: **Paris** (a fly-in city break, on the *same* site).
> Worked examples: `Energylandia-Trip-Planning-Checklist.md` (research output) and the live site `06-current-site/` (the build).

---

## 🔄 Keep this playbook alive (read first)
**Living document.** At the end of each trip-planning/build session, update this file with whatever new emerged — a missing step, a research angle, a country gotcha, a build/UX lesson, a tool. Prefer **upgrading existing lines over endlessly adding**; consolidate when a section bloats. Log changes in the changelog.

### Changelog
- **2026-05-31** — Initial version, distilled from the Energylandia (Poland) road-trip plan.
- **2026-05-31** — Added research angle #9 **Reddit/forum mining** (caveats: crawler-blocked → snippets/forums; tips go stale → verify; keep in a labelled "opinion" digest).
- **2026-05-31** — Added a **consistency/accuracy review-pass** to Phase 4.
- **2026-05-31** — Phase 5: split the checklist into 🟦 Decide (form) vs 🟩 Do-later (execution) layers.
- **2026-06-01** — **Big update: the site is real.** Added **Phase 6 — Build it into the live site** (architecture, multi-trip backend, step-by-step to add a destination), a **🛠️ Build & UX lessons** section (the hard ones: time-realism incl. the return leg, no preselections, plan-driven everything, durable backend, network-first SW, local per-place images), and a **fly-trip gotcha variant** for Paris. Deployment specifics live in the `project_trip_site_deployment` memory + the code, not duplicated here.
- **2026-06-02** — Added the **close-range late-anchor trip** pattern: short trips still need a time/fatigue model when the mandatory anchor happens late, depends on same-day conditions, and leaves a return drive afterward.

---

## The idea in one line
Tight **brief** → **standard checklist skeleton** → **real prices + deep research** → **integrate & fact-check** → ship as a **fill-in checklist** AND a **new trip on the interactive site** (decision engine + deep plan + plan-driven booking list), all on one **durable, multi-trip backend**. Quality bar: every claim confirmed against a primary source or clearly marked an estimate; everything on the site reflects the *chosen* plan, never hardcoded.

---

## Phase 0 — Get the brief (don't over-ask)
Gather only the inputs that change the plan. Batch high-impact questions; **don't interrogate one person about a group trip** — park group choices in a "Decisions to make as a group" box instead of asking.

Inputs that shape everything: **origin + destination(s)** & headline attraction · **who/how many** · **dates/season** (→ prices, hours, weather, crowds; convert to absolute dates) · **number of days** (incl. travel?) · **budget level** · **travel mode** (car / fly / rail — reshapes the whole plan) · **vibe/priorities**.

⚠️ Confirm ambiguity that silently breaks the plan ("3 full days" vs "4 days incl. travel"; "alcohol-free" as a hard rule vs preference).

---

## Phase 1 — Lay down the checklist skeleton
Standard section set (adapt per trip/mode); a fill-in doc with `[ ]` + `____` + status columns:
Trip basics · **Decisions to make as a group** · Budget planner (split N ways) · Transport readiness (car kit *or* flights/transfers) · Documents & insurance · Route/legs *or* flights+transit · Tolls/parking/laws *or* city-transit pass · Accommodation (vetted, bookable) · Tickets & bookings (sell-out items) · Day-by-day · Anchor game-plan · Food & drink · Packing (by sub-trip) · Money & split · Safety & emergencies · Apps · Final checks (24 h) · **🗺️ Route map & stops** · **🎁 Bonus ideas / swaps**.

---

## Phase 2 — Pin real prices
Web-search **current, dated** prices; pre-fill the budget so it's concrete. Anchor tickets, passes, parking; fuel (per-L × distance × consumption) *or* flights; transit pass; sample lodging; key activities. State the **FX rate + date**; mark **estimate vs confirmed**. Give a per-person bottom line + how each big choice moves it ("+ Energy Pass ≈ +€56/person").

---

## Phase 3 — Deep research, fanned out in parallel
Use the **`deep-research` skill / Workflow** (or parallel agents), one angle each: "be specific, rank by worth-it, no fluff, cite sources." Angles: 1) anchor insider tips · 2) the city (limited-time picks, cheap eats, scams, parking) · 3) nature/outdoors (headline + quieter swaps) · 4) route & driving *or* flights+transfers · 5) general gaps homemade checklists miss (roaming/eSIM, DCC, offline maps, doc copies) · 6) bookable stays (5–7 named, rated, links) · 7) alternatives/swaps · 8) deep route 2nd pass (road status w/ dates, hazards, parking realities) · 9) Reddit/forum mining (⚠️ crawler-blocked → snippets/forums; **stale → verify load-bearing claims**; keep in a labelled "opinion" digest).
> If a heavy background Workflow stalls (it can, when the session idles), **fall back to running the WebSearches directly yourself** — faster and reliable. (Happened on the Poland refresh.)

---

## Phase 4 — Integrate & fact-check (don't just paste)
Fold into the right sections; **rank** (⭐/👍/skip). **Resolve conflicts against primary/most-recent sources** — agents go stale (one said a road was "closed till 2027" when it opened in 2024). Tag **date-sensitive** facts to re-check near departure. **Run a consistency/accuracy review pass**: repeated numbers agree (distances, times, prices), budget math sums, no contradictions, **logistics tensions surfaced** (fatigue chains, "party then dawn-start," 12-h drive days, **and the return journey** — see lessons).

---

## Phase 5 — Output 1: the fill-in checklist
The markdown checklist (this repo's example). **Split into two layers** so the interactive build is obvious: 🟦 *Decide* (group decisions + each option's price/time/impact → becomes the decision engine) and 🟩 *Do-later* (route detail, bookings/"calls", tips, packing, day-of logistics → execution). Mark the divider.

---

## Phase 6 — Output 2: build it into the live site ("Where To, Crew?")
The site is **live and multi-trip**: GitHub Pages front-end + a Cloudflare Worker/KV **shared backend keyed per trip** (data persists for years). Each trip is a page trio **Sign-up → Plan-draft → Plan**, plus a shared **Emergency one-pager**, all reusing one design system + data layer. *(URLs, account, KV id, deploy dirs → `project_trip_site_deployment` memory. Don't duplicate them here.)*

**To add a NEW trip (e.g. Paris):**
1. **Content first** — run Phases 0–4 for the destination. Produce the day-by-day **option set** (the 🟦 Decide layer), the **deep Plan content** (🟩), and the **bookings** list.
2. **Reuse the components** — copy the `poland/` page trio and swap content; reuse `motion.css`/`motion.js`/`site.css`, the **`plan-draft.js` engine pattern** (`.opt`/`.choice` groups, reveal rules, live total, per-day **time meter**, plan-driven **booking console**), the **`checklist.js`** plan-model + download, and **`store.js` + `config.js`**. Set **`config.trip = 'paris'`** — the backend gives it its own bucket automatically; no backend work needed.
3. **Re-parameterise the model to the trip's shape** — keep the same engine, change the axes:
   - *Poland (car road trip):* days/nights, drive legs & drive-time, border, fuel, the **return drive**.
   - *Paris (fly-in city break):* nights, **flights** (the budget anchor), airport→city transfer, a **per-day city-time meter** (opening hours + métro hops, not drive legs), a **transit pass** (Navigo/carnet), **timed museum/landmark slots** as the bookings. The "time-fits" logic becomes "does this day's list of sights + queues + transit fit the daylight/opening window."
4. **Images** — LOCAL only, one per place; fetch free-license (Wikimedia Commons API with a real User-Agent, or Unsplash/Pexels), save to `assets/img/`. Verify each is actually that place (a wrong/duplicate photo is glaring — we shipped Kaunas showing Kraków once).
5. **Unlock on Home** — remove the 🔒 lock on the destination card.
6. **Deploy** — copy the live files into the deploy repo, commit, push → Pages rebuilds (~1 min). Verify on the **live URL** (not just locally), then **delete any test data** from the shared store.

---

## 🛠️ Build & UX lessons (the hard ones — hold these)
- **Time-realism is the real constraint, not money.** Model each day's window honestly and **include the return journey** (on a short trip the long drive/flight home lands *on* an activity day → flag it red). Use a **drive-only baseline and add stops on top** — don't double-count the breaks already in a door-to-door estimate. When a day is over, **name what gets squeezed** ("these stops push Kraków to ~21:00 — you'd lose the evening") and offer one-tap fixes.
- **No preselections.** Nothing checked on load; the total shows a **range** until the key choice (length/dates) is made. A returning person resumes/edits their own picks.
- **Everything reflects the CHOSEN plan — never hardcode.** Day cards, images, the budget, and especially the **booking list** must be driven by the saved picks (a "catalog of everything" is wrong — show only what *this* plan needs). The booking console is plan-filtered + tickable + ordered by deadline.
- **One currency, consistently** (we use €); the live total is the source of truth; keep any static price tiers in sync with the engine's deltas.
- **Durable, swappable backend.** All picks go through one data layer (`store.js` + `config.js`), offline-first (optimistic writes + a local queue). Pick a backend that **persists for years** — **Cloudflare Worker + KV** does; **avoid free tiers that pause/delete on inactivity** (Supabase free). Key it **per trip** so years of trips coexist. The anon/public URL is fine for a friends app (low-stakes), but it's in public code — offer a write-PIN if they want.
- **Service worker: network-first for code, cache-first for images.** Never serve stale HTML/JS (that caused repeated "it's not fixed" confusion); bump the cache version on changes; it takes control on the **2nd visit**, so tell users to open it once online.
- **Theme every JS-injected control.** A runtime-created button/input must carry the site's classes/styles or it renders as a native white control (caught a `.fixbtn` scoped only under `.dm`).
- **No fake/seed data, no dev-disclaimer copy** in friend-facing text ("saved on this device / moves to a sheet later"). Remove test rows from the shared store after verifying.
- **Verify on the live deployment in a real browser**, not just localhost — and re-run the **consistency pass** after iterative edits.

---

## 🌍 Gotchas to ALWAYS check (by mode)
**Any trip:** seasonal peak pricing/hours + what **sells out** (book-ahead) · **money** (local currency, decline DCC, bank ATMs, cheap-FX cards) · **connectivity** (does the home carrier really give EU-style roaming, or buy an **eSIM** — LT carriers *opted out*) · **emergency** number(s) (112 + specialist e.g. mountain rescue) · documents/insurance · pickpocket hotspots/scams.
**Car trips (Poland):** borders/visa (temporary checks reinstated?) · tolls/vignette · driving laws & fines (alcohol ~0, daytime headlights, **section cameras**, carry triangle/vest/extinguisher, on-the-spot foreign-plate fines) · **low-emission/limited-traffic zones** (can the car enter? **foreign cars often must self-register**, e.g. Kraków LEZ) · **Sunday/holiday trading bans** · parking (foreign-plate apps, paid hours, P+R).
**Fly + city trips (Paris):** Schengen/visa & passport validity · **flight** baggage rules + airport→city transfer (RER/train vs taxi) · **city transit pass** (Navigo Easy/Liberté+, carnet) · **timed-entry museums/landmarks** + a city museum pass (does it skip queues / cover what you'd do) · **tourist/city tax** on lodging · pickpocket hotspots (métro, towers) · tipping norms · what's free / closed-on-Mondays-or-Tuesdays (many museums) · eSIM/roaming as above.
**Close-range late-anchor trips:** late anchor start time · same-day go/no-go conditions · return-drive fatigue after the anchor · seasonal comfort/packing · Plan-B that still feels worthwhile if the anchor fails · optional stops must never squeeze the mandatory anchor.

---

## Quality rules (the standard to hold)
- **Evidence before assertions** — confirmed source or labelled estimate; never present a stale agent claim as fact.
- **Honest flags** — surface the tight/risky parts (a 12-h drive day; a red over-packed day); don't paper over them.
- **Don't over-ask** — park group choices; one person ≠ the group.
- **Right scope** — travellers complete a fill-in doc / pick options on a site; rank and curate, don't dump. Same for this playbook: lean core + pointers to code/memory, not a duplicated spec.
- **Mark date-sensitive facts** for a pre-departure re-check.
- **Plan-driven, not hardcoded** — on the site, if it's shown, it should come from the saved picks.
