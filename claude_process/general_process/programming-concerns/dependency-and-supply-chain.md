# Concern: Dependency and Supply Chain

**Rule**
Dependencies are pinned via lockfile, sourced from the project's official registry, scanned for known vulnerabilities, and minimized in count. New dependencies pay a justification cost.

**Use when**
Any project with a package manager (pip / npm / cargo / go modules / etc.). Skip only for truly self-contained scripts with zero third-party imports.

**How to apply (skeleton — fleshed out in Slice 4)**
- Lockfile committed (`uv.lock` / `package-lock.json` / `Cargo.lock` / `go.sum`).
- CI runs vulnerability scan (`pip-audit` / `npm audit` / `cargo audit` / `govulncheck`).
- New dependencies require a one-line justification in the PR (why this, not stdlib + a few lines).
- Typosquat awareness on new packages (verify exact name, publisher, download volume).

**Skip if**
Zero-dependency project.

**Project kinds applicable:** CLI, library, service, script (with deps), data-pipeline (ALL with deps).
**Language-specific addendum:** YES — lockfile format, scanner tool, registry conventions differ per language.

**Trace:** supply-chain attacks (event-stream 2018, ua-parser-js 2021, xz utils 2024) are the empirical case.
