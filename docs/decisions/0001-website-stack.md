# 0001 — Website stack

Date: 2026-11-26 · Status: accepted

## Context
The first public asset is a website that must be found worldwide (SEO), be fully accessible to
people with motor impairments, and cost nothing to run while the company has no revenue.
It is a content site: pages to read, no user accounts, no data to store.

## Options considered
| Option | What it is | Fit |
| --- | --- | --- |
| **Astro** (chosen) | Content-first framework. Pages become plain HTML at build time and ship no JavaScript unless a component asks for it ("islands"). | Best for SEO, speed and accessibility; free static hosting. |
| TanStack Start | Full-stack React framework: router, server functions, SSR. Built for applications with state and data. | Overkill for pages to read; every page carries React. Right tool later for a logged-in app. |
| Next.js | Full-stack React framework, same family as TanStack Start, tied to Vercel's conventions. | Same trade-off, heavier. |
| Plain HTML | No framework. | No components, no i18n routing, no sitemap: hard to grow past a few pages. |

## Decision
- Static Astro site, French + English, deployed to Cloudflare (free tier, global CDN).
- Bun as package manager, exact versions, 7-day minimum release age for new packages.
- No backend, no cookies, no analytics for now: nothing to secure server-side and no consent banner.
- Monorepo layout (`site/` + `docs/`) so later blocks (decoding prototype, ML pipelines) can sit next
  to the site with shared CI and conventions.

## Consequences
- Pages are HTML at build time: fast, good Core Web Vitals, easy for search engines and AI crawlers.
- If an interactive widget is needed, Astro can embed a React component on that page only.
- If Neura Mobilis needs a logged-in product on the web (Mobilis subscription, clinic dashboard),
  it becomes a separate app (e.g. `app.` subdomain) built with TanStack Start; the public site stays Astro.
- A contact or waiting-list form will need a decision (third-party form service vs. a small worker)
  and a GDPR notice.
