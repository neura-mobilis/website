# Security policy

## Reporting a vulnerability

Please do not open a public issue. Use GitHub's private reporting instead:
[Security → Report a vulnerability](https://github.com/neura-mobilis/website/security/advisories/new).
Only the maintainers see the report; we answer within 7 days.

## Practices in this repository

- No secrets in git, three layers (ADR 0003): a pre-commit hook and a required CI job run Gitleaks
  (same pinned image), and GitHub secret scanning with push protection rejects known secret
  formats at push time.
- CodeQL (GitHub default setup) analyses the code and the workflows.
- Dependencies: exact versions, `bun.lock` committed, versions younger than 7 days are refused
  (`site/bunfig.toml`), `bun audit` runs in CI, Dependabot opens weekly update PRs.
- GitHub Actions are pinned to a commit SHA and run with least privilege; releases use a
  dedicated GitHub App whose key is only available to `main` (ADR 0002).
- `main` accepts changes only through pull requests with green CI, no bypass, admins included.
- The website is static: no backend, no cookies, no analytics. Security headers (CSP, HSTS…) are
  set in `site/public/_headers`.
- Health data: the site never collects any. Mobilis and future products handle sensitive data
  (GDPR art. 9); those rules live with their code.
