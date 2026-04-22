# DDR-0001 — Deck-builder shell as the genre

- **Status**: Accepted
- **Date**: 2026-04-21 (documented retroactively)
- **Related DDRs**: DDR-0002, DDR-0003, DDR-0004

## Context

The game simulates running a tech company — the player is a CEO building a
team and shipping projects. Two questions were open before picking a genre:

- **What represents "company building" thematically best?** Several genres
  came up: worker placement (physically placing employees), engine builder
  (the company as a machine), deck builder (your deck = your company).
- **What gives the best iteration foundation in the prototype phase?** We
  needed a shell whose skeleton is well understood, and onto which thematic
  mechanics can be layered without having to re-prove the underlying system.

Inspirations: Dominion (genre baseline), Aeon's End (variant management and
"non-shuffling" deck ideas), Clank! (push-your-luck + map overlay), Astro
Knights (asymmetric decks and combo interaction).

## Decision

The game uses a **deck-builder shell**:

- Each player has their own personalized starting deck (CEO + interns).
- Cards are randomly drawn from the deck into the hand.
- Playing cards generates resources (budget, stats) and may activate
  effects.
- New cards can be bought from a **shared market** (see DDR-0003).
- The card cycle (hand → in play → discard → reshuffle) is also the unit of
  measure for a "work period" — running out the deck triggers Project
  Release (see DDR-0004).

## Consequences

- Turn structure elements (draw, play, buy, cleanup) come for free with the
  genre — no need to reinvent them, thematic mechanics layer on top.
- The "your deck is your company" metaphor naturally yields the hire /
  dismiss rules (DDR-0002).
- Linking Project Release to the reshuffle event is a unique, theme-driven
  intervention on the standard deck-builder cycle (DDR-0004).

## Alternatives considered

- **Worker placement**: thematically closer ("placing employees on tasks"),
  but typically wants stronger spatial elements and a board structure.
  Higher entry cost, slower iteration.
- **Engine builder (TFM-style)**: the company is built on a fixed tableau.
  Heavily visual, expensive prototyping, and the "deck = company" metaphor
  is missing.
- **LCG (own deck, no market)**: hiring and market dynamics — exactly the
  things the theme (talent acquisition) suggests — would be lost.

## Open questions

None.
