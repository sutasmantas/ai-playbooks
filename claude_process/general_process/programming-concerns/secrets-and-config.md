# Concern: Secrets and Config

**Rule**
Secrets live in env vars or a secret manager, never in committed files. Config is layered (defaults → env → flags) with a documented precedence. The repo has a `.env.example` listing every env var the code reads, with obviously-fake placeholders.

**Use when**
Any project that reads runtime configuration or holds credentials (API keys, DB URLs, signing keys, tokens). For trivial scripts with no secrets, the concern is just the "no secrets in commits" half.

**How to apply (skeleton — fleshed out in Slice 4)**
- Grep the codebase for `env.GET`, `os.environ`, `ENV[...]`, `process.env` etc.; every referenced var appears in `.env.example`.
- Pre-commit hook or CI step scans for committed secrets (trufflehog / gitleaks / equivalent).
- Config precedence documented in README or CLAUDE.md.
- No secrets in logs (cross-references error-handling-and-logging).

**Skip if**
Truly never — even scripts can leak a hardcoded API key.

**Project kinds applicable:** CLI, library, service, script, data-pipeline (ALL).
**Language-specific addendum:** YES — secret-scanner choice and config-library idioms differ (Python `pydantic-settings`, Go `viper`, Node `dotenv`, Rust `figment`).

**Trace:** general — every codebase has secrets or config or both.
