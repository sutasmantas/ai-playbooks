# Findings Log — avariilised-autod.ee

All entries from passive, non-destructive recon only (no bids submitted, no load generated, no exploit payloads sent). Dated in UTC-ish local session time.

---

## 2026-07-01 — Initial passive recon (browser + curl)

Target page: `https://www.avariilised-autod.ee/vehicles/details.php?id=30131&l=lt`

### [CONFIRMED] Session cookie missing Secure/HttpOnly/SameSite
```
Set-Cookie: PHPSESSID=40251fcd05b5b4a557bb26e2662fea0b; path=/
```
No `Secure`, `HttpOnly`, or `SameSite` attribute. No HttpOnly means any XSS on the site can read the cookie via `document.cookie` and hijack the session.

### [CONFIRMED] No CSRF token on bid / auto-bid submission
Bid form (from live DOM):
```
POST /auctions/my_bids.php?l=lt
  auction_id=23642
  bid=6050
```
Auto-bid (max bid) form:
```
POST /auctions/my_bids.php?l=lt
  auction_id=23642
  max_bet=<value>
```
No CSRF token field in either form. Client JS (`ajax.js`) serializes all form fields as-is with no added token. Not yet verified whether the endpoint also accepts GET (`$_REQUEST`) — that would make this trivially exploitable via a plain link. **Needs a safe test on a staging/test auction before confirming exploitability.**

### [CONFIRMED] Server banner disclosure
```
Server: Apache / ZoneOS
```
Sent on every response, including the redirect. `ZoneOS` is a niche/legacy web server — worth checking installed version against known CVEs.

### [CONFIRMED] No security headers
Missing on the HTTPS response: `Content-Security-Policy`, `X-Frame-Options`/`frame-ancestors`, `X-Content-Type-Options`, `Strict-Transport-Security`, `Referrer-Policy`. HTTP→HTTPS redirect works (301) but without HSTS, first-visit traffic is still strippable.

### [CONFIRMED] No CDN/WAF fingerprint
No Cloudflare/Akamai/Fastly headers on any response. Origin appears directly internet-facing. Relevant to the DDoS-resilience question — mitigation belongs at the infra layer (CDN/WAF), not app code.

### [OBSERVED] robots.txt maps sensitive paths
```
Disallow: /img/
Disallow: /vehicles/img
Disallow: /auctions/invoice
Disallow: /klie
Disallow: /user/
Disallow: /pics/
Disallow: /files
Disallow: /stat
Disallow: /test
Disallow: /up
```
Directory-root probe results (HEAD-equivalent only, no further enumeration performed):
| Path | Status | Note |
|---|---|---|
| /test/ | 403 | exists, listing blocked |
| /files/ | 403 | exists, listing blocked |
| /user/ | 403 | exists, listing blocked |
| /vehicles/img/ | 403 | exists, listing blocked |
| /stat/ | 404 | no literal dir — script likely at exact filename |
| /up/ | 404 | same |
| /klie/ | 404 | same |
| /auctions/invoice/ | 404 | same |

Directory listing being blocked (403) is good practice. The 404s under `/stat`, `/up`, `/klie`, `/auctions/invoice` mean real endpoints likely live at specific filenames underneath — worth a targeted ffuf run (see PLAN.md).

### [OBSERVED] Three ID namespaces on one page
- URL query param: `id=30131`
- Internal "Transporto priemonės ID": `321`
- Auction ID (from `/ajax/auctions.php` polling calls): `23642`

Not a vulnerability by itself, but this pattern is exactly what produces IDOR bugs when one of the IDs is used somewhere without an ownership check (e.g. invoices, my_bids). Flag for the IDOR sweep.

### [OBSERVED] `/ajax/auctions.php` — public auction-status polling
```
POST /ajax/auctions.php
  a[]=23642
```
Response (XML):
```xml
<response><code>0</code><message></message><auctions><au><id>23642</id><cp>6 000</cp><mb>-</mb><mx>-</mx><ed>12:00:00 07.07.26</ed><et>12:00:00</et><bi>16</bi><ov>0</ov></au></auctions><countdown>514945.52925611</countdown></response>
```
Accepts an array of IDs (`a[]=X&a[]=Y...`), no auth required. Only returns data already public on the page (current price, bid count, end time) — confirms auction IDs are easily enumerable/batchable. Server computes `countdown` itself, but this doesn't confirm the bid-submission endpoint independently re-validates timing (see VULNERABILITIES.md #3).

### [OBSERVED] Legacy/dead code in `ajax.js`
Client JS attempts `setRequestHeader('Connection', 'close')`, which browsers now block as a forbidden header (console error: "Refused to set unsafe header Connection"). Also retains an `ActiveXObject` fallback path for pre-IE7 support. Confirms the codebase is old and likely not actively hardened — raises prior probability that other legacy-era issues (weak input validation, no prepared statements, etc.) are present without a full source review.

---

## 2026-07-01 — Follow-up recon (unauthenticated)

### [CONFIRMED] Bid endpoint requires login (GET-method test inconclusive on CSRF)
```
GET /auctions/my_bids.php?l=lt&auction_id=999999999&bid=1
→ 302 redirect to /user/login.php
```
Anonymous requests are redirected to login regardless of method — confirms auth is required, but doesn't yet show whether an *authenticated* session processes GET the same as POST (that's the actual CSRF question). Needs a logged-in session to finish testing.

### [CONFIRMED] No rate limiting at low volume
15 rapid sequential requests to both `/ajax/auctions.php` (public polling) and `/auctions/my_bids.php` (bid endpoint, fake auction_id) all returned identical status codes (200 and 302 respectively) with no throttling, no CAPTCHA challenge, no 429.

### [CONFIRMED] Registration is not self-service
`/user/register.php` requires: full name, password, personal national ID number ("Asmens kodas"), phone, physical document number, address, email — plus a manual 15 EUR bank transfer with account activation the next business day. No test account exists; creating one with fabricated identity info was not attempted.

### [OBSERVED] Adjacent auction IDs (23637–23646) all resolve
Queried via `/ajax/auctions.php` — all ten IDs returned valid data for what appear to be ordinary public listings. No evidence yet of hidden/draft auctions in that immediate range.

### [OBSERVED] OPTIONS/HEAD on bid endpoint also redirect to login
The 302-to-login happens before any method-specific handling is visible — no `Allow` header disclosed, can't yet distinguish GET vs POST handling without an authenticated session.

### [OBSERVED — text only, not a technical finding] Official rules page (`/page.php?id=79`)
Marketing/legal copy, not documentation of the actual implementation — it can be wrong, outdated, or aspirational, and proves nothing about what the code does. Recorded only as a source of hypotheses to go test, not as evidence of anything:
- Claims two bid types: manual (+50 EUR increments) and proxy/max-bid, and claims the max-bid amount is never revealed to other bidders → gives VULNERABILITIES.md #5 something concrete to test (is that actually true?), nothing more.
- Claims tie-break priority (equal proxy bids) goes to whichever was registered first → gives the race-condition sub-item under #3 a specific behavior to try to violate.
- Claims bids cannot be withdrawn once placed, except if the seller edits the listing afterward → the live DOM (no cancel/edit-bid form observed) is better evidence toward #6 than this text is; still doesn't rule out an undocumented backend endpoint.
- Doesn't mention any anti-snipe extension, despite the listing page UI displaying "extends 2 minutes." Could mean per-listing config, could mean the rules page is stale — doesn't tell us anything about actual server enforcement either way.
- Doesn't mention downtime/unavailability near closing at all. Silence proves nothing about whether the backend has an undocumented safeguard — #7 remains fully untested, not "supported by the absence of a rule."

### [TESTED — NOT FOUND] Wider auction ID enumeration
Queried IDs 1, 100, 1000 (very old — empty fields, `ov=2` status flag, no price/date leaked), 10000 and 20000 and 23000 (real closed historical auctions, e.g. ID 20000 closed 2024-07-05 at 7,300 EUR / 127 bids — plain historical record, not sensitive), and 24000/25000/30000 (not yet created — endpoint returns nothing for them, no future/draft data leak). No evidence of reserve-price or pre-publication data exposure from this endpoint.

### [TESTED — NOT FOUND] Basic single-quote SQLi probe
`id` on `details.php` and `a[]` on `ajax/auctions.php` both handled a trailing `'` with no visible SQL error and no behavior change (the `a[]` query still matched the correct auction, consistent with integer casting rather than raw string interpolation). This is a basic error-based check only — not exhaustive, no boolean/time-based blind testing done (would need sqlmap, unavailable on this machine).

### [TESTED — NOT FOUND] Login response — no username enumeration via response size/status
POST to `/user/login.php` with a fabricated email vs. `info@avariilised-autod.ee` both returned identical `200 OK` / identical body size (11,768 bytes) — no observable difference to fingerprint valid accounts this way.

### [TESTED — NOT FOUND] Invalid vehicle ID — no error/stack trace disclosure
`details.php?id=999999999` returns a normal `200` page (14,620 bytes, presumably a "not found"-style listing page), no PHP warnings/notices/stack traces in the response.

---

## 2026-07-01 — Wayback/OSINT pass (fully passive: web.archive.org CDX API + archived snapshots only; a handful of direct live-site GETs made afterward, all read-only, to check current status of what Wayback surfaced — no bids/state touched)

### [CONFIRMED — historical] `/auctions/auction_bids.php?id=<auction_id>` publicly disclosed full bid history with NO authentication (2019–2021 crawls)
Discovered via CDX API (`web.archive.org/cdx/search/cdx?url=avariilised-autod.ee/auctions/auction_bids.php&matchType=prefix`) — this endpoint doesn't appear anywhere in the live DOM/forms already dumped, so it was missed by the manual walkthrough. Confirmed by fetching an archived snapshot directly (`web.archive.org/web/20191021223945id_/.../auction_bids.php?id=12540`, HTTP 200 in the crawl, meaning the anonymous Wayback bot could read it):
```
Oksjoni ID: 12540 | Pakutud hind: 1 050 EUR | See oksjon on lõppenud (closed)
Tehtud pakkumised (bids made):
  Kasutaja       Pakkumine (EUR)   Aeg
  ardesia        1 050,00          08.09.2019 13:39:49
  vaidas         1 000,00          03.09.2019 13:14:21
```
Full bidder usernames, exact bid amounts, and precise timestamps for every bid — anonymously, no login. At least a dozen more `?id=<n>` snapshots exist in the CDX index from 2019–2021 (all HTTP 200), so this wasn't a one-off — it was the normal anonymous behavior for years.

### [CONFIRMED — live, today] Closed-auction bid history is still fully exposed anonymously, right now
Four direct GETs made against the live site (read-only, no params that mutate anything) to pin down exactly what gates this endpoint:
- `GET /auctions/auction_bids.php?id=23642` (currently open/active auction, 16 bids per `/ajax/auctions.php`) → HTTP 200, page shell renders, **no bid table** in the anonymous response.
- `GET /auctions/auction_bids.php?id=20000` (old closed auction, closed 2024-07-05) → HTTP 301 redirect to `/auctions/`, no content — likely just outside some retention/routing window, not necessarily meaningful on its own.
- `GET /auctions/auction_bids.php?id=23500` (a **recently** closed auction — closed 2026-06-10, confirmed closed via `/ajax/auctions.php`'s `countdown=-1`) → **HTTP 200, full bid table rendered anonymously**: 60+ rows of `username, exact amount, exact timestamp`, e.g.:
  ```
  daikin        6 500,00   10.06.2026 12:09:59
  ad            6 450,00   10.06.2026 11:56:00
  daikin (A)    6 400,00   10.06.2026 11:55:57
  ad            6 350,00   10.06.2026 11:55:57
  ...
  ```
  The `(A)` suffix marks auto-bid/proxy-triggered steps — meaning the full auto-bid response ladder (not just manual bids) is visible too, second-by-second.

**This settles it: the gate is "is the auction still open," not "was this ever fixed."** Anonymous, unauthenticated bidder-identity + full bid history disclosure for any *closed* auction is present in the live site today, not just in 2019–2021 archives. Still open: whether an authenticated non-owner sees the same table on an *open* auction (would be strictly worse — live competitive intel during active bidding, not just after the fact).

**Note on `(A)` and the max_bet ceiling (VULNERABILITIES.md #5):** this ladder shows the proxy responding step-by-step at the minimum increment, not the ceiling itself — the ceiling would only leak if a proxy stopped responding *because it was exhausted*, which isn't distinguishable from "the auction simply ended" in this one example. Doesn't confirm or refute #5 on its own, but confirms the mechanism (auto-bid steps) is observable in enough detail that a full max_bet leak from a longer bidding war is plausible and worth a targeted look.

### [OBSERVED] Wayback URL corpus (13,756 raw URLs, `recon/wayback_urls_full.txt`) mined for other endpoint classes
- No leaked backups/configs/secrets: zero hits for `.bak/.sql/.zip/.tar/.gz/.env/.git/.log/.ini/.conf` across the entire corpus — genuinely tested, not just unchecked.
- `.well-known/security.txt` and `/sitemap.xml` both appear in the historical crawl but return live HTTP 404 today (confirmed via direct GET) — no responsible-disclosure contact currently published, and no live sitemap to cross-check against robots.txt's disallow list.
- New endpoint inventory not previously in FINDINGS/VULNERABILITIES: `auctions/auction_bids.php` (above), `auctions/auctions.php` (auction listing), `vehicles/send_to_friend.php` (matches the "recommend to a friend" form already flagged for XSS in VULNERABILITIES.md #4), `img/captcha.php`, `img/reg.php/<id>/<hash>/<hash>.png` and `img/vin.php/...` (hashed/tokenized image URLs — the double-hash pattern looks like it's designed against enumeration; not tested), and a completely separate `products/*.php` vertical (company.php, details.php, pics.php, search.php) alongside a legacy `.php3`/`.asp` trail (`autod.php3`, `vaata.php3`, `index.php3`, `autod/Default.asp`) confirming this is a much older codebase than the vehicles/auctions section alone suggested.

### [TESTED — NOT FOUND] `klikk/click.php` (old banner click-tracker) — ruled out as an open-redirect
Also surfaced by the Wayback endpoint inventory; classic old banner-tracker scripts are a common open-redirect shape, so checked live. `GET` with no params and with a `?url=` param both return identical `HTTP 404`, `Content-Length: 7547`, `Last-Modified: 11 Aug 2024` — a static 404 page, not a live script. Dead endpoint, removed at some point after 2024-08-11.

---

## 2026-07-01 — Tool-based follow-up (no account needed): sqlmap, ffuf, testssl.sh, scope-check on the confirmed leak

### [TESTED — NOT FOUND, stronger evidence] sqlmap automated boolean/error/time-based/UNION SQLi sweep on `id` (details.php)
`sqlmap -u ".../vehicles/details.php?id=30131&l=lt" -p id --level=2 --risk=1 --batch` — full run completed cleanly (not blocked by any WAF/CAPTCHA despite sqlmap's own heuristic warning about a "potential CAPTCHA protection mechanism," which didn't actually block anything). No boolean-based, error-based (MySQL/Postgres/MSSQL/Oracle/H2 variants), time-based blind, stacked-query, or UNION-based injection found on `id`. This supersedes the earlier manual single-quote probe with much broader automated coverage — still only level 2/risk 1 (no heavier obfuscation/tamper scripts tried), and only the `id` param on this one endpoint.

### [TESTED — NOT FOUND] `auctions/auctions.php` — dead endpoint
`GET https://www.avariilised-autod.ee/auctions/auctions.php?l=lt` → `HTTP 404`, identical `Content-Length: 7547` / `Last-Modified: 11 Aug 2024` as `klikk/click.php` — this is the site's generic custom 404 page, confirming both are simply removed, not hiding anything behind a role check.

### [CONFIRMED] `auction_bids.php` anonymous leak has a rolling ~7–8 week window, not unlimited history
Bisected the boundary with a series of anonymous GETs across auction IDs whose close dates are already known via `/ajax/auctions.php`:
| auction_id | closed | `auction_bids.php` response |
|---|---|---|
| 23200 | 2026-04-22 | 301 → `/auctions/` (no content) |
| 23275 | ~2026-05-04 (interpolated) | 301 → `/auctions/` |
| 23300 | 2026-05-11 | **200, full bid table** |
| 23400 | 2026-05-26 | **200, full bid table** |
| 23500 | 2026-06-10 | **200, full bid table** |
Every ID from 10000 up through 23200 tested 301s; every ID from 23300 onward tested 200s with full content. So the leak is bounded to roughly the last ~7–8 weeks of closed auctions as of today, not the platform's entire history — meaningful for scoping severity (this is not "every auction this platform has ever run since 2010 is exposed," it's "the last couple months always are, on a rolling basis").

### [BLOCKED — tooling] testssl.sh cannot run in this environment
Needs a real `hexdump` binary; only `xxd` is present (Git Bash/MSYS2). A wrapper script (`hexdump` → `exec xxd "$@"`) gets partway (some internal calls work) but testssl.sh's OpenSSL-native fallback path hard-fails with `Fatal error: You need to install hexdump for this program to work` once its flag usage diverges from `xxd`'s. Also separately warned it wants real bash TCP sockets (`/dev/tcp`), which MSYS2 bash doesn't provide either. Fixing this properly means installing an actual `hexdump` (e.g. `pacman -S util-linux` in the MSYS2 shell) — a system-package change, not something to do unilaterally without asking. TLS/cipher/cert audit remains untested.

### [PAUSED — moved to a non-AV machine] Deeper tool-based scanning (testssl.sh, nikto, nuclei) stopped mid-session over AV risk
Installed two things to unblock tools (both reviewed as effectively zero AV risk before installing): a hand-written Perl `hexdump` shim (pure text script, no download) and `XML::Writer` 0.900 fetched directly from `cpan.metacpan.org` with its checksum verified against the official metacpan API record (`sha256:73c8f5bd...`) — a pure-Perl module, no compiled code. Checked this machine's actual AV posture before running anything further: **ESET Security is the active real-time AV on this machine** (Windows Defender is present but passive/inactive, which is normal once a third-party AV takes over). Checked Windows Event Log for ESET detections in the session window — none found — and every tool invocation this session (sqlmap, ffuf, nuclei, the partial nikto run) completed and produced real output rather than being silently killed/quarantined, which is itself evidence nothing was blocked. That said, this is after-the-fact log evidence, not a guarantee about what a real-time scanner might do on a different/heavier run.

**User's call, followed:** since this is a work PC running ESET and a second, non-AV machine is available, further tool-heavy work (finishing testssl.sh, a full nikto run, wider nuclei CVE sweeps, and eventually Burp/Turbo Intruder for the race-condition testing once an account exists) is paused here and deferred to that other machine. The in-progress `nikto` scan was killed (`taskkill /F` on its `perl.exe` process, PID 46436) rather than left running once this was raised. `testssl.sh` only got as far as the rDNS lookup before being abandoned — no real TLS/cipher data collected, still fully untested.

**What did complete before the pause, with real (non-critical) results:**
- **nikto** (partial run, completed naturally per its own exit code before the kill landed): a second cookie, `seen_videos`, also missing `Secure`/`HttpOnly` (same class as the already-confirmed `PHPSESSID` issue); `/pics/` (listed in `robots.txt` as disallowed) actually returns `200`, not blocked like the other disallowed paths — contradicts the earlier assumption that all robots.txt-listed paths 403. Neither is money-relevant on its own.
- Confirms the certificate is a standard Let's Encrypt cert (`R13`) for `avariilised-autod.ee` + `www.avariilised-autod.ee`, TLS 1.3 (`TLS_AES_256_GCM_SHA384`) observed — consistent with modern TLS, no immediate red flag, but this is incidental (from nikto's banner grab), not a real testssl.sh cipher/protocol audit.

### [INCONCLUSIVE / LOW YIELD] ffuf directory brute-force under `/auctions/`
Full run (`quickhits.txt`, 2,567 words × `{plain, .php}`, rate-limited to 15 req/s) completed: 70 matches, **all identical** `403 / Content-Length 323` — the server returns a uniform generic 403 for any unrecognized path under `/auctions/`, not a path-specific signal. No real endpoints surfaced this way; every genuine endpoint found so far (`auction_bids.php`, `my_bids.php`, etc.) came from Wayback OSINT, not brute force. A follow-up sweep against `/stat/`, `/up/`, `/klie/` was started but didn't finish in a reasonable time and was stopped rather than left running/retried repeatedly — **not conclusively tested**, just deprioritized once the `/auctions/` run showed brute force wasn't paying off here relative to Wayback mining. Confirmed via `tasklist` that no ffuf process was left running in the background after stopping it.

## Not yet tested
- CSRF-while-authenticated / GET-processing confirmation (needs login)
- Server-side validation of bid amount (below current price, negative, non-numeric, overflow) and timing (after auction end), and whether the anti-sniping extension is server-enforced
- max_bet (proxy ceiling) leak between accounts
- IDOR on bid cancel/edit and `/auctions/invoice`
- SQL injection on `id` / `vehicle_id` / `auction_id` params
- Endpoint discovery under `/auctions/`, `/user/`, `/stat`, `/up`, `/klie` for an auction-close/admin function
- Locale-dependent bid amount parsing
- Wider auction-ID enumeration outside the currently-browsable range
- `auction_bids.php` bid-table visibility to an *authenticated non-owner* user on an OPEN auction — confirmed leaking for closed auctions already; open-auction authenticated case still needs an account
- `img/reg.php` / `img/vin.php` hashed-path predictability (are the two hex tokens derived from a guessable value, or genuinely random?)
