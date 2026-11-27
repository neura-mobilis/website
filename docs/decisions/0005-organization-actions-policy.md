# 0005 — Organization GitHub Actions policy

Date: 2026-11-27 · Status: accepted

## Context
Branch rulesets, secret scanning and CodeQL only cover public repositories on GitHub Free. Settings at
the organization level, however, apply to every repository, private ones included, at no cost. A
compromised or careless workflow is the main supply-chain risk of a small team.

## Decision
Organization settings (`neura-mobilis`):
- **Allowed actions: selected only.** GitHub-owned actions (`actions/*`, `github/*`) plus an explicit
  list: `oven-sh/setup-bun`, `googleapis/release-please-action`, `amannn/action-semantic-pull-request`.
  "Verified creators" is off: verified means the publisher is known, not that the code is safe.
- **SHA pinning required**: every action must be referenced by a full commit SHA, so a moved or
  hijacked tag cannot change what runs. Dependabot keeps the SHAs up to date.
- **Default workflow token: read-only**, and workflows cannot approve pull requests.
- **Fork pull requests from any outside contributor need approval** before their workflows run.
- **Only owners create repositories.** GitHub Free cannot restrict members to private-only creation,
  so creation is reserved to owners to prevent an internal repository being made public by mistake.

## Consequences
- Adding a new third-party action means adding it to the allow-list first: one deliberate step, the
  moment to review it.
- Members ask an owner to create a repository.
