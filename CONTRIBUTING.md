# Contributing

## One-time setup per clone
```bash
git config core.hooksPath .githooks   # blocks commits containing secrets (needs Docker)
```

## Workflow
1. Branch from `main`: `feat/home-page`, `fix/contrast-footer`, `content/en-faq`…
2. Commit as you like on the branch, open a pull request.
3. Give the PR a Conventional Commit title (checked by CI); it becomes the commit on `main`:

   | Prefix | Use for | Version bump |
   | --- | --- | --- |
   | `feat:` | new page, section or feature | minor |
   | `fix:` | bug, broken link, accessibility defect | patch |
   | `content:` | copy or translation change | patch |
   | `perf:` | speed improvement | patch |
   | `deps:` | dependency update | patch |
   | `docs:` `ci:` `chore:` `refactor:` `test:` | no visible change | none |

   Add `!` for a breaking change (`feat!: new URL structure`) → major bump once ≥ 1.0.0.
4. CI must be green, then squash-merge.
5. Release: when you want to ship, merge the open "chore(main): release site x.y.z" PR. It updates
   `site/CHANGELOG.md` and `site/package.json`, tags `site-vX.Y.Z` and creates the GitHub Release.

## Release app (one-time, repository admin)
Release PRs are opened by the "Neura Mobilis Release" GitHub App (ADR 0002). To (re)create it:
1. GitHub → Settings → Developer settings → GitHub Apps → New GitHub App (under the company
   organization once it exists). Webhook: off. Repository permissions: Contents read & write,
   Pull requests read & write, Issues read & write. Installable: only on this account.
2. Install it on this repository only.
3. Repository → Settings → Environments → `release`: add variable `RELEASE_APP_CLIENT_ID`
   (the app's Client ID) and secret `RELEASE_APP_PRIVATE_KEY` (generated private key, then delete
   the downloaded file).

Reasons: `docs/decisions/` (0002 versioning, 0003 secret scanning).
