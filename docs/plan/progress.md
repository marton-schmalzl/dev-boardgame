# Progress

Living checklist. Every agent (and developer) should look here before
starting work to see where the project stands; after work, update the
relevant items.

Convention: `[ ]` open, `[~]` in progress, `[x]` done, `[-]` dropped /
out of scope.

---

## Phase 0 — Workflow & docs infrastructure ✅

- [x] Folder structure: `docs/design/decisions`, `docs/plan`, `.cursor/rules`
- [x] `docs/plan/SETUP_PLAN.md`
- [x] `docs/plan/MVP_PLAN.md`
- [x] `docs/plan/inventory.md` (skeleton)
- [x] `docs/plan/progress.md` (this file, skeleton)
- [x] `docs/design/decisions/TEMPLATE.md`
- [x] DDR backfill (see below in detail)
- [x] `docs/design/open-questions.md`
- [x] `docs/design/DESIGN.md` (first version)
- [x] `AGENTS.md`
- [x] `CHANGELOG.md`
- [x] `.cursor/rules/design-source-of-truth.mdc`
- [x] `.cursor/rules/card-data-conventions.mdc`
- [x] `.cursor/rules/decision-recording.mdc`
- [x] `.cursor/rules/changelog-discipline.mdc`
- [x] `.cursor/rules/plan-execution.mdc`
- [x] `BASE_RULES.txt` deprecation banner
- [x] `formatted_rules.html` deprecation banner
- [x] Self-check: links and references
- [x] Translate all project documentation to English

### DDR backfill (under Phase 0)

- [x] 0001 — Deck-builder shell as the genre
- [x] 0002 — Player deck = your company metaphor
- [x] 0003 — Shared assignment & item market
- [x] 0004 — Project Track non-linear scoring (deep-deck reward)
- [x] 0005 — Cut: Medior tier
- [x] 0006 — Cut: Industry / Sector
- [x] 0007 — Cut: Hobby
- [x] 0008 — Cut: Government Project + 50-budget instawin
- [x] 0009 — Prestige Employee as a Province-style money-dump
- [x] 0010 — Technology private vs public open-source mechanic (cover-half)
- [x] 0011 — Effect enum frozen; card text is the canonical rule
- [x] 0012 — Starter deck = 1 CEO + 9 interns (Dev/HR mix)

---

## Phase 1 — Finalize DESIGN.md

- [x] Setup section usability check (rewritten as a self-contained,
  table-ready 10-step procedure with inline slot counts and explicit
  starting space).
- [x] Every placeholder value moved into `open-questions.md` (each
  placeholder in DESIGN.md now has an inline link to its OQ entry; no new
  placeholders surfaced — all already covered).
- [x] Every section references the relevant DDR (added missing DDR-0003 /
  DDR-0008 / DDR-0009 / DDR-0010 / DDR-0012 references in §3 Setup, §5
  Turn structure, §7 End game).

## Phase 2 — Card content audit

See: [`inventory.md`](inventory.md)

- [x] Production employees walked through (3 MEDIOR cards reclassified
  → JUNIOR/SENIOR; final balance 8 + 8; copy counts assigned).
- [x] Admin employees walked through (every card now carries a `level`
  field; `Person.level` made optional in the model).
- [x] Items walked through (typos fixed; copy counts assigned).
- [x] Features walked through (typos fixed; 5 candidate-cuts flagged
  to land at the ~25-card target; sector kept as optional inactive
  field per DDR-0006).
- [x] Technologies walked through (rolled into Phase 4 below — all 18
  source entries audited, statuses + copy counts in `inventory.md`).

## Phase 3 — New content

- [x] Intern cards finalized (HR Intern: +1 BUDGET wired to match
  canonical text; Dev Intern: empty effects/text confirmed; CEO `effects`
  populated with BUDGET / SCOUT_CONTRACTS / PURGE_CONTRACT to match
  canonical text. Comment-out cleanup done.)
- [x] CEO ability pinned down (option A: kept current card text, see
  [open-questions → CEO ability for MVP](../design/open-questions.md#ceo-ability-for-mvp)).
- [x] Project Track placeholder scale (laid out as a hand-drawn shared
  reference card; see DESIGN.md §4 → "Reference card layout"; values
  remain the open-questions placeholder).
- [x] Prestige Employee card concretized (`src/data/prestige_employees.tsx`,
  flavor name "Someone's Nephew"; cost 7, +5 prestige, 10 copies; see
  DDR-0009).
- [x] New Technology cards designed (T-019 Mobile App, T-020 Search /
  SEO Indexing, T-021 Recruiting Automation, T-022 A/B Testing
  Framework, T-023 Tech Blog, T-024 Open Source License — 6 new uniques,
  bringing active total from 15 → **21**, in the 20-24 target band).
  T-021 was authored from a user-supplied design (originally "Headhunting
  Database", renamed to avoid collision with T-016).

## Phase 4 — Technology rework

- [x] Every tech's top half is standalone and self-consistent (DDR-0010
  clarified: empty "do-nothing" top half is allowed). T-004 and T-007
  did not meet the bar — commented out in source.
- [x] Duplicate `T-017` cardNumber fixed (Spreadsheet macros → T-018;
  Custom font keeps T-017).
- [x] Description ↔ data mismatches resolved: T-013 prestige value
  2 → 3, T-017 descriptions rewritten to match data (DDR-0011).
- [x] T-006 Cloud Infrastructure -2 BUDGET completion penalty dropped
  (was a bug, no other tech has a completion cost).
- [x] T-010 renamed "Design handbook" → "Design system" (avoid name
  collision with the item of the same name).

## Phase 5 — App adjustments

- [ ] `src/App.tsx` — starter section + J/S split
- [ ] `TechnologyCard` — divider emphasized
- [ ] Empty `photoSrc` and duplicate `cardNumber` warnings handled
- [ ] Type errors fixed

## Playtest #1

- [ ] Played
- [ ] Lessons captured in `open-questions.md` and new DDRs
