# DDR-0003 — Shared markets (hire, item, assignment)

- **Status**: Accepted
- **Date**: 2026-04-21 (documented retroactively)
- **Related DDRs**: DDR-0001, DDR-0010

## Context

A classic deck-builder often gives off a "multiple solitaires next to each
other" feel: everyone optimizes their own deck, with minimal interaction.
We want to avoid that — competition for shared resources flows naturally
from the theme (competing tech companies on a single labour market).

At the same time the shared element must remain manageable: we don't want
hidden information in the public market, and we don't want playtime where
someone empties a market before others get to it.

## Decision

**All markets are shared, with refresh on purchase.**

- **Hire market**: 4 rows (Junior Production, Senior Production, Junior
  Admin, Senior Admin) + 1 Prestige Employee slot. The exact slot count
  per row is a placeholder in `open-questions.md`.
- **Item market**: ~2 slots (placeholder).
- **Assignment market**: 3 Feature slots + 3 Technology slots, from
  separate decks, in separate rows (see below).
- **Open Source Technology zone**: shared, but not a market — it's
  placement-based; see DDR-0010.

"Refresh on purchase" means: as soon as a card is bought, the slot is
refilled from the corresponding deck — no "empty waiting slot" state.

Feature and Technology assignments can be **competed for** — multiple
players may work on the same assignment at once, and whoever brings the
required stats over the line completes it. A completed assignment leaves
the market.

## Consequences

- Interaction becomes natural: timing, denial, and "snatching from under
  you" moments emerge.
- Market state is constant common knowledge, valuable strategic information.
- After a Tech assignment is completed, the finished tech can go into the
  player's private zone (only affects them) or into the shared Open Source
  zone (affects everyone, but prestige goes to the publisher). This is a
  second interaction layer (DDR-0010).
- The Prestige Employee slot is a single, take-it-or-leave-it slot
  (DDR-0009).

## Alternatives considered

- **Per-player assignments**: each player draws from their own assignment
  row. Thematically defensible ("everyone works on their own project"),
  but loses competition and market dynamics. This pulls us back to the
  "solitaire next to each other" anti-pattern.
- **Assignment pool, no slots**: every assignment is open simultaneously,
  many small deals. Quickly becomes opaque.
- **Hidden hand of assignments**: less interaction, harder to read
  opponent strategy.

## Open questions

- Exact slot counts per row (see `open-questions.md`).
- How to handle the case where during an ASSIGN action the assignment
  becomes complete, but other players' employees were on it as well?
  (Most likely default: whoever made the last contribution "owns" the
  completion and any tied bonus.)
