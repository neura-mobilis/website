# 0004 — GitHub organization and repository visibility

Date: 2026-11-27 · Status: accepted

## Context
The code must belong to the company, not to one founder, and survive anyone leaving. The organization
is on GitHub Free: branch rulesets (PR required, green CI, no bypass) are enforced only on **public**
repositories; private ones need the Team plan.

## Decision
- Organization `neura-mobilis`, two owners (to avoid lock-out), other founders as members with read
  access by default, 2FA required.
- **One repository per product**, each with its own visibility:
  - `website` — **public**. A static site holds no secret and no data; being public gives enforced
    rulesets, GitHub secret scanning with push protection and CodeQL for free.
  - `company` — private. Pitch, notes, business documents. Documents with founders' personal data
    stay off GitHub entirely.
  - Future `mobilis`, `decoding` — private (health data, models). They will need the Team plan
    (or GitHub for Startups) to keep enforced rules.
- The website history was rewritten once, before publication, to remove company documents that had
  been committed while the repo was private.

## Consequences
- Anything committed to `website` is public forever: review for business or personal data.
- Release automation runs as an organization-owned GitHub App (ADR 0002).
