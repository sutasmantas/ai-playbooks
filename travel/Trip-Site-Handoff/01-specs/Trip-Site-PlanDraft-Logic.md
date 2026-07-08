# 🔀 Plan-draft — reveal logic, compute & bookings map (build spec)

> The exact wiring for the day-by-day **progressive disclosure**, the **live total**, and the **bookings list**. Pairs with `Trip-Site-Content.md` §A (the option copy/detail). Prices are the same May-2026 per-person estimates; mark them estimates in the UI.
> **Default state:** nothing selected; total shows a **range "≈ €250–€340 · pick options to build your total"**; crew-leaning empty until real sign-up votes.

## 1. Decisions, IDs, type, and when they're VISIBLE
| id | day/section | type | visible when |
|---|---|---|---|
| `dates` | Trip-wide | single | always |
| `length` | Trip-wide | single | always |
| `budget` | Trip-wide | single | always |
| `breakDrive` | Trip-wide | single | always |
| `buffer` | Trip-wide | single | always |
| `bufferWhere` | Trip-wide | single | **`buffer = add`** |
| `bufferActivity` | Trip-wide | single | **`buffer = add`** (Ojców / chill-Kraków / Auschwitz / rest) |
| `bufferNight` | Trip-wide | single | **`buffer = add`** (lodging for the extra night; options = the `bufferWhere` location's hostel list — reuse Night-1 Kraków list or Night-2 Zakopane list) |
| `weather` | Trip-wide | single | always |
| `stops` | Day 1 | multi | always |
| `arrival` | Day 1 | single | always |
| `krakowEve` | Day 1 | multi | always |
| `night1` | Day 1 | single | always |
| `energylandia` | Day 2 | single | always |
| `pass` | Day 2 | single | always |
| `aqualantis` | Day 2 | toggle | always |
| `base2` | Day 2 | single | always |
| `night2` | Day 2 | single | **after `base2` chosen** (options depend on it — see §3) |
| `hike` | Day 3 | single | always |
| `mokAccess` | Day 3 | single | **`hike = morskie`** |
| `chillLake` | Day 3 | single | **`hike = chill`** |
| `addons` | Day 3 | multi | always |
| `mtnEvening` | Day 3 | multi | always |
| `night3` | Day 3 | single | **`length = 4d`** (the buffer night is its own `bufferNight` line — don't reuse `night3` for it) |
| `day4` | Day 4 | single | **`length = 4d`** (else hide the whole Day-4 block) |
| `warsawNight` | Day 4/return | single | **`breakDrive = warsaw-night`** |
| `rituals` | Cross-cutting | multi | always |

## 2. Reveal / hide rules (if X → then Y)
- `length = 4d` → **show** Day-4 block (`day4`) + `night3`. `length = 3d` → **hide** Day-4 block; **hide** `night3`; clear any `day4`/`night3` picks; show greyed note on the Day-4 area: *"Day 4 is part of the 4-day trip — switch to 4 days to add it."*
- `buffer = add` → **show** `bufferWhere` (Kraków / Zakopane) + `bufferActivity` (Ojców+Pieskowa Skała / chill-Kraków / Auschwitz / rest) + **`bufferNight`** (its own lodging line, options from the `bufferWhere` location); +1 day, +1 night. *(Do NOT also show `night3` — buffer-night ≠ night3; that was the double-count bug.)*
- `breakDrive = warsaw-night` → **show** `warsawNight` lodging line; +1 night, +~1 home-arrival day. *(If `day4 = warsaw` is also chosen, they share ONE Warsaw night + ONE booking row — see the day4 rule below.)*
- `day4 = warsaw` → auto-select `breakDrive = warsaw-night` (and vice-versa). They are ONE coupled decision: one Warsaw overnight, one lodging row, counted once. Picking either lights both; clearing either clears both.
- `arrival = night-before` → +1 night, +1 day (you leave Kaunas a day earlier and sleep at Day-1's anchor); show an `arrivalNight` lodging note tied to where Day 1 starts. `arrival = same-evening` → no extra night; Day-1 anchor stays at ~15:30 arrival.
- `base2 = zakopane` → `night2` options = **Hostel Stara Polana · Hostel Wielka Krokiew**. `base2 = zator` → `night2` options = **Apartamenty Niko · Noclegi Energylandia** (+ note: you'll drive ~1.5 h each way to the Tatras for Day 3 — this **shortens the Day-3 window**, see §6).
- `hike = morskie` → **show** `mokAccess` (Minibus / Drive+park) + note the "+ Czarny Staw" extension. Any other `hike` → **hide** `mokAccess`.
- `hike = chill` → **show** `chillLake` (Zakrzówek / Czorsztyn+SUP). Any other → hide.
- `hike = pieniny` → Dunajec raft is *included* in that day (its +€20 / 9 h already cover the raft) → **grey-out** the `dunajec` add-on so it isn't double-charged or double-timed; the Dunajec booking row still fires **once**.
- **Geography greying (a hike day is in ONE place):** `hike = slovak` → grey out the Tatra-side add-ons (`kasprowy`, `gubalowka`, `dunajec`, `czorsztyn-toboggan`, `skijump`) — you're across the border that day; show **`slovakAccess`** note (passport/ID + the Lomnický štít cable-car slot, which sells out). `hike = pieniny` → grey `kasprowy`/`gubalowka`/`skijump` (Zakopane-side, too far from the gorge). Greyed add-ons can't be selected and carry a one-line why.
- `energylandia = 2day` → adds the 2-day ticket delta + a 2-day booking item.
- `pass = fast|energy` → adds its delta + a pass booking item. `pass = none` → no cost, no booking.

## 3. Compute (live total · days · nights) — ONE authoritative model
**Nights & lodging rows (one row per real night; never double-count):**
- **Night 1 — Kraków:** always.
- **Night 2 — Zakopane/Zator:** always.
- **Night 3:** **only if `length=4d`** (the pre-drive-home mountain night). *(Not "4d OR buffer" — that was the double-count bug.)*
- **Buffer night:** only if `buffer=add` — a SEPARATE extra night, located per `bufferWhere`; uses that location's lodging list (reuse Night-1 Kraków list / Night-2 Zakopane list).
- **Warsaw night:** only if `breakDrive=warsaw-night`.
- **Arrival night:** only if `arrival=night-before` (located where Day-1's anchor is).
```
baseNights = (length==4d ? 3 : 2)            // BASE pays for these
extraNights = (arrival==night-before?1:0) + (buffer==add?1:0) + (breakDrive==warsaw-night?1:0)
nights = baseNights + extraNights
days   = (length==4d ? 4 : 3) + extraNights  // each extra night = +1 day away (incl. the home-arrival day)
BASE   = (length==4d ? 285 : 250)            // covers baseNights' beds; 3-day already nets −€35
total  = BASE + 18*extraNights + Σ(option deltas below)   // each extra night ≈ €18 (a hostel bed ÷3)
```
> **The €18/extra-night IS that night's lodging cost.** The per-hostel prices shown on lodging options are **display-only and never added** — base nights are in BASE, extra nights are the €18. No lodging is double-counted.
**Deltas (€/person, estimates):**
- `day4`: skip 0 · bochnia +16 · wieliczka +33 · warsaw 0
- `pass`: none 0 · fast +47 · energy +56
- `energylandia`: 1day 0 · 2day +15 *(est)*
- `hike`: morskie +8 · koscieliska +5 · rusinowa +3 · fivelakes +5 · pieniny +20 · chill +0 · slovak +28 · strazyska +0 · chocholowska +0 · gesia +0
- `mokAccess`: minibus +5 · drive-park +5  *(only shown if hike=morskie)*
- `chillLake`: zakrzowek +3 · czorsztyn +12  *(only if hike=chill)*
- `addons` (multi): kasprowy +40 · gubalowka +10 · dunajec +15 · czorsztyn-toboggan +5 · skijump +5
- `mtnEvening` (multi): baths +12 · cook-bacowka +8 · lodge-bbq +6 · karczma +15 · gubalowka-dusk +8
- `stops` (multi): raj +12 · krzemionki +7 · swietokrzyski +1 · augustow 0 · tykocin 0 · warsaw-break 0
- `krakowEve` (multi): cruise +14 · arcadebee +14 · vr +18 · underground +4 · nowahuta +45 · krakus 0 · zakrzowek +3 · bernatka 0 · forum 0 · streetart 0 · bars 0
- `breakDrive`: warsaw-night → **counted as an extra night above (the +€18 is in `18*extraNights`)**, not a separate delta · through 0
- `buffer`: add → **counted as an extra night above** (+€18 in `18*extraNights`), not a separate delta · no 0
- `arrival`: night-before → **counted as an extra night above** (+€18) · same-evening 0
- **Lodging (`night1/2/3/bufferNight/warsawNight/arrivalNight`): €0 option-delta** — base nights are inside BASE, extra nights are the `18*extraNights` term. The per-hostel prices are **display-only, never added**. (See the boxed rule above — this is the single source of lodging cost; do not add a per-night delta on top.)

Before `length` is chosen, show the **range** (€250–€340), not a number.

## 4. Bookings list (each 📌 pick → a row in "Your bookings")
| If selected | Booking row (with where + "sells out?") |
|---|---|
| any `energylandia` | **Energylandia e-tickets** — ticket.energylandia.pl (online < gate) |
| `energylandia = 2day` | **2-day ticket** (same site) |
| `pass = fast/energy` | **Queue pass** (with tickets) |
| `hike = morskie` & `mokAccess = drive-park` | **Morskie Oko TPN parking e-ticket** — prebook, sells out, no on-site cash |
| `addons` incl. `kasprowy` | **Kasprowy Wierch slot** — pkl.pl, sells out |
| `hike = slovak` | **Lomnický štít cable-car slot** — vt.sk, sells out + **passport/ID** reminder |
| `addons` incl. `dunajec` OR `hike = pieniny` | **Dunajec raft** (seasonal) — fires **once** even if both conditions hold |
| `day4 = bochnia` | **Bochnia tour slot** — English 10:30 only |
| `day4 = wieliczka` | **Wieliczka tour slot** — bilety.kopalnia.pl |
| `stops` incl. `raj` | **Jaskinia Raj cave** timed slot |
| `night1` | **Night 1 — Kraków** lodging (free-cancellation) |
| `night2` | **Night 2** lodging (Zakopane/Zator) |
| `length = 4d` | **Night 3** lodging |
| `breakDrive = warsaw-night` (or `day4 = warsaw`) | **Warsaw return-night** lodging — ONE row even if both are set |
| `buffer = add` | **Buffer-night** lodging (per `bufferNight`) |
| `arrival = night-before` | **Arrival-night** lodging (at Day-1's start point) |
| `mtnEvening` incl. `cook-bacowka` | **Bacówka cheese-grill** (check/booking) |
| `krakowEve` incl. `nowahuta` | **Nowa Huta Trabant tour** |
| `bufferActivity = auschwitz` | **Auschwitz timed pass** — free, book weeks ahead |
| always (pre-trip, not a "booking") | EHIC · travel insurance · breakdown cover · car legal kit |

## 5. States to handle
- **Day-4 block when `length=3d`:** greyed + the switch-to-4-days note (don't just hide silently).
- **`mokAccess`/`chillLake`:** absent until their parent hike is picked (slide in).
- **`night2`:** prompt "pick a Night-2 base first" until `base2` chosen.
- **Total:** range until `length` chosen; then animate to the number on each change.
- **Crew-leaning:** real sign-up votes only; empty state "No crew picks yet."
- **Reduced motion:** reveals appear instantly (no slide) for `prefers-reduced-motion`.
- **Inert decisions** (`weather`, `rituals`, `aqualantis`): no €, no booking, no reveal effect — they're saved to the plan-state only, to drive the Plan page / Plan-B / timeline (e.g. `weather=storm` flips the day to its Plan-B). They appear in the decisions list for completeness; don't expect them to move the total.

## 6. TIME & feasibility model (the missing half — not just €, but does it FIT?)
> **Money isn't the real constraint — TIME is.** Each day has a fixed window; the drives + the main attraction eat most of it. The draft MUST show a **per-day time meter** next to the € total and make trade-offs explicit: *adding optional stuff before/around a headline can cost you the headline.*

**Each option carries `hours` (stops also `driveAdd`).** Representative values (h):
- Day-1 stops: augustow 0.75 · raj 2 (+0.3) · swietokrzyski 3 (+0.5) · krzemionki 2 (+1.5) · tykocin 1.5 (+0.3) · cisowa 1.5 (+0.5) · wigry 1 (+0.5) · augustow-canal 3 · kadzielnia 0.75 · debno 0.3 · warsaw-break 2.5
- Hikes (`full`/`half`) — **door-to-door incl. the access drive/minibus + the recommended extension** (these were under-counted before): morskie **10** *(full — ~18 km trail + Czarny Staw push + ~45 min access each way)* · fivelakes **10** *(full)* · pieniny **9** *(full — incl. the Dunajec raft + ~1 h each-way drive)* · slovak **10** *(full — border + cable-car)* · koscieliska 4 *(half)* · rusinowa 3 *(half)* · chill 4 *(half)* · strazyska 3 *(half)* · chocholowska 5 *(half)* · gesia 4 *(half)*
- Day-3 add-ons: kasprowy 3 · gubalowka 1.5 · dunajec 3 · czorsztyn-toboggan 1.5 · skijump 1 · baths 2.5 *(evening)* · cook/karczma 2 *(evening)*
- Day-4: salt mine 3 (Bochnia/Wieliczka)

**Per-day budget + anchor (the headline that must be protected):**
- **Day 1 — anchor = Kraków evening.** Arrival w/o stops ≈ 15:30 (after ~7.5 h drive). `arrival = 15:30 + Σ(stop hours + driveAdd)`. Evening wants ~3–4 h from ~18:00 (June golden hour ~20:30). → arrival >18:30 = **amber** ("evening's tight"); >21:00 = **red** → *"these stops delay Kraków to ~HH:MM — you'd lose the Old Town evening. Drop a stop or arrive a day earlier."*
- **Day 2 — anchor = Energylandia** (gate 10:00 → close ~20:00) + ~2 h evening drive. **No room for other activities** — Aqualantis + the pass fit *inside* the day; anything else on Day 2 = **red conflict** ("Energylandia is the whole day").
- **Day 3 — anchor = the chosen hike.** Usable ≈ **12 h** from a Zakopane base (dawn→evening); **`base2 = zator` shrinks it to ≈ 9 h** (subtract the ~1.5 h each-way drive to the Tatras). `used = hike.hours + Σ(day add-on hours)` (evening items — baths/cook/karczma/gubalowka-dusk, ~2.5 h — sit *after* and push into/past dark). A full-day hike (10 h) already nearly fills the day, so **any day add-on tips it over**. `used > usable` → **red** → *"⚠️ Won't fit — this cuts [Morskie Oko] short. Drop an add-on, add a buffer day, switch to a Zakopane base, or pick a half-day hike."*
- **Day 4 — anchor = drive home** (~10–11 h from Zakopane). + salt mine 3 h → ~13–14 h = **red** ("12+ h day — split it with a Warsaw overnight"). Warsaw stopover spreads it over 2 days.

**Hard conflicts (block / red):**
- **Day-3 over-time** — the real detector is `hike.hours + Σ(selected day-addon hours) > usable` (NOT "two full-day items" — `hike` is single-select, so you can't pick two hikes; the only way to overload is a full-day hike + add-ons). E.g. morskie 10 + kasprowy 3 = 13 > 12 → red.
- **Geography** — Tatra add-ons (kasprowy/gubalowka/dunajec/toboggan/skijump) on a `hike = slovak` day, or Zakopane-side add-ons on `hike = pieniny`, are greyed (§2), so they can't create an impossible itinerary.
- **Energylandia day (Day 2)** — there is no separate "Day-2 activity" input; this rule just means the timeline must NOT let a Day-1 stop or Day-3 item bleed into Day 2 (Energylandia + Aqualantis + the pass all fit *inside* the one day).
- **Pieniny/Dunajec** — `hike=pieniny` already includes Dunajec; the add-on is greyed so it can't be added (or timed) twice.
- **Gubałówka twice** — selecting both `addons=gubalowka` (daytime funicular/zipline) and `mtnEvening=gubalowka-dusk` stacks two Gubałówka trips in one day; soft-warn ("you've got Gubałówka twice — keep one?").

**Preset behavior on a red day:** presets (esp. **Max thrill**, which intentionally overloads Day 3) **apply as-is**, then immediately surface the red Day-3 meter + the named squeeze + the one-tap fixes. This is by design — a preset is "a starting point," not a validated plan — so the builder shouldn't treat the red state as a bug or silently drop picks.

**Anchor protection (the user's point):** each day's headline is pinned; when optional picks push the day over, the warning **names what gets squeezed** — never just "over." *"Adding Krzemionki + Świętokrzyski delays Kraków to ~21:30 — you'd skip the evening."*

**Adaptivity (more time changes everything):** stops/add-ons recompute arrival times + day meters live; a red day **offers inline fixes** (add a **buffer day** → frees it · switch to the **quicker hike** · **move** to a lighter day · **drop** it); trip-length / buffer / arrival changes re-run all the day meters.

**UI:** a small **time bar per day** (used/available, green→amber→red) beside the per-person €; red shows the named consequence + a one-tap fix. Summary reads both: *"≈ €X · 4 days · ⚠️ Day 3 over by ~2 h."*

---

> This map + Content §A together fully specify the plan-draft. Keep **all** picks/status in **one plan-state object** (see Enhancements data note); persist it to `localStorage 'wtc-poland-plan'` **as a temporary adapter** — storage moves to **one shared Excel/sheet later**, so don't scatter state across many keys. The Plan page + download read from that one object.
