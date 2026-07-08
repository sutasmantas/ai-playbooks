# Workflow Resume Instructions — website_safety research

## Broad vulnerability-class research expansion (2026-07-01) — IN PROGRESS

User asked for 35 broad angles (common PHP/web vuln classes tailored to this stack, newest CVEs in the actual tech stack, plus tooling research) — split into 2 batches to stay safely under the ~1000-agent-per-workflow cap and manage session-limit risk (batch 1 last time hit the limit at only 7 angles / 227 agents).

**Batch 1 (18 angles: PHP object injection, LFI/RFI via locale param, path traversal in path-info image scripts, type-juggling, XXE, SSTI, host header injection, email header injection, request smuggling, cache poisoning, clickjacking, session fixation, CAPTCHA bypass, brute-force, password-reset abuse, SWF/Flash XSS, crossdomain.xml, second-order SQLi):**
- **Run ID:** `wf_f550e894-aed`
- **Script path:** `C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\67dd6d69-f493-42a7-a7b6-0ab8eebff2af\workflows\scripts\broad-security-research-batch1-wf_f550e894-aed.js`
- **To resume:** `Workflow({scriptPath: "C:\\Users\\masuta\\.claude\\projects\\c--Users-masuta-Desktop-Coding-test\\67dd6d69-f493-42a7-a7b6-0ab8eebff2af\\workflows\\scripts\\broad-security-research-batch1-wf_f550e894-aed.js", resumeFromRunId: "wf_f550e894-aed"})`
- Synthesis for this batch is instructed to **append** a new section to `RESEARCH.md`, not rewrite it — verify this actually happened (don't trust the summary) once it completes, the same way pass 2's rewrite silently dropped content despite claiming otherwise.

**Restructured 2026-07-01 per user request ("split into more") — the remaining 17 angles are now 4 smaller batches instead of one batch 2, run sequentially (one at a time, verify each merges correctly before starting the next):**
- **Batch 2** (5 angles): recent PHP/Apache/jQuery/MySQL/TLS CVEs in the actual stack
- **Batch 3** (4 angles): hosting-panel CVE analogy for ZoneOS, IDOR sweep (invoices, hashed image paths), payment-flow security, small-auction-site breach post-mortems
- **Batch 4** (5 angles): modern recon tools, race-condition tools beyond Turbo Intruder, automated IDOR-detection tools, PHP deserialization tooling (PHPGGC), LFI/RFI fuzzing tools
- **Batch 5** (3 angles): OSINT tooling beyond Wayback, CWE Top 25 gap-check, OWASP API Security Top 10 for `/ajax/*`

None of batches 2-5 launched yet as of this note — launch batch 2 once batch 1 completes and its append-to-RESEARCH.md is verified.

Pattern borrowed from `book/research/_raw/audit/RESUME_INSTRUCTIONS.md` (per user request, 2026-07-01) — same idea: record run ID, script path, and exact resume command every time a workflow is launched here, so a session-limit or crash never loses work silently.

---

## Research expansion pass (2026-07-01) — COMPLETE (resumed successfully after session-limit interruption)

**Post-completion note:** the synthesis step wrote directly to `RESEARCH.md` (a subagent had Write access) and its own summary claimed to preserve pass 1's tooling section — that claim was false; the rewrite silently dropped it. Caught by grep, restored manually from conversation context into `RESEARCH.md`, and the original pass-1 text is preserved verbatim at `RESEARCH-pass1-original-backup.md` in this same folder (no git in this repo, so that file is the only durable copy). Lesson for next time: verify a workflow's file-writing claims against the actual file, don't trust the return-value summary alone.


**Why it exists:** the original `RESEARCH.md` (5 generic OWASP/PortSwigger angles) was assessed as extremely weak — it explicitly found nothing auction-specific on bid-sniping, proxy-bid ceiling leaks, auction-extension bypass, or DoS-the-close, which are exactly the top-priority items in `VULNERABILITIES.md`'s attacker-viability filter. This workflow reruns research across 7 new, more targeted angles (auction-fraud mechanics, DDoS attribution/legal precedent, proxy-bid implementation norms, BaltBid platform identification, ZoneOS server, small-operator fraud-detection realism, auction-specific pentest writeups) with 3-vote adversarial verification per claim, then a synthesis pass.

**Run ID:** `wf_7bca3ff1-20d`

**Script path:**
`C:\Users\masuta\.claude\projects\c--Users-masuta-Desktop-Coding-test\67dd6d69-f493-42a7-a7b6-0ab8eebff2af\workflows\scripts\auction-research-expansion-wf_7bca3ff1-20d.js`

**To resume:**
```
Workflow({
  scriptPath: "C:\\Users\\masuta\\.claude\\projects\\c--Users-masuta-Desktop-Coding-test\\67dd6d69-f493-42a7-a7b6-0ab8eebff2af\\workflows\\scripts\\auction-research-expansion-wf_7bca3ff1-20d.js",
  resumeFromRunId: "wf_7bca3ff1-20d"
})
```
Completed `agent()` calls (research + verify for 6 of 7 angles) return cached results instantly; only the incomplete calls re-run.

**What happened:** hit the account session limit (227 agents, ~7.4M subagent tokens, 1676 tool calls) partway through. 6 of 7 angles (`auction-fraud-mechanics`, `ddos-attribution`, `proxy-bid-norms` [research only], `baltbid-platform`, `zoneos-server`, `fraud-detection-realism`, `auction-pentest-writeups` — check the raw output for the exact set) completed research **and** adversarial verification. The `proxy-bid-norms` angle's verification votes (all 20 of them, for its ~6-7 claims × 3 votes) failed with "session limit," as did the single final `synthesize-report` agent. Session limit message: `"You've hit your session limit · resets 6:10pm (Europe/Vilnius)"`.

**Idempotency fallback if the run ID ever expires/becomes unresumable:** the full raw output (every agent's result, including the complete `results` array with all claims and verification verdicts for the 6 finished angles) is saved at `_raw/research-expansion-wf_7bca3ff1-20d-raw-output.txt` in this same directory. If `resumeFromRunId` fails, that file has everything needed to hand-write a continuation script that only re-does the `proxy-bid-norms` verification + synthesis, without re-researching the other 6 angles from scratch.

**After this completes:** merge the synthesis output into `RESEARCH.md` (replacing/expanding it, not just appending), and re-check whether anything in it changes `VULNERABILITIES.md`'s attacker-viability filter table (the four open reasoning-only claims it was meant to ground: the #5 statistical-fingerprint idea, the #7 DDoS-attribution correction, the #1/#2/#6 monotonic-increase assumption, and general auction-fraud precedent for #3b/#7).
