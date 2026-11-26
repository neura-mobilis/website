# 0001 — Website stack

Date: 2026-11-26 · Status: accepted

## Context
The first public asset is a website that must be found worldwide (SEO), be fully accessible to
people with motor impairments, and cost nothing to run while the company has no revenue.

## Decision
- Static Astro site, French + English, deployed to Cloudflare (free tier, global CDN).
- Bun as package manager, exact versions, 7-day minimum release age for new packages.
- No backend, no cookies, no analytics for now: nothing to secure server-side and no consent banner.
- Monorepo layout (`site/` + `docs/`) so later blocks (decoding prototype, ML pipelines) can sit next
  to the site with shared CI and conventions.

## Consequences
- Pages are HTML at build time: fast, good Core Web Vitals, easy for search engines and AI crawlers.
- A contact or waiting-list form will need a decision (third-party form service vs. a small worker)
  and a GDPR notice.
