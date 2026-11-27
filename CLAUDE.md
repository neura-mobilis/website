# Neura Mobilis — agent notes

Startup of four aivancity students (CEO Maël Razafimbelo, CTO Antoine Loyau-Tulasne, Head of Data & AI
Ndeye Fatma Diagne, Dev & marketing Ethan Orain). Mission: AI that restores autonomy and mobility for
people with spinal cord injuries. Source of truth for the business: the private repo `neura-mobilis/company` (note + pitch),
usually cloned next to this one as `../company`. This repo is public: nothing internal goes here.

## Website (`site/`)

- Static Astro, no backend, deployed to Cloudflare (`wrangler.jsonc`). Bun for everything, Node 24.
- Bilingual: French at `/`, English at `/en/`. Every page exists in both languages with `hreflang`
  links. Goal is worldwide visibility, so SEO (titles, descriptions, sitemap, structured data) is
  part of every page, not an afterthought.
- Accessibility is a hard requirement (users may be tetraplegic, using voice control, switch access
  or screen readers): WCAG 2.2 AA, full keyboard navigation, visible focus, targets ≥ 44 px,
  `prefers-reduced-motion` respected, no information conveyed by color alone, real `<button>`/`<a>`.
- No cookies, no analytics, no third-party embeds without a consent decision first.
- Claims: only what the company documents state. Mobilis is "in testing" on Android; decoding is an idea;
  hardware is long term. Never invent users, partners, results, medical claims or testimonials.
  Mobilis is an accessibility tool, not a medical device: never write medical promises.
- Domain `neura-mobilis.com` and `contact@neura-mobilis.com` are placeholders until bought (`site/src/data/site.ts`).
- Never name people or organizations (partners, centres, team members) on the site without their written consent.
  The only person named is the publisher, as French law requires (legal notice, privacy policy).
- Pages and slugs live in `site/src/i18n/routes.ts`; every page exists in French and English.

## Rules

- Public repository: no business documents, pricing drafts, partner names under discussion or personal data.
- Before committing: `bun run check` and `bun run build` in `site/`.
- Code, comments and commits in English; site copy in French and English.
