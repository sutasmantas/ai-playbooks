# Concern: Security

**Rule**
Input is validated at trust boundaries, authentication and authorization are explicit, sensitive operations are logged, and known-dangerous patterns (injection, deserialization of untrusted data, weak crypto) are blocked. This is the general-purpose security concern — `ai-authoring-security.md` covers agent-specific failure modes; this covers the rest.

**Use when**
Any project that handles input from outside the trust boundary (user input, file content, network traffic, env-var-controlled config). For purely internal libraries with no input handling, the depth shrinks to "no weak crypto, no insecure deserialization."

**How to apply (skeleton — fleshed out in Slice 4)**
- Input validation at trust boundaries. Parse, don't validate.
- No SQL string concatenation. Parameterized queries only.
- No `eval` / `exec` / `pickle.loads` on untrusted input.
- Crypto: use language-stdlib or audited libraries; never roll your own.
- Authentication and authorization are SEPARATE concerns — both required where they apply.
- Stake-tagged paths (auth, authz, payments, deletion, pii) trigger `procedures/stake-tagging.md` — both auditors, paired tests, decision_log entry.

**Skip if**
Truly never; depth scales with exposure.

**Project kinds applicable:** CLI (input handling), library (depends), service (always, deep), script (light), data-pipeline (always — data is the input).
**Language-specific addendum:** YES — vuln patterns and stdlib crypto APIs differ.

**Trace:** OWASP Top 10 (general application security); OWASP LLM Top 10 (agent-context overlap with ai-authoring-security).
