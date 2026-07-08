# Interview Script: Truth Surfaces

**Purpose**
Identify where "user-visible truth" lives, so validators can open it rather than trusting the model layer or the tests-in-isolation. For non-website projects the truth surface is rarely "a rendered page" — it's an exit code, a return value, a response body, a written file, a log line. Naming it concretely is what makes the validator non-fake.

**Procedure**
Ask each question in order, one at a time. Wait for the answer. Do not batch.

**Questions**

1. **What does a user of this artifact actually observe? Pick the shape that matches your project kind:**
   - **CLI tool:** what does the user see when they run the binary? (stdout? exit code? a file written to disk? a log line?)
   - **Library:** what does the calling code see? (return value? thrown exception? side effect on a passed-in object?)
   - **Service:** what does the client see? (HTTP response body + status? a row written to a DB? a message published to a queue?)
   - **Script:** same as CLI tool.
   - **Data pipeline:** what changed in the destination? (new rows? new files? schema change?)
   - **Why we ask:** This is the truth surface — the layer your validators must open. If you're not opening it, you're not validating. Test results alone are not enough — passing tests don't prove the user-observable behavior actually happens.
   - **What to do with the answer:** Encode the truth surface in the validator script (run the binary, call the function, hit the endpoint) and in the verifier prompt's "artifacts" list.

2. **How is that surface produced? (Compiled binary invoked from a shell? Interpreted script with stdin/stdout? HTTP handler routing to a database? Background worker reading from a queue?)**
   - **Why we ask:** The path from data to truth surface tells you where the model-vs-truth gap can open up. A compiled CLI has different drift modes than a long-running service.
   - **What to do with the answer:** Note in `CLAUDE.md` what counts as "verified" — does the validator need to invoke the binary, import the library, hit an endpoint, query the destination?

3. **What could be coherent in your code / tests / unit-level state but wrong at the truth surface?** Examples by kind:
   - **CLI:** function returns the right value but the CLI wraps it wrong, so stdout has extra noise / wrong format / wrong exit code.
   - **Library:** function works in isolation but breaks when called in the documented usage pattern (e.g., async lifecycle, context-manager nesting).
   - **Service:** the handler's tests pass, but the actual HTTP response has a wrong content-type / wrong status / a serialization bug at the boundary.
   - **Script:** the script does the work but writes to the wrong path / leaves a stale temp file / silently skips an item.
   - **Data pipeline:** the transform tests pass on synthetic data but breaks on real data shape; rows land but schema drift means a downstream consumer rejects them.
   - **Why we ask:** This is exactly the failure mode lesson 01 captures (REST-pass-isn't-truth). Naming concrete examples makes the validator skeleton useful instead of generic.
   - **What to do with the answer:** Seed the validator skeleton with 1-2 of the user's own examples as commented "things to assert."

4. **What concrete invocation does the validator run to capture the truth surface?** Examples by kind:
   - **CLI:** `./mybin --list` and check stdout
   - **Library:** `python -c "import mylib; print(mylib.compute(sample))"` or a single-function pytest case
   - **Service:** `curl -s http://localhost:3000/api/health` and check status + body
   - **Script:** `python my_script.py < sample_input.txt` and check the output file
   - **Data pipeline:** run against a fixture dataset and diff the destination
   - **Why we ask:** The validator starter's `{{BEHAVIOR_INVOCATION}}` placeholder needs a concrete command. Without this, the agent has to invent one and the first validator run will fail or check the wrong thing.
   - **What to do with the answer:** Fill `{{BEHAVIOR_INVOCATION}}` and `{{BEHAVIOR_ASSERTION}}` (the substring or condition the output must satisfy) in the validator starter and in CLAUDE.md's preamble.

**After this script**
You now know the truth surface, the model-vs-truth gaps to watch, and the concrete invocation the validator runs. Move to `03-scope-and-concerns.md`.
