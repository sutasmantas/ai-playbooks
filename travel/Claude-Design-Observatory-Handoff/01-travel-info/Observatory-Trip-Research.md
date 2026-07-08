# Lithuania Observatory Trip Research Handoff

Prepared: 2026-06-02  
Corrected brief: **one-day fall trip from Kaunas, Observatory mandatory, late/night observatory anchor, optional stops along the way.**  
Scope: research/content only. The next agent designs/builds the site.

## 0. Correction from the first pass

The first pass was too thin and made the wrong trip-shape assumption. It treated the trip like a possible overnight/summer micro-trip. The user clarified:

- Season: **fall**.
- Duration: **one day**.
- Mandatory anchor: **observatory late / night program**.
- Optional: **somewhere along the way** before the observatory.

The issue was not `travel/Travel-Plan-Playbook.md`. That file says to pin current prices, build a decision layer, include bookings, route stops, safety, time realism, and an execution checklist. The first pass did not follow that bar tightly enough.

## 1. What the Poland work did before

Use this as the build-agent model:

- `travel/Trip-Site-Handoff/BUILD-BRIEF.md`
  - It tells the builder to extend the existing site, not redesign it.
  - It explains that each destination has `Sign up -> Plan draft -> Plan`.
- `travel/Trip-Site-Handoff/01-specs/Trip-Site-Content.md`
  - This is the model for content depth.
  - It splits the trip into a site decision layer and a deep final Plan page.
- `travel/Trip-Site-Handoff/01-specs/Trip-Site-PlanDraft-Logic.md`
  - This is the model for decision IDs, reveal rules, totals, bookings, and time/feasibility.
- `travel/Trip-Site-Handoff/Energylandia-Trip-Planning-Checklist.md`
  - This is the model for the full execution checklist.
- `travel/Trip-Site-Handoff/06-current-site/`
  - Existing site stack and implemented pages.

For Observatory, keep the same principles:

- No preselected choices.
- Build a **day plan decision engine**, not a static article.
- Observatory/night program is the mandatory anchor.
- Every optional stop needs price, time, route impact, booking risk, and what it squeezes.
- The final Plan page must reflect the chosen route/stops.
- All picks/status should live in one plan-state object, like Poland.

## 2. Destination and anchor

Primary destination:

- **Lithuanian Museum of Ethnocosmology / Lietuvos etnokosmologijos muziejus**
- Location: Kulionių k., Žvaigždžių g. 10, Čiulėnų sen., Molėtų r.
- Coordinates: about `55.31539, 25.55488`
- Public visitor-facing observatory/museum near Molėtai Astronomical Observatory.

Mandatory anchor:

- **Late/night telescope observation at the Museum of Ethnocosmology.**
- Best headline version: **80 cm telescope night observation**.
- Backup version if 80 cm unavailable: **40 cm telescope night observation**.
- If weather cancels night viewing, the site should still keep the trip useful with a same-day Plan-B.

## 3. Current official observatory facts

From the museum official pages:

- Day guided tour: **8 EUR adult**, 4 EUR discounted.
- Observation deck only: **4 EUR adult**, 2 EUR discounted.
- 80 cm telescope night observation: **12 EUR adult**, 10 EUR discounted.
- 40 cm telescope night observation: **10 EUR adult**, 8 EUR discounted.
- Day guided tour lasts up to **1.5 h**.
- Observation deck visit lasts up to **30 min**.
- Night telescope program starts about **1.5 h after sunset**.
- Night telescope program lasts **1-1.5 h**.
- Night program requires **clear skies**.
- Final weather confirmation/cancellation comes about **13:00-14:00 on the same day** by SMS/phone.
- The telescope tower temperature is the same as outdoors; pack warm fall clothing.
- 80 cm tower group capacity: up to **16 visitors**.
- 40 cm tower group capacity: up to **18 visitors**.
- English may be available if requested, but is not guaranteed; call/email ahead.
- Registration phone: **+370 6 152 0688**.
- Registration email: **registracija@lemuziejus.lt**.
- Outdoor exhibition is free/open at all times.

Booking implication:

- The night program is not something to improvise at the door. Register ahead.
- The site should display a same-day "weather call" status item: **Wait for confirmation by 14:00**.
- The Plan page/checklist must carry the registration phone/email and say to keep the phone reachable on trip day.

## 4. Fall astronomy timing

Fall is better than June for this trip because sunset is earlier and nights are darker.

Use these as site labels until final dates are chosen:

- **Early September:** sunset around ~20:00; night program likely starts around ~21:30.
- **Late September:** sunset around ~19:10; night program likely starts around ~20:40.
- **Mid October:** sunset around ~18:20; night program likely starts around ~19:50.
- **Late October / November:** much earlier night, but colder and weather risk rises.

Moon logic:

- Near-new-moon nights are better for faint sky objects.
- Full-moon nights are still fine for Moon/planet viewing but worse for deep sky.
- Do not hardcode one date; the plan-draft should let the group choose:
  - **Best sky window** near new moon.
  - **Easiest group Saturday**.
  - **Custom date**.

Suggested date ranges to re-check near booking:

- September 2026: check around the new-moon window.
- October 2026: check around the new-moon window.
- November 2026: darker earlier, but colder/wetter and road fatigue after dark matters more.

Date-sensitive facts:

- Actual available night slots must come from museum registration.
- Final sunset/program start must be recomputed once date is chosen.
- Weather is the real deciding factor and is only confirmed same day.

## 5. Route from Kaunas

OSRM route estimates generated 2026-06-02 from central Kaunas.

Direct:

- Kaunas -> Ethnocosmology Museum: **128 km / ~2 h 04 min**.
- Return: **128 km / ~2 h 04 min**.
- Direct one-day round trip: **256 km / ~4 h 08 min drive time**, before stops.

Useful stop routes:

- Kaunas -> Rumšiškės Open-Air Museum -> Observatory:
  - **166 km / ~2 h 26 min drive to observatory**, before the museum stop.
  - Legs: Kaunas -> Rumšiškės ~25 km / 28 min; Rumšiškės -> Observatory ~141 km / 1 h 58 min.
- Kaunas -> Taujėnai Manor -> Observatory:
  - **162 km / ~2 h 32 min drive to observatory**, before the manor stop.
  - Legs: Kaunas -> Taujėnai ~87 km / 1 h 26 min; Taujėnai -> Observatory ~75 km / 1 h 06 min.
- Kaunas -> Ukmergė -> Taujėnai -> Observatory:
  - **162 km / ~2 h 32 min drive**, before stops.
  - Good if the group wants a food break plus manor/park.
- Kaunas -> Dubingiai/Asveja -> Observatory:
  - **169 km / ~2 h 29 min drive**, before scenic stop.
  - More scenic/lake/history, less direct.
- Kaunas -> Mindūnai Observation Tower -> Observatory:
  - **146 km / ~2 h 28 min drive**, before tower stop.
  - Most on-theme nature add-on; also close to final destination.

Route time warning:

- Every meaningful stop turns the day into **6-9 hours total away from Kaunas**, because the late observatory anchor adds the return drive after dark.
- The site must show a time meter that protects the observatory slot. Optional stops should never make the group late for the registered night program.

## 6. One-day route candidates

These are the route presets the website can expose.

### Preset A - Lean / Observatory-first

Best when:

- The group mainly wants the telescope.
- Weather is uncertain.
- People do not want a long pre-trip.

Timeline template:

- 16:00 depart Kaunas.
- 18:05 arrive museum area.
- 18:10 outdoor exhibition / light walk.
- 19:00 food/picnic near Molėtai or car snacks.
- 20:00 arrive for night program buffer.
- 20:30-22:00 night observation depending date.
- 22:15 depart.
- 00:20 arrive Kaunas.

Costs:

- Fuel split: ~9-10 EUR/person if 3 people.
- Night observation: 10-12 EUR/person.
- Food/snacks: 5-15 EUR/person.
- Total: **~25-40 EUR/person**.

Bookings:

- Night telescope registration.
- Weather confirmation call/SMS.

Trade-off:

- Cheapest and safest for timing, but fewer "trip" moments.

### Preset B - Balanced fall day

Best default.

Timeline template:

- 13:00 depart Kaunas.
- 15:05 arrive museum / Kulionys area OR nearby route stop.
- 15:15 day tour or observation deck.
- 16:45 Mindūnai tower or Molėtai food.
- 18:00 dinner / warm-up.
- 19:30 return to museum area.
- 20:00 buffer for registered night observation.
- ~20:30-22:00 night observation in late September / October.
- ~00:15 Kaunas.

Costs:

- Fuel with local detour: 10-13 EUR/person.
- Day tour: +8 EUR/person or deck-only +4 EUR/person.
- Night program: +10-12 EUR/person.
- Food: +8-18 EUR/person.
- Total: **~35-55 EUR/person**.

Bookings:

- Night telescope.
- Day tour/deck if selected.
- Food reservation if eating in Molėtai / group wants a guaranteed table.

Trade-off:

- Best "full but not stupid" one-day version.

### Preset C - Scenic lake-country

Best when:

- The group wants photos/lakes/forest before stars.

Timeline template:

- 11:30 depart Kaunas.
- 13:40 arrive Mindūnai tower / Labanoras.
- 14:00 tower + lake area.
- 15:30 coffee/food in Molėtai.
- 16:45 museum day tour/deck.
- 18:30 dinner / wait for night.
- 20:00 night program buffer.
- ~22:00 depart after program.
- ~00:15 Kaunas.

Costs:

- Fuel with detour: 11-14 EUR/person.
- State park visitor ticket if used: +1 EUR/person.
- Day tour/deck: +4-8 EUR/person.
- Night program: +10-12 EUR/person.
- Food: +8-18 EUR/person.
- Total: **~35-55 EUR/person**.

Bookings:

- Night telescope.
- Day tour/deck.
- Optional restaurant/cafe table.

Trade-off:

- More outdoors, more weather exposure. Good in dry fall; weaker in rain.

### Preset D - Culture stop along the way

Best when:

- The group wants a proper daytime stop before the night anchor.

Route choices:

- Rumšiškės Open-Air Museum.
- Taujėnai Manor / park.
- Ukmergė + Taujėnai.

Timeline template:

- 10:30-12:00 depart Kaunas, depending chosen stop.
- 11:00-15:00 main stop.
- 15:00-17:00 continue toward observatory.
- 17:00 day tour/deck or Molėtai dinner.
- 20:00 night program buffer.
- 22:00-00:30 return window.

Costs:

- Fuel with detour: 12-15 EUR/person.
- Stop ticket: variable by site and date; mark as "check current".
- Night program: +10-12 EUR/person.
- Food: +8-20 EUR/person.
- Total: **~35-70 EUR/person** depending stop.

Trade-off:

- Feels like a real day trip, but it can become rushed if the stop closes early or the observatory slot is early after sunset.

## 7. Along-the-way options

Ranked by fit for a one-day fall observatory trip.

### 1. Mindūnai Observation Tower / Labanoras Regional Park

Why it fits:

- Most on-theme: forest, lakes, high viewpoint, calm fall photos.
- Very close to the final destination.
- Does not pull the route too far away.

Facts:

- Mindūnai tower is 36 m high.
- Views over Siesartis, White Lakajai, Black Lakajai, and Labanoras forest.
- Labanoras is Lithuania's largest regional park.
- State park visitor ticket exists: 1 EUR for one protected area, 3 EUR for all state parks for 3 days, 10 EUR annual.

Time:

- Route via Mindūnai: ~145.6 km / ~2 h 28 min to observatory before stop time.
- Stop: 45-90 min.

Cost:

- Tower: no specific paid ticket found on official source.
- State park visitor ticket: 0-1 EUR/person if using the visitor-ticket system.

Booking:

- No booking.

Plan-B:

- If rain/wind: skip tower and do Molėtai food + museum indoor program.

Website option copy:

- "Mindūnai tower + Labanoras lakes · +0-1 EUR · +45-90 min · best fall-photo stop close to the observatory · no booking."

### 2. Molėtai town food / warm-up stop

Why it fits:

- Practical before a late observation.
- Keeps everyone warm, fed, and not rushing.
- Good if weather cancels the telescope but the group still goes.

Time:

- 45-90 min.
- Keep it after the day program and before the night program.

Cost:

- Cafe/restaurant: estimate 8-20 EUR/person.
- Snacks/picnic: 5-8 EUR/person.

Booking:

- For a small group, not always needed, but the site should expose "reserve a table" as a booking/status if the group chooses restaurant dinner.

Plan-B:

- If the night program is cancelled by 14:00, still do dinner + day tour/deck/outdoor exhibition.

Website option copy:

- "Molėtai dinner/warm-up · +8-20 EUR · 1 h · protects the late observatory slot because everyone arrives fed and warm · reserve if weekend."

### 3. Museum daytime tour / observation deck before night

Why it fits:

- Same destination, no route risk.
- Makes the day worthwhile even if night weather fails.

Options:

- Full day tour: 8 EUR, up to 1.5 h.
- Observation deck only: 4 EUR, up to 30 min.
- Outdoor exhibition: free, accessible anytime.

Booking:

- Register/check availability.

Plan-B:

- If night cancels, the day visit is still the core trip.

Website option copy:

- "Day tour before the night program · +8 EUR · up to 1.5 h · gives the story before the telescope and saves the day if clouds roll in · register."

### 4. Rumšiškės / Open-Air Museum of Lithuania

Why it fits:

- Close to Kaunas, real daytime content, good if leaving earlier.
- Strong culture/history stop before the star theme.

Route:

- Kaunas -> Rumšiškės -> Observatory: ~166 km / ~2 h 26 min drive before stop time.
- This adds about 38 km vs direct, but the first stop is only ~28 min from Kaunas.

Time:

- Minimum meaningful stop: 1.5-2 h.
- Better stop: 3 h.
- In fall, closing hours may limit it; check exact chosen date.

Cost:

- Ticket/hours must be checked on official museum page for the exact date.

Booking:

- Usually ticket/entry, but group/special programs may need booking.
- If the site exposes it, include a "check open hours/tickets" booking row rather than a fake fixed price.

Plan-B:

- If the museum is closed or hours are too short, replace with Mindūnai or Molėtai food.

Website option copy:

- "Rumšiškės open-air museum · check ticket · +1.5-3 h · turns the day into culture + stars, but only if fall hours fit · check/opening required."

### 5. Taujėnai Manor / park

Why it fits:

- More scenic/social than serious museum.
- Good fall photo stop if the group wants something between Kaunas and Molėtai.

Route:

- Kaunas -> Taujėnai -> Observatory: ~162 km / ~2 h 32 min drive before stop time.

Time:

- 1-2 h for park/manor grounds.
- Longer if eating or doing activities.

Cost:

- Current ticket/activity pricing must be checked on Taujėnai Manor official channels for chosen date.

Booking:

- Check opening hours and tickets.
- If restaurant/event activity is selected, reserve.

Plan-B:

- If closed/private event/weather bad: Ukmergė food stop or direct to museum.

Website option copy:

- "Taujėnai Manor park · check ticket · +1-2 h · scenic fall stop on a not-too-long detour · verify hours/private events."

### 6. Ukmergė old town / food stop

Why it fits:

- Practical midpoint if using the Taujėnai route.
- Easier than adding a big attraction.

Route:

- Kaunas -> Ukmergė -> Taujėnai -> Observatory: ~162 km / ~2 h 32 min drive before stop time.

Time:

- 45-90 min.

Cost:

- Food/snacks: 8-18 EUR/person.

Booking:

- Optional restaurant reservation.

Website option copy:

- "Ukmergė food/photo stop · +8-18 EUR · +45-90 min · easy midpoint before the night anchor · optional table booking."

### 7. Dubingiai / Asveja scenic route

Why it fits:

- Lake/history route and autumn mood.
- Good if the group prefers scenery over a ticketed stop.

Facts:

- Asveja Regional Park protects the long lake valley and Dubingiai heritage landscape.
- Asveja Lake is Lithuania's longest lake.
- Dubingiai castle site is a key cultural object.

Route:

- Kaunas -> Dubingiai -> Observatory: ~169 km / ~2 h 29 min drive before stop time.

Time:

- 1-2 h for castle mound/lake viewpoint.

Cost:

- Usually free/low-cost; state park visitor ticket may apply if using the protected-area visitor-ticket system.

Booking:

- No normal booking.

Plan-B:

- Skip if rain/dark; it is not as good after sunset.

Website option copy:

- "Dubingiai + Asveja lake route · +0-1 EUR · +1-2 h · scenic/history detour before stars · best only in daylight."

## 8. Plan-draft decision layer

Use these IDs for `observatory/plan-draft.html`.

### Trip-wide

`seasonWindow` single, always visible:

- Early fall / September
  - Warmer, later start, still comfortable.
- Mid fall / October
  - Best balance: earlier night, darker feel, colder.
- Late fall / November
  - Earliest dark, coldest/wettest, highest comfort risk.

`dateStrategy` single, always visible:

- Best sky window
  - choose near new moon; better dark sky; may not fit schedules.
- Easiest Saturday
  - group-first; moon may be worse.
- Custom
  - requires availability/moon/weather re-check.

`anchor` single, mandatory:

- 80 cm telescope night observation
  - +12 EUR, best headline, clear-sky dependent, register, weather call by 14:00.
- 40 cm telescope night observation
  - +10 EUR, backup headline, clear-sky dependent, register, weather call by 14:00.

Do not include "skip night telescope" as a normal option because user said observatory is mandatory. It can exist only as Plan-B if weather cancels.

`dayProgram` single:

- Full museum day tour
  - +8 EUR, up to 1.5 h, best if arriving earlier, register/check.
- Observation deck only
  - +4 EUR, 30 min, quick add-on.
- Outdoor exhibition only
  - +0 EUR, accessible anytime, good fallback.

`routeStyle` single:

- Direct / observatory-first
  - shortest; safest if weather or late start.
- Nature route
  - reveals Mindūnai + Asveja options.
- Culture route
  - reveals Rumšiškės / Taujėnai / Ukmergė options.

`mainStop` single, visible after routeStyle:

- None / arrive early at observatory.
- Mindūnai tower.
- Molėtai food/warm-up.
- Rumšiškės Open-Air Museum.
- Taujėnai Manor.
- Ukmergė food/photo stop.
- Dubingiai / Asveja scenic stop.

`food` single:

- Pack snacks/picnic from Kaunas
  - +5-8 EUR, fastest.
- Molėtai cafe/restaurant
  - +8-20 EUR, warm and safer before night.
- Ukmergė/Taujėnai route meal
  - +8-20 EUR, only if using culture route.

`returnSafety` single:

- One rested return driver
  - required if returning after night program.
- Driver swap plan
  - safer; two rested people.
- If too late, emergency hotel
  - not the normal plan, but a safety fallback; show a small "nearby stay" booking status.

`weatherPlan` single:

- Strict sky-first
  - if cancelled by 14:00, reschedule or do a shorter Plan-B.
- Go anyway
  - do day tour/outdoor exhibition/Mindūnai/food even if telescope cancels.

`rituals` multi:

- Thermos/hot chocolate.
- Photo challenge: tower / dome / night sky.
- Shared playlist.
- "Best thing today" stop before driving home.

### Reveal rules

- `routeStyle = nature` -> show Mindūnai, Dubingiai/Asveja, Molėtai food as recommended mainStop options.
- `routeStyle = culture` -> show Rumšiškės, Taujėnai, Ukmergė as recommended mainStop options.
- `routeStyle = direct` -> show None, Molėtai food, day tour/deck as recommended mainStop options.
- `anchor = 80cm|40cm` -> always create mandatory night-program booking row.
- `dayProgram = fullTour|deck` -> create day-program booking/check row.
- `mainStop = rumsiskes|taujenai` -> create "check hours/tickets" row.
- `food = restaurant` -> create "reserve table/check hours" row.
- `returnSafety = emergencyHotel` -> create "nearby hotel fallback" row but do not add to base cost unless user marks it active.
- If selected stop causes arrival buffer under 30 min before night slot -> red warning: "This risks the observatory anchor."

## 9. Cost model

Default state:

- Show range: **~25-70 EUR/person**, pick route/food/program to refine.

Assume 3 people, one normal passenger car, petrol around 1.70-1.95 EUR/L, 6 L/100 km. Treat fuel as estimate.

Base:

```
fuelDirect = 9-10 EUR/person
fuelWithDetour = 10-15 EUR/person
nightProgram = anchor == 80cm ? 12 : 10
dayProgram = fullTour 8 | deck 4 | outdoor 0
food = picnic 5-8 | cafe 8-20 | routeMeal 8-20
stateParkTicket = 0-1 if Mindunai/Asveja visitor-ticket applies
mainStopTicket = variable/check-current for Rumšiškės/Taujėnai
total = fuel + nightProgram + dayProgram + food + stopTicket
```

Preset totals:

- Observatory-first: **~25-40 EUR/person**
  - direct fuel, 80 cm/40 cm night program, snacks, outdoor exhibition.
- Balanced: **~35-55 EUR/person**
  - fuel with local detour, day tour/deck, night program, Molėtai food.
- Scenic/culture: **~45-70+ EUR/person**
  - detour fuel, stop ticket/check, food, day tour/deck or night only.

Do not show fake exact prices for Rumšiškės/Taujėnai. They are date-sensitive and should be "check current ticket/hours" unless the build agent re-checks immediately before publishing.

## 10. Time / feasibility model

The time meter should protect one anchor:

**Anchor = arriving with buffer for the registered night observation.**

Variables:

- Direct drive Kaunas -> observatory: 2.1 h.
- Return drive: 2.1 h.
- Day tour: 1.5 h.
- Deck: 0.5 h.
- Outdoor exhibition: 0.5-1 h.
- Mindūnai: 0.75-1.5 h.
- Molėtai food: 1 h.
- Rumšiškės: 1.5-3 h.
- Taujėnai: 1-2 h.
- Ukmergė food: 0.75-1.5 h.
- Dubingiai/Asveja: 1-2 h.
- Night observation: 1-1.5 h.
- Mandatory night-program buffer: 30-45 min before start.

Autumn start assumptions:

- September: night program may start ~21:00-21:30.
- October: night program may start ~19:45-20:30.
- November: night program may start earlier, but return drive is fully in dark/cold conditions.

Warnings:

- Green:
  - arrives 45+ min before night slot.
  - return begins before ~22:30.
- Amber:
  - arrives 15-45 min before slot.
  - return begins after ~22:30.
  - includes one major stop plus day tour.
- Red:
  - arrival buffer under 15 min.
  - return begins after midnight.
  - two major stops plus day tour on same day.

Named squeeze messages:

- "Rumšiškės + full day tour leaves almost no dinner/warm-up buffer; pick deck-only or leave earlier."
- "Taujėnai + Ukmergė meal is fine only with an earlier departure; otherwise it risks the observatory slot."
- "Mindūnai is the safest scenic add-on because it is close to Kulionys."
- "If the night program finishes after midnight, the real risk is the 2-hour return drive. Use driver swap or cut daytime stops."

## 11. Bookings map

Every selected row should feed a live "Your bookings" panel.

Mandatory:

- **Night telescope observation**
  - Where: Museum registration page / +370 6 152 0688 / registracija@lemuziejus.lt.
  - Status: To do / Registered / Confirmed by 14:00 / Cancelled by weather.
  - Sells out/weather: small group capacity; weather-confirmed same day.

Conditional:

- **Day museum tour / observation deck**
  - If dayProgram is fullTour/deck.
  - Status: To do / Registered / Confirmed.
- **English-language request**
  - If the group wants English.
  - Call/email several days ahead; not guaranteed.
- **Rumšiškės Open-Air Museum**
  - If mainStop = Rumšiškės.
  - Status: Check open hours/tickets for chosen fall date.
- **Taujėnai Manor**
  - If mainStop = Taujėnai.
  - Status: Check opening/private events/tickets; reserve if doing food/activity.
- **Restaurant / warm-up food**
  - If food = restaurant/routeMeal.
  - Status: check hours / reserve if weekend.
- **State park visitor ticket**
  - If Mindūnai/Asveja route selected and the group wants to support/use the protected-area visitor-ticket system.
- **Emergency nearby stay**
  - If returnSafety = emergencyHotel or if weather/driver fatigue makes return unsafe.
  - Not part of normal one-day cost unless activated.

Same-day statuses:

- 13:00-14:00: wait for observatory weather confirmation.
- 15:00: if cancelled and strict sky-first, switch to Plan-B/reschedule.
- 30-45 min before slot: arrive at museum, warm clothes ready, phones charged.

## 12. Execution checklist / final Plan page content

The final Plan page should include:

### Route and driving

- Direct route distance/time.
- Chosen stop route distance/time.
- Return drive time after night program.
- Driver plan: no alcohol if driving, one rested driver minimum, better with swap.
- Lithuania driving note: dipped headlights required during daylight hours on all roads; drivers must obey standard Lithuanian traffic rules.
- Toll note: normal private passenger cars do not need Lithuanian road toll/vignette; verify if using N1/van/commercial vehicle.

### Observatory game-plan

- Registered telescope slot.
- Arrival buffer.
- Warm clothing.
- Same-day weather confirmation.
- What the 80 cm vs 40 cm choice means.
- Keep the museum phone/email visible.

### Chosen daytime stop

For each possible stop, Plan page should show:

- How long it adds.
- Whether it needs ticket/hours checked.
- Why it was chosen.
- What to drop if the day runs late.

### Food and warm-up

- Pack snacks if leaving late.
- Cafe/restaurant if doing the full day.
- Thermos/hot chocolate recommended for fall.
- Keep dinner before the night slot; do not rely on late food after the program.

### Packing

- Warm coat/layer.
- Hat/gloves for October/November.
- Waterproof jacket.
- Comfortable shoes.
- Thermos/water/snacks.
- Phone power bank.
- Flashlight/headlamp; red-light mode if available.
- Printed/saved booking confirmation.
- Tissues/wet wipes.
- Motion-sickness/medicine if needed.

### Plan-B

- If night observation cancelled:
  - still do day tour/deck + outdoor exhibition + Mindūnai/Molėtai food;
  - or shorten day and reschedule night observation.
- If rain/wind:
  - skip tower/Asveja; use museum indoor + food.
- If running late:
  - drop mainStop first, never observatory.
- If driver too tired:
  - emergency local stay or driver swap.

### Emergency one-pager

- 112 emergency.
- Museum registration phone.
- Group driver phone numbers.
- Meeting point: museum entrance / car.
- Route home address pinned.
- Emergency nearby stay placeholder.

## 13. Website copy direction

Destination headline options:

- "Kaunas -> Kulionys, under the fall sky."
- "One day, one telescope, one clear-sky call."
- "A late-night observatory run from Kaunas."

Short summary:

- "A one-day fall trip from Kaunas to the Lithuanian Museum of Ethnocosmology: pick one stop on the way, keep the evening clear, wait for the weather call, then finish the day at the telescope."

Tone:

- Quiet adventure, not a big road trip.
- The fun is the late anchor: fall darkness, telescope dome, warm clothes, return drive.
- No alcohol if driving back.
- Observatory is mandatory; optional stops are there to make the day richer, not to steal time from the night program.

## 14. Source list

Official / primary:

- Lithuanian Museum of Ethnocosmology home: https://etnokosmomuziejus.lt/en/
- Museum tours: https://etnokosmomuziejus.lt/en/tours/
- Museum night programs: https://etnokosmomuziejus.lt/en/night-programs/
- Museum tickets: https://etnokosmomuziejus.lt/en/tickets-info/
- Museum registration: https://etnokosmomuziejus.lt/en/registration/
- Museum contacts: https://etnokosmomuziejus.lt/en/contacts/
- Labanoras Regional Park: https://saugoma.lt/en/territories/labanoras-regional-park
- Mindūnai Observation Tower: https://saugoma.lt/en/objects/labanoras-regional-park-mindunai-observation-tower
- Asveja Regional Park: https://saugoma.lt/en/territories/asveja-regional-park
- State park visitor ticket: https://saugoma.lt/en/state-park-visitor-ticket
- Lithuanian police road traffic excerpts: https://policija.lrv.lt/en/road-traffic-safety/excerpts-from-the-lithuanian-road-traffic-rules/
- Via Lietuva toll note: https://vialietuva.lt/en/via-toll-en

Current planning / route support:

- Kaunas sun times by month: https://www.timeanddate.com/sun/lithuania/kaunas
- Vilnius moon phases by month: https://www.timeanddate.com/moon/lithuania/vilnius
- OSRM route estimates generated 2026-06-02 using OSM/Nominatim coordinates.

Stops and references to re-check before publishing:

- Open-Air Museum of Lithuania / Rumšiškės official site: search/check current official `llbm.lt` / museum ticket page before hardcoding price.
- Taujėnai Manor official site: https://taujenudvaras.lt/
- Molėtai tourism: https://www.infomoletai.lt/en/

## 15. Pre-publish fact-check tasks for the build agent

Before the site goes live:

- Pick the actual fall target month or let the draft require one.
- Re-check museum night-program slots for that month.
- Re-check exact sunset/program start for selected date.
- Re-check moon phase for selected date.
- Re-check Rumšiškės and Taujėnai hours/prices if those options are included as ticketed choices.
- Re-check food opening hours for chosen weekday/weekend.
- Re-run the route estimate if using an exact departure point in Kaunas.
- If photos are added, download local assets; do not hotlink.
