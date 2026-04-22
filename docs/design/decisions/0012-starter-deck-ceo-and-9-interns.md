# DDR-0012 — Starter deck: 1 CEO + 9 interns (Dev/HR mix)

- **Status**: Accepted (structure); intern ratio is a placeholder
- **Date**: 2026-04-21
- **Related DDRs**: DDR-0001, DDR-0002

## Context

Classic deck-builders typically start with a 10-card starter deck
(Dominion: 3 Estate + 7 Copper). This ensures that:

- The 5-card opening hand is always drawable (at least two cycles in the
  whole deck).
- Both "resource axes" (here: workforce and budget) are represented from
  the start.
- Meaningful time passes until the first Project Release (= the deck
  fully cycling).

Thematically, the starter deck is **"your freshly founded company"**: the
CEO (you) plus a few interns. This serves both the metaphor (DDR-0002)
and the genre convention (DDR-0001).

The current `src/data/starter_employees.tsx` has 1 CEO + 1 HR Intern + 1
Dev Intern (only 3 cards) — not enough for deck-builder pacing (5 cards
to draw!).

## Decision

**Each player's starter deck: 1 CEO + 9 interns (10 cards total).**

- **CEO**: 1 unique card per player (everyone gets the same template;
  variant CEOs may come post-MVP). Senior-level stats, possibly a light
  ability (e.g., "look at the top 3 cards of a contract deck").
- **Intern**: 9 cards, mixed:
  - **Dev Intern**: 1/1/1 stat, cost 0, no ability.
  - **HR Intern**: +1 budget, cost 0, 0 stat (or minimal).
  - Exact ratio is a **placeholder**, current default: **3 Dev + 6 HR**
    (more early +1 BUDGET for hire flow); see `src/lib/constants.ts` and
    `open-questions.md` — still tunable in playtest.

## Consequences

- A 5-card hand is drawable from the start.
- Two cycles in the full deck → first Project Release ~2 turns in, if
  every hire goes to discard on purchase (standard deck-builder pacing).
- Starting budget baseline skews higher (~6 HR in deck → more +1 BUDGET
  in early hands vs. the old 5 Dev / 4 HR mix).
- Starting stat baseline from Dev interns is lower in the deck (3 Dev ×
  1/1/1); expect fewer raw stats until hires land.
- First hires can focus either on better workforce (Production Senior)
  or on budget acceleration (Admin Senior).

## Alternatives considered

- **1 CEO + 5 intern (6-card starter)**: faster cycle, but the opening
  hand is almost the entire deck — less deck-management interest.
- **1 CEO + 9 identical interns**: simpler, but loses the two-resource-
  axis representation.
- **2-3 CEOs + interns**: thematically odd ("multiple CEOs?"), and the
  CEO is designed as unique.

## Open questions

- **Exact Dev/HR ratio** (currently 3/6 in data; was 5/4). One fixed ratio
  for MVP, tunable in playtest. → `open-questions.md`.
- Should the CEO's ability be active for MVP, or is a simple "+2 budget,
  +1/1/1 stat" card enough? If active, what exactly? → `open-questions.md`.
- Two CEO variants for asymmetric play (post-MVP).
