<!--
TEMPLATE METADATA — REMOVE THIS BLOCK WHEN GENERATING
Target: <new-project-root>/scripts/validate_state.{ext}
Generated when the project's language is NOT one of {Python, Node/TS, Go, Rust}.
This template is GUIDANCE for adapting one of the four supplied starters to the project's actual stack
(Ruby/Bundler, Java/Maven-Gradle, .NET, Elixir/Mix, PHP/Composer, etc.).
-->

# Adapting a validator starter for your stack

The kit ships four validator starters out-of-the-box:

- `validator_starter_pytest.py.template` — Python projects with pyproject.toml or requirements.txt
- `validator_starter_vitest.ts.template` — Node/TypeScript libraries, CLIs, services (non-browser)
- `validator_starter_go-test.sh.template` — Go projects with go.mod
- `validator_starter_cargo-test.sh.template` — Rust projects with Cargo.toml

If your project is in another language, pick the closest starter (by paradigm — interpreted? compiled? GC? statically typed?) and adapt its six sections to your stack:

## The six required sections

Every starter has the same shape. Preserve it when adapting.

### 1. Behavior assertion

Derived from interview 02.4. Run the artifact (CLI binary, library function, service endpoint) with sample inputs and check the result. Two placeholders: `{{BEHAVIOR_INVOCATION}}` and `{{BEHAVIOR_ASSERTION}}`. **Write the result to `diagnostics/behavior.log`** so the tier-2 auditor can read it — the auditor has no Bash, and stdout from your script is not enough.

### 2. Test suite invocation

Your language's idiomatic test runner. Output goes to `diagnostics/tests.log` (text) and optionally `diagnostics/tests.json` (structured, if the runner supports it).

- Ruby: `bundle exec rspec` or `bundle exec rake test`
- Java: `mvn test` or `gradle test`
- .NET: `dotnet test --logger:trx`
- Elixir: `mix test`
- PHP: `vendor/bin/phpunit`

### 3. Typecheck / linter

Whatever your language uses to catch hallucinated imports and obvious type errors before runtime. Output → `diagnostics/typecheck.log`.

- Ruby: `bundle exec rubocop` (lint, not types — Ruby has no native typecheck; consider Sorbet or rbs if your project uses them)
- Java: `mvn compile` (compilation IS typecheck) or `gradle compileJava`
- .NET: `dotnet build --no-restore`
- Elixir: `mix compile --warnings-as-errors`
- PHP: `vendor/bin/phpstan analyse` if available; otherwise PHP's syntax check `php -l`

### 4. Git diff summary

Identical across all starters — copy verbatim from the bash starters (Go/Rust). Output → `diagnostics/diff_summary.json` with fields: `available`, `total_loc`, `file_count`, `files`, `only_markdown`. The auditor reads this for the trivial-diff threshold check.

### 5. Dep check

Verify declared dependencies are present in your lockfile. Most ecosystems have a lockfile-verify command:

- Ruby: `bundle check` (checks Gemfile.lock against Gemfile)
- Java: `mvn dependency:resolve` or `gradle dependencies --refresh-dependencies` (lighter check: confirm pom.xml/build.gradle and lockfile coexist)
- .NET: `dotnet restore --verify-no-changes` (in newer SDKs)
- Elixir: `mix deps.get --check-locked`
- PHP: `composer validate --strict`

Output → `diagnostics/dep_check.json`.

### 6. Secret-pattern scan

Identical patterns across all starters. The scan target is "source files in the project, skip build/vendor/cache dirs." Adapt the file extensions and skip-list to your language:

- Ruby: scan `.rb`, `.rake`, `.yml`, `.yaml`, `.json`, `.md`, `.env`; skip `.git`, `vendor`, `tmp`, `log`.
- Java: scan `.java`, `.kt`, `.xml`, `.yml`, `.yaml`, `.properties`, `.md`; skip `.git`, `target`, `.gradle`, `build`.
- .NET: scan `.cs`, `.csproj`, `.fs`, `.fsproj`, `.json`, `.yml`, `.md`; skip `.git`, `bin`, `obj`.
- Elixir: scan `.ex`, `.exs`, `.eex`, `.heex`, `.yml`, `.md`; skip `.git`, `_build`, `deps`.
- PHP: scan `.php`, `.phpt`, `.json`, `.yml`, `.md`; skip `.git`, `vendor`, `var/cache`.

**JSON output constraint (bash starters):** the bash starters (go-test, cargo-test) build `secrets.json` by string-concatenating file paths into a JSON array. This is valid for well-behaved paths, but paths containing `"`, `\`, or newlines will produce malformed JSON, which would mask findings when the auditor parses the file. Accepted carve-out: this is a calibration tool for repos where paths are normal identifiers, not a general-purpose scanner. If your repo has unusual paths, either escape them (`jq -Rs .` on each path segment) or use a Python/Node one-liner to emit the JSON instead of a bash string builder.

## Test it

After adapting, run the script. The expected behavior:

- **Exit 0** when behavior assertion + tests + typecheck + dep check + secret scan all pass.
- **Exit 1** when any fail.
- **`diagnostics/` directory** populated with the seven artifact files the tier-2 auditor reads: `behavior.log`, `tests.log` (+ optionally `tests.json`), `typecheck.log`, `diff_summary.json`, `dep_check.json`, `secrets.json`. Each must exist (or contain a `(skipped: ...)` marker) so the auditor can distinguish "checked-and-clean" from "did not check."

Test against the canary at `general_process/canary/known-bad-example.md` — the verifier MUST return RED when audited against the canary file. If it doesn't, your adaptation is missing one of the six sections.

## When you're done

- Adapted script lives at `scripts/validate_state.{ext}`.
- A one-line `validate` script entry in your build tool (`make validate`, `rake validate`, `mix validate`, etc.) so the rest of the kit can invoke it.
- The validator-choice line in your CLAUDE.md mentions which starter you adapted from.
