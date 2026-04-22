# DDR-0006 — Industry / Sector tags removed (for MVP)

- **Status**: Accepted (for MVP)
- **Date**: 2026-04-21

## Context

`src/model/contracts/Industry.ts` and the Contract / Person model have an
`Industry` (sector) field: `BUREAUCRACY | IT | ENTERTAINMENT | …`. The
original intent was a categorization / tag system on which **conditional
bonuses** could be built (e.g., "+2 stat if working in entertainment",
"+1 prestige if you've completed 3 healthcare projects").

The sector-specific values in the `Effect` enum (e.g.,
`ENTERTAINMENT_BONUS_SP`, `MANUFACTURING_SKILL_BONUS`) are tied to this.

The concept is interesting, but:

- The bonus system was never fleshed out; there aren't enough tested
  examples to see whether it works.
- The tag system adds extra mental overhead for the player ("remember
  which sector grants which bonus").
- For MVP, stabilizing the core mechanics is more important.

## Decision

**Cut from MVP.** The `sector` field on Contracts can be ignored; during
the card audit it can be removed (or stay as a "silent" field if it
doesn't bother the renderer). New cards do not get a sector tag.

The model field **may stay** (per DDR-0011 we don't refactor aggressively),
but rules and card text don't reference it.

## Consequences

- Simpler card text, fewer conditional effects.
- The `Industry` enum and the related `Effect` types become **dead code**
  — they exist but nothing uses them.
- A potentially interesting "specialization / niche company" mechanic is
  lost.

## Alternatives considered

- **Keep with 2-3 sectors**: a compromise, but still under-developed.
- **Implicit sector via Feature name**: no explicit tag, but the game
  hints at it on the flavor level. This is what we have for MVP — Feature
  names and flavor texts indicate themes, but mechanically they are
  neutral.

## Open questions

- Post-MVP: should the sector system be reintroduced, possibly with a new
  concept (e.g., "specialization deck" per player)? → `open-questions.md`.
