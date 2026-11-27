# Security policy

## Reporting a vulnerability

Please do not open a public issue. E-mail the team at ethan.orain91@gmail.com with the details;
we answer within 7 days.

## Practices in this repository

- No secrets in git: `.env*` files are ignored, a pre-commit hook and CI both run Gitleaks
  (same pinned image, see ADR 0003).
- Dependencies: exact versions, `bun.lock` committed, versions younger than 7 days are refused
  (`site/bunfig.toml`), `bun audit` runs in CI, Dependabot opens weekly update PRs.
- GitHub Actions are pinned to a commit SHA and run with least privilege; releases use a
  dedicated GitHub App whose key is only available to `main` (ADR 0002).
- `main` accepts changes only through pull requests with green CI, no bypass, admins included.
- The website is static: no backend, no cookies, no analytics. Security headers (CSP, HSTS…) are
  set in `site/public/_headers`.
- Health data: the site never collects any. Mobilis and future products handle sensitive data
  (GDPR art. 9); those rules live with their code.
