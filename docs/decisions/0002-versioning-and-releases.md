# 0002 — Versioning and releases

Date: 2026-11-27 · Status: accepted

## Context
We want to know what is deployed, what changed and when, without anyone maintaining it by hand.

## Decision
- **Semantic Versioning** per component (`MAJOR.MINOR.PATCH`). For the site: MAJOR = redesign or URL
  structure change, MINOR = new page or feature, PATCH = fix. Below 1.0.0 the site is not launched;
  1.0.0 = public launch on the real domain.
- **Conventional Commits** on `main`: the PR title (`feat: …`, `fix: …`, `content: …`) becomes the
  squash commit and is checked in CI.
- **release-please** reads those commits and keeps a "release PR" open with the next version and the
  `CHANGELOG.md` entry. Merging it bumps `site/package.json`, writes `site/CHANGELOG.md`, tags
  `site-vX.Y.Z` and publishes a GitHub Release. We decide *when* to release; the tool decides *what*.
- Source of truth for versions: each component's own manifest (`package.json`, later `pyproject.toml`),
  mirrored in `.release-please-manifest.json`. No separate `VERSION` file: it would duplicate them.

## Options rejected
- Hand-written CHANGELOG and version bumps: forgotten or inconsistent within weeks.
- semantic-release: releases on every merge, no human checkpoint.
- Changesets: built for publishing many npm packages; adds a file per PR for little gain here.

## Release identity: a GitHub App
release-please acts through a dedicated GitHub App ("Neura Mobilis Release"), not the default
`GITHUB_TOKEN` nor a personal token.

| Option | Problem |
| --- | --- |
| `GITHUB_TOKEN` (default) | GitHub does not run workflows on PRs it opens: release PRs would skip CI and need an admin bypass of the `main` rules. Rejected: a rule with an exception is not a rule. |
| Personal access token | Tied to one founder (leaves → releases break), long-lived, broad scope, acts as that person. |
| **GitHub App** (chosen) | Its own identity, permissions limited to contents + PRs on this repo, tokens minted per run and valid 1 h, transferable to a company organization, survives team changes. |

The app private key lives in the `release` environment, which only the `main` branch can use.
Without the app configured, the release job fails visibly instead of degrading silently.

## Consequences
- A sloppy PR title means a wrong changelog line: the CI check prevents it.
- Release PRs run the full CI and follow the same `main` rules as every other PR; nobody can bypass them.
- Setup is a one-time manual step (create and install the app): see CONTRIBUTING.md.
