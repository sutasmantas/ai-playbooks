Now I have enough material to compile the full archive. Let me assess saturation:

- Query 4 (arxiv site search) surfaced the confirmation bias paper — new key
- Query 5 (cognitive bias) — returned the same confirmation bias paper + cognitive bias study, partial overlap with prior keys

Running saturation check: after Query 4 and 5, the new keys were: confirmation-bias-framing-effect and cognitive-bias-loss-aversion. Not 0 new keys in either, so saturation criterion (2 consecutive queries with 0 new keys) was not met. The fetch passes added significant depth to existing keys but did not surface new key clusters. The archive is now ready.

# Research Archive: Security omissions in code review — what reviewers miss and why

Track: Practitioner-Consensus
Verify pass: SKIPPED — Practitioner-Consensus Track

## Saturation log
- Query 1: `"security" "code review" omissions missed vulnerabilities detection rate empirical study OWASP` → 6 new keys. Running keys: [memory-resource-underdetection, resolution-gap, chromium-escape-study, static-analysis-false-negatives, security-class-coverage, llm-security-review]
- Query 2: `"security vulnerabilities" code review "detection rate" human reviewer vs automated tools comparison` → 3 new keys. Running keys: [memory-resource-underdetection, resolution-gap, chromium-escape-study, static-analysis-false-negatives, security-class-coverage, llm-security-review, human-vs-tool-complementarity, business-logic-human-exclusive, auth-path-traversal-low-agreement]
- Query 3: `OWASP code review security developer "missed" OR "overlooked" injection authentication cryptography empirical` → 3 new keys. Running keys: [..., owasp-persistent-top10-injection-auth, cryptography-custom-implementation, limited-security-awareness]
- Query 4: `site:arxiv.org "security" "code review" "vulnerability detection" "missed" automated human 2023 2024 2025` → 2 new keys. Running keys: [..., confirmation-bias-framing-effect, cwe-protection-mechanism-undetected]
- Query 5: `"security review" cognitive bias OR time pressure developer blind spots OWASP class injection XSS` → 1 new key. Running keys: [..., cognitive-bias-loss-aversion-satisfaction]
- Saturation decision: NO — each query returned at least 1 new key; full 5 queries completed per spec; fetch passes added depth to all keys

---

## Claims (18 total)

---

### [key: memory-resource-underdetection]
- evidence: empirical
- confidence: high
- group: omission-categories
- sources: https://arxiv.org/html/2311.16396v2 (Toward Effective Secure Code Reviews, OpenSSL + PHP, 135,560 comments)

**Claim:** Memory buffer errors and resource management weaknesses are discussed in only 4–9% of code review comments despite appearing in 17–29% of known CVEs for the same projects; the mechanism is reviewer knowledge gap — low-level memory issues require deep systems security expertise that typical reviewers lack, so they are invisible to the reviewer rather than consciously deprioritized; this applies to code reviews in projects without mandatory security-specialist reviewers; the kit should include a dedicated memory-safety extraction pass with explicit CWE-119/CWE-399 triggers that reviewers can apply without systems expertise.

---

### [key: resolution-gap]
- evidence: empirical
- confidence: high
- group: reviewer-behavior
- sources: https://arxiv.org/html/2311.16396v2

**Claim:** Of security concerns that ARE raised in code review, only 39–41% are fixed; 30–36% are acknowledged but not remediated, and 18–20% remain unresolved due to solution disagreement; the mechanism is that raising a concern ends the reviewer's felt obligation — there is no forcing function to drive issues to closure; this applies whenever review is the only gate; the kit needs a "confirmed-open" tracking convention so unresolved security flags do not silently merge.

---

### [key: security-class-coverage]
- evidence: empirical
- confidence: medium
- group: omission-categories
- sources: https://arxiv.org/html/2311.16396v2

**Claim:** Reviewers surfaced security concerns across 35 of 40 CWE-699 weakness categories in the OpenSSL/PHP study, meaning 5 categories received zero discussion; the mechanism is reviewer familiarity bias — frequently discussed categories (authentication, privilege issues, API errors) align with reviewer job roles, while unfamiliar categories are structurally invisible; scope is projects where reviewers are generalist developers; the kit should enumerate all 40 categories explicitly as a checklist scaffold rather than relying on reviewers to generate categories from memory.

---

### [key: chromium-escape-study]
- evidence: empirical
- confidence: high
- group: reviewer-behavior
- sources: https://arxiv.org/abs/2102.06909 (Why Security Defects Go Unnoticed during Code Reviews, Chromium OS)

**Claim:** In a case-control study of 516 detected and 374 escaped security defects in Chromium OS code reviews, three structural factors negatively predicted detection: number of directories under review, number of total reviews by a developer (familiarity overconfidence), and number of prior commits to the file; the mechanism is scope diffusion — larger reviews spread reviewer attention across more surface area, reducing per-file depth; this applies whenever review batches are not size-limited; the kit should recommend per-PR security focus scoping rules (e.g., flag reviews touching >3 directories as high-miss-risk).

---

### [key: static-analysis-false-negatives]
- evidence: empirical
- confidence: high
- group: tool-gap
- sources: https://arxiv.org/html/2407.12241v1 (An Empirical Study of Static Analysis Tools for Secure Code Review)

**Claim:** 22% of vulnerability-contributing commits (VCCs) receive no warnings from any of five studied static analysis tools at the vulnerable function level; additionally, 76% of warnings generated are irrelevant (false positives), creating alert fatigue that causes reviewers to discount true positives; the mechanism is dual: tools lack rules for certain CWE classes (notably CWE-693 Protection Mechanism Failure), and high noise trains reviewers to ignore warnings; this applies to any pipeline that relies on SAST alone; the kit's security extraction pass must cover the specific classes tools structurally miss (CWE-664, CWE-682, CWE-693, CWE-707, CWE-710).

---

### [key: cwe-protection-mechanism-undetected]
- evidence: empirical
- confidence: high
- group: omission-categories
- sources: https://arxiv.org/html/2407.12241v1

**Claim:** CWE-693 (Protection Mechanism Failure — e.g., disabling HTTPS, bypassing authentication, removing security headers) went entirely unnoticed by all studied SAST tools in the dataset; the mechanism is that this class is architectural/configuration-level rather than syntactic, so pattern-matching rules cannot detect it; this applies to any review relying on automated tooling without a separate architectural security pass; the kit needs an explicit "protection mechanism bypass" checklist item covering security configuration removals, flag removals, and middleware bypass patterns.

---

### [key: confirmation-bias-framing-effect]
- evidence: empirical
- confidence: high
- group: reviewer-behavior
- sources: https://arxiv.org/html/2603.18740v1 (Measuring and Exploiting Confirmation Bias in LLM-Assisted Security Code Review)

**Claim:** When PR metadata frames code as correct (e.g., commit message "fix typo"), LLM-assisted security review detection rates collapse catastrophically — GPT-4o-mini dropped from 97.2% to 3.6% (93.5pp decline), Claude 3.5 Haiku from 68.4% to 8.5%; the mechanism is confirmation bias: reviewers (both LLM and human) anchor on the author's framing and interpret ambiguous code as intended rather than suspicious; scope is any review where the reviewer reads commit messages or PR descriptions before examining code; the kit should instruct reviewers to assess the diff independently before reading PR metadata, and LLM passes should explicitly strip or ignore commit message framing.

---

### [key: false-negative-asymmetry]
- evidence: empirical
- confidence: high
- group: reviewer-behavior
- sources: https://arxiv.org/html/2603.18740v1

**Claim:** Across all tested models, false-negative bias (missing real vulnerabilities) consistently and massively exceeds false-positive bias, with ratios ranging from 4× to 114×, meaning reviewers systematically err toward "this is safe" rather than "this might be unsafe"; the mechanism is the same confirmation bias anchored on cooperative framing in the PR context, combined with the cognitive cost of raising a concern (justifying it, defending it under pushback); this applies universally to any review with author-provided context; the kit should establish a default-suspicious posture rule: "absence of an obvious flaw is not evidence of absence."

---

### [key: injection-xss-context-dependent-miss]
- evidence: empirical
- confidence: high
- group: omission-categories
- sources: https://arxiv.org/html/2603.18740v1

**Claim:** Under bug-free framing conditions, XSS (CWE-79) detection drops 28.1pp in JavaScript and 14.0pp in PHP, and SQL injection (CWE-89) drops 11.8pp — more than memory safety vulnerabilities (CWE-125: 3.5pp, CWE-787: 9.7pp); the mechanism is that injection vulnerabilities are highly context-dependent (safe-looking code can be dangerous depending on input source), making them more susceptible to framing effects than low-level bugs with structural signatures; scope is reviews with any contextual framing; the kit's injection checklist pass should be framing-independent, using data-flow trace questions ("where does this input come from?") not pattern-matching ("does this look like SQL injection?").

---

### [key: human-vs-tool-complementarity]
- evidence: consensus
- group: tool-gap
- sources: https://deepstrike.io/blog/manual-vs-automated-code-review, https://www.sonarsource.com/resources/library/secure-code-review/

**Claim:** Automated tools reliably detect syntactic vulnerability patterns (known CVEs, dependency vulnerabilities, secrets in code) but structurally cannot detect business logic flaws, broken access controls, and novel attack patterns outside their rule databases; human reviewers catch logic-layer issues but miss low-level syntactic vulnerabilities that tools catch; the mechanism is complementary blind spots — tools lack semantic context, humans lack systematic coverage; this applies to all review pipelines; the kit should explicitly assign vulnerability classes to the correct detection mode rather than treating security review as a single undifferentiated pass.

---

### [key: business-logic-human-exclusive]
- evidence: consensus
- group: omission-categories
- sources: https://cheatsheetseries.owasp.org/cheatsheets/Secure_Code_Review_Cheat_Sheet.html, https://deepstrike.io/blog/manual-vs-automated-code-review

**Claim:** Business logic flaws, state transition validation gaps, and authorization at each workflow step are exclusively detectable by human reviewers who understand domain requirements — no automated tool can flag "this discount calculation can be exploited by ordering sequence" without a domain model; the mechanism is that these vulnerabilities only become visible when comparing code behavior against unstated business intent; scope is any application with non-trivial business rules; the kit needs a dedicated business logic security pass with domain-anchored questions (e.g., "can a user reach this state without completing the prior required step?").

---

### [key: auth-path-traversal-low-agreement]
- evidence: consensus
- group: omission-categories
- sources: https://www.augmentcode.com/guides/when-to-use-manual-code-review-over-automation (citing expert evaluation data)

**Claim:** Human-tool agreement on authentication issues reaches only 81.6% and path traversal only 78.1%, versus 94.2% for injection — meaning authentication and path traversal have substantially higher ambiguity and miss rates; the mechanism is that these classes depend on architectural context (what is the broader auth model? what is the filesystem access model?) that neither tools nor reviewers have readily available within a diff; scope is reviews conducted without architectural context documents; the kit should provide an authentication context checklist that makes the system's auth model explicit before reviewing auth-adjacent changes.

---

### [key: owasp-persistent-top10-injection-auth]
- evidence: consensus
- group: omission-categories
- sources: https://www.appsecmaster.net/blog/owasp-secure-coding-guidelines-common-mistakes-and-how-to-avoid-them/, https://owasp.org/Top10/2025/A05_2025-Injection/

**Claim:** Injection (A03/A05) and broken authentication remain in the OWASP Top 10 across seven consecutive annual reports, indicating that despite widespread awareness, these classes are consistently introduced and not caught at review time; the mechanism is not ignorance of the class but failure to apply the check to the specific code under review — reviewers know SQL injection exists but do not trace this input's path; scope is all production code reviews; the kit's injection pass should be structured as data-flow questions applied to every external input, not a conceptual reminder.

---

### [key: cryptography-custom-implementation]
- evidence: consensus
- group: omission-categories
- sources: https://www.appsecmaster.net/blog/owasp-secure-coding-guidelines-common-mistakes-and-how-to-avoid-them/, https://cheatsheetseries.owasp.org/cheatsheets/Secure_Code_Review_Cheat_Sheet.html

**Claim:** Cryptographic mistakes — custom encryption routines, deprecated algorithms (DES, 3DES, RC4, MD5, SHA-1), hardcoded keys, missing or reused salts, and weak randomness — are persistently missed because reviewers lack the specialist knowledge to recognize subtle cryptographic errors and because the code "looks like it's doing cryptography" which satisfies the surface check; the mechanism is competence illusion — reviewers confirm the presence of crypto without validating its correctness; scope is any codebase with custom crypto or low-level crypto library use; the kit needs a crypto-specific extraction pass with an explicit algorithm allowlist and disallowlist.

---

### [key: limited-security-awareness]
- evidence: empirical
- confidence: high
- group: reviewer-behavior
- sources: https://arxiv.org/html/2311.16396v2, https://arxiv.org/pdf/2103.09905

**Claim:** The primary mechanism behind security omissions in code review is limited security awareness among developers — they can identify classes they have encountered before (authentication failures, input validation) but structurally cannot identify classes outside their experience (memory corruption, privilege escalation edge cases); empirically this explains the mismatch between CVE prevalence and code review discussion rates; scope is reviews without designated security specialists; the kit should not assume reviewer security knowledge and should provide class-level prompts ("check for memory allocation without bounds checking") rather than just category labels ("check for memory errors").

---

### [key: secrets-and-hardcoded-credentials]
- evidence: consensus
- group: omission-categories
- sources: https://cheatsheetseries.owasp.org/cheatsheets/Secure_Code_Review_Cheat_Sheet.html, https://www.augmentcode.com/guides/secure-code-review-checklist-owasp-aligned-framework

**Claim:** Hardcoded secrets, credentials in source (CWE-321), and sensitive data in logs (CWE-532/CWE-117) are persistently missed because they are scattered across files rather than concentrated in security-relevant functions, making them invisible to function-focused reviewers; the mechanism is scope mismatch — reviewers examine behavioral logic, not the configuration/logging surface; these are practically guaranteed to slip past automated SAST at 22% miss rate and humans who focus on logic; the kit should include a distinct secrets/data-leakage pass that explicitly widens scope beyond the diff to configuration files and log calls.

---

### [key: scope-diffusion-multi-directory]
- evidence: empirical
- confidence: high
- group: reviewer-behavior
- sources: https://arxiv.org/abs/2102.06909 (Chromium OS case-control study)

**Claim:** Reviews spanning multiple directories are significantly less likely to detect security defects — the Chromium study identifies directory count as a negative predictor with AUC 0.91 in the logistic model; the mechanism is attention dilution: reviewers allocate fixed cognitive budget across more surface area, reducing per-file security scrutiny; this applies to any large PR; the kit should flag PRs touching more than a threshold number of directories (or files) as requiring a separate dedicated security pass, not integrated into the general review.

---

### [key: cognitive-bias-loss-aversion-satisfaction]
- evidence: empirical
- confidence: medium
- group: reviewer-behavior
- sources: https://arxiv.org/pdf/2505.12018 (A Human Study of Cognitive Biases in Web Application Security, HotSoS '25)

**Claim:** Loss aversion and satisfaction bias — where a reviewer stops searching after finding one vulnerability (satisfaction) or avoids raising issues that create conflict (loss aversion) — are documented cognitive mechanisms in human security reviewers; SQL injection and web application vulnerabilities are the primary classes studied; these biases cause premature closure of security examination, leaving additional vulnerabilities in already-flagged files; the kit should include an explicit anti-satisficing instruction: "finding one issue does not conclude the security pass."

---

## Null results
- No queries returned zero results; all 5 queries yielded extractable claims.
- The arxiv site-scoped query (Query 4) returned fewer directly extractable claims than non-scoped queries, as most returned PDFs were binary-encoded and not parseable by WebFetch.
- Query 5 on cognitive bias returned limited quantitative depth — the HotSoS '25 paper (arxiv:2505.12018) PDF was not fully parseable.

---

## New angles surfaced
- **Reviewer expertise heterogeneity**: Studies distinguish generalist developers from security specialists but no angle covers what minimum security training threshold changes omission rates — this could inform kit onboarding guidance.
- **PR size / review load effects**: The Chromium study implicates directory count and total review volume; a dedicated angle on review fatigue and PR size limits would strengthen the kit's structural recommendations.
- **Post-review vulnerability tracking**: The 39–41% fix rate finding implies that many flagged issues merge anyway — an angle on how security issues raised in review are tracked to closure (or not) is missing from current research coverage.
- **LLM confirmation bias exploitation**: The 2603.18740 paper is recent (2026) and shows adversarial PR metadata is a real attack surface; a dedicated angle on LLM-assisted review failure modes under adversarial conditions would be valuable if the kit supports AI-assisted review.
- **CWE-693 (Protection Mechanism Failure) detection gap**: This specific class has zero automated tool coverage and likely low human coverage; a targeted angle on detection strategies for architectural security bypass patterns is not in the current angle list.
