# DDR-0010 — Technology: private vs. open-source, "cover-half" mechanic

- **Status**: Accepted
- **Date**: 2026-04-21
- **Related DDRs**: DDR-0003 (shared markets)

## Context

Unlike Features, Technology assignments give **ongoing** effects — it is
appropriate that they represent your company's "tech stack", continuously
in play until the end of the game.

Two thematic questions came up:

1. **Keep it private vs. publish it (open source)**: in the real world a
   tech company either keeps a closed source ("competitive edge"), or
   publishes ("goodwill, recruiting brand, community").
2. **Hype dies fast**: freshly published open source projects buzz, but
   after a few months only the basic principle remains; the details fade.

The legacy rules already mentioned the "Open Source Technology" idea, but
the mechanic wasn't fully cleaned up. This DDR pins it down precisely.

## Decision

**Every Technology card consists of two persistent effect blocks: TOP and
BOTTOM.** The two blocks are drawn on a visually halved card with a clear
divider.

A completed Technology can be placed in two ways:

### Private development
- The card goes **into your own play area**.
- **Both effects (TOP + BOTTOM) are active**, but **only for you**.
- Both bonuses apply on every subsequent turn of yours.

### Public development (open-source publish)
- The card goes into the **shared Open Source Technology column**.
- You receive an **immediate prestige bonus** (one-shot).
- The published technology grants its bonus to **everyone**.
- **Cover-half stacking**:
  - The current most-recent open-source tech has **both effects active**,
    for everyone.
  - When a new open-source arrives, it is **placed on top** of the
    previous most-recent so as to **cover its bottom half**.
  - Only the **TOP half** of a covered tech remains active (still for
    everyone).
  - After several generations, only the most recent tech's BOTTOM half
    is visible in the column; older techs only contribute their TOP halves.

Thematically: **"the hype dies down"** — the freshly published tech is in
focus, and older ones recede into the background.

Mechanically: **caps the depth of the active global effect stack.**

### Design requirements for Technology cards

- The **TOP half** must be a **standalone, self-consistent ongoing
  effect** (it is the part that survives long-term).
  - **Empty top ("do nothing") is permitted** — see clarification
    below.
- The **BOTTOM half** is an **optional addition**: an effect that adds
  value while private, or carries the hype while freshly published.
- The **combination** of the two halves should generate a real "keep or
  publish?" decision.

### Clarification — empty top half is allowed (added 2026-04-22, Phase 4 audit)

A Technology card may legitimately have **no TOP effect** (an empty
"do-nothing" top half). It still satisfies the "standalone, self-
consistent" requirement: once published as open source and eventually
covered, the card simply contributes nothing — i.e., the hype dies
down completely. This is thematically valid: not every published
technology has a lasting global impact.

Cards designed this way trade higher BOTTOM-half power (active while
private, or while most-recent in the open-source column) for zero
long-term contribution after being covered.

Existing examples in the audit: `T-001` Microtransactions, `T-011`
Reusable UI components, `T-012` Logging framework.

## Consequences

- The **Open Source Technology zone** becomes a shared element on the
  middle of the table. Players see what is globally active.
- **Tech card design carries a constraint**: top and bottom must each
  read independently; top + bottom together must justify private retention.
- **The current `Technology` model field names (`topEffects`,
  `topDescription`, `bottomEffects`, `bottomDescription`) STAY** — the
  semantics is now nailed down. (Per DDR-0011 we don't refactor needlessly.)
- During the audit of existing tech cards, every card's top half must be
  checked for being a standalone ongoing effect (e.g., T-007 "+⭐ end of
  game" is not currently persistent and needs rework). See
  `docs/plan/inventory.md`.
- The `TechnologyCard` renderer needs an emphatic divider line so that on
  print it is unambiguous where to cover.

## Alternatives considered

- **Open source gives prestige and the full ongoing effect to everyone,
  no stack limit**: too many active global effects too quickly, disrupts
  play.
- **Open source = prestige only, no shared ongoing effect**: less
  interactive, weakens the "goodwill" thematic hook.
- **Cover bottom INSTEAD of half**: the new tech fully covers the old
  → the old immediately leaves play. Simpler, but loses the "the hype
  dies but the basic principle remains" subtlety.

## Open questions

- The value of **immediate prestige** on open-source publish: **resolved
  during Phase 4 audit (2026-04-22)** — `openSourcePrestige` is now a
  **required** field on the `Technology` interface, with per-card values
  seeded roughly proportional to the card's required-skill total
  (cheapest techs ≈ 1, mid ≈ 3, hardest ≈ 5; small premium for the
  highest-skill cards). The exact values stay tunable through playtest;
  see `open-questions.md` for the placeholder mapping.
- Is the private/public choice reversible? Default: no, decided once and
  stays. (Worth pinning down in the rulebook.)
- Exact visual standard for the halving and the physical overlap ratio
  vs. card size (a card-design detail, not a rules question).
