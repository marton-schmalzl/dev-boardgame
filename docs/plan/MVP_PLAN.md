# MVP Plan — Roadmap to the first playtest

Goal: an internally consistent rule set + minimum card content allowing a
**2-3 player, ~60 minute test game** (with hand-cut / handwritten cards,
no print-ready layout).

Source of actual design decisions: [`../design/DESIGN.md`](../design/DESIGN.md).
Rationale for infrastructure and workflow: [`SETUP_PLAN.md`](SETUP_PLAN.md).
Current state: [`progress.md`](progress.md).

---

## Phases

### Phase 1 — Finalize DESIGN.md (blocking)

The first version of DESIGN.md is created during setup, but reaching
playtest-ready needs polish:

- Every section cross-checked with the referenced DDRs.
- Every "placeholder" value (project track scale, thresholds, slot counts)
  explicitly flagged and moved into
  [`open-questions.md`](../design/open-questions.md).
- Setup section is actually usable at the table (not an abstract
  description).

### Phase 2 — Card content audit + inventory

Working tool: [`inventory.md`](inventory.md).

- **Production employees** (`src/data/employees.tsx` `employees`):
  reclassify every card to `JUNIOR | SENIOR` (the `MEDIOR` tier is gone).
  Target: ~6-8 unique Juniors + ~6-8 unique Seniors.
- **Admin employees** (`src/data/employees.tsx` `backoffice`): every card
  gets a `level` field. Tina/Alice/Ahmed → Junior; Charles/Eve/Donna/
  Francis/Grace/Haruto → Senior (initial proposal, tunable).
- **Items** (`src/data/items.tsx`): canonize text, fix typos
  ("Energy drinnk" → "Energy drink", etc.).
- **Features** (`src/data/functional_contracts.tsx`): keep ~20-25, remove
  the `sector` field. Fix typos.
- **Technologies** (`src/data/tecnical_contracts.tsx`): cleanup under the
  new open-source mechanic — every card's top half must be a standalone,
  meaningful, persistent effect; the bottom half is active only privately
  or as the most recent open-source. Fix the duplicate `T-017`
  cardNumber. Target: ~10-12 unique techs.
- **Prestige Employee**: 1 unique card (cost X, +Y prestige end-of-game),
  ~10 copies. A single market slot.

The inventory matrix records: card × status × copy count × notes.

### Phase 3 — Create new content

- **Intern cards** in `src/data/starter_employees.tsx`:
  CEO + 9 interns (Dev / HR ratio: tunable, initial proposal 5/4).
- **CEO card** ability finalized (the current "top 3 contracts, purge 1"
  text either brought to a concrete end-state or dropped for MVP).
- **Project Track** placeholder scale laid out as a reference card
  (values: `open-questions.md`).
- **Prestige Employee** card concretized.

### Phase 4 — Clean up Technology cards for the new open-source mechanic

- Field names on the `Technology` model (`topEffects/topDescription`,
  `bottomEffects/bottomDescription`) **stay**. Only the semantics is
  pinned: top = always active, bottom = only private or most-recent
  open-source.
- Every tech card cross-checked: is the top half a standalone meaningful
  ongoing effect (e.g., T-007 "+⭐ at end of game" is currently not
  persistent → reworked or reclassified).
- Duplicate `T-017` cardNumber fixed.
- Target: ~10-12 unique techs, 2× duplicated → ~20-24 cards.

### Phase 5 — Minimal app-level adjustments

- `src/App.tsx`: render the `starter` section; Junior/Senior split if
  useful.
- `src/components/TechnologyCard/TechnologyCard.tsx`: visually emphasized
  divider line (must be unambiguous on print where to cover).
- Empty `photoSrc` fields and duplicate `cardNumber` lints fixed.
- Any type errors after the above changes fixed.

---

## Phase dependencies

```mermaid
flowchart LR
    P1[P1: Finalize DESIGN.md] --> P2[P2: Audit + inventory]
    P1 --> P4[P4: Tech cleanup]
    P2 --> P3[P3: Intern + CEO + Track + Prestige]
    P4 --> P3
    P3 --> P5[P5: App adjustments]
    P5 --> Test[First playtest]
```

---

## Definition of Done for MVP

1. `DESIGN.md` standalone is enough that an unfamiliar player can set up
   and play a game (with the placeholder values).
2. The `inventory.md` table tells you exactly which cards to print and how
   many copies — and they all exist in `src/data/`.
3. The React app loads and shows every MVP card with readable text
   (visual quality not required).
4. The `## [Unreleased]` section of `CHANGELOG.md` reflects every
   substantive change made on the way to MVP.

---

## Out of scope for MVP

- Print layout, cut marks, asset replacement.
- Tabletop Simulator mod.
- Effect enum / TriggeredAbility model full refactor.
- Industry / Sector, Hobby, Government Project, 50-budget instawin (see
  the relevant DDRs).
- Multiple Prestige Employee variants.
- Balance tuning (that's the playtest's job).
