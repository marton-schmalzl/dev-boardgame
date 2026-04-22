# DDR-0011 — Effect enum frozen; card text is canonical

- **Status**: Accepted
- **Date**: 2026-04-21
- **Related DDRs**: DDR-0006 (sector enum dead code), DDR-0007 (hobby enum
  dead code)

## Context

`src/model/cards/Effect.ts` defines an `EffectType` union type that tries
to enumerate every possible card effect: `BUDGET`, `KNOWLEDGE`,
`SCOUT_CONTRACTS`, `BUY_TO_DECK`, `SET_KNOWLEDGE_REQ`, `STORY_POINT`,
`HIRE_WITH_MAX_COST_TO_TOP`, many-many values.

The concept would be good for a **runnable rules engine** (Tabletop
Simulator scripted setup, or a "digital playtest" tool). But currently:

- There is no rules engine, no validation. The enum is purely a declarative
  tag.
- **New card = new enum value** is the workflow. Whoever designs a new
  card has to write code as well. This slows iteration, and the enum in
  code doesn't actually validate anything.
- On the card the **`text` field** is the actual rule the player reads
  and applies.

In the current data files it is common for `effects` and `text` to say
the same thing redundantly, and they sometimes drift apart.

## Decision

**The `Effect` / `EffectType` system is frozen.** During the MVP phase:

- **No new enum values are created.**
- For new cards we write **only the `text` field**; the card text is the
  canonical rule.
- The `text` field comes with conventions (see
  `.cursor/rules/card-data-conventions.mdc`): e.g., "consistent text for
  cost modifiers", "passive vs. active marker".
- Existing `effects` and `triggeredAbilities` fields **may stay** (the
  renderer uses them), but are not required on new cards, and where they
  are missing it is not an error.

## Consequences

- **Faster iteration**: a new card = one text field + stats.
- **No type safety** for effects — but there never really was any.
- `Effect.ts` and `TriggeredAbility.ts` **live on as dead code** because
  of the existing renderer; we don't refactor them now.
- A card's meaning is **read only from the `text` field**; if `text` and
  `effects` contradict each other, `text` wins.
- If we ever get to a runnable engine (TTS, web playtest), we will revisit
  the enum or replace it with a more structured DSL — but **not in the
  MVP phase**.

## Alternatives considered

- **Aggressively expanding the Effect enum**: every new card → new enum
  value. Slow; cheap individually, large friction in aggregate.
- **Structured effect DSL (JSON-ish)**: would be interesting toward
  TTS / engine, but is overengineering for MVP.
- **Card text generated from `effects`**: nice in principle, but "every
  effect text needs a code-side format rule" → also overengineering for
  iteration.

## Open questions

- How do we document the **standard icons and shorthand** used on cards
  (BUDGET 💲, KNOWLEDGE ⚙️, CREATIVITY 💡, ORGANIZATION 🗒️, PRESTIGE ⭐)?
  → A "card text style guide" will live as part of
  `.cursor/rules/card-data-conventions.mdc`.
