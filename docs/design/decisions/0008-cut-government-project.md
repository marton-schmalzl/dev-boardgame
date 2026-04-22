# DDR-0008 — Government Project + 50-budget instawin removed

- **Status**: Accepted (for MVP; likely permanent)
- **Date**: 2026-04-21
- **Related DDRs**: DDR-0009 (replacement mechanism)

## Context

The legacy rulebook had two special mechanisms:

- **Government Project**: if a player "maxes out" the Project Track, the
  project grows so large that it becomes a "Government Project" — the
  player stops gaining prestige and instead starts "printing" `MONEY`.
  Money is not a direct victory condition.
- **50-budget instant win**: if at any point a player generates 50 BUDGET
  in a single turn, they immediately win the game ("buys out the
  competition").

**Original intent (legacy intent, confirmed with the designer):**

Both were thematically motivated alternative win conditions, with this
design goal: **if someone has pulled so far ahead that they can essentially
buy anything and have no realistic chance of losing, end the game.**
That is, these aren't standalone strategic goals, they were
**anti-runaway** mechanics in thematic clothing.

## Decision

**Both removed.**

Handling the "runaway leader → game ends" design problem is taken over by
the Prestige Employee deck running out (DDR-0009): a player who actually
pulls away typically buys out the Prestige Employee deck, which is an
end-game trigger.

## Consequences

- Simpler end-game rules.
- The `MONEY` resource and its accounting disappear.
- The `BUDGET = 50` instawin watch-rule also disappears (rare anyway, but
  it could blow up the entire pacing).
- Reaching the end of the Project Track is still possible — for MVP
  simply: "the marker stays there, doesn't grow further, the player gets
  the max prestige at release". This can be refined later (e.g., "extra
  prestige rate over max", but no special logic for now).

## Alternatives considered

- **Keep for MVP**: extra rule, rare event, barely testable during
  playtesting → risky.
- **Keep Government Project as flavor end (no mechanical change)**:
  redundant text, adds nothing.
- **Keep only the 50-budget instawin**: anti-runaway effect, but a brutal
  game-end strike; the Prestige deck-out is gentler.

## Open questions

- What happens if the Project Track marker reaches the end and the player
  hasn't released yet? Default: it stays there and gets max prestige at
  release. → `open-questions.md` (placeholder, to be tuned during
  playtesting).
