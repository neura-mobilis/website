# 0003 — Secret scanning

Date: 2026-11-27 · Status: accepted

## Context
A secret pushed to GitHub must be considered leaked, even if removed later. We want to block secrets
before they enter history, and still catch anything that slips through, with tools whose versions
we control and that keep themselves up to date.

## Decision
Two layers, one scanner version:
1. **Pre-commit hook** (`.githooks/pre-commit`): scans staged changes, blocks the commit.
   Native git hooks, no extra tool to install (`git config core.hooksPath .githooks`).
2. **CI** (`secrets` job, required on `main`): scans the full history on every push and PR. The hook
   can be skipped locally; CI cannot.

Both run Gitleaks from the same image, `.github/tools/gitleaks.Dockerfile`, pinned by version and
digest. Dependabot's `docker` ecosystem watches that file and proposes updates (7-day cooldown),
so the pin never rots and local and CI always agree.

## Options rejected
| Option | Why not |
| --- | --- |
| `gitleaks/gitleaks-action` | Third-party JavaScript running with a repo token and API calls; failed on the first push (root commit) and on PRs (permissions); requires a license key once the repo moves to an organization. |
| `docker run image@digest` in the workflow | Dependabot cannot see an image inside a `run:` line: the version silently freezes. |
| GitHub secret scanning + push protection | Best server-side layer, but paid on private repos. Enable it for free if the repo becomes public. |

## Consequences
- Contributors need Docker for the hook; without it the hook warns and CI remains the gate.
