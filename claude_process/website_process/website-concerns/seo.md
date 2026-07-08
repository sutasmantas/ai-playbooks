# Concern: SEO

**Rule**
Every page intended for public discovery has correct title, description, canonical URL, OG/Twitter metadata, and is crawlable. Structured data is present where the page type supports it.

**Why**
SEO failures are silent — the site keeps working for direct visitors while organic traffic quietly never appears. The bug isn't a 500; it's a missing tag that Google interprets as "not worth indexing." Producer can't see the failure without checking the crawler's frame.

**How to apply**
- `<title>` and `<meta name="description">` on every public page. Per-page, not global.
- `<link rel="canonical">` resolves to the preferred URL form (no trailing slash mismatch, no query-string variant).
- OG tags (`og:title`, `og:description`, `og:image`) on every page. Validate with the Facebook sharing debugger.
- `robots.txt` and `sitemap.xml` exist and are correct. The sitemap is auto-generated, not hand-edited.
- No `noindex` on production pages by accident (a common staging-leak failure).
- Structured data via JSON-LD where applicable (Article, Product, BreadcrumbList, Organization). Validate with Google's Rich Results Test.
- Server-rendered HTML for any page that needs to rank — client-only rendering still has indexing edge cases.

**Skip if**
Internal tool, authenticated-only site, or a deliberate "no public traffic" project. Document why in CLAUDE.md.

**Trace:** general — not from a war story in this kit.
