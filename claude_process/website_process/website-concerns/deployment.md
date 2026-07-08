# Concern: Deployment

**Rule**
Every PR produces a preview environment with a unique URL. Production deploys are atomic and rollback-able in under 5 minutes. CI runs the validator and the tier-2 verifier before merge.

**Why**
Deploy-time failures and rollback-time confusion are the most expensive failures because they happen under pressure. The discipline has to exist before the incident, not after.

**How to apply**
- **Preview environments:** Every PR auto-deploys to a unique URL (Vercel/Netlify/Render preview, or self-hosted equivalent). The verifier opens this URL — not localhost.
- **CI gates:** PR can't merge if Tier 1 validator fails. Tier 2 verifier output is attached to the PR description.
- **Atomic deploys:** A deploy is "the whole site, all at once" — no in-flight inconsistent state. Static assets are content-addressed and immutable.
- **Rollback:** Single command (or button) to revert to the previous deploy. Tested in a non-emergency at least once.
- **Migrations:** Schema migrations are backward compatible across deploys. Never deploy a release that requires both the old code and the new schema to exist simultaneously without thinking through the order.
- **Health check:** A `/health` or equivalent endpoint that the deploy platform polls. Returns non-200 if a critical dependency is down so traffic doesn't get sent to a broken instance.
- **Monitoring:** Errors go to Sentry (or equivalent). Rate-limited alerts on regression of error rate or P95 latency.

**Skip if**
Genuinely a one-off site that will live for a week. But even then, "rollback = git revert + redeploy" should be a known command, not a discovery during an outage.

**Trace:** general — not from a war story in this kit.
