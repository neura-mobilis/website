# 0006 — Automated accessibility testing

Date: 2026-11-27 · Status: accepted

## Context
Our users may be tetraplegic and rely on voice control, switch access or screen readers: WCAG 2.2 AA
is a hard requirement. Auditing at the end is costly; checking every page from its first version is cheap.

## Decision
- A required CI job `a11y` builds the site, serves `dist/` and runs Playwright with axe-core on
  **every built page** (discovered from `dist/`, so new pages are covered automatically): rules
  tagged WCAG 2.0/2.1/2.2 A and AA, plus keyboard checks (first Tab reaches the skip link, which
  moves focus to `main`).
- `dist/` is served by a tiny Bun script (`tests/serve.ts`): `astro preview` detaches itself when not
  attached to a terminal, which Playwright reads as a crash.
- Automated tools find a fraction of accessibility issues (roughly 30-40%): the PR checklist keeps a
  manual keyboard and screen reader pass.

## Consequences
- A page with a WCAG A/AA violation detected by axe cannot be merged.
- New interaction patterns (menus, forms, dialogs) get their own keyboard tests when they are built.
