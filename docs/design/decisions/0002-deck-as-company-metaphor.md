# DDR-0002 — Your deck is your company

- **Status**: Accepted
- **Date**: 2026-04-21 (documented retroactively)
- **Related DDRs**: DDR-0001, DDR-0009, DDR-0012

## Context

The deck-builder shell is given (DDR-0001), but within the genre there are
several possible interpretations of *what the cards in your deck represent*.
In the classic Dominion model, cards are abstract actions ("+2 cards, +1
buy"). Here we want a more concrete, thematic interpretation, which then
underpins the rest of the mechanics.

## Decision

**Every card in your deck is a concrete person or piece of equipment in
your company.**

- Employee cards = staff (name, role, stats, abilities).
- Item cards = personal items / office gear (only act when equipped to an
  employee).
- Hiring = a new card into the discard pile (or, with a special ability, to
  the top of the deck).
- Dismissing / firing = removing a card from the game (purge).
- Drawing = "who comes in to work today" (random subset).
- Hand size (5 employees) = the number of people you can supervise at once.
- Discard reshuffle after Project Release = a new project cycle starts,
  everyone resets — "new quarter".

## Consequences

- Hire / dismiss / purge mechanics gain thematic weight — HR operations are
  not abstract deck manipulation, they are management decisions.
- The starter deck (1 CEO + 9 interns, see DDR-0012) is a thematically
  meaningful entry state.
- The "hand limit" = supervisory capacity — this is why Senior employees
  are felt as premium cards (see DDR-0005).
- Item-employee equipping (1 item / employee) comes naturally: every person
  has one main piece of equipment.
- The Prestige Employee as a money-dump (DDR-0009) also makes sense this
  way — a "prestige employee" (board member, advisor, evangelist) who does
  little, but adds to your brand.

## Alternatives considered

- **Card = abstract action (Dominion-style)**: more compact mechanical
  design, but loses the thematic hook that distinguishes the game from a
  standard genre entry.
- **Card = project task**: tasks would be in your deck. The "you hire
  people" hook — the game's main thematic engine — would be lost.

## Open questions

None.
