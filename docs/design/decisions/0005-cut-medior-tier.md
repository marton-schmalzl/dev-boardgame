# DDR-0005 — Medior tier removed (for MVP)

- **Status**: Accepted (for MVP); revisit flagged
- **Date**: 2026-04-21
- **Related DDRs**: DDR-0002, DDR-0003

## Context

Originally **both** employee categories (Production and Administrative) had
three tiers planned: **Junior / Medior / Senior**. The functional intent
of the three tiers (legacy intent — recorded here so we have something to
return to after MVP):

- **Junior**: easy to hire, better than nothing, but you're not happy if
  you draw one in late game. Early-game option.
- **Medior**: a few are easy to hire even without focusing budget. Stable,
  "normal" workforce; not annoying to draw in late game either. If a
  game-breaking ability is on a Medior, a drawback balances it.
- **Senior**: strategy-defining cards. Hard to fit more than 2-3, even
  with active budget building. Unique abilities, standout stats; "breaks"
  the standard card economy. High-requirement assignments typically need
  one Senior + a few Junior/Medior to back them up.

3 tiers × 2 categories + Prestige Employee = **6 separate decks**, which
is a lot operationally: hard to fit on the table, hard to keep in mind,
hard to set up the market during playtest.

On the **Administrative side**, collapsing tiers is less painful, since
the back-office role is mostly utility / budget — a simpler split (J/S)
is fine.

## Decision

**For MVP, Production employees are also `JUNIOR | SENIOR` only.** The
Medior tier is removed. Existing Medior cards are reclassified (default to
Senior where stat level or ability strength justifies it; otherwise to
Junior if the ability is weak and the stats are low).

The reason for the cut is **strictly operational**, not design-principled:
the 3-tier Production intent is valid and an interesting design space —
it's just that for the MVP phase, reducing the deck count is more
important.

## Consequences

- The market is **5 decks**: J Production, S Production, J Admin, S Admin,
  Prestige Employee.
- The Senior pool grows and gets more variety thanks to the reclassified
  mediors.
- The "stable midgame workforce" tier is **lost** — whether that's a
  pacing problem will only show in playtesting.
- High-requirement assignments will probably be completable with at least
  1 Senior + 2-3 Juniors, or with a full-turn commitment (5 employees) —
  this needs tuning.

## Alternatives considered

- **Keep 3-tier Production, J/S Admin**: 5 decks (Junior/Medior/Senior
  Production + Junior/Senior Admin) + Prestige = 6 decks. Brings the old
  problem back.
- **2-tier on both sides (current decision)**: 4 employee decks + Prestige
  = 5 decks. Manageable.
- **1-tier Production (no Junior/Senior, just "Production")**: too much
  variance, hard to organize ability balance into layers.

## Open questions

- **Post-MVP**: should the Medior tier be brought back for Production,
  either as a separate deck or mixed into the Junior/Senior decks with
  a "medior" marker? This will be decided based on playtest experience.
  → Moves into `open-questions.md`.
