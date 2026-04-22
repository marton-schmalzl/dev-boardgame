# Agents Guide — DEV_GAME

Entry point for AI agents (and human collaborators) working on this project.
Read this before starting any substantive work.

## What is this project?

A board-game (deck-builder) prototype is being developed here. The repository
also contains a React app, but **it is only a visualization tool** — for
previewing cards, not for producing print-ready output. The primary content
is the rules and the card data.

Goal: reach a first hand-testable prototype (MVP). Roadmap and phases:
[`docs/plan/MVP_PLAN.md`](docs/plan/MVP_PLAN.md).

## Canonical sources

| What you're looking for | Where it lives |
|-------------------------|----------------|
| Game rules (single canonical source) | [`docs/design/DESIGN.md`](docs/design/DESIGN.md) |
| Design decision rationale and alternatives | [`docs/design/decisions/`](docs/design/decisions/) (DDR-NNNN files) |
| Things not yet decided / playtest-pending | [`docs/design/open-questions.md`](docs/design/open-questions.md) |
| Roadmap and phases | [`docs/plan/MVP_PLAN.md`](docs/plan/MVP_PLAN.md) |
| Card inventory (audit working sheet) | [`docs/plan/inventory.md`](docs/plan/inventory.md) |
| Current status, checklists | [`docs/plan/progress.md`](docs/plan/progress.md) |
| Why the docs are structured this way | [`docs/plan/SETUP_PLAN.md`](docs/plan/SETUP_PLAN.md) |
| Change log | [`CHANGELOG.md`](CHANGELOG.md) |
| Card source of truth | `src/data/*.tsx` (see `card-data-conventions.mdc`) |

## Deprecated

[`BASE_RULES.txt`](BASE_RULES.txt) and
[`formatted_rules.html`](formatted_rules.html) at the repo root are
**deprecated** — they have historical value for understanding the design
evolution, but **must not be modified**, and **must not be treated as
authoritative**. If you spot a mismatch with DESIGN.md, DESIGN.md wins.

## How to work

Detailed conventions are in the `.mdc` files in
[`.cursor/rules/`](.cursor/rules/). In short:

1. **Before work**: read [`docs/plan/progress.md`](docs/plan/progress.md) to
   see where the project stands and what the next logical step is.
2. **For a new design decision**: create a new DDR in
   `docs/design/decisions/` (see TEMPLATE.md), then update the relevant
   section of DESIGN.md.
3. **For a new card**: the `text` field is the canonical rule (DDR-0011);
   follow `.cursor/rules/card-data-conventions.mdc`.
4. **For any rule / content change**: add an entry to CHANGELOG (under
   `## [Unreleased]`).
5. **After work**: update the relevant checkpoints in
   [`progress.md`](docs/plan/progress.md).

## Out of scope (for now)

- Quality assurance of the React app as a software project (lint, test, CI).
  It just needs to render and show the cards.
- Print-ready layout, cut marks, asset replacement.
- Tabletop Simulator mod, automated packaging.
- Full TypeScript model refactor. The model only changes when the renderer
  or a concrete MVP need requires it.

## Feedback loop

If something is unclear (legacy intent, rationale of a design decision),
**ask back** instead of guessing — especially for mismatches between the
old `BASE_RULES.txt` / `formatted_rules.html` and the current
`src/data/*.tsx`. Recording the intent of legacy decisions is itself
valuable.
