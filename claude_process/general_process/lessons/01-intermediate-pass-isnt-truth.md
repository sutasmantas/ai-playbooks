# Lesson 01 — Intermediate-Layer Pass Isn't Truth

**The pattern**
Validation stops at the unit-test or integration-test layer. The function returns the right value, the table row exists with the right columns, the response shape matches the contract — and the work is declared verified. Nobody actually invokes the artifact the user sees. The CLI's stdout, the library's documented usage pattern, the service's full request-response cycle: untouched. For instance, a team validating a CLI tool might confirm the parsing function returns the right struct and the storage layer commits the row, but never run `./mybin --list` to discover that a wrapper formatter is double-quoting strings in the stdout output. Or a library whose tests all pass in isolation, but whose documented async-context-manager usage pattern leaks a file descriptor on every exit because no test exercises the documented pattern end-to-end.

**Root cause**
Unit and integration tests are closer to test infrastructure than the user-observable surface — easier to assert against, more deterministic, faster to run. Validators optimize for what is cheap to check rather than what the user experiences. "Function works" gets equated with "feature works" because the user-observable surface requires running the actual binary, importing the actual library, or hitting the actual endpoint.

**Rule adopted**
Validation is incomplete until the truth surface is opened and the user-observable behavior is confirmed end-to-end. Unit and integration checks are necessary but never sufficient; they answer a different question than "does the user see the right thing."

**How to recognize this in your project**
- Test suite is heavy on assertions about return values and DB rows, light on actual artifact invocation
- "Verified" tickets reference unit-test green but no stdout / response / file-output check
- Bugs found in production are routinely "the function was fine, the wrapper / handler / serializer was broken"
- No end-to-end run touches the actual built artifact (the binary, the published package, the deployed service)
- The phrase "the function returns it correctly" appears in resolution notes

**Linked principle:** [[validation-three-tiers]], [[behavior-not-counts]]
