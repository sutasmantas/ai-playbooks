# Interview Script: Truth Surfaces

**Purpose**
Identify where "user-visible truth" lives, so validators can open it rather than trusting the model layer (the gap that produced lesson 01).

**Procedure**
Ask each question in order, one at a time. Wait for the answer. Do not batch.

**Questions**

1. **What does a user of this product actually see? (A rendered page in a browser? An email? A PDF? An API response a developer consumes?)**
   - **Why we ask:** This is the truth surface — the layer your validators must open. If you're not opening it, you're not validating.
   - **What to do with the answer:** Encode the truth surface in the validator skeleton (browser screenshot, email render, response body diff) and in the verifier prompt's "artifacts" list.

2. **How is that surface produced? (Server-rendered HTML? Client-side React? Background job that writes a file?)**
   - **Why we ask:** The path from data to truth surface tells you where the model-vs-truth gap can open up. Client-rendered UI has different drift modes than server-rendered.
   - **What to do with the answer:** Note in `CLAUDE.md` what counts as "verified" — does the validator need a real browser, a curl, an email harness?

3. **What could be coherent in your database / API but wrong on the truth surface? (Examples: a record exists but the UI doesn't show it; a price is right in the DB but a stale cache shows the wrong one; a config flag is set but the renderer doesn't pick it up.)**
   - **Why we ask:** This is exactly the failure mode lesson 01 captures. Naming concrete examples makes the validator skeleton useful.
   - **What to do with the answer:** Seed the validator skeleton with 1–2 of the user's own examples as commented "things to assert."

4. **What URL should the validator hit to open the truth surface? (Examples: `http://localhost:3000/` for local dev, `https://staging.example.com/` for staging, a specific route like `https://example.com/pricing` if one page is most critical.)**
   - **Why we ask:** Both validator starters require a concrete URL via `{{TRUTH_SURFACE_URL}}`. Without this, the agent has to invent one and the first validator run will fail or hit the wrong target.
   - **What to do with the answer:** Fill `{{TRUTH_SURFACE_URL}}` in the validator starter and in CLAUDE.md's preamble. Note that the user can override at runtime via `VALIDATE_URL=...` env var.

**After this script**
You now know the truth surface, the model-vs-truth gaps to watch, and the URL the validator hits. Move to `03-scope-and-concerns.md`.
