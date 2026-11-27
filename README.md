# Neura Mobilis

Neura Mobilis builds AI that gives people with spinal cord injuries back their autonomy and mobility.
Student startup from aivancity, incubated at Entrepreneur District (2026-2027).

Roadmap: (1) **Mobilis**, a voice assistant to fully control an Android phone, in testing;
(2) non-invasive decoding of movement intent (EEG/EMG); (3) rehabilitation hardware, later.

This repository holds the public website. Other building blocks (Mobilis app, decoding prototypes)
live in their own repositories or will be added here as separate folders.

## Layout

| Path | Content |
| --- | --- |
| `site/` | Public website: Astro (static), French + English, deployed to Cloudflare |
| `docs/company/` | Pitch deck and presentation note (incubator application, Oct 2026) |
| `docs/decisions/` | Architecture decision records (ADR) |
| `docs/private/` | Local only, git-ignored: documents containing personal data |
| `.github/` | CI (build, type check, dependency audit, secret scan, PR title), releases, Dependabot |
| `release-please-config.json` | Versioning and changelog rules (see ADR 0002) |

## Run the site

Requirements: [Bun](https://bun.sh) and Node 24 (`site/.node-version`).

```bash
cd site
bun install
bun run dev      # http://localhost:4321
bun run check    # type check
bun run build    # static output in site/dist
```

## Working rules

- Workflow, commit titles and releases: [CONTRIBUTING.md](CONTRIBUTING.md).
- Accessibility target: WCAG 2.2 AA (see `CLAUDE.md`).
- Security: see [SECURITY.md](SECURITY.md).
