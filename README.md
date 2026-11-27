# Neura Mobilis

Neura Mobilis builds AI that gives people with spinal cord injuries back their autonomy and mobility.
Student startup from aivancity, incubated at Entrepreneur District (2026-2027).

Roadmap: (1) **Mobilis**, a voice assistant to fully control an Android phone, in testing;
(2) non-invasive decoding of movement intent (EEG/EMG); (3) rehabilitation hardware, later.

This repository holds the public website. Each product lives in its own repository of the
[neura-mobilis](https://github.com/neura-mobilis) organization; company documents are in a private one.

## Layout

| Path | Content |
| --- | --- |
| `site/` | Public website: Astro (static), French + English, deployed to Cloudflare |
| `docs/decisions/` | Architecture decision records (ADR) |
| `DESIGN.md` | Visual system: themes, tokens, components |
| `.github/` | CI (build, type check, accessibility, dependency audit, secret scan, PR title), releases, Dependabot |
| `release-please-config.json` | Versioning and changelog rules (see ADR 0002) |

## Run the site

Requirements: [Bun](https://bun.sh) and Node 24 (`site/.node-version`).

```bash
cd site
bun install
bun run dev      # http://localhost:4321
bun run check    # type check
bun run build    # static output in site/dist
bun run test:a11y  # a11y, SEO, CSP and demo tests on every built page, light/dark/mobile (needs a build)
```

## Working rules

- Workflow, commit titles and releases: [CONTRIBUTING.md](CONTRIBUTING.md).
- Accessibility target: WCAG 2.2 AA (see `CLAUDE.md`).
- Security: see [SECURITY.md](SECURITY.md).
