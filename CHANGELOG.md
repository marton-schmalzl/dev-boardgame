# Changelog

Substantive changes to the project, in chronological order — Keep a Changelog
style. Every game design or content change should get an entry here.

Format:
- All new changes go under `## [Unreleased]`.
- Groups: `Added`, `Changed`, `Removed`, `Deprecated`, `Fixed`,
  `Decided` (new DDR), `Open Question` (new open question).
- When a "release" (e.g. a playtest milestone) is reached, the `Unreleased`
  heading can be renamed to a version / date, and a new `Unreleased` opens.

---

## [Unreleased]

### Added

- `docs/` directory structure: `design/`, `design/decisions/`, `plan/`.
- `docs/design/DESIGN.md` — first synthesis version of the canonical rules.
- `docs/design/open-questions.md` — playtest-pending open questions with
  placeholder defaults.
- `docs/design/decisions/TEMPLATE.md` — DDR template.
- DDR backfill (12 records):
  - DDR-0001 — Deck-builder shell as the genre.
  - DDR-0002 — Your deck is your company.
  - DDR-0003 — Shared markets (hire, item, assignment).
  - DDR-0004 — Non-linear Project Track scoring.
  - DDR-0005 — Medior tier removed (for MVP).
  - DDR-0006 — Industry / Sector removed (for MVP).
  - DDR-0007 — Hobby removed (for MVP).
  - DDR-0008 — Government Project + 50-budget instawin removed.
  - DDR-0009 — Prestige Employee as a Province-style money dump.
  - DDR-0010 — Technology private vs. open-source, "cover-half" mechanic.
  - DDR-0011 — Effect enum frozen; card text is canonical.
  - DDR-0012 — Starter deck: 1 CEO + 9 interns.
- `docs/plan/SETUP_PLAN.md` — meta-infrastructure plan.
- `docs/plan/MVP_PLAN.md` — five-phase roadmap to the first playtest.
- `docs/plan/inventory.md` — card inventory matrix skeleton.
- `docs/plan/progress.md` — living state checklist.
- `AGENTS.md` — entry point for agents and collaborators.
- `.cursor/rules/` — 5 MDC files (design source-of-truth, card-data
  conventions, decision-recording, changelog-discipline, plan-execution).

### Deprecated

- `BASE_RULES.txt` — canonical-source role handed over to DESIGN.md. A
  banner is added at the top.
- `formatted_rules.html` — same as above.

### Decided

All DDR-0001 … DDR-0012 backfills — retroactively formalized earlier informal
design decisions, supplemented with legacy-intent details captured from the
designer (e.g., the original purpose of the Medior tier, the anti-runaway
goal of Government Project).

### Changed

- All previously written project documentation translated to English; English
  is now the working language for project docs going forward.
