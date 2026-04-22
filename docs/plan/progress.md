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

- [ ] Setup section usability check
- [ ] Every placeholder value moved into `open-questions.md`
- [ ] Every section references the relevant DDR

## Phase 2 — Card content audit

See: [`inventory.md`](inventory.md)

- [ ] Production employees walked through
- [ ] Admin employees walked through
- [ ] Items walked through
- [ ] Features walked through
- [ ] Technologies walked through

## Phase 3 — New content

- [ ] Intern cards finalized
- [ ] CEO ability pinned down
- [ ] Project Track placeholder scale
- [ ] Prestige Employee card concretized

## Phase 4 — Technology rework

- [ ] Every tech's top half is standalone meaningful
- [ ] Duplicate `T-017` cardNumber fixed

## Phase 5 — App adjustments

- [ ] `src/App.tsx` — starter section + J/S split
- [ ] `TechnologyCard` — divider emphasized
- [ ] Empty `photoSrc` and duplicate `cardNumber` warnings handled
- [ ] Type errors fixed

## Playtest #1

- [ ] Played
- [ ] Lessons captured in `open-questions.md` and new DDRs
