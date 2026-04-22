# DDR-0007 — Hobby system removed (for MVP)

- **Status**: Accepted (for MVP)
- **Date**: 2026-04-21

## Context

The Hobby concept defined in `src/model/cards/Hobby.ts`: every employee
card can have a "hobby" tag. Original intent: if I assign two employees
with the same (or similar) hobby to the same assignment, they get a joint
bonus. Thematically: "shared off-hours interests make for a stronger
team".

Similar to the Sector system (DDR-0006): tag-based conditional bonus, just
on the employee side.

The concept is interesting and thematic, but for MVP the same problem
applies: under-developed, extra mental load, and other things are the
bottleneck.

## Decision

**Cut from MVP.** The `hobby` field on employee cards is not used. The
field may stay at the model level (DDR-0011), but rules and card text
don't reference it.

## Consequences

- Simpler assignment resolution.
- The "team chemistry" thematic dimension is missing for MVP — Junior /
  Senior interactions (Nina, Steve, Zoe) carry a small piece of team
  dynamics.
- Hobby-based synergies, if interesting at the table, can come back
  post-MVP.

## Alternatives considered

- **A few predefined hobby pairs** on a few cards, as an optional rule.
  Closer to MVP scope, but still teaches a new convention.
- **Hobby replaced by "nationality" / "archetype"**: same problem with
  different flavor.

## Open questions

- Post-MVP: do we need employee-employee synergy via an explicit tag
  system, or is it enough to have card-specific interactions
  (e.g., "Mentor + Junior") carry the load? → `open-questions.md`.
