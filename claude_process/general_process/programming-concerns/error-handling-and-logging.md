# Concern: Error Handling and Logging

**Rule**
Errors are categorized (expected / unexpected / fatal), routed to a structured logger, and never silently swallowed. Logs are structured (key-value or JSON), level-tagged, and free of PII / secrets.

**Use when**
Any project that runs code and can fail (i.e., every project). Depth scales with criticality: a script's `print(err)` is fine for one-off use; a long-running service needs structured logs + log levels + alert routing.

**How to apply (skeleton — fleshed out in Slice 4)**
- Errors classified at the throw site, not the catch site.
- No bare `except:` / `catch (e) {}` / `_ = err` swallowing without a logged reason.
- Logs structured, not concatenated strings. Use the language's idiomatic structured logger.
- No PII, tokens, secrets, or full request bodies in logs.

**Skip if**
Truly never.

**Project kinds applicable:** CLI, library, service, script, data-pipeline (ALL).
**Language-specific addendum:** YES — logger choice and idiomatic error patterns differ per language (Python `logging` vs Go `slog` vs Node `pino` vs Rust `tracing` etc.). Filled from stack pre-detection.

**Trace:** general — applies to every running codebase.
