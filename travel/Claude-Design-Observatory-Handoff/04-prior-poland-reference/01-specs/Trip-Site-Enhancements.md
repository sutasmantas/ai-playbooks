# ✨ Trip Site — Enhancements (build these)

> Approved improvements to make deciding easier/clearer, the trip go smoothly, and be prepared for anything. Build on top of Content v3 + the Logic map.
> **Data note:** storage moves to **one shared Excel/sheet later** (not per-device localStorage). For now keep all picks/status in **one plan-state object** (localStorage is fine as a temporary adapter) so swapping the backend is trivial. Features that need *shared* data (consensus/voting, booking-status across the crew) light up fully once the Excel is wired — build them to read that one state object.
> *(Skipped by the user: draft share-link — the Excel will be the shared source; and a post-trip mode.)*

---

## 1 · Easier & clearer deciding (plan-draft)

**Starting presets** — buttons at the top: **Lowest budget · Balanced · Max thrill · Chill & social.** Tapping one applies a coherent pick-set (then tweak anything). Labelled *"a starting point — change anything."* Not applied on load (page still starts blank/no-preselect). **The € figures below are computed from the Logic §3 deltas (BASE + add-ons + €18/extra-night) — keep them in sync with that map; the live total is the source of truth.** Pick-sets:
- **Lowest budget (~€265):** length=3d · pass=none · hike=rusinowa · stops=[augustow] · krakowEve=[oldtown,krakus] · night1=atlantis · night2=wielka-krokiew · mtnEvening=[karczma] · day4=skip · addons=[]. *(3-day BASE €250 is the floor — you can't go below it; this lands ≈ €268.)*
- **Balanced (~€360, recommended):** length=4d · pass=none (rope-drop) · hike=morskie(+Czarny Staw) · mokAccess=minibus · stops=[augustow,raj] · krakowEve=[oldtown,cruise] · night1=gregtom · night2=stara-polana · addons=[gubalowka] · mtnEvening=[baths] · day4=bochnia.
- **Max thrill (~€480+):** length=4d · energylandia=2day · pass=energy · hike=morskie(+Czarny Staw) · mokAccess=minibus · addons=[kasprowy,gubalowka,dunajec,czorsztyn-toboggan] · krakowEve=[arcadebee,vr] · day4=bochnia. *(Intentionally overloads Day 3 — the time meter will flag it red on apply; that's expected, see Logic §6 "preset behavior on a red day.")*
- **Chill & social (~€340):** length=4d · pass=none · hike=koscieliska (or chill-lake) · krakowEve=[oldtown,cruise,forum] (alcohol-free) · mtnEvening=[baths,cook-bacowka] · buffer=add (chill Kraków) · day4=skip.

**Side-by-side compare** — for either/or groups (Day-4 mine · queue pass · the hike), a "Compare" toggle that lays the options out as columns: **price · time · crowds/difficulty · why · book-ahead.** Easier than reading separate buttons.

**"Suggested" tag** — a small **non-selected** "Suggested" chip + a one-line *why* on the recommended option in each group (a steer for the undecided, not a preselection).

**Decision progress + consensus** — a bar: *"7 / 12 key decisions made,"* with a jump-list to the unmade ones (weight the big ones: dates, length, hike). When the shared data shows all three agree → mark a decision **"agreed ✓"**; surface **still-split** ones with the vote tally. *(Progress works off the local picks now; consensus activates with the Excel.)*

**Plain trade-off headers per day** — open each day with one honest line: *"Day 2 is all Energylandia."* · *"Day 3 is your one mountain day — pick ONE big thing."* · *"Day 1: every stop you add pushes your Kraków evening later."*

---

## 2 · The trip going well (execution)

**Per-day timeline (real clock times)** — render the chosen plan as a clock schedule per day, computed from the time model (Logic §6): *Day 1: 06:00 depart · 08:30 border · 13:00 Kielce break · 16:00 Kraków · 20:30 golden hour.* Recomputes as picks change. Show on the Plan page + in the download. Makes feasibility visible and doubles as the day-of plan.

**"Today" view + offline** — a phone-first view (e.g. `plan.html?day=2` or a `/today` route) showing **just one day**: its timeline, addresses, next stop, that day's bookings + Plan-B. Make the site a **PWA** (manifest + service worker) caching the plan, the emergency one-pager, and saved booking info so they **work offline** — Tatra signal is patchy.

**Shared-gear list** — in Packing, a **"shared kit — bring ONE between you"** sub-list (power bank, first-aid kit, dashcam, warning triangle, hi-vis vest, fire extinguisher, paper map, phone mount, AUX cable) with a claim/tick per item so nobody triples up or forgets.

**Live-check nudges** — surface the right link on the right day: **granica.gov.pl** (border wait) on travel days · **Zakopianka** timing on the Kraków→Zakopane day · the **mountain weather forecast** the morning of the hike.

---

## 3 · Prepared for anything (contingency)

**Plan-B on every day** — one fallback line per anchor, on the day + in the download:
- **Day 1:** stops running late → drop the furthest; arrive after dark → skip the evening, do it another night.
- **Day 2 (Energylandia):** ride closed in a storm → re-ride / Aqualantis / indoor; brutal queues → that's the Fast/Energy-pass call.
- **Day 3 (mountains):** Morskie Oko parking full → minibus from Bar Fis; storm forecast → baths / Dolina Kościeliska / town; too tired for the full hike → Rusinowa / Gubałówka.
- **Day 4:** too tired for the long drive → Warsaw overnight; mine slot sold out → the other mine / skip.
- **Anytime:** breakdown → roadside-assistance number; border jam → **Ogrodniki–Lazdijai** crossing.

**Emergency one-pager (offline)** — a dedicated, cached screen linked from every footer: **112** · **TOPR 601 100 300** · insurer 24 h hotline · breakdown number · LT embassy in PL · nearest hospitals per region (Kraków / Zakopane) · lost-passport steps · the crew's own numbers + a **meeting point per stop**.

**Booking status + sell-out alarm** — the bookings list (Logic §4) gets a **status** per item (To-do / Booked + confirmation #) and, as the date nears, a **red "book now — sells out" flag** on the time-sensitive ones (Morskie Oko parking, Kasprowy slot, salt-mine slot, all lodging). Status lives in the plan state → Excel later.

**Pre-trip countdown** — a **dated prep timeline** derived from the chosen dates, shown as a checklist (and in the download):
- **−3 wks:** lock dates · book all lodging (free-cancel).
- **−2 wks:** Energylandia e-tickets + pass · Kasprowy / salt-mine slots.
- **−1 wk:** car service + tyres + legal kit · EHIC + travel + breakdown insurance · eSIM/roaming check.
- **−3 days:** Morskie Oko parking e-ticket (or confirm the minibus) · withdraw PLN cash.
- **−24 h:** pack (use the packing list) · fuel up · re-check weather + park hours · confirm departure time.

---

## 4 · Trust
**"Why we recommend this" popovers** — small **(i)** popovers on recommended options + key warnings, citing the one-line reason (*"Bochnia: 140 m slide + salt-lake boat, fewer crowds, cheaper — better for a young group"*), so nobody has to go googling to trust the call.

---

## Build order
Quick wins first: trade-off headers · Suggested tags · Plan-B lines · emergency one-pager · pre-trip countdown · shared-gear list · why-popovers (all low effort, mostly copy). Then: presets · compare view · booking-status/sell-out · live-check nudges · per-day timeline. Bigger: the "Today" view + PWA/offline. Keep everything reading from the one plan-state object (Excel-ready).
