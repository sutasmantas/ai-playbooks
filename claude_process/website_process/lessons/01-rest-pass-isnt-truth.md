# Lesson 01 — REST-Pass Isn't Truth

**The pattern**
Validation stops at the data layer. The API returns 200, the DB row exists with the right columns, the JSON shape matches the contract — and the work is declared verified. Nobody loads the page in a browser. The rendered DOM, the hydration state, the actual pixels the user sees: untouched. For instance, a team validating their checkout flow might confirm `POST /orders` returns the new order ID and the `orders` table has the row, but never open the order-confirmation page where a misconfigured currency formatter is silently dropping the cents. Or a signup flow whose `/users` endpoint accepts the payload cleanly while the success view shows a blank white screen because the post-submit redirect points at a stale route.

**Root cause**
The API is closer to test infrastructure than the rendered surface — easier to assert against, more deterministic, faster to run. Validators optimize for what is cheap to check rather than what the user experiences. "API works" gets equated with "feature works" because the rendered surface requires a real browser, real assets, real network conditions.

**Rule adopted**
Validation is incomplete until the rendered surface is opened and the observable behavior is confirmed in a browser context. API-level checks are necessary but never sufficient; they answer a different question than "does the user see the right thing."

**How to recognize this in your project**
- Test suite is heavy on request/response assertions, light on DOM or screenshot checks
- "Verified" tickets reference status codes and DB rows but no rendered output
- Bugs found in production are routinely "data was fine, UI was broken"
- No end-to-end run touches the actual deployed bundle
- The phrase "the API returns it correctly" appears in resolution notes

**Linked principle:** [[validation-three-tiers]], [[behavior-not-counts]]
