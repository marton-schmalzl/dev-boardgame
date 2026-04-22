# DDR-0009 — Prestige Employee as a Province-style money dump

- **Status**: Accepted (for MVP; planned permanently, only the concrete content is simple)
- **Date**: 2026-04-21
- **Related DDRs**: DDR-0008 (replacing runaway-end mechanics),
  DDR-0003 (market layout)

## Context

A classic deck-builder problem: if a player generates lots of BUDGET but
has nothing to spend it on (because every interesting card is cheap), the
high-budget strategy stalls. Dominion solves this with the Province card:
a very expensive, mechanically trivial (only prestige) card; few players
can afford to buy it, and its depletion triggers the end of the game.

At the same time (see DDR-0008) we need a simple **runaway-end trigger**:
if a player flies away from the rest, the game should end naturally.

The legacy rulebook mentioned the "Prestige Employee" category as an
employee variant — the concept was there, just under-developed.

## Decision

**The Prestige Employee is an explicit money-dump card with a Province-like
role.**

MVP configuration:

- **1 unique card**, ~10 copies in the deck.
- **Cost**: placeholder (e.g., 7-8 BUDGET).
- **Prestige**: placeholder (e.g., +5 end-of-game).
- **In-game effect**: none (a neutral draw in hand, just like a Province).
- **Market slot**: 1, directly visible from the top of the Prestige
  Employee deck; take-it-or-leave-it (when bought, the next copy steps in;
  when the deck runs out → end-game trigger).

The "Prestige Employee" can be e.g. a board member, advisor, evangelist —
thematically a person who does little but adds to your brand. The exact
name / flavor goes on a single template for MVP.

## Consequences

- **End-game trigger guaranteed** for runaway cases (DDR-0008
  replacement).
- **Budget-focused strategies get a clear pull target.**
- One market slot is permanently occupied; no special deck management
  required.
- Mechanical complexity is minimal (a pass card during hand actions, only
  matters at end-game scoring).
- Post-MVP: if it works, variants can be introduced (e.g., cheaper /
  smaller-prestige "Estate" / "Duchy" equivalents), or "prestige
  employee with weak ability" (e.g., "Founding Investor: cost 6, +3
  prestige, while in your deck +1 budget per turn").

## Alternatives considered

- **Multiple variants right away (e.g., 3 cost tiers)**: makes for more
  interesting decisions, but adds balancing work and deck management.
  Open post-MVP.
- **General "investment" item with the same role**: would fit into the
  item system, but loses the thematic "prestige employee" hook
  (DDR-0002).
- **Just a budget cap (50 BUDGET soft limit, nothing to spend on)**:
  awkward, no game-end mechanism.

## Open questions

- Exact cost / prestige values (placeholder, to be tuned during
  playtesting).
- What does "take-it-or-leave-it" mean precisely on the Prestige Employee
  market slot if the top card also changes (only one unique exists) — for
  MVP the same card is always shown, no refresh.
- Can opponents buy it as a "budget side effect" just to trigger the end
  game faster? Yes, that is a strategic tool.
