# Design system — Neura Mobilis website

The site borrows its identity from the Mobilis app itself: its warm screen, its blue, and its one big
round "Press to talk" button. That button is the signature motif across the site (hero demo, round call
to action, icon discs, timeline markers, page-head orb).

## Themes
Light and dark, following `prefers-color-scheme`, overridable by the header toggle (`data-theme` on
`<html>`, saved in `localStorage`, applied before paint by `public/theme.js`). Users are often on a phone
or tablet, at home, in the evening or lying down: dark must be first-class, never an afterthought.

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `--bg` | `#eef2f8` | `#0b1322` | page ground (cool, never pure white or black) |
| `--surface` | `#ffffff` | `#121d33` | bands, chips, page heads |
| `--ink` / `--ink-soft` | `#0f1b33` / `#46546d` | `#e7edf8` / `#a9b6cc` | text |
| `--line` / `--line-strong` | `#d3dbe8` / `#9aa8bf` | `#22314f` / `#4a5d82` | rules, outlines |
| `--accent` | `#1b4fa6` | `#8db4ff` | links, emphasis on the ground |
| `--accent-strong` | `#2160c4` | `#2160c4` | the Mobilis blue: buttons, discs (white text) |
| `--band` / `--band-ink` | `#10204a` / `#eef3ff` | `#16306e` / `#eef3ff` | closing call-to-action band and footer |

All text pairs meet WCAG 2.2 AA in both themes; the CI runs axe in light, dark and mobile.

## Type
Atkinson Hyperlegible Next (variable, self-hosted via Fontsource), designed by the Braille Institute for
low-vision readers: legibility is the brand. Display weight 800 with slight negative tracking; body
1.125rem / 1.6. The phone mock-up keeps Roboto/system to stay faithful to the Android app.

## Components
- **Phone demo** (`PhoneDemo.astro`): faithful mock-up of the app's home screen. The blue button plays a
  simulated exchange (labelled as such) with ripple rings while "listening"; optional read-aloud via the
  Web Speech API, off by default so it never talks over a screen reader. Keyboard operable, results
  announced through a `role="log"` live region, reduced motion shortens timings and removes ripples.
- **Buttons**: pill, 48px min height; primary in `--accent-strong`, secondary as an outlined pill.
- **Round call to action**: the app's big button at page scale, with soft concentric halos.
- **Feature rows**: icon disc + heading + text, separated by rules (no cards).
- **Timeline**: three steps, the current one filled in the Mobilis blue.

## Rules
- No inline scripts (CSP). Scripts ship as files (`assetsInlineLimit: 0`).
- Touch targets ≥ 44px; visible focus everywhere; no content that moves on its own.
- Numbers keep narrow no-break spaces (`40 000`, `17 h 12`).
