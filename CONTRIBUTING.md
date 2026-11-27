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

## Release app (one-time, organization owner)
Release PRs are opened by the "Neura Mobilis Release" GitHub App (ADR 0002). To (re)create it:
1. github.com/organizations/neura-mobilis/settings/apps → New GitHub App.
   - Homepage URL: https://github.com/neura-mobilis/website
   - Webhook: uncheck "Active".
   - Repository permissions: Contents read & write, Pull requests read & write, Issues read & write
     (Metadata read-only is added automatically). No organization or account permissions.
   - Where can this GitHub App be installed: Only on this account.
2. On the app page: note the **Client ID**, then "Generate a private key" (downloads a `.pem`).
3. Install App → neura-mobilis → Only select repositories → `website`.
4. Repository → Settings → Environments → `release`: variable `RELEASE_APP_CLIENT_ID` = Client ID,
   secret `RELEASE_APP_PRIVATE_KEY` = full content of the `.pem`. Then delete the `.pem` file.

Reasons: `docs/decisions/` (0002 versioning, 0003 secret scanning, 0004 organization, 0005 Actions policy, 0006 accessibility testing).
