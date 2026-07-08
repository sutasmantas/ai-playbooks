# 📝 Trip Site — Content v3 (restructured)

> v2 made the plan-draft a flat pile of ~16 toggles with thin detail, preselections, no day structure, no booking decisions — a mess. v3 fixes that. **Claude Code owns this content; Claude design builds it.** Deep source text for everything is in `Energylandia-Trip-Planning-Checklist.md` (you have it) — use it in FULL, not one-liners.

## What must change (the headline fixes)
1. **Organize the plan-draft BY DAY** (Trip-wide → Day 1 → Day 2 → Day 3 → Day 4), so every choice is anchored to *when* it happens. ("Cook together — which day?" → it's the Day-3 mountain evening.)
2. **Progressive disclosure (branching):** nothing downstream shows until its parent is chosen. Pick 4-day → Day-4 options appear. Pick the Morskie Oko hike → its access sub-choice appears. Pick a salt mine → "book a tour slot" appears. **Selecting reveals the next decision.**
3. **NO preselections — none.** Not trip length, not the mountains/Tatra day, nothing. The mountain day is itself a *choice* (we never agreed Morskie Oko is fixed). Total starts as a range with "pick to build your total."
4. **Booking IS a decision.** Every chosen option that needs reserving gets a **"Book this?"** state (To-do / Booked / link), and the summary builds a live **"Your bookings"** list. The download checklist lists **all** bookings for the chosen plan.
5. **Real detail per option** — not a one-liner. Each shows: **€ impact · distance/drive-time · how long it takes · one-line why · any knock-on** (and a "book ahead" flag if relevant). Adventure/thrill stays the headline; calm/no-drinking are options beside it (no-drinking is the one hard rule → alcohol-free evenings are the default).
6. **The Plan page must be genuinely deep** (see §B) — full explanations, not summaries.
7. **Remove "Who handles what."** (Dropped.)

---

## A. PLAN-DRAFT — day-by-day, progressive decision flow

**Option format (every choice):** `Label · [€Δ] · [time/distance] · why (1 line) · [knock-on] · [📌 book ahead]`
**Self-sufficient detail:** each option must carry enough to decide **without leaving the page or googling** — distance/drive-time, € impact, the one key fact, and a "more" expand that pulls the matching deep Plan section. Never a bare one-liner.
**Reveal rules** are noted as → *reveals…* / *hidden unless…*. **Live summary:** per-person total (range until trip-length picked), day count, nights, the running **bookings list**, and a **per-day time meter** (see Logic §6).

> ⏱️ **Time & feasibility (critical — model this, not just money):** each day has a fixed window and the drives + the main attraction eat most of it. Show a **per-day time bar**; when optional picks push a day over, say **exactly what gets squeezed** — e.g. *"these stops delay Kraków to ~21:30, you'd lose the Old Town evening"* or *"Morskie Oko is a full day — Kasprowy won't also fit."* Then offer a fix (add a buffer day / pick the quicker option / move it / drop it). **Full-day things are mutually exclusive on a day; nothing stacks on the Energylandia day.** Full per-day budgets, option hours, conflict + anchor-protection rules are in **`Trip-Site-PlanDraft-Logic.md` §6.**

### ▸ TRIP-WIDE (decide first)
- **Dates** *(single)* — Thu 25–Sun 28 Jun · Fri 26–Mon 29 · Custom. *Detail:* Sun 28 = rare **trading Sunday** (malls/supermarkets OPEN) + longest park hours; avoid Fri-PM/Sun-PM border + Zakopianka jams. ⚠️ **Sunday trading ban:** on a *non-*trading Sunday most shops/malls/food-courts are **closed** — if your drive-down day lands on one (e.g. a Jun-21-type Sunday), the mall food-court stops won't work; **stock up Saturday** or plan fuel-station/restaurant food. The planner flags this when the chosen date's travel day is a closed Sunday.
- **Trip length** *(single, no default)* — **4 days/3 nights** *(→ reveals Day 4)* · **3 days/2 nights** *(−€35; hides Day 4 + drops Night 3)*.
- **Per-person budget cap** *(single)* — ~€265 (lean) / ~€340 (balanced) / ~€480+ (max thrill) (just a steering frame — the live total is exact; matches the preset lanes).
- **Break the return drive?** *(single)* — Straight through (~11 h, swap drivers ~2 h) · **Warsaw overnight** *(+1 cheap night; splits the drive)* → *reveals a Warsaw Night lodging line*.
- **Buffer / rest day?** *(single — "most crews skip; highest value")* — Add one *(+1 day +1 night; → where: Kraków or Zakopane → its own **buffer-night lodging** pick appears)* · No buffer. → *if added, a **buffer-day activity** choice appears:* Ojców NP + Pieskowa Skała (castle + caves, ~30 min N of Kraków) · a chill Kraków day (Zakrzówek / Kryspinów + cafés) · *(opt-in, heavy)* Auschwitz-Birkenau (full ~7 h, book the free pass ahead) · or just rest.
- **Weather plan-B** *(single)* — Set a storm trigger ("if >60% storm by noon → swap the ridge for an **indoor/low-exposure backup**") · Wing it. *Indoor/rainy backups (Zakopane/Kraków):* thermal baths · Dolina Kościeliska (sheltered, lit cave) · **GOjump trampoline park · escape room · axe-throwing** · a museum — surfaced as the day's Plan-B.

### ▸ DAY 1 — Drive down + Kraków evening
- **Stops on the way** *(multi — each with distance/time)*:
  - ⭐ Augustów / Lake Necko swim — €0 · ~100 km in, ~45 min · best leg-stretch.
  - ⭐ Jaskinia Raj cave + Chęciny Castle — +€12 · ~10 min off S7 (Kielce), ~2 h · prettiest cave + hilltop ruin · 📌 cave slot.
  - Świętokrzyski – Łysa Góra — ~€1 · ~30 min off S7, ~3 h · the one real mid-route hike (reopened 2026).
  - Krzemionki flint mines (UNESCO) — +€7 · ~45 min off S7, ~2 h · descend 5,000-yr shafts.
  - Tykocin — €0 · off S61, ~1 h · baroque town + lunch.
  - Cisowa Góra + Suwałki Park viewpoints — €0 · ~25 min off S61 · NE Poland's striking glacial hills, quick photogenic climb.
  - Lake Wigry monastery (+ swim/kayak) — small · ~20 min off route · clifftop monastery on the lake.
  - Augustów Canal lock cruise — ~€20 · in Augustów · historic lock-passage boat (alternative to the lake swim).
  - Kadzielnia zip-line + cave, Kielce — small · in Kielce · quick adrenaline over a quarry.
  - Dębno UNESCO wooden church — €0 · on the Nowy Targ road · 15-min curiosity.
  - Warsaw 2–3 h break — €0 · ≈ halfway · Old Town + a milk bar.
  - *Extras (long detour):* Sandomierz + Krzyżtopór · Biebrza/Osowiec fortress (DEET!).
- **Arrival** *(single)* — Arrive Kraków for the evening (default flow) · *if a Day-2 anchor:* **arrive the night before** for a fresh full day.
- **Kraków evening** *(multi — a real menu; no-drinking-friendly first)*:
  - ⭐ Old Town + Wawel at golden hour — €0 · 2 h · classic first walk + zapiekanka at Plac Nowy (~€3).
  - ⭐ Vistula sunset cruise (plain, non-wine) — ~€14 · 1 h · chill + photos past Wawel.
  - ⭐ Arcade Bee — ~€14 · 2 h · karaoke + billiards + arcade (best dry night).
  - Krakus Mound sunset — €0 · 45 min · free panorama (📸).
  - Zakrzówek quarry swim — ~€3 · if daylight · turquoise lagoon (📸).
  - VRepublic VR park — ~€18 · 1.5 h · co-op VR, photogenic.
  - Rynek Underground museum — ~€4 · 1.5 h · medieval market under the square.
  - Bernatka love-lock bridge night photos — €0 · 30 min (📸).
  - Forum Przystań riverside — €0 · sunset hang, soft drinks.
  - Nowa Huta Trabant tour — ~€45 · 2.5 h · communist district, quirky.
  - Kazimierz street-art lanes / night walk — €0 (📸).
  - *aside:* Kazimierz bars — only if some fancy it (kept off the headline; no-drinking rule).
- **Night 1 · Kraków lodging** *(single)* — Greg & Tom (9.6★, free b'fast+dinner, ~€23pp) · Atlantis (cheapest, ~€13pp) · Apartment-Kazimierz (free parking + **kitchen → cook together**, ~€27pp) · 📌 book.

### ▸ DAY 2 — Energylandia → mountains
- **Energylandia** *(single)* — 1-day · **2-day** (split coasters, beat queues, **+€15 est**). *Detail:* gate at 10:00; ride Zadra → Hyperion → Abyssus → Formuła → Speed Water; **📌 e-tickets**. *(Budget tip: you can leave & re-enter to eat cheaper — outside food/water is allowed.)*
- **Queue pass** *(single)* — None (rope-drop, €0) · Fast Pass (+€47, 5 coasters) · Energy Pass (+€56, ~14). 📌 if chosen.
- **Aqualantis water park** *(toggle)* — included free; bring swimwear (water-park pick = covered).
- **Night-2 base** *(single)* — **Zakopane** *(mountain vibe, by the Morskie Oko bus)* · **Zator** *(less evening driving; but you'll drive to the Tatras for Day 3)* → *reveals the matching Night-2/3 lodging list:* Zakopane → Hostel Stara Polana / Hostel Wielka Krokiew; Zator → Apartamenty Niko / Noclegi Energylandia. 📌 book.

### ▸ DAY 3 — The mountains (the WHOLE day is a choice — nothing assumed)
- **What's the mountain day?** *(single, no default)*:
  - Morskie Oko (+ Czarny Staw) — €0 + entry · ~8 km tarmac each way, full day · iconic, busy → *reveals **Morskie Oko access**: Minibus from Bar Fis (~€2–3) · Drive + pre-booked TPN parking (35–75 PLN, sells out 📌).*
  - Dolina Kościeliska + Mroźna Cave — ~€5 · easy, far quieter, half-day + lit cave.
  - Rusinowa Polana — ~€3 · easy ~1 h, best panorama-for-effort.
  - Five Lakes Valley + Wielka Siklawa — entry · hard, full day · Poland's tallest waterfall + 5 lakes.
  - Pieniny: Trzy Korony + Dunajec — ~€20 · ~1 h drive, full day · clifftop + gorge raft.
  - **Chill lake day instead** — €0–€12 · Zakrzówek / Czorsztyn lake + SUP · the calm/water option.
  - **Slovak-side day** (cross the border) — ~€20–35 · ~1 h each way · Lomnický štít tram / Bachledka treetop walk / Belianska cave / Tatralandia aquapark — a whole different day (passport needed).
  - Dolina Strążyska + Siklawica waterfall — €0 · easy half-day (~3 h) · short, quiet, waterfall payoff.
  - Dolina Chochołowska — €0 · easy–moderate (~4–5 h) · the longest, wildest valley (famous spring crocuses).
  - Gęsia Szyja — €0 · moderate (~4 h) · panoramic meadow summit, far fewer people.
- **Adventure add-ons** *(multi)* — Kasprowy Wierch cable car (+€40, 📌 timed) · Gubałówka funicular + slide + zipline (+€10) · Dunajec raft/kayak (+€15) · Czorsztyn 1000 m toboggan (~€5/ride) · Wielka Krokiew ski-jump slide (~€5).
- **Mountain evening** *(multi)* — Thermal baths (Bukovina/Chochołowskie, +€12) · ⭐ **Cook together: grill oscypek at a bacówka** OR a lodge BBQ (groceries) · *karczma* dinner (oscypek + kwaśnica) · Gubałówka at dusk (📸).
- **Night 3 · lodging** *(single — only on a 4-day trip; the buffer night is its own separate pick)* — same Zakopane options, or nearer Kraków/Warsaw to shorten Day-4. 📌 book.

### ▸ DAY 4 — *(hidden unless trip length = 4 days)* Salt mine + drive home
- **Day 4 plan** *(single)* — Skip (relaxed drive, €0) · **Bochnia Salt Mine** (+€16 · 140 m slide + salt-lake boat; *English tour 10:30 only* 📌) · Wieliczka (+€33 · famous chapel, busier 📌) · Warsaw stopover (selecting it turns on the **Warsaw overnight** from "break the return drive" — one shared night, one booking). *Pick ONE mine.*

### ▸ CROSS-CUTTING
- **Group rituals** *(multi, €0)* — shared playlist · a photo challenge · nightly "best thing today."

> **Summary panel** updates live: €/person (range → number), days, nights, and a **"Your bookings"** list built from every 📌-flagged pick (see §C/§D). Show "where the crew's leaning" from **real sign-ups only** (empty state until votes exist).

---

## B. THE PLAN page — make it DEEP (it's currently far too thin)
Keep the day cards + ribbon, but **every section must be full**, written out — not a one-line summary. Pull the complete text from the Energylandia checklist. Sections to include, all in depth:

**Worked example of the depth expected — "Driving & legal in Poland" (don't ship the current one-liner):**
> *Carry passports — Poland reinstated LT-border checks through Oct 2026; keep them reachable, cross weekday mid-morning. Headlights on 24/7 (fines if off). Alcohol limit ~0.0 — the day's driver doesn't drink, full stop. Section-speed cameras on the S7 near Radom (Kopana/Falęcice/Kępiny, all 120) and a 90 in the Zakopianka tunnel — they average your speed over the stretch, so hold the limit the whole way; run Yanosik for alerts. Carry the legal kit: warning triangle, hi-vis vest in the cabin, fire extinguisher (police check). **Kraków:** the Old Town is a Limited-Traffic Zone — you can't drive/park in the core, so base in Kazimierz; the Low-Emission Zone (live 2026) needs a petrol car 2005+/Euro 4 (diesel Euro 5) — if yours doesn't qualify, park at a Park & Ride and tram in. Foreign-plate fines are paid on the spot (card/cash).*

Other sections (same depth, from the checklist): **Route & stops** (legs + distances + drive-times + the timed stop list) · **Day-by-day** · **Where we stay** (all options + parking) · **Food & drink** (cheap eats + highlander food) · **Packing** (4 lists) · **Documents & insurance** · **Car readiness** (service/tyres/legal kit/spare key) · **Money & connectivity** (PLN, decline DCC, Revolut, roaming/eSIM) · **Apps** · **Tolls & parking per stop** · **Energylandia game-plan** (rope-drop Zadra→Hyperion→Abyssus, lockers ~10–15 PLN before gates, bring food/water, water-coasters soak you, must-rides beyond the big 4, the app for wait times) · **Safety & emergencies** (112, TOPR, pickpockets, car break-ins) · **Reddit-tested tips** (drive straight at the border + Waze; hypermarket fuel; eat one street off Krupówki; skip the horse carts) · **Budget breakdown** · **Final checks (24 h)**. Each gets a real paragraph/list, not a sentence.
> Also: the **day-by-day must keep the fatigue reality-check** (Day-1 night → Day-2 early gate → Day-3 dawn) + the dawn-start / June-thunderstorm note. And the **Plan should reflect the crew's CHOSEN options** (read the saved draft — show the hike/queue-pass/Day-4 they actually picked, **not a hardcoded Morskie Oko**).
> **Plus (from `Trip-Site-Enhancements.md`):** each day card carries a **real-time timeline** (06:00 depart → … → 20:30 golden hour) **and a one-line Plan-B**; the page links an **offline emergency one-pager**; and a **pre-trip countdown** (−3 wks → −24 h) shows before departure.

---

## C. The "Book ahead — everything you might need to reserve" (full list)
What to book *depends on the choices*, but **list them all** (on the Plan page + in the download). Show each with what it is + where + the "sells out?" flag, and mark which apply to the current draft:
- **Energylandia e-tickets** (ticket.energylandia.pl) + **queue pass** if chosen — online beats the gate.
- **Energylandia 2-day ticket** (if 2-day chosen).
- **Morskie Oko TPN parking e-ticket** (prebook only, sells out, no on-site cash) — *or* plan the Bar Fis minibus (no booking).
- **Kasprowy Wierch** timed slot (pkl.pl, sells out).
- **Salt-mine tour slot** — Bochnia (bilety; English 10:30 only) **or** Wieliczka (bilety.kopalnia.pl).
- **Jaskinia Raj cave** timed slot.
- **All lodging** — Night 1 Kraków, Night 2 (+3 if 4-day), Warsaw night if "break the drive," buffer-day night — free-cancellation rates.
- **Cooking class / bacówka** (if chosen) · **Vistula cruise / Arcade Bee / VR** (often walk-in, but check) · **Dunajec raft** (seasonal).
- **Admin (not bookings but pre-trip):** EHIC, travel insurance, breakdown cover, car legal kit.

## D. Download checklist — make it IN-DEPTH (personalised)
The button builds a printable/PDF from the crew's draft. It must include, in full:
1. **The chosen plan, day by day** — the picked options **+ a real-time timeline** (depart / stops / arrive / finish times, from the time model).
2. **Your bookings** — every 📌 item for the chosen options (from §C), with where-to-book + sells-out note + a status tick-box.
3. **Plan-B per day** — the fallback line for each day (parking full → minibus · storm → baths · breakdown → roadside · border jam → Ogrodniki, etc.).
4. **Pre-trip countdown** — the dated prep timeline (−3 wks → −24 h).
5. **Packing** (road / park / mountains / personal **+ the shared-gear "bring one between you" list**), **documents & insurance**, **car readiness + driving laws**, **money & apps** — full lists.
6. **Emergency one-pager** — 112 · TOPR 601 100 300 · insurer + breakdown hotlines · hospitals per region · meeting points · crew numbers.
7. Per-person **budget breakdown** for the chosen plan.
> It should read like a real trip checklist someone prints and ticks off — not a 6-line summary.

---

## E. SIGN-UP page — leave as-is (no changes; it already captures what's needed).
Its data drives the plan-draft "crew leaning" (real votes, not mock).

## F. Reminder on tone
**No-drinking is the one hard rule** (alcohol-free evenings default; bars = optional aside). Everything else was a soft sign-up pick. **Adventure & thrill stay the headline** — the calm/social/photo/cook options are extra breadth beside it, never replacements.
