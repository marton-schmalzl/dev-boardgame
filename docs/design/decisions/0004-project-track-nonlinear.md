# DDR-0004 — Non-linear Project Track scoring

- **Status**: Accepted
- **Date**: 2026-04-21 (documented retroactively)
- **Related DDRs**: DDR-0001, DDR-0002

## Context

Classic deck-builders predominantly reward the "thinned deck" strategy:
the smaller your deck, the more consistent your draw, the faster you cycle,
the more you buy. This strategy is often clearly stronger than the "deep
deck, many cards" alternative. Two side effects of that:

- **Reshuffling becomes irrelevant** as a play event. If you cycle fast,
  you see roughly the same cards every turn.
- **Little strategic diversity**: thin decks always win.

The theme also offers a counter-pole: small focused indie shop (fast
releases, small projects) vs. a large bureaucratic enterprise (slow but
deep infrastructure shipping big projects).

## Decision

**The Project Track is a non-linear, back-loaded prestige scale.**

- Every completed Feature gives PROGRESS on the Project Track.
- Early on the Track, every 2-3 PROGRESS = 1 PRESTIGE.
- Around the middle, the rate approaches 1:1.
- Towards the end of the Track, every 1 PROGRESS = several PRESTIGE.
- At Project Release, the player gains the PRESTIGE value of the Track's
  current space, and the marker resets to the starting space.

Project Release happens **if and only if** the player's deck runs out
(during their own turn or in cleanup).

## Consequences

- **Reshuffling becomes a strategic event** — it sends the marker back to
  zero, so "when should I release?" is a real decision.
- **Two viable archetypes**: fast-cycling small shop ("many small releases")
  vs. deep-deck enterprise ("few big releases").
- **Deck size is a strategic dimension**: thin is not always better.
- **The Track scale provides an implicit cap** — at the extreme end the
  growing prestige can either turn into diminishing returns, or keep
  climbing; that is a tuning question.

## Alternatives considered

- **Linear scale**: thin-deck strategy stays dominant.
- **Strongly exponential**: deep deck becomes too dominant, and the game
  can drift into a passive "I don't release until everyone is gassed"
  style.
- **Stepped scale (milestones)**: interesting, but harder to compute on
  the fly — could be revisited post-MVP.

## Open questions

- Exact scale values (see `open-questions.md`). For MVP we work with some
  placeholder defaults and tune via playtesting.
- Maximum length of the Track (without "Government Project" trigger, see
  DDR-0008): for MVP simply: don't run off the end; if someone reaches the
  end, nothing extra happens, the marker stays there.
